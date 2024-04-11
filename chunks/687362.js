"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
});
var a = s("391110"),
  i = s("75077"),
  r = s("595878"),
  l = s("314684"),
  n = s("735825"),
  o = s("689938");

function u() {
  let e = (0, l.useFreeBoostUserTenureReward)(),
    t = (0, r.useUserEligibleForNitroTenureRewardCard)({
      location: a.NitroLandingPages.HOME
    });
  if (null != e && t) return {
    title: (0, i.getRewardingTenureTitle)(e.nitroTenureStatus),
    subtitle: (0, i.getRewardingTenureSubtitle)(e.nitroTenureStatus, null == e ? void 0 : e.tenureRewardSkuId),
    description: (0, i.getRewardingTenureDescription)(e.nitroTenureStatus),
    ctaDescription: (0, i.getRewardingTenureCtaDescription)(e.nitroTenureStatus, e.redeemableInDays),
    pillText: e.nitroTenureStatus === n.NitroRewardStatus.PENDING ? o.default.Messages.REWARD.toLocaleUpperCase() : void 0
  }
}