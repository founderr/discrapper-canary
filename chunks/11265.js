"use strict";
n.r(t), n("47120");
var i = n("735250"),
  r = n("470079"),
  a = n("803997"),
  s = n.n(a),
  l = n("718017"),
  o = n("442837"),
  u = n("481060"),
  c = n("393238"),
  d = n("607070"),
  f = n("689938"),
  p = n("797332");
t.default = r.memo(function(e) {
  let {
    renderHeader: t,
    children: n,
    isExpanded: a,
    isStuck: m,
    onExpand: E,
    disableAnimation: I,
    disableBackground: _
  } = e, T = (0, o.useStateFromStores)([d.default], () => d.default.useReducedMotion), [h, g] = r.useState(!0), [C, v] = r.useState(!1), {
    ref: x,
    height: A = 0
  } = (0, c.default)(), {
    ref: N,
    height: R = 0
  } = (0, c.default)(), [S, M] = r.useState(a), O = (0, l.useSpring)({
    height: S ? R + A : A,
    immediate: h || T || I,
    config: {
      ...l.config.stiff,
      clamp: !0
    },
    onStart: () => {
      v(!1)
    },
    onRest: () => {
      v(!0)
    }
  });
  return r.useLayoutEffect(() => {
    v(!1), M(a)
  }, [a]), r.useLayoutEffect(() => {
    let e = setTimeout(() => {
      g(!1)
    }, 100);
    return () => clearTimeout(e)
  }, []), (0, i.jsx)(u.Clickable, {
    className: s()(p.editCard, {
      [p.toggled]: a,
      [p.noBackground]: _
    }),
    children: (0, i.jsxs)(l.animated.div, {
      className: s()(p.contentExpandContainer, {
        [p.showOverflow]: a && C
      }),
      style: O,
      children: [(0, i.jsx)(u.Clickable, {
        innerRef: x,
        onClick: m ? void 0 : E,
        className: s()(p.innerHeader, {
          [p.toggled]: a && m
        }),
        "aria-label": f.default.Messages.EXPAND,
        children: t
      }), (0, i.jsx)("div", {
        ref: N,
        children: n
      })]
    })
  })
})