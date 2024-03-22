"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var r = n("37983");
n("884691");
var i = n("641078"),
  s = n("132554"),
  l = n("646718"),
  u = n("782340"),
  a = n("880865"),
  o = e => {
    let {
      isGift: t,
      plan: n
    } = e, o = (0, i.useIsEligibleForBogoPromotion)();
    return t || (null == n ? void 0 : n.skuId) !== l.PremiumSubscriptionSKUs.TIER_2 || !o ? null : (0, r.jsx)(s.default, {
      copy: u.default.Messages.BOGO_ANNOUNCEMENT_MODAL_UPGRADE_HEADER,
      bannerImage: a
    })
  }