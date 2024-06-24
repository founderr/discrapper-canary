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
  R = t(78839),
  d = t(626135),
  I = t(74538),
  T = t(140465),
  A = t(730314),
  M = t(91802),
  S = t(104494),
  N = t(639119),
  p = t(8647),
  m = t(568126),
  C = t(605289),
  g = t(248042),
  P = t(823188),
  O = t(135785),
  f = t(498765),
  x = t(635921),
  L = t(177839),
  h = t(794484),
  b = t(392521),
  v = t(349803),
  Z = t(179984),
  D = t(409100),
  U = t(391110),
  B = t(71363),
  j = t(781800),
  G = t(474936),
  W = t(981631),
  H = t(502562),
  k = t(865215),
  K = t(735035),
  F = t(786362);
let w = e => {
    let {
      isFullscreen: s,
      selectedPremiumType: t
    } = e;
    return s && null == t || t === G.p9.TIER_2 && s ? null : (0, n.jsx)(L.Z, {
      className: s ? H.perkCardsContainerSpacingFullscreen : H.perkCardsContainerSpacingSettings
    })
  },
  V = e => {
    let {
      isFullscreen: s,
      inOfferExperience: t
    } = e;
    return s || t ? (0, n.jsx)(f.Z, {
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
      className: i()(H.whatsNewSectionBackground),
      children: [(0, n.jsx)(h.Z, {
        variant: U.R0.WHATS_NEW,
        isFullScreen: s
      }), (0, n.jsx)(h.Z, {
        isFullScreen: s,
        showAllPerksButton: s ? (0, n.jsx)(j.Z, {
          setIsAllPerksVisible: a,
          previousComponent: U.MQ.MARKETING
        }) : void 0
      }), t ? (0, n.jsx)(b.ZP, {
        className: H.pdSparklesTop,
        variant: b.u0.TOP
      }) : null, t ? (0, n.jsx)(b.ZP, {
        className: H.pdSparklesBottom,
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
    bucket: f
  } = (0, A.wj)("PremiumMarketingHome"), L = f > 0, h = a.useRef(null), [b, j] = a.useState(!1), [Y, z] = a.useState(!1), [Q, X] = a.useState(!1), [J, $] = a.useState(!1), q = (0, l.e7)([R.ZP], () => R.ZP.getPremiumTypeSubscription()), ee = null != q ? (0, I.Af)(q) : null, es = null != ee ? I.ZP.getSkuIdForPlan(ee.planId) : null, et = null !== es && es !== G.Si.TIER_2 ? G.Si.TIER_2 : null, en = (0, M.n)(), ea = null != en, [er, ei] = a.useState(!1), el = (0, S.Ng)(), eo = (0, N.N)(), e_ = null == eo ? void 0 : null === (s = eo.subscription_trial) || void 0 === s ? void 0 : s.sku_id, ec = (0, T.Nx)(), eE = (0, g.Vi)(), {
    analyticsLocations: eu
  } = (0, u.ZP)(E.Z.PREMIUM_MARKETING), eR = "PremiumMarketingHome";
  (0, c.j)({
    location: eR + " auto on",
    autoTrackExposure: !0
  }), (0, c.j)({
    location: eR + " auto off",
    autoTrackExposure: !1
  }), a.useEffect(() => {
    $(!0)
  }, []);
  let ed = (0, n.jsx)("div", {
      className: i()({
        [H.premiumTierCardsContainerSettings]: !t,
        [H.premiumTierCardsContainerFullscreen]: t
      }),
      children: (0, n.jsx)(o.$, {
        onChange: e => z(e),
        threshold: .1,
        active: !0,
        children: (0, n.jsx)(P.ZP, {
          variant: L ? t ? P.NN.MODIFIED_COPY_STORE_HOME : P.NN.MODIFIED_COPY_SETTINGS : P.NN.DEFAULT,
          showWumpus: !L,
          tier0CTAButton: e_ === G.Si.TIER_2 || eE || null != el ? (0, n.jsx)(D.Z, {
            forceInverted: !0,
            showIcon: !1,
            subscriptionTier: G.Si.TIER_0,
            className: H.marginTopForButtons,
            look: _.ButtonLooks.OUTLINED,
            color: _.ButtonColors.WHITE,
            buttonShineClassName: H.buttonShine
          }) : (0, n.jsx)(D.Z, {
            forceInverted: !0,
            showIcon: !1,
            subscriptionTier: G.Si.TIER_0,
            className: H.marginTopForButtons,
            buttonShineClassName: H.buttonShine
          }),
          tier2CTAButton: e_ === G.Si.TIER_0 ? (0, n.jsx)(D.Z, {
            forceInverted: !0,
            showIcon: !1,
            subscriptionTier: G.Si.TIER_2,
            className: H.marginTopForButtons,
            look: _.ButtonLooks.OUTLINED,
            color: _.ButtonColors.WHITE,
            buttonShineClassName: H.buttonShine
          }) : (0, n.jsx)(D.Z, {
            forceInverted: !0,
            showIcon: !1,
            subscriptionTier: G.Si.TIER_2,
            className: H.marginTopForButtons,
            isEligibleForBogoPromotion: eE,
            buttonShineClassName: H.buttonShine
          })
        })
      })
    }),
    eI = (0, n.jsxs)("div", {
      className: i()(H.container, {
        [H.settingsContainer]: !t
      }),
      "data-cy": "tier-0-marketing-page",
      children: [(0, n.jsx)(O.Z, {
        premiumSubscription: q,
        className: i()(t ? H.fullscreenExistingSubscriberSpacing : H.existingSubscriberSpacing, {
          [H.zIndex1]: ec
        }),
        isFullscreen: t
      }), (0, n.jsx)(V, {
        isFullscreen: t,
        inOfferExperience: ec
      }), !t && ea ? (0, n.jsx)(C.Z, {
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
            [H.fullscreenHero]: t,
            [H.settingsHeroNoBackground]: !t && ec,
            [H.trialMarketingMargin]: ec,
            [H.settingsHeroBogoHeight]: !t && eE,
            [H.settingsHeroBogoMarginFullscreen]: t && eE,
            [H.noTopPaddingOverride]: null != q
          }),
          entrypoint: r
        })
      }), (0, n.jsxs)("div", {
        className: H.promoBannerContainer,
        children: [(0, n.jsx)(p.Z, {
          isFullscreen: t
        }), t && ea && (0, n.jsx)(m.Z, {
          localizedPricingPromo: en
        })]
      }), f < 2 && ed, (0, n.jsx)(y, {
        isFullscreen: t,
        inOfferExperience: ec,
        setIsAllPerksVisible: ei
      }), (0, n.jsx)(w, {
        isFullscreen: t
      }), 2 === f && ed, 2 !== f && (0, n.jsxs)("div", {
        className: H.planComparisonTableContainer,
        children: [(0, n.jsx)(Z.Z, {
          className: H.planComparisonTable,
          hideCTAs: !0
        }), t ? (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(_.Image, {
            src: K,
            className: H.tableLeftSideDecoration,
            width: 197,
            height: 486,
            zoomable: !1
          }), (0, n.jsx)(_.Image, {
            src: F,
            className: H.tableRightSideDecoration,
            width: 241,
            height: 552,
            zoomable: !1
          })]
        }) : null]
      }), (0, n.jsx)("div", {
        className: t ? H.footerSpacingFullscreen : H.footerSpacing
      }), (0, n.jsx)(v.Z, {
        isVisible: !b && !Y && J,
        isFullscreen: t,
        subscriptionTier: et
      }), (0, n.jsx)(o.$, {
        onChange: e => {
          e && !Q && (d.default.track(W.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: eu
          }), X(!0))
        },
        children: (0, n.jsx)("div", {
          className: H.bottomOfPageVisibilitySensor
        })
      }), (0, n.jsx)(_.Image, {
        src: k,
        className: H.bottomIllustration,
        width: 112,
        height: 85,
        zoomable: !1
      })]
    });
  return t ? (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(_.AdvancedScrollerAuto, {
      className: H.scroller,
      ref: h,
      children: eI
    }), (0, n.jsx)(B.Z, {
      previousComponent: U.MQ.MARKETING,
      isAllPerksVisible: er,
      setIsAllPerksVisible: ei,
      isFullScreen: t
    })]
  }) : eI
}