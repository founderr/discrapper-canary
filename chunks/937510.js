r.d(t, {
    l: function () {
        return u;
    }
}),
    r(47120),
    r(653041);
var a,
    n,
    s = r(470079),
    i = r(952639),
    o = r.n(i),
    l = r(399606),
    c = r(1870),
    d = r(724994);
((n = a || (a = {}))[(n.NOT_PURCHASED = 0)] = 'NOT_PURCHASED'), (n[(n.PARTIAL_PURCHASED = 1)] = 'PARTIAL_PURCHASED'), (n[(n.PURCHASED = 2)] = 'PURCHASED');
let u = (e) => {
    let t = (0, l.e7)([c.Z], () => c.Z.purchases);
    return (0, s.useMemo)(() => {
        let t = [[], [], []];
        for (let r of e.values()) {
            let { isPurchased: e, isPartiallyPurchased: a } = (0, d.U)(c.Z, r);
            t[a ? 1 : e ? 2 : 0].push(r);
        }
        return o()(t);
    }, [t, e]);
};
