"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(442837),
  l = n(481060),
  u = n(355467),
  _ = n(37234),
  c = n(100527),
  d = n(906732),
  E = n(28546),
  I = n(174609),
  T = n(357355),
  h = n(98278),
  f = n(104494),
  S = n(639119),
  N = n(165583),
  A = n(197115),
  m = n(302945),
  O = n(631771),
  p = n(703656),
  R = n(210887),
  g = n(626135),
  C = n(176354),
  v = n(74538),
  L = n(543241),
  D = n(149203),
  M = n(981631),
  P = n(185923),
  y = n(474936),
  U = n(689938),
  b = n(538100);
t.Z = e => {
  var t, s;
  let {
    onLearnMore: G,
    onClose: w,
    channel: x,
    emojiDescriptor: B,
    pickerIntention: k,
    analyticsLocation: V,
    containerContextClassName: Z
  } = e, H = (0, a.e7)([R.Z], () => R.Z.theme) === M.BRd.LIGHT ? "light" : "dark", [F, Y] = r.useState(!1), j = () => {
    (0, L.A3)(x), (0, h.z)(), G()
  }, W = n(577391)("./img_premium_emoji_".concat(H, ".svg")), K = "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_".concat(H, ".png"), z = (0, S.N)(), q = (0, f.Ng)(), X = null != z || null != q, Q = (0, E.Iu)(e => e.searchQuery), {
    analyticsLocations: J
  } = (0, d.ZP)(c.Z.EMOJI_PICKER), {
    enabled: $,
    addSocialProof: ee
  } = O.Gi.useExperiment({
    location: "Premium Emoji Roadblock"
  }, {
    autoTrackExposure: !X,
    disable: X
  });
  r.useEffect(() => {
    let e;
    e = k === P.Hz.REACTION ? y.cd.EMOJI_PICKER_REACTION_EMOJI_CLICKED : null == B ? y.cd.EMOJI_PICKER_FLOATING_UPSELL : B.subCategory === D.t0.TOP_GUILD_EMOJI ? y.cd.EMOJI_PICKER_TOP_SERVER_EMOJI_CLICKED : B.subCategory === D.t0.NEWLY_ADDED_EMOJI ? y.cd.EMOJI_PICKER_NEWLY_ADDED_EMOJI_CLICKED : y.cd.EMOJI_PICKER_EMOJI_CLICKED;
    let t = null != B ? B.emoji : void 0,
      n = null != t && t.animated,
      i = null != t && !C.ZP.isInternalEmojiForGuildId(t, null == x ? void 0 : x.getGuildId()),
      r = null != t ? M.qAy.EMOJI : M.qAy.EMOJI_PICKER_FLOATING_UPSELL;
    g.default.track(M.rMx.PREMIUM_UPSELL_VIEWED, {
      type: e,
      is_animated: n,
      is_external: i,
      has_search_query: null != Q && "" !== Q,
      location: {
        ...V,
        object: r
      },
      location_stack: J,
      sku_id: (0, v.Wz)(v.ZP.getSkuIdForPremiumType(y.p9.TIER_2))
    })
  }, [B, x, V, J, k, Q]);
  let et = () => {
      (0, I.Z)(), w(), G(), g.default.track(M.rMx.PREMIUM_PROMOTION_OPENED, {
        location_section: M.jXE.EMOJI_UPSELL_POPOUT,
        location_object: M.qAy.NAVIGATION_LINK
      }), (0, _.xf)(), (0, p.uL)(M.Z5c.APPLICATION_STORE)
    },
    en = (0, a.e7)([T.Z], () => T.Z.affinities),
    ei = (0, a.e7)([T.Z], () => T.Z.hasFetched);
  r.useEffect(() => {
    !ei && u.MH()
  }, [ei]);
  let er = en.length > 1 && ee,
    es = () => (0, i.jsx)(A.Z, {
      showGradient: !0,
      premiumModalAnalyticsLocation: V,
      subscriptionTier: y.Si.TIER_2,
      size: l.Button.Sizes.SMALL,
      color: l.Button.Colors.CUSTOM,
      onClick: () => {
        w()
      },
      buttonText: U.Z.Messages.PREMIUM_UPSELL_GET_NITRO
    });
  return $ ? (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(l.Backdrop, {
      backdropStyle: l.BackdropStyles.DARK,
      onClose: w,
      "aria-label": U.Z.Messages.CLOSE,
      isVisible: !0
    }), (0, i.jsxs)("div", {
      className: o()(b.container, Z),
      children: [(0, i.jsx)(l.ModalCloseButton, {
        onClick: w,
        className: b.upsellClose
      }), (0, i.jsxs)("div", {
        className: b.contentContainer,
        children: [(0, i.jsx)("img", {
          className: b.upsellArt,
          alt: "Custom Emoji Nitro Perk",
          src: K
        }), (0, i.jsx)(l.Heading, {
          className: o()(b.upsellTitle, {
            [b.upsellTitleNoSocialProof]: !er
          }),
          variant: "heading-xl/bold",
          children: U.Z.Messages.EMOJI_PICKER_PREMIUM_UPSELL_TITLE_V2
        }), er ? (0, i.jsx)(m.Z, {
          affinities: en
        }) : void 0, (0, i.jsx)(l.Text, {
          variant: "text-sm/medium",
          className: b.upsellBody,
          children: U.Z.Messages.EMOJI_PICKER_PREMIUM_UPSELL_DESCRIPTION_V2
        })]
      }), (0, i.jsxs)("div", {
        className: b.upsellCTAContainer,
        children: [(0, i.jsx)(l.Button, {
          className: b.upsellSecondaryCTA,
          size: l.Button.Sizes.SMALL,
          color: l.Button.Colors.CUSTOM,
          look: l.Button.Looks.LINK,
          onClick: et,
          children: U.Z.Messages.STREAM_PREMIUM_UPSELL_SECONDARY_CTA
        }), es()]
      })]
    })]
  }) : (0, i.jsxs)("div", {
    className: o()(b.premiumPromo, {
      [b.unifyTrialUpsell]: X
    }),
    children: [(0, i.jsx)(l.Clickable, {
      className: b.premiumPromoClose,
      onClick: w,
      children: U.Z.Messages.CLOSE
    }), (0, i.jsxs)(i.Fragment, {
      children: [X ? (0, i.jsx)(N.ZP, {
        type: y.cd.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI,
        subscriptionTier: null !== (s = null == z ? void 0 : null === (t = z.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== s ? s : y.Si.TIER_2,
        onClose: w,
        trialOffer: z,
        discountOffer: q,
        children: U.Z.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_UPSELL.format({
          onClick: j
        })
      }) : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("img", {
          alt: "",
          className: b.premiumPromoImage,
          src: W
        }), (0, i.jsx)("div", {
          className: b.premiumPromoTitle,
          children: U.Z.Messages.PREMIUM_PROMO_TITLE_SEARCH_UPSELL
        }), (0, i.jsx)("div", {
          className: b.premiumPromoDescription,
          children: U.Z.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_UPSELL.format({
            onClick: j
          })
        })]
      }), !X && (0, i.jsx)(A.Z, {
        subscriptionTier: y.Si.TIER_2,
        submitting: F,
        premiumModalAnalyticsLocation: {
          section: M.jXE.EMOJI_PICKER_POPOUT,
          object: M.qAy.BUTTON_CTA
        },
        size: l.Button.Sizes.SMALL,
        color: l.Button.Colors.GREEN,
        onClick: () => {
          Y(!0)
        },
        onSubscribeModalClose: e => {
          Y(!1), e && w()
        },
        buttonText: X ? U.Z.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : U.Z.Messages.PREMIUM_REQUIRED_GET_NITRO
      })]
    })]
  })
}