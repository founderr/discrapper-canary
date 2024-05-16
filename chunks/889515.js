"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var l = n("735250");
n("470079");
var a = n("114484"),
  u = n("970184"),
  i = n("596821");

function o(e) {
  let {
    components: t,
    renderComponents: n
  } = e, {
    message: o
  } = (0, u.useComponentStateContext)();
  return null == t || 0 === t.length ? null : (0, l.jsxs)("div", {
    className: i.container,
    children: [(0, l.jsx)("div", {
      className: i.children,
      children: n(t)
    }), null != o ? (0, l.jsx)(a.default, {
      className: i.error,
      message: o,
      component: e
    }) : null]
  })
}