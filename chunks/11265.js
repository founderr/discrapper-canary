"use strict";
a.r(t), a("47120");
var n = a("735250"),
  r = a("470079"),
  i = a("120356"),
  s = a.n(i),
  l = a("685626"),
  o = a("442837"),
  d = a("481060"),
  c = a("393238"),
  u = a("607070"),
  f = a("689938"),
  m = a("364267");
t.default = r.memo(function(e) {
  let {
    renderHeader: t,
    children: a,
    isExpanded: i,
    isStuck: h,
    onExpand: E,
    disableAnimation: T,
    disableBackground: p
  } = e, C = (0, o.useStateFromStores)([u.default], () => u.default.useReducedMotion), [_, x] = r.useState(!0), [g, I] = r.useState(!1), {
    ref: v,
    height: N = 0
  } = (0, c.default)(), {
    ref: A,
    height: S = 0
  } = (0, c.default)(), [R, M] = r.useState(i), L = (0, l.useSpring)({
    height: R ? S + N : N,
    immediate: _ || C || T,
    config: {
      ...l.config.stiff,
      clamp: !0
    },
    onStart: () => {
      I(!1)
    },
    onRest: () => {
      I(!0)
    }
  });
  return r.useLayoutEffect(() => {
    I(!1), M(i)
  }, [i]), r.useLayoutEffect(() => {
    let e = setTimeout(() => {
      x(!1)
    }, 100);
    return () => clearTimeout(e)
  }, []), (0, n.jsx)(d.Clickable, {
    className: s()(m.editCard, {
      [m.toggled]: i,
      [m.noBackground]: p
    }),
    children: (0, n.jsxs)(l.animated.div, {
      className: s()(m.contentExpandContainer, {
        [m.showOverflow]: i && g
      }),
      style: L,
      children: [(0, n.jsx)(d.Clickable, {
        innerRef: v,
        onClick: h ? void 0 : E,
        className: s()(m.innerHeader, {
          [m.toggled]: i && h
        }),
        "aria-label": f.default.Messages.EXPAND,
        children: t
      }), (0, n.jsx)("div", {
        ref: A,
        children: a
      })]
    })
  })
})