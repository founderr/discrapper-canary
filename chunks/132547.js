s(47120);
var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  l = s(622535),
  o = s(481060),
  c = s(100527),
  E = s(906732),
  _ = s(626135),
  u = s(314684),
  d = s(794484),
  T = s(347475),
  I = s(342414),
  R = s(487980),
  A = s(391110),
  N = s(71363),
  C = s(781800),
  g = s(981631),
  m = s(455879),
  M = s(865215);
t.Z = () => {
  let e = a.useRef(null),
    [t, s] = a.useState(!1),
    {
      analyticsLocations: i
    } = (0, E.ZP)(c.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
    [S, p] = a.useState(!1);
  (0, u.FM)();
  let h = (0, R.b)("SubscriberNitroHome");
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(o.AdvancedScrollerAuto, {
      className: m.mainPageScroller,
      ref: e,
      children: (0, n.jsx)("div", {
        className: m.container,
        children: (0, n.jsxs)(E.Gt, {
          value: i,
          children: [(0, n.jsx)(I.Z, {
            className: m.heroHeading,
            location: A.MQ.HOME
          }), (0, n.jsx)(d.Z, {
            variant: A.R0.WHATS_NEW,
            className: r()(m.whatsNew, {
              [m.whatsNewWithOriginalHeroHeading]: !h
            }),
            noBackground: !0,
            leftAlignHeaders: !0
          }), (0, n.jsx)(d.Z, {
            className: m.perksDiscoverability,
            noBackground: !0,
            leftAlignHeaders: !0,
            showAllPerksButton: (0, n.jsx)(C.Z, {
              setIsAllPerksVisible: s,
              previousComponent: A.MQ.HOME
            })
          }), (0, n.jsx)(T.Z, {
            className: m.giftNitro,
            location: c.Z.PREMIUM_MARKETING_GIFT_SECTION,
            analyticsLocation: {
              page: g.ZY5.NITRO_HOME,
              section: g.jXE.GIFT_BANNER
            }
          }), (0, n.jsx)("div", {
            className: m.footerSpacing
          }), (0, n.jsx)(l.$, {
            onChange: e => {
              e && !S && (_.default.track(g.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                location_stack: i
              }), p(!0))
            },
            children: (0, n.jsx)("div", {
              className: m.bottomOfPageVisibilitySensor
            })
          }), (0, n.jsx)(o.Image, {
            src: M,
            className: m.bottomIllustration,
            width: 112,
            height: 85,
            zoomable: !1
          })]
        })
      })
    }), (0, n.jsx)(N.Z, {
      isAllPerksVisible: t,
      setIsAllPerksVisible: s,
      previousComponent: A.MQ.HOME
    })]
  })
}