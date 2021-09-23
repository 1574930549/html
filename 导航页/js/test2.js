function aa(e) {
    if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
        window.applicationCache.update();
    }
}

function getHotkeyword(o) {
    $.ajax({
        type: "GET",
        url: "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su",
        async: !0,
        data: {
            wd: o
        },
        dataType: "jsonp",
        jsonp: "cb",
        success: function(o) {
            if ($("#box ul").text(""), hotList = o.s.length, hotList) {
                $("#box").css("display", "block");
                for (var e = 0; e < hotList; e++) e === hotList - 1 ? $("#box ul").append('<li id="lastHot"><span>' + (e + 1) + "</span>" + o.s[e] + "</li>") : $("#box ul").append("<li><span>" + (e + 1) + "</span>" + o.s[e] + "</li>"),
                    $("#box ul li").eq(e).click(function() {
                        $("#txt").val(this.childNodes[1].nodeValue),
                            window.open(thisSearch + this.childNodes[1].nodeValue),
                            $("#box").css("display", "none")
                    }),
                    0 === e ? ($("#box ul li").eq(e).css({
                        "border-top": "none"
                    }), $("#box ul span").eq(e).css({
                        color: "#ffffff00",
                        background: "#f54545"
                    })) : 1 === e ? $("#box ul span").eq(e).css({
                        color: "#ffffff00",
                        background: "#ff8547"
                    }) : 2 === e && $("#box ul span").eq(e).css({
                        color: "#ffffff00",
                        background: "#ffac38"
                    })
            } else $("#box").css("display", "none")
        },
        error: function(o) {
            console.log(o)
        }
    })
}(function() {
    function o(o, e, t) {
        for (var s = document.getElementsByClassName(o), n = document.getElementsByClassName(e), i = window.innerHeight || document.body.clientHeight, a = 6; a < s.length; a++) i <= t && "pc" === deviceVal ? (s[a].style.display = "none", n[0].style.marginTop = "5px") : (s[a].style.display = "block", n[0].style.marginTop = "0px")
    }
    window.onresize = function() {
            o("i-link-box", "linkList-item", 845)
        },
        window.onload = function() {
            o("i-link-box", "linkList-item", 845)
        },
        window.ShowHideElement = o
})();
var now = -1,
    resLength = 0,
    listIndex = -1,
    hotList = 0,
    thisSearch = "https://www.baidu.com/s?wd=",
    thisSearchIcon = "./logo.jpg",
    storage = window.localStorage;
storage.stopHot || (storage.stopHot = !0),
    "false" == storage.stopHot ? $("#hot-btn").prop("checked", !1) : $("#hot-btn").prop("checked", !0);
var ssData = storage.searchEngine;
null != storage.searchEngine && (ssData = ssData.split(","), thisSearch = ssData[0], $("#search-icon").children().attr("xlink:href", ssData[1]), $("#txt").attr("placeholder", ssData[2])),
    $("#txt").keyup(function(o) {
        if ($(this).val()) {
            if (38 == o.keyCode || 40 == o.keyCode || "true" != storage.stopHot) return;
            $("#search-clear").css("display", "block"),
                getHotkeyword($(this).val())
        } else $("#search-clear").css("display", "none"),
            $("#box").css("display", "none")
    }),
    $("#txt").keydown(function(o) {
        if (40 === o.keyCode) {
            listIndex === hotList - 1 ? listIndex = 0 : listIndex++,
                $("#box ul li").eq(listIndex).addClass("current").siblings().removeClass("current");
            var e = $("#box ul li").eq(listIndex)[0].childNodes[1].nodeValue;
            $("#txt").val(e)
        }
        if (38 === o.keyCode) {
            o.preventDefault && o.preventDefault(),
                o.returnValue && (o.returnValue = !1),
                0 === listIndex || -1 === listIndex ? listIndex = hotList - 1 : listIndex--,
                $("#box ul li").eq(listIndex).addClass("current").siblings().removeClass("current");
            e = $("#box ul li").eq(listIndex)[0].childNodes[1].nodeValue;
            $("#txt").val(e)
        }
        13 === o.keyCode && (window.open(thisSearch + $("#txt").val()), $("#box").css("display", "none"), $("#txt").blur(), $("#box ul li").removeClass("current"), listIndex = -1)
    }),
    $("#search-clear").click(function() {
        $("#txt").val(""),
            $("#search-clear").css("display", "none"),
            $("#box").css("display", "none"),
            console.log("清除输入框")
    }),
    $("#search-enter").click(function() {
        window.open(thisSearch + $("#txt").val())
    }),
    $("#txt").focus(function() {
        $(this).val() && "true" == storage.stopHot && getHotkeyword($(this).val())
    }),
    $("#txt").blur(function() {
        setTimeout(function() {
                $("#box").css("display", "none")
            },
            100)
    }),
    $(function() {
        for (var o = {
                    data: [{
                            name: "百度",
                            icon: "icon-baidu",
                            url: "https://www.baidu.com/s?wd="
                        },
                        {
                            name: "必应",
                            icon: "icon-biying",
                            url: "https://cn.bing.com/search?q="
                        },
                        {
                            name: "搜狗",
                            icon: "icon-sougou",
                            url: "https://www.sogou.com/web?query="
                        },
                        {
                            name: "360",
                            icon: "icon-icon-test",
                            url: "https://www.so.com/s?q="
                        },
                        {
                            name: "Magi",
                            icon: "icon-magi2",
                            url: "https://magi.com/search?q="
                        },
                        {
                            name: "ceek",
                            icon: "icon-CEEK",
                            url: "http://www.ceek.jp/search.cgi?q="
                        },
                        {
                            name: "知乎",
                            icon: "icon-zhihu",
                            url: "https://www.zhihu.com/search?type=content&q="
                        },
                        {
                            name: "微博",
                            icon: "icon-weibo",
                            url: "https://s.weibo.com/weibo/"
                        },
                        {
                            name: "B站",
                            icon: "icon-bzhan",
                            url: "http://search.bilibili.com/all?keyword="
                        },
                        {
                            name: "新片场",
                            icon: "icon-xinpianchang",
                            url: "https://www.xinpianchang.com/index.php?app=search&kw="
                        },
                        {
                            name: "豆瓣",
                            icon: "icon-douban",
                            url: "https://www.douban.com/search?source=suggest&q="
                        },
                        {
                            name: "公众号",
                            icon: "icon-gongzhonghao",
                            url: "https://weixin.sogou.com/weixin?type=2&query="
                        },
                        {
                            name: "花瓣网",
                            icon: "icon-huabanwang",
                            url: "https://huaban.com/search/?q="
                        },
                        {
                            name: "菜鸟",
                            icon: "icon-kaifa",
                            url: "https://www.runoob.com/?s="
                        },
                        {
                            name: "豆丁",
                            icon: "icon-doudingshufang",
                            url: "https://www.docin.com/search.do?nkey="
                        },
                        {
                            name: "Gitee",
                            icon: "icon-gitee",
                            url: "https://search.gitee.com/?skin=rec&type=repository&q="
                        },
                        {
                            name: "GitHub",
                            icon: "icon-github",
                            url: "https://github.com/search?q="
                        }
                    ]
                },
                e = 0; e < o.data.length; e++) {
            var t = '<li><svg class="icon" aria-hidden = "true" ><use xlink:href="#' + o.data[e].icon + '"></use></svg>' + o.data[e].name + "</li > ";
            $(".search-engine-list").append(t)
        }
        $("#search-icon, .search-engine").hover(function() {
                    $(".search-engine").css("display", "block")
                },
                function() {
                    $(".search-engine").css("display", "none")
                }),
            $("#hot-btn").on("click",
                function() {
                    "true" == storage.stopHot ? ($(this).prop("checked", !1), storage.stopHot = !1) : (storage.stopHot = !0, $(this).prop("checked", !0)),
                        console.log(storage.stopHot)
                }),
            $(".search-engine-list li").click(function() {
                var e = $(this).index(),
                    t = $(this).children().children().attr("xlink:href"),
                    s = "使用 " + $(this).text() + " 搜索哪些信息？";
                $("#txt").attr("placeholder", s),
                    $("#search-icon use").attr("xlink:href", t),
                    thisSearch = o.data[e].url,
                    $(".search-engine").css("display", "none"),
                    storage.searchEngine = [thisSearch, t, s]
            })

    });
console.log("%c 欢迎使用SoWanvfx导航v1.0版" + " 自用版 %c www.wanvfx.com", "color:#fff;background:linear-gradient(90deg,#448bff,#44e9ff);padding:5px 0;", "color:#000;background:linear-gradient(90deg,#44e9ff,#ffffff);padding:5px 10px 5px 0px;")
console.log('搜索器 加载完成。')