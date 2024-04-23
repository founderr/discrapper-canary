"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
});
var a = s("524437"),
  r = s("391110"),
  i = s("75077"),
  n = s("595878"),
  l = s("314684"),
  o = s("735825"),
  u = s("689938");

function d() {
  let e = (0, l.useFreeBoostUserTenureReward)(),
    t = (0, n.useUserEligibleForNitroTenureRewardCard)({
      location: r.NitroLandingPages.HOME
    });
  if (null != e && t) return {
    title: (0, i.getRewardingTenureTitle)(e.nitroTenureStatus),
    subtitle: (0, i.getRewardingTenureSubtitle)(e.nitroTenureStatus, null == e ? void 0 : e.tenureRewardSkuId),
    description: (0, i.getRewardingTenureDescription)(e.nitroTenureStatus),
    ctaDescription: (0, i.getRewardingTenureCtaDescription)(e.nitroTenureStatus, e.redeemableInDays),
    pillText: e.nitroTenureStatus === o.NitroRewardStatus.PENDING ? u.default.Messages.REWARD.toLocaleUpperCase() : void 0,
    dismissibleContentType: e.nitroTenureStatus === o.NitroRewardStatus.REDEEMABLE ? a.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI : void 0
  }
}