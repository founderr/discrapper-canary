"use strict";
a.r(t), a("47120");
var n = a("735250"),
  r = a("470079"),
  s = a("120356"),
  i = a.n(s),
  l = a("920906"),
  o = a("442837"),
  c = a("481060"),
  d = a("393238"),
  u = a("607070"),
  f = a("689938"),
  m = a("364267");
t.default = r.memo(function(e) {
  let {
    renderHeader: t,
    children: a,
    isExpanded: s,
    isStuck: h,
    onExpand: E,
    disableAnimation: p,
    disableBackground: T
  } = e, C = (0, o.useStateFromStores)([u.default], () => u.default.useReducedMotion), [_, x] = r.useState(!0), [g, N] = r.useState(!1), {
    ref: I,
    height: v = 0
  } = (0, d.default)(), {
    ref: A,
    height: S = 0
  } = (0, d.default)(), [L, R] = r.useState(s), y = (0, l.useSpring)({
    height: L ? S + v : v,
    immediate: _ || C || p,
    config: {
      ...l.config.stiff,
      clamp: !0
    },
    onStart: () => {
      N(!1)
    },
    onRest: () => {
      N(!0)
    }
  });
  return r.useLayoutEffect(() => {
    N(!1), R(s)
  }, [s]), r.useLayoutEffect(() => {
    let e = setTimeout(() => {
      x(!1)
    }, 100);
    return () => clearTimeout(e)
  }, []), (0, n.jsx)(c.Clickable, {
    className: i()(m.editCard, {
      [m.toggled]: s,
      [m.noBackground]: T
    }),
    children: (0, n.jsxs)(l.animated.div, {
      className: i()(m.contentExpandContainer, {
        [m.showOverflow]: s && g
      }),
      style: y,
      children: [(0, n.jsx)(c.Clickable, {
        innerRef: I,
        onClick: h ? void 0 : E,
        className: i()(m.innerHeader, {
          [m.toggled]: s && h
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