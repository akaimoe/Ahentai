from django.http import HttpResponse
from django.shortcuts import render,redirect
from django.views.decorators import csrf
from user.models import UserInfo
from django.contrib.auth.hashers import make_password,check_password
# from django.contrib.auth.models import User
from django.contrib import auth
# from django.contrib.auth.forms import AuthenticationForm
# from captcha.fields import CaptchaField

def login(request):
    output = {}
    if request.POST:
        usr = request.POST['login_username']
        psw = request.POST['login_password']
        keep_str = request.session.get("keep_str")
        user_obj = auth.authenticate(username=usr, password=psw)
        try:
            userinfo = UserInfo.objects.get(username=usr)
            print(userinfo.password)
            if (check_password(psw,userinfo.password)):
                print("密码正确")
                auth.login(request, user_obj)
                path = request.GET.get("next") or "/index/"
                print(path)
                return redirect(path)
                # output = "密码正确"
                # return render(request, 'login.html', {'rlt': output})
            else:
                print("密码错误")
                output = "账号或密码错误"
                return render(request, 'login.html', {'rlt': output})
        except:
            print("未找到用户")
            output = "账号或密码错误"
            return render(request, 'login.html', {'rlt': output})
        print(request.POST['login_password'])
        print(output)
    # return render(request, "post.html", ctx)
    return render(request, 'login.html')


# class DadminAuthenticationForm(AuthenticationForm):
#     captcha = CaptchaField()