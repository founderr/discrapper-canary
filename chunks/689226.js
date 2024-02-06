"use strict";
n.r(t), n.d(t, {
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
    return h
  }
}), n("781738");
var i = n("867805"),
  l = n("407063"),
  r = n("315102"),
  o = n("773336"),
  a = n("49111");
let s = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
  u = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
  c = (0, o.isAndroid)(),
  d = (e, t) => {
    if (null == e) return null;
    let n = null != e.unicodeEmoji ? i.default.getByName(i.default.convertSurrogateToName(e.unicodeEmoji, !1)) : void 0;
    return {
      customIconSrc: E(e, t),
      unicodeEmoji: null != n ? n : void 0
    }
  },
  f = (e, t) => e.replace(/size=[0-9]+/g, "size=".concat((0, l.getBestMediaProxySize)(t * (0, l.getDevicePixelRatio)()))),
  E = (e, t) => {
    let {
      id: n,
      icon: i
    } = e;
    if (null == i) return;
    if (i.startsWith("data:")) return i;
    let o = r.SUPPORTS_WEBP ? "webp" : "png",
      d = "",
      f = "quality=lossless";
    return (null != t && (d = "size=" + (0, l.getBestMediaProxySize)(t * (0, l.getDevicePixelRatio)()), f = c ? "" : "&" + f), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(s, "/").concat(n, "/").concat(i, ".").concat(o, "?").concat(d).concat(f) : "".concat(u).concat(a.Endpoints.ROLE_ICON(n, i), "?").concat(d)
  },
  p = e => e.startsWith(s) || e.startsWith("".concat(u, "/roles")) && e.includes("/icons/"),
  h = (e, t) => {
    var n;
    let i = (null == t ? void 0 : null === (n = t.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
    return i || e.features.has(a.GuildFeatures.ROLE_ICONS)
  }