var s = n(735250);
n(470079);
var a = n(120356),
  r = n.n(a),
  i = n(442837),
  l = n(481060),
  o = n(100527),
  c = n(906732),
  d = n(535322),
  _ = n(357355),
  E = n(140465),
  u = n(775412),
  T = n(650032),
  I = n(105759),
  R = n(248042),
  C = n(422034),
  g = n(206127),
  p = n(710220),
  A = n(318747),
  N = n(409100),
  m = n(474936),
  S = n(689938),
  f = n(228913);
let h = e => {
    let {
      inOfferExperience: t,
      inTrial: n,
      subscriptionTier: a,
      buttonClassName: i
    } = e, l = null;
    !t && (l = (0, s.jsxs)("div", {
      className: f.buttonContainer,
      children: [(0, s.jsx)(N.Z, {
        forceInverted: !0,
        className: r()(f.button, i),
        subscriptionTier: a
      }), (0, s.jsx)(A.Z, {
        className: r()(f.button, i),
        forceWhite: !0
      })]
    }));
    let o = null;
    return n && (o = (0, s.jsx)("div", {
      className: f.buttonContainer,
      children: (0, s.jsx)(A.Z, {
        className: r()(f.button, i),
        forceWhite: !0
      })
    })), (0, s.jsxs)(s.Fragment, {
      children: [l, " ", o]
    })
  },
  M = e => {
    let {
      isFullscreen: t
    } = e;
    return (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(d.A, {
        className: t ? f.fullscreenSparkleStar1 : f.settingsSparkleStar1
      }), (0, s.jsx)(d.A, {
        className: t ? f.fullscreenSparkleStar2 : f.settingsSparkleStar2
      }), (0, s.jsx)(d.A, {
        className: t ? f.fullscreenSparkleStar3 : f.settingsSparkleStar3
      }), (0, s.jsx)(d.A, {
        className: t ? f.fullscreenSparkleStar4 : f.settingsSparkleStar4
      })]
    })
  };

function x(e) {
  let {
    variant: t = "text-lg/normal",
    withBottomMargin: n = !0
  } = e, a = (0, g.$)();
  return (0, s.jsx)(l.Text, {
    variant: t,
    color: "always-white",
    className: r()(f.description, {
      [f.descriptionBottomMargin]: n
    }),
    children: S.Z.Messages.PREMIUM_MARKETING_HERO_HEADER_DESCRIPTION.format({
      cheapestMonthlyPrice: a
    })
  })
}
t.Z = e => {
  let {
    isFullscreen: t,
    className: n,
    buttonClassName: a,
    subscriptionTier: d,
    hideSparkles: g,
    hideSubscribeAndGiftButton: N,
    entrypoint: b
  } = e, {
    analyticsLocations: O
  } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_HERO_CTA), P = (0, u._O)(), L = (0, E.Nx)(), v = (0, R.Vi)(), Z = (0, i.e7)([_.Z], () => _.Z.affinities), D = (0, I.Z)(), {
    enabled: B
  } = T._.useExperiment({
    location: "HeroHeading"
  }, {
    autoTrackExposure: !1
  }), U = b === m.EZ.ApplicationStoreHome && null != D && B, j = Z.length > 0;
  return (0, s.jsx)(c.Gt, {
    value: O,
    children: (0, s.jsxs)("div", {
      className: r()(f.container, n, {
        [f.settingsContainer]: !t,
        [f.affinityHeight]: !t && j
      }),
      "data-testid": "v2-marketing-page-hero-header",
      children: [(0, s.jsxs)("div", {
        className: t ? f.fullscreenTextContainer : f.settingsTextContainer,
        children: [(0, s.jsx)(l.Heading, {
          variant: t ? "display-lg" : "display-md",
          color: "always-white",
          children: S.Z.Messages.PREMIUM_MARKETING_HERO_HEADER_TITLE_V2
        }), U ? (0, s.jsx)(p.Z, {
          referrer: D
        }) : j ? (0, s.jsx)("div", {
          className: r()(f.affinityDescription),
          children: (0, s.jsx)(C.Z, {
            textColor: "always-white",
            smallerText: !t
          })
        }) : (0, s.jsx)(x, {}), v ? (0, s.jsx)("div", {
          className: f.buttonContainer,
          children: (0, s.jsx)(A.Z, {
            className: r()(f.button, a),
            forceWhite: !0
          })
        }) : N ? null : (0, s.jsx)(h, {
          subscriptionTier: d,
          inOfferExperience: L,
          inTrial: P,
          buttonClassName: a
        }), j && !U && (0, s.jsx)(x, {
          variant: "text-md/normal",
          withBottomMargin: !1
        })]
      }), !(L || g) && (0, s.jsx)(M, {
        isFullscreen: t
      })]
    })
  })
}