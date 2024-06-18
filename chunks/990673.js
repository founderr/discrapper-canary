"use strict";
n.d(t, {
  Z: function() {
    return r
  }
});
var i = n(735250);
n(470079);
var s = n(547881),
  l = n(382790),
  o = n(430036),
  a = n(598009);

function r(e) {
  let {
    dragStart: t,
    dragging: n,
    pinned: r,
    locked: c
  } = e;
  return (0, i.jsxs)(s.ZP, {
    className: a.wrapper,
    children: [(0, i.jsx)(l.Z, {
      contained: !0,
      dragStart: t,
      locked: c
    }), (0, i.jsx)(o.Z, {
      dragStart: t,
      locked: c,
      pinned: r,
      dragging: n,
      contained: !0
    })]
  })
}