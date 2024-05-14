"use strict";
n.r(t), n.d(t, {
  ClanDiscoveryUserUpsellBackgroundRings: function() {
    return g
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("685626"),
  i = n("442837"),
  r = n("481060"),
  o = n("607070"),
  u = n("100527"),
  d = n("970606"),
  c = n("231467"),
  f = n("207796"),
  E = n("436137"),
  h = n("559469"),
  _ = n("689938"),
  C = n("531612");
let m = {
    mass: 1,
    tension: 600,
    friction: 60
  },
  S = {
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
  p = {
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
      ...p
    }),
    d = (0, l.useSpring)({
      ref: n,
      ...p
    }),
    c = (0, l.useSpring)({
      ref: r,
      ...p
    });
  return (0, l.useChain)([t, n, r], [.8, .9, 1]), (0, a.jsx)("div", {
    className: C.backgroundContainer,
    children: (0, a.jsxs)("div", {
      className: C.ringsContainer,
      children: [(0, a.jsx)(l.animated.div, {
        className: C.ringOuter,
        style: e ? void 0 : c
      }), (0, a.jsx)(l.animated.div, {
        className: C.ringMiddle,
        style: e ? void 0 : d
      }), (0, a.jsx)(l.animated.div, {
        className: C.ringInner,
        style: e ? void 0 : u
      })]
    })
  })
}
t.default = s.memo(function(e) {
  let {
    selectedGame: t,
    onClick: n
  } = e, p = (0, i.useStateFromStores)([o.default], () => o.default.useReducedMotion), g = s.useRef(null), I = s.useRef(null), T = s.useRef(null), A = s.useRef(null), N = s.useRef(null), v = s.useRef(null), R = (0, l.useSpring)({
    ref: g,
    ...S
  }), O = (0, l.useSpring)({
    ref: I,
    ...S
  }), L = (0, l.useSpring)({
    ref: T,
    ...S
  }), M = (0, l.useSpring)({
    ref: A,
    ...S
  }), y = (0, l.useSpring)({
    ref: N,
    ...S
  }), P = (0, l.useSpring)({
    ref: v,
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
  (0, l.useChain)([g, I, T, A, N, v], [.1, .2, .3, .4, .5, 1]), s.useEffect(() => {
    (0, d.trackClanUserInviteViewed)({
      location: u.default.CLAN_DISCOVERY
    })
  }, []);
  let [x, D] = s.useMemo(() => {
    switch (t) {
      case f.ClanDiscoveryGame.GENSHIN:
        return [_.default.Messages.CLAN_DISCOVERY_UPSELL_TITLE, _.default.Messages.CLAN_DISCOVERY_UPSELL_GENSHIN_SUBTITLE];
      case f.ClanDiscoveryGame.VALORANT:
        return [_.default.Messages.CLAN_DISCOVERY_UPSELL_TITLE, _.default.Messages.CLAN_DISCOVERY_UPSELL_VALORANT_SUBTITLE]
    }
  }, [t]);
  return (0, a.jsxs)("div", {
    className: C.upsellContainer,
    children: [(0, a.jsx)("div", {
      className: C.cardsContainer,
      children: (0, a.jsxs)("div", {
        className: C.cards,
        children: [(0, a.jsx)(l.animated.div, {
          className: C.clanCardOuterContainer,
          style: p ? void 0 : M,
          children: (0, a.jsx)(c.ClanDiscoveryCardView, {
            clan: h.FAKE_DISCOVERY_UPSELL_CLANS["0"],
            className: C.clanCardOuterLeft
          })
        }), (0, a.jsx)(l.animated.div, {
          className: C.clanCardInnerContainer,
          style: p ? void 0 : O,
          children: (0, a.jsx)(c.ClanDiscoveryCardView, {
            clan: h.FAKE_DISCOVERY_UPSELL_CLANS["1"],
            className: C.clanCardInnerLeft
          })
        }), (0, a.jsx)(l.animated.div, {
          className: C.clanCardCenterContainer,
          style: p ? void 0 : R,
          children: (0, a.jsx)(c.ClanDiscoveryCardView, {
            clan: h.FAKE_DISCOVERY_UPSELL_CLANS["4"],
            className: C.clanCardCenter
          })
        }), (0, a.jsx)(l.animated.div, {
          className: C.clanCardInnerContainer,
          style: p ? void 0 : L,
          children: (0, a.jsx)(c.ClanDiscoveryCardView, {
            clan: h.FAKE_DISCOVERY_UPSELL_CLANS["2"],
            className: C.clanCardInnerRight
          })
        }), (0, a.jsx)(l.animated.div, {
          className: C.clanCardOuterContainer,
          style: p ? void 0 : y,
          children: (0, a.jsx)(c.ClanDiscoveryCardView, {
            clan: h.FAKE_DISCOVERY_UPSELL_CLANS["3"],
            className: C.clanCardOuterRight
          })
        })]
      })
    }), (0, a.jsxs)(l.animated.div, {
      className: C.upsellDetails,
      style: p ? void 0 : P,
      children: [(0, a.jsx)(r.Heading, {
        className: C.upsellTitle,
        color: "header-primary",
        variant: "heading-xxl/semibold",
        children: x
      }), (0, a.jsx)(r.Text, {
        className: C.upsellSubtitle,
        color: "header-secondary",
        variant: "text-md/medium",
        children: D
      }), (0, a.jsx)(E.default, {
        onClick: n,
        children: _.default.Messages.CHECK_IT_OUT
      })]
    })]
  })
})