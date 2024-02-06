"use strict";
i.r(t), i.d(t, {
  default: function() {
    return M
  }
}), i("222007");
var n = i("37983"),
  s = i("884691"),
  l = i("414456"),
  r = i.n(l),
  a = i("819855"),
  o = i("77078"),
  u = i("841098"),
  c = i("812204"),
  d = i("685665"),
  f = i("538282"),
  E = i("626301"),
  m = i("552917"),
  I = i("843647"),
  p = i("154889"),
  g = i("917247"),
  _ = i("956597"),
  S = i("635956"),
  h = i("599110"),
  C = i("402671"),
  T = i("719923"),
  N = i("788506"),
  v = i("115279"),
  A = i("49111"),
  y = i("958706"),
  R = i("646718"),
  j = i("782340"),
  O = i("350028"),
  M = e => {
    var t, l, M;
    let {
      onLearnMore: x,
      onClose: L,
      channel: P,
      emojiDescriptor: D,
      pickerIntention: b,
      analyticsLocation: U
    } = e, w = (0, u.default)(), [G, k] = s.useState(!1), V = () => {
      (0, N.trackPremiumSettingsPaneOpened)(P), (0, E.navigateToPremiumMarketingPage)(), x()
    }, F = (0, a.isThemeLight)(w) ? i("602291") : i("609708"), H = (0, g.usePremiumTrialOffer)(), K = (0, p.usePremiumDiscountOffer)(), B = null != H || null != K, {
      isLoading: J,
      suggestedPremiumType: z
    } = (0, I.default)({
      autoTrackExposure: !B,
      experiment: m.default,
      location: "emoji_picker"
    }), W = (0, f.useExpressionPickerStore)(e => e.searchQuery), {
      analyticsLocations: Z
    } = (0, d.default)(c.default.EMOJI_PICKER), Y = null == H ? void 0 : null === (t = H.subscription_trial) || void 0 === t ? void 0 : t.sku_id, Q = null != Y ? Y === R.PremiumSubscriptionSKUs.TIER_0 : z === R.PremiumTypes.TIER_0;
    return s.useEffect(() => {
      if (!J) {
        let e;
        e = b === y.EmojiIntention.REACTION ? R.PremiumUpsellTypes.EMOJI_PICKER_REACTION_EMOJI_CLICKED : D.subCategory === v.EmojiSubCategory.TOP_GUILD_EMOJI ? R.PremiumUpsellTypes.EMOJI_PICKER_TOP_SERVER_EMOJI_CLICKED : D.subCategory === v.EmojiSubCategory.NEWLY_ADDED_EMOJI ? R.PremiumUpsellTypes.EMOJI_PICKER_NEWLY_ADDED_EMOJI_CLICKED : R.PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED;
        let t = D.emoji;
        h.default.track(A.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
          type: e,
          is_animated: t.animated,
          is_external: !C.default.isInternalEmojiForGuildId(t, null == P ? void 0 : P.getGuildId()),
          has_search_query: null != W && "" !== W,
          location: {
            ...U,
            object: A.AnalyticsObjects.EMOJI
          },
          location_stack: Z,
          sku_id: T.default.getSkuIdForPremiumType(z)
        })
      }
    }, [J, z, D, P, U, Z, b, W]), (0, n.jsxs)("div", {
      className: r(O.premiumPromo, {
        [O.unifyTrialUpsell]: B
      }),
      children: [(0, n.jsx)(o.Clickable, {
        className: O.premiumPromoClose,
        onClick: L,
        children: j.default.Messages.CLOSE
      }), J ? (0, n.jsx)(o.Spinner, {}) : (0, n.jsxs)(n.Fragment, {
        children: [B ? (0, n.jsx)(_.default, {
          type: R.PremiumUpsellTypes.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI,
          subscriptionTier: null !== (M = null == H ? void 0 : null === (l = H.subscription_trial) || void 0 === l ? void 0 : l.sku_id) && void 0 !== M ? M : R.PremiumSubscriptionSKUs.TIER_2,
          onClose: L,
          trialOffer: H,
          discountOffer: K,
          children: Q ? j.default.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_TIER_UPSELL.format({
            planName: (0, T.getTierDisplayName)(R.SubscriptionPlans.PREMIUM_MONTH_TIER_0),
            onClick: V
          }) : j.default.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_UPSELL.format({
            onClick: V
          })
        }) : (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)("img", {
            alt: "",
            className: O.premiumPromoImage,
            src: F
          }), (0, n.jsx)("div", {
            className: O.premiumPromoTitle,
            children: j.default.Messages.PREMIUM_PROMO_TITLE_SEARCH_UPSELL
          }), (0, n.jsx)("div", {
            className: O.premiumPromoDescription,
            children: Q ? j.default.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_TIER_UPSELL.format({
              planName: (0, T.getTierDisplayName)(R.SubscriptionPlans.PREMIUM_MONTH_TIER_0),
              onClick: V
            }) : j.default.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_UPSELL.format({
              onClick: V
            })
          })]
        }), !B && (0, n.jsx)(S.default, {
          subscriptionTier: Q ? R.PremiumSubscriptionSKUs.TIER_0 : R.PremiumSubscriptionSKUs.TIER_2,
          submitting: G,
          premiumModalAnalyticsLocation: {
            section: A.AnalyticsSections.EMOJI_PICKER_POPOUT,
            object: A.AnalyticsObjects.BUTTON_CTA
          },
          size: o.Button.Sizes.SMALL,
          color: o.Button.Colors.GREEN,
          onClick: () => {
            k(!0)
          },
          onSubscribeModalClose: e => {
            k(!1), e && L()
          },
          buttonText: (() => {
            if (B) return Q ? j.default.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : j.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT;
            return Q ? j.default.Messages.PREMIUM_SETTINGS_GET_TIER_0 : j.default.Messages.PREMIUM_REQUIRED_GET_NITRO
          })()
        })]
      })]
    })
  }