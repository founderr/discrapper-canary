"use strict";
n.d(t, {
  Z: function() {
    return l
  }
});
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(929204),
  o = n(689938),
  a = n(124581);

function l(e) {
  let {
    analyticsSection: t,
    buttonText: n
  } = e;
  return (0, i.jsxs)(r.ShinyButton, {
    className: a.premiumButton,
    innerClassName: a.premiumButtonInner,
    color: r.Button.Colors.GREEN,
    size: r.Button.Sizes.SMALL,
    onClick: () => (0, s.Z)({
      section: t
    }),
    children: [(0, i.jsx)(r.NitroWheelIcon, {
      size: "md",
      color: "currentColor",
      className: a.premiumButtonNitroWheel
    }), null != n ? n : o.Z.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_CTA]
  })
}