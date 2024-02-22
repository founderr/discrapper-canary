"use strict";
s.r(t), s.d(t, {
  default: function() {
    return O
  }
});
var a = s("37983");
s("884691");
var i = s("414456"),
  n = s.n(i),
  r = s("446674"),
  l = s("77078"),
  o = s("812204"),
  u = s("685665"),
  d = s("441413"),
  c = s("309318"),
  _ = s("446488"),
  E = s("182650"),
  I = s("324878"),
  T = s("527715"),
  f = s("641078"),
  S = s("871948"),
  R = s("401135"),
  m = s("218435"),
  A = s("881155"),
  p = s("782340"),
  N = s("23596");
let g = e => {
    let {
      inOfferExperience: t,
      inTrial: s,
      subscriptionTier: i
    } = e, n = null;
    !t && (n = (0, a.jsxs)("div", {
      className: N.buttonContainer,
      children: [(0, a.jsx)(A.default, {
        forceInverted: !0,
        className: N.button,
        subscriptionTier: i
      }), (0, a.jsx)(m.default, {
        className: N.button,
        forceWhite: !0
      })]
    }));
    let r = null;
    return s && (r = (0, a.jsx)("div", {
      className: N.buttonContainer,
      children: (0, a.jsx)(m.default, {
        className: N.button,
        forceWhite: !0
      })
    })), (0, a.jsxs)(a.Fragment, {
      children: [n, " ", r]
    })
  },
  P = e => {
    let {
      isFullscreen: t
    } = e;
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(d.StretchedSparkleStar, {
        className: t ? N.fullscreenSparkleStar1 : N.settingsSparkleStar1
      }), (0, a.jsx)(d.StretchedSparkleStar, {
        className: t ? N.fullscreenSparkleStar2 : N.settingsSparkleStar2
      }), (0, a.jsx)(d.StretchedSparkleStar, {
        className: t ? N.fullscreenSparkleStar3 : N.settingsSparkleStar3
      }), (0, a.jsx)(d.StretchedSparkleStar, {
        className: t ? N.fullscreenSparkleStar4 : N.settingsSparkleStar4
      })]
    })
  };

function C(e) {
  let {
    variant: t = "text-lg/normal"
  } = e, s = (0, R.useCheapestMonthlyPrice)();
  return (0, a.jsx)(l.Text, {
    variant: t,
    color: "always-white",
    className: N.description,
    children: p.default.Messages.PREMIUM_MARKETING_HERO_HEADER_DESCRIPTION.format({
      cheapestMonthlyPrice: s
    })
  })
}
var O = e => {
  let {
    isFullscreen: t,
    className: s,
    subscriptionTier: i,
    hideSparkles: d,
    hideSubscribeAndGiftButton: R
  } = e, A = (0, T.useMarketingOptimizationExperiment)({
    autoTrackExposure: !1
  }), {
    AnalyticsLocationProvider: O
  } = (0, u.default)(o.default.PREMIUM_MARKETING_HERO_CTA), M = (0, I.useHasActiveTrial)(), h = (0, E.useIsInPremiumOfferExperience)(), L = (0, f.useIsEligibleForBogoPromotion)(), {
    marketingEnabled: x
  } = c.default.useExperiment({
    location: "HeroHeading"
  }, {
    autoTrackExposure: !1
  }), v = (0, r.useStateFromStores)([_.default], () => _.default.affinities);
  v.length > 0 && c.default.trackExposure({
    location: "HeroHeading"
  });
  let D = x && v.length > 0;
  return (0, a.jsx)(O, {
    children: (0, a.jsxs)("div", {
      className: n(N.container, s, {
        [N.settingsContainer]: !t && !A,
        [N.affinityHeight]: !t && D && !A
      }),
      "data-testid": "v2-marketing-page-hero-header",
      children: [(0, a.jsxs)("div", {
        className: t ? N.fullscreenTextContainer : N.settingsTextContainer,
        children: [(0, a.jsx)(l.Heading, {
          className: A ? N.header : void 0,
          variant: t ? "display-lg" : "display-md",
          color: A ? void 0 : "always-white",
          children: p.default.Messages.PREMIUM_MARKETING_HERO_HEADER_TITLE
        }), D ? (0, a.jsx)("div", {
          className: n({
            [N.affinityDescription]: !A,
            [N.affinityDescriptionNoMargin]: A
          }),
          children: (0, a.jsx)(S.default, {
            className: A ? N.backgroundColor : void 0,
            textColor: A ? "text-primary" : "always-white",
            smallerText: !t || A
          })
        }) : !A && (0, a.jsx)(C, {}), L ? (0, a.jsx)("div", {
          className: N.buttonContainer,
          children: (0, a.jsx)(m.default, {
            className: N.button,
            forceWhite: !0
          })
        }) : R ? null : (0, a.jsx)(g, {
          subscriptionTier: i,
          inOfferExperience: h,
          inTrial: M
        }), D && !A && (0, a.jsx)(C, {
          variant: "text-md/normal"
        })]
      }), !(h || d) && (0, a.jsx)(P, {
        isFullscreen: t
      })]
    })
  })
}