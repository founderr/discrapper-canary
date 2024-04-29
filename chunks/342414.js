"use strict";
s.r(t);
var a = s("735250");
s("470079");
var r = s("120356"),
  i = s.n(r),
  n = s("481060"),
  l = s("100527"),
  o = s("906732"),
  u = s("775412"),
  d = s("1014"),
  c = s("520540"),
  _ = s("197115"),
  E = s("823188"),
  T = s("386733"),
  I = s("487980"),
  R = s("689938"),
  f = s("948541"),
  S = s("872905"),
  m = s("578478");
let A = e => {
    let {
      className: t,
      inTrial: s
    } = e;
    return (0, a.jsx)(a.Fragment, {
      children: (0, a.jsxs)("div", {
        className: i()(f.container, t),
        "data-testid": "subscriber-nitro-home-hero-header",
        children: [(0, a.jsx)("img", {
          src: S,
          alt: "",
          className: f.headerArt
        }), (0, a.jsxs)("div", {
          className: f.content,
          children: [(0, a.jsx)(E.PremiumPillWithSparkles, {
            text: R.default.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
            className: i()(f.trialPill, {
              [f.hidden]: !s
            }),
            colorOptions: E.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL
          }), (0, a.jsx)(n.Heading, {
            variant: "display-lg",
            color: "always-white",
            children: R.default.Messages.SUBSCRIBER_NITRO_HOME_TITLE_ONE_LINE
          }), (0, a.jsx)("div", {
            className: f.buttonContainer,
            children: (0, a.jsx)(_.default, {
              color: n.ButtonColors.BRAND,
              buttonText: R.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_HEADING,
              className: f.button,
              isGift: !0
            })
          })]
        })]
      })
    })
  },
  N = e => {
    let {
      inTrial: t,
      location: s
    } = e, {
      subscriberHomeVariant: r
    } = c.ReferralProgramSender.useExperiment({
      location: s
    }, {
      autoTrackExposure: !1
    }), l = (0, I.useIsEligibleSenderForReferralProgram)(s), o = r === c.SubscriberHomeVariant.VARIANT_2;
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("img", {
        src: m,
        alt: "",
        className: f.headerArtV2
      }), (0, a.jsx)("div", {
        className: f.containerV2,
        "data-testid": "subscriber-nitro-home-hero-header",
        children: (0, a.jsxs)("div", {
          className: f.contentV2,
          children: [(0, a.jsx)(E.PremiumPillWithSparkles, {
            text: R.default.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
            className: i()(f.trialPill, {
              [f.hidden]: !t
            }),
            colorOptions: E.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL
          }), (0, a.jsx)(n.Heading, {
            variant: "display-lg",
            color: "always-white",
            children: R.default.Messages.SUBSCRIBER_NITRO_HOME_TITLE_ONE_LINE
          }), (!l || o) && (0, a.jsx)("div", {
            className: f.buttonContainer,
            children: (0, a.jsx)(_.default, {
              color: n.ButtonColors.BRAND,
              buttonText: R.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_HEADING,
              className: f.button,
              isGift: !0
            })
          }), l && (0, a.jsx)(T.default, {})]
        })
      })]
    })
  };
t.default = e => {
  let {
    className: t,
    location: s
  } = e, {
    analyticsLocations: r
  } = (0, o.default)(l.default.PREMIUM_MARKETING_HERO_CTA), i = (0, u.useHasActiveTrial)(), {
    enabled: n
  } = d.default.useExperiment({
    location: "HeroHeading"
  }, {
    autoTrackExposure: !0
  }), c = n ? (0, a.jsx)(N, {
    inTrial: i,
    location: s
  }) : (0, a.jsx)(A, {
    className: t,
    inTrial: i
  });
  return (0, a.jsx)(o.AnalyticsLocationProvider, {
    value: r,
    children: c
  })
}