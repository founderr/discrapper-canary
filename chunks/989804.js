"use strict";
a.r(t);
var s = a("735250"),
  l = a("470079"),
  n = a("442837"),
  o = a("37234"),
  i = a("230711"),
  u = a("410575"),
  r = a("503089"),
  d = a("110924"),
  c = a("100527"),
  f = a("367907"),
  S = a("906732"),
  g = a("254901"),
  p = a("45493"),
  E = a("332473"),
  _ = a("113434"),
  m = a("663389"),
  h = a("210887"),
  b = a("394644"),
  k = a("295545"),
  T = a("839469"),
  y = a("981631"),
  A = a("689938");
let P = l.forwardRef(function() {
  p.default.trackExposure({
    location: "cd25e4_1"
  }), g.default.useExperiment({
    location: "user_setting_auto"
  }, {
    autoTrackExposure: !1
  }), g.default.trackExposure({
    location: "user_setting_manual"
  });
  let e = (0, n.useStateFromStores)([h.default], () => h.default.theme),
    t = (0, n.useStateFromStores)([h.default], () => h.default.darkSidebar ? y.ThemeTypes.DARK : void 0),
    {
      section: a,
      subsection: P,
      analyticsLocation: v,
      analyticsLocations: x
    } = (0, n.useStateFromStoresObject)([m.default], () => {
      let e = m.default.getSection(),
        t = m.default.getSubsection(),
        {
          analyticsLocation: a,
          analyticsLocations: s
        } = m.default.getProps();
      return {
        section: e,
        subsection: t,
        analyticsLocation: a,
        analyticsLocations: s
      }
    }),
    F = (0, d.default)(a),
    I = (0, d.default)(P),
    {
      analyticsLocations: R
    } = (0, S.default)(c.default.USER_SETTINGS);
  l.useEffect(() => {
    null != a && (a !== F || P !== I) && ! function(e) {
      let {
        destinationPane: t,
        originPane: a = null,
        source: s = null,
        subsection: l = null,
        locationStack: n = null
      } = e;
      f.default.trackWithMetadata(y.AnalyticEvents.SETTINGS_PANE_VIEWED, {
        settings_type: "user",
        origin_pane: a,
        destination_pane: t,
        location_stack: n,
        source: s,
        subsection: l
      })
    }({
      destinationPane: a,
      originPane: null != F ? F : null,
      source: v,
      subsection: P,
      locationStack: x
    })
  }, [a, F, P, I, v, x]);
  let U = (0, k.useIsEligibleForUserSettingsSearchDesktop)({
      location: "user_settings"
    }),
    {
      hasSearchResults: j,
      searchResults: L
    } = (0, T.useSettingSearchResults)(),
    N = l.useMemo(() => U && j, [U, j]),
    C = (0, b.useDefaultUserSettingsSections)(),
    w = (0, b.useSearchUserSettingsSections)(L),
    D = l.useMemo(() => N ? w : C, [N, w, C]),
    G = (0, E.useIsEligibleForPomelo)(),
    M = (0, _.useQuestsForSettingsBadge)(),
    B = l.useCallback(e => {
      i.default.setSection(e)
    }, []);
  return (0, s.jsx)(S.AnalyticsLocationProvider, {
    value: R,
    children: (0, s.jsx)(u.default, {
      root: !0,
      page: y.AnalyticsPages.USER_SETTINGS,
      children: (0, s.jsx)(r.default, {
        theme: e,
        title: A.default.Messages.USER_SETTINGS,
        sidebarTheme: t,
        section: a,
        onSetSection: B,
        onClose: o.popLayer,
        sections: D,
        isEligibleForPomelo: G,
        questsForBadge: M
      })
    })
  })
});
t.default = l.forwardRef(function() {
  let e = (0, n.useStateFromStores)([m.default], () => m.default.getProps().analyticsLocations),
    {
      analyticsLocations: t
    } = (0, S.default)(e);
  return (0, s.jsx)(S.AnalyticsLocationProvider, {
    value: t,
    children: (0, s.jsx)(P, {})
  })
})