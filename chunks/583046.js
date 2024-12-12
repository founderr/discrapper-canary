r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(442837),
    a = r(509545),
    s = r(212895),
    o = r(474936),
    l = r(231338);
function u(e) {
    var n, r;
    let { activeSubscription: u, skuIDs: c, paymentSourceId: d, isGift: f } = e;
    c = c.filter((e) => e !== o.Si.NONE);
    let _ = (0, i.e7)([a.Z], () => {
            let e = a.Z.getPlanIdsForSkus(c).filter((e) => !f || o.dJ.has(e));
            return e.length > 0 ? a.Z.get(e[0]) : null;
        }),
        h = null == _ ? [] : (0, s.DE)(_.id, d, f),
        p = null !== (r = null !== (n = h.find((e) => e === (null == u ? void 0 : u.currency))) && void 0 !== n ? n : h[0]) && void 0 !== r ? r : l.pK.USD;
    return {
        ...(0, s.gr)(p, null == _ ? void 0 : _.id, d, f, c),
        currencies: h
    };
}
