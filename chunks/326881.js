"use strict";
s.r(t), s.d(t, {
  default: function() {
    return p
  }
}), s("808653"), s("222007");
var a = s("37983"),
  r = s("884691"),
  n = s("414456"),
  i = s.n(n),
  l = s("77078"),
  u = s("290381"),
  o = s("812204"),
  d = s("685665"),
  c = s("411691"),
  _ = s("594098"),
  E = s("599110"),
  I = s("322507"),
  T = s("941797"),
  f = s("628550"),
  S = s("598739"),
  R = s("49111"),
  m = s("782340"),
  A = s("137537"),
  N = s("679324"),
  p = e => {
    let {
      isAllPerksVisible: t,
      setIsAllPerksVisible: s
    } = e, n = r.useRef(null), p = (0, f.default)(), g = Object.entries(p).reduce((e, t) => {
      let [s, a] = t;
      return !1 !== a.canReveal && "upcomingDropUntimed" !== a.name && (e[s] = a), e
    }, {}), {
      AnalyticsLocationProvider: P,
      analyticsLocations: C
    } = (0, d.default)(o.default.PREMIUM_SUBSCRIBER_NITRO_HOME), [O, M] = r.useState(!1), h = (0, c.default)("perks-discoverability");
    return (0, a.jsx)(l.AdvancedScrollerAuto, {
      className: i(A.allPerksScroller, {
        [A.open]: t
      }),
      ref: n,
      children: (0, a.jsx)("div", {
        className: A.container,
        children: (0, a.jsxs)(P, {
          children: [(0, a.jsx)(I.default, {
            className: A.heroHeading,
            onBackClick: () => s(!1)
          }), (0, a.jsxs)("div", {
            className: A.column,
            children: [(0, a.jsx)(l.Heading, {
              variant: "heading-xxl/extrabold",
              color: "header-primary",
              className: A.heading,
              children: m.default.Messages.MARKETING_PAGE_CAROUSEL_TITLE
            }), (0, a.jsx)(T.default, {
              className: A.cardCarousel,
              cards: (0, S.getFilteredPerksDiscoverabilityCards)(g, S.PerksDiscoverabilityVariants.CARD_CAROUSEL_FIRST_ROW, h),
              cardType: S.PerksDiscoverabilityVariants.CARD_CAROUSEL_FIRST_ROW
            }), (0, a.jsx)(l.Heading, {
              variant: "heading-xxl/extrabold",
              color: "header-primary",
              className: A.heading,
              children: m.default.Messages.NITRO_HOME_ENJOY_UPDATED_DISCORD
            }), (0, a.jsx)(T.default, {
              className: A.cardCarousel,
              cards: (0, S.getFilteredPerksDiscoverabilityCards)(g, S.PerksDiscoverabilityVariants.CARD_CAROUSEL_SECOND_ROW, h),
              cardType: S.PerksDiscoverabilityVariants.CARD_CAROUSEL_SECOND_ROW
            }), (0, a.jsx)(l.Heading, {
              variant: "heading-xxl/extrabold",
              color: "header-primary",
              className: A.heading,
              children: m.default.Messages.NITRO_HOME_SHOW_UP_HOW_YOU_WANT
            }), (0, a.jsx)(T.default, {
              className: A.cardCarousel,
              cards: (0, S.getFilteredPerksDiscoverabilityCards)(g, S.PerksDiscoverabilityVariants.CARD_CAROUSEL_THIRD_ROW, h),
              cardType: S.PerksDiscoverabilityVariants.CARD_CAROUSEL_THIRD_ROW
            })]
          }), (0, a.jsx)("div", {
            className: A.footerSpacing
          }), (0, a.jsx)(u.VisibilitySensor, {
            onChange: e => {
              e && !O && (E.default.track(R.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                location_stack: C
              }), M(!0))
            },
            children: (0, a.jsx)("div", {
              className: A.bottomOfPageVisibilitySensor
            })
          }), (0, a.jsx)(_.default, {
            src: N,
            className: A.bottomIllustration,
            width: 112,
            height: 85,
            zoomable: !1
          })]
        })
      })
    })
  }