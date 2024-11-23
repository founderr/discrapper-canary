n.d(t, {
    S: function () {
        return a;
    }
});
var r = n(979554);
let a = (e) => {
    var t, n, a;
    let { product: i, selectedVariantIndex: l } = e;
    return i.type === r.Z.VARIANTS_GROUP && null != l && null !== (a = null === (n = i.variants) || void 0 === n ? void 0 : null === (t = n[l]) || void 0 === t ? void 0 : t.skuId) && void 0 !== a ? a : i.skuId;
};
