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
    s = n(442837),
    i = n(1870);
let l = (e, t) => {
        var n;
        let r = null != e.getPurchase(t.skuId),
            s = null !== (n = t.items) && void 0 !== n ? n : [],
            i = a()(s.map((t) => e.getPurchase(t.skuId)));
        return {
            isPurchased: r || (s.length > 0 && i.length === s.length),
            isPartiallyPurchased: i.length > 0 && i.length < s.length
        };
    },
    o = (e) => (0, s.cj)([i.Z], () => l(i.Z, e));
