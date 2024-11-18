n.d(t, {
    j: function () {
        return h;
    }
}),
    n(653041),
    n(47120);
var r,
    i,
    o,
    a,
    l = n(392711),
    s = n.n(l),
    c = n(442837),
    u = n(570140),
    d = n(823379),
    _ = n(731455),
    m = n(388032);
function h(e, t) {
    return s().isEqual(
        e.map((e) => [e.categoryId, e.name]),
        t.map((e) => [e.categoryId, e.name])
    );
}
let E = null,
    p = [],
    I = [],
    f = {};
class C extends (r = c.ZP.Store) {
    getPrimaryCategories() {
        return p;
    }
    getDiscoveryCategories() {
        let e = _.L3.map((e) => I.find((t) => t.categoryId === e)).filter(d.lm);
        return [
            {
                categoryId: _.Hk,
                name: m.intl.string(m.t.Ym2Ri4)
            },
            ...e
        ];
    }
    getClanDiscoveryCategories() {
        let e = _.L3.map((e) => I.find((t) => t.categoryId === e)).filter(d.lm);
        return [
            {
                categoryId: _.Hk,
                name: m.intl.string(m.t.QToH29)
            },
            ...e
        ];
    }
    getAllCategories() {
        return I;
    }
    getFetchedLocale() {
        return E;
    }
    getCategoryName(e) {
        return e === _.Hk ? m.intl.string(m.t.Ym2Ri4) : f[e];
    }
}
(a = 'GuildDiscoveryCategoryStore'),
    (o = 'displayName') in (i = C)
        ? Object.defineProperty(i, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[o] = a),
    (t.Z = new C(u.Z, {
        GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS: function (e) {
            let t,
                { categories: n, locale: r } = e,
                i = [],
                o = [];
            if (
                (n
                    .sort((e, t) => (e.name < t.name ? -1 : 1))
                    .forEach((e) => {
                        let { id: n, name: r, is_primary: a } = e;
                        if (n !== _.o3) {
                            if (n === _.dc) {
                                t = {
                                    categoryId: n,
                                    name: r
                                };
                                return;
                            }
                            !0 === a &&
                                i.push({
                                    categoryId: n,
                                    name: r
                                }),
                                o.push({
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
            (E = r), (p = i), (I = o);
        }
    }));
