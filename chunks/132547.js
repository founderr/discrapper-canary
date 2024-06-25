n(47120);
var s = n(735250),
  a = n(470079),
  r = n(120356),
  i = n.n(r),
  l = n(622535),
  o = n(481060),
  c = n(100527),
  d = n(906732),
  _ = n(626135),
  E = n(314684),
  u = n(794484),
  T = n(347475),
  I = n(342414),
  R = n(487980),
  C = n(391110),
  g = n(71363),
  p = n(781800),
  A = n(981631),
  N = n(455879),
  m = n(865215);
t.Z = () => {
  let e = a.useRef(null),
    [t, n] = a.useState(!1),
    {
      analyticsLocations: r
    } = (0, d.ZP)(c.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
    [S, f] = a.useState(!1);
  (0, E.FM)();
  let h = (0, R.b)("SubscriberNitroHome");
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(o.AdvancedScrollerAuto, {
      className: N.mainPageScroller,
      ref: e,
      children: (0, s.jsx)("div", {
        className: N.container,
        children: (0, s.jsxs)(d.Gt, {
          value: r,
          children: [(0, s.jsx)(I.Z, {
            className: N.heroHeading,
            location: C.MQ.HOME
          }), (0, s.jsx)(u.Z, {
            variant: C.R0.WHATS_NEW,
            className: i()(N.whatsNew, {
              [N.whatsNewWithOriginalHeroHeading]: !h
            }),
            noBackground: !0,
            leftAlignHeaders: !0
          }), (0, s.jsx)(u.Z, {
            className: N.perksDiscoverability,
            noBackground: !0,
            leftAlignHeaders: !0,
            showAllPerksButton: (0, s.jsx)(p.Z, {
              setIsAllPerksVisible: n,
              previousComponent: C.MQ.HOME
            })
          }), (0, s.jsx)(T.Z, {
            className: N.giftNitro,
            location: c.Z.PREMIUM_MARKETING_GIFT_SECTION,
            analyticsLocation: {
              page: A.ZY5.NITRO_HOME,
              section: A.jXE.GIFT_BANNER
            }
          }), (0, s.jsx)("div", {
            className: N.footerSpacing
          }), (0, s.jsx)(l.$, {
            onChange: e => {
              e && !S && (_.default.track(A.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                location_stack: r
              }), f(!0))
            },
            children: (0, s.jsx)("div", {
              className: N.bottomOfPageVisibilitySensor
            })
          }), (0, s.jsx)(o.Image, {
            src: m,
            className: N.bottomIllustration,
            width: 112,
            height: 85,
            zoomable: !1
          })]
        })
      })
    }), (0, s.jsx)(g.Z, {
      isAllPerksVisible: t,
      setIsAllPerksVisible: n,
      previousComponent: C.MQ.HOME
    })]
  })
}