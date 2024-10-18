n.d(t, {
    Z: function () {
        return I;
    }
}),
    n(47120),
    n(411104);
var r = n(470079),
    i = n(512722),
    a = n.n(i),
    s = n(913527),
    o = n.n(s),
    l = n(442837),
    u = n(496929),
    c = n(594174),
    d = n(78839),
    _ = n(580130),
    E = n(122289),
    f = n(111361),
    h = n(981631),
    p = n(474936);
function I() {
    let { forceFetch: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { forceFetch: !1 },
        t = (0, l.e7)([c.default], () => c.default.getCurrentUser()),
        n = (0, l.Wu)([_.Z], () => _.Z.getFractionalPremium(!1)),
        i = (0, l.e7)([d.ZP], () => d.ZP.getPremiumTypeSubscription()),
        [s, I] = r.useState({
            fractionalState: p.a$.NONE,
            endsAt: o()(0)
        });
    return (
        r.useEffect(() => {
            if ((null != t && !!(0, f.I5)(t)) || !!e) !_.Z.fetchingAllEntitlements && (0, u.p0)({ entitlementType: h.qc2.FRACTIONAL_REDEMPTION });
        }, []),
        r.useEffect(() => {
            if (null == t || !(0, f.I5)(t) || 0 === n.length) {
                I({
                    fractionalState: p.a$.NONE,
                    endsAt: o()(0)
                });
                return;
            }
            let e = n.filter((e) => null != e.endsAt && null != e.startsAt).sort((e, t) => ((a()(null != e.endsAt && null != t.endsAt, 'endsAt should not be null'), e.endsAt < t.endsAt) ? -1 : e.endsAt > t.endsAt ? 1 : 0));
            if ((e.reverse(), e.length !== n.length || null == e[0].endsAt)) {
                let e = Array.from(n.values()).map((e) => e.id),
                    t = 'fractional redemption entitlements should have startsAt/endsAt';
                throw ((0, E.g9)(t, { extra: { entitlementIds: e } }), Error(t));
            }
            I({
                fractionalState: null == i || h.JwP.INACTIVE.has(i.status) ? p.a$.FP_ONLY : p.a$.FP_SUB,
                endsAt: o()(e[0].endsAt)
            });
        }, [t, n, i]),
        s
    );
}
