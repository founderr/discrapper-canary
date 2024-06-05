"use strict";
a.r(t), a.d(t, {
  CollectiblesCountdown: function() {
    return g
  }
}), a("653041");
var s = a("735250"),
  l = a("470079"),
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
    hours: l,
    minutes: r,
    seconds: n
  } = (0, d.default)(t), i = function(e, t, a, s) {
    let l = (e, t) => "".concat(e.toString().padStart(2, "0")).concat(t),
      r = [];
    return e > 0 && r.push(l(e, C.default.Messages.COUNTDOWN_UNITS_DAYS)), (t > 0 || r.length > 0) && r.push(l(t, C.default.Messages.COUNTDOWN_UNITS_HOURS)), (a > 0 || r.length > 0) && r.push(l(a, C.default.Messages.COUNTDOWN_UNITS_MINUTES)), r.push(l(s, C.default.Messages.COUNTDOWN_UNITS_SECONDS)), r.join(":")
  }(a, l, r, n);
  return (0, s.jsx)(u.Text, {
    variant: "heading-md/medium",
    className: p.countdown,
    tag: "div",
    children: (0, s.jsx)("div", {
      role: "timer",
      "aria-relevant": "all",
      children: i
    })
  })
}
let g = l.memo(function(e) {
  let {
    unpublishedAt: t,
    isVisible: a,
    displayOptions: l,
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
  return (0, s.jsxs)(i.animated.div, {
    className: n()([p.countDownWrapper, r && p.fullScreenWrapper, o.isMobile && p.mobileWrapper]),
    role: "status",
    style: {
      backgroundColor: l.backgroundColor,
      boxShadow: l.boxShadow,
      color: l.labelColor,
      ...C
    },
    children: [null != l.iconSrc && (0, s.jsx)("img", {
      src: l.iconSrc,
      className: p.countdownIcon,
      alt: "",
      "aria-hidden": !0
    }), (0, s.jsx)(u.Heading, {
      variant: "heading-md/medium",
      className: p.countdownLabel,
      children: l.label()
    }), (0, s.jsx)(u.Heading, {
      variant: "heading-md/medium",
      className: p.countdown,
      children: "—"
    }), (0, s.jsx)(m, {
      endDate: t
    })]
  })
})