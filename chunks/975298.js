n.d(t, {
    Z: function () {
        return N;
    }
}),
    n(47120),
    n(411104);
var s = n(470079),
    i = n(512722),
    r = n.n(i),
    l = n(913527),
    o = n.n(l),
    a = n(442837),
    c = n(496929),
    u = n(594174),
    d = n(78839),
    h = n(580130),
    m = n(122289),
    f = n(111361),
    p = n(981631),
    S = n(474936);
function N(e) {
    let { forceFetch: t } = e,
        n = (0, a.e7)([u.default], () => u.default.getCurrentUser()),
        i = (0, a.e7)([h.Z], () => h.Z.getFractionalPremium(!1)),
        l = (0, a.e7)([d.ZP], () => d.ZP.getMostRecentPremiumTypeSubscription()),
        [N, b] = s.useState({
            fractionalState: S.a$.NONE,
            endsAt: o()(0)
        });
    return (
        s.useEffect(() => {
            if ((null != n && !!(0, f.I5)(n)) || !!t) (0, c.p0)({ entitlementType: p.qc2.FRACTIONAL_REDEMPTION });
        }, []),
        s.useEffect(() => {
            if (null == n || !(0, f.I5)(n) || 0 === i.length) {
                b({
                    fractionalState: S.a$.NONE,
                    endsAt: o()(0)
                });
                return;
            }
            let e = i.filter((e) => null != e.endsAt && null != e.startsAt).sort((e, t) => ((r()(null != e.endsAt && null != t.endsAt, 'endsAt should not be null'), e.endsAt < t.endsAt) ? -1 : e.endsAt > t.endsAt ? 1 : 0));
            if ((e.reverse(), e.length !== i.length || null == e[0].endsAt)) {
                let e = Array.from(i.values()).map((e) => e.id),
                    t = 'fractional redemption entitlements should have startsAt/endsAt';
                throw ((0, m.g9)(t, { extra: { entitlementIds: e } }), Error(t));
            }
            b({
                fractionalState: null != l ? S.a$.FP_SUB : S.a$.FP_ONLY,
                endsAt: o()(e[0].endsAt)
            });
        }, [n, i, l]),
        N
    );
}
