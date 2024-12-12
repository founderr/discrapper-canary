var i = r(47120);
var a = r(399606),
    s = r(597688),
    o = r(1870);
let l = (e) => {
    let [n, r] = (0, a.Wu)([s.Z], () => [s.Z.getCategoryForProduct(e), s.Z.getProduct(e)]);
    return {
        category: n,
        product: r,
        purchase: (0, a.e7)([o.Z], () => o.Z.getPurchase(e))
    };
};
n.Z = l;
