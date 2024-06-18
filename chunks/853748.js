"use strict";
t.d(s, {
  $: function() {
    return p
  }
}), t(653041);
var n = t(735250),
  a = t(470079),
  r = t(120356),
  l = t.n(r),
  i = t(920906),
  o = t(873546),
  c = t(399606),
  u = t(481060),
  d = t(774078),
  C = t(607070),
  E = t(689938),
  f = t(549622);

function m(e) {
  let {
    endDate: s
  } = e, {
    days: t,
    hours: a,
    minutes: r,
    seconds: l
  } = (0, d.Z)(s), i = function(e, s, t, n) {
    let a = (e, s) => "".concat(e.toString().padStart(2, "0")).concat(s),
      r = [];
    return e > 0 && r.push(a(e, E.Z.Messages.COUNTDOWN_UNITS_DAYS)), (s > 0 || r.length > 0) && r.push(a(s, E.Z.Messages.COUNTDOWN_UNITS_HOURS)), (t > 0 || r.length > 0) && r.push(a(t, E.Z.Messages.COUNTDOWN_UNITS_MINUTES)), r.push(a(n, E.Z.Messages.COUNTDOWN_UNITS_SECONDS)), r.join(":")
  }(t, a, r, l);
  return (0, n.jsx)(u.Text, {
    variant: "heading-md/medium",
    className: f.countdown,
    tag: "div",
    children: (0, n.jsx)("div", {
      role: "timer",
      "aria-relevant": "all",
      children: i
    })
  })
}
let p = a.memo(function(e) {
  let {
    unpublishedAt: s,
    isVisible: t,
    displayOptions: a,
    isFullScreen: r
  } = e, d = (0, c.e7)([C.Z], () => C.Z.useReducedMotion), E = (0, i.useSpring)({
    transform: "translateX(-50%) ".concat(t ? "translateY(-100%)" : "translateY(0%)"),
    opacity: t ? 1 : 0,
    config: {
      tension: 120,
      friction: 12
    },
    immediate: d
  });
  return (0, n.jsxs)(i.animated.div, {
    className: l()([f.countDownWrapper, r && f.fullScreenWrapper, o.tq && f.mobileWrapper]),
    role: "status",
    style: {
      backgroundColor: a.backgroundColor,
      boxShadow: a.boxShadow,
      color: a.labelColor,
      ...E
    },
    children: [null != a.iconSrc && (0, n.jsx)("img", {
      src: a.iconSrc,
      className: f.countdownIcon,
      alt: "",
      "aria-hidden": !0
    }), (0, n.jsx)(u.Heading, {
      variant: "heading-md/medium",
      className: f.countdownLabel,
      children: a.label()
    }), (0, n.jsx)(u.Heading, {
      variant: "heading-md/medium",
      className: f.countdown,
      children: "—"
    }), (0, n.jsx)(m, {
      endDate: s
    })]
  })
})