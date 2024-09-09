r.d(t, {
    O: function () {
        return i;
    }
}),
    r(47120),
    r(653041);
var a = r(470079),
    n = r(399606),
    s = r(1870);
let i = (e) => {
    let t = (0, n.e7)([s.Z], () => s.Z.purchases);
    return (0, a.useMemo)(() => {
        let r = [],
            a = [];
        for (let n of e.values()) n.products.every((e) => !!t.get(e.skuId)) ? r.push(n) : a.push(n);
        return a.concat(r);
    }, [e, t]);
};
