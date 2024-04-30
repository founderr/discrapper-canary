"use strict";
a.r(t), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("718017"),
  i = a("903788"),
  r = a("625483"),
  o = a("388469"),
  u = a("442837"),
  d = a("481060"),
  c = a("607070"),
  f = a("650461"),
  E = a("603839"),
  h = a("430824"),
  _ = a("725568"),
  C = a("231467"),
  m = a("207796"),
  S = a("436137"),
  p = a("316553"),
  I = a("273254"),
  T = a("559469"),
  g = a("308083"),
  A = a("689938"),
  N = a("258036"),
  v = a("345480"),
  L = a("236613");
let R = {
  mass: 1,
  tension: 600,
  friction: 60
};

function O(e) {
  let {
    children: t,
    animatedStyle: a
  } = e;
  return (0, n.jsxs)(l.animated.div, {
    className: N.clanEnvelope,
    style: a,
    children: [(0, n.jsx)("div", {
      className: N.clanEnvelopeTop,
      children: (0, n.jsx)("img", {
        src: L,
        alt: ""
      })
    }), t, (0, n.jsx)("div", {
      className: N.clanEnvelopeBottom,
      children: (0, n.jsx)("img", {
        src: v,
        alt: ""
      })
    })]
  })
}

function M(e) {
  let {
    text: t,
    icon: a
  } = e;
  return (0, n.jsxs)("div", {
    className: N.upsellDetail,
    children: [(0, n.jsx)(a, {
      height: 24,
      width: 24,
      className: N.upsellIcon
    }), (0, n.jsx)(d.Text, {
      className: N.upsellDetailText,
      variant: "text-md/medium",
      children: t
    })]
  })
}

function P(e) {
  let {
    selectedGuildId: t,
    setSelectedGuildId: a,
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
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(d.Heading, {
      className: N.upsellTitle,
      variant: "heading-xxl/semibold",
      children: [A.default.Messages.CLAN_DISCOVERY_UPSELL_CTA_GUILD_INVITE, (0, n.jsx)("br", {}), E]
    }), (0, n.jsxs)("div", {
      className: N.upsellDetails,
      children: [(0, n.jsx)(M, {
        icon: r.CompassIcon,
        text: A.default.Messages.CLAN_DISCOVERY_UPSELL_VIBES_OR_SKILL
      }), (0, n.jsx)(M, {
        icon: i.CircleCheckIcon,
        text: A.default.Messages.CLAN_DISCOVERY_UPSELL_APPLICATIONS
      }), (0, n.jsx)(M, {
        icon: o.GroupIcon,
        text: A.default.Messages.CLAN_DISCOVERY_UPSELL_MAX_SIZE
      })]
    }), (0, n.jsxs)("div", {
      className: N.upsellButton,
      children: [_ && (0, n.jsx)(d.SearchableSelect, {
        className: N.upsellSelect,
        value: t,
        options: h,
        onChange: a
      }), (0, n.jsx)(S.default, {
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
    selectedGame: a
  } = e, [i, r] = s.useState(() => {
    let e = new Set(f.default.getGuildIds());
    for (let a of t)
      if (e.has(a.id)) return a.id;
    return t[0].id
  }), o = (0, u.useStateFromStores)([h.default], () => h.default.getGuild(i)), d = (0, u.useStateFromStores)([f.default], () => f.default.getStateForGuild(i).progress), m = (0, p.useDiscoveryGameApplicationId)({
    selectedGame: a
  }), S = s.useCallback(() => {
    (0, _.openFullScreenLayer)(e => {
      let {
        closeLayer: t
      } = e;
      return (0, n.jsx)(E.default, {
        onClose: t,
        guildId: i,
        gameId: m
      })
    }, {
      layerKey: g.CLAN_SETUP_MODAL_LAYER_KEY
    })
  }, [i, m]), v = (0, u.useStateFromStores)([c.default], () => c.default.useReducedMotion), L = (0, I.useFakeDiscoveryClanForGuild)({
    guild: o,
    selectedGame: a
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
      transform: "translate(0px, 0px) rotate(0deg) scale(1)"
    } : {
      transform: "translate(324px, -32px) rotate(8deg) scale(1.25)"
    },
    to: {
      transform: "translate(0px, 0px) rotate(0deg) scale(1)"
    },
    config: R,
    delay: 200
  }), x = (0, l.useSpring)({
    from: v ? {
      transform: "translate(0px, 0px) rotate(0deg) scale(1)"
    } : {
      transform: "translate(176px, -16px) rotate(4deg) scale(1.1111)"
    },
    to: {
      transform: "translate(0px, 0px) rotate(0deg) scale(1)"
    },
    config: R,
    delay: 200
  }), D = (0, l.useSpring)({
    from: v ? {
      transform: "translate(0px, 0px) rotate(0deg) scale(1)"
    } : {
      transform: "translate(-176px, -16px) rotate(-4deg) scale(1.1111)"
    },
    to: {
      transform: "translate(0px, 0px) rotate(0deg) scale(1)"
    },
    config: R,
    delay: 200
  }), b = (0, l.useSpring)({
    from: v ? {
      transform: "translate(0px, 0px) rotate(0deg) scale(1)"
    } : {
      transform: "translate(-324px, -32px) rotate(-8deg) scale(1.25)"
    },
    to: {
      transform: "translate(0px, 0px) rotate(0deg) scale(1)"
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
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(l.animated.div, {
      className: N.cardsContainer,
      style: M,
      children: [(0, n.jsx)(l.animated.div, {
        className: N.clanCardOuterContainer,
        style: y,
        children: (0, n.jsx)(C.ClanDiscoveryCardView, {
          clan: T.FAKE_DISCOVERY_UPSELL_CLANS["0"],
          className: N.clanCardOuterLeft
        })
      }), (0, n.jsx)(l.animated.div, {
        className: N.clanCardInnerContainer,
        style: x,
        children: (0, n.jsx)(C.ClanDiscoveryCardView, {
          clan: T.FAKE_DISCOVERY_UPSELL_CLANS["1"],
          className: N.clanCardInnerLeft
        })
      }), null != L && (0, n.jsx)(O, {
        style: U,
        children: (0, n.jsx)("div", {
          className: N.clanCardCenterContainer,
          children: (0, n.jsx)(l.animated.div, {
            style: j,
            children: (0, n.jsx)(C.ClanDiscoveryCardView, {
              clan: L,
              className: N.clanCardCenter
            })
          })
        })
      }), (0, n.jsx)(l.animated.div, {
        className: N.clanCardInnerContainer,
        style: D,
        children: (0, n.jsx)(C.ClanDiscoveryCardView, {
          clan: T.FAKE_DISCOVERY_UPSELL_CLANS["2"],
          className: N.clanCardInnerRight
        })
      }), (0, n.jsx)(l.animated.div, {
        className: N.clanCardOuterContainer,
        style: b,
        children: (0, n.jsx)(C.ClanDiscoveryCardView, {
          clan: T.FAKE_DISCOVERY_UPSELL_CLANS["3"],
          className: N.clanCardOuterRight
        })
      })]
    }), (0, n.jsx)("div", {
      className: N.upsellCtaContainer,
      children: (0, n.jsx)(P, {
        selectedGuildId: i,
        setSelectedGuildId: r,
        eligibleGuilds: t,
        selectedGame: a,
        onButtonClick: S,
        buttonText: G
      })
    })]
  })
})