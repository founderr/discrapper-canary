"use strict";
s.r(t), s.d(t, {
  WarningBlockButtonPosition: function() {
    return E
  },
  default: function() {
    return f
  }
});
var n = s("37983");
s("884691");
var l = s("414456"),
  o = s.n(l),
  r = s("819855"),
  a = s("77078"),
  i = s("841098"),
  u = s("223984"),
  c = s("417186"),
  d = s("715202");
let E = {
  RIGHT: d.horizontalStatusWarningBlock,
  BOTTOM: d.verticalStatusWarningBlock
};

function f(e) {
  let {
    className: t,
    color: s = u.MessageBlockColors.YELLOW,
    buttonPosition: l = E.BOTTOM,
    notice: f,
    ctaLabel: C,
    ctaLoading: _,
    ctaDisabled: h,
    ctaClassName: I,
    onClick: N
  } = e, p = (0, i.default)();
  return (0, n.jsx)(c.default, {
    className: o(d.statusWarningBlock, {
      [d.statusWarningBlockWithCta]: null != C
    }, t),
    color: (0, r.isThemeDark)(p) ? s : u.MessageBlockColors.BROWN,
    children: (0, n.jsxs)("div", {
      className: l,
      children: [(0, n.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "interactive-active",
        children: f
      }), null != C && null != N && (0, n.jsx)("div", {
        className: d.ctaButtonContainer,
        children: (0, n.jsx)(a.Button, {
          className: o(d.ctaButton, (0, r.isThemeDark)(p) ? void 0 : d.ctaBlackButton, I),
          color: (0, r.isThemeDark)(p) ? a.Button.Colors.WHITE : a.Button.Colors.CUSTOM,
          size: a.ButtonSizes.MEDIUM,
          onClick: N,
          disabled: h,
          submitting: _,
          children: (0, n.jsx)(a.Text, {
            className: d.ctaButtonText,
            variant: "text-sm/medium",
            children: C
          })
        })
      })]
    })
  })
}