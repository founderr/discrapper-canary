"use strict";
s.r(t);
var a = s("735250");
s("470079");
var r = s("120356"),
  i = s.n(r),
  n = s("442837"),
  l = s("481060"),
  o = s("100527"),
  u = s("906732"),
  c = s("535322"),
  d = s("357355"),
  _ = s("140465"),
  E = s("775412"),
  R = s("926501"),
  T = s("846363"),
  f = s("650032"),
  m = s("105759"),
  I = s("248042"),
  S = s("422034"),
  p = s("206127"),
  A = s("710220"),
  g = s("318747"),
  N = s("409100"),
  M = s("474936"),
  C = s("689938"),
  P = s("982436");
let O = "HeroHeading",
  x = e => {
    let {
      inOfferExperience: t,
      inTrial: s,
      subscriptionTier: r
    } = e, i = null;
    !t && (i = (0, a.jsxs)("div", {
      className: P.buttonContainer,
      children: [(0, a.jsx)(N.default, {
        forceInverted: !0,
        className: P.button,
        subscriptionTier: r
      }), (0, a.jsx)(g.default, {
        className: P.button,
        forceWhite: !0
      })]
    }));
    let n = null;
    return s && (n = (0, a.jsx)("div", {
      className: P.buttonContainer,
      children: (0, a.jsx)(g.default, {
        className: P.button,
        forceWhite: !0
      })
    })), (0, a.jsxs)(a.Fragment, {
      children: [i, " ", n]
    })
  },
  b = e => {
    let {
      isFullscreen: t
    } = e;
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(c.StretchedSparkleStar, {
        className: t ? P.fullscreenSparkleStar1 : P.settingsSparkleStar1
      }), (0, a.jsx)(c.StretchedSparkleStar, {
        className: t ? P.fullscreenSparkleStar2 : P.settingsSparkleStar2
      }), (0, a.jsx)(c.StretchedSparkleStar, {
        className: t ? P.fullscreenSparkleStar3 : P.settingsSparkleStar3
      }), (0, a.jsx)(c.StretchedSparkleStar, {
        className: t ? P.fullscreenSparkleStar4 : P.settingsSparkleStar4
      })]
    })
  };

function h(e) {
  let {
    variant: t = "text-lg/normal"
  } = e, s = (0, p.useCheapestMonthlyPrice)();
  return (0, a.jsx)(l.Text, {
    variant: t,
    color: "always-white",
    className: P.description,
    children: C.default.Messages.PREMIUM_MARKETING_HERO_HEADER_DESCRIPTION.format({
      cheapestMonthlyPrice: s
    })
  })
}
t.default = e => {
  let {
    isFullscreen: t,
    className: s,
    subscriptionTier: r,
    hideSparkles: c,
    hideSubscribeAndGiftButton: p,
    entrypoint: N
  } = e, D = (0, T.useMarketingOptimizationExperiment)({
    autoTrackExposure: !1
  }), {
    analyticsLocations: v
  } = (0, u.default)(o.default.PREMIUM_MARKETING_HERO_CTA), L = (0, E.useHasActiveTrial)(), U = (0, _.useIsInPremiumOfferExperience)(), B = (0, I.useIsEligibleForBogoPromotion)(), k = (0, n.useStateFromStores)([d.default], () => d.default.affinities), j = (0, m.default)(), {
    enabled: G
  } = f.ReferralProgramRecipient.useExperiment({
    location: O
  }, {
    autoTrackExposure: !1
  }), y = N === M.PremiumMarketingEntrypoints.ApplicationStoreHome && null != j && G, H = k.length > 0, F = (0, R.useIsMarketingPageHeroHeaderV2Enabled)({
    location: O
  });
  return (0, a.jsx)(u.AnalyticsLocationProvider, {
    value: v,
    children: (0, a.jsxs)("div", {
      className: i()(P.container, s, {
        [P.settingsContainer]: !t && !D,
        [P.affinityHeight]: !t && H && !D
      }),
      "data-testid": "v2-marketing-page-hero-header",
      children: [(0, a.jsxs)("div", {
        className: t ? P.fullscreenTextContainer : P.settingsTextContainer,
        children: [(0, a.jsx)(l.Heading, {
          className: D ? P.header : void 0,
          variant: t ? "display-lg" : "display-md",
          color: D ? void 0 : "always-white",
          children: F ? C.default.Messages.PREMIUM_MARKETING_HERO_HEADER_TITLE_V2 : C.default.Messages.PREMIUM_MARKETING_HERO_HEADER_TITLE
        }), y ? (0, a.jsx)(A.default, {
          referrer: j
        }) : H ? (0, a.jsx)("div", {
          className: i()({
            [P.affinityDescription]: !D,
            [P.affinityDescriptionNoMargin]: D
          }),
          children: (0, a.jsx)(S.default, {
            className: D ? P.backgroundColor : void 0,
            textColor: D ? "text-primary" : "always-white",
            smallerText: !t || D
          })
        }) : !D && (0, a.jsx)(h, {}), B ? (0, a.jsx)("div", {
          className: P.buttonContainer,
          children: (0, a.jsx)(g.default, {
            className: P.button,
            forceWhite: !0
          })
        }) : p ? null : (0, a.jsx)(x, {
          subscriptionTier: r,
          inOfferExperience: U,
          inTrial: L
        }), H && !D && !y && (0, a.jsx)(h, {
          variant: "text-md/normal"
        })]
      }), !(U || c) && (0, a.jsx)(b, {
        isFullscreen: t
      })]
    })
  })
}