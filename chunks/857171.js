"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var l = n("37983");
n("884691");
var i = n("414456"),
  a = n.n(i),
  s = n("77078"),
  r = n("371642");

function o(e) {
  let {
    children: t,
    className: n,
    innerClassName: i,
    onChange: o,
    "aria-label": u,
    "aria-describedby": d,
    filters: c,
    multiple: f = !1,
    disabled: m = !1,
    submitting: p = !1,
    ...h
  } = e;
  return (0, l.jsx)(s.FocusRing, {
    within: !0,
    children: (0, l.jsxs)("div", {
      className: a(n, (0, s.getButtonStyle)({
        ...h,
        submitting: p,
        disabled: m
      })),
      "aria-disabled": m,
      children: [(0, l.jsx)("span", {
        "aria-hidden": !0,
        className: i,
        children: t
      }), (0, l.jsx)(r.default, {
        tabIndex: 0,
        onChange: o,
        filters: c,
        multiple: f,
        "aria-label": u,
        "aria-describedby": d,
        disabled: m
      })]
    })
  })
}