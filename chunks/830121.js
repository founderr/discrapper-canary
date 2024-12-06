n.d(t, {
    FO: function () {
        return K;
    },
    Sq: function () {
        return j;
    },
    ZP: function () {
        return Y;
    },
    el: function () {
        return W;
    },
    oO: function () {
        return L;
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
var f = n(264229);
n(413605);
var _ = n(807675),
    p = n(701190),
    h = n(226951),
    m = n(591759),
    g = n(960904),
    E = n(981631);
let v = /^\/([a-zA-Z0-9-]+)$/,
    I = /^\/channels\/([0-9]+|@me)\/([0-9]+)$/,
    T = /^\/(invite|template)\/([a-zA-Z0-9-]+)\/?$/,
    b = RegExp('^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?'),
    S = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/?((about|images|privacy)\/?)?$/,
    y = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/store\/?([0-9-]+)?\/?$/,
    A = /^\/activities\/([0-9-]+)\/?$/,
    N = /^\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
    C = /^\/channels\/([0-9]+)\/shop$/,
    R = /^\/quests\/([0-9-]+)\/?$/,
    O = /^\/oauth2\/authorize/,
    D = /^#itemSkuId=([0-9]+)$/,
    L = /dev:\/\/[\w-.~:\/?#\[\]@!$&'()*+,;=%]+/i,
    x = F(window.GLOBAL_ENV.INVITE_HOST),
    w = F(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST),
    P = F(null !== (r = window.GLOBAL_ENV.WEBAPP_ENDPOINT) && void 0 !== r ? r : '//canary.'.concat(E.$R1)),
    M = F('//canary.'.concat(E.$R1)),
    k = F('//ptb.'.concat(E.$R1)),
    U = F('discordapp.com'),
    B = F('discord.com'),
    G = [h.Z.escape(null !== (i = x.host) && void 0 !== i ? i : ''), h.Z.escape(null !== (a = w.host) && void 0 !== a ? a : ''), h.Z.escape(null !== (s = P.host) && void 0 !== s ? s : ''), h.Z.escape(null !== (o = U.host) && void 0 !== o ? o : ''), h.Z.escape(null !== (l = B.host) && void 0 !== l ? l : '')].filter(Boolean),
    Z = RegExp('((https?://[^ ]*)|^|[^/][^/.])('.concat(G.join('|'), ')'), 'g');
function F(e) {
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
function V(e, t) {
    var n, r, i;
    if ((null === (n = t.host) || void 0 === n ? void 0 : n.replace(/^www[.]/i, '')) !== e.host) return null;
    let a = null !== (r = t.pathname) && void 0 !== r ? r : '',
        s = null !== (i = e.pathPrefix) && void 0 !== i ? i : '';
    if (!a.startsWith(s)) return null;
    let o = a.substring(s.length);
    return '' === o ? null : o;
}
function j(e) {
    var t, n, r, i;
    return null !== (i = null !== (r = null !== (n = null !== (t = V(P, e)) && void 0 !== t ? t : V(M, e)) && void 0 !== n ? n : V(k, e)) && void 0 !== r ? r : V(U, e)) && void 0 !== i ? i : V(B, e);
}
function H(e) {
    var t, n, r, i;
    let a = K(e);
    if (null == a || null == a.pathname)
        return {
            url: null,
            inviteHostRemainingPath: null,
            templateHostRemainingPath: null,
            primaryHostRemainingPath: null
        };
    let s = V(x, a),
        o = V(w, a),
        l = null !== (i = null !== (r = null !== (n = null !== (t = V(P, a)) && void 0 !== t ? t : V(M, a)) && void 0 !== n ? n : V(k, a)) && void 0 !== r ? r : V(U, a)) && void 0 !== i ? i : V(B, a);
    return {
        url: a,
        inviteHostRemainingPath: s,
        templateHostRemainingPath: o,
        primaryHostRemainingPath: l
    };
}
function Y(e) {
    if (null == e) return [];
    let t = new Set(),
        n = [],
        r = (e = e.replace(Z, (e, t, n, r) => (null == n ? ''.concat(t, 'http://').concat(r) : e))).match(m.Z.URL_REGEX),
        i = e.match(L);
    if (null == (r = (null != r ? r : []).concat(null != i ? i : [])) || 0 === r.length) return [];
    for (let e of r) {
        var a, s, o;
        if (n.length >= 10) break;
        let { url: r, inviteHostRemainingPath: i, templateHostRemainingPath: l, primaryHostRemainingPath: u } = H(e);
        if (null == r || null == r.pathname) continue;
        let h = (r, i) => {
            !t.has(i) &&
                (t.add(i),
                n.push({
                    type: r,
                    code: i,
                    url: e
                }));
        };
        if ((null == i ? void 0 : i.match(v)) != null) {
            let e = (0, f.mb)(i.substring(1), r.search);
            p.Z.getInvite(e);
            h(g.g.INVITE, e);
        }
        (null == l ? void 0 : l.match(v)) != null && h(g.g.TEMPLATE, l.substring(1));
        let m = null == u ? void 0 : u.match(T);
        if (null != m) {
            let e = m[1].toUpperCase();
            if (e === g.g.INVITE) {
                let e = (0, f.mb)(m[2], r.search);
                h(g.g.INVITE, e);
            } else h(e, m[2]);
        }
        (null == u ? void 0 : u.match(I)) != null && h(g.g.CHANNEL_LINK, u.replace('/channels/', ''));
        let E = (function (e) {
            if (null == e) return null;
            let t = e.match(b);
            return null != t && t.length >= 4
                ? {
                      guildId: t[1],
                      guildEventId: t[2],
                      recurrenceId: t[4]
                  }
                : null;
        })(r.pathname);
        if ((null != E && h(g.g.EVENT, ''.concat(E.guildId, '-').concat(E.guildEventId) + (null != E.recurrenceId ? '-'.concat(E.recurrenceId) : '')), null != (null == u ? void 0 : u.match(O)) && null != r.query)) {
            let e = (0, _.y)(r.query),
                t = e.clientId;
            null != t && '' !== t && !(null === (a = e.scopes) || void 0 === a ? void 0 : a.some((e) => e !== c.x.APPLICATIONS_COMMANDS)) && h(g.g.APP_OAUTH2_LINK, t);
        }
        let R = null == u ? void 0 : u.match(S);
        if (null != R) {
            let e = R[2];
            h(g.g.APP_DIRECTORY_PROFILE, e);
        }
        let L = null == u ? void 0 : u.match(y);
        if (null != L) {
            let e = L[2],
                t = L[3];
            if (null != t) {
                let n = (0, d.l)(e, t);
                h(g.g.APP_DIRECTORY_STOREFRONT_SKU, n);
            } else h(g.g.APP_DIRECTORY_STOREFRONT, e);
        }
        let x = null == u ? void 0 : u.match(A);
        if (null != x) {
            let e = x[1];
            h(g.g.ACTIVITY_BOOKMARK, e);
        }
        let w = null == u ? void 0 : u.match(N);
        null != w && h(g.g.GUILD_PRODUCT, ''.concat(w[1], '-').concat(w[2]));
        let P = null == u ? void 0 : u.match(C);
        null != P && h(g.g.SERVER_SHOP, P[1]);
        let M = W(e);
        if ((null != M && h(g.g.QUESTS_EMBED, M), '/shop' === u)) {
            let e = null === (s = r.hash) || void 0 === s ? void 0 : s.match(D);
            h(g.g.COLLECTIBLES_SHOP, null !== (o = null == e ? void 0 : e[1]) && void 0 !== o ? o : '');
        }
    }
    return n;
}
function W(e) {
    var t, n;
    let r = H(e),
        i = null == r ? void 0 : null === (t = r.primaryHostRemainingPath) || void 0 === t ? void 0 : t.match(R);
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
    return Y(e)[0];
}
