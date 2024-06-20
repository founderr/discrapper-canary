"use strict";
t.d(s, {
  $: function() {
    return g
  }
}), t(653041);
var n = t(735250),
  a = t(470079),
  r = t(120356),
  i = t.n(r),
  l = t(920906),
  o = t(873546),
  c = t(399606),
  u = t(481060),
  d = t(774078),
  C = t(607070),
  f = t(689938),
  E = t(698032);

function p(e) {
  let {
    endDate: s
  } = e, {
    days: t,
    hours: a,
    minutes: r,
    seconds: i
  } = (0, d.Z)(s), l = function(e, s, t, n) {
    let a = (e, s) => "".concat(e.toString().padStart(2, "0")).concat(s),
      r = [];
    return e > 0 && r.push(a(e, f.Z.Messages.COUNTDOWN_UNITS_DAYS)), (s > 0 || r.length > 0) && r.push(a(s, f.Z.Messages.COUNTDOWN_UNITS_HOURS)), (t > 0 || r.length > 0) && r.push(a(t, f.Z.Messages.COUNTDOWN_UNITS_MINUTES)), r.push(a(n, f.Z.Messages.COUNTDOWN_UNITS_SECONDS)), r.join(":")
  }(t, a, r, i);
  return (0, n.jsx)(u.Text, {
    variant: "heading-md/medium",
    className: E.countdown,
    tag: "div",
    children: (0, n.jsx)("div", {
      role: "timer",
      "aria-relevant": "all",
      children: l
    })
  })
}
let g = a.memo(function(e) {
  let {
    unpublishedAt: s,
    isVisible: t,
    displayOptions: a,
    isFullScreen: r
  } = e, d = (0, c.e7)([C.Z], () => C.Z.useReducedMotion), f = (0, l.useSpring)({
    transform: "translateX(-50%) ".concat(t ? "translateY(-100%)" : "translateY(0%)"),
    opacity: t ? 1 : 0,
    config: {
      tension: 120,
      friction: 12
    },
    immediate: d
  });
  return (0, n.jsxs)(l.animated.div, {
    className: i()([E.countDownWrapper, r && E.fullScreenWrapper, o.tq && E.mobileWrapper]),
    role: "status",
    style: {
      backgroundColor: a.backgroundColor,
      boxShadow: a.boxShadow,
      color: a.labelColor,
      ...f
    },
    children: [null != a.iconSrc && (0, n.jsx)("img", {
      src: a.iconSrc,
      className: E.countdownIcon,
      alt: "",
      "aria-hidden": !0
    }), (0, n.jsx)(u.Heading, {
      variant: "heading-md/medium",
      className: E.countdownLabel,
      children: a.label()
    }), (0, n.jsx)(u.Heading, {
      variant: "heading-md/medium",
      className: E.countdown,
      children: "—"
    }), (0, n.jsx)(p, {
      endDate: s
    })]
  })
})