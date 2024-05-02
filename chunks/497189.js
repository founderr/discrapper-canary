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
  C = n("626135"),
  m = n("231467"),
  S = n("207796"),
  p = n("436137"),
  I = n("316553"),
  T = n("273254"),
  g = n("559469"),
  A = n("981631"),
  N = n("308083"),
  v = n("689938"),
  R = n("258036"),
  L = n("345480"),
  O = n("236613");
let M = {
  mass: 1,
  tension: 600,
  friction: 60
};

function P(e) {
  let {
    children: t
  } = e;
  return (0, a.jsxs)(l.animated.div, {
    className: R.clanEnvelope,
    children: [(0, a.jsx)("div", {
      className: R.clanEnvelopeTop,
      children: (0, a.jsx)("img", {
        src: O,
        alt: ""
      })
    }), t, (0, a.jsx)("div", {
      className: R.clanEnvelopeBottom,
      children: (0, a.jsx)("img", {
        src: L,
        alt: ""
      })
    })]
  })
}

function x(e) {
  let {
    text: t,
    icon: n
  } = e;
  return (0, a.jsxs)("div", {
    className: R.upsellDetail,
    children: [(0, a.jsx)(n, {
      height: 24,
      width: 24,
      className: R.upsellIcon
    }), (0, a.jsx)(d.Text, {
      className: R.upsellDetailText,
      variant: "text-md/medium",
      children: t
    })]
  })
}

function y(e) {
  let {
    selectedGuildId: t,
    setSelectedGuildId: n,
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
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(d.Heading, {
      className: R.upsellTitle,
      variant: "heading-xxl/semibold",
      children: [v.default.Messages.CLAN_DISCOVERY_UPSELL_CTA_GUILD_INVITE, (0, a.jsx)("br", {}), E]
    }), (0, a.jsxs)("div", {
      className: R.upsellDetails,
      children: [(0, a.jsx)(x, {
        icon: r.CompassIcon,
        text: v.default.Messages.CLAN_DISCOVERY_UPSELL_VIBES_OR_SKILL
      }), (0, a.jsx)(x, {
        icon: i.CircleCheckIcon,
        text: v.default.Messages.CLAN_DISCOVERY_UPSELL_APPLICATIONS
      }), (0, a.jsx)(x, {
        icon: o.GroupIcon,
        text: v.default.Messages.CLAN_DISCOVERY_UPSELL_MAX_SIZE
      })]
    }), (0, a.jsxs)("div", {
      className: R.upsellButton,
      children: [_ && (0, a.jsx)(d.SearchableSelect, {
        className: R.upsellSelect,
        value: t,
        options: h,
        onChange: n
      }), (0, a.jsx)(p.default, {
        className: _ ? R.buttonWithSelect : void 0,
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
  } = e;
  s.useEffect(() => {
    C.default.track(A.AnalyticEvents.CLAN_DISCOVERY_ADMIN_INVITE_VIEWED)
  }, []);
  let [i, r] = s.useState(() => {
    let e = new Set(f.default.getGuildIds());
    for (let n of t)
      if (e.has(n.id)) return n.id;
    return t[0].id
  }), o = (0, u.useStateFromStores)([h.default], () => h.default.getGuild(i)), d = (0, u.useStateFromStores)([f.default], () => f.default.getStateForGuild(i).progress), S = (0, I.useDiscoveryGameApplicationId)({
    selectedGame: n
  }), p = s.useCallback(() => {
    C.default.track(A.AnalyticEvents.CLAN_DISCOVERY_ADMIN_INVITE_CLICKED, {
      guild_id: i
    }), (0, _.openFullScreenLayer)(e => {
      let {
        closeLayer: t
      } = e;
      return (0, a.jsx)(E.default, {
        onClose: t,
        guildId: i,
        gameId: S
      })
    }, {
      layerKey: N.CLAN_SETUP_MODAL_LAYER_KEY
    })
  }, [i, S]), L = (0, u.useStateFromStores)([c.default], () => c.default.useReducedMotion), O = (0, T.useFakeDiscoveryClanForGuild)({
    guild: o,
    selectedGame: n
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
    from: L ? {
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
    from: L ? {
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
    from: L ? {
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
    from: L ? {
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
    from: L ? {
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
    from: L ? {
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
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: R.cardsContainer,
      children: [(0, a.jsx)(l.animated.div, {
        className: R.clanCardOuterContainer,
        style: {
          ...D,
          ...x
        },
        children: (0, a.jsx)(m.ClanDiscoveryCardView, {
          clan: g.FAKE_DISCOVERY_UPSELL_CLANS["0"],
          className: R.clanCardOuterLeft
        })
      }), (0, a.jsx)(l.animated.div, {
        className: R.clanCardInnerContainer,
        style: {
          ...b,
          ...x
        },
        children: (0, a.jsx)(m.ClanDiscoveryCardView, {
          clan: g.FAKE_DISCOVERY_UPSELL_CLANS["1"],
          className: R.clanCardInnerLeft
        })
      }), null != O && (0, a.jsx)(l.animated.div, {
        className: R.clanEnvelope,
        style: G,
        children: (0, a.jsx)(P, {
          children: (0, a.jsx)("div", {
            className: R.clanCardCenterContainer,
            children: (0, a.jsx)(l.animated.div, {
              style: w,
              children: (0, a.jsx)(m.ClanDiscoveryCardView, {
                clan: O,
                className: R.clanCardCenter
              })
            })
          })
        })
      }), (0, a.jsx)(l.animated.div, {
        className: R.clanCardInnerContainer,
        style: {
          ...U,
          ...x
        },
        children: (0, a.jsx)(m.ClanDiscoveryCardView, {
          clan: g.FAKE_DISCOVERY_UPSELL_CLANS["2"],
          className: R.clanCardInnerRight
        })
      }), (0, a.jsx)(l.animated.div, {
        className: R.clanCardOuterContainer,
        style: {
          ...j,
          ...x
        },
        children: (0, a.jsx)(m.ClanDiscoveryCardView, {
          clan: g.FAKE_DISCOVERY_UPSELL_CLANS["3"],
          className: R.clanCardOuterRight
        })
      })]
    }), (0, a.jsx)("div", {
      className: R.upsellCtaContainer,
      children: (0, a.jsx)(y, {
        selectedGuildId: i,
        setSelectedGuildId: r,
        eligibleGuilds: t,
        selectedGame: n,
        onButtonClick: p,
        buttonText: k
      })
    })]
  })
})