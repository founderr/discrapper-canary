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
  S = s("730314"),
  m = s("91802"),
  A = s("104494"),
  N = s("639119"),
  p = s("8647"),
  g = s("568126"),
  C = s("605289"),
  P = s("248042"),
  O = s("823188"),
  M = s("135785"),
  h = s("498765"),
  L = s("635921"),
  x = s("177839"),
  b = s("794484"),
  v = s("392521"),
  D = s("349803"),
  U = s("179984"),
  j = s("409100"),
  G = s("391110"),
  B = s("71363"),
  y = s("781800"),
  k = s("474936"),
  H = s("981631"),
  F = s("990504"),
  w = s("865215"),
  W = s("735035"),
  K = s("786362");
let V = e => {
    let {
      isFullscreen: t,
      selectedPremiumType: s
    } = e;
    return t && null == s || s === k.PremiumTypes.TIER_2 && t ? null : (0, a.jsx)(x.default, {
      className: t ? F.perkCardsContainerSpacingFullscreen : F.perkCardsContainerSpacingSettings
    })
  },
  Y = e => {
    let {
      isFullscreen: t,
      inOfferExperience: s
    } = e;
    return t || s ? (0, a.jsx)(h.default, {
      lifted: !t && s
    }) : null
  },
  z = e => {
    let {
      isFullscreen: t,
      inOfferExperience: s,
      setIsAllPerksVisible: r
    } = e;
    return t ? (0, a.jsxs)("div", {
      className: n()(F.whatsNewSectionBackground),
      children: [(0, a.jsx)(b.default, {
        variant: G.PerksDiscoverabilityCardSection.WHATS_NEW,
        isFullScreen: t
      }), (0, a.jsx)(b.default, {
        isFullScreen: t,
        showAllPerksButton: t ? (0, a.jsx)(y.default, {
          setIsAllPerksVisible: r,
          previousComponent: G.NitroLandingPages.MARKETING
        }) : void 0
      }), s ? (0, a.jsx)(v.default, {
        className: F.pdSparklesTop,
        variant: v.SparkleVariants.TOP
      }) : null, s ? (0, a.jsx)(v.default, {
        className: F.pdSparklesBottom,
        variant: v.SparkleVariants.BOTTOM
      }) : null]
    }) : null
  };
t.default = e => {
  var t;
  let {
    isFullscreen: s,
    entrypoint: i
  } = e, {
    bucket: h
  } = (0, S.usePremiumTierCardsExperiment)("PremiumMarketingHome"), x = h > 0, b = r.useRef(null), [v, y] = r.useState(!1), [X, J] = r.useState(!1), [Q, Z] = r.useState(!1), [q, $] = r.useState(!1), ee = (0, l.useStateFromStores)([E.default], () => E.default.getPremiumTypeSubscription()), et = null != ee ? (0, R.getPremiumPlanItem)(ee) : null, es = null != et ? R.default.getSkuIdForPlan(et.planId) : null, ea = null !== es && es !== k.PremiumSubscriptionSKUs.TIER_2 ? k.PremiumSubscriptionSKUs.TIER_2 : null, er = (0, m.useLocalizedPromoQuery)(), ei = null != er, [en, el] = r.useState(!1), eo = (0, A.usePremiumDiscountOffer)(), eu = (0, N.usePremiumTrialOffer)(), ed = null == eu ? void 0 : null === (t = eu.subscription_trial) || void 0 === t ? void 0 : t.sku_id, ec = (0, f.useIsInPremiumOfferExperience)(), e_ = (0, P.useIsEligibleForBogoPromotion)(), {
    analyticsLocations: eE
  } = (0, _.default)(c.default.PREMIUM_MARKETING), eT = "PremiumMarketingHome";
  (0, d.useTriggerDebuggingAA)({
    location: eT + " auto on",
    autoTrackExposure: !0
  }), (0, d.useTriggerDebuggingAA)({
    location: eT + " auto off",
    autoTrackExposure: !1
  }), r.useEffect(() => {
    $(!0)
  }, []);
  let eI = (0, a.jsx)("div", {
      className: n()({
        [F.premiumTierCardsContainerSettings]: !s,
        [F.premiumTierCardsContainerFullscreen]: s
      }),
      children: (0, a.jsx)(o.VisibilitySensor, {
        onChange: e => J(e),
        threshold: .1,
        active: !0,
        children: (0, a.jsx)(O.default, {
          variant: x ? s ? O.PremiumTierCardsVariant.MODIFIED_COPY_STORE_HOME : O.PremiumTierCardsVariant.MODIFIED_COPY_SETTINGS : O.PremiumTierCardsVariant.DEFAULT,
          showWumpus: !x,
          tier0CTAButton: ed === k.PremiumSubscriptionSKUs.TIER_2 || e_ || null != eo ? (0, a.jsx)(j.default, {
            forceInverted: !0,
            showIcon: !1,
            subscriptionTier: k.PremiumSubscriptionSKUs.TIER_0,
            className: F.marginTopForButtons,
            look: u.ButtonLooks.OUTLINED,
            color: u.ButtonColors.WHITE,
            buttonShineClassName: F.buttonShine
          }) : (0, a.jsx)(j.default, {
            forceInverted: !0,
            showIcon: !1,
            subscriptionTier: k.PremiumSubscriptionSKUs.TIER_0,
            className: F.marginTopForButtons,
            buttonShineClassName: F.buttonShine
          }),
          tier2CTAButton: ed === k.PremiumSubscriptionSKUs.TIER_0 ? (0, a.jsx)(j.default, {
            forceInverted: !0,
            showIcon: !1,
            subscriptionTier: k.PremiumSubscriptionSKUs.TIER_2,
            className: F.marginTopForButtons,
            look: u.ButtonLooks.OUTLINED,
            color: u.ButtonColors.WHITE,
            buttonShineClassName: F.buttonShine
          }) : (0, a.jsx)(j.default, {
            forceInverted: !0,
            showIcon: !1,
            subscriptionTier: k.PremiumSubscriptionSKUs.TIER_2,
            className: F.marginTopForButtons,
            isEligibleForBogoPromotion: e_,
            buttonShineClassName: F.buttonShine
          })
        })
      })
    }),
    eR = (0, a.jsxs)("div", {
      className: n()(F.container, {
        [F.settingsContainer]: !s
      }),
      "data-cy": "tier-0-marketing-page",
      children: [(0, a.jsx)(M.default, {
        premiumSubscription: ee,
        className: n()(s ? F.fullscreenExistingSubscriberSpacing : F.existingSubscriberSpacing, {
          [F.zIndex1]: ec
        }),
        isFullscreen: s
      }), (0, a.jsx)(Y, {
        isFullscreen: s,
        inOfferExperience: ec
      }), !s && ei ? (0, a.jsx)(C.default, {
        localizedPricingPromo: er,
        smallGap: !0
      }) : (0, a.jsx)(o.VisibilitySensor, {
        onChange: e => y(e),
        threshold: 0,
        active: !0,
        children: (0, a.jsx)(L.default, {
          subscriptionTier: ea,
          isFullscreen: s || ec,
          className: n()({
            [F.fullscreenHero]: s,
            [F.settingsHeroNoBackground]: !s && ec,
            [F.trialMarketingMargin]: ec,
            [F.settingsHeroBogoHeight]: !s && e_,
            [F.settingsHeroBogoMarginFullscreen]: s && e_,
            [F.noTopPaddingOverride]: null != ee
          }),
          entrypoint: i
        })
      }), (0, a.jsxs)("div", {
        className: F.promoBannerContainer,
        children: [(0, a.jsx)(p.default, {
          isFullscreen: s
        }), s && ei && (0, a.jsx)(g.default, {
          localizedPricingPromo: er
        })]
      }), h < 2 && eI, (0, a.jsx)(z, {
        isFullscreen: s,
        inOfferExperience: ec,
        setIsAllPerksVisible: el
      }), (0, a.jsx)(V, {
        isFullscreen: s
      }), 2 === h && eI, 2 !== h && (0, a.jsxs)("div", {
        className: F.planComparisonTableContainer,
        children: [(0, a.jsx)(U.default, {
          className: F.planComparisonTable,
          hideCTAs: !0
        }), s ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(T.default, {
            src: W,
            className: F.tableLeftSideDecoration,
            width: 197,
            height: 486,
            zoomable: !1
          }), (0, a.jsx)(T.default, {
            src: K,
            className: F.tableRightSideDecoration,
            width: 241,
            height: 552,
            zoomable: !1
          })]
        }) : null]
      }), (0, a.jsx)("div", {
        className: s ? F.footerSpacingFullscreen : F.footerSpacing
      }), (0, a.jsx)(D.default, {
        isVisible: !v && !X && q,
        isFullscreen: s,
        subscriptionTier: ea
      }), (0, a.jsx)(o.VisibilitySensor, {
        onChange: e => {
          e && !Q && (I.default.track(H.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: eE
          }), Z(!0))
        },
        children: (0, a.jsx)("div", {
          className: F.bottomOfPageVisibilitySensor
        })
      }), (0, a.jsx)(T.default, {
        src: w,
        className: F.bottomIllustration,
        width: 112,
        height: 85,
        zoomable: !1
      })]
    });
  return s ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(u.AdvancedScrollerAuto, {
      className: F.scroller,
      ref: b,
      children: eR
    }), (0, a.jsx)(B.default, {
      previousComponent: G.NitroLandingPages.MARKETING,
      isAllPerksVisible: en,
      setIsAllPerksVisible: el,
      isFullScreen: s
    })]
  }) : eR
}