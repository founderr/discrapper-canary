"use strict";
s.r(t), s("47120");
var a = s("735250"),
  r = s("470079"),
  i = s("120356"),
  n = s.n(i),
  l = s("442837"),
  o = s("481060"),
  u = s("570140"),
  d = s("355467"),
  c = s("179360"),
  _ = s("821849"),
  E = s("497321"),
  T = s("100527"),
  I = s("906732"),
  R = s("211242"),
  f = s("15640"),
  S = s("89057"),
  A = s("246946"),
  m = s("594174"),
  N = s("78839"),
  p = s("626135"),
  g = s("111361"),
  C = s("357355"),
  P = s("937579"),
  O = s("91802"),
  M = s("104494"),
  h = s("639119"),
  L = s("2359"),
  x = s("132547"),
  v = s("474936"),
  D = s("981631"),
  b = s("310774");
t.default = function(e) {
  let {
    entrypoint: t = v.PremiumMarketingEntrypoints.UserSettings
  } = e, s = (0, R.useBlockedPaymentsConfig)(), {
    sourceAnalyticsLocations: i,
    analyticsLocations: U
  } = (0, I.default)(T.default.PREMIUM_MARKETING), j = (0, l.useStateFromStores)([N.default], () => N.default.hasFetchedSubscriptions()), G = (0, l.useStateFromStores)([m.default], () => m.default.getCurrentUser()), B = (0, h.usePremiumTrialOffer)(), y = (0, M.usePremiumDiscountOffer)(), k = (0, f.useSubscriptionPlansLoaded)(), [H, F] = r.useState(!0), w = r.useRef(0), W = (0, g.isPremiumExactly)(G, v.PremiumTypes.TIER_2), K = (0, O.useLocalizedPromoQuery)(), V = null == K ? void 0 : K.countryCode, Y = (0, l.useStateFromStores)([C.default], () => C.default.hasFetched);
  return (r.useEffect(() => {
    !Y && d.getNitroAffinity()
  }, [Y]), r.useEffect(() => {
    u.default.wait(async () => {
      let e = Date.now();
      await Promise.all([d.fetchSubscriptions(), (0, c.fetchGuildBoostSlots)(), d.fetchPaymentSources(), (0, _.fetchPremiumSubscriptionPlans)(V, null, D.RevenueSurfaces.DISCOVERY)]), w.current = Date.now() - e, F(!1)
    })
  }, [V]), r.useEffect(() => {
    s && (null != B || null != y) && (0, P.acknowledgeUserOffer)(B, y)
  }, [s, B, y]), r.useEffect(() => {
    !H && p.default.track(D.AnalyticEvents.PREMIUM_MARKETING_PAGE_VIEWED, {
      location_stack: i,
      load_duration_ms: w.current
    })
  }, [i, H]), (0, l.useStateFromStores)([A.default], () => A.default.enabled)) ? (0, a.jsx)(E.default, {}) : s ? (0, a.jsx)(S.BlockedPaymentsContentSettings, {}) : t === v.PremiumMarketingEntrypoints.ApplicationStoreHome && W ? (0, a.jsx)(I.AnalyticsLocationProvider, {
    value: U,
    children: (0, a.jsx)(x.default, {})
  }) : j && k && !H ? (0, a.jsx)(I.AnalyticsLocationProvider, {
    value: U,
    children: (0, a.jsx)(L.default, {
      entrypoint: t
    })
  }) : (0, a.jsx)("div", {
    className: n()(b.container, b.loading),
    children: (0, a.jsx)(o.Spinner, {})
  })
}