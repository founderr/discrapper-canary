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
  S = s("74538"),
  f = s("140465"),
  I = s("730314"),
  m = s("91802"),
  p = s("104494"),
  A = s("639119"),
  N = s("8647"),
  M = s("568126"),
  C = s("605289"),
  g = s("248042"),
  P = s("823188"),
  O = s("135785"),
  x = s("498765"),
  b = s("635921"),
  h = s("177839"),
  D = s("794484"),
  L = s("392521"),
  v = s("349803"),
  U = s("179984"),
  B = s("409100"),
  j = s("391110"),
  G = s("71363"),
  k = s("781800"),
  H = s("474936"),
  W = s("981631"),
  y = s("990504"),
  F = s("865215"),
  w = s("735035"),
  K = s("786362");
let V = e => {
    let {
      isFullscreen: t,
      selectedPremiumType: s
    } = e;
    return t && null == s || s === H.PremiumTypes.TIER_2 && t ? null : (0, a.jsx)(h.default, {
      className: t ? y.perkCardsContainerSpacingFullscreen : y.perkCardsContainerSpacingSettings
    })
  },
  Y = e => {
    let {
      isFullscreen: t,
      inOfferExperience: s
    } = e;
    return t || s ? (0, a.jsx)(x.default, {
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
      className: n()(y.whatsNewSectionBackground),
      children: [(0, a.jsx)(D.default, {
        variant: j.PerksDiscoverabilityCardSection.WHATS_NEW,
        isFullScreen: t
      }), (0, a.jsx)(D.default, {
        isFullScreen: t,
        showAllPerksButton: t ? (0, a.jsx)(k.default, {
          setIsAllPerksVisible: r,
          previousComponent: j.NitroLandingPages.MARKETING
        }) : void 0
      }), s ? (0, a.jsx)(L.default, {
        className: y.pdSparklesTop,
        variant: L.SparkleVariants.TOP
      }) : null, s ? (0, a.jsx)(L.default, {
        className: y.pdSparklesBottom,
        variant: L.SparkleVariants.BOTTOM
      }) : null]
    }) : null
  };
t.default = e => {
  var t;
  let {
    isFullscreen: s,
    entrypoint: i
  } = e, {
    bucket: x
  } = (0, I.usePremiumTierCardsExperiment)("PremiumMarketingHome"), h = x > 0, D = r.useRef(null), [L, k] = r.useState(!1), [Q, J] = r.useState(!1), [X, Z] = r.useState(!1), [q, $] = r.useState(!1), ee = (0, l.useStateFromStores)([E.default], () => E.default.getPremiumTypeSubscription()), et = null != ee ? (0, S.getPremiumPlanItem)(ee) : null, es = null != et ? S.default.getSkuIdForPlan(et.planId) : null, ea = null !== es && es !== H.PremiumSubscriptionSKUs.TIER_2 ? H.PremiumSubscriptionSKUs.TIER_2 : null, er = (0, m.useLocalizedPromoQuery)(), ei = null != er, [en, el] = r.useState(!1), eo = (0, p.usePremiumDiscountOffer)(), eu = (0, A.usePremiumTrialOffer)(), ec = null == eu ? void 0 : null === (t = eu.subscription_trial) || void 0 === t ? void 0 : t.sku_id, ed = (0, f.useIsInPremiumOfferExperience)(), e_ = (0, g.useIsEligibleForBogoPromotion)(), {
    analyticsLocations: eE
  } = (0, _.default)(d.default.PREMIUM_MARKETING), eR = "PremiumMarketingHome";
  (0, c.useTriggerDebuggingAA)({
    location: eR + " auto on",
    autoTrackExposure: !0
  }), (0, c.useTriggerDebuggingAA)({
    location: eR + " auto off",
    autoTrackExposure: !1
  }), r.useEffect(() => {
    $(!0)
  }, []);
  let eT = (0, a.jsx)("div", {
      className: n()({
        [y.premiumTierCardsContainerSettings]: !s,
        [y.premiumTierCardsContainerFullscreen]: s
      }),
      children: (0, a.jsx)(o.VisibilitySensor, {
        onChange: e => J(e),
        threshold: .1,
        active: !0,
        children: (0, a.jsx)(P.default, {
          variant: h ? s ? P.PremiumTierCardsVariant.MODIFIED_COPY_STORE_HOME : P.PremiumTierCardsVariant.MODIFIED_COPY_SETTINGS : P.PremiumTierCardsVariant.DEFAULT,
          showWumpus: !h,
          tier0CTAButton: ec === H.PremiumSubscriptionSKUs.TIER_2 || e_ || null != eo ? (0, a.jsx)(B.default, {
            forceInverted: !0,
            showIcon: !1,
            subscriptionTier: H.PremiumSubscriptionSKUs.TIER_0,
            className: n()(y.marginTopForButtons, {
              [y.roundedSubscribeButton]: h
            }),
            look: u.ButtonLooks.OUTLINED,
            color: u.ButtonColors.WHITE,
            buttonShineClassName: y.buttonShine
          }) : (0, a.jsx)(B.default, {
            forceInverted: !0,
            showIcon: !1,
            subscriptionTier: H.PremiumSubscriptionSKUs.TIER_0,
            className: n()(y.marginTopForButtons, {
              [y.roundedSubscribeButton]: h
            }),
            buttonShineClassName: y.buttonShine
          }),
          tier2CTAButton: ec === H.PremiumSubscriptionSKUs.TIER_0 ? (0, a.jsx)(B.default, {
            forceInverted: !0,
            showIcon: !1,
            subscriptionTier: H.PremiumSubscriptionSKUs.TIER_2,
            className: n()(y.marginTopForButtons, {
              [y.roundedSubscribeButton]: h
            }),
            look: u.ButtonLooks.OUTLINED,
            color: u.ButtonColors.WHITE,
            buttonShineClassName: y.buttonShine
          }) : (0, a.jsx)(B.default, {
            forceInverted: !0,
            showIcon: !1,
            subscriptionTier: H.PremiumSubscriptionSKUs.TIER_2,
            className: n()(y.marginTopForButtons, {
              [y.roundedSubscribeButton]: h
            }),
            isEligibleForBogoPromotion: e_,
            buttonShineClassName: y.buttonShine
          })
        })
      })
    }),
    eS = (0, a.jsxs)("div", {
      className: n()(y.container, {
        [y.settingsContainer]: !s
      }),
      "data-cy": "tier-0-marketing-page",
      children: [(0, a.jsx)(O.default, {
        premiumSubscription: ee,
        className: n()(s ? y.fullscreenExistingSubscriberSpacing : y.existingSubscriberSpacing, {
          [y.zIndex1]: ed
        }),
        isFullscreen: s
      }), (0, a.jsx)(Y, {
        isFullscreen: s,
        inOfferExperience: ed
      }), !s && ei ? (0, a.jsx)(C.default, {
        localizedPricingPromo: er,
        smallGap: !0
      }) : (0, a.jsx)(o.VisibilitySensor, {
        onChange: e => k(e),
        threshold: 0,
        active: !0,
        children: (0, a.jsx)(b.default, {
          subscriptionTier: ea,
          isFullscreen: s || ed,
          buttonClassName: h ? y.roundedSubscribeButton : void 0,
          className: n()({
            [y.fullscreenHero]: s,
            [y.settingsHeroNoBackground]: !s && ed,
            [y.trialMarketingMargin]: ed,
            [y.settingsHeroBogoHeight]: !s && e_,
            [y.settingsHeroBogoMarginFullscreen]: s && e_,
            [y.noTopPaddingOverride]: null != ee
          }),
          entrypoint: i
        })
      }), (0, a.jsxs)("div", {
        className: y.promoBannerContainer,
        children: [(0, a.jsx)(N.default, {
          isFullscreen: s,
          buttonClassName: h ? y.roundedSubscribeButton : void 0
        }), s && ei && (0, a.jsx)(M.default, {
          localizedPricingPromo: er
        })]
      }), x < 2 && eT, (0, a.jsx)(z, {
        isFullscreen: s,
        inOfferExperience: ed,
        setIsAllPerksVisible: el
      }), (0, a.jsx)(V, {
        isFullscreen: s
      }), 2 === x && eT, 2 !== x && (0, a.jsxs)("div", {
        className: y.planComparisonTableContainer,
        children: [(0, a.jsx)(U.default, {
          className: y.planComparisonTable,
          hideCTAs: !0
        }), s ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(R.default, {
            src: w,
            className: y.tableLeftSideDecoration,
            width: 197,
            height: 486,
            zoomable: !1
          }), (0, a.jsx)(R.default, {
            src: K,
            className: y.tableRightSideDecoration,
            width: 241,
            height: 552,
            zoomable: !1
          })]
        }) : null]
      }), (0, a.jsx)("div", {
        className: s ? y.footerSpacingFullscreen : y.footerSpacing
      }), (0, a.jsx)(v.default, {
        isVisible: !L && !Q && q,
        isFullscreen: s,
        subscriptionTier: ea
      }), (0, a.jsx)(o.VisibilitySensor, {
        onChange: e => {
          e && !X && (T.default.track(W.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: eE
          }), Z(!0))
        },
        children: (0, a.jsx)("div", {
          className: y.bottomOfPageVisibilitySensor
        })
      }), (0, a.jsx)(R.default, {
        src: F,
        className: y.bottomIllustration,
        width: 112,
        height: 85,
        zoomable: !1
      })]
    });
  return s ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(u.AdvancedScrollerAuto, {
      className: y.scroller,
      ref: D,
      children: eS
    }), (0, a.jsx)(G.default, {
      previousComponent: j.NitroLandingPages.MARKETING,
      isAllPerksVisible: en,
      setIsAllPerksVisible: el,
      isFullScreen: s
    })]
  }) : eS
}