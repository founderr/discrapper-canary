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
  N = s("379101"),
  g = s("865215");
t.default = e => {
  let {
    isAllPerksVisible: t,
    setIsAllPerksVisible: s,
    previousComponent: r
  } = e, O = i.useRef(null), P = Object.entries((0, R.default)()).reduce((e, t) => {
    let [s, a] = t;
    return !1 !== a.canReveal && "upcomingDropUntimed" !== a.name && (e[s] = a), e
  }, {}), {
    analyticsLocations: M
  } = (0, _.default)(c.default.PREMIUM_SUBSCRIBER_NITRO_HOME), [h, L] = i.useState(!1), x = (0, E.default)("perks-discoverability"), v = (0, n.useStateFromStores)([d.default], () => d.default.useReducedMotion);
  return (0, a.jsx)(u.AdvancedScrollerAuto, {
    className: l()(N.allPerksScroller, {
      [N.open]: t,
      [N.openCloseReduceMotion]: v
    }),
    ref: O,
    children: (0, a.jsx)("div", {
      className: N.container,
      children: (0, a.jsxs)(_.AnalyticsLocationProvider, {
        value: M,
        children: [(0, a.jsx)(T.default, {
          className: N.heroHeading,
          onBackClick: () => {
            s(!1), f.default.track(m.AnalyticEvents.NITRO_HOME_NAVIGATION, {
              current_component: S.NitroLandingPages.SEE_ALL,
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
            children: A.default.Messages.MARKETING_PAGE_CAROUSEL_TITLE
          }), (0, a.jsx)(I.default, {
            className: N.cardCarousel,
            cards: (0, p.getFilteredPerksDiscoverabilityCards)(P, S.PerksDiscoverabilityCardSection.CARD_CAROUSEL_FIRST_ROW, x),
            cardType: S.PerksDiscoverabilityCardSection.CARD_CAROUSEL_FIRST_ROW
          }), (0, a.jsx)(u.Heading, {
            variant: "heading-xxl/extrabold",
            color: "header-primary",
            className: N.heading,
            children: A.default.Messages.NITRO_HOME_ENJOY_UPDATED_DISCORD
          }), (0, a.jsx)(I.default, {
            className: N.cardCarousel,
            cards: (0, p.getFilteredPerksDiscoverabilityCards)(P, S.PerksDiscoverabilityCardSection.CARD_CAROUSEL_SECOND_ROW, x),
            cardType: S.PerksDiscoverabilityCardSection.CARD_CAROUSEL_SECOND_ROW
          }), (0, a.jsx)(u.Heading, {
            variant: "heading-xxl/extrabold",
            color: "header-primary",
            className: N.heading,
            children: A.default.Messages.NITRO_HOME_SHOW_UP_HOW_YOU_WANT
          }), (0, a.jsx)(I.default, {
            className: N.cardCarousel,
            cards: (0, p.getFilteredPerksDiscoverabilityCards)(P, S.PerksDiscoverabilityCardSection.CARD_CAROUSEL_THIRD_ROW, x),
            cardType: S.PerksDiscoverabilityCardSection.CARD_CAROUSEL_THIRD_ROW
          })]
        }), (0, a.jsx)("div", {
          className: N.footerSpacing
        }), (0, a.jsx)(o.VisibilitySensor, {
          onChange: e => {
            e && !h && (f.default.track(m.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
              location_stack: M
            }), L(!0))
          },
          children: (0, a.jsx)("div", {
            className: N.bottomOfPageVisibilitySensor
          })
        }), (0, a.jsx)(C.default, {
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