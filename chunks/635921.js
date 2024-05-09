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
  d = s("535322"),
  c = s("326151"),
  _ = s("357355"),
  E = s("140465"),
  T = s("775412"),
  I = s("926501"),
  R = s("846363"),
  f = s("958589"),
  S = s("650032"),
  m = s("105759"),
  A = s("248042"),
  N = s("422034"),
  p = s("206127"),
  g = s("710220"),
  C = s("318747"),
  P = s("409100"),
  O = s("474936"),
  M = s("689938"),
  h = s("982436");
let L = "HeroHeading",
  x = e => {
    let {
      inOfferExperience: t,
      inTrial: s,
      subscriptionTier: r
    } = e, i = null;
    !t && (i = (0, a.jsxs)("div", {
      className: h.buttonContainer,
      children: [(0, a.jsx)(P.default, {
        forceInverted: !0,
        className: h.button,
        subscriptionTier: r
      }), (0, a.jsx)(C.default, {
        className: h.button,
        forceWhite: !0
      })]
    }));
    let n = null;
    return s && (n = (0, a.jsx)("div", {
      className: h.buttonContainer,
      children: (0, a.jsx)(C.default, {
        className: h.button,
        forceWhite: !0
      })
    })), (0, a.jsxs)(a.Fragment, {
      children: [i, " ", n]
    })
  },
  v = e => {
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

function b(e) {
  let {
    variant: t = "text-lg/normal"
  } = e, s = (0, p.useCheapestMonthlyPrice)();
  return (0, a.jsx)(l.Text, {
    variant: t,
    color: "always-white",
    className: h.description,
    children: M.default.Messages.PREMIUM_MARKETING_HERO_HEADER_DESCRIPTION.format({
      cheapestMonthlyPrice: s
    })
  })
}
t.default = e => {
  let {
    isFullscreen: t,
    className: s,
    subscriptionTier: r,
    hideSparkles: d,
    hideSubscribeAndGiftButton: p,
    entrypoint: P
  } = e, D = (0, R.useMarketingOptimizationExperiment)({
    autoTrackExposure: !1
  }), {
    analyticsLocations: U
  } = (0, u.default)(o.default.PREMIUM_MARKETING_HERO_CTA), j = (0, T.useHasActiveTrial)(), y = (0, E.useIsInPremiumOfferExperience)(), B = (0, A.useIsEligibleForBogoPromotion)(), G = f.default.useExperiment({
    location: L
  }).enabled, {
    marketingEnabled: k
  } = c.default.useExperiment({
    location: L
  }, {
    autoTrackExposure: !1
  }), H = (0, n.useStateFromStores)([_.default], () => _.default.affinities);
  H.length > 0 && c.default.trackExposure({
    location: L
  });
  let F = (0, m.default)(),
    {
      enabled: w
    } = S.ReferralProgramRecipient.useExperiment({
      location: L
    }, {
      autoTrackExposure: !1
    }),
    K = P === O.PremiumMarketingEntrypoints.ApplicationStoreHome && null != F && w,
    W = k && H.length > 0,
    V = (0, I.useIsMarketingPageHeroHeaderV2Enabled)({
      location: L
    });
  return (0, a.jsx)(u.AnalyticsLocationProvider, {
    value: U,
    children: (0, a.jsxs)("div", {
      className: i()(h.container, s, {
        [h.settingsContainer]: !t && !D,
        [h.affinityHeight]: !t && W && !D
      }),
      "data-testid": "v2-marketing-page-hero-header",
      children: [(0, a.jsxs)("div", {
        className: t ? h.fullscreenTextContainer : h.settingsTextContainer,
        children: [(0, a.jsx)(l.Heading, {
          className: D ? h.header : void 0,
          variant: t ? "display-lg" : "display-md",
          color: D ? void 0 : "always-white",
          children: V ? M.default.Messages.PREMIUM_MARKETING_HERO_HEADER_TITLE_V2 : M.default.Messages.PREMIUM_MARKETING_HERO_HEADER_TITLE
        }), K ? (0, a.jsx)(g.default, {
          referrer: F
        }) : W ? (0, a.jsx)("div", {
          className: i()({
            [h.affinityDescription]: !D,
            [h.affinityDescriptionNoMargin]: D
          }),
          children: (0, a.jsx)(N.default, {
            className: D ? h.backgroundColor : void 0,
            textColor: D ? "text-primary" : "always-white",
            smallerText: !t || D
          })
        }) : !D && (0, a.jsx)(b, {}), B || G ? (0, a.jsx)("div", {
          className: h.buttonContainer,
          children: (0, a.jsx)(C.default, {
            className: h.button,
            forceWhite: !0
          })
        }) : p ? null : (0, a.jsx)(x, {
          subscriptionTier: r,
          inOfferExperience: y,
          inTrial: j
        }), W && !D && !K && (0, a.jsx)(b, {
          variant: "text-md/normal"
        })]
      }), !(y || d) && (0, a.jsx)(v, {
        isFullscreen: t
      })]
    })
  })
}