window.onscroll = function() {
    //回到顶部
    var sllTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (sllTop > 240) {
        $('#get-top').css('display', 'block')
    } else {
        $('#get-top').css('display', 'none')
    }
}
$('#get-top').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800); //点击回到顶部按钮，缓懂回到顶部,数字越小越快
    })
    // 显示/隐藏二级菜单
$(".left-menu-btn").hover(function() {
    $('#tow-nav').fadeIn(200);
}, function() {
    $("#tow-nav").hover(function() {
        $('#tow-nav').fadeIn(0);
    }, function() {
        $('#tow-nav').fadeOut(0)
    });
    $('#tow-nav').fadeOut(0)
})


//判断用户使用的设备
var deviceVal = browserRedirect();

function browserRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        return 'phone';
    } else {
        return 'pc';
    }
}

/*
 * 2018-6-12更新
 * 解决在低分辨率下首页内容过高导致滚动条出现，影响主题背景图片不全屏的问题
 * 解决方式：对于屏幕分辨率高度低于845px显示器，改变首页的内容为6块区域。
 */

(function() {
    //当浏览器窗口被调整大小时触发
    window.onresize = function() {
        ShowHideElement("i-link-box", "linkList-item", 845);
    }
    window.onload = function() {
        ShowHideElement("i-link-box", "linkList-item", 845);
    }

    function ShowHideElement(Element1, Element2, Vaule) {
        var Person = document.getElementsByClassName(Element1);
        var BoxHeight = document.getElementsByClassName(Element2);
        var WindowHeight = window.innerHeight || document.body.clientHeight;
        //遍历获取到的元素
        for (var i = 6; i < Person.length; i++) {
            if (WindowHeight <= Vaule && deviceVal === "pc") {
                Person[i].style.display = "none";
                BoxHeight[0].style.marginTop = "5px";
            } else {
                Person[i].style.display = "block";
                BoxHeight[0].style.marginTop = "0px";
            }
        }
    }
    window.ShowHideElement = ShowHideElement;
}());

var now = -1;
var resLength = 0;
var thisSearch = 'https://www.baidu.com/s?wd=';
var thisSearchIcon = './logo.jpg';
var storage = window.localStorage;
if (!storage.stopHot) {
    storage.stopHot = true
}
// storage.stopHot == 'false' ? $('#hot-btn').addClass('off') : $('#hot-btn').removeClass('off');
"false" == storage.stopHot ? $("#hot-btn").prop("checked", !1) : $("#hot-btn").prop("checked", !0);
var ssData = storage.searchEngine;
if (storage.searchEngine != undefined) {
    ssData = ssData.split(',');
    thisSearch = ssData[0];
    $('.search-icon').attr('src', ssData[1])
}

// 按键松开时执行
$('#txt').keyup(function(e) {
    // 判断输入框是否有内容
    if ($('#txt').val() != '') {
        $('.search-clear').css('display', 'block');
        $('.search-clear').click(function() {
            $('#txt').val('');
            $('#box ul').html('');
            $('.search-clear').css('display', 'none')
        })
    } else {
        $('.search-clear').css('display', 'none')
    }

    if (e.keyCode == 38 || e.keyCode == 40 || storage.stopHot != 'true') {
        return
    };
    var dat = {
        wd: $('#txt').val()
    };
    if ($('#txt').val() != '') {
        $('#box ul').text('');
        $('#box').css('display', 'block');
        $.ajax({
            type: "GET",
            url: "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su",
            async: true,
            data: dat,
            dataType: 'jsonp',
            jsonp: 'cb',
            success: function(res) {
                for (var i = 0; i < res.s.length; i++) {
                    resLength = res.s.length;
                    oli_i = '<li>' + res.s[i] + '</li>';
                    $('#box ul').append(oli_i);

                    $('#box ul li').eq(i).click(function() {
                        $('#txt').val(this.innerHTML);
                        window.open(thisSearch + this.innerHTML);
                        $('#box ul').html('');
                        $('#box').css('display', 'none')
                    })
                };
                //$('#box ul').html() === '' ? $('#box').css('height','0px') : $('#box').css('height','auto');
            },
            error: function(res) {
                console.log(res)
            }
        });
    } else {
        $('#box ul').html('')
            //$('#box ul').html() === '' ? $('#box').css('height','0px') : $('#box').css('height','auto');
    };
});

$('#txt').keydown(function(ev) {
    if (ev.keyCode == 40) {
        now++;
        if (now > resLength - 1) {
            now = 0;
        }
        $('#box ul li').eq(now).addClass('current').siblings().removeClass('current')
        $('#txt').val($('#box ul li').eq(now).text())
    };
    if (ev.keyCode == 38) {
        if (now == -1 || now == 0) {
            now = resLength
        }
        now--
        $('#box ul li').eq(now).addClass('current').siblings().removeClass('current');
        $('#txt').val($('#box ul li').eq(now).text())
    };
    if (ev.keyCode == 13) {
        var textValue = $('#txt').val();
        if (textValue != '') {
            window.open(thisSearch + $('#txt').val())
                // $('#txt').val('');
            $('#box ul').html('')
        } else {
            new $.zui.Messager('请输入关键字', {
                icon: '/导航页/images/bell.png', // 定义消息图标
                type: 'danger',
                placement: 'top',
                close: false
            }).show();
        }
    }
})

$(function() {
    $('#box ul').html() === '' ? $('#box').css('height', '0px') : $('#box').css('height', 'auto');
    var search = {
        // data: [{
        //     name: '百度',
        //     img: '/导航页/images/logo.jpg',
        //     url: 'https://www.baidu.com/s?wd='
        // }, {
        //     name: '搜狗',
        //     img: '/导航页/images/logo_1.jpg',
        //     url: 'https://www.sogou.com/web?query='
        // }, {
        //     name: '谷歌',
        //     img: '/导航页/images/logo_2.jpg',
        //     url: 'https://www.google.com/search?q='
        // }, {
        //     name: '必应',
        //     img: '/导航页/images/logo_3.jpg',
        //     url: 'https://cn.bing.com/search?q='
        // }, {
        //     name: '360',
        //     img: '/导航页/images/logo_5.jpg',
        //     url: 'https://www.so.com/s?&q='
        // },{
        //     name: '微博',
        //     img: '/导航页/images/logo_6.jpg',
        //     url: 'https://s.weibo.com/weibo?q='
        // },{
        //     name: '有道',
        //     img: '/导航页/images/logo_8.jpg',
        //     url: 'http://www.youdao.com/w/'
        // },{
        //     name: '中搜',
        //     img: '/导航页/images/logo_9.jpg',
        //     url: 'http://www.zhongsou.com/third.cgi?w='
        // },{
        //     name: '淘宝',
        //     img: '/导航页/images/logo_10.jpg',
        //     url: 'https://www.etao.com/search.htm?nq='
        // }
        // ]
        data: [{
                name: "百度",
                img: "/导航页/images/baidu.png",
                url: "https://www.baidu.com/s?wd="
            },
            {
                name: "必应",
                img: "/导航页/images/biying.png",
                url: "https://cn.bing.com/search?q="
            },
            {
                name: "搜狗",
                img: "/导航页/images/sougou.png",
                url: "https://www.sogou.com/web?query="
            },
            {
                name: "360",
                img: "/导航页/images/360.png",
                url: "https://www.so.com/s?q="
            },
            {
                name: '谷歌',
                img: '/导航页/images/guge.png',
                url: 'https://www.google.com/search?q='
            },
            {
                name: '有道',
                img: '/导航页/images/youdao.png',
                url: 'http://www.youdao.com/w/'
            },
            {
                name: '淘宝',
                img: '/导航页/images/taobao.png',
                url: 'https://www.etao.com/search.htm?nq='
            },
            {
                name: "Magi",
                img: "/导航页/images/magi2.png",
                url: "https://magi.com/search?q="
            },
            {
                name: "ceek",
                img: "/导航页/images/CEEK.png",
                url: "http://www.ceek.jp/search.cgi?q="
            },
            {
                name: "知乎",
                img: "/导航页/images/zhihu.png",
                url: "https://www.zhihu.com/search?type=content&q="
            },
            {
                name: "微博",
                img: "/导航页/images/weibo.png",
                url: "https://s.weibo.com/weibo/"
            },
            {
                name: "B站",
                img: "/导航页/images/bzhan.png",
                url: "http://search.bilibili.com/all?keyword="
            },
            {
                name: "新片场",
                img: "/导航页/images/xinpianchang.png",
                url: "https://www.xinpianchang.com/index.php?app=search&kw="
            },
            {
                name: "豆瓣",
                img: "/导航页/images/douban.png",
                url: "https://www.douban.com/search?source=suggest&q="
            },
            {
                name: "公众号",
                img: "/导航页/images/gongzhonghao.png",
                url: "https://weixin.sogou.com/weixin?type=2&query="
            },
            {
                name: "花瓣网",
                img: "/导航页/images/huabanwang.png",
                url: "https://huaban.com/search/?q="
            },
            {
                name: "菜鸟",
                img: "/导航页/images/kaifa.png",
                url: "https://www.runoob.com/?s="
            },
            {
                name: "豆丁",
                img: "/导航页/images/doudingshufang.png",
                url: "https://www.docin.com/search.do?nkey="
            },
            {
                name: "Gitee",
                img: "/导航页/images/gitee.png",
                url: "https://search.gitee.com/?skin=rec&type=repository&q="
            },
            {
                name: "GitHub",
                img: "/导航页/images/github.png",
                url: "https://github.com/search?utf8=✓&q="
            }
        ]
    }
    for (var i = 0; i < search.data.length; i++) {
        var addList = '<li><img src="' + search.data[i].img + '"/>' + search.data[i].name + '</li>'
            // var t = '<li><svg class="icon" aria-hidden = "true" ><use xlink:href="#' + search.data[i].icon + '"></use></svg>' + search.data[i].name + "</li > ";
        console.log(search.data[i].icon)
        $('.search-engine-list').append(addList);
    }

    $('.search-icon, .search-engine').hover(function() {
        $('.search-engine').css('display', 'block')
    }, function() {
        $('.search-engine').css('display', 'none')
    });

    $('#hot-btn').on('click', function() {
        $(this).toggleClass('off');
        if (storage.stopHot == 'true') {
            storage.stopHot = false
        } else {
            storage.stopHot = true
        }
        // "true" == storage.stopHot ? ($(this).prop("checked", !1), storage.stopHot = !1) : (storage.stopHot = !0, $(this).prop("checked", !0)),
        // if ($("#hot-btn").is(':checked')){
        //     console.log(storage.stopHot);
        //     $(".sp-start").css("display","none");
        //     $(".sp-close").css("display","block");

        // }else{
        //     console.log(storage.stopHot);
        //     $(".sp-start").css("display","block");
        //     $(".sp-close").css("display","none");

        // }
        console.log(storage.stopHot)
    });

    $('.search-engine-list li').click(function() {
        var _index = $(this).index();
        var thisImg = $(this).children().attr('src');
        $('.search-icon').attr('src', thisImg)
        thisSearch = search.data[_index].url;
        $('.search-engine').css('display', 'none')

        storage.searchEngine = [thisSearch, thisImg]
    })
})
$("#search-btn").click(function() {
    var textValue = $('#txt').val();
    if (textValue != '') {
        window.open(thisSearch + $('#txt').val())
            // $('#txt').val('');
        $('#box ul').html('')
    } else {
        new $.zui.Messager('请输入关键字', {
            icon: '/导航页/images/bell.png', // 定义消息图标
            type: 'danger',
            placement: 'top',
            close: false
        }).show();
    }
});

/*
 * @Author: Marte
 * @Date:   2018-05-20 09:03:53
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-06-11 16:18:47
 */

'use strict';


// 在这里修改id，和速度
// $(function() {
//     if (deviceVal == 'phone') {
//         $('#menu').css({ 'overflow': 'hidden', 'overflow-y': 'scroll' })
//         return
//     }
//     var api1 = new myApi();
//     api1.mouseScroll.inte($('#menu'), 30);
// })

$(document).ready(function() {
    $("#menu").click(function(event) {
        $(this).toggleClass('on');
        $(".list").toggleClass('closed');
        $(".mywth").toggleClass('hidden');
    });
    $("#content").click(function(event) {
        $(".on").removeClass('on');
        $(".list").addClass('closed');
        $(".mywth").removeClass('hidden');
    });
});

//下面别动
function myApi() {

    this.mouseScroll = {

        inte: function(obj, value) {
            this.OBJ = obj;
            this.addscroll(obj);



            var outH = obj.outerHeight(),
                oScrollcontent = obj.children(':first'),
                contentH = oScrollcontent.outerHeight(),
                oYscrollinnerH = outH / contentH * outH,
                oYscrollouter = obj.find('#Yscrollouter'),
                oYscrollinner = obj.find('#Yscrollinner');

            obj.css({ 'position': 'relative', 'overflow': 'hidden' });
            oScrollcontent.css('position', 'absolute');

            if (contentH > outH) {
                this.mousehover(obj, oYscrollouter, oYscrollinner);
                this.mousewheel(obj, value, oScrollcontent, oYscrollinner, outH, contentH, oYscrollinnerH);
                this.mousemoved(obj, oScrollcontent, oYscrollouter, oYscrollinner, outH, contentH, oYscrollinnerH);
            };
        },

        addscroll: function(obj, value) {
            obj.append('<div id="Yscrollouter"><div id="Yscrollinner"></div></div>');
            $('#Yscrollinner').css('cursor', 'pointer');
        },

        mousehover: function(obj, outer, inner) {

            obj.hover(function() {
                outer.fadeIn(400);
            }, function() {
                outer.fadeOut(400);
            });

            inner.hover(function() {
                $('body').css({
                    '-moz-user-select': 'none',
                    '-webkit-user-select': 'none',
                    '-ms-user-select': 'none',
                    '-khtml-user-select': 'none',
                    'user-select': 'none',
                });
            }, function() {
                $('body').css({
                    '-moz-user-select': 'auto',
                    '-webkit-user-select': 'auto',
                    '-ms-user-select': 'auto',
                    '-khtml-user-select': 'auto',
                    'user-select': 'auto',
                });
            });

        },

        mousewheel: function(obj, value, O, inner, H1, H2, H3) {

            var oScrollcontentVal = value / (H1 - H3) * (H2 - H1);

            inner.height(H3); //滚动条高度

            obj.on('mousewheel', function(event, delta) { //绑定滚轮事件

                event.preventDefault(); //阻止浏览器默认为行

                var delta = event.originalEvent.wheelDelta;
                var oYscrollinnerTop = inner.position().top;

                var oScrollcontentTop = O.position().top;

                if (delta > 0) {
                    if (oYscrollinnerTop - value < 0) {
                        inner.css('top', 0);
                        O.css('top', 0);
                    } else {
                        inner.css('top', oYscrollinnerTop - value);
                        O.css('top', oScrollcontentTop + oScrollcontentVal);
                    }
                } else {
                    if (oYscrollinnerTop + value > H1 - H3) {
                        inner.css('top', H1 - H3);
                        O.css('top', H1 - H2);
                    } else {
                        inner.css('top', oYscrollinnerTop + value);
                        O.css('top', oScrollcontentTop - oScrollcontentVal);
                    }
                };
            });

        },

        mousemoved: function(obj, O, outer, inner, H1, H2, H3) {
            inner.on('mousedown', function(event) { //绑定鼠标事件

                var clientY = event.clientY,
                    oYscrollinnerTop = inner.position().top,
                    oScrollcontentTop = O.position().top,

                    moveY = 0;

                $(document).on('mousemove', function(event) {
                    moveY = event.clientY - clientY;
                    var oScrollcontentMove = moveY / (H1 - H3) * (H2 - H1);

                    if (oYscrollinnerTop + moveY < 0) {
                        inner.css('top', 0);
                        O.css('top', 0);
                    } else if (oYscrollinnerTop + moveY > H1 - H3) {
                        inner.css('top', H1 - H3);
                        O.css('top', H1 - H2);
                    } else {
                        inner.css('top', oYscrollinnerTop + moveY);
                        O.css('top', oScrollcontentTop - oScrollcontentMove);
                    }
                });

                $(document).on('mouseup', function(event) {
                    $(document).off('mousemove');
                })

            })
        }

    }
}