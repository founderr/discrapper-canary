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
  I = n("104494"),
  T = n("639119"),
  f = n("165583"),
  S = n("197115"),
  h = n("626135"),
  A = n("176354"),
  m = n("74538"),
  N = n("543241"),
  p = n("149203"),
  O = n("981631"),
  C = n("185923"),
  R = n("474936"),
  g = n("689938"),
  L = n("369454");
t.default = e => {
  var t, s;
  let {
    onLearnMore: v,
    onClose: D,
    channel: M,
    emojiDescriptor: y,
    pickerIntention: P,
    analyticsLocation: U
  } = e, b = (0, u.default)(), [G, w] = r.useState(!1), k = () => {
    (0, N.trackPremiumSettingsPaneOpened)(M), (0, E.navigateToPremiumMarketingPage)(), v()
  }, B = (0, o.isThemeLight)(b) ? n("537381") : n("341048"), x = (0, T.usePremiumTrialOffer)(), V = (0, I.usePremiumDiscountOffer)(), F = null != x || null != V, H = (0, c.useExpressionPickerStore)(e => e.searchQuery), {
    analyticsLocations: Y
  } = (0, _.default)(d.default.EMOJI_PICKER);
  return r.useEffect(() => {
    let e;
    e = P === C.EmojiIntention.REACTION ? R.PremiumUpsellTypes.EMOJI_PICKER_REACTION_EMOJI_CLICKED : y.subCategory === p.EmojiSubCategory.TOP_GUILD_EMOJI ? R.PremiumUpsellTypes.EMOJI_PICKER_TOP_SERVER_EMOJI_CLICKED : y.subCategory === p.EmojiSubCategory.NEWLY_ADDED_EMOJI ? R.PremiumUpsellTypes.EMOJI_PICKER_NEWLY_ADDED_EMOJI_CLICKED : R.PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED;
    let t = y.emoji;
    h.default.track(O.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: e,
      is_animated: t.animated,
      is_external: !A.default.isInternalEmojiForGuildId(t, null == M ? void 0 : M.getGuildId()),
      has_search_query: null != H && "" !== H,
      location: {
        ...U,
        object: O.AnalyticsObjects.EMOJI
      },
      location_stack: Y,
      sku_id: (0, m.castPremiumSubscriptionAsSkuId)(m.default.getSkuIdForPremiumType(R.PremiumTypes.TIER_2))
    })
  }, [y, M, U, Y, P, H]), (0, i.jsxs)("div", {
    className: a()(L.premiumPromo, {
      [L.unifyTrialUpsell]: F
    }),
    children: [(0, i.jsx)(l.Clickable, {
      className: L.premiumPromoClose,
      onClick: D,
      children: g.default.Messages.CLOSE
    }), (0, i.jsxs)(i.Fragment, {
      children: [F ? (0, i.jsx)(f.default, {
        type: R.PremiumUpsellTypes.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI,
        subscriptionTier: null !== (s = null == x ? void 0 : null === (t = x.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== s ? s : R.PremiumSubscriptionSKUs.TIER_2,
        onClose: D,
        trialOffer: x,
        discountOffer: V,
        children: g.default.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_UPSELL.format({
          onClick: k
        })
      }) : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("img", {
          alt: "",
          className: L.premiumPromoImage,
          src: B
        }), (0, i.jsx)("div", {
          className: L.premiumPromoTitle,
          children: g.default.Messages.PREMIUM_PROMO_TITLE_SEARCH_UPSELL
        }), (0, i.jsx)("div", {
          className: L.premiumPromoDescription,
          children: g.default.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_UPSELL.format({
            onClick: k
          })
        })]
      }), !F && (0, i.jsx)(S.default, {
        subscriptionTier: R.PremiumSubscriptionSKUs.TIER_2,
        submitting: G,
        premiumModalAnalyticsLocation: {
          section: O.AnalyticsSections.EMOJI_PICKER_POPOUT,
          object: O.AnalyticsObjects.BUTTON_CTA
        },
        size: l.Button.Sizes.SMALL,
        color: l.Button.Colors.GREEN,
        onClick: () => {
          w(!0)
        },
        onSubscribeModalClose: e => {
          w(!1), e && D()
        },
        buttonText: F ? g.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : g.default.Messages.PREMIUM_REQUIRED_GET_NITRO
      })]
    })]
  })
}