"use strict";
r.r(t), r.d(t, {
  useClearTenureBadge: function() {
    return p
  },
  useFetchEntitlementsForTenureReward: function() {
    return v
  },
  useFetchTenureRewardStatusDetails: function() {
    return b
  },
  useFreeBoostTenureRewardEntitlement: function() {
    return F
  },
  useFreeBoostUserTenureReward: function() {
    return h
  },
  useShouldShowConfettiAndGlow: function() {
    return L
  },
  useTenureRewardBadgeDescription: function() {
    return U
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
  c = r("243778"),
  _ = r("594174"),
  E = r("314884"),
  R = r("580130"),
  T = r("626135"),
  S = r("823379"),
  N = r("111361"),
  f = r("595878"),
  m = r("944880"),
  A = r("513785"),
  D = r("106255"),
  w = r("474936"),
  I = r("735825"),
  O = r("981631");

function h() {
  let e = function() {
      var e;
      let t = (0, u.useStateFromStoresObject)([A.default], () => A.default.getState());
      if (null != t) return null !== (e = t.userTenureRewardStatusByRewardId[I.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH]) && void 0 !== e ? e : t.userTenureRewardStatusByRewardId[I.TenureRewardSKUs.FREE_GUILD_BOOST_3_MONTHS]
    }(),
    t = F(),
    r = (0, u.useStateFromStores)([E.default], () => E.default.boostSlots),
    s = n.useMemo(() => Object.values(r).some(e => null == e.premiumGuildSubscription), [r]),
    a = null != t,
    l = a && !1 === s;
  return n.useMemo(() => {
    let r = {
      redeemableAt: null == e ? void 0 : e.redeemable_at,
      tenureRewardStatusId: null == e ? void 0 : e.id
    };
    if (l) return {
      ...r,
      nitroTenureStatus: I.NitroRewardStatus.REDEEMED,
      tenureRewardSkuId: t.skuId,
      showNotification: !0,
      showCard: !0
    };
    if (a) return {
      ...r,
      nitroTenureStatus: I.NitroRewardStatus.REDEEMABLE,
      tenureRewardSkuId: t.skuId,
      showNotification: !0,
      showCard: !0
    };
    if (!(null != e && (0, D.isUserTenureRewardStatusActive)(e))) return null;
    else {
      if (null == e.redeemable_at || null == e.next_tenure_reward_id) return null;
      let t = -1;
      if ((t = null != e.redeemable_in_ms ? Math.ceil(i().duration(e.redeemable_in_ms).asDays()) : i()(e.redeemable_at).diff(i().utc(), "days")) < 0) return null;
      let n = !1,
        s = !1;
      return e.next_tenure_reward_id === I.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH ? (s = t <= I.MAX_DAYS_LEFT_TO_SHOW_NOTIFICATION_1_MONTH_VARIANT, n = t <= I.MAX_DAYS_LEFT_TO_SHOW_CARD_1_MONTH_VARIANT) : e.next_tenure_reward_id === I.TenureRewardSKUs.FREE_GUILD_BOOST_3_MONTHS && (s = t <= I.MAX_DAYS_LEFT_TO_SHOW_NOTIFICATION_3_MONTH_VARIANT, n = t <= I.MAX_DAYS_LEFT_TO_SHOW_CARD_3_MONTH_VARIANT), {
        ...r,
        nitroTenureStatus: I.NitroRewardStatus.PENDING,
        tenureRewardSkuId: e.next_tenure_reward_id,
        redeemableInDays: 0 === t ? 1 : t,
        showNotification: s,
        showCard: n
      }
    }
  }, [a, t, e, l])
}
let C = new Set;

function F() {
  let e = (0, u.useStateFromStores)([R.default], () => {
    var e;
    return null !== (e = R.default.getForApplication(w.PREMIUM_SUBSCRIPTION_APPLICATION)) && void 0 !== e ? e : C
  }, [], S.areSetsEqual);
  if (null != (0, D.getPremiumTier2Entitlement)(e)) return (0, D.getTenureRewardEntitlement)([I.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH, I.TenureRewardSKUs.FREE_GUILD_BOOST_3_MONTHS], e)
}
let M = e => {
    if (null == e || (null == e ? void 0 : e.showNotification) === !1) return [];
    switch (e.nitroTenureStatus) {
      case I.NitroRewardStatus.PENDING:
        return [a.DismissibleContent.TENURE_REWARD_PENDING];
      case I.NitroRewardStatus.REDEEMABLE:
        return [a.DismissibleContent.TENURE_REWARD_REDEEMABLE];
      default:
        return []
    }
  },
  U = () => {
    let e = h(),
      [t, r] = n.useState(M(e)),
      s = (0, f.useUserEligibleForNitroTenureRewardCard)({
        location: "Home"
      });
    n.useEffect(() => {
      !1 !== s && r(M(e))
    }, [e, s]);
    let [i] = (0, c.useSelectedDismissibleContent)(s ? t : []);
    return s ? null != e && !0 === e.showNotification && (i === a.DismissibleContent.TENURE_REWARD_REDEEMABLE || i === a.DismissibleContent.TENURE_REWARD_PENDING) ? (0, D.getTenureRewardBadgeDescription)(e.nitroTenureStatus) : null : null
  },
  L = () => {
    var e;
    let t = null === (e = h()) || void 0 === e ? void 0 : e.nitroTenureStatus,
      r = (0, f.useUserEligibleForNitroTenureRewardCard)({
        location: "Home"
      }) && null != t && t === I.NitroRewardStatus.REDEEMABLE,
      [n] = (0, c.useSelectedDismissibleContent)(r ? [a.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI] : []);
    return !!r && n === a.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI
  },
  p = () => {
    let e = h(),
      t = M(e),
      [r] = (0, d.useGetDismissibleContent)(t),
      s = n.useRef(!1);
    return n.useCallback(() => {
      null != e && !0 === e.showNotification && (r === a.DismissibleContent.TENURE_REWARD_REDEEMABLE || r === a.DismissibleContent.TENURE_REWARD_PENDING) && ((0, o.markDismissibleContentAsDismissed)(r), r === a.DismissibleContent.TENURE_REWARD_PENDING && !1 === s.current && (T.default.track(O.AnalyticEvents.USER_NITRO_TENURE_REWARD_ACKNOWLEDGED, {
        user_tenure_reward_id: null == e ? void 0 : e.tenureRewardStatusId,
        tenure_reward_id: e.tenureRewardSkuId,
        reward_type: I.NitroRewardType.SERVER_BOOST,
        redeemable_at: null == e ? void 0 : e.redeemableAt
      }), s.current = !0))
    }, [e, r])
  };

function v() {
  let {
    hasFetchedPremiumApplicationEntitlements: e,
    isFetchingPremiumApplicationEntitlements: t
  } = (0, u.useStateFromStoresObject)([R.default], () => ({
    hasFetchedPremiumApplicationEntitlements: R.default.isFetchedForApplication(w.PREMIUM_SUBSCRIPTION_APPLICATION),
    isFetchingPremiumApplicationEntitlements: R.default.isFetchingForApplication(w.PREMIUM_SUBSCRIPTION_APPLICATION)
  })), r = (0, u.useStateFromStores)([_.default], () => {
    let e = _.default.getCurrentUser();
    return null != e && (0, N.isPremiumExactly)(e, w.PremiumTypes.TIER_2)
  }), s = n.useRef(!1);
  n.useEffect(() => {
    !1 === e && !1 === t && !0 === r && !1 === s.current && (l.fetchUserEntitlementsForApplication(w.PREMIUM_SUBSCRIPTION_APPLICATION), s.current = !0)
  }, [e, t, r])
}

function b() {
  var e;
  v();
  let t = h(),
    r = null !== (e = null == t ? void 0 : t.showCard) && void 0 !== e && e;
  n.useEffect(() => {
    r && m.default.forceRefreshIfOutdated()
  }, [r])
}