"use strict";
n.r(e), n.d(e, {
  getRoleIconData: function() {
    return d
  },
  replaceRoleIconSourceSize: function() {
    return f
  },
  isRoleIconAssetUrl: function() {
    return p
  },
  canGuildUseRoleIcons: function() {
    return _
  }
}), n("781738");
var i = n("867805"),
  r = n("407063"),
  l = n("315102"),
  s = n("773336"),
  a = n("49111");
let o = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
  u = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
  c = (0, s.isAndroid)(),
  d = (t, e) => {
    if (null == t) return null;
    let n = null != t.unicodeEmoji ? i.default.getByName(i.default.convertSurrogateToName(t.unicodeEmoji, !1)) : void 0;
    return {
      customIconSrc: h(t, e),
      unicodeEmoji: null != n ? n : void 0
    }
  },
  f = (t, e) => t.replace(/size=[0-9]+/g, "size=".concat((0, r.getBestMediaProxySize)(e * (0, r.getDevicePixelRatio)()))),
  h = (t, e) => {
    let {
      id: n,
      icon: i
    } = t;
    if (null == i) return;
    if (i.startsWith("data:")) return i;
    let s = l.SUPPORTS_WEBP ? "webp" : "png",
      d = "",
      f = "quality=lossless";
    return (null != e && (d = "size=" + (0, r.getBestMediaProxySize)(e * (0, r.getDevicePixelRatio)()), f = c ? "" : "&" + f), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(o, "/").concat(n, "/").concat(i, ".").concat(s, "?").concat(d).concat(f) : "".concat(u).concat(a.Endpoints.ROLE_ICON(n, i), "?").concat(d)
  },
  p = t => t.startsWith(o) || t.startsWith("".concat(u, "/roles")) && t.includes("/icons/"),
  _ = (t, e) => {
    var n;
    let i = (null == e ? void 0 : null === (n = e.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
    return i || t.features.has(a.GuildFeatures.ROLE_ICONS)
  }