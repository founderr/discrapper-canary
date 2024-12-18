r.d(t, {
    j: function () {
        return I;
    }
}),
    r(653041),
    r(47120);
var n,
    i,
    a,
    o,
    l = r(392711),
    s = r.n(l),
    c = r(442837),
    u = r(570140),
    d = r(823379),
    _ = r(128449),
    E = r(388032);
function I(e, t) {
    return s().isEqual(
        e.map((e) => [e.categoryId, e.name]),
        t.map((e) => [e.categoryId, e.name])
    );
}
let p = null,
    A = [],
    T = [],
    h = {};
class C extends (n = c.ZP.Store) {
    getPrimaryCategories() {
        return A;
    }
    getDiscoveryCategories() {
        let e = _.L3.map((e) => T.find((t) => t.categoryId === e)).filter(d.lm);
        return [
            {
                categoryId: _.Hk,
                name: E.intl.string(E.t.Ym2Ri4)
            },
            ...e
        ];
    }
    getClanDiscoveryCategories() {
        let e = _.L3.map((e) => T.find((t) => t.categoryId === e)).filter(d.lm);
        return [
            {
                categoryId: _.Hk,
                name: E.intl.string(E.t.QToH29)
            },
            ...e
        ];
    }
    getAllCategories() {
        return T;
    }
    getFetchedLocale() {
        return p;
    }
    getCategoryName(e) {
        return e === _.Hk ? E.intl.string(E.t.Ym2Ri4) : h[e];
    }
}
(o = 'GuildDiscoveryCategoryStore'),
    (a = 'displayName') in (i = C)
        ? Object.defineProperty(i, a, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = o),
    (t.Z = new C(u.Z, {
        GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS: function (e) {
            let t,
                { categories: r, locale: n } = e,
                i = [],
                a = [];
            if (
                (r
                    .sort((e, t) => (e.name < t.name ? -1 : 1))
                    .forEach((e) => {
                        let { id: r, name: n, is_primary: o } = e;
                        if (r !== _.o3) {
                            if (r === _.dc) {
                                t = {
                                    categoryId: r,
                                    name: n
                                };
                                return;
                            }
                            !0 === o &&
                                i.push({
                                    categoryId: r,
                                    name: n
                                }),
                                a.push({
                                    categoryId: r,
                                    name: n
                                }),
                                (h[r] = n);
                        }
                    }),
                null != t)
            ) {
                let { categoryId: e, name: r } = t;
                i.push({
                    categoryId: e,
                    name: r
                }),
                    (h[e] = r);
            }
            (p = n), (A = i), (T = a);
        }
    }));
