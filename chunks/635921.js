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
  M = s("409100"),
  C = s("474936"),
  N = s("689938"),
  g = s("982436");
let P = "HeroHeading",
  O = e => {
    let {
      inOfferExperience: t,
      inTrial: s,
      subscriptionTier: r,
      buttonClassName: n
    } = e, l = null;
    !t && (l = (0, a.jsxs)("div", {
      className: g.buttonContainer,
      children: [(0, a.jsx)(M.default, {
        forceInverted: !0,
        className: i()(g.button, n),
        subscriptionTier: r
      }), (0, a.jsx)(A.default, {
        className: i()(g.button, n),
        forceWhite: !0
      })]
    }));
    let o = null;
    return s && (o = (0, a.jsx)("div", {
      className: g.buttonContainer,
      children: (0, a.jsx)(A.default, {
        className: i()(g.button, n),
        forceWhite: !0
      })
    })), (0, a.jsxs)(a.Fragment, {
      children: [l, " ", o]
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
    children: N.default.Messages.PREMIUM_MARKETING_HERO_HEADER_DESCRIPTION.format({
      cheapestMonthlyPrice: r
    })
  })
}
t.default = e => {
  let {
    isFullscreen: t,
    className: s,
    buttonClassName: r,
    subscriptionTier: c,
    hideSparkles: m,
    hideSubscribeAndGiftButton: M,
    entrypoint: h
  } = e, {
    analyticsLocations: D
  } = (0, u.default)(o.default.PREMIUM_MARKETING_HERO_CTA), L = (0, E.useHasActiveTrial)(), v = (0, _.useIsInPremiumOfferExperience)(), U = (0, I.useIsEligibleForBogoPromotion)(), B = (0, n.useStateFromStores)([d.default], () => d.default.affinities), j = (0, f.default)(), {
    enabled: k
  } = T.ReferralProgramRecipient.useExperiment({
    location: P
  }, {
    autoTrackExposure: !1
  }), G = h === C.PremiumMarketingEntrypoints.ApplicationStoreHome && null != j && k, H = B.length > 0, W = (0, R.useIsMarketingPageHeroHeaderV2Enabled)({
    location: P
  });
  return (0, a.jsx)(u.AnalyticsLocationProvider, {
    value: D,
    children: (0, a.jsxs)("div", {
      className: i()(g.container, s, {
        [g.settingsContainer]: !t,
        [g.affinityHeight]: !t && H
      }),
      "data-testid": "v2-marketing-page-hero-header",
      children: [(0, a.jsxs)("div", {
        className: t ? g.fullscreenTextContainer : g.settingsTextContainer,
        children: [(0, a.jsx)(l.Heading, {
          variant: t ? "display-lg" : "display-md",
          color: "always-white",
          children: W ? N.default.Messages.PREMIUM_MARKETING_HERO_HEADER_TITLE_V2 : N.default.Messages.PREMIUM_MARKETING_HERO_HEADER_TITLE
        }), G ? (0, a.jsx)(p.default, {
          referrer: j
        }) : H ? (0, a.jsx)("div", {
          className: i()(g.affinityDescription),
          children: (0, a.jsx)(S.default, {
            textColor: "always-white",
            smallerText: !t
          })
        }) : (0, a.jsx)(b, {}), U ? (0, a.jsx)("div", {
          className: g.buttonContainer,
          children: (0, a.jsx)(A.default, {
            className: i()(g.button, r),
            forceWhite: !0
          })
        }) : M ? null : (0, a.jsx)(O, {
          subscriptionTier: c,
          inOfferExperience: v,
          inTrial: L,
          buttonClassName: r
        }), H && !G && (0, a.jsx)(b, {
          variant: "text-md/normal",
          withBottomMargin: !1
        })]
      }), !(v || m) && (0, a.jsx)(x, {
        isFullscreen: t
      })]
    })
  })
}