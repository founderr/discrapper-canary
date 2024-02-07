"use strict";
n.r(e), n.d(e, {
  isImageFile: function() {
    return o
  },
  isAnimatedImageUrl: function() {
    return s
  },
  isVideoUrl: function() {
    return c
  },
  isVideoFile: function() {
    return d
  }
}), n("222007");
var r = n("773336");
let i = (t, e) => {
    if (null == t) return !1;
    let [n, r] = t.split(/\?/, 1);
    return e.test(n)
  },
  u = /\.(png|jpe?g|webp|gif|heic|heif|dng)$/i,
  o = t => null != t && u.test(t),
  a = /\.(webp|gif)$/i,
  s = t => i(t, a),
  l = (0, r.isIOS)() ? /\.(mp4|mov)$/i : ((0, r.isAndroid)(), /\.(mp4|webm|mov)$/i),
  c = t => i(t, l),
  d = t => null != t && l.test(t)