"use strict";
s.r(t), s.d(t, {
  default: function() {
    return G
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
  I = s("197115"),
  f = s("350327"),
  m = s("318661"),
  N = s("996073"),
  g = s("25990"),
  h = s("466111"),
  C = s("626135"),
  O = s("74538"),
  A = s("589266"),
  p = s("296810"),
  R = s("433411"),
  x = s("532432"),
  M = s("504983"),
  D = s("134795"),
  L = s("513901"),
  P = s("451392"),
  v = s("981631"),
  b = s("474936"),
  U = s("526761"),
  j = s("689938"),
  F = s("764277");

function G(e) {
  var t, G, B;
  let {
    user: y
  } = e, {
    reducedMotion: V
  } = n.useContext(i.AccessibilityPreferencesContext), H = O.default.isPremium(y), {
    pendingAvatar: k,
    pendingBanner: w,
    pendingThemeColors: Y,
    pendingPronouns: W,
    pendingBio: K,
    tryItOutThemeColors: z,
    tryItOutAvatar: Q,
    tryItOutBanner: q,
    tryItOutAvatarDecoration: X,
    tryItOutProfileEffectId: Z
  } = (0, l.useStateFromStoresObject)([g.default], () => {
    let e = g.default.getAllPending(),
      t = g.default.getErrors(),
      s = g.default.getAllTryItOut();
    return {
      ...e,
      ...s,
      errors: t
    }
  }), J = (0, c.default)(X), $ = (0, S.default)(Z), ee = n.useRef(null);
  (0, N.default)(ee, U.ProfileCustomizationScrollPositions.TRY_IT_OUT);
  let et = (0, m.default)(y.id),
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
  let el = (null === (G = (0, T.usePremiumTrialOffer)()) || void 0 === G ? void 0 : null === (t = G.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === b.PremiumSubscriptionSKUs.TIER_2,
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
      className: F.tryItOutSection,
      type: M.FeatureBorderTypes.PREMIUM,
      isShown: !0,
      hasBackground: !0,
      children: [(0, a.jsx)(p.default, {
        layoutClassName: F.tryItOutLayout,
        previewTitle: (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(h.default, {
            className: F.premiumIcon
          }), j.default.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_PREVIEW]
        }),
        profilePreview: (0, a.jsx)(A.default, {
          location: "TryOutPremiumSection",
          user: y,
          onAvatarChange: f.setTryItOutAvatar,
          onBannerChange: f.setTryItOutBanner,
          pendingPronouns: W,
          pendingBio: K,
          pendingBanner: null !== (B = null != q ? q : w) && void 0 !== B ? B : s("466045"),
          pendingAvatar: null != Q ? Q : k,
          pendingThemeColors: null != z ? z : Y,
          pendingAvatarDecoration: J,
          pendingProfileEffectId: $,
          avatarClassName: null != Q || null != k || V.enabled ? void 0 : F.spinningAvatar,
          canUsePremiumCustomization: !0,
          isTryItOutFlow: !0,
          hideExampleButton: !0,
          hideFakeActivity: !!(null == es ? void 0 : es.value)
        }),
        children: (0, a.jsxs)("div", {
          className: F.editor,
          children: [(0, a.jsxs)("div", {
            children: [(0, a.jsx)(i.Heading, {
              variant: "heading-xl/extrabold",
              children: j.default.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_HEADER
            }), (0, a.jsx)(i.Text, {
              className: F.description,
              variant: "text-sm/normal",
              children: j.default.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_DESCRIPTION
            })]
          }), (0, a.jsx)(P.default, {
            className: F.customizationSection,
            user: y,
            pendingAvatar: null != Q ? Q : k,
            pendingColors: null != z ? z : Y,
            onThemeColorsChange: f.setTryItOutThemeColors,
            showPremiumIcon: !1,
            preventDisabled: !0
          }), (0, a.jsx)(D.default, {
            className: F.customizationSection,
            isTryItOutFlow: !0,
            showRemoveBannerButton: null != q,
            onBannerChange: f.setTryItOutBanner,
            showPremiumIcon: !1
          }), (0, a.jsx)(x.default, {
            className: F.customizationSection,
            isTryItOutFlow: !0,
            onAvatarChange: f.setTryItOutAvatar,
            showRemoveAvatarButton: !1,
            changeAvatarButtonText: j.default.Messages.USER_SETTINGS_ADD_ANIMATED_AVATAR,
            sectionTitle: j.default.Messages.PREMIUM_TIER_0_FEATURE_AVATAR
          }), (0, a.jsx)(R.default, {
            isTryItOutFlow: !0,
            className: F.customizationSection,
            user: y,
            sectionTitle: j.default.Messages.USER_SETTINGS_AVATAR_DECORATION
          }, "decoration"), (0, a.jsx)(L.default, {
            className: F.customizationSection,
            isTryItOutFlow: !0,
            initialSelectedEffectId: $,
            user: y,
            sectionTitle: j.default.Messages.USER_SETTINGS_PROFILE_EFFECT
          }, "effect"), !el && (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(i.Text, {
              variant: "text-sm/normal",
              className: F.premiumPerksListTitle,
              children: j.default.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_ALSO_INCLUDES
            }), (0, a.jsx)(I.default, {
              onSubscribeModalClose: e => {
                e && ((0, r.setPendingAvatar)(Q), (0, f.setPendingBanner)(q), (0, f.setPendingThemeColors)(z))
              },
              subscriptionTier: b.PremiumSubscriptionSKUs.TIER_2,
              className: F.premiumSubscribeButton,
              size: i.Button.Sizes.MEDIUM,
              buttonText: H ? j.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_UPGRADE : er ? j.default.Messages.PREMIUM_DISCOUNT_CTA.format({
                percent: null == ei ? void 0 : ei.discount.amount
              }) : j.default.Messages.PREMIUM_UPSELL_GET_NITRO
            })]
          })]
        })
      }), el && (0, a.jsxs)("div", {
        children: [(0, a.jsx)("div", {
          className: F.premiumTier2Divider
        }), (0, a.jsx)(_.default, {
          type: b.PremiumUpsellTypes.CUSTOM_PROFILE_TRY_OUT_UPSELL,
          subscriptionTier: b.PremiumSubscriptionSKUs.TIER_2
        })]
      })]
    })
  })
}