"use strict";
s.r(t), s.d(t, {
  default: function() {
    return P
  }
});
var a = s("37983");
s("884691");
var n = s("414456"),
  i = s.n(n),
  r = s("446674"),
  l = s("77078"),
  o = s("812204"),
  u = s("685665"),
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
  N = s("23596");
let p = e => {
    let {
      inOfferExperience: t,
      inTrial: s,
      subscriptionTier: n
    } = e, i = null;
    !t && (i = (0, a.jsxs)("div", {
      className: N.buttonContainer,
      children: [(0, a.jsx)(m.default, {
        forceInverted: !0,
        className: N.button,
        subscriptionTier: n
      }), (0, a.jsx)(R.default, {
        className: N.button,
        forceWhite: !0
      })]
    }));
    let r = null;
    return s && (r = (0, a.jsx)("div", {
      className: N.buttonContainer,
      children: (0, a.jsx)(R.default, {
        className: N.button,
        forceWhite: !0
      })
    })), (0, a.jsxs)(a.Fragment, {
      children: [i, " ", r]
    })
  },
  g = e => {
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
  } = e, s = (0, S.useCheapestMonthlyPrice)();
  return (0, a.jsx)(l.Text, {
    variant: t,
    color: "always-white",
    className: N.description,
    children: A.default.Messages.PREMIUM_MARKETING_HERO_HEADER_DESCRIPTION.format({
      cheapestMonthlyPrice: s
    })
  })
}
var P = e => {
  let {
    isFullscreen: t,
    className: s,
    subscriptionTier: n,
    hideSparkles: d,
    hideSubscribeAndGiftButton: S
  } = e, {
    AnalyticsLocationProvider: m
  } = (0, u.default)(o.default.PREMIUM_MARKETING_HERO_CTA), P = (0, I.useHasActiveTrial)(), O = (0, E.useIsInPremiumOfferExperience)(), M = (0, T.useIsEligibleForBogoPromotion)(), {
    marketingEnabled: h
  } = c.default.useExperiment({
    location: "HeroHeading"
  }, {
    autoTrackExposure: !1
  }), L = (0, r.useStateFromStores)([_.default], () => _.default.affinities);
  L.length > 0 && c.default.trackExposure({
    location: "HeroHeading"
  });
  let x = h && L.length > 0;
  return (0, a.jsx)(m, {
    children: (0, a.jsxs)("div", {
      className: i(N.container, s, {
        [N.settingsContainer]: !t,
        [N.affinityHeight]: !t && x
      }),
      "data-testid": "v2-marketing-page-hero-header",
      children: [(0, a.jsxs)("div", {
        className: t ? N.fullscreenTextContainer : N.settingsTextContainer,
        children: [(0, a.jsx)(l.Heading, {
          variant: t ? "display-lg" : "display-md",
          color: "always-white",
          children: A.default.Messages.PREMIUM_MARKETING_HERO_HEADER_TITLE
        }), x ? (0, a.jsx)("div", {
          className: N.affinityDescription,
          children: (0, a.jsx)(f.default, {
            smallerText: !t
          })
        }) : (0, a.jsx)(C, {}), M ? (0, a.jsx)("div", {
          className: N.buttonContainer,
          children: (0, a.jsx)(R.default, {
            className: N.button,
            forceWhite: !0
          })
        }) : S ? null : (0, a.jsx)(p, {
          subscriptionTier: n,
          inOfferExperience: O,
          inTrial: P
        }), x && (0, a.jsx)(C, {
          variant: "text-md/normal"
        })]
      }), !(O || d) && (0, a.jsx)(g, {
        isFullscreen: t
      })]
    })
  })
}