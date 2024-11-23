n.d(t, {
    l: function () {
        return u;
    }
}),
    n(47120),
    n(653041);
var r,
    a,
    i = n(192379),
    l = n(952639),
    s = n.n(l),
    o = n(399606),
    c = n(1870),
    d = n(724994);
((a = r || (r = {}))[(a.NOT_PURCHASED = 0)] = 'NOT_PURCHASED'), (a[(a.PARTIAL_OWNED_VARIANTS_GROUP = 1)] = 'PARTIAL_OWNED_VARIANTS_GROUP'), (a[(a.PARTIAL_OWNED_BUNDLE = 2)] = 'PARTIAL_OWNED_BUNDLE'), (a[(a.PURCHASED = 3)] = 'PURCHASED');
let u = (e) => {
    let t = (0, o.e7)([c.Z], () => c.Z.purchases);
    return (0, i.useMemo)(() => {
        let t = [[], [], [], []];
        for (let n of e.values()) {
            let { isPurchased: e, isPartiallyOwnedBundle: r, isPartiallyOwnedVariantsGroup: a } = (0, d.U)(c.Z, n);
            t[r ? 2 : a ? 1 : e ? 3 : 0].push(n);
        }
        return s()(t);
    }, [t, e]);
};
