"""Ahentai URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import re_path as url
from django.contrib import admin
from . import views,login,register
from django.urls import include
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('runoob/', views.runoob),
    path('admin/', admin.site.urls),
    path('login/', login.login),
    path('register/', register.register),
    path('index/', views.index),
    path('', views.index),
    path('logout/', views.logout),
    # path('captcha/', include('captcha.urls')),
    path('updateinfo/', views.updateinfo),
    path('show/<int:comicId>/', views.detail_page),
    path('show/<int:comicId>/content/', views.showdata),
    path('collect/add/', views.collect_add),
    path('like/add/', views.like_add),
    path('space/', views.space),
    path('passwordchange/', views.password_change),
    path('test/', views.test),
    path('search/', views.search),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
