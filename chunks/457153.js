var s = n(735250),
  o = n(470079),
  r = n(120356),
  a = n.n(r),
  l = n(920906),
  i = n(759853),
  c = n(95985),
  u = n(743294),
  d = n(232604);
let p = o.forwardRef(function(e, t) {
  var n;
  let {
    className: r,
    expansionSpring: p,
    isExpanded: x,
    isExpansionAnimationComplete: m,
    quest: g
  } = e, h = o.useRef(null), C = (null === (n = g.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null;
  return (0, s.jsxs)(l.animated.div, {
    ref: t,
    "aria-hidden": x && m,
    className: a()(r, d.contentCollapsed, {
      [d.contentCollapsedExpanded]: x,
      [d.contentCollapsedAccepted]: C
    }),
    style: {
      opacity: p.to({
        range: [0, 1],
        output: [1, 0]
      })
    },
    children: [C ? (0, s.jsx)("div", {
      className: d.postEnrollmentBackground,
      style: {
        backgroundImage: "linear-gradient(90deg, ".concat(u.aY, ", ").concat(u.v6, ")")
      }
    }) : null, (0, s.jsx)(i.Z, {
      progressBarRef: h,
      quest: g,
      isExpanded: x
    }), (0, s.jsx)("div", {
      className: d.contentCollapsedWrapper,
      children: C ? (0, s.jsx)(c.Z, {
        quest: g,
        progressBarRef: h,
        isExpanded: !1
      }) : null
    })]
  })
});
t.Z = p