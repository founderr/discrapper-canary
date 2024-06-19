var s = n(735250),
  a = n(470079),
  i = n(120356),
  l = n.n(i),
  r = n(920906),
  o = n(759853),
  c = n(95985),
  d = n(743294),
  u = n(232604);
let E = a.forwardRef(function(e, t) {
  var n;
  let {
    className: i,
    expansionSpring: E,
    isExpanded: _,
    isExpansionAnimationComplete: h,
    quest: m
  } = e, T = a.useRef(null), C = (null === (n = m.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null;
  return (0, s.jsxs)(r.animated.div, {
    ref: t,
    "aria-hidden": _ && h,
    className: l()(i, u.contentCollapsed, {
      [u.contentCollapsedExpanded]: _,
      [u.contentCollapsedAccepted]: C
    }),
    style: {
      opacity: E.to({
        range: [0, 1],
        output: [1, 0]
      })
    },
    children: [C ? (0, s.jsx)("div", {
      className: u.postEnrollmentBackground,
      style: {
        backgroundImage: "linear-gradient(90deg, ".concat(d.aY, ", ").concat(d.v6, ")")
      }
    }) : null, (0, s.jsx)(o.Z, {
      progressBarRef: T,
      quest: m,
      isExpanded: _
    }), (0, s.jsx)("div", {
      className: u.contentCollapsedWrapper,
      children: C ? (0, s.jsx)(c.Z, {
        quest: m,
        progressBarRef: T,
        isExpanded: !1
      }) : null
    })]
  })
});
t.Z = E