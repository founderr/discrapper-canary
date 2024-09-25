n.d(t, {
    FO: function () {
        return z;
    },
    Sq: function () {
        return H;
    },
    ZP: function () {
        return W;
    },
    el: function () {
        return K;
    },
    oO: function () {
        return D;
    },
    zO: function () {
        return q;
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
    b = /^\/channels\/([0-9]+)\/shop$/,
    L = /^\/quests\/([0-9-]+)\/?$/,
    D = /dev:\/\/[\w-.~:\/?#\[\]@!$&'()*+,;=%]+/i,
    M = Z(window.GLOBAL_ENV.INVITE_HOST),
    P = Z(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST),
    U = Z(null !== (r = window.GLOBAL_ENV.WEBAPP_ENDPOINT) && void 0 !== r ? r : '//canary.'.concat(T.$R1)),
    w = Z('//canary.'.concat(T.$R1)),
    x = Z('//ptb.'.concat(T.$R1)),
    G = Z('discordapp.com'),
    k = Z('discord.com'),
    B = [p.Z.escape(null !== (i = M.host) && void 0 !== i ? i : ''), p.Z.escape(null !== (a = P.host) && void 0 !== a ? a : ''), p.Z.escape(null !== (o = U.host) && void 0 !== o ? o : ''), p.Z.escape(null !== (s = G.host) && void 0 !== s ? s : ''), p.Z.escape(null !== (l = k.host) && void 0 !== l ? l : '')].filter(Boolean),
    F = RegExp('((https?://[^ ]*)|^|[^/][^/.])('.concat(B.join('|'), ')'), 'g');
function Z(e) {
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
function V(e, t) {
    var n, r, i;
    if ((null === (n = t.host) || void 0 === n ? void 0 : n.replace(/^www[.]/i, '')) !== e.host) return null;
    let a = null !== (r = t.pathname) && void 0 !== r ? r : '',
        o = null !== (i = e.pathPrefix) && void 0 !== i ? i : '';
    if (!a.startsWith(o)) return null;
    let s = a.substring(o.length);
    return '' === s ? null : s;
}
function H(e) {
    var t, n, r, i;
    return null !== (i = null !== (r = null !== (n = null !== (t = V(U, e)) && void 0 !== t ? t : V(w, e)) && void 0 !== n ? n : V(x, e)) && void 0 !== r ? r : V(G, e)) && void 0 !== i ? i : V(k, e);
}
function Y(e) {
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
function j(e) {
    var t, n, r, i;
    let a = z(e);
    if (null == a || null == a.pathname)
        return {
            url: null,
            inviteHostRemainingPath: null,
            templateHostRemainingPath: null,
            primaryHostRemainingPath: null
        };
    let o = V(M, a),
        s = V(P, a),
        l = null !== (i = null !== (r = null !== (n = null !== (t = V(U, a)) && void 0 !== t ? t : V(w, a)) && void 0 !== n ? n : V(x, a)) && void 0 !== r ? r : V(G, a)) && void 0 !== i ? i : V(k, a);
    return {
        url: a,
        inviteHostRemainingPath: o,
        templateHostRemainingPath: s,
        primaryHostRemainingPath: l
    };
}
function W(e) {
    if (null == e) return [];
    let t = new Set(),
        n = [],
        r = (e = e.replace(F, (e, t, n, r) => (null == n ? ''.concat(t, 'http://').concat(r) : e))).match(m.Z.URL_REGEX),
        i = e.match(D);
    if (null == (r = (null != r ? r : []).concat(null != i ? i : [])) || 0 === r.length) return [];
    for (let e of r) {
        if (n.length >= g) break;
        let { url: r, inviteHostRemainingPath: i, templateHostRemainingPath: a, primaryHostRemainingPath: o } = j(e);
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
        let u = Y(r.pathname);
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
        let m = null == o ? void 0 : o.match(b);
        null != m && s(I.g.SERVER_SHOP, m[1]);
        let T = K(e);
        null != T && s(I.g.QUESTS_EMBED, T);
    }
    return n;
}
function K(e) {
    var t, n;
    let r = j(e),
        i = null == r ? void 0 : null === (t = r.primaryHostRemainingPath) || void 0 === t ? void 0 : t.match(L);
    return null !== (n = null == i ? void 0 : i[1]) && void 0 !== n ? n : null;
}
function z(e) {
    try {
        return (0, _.parse)(e);
    } catch (e) {
        return null;
    }
}
function q(e) {
    return W(e)[0];
}
