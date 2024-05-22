"use strict";
s.r(t), s.d(t, {
  ClientThemesSidebarButton: function() {
    return v
  },
  UserSettingsAppearanceClientThemes: function() {
    return M
  }
});
var a = s("735250"),
  n = s("470079"),
  l = s("442837"),
  i = s("524437"),
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
  m = s("165583"),
  g = s("197115"),
  I = s("504983"),
  N = s("626135"),
  h = s("981631"),
  C = s("921944"),
  p = s("474936"),
  A = s("689938"),
  O = s("922844"),
  x = s("611273");
let R = () => {
    (0, T.markDismissibleContentAsDismissed)(i.DismissibleContent.CLIENT_THEMES_SPARKLE_PREVIEW, {
      dismissAction: C.ContentDismissActionType.PRIMARY,
      forceTrack: !0
    }), (0, c.openEditor)(), (0, o.popLayer)()
  },
  M = () => {
    var e, t;
    let {
      analyticsLocations: s
    } = (0, u.default)(d.default.USER_SETTINGS), i = (0, l.useStateFromStores)([S.default], () => S.default.isPreview), o = (null === (t = (0, f.usePremiumTrialOffer)()) || void 0 === t ? void 0 : null === (e = t.subscription_trial) || void 0 === e ? void 0 : e.sku_id) === p.PremiumSubscriptionSKUs.TIER_2, c = (0, _.usePremiumDiscountOffer)(), T = (0, _.discountOfferHasTier)(c, p.PremiumSubscriptionSKUs.TIER_2);
    return n.useEffect(() => {
      i && N.default.track(h.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
        type: p.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
        location_stack: s
      })
    }, [i, s]), (0, a.jsxs)("div", {
      children: [(0, a.jsxs)(E.default, {
        type: E.ThemeSelectionGroupType.SETTINGS,
        children: [(0, a.jsx)(E.default.Basic, {
          className: O.basicThemeSelectors
        }), (0, a.jsxs)(I.default, {
          className: O.featureBorder,
          isShown: i,
          type: I.FeatureBorderTypes.PREMIUM,
          children: [(0, a.jsx)(E.default.Gradient, {
            disabled: i,
            renderCTAButtons: () => !i || o ? null : (0, a.jsxs)("div", {
              className: O.tryItOutButtons,
              children: [(0, a.jsx)(r.Button, {
                color: r.Button.Colors.PRIMARY,
                onClick: () => R(),
                children: A.default.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_THEME_TITLE
              }), (0, a.jsx)(g.default, {
                subscriptionTier: p.PremiumSubscriptionSKUs.TIER_2,
                buttonText: T ? A.default.Messages.PREMIUM_DISCOUNT_CTA.format({
                  percent: null == c ? void 0 : c.discount.amount
                }) : A.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL,
                className: O.premiumCta
              })]
            })
          }), o && i && (0, a.jsxs)("div", {
            children: [(0, a.jsx)(r.Button, {
              className: O.previewThemeButtonWide,
              color: r.Button.Colors.PRIMARY,
              onClick: () => R(),
              children: A.default.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_THEME_TITLE
            }), (0, a.jsx)("div", {
              className: O.premiumTier2Divider
            }), (0, a.jsx)(m.default, {
              type: p.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL,
              subscriptionTier: p.PremiumSubscriptionSKUs.TIER_2
            })]
          })]
        })]
      }), (0, a.jsx)(r.FormDivider, {
        className: x.marginTop20
      })]
    })
  },
  v = () => (0, l.useStateFromStores)([S.default], () => S.default.isPreview) ? null : (0, a.jsx)(r.Button, {
    size: r.ButtonSizes.SMALL,
    onClick: () => R(),
    children: A.default.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_THEMES_TITLE
  })