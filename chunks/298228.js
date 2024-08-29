n.d(t, {
    O: function () {
        return o;
    }
}),
    n(47120),
    n(653041);
var a = n(470079),
    r = n(399606),
    s = n(1870);
let o = (e) => {
    let t = (0, r.e7)([s.Z], () => s.Z.purchases);
    return (0, a.useMemo)(() => {
        let n = [],
            a = [];
        for (let r of e.values()) r.products.every((e) => !!t.get(e.skuId)) ? n.push(r) : a.push(r);
        return a.concat(n);
    }, [e, t]);
};
