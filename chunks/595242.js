"use strict";
s.r(t), s.d(t, {
  default: function() {
    return C
  }
});
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("442837"),
  o = s("481060"),
  d = s("570140"),
  u = s("355467"),
  c = s("179360"),
  S = s("821849"),
  E = s("15640"),
  T = s("314684"),
  _ = s("899667"),
  I = s("853872"),
  N = s("78839"),
  f = s("783739"),
  g = s("981631"),
  m = s("220439");

function C() {
  n.useEffect(() => {
    d.default.wait(() => {
      u.fetchSubscriptions(), u.fetchPaymentSources(), (0, c.fetchGuildBoostSlots)(), (0, S.fetchPremiumSubscriptionPlans)(null, null, g.RevenueSurfaces.DISCOVERY), (0, c.fetchAppliedGuildBoostsForUser)(!0)
    })
  }, []);
  let {
    hasFetchedSubscriptions: e,
    premiumSubscription: t
  } = (0, r.useStateFromStoresObject)([N.default], () => ({
    hasFetchedSubscriptions: N.default.hasFetchedSubscriptions(),
    premiumSubscription: N.default.getPremiumTypeSubscription()
  })), s = (0, E.useSubscriptionPlansLoaded)(), l = (0, r.useStateFromStores)([I.default], () => I.default.hasFetchedPaymentSources), C = (0, r.useStateFromStores)([_.default], () => _.default.isFetchingCurrentUserAppliedBoosts);
  return ((0, T.useFetchEntitlementsForTenureReward)(), e && s && l && !C) ? (0, a.jsxs)("div", {
    className: m.container,
    children: [(0, a.jsx)("div", {
      className: m.background
    }), (0, a.jsx)("div", {
      className: m.content,
      children: (0, a.jsx)(f.default, {
        premiumSubscription: t
      })
    })]
  }) : (0, a.jsx)("div", {
    className: i()(m.container, m.loading),
    children: (0, a.jsx)(o.Spinner, {})
  })
}