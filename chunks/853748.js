"use strict";
s.r(t), s.d(t, {
  CollectiblesCountdown: function() {
    return g
  }
}), s("653041");
var a = s("735250"),
  l = s("470079"),
  r = s("120356"),
  n = s.n(r),
  i = s("920906"),
  o = s("873546"),
  c = s("399606"),
  u = s("481060"),
  d = s("774078"),
  f = s("607070"),
  C = s("689938"),
  p = s("549622");

function m(e) {
  let {
    endDate: t
  } = e, {
    days: s,
    hours: l,
    minutes: r,
    seconds: n
  } = (0, d.default)(t), i = function(e, t, s, a) {
    let l = (e, t) => "".concat(e.toString().padStart(2, "0")).concat(t),
      r = [];
    return e > 0 && r.push(l(e, C.default.Messages.COUNTDOWN_UNITS_DAYS)), (t > 0 || r.length > 0) && r.push(l(t, C.default.Messages.COUNTDOWN_UNITS_HOURS)), (s > 0 || r.length > 0) && r.push(l(s, C.default.Messages.COUNTDOWN_UNITS_MINUTES)), r.push(l(a, C.default.Messages.COUNTDOWN_UNITS_SECONDS)), r.join(":")
  }(s, l, r, n);
  return (0, a.jsx)(u.Text, {
    variant: "heading-md/medium",
    className: p.countdown,
    tag: "div",
    children: (0, a.jsx)("div", {
      role: "timer",
      "aria-relevant": "all",
      children: i
    })
  })
}
let g = l.memo(function(e) {
  let {
    unpublishedAt: t,
    isVisible: s,
    displayOptions: l,
    isFullScreen: r
  } = e, d = (0, c.useStateFromStores)([f.default], () => f.default.useReducedMotion), C = (0, i.useSpring)({
    transform: "translateX(-50%) ".concat(s ? "translateY(-100%)" : "translateY(0%)"),
    opacity: s ? 1 : 0,
    config: {
      tension: 120,
      friction: 12
    },
    immediate: d
  });
  return (0, a.jsxs)(i.animated.div, {
    className: n()([p.countDownWrapper, r && p.fullScreenWrapper, o.isMobile && p.mobileWrapper]),
    role: "status",
    style: {
      backgroundColor: l.backgroundColor,
      boxShadow: l.boxShadow,
      color: l.labelColor,
      ...C
    },
    children: [null != l.iconSrc && (0, a.jsx)("img", {
      src: l.iconSrc,
      className: p.countdownIcon,
      alt: "",
      "aria-hidden": !0
    }), (0, a.jsx)(u.Heading, {
      variant: "heading-md/medium",
      className: p.countdownLabel,
      children: l.label()
    }), (0, a.jsx)(u.Heading, {
      variant: "heading-md/medium",
      className: p.countdown,
      children: "—"
    }), (0, a.jsx)(m, {
      endDate: t
    })]
  })
})