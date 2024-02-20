"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var a = s("37983");
s("884691");
var n = s("414456"),
  l = s.n(n),
  r = s("77078"),
  i = s("371642");

function o(e) {
  let {
    children: t,
    className: s,
    innerClassName: n,
    onChange: o,
    "aria-label": u,
    "aria-describedby": d,
    filters: c,
    multiple: m = !1,
    disabled: h = !1,
    submitting: f = !1,
    ...g
  } = e;
  return (0, a.jsx)(r.FocusRing, {
    within: !0,
    children: (0, a.jsxs)("div", {
      className: l(s, (0, r.getButtonStyle)({
        ...g,
        submitting: f,
        disabled: h
      })),
      "aria-disabled": h,
      children: [(0, a.jsx)("span", {
        "aria-hidden": !0,
        className: n,
        children: t
      }), (0, a.jsx)(i.default, {
        tabIndex: 0,
        onChange: o,
        filters: c,
        multiple: m,
        "aria-label": u,
        "aria-describedby": d,
        disabled: h
      })]
    })
  })
}