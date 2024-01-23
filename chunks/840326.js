"use strict";
s.r(t), s.d(t, {
  default: function() {
    return M
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  r = s.n(l),
  i = s("748802"),
  u = s("77078"),
  o = s("290381"),
  d = s("812204"),
  c = s("685665"),
  _ = s("594098"),
  E = s("181114"),
  I = s("599110"),
  f = s("706922"),
  T = s("322507"),
  S = s("941797"),
  R = s("830648"),
  m = s("627474"),
  p = s("835618"),
  N = s("554083"),
  g = s("628550"),
  A = s("49111"),
  P = s("782340"),
  C = s("137537"),
  O = s("679324"),
  M = () => {
    let e, t = n.useRef(null),
      s = n.useRef(null),
      [l, M] = n.useState(!1),
      h = Object.values((0, g.default)()).filter(e => !1 !== e.canReveal && "upcomingDropUntimed" !== e.name),
      {
        enabled: L
      } = (0, f.default)(),
      {
        AnalyticsLocationProvider: x,
        analyticsLocations: v
      } = (0, c.default)(d.default.PREMIUM_SUBSCRIBER_NITRO_HOME),
      [j, b] = n.useState(!1);
    return L && (e = (0, a.jsx)(E.default, {
      color: u.ButtonColors.PRIMARY,
      onlyShineOnHover: !0,
      shineSize: E.ShineSizes.SMALL,
      className: C.seeAllPerksButton,
      onClick: () => M(!0),
      children: (0, a.jsxs)("div", {
        className: C.seeAllPerksButtonContent,
        children: [P.default.Messages.PREMIUM_MARKETING_PERKS_SEE_ALL, (0, a.jsx)(i.ChevronSmallRightIcon, {
          color: "currentColor"
        })]
      })
    })), (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(u.AdvancedScrollerAuto, {
        className: C.mainPageScroller,
        ref: t,
        children: (0, a.jsx)("div", {
          className: C.container,
          children: (0, a.jsxs)(x, {
            children: [(0, a.jsx)(N.default, {
              className: C.heroHeading
            }), (0, a.jsx)(m.default, {
              variant: m.PerksDiscoverabilityVariants.WHATS_NEW,
              className: C.whatsNew,
              noBackground: !0,
              leftAlignHeaders: !0
            }), (0, a.jsx)(m.default, {
              className: C.perksDiscoverability,
              noBackground: !0,
              leftAlignHeaders: !0,
              showAllPerksButton: e
            }), !L && (0, a.jsx)(R.default, {
              className: C.perksCards,
              isSubscriberNitroHome: !0
            }), (0, a.jsx)(p.default, {
              className: C.giftNitro
            }), (0, a.jsx)("div", {
              className: C.footerSpacing
            }), (0, a.jsx)(o.VisibilitySensor, {
              onChange: e => {
                e && !j && (I.default.track(A.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                  location_stack: v
                }), b(!0))
              },
              children: (0, a.jsx)("div", {
                className: C.bottomOfPageVisibilitySensor
              })
            }), (0, a.jsx)(_.default, {
              src: O,
              className: C.bottomIllustration,
              width: 112,
              height: 85,
              zoomable: !1
            })]
          })
        })
      }), L ? (0, a.jsx)(u.AdvancedScrollerAuto, {
        className: r(C.allPerksScroller, {
          [C.open]: l
        }),
        ref: s,
        children: (0, a.jsx)("div", {
          className: C.container,
          children: (0, a.jsxs)(x, {
            children: [(0, a.jsx)(T.default, {
              className: C.heroHeading,
              onBackClick: () => M(!1)
            }), (0, a.jsxs)("div", {
              className: C.column,
              children: [(0, a.jsx)(u.Heading, {
                variant: "heading-xxl/extrabold",
                color: "header-primary",
                className: C.heading,
                children: P.default.Messages.MARKETING_PAGE_CAROUSEL_TITLE
              }), (0, a.jsx)(S.default, {
                className: C.cardCarousel,
                cards: h
              }), (0, a.jsx)(u.Heading, {
                variant: "heading-xxl/extrabold",
                color: "header-primary",
                className: C.heading,
                children: P.default.Messages.NITRO_HOME_ENJOY_UPDATED_DISCORD
              }), (0, a.jsx)(S.default, {
                className: C.cardCarousel,
                cards: h
              }), (0, a.jsx)(u.Heading, {
                variant: "heading-xxl/extrabold",
                color: "header-primary",
                className: C.heading,
                children: P.default.Messages.NITRO_HOME_SHOW_UP_HOW_YOU_WANT
              }), (0, a.jsx)(S.default, {
                className: C.cardCarousel,
                cards: h
              })]
            }), (0, a.jsx)("div", {
              className: C.footerSpacing
            }), (0, a.jsx)(o.VisibilitySensor, {
              onChange: e => {
                e && !j && (I.default.track(A.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                  location_stack: v
                }), b(!0))
              },
              children: (0, a.jsx)("div", {
                className: C.bottomOfPageVisibilitySensor
              })
            }), (0, a.jsx)(_.default, {
              src: O,
              className: C.bottomIllustration,
              width: 112,
              height: 85,
              zoomable: !1
            })]
          })
        })
      }) : null]
    })
  }