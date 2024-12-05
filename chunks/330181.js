n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(913527),
    s = n.n(a),
    l = n(355467),
    o = n(100527),
    c = n(906732),
    d = n(584825),
    u = n(931547),
    g = n(388032);
let m = (e) => {
    let [t, n] = r.useState(!1),
        [i, a] = r.useState(null);
    return {
        resetRenewalMutation: async (t) => {
            n(!0), a(null);
            try {
                await (0, l.qu)(t, e);
            } catch (e) {
                a(e);
            } finally {
                n(!1);
            }
        },
        submitting: t,
        error: i
    };
};
function p(e) {
    let { groupListingId: t, subscription: n, className: a } = e,
        { analyticsLocations: l } = (0, c.ZP)(o.Z.PENDING_PLAN_CHANGE_NOTICE),
        { resetRenewalMutation: p, submitting: f, error: _ } = m(l),
        h = (0, d._k)(t, { includeSoftDeleted: !0 }),
        { currentListing: E, nextListing: b } = r.useMemo(() => {
            if ((null == n ? void 0 : n.renewalMutations) == null)
                return {
                    currentListing: void 0,
                    nextListing: void 0
                };
            let e = n.items[0].planId,
                t = n.renewalMutations.items[0].planId,
                i = h.find((t) => t.subscription_plans[0].id === e);
            return {
                currentListing: i,
                nextListing: h.find((e) => e.subscription_plans[0].id === t)
            };
        }, [n, h]);
    if (null == n || null == E || null == b) return null;
    let x = s()(n.currentPeriodEnd).format('MMM DD, YYYY');
    return (0, i.jsx)(u.Z, {
        message: g.intl.format(g.t.chw89f, {
            currentListing: E.name,
            nextListing: b.name,
            changeDate: x
        }),
        error: null == _ ? void 0 : _.message,
        onClick: () => p(n),
        submitting: f,
        ctaMessage: g.intl.string(g.t.De4wIy),
        className: a
    });
}
