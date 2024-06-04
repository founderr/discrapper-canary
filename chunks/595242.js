"use strict";
s.r(t), s.d(t, {
  default: function() {
    return h
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
  f = s("853872"),
  I = s("78839"),
  m = s("783739"),
  N = s("981631"),
  g = s("220439");

function h() {
  n.useEffect(() => {
    d.default.wait(() => {
      u.fetchSubscriptions(), u.fetchPaymentSources(), (0, c.fetchGuildBoostSlots)(), (0, S.fetchPremiumSubscriptionPlans)(null, null, N.RevenueSurfaces.DISCOVERY), (0, c.fetchAppliedGuildBoostsForUser)(!0)
    })
  }, []);
  let {
    hasFetchedSubscriptions: e,
    premiumSubscription: t
  } = (0, r.useStateFromStoresObject)([I.default], () => ({
    hasFetchedSubscriptions: I.default.hasFetchedSubscriptions(),
    premiumSubscription: I.default.getPremiumTypeSubscription()
  })), s = (0, E.useSubscriptionPlansLoaded)(), l = (0, r.useStateFromStores)([f.default], () => f.default.hasFetchedPaymentSources), h = (0, r.useStateFromStores)([_.default], () => _.default.isFetchingCurrentUserAppliedBoosts);
  return ((0, T.useFetchEntitlementsForTenureReward)(), e && s && l && !h) ? (0, a.jsxs)("div", {
    className: g.container,
    children: [(0, a.jsx)("div", {
      className: g.background
    }), (0, a.jsx)("div", {
      className: g.content,
      children: (0, a.jsx)(m.default, {
        premiumSubscription: t
      })
    })]
  }) : (0, a.jsx)("div", {
    className: i()(g.container, g.loading),
    children: (0, a.jsx)(o.Spinner, {})
  })
}