n.d(t, {
    O: function () {
        return i;
    }
}),
    n(47120),
    n(653041);
var r = n(192379),
    a = n(399606),
    s = n(1870);
let i = (e) => {
    let t = (0, a.e7)([s.Z], () => s.Z.purchases);
    return (0, r.useMemo)(() => {
        let n = [],
            r = [];
        for (let a of e.values()) a.products.every((e) => !!t.get(e.skuId)) ? n.push(a) : r.push(a);
        return r.concat(n);
    }, [e, t]);
};
