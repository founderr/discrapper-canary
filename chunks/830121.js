n.d(t, {
    FO: function () {
        return Q;
    },
    Sq: function () {
        return Y;
    },
    ZP: function () {
        return K;
    },
    el: function () {
        return z;
    },
    oO: function () {
        return M;
    },
    zO: function () {
        return X;
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
    E = n(421474);
n(865427);
var f = n(264229);
n(413605);
var h = n(701190),
    p = n(226951),
    m = n(591759),
    I = n(960904),
    T = n(981631);
let g = 10,
    S = /^\/([a-zA-Z0-9-]+)$/,
    A = /^\/channels\/([0-9]+|@me)\/([0-9]+)$/,
    v = /^\/(invite|template)\/([a-zA-Z0-9-]+)\/?$/,
    N = RegExp('^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?'),
    O = /^\/application-directory\/([0-9-]+)\/?$/,
    R = /^\/application-directory\/([0-9-]+)\/store\/?([0-9-]+)?\/?$/,
    C = /^\/activities\/([0-9-]+)\/?$/,
    y = /^\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
    L = /^\/channels\/([0-9]+)\/shop$/,
    b = /^\/quests\/([0-9-]+)\/?$/,
    D = /^\/discovery\/game\/([0-9-]+)\/?$/,
    M = /dev:\/\/[\w-.~:\/?#\[\]@!$&'()*+,;=%]+/i,
    P = V(window.GLOBAL_ENV.INVITE_HOST),
    U = V(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST),
    w = V(null !== (r = window.GLOBAL_ENV.WEBAPP_ENDPOINT) && void 0 !== r ? r : '//canary.'.concat(T.$R1)),
    x = V('//canary.'.concat(T.$R1)),
    G = V('//ptb.'.concat(T.$R1)),
    k = V('discordapp.com'),
    B = V('discord.com'),
    F = [p.Z.escape(null !== (i = P.host) && void 0 !== i ? i : ''), p.Z.escape(null !== (a = U.host) && void 0 !== a ? a : ''), p.Z.escape(null !== (o = w.host) && void 0 !== o ? o : ''), p.Z.escape(null !== (s = k.host) && void 0 !== s ? s : ''), p.Z.escape(null !== (l = B.host) && void 0 !== l ? l : '')].filter(Boolean),
    Z = RegExp('((https?://[^ ]*)|^|[^/][^/.])('.concat(F.join('|'), ')'), 'g');
function V(e) {
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
function H(e, t) {
    var n, r, i;
    if ((null === (n = t.host) || void 0 === n ? void 0 : n.replace(/^www[.]/i, '')) !== e.host) return null;
    let a = null !== (r = t.pathname) && void 0 !== r ? r : '',
        o = null !== (i = e.pathPrefix) && void 0 !== i ? i : '';
    if (!a.startsWith(o)) return null;
    let s = a.substring(o.length);
    return '' === s ? null : s;
}
function Y(e) {
    var t, n, r, i;
    return null !== (i = null !== (r = null !== (n = null !== (t = H(w, e)) && void 0 !== t ? t : H(x, e)) && void 0 !== n ? n : H(G, e)) && void 0 !== r ? r : H(k, e)) && void 0 !== i ? i : H(B, e);
}
function j(e) {
    if (null == e) return null;
    let t = e.match(N);
    return null != t && t.length >= 4
        ? {
              guildId: t[1],
              guildEventId: t[2],
              recurrenceId: t[4]
          }
        : null;
}
function W(e) {
    var t, n, r, i;
    let a = Q(e);
    if (null == a || null == a.pathname)
        return {
            url: null,
            inviteHostRemainingPath: null,
            templateHostRemainingPath: null,
            primaryHostRemainingPath: null
        };
    let o = H(P, a),
        s = H(U, a),
        l = null !== (i = null !== (r = null !== (n = null !== (t = H(w, a)) && void 0 !== t ? t : H(x, a)) && void 0 !== n ? n : H(G, a)) && void 0 !== r ? r : H(k, a)) && void 0 !== i ? i : H(B, a);
    return {
        url: a,
        inviteHostRemainingPath: o,
        templateHostRemainingPath: s,
        primaryHostRemainingPath: l
    };
}
function K(e) {
    if (null == e) return [];
    let t = new Set(),
        n = [],
        r = (e = e.replace(Z, (e, t, n, r) => (null == n ? ''.concat(t, 'http://').concat(r) : e))).match(m.Z.URL_REGEX),
        i = e.match(M);
    if (null == (r = (null != r ? r : []).concat(null != i ? i : [])) || 0 === r.length) return [];
    for (let e of r) {
        if (n.length >= g) break;
        let { url: r, inviteHostRemainingPath: i, templateHostRemainingPath: a, primaryHostRemainingPath: o } = W(e);
        if (null == r || null == r.pathname) continue;
        let s = (e, r) => {
            !t.has(r) &&
                (t.add(r),
                n.push({
                    type: e,
                    code: r
                }));
        };
        if ((null == i ? void 0 : i.match(S)) != null) {
            let e = (0, f.mb)(i.substring(1), r.search);
            h.Z.getInvite(e);
            s(I.g.INVITE, e);
        }
        (null == a ? void 0 : a.match(S)) != null && s(I.g.TEMPLATE, a.substring(1));
        let l = null == o ? void 0 : o.match(v);
        if (null != l) {
            let e = l[1].toUpperCase();
            if (e === I.g.INVITE) {
                let e = (0, f.mb)(l[2], r.search);
                s(I.g.INVITE, e);
            } else s(e, l[2]);
        }
        (null == o ? void 0 : o.match(A)) != null && s(I.g.CHANNEL_LINK, o.replace('/channels/', ''));
        let u = j(r.pathname);
        null != u && s(I.g.EVENT, ''.concat(u.guildId, '-').concat(u.guildEventId) + (null != u.recurrenceId ? '-'.concat(u.recurrenceId) : ''));
        let c = null == o ? void 0 : o.match(O);
        if (null != c) {
            let e = c[1];
            s(I.g.APP_DIRECTORY_PROFILE, e);
        }
        let d = null == o ? void 0 : o.match(R);
        if (null != d) {
            let e = d[1],
                t = d[2];
            if (null != t) {
                let n = (0, E.l)(e, t);
                s(I.g.APP_DIRECTORY_STOREFRONT_SKU, n);
            } else s(I.g.APP_DIRECTORY_STOREFRONT, e);
        }
        let _ = null == o ? void 0 : o.match(C);
        if (null != _) {
            let e = _[1];
            s(I.g.ACTIVITY_BOOKMARK, e);
        }
        let p = null == o ? void 0 : o.match(y);
        null != p && s(I.g.GUILD_PRODUCT, ''.concat(p[1], '-').concat(p[2]));
        let m = null == o ? void 0 : o.match(L);
        null != m && s(I.g.SERVER_SHOP, m[1]);
        let T = z(e);
        null != T && s(I.g.QUESTS_EMBED, T);
        let N = q(e);
        null != N && s(I.g.DISCOVERY_GAME, N);
    }
    return n;
}
function z(e) {
    var t, n;
    let r = W(e),
        i = null == r ? void 0 : null === (t = r.primaryHostRemainingPath) || void 0 === t ? void 0 : t.match(b);
    return null !== (n = null == i ? void 0 : i[1]) && void 0 !== n ? n : null;
}
function q(e) {
    var t, n;
    let r = W(e),
        i = null == r ? void 0 : null === (t = r.primaryHostRemainingPath) || void 0 === t ? void 0 : t.match(D);
    return null !== (n = null == i ? void 0 : i[1]) && void 0 !== n ? n : null;
}
function Q(e) {
    try {
        return (0, _.parse)(e);
    } catch (e) {
        return null;
    }
}
function X(e) {
    return K(e)[0];
}
