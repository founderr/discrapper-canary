"use strict";
n.r(t), n.d(t, {
  getRoleIconData: function() {
    return d
  },
  replaceRoleIconSourceSize: function() {
    return f
  },
  isRoleIconAssetUrl: function() {
    return E
  },
  canGuildUseRoleIcons: function() {
    return p
  }
}), n("781738");
var i = n("867805"),
  r = n("407063"),
  s = n("315102"),
  l = n("773336"),
  a = n("49111");
let u = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
  o = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
  c = (0, l.isAndroid)(),
  d = (e, t) => {
    if (null == e) return null;
    let n = null != e.unicodeEmoji ? i.default.getByName(i.default.convertSurrogateToName(e.unicodeEmoji, !1)) : void 0;
    return {
      customIconSrc: h(e, t),
      unicodeEmoji: null != n ? n : void 0
    }
  },
  f = (e, t) => e.replace(/size=[0-9]+/g, "size=".concat((0, r.getBestMediaProxySize)(t * (0, r.getDevicePixelRatio)()))),
  h = (e, t) => {
    let {
      id: n,
      icon: i
    } = e;
    if (null == i) return;
    if (i.startsWith("data:")) return i;
    let l = s.SUPPORTS_WEBP ? "webp" : "png",
      d = "",
      f = "quality=lossless";
    return (null != t && (d = "size=" + (0, r.getBestMediaProxySize)(t * (0, r.getDevicePixelRatio)()), f = c ? "" : "&" + f), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(u, "/").concat(n, "/").concat(i, ".").concat(l, "?").concat(d).concat(f) : "".concat(o).concat(a.Endpoints.ROLE_ICON(n, i), "?").concat(d)
  },
  E = e => e.startsWith(u) || e.startsWith("".concat(o, "/roles")) && e.includes("/icons/"),
  p = (e, t) => {
    var n;
    let i = (null == t ? void 0 : null === (n = t.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
    return i || e.features.has(a.GuildFeatures.ROLE_ICONS)
  }