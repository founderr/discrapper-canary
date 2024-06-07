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
  M = s("981631"),
  C = s("689938"),
  N = s("263763"),
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
    k = (0, A.useIsPremiumSubscriber)();
  return D === f.TileOrderVariant.DEFAULT ? (t = C.default.Messages.MARKETING_PAGE_CAROUSEL_TITLE, s = C.default.Messages.NITRO_HOME_ENJOY_UPDATED_DISCORD) : (t = C.default.Messages.NITRO_HOME_ENJOY_UPDATED_DISCORD, s = C.default.Messages.MARKETING_PAGE_CAROUSEL_TITLE), (0, a.jsx)(u.AdvancedScrollerAuto, {
    className: n()(N.allPerksScroller, {
      [N.open]: i,
      [N.openCloseReduceMotion]: j
    }),
    ref: b,
    children: (0, a.jsx)("div", {
      className: N.container,
      children: (0, a.jsxs)(_.AnalyticsLocationProvider, {
        value: L,
        children: [(0, a.jsx)(I.default, {
          className: N.heroHeading,
          onBackClick: () => {
            P(!1), T.default.track(M.AnalyticEvents.NITRO_HOME_NAVIGATION, {
              current_component: p.NitroLandingPages.SEE_ALL,
              next_component: O,
              interaction_component: "Back Button"
            })
          }
        }), (0, a.jsxs)("div", {
          className: N.column,
          children: [(0, a.jsx)(u.Heading, {
            variant: "heading-xxl/extrabold",
            color: "header-primary",
            className: N.heading,
            children: t
          }), (0, a.jsx)(S.default, {
            className: N.cardCarousel,
            cards: (0, A.getFilteredPerksDiscoverabilityCards)({
              perksCards: h,
              variant: p.PerksDiscoverabilityCardSection.CARD_CAROUSEL_FIRST_ROW,
              shopMarketingVariation: B,
              tileOrderVariant: D,
              isPremiumSubscriber: k,
              isFullScreen: x
            }),
            cardType: p.PerksDiscoverabilityCardSection.CARD_CAROUSEL_FIRST_ROW
          }), (0, a.jsx)(u.Heading, {
            variant: "heading-xxl/extrabold",
            color: "header-primary",
            className: N.heading,
            children: s
          }), (0, a.jsx)(S.default, {
            className: N.cardCarousel,
            cards: (0, A.getFilteredPerksDiscoverabilityCards)({
              perksCards: h,
              variant: p.PerksDiscoverabilityCardSection.CARD_CAROUSEL_SECOND_ROW,
              shopMarketingVariation: B,
              tileOrderVariant: D,
              isPremiumSubscriber: k,
              isFullScreen: x
            }),
            cardType: p.PerksDiscoverabilityCardSection.CARD_CAROUSEL_SECOND_ROW
          }), (0, a.jsx)(u.Heading, {
            variant: "heading-xxl/extrabold",
            color: "header-primary",
            className: N.heading,
            children: C.default.Messages.NITRO_HOME_SHOW_UP_HOW_YOU_WANT
          }), (0, a.jsx)(S.default, {
            className: N.cardCarousel,
            cards: (0, A.getFilteredPerksDiscoverabilityCards)({
              perksCards: h,
              variant: p.PerksDiscoverabilityCardSection.CARD_CAROUSEL_THIRD_ROW,
              shopMarketingVariation: B,
              tileOrderVariant: D,
              isPremiumSubscriber: k,
              isFullScreen: x
            }),
            cardType: p.PerksDiscoverabilityCardSection.CARD_CAROUSEL_THIRD_ROW
          })]
        }), (0, a.jsx)("div", {
          className: N.footerSpacing
        }), (0, a.jsx)(o.VisibilitySensor, {
          onChange: e => {
            e && !v && (T.default.track(M.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
              location_stack: L
            }), U(!0))
          },
          children: (0, a.jsx)("div", {
            className: N.bottomOfPageVisibilitySensor
          })
        }), (0, a.jsx)(R.default, {
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