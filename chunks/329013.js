"use strict";
s.r(t), s.d(t, {
  ClientThemesSidebarButton: function() {
    return D
  },
  UserSettingsAppearanceClientThemes: function() {
    return M
  }
});
var a = s("735250"),
  n = s("470079"),
  l = s("442837"),
  i = s("704215"),
  r = s("481060"),
  o = s("37234"),
  d = s("100527"),
  u = s("906732"),
  c = s("238302"),
  S = s("514361"),
  E = s("705262"),
  T = s("605236"),
  _ = s("104494"),
  f = s("639119"),
  I = s("165583"),
  m = s("197115"),
  N = s("504983"),
  g = s("626135"),
  h = s("981631"),
  C = s("921944"),
  A = s("474936"),
  O = s("689938"),
  p = s("922844"),
  R = s("611273");
let x = () => {
    (0, T.markDismissibleContentAsDismissed)(i.DismissibleContent.CLIENT_THEMES_SPARKLE_PREVIEW, {
      dismissAction: C.ContentDismissActionType.PRIMARY,
      forceTrack: !0
    }), (0, c.openEditor)(), (0, o.popLayer)()
  },
  M = () => {
    var e, t;
    let {
      analyticsLocations: s
    } = (0, u.default)(d.default.USER_SETTINGS), i = (0, l.useStateFromStores)([S.default], () => S.default.isPreview), o = (null === (t = (0, f.usePremiumTrialOffer)()) || void 0 === t ? void 0 : null === (e = t.subscription_trial) || void 0 === e ? void 0 : e.sku_id) === A.PremiumSubscriptionSKUs.TIER_2, c = (0, _.usePremiumDiscountOffer)(), T = (0, _.discountOfferHasTier)(c, A.PremiumSubscriptionSKUs.TIER_2);
    return n.useEffect(() => {
      i && g.default.track(h.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
        type: A.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
        location_stack: s
      })
    }, [i, s]), (0, a.jsxs)("div", {
      children: [(0, a.jsxs)(E.default, {
        type: E.ThemeSelectionGroupType.SETTINGS,
        children: [(0, a.jsx)(E.default.Basic, {
          className: p.basicThemeSelectors
        }), (0, a.jsxs)(N.default, {
          className: p.featureBorder,
          isShown: i,
          type: N.FeatureBorderTypes.PREMIUM,
          children: [(0, a.jsx)(E.default.Gradient, {
            disabled: i,
            renderCTAButtons: () => !i || o ? null : (0, a.jsxs)("div", {
              className: p.tryItOutButtons,
              children: [(0, a.jsx)(r.Button, {
                color: r.Button.Colors.PRIMARY,
                onClick: () => x(),
                children: O.default.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_THEME_TITLE
              }), (0, a.jsx)(m.default, {
                subscriptionTier: A.PremiumSubscriptionSKUs.TIER_2,
                buttonText: T ? O.default.Messages.PREMIUM_DISCOUNT_CTA.format({
                  percent: null == c ? void 0 : c.discount.amount
                }) : O.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL,
                className: p.premiumCta
              })]
            })
          }), o && i && (0, a.jsxs)("div", {
            children: [(0, a.jsx)(r.Button, {
              className: p.previewThemeButtonWide,
              color: r.Button.Colors.PRIMARY,
              onClick: () => x(),
              children: O.default.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_THEME_TITLE
            }), (0, a.jsx)("div", {
              className: p.premiumTier2Divider
            }), (0, a.jsx)(I.default, {
              type: A.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL,
              subscriptionTier: A.PremiumSubscriptionSKUs.TIER_2
            })]
          })]
        })]
      }), (0, a.jsx)(r.FormDivider, {
        className: R.marginTop20
      })]
    })
  },
  D = () => (0, l.useStateFromStores)([S.default], () => S.default.isPreview) ? null : (0, a.jsx)(r.Button, {
    size: r.ButtonSizes.SMALL,
    onClick: () => x(),
    children: O.default.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_THEMES_TITLE
  })