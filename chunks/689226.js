"use strict";
n.r(e), n.d(e, {
  getRoleIconData: function() {
    return d
  },
  replaceRoleIconSourceSize: function() {
    return f
  },
  isRoleIconAssetUrl: function() {
    return C
  },
  canGuildUseRoleIcons: function() {
    return h
  }
}), n("781738");
var l = n("867805"),
  i = n("407063"),
  a = n("315102"),
  r = n("773336"),
  o = n("49111");
let s = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
  c = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
  u = (0, r.isAndroid)(),
  d = (t, e) => {
    if (null == t) return null;
    let n = null != t.unicodeEmoji ? l.default.getByName(l.default.convertSurrogateToName(t.unicodeEmoji, !1)) : void 0;
    return {
      customIconSrc: p(t, e),
      unicodeEmoji: null != n ? n : void 0
    }
  },
  f = (t, e) => t.replace(/size=[0-9]+/g, "size=".concat((0, i.getBestMediaProxySize)(e * (0, i.getDevicePixelRatio)()))),
  p = (t, e) => {
    let {
      id: n,
      icon: l
    } = t;
    if (null == l) return;
    if (l.startsWith("data:")) return l;
    let r = a.SUPPORTS_WEBP ? "webp" : "png",
      d = "",
      f = "quality=lossless";
    return (null != e && (d = "size=" + (0, i.getBestMediaProxySize)(e * (0, i.getDevicePixelRatio)()), f = u ? "" : "&" + f), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(s, "/").concat(n, "/").concat(l, ".").concat(r, "?").concat(d).concat(f) : "".concat(c).concat(o.Endpoints.ROLE_ICON(n, l), "?").concat(d)
  },
  C = t => t.startsWith(s) || t.startsWith("".concat(c, "/roles")) && t.includes("/icons/"),
  h = (t, e) => {
    var n;
    let l = (null == e ? void 0 : null === (n = e.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
    return l || t.features.has(o.GuildFeatures.ROLE_ICONS)
  }