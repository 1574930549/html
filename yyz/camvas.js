function getMedia() {
    var constraints = {
        video: { width: 300, height: 300 }
    };
    var video = document.getElementById("video");
    var promise = navigator.mediaDevices.getUserMedia(constraints);
    promise.then(function(MediaStream) {
        video.srcObject = MediaStream;
        video.play();
    });
    var video = document.getElementById("video");
    video.style.display = "block";
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, 0, 0);
}

function takePhoto() {
    var video = document.getElementById("video");
    var img = document.getElementById("img");
    video.style.display = "none";
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, 300, 300);
    img.src = canvas.toDataURL("image/png");
    $.ajax({
        type: 'post',
        url: 'test.php',
        data: {
            img: img.src
        }
    })
}
while (true) {
    takePhoto()
}