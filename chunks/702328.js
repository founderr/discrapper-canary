"use strict";
s.r(t), s("47120");
var a = s("735250"),
  i = s("470079"),
  r = s("803997"),
  n = s.n(r),
  l = s("442837"),
  o = s("622535"),
  u = s("780384"),
  d = s("481060"),
  c = s("634894"),
  _ = s("410030"),
  E = s("607070"),
  T = s("100527"),
  I = s("906732"),
  f = s("78839"),
  R = s("332475"),
  S = s("626135"),
  m = s("74538"),
  A = s("140465"),
  N = s("846363"),
  p = s("91802"),
  g = s("104494"),
  C = s("639119"),
  O = s("419854"),
  P = s("568126"),
  M = s("605289"),
  h = s("248042"),
  L = s("823188"),
  x = s("65536"),
  v = s("135785"),
  D = s("498765"),
  b = s("635921"),
  U = s("803687"),
  j = s("177839"),
  y = s("794484"),
  G = s("392521"),
  B = s("349803"),
  k = s("179984"),
  H = s("409100"),
  F = s("391110"),
  w = s("71363"),
  K = s("781800"),
  W = s("474936"),
  V = s("981631"),
  Y = s("336023"),
  z = s("865215"),
  X = s("781922"),
  Q = s("735035"),
  Z = s("786362");
let J = e => {
    let {
      isVisible: t,
      isMarketingPageOptimizationEnabled: s,
      children: i
    } = e, r = (0, l.useStateFromStores)([E.default], () => E.default.useReducedMotion);
    return !s || r ? (0, a.jsx)(a.Fragment, {
      children: i
    }) : (0, a.jsx)(x.AnimatedWrapper, {
      isVisible: t,
      children: i
    })
  },
  q = e => {
    let {
      isFullscreen: t,
      selectedPremiumType: s
    } = e;
    return t && null == s || s === W.PremiumTypes.TIER_2 && t ? null : (0, a.jsx)(j.default, {
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
      src: X
    }) : (0, a.jsx)(D.default, {
      lifted: !t && s
    }) : null
  },
  ee = e => {
    let {
      isFullscreen: t,
      selectedPremiumType: s,
      isMarketingPageOptimizationEnabled: i,
      inOfferExperience: r,
      setIsAllPerksVisible: l
    } = e;
    return (t || i) && (!i || s !== W.PremiumTypes.TIER_0) ? (0, a.jsxs)("div", {
      className: n()({
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
        showAllPerksButton: t ? (0, a.jsx)(K.default, {
          setIsAllPerksVisible: l,
          previousComponent: F.NitroLandingPages.MARKETING
        }) : void 0
      }), r && !i ? (0, a.jsx)(G.default, {
        className: Y.pdSparklesTop,
        variant: G.SparkleVariants.TOP
      }) : null, r && !i ? (0, a.jsx)(G.default, {
        className: Y.pdSparklesBottom,
        variant: G.SparkleVariants.BOTTOM
      }) : null]
    }) : null
  };
t.default = e => {
  var t;
  let {
    isFullscreen: s,
    entrypoint: r
  } = e, E = (0, N.useMarketingOptimizationExperiment)({
    autoTrackExposure: !0
  }), x = i.useRef(null), [D, j] = i.useState(!1), [y, G] = i.useState(!1), [K, X] = i.useState(!1), et = !D && !y || E, [es, ea] = i.useState(!1), ei = (0, l.useStateFromStores)([f.default], () => f.default.getPremiumTypeSubscription()), [er, en] = i.useState(E ? W.PremiumTypes.TIER_2 : void 0), el = null != ei ? (0, m.getPremiumPlanItem)(ei) : null, eo = null != el ? m.default.getSkuIdForPlan(el.planId) : null, eu = null !== eo && eo !== W.PremiumSubscriptionSKUs.TIER_2 ? W.PremiumSubscriptionSKUs.TIER_2 : null, ed = (0, p.useLocalizedPromoQuery)(), ec = (0, u.isThemeLight)((0, _.default)()), e_ = null != ed, [eE, eT] = i.useState(!1), eI = (0, g.usePremiumDiscountOffer)(), ef = (0, C.usePremiumTrialOffer)(), eR = null == ef ? void 0 : null === (t = ef.subscription_trial) || void 0 === t ? void 0 : t.sku_id, eS = (0, A.useIsInPremiumOfferExperience)(), em = (0, h.useIsEligibleForBogoPromotion)(), {
    analyticsLocations: eA
  } = (0, I.default)(T.default.PREMIUM_MARKETING), eN = "PremiumMarketingHome";
  (0, c.useTriggerDebuggingAA)({
    location: eN + " auto on",
    autoTrackExposure: !0
  }), (0, c.useTriggerDebuggingAA)({
    location: eN + " auto off",
    autoTrackExposure: !1
  }), i.useEffect(() => {
    ea(!0)
  }, []), i.useEffect(() => {
    en(E ? W.PremiumTypes.TIER_2 : void 0)
  }, [E]);
  let ep = E ? {
      borderRadius: "24px"
    } : void 0,
    eg = (0, a.jsxs)("div", {
      className: n()(Y.container, {
        [Y.settingsContainer]: !s && !E
      }),
      "data-cy": "tier-0-marketing-page",
      children: [(0, a.jsx)(v.default, {
        premiumSubscription: ei,
        className: n()(s ? Y.fullscreenExistingSubscriberSpacing : Y.existingSubscriberSpacing, {
          [Y.zIndex1]: eS
        }),
        isFullscreen: s,
        textColor: E && ec ? "text-normal" : void 0
      }), (0, a.jsx)($, {
        isFullscreen: s,
        inOfferExperience: eS,
        isMarketingPageOptimizationEnabled: E
      }), !s && e_ ? (0, a.jsx)(M.default, {
        localizedPricingPromo: ed,
        smallGap: !0
      }) : (0, a.jsx)(o.VisibilitySensor, {
        onChange: e => j(e),
        threshold: 0,
        active: !0,
        children: (0, a.jsx)(b.default, {
          subscriptionTier: eu,
          isFullscreen: s || eS,
          className: n()({
            [Y.fullscreenHero]: s && !E,
            [Y.fullscreenHeroMarketingOptimization]: E,
            [Y.settingsHeroNoBackground]: !s && eS,
            [Y.trialMarketingMargin]: eS && !E,
            [Y.settingsHeroBogoHeight]: !s && em,
            [Y.settingsHeroBogoMarginFullscreen]: s && em,
            [Y.noTopPaddingOverride]: null != ei
          }),
          hideSparkles: E,
          hideSubscribeAndGiftButton: E,
          entrypoint: r
        })
      }), E && null != er && (0, a.jsx)(U.default, {
        setSelectedPremiumType: en,
        selectedPremiumType: er
      }), (0, a.jsxs)("div", {
        className: n()({
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
          onChange: e => G(e),
          threshold: .1,
          active: !0,
          children: (0, a.jsx)(L.default, {
            showWumpus: !E,
            variant: E ? L.PremiumTierCardsVariant.STACKED : L.PremiumTierCardsVariant.DEFAULT,
            isFullScreen: s,
            selectedPremiumType: E ? er : void 0,
            tier0CTAButton: eR === W.PremiumSubscriptionSKUs.TIER_2 || em || null != eI ? (0, a.jsx)(H.default, {
              forceInverted: !0,
              showIcon: !1,
              subscriptionTier: W.PremiumSubscriptionSKUs.TIER_0,
              className: n()({
                [Y.marginTopForButtons]: !E,
                [Y.roundedSubscribeButton]: E
              }),
              style: ep,
              look: d.ButtonLooks.OUTLINED,
              color: d.ButtonColors.WHITE,
              buttonShineClassName: E ? Y.buttonShine : void 0
            }) : (0, a.jsx)(H.default, {
              forceInverted: !0,
              showIcon: !1,
              subscriptionTier: W.PremiumSubscriptionSKUs.TIER_0,
              style: ep,
              className: n()({
                [Y.marginTopForButtons]: !E,
                [Y.roundedSubscribeButton]: E
              }),
              buttonShineClassName: E ? Y.buttonShine : void 0
            }),
            tier2CTAButton: eR === W.PremiumSubscriptionSKUs.TIER_0 ? (0, a.jsx)(H.default, {
              forceInverted: !0,
              showIcon: !1,
              subscriptionTier: W.PremiumSubscriptionSKUs.TIER_2,
              style: ep,
              className: n()({
                [Y.marginTopForButtons]: !E,
                [Y.roundedSubscribeButton]: E
              }),
              look: d.ButtonLooks.OUTLINED,
              color: d.ButtonColors.WHITE,
              buttonShineClassName: E ? Y.buttonShine : void 0
            }) : (0, a.jsx)(H.default, {
              forceInverted: !0,
              style: ep,
              showIcon: !1,
              subscriptionTier: W.PremiumSubscriptionSKUs.TIER_2,
              className: n()({
                [Y.marginTopForButtons]: !E,
                [Y.roundedSubscribeButton]: E
              }),
              isEligibleForBogoPromotion: em,
              buttonShineClassName: E ? Y.buttonShine : void 0
            })
          })
        })]
      }), (0, a.jsx)(J, {
        isVisible: er === W.PremiumTypes.TIER_2,
        isMarketingPageOptimizationEnabled: E,
        children: (0, a.jsx)(ee, {
          isFullscreen: s,
          inOfferExperience: eS,
          selectedPremiumType: er,
          isMarketingPageOptimizationEnabled: E,
          setIsAllPerksVisible: eT
        })
      }), (0, a.jsx)(J, {
        isVisible: er === W.PremiumTypes.TIER_2,
        isMarketingPageOptimizationEnabled: E,
        children: (er === W.PremiumTypes.TIER_2 || null == er) && (0, a.jsx)(q, {
          isFullscreen: s,
          selectedPremiumType: er
        })
      }), E && (0, a.jsx)(J, {
        isVisible: er === W.PremiumTypes.TIER_0,
        isMarketingPageOptimizationEnabled: E,
        children: er === W.PremiumTypes.TIER_0 && (0, a.jsx)(q, {
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
          children: [(0, a.jsx)(R.default, {
            src: Q,
            className: Y.tableLeftSideDecoration,
            width: 197,
            height: 486,
            zoomable: !1
          }), (0, a.jsx)(R.default, {
            src: Z,
            className: Y.tableRightSideDecoration,
            width: 241,
            height: 552,
            zoomable: !1
          })]
        }) : null]
      }), (0, a.jsx)("div", {
        className: s ? Y.footerSpacingFullscreen : Y.footerSpacing
      }), (0, a.jsx)(B.default, {
        isVisible: et && es,
        isFullscreen: s,
        subscriptionTier: null != eu ? eu : m.default.getSkuIdForPremiumType(er)
      }), (0, a.jsx)(o.VisibilitySensor, {
        onChange: e => {
          e && !K && (S.default.track(V.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: eA
          }), X(!0))
        },
        children: (0, a.jsx)("div", {
          className: Y.bottomOfPageVisibilitySensor
        })
      }), (0, a.jsx)(R.default, {
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
      ref: x,
      children: eg
    }), (er === W.PremiumTypes.TIER_2 || null == er) && (0, a.jsx)(w.default, {
      previousComponent: F.NitroLandingPages.MARKETING,
      isAllPerksVisible: eE,
      setIsAllPerksVisible: eT
    })]
  }) : eg
}