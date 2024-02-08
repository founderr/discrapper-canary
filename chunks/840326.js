"use strict";
s.r(t), s.d(t, {
  default: function() {
    return p
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  r = s("290381"),
  i = s("77078"),
  l = s("812204"),
  u = s("685665"),
  o = s("594098"),
  d = s("599110"),
  c = s("706922"),
  _ = s("830648"),
  E = s("627474"),
  I = s("835618"),
  T = s("554083"),
  f = s("598739"),
  S = s("326881"),
  R = s("228967"),
  A = s("49111"),
  m = s("137537"),
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
      } = (0, u.default)(l.default.PREMIUM_SUBSCRIBER_NITRO_HOME),
      [P, O] = n.useState(!1);
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(i.AdvancedScrollerAuto, {
        className: m.mainPageScroller,
        ref: e,
        children: (0, a.jsx)("div", {
          className: m.container,
          children: (0, a.jsxs)(g, {
            children: [(0, a.jsx)(T.default, {
              className: m.heroHeading
            }), (0, a.jsx)(E.default, {
              variant: f.PerksDiscoverabilityVariants.WHATS_NEW,
              className: m.whatsNew,
              noBackground: !0,
              leftAlignHeaders: !0
            }), (0, a.jsx)(E.default, {
              className: m.perksDiscoverability,
              noBackground: !0,
              leftAlignHeaders: !0,
              showAllPerksButton: p ? (0, a.jsx)(R.default, {
                setIsAllPerksVisible: s,
                previousComponent: f.NitroLandingPages.HOME
              }) : void 0
            }), !p && (0, a.jsx)(_.default, {
              className: m.perksCards,
              isSubscriberNitroHome: !0
            }), (0, a.jsx)(I.default, {
              className: m.giftNitro,
              location: l.default.PREMIUM_MARKETING_GIFT_SECTION,
              analyticsLocation: {
                page: A.AnalyticsPages.NITRO_HOME,
                section: A.AnalyticsSections.GIFT_BANNER
              }
            }), (0, a.jsx)("div", {
              className: m.footerSpacing
            }), (0, a.jsx)(r.VisibilitySensor, {
              onChange: e => {
                e && !P && (d.default.track(A.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                  location_stack: C
                }), O(!0))
              },
              children: (0, a.jsx)("div", {
                className: m.bottomOfPageVisibilitySensor
              })
            }), (0, a.jsx)(o.default, {
              src: N,
              className: m.bottomIllustration,
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