let r;
n.d(t, {
    $k: function () {
        return g;
    },
    CA: function () {
        return A;
    },
    F8: function () {
        return F;
    },
    JM: function () {
        return y;
    },
    NZ: function () {
        return C;
    },
    aN: function () {
        return N;
    },
    ay: function () {
        return Z;
    },
    gT: function () {
        return I;
    },
    ov: function () {
        return S;
    },
    pK: function () {
        return h;
    },
    rI: function () {
        return U;
    },
    tp: function () {
        return R;
    },
    xR: function () {
        return G;
    }
}),
    n(315314),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var i = n(654861),
    a = n.n(i),
    s = n(664751),
    o = n(864106),
    l = n(134432),
    u = n(930153),
    c = n(358085),
    d = n(709054),
    f = n(981631),
    _ = n(377668),
    p = n(970952);
let h = (r = n(426563).Z).DEFAULT_AVATARS,
    m = r.DEFAULT_PROVISIONAL_AVATARS;
r.DEFAULT_GROUP_DM_AVATARS;
let g = r.canUseWebp(),
    E = (0, c.isAndroid)();
function v(e) {
    let t,
        { endpoint: n, path: r, id: i, hash: a, size: o, canAnimate: u = !1, keepAspectRatio: c, format: d = null } = e;
    if (null == i || null == a) return;
    let f = null != d ? d : u && G(a) ? 'gif' : 'jpg';
    u && Z(a) && (f = 'mp4');
    let _ = window.GLOBAL_ENV.CDN_HOST;
    if ((null != _ ? ('jpg' === f && (f = g ? 'webp' : 'png'), (t = ''.concat(location.protocol, '//').concat(_, '/').concat(r, '/').concat(i, '/').concat(a, '.').concat(f))) : (t = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + n(i, a, f)), 'mp4' === f)) return t;
    let p = {};
    return null != o && (p.size = (0, l.oO)(o * (0, l.x_)())), null != c && (p.keep_aspect_ratio = c), t + '?'.concat(s.stringify(p));
}
function I(e) {
    let { id: t, animated: n, size: r, forcePNG: i = !1 } = e,
        a = i ? 'png' : n ? (g ? 'webp' : 'gif') : g ? 'webp' : 'png',
        s = 'size='.concat((0, l.oO)(r * (0, l.x_)(), E));
    return null != window.GLOBAL_ENV.CDN_HOST ? ''.concat(location.protocol, '//').concat(window.GLOBAL_ENV.CDN_HOST, '/emojis/').concat(t, '.').concat(a) + '?'.concat(s).concat(g && n ? '&animated=true' : '') : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + f.ANM.EMOJI(t, a);
}
function b(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = n ? m : h;
    if (null == e && null == t) return r[0];
    let i = (0, u.Lk)(t, 0);
    return i > 0 ? r[i % 5] : null != e ? r[a()(e).shiftRight(22).mod(r.length).toJSNumber()] : r[0];
}
function T(e) {
    let { id: t, avatar: n, discriminator: i, bot: a } = e,
        s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f.IXf,
        l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
    if (a && t !== _.fL) {
        let e = r.BOT_AVATARS[n];
        if (e) return e;
        if (null == n && '0000' === i) return h[0];
    }
    return v({
        endpoint: f.ANM.AVATAR,
        path: 'avatars',
        id: t,
        hash: n,
        size: o,
        canAnimate: s,
        format: l
    });
}
function S(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f.IXf,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
    return null !== (t = T(e, n, r, i)) && void 0 !== t ? t : b(e.id, e.discriminator, e.isProvisional);
}
function y(e) {
    let t,
        { guildId: n, userId: r, avatar: i, canAnimate: a = !1, size: o = f.IXf } = e,
        u = a && G(i) ? 'gif' : 'jpg',
        { CDN_HOST: c } = window.GLOBAL_ENV;
    return (
        null != c
            ? ('jpg' === u && (u = g ? 'webp' : 'png'),
              (t = ''
                  .concat(location.protocol, '//')
                  .concat(c)
                  .concat(f.ANM.GUILD_MEMBER_AVATAR(n, r, i, u))))
            : (t = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + f.ANM.GUILD_MEMBER_AVATAR(n, r, i, u)),
        t + '?'.concat(s.stringify({ size: (0, l.oO)(o * (0, l.x_)()) }))
    );
}
function A(e) {
    let { userId: t, avatar: n, guildId: r } = e,
        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null == n
        ? null
        : y({
              userId: t,
              avatar: n,
              guildId: r,
              canAnimate: i
          });
}
function N(e) {
    let t,
        { id: n, banner: r, canAnimate: i, size: a } = e;
    if (null == r) return;
    let s = window.GLOBAL_ENV.CDN_HOST,
        o = i && G(r) ? 'gif' : 'png';
    return (t = (null != s ? ''.concat(location.protocol, '//').concat(s, '/banners/').concat(n, '/').concat(r, '.').concat(o) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + f.ANM.USER_BANNER(n, r, o)) + '?size='.concat((0, l.oO)(a * (0, l.x_)())));
}
function C(e) {
    let { avatarDecoration: t, size: n, canAnimate: r = !1 } = e;
    if (null == t || (0, o.fO)(t)) return;
    if (/^data:/.test(t.asset)) return t.asset;
    let { CDN_HOST: i, API_ENDPOINT: a } = window.GLOBAL_ENV,
        s = f.ANM.AVATAR_DECORATION_PRESETS(t.asset),
        u = new URL(null != i ? ''.concat(location.protocol, '//').concat(i).concat(s) : ''.concat(location.protocol).concat(a).concat(s));
    return u.searchParams.set('size', ''.concat((0, l.oO)(n * (0, l.x_)()))), u.searchParams.set('passthrough', ''.concat(r && (0, o.ae)(t.asset))), u.toString();
}
function R(e) {
    let t,
        { id: n, guildId: r, banner: i, canAnimate: a, size: s } = e;
    if (null == i || null == r) return;
    let o = window.GLOBAL_ENV.CDN_HOST,
        u = a && G(i) ? 'gif' : 'png',
        c = f.ANM.GUILD_MEMBER_BANNER(r, n, i, u);
    return (t = (null != o ? ''.concat(location.protocol, '//').concat(o).concat(c) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + c) + '?size='.concat((0, l.oO)(s * (0, l.x_)())));
}
function O(e) {
    let t,
        { id: n, splash: r, size: i } = e;
    if (null == r) return null;
    null == i && (i = window.screen.width * (0, l.x_)()), (i = (0, l.oO)(i));
    let a = window.GLOBAL_ENV.CDN_HOST;
    return (t = (null != a ? ''.concat(location.protocol, '//').concat(a, '/splashes/').concat(n, '/').concat(r, '.jpg') : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + f.ANM.GUILD_SPLASH(n, r)) + '?size='.concat(i));
}
function D(e) {
    let t,
        { id: n, banner: r } = e,
        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (null == r) return null;
    let a = (0, l.oO)(240 * (0, l.x_)()),
        s = i && G(r) ? 'gif' : g ? 'webp' : 'jpg',
        o = window.GLOBAL_ENV.CDN_HOST;
    return (t = (null != o ? ''.concat(location.protocol, '//').concat(o, '/banners/').concat(n, '/').concat(r, '.').concat(s) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + f.ANM.GUILD_BANNER(n, r, s)) + '?size='.concat(a)), 'jpg' === s && (t += '&quality=lossless'), t;
}
function L(e) {
    let t,
        { id: n, homeHeader: r } = e;
    if (null == r) return null;
    let i = (0, l.oO)(1096 * (0, l.x_)()),
        a = window.GLOBAL_ENV.CDN_HOST;
    return (t = (null != a ? ''.concat(location.protocol, '//').concat(a, '/home-headers/').concat(n, '/').concat(r, '.png') : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + f.ANM.GUILD_HOME_HEADER(n, r)) + '?size='.concat(i));
}
function x(e) {
    let t,
        { id: n, splash: r, size: i } = e;
    if (null == r) return null;
    null == i && (i = window.screen.width * (0, l.x_)()), (i = (0, l.oO)(i));
    let a = window.GLOBAL_ENV.CDN_HOST;
    return (t = (null != a ? ''.concat(location.protocol, '//').concat(a, '/discovery-splashes/').concat(n, '/').concat(r, '.jpg') : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + f.ANM.GUILD_DISCOVERY_SPLASH(n, r)) + '?size='.concat(i));
}
function w(e) {
    let { id: t, icon: n, size: r, canAnimate: i = !1 } = e;
    return v({
        endpoint: f.ANM.GUILD_ICON,
        path: 'icons',
        id: t,
        hash: n,
        size: r,
        canAnimate: i
    });
}
function M(e) {
    let { id: t, icon: n, size: r = f.IXf, canAnimate: i = !1 } = e;
    return v({
        endpoint: f.ANM.GUILD_TEMPLATE_ICON,
        path: 'guild-templates',
        id: t,
        hash: n,
        size: r,
        canAnimate: i
    });
}
function P(e) {
    let { id: t, icon: n, size: r = f.IXf, bot: i, botIconFirst: a, fallbackAvatar: s = !0 } = e;
    if (null != i && a) {
        let e = T(i, !1, r);
        if (null != e) return e;
    }
    if (null != n)
        return v({
            endpoint: f.ANM.APPLICATION_ICON,
            path: 'app-icons',
            id: t,
            hash: n,
            size: r,
            canAnimate: !1
        });
    if (null != i) {
        let e = T(i, !1, r);
        if (null != e) return e;
    }
    if (s) return p;
}
function k(e) {
    let { id: t, hash: n, size: r = f.IXf, keepAspectRatio: i = !1, format: a } = e;
    return v({
        endpoint: f.ANM.APPLICATION_ICON,
        path: 'app-icons',
        id: t,
        hash: n,
        size: r,
        canAnimate: !1,
        keepAspectRatio: i,
        format: a
    });
}
function U(e) {
    let { userId: t, assetId: n, assetHash: r, size: i, canAnimate: a = !0 } = e;
    return v({
        endpoint: (e, i, a) => f.ANM.VIDEO_FILTER_ASSET_STORAGE(t, n, r, a),
        path: 'video-filter-assets/'.concat(t),
        id: n,
        hash: r,
        size: i,
        canAnimate: a
    });
}
function B(e) {
    var t, n, i;
    let { id: a, icon: s, applicationId: o, size: l } = e;
    if (null != o)
        return null !==
            (t = P({
                id: o,
                icon: s,
                size: l
            })) && void 0 !== t
            ? t
            : r.DEFAULT_CHANNEL_ICON;
    return null !==
        (n = v({
            endpoint: f.ANM.CHANNEL_ICON,
            path: 'channel-icons',
            id: a,
            hash: s,
            canAnimate: !1,
            size: l
        })) && void 0 !== n
        ? n
        : ((i = a), r.DEFAULT_GROUP_DM_AVATARS[d.default.extractTimestamp(i) % r.DEFAULT_GROUP_DM_AVATARS.length]);
}
function G(e) {
    return null != e && e.startsWith('a_');
}
function Z(e) {
    return null != e && e.startsWith('v_');
}
function F(e) {
    return (
        null != e &&
        G(
            (function (e) {
                let t;
                try {
                    return (t = new URL(e).pathname).split('/').pop();
                } catch (e) {
                    return null;
                }
            })(e)
        )
    );
}
function V(e) {
    return 'number' == typeof e ? e : { uri: null != e ? e : void 0 };
}
t.ZP = {
    getUserAvatarURL: S,
    getDefaultAvatarURL: b,
    getGuildMemberAvatarURL: A,
    getGuildMemberAvatarURLSimple: y,
    getGuildMemberAvatarSource: function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = A(e, n);
        return null != r ? V(r) : t.getAvatarSource(e.guildId, n);
    },
    getGuildMemberBannerURL: R,
    getUserBannerURL: N,
    getAvatarDecorationURL: C,
    hasAnimatedGuildIcon: function (e) {
        return G(null == e ? void 0 : e.icon);
    },
    isAnimatedIconHash: G,
    getUserAvatarSource: (e, t, n) => V(S(e, t, n)),
    getGuildIconURL: w,
    getGuildSplashURL: O,
    getGuildSplashSource: function (e) {
        return V(O(e));
    },
    getGuildDiscoverySplashURL: x,
    getGuildDiscoverySplashSource: function (e) {
        return V(x(e));
    },
    getGuildBannerURL: D,
    getGuildHomeHeaderURL: L,
    getResourceChannelIconURL: function (e) {
        let { channelId: t, icon: n } = e;
        return null == n
            ? null
            : v({
                  endpoint: f.ANM.GUILD_RESOURCE_CHANNELS_ICON,
                  path: 'resource-channels',
                  id: t,
                  hash: n,
                  size: f.IXf,
                  canAnimate: !0
              });
    },
    getNewMemberActionIconURL: function (e) {
        let { channelId: t, icon: n } = e;
        return null == n
            ? null
            : v({
                  endpoint: f.ANM.GUILD_NEW_MEMBER_ACTIONS_ICON,
                  path: 'new-member-actions',
                  id: t,
                  hash: n,
                  size: f.IXf,
                  canAnimate: !0
              });
    },
    getGuildTemplateIconURL: M,
    getChannelIconURL: B,
    getEmojiURL: I,
    getApplicationIconURL: P,
    getGameAssetURL: k,
    getVideoFilterAssetURL: U,
    getGameAssetSource: (e) => V(k(e)),
    getGuildIconSource: (e) => V(w(e)),
    getGuildTemplateIconSource: (e) => V(M(e)),
    getGuildBannerSource(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return V(D(e, t));
    },
    getGuildHomeHeaderSource: (e) => V(L(e)),
    getChannelIconSource: (e) => V(B(e)),
    getApplicationIconSource: (e) => V(P(e)),
    makeSource: V,
    getAnimatableSourceWithFallback(e, t) {
        let n = t(e);
        if (!(0, c.isAndroid)() || !e || 'number' == typeof n) return n;
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
