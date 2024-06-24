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
  R = t(775412),
  d = t(650032),
  I = t(105759),
  T = t(248042),
  A = t(422034),
  M = t(206127),
  S = t(710220),
  N = t(318747),
  p = t(409100),
  m = t(474936),
  C = t(689938),
  g = t(228913);
let P = e => {
    let {
      inOfferExperience: s,
      inTrial: t,
      subscriptionTier: a,
      buttonClassName: i
    } = e, l = null;
    !s && (l = (0, n.jsxs)("div", {
      className: g.buttonContainer,
      children: [(0, n.jsx)(p.Z, {
        forceInverted: !0,
        className: r()(g.button, i),
        subscriptionTier: a
      }), (0, n.jsx)(N.Z, {
        className: r()(g.button, i),
        forceWhite: !0
      })]
    }));
    let o = null;
    return t && (o = (0, n.jsx)("div", {
      className: g.buttonContainer,
      children: (0, n.jsx)(N.Z, {
        className: r()(g.button, i),
        forceWhite: !0
      })
    })), (0, n.jsxs)(n.Fragment, {
      children: [l, " ", o]
    })
  },
  O = e => {
    let {
      isFullscreen: s
    } = e;
    return (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(c.A, {
        className: s ? g.fullscreenSparkleStar1 : g.settingsSparkleStar1
      }), (0, n.jsx)(c.A, {
        className: s ? g.fullscreenSparkleStar2 : g.settingsSparkleStar2
      }), (0, n.jsx)(c.A, {
        className: s ? g.fullscreenSparkleStar3 : g.settingsSparkleStar3
      }), (0, n.jsx)(c.A, {
        className: s ? g.fullscreenSparkleStar4 : g.settingsSparkleStar4
      })]
    })
  };

function f(e) {
  let {
    variant: s = "text-lg/normal",
    withBottomMargin: t = !0
  } = e, a = (0, M.$)();
  return (0, n.jsx)(l.Text, {
    variant: s,
    color: "always-white",
    className: r()(g.description, {
      [g.descriptionBottomMargin]: t
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
    hideSparkles: M,
    hideSubscribeAndGiftButton: p,
    entrypoint: x
  } = e, {
    analyticsLocations: L
  } = (0, _.ZP)(o.Z.PREMIUM_MARKETING_HERO_CTA), h = (0, R._O)(), b = (0, u.Nx)(), v = (0, T.Vi)(), Z = (0, i.e7)([E.Z], () => E.Z.affinities), D = (0, I.Z)(), {
    enabled: U
  } = d._.useExperiment({
    location: "HeroHeading"
  }, {
    autoTrackExposure: !1
  }), B = x === m.EZ.ApplicationStoreHome && null != D && U, j = Z.length > 0;
  return (0, n.jsx)(_.Gt, {
    value: L,
    children: (0, n.jsxs)("div", {
      className: r()(g.container, t, {
        [g.settingsContainer]: !s,
        [g.affinityHeight]: !s && j
      }),
      "data-testid": "v2-marketing-page-hero-header",
      children: [(0, n.jsxs)("div", {
        className: s ? g.fullscreenTextContainer : g.settingsTextContainer,
        children: [(0, n.jsx)(l.Heading, {
          variant: s ? "display-lg" : "display-md",
          color: "always-white",
          children: C.Z.Messages.PREMIUM_MARKETING_HERO_HEADER_TITLE_V2
        }), B ? (0, n.jsx)(S.Z, {
          referrer: D
        }) : j ? (0, n.jsx)("div", {
          className: r()(g.affinityDescription),
          children: (0, n.jsx)(A.Z, {
            textColor: "always-white",
            smallerText: !s
          })
        }) : (0, n.jsx)(f, {}), v ? (0, n.jsx)("div", {
          className: g.buttonContainer,
          children: (0, n.jsx)(N.Z, {
            className: r()(g.button, a),
            forceWhite: !0
          })
        }) : p ? null : (0, n.jsx)(P, {
          subscriptionTier: c,
          inOfferExperience: b,
          inTrial: h,
          buttonClassName: a
        }), j && !B && (0, n.jsx)(f, {
          variant: "text-md/normal",
          withBottomMargin: !1
        })]
      }), !(b || M) && (0, n.jsx)(O, {
        isFullscreen: s
      })]
    })
  })
}