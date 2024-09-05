t.d(s, {
    Z: function () {
        return S;
    }
}),
    t(47120);
var n = t(470079),
    a = t(913527),
    i = t.n(a),
    r = t(442837),
    o = t(812206),
    l = t(430824),
    c = t(580130),
    d = t(937615),
    u = t(488915),
    _ = t(171246),
    E = t(981631),
    T = t(689938);
function S(e) {
    let s = (0, _.bZ)(e),
        t = (0, r.e7)([u.Z], () => u.Z.getSubscriptionListingForPlan(s), [s]),
        a = (0, r.e7)([u.Z], () => (null != t ? u.Z.getSubscriptionGroupListingForSubscriptionListing(t.id) : null), [t]),
        S = (0, r.e7)(
            [c.Z],
            () => {
                let s = c.Z.getForSubscription(e.id);
                if (null != s) {
                    let [e] = Array.from(s);
                    return e;
                }
                return null;
            },
            [e]
        ),
        I = (0, r.e7)(
            [o.Z],
            () => {
                if (null == S) return;
                let e = o.Z.getApplication(S.applicationId);
                if (null != e) return e;
            },
            [S]
        ),
        N = (0, r.e7)(
            [l.Z],
            () => {
                if (null != S) return l.Z.getGuild(S.guildId);
            },
            [S]
        ),
        [m, C] = n.useState(!1),
        g =
            null == t
                ? void 0
                : (function (e) {
                      let { listing: s, subscription: t } = e,
                          n = t.currentPeriodEnd,
                          a = s.subscription_plans[0],
                          r = (0, d.T4)(a.price, a.currency),
                          o = t.createdAt,
                          l = t.status === E.O0b.CANCELED,
                          c = s.soft_deleted,
                          u = t.status === E.O0b.PAST_DUE;
                      return {
                          subscribedSinceDate: o,
                          currentPeriodEndDate: n,
                          currentPeriodEndLabel: i()().isAfter(t.currentPeriodEnd) ? T.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_INFO_SUBSCRIPTION_ENDED : T.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_INFO_SUBSCRIPTION_ENDS,
                          subscriptionPlanPrice: r,
                          isCancelled: l,
                          isDeleted: c,
                          isPastDue: u
                      };
                  })({
                      listing: t,
                      subscription: e
                  });
    return {
        application: I,
        guild: N,
        expanded: m,
        handleToggleExpanded: () => C((e) => !e),
        listing: t,
        groupListing: a,
        subscriptionInfo: g
    };
}
