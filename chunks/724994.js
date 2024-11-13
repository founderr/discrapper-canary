n.d(t, {
    L: function () {
        return o;
    },
    U: function () {
        return l;
    }
});
var r = n(24217),
    a = n.n(r),
    i = n(442837),
    s = n(1870);
let l = (e, t) => {
        var n;
        let r = null != e.getPurchase(t.skuId),
            i = null !== (n = t.items) && void 0 !== n ? n : [],
            s = a()(i.map((t) => e.getPurchase(t.skuId)));
        return {
            isPurchased: r || (i.length > 0 && s.length === i.length),
            isPartiallyPurchased: s.length > 0 && s.length < i.length
        };
    },
    o = (e) => (0, i.cj)([s.Z], () => l(s.Z, e));
