s.d(t, {
  Z: function() {
    return T
  }
}), s(47120);
var n = s(735250),
  a = s(470079),
  i = s(913527),
  r = s.n(i),
  l = s(355467),
  o = s(100527),
  c = s(906732),
  E = s(584825),
  _ = s(931547),
  u = s(689938);
let d = e => {
  let [t, s] = a.useState(!1), [n, i] = a.useState(null);
  return {
    resetRenewalMutation: async t => {
      s(!0), i(null);
      try {
        await (0, l.qu)(t, e)
      } catch (e) {
        i(e)
      } finally {
        s(!1)
      }
    },
    submitting: t,
    error: n
  }
};

function T(e) {
  let {
    groupListingId: t,
    subscription: s,
    className: i
  } = e, {
    analyticsLocations: l
  } = (0, c.ZP)(o.Z.PENDING_PLAN_CHANGE_NOTICE), {
    resetRenewalMutation: T,
    submitting: I,
    error: R
  } = d(l), A = (0, E._k)(t, {
    includeSoftDeleted: !0
  }), {
    currentListing: N,
    nextListing: C
  } = a.useMemo(() => {
    if ((null == s ? void 0 : s.renewalMutations) == null) return {
      currentListing: void 0,
      nextListing: void 0
    };
    let e = s.items[0].planId,
      t = s.renewalMutations.items[0].planId,
      n = A.find(t => t.subscription_plans[0].id === e);
    return {
      currentListing: n,
      nextListing: A.find(e => e.subscription_plans[0].id === t)
    }
  }, [s, A]);
  if (null == s || null == N || null == C) return null;
  let g = r()(s.currentPeriodEnd).format("MMM DD, YYYY");
  return (0, n.jsx)(_.Z, {
    message: u.Z.Messages.GUILD_ROLE_CANCEL_SUBSCRIPTION_DELETE_MUTATION_DESCRIPTION.format({
      currentListing: N.name,
      nextListing: C.name,
      changeDate: g
    }),
    error: null == R ? void 0 : R.message,
    onClick: () => T(s),
    submitting: I,
    ctaMessage: u.Z.Messages.GUILD_ROLE_CANCEL_SUBSCRIPTION_DELETE_MUTATION_CTA,
    className: i
  })
}