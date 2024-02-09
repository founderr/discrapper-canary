"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var a = s("37983");
s("884691");
var n = s("90915"),
  r = s("86621"),
  i = s("788188"),
  l = s("49111"),
  o = (0, r.default)(function() {
    return (0, a.jsxs)(n.Switch, {
      children: [(0, a.jsx)(n.Route, {
        path: l.Routes.APPLICATION_STORE,
        exact: !0,
        render: () => (0, a.jsx)(i.default, {})
      }), (0, a.jsx)(n.Redirect, {
        to: l.Routes.APP
      })]
    })
  })