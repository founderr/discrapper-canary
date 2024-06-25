"use strict";
n.d(t, {
  $: function() {
    return m
  }
}), n(653041);
var r = n(735250),
  a = n(470079),
  i = n(120356),
  o = n.n(i),
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
    hours: a,
    minutes: i,
    seconds: o
  } = (0, u.Z)(t), s = function(e, t, n, r) {
    let a = (e, t) => "".concat(e.toString().padStart(2, "0")).concat(t),
      i = [];
    return e > 0 && i.push(a(e, f.Z.Messages.COUNTDOWN_UNITS_DAYS)), (t > 0 || i.length > 0) && i.push(a(t, f.Z.Messages.COUNTDOWN_UNITS_HOURS)), (n > 0 || i.length > 0) && i.push(a(n, f.Z.Messages.COUNTDOWN_UNITS_MINUTES)), i.push(a(r, f.Z.Messages.COUNTDOWN_UNITS_SECONDS)), i.join(":")
  }(n, a, i, o);
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
let m = a.memo(function(e) {
  let {
    unpublishedAt: t,
    isVisible: n,
    displayOptions: a,
    isFullScreen: i
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
    className: o()([g.countDownWrapper, i && g.fullScreenWrapper, c.tq && g.mobileWrapper]),
    role: "status",
    style: {
      ...a.style,
      ...f
    },
    children: [(0, r.jsx)(d.Text, {
      variant: "text-md/medium",
      className: g.countdownLabel,
      children: a.label()
    }), null != a.iconSrc && (0, r.jsx)("img", {
      src: a.iconSrc,
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