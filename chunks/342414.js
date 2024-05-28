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
  c = s("520540"),
  d = s("197115"),
  _ = s("823188"),
  E = s("386733"),
  R = s("487980"),
  T = s("689938"),
  f = s("948541"),
  m = s("872905"),
  I = s("578478");
let S = e => {
    let {
      className: t,
      inTrial: s
    } = e;
    return (0, a.jsx)(a.Fragment, {
      children: (0, a.jsxs)("div", {
        className: i()(f.container, t),
        "data-testid": "subscriber-nitro-home-hero-header",
        children: [(0, a.jsx)("img", {
          src: m,
          alt: "",
          className: f.headerArt
        }), (0, a.jsxs)("div", {
          className: f.content,
          children: [(0, a.jsx)(_.PremiumPillWithSparkles, {
            text: T.default.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
            className: i()(f.trialPill, {
              [f.hidden]: !s
            }),
            colorOptions: _.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL
          }), (0, a.jsx)(n.Heading, {
            variant: "display-lg",
            color: "always-white",
            children: T.default.Messages.SUBSCRIBER_NITRO_HOME_TITLE_ONE_LINE
          }), (0, a.jsx)("div", {
            className: f.buttonContainer,
            children: (0, a.jsx)(d.default, {
              color: n.ButtonColors.BRAND,
              buttonText: T.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_HEADING,
              className: f.button,
              isGift: !0
            })
          })]
        })]
      })
    })
  },
  p = e => {
    let {
      inTrial: t,
      location: s
    } = e, {
      subscriberHomeVariant: r
    } = c.ReferralProgramSender.useExperiment({
      location: s
    }, {
      autoTrackExposure: !1
    }), l = r === c.SubscriberHomeVariant.VARIANT_2;
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("img", {
        src: I,
        alt: "",
        className: f.headerArtV2
      }), (0, a.jsx)("div", {
        className: f.containerV2,
        "data-testid": "subscriber-nitro-home-hero-header",
        children: (0, a.jsxs)("div", {
          className: f.contentV2,
          children: [(0, a.jsx)(_.PremiumPillWithSparkles, {
            text: T.default.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
            className: i()(f.trialPill, {
              [f.hidden]: !t
            }),
            colorOptions: _.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL
          }), (0, a.jsx)(n.Heading, {
            variant: "display-lg",
            color: "always-white",
            children: T.default.Messages.SUBSCRIBER_NITRO_HOME_TITLE_ONE_LINE
          }), l && (0, a.jsx)("div", {
            className: f.buttonContainer,
            children: (0, a.jsx)(d.default, {
              color: n.ButtonColors.BRAND,
              buttonText: T.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_HEADING,
              className: f.button,
              isGift: !0
            })
          }), (0, a.jsx)(E.default, {})]
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
  } = (0, o.default)(l.default.PREMIUM_MARKETING_HERO_CTA), i = (0, u.useHasActiveTrial)(), n = (0, R.useIsEligibleSenderForReferralProgram)(s) ? (0, a.jsx)(p, {
    inTrial: i,
    location: s
  }) : (0, a.jsx)(S, {
    className: t,
    inTrial: i
  });
  return (0, a.jsx)(o.AnalyticsLocationProvider, {
    value: r,
    children: n
  })
}