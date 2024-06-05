"use strict";
s.r(t), s("47120");
var a = s("735250"),
  r = s("470079"),
  i = s("120356"),
  n = s.n(i),
  l = s("442837"),
  o = s("481060"),
  u = s("570140"),
  c = s("355467"),
  d = s("179360"),
  _ = s("821849"),
  E = s("497321"),
  R = s("100527"),
  T = s("906732"),
  f = s("211242"),
  I = s("15640"),
  S = s("89057"),
  m = s("246946"),
  p = s("594174"),
  A = s("78839"),
  N = s("626135"),
  M = s("111361"),
  C = s("357355"),
  g = s("937579"),
  P = s("91802"),
  O = s("104494"),
  x = s("639119"),
  b = s("2359"),
  h = s("132547"),
  D = s("474936"),
  L = s("981631"),
  v = s("310774");
t.default = function(e) {
  let {
    entrypoint: t = D.PremiumMarketingEntrypoints.UserSettings
  } = e, s = (0, f.useBlockedPaymentsConfig)(), {
    sourceAnalyticsLocations: i,
    analyticsLocations: U
  } = (0, T.default)(R.default.PREMIUM_MARKETING), B = (0, l.useStateFromStores)([A.default], () => A.default.hasFetchedSubscriptions()), j = (0, l.useStateFromStores)([p.default], () => p.default.getCurrentUser()), G = (0, x.usePremiumTrialOffer)(), k = (0, O.usePremiumDiscountOffer)(), H = (0, I.useSubscriptionPlansLoaded)(), [W, y] = r.useState(!0), F = r.useRef(0), w = (0, M.isPremiumExactly)(j, D.PremiumTypes.TIER_2), K = (0, P.useLocalizedPromoQuery)(), V = null == K ? void 0 : K.countryCode, Y = (0, l.useStateFromStores)([C.default], () => C.default.hasFetched);
  return (r.useEffect(() => {
    !Y && c.getNitroAffinity()
  }, [Y]), r.useEffect(() => {
    u.default.wait(async () => {
      let e = Date.now();
      await Promise.all([c.fetchSubscriptions(), (0, d.fetchGuildBoostSlots)(), c.fetchPaymentSources(), (0, _.fetchPremiumSubscriptionPlans)(V, null, L.RevenueSurfaces.DISCOVERY)]), F.current = Date.now() - e, y(!1)
    })
  }, [V]), r.useEffect(() => {
    s && (null != G || null != k) && (0, g.acknowledgeUserOffer)(G, k)
  }, [s, G, k]), r.useEffect(() => {
    !W && N.default.track(L.AnalyticEvents.PREMIUM_MARKETING_PAGE_VIEWED, {
      location_stack: i,
      load_duration_ms: F.current
    })
  }, [i, W]), (0, l.useStateFromStores)([m.default], () => m.default.enabled)) ? (0, a.jsx)(E.default, {}) : s ? (0, a.jsx)(S.BlockedPaymentsContentSettings, {}) : t === D.PremiumMarketingEntrypoints.ApplicationStoreHome && w ? (0, a.jsx)(T.AnalyticsLocationProvider, {
    value: U,
    children: (0, a.jsx)(h.default, {})
  }) : B && H && !W ? (0, a.jsx)(T.AnalyticsLocationProvider, {
    value: U,
    children: (0, a.jsx)(b.default, {
      entrypoint: t
    })
  }) : (0, a.jsx)("div", {
    className: n()(v.container, v.loading),
    children: (0, a.jsx)(o.Spinner, {})
  })
}