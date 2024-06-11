"use strict";
s.r(t);
var a = s("735250");
s("470079");
var r = s("120356"),
  i = s.n(r),
  n = s("780384"),
  l = s("481060"),
  o = s("410030"),
  u = s("197115"),
  c = s("474936"),
  d = s("689938"),
  _ = s("674417");
t.default = e => {
  let {
    className: t,
    forceWhite: s,
    giftMessage: r,
    subscriptionTier: E,
    ...R
  } = e, T = (0, o.default)(), I = (0, n.isThemeDark)(T) || s, f = I ? l.ButtonColors.WHITE : l.ButtonColors.BRAND, S = E === c.PremiumSubscriptionSKUs.TIER_0 ? d.default.Messages.GIFT_NITRO_TIER_0 : d.default.Messages.GIFT_NITRO;
  return (0, a.jsx)(u.default, {
    isGift: !0,
    color: f,
    look: l.ButtonLooks.OUTLINED,
    buttonText: S,
    giftMessage: r,
    className: i()(t, _.giftButton, I ? _.buttonWhite : _.buttonBrand),
    subscriptionTier: E,
    ...R
  })
}