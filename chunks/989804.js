n.r(t);
var a = n(735250),
  i = n(470079),
  s = n(442837),
  o = n(37234),
  l = n(230711),
  r = n(410575),
  u = n(503089),
  c = n(110924),
  d = n(100527),
  Z = n(367907),
  _ = n(906732),
  f = n(254901),
  E = n(45493),
  g = n(332473),
  p = n(113434),
  S = n(663389),
  h = n(210887),
  b = n(128277),
  k = n(394644),
  m = n(295545),
  x = n(839469),
  P = n(981631),
  T = n(689938);
let A = i.forwardRef(function() {
  E.Z.trackExposure({
    location: "cd25e4_1"
  }), f.Z.useExperiment({
    location: "user_setting_auto"
  }, {
    autoTrackExposure: !1
  }), f.Z.trackExposure({
    location: "user_setting_manual"
  });
  let e = (0, s.e7)([h.Z], () => h.Z.theme),
    t = (0, s.e7)([h.Z], () => h.Z.darkSidebar ? P.BRd.DARK : void 0),
    {
      section: n,
      subsection: A,
      analyticsLocation: R,
      analyticsLocations: j
    } = (0, s.cj)([S.Z], () => {
      let e = S.Z.getSection(),
        t = S.Z.getSubsection(),
        {
          analyticsLocation: n,
          analyticsLocations: a
        } = S.Z.getProps();
      return {
        section: e,
        subsection: t,
        analyticsLocation: n,
        analyticsLocations: a
      }
    }),
    v = (0, c.Z)(n),
    y = (0, c.Z)(A),
    G = (0, b.Z7)(),
    {
      analyticsLocations: I
    } = (0, _.ZP)(d.Z.USER_SETTINGS);
  i.useEffect(() => {
    if (!!(null != n && (n !== v || A !== y))) ! function(e) {
      let {
        destinationPane: t,
        originPane: n = null,
        source: a = null,
        subsection: i = null,
        locationStack: s = null,
        searchQuery: o = null
      } = e;
      Z.ZP.trackWithMetadata(P.rMx.SETTINGS_PANE_VIEWED, {
        settings_type: "user",
        origin_pane: n,
        destination_pane: t,
        location_stack: s,
        source: a,
        subsection: i,
        search_query: o
      })
    }({
      destinationPane: n,
      originPane: null != v ? v : null,
      source: R,
      subsection: A,
      locationStack: j,
      searchQuery: "" !== G ? G : null
    })
  }, [n, v, A, y, R, j, G]);
  let N = (0, m.eA)({
      location: "user_settings"
    }),
    {
      hasSearchResults: C,
      searchResults: M
    } = (0, x.E)(),
    w = i.useMemo(() => N && C, [N, C]),
    U = (0, k.VO)(),
    q = (0, k.q8)(M),
    L = i.useMemo(() => w ? q : U, [w, q, U]),
    B = (0, g.b)(),
    D = (0, p.iO)(),
    F = i.useCallback(e => {
      l.Z.setSection(e)
    }, []);
  return (0, a.jsx)(_.Gt, {
    value: I,
    children: (0, a.jsx)(r.Z, {
      root: !0,
      page: P.ZY5.USER_SETTINGS,
      children: (0, a.jsx)(u.ZP, {
        theme: e,
        title: T.Z.Messages.USER_SETTINGS,
        sidebarTheme: t,
        section: n,
        onSetSection: F,
        onClose: o.xf,
        sections: L,
        isEligibleForPomelo: B,
        questsForBadge: D
      })
    })
  })
});
t.default = i.forwardRef(function() {
  let e = (0, s.e7)([S.Z], () => S.Z.getProps().analyticsLocations),
    {
      analyticsLocations: t
    } = (0, _.ZP)(e);
  return (0, a.jsx)(_.Gt, {
    value: t,
    children: (0, a.jsx)(A, {})
  })
})