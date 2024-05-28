"use strict";
n.r(t), n.d(t, {
  ClanDiscoveryUserUpsellBackgroundRings: function() {
    return g
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("920906"),
  i = n("442837"),
  r = n("481060"),
  o = n("607070"),
  u = n("100527"),
  d = n("970606"),
  c = n("231467"),
  f = n("207796"),
  E = n("436137"),
  C = n("316553"),
  h = n("559469"),
  _ = n("689938"),
  S = n("531612");
let m = {
    mass: 1,
    tension: 600,
    friction: 60
  },
  p = {
    from: {
      transform: "translateY(40px) scale(0.9)",
      opacity: 0
    },
    to: {
      transform: "translateY(0px) scale(1)",
      opacity: 1
    },
    config: m
  },
  I = {
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    config: m
  };

function g() {
  let e = (0, i.useStateFromStores)([o.default], () => o.default.useReducedMotion),
    t = s.useRef(null),
    n = s.useRef(null),
    r = s.useRef(null),
    u = (0, l.useSpring)({
      ref: t,
      ...I
    }),
    d = (0, l.useSpring)({
      ref: n,
      ...I
    }),
    c = (0, l.useSpring)({
      ref: r,
      ...I
    });
  return (0, l.useChain)([t, n, r], [.8, .9, 1]), (0, a.jsx)("div", {
    className: S.backgroundContainer,
    children: (0, a.jsxs)("div", {
      className: S.ringsContainer,
      children: [(0, a.jsx)(l.animated.div, {
        className: S.ringOuter,
        style: e ? void 0 : c
      }), (0, a.jsx)(l.animated.div, {
        className: S.ringMiddle,
        style: e ? void 0 : d
      }), (0, a.jsx)(l.animated.div, {
        className: S.ringInner,
        style: e ? void 0 : u
      })]
    })
  })
}
t.default = s.memo(function(e) {
  let {
    selectedGame: t,
    onClick: n
  } = e, I = (0, i.useStateFromStores)([o.default], () => o.default.useReducedMotion), g = s.useRef(null), T = s.useRef(null), A = s.useRef(null), N = s.useRef(null), v = s.useRef(null), R = s.useRef(null), O = (0, C.useDiscoveryGameApplicationId)({
    selectedGame: t
  }), L = (0, h.useFakeDiscoveryUpsellClans)(O), P = (0, l.useSpring)({
    ref: g,
    ...p
  }), y = (0, l.useSpring)({
    ref: T,
    ...p
  }), M = (0, l.useSpring)({
    ref: A,
    ...p
  }), D = (0, l.useSpring)({
    ref: N,
    ...p
  }), x = (0, l.useSpring)({
    ref: v,
    ...p
  }), b = (0, l.useSpring)({
    ref: R,
    from: {
      transform: "translateY(40px)",
      opacity: 0
    },
    to: {
      transform: "translateY(0px)",
      opacity: 1
    },
    config: m
  });
  (0, l.useChain)([g, T, A, N, v, R], [.1, .2, .3, .4, .5, 1]), s.useEffect(() => {
    (0, d.trackClanUserInviteViewed)({
      location: u.default.CLAN_DISCOVERY
    })
  }, []);
  let [U, j] = s.useMemo(() => {
    switch (t) {
      case f.ClanDiscoveryGame.GENSHIN:
        return [_.default.Messages.CLAN_DISCOVERY_UPSELL_TITLE, _.default.Messages.CLAN_DISCOVERY_UPSELL_GENSHIN_SUBTITLE];
      case f.ClanDiscoveryGame.VALORANT:
        return [_.default.Messages.CLAN_DISCOVERY_UPSELL_TITLE, _.default.Messages.CLAN_DISCOVERY_UPSELL_VALORANT_SUBTITLE]
    }
  }, [t]);
  return (0, a.jsxs)("div", {
    className: S.upsellContainer,
    children: [(0, a.jsx)("div", {
      className: S.cardsContainer,
      children: (0, a.jsxs)("div", {
        className: S.cards,
        children: [(0, a.jsx)(l.animated.div, {
          className: S.clanCardOuterContainer,
          style: I ? void 0 : D,
          children: (0, a.jsx)(c.ClanDiscoveryCardView, {
            clan: L[0],
            className: S.clanCardOuterLeft
          })
        }), (0, a.jsx)(l.animated.div, {
          className: S.clanCardInnerContainer,
          style: I ? void 0 : y,
          children: (0, a.jsx)(c.ClanDiscoveryCardView, {
            clan: L[1],
            className: S.clanCardInnerLeft
          })
        }), (0, a.jsx)(l.animated.div, {
          className: S.clanCardCenterContainer,
          style: I ? void 0 : P,
          children: (0, a.jsx)(c.ClanDiscoveryCardView, {
            clan: L[4],
            className: S.clanCardCenter
          })
        }), (0, a.jsx)(l.animated.div, {
          className: S.clanCardInnerContainer,
          style: I ? void 0 : M,
          children: (0, a.jsx)(c.ClanDiscoveryCardView, {
            clan: L[2],
            className: S.clanCardInnerRight
          })
        }), (0, a.jsx)(l.animated.div, {
          className: S.clanCardOuterContainer,
          style: I ? void 0 : x,
          children: (0, a.jsx)(c.ClanDiscoveryCardView, {
            clan: L[3],
            className: S.clanCardOuterRight
          })
        })]
      })
    }), (0, a.jsxs)(l.animated.div, {
      className: S.upsellDetails,
      style: I ? void 0 : b,
      children: [(0, a.jsx)(r.Heading, {
        className: S.upsellTitle,
        color: "header-primary",
        variant: "heading-xxl/semibold",
        children: U
      }), (0, a.jsx)(r.Text, {
        className: S.upsellSubtitle,
        color: "header-secondary",
        variant: "text-md/medium",
        children: j
      }), (0, a.jsx)(E.default, {
        onClick: n,
        children: _.default.Messages.CHECK_IT_OUT
      })]
    })]
  })
})