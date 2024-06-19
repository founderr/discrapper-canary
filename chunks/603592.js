n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  r = n.n(s),
  a = n(91192),
  o = n(481060),
  u = n(880080),
  c = n(682662),
  d = n(662146),
  h = n(516856);
let g = i.forwardRef(function(e, t) {
  let {
    id: n,
    onClick: s,
    onContextMenu: g,
    icon: p,
    selected: m,
    tooltip: C,
    upperBadge: E,
    lowerBadge: f,
    lowerBadgeSize: _,
    showPill: I = !0,
    className: N,
    "aria-label": Z,
    children: S,
    onMouseEnter: x,
    onMouseLeave: T,
    onMouseDown: L
  } = e, v = (0, a.Ie)(n), [A, M] = i.useState(!1), R = "string" == typeof C && null == Z ? C : Z;
  return (0, l.jsxs)(c.H, {
    children: [I ? (0, l.jsx)("div", {
      className: h.pill,
      children: (0, l.jsx)(u.Z, {
        hovered: A,
        selected: m
      })
    }) : null, (0, l.jsx)(d.Z, {
      text: C,
      selected: m,
      children: (0, l.jsx)(o.BlobMask, {
        className: h.__invalid_circleButtonMask,
        selected: m || A,
        upperBadge: E,
        lowerBadge: f,
        lowerBadgeSize: _,
        children: (0, l.jsx)(o.Clickable, {
          innerRef: t,
          onMouseEnter: () => {
            null == x || x(), M(!0)
          },
          onMouseLeave: () => {
            null == T || T(), M(!1)
          },
          onMouseDown: L,
          className: r()(h.circleIconButton, N, {
            [h.selected]: m || A
          }),
          onClick: s,
          "aria-label": R,
          onContextMenu: g,
          focusProps: {
            enabled: !1
          },
          ...v,
          children: null != p && (0, l.jsx)(p, {
            className: h.circleIcon,
            color: "currentColor"
          })
        })
      })
    }), S]
  })
});
t.Z = g