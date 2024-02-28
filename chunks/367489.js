"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("446674"),
  u = n("819855"),
  o = n("77078"),
  d = n("731898"),
  c = n("841098"),
  f = n("206230"),
  h = n("62587"),
  m = n("181114"),
  p = n("227054"),
  E = n("277842"),
  g = n("833345");

function C(e) {
  let {
    checked: t,
    labelText: n,
    tooltipText: s,
    canToggle: C,
    iconAltText: S,
    onChange: _,
    tooltipColor: I,
    className: T,
    id: v = "fancybutton-toggle",
    collapseWhenChecked: x = !0,
    onClick: N,
    disabled: A
  } = e, M = (0, r.useStateFromStores)([f.default], () => f.default.useReducedMotion), [R, j] = a.useState(!1), L = (0, c.default)(), O = (0, u.isThemeDark)(L) || t ? g : E, {
    width: y = 0,
    ref: P
  } = (0, d.default)(), {
    width: b = 0,
    ref: D
  } = (0, d.default)();
  return (0, l.jsxs)(o.TooltipContainer, {
    text: (0, l.jsx)(h.NitroTooltipLabel, {
      textColor: "always-white",
      tooltipText: s
    }),
    position: "top",
    color: null != I ? I : A ? o.Tooltip.Colors.BLACK : o.Tooltip.Colors.BRAND,
    "aria-label": s,
    tooltipClassName: p.tooltip,
    className: p.tooltipContainer,
    children: [(0, l.jsx)("input", {
      className: p.visuallyHidden,
      checked: t,
      onChange: function() {
        if (C) {
          let e = !t;
          j(!0), null == _ || _(e)
        }
        "function" == typeof N && N()
      },
      id: v,
      type: "checkbox",
      disabled: A
    }), (0, l.jsxs)("label", {
      htmlFor: v,
      className: i(p.label, T, {
        [p.transition]: R,
        [p.labelChecked]: t,
        [p.labelUnchecked]: !t && !C
      }),
      style: x ? {
        width: t ? y : y + b
      } : void 0,
      children: [t ? (0, l.jsx)(m.Shine, {
        className: p.shine,
        shinePaused: M
      }) : null, (0, l.jsx)("img", {
        ref: P,
        src: O,
        alt: S
      }), (0, l.jsx)("span", {
        ref: D,
        children: (0, l.jsx)(o.Text, {
          className: i(p.burstText, {
            [p.visuallyHidden]: t && x,
            [p.burstTextChecked]: t
          }),
          variant: "text-sm/semibold",
          children: n
        })
      })]
    })]
  })
}