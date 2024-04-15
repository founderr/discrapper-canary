"use strict";
s.r(t), s.d(t, {
  WarningBlockButtonPosition: function() {
    return E
  },
  default: function() {
    return f
  }
});
var n = s("735250");
s("470079");
var l = s("120356"),
  a = s.n(l),
  i = s("780384"),
  o = s("481060"),
  r = s("410030"),
  u = s("696936"),
  c = s("903773"),
  d = s("677852");
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
    ctaLabel: I,
    ctaLoading: _,
    ctaDisabled: h,
    ctaClassName: N,
    onClick: C
  } = e, R = (0, r.default)();
  return (0, n.jsx)(c.default, {
    className: a()(d.statusWarningBlock, {
      [d.statusWarningBlockWithCta]: null != I
    }, t),
    color: (0, i.isThemeDark)(R) ? s : u.MessageBlockColors.BROWN,
    children: (0, n.jsxs)("div", {
      className: l,
      children: [(0, n.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "interactive-active",
        children: f
      }), null != I && null != C && (0, n.jsx)("div", {
        className: d.ctaButtonContainer,
        children: (0, n.jsx)(o.Button, {
          className: a()(d.ctaButton, (0, i.isThemeDark)(R) ? void 0 : d.ctaBlackButton, N),
          color: (0, i.isThemeDark)(R) ? o.Button.Colors.WHITE : o.Button.Colors.CUSTOM,
          size: o.ButtonSizes.MEDIUM,
          onClick: C,
          disabled: h,
          submitting: _,
          children: (0, n.jsx)(o.Text, {
            className: d.ctaButtonText,
            variant: "text-sm/medium",
            children: I
          })
        })
      })]
    })
  })
}