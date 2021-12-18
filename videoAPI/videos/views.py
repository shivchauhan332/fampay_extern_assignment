from .models import *
from .serializers import YoutubeVideoSerializer
from rest_framework.generics import ListAPIView
from rest_framework.pagination import PageNumberPagination
import yaml
import requests

# create views here


class YoutubeVideoAPIView(ListAPIView):
    queryset = YoutubeVideo.objects.all()
    serializer_class = YoutubeVideoSerializer
    pagination_class = PageNumberPagination
    # def get_queryset(self):
    #     data = YoutubeVideo.objects.all()
    #     return data


class Helper:
    def __init__(self):
        self.api_key_index = 0
        # Load the api_key.yml file
        stream = open('api_key.yml', 'r')
        self.api_keys = yaml.load(stream, yaml.SafeLoader)['apiKeys']
        self.reload_count = 0

    def get_request(self):
        api_url = "https://www.googleapis.com/youtube/v3/search"

        params = {
            'part': 'snippet',
            'q': 'anime',
            'type': 'video',
            'order': 'date',
            'publishedAfter': '2020-01-01T00:00:00Z',
            'maxResults': 15,
            'key': self.api_keys[self.api_key_index]
        }
        response = requests.get(api_url, params=params)

        try:
            response.raise_for_status()
            self.reload_count = 0
            return response.json()
        except:
            # Check if quota is exhausted, then change api key
            if response.json()["error"]["errors"][0]["reason"] == "quotaExceeded":
                self.api_key_index = (
                    self.api_key_index+1) % len(self.api_keys)
                self.reload_count = self.reload_count+1
                if(self.reload_count > 1):
                    print("All available API keys are exhausted, add more API keys")
                    return None
                return self.get_request()
            else:
                print(
                    "Something went wrong while fetching data from youtube API, printing response...")
                print(response)
                return None

    def save_data(self):
        data = self.get_request()
        if data is not None:
            try:
                objects = data["items"]
                for object in objects:
                    object_snippet = object["snippet"]
                    video_data = {
                        'video_title': object_snippet['title'],
                        'description': object_snippet['description'],
                        'publishing_datetime': object_snippet['publishedAt'],
                        'thumbnail_url_s': object_snippet['thumbnails']['default']['url'],
                        'thumbnail_url_m': object_snippet['thumbnails']['medium']['url'],
                        'thumbnail_url_h': object_snippet['thumbnails']['high']['url'],
                        'channel_title': object_snippet["channelTitle"]}
                    serializer = YoutubeVideoSerializer(data=video_data)
                    if serializer.is_valid():
                        serializer.save()
            except:
                print("Unable to save data")
                pass
