"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
}), s("47120");
var n = s("735250"),
  a = s("470079"),
  l = s("913527"),
  i = s.n(l),
  r = s("355467"),
  o = s("100527"),
  u = s("906732"),
  d = s("584825"),
  c = s("931547"),
  E = s("689938");
let f = e => {
  let [t, s] = a.useState(!1), [n, l] = a.useState(null);
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
    error: n
  }
};

function _(e) {
  let {
    groupListingId: t,
    subscription: s,
    className: l
  } = e, {
    analyticsLocations: r
  } = (0, u.default)(o.default.PENDING_PLAN_CHANGE_NOTICE), {
    resetRenewalMutation: _,
    submitting: h,
    error: m
  } = f(r), C = (0, d.useSubscriptionListingsForGroup)(t, {
    includeSoftDeleted: !0
  }), {
    currentListing: T,
    nextListing: g
  } = a.useMemo(() => {
    if ((null == s ? void 0 : s.renewalMutations) == null) return {
      currentListing: void 0,
      nextListing: void 0
    };
    let e = s.items[0].planId,
      t = s.renewalMutations.items[0].planId,
      n = C.find(t => t.subscription_plans[0].id === e);
    return {
      currentListing: n,
      nextListing: C.find(e => e.subscription_plans[0].id === t)
    }
  }, [s, C]);
  if (null == s || null == T || null == g) return null;
  let p = i()(s.currentPeriodEnd).format("MMM DD, YYYY");
  return (0, n.jsx)(c.default, {
    message: E.default.Messages.GUILD_ROLE_CANCEL_SUBSCRIPTION_DELETE_MUTATION_DESCRIPTION.format({
      currentListing: T.name,
      nextListing: g.name,
      changeDate: p
    }),
    error: null == m ? void 0 : m.message,
    onClick: () => _(s),
    submitting: h,
    ctaMessage: E.default.Messages.GUILD_ROLE_CANCEL_SUBSCRIPTION_DELETE_MUTATION_CTA,
    className: l
  })
}