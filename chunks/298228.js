r.d(t, {
    O: function () {
        return i;
    }
}),
    r(47120),
    r(653041);
var s = r(192379),
    n = r(399606),
    a = r(1870);
let i = (e) => {
    let t = (0, n.e7)([a.Z], () => a.Z.purchases);
    return (0, s.useMemo)(() => {
        let r = [],
            s = [];
        for (let n of e.values()) n.products.every((e) => !!t.get(e.skuId)) ? r.push(n) : s.push(n);
        return s.concat(r);
    }, [e, t]);
};
