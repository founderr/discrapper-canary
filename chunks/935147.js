"use strict";
s.r(t), s.d(t, {
  default: function() {
    return F
  }
});
var a = s("735250"),
  n = s("470079"),
  l = s("442837"),
  i = s("481060"),
  r = s("809206"),
  o = s("634894"),
  d = s("100527"),
  u = s("906732"),
  c = s("588126"),
  S = s("175756"),
  E = s("104494"),
  T = s("639119"),
  _ = s("165583"),
  f = s("197115"),
  m = s("350327"),
  I = s("318661"),
  g = s("996073"),
  N = s("25990"),
  h = s("466111"),
  C = s("626135"),
  O = s("74538"),
  A = s("962746"),
  p = s("296810"),
  R = s("433411"),
  x = s("532432"),
  M = s("504983"),
  L = s("134795"),
  D = s("513901"),
  P = s("451392"),
  v = s("981631"),
  b = s("474936"),
  j = s("526761"),
  U = s("689938"),
  G = s("764277");

function F(e) {
  var t, F, B;
  let {
    user: y
  } = e, {
    reducedMotion: k
  } = n.useContext(i.AccessibilityPreferencesContext), V = O.default.isPremium(y), {
    pendingAvatar: H,
    pendingBanner: w,
    pendingThemeColors: Y,
    pendingPronouns: W,
    pendingBio: K,
    tryItOutThemeColors: z,
    tryItOutAvatar: Q,
    tryItOutBanner: q,
    tryItOutAvatarDecoration: Z,
    tryItOutProfileEffectId: X
  } = (0, l.useStateFromStoresObject)([N.default], () => {
    let e = N.default.getAllPending(),
      t = N.default.getErrors(),
      s = N.default.getAllTryItOut();
    return {
      ...e,
      ...s,
      errors: t
    }
  }), J = (0, c.default)(Z), $ = (0, S.default)(X), ee = n.useRef(null);
  (0, g.default)(ee, j.ProfileCustomizationScrollPositions.TRY_IT_OUT);
  let et = (0, I.default)(y.id),
    es = null == et ? void 0 : et.getPreviewBio(K),
    {
      analyticsLocations: ea,
      sourceAnalyticsLocations: en
    } = (0, u.default)(d.default.USER_SETTINGS_TRY_OUT_PREMIUM);
  n.useEffect(() => {
    C.default.track(v.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: b.PremiumUpsellTypes.PREMIUM_PROFILE_TRY_IT_OUT,
      location: {
        page: v.AnalyticsPages.USER_SETTINGS
      },
      location_stack: en
    })
  }, [en, y]);
  let el = (null === (F = (0, T.usePremiumTrialOffer)()) || void 0 === F ? void 0 : null === (t = F.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === b.PremiumSubscriptionSKUs.TIER_2,
    ei = (0, E.usePremiumDiscountOffer)(),
    er = (0, E.discountOfferHasTier)(ei, b.PremiumSubscriptionSKUs.TIER_2),
    eo = "TryOutPremiumSection";
  return (0, o.useTriggerDebuggingAA)({
    location: eo + " auto on",
    autoTrackExposure: !0
  }), (0, o.useTriggerDebuggingAA)({
    location: eo + " auto off",
    autoTrackExposure: !1
  }), (0, a.jsx)(u.AnalyticsLocationProvider, {
    value: ea,
    children: (0, a.jsxs)(M.default, {
      ref: ee,
      className: G.tryItOutSection,
      type: M.FeatureBorderTypes.PREMIUM,
      isShown: !0,
      hasBackground: !0,
      children: [(0, a.jsx)(p.default, {
        layoutClassName: G.tryItOutLayout,
        previewTitle: (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(h.default, {
            className: G.premiumIcon
          }), U.default.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_PREVIEW]
        }),
        profilePreview: (0, a.jsx)(A.default, {
          user: y,
          onAvatarChange: m.setTryItOutAvatar,
          onBannerChange: m.setTryItOutBanner,
          pendingPronouns: W,
          pendingBio: K,
          pendingBanner: null !== (B = null != q ? q : w) && void 0 !== B ? B : s("466045"),
          pendingAvatar: null != Q ? Q : H,
          pendingThemeColors: null != z ? z : Y,
          pendingAvatarDecoration: J,
          pendingProfileEffectId: $,
          avatarClassName: null != Q || null != H || k.enabled ? void 0 : G.spinningAvatar,
          canUsePremiumCustomization: !0,
          isTryItOutFlow: !0,
          hideExampleButton: !0,
          hideFakeActivity: !!(null == es ? void 0 : es.value)
        }),
        children: (0, a.jsxs)("div", {
          className: G.editor,
          children: [(0, a.jsxs)("div", {
            children: [(0, a.jsx)(i.Heading, {
              variant: "heading-xl/extrabold",
              children: U.default.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_HEADER
            }), (0, a.jsx)(i.Text, {
              className: G.description,
              variant: "text-sm/normal",
              children: U.default.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_DESCRIPTION
            })]
          }), (0, a.jsx)(P.default, {
            className: G.customizationSection,
            user: y,
            pendingAvatar: null != Q ? Q : H,
            pendingColors: null != z ? z : Y,
            onThemeColorsChange: m.setTryItOutThemeColors,
            showPremiumIcon: !1,
            preventDisabled: !0
          }), (0, a.jsx)(L.default, {
            className: G.customizationSection,
            isTryItOutFlow: !0,
            showRemoveBannerButton: null != q,
            onBannerChange: m.setTryItOutBanner,
            showPremiumIcon: !1
          }), (0, a.jsx)(x.default, {
            className: G.customizationSection,
            isTryItOutFlow: !0,
            onAvatarChange: m.setTryItOutAvatar,
            showRemoveAvatarButton: !1,
            changeAvatarButtonText: U.default.Messages.USER_SETTINGS_ADD_ANIMATED_AVATAR,
            sectionTitle: U.default.Messages.PREMIUM_TIER_0_FEATURE_AVATAR
          }), (0, a.jsx)(R.default, {
            isTryItOutFlow: !0,
            className: G.customizationSection,
            user: y,
            sectionTitle: U.default.Messages.USER_SETTINGS_AVATAR_DECORATION
          }, "decoration"), (0, a.jsx)(D.default, {
            className: G.customizationSection,
            isTryItOutFlow: !0,
            initialSelectedEffectId: $,
            user: y,
            sectionTitle: U.default.Messages.USER_SETTINGS_PROFILE_EFFECT
          }, "effect"), !el && (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(i.Text, {
              variant: "text-sm/normal",
              className: G.premiumPerksListTitle,
              children: U.default.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_ALSO_INCLUDES
            }), (0, a.jsx)(f.default, {
              onSubscribeModalClose: e => {
                e && ((0, r.setPendingAvatar)(Q), (0, m.setPendingBanner)(q), (0, m.setPendingThemeColors)(z))
              },
              subscriptionTier: b.PremiumSubscriptionSKUs.TIER_2,
              className: G.premiumSubscribeButton,
              size: i.Button.Sizes.MEDIUM,
              buttonText: V ? U.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_UPGRADE : er ? U.default.Messages.PREMIUM_DISCOUNT_CTA.format({
                percent: null == ei ? void 0 : ei.discount.amount
              }) : U.default.Messages.PREMIUM_UPSELL_GET_NITRO
            })]
          })]
        })
      }), el && (0, a.jsxs)("div", {
        children: [(0, a.jsx)("div", {
          className: G.premiumTier2Divider
        }), (0, a.jsx)(_.default, {
          type: b.PremiumUpsellTypes.CUSTOM_PROFILE_TRY_OUT_UPSELL,
          subscriptionTier: b.PremiumSubscriptionSKUs.TIER_2
        })]
      })]
    })
  })
}