t.d(n, {
    j: function () {
        return h;
    }
}),
    t(653041),
    t(47120);
var r,
    a,
    i,
    o,
    s = t(392711),
    l = t.n(s),
    c = t(442837),
    d = t(570140),
    u = t(823379),
    m = t(731455),
    f = t(388032);
function h(e, n) {
    return l().isEqual(
        e.map((e) => [e.categoryId, e.name]),
        n.map((e) => [e.categoryId, e.name])
    );
}
let x = null,
    p = [],
    g = [],
    C = {};
class b extends (r = c.ZP.Store) {
    getPrimaryCategories() {
        return p;
    }
    getDiscoveryCategories() {
        let e = m.L3.map((e) => g.find((n) => n.categoryId === e)).filter(u.lm);
        return [
            {
                categoryId: m.Hk,
                name: f.intl.string(f.t.Ym2Ri4)
            },
            ...e
        ];
    }
    getClanDiscoveryCategories() {
        let e = m.L3.map((e) => g.find((n) => n.categoryId === e)).filter(u.lm);
        return [
            {
                categoryId: m.Hk,
                name: f.intl.string(f.t.QToH29)
            },
            ...e
        ];
    }
    getAllCategories() {
        return g;
    }
    getFetchedLocale() {
        return x;
    }
    getCategoryName(e) {
        return e === m.Hk ? f.intl.string(f.t.Ym2Ri4) : C[e];
    }
}
(o = 'GuildDiscoveryCategoryStore'),
    (i = 'displayName') in (a = b)
        ? Object.defineProperty(a, i, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[i] = o),
    (n.Z = new b(d.Z, {
        GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS: function (e) {
            let n,
                { categories: t, locale: r } = e,
                a = [],
                i = [];
            if (
                (t
                    .sort((e, n) => (e.name < n.name ? -1 : 1))
                    .forEach((e) => {
                        let { id: t, name: r, is_primary: o } = e;
                        if (t !== m.o3) {
                            if (t === m.dc) {
                                n = {
                                    categoryId: t,
                                    name: r
                                };
                                return;
                            }
                            !0 === o &&
                                a.push({
                                    categoryId: t,
                                    name: r
                                }),
                                i.push({
                                    categoryId: t,
                                    name: r
                                }),
                                (C[t] = r);
                        }
                    }),
                null != n)
            ) {
                let { categoryId: e, name: t } = n;
                a.push({
                    categoryId: e,
                    name: t
                }),
                    (C[e] = t);
            }
            (x = r), (p = a), (g = i);
        }
    }));
