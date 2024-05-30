"use strict";
a.r(t), a.d(t, {
  CollectiblesCountdown: function() {
    return g
  }
}), a("653041");
var l = a("735250"),
  s = a("470079"),
  r = a("120356"),
  n = a.n(r),
  i = a("920906"),
  o = a("873546"),
  c = a("399606"),
  u = a("481060"),
  d = a("774078"),
  f = a("607070"),
  C = a("689938"),
  p = a("549622");

function m(e) {
  let {
    endDate: t
  } = e, {
    days: a,
    hours: s,
    minutes: r,
    seconds: n
  } = (0, d.default)(t), i = function(e, t, a, l) {
    let s = (e, t) => "".concat(e.toString().padStart(2, "0")).concat(t),
      r = [];
    return e > 0 && r.push(s(e, C.default.Messages.COUNTDOWN_UNITS_DAYS)), (t > 0 || r.length > 0) && r.push(s(t, C.default.Messages.COUNTDOWN_UNITS_HOURS)), (a > 0 || r.length > 0) && r.push(s(a, C.default.Messages.COUNTDOWN_UNITS_MINUTES)), r.push(s(l, C.default.Messages.COUNTDOWN_UNITS_SECONDS)), r.join(":")
  }(a, s, r, n);
  return (0, l.jsx)(u.Text, {
    variant: "heading-md/medium",
    className: p.countdown,
    tag: "div",
    children: (0, l.jsx)("div", {
      role: "timer",
      "aria-relevant": "all",
      children: i
    })
  })
}
let g = s.memo(function(e) {
  let {
    unpublishedAt: t,
    isVisible: a,
    displayOptions: s,
    isFullScreen: r
  } = e, d = (0, c.useStateFromStores)([f.default], () => f.default.useReducedMotion), C = (0, i.useSpring)({
    transform: "translateX(-50%) ".concat(a ? "translateY(-100%)" : "translateY(0%)"),
    opacity: a ? 1 : 0,
    config: {
      tension: 120,
      friction: 12
    },
    immediate: d
  });
  return (0, l.jsxs)(i.animated.div, {
    className: n()([p.countDownWrapper, r && p.fullScreenWrapper, o.isMobile && p.mobileWrapper]),
    role: "status",
    style: {
      backgroundColor: s.backgroundColor,
      boxShadow: s.boxShadow,
      color: s.labelColor,
      ...C
    },
    children: [null != s.iconSrc && (0, l.jsx)("img", {
      src: s.iconSrc,
      className: p.countdownIcon,
      alt: "",
      "aria-hidden": !0
    }), (0, l.jsx)(u.Heading, {
      variant: "heading-md/medium",
      className: p.countdownLabel,
      children: s.label()
    }), (0, l.jsx)(u.Heading, {
      variant: "heading-md/medium",
      className: p.countdown,
      children: "—"
    }), (0, l.jsx)(m, {
      endDate: t
    })]
  })
})