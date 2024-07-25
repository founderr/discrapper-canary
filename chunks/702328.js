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
  E = n(433811),
  T = n(78839),
  I = n(626135),
  R = n(74538),
  C = n(140465),
  g = n(730314),
  p = n(91802),
  m = n(104494),
  A = n(639119),
  N = n(8647),
  f = n(568126),
  S = n(605289),
  h = n(248042),
  M = n(823188),
  x = n(135785),
  b = n(498765),
  O = n(635921),
  P = n(177839),
  v = n(794484),
  L = n(392521),
  Z = n(349803),
  D = n(179984),
  B = n(409100),
  j = n(391110),
  U = n(71363),
  G = n(781800),
  y = n(474936),
  k = n(981631),
  H = n(374292),
  w = n(865215),
  F = n(735035),
  V = n(786362);
let W = e => {
let {
  isFullscreen: t,
  selectedPremiumType: n
} = e;
return t && null == n || n === y.p9.TIER_2 && t ? null : (0, s.jsx)(P.Z, {
  className: t ? H.perkCardsContainerSpacingFullscreen : H.perkCardsContainerSpacingSettings
});
  },
  K = e => {
let {
  isFullscreen: t,
  inOfferExperience: n
} = e;
return t || n ? (0, s.jsx)(b.Z, {
  lifted: !t && n
}) : null;
  },
  Y = e => {
let {
  isFullscreen: t,
  inOfferExperience: n,
  setIsAllPerksVisible: a
} = e;
return t ? (0, s.jsxs)('div', {
  className: i()(H.whatsNewSectionBackground),
  children: [
    (0, s.jsx)(v.Z, {
      variant: j.R0.WHATS_NEW,
      isFullScreen: t
    }),
    (0, s.jsx)(v.Z, {
      isFullScreen: t,
      showAllPerksButton: t ? (0, s.jsx)(G.Z, {
        setIsAllPerksVisible: a,
        previousComponent: j.MQ.MARKETING
      }) : void 0
    }),
    n ? (0, s.jsx)(L.ZP, {
      className: H.pdSparklesTop,
      variant: L.u0.TOP
    }) : null,
    n ? (0, s.jsx)(L.ZP, {
      className: H.pdSparklesBottom,
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
  } = e;
  a.useEffect(() => {
E.X.trigger();
  }, []);
  let {
bucket: b
  } = (0, g.wj)('PremiumMarketingHome'), P = b > 0, v = a.useRef(null), [L, G] = a.useState(!1), [z, Q] = a.useState(!1), [q, J] = a.useState(!1), [X, $] = a.useState(!1), ee = (0, l.e7)([T.ZP], () => T.ZP.getPremiumTypeSubscription()), et = null != ee ? (0, R.Af)(ee) : null, en = null != et ? R.ZP.getSkuIdForPlan(et.planId) : null, es = null !== en && en !== y.Si.TIER_2 ? y.Si.TIER_2 : null, ea = (0, p.n)(), er = null != ea, [ei, el] = a.useState(!1), eo = (0, m.Ng)(), ec = (0, A.N)(), ed = null == ec ? void 0 : null === (t = ec.subscription_trial) || void 0 === t ? void 0 : t.sku_id, e_ = (0, C.Nx)(), eu = (0, h.Vi)(), {
analyticsLocations: eE
  } = (0, u.ZP)(_.Z.PREMIUM_MARKETING), eT = 'PremiumMarketingHome';
  (0, d.j)({
location: eT + ' auto on',
autoTrackExposure: !0
  }), (0, d.j)({
location: eT + ' auto off',
autoTrackExposure: !1
  }), a.useEffect(() => {
$(!0);
  }, []);
  let eI = (0, s.jsx)('div', {
  className: i()({
    [H.premiumTierCardsContainerSettings]: !n,
    [H.premiumTierCardsContainerFullscreen]: n
  }),
  children: (0, s.jsx)(o.$, {
    onChange: e => Q(e),
    threshold: 0.1,
    active: !0,
    children: (0, s.jsx)(M.ZP, {
      variant: P ? n ? M.NN.MODIFIED_COPY_STORE_HOME : M.NN.MODIFIED_COPY_SETTINGS : M.NN.DEFAULT,
      showWumpus: !P,
      tier0CTAButton: ed === y.Si.TIER_2 || eu || null != eo ? (0, s.jsx)(B.Z, {
        forceInverted: !0,
        showIcon: !1,
        subscriptionTier: y.Si.TIER_0,
        className: H.marginTopForButtons,
        look: c.ButtonLooks.OUTLINED,
        color: c.ButtonColors.WHITE,
        buttonShineClassName: H.buttonShine
      }) : (0, s.jsx)(B.Z, {
        forceInverted: !0,
        showIcon: !1,
        subscriptionTier: y.Si.TIER_0,
        className: H.marginTopForButtons,
        buttonShineClassName: H.buttonShine
      }),
      tier2CTAButton: ed === y.Si.TIER_0 ? (0, s.jsx)(B.Z, {
        forceInverted: !0,
        showIcon: !1,
        subscriptionTier: y.Si.TIER_2,
        className: H.marginTopForButtons,
        look: c.ButtonLooks.OUTLINED,
        color: c.ButtonColors.WHITE,
        buttonShineClassName: H.buttonShine
      }) : (0, s.jsx)(B.Z, {
        forceInverted: !0,
        showIcon: !1,
        subscriptionTier: y.Si.TIER_2,
        className: H.marginTopForButtons,
        isEligibleForBogoPromotion: eu,
        buttonShineClassName: H.buttonShine
      })
    })
  })
}),
eR = (0, s.jsxs)('div', {
  className: i()(H.container, {
    [H.settingsContainer]: !n
  }),
  'data-cy': 'tier-0-marketing-page',
  children: [
    (0, s.jsx)(x.Z, {
      premiumSubscription: ee,
      className: i()(n ? H.fullscreenExistingSubscriberSpacing : H.existingSubscriberSpacing, {
        [H.zIndex1]: e_
      }),
      isFullscreen: n
    }),
    (0, s.jsx)(K, {
      isFullscreen: n,
      inOfferExperience: e_
    }),
    !n && er ? (0, s.jsx)(S.Z, {
      localizedPricingPromo: ea,
      smallGap: !0
    }) : (0, s.jsx)(o.$, {
      onChange: e => G(e),
      threshold: 0,
      active: !0,
      children: (0, s.jsx)(O.Z, {
        subscriptionTier: es,
        isFullscreen: n || e_,
        className: i()({
          [H.fullscreenHero]: n && !P,
          [H.fullscreenHeroModified]: n && b > 1,
          [H.settingsHeroNoBackground]: !n && e_,
          [H.trialMarketingMargin]: e_,
          [H.settingsHeroBogoHeight]: !n && eu,
          [H.settingsHeroBogoMarginFullscreen]: n && eu,
          [H.noTopPaddingOverride]: null != ee
        }),
        entrypoint: r
      })
    }),
    (0, s.jsxs)('div', {
      className: H.promoBannerContainer,
      children: [
        (0, s.jsx)(N.Z, {
          isFullScreen: n
        }),
        n && er && (0, s.jsx)(f.Z, {
          localizedPricingPromo: ea
        })
      ]
    }),
    b < 2 && eI,
    (0, s.jsx)(Y, {
      isFullscreen: n,
      inOfferExperience: e_,
      setIsAllPerksVisible: el
    }),
    (0, s.jsx)(W, {
      isFullscreen: n
    }),
    2 === b && eI,
    2 !== b && (0, s.jsxs)('div', {
      className: H.planComparisonTableContainer,
      children: [
        (0, s.jsx)(D.Z, {
          className: H.planComparisonTable,
          hideCTAs: !0
        }),
        n ? (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(c.Image, {
              src: F,
              className: H.tableLeftSideDecoration,
              width: 197,
              height: 486,
              zoomable: !1
            }),
            (0, s.jsx)(c.Image, {
              src: V,
              className: H.tableRightSideDecoration,
              width: 241,
              height: 552,
              zoomable: !1
            })
          ]
        }) : null
      ]
    }),
    (0, s.jsx)('div', {
      className: n ? H.footerSpacingFullscreen : H.footerSpacing
    }),
    (0, s.jsx)(Z.Z, {
      isVisible: !L && !z && X,
      isFullscreen: n,
      subscriptionTier: es
    }),
    (0, s.jsx)(o.$, {
      onChange: e => {
        e && !q && (I.default.track(k.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
          location_stack: eE
        }), J(!0));
      },
      children: (0, s.jsx)('div', {
        className: H.bottomOfPageVisibilitySensor
      })
    }),
    (0, s.jsx)(c.Image, {
      src: w,
      className: H.bottomIllustration,
      width: 112,
      height: 85,
      zoomable: !1
    })
  ]
});
  return n ? (0, s.jsxs)(s.Fragment, {
children: [
  (0, s.jsx)(c.AdvancedScrollerAuto, {
    className: H.scroller,
    ref: v,
    children: eR
  }),
  (0, s.jsx)(U.Z, {
    previousComponent: j.MQ.MARKETING,
    isAllPerksVisible: ei,
    setIsAllPerksVisible: el,
    isFullScreen: n
  })
]
  }) : eR;
};