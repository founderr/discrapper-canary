"use strict";
s.r(t), s.d(t, {
  default: function() {
    return C
  }
}), s("808653"), s("222007");
var a = s("37983"),
  n = s("884691"),
  i = s("414456"),
  r = s.n(i),
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
  N = s("782340"),
  p = s("390553"),
  g = s("679324"),
  C = e => {
    let {
      isAllPerksVisible: t,
      setIsAllPerksVisible: s,
      previousComponent: i
    } = e, C = n.useRef(null), P = (0, R.default)(), O = Object.entries(P).reduce((e, t) => {
      let [s, a] = t;
      return !1 !== a.canReveal && "upcomingDropUntimed" !== a.name && (e[s] = a), e
    }, {}), {
      AnalyticsLocationProvider: M,
      analyticsLocations: h
    } = (0, _.default)(c.default.PREMIUM_SUBSCRIBER_NITRO_HOME), [L, x] = n.useState(!1), v = (0, E.default)("perks-discoverability"), D = (0, l.useStateFromStores)([d.default], () => d.default.useReducedMotion);
    return (0, a.jsx)(u.AdvancedScrollerAuto, {
      className: r(p.allPerksScroller, {
        [p.open]: t,
        [p.openCloseReduceMotion]: D
      }),
      ref: C,
      children: (0, a.jsx)("div", {
        className: p.container,
        children: (0, a.jsxs)(M, {
          children: [(0, a.jsx)(f.default, {
            className: p.heroHeading,
            onBackClick: () => {
              s(!1), T.default.track(A.AnalyticEvents.NITRO_HOME_NAVIGATION, {
                current_component: m.NitroLandingPages.SEE_ALL,
                next_component: i,
                interaction_component: "Back Button"
              })
            }
          }), (0, a.jsxs)("div", {
            className: p.column,
            children: [(0, a.jsx)(u.Heading, {
              variant: "heading-xxl/extrabold",
              color: "header-primary",
              className: p.heading,
              children: N.default.Messages.MARKETING_PAGE_CAROUSEL_TITLE
            }), (0, a.jsx)(S.default, {
              className: p.cardCarousel,
              cards: (0, m.getFilteredPerksDiscoverabilityCards)(O, m.PerksDiscoverabilityVariants.CARD_CAROUSEL_FIRST_ROW, v),
              cardType: m.PerksDiscoverabilityVariants.CARD_CAROUSEL_FIRST_ROW
            }), (0, a.jsx)(u.Heading, {
              variant: "heading-xxl/extrabold",
              color: "header-primary",
              className: p.heading,
              children: N.default.Messages.NITRO_HOME_ENJOY_UPDATED_DISCORD
            }), (0, a.jsx)(S.default, {
              className: p.cardCarousel,
              cards: (0, m.getFilteredPerksDiscoverabilityCards)(O, m.PerksDiscoverabilityVariants.CARD_CAROUSEL_SECOND_ROW, v),
              cardType: m.PerksDiscoverabilityVariants.CARD_CAROUSEL_SECOND_ROW
            }), (0, a.jsx)(u.Heading, {
              variant: "heading-xxl/extrabold",
              color: "header-primary",
              className: p.heading,
              children: N.default.Messages.NITRO_HOME_SHOW_UP_HOW_YOU_WANT
            }), (0, a.jsx)(S.default, {
              className: p.cardCarousel,
              cards: (0, m.getFilteredPerksDiscoverabilityCards)(O, m.PerksDiscoverabilityVariants.CARD_CAROUSEL_THIRD_ROW, v),
              cardType: m.PerksDiscoverabilityVariants.CARD_CAROUSEL_THIRD_ROW
            })]
          }), (0, a.jsx)("div", {
            className: p.footerSpacing
          }), (0, a.jsx)(o.VisibilitySensor, {
            onChange: e => {
              e && !L && (T.default.track(A.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                location_stack: h
              }), x(!0))
            },
            children: (0, a.jsx)("div", {
              className: p.bottomOfPageVisibilitySensor
            })
          }), (0, a.jsx)(I.default, {
            src: g,
            className: p.bottomIllustration,
            width: 112,
            height: 85,
            zoomable: !1
          })]
        })
      })
    })
  }