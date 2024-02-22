"use strict";
s.r(t), s.d(t, {
  default: function() {
    return ea
  }
}), s("222007");
var a = s("37983"),
  i = s("884691"),
  n = s("414456"),
  r = s.n(n),
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
  p = s("706922"),
  N = s("527715"),
  g = s("300962"),
  C = s("959905"),
  P = s("154889"),
  O = s("917247"),
  M = s("460680"),
  h = s("411205"),
  L = s("934570"),
  x = s("641078"),
  v = s("400307"),
  D = s("521322"),
  b = s("159646"),
  U = s("379521"),
  j = s("958966"),
  G = s("149102"),
  k = s("830648"),
  B = s("627474"),
  y = s("904871"),
  H = s("360776"),
  K = s("525505"),
  F = s("881155"),
  W = s("598739"),
  w = s("326881"),
  V = s("228967"),
  Y = s("646718"),
  z = s("49111"),
  Q = s("660261"),
  X = s("679324"),
  Z = s("575066"),
  J = s("905498"),
  q = s("452637");
let $ = e => {
    let {
      isVisible: t,
      isMarketingPageOptimizationEnabled: s,
      children: i
    } = e, n = (0, l.useStateFromStores)([E.default], () => E.default.useReducedMotion);
    return !s || n ? (0, a.jsx)(a.Fragment, {
      children: i
    }) : (0, a.jsx)(D.AnimatedWrapper, {
      isVisible: t,
      children: i
    })
  },
  ee = e => {
    let {
      isInAllPerksExperiment: t,
      isFullscreen: s,
      selectedPremiumType: i
    } = e, n = t && s && null == i;
    return n ? null : (0, a.jsx)(k.default, {
      selectedPremiumType: i,
      className: s ? Q.perkCardsContainerSpacingFullscreen : Q.perkCardsContainerSpacingSettings
    })
  },
  et = e => {
    let {
      isFullscreen: t,
      inOfferExperience: s,
      isMarketingPageOptimizationEnabled: i
    } = e;
    return t || s || i ? i ? (0, a.jsx)("img", {
      alt: "starry sky background header splash",
      className: Q.dynamicImage,
      src: Z
    }) : (0, a.jsx)(U.default, {
      lifted: !t && s
    }) : null
  },
  es = e => {
    let {
      isFullscreen: t,
      isInNitroTabHoldout: s,
      selectedPremiumType: i,
      isMarketingPageOptimizationEnabled: n,
      isInAllPerksExperiment: l,
      inOfferExperience: o,
      setIsAllPerksVisible: u
    } = e;
    return !t && !n || s || n && i === Y.PremiumTypes.TIER_0 ? null : (0, a.jsxs)("div", {
      className: r({
        [Q.whatsNewSectionBackground]: !n,
        [Q.whatsNewSection]: n
      }),
      children: [(0, a.jsx)(B.default, {
        headerClassname: n ? Q.stackedHeader : void 0,
        variant: W.PerksDiscoverabilityVariants.WHATS_NEW,
        isFullScreen: t
      }), (0, a.jsx)(B.default, {
        headerClassname: n ? Q.stackedHeader : void 0,
        isFullScreen: t,
        showAllPerksButton: l && !n ? (0, a.jsx)(V.default, {
          setIsAllPerksVisible: u,
          previousComponent: W.NitroLandingPages.MARKETING
        }) : void 0
      }), o && !n ? (0, a.jsx)(y.default, {
        className: Q.pdSparklesTop,
        variant: y.SparkleVariants.TOP
      }) : null, o && !n ? (0, a.jsx)(y.default, {
        className: Q.pdSparklesBottom,
        variant: y.SparkleVariants.BOTTOM
      }) : null]
    })
  };
var ea = e => {
  var t;
  let {
    isFullscreen: s
  } = e, n = (0, N.useMarketingOptimizationExperiment)({
    autoTrackExposure: !0
  }), E = i.useRef(null), [D, U] = i.useState(n ? Y.PremiumTypes.TIER_2 : void 0), [k, B] = i.useState(!1), [y, V] = i.useState(!1), [Z, ea] = i.useState(!1), ei = !k && !y || n, [en, er] = i.useState(!1), el = (0, l.useStateFromStores)([f.default], () => f.default.getPremiumTypeSubscription()), {
    enabled: eo
  } = (0, p.default)(), eu = null != el ? (0, m.getPremiumPlanItem)(el) : null, ed = null != eu ? m.default.getSkuIdForPlan(eu.planId) : null, ec = null !== ed && ed !== Y.PremiumSubscriptionSKUs.TIER_2 ? Y.PremiumSubscriptionSKUs.TIER_2 : null, e_ = (0, C.useLocalizedPromoQuery)(), eE = (0, u.isThemeLight)((0, _.default)()), eI = null != e_, [eT, ef] = i.useState(!1), eS = (0, P.usePremiumDiscountOffer)(), eR = (0, O.usePremiumTrialOffer)(), em = null == eR ? void 0 : null === (t = eR.subscription_trial) || void 0 === t ? void 0 : t.sku_id, eA = (0, A.useIsInPremiumOfferExperience)(), ep = (0, x.useIsEligibleForBogoPromotion)(), {
    enabled: eN
  } = (0, g.default)(), {
    analyticsLocations: eg
  } = (0, T.default)(I.default.PREMIUM_MARKETING), eC = "PremiumMarketingHome";
  (0, c.useTriggerDebuggingAA)({
    location: eC + " auto on",
    autoTrackExposure: !0
  }), (0, c.useTriggerDebuggingAA)({
    location: eC + " auto off",
    autoTrackExposure: !1
  }), i.useEffect(() => {
    er(!0)
  }, []);
  let eP = n ? {
      borderRadius: "24px"
    } : void 0,
    eO = (0, a.jsxs)("div", {
      className: r(Q.container, {
        [Q.settingsContainer]: !s && !n
      }),
      "data-cy": "tier-0-marketing-page",
      children: [(0, a.jsx)(b.default, {
        premiumSubscription: el,
        className: r(s ? Q.fullscreenExistingSubscriberSpacing : Q.existingSubscriberSpacing, {
          [Q.zIndex1]: eA
        }),
        isFullscreen: s,
        textColor: n && eE ? "text-normal" : void 0
      }), (0, a.jsx)(et, {
        isFullscreen: s,
        inOfferExperience: eA,
        isMarketingPageOptimizationEnabled: n
      }), !s && eI ? (0, a.jsx)(L.default, {
        localizedPricingPromo: e_,
        smallGap: !0
      }) : (0, a.jsx)(o.VisibilitySensor, {
        onChange: e => B(e),
        threshold: 0,
        active: !0,
        children: (0, a.jsx)(j.default, {
          subscriptionTier: ec,
          isFullscreen: s || eA,
          className: r({
            [Q.fullscreenHero]: s && !n,
            [Q.fullscreenHeroMarketingOptimization]: n,
            [Q.settingsHeroNoBackground]: !s && eA,
            [Q.trialMarketingMargin]: eA && !n,
            [Q.settingsHeroBogoHeight]: !s && ep,
            [Q.settingsHeroBogoMarginFullscreen]: s && ep,
            [Q.noTopPaddingOverride]: null != el
          }),
          hideSparkles: n,
          hideSubscribeAndGiftButton: n
        })
      }), n && null != D && (0, a.jsx)(G.default, {
        setSelectedPremiumType: U,
        selectedPremiumType: D
      }), (0, a.jsxs)("div", {
        className: s ? n ? Q.premiumStackedTierCardsContainerFullscreen : Q.premiumTierCardsContainerFullscreen : Q.premiumTierCardsContainerSettings,
        children: [(0, a.jsx)(M.default, {
          isFullscreen: s
        }), s && eI && (0, a.jsx)(h.default, {
          localizedPricingPromo: e_
        }), (0, a.jsx)(o.VisibilitySensor, {
          onChange: e => V(e),
          threshold: .1,
          active: !0,
          children: (0, a.jsx)(v.default, {
            showWumpus: !n,
            variant: n ? v.PremiumTierCardsVariant.STACKED : v.PremiumTierCardsVariant.DEFAULT,
            isFullScreen: s,
            selectedPremiumType: n ? D : void 0,
            tier0CTAButton: em === Y.PremiumSubscriptionSKUs.TIER_2 || ep || null != eS ? (0, a.jsx)(F.default, {
              forceInverted: !0,
              showIcon: !1,
              subscriptionTier: Y.PremiumSubscriptionSKUs.TIER_0,
              className: r({
                [Q.marginTopForButtons]: !n,
                [Q.roundedSubscribeButton]: n
              }),
              style: eP,
              look: d.ButtonLooks.OUTLINED,
              color: d.ButtonColors.WHITE,
              buttonShineClassName: n ? Q.buttonShine : void 0
            }) : (0, a.jsx)(F.default, {
              forceInverted: !0,
              showIcon: !1,
              subscriptionTier: Y.PremiumSubscriptionSKUs.TIER_0,
              style: eP,
              className: r({
                [Q.marginTopForButtons]: !n,
                [Q.roundedSubscribeButton]: n
              }),
              buttonShineClassName: n ? Q.buttonShine : void 0
            }),
            tier2CTAButton: em === Y.PremiumSubscriptionSKUs.TIER_0 ? (0, a.jsx)(F.default, {
              forceInverted: !0,
              showIcon: !1,
              subscriptionTier: Y.PremiumSubscriptionSKUs.TIER_2,
              style: eP,
              className: r({
                [Q.marginTopForButtons]: !n,
                [Q.roundedSubscribeButton]: n
              }),
              look: d.ButtonLooks.OUTLINED,
              color: d.ButtonColors.WHITE,
              buttonShineClassName: n ? Q.buttonShine : void 0
            }) : (0, a.jsx)(F.default, {
              forceInverted: !0,
              style: eP,
              showIcon: !1,
              subscriptionTier: Y.PremiumSubscriptionSKUs.TIER_2,
              className: r({
                [Q.marginTopForButtons]: !n,
                [Q.roundedSubscribeButton]: n
              }),
              isEligibleForBogoPromotion: ep,
              buttonShineClassName: n ? Q.buttonShine : void 0
            })
          })
        })]
      }), (0, a.jsx)($, {
        isVisible: D === Y.PremiumTypes.TIER_2,
        isMarketingPageOptimizationEnabled: n,
        children: (0, a.jsx)(es, {
          isFullscreen: s,
          inOfferExperience: eA,
          isInAllPerksExperiment: eo,
          isInNitroTabHoldout: eN,
          selectedPremiumType: D,
          isMarketingPageOptimizationEnabled: n,
          setIsAllPerksVisible: ef
        })
      }), (0, a.jsx)($, {
        isVisible: D === Y.PremiumTypes.TIER_2,
        isMarketingPageOptimizationEnabled: n,
        children: (D === Y.PremiumTypes.TIER_2 || null == D) && (0, a.jsx)(ee, {
          isInAllPerksExperiment: eo,
          isFullscreen: s,
          selectedPremiumType: D
        })
      }), n && (0, a.jsx)($, {
        isVisible: D === Y.PremiumTypes.TIER_0,
        isMarketingPageOptimizationEnabled: n,
        children: D === Y.PremiumTypes.TIER_0 && (0, a.jsx)(ee, {
          isInAllPerksExperiment: eo,
          isFullscreen: s,
          selectedPremiumType: D
        })
      }), (0, a.jsxs)("div", {
        className: Q.planComparisonTableContainer,
        children: [(0, a.jsx)(K.default, {
          className: Q.planComparisonTable,
          hideCTAs: !0,
          selectedPlanTier: D
        }), s ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(S.default, {
            src: J,
            className: Q.tableLeftSideDecoration,
            width: 197,
            height: 486,
            zoomable: !1
          }), (0, a.jsx)(S.default, {
            src: q,
            className: Q.tableRightSideDecoration,
            width: 241,
            height: 552,
            zoomable: !1
          })]
        }) : null]
      }), (0, a.jsx)("div", {
        className: s ? Q.footerSpacingFullscreen : Q.footerSpacing
      }), (0, a.jsx)(H.default, {
        isVisible: ei && en,
        isFullscreen: s,
        subscriptionTier: null != ec ? ec : m.default.getSkuIdForPremiumType(D)
      }), (0, a.jsx)(o.VisibilitySensor, {
        onChange: e => {
          e && !Z && (R.default.track(z.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: eg
          }), ea(!0))
        },
        children: (0, a.jsx)("div", {
          className: Q.bottomOfPageVisibilitySensor
        })
      }), (0, a.jsx)(S.default, {
        src: X,
        className: Q.bottomIllustration,
        width: 112,
        height: 85,
        zoomable: !1
      })]
    });
  return s ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(d.AdvancedScrollerAuto, {
      className: Q.scroller,
      ref: E,
      children: eO
    }), eo ? (0, a.jsx)(w.default, {
      previousComponent: W.NitroLandingPages.MARKETING,
      isAllPerksVisible: eT,
      setIsAllPerksVisible: ef
    }) : null]
  }) : eO
}