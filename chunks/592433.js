"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
});
var a = s("37983");
s("884691");
var r = s("90915"),
  n = s("86621"),
  l = s("788188"),
  i = s("49111"),
  u = (0, n.default)(function() {
    return (0, a.jsxs)(r.Switch, {
      children: [(0, a.jsx)(r.Route, {
        path: i.Routes.APPLICATION_STORE,
        exact: !0,
        render: () => (0, a.jsx)(l.default, {})
      }), (0, a.jsx)(r.Redirect, {
        to: i.Routes.APP
      })]
    })
  })