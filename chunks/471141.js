"use strict";
n.d(t, {
  j: function() {
    return E
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(84735),
  l = n(437337),
  u = n(981729),
  _ = n(770102),
  c = n(534542),
  d = n(316049);

function E(e) {
  let {
    value: t,
    disabled: n = !1,
    hideBorder: s = !1,
    tooltipNote: E,
    onChange: I,
    className: T,
    style: h,
    note: S,
    children: f
  } = e, N = r.useRef(null), A = r.useRef(null), m = r.useId(), O = (0, i.jsx)(l.r, {
    id: m,
    checked: t,
    onChange: I,
    disabled: n,
    focusProps: {
      enabled: !1
    },
    innerRef: N
  });
  return (0, i.jsxs)("div", {
    style: h,
    className: o()(d.container, T, {
      [d.disabled]: n
    }),
    children: [(0, i.jsx)(a.t, {
      within: !0,
      offset: -4,
      focusTarget: N,
      ringTarget: A,
      children: (0, i.jsxs)("div", {
        className: d.labelRow,
        ref: A,
        children: [(0, i.jsx)("label", {
          htmlFor: m,
          className: d.title,
          children: f
        }), (0, i.jsx)("div", {
          className: d.control,
          children: null != E ? (0, i.jsx)(u.DY, {
            text: E,
            children: O
          }) : O
        })]
      })
    }), null != S && (0, i.jsx)("div", {
      className: d.note,
      children: (0, i.jsx)(c.R, {
        disabled: n,
        type: c.g.DESCRIPTION,
        children: S
      })
    }), !s && (0, i.jsx)(_.$, {
      className: d.dividerDefault
    })]
  })
}