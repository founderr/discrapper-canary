n.d(t, {
    FO: function () {
        return K;
    },
    Sq: function () {
        return Z;
    },
    ZP: function () {
        return j;
    },
    el: function () {
        return W;
    },
    oO: function () {
        return b;
    },
    zO: function () {
        return z;
    }
}),
    n(757143),
    n(47120),
    n(653041);
var r,
    i,
    a,
    s,
    o,
    l,
    u = n(729594),
    c = n(243814),
    d = n(421474);
n(865427);
var _ = n(264229);
n(413605);
var E = n(807675),
    f = n(701190),
    h = n(226951),
    p = n(591759),
    I = n(960904),
    m = n(981631);
let T = /^\/([a-zA-Z0-9-]+)$/,
    S = /^\/channels\/([0-9]+|@me)\/([0-9]+)$/,
    g = /^\/(invite|template)\/([a-zA-Z0-9-]+)\/?$/,
    A = RegExp('^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?'),
    N = /^\/application-directory\/([0-9-]+)\/?$/,
    R = /^\/application-directory\/([0-9-]+)\/store\/?([0-9-]+)?\/?$/,
    O = /^\/activities\/([0-9-]+)\/?$/,
    v = /^\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
    C = /^\/channels\/([0-9]+)\/shop$/,
    L = /^\/quests\/([0-9-]+)\/?$/,
    D = /^\/discovery\/game\/([0-9-]+)\/?$/,
    y = /^\/oauth2\/authorize/,
    b = /dev:\/\/[\w-.~:\/?#\[\]@!$&'()*+,;=%]+/i,
    M = V(window.GLOBAL_ENV.INVITE_HOST),
    P = V(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST),
    U = V(null !== (r = window.GLOBAL_ENV.WEBAPP_ENDPOINT) && void 0 !== r ? r : '//canary.'.concat(m.$R1)),
    w = V('//canary.'.concat(m.$R1)),
    x = V('//ptb.'.concat(m.$R1)),
    G = V('discordapp.com'),
    k = V('discord.com'),
    B = [h.Z.escape(null !== (i = M.host) && void 0 !== i ? i : ''), h.Z.escape(null !== (a = P.host) && void 0 !== a ? a : ''), h.Z.escape(null !== (s = U.host) && void 0 !== s ? s : ''), h.Z.escape(null !== (o = G.host) && void 0 !== o ? o : ''), h.Z.escape(null !== (l = k.host) && void 0 !== l ? l : '')].filter(Boolean),
    F = RegExp('((https?://[^ ]*)|^|[^/][^/.])('.concat(B.join('|'), ')'), 'g');
function V(e) {
    if (null == e)
        return {
            host: null,
            pathPrefix: null
        };
    if (e.indexOf('/') >= 0) {
        let t = (0, u.parse)(e, void 0, !0);
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
function H(e, t) {
    var n, r, i;
    if ((null === (n = t.host) || void 0 === n ? void 0 : n.replace(/^www[.]/i, '')) !== e.host) return null;
    let a = null !== (r = t.pathname) && void 0 !== r ? r : '',
        s = null !== (i = e.pathPrefix) && void 0 !== i ? i : '';
    if (!a.startsWith(s)) return null;
    let o = a.substring(s.length);
    return '' === o ? null : o;
}
function Z(e) {
    var t, n, r, i;
    return null !== (i = null !== (r = null !== (n = null !== (t = H(U, e)) && void 0 !== t ? t : H(w, e)) && void 0 !== n ? n : H(x, e)) && void 0 !== r ? r : H(G, e)) && void 0 !== i ? i : H(k, e);
}
function Y(e) {
    var t, n, r, i;
    let a = K(e);
    if (null == a || null == a.pathname)
        return {
            url: null,
            inviteHostRemainingPath: null,
            templateHostRemainingPath: null,
            primaryHostRemainingPath: null
        };
    let s = H(M, a),
        o = H(P, a),
        l = null !== (i = null !== (r = null !== (n = null !== (t = H(U, a)) && void 0 !== t ? t : H(w, a)) && void 0 !== n ? n : H(x, a)) && void 0 !== r ? r : H(G, a)) && void 0 !== i ? i : H(k, a);
    return {
        url: a,
        inviteHostRemainingPath: s,
        templateHostRemainingPath: o,
        primaryHostRemainingPath: l
    };
}
function j(e) {
    if (null == e) return [];
    let t = new Set(),
        n = [],
        r = (e = e.replace(F, (e, t, n, r) => (null == n ? ''.concat(t, 'http://').concat(r) : e))).match(p.Z.URL_REGEX),
        i = e.match(b);
    if (null == (r = (null != r ? r : []).concat(null != i ? i : [])) || 0 === r.length) return [];
    for (let e of r) {
        if (n.length >= 10) break;
        let { url: r, inviteHostRemainingPath: i, templateHostRemainingPath: s, primaryHostRemainingPath: o } = Y(e);
        if (null == r || null == r.pathname) continue;
        let l = (e, r) => {
            !t.has(r) &&
                (t.add(r),
                n.push({
                    type: e,
                    code: r
                }));
        };
        if ((null == i ? void 0 : i.match(T)) != null) {
            let e = (0, _.mb)(i.substring(1), r.search);
            f.Z.getInvite(e);
            l(I.g.INVITE, e);
        }
        (null == s ? void 0 : s.match(T)) != null && l(I.g.TEMPLATE, s.substring(1));
        let u = null == o ? void 0 : o.match(g);
        if (null != u) {
            let e = u[1].toUpperCase();
            if (e === I.g.INVITE) {
                let e = (0, _.mb)(u[2], r.search);
                l(I.g.INVITE, e);
            } else l(e, u[2]);
        }
        (null == o ? void 0 : o.match(S)) != null && l(I.g.CHANNEL_LINK, o.replace('/channels/', ''));
        let h = (function (e) {
            if (null == e) return null;
            let t = e.match(A);
            return null != t && t.length >= 4
                ? {
                      guildId: t[1],
                      guildEventId: t[2],
                      recurrenceId: t[4]
                  }
                : null;
        })(r.pathname);
        if ((null != h && l(I.g.EVENT, ''.concat(h.guildId, '-').concat(h.guildEventId) + (null != h.recurrenceId ? '-'.concat(h.recurrenceId) : '')), null != (null == o ? void 0 : o.match(y)) && null != r.query)) {
            var a;
            let e = (0, E.y)(r.query),
                t = e.clientId;
            null != t && '' !== t && !(null === (a = e.scopes) || void 0 === a ? void 0 : a.some((e) => e !== c.x.APPLICATIONS_COMMANDS)) && l(I.g.APP_OAUTH2_LINK, t);
        }
        let p = null == o ? void 0 : o.match(N);
        if (null != p) {
            let e = p[1];
            l(I.g.APP_DIRECTORY_PROFILE, e);
        }
        let m = null == o ? void 0 : o.match(R);
        if (null != m) {
            let e = m[1],
                t = m[2];
            if (null != t) {
                let n = (0, d.l)(e, t);
                l(I.g.APP_DIRECTORY_STOREFRONT_SKU, n);
            } else l(I.g.APP_DIRECTORY_STOREFRONT, e);
        }
        let L = null == o ? void 0 : o.match(O);
        if (null != L) {
            let e = L[1];
            l(I.g.ACTIVITY_BOOKMARK, e);
        }
        let b = null == o ? void 0 : o.match(v);
        null != b && l(I.g.GUILD_PRODUCT, ''.concat(b[1], '-').concat(b[2]));
        let M = null == o ? void 0 : o.match(C);
        null != M && l(I.g.SERVER_SHOP, M[1]);
        let P = W(e);
        null != P && l(I.g.QUESTS_EMBED, P);
        let U = (function (e) {
            var t, n;
            let r = Y(e),
                i = null == r ? void 0 : null === (t = r.primaryHostRemainingPath) || void 0 === t ? void 0 : t.match(D);
            return null !== (n = null == i ? void 0 : i[1]) && void 0 !== n ? n : null;
        })(e);
        null != U && l(I.g.DISCOVERY_GAME, U);
    }
    return n;
}
function W(e) {
    var t, n;
    let r = Y(e),
        i = null == r ? void 0 : null === (t = r.primaryHostRemainingPath) || void 0 === t ? void 0 : t.match(L);
    return null !== (n = null == i ? void 0 : i[1]) && void 0 !== n ? n : null;
}
function K(e) {
    try {
        return (0, u.parse)(e);
    } catch (e) {
        return null;
    }
}
function z(e) {
    return j(e)[0];
}
