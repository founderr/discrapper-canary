s(47120);
var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  l = s(442837),
  o = s(481060),
  c = s(570140),
  E = s(355467),
  _ = s(179360),
  u = s(821849),
  d = s(497321),
  T = s(100527),
  I = s(906732),
  R = s(211242),
  A = s(15640),
  N = s(89057),
  C = s(246946),
  g = s(594174),
  m = s(78839),
  M = s(626135),
  S = s(111361),
  p = s(357355),
  h = s(937579),
  f = s(91802),
  O = s(104494),
  x = s(639119),
  L = s(2359),
  P = s(132547),
  v = s(474936),
  Z = s(981631),
  b = s(904422);
t.Z = function(e) {
  let {
    entrypoint: t = v.EZ.UserSettings
  } = e, s = (0, R.Q)(), {
    sourceAnalyticsLocations: i,
    analyticsLocations: D
  } = (0, I.ZP)(T.Z.PREMIUM_MARKETING), U = (0, l.e7)([m.ZP], () => m.ZP.hasFetchedSubscriptions()), j = (0, l.e7)([g.default], () => g.default.getCurrentUser()), G = (0, x.N)(), B = (0, O.Ng)(), H = (0, A.V)(), [y, k] = a.useState(!0), V = a.useRef(0), F = (0, S.M5)(j, v.p9.TIER_2), w = (0, f.n)(), W = null == w ? void 0 : w.countryCode, K = (0, l.e7)([p.Z], () => p.Z.hasFetched);
  return (a.useEffect(() => {
    !K && E.MH()
  }, [K]), a.useEffect(() => {
    c.Z.wait(async () => {
      let e = Date.now();
      await Promise.all([E.jg(), (0, _.X8)(), E.tZ(), (0, u.Y2)(W, null, Z.JjL.DISCOVERY)]), V.current = Date.now() - e, k(!1)
    })
  }, [W]), a.useEffect(() => {
    s && (null != G || null != B) && (0, h.ab)(G, B)
  }, [s, G, B]), a.useEffect(() => {
    !y && M.default.track(Z.rMx.PREMIUM_MARKETING_PAGE_VIEWED, {
      location_stack: i,
      load_duration_ms: V.current
    })
  }, [i, y]), (0, l.e7)([C.Z], () => C.Z.enabled)) ? (0, n.jsx)(d.Z, {}) : s ? (0, n.jsx)(N.c8, {}) : t === v.EZ.ApplicationStoreHome && F ? (0, n.jsx)(I.Gt, {
    value: D,
    children: (0, n.jsx)(P.Z, {})
  }) : U && H && !y ? (0, n.jsx)(I.Gt, {
    value: D,
    children: (0, n.jsx)(L.Z, {
      entrypoint: t
    })
  }) : (0, n.jsx)("div", {
    className: r()(b.container, b.loading),
    children: (0, n.jsx)(o.Spinner, {})
  })
}