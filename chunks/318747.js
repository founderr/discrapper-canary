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
  } = e, T = (0, o.default)(), f = (0, n.isThemeDark)(T) || s, m = f ? l.ButtonColors.WHITE : l.ButtonColors.BRAND, I = E === c.PremiumSubscriptionSKUs.TIER_0 ? d.default.Messages.GIFT_NITRO_TIER_0 : d.default.Messages.GIFT_NITRO;
  return (0, a.jsx)(u.default, {
    isGift: !0,
    color: m,
    look: l.ButtonLooks.OUTLINED,
    buttonText: I,
    giftMessage: r,
    className: i()(t, _.giftButton, f ? _.buttonWhite : _.buttonBrand),
    subscriptionTier: E,
    ...R
  })
}