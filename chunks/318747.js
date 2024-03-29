"use strict";
s.r(t);
var a = s("735250");
s("470079");
var i = s("803997"),
  r = s.n(i),
  n = s("780384"),
  l = s("481060"),
  o = s("410030"),
  u = s("197115"),
  d = s("474936"),
  c = s("689938"),
  _ = s("618063");
t.default = e => {
  let {
    className: t,
    forceWhite: s,
    giftMessage: i,
    subscriptionTier: E,
    ...T
  } = e, I = (0, o.default)(), S = (0, n.isThemeDark)(I) || s, R = S ? l.ButtonColors.WHITE : l.ButtonColors.BRAND, f = E === d.PremiumSubscriptionSKUs.TIER_0 ? c.default.Messages.GIFT_NITRO_TIER_0 : c.default.Messages.GIFT_NITRO;
  return (0, a.jsx)(u.default, {
    isGift: !0,
    color: R,
    look: l.ButtonLooks.OUTLINED,
    hover: l.ButtonHovers.BRAND,
    buttonText: f,
    giftMessage: i,
    className: r()(t, S ? _.buttonWhite : _.buttonBrand),
    subscriptionTier: E,
    ...T
  })
}