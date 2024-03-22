"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var a = s("37983");
s("884691");
var r = s("90915"),
  n = s("86621"),
  i = s("788188"),
  l = s("49111"),
  o = (0, n.default)(function() {
    return (0, a.jsxs)(r.Switch, {
      children: [(0, a.jsx)(r.Route, {
        path: l.Routes.APPLICATION_STORE,
        exact: !0,
        render: () => (0, a.jsx)(i.default, {})
      }), (0, a.jsx)(r.Redirect, {
        to: l.Routes.APP
      })]
    })
  })