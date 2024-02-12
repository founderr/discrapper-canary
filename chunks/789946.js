"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var r = n("37983"),
  i = n("884691"),
  l = n("414456"),
  a = n.n(l),
  s = n("77078"),
  o = n("812204"),
  u = n("685665"),
  d = n("617917"),
  c = n("599110"),
  m = n("719923"),
  f = n("688771"),
  _ = n("154889"),
  E = n("917247"),
  T = n("956597"),
  I = n("635956"),
  p = n("646718"),
  P = n("49111"),
  S = n("782340"),
  R = n("857513"),
  O = n("393828");

function C(e) {
  var t, n, l;
  let {
    title: C,
    type: M,
    guildBoostProps: g,
    analyticsSource: L,
    analyticsLocation: v,
    body: U,
    context: N,
    glowUp: x,
    modalClassName: h,
    artContainerClassName: A,
    bodyClassName: b,
    transitionState: D,
    onClose: y,
    onSubscribeClick: j,
    onSecondaryClick: F,
    secondaryCTA: B,
    subscribeButtonText: w,
    showNewBadge: k = !1,
    enableArtBoxShadow: G = !0,
    subscriptionTier: H = p.PremiumSubscriptionSKUs.TIER_2,
    isLoading: K = !1,
    hideBackButton: V,
    backButtonText: z,
    ...W
  } = e, Z = null != g, Y = (0, E.usePremiumTrialOffer)(), X = (0, _.usePremiumDiscountOffer)(), J = ((null == Y ? void 0 : null === (t = Y.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === H || (0, _.discountOfferHasTier)(X, H)) && !Z, {
    analyticsLocations: q
  } = (0, u.default)(o.default.PREMIUM_UPSELL_MODAL), {
    enabled: Q,
    variant: $
  } = f.default.useExperiment({
    location: "PremiumUpsellModal"
  }, {
    autoTrackExposure: !1
  }), ee = Q && M === p.PremiumUpsellTypes.STREAM_QUALITY_UPSELL, et = ee && f.GradientVariants.includes($);
  i.useEffect(() => {
    !K && (Z ? c.default.track(P.AnalyticEvents.PREMIUM_GUILD_UPSELL_VIEWED, {
      type: "".concat(M, " - Tier ").concat(g.boostedGuildTier),
      guild_id: g.guild.id,
      channel_id: g.channelId,
      location: v,
      location_stack: q
    }) : c.default.track(P.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: M,
      source: L,
      location: v,
      location_stack: q,
      sku_id: H
    }))
  }, [Z, H, K]);
  let en = G ? a(R.artContainer, R.artContainerBoxShadow, A) : a(R.artContainer, A),
    er = null;
  return er = "artURL" in W ? (0, r.jsx)("img", {
    className: R.art,
    alt: "",
    src: W.artURL
  }) : W.artElement, (0, r.jsxs)(s.ModalRoot, {
    className: a(R.root, h),
    "aria-label": C,
    transitionState: D,
    children: [(0, r.jsxs)("div", {
      className: en,
      children: [er, k ? (0, r.jsx)("img", {
        className: R.sparkleBadge,
        alt: "",
        src: O
      }) : null]
    }), ee ? (0, r.jsx)(s.ModalCloseButton, {
      onClick: y,
      className: R.closeButton
    }) : null, (0, r.jsx)(s.ModalContent, {
      className: R.content,
      children: K ? (0, r.jsx)(s.Spinner, {}) : (0, r.jsx)(r.Fragment, {
        children: J ? (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)(T.default, {
            onClose: y,
            type: M,
            subscriptionTier: null !== (l = null == Y ? void 0 : null === (n = Y.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== l ? l : p.PremiumSubscriptionSKUs.TIER_2,
            headingText: C,
            context: N,
            analyticsLocationObject: v,
            discountOffer: X,
            trialOffer: Y,
            children: x
          })
        }) : (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(s.Heading, {
            className: a(R.header, {
              [R.enhancedHeader]: ee
            }),
            variant: "heading-xl/semibold",
            children: C
          }), (0, r.jsx)(s.Text, {
            variant: "text-md/normal",
            className: a(b),
            children: U
          })]
        })
      })
    }), (0, r.jsxs)(s.ModalFooter, {
      className: a(R.footer, {
        [R.enhancedFooter]: ee
      }),
      children: [(0, r.jsxs)("div", {
        className: a(R.primaryActions, {
          [R.enhancedPrimaryActions]: ee
        }),
        children: [null != B ? (0, r.jsx)(s.Button, {
          className: a(R.secondaryAction, {
            [R.enhancedSecondaryAction]: et
          }),
          onClick: F,
          size: s.Button.Sizes.SMALL,
          color: et ? s.Button.Colors.CUSTOM : s.Button.Colors.PRIMARY,
          look: s.Button.Looks.LINK,
          children: B
        }) : null, (() => {
          let e;
          if (Z) return (0, r.jsx)(d.default, {
            analyticsLocation: v,
            guild: g.guild,
            onClose: y
          });
          let t = ee ? S.default.Messages.PREMIUM_UPSELL_GET_NITRO : void 0;
          if (J) {
            if (null != Y) {
              var n, i;
              t = (0, m.formatTrialCtaIntervalDuration)({
                intervalType: null == Y ? void 0 : null === (n = Y.subscription_trial) || void 0 === n ? void 0 : n.interval,
                intervalCount: null == Y ? void 0 : null === (i = Y.subscription_trial) || void 0 === i ? void 0 : i.interval_count
              }), e = null == Y ? void 0 : Y.trial_id
            } else null != X && (t = S.default.Messages.PREMIUM_DISCOUNT_CTA.format({
              percent: X.discount.amount
            }))
          }
          return (0, r.jsx)(I.default, {
            className: a({
              [R.getNitroCTA]: et
            }),
            premiumModalAnalyticsLocation: v,
            subscriptionTier: H,
            trialId: e,
            size: s.Button.Sizes.SMALL,
            color: et ? s.Button.Colors.CUSTOM : s.Button.Colors.GREEN,
            onClick: () => {
              null == j || j(), y()
            },
            buttonText: null != w ? w : t
          })
        })()]
      }), !V && !ee && (0, r.jsx)(s.Button, {
        onClick: y,
        size: s.Button.Sizes.SMALL,
        color: s.Button.Colors.PRIMARY,
        look: s.Button.Looks.LINK,
        children: null != z ? z : S.default.Messages.BACK
      })]
    })]
  })
}