"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var a = s("37983");
s("884691");
var i = s("90915"),
  r = s("86621"),
  n = s("788188"),
  l = s("49111"),
  o = (0, r.default)(function() {
    return (0, a.jsxs)(i.Switch, {
      children: [(0, a.jsx)(i.Route, {
        path: l.Routes.APPLICATION_STORE,
        exact: !0,
        render: () => (0, a.jsx)(n.default, {})
      }), (0, a.jsx)(i.Redirect, {
        to: l.Routes.APP
      })]
    })
  })