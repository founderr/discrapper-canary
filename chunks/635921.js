"use strict";
s.r(t);
var a = s("735250");
s("470079");
var i = s("803997"),
  r = s.n(i),
  n = s("442837"),
  l = s("481060"),
  o = s("100527"),
  u = s("906732"),
  d = s("535322"),
  c = s("326151"),
  _ = s("357355"),
  E = s("140465"),
  T = s("775412"),
  I = s("846363"),
  f = s("105759"),
  R = s("248042"),
  S = s("422034"),
  m = s("206127"),
  A = s("710220"),
  N = s("318747"),
  p = s("409100"),
  g = s("474936"),
  C = s("689938"),
  O = s("374861");
let P = e => {
    let {
      inOfferExperience: t,
      inTrial: s,
      subscriptionTier: i
    } = e, r = null;
    !t && (r = (0, a.jsxs)("div", {
      className: O.buttonContainer,
      children: [(0, a.jsx)(p.default, {
        forceInverted: !0,
        className: O.button,
        subscriptionTier: i
      }), (0, a.jsx)(N.default, {
        className: O.button,
        forceWhite: !0
      })]
    }));
    let n = null;
    return s && (n = (0, a.jsx)("div", {
      className: O.buttonContainer,
      children: (0, a.jsx)(N.default, {
        className: O.button,
        forceWhite: !0
      })
    })), (0, a.jsxs)(a.Fragment, {
      children: [r, " ", n]
    })
  },
  M = e => {
    let {
      isFullscreen: t
    } = e;
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(d.StretchedSparkleStar, {
        className: t ? O.fullscreenSparkleStar1 : O.settingsSparkleStar1
      }), (0, a.jsx)(d.StretchedSparkleStar, {
        className: t ? O.fullscreenSparkleStar2 : O.settingsSparkleStar2
      }), (0, a.jsx)(d.StretchedSparkleStar, {
        className: t ? O.fullscreenSparkleStar3 : O.settingsSparkleStar3
      }), (0, a.jsx)(d.StretchedSparkleStar, {
        className: t ? O.fullscreenSparkleStar4 : O.settingsSparkleStar4
      })]
    })
  };

function h(e) {
  let {
    variant: t = "text-lg/normal"
  } = e, s = (0, m.useCheapestMonthlyPrice)();
  return (0, a.jsx)(l.Text, {
    variant: t,
    color: "always-white",
    className: O.description,
    children: C.default.Messages.PREMIUM_MARKETING_HERO_HEADER_DESCRIPTION.format({
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
    entrypoint: p
  } = e, L = (0, I.useMarketingOptimizationExperiment)({
    autoTrackExposure: !1
  }), {
    analyticsLocations: x
  } = (0, u.default)(o.default.PREMIUM_MARKETING_HERO_CTA), v = (0, T.useHasActiveTrial)(), D = (0, E.useIsInPremiumOfferExperience)(), b = (0, R.useIsEligibleForBogoPromotion)(), {
    marketingEnabled: U
  } = c.default.useExperiment({
    location: "HeroHeading"
  }, {
    autoTrackExposure: !1
  }), j = (0, n.useStateFromStores)([_.default], () => _.default.affinities);
  j.length > 0 && c.default.trackExposure({
    location: "HeroHeading"
  });
  let y = (0, f.default)(),
    G = p === g.PremiumMarketingEntrypoints.ApplicationStoreHome && null != y,
    B = U && j.length > 0;
  return (0, a.jsx)(u.AnalyticsLocationProvider, {
    value: x,
    children: (0, a.jsxs)("div", {
      className: r()(O.container, s, {
        [O.settingsContainer]: !t && !L,
        [O.affinityHeight]: !t && B && !L
      }),
      "data-testid": "v2-marketing-page-hero-header",
      children: [(0, a.jsxs)("div", {
        className: t ? O.fullscreenTextContainer : O.settingsTextContainer,
        children: [(0, a.jsx)(l.Heading, {
          className: L ? O.header : void 0,
          variant: t ? "display-lg" : "display-md",
          color: L ? void 0 : "always-white",
          children: C.default.Messages.PREMIUM_MARKETING_HERO_HEADER_TITLE
        }), G ? (0, a.jsx)(A.default, {
          referrer: y
        }) : B ? (0, a.jsx)("div", {
          className: r()({
            [O.affinityDescription]: !L,
            [O.affinityDescriptionNoMargin]: L
          }),
          children: (0, a.jsx)(S.default, {
            className: L ? O.backgroundColor : void 0,
            textColor: L ? "text-primary" : "always-white",
            smallerText: !t || L
          })
        }) : !L && (0, a.jsx)(h, {}), b ? (0, a.jsx)("div", {
          className: O.buttonContainer,
          children: (0, a.jsx)(N.default, {
            className: O.button,
            forceWhite: !0
          })
        }) : m ? null : (0, a.jsx)(P, {
          subscriptionTier: i,
          inOfferExperience: D,
          inTrial: v
        }), B && !L && !G && (0, a.jsx)(h, {
          variant: "text-md/normal"
        })]
      }), !(D || d) && (0, a.jsx)(M, {
        isFullscreen: t
      })]
    })
  })
}