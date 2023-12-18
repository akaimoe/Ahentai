var dbHistory = localforage.createInstance({
    name: "history"
});


function addHistory() {

    var historyArray = getStore('historyList');
    var count = -1;
    if (historyArray != undefined)
        count = historyArray.length;
    if (count == -1) {
        $(".my-list-history-button").text('沒有歷史記錄');
    }
    console.log('count' + count);
    var flag = 1;
    for (let i = flag; i < 6; i++) {
        var keyIndex = count - i;
        if (keyIndex < 0)
            return;
        console.log("i" + i + "ccc" + (keyIndex));
        dbHistory.getItem(historyArray[keyIndex + 1]).then(function (coimcInfo) {
            createComicItem(historyArray[keyIndex + 1], coimcInfo, '.my-list-history');

        });

    }

}

function getFavList(page = 1) {

    var setTime = getTimeOnece();
    var mothod = 'GET';

//console.log('getpage'+page);
    var pathname =
        'users/favourite?s=dd&page=' + page;


    console.log(pathname);


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
                    || data.data.comics == undefined
                    || data.data.comics.docs == undefined
                ) {
                    checkDataNullCode(modalClassId, data);
                } else {

                    //  console.log('page'+data.data.comics.page);
                    $.each(data.data.comics.docs, function (idx, obj) {
                        //     console.log(obj.content);
                        createComicItem(idx, obj, '.my-list-favourite');
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


function changeSlogan() {
    //   https://picaapi.picacomic.com/comics?page=1&c=%E5%97%B6%E5%92%94%E6%BC%A2%E5%8C%96&s=dd
    var setTime = getTimeOnece();
    var mothod = 'PUT';
    var Solgan = $('.my-slogan-text').val();

//console.log('getpage'+page);
    var pathname = 'users/profile';


    $.ajax({
        type: mothod,
        contentType: 'application/json; charset=UTF-8',
        crossBrowser: true,
        data: '{"slogan":"' + Solgan + '"}',
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
                    toastUtils("修改簽名成功", '關閉', 3000);

                getUserInfo();

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

function punchIn() {
    //   https://picaapi.picacomic.com/comics?page=1&c=%E5%97%B6%E5%92%94%E6%BC%A2%E5%8C%96&s=dd
    var setTime = getTimeOnece();
    var mothod = 'POST';

//console.log('getpage'+page);
    var pathname = 'users/punch-in';


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
                    || data.data.res == undefined) {
                    checkDataNullCode(modalClassId, data);
                } else {

                    toastUtils(data.data.res.punchInLastDay + "簽到成功", '關閉', 3000);
                    getUserInfo();
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


function getUserInfo() {
    //   https://picaapi.picacomic.com/comics?page=1&c=%E5%97%B6%E5%92%94%E6%BC%A2%E5%8C%96&s=dd
    var setTime = getTimeOnece();
    var mothod = 'GET';

//console.log('getpage'+page);
    var pathname = 'users/profile';


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
                    || data.data.user == undefined) {
                    checkDataNullCode(modalClassId, data);
                } else {

                    //  console.log('page'+data.data.comics.page);
                    if (data.data.user.avatar != undefined)
                        $(".my-user-avatar").attr('src', getS3ProxySet() + data.data.user.avatar.path);
                    // setStore('token', data.data.token);
                    var slogan = data.data.user.slogan;
                    if (slogan == undefined)
                        slogan = '未設置簽名';
                    $('.subtext').text(data.data.user.slogan);
                    // $('.subtext').prependTo('<i class="icon-edit"></i>');
                    $('<i class="icon-edit ms-1"></i>').appendTo('.subtext');
                    $('.name').text(data.data.user.name);
                    var lv = data.data.user.level;
                    var exp = data.data.user.exp;
                    $(".my-lv").attr('style', 'width: ' + exp + '%;');
                    $(".my-lv").attr('aria-valuenow', exp);
                    $(".my-lv").text('Lv ' + lv);
                    if (data.data.user.isPunched) {
                        $(".my-punch-button").hide();
                    }
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

function uploadavatar() {
    alert('設置頭像請前往APP');

}

var debugCount = 0;

function showDebug() {
    debugCount++;
    if (debugCount > 5) {
        $('.my-debug').show();
    }

}

$(document).ready(function () {
    getUserInfo();
    getFavList(1);
    addHistory();
    getCommentsList('', 1, false, true);
});

function chekCommentExit() {
    if ($(".comment-header").length == 0) {
        $(".my-list-comment-button").hide()
    }
}