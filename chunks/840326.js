"use strict";
s.r(t), s.d(t, {
  default: function() {
    return A
  }
}), s("222007");
var a = s("37983"),
  i = s("884691"),
  r = s("290381"),
  n = s("77078"),
  l = s("812204"),
  o = s("685665"),
  u = s("594098"),
  d = s("599110"),
  c = s("627474"),
  _ = s("835618"),
  E = s("554083"),
  I = s("598739"),
  T = s("326881"),
  f = s("228967"),
  S = s("49111"),
  R = s("390553"),
  m = s("679324"),
  A = () => {
    let e = i.useRef(null),
      [t, s] = i.useState(!1),
      {
        AnalyticsLocationProvider: A,
        analyticsLocations: p
      } = (0, o.default)(l.default.PREMIUM_SUBSCRIBER_NITRO_HOME),
      [N, g] = i.useState(!1);
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(n.AdvancedScrollerAuto, {
        className: R.mainPageScroller,
        ref: e,
        children: (0, a.jsx)("div", {
          className: R.container,
          children: (0, a.jsxs)(A, {
            children: [(0, a.jsx)(E.default, {
              className: R.heroHeading
            }), (0, a.jsx)(c.default, {
              variant: I.PerksDiscoverabilityVariants.WHATS_NEW,
              className: R.whatsNew,
              noBackground: !0,
              leftAlignHeaders: !0
            }), (0, a.jsx)(c.default, {
              className: R.perksDiscoverability,
              noBackground: !0,
              leftAlignHeaders: !0,
              showAllPerksButton: (0, a.jsx)(f.default, {
                setIsAllPerksVisible: s,
                previousComponent: I.NitroLandingPages.HOME
              })
            }), (0, a.jsx)(_.default, {
              className: R.giftNitro,
              location: l.default.PREMIUM_MARKETING_GIFT_SECTION,
              analyticsLocation: {
                page: S.AnalyticsPages.NITRO_HOME,
                section: S.AnalyticsSections.GIFT_BANNER
              }
            }), (0, a.jsx)("div", {
              className: R.footerSpacing
            }), (0, a.jsx)(r.VisibilitySensor, {
              onChange: e => {
                e && !N && (d.default.track(S.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                  location_stack: p
                }), g(!0))
              },
              children: (0, a.jsx)("div", {
                className: R.bottomOfPageVisibilitySensor
              })
            }), (0, a.jsx)(u.default, {
              src: m,
              className: R.bottomIllustration,
              width: 112,
              height: 85,
              zoomable: !1
            })]
          })
        })
      }), (0, a.jsx)(T.default, {
        isAllPerksVisible: t,
        setIsAllPerksVisible: s,
        previousComponent: I.NitroLandingPages.HOME
      })]
    })
  }