n.d(t, {
  Z: function() {
    return o
  }
});
var s = n(735250);
n(470079);
var i = n(120356),
  l = n.n(i),
  a = n(481060),
  r = n(909056);

function o(e) {
  let {
    padded: t = !0,
    inset: n = !1,
    active: i = !1,
    className: o,
    children: c,
    onClick: u,
    ...d
  } = e;
  return null != u ? (0, s.jsx)(a.Clickable, {
    onClick: u,
    tabIndex: null != u ? 0 : -1,
    className: l()(o, {
      [r.outer]: !n,
      [r.inset]: n,
      [r.padded]: t,
      [r.active]: i,
      [r.interactive]: null != u
    }),
    ...d,
    children: c
  }) : (0, s.jsx)("div", {
    className: l()(o, {
      [r.outer]: !n,
      [r.inset]: n,
      [r.padded]: t,
      [r.active]: i
    }),
    ...d,
    children: c
  })
}