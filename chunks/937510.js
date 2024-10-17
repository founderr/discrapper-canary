s.d(t, {
    l: function () {
        return u;
    }
}),
    s(47120),
    s(653041);
var a,
    r,
    n = s(470079),
    i = s(952639),
    l = s.n(i),
    o = s(399606),
    c = s(1870),
    d = s(724994);
((r = a || (a = {}))[(r.NOT_PURCHASED = 0)] = 'NOT_PURCHASED'), (r[(r.PARTIAL_PURCHASED = 1)] = 'PARTIAL_PURCHASED'), (r[(r.PURCHASED = 2)] = 'PURCHASED');
let u = (e) => {
    let t = (0, o.e7)([c.Z], () => c.Z.purchases);
    return (0, n.useMemo)(() => {
        let t = [[], [], []];
        for (let s of e.values()) {
            let { isPurchased: e, isPartiallyPurchased: a } = (0, d.U)(c.Z, s);
            t[a ? 1 : e ? 2 : 0].push(s);
        }
        return l()(t);
    }, [t, e]);
};
