from django.http import HttpResponse
from django.shortcuts import render
from django.views.decorators import csrf
from user.models import UserInfo
from django.contrib.auth.hashers import make_password,check_password

def register(request):
    succ_create = {}
    errer_code = {}
    succ_create = "账号创建成功"
    if request.POST:
        username = request.POST["register_username"]
        password = request.POST["register_password"]
        password_retry = request.POST["register_password_retry"]
        sex = request.POST["sex"]
        if(password != password_retry):
            errer_code = "密码不相同"
            return render(request, 'register.html', {'rlt':errer_code})
        try:
            UserInfo.objects.get(username=username)
            errer_code = "用户名已被占用"
            return render(request, 'register.html', {'rlt':errer_code})
        except:
            try:
                UserInfo.objects.create_user(username=username,password=password,sex=sex)
                return render(request, 'login.html', {'rlt':succ_create})
            except:
                errer_code = "賬號创建失败"
                return render(request, 'register.html', {'rlt': errer_code})
    return render(request, 'register.html')