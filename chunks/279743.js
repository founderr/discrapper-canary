t.d(s, {
  Z: function() {
    return S
  }
}), t(47120);
var n = t(735250),
  a = t(470079),
  i = t(120356),
  r = t.n(i),
  o = t(920906),
  l = t(748780),
  c = t(481060),
  d = t(442837),
  _ = t(607070),
  E = t(663389),
  u = t(431726);

function T(e) {
  let {
    children: s,
    className: t,
    onFlashEnd: i,
    animationDelay: E = 500
  } = e, T = c.tokens.colors.TEXT_LINK, S = (0, d.e7)([_.Z], () => _.Z.useReducedMotion), I = (0, c.useToken)(T).spring({
    opacity: 0
  }), N = (0, c.useToken)(T).spring({
    opacity: .1
  }), C = (0, c.useToken)(T).spring({
    opacity: 0
  }), A = (0, c.useToken)(T).spring({
    opacity: 1
  }), m = e => {
    e.finished && (null == i || i())
  }, [O, g] = (0, o.useSpring)(() => ({
    immediate: !0,
    from: {
      backgroundColor: I,
      borderColor: I
    }
  })), h = E + 200 + 200, R = S ? 0 : 200;
  return a.useEffect(() => {
    g({
      reset: !0,
      immediate: !1,
      to: {
        backgroundColor: I,
        borderColor: I
      },
      config: {
        duration: R,
        easing: l.Z.Easing.ease
      }
    }), g({
      delay: E,
      immediate: S,
      to: [{
        backgroundColor: N,
        borderColor: A
      }],
      config: {
        duration: R,
        easing: l.Z.Easing.ease
      }
    }), g({
      delay: h,
      immediate: S,
      to: [{
        backgroundColor: C,
        borderColor: C
      }],
      config: {
        duration: R,
        easing: l.Z.Easing.ease
      },
      onRest: m
    })
  }, [g]), (0, n.jsx)(o.animated.div, {
    style: O,
    className: r()(u.settingsItemHighlight, t),
    children: s
  })
}

function S(e) {
  let {
    children: s,
    scrollPosition: t,
    animationDelay: i
  } = e, r = (0, d.e7)([E.Z], () => E.Z.getScrollPosition() === t), [o, l] = a.useState(!1);
  return (a.useEffect(() => {
    r && l(!0)
  }, [r]), o) ? (0, n.jsx)(T, {
    animationDelay: i,
    onFlashEnd: () => l(!1),
    children: s
  }) : (0, n.jsx)(n.Fragment, {
    children: s
  })
}