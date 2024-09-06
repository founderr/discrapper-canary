t.d(n, {
    M: function () {
        return r;
    }
}),
    t(653041),
    t(47120);
var r,
    i,
    o,
    l,
    u,
    s,
    a = t(442837),
    c = t(759174),
    d = t(570140),
    _ = t(70956),
    f = t(709054);
((o = r || (r = {}))[(o.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (o[(o.FETCHING = 1)] = 'FETCHING'), (o[(o.FETCHED = 2)] = 'FETCHED');
let E = {},
    I = {},
    S = {},
    g = 10 * _.Z.Millis.MINUTE;
function T(e) {
    return 'guild:'.concat(e);
}
function p(e) {
    return 'guild:'.concat(e, ':published');
}
let C = new c.h(
        (e) => {
            let n = [T(e.guild_id)];
            return e.published && n.push(p(e.guild_id)), n;
        },
        (e) =>
            (function (e) {
                let n = f.default.extractTimestamp(e.id);
                return e.published ? -n : -n + 1000000000000;
            })(e)
    ),
    m = [];
class A extends (i = a.ZP.Store) {
    getGuildProductsForGuildFetchState(e) {
        var n;
        return null !== (n = E[e]) && void 0 !== n ? n : 0;
    }
    getGuildProduct(e) {
        return C.get(e);
    }
    getGuildProductsForGuild(e, n) {
        let { publishedOnly: t } = n;
        return null == e ? m : C.values(t ? p(e) : T(e));
    }
    getGuildProductFetchState(e) {
        var n;
        return null !== (n = I[e]) && void 0 !== n ? n : 0;
    }
    isGuildProductsCacheExpired(e) {
        var n;
        return Date.now() - (null !== (n = S[e]) && void 0 !== n ? n : 0) > g;
    }
}
(s = 'GuildProductsStore'),
    (u = 'displayName') in (l = A)
        ? Object.defineProperty(l, u, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[u] = s),
    (n.Z = new A(d.Z, {
        CONNECTION_OPEN: function () {
            C.clear(), (E = {}), (I = {}), (S = {});
        },
        GUILD_PRODUCTS_FETCH: function (e) {
            let { guildId: n } = e;
            (E[n] = 1),
                [...C.values(T(n))].forEach((e) => {
                    C.delete(e.id);
                });
        },
        GUILD_PRODUCTS_FETCH_SUCCESS: function (e) {
            let { guildId: n, products: t } = e;
            (E[n] = 2),
                (S[n] = Date.now()),
                t.forEach((e) => {
                    C.set(e.id, e), (I[e.id] = 2);
                });
        },
        GUILD_PRODUCTS_FETCH_FAILURE: function (e) {
            let { guildId: n } = e;
            E[n] = 2;
        },
        GUILD_PRODUCT_CREATE: function (e) {
            let { product: n } = e;
            C.set(n.id, n);
        },
        GUILD_PRODUCT_UPDATE: function (e) {
            let { product: n } = e;
            C.set(n.id, n);
        },
        GUILD_PRODUCT_DELETE: function (e) {
            let { productId: n } = e;
            C.delete(n);
        },
        GUILD_PRODUCT_FETCH: function (e) {
            let { productId: n } = e;
            I[n] = 1;
        },
        GUILD_PRODUCT_FETCH_SUCCESS: function (e) {
            let { product: n } = e;
            (I[n.id] = 2), C.set(n.id, n);
        },
        GUILD_PRODUCT_FETCH_FAILURE: function (e) {
            let { productId: n, error: t } = e;
            (I[n] = 2), 404 === t.status && C.delete(n);
        }
    }));
