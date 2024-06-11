"use strict";
s.r(t), s.d(t, {
  WarningBlockButtonPosition: function() {
    return E
  },
  default: function() {
    return _
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
  d = s("278761");
let E = {
  RIGHT: d.horizontalStatusWarningBlock,
  BOTTOM: d.verticalStatusWarningBlock
};

function _(e) {
  let {
    className: t,
    color: s = u.MessageBlockColors.YELLOW,
    buttonPosition: l = E.BOTTOM,
    notice: _,
    ctaLabel: I,
    ctaLoading: f,
    ctaDisabled: N,
    ctaClassName: C,
    onClick: h
  } = e, p = (0, r.default)();
  return (0, n.jsx)(c.default, {
    className: a()(d.statusWarningBlock, {
      [d.statusWarningBlockWithCta]: null != I
    }, t),
    color: (0, i.isThemeDark)(p) ? s : u.MessageBlockColors.BROWN,
    children: (0, n.jsxs)("div", {
      className: l,
      children: [(0, n.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "interactive-active",
        children: _
      }), null != I && null != h && (0, n.jsx)("div", {
        className: d.ctaButtonContainer,
        children: (0, n.jsx)(o.Button, {
          className: a()(d.ctaButton, (0, i.isThemeDark)(p) ? void 0 : d.ctaBlackButton, C),
          color: (0, i.isThemeDark)(p) ? o.Button.Colors.WHITE : o.Button.Colors.CUSTOM,
          size: o.ButtonSizes.MEDIUM,
          onClick: h,
          disabled: N,
          submitting: f,
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