"use strict";
s.r(t), s.d(t, {
  default: function() {
    return es
  }
}), s("222007");
var a = s("37983"),
  i = s("884691"),
  r = s("414456"),
  n = s.n(r),
  l = s("446674"),
  o = s("290381"),
  u = s("819855"),
  d = s("77078"),
  c = s("875212"),
  _ = s("841098"),
  E = s("206230"),
  I = s("812204"),
  T = s("685665"),
  f = s("521012"),
  S = s("594098"),
  R = s("599110"),
  m = s("719923"),
  A = s("182650"),
  p = s("527715"),
  N = s("300962"),
  g = s("959905"),
  C = s("154889"),
  P = s("917247"),
  O = s("460680"),
  M = s("411205"),
  h = s("934570"),
  L = s("641078"),
  x = s("400307"),
  v = s("521322"),
  D = s("159646"),
  b = s("379521"),
  U = s("958966"),
  j = s("149102"),
  G = s("830648"),
  k = s("627474"),
  B = s("904871"),
  y = s("360776"),
  H = s("525505"),
  K = s("881155"),
  F = s("598739"),
  W = s("326881"),
  w = s("228967"),
  V = s("646718"),
  Y = s("49111"),
  z = s("660261"),
  Q = s("679324"),
  X = s("575066"),
  Z = s("905498"),
  J = s("452637");
let q = e => {
    let {
      isVisible: t,
      isMarketingPageOptimizationEnabled: s,
      children: i
    } = e, r = (0, l.useStateFromStores)([E.default], () => E.default.useReducedMotion);
    return !s || r ? (0, a.jsx)(a.Fragment, {
      children: i
    }) : (0, a.jsx)(v.AnimatedWrapper, {
      isVisible: t,
      children: i
    })
  },
  $ = e => {
    let {
      isFullscreen: t,
      selectedPremiumType: s
    } = e, i = t && null == s || s === V.PremiumTypes.TIER_2 && t;
    return i ? null : (0, a.jsx)(G.default, {
      selectedPremiumType: s,
      className: t ? z.perkCardsContainerSpacingFullscreen : z.perkCardsContainerSpacingSettings
    })
  },
  ee = e => {
    let {
      isFullscreen: t,
      inOfferExperience: s,
      isMarketingPageOptimizationEnabled: i
    } = e;
    return t || s || i ? i ? (0, a.jsx)("img", {
      alt: "starry sky background header splash",
      className: z.dynamicImage,
      src: X
    }) : (0, a.jsx)(b.default, {
      lifted: !t && s
    }) : null
  },
  et = e => {
    let {
      isFullscreen: t,
      isInNitroTabHoldout: s,
      selectedPremiumType: i,
      isMarketingPageOptimizationEnabled: r,
      inOfferExperience: l,
      setIsAllPerksVisible: o
    } = e;
    return !t && !r || s || r && i === V.PremiumTypes.TIER_0 ? null : (0, a.jsxs)("div", {
      className: n({
        [z.whatsNewSectionBackground]: !r,
        [z.whatsNewSection]: r
      }),
      children: [(0, a.jsx)(k.default, {
        headerClassname: r ? z.stackedHeader : void 0,
        variant: F.PerksDiscoverabilityVariants.WHATS_NEW,
        isFullScreen: t
      }), (0, a.jsx)(k.default, {
        headerClassname: r ? z.stackedHeader : void 0,
        isFullScreen: t,
        showAllPerksButton: t ? (0, a.jsx)(w.default, {
          setIsAllPerksVisible: o,
          previousComponent: F.NitroLandingPages.MARKETING
        }) : void 0
      }), l && !r ? (0, a.jsx)(B.default, {
        className: z.pdSparklesTop,
        variant: B.SparkleVariants.TOP
      }) : null, l && !r ? (0, a.jsx)(B.default, {
        className: z.pdSparklesBottom,
        variant: B.SparkleVariants.BOTTOM
      }) : null]
    })
  };
var es = e => {
  var t;
  let {
    isFullscreen: s
  } = e, r = (0, p.useMarketingOptimizationExperiment)({
    autoTrackExposure: !0
  }), E = i.useRef(null), [v, b] = i.useState(!1), [G, k] = i.useState(!1), [B, w] = i.useState(!1), X = !v && !G || r, [es, ea] = i.useState(!1), ei = (0, l.useStateFromStores)([f.default], () => f.default.getPremiumTypeSubscription()), [er, en] = i.useState(r ? V.PremiumTypes.TIER_2 : void 0), el = null != ei ? (0, m.getPremiumPlanItem)(ei) : null, eo = null != el ? m.default.getSkuIdForPlan(el.planId) : null, eu = null !== eo && eo !== V.PremiumSubscriptionSKUs.TIER_2 ? V.PremiumSubscriptionSKUs.TIER_2 : null, ed = (0, g.useLocalizedPromoQuery)(), ec = (0, u.isThemeLight)((0, _.default)()), e_ = null != ed, [eE, eI] = i.useState(!1), eT = (0, C.usePremiumDiscountOffer)(), ef = (0, P.usePremiumTrialOffer)(), eS = null == ef ? void 0 : null === (t = ef.subscription_trial) || void 0 === t ? void 0 : t.sku_id, eR = (0, A.useIsInPremiumOfferExperience)(), em = (0, L.useIsEligibleForBogoPromotion)(), {
    enabled: eA
  } = (0, N.default)(), {
    analyticsLocations: ep
  } = (0, T.default)(I.default.PREMIUM_MARKETING), eN = "PremiumMarketingHome";
  (0, c.useTriggerDebuggingAA)({
    location: eN + " auto on",
    autoTrackExposure: !0
  }), (0, c.useTriggerDebuggingAA)({
    location: eN + " auto off",
    autoTrackExposure: !1
  }), i.useEffect(() => {
    ea(!0)
  }, []), i.useEffect(() => {
    en(r ? V.PremiumTypes.TIER_2 : void 0)
  }, [r]);
  let eg = r ? {
      borderRadius: "24px"
    } : void 0,
    eC = (0, a.jsxs)("div", {
      className: n(z.container, {
        [z.settingsContainer]: !s && !r
      }),
      "data-cy": "tier-0-marketing-page",
      children: [(0, a.jsx)(D.default, {
        premiumSubscription: ei,
        className: n(s ? z.fullscreenExistingSubscriberSpacing : z.existingSubscriberSpacing, {
          [z.zIndex1]: eR
        }),
        isFullscreen: s,
        textColor: r && ec ? "text-normal" : void 0
      }), (0, a.jsx)(ee, {
        isFullscreen: s,
        inOfferExperience: eR,
        isMarketingPageOptimizationEnabled: r
      }), !s && e_ ? (0, a.jsx)(h.default, {
        localizedPricingPromo: ed,
        smallGap: !0
      }) : (0, a.jsx)(o.VisibilitySensor, {
        onChange: e => b(e),
        threshold: 0,
        active: !0,
        children: (0, a.jsx)(U.default, {
          subscriptionTier: eu,
          isFullscreen: s || eR,
          className: n({
            [z.fullscreenHero]: s && !r,
            [z.fullscreenHeroMarketingOptimization]: r,
            [z.settingsHeroNoBackground]: !s && eR,
            [z.trialMarketingMargin]: eR && !r,
            [z.settingsHeroBogoHeight]: !s && em,
            [z.settingsHeroBogoMarginFullscreen]: s && em,
            [z.noTopPaddingOverride]: null != ei
          }),
          hideSparkles: r,
          hideSubscribeAndGiftButton: r
        })
      }), r && null != er && (0, a.jsx)(j.default, {
        setSelectedPremiumType: en,
        selectedPremiumType: er
      }), (0, a.jsxs)("div", {
        className: s ? r ? z.premiumStackedTierCardsContainerFullscreen : z.premiumTierCardsContainerFullscreen : z.premiumTierCardsContainerSettings,
        children: [(0, a.jsx)(O.default, {
          isFullscreen: s
        }), s && e_ && (0, a.jsx)(M.default, {
          localizedPricingPromo: ed
        }), (0, a.jsx)(o.VisibilitySensor, {
          onChange: e => k(e),
          threshold: .1,
          active: !0,
          children: (0, a.jsx)(x.default, {
            showWumpus: !r,
            variant: r ? x.PremiumTierCardsVariant.STACKED : x.PremiumTierCardsVariant.DEFAULT,
            isFullScreen: s,
            selectedPremiumType: r ? er : void 0,
            tier0CTAButton: eS === V.PremiumSubscriptionSKUs.TIER_2 || em || null != eT ? (0, a.jsx)(K.default, {
              forceInverted: !0,
              showIcon: !1,
              subscriptionTier: V.PremiumSubscriptionSKUs.TIER_0,
              className: n({
                [z.marginTopForButtons]: !r,
                [z.roundedSubscribeButton]: r
              }),
              style: eg,
              look: d.ButtonLooks.OUTLINED,
              color: d.ButtonColors.WHITE,
              buttonShineClassName: r ? z.buttonShine : void 0
            }) : (0, a.jsx)(K.default, {
              forceInverted: !0,
              showIcon: !1,
              subscriptionTier: V.PremiumSubscriptionSKUs.TIER_0,
              style: eg,
              className: n({
                [z.marginTopForButtons]: !r,
                [z.roundedSubscribeButton]: r
              }),
              buttonShineClassName: r ? z.buttonShine : void 0
            }),
            tier2CTAButton: eS === V.PremiumSubscriptionSKUs.TIER_0 ? (0, a.jsx)(K.default, {
              forceInverted: !0,
              showIcon: !1,
              subscriptionTier: V.PremiumSubscriptionSKUs.TIER_2,
              style: eg,
              className: n({
                [z.marginTopForButtons]: !r,
                [z.roundedSubscribeButton]: r
              }),
              look: d.ButtonLooks.OUTLINED,
              color: d.ButtonColors.WHITE,
              buttonShineClassName: r ? z.buttonShine : void 0
            }) : (0, a.jsx)(K.default, {
              forceInverted: !0,
              style: eg,
              showIcon: !1,
              subscriptionTier: V.PremiumSubscriptionSKUs.TIER_2,
              className: n({
                [z.marginTopForButtons]: !r,
                [z.roundedSubscribeButton]: r
              }),
              isEligibleForBogoPromotion: em,
              buttonShineClassName: r ? z.buttonShine : void 0
            })
          })
        })]
      }), (0, a.jsx)(q, {
        isVisible: er === V.PremiumTypes.TIER_2,
        isMarketingPageOptimizationEnabled: r,
        children: (0, a.jsx)(et, {
          isFullscreen: s,
          inOfferExperience: eR,
          isInNitroTabHoldout: eA,
          selectedPremiumType: er,
          isMarketingPageOptimizationEnabled: r,
          setIsAllPerksVisible: eI
        })
      }), (0, a.jsx)(q, {
        isVisible: er === V.PremiumTypes.TIER_2,
        isMarketingPageOptimizationEnabled: r,
        children: (er === V.PremiumTypes.TIER_2 || null == er) && (0, a.jsx)($, {
          isFullscreen: s,
          selectedPremiumType: er
        })
      }), r && (0, a.jsx)(q, {
        isVisible: er === V.PremiumTypes.TIER_0,
        isMarketingPageOptimizationEnabled: r,
        children: er === V.PremiumTypes.TIER_0 && (0, a.jsx)($, {
          isFullscreen: s,
          selectedPremiumType: er
        })
      }), (0, a.jsxs)("div", {
        className: z.planComparisonTableContainer,
        children: [(0, a.jsx)(H.default, {
          className: z.planComparisonTable,
          hideCTAs: !0,
          selectedPlanTier: er
        }), s ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(S.default, {
            src: Z,
            className: z.tableLeftSideDecoration,
            width: 197,
            height: 486,
            zoomable: !1
          }), (0, a.jsx)(S.default, {
            src: J,
            className: z.tableRightSideDecoration,
            width: 241,
            height: 552,
            zoomable: !1
          })]
        }) : null]
      }), (0, a.jsx)("div", {
        className: s ? z.footerSpacingFullscreen : z.footerSpacing
      }), (0, a.jsx)(y.default, {
        isVisible: X && es,
        isFullscreen: s,
        subscriptionTier: null != eu ? eu : m.default.getSkuIdForPremiumType(er)
      }), (0, a.jsx)(o.VisibilitySensor, {
        onChange: e => {
          e && !B && (R.default.track(Y.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: ep
          }), w(!0))
        },
        children: (0, a.jsx)("div", {
          className: z.bottomOfPageVisibilitySensor
        })
      }), (0, a.jsx)(S.default, {
        src: Q,
        className: z.bottomIllustration,
        width: 112,
        height: 85,
        zoomable: !1
      })]
    });
  return s ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(d.AdvancedScrollerAuto, {
      className: z.scroller,
      ref: E,
      children: eC
    }), (er === V.PremiumTypes.TIER_2 || null == er) && (0, a.jsx)(W.default, {
      previousComponent: F.NitroLandingPages.MARKETING,
      isAllPerksVisible: eE,
      setIsAllPerksVisible: eI
    })]
  }) : eC
}