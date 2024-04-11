"use strict";
s.r(t);
var a = s("735250");
s("470079");
var i = s("613828"),
  r = s("730749"),
  l = s("928207"),
  n = s("981631");
t.default = (0, r.default)(function() {
  return (0, a.jsxs)(i.Switch, {
    children: [(0, a.jsx)(i.Route, {
      path: n.Routes.APPLICATION_STORE,
      exact: !0,
      render: () => (0, a.jsx)(l.default, {})
    }), (0, a.jsx)(i.Redirect, {
      to: n.Routes.APP
    })]
  })
})