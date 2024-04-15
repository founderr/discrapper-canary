"use strict";
s.r(t), s("724458"), s("47120");
var a = s("735250"),
  i = s("470079"),
  r = s("120356"),
  l = s.n(r),
  n = s("442837"),
  o = s("622535"),
  u = s("481060"),
  d = s("607070"),
  c = s("100527"),
  _ = s("906732"),
  E = s("410154"),
  C = s("332475"),
  f = s("626135"),
  T = s("103433"),
  I = s("166021"),
  R = s("32173"),
  S = s("391110"),
  p = s("75077"),
  m = s("981631"),
  A = s("689938"),
  g = s("379101"),
  N = s("865215");
t.default = e => {
  let {
    isAllPerksVisible: t,
    setIsAllPerksVisible: s,
    previousComponent: r
  } = e, O = i.useRef(null), P = Object.entries((0, R.default)()).reduce((e, t) => {
    let [s, a] = t;
    return !1 !== a.canReveal && "upcomingDropUntimed" !== a.name && (e[s] = a), e
  }, {}), {
    analyticsLocations: h
  } = (0, _.default)(c.default.PREMIUM_SUBSCRIBER_NITRO_HOME), [M, x] = i.useState(!1), L = (0, E.default)("perks-discoverability"), v = (0, n.useStateFromStores)([d.default], () => d.default.useReducedMotion);
  return (0, a.jsx)(u.AdvancedScrollerAuto, {
    className: l()(g.allPerksScroller, {
      [g.open]: t,
      [g.openCloseReduceMotion]: v
    }),
    ref: O,
    children: (0, a.jsx)("div", {
      className: g.container,
      children: (0, a.jsxs)(_.AnalyticsLocationProvider, {
        value: h,
        children: [(0, a.jsx)(T.default, {
          className: g.heroHeading,
          onBackClick: () => {
            s(!1), f.default.track(m.AnalyticEvents.NITRO_HOME_NAVIGATION, {
              current_component: S.NitroLandingPages.SEE_ALL,
              next_component: r,
              interaction_component: "Back Button"
            })
          }
        }), (0, a.jsxs)("div", {
          className: g.column,
          children: [(0, a.jsx)(u.Heading, {
            variant: "heading-xxl/extrabold",
            color: "header-primary",
            className: g.heading,
            children: A.default.Messages.MARKETING_PAGE_CAROUSEL_TITLE
          }), (0, a.jsx)(I.default, {
            className: g.cardCarousel,
            cards: (0, p.getFilteredPerksDiscoverabilityCards)(P, S.PerksDiscoverabilityCardSection.CARD_CAROUSEL_FIRST_ROW, L),
            cardType: S.PerksDiscoverabilityCardSection.CARD_CAROUSEL_FIRST_ROW
          }), (0, a.jsx)(u.Heading, {
            variant: "heading-xxl/extrabold",
            color: "header-primary",
            className: g.heading,
            children: A.default.Messages.NITRO_HOME_ENJOY_UPDATED_DISCORD
          }), (0, a.jsx)(I.default, {
            className: g.cardCarousel,
            cards: (0, p.getFilteredPerksDiscoverabilityCards)(P, S.PerksDiscoverabilityCardSection.CARD_CAROUSEL_SECOND_ROW, L),
            cardType: S.PerksDiscoverabilityCardSection.CARD_CAROUSEL_SECOND_ROW
          }), (0, a.jsx)(u.Heading, {
            variant: "heading-xxl/extrabold",
            color: "header-primary",
            className: g.heading,
            children: A.default.Messages.NITRO_HOME_SHOW_UP_HOW_YOU_WANT
          }), (0, a.jsx)(I.default, {
            className: g.cardCarousel,
            cards: (0, p.getFilteredPerksDiscoverabilityCards)(P, S.PerksDiscoverabilityCardSection.CARD_CAROUSEL_THIRD_ROW, L),
            cardType: S.PerksDiscoverabilityCardSection.CARD_CAROUSEL_THIRD_ROW
          })]
        }), (0, a.jsx)("div", {
          className: g.footerSpacing
        }), (0, a.jsx)(o.VisibilitySensor, {
          onChange: e => {
            e && !M && (f.default.track(m.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
              location_stack: h
            }), x(!0))
          },
          children: (0, a.jsx)("div", {
            className: g.bottomOfPageVisibilitySensor
          })
        }), (0, a.jsx)(C.default, {
          src: N,
          className: g.bottomIllustration,
          width: 112,
          height: 85,
          zoomable: !1
        })]
      })
    })
  })
}