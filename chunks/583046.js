n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(442837),
    i = n(509545),
    a = n(212895),
    s = n(474936),
    o = n(231338);
function l(e) {
    var t, n;
    let { activeSubscription: l, skuIDs: u, paymentSourceId: c, isGift: d } = e;
    u = u.filter((e) => e !== s.Si.NONE);
    let f = (0, r.e7)([i.Z], () => {
            let e = i.Z.getPlanIdsForSkus(u).filter((e) => !d || s.dJ.has(e));
            return e.length > 0 ? i.Z.get(e[0]) : null;
        }),
        _ = null == f ? [] : (0, a.DE)(f.id, c, d),
        h = null !== (n = null !== (t = _.find((e) => e === (null == l ? void 0 : l.currency))) && void 0 !== t ? t : _[0]) && void 0 !== n ? n : o.pK.USD;
    return {
        ...(0, a.gr)(h, null == f ? void 0 : f.id, c, d, u),
        currencies: _
    };
}
