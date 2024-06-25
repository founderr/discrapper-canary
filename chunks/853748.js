"use strict";
s.d(t, {
  $: function() {
    return h
  }
}), s(653041);
var n = s(735250),
  r = s(470079),
  a = s(120356),
  i = s.n(a),
  l = s(920906),
  o = s(873546),
  c = s(399606),
  u = s(481060),
  d = s(774078),
  C = s(607070),
  f = s(689938),
  p = s(698032),
  g = s(493978),
  E = s(932135);

function m(e) {
  let {
    endDate: t
  } = e, {
    days: s,
    hours: r,
    minutes: a,
    seconds: i
  } = (0, d.Z)(t), l = function(e, t, s, n) {
    let r = (e, t) => "".concat(e.toString().padStart(2, "0")).concat(t),
      a = [];
    return e > 0 && a.push(r(e, f.Z.Messages.COUNTDOWN_UNITS_DAYS)), (t > 0 || a.length > 0) && a.push(r(t, f.Z.Messages.COUNTDOWN_UNITS_HOURS)), (s > 0 || a.length > 0) && a.push(r(s, f.Z.Messages.COUNTDOWN_UNITS_MINUTES)), a.push(r(n, f.Z.Messages.COUNTDOWN_UNITS_SECONDS)), a.join(":")
  }(s, r, a, i);
  return (0, n.jsx)(u.Text, {
    variant: "heading-md/medium",
    className: p.countdown,
    tag: "div",
    children: (0, n.jsx)("div", {
      role: "timer",
      "aria-relevant": "all",
      children: l
    })
  })
}
let h = r.memo(function(e) {
  let {
    unpublishedAt: t,
    isVisible: s,
    displayOptions: r,
    isFullScreen: a
  } = e, d = (0, c.e7)([C.Z], () => C.Z.useReducedMotion), f = (0, l.useSpring)({
    transform: "translateX(-50%) ".concat(s ? "translateY(-75%)" : "translateY(0%)"),
    opacity: s ? 1 : 0,
    config: {
      tension: 120,
      friction: 12
    },
    immediate: d
  });
  return (0, n.jsxs)(l.animated.div, {
    className: i()([p.countDownWrapper, a && p.fullScreenWrapper, o.tq && p.mobileWrapper]),
    role: "status",
    style: {
      ...r.style,
      ...f
    },
    children: [(0, n.jsx)(u.Text, {
      variant: "text-md/medium",
      className: p.countdownLabel,
      children: r.label()
    }), null != r.iconSrc && (0, n.jsx)("img", {
      src: r.iconSrc,
      className: p.countdownIcon,
      alt: "",
      "aria-hidden": !0
    }), (0, n.jsx)(m, {
      endDate: t
    }), (0, n.jsx)("img", {
      src: g,
      className: i()(p.sparkles, p.left),
      alt: "",
      "aria-hidden": !0
    }), (0, n.jsx)("img", {
      src: E,
      className: i()(p.sparkles, p.right),
      alt: "",
      "aria-hidden": !0
    })]
  })
})