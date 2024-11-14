n.d(t, {
    S: function () {
        return a;
    }
});
var r = n(979554);
let a = (e) => {
    var t, n, a;
    let { product: i, selectedVariantIndex: s } = e;
    return i.type === r.Z.VARIANTS_GROUP && null != s && null !== (a = null === (n = i.variants) || void 0 === n ? void 0 : null === (t = n[s]) || void 0 === t ? void 0 : t.skuId) && void 0 !== a ? a : i.skuId;
};
