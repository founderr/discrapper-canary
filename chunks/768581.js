let r;
n.d(t, {
    $k: function () {
        return v;
    },
    CA: function () {
        return U;
    },
    F8: function () {
        return ei;
    },
    JM: function () {
        return P;
    },
    NZ: function () {
        return G;
    },
    aN: function () {
        return x;
    },
    ay: function () {
        return en;
    },
    gT: function () {
        return L;
    },
    ov: function () {
        return M;
    },
    pK: function () {
        return S;
    },
    rI: function () {
        return X;
    },
    tp: function () {
        return k;
    },
    xR: function () {
        return et;
    }
});
var i = n(315314);
var a = n(610138);
var o = n(216116);
var s = n(78328);
var l = n(815648);
var u = n(47120);
var c = n(654861),
    d = n.n(c),
    _ = n(664751),
    E = n(864106),
    f = n(134432),
    h = n(930153),
    p = n(358085),
    m = n(709054),
    I = n(981631),
    T = n(377668),
    g = n(970952);
let S = (r = n(426563).Z).DEFAULT_AVATARS,
    A = r.DEFAULT_PROVISIONAL_AVATARS;
r.DEFAULT_GROUP_DM_AVATARS;
let v = r.canUseWebp(),
    N = 5,
    O = 240,
    R = 1096,
    C = (0, p.isAndroid)();
function y(e) {
    let t,
        { endpoint: n, path: r, id: i, hash: a, size: o, canAnimate: s = !1, keepAspectRatio: l, format: u = null } = e;
    if (null == i || null == a) return;
    let c = null != u ? u : s && et(a) ? 'gif' : 'jpg';
    s && en(a) && (c = 'mp4');
    let d = window.GLOBAL_ENV.CDN_HOST;
    if ((null != d ? ('jpg' === c && (c = v ? 'webp' : 'png'), (t = ''.concat(location.protocol, '//').concat(d, '/').concat(r, '/').concat(i, '/').concat(a, '.').concat(c))) : (t = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + n(i, a, c)), 'mp4' === c)) return t;
    let E = {};
    return null != o && (E.size = (0, f.oO)(o * (0, f.x_)())), null != l && (E.keep_aspect_ratio = l), t + '?'.concat(_.stringify(E));
}
function L(e) {
    let { id: t, animated: n, size: r, forcePNG: i = !1 } = e,
        a = v && !i ? 'webp' : 'png',
        o = v && !C ? '&quality=lossless' : '';
    return null != window.GLOBAL_ENV.CDN_HOST
        ? ''
              .concat(location.protocol, '//')
              .concat(window.GLOBAL_ENV.CDN_HOST, '/emojis/')
              .concat(t, '.')
              .concat(n ? 'gif' : a, '?size=')
              .concat((0, f.oO)(r * (0, f.x_)(), C))
              .concat(o)
        : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + I.ANM.EMOJI(t, n ? 'gif' : a);
}
function b(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = n ? A : S;
    if (null == e && null == t) return r[0];
    let i = (0, h.Lk)(t, 0);
    return i > 0 ? r[i % N] : null != e ? r[d()(e).shiftRight(22).mod(r.length).toJSNumber()] : r[0];
}
function D(e) {
    let { id: t, avatar: n, discriminator: i, bot: a } = e,
        o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : I.IXf,
        l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
    if (a && t !== T.fL) {
        let e = r.BOT_AVATARS[n];
        if (e) return e;
        if (null == n && '0000' === i) return S[0];
    }
    return y({
        endpoint: I.ANM.AVATAR,
        path: 'avatars',
        id: t,
        hash: n,
        size: s,
        canAnimate: o,
        format: l
    });
}
function M(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : I.IXf,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
    return null !== (t = D(e, n, r, i)) && void 0 !== t ? t : b(e.id, e.discriminator, e.isProvisional);
}
function P(e) {
    let t,
        { guildId: n, userId: r, avatar: i, canAnimate: a = !1, size: o = I.IXf } = e,
        s = a && et(i) ? 'gif' : 'jpg',
        { CDN_HOST: l } = window.GLOBAL_ENV;
    return (
        null != l
            ? ('jpg' === s && (s = v ? 'webp' : 'png'),
              (t = ''
                  .concat(location.protocol, '//')
                  .concat(l)
                  .concat(I.ANM.GUILD_MEMBER_AVATAR(n, r, i, s))))
            : (t = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + I.ANM.GUILD_MEMBER_AVATAR(n, r, i, s)),
        t + '?'.concat(_.stringify({ size: (0, f.oO)(o * (0, f.x_)()) }))
    );
}
function U(e) {
    let { userId: t, avatar: n, guildId: r } = e,
        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null == n
        ? null
        : P({
              userId: t,
              avatar: n,
              guildId: r,
              canAnimate: i
          });
}
function w(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = U(e, n);
    return null != r ? ea(r) : t.getAvatarSource(e.guildId, n);
}
function x(e) {
    let t,
        { id: n, banner: r, canAnimate: i, size: a } = e;
    if (null == r) return;
    let o = window.GLOBAL_ENV.CDN_HOST,
        s = i && et(r) ? 'gif' : 'png';
    return (t = (null != o ? ''.concat(location.protocol, '//').concat(o, '/banners/').concat(n, '/').concat(r, '.').concat(s) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + I.ANM.USER_BANNER(n, r, s)) + '?size='.concat((0, f.oO)(a * (0, f.x_)())));
}
function G(e) {
    let { avatarDecoration: t, size: n, canAnimate: r = !1 } = e;
    if (null == t || (0, E.fO)(t)) return;
    if (/^data:/.test(t.asset)) return t.asset;
    let { CDN_HOST: i, API_ENDPOINT: a } = window.GLOBAL_ENV,
        o = I.ANM.AVATAR_DECORATION_PRESETS(t.asset),
        s = new URL(null != i ? ''.concat(location.protocol, '//').concat(i).concat(o) : ''.concat(location.protocol).concat(a).concat(o));
    return s.searchParams.set('size', ''.concat((0, f.oO)(n * (0, f.x_)()))), s.searchParams.set('passthrough', ''.concat(r && (0, E.ae)(t.asset))), s.toString();
}
function k(e) {
    let t,
        { id: n, guildId: r, banner: i, canAnimate: a, size: o } = e;
    if (null == i || null == r) return;
    let s = window.GLOBAL_ENV.CDN_HOST,
        l = a && et(i) ? 'gif' : 'png',
        u = I.ANM.GUILD_MEMBER_BANNER(r, n, i, l);
    return (t = (null != s ? ''.concat(location.protocol, '//').concat(s).concat(u) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + u) + '?size='.concat((0, f.oO)(o * (0, f.x_)())));
}
function B(e) {
    let t,
        { id: n, splash: r, size: i } = e;
    if (null == r) return null;
    null == i && (i = window.screen.width * (0, f.x_)()), (i = (0, f.oO)(i));
    let a = window.GLOBAL_ENV.CDN_HOST;
    return (t = (null != a ? ''.concat(location.protocol, '//').concat(a, '/splashes/').concat(n, '/').concat(r, '.jpg') : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + I.ANM.GUILD_SPLASH(n, r)) + '?size='.concat(i));
}
function F(e) {
    return ea(B(e));
}
function Z(e) {
    let t,
        { id: n, banner: r } = e,
        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (null == r) return null;
    let a = (0, f.oO)(O * (0, f.x_)()),
        o = v ? 'webp' : 'jpg',
        s = i && et(r) ? 'gif' : o,
        l = window.GLOBAL_ENV.CDN_HOST;
    return (t = (null != l ? ''.concat(location.protocol, '//').concat(l, '/banners/').concat(n, '/').concat(r, '.').concat(s) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + I.ANM.GUILD_BANNER(n, r, s)) + '?size='.concat(a)), 'jpg' === s && (t += '&quality=lossless'), t;
}
function V(e) {
    let t,
        { id: n, homeHeader: r } = e;
    if (null == r) return null;
    let i = (0, f.oO)(R * (0, f.x_)()),
        a = window.GLOBAL_ENV.CDN_HOST;
    return (t = (null != a ? ''.concat(location.protocol, '//').concat(a, '/home-headers/').concat(n, '/').concat(r, '.png') : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + I.ANM.GUILD_HOME_HEADER(n, r)) + '?size='.concat(i));
}
function H(e) {
    let { channelId: t, icon: n } = e;
    return null == n
        ? null
        : y({
              endpoint: I.ANM.GUILD_RESOURCE_CHANNELS_ICON,
              path: 'resource-channels',
              id: t,
              hash: n,
              size: I.IXf,
              canAnimate: !0
          });
}
function Y(e) {
    let { channelId: t, icon: n } = e;
    return null == n
        ? null
        : y({
              endpoint: I.ANM.GUILD_NEW_MEMBER_ACTIONS_ICON,
              path: 'new-member-actions',
              id: t,
              hash: n,
              size: I.IXf,
              canAnimate: !0
          });
}
function j(e) {
    let t,
        { id: n, splash: r, size: i } = e;
    if (null == r) return null;
    null == i && (i = window.screen.width * (0, f.x_)()), (i = (0, f.oO)(i));
    let a = window.GLOBAL_ENV.CDN_HOST;
    return (t = (null != a ? ''.concat(location.protocol, '//').concat(a, '/discovery-splashes/').concat(n, '/').concat(r, '.jpg') : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + I.ANM.GUILD_DISCOVERY_SPLASH(n, r)) + '?size='.concat(i));
}
function W(e) {
    return ea(j(e));
}
function K(e) {
    let { id: t, icon: n, size: r, canAnimate: i = !1 } = e;
    return y({
        endpoint: I.ANM.GUILD_ICON,
        path: 'icons',
        id: t,
        hash: n,
        size: r,
        canAnimate: i
    });
}
function z(e) {
    let { id: t, icon: n, size: r = I.IXf, canAnimate: i = !1 } = e;
    return y({
        endpoint: I.ANM.GUILD_TEMPLATE_ICON,
        path: 'guild-templates',
        id: t,
        hash: n,
        size: r,
        canAnimate: i
    });
}
function q(e) {
    let { id: t, icon: n, size: r = I.IXf, bot: i, botIconFirst: a, fallbackAvatar: o = !0 } = e;
    if (null != i && a) {
        let e = D(i, !1, r);
        if (null != e) return e;
    }
    if (null != n)
        return y({
            endpoint: I.ANM.APPLICATION_ICON,
            path: 'app-icons',
            id: t,
            hash: n,
            size: r,
            canAnimate: !1
        });
    if (null != i) {
        let e = D(i, !1, r);
        if (null != e) return e;
    }
    if (o) return g;
}
function Q(e) {
    let { id: t, hash: n, size: r = I.IXf, keepAspectRatio: i = !1, format: a } = e;
    return y({
        endpoint: I.ANM.APPLICATION_ICON,
        path: 'app-icons',
        id: t,
        hash: n,
        size: r,
        canAnimate: !1,
        keepAspectRatio: i,
        format: a
    });
}
function X(e) {
    let { userId: t, assetId: n, assetHash: r, size: i, canAnimate: a = !0 } = e;
    return y({
        endpoint: (e, i, a) => I.ANM.VIDEO_FILTER_ASSET_STORAGE(t, n, r, a),
        path: 'video-filter-assets/'.concat(t),
        id: n,
        hash: r,
        size: i,
        canAnimate: a
    });
}
function $(e) {
    return r.DEFAULT_GROUP_DM_AVATARS[m.default.extractTimestamp(e) % r.DEFAULT_GROUP_DM_AVATARS.length];
}
function J(e) {
    var t, n;
    let { id: i, icon: a, applicationId: o, size: s } = e;
    return null != o
        ? null !==
              (t = q({
                  id: o,
                  icon: a,
                  size: s
              })) && void 0 !== t
            ? t
            : r.DEFAULT_CHANNEL_ICON
        : null !==
                (n = y({
                    endpoint: I.ANM.CHANNEL_ICON,
                    path: 'channel-icons',
                    id: i,
                    hash: a,
                    canAnimate: !1,
                    size: s
                })) && void 0 !== n
          ? n
          : $(i);
}
function ee(e) {
    return et(null == e ? void 0 : e.icon);
}
function et(e) {
    return null != e && e.startsWith('a_');
}
function en(e) {
    return null != e && e.startsWith('v_');
}
function er(e) {
    let t;
    try {
        return (t = new URL(e).pathname).split('/').pop();
    } catch (e) {
        return null;
    }
}
function ei(e) {
    return null != e && et(er(e));
}
function ea(e) {
    return 'number' == typeof e ? e : { uri: null != e ? e : void 0 };
}
t.ZP = {
    getUserAvatarURL: M,
    getDefaultAvatarURL: b,
    getGuildMemberAvatarURL: U,
    getGuildMemberAvatarURLSimple: P,
    getGuildMemberAvatarSource: w,
    getGuildMemberBannerURL: k,
    getUserBannerURL: x,
    getAvatarDecorationURL: G,
    hasAnimatedGuildIcon: ee,
    isAnimatedIconHash: et,
    getUserAvatarSource: (e, t, n) => ea(M(e, t, n)),
    getGuildIconURL: K,
    getGuildSplashURL: B,
    getGuildSplashSource: F,
    getGuildDiscoverySplashURL: j,
    getGuildDiscoverySplashSource: W,
    getGuildBannerURL: Z,
    getGuildHomeHeaderURL: V,
    getResourceChannelIconURL: H,
    getNewMemberActionIconURL: Y,
    getGuildTemplateIconURL: z,
    getChannelIconURL: J,
    getEmojiURL: L,
    getApplicationIconURL: q,
    getGameAssetURL: Q,
    getVideoFilterAssetURL: X,
    getGameAssetSource: (e) => ea(Q(e)),
    getGuildIconSource: (e) => ea(K(e)),
    getGuildTemplateIconSource: (e) => ea(z(e)),
    getGuildBannerSource(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return ea(Z(e, t));
    },
    getGuildHomeHeaderSource: (e) => ea(V(e)),
    getChannelIconSource: (e) => ea(J(e)),
    getApplicationIconSource: (e) => ea(q(e)),
    makeSource: ea,
    getAnimatableSourceWithFallback(e, t) {
        let n = t(e);
        if (!(0, p.isAndroid)() || !e || 'number' == typeof n) return n;
        {
            let e = t(!1);
            return 'number' != typeof e && e.uri === n.uri
                ? e
                : [
                      n,
                      {
                          ...e,
                          isForceCached: !0
                      }
                  ];
        }
    }
};
