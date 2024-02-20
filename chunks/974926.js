"use strict";
s.r(t), s.d(t, {
  default: function() {
    return h
  }
});
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("446674"),
  o = s("77078"),
  d = s("913144"),
  u = s("850068"),
  c = s("583367"),
  S = s("775433"),
  E = s("308592"),
  T = s("357957"),
  f = s("521012"),
  m = s("889285"),
  _ = s("49111"),
  g = s("263689");

function h() {
  n.useEffect(() => {
    d.default.wait(() => {
      u.fetchSubscriptions(), u.fetchPaymentSources(), (0, c.fetchGuildBoostSlots)(), (0, S.fetchPremiumSubscriptionPlans)(null, null, _.RevenueSurfaces.DISCOVERY)
    })
  }, []);
  let {
    hasFetchedSubscriptions: e,
    premiumSubscription: t
  } = (0, r.useStateFromStoresObject)([f.default], () => ({
    hasFetchedSubscriptions: f.default.hasFetchedSubscriptions(),
    premiumSubscription: f.default.getPremiumTypeSubscription()
  })), s = (0, E.useSubscriptionPlansLoaded)(), l = (0, r.useStateFromStores)([T.default], () => T.default.hasFetchedPaymentSources);
  return e && s && l ? (0, a.jsxs)("div", {
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
    className: i(g.container, g.loading),
    children: (0, a.jsx)(o.Spinner, {})
  })
}