"use strict";
t.r(n), t.d(n, {
  default: function() {
    return o
  }
});
var l = t("735250");
t("470079");
var a = t("114484"),
  s = t("970184"),
  u = t("588625");

function o(e) {
  let {
    components: n,
    renderComponents: t
  } = e, {
    message: o
  } = (0, s.useComponentStateContext)();
  return null == n || 0 === n.length ? null : (0, l.jsxs)("div", {
    className: u.container,
    children: [(0, l.jsx)("div", {
      className: u.children,
      children: t(n)
    }), null != o ? (0, l.jsx)(a.default, {
      className: u.error,
      message: o,
      component: e
    }) : null]
  })
}