from rest_framework import serializers
from .models import YoutubeVideo


class YoutubeVideoSerializer(serializers.ModelSerializer):

    class Meta:
        model = YoutubeVideo
        fields = ['id', 
                  'video_title',
                  'description',
                  'publishing_datetime',
                  'thumbnail_url_s',
                  'thumbnail_url_m',
                  'thumbnail_url_h',
                  'channel_title', ]
