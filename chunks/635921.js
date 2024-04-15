"use strict";
s.r(t);
var a = s("735250");
s("470079");
var i = s("120356"),
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
  I = s("650032"),
  R = s("105759"),
  S = s("248042"),
  p = s("422034"),
  m = s("206127"),
  A = s("710220"),
  g = s("318747"),
  N = s("409100"),
  O = s("474936"),
  P = s("689938"),
  h = s("374861");
let M = e => {
    let {
      inOfferExperience: t,
      inTrial: s,
      subscriptionTier: i
    } = e, r = null;
    !t && (r = (0, a.jsxs)("div", {
      className: h.buttonContainer,
      children: [(0, a.jsx)(N.default, {
        forceInverted: !0,
        className: h.button,
        subscriptionTier: i
      }), (0, a.jsx)(g.default, {
        className: h.button,
        forceWhite: !0
      })]
    }));
    let l = null;
    return s && (l = (0, a.jsx)("div", {
      className: h.buttonContainer,
      children: (0, a.jsx)(g.default, {
        className: h.button,
        forceWhite: !0
      })
    })), (0, a.jsxs)(a.Fragment, {
      children: [r, " ", l]
    })
  },
  x = e => {
    let {
      isFullscreen: t
    } = e;
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(d.StretchedSparkleStar, {
        className: t ? h.fullscreenSparkleStar1 : h.settingsSparkleStar1
      }), (0, a.jsx)(d.StretchedSparkleStar, {
        className: t ? h.fullscreenSparkleStar2 : h.settingsSparkleStar2
      }), (0, a.jsx)(d.StretchedSparkleStar, {
        className: t ? h.fullscreenSparkleStar3 : h.settingsSparkleStar3
      }), (0, a.jsx)(d.StretchedSparkleStar, {
        className: t ? h.fullscreenSparkleStar4 : h.settingsSparkleStar4
      })]
    })
  };

function L(e) {
  let {
    variant: t = "text-lg/normal"
  } = e, s = (0, m.useCheapestMonthlyPrice)();
  return (0, a.jsx)(n.Text, {
    variant: t,
    color: "always-white",
    className: h.description,
    children: P.default.Messages.PREMIUM_MARKETING_HERO_HEADER_DESCRIPTION.format({
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
    hideSubscribeAndGiftButton: m,
    entrypoint: N
  } = e, v = (0, f.useMarketingOptimizationExperiment)({
    autoTrackExposure: !1
  }), {
    analyticsLocations: j
  } = (0, u.default)(o.default.PREMIUM_MARKETING_HERO_CTA), D = (0, C.useHasActiveTrial)(), b = (0, E.useIsInPremiumOfferExperience)(), U = (0, S.useIsEligibleForBogoPromotion)(), y = T.default.useExperiment({
    location: "HeroHeading"
  }).enabled, {
    marketingEnabled: B
  } = c.default.useExperiment({
    location: "HeroHeading"
  }, {
    autoTrackExposure: !1
  }), G = (0, l.useStateFromStores)([_.default], () => _.default.affinities);
  G.length > 0 && c.default.trackExposure({
    location: "HeroHeading"
  });
  let k = (0, R.default)(),
    {
      enabled: H
    } = I.ReferralProgramRecipient.useExperiment({
      location: "HeroHeading"
    }, {
      autoTrackExposure: !1
    }),
    F = N === O.PremiumMarketingEntrypoints.ApplicationStoreHome && null != k && H,
    w = B && G.length > 0;
  return (0, a.jsx)(u.AnalyticsLocationProvider, {
    value: j,
    children: (0, a.jsxs)("div", {
      className: r()(h.container, s, {
        [h.settingsContainer]: !t && !v,
        [h.affinityHeight]: !t && w && !v
      }),
      "data-testid": "v2-marketing-page-hero-header",
      children: [(0, a.jsxs)("div", {
        className: t ? h.fullscreenTextContainer : h.settingsTextContainer,
        children: [(0, a.jsx)(n.Heading, {
          className: v ? h.header : void 0,
          variant: t ? "display-lg" : "display-md",
          color: v ? void 0 : "always-white",
          children: P.default.Messages.PREMIUM_MARKETING_HERO_HEADER_TITLE
        }), F ? (0, a.jsx)(A.default, {
          referrer: k
        }) : w ? (0, a.jsx)("div", {
          className: r()({
            [h.affinityDescription]: !v,
            [h.affinityDescriptionNoMargin]: v
          }),
          children: (0, a.jsx)(p.default, {
            className: v ? h.backgroundColor : void 0,
            textColor: v ? "text-primary" : "always-white",
            smallerText: !t || v
          })
        }) : !v && (0, a.jsx)(L, {}), U || y ? (0, a.jsx)("div", {
          className: h.buttonContainer,
          children: (0, a.jsx)(g.default, {
            className: h.button,
            forceWhite: !0
          })
        }) : m ? null : (0, a.jsx)(M, {
          subscriptionTier: i,
          inOfferExperience: b,
          inTrial: D
        }), w && !v && !F && (0, a.jsx)(L, {
          variant: "text-md/normal"
        })]
      }), !(b || d) && (0, a.jsx)(x, {
        isFullscreen: t
      })]
    })
  })
}