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
  m = s("78839"),
  g = s("783739"),
  I = s("981631"),
  N = s("220439");

function h() {
  n.useEffect(() => {
    d.default.wait(() => {
      u.fetchSubscriptions(), u.fetchPaymentSources(), (0, c.fetchGuildBoostSlots)(), (0, S.fetchPremiumSubscriptionPlans)(null, null, I.RevenueSurfaces.DISCOVERY), (0, c.fetchAppliedGuildBoostsForUser)(!0)
    })
  }, []);
  let {
    hasFetchedSubscriptions: e,
    premiumSubscription: t
  } = (0, r.useStateFromStoresObject)([m.default], () => ({
    hasFetchedSubscriptions: m.default.hasFetchedSubscriptions(),
    premiumSubscription: m.default.getPremiumTypeSubscription()
  })), s = (0, E.useSubscriptionPlansLoaded)(), l = (0, r.useStateFromStores)([f.default], () => f.default.hasFetchedPaymentSources), h = (0, r.useStateFromStores)([_.default], () => _.default.isFetchingCurrentUserAppliedBoosts);
  return ((0, T.useFetchEntitlementsForTenureReward)(), e && s && l && !h) ? (0, a.jsxs)("div", {
    className: N.container,
    children: [(0, a.jsx)("div", {
      className: N.background
    }), (0, a.jsx)("div", {
      className: N.content,
      children: (0, a.jsx)(g.default, {
        premiumSubscription: t
      })
    })]
  }) : (0, a.jsx)("div", {
    className: i()(N.container, N.loading),
    children: (0, a.jsx)(o.Spinner, {})
  })
}