n.d(t, {
    j: function () {
        return m;
    }
}),
    n(653041),
    n(47120);
var r,
    i,
    a,
    o,
    s = n(392711),
    l = n.n(s),
    c = n(442837),
    u = n(570140),
    d = n(823379),
    _ = n(128449),
    h = n(388032);
function m(e, t) {
    return l().isEqual(
        e.map((e) => [e.categoryId, e.name]),
        t.map((e) => [e.categoryId, e.name])
    );
}
let p = null,
    E = [],
    I = [],
    T = {};
class C extends (r = c.ZP.Store) {
    getPrimaryCategories() {
        return E;
    }
    getDiscoveryCategories() {
        let e = _.L3.map((e) => I.find((t) => t.categoryId === e)).filter(d.lm);
        return [
            {
                categoryId: _.Hk,
                name: h.intl.string(h.t.Ym2Ri4)
            },
            ...e
        ];
    }
    getClanDiscoveryCategories() {
        let e = _.L3.map((e) => I.find((t) => t.categoryId === e)).filter(d.lm);
        return [
            {
                categoryId: _.Hk,
                name: h.intl.string(h.t.QToH29)
            },
            ...e
        ];
    }
    getAllCategories() {
        return I;
    }
    getFetchedLocale() {
        return p;
    }
    getCategoryName(e) {
        return e === _.Hk ? h.intl.string(h.t.Ym2Ri4) : T[e];
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
                                (T[n] = r);
                        }
                    }),
                null != t)
            ) {
                let { categoryId: e, name: n } = t;
                i.push({
                    categoryId: e,
                    name: n
                }),
                    (T[e] = n);
            }
            (p = r), (E = i), (I = a);
        }
    }));
