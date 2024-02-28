"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var i = n("845579"),
  l = n("217513");

function r(e, t) {
  if ("undefined" == typeof Image) return;
  let n = (0, l.getDisplayProfile)(e.user.id, t);
  if (null == n) return;
  let r = i.GifAutoPlay.getSetting(),
    u = n.getBannerURL({
      canAnimate: r,
      size: 480
    });
  if (null == u) return;
  let a = new Image;
  a.src = u
}