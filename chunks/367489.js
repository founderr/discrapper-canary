"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("446674"),
  o = n("819855"),
  u = n("77078"),
  d = n("731898"),
  c = n("841098"),
  f = n("206230"),
  h = n("62587"),
  m = n("181114"),
  p = n("227054"),
  E = n("277842"),
  S = n("833345");

function g(e) {
  let {
    checked: t,
    labelText: n,
    tooltipText: s,
    canToggle: g,
    iconAltText: C,
    onChange: _,
    tooltipColor: I,
    className: T,
    id: v = "fancybutton-toggle",
    collapseWhenChecked: x = !0,
    onClick: N,
    disabled: A
  } = e, M = (0, r.useStateFromStores)([f.default], () => f.default.useReducedMotion), [R, j] = a.useState(!1), L = (0, c.default)(), y = (0, o.isThemeDark)(L) || t ? S : E, {
    width: O = 0,
    ref: P
  } = (0, d.default)(), {
    width: b = 0,
    ref: D
  } = (0, d.default)();
  return (0, l.jsxs)(u.TooltipContainer, {
    text: (0, l.jsx)(h.NitroTooltipLabel, {
      textColor: "always-white",
      tooltipText: s
    }),
    position: "top",
    color: null != I ? I : A ? u.Tooltip.Colors.BLACK : u.Tooltip.Colors.BRAND,
    "aria-label": s,
    tooltipClassName: p.tooltip,
    className: p.tooltipContainer,
    children: [(0, l.jsx)("input", {
      className: p.visuallyHidden,
      checked: t,
      onChange: function() {
        if (g) {
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
        [p.labelUnchecked]: !t && !g
      }),
      style: x ? {
        width: t ? O : O + b
      } : void 0,
      children: [t ? (0, l.jsx)(m.Shine, {
        className: p.shine,
        shinePaused: M
      }) : null, (0, l.jsx)("img", {
        ref: P,
        src: y,
        alt: C
      }), (0, l.jsx)("span", {
        ref: D,
        children: (0, l.jsx)(u.Text, {
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