r.d(t, {
    L: function () {
        return o;
    },
    U: function () {
        return l;
    }
});
var s = r(24217),
    n = r.n(s),
    a = r(442837),
    i = r(1870);
let l = (e, t) => {
        var r;
        let s = null != e.getPurchase(t.skuId),
            a = null !== (r = t.items) && void 0 !== r ? r : [],
            i = n()(a.map((t) => e.getPurchase(t.skuId)));
        return {
            isPurchased: s || (a.length > 0 && i.length === a.length),
            isPartiallyPurchased: i.length > 0 && i.length < a.length
        };
    },
    o = (e) => (0, a.cj)([i.Z], () => l(i.Z, e));
