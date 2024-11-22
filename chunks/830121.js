n.d(t, {
    FO: function () {
        return W;
    },
    Sq: function () {
        return V;
    },
    ZP: function () {
        return H;
    },
    el: function () {
        return Y;
    },
    oO: function () {
        return D;
    },
    zO: function () {
        return K;
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
var f = n(264229);
n(413605);
var _ = n(807675),
    p = n(701190),
    h = n(226951),
    m = n(591759),
    g = n(960904),
    E = n(981631);
let v = /^\/([a-zA-Z0-9-]+)$/,
    b = /^\/channels\/([0-9]+|@me)\/([0-9]+)$/,
    I = /^\/(invite|template)\/([a-zA-Z0-9-]+)\/?$/,
    T = RegExp('^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?'),
    S = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/?$/,
    y = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/store\/?([0-9-]+)?\/?$/,
    A = /^\/activities\/([0-9-]+)\/?$/,
    N = /^\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
    C = /^\/channels\/([0-9]+)\/shop$/,
    R = /^\/quests\/([0-9-]+)\/?$/,
    O = /^\/oauth2\/authorize/,
    D = /dev:\/\/[\w-.~:\/?#\[\]@!$&'()*+,;=%]+/i,
    L = Z(window.GLOBAL_ENV.INVITE_HOST),
    x = Z(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST),
    w = Z(null !== (r = window.GLOBAL_ENV.WEBAPP_ENDPOINT) && void 0 !== r ? r : '//canary.'.concat(E.$R1)),
    M = Z('//canary.'.concat(E.$R1)),
    P = Z('//ptb.'.concat(E.$R1)),
    k = Z('discordapp.com'),
    U = Z('discord.com'),
    B = [h.Z.escape(null !== (i = L.host) && void 0 !== i ? i : ''), h.Z.escape(null !== (a = x.host) && void 0 !== a ? a : ''), h.Z.escape(null !== (s = w.host) && void 0 !== s ? s : ''), h.Z.escape(null !== (o = k.host) && void 0 !== o ? o : ''), h.Z.escape(null !== (l = U.host) && void 0 !== l ? l : '')].filter(Boolean),
    G = RegExp('((https?://[^ ]*)|^|[^/][^/.])('.concat(B.join('|'), ')'), 'g');
function Z(e) {
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
function F(e, t) {
    var n, r, i;
    if ((null === (n = t.host) || void 0 === n ? void 0 : n.replace(/^www[.]/i, '')) !== e.host) return null;
    let a = null !== (r = t.pathname) && void 0 !== r ? r : '',
        s = null !== (i = e.pathPrefix) && void 0 !== i ? i : '';
    if (!a.startsWith(s)) return null;
    let o = a.substring(s.length);
    return '' === o ? null : o;
}
function V(e) {
    var t, n, r, i;
    return null !== (i = null !== (r = null !== (n = null !== (t = F(w, e)) && void 0 !== t ? t : F(M, e)) && void 0 !== n ? n : F(P, e)) && void 0 !== r ? r : F(k, e)) && void 0 !== i ? i : F(U, e);
}
function j(e) {
    var t, n, r, i;
    let a = W(e);
    if (null == a || null == a.pathname)
        return {
            url: null,
            inviteHostRemainingPath: null,
            templateHostRemainingPath: null,
            primaryHostRemainingPath: null
        };
    let s = F(L, a),
        o = F(x, a),
        l = null !== (i = null !== (r = null !== (n = null !== (t = F(w, a)) && void 0 !== t ? t : F(M, a)) && void 0 !== n ? n : F(P, a)) && void 0 !== r ? r : F(k, a)) && void 0 !== i ? i : F(U, a);
    return {
        url: a,
        inviteHostRemainingPath: s,
        templateHostRemainingPath: o,
        primaryHostRemainingPath: l
    };
}
function H(e) {
    if (null == e) return [];
    let t = new Set(),
        n = [],
        r = (e = e.replace(G, (e, t, n, r) => (null == n ? ''.concat(t, 'http://').concat(r) : e))).match(m.Z.URL_REGEX),
        i = e.match(D);
    if (null == (r = (null != r ? r : []).concat(null != i ? i : [])) || 0 === r.length) return [];
    for (let e of r) {
        if (n.length >= 10) break;
        let { url: r, inviteHostRemainingPath: i, templateHostRemainingPath: s, primaryHostRemainingPath: o } = j(e);
        if (null == r || null == r.pathname) continue;
        let l = (e, r) => {
            !t.has(r) &&
                (t.add(r),
                n.push({
                    type: e,
                    code: r
                }));
        };
        if ((null == i ? void 0 : i.match(v)) != null) {
            let e = (0, f.mb)(i.substring(1), r.search);
            p.Z.getInvite(e);
            l(g.g.INVITE, e);
        }
        (null == s ? void 0 : s.match(v)) != null && l(g.g.TEMPLATE, s.substring(1));
        let u = null == o ? void 0 : o.match(I);
        if (null != u) {
            let e = u[1].toUpperCase();
            if (e === g.g.INVITE) {
                let e = (0, f.mb)(u[2], r.search);
                l(g.g.INVITE, e);
            } else l(e, u[2]);
        }
        (null == o ? void 0 : o.match(b)) != null && l(g.g.CHANNEL_LINK, o.replace('/channels/', ''));
        let h = (function (e) {
            if (null == e) return null;
            let t = e.match(T);
            return null != t && t.length >= 4
                ? {
                      guildId: t[1],
                      guildEventId: t[2],
                      recurrenceId: t[4]
                  }
                : null;
        })(r.pathname);
        if ((null != h && l(g.g.EVENT, ''.concat(h.guildId, '-').concat(h.guildEventId) + (null != h.recurrenceId ? '-'.concat(h.recurrenceId) : '')), null != (null == o ? void 0 : o.match(O)) && null != r.query)) {
            var a;
            let e = (0, _.y)(r.query),
                t = e.clientId;
            null != t && '' !== t && !(null === (a = e.scopes) || void 0 === a ? void 0 : a.some((e) => e !== c.x.APPLICATIONS_COMMANDS)) && l(g.g.APP_OAUTH2_LINK, t);
        }
        let m = null == o ? void 0 : o.match(S);
        if (null != m) {
            let e = m[2];
            l(g.g.APP_DIRECTORY_PROFILE, e);
        }
        let E = null == o ? void 0 : o.match(y);
        if (null != E) {
            let e = E[2],
                t = E[3];
            if (null != t) {
                let n = (0, d.l)(e, t);
                l(g.g.APP_DIRECTORY_STOREFRONT_SKU, n);
            } else l(g.g.APP_DIRECTORY_STOREFRONT, e);
        }
        let R = null == o ? void 0 : o.match(A);
        if (null != R) {
            let e = R[1];
            l(g.g.ACTIVITY_BOOKMARK, e);
        }
        let D = null == o ? void 0 : o.match(N);
        null != D && l(g.g.GUILD_PRODUCT, ''.concat(D[1], '-').concat(D[2]));
        let L = null == o ? void 0 : o.match(C);
        null != L && l(g.g.SERVER_SHOP, L[1]);
        let x = Y(e);
        null != x && l(g.g.QUESTS_EMBED, x);
    }
    return n;
}
function Y(e) {
    var t, n;
    let r = j(e),
        i = null == r ? void 0 : null === (t = r.primaryHostRemainingPath) || void 0 === t ? void 0 : t.match(R);
    return null !== (n = null == i ? void 0 : i[1]) && void 0 !== n ? n : null;
}
function W(e) {
    try {
        return (0, u.parse)(e);
    } catch (e) {
        return null;
    }
}
function K(e) {
    return H(e)[0];
}
