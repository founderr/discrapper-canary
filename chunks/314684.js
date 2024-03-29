"use strict";
r.r(t), r.d(t, {
  useClearTenureBadge: function() {
    return L
  },
  useFetchEntitlementsForTenureReward: function() {
    return p
  },
  useFreeBoostTenureRewardEntitlement: function() {
    return C
  },
  useFreeBoostUserTenureReward: function() {
    return O
  },
  useShouldShowConfettiAndGlow: function() {
    return U
  },
  useTenureRewardBadgeDescription: function() {
    return M
  }
}), r("47120");
var n = r("470079"),
  s = r("913527"),
  i = r.n(s),
  u = r("442837"),
  a = r("524437"),
  l = r("496929"),
  o = r("605236"),
  d = r("706140"),
  _ = r("243778"),
  c = r("594174"),
  E = r("314884"),
  R = r("580130"),
  T = r("626135"),
  S = r("823379"),
  N = r("111361"),
  f = r("595878"),
  m = r("513785"),
  A = r("106255"),
  D = r("474936"),
  w = r("735825"),
  I = r("981631");

function O() {
  let e = function() {
      var e;
      let t = (0, u.useStateFromStoresObject)([m.default], () => m.default.getState());
      if (null != t && t.fetchState === m.FetchState.FETCHED) return null !== (e = t.userTenureRewardStatusByRewardId[w.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH]) && void 0 !== e ? e : t.userTenureRewardStatusByRewardId[w.TenureRewardSKUs.FREE_GUILD_BOOST_3_MONTHS]
    }(),
    t = C(),
    r = (0, u.useStateFromStores)([E.default], () => E.default.boostSlots),
    s = n.useMemo(() => Object.values(r).some(e => null == e.premiumGuildSubscription), [r]),
    a = null != t,
    l = {
      redeemableAt: null == e ? void 0 : e.redeemable_at,
      tenureRewardStatusId: null == e ? void 0 : e.id
    };
  if (a && !1 === s) return {
    ...l,
    nitroTenureStatus: w.NitroRewardStatus.REDEEMED,
    tenureRewardSkuId: t.skuId,
    showNotification: !0,
    showCard: !0
  };
  if (a) return {
    ...l,
    nitroTenureStatus: w.NitroRewardStatus.REDEEMABLE,
    tenureRewardSkuId: t.skuId,
    showNotification: !0,
    showCard: !0
  };
  if (!(null != e && (0, A.isUserTenureRewardStatusActive)(e))) return null;
  else {
    if (null == e.redeemable_at || null == e.next_tenure_reward_id) return null;
    let t = i()(e.redeemable_at).diff(i().utc(), "days");
    if (t < 0) return null;
    let r = !1,
      n = !1;
    return e.next_tenure_reward_id === w.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH ? (n = t <= w.MAX_DAYS_LEFT_TO_SHOW_NOTIFICATION_1_MONTH_VARIANT, r = t <= w.MAX_DAYS_LEFT_TO_SHOW_CARD_1_MONTH_VARIANT) : e.next_tenure_reward_id === w.TenureRewardSKUs.FREE_GUILD_BOOST_3_MONTHS && (n = t <= w.MAX_DAYS_LEFT_TO_SHOW_NOTIFICATION_3_MONTH_VARIANT, r = t <= w.MAX_DAYS_LEFT_TO_SHOW_CARD_3_MONTH_VARIANT), {
      ...l,
      nitroTenureStatus: w.NitroRewardStatus.PENDING,
      tenureRewardSkuId: e.next_tenure_reward_id,
      redeemableInDays: 0 === t ? 1 : t,
      showNotification: n,
      showCard: r
    }
  }
}
let h = new Set;

function C() {
  let e = (0, u.useStateFromStores)([R.default], () => {
    var e;
    return null !== (e = R.default.getForApplication(D.PREMIUM_SUBSCRIPTION_APPLICATION)) && void 0 !== e ? e : h
  }, [], S.areSetsEqual);
  if (null != (0, A.getPremiumTier2Entitlement)(e)) return (0, A.getTenureRewardEntitlement)([w.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH, w.TenureRewardSKUs.FREE_GUILD_BOOST_3_MONTHS], e)
}
let F = e => {
    switch (e) {
      case w.NitroRewardStatus.PENDING:
        return [a.DismissibleContent.TENURE_REWARD_PENDING];
      case w.NitroRewardStatus.REDEEMABLE:
        return [a.DismissibleContent.TENURE_REWARD_REDEEMABLE];
      default:
        return []
    }
  },
  M = () => {
    let e = O(),
      t = null == e ? void 0 : e.nitroTenureStatus,
      [r, s] = n.useState(F(t)),
      i = (0, f.useUserEligibleForNitroTenureRewardCard)({
        location: "Home"
      });
    n.useEffect(() => {
      !1 !== i && s(F(t))
    }, [t, i]);
    let [u] = (0, _.useSelectedDismissibleContent)(i ? r : []);
    return i ? null != e && !0 === e.showNotification && (u === a.DismissibleContent.TENURE_REWARD_REDEEMABLE || u === a.DismissibleContent.TENURE_REWARD_PENDING) ? (0, A.getTenureRewardBadgeDescription)(e.nitroTenureStatus) : null : null
  },
  U = () => {
    var e;
    let t = null === (e = O()) || void 0 === e ? void 0 : e.nitroTenureStatus,
      r = (0, f.useUserEligibleForNitroTenureRewardCard)({
        location: "Home"
      }),
      [n] = (0, _.useSelectedDismissibleContent)(r ? [a.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI] : []);
    return !!r && null != t && t === w.NitroRewardStatus.REDEEMABLE && n === a.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI
  },
  L = () => {
    let e = O(),
      t = F(null == e ? void 0 : e.nitroTenureStatus),
      [r] = (0, d.useGetDismissibleContent)(t),
      s = n.useRef(!1);
    return n.useCallback(() => {
      null != e && !0 === e.showNotification && (r === a.DismissibleContent.TENURE_REWARD_REDEEMABLE || r === a.DismissibleContent.TENURE_REWARD_PENDING) && ((0, o.markDismissibleContentAsDismissed)(r), r === a.DismissibleContent.TENURE_REWARD_PENDING && !1 === s.current && (T.default.track(I.AnalyticEvents.USER_NITRO_TENURE_REWARD_ACKNOWLEDGED, {
        user_tenure_reward_id: null == e ? void 0 : e.tenureRewardStatusId,
        tenure_reward_id: e.tenureRewardSkuId,
        reward_type: w.NitroRewardType.SERVER_BOOST,
        redeemable_at: null == e ? void 0 : e.redeemableAt
      }), s.current = !0))
    }, [e, r])
  };

function p() {
  let {
    hasFetchedPremiumApplicationEntitlements: e,
    isFetchingPremiumApplicationEntitlements: t
  } = (0, u.useStateFromStoresObject)([R.default], () => ({
    hasFetchedPremiumApplicationEntitlements: R.default.isFetchedForApplication(D.PREMIUM_SUBSCRIPTION_APPLICATION),
    isFetchingPremiumApplicationEntitlements: R.default.isFetchingForApplication(D.PREMIUM_SUBSCRIPTION_APPLICATION)
  })), r = (0, u.useStateFromStores)([c.default], () => {
    let e = c.default.getCurrentUser();
    return null != e && (0, N.isPremiumExactly)(e, D.PremiumTypes.TIER_2)
  }), s = n.useRef(!1);
  n.useEffect(() => {
    !1 === e && !1 === t && !0 === r && !1 === s.current && (l.fetchUserEntitlementsForApplication(D.PREMIUM_SUBSCRIPTION_APPLICATION), s.current = !0)
  }, [e, t, r])
}