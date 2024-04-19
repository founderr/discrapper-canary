"use strict";
n.r(t), n("47120");
var l = n("735250"),
  a = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("924826"),
  o = n("481060"),
  u = n("880080"),
  d = n("682662"),
  c = n("662146"),
  f = n("754440");
let h = a.forwardRef(function(e, t) {
  let {
    id: n,
    onClick: s,
    onContextMenu: h,
    icon: p,
    selected: m,
    tooltip: C,
    upperBadge: g,
    lowerBadge: E,
    lowerBadgeWidth: _,
    showPill: S = !0,
    className: I,
    "aria-label": N,
    children: T,
    onMouseEnter: A,
    onMouseLeave: L,
    onMouseDown: v
  } = e, x = (0, r.useTreeItem)(n), [R, M] = a.useState(!1), y = "string" == typeof C && null == N ? C : N;
  return (0, l.jsxs)(d.ListItem, {
    children: [S ? (0, l.jsx)("div", {
      className: f.pill,
      children: (0, l.jsx)(u.default, {
        hovered: R,
        selected: m
      })
    }) : null, (0, l.jsx)(c.default, {
      text: C,
      selected: m,
      children: (0, l.jsx)(o.BlobMask, {
        className: f.__invalid_circleButtonMask,
        selected: m || R,
        upperBadge: g,
        lowerBadge: E,
        lowerBadgeWidth: _,
        children: (0, l.jsx)(o.Clickable, {
          innerRef: t,
          onMouseEnter: () => {
            null == A || A(), M(!0)
          },
          onMouseLeave: () => {
            null == L || L(), M(!1)
          },
          onMouseDown: v,
          className: i()(f.circleIconButton, I, {
            [f.selected]: m || R
          }),
          onClick: s,
          "aria-label": y,
          onContextMenu: h,
          focusProps: {
            enabled: !1
          },
          ...x,
          children: null != p && (0, l.jsx)(p, {
            className: f.circleIcon,
            color: "currentColor"
          })
        })
      })
    }), T]
  })
});
t.default = h