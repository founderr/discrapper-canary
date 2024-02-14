"use strict";
l.r(t), l.d(t, {
  default: function() {
    return L
  }
});
var n = l("37983");
l("884691");
var s = l("414456"),
  a = l.n(s),
  i = l("446674"),
  u = l("77078"),
  r = l("79112"),
  o = l("685665"),
  c = l("788506"),
  d = l("649844"),
  f = l("393414"),
  T = l("797647"),
  _ = l("697218"),
  E = l("521012"),
  p = l("471671"),
  S = l("181114"),
  m = l("978679"),
  I = l("216422"),
  P = l("719923"),
  C = l("646718"),
  M = l("49111"),
  R = l("782340"),
  N = l("917746"),
  L = function(e) {
    let {
      isGift: t,
      subscriptionTier: s,
      onClick: L,
      size: A,
      className: h,
      trialId: U,
      isTrialCTA: O,
      buttonText: y,
      buttonTextClassName: b,
      iconClassName: v,
      postSuccessGuild: x,
      onSubscribeModalClose: g,
      premiumModalAnalyticsLocation: B,
      showIcon: j = !0,
      disableShine: D,
      applicationId: G,
      giftMessage: H,
      overrideDisabledButtonText: F,
      shinyButtonClassName: k,
      ...w
    } = e, z = (0, i.useStateFromStores)([_.default], () => _.default.getCurrentUser()), V = (0, i.useStateFromStores)([p.default], () => p.default.isFocused()), Y = (0, i.useStateFromStores)([E.default], () => E.default.getPremiumTypeSubscription()), {
      analyticsLocations: K
    } = (0, o.default)(), W = e => {
      if (e.preventDefault(), null == z) {
        (0, f.transitionTo)(M.Routes.LOGIN);
        return
      }
      if (null == L || L(e), (null == Y ? void 0 : Y.status) === M.SubscriptionStatusTypes.ACCOUNT_HOLD) {
        (0, c.trackPremiumSettingsPaneOpened)(), r.default.open(M.UserSettingsSections.PREMIUM), null == g || g(!1);
        return
      }! function(e) {
        let {
          isClaimed: t,
          isVerified: s,
          isGift: a,
          subscriptionTier: i,
          trialId: r,
          postSuccessGuild: o,
          onSubscribeModalClose: c,
          analyticsLocations: f,
          premiumModalAnalyticsLocation: T,
          applicationId: _,
          giftMessage: E
        } = e;
        if (!t) {
          (0, u.openModalLazy)(async () => {
            let {
              default: e
            } = await l.el("984599").then(l.bind(l, "984599"));
            return t => {
              let {
                onClose: l,
                ...s
              } = t;
              return (0, n.jsx)(e, {
                ...s,
                onClose: l
              })
            }
          });
          return
        }
        if (!s) {
          (0, u.openModalLazy)(async () => {
            let {
              default: e
            } = await l.el("899917").then(l.bind(l, "899917"));
            return t => {
              let {
                onClose: l,
                ...s
              } = t;
              return (0, n.jsx)(e, {
                ...s,
                onClose: l
              })
            }
          });
          return
        }
        let p = M.AnalyticsObjectTypes.BUY;
        null != r ? p = M.AnalyticsObjectTypes.TRIAL : a && (p = M.AnalyticsObjectTypes.GIFT), (0, d.default)({
          isGift: a,
          initialPlanId: null,
          subscriptionTier: i,
          analyticsLocations: f,
          analyticsObject: {
            object: M.AnalyticsObjects.BUTTON_CTA,
            objectType: p,
            ...T
          },
          trialId: r,
          postSuccessGuild: o,
          onClose: c,
          applicationId: _,
          giftMessage: E
        })
      }({
        isClaimed: z.isClaimed(),
        isVerified: z.verified,
        isGift: t,
        subscriptionTier: s,
        trialId: U,
        postSuccessGuild: x,
        onSubscribeModalClose: g,
        analyticsLocations: K,
        premiumModalAnalyticsLocation: B,
        applicationId: G,
        giftMessage: H
      })
    };
    if (O) return (0, n.jsxs)(u.Button, {
      size: A,
      className: h,
      innerClassName: N.premiumSubscribeButton,
      look: u.Button.Looks.INVERTED,
      onClick: W,
      ...w,
      children: [j && (0, n.jsx)(I.default, {
        className: N.premiumIcon
      }), (0, n.jsx)("span", {
        className: a(N.buttonText, b),
        children: null != y ? y : R.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT
      })]
    });
    if (t) return (0, n.jsxs)(u.Button, {
      size: A,
      className: h,
      innerClassName: N.giftButton,
      color: u.Button.Colors.PRIMARY,
      onClick: W,
      ...w,
      children: [(0, n.jsx)(m.default, {
        className: N.giftIcon
      }), (0, n.jsx)("span", {
        className: a(N.buttonText, b),
        children: null != y ? y : R.default.Messages.PREMIUM_GIFTING_BUTTON
      })]
    });
    let Z = R.default.Messages.APPLICATION_STORE_GET_PREMIUM,
      q = null != Y ? (0, P.getPremiumPlanItem)(Y) : null,
      J = null != q ? P.default.getPremiumType(q.planId) : null == z ? void 0 : z.premiumType,
      Q = s === C.PremiumSubscriptionSKUs.TIER_2 && null != J && [C.PremiumTypes.TIER_0, C.PremiumTypes.TIER_1].includes(J);
    Q && (Z = R.default.Messages.BILLING_SWITCH_PLAN_UPGRADE);
    let X = null != Y && Y.status !== M.SubscriptionStatusTypes.ACCOUNT_HOLD && !(0, T.isNoneSubscription)(Y.planId) && !Q,
      $ = X ? null != F ? F : function(e) {
        let {
          ctaSubscriptionSkuId: t,
          currentPremiumType: l
        } = e, n = null, s = null;
        if (null != t && t !== C.PremiumSubscriptionSKUs.LEGACY && t !== C.PremiumSubscriptionSKUs.TIER_0 && t !== C.PremiumSubscriptionSKUs.TIER_1 && t !== C.PremiumSubscriptionSKUs.TIER_2) return {
          disabledButtonText: n,
          disabledButtonTooltipText: s
        };
        let a = null != t ? C.PremiumSubscriptionSKUToPremiumType[t] : null,
          i = null != a ? C.PremiumTypeOrder[a] : null,
          u = null != l ? C.PremiumTypeOrder[l] : null;
        return null != u && null != i && i < u ? (n = R.default.Messages.APPLICATION_STORE_GET_PREMIUM, s = R.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null != a && null != l && a === l ? (n = R.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, s = R.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null == a && null != l && l === C.PremiumTypes.TIER_2 && (s = R.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP), {
          disabledButtonText: n,
          disabledButtonTooltipText: s
        }
      }({
        ctaSubscriptionSkuId: s,
        currentPremiumType: J
      }) : null;

    function ee(e) {
      var t, l;
      return (0, n.jsxs)(S.default, {
        disabled: X,
        onClick: W,
        innerClassName: N.premiumSubscribeButton,
        color: s === C.PremiumSubscriptionSKUs.TIER_1 ? u.Button.Colors.PRIMARY : u.Button.Colors.GREEN,
        size: A,
        className: k,
        wrapperClassName: h,
        pauseAnimation: !V || D,
        ...w,
        ...e,
        children: [j && (0, n.jsx)(I.default, {
          className: a(N.premiumIcon, v)
        }), (0, n.jsx)("span", {
          className: a(N.buttonText, b),
          children: null !== (l = null !== (t = null == $ ? void 0 : $.disabledButtonText) && void 0 !== t ? t : y) && void 0 !== l ? l : Z
        })]
      })
    }
    return (null == $ ? void 0 : $.disabledButtonTooltipText) != null ? (0, n.jsx)(u.Tooltip, {
      text: $.disabledButtonTooltipText,
      children: ee
    }) : ee()
  }