t.d(s, {
  Z: function() {
    return u
  }
}), t(47120);
var n = t(470079),
  i = t(913527),
  a = t.n(i),
  l = t(442837),
  r = t(812206),
  o = t(430824),
  c = t(580130),
  E = t(937615),
  d = t(488915),
  _ = t(171246),
  T = t(981631),
  S = t(689938);

function u(e) {
  let s = (0, _.bZ)(e),
    t = (0, l.e7)([d.Z], () => d.Z.getSubscriptionListingForPlan(s), [s]),
    i = (0, l.e7)([d.Z], () => null != t ? d.Z.getSubscriptionGroupListingForSubscriptionListing(t.id) : null, [t]),
    u = (0, l.e7)([c.Z], () => {
      let s = c.Z.getForSubscription(e.id);
      if (null != s) {
        let [e] = Array.from(s);
        return e
      }
      return null
    }, [e]),
    I = (0, l.e7)([r.Z], () => {
      if (null == u) return;
      let e = r.Z.getApplication(u.applicationId);
      if (null != e) return e
    }, [u]),
    N = (0, l.e7)([o.Z], () => {
      if (null != u) return o.Z.getGuild(u.guildId)
    }, [u]),
    [A, C] = n.useState(!1),
    O = null == t ? void 0 : function(e) {
      let {
        listing: s,
        subscription: t
      } = e, n = t.currentPeriodEnd, i = s.subscription_plans[0], l = (0, E.T4)(i.price, i.currency), r = t.createdAt, o = t.status === T.O0b.CANCELED, c = s.soft_deleted, d = t.status === T.O0b.PAST_DUE;
      return {
        subscribedSinceDate: r,
        currentPeriodEndDate: n,
        currentPeriodEndLabel: a()().isAfter(t.currentPeriodEnd) ? S.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_INFO_SUBSCRIPTION_ENDED : S.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_INFO_SUBSCRIPTION_ENDS,
        subscriptionPlanPrice: l,
        isCancelled: o,
        isDeleted: c,
        isPastDue: d
      }
    }({
      listing: t,
      subscription: e
    });
  return {
    application: I,
    guild: N,
    expanded: A,
    handleToggleExpanded: () => C(e => !e),
    listing: t,
    groupListing: i,
    subscriptionInfo: O
  }
}