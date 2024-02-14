"use strict";
n.r(e), n.d(e, {
  isImageFile: function() {
    return s
  },
  isAnimatedImageUrl: function() {
    return u
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
  a = /\.(png|jpe?g|webp|gif|heic|heif|dng)$/i,
  s = t => null != t && a.test(t),
  l = /\.(webp|gif)$/i,
  u = t => r(t, l),
  o = (0, i.isIOS)() ? /\.(mp4|mov)$/i : ((0, i.isAndroid)(), /\.(mp4|webm|mov)$/i),
  c = t => r(t, o),
  d = t => null != t && o.test(t)