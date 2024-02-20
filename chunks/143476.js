"use strict";
s.r(t), s.d(t, {
  default: function() {
    return q
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  i = s("414456"),
  r = s.n(i),
  l = s("446674"),
  o = s("290381"),
  u = s("77078"),
  d = s("875212"),
  c = s("812204"),
  _ = s("685665"),
  E = s("521012"),
  I = s("594098"),
  T = s("599110"),
  f = s("719923"),
  S = s("182650"),
  R = s("706922"),
  m = s("527715"),
  A = s("300962"),
  N = s("959905"),
  p = s("154889"),
  g = s("917247"),
  C = s("460680"),
  P = s("411205"),
  O = s("934570"),
  M = s("641078"),
  h = s("400307"),
  L = s("159646"),
  x = s("379521"),
  v = s("958966"),
  D = s("149102"),
  U = s("830648"),
  b = s("627474"),
  j = s("904871"),
  G = s("360776"),
  k = s("525505"),
  B = s("881155"),
  y = s("598739"),
  H = s("326881"),
  K = s("228967"),
  F = s("646718"),
  W = s("49111"),
  w = s("660261"),
  V = s("679324"),
  Y = s("575066"),
  z = s("905498"),
  Q = s("452637");
let X = e => {
    let {
      isInAllPerksExperiment: t,
      isFullscreen: s,
      selectedPremiumType: n,
      isMarketingPageOptimizationEnabled: i
    } = e, r = t && s && (null == n || n === F.PremiumTypes.TIER_2), l = i && n === F.PremiumTypes.TIER_2;
    return r || l ? null : (0, a.jsx)(U.default, {
      className: s ? w.perkCardsContainerSpacingFullscreen : w.perkCardsContainerSpacingSettings
    })
  },
  Z = e => {
    let {
      isFullscreen: t,
      inOfferExperience: s,
      isMarketingPageOptimizationEnabled: n
    } = e;
    return t || s || n ? n ? (0, a.jsx)("img", {
      alt: "starry sky background header splash",
      className: w.dynamicImage,
      src: Y
    }) : (0, a.jsx)(x.default, {
      lifted: !t && s
    }) : null
  },
  J = e => {
    let {
      isFullscreen: t,
      isInNitroTabHoldout: s,
      isMarketingActiveAndBasic: n,
      isMarketingPageOptimizationEnabled: i,
      isInAllPerksExperiment: l,
      inOfferExperience: o,
      setIsAllPerksVisible: u
    } = e;
    return t && !s && !n ? (0, a.jsxs)("div", {
      className: r({
        [w.whatsNewSectionBackground]: !i,
        [w.whatsNewSection]: i
      }),
      children: [(0, a.jsx)(b.default, {
        variant: y.PerksDiscoverabilityVariants.WHATS_NEW
      }), (0, a.jsx)(b.default, {
        showAllPerksButton: l ? (0, a.jsx)(K.default, {
          setIsAllPerksVisible: u,
          previousComponent: y.NitroLandingPages.MARKETING
        }) : void 0
      }), o ? (0, a.jsx)(j.default, {
        className: w.pdSparklesTop,
        variant: j.SparkleVariants.TOP
      }) : null, o ? (0, a.jsx)(j.default, {
        className: w.pdSparklesBottom,
        variant: j.SparkleVariants.BOTTOM
      }) : null]
    }) : null
  };
var q = e => {
  var t;
  let {
    isFullscreen: s
  } = e, {
    enabled: i
  } = (0, m.default)(), x = n.useRef(null), [U, b] = n.useState(i ? F.PremiumTypes.TIER_2 : void 0), [j, K] = n.useState(!1), [Y, q] = n.useState(!1), [$, ee] = n.useState(!1), et = !j && !Y || i, [es, ea] = n.useState(!1), en = (0, l.useStateFromStores)([E.default], () => E.default.getPremiumTypeSubscription()), {
    enabled: ei
  } = (0, R.default)(), er = null != en ? (0, f.getPremiumPlanItem)(en) : null, el = null != er ? f.default.getSkuIdForPlan(er.planId) : null, eo = null !== el && el !== F.PremiumSubscriptionSKUs.TIER_2 ? F.PremiumSubscriptionSKUs.TIER_2 : null, eu = (0, N.useLocalizedPromoQuery)(), ed = null != eu, [ec, e_] = n.useState(!1), eE = (0, p.usePremiumDiscountOffer)(), eI = (0, g.usePremiumTrialOffer)(), eT = null == eI ? void 0 : null === (t = eI.subscription_trial) || void 0 === t ? void 0 : t.sku_id, ef = (0, S.useIsInPremiumOfferExperience)(), eS = (0, M.useIsEligibleForBogoPromotion)(), {
    enabled: eR
  } = (0, A.default)(), em = i && U === F.PremiumTypes.TIER_0, {
    analyticsLocations: eA
  } = (0, _.default)(c.default.PREMIUM_MARKETING), eN = "PremiumMarketingHome";
  (0, d.useTriggerDebuggingAA)({
    location: eN + " auto on",
    autoTrackExposure: !0
  }), (0, d.useTriggerDebuggingAA)({
    location: eN + " auto off",
    autoTrackExposure: !1
  }), n.useEffect(() => {
    ea(!0)
  }, []);
  let ep = (0, a.jsxs)("div", {
    className: r(w.container, {
      [w.settingsContainer]: !s
    }),
    "data-cy": "tier-0-marketing-page",
    children: [(0, a.jsx)(L.default, {
      premiumSubscription: en,
      className: r(s ? w.fullscreenExistingSubscriberSpacing : w.existingSubscriberSpacing, {
        [w.zIndex1]: ef
      }),
      isFullscreen: s
    }), (0, a.jsx)(Z, {
      isFullscreen: s,
      inOfferExperience: ef,
      isMarketingPageOptimizationEnabled: i
    }), !s && ed ? (0, a.jsx)(O.default, {
      localizedPricingPromo: eu,
      smallGap: !0
    }) : (0, a.jsx)(o.VisibilitySensor, {
      onChange: e => K(e),
      threshold: 0,
      active: !0,
      children: (0, a.jsx)(v.default, {
        subscriptionTier: eo,
        isFullscreen: s || ef,
        className: r({
          [w.fullscreenHero]: s && !i,
          [w.fullscreenHeroMarketingOptimization]: i,
          [w.settingsHeroNoBackground]: !s && ef,
          [w.trialMarketingMargin]: ef,
          [w.settingsHeroBogoHeight]: !s && eS,
          [w.settingsHeroBogoMarginFullscreen]: s && eS,
          [w.noTopPaddingOverride]: null != en
        }),
        hideSparkles: i,
        hideSubscribeAndGiftButton: i
      })
    }), i && null != U && (0, a.jsx)(D.default, {
      setSelectedPremiumType: b,
      selectedPremiumType: U
    }), (0, a.jsxs)("div", {
      className: s ? w.premiumTierCardsContainerFullscreen : w.premiumTierCardsContainerSettings,
      children: [(0, a.jsx)(C.default, {
        isFullscreen: s
      }), s && ed && (0, a.jsx)(P.default, {
        localizedPricingPromo: eu
      }), (0, a.jsx)(o.VisibilitySensor, {
        onChange: e => q(e),
        threshold: .1,
        active: !0,
        children: (0, a.jsx)(h.default, {
          showWumpus: !i,
          variant: i ? h.PremiumTierCardsVariant.STACKED : h.PremiumTierCardsVariant.DEFAULT,
          selectedPremiumType: i ? U : void 0,
          tier0CTAButton: eT === F.PremiumSubscriptionSKUs.TIER_2 || eS || null != eE ? (0, a.jsx)(B.default, {
            forceInverted: !0,
            showIcon: !1,
            subscriptionTier: F.PremiumSubscriptionSKUs.TIER_0,
            className: w.marginTopForButtons,
            look: u.ButtonLooks.OUTLINED,
            color: u.ButtonColors.WHITE,
            buttonShineClassName: void 0
          }) : (0, a.jsx)(B.default, {
            forceInverted: !0,
            showIcon: !1,
            subscriptionTier: F.PremiumSubscriptionSKUs.TIER_0,
            className: w.marginTopForButtons
          }),
          tier2CTAButton: eT === F.PremiumSubscriptionSKUs.TIER_0 ? (0, a.jsx)(B.default, {
            forceInverted: !0,
            showIcon: !1,
            subscriptionTier: F.PremiumSubscriptionSKUs.TIER_2,
            className: w.marginTopForButtons,
            look: u.ButtonLooks.OUTLINED,
            color: u.ButtonColors.WHITE,
            buttonShineClassName: void 0
          }) : (0, a.jsx)(B.default, {
            forceInverted: !0,
            showIcon: !1,
            subscriptionTier: F.PremiumSubscriptionSKUs.TIER_2,
            className: w.marginTopForButtons,
            isEligibleForBogoPromotion: eS
          })
        })
      })]
    }), (0, a.jsx)(J, {
      isFullscreen: s,
      inOfferExperience: ef,
      isInAllPerksExperiment: ei,
      isInNitroTabHoldout: eR,
      isMarketingActiveAndBasic: em,
      isMarketingPageOptimizationEnabled: i,
      setIsAllPerksVisible: e_
    }), (0, a.jsx)(X, {
      isInAllPerksExperiment: ei,
      isFullscreen: s,
      isMarketingPageOptimizationEnabled: i,
      selectedPremiumType: U
    }), (0, a.jsxs)("div", {
      className: w.planComparisonTableContainer,
      children: [(0, a.jsx)(k.default, {
        className: w.planComparisonTable,
        hideCTAs: !0,
        hidePill: em,
        selectedPlanTier: U
      }), s ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(I.default, {
          src: z,
          className: w.tableLeftSideDecoration,
          width: 197,
          height: 486,
          zoomable: !1
        }), (0, a.jsx)(I.default, {
          src: Q,
          className: w.tableRightSideDecoration,
          width: 241,
          height: 552,
          zoomable: !1
        })]
      }) : null]
    }), (0, a.jsx)("div", {
      className: s ? w.footerSpacingFullscreen : w.footerSpacing
    }), (0, a.jsx)(G.default, {
      isVisible: et && es,
      isFullscreen: s,
      subscriptionTier: null != eo ? eo : f.default.getSkuIdForPremiumType(U)
    }), (0, a.jsx)(o.VisibilitySensor, {
      onChange: e => {
        e && !$ && (T.default.track(W.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
          location_stack: eA
        }), ee(!0))
      },
      children: (0, a.jsx)("div", {
        className: w.bottomOfPageVisibilitySensor
      })
    }), (0, a.jsx)(I.default, {
      src: V,
      className: w.bottomIllustration,
      width: 112,
      height: 85,
      zoomable: !1
    })]
  });
  return s ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(u.AdvancedScrollerAuto, {
      className: w.scroller,
      ref: x,
      children: ep
    }), ei ? (0, a.jsx)(H.default, {
      previousComponent: y.NitroLandingPages.MARKETING,
      isAllPerksVisible: ec,
      setIsAllPerksVisible: e_
    }) : null]
  }) : ep
}