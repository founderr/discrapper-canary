"use strict";
n.r(t), n("47120");
var a = n("735250"),
  r = n("470079"),
  i = n("120356"),
  s = n.n(i),
  l = n("718017"),
  o = n("442837"),
  c = n("481060"),
  d = n("393238"),
  u = n("607070"),
  f = n("689938"),
  m = n("532136");
t.default = r.memo(function(e) {
  let {
    renderHeader: t,
    children: n,
    isExpanded: i,
    isStuck: h,
    onExpand: p,
    disableAnimation: T,
    disableBackground: E
  } = e, C = (0, o.useStateFromStores)([u.default], () => u.default.useReducedMotion), [_, g] = r.useState(!0), [x, I] = r.useState(!1), {
    ref: v,
    height: N = 0
  } = (0, d.default)(), {
    ref: S,
    height: A = 0
  } = (0, d.default)(), [L, b] = r.useState(i), R = (0, l.useSpring)({
    height: L ? A + N : N,
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
    I(!1), b(i)
  }, [i]), r.useLayoutEffect(() => {
    let e = setTimeout(() => {
      g(!1)
    }, 100);
    return () => clearTimeout(e)
  }, []), (0, a.jsx)(c.Clickable, {
    className: s()(m.editCard, {
      [m.toggled]: i,
      [m.noBackground]: E
    }),
    children: (0, a.jsxs)(l.animated.div, {
      className: s()(m.contentExpandContainer, {
        [m.showOverflow]: i && x
      }),
      style: R,
      children: [(0, a.jsx)(c.Clickable, {
        innerRef: v,
        onClick: h ? void 0 : p,
        className: s()(m.innerHeader, {
          [m.toggled]: i && h
        }),
        "aria-label": f.default.Messages.EXPAND,
        children: t
      }), (0, a.jsx)("div", {
        ref: S,
        children: n
      })]
    })
  })
})