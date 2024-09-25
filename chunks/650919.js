t.d(s, {
    Z: function () {
        return I;
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
    d = t(551428),
    _ = t(937615),
    u = t(488915),
    E = t(171246),
    T = t(981631),
    S = t(689938);
function I(e) {
    let s = (0, E.bZ)(e),
        t = (0, r.e7)([u.Z], () => u.Z.getSubscriptionListingForPlan(s), [s]),
        a = (0, r.e7)([d.Z], () => (null != t ? d.Z.getForSKU(t.id) : null), [t]),
        I = (0, r.e7)([u.Z], () => (null != t ? u.Z.getSubscriptionGroupListingForSubscriptionListing(t.id) : null), [t]),
        N = (0, r.e7)(
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
        A = (0, r.e7)(
            [o.Z],
            () => {
                if (null == N) return;
                let e = o.Z.getApplication(N.applicationId);
                if (null != e) return e;
            },
            [N]
        ),
        m = (0, r.e7)(
            [l.Z],
            () => {
                if (null != N) return l.Z.getGuild(N.guildId);
            },
            [N]
        ),
        [C, g] = n.useState(!1),
        h =
            null == t
                ? void 0
                : (function (e) {
                      let { listing: s, subscription: t } = e,
                          n = t.currentPeriodEnd,
                          a = s.subscription_plans[0],
                          r = (0, _.T4)(a.price, a.currency),
                          o = t.createdAt,
                          l = t.status === T.O0b.CANCELED,
                          c = s.soft_deleted,
                          d = t.status === T.O0b.PAST_DUE;
                      return {
                          subscribedSinceDate: o,
                          currentPeriodEndDate: n,
                          currentPeriodEndLabel: i()().isAfter(t.currentPeriodEnd) ? S.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_INFO_SUBSCRIPTION_ENDED : S.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_INFO_SUBSCRIPTION_ENDS,
                          subscriptionPlanPrice: r,
                          isCancelled: l,
                          isDeleted: c,
                          isPastDue: d
                      };
                  })({
                      listing: t,
                      subscription: e
                  });
    return {
        application: A,
        guild: m,
        expanded: C,
        handleToggleExpanded: () => g((e) => !e),
        listing: t,
        storeListing: a,
        groupListing: I,
        subscriptionInfo: h
    };
}
