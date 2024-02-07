"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var a = n("845579"),
  l = n("217513");

function i(e, t) {
  if ("undefined" == typeof Image) return;
  let n = (0, l.getDisplayProfile)(e.user.id, t);
  if (null == n) return;
  let i = a.GifAutoPlay.getSetting(),
    r = n.getBannerURL({
      canAnimate: i,
      size: 480
    });
  if (null == r) return;
  let s = new Image;
  s.src = r
}