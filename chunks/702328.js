"use strict";
s.r(t), s("47120");
var a = s("735250"),
  i = s("470079"),
  r = s("120356"),
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
  O = s("764081"),
  P = s("419854"),
  h = s("568126"),
  M = s("605289"),
  x = s("248042"),
  L = s("823188"),
  v = s("65536"),
  j = s("135785"),
  D = s("498765"),
  b = s("635921"),
  U = s("803687"),
  y = s("177839"),
  B = s("794484"),
  G = s("392521"),
  k = s("349803"),
  H = s("179984"),
  F = s("409100"),
  w = s("391110"),
  W = s("71363"),
  K = s("781800"),
  V = s("474936"),
  Y = s("981631"),
  z = s("336023"),
  Z = s("865215"),
  X = s("781922"),
  Q = s("735035"),
  J = s("786362");
let q = e => {
    let {
      isVisible: t,
      isMarketingPageOptimizationEnabled: s,
      children: i
    } = e, r = (0, n.useStateFromStores)([E.default], () => E.default.useReducedMotion);
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
    } = e;
    return t && null == s || s === V.PremiumTypes.TIER_2 && t ? null : (0, a.jsx)(y.default, {
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
    }) : (0, a.jsx)(D.default, {
      lifted: !t && s
    }) : null
  },
  et = e => {
    let {
      isFullscreen: t,
      selectedPremiumType: s,
      isMarketingPageOptimizationEnabled: i,
      inOfferExperience: r,
      setIsAllPerksVisible: n
    } = e;
    return (t || i) && (!i || s !== V.PremiumTypes.TIER_0) ? (0, a.jsxs)("div", {
      className: l()({
        [z.whatsNewSectionBackground]: !i,
        [z.whatsNewSection]: i
      }),
      children: [(0, a.jsx)(B.default, {
        headerClassname: i ? z.stackedHeader : void 0,
        variant: w.PerksDiscoverabilityCardSection.WHATS_NEW,
        isFullScreen: t
      }), (0, a.jsx)(B.default, {
        headerClassname: i ? z.stackedHeader : void 0,
        isFullScreen: t,
        showAllPerksButton: t ? (0, a.jsx)(K.default, {
          setIsAllPerksVisible: n,
          previousComponent: w.NitroLandingPages.MARKETING
        }) : void 0
      }), r && !i ? (0, a.jsx)(G.default, {
        className: z.pdSparklesTop,
        variant: G.SparkleVariants.TOP
      }) : null, r && !i ? (0, a.jsx)(G.default, {
        className: z.pdSparklesBottom,
        variant: G.SparkleVariants.BOTTOM
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
  }), v = i.useRef(null), [D, y] = i.useState(!1), [B, G] = i.useState(!1), [K, X] = i.useState(!1), es = !D && !B || E, [ea, ei] = i.useState(!1), er = (0, n.useStateFromStores)([T.default], () => T.default.getPremiumTypeSubscription()), [el, en] = i.useState(E ? V.PremiumTypes.TIER_2 : void 0), eo = null != er ? (0, S.getPremiumPlanItem)(er) : null, eu = null != eo ? S.default.getSkuIdForPlan(eo.planId) : null, ed = null !== eu && eu !== V.PremiumSubscriptionSKUs.TIER_2 ? V.PremiumSubscriptionSKUs.TIER_2 : null, ec = (0, A.useLocalizedPromoQuery)(), e_ = (0, u.isThemeLight)((0, _.default)()), eE = null != ec, [eC, ef] = i.useState(!1), eT = (0, g.usePremiumDiscountOffer)(), eI = (0, N.usePremiumTrialOffer)(), eR = null == eI ? void 0 : null === (t = eI.subscription_trial) || void 0 === t ? void 0 : t.sku_id, eS = (0, p.useIsInPremiumOfferExperience)(), ep = (0, x.useIsEligibleForBogoPromotion)(), {
    analyticsLocations: em
  } = (0, f.default)(C.default.PREMIUM_MARKETING), eA = "PremiumMarketingHome";
  (0, c.useTriggerDebuggingAA)({
    location: eA + " auto on",
    autoTrackExposure: !0
  }), (0, c.useTriggerDebuggingAA)({
    location: eA + " auto off",
    autoTrackExposure: !1
  }), i.useEffect(() => {
    ei(!0)
  }, []), i.useEffect(() => {
    en(E ? V.PremiumTypes.TIER_2 : void 0)
  }, [E]);
  let eg = E ? {
      borderRadius: "24px"
    } : void 0,
    eN = (0, a.jsxs)("div", {
      className: l()(z.container, {
        [z.settingsContainer]: !s && !E
      }),
      "data-cy": "tier-0-marketing-page",
      children: [(0, a.jsx)(j.default, {
        premiumSubscription: er,
        className: l()(s ? z.fullscreenExistingSubscriberSpacing : z.existingSubscriberSpacing, {
          [z.zIndex1]: eS
        }),
        isFullscreen: s,
        textColor: E && e_ ? "text-normal" : void 0
      }), (0, a.jsx)(ee, {
        isFullscreen: s,
        inOfferExperience: eS,
        isMarketingPageOptimizationEnabled: E
      }), !s && eE ? (0, a.jsx)(M.default, {
        localizedPricingPromo: ec,
        smallGap: !0
      }) : (0, a.jsx)(o.VisibilitySensor, {
        onChange: e => y(e),
        threshold: 0,
        active: !0,
        children: (0, a.jsx)(b.default, {
          subscriptionTier: ed,
          isFullscreen: s || eS,
          className: l()({
            [z.fullscreenHero]: s && !E,
            [z.fullscreenHeroMarketingOptimization]: E,
            [z.settingsHeroNoBackground]: !s && eS,
            [z.trialMarketingMargin]: eS && !E,
            [z.settingsHeroBogoHeight]: !s && ep,
            [z.settingsHeroBogoMarginFullscreen]: s && ep,
            [z.noTopPaddingOverride]: null != er
          }),
          hideSparkles: E,
          hideSubscribeAndGiftButton: E,
          entrypoint: r
        })
      }), E && null != el && (0, a.jsx)(U.default, {
        setSelectedPremiumType: en,
        selectedPremiumType: el
      }), (0, a.jsxs)("div", {
        className: l()({
          [z.premiumStackedTierCardsContainerFullscreen]: s && E,
          [z.premiumTierCardsContainerSettings]: !s && !E,
          [z.premiumStackedTierCardsContainerSettings]: !s && E,
          [z.premiumTierCardsContainerFullscreen]: s && !E
        }),
        children: [(0, a.jsx)(P.default, {
          isFullscreen: s
        }), (0, a.jsx)(O.default, {
          isFullscreen: s
        }), s && eE && (0, a.jsx)(h.default, {
          localizedPricingPromo: ec
        }), (0, a.jsx)(o.VisibilitySensor, {
          onChange: e => G(e),
          threshold: .1,
          active: !0,
          children: (0, a.jsx)(L.default, {
            showWumpus: !E,
            variant: E ? L.PremiumTierCardsVariant.STACKED : L.PremiumTierCardsVariant.DEFAULT,
            isFullScreen: s,
            selectedPremiumType: E ? el : void 0,
            tier0CTAButton: eR === V.PremiumSubscriptionSKUs.TIER_2 || ep || null != eT ? (0, a.jsx)(F.default, {
              forceInverted: !0,
              showIcon: !1,
              subscriptionTier: V.PremiumSubscriptionSKUs.TIER_0,
              className: l()({
                [z.marginTopForButtons]: !E,
                [z.roundedSubscribeButton]: E
              }),
              style: eg,
              look: d.ButtonLooks.OUTLINED,
              color: d.ButtonColors.WHITE,
              buttonShineClassName: E ? z.buttonShine : void 0
            }) : (0, a.jsx)(F.default, {
              forceInverted: !0,
              showIcon: !1,
              subscriptionTier: V.PremiumSubscriptionSKUs.TIER_0,
              style: eg,
              className: l()({
                [z.marginTopForButtons]: !E,
                [z.roundedSubscribeButton]: E
              }),
              buttonShineClassName: E ? z.buttonShine : void 0
            }),
            tier2CTAButton: eR === V.PremiumSubscriptionSKUs.TIER_0 ? (0, a.jsx)(F.default, {
              forceInverted: !0,
              showIcon: !1,
              subscriptionTier: V.PremiumSubscriptionSKUs.TIER_2,
              style: eg,
              className: l()({
                [z.marginTopForButtons]: !E,
                [z.roundedSubscribeButton]: E
              }),
              look: d.ButtonLooks.OUTLINED,
              color: d.ButtonColors.WHITE,
              buttonShineClassName: E ? z.buttonShine : void 0
            }) : (0, a.jsx)(F.default, {
              forceInverted: !0,
              style: eg,
              showIcon: !1,
              subscriptionTier: V.PremiumSubscriptionSKUs.TIER_2,
              className: l()({
                [z.marginTopForButtons]: !E,
                [z.roundedSubscribeButton]: E
              }),
              isEligibleForBogoPromotion: ep,
              buttonShineClassName: E ? z.buttonShine : void 0
            })
          })
        })]
      }), (0, a.jsx)(q, {
        isVisible: el === V.PremiumTypes.TIER_2,
        isMarketingPageOptimizationEnabled: E,
        children: (0, a.jsx)(et, {
          isFullscreen: s,
          inOfferExperience: eS,
          selectedPremiumType: el,
          isMarketingPageOptimizationEnabled: E,
          setIsAllPerksVisible: ef
        })
      }), (0, a.jsx)(q, {
        isVisible: el === V.PremiumTypes.TIER_2,
        isMarketingPageOptimizationEnabled: E,
        children: (el === V.PremiumTypes.TIER_2 || null == el) && (0, a.jsx)($, {
          isFullscreen: s,
          selectedPremiumType: el
        })
      }), E && (0, a.jsx)(q, {
        isVisible: el === V.PremiumTypes.TIER_0,
        isMarketingPageOptimizationEnabled: E,
        children: el === V.PremiumTypes.TIER_0 && (0, a.jsx)($, {
          isFullscreen: s,
          selectedPremiumType: el
        })
      }), (0, a.jsxs)("div", {
        className: z.planComparisonTableContainer,
        children: [(0, a.jsx)(H.default, {
          className: z.planComparisonTable,
          hideCTAs: !0,
          selectedPlanTier: el
        }), s ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(I.default, {
            src: Q,
            className: z.tableLeftSideDecoration,
            width: 197,
            height: 486,
            zoomable: !1
          }), (0, a.jsx)(I.default, {
            src: J,
            className: z.tableRightSideDecoration,
            width: 241,
            height: 552,
            zoomable: !1
          })]
        }) : null]
      }), (0, a.jsx)("div", {
        className: s ? z.footerSpacingFullscreen : z.footerSpacing
      }), (0, a.jsx)(k.default, {
        isVisible: es && ea,
        isFullscreen: s,
        subscriptionTier: null != ed ? ed : S.default.getSkuIdForPremiumType(el)
      }), (0, a.jsx)(o.VisibilitySensor, {
        onChange: e => {
          e && !K && (R.default.track(Y.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: em
          }), X(!0))
        },
        children: (0, a.jsx)("div", {
          className: z.bottomOfPageVisibilitySensor
        })
      }), (0, a.jsx)(I.default, {
        src: Z,
        className: z.bottomIllustration,
        width: 112,
        height: 85,
        zoomable: !1
      })]
    });
  return s ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(d.AdvancedScrollerAuto, {
      className: z.scroller,
      ref: v,
      children: eN
    }), (el === V.PremiumTypes.TIER_2 || null == el) && (0, a.jsx)(W.default, {
      previousComponent: w.NitroLandingPages.MARKETING,
      isAllPerksVisible: eC,
      setIsAllPerksVisible: ef
    })]
  }) : eN
}