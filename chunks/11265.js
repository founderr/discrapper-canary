"use strict";
n.r(t), n("47120");
var a = n("735250"),
  r = n("470079"),
  s = n("120356"),
  i = n.n(s),
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
    isExpanded: s,
    isStuck: h,
    onExpand: p,
    disableAnimation: T,
    disableBackground: E
  } = e, C = (0, o.useStateFromStores)([u.default], () => u.default.useReducedMotion), [_, x] = r.useState(!0), [g, I] = r.useState(!1), {
    ref: N,
    height: v = 0
  } = (0, d.default)(), {
    ref: A,
    height: S = 0
  } = (0, d.default)(), [L, R] = r.useState(s), b = (0, l.useSpring)({
    height: L ? S + v : v,
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
    I(!1), R(s)
  }, [s]), r.useLayoutEffect(() => {
    let e = setTimeout(() => {
      x(!1)
    }, 100);
    return () => clearTimeout(e)
  }, []), (0, a.jsx)(c.Clickable, {
    className: i()(m.editCard, {
      [m.toggled]: s,
      [m.noBackground]: E
    }),
    children: (0, a.jsxs)(l.animated.div, {
      className: i()(m.contentExpandContainer, {
        [m.showOverflow]: s && g
      }),
      style: b,
      children: [(0, a.jsx)(c.Clickable, {
        innerRef: N,
        onClick: h ? void 0 : p,
        className: i()(m.innerHeader, {
          [m.toggled]: s && h
        }),
        "aria-label": f.default.Messages.EXPAND,
        children: t
      }), (0, a.jsx)("div", {
        ref: A,
        children: n
      })]
    })
  })
})