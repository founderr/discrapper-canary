"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("718017"),
  i = n("903788"),
  r = n("625483"),
  o = n("388469"),
  u = n("442837"),
  d = n("481060"),
  c = n("607070"),
  f = n("650461"),
  E = n("603839"),
  h = n("430824"),
  _ = n("725568"),
  C = n("231467"),
  m = n("207796"),
  S = n("436137"),
  p = n("316553"),
  I = n("273254"),
  g = n("559469"),
  T = n("308083"),
  A = n("689938"),
  N = n("258036"),
  v = n("345480"),
  L = n("236613");
let R = {
  mass: 1,
  tension: 600,
  friction: 60
};

function O(e) {
  let {
    children: t,
    animatedStyle: n
  } = e;
  return (0, a.jsxs)(l.animated.div, {
    className: N.clanEnvelope,
    style: n,
    children: [(0, a.jsx)("div", {
      className: N.clanEnvelopeTop,
      children: (0, a.jsx)("img", {
        src: L,
        alt: ""
      })
    }), t, (0, a.jsx)("div", {
      className: N.clanEnvelopeBottom,
      children: (0, a.jsx)("img", {
        src: v,
        alt: ""
      })
    })]
  })
}

function M(e) {
  let {
    text: t,
    icon: n
  } = e;
  return (0, a.jsxs)("div", {
    className: N.upsellDetail,
    children: [(0, a.jsx)(n, {
      height: 24,
      width: 24,
      className: N.upsellIcon
    }), (0, a.jsx)(d.Text, {
      className: N.upsellDetailText,
      variant: "text-md/medium",
      children: t
    })]
  })
}

function P(e) {
  let {
    selectedGuildId: t,
    setSelectedGuildId: n,
    eligibleGuilds: l,
    selectedGame: u,
    onButtonClick: c,
    buttonText: f
  } = e, E = s.useMemo(() => {
    switch (u) {
      case m.ClanDiscoveryGame.GENSHIN:
        return A.default.Messages.CLAN_DISCOVERY_UPSELL_CTA_RECRUIT_GENSHIN;
      case m.ClanDiscoveryGame.VALORANT:
        return A.default.Messages.CLAN_DISCOVERY_UPSELL_CTA_RECRUIT_VALORANT
    }
  }, [u]), h = s.useMemo(() => l.map(e => ({
    value: e.id,
    label: e.name
  })), [l]), _ = l.length > 1;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(d.Heading, {
      className: N.upsellTitle,
      variant: "heading-xxl/semibold",
      children: [A.default.Messages.CLAN_DISCOVERY_UPSELL_CTA_GUILD_INVITE, (0, a.jsx)("br", {}), E]
    }), (0, a.jsxs)("div", {
      className: N.upsellDetails,
      children: [(0, a.jsx)(M, {
        icon: r.CompassIcon,
        text: A.default.Messages.CLAN_DISCOVERY_UPSELL_VIBES_OR_SKILL
      }), (0, a.jsx)(M, {
        icon: i.CircleCheckIcon,
        text: A.default.Messages.CLAN_DISCOVERY_UPSELL_APPLICATIONS
      }), (0, a.jsx)(M, {
        icon: o.GroupIcon,
        text: A.default.Messages.CLAN_DISCOVERY_UPSELL_MAX_SIZE
      })]
    }), (0, a.jsxs)("div", {
      className: N.upsellButton,
      children: [_ && (0, a.jsx)(d.SearchableSelect, {
        className: N.upsellSelect,
        value: t,
        options: h,
        onChange: n
      }), (0, a.jsx)(S.default, {
        className: _ ? N.buttonWithSelect : void 0,
        onClick: c,
        children: f
      })]
    })]
  })
}
t.default = s.memo(function(e) {
  let {
    eligibleGuilds: t,
    selectedGame: n
  } = e, [i, r] = s.useState(() => {
    let e = new Set(f.default.getGuildIds());
    for (let n of t)
      if (e.has(n.id)) return n.id;
    return t[0].id
  }), o = (0, u.useStateFromStores)([h.default], () => h.default.getGuild(i)), d = (0, u.useStateFromStores)([f.default], () => f.default.getStateForGuild(i).progress), m = (0, p.useDiscoveryGameApplicationId)({
    selectedGame: n
  }), S = s.useCallback(() => {
    (0, _.openFullScreenLayer)(e => {
      let {
        closeLayer: t
      } = e;
      return (0, a.jsx)(E.default, {
        onClose: t,
        guildId: i,
        gameId: m
      })
    }, {
      layerKey: T.CLAN_SETUP_MODAL_LAYER_KEY
    })
  }, [i, m]), v = (0, u.useStateFromStores)([c.default], () => c.default.useReducedMotion), L = (0, I.useFakeDiscoveryClanForGuild)({
    guild: o,
    selectedGame: n
  }), M = (0, l.useSpring)({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    config: R,
    duration: 200
  }), y = (0, l.useSpring)({
    from: v ? {
      transform: "translate(-324px, 32px) rotate(-8deg) scale(0.8)"
    } : {
      transform: "translate(0px, 0px) rotate(0deg) scale(1)"
    },
    to: {
      transform: "translate(-324px, 32px) rotate(-8deg) scale(0.8)"
    },
    config: R,
    delay: 200
  }), x = (0, l.useSpring)({
    from: v ? {
      transform: "translate(-176px, 16px) rotate(-4deg) scale(0.9)"
    } : {
      transform: "translate(0px, 0px) rotate(0deg) scale(1)"
    },
    to: {
      transform: "translate(-176px, 16px) rotate(-4deg) scale(0.9)"
    },
    config: R,
    delay: 200
  }), D = (0, l.useSpring)({
    from: v ? {
      transform: "translate(176px, 16px) rotate(4deg) scale(0.9)"
    } : {
      transform: "translate(0px, 0px) rotate(0deg) scale(1)"
    },
    to: {
      transform: "translate(176px, 16px) rotate(4deg) scale(0.9)"
    },
    config: R,
    delay: 200
  }), b = (0, l.useSpring)({
    from: v ? {
      transform: "translate(324px, 32px) rotate(8deg) scale(0.8)"
    } : {
      transform: "translate(0px, 0px) rotate(0deg) scale(1)"
    },
    to: {
      transform: "translate(324px, 32px) rotate(8deg) scale(0.8)"
    },
    config: R,
    delay: 200
  }), U = (0, l.useSpring)({
    from: v ? {
      transform: "scale(1)",
      opacity: 0
    } : {
      transform: "scale(0.9)",
      opacity: 0
    },
    to: {
      transform: "scale(1)",
      opacity: 1
    },
    config: R,
    delay: 200
  }), j = (0, l.useSpring)({
    from: v ? {
      transform: "translateY(0px)"
    } : {
      transform: "translateY(240px)"
    },
    to: {
      transform: "translateY(0px)"
    },
    config: R,
    delay: 200
  }), G = s.useMemo(() => null == d ? A.default.Messages.CLAN_DISCOVERY_UPSELL_RESERVE : A.default.Messages.CLAN_DISCOVERY_UPSELL_CONTINUE_SETUP, [d]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(l.animated.div, {
      className: N.cardsContainer,
      style: M,
      children: [(0, a.jsx)(l.animated.div, {
        className: N.clanCardOuterContainer,
        style: y,
        children: (0, a.jsx)(C.ClanDiscoveryCardView, {
          clan: g.FAKE_DISCOVERY_UPSELL_CLANS["0"],
          className: N.clanCardOuterLeft
        })
      }), (0, a.jsx)(l.animated.div, {
        className: N.clanCardInnerContainer,
        style: x,
        children: (0, a.jsx)(C.ClanDiscoveryCardView, {
          clan: g.FAKE_DISCOVERY_UPSELL_CLANS["1"],
          className: N.clanCardInnerLeft
        })
      }), null != L && (0, a.jsx)(O, {
        style: U,
        children: (0, a.jsx)("div", {
          className: N.clanCardCenterContainer,
          children: (0, a.jsx)(l.animated.div, {
            style: j,
            children: (0, a.jsx)(C.ClanDiscoveryCardView, {
              clan: L
            })
          })
        })
      }), (0, a.jsx)(l.animated.div, {
        className: N.clanCardInnerContainer,
        style: D,
        children: (0, a.jsx)(C.ClanDiscoveryCardView, {
          clan: g.FAKE_DISCOVERY_UPSELL_CLANS["2"],
          className: N.clanCardInnerRight
        })
      }), (0, a.jsx)(l.animated.div, {
        className: N.clanCardOuterContainer,
        style: b,
        children: (0, a.jsx)(C.ClanDiscoveryCardView, {
          clan: g.FAKE_DISCOVERY_UPSELL_CLANS["3"],
          className: N.clanCardOuterRight
        })
      })]
    }), (0, a.jsx)("div", {
      className: N.upsellCtaContainer,
      children: (0, a.jsx)(P, {
        selectedGuildId: i,
        setSelectedGuildId: r,
        eligibleGuilds: t,
        selectedGame: n,
        onButtonClick: S,
        buttonText: G
      })
    })]
  })
})