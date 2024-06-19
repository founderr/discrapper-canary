n.d(s, {
  E: function() {
    return d
  },
  Z: function() {
    return _
  }
});
var t = n(735250);
n(470079);
var a = n(120356),
  l = n.n(a),
  o = n(780384),
  i = n(481060),
  r = n(410030),
  c = n(696936),
  u = n(903773),
  E = n(392538);
let d = {
  RIGHT: E.horizontalStatusWarningBlock,
  BOTTOM: E.verticalStatusWarningBlock
};

function _(e) {
  let {
    className: s,
    color: n = c.W.YELLOW,
    buttonPosition: a = d.BOTTOM,
    notice: _,
    ctaLabel: I,
    ctaLoading: N,
    ctaDisabled: R,
    ctaClassName: T,
    onClick: h
  } = e, C = (0, r.ZP)();
  return (0, t.jsx)(u.Z, {
    className: l()(E.statusWarningBlock, {
      [E.statusWarningBlockWithCta]: null != I
    }, s),
    color: (0, o.wj)(C) ? n : c.W.BROWN,
    children: (0, t.jsxs)("div", {
      className: a,
      children: [(0, t.jsx)(i.Text, {
        variant: "text-sm/normal",
        color: "interactive-active",
        children: _
      }), null != I && null != h && (0, t.jsx)("div", {
        className: E.ctaButtonContainer,
        children: (0, t.jsx)(i.Button, {
          className: l()(E.ctaButton, (0, o.wj)(C) ? void 0 : E.ctaBlackButton, T),
          color: (0, o.wj)(C) ? i.Button.Colors.WHITE : i.Button.Colors.CUSTOM,
          size: i.ButtonSizes.MEDIUM,
          onClick: h,
          disabled: R,
          submitting: N,
          children: (0, t.jsx)(i.Text, {
            className: E.ctaButtonText,
            variant: "text-sm/medium",
            children: I
          })
        })
      })]
    })
  })
}