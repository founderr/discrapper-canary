n.d(t, {
    l: function () {
        return u;
    }
}),
    n(47120),
    n(653041);
var r,
    a,
    s = n(192379),
    i = n(952639),
    l = n.n(i),
    o = n(399606),
    c = n(1870),
    d = n(724994);
((a = r || (r = {}))[(a.NOT_PURCHASED = 0)] = 'NOT_PURCHASED'), (a[(a.PARTIAL_PURCHASED = 1)] = 'PARTIAL_PURCHASED'), (a[(a.PURCHASED = 2)] = 'PURCHASED');
let u = (e) => {
    let t = (0, o.e7)([c.Z], () => c.Z.purchases);
    return (0, s.useMemo)(() => {
        let t = [[], [], []];
        for (let n of e.values()) {
            let { isPurchased: e, isPartiallyPurchased: r } = (0, d.U)(c.Z, n);
            t[r ? 1 : e ? 2 : 0].push(n);
        }
        return l()(t);
    }, [t, e]);
};
