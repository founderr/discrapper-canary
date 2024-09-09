r.d(t, {
    L: function () {
        return l;
    },
    U: function () {
        return o;
    }
});
var a = r(24217),
    n = r.n(a),
    s = r(442837),
    i = r(1870);
let o = (e, t) => {
        var r;
        let a = null != e.getPurchase(t.skuId),
            s = null !== (r = t.items) && void 0 !== r ? r : [],
            i = n()(s.map((t) => e.getPurchase(t.skuId)));
        return {
            isPurchased: a || (s.length > 0 && i.length === s.length),
            isPartiallyPurchased: i.length > 0 && i.length < s.length
        };
    },
    l = (e) => (0, s.cj)([i.Z], () => o(i.Z, e));
