n.d(t, {
    L: function () {
        return l;
    },
    U: function () {
        return o;
    }
});
var r = n(24217),
    s = n.n(r),
    a = n(442837),
    i = n(1870);
let o = (e, t) => {
        var n;
        let r = null != e.getPurchase(t.skuId),
            a = null !== (n = t.items) && void 0 !== n ? n : [],
            i = s()(a.map((t) => e.getPurchase(t.skuId)));
        return {
            isPurchased: r || (a.length > 0 && i.length === a.length),
            isPartiallyPurchased: i.length > 0 && i.length < a.length
        };
    },
    l = (e) => (0, a.cj)([i.Z], () => o(i.Z, e));
