"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var s = n("37983");
n("884691");
var a = n("641078"),
  r = n("132554"),
  l = n("646718"),
  i = n("782340"),
  u = n("880865"),
  o = e => {
    let {
      isGift: t,
      plan: n
    } = e, o = (0, a.useIsEligibleForBogoPromotion)();
    return t || (null == n ? void 0 : n.skuId) !== l.PremiumSubscriptionSKUs.TIER_2 || !o ? null : (0, s.jsx)(r.default, {
      copy: i.default.Messages.BOGO_ANNOUNCEMENT_MODAL_UPGRADE_HEADER,
      bannerImage: u
    })
  }