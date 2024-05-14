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
  f = s("650032"),
  S = s("105759"),
  m = s("248042"),
  A = s("422034"),
  N = s("206127"),
  p = s("710220"),
  g = s("318747"),
  C = s("409100"),
  P = s("474936"),
  O = s("689938"),
  M = s("982436");
let h = "HeroHeading",
  L = e => {
    let {
      inOfferExperience: t,
      inTrial: s,
      subscriptionTier: r
    } = e, i = null;
    !t && (i = (0, a.jsxs)("div", {
      className: M.buttonContainer,
      children: [(0, a.jsx)(C.default, {
        forceInverted: !0,
        className: M.button,
        subscriptionTier: r
      }), (0, a.jsx)(g.default, {
        className: M.button,
        forceWhite: !0
      })]
    }));
    let n = null;
    return s && (n = (0, a.jsx)("div", {
      className: M.buttonContainer,
      children: (0, a.jsx)(g.default, {
        className: M.button,
        forceWhite: !0
      })
    })), (0, a.jsxs)(a.Fragment, {
      children: [i, " ", n]
    })
  },
  x = e => {
    let {
      isFullscreen: t
    } = e;
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(d.StretchedSparkleStar, {
        className: t ? M.fullscreenSparkleStar1 : M.settingsSparkleStar1
      }), (0, a.jsx)(d.StretchedSparkleStar, {
        className: t ? M.fullscreenSparkleStar2 : M.settingsSparkleStar2
      }), (0, a.jsx)(d.StretchedSparkleStar, {
        className: t ? M.fullscreenSparkleStar3 : M.settingsSparkleStar3
      }), (0, a.jsx)(d.StretchedSparkleStar, {
        className: t ? M.fullscreenSparkleStar4 : M.settingsSparkleStar4
      })]
    })
  };

function v(e) {
  let {
    variant: t = "text-lg/normal"
  } = e, s = (0, N.useCheapestMonthlyPrice)();
  return (0, a.jsx)(l.Text, {
    variant: t,
    color: "always-white",
    className: M.description,
    children: O.default.Messages.PREMIUM_MARKETING_HERO_HEADER_DESCRIPTION.format({
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
    hideSubscribeAndGiftButton: N,
    entrypoint: C
  } = e, b = (0, R.useMarketingOptimizationExperiment)({
    autoTrackExposure: !1
  }), {
    analyticsLocations: D
  } = (0, u.default)(o.default.PREMIUM_MARKETING_HERO_CTA), U = (0, T.useHasActiveTrial)(), j = (0, E.useIsInPremiumOfferExperience)(), G = (0, m.useIsEligibleForBogoPromotion)(), {
    marketingEnabled: y
  } = c.default.useExperiment({
    location: h
  }, {
    autoTrackExposure: !1
  }), B = (0, n.useStateFromStores)([_.default], () => _.default.affinities);
  B.length > 0 && c.default.trackExposure({
    location: h
  });
  let k = (0, S.default)(),
    {
      enabled: H
    } = f.ReferralProgramRecipient.useExperiment({
      location: h
    }, {
      autoTrackExposure: !1
    }),
    F = C === P.PremiumMarketingEntrypoints.ApplicationStoreHome && null != k && H,
    w = y && B.length > 0,
    K = (0, I.useIsMarketingPageHeroHeaderV2Enabled)({
      location: h
    });
  return (0, a.jsx)(u.AnalyticsLocationProvider, {
    value: D,
    children: (0, a.jsxs)("div", {
      className: i()(M.container, s, {
        [M.settingsContainer]: !t && !b,
        [M.affinityHeight]: !t && w && !b
      }),
      "data-testid": "v2-marketing-page-hero-header",
      children: [(0, a.jsxs)("div", {
        className: t ? M.fullscreenTextContainer : M.settingsTextContainer,
        children: [(0, a.jsx)(l.Heading, {
          className: b ? M.header : void 0,
          variant: t ? "display-lg" : "display-md",
          color: b ? void 0 : "always-white",
          children: K ? O.default.Messages.PREMIUM_MARKETING_HERO_HEADER_TITLE_V2 : O.default.Messages.PREMIUM_MARKETING_HERO_HEADER_TITLE
        }), F ? (0, a.jsx)(p.default, {
          referrer: k
        }) : w ? (0, a.jsx)("div", {
          className: i()({
            [M.affinityDescription]: !b,
            [M.affinityDescriptionNoMargin]: b
          }),
          children: (0, a.jsx)(A.default, {
            className: b ? M.backgroundColor : void 0,
            textColor: b ? "text-primary" : "always-white",
            smallerText: !t || b
          })
        }) : !b && (0, a.jsx)(v, {}), G ? (0, a.jsx)("div", {
          className: M.buttonContainer,
          children: (0, a.jsx)(g.default, {
            className: M.button,
            forceWhite: !0
          })
        }) : N ? null : (0, a.jsx)(L, {
          subscriptionTier: r,
          inOfferExperience: j,
          inTrial: U
        }), w && !b && !F && (0, a.jsx)(v, {
          variant: "text-md/normal"
        })]
      }), !(j || d) && (0, a.jsx)(x, {
        isFullscreen: t
      })]
    })
  })
}