"use strict";
s.r(t), s.d(t, {
  default: function() {
    return F
  }
});
var a = s("735250"),
  n = s("470079"),
  i = s("442837"),
  l = s("481060"),
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
  N = s("350327"),
  g = s("318661"),
  f = s("996073"),
  m = s("25990"),
  A = s("466111"),
  C = s("626135"),
  O = s("74538"),
  h = s("589266"),
  R = s("296810"),
  p = s("433411"),
  M = s("532432"),
  D = s("504983"),
  x = s("134795"),
  L = s("513901"),
  P = s("451392"),
  b = s("981631"),
  v = s("474936"),
  U = s("526761"),
  j = s("689938"),
  G = s("764277");

function F(e) {
  var t, F, B;
  let {
    user: y
  } = e, {
    reducedMotion: V
  } = n.useContext(l.AccessibilityPreferencesContext), Y = O.default.isPremium(y), {
    pendingAvatar: H,
    pendingBanner: k,
    pendingThemeColors: w,
    pendingPronouns: W,
    pendingBio: K,
    tryItOutThemeColors: Q,
    tryItOutAvatar: z,
    tryItOutBanner: X,
    tryItOutAvatarDecoration: q,
    tryItOutProfileEffectId: Z
  } = (0, i.useStateFromStoresObject)([m.default], () => {
    let e = m.default.getAllPending(),
      t = m.default.getErrors(),
      s = m.default.getAllTryItOut();
    return {
      ...e,
      ...s,
      errors: t
    }
  }), J = (0, c.default)(q), $ = (0, S.default)(Z), ee = n.useRef(null);
  (0, f.default)(ee, U.ProfileCustomizationScrollPositions.TRY_IT_OUT);
  let et = (0, g.default)(y.id),
    es = null == et ? void 0 : et.getPreviewBio(K),
    {
      analyticsLocations: ea,
      sourceAnalyticsLocations: en
    } = (0, u.default)(d.default.USER_SETTINGS_TRY_OUT_PREMIUM);
  n.useEffect(() => {
    C.default.track(b.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: v.PremiumUpsellTypes.PREMIUM_PROFILE_TRY_IT_OUT,
      location: {
        page: b.AnalyticsPages.USER_SETTINGS
      },
      location_stack: en
    })
  }, [en, y]);
  let ei = (null === (F = (0, T.usePremiumTrialOffer)()) || void 0 === F ? void 0 : null === (t = F.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === v.PremiumSubscriptionSKUs.TIER_2,
    el = (0, E.usePremiumDiscountOffer)(),
    er = (0, E.discountOfferHasTier)(el, v.PremiumSubscriptionSKUs.TIER_2),
    eo = "TryOutPremiumSection";
  return (0, o.useTriggerDebuggingAA)({
    location: eo + " auto on",
    autoTrackExposure: !0
  }), (0, o.useTriggerDebuggingAA)({
    location: eo + " auto off",
    autoTrackExposure: !1
  }), (0, a.jsx)(u.AnalyticsLocationProvider, {
    value: ea,
    children: (0, a.jsxs)(D.default, {
      ref: ee,
      className: G.tryItOutSection,
      type: D.FeatureBorderTypes.PREMIUM,
      isShown: !0,
      hasBackground: !0,
      children: [(0, a.jsx)(R.default, {
        layoutClassName: G.tryItOutLayout,
        previewTitle: (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(A.default, {
            className: G.premiumIcon
          }), j.default.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_PREVIEW]
        }),
        profilePreview: (0, a.jsx)(h.default, {
          location: "TryOutPremiumSection",
          user: y,
          onAvatarChange: N.setTryItOutAvatar,
          onBannerChange: N.setTryItOutBanner,
          pendingPronouns: W,
          pendingBio: K,
          pendingBanner: null !== (B = null != X ? X : k) && void 0 !== B ? B : s("466045"),
          pendingAvatar: null != z ? z : H,
          pendingThemeColors: null != Q ? Q : w,
          pendingAvatarDecoration: J,
          pendingProfileEffectId: $,
          avatarClassName: null != z || null != H || V.enabled ? void 0 : G.spinningAvatar,
          canUsePremiumCustomization: !0,
          isTryItOutFlow: !0,
          hideExampleButton: !0,
          hideFakeActivity: !!(null == es ? void 0 : es.value)
        }),
        children: (0, a.jsxs)("div", {
          className: G.editor,
          children: [(0, a.jsxs)("div", {
            children: [(0, a.jsx)(l.Heading, {
              variant: "heading-xl/extrabold",
              children: j.default.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_HEADER
            }), (0, a.jsx)(l.Text, {
              className: G.description,
              variant: "text-sm/normal",
              children: j.default.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_DESCRIPTION
            })]
          }), (0, a.jsx)(P.default, {
            className: G.customizationSection,
            user: y,
            pendingAvatar: null != z ? z : H,
            pendingColors: null != Q ? Q : w,
            onThemeColorsChange: N.setTryItOutThemeColors,
            showPremiumIcon: !1,
            preventDisabled: !0
          }), (0, a.jsx)(x.default, {
            className: G.customizationSection,
            isTryItOutFlow: !0,
            showRemoveBannerButton: null != X,
            onBannerChange: N.setTryItOutBanner,
            showPremiumIcon: !1
          }), (0, a.jsx)(M.default, {
            className: G.customizationSection,
            isTryItOutFlow: !0,
            onAvatarChange: N.setTryItOutAvatar,
            showRemoveAvatarButton: !1,
            changeAvatarButtonText: j.default.Messages.USER_SETTINGS_ADD_ANIMATED_AVATAR,
            sectionTitle: j.default.Messages.PREMIUM_TIER_0_FEATURE_AVATAR
          }), (0, a.jsx)(p.default, {
            isTryItOutFlow: !0,
            className: G.customizationSection,
            user: y,
            sectionTitle: j.default.Messages.USER_SETTINGS_AVATAR_DECORATION
          }, "decoration"), (0, a.jsx)(L.default, {
            className: G.customizationSection,
            isTryItOutFlow: !0,
            initialSelectedEffectId: $,
            user: y,
            sectionTitle: j.default.Messages.USER_SETTINGS_PROFILE_EFFECT
          }, "effect"), !ei && (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(l.Text, {
              variant: "text-sm/normal",
              className: G.premiumPerksListTitle,
              children: j.default.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_ALSO_INCLUDES
            }), (0, a.jsx)(I.default, {
              onSubscribeModalClose: e => {
                e && ((0, r.setPendingAvatar)(z), (0, N.setPendingBanner)(X), (0, N.setPendingThemeColors)(Q))
              },
              subscriptionTier: v.PremiumSubscriptionSKUs.TIER_2,
              className: G.premiumSubscribeButton,
              size: l.Button.Sizes.MEDIUM,
              buttonText: Y ? j.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_UPGRADE : er ? j.default.Messages.PREMIUM_DISCOUNT_CTA.format({
                percent: null == el ? void 0 : el.discount.amount
              }) : j.default.Messages.PREMIUM_UPSELL_GET_NITRO
            })]
          })]
        })
      }), ei && (0, a.jsxs)("div", {
        children: [(0, a.jsx)("div", {
          className: G.premiumTier2Divider
        }), (0, a.jsx)(_.default, {
          type: v.PremiumUpsellTypes.CUSTOM_PROFILE_TRY_OUT_UPSELL,
          subscriptionTier: v.PremiumSubscriptionSKUs.TIER_2
        })]
      })]
    })
  })
}