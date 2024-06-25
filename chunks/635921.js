var n = s(735250);
s(470079);
var a = s(120356),
  i = s.n(a),
  r = s(442837),
  l = s(481060),
  o = s(100527),
  c = s(906732),
  E = s(535322),
  _ = s(357355),
  u = s(140465),
  d = s(775412),
  T = s(650032),
  I = s(105759),
  R = s(248042),
  A = s(422034),
  N = s(206127),
  C = s(710220),
  g = s(318747),
  m = s(409100),
  M = s(474936),
  S = s(689938),
  p = s(228913);
let h = e => {
    let {
      inOfferExperience: t,
      inTrial: s,
      subscriptionTier: a,
      buttonClassName: r
    } = e, l = null;
    !t && (l = (0, n.jsxs)("div", {
      className: p.buttonContainer,
      children: [(0, n.jsx)(m.Z, {
        forceInverted: !0,
        className: i()(p.button, r),
        subscriptionTier: a
      }), (0, n.jsx)(g.Z, {
        className: i()(p.button, r),
        forceWhite: !0
      })]
    }));
    let o = null;
    return s && (o = (0, n.jsx)("div", {
      className: p.buttonContainer,
      children: (0, n.jsx)(g.Z, {
        className: i()(p.button, r),
        forceWhite: !0
      })
    })), (0, n.jsxs)(n.Fragment, {
      children: [l, " ", o]
    })
  },
  f = e => {
    let {
      isFullscreen: t
    } = e;
    return (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(E.A, {
        className: t ? p.fullscreenSparkleStar1 : p.settingsSparkleStar1
      }), (0, n.jsx)(E.A, {
        className: t ? p.fullscreenSparkleStar2 : p.settingsSparkleStar2
      }), (0, n.jsx)(E.A, {
        className: t ? p.fullscreenSparkleStar3 : p.settingsSparkleStar3
      }), (0, n.jsx)(E.A, {
        className: t ? p.fullscreenSparkleStar4 : p.settingsSparkleStar4
      })]
    })
  };

function O(e) {
  let {
    variant: t = "text-lg/normal",
    withBottomMargin: s = !0
  } = e, a = (0, N.$)();
  return (0, n.jsx)(l.Text, {
    variant: t,
    color: "always-white",
    className: i()(p.description, {
      [p.descriptionBottomMargin]: s
    }),
    children: S.Z.Messages.PREMIUM_MARKETING_HERO_HEADER_DESCRIPTION.format({
      cheapestMonthlyPrice: a
    })
  })
}
t.Z = e => {
  let {
    isFullscreen: t,
    className: s,
    buttonClassName: a,
    subscriptionTier: E,
    hideSparkles: N,
    hideSubscribeAndGiftButton: m,
    entrypoint: x
  } = e, {
    analyticsLocations: L
  } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_HERO_CTA), P = (0, d._O)(), v = (0, u.Nx)(), Z = (0, R.Vi)(), b = (0, r.e7)([_.Z], () => _.Z.affinities), D = (0, I.Z)(), {
    enabled: U
  } = T._.useExperiment({
    location: "HeroHeading"
  }, {
    autoTrackExposure: !1
  }), j = x === M.EZ.ApplicationStoreHome && null != D && U, G = b.length > 0;
  return (0, n.jsx)(c.Gt, {
    value: L,
    children: (0, n.jsxs)("div", {
      className: i()(p.container, s, {
        [p.settingsContainer]: !t,
        [p.affinityHeight]: !t && G
      }),
      "data-testid": "v2-marketing-page-hero-header",
      children: [(0, n.jsxs)("div", {
        className: t ? p.fullscreenTextContainer : p.settingsTextContainer,
        children: [(0, n.jsx)(l.Heading, {
          variant: t ? "display-lg" : "display-md",
          color: "always-white",
          children: S.Z.Messages.PREMIUM_MARKETING_HERO_HEADER_TITLE_V2
        }), j ? (0, n.jsx)(C.Z, {
          referrer: D
        }) : G ? (0, n.jsx)("div", {
          className: i()(p.affinityDescription),
          children: (0, n.jsx)(A.Z, {
            textColor: "always-white",
            smallerText: !t
          })
        }) : (0, n.jsx)(O, {}), Z ? (0, n.jsx)("div", {
          className: p.buttonContainer,
          children: (0, n.jsx)(g.Z, {
            className: i()(p.button, a),
            forceWhite: !0
          })
        }) : m ? null : (0, n.jsx)(h, {
          subscriptionTier: E,
          inOfferExperience: v,
          inTrial: P,
          buttonClassName: a
        }), G && !j && (0, n.jsx)(O, {
          variant: "text-md/normal",
          withBottomMargin: !1
        })]
      }), !(v || N) && (0, n.jsx)(f, {
        isFullscreen: t
      })]
    })
  })
}