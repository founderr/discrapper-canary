"use strict";
n.r(t), n.d(t, {
  ClanDiscoveryUserUpsellBackgroundRings: function() {
    return p
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  i = n("718017"),
  l = n("442837"),
  r = n("481060"),
  o = n("607070"),
  u = n("970606"),
  d = n("231467"),
  c = n("207796"),
  f = n("436137"),
  E = n("559469"),
  h = n("689938"),
  _ = n("720395");
let C = {
    mass: 1,
    tension: 600,
    friction: 60
  },
  m = {
    from: {
      transform: "translateY(40px) scale(0.9)",
      opacity: 0
    },
    to: {
      transform: "translateY(0px) scale(1)",
      opacity: 1
    },
    config: C
  },
  S = {
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    config: C
  };

function p() {
  let e = (0, l.useStateFromStores)([o.default], () => o.default.useReducedMotion),
    t = s.useRef(null),
    n = s.useRef(null),
    r = s.useRef(null),
    u = (0, i.useSpring)({
      ref: t,
      ...S
    }),
    d = (0, i.useSpring)({
      ref: n,
      ...S
    }),
    c = (0, i.useSpring)({
      ref: r,
      ...S
    });
  return (0, i.useChain)([t, n, r], [.8, .9, 1]), (0, a.jsx)("div", {
    className: _.backgroundContainer,
    children: (0, a.jsxs)("div", {
      className: _.ringsContainer,
      children: [(0, a.jsx)(i.animated.div, {
        className: _.ringOuter,
        style: e ? void 0 : c
      }), (0, a.jsx)(i.animated.div, {
        className: _.ringMiddle,
        style: e ? void 0 : d
      }), (0, a.jsx)(i.animated.div, {
        className: _.ringInner,
        style: e ? void 0 : u
      })]
    })
  })
}
t.default = s.memo(function(e) {
  let {
    selectedGame: t,
    onClick: n
  } = e, S = (0, l.useStateFromStores)([o.default], () => o.default.useReducedMotion), p = s.useRef(null), g = s.useRef(null), I = s.useRef(null), T = s.useRef(null), A = s.useRef(null), N = s.useRef(null), v = (0, i.useSpring)({
    ref: p,
    ...m
  }), R = (0, i.useSpring)({
    ref: g,
    ...m
  }), O = (0, i.useSpring)({
    ref: I,
    ...m
  }), L = (0, i.useSpring)({
    ref: T,
    ...m
  }), M = (0, i.useSpring)({
    ref: A,
    ...m
  }), y = (0, i.useSpring)({
    ref: N,
    from: {
      transform: "translateY(40px)",
      opacity: 0
    },
    to: {
      transform: "translateY(0px)",
      opacity: 1
    },
    config: C
  });
  (0, i.useChain)([p, g, I, T, A, N], [.1, .2, .3, .4, .5, 1]), s.useEffect(() => {
    (0, u.trackClanDiscoveryUserNuxViewed)()
  }, []);
  let [P, x] = s.useMemo(() => {
    switch (t) {
      case c.ClanDiscoveryGame.GENSHIN:
        return [h.default.Messages.CLAN_DISCOVERY_UPSELL_GENSHIN_TITLE, h.default.Messages.CLAN_DISCOVERY_UPSELL_GENSHIN_SUBTITLE];
      case c.ClanDiscoveryGame.VALORANT:
        return [h.default.Messages.CLAN_DISCOVERY_UPSELL_VALORANT_TITLE, h.default.Messages.CLAN_DISCOVERY_UPSELL_VALORANT_SUBTITLE]
    }
  }, [t]);
  return (0, a.jsxs)("div", {
    className: _.upsellContainer,
    children: [(0, a.jsx)("div", {
      className: _.cardsContainer,
      children: (0, a.jsxs)("div", {
        className: _.cards,
        children: [(0, a.jsx)(i.animated.div, {
          className: _.clanCardOuterContainer,
          style: S ? void 0 : L,
          children: (0, a.jsx)(d.ClanDiscoveryCardView, {
            clan: E.FAKE_DISCOVERY_UPSELL_CLANS["0"],
            className: _.clanCardOuterLeft
          })
        }), (0, a.jsx)(i.animated.div, {
          className: _.clanCardInnerContainer,
          style: S ? void 0 : R,
          children: (0, a.jsx)(d.ClanDiscoveryCardView, {
            clan: E.FAKE_DISCOVERY_UPSELL_CLANS["1"],
            className: _.clanCardInnerLeft
          })
        }), (0, a.jsx)(i.animated.div, {
          className: _.clanCardCenterContainer,
          style: S ? void 0 : v,
          children: (0, a.jsx)(d.ClanDiscoveryCardView, {
            clan: E.FAKE_DISCOVERY_UPSELL_CLANS["4"],
            className: _.clanCardCenter
          })
        }), (0, a.jsx)(i.animated.div, {
          className: _.clanCardInnerContainer,
          style: S ? void 0 : O,
          children: (0, a.jsx)(d.ClanDiscoveryCardView, {
            clan: E.FAKE_DISCOVERY_UPSELL_CLANS["2"],
            className: _.clanCardInnerRight
          })
        }), (0, a.jsx)(i.animated.div, {
          className: _.clanCardOuterContainer,
          style: S ? void 0 : M,
          children: (0, a.jsx)(d.ClanDiscoveryCardView, {
            clan: E.FAKE_DISCOVERY_UPSELL_CLANS["3"],
            className: _.clanCardOuterRight
          })
        })]
      })
    }), (0, a.jsxs)(i.animated.div, {
      className: _.upsellDetails,
      style: S ? void 0 : y,
      children: [(0, a.jsx)(r.Heading, {
        className: _.upsellTitle,
        color: "header-primary",
        variant: "heading-xxl/semibold",
        children: P
      }), (0, a.jsx)(r.Text, {
        className: _.upsellSubtitle,
        color: "header-secondary",
        variant: "text-md/medium",
        children: x
      }), (0, a.jsx)(f.default, {
        onClick: n,
        children: h.default.Messages.CLAN_DISCOVERY_UPSELL_GET_STARTED
      })]
    })]
  })
})