var catPage = parseInt(getPar('pg'));
if (isNaN(catPage))
    catPage = 1;
var catMaxPage = 999;

var catName = getPar('catname');
var cid = getPar('cid');
var gid = getPar('gid');
var isMyGet = getPar('ismy');
var hideBanner = getPar('ishide')

/**
 * 判斷時間是否超過某個值
 * @param str
 * @param timeSet
 * @returns {boolean}
 */
function isToday(str) {
console.error(str);
console.error(new Date().getDate()-new Date(str).getDate())
    return new Date().getDate()-new Date(str).getDate()
}

function getTimeText(obj) {
    var mytime = new Date();
    if (obj.created_at != undefined)
        mytime = new Date(obj.created_at);
    var toadyText = '';
    var yearText = '';
    var addZeroMinutes = '';
    var addZeroHour = '';
    if (mytime.getHours() < 10)
        addZeroHour = '0';
    if (mytime.getMinutes() < 10)
        addZeroMinutes = '0';
    var hourAndMinutes = addZeroHour + mytime.getHours() + ":" + addZeroMinutes + mytime.getMinutes();
    if (isToday(obj.created_at)==0) {
        toadyText = '今天';
    } else if (isToday(obj.created_at )==1) {
        toadyText = '昨天';
    } else if (isToday(obj.created_at)==2) {
        toadyText = '前天';
    } else {
        toadyText = (mytime.getMonth()+1) + '月' + mytime.getDate() + "日";
    }

    if (mytime.getFullYear() != new Date().getFullYear()) {
        yearText = mytime.getFullYear() + '年';
    }

//    console.log(mytime)
    //  console.log(mytime.getMonth())

    return yearText + toadyText + hourAndMinutes;
}

function reportCommentButton(commentId) {
    var setTime = getTimeOnece();
    var mothod = 'POST';
//console.log('getpage'+page);
    //https://api.manhuabika.com    /comments/6317fa3427d3e69c5ae62591/report
    //https://picaapi.picacomic.com/comments/6318041164d0dd600af88e1e/report
    var pathname = 'comments/' + commentId + '/report';
    $.ajax({
        type: mothod,
        contentType: 'application/json; charset=UTF-8',
        crossBrowser: true,
        // data: '',
        // cache :false,
        url: ProxyBaseUrl + pathname,

        beforeSend: function (request) {
            // 如果后台没有跨域处理，这个自定义

            $.each(postHeader(setTime, pathname, mothod), function (idx, obj) {
                request.setRequestHeader(obj.name, obj.value);
            });
            //  request.setRequestHeader('signature', getsignature(pathname, setTime, mothod));
            // $(".my-loading-view").hide();
            $("#loader").fadeIn();
            ///  console.log('show loader');

        },
        success: function (data) {
            try {

                if (data.code == 200)
                    console.log("伺服器鏈接成功");

                if (data.data == undefined
                    || data.data.message == undefined

                ) {
                    //https://picaapi.picacomic.com/comments/6318041164d0dd600af88e1e/report
                    checkDataNullCode(modalClassId, data);
                } else {

                    toastUtils(data.data.message, '關閉', 3000);
                    //  catPage = data.data.comics.page;
                    // catMaxPage=data.data.comics.pages;
                    //  console.log('page'+data.data.comics.page);
                    /*
                    $.each(data.data.comics.docs, function (idx, obj) {
                        //     console.log(obj.content);
                        createComicItem(idx, obj);
                    });*/
                    // setStore('token', data.data.token);

                    //    onclickClass($(".addata:first"));
                }

            } catch (err) {

                $(".modalContentSet").text("未確定的錯誤，請聯係開發人員。" + data.responseText + err);
                $('#' + modalClassId).modal('show')
            }


        },
        complete: function () {
            console.log('加載完畢');
            $("#loader").fadeOut();
            // 放开按钮
            //  $("#submit").removeAttr("disabled");
        },
        error: function (data) {
            checkErrorCode(data, modalClassId);
        }
    });
}

function likeCommentButton(commentId) {
    var setTime = getTimeOnece();
    var mothod = 'POST';
//console.log('getpage'+page);
    //https://picaapi.picacomic.com//61ad167f3068a6c597ae8e04/
    var pathname = 'comments/' + commentId + '/like';
    $.ajax({
        type: mothod,
        contentType: 'application/json; charset=UTF-8',
        crossBrowser: true,
        // data: '',
        // cache :false,
        url: ProxyBaseUrl + pathname,

        beforeSend: function (request) {
            // 如果后台没有跨域处理，这个自定义

            $.each(postHeader(setTime, pathname, mothod), function (idx, obj) {
                request.setRequestHeader(obj.name, obj.value);
            });
            //  request.setRequestHeader('signature', getsignature(pathname, setTime, mothod));
            // $(".my-loading-view").hide();
            $("#loader").fadeIn();
            ///  console.log('show loader');

        },
        success: function (data) {
            try {

                if (data.code == 200)
                    console.log("伺服器鏈接成功");

                if (data.data == undefined
                    || data.data.action == undefined

                ) {
                    checkDataNullCode(modalClassId, data);
                } else {

                    console.log(data.data.action);
                    var likeCount = parseInt($("#my-icon-id" + commentId).parent().text());
                    console.log('get like' + likeCount);
                    console.log('get like text' + $("#my-icon-id" + commentId).parent().text());
                    var cacheIcon = $("#my-icon-id" + commentId).attr('class');
                    var cacheIconId = $("#my-icon-id" + commentId).attr('id');
                    if (data.data.action == 'like') {
                        toastUtils('喜歡成功', '關閉', 3000);
                        // $(".comment-button").removeClass('icon-star-empty border-dark border-1');


                        $("#my-icon-id" + commentId).addClass('text-primary');

                        likeCount++;
                        $("#my-icon-id" + commentId).parent().html('<i  id="' + cacheIconId + '"   class="' + cacheIcon + '"></i>&nbsp;' + likeCount);

                    } else {
                        toastUtils('取消喜歡成功', '關閉', 3000);


                        $("#my-icon-id" + commentId).removeClass('text-primary');

                        likeCount--;
                        console.log(likeCount);
                        $("#my-icon-id" + commentId).parent().html('<i id="' + cacheIconId + '"  class="' + cacheIcon + '"></i>&nbsp;' + likeCount);

                    }
                    //  catPage = data.data.comics.page;
                    // catMaxPage=data.data.comics.pages;
                    //  console.log('page'+data.data.comics.page);
                    /*
                    $.each(data.data.comics.docs, function (idx, obj) {
                        //     console.log(obj.content);
                        createComicItem(idx, obj);
                    });*/
                    // setStore('token', data.data.token);

                    //    onclickClass($(".addata:first"));
                }

            } catch (err) {

                $(".modalContentSet").text("未確定的錯誤，請聯係開發人員。" + data.responseText + err);
                $('#' + modalClassId).modal('show')
            }


        },
        complete: function () {
            console.log('加載完畢');
            $("#loader").fadeOut();
            // 放开按钮
            //  $("#submit").removeAttr("disabled");
        },
        error: function (data) {
            checkErrorCode(data, modalClassId);
        }
    });
}

function crateCommentBox(obj, isChild = false, isMy = false, parentId = '') {

    if (obj.hide) {
        console.log('is bolck')
        return;
    }
    var avatarSrc = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
    if (obj._user != undefined && obj._user.avatar != undefined) {
        avatarSrc = getS3ProxySet() + obj._user.avatar.path;
        //console.log(avatarSrc);


    } else if (isMy) {
        setTimeout(function () {
            $(".my-comment-avatar").attr('src', $('.my-user-avatar').attr('src'));
        }, 2000);
    }
    var titleCache = "";
    var commentsConut = obj.totalComments;
    var comicId = obj._comic;
    var gameId = obj._game;
    var jumpMode = "";
    if (comicId != undefined) {
        jumpMode = 'onclick="showComic(\'' + obj._comic._id + '\')" ';
        titleCache = obj._comic.title;
    } else if (gameId != undefined) {
        jumpMode = 'onclick="jumpGame(\'' + obj._game._id + '\')" ';
        titleCache = obj._game.title;
    }
    if (commentsConut == undefined)
        commentsConut = 0;
    var favStyle = '';
    console.log(obj.isLiked);
    if (obj.isLiked)
        favStyle = ' text-primary'
    var mytime = getTimeText(obj);
    // console.log(obj._user.slogan);
    var mySlogan = '';
    var myName = '';
    if (obj._user != undefined) {
        myName = obj._user.name;
        mySlogan = obj._user.slogan;
    }
    if (mySlogan == null || mySlogan == 'null')
        mySlogan = '沒寫簽名呢~';

    var avatar = '<div data-src="' + avatarSrc + '" data-uname="' + myName + '"   data-slogan="' +
        mySlogan + '" onclick="showUserInfo(this)" class="avatar ps-1 pt-1"><img style="display: flex;" src="' + avatarSrc + '" alt="avatar" class="imaged w64 rounded  border border-primary border-2 my-comment-avatar"></div>';
    var header = '<div class="comment-header"> <h4 class="title"  style="padding: 0px!important;">' + myName + '</h4><div><span class="time me-1">' + mytime + '</span><span onclick="modalReport(\'' + obj.id + '\')" class="icon-dot-3 me-1"></span></div></div>';
    var content = '  <div class="text">' + obj.content + '</div>';
    var favButton = '   <a onclick="likeCommentButton(\'' + obj._id + '\')" class="comment-button"><i name="heart-outline" id="my-icon-id' + obj._id + '" role="img" class="md hydrated icon-heart-circled my-like-icon  ' + favStyle + '" aria-label="heart outline"></i>&nbsp;' + obj.likesCount + '</a>';
    var replayButton = '  <a data-count="' + commentsConut + '" id="showbtn' + obj._id + '" data-parent="' + parentId + '"  onclick="showCommentButton(\'' + obj._id + '\',this,' + isChild + ')" class="replay-button comment-button"><i name="chatbubble-outline" role="img" class="md hydrated icon-comment" aria-label="chatbubble outline"></i><span>&nbsp;' + commentsConut + '</span></a>'
    var myComment = '';
    if (isMy) {
        myComment = '<div ' + jumpMode + ' class="text-primary text-end w-100">>>>' + titleCache + '</div>'

    }
    if (isChild)
        replayButton = '';
    var commentFooter = '<div class="comment-footer">' + favButton + replayButton + ' </div>' + myComment;
    var sHtml = ' <div id="' + obj._id + '" class="item">' + avatar + '<div class="in">' + header + content + commentFooter + "</div></div>";
    return sHtml;
}

function showUserInfo(datathis) {

    $('.my-comic-v-avatar').attr('src', $(datathis).attr('data-src'));
    $('.my-comic-v-name').attr('src', $(datathis).attr('data-uname'));
    let slogan = $(datathis).attr('data-slogan');

    $('.my-comic-v-slogan').text(slogan);
    $('#DialogIconedUser').modal('show');
}

function modalReport(cid) {
    $('.my-comment-report').attr('onclick', 'reportCommentButton("' + cid + '")');
    $('#reportModal').modal('show');
}

var myInputboxTemp = '';

function getInputBox(commentId, toComic = false, buttonText = '回復') {
    var inputBoxHtml = '<div class="my-inputbox m-1"><textarea ' +
        ' style="height: 50px;"  placeholder="在留言簿發表你的觀點吧！" id="" rows="2"' +
        ' class="w-100 rounded-1 border-1 border-primary text-black my-comment-textarea comment-textbox' + commentId + '"></textarea>' +
        '<button onclick="sendComment(\'' + commentId + '\',' + toComic + ')" class="btn-primary btn w-100 mt-1">' + buttonText + '</button></div>';

    return inputBoxHtml;
}


function sendComment(cid, toComic = false) {
    var text = $('.comment-textbox' + cid).val();
    if (text == undefined || text.trim() == '') {
        toastUtils('沒有輸入内容哦！', '關閉', 1000);
        return;
    }
    //https://picaapi.picacomic.com/comics/5822a6e3ad7ede654696e482/comments
    //https://picaapi.picacomic.com/comments/6317eeffb45af9858dc964ac
    var setTime = getTimeOnece();

//console.log('getpage'+page);
    var pathname =
        'comics/' + cid + '/comments';
    if (!toComic)
        pathname = 'comments/' + cid;

    var mothod = 'POST';

    $.ajax({
        type: mothod,
        contentType: 'application/json; charset=UTF-8',
        crossBrowser: true,
        data: '{"content":"' + text + '"}',
        // cache :false,
        url: ProxyBaseUrl + pathname,

        beforeSend: function (request) {
            // 如果后台没有跨域处理，这个自定义

            $.each(postHeader(setTime, pathname, mothod), function (idx, obj) {
                request.setRequestHeader(obj.name, obj.value);
            });
            request.setRequestHeader('signature', getsignature(pathname, setTime, mothod));

            $("#loader").fadeIn();
            ///  console.log('show loader');

        },
        success: function (data) {
            try {
                //console.log(data);
                if (data.code == 200 && data.message == 'success') {
                    console.log("评论成功");
                    $('#exampleModalLongTitle').text('评论提示');
                    $(".modalContentSet").text('评论成功~');
                    $('.modalImg').attr('src', pwaAssets + 'comic/assets/res/img/tip-success.png?ver=1.8');
                    $('#' + modalClassId).modal('show');
                    if (toComic) {
                        document.location.reload();
                    } else {
                        var selectButton = $("#showbtn" + cid);
                        var dataCount = parseInt(selectButton.attr('data-count'));
                        dataCount++;
                        selectButton.attr('data-count', dataCount);
                        $("#showbtn" + cid + " span").html('&nbsp;' + dataCount);
                        $('#input' + cid).remove();
                        showCommentButton(cid, $("#showbtn" + cid), false)
                    }
                    return;

                }
                console.log("评论成功");

                if (data.data == undefined
                    || data.data.comments == undefined
                    || data.data.comments.docs == undefined
                ) {
                    checkDataNullCode(modalClassId, data, '得到了空的數據');
                } else {

                    // setStore('token', data.data.token);

                    //    onclickClass($(".addata:first"));
                }

            } catch (err) {

                $(".modalContentSet").text("未確定的錯誤，請聯係開發人員。" + data.responseText + err);
                $('#' + modalClassId).modal('show')
            }


        },
        complete: function () {
            console.log('加載完畢');
            $("#loader").fadeOut();
            // 放开按钮
            //  $("#submit").removeAttr("disabled");
        },
        error: function (data) {
            checkErrorCode(data, modalClassId);
        }
    });

}

function showCommentButton(id, elemt, isChild = false) {
    var commetCount = parseInt($(elemt).attr('data-count'));
    console.log('commetCount' + commetCount);

    var insertId = 'input' + id;
    var parentId = $(elemt).attr('data-parent');
    if (parentId == '')
        parentId = id;
    // console.log($("#" + insertId).length);
    if ($("#" + insertId).length == 0) {
        // console.log('eq'+insertId != myInputboxTemp);
        // console.log('insertId'+insertId != myInputboxTemp);
        console.log('myInputboxTemp:' + myInputboxTemp);
        console.log('insertId:' + insertId);
        if (myInputboxTemp != '' && insertId != myInputboxTemp && (isChild != true)) {
            $("#" + myInputboxTemp).hide();
            console.log('hide' + myInputboxTemp);
        }

        myInputboxTemp = insertId;
        var inputbox = '<div id="' + insertId + '" class="input-wrapper m-2"></div>';
        if (!isChild)
            inputbox = '<div id="' + insertId + '" class="input-wrapper m-2">' + getInputBox(id) + '</div>';
        console.log($("#" + id));
        $("#" + id).after($(inputbox).hide());
        $("#" + insertId).fadeIn(500);
        if (isChild)
            $(elemt).parent().parent().append(getInputBox(parentId));
    } else {
        if ($("#" + insertId).is(":hidden")) {
            console.log('is hide')
            $("#" + insertId).fadeIn(500);

        } else {
            $("#" + insertId).fadeOut(500);
        }
        if (myInputboxTemp != '' && insertId != myInputboxTemp) {
            $("#" + myInputboxTemp).hide();
            console.log('hide' + insertId);
        }

        myInputboxTemp = insertId;
    }
    if (commetCount > 0) {
        getCommentsList(id, 1, true);

    }
}

function getCommentsList(cid, page = 1, isChild = false, isMy = false, isGame = false) {
    //   https://picaapi.picacomic.com/comics?page=1&c=%E5%97%B6%E5%92%94%E6%BC%A2%E5%8C%96&s=dd
    var setTime = getTimeOnece();

    if (cid == '' && (isMy == false) && gid == '') {
        pageJump('/');
    }
//console.log('getpage'+page);
    var pathname =
        'comics/' + cid + '/comments?page=' + page;
    if (isChild) {
        pathname =
            'comments/' + cid + '/childrens?page=' + page;
    }
    if (isMy) {
        pathname =
            'users/my-comments?page=' + page;
    }
    if (isGame) {
        pathname =
            'games/' + cid + '/comments?page=' + page;

    }
    var childcommemtId = 'chilidInput' + cid;
    var mothod = 'GET';
    if ($("#" + childcommemtId).length == 0)
        $.ajax({
            type: mothod,
            contentType: 'application/json; charset=UTF-8',
            crossBrowser: true,
            // data: '',
            // cache :false,
            url: ProxyBaseUrl + pathname,

            beforeSend: function (request) {
                // 如果后台没有跨域处理，这个自定义

                $.each(postHeader(setTime, pathname, mothod), function (idx, obj) {
                    request.setRequestHeader(obj.name, obj.value);
                });
                request.setRequestHeader('signature', getsignature(pathname, setTime, mothod));

                $("#loader").fadeIn();
                ///  console.log('show loader');

            },
            success: function (data) {
                try {
                    //console.log(data);
                    if (data.code == 200)
                        console.log("伺服器鏈接成功");

                    if (data.data == undefined
                        || data.data.comments == undefined
                        || data.data.comments.docs == undefined
                    ) {
                        checkDataNullCode(modalClassId, data);
                    } else {
                        if (!isChild) {
                            catPage = data.data.comments.page;
                            catMaxPage = data.data.comments.pages;
                        }
                        //  console.log('page'+data.data.comics.page);
                        $.each(data.data.comments.docs, function (idx, obj) {
                            //     console.log(obj.content);
                            if (isChild) {

                                var childInput = '<div id="' + childcommemtId + '" class="comment-block mt-1 bg-grey-50 my-bg-white"></div>'
                                if ($("#" + childcommemtId).length == 0) {
                                    $("#input" + cid).append(childInput);

                                }
                                $("#" + childcommemtId).append(crateCommentBox(obj, isChild, false, cid));

                            } else if (isMy)
                                $(".my-comment-main-list").append(crateCommentBox(obj, false, true));
                            else
                                $(".my-comment-main-list").append(crateCommentBox(obj, isChild));


                        });
                        // setStore('token', data.data.token);

                        //    onclickClass($(".addata:first"));
                    }

                } catch (err) {

                    $(".modalContentSet").text("未確定的錯誤，請聯係開發人員。" + data.responseText + err);
                    $('#' + modalClassId).modal('show')
                }


            },
            complete: function () {
                console.log('加載完畢');
                $("#loader").fadeOut();
                // 放开按钮
                //  $("#submit").removeAttr("disabled");
            },
            error: function (data) {
                checkErrorCode(data, modalClassId);
            }
        });

}

function autoSetComment() {
    if (isMyGet == 1)
        getCommentsList('', catPage, false, true);
    else if (gid != '') {
        getCommentsList(gid, catPage, false, false, true);
    } else getCommentsList(cid, catPage);


}


