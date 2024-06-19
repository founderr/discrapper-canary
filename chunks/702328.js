t(47120);
var n = t(735250),
  a = t(470079),
  r = t(120356),
  i = t.n(r),
  l = t(442837),
  o = t(622535),
  _ = t(481060),
  c = t(634894),
  E = t(100527),
  u = t(906732),
  d = t(78839),
  R = t(626135),
  I = t(74538),
  T = t(140465),
  A = t(730314),
  M = t(91802),
  S = t(104494),
  N = t(639119),
  p = t(8647),
  m = t(568126),
  g = t(605289),
  C = t(248042),
  f = t(823188),
  P = t(135785),
  O = t(498765),
  x = t(635921),
  h = t(177839),
  L = t(794484),
  b = t(392521),
  v = t(349803),
  Z = t(179984),
  D = t(409100),
  U = t(391110),
  B = t(71363),
  j = t(781800),
  G = t(474936),
  H = t(981631),
  W = t(502562),
  k = t(865215),
  K = t(735035),
  F = t(786362);
let w = e => {
    let {
      isFullscreen: s,
      selectedPremiumType: t
    } = e;
    return s && null == t || t === G.p9.TIER_2 && s ? null : (0, n.jsx)(h.Z, {
      className: s ? W.perkCardsContainerSpacingFullscreen : W.perkCardsContainerSpacingSettings
    })
  },
  V = e => {
    let {
      isFullscreen: s,
      inOfferExperience: t
    } = e;
    return s || t ? (0, n.jsx)(O.Z, {
      lifted: !s && t
    }) : null
  },
  y = e => {
    let {
      isFullscreen: s,
      inOfferExperience: t,
      setIsAllPerksVisible: a
    } = e;
    return s ? (0, n.jsxs)("div", {
      className: i()(W.whatsNewSectionBackground),
      children: [(0, n.jsx)(L.Z, {
        variant: U.R0.WHATS_NEW,
        isFullScreen: s
      }), (0, n.jsx)(L.Z, {
        isFullScreen: s,
        showAllPerksButton: s ? (0, n.jsx)(j.Z, {
          setIsAllPerksVisible: a,
          previousComponent: U.MQ.MARKETING
        }) : void 0
      }), t ? (0, n.jsx)(b.ZP, {
        className: W.pdSparklesTop,
        variant: b.u0.TOP
      }) : null, t ? (0, n.jsx)(b.ZP, {
        className: W.pdSparklesBottom,
        variant: b.u0.BOTTOM
      }) : null]
    }) : null
  };
s.Z = e => {
  var s;
  let {
    isFullscreen: t,
    entrypoint: r
  } = e, {
    bucket: O
  } = (0, A.wj)("PremiumMarketingHome"), h = O > 0, L = a.useRef(null), [b, j] = a.useState(!1), [Y, z] = a.useState(!1), [Q, X] = a.useState(!1), [J, $] = a.useState(!1), q = (0, l.e7)([d.ZP], () => d.ZP.getPremiumTypeSubscription()), ee = null != q ? (0, I.Af)(q) : null, es = null != ee ? I.ZP.getSkuIdForPlan(ee.planId) : null, et = null !== es && es !== G.Si.TIER_2 ? G.Si.TIER_2 : null, en = (0, M.n)(), ea = null != en, [er, ei] = a.useState(!1), el = (0, S.Ng)(), eo = (0, N.N)(), e_ = null == eo ? void 0 : null === (s = eo.subscription_trial) || void 0 === s ? void 0 : s.sku_id, ec = (0, T.Nx)(), eE = (0, C.Vi)(), {
    analyticsLocations: eu
  } = (0, u.ZP)(E.Z.PREMIUM_MARKETING), ed = "PremiumMarketingHome";
  (0, c.j)({
    location: ed + " auto on",
    autoTrackExposure: !0
  }), (0, c.j)({
    location: ed + " auto off",
    autoTrackExposure: !1
  }), a.useEffect(() => {
    $(!0)
  }, []);
  let eR = (0, n.jsx)("div", {
      className: i()({
        [W.premiumTierCardsContainerSettings]: !t,
        [W.premiumTierCardsContainerFullscreen]: t
      }),
      children: (0, n.jsx)(o.$, {
        onChange: e => z(e),
        threshold: .1,
        active: !0,
        children: (0, n.jsx)(f.ZP, {
          variant: h ? t ? f.NN.MODIFIED_COPY_STORE_HOME : f.NN.MODIFIED_COPY_SETTINGS : f.NN.DEFAULT,
          showWumpus: !h,
          tier0CTAButton: e_ === G.Si.TIER_2 || eE || null != el ? (0, n.jsx)(D.Z, {
            forceInverted: !0,
            showIcon: !1,
            subscriptionTier: G.Si.TIER_0,
            className: W.marginTopForButtons,
            look: _.ButtonLooks.OUTLINED,
            color: _.ButtonColors.WHITE,
            buttonShineClassName: W.buttonShine
          }) : (0, n.jsx)(D.Z, {
            forceInverted: !0,
            showIcon: !1,
            subscriptionTier: G.Si.TIER_0,
            className: W.marginTopForButtons,
            buttonShineClassName: W.buttonShine
          }),
          tier2CTAButton: e_ === G.Si.TIER_0 ? (0, n.jsx)(D.Z, {
            forceInverted: !0,
            showIcon: !1,
            subscriptionTier: G.Si.TIER_2,
            className: W.marginTopForButtons,
            look: _.ButtonLooks.OUTLINED,
            color: _.ButtonColors.WHITE,
            buttonShineClassName: W.buttonShine
          }) : (0, n.jsx)(D.Z, {
            forceInverted: !0,
            showIcon: !1,
            subscriptionTier: G.Si.TIER_2,
            className: W.marginTopForButtons,
            isEligibleForBogoPromotion: eE,
            buttonShineClassName: W.buttonShine
          })
        })
      })
    }),
    eI = (0, n.jsxs)("div", {
      className: i()(W.container, {
        [W.settingsContainer]: !t
      }),
      "data-cy": "tier-0-marketing-page",
      children: [(0, n.jsx)(P.Z, {
        premiumSubscription: q,
        className: i()(t ? W.fullscreenExistingSubscriberSpacing : W.existingSubscriberSpacing, {
          [W.zIndex1]: ec
        }),
        isFullscreen: t
      }), (0, n.jsx)(V, {
        isFullscreen: t,
        inOfferExperience: ec
      }), !t && ea ? (0, n.jsx)(g.Z, {
        localizedPricingPromo: en,
        smallGap: !0
      }) : (0, n.jsx)(o.$, {
        onChange: e => j(e),
        threshold: 0,
        active: !0,
        children: (0, n.jsx)(x.Z, {
          subscriptionTier: et,
          isFullscreen: t || ec,
          className: i()({
            [W.fullscreenHero]: t,
            [W.settingsHeroNoBackground]: !t && ec,
            [W.trialMarketingMargin]: ec,
            [W.settingsHeroBogoHeight]: !t && eE,
            [W.settingsHeroBogoMarginFullscreen]: t && eE,
            [W.noTopPaddingOverride]: null != q
          }),
          entrypoint: r
        })
      }), (0, n.jsxs)("div", {
        className: W.promoBannerContainer,
        children: [(0, n.jsx)(p.Z, {
          isFullscreen: t
        }), t && ea && (0, n.jsx)(m.Z, {
          localizedPricingPromo: en
        })]
      }), O < 2 && eR, (0, n.jsx)(y, {
        isFullscreen: t,
        inOfferExperience: ec,
        setIsAllPerksVisible: ei
      }), (0, n.jsx)(w, {
        isFullscreen: t
      }), 2 === O && eR, 2 !== O && (0, n.jsxs)("div", {
        className: W.planComparisonTableContainer,
        children: [(0, n.jsx)(Z.Z, {
          className: W.planComparisonTable,
          hideCTAs: !0
        }), t ? (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(_.Image, {
            src: K,
            className: W.tableLeftSideDecoration,
            width: 197,
            height: 486,
            zoomable: !1
          }), (0, n.jsx)(_.Image, {
            src: F,
            className: W.tableRightSideDecoration,
            width: 241,
            height: 552,
            zoomable: !1
          })]
        }) : null]
      }), (0, n.jsx)("div", {
        className: t ? W.footerSpacingFullscreen : W.footerSpacing
      }), (0, n.jsx)(v.Z, {
        isVisible: !b && !Y && J,
        isFullscreen: t,
        subscriptionTier: et
      }), (0, n.jsx)(o.$, {
        onChange: e => {
          e && !Q && (R.default.track(H.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: eu
          }), X(!0))
        },
        children: (0, n.jsx)("div", {
          className: W.bottomOfPageVisibilitySensor
        })
      }), (0, n.jsx)(_.Image, {
        src: k,
        className: W.bottomIllustration,
        width: 112,
        height: 85,
        zoomable: !1
      })]
    });
  return t ? (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(_.AdvancedScrollerAuto, {
      className: W.scroller,
      ref: L,
      children: eI
    }), (0, n.jsx)(B.Z, {
      previousComponent: U.MQ.MARKETING,
      isAllPerksVisible: er,
      setIsAllPerksVisible: ei,
      isFullScreen: t
    })]
  }) : eI
}