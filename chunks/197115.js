"use strict";
n.r(t);
var i = n("735250");
n("470079");
var r = n("120356"),
  s = n.n(r),
  a = n("442837"),
  o = n("481060"),
  l = n("230711"),
  u = n("906732"),
  d = n("543241"),
  _ = n("963249"),
  c = n("703656"),
  E = n("301766"),
  I = n("594174"),
  T = n("78839"),
  f = n("451478"),
  S = n("559629"),
  h = n("466111"),
  A = n("74538"),
  m = n("474936"),
  N = n("981631"),
  p = n("689938"),
  O = n("928069");
t.default = function(e) {
  let {
    isGift: t,
    subscriptionTier: r,
    onClick: C,
    size: R,
    className: g,
    trialId: L,
    isTrialCTA: v,
    buttonText: D,
    buttonTextClassName: M,
    iconClassName: y,
    postSuccessGuild: P,
    onSubscribeModalClose: U,
    premiumModalAnalyticsLocation: b,
    showIcon: G = !0,
    disableShine: w,
    applicationId: k,
    giftMessage: B,
    overrideDisabledButtonText: V,
    shinyButtonClassName: x,
    onClickOverride: F,
    showGradient: H = !1,
    ...Y
  } = e, j = (0, a.useStateFromStores)([I.default], () => I.default.getCurrentUser()), W = (0, a.useStateFromStores)([f.default], () => f.default.isFocused()), K = (0, a.useStateFromStores)([T.default], () => T.default.getPremiumTypeSubscription()), {
    analyticsLocations: z
  } = (0, u.default)(), Z = e => {
    if (e.preventDefault(), null == j) {
      (0, c.transitionTo)(N.Routes.LOGIN);
      return
    }
    if (null == C || C(e), (null == K ? void 0 : K.status) === N.SubscriptionStatusTypes.ACCOUNT_HOLD) {
      (0, d.trackPremiumSettingsPaneOpened)(), l.default.open(N.UserSettingsSections.PREMIUM), null == U || U(!1);
      return
    }! function(e) {
      let {
        isClaimed: t,
        isVerified: r,
        isGift: s,
        subscriptionTier: a,
        trialId: l,
        postSuccessGuild: u,
        onSubscribeModalClose: d,
        analyticsLocations: c,
        premiumModalAnalyticsLocation: E,
        applicationId: I,
        giftMessage: T
      } = e;
      if (!t) {
        (0, o.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("96645")]).then(n.bind(n, "918995"));
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
        (0, o.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("35822")]).then(n.bind(n, "444688"));
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
      let f = N.AnalyticsObjectTypes.BUY;
      null != l ? f = N.AnalyticsObjectTypes.TRIAL : s && (f = N.AnalyticsObjectTypes.GIFT), (0, _.default)({
        isGift: s,
        initialPlanId: null,
        subscriptionTier: a,
        analyticsLocations: c,
        analyticsObject: {
          object: N.AnalyticsObjects.BUTTON_CTA,
          objectType: f,
          ...E
        },
        trialId: l,
        postSuccessGuild: u,
        onClose: d,
        applicationId: I,
        giftMessage: T
      })
    }({
      isClaimed: j.isClaimed(),
      isVerified: j.verified,
      isGift: t,
      subscriptionTier: r,
      trialId: L,
      postSuccessGuild: P,
      onSubscribeModalClose: U,
      analyticsLocations: z,
      premiumModalAnalyticsLocation: b,
      applicationId: k,
      giftMessage: B
    })
  };
  if (v) return (0, i.jsxs)(o.Button, {
    size: R,
    className: g,
    innerClassName: O.premiumSubscribeButton,
    color: o.Button.Colors.BRAND_INVERTED,
    onClick: null != F ? F : Z,
    ...Y,
    children: [G && (0, i.jsx)(h.default, {
      className: O.premiumIcon
    }), (0, i.jsx)("span", {
      className: s()(O.buttonText, M),
      children: null != D ? D : p.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT
    })]
  });
  if (t) return (0, i.jsxs)(o.Button, {
    size: R,
    className: g,
    innerClassName: O.giftButton,
    color: o.Button.Colors.PRIMARY,
    onClick: null != F ? F : Z,
    ...Y,
    children: [(0, i.jsx)(S.default, {
      className: O.giftIcon
    }), (0, i.jsx)("span", {
      className: s()(O.buttonText, M),
      children: null != D ? D : p.default.Messages.PREMIUM_GIFTING_BUTTON
    })]
  });
  let Q = p.default.Messages.APPLICATION_STORE_GET_PREMIUM,
    X = null != K ? (0, A.getPremiumPlanItem)(K) : null,
    q = null != X ? A.default.getPremiumType(X.planId) : null == j ? void 0 : j.premiumType,
    J = r === m.PremiumSubscriptionSKUs.TIER_2 && null != q && [m.PremiumTypes.TIER_0, m.PremiumTypes.TIER_1].includes(q);
  J && (Q = p.default.Messages.BILLING_SWITCH_PLAN_UPGRADE);
  let $ = null != K && K.status !== N.SubscriptionStatusTypes.ACCOUNT_HOLD && !(0, E.isNoneSubscription)(K.planId) && !J,
    ee = $ ? null != V ? V : function(e) {
      let {
        ctaSubscriptionSkuId: t,
        currentPremiumType: n
      } = e, i = null, r = null;
      if (null != t && t !== m.PremiumSubscriptionSKUs.LEGACY && t !== m.PremiumSubscriptionSKUs.TIER_0 && t !== m.PremiumSubscriptionSKUs.TIER_1 && t !== m.PremiumSubscriptionSKUs.TIER_2) return {
        disabledButtonText: i,
        disabledButtonTooltipText: r
      };
      let s = null != t ? m.PremiumSubscriptionSKUToPremiumType[(0, A.castPremiumSubscriptionAsSkuId)(t)] : null,
        a = null != s ? m.PremiumTypeOrder[s] : null,
        o = null != n ? m.PremiumTypeOrder[n] : null;
      return null != o && null != a && a < o ? (i = p.default.Messages.APPLICATION_STORE_GET_PREMIUM, r = p.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null != s && null != n && s === n ? (i = p.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, r = p.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null == s && null != n && n === m.PremiumTypes.TIER_2 && (r = p.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP), {
        disabledButtonText: i,
        disabledButtonTooltipText: r
      }
    }({
      ctaSubscriptionSkuId: r,
      currentPremiumType: q
    }) : null;

  function et(e) {
    var t, n;
    return (0, i.jsxs)(o.ShinyButton, {
      disabled: $,
      onClick: null != F ? F : Z,
      innerClassName: O.premiumSubscribeButton,
      color: r === m.PremiumSubscriptionSKUs.TIER_1 ? o.Button.Colors.PRIMARY : o.Button.Colors.GREEN,
      size: R,
      className: x,
      wrapperClassName: s()({
        [O.tier2Gradient]: H && r === m.PremiumSubscriptionSKUs.TIER_2,
        [O.tier1Gradient]: H && r === m.PremiumSubscriptionSKUs.TIER_1
      }, g),
      pauseAnimation: !W || w,
      ...Y,
      ...e,
      children: [G && (0, i.jsx)(h.default, {
        className: s()(O.premiumIcon, y)
      }), (0, i.jsx)("span", {
        className: s()(O.buttonText, M),
        children: null !== (n = null !== (t = null == ee ? void 0 : ee.disabledButtonText) && void 0 !== t ? t : D) && void 0 !== n ? n : Q
      })]
    })
  }
  return (null == ee ? void 0 : ee.disabledButtonTooltipText) != null ? (0, i.jsx)(o.Tooltip, {
    text: ee.disabledButtonTooltipText,
    children: et
  }) : et()
}