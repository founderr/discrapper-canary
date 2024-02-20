"use strict";
n.r(t), n.d(t, {
  BackdropStyles: function() {
    return r
  },
  default: function() {
    return f
  }
});
var i, r, s = n("37983"),
  a = n("884691"),
  o = n("414456"),
  l = n.n(o),
  u = n("907002"),
  c = n("77078"),
  d = n("84339"),
  p = n("816452");
(i = r || (r = {})).SUBTLE = "SUBTLE", i.DARK = "DARK", i.BLUR = "BLUR";
let h = a.forwardRef(function(e, t) {
  let {
    backdropStyle: n = "SUBTLE",
    backdropInstant: i = !1,
    zIndexBoost: r = 0,
    LayerComponent: a,
    isVisible: o,
    onClose: h
  } = e, f = function() {
    let e = (0, c.useToken)(c.tokens.colors.BG_BACKDROP_NO_OPACITY).spring({
        opacity: .25
      }),
      t = (0, c.useToken)(c.tokens.colors.BG_BACKDROP).spring();
    return {
      SUBTLE: e,
      DARK: t,
      BLUR: t
    }
  }(), E = f[n], _ = (0, c.useToken)(c.tokens.colors.BG_BACKDROP_NO_OPACITY).spring({
    opacity: 0
  }), m = {
    background: _,
    backdropFilter: "blur(0px)"
  }, S = (0, d.default)(i), g = (0, u.useTransition)(o, {
    keys: e => e ? "backdrop" : "empty",
    config: {
      duration: i || S ? 0 : 300
    },
    from: m,
    enter: {
      background: E,
      backdropFilter: "blur(".concat("BLUR" === n ? 8 : 0, "px)")
    },
    leave: m
  });
  if (null == a) {
    let e = {
      zIndex: 1e3 + r
    };
    return g((t, n) => n ? (0, s.jsx)(u.animated.div, {
      className: p.backdrop,
      style: {
        ...t,
        ...e
      },
      onClick: h
    }) : null)
  }
  return (0, s.jsx)(a, {
    children: g((e, t) => t ? (0, s.jsx)(u.animated.div, {
      className: l(p.backdrop, p.withLayer),
      style: e,
      onClick: h
    }) : null)
  })
});
var f = h