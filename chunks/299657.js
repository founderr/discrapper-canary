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
  m = s("246946"),
  A = s("594174"),
  N = s("78839"),
  p = s("626135"),
  g = s("111361"),
  C = s("357355"),
  P = s("937579"),
  O = s("316941"),
  M = s("91802"),
  h = s("104494"),
  L = s("639119"),
  x = s("633361"),
  v = s("2359"),
  D = s("132547"),
  b = s("474936"),
  U = s("981631"),
  j = s("684993");
t.default = function(e) {
  let {
    entrypoint: t = b.PremiumMarketingEntrypoints.UserSettings
  } = e, s = (0, R.useBlockedPaymentsConfig)(), {
    sourceAnalyticsLocations: i,
    analyticsLocations: B
  } = (0, I.default)(T.default.PREMIUM_MARKETING), y = (0, l.useStateFromStores)([N.default], () => N.default.hasFetchedSubscriptions()), G = (0, l.useStateFromStores)([A.default], () => A.default.getCurrentUser()), k = (0, L.usePremiumTrialOffer)(), H = (0, h.usePremiumDiscountOffer)(), F = (0, f.useSubscriptionPlansLoaded)(), [w, K] = r.useState(!0), W = r.useRef(0), V = (0, g.isPremiumExactly)(G, b.PremiumTypes.TIER_2), Y = (0, M.useLocalizedPromoQuery)(), z = null == Y ? void 0 : Y.countryCode, X = (0, l.useStateFromStores)([C.default], () => C.default.hasFetched);
  return (r.useEffect(() => {
    !X && d.getNitroAffinity()
  }, [X]), r.useEffect(() => {
    u.default.wait(async () => {
      let e = Date.now();
      await Promise.all([d.fetchSubscriptions(), (0, c.fetchGuildBoostSlots)(), d.fetchPaymentSources(), (0, _.fetchPremiumSubscriptionPlans)(z, null, U.RevenueSurfaces.DISCOVERY)]), W.current = Date.now() - e, K(!1)
    })
  }, [z]), r.useEffect(() => {
    s && (null != k || null != H) && ((0, x.shouldHitUserOfferEndPoints)("PremiumMarketingPage") ? (0, P.acknowledgeUserOffer)(k, H) : null != k && null == k.expires_at && O.default.acknowledgeUserTrialOffer(k))
  }, [s, k, H]), r.useEffect(() => {
    !w && p.default.track(U.AnalyticEvents.PREMIUM_MARKETING_PAGE_VIEWED, {
      location_stack: i,
      load_duration_ms: W.current
    })
  }, [i, w]), (0, l.useStateFromStores)([m.default], () => m.default.enabled)) ? (0, a.jsx)(E.default, {}) : s ? (0, a.jsx)(S.BlockedPaymentsContentSettings, {}) : t === b.PremiumMarketingEntrypoints.ApplicationStoreHome && V ? (0, a.jsx)(I.AnalyticsLocationProvider, {
    value: B,
    children: (0, a.jsx)(D.default, {})
  }) : y && F && !w ? (0, a.jsx)(I.AnalyticsLocationProvider, {
    value: B,
    children: (0, a.jsx)(v.default, {
      entrypoint: t
    })
  }) : (0, a.jsx)("div", {
    className: n()(j.container, j.loading),
    children: (0, a.jsx)(o.Spinner, {})
  })
}