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
  S = n("976644"),
  h = n("559629"),
  A = n("466111"),
  m = n("74538"),
  N = n("474936"),
  p = n("981631"),
  O = n("689938"),
  C = n("928069");
t.default = function(e) {
  let {
    isGift: t,
    subscriptionTier: r,
    onClick: R,
    size: g,
    className: L,
    trialId: v,
    isTrialCTA: D,
    buttonText: M,
    buttonTextClassName: y,
    iconClassName: P,
    postSuccessGuild: U,
    onSubscribeModalClose: b,
    premiumModalAnalyticsLocation: G,
    showIcon: w = !0,
    disableShine: k,
    applicationId: B,
    giftMessage: V,
    overrideDisabledButtonText: x,
    shinyButtonClassName: F,
    onClickOverride: H,
    ...Y
  } = e, j = (0, a.useStateFromStores)([I.default], () => I.default.getCurrentUser()), W = (0, a.useStateFromStores)([f.default], () => f.default.isFocused()), K = (0, a.useStateFromStores)([T.default], () => T.default.getPremiumTypeSubscription()), {
    analyticsLocations: z
  } = (0, u.default)(), Z = e => {
    if (e.preventDefault(), null == j) {
      (0, c.transitionTo)(p.Routes.LOGIN);
      return
    }
    if (null == R || R(e), (null == K ? void 0 : K.status) === p.SubscriptionStatusTypes.ACCOUNT_HOLD) {
      (0, d.trackPremiumSettingsPaneOpened)(), l.default.open(p.UserSettingsSections.PREMIUM), null == b || b(!1);
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
      let f = p.AnalyticsObjectTypes.BUY;
      null != l ? f = p.AnalyticsObjectTypes.TRIAL : s && (f = p.AnalyticsObjectTypes.GIFT), (0, _.default)({
        isGift: s,
        initialPlanId: null,
        subscriptionTier: a,
        analyticsLocations: c,
        analyticsObject: {
          object: p.AnalyticsObjects.BUTTON_CTA,
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
      trialId: v,
      postSuccessGuild: U,
      onSubscribeModalClose: b,
      analyticsLocations: z,
      premiumModalAnalyticsLocation: G,
      applicationId: B,
      giftMessage: V
    })
  };
  if (D) return (0, i.jsxs)(o.Button, {
    size: g,
    className: L,
    innerClassName: C.premiumSubscribeButton,
    color: o.Button.Colors.BRAND_INVERTED,
    onClick: null != H ? H : Z,
    ...Y,
    children: [w && (0, i.jsx)(A.default, {
      className: C.premiumIcon
    }), (0, i.jsx)("span", {
      className: s()(C.buttonText, y),
      children: null != M ? M : O.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT
    })]
  });
  if (t) return (0, i.jsxs)(o.Button, {
    size: g,
    className: L,
    innerClassName: C.giftButton,
    color: o.Button.Colors.PRIMARY,
    onClick: null != H ? H : Z,
    ...Y,
    children: [(0, i.jsx)(h.default, {
      className: C.giftIcon
    }), (0, i.jsx)("span", {
      className: s()(C.buttonText, y),
      children: null != M ? M : O.default.Messages.PREMIUM_GIFTING_BUTTON
    })]
  });
  let X = O.default.Messages.APPLICATION_STORE_GET_PREMIUM,
    Q = null != K ? (0, m.getPremiumPlanItem)(K) : null,
    q = null != Q ? m.default.getPremiumType(Q.planId) : null == j ? void 0 : j.premiumType,
    J = r === N.PremiumSubscriptionSKUs.TIER_2 && null != q && [N.PremiumTypes.TIER_0, N.PremiumTypes.TIER_1].includes(q);
  J && (X = O.default.Messages.BILLING_SWITCH_PLAN_UPGRADE);
  let $ = null != K && K.status !== p.SubscriptionStatusTypes.ACCOUNT_HOLD && !(0, E.isNoneSubscription)(K.planId) && !J,
    ee = $ ? null != x ? x : function(e) {
      let {
        ctaSubscriptionSkuId: t,
        currentPremiumType: n
      } = e, i = null, r = null;
      if (null != t && t !== N.PremiumSubscriptionSKUs.LEGACY && t !== N.PremiumSubscriptionSKUs.TIER_0 && t !== N.PremiumSubscriptionSKUs.TIER_1 && t !== N.PremiumSubscriptionSKUs.TIER_2) return {
        disabledButtonText: i,
        disabledButtonTooltipText: r
      };
      let s = null != t ? N.PremiumSubscriptionSKUToPremiumType[(0, m.castPremiumSubscriptionAsSkuId)(t)] : null,
        a = null != s ? N.PremiumTypeOrder[s] : null,
        o = null != n ? N.PremiumTypeOrder[n] : null;
      return null != o && null != a && a < o ? (i = O.default.Messages.APPLICATION_STORE_GET_PREMIUM, r = O.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null != s && null != n && s === n ? (i = O.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, r = O.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null == s && null != n && n === N.PremiumTypes.TIER_2 && (r = O.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP), {
        disabledButtonText: i,
        disabledButtonTooltipText: r
      }
    }({
      ctaSubscriptionSkuId: r,
      currentPremiumType: q
    }) : null;

  function et(e) {
    var t, n;
    return (0, i.jsxs)(S.default, {
      disabled: $,
      onClick: null != H ? H : Z,
      innerClassName: C.premiumSubscribeButton,
      color: r === N.PremiumSubscriptionSKUs.TIER_1 ? o.Button.Colors.PRIMARY : o.Button.Colors.GREEN,
      size: g,
      className: F,
      wrapperClassName: L,
      pauseAnimation: !W || k,
      ...Y,
      ...e,
      children: [w && (0, i.jsx)(A.default, {
        className: s()(C.premiumIcon, P)
      }), (0, i.jsx)("span", {
        className: s()(C.buttonText, y),
        children: null !== (n = null !== (t = null == ee ? void 0 : ee.disabledButtonText) && void 0 !== t ? t : M) && void 0 !== n ? n : X
      })]
    })
  }
  return (null == ee ? void 0 : ee.disabledButtonTooltipText) != null ? (0, i.jsx)(o.Tooltip, {
    text: ee.disabledButtonTooltipText,
    children: et
  }) : et()
}