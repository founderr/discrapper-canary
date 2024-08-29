n.d(t, {
    L: function () {
        return l;
    },
    U: function () {
        return i;
    }
});
var a = n(24217),
    r = n.n(a),
    s = n(442837),
    o = n(1870);
let i = (e, t) => {
        var n;
        let a = null != e.getPurchase(t.skuId),
            s = null !== (n = t.items) && void 0 !== n ? n : [],
            o = r()(s.map((t) => e.getPurchase(t.skuId)));
        return {
            isPurchased: a || (s.length > 0 && o.length === s.length),
            isPartiallyPurchased: o.length > 0 && o.length < s.length
        };
    },
    l = (e) => (0, s.cj)([o.Z], () => i(o.Z, e));
