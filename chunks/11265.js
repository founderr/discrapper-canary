"use strict";
a.r(t), a("47120");
var n = a("735250"),
  r = a("470079"),
  i = a("120356"),
  s = a.n(i),
  l = a("920906"),
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
    isStuck: E,
    onExpand: h,
    disableAnimation: T,
    disableBackground: _
  } = e, C = (0, o.useStateFromStores)([u.default], () => u.default.useReducedMotion), [x, p] = r.useState(!0), [I, g] = r.useState(!1), {
    ref: N,
    height: A = 0
  } = (0, c.default)(), {
    ref: v,
    height: S = 0
  } = (0, c.default)(), [R, L] = r.useState(i), y = (0, l.useSpring)({
    height: R ? S + A : A,
    immediate: x || C || T,
    config: {
      ...l.config.stiff,
      clamp: !0
    },
    onStart: () => {
      g(!1)
    },
    onRest: () => {
      g(!0)
    }
  });
  return r.useLayoutEffect(() => {
    g(!1), L(i)
  }, [i]), r.useLayoutEffect(() => {
    let e = setTimeout(() => {
      p(!1)
    }, 100);
    return () => clearTimeout(e)
  }, []), (0, n.jsx)(d.Clickable, {
    className: s()(m.editCard, {
      [m.toggled]: i,
      [m.noBackground]: _
    }),
    children: (0, n.jsxs)(l.animated.div, {
      className: s()(m.contentExpandContainer, {
        [m.showOverflow]: i && I
      }),
      style: y,
      children: [(0, n.jsx)(d.Clickable, {
        innerRef: N,
        onClick: E ? void 0 : h,
        className: s()(m.innerHeader, {
          [m.toggled]: i && E
        }),
        "aria-label": f.default.Messages.EXPAND,
        children: t
      }), (0, n.jsx)("div", {
        ref: v,
        children: a
      })]
    })
  })
})