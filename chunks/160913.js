t.d(n, {
    U: function () {
        return m;
    }
});
var i = t(913527),
    l = t.n(i),
    r = t(442837),
    s = t(853872),
    a = t(509545),
    c = t(78839),
    o = t(74538),
    u = t(981631),
    d = t(231338);
function m() {
    let e = (0, r.e7)([c.ZP], () => c.ZP.getPremiumTypeSubscription()),
        n = (0, r.e7)([a.Z], () => (null != e && null != e.planIdFromItems ? a.Z.get(null == e ? void 0 : e.planIdFromItems) : null)),
        t = (0, r.e7)([s.Z], () => (null != e && null != e.paymentSourceId ? s.Z.getPaymentSource(e.paymentSourceId) : null), [e]),
        i = null != t && d.Uk.has(t.type),
        m = (null == e ? void 0 : e.status) === u.O0b.PAST_DUE ? l()().diff(l()(e.currentPeriodStart), 'days') : 0;
    return !!(null != e && null != n && (0, o.uZ)(n.id)) && i && m >= 0 && m <= (0, o.lY)(e).days && e.status === u.O0b.PAST_DUE && !e.isPurchasedExternally;
}
