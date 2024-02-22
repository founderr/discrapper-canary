"use strict";
s.r(t), s.d(t, {
  default: function() {
    return k
  }
}), s("222007");
var a = s("37983"),
  i = s("884691"),
  n = s("414456"),
  r = s.n(n),
  l = s("446674"),
  o = s("77078"),
  u = s("913144"),
  d = s("850068"),
  c = s("583367"),
  _ = s("775433"),
  E = s("642950"),
  I = s("812204"),
  T = s("685665"),
  f = s("619935"),
  S = s("308592"),
  R = s("245187"),
  m = s("102985"),
  A = s("697218"),
  p = s("521012"),
  N = s("599110"),
  g = s("764364"),
  C = s("446488"),
  P = s("456015"),
  O = s("982457"),
  M = s("300962"),
  h = s("959905"),
  L = s("154889"),
  x = s("917247"),
  v = s("157829"),
  D = s("254893"),
  b = s("840326"),
  U = s("646718"),
  j = s("49111"),
  G = s("666026"),
  k = function(e) {
    let {
      entrypoint: t = U.PremiumMarketingEntrypoints.UserSettings
    } = e, s = (0, f.useBlockedPaymentsConfig)(), {
      AnalyticsLocationProvider: n,
      sourceAnalyticsLocations: k
    } = (0, T.default)(I.default.PREMIUM_MARKETING), {
      enabled: B
    } = (0, M.default)(), y = (0, l.useStateFromStores)([p.default], () => p.default.hasFetchedSubscriptions()), H = (0, l.useStateFromStores)([A.default], () => A.default.getCurrentUser()), K = (0, x.usePremiumTrialOffer)(), F = (0, L.usePremiumDiscountOffer)(), W = (0, S.useSubscriptionPlansLoaded)(), [w, V] = i.useState(!0), Y = i.useRef(0), z = (0, g.isPremiumExactly)(H, U.PremiumTypes.TIER_2), Q = (0, h.useLocalizedPromoQuery)(), X = null == Q ? void 0 : Q.countryCode, Z = (0, l.useStateFromStores)([C.default], () => C.default.hasFetched);
    i.useEffect(() => {
      !Z && d.getNitroAffinity()
    }, [Z]), i.useEffect(() => {
      u.default.wait(async () => {
        let e = Date.now();
        await Promise.all([d.fetchSubscriptions(), (0, c.fetchGuildBoostSlots)(), d.fetchPaymentSources(), (0, _.fetchPremiumSubscriptionPlans)(X, null, j.RevenueSurfaces.DISCOVERY)]), Y.current = Date.now() - e, V(!1)
      })
    }, [X]), i.useEffect(() => {
      if (s && (null != K || null != F)) {
        let e = (0, v.shouldHitUserOfferEndPoints)("PremiumMarketingPage");
        e ? (0, P.acknowledgeUserOffer)(K, F) : null != K && null == K.expires_at && O.default.acknowledgeUserTrialOffer(K)
      }
    }, [s, K, F]), i.useEffect(() => {
      !w && N.default.track(j.AnalyticEvents.PREMIUM_MARKETING_PAGE_VIEWED, {
        location_stack: k,
        load_duration_ms: Y.current
      })
    }, [k, w]);
    let J = (0, l.useStateFromStores)([m.default], () => m.default.enabled);
    if (J) return (0, a.jsx)(E.default, {});
    if (s) return (0, a.jsx)(R.BlockedPaymentsContentSettings, {});
    let q = t === U.PremiumMarketingEntrypoints.ApplicationStoreHome;
    return q && z && !B ? (0, a.jsx)(n, {
      children: (0, a.jsx)(b.default, {})
    }) : y && W && !w ? (0, a.jsx)(n, {
      children: (0, a.jsx)(D.default, {
        entrypoint: t
      })
    }) : (0, a.jsx)("div", {
      className: r(G.container, G.loading),
      children: (0, a.jsx)(o.Spinner, {})
    })
  }