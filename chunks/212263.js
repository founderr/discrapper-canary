"use strict";
n.r(t), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("780384"),
  l = n("481060"),
  u = n("410030"),
  d = n("100527"),
  _ = n("906732"),
  c = n("28546"),
  E = n("98278"),
  I = n("348121"),
  T = n("104494"),
  f = n("639119"),
  S = n("165583"),
  h = n("197115"),
  A = n("626135"),
  m = n("176354"),
  N = n("74538"),
  p = n("543241"),
  O = n("149203"),
  C = n("981631"),
  R = n("185923"),
  g = n("474936"),
  L = n("689938"),
  v = n("369454");
t.default = e => {
  var t, s, D;
  let {
    onLearnMore: M,
    onClose: y,
    channel: P,
    emojiDescriptor: U,
    pickerIntention: b,
    analyticsLocation: G
  } = e, w = (0, u.default)(), [k, B] = r.useState(!1), V = () => {
    (0, p.trackPremiumSettingsPaneOpened)(P), (0, E.navigateToPremiumMarketingPage)(), M()
  }, x = (0, o.isThemeLight)(w) ? n("537381") : n("341048"), F = (0, f.usePremiumTrialOffer)(), H = (0, T.usePremiumDiscountOffer)(), Y = null != F || null != H, {
    isLoading: j,
    suggestedPremiumType: W
  } = (0, I.default)(), K = (0, c.useExpressionPickerStore)(e => e.searchQuery), {
    analyticsLocations: z
  } = (0, _.default)(d.default.EMOJI_PICKER), Z = null == F ? void 0 : null === (t = F.subscription_trial) || void 0 === t ? void 0 : t.sku_id, X = null != Z ? Z === g.PremiumSubscriptionSKUs.TIER_0 : W === g.PremiumTypes.TIER_0;
  return r.useEffect(() => {
    if (!j) {
      let e;
      e = b === R.EmojiIntention.REACTION ? g.PremiumUpsellTypes.EMOJI_PICKER_REACTION_EMOJI_CLICKED : U.subCategory === O.EmojiSubCategory.TOP_GUILD_EMOJI ? g.PremiumUpsellTypes.EMOJI_PICKER_TOP_SERVER_EMOJI_CLICKED : U.subCategory === O.EmojiSubCategory.NEWLY_ADDED_EMOJI ? g.PremiumUpsellTypes.EMOJI_PICKER_NEWLY_ADDED_EMOJI_CLICKED : g.PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED;
      let t = U.emoji;
      A.default.track(C.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
        type: e,
        is_animated: t.animated,
        is_external: !m.default.isInternalEmojiForGuildId(t, null == P ? void 0 : P.getGuildId()),
        has_search_query: null != K && "" !== K,
        location: {
          ...G,
          object: C.AnalyticsObjects.EMOJI
        },
        location_stack: z,
        sku_id: (0, N.castPremiumSubscriptionAsSkuId)(N.default.getSkuIdForPremiumType(W))
      })
    }
  }, [j, W, U, P, G, z, b, K]), (0, i.jsxs)("div", {
    className: a()(v.premiumPromo, {
      [v.unifyTrialUpsell]: Y
    }),
    children: [(0, i.jsx)(l.Clickable, {
      className: v.premiumPromoClose,
      onClick: y,
      children: L.default.Messages.CLOSE
    }), j ? (0, i.jsx)(l.Spinner, {}) : (0, i.jsxs)(i.Fragment, {
      children: [Y ? (0, i.jsx)(S.default, {
        type: g.PremiumUpsellTypes.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI,
        subscriptionTier: null !== (D = null == F ? void 0 : null === (s = F.subscription_trial) || void 0 === s ? void 0 : s.sku_id) && void 0 !== D ? D : g.PremiumSubscriptionSKUs.TIER_2,
        onClose: y,
        trialOffer: F,
        discountOffer: H,
        children: X ? L.default.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_TIER_UPSELL.format({
          planName: (0, N.getTierDisplayName)(g.SubscriptionPlans.PREMIUM_MONTH_TIER_0),
          onClick: V
        }) : L.default.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_UPSELL.format({
          onClick: V
        })
      }) : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("img", {
          alt: "",
          className: v.premiumPromoImage,
          src: x
        }), (0, i.jsx)("div", {
          className: v.premiumPromoTitle,
          children: L.default.Messages.PREMIUM_PROMO_TITLE_SEARCH_UPSELL
        }), (0, i.jsx)("div", {
          className: v.premiumPromoDescription,
          children: X ? L.default.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_TIER_UPSELL.format({
            planName: (0, N.getTierDisplayName)(g.SubscriptionPlans.PREMIUM_MONTH_TIER_0),
            onClick: V
          }) : L.default.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_UPSELL.format({
            onClick: V
          })
        })]
      }), !Y && (0, i.jsx)(h.default, {
        subscriptionTier: X ? g.PremiumSubscriptionSKUs.TIER_0 : g.PremiumSubscriptionSKUs.TIER_2,
        submitting: k,
        premiumModalAnalyticsLocation: {
          section: C.AnalyticsSections.EMOJI_PICKER_POPOUT,
          object: C.AnalyticsObjects.BUTTON_CTA
        },
        size: l.Button.Sizes.SMALL,
        color: l.Button.Colors.GREEN,
        onClick: () => {
          B(!0)
        },
        onSubscribeModalClose: e => {
          B(!1), e && y()
        },
        buttonText: (() => {
          if (Y) return X ? L.default.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : L.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT;
          return X ? L.default.Messages.PREMIUM_SETTINGS_GET_TIER_0 : L.default.Messages.PREMIUM_REQUIRED_GET_NITRO
        })()
      })]
    })]
  })
}