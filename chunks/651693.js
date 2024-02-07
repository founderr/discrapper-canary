"use strict";
n.r(t), n.d(t, {
  isImageFile: function() {
    return s
  },
  isAnimatedImageUrl: function() {
    return u
  },
  isVideoUrl: function() {
    return d
  },
  isVideoFile: function() {
    return c
  }
}), n("222007");
var l = n("773336");
let i = (e, t) => {
    if (null == e) return !1;
    let [n, l] = e.split(/\?/, 1);
    return t.test(n)
  },
  r = /\.(png|jpe?g|webp|gif|heic|heif|dng)$/i,
  s = e => null != e && r.test(e),
  a = /\.(webp|gif)$/i,
  u = e => i(e, a),
  o = (0, l.isIOS)() ? /\.(mp4|mov)$/i : ((0, l.isAndroid)(), /\.(mp4|webm|mov)$/i),
  d = e => i(e, o),
  c = e => null != e && o.test(e)