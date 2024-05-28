"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("913527"),
  i = s.n(l),
  r = s("355467"),
  u = s("100527"),
  o = s("906732"),
  d = s("584825"),
  c = s("931547"),
  E = s("689938");
let _ = e => {
  let [t, s] = n.useState(!1), [a, l] = n.useState(null);
  return {
    resetRenewalMutation: async t => {
      s(!0), l(null);
      try {
        await (0, r.deleteRenewalMutation)(t, e)
      } catch (e) {
        l(e)
      } finally {
        s(!1)
      }
    },
    submitting: t,
    error: a
  }
};

function f(e) {
  let {
    groupListingId: t,
    subscription: s,
    className: l
  } = e, {
    analyticsLocations: r
  } = (0, o.default)(u.default.PENDING_PLAN_CHANGE_NOTICE), {
    resetRenewalMutation: f,
    submitting: h,
    error: m
  } = _(r), T = (0, d.useSubscriptionListingsForGroup)(t, {
    includeSoftDeleted: !0
  }), {
    currentListing: C,
    nextListing: g
  } = n.useMemo(() => {
    if ((null == s ? void 0 : s.renewalMutations) == null) return {
      currentListing: void 0,
      nextListing: void 0
    };
    let e = s.items[0].planId,
      t = s.renewalMutations.items[0].planId,
      a = T.find(t => t.subscription_plans[0].id === e);
    return {
      currentListing: a,
      nextListing: T.find(e => e.subscription_plans[0].id === t)
    }
  }, [s, T]);
  if (null == s || null == C || null == g) return null;
  let A = i()(s.currentPeriodEnd).format("MMM DD, YYYY");
  return (0, a.jsx)(c.default, {
    message: E.default.Messages.GUILD_ROLE_CANCEL_SUBSCRIPTION_DELETE_MUTATION_DESCRIPTION.format({
      currentListing: C.name,
      nextListing: g.name,
      changeDate: A
    }),
    error: null == m ? void 0 : m.message,
    onClick: () => f(s),
    submitting: h,
    ctaMessage: E.default.Messages.GUILD_ROLE_CANCEL_SUBSCRIPTION_DELETE_MUTATION_CTA,
    className: l
  })
}