"use strict";
a.r(t), a.d(t, {
  CollectiblesCountdown: function() {
    return g
  }
}), a("653041");
var s = a("735250"),
  r = a("470079"),
  n = a("120356"),
  l = a.n(n),
  o = a("920906"),
  i = a("873546"),
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
    hours: r,
    minutes: n,
    seconds: l
  } = (0, d.default)(t), o = function(e, t, a, s) {
    let r = (e, t) => "".concat(e.toString().padStart(2, "0")).concat(t),
      n = [];
    return e > 0 && n.push(r(e, C.default.Messages.COUNTDOWN_UNITS_DAYS)), (t > 0 || n.length > 0) && n.push(r(t, C.default.Messages.COUNTDOWN_UNITS_HOURS)), (a > 0 || n.length > 0) && n.push(r(a, C.default.Messages.COUNTDOWN_UNITS_MINUTES)), n.push(r(s, C.default.Messages.COUNTDOWN_UNITS_SECONDS)), n.join(":")
  }(a, r, n, l);
  return (0, s.jsx)(u.Text, {
    variant: "heading-md/medium",
    className: p.countdown,
    tag: "div",
    children: (0, s.jsx)("div", {
      role: "timer",
      "aria-relevant": "all",
      children: o
    })
  })
}
let g = r.memo(function(e) {
  let {
    unpublishedAt: t,
    isVisible: a,
    displayOptions: r,
    isFullScreen: n
  } = e, d = (0, c.useStateFromStores)([f.default], () => f.default.useReducedMotion), C = (0, o.useSpring)({
    transform: "translateX(-50%) ".concat(a ? "translateY(-100%)" : "translateY(0%)"),
    opacity: a ? 1 : 0,
    config: {
      tension: 120,
      friction: 12
    },
    immediate: d
  });
  return (0, s.jsxs)(o.animated.div, {
    className: l()([p.countDownWrapper, n && p.fullScreenWrapper, i.isMobile && p.mobileWrapper]),
    role: "status",
    style: {
      backgroundColor: r.backgroundColor,
      boxShadow: r.boxShadow,
      color: r.labelColor,
      ...C
    },
    children: [null != r.iconSrc && (0, s.jsx)("img", {
      src: r.iconSrc,
      className: p.countdownIcon,
      alt: "",
      "aria-hidden": !0
    }), (0, s.jsx)(u.Heading, {
      variant: "heading-md/medium",
      className: p.countdownLabel,
      children: r.label()
    }), (0, s.jsx)(u.Heading, {
      variant: "heading-md/medium",
      className: p.countdown,
      children: "—"
    }), (0, s.jsx)(m, {
      endDate: t
    })]
  })
})