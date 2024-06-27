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
  }), m = (0, c.useToken)(T).spring({
    opacity: 1
  }), A = e => {
    e.finished && (null == i || i())
  }, [g, O] = (0, o.useSpring)(() => ({
    immediate: !0,
    from: {
      backgroundColor: I,
      borderColor: I
    }
  })), h = E + 200 + 200, p = S ? 0 : 200;
  return a.useEffect(() => {
    O({
      reset: !0,
      immediate: !1,
      to: {
        backgroundColor: I,
        borderColor: I
      },
      config: {
        duration: p,
        easing: l.Z.Easing.ease
      }
    }), O({
      delay: E,
      immediate: S,
      to: [{
        backgroundColor: N,
        borderColor: m
      }],
      config: {
        duration: p,
        easing: l.Z.Easing.ease
      }
    }), O({
      delay: h,
      immediate: S,
      to: [{
        backgroundColor: C,
        borderColor: C
      }],
      config: {
        duration: p,
        easing: l.Z.Easing.ease
      },
      onRest: A
    })
  }, [O]), (0, n.jsx)(o.animated.div, {
    style: g,
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