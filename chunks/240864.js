t.d(n, {
    M: function () {
        return i;
    }
}),
    t(653041),
    t(47120);
var i,
    r,
    l,
    o,
    u,
    s,
    a = t(442837),
    c = t(759174),
    d = t(570140),
    _ = t(70956),
    E = t(709054);
((l = i || (i = {}))[(l.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (l[(l.FETCHING = 1)] = 'FETCHING'), (l[(l.FETCHED = 2)] = 'FETCHED');
let f = {},
    I = {},
    S = {},
    T = 10 * _.Z.Millis.MINUTE;
function C(e) {
    return 'guild:'.concat(e);
}
function p(e) {
    return 'guild:'.concat(e, ':published');
}
let N = new c.h(
        (e) => {
            let n = [C(e.guild_id)];
            return e.published && n.push(p(e.guild_id)), n;
        },
        (e) =>
            (function (e) {
                let n = E.default.extractTimestamp(e.id);
                return e.published ? -n : -n + 1000000000000;
            })(e)
    ),
    A = [];
class g extends (r = a.ZP.Store) {
    getGuildProductsForGuildFetchState(e) {
        var n;
        return null !== (n = f[e]) && void 0 !== n ? n : 0;
    }
    getGuildProduct(e) {
        return N.get(e);
    }
    getGuildProductsForGuild(e, n) {
        let { publishedOnly: t } = n;
        return null == e ? A : N.values(t ? p(e) : C(e));
    }
    getGuildProductFetchState(e) {
        var n;
        return null !== (n = I[e]) && void 0 !== n ? n : 0;
    }
    isGuildProductsCacheExpired(e) {
        var n;
        return Date.now() - (null !== (n = S[e]) && void 0 !== n ? n : 0) > T;
    }
}
(s = 'GuildProductsStore'),
    (u = 'displayName') in (o = g)
        ? Object.defineProperty(o, u, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (o[u] = s),
    (n.Z = new g(d.Z, {
        CONNECTION_OPEN: function () {
            N.clear(), (f = {}), (I = {}), (S = {});
        },
        GUILD_PRODUCTS_FETCH: function (e) {
            let { guildId: n } = e;
            (f[n] = 1),
                [...N.values(C(n))].forEach((e) => {
                    N.delete(e.id);
                });
        },
        GUILD_PRODUCTS_FETCH_SUCCESS: function (e) {
            let { guildId: n, products: t } = e;
            (f[n] = 2),
                (S[n] = Date.now()),
                t.forEach((e) => {
                    N.set(e.id, e), (I[e.id] = 2);
                });
        },
        GUILD_PRODUCTS_FETCH_FAILURE: function (e) {
            let { guildId: n } = e;
            f[n] = 2;
        },
        GUILD_PRODUCT_CREATE: function (e) {
            let { product: n } = e;
            N.set(n.id, n);
        },
        GUILD_PRODUCT_UPDATE: function (e) {
            let { product: n } = e;
            N.set(n.id, n);
        },
        GUILD_PRODUCT_DELETE: function (e) {
            let { productId: n } = e;
            N.delete(n);
        },
        GUILD_PRODUCT_FETCH: function (e) {
            let { productId: n } = e;
            I[n] = 1;
        },
        GUILD_PRODUCT_FETCH_SUCCESS: function (e) {
            let { product: n } = e;
            (I[n.id] = 2), N.set(n.id, n);
        },
        GUILD_PRODUCT_FETCH_FAILURE: function (e) {
            let { productId: n, error: t } = e;
            (I[n] = 2), 404 === t.status && N.delete(n);
        }
    }));
