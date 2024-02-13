"use strict";
s.r(t), s.d(t, {
  default: function() {
    return z
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  i = s("414456"),
  r = s.n(i),
  l = s("446674"),
  u = s("290381"),
  o = s("77078"),
  d = s("875212"),
  c = s("812204"),
  _ = s("685665"),
  E = s("521012"),
  I = s("594098"),
  T = s("599110"),
  f = s("719923"),
  S = s("182650"),
  R = s("706922"),
  A = s("300962"),
  m = s("959905"),
  N = s("154889"),
  p = s("917247"),
  g = s("460680"),
  C = s("411205"),
  P = s("934570"),
  O = s("641078"),
  M = s("400307"),
  h = s("159646"),
  L = s("379521"),
  x = s("958966"),
  v = s("149102"),
  U = s("830648"),
  D = s("627474"),
  b = s("904871"),
  j = s("360776"),
  G = s("525505"),
  B = s("881155"),
  k = s("598739"),
  y = s("326881"),
  H = s("228967"),
  K = s("646718"),
  F = s("49111"),
  W = s("880552"),
  w = s("679324"),
  V = s("905498"),
  Y = s("452637"),
  z = e => {
    var t;
    let {
      isFullscreen: s
    } = e, i = n.useRef(null), [v, z] = n.useState(K.PremiumTypes.TIER_2), [X, Q] = n.useState(!1), [Z, J] = n.useState(!1), [q, $] = n.useState(!1), [ee, et] = n.useState(!1), es = (0, l.useStateFromStores)([E.default], () => E.default.getPremiumTypeSubscription()), {
      enabled: ea
    } = (0, R.default)(), en = null != es ? (0, f.getPremiumPlanItem)(es) : null, ei = null != en ? f.default.getSkuIdForPlan(en.planId) : null, er = null !== ei && ei !== K.PremiumSubscriptionSKUs.TIER_2 ? K.PremiumSubscriptionSKUs.TIER_2 : null, el = (0, m.useLocalizedPromoQuery)(), eu = null != el, [eo, ed] = n.useState(!1), ec = (0, N.usePremiumDiscountOffer)(), e_ = (0, p.usePremiumTrialOffer)(), eE = null == e_ ? void 0 : null === (t = e_.subscription_trial) || void 0 === t ? void 0 : t.sku_id, eI = (0, S.useIsInPremiumOfferExperience)(), eT = (0, O.useIsEligibleForBogoPromotion)(), {
      enabled: ef
    } = (0, A.default)(), {
      analyticsLocations: eS
    } = (0, _.default)(c.default.PREMIUM_MARKETING), eR = "PremiumMarketingHome";
    (0, d.useTriggerDebuggingAA)({
      location: eR + " auto on",
      autoTrackExposure: !0
    }), (0, d.useTriggerDebuggingAA)({
      location: eR + " auto off",
      autoTrackExposure: !1
    }), n.useEffect(() => {
      et(!0)
    }, []);
    let eA = (0, a.jsxs)("div", {
      className: r(W.container, {
        [W.settingsContainer]: !s
      }),
      "data-cy": "tier-0-marketing-page",
      children: [(0, a.jsx)(h.default, {
        premiumSubscription: es,
        className: r(s ? W.fullscreenExistingSubscriberSpacing : W.existingSubscriberSpacing, {
          [W.zIndex1]: eI
        }),
        isFullscreen: s
      }), s || eI ? (0, a.jsx)(L.default, {
        lifted: !s && eI
      }) : null, !s && eu ? (0, a.jsx)(P.default, {
        localizedPricingPromo: el,
        smallGap: !0
      }) : (0, a.jsx)(u.VisibilitySensor, {
        onChange: e => Q(e),
        threshold: 0,
        active: !0,
        children: (0, a.jsx)(x.default, {
          subscriptionTier: er,
          isFullscreen: s || eI,
          className: r({
            [W.fullscreenHero]: s,
            [W.settingsHeroNoBackground]: !s && eI,
            [W.trialMarketingMargin]: eI,
            [W.settingsHeroBogoHeight]: !s && eT,
            [W.settingsHeroBogoMarginFullscreen]: s && eT,
            [W.noTopPaddingOverride]: null != es
          })
        })
      }), !1, (0, a.jsxs)("div", {
        className: s ? W.premiumTierCardsContainerFullscreen : W.premiumTierCardsContainerSettings,
        children: [(0, a.jsx)(g.default, {
          isFullscreen: s
        }), s && eu && (0, a.jsx)(C.default, {
          localizedPricingPromo: el
        }), (0, a.jsx)(u.VisibilitySensor, {
          onChange: e => J(e),
          threshold: .1,
          active: !0,
          children: (0, a.jsx)(M.default, {
            showWumpus: true,
            variant: (0, M.PremiumTierCardsVariant.DEFAULT),
            toggleState: void 0,
            tier0CTAButton: eE === K.PremiumSubscriptionSKUs.TIER_2 || eT || null != ec ? (0, a.jsx)(B.default, {
              forceInverted: !0,
              showIcon: !1,
              subscriptionTier: K.PremiumSubscriptionSKUs.TIER_0,
              className: W.marginTopForButtons,
              look: o.ButtonLooks.OUTLINED,
              color: o.ButtonColors.WHITE,
              buttonShineClassName: void 0
            }) : (0, a.jsx)(B.default, {
              forceInverted: !0,
              showIcon: !1,
              subscriptionTier: K.PremiumSubscriptionSKUs.TIER_0,
              className: W.marginTopForButtons
            }),
            tier2CTAButton: eE === K.PremiumSubscriptionSKUs.TIER_0 ? (0, a.jsx)(B.default, {
              forceInverted: !0,
              showIcon: !1,
              subscriptionTier: K.PremiumSubscriptionSKUs.TIER_2,
              className: W.marginTopForButtons,
              look: o.ButtonLooks.OUTLINED,
              color: o.ButtonColors.WHITE,
              buttonShineClassName: void 0
            }) : (0, a.jsx)(B.default, {
              forceInverted: !0,
              showIcon: !1,
              subscriptionTier: K.PremiumSubscriptionSKUs.TIER_2,
              className: W.marginTopForButtons,
              isEligibleForBogoPromotion: eT
            })
          })
        })]
      }), s && !ef ? (0, a.jsxs)("div", {
        className: W.whatsNewSection,
        children: [(0, a.jsx)(D.default, {
          variant: k.PerksDiscoverabilityVariants.WHATS_NEW
        }), (0, a.jsx)(D.default, {
          showAllPerksButton: ea ? (0, a.jsx)(H.default, {
            setIsAllPerksVisible: ed,
            previousComponent: k.NitroLandingPages.MARKETING
          }) : void 0
        }), eI ? (0, a.jsx)(b.default, {
          className: W.pdSparklesTop,
          variant: b.SparkleVariants.TOP
        }) : null, eI ? (0, a.jsx)(b.default, {
          className: W.pdSparklesBottom,
          variant: b.SparkleVariants.BOTTOM
        }) : null]
      }) : null, !(ea && s) && (0, a.jsx)(U.default, {
        className: s ? W.perkCardsContainerSpacingFullscreen : W.perkCardsContainerSpacingSettings
      }), (0, a.jsxs)("div", {
        className: W.planComparisonTableContainer,
        children: [(0, a.jsx)(G.default, {
          className: W.planComparisonTable,
          hideCTAs: !0
        }), s ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(I.default, {
            src: V,
            className: W.tableLeftSideDecoration,
            width: 197,
            height: 486,
            zoomable: !1
          }), (0, a.jsx)(I.default, {
            src: Y,
            className: W.tableRightSideDecoration,
            width: 241,
            height: 552,
            zoomable: !1
          })]
        }) : null]
      }), (0, a.jsx)("div", {
        className: s ? W.footerSpacingFullscreen : W.footerSpacing
      }), (0, a.jsx)(j.default, {
        isVisible: !X && !Z && ee,
        isFullscreen: s,
        subscriptionTier: er
      }), (0, a.jsx)(u.VisibilitySensor, {
        onChange: e => {
          e && !q && (T.default.track(F.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: eS
          }), $(!0))
        },
        children: (0, a.jsx)("div", {
          className: W.bottomOfPageVisibilitySensor
        })
      }), (0, a.jsx)(I.default, {
        src: w,
        className: W.bottomIllustration,
        width: 112,
        height: 85,
        zoomable: !1
      })]
    });
    return s ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(o.AdvancedScrollerAuto, {
        className: W.scroller,
        ref: i,
        children: eA
      }), ea ? (0, a.jsx)(y.default, {
        previousComponent: k.NitroLandingPages.MARKETING,
        isAllPerksVisible: eo,
        setIsAllPerksVisible: ed
      }) : null]
    }) : eA
  }