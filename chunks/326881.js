"use strict";
s.r(t), s.d(t, {
  default: function() {
    return C
  }
}), s("808653"), s("222007");
var a = s("37983"),
  i = s("884691"),
  r = s("414456"),
  n = s.n(r),
  l = s("446674"),
  o = s("290381"),
  u = s("77078"),
  d = s("206230"),
  c = s("812204"),
  _ = s("685665"),
  E = s("411691"),
  I = s("594098"),
  T = s("599110"),
  f = s("322507"),
  S = s("941797"),
  R = s("628550"),
  m = s("598739"),
  A = s("49111"),
  p = s("782340"),
  N = s("390553"),
  g = s("679324"),
  C = e => {
    let {
      isAllPerksVisible: t,
      setIsAllPerksVisible: s,
      previousComponent: r
    } = e, C = i.useRef(null), P = (0, R.default)(), O = Object.entries(P).reduce((e, t) => {
      let [s, a] = t;
      return !1 !== a.canReveal && "upcomingDropUntimed" !== a.name && (e[s] = a), e
    }, {}), {
      AnalyticsLocationProvider: M,
      analyticsLocations: h
    } = (0, _.default)(c.default.PREMIUM_SUBSCRIBER_NITRO_HOME), [L, x] = i.useState(!1), v = (0, E.default)("perks-discoverability"), D = (0, l.useStateFromStores)([d.default], () => d.default.useReducedMotion);
    return (0, a.jsx)(u.AdvancedScrollerAuto, {
      className: n(N.allPerksScroller, {
        [N.open]: t,
        [N.openCloseReduceMotion]: D
      }),
      ref: C,
      children: (0, a.jsx)("div", {
        className: N.container,
        children: (0, a.jsxs)(M, {
          children: [(0, a.jsx)(f.default, {
            className: N.heroHeading,
            onBackClick: () => {
              s(!1), T.default.track(A.AnalyticEvents.NITRO_HOME_NAVIGATION, {
                current_component: m.NitroLandingPages.SEE_ALL,
                next_component: r,
                interaction_component: "Back Button"
              })
            }
          }), (0, a.jsxs)("div", {
            className: N.column,
            children: [(0, a.jsx)(u.Heading, {
              variant: "heading-xxl/extrabold",
              color: "header-primary",
              className: N.heading,
              children: p.default.Messages.MARKETING_PAGE_CAROUSEL_TITLE
            }), (0, a.jsx)(S.default, {
              className: N.cardCarousel,
              cards: (0, m.getFilteredPerksDiscoverabilityCards)(O, m.PerksDiscoverabilityVariants.CARD_CAROUSEL_FIRST_ROW, v),
              cardType: m.PerksDiscoverabilityVariants.CARD_CAROUSEL_FIRST_ROW
            }), (0, a.jsx)(u.Heading, {
              variant: "heading-xxl/extrabold",
              color: "header-primary",
              className: N.heading,
              children: p.default.Messages.NITRO_HOME_ENJOY_UPDATED_DISCORD
            }), (0, a.jsx)(S.default, {
              className: N.cardCarousel,
              cards: (0, m.getFilteredPerksDiscoverabilityCards)(O, m.PerksDiscoverabilityVariants.CARD_CAROUSEL_SECOND_ROW, v),
              cardType: m.PerksDiscoverabilityVariants.CARD_CAROUSEL_SECOND_ROW
            }), (0, a.jsx)(u.Heading, {
              variant: "heading-xxl/extrabold",
              color: "header-primary",
              className: N.heading,
              children: p.default.Messages.NITRO_HOME_SHOW_UP_HOW_YOU_WANT
            }), (0, a.jsx)(S.default, {
              className: N.cardCarousel,
              cards: (0, m.getFilteredPerksDiscoverabilityCards)(O, m.PerksDiscoverabilityVariants.CARD_CAROUSEL_THIRD_ROW, v),
              cardType: m.PerksDiscoverabilityVariants.CARD_CAROUSEL_THIRD_ROW
            })]
          }), (0, a.jsx)("div", {
            className: N.footerSpacing
          }), (0, a.jsx)(o.VisibilitySensor, {
            onChange: e => {
              e && !L && (T.default.track(A.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                location_stack: h
              }), x(!0))
            },
            children: (0, a.jsx)("div", {
              className: N.bottomOfPageVisibilitySensor
            })
          }), (0, a.jsx)(I.default, {
            src: g,
            className: N.bottomIllustration,
            width: 112,
            height: 85,
            zoomable: !1
          })]
        })
      })
    })
  }