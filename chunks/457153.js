"use strict";
s.r(t);
var n = s("735250"),
  a = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("920906"),
  o = s("759853"),
  u = s("95985"),
  d = s("743294"),
  c = s("481900");
let E = a.forwardRef(function(e, t) {
  var s;
  let {
    className: l,
    expansionSpring: E,
    isExpanded: f,
    isExpansionAnimationComplete: _,
    quest: h
  } = e, m = a.useRef(null), C = (null === (s = h.userStatus) || void 0 === s ? void 0 : s.enrolledAt) != null;
  return (0, n.jsxs)(r.animated.div, {
    ref: t,
    "aria-hidden": f && _,
    className: i()(l, c.contentCollapsed, {
      [c.contentCollapsedExpanded]: f,
      [c.contentCollapsedAccepted]: C
    }),
    style: {
      opacity: E.to({
        range: [0, 1],
        output: [1, 0]
      })
    },
    children: [C ? (0, n.jsx)("div", {
      className: c.postEnrollmentBackground,
      style: {
        backgroundImage: "linear-gradient(90deg, ".concat(d.QUEST_BAR_V2_BACKGROUND_GRADIENT_LEFT, ", ").concat(d.QUEST_BAR_V2_BACKGROUND_GRADIENT_RIGHT, ")")
      }
    }) : null, (0, n.jsx)(o.default, {
      progressBarRef: m,
      quest: h,
      isExpanded: f
    }), (0, n.jsx)("div", {
      className: c.contentCollapsedWrapper,
      children: C ? (0, n.jsx)(u.default, {
        quest: h,
        progressBarRef: m,
        isExpanded: !1
      }) : null
    })]
  })
});
t.default = E