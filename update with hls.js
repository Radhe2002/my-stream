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
    var videoSrc = 'https://dai.fancode.com/linear/hls/pb/event/dvF4wcTrSVCbUUBU-QiSxA/stream/73a7978f-4e46-4c51-b068-31b11a2a236a:SIN2/master.m3u8?hdnea=st=1744525417~exp=1744525717~acl=*~id=027103a9-24a7-42d7-a1e7-7977898b6329~hmac=d249cdfd53bdbe40b57e111fabb64fa08fcedcfdaab6c009096def37c0f4512a';

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
