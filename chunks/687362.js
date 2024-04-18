"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
});
var a = s("524437"),
  i = s("391110"),
  r = s("75077"),
  l = s("595878"),
  n = s("314684"),
  o = s("735825"),
  u = s("689938");

function d() {
  let e = (0, n.useFreeBoostUserTenureReward)(),
    t = (0, l.useUserEligibleForNitroTenureRewardCard)({
      location: i.NitroLandingPages.HOME
    });
  if (null != e && t) return {
    title: (0, r.getRewardingTenureTitle)(e.nitroTenureStatus),
    subtitle: (0, r.getRewardingTenureSubtitle)(e.nitroTenureStatus, null == e ? void 0 : e.tenureRewardSkuId),
    description: (0, r.getRewardingTenureDescription)(e.nitroTenureStatus),
    ctaDescription: (0, r.getRewardingTenureCtaDescription)(e.nitroTenureStatus, e.redeemableInDays),
    pillText: e.nitroTenureStatus === o.NitroRewardStatus.PENDING ? u.default.Messages.REWARD.toLocaleUpperCase() : void 0,
    dismissibleContentType: e.nitroTenureStatus === o.NitroRewardStatus.REDEEMABLE ? a.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI : void 0
  }
}