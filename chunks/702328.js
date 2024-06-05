"use strict";
s.r(t), s("47120");
var a = s("735250"),
  r = s("470079"),
  i = s("120356"),
  n = s.n(i),
  l = s("442837"),
  o = s("622535"),
  u = s("481060"),
  d = s("634894"),
  c = s("100527"),
  _ = s("906732"),
  E = s("78839"),
  T = s("332475"),
  I = s("626135"),
  R = s("74538"),
  f = s("140465"),
  S = s("91802"),
  A = s("104494"),
  m = s("639119"),
  N = s("419854"),
  p = s("568126"),
  g = s("605289"),
  C = s("248042"),
  P = s("823188"),
  O = s("135785"),
  M = s("498765"),
  h = s("635921"),
  L = s("177839"),
  x = s("794484"),
  v = s("392521"),
  D = s("349803"),
  b = s("179984"),
  U = s("409100"),
  j = s("391110"),
  G = s("71363"),
  B = s("781800"),
  y = s("474936"),
  k = s("981631"),
  H = s("990504"),
  F = s("865215"),
  w = s("735035"),
  W = s("786362");
let K = e => {
    let {
      isFullscreen: t,
      selectedPremiumType: s
    } = e;
    return t && null == s || s === y.PremiumTypes.TIER_2 && t ? null : (0, a.jsx)(L.default, {
      className: t ? H.perkCardsContainerSpacingFullscreen : H.perkCardsContainerSpacingSettings
    })
  },
  V = e => {
    let {
      isFullscreen: t,
      inOfferExperience: s
    } = e;
    return t || s ? (0, a.jsx)(M.default, {
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
      className: n()(H.whatsNewSectionBackground),
      children: [(0, a.jsx)(x.default, {
        variant: j.PerksDiscoverabilityCardSection.WHATS_NEW,
        isFullScreen: t
      }), (0, a.jsx)(x.default, {
        isFullScreen: t,
        showAllPerksButton: t ? (0, a.jsx)(B.default, {
          setIsAllPerksVisible: r,
          previousComponent: j.NitroLandingPages.MARKETING
        }) : void 0
      }), s ? (0, a.jsx)(v.default, {
        className: H.pdSparklesTop,
        variant: v.SparkleVariants.TOP
      }) : null, s ? (0, a.jsx)(v.default, {
        className: H.pdSparklesBottom,
        variant: v.SparkleVariants.BOTTOM
      }) : null]
    }) : null
  };
t.default = e => {
  var t;
  let {
    isFullscreen: s,
    entrypoint: i
  } = e, M = r.useRef(null), [L, x] = r.useState(!1), [v, B] = r.useState(!1), [z, X] = r.useState(!1), [Q, J] = r.useState(!1), Z = (0, l.useStateFromStores)([E.default], () => E.default.getPremiumTypeSubscription()), q = null != Z ? (0, R.getPremiumPlanItem)(Z) : null, $ = null != q ? R.default.getSkuIdForPlan(q.planId) : null, ee = null !== $ && $ !== y.PremiumSubscriptionSKUs.TIER_2 ? y.PremiumSubscriptionSKUs.TIER_2 : null, et = (0, S.useLocalizedPromoQuery)(), es = null != et, [ea, er] = r.useState(!1), ei = (0, A.usePremiumDiscountOffer)(), en = (0, m.usePremiumTrialOffer)(), el = null == en ? void 0 : null === (t = en.subscription_trial) || void 0 === t ? void 0 : t.sku_id, eo = (0, f.useIsInPremiumOfferExperience)(), eu = (0, C.useIsEligibleForBogoPromotion)(), {
    analyticsLocations: ed
  } = (0, _.default)(c.default.PREMIUM_MARKETING), ec = "PremiumMarketingHome";
  (0, d.useTriggerDebuggingAA)({
    location: ec + " auto on",
    autoTrackExposure: !0
  }), (0, d.useTriggerDebuggingAA)({
    location: ec + " auto off",
    autoTrackExposure: !1
  }), r.useEffect(() => {
    J(!0)
  }, []);
  let e_ = (0, a.jsxs)("div", {
    className: n()(H.container, {
      [H.settingsContainer]: !s
    }),
    "data-cy": "tier-0-marketing-page",
    children: [(0, a.jsx)(O.default, {
      premiumSubscription: Z,
      className: n()(s ? H.fullscreenExistingSubscriberSpacing : H.existingSubscriberSpacing, {
        [H.zIndex1]: eo
      }),
      isFullscreen: s
    }), (0, a.jsx)(V, {
      isFullscreen: s,
      inOfferExperience: eo
    }), !s && es ? (0, a.jsx)(g.default, {
      localizedPricingPromo: et,
      smallGap: !0
    }) : (0, a.jsx)(o.VisibilitySensor, {
      onChange: e => x(e),
      threshold: 0,
      active: !0,
      children: (0, a.jsx)(h.default, {
        subscriptionTier: ee,
        isFullscreen: s || eo,
        className: n()({
          [H.fullscreenHero]: s,
          [H.settingsHeroNoBackground]: !s && eo,
          [H.trialMarketingMargin]: eo,
          [H.settingsHeroBogoHeight]: !s && eu,
          [H.settingsHeroBogoMarginFullscreen]: s && eu,
          [H.noTopPaddingOverride]: null != Z
        }),
        entrypoint: i
      })
    }), (0, a.jsxs)("div", {
      className: n()({
        [H.premiumTierCardsContainerSettings]: !s,
        [H.premiumTierCardsContainerFullscreen]: s
      }),
      children: [(0, a.jsx)(N.default, {
        isFullscreen: s
      }), s && es && (0, a.jsx)(p.default, {
        localizedPricingPromo: et
      }), (0, a.jsx)(o.VisibilitySensor, {
        onChange: e => B(e),
        threshold: .1,
        active: !0,
        children: (0, a.jsx)(P.default, {
          showWumpus: !0,
          tier0CTAButton: el === y.PremiumSubscriptionSKUs.TIER_2 || eu || null != ei ? (0, a.jsx)(U.default, {
            forceInverted: !0,
            showIcon: !1,
            subscriptionTier: y.PremiumSubscriptionSKUs.TIER_0,
            className: n()(H.marginTopForButtons),
            look: u.ButtonLooks.OUTLINED,
            color: u.ButtonColors.WHITE
          }) : (0, a.jsx)(U.default, {
            forceInverted: !0,
            showIcon: !1,
            subscriptionTier: y.PremiumSubscriptionSKUs.TIER_0,
            className: n()(H.marginTopForButtons)
          }),
          tier2CTAButton: el === y.PremiumSubscriptionSKUs.TIER_0 ? (0, a.jsx)(U.default, {
            forceInverted: !0,
            showIcon: !1,
            subscriptionTier: y.PremiumSubscriptionSKUs.TIER_2,
            className: n()(H.marginTopForButtons),
            look: u.ButtonLooks.OUTLINED,
            color: u.ButtonColors.WHITE
          }) : (0, a.jsx)(U.default, {
            forceInverted: !0,
            showIcon: !1,
            subscriptionTier: y.PremiumSubscriptionSKUs.TIER_2,
            className: n()(H.marginTopForButtons),
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
      className: H.planComparisonTableContainer,
      children: [(0, a.jsx)(b.default, {
        className: H.planComparisonTable,
        hideCTAs: !0
      }), s ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(T.default, {
          src: w,
          className: H.tableLeftSideDecoration,
          width: 197,
          height: 486,
          zoomable: !1
        }), (0, a.jsx)(T.default, {
          src: W,
          className: H.tableRightSideDecoration,
          width: 241,
          height: 552,
          zoomable: !1
        })]
      }) : null]
    }), (0, a.jsx)("div", {
      className: s ? H.footerSpacingFullscreen : H.footerSpacing
    }), (0, a.jsx)(D.default, {
      isVisible: !L && !v && Q,
      isFullscreen: s,
      subscriptionTier: ee
    }), (0, a.jsx)(o.VisibilitySensor, {
      onChange: e => {
        e && !z && (I.default.track(k.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
          location_stack: ed
        }), X(!0))
      },
      children: (0, a.jsx)("div", {
        className: H.bottomOfPageVisibilitySensor
      })
    }), (0, a.jsx)(T.default, {
      src: F,
      className: H.bottomIllustration,
      width: 112,
      height: 85,
      zoomable: !1
    })]
  });
  return s ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(u.AdvancedScrollerAuto, {
      className: H.scroller,
      ref: M,
      children: e_
    }), (0, a.jsx)(G.default, {
      previousComponent: j.NitroLandingPages.MARKETING,
      isAllPerksVisible: ea,
      setIsAllPerksVisible: er,
      isFullScreen: s
    })]
  }) : e_
}