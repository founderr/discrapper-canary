"use strict";
s.r(t);
var n = s("735250");
s("470079");
var a = s("613828"),
  r = s("730749"),
  l = s("928207"),
  i = s("981631");
t.default = (0, r.default)(function() {
  return (0, n.jsxs)(a.Switch, {
    children: [(0, n.jsx)(a.Route, {
      path: i.Routes.APPLICATION_STORE,
      exact: !0,
      render: () => (0, n.jsx)(l.default, {})
    }), (0, n.jsx)(a.Redirect, {
      to: i.Routes.APP
    })]
  })
})