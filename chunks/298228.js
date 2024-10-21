s.d(t, {
    O: function () {
        return i;
    }
}),
    s(47120),
    s(653041);
var a = s(192379),
    r = s(399606),
    n = s(1870);
let i = (e) => {
    let t = (0, r.e7)([n.Z], () => n.Z.purchases);
    return (0, a.useMemo)(() => {
        let s = [],
            a = [];
        for (let r of e.values()) r.products.every((e) => !!t.get(e.skuId)) ? s.push(r) : a.push(r);
        return a.concat(s);
    }, [e, t]);
};
