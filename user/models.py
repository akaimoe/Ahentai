from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser

# Create your models here.
class UserInfo(AbstractUser):
    phone = models.CharField(max_length=11, blank=True)
    sex = models.CharField(max_length=1, blank=True)
    birth = models.DateField(blank=True, auto_now_add=True)
    xp = models.CharField(max_length=50, blank=True)
    game = models.CharField(max_length=20, blank=True)