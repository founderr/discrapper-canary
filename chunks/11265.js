"use strict";
s.r(t), s("47120");
var a = s("735250"),
  n = s("470079"),
  i = s("120356"),
  E = s.n(i),
  l = s("685626"),
  _ = s("442837"),
  r = s("481060"),
  u = s("393238"),
  o = s("607070"),
  T = s("689938"),
  d = s("364267");
t.default = n.memo(function(e) {
  let {
    renderHeader: t,
    children: s,
    isExpanded: i,
    isStuck: A,
    onExpand: I,
    disableAnimation: L,
    disableBackground: c
  } = e, N = (0, _.useStateFromStores)([o.default], () => o.default.useReducedMotion), [S, g] = n.useState(!0), [D, C] = n.useState(!1), {
    ref: f,
    height: O = 0
  } = (0, u.default)(), {
    ref: G,
    height: M = 0
  } = (0, u.default)(), [U, R] = n.useState(i), h = (0, l.useSpring)({
    height: U ? M + O : O,
    immediate: S || N || L,
    config: {
      ...l.config.stiff,
      clamp: !0
    },
    onStart: () => {
      C(!1)
    },
    onRest: () => {
      C(!0)
    }
  });
  return n.useLayoutEffect(() => {
    C(!1), R(i)
  }, [i]), n.useLayoutEffect(() => {
    let e = setTimeout(() => {
      g(!1)
    }, 100);
    return () => clearTimeout(e)
  }, []), (0, a.jsx)(r.Clickable, {
    className: E()(d.editCard, {
      [d.toggled]: i,
      [d.noBackground]: c
    }),
    children: (0, a.jsxs)(l.animated.div, {
      className: E()(d.contentExpandContainer, {
        [d.showOverflow]: i && D
      }),
      style: h,
      children: [(0, a.jsx)(r.Clickable, {
        innerRef: f,
        onClick: A ? void 0 : I,
        className: E()(d.innerHeader, {
          [d.toggled]: i && A
        }),
        "aria-label": T.default.Messages.EXPAND,
        children: t
      }), (0, a.jsx)("div", {
        ref: G,
        children: s
      })]
    })
  })
})