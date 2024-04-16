"use strict";
i.r(t), i("47120");
var n = i("735250"),
  r = i("470079"),
  s = i("120356"),
  a = i.n(s),
  l = i("718017"),
  o = i("442837"),
  c = i("481060"),
  u = i("393238"),
  d = i("607070"),
  f = i("689938"),
  p = i("797332");
t.default = r.memo(function(e) {
  let {
    renderHeader: t,
    children: i,
    isExpanded: s,
    isStuck: C,
    onExpand: m,
    disableAnimation: h,
    disableBackground: _
  } = e, E = (0, o.useStateFromStores)([d.default], () => d.default.useReducedMotion), [I, T] = r.useState(!0), [x, g] = r.useState(!1), {
    ref: v,
    height: R = 0
  } = (0, u.default)(), {
    ref: A,
    height: N = 0
  } = (0, u.default)(), [S, M] = r.useState(s), L = (0, l.useSpring)({
    height: S ? N + R : R,
    immediate: I || E || h,
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
    g(!1), M(s)
  }, [s]), r.useLayoutEffect(() => {
    let e = setTimeout(() => {
      T(!1)
    }, 100);
    return () => clearTimeout(e)
  }, []), (0, n.jsx)(c.Clickable, {
    className: a()(p.editCard, {
      [p.toggled]: s,
      [p.noBackground]: _
    }),
    children: (0, n.jsxs)(l.animated.div, {
      className: a()(p.contentExpandContainer, {
        [p.showOverflow]: s && x
      }),
      style: L,
      children: [(0, n.jsx)(c.Clickable, {
        innerRef: v,
        onClick: C ? void 0 : m,
        className: a()(p.innerHeader, {
          [p.toggled]: s && C
        }),
        "aria-label": f.default.Messages.EXPAND,
        children: t
      }), (0, n.jsx)("div", {
        ref: A,
        children: i
      })]
    })
  })
})