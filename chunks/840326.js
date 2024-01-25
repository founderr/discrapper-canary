"use strict";
s.r(t), s.d(t, {
  default: function() {
    return L
  }
}), s("222007"), s("808653");
var a = s("37983"),
  r = s("884691"),
  n = s("414456"),
  i = s.n(n),
  l = s("748802"),
  u = s("77078"),
  o = s("290381"),
  d = s("812204"),
  c = s("685665"),
  _ = s("411691"),
  E = s("594098"),
  I = s("181114"),
  T = s("599110"),
  f = s("706922"),
  S = s("322507"),
  R = s("941797"),
  m = s("830648"),
  A = s("627474"),
  N = s("835618"),
  p = s("554083"),
  g = s("628550"),
  C = s("598739"),
  P = s("49111"),
  O = s("782340"),
  M = s("137537"),
  h = s("679324"),
  L = () => {
    let e, t = r.useRef(null),
      s = r.useRef(null),
      n = (0, _.default)("perks-discoverability"),
      [L, x] = r.useState(!1),
      v = (0, g.default)(),
      D = Object.entries(v).reduce((e, t) => {
        let [s, a] = t;
        return !1 !== a.canReveal && "upcomingDropUntimed" !== a.name && (e[s] = a), e
      }, {}),
      {
        enabled: U
      } = (0, f.default)(),
      {
        AnalyticsLocationProvider: b,
        analyticsLocations: j
      } = (0, c.default)(d.default.PREMIUM_SUBSCRIBER_NITRO_HOME),
      [G, k] = r.useState(!1);
    return U && (e = (0, a.jsx)(I.default, {
      color: u.ButtonColors.PRIMARY,
      onlyShineOnHover: !0,
      shineSize: I.ShineSizes.SMALL,
      className: M.seeAllPerksButton,
      onClick: () => x(!0),
      children: (0, a.jsxs)("div", {
        className: M.seeAllPerksButtonContent,
        children: [O.default.Messages.PREMIUM_MARKETING_PERKS_SEE_ALL, (0, a.jsx)(l.ChevronSmallRightIcon, {
          color: "currentColor"
        })]
      })
    })), (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(u.AdvancedScrollerAuto, {
        className: M.mainPageScroller,
        ref: t,
        children: (0, a.jsx)("div", {
          className: M.container,
          children: (0, a.jsxs)(b, {
            children: [(0, a.jsx)(p.default, {
              className: M.heroHeading
            }), (0, a.jsx)(A.default, {
              variant: C.PerksDiscoverabilityVariants.WHATS_NEW,
              className: M.whatsNew,
              noBackground: !0,
              leftAlignHeaders: !0
            }), (0, a.jsx)(A.default, {
              className: M.perksDiscoverability,
              noBackground: !0,
              leftAlignHeaders: !0,
              showAllPerksButton: e
            }), !U && (0, a.jsx)(m.default, {
              className: M.perksCards,
              isSubscriberNitroHome: !0
            }), (0, a.jsx)(N.default, {
              className: M.giftNitro
            }), (0, a.jsx)("div", {
              className: M.footerSpacing
            }), (0, a.jsx)(o.VisibilitySensor, {
              onChange: e => {
                e && !G && (T.default.track(P.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                  location_stack: j
                }), k(!0))
              },
              children: (0, a.jsx)("div", {
                className: M.bottomOfPageVisibilitySensor
              })
            }), (0, a.jsx)(E.default, {
              src: h,
              className: M.bottomIllustration,
              width: 112,
              height: 85,
              zoomable: !1
            })]
          })
        })
      }), U ? (0, a.jsx)(u.AdvancedScrollerAuto, {
        className: i(M.allPerksScroller, {
          [M.open]: L
        }),
        ref: s,
        children: (0, a.jsx)("div", {
          className: M.container,
          children: (0, a.jsxs)(b, {
            children: [(0, a.jsx)(S.default, {
              className: M.heroHeading,
              onBackClick: () => x(!1)
            }), (0, a.jsxs)("div", {
              className: M.column,
              children: [(0, a.jsx)(u.Heading, {
                variant: "heading-xxl/extrabold",
                color: "header-primary",
                className: M.heading,
                children: O.default.Messages.MARKETING_PAGE_CAROUSEL_TITLE
              }), (0, a.jsx)(R.default, {
                className: M.cardCarousel,
                cards: (0, C.getFilteredPerksDiscoverabilityCards)(D, C.PerksDiscoverabilityVariants.CARD_CAROUSEL_FIRST_ROW, n),
                cardType: C.PerksDiscoverabilityVariants.CARD_CAROUSEL_FIRST_ROW
              }), (0, a.jsx)(u.Heading, {
                variant: "heading-xxl/extrabold",
                color: "header-primary",
                className: M.heading,
                children: O.default.Messages.NITRO_HOME_ENJOY_UPDATED_DISCORD
              }), (0, a.jsx)(R.default, {
                className: M.cardCarousel,
                cards: (0, C.getFilteredPerksDiscoverabilityCards)(D, C.PerksDiscoverabilityVariants.CARD_CAROUSEL_SECOND_ROW, n),
                cardType: C.PerksDiscoverabilityVariants.CARD_CAROUSEL_SECOND_ROW
              }), (0, a.jsx)(u.Heading, {
                variant: "heading-xxl/extrabold",
                color: "header-primary",
                className: M.heading,
                children: O.default.Messages.NITRO_HOME_SHOW_UP_HOW_YOU_WANT
              }), (0, a.jsx)(R.default, {
                className: M.cardCarousel,
                cards: (0, C.getFilteredPerksDiscoverabilityCards)(D, C.PerksDiscoverabilityVariants.CARD_CAROUSEL_THIRD_ROW, n),
                cardType: C.PerksDiscoverabilityVariants.CARD_CAROUSEL_THIRD_ROW
              })]
            }), (0, a.jsx)("div", {
              className: M.footerSpacing
            }), (0, a.jsx)(o.VisibilitySensor, {
              onChange: e => {
                e && !G && (T.default.track(P.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                  location_stack: j
                }), k(!0))
              },
              children: (0, a.jsx)("div", {
                className: M.bottomOfPageVisibilitySensor
              })
            }), (0, a.jsx)(E.default, {
              src: h,
              className: M.bottomIllustration,
              width: 112,
              height: 85,
              zoomable: !1
            })]
          })
        })
      }) : null]
    })
  }