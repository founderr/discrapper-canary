"use strict";
s.r(t);
var a = s("735250");
s("470079");
var i = s("803997"),
  r = s.n(i),
  n = s("481060"),
  l = s("100527"),
  o = s("906732"),
  u = s("775412"),
  d = s("1014"),
  c = s("197115"),
  _ = s("823188"),
  E = s("689938"),
  T = s("672827"),
  I = s("872905"),
  R = s("578478");
let f = e => {
    let {
      className: t,
      inTrial: s
    } = e;
    return (0, a.jsx)(a.Fragment, {
      children: (0, a.jsxs)("div", {
        className: r()(T.container, t),
        "data-testid": "subscriber-nitro-home-hero-header",
        children: [(0, a.jsx)("img", {
          src: I,
          alt: "",
          className: T.headerArt
        }), (0, a.jsxs)("div", {
          className: T.content,
          children: [(0, a.jsx)(_.PremiumPillWithSparkles, {
            text: E.default.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
            className: r()(T.trialPill, {
              [T.hidden]: !s
            }),
            colorOptions: _.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL
          }), (0, a.jsx)(n.Heading, {
            variant: "display-lg",
            color: "always-white",
            children: E.default.Messages.SUBSCRIBER_NITRO_HOME_TITLE_ONE_LINE
          }), (0, a.jsx)("div", {
            className: T.buttonContainer,
            children: (0, a.jsx)(c.default, {
              color: n.ButtonColors.BRAND,
              buttonText: E.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_HEADING,
              className: T.button,
              isGift: !0
            })
          })]
        })]
      })
    })
  },
  S = e => {
    let {
      inTrial: t
    } = e;
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("img", {
        src: R,
        alt: "",
        className: T.headerArtV2
      }), (0, a.jsx)("div", {
        className: T.containerV2,
        "data-testid": "subscriber-nitro-home-hero-header",
        children: (0, a.jsxs)("div", {
          className: T.contentV2,
          children: [(0, a.jsx)(_.PremiumPillWithSparkles, {
            text: E.default.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
            className: r()(T.trialPill, {
              [T.hidden]: !t
            }),
            colorOptions: _.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL
          }), (0, a.jsx)(n.Heading, {
            variant: "display-lg",
            color: "always-white",
            children: E.default.Messages.SUBSCRIBER_NITRO_HOME_TITLE_ONE_LINE
          }), (0, a.jsx)("div", {
            className: T.buttonContainer,
            children: (0, a.jsx)(c.default, {
              color: n.ButtonColors.BRAND,
              buttonText: E.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_HEADING,
              className: T.button,
              isGift: !0
            })
          })]
        })
      })]
    })
  };
t.default = e => {
  let {
    className: t
  } = e, {
    analyticsLocations: s
  } = (0, o.default)(l.default.PREMIUM_MARKETING_HERO_CTA), i = (0, u.useHasActiveTrial)(), {
    enabled: r
  } = d.default.useExperiment({
    location: "HeroHeading"
  }, {
    autoTrackExposure: !0
  }), n = r ? (0, a.jsx)(S, {
    inTrial: i
  }) : (0, a.jsx)(f, {
    className: t,
    inTrial: i
  });
  return (0, a.jsx)(o.AnalyticsLocationProvider, {
    value: s,
    children: n
  })
}