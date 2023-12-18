function recommendBook() {
    //https://picaapi.picacomic.com/comics/62fdc34af0163a0c122c8ed3/recommendation
    var setTime = getTimeOnece();
    var mothod = 'GET';
//console.log('getpage'+page);
    var pathname = 'collections';
    //pathname = "banners";
    $.ajax({
        type: mothod, contentType: 'application/json; charset=UTF-8', crossBrowser: true, // data: '',
        // cache :false,
        url: ProxyBaseUrl + pathname,

        beforeSend: function (request) {
            // 如果后台没有跨域处理，这个自定义
            $.each(postHeader(setTime, pathname, mothod), function (idx, obj) {
                request.setRequestHeader(obj.name, obj.value);
            });
        }, success: function (data) {
            try {
                if (data.data.collections != undefined) {
                    console.log(data.data.collections)
                    if (data.data.collections[0].comics != undefined && data.data.collections[0].comics.length > 0) {
                        var classname = '.splide-sister';
                        $.each(data.data.collections[0].comics, function (idx, comic) {

                            $(".splide-sister-list").append(' <li style="max-width: 150px;" onclick="showComic(\'' + comic._id + '\')" class="splide__slide me-2"><div class="card  product-card"><div class="card-body text-center"><img style="object-fit: cover;min-height: 150px;" class="image infoimg lazyload"  data-src="' + getS3ProxySet() + comic.thumb.path + '"><h2 style="height: 40px;max-height: 40px;" class="title text-primary overflow-hidden text-center">' + comic.title + '</h2></div></div></li>\n');
                        });
                        if ($(".splide-sister-list li").length > 0)
                            scolleSplide(classname)
                        else console.log('splide-sister-list no data')
                    } else $('.splide-sister-tip').hide();

                    if (data.data.collections[1]) {
                        var classname = '.splide-mother';
                        if (data.data.collections[1].comics)
                        $.each(data.data.collections[1].comics, function (idx, comic) {
                            $(".splide-mother-list").append(' <li style="max-width: 150px;" onclick="showComic(\'' + comic._id + '\')" class="splide__slide me-2"><div class="card  product-card"><div class="card-body text-center"><img style="object-fit: cover;min-height: 150px;" class="image infoimg lazyload"  data-src="' + getS3ProxySet() + comic.thumb.path + '"><h2 style="height: 40px;max-height: 40px;" class="title text-primary overflow-hidden text-center">' + comic.title + '</h2></div></div></li>\n');
                        });
                        if ($(".splide-mother-list li").length > 0)
                            scolleSplide(classname);
                        else
                            console.log('splide-mother-list no data')
                    } else {
                        $('.splide-mother-tip').hide();

                    }

                }
            } catch (err) {
                console.error(err);

            }


        }, complete: function () {

            // 放开按钮
            //  $("#submit").removeAttr("disabled");
        }, error: function (data) {
            //checkErrorCode(data, modalClassId);
        }
    });

}


function crateImgList(liindex, onclickClass, imgsrc, title, content, hideData, tips) {
    var listhtml = ' <li class="lindex' + liindex + '"><a href="#" data-img=' + imgsrc + ' data-title=' + Base64.encode(title) + ' data-hide=' + Base64.encode(hideData) + ' onclick="' + onclickClass + '(this)" class="item addata"><div class="imageWrapper">';
    listhtml = listhtml + ' <img' + ' src="' + imgsrc + '" alt="image" class="imaged w64"> </div>';
    listhtml = listhtml + '  <div class="in"><div>' + title + '<div class="text-muted">' + content + '</div></div><span class="text-muted">' + tips + '</span></div>';
    listhtml = listhtml + ' </a></li>';
    return listhtml;
}


function getBanner(modalClassId) {

    var setTime = getTimeOnece();
    var mothod = 'GET';

    var pathname = "banners";

    $.ajax({
        type: mothod, contentType: 'application/json; charset=UTF-8', crossBrowser: true, // data: '',
        // cache :false,
        url: ProxyBaseUrl + pathname,

        beforeSend: function (request) {
            // 如果后台没有跨域处理，这个自定义
            $.each(postHeader(setTime, pathname, mothod), function (idx, obj) {
                request.setRequestHeader(obj.name, obj.value);
            });
            $("#loader").fadeIn();

        }, success: function (data) {
            try {

                console.log('banner')
                console.log(data);
                if (data.code == 200) console.log("伺服器鏈接成功");
                console.log(data.data);
                if (data.data == undefined || data.data.banners == undefined) {
                    checkDataNullCode(modalClassId, data);

                } else {
                    //   console.log(data);
                    $.each(data.data.banners, function (idx, obj) {
                        console.log(obj.content);
                        var imgservice = obj.thumb.fileServer + '/storage/';
                        if (imgservice.indexOf('pica') > 0) imgservice = getS3ProxySet();
                        var adlink = obj.link;
                        if (adlink == undefined) adlink = obj._game;
                        if (obj.thumb.path.indexOf('cb4800c876f7') < 0) $(".banner-spider-list").append('<li class="splide__slide"><a href="' + adlink + '"><img style="height: 200px; width: 100%!important;" class="imaged" src="' + imgservice + obj.thumb.path + '"></img></a></li>');
                    });
                    // setStore('token', data.data.token);
                    new Splide('.banner-spider', {
                        autoplay: true, type: 'loop', drag: 'free', focus: 'right', height: '200px', // autoWidth: true,
                        //    perPage: 1,
                        autoScroll: {
                            speed: 1,
                        },
                    }).mount();
                }

            } catch (err) {

                setErrorTips(data, err);
                myModalUtils(modalClassId);
            }


        }, complete: function () {
            console.log('加載完畢');
            $("#loader").hide();


            // 放开按钮
            //  $("#submit").removeAttr("disabled");
        }, error: function (data) {
            checkErrorCode(data, modalClassId);
            myModalUtils(modalClassId);

        }
    });

}

function getAdList(modalClassId) {
    var setTime = getTimeOnece();
    var mothod = 'GET';

    var pathname = "announcements?page=1";
    //pathname = "banners";
    $.ajax({
        type: mothod, contentType: 'application/json; charset=UTF-8', crossBrowser: true, // data: '',
        // cache :false,
        url: ProxyBaseUrl + pathname,

        beforeSend: function (request) {
            // 如果后台没有跨域处理，这个自定义
            $.each(postHeader(setTime, pathname, mothod), function (idx, obj) {
                request.setRequestHeader(obj.name, obj.value);
            });
            $("#loader").fadeIn();

        }, success: function (data) {
            try {

                if (data.code == 200) console.log("伺服器鏈接成功");
                console.log(data.data);
                if (data.data == undefined || data.data.announcements == undefined || data.data.announcements.docs == undefined) {
                    checkDataNullCode(modalClassId, data);

                } else {
                    console.log(data);
                    var outCount = 1;
                    $.each(data.data.announcements.docs, function (idx, obj) {
                        //     console.log(obj.content);
                        if (outCount++ <= 3) $(".tiplistview").append(crateImgList(idx, 'onclickClass', getS3ProxySet() + obj.thumb.path, obj.title, obj.content.slice(0, 50) + '....', obj.content, '>'));
                    });
                    // setStore('token', data.data.token);

                    if ($(".addata").length > 0) onclickClass($(".addata:first"));
                }

            } catch (err) {

                setErrorTips(data, err);
                myModalUtils(modalClassId);
            }


        }, complete: function () {
            console.log('加載完畢');
            $("#loader").hide();
            // 放开按钮
            //  $("#submit").removeAttr("disabled");
        }, error: function (data) {
            checkErrorCode(data, modalClassId);
            myModalUtils(modalClassId);

        }
    });

}

$(document).ready(function () {
    try {
        getAdList(modalClassId);
        recommendBook();
    } catch (e) {
        console.log(e)
    }
    var getcacheCid = getStore('viewnav');
    if (getcacheCid != undefined)
        getMyrecommend(getcacheCid);


})

/**
 *
 * @param modalClassId
 * @param adAPI
 */
function getHomeTextAD(modalClassId, adAPI) {

    var setTime = getTimeOnece();
    var mothod = 'GET';

    var pathname = adAPI;


    $.ajax({
        type: mothod, contentType: 'application/json; charset=UTF-8', crossBrowser: true, // data: '',
        // cache :false,
        url: pathname,

        beforeSend: function (request) {
            // 如果后台没有跨域处理，这个自定义
            $.each(postHeader(setTime, pathname, mothod), function (idx, obj) {
                request.setRequestHeader(obj.name, obj.value);
            });
            $("#loader").fadeIn();

        }, success: function (data) {
            try {
                if (data == undefined) {
                    checkDataNullCode(modalClassId, data);
                } else {

                    console.log(data);
                    $.each(data, function (idx, obj) {
                        //  console.log(obj.content);
                        $(".my-home-text").html(obj.adTip)
                        $("my-home-text-line").show()
                        $(".my-home-text").show()
                        return false;
                    });

                }

            } catch (err) {

                setErrorTips(data, err);
                myModalUtils(modalClassId);
            }


        }, complete: function () {
            console.log('加載完畢');
            $("#loader").hide();


            // 放开按钮
            //  $("#submit").removeAttr("disabled");
        }, error: function (data) {
            checkErrorCode(data, modalClassId);
            myModalUtils(modalClassId);

        }
    });

}


window.onload = function () {
    // $("#loader").show();


    //  createSplideBox('banner','.my-insert-flag');
    setTimeout(function () {
        createSplideBox('banner', 'mt-1 mb-2', '.my-insert-flag', 2);
        getMyBanner(modalClassId,
            '/ad/?cat=homebanner&os=' + getDeviceTypes(),
            '.my-banner-box', ".my-banner-spider",
            screen.height / 4.4, true);
    }, 1000)
    getHomeTextAD(modalClassId, '/ad/?cat=tiptext');
    //getBanner(modal
    // ClassId);

}

function userChangeProxy(setLink) {

    setStore('s3Proxy', setLink);
    setStore('proxyCheck', 'user');
    //myModalUtils(changeLineModal);
    toastUtils('切換爲' + getStore('s3Proxy'), '關閉', 3000)
}

function onclickClass(thisData) {

    var data = Base64.decode($(thisData).attr('data-hide'));
    var title = Base64.decode($(thisData).attr('data-title'));
    var img = $(thisData).attr('data-img');
    $("#homecontentboxTitle").text(title);
    $(".ahomeMoadlTipContent").replaceWith(' <div class="modal-body ahomeMoadlTipContent p-0">' + '<img class="ahomeMoadlImg w-100" scr="" >' + '<h3 class="modal-title text-center text-primary w-100 mt-2" id="homecontentboxTitle">' + title + '</h3>' + '<div class="p-1" style="word-wrap:break-word;">' + linkifyHtml(data.replace(/\n/g, "<br>"), {
        target: '_blank', className: 'text-primary w-100'
    }) + '</div></div>');
    $(".ahomeMoadlImg").attr('src', img);
    myModalUtils("homecontentbox");
}

function closeMoadl() {
    myModalUtils("homecontentbox", 'hide');
}
