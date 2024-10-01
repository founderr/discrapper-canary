n.d(t, {
    FO: function () {
        return $;
    },
    Sq: function () {
        return W;
    },
    ZP: function () {
        return q;
    },
    el: function () {
        return Q;
    },
    oO: function () {
        return U;
    },
    zO: function () {
        return J;
    }
});
var r,
    i,
    a,
    o,
    s,
    l,
    u = n(757143);
var c = n(47120);
var d = n(653041);
var _ = n(729594),
    E = n(421474),
    f = n(547682);
n(865427);
var h = n(264229);
n(413605);
var p = n(701190),
    m = n(226951),
    I = n(591759),
    T = n(960904),
    g = n(981631);
let S = 10,
    A = /^\/([a-zA-Z0-9-]+)$/,
    v = /^\/channels\/([0-9]+|@me)\/([0-9]+)$/,
    N = /^\/(invite|template)\/([a-zA-Z0-9-]+)\/?$/,
    O = RegExp('^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?'),
    R = /^\/application-directory\/([0-9-]+)\/?$/,
    C = /^\/application-directory\/([0-9-]+)\/store\/?([0-9-]+)?\/?$/,
    y = /^\/activities\/([0-9-]+)\/?$/,
    L = /^\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
    b = /^\/channels\/([0-9]+)\/shop$/,
    D = /^\/quests\/([0-9-]+)\/?$/,
    M = /^\/discovery\/game\/([0-9-]+)\/?$/,
    P = /^\/oauth2\/authorize/,
    U = /dev:\/\/[\w-.~:\/?#\[\]@!$&'()*+,;=%]+/i,
    w = Y(window.GLOBAL_ENV.INVITE_HOST),
    x = Y(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST),
    G = Y(null !== (r = window.GLOBAL_ENV.WEBAPP_ENDPOINT) && void 0 !== r ? r : '//canary.'.concat(g.$R1)),
    k = Y('//canary.'.concat(g.$R1)),
    B = Y('//ptb.'.concat(g.$R1)),
    F = Y('discordapp.com'),
    Z = Y('discord.com'),
    V = [m.Z.escape(null !== (i = w.host) && void 0 !== i ? i : ''), m.Z.escape(null !== (a = x.host) && void 0 !== a ? a : ''), m.Z.escape(null !== (o = G.host) && void 0 !== o ? o : ''), m.Z.escape(null !== (s = F.host) && void 0 !== s ? s : ''), m.Z.escape(null !== (l = Z.host) && void 0 !== l ? l : '')].filter(Boolean),
    H = RegExp('((https?://[^ ]*)|^|[^/][^/.])('.concat(V.join('|'), ')'), 'g');
function Y(e) {
    if (null == e)
        return {
            host: null,
            pathPrefix: null
        };
    if (e.indexOf('/') >= 0) {
        let t = (0, _.parse)(e, void 0, !0);
        return {
            host: t.host,
            pathPrefix: t.pathname
        };
    }
    return {
        host: e,
        pathPrefix: null
    };
}
function j(e, t) {
    var n, r, i;
    if ((null === (n = t.host) || void 0 === n ? void 0 : n.replace(/^www[.]/i, '')) !== e.host) return null;
    let a = null !== (r = t.pathname) && void 0 !== r ? r : '',
        o = null !== (i = e.pathPrefix) && void 0 !== i ? i : '';
    if (!a.startsWith(o)) return null;
    let s = a.substring(o.length);
    return '' === s ? null : s;
}
function W(e) {
    var t, n, r, i;
    return null !== (i = null !== (r = null !== (n = null !== (t = j(G, e)) && void 0 !== t ? t : j(k, e)) && void 0 !== n ? n : j(B, e)) && void 0 !== r ? r : j(F, e)) && void 0 !== i ? i : j(Z, e);
}
function K(e) {
    if (null == e) return null;
    let t = e.match(O);
    return null != t && t.length >= 4
        ? {
              guildId: t[1],
              guildEventId: t[2],
              recurrenceId: t[4]
          }
        : null;
}
function z(e) {
    var t, n, r, i;
    let a = $(e);
    if (null == a || null == a.pathname)
        return {
            url: null,
            inviteHostRemainingPath: null,
            templateHostRemainingPath: null,
            primaryHostRemainingPath: null
        };
    let o = j(w, a),
        s = j(x, a),
        l = null !== (i = null !== (r = null !== (n = null !== (t = j(G, a)) && void 0 !== t ? t : j(k, a)) && void 0 !== n ? n : j(B, a)) && void 0 !== r ? r : j(F, a)) && void 0 !== i ? i : j(Z, a);
    return {
        url: a,
        inviteHostRemainingPath: o,
        templateHostRemainingPath: s,
        primaryHostRemainingPath: l
    };
}
function q(e) {
    if (null == e) return [];
    let t = new Set(),
        n = [],
        r = (e = e.replace(H, (e, t, n, r) => (null == n ? ''.concat(t, 'http://').concat(r) : e))).match(I.Z.URL_REGEX),
        i = e.match(U);
    if (null == (r = (null != r ? r : []).concat(null != i ? i : [])) || 0 === r.length) return [];
    for (let e of r) {
        if (n.length >= S) break;
        let { url: r, inviteHostRemainingPath: i, templateHostRemainingPath: a, primaryHostRemainingPath: o } = z(e);
        if (null == r || null == r.pathname) continue;
        let s = (e, r) => {
            !t.has(r) &&
                (t.add(r),
                n.push({
                    type: e,
                    code: r
                }));
        };
        if ((null == i ? void 0 : i.match(A)) != null) {
            let e = (0, h.mb)(i.substring(1), r.search);
            p.Z.getInvite(e);
            s(T.g.INVITE, e);
        }
        (null == a ? void 0 : a.match(A)) != null && s(T.g.TEMPLATE, a.substring(1));
        let l = null == o ? void 0 : o.match(N);
        if (null != l) {
            let e = l[1].toUpperCase();
            if (e === T.g.INVITE) {
                let e = (0, h.mb)(l[2], r.search);
                s(T.g.INVITE, e);
            } else s(e, l[2]);
        }
        (null == o ? void 0 : o.match(v)) != null && s(T.g.CHANNEL_LINK, o.replace('/channels/', ''));
        let u = K(r.pathname);
        if ((null != u && s(T.g.EVENT, ''.concat(u.guildId, '-').concat(u.guildEventId) + (null != u.recurrenceId ? '-'.concat(u.recurrenceId) : '')), null != (null == o ? void 0 : o.match(P)))) {
            let { enabled: e } = f.I.getCurrentConfig({ location: 'findCodedLinks' }, { autoTrackExposure: !1 });
            if (e) {
                let e = r.query.client_id;
                'string' == typeof e && s(T.g.APP_OAUTH2_LINK, e);
            }
        }
        let c = null == o ? void 0 : o.match(R);
        if (null != c) {
            let e = c[1];
            s(T.g.APP_DIRECTORY_PROFILE, e);
        }
        let d = null == o ? void 0 : o.match(C);
        if (null != d) {
            let e = d[1],
                t = d[2];
            if (null != t) {
                let n = (0, E.l)(e, t);
                s(T.g.APP_DIRECTORY_STOREFRONT_SKU, n);
            } else s(T.g.APP_DIRECTORY_STOREFRONT, e);
        }
        let _ = null == o ? void 0 : o.match(y);
        if (null != _) {
            let e = _[1];
            s(T.g.ACTIVITY_BOOKMARK, e);
        }
        let m = null == o ? void 0 : o.match(L);
        null != m && s(T.g.GUILD_PRODUCT, ''.concat(m[1], '-').concat(m[2]));
        let I = null == o ? void 0 : o.match(b);
        null != I && s(T.g.SERVER_SHOP, I[1]);
        let g = Q(e);
        null != g && s(T.g.QUESTS_EMBED, g);
        let O = X(e);
        null != O && s(T.g.DISCOVERY_GAME, O);
    }
    return n;
}
function Q(e) {
    var t, n;
    let r = z(e),
        i = null == r ? void 0 : null === (t = r.primaryHostRemainingPath) || void 0 === t ? void 0 : t.match(D);
    return null !== (n = null == i ? void 0 : i[1]) && void 0 !== n ? n : null;
}
function X(e) {
    var t, n;
    let r = z(e),
        i = null == r ? void 0 : null === (t = r.primaryHostRemainingPath) || void 0 === t ? void 0 : t.match(M);
    return null !== (n = null == i ? void 0 : i[1]) && void 0 !== n ? n : null;
}
function $(e) {
    try {
        return (0, _.parse)(e, !0);
    } catch (e) {
        return null;
    }
}
function J(e) {
    return q(e)[0];
}
