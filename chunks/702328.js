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
  R = s("626135"),
  T = s("74538"),
  I = s("140465"),
  f = s("730314"),
  S = s("91802"),
  m = s("104494"),
  p = s("639119"),
  A = s("8647"),
  M = s("568126"),
  C = s("605289"),
  g = s("248042"),
  N = s("823188"),
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
  k = s("781800"),
  G = s("474936"),
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
    return t && null == s || s === G.PremiumTypes.TIER_2 && t ? null : (0, a.jsx)(b.default, {
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
        showAllPerksButton: t ? (0, a.jsx)(k.default, {
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
  } = e, {
    bucket: O
  } = (0, f.usePremiumTierCardsExperiment)("PremiumMarketingHome"), b = O > 0, h = r.useRef(null), [D, k] = r.useState(!1), [z, Q] = r.useState(!1), [X, J] = r.useState(!1), [Z, q] = r.useState(!1), $ = (0, l.useStateFromStores)([E.default], () => E.default.getPremiumTypeSubscription()), ee = null != $ ? (0, T.getPremiumPlanItem)($) : null, et = null != ee ? T.default.getSkuIdForPlan(ee.planId) : null, es = null !== et && et !== G.PremiumSubscriptionSKUs.TIER_2 ? G.PremiumSubscriptionSKUs.TIER_2 : null, ea = (0, S.useLocalizedPromoQuery)(), er = null != ea, [ei, en] = r.useState(!1), el = (0, m.usePremiumDiscountOffer)(), eo = (0, p.usePremiumTrialOffer)(), eu = null == eo ? void 0 : null === (t = eo.subscription_trial) || void 0 === t ? void 0 : t.sku_id, ec = (0, I.useIsInPremiumOfferExperience)(), ed = (0, g.useIsEligibleForBogoPromotion)(), {
    analyticsLocations: e_
  } = (0, _.default)(d.default.PREMIUM_MARKETING), eE = "PremiumMarketingHome";
  (0, c.useTriggerDebuggingAA)({
    location: eE + " auto on",
    autoTrackExposure: !0
  }), (0, c.useTriggerDebuggingAA)({
    location: eE + " auto off",
    autoTrackExposure: !1
  }), r.useEffect(() => {
    q(!0)
  }, []);
  let eR = (0, a.jsx)("div", {
      className: n()({
        [W.premiumTierCardsContainerSettings]: !s,
        [W.premiumTierCardsContainerFullscreen]: s
      }),
      children: (0, a.jsx)(o.VisibilitySensor, {
        onChange: e => Q(e),
        threshold: .1,
        active: !0,
        children: (0, a.jsx)(N.default, {
          variant: b ? s ? N.PremiumTierCardsVariant.MODIFIED_COPY_STORE_HOME : N.PremiumTierCardsVariant.MODIFIED_COPY_SETTINGS : N.PremiumTierCardsVariant.DEFAULT,
          showWumpus: !b,
          tier0CTAButton: eu === G.PremiumSubscriptionSKUs.TIER_2 || ed || null != el ? (0, a.jsx)(U.default, {
            forceInverted: !0,
            showIcon: !1,
            subscriptionTier: G.PremiumSubscriptionSKUs.TIER_0,
            className: W.marginTopForButtons,
            look: u.ButtonLooks.OUTLINED,
            color: u.ButtonColors.WHITE,
            buttonShineClassName: W.buttonShine
          }) : (0, a.jsx)(U.default, {
            forceInverted: !0,
            showIcon: !1,
            subscriptionTier: G.PremiumSubscriptionSKUs.TIER_0,
            className: W.marginTopForButtons,
            buttonShineClassName: W.buttonShine
          }),
          tier2CTAButton: eu === G.PremiumSubscriptionSKUs.TIER_0 ? (0, a.jsx)(U.default, {
            forceInverted: !0,
            showIcon: !1,
            subscriptionTier: G.PremiumSubscriptionSKUs.TIER_2,
            className: W.marginTopForButtons,
            look: u.ButtonLooks.OUTLINED,
            color: u.ButtonColors.WHITE,
            buttonShineClassName: W.buttonShine
          }) : (0, a.jsx)(U.default, {
            forceInverted: !0,
            showIcon: !1,
            subscriptionTier: G.PremiumSubscriptionSKUs.TIER_2,
            className: W.marginTopForButtons,
            isEligibleForBogoPromotion: ed,
            buttonShineClassName: W.buttonShine
          })
        })
      })
    }),
    eT = (0, a.jsxs)("div", {
      className: n()(W.container, {
        [W.settingsContainer]: !s
      }),
      "data-cy": "tier-0-marketing-page",
      children: [(0, a.jsx)(P.default, {
        premiumSubscription: $,
        className: n()(s ? W.fullscreenExistingSubscriberSpacing : W.existingSubscriberSpacing, {
          [W.zIndex1]: ec
        }),
        isFullscreen: s
      }), (0, a.jsx)(V, {
        isFullscreen: s,
        inOfferExperience: ec
      }), !s && er ? (0, a.jsx)(C.default, {
        localizedPricingPromo: ea,
        smallGap: !0
      }) : (0, a.jsx)(o.VisibilitySensor, {
        onChange: e => k(e),
        threshold: 0,
        active: !0,
        children: (0, a.jsx)(x.default, {
          subscriptionTier: es,
          isFullscreen: s || ec,
          className: n()({
            [W.fullscreenHero]: s,
            [W.settingsHeroNoBackground]: !s && ec,
            [W.trialMarketingMargin]: ec,
            [W.settingsHeroBogoHeight]: !s && ed,
            [W.settingsHeroBogoMarginFullscreen]: s && ed,
            [W.noTopPaddingOverride]: null != $
          }),
          entrypoint: i
        })
      }), (0, a.jsxs)("div", {
        className: W.promoBannerContainer,
        children: [(0, a.jsx)(A.default, {
          isFullscreen: s
        }), s && er && (0, a.jsx)(M.default, {
          localizedPricingPromo: ea
        })]
      }), O < 2 && eR, (0, a.jsx)(Y, {
        isFullscreen: s,
        inOfferExperience: ec,
        setIsAllPerksVisible: en
      }), (0, a.jsx)(K, {
        isFullscreen: s
      }), 2 === O && eR, 2 !== O && (0, a.jsxs)("div", {
        className: W.planComparisonTableContainer,
        children: [(0, a.jsx)(v.default, {
          className: W.planComparisonTable,
          hideCTAs: !0
        }), s ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(u.Image, {
            src: F,
            className: W.tableLeftSideDecoration,
            width: 197,
            height: 486,
            zoomable: !1
          }), (0, a.jsx)(u.Image, {
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
        isVisible: !D && !z && Z,
        isFullscreen: s,
        subscriptionTier: es
      }), (0, a.jsx)(o.VisibilitySensor, {
        onChange: e => {
          e && !X && (R.default.track(H.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: e_
          }), J(!0))
        },
        children: (0, a.jsx)("div", {
          className: W.bottomOfPageVisibilitySensor
        })
      }), (0, a.jsx)(u.Image, {
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
      ref: h,
      children: eT
    }), (0, a.jsx)(j.default, {
      previousComponent: B.NitroLandingPages.MARKETING,
      isAllPerksVisible: ei,
      setIsAllPerksVisible: en,
      isFullScreen: s
    })]
  }) : eT
}