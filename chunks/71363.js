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
  R = s("332475"),
  T = s("626135"),
  f = s("915296"),
  I = s("103433"),
  S = s("166021"),
  m = s("32173"),
  p = s("391110"),
  A = s("75077"),
  N = s("981631"),
  M = s("689938"),
  C = s("263763"),
  g = s("865215");
t.default = e => {
  let t, s, {
      isAllPerksVisible: i,
      setIsAllPerksVisible: P,
      previousComponent: O,
      isFullScreen: x
    } = e,
    b = r.useRef(null),
    h = Object.entries((0, m.default)()).reduce((e, t) => {
      let [s, a] = t;
      return !1 !== a.canReveal && "upcomingDropUntimed" !== a.name && (e[s] = a), e
    }, {}),
    D = (0, f.useGetMarketingPageNonSubPerkTileOrderExperiment)({
      location: p.NitroLandingPages.SEE_ALL
    }),
    {
      analyticsLocations: L
    } = (0, _.default)(d.default.PREMIUM_SUBSCRIBER_NITRO_HOME),
    [v, U] = r.useState(!1),
    B = (0, E.default)("perks-discoverability"),
    j = (0, l.useStateFromStores)([c.default], () => c.default.useReducedMotion),
    G = (0, A.useIsPremiumSubscriber)();
  return D === f.TileOrderVariant.DEFAULT ? (t = M.default.Messages.MARKETING_PAGE_CAROUSEL_TITLE, s = M.default.Messages.NITRO_HOME_ENJOY_UPDATED_DISCORD) : (t = M.default.Messages.NITRO_HOME_ENJOY_UPDATED_DISCORD, s = M.default.Messages.MARKETING_PAGE_CAROUSEL_TITLE), (0, a.jsx)(u.AdvancedScrollerAuto, {
    className: n()(C.allPerksScroller, {
      [C.open]: i,
      [C.openCloseReduceMotion]: j
    }),
    ref: b,
    children: (0, a.jsx)("div", {
      className: C.container,
      children: (0, a.jsxs)(_.AnalyticsLocationProvider, {
        value: L,
        children: [(0, a.jsx)(I.default, {
          className: C.heroHeading,
          onBackClick: () => {
            P(!1), T.default.track(N.AnalyticEvents.NITRO_HOME_NAVIGATION, {
              current_component: p.NitroLandingPages.SEE_ALL,
              next_component: O,
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
          }), (0, a.jsx)(S.default, {
            className: C.cardCarousel,
            cards: (0, A.getFilteredPerksDiscoverabilityCards)({
              perksCards: h,
              variant: p.PerksDiscoverabilityCardSection.CARD_CAROUSEL_FIRST_ROW,
              shopMarketingVariation: B,
              tileOrderVariant: D,
              isPremiumSubscriber: G,
              isFullScreen: x
            }),
            cardType: p.PerksDiscoverabilityCardSection.CARD_CAROUSEL_FIRST_ROW
          }), (0, a.jsx)(u.Heading, {
            variant: "heading-xxl/extrabold",
            color: "header-primary",
            className: C.heading,
            children: s
          }), (0, a.jsx)(S.default, {
            className: C.cardCarousel,
            cards: (0, A.getFilteredPerksDiscoverabilityCards)({
              perksCards: h,
              variant: p.PerksDiscoverabilityCardSection.CARD_CAROUSEL_SECOND_ROW,
              shopMarketingVariation: B,
              tileOrderVariant: D,
              isPremiumSubscriber: G,
              isFullScreen: x
            }),
            cardType: p.PerksDiscoverabilityCardSection.CARD_CAROUSEL_SECOND_ROW
          }), (0, a.jsx)(u.Heading, {
            variant: "heading-xxl/extrabold",
            color: "header-primary",
            className: C.heading,
            children: M.default.Messages.NITRO_HOME_SHOW_UP_HOW_YOU_WANT
          }), (0, a.jsx)(S.default, {
            className: C.cardCarousel,
            cards: (0, A.getFilteredPerksDiscoverabilityCards)({
              perksCards: h,
              variant: p.PerksDiscoverabilityCardSection.CARD_CAROUSEL_THIRD_ROW,
              shopMarketingVariation: B,
              tileOrderVariant: D,
              isPremiumSubscriber: G,
              isFullScreen: x
            }),
            cardType: p.PerksDiscoverabilityCardSection.CARD_CAROUSEL_THIRD_ROW
          })]
        }), (0, a.jsx)("div", {
          className: C.footerSpacing
        }), (0, a.jsx)(o.VisibilitySensor, {
          onChange: e => {
            e && !v && (T.default.track(N.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
              location_stack: L
            }), U(!0))
          },
          children: (0, a.jsx)("div", {
            className: C.bottomOfPageVisibilitySensor
          })
        }), (0, a.jsx)(R.default, {
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