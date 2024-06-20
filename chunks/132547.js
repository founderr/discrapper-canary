t(47120);
var n = t(735250),
  a = t(470079),
  r = t(120356),
  i = t.n(r),
  l = t(622535),
  o = t(481060),
  _ = t(100527),
  c = t(906732),
  E = t(626135),
  u = t(314684),
  d = t(794484),
  R = t(347475),
  I = t(342414),
  T = t(487980),
  A = t(391110),
  M = t(71363),
  S = t(781800),
  N = t(981631),
  p = t(455879),
  m = t(865215);
s.Z = () => {
  let e = a.useRef(null),
    [s, t] = a.useState(!1),
    {
      analyticsLocations: r
    } = (0, c.ZP)(_.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
    [C, g] = a.useState(!1);
  (0, u.FM)();
  let f = (0, T.b)("SubscriberNitroHome");
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(o.AdvancedScrollerAuto, {
      className: p.mainPageScroller,
      ref: e,
      children: (0, n.jsx)("div", {
        className: p.container,
        children: (0, n.jsxs)(c.Gt, {
          value: r,
          children: [(0, n.jsx)(I.Z, {
            className: p.heroHeading,
            location: A.MQ.HOME
          }), (0, n.jsx)(d.Z, {
            variant: A.R0.WHATS_NEW,
            className: i()(p.whatsNew, {
              [p.whatsNewWithOriginalHeroHeading]: !f
            }),
            noBackground: !0,
            leftAlignHeaders: !0
          }), (0, n.jsx)(d.Z, {
            className: p.perksDiscoverability,
            noBackground: !0,
            leftAlignHeaders: !0,
            showAllPerksButton: (0, n.jsx)(S.Z, {
              setIsAllPerksVisible: t,
              previousComponent: A.MQ.HOME
            })
          }), (0, n.jsx)(R.Z, {
            className: p.giftNitro,
            location: _.Z.PREMIUM_MARKETING_GIFT_SECTION,
            analyticsLocation: {
              page: N.ZY5.NITRO_HOME,
              section: N.jXE.GIFT_BANNER
            }
          }), (0, n.jsx)("div", {
            className: p.footerSpacing
          }), (0, n.jsx)(l.$, {
            onChange: e => {
              e && !C && (E.default.track(N.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                location_stack: r
              }), g(!0))
            },
            children: (0, n.jsx)("div", {
              className: p.bottomOfPageVisibilitySensor
            })
          }), (0, n.jsx)(o.Image, {
            src: m,
            className: p.bottomIllustration,
            width: 112,
            height: 85,
            zoomable: !1
          })]
        })
      })
    }), (0, n.jsx)(M.Z, {
      isAllPerksVisible: s,
      setIsAllPerksVisible: t,
      previousComponent: A.MQ.HOME
    })]
  })
}