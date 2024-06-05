"use strict";
s.r(t), s.d(t, {
  CollectiblesCountdown: function() {
    return m
  }
}), s("653041");
var a = s("735250"),
  l = s("470079"),
  n = s("120356"),
  r = s.n(n),
  i = s("920906"),
  o = s("873546"),
  u = s("399606"),
  c = s("481060"),
  d = s("774078"),
  f = s("607070"),
  C = s("689938"),
  E = s("549622");

function p(e) {
  let {
    endDate: t
  } = e, {
    days: s,
    hours: l,
    minutes: n,
    seconds: r
  } = (0, d.default)(t), i = function(e, t, s, a) {
    let l = (e, t) => "".concat(e.toString().padStart(2, "0")).concat(t),
      n = [];
    return e > 0 && n.push(l(e, C.default.Messages.COUNTDOWN_UNITS_DAYS)), (t > 0 || n.length > 0) && n.push(l(t, C.default.Messages.COUNTDOWN_UNITS_HOURS)), (s > 0 || n.length > 0) && n.push(l(s, C.default.Messages.COUNTDOWN_UNITS_MINUTES)), n.push(l(a, C.default.Messages.COUNTDOWN_UNITS_SECONDS)), n.join(":")
  }(s, l, n, r);
  return (0, a.jsx)(c.Text, {
    variant: "heading-md/medium",
    className: E.countdown,
    tag: "div",
    children: (0, a.jsx)("div", {
      role: "timer",
      "aria-relevant": "all",
      children: i
    })
  })
}
let m = l.memo(function(e) {
  let {
    unpublishedAt: t,
    isVisible: s,
    displayOptions: l,
    isFullScreen: n
  } = e, d = (0, u.useStateFromStores)([f.default], () => f.default.useReducedMotion), C = (0, i.useSpring)({
    transform: "translateX(-50%) ".concat(s ? "translateY(-100%)" : "translateY(0%)"),
    opacity: s ? 1 : 0,
    config: {
      tension: 120,
      friction: 12
    },
    immediate: d
  });
  return (0, a.jsxs)(i.animated.div, {
    className: r()([E.countDownWrapper, n && E.fullScreenWrapper, o.isMobile && E.mobileWrapper]),
    role: "status",
    style: {
      backgroundColor: l.backgroundColor,
      boxShadow: l.boxShadow,
      color: l.labelColor,
      ...C
    },
    children: [null != l.iconSrc && (0, a.jsx)("img", {
      src: l.iconSrc,
      className: E.countdownIcon,
      alt: "",
      "aria-hidden": !0
    }), (0, a.jsx)(c.Heading, {
      variant: "heading-md/medium",
      className: E.countdownLabel,
      children: l.label()
    }), (0, a.jsx)(c.Heading, {
      variant: "heading-md/medium",
      className: E.countdown,
      children: "—"
    }), (0, a.jsx)(p, {
      endDate: t
    })]
  })
})