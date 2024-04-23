"use strict";
s.r(t);
var a = s("735250");
s("470079");
var r = s("613828"),
  i = s("730749"),
  n = s("928207"),
  l = s("981631");
t.default = (0, i.default)(function() {
  return (0, a.jsxs)(r.Switch, {
    children: [(0, a.jsx)(r.Route, {
      path: l.Routes.APPLICATION_STORE,
      exact: !0,
      render: () => (0, a.jsx)(n.default, {})
    }), (0, a.jsx)(r.Redirect, {
      to: l.Routes.APP
    })]
  })
})