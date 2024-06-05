"use strict";
s.r(t), s("47120");
var a = s("735250"),
  r = s("470079"),
  i = s("120356"),
  n = s.n(i),
  l = s("442837"),
  o = s("622535"),
  u = s("481060"),
  c = s("634894"),
  d = s("100527"),
  _ = s("906732"),
  E = s("78839"),
  R = s("332475"),
  T = s("626135"),
  f = s("74538"),
  I = s("140465"),
  S = s("91802"),
  m = s("104494"),
  p = s("639119"),
  A = s("419854"),
  N = s("568126"),
  M = s("605289"),
  C = s("248042"),
  g = s("823188"),
  P = s("135785"),
  O = s("498765"),
  x = s("635921"),
  b = s("177839"),
  h = s("794484"),
  D = s("392521"),
  L = s("349803"),
  v = s("179984"),
  U = s("409100"),
  B = s("391110"),
  j = s("71363"),
  G = s("781800"),
  k = s("474936"),
  H = s("981631"),
  W = s("990504"),
  y = s("865215"),
  F = s("735035"),
  w = s("786362");
let K = e => {
    let {
      isFullscreen: t,
      selectedPremiumType: s
    } = e;
    return t && null == s || s === k.PremiumTypes.TIER_2 && t ? null : (0, a.jsx)(b.default, {
      className: t ? W.perkCardsContainerSpacingFullscreen : W.perkCardsContainerSpacingSettings
    })
  },
  V = e => {
    let {
      isFullscreen: t,
      inOfferExperience: s
    } = e;
    return t || s ? (0, a.jsx)(O.default, {
      lifted: !t && s
    }) : null
  },
  Y = e => {
    let {
      isFullscreen: t,
      inOfferExperience: s,
      setIsAllPerksVisible: r
    } = e;
    return t ? (0, a.jsxs)("div", {
      className: n()(W.whatsNewSectionBackground),
      children: [(0, a.jsx)(h.default, {
        variant: B.PerksDiscoverabilityCardSection.WHATS_NEW,
        isFullScreen: t
      }), (0, a.jsx)(h.default, {
        isFullScreen: t,
        showAllPerksButton: t ? (0, a.jsx)(G.default, {
          setIsAllPerksVisible: r,
          previousComponent: B.NitroLandingPages.MARKETING
        }) : void 0
      }), s ? (0, a.jsx)(D.default, {
        className: W.pdSparklesTop,
        variant: D.SparkleVariants.TOP
      }) : null, s ? (0, a.jsx)(D.default, {
        className: W.pdSparklesBottom,
        variant: D.SparkleVariants.BOTTOM
      }) : null]
    }) : null
  };
t.default = e => {
  var t;
  let {
    isFullscreen: s,
    entrypoint: i
  } = e, O = r.useRef(null), [b, h] = r.useState(!1), [D, G] = r.useState(!1), [z, Q] = r.useState(!1), [J, X] = r.useState(!1), Z = (0, l.useStateFromStores)([E.default], () => E.default.getPremiumTypeSubscription()), q = null != Z ? (0, f.getPremiumPlanItem)(Z) : null, $ = null != q ? f.default.getSkuIdForPlan(q.planId) : null, ee = null !== $ && $ !== k.PremiumSubscriptionSKUs.TIER_2 ? k.PremiumSubscriptionSKUs.TIER_2 : null, et = (0, S.useLocalizedPromoQuery)(), es = null != et, [ea, er] = r.useState(!1), ei = (0, m.usePremiumDiscountOffer)(), en = (0, p.usePremiumTrialOffer)(), el = null == en ? void 0 : null === (t = en.subscription_trial) || void 0 === t ? void 0 : t.sku_id, eo = (0, I.useIsInPremiumOfferExperience)(), eu = (0, C.useIsEligibleForBogoPromotion)(), {
    analyticsLocations: ec
  } = (0, _.default)(d.default.PREMIUM_MARKETING), ed = "PremiumMarketingHome";
  (0, c.useTriggerDebuggingAA)({
    location: ed + " auto on",
    autoTrackExposure: !0
  }), (0, c.useTriggerDebuggingAA)({
    location: ed + " auto off",
    autoTrackExposure: !1
  }), r.useEffect(() => {
    X(!0)
  }, []);
  let e_ = (0, a.jsxs)("div", {
    className: n()(W.container, {
      [W.settingsContainer]: !s
    }),
    "data-cy": "tier-0-marketing-page",
    children: [(0, a.jsx)(P.default, {
      premiumSubscription: Z,
      className: n()(s ? W.fullscreenExistingSubscriberSpacing : W.existingSubscriberSpacing, {
        [W.zIndex1]: eo
      }),
      isFullscreen: s
    }), (0, a.jsx)(V, {
      isFullscreen: s,
      inOfferExperience: eo
    }), !s && es ? (0, a.jsx)(M.default, {
      localizedPricingPromo: et,
      smallGap: !0
    }) : (0, a.jsx)(o.VisibilitySensor, {
      onChange: e => h(e),
      threshold: 0,
      active: !0,
      children: (0, a.jsx)(x.default, {
        subscriptionTier: ee,
        isFullscreen: s || eo,
        className: n()({
          [W.fullscreenHero]: s,
          [W.settingsHeroNoBackground]: !s && eo,
          [W.trialMarketingMargin]: eo,
          [W.settingsHeroBogoHeight]: !s && eu,
          [W.settingsHeroBogoMarginFullscreen]: s && eu,
          [W.noTopPaddingOverride]: null != Z
        }),
        entrypoint: i
      })
    }), (0, a.jsxs)("div", {
      className: n()({
        [W.premiumTierCardsContainerSettings]: !s,
        [W.premiumTierCardsContainerFullscreen]: s
      }),
      children: [(0, a.jsx)(A.default, {
        isFullscreen: s
      }), s && es && (0, a.jsx)(N.default, {
        localizedPricingPromo: et
      }), (0, a.jsx)(o.VisibilitySensor, {
        onChange: e => G(e),
        threshold: .1,
        active: !0,
        children: (0, a.jsx)(g.default, {
          showWumpus: !0,
          tier0CTAButton: el === k.PremiumSubscriptionSKUs.TIER_2 || eu || null != ei ? (0, a.jsx)(U.default, {
            forceInverted: !0,
            showIcon: !1,
            subscriptionTier: k.PremiumSubscriptionSKUs.TIER_0,
            className: n()(W.marginTopForButtons),
            look: u.ButtonLooks.OUTLINED,
            color: u.ButtonColors.WHITE
          }) : (0, a.jsx)(U.default, {
            forceInverted: !0,
            showIcon: !1,
            subscriptionTier: k.PremiumSubscriptionSKUs.TIER_0,
            className: n()(W.marginTopForButtons)
          }),
          tier2CTAButton: el === k.PremiumSubscriptionSKUs.TIER_0 ? (0, a.jsx)(U.default, {
            forceInverted: !0,
            showIcon: !1,
            subscriptionTier: k.PremiumSubscriptionSKUs.TIER_2,
            className: n()(W.marginTopForButtons),
            look: u.ButtonLooks.OUTLINED,
            color: u.ButtonColors.WHITE
          }) : (0, a.jsx)(U.default, {
            forceInverted: !0,
            showIcon: !1,
            subscriptionTier: k.PremiumSubscriptionSKUs.TIER_2,
            className: n()(W.marginTopForButtons),
            isEligibleForBogoPromotion: eu
          })
        })
      })]
    }), (0, a.jsx)(Y, {
      isFullscreen: s,
      inOfferExperience: eo,
      setIsAllPerksVisible: er
    }), (0, a.jsx)(K, {
      isFullscreen: s
    }), (0, a.jsxs)("div", {
      className: W.planComparisonTableContainer,
      children: [(0, a.jsx)(v.default, {
        className: W.planComparisonTable,
        hideCTAs: !0
      }), s ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(R.default, {
          src: F,
          className: W.tableLeftSideDecoration,
          width: 197,
          height: 486,
          zoomable: !1
        }), (0, a.jsx)(R.default, {
          src: w,
          className: W.tableRightSideDecoration,
          width: 241,
          height: 552,
          zoomable: !1
        })]
      }) : null]
    }), (0, a.jsx)("div", {
      className: s ? W.footerSpacingFullscreen : W.footerSpacing
    }), (0, a.jsx)(L.default, {
      isVisible: !b && !D && J,
      isFullscreen: s,
      subscriptionTier: ee
    }), (0, a.jsx)(o.VisibilitySensor, {
      onChange: e => {
        e && !z && (T.default.track(H.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
          location_stack: ec
        }), Q(!0))
      },
      children: (0, a.jsx)("div", {
        className: W.bottomOfPageVisibilitySensor
      })
    }), (0, a.jsx)(R.default, {
      src: y,
      className: W.bottomIllustration,
      width: 112,
      height: 85,
      zoomable: !1
    })]
  });
  return s ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(u.AdvancedScrollerAuto, {
      className: W.scroller,
      ref: O,
      children: e_
    }), (0, a.jsx)(j.default, {
      previousComponent: B.NitroLandingPages.MARKETING,
      isAllPerksVisible: ea,
      setIsAllPerksVisible: er,
      isFullScreen: s
    })]
  }) : e_
}