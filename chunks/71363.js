s(724458), s(47120);
var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  l = s(442837),
  o = s(622535),
  c = s(481060),
  E = s(607070),
  _ = s(100527),
  u = s(906732),
  d = s(410154),
  T = s(626135),
  I = s(915296),
  R = s(103433),
  A = s(166021),
  N = s(32173),
  C = s(391110),
  g = s(75077),
  m = s(981631),
  M = s(689938),
  S = s(455879),
  p = s(865215);
t.Z = e => {
  let t, s, {
      isAllPerksVisible: i,
      setIsAllPerksVisible: h,
      previousComponent: f,
      isFullScreen: O
    } = e,
    x = a.useRef(null),
    L = Object.entries((0, N.Z)()).reduce((e, t) => {
      let [s, n] = t;
      return !1 !== n.canReveal && "upcomingDropUntimed" !== n.name && (e[s] = n), e
    }, {}),
    P = (0, I.HI)({
      location: C.MQ.SEE_ALL
    }),
    {
      analyticsLocations: v
    } = (0, u.ZP)(_.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
    [Z, b] = a.useState(!1),
    D = (0, d.ZP)("perks-discoverability"),
    U = (0, l.e7)([E.Z], () => E.Z.useReducedMotion),
    j = (0, g.mN)();
  return P === I.mJ.DEFAULT ? (t = M.Z.Messages.MARKETING_PAGE_CAROUSEL_TITLE, s = M.Z.Messages.NITRO_HOME_ENJOY_UPDATED_DISCORD) : (t = M.Z.Messages.NITRO_HOME_ENJOY_UPDATED_DISCORD, s = M.Z.Messages.MARKETING_PAGE_CAROUSEL_TITLE), (0, n.jsx)(c.AdvancedScrollerAuto, {
    className: r()(S.allPerksScroller, {
      [S.open]: i,
      [S.openCloseReduceMotion]: U
    }),
    ref: x,
    children: (0, n.jsx)("div", {
      className: S.container,
      children: (0, n.jsxs)(u.Gt, {
        value: v,
        children: [(0, n.jsx)(R.Z, {
          className: S.heroHeading,
          onBackClick: () => {
            h(!1), T.default.track(m.rMx.NITRO_HOME_NAVIGATION, {
              current_component: C.MQ.SEE_ALL,
              next_component: f,
              interaction_component: "Back Button"
            })
          }
        }), (0, n.jsxs)("div", {
          className: S.column,
          children: [(0, n.jsx)(c.Heading, {
            variant: "heading-xxl/extrabold",
            color: "header-primary",
            className: S.heading,
            children: t
          }), (0, n.jsx)(A.Z, {
            className: S.cardCarousel,
            cards: (0, g.sP)({
              perksCards: L,
              variant: C.R0.CARD_CAROUSEL_FIRST_ROW,
              shopMarketingVariation: D,
              tileOrderVariant: P,
              isPremiumSubscriber: j,
              isFullScreen: O
            }),
            cardType: C.R0.CARD_CAROUSEL_FIRST_ROW
          }), (0, n.jsx)(c.Heading, {
            variant: "heading-xxl/extrabold",
            color: "header-primary",
            className: S.heading,
            children: s
          }), (0, n.jsx)(A.Z, {
            className: S.cardCarousel,
            cards: (0, g.sP)({
              perksCards: L,
              variant: C.R0.CARD_CAROUSEL_SECOND_ROW,
              shopMarketingVariation: D,
              tileOrderVariant: P,
              isPremiumSubscriber: j,
              isFullScreen: O
            }),
            cardType: C.R0.CARD_CAROUSEL_SECOND_ROW
          }), (0, n.jsx)(c.Heading, {
            variant: "heading-xxl/extrabold",
            color: "header-primary",
            className: S.heading,
            children: M.Z.Messages.NITRO_HOME_SHOW_UP_HOW_YOU_WANT
          }), (0, n.jsx)(A.Z, {
            className: S.cardCarousel,
            cards: (0, g.sP)({
              perksCards: L,
              variant: C.R0.CARD_CAROUSEL_THIRD_ROW,
              shopMarketingVariation: D,
              tileOrderVariant: P,
              isPremiumSubscriber: j,
              isFullScreen: O
            }),
            cardType: C.R0.CARD_CAROUSEL_THIRD_ROW
          })]
        }), (0, n.jsx)("div", {
          className: S.footerSpacing
        }), (0, n.jsx)(o.$, {
          onChange: e => {
            e && !Z && (T.default.track(m.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
              location_stack: v
            }), b(!0))
          },
          children: (0, n.jsx)("div", {
            className: S.bottomOfPageVisibilitySensor
          })
        }), (0, n.jsx)(c.Image, {
          src: p,
          className: S.bottomIllustration,
          width: 112,
          height: 85,
          zoomable: !1
        })]
      })
    })
  })
}