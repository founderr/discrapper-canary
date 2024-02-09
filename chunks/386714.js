"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var l = n("845579"),
  u = n("217513");

function i(e, t) {
  if ("undefined" == typeof Image) return;
  let n = (0, u.getDisplayProfile)(e.user.id, t);
  if (null == n) return;
  let i = l.GifAutoPlay.getSetting(),
    a = n.getBannerURL({
      canAnimate: i,
      size: 480
    });
  if (null == a) return;
  let r = new Image;
  r.src = a
}