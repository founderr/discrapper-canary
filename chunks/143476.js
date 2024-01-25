"use strict";
s.r(t), s.d(t, {
  default: function() {
    return W
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  r = s("414456"),
  i = s.n(r),
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
  A = s("959905"),
  m = s("154889"),
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
  y = s("646718"),
  k = s("49111"),
  B = s("880552"),
  H = s("679324"),
  K = s("905498"),
  F = s("452637"),
  W = e => {
    var t;
    let {
      isFullscreen: s
    } = e, r = n.useRef(null), [W, w] = n.useState(!1), [V, Y] = n.useState(!1), [z, X] = n.useState(!1), [Q, J] = n.useState(!1), Z = (0, l.useStateFromStores)([E.default], () => E.default.getPremiumTypeSubscription()), q = null != Z ? (0, f.getPremiumPlanItem)(Z) : null, $ = null != q ? f.default.getSkuIdForPlan(q.planId) : null, ee = null !== $ && $ !== y.PremiumSubscriptionSKUs.TIER_2 ? y.PremiumSubscriptionSKUs.TIER_2 : null, et = (0, A.useLocalizedPromoQuery)(), es = null != et, ea = (0, m.usePremiumDiscountOffer)(), en = (0, N.usePremiumTrialOffer)(), er = null == en ? void 0 : null === (t = en.subscription_trial) || void 0 === t ? void 0 : t.sku_id, ei = (0, S.useIsInPremiumOfferExperience)(), el = (0, P.useIsEligibleForBogoPromotion)(), {
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
    }), n.useEffect(() => {
      J(!0)
    }, []);
    let ec = (0, a.jsxs)("div", {
      className: i(B.container, {
        [B.settingsContainer]: !s
      }),
      "data-cy": "tier-0-marketing-page",
      children: [(0, a.jsx)(M.default, {
        premiumSubscription: Z,
        className: i(s ? B.fullscreenExistingSubscriberSpacing : B.existingSubscriberSpacing, {
          [B.zIndex1]: ei
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
            [B.fullscreenHero]: s,
            [B.settingsHeroNoBackground]: !s && ei,
            [B.trialMarketingMargin]: ei,
            [B.settingsHeroBogoHeight]: !s && el,
            [B.settingsHeroBogoMarginFullscreen]: s && el,
            [B.noTopPaddingOverride]: null != Z
          })
        })
      }), (0, a.jsxs)("div", {
        className: s ? B.premiumTierCardsContainerFullscreen : B.premiumTierCardsContainerSettings,
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
            tier0CTAButton: er === y.PremiumSubscriptionSKUs.TIER_2 || el || null != ea ? (0, a.jsx)(j.default, {
              forceInverted: !0,
              showIcon: !1,
              subscriptionTier: y.PremiumSubscriptionSKUs.TIER_0,
              className: B.marginTopForButtons,
              look: o.ButtonLooks.OUTLINED,
              color: o.ButtonColors.WHITE,
              buttonShineClassName: void 0
            }) : (0, a.jsx)(j.default, {
              forceInverted: !0,
              showIcon: !1,
              subscriptionTier: y.PremiumSubscriptionSKUs.TIER_0,
              className: B.marginTopForButtons
            }),
            tier2CTAButton: er === y.PremiumSubscriptionSKUs.TIER_0 ? (0, a.jsx)(j.default, {
              forceInverted: !0,
              showIcon: !1,
              subscriptionTier: y.PremiumSubscriptionSKUs.TIER_2,
              className: B.marginTopForButtons,
              look: o.ButtonLooks.OUTLINED,
              color: o.ButtonColors.WHITE,
              buttonShineClassName: void 0
            }) : (0, a.jsx)(j.default, {
              forceInverted: !0,
              showIcon: !1,
              subscriptionTier: y.PremiumSubscriptionSKUs.TIER_2,
              className: B.marginTopForButtons,
              isEligibleForBogoPromotion: el
            })
          })
        })]
      }), s && !eu ? (0, a.jsxs)("div", {
        className: B.whatsNewSection,
        children: [(0, a.jsx)(v.default, {
          variant: G.PerksDiscoverabilityVariants.WHATS_NEW
        }), (0, a.jsx)(v.default, {}), ei ? (0, a.jsx)(D.default, {
          className: B.pdSparklesTop,
          variant: D.SparkleVariants.TOP
        }) : null, ei ? (0, a.jsx)(D.default, {
          className: B.pdSparklesBottom,
          variant: D.SparkleVariants.BOTTOM
        }) : null]
      }) : null, (0, a.jsx)(x.default, {
        className: s ? B.perkCardsContainerSpacingFullscreen : B.perkCardsContainerSpacingSettings
      }), (0, a.jsxs)("div", {
        className: B.planComparisonTableContainer,
        children: [(0, a.jsx)(b.default, {
          className: B.planComparisonTable,
          hideCTAs: !0
        }), s ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(I.default, {
            src: K,
            className: B.tableLeftSideDecoration,
            width: 197,
            height: 486,
            zoomable: !1
          }), (0, a.jsx)(I.default, {
            src: F,
            className: B.tableRightSideDecoration,
            width: 241,
            height: 552,
            zoomable: !1
          })]
        }) : null]
      }), (0, a.jsx)("div", {
        className: s ? B.footerSpacingFullscreen : B.footerSpacing
      }), (0, a.jsx)(U.default, {
        isVisible: !W && !V && Q,
        isFullscreen: s,
        subscriptionTier: ee
      }), (0, a.jsx)(u.VisibilitySensor, {
        onChange: e => {
          e && !z && (T.default.track(k.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: eo
          }), X(!0))
        },
        children: (0, a.jsx)("div", {
          className: B.bottomOfPageVisibilitySensor
        })
      }), (0, a.jsx)(I.default, {
        src: H,
        className: B.bottomIllustration,
        width: 112,
        height: 85,
        zoomable: !1
      })]
    });
    return s ? (0, a.jsx)(o.AdvancedScrollerAuto, {
      className: B.scroller,
      ref: r,
      children: ec
    }) : ec
  }