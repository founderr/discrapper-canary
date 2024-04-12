"use strict";
a.r(t), a.d(t, {
  default: function() {
    return o
  }
});
var n = a("735250");
a("470079");
var s = a("803997"),
  l = a.n(s),
  i = a("481060"),
  r = a("84700");

function o(e) {
  let {
    padded: t = !0,
    inset: a = !1,
    active: s = !1,
    className: o,
    children: u,
    onClick: d,
    ...c
  } = e;
  return null != d ? (0, n.jsx)(i.Clickable, {
    onClick: d,
    tabIndex: null != d ? 0 : -1,
    className: l()(o, {
      [r.outer]: !a,
      [r.inset]: a,
      [r.padded]: t,
      [r.active]: s,
      [r.interactive]: null != d
    }),
    ...c,
    children: u
  }) : (0, n.jsx)("div", {
    className: l()(o, {
      [r.outer]: !a,
      [r.inset]: a,
      [r.padded]: t,
      [r.active]: s
    }),
    ...c,
    children: u
  })
}