"use strict";
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(442837),
  a = n(481060),
  l = n(230711),
  u = n(906732),
  _ = n(543241),
  c = n(963249),
  d = n(703656),
  E = n(301766),
  I = n(594174),
  T = n(78839),
  h = n(451478),
  f = n(74538),
  S = n(474936),
  A = n(981631),
  N = n(689938),
  m = n(825128);
t.Z = function(e) {
  let {
    isGift: t,
    subscriptionTier: r,
    onClick: O,
    size: R,
    className: p,
    trialId: g,
    isTrialCTA: C,
    buttonText: v,
    buttonTextClassName: L,
    iconClassName: D,
    postSuccessGuild: M,
    onSubscribeModalClose: P,
    premiumModalAnalyticsLocation: y,
    showIcon: U = !0,
    disableShine: b,
    applicationId: G,
    giftMessage: w,
    overrideDisabledButtonText: B,
    shinyButtonClassName: x,
    onClickOverride: k,
    showGradient: V = !1,
    ...Z
  } = e, H = (0, o.e7)([I.default], () => I.default.getCurrentUser()), F = (0, o.e7)([h.Z], () => h.Z.isFocused()), Y = (0, o.e7)([T.ZP], () => T.ZP.getPremiumTypeSubscription()), {
    analyticsLocations: j
  } = (0, u.ZP)(), W = e => {
    if (e.preventDefault(), null == H) {
      (0, d.uL)(A.Z5c.LOGIN);
      return
    }
    if (null == O || O(e), (null == Y ? void 0 : Y.status) === A.O0b.ACCOUNT_HOLD) {
      (0, _.A3)(), l.Z.open(A.oAB.PREMIUM), null == P || P(!1);
      return
    }! function(e) {
      let {
        isClaimed: t,
        isVerified: r,
        isGift: s,
        subscriptionTier: o,
        trialId: l,
        postSuccessGuild: u,
        onSubscribeModalClose: _,
        analyticsLocations: d,
        premiumModalAnalyticsLocation: E,
        applicationId: I,
        giftMessage: T
      } = e;
      if (!t) {
        (0, a.openModalLazy)(async () => {
          let {
            default: e
          } = await n.e("69417").then(n.bind(n, 918995));
          return t => {
            let {
              onClose: n,
              ...r
            } = t;
            return (0, i.jsx)(e, {
              ...r,
              onClose: n
            })
          }
        });
        return
      }
      if (!r) {
        (0, a.openModalLazy)(async () => {
          let {
            default: e
          } = await n.e("20102").then(n.bind(n, 444688));
          return t => {
            let {
              onClose: n,
              ...r
            } = t;
            return (0, i.jsx)(e, {
              ...r,
              onClose: n
            })
          }
        });
        return
      }
      let h = A.Qqv.BUY;
      null != l ? h = A.Qqv.TRIAL : s && (h = A.Qqv.GIFT), (0, c.Z)({
        isGift: s,
        initialPlanId: null,
        subscriptionTier: o,
        analyticsLocations: d,
        analyticsObject: {
          object: A.qAy.BUTTON_CTA,
          objectType: h,
          ...E
        },
        trialId: l,
        postSuccessGuild: u,
        onClose: _,
        applicationId: I,
        giftMessage: T
      })
    }({
      isClaimed: H.isClaimed(),
      isVerified: H.verified,
      isGift: t,
      subscriptionTier: r,
      trialId: g,
      postSuccessGuild: M,
      onSubscribeModalClose: P,
      analyticsLocations: j,
      premiumModalAnalyticsLocation: y,
      applicationId: G,
      giftMessage: w
    })
  };
  if (C) return (0, i.jsxs)(a.Button, {
    size: R,
    className: p,
    innerClassName: m.premiumSubscribeButton,
    color: a.Button.Colors.BRAND_INVERTED,
    onClick: null != k ? k : W,
    ...Z,
    children: [U && (0, i.jsx)(a.NitroWheelIcon, {
      size: "md",
      color: "currentColor",
      className: m.premiumIcon
    }), (0, i.jsx)("span", {
      className: s()(m.buttonText, L),
      children: null != v ? v : N.Z.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT
    })]
  });
  if (t) return (0, i.jsxs)(a.Button, {
    size: R,
    className: p,
    innerClassName: m.giftButton,
    color: a.Button.Colors.PRIMARY,
    onClick: null != k ? k : W,
    ...Z,
    children: [(0, i.jsx)(a.GiftIcon, {
      size: "md",
      color: "currentColor",
      className: m.giftIcon
    }), (0, i.jsx)("span", {
      className: s()(m.buttonText, L),
      children: null != v ? v : N.Z.Messages.PREMIUM_GIFTING_BUTTON
    })]
  });
  let K = N.Z.Messages.APPLICATION_STORE_GET_PREMIUM,
    z = null != Y ? (0, f.Af)(Y) : null,
    q = null != z ? f.ZP.getPremiumType(z.planId) : null == H ? void 0 : H.premiumType,
    X = r === S.Si.TIER_2 && null != q && [S.p9.TIER_0, S.p9.TIER_1].includes(q);
  X && (K = N.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE);
  let Q = null != Y && Y.status !== A.O0b.ACCOUNT_HOLD && !(0, E.Q0)(Y.planId) && !X,
    J = Q ? null != B ? B : function(e) {
      let {
        ctaSubscriptionSkuId: t,
        currentPremiumType: n
      } = e, i = null, r = null;
      if (null != t && t !== S.Si.LEGACY && t !== S.Si.TIER_0 && t !== S.Si.TIER_1 && t !== S.Si.TIER_2) return {
        disabledButtonText: i,
        disabledButtonTooltipText: r
      };
      let s = null != t ? S.y7[(0, f.Wz)(t)] : null,
        o = null != s ? S.$e[s] : null,
        a = null != n ? S.$e[n] : null;
      return null != a && null != o && o < a ? (i = N.Z.Messages.APPLICATION_STORE_GET_PREMIUM, r = N.Z.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null != s && null != n && s === n ? (i = N.Z.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, r = N.Z.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null == s && null != n && n === S.p9.TIER_2 && (r = N.Z.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP), {
        disabledButtonText: i,
        disabledButtonTooltipText: r
      }
    }({
      ctaSubscriptionSkuId: r,
      currentPremiumType: q
    }) : null;

  function $(e) {
    var t, n;
    return (0, i.jsxs)(a.ShinyButton, {
      disabled: Q,
      onClick: null != k ? k : W,
      innerClassName: m.premiumSubscribeButton,
      color: r === S.Si.TIER_1 ? a.Button.Colors.PRIMARY : a.Button.Colors.GREEN,
      size: R,
      className: x,
      wrapperClassName: s()({
        [m.tier2Gradient]: V && r === S.Si.TIER_2,
        [m.tier1Gradient]: V && r === S.Si.TIER_1
      }, p),
      pauseAnimation: !F || b,
      ...Z,
      ...e,
      children: [U && (0, i.jsx)(a.NitroWheelIcon, {
        size: "md",
        color: "currentColor",
        className: s()(m.premiumIcon, D)
      }), (0, i.jsx)("span", {
        className: s()(m.buttonText, L),
        children: null !== (n = null !== (t = null == J ? void 0 : J.disabledButtonText) && void 0 !== t ? t : v) && void 0 !== n ? n : K
      })]
    })
  }
  return (null == J ? void 0 : J.disabledButtonTooltipText) != null ? (0, i.jsx)(a.Tooltip, {
    text: J.disabledButtonTooltipText,
    children: $
  }) : $()
}