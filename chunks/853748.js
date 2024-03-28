"use strict";
a.r(t), a.d(t, {
  CollectiblesCountdown: function() {
    return g
  }
}), a("653041");
var s = a("735250"),
  l = a("470079"),
  r = a("803997"),
  n = a.n(r),
  o = a("718017"),
  i = a("873546"),
  u = a("399606"),
  c = a("481060"),
  d = a("774078"),
  f = a("607070"),
  m = a("689938"),
  p = a("13574");

function C(e) {
  let {
    endDate: t
  } = e, {
    days: a,
    hours: l,
    minutes: r,
    seconds: n
  } = (0, d.default)(t), o = function(e, t, a, s) {
    let l = (e, t) => "".concat(e.toString().padStart(2, "0")).concat(t),
      r = [];
    return e > 0 && r.push(l(e, m.default.Messages.COUNTDOWN_UNITS_DAYS)), (t > 0 || r.length > 0) && r.push(l(t, m.default.Messages.COUNTDOWN_UNITS_HOURS)), (a > 0 || r.length > 0) && r.push(l(a, m.default.Messages.COUNTDOWN_UNITS_MINUTES)), r.push(l(s, m.default.Messages.COUNTDOWN_UNITS_SECONDS)), r.join(":")
  }(a, l, r, n);
  return (0, s.jsx)(c.Heading, {
    variant: "heading-md/medium",
    className: p.countdown,
    children: o
  })
}
let g = l.memo(function(e) {
  let {
    unpublishedAt: t,
    isVisible: a,
    displayOptions: l,
    isFullScreen: r
  } = e, d = (0, u.useStateFromStores)([f.default], () => f.default.useReducedMotion), m = (0, o.useSpring)({
    transform: "translateX(-50%) ".concat(a ? "translateY(-100%)" : "translateY(0%)"),
    opacity: a ? 1 : 0,
    config: {
      tension: 120,
      friction: 12
    },
    immediate: d
  });
  return (0, s.jsxs)(o.animated.div, {
    className: n()([p.countDownWrapper, r && p.fullScreenWrapper, i.isMobile && p.mobileWrapper]),
    "aria-live": "polite",
    style: {
      backgroundColor: l.backgroundColor,
      boxShadow: l.boxShadow,
      color: l.labelColor,
      ...m
    },
    children: [null != l.iconSrc && (0, s.jsx)("img", {
      src: l.iconSrc,
      className: p.countdownIcon,
      alt: "",
      "aria-hidden": !0
    }), (0, s.jsx)(c.Heading, {
      variant: "heading-md/medium",
      className: p.countdownLabel,
      children: l.label()
    }), (0, s.jsx)(c.Heading, {
      variant: "heading-md/medium",
      className: p.countdown,
      children: "—"
    }), (0, s.jsx)(C, {
      endDate: t
    })]
  })
})