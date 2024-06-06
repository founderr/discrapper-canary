"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
  }
});
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("442837"),
  l = n("481060"),
  u = n("355467"),
  d = n("100527"),
  _ = n("906732"),
  c = n("678558"),
  E = n("626135"),
  I = n("74538"),
  T = n("357355"),
  f = n("104494"),
  S = n("639119"),
  h = n("165583"),
  A = n("197115"),
  m = n("302945"),
  N = n("631771"),
  p = n("474936"),
  O = n("981631"),
  C = n("689938"),
  R = n("991566"),
  g = n("769860");

function L(e) {
  var t, n, s;
  let {
    title: L,
    type: v,
    guildBoostProps: D,
    analyticsSource: M,
    analyticsLocation: y,
    body: P,
    context: U,
    glowUp: b,
    modalClassName: G,
    artContainerClassName: w,
    bodyClassName: k,
    transitionState: B,
    onClose: V,
    onSubscribeClick: x,
    onSecondaryClick: F,
    secondaryCTA: H,
    subscribeButtonText: Y,
    showNewBadge: j = !1,
    enableArtBoxShadow: W = !0,
    subscriptionTier: K = p.PremiumSubscriptionSKUs.TIER_2,
    isLoading: z = !1,
    hideBackButton: Z,
    backButtonText: X,
    showEnhancedUpsell: Q,
    children: q,
    ...J
  } = e, $ = null != D, ee = (0, S.usePremiumTrialOffer)(), et = (0, f.usePremiumDiscountOffer)(), en = ((null == ee ? void 0 : null === (t = ee.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === K || (0, f.discountOfferHasTier)(et, K)) && !$, {
    analyticsLocations: ei
  } = (0, _.default)(d.default.PREMIUM_UPSELL_MODAL);
  r.useEffect(() => {
    !z && ($ ? E.default.track(O.AnalyticEvents.PREMIUM_GUILD_UPSELL_VIEWED, {
      type: "".concat(v, " - Tier ").concat(D.boostedGuildTier),
      guild_id: D.guild.id,
      channel_id: D.channelId,
      location: y,
      location_stack: ei
    }) : E.default.track(O.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: v,
      source: M,
      location: y,
      location_stack: ei,
      sku_id: (0, I.castPremiumSubscriptionAsSkuId)(K)
    }))
  }, [$, K, z]);
  let er = (0, o.useStateFromStores)([T.default], () => T.default.affinities),
    es = er.length > 1 && v === p.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL,
    ea = N.DesktopFileUploadUpsellExperiment.getCurrentConfig({
      location: "File Upload Roadblock"
    }, {
      autoTrackExposure: !1,
      disable: !es
    }).addSocialProof,
    eo = (0, o.useStateFromStores)([T.default], () => T.default.hasFetched);
  r.useEffect(() => {
    !eo && u.getNitroAffinity()
  }, [eo]);
  let el = W ? a()(R.artContainer, R.artContainerBoxShadow, w) : a()(R.artContainer, w),
    eu = null;
  return eu = "artURL" in J ? (0, i.jsx)("img", {
    className: R.art,
    alt: "",
    src: J.artURL
  }) : J.artElement, (0, i.jsxs)(l.ModalRoot, {
    className: a()(R.root, G),
    "aria-label": L,
    transitionState: B,
    children: [(0, i.jsxs)("div", {
      className: el,
      children: [eu, j ? (0, i.jsx)("img", {
        className: R.sparkleBadge,
        alt: "",
        src: g
      }) : null]
    }), Q ? (0, i.jsx)(l.ModalCloseButton, {
      onClick: V,
      className: R.closeButton
    }) : null, (0, i.jsx)(l.ModalContent, {
      scrollbarType: "none",
      className: R.content,
      children: z ? (0, i.jsx)(l.Spinner, {}) : (0, i.jsx)(i.Fragment, {
        children: en ? (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)(h.default, {
            onClose: V,
            type: v,
            subscriptionTier: null !== (s = null == ee ? void 0 : null === (n = ee.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== s ? s : p.PremiumSubscriptionSKUs.TIER_2,
            headingText: L,
            context: U,
            analyticsLocationObject: y,
            discountOffer: et,
            trialOffer: ee,
            children: b
          })
        }) : (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(l.Heading, {
            className: a()(R.header, {
              [R.enhancedHeader]: Q
            }),
            variant: "heading-xl/bold",
            children: L
          }), ea ? (0, i.jsx)(m.default, {
            affinities: er
          }) : void 0, q, (0, i.jsx)(l.Text, {
            variant: "text-md/normal",
            className: a()(k, R.subHeader),
            children: P
          })]
        })
      })
    }), (0, i.jsxs)(l.ModalFooter, {
      className: a()(R.footer, {
        [R.enhancedFooter]: Q
      }),
      children: [(0, i.jsxs)("div", {
        className: a()(R.primaryActions, {
          [R.enhancedPrimaryActions]: Q
        }),
        children: [null != H ? (0, i.jsx)(l.Button, {
          className: a()(R.secondaryAction, {
            [R.enhancedSecondaryAction]: Q
          }),
          onClick: F,
          size: l.Button.Sizes.SMALL,
          color: Q ? l.Button.Colors.CUSTOM : l.Button.Colors.PRIMARY,
          look: l.Button.Looks.LINK,
          children: H
        }) : null, (() => {
          let e;
          if ($) return (0, i.jsx)(c.default, {
            analyticsLocation: y,
            guild: D.guild,
            onClose: V
          });
          let t = Q ? C.default.Messages.PREMIUM_UPSELL_GET_NITRO : void 0;
          if (en) {
            if (null != ee) {
              var n, r;
              t = (0, I.formatTrialCtaIntervalDuration)({
                intervalType: null == ee ? void 0 : null === (n = ee.subscription_trial) || void 0 === n ? void 0 : n.interval,
                intervalCount: null == ee ? void 0 : null === (r = ee.subscription_trial) || void 0 === r ? void 0 : r.interval_count
              }), e = null == ee ? void 0 : ee.trial_id
            } else null != et && (t = C.default.Messages.PREMIUM_DISCOUNT_CTA.format({
              percent: et.discount.amount
            }))
          }
          return (0, i.jsx)(A.default, {
            showGradient: Q,
            premiumModalAnalyticsLocation: y,
            subscriptionTier: K,
            trialId: e,
            size: l.Button.Sizes.SMALL,
            color: Q ? l.Button.Colors.CUSTOM : l.Button.Colors.GREEN,
            onClick: () => {
              null == x || x(), V()
            },
            buttonText: null != Y ? Y : t
          })
        })()]
      }), !Z && !Q && (0, i.jsx)(l.Button, {
        onClick: V,
        size: l.Button.Sizes.SMALL,
        color: l.Button.Colors.PRIMARY,
        look: l.Button.Looks.LINK,
        children: null != X ? X : C.default.Messages.BACK
      })]
    })]
  })
}