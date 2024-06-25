"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(780384),
  l = n(481060),
  u = n(410030),
  _ = n(100527),
  c = n(906732),
  d = n(28546),
  E = n(98278),
  I = n(104494),
  T = n(639119),
  h = n(165583),
  S = n(197115),
  f = n(626135),
  N = n(176354),
  A = n(74538),
  m = n(543241),
  O = n(149203),
  R = n(981631),
  p = n(185923),
  g = n(474936),
  C = n(689938),
  v = n(538100);
t.Z = e => {
  var t, s;
  let {
    onLearnMore: L,
    onClose: D,
    channel: M,
    emojiDescriptor: P,
    pickerIntention: y,
    analyticsLocation: U
  } = e, b = (0, u.ZP)(), [G, w] = r.useState(!1), B = () => {
    (0, m.A3)(M), (0, E.z)(), L()
  }, x = (0, a.ap)(b) ? n(537381) : n(341048), k = (0, T.N)(), V = (0, I.Ng)(), Z = null != k || null != V, H = (0, d.Iu)(e => e.searchQuery), {
    analyticsLocations: F
  } = (0, c.ZP)(_.Z.EMOJI_PICKER);
  return r.useEffect(() => {
    let e;
    e = y === p.Hz.REACTION ? g.cd.EMOJI_PICKER_REACTION_EMOJI_CLICKED : P.subCategory === O.t0.TOP_GUILD_EMOJI ? g.cd.EMOJI_PICKER_TOP_SERVER_EMOJI_CLICKED : P.subCategory === O.t0.NEWLY_ADDED_EMOJI ? g.cd.EMOJI_PICKER_NEWLY_ADDED_EMOJI_CLICKED : g.cd.EMOJI_PICKER_EMOJI_CLICKED;
    let t = P.emoji;
    f.default.track(R.rMx.PREMIUM_UPSELL_VIEWED, {
      type: e,
      is_animated: t.animated,
      is_external: !N.ZP.isInternalEmojiForGuildId(t, null == M ? void 0 : M.getGuildId()),
      has_search_query: null != H && "" !== H,
      location: {
        ...U,
        object: R.qAy.EMOJI
      },
      location_stack: F,
      sku_id: (0, A.Wz)(A.ZP.getSkuIdForPremiumType(g.p9.TIER_2))
    })
  }, [P, M, U, F, y, H]), (0, i.jsxs)("div", {
    className: o()(v.premiumPromo, {
      [v.unifyTrialUpsell]: Z
    }),
    children: [(0, i.jsx)(l.Clickable, {
      className: v.premiumPromoClose,
      onClick: D,
      children: C.Z.Messages.CLOSE
    }), (0, i.jsxs)(i.Fragment, {
      children: [Z ? (0, i.jsx)(h.ZP, {
        type: g.cd.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI,
        subscriptionTier: null !== (s = null == k ? void 0 : null === (t = k.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== s ? s : g.Si.TIER_2,
        onClose: D,
        trialOffer: k,
        discountOffer: V,
        children: C.Z.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_UPSELL.format({
          onClick: B
        })
      }) : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("img", {
          alt: "",
          className: v.premiumPromoImage,
          src: x
        }), (0, i.jsx)("div", {
          className: v.premiumPromoTitle,
          children: C.Z.Messages.PREMIUM_PROMO_TITLE_SEARCH_UPSELL
        }), (0, i.jsx)("div", {
          className: v.premiumPromoDescription,
          children: C.Z.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_UPSELL.format({
            onClick: B
          })
        })]
      }), !Z && (0, i.jsx)(S.Z, {
        subscriptionTier: g.Si.TIER_2,
        submitting: G,
        premiumModalAnalyticsLocation: {
          section: R.jXE.EMOJI_PICKER_POPOUT,
          object: R.qAy.BUTTON_CTA
        },
        size: l.Button.Sizes.SMALL,
        color: l.Button.Colors.GREEN,
        onClick: () => {
          w(!0)
        },
        onSubscribeModalClose: e => {
          w(!1), e && D()
        },
        buttonText: Z ? C.Z.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : C.Z.Messages.PREMIUM_REQUIRED_GET_NITRO
      })]
    })]
  })
}