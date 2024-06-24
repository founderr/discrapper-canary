n.r(t);
var l = n(735250),
  i = n(470079),
  a = n(442837),
  u = n(37234),
  r = n(230711),
  s = n(410575),
  o = n(503089),
  _ = n(110924),
  c = n(100527),
  S = n(367907),
  T = n(906732),
  E = n(254901),
  N = n(45493),
  d = n(332473),
  I = n(113434),
  f = n(663389),
  Z = n(210887),
  g = n(128277),
  G = n(394644),
  A = n(295545),
  P = n(839469),
  R = n(981631),
  U = n(689938);
let O = i.forwardRef(function() {
  N.Z.trackExposure({
    location: "cd25e4_1"
  }), E.Z.useExperiment({
    location: "user_setting_auto"
  }, {
    autoTrackExposure: !1
  }), E.Z.trackExposure({
    location: "user_setting_manual"
  });
  let e = (0, a.e7)([Z.Z], () => Z.Z.theme),
    t = (0, a.e7)([Z.Z], () => Z.Z.darkSidebar ? R.BRd.DARK : void 0),
    {
      section: n,
      subsection: O,
      analyticsLocation: M,
      analyticsLocations: D
    } = (0, a.cj)([f.Z], () => {
      let e = f.Z.getSection(),
        t = f.Z.getSubsection(),
        {
          analyticsLocation: n,
          analyticsLocations: l
        } = f.Z.getProps();
      return {
        section: e,
        subsection: t,
        analyticsLocation: n,
        analyticsLocations: l
      }
    }),
    m = (0, _.Z)(n),
    b = (0, _.Z)(O),
    p = (0, g.Z7)(),
    {
      analyticsLocations: v
    } = (0, T.ZP)(c.Z.USER_SETTINGS);
  i.useEffect(() => {
    if (!!(null != n && (n !== m || O !== b))) ! function(e) {
      let {
        destinationPane: t,
        originPane: n = null,
        source: l = null,
        subsection: i = null,
        locationStack: a = null,
        searchQuery: u = null
      } = e;
      S.ZP.trackWithMetadata(R.rMx.SETTINGS_PANE_VIEWED, {
        settings_type: "user",
        origin_pane: n,
        destination_pane: t,
        location_stack: a,
        source: l,
        subsection: i,
        search_query: u
      })
    }({
      destinationPane: n,
      originPane: null != m ? m : null,
      source: M,
      subsection: O,
      locationStack: D,
      searchQuery: "" !== p ? p : null
    })
  }, [n, m, O, b, M, D, p]);
  let C = (0, A.eA)({
      location: "user_settings"
    }),
    {
      hasSearchResults: h,
      searchResults: k
    } = (0, P.E)(),
    x = i.useMemo(() => C && h, [C, h]),
    L = (0, G.VO)(),
    q = (0, G.q8)(k),
    V = i.useMemo(() => x ? q : L, [x, q, L]),
    Y = (0, d.b)(),
    H = (0, I.iO)(),
    j = i.useCallback(e => {
      r.Z.setSection(e)
    }, []);
  return (0, l.jsx)(T.Gt, {
    value: v,
    children: (0, l.jsx)(s.Z, {
      root: !0,
      page: R.ZY5.USER_SETTINGS,
      children: (0, l.jsx)(o.ZP, {
        theme: e,
        title: U.Z.Messages.USER_SETTINGS,
        sidebarTheme: t,
        section: n,
        onSetSection: j,
        onClose: u.xf,
        sections: V,
        isEligibleForPomelo: Y,
        questsForBadge: H
      })
    })
  })
});
t.default = i.forwardRef(function() {
  let e = (0, a.e7)([f.Z], () => f.Z.getProps().analyticsLocations),
    {
      analyticsLocations: t
    } = (0, T.ZP)(e);
  return (0, l.jsx)(T.Gt, {
    value: t,
    children: (0, l.jsx)(O, {})
  })
})