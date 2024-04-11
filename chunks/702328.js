"use strict";
s.r(t), s("47120");
var a = s("735250"),
  i = s("470079"),
  r = s("803997"),
  l = s.n(r),
  n = s("442837"),
  o = s("622535"),
  u = s("780384"),
  d = s("481060"),
  c = s("634894"),
  _ = s("410030"),
  E = s("607070"),
  C = s("100527"),
  f = s("906732"),
  T = s("78839"),
  I = s("332475"),
  R = s("626135"),
  S = s("74538"),
  p = s("140465"),
  m = s("846363"),
  A = s("91802"),
  g = s("104494"),
  N = s("639119"),
  O = s("419854"),
  P = s("568126"),
  h = s("605289"),
  M = s("248042"),
  x = s("823188"),
  L = s("65536"),
  v = s("135785"),
  j = s("498765"),
  D = s("635921"),
  b = s("803687"),
  U = s("177839"),
  y = s("794484"),
  B = s("392521"),
  G = s("349803"),
  k = s("179984"),
  H = s("409100"),
  F = s("391110"),
  w = s("71363"),
  W = s("781800"),
  K = s("474936"),
  V = s("981631"),
  Y = s("336023"),
  z = s("865215"),
  Z = s("781922"),
  X = s("735035"),
  Q = s("786362");
let J = e => {
    let {
      isVisible: t,
      isMarketingPageOptimizationEnabled: s,
      children: i
    } = e, r = (0, n.useStateFromStores)([E.default], () => E.default.useReducedMotion);
    return !s || r ? (0, a.jsx)(a.Fragment, {
      children: i
    }) : (0, a.jsx)(L.AnimatedWrapper, {
      isVisible: t,
      children: i
    })
  },
  q = e => {
    let {
      isFullscreen: t,
      selectedPremiumType: s
    } = e;
    return t && null == s || s === K.PremiumTypes.TIER_2 && t ? null : (0, a.jsx)(U.default, {
      selectedPremiumType: s,
      className: t ? Y.perkCardsContainerSpacingFullscreen : Y.perkCardsContainerSpacingSettings
    })
  },
  $ = e => {
    let {
      isFullscreen: t,
      inOfferExperience: s,
      isMarketingPageOptimizationEnabled: i
    } = e;
    return t || s || i ? i ? (0, a.jsx)("img", {
      alt: "starry sky background header splash",
      className: Y.dynamicImage,
      src: Z
    }) : (0, a.jsx)(j.default, {
      lifted: !t && s
    }) : null
  },
  ee = e => {
    let {
      isFullscreen: t,
      selectedPremiumType: s,
      isMarketingPageOptimizationEnabled: i,
      inOfferExperience: r,
      setIsAllPerksVisible: n
    } = e;
    return (t || i) && (!i || s !== K.PremiumTypes.TIER_0) ? (0, a.jsxs)("div", {
      className: l()({
        [Y.whatsNewSectionBackground]: !i,
        [Y.whatsNewSection]: i
      }),
      children: [(0, a.jsx)(y.default, {
        headerClassname: i ? Y.stackedHeader : void 0,
        variant: F.PerksDiscoverabilityCardSection.WHATS_NEW,
        isFullScreen: t
      }), (0, a.jsx)(y.default, {
        headerClassname: i ? Y.stackedHeader : void 0,
        isFullScreen: t,
        showAllPerksButton: t ? (0, a.jsx)(W.default, {
          setIsAllPerksVisible: n,
          previousComponent: F.NitroLandingPages.MARKETING
        }) : void 0
      }), r && !i ? (0, a.jsx)(B.default, {
        className: Y.pdSparklesTop,
        variant: B.SparkleVariants.TOP
      }) : null, r && !i ? (0, a.jsx)(B.default, {
        className: Y.pdSparklesBottom,
        variant: B.SparkleVariants.BOTTOM
      }) : null]
    }) : null
  };
t.default = e => {
  var t;
  let {
    isFullscreen: s,
    entrypoint: r
  } = e, E = (0, m.useMarketingOptimizationExperiment)({
    autoTrackExposure: !0
  }), L = i.useRef(null), [j, U] = i.useState(!1), [y, B] = i.useState(!1), [W, Z] = i.useState(!1), et = !j && !y || E, [es, ea] = i.useState(!1), ei = (0, n.useStateFromStores)([T.default], () => T.default.getPremiumTypeSubscription()), [er, el] = i.useState(E ? K.PremiumTypes.TIER_2 : void 0), en = null != ei ? (0, S.getPremiumPlanItem)(ei) : null, eo = null != en ? S.default.getSkuIdForPlan(en.planId) : null, eu = null !== eo && eo !== K.PremiumSubscriptionSKUs.TIER_2 ? K.PremiumSubscriptionSKUs.TIER_2 : null, ed = (0, A.useLocalizedPromoQuery)(), ec = (0, u.isThemeLight)((0, _.default)()), e_ = null != ed, [eE, eC] = i.useState(!1), ef = (0, g.usePremiumDiscountOffer)(), eT = (0, N.usePremiumTrialOffer)(), eI = null == eT ? void 0 : null === (t = eT.subscription_trial) || void 0 === t ? void 0 : t.sku_id, eR = (0, p.useIsInPremiumOfferExperience)(), eS = (0, M.useIsEligibleForBogoPromotion)(), {
    analyticsLocations: ep
  } = (0, f.default)(C.default.PREMIUM_MARKETING), em = "PremiumMarketingHome";
  (0, c.useTriggerDebuggingAA)({
    location: em + " auto on",
    autoTrackExposure: !0
  }), (0, c.useTriggerDebuggingAA)({
    location: em + " auto off",
    autoTrackExposure: !1
  }), i.useEffect(() => {
    ea(!0)
  }, []), i.useEffect(() => {
    el(E ? K.PremiumTypes.TIER_2 : void 0)
  }, [E]);
  let eA = E ? {
      borderRadius: "24px"
    } : void 0,
    eg = (0, a.jsxs)("div", {
      className: l()(Y.container, {
        [Y.settingsContainer]: !s && !E
      }),
      "data-cy": "tier-0-marketing-page",
      children: [(0, a.jsx)(v.default, {
        premiumSubscription: ei,
        className: l()(s ? Y.fullscreenExistingSubscriberSpacing : Y.existingSubscriberSpacing, {
          [Y.zIndex1]: eR
        }),
        isFullscreen: s,
        textColor: E && ec ? "text-normal" : void 0
      }), (0, a.jsx)($, {
        isFullscreen: s,
        inOfferExperience: eR,
        isMarketingPageOptimizationEnabled: E
      }), !s && e_ ? (0, a.jsx)(h.default, {
        localizedPricingPromo: ed,
        smallGap: !0
      }) : (0, a.jsx)(o.VisibilitySensor, {
        onChange: e => U(e),
        threshold: 0,
        active: !0,
        children: (0, a.jsx)(D.default, {
          subscriptionTier: eu,
          isFullscreen: s || eR,
          className: l()({
            [Y.fullscreenHero]: s && !E,
            [Y.fullscreenHeroMarketingOptimization]: E,
            [Y.settingsHeroNoBackground]: !s && eR,
            [Y.trialMarketingMargin]: eR && !E,
            [Y.settingsHeroBogoHeight]: !s && eS,
            [Y.settingsHeroBogoMarginFullscreen]: s && eS,
            [Y.noTopPaddingOverride]: null != ei
          }),
          hideSparkles: E,
          hideSubscribeAndGiftButton: E,
          entrypoint: r
        })
      }), E && null != er && (0, a.jsx)(b.default, {
        setSelectedPremiumType: el,
        selectedPremiumType: er
      }), (0, a.jsxs)("div", {
        className: l()({
          [Y.premiumStackedTierCardsContainerFullscreen]: s && E,
          [Y.premiumTierCardsContainerSettings]: !s && !E,
          [Y.premiumStackedTierCardsContainerSettings]: !s && E,
          [Y.premiumTierCardsContainerFullscreen]: s && !E
        }),
        children: [(0, a.jsx)(O.default, {
          isFullscreen: s
        }), s && e_ && (0, a.jsx)(P.default, {
          localizedPricingPromo: ed
        }), (0, a.jsx)(o.VisibilitySensor, {
          onChange: e => B(e),
          threshold: .1,
          active: !0,
          children: (0, a.jsx)(x.default, {
            showWumpus: !E,
            variant: E ? x.PremiumTierCardsVariant.STACKED : x.PremiumTierCardsVariant.DEFAULT,
            isFullScreen: s,
            selectedPremiumType: E ? er : void 0,
            tier0CTAButton: eI === K.PremiumSubscriptionSKUs.TIER_2 || eS || null != ef ? (0, a.jsx)(H.default, {
              forceInverted: !0,
              showIcon: !1,
              subscriptionTier: K.PremiumSubscriptionSKUs.TIER_0,
              className: l()({
                [Y.marginTopForButtons]: !E,
                [Y.roundedSubscribeButton]: E
              }),
              style: eA,
              look: d.ButtonLooks.OUTLINED,
              color: d.ButtonColors.WHITE,
              buttonShineClassName: E ? Y.buttonShine : void 0
            }) : (0, a.jsx)(H.default, {
              forceInverted: !0,
              showIcon: !1,
              subscriptionTier: K.PremiumSubscriptionSKUs.TIER_0,
              style: eA,
              className: l()({
                [Y.marginTopForButtons]: !E,
                [Y.roundedSubscribeButton]: E
              }),
              buttonShineClassName: E ? Y.buttonShine : void 0
            }),
            tier2CTAButton: eI === K.PremiumSubscriptionSKUs.TIER_0 ? (0, a.jsx)(H.default, {
              forceInverted: !0,
              showIcon: !1,
              subscriptionTier: K.PremiumSubscriptionSKUs.TIER_2,
              style: eA,
              className: l()({
                [Y.marginTopForButtons]: !E,
                [Y.roundedSubscribeButton]: E
              }),
              look: d.ButtonLooks.OUTLINED,
              color: d.ButtonColors.WHITE,
              buttonShineClassName: E ? Y.buttonShine : void 0
            }) : (0, a.jsx)(H.default, {
              forceInverted: !0,
              style: eA,
              showIcon: !1,
              subscriptionTier: K.PremiumSubscriptionSKUs.TIER_2,
              className: l()({
                [Y.marginTopForButtons]: !E,
                [Y.roundedSubscribeButton]: E
              }),
              isEligibleForBogoPromotion: eS,
              buttonShineClassName: E ? Y.buttonShine : void 0
            })
          })
        })]
      }), (0, a.jsx)(J, {
        isVisible: er === K.PremiumTypes.TIER_2,
        isMarketingPageOptimizationEnabled: E,
        children: (0, a.jsx)(ee, {
          isFullscreen: s,
          inOfferExperience: eR,
          selectedPremiumType: er,
          isMarketingPageOptimizationEnabled: E,
          setIsAllPerksVisible: eC
        })
      }), (0, a.jsx)(J, {
        isVisible: er === K.PremiumTypes.TIER_2,
        isMarketingPageOptimizationEnabled: E,
        children: (er === K.PremiumTypes.TIER_2 || null == er) && (0, a.jsx)(q, {
          isFullscreen: s,
          selectedPremiumType: er
        })
      }), E && (0, a.jsx)(J, {
        isVisible: er === K.PremiumTypes.TIER_0,
        isMarketingPageOptimizationEnabled: E,
        children: er === K.PremiumTypes.TIER_0 && (0, a.jsx)(q, {
          isFullscreen: s,
          selectedPremiumType: er
        })
      }), (0, a.jsxs)("div", {
        className: Y.planComparisonTableContainer,
        children: [(0, a.jsx)(k.default, {
          className: Y.planComparisonTable,
          hideCTAs: !0,
          selectedPlanTier: er
        }), s ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(I.default, {
            src: X,
            className: Y.tableLeftSideDecoration,
            width: 197,
            height: 486,
            zoomable: !1
          }), (0, a.jsx)(I.default, {
            src: Q,
            className: Y.tableRightSideDecoration,
            width: 241,
            height: 552,
            zoomable: !1
          })]
        }) : null]
      }), (0, a.jsx)("div", {
        className: s ? Y.footerSpacingFullscreen : Y.footerSpacing
      }), (0, a.jsx)(G.default, {
        isVisible: et && es,
        isFullscreen: s,
        subscriptionTier: null != eu ? eu : S.default.getSkuIdForPremiumType(er)
      }), (0, a.jsx)(o.VisibilitySensor, {
        onChange: e => {
          e && !W && (R.default.track(V.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: ep
          }), Z(!0))
        },
        children: (0, a.jsx)("div", {
          className: Y.bottomOfPageVisibilitySensor
        })
      }), (0, a.jsx)(I.default, {
        src: z,
        className: Y.bottomIllustration,
        width: 112,
        height: 85,
        zoomable: !1
      })]
    });
  return s ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(d.AdvancedScrollerAuto, {
      className: Y.scroller,
      ref: L,
      children: eg
    }), (er === K.PremiumTypes.TIER_2 || null == er) && (0, a.jsx)(w.default, {
      previousComponent: F.NitroLandingPages.MARKETING,
      isAllPerksVisible: eE,
      setIsAllPerksVisible: eC
    })]
  }) : eg
}