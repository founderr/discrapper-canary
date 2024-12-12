r.d(n, {
    Z: function () {
        return I;
    }
});
var i = r(47120);
var a = r(411104);
var s = r(192379),
    o = r(512722),
    l = r.n(o),
    u = r(913527),
    c = r.n(u),
    d = r(442837),
    f = r(496929),
    _ = r(594174),
    h = r(78839),
    p = r(580130),
    m = r(122289),
    g = r(111361),
    E = r(981631),
    v = r(474936);
function I() {
    let { forceFetch: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { forceFetch: !1 },
        n = (0, d.e7)([_.default], () => _.default.getCurrentUser()),
        r = (0, d.Wu)([p.Z], () => p.Z.getFractionalPremium(!1)),
        i = (0, d.e7)([h.ZP], () => h.ZP.getPremiumTypeSubscription()),
        [a, o] = s.useState({
            fractionalState: v.a$.NONE,
            endsAt: c()(0),
            currentEntitlementId: ''
        });
    return (
        s.useEffect(() => {
            if ((null != n && !!(0, g.I5)(n)) || !!e) !p.Z.fetchingAllEntitlements && (0, f.p0)({ entitlementType: E.qc2.FRACTIONAL_REDEMPTION });
        }, []),
        s.useEffect(() => {
            if (null == n || !(0, g.I5)(n) || 0 === r.length) {
                o((e) =>
                    e.endsAt.isSame(c()(0)) && e.fractionalState === v.a$.NONE
                        ? e
                        : {
                              fractionalState: v.a$.NONE,
                              endsAt: c()(0),
                              currentEntitlementId: ''
                          }
                );
                return;
            }
            let e = r.filter((e) => null != e.endsAt && null != e.startsAt).sort((e, n) => ((l()(null != e.endsAt && null != n.endsAt, 'endsAt should not be null'), e.endsAt < n.endsAt) ? -1 : e.endsAt > n.endsAt ? 1 : 0));
            if ((e.reverse(), e.length !== r.length || null == e[0].endsAt)) {
                let e = Array.from(r.values()).map((e) => e.id),
                    n = 'fractional redemption entitlements should have startsAt/endsAt';
                throw ((0, m.g9)(n, { extra: { entitlementIds: e } }), Error(n));
            }
            o({
                fractionalState: null == i || E.JwP.INACTIVE.has(i.status) || i.isBoostOnly ? v.a$.FP_ONLY : v.a$.FP_SUB_PAUSED,
                endsAt: c()(e[0].endsAt),
                currentEntitlementId: e.length > 0 ? e[0].id : ''
            });
        }, [n, r, i]),
        a
    );
}
