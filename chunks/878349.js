"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("442837"),
  o = n("780384"),
  u = n("481060"),
  d = n("393238"),
  c = n("410030"),
  f = n("607070"),
  h = n("466794"),
  m = n("487032"),
  p = n("546240"),
  E = n("952009");

function g(e) {
  let {
    checked: t,
    labelText: n,
    tooltipText: s,
    canToggle: g,
    iconAltText: C,
    onChange: S,
    tooltipColor: _,
    className: T,
    id: I = "fancybutton-toggle",
    collapseWhenChecked: A = !0,
    onClick: v,
    disabled: x
  } = e, N = (0, r.useStateFromStores)([f.default], () => f.default.useReducedMotion), [M, y] = l.useState(!1), R = (0, c.default)(), L = (0, o.isThemeDark)(R) || t ? E : p, {
    width: O = 0,
    ref: j
  } = (0, d.default)(), {
    width: P = 0,
    ref: D
  } = (0, d.default)();
  return (0, a.jsxs)(u.TooltipContainer, {
    text: (0, a.jsx)(h.NitroTooltipLabel, {
      textColor: "always-white",
      tooltipText: s
    }),
    position: "top",
    color: null != _ ? _ : x ? u.Tooltip.Colors.BLACK : u.Tooltip.Colors.BRAND,
    "aria-label": s,
    tooltipClassName: m.tooltip,
    className: m.tooltipContainer,
    children: [(0, a.jsx)("input", {
      className: m.visuallyHidden,
      checked: t,
      onChange: function() {
        if (g) {
          let e = !t;
          y(!0), null == S || S(e)
        }
        "function" == typeof v && v()
      },
      id: I,
      type: "checkbox",
      disabled: x
    }), (0, a.jsxs)("label", {
      htmlFor: I,
      className: i()(m.label, T, {
        [m.transition]: M,
        [m.labelChecked]: t,
        [m.labelUnchecked]: !t && !g
      }),
      style: A ? {
        width: t ? O : O + P
      } : void 0,
      children: [t ? (0, a.jsx)(u.Shine, {
        className: m.shine,
        shinePaused: N
      }) : null, (0, a.jsx)("img", {
        ref: j,
        src: L,
        alt: C
      }), (0, a.jsx)("span", {
        ref: D,
        children: (0, a.jsx)(u.Text, {
          className: i()(m.burstText, {
            [m.visuallyHidden]: t && A,
            [m.burstTextChecked]: t
          }),
          variant: "text-sm/semibold",
          children: n
        })
      })]
    })]
  })
}