"use strict";
r.r(t), r.d(t, {
  getTenureRewardDimissibleContentType: function() {
    return L
  },
  useClearTenureBadge: function() {
    return D
  },
  useFetchEntitlementsForTenureReward: function() {
    return F
  },
  useFetchTenureRewardStatusDetails: function() {
    return U
  },
  useFreeBoostDaysPercentage: function() {
    return w
  },
  useFreeBoostTenureRewardEntitlement: function() {
    return I
  },
  useFreeBoostUserTenureReward: function() {
    return A
  },
  useShouldShowConfettiAndGlow: function() {
    return y
  },
  useTenureRewardBadgeDescription: function() {
    return M
  }
}), r("47120");
var s = r("470079"),
  n = r("913527"),
  i = r.n(n),
  l = r("442837"),
  a = r("524437"),
  o = r("496929"),
  u = r("607070"),
  d = r("605236"),
  c = r("706140"),
  _ = r("243778"),
  f = r("594174"),
  C = r("314884"),
  p = r("580130"),
  E = r("626135"),
  x = r("823379"),
  m = r("111361"),
  R = r("595878"),
  h = r("944880"),
  T = r("513785"),
  S = r("106255"),
  N = r("474936"),
  O = r("735825"),
  g = r("981631");

function A() {
  let e = function() {
      var e;
      let t = (0, l.useStateFromStoresObject)([T.default], () => T.default.getState());
      if (null != t) return null !== (e = t.userTenureRewardStatusByRewardId[O.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH]) && void 0 !== e ? e : t.userTenureRewardStatusByRewardId[O.TenureRewardSKUs.FREE_GUILD_BOOST_3_MONTHS]
    }(),
    t = I(),
    r = (0, l.useStateFromStores)([C.default], () => C.default.boostSlots),
    n = s.useMemo(() => Object.values(r).some(e => null == e.premiumGuildSubscription), [r]),
    a = null != t,
    o = a && !1 === n;
  return s.useMemo(() => {
    let r = {
      redeemableAt: null == e ? void 0 : e.redeemable_at,
      tenureRewardStatusId: null == e ? void 0 : e.id
    };
    if (o) return {
      ...r,
      nitroTenureStatus: O.NitroRewardStatus.REDEEMED,
      tenureRewardSkuId: t.skuId,
      showNotification: !0,
      showCard: !0
    };
    if (a) return {
      ...r,
      nitroTenureStatus: O.NitroRewardStatus.REDEEMABLE,
      tenureRewardSkuId: t.skuId,
      showNotification: !0,
      showCard: !0
    };
    if (!(null != e && (0, S.isUserTenureRewardStatusActive)(e))) return null;
    else {
      if (null == e.redeemable_at || null == e.next_tenure_reward_id) return null;
      let t = i()(e.redeemable_at).diff(i().utc(), "days"),
        s = null != e.redeemable_in_ms ? Math.ceil(i().duration(e.redeemable_in_ms).asDays()) : t;
      if (t < 0) return null;
      let n = !1,
        l = !1;
      return e.next_tenure_reward_id === O.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH ? (l = t <= O.MAX_DAYS_LEFT_TO_SHOW_NOTIFICATION_1_MONTH_VARIANT, n = t <= O.MAX_DAYS_LEFT_TO_SHOW_CARD_1_MONTH_VARIANT) : e.next_tenure_reward_id === O.TenureRewardSKUs.FREE_GUILD_BOOST_3_MONTHS && (l = t <= O.MAX_DAYS_LEFT_TO_SHOW_NOTIFICATION_3_MONTH_VARIANT, n = t <= O.MAX_DAYS_LEFT_TO_SHOW_CARD_3_MONTH_VARIANT), {
        ...r,
        nitroTenureStatus: O.NitroRewardStatus.PENDING,
        tenureRewardSkuId: e.next_tenure_reward_id,
        redeemableInDays: 0 === s ? 1 : s,
        showNotification: l,
        showCard: n
      }
    }
  }, [a, t, e, o])
}

function w(e) {
  let {
    showAnimations: t
  } = e, r = (0, l.useStateFromStores)([u.default], () => u.default.useReducedMotion), s = A();
  if (null == s) return;
  let {
    redeemableInDays: n = 0,
    tenureRewardSkuId: i
  } = s, a = O.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH === i ? O.NUM_DAYS_REQUIRED_1_MONTH_VARIANT : O.NUM_DAYS_3_REQUIRED_MONTH_VARIANT, o = Math.min(a, Math.max(a - n, 0)), d = 100 * o / a;
  return {
    initialPercentage: t && !r ? 100 * Math.max(o - .25 * a, 0) / a : d,
    percentage: d
  }
}
let j = new Set;

function I() {
  let e = (0, l.useStateFromStores)([p.default], () => {
      var e;
      return null !== (e = p.default.getForApplication(N.PREMIUM_SUBSCRIPTION_APPLICATION)) && void 0 !== e ? e : j
    }, [], x.areSetsEqual),
    t = (0, l.useStateFromStores)([f.default], () => {
      let e = f.default.getCurrentUser();
      return null != e && (0, m.isPremiumExactly)(e, N.PremiumTypes.TIER_2)
    });
  if (null != (0, S.getPremiumTier2Entitlement)(e) || !!t) return (0, S.getTenureRewardEntitlement)([O.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH, O.TenureRewardSKUs.FREE_GUILD_BOOST_3_MONTHS], e)
}
let L = e => {
    if (null == e || (null == e ? void 0 : e.showNotification) === !1) return [];
    switch (e.nitroTenureStatus) {
      case O.NitroRewardStatus.PENDING:
        return [a.DismissibleContent.TENURE_REWARD_PENDING];
      case O.NitroRewardStatus.REDEEMABLE:
        return [a.DismissibleContent.TENURE_REWARD_REDEEMABLE];
      default:
        return []
    }
  },
  M = () => {
    let e = A(),
      [t, r] = s.useState(L(e)),
      n = (0, R.useUserEligibleForNitroTenureRewardCard)({
        location: "Home"
      });
    s.useEffect(() => {
      !1 !== n && r(L(e))
    }, [e, n]);
    let [i] = (0, _.useSelectedDismissibleContent)(n ? t : []);
    return n ? null != e && !0 === e.showNotification && (i === a.DismissibleContent.TENURE_REWARD_REDEEMABLE || i === a.DismissibleContent.TENURE_REWARD_PENDING) ? (0, S.getTenureRewardBadgeDescription)(e.nitroTenureStatus) : null : null
  },
  y = () => {
    var e;
    let t = null === (e = A()) || void 0 === e ? void 0 : e.nitroTenureStatus,
      r = (0, R.useUserEligibleForNitroTenureRewardCard)({
        location: "Home"
      }) && null != t && t === O.NitroRewardStatus.REDEEMABLE,
      [s] = (0, _.useSelectedDismissibleContent)(r ? [a.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI] : []);
    return !!r && s === a.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI
  },
  D = () => {
    let e = A(),
      t = s.useMemo(() => L(e), [e]),
      [r] = (0, c.useGetDismissibleContent)(t),
      n = s.useRef(!1);
    return s.useCallback(() => {
      null != e && !0 === e.showNotification && (r === a.DismissibleContent.TENURE_REWARD_REDEEMABLE || r === a.DismissibleContent.TENURE_REWARD_PENDING) && ((0, d.markDismissibleContentAsDismissed)(r), r === a.DismissibleContent.TENURE_REWARD_PENDING && !1 === n.current && (E.default.track(g.AnalyticEvents.USER_NITRO_TENURE_REWARD_ACKNOWLEDGED, {
        user_tenure_reward_id: null == e ? void 0 : e.tenureRewardStatusId,
        tenure_reward_id: e.tenureRewardSkuId,
        reward_type: O.NitroRewardType.SERVER_BOOST,
        redeemable_at: null == e ? void 0 : e.redeemableAt
      }), n.current = !0))
    }, [e, r])
  };

function F() {
  let {
    hasFetchedPremiumApplicationEntitlements: e,
    isFetchingPremiumApplicationEntitlements: t
  } = (0, l.useStateFromStoresObject)([p.default], () => ({
    hasFetchedPremiumApplicationEntitlements: p.default.isFetchedForApplication(N.PREMIUM_SUBSCRIPTION_APPLICATION),
    isFetchingPremiumApplicationEntitlements: p.default.isFetchingForApplication(N.PREMIUM_SUBSCRIPTION_APPLICATION)
  })), r = (0, l.useStateFromStores)([f.default], () => {
    let e = f.default.getCurrentUser();
    return null != e && (0, m.isPremiumExactly)(e, N.PremiumTypes.TIER_2)
  }), n = s.useRef(!1);
  s.useEffect(() => {
    !1 === e && !1 === t && !0 === r && !1 === n.current && (o.fetchUserEntitlementsForApplication(N.PREMIUM_SUBSCRIPTION_APPLICATION), n.current = !0)
  }, [e, t, r])
}

function U() {
  var e;
  F();
  let t = A(),
    r = null !== (e = null == t ? void 0 : t.showCard) && void 0 !== e && e;
  s.useEffect(() => {
    r && h.default.forceRefreshIfOutdated()
  }, [r])
}