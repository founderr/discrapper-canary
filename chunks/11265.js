"use strict";
i.r(t), i("47120");
var a = i("735250"),
  l = i("470079"),
  n = i("803997"),
  s = i.n(n),
  r = i("718017"),
  o = i("442837"),
  d = i("481060"),
  c = i("393238"),
  u = i("607070"),
  f = i("689938"),
  m = i("797332");
t.default = l.memo(function(e) {
  let {
    renderHeader: t,
    children: i,
    isExpanded: n,
    isStuck: E,
    onExpand: I,
    disableAnimation: x,
    disableBackground: h
  } = e, T = (0, o.useStateFromStores)([u.default], () => u.default.useReducedMotion), [M, F] = l.useState(!0), [_, R] = l.useState(!1), {
    ref: v,
    height: g = 0
  } = (0, c.default)(), {
    ref: p,
    height: C = 0
  } = (0, c.default)(), [N, j] = l.useState(n), L = (0, r.useSpring)({
    height: N ? C + g : g,
    immediate: M || T || x,
    config: {
      ...r.config.stiff,
      clamp: !0
    },
    onStart: () => {
      R(!1)
    },
    onRest: () => {
      R(!0)
    }
  });
  return l.useLayoutEffect(() => {
    R(!1), j(n)
  }, [n]), l.useLayoutEffect(() => {
    let e = setTimeout(() => {
      F(!1)
    }, 100);
    return () => clearTimeout(e)
  }, []), (0, a.jsx)(d.Clickable, {
    className: s()(m.editCard, {
      [m.toggled]: n,
      [m.noBackground]: h
    }),
    children: (0, a.jsxs)(r.animated.div, {
      className: s()(m.contentExpandContainer, {
        [m.showOverflow]: n && _
      }),
      style: L,
      children: [(0, a.jsx)(d.Clickable, {
        innerRef: v,
        onClick: E ? void 0 : I,
        className: s()(m.innerHeader, {
          [m.toggled]: n && E
        }),
        "aria-label": f.default.Messages.EXPAND,
        children: t
      }), (0, a.jsx)("div", {
        ref: p,
        children: i
      })]
    })
  })
})