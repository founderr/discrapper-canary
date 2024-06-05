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
  c = s("357355"),
  _ = s("140465"),
  E = s("775412"),
  T = s("926501"),
  I = s("650032"),
  R = s("105759"),
  f = s("248042"),
  S = s("422034"),
  A = s("206127"),
  m = s("710220"),
  N = s("318747"),
  p = s("409100"),
  g = s("474936"),
  C = s("689938"),
  P = s("982436");
let O = "HeroHeading",
  M = e => {
    let {
      inOfferExperience: t,
      inTrial: s,
      subscriptionTier: r,
      buttonClassName: n
    } = e, l = null;
    !t && (l = (0, a.jsxs)("div", {
      className: P.buttonContainer,
      children: [(0, a.jsx)(p.default, {
        forceInverted: !0,
        className: i()(P.button, n),
        subscriptionTier: r
      }), (0, a.jsx)(N.default, {
        className: i()(P.button, n),
        forceWhite: !0
      })]
    }));
    let o = null;
    return s && (o = (0, a.jsx)("div", {
      className: P.buttonContainer,
      children: (0, a.jsx)(N.default, {
        className: i()(P.button, n),
        forceWhite: !0
      })
    })), (0, a.jsxs)(a.Fragment, {
      children: [l, " ", o]
    })
  },
  h = e => {
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

function L(e) {
  let {
    variant: t = "text-lg/normal",
    withBottomMargin: s = !0
  } = e, r = (0, A.useCheapestMonthlyPrice)();
  return (0, a.jsx)(l.Text, {
    variant: t,
    color: "always-white",
    className: i()(P.description, {
      [P.descriptionBottomMargin]: s
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
    buttonClassName: r,
    subscriptionTier: d,
    hideSparkles: A,
    hideSubscribeAndGiftButton: p,
    entrypoint: x
  } = e, {
    analyticsLocations: v
  } = (0, u.default)(o.default.PREMIUM_MARKETING_HERO_CTA), b = (0, E.useHasActiveTrial)(), D = (0, _.useIsInPremiumOfferExperience)(), U = (0, f.useIsEligibleForBogoPromotion)(), j = (0, n.useStateFromStores)([c.default], () => c.default.affinities), G = (0, R.default)(), {
    enabled: B
  } = I.ReferralProgramRecipient.useExperiment({
    location: O
  }, {
    autoTrackExposure: !1
  }), y = x === g.PremiumMarketingEntrypoints.ApplicationStoreHome && null != G && B, k = j.length > 0, H = (0, T.useIsMarketingPageHeroHeaderV2Enabled)({
    location: O
  });
  return (0, a.jsx)(u.AnalyticsLocationProvider, {
    value: v,
    children: (0, a.jsxs)("div", {
      className: i()(P.container, s, {
        [P.settingsContainer]: !t,
        [P.affinityHeight]: !t && k
      }),
      "data-testid": "v2-marketing-page-hero-header",
      children: [(0, a.jsxs)("div", {
        className: t ? P.fullscreenTextContainer : P.settingsTextContainer,
        children: [(0, a.jsx)(l.Heading, {
          variant: t ? "display-lg" : "display-md",
          color: "always-white",
          children: H ? C.default.Messages.PREMIUM_MARKETING_HERO_HEADER_TITLE_V2 : C.default.Messages.PREMIUM_MARKETING_HERO_HEADER_TITLE
        }), y ? (0, a.jsx)(m.default, {
          referrer: G
        }) : k ? (0, a.jsx)("div", {
          className: i()(P.affinityDescription),
          children: (0, a.jsx)(S.default, {
            textColor: "always-white",
            smallerText: !t
          })
        }) : (0, a.jsx)(L, {}), U ? (0, a.jsx)("div", {
          className: P.buttonContainer,
          children: (0, a.jsx)(N.default, {
            className: i()(P.button, r),
            forceWhite: !0
          })
        }) : p ? null : (0, a.jsx)(M, {
          subscriptionTier: d,
          inOfferExperience: D,
          inTrial: b,
          buttonClassName: r
        }), k && !y && (0, a.jsx)(L, {
          variant: "text-md/normal",
          withBottomMargin: !1
        })]
      }), !(D || A) && (0, a.jsx)(h, {
        isFullscreen: t
      })]
    })
  })
}