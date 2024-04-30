"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var l = n("735250");
n("470079");
var a = n("114484"),
  r = n("970184"),
  s = n("221791");

function u(e) {
  let {
    components: t,
    renderComponents: n
  } = e, {
    message: u
  } = (0, r.useComponentStateContext)();
  return null == t || 0 === t.length ? null : (0, l.jsxs)("div", {
    className: s.container,
    children: [(0, l.jsx)("div", {
      className: s.children,
      children: n(t)
    }), null != u ? (0, l.jsx)(a.default, {
      className: s.error,
      message: u,
      component: e
    }) : null]
  })
}