"use strict";
s.r(t), s("724458"), s("47120");
var a = s("735250"),
  r = s("470079"),
  i = s("120356"),
  n = s.n(i),
  l = s("442837"),
  o = s("622535"),
  u = s("481060"),
  d = s("607070"),
  c = s("100527"),
  _ = s("906732"),
  E = s("410154"),
  T = s("332475"),
  I = s("626135"),
  R = s("103433"),
  f = s("166021"),
  S = s("32173"),
  m = s("391110"),
  A = s("75077"),
  N = s("981631"),
  p = s("689938"),
  g = s("263763"),
  C = s("865215");
t.default = e => {
  let {
    isAllPerksVisible: t,
    setIsAllPerksVisible: s,
    previousComponent: i
  } = e, P = r.useRef(null), O = Object.entries((0, S.default)()).reduce((e, t) => {
    let [s, a] = t;
    return !1 !== a.canReveal && "upcomingDropUntimed" !== a.name && (e[s] = a), e
  }, {}), {
    analyticsLocations: M
  } = (0, _.default)(c.default.PREMIUM_SUBSCRIBER_NITRO_HOME), [h, L] = r.useState(!1), x = (0, E.default)("perks-discoverability"), v = (0, l.useStateFromStores)([d.default], () => d.default.useReducedMotion);
  return (0, a.jsx)(u.AdvancedScrollerAuto, {
    className: n()(g.allPerksScroller, {
      [g.open]: t,
      [g.openCloseReduceMotion]: v
    }),
    ref: P,
    children: (0, a.jsx)("div", {
      className: g.container,
      children: (0, a.jsxs)(_.AnalyticsLocationProvider, {
        value: M,
        children: [(0, a.jsx)(R.default, {
          className: g.heroHeading,
          onBackClick: () => {
            s(!1), I.default.track(N.AnalyticEvents.NITRO_HOME_NAVIGATION, {
              current_component: m.NitroLandingPages.SEE_ALL,
              next_component: i,
              interaction_component: "Back Button"
            })
          }
        }), (0, a.jsxs)("div", {
          className: g.column,
          children: [(0, a.jsx)(u.Heading, {
            variant: "heading-xxl/extrabold",
            color: "header-primary",
            className: g.heading,
            children: p.default.Messages.MARKETING_PAGE_CAROUSEL_TITLE
          }), (0, a.jsx)(f.default, {
            className: g.cardCarousel,
            cards: (0, A.getFilteredPerksDiscoverabilityCards)(O, m.PerksDiscoverabilityCardSection.CARD_CAROUSEL_FIRST_ROW, x),
            cardType: m.PerksDiscoverabilityCardSection.CARD_CAROUSEL_FIRST_ROW
          }), (0, a.jsx)(u.Heading, {
            variant: "heading-xxl/extrabold",
            color: "header-primary",
            className: g.heading,
            children: p.default.Messages.NITRO_HOME_ENJOY_UPDATED_DISCORD
          }), (0, a.jsx)(f.default, {
            className: g.cardCarousel,
            cards: (0, A.getFilteredPerksDiscoverabilityCards)(O, m.PerksDiscoverabilityCardSection.CARD_CAROUSEL_SECOND_ROW, x),
            cardType: m.PerksDiscoverabilityCardSection.CARD_CAROUSEL_SECOND_ROW
          }), (0, a.jsx)(u.Heading, {
            variant: "heading-xxl/extrabold",
            color: "header-primary",
            className: g.heading,
            children: p.default.Messages.NITRO_HOME_SHOW_UP_HOW_YOU_WANT
          }), (0, a.jsx)(f.default, {
            className: g.cardCarousel,
            cards: (0, A.getFilteredPerksDiscoverabilityCards)(O, m.PerksDiscoverabilityCardSection.CARD_CAROUSEL_THIRD_ROW, x),
            cardType: m.PerksDiscoverabilityCardSection.CARD_CAROUSEL_THIRD_ROW
          })]
        }), (0, a.jsx)("div", {
          className: g.footerSpacing
        }), (0, a.jsx)(o.VisibilitySensor, {
          onChange: e => {
            e && !h && (I.default.track(N.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
              location_stack: M
            }), L(!0))
          },
          children: (0, a.jsx)("div", {
            className: g.bottomOfPageVisibilitySensor
          })
        }), (0, a.jsx)(T.default, {
          src: C,
          className: g.bottomIllustration,
          width: 112,
          height: 85,
          zoomable: !1
        })]
      })
    })
  })
}