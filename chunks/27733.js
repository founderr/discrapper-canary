"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var i = n("735250");
n("470079");
var r = n("481060"),
  s = n("466111"),
  a = n("929204"),
  o = n("689938"),
  l = n("450671");

function u(e) {
  let {
    analyticsSection: t,
    buttonText: n
  } = e;
  return (0, i.jsxs)(r.ShinyButton, {
    className: l.premiumButton,
    innerClassName: l.premiumButtonInner,
    color: r.Button.Colors.GREEN,
    size: r.Button.Sizes.SMALL,
    onClick: () => (0, a.default)({
      section: t
    }),
    children: [(0, i.jsx)(s.default, {
      className: l.premiumButtonNitroWheel
    }), null != n ? n : o.default.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_CTA]
  })
}