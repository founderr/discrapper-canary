"use strict";
let r;
n.r(t), n.d(t, {
  DEFAULT_AVATARS: function() {
    return A
  },
  SUPPORTS_WEBP: function() {
    return I
  },
  getEmojiURL: function() {
    return O
  },
  getUserAvatarURL: function() {
    return L
  },
  getGuildMemberAvatarURLSimple: function() {
    return p
  },
  getGuildMemberAvatarURL: function() {
    return C
  },
  getUserBannerURL: function() {
    return m
  },
  getAvatarDecorationURL: function() {
    return P
  },
  getGuildMemberBannerURL: function() {
    return h
  },
  getVideoFilterAssetURL: function() {
    return b
  },
  isAnimatedIconHash: function() {
    return H
  },
  isVideoAssetHash: function() {
    return V
  },
  isAnimatedImageURL: function() {
    return w
  },
  default: function() {
    return K
  }
}), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
var i = n("552442"),
  o = n.n(i),
  l = n("522632"),
  u = n("249654"),
  a = n("234251"),
  s = n("407063"),
  E = n("240481"),
  _ = n("773336"),
  c = n("49111"),
  d = n("680894"),
  T = n("363577");
r = n("523096").default;
let A = r.DEFAULT_AVATARS;
r.DEFAULT_GROUP_DM_AVATARS;
let I = r.canUseWebp(),
  S = (0, _.isAndroid)();

function f(e) {
  let t, {
    endpoint: n,
    path: r,
    id: i,
    hash: o,
    size: u,
    canAnimate: a = !1,
    keepAspectRatio: E,
    format: _ = null
  } = e;
  if (null == i || null == o) return;
  let c = null != _ ? _ : a && H(o) ? "gif" : "jpg";
  a && V(o) && (c = "mp4");
  let d = window.GLOBAL_ENV.CDN_HOST;
  if (null != d ? ("jpg" === c && (c = I ? "webp" : "png"), t = "".concat(location.protocol, "//").concat(d, "/").concat(r, "/").concat(i, "/").concat(o, ".").concat(c)) : t = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + n(i, o, c), "mp4" === c) return t;
  let T = {};
  return null != u && (T.size = (0, s.getBestMediaProxySize)(u * (0, s.getDevicePixelRatio)())), null != E && (T.keep_aspect_ratio = E), t + "?".concat(l.stringify(T))
}

function O(e) {
  let {
    id: t,
    animated: n,
    size: r,
    forcePNG: i = !1
  } = e, o = I && !i ? "webp" : "png", l = I && !S ? "&quality=lossless" : "";
  return null != window.GLOBAL_ENV.CDN_HOST ? "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/emojis/").concat(t, ".").concat(n ? "gif" : o, "?size=").concat((0, s.getBestMediaProxySize)(r * (0, s.getDevicePixelRatio)())).concat(l) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + c.Endpoints.EMOJI(t, n ? "gif" : o)
}

function R(e, t) {
  if (null == e && null == t) return A[0];
  let n = (0, E.parseInteger)(t, 0);
  return n > 0 ? A[n % 5] : null != e ? A[o(e).shiftRight(22).mod(6).toJSNumber()] : A[0]
}

function N(e) {
  let {
    id: t,
    avatar: n,
    discriminator: i,
    bot: o
  } = e, l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.AVATAR_SIZE, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
  if (o && t !== d.CLYDE_AI_USER_ID) {
    let e = r.BOT_AVATARS[n];
    if (e) return e;
    if (null == n && "0000" === i) return A[0]
  }
  return f({
    endpoint: c.Endpoints.AVATAR,
    path: "avatars",
    id: t,
    hash: n,
    size: u,
    canAnimate: l,
    format: a
  })
}

function L(e) {
  var t;
  let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.AVATAR_SIZE,
    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
  return null !== (t = N(e, n, r, i)) && void 0 !== t ? t : R(e.id, e.discriminator)
}

function p(e) {
  let t, {
      guildId: n,
      userId: r,
      avatar: i,
      canAnimate: o = !1,
      size: u = c.AVATAR_SIZE
    } = e,
    a = o && H(i) ? "gif" : "jpg",
    {
      CDN_HOST: E
    } = window.GLOBAL_ENV;
  return null != E ? ("jpg" === a && (a = I ? "webp" : "png"), t = "".concat(location.protocol, "//").concat(E).concat(c.Endpoints.GUILD_MEMBER_AVATAR(n, r, i, a))) : t = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + c.Endpoints.GUILD_MEMBER_AVATAR(n, r, i, a), t + "?".concat(l.stringify({
    size: (0, s.getBestMediaProxySize)(u * (0, s.getDevicePixelRatio)())
  }))
}

function C(e) {
  let {
    userId: t,
    avatar: n,
    guildId: r
  } = e, i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return null == n ? null : p({
    userId: t,
    avatar: n,
    guildId: r,
    canAnimate: i
  })
}

function m(e) {
  let t, {
    id: n,
    banner: r,
    canAnimate: i,
    size: o
  } = e;
  if (null == r) return;
  let l = window.GLOBAL_ENV.CDN_HOST,
    u = i && H(r) ? "gif" : "png";
  return t = (null != l ? "".concat(location.protocol, "//").concat(l, "/banners/").concat(n, "/").concat(r, ".").concat(u) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + c.Endpoints.USER_BANNER(n, r, u)) + "?size=".concat((0, s.getBestMediaProxySize)(o * (0, s.getDevicePixelRatio)()))
}

function P(e) {
  let {
    avatarDecoration: t,
    size: n,
    canAnimate: r = !1
  } = e;
  if (null == t) return;
  let {
    CDN_HOST: i,
    API_ENDPOINT: o
  } = window.GLOBAL_ENV, l = c.Endpoints.AVATAR_DECORATION_PRESETS(t.asset), u = new URL(null != i ? "".concat(location.protocol, "//").concat(i).concat(l) : "".concat(location.protocol).concat(o).concat(l));
  return u.searchParams.set("size", "".concat((0, s.getBestMediaProxySize)(n * (0, s.getDevicePixelRatio)()))), u.searchParams.set("passthrough", "".concat(r && (0, a.isAnimatedAvatarDecoration)(t.asset))), u.toString()
}

function h(e) {
  let t, {
    id: n,
    guildId: r,
    banner: i,
    canAnimate: o,
    size: l
  } = e;
  if (null == i || null == r) return;
  let u = window.GLOBAL_ENV.CDN_HOST,
    a = o && H(i) ? "gif" : "png",
    E = c.Endpoints.GUILD_MEMBER_BANNER(r, n, i, a);
  return t = (null != u ? "".concat(location.protocol, "//").concat(u).concat(E) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + E) + "?size=".concat((0, s.getBestMediaProxySize)(l * (0, s.getDevicePixelRatio)()))
}

function D(e) {
  let t, {
    id: n,
    splash: r,
    size: i
  } = e;
  if (null == r) return null;
  null == i && (i = window.screen.width * (0, s.getDevicePixelRatio)()), i = (0, s.getBestMediaProxySize)(i);
  let o = window.GLOBAL_ENV.CDN_HOST;
  return t = (null != o ? "".concat(location.protocol, "//").concat(o, "/splashes/").concat(n, "/").concat(r, ".jpg") : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + c.Endpoints.GUILD_SPLASH(n, r)) + "?size=".concat(i)
}

function g(e) {
  let t, {
      id: n,
      banner: r
    } = e,
    i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  if (null == r) return null;
  let o = (0, s.getBestMediaProxySize)(240 * (0, s.getDevicePixelRatio)()),
    l = I ? "webp" : "jpg",
    u = i && H(r) ? "gif" : l,
    a = window.GLOBAL_ENV.CDN_HOST;
  return t = (null != a ? "".concat(location.protocol, "//").concat(a, "/banners/").concat(n, "/").concat(r, ".").concat(u) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + c.Endpoints.GUILD_BANNER(n, r, u)) + "?size=".concat(o), "jpg" === u && (t += "&quality=lossless"), t
}

function U(e) {
  let t, {
    id: n,
    homeHeader: r
  } = e;
  if (null == r) return null;
  let i = (0, s.getBestMediaProxySize)(1096 * (0, s.getDevicePixelRatio)()),
    o = window.GLOBAL_ENV.CDN_HOST;
  return t = (null != o ? "".concat(location.protocol, "//").concat(o, "/home-headers/").concat(n, "/").concat(r, ".png") : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + c.Endpoints.GUILD_HOME_HEADER(n, r)) + "?size=".concat(i)
}

function M(e) {
  let t, {
    id: n,
    splash: r,
    size: i
  } = e;
  if (null == r) return null;
  null == i && (i = window.screen.width * (0, s.getDevicePixelRatio)()), i = (0, s.getBestMediaProxySize)(i);
  let o = window.GLOBAL_ENV.CDN_HOST;
  return t = (null != o ? "".concat(location.protocol, "//").concat(o, "/discovery-splashes/").concat(n, "/").concat(r, ".jpg") : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + c.Endpoints.GUILD_DISCOVERY_SPLASH(n, r)) + "?size=".concat(i)
}

function v(e) {
  let {
    id: t,
    icon: n,
    size: r,
    canAnimate: i = !1
  } = e;
  return f({
    endpoint: c.Endpoints.GUILD_ICON,
    path: "icons",
    id: t,
    hash: n,
    size: r,
    canAnimate: i
  })
}

function G(e) {
  let {
    id: t,
    icon: n,
    size: r = c.AVATAR_SIZE,
    canAnimate: i = !1
  } = e;
  return f({
    endpoint: c.Endpoints.GUILD_TEMPLATE_ICON,
    path: "guild-templates",
    id: t,
    hash: n,
    size: r,
    canAnimate: i
  })
}

function y(e) {
  let {
    id: t,
    icon: n,
    size: r = c.AVATAR_SIZE,
    bot: i,
    botIconFirst: o,
    fallbackAvatar: l = !0
  } = e;
  if (null != i && o) {
    let e = N(i, !1, r);
    if (null != e) return e
  }
  if (null != n) return f({
    endpoint: c.Endpoints.APPLICATION_ICON,
    path: "app-icons",
    id: t,
    hash: n,
    size: r,
    canAnimate: !1
  });
  if (null != i) {
    let e = N(i, !1, r);
    if (null != e) return e
  }
  if (l) return T
}

function F(e) {
  let {
    id: t,
    hash: n,
    size: r = c.AVATAR_SIZE,
    keepAspectRatio: i = !1
  } = e;
  return f({
    endpoint: c.Endpoints.APPLICATION_ICON,
    path: "app-icons",
    id: t,
    hash: n,
    size: r,
    canAnimate: !1,
    keepAspectRatio: i
  })
}

function b(e) {
  let {
    userId: t,
    assetId: n,
    assetHash: r,
    size: i,
    canAnimate: o = !0
  } = e;
  return f({
    endpoint: (e, i, o) => c.Endpoints.VIDEO_FILTER_ASSET_STORAGE(t, n, r, o),
    path: "video-filter-assets/".concat(t),
    id: n,
    hash: r,
    size: i,
    canAnimate: o
  })
}

function B(e) {
  var t, n, i;
  let {
    id: o,
    icon: l,
    applicationId: a,
    size: s
  } = e;
  if (null != a) return null !== (t = y({
    id: a,
    icon: l,
    size: s
  })) && void 0 !== t ? t : r.DEFAULT_CHANNEL_ICON;
  return null !== (n = f({
    endpoint: c.Endpoints.CHANNEL_ICON,
    path: "channel-icons",
    id: o,
    hash: l,
    canAnimate: !1,
    size: s
  })) && void 0 !== n ? n : (i = o, r.DEFAULT_GROUP_DM_AVATARS[u.default.extractTimestamp(i) % r.DEFAULT_GROUP_DM_AVATARS.length])
}

function H(e) {
  return null != e && e.startsWith("a_")
}

function V(e) {
  return null != e && e.startsWith("v_")
}

function w(e) {
  return null != e && H(function(e) {
    let t;
    try {
      {
        let n = new URL(e);
        t = n.pathname
      }
      let n = t.split("/");
      return n.pop()
    } catch (e) {
      return null
    }
  }(e))
}

function k(e) {
  return "number" == typeof e ? e : {
    uri: null != e ? e : void 0
  }
}
var K = {
  getUserAvatarURL: L,
  getDefaultAvatarURL: R,
  getGuildMemberAvatarURL: C,
  getGuildMemberAvatarURLSimple: p,
  getGuildMemberAvatarSource: function(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      r = C(e, n);
    return null != r ? k(r) : t.getAvatarSource(e.guildId, n)
  },
  getGuildMemberBannerURL: h,
  getUserBannerURL: m,
  getAvatarDecorationURL: P,
  hasAnimatedGuildIcon: function(e) {
    return H(null == e ? void 0 : e.icon)
  },
  isAnimatedIconHash: H,
  getUserAvatarSource(e, t, n) {
    let r = L(e, t, n);
    return k(r)
  },
  getGuildIconURL: v,
  getGuildSplashURL: D,
  getGuildSplashSource: function(e) {
    return k(D(e))
  },
  getGuildDiscoverySplashURL: M,
  getGuildDiscoverySplashSource: function(e) {
    return k(M(e))
  },
  getGuildBannerURL: g,
  getGuildHomeHeaderURL: U,
  getResourceChannelIconURL: function(e) {
    let {
      channelId: t,
      icon: n
    } = e;
    return null == n ? null : f({
      endpoint: c.Endpoints.GUILD_RESOURCE_CHANNELS_ICON,
      path: "resource-channels",
      id: t,
      hash: n,
      size: c.AVATAR_SIZE,
      canAnimate: !0
    })
  },
  getNewMemberActionIconURL: function(e) {
    let {
      channelId: t,
      icon: n
    } = e;
    return null == n ? null : f({
      endpoint: c.Endpoints.GUILD_NEW_MEMBER_ACTIONS_ICON,
      path: "new-member-actions",
      id: t,
      hash: n,
      size: c.AVATAR_SIZE,
      canAnimate: !0
    })
  },
  getGuildTemplateIconURL: G,
  getChannelIconURL: B,
  getEmojiURL: O,
  getApplicationIconURL: y,
  getGameAssetURL: F,
  getVideoFilterAssetURL: b,
  getGameAssetSource(e) {
    let t = F(e);
    return k(t)
  },
  getGuildIconSource(e) {
    let t = v(e);
    return k(t)
  },
  getGuildTemplateIconSource(e) {
    let t = G(e);
    return k(t)
  },
  getGuildBannerSource(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = g(e, t);
    return k(n)
  },
  getGuildHomeHeaderSource(e) {
    let t = U(e);
    return k(t)
  },
  getChannelIconSource(e) {
    let t = B(e);
    return k(t)
  },
  getApplicationIconSource(e) {
    let t = y(e);
    return k(t)
  },
  makeSource: k,
  getAnimatableSourceWithFallback(e, t) {
    let n = t(e);
    if (!(0, _.isAndroid)() || !e || "number" == typeof n) return n;
    {
      let e = t(!1);
      return "number" != typeof e && e.uri === n.uri ? e : [n, {
        ...e,
        isForceCached: !0
      }]
    }
  }
}