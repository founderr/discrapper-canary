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
  u = n(906732),
  E = n(78839),
  T = n(626135),
  I = n(74538),
  R = n(140465),
  C = n(730314),
  g = n(91802),
  p = n(104494),
  A = n(639119),
  m = n(8647),
  N = n(568126),
  f = n(605289),
  S = n(248042),
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
  j = n(71363),
  U = n(781800),
  G = n(474936),
  y = n(981631),
  k = n(556613),
  H = n(865215),
  w = n(735035),
  F = n(786362);
let V = e => {
let {
  isFullscreen: t,
  selectedPremiumType: n
} = e;
return t && null == n || n === G.p9.TIER_2 && t ? null : (0, s.jsx)(O.Z, {
  className: t ? k.perkCardsContainerSpacingFullscreen : k.perkCardsContainerSpacingSettings
});
  },
  W = e => {
let {
  isFullscreen: t,
  inOfferExperience: n
} = e;
return t || n ? (0, s.jsx)(x.Z, {
  lifted: !t && n
}) : null;
  },
  K = e => {
let {
  isFullscreen: t,
  inOfferExperience: n,
  setIsAllPerksVisible: a
} = e;
return t ? (0, s.jsxs)('div', {
  className: i()(k.whatsNewSectionBackground),
  children: [
    (0, s.jsx)(P.Z, {
      variant: B.R0.WHATS_NEW,
      isFullScreen: t
    }),
    (0, s.jsx)(P.Z, {
      isFullScreen: t,
      showAllPerksButton: t ? (0, s.jsx)(U.Z, {
        setIsAllPerksVisible: a,
        previousComponent: B.MQ.MARKETING
      }) : void 0
    }),
    n ? (0, s.jsx)(L.ZP, {
      className: k.pdSparklesTop,
      variant: L.u0.TOP
    }) : null,
    n ? (0, s.jsx)(L.ZP, {
      className: k.pdSparklesBottom,
      variant: L.u0.BOTTOM
    }) : null
  ]
}) : null;
  };
t.Z = e => {
  var t;
  let {
isFullscreen: n,
entrypoint: r
  } = e, {
bucket: x
  } = (0, C.wj)('PremiumMarketingHome'), O = x > 0, P = a.useRef(null), [L, U] = a.useState(!1), [Y, z] = a.useState(!1), [Q, q] = a.useState(!1), [J, X] = a.useState(!1), $ = (0, l.e7)([E.ZP], () => E.ZP.getPremiumTypeSubscription()), ee = null != $ ? (0, I.Af)($) : null, et = null != ee ? I.ZP.getSkuIdForPlan(ee.planId) : null, en = null !== et && et !== G.Si.TIER_2 ? G.Si.TIER_2 : null, es = (0, g.n)(), ea = null != es, [er, ei] = a.useState(!1), el = (0, p.Ng)(), eo = (0, A.N)(), ec = null == eo ? void 0 : null === (t = eo.subscription_trial) || void 0 === t ? void 0 : t.sku_id, ed = (0, R.Nx)(), e_ = (0, S.Vi)(), {
analyticsLocations: eu
  } = (0, u.ZP)(_.Z.PREMIUM_MARKETING), eE = 'PremiumMarketingHome';
  (0, d.j)({
location: eE + ' auto on',
autoTrackExposure: !0
  }), (0, d.j)({
location: eE + ' auto off',
autoTrackExposure: !1
  }), a.useEffect(() => {
X(!0);
  }, []);
  let eT = (0, s.jsx)('div', {
  className: i()({
    [k.premiumTierCardsContainerSettings]: !n,
    [k.premiumTierCardsContainerFullscreen]: n
  }),
  children: (0, s.jsx)(o.$, {
    onChange: e => z(e),
    threshold: 0.1,
    active: !0,
    children: (0, s.jsx)(h.ZP, {
      variant: O ? n ? h.NN.MODIFIED_COPY_STORE_HOME : h.NN.MODIFIED_COPY_SETTINGS : h.NN.DEFAULT,
      showWumpus: !O,
      tier0CTAButton: ec === G.Si.TIER_2 || e_ || null != el ? (0, s.jsx)(D.Z, {
        forceInverted: !0,
        showIcon: !1,
        subscriptionTier: G.Si.TIER_0,
        className: k.marginTopForButtons,
        look: c.ButtonLooks.OUTLINED,
        color: c.ButtonColors.WHITE,
        buttonShineClassName: k.buttonShine
      }) : (0, s.jsx)(D.Z, {
        forceInverted: !0,
        showIcon: !1,
        subscriptionTier: G.Si.TIER_0,
        className: k.marginTopForButtons,
        buttonShineClassName: k.buttonShine
      }),
      tier2CTAButton: ec === G.Si.TIER_0 ? (0, s.jsx)(D.Z, {
        forceInverted: !0,
        showIcon: !1,
        subscriptionTier: G.Si.TIER_2,
        className: k.marginTopForButtons,
        look: c.ButtonLooks.OUTLINED,
        color: c.ButtonColors.WHITE,
        buttonShineClassName: k.buttonShine
      }) : (0, s.jsx)(D.Z, {
        forceInverted: !0,
        showIcon: !1,
        subscriptionTier: G.Si.TIER_2,
        className: k.marginTopForButtons,
        isEligibleForBogoPromotion: e_,
        buttonShineClassName: k.buttonShine
      })
    })
  })
}),
eI = (0, s.jsxs)('div', {
  className: i()(k.container, {
    [k.settingsContainer]: !n
  }),
  'data-cy': 'tier-0-marketing-page',
  children: [
    (0, s.jsx)(M.Z, {
      premiumSubscription: $,
      className: i()(n ? k.fullscreenExistingSubscriberSpacing : k.existingSubscriberSpacing, {
        [k.zIndex1]: ed
      }),
      isFullscreen: n
    }),
    (0, s.jsx)(W, {
      isFullscreen: n,
      inOfferExperience: ed
    }),
    !n && ea ? (0, s.jsx)(f.Z, {
      localizedPricingPromo: es,
      smallGap: !0
    }) : (0, s.jsx)(o.$, {
      onChange: e => U(e),
      threshold: 0,
      active: !0,
      children: (0, s.jsx)(b.Z, {
        subscriptionTier: en,
        isFullscreen: n || ed,
        className: i()({
          [k.fullscreenHero]: n && !O,
          [k.fullscreenHeroModified]: n && x > 1,
          [k.settingsHeroNoBackground]: !n && ed,
          [k.trialMarketingMargin]: ed,
          [k.settingsHeroBogoHeight]: !n && e_,
          [k.settingsHeroBogoMarginFullscreen]: n && e_,
          [k.noTopPaddingOverride]: null != $
        }),
        entrypoint: r
      })
    }),
    (0, s.jsxs)('div', {
      className: k.promoBannerContainer,
      children: [
        (0, s.jsx)(m.Z, {
          isFullScreen: n
        }),
        n && ea && (0, s.jsx)(N.Z, {
          localizedPricingPromo: es
        })
      ]
    }),
    x < 2 && eT,
    (0, s.jsx)(K, {
      isFullscreen: n,
      inOfferExperience: ed,
      setIsAllPerksVisible: ei
    }),
    (0, s.jsx)(V, {
      isFullscreen: n
    }),
    2 === x && eT,
    2 !== x && (0, s.jsxs)('div', {
      className: k.planComparisonTableContainer,
      children: [
        (0, s.jsx)(Z.Z, {
          className: k.planComparisonTable,
          hideCTAs: !0
        }),
        n ? (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(c.Image, {
              src: w,
              className: k.tableLeftSideDecoration,
              width: 197,
              height: 486,
              zoomable: !1
            }),
            (0, s.jsx)(c.Image, {
              src: F,
              className: k.tableRightSideDecoration,
              width: 241,
              height: 552,
              zoomable: !1
            })
          ]
        }) : null
      ]
    }),
    (0, s.jsx)('div', {
      className: n ? k.footerSpacingFullscreen : k.footerSpacing
    }),
    (0, s.jsx)(v.Z, {
      isVisible: !L && !Y && J,
      isFullscreen: n,
      subscriptionTier: en
    }),
    (0, s.jsx)(o.$, {
      onChange: e => {
        e && !Q && (T.default.track(y.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
          location_stack: eu
        }), q(!0));
      },
      children: (0, s.jsx)('div', {
        className: k.bottomOfPageVisibilitySensor
      })
    }),
    (0, s.jsx)(c.Image, {
      src: H,
      className: k.bottomIllustration,
      width: 112,
      height: 85,
      zoomable: !1
    })
  ]
});
  return n ? (0, s.jsxs)(s.Fragment, {
children: [
  (0, s.jsx)(c.AdvancedScrollerAuto, {
    className: k.scroller,
    ref: P,
    children: eI
  }),
  (0, s.jsx)(j.Z, {
    previousComponent: B.MQ.MARKETING,
    isAllPerksVisible: er,
    setIsAllPerksVisible: ei,
    isFullScreen: n
  })
]
  }) : eI;
};