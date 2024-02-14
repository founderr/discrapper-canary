"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
});
var a = s("37983");
s("884691");
var n = s("414456"),
  i = s.n(n),
  r = s("819855"),
  l = s("77078"),
  o = s("841098"),
  u = s("635956"),
  d = s("646718"),
  c = s("782340"),
  _ = s("428359"),
  E = e => {
    let {
      className: t,
      forceWhite: s,
      giftMessage: n,
      subscriptionTier: E,
      ...I
    } = e, T = (0, o.default)(), f = (0, r.isThemeDark)(T) || s, S = f ? l.ButtonColors.WHITE : l.ButtonColors.BRAND, R = E === d.PremiumSubscriptionSKUs.TIER_0 ? c.default.Messages.GIFT_NITRO_TIER_0 : c.default.Messages.GIFT_NITRO;
    return (0, a.jsx)(u.default, {
      isGift: !0,
      color: S,
      look: l.ButtonLooks.OUTLINED,
      hover: l.ButtonHovers.BRAND,
      buttonText: R,
      giftMessage: n,
      className: i(t, f ? _.buttonWhite : _.buttonBrand),
      subscriptionTier: E,
      ...I
    })
  }