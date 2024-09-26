n.d(t, {
    M: function () {
        return r;
    }
});
var r,
    i,
    a = n(653041);
var o = n(47120);
var s = n(442837),
    l = n(759174),
    u = n(570140),
    c = n(70956),
    d = n(709054);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
!(function (e) {
    (e[(e.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (e[(e.FETCHING = 1)] = 'FETCHING'), (e[(e.FETCHED = 2)] = 'FETCHED');
})(r || (r = {}));
let E = {},
    f = {},
    h = {},
    p = 10 * c.Z.Millis.MINUTE,
    m = 1000000000000;
function I(e) {
    return 'guild:'.concat(e);
}
function T(e) {
    return 'guild:'.concat(e, ':published');
}
function g(e) {
    let t = d.default.extractTimestamp(e.id);
    return e.published ? -t : -t + m;
}
let S = new l.h(
        (e) => {
            let t = [I(e.guild_id)];
            return e.published && t.push(T(e.guild_id)), t;
        },
        (e) => g(e)
    ),
    A = [];
function v() {
    S.clear(), (E = {}), (f = {}), (h = {});
}
function N(e) {
    let { guildId: t } = e;
    (E[t] = 1),
        [...S.values(I(t))].forEach((e) => {
            S.delete(e.id);
        });
}
function O(e) {
    let { guildId: t, products: n } = e;
    (E[t] = 2),
        (h[t] = Date.now()),
        n.forEach((e) => {
            S.set(e.id, e), (f[e.id] = 2);
        });
}
function R(e) {
    let { guildId: t } = e;
    E[t] = 2;
}
function C(e) {
    let { productId: t } = e;
    f[t] = 1;
}
function y(e) {
    let { product: t } = e;
    (f[t.id] = 2), S.set(t.id, t);
}
function L(e) {
    let { productId: t, error: n } = e;
    (f[t] = 2), 404 === n.status && S.delete(t);
}
function b(e) {
    let { product: t } = e;
    S.set(t.id, t);
}
function D(e) {
    let { product: t } = e;
    S.set(t.id, t);
}
function M(e) {
    let { productId: t } = e;
    S.delete(t);
}
class P extends (i = s.ZP.Store) {
    getGuildProductsForGuildFetchState(e) {
        var t;
        return null !== (t = E[e]) && void 0 !== t ? t : 0;
    }
    getGuildProduct(e) {
        return S.get(e);
    }
    getGuildProductsForGuild(e, t) {
        let { publishedOnly: n } = t;
        return null == e ? A : S.values(n ? T(e) : I(e));
    }
    getGuildProductFetchState(e) {
        var t;
        return null !== (t = f[e]) && void 0 !== t ? t : 0;
    }
    isGuildProductsCacheExpired(e) {
        var t;
        return Date.now() - (null !== (t = h[e]) && void 0 !== t ? t : 0) > p;
    }
}
_(P, 'displayName', 'GuildProductsStore'),
    (t.Z = new P(u.Z, {
        CONNECTION_OPEN: v,
        GUILD_PRODUCTS_FETCH: N,
        GUILD_PRODUCTS_FETCH_SUCCESS: O,
        GUILD_PRODUCTS_FETCH_FAILURE: R,
        GUILD_PRODUCT_CREATE: b,
        GUILD_PRODUCT_UPDATE: D,
        GUILD_PRODUCT_DELETE: M,
        GUILD_PRODUCT_FETCH: C,
        GUILD_PRODUCT_FETCH_SUCCESS: y,
        GUILD_PRODUCT_FETCH_FAILURE: L
    }));
