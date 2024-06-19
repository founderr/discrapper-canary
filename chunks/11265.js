t(47120);
var a = t(735250),
  r = t(470079),
  s = t(120356),
  i = t.n(s),
  o = t(920906),
  l = t(442837),
  c = t(481060),
  d = t(393238),
  u = t(607070),
  m = t(689938),
  h = t(62531);
n.Z = r.memo(function(e) {
  let {
    renderHeader: n,
    children: t,
    isExpanded: s,
    isStuck: C,
    onExpand: x,
    disableAnimation: f,
    disableBackground: E
  } = e, T = (0, l.e7)([u.Z], () => u.Z.useReducedMotion), [_, I] = r.useState(!0), [g, p] = r.useState(!1), {
    ref: N,
    height: v = 0
  } = (0, d.Z)(), {
    ref: y,
    height: A = 0
  } = (0, d.Z)(), [S, M] = r.useState(s), j = (0, o.useSpring)({
    height: S ? A + v : v,
    immediate: _ || T || f,
    config: {
      ...o.config.stiff,
      clamp: !0
    },
    onStart: () => {
      p(!1)
    },
    onRest: () => {
      p(!0)
    }
  });
  return r.useLayoutEffect(() => {
    p(!1), M(s)
  }, [s]), r.useLayoutEffect(() => {
    let e = setTimeout(() => {
      I(!1)
    }, 100);
    return () => clearTimeout(e)
  }, []), (0, a.jsx)(c.Clickable, {
    className: i()(h.editCard, {
      [h.toggled]: s,
      [h.noBackground]: E
    }),
    children: (0, a.jsxs)(o.animated.div, {
      className: i()(h.contentExpandContainer, {
        [h.showOverflow]: s && g
      }),
      style: j,
      children: [(0, a.jsx)(c.Clickable, {
        innerRef: N,
        onClick: C ? void 0 : x,
        className: i()(h.innerHeader, {
          [h.toggled]: s && C
        }),
        "aria-label": m.Z.Messages.EXPAND,
        children: n
      }), (0, a.jsx)("div", {
        ref: y,
        children: t
      })]
    })
  })
})