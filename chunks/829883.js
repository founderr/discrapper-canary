"use strict";
n.d(t, {
  _b: function() {
    return T
  },
  o: function() {
    return d
  },
  zt: function() {
    return I
  },
  zy: function() {
    return c
  }
}), n(757143);
var i = n(633302),
  r = n(134432),
  s = n(768581),
  o = n(358085),
  a = n(981631);
let l = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
  u = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
  _ = (0, o.isAndroid)(),
  c = (e, t) => {
    if (null == e) return null;
    let n = null != e.unicodeEmoji ? i.ZP.getByName(i.ZP.convertSurrogateToName(e.unicodeEmoji, !1)) : void 0;
    return {
      customIconSrc: E(e, t),
      unicodeEmoji: null != n ? n : void 0
    }
  },
  d = (e, t) => e.replace(/size=[0-9]+/g, "size=".concat((0, r.oO)(t * (0, r.x_)()))),
  E = (e, t) => {
    let {
      id: n,
      icon: i
    } = e;
    if (null == i) return;
    if (i.startsWith("data:")) return i;
    let o = s.$k ? "webp" : "png",
      c = "",
      d = "quality=lossless";
    return (null != t && (c = "size=" + (0, r.oO)(t * (0, r.x_)()), d = _ ? "" : "&" + d), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(l, "/").concat(n, "/").concat(i, ".").concat(o, "?").concat(c).concat(d) : "".concat(u).concat(a.ANM.ROLE_ICON(n, i), "?").concat(c)
  },
  I = e => e.startsWith(l) || e.startsWith("".concat(u, "/roles")) && e.includes("/icons/"),
  T = (e, t) => {
    var n;
    return (null == t ? void 0 : null === (n = t.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null || e.features.has(a.oNc.ROLE_ICONS)
  }