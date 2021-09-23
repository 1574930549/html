document.charset = 'utf-8';

function searchTypeAction(index) {
    jQuery(".item").removeClass("item-active");
    jQuery(".item" + index).addClass("item-active");

    jQuery(".site").hide();
    jQuery(".site" + index).show();

    searchSiteSwitchAction(0, true);
}

function searchSiteSwitchAction(index, sys) {
    if (!sys) {
        if (jQuery(".sites" + index).hasClass("sites-active")) {
            searchNavAction();
            return;
        }
    }

    for (var i = 0; i < 100; i++) {
        jQuery(".sites").removeClass("sites-active-" + i);
    }
    jQuery(".sites").removeClass("sites-active");
    var indexType = jQuery(".item-active").attr("index");
    jQuery(".sites" + index).addClass("sites-active sites-active-" + indexType);
}

function searchNavAction() {
    var index = jQuery(".item-active").attr("index");
    var url = jQuery(".search-type-" + index + ".sites-active-" + index)[0].getAttribute("url");
    var kw = jQuery(".search-box-keyword").val();
    url = url.replace('_k_', kw);
    url = url.replace('_m_', 'www');
    url = url.replace('_wap_', 'www');
    url = encodeURI(url);
    window.open(url);
}