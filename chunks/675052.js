r.d(t, {
    a: function () {
        return l;
    }
}),
    r(47120),
    r(653041);
var a = r(470079),
    n = r(399606),
    s = r(1870),
    i = r(215023);
let o = (e) => {
        let t = new Map();
        return (
            i.N.forEach((e, r) => {
                t.set(e, r);
            }),
            e.sort((e, r) => {
                var a, n;
                let s = null !== (a = t.get(e.skuId)) && void 0 !== a ? a : 1 / 0;
                return s - (null !== (n = t.get(r.skuId)) && void 0 !== n ? n : 1 / 0);
            })
        );
    },
    l = (e) => {
        let t = (0, n.e7)([s.Z], () => s.Z.purchases),
            { sortedPopularPickProducts: r } = (0, a.useMemo)(() => {
                let r = [],
                    a = [],
                    n = new Map();
                for (let s of e.values())
                    s.products.forEach((e) => {
                        i.N.includes(e.skuId) && (t.get(e.skuId) ? r.push(e) : a.push(e), n.set(e.skuId, s));
                    });
                let s = o(r);
                return { sortedPopularPickProducts: o(a).concat(s).slice(0, 12) };
            }, [e, t]);
        return { sortedPopularPickProducts: r };
    };
