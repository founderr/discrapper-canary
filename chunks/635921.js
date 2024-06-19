var n = t(735250);
t(470079);
var a = t(120356),
  r = t.n(a),
  i = t(442837),
  l = t(481060),
  o = t(100527),
  _ = t(906732),
  c = t(535322),
  E = t(357355),
  u = t(140465),
  d = t(775412),
  R = t(926501),
  I = t(650032),
  T = t(105759),
  A = t(248042),
  M = t(422034),
  S = t(206127),
  N = t(710220),
  p = t(318747),
  m = t(409100),
  g = t(474936),
  C = t(689938),
  f = t(228913);
let P = "HeroHeading",
  O = e => {
    let {
      inOfferExperience: s,
      inTrial: t,
      subscriptionTier: a,
      buttonClassName: i
    } = e, l = null;
    !s && (l = (0, n.jsxs)("div", {
      className: f.buttonContainer,
      children: [(0, n.jsx)(m.Z, {
        forceInverted: !0,
        className: r()(f.button, i),
        subscriptionTier: a
      }), (0, n.jsx)(p.Z, {
        className: r()(f.button, i),
        forceWhite: !0
      })]
    }));
    let o = null;
    return t && (o = (0, n.jsx)("div", {
      className: f.buttonContainer,
      children: (0, n.jsx)(p.Z, {
        className: r()(f.button, i),
        forceWhite: !0
      })
    })), (0, n.jsxs)(n.Fragment, {
      children: [l, " ", o]
    })
  },
  x = e => {
    let {
      isFullscreen: s
    } = e;
    return (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(c.A, {
        className: s ? f.fullscreenSparkleStar1 : f.settingsSparkleStar1
      }), (0, n.jsx)(c.A, {
        className: s ? f.fullscreenSparkleStar2 : f.settingsSparkleStar2
      }), (0, n.jsx)(c.A, {
        className: s ? f.fullscreenSparkleStar3 : f.settingsSparkleStar3
      }), (0, n.jsx)(c.A, {
        className: s ? f.fullscreenSparkleStar4 : f.settingsSparkleStar4
      })]
    })
  };

function h(e) {
  let {
    variant: s = "text-lg/normal",
    withBottomMargin: t = !0
  } = e, a = (0, S.$)();
  return (0, n.jsx)(l.Text, {
    variant: s,
    color: "always-white",
    className: r()(f.description, {
      [f.descriptionBottomMargin]: t
    }),
    children: C.Z.Messages.PREMIUM_MARKETING_HERO_HEADER_DESCRIPTION.format({
      cheapestMonthlyPrice: a
    })
  })
}
s.Z = e => {
  let {
    isFullscreen: s,
    className: t,
    buttonClassName: a,
    subscriptionTier: c,
    hideSparkles: S,
    hideSubscribeAndGiftButton: m,
    entrypoint: L
  } = e, {
    analyticsLocations: b
  } = (0, _.ZP)(o.Z.PREMIUM_MARKETING_HERO_CTA), v = (0, d._O)(), Z = (0, u.Nx)(), D = (0, A.Vi)(), U = (0, i.e7)([E.Z], () => E.Z.affinities), B = (0, T.Z)(), {
    enabled: j
  } = I._.useExperiment({
    location: P
  }, {
    autoTrackExposure: !1
  }), G = L === g.EZ.ApplicationStoreHome && null != B && j, H = U.length > 0, W = (0, R.p)({
    location: P
  });
  return (0, n.jsx)(_.Gt, {
    value: b,
    children: (0, n.jsxs)("div", {
      className: r()(f.container, t, {
        [f.settingsContainer]: !s,
        [f.affinityHeight]: !s && H
      }),
      "data-testid": "v2-marketing-page-hero-header",
      children: [(0, n.jsxs)("div", {
        className: s ? f.fullscreenTextContainer : f.settingsTextContainer,
        children: [(0, n.jsx)(l.Heading, {
          variant: s ? "display-lg" : "display-md",
          color: "always-white",
          children: W ? C.Z.Messages.PREMIUM_MARKETING_HERO_HEADER_TITLE_V2 : C.Z.Messages.PREMIUM_MARKETING_HERO_HEADER_TITLE
        }), G ? (0, n.jsx)(N.Z, {
          referrer: B
        }) : H ? (0, n.jsx)("div", {
          className: r()(f.affinityDescription),
          children: (0, n.jsx)(M.Z, {
            textColor: "always-white",
            smallerText: !s
          })
        }) : (0, n.jsx)(h, {}), D ? (0, n.jsx)("div", {
          className: f.buttonContainer,
          children: (0, n.jsx)(p.Z, {
            className: r()(f.button, a),
            forceWhite: !0
          })
        }) : m ? null : (0, n.jsx)(O, {
          subscriptionTier: c,
          inOfferExperience: Z,
          inTrial: v,
          buttonClassName: a
        }), H && !G && (0, n.jsx)(h, {
          variant: "text-md/normal",
          withBottomMargin: !1
        })]
      }), !(Z || S) && (0, n.jsx)(x, {
        isFullscreen: s
      })]
    })
  })
}