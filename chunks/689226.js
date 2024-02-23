"use strict";
n.r(t), n.d(t, {
  getRoleIconData: function() {
    return c
  },
  replaceRoleIconSourceSize: function() {
    return f
  },
  isRoleIconAssetUrl: function() {
    return E
  },
  canGuildUseRoleIcons: function() {
    return v
  }
}), n("781738");
var i = n("867805"),
  l = n("407063"),
  r = n("315102"),
  s = n("773336"),
  a = n("49111");
let u = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
  o = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
  d = (0, s.isAndroid)(),
  c = (e, t) => {
    if (null == e) return null;
    let n = null != e.unicodeEmoji ? i.default.getByName(i.default.convertSurrogateToName(e.unicodeEmoji, !1)) : void 0;
    return {
      customIconSrc: h(e, t),
      unicodeEmoji: null != n ? n : void 0
    }
  },
  f = (e, t) => e.replace(/size=[0-9]+/g, "size=".concat((0, l.getBestMediaProxySize)(t * (0, l.getDevicePixelRatio)()))),
  h = (e, t) => {
    let {
      id: n,
      icon: i
    } = e;
    if (null == i) return;
    if (i.startsWith("data:")) return i;
    let s = r.SUPPORTS_WEBP ? "webp" : "png",
      c = "",
      f = "quality=lossless";
    return (null != t && (c = "size=" + (0, l.getBestMediaProxySize)(t * (0, l.getDevicePixelRatio)()), f = d ? "" : "&" + f), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(u, "/").concat(n, "/").concat(i, ".").concat(s, "?").concat(c).concat(f) : "".concat(o).concat(a.Endpoints.ROLE_ICON(n, i), "?").concat(c)
  },
  E = e => e.startsWith(u) || e.startsWith("".concat(o, "/roles")) && e.includes("/icons/"),
  v = (e, t) => {
    var n;
    let i = (null == t ? void 0 : null === (n = t.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
    return i || e.features.has(a.GuildFeatures.ROLE_ICONS)
  }