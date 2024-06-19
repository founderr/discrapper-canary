var n = t(735250);
t(470079);
var a = t(120356),
  r = t.n(a),
  i = t(481060),
  l = t(100527),
  o = t(906732),
  _ = t(775412),
  c = t(520540),
  E = t(197115),
  u = t(823188),
  d = t(386733),
  R = t(487980),
  I = t(689938),
  T = t(482755),
  A = t(872905),
  M = t(578478);
let S = e => {
    let {
      className: s,
      inTrial: t
    } = e;
    return (0, n.jsx)(n.Fragment, {
      children: (0, n.jsxs)("div", {
        className: r()(T.container, s),
        "data-testid": "subscriber-nitro-home-hero-header",
        children: [(0, n.jsx)("img", {
          src: A,
          alt: "",
          className: T.headerArt
        }), (0, n.jsxs)("div", {
          className: T.content,
          children: [(0, n.jsx)(u.Cy, {
            text: I.Z.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
            className: r()(T.trialPill, {
              [T.hidden]: !t
            }),
            colorOptions: u.VE.PREMIUM_TIER_2_WHITE_FILL
          }), (0, n.jsx)(i.Heading, {
            variant: "display-lg",
            color: "always-white",
            children: I.Z.Messages.SUBSCRIBER_NITRO_HOME_TITLE_ONE_LINE
          }), (0, n.jsx)("div", {
            className: T.buttonContainer,
            children: (0, n.jsx)(E.Z, {
              color: i.ButtonColors.BRAND,
              buttonText: I.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_HEADING,
              className: T.button,
              isGift: !0
            })
          })]
        })]
      })
    })
  },
  N = e => {
    let {
      inTrial: s,
      location: t
    } = e, {
      subscriberHomeVariant: a
    } = c.g.useExperiment({
      location: t
    }, {
      autoTrackExposure: !1
    }), l = a === c.p.VARIANT_2;
    return (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("img", {
        src: M,
        alt: "",
        className: T.headerArtV2
      }), (0, n.jsx)("div", {
        className: T.containerV2,
        "data-testid": "subscriber-nitro-home-hero-header",
        children: (0, n.jsxs)("div", {
          className: T.contentV2,
          children: [(0, n.jsx)(u.Cy, {
            text: I.Z.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
            className: r()(T.trialPill, {
              [T.hidden]: !s
            }),
            colorOptions: u.VE.PREMIUM_TIER_2_WHITE_FILL
          }), (0, n.jsx)(i.Heading, {
            variant: "display-lg",
            color: "always-white",
            children: I.Z.Messages.SUBSCRIBER_NITRO_HOME_TITLE_ONE_LINE
          }), l && (0, n.jsx)("div", {
            className: T.buttonContainer,
            children: (0, n.jsx)(E.Z, {
              color: i.ButtonColors.BRAND,
              buttonText: I.Z.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_HEADING,
              className: T.button,
              isGift: !0
            })
          }), (0, n.jsx)(d.Z, {})]
        })
      })]
    })
  };
s.Z = e => {
  let {
    className: s,
    location: t
  } = e, {
    analyticsLocations: a
  } = (0, o.ZP)(l.Z.PREMIUM_MARKETING_HERO_CTA), r = (0, _._O)(), i = (0, R.b)(t) ? (0, n.jsx)(N, {
    inTrial: r,
    location: t
  }) : (0, n.jsx)(S, {
    className: s,
    inTrial: r
  });
  return (0, n.jsx)(o.Gt, {
    value: a,
    children: i
  })
}