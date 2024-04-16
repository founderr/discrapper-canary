"use strict";
n.r(l), n.d(l, {
  default: function() {
    return i
  }
});
var t = n("735250");
n("470079");
var a = n("114484"),
  s = n("970184"),
  u = n("588625");

function i(e) {
  let {
    components: l,
    renderComponents: n
  } = e, {
    message: i
  } = (0, s.useComponentStateContext)();
  return null == l || 0 === l.length ? null : (0, t.jsxs)("div", {
    className: u.container,
    children: [(0, t.jsx)("div", {
      className: u.children,
      children: n(l)
    }), null != i ? (0, t.jsx)(a.default, {
      className: u.error,
      message: i,
      component: e
    }) : null]
  })
}