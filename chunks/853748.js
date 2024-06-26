"use strict";
n.d(t, {
  $: function() {
    return m
  }
}), n(653041);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  o = n.n(a),
  s = n(920906),
  c = n(873546),
  l = n(399606),
  d = n(481060),
  u = n(774078),
  p = n(607070),
  f = n(689938),
  g = n(698032),
  _ = n(493978),
  C = n(932135);

function b(e) {
  let {
    endDate: t
  } = e, {
    days: n,
    hours: i,
    minutes: a,
    seconds: o
  } = (0, u.Z)(t), s = function(e, t, n, r) {
    let i = (e, t) => "".concat(e.toString().padStart(2, "0")).concat(t),
      a = [];
    return e > 0 && a.push(i(e, f.Z.Messages.COUNTDOWN_UNITS_DAYS)), (t > 0 || a.length > 0) && a.push(i(t, f.Z.Messages.COUNTDOWN_UNITS_HOURS)), (n > 0 || a.length > 0) && a.push(i(n, f.Z.Messages.COUNTDOWN_UNITS_MINUTES)), a.push(i(r, f.Z.Messages.COUNTDOWN_UNITS_SECONDS)), a.join(":")
  }(n, i, a, o);
  return (0, r.jsx)(d.Text, {
    variant: "heading-md/medium",
    className: g.countdown,
    tag: "div",
    children: (0, r.jsx)("div", {
      role: "timer",
      "aria-relevant": "all",
      children: s
    })
  })
}
let m = i.memo(function(e) {
  let {
    unpublishedAt: t,
    isVisible: n,
    displayOptions: i,
    isFullScreen: a
  } = e, u = (0, l.e7)([p.Z], () => p.Z.useReducedMotion), f = (0, s.useSpring)({
    transform: "translateX(-50%) ".concat(n ? "translateY(-75%)" : "translateY(0%)"),
    opacity: n ? 1 : 0,
    config: {
      tension: 120,
      friction: 12
    },
    immediate: u
  });
  return (0, r.jsxs)(s.animated.div, {
    className: o()([g.countDownWrapper, a && g.fullScreenWrapper, c.tq && g.mobileWrapper]),
    role: "status",
    style: {
      ...i.style,
      ...f
    },
    children: [(0, r.jsx)(d.Text, {
      variant: "text-md/medium",
      className: g.countdownLabel,
      children: i.label()
    }), null != i.iconSrc && (0, r.jsx)("img", {
      src: i.iconSrc,
      className: g.countdownIcon,
      alt: "",
      "aria-hidden": !0
    }), (0, r.jsx)(b, {
      endDate: t
    }), (0, r.jsx)("img", {
      src: _,
      className: o()(g.sparkles, g.left),
      alt: "",
      "aria-hidden": !0
    }), (0, r.jsx)("img", {
      src: C,
      className: o()(g.sparkles, g.right),
      alt: "",
      "aria-hidden": !0
    })]
  })
})