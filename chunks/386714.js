"use strict";
l.r(i), l.d(i, {
  default: function() {
    return r
  }
});
var t = l("845579"),
  n = l("217513");

function r(e, i) {
  if ("undefined" == typeof Image) return;
  let l = (0, n.getDisplayProfile)(e.user.id, i);
  if (null == l) return;
  let r = t.GifAutoPlay.getSetting(),
    u = l.getBannerURL({
      canAnimate: r,
      size: 480
    });
  if (null == u) return;
  let o = new Image;
  o.src = u
}