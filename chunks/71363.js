"use strict";
s.r(t), s("724458"), s("47120");
var a = s("735250"),
  r = s("470079"),
  i = s("120356"),
  n = s.n(i),
  l = s("442837"),
  o = s("622535"),
  u = s("481060"),
  c = s("607070"),
  d = s("100527"),
  _ = s("906732"),
  E = s("410154"),
  R = s("626135"),
  T = s("915296"),
  I = s("103433"),
  f = s("166021"),
  S = s("32173"),
  m = s("391110"),
  p = s("75077"),
  A = s("981631"),
  M = s("689938"),
  C = s("263763"),
  g = s("865215");
t.default = e => {
  let t, s, {
      isAllPerksVisible: i,
      setIsAllPerksVisible: N,
      previousComponent: P,
      isFullScreen: O
    } = e,
    x = r.useRef(null),
    b = Object.entries((0, S.default)()).reduce((e, t) => {
      let [s, a] = t;
      return !1 !== a.canReveal && "upcomingDropUntimed" !== a.name && (e[s] = a), e
    }, {}),
    h = (0, T.useGetMarketingPageNonSubPerkTileOrderExperiment)({
      location: m.NitroLandingPages.SEE_ALL
    }),
    {
      analyticsLocations: D
    } = (0, _.default)(d.default.PREMIUM_SUBSCRIBER_NITRO_HOME),
    [L, v] = r.useState(!1),
    U = (0, E.default)("perks-discoverability"),
    B = (0, l.useStateFromStores)([c.default], () => c.default.useReducedMotion),
    j = (0, p.useIsPremiumSubscriber)();
  return h === T.TileOrderVariant.DEFAULT ? (t = M.default.Messages.MARKETING_PAGE_CAROUSEL_TITLE, s = M.default.Messages.NITRO_HOME_ENJOY_UPDATED_DISCORD) : (t = M.default.Messages.NITRO_HOME_ENJOY_UPDATED_DISCORD, s = M.default.Messages.MARKETING_PAGE_CAROUSEL_TITLE), (0, a.jsx)(u.AdvancedScrollerAuto, {
    className: n()(C.allPerksScroller, {
      [C.open]: i,
      [C.openCloseReduceMotion]: B
    }),
    ref: x,
    children: (0, a.jsx)("div", {
      className: C.container,
      children: (0, a.jsxs)(_.AnalyticsLocationProvider, {
        value: D,
        children: [(0, a.jsx)(I.default, {
          className: C.heroHeading,
          onBackClick: () => {
            N(!1), R.default.track(A.AnalyticEvents.NITRO_HOME_NAVIGATION, {
              current_component: m.NitroLandingPages.SEE_ALL,
              next_component: P,
              interaction_component: "Back Button"
            })
          }
        }), (0, a.jsxs)("div", {
          className: C.column,
          children: [(0, a.jsx)(u.Heading, {
            variant: "heading-xxl/extrabold",
            color: "header-primary",
            className: C.heading,
            children: t
          }), (0, a.jsx)(f.default, {
            className: C.cardCarousel,
            cards: (0, p.getFilteredPerksDiscoverabilityCards)({
              perksCards: b,
              variant: m.PerksDiscoverabilityCardSection.CARD_CAROUSEL_FIRST_ROW,
              shopMarketingVariation: U,
              tileOrderVariant: h,
              isPremiumSubscriber: j,
              isFullScreen: O
            }),
            cardType: m.PerksDiscoverabilityCardSection.CARD_CAROUSEL_FIRST_ROW
          }), (0, a.jsx)(u.Heading, {
            variant: "heading-xxl/extrabold",
            color: "header-primary",
            className: C.heading,
            children: s
          }), (0, a.jsx)(f.default, {
            className: C.cardCarousel,
            cards: (0, p.getFilteredPerksDiscoverabilityCards)({
              perksCards: b,
              variant: m.PerksDiscoverabilityCardSection.CARD_CAROUSEL_SECOND_ROW,
              shopMarketingVariation: U,
              tileOrderVariant: h,
              isPremiumSubscriber: j,
              isFullScreen: O
            }),
            cardType: m.PerksDiscoverabilityCardSection.CARD_CAROUSEL_SECOND_ROW
          }), (0, a.jsx)(u.Heading, {
            variant: "heading-xxl/extrabold",
            color: "header-primary",
            className: C.heading,
            children: M.default.Messages.NITRO_HOME_SHOW_UP_HOW_YOU_WANT
          }), (0, a.jsx)(f.default, {
            className: C.cardCarousel,
            cards: (0, p.getFilteredPerksDiscoverabilityCards)({
              perksCards: b,
              variant: m.PerksDiscoverabilityCardSection.CARD_CAROUSEL_THIRD_ROW,
              shopMarketingVariation: U,
              tileOrderVariant: h,
              isPremiumSubscriber: j,
              isFullScreen: O
            }),
            cardType: m.PerksDiscoverabilityCardSection.CARD_CAROUSEL_THIRD_ROW
          })]
        }), (0, a.jsx)("div", {
          className: C.footerSpacing
        }), (0, a.jsx)(o.VisibilitySensor, {
          onChange: e => {
            e && !L && (R.default.track(A.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
              location_stack: D
            }), v(!0))
          },
          children: (0, a.jsx)("div", {
            className: C.bottomOfPageVisibilitySensor
          })
        }), (0, a.jsx)(u.Image, {
          src: g,
          className: C.bottomIllustration,
          width: 112,
          height: 85,
          zoomable: !1
        })]
      })
    })
  })
}