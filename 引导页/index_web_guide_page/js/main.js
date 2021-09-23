(function () {
    //百度统计
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?e3c076e221bb27230a158d9cba0a5c70";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
    //站长
    var cnzz_protocol = (("https:" === document.location.protocol) ? " https://" : " http://");
    document.write(unescape("%3Cspan style='display:none' id='cnzz_stat_icon_1262043670'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol +
        "s22.cnzz.com/z_stat.php%3Fid%3D1262043670%26show%3Dpic' type='text/javascript'%3E%3C/script%3E"));
})();

function stop() {
    return false;
}

document.oncontextmenu = stop;

function click(e) {
    if (document.layers) {
        if (e.which == 3) {
            oncontextmenu = 'return false';
        }
    }
}

if (document.layers) {
    document.captureEvents(Event.MOUSEDOWN);
}
document.onmousedown = click;
document.oncontextmenu = new Function("return false;")
document.onkeydown = document.onkeyup = document.onkeypress = function () {
    if (window.event.keyCode == 123) {
        window.event.returnValue = false;
        return (false);
    }
}

function mouseOver() {
    document.getElementById("mainimg").src = "./img/tx2.png";//鼠标悬浮时的旋转图标
}

function mouseOut() {
    document.getElementById('mainimg').src = "./img/tx.png"//默认的旋转图标
}
