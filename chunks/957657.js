"use strict";
a.r(t);
var n = a("735250"),
  s = a("470079"),
  l = a("481060"),
  i = a("984370"),
  r = a("703656"),
  o = a("427828"),
  u = a("626135"),
  d = a("804739"),
  c = a("981631"),
  f = a("689938"),
  E = a("403000");
let h = (0, d.isSupportedPlatform)() || !1;
t.default = s.memo(function(e) {
  let {
    currentRoute: t,
    renderToolbar: a
  } = e, d = s.useContext(u.AnalyticsContext), _ = h || t === c.Routes.APPLICATION_LIBRARY_SETTINGS;
  return (0, n.jsxs)(i.default, {
    className: E.libraryHeader,
    toolbar: null == a ? void 0 : a(),
    children: [(0, n.jsx)(i.default.Icon, {
      icon: o.default,
      "aria-hidden": !0
    }), (0, n.jsx)(i.default.Title, {
      children: f.default.Messages.LIBRARY
    }), (0, n.jsx)(i.default.Divider, {}), (0, n.jsxs)(l.TabBar, {
      type: "top-pill",
      selectedItem: t,
      onItemSelect: function(e) {
        e !== t && (0, r.transitionTo)(e, {
          state: {
            analyticsSource: {
              ...d.location,
              section: c.AnalyticsSections.TABS,
              object: c.AnalyticsObjects.NAVIGATION_LINK
            }
          }
        })
      },
      children: [(0, n.jsx)(l.TabBar.Item, {
        id: c.Routes.APPLICATION_LIBRARY,
        children: f.default.Messages.APPLICATION_LIBRARY_MY_GAMES
      }), _ ? (0, n.jsx)(l.TabBar.Item, {
        id: c.Routes.APPLICATION_LIBRARY_SETTINGS,
        children: f.default.Messages.SETTINGS
      }) : null]
    })]
  })
})