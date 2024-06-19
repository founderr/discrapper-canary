t.d(s, {
  Z: function() {
    return S
  }
}), t(47120);
var n = t(470079),
  i = t(913527),
  a = t.n(i),
  l = t(442837),
  r = t(430824),
  o = t(937615),
  c = t(584825),
  E = t(289393),
  d = t(697227),
  _ = t(981631),
  T = t(689938);

function S(e) {
  let s = (0, d.W)(e),
    t = (0, l.e7)([E.Z], () => E.Z.getSubscriptionListingForPlan(s)),
    i = (0, l.e7)([E.Z], () => null != t ? E.Z.getSubscriptionGroupListingForSubscriptionListing(t.id) : null),
    S = (0, l.e7)([r.Z], () => r.Z.getGuild(null == i ? void 0 : i.guild_id)),
    [u, I] = n.useState(!1),
    {
      fetchSubscriptionsSettings: N
    } = (0, c.JH)();
  n.useEffect(() => {
    u && null != S && null == E.Z.getSubscriptionSettings(S.id) && N(S.id)
  }, [u, S, N]);
  let A = null == t ? void 0 : function(e) {
    let {
      subscription: s
    } = e, t = a()(s.currentPeriodEnd).format("M/D/YY"), n = null != s.price ? (0, o.T4)(s.price, s.currency) : "", i = a()(s.createdAt).format("M/D/YY"), l = s.status === _.O0b.CANCELED, r = s.status === _.O0b.PAST_DUE, c = null != s.trialId;
    return {
      memberSince: i,
      nextRenewalDate: t,
      nextRenewalLabel: l ? T.Z.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_INFO_MEMBERSHIP_ENDS : T.Z.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_INFO_NEXT_RENEWAL,
      subscriptionPrice: n,
      isCancelled: l,
      isPastDue: r,
      isTrial: c
    }
  }({
    subscription: e
  });
  return {
    guild: S,
    expanded: u,
    handleToggleExpanded: () => I(e => !e),
    listing: t,
    groupListing: i,
    subscriptionInfo: A
  }
}