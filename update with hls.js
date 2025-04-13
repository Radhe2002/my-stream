<!DOCTYPE html>
<html>
<head>
  <title>Live Stream</title>
  <script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
</head>
<body>
  <h1>My Live Stream</h1>
  <video id="video" width="640" height="360" controls autoplay></video>

  <script>
    var video = document.getElementById('video');
    var videoSrc = 'https://dai.fancode.com/linear/hls/pb/event/bXwJzw5HTzKk4pDsYgSDjw/stream/ed242981-6cea-4849-97b8-2cd9fc4d9052:TPE/master.m3u8?hdnea=st=1744541190~exp=1744541490~acl=*~id=69de2e1b-5413-4060-b1b4-359141b255a6~hmac=fe02e892d57a112a5bdafa98add36b0e75f1c276486a8f9c4ebadb13d479ca4c';

    if (Hls.isSupported()) {
      var hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED,function() {
        video.play();
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = videoSrc;
      video.addEventListener('loadedmetadata',function() {
        video.play();
      });
    }
  </script>
</body>
</html>
