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
  m = s("15640"),
  I = s("89057"),
  S = s("246946"),
  p = s("594174"),
  A = s("78839"),
  g = s("626135"),
  N = s("111361"),
  M = s("357355"),
  C = s("937579"),
  P = s("91802"),
  O = s("104494"),
  x = s("639119"),
  b = s("2359"),
  h = s("132547"),
  D = s("474936"),
  v = s("981631"),
  L = s("310774");
t.default = function(e) {
  let {
    entrypoint: t = D.PremiumMarketingEntrypoints.UserSettings
  } = e, s = (0, f.useBlockedPaymentsConfig)(), {
    sourceAnalyticsLocations: i,
    analyticsLocations: U
  } = (0, T.default)(R.default.PREMIUM_MARKETING), B = (0, l.useStateFromStores)([A.default], () => A.default.hasFetchedSubscriptions()), k = (0, l.useStateFromStores)([p.default], () => p.default.getCurrentUser()), j = (0, x.usePremiumTrialOffer)(), G = (0, O.usePremiumDiscountOffer)(), y = (0, m.useSubscriptionPlansLoaded)(), [H, F] = r.useState(!0), W = r.useRef(0), w = (0, N.isPremiumExactly)(k, D.PremiumTypes.TIER_2), K = (0, P.useLocalizedPromoQuery)(), V = null == K ? void 0 : K.countryCode, Y = (0, l.useStateFromStores)([M.default], () => M.default.hasFetched);
  return (r.useEffect(() => {
    !Y && c.getNitroAffinity()
  }, [Y]), r.useEffect(() => {
    u.default.wait(async () => {
      let e = Date.now();
      await Promise.all([c.fetchSubscriptions(), (0, d.fetchGuildBoostSlots)(), c.fetchPaymentSources(), (0, _.fetchPremiumSubscriptionPlans)(V, null, v.RevenueSurfaces.DISCOVERY)]), W.current = Date.now() - e, F(!1)
    })
  }, [V]), r.useEffect(() => {
    s && (null != j || null != G) && (0, C.acknowledgeUserOffer)(j, G)
  }, [s, j, G]), r.useEffect(() => {
    !H && g.default.track(v.AnalyticEvents.PREMIUM_MARKETING_PAGE_VIEWED, {
      location_stack: i,
      load_duration_ms: W.current
    })
  }, [i, H]), (0, l.useStateFromStores)([S.default], () => S.default.enabled)) ? (0, a.jsx)(E.default, {}) : s ? (0, a.jsx)(I.BlockedPaymentsContentSettings, {}) : t === D.PremiumMarketingEntrypoints.ApplicationStoreHome && w ? (0, a.jsx)(T.AnalyticsLocationProvider, {
    value: U,
    children: (0, a.jsx)(h.default, {})
  }) : B && y && !H ? (0, a.jsx)(T.AnalyticsLocationProvider, {
    value: U,
    children: (0, a.jsx)(b.default, {
      entrypoint: t
    })
  }) : (0, a.jsx)("div", {
    className: n()(L.container, L.loading),
    children: (0, a.jsx)(o.Spinner, {})
  })
}