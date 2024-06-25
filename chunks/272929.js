n.d(t, {
  Z: function() {
    return u
  }
});
var l = n(735250);
n(470079);
var i = n(920906),
  s = n(481060),
  a = n(871499),
  r = n(689938),
  o = n(288768);
let c = (0, i.animated)(e => {
  let {
    percentComplete: t
  } = e, n = 20;
  return (0, l.jsx)("svg", {
    className: o.countdown,
    width: 40,
    height: 40,
    viewBox: "0 0 ".concat(40, " ").concat(40),
    children: (0, l.jsx)("circle", {
      style: {
        strokeDashoffset: Math.round(100 * t)
      },
      className: o.progress,
      cx: n,
      cy: n,
      r: n - 6,
      fill: "none",
      stroke: "#4F545C",
      pathLength: "100"
    })
  })
});

function u(e) {
  let {
    totalCooldownSeconds: t,
    remainingCooldownSeconds: n,
    onClick: u,
    onKeyDown: d,
    onMouseEnter: h,
    onMouseLeave: m,
    isActive: E = !1,
    isCenterButton: p = !1,
    ...g
  } = e, f = n > 0, C = (0, i.useSpring)({
    percentComplete: 0 !== n ? (t - n) / t : 0,
    config: {
      ...i.config.molasses,
      duration: 1e3
    }
  }), _ = f ? r.Z.Messages.VOICE_CHANNEL_EFFECTS_COOLDOWN.format({
    seconds: n
  }) : void 0, I = p ? a.d : a.Z;
  return (0, l.jsxs)("div", {
    className: o.container,
    children: [f ? (0, l.jsx)(c, {
      percentComplete: C.percentComplete
    }) : null, (0, l.jsx)(I, {
      ...g,
      disabled: f,
      label: _,
      iconComponent: s.ReactionIcon,
      onClick: u,
      onKeyDown: d,
      onMouseEnter: h,
      onMouseLeave: m,
      isActive: E,
      grow: !1
    })]
  })
}