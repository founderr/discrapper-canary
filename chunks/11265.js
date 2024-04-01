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
    disableAnimation: x
  } = e, h = (0, o.useStateFromStores)([u.default], () => u.default.useReducedMotion), [T, M] = l.useState(!0), [F, _] = l.useState(!1), {
    ref: v,
    height: R = 0
  } = (0, c.default)(), {
    ref: p,
    height: C = 0
  } = (0, c.default)(), [N, g] = l.useState(n), j = (0, r.useSpring)({
    height: N ? C + R : R,
    immediate: T || h || x,
    config: {
      ...r.config.stiff,
      clamp: !0
    },
    onStart: () => {
      _(!1)
    },
    onRest: () => {
      _(!0)
    }
  });
  l.useLayoutEffect(() => {
    _(!1), g(n)
  }, [n]);
  let [L, y] = l.useState(!1), A = () => {
    y(!1)
  };
  return l.useLayoutEffect(() => {
    let e = setTimeout(() => {
      M(!1)
    }, 100);
    return () => clearTimeout(e)
  }, []), (0, a.jsx)(d.Clickable, {
    className: s()(m.editCard, {
      [m.toggled]: n,
      [m.active]: L
    }),
    onMouseLeave: A,
    onMouseDown: () => {
      y(!0)
    },
    onMouseUp: A,
    children: (0, a.jsxs)(r.animated.div, {
      className: s()(m.contentExpandContainer, {
        [m.showOverflow]: n && F
      }),
      style: j,
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