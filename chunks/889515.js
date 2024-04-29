"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var l = n("735250");
n("470079");
var a = n("114484"),
  s = n("970184"),
  o = n("221791");

function u(e) {
  let {
    components: t,
    renderComponents: n
  } = e, {
    message: u
  } = (0, s.useComponentStateContext)();
  return null == t || 0 === t.length ? null : (0, l.jsxs)("div", {
    className: o.container,
    children: [(0, l.jsx)("div", {
      className: o.children,
      children: n(t)
    }), null != u ? (0, l.jsx)(a.default, {
      className: o.error,
      message: u,
      component: e
    }) : null]
  })
}