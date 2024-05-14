"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("685626"),
  o = s("748780"),
  d = s("481060"),
  u = s("442837"),
  c = s("607070"),
  S = s("663389"),
  E = s("107757");

function T(e) {
  let {
    children: t,
    className: s,
    onFlashEnd: l,
    animationDelay: S = 500
  } = e, T = d.tokens.colors.TEXT_LINK, f = (0, u.useStateFromStores)([c.default], () => c.default.useReducedMotion), m = (0, d.useToken)(T).spring({
    opacity: 0
  }), _ = (0, d.useToken)(T).spring({
    opacity: .1
  }), g = (0, d.useToken)(T).spring({
    opacity: 0
  }), I = (0, d.useToken)(T).spring({
    opacity: 1
  }), h = e => {
    e.finished && (null == l || l())
  }, [N, p] = (0, r.useSpring)(() => ({
    immediate: !0,
    from: {
      backgroundColor: m,
      borderColor: m
    }
  })), C = S + 200 + 200, A = f ? 0 : 200;
  return n.useEffect(() => {
    p({
      reset: !0,
      immediate: !1,
      to: {
        backgroundColor: m,
        borderColor: m
      },
      config: {
        duration: A,
        easing: o.default.Easing.ease
      }
    }), p({
      delay: S,
      immediate: f,
      to: [{
        backgroundColor: _,
        borderColor: I
      }],
      config: {
        duration: A,
        easing: o.default.Easing.ease
      }
    }), p({
      delay: C,
      immediate: f,
      to: [{
        backgroundColor: g,
        borderColor: g
      }],
      config: {
        duration: A,
        easing: o.default.Easing.ease
      },
      onRest: h
    })
  }, [p]), (0, a.jsx)(r.animated.div, {
    style: N,
    className: i()(E.settingsItemHighlight, s),
    children: t
  })
}

function f(e) {
  let {
    children: t,
    scrollPosition: s,
    animationDelay: l
  } = e, i = (0, u.useStateFromStores)([S.default], () => S.default.getScrollPosition() === s), [r, o] = n.useState(!1);
  return (n.useEffect(() => {
    i && o(!0)
  }, [i]), r) ? (0, a.jsx)(T, {
    animationDelay: l,
    onFlashEnd: () => o(!1),
    children: t
  }) : (0, a.jsx)(a.Fragment, {
    children: t
  })
}