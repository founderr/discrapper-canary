"use strict";
a.r(t), a.d(t, {
  default: function() {
    return h
  }
}), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("913527"),
  i = a.n(l),
  r = a("355467"),
  o = a("100527"),
  u = a("906732"),
  d = a("584825"),
  c = a("931547"),
  f = a("689938");
let E = e => {
  let [t, a] = s.useState(!1), [n, l] = s.useState(null);
  return {
    resetRenewalMutation: async t => {
      a(!0), l(null);
      try {
        await (0, r.deleteRenewalMutation)(t, e)
      } catch (e) {
        l(e)
      } finally {
        a(!1)
      }
    },
    submitting: t,
    error: n
  }
};

function h(e) {
  let {
    groupListingId: t,
    subscription: a,
    className: l
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
    if ((null == a ? void 0 : a.renewalMutations) == null) return {
      currentListing: void 0,
      nextListing: void 0
    };
    let e = a.items[0].planId,
      t = a.renewalMutations.items[0].planId,
      n = m.find(t => t.subscription_plans[0].id === e);
    return {
      currentListing: n,
      nextListing: m.find(e => e.subscription_plans[0].id === t)
    }
  }, [a, m]);
  if (null == a || null == S || null == p) return null;
  let I = i()(a.currentPeriodEnd).format("MMM DD, YYYY");
  return (0, n.jsx)(c.default, {
    message: f.default.Messages.GUILD_ROLE_CANCEL_SUBSCRIPTION_DELETE_MUTATION_DESCRIPTION.format({
      currentListing: S.name,
      nextListing: p.name,
      changeDate: I
    }),
    error: null == C ? void 0 : C.message,
    onClick: () => h(a),
    submitting: _,
    ctaMessage: f.default.Messages.GUILD_ROLE_CANCEL_SUBSCRIPTION_DELETE_MUTATION_CTA,
    className: l
  })
}