from django.db import models


# Create your models here.


class YoutubeVideo(models.Model):
    video_title = models.CharField(default="No Title", max_length=264)
    description = models.CharField(default="No Description", max_length=500, null=True, blank=True)
    publishing_datetime = models.DateTimeField()
    thumbnail_url_s = models.URLField(max_length=200, unique=True)
    thumbnail_url_m = models.URLField(max_length=200, unique=True)
    thumbnail_url_h = models.URLField(max_length=200, unique=True)
    channel_title = models.CharField(default="No Title", max_length=264)
    