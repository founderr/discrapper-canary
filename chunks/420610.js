"use strict";
a.r(t), a.d(t, {
  default: function() {
    return y
  }
});
var l = a("37983"),
  n = a("884691"),
  s = a("446674"),
  u = a("54239"),
  o = a("79112"),
  i = a("901582"),
  r = a("800751"),
  d = a("84339"),
  f = a("812204"),
  c = a("716241"),
  S = a("685665"),
  p = a("260518"),
  E = a("586139"),
  _ = a("167209"),
  g = a("879364"),
  m = a("26092"),
  b = a("161778"),
  h = a("373798"),
  k = a("49111"),
  T = a("782340");
let x = n.forwardRef(function() {
  E.default.trackExposure({
    location: "cd25e4_1"
  }), p.default.useExperiment({
    location: "user_setting_auto"
  }, {
    autoTrackExposure: !1
  }), p.default.trackExposure({
    location: "user_setting_manual"
  });
  let e = (0, s.useStateFromStores)([b.default], () => b.default.theme),
    t = (0, s.useStateFromStores)([b.default], () => b.default.darkSidebar ? k.ThemeTypes.DARK : void 0),
    {
      section: a,
      subsection: x,
      analyticsLocation: y,
      analyticsLocations: A
    } = (0, s.useStateFromStoresObject)([m.default], () => {
      let e = m.default.getSection(),
        t = m.default.getSubsection(),
        {
          analyticsLocation: a,
          analyticsLocations: l
        } = m.default.getProps();
      return {
        section: e,
        subsection: t,
        analyticsLocation: a,
        analyticsLocations: l
      }
    }),
    N = (0, d.default)(a),
    P = (0, d.default)(x),
    {
      AnalyticsLocationProvider: I
    } = (0, S.default)(f.default.USER_SETTINGS);
  n.useEffect(() => {
    let e = null != a && (a !== N || x !== P);
    e && ! function(e) {
      let {
        destinationPane: t,
        originPane: a = null,
        source: l = null,
        subsection: n = null,
        locationStack: s = null
      } = e;
      c.default.trackWithMetadata(k.AnalyticEvents.SETTINGS_PANE_VIEWED, {
        settings_type: "user",
        origin_pane: a,
        destination_pane: t,
        location_stack: s,
        source: l,
        subsection: n
      })
    }({
      destinationPane: a,
      originPane: null != N ? N : null,
      source: y,
      subsection: x,
      locationStack: A
    })
  }, [a, N, x, P, y, A]);
  let j = (0, h.default)(),
    v = (0, _.useIsEligibleForPomelo)(),
    w = (0, g.useNewQuestBadge)(),
    F = n.useCallback(e => {
      o.default.setSection(e)
    }, []);
  return (0, l.jsx)(I, {
    children: (0, l.jsx)(i.default, {
      root: !0,
      page: k.AnalyticsPages.USER_SETTINGS,
      children: (0, l.jsx)(r.default, {
        theme: e,
        title: T.default.Messages.USER_SETTINGS,
        sidebarTheme: t,
        section: a,
        onSetSection: F,
        onClose: u.popLayer,
        sections: j,
        isEligibleForPomelo: v,
        hasNewQuests: w
      })
    })
  })
});
var y = n.forwardRef(function() {
  let e = (0, s.useStateFromStores)([m.default], () => m.default.getProps().analyticsLocations),
    {
      AnalyticsLocationProvider: t
    } = (0, S.default)(e);
  return (0, l.jsx)(t, {
    children: (0, l.jsx)(x, {})
  })
})