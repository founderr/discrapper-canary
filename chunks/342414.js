"use strict";
s.r(t);
var a = s("735250");
s("470079");
var i = s("803997"),
  r = s.n(i),
  l = s("481060"),
  n = s("100527"),
  o = s("906732"),
  u = s("775412"),
  d = s("1014"),
  c = s("520540"),
  _ = s("197115"),
  E = s("823188"),
  C = s("386733"),
  f = s("487980"),
  T = s("689938"),
  I = s("672827"),
  R = s("872905"),
  S = s("578478");
let p = e => {
    let {
      className: t,
      inTrial: s
    } = e;
    return (0, a.jsx)(a.Fragment, {
      children: (0, a.jsxs)("div", {
        className: r()(I.container, t),
        "data-testid": "subscriber-nitro-home-hero-header",
        children: [(0, a.jsx)("img", {
          src: R,
          alt: "",
          className: I.headerArt
        }), (0, a.jsxs)("div", {
          className: I.content,
          children: [(0, a.jsx)(E.PremiumPillWithSparkles, {
            text: T.default.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
            className: r()(I.trialPill, {
              [I.hidden]: !s
            }),
            colorOptions: E.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL
          }), (0, a.jsx)(l.Heading, {
            variant: "display-lg",
            color: "always-white",
            children: T.default.Messages.SUBSCRIBER_NITRO_HOME_TITLE_ONE_LINE
          }), (0, a.jsx)("div", {
            className: I.buttonContainer,
            children: (0, a.jsx)(_.default, {
              color: l.ButtonColors.BRAND,
              buttonText: T.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_HEADING,
              className: I.button,
              isGift: !0
            })
          })]
        })]
      })
    })
  },
  m = e => {
    let {
      inTrial: t,
      location: s
    } = e, {
      subscriberHomeVariant: i
    } = c.ReferralProgramSender.useExperiment({
      location: s
    }, {
      autoTrackExposure: !1
    }), n = (0, f.useShouldShowReferralProgressBar)(s), o = i === c.SubscriberHomeVariant.VARIANT_2;
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("img", {
        src: S,
        alt: "",
        className: I.headerArtV2
      }), (0, a.jsx)("div", {
        className: I.containerV2,
        "data-testid": "subscriber-nitro-home-hero-header",
        children: (0, a.jsxs)("div", {
          className: I.contentV2,
          children: [(0, a.jsx)(E.PremiumPillWithSparkles, {
            text: T.default.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
            className: r()(I.trialPill, {
              [I.hidden]: !t
            }),
            colorOptions: E.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL
          }), (0, a.jsx)(l.Heading, {
            variant: "display-lg",
            color: "always-white",
            children: T.default.Messages.SUBSCRIBER_NITRO_HOME_TITLE_ONE_LINE
          }), (!n || o) && (0, a.jsx)("div", {
            className: I.buttonContainer,
            children: (0, a.jsx)(_.default, {
              color: l.ButtonColors.BRAND,
              buttonText: T.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_HEADING,
              className: I.button,
              isGift: !0
            })
          }), n && (0, a.jsx)(C.default, {})]
        })
      })]
    })
  };
t.default = e => {
  let {
    className: t,
    location: s
  } = e, {
    analyticsLocations: i
  } = (0, o.default)(n.default.PREMIUM_MARKETING_HERO_CTA), r = (0, u.useHasActiveTrial)(), {
    enabled: l
  } = d.default.useExperiment({
    location: "HeroHeading"
  }, {
    autoTrackExposure: !0
  }), c = l ? (0, a.jsx)(m, {
    inTrial: r,
    location: s
  }) : (0, a.jsx)(p, {
    className: t,
    inTrial: r
  });
  return (0, a.jsx)(o.AnalyticsLocationProvider, {
    value: i,
    children: c
  })
}