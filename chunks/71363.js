t(724458), t(47120);
var n = t(735250),
  a = t(470079),
  r = t(120356),
  i = t.n(r),
  l = t(442837),
  o = t(622535),
  _ = t(481060),
  c = t(607070),
  E = t(100527),
  u = t(906732),
  d = t(410154),
  R = t(626135),
  I = t(915296),
  T = t(103433),
  A = t(166021),
  M = t(32173),
  S = t(391110),
  N = t(75077),
  p = t(981631),
  m = t(689938),
  C = t(455879),
  g = t(865215);
s.Z = e => {
  let s, t, {
      isAllPerksVisible: r,
      setIsAllPerksVisible: f,
      previousComponent: P,
      isFullScreen: O
    } = e,
    x = a.useRef(null),
    h = Object.entries((0, M.Z)()).reduce((e, s) => {
      let [t, n] = s;
      return !1 !== n.canReveal && "upcomingDropUntimed" !== n.name && (e[t] = n), e
    }, {}),
    L = (0, I.HI)({
      location: S.MQ.SEE_ALL
    }),
    {
      analyticsLocations: b
    } = (0, u.ZP)(E.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
    [v, Z] = a.useState(!1),
    D = (0, d.ZP)("perks-discoverability"),
    U = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
    B = (0, N.mN)();
  return L === I.mJ.DEFAULT ? (s = m.Z.Messages.MARKETING_PAGE_CAROUSEL_TITLE, t = m.Z.Messages.NITRO_HOME_ENJOY_UPDATED_DISCORD) : (s = m.Z.Messages.NITRO_HOME_ENJOY_UPDATED_DISCORD, t = m.Z.Messages.MARKETING_PAGE_CAROUSEL_TITLE), (0, n.jsx)(_.AdvancedScrollerAuto, {
    className: i()(C.allPerksScroller, {
      [C.open]: r,
      [C.openCloseReduceMotion]: U
    }),
    ref: x,
    children: (0, n.jsx)("div", {
      className: C.container,
      children: (0, n.jsxs)(u.Gt, {
        value: b,
        children: [(0, n.jsx)(T.Z, {
          className: C.heroHeading,
          onBackClick: () => {
            f(!1), R.default.track(p.rMx.NITRO_HOME_NAVIGATION, {
              current_component: S.MQ.SEE_ALL,
              next_component: P,
              interaction_component: "Back Button"
            })
          }
        }), (0, n.jsxs)("div", {
          className: C.column,
          children: [(0, n.jsx)(_.Heading, {
            variant: "heading-xxl/extrabold",
            color: "header-primary",
            className: C.heading,
            children: s
          }), (0, n.jsx)(A.Z, {
            className: C.cardCarousel,
            cards: (0, N.sP)({
              perksCards: h,
              variant: S.R0.CARD_CAROUSEL_FIRST_ROW,
              shopMarketingVariation: D,
              tileOrderVariant: L,
              isPremiumSubscriber: B,
              isFullScreen: O
            }),
            cardType: S.R0.CARD_CAROUSEL_FIRST_ROW
          }), (0, n.jsx)(_.Heading, {
            variant: "heading-xxl/extrabold",
            color: "header-primary",
            className: C.heading,
            children: t
          }), (0, n.jsx)(A.Z, {
            className: C.cardCarousel,
            cards: (0, N.sP)({
              perksCards: h,
              variant: S.R0.CARD_CAROUSEL_SECOND_ROW,
              shopMarketingVariation: D,
              tileOrderVariant: L,
              isPremiumSubscriber: B,
              isFullScreen: O
            }),
            cardType: S.R0.CARD_CAROUSEL_SECOND_ROW
          }), (0, n.jsx)(_.Heading, {
            variant: "heading-xxl/extrabold",
            color: "header-primary",
            className: C.heading,
            children: m.Z.Messages.NITRO_HOME_SHOW_UP_HOW_YOU_WANT
          }), (0, n.jsx)(A.Z, {
            className: C.cardCarousel,
            cards: (0, N.sP)({
              perksCards: h,
              variant: S.R0.CARD_CAROUSEL_THIRD_ROW,
              shopMarketingVariation: D,
              tileOrderVariant: L,
              isPremiumSubscriber: B,
              isFullScreen: O
            }),
            cardType: S.R0.CARD_CAROUSEL_THIRD_ROW
          })]
        }), (0, n.jsx)("div", {
          className: C.footerSpacing
        }), (0, n.jsx)(o.$, {
          onChange: e => {
            e && !v && (R.default.track(p.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
              location_stack: b
            }), Z(!0))
          },
          children: (0, n.jsx)("div", {
            className: C.bottomOfPageVisibilitySensor
          })
        }), (0, n.jsx)(_.Image, {
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