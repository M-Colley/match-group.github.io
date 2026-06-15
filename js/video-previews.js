// Hover-to-play publication video previews (MATCH Lab).
// Styling lives in css/main.scss (.pub-video-preview / .pub-thumb.has-video);
// this only wires play/pause on hover. No-ops on pages without previews.
(function () {
  function init() {
    var previews = document.querySelectorAll('.pub-thumb video.pub-video-preview');
    previews.forEach(function (video) {
      var container = video.closest('.pub-thumb');
      if (!container) return;
      container.addEventListener('mouseenter', function () {
        var p = video.play();
        if (p && p.catch) { p.catch(function () {}); } // ignore autoplay blocks
      });
      container.addEventListener('mouseleave', function () {
        video.pause();
        video.currentTime = 0;
      });
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
