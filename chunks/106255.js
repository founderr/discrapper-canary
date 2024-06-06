"use strict";
n.r(t), n.d(t, {
  getFreeBoostTenureRewardStatus: function() {
    return T
  },
  getPremiumTier2Entitlement: function() {
    return _
  },
  getTenureRewardBadgeDescription: function() {
    return I
  },
  getTenureRewardEntitlement: function() {
    return c
  },
  isPremiumTier2Entitlement: function() {
    return u
  },
  isUserTenureRewardStatusActive: function() {
    return E
  },
  isValidTenureRewardEntitlement: function() {
    return d
  }
}), n("580130");
var i = n("55563"),
  r = n("513785"),
  s = n("474936"),
  a = n("735825"),
  o = n("981631"),
  l = n("689938");

function u(e) {
  return e.type === o.EntitlementTypes.PURCHASE && e.skuId === s.PremiumSubscriptionSKUs.TIER_2 && e.applicationId === s.PREMIUM_SUBSCRIPTION_APPLICATION && e.isValid(null, i.default)
}

function d(e) {
  return e.type === o.EntitlementTypes.PREMIUM_PURCHASE && a.ALL_TENURE_REWARD_SKUS.has(e.skuId) && e.applicationId === s.PREMIUM_SUBSCRIPTION_APPLICATION && e.isValid(null, i.default)
}

function _(e) {
  if (null != e) return Array.from(e).find(e => u(e))
}

function c(e, t) {
  if (null != t) return Array.from(t).find(t => t.type === o.EntitlementTypes.PREMIUM_PURCHASE && e.includes(t.skuId) && t.applicationId === s.PREMIUM_SUBSCRIPTION_APPLICATION && t.isValid(null, i.default))
}

function E(e) {
  return null != e.redeemable_at && null != e.next_tenure_reward_id
}

function I(e) {
  switch (e) {
    case a.NitroRewardStatus.PENDING:
      return l.default.Messages.REWARD;
    case a.NitroRewardStatus.REDEEMABLE:
      return l.default.Messages.REDEEM;
    case a.NitroRewardStatus.REDEEMED:
    default:
      return null
  }
}

function T() {
  var e;
  return null !== (e = r.default.getTenureRewardStatusForRewardId(a.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH)) && void 0 !== e ? e : r.default.getTenureRewardStatusForRewardId(a.TenureRewardSKUs.FREE_GUILD_BOOST_3_MONTHS)
}