"use strict";
a.r(t);
var n = a("735250"),
  s = a("470079"),
  l = a("613828"),
  i = a("410575"),
  r = a("765717"),
  o = a("252618"),
  u = a("108427"),
  d = a("895991"),
  c = a("993977"),
  f = a("981631"),
  E = a("689938"),
  h = a("262090");

function _() {
  return (0, n.jsxs)(l.Switch, {
    children: [(0, n.jsx)(r.default, {
      path: f.Routes.APPLICATION_LIBRARY_SETTINGS,
      exact: !0,
      children: (0, n.jsxs)(i.default, {
        page: f.AnalyticsPages.LIBRARY_SETTINGS,
        root: !0,
        children: [(0, n.jsx)(o.AppPageTitle, {
          subsection: E.default.Messages.SETTINGS
        }), (0, n.jsx)(c.default, {})]
      })
    }), (0, n.jsx)(r.default, {
      path: f.Routes.APPLICATION_LIBRARY,
      children: (0, n.jsxs)(i.default, {
        page: f.AnalyticsPages.LIBRARY,
        root: !0,
        children: [(0, n.jsx)(o.AppPageTitle, {
          subsection: E.default.Messages.APPLICATION_LIBRARY_MY_GAMES
        }), (0, n.jsx)(d.default, {})]
      })
    })]
  })
}
t.default = s.memo(function() {
  return s.useEffect(() => {
    (0, u.trackAppUIViewed)("application_library")
  }, []), (0, n.jsxs)("div", {
    className: h.container,
    children: [(0, n.jsx)(o.AppPageTitle, {
      location: E.default.Messages.LIBRARY
    }), (0, n.jsx)(_, {})]
  })
})