n.d(t, {
  Z: function() {
    return h
  }
}), n(47120);
var s = n(735250),
  a = n(470079),
  i = n(913527),
  l = n.n(i),
  r = n(355467),
  o = n(100527),
  c = n(906732),
  d = n(584825),
  u = n(931547),
  E = n(689938);
let _ = e => {
  let [t, n] = a.useState(!1), [s, i] = a.useState(null);
  return {
    resetRenewalMutation: async t => {
      n(!0), i(null);
      try {
        await (0, r.qu)(t, e)
      } catch (e) {
        i(e)
      } finally {
        n(!1)
      }
    },
    submitting: t,
    error: s
  }
};

function h(e) {
  let {
    groupListingId: t,
    subscription: n,
    className: i
  } = e, {
    analyticsLocations: r
  } = (0, c.ZP)(o.Z.PENDING_PLAN_CHANGE_NOTICE), {
    resetRenewalMutation: h,
    submitting: m,
    error: T
  } = _(r), C = (0, d._k)(t, {
    includeSoftDeleted: !0
  }), {
    currentListing: g,
    nextListing: p
  } = a.useMemo(() => {
    if ((null == n ? void 0 : n.renewalMutations) == null) return {
      currentListing: void 0,
      nextListing: void 0
    };
    let e = n.items[0].planId,
      t = n.renewalMutations.items[0].planId,
      s = C.find(t => t.subscription_plans[0].id === e);
    return {
      currentListing: s,
      nextListing: C.find(e => e.subscription_plans[0].id === t)
    }
  }, [n, C]);
  if (null == n || null == g || null == p) return null;
  let N = l()(n.currentPeriodEnd).format("MMM DD, YYYY");
  return (0, s.jsx)(u.Z, {
    message: E.Z.Messages.GUILD_ROLE_CANCEL_SUBSCRIPTION_DELETE_MUTATION_DESCRIPTION.format({
      currentListing: g.name,
      nextListing: p.name,
      changeDate: N
    }),
    error: null == T ? void 0 : T.message,
    onClick: () => h(n),
    submitting: m,
    ctaMessage: E.Z.Messages.GUILD_ROLE_CANCEL_SUBSCRIPTION_DELETE_MUTATION_CTA,
    className: i
  })
}