"use strict";
n.r(t), n.d(t, {
  BackdropStyles: function() {
    return s
  },
  default: function() {
    return p
  }
});
var i, s, r = n("37983"),
  a = n("884691"),
  o = n("414456"),
  l = n.n(o),
  u = n("907002"),
  d = n("84339"),
  c = n("449918"),
  f = n("49111"),
  _ = n("930352");
(i = s || (s = {})).SUBTLE = "SUBTLE", i.DARK = "DARK", i.LIGHT = "LIGHT", i.SOLID = "SOLID";
let h = {
    SUBTLE: .25,
    DARK: .85,
    LIGHT: .95,
    SOLID: 1
  },
  g = {
    LIGHT: f.Color.WHITE_500,
    DARK: f.Color.BLACK_500,
    SUBTLE: f.Color.BLACK_500,
    SOLID: f.Color.PRIMARY_630
  };

function m(e) {
  return (0, c.getColor)(g[e])
}
let E = a.forwardRef(function(e, t) {
  let {
    backdropStyle: n = "SUBTLE",
    backdropInstant: i = !1,
    zIndexBoost: s = 0,
    LayerComponent: a,
    isVisible: o,
    onClose: c
  } = e, f = {
    opacity: 0,
    background: m(n)
  }, g = {
    opacity: h[n],
    background: m(n)
  }, E = (0, d.default)(i), p = (0, u.useTransition)(o, {
    keys: e => e ? "backdrop" : "empty",
    config: {
      duration: i || E ? 0 : 300
    },
    from: f,
    enter: g,
    leave: f
  });
  if (null == a) {
    let e = {
      zIndex: 1e3 + s
    };
    return p((t, n) => n ? (0, r.jsx)(u.animated.div, {
      className: _.backdrop,
      style: {
        ...t,
        ...e
      },
      onClick: c
    }) : null)
  }
  return (0, r.jsx)(a, {
    children: p((e, t) => t ? (0, r.jsx)(u.animated.div, {
      className: l(_.backdrop, _.withLayer),
      style: e,
      onClick: c
    }) : null)
  })
});
var p = E