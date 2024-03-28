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
  E = i("797332");
t.default = l.memo(function(e) {
  let {
    renderHeader: t,
    children: i,
    isExpanded: n,
    isStuck: I,
    onExpand: T
  } = e, m = (0, o.useStateFromStores)([u.default], () => u.default.useReducedMotion), [_, x] = l.useState(!0), [h, p] = l.useState(!1), {
    ref: M,
    height: R = 0
  } = (0, c.default)(), {
    ref: F,
    height: v = 0
  } = (0, c.default)(), [N, S] = l.useState(n), g = (0, r.useSpring)({
    height: N ? v + R : R,
    immediate: _ || m,
    config: {
      ...r.config.stiff,
      clamp: !0
    },
    onStart: () => {
      p(!1)
    },
    onRest: () => {
      p(!0)
    }
  });
  l.useLayoutEffect(() => {
    p(!1), S(n)
  }, [n]);
  let [C, A] = l.useState(!1), L = () => {
    A(!1)
  };
  return l.useLayoutEffect(() => {
    let e = setTimeout(() => {
      x(!1)
    }, 100);
    return () => clearTimeout(e)
  }, []), (0, a.jsx)(d.Clickable, {
    className: s()(E.editCard, {
      [E.toggled]: n,
      [E.active]: C
    }),
    onMouseLeave: L,
    onMouseDown: () => {
      A(!0)
    },
    onMouseUp: L,
    children: (0, a.jsxs)(r.animated.div, {
      className: s()(E.contentExpandContainer, {
        [E.showOverflow]: n && h
      }),
      style: g,
      children: [(0, a.jsx)(d.Clickable, {
        innerRef: M,
        onClick: I ? void 0 : T,
        className: s()(E.innerHeader, {
          [E.toggled]: n && I
        }),
        "aria-label": f.default.Messages.EXPAND,
        children: t
      }), (0, a.jsx)("div", {
        ref: F,
        children: i
      })]
    })
  })
})