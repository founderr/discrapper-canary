t.d(s, {
    Z: function () {
        return T;
    }
}),
    t(47120);
var n = t(470079),
    a = t(913527),
    i = t.n(a),
    r = t(442837),
    o = t(430824),
    l = t(937615),
    c = t(584825),
    d = t(289393),
    _ = t(697227),
    u = t(981631),
    E = t(689938);
function T(e) {
    let s = (0, _.W)(e),
        t = (0, r.e7)([d.Z], () => d.Z.getSubscriptionListingForPlan(s)),
        a = (0, r.e7)([d.Z], () => (null != t ? d.Z.getSubscriptionGroupListingForSubscriptionListing(t.id) : null)),
        T = (0, r.e7)([o.Z], () => o.Z.getGuild(null == a ? void 0 : a.guild_id)),
        [S, I] = n.useState(!1),
        { fetchSubscriptionsSettings: N } = (0, c.JH)();
    n.useEffect(() => {
        S && null != T && null == d.Z.getSubscriptionSettings(T.id) && N(T.id);
    }, [S, T, N]);
    let C =
        null == t
            ? void 0
            : (function (e) {
                  let { subscription: s } = e,
                      t = i()(s.currentPeriodEnd).format('M/D/YY'),
                      n = null != s.price ? (0, l.T4)(s.price, s.currency) : '',
                      a = i()(s.createdAt).format('M/D/YY'),
                      r = s.status === u.O0b.CANCELED,
                      o = s.status === u.O0b.PAST_DUE,
                      c = null != s.trialId;
                  return {
                      memberSince: a,
                      nextRenewalDate: t,
                      nextRenewalLabel: r ? E.Z.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_INFO_MEMBERSHIP_ENDS : E.Z.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_INFO_NEXT_RENEWAL,
                      subscriptionPrice: n,
                      isCancelled: r,
                      isPastDue: o,
                      isTrial: c
                  };
              })({ subscription: e });
    return {
        guild: T,
        expanded: S,
        handleToggleExpanded: () => I((e) => !e),
        listing: t,
        groupListing: a,
        subscriptionInfo: C
    };
}
