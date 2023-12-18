from django.db import models

# Create your models here.
class comic(models.Model):
    name = models.CharField(max_length=120, blank=True)
    tag = models.CharField(max_length=80, blank=True)
    language = models.CharField(max_length=10, blank=True)
    author = models.CharField(max_length=40, blank=True)
    introduction = models.CharField(max_length=999, blank=True)
    upload_user = models.BigIntegerField()
    upload_date = models.DateTimeField()
    reading_volume= models.IntegerField(default=0, blank=True)
    like_volume = models.IntegerField(default=0, blank=True)
    collect_volume = models.IntegerField(default=0)
    cover = models.ImageField(upload_to='cover/')
    content = models.CharField(max_length=100, blank=True)


class user_like(models.Model):
    user = models.ForeignKey('user.UserInfo',on_delete=models.CASCADE)
    comic = models.ForeignKey('comic',on_delete=models.CASCADE)


class user_collect(models.Model):
    user = models.ForeignKey('user.UserInfo',on_delete=models.CASCADE)
    comic = models.ForeignKey('comic',on_delete=models.CASCADE)


class user_history(models.Model):
    user = models.ForeignKey('user.UserInfo',on_delete=models.CASCADE)
    comic = models.ForeignKey('comic',on_delete=models.CASCADE)
