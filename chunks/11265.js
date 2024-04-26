"use strict";
n.r(t), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  l = n("718017"),
  o = n("442837"),
  u = n("481060"),
  c = n("393238"),
  d = n("607070"),
  f = n("689938"),
  p = n("532136");
t.default = r.memo(function(e) {
  let {
    renderHeader: t,
    children: n,
    isExpanded: s,
    isStuck: m,
    onExpand: E,
    disableAnimation: I,
    disableBackground: _
  } = e, h = (0, o.useStateFromStores)([d.default], () => d.default.useReducedMotion), [T, g] = r.useState(!0), [C, x] = r.useState(!1), {
    ref: v,
    height: N = 0
  } = (0, c.default)(), {
    ref: R,
    height: A = 0
  } = (0, c.default)(), [S, M] = r.useState(s), b = (0, l.useSpring)({
    height: S ? A + N : N,
    immediate: T || h || I,
    config: {
      ...l.config.stiff,
      clamp: !0
    },
    onStart: () => {
      x(!1)
    },
    onRest: () => {
      x(!0)
    }
  });
  return r.useLayoutEffect(() => {
    x(!1), M(s)
  }, [s]), r.useLayoutEffect(() => {
    let e = setTimeout(() => {
      g(!1)
    }, 100);
    return () => clearTimeout(e)
  }, []), (0, i.jsx)(u.Clickable, {
    className: a()(p.editCard, {
      [p.toggled]: s,
      [p.noBackground]: _
    }),
    children: (0, i.jsxs)(l.animated.div, {
      className: a()(p.contentExpandContainer, {
        [p.showOverflow]: s && C
      }),
      style: b,
      children: [(0, i.jsx)(u.Clickable, {
        innerRef: v,
        onClick: m ? void 0 : E,
        className: a()(p.innerHeader, {
          [p.toggled]: s && m
        }),
        "aria-label": f.default.Messages.EXPAND,
        children: t
      }), (0, i.jsx)("div", {
        ref: R,
        children: n
      })]
    })
  })
})