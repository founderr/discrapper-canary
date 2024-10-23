r.d(t, {
    l: function () {
        return u;
    }
}),
    r(47120),
    r(653041);
var s,
    n,
    a = r(192379),
    i = r(952639),
    l = r.n(i),
    o = r(399606),
    c = r(1870),
    d = r(724994);
((n = s || (s = {}))[(n.NOT_PURCHASED = 0)] = 'NOT_PURCHASED'), (n[(n.PARTIAL_PURCHASED = 1)] = 'PARTIAL_PURCHASED'), (n[(n.PURCHASED = 2)] = 'PURCHASED');
let u = (e) => {
    let t = (0, o.e7)([c.Z], () => c.Z.purchases);
    return (0, a.useMemo)(() => {
        let t = [[], [], []];
        for (let r of e.values()) {
            let { isPurchased: e, isPartiallyPurchased: s } = (0, d.U)(c.Z, r);
            t[s ? 1 : e ? 2 : 0].push(r);
        }
        return l()(t);
    }, [t, e]);
};
