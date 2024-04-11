"use strict";
s.r(t);
var a = s("735250");
s("470079");
var i = s("803997"),
  r = s.n(i),
  l = s("442837"),
  n = s("481060"),
  o = s("100527"),
  u = s("906732"),
  d = s("535322"),
  c = s("326151"),
  _ = s("357355"),
  E = s("140465"),
  C = s("775412"),
  f = s("846363"),
  T = s("958589"),
  I = s("105759"),
  R = s("248042"),
  S = s("422034"),
  p = s("206127"),
  m = s("710220"),
  A = s("318747"),
  g = s("409100"),
  N = s("474936"),
  O = s("689938"),
  P = s("374861");
let h = e => {
    let {
      inOfferExperience: t,
      inTrial: s,
      subscriptionTier: i
    } = e, r = null;
    !t && (r = (0, a.jsxs)("div", {
      className: P.buttonContainer,
      children: [(0, a.jsx)(g.default, {
        forceInverted: !0,
        className: P.button,
        subscriptionTier: i
      }), (0, a.jsx)(A.default, {
        className: P.button,
        forceWhite: !0
      })]
    }));
    let l = null;
    return s && (l = (0, a.jsx)("div", {
      className: P.buttonContainer,
      children: (0, a.jsx)(A.default, {
        className: P.button,
        forceWhite: !0
      })
    })), (0, a.jsxs)(a.Fragment, {
      children: [r, " ", l]
    })
  },
  M = e => {
    let {
      isFullscreen: t
    } = e;
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(d.StretchedSparkleStar, {
        className: t ? P.fullscreenSparkleStar1 : P.settingsSparkleStar1
      }), (0, a.jsx)(d.StretchedSparkleStar, {
        className: t ? P.fullscreenSparkleStar2 : P.settingsSparkleStar2
      }), (0, a.jsx)(d.StretchedSparkleStar, {
        className: t ? P.fullscreenSparkleStar3 : P.settingsSparkleStar3
      }), (0, a.jsx)(d.StretchedSparkleStar, {
        className: t ? P.fullscreenSparkleStar4 : P.settingsSparkleStar4
      })]
    })
  };

function x(e) {
  let {
    variant: t = "text-lg/normal"
  } = e, s = (0, p.useCheapestMonthlyPrice)();
  return (0, a.jsx)(n.Text, {
    variant: t,
    color: "always-white",
    className: P.description,
    children: O.default.Messages.PREMIUM_MARKETING_HERO_HEADER_DESCRIPTION.format({
      cheapestMonthlyPrice: s
    })
  })
}
t.default = e => {
  let {
    isFullscreen: t,
    className: s,
    subscriptionTier: i,
    hideSparkles: d,
    hideSubscribeAndGiftButton: p,
    entrypoint: g
  } = e, L = (0, f.useMarketingOptimizationExperiment)({
    autoTrackExposure: !1
  }), {
    analyticsLocations: v
  } = (0, u.default)(o.default.PREMIUM_MARKETING_HERO_CTA), j = (0, C.useHasActiveTrial)(), D = (0, E.useIsInPremiumOfferExperience)(), b = (0, R.useIsEligibleForBogoPromotion)(), U = T.default.useExperiment({
    location: "HeroHeading"
  }).enabled, {
    marketingEnabled: y
  } = c.default.useExperiment({
    location: "HeroHeading"
  }, {
    autoTrackExposure: !1
  }), B = (0, l.useStateFromStores)([_.default], () => _.default.affinities);
  B.length > 0 && c.default.trackExposure({
    location: "HeroHeading"
  });
  let G = (0, I.default)(),
    k = g === N.PremiumMarketingEntrypoints.ApplicationStoreHome && null != G,
    H = y && B.length > 0;
  return (0, a.jsx)(u.AnalyticsLocationProvider, {
    value: v,
    children: (0, a.jsxs)("div", {
      className: r()(P.container, s, {
        [P.settingsContainer]: !t && !L,
        [P.affinityHeight]: !t && H && !L
      }),
      "data-testid": "v2-marketing-page-hero-header",
      children: [(0, a.jsxs)("div", {
        className: t ? P.fullscreenTextContainer : P.settingsTextContainer,
        children: [(0, a.jsx)(n.Heading, {
          className: L ? P.header : void 0,
          variant: t ? "display-lg" : "display-md",
          color: L ? void 0 : "always-white",
          children: O.default.Messages.PREMIUM_MARKETING_HERO_HEADER_TITLE
        }), k ? (0, a.jsx)(m.default, {
          referrer: G
        }) : H ? (0, a.jsx)("div", {
          className: r()({
            [P.affinityDescription]: !L,
            [P.affinityDescriptionNoMargin]: L
          }),
          children: (0, a.jsx)(S.default, {
            className: L ? P.backgroundColor : void 0,
            textColor: L ? "text-primary" : "always-white",
            smallerText: !t || L
          })
        }) : !L && (0, a.jsx)(x, {}), b || U ? (0, a.jsx)("div", {
          className: P.buttonContainer,
          children: (0, a.jsx)(A.default, {
            className: P.button,
            forceWhite: !0
          })
        }) : p ? null : (0, a.jsx)(h, {
          subscriptionTier: i,
          inOfferExperience: D,
          inTrial: j
        }), H && !L && !k && (0, a.jsx)(x, {
          variant: "text-md/normal"
        })]
      }), !(D || d) && (0, a.jsx)(M, {
        isFullscreen: t
      })]
    })
  })
}