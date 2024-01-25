"use strict";
s.r(t), s.d(t, {
  default: function() {
    return F
  }
}), s("222007");
var a = s("37983"),
  r = s("884691"),
  n = s("414456"),
  i = s.n(n),
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
  R = s("300962"),
  m = s("959905"),
  A = s("154889"),
  N = s("917247"),
  p = s("460680"),
  g = s("411205"),
  C = s("934570"),
  P = s("641078"),
  O = s("400307"),
  M = s("159646"),
  h = s("379521"),
  L = s("958966"),
  x = s("830648"),
  v = s("627474"),
  D = s("904871"),
  U = s("360776"),
  b = s("525505"),
  j = s("881155"),
  G = s("598739"),
  k = s("646718"),
  B = s("49111"),
  y = s("880552"),
  H = s("679324"),
  K = s("905498"),
  W = s("452637"),
  F = e => {
    var t;
    let {
      isFullscreen: s
    } = e, n = r.useRef(null), [F, w] = r.useState(!1), [V, Y] = r.useState(!1), [z, Q] = r.useState(!1), [X, J] = r.useState(!1), Z = (0, l.useStateFromStores)([E.default], () => E.default.getPremiumTypeSubscription()), q = null != Z ? (0, f.getPremiumPlanItem)(Z) : null, $ = null != q ? f.default.getSkuIdForPlan(q.planId) : null, ee = null !== $ && $ !== k.PremiumSubscriptionSKUs.TIER_2 ? k.PremiumSubscriptionSKUs.TIER_2 : null, et = (0, m.useLocalizedPromoQuery)(), es = null != et, ea = (0, A.usePremiumDiscountOffer)(), er = (0, N.usePremiumTrialOffer)(), en = null == er ? void 0 : null === (t = er.subscription_trial) || void 0 === t ? void 0 : t.sku_id, ei = (0, S.useIsInPremiumOfferExperience)(), el = (0, P.useIsEligibleForBogoPromotion)(), {
      enabled: eu
    } = (0, R.default)(), {
      analyticsLocations: eo
    } = (0, _.default)(c.default.PREMIUM_MARKETING), ed = "PremiumMarketingHome";
    (0, d.useTriggerDebuggingAA)({
      location: ed + " auto on",
      autoTrackExposure: !0
    }), (0, d.useTriggerDebuggingAA)({
      location: ed + " auto off",
      autoTrackExposure: !1
    }), r.useEffect(() => {
      J(!0)
    }, []);
    let ec = (0, a.jsxs)("div", {
      className: i(y.container, {
        [y.settingsContainer]: !s
      }),
      "data-cy": "tier-0-marketing-page",
      children: [(0, a.jsx)(M.default, {
        premiumSubscription: Z,
        className: i(s ? y.fullscreenExistingSubscriberSpacing : y.existingSubscriberSpacing, {
          [y.zIndex1]: ei
        }),
        isFullscreen: s
      }), s || ei ? (0, a.jsx)(h.default, {
        lifted: !s && ei
      }) : null, !s && es ? (0, a.jsx)(C.default, {
        localizedPricingPromo: et,
        smallGap: !0
      }) : (0, a.jsx)(u.VisibilitySensor, {
        onChange: e => w(e),
        threshold: 0,
        active: !0,
        children: (0, a.jsx)(L.default, {
          subscriptionTier: ee,
          isFullscreen: s || ei,
          className: i({
            [y.fullscreenHero]: s,
            [y.settingsHeroNoBackground]: !s && ei,
            [y.trialMarketingMargin]: ei,
            [y.settingsHeroBogoHeight]: !s && el,
            [y.settingsHeroBogoMarginFullscreen]: s && el,
            [y.noTopPaddingOverride]: null != Z
          })
        })
      }), (0, a.jsxs)("div", {
        className: s ? y.premiumTierCardsContainerFullscreen : y.premiumTierCardsContainerSettings,
        children: [(0, a.jsx)(p.default, {
          isFullscreen: s
        }), s && es && (0, a.jsx)(g.default, {
          localizedPricingPromo: et
        }), (0, a.jsx)(u.VisibilitySensor, {
          onChange: e => Y(e),
          threshold: .1,
          active: !0,
          children: (0, a.jsx)(O.default, {
            showWumpus: !0,
            tier0CTAButton: en === k.PremiumSubscriptionSKUs.TIER_2 || el || null != ea ? (0, a.jsx)(j.default, {
              forceInverted: !0,
              showIcon: !1,
              subscriptionTier: k.PremiumSubscriptionSKUs.TIER_0,
              className: y.marginTopForButtons,
              look: o.ButtonLooks.OUTLINED,
              color: o.ButtonColors.WHITE,
              buttonShineClassName: void 0
            }) : (0, a.jsx)(j.default, {
              forceInverted: !0,
              showIcon: !1,
              subscriptionTier: k.PremiumSubscriptionSKUs.TIER_0,
              className: y.marginTopForButtons
            }),
            tier2CTAButton: en === k.PremiumSubscriptionSKUs.TIER_0 ? (0, a.jsx)(j.default, {
              forceInverted: !0,
              showIcon: !1,
              subscriptionTier: k.PremiumSubscriptionSKUs.TIER_2,
              className: y.marginTopForButtons,
              look: o.ButtonLooks.OUTLINED,
              color: o.ButtonColors.WHITE,
              buttonShineClassName: void 0
            }) : (0, a.jsx)(j.default, {
              forceInverted: !0,
              showIcon: !1,
              subscriptionTier: k.PremiumSubscriptionSKUs.TIER_2,
              className: y.marginTopForButtons,
              isEligibleForBogoPromotion: el
            })
          })
        })]
      }), s && !eu ? (0, a.jsxs)("div", {
        className: y.whatsNewSection,
        children: [(0, a.jsx)(v.default, {
          variant: G.PerksDiscoverabilityVariants.WHATS_NEW
        }), (0, a.jsx)(v.default, {}), ei ? (0, a.jsx)(D.default, {
          className: y.pdSparklesTop,
          variant: D.SparkleVariants.TOP
        }) : null, ei ? (0, a.jsx)(D.default, {
          className: y.pdSparklesBottom,
          variant: D.SparkleVariants.BOTTOM
        }) : null]
      }) : null, (0, a.jsx)(x.default, {
        className: s ? y.perkCardsContainerSpacingFullscreen : y.perkCardsContainerSpacingSettings
      }), (0, a.jsxs)("div", {
        className: y.planComparisonTableContainer,
        children: [(0, a.jsx)(b.default, {
          className: y.planComparisonTable,
          hideCTAs: !0
        }), s ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(I.default, {
            src: K,
            className: y.tableLeftSideDecoration,
            width: 197,
            height: 486,
            zoomable: !1
          }), (0, a.jsx)(I.default, {
            src: W,
            className: y.tableRightSideDecoration,
            width: 241,
            height: 552,
            zoomable: !1
          })]
        }) : null]
      }), (0, a.jsx)("div", {
        className: s ? y.footerSpacingFullscreen : y.footerSpacing
      }), (0, a.jsx)(U.default, {
        isVisible: !F && !V && X,
        isFullscreen: s,
        subscriptionTier: ee
      }), (0, a.jsx)(u.VisibilitySensor, {
        onChange: e => {
          e && !z && (T.default.track(B.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: eo
          }), Q(!0))
        },
        children: (0, a.jsx)("div", {
          className: y.bottomOfPageVisibilitySensor
        })
      }), (0, a.jsx)(I.default, {
        src: H,
        className: y.bottomIllustration,
        width: 112,
        height: 85,
        zoomable: !1
      })]
    });
    return s ? (0, a.jsx)(o.AdvancedScrollerAuto, {
      className: y.scroller,
      ref: n,
      children: ec
    }) : ec
  }