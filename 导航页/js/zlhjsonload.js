$(function() {
    $.getJSON("js/data.json", function(data) {
        $.each(data, function(i, item) {
            let tag = '<li class="title"><svg class="icon2" aria-hidden="true">';
            let icon = '<use xlink:href="#' + item.icon + '"></use>';
            let addList = tag + icon + '</svg> ' + item.title + '</li>';
            $('.list ul').append(addList);
            $.each(item.node, function(i, item) {
                let url = '<li><a rel="nofollow" href="' + item.url + '" target="_blank"' + '" class="tooltip">';
                let icon = '<svg class="icon2" aria-hidden="true"><use xlink:href="#' + item.icon + '"></use>';
                let href = '<use xlink:href="#' + item.icon + '"></use>';
                let addList = url + icon + '</svg>' + item.text + '<span class="tooltiptext">' + item.prompt + '</span>' + '</a></li>';
                $('.list ul').append(addList)
            })
        });
        // console.log('欢迎使用SoWanvfx丨影视领域创作者便捷导航。')
    });
    console.log('侧边栏 加载完成。')
});
$(function() {
    $.getJSON("js/zlhdata.json", function(data) {
        var ttt = "1"
        $.each(data, function(i, item) {
            // console.log(item.node)
            let tag = '<div class="col-sm-6 col-md-4 mb-3 dh"><div class="row ' + ttt + '">';
            // let icon = '<use xlink:href="#' + item.icon + '"></use>';
            let addList = tag + '<div class="col-xs-12" ><strong class="dhname" id="1">' + item.title + '</strong></div></div>';
            $('.trst').append(addList);
            $.each(item.node, function(i, it) {
                let url = '<div class="col-xs-4 mb-2"><a href="' + it.url + '" target="_blank">' + it.text + '</a></div>';
                $('.' + ttt).append(url)
            })
            ttt = ttt + 1
        });
        // console.log('欢迎使用SoWanvfx丨影视领域创作者便捷导航。')
    });
    console.log('侧边栏 加载完成。')
});