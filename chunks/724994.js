n.d(t, {
    L: function () {
        return c;
    },
    U: function () {
        return o;
    }
});
var r = n(24217),
    a = n.n(r),
    i = n(979554),
    l = n(442837),
    s = n(1870);
let o = (e, t) => {
        var n, r, l, s, o;
        let c = null != e.getPurchase(t.skuId),
            d = null !== (n = t.items) && void 0 !== n ? n : [],
            u = a()(d.map((t) => e.getPurchase(t.skuId)));
        switch (null == t ? void 0 : t.type) {
            case i.Z.BUNDLE:
                return {
                    isPurchased: c || (d.length > 0 && u.length === d.length),
                    isPartiallyOwnedBundle: u.length > 0 && u.length < d.length,
                    isPartiallyOwnedVariantsGroup: !1
                };
            case i.Z.VARIANTS_GROUP:
                return {
                    isPurchased: null !== (s = null === (r = t.variants) || void 0 === r ? void 0 : r.every((t) => null != e.getPurchase(t.skuId))) && void 0 !== s && s,
                    isPartiallyOwnedBundle: !1,
                    isPartiallyOwnedVariantsGroup: null !== (o = null === (l = t.variants) || void 0 === l ? void 0 : l.some((t) => null != e.getPurchase(t.skuId))) && void 0 !== o && o
                };
            default:
                return {
                    isPurchased: c,
                    isPartiallyOwnedBundle: !1,
                    isPartiallyOwnedVariantsGroup: !1
                };
        }
    },
    c = (e) => (0, l.cj)([s.Z], () => o(s.Z, e));
