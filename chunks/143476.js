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
  m = s("300962"),
  A = s("959905"),
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
  D = s("830648"),
  U = s("627474"),
  b = s("904871"),
  j = s("360776"),
  G = s("525505"),
  B = s("881155"),
  k = s("598739"),
  y = s("326881"),
  H = s("228967"),
  K = s("646718"),
  W = s("49111"),
  F = s("880552"),
  w = s("679324"),
  V = s("905498"),
  Y = s("452637"),
  z = e => {
    var t;
    let {
      isFullscreen: s
    } = e, i = n.useRef(null), [v, z] = n.useState(K.PremiumTypes.TIER_2), [Q, X] = n.useState(!1), [Z, J] = n.useState(!1), [q, $] = n.useState(!1), [ee, et] = n.useState(!1), es = (0, l.useStateFromStores)([E.default], () => E.default.getPremiumTypeSubscription()), {
      enabled: ea
    } = (0, R.default)(), en = null != es ? (0, f.getPremiumPlanItem)(es) : null, ei = null != en ? f.default.getSkuIdForPlan(en.planId) : null, er = null !== ei && ei !== K.PremiumSubscriptionSKUs.TIER_2 ? K.PremiumSubscriptionSKUs.TIER_2 : null, el = (0, A.useLocalizedPromoQuery)(), eo = null != el, [eu, ed] = n.useState(!1), ec = (0, N.usePremiumDiscountOffer)(), e_ = (0, p.usePremiumTrialOffer)(), eE = null == e_ ? void 0 : null === (t = e_.subscription_trial) || void 0 === t ? void 0 : t.sku_id, eI = (0, S.useIsInPremiumOfferExperience)(), eT = (0, O.useIsEligibleForBogoPromotion)(), {
      enabled: ef
    } = (0, m.default)(), {
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
    let em = (0, a.jsxs)("div", {
      className: r(F.container, {
        [F.settingsContainer]: !s
      }),
      "data-cy": "tier-0-marketing-page",
      children: [(0, a.jsx)(h.default, {
        premiumSubscription: es,
        className: r(s ? F.fullscreenExistingSubscriberSpacing : F.existingSubscriberSpacing, {
          [F.zIndex1]: eI
        }),
        isFullscreen: s
      }), s || eI ? (0, a.jsx)(L.default, {
        lifted: !s && eI
      }) : null, !s && eo ? (0, a.jsx)(P.default, {
        localizedPricingPromo: el,
        smallGap: !0
      }) : (0, a.jsx)(o.VisibilitySensor, {
        onChange: e => X(e),
        threshold: 0,
        active: !0,
        children: (0, a.jsx)(x.default, {
          subscriptionTier: er,
          isFullscreen: s || eI,
          className: r({
            [F.fullscreenHero]: s,
            [F.settingsHeroNoBackground]: !s && eI,
            [F.trialMarketingMargin]: eI,
            [F.settingsHeroBogoHeight]: !s && eT,
            [F.settingsHeroBogoMarginFullscreen]: s && eT,
            [F.noTopPaddingOverride]: null != es
          })
        })
      }), !1, (0, a.jsxs)("div", {
        className: s ? F.premiumTierCardsContainerFullscreen : F.premiumTierCardsContainerSettings,
        children: [(0, a.jsx)(g.default, {
          isFullscreen: s
        }), s && eo && (0, a.jsx)(C.default, {
          localizedPricingPromo: el
        }), (0, a.jsx)(o.VisibilitySensor, {
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
              className: F.marginTopForButtons,
              look: u.ButtonLooks.OUTLINED,
              color: u.ButtonColors.WHITE,
              buttonShineClassName: void 0
            }) : (0, a.jsx)(B.default, {
              forceInverted: !0,
              showIcon: !1,
              subscriptionTier: K.PremiumSubscriptionSKUs.TIER_0,
              className: F.marginTopForButtons
            }),
            tier2CTAButton: eE === K.PremiumSubscriptionSKUs.TIER_0 ? (0, a.jsx)(B.default, {
              forceInverted: !0,
              showIcon: !1,
              subscriptionTier: K.PremiumSubscriptionSKUs.TIER_2,
              className: F.marginTopForButtons,
              look: u.ButtonLooks.OUTLINED,
              color: u.ButtonColors.WHITE,
              buttonShineClassName: void 0
            }) : (0, a.jsx)(B.default, {
              forceInverted: !0,
              showIcon: !1,
              subscriptionTier: K.PremiumSubscriptionSKUs.TIER_2,
              className: F.marginTopForButtons,
              isEligibleForBogoPromotion: eT
            })
          })
        })]
      }), s && !ef ? (0, a.jsxs)("div", {
        className: F.whatsNewSection,
        children: [(0, a.jsx)(U.default, {
          variant: k.PerksDiscoverabilityVariants.WHATS_NEW
        }), (0, a.jsx)(U.default, {
          showAllPerksButton: ea ? (0, a.jsx)(H.default, {
            setIsAllPerksVisible: ed,
            previousComponent: k.NitroLandingPages.MARKETING
          }) : void 0
        }), eI ? (0, a.jsx)(b.default, {
          className: F.pdSparklesTop,
          variant: b.SparkleVariants.TOP
        }) : null, eI ? (0, a.jsx)(b.default, {
          className: F.pdSparklesBottom,
          variant: b.SparkleVariants.BOTTOM
        }) : null]
      }) : null, !(ea && s) && (0, a.jsx)(D.default, {
        className: s ? F.perkCardsContainerSpacingFullscreen : F.perkCardsContainerSpacingSettings
      }), (0, a.jsxs)("div", {
        className: F.planComparisonTableContainer,
        children: [(0, a.jsx)(G.default, {
          className: F.planComparisonTable,
          hideCTAs: !0
        }), s ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(I.default, {
            src: V,
            className: F.tableLeftSideDecoration,
            width: 197,
            height: 486,
            zoomable: !1
          }), (0, a.jsx)(I.default, {
            src: Y,
            className: F.tableRightSideDecoration,
            width: 241,
            height: 552,
            zoomable: !1
          })]
        }) : null]
      }), (0, a.jsx)("div", {
        className: s ? F.footerSpacingFullscreen : F.footerSpacing
      }), (0, a.jsx)(j.default, {
        isVisible: !Q && !Z && ee,
        isFullscreen: s,
        subscriptionTier: er
      }), (0, a.jsx)(o.VisibilitySensor, {
        onChange: e => {
          e && !q && (T.default.track(W.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: eS
          }), $(!0))
        },
        children: (0, a.jsx)("div", {
          className: F.bottomOfPageVisibilitySensor
        })
      }), (0, a.jsx)(I.default, {
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
        ref: i,
        children: em
      }), ea ? (0, a.jsx)(y.default, {
        previousComponent: k.NitroLandingPages.MARKETING,
        isAllPerksVisible: eu,
        setIsAllPerksVisible: ed
      }) : null]
    }) : em
  }