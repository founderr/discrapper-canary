"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("920906"),
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
  } = e, T = d.tokens.colors.TEXT_LINK, _ = (0, u.useStateFromStores)([c.default], () => c.default.useReducedMotion), I = (0, d.useToken)(T).spring({
    opacity: 0
  }), N = (0, d.useToken)(T).spring({
    opacity: .1
  }), f = (0, d.useToken)(T).spring({
    opacity: 0
  }), g = (0, d.useToken)(T).spring({
    opacity: 1
  }), m = e => {
    e.finished && (null == l || l())
  }, [C, A] = (0, r.useSpring)(() => ({
    immediate: !0,
    from: {
      backgroundColor: I,
      borderColor: I
    }
  })), h = S + 200 + 200, O = _ ? 0 : 200;
  return n.useEffect(() => {
    A({
      reset: !0,
      immediate: !1,
      to: {
        backgroundColor: I,
        borderColor: I
      },
      config: {
        duration: O,
        easing: o.default.Easing.ease
      }
    }), A({
      delay: S,
      immediate: _,
      to: [{
        backgroundColor: N,
        borderColor: g
      }],
      config: {
        duration: O,
        easing: o.default.Easing.ease
      }
    }), A({
      delay: h,
      immediate: _,
      to: [{
        backgroundColor: f,
        borderColor: f
      }],
      config: {
        duration: O,
        easing: o.default.Easing.ease
      },
      onRest: m
    })
  }, [A]), (0, a.jsx)(r.animated.div, {
    style: C,
    className: i()(E.settingsItemHighlight, s),
    children: t
  })
}

function _(e) {
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