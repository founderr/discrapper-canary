"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
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
  f = n("154889"),
  _ = n("917247"),
  E = n("956597"),
  T = n("635956"),
  I = n("646718"),
  p = n("49111"),
  P = n("782340"),
  S = n("857513"),
  R = n("393828");

function O(e) {
  var t, n, l;
  let {
    title: O,
    type: C,
    guildBoostProps: M,
    analyticsSource: g,
    analyticsLocation: L,
    body: v,
    context: U,
    glowUp: x,
    modalClassName: h,
    artContainerClassName: N,
    bodyClassName: A,
    transitionState: b,
    onClose: D,
    onSubscribeClick: y,
    onSecondaryClick: j,
    secondaryCTA: F,
    subscribeButtonText: w,
    showNewBadge: B = !1,
    enableArtBoxShadow: k = !0,
    subscriptionTier: G = I.PremiumSubscriptionSKUs.TIER_2,
    isLoading: H = !1,
    hideBackButton: K,
    backButtonText: V,
    ...z
  } = e, W = null != M, Z = (0, _.usePremiumTrialOffer)(), Y = (0, f.usePremiumDiscountOffer)(), X = ((null == Z ? void 0 : null === (t = Z.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === G || (0, f.discountOfferHasTier)(Y, G)) && !W, {
    analyticsLocations: J
  } = (0, u.default)(o.default.PREMIUM_UPSELL_MODAL);
  i.useEffect(() => {
    !H && (W ? c.default.track(p.AnalyticEvents.PREMIUM_GUILD_UPSELL_VIEWED, {
      type: "".concat(C, " - Tier ").concat(M.boostedGuildTier),
      guild_id: M.guild.id,
      channel_id: M.channelId,
      location: L,
      location_stack: J
    }) : c.default.track(p.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: C,
      source: g,
      location_stack: J,
      sku_id: G
    }))
  }, [W, G, H]);
  let q = k ? a(S.artContainer, S.artContainerBoxShadow, N) : a(S.artContainer, N),
    Q = null;
  return Q = "artURL" in z ? (0, r.jsx)("img", {
    className: S.art,
    alt: "",
    src: z.artURL
  }) : z.artElement, (0, r.jsxs)(s.ModalRoot, {
    className: a(S.root, h),
    "aria-label": O,
    transitionState: b,
    children: [(0, r.jsxs)("div", {
      className: q,
      children: [Q, B ? (0, r.jsx)("img", {
        className: S.sparkleBadge,
        alt: "",
        src: R
      }) : null]
    }), (0, r.jsx)(s.ModalContent, {
      className: S.content,
      children: H ? (0, r.jsx)(s.Spinner, {}) : (0, r.jsx)(r.Fragment, {
        children: X ? (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)(E.default, {
            onClose: D,
            type: C,
            subscriptionTier: null !== (l = null == Z ? void 0 : null === (n = Z.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== l ? l : I.PremiumSubscriptionSKUs.TIER_2,
            headingText: O,
            context: U,
            analyticsLocationObject: L,
            discountOffer: Y,
            trialOffer: Z,
            children: x
          })
        }) : (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(s.Heading, {
            className: S.header,
            variant: "heading-xl/semibold",
            children: O
          }), (0, r.jsx)(s.Text, {
            variant: "text-md/normal",
            className: a(A),
            children: v
          })]
        })
      })
    }), (0, r.jsxs)(s.ModalFooter, {
      className: S.footer,
      children: [(0, r.jsxs)("div", {
        className: S.primaryActions,
        children: [null != F ? (0, r.jsx)(s.Button, {
          className: S.secondaryAction,
          onClick: j,
          size: s.Button.Sizes.SMALL,
          color: s.Button.Colors.PRIMARY,
          look: s.Button.Looks.LINK,
          children: F
        }) : null, (() => {
          let e, t;
          if (W) return (0, r.jsx)(d.default, {
            analyticsLocation: L,
            guild: M.guild,
            onClose: D
          });
          if (X) {
            if (null != Z) {
              var n, i;
              e = (0, m.formatTrialCtaIntervalDuration)({
                intervalType: null == Z ? void 0 : null === (n = Z.subscription_trial) || void 0 === n ? void 0 : n.interval,
                intervalCount: null == Z ? void 0 : null === (i = Z.subscription_trial) || void 0 === i ? void 0 : i.interval_count
              }), t = null == Z ? void 0 : Z.trial_id
            } else null != Y && (e = P.default.Messages.PREMIUM_DISCOUNT_CTA.format({
              percent: Y.discount.amount
            }))
          }
          return (0, r.jsx)(T.default, {
            premiumModalAnalyticsLocation: L,
            subscriptionTier: G,
            trialId: t,
            size: s.Button.Sizes.SMALL,
            color: s.Button.Colors.GREEN,
            onClick: () => {
              null == y || y(), D()
            },
            buttonText: null != w ? w : e
          })
        })()]
      }), !K && (0, r.jsx)(s.Button, {
        onClick: D,
        size: s.Button.Sizes.SMALL,
        color: s.Button.Colors.PRIMARY,
        look: s.Button.Looks.LINK,
        children: null != V ? V : P.default.Messages.BACK
      })]
    })]
  })
}