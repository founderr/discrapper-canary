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
        var n, r, l;
        let s = null != e.getPurchase(t.skuId),
            o = null !== (n = t.items) && void 0 !== n ? n : [],
            c = a()(o.map((t) => e.getPurchase(t.skuId)));
        switch (null == t ? void 0 : t.type) {
            case i.Z.BUNDLE:
                return {
                    isPurchased: s || (o.length > 0 && c.length === o.length),
                    isPartiallyOwnedBundle: c.length > 0 && c.length < o.length,
                    isPartiallyOwnedVariantsGroup: !1
                };
            case i.Z.VARIANTS_GROUP:
                let d = null === (r = t.variants) || void 0 === r ? void 0 : r.every((t) => null != e.getPurchase(t.skuId)),
                    u = (null === (l = t.variants) || void 0 === l ? void 0 : l.some((t) => null != e.getPurchase(t.skuId))) && !d;
                return {
                    isPurchased: null != d && d,
                    isPartiallyOwnedBundle: !1,
                    isPartiallyOwnedVariantsGroup: null != u && u
                };
            default:
                return {
                    isPurchased: s,
                    isPartiallyOwnedBundle: !1,
                    isPartiallyOwnedVariantsGroup: !1
                };
        }
    },
    c = (e) => (0, l.cj)([s.Z], () => o(s.Z, e));
