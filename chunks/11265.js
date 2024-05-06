"use strict";
a.r(t), a("47120");
var n = a("735250"),
  i = a("470079"),
  r = a("120356"),
  s = a.n(r),
  l = a("718017"),
  o = a("442837"),
  c = a("481060"),
  d = a("393238"),
  u = a("607070"),
  f = a("689938"),
  m = a("532136");
t.default = i.memo(function(e) {
  let {
    renderHeader: t,
    children: a,
    isExpanded: r,
    isStuck: h,
    onExpand: E,
    disableAnimation: T,
    disableBackground: p
  } = e, _ = (0, o.useStateFromStores)([u.default], () => u.default.useReducedMotion), [C, g] = i.useState(!0), [x, I] = i.useState(!1), {
    ref: v,
    height: N = 0
  } = (0, d.default)(), {
    ref: A,
    height: S = 0
  } = (0, d.default)(), [R, L] = i.useState(r), M = (0, l.useSpring)({
    height: R ? S + N : N,
    immediate: C || _ || T,
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
  return i.useLayoutEffect(() => {
    I(!1), L(r)
  }, [r]), i.useLayoutEffect(() => {
    let e = setTimeout(() => {
      g(!1)
    }, 100);
    return () => clearTimeout(e)
  }, []), (0, n.jsx)(c.Clickable, {
    className: s()(m.editCard, {
      [m.toggled]: r,
      [m.noBackground]: p
    }),
    children: (0, n.jsxs)(l.animated.div, {
      className: s()(m.contentExpandContainer, {
        [m.showOverflow]: r && x
      }),
      style: M,
      children: [(0, n.jsx)(c.Clickable, {
        innerRef: v,
        onClick: h ? void 0 : E,
        className: s()(m.innerHeader, {
          [m.toggled]: r && h
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