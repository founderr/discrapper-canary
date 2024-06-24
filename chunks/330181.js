n.d(t, {
  Z: function() {
    return h
  }
}), n(47120);
var s = n(735250),
  i = n(470079),
  a = n(913527),
  l = n.n(a),
  r = n(355467),
  c = n(100527),
  o = n(906732),
  d = n(584825),
  u = n(931547),
  E = n(689938);
let _ = e => {
  let [t, n] = i.useState(!1), [s, a] = i.useState(null);
  return {
    resetRenewalMutation: async t => {
      n(!0), a(null);
      try {
        await (0, r.qu)(t, e)
      } catch (e) {
        a(e)
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
    className: a
  } = e, {
    analyticsLocations: r
  } = (0, o.ZP)(c.Z.PENDING_PLAN_CHANGE_NOTICE), {
    resetRenewalMutation: h,
    submitting: T,
    error: I
  } = _(r), C = (0, d._k)(t, {
    includeSoftDeleted: !0
  }), {
    currentListing: N,
    nextListing: g
  } = i.useMemo(() => {
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
  if (null == n || null == N || null == g) return null;
  let A = l()(n.currentPeriodEnd).format("MMM DD, YYYY");
  return (0, s.jsx)(u.Z, {
    message: E.Z.Messages.GUILD_ROLE_CANCEL_SUBSCRIPTION_DELETE_MUTATION_DESCRIPTION.format({
      currentListing: N.name,
      nextListing: g.name,
      changeDate: A
    }),
    error: null == I ? void 0 : I.message,
    onClick: () => h(n),
    submitting: T,
    ctaMessage: E.Z.Messages.GUILD_ROLE_CANCEL_SUBSCRIPTION_DELETE_MUTATION_CTA,
    className: a
  })
}