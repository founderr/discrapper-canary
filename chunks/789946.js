"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  }
});
var i = n("37983"),
  r = n("884691"),
  l = n("414456"),
  a = n.n(l),
  s = n("77078"),
  o = n("812204"),
  u = n("685665"),
  d = n("617917"),
  c = n("599110"),
  f = n("719923"),
  m = n("688771"),
  _ = n("154889"),
  E = n("917247"),
  T = n("956597"),
  I = n("635956"),
  C = n("646718"),
  p = n("49111"),
  P = n("782340"),
  S = n("758542"),
  R = n("393828");

function O(e) {
  var t, n, l;
  let {
    title: O,
    type: M,
    guildBoostProps: L,
    analyticsSource: g,
    analyticsLocation: h,
    body: x,
    context: N,
    glowUp: A,
    modalClassName: v,
    artContainerClassName: U,
    bodyClassName: b,
    transitionState: D,
    onClose: y,
    onSubscribeClick: j,
    onSecondaryClick: F,
    secondaryCTA: B,
    subscribeButtonText: w,
    showNewBadge: H = !1,
    enableArtBoxShadow: G = !0,
    subscriptionTier: k = C.PremiumSubscriptionSKUs.TIER_2,
    isLoading: K = !1,
    hideBackButton: V,
    backButtonText: W,
    ...Z
  } = e, z = null != L, Y = (0, E.usePremiumTrialOffer)(), X = (0, _.usePremiumDiscountOffer)(), J = ((null == Y ? void 0 : null === (t = Y.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === k || (0, _.discountOfferHasTier)(X, k)) && !z, {
    analyticsLocations: q
  } = (0, u.default)(o.default.PREMIUM_UPSELL_MODAL), {
    enabled: Q,
    variant: $
  } = m.default.useExperiment({
    location: "PremiumUpsellModal"
  }, {
    autoTrackExposure: !1
  }), ee = Q && M === C.PremiumUpsellTypes.STREAM_QUALITY_UPSELL, et = ee && m.GradientVariants.includes($);
  r.useEffect(() => {
    !K && (z ? c.default.track(p.AnalyticEvents.PREMIUM_GUILD_UPSELL_VIEWED, {
      type: "".concat(M, " - Tier ").concat(L.boostedGuildTier),
      guild_id: L.guild.id,
      channel_id: L.channelId,
      location: h,
      location_stack: q
    }) : c.default.track(p.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: M,
      source: g,
      location: h,
      location_stack: q,
      sku_id: k
    }))
  }, [z, k, K]);
  let en = G ? a(S.artContainer, S.artContainerBoxShadow, U) : a(S.artContainer, U),
    ei = null;
  return ei = "artURL" in Z ? (0, i.jsx)("img", {
    className: S.art,
    alt: "",
    src: Z.artURL
  }) : Z.artElement, (0, i.jsxs)(s.ModalRoot, {
    className: a(S.root, v),
    "aria-label": O,
    transitionState: D,
    children: [(0, i.jsxs)("div", {
      className: en,
      children: [ei, H ? (0, i.jsx)("img", {
        className: S.sparkleBadge,
        alt: "",
        src: R
      }) : null]
    }), ee ? (0, i.jsx)(s.ModalCloseButton, {
      onClick: y,
      className: S.closeButton
    }) : null, (0, i.jsx)(s.ModalContent, {
      className: S.content,
      children: K ? (0, i.jsx)(s.Spinner, {}) : (0, i.jsx)(i.Fragment, {
        children: J ? (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)(T.default, {
            onClose: y,
            type: M,
            subscriptionTier: null !== (l = null == Y ? void 0 : null === (n = Y.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== l ? l : C.PremiumSubscriptionSKUs.TIER_2,
            headingText: O,
            context: N,
            analyticsLocationObject: h,
            discountOffer: X,
            trialOffer: Y,
            children: A
          })
        }) : (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(s.Heading, {
            className: a(S.header, {
              [S.enhancedHeader]: ee
            }),
            variant: "heading-xl/semibold",
            children: O
          }), (0, i.jsx)(s.Text, {
            variant: "text-md/normal",
            className: a(b),
            children: x
          })]
        })
      })
    }), (0, i.jsxs)(s.ModalFooter, {
      className: a(S.footer, {
        [S.enhancedFooter]: ee
      }),
      children: [(0, i.jsxs)("div", {
        className: a(S.primaryActions, {
          [S.enhancedPrimaryActions]: ee
        }),
        children: [null != B ? (0, i.jsx)(s.Button, {
          className: a(S.secondaryAction, {
            [S.enhancedSecondaryAction]: et
          }),
          onClick: F,
          size: s.Button.Sizes.SMALL,
          color: et ? s.Button.Colors.CUSTOM : s.Button.Colors.PRIMARY,
          look: s.Button.Looks.LINK,
          children: B
        }) : null, (() => {
          let e;
          if (z) return (0, i.jsx)(d.default, {
            analyticsLocation: h,
            guild: L.guild,
            onClose: y
          });
          let t = ee ? P.default.Messages.PREMIUM_UPSELL_GET_NITRO : void 0;
          if (J) {
            if (null != Y) {
              var n, r;
              t = (0, f.formatTrialCtaIntervalDuration)({
                intervalType: null == Y ? void 0 : null === (n = Y.subscription_trial) || void 0 === n ? void 0 : n.interval,
                intervalCount: null == Y ? void 0 : null === (r = Y.subscription_trial) || void 0 === r ? void 0 : r.interval_count
              }), e = null == Y ? void 0 : Y.trial_id
            } else null != X && (t = P.default.Messages.PREMIUM_DISCOUNT_CTA.format({
              percent: X.discount.amount
            }))
          }
          return (0, i.jsx)(I.default, {
            className: a({
              [S.getNitroCTA]: et
            }),
            premiumModalAnalyticsLocation: h,
            subscriptionTier: k,
            trialId: e,
            size: s.Button.Sizes.SMALL,
            color: et ? s.Button.Colors.CUSTOM : s.Button.Colors.GREEN,
            onClick: () => {
              null == j || j(), y()
            },
            buttonText: null != w ? w : t
          })
        })()]
      }), !V && !ee && (0, i.jsx)(s.Button, {
        onClick: y,
        size: s.Button.Sizes.SMALL,
        color: s.Button.Colors.PRIMARY,
        look: s.Button.Looks.LINK,
        children: null != W ? W : P.default.Messages.BACK
      })]
    })]
  })
}