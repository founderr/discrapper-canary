n.d(t, {
    L: function () {
        return c;
    },
    U: function () {
        return i;
    }
});
var r = n(24217),
    a = n.n(r),
    s = n(442837),
    o = n(1870);
let i = (e, t) => {
        var n;
        let r = null != e.getPurchase(t.skuId),
            s = null !== (n = t.items) && void 0 !== n ? n : [],
            o = a()(s.map((t) => e.getPurchase(t.skuId)));
        return {
            isPurchased: r || (s.length > 0 && o.length === s.length),
            isPartiallyPurchased: o.length > 0 && o.length < s.length
        };
    },
    c = (e) => (0, s.cj)([o.Z], () => i(o.Z, e));
