t.d(s, {
  Z: function() {
    return u
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  a = t(120356),
  l = t.n(a),
  r = t(920906),
  o = t(748780),
  c = t(481060),
  E = t(442837),
  d = t(607070),
  _ = t(663389),
  T = t(431726);

function S(e) {
  let {
    children: s,
    className: t,
    onFlashEnd: a,
    animationDelay: _ = 500
  } = e, S = c.tokens.colors.TEXT_LINK, u = (0, E.e7)([d.Z], () => d.Z.useReducedMotion), I = (0, c.useToken)(S).spring({
    opacity: 0
  }), N = (0, c.useToken)(S).spring({
    opacity: .1
  }), A = (0, c.useToken)(S).spring({
    opacity: 0
  }), C = (0, c.useToken)(S).spring({
    opacity: 1
  }), O = e => {
    e.finished && (null == a || a())
  }, [m, h] = (0, r.useSpring)(() => ({
    immediate: !0,
    from: {
      backgroundColor: I,
      borderColor: I
    }
  })), g = _ + 200 + 200, R = u ? 0 : 200;
  return i.useEffect(() => {
    h({
      reset: !0,
      immediate: !1,
      to: {
        backgroundColor: I,
        borderColor: I
      },
      config: {
        duration: R,
        easing: o.Z.Easing.ease
      }
    }), h({
      delay: _,
      immediate: u,
      to: [{
        backgroundColor: N,
        borderColor: C
      }],
      config: {
        duration: R,
        easing: o.Z.Easing.ease
      }
    }), h({
      delay: g,
      immediate: u,
      to: [{
        backgroundColor: A,
        borderColor: A
      }],
      config: {
        duration: R,
        easing: o.Z.Easing.ease
      },
      onRest: O
    })
  }, [h]), (0, n.jsx)(r.animated.div, {
    style: m,
    className: l()(T.settingsItemHighlight, t),
    children: s
  })
}

function u(e) {
  let {
    children: s,
    scrollPosition: t,
    animationDelay: a
  } = e, l = (0, E.e7)([_.Z], () => _.Z.getScrollPosition() === t), [r, o] = i.useState(!1);
  return (i.useEffect(() => {
    l && o(!0)
  }, [l]), r) ? (0, n.jsx)(S, {
    animationDelay: a,
    onFlashEnd: () => o(!1),
    children: s
  }) : (0, n.jsx)(n.Fragment, {
    children: s
  })
}