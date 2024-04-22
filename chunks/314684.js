"use strict";
r.r(t), r.d(t, {
  useClearTenureBadge: function() {
    return M
  },
  useFetchEntitlementsForTenureReward: function() {
    return U
  },
  useFetchTenureRewardStatusDetails: function() {
    return v
  },
  useFreeBoostDaysPercentage: function() {
    return g
  },
  useFreeBoostTenureRewardEntitlement: function() {
    return L
  },
  useFreeBoostUserTenureReward: function() {
    return A
  },
  useShouldShowConfettiAndGlow: function() {
    return F
  },
  useTenureRewardBadgeDescription: function() {
    return D
  }
}), r("47120");
var s = r("470079"),
  i = r("913527"),
  n = r.n(i),
  l = r("442837"),
  a = r("524437"),
  o = r("496929"),
  u = r("607070"),
  d = r("605236"),
  c = r("706140"),
  _ = r("243778"),
  C = r("594174"),
  f = r("314884"),
  E = r("580130"),
  p = r("626135"),
  R = r("823379"),
  x = r("111361"),
  h = r("595878"),
  T = r("944880"),
  S = r("513785"),
  m = r("106255"),
  w = r("474936"),
  N = r("735825"),
  O = r("981631");

function A() {
  let e = function() {
      var e;
      let t = (0, l.useStateFromStoresObject)([S.default], () => S.default.getState());
      if (null != t) return null !== (e = t.userTenureRewardStatusByRewardId[N.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH]) && void 0 !== e ? e : t.userTenureRewardStatusByRewardId[N.TenureRewardSKUs.FREE_GUILD_BOOST_3_MONTHS]
    }(),
    t = L(),
    r = (0, l.useStateFromStores)([f.default], () => f.default.boostSlots),
    i = s.useMemo(() => Object.values(r).some(e => null == e.premiumGuildSubscription), [r]),
    a = null != t,
    o = a && !1 === i;
  return s.useMemo(() => {
    let r = {
      redeemableAt: null == e ? void 0 : e.redeemable_at,
      tenureRewardStatusId: null == e ? void 0 : e.id
    };
    if (o) return {
      ...r,
      nitroTenureStatus: N.NitroRewardStatus.REDEEMED,
      tenureRewardSkuId: t.skuId,
      showNotification: !0,
      showCard: !0
    };
    if (a) return {
      ...r,
      nitroTenureStatus: N.NitroRewardStatus.REDEEMABLE,
      tenureRewardSkuId: t.skuId,
      showNotification: !0,
      showCard: !0
    };
    if (!(null != e && (0, m.isUserTenureRewardStatusActive)(e))) return null;
    else {
      if (null == e.redeemable_at || null == e.next_tenure_reward_id) return null;
      let t = -1;
      if ((t = null != e.redeemable_in_ms ? Math.ceil(n().duration(e.redeemable_in_ms).asDays()) : n()(e.redeemable_at).diff(n().utc(), "days")) < 0) return null;
      let s = !1,
        i = !1;
      return e.next_tenure_reward_id === N.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH ? (i = t <= N.MAX_DAYS_LEFT_TO_SHOW_NOTIFICATION_1_MONTH_VARIANT, s = t <= N.MAX_DAYS_LEFT_TO_SHOW_CARD_1_MONTH_VARIANT) : e.next_tenure_reward_id === N.TenureRewardSKUs.FREE_GUILD_BOOST_3_MONTHS && (i = t <= N.MAX_DAYS_LEFT_TO_SHOW_NOTIFICATION_3_MONTH_VARIANT, s = t <= N.MAX_DAYS_LEFT_TO_SHOW_CARD_3_MONTH_VARIANT), {
        ...r,
        nitroTenureStatus: N.NitroRewardStatus.PENDING,
        tenureRewardSkuId: e.next_tenure_reward_id,
        redeemableInDays: 0 === t ? 1 : t,
        showNotification: i,
        showCard: s
      }
    }
  }, [a, t, e, o])
}

function g(e) {
  let {
    showAnimations: t
  } = e, r = (0, l.useStateFromStores)([u.default], () => u.default.useReducedMotion), s = A();
  if (null == s) return;
  let {
    redeemableInDays: i = 0,
    tenureRewardSkuId: n
  } = s, a = N.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH === n ? N.NUM_DAYS_REQUIRED_1_MONTH_VARIANT : N.NUM_DAYS_3_REQUIRED_MONTH_VARIANT, o = Math.min(a, Math.max(a - i, 0)), d = 100 * o / a;
  return {
    initialPercentage: t && !r ? 100 * Math.max(o - .25 * a, 0) / a : d,
    percentage: d
  }
}
let I = new Set;

function L() {
  let e = (0, l.useStateFromStores)([E.default], () => {
    var e;
    return null !== (e = E.default.getForApplication(w.PREMIUM_SUBSCRIPTION_APPLICATION)) && void 0 !== e ? e : I
  }, [], R.areSetsEqual);
  if (null != (0, m.getPremiumTier2Entitlement)(e)) return (0, m.getTenureRewardEntitlement)([N.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH, N.TenureRewardSKUs.FREE_GUILD_BOOST_3_MONTHS], e)
}
let j = e => {
    if (null == e || (null == e ? void 0 : e.showNotification) === !1) return [];
    switch (e.nitroTenureStatus) {
      case N.NitroRewardStatus.PENDING:
        return [a.DismissibleContent.TENURE_REWARD_PENDING];
      case N.NitroRewardStatus.REDEEMABLE:
        return [a.DismissibleContent.TENURE_REWARD_REDEEMABLE];
      default:
        return []
    }
  },
  D = () => {
    let e = A(),
      [t, r] = s.useState(j(e)),
      i = (0, h.useUserEligibleForNitroTenureRewardCard)({
        location: "Home"
      });
    s.useEffect(() => {
      !1 !== i && r(j(e))
    }, [e, i]);
    let [n] = (0, _.useSelectedDismissibleContent)(i ? t : []);
    return i ? null != e && !0 === e.showNotification && (n === a.DismissibleContent.TENURE_REWARD_REDEEMABLE || n === a.DismissibleContent.TENURE_REWARD_PENDING) ? (0, m.getTenureRewardBadgeDescription)(e.nitroTenureStatus) : null : null
  },
  F = () => {
    var e;
    let t = null === (e = A()) || void 0 === e ? void 0 : e.nitroTenureStatus,
      r = (0, h.useUserEligibleForNitroTenureRewardCard)({
        location: "Home"
      }) && null != t && t === N.NitroRewardStatus.REDEEMABLE,
      [s] = (0, _.useSelectedDismissibleContent)(r ? [a.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI] : []);
    return !!r && s === a.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI
  },
  M = () => {
    let e = A(),
      t = j(e),
      [r] = (0, c.useGetDismissibleContent)(t),
      i = s.useRef(!1);
    return s.useCallback(() => {
      null != e && !0 === e.showNotification && (r === a.DismissibleContent.TENURE_REWARD_REDEEMABLE || r === a.DismissibleContent.TENURE_REWARD_PENDING) && ((0, d.markDismissibleContentAsDismissed)(r), r === a.DismissibleContent.TENURE_REWARD_PENDING && !1 === i.current && (p.default.track(O.AnalyticEvents.USER_NITRO_TENURE_REWARD_ACKNOWLEDGED, {
        user_tenure_reward_id: null == e ? void 0 : e.tenureRewardStatusId,
        tenure_reward_id: e.tenureRewardSkuId,
        reward_type: N.NitroRewardType.SERVER_BOOST,
        redeemable_at: null == e ? void 0 : e.redeemableAt
      }), i.current = !0))
    }, [e, r])
  };

function U() {
  let {
    hasFetchedPremiumApplicationEntitlements: e,
    isFetchingPremiumApplicationEntitlements: t
  } = (0, l.useStateFromStoresObject)([E.default], () => ({
    hasFetchedPremiumApplicationEntitlements: E.default.isFetchedForApplication(w.PREMIUM_SUBSCRIPTION_APPLICATION),
    isFetchingPremiumApplicationEntitlements: E.default.isFetchingForApplication(w.PREMIUM_SUBSCRIPTION_APPLICATION)
  })), r = (0, l.useStateFromStores)([C.default], () => {
    let e = C.default.getCurrentUser();
    return null != e && (0, x.isPremiumExactly)(e, w.PremiumTypes.TIER_2)
  }), i = s.useRef(!1);
  s.useEffect(() => {
    !1 === e && !1 === t && !0 === r && !1 === i.current && (o.fetchUserEntitlementsForApplication(w.PREMIUM_SUBSCRIPTION_APPLICATION), i.current = !0)
  }, [e, t, r])
}

function v() {
  var e;
  U();
  let t = A(),
    r = null !== (e = null == t ? void 0 : t.showCard) && void 0 !== e && e;
  s.useEffect(() => {
    r && T.default.forceRefreshIfOutdated()
  }, [r])
}