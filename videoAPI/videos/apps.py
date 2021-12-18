from django.apps import AppConfig


class VideosConfig(AppConfig):
    name = 'videos'

    def ready(self):
        print("Scheduler running")
        from .scheduler import updater
        updater.start()
