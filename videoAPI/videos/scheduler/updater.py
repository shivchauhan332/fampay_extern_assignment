from apscheduler.schedulers.background import BackgroundScheduler
from videos.views import Helper
def start():
  scheduler = BackgroundScheduler()
  helper = Helper()
  scheduler.add_job(helper.save_data, "interval", seconds=10,id="youtube_069",replace_existing=True)
  scheduler.start()

