"use strict";
s.r(t), s("47120");
var a = s("735250"),
  r = s("470079"),
  i = s("120356"),
  n = s.n(i),
  l = s("442837"),
  o = s("622535"),
  u = s("780384"),
  c = s("481060"),
  d = s("634894"),
  _ = s("410030"),
  E = s("607070"),
  R = s("100527"),
  T = s("906732"),
  f = s("78839"),
  m = s("332475"),
  I = s("626135"),
  S = s("74538"),
  p = s("140465"),
  A = s("846363"),
  g = s("91802"),
  N = s("104494"),
  M = s("639119"),
  C = s("419854"),
  P = s("568126"),
  O = s("605289"),
  x = s("248042"),
  b = s("823188"),
  h = s("65536"),
  D = s("135785"),
  v = s("498765"),
  L = s("635921"),
  U = s("803687"),
  B = s("177839"),
  k = s("794484"),
  j = s("392521"),
  G = s("349803"),
  y = s("179984"),
  H = s("409100"),
  F = s("391110"),
  W = s("71363"),
  w = s("781800"),
  K = s("474936"),
  V = s("981631"),
  Y = s("990504"),
  z = s("865215"),
  Q = s("843929"),
  J = s("735035"),
  X = s("786362");
let Z = e => {
    let {
      isVisible: t,
      isMarketingPageOptimizationEnabled: s,
      children: r
    } = e, i = (0, l.useStateFromStores)([E.default], () => E.default.useReducedMotion);
    return !s || i ? (0, a.jsx)(a.Fragment, {
      children: r
    }) : (0, a.jsx)(h.AnimatedWrapper, {
      isVisible: t,
      children: r
    })
  },
  q = e => {
    let {
      isFullscreen: t,
      selectedPremiumType: s
    } = e;
    return t && null == s || s === K.PremiumTypes.TIER_2 && t ? null : (0, a.jsx)(B.default, {
      selectedPremiumType: s,
      className: t ? Y.perkCardsContainerSpacingFullscreen : Y.perkCardsContainerSpacingSettings
    })
  },
  $ = e => {
    let {
      isFullscreen: t,
      inOfferExperience: s,
      isMarketingPageOptimizationEnabled: r
    } = e;
    return t || s || r ? r ? (0, a.jsx)("img", {
      alt: "starry sky background header splash",
      className: Y.dynamicImage,
      src: Q
    }) : (0, a.jsx)(v.default, {
      lifted: !t && s
    }) : null
  },
  ee = e => {
    let {
      isFullscreen: t,
      selectedPremiumType: s,
      isMarketingPageOptimizationEnabled: r,
      inOfferExperience: i,
      setIsAllPerksVisible: l
    } = e;
    return (t || r) && (!r || s !== K.PremiumTypes.TIER_0) ? (0, a.jsxs)("div", {
      className: n()({
        [Y.whatsNewSectionBackground]: !r,
        [Y.whatsNewSection]: r
      }),
      children: [(0, a.jsx)(k.default, {
        headerClassname: r ? Y.stackedHeader : void 0,
        variant: F.PerksDiscoverabilityCardSection.WHATS_NEW,
        isFullScreen: t
      }), (0, a.jsx)(k.default, {
        headerClassname: r ? Y.stackedHeader : void 0,
        isFullScreen: t,
        showAllPerksButton: t ? (0, a.jsx)(w.default, {
          setIsAllPerksVisible: l,
          previousComponent: F.NitroLandingPages.MARKETING
        }) : void 0
      }), i && !r ? (0, a.jsx)(j.default, {
        className: Y.pdSparklesTop,
        variant: j.SparkleVariants.TOP
      }) : null, i && !r ? (0, a.jsx)(j.default, {
        className: Y.pdSparklesBottom,
        variant: j.SparkleVariants.BOTTOM
      }) : null]
    }) : null
  };
t.default = e => {
  var t;
  let {
    isFullscreen: s,
    entrypoint: i
  } = e, E = (0, A.useMarketingOptimizationExperiment)({
    autoTrackExposure: !0
  }), h = r.useRef(null), [v, B] = r.useState(!1), [k, j] = r.useState(!1), [w, Q] = r.useState(!1), et = !v && !k || E, [es, ea] = r.useState(!1), er = (0, l.useStateFromStores)([f.default], () => f.default.getPremiumTypeSubscription()), [ei, en] = r.useState(E ? K.PremiumTypes.TIER_2 : void 0), el = null != er ? (0, S.getPremiumPlanItem)(er) : null, eo = null != el ? S.default.getSkuIdForPlan(el.planId) : null, eu = null !== eo && eo !== K.PremiumSubscriptionSKUs.TIER_2 ? K.PremiumSubscriptionSKUs.TIER_2 : null, ec = (0, g.useLocalizedPromoQuery)(), ed = (0, u.isThemeLight)((0, _.default)()), e_ = null != ec, [eE, eR] = r.useState(!1), eT = (0, N.usePremiumDiscountOffer)(), ef = (0, M.usePremiumTrialOffer)(), em = null == ef ? void 0 : null === (t = ef.subscription_trial) || void 0 === t ? void 0 : t.sku_id, eI = (0, p.useIsInPremiumOfferExperience)(), eS = (0, x.useIsEligibleForBogoPromotion)(), {
    analyticsLocations: ep
  } = (0, T.default)(R.default.PREMIUM_MARKETING), eA = "PremiumMarketingHome";
  (0, d.useTriggerDebuggingAA)({
    location: eA + " auto on",
    autoTrackExposure: !0
  }), (0, d.useTriggerDebuggingAA)({
    location: eA + " auto off",
    autoTrackExposure: !1
  }), r.useEffect(() => {
    ea(!0)
  }, []), r.useEffect(() => {
    en(E ? K.PremiumTypes.TIER_2 : void 0)
  }, [E]);
  let eg = E ? {
      borderRadius: "24px"
    } : void 0,
    eN = (0, a.jsxs)("div", {
      className: n()(Y.container, {
        [Y.settingsContainer]: !s && !E
      }),
      "data-cy": "tier-0-marketing-page",
      children: [(0, a.jsx)(D.default, {
        premiumSubscription: er,
        className: n()(s ? Y.fullscreenExistingSubscriberSpacing : Y.existingSubscriberSpacing, {
          [Y.zIndex1]: eI
        }),
        isFullscreen: s,
        textColor: E && ed ? "text-normal" : void 0
      }), (0, a.jsx)($, {
        isFullscreen: s,
        inOfferExperience: eI,
        isMarketingPageOptimizationEnabled: E
      }), !s && e_ ? (0, a.jsx)(O.default, {
        localizedPricingPromo: ec,
        smallGap: !0
      }) : (0, a.jsx)(o.VisibilitySensor, {
        onChange: e => B(e),
        threshold: 0,
        active: !0,
        children: (0, a.jsx)(L.default, {
          subscriptionTier: eu,
          isFullscreen: s || eI,
          className: n()({
            [Y.fullscreenHero]: s && !E,
            [Y.fullscreenHeroMarketingOptimization]: E,
            [Y.settingsHeroNoBackground]: !s && eI,
            [Y.trialMarketingMargin]: eI && !E,
            [Y.settingsHeroBogoHeight]: !s && eS,
            [Y.settingsHeroBogoMarginFullscreen]: s && eS,
            [Y.noTopPaddingOverride]: null != er
          }),
          hideSparkles: E,
          hideSubscribeAndGiftButton: E,
          entrypoint: i
        })
      }), E && null != ei && (0, a.jsx)(U.default, {
        setSelectedPremiumType: en,
        selectedPremiumType: ei
      }), (0, a.jsxs)("div", {
        className: n()({
          [Y.premiumStackedTierCardsContainerFullscreen]: s && E,
          [Y.premiumTierCardsContainerSettings]: !s && !E,
          [Y.premiumStackedTierCardsContainerSettings]: !s && E,
          [Y.premiumTierCardsContainerFullscreen]: s && !E
        }),
        children: [(0, a.jsx)(C.default, {
          isFullscreen: s
        }), s && e_ && (0, a.jsx)(P.default, {
          localizedPricingPromo: ec
        }), (0, a.jsx)(o.VisibilitySensor, {
          onChange: e => j(e),
          threshold: .1,
          active: !0,
          children: (0, a.jsx)(b.default, {
            showWumpus: !E,
            variant: E ? b.PremiumTierCardsVariant.STACKED : b.PremiumTierCardsVariant.DEFAULT,
            isFullScreen: s,
            selectedPremiumType: E ? ei : void 0,
            tier0CTAButton: em === K.PremiumSubscriptionSKUs.TIER_2 || eS || null != eT ? (0, a.jsx)(H.default, {
              forceInverted: !0,
              showIcon: !1,
              subscriptionTier: K.PremiumSubscriptionSKUs.TIER_0,
              className: n()({
                [Y.marginTopForButtons]: !E,
                [Y.roundedSubscribeButton]: E
              }),
              style: eg,
              look: c.ButtonLooks.OUTLINED,
              color: c.ButtonColors.WHITE,
              buttonShineClassName: E ? Y.buttonShine : void 0
            }) : (0, a.jsx)(H.default, {
              forceInverted: !0,
              showIcon: !1,
              subscriptionTier: K.PremiumSubscriptionSKUs.TIER_0,
              style: eg,
              className: n()({
                [Y.marginTopForButtons]: !E,
                [Y.roundedSubscribeButton]: E
              }),
              buttonShineClassName: E ? Y.buttonShine : void 0
            }),
            tier2CTAButton: em === K.PremiumSubscriptionSKUs.TIER_0 ? (0, a.jsx)(H.default, {
              forceInverted: !0,
              showIcon: !1,
              subscriptionTier: K.PremiumSubscriptionSKUs.TIER_2,
              style: eg,
              className: n()({
                [Y.marginTopForButtons]: !E,
                [Y.roundedSubscribeButton]: E
              }),
              look: c.ButtonLooks.OUTLINED,
              color: c.ButtonColors.WHITE,
              buttonShineClassName: E ? Y.buttonShine : void 0
            }) : (0, a.jsx)(H.default, {
              forceInverted: !0,
              style: eg,
              showIcon: !1,
              subscriptionTier: K.PremiumSubscriptionSKUs.TIER_2,
              className: n()({
                [Y.marginTopForButtons]: !E,
                [Y.roundedSubscribeButton]: E
              }),
              isEligibleForBogoPromotion: eS,
              buttonShineClassName: E ? Y.buttonShine : void 0
            })
          })
        })]
      }), (0, a.jsx)(Z, {
        isVisible: ei === K.PremiumTypes.TIER_2,
        isMarketingPageOptimizationEnabled: E,
        children: (0, a.jsx)(ee, {
          isFullscreen: s,
          inOfferExperience: eI,
          selectedPremiumType: ei,
          isMarketingPageOptimizationEnabled: E,
          setIsAllPerksVisible: eR
        })
      }), (0, a.jsx)(Z, {
        isVisible: ei === K.PremiumTypes.TIER_2,
        isMarketingPageOptimizationEnabled: E,
        children: (ei === K.PremiumTypes.TIER_2 || null == ei) && (0, a.jsx)(q, {
          isFullscreen: s,
          selectedPremiumType: ei
        })
      }), E && (0, a.jsx)(Z, {
        isVisible: ei === K.PremiumTypes.TIER_0,
        isMarketingPageOptimizationEnabled: E,
        children: ei === K.PremiumTypes.TIER_0 && (0, a.jsx)(q, {
          isFullscreen: s,
          selectedPremiumType: ei
        })
      }), (0, a.jsxs)("div", {
        className: Y.planComparisonTableContainer,
        children: [(0, a.jsx)(y.default, {
          className: Y.planComparisonTable,
          hideCTAs: !0,
          selectedPlanTier: ei
        }), s ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(m.default, {
            src: J,
            className: Y.tableLeftSideDecoration,
            width: 197,
            height: 486,
            zoomable: !1
          }), (0, a.jsx)(m.default, {
            src: X,
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
        subscriptionTier: null != eu ? eu : S.default.getSkuIdForPremiumType(ei)
      }), (0, a.jsx)(o.VisibilitySensor, {
        onChange: e => {
          e && !w && (I.default.track(V.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: ep
          }), Q(!0))
        },
        children: (0, a.jsx)("div", {
          className: Y.bottomOfPageVisibilitySensor
        })
      }), (0, a.jsx)(m.default, {
        src: z,
        className: Y.bottomIllustration,
        width: 112,
        height: 85,
        zoomable: !1
      })]
    });
  return s ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(c.AdvancedScrollerAuto, {
      className: Y.scroller,
      ref: h,
      children: eN
    }), (ei === K.PremiumTypes.TIER_2 || null == ei) && (0, a.jsx)(W.default, {
      previousComponent: F.NitroLandingPages.MARKETING,
      isAllPerksVisible: eE,
      setIsAllPerksVisible: eR,
      isFullScreen: s
    })]
  }) : eN
}