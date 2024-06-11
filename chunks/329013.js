"use strict";
s.r(t), s.d(t, {
  ClientThemesSidebarButton: function() {
    return x
  },
  UserSettingsAppearanceClientThemes: function() {
    return D
  }
});
var a = s("735250"),
  n = s("470079"),
  i = s("442837"),
  l = s("704215"),
  r = s("481060"),
  o = s("37234"),
  d = s("100527"),
  u = s("906732"),
  c = s("238302"),
  S = s("514361"),
  E = s("705262"),
  T = s("605236"),
  _ = s("104494"),
  I = s("639119"),
  N = s("165583"),
  g = s("197115"),
  f = s("504983"),
  m = s("626135"),
  A = s("981631"),
  C = s("921944"),
  O = s("474936"),
  h = s("689938"),
  R = s("922844"),
  p = s("611273");
let M = () => {
    (0, T.markDismissibleContentAsDismissed)(l.DismissibleContent.CLIENT_THEMES_SPARKLE_PREVIEW, {
      dismissAction: C.ContentDismissActionType.PRIMARY,
      forceTrack: !0
    }), (0, c.openEditor)(), (0, o.popLayer)()
  },
  D = () => {
    var e, t;
    let {
      analyticsLocations: s
    } = (0, u.default)(d.default.USER_SETTINGS), l = (0, i.useStateFromStores)([S.default], () => S.default.isPreview), o = (null === (t = (0, I.usePremiumTrialOffer)()) || void 0 === t ? void 0 : null === (e = t.subscription_trial) || void 0 === e ? void 0 : e.sku_id) === O.PremiumSubscriptionSKUs.TIER_2, c = (0, _.usePremiumDiscountOffer)(), T = (0, _.discountOfferHasTier)(c, O.PremiumSubscriptionSKUs.TIER_2);
    return n.useEffect(() => {
      l && m.default.track(A.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
        type: O.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
        location_stack: s
      })
    }, [l, s]), (0, a.jsxs)("div", {
      children: [(0, a.jsxs)(E.default, {
        type: E.ThemeSelectionGroupType.SETTINGS,
        children: [(0, a.jsx)(E.default.Basic, {
          className: R.basicThemeSelectors
        }), (0, a.jsxs)(f.default, {
          className: R.featureBorder,
          isShown: l,
          type: f.FeatureBorderTypes.PREMIUM,
          children: [(0, a.jsx)(E.default.Gradient, {
            disabled: l,
            renderCTAButtons: () => !l || o ? null : (0, a.jsxs)("div", {
              className: R.tryItOutButtons,
              children: [(0, a.jsx)(r.Button, {
                color: r.Button.Colors.PRIMARY,
                onClick: () => M(),
                children: h.default.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_THEME_TITLE
              }), (0, a.jsx)(g.default, {
                subscriptionTier: O.PremiumSubscriptionSKUs.TIER_2,
                buttonText: T ? h.default.Messages.PREMIUM_DISCOUNT_CTA.format({
                  percent: null == c ? void 0 : c.discount.amount
                }) : h.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL,
                className: R.premiumCta
              })]
            })
          }), o && l && (0, a.jsxs)("div", {
            children: [(0, a.jsx)(r.Button, {
              className: R.previewThemeButtonWide,
              color: r.Button.Colors.PRIMARY,
              onClick: () => M(),
              children: h.default.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_THEME_TITLE
            }), (0, a.jsx)("div", {
              className: R.premiumTier2Divider
            }), (0, a.jsx)(N.default, {
              type: O.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL,
              subscriptionTier: O.PremiumSubscriptionSKUs.TIER_2
            })]
          })]
        })]
      }), (0, a.jsx)(r.FormDivider, {
        className: p.marginTop20
      })]
    })
  },
  x = () => (0, i.useStateFromStores)([S.default], () => S.default.isPreview) ? null : (0, a.jsx)(r.Button, {
    size: r.ButtonSizes.SMALL,
    onClick: () => M(),
    children: h.default.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_THEMES_TITLE
  })