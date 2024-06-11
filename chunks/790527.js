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
    headerClassName: k,
    bodyClassName: B,
    transitionState: V,
    onClose: x,
    onSubscribeClick: F,
    onSecondaryClick: H,
    secondaryCTA: Y,
    subscribeButtonText: j,
    showNewBadge: W = !1,
    enableArtBoxShadow: K = !0,
    subscriptionTier: z = p.PremiumSubscriptionSKUs.TIER_2,
    isLoading: Z = !1,
    hideBackButton: Q,
    backButtonText: X,
    showEnhancedUpsell: q,
    children: J,
    ...$
  } = e, ee = null != D, et = (0, S.usePremiumTrialOffer)(), en = (0, f.usePremiumDiscountOffer)(), ei = ((null == et ? void 0 : null === (t = et.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === z || (0, f.discountOfferHasTier)(en, z)) && !ee, {
    analyticsLocations: er
  } = (0, _.default)(d.default.PREMIUM_UPSELL_MODAL);
  r.useEffect(() => {
    !Z && (ee ? E.default.track(O.AnalyticEvents.PREMIUM_GUILD_UPSELL_VIEWED, {
      type: "".concat(v, " - Tier ").concat(D.boostedGuildTier),
      guild_id: D.guild.id,
      channel_id: D.channelId,
      location: y,
      location_stack: er
    }) : E.default.track(O.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: v,
      source: M,
      location: y,
      location_stack: er,
      sku_id: (0, I.castPremiumSubscriptionAsSkuId)(z)
    }))
  }, [ee, z, Z]);
  let es = (0, o.useStateFromStores)([T.default], () => T.default.affinities),
    ea = es.length > 1 && (0, N.shouldShowSocialProof)(v),
    eo = (0, o.useStateFromStores)([T.default], () => T.default.hasFetched);
  r.useEffect(() => {
    !eo && u.getNitroAffinity()
  }, [eo]);
  let el = K ? a()(R.artContainer, R.artContainerBoxShadow, w) : a()(R.artContainer, w),
    eu = null;
  return eu = "artURL" in $ ? (0, i.jsx)("img", {
    className: R.art,
    alt: "",
    src: $.artURL
  }) : $.artElement, (0, i.jsxs)(l.ModalRoot, {
    className: a()(R.root, G),
    "aria-label": L,
    transitionState: V,
    children: [(0, i.jsxs)("div", {
      className: el,
      children: [eu, W ? (0, i.jsx)("img", {
        className: R.sparkleBadge,
        alt: "",
        src: g
      }) : null]
    }), q ? (0, i.jsx)(l.ModalCloseButton, {
      onClick: x,
      className: R.closeButton
    }) : null, (0, i.jsx)(l.ModalContent, {
      scrollbarType: "none",
      className: q ? R.enhancedContent : R.content,
      children: Z ? (0, i.jsx)(l.Spinner, {}) : (0, i.jsx)(i.Fragment, {
        children: ei ? (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)(h.default, {
            onClose: x,
            type: v,
            subscriptionTier: null !== (s = null == et ? void 0 : null === (n = et.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== s ? s : p.PremiumSubscriptionSKUs.TIER_2,
            headingText: L,
            context: U,
            analyticsLocationObject: y,
            discountOffer: en,
            trialOffer: et,
            children: b
          })
        }) : (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(l.Heading, {
            className: a()(R.header, {
              [R.enhancedHeader]: q
            }, k),
            variant: "heading-xl/bold",
            children: L
          }), ea ? (0, i.jsx)(m.default, {
            affinities: es
          }) : void 0, J, (0, i.jsx)(l.Text, {
            variant: "text-md/normal",
            className: a()(B, R.subHeader),
            children: P
          })]
        })
      })
    }), (0, i.jsxs)(l.ModalFooter, {
      className: a()(R.footer, {
        [R.enhancedFooter]: q
      }),
      children: [(0, i.jsxs)("div", {
        className: a()(R.primaryActions, {
          [R.enhancedPrimaryActions]: q
        }),
        children: [null != Y ? (0, i.jsx)(l.Button, {
          className: a()(R.secondaryAction, {
            [R.enhancedSecondaryAction]: q
          }),
          onClick: H,
          size: l.Button.Sizes.SMALL,
          color: q ? l.Button.Colors.CUSTOM : l.Button.Colors.PRIMARY,
          look: l.Button.Looks.LINK,
          children: Y
        }) : null, (() => {
          let e;
          if (ee) return (0, i.jsx)(c.default, {
            analyticsLocation: y,
            guild: D.guild,
            onClose: x
          });
          let t = q ? C.default.Messages.PREMIUM_UPSELL_GET_NITRO : void 0;
          if (ei) {
            if (null != et) {
              var n, r;
              t = (0, I.formatTrialCtaIntervalDuration)({
                intervalType: null == et ? void 0 : null === (n = et.subscription_trial) || void 0 === n ? void 0 : n.interval,
                intervalCount: null == et ? void 0 : null === (r = et.subscription_trial) || void 0 === r ? void 0 : r.interval_count
              }), e = null == et ? void 0 : et.trial_id
            } else null != en && (t = C.default.Messages.PREMIUM_DISCOUNT_CTA.format({
              percent: en.discount.amount
            }))
          }
          return (0, i.jsx)(A.default, {
            showGradient: q,
            premiumModalAnalyticsLocation: y,
            subscriptionTier: z,
            trialId: e,
            size: l.Button.Sizes.SMALL,
            color: q ? l.Button.Colors.CUSTOM : l.Button.Colors.GREEN,
            onClick: () => {
              null == F || F(), x()
            },
            buttonText: null != j ? j : t
          })
        })()]
      }), !Q && !q && (0, i.jsx)(l.Button, {
        onClick: x,
        size: l.Button.Sizes.SMALL,
        color: l.Button.Colors.PRIMARY,
        look: l.Button.Looks.LINK,
        children: null != X ? X : C.default.Messages.BACK
      })]
    })]
  })
}