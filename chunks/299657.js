"use strict";
s.r(t), s("47120");
var a = s("735250"),
  i = s("470079"),
  r = s("120356"),
  l = s.n(r),
  n = s("442837"),
  o = s("481060"),
  u = s("570140"),
  d = s("355467"),
  c = s("179360"),
  _ = s("821849"),
  E = s("497321"),
  C = s("100527"),
  f = s("906732"),
  T = s("211242"),
  I = s("15640"),
  R = s("89057"),
  S = s("246946"),
  p = s("594174"),
  m = s("78839"),
  A = s("626135"),
  N = s("111361"),
  g = s("357355"),
  O = s("937579"),
  P = s("316941"),
  M = s("91802"),
  h = s("104494"),
  x = s("639119"),
  L = s("633361"),
  v = s("2359"),
  j = s("132547"),
  D = s("474936"),
  b = s("981631"),
  U = s("684993");
t.default = function(e) {
  let {
    entrypoint: t = D.PremiumMarketingEntrypoints.UserSettings
  } = e, s = (0, T.useBlockedPaymentsConfig)(), {
    sourceAnalyticsLocations: r,
    analyticsLocations: y
  } = (0, f.default)(C.default.PREMIUM_MARKETING), B = (0, n.useStateFromStores)([m.default], () => m.default.hasFetchedSubscriptions()), G = (0, n.useStateFromStores)([p.default], () => p.default.getCurrentUser()), k = (0, x.usePremiumTrialOffer)(), H = (0, h.usePremiumDiscountOffer)(), F = (0, I.useSubscriptionPlansLoaded)(), [w, W] = i.useState(!0), K = i.useRef(0), V = (0, N.isPremiumExactly)(G, D.PremiumTypes.TIER_2), Y = (0, M.useLocalizedPromoQuery)(), z = null == Y ? void 0 : Y.countryCode, Z = (0, n.useStateFromStores)([g.default], () => g.default.hasFetched);
  return (i.useEffect(() => {
    !Z && d.getNitroAffinity()
  }, [Z]), i.useEffect(() => {
    u.default.wait(async () => {
      let e = Date.now();
      await Promise.all([d.fetchSubscriptions(), (0, c.fetchGuildBoostSlots)(), d.fetchPaymentSources(), (0, _.fetchPremiumSubscriptionPlans)(z, null, b.RevenueSurfaces.DISCOVERY)]), K.current = Date.now() - e, W(!1)
    })
  }, [z]), i.useEffect(() => {
    s && (null != k || null != H) && ((0, L.shouldHitUserOfferEndPoints)("PremiumMarketingPage") ? (0, O.acknowledgeUserOffer)(k, H) : null != k && null == k.expires_at && P.default.acknowledgeUserTrialOffer(k))
  }, [s, k, H]), i.useEffect(() => {
    !w && A.default.track(b.AnalyticEvents.PREMIUM_MARKETING_PAGE_VIEWED, {
      location_stack: r,
      load_duration_ms: K.current
    })
  }, [r, w]), (0, n.useStateFromStores)([S.default], () => S.default.enabled)) ? (0, a.jsx)(E.default, {}) : s ? (0, a.jsx)(R.BlockedPaymentsContentSettings, {}) : t === D.PremiumMarketingEntrypoints.ApplicationStoreHome && V ? (0, a.jsx)(f.AnalyticsLocationProvider, {
    value: y,
    children: (0, a.jsx)(j.default, {})
  }) : B && F && !w ? (0, a.jsx)(f.AnalyticsLocationProvider, {
    value: y,
    children: (0, a.jsx)(v.default, {
      entrypoint: t
    })
  }) : (0, a.jsx)("div", {
    className: l()(U.container, U.loading),
    children: (0, a.jsx)(o.Spinner, {})
  })
}