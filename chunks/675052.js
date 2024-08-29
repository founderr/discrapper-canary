n.d(t, {
    a: function () {
        return c;
    }
}),
    n(47120),
    n(653041);
var r = n(470079),
    a = n(399606),
    s = n(1870),
    o = n(215023);
let i = (e) => {
        let t = new Map();
        return (
            o.N.forEach((e, n) => {
                t.set(e, n);
            }),
            e.sort((e, n) => {
                var r, a;
                let s = null !== (r = t.get(e.skuId)) && void 0 !== r ? r : 1 / 0;
                return s - (null !== (a = t.get(n.skuId)) && void 0 !== a ? a : 1 / 0);
            })
        );
    },
    c = (e) => {
        let t = (0, a.e7)([s.Z], () => s.Z.purchases),
            { sortedPopularPickProducts: n } = (0, r.useMemo)(() => {
                let n = [],
                    r = [],
                    a = new Map();
                for (let s of e.values())
                    s.products.forEach((e) => {
                        o.N.includes(e.skuId) && (t.get(e.skuId) ? n.push(e) : r.push(e), a.set(e.skuId, s));
                    });
                let s = i(n);
                return { sortedPopularPickProducts: i(r).concat(s).slice(0, 12) };
            }, [e, t]);
        return { sortedPopularPickProducts: n };
    };
