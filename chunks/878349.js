n.d(t, {
  Z: function() {
    return f
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(442837),
  o = n(780384),
  c = n(481060),
  u = n(393238),
  d = n(410030),
  h = n(607070),
  m = n(466794),
  p = n(213833),
  E = n(546240),
  g = n(952009);

function f(e) {
  let {
    checked: t,
    labelText: n,
    tooltipText: s,
    canToggle: f,
    iconAltText: C,
    onChange: _,
    tooltipColor: I,
    className: x,
    id: T = "fancybutton-toggle",
    collapseWhenChecked: N = !0,
    onClick: Z,
    disabled: S
  } = e, v = (0, r.e7)([h.Z], () => h.Z.useReducedMotion), [A, M] = i.useState(!1), R = (0, d.ZP)(), j = (0, o.wj)(R) || t ? g : E, {
    width: L = 0,
    ref: O
  } = (0, u.Z)(), {
    width: P = 0,
    ref: b
  } = (0, u.Z)();
  return (0, l.jsxs)(c.TooltipContainer, {
    text: (0, l.jsx)(m.X, {
      textColor: "always-white",
      tooltipText: s
    }),
    position: "top",
    color: null != I ? I : S ? c.Tooltip.Colors.BLACK : c.Tooltip.Colors.BRAND,
    "aria-label": s,
    tooltipClassName: p.tooltip,
    className: p.tooltipContainer,
    children: [(0, l.jsx)("input", {
      className: p.visuallyHidden,
      checked: t,
      onChange: function() {
        if (f) {
          let e = !t;
          M(!0), null == _ || _(e)
        }
        "function" == typeof Z && Z()
      },
      id: T,
      type: "checkbox",
      disabled: S
    }), (0, l.jsxs)("label", {
      htmlFor: T,
      className: a()(p.label, x, {
        [p.transition]: A,
        [p.labelChecked]: t,
        [p.labelUnchecked]: !t && !f
      }),
      style: N ? {
        width: t ? L : L + P
      } : void 0,
      children: [t ? (0, l.jsx)(c.Shine, {
        className: p.shine,
        shinePaused: v
      }) : null, (0, l.jsx)("img", {
        ref: O,
        src: j,
        alt: C
      }), (0, l.jsx)("span", {
        ref: b,
        children: (0, l.jsx)(c.Text, {
          className: a()(p.burstText, {
            [p.visuallyHidden]: t && N,
            [p.burstTextChecked]: t
          }),
          variant: "text-sm/semibold",
          children: n
        })
      })]
    })]
  })
}