"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var r = n("845579"),
  i = n("217513");

function s(e, t) {
  if ("undefined" == typeof Image) return;
  let n = (0, i.getDisplayProfile)(e.user.id, t);
  if (null == n) return;
  let s = r.GifAutoPlay.getSetting(),
    l = n.getBannerURL({
      canAnimate: s,
      size: 480
    });
  if (null == l) return;
  let u = new Image;
  u.src = l
}