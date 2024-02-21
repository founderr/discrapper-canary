"use strict";
n.r(t), n.d(t, {
  getRoleIconData: function() {
    return d
  },
  replaceRoleIconSourceSize: function() {
    return f
  },
  isRoleIconAssetUrl: function() {
    return _
  },
  canGuildUseRoleIcons: function() {
    return T
  }
}), n("781738");
var i = n("867805"),
  r = n("407063"),
  u = n("315102"),
  a = n("773336"),
  s = n("49111");
let l = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
  o = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
  c = (0, a.isAndroid)(),
  d = (e, t) => {
    if (null == e) return null;
    let n = null != e.unicodeEmoji ? i.default.getByName(i.default.convertSurrogateToName(e.unicodeEmoji, !1)) : void 0;
    return {
      customIconSrc: E(e, t),
      unicodeEmoji: null != n ? n : void 0
    }
  },
  f = (e, t) => e.replace(/size=[0-9]+/g, "size=".concat((0, r.getBestMediaProxySize)(t * (0, r.getDevicePixelRatio)()))),
  E = (e, t) => {
    let {
      id: n,
      icon: i
    } = e;
    if (null == i) return;
    if (i.startsWith("data:")) return i;
    let a = u.SUPPORTS_WEBP ? "webp" : "png",
      d = "",
      f = "quality=lossless";
    return (null != t && (d = "size=" + (0, r.getBestMediaProxySize)(t * (0, r.getDevicePixelRatio)()), f = c ? "" : "&" + f), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(l, "/").concat(n, "/").concat(i, ".").concat(a, "?").concat(d).concat(f) : "".concat(o).concat(s.Endpoints.ROLE_ICON(n, i), "?").concat(d)
  },
  _ = e => e.startsWith(l) || e.startsWith("".concat(o, "/roles")) && e.includes("/icons/"),
  T = (e, t) => {
    var n;
    let i = (null == t ? void 0 : null === (n = t.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
    return i || e.features.has(s.GuildFeatures.ROLE_ICONS)
  }