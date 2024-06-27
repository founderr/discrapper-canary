n(47120);
var s = n(735250),
  a = n(470079),
  i = n(120356),
  r = n.n(i),
  l = n(442837),
  o = n(481060),
  c = n(570140),
  d = n(355467),
  _ = n(179360),
  E = n(821849),
  u = n(497321),
  T = n(100527),
  I = n(906732),
  R = n(211242),
  C = n(15640),
  g = n(89057),
  p = n(246946),
  A = n(594174),
  N = n(78839),
  m = n(626135),
  S = n(111361),
  f = n(357355),
  M = n(937579),
  h = n(91802),
  b = n(104494),
  x = n(639119),
  O = n(2359),
  P = n(132547),
  L = n(474936),
  v = n(981631),
  Z = n(904422);
t.Z = function(e) {
  let {
    entrypoint: t = L.EZ.UserSettings
  } = e, n = (0, R.Q)(), {
    sourceAnalyticsLocations: i,
    analyticsLocations: D
  } = (0, I.ZP)(T.Z.PREMIUM_MARKETING), B = (0, l.e7)([N.ZP], () => N.ZP.hasFetchedSubscriptions()), U = (0, l.e7)([A.default], () => A.default.getCurrentUser()), j = (0, x.N)(), G = (0, b.Ng)(), H = (0, C.V)(), [y, k] = a.useState(!0), w = a.useRef(0), V = (0, S.M5)(U, L.p9.TIER_2), F = (0, h.n)(), W = null == F ? void 0 : F.countryCode, K = (0, l.e7)([f.Z], () => f.Z.hasFetched);
  return (a.useEffect(() => {
    !K && d.MH()
  }, [K]), a.useEffect(() => {
    c.Z.wait(async () => {
      let e = Date.now();
      await Promise.all([d.jg(), (0, _.X8)(), d.tZ(), (0, E.Y2)(W, null, v.JjL.DISCOVERY)]), w.current = Date.now() - e, k(!1)
    })
  }, [W]), a.useEffect(() => {
    n && (null != j || null != G) && (0, M.ab)(j, G)
  }, [n, j, G]), a.useEffect(() => {
    !y && m.default.track(v.rMx.PREMIUM_MARKETING_PAGE_VIEWED, {
      location_stack: i,
      load_duration_ms: w.current
    })
  }, [i, y]), (0, l.e7)([p.Z], () => p.Z.enabled)) ? (0, s.jsx)(u.Z, {}) : n ? (0, s.jsx)(g.c8, {}) : t === L.EZ.ApplicationStoreHome && V ? (0, s.jsx)(I.Gt, {
    value: D,
    children: (0, s.jsx)(P.Z, {})
  }) : B && H && !y ? (0, s.jsx)(I.Gt, {
    value: D,
    children: (0, s.jsx)(O.Z, {
      entrypoint: t
    })
  }) : (0, s.jsx)("div", {
    className: r()(Z.container, Z.loading),
    children: (0, s.jsx)(o.Spinner, {})
  })
}