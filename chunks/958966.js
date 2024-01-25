"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
});
var a = s("37983");
s("884691");
var r = s("414456"),
  n = s.n(r),
  i = s("77078"),
  l = s("446674"),
  u = s("812204"),
  o = s("685665"),
  d = s("441413"),
  c = s("309318"),
  _ = s("446488"),
  E = s("182650"),
  I = s("324878"),
  T = s("641078"),
  f = s("871948"),
  S = s("401135"),
  R = s("218435"),
  m = s("881155"),
  A = s("782340"),
  N = s("30126");

function p(e) {
  let {
    variant: t = "text-lg/normal"
  } = e, s = (0, S.useCheapestMonthlyPrice)();
  return (0, a.jsx)(i.Text, {
    variant: t,
    color: "always-white",
    className: N.description,
    children: A.default.Messages.PREMIUM_MARKETING_HERO_HEADER_DESCRIPTION.format({
      cheapestMonthlyPrice: s
    })
  })
}
var g = e => {
  let {
    isFullscreen: t,
    className: s,
    subscriptionTier: r
  } = e, {
    AnalyticsLocationProvider: S
  } = (0, o.default)(u.default.PREMIUM_MARKETING_HERO_CTA), g = (0, I.useHasActiveTrial)(), P = (0, E.useIsInPremiumOfferExperience)(), C = (0, T.useIsEligibleForBogoPromotion)(), {
    marketingEnabled: M
  } = c.default.useExperiment({
    location: "HeroHeading"
  }, {
    autoTrackExposure: !1
  }), O = (0, l.useStateFromStores)([_.default], () => _.default.affinities);
  O.length > 0 && c.default.trackExposure({
    location: "HeroHeading"
  });
  let h = M && O.length > 0;
  return (0, a.jsx)(S, {
    children: (0, a.jsxs)("div", {
      className: n(N.container, s, {
        [N.settingsContainer]: !t,
        [N.affinityHeight]: !t && h
      }),
      "data-testid": "v2-marketing-page-hero-header",
      children: [(0, a.jsxs)("div", {
        className: t ? N.fullscreenTextContainer : N.settingsTextContainer,
        children: [(0, a.jsx)(i.Heading, {
          variant: t ? "display-lg" : "display-md",
          color: "always-white",
          children: A.default.Messages.PREMIUM_MARKETING_HERO_HEADER_TITLE
        }), h ? (0, a.jsx)("div", {
          className: N.affinityDescription,
          children: (0, a.jsx)(f.default, {
            smallerText: !t
          })
        }) : (0, a.jsx)(p, {}), C ? (0, a.jsx)("div", {
          className: N.buttonContainer,
          children: (0, a.jsx)(R.default, {
            className: N.button,
            forceWhite: !0
          })
        }) : (0, a.jsxs)(a.Fragment, {
          children: [P ? null : (0, a.jsxs)("div", {
            className: N.buttonContainer,
            children: [(0, a.jsx)(m.default, {
              forceInverted: !0,
              className: N.button,
              subscriptionTier: r
            }), (0, a.jsx)(R.default, {
              className: N.button,
              forceWhite: !0
            })]
          }), g ? (0, a.jsx)("div", {
            className: N.buttonContainer,
            children: (0, a.jsx)(R.default, {
              className: N.button,
              forceWhite: !0
            })
          }) : null]
        }), h && (0, a.jsx)(p, {
          variant: "text-md/normal"
        })]
      }), P ? null : (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(d.StretchedSparkleStar, {
          className: t ? N.fullscreenSparkleStar1 : N.settingsSparkleStar1
        }), (0, a.jsx)(d.StretchedSparkleStar, {
          className: t ? N.fullscreenSparkleStar2 : N.settingsSparkleStar2
        }), (0, a.jsx)(d.StretchedSparkleStar, {
          className: t ? N.fullscreenSparkleStar3 : N.settingsSparkleStar3
        }), (0, a.jsx)(d.StretchedSparkleStar, {
          className: t ? N.fullscreenSparkleStar4 : N.settingsSparkleStar4
        })]
      })]
    })
  })
}