"use strict";
s.r(t), s.d(t, {
  default: function() {
    return I
  }
});
var a = s("735250"),
  n = s("470079"),
  l = s("803997"),
  i = s.n(l),
  r = s("442837"),
  o = s("481060"),
  d = s("570140"),
  u = s("355467"),
  c = s("179360"),
  S = s("821849"),
  E = s("15640"),
  T = s("314684"),
  f = s("853872"),
  m = s("78839"),
  _ = s("783739"),
  g = s("981631"),
  h = s("998849");

function I() {
  n.useEffect(() => {
    d.default.wait(() => {
      u.fetchSubscriptions(), u.fetchPaymentSources(), (0, c.fetchGuildBoostSlots)(), (0, S.fetchPremiumSubscriptionPlans)(null, null, g.RevenueSurfaces.DISCOVERY)
    })
  }, []);
  let {
    hasFetchedSubscriptions: e,
    premiumSubscription: t
  } = (0, r.useStateFromStoresObject)([m.default], () => ({
    hasFetchedSubscriptions: m.default.hasFetchedSubscriptions(),
    premiumSubscription: m.default.getPremiumTypeSubscription()
  })), s = (0, E.useSubscriptionPlansLoaded)(), l = (0, r.useStateFromStores)([f.default], () => f.default.hasFetchedPaymentSources);
  return ((0, T.useFetchEntitlementsForTenureReward)(), e && s && l) ? (0, a.jsxs)("div", {
    className: h.container,
    children: [(0, a.jsx)("div", {
      className: h.background
    }), (0, a.jsx)("div", {
      className: h.content,
      children: (0, a.jsx)(_.default, {
        premiumSubscription: t
      })
    })]
  }) : (0, a.jsx)("div", {
    className: i()(h.container, h.loading),
    children: (0, a.jsx)(o.Spinner, {})
  })
}