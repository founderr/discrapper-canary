"use strict";
a.r(t);
var s = a("735250"),
  l = a("470079"),
  n = a("442837"),
  u = a("37234"),
  o = a("230711"),
  i = a("410575"),
  r = a("503089"),
  c = a("110924"),
  d = a("100527"),
  f = a("367907"),
  S = a("906732"),
  g = a("254901"),
  p = a("45493"),
  _ = a("332473"),
  E = a("113434"),
  h = a("663389"),
  m = a("210887"),
  b = a("128277"),
  k = a("394644"),
  y = a("295545"),
  T = a("839469"),
  A = a("981631"),
  P = a("689938");
let v = l.forwardRef(function() {
  p.default.trackExposure({
    location: "cd25e4_1"
  }), g.default.useExperiment({
    location: "user_setting_auto"
  }, {
    autoTrackExposure: !1
  }), g.default.trackExposure({
    location: "user_setting_manual"
  });
  let e = (0, n.useStateFromStores)([m.default], () => m.default.theme),
    t = (0, n.useStateFromStores)([m.default], () => m.default.darkSidebar ? A.ThemeTypes.DARK : void 0),
    {
      section: a,
      subsection: v,
      analyticsLocation: x,
      analyticsLocations: F
    } = (0, n.useStateFromStoresObject)([h.default], () => {
      let e = h.default.getSection(),
        t = h.default.getSubsection(),
        {
          analyticsLocation: a,
          analyticsLocations: s
        } = h.default.getProps();
      return {
        section: e,
        subsection: t,
        analyticsLocation: a,
        analyticsLocations: s
      }
    }),
    I = (0, c.default)(a),
    R = (0, c.default)(v),
    U = (0, b.useSettingSearchQuery)(),
    {
      analyticsLocations: j
    } = (0, S.default)(d.default.USER_SETTINGS);
  l.useEffect(() => {
    null != a && (a !== I || v !== R) && ! function(e) {
      let {
        destinationPane: t,
        originPane: a = null,
        source: s = null,
        subsection: l = null,
        locationStack: n = null,
        searchQuery: u = null
      } = e;
      f.default.trackWithMetadata(A.AnalyticEvents.SETTINGS_PANE_VIEWED, {
        settings_type: "user",
        origin_pane: a,
        destination_pane: t,
        location_stack: n,
        source: s,
        subsection: l,
        search_query: u
      })
    }({
      destinationPane: a,
      originPane: null != I ? I : null,
      source: x,
      subsection: v,
      locationStack: F,
      searchQuery: "" !== U ? U : null
    })
  }, [a, I, v, R, x, F, U]);
  let L = (0, y.useIsEligibleForUserSettingsSearchDesktop)({
      location: "user_settings"
    }),
    {
      hasSearchResults: N,
      searchResults: C
    } = (0, T.useSettingSearchResults)(),
    w = l.useMemo(() => L && N, [L, N]),
    D = (0, k.useDefaultUserSettingsSections)(),
    G = (0, k.useSearchUserSettingsSections)(C),
    M = l.useMemo(() => w ? G : D, [w, G, D]),
    Q = (0, _.useIsEligibleForPomelo)(),
    q = (0, E.useQuestsForSettingsBadge)(),
    B = l.useCallback(e => {
      o.default.setSection(e)
    }, []);
  return (0, s.jsx)(S.AnalyticsLocationProvider, {
    value: j,
    children: (0, s.jsx)(i.default, {
      root: !0,
      page: A.AnalyticsPages.USER_SETTINGS,
      children: (0, s.jsx)(r.default, {
        theme: e,
        title: P.default.Messages.USER_SETTINGS,
        sidebarTheme: t,
        section: a,
        onSetSection: B,
        onClose: u.popLayer,
        sections: M,
        isEligibleForPomelo: Q,
        questsForBadge: q
      })
    })
  })
});
t.default = l.forwardRef(function() {
  let e = (0, n.useStateFromStores)([h.default], () => h.default.getProps().analyticsLocations),
    {
      analyticsLocations: t
    } = (0, S.default)(e);
  return (0, s.jsx)(S.AnalyticsLocationProvider, {
    value: t,
    children: (0, s.jsx)(v, {})
  })
})