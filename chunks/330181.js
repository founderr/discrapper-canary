"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  i = n("913527"),
  l = n.n(i),
  r = n("355467"),
  o = n("100527"),
  u = n("906732"),
  d = n("584825"),
  c = n("931547"),
  f = n("689938");
let E = e => {
  let [t, n] = s.useState(!1), [a, i] = s.useState(null);
  return {
    resetRenewalMutation: async t => {
      n(!0), i(null);
      try {
        await (0, r.deleteRenewalMutation)(t, e)
      } catch (e) {
        i(e)
      } finally {
        n(!1)
      }
    },
    submitting: t,
    error: a
  }
};

function h(e) {
  let {
    groupListingId: t,
    subscription: n,
    className: i
  } = e, {
    analyticsLocations: r
  } = (0, u.default)(o.default.PENDING_PLAN_CHANGE_NOTICE), {
    resetRenewalMutation: h,
    submitting: _,
    error: C
  } = E(r), m = (0, d.useSubscriptionListingsForGroup)(t, {
    includeSoftDeleted: !0
  }), {
    currentListing: S,
    nextListing: p
  } = s.useMemo(() => {
    if ((null == n ? void 0 : n.renewalMutations) == null) return {
      currentListing: void 0,
      nextListing: void 0
    };
    let e = n.items[0].planId,
      t = n.renewalMutations.items[0].planId,
      a = m.find(t => t.subscription_plans[0].id === e);
    return {
      currentListing: a,
      nextListing: m.find(e => e.subscription_plans[0].id === t)
    }
  }, [n, m]);
  if (null == n || null == S || null == p) return null;
  let I = l()(n.currentPeriodEnd).format("MMM DD, YYYY");
  return (0, a.jsx)(c.default, {
    message: f.default.Messages.GUILD_ROLE_CANCEL_SUBSCRIPTION_DELETE_MUTATION_DESCRIPTION.format({
      currentListing: S.name,
      nextListing: p.name,
      changeDate: I
    }),
    error: null == C ? void 0 : C.message,
    onClick: () => h(n),
    submitting: _,
    ctaMessage: f.default.Messages.GUILD_ROLE_CANCEL_SUBSCRIPTION_DELETE_MUTATION_CTA,
    className: i
  })
}