"use strict";
t.r(A), t.d(A, {
  default: function() {
    return o
  }
});
var a = t("735250");
t("470079");
var l = t("120356"),
  s = t.n(l),
  n = t("481060"),
  r = t("53281");

function o(e) {
  let {
    children: A,
    className: t,
    innerClassName: l,
    onChange: o,
    "aria-label": i,
    "aria-describedby": d,
    filters: u,
    multiple: c = !1,
    disabled: C = !1,
    submitting: f = !1,
    ...g
  } = e;
  return (0, a.jsx)(n.FocusRing, {
    within: !0,
    children: (0, a.jsxs)("div", {
      className: s()(t, (0, n.getButtonStyle)({
        ...g,
        submitting: f,
        disabled: C
      })),
      "aria-disabled": C,
      children: [(0, a.jsx)("span", {
        "aria-hidden": !0,
        className: l,
        children: A
      }), (0, a.jsx)(r.default, {
        tabIndex: 0,
        onChange: o,
        filters: u,
        multiple: c,
        "aria-label": i,
        "aria-describedby": d,
        disabled: C
      })]
    })
  })
}