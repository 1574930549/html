$(function() {
    $.getJSON("js/data.json", function(data) {
        $.each(data, function(i, item) {
            let tag = '<li class="title"><svg class="icon" aria-hidden="true">';
            let icon = '<use xlink:href="#' + item.icon + '"></use>';
            let addList = tag + icon + '</svg> ' + item.title + '</li>';
            $('.list ul').append(addList);
            $.each(item.node, function(i, item) {
                let url = '<li><a rel="nofollow" href="' + item.url + '" target="_blank"' + '" class="tooltip">';
                let icon = '<svg class="icon" aria-hidden="true"><use xlink:href="#' + item.icon + '"></use>';
                let href = '<use xlink:href="#' + item.icon + '"></use>';
                let addList = url + icon + '</svg>' + item.text + '<span class="tooltiptext">' + item.prompt + '</span>' + '</a></li>';
                $('.list ul').append(addList)
            })
        });
        console.log('欢迎使用SoWanvfx丨影视领域创作者便捷导航。')
    });
    console.log('侧边栏 加载完成。')
});