"use strict";
s.r(t);
var a = s("735250");
s("470079");
var i = s("803997"),
  r = s.n(i),
  l = s("780384"),
  n = s("481060"),
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
    ...C
  } = e, f = (0, o.default)(), T = (0, l.isThemeDark)(f) || s, I = T ? n.ButtonColors.WHITE : n.ButtonColors.BRAND, R = E === d.PremiumSubscriptionSKUs.TIER_0 ? c.default.Messages.GIFT_NITRO_TIER_0 : c.default.Messages.GIFT_NITRO;
  return (0, a.jsx)(u.default, {
    isGift: !0,
    color: I,
    look: n.ButtonLooks.OUTLINED,
    hover: n.ButtonHovers.BRAND,
    buttonText: R,
    giftMessage: i,
    className: r()(t, T ? _.buttonWhite : _.buttonBrand),
    subscriptionTier: E,
    ...C
  })
}