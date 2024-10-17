s.d(t, {
    L: function () {
        return o;
    },
    U: function () {
        return l;
    }
});
var a = s(24217),
    r = s.n(a),
    n = s(442837),
    i = s(1870);
let l = (e, t) => {
        var s;
        let a = null != e.getPurchase(t.skuId),
            n = null !== (s = t.items) && void 0 !== s ? s : [],
            i = r()(n.map((t) => e.getPurchase(t.skuId)));
        return {
            isPurchased: a || (n.length > 0 && i.length === n.length),
            isPartiallyPurchased: i.length > 0 && i.length < n.length
        };
    },
    o = (e) => (0, n.cj)([i.Z], () => l(i.Z, e));
