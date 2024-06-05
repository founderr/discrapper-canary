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
  T = s("650032"),
  f = s("105759"),
  I = s("248042"),
  S = s("422034"),
  m = s("206127"),
  p = s("710220"),
  A = s("318747"),
  N = s("409100"),
  M = s("474936"),
  C = s("689938"),
  g = s("982436");
let P = "HeroHeading",
  O = e => {
    let {
      inOfferExperience: t,
      inTrial: s,
      subscriptionTier: r
    } = e, i = null;
    !t && (i = (0, a.jsxs)("div", {
      className: g.buttonContainer,
      children: [(0, a.jsx)(N.default, {
        forceInverted: !0,
        className: g.button,
        subscriptionTier: r
      }), (0, a.jsx)(A.default, {
        className: g.button,
        forceWhite: !0
      })]
    }));
    let n = null;
    return s && (n = (0, a.jsx)("div", {
      className: g.buttonContainer,
      children: (0, a.jsx)(A.default, {
        className: g.button,
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
      children: [(0, a.jsx)(c.StretchedSparkleStar, {
        className: t ? g.fullscreenSparkleStar1 : g.settingsSparkleStar1
      }), (0, a.jsx)(c.StretchedSparkleStar, {
        className: t ? g.fullscreenSparkleStar2 : g.settingsSparkleStar2
      }), (0, a.jsx)(c.StretchedSparkleStar, {
        className: t ? g.fullscreenSparkleStar3 : g.settingsSparkleStar3
      }), (0, a.jsx)(c.StretchedSparkleStar, {
        className: t ? g.fullscreenSparkleStar4 : g.settingsSparkleStar4
      })]
    })
  };

function b(e) {
  let {
    variant: t = "text-lg/normal",
    withBottomMargin: s = !0
  } = e, r = (0, m.useCheapestMonthlyPrice)();
  return (0, a.jsx)(l.Text, {
    variant: t,
    color: "always-white",
    className: i()(g.description, {
      [g.descriptionBottomMargin]: s
    }),
    children: C.default.Messages.PREMIUM_MARKETING_HERO_HEADER_DESCRIPTION.format({
      cheapestMonthlyPrice: r
    })
  })
}
t.default = e => {
  let {
    isFullscreen: t,
    className: s,
    subscriptionTier: r,
    hideSparkles: c,
    hideSubscribeAndGiftButton: m,
    entrypoint: N
  } = e, {
    analyticsLocations: h
  } = (0, u.default)(o.default.PREMIUM_MARKETING_HERO_CTA), D = (0, E.useHasActiveTrial)(), L = (0, _.useIsInPremiumOfferExperience)(), v = (0, I.useIsEligibleForBogoPromotion)(), U = (0, n.useStateFromStores)([d.default], () => d.default.affinities), B = (0, f.default)(), {
    enabled: j
  } = T.ReferralProgramRecipient.useExperiment({
    location: P
  }, {
    autoTrackExposure: !1
  }), G = N === M.PremiumMarketingEntrypoints.ApplicationStoreHome && null != B && j, k = U.length > 0, H = (0, R.useIsMarketingPageHeroHeaderV2Enabled)({
    location: P
  });
  return (0, a.jsx)(u.AnalyticsLocationProvider, {
    value: h,
    children: (0, a.jsxs)("div", {
      className: i()(g.container, s, {
        [g.settingsContainer]: !t,
        [g.affinityHeight]: !t && k
      }),
      "data-testid": "v2-marketing-page-hero-header",
      children: [(0, a.jsxs)("div", {
        className: t ? g.fullscreenTextContainer : g.settingsTextContainer,
        children: [(0, a.jsx)(l.Heading, {
          variant: t ? "display-lg" : "display-md",
          color: "always-white",
          children: H ? C.default.Messages.PREMIUM_MARKETING_HERO_HEADER_TITLE_V2 : C.default.Messages.PREMIUM_MARKETING_HERO_HEADER_TITLE
        }), G ? (0, a.jsx)(p.default, {
          referrer: B
        }) : k ? (0, a.jsx)("div", {
          className: i()(g.affinityDescription),
          children: (0, a.jsx)(S.default, {
            textColor: "always-white",
            smallerText: !t
          })
        }) : (0, a.jsx)(b, {}), v ? (0, a.jsx)("div", {
          className: g.buttonContainer,
          children: (0, a.jsx)(A.default, {
            className: g.button,
            forceWhite: !0
          })
        }) : m ? null : (0, a.jsx)(O, {
          subscriptionTier: r,
          inOfferExperience: L,
          inTrial: D
        }), k && !G && (0, a.jsx)(b, {
          variant: "text-md/normal",
          withBottomMargin: !1
        })]
      }), !(L || c) && (0, a.jsx)(x, {
        isFullscreen: t
      })]
    })
  })
}