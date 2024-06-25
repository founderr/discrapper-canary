var o = n(735250),
  s = n(470079),
  r = n(120356),
  a = n.n(r),
  i = n(920906),
  l = n(759853),
  c = n(95985),
  d = n(743294),
  u = n(232604);
let p = s.forwardRef(function(e, t) {
  var n;
  let {
    className: r,
    expansionSpring: p,
    isExpanded: m,
    isExpansionAnimationComplete: x,
    quest: g
  } = e, f = s.useRef(null), C = (null === (n = g.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null;
  return (0, o.jsxs)(i.animated.div, {
    ref: t,
    "aria-hidden": m && x,
    className: a()(r, u.contentCollapsed, {
      [u.contentCollapsedExpanded]: m,
      [u.contentCollapsedAccepted]: C
    }),
    style: {
      opacity: p.to({
        range: [0, 1],
        output: [1, 0]
      })
    },
    children: [C ? (0, o.jsx)("div", {
      className: u.postEnrollmentBackground,
      style: {
        backgroundImage: "linear-gradient(90deg, ".concat(d.aY, ", ").concat(d.v6, ")")
      }
    }) : null, (0, o.jsx)(l.Z, {
      progressBarRef: f,
      quest: g,
      isExpanded: m
    }), (0, o.jsx)("div", {
      className: u.contentCollapsedWrapper,
      children: C ? (0, o.jsx)(c.Z, {
        quest: g,
        progressBarRef: f,
        isExpanded: !1
      }) : null
    })]
  })
});
t.Z = p