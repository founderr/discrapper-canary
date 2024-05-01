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
  C = a("626135"),
  m = a("231467"),
  S = a("207796"),
  p = a("436137"),
  I = a("316553"),
  T = a("273254"),
  g = a("559469"),
  A = a("981631"),
  N = a("308083"),
  v = a("689938"),
  L = a("258036"),
  R = a("345480"),
  O = a("236613");
let M = {
  mass: 1,
  tension: 600,
  friction: 60
};

function P(e) {
  let {
    children: t
  } = e;
  return (0, n.jsxs)(l.animated.div, {
    className: L.clanEnvelope,
    children: [(0, n.jsx)("div", {
      className: L.clanEnvelopeTop,
      children: (0, n.jsx)("img", {
        src: O,
        alt: ""
      })
    }), t, (0, n.jsx)("div", {
      className: L.clanEnvelopeBottom,
      children: (0, n.jsx)("img", {
        src: R,
        alt: ""
      })
    })]
  })
}

function x(e) {
  let {
    text: t,
    icon: a
  } = e;
  return (0, n.jsxs)("div", {
    className: L.upsellDetail,
    children: [(0, n.jsx)(a, {
      height: 24,
      width: 24,
      className: L.upsellIcon
    }), (0, n.jsx)(d.Text, {
      className: L.upsellDetailText,
      variant: "text-md/medium",
      children: t
    })]
  })
}

function y(e) {
  let {
    selectedGuildId: t,
    setSelectedGuildId: a,
    eligibleGuilds: l,
    selectedGame: u,
    onButtonClick: c,
    buttonText: f
  } = e, E = s.useMemo(() => {
    switch (u) {
      case S.ClanDiscoveryGame.GENSHIN:
        return v.default.Messages.CLAN_DISCOVERY_UPSELL_CTA_RECRUIT_GENSHIN;
      case S.ClanDiscoveryGame.VALORANT:
        return v.default.Messages.CLAN_DISCOVERY_UPSELL_CTA_RECRUIT_VALORANT
    }
  }, [u]), h = s.useMemo(() => l.map(e => ({
    value: e.id,
    label: e.name
  })), [l]), _ = l.length > 1;
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(d.Heading, {
      className: L.upsellTitle,
      variant: "heading-xxl/semibold",
      children: [v.default.Messages.CLAN_DISCOVERY_UPSELL_CTA_GUILD_INVITE, (0, n.jsx)("br", {}), E]
    }), (0, n.jsxs)("div", {
      className: L.upsellDetails,
      children: [(0, n.jsx)(x, {
        icon: r.CompassIcon,
        text: v.default.Messages.CLAN_DISCOVERY_UPSELL_VIBES_OR_SKILL
      }), (0, n.jsx)(x, {
        icon: i.CircleCheckIcon,
        text: v.default.Messages.CLAN_DISCOVERY_UPSELL_APPLICATIONS
      }), (0, n.jsx)(x, {
        icon: o.GroupIcon,
        text: v.default.Messages.CLAN_DISCOVERY_UPSELL_MAX_SIZE
      })]
    }), (0, n.jsxs)("div", {
      className: L.upsellButton,
      children: [_ && (0, n.jsx)(d.SearchableSelect, {
        className: L.upsellSelect,
        value: t,
        options: h,
        onChange: a
      }), (0, n.jsx)(p.default, {
        className: _ ? L.buttonWithSelect : void 0,
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
  } = e;
  s.useEffect(() => {
    C.default.track(A.AnalyticEvents.CLAN_DISCOVERY_ADMIN_INVITE_VIEWED)
  }, []);
  let [i, r] = s.useState(() => {
    let e = new Set(f.default.getGuildIds());
    for (let a of t)
      if (e.has(a.id)) return a.id;
    return t[0].id
  }), o = (0, u.useStateFromStores)([h.default], () => h.default.getGuild(i)), d = (0, u.useStateFromStores)([f.default], () => f.default.getStateForGuild(i).progress), S = (0, I.useDiscoveryGameApplicationId)({
    selectedGame: a
  }), p = s.useCallback(() => {
    C.default.track(A.AnalyticEvents.CLAN_DISCOVERY_ADMIN_INVITE_CLICKED, {
      guild_id: i
    }), (0, _.openFullScreenLayer)(e => {
      let {
        closeLayer: t
      } = e;
      return (0, n.jsx)(E.default, {
        onClose: t,
        guildId: i,
        gameId: S
      })
    }, {
      layerKey: N.CLAN_SETUP_MODAL_LAYER_KEY
    })
  }, [i, S]), R = (0, u.useStateFromStores)([c.default], () => c.default.useReducedMotion), O = (0, T.useFakeDiscoveryClanForGuild)({
    guild: o,
    selectedGame: a
  }), x = (0, l.useSpring)({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    delay: 300,
    config: {
      duration: 0
    }
  }), D = (0, l.useSpring)({
    from: R ? {
      transform: "translate(0px, 0px) rotate(0deg) scale(1)"
    } : {
      transform: "translate(324px, -32px) rotate(8deg) scale(1.25)"
    },
    to: {
      transform: "translate(0px, 0px) rotate(0deg) scale(1)"
    },
    config: M,
    delay: 400
  }), b = (0, l.useSpring)({
    from: R ? {
      transform: "translate(0px, 0px) rotate(0deg) scale(1)"
    } : {
      transform: "translate(176px, -16px) rotate(4deg) scale(1.1111)"
    },
    to: {
      transform: "translate(0px, 0px) rotate(0deg) scale(1)"
    },
    config: M,
    delay: 400
  }), U = (0, l.useSpring)({
    from: R ? {
      transform: "translate(0px, 0px) rotate(0deg) scale(1)"
    } : {
      transform: "translate(-176px, -16px) rotate(-4deg) scale(1.1111)"
    },
    to: {
      transform: "translate(0px, 0px) rotate(0deg) scale(1)"
    },
    config: M,
    delay: 400
  }), j = (0, l.useSpring)({
    from: R ? {
      transform: "translate(0px, 0px) rotate(0deg) scale(1)"
    } : {
      transform: "translate(-324px, -32px) rotate(-8deg) scale(1.25)"
    },
    to: {
      transform: "translate(0px, 0px) rotate(0deg) scale(1)"
    },
    config: M,
    delay: 400
  }), G = (0, l.useSpring)({
    from: R ? {
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
    config: M,
    delay: 200
  }), w = (0, l.useSpring)({
    from: R ? {
      transform: "translateY(0px)"
    } : {
      transform: "translateY(240px)"
    },
    to: {
      transform: "translateY(0px)"
    },
    config: M,
    delay: 400
  }), k = s.useMemo(() => null == d ? v.default.Messages.CLAN_DISCOVERY_UPSELL_RESERVE : v.default.Messages.CLAN_DISCOVERY_UPSELL_CONTINUE_SETUP, [d]);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: L.cardsContainer,
      children: [(0, n.jsx)(l.animated.div, {
        className: L.clanCardOuterContainer,
        style: {
          ...D,
          ...x
        },
        children: (0, n.jsx)(m.ClanDiscoveryCardView, {
          clan: g.FAKE_DISCOVERY_UPSELL_CLANS["0"],
          className: L.clanCardOuterLeft
        })
      }), (0, n.jsx)(l.animated.div, {
        className: L.clanCardInnerContainer,
        style: {
          ...b,
          ...x
        },
        children: (0, n.jsx)(m.ClanDiscoveryCardView, {
          clan: g.FAKE_DISCOVERY_UPSELL_CLANS["1"],
          className: L.clanCardInnerLeft
        })
      }), null != O && (0, n.jsx)(l.animated.div, {
        className: L.clanEnvelope,
        style: G,
        children: (0, n.jsx)(P, {
          children: (0, n.jsx)("div", {
            className: L.clanCardCenterContainer,
            children: (0, n.jsx)(l.animated.div, {
              style: w,
              children: (0, n.jsx)(m.ClanDiscoveryCardView, {
                clan: O,
                className: L.clanCardCenter
              })
            })
          })
        })
      }), (0, n.jsx)(l.animated.div, {
        className: L.clanCardInnerContainer,
        style: {
          ...U,
          ...x
        },
        children: (0, n.jsx)(m.ClanDiscoveryCardView, {
          clan: g.FAKE_DISCOVERY_UPSELL_CLANS["2"],
          className: L.clanCardInnerRight
        })
      }), (0, n.jsx)(l.animated.div, {
        className: L.clanCardOuterContainer,
        style: {
          ...j,
          ...x
        },
        children: (0, n.jsx)(m.ClanDiscoveryCardView, {
          clan: g.FAKE_DISCOVERY_UPSELL_CLANS["3"],
          className: L.clanCardOuterRight
        })
      })]
    }), (0, n.jsx)("div", {
      className: L.upsellCtaContainer,
      children: (0, n.jsx)(y, {
        selectedGuildId: i,
        setSelectedGuildId: r,
        eligibleGuilds: t,
        selectedGame: a,
        onButtonClick: p,
        buttonText: k
      })
    })]
  })
})