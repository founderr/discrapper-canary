n(47120);
var s = n(735250),
  a = n(470079),
  r = n(120356),
  i = n.n(r),
  l = n(442837),
  o = n(622535),
  c = n(481060),
  d = n(634894),
  _ = n(100527),
  E = n(906732),
  u = n(78839),
  T = n(626135),
  I = n(74538),
  R = n(140465),
  C = n(730314),
  g = n(91802),
  p = n(104494),
  A = n(639119),
  N = n(8647),
  m = n(568126),
  S = n(605289),
  f = n(248042),
  h = n(823188),
  M = n(135785),
  x = n(498765),
  b = n(635921),
  O = n(177839),
  P = n(794484),
  L = n(392521),
  v = n(349803),
  Z = n(179984),
  D = n(409100),
  B = n(391110),
  U = n(71363),
  j = n(781800),
  G = n(474936),
  H = n(981631),
  y = n(502562),
  k = n(865215),
  w = n(735035),
  F = n(786362);
let V = e => {
    let {
      isFullscreen: t,
      selectedPremiumType: n
    } = e;
    return t && null == n || n === G.p9.TIER_2 && t ? null : (0, s.jsx)(O.Z, {
      className: t ? y.perkCardsContainerSpacingFullscreen : y.perkCardsContainerSpacingSettings
    })
  },
  W = e => {
    let {
      isFullscreen: t,
      inOfferExperience: n
    } = e;
    return t || n ? (0, s.jsx)(x.Z, {
      lifted: !t && n
    }) : null
  },
  K = e => {
    let {
      isFullscreen: t,
      inOfferExperience: n,
      setIsAllPerksVisible: a
    } = e;
    return t ? (0, s.jsxs)("div", {
      className: i()(y.whatsNewSectionBackground),
      children: [(0, s.jsx)(P.Z, {
        variant: B.R0.WHATS_NEW,
        isFullScreen: t
      }), (0, s.jsx)(P.Z, {
        isFullScreen: t,
        showAllPerksButton: t ? (0, s.jsx)(j.Z, {
          setIsAllPerksVisible: a,
          previousComponent: B.MQ.MARKETING
        }) : void 0
      }), n ? (0, s.jsx)(L.ZP, {
        className: y.pdSparklesTop,
        variant: L.u0.TOP
      }) : null, n ? (0, s.jsx)(L.ZP, {
        className: y.pdSparklesBottom,
        variant: L.u0.BOTTOM
      }) : null]
    }) : null
  };
t.Z = e => {
  var t;
  let {
    isFullscreen: n,
    entrypoint: r
  } = e, {
    bucket: x
  } = (0, C.wj)("PremiumMarketingHome"), O = x > 0, P = a.useRef(null), [L, j] = a.useState(!1), [Y, z] = a.useState(!1), [Q, X] = a.useState(!1), [J, q] = a.useState(!1), $ = (0, l.e7)([u.ZP], () => u.ZP.getPremiumTypeSubscription()), ee = null != $ ? (0, I.Af)($) : null, et = null != ee ? I.ZP.getSkuIdForPlan(ee.planId) : null, en = null !== et && et !== G.Si.TIER_2 ? G.Si.TIER_2 : null, es = (0, g.n)(), ea = null != es, [er, ei] = a.useState(!1), el = (0, p.Ng)(), eo = (0, A.N)(), ec = null == eo ? void 0 : null === (t = eo.subscription_trial) || void 0 === t ? void 0 : t.sku_id, ed = (0, R.Nx)(), e_ = (0, f.Vi)(), {
    analyticsLocations: eE
  } = (0, E.ZP)(_.Z.PREMIUM_MARKETING), eu = "PremiumMarketingHome";
  (0, d.j)({
    location: eu + " auto on",
    autoTrackExposure: !0
  }), (0, d.j)({
    location: eu + " auto off",
    autoTrackExposure: !1
  }), a.useEffect(() => {
    q(!0)
  }, []);
  let eT = (0, s.jsx)("div", {
      className: i()({
        [y.premiumTierCardsContainerSettings]: !n,
        [y.premiumTierCardsContainerFullscreen]: n
      }),
      children: (0, s.jsx)(o.$, {
        onChange: e => z(e),
        threshold: .1,
        active: !0,
        children: (0, s.jsx)(h.ZP, {
          variant: O ? n ? h.NN.MODIFIED_COPY_STORE_HOME : h.NN.MODIFIED_COPY_SETTINGS : h.NN.DEFAULT,
          showWumpus: !O,
          tier0CTAButton: ec === G.Si.TIER_2 || e_ || null != el ? (0, s.jsx)(D.Z, {
            forceInverted: !0,
            showIcon: !1,
            subscriptionTier: G.Si.TIER_0,
            className: y.marginTopForButtons,
            look: c.ButtonLooks.OUTLINED,
            color: c.ButtonColors.WHITE,
            buttonShineClassName: y.buttonShine
          }) : (0, s.jsx)(D.Z, {
            forceInverted: !0,
            showIcon: !1,
            subscriptionTier: G.Si.TIER_0,
            className: y.marginTopForButtons,
            buttonShineClassName: y.buttonShine
          }),
          tier2CTAButton: ec === G.Si.TIER_0 ? (0, s.jsx)(D.Z, {
            forceInverted: !0,
            showIcon: !1,
            subscriptionTier: G.Si.TIER_2,
            className: y.marginTopForButtons,
            look: c.ButtonLooks.OUTLINED,
            color: c.ButtonColors.WHITE,
            buttonShineClassName: y.buttonShine
          }) : (0, s.jsx)(D.Z, {
            forceInverted: !0,
            showIcon: !1,
            subscriptionTier: G.Si.TIER_2,
            className: y.marginTopForButtons,
            isEligibleForBogoPromotion: e_,
            buttonShineClassName: y.buttonShine
          })
        })
      })
    }),
    eI = (0, s.jsxs)("div", {
      className: i()(y.container, {
        [y.settingsContainer]: !n
      }),
      "data-cy": "tier-0-marketing-page",
      children: [(0, s.jsx)(M.Z, {
        premiumSubscription: $,
        className: i()(n ? y.fullscreenExistingSubscriberSpacing : y.existingSubscriberSpacing, {
          [y.zIndex1]: ed
        }),
        isFullscreen: n
      }), (0, s.jsx)(W, {
        isFullscreen: n,
        inOfferExperience: ed
      }), !n && ea ? (0, s.jsx)(S.Z, {
        localizedPricingPromo: es,
        smallGap: !0
      }) : (0, s.jsx)(o.$, {
        onChange: e => j(e),
        threshold: 0,
        active: !0,
        children: (0, s.jsx)(b.Z, {
          subscriptionTier: en,
          isFullscreen: n || ed,
          className: i()({
            [y.fullscreenHero]: n,
            [y.settingsHeroNoBackground]: !n && ed,
            [y.trialMarketingMargin]: ed,
            [y.settingsHeroBogoHeight]: !n && e_,
            [y.settingsHeroBogoMarginFullscreen]: n && e_,
            [y.noTopPaddingOverride]: null != $
          }),
          entrypoint: r
        })
      }), (0, s.jsxs)("div", {
        className: y.promoBannerContainer,
        children: [(0, s.jsx)(N.Z, {
          isFullscreen: n
        }), n && ea && (0, s.jsx)(m.Z, {
          localizedPricingPromo: es
        })]
      }), x < 2 && eT, (0, s.jsx)(K, {
        isFullscreen: n,
        inOfferExperience: ed,
        setIsAllPerksVisible: ei
      }), (0, s.jsx)(V, {
        isFullscreen: n
      }), 2 === x && eT, 2 !== x && (0, s.jsxs)("div", {
        className: y.planComparisonTableContainer,
        children: [(0, s.jsx)(Z.Z, {
          className: y.planComparisonTable,
          hideCTAs: !0
        }), n ? (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(c.Image, {
            src: w,
            className: y.tableLeftSideDecoration,
            width: 197,
            height: 486,
            zoomable: !1
          }), (0, s.jsx)(c.Image, {
            src: F,
            className: y.tableRightSideDecoration,
            width: 241,
            height: 552,
            zoomable: !1
          })]
        }) : null]
      }), (0, s.jsx)("div", {
        className: n ? y.footerSpacingFullscreen : y.footerSpacing
      }), (0, s.jsx)(v.Z, {
        isVisible: !L && !Y && J,
        isFullscreen: n,
        subscriptionTier: en
      }), (0, s.jsx)(o.$, {
        onChange: e => {
          e && !Q && (T.default.track(H.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: eE
          }), X(!0))
        },
        children: (0, s.jsx)("div", {
          className: y.bottomOfPageVisibilitySensor
        })
      }), (0, s.jsx)(c.Image, {
        src: k,
        className: y.bottomIllustration,
        width: 112,
        height: 85,
        zoomable: !1
      })]
    });
  return n ? (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(c.AdvancedScrollerAuto, {
      className: y.scroller,
      ref: P,
      children: eI
    }), (0, s.jsx)(U.Z, {
      previousComponent: B.MQ.MARKETING,
      isAllPerksVisible: er,
      setIsAllPerksVisible: ei,
      isFullScreen: n
    })]
  }) : eI
}