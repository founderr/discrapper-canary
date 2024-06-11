"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  i = s("120356"),
  l = s.n(i),
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
    onFlashEnd: i,
    animationDelay: S = 500
  } = e, T = d.tokens.colors.TEXT_LINK, _ = (0, u.useStateFromStores)([c.default], () => c.default.useReducedMotion), I = (0, d.useToken)(T).spring({
    opacity: 0
  }), N = (0, d.useToken)(T).spring({
    opacity: .1
  }), g = (0, d.useToken)(T).spring({
    opacity: 0
  }), f = (0, d.useToken)(T).spring({
    opacity: 1
  }), m = e => {
    e.finished && (null == i || i())
  }, [A, C] = (0, r.useSpring)(() => ({
    immediate: !0,
    from: {
      backgroundColor: I,
      borderColor: I
    }
  })), O = S + 200 + 200, h = _ ? 0 : 200;
  return n.useEffect(() => {
    C({
      reset: !0,
      immediate: !1,
      to: {
        backgroundColor: I,
        borderColor: I
      },
      config: {
        duration: h,
        easing: o.default.Easing.ease
      }
    }), C({
      delay: S,
      immediate: _,
      to: [{
        backgroundColor: N,
        borderColor: f
      }],
      config: {
        duration: h,
        easing: o.default.Easing.ease
      }
    }), C({
      delay: O,
      immediate: _,
      to: [{
        backgroundColor: g,
        borderColor: g
      }],
      config: {
        duration: h,
        easing: o.default.Easing.ease
      },
      onRest: m
    })
  }, [C]), (0, a.jsx)(r.animated.div, {
    style: A,
    className: l()(E.settingsItemHighlight, s),
    children: t
  })
}

function _(e) {
  let {
    children: t,
    scrollPosition: s,
    animationDelay: i
  } = e, l = (0, u.useStateFromStores)([S.default], () => S.default.getScrollPosition() === s), [r, o] = n.useState(!1);
  return (n.useEffect(() => {
    l && o(!0)
  }, [l]), r) ? (0, a.jsx)(T, {
    animationDelay: i,
    onFlashEnd: () => o(!1),
    children: t
  }) : (0, a.jsx)(a.Fragment, {
    children: t
  })
}