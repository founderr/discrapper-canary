"use strict";
s.r(t), s.d(t, {
  default: function() {
    return T
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("803997"),
  i = s.n(l),
  r = s("718017"),
  o = s("748780"),
  d = s("481060"),
  u = s("442837"),
  c = s("663389"),
  S = s("592145");

function E(e) {
  let {
    children: t,
    className: s,
    onFlashEnd: l,
    animationDelay: u = 500
  } = e, c = d.tokens.colors.TEXT_LINK, E = (0, d.useToken)(c).spring({
    opacity: 0
  }), T = (0, d.useToken)(c).spring({
    opacity: .1
  }), f = (0, d.useToken)(c).spring({
    opacity: 0
  }), m = (0, d.useToken)(c).spring({
    opacity: 1
  }), _ = e => {
    e.finished && (null == l || l())
  }, [g, h] = (0, r.useSpring)(() => ({
    immediate: !0,
    from: {
      backgroundColor: E,
      borderColor: E
    }
  }));
  return n.useEffect(() => {
    h({
      reset: !0,
      immediate: !1,
      to: {
        backgroundColor: E,
        borderColor: E
      },
      config: {
        duration: 200,
        easing: o.default.Easing.ease
      }
    }), h({
      delay: u,
      immediate: !1,
      to: [{
        backgroundColor: T,
        borderColor: m
      }],
      config: {
        duration: 200,
        easing: o.default.Easing.ease
      }
    }), h({
      delay: 200 + u + 200,
      immediate: !1,
      to: [{
        backgroundColor: f,
        borderColor: f
      }],
      config: {
        duration: 200,
        easing: o.default.Easing.ease
      },
      onRest: _
    })
  }, [h]), (0, a.jsx)(r.animated.div, {
    style: g,
    className: i()(S.settingsItemHighlight, s),
    children: t
  })
}

function T(e) {
  let {
    children: t,
    scrollPosition: s,
    animationDelay: l
  } = e, i = (0, u.useStateFromStores)([c.default], () => c.default.getScrollPosition() === s), [r, o] = n.useState(!1);
  return (n.useEffect(() => {
    i && o(!0)
  }, [i]), r) ? (0, a.jsx)(E, {
    animationDelay: l,
    onFlashEnd: () => o(!1),
    children: t
  }) : (0, a.jsx)(a.Fragment, {
    children: t
  })
}