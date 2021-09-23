$(function(){
    $(".zizhi")["click"](function() { $(".Mask")["fadeIn"](200) });
    $(".Mask")["click"](function() { $(".Mask")["fadeOut"](200) });
    var text = [];
    var warr = [] ;
    var loadstr = '<div class="loading">正在连接  <span></span><span></span><span></span><span></span><span></span></div>';
	var str1 = '<div class="line ly-hide" style="display: block;" id="fp"><div class="left"> <img src="images/bing.png" width="40px"><div id="lx"><i></i> 您今年多大了？<br><span>点击下方按钮即可↓</span></div></div><div class="ly-clear"></div></div><div id="msg"></div>';

    text[0] = '<div class="line"><div class="left"> <img src="images/bing.png" width="40px"><div> <i></i>好的亲，为了更好的帮助你先了解一下您的皮肤情况，请认真回答接下来提问你的问题哦！</div></div><div class="ly-clear"></div></div>';
    text[1] = '<div class="line"><div class="left"> <img src="images/bing.png" width="40px"><div> <i></i>好的亲，为了更好的帮助你先了解一下您的皮肤情况，请认真回答接下来提问你的问题哦！</div></div><div class="ly-clear"></div></div>';
    text[2] = '<div class="line"><div class="left"> <img src="images/bing.png" width="40px"><div> <i></i>好的亲，为了更好的帮助你先了解一下您的皮肤情况，请认真回答接下来提问你的问题哦！</div></div><div class="ly-clear"></div></div>';
    text[3] = '<div class="line"><div class="left"> <img src="images/bing.png" width="40px"><div> <i></i>好的亲，为了更好的帮助你先了解一下您的皮肤情况，请认真回答接下来提问你的问题哦！</div></div><div class="ly-clear"></div></div>';
    text[4] = '<div class="line"><div class="left"> <img src="images/bing.png" width="40px"><div> <i></i>好的亲，为了更好的帮助你先了解一下您的皮肤情况，请认真回答接下来提问你的问题哦！</div></div><div class="ly-clear"></div></div>';
    

    warr[0]='<div class="line"><div class="left"> <img src="images/bing.png" width="40px"><div> <i></i>湿疹有多久了？</div></div><div class="ly-clear"></div></div>';
    warr[1]='<div class="line"><div class="left"> <img src="images/bing.png" width="40px"><div> <i></i>湿疹多发于哪些部位？</div></div><div class="ly-clear"></div></div>';
    warr[2]='<div class="line"><div class="left"> <img src="images/bing.png" width="40px"><div> <i></i>是否有过敏史或家族过敏史？</div></div><div class="ly-clear"></div></div>';
    warr[3]='<div class="line"><div class="left"> <img src="images/bing.png" width="40px"><div> <i></i>起湿疹的形态有哪些</div></div><div class="ly-clear"></div></div>';
    warr[4]='<div class="line"><div class="left"> <img src="images/bing.png" width="40px"><div> <i></i>是否有小水泡，红疙瘩，反复起湿疹？</div></div><div class="ly-clear"></div></div>';

    warr[5] = '<div class="line"><div class="left"> <img src="images/bing.png" width="40px"><div> <i></i>根据您的情况老师这边推荐您一款正规的产品<font color="red">"艾贝森林艾贝霜”</font>，您可以去淘宝或天猫旗舰店正规店铺搜索<font color="red">"艾贝森林艾贝霜”</font>。</div></div><div class="ly-clear"></div></div>';
    warr[6] = '<div class="line"><div class="left"> <img src="images/bing.png" width="40px"><div> <i></i>您也可以去京东搜索<font color="red">"艾贝森林艾贝霜”</font>。一定认准艾贝森林官方旗舰店正规店。</div></div><div class="ly-clear"></div></div>';
    warr[7] = '<div class="line"><div class="left"> <img src="images/bing.png" width="40px"><div> <i></i>淘宝天猫链接 ：<a href="https://m.tb.cn/h.VSc1l63?sm=2f32e1"><font color="red">https://m.tb.cn/h.VSc1l63?sm=2f32e1</font></a>京东链接：<a href="https://url.ms/waaef"><font color="red">https://url.ms/waaef</font></a>  </div></div><div class="ly-clear"></div></div>';
    warr[8] = '<div class="line"><div class="left"> <img src="images/bing.png" width="40px"><div> <i></i>淘宝天猫链接 ：<a href="https://m.tb.cn/h.VSc1l63?sm=2f32e1"><font color="red">https://m.tb.cn/h.VSc1l63?sm=2f32e1</font></a>京东链接：<a href="https://url.ms/waaef?"><font color="red">https://url.ms/waaef</font></a>  </div></div><div class="ly-clear"></div></div>';

	setTimeout(function() { $('.ly-section1 .line:first')["fadeIn"](100) }, 300);
    setTimeout(function() { $('.ly-section1 .line_zizhi')["fadeIn"](100) }, 600);
    setTimeout(function() { $("#messbox")["append"](loadstr) }, 1000);
    setTimeout(function() {
        $(".loading")["fadeOut"](0);
        $(".line")["css"]('display', 'block')
    }, 3000);
    setTimeout(function() {
        $("#messbox")["append"](str1);
        // window["scrollTo"](0, window["document"]["body"]["scrollHeight"])
    }, 3000);
    setTimeout(function() { $("#option_1")["fadeIn"](400) }, 3500);
    // 点击答案 
    var one = true;
    var cp = true;
    $(".select_botton a")["click"](function() {
        if(one){
            if(cp){
                one = false;
                setTimeout(function() {
                    $("body").css("height","auto")
                }, 1000);
            }
            one = false;
            var p_id = $(this).attr('data-w');
            var p_value = $(this).text();
            var wtindex=$(this).attr('wtindex');
            var index=$(this).attr('index');
            $("#msg").append(pj_html(p_value));
            if(wtindex != 1){
                window.scrollTo(0, document.body.scrollHeight);
            }
            // 第一个答案
            if(p_id <= text.length){
                addHtml(text[p_id-1], 1000);
            }
            setTimeout(function(){
                one = true;
                if(wtindex < warr.length -2){
                    addHtml(warr[wtindex-1], 1000);
                    if(wtindex <= 5){
                        wtindex++;
                        setTimeout(function() { $("#option_" + wtindex  ).fadeIn(400) ;}, 1300);
                    }
                    if(index == 0){
                        setTimeout(function() { 
                            addHtml(warr[wtindex], 3000);
                            wtindex++;
                            setTimeout(function() { $("#option_" + wtindex  ).fadeIn(400) }, 3300);
                        }, 1000);
                    }
                }
                // 最后一个答案选择
                if(wtindex == 7){
                    if(index == 1){
                        addHtml(warr[wtindex], 1000);
                    }else if(index == 2){
                        wtindex++;
                        addHtml(warr[wtindex], 1000);
                    }
                }
            },2000);
        }

        $(".select_botton").fadeOut(400)
    });

    function pj_html(str) { 
        var pzixun = '<div class="line"><div class="right"> <img src="images/header.png" width="40px"><div><i></i> ' + str + '</div></div><div class="ly-clear"></div></div>'; 
        return pzixun 
    }

    function addHtml(S4, KdIHmU5) {
        KdIHmU5 = KdIHmU5 || 5000;
		var we = new Array(1);
		     
        setTimeout(function() {
            $("#msg")["append"](S4);
		  
            // if ($("#msg").find("#wx").size()) {
            //     $("#msg").find("#wx").text(mess2);
            // }
            if ($("#msg").find(".wechat-number").size()) {
                $("#msg").find(".wechat-number").text(bdorderwx);
            }
            window["scrollTo"](0, window["document"]["body"]["scrollHeight"])
        }, KdIHmU5)
    }
})