//改变透明度参数：图片对象，透明度：1-100的值
function setAlpha(imgObj, opacityValue) {
    imgObj.filters.alpha.opacity = parseInt(opacityValue);
}

//图片的显示大小[以宽度来限制]
function DrawImageW(imgObj, widthValue) {
   var image = new Image();
   image.src = imgObj.src;
   if (image.width > 0 && image.height > 0) {
       if (image.width >= widthValue) {
           imgObj.width = widthValue;
           imgObj.height = (image.height * widthValue) / image.width;
       } else {
           imgObj.width = image.width;
           imgObj.height = image.height;
       }
   }
}

//图片的显示大小[以高度来限制] 
function DrawImageH(imgObj, heightValue) {
   var image = new Image();
   image.src = imgObj.src;
   if (image.width > 0 && image.height > 0) {
       if (image.height >= heightValue) {
           imgObj.height = heightValue;
           imgObj.width = (image.width * heightValue) / image.height;
       } else {
           imgObj.width = image.width;
           imgObj.height = image.height;
       }
   }
}
//图片的显示大小[宽高同时限制]
function DrawImage(imgObj, widthValue, heightValue) {
   var image = new Image();
   image.src = imgObj.src;
   if (image.width > 0 && image.height > 0) {
       if (image.height > heightValue || image.width > widthValue) {
           var h = 0, w, wflg = false;
           if (image.height > heightValue)
               wflg = true;
           if (wflg) {
               w = widthValue;
              h = (image.height * widthValue) / image.width;
           }
           if (h == 0 || h > heightValue) {
               h = heightValue;
               w = (image.width * heightValue) / image.height;
           }
           //alert(w)
           //alert(h)
           imgObj.width = w;
           imgObj.height = h;
            } else {
           imgObj.width = image.width;
           imgObj.height = image.height;
       }
   }
}

function zoomImg(imgObj) {
   var zoom = parseInt(imgObj.style.zoom, 10) || 100; zoom += event.wheelDelta / 12; if (zoom > 0) imgObj.style.zoom = zoom + '%';
   return false;
}
