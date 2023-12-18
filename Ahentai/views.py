import os.path

from django.http import HttpResponse
from django.shortcuts import render,redirect
from django.contrib.auth.decorators import login_required
from django.contrib import auth
from django.contrib.auth.models import User
from comic import models
from django.utils import timezone
from comic.models import comic, user_like, user_collect, user_history
from django.contrib.auth.hashers import make_password,check_password
from user.models import UserInfo
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import get_user_model
User = get_user_model()

def hello(request):
    return HttpResponse("Hello world ! ")

def runoob(request):
    context          = {}
    test2 = "test2"
    test3 = "test3"
    # test2['test2'] = "test2"
    # test3['test3'] = "test3"
    context['hello'] = 'Hello World!'
    # all = context+test2+test3
    return render(request, 'runoob.html', {'test2':test2,'test3':test3})

def login(request):
    pass
    return render(request,'login.html')

def register(request):
    pass
    return render(request,'register.html')

@login_required
def index(request):
    # return HttpResponse("是index页面，不是茵蒂克斯！")
    user = request.user
    username = user.username
    # psw = user.password
    comic_data_ls = comic.objects.values('cover','name','id','author','tag', 'like_volume', 'collect_volume', 'reading_volume')
    if request.GET:
        keys = request.GET['keys']
        # return render(request,'search.html', keys)
        return HttpResponse(keys)
    path_info = request.path_info
    # print(comic_data_ls)

    # comic_cover_ls = [item['cover'] for item in comic_data_ls]
    # print(comic_cover_ls)
    return render(request,'index.html',{'username':username,
                                        'comic_data_ls':comic_data_ls,
                                        'path_info':path_info})

@login_required
def logout(request):
    ppp = auth.logout(request)
    print(ppp) # None
    print("退出登陆")
    return render(request, 'login.html', {'rlt': '已退出登陸'})

@login_required
def updateinfo(request):
    user = request.user
    if request.POST:
        img=request.FILES.getlist('content')
        new_comic = models.comic(
            name=request.POST['comicname'],
            tag=request.POST['tag'],
            author=request.POST['author'],
            introduction=request.POST['introduction'],
            upload_user = user.id,
            upload_date=timezone.now(),
            cover=request.FILES.get('cover'),
        )
        new_comic.save()
        path = 'media/content/' + str(new_comic.id) + '/'
        new_comic.content = path
        new_comic.save()

        for f in img:
            if not os.path.exists(path):
                os.makedirs(path)
            save_path = open(os.path.join(path+f.name), 'wb')
            for chunk in f.chunks():
                save_path.write(chunk)
            save_path.close()

        return HttpResponse('上传成功！')

        # files = request.FILES.getlist('photo')
        # for f in files:
        #     new_img=models.comic(
        #         name = request.POST
        #     )

    return render(request, 'updateinfo.html')

@login_required
def showdata(request, comicId):
    user = request.user
    comic_data = comic.objects.get(id=comicId)
    cover_path = comic_data.cover
    try:
        userHistory = user_history.objects.get(user=user, comic=comic_data)
        userHistory.delete()
        comic_data.reading_volume -= 1
    except:
        print('new')
    userHistory = user_history(user=user, comic=comic_data)
    userHistory.save()
    comic_data.reading_volume += 1
    comic_data.save()
    # print(type(cover_path))
    # cover_path = "../static/"+cover_path
    content_path = comic_data.content
    file_ls = os.listdir(content_path)
    file_ls.sort()
    for i in range(len(file_ls)):
        file_ls[i] = "../"+content_path+file_ls[i]
    return render(request, "show.html", {'cover':cover_path, 'views_list':file_ls})

@login_required
def detail_page(request, comicId):
    user = request.user
    comic_data = comic.objects.get(id=comicId)
    cover_path = comic_data.cover
    name = comic_data.name
    tag = comic_data.tag
    path_info = request.path_info
    introduction = comic_data.introduction
    author = comic_data.author
    upload_user = User.objects.get(id=comic_data.upload_user).username
    upload_date = comic_data.upload_date
    reading_volume = comic_data.reading_volume
    like_volume = comic_data.like_volume
    collect_volume = comic_data.collect_volume
    try:
        user_like.objects.get(user=user.id, comic=comicId)
        isLike = 'true'
    except:
        isLike = 'false'
    try:
        user_collect.objects.get(user=user.id, comic=comicId)
        isCollect = 'true'
    except:
        isCollect = 'false'
    collect = '/show/'+str(comicId)+'/'
    return render(request, "detail.html", {'cover':cover_path,
                                           'name':name,
                                           'tag':tag,
                                           'introduction':introduction,
                                           'author':author,
                                           'upload_user':upload_user,
                                           'upload_date':upload_date,
                                           'reading_volume':reading_volume,
                                           'like_volume':like_volume,
                                           'collect_volume':collect_volume,
                                           'id':comicId,
                                           'path_info':path_info,
                                           'isLike':isLike,
                                           'isCollect':isCollect})

@login_required
@csrf_exempt
def collect_add(request):
    user = request.user
    comicId = request.POST.get('comicId')
    print("----------------------检测到点击--------------------------")
    comic_data = comic.objects.get(id=comicId)
    try:
        userCollect = user_collect.objects.get(user=user, comic=comic_data)
        userCollect.delete()
        comic_data.collect_volume -= 1
        sendMsg = 'del'
    except:
        userCollect = user_collect(user=user, comic=comic_data)
        userCollect.save()
        comic_data.collect_volume += 1
        sendMsg = 'add'
    comic_data.save()
    return JsonResponse({'isAdd': sendMsg})


@login_required
@csrf_exempt
def like_add(request):
    user = request.user
    comicId = request.POST.get('comicId')
    print("----------------------检测到点击--------------------------")
    comic_data = comic.objects.get(id=comicId)
    try:
        userLike = user_like.objects.get(user=user, comic=comic_data)
        userLike.delete()
        comic_data.like_volume -= 1
        sendMsg = 'del'
    except:
        userLike = user_like(user=user, comic=comic_data)
        userLike.save()
        comic_data.like_volume += 1
        sendMsg = 'add'
    comic_data.save()
    return JsonResponse({'isAdd': sendMsg})

@login_required
def space(request):
    user = request.user
    username = user.username
    comic_collect_ls=comic.objects.filter(user_collect__user=user).values('cover','name','id','author','tag', 'like_volume', 'collect_volume', 'reading_volume').order_by('user_collect__id')  #外键查询
    comic_history_ls=comic.objects.filter(user_history__user=user).values('cover','name','id','author','tag', 'like_volume', 'collect_volume', 'reading_volume').order_by('user_history__id')
    path_info = request.path_info
    if user.is_staff:
        add_comic = 'true'
    else:
        add_comic = 'false'
    print(comic_history_ls)
    print(path_info[:-1])
    return render(request, 'space.html', {'username': username,
                                          'comic_collect_ls': comic_collect_ls,
                                          'comic_history_ls': comic_history_ls,
                                          'path_info':path_info[:-1],
                                          'add_comic':add_comic})

@login_required
def password_change(request):
    user = request.user
    if request.POST:
        old_password = request.POST['old_password']
        new_password = request.POST['new_password']
        new_password_retry = request.POST['new_password_retry']
        print(old_password)
        if(new_password == new_password_retry):
            if (check_password(old_password,user.password)):
                print('test2')
                if (old_password == new_password):
                    print('test1')
                    return render(request, 'password_change.html', {'rlt': '新老密码不能相同'})
                user.set_password(new_password)
                user.save()
                auth.logout(request)
                return render(request, 'login.html', {'rlt':'密码修改成功，请重新登陆'})
            else:
                print('test3')
                return render(request, 'password_change.html', {'rlt': '原密码不正确'})
        return render(request, 'password_change.html', {'rlt': '密码不相同'})
    return render(request, 'password_change.html')


def test(request):
    return render(request, 'test.html')


def search(request):
    keys = request.GET.get('keys', '')
    comic_data_ls = comic.objects.filter(name__icontains=keys).values('cover', 'name', 'id', 'author', 'tag', 'like_volume', 'collect_volume',
                                         'reading_volume')
    print(comic_data_ls)
    return render(request, 'search_form.html', {'search':keys,
                                                'comic_data_ls':comic_data_ls})



