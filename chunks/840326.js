"use strict";
s.r(t), s.d(t, {
  default: function() {
    return p
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  i = s("290381"),
  r = s("77078"),
  l = s("812204"),
  o = s("685665"),
  u = s("594098"),
  d = s("599110"),
  c = s("706922"),
  _ = s("830648"),
  E = s("627474"),
  I = s("835618"),
  T = s("554083"),
  f = s("598739"),
  S = s("326881"),
  R = s("228967"),
  m = s("49111"),
  A = s("390553"),
  N = s("679324"),
  p = () => {
    let e = n.useRef(null),
      [t, s] = n.useState(!1),
      {
        enabled: p
      } = (0, c.default)(),
      {
        AnalyticsLocationProvider: g,
        analyticsLocations: C
      } = (0, o.default)(l.default.PREMIUM_SUBSCRIBER_NITRO_HOME),
      [P, O] = n.useState(!1);
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(r.AdvancedScrollerAuto, {
        className: A.mainPageScroller,
        ref: e,
        children: (0, a.jsx)("div", {
          className: A.container,
          children: (0, a.jsxs)(g, {
            children: [(0, a.jsx)(T.default, {
              className: A.heroHeading
            }), (0, a.jsx)(E.default, {
              variant: f.PerksDiscoverabilityVariants.WHATS_NEW,
              className: A.whatsNew,
              noBackground: !0,
              leftAlignHeaders: !0
            }), (0, a.jsx)(E.default, {
              className: A.perksDiscoverability,
              noBackground: !0,
              leftAlignHeaders: !0,
              showAllPerksButton: p ? (0, a.jsx)(R.default, {
                setIsAllPerksVisible: s,
                previousComponent: f.NitroLandingPages.HOME
              }) : void 0
            }), !p && (0, a.jsx)(_.default, {
              className: A.perksCards,
              isSubscriberNitroHome: !0
            }), (0, a.jsx)(I.default, {
              className: A.giftNitro,
              location: l.default.PREMIUM_MARKETING_GIFT_SECTION,
              analyticsLocation: {
                page: m.AnalyticsPages.NITRO_HOME,
                section: m.AnalyticsSections.GIFT_BANNER
              }
            }), (0, a.jsx)("div", {
              className: A.footerSpacing
            }), (0, a.jsx)(i.VisibilitySensor, {
              onChange: e => {
                e && !P && (d.default.track(m.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                  location_stack: C
                }), O(!0))
              },
              children: (0, a.jsx)("div", {
                className: A.bottomOfPageVisibilitySensor
              })
            }), (0, a.jsx)(u.default, {
              src: N,
              className: A.bottomIllustration,
              width: 112,
              height: 85,
              zoomable: !1
            })]
          })
        })
      }), p ? (0, a.jsx)(S.default, {
        isAllPerksVisible: t,
        setIsAllPerksVisible: s,
        previousComponent: f.NitroLandingPages.HOME
      }) : null]
    })
  }