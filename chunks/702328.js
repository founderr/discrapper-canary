s(47120);
var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  l = s(442837),
  o = s(622535),
  c = s(481060),
  E = s(634894),
  _ = s(100527),
  u = s(906732),
  d = s(78839),
  T = s(626135),
  I = s(74538),
  R = s(140465),
  A = s(730314),
  N = s(91802),
  C = s(104494),
  g = s(639119),
  m = s(8647),
  M = s(568126),
  S = s(605289),
  p = s(248042),
  h = s(823188),
  f = s(135785),
  O = s(498765),
  x = s(635921),
  L = s(177839),
  P = s(794484),
  v = s(392521),
  Z = s(349803),
  b = s(179984),
  D = s(409100),
  U = s(391110),
  j = s(71363),
  G = s(781800),
  B = s(474936),
  H = s(981631),
  y = s(502562),
  k = s(865215),
  V = s(735035),
  F = s(786362);
let w = e => {
    let {
      isFullscreen: t,
      selectedPremiumType: s
    } = e;
    return t && null == s || s === B.p9.TIER_2 && t ? null : (0, n.jsx)(L.Z, {
      className: t ? y.perkCardsContainerSpacingFullscreen : y.perkCardsContainerSpacingSettings
    })
  },
  W = e => {
    let {
      isFullscreen: t,
      inOfferExperience: s
    } = e;
    return t || s ? (0, n.jsx)(O.Z, {
      lifted: !t && s
    }) : null
  },
  K = e => {
    let {
      isFullscreen: t,
      inOfferExperience: s,
      setIsAllPerksVisible: a
    } = e;
    return t ? (0, n.jsxs)("div", {
      className: r()(y.whatsNewSectionBackground),
      children: [(0, n.jsx)(P.Z, {
        variant: U.R0.WHATS_NEW,
        isFullScreen: t
      }), (0, n.jsx)(P.Z, {
        isFullScreen: t,
        showAllPerksButton: t ? (0, n.jsx)(G.Z, {
          setIsAllPerksVisible: a,
          previousComponent: U.MQ.MARKETING
        }) : void 0
      }), s ? (0, n.jsx)(v.ZP, {
        className: y.pdSparklesTop,
        variant: v.u0.TOP
      }) : null, s ? (0, n.jsx)(v.ZP, {
        className: y.pdSparklesBottom,
        variant: v.u0.BOTTOM
      }) : null]
    }) : null
  };
t.Z = e => {
  var t;
  let {
    isFullscreen: s,
    entrypoint: i
  } = e, {
    bucket: O
  } = (0, A.wj)("PremiumMarketingHome"), L = O > 0, P = a.useRef(null), [v, G] = a.useState(!1), [Y, z] = a.useState(!1), [Q, X] = a.useState(!1), [q, J] = a.useState(!1), $ = (0, l.e7)([d.ZP], () => d.ZP.getPremiumTypeSubscription()), ee = null != $ ? (0, I.Af)($) : null, et = null != ee ? I.ZP.getSkuIdForPlan(ee.planId) : null, es = null !== et && et !== B.Si.TIER_2 ? B.Si.TIER_2 : null, en = (0, N.n)(), ea = null != en, [ei, er] = a.useState(!1), el = (0, C.Ng)(), eo = (0, g.N)(), ec = null == eo ? void 0 : null === (t = eo.subscription_trial) || void 0 === t ? void 0 : t.sku_id, eE = (0, R.Nx)(), e_ = (0, p.Vi)(), {
    analyticsLocations: eu
  } = (0, u.ZP)(_.Z.PREMIUM_MARKETING), ed = "PremiumMarketingHome";
  (0, E.j)({
    location: ed + " auto on",
    autoTrackExposure: !0
  }), (0, E.j)({
    location: ed + " auto off",
    autoTrackExposure: !1
  }), a.useEffect(() => {
    J(!0)
  }, []);
  let eT = (0, n.jsx)("div", {
      className: r()({
        [y.premiumTierCardsContainerSettings]: !s,
        [y.premiumTierCardsContainerFullscreen]: s
      }),
      children: (0, n.jsx)(o.$, {
        onChange: e => z(e),
        threshold: .1,
        active: !0,
        children: (0, n.jsx)(h.ZP, {
          variant: L ? s ? h.NN.MODIFIED_COPY_STORE_HOME : h.NN.MODIFIED_COPY_SETTINGS : h.NN.DEFAULT,
          showWumpus: !L,
          tier0CTAButton: ec === B.Si.TIER_2 || e_ || null != el ? (0, n.jsx)(D.Z, {
            forceInverted: !0,
            showIcon: !1,
            subscriptionTier: B.Si.TIER_0,
            className: y.marginTopForButtons,
            look: c.ButtonLooks.OUTLINED,
            color: c.ButtonColors.WHITE,
            buttonShineClassName: y.buttonShine
          }) : (0, n.jsx)(D.Z, {
            forceInverted: !0,
            showIcon: !1,
            subscriptionTier: B.Si.TIER_0,
            className: y.marginTopForButtons,
            buttonShineClassName: y.buttonShine
          }),
          tier2CTAButton: ec === B.Si.TIER_0 ? (0, n.jsx)(D.Z, {
            forceInverted: !0,
            showIcon: !1,
            subscriptionTier: B.Si.TIER_2,
            className: y.marginTopForButtons,
            look: c.ButtonLooks.OUTLINED,
            color: c.ButtonColors.WHITE,
            buttonShineClassName: y.buttonShine
          }) : (0, n.jsx)(D.Z, {
            forceInverted: !0,
            showIcon: !1,
            subscriptionTier: B.Si.TIER_2,
            className: y.marginTopForButtons,
            isEligibleForBogoPromotion: e_,
            buttonShineClassName: y.buttonShine
          })
        })
      })
    }),
    eI = (0, n.jsxs)("div", {
      className: r()(y.container, {
        [y.settingsContainer]: !s
      }),
      "data-cy": "tier-0-marketing-page",
      children: [(0, n.jsx)(f.Z, {
        premiumSubscription: $,
        className: r()(s ? y.fullscreenExistingSubscriberSpacing : y.existingSubscriberSpacing, {
          [y.zIndex1]: eE
        }),
        isFullscreen: s
      }), (0, n.jsx)(W, {
        isFullscreen: s,
        inOfferExperience: eE
      }), !s && ea ? (0, n.jsx)(S.Z, {
        localizedPricingPromo: en,
        smallGap: !0
      }) : (0, n.jsx)(o.$, {
        onChange: e => G(e),
        threshold: 0,
        active: !0,
        children: (0, n.jsx)(x.Z, {
          subscriptionTier: es,
          isFullscreen: s || eE,
          className: r()({
            [y.fullscreenHero]: s,
            [y.settingsHeroNoBackground]: !s && eE,
            [y.trialMarketingMargin]: eE,
            [y.settingsHeroBogoHeight]: !s && e_,
            [y.settingsHeroBogoMarginFullscreen]: s && e_,
            [y.noTopPaddingOverride]: null != $
          }),
          entrypoint: i
        })
      }), (0, n.jsxs)("div", {
        className: y.promoBannerContainer,
        children: [(0, n.jsx)(m.Z, {
          isFullscreen: s
        }), s && ea && (0, n.jsx)(M.Z, {
          localizedPricingPromo: en
        })]
      }), O < 2 && eT, (0, n.jsx)(K, {
        isFullscreen: s,
        inOfferExperience: eE,
        setIsAllPerksVisible: er
      }), (0, n.jsx)(w, {
        isFullscreen: s
      }), 2 === O && eT, 2 !== O && (0, n.jsxs)("div", {
        className: y.planComparisonTableContainer,
        children: [(0, n.jsx)(b.Z, {
          className: y.planComparisonTable,
          hideCTAs: !0
        }), s ? (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(c.Image, {
            src: V,
            className: y.tableLeftSideDecoration,
            width: 197,
            height: 486,
            zoomable: !1
          }), (0, n.jsx)(c.Image, {
            src: F,
            className: y.tableRightSideDecoration,
            width: 241,
            height: 552,
            zoomable: !1
          })]
        }) : null]
      }), (0, n.jsx)("div", {
        className: s ? y.footerSpacingFullscreen : y.footerSpacing
      }), (0, n.jsx)(Z.Z, {
        isVisible: !v && !Y && q,
        isFullscreen: s,
        subscriptionTier: es
      }), (0, n.jsx)(o.$, {
        onChange: e => {
          e && !Q && (T.default.track(H.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: eu
          }), X(!0))
        },
        children: (0, n.jsx)("div", {
          className: y.bottomOfPageVisibilitySensor
        })
      }), (0, n.jsx)(c.Image, {
        src: k,
        className: y.bottomIllustration,
        width: 112,
        height: 85,
        zoomable: !1
      })]
    });
  return s ? (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(c.AdvancedScrollerAuto, {
      className: y.scroller,
      ref: P,
      children: eI
    }), (0, n.jsx)(j.Z, {
      previousComponent: U.MQ.MARKETING,
      isAllPerksVisible: ei,
      setIsAllPerksVisible: er,
      isFullScreen: s
    })]
  }) : eI
}