t(47120);
var n = t(735250),
  a = t(470079),
  r = t(120356),
  i = t.n(r),
  l = t(442837),
  o = t(481060),
  _ = t(570140),
  c = t(355467),
  E = t(179360),
  u = t(821849),
  d = t(497321),
  R = t(100527),
  I = t(906732),
  T = t(211242),
  A = t(15640),
  M = t(89057),
  S = t(246946),
  N = t(594174),
  p = t(78839),
  m = t(626135),
  g = t(111361),
  C = t(357355),
  f = t(937579),
  P = t(91802),
  O = t(104494),
  x = t(639119),
  h = t(2359),
  L = t(132547),
  b = t(474936),
  v = t(981631),
  Z = t(904422);
s.Z = function(e) {
  let {
    entrypoint: s = b.EZ.UserSettings
  } = e, t = (0, T.Q)(), {
    sourceAnalyticsLocations: r,
    analyticsLocations: D
  } = (0, I.ZP)(R.Z.PREMIUM_MARKETING), U = (0, l.e7)([p.ZP], () => p.ZP.hasFetchedSubscriptions()), B = (0, l.e7)([N.default], () => N.default.getCurrentUser()), j = (0, x.N)(), G = (0, O.Ng)(), H = (0, A.V)(), [W, k] = a.useState(!0), K = a.useRef(0), F = (0, g.M5)(B, b.p9.TIER_2), w = (0, P.n)(), V = null == w ? void 0 : w.countryCode, y = (0, l.e7)([C.Z], () => C.Z.hasFetched);
  return (a.useEffect(() => {
    !y && c.MH()
  }, [y]), a.useEffect(() => {
    _.Z.wait(async () => {
      let e = Date.now();
      await Promise.all([c.jg(), (0, E.X8)(), c.tZ(), (0, u.Y2)(V, null, v.JjL.DISCOVERY)]), K.current = Date.now() - e, k(!1)
    })
  }, [V]), a.useEffect(() => {
    t && (null != j || null != G) && (0, f.ab)(j, G)
  }, [t, j, G]), a.useEffect(() => {
    !W && m.default.track(v.rMx.PREMIUM_MARKETING_PAGE_VIEWED, {
      location_stack: r,
      load_duration_ms: K.current
    })
  }, [r, W]), (0, l.e7)([S.Z], () => S.Z.enabled)) ? (0, n.jsx)(d.Z, {}) : t ? (0, n.jsx)(M.c8, {}) : s === b.EZ.ApplicationStoreHome && F ? (0, n.jsx)(I.Gt, {
    value: D,
    children: (0, n.jsx)(L.Z, {})
  }) : U && H && !W ? (0, n.jsx)(I.Gt, {
    value: D,
    children: (0, n.jsx)(h.Z, {
      entrypoint: s
    })
  }) : (0, n.jsx)("div", {
    className: i()(Z.container, Z.loading),
    children: (0, n.jsx)(o.Spinner, {})
  })
}