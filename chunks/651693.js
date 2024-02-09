"use strict";
n.r(e), n.d(e, {
  isImageFile: function() {
    return s
  },
  isAnimatedImageUrl: function() {
    return o
  },
  isVideoUrl: function() {
    return c
  },
  isVideoFile: function() {
    return d
  }
}), n("222007");
var i = n("773336");
let r = (t, e) => {
    if (null == t) return !1;
    let [n, i] = t.split(/\?/, 1);
    return e.test(n)
  },
  l = /\.(png|jpe?g|webp|gif|heic|heif|dng)$/i,
  s = t => null != t && l.test(t),
  a = /\.(webp|gif)$/i,
  o = t => r(t, a),
  u = (0, i.isIOS)() ? /\.(mp4|mov)$/i : ((0, i.isAndroid)(), /\.(mp4|webm|mov)$/i),
  c = t => r(t, u),
  d = t => null != t && u.test(t)