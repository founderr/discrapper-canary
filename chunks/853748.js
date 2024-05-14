"use strict";
l.r(t), l.d(t, {
  CollectiblesCountdown: function() {
    return E
  }
}), l("653041");
var a = l("735250"),
  s = l("470079"),
  r = l("120356"),
  n = l.n(r),
  i = l("685626"),
  o = l("873546"),
  u = l("399606"),
  c = l("481060"),
  d = l("774078"),
  f = l("607070"),
  C = l("689938"),
  m = l("549622");

function p(e) {
  let {
    endDate: t
  } = e, {
    days: l,
    hours: s,
    minutes: r,
    seconds: n
  } = (0, d.default)(t), i = function(e, t, l, a) {
    let s = (e, t) => "".concat(e.toString().padStart(2, "0")).concat(t),
      r = [];
    return e > 0 && r.push(s(e, C.default.Messages.COUNTDOWN_UNITS_DAYS)), (t > 0 || r.length > 0) && r.push(s(t, C.default.Messages.COUNTDOWN_UNITS_HOURS)), (l > 0 || r.length > 0) && r.push(s(l, C.default.Messages.COUNTDOWN_UNITS_MINUTES)), r.push(s(a, C.default.Messages.COUNTDOWN_UNITS_SECONDS)), r.join(":")
  }(l, s, r, n);
  return (0, a.jsx)(c.Text, {
    variant: "heading-md/medium",
    className: m.countdown,
    tag: "div",
    children: (0, a.jsx)("div", {
      role: "timer",
      "aria-relevant": "all",
      children: i
    })
  })
}
let E = s.memo(function(e) {
  let {
    unpublishedAt: t,
    isVisible: l,
    displayOptions: s,
    isFullScreen: r
  } = e, d = (0, u.useStateFromStores)([f.default], () => f.default.useReducedMotion), C = (0, i.useSpring)({
    transform: "translateX(-50%) ".concat(l ? "translateY(-100%)" : "translateY(0%)"),
    opacity: l ? 1 : 0,
    config: {
      tension: 120,
      friction: 12
    },
    immediate: d
  });
  return (0, a.jsxs)(i.animated.div, {
    className: n()([m.countDownWrapper, r && m.fullScreenWrapper, o.isMobile && m.mobileWrapper]),
    role: "status",
    style: {
      backgroundColor: s.backgroundColor,
      boxShadow: s.boxShadow,
      color: s.labelColor,
      ...C
    },
    children: [null != s.iconSrc && (0, a.jsx)("img", {
      src: s.iconSrc,
      className: m.countdownIcon,
      alt: "",
      "aria-hidden": !0
    }), (0, a.jsx)(c.Heading, {
      variant: "heading-md/medium",
      className: m.countdownLabel,
      children: s.label()
    }), (0, a.jsx)(c.Heading, {
      variant: "heading-md/medium",
      className: m.countdown,
      children: "—"
    }), (0, a.jsx)(p, {
      endDate: t
    })]
  })
})