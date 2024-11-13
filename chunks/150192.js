n.d(t, {
    j: function () {
        return p;
    }
}),
    n(653041),
    n(47120);
var r,
    i,
    a,
    o,
    l = n(392711),
    s = n.n(l),
    c = n(442837),
    u = n(570140),
    d = n(823379),
    _ = n(731455),
    m = n(388032);
function p(e, t) {
    return s().isEqual(
        e.map((e) => [e.categoryId, e.name]),
        t.map((e) => [e.categoryId, e.name])
    );
}
let h = null,
    I = [],
    E = [],
    f = {};
class C extends (r = c.ZP.Store) {
    getPrimaryCategories() {
        return I;
    }
    getDiscoveryCategories() {
        let e = _.L3.map((e) => E.find((t) => t.categoryId === e)).filter(d.lm);
        return [
            {
                categoryId: _.Hk,
                name: m.intl.string(m.t.Ym2Ri4)
            },
            ...e
        ];
    }
    getClanDiscoveryCategories() {
        let e = _.L3.map((e) => E.find((t) => t.categoryId === e)).filter(d.lm);
        return [
            {
                categoryId: _.Hk,
                name: m.intl.string(m.t.QToH29)
            },
            ...e
        ];
    }
    getAllCategories() {
        return E;
    }
    getFetchedLocale() {
        return h;
    }
    getCategoryName(e) {
        return e === _.Hk ? m.intl.string(m.t.Ym2Ri4) : f[e];
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
                { categories: n, locale: r } = e,
                i = [],
                a = [];
            if (
                (n
                    .sort((e, t) => (e.name < t.name ? -1 : 1))
                    .forEach((e) => {
                        let { id: n, name: r, is_primary: o } = e;
                        if (n !== _.o3) {
                            if (n === _.dc) {
                                t = {
                                    categoryId: n,
                                    name: r
                                };
                                return;
                            }
                            !0 === o &&
                                i.push({
                                    categoryId: n,
                                    name: r
                                }),
                                a.push({
                                    categoryId: n,
                                    name: r
                                }),
                                (f[n] = r);
                        }
                    }),
                null != t)
            ) {
                let { categoryId: e, name: n } = t;
                i.push({
                    categoryId: e,
                    name: n
                }),
                    (f[e] = n);
            }
            (h = r), (I = i), (E = a);
        }
    }));
