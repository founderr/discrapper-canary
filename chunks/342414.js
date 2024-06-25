var n = s(735250);
s(470079);
var a = s(120356),
  i = s.n(a),
  r = s(481060),
  l = s(100527),
  o = s(906732),
  c = s(775412),
  E = s(520540),
  _ = s(197115),
  u = s(823188),
  d = s(386733),
  T = s(487980),
  I = s(689938),
  R = s(482755),
  A = s(872905),
  N = s(578478);
let C = e => {
    let {
      className: t,
      inTrial: s
    } = e;
    return (0, n.jsx)(n.Fragment, {
      children: (0, n.jsxs)("div", {
        className: i()(R.container, t),
        "data-testid": "subscriber-nitro-home-hero-header",
        children: [(0, n.jsx)("img", {
          src: A,
          alt: "",
          className: R.headerArt
        }), (0, n.jsxs)("div", {
          className: R.content,
          children: [(0, n.jsx)(u.Cy, {
            text: I.Z.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
            className: i()(R.trialPill, {
              [R.hidden]: !s
            }),
            colorOptions: u.VE.PREMIUM_TIER_2_WHITE_FILL
          }), (0, n.jsx)(r.Heading, {
            variant: "display-lg",
            color: "always-white",
            children: I.Z.Messages.SUBSCRIBER_NITRO_HOME_TITLE_ONE_LINE
          }), (0, n.jsx)("div", {
            className: R.buttonContainer,
            children: (0, n.jsx)(_.Z, {
              color: r.ButtonColors.BRAND,
              buttonText: I.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_HEADING,
              className: R.button,
              isGift: !0
            })
          })]
        })]
      })
    })
  },
  g = e => {
    let {
      inTrial: t,
      location: s
    } = e, {
      subscriberHomeVariant: a
    } = E.g.useExperiment({
      location: s
    }, {
      autoTrackExposure: !1
    }), l = a === E.p.VARIANT_2;
    return (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("img", {
        src: N,
        alt: "",
        className: R.headerArtV2
      }), (0, n.jsx)("div", {
        className: R.containerV2,
        "data-testid": "subscriber-nitro-home-hero-header",
        children: (0, n.jsxs)("div", {
          className: R.contentV2,
          children: [(0, n.jsx)(u.Cy, {
            text: I.Z.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
            className: i()(R.trialPill, {
              [R.hidden]: !t
            }),
            colorOptions: u.VE.PREMIUM_TIER_2_WHITE_FILL
          }), (0, n.jsx)(r.Heading, {
            variant: "display-lg",
            color: "always-white",
            children: I.Z.Messages.SUBSCRIBER_NITRO_HOME_TITLE_ONE_LINE
          }), l && (0, n.jsx)("div", {
            className: R.buttonContainer,
            children: (0, n.jsx)(_.Z, {
              color: r.ButtonColors.BRAND,
              buttonText: I.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_HEADING,
              className: R.button,
              isGift: !0
            })
          }), (0, n.jsx)(d.Z, {})]
        })
      })]
    })
  };
t.Z = e => {
  let {
    className: t,
    location: s
  } = e, {
    analyticsLocations: a
  } = (0, o.ZP)(l.Z.PREMIUM_MARKETING_HERO_CTA), i = (0, c._O)(), r = (0, T.b)(s) ? (0, n.jsx)(g, {
    inTrial: i,
    location: s
  }) : (0, n.jsx)(C, {
    className: t,
    inTrial: i
  });
  return (0, n.jsx)(o.Gt, {
    value: a,
    children: r
  })
}