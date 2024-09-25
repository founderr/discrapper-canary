var r = n(47120);
var i = n(399606),
    a = n(597688),
    o = n(1870);
let s = (e) => {
    let [t, n] = (0, i.Wu)([a.Z], () => [a.Z.getCategoryForProduct(e), a.Z.getProduct(e)]);
    return {
        category: t,
        product: n,
        purchase: (0, i.e7)([o.Z], () => o.Z.getPurchase(e))
    };
};
t.Z = s;
