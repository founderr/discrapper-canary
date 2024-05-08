"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  i = n("120356"),
  l = n.n(i),
  r = n("685626"),
  o = n("143927"),
  u = n("903788"),
  d = n("625483"),
  c = n("388469"),
  f = n("442837"),
  E = n("484957"),
  h = n("481060"),
  _ = n("749210"),
  C = n("607070"),
  m = n("100527"),
  S = n("931240"),
  p = n("970606"),
  I = n("650461"),
  g = n("603839"),
  T = n("430824"),
  A = n("725568"),
  N = n("231467"),
  v = n("207796"),
  R = n("316553"),
  O = n("273254"),
  L = n("559469"),
  M = n("308083"),
  y = n("689938"),
  P = n("18712"),
  x = n("345480"),
  D = n("236613");
let b = {
  mass: 1,
  tension: 600,
  friction: 60
};

function U(e) {
  let {
    children: t
  } = e;
  return (0, a.jsxs)(r.animated.div, {
    className: P.clanEnvelope,
    children: [(0, a.jsx)("div", {
      className: P.clanEnvelopeTop,
      children: (0, a.jsx)("img", {
        src: D,
        alt: ""
      })
    }), t, (0, a.jsx)("div", {
      className: P.clanEnvelopeBottom,
      children: (0, a.jsx)("img", {
        src: x,
        alt: ""
      })
    })]
  })
}

function j(e) {
  let {
    text: t,
    icon: n
  } = e;
  return (0, a.jsxs)("div", {
    className: P.upsellDetail,
    children: [(0, a.jsx)(n, {
      height: 24,
      width: 24,
      className: P.upsellIcon
    }), (0, a.jsx)(h.Text, {
      className: P.upsellDetailText,
      variant: "text-md/medium",
      children: t
    })]
  })
}

function G(e) {
  let {
    selectedGuildId: t,
    setSelectedGuildId: n,
    eligibleGuilds: i,
    selectedGame: r,
    onButtonClick: f,
    buttonText: _
  } = e, C = (0, v.useClanDiscoveryUIStore)(e => e.setMode, o.default), m = (0, v.useClanDiscoveryUIStore)(e => e.setUserUpsellScreen, o.default), S = (0, v.useClanDiscoveryUIStore)(e => e.started, o.default), p = s.useMemo(() => {
    switch (r) {
      case v.ClanDiscoveryGame.GENSHIN:
        return y.default.Messages.CLAN_DISCOVERY_UPSELL_CTA_RECRUIT_GENSHIN;
      case v.ClanDiscoveryGame.VALORANT:
        return y.default.Messages.CLAN_DISCOVERY_UPSELL_CTA_RECRUIT_VALORANT
    }
  }, [r]), I = s.useMemo(() => i.map(e => ({
    value: e.id,
    label: e.name
  })), [i]), g = s.useCallback(() => {
    C(v.ClanDiscoveryMode.DISCOVERY)
  }, [C]), T = s.useCallback(() => {
    C(v.ClanDiscoveryMode.GET_STARTED), m(v.ClanDiscoveryUserScreens.USER_ONBOARDING)
  }, [C, m]), A = !S, N = i.length > 1;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(h.Heading, {
      className: P.upsellTitle,
      variant: "heading-xxl/semibold",
      children: [y.default.Messages.CLAN_DISCOVERY_UPSELL_CTA_GUILD_INVITE, (0, a.jsx)("br", {}), p]
    }), (0, a.jsxs)("div", {
      className: P.upsellDetails,
      children: [(0, a.jsx)(j, {
        icon: d.CompassIcon,
        text: y.default.Messages.CLAN_DISCOVERY_UPSELL_VIBES_OR_SKILL
      }), (0, a.jsx)(j, {
        icon: u.CircleCheckIcon,
        text: y.default.Messages.CLAN_DISCOVERY_UPSELL_APPLICATIONS
      }), (0, a.jsx)(j, {
        icon: c.GroupIcon,
        text: y.default.Messages.CLAN_DISCOVERY_UPSELL_MAX_SIZE
      })]
    }), (0, a.jsxs)("div", {
      className: P.upsellButton,
      children: [N && (0, a.jsx)(h.SearchableSelect, {
        className: P.upsellSelect,
        value: t,
        options: I,
        onChange: n
      }), (0, a.jsx)(h.Button, {
        look: h.ButtonLooks.FILLED,
        size: h.ButtonSizes.MEDIUM,
        color: h.ButtonColors.CUSTOM,
        className: l()(P.reserveButton, {
          [P.buttonWithSelect]: N
        }),
        onClick: f,
        children: (0, a.jsx)(h.Text, {
          variant: "text-sm/medium",
          color: "redesign-button-overlay-text",
          children: _
        })
      }), N && A && (0, a.jsx)("div", {
        className: P.spacer,
        children: "\xb7"
      }), A && (0, a.jsx)(h.Button, {
        look: h.ButtonLooks.OUTLINED,
        color: h.ButtonColors.PRIMARY,
        className: P.browseButton,
        onClick: T,
        children: (0, a.jsx)(h.Text, {
          variant: "text-sm/medium",
          children: y.default.Messages.CLAN_DISCOVERY_UPSELL_BROWSE
        })
      })]
    }), S && (0, a.jsx)("div", {
      className: P.upsellStaticHeader,
      children: (0, a.jsx)("div", {
        className: P.upsellBackButton,
        children: (0, a.jsx)(h.Clickable, {
          onClick: g,
          "aria-label": y.default.Messages.BACK,
          children: (0, a.jsx)(E.ArrowLargeLeftIcon, {})
        })
      })
    })]
  })
}
t.default = s.memo(function(e) {
  let {
    eligibleGuilds: t,
    selectedGame: n
  } = e;
  s.useEffect(() => {
    (0, p.trackClanAdminInviteViewed)({
      location: m.default.CLAN_DISCOVERY
    })
  }, []);
  let [i, l] = s.useState(() => {
    let e = new Set(I.default.getGuildIds());
    for (let n of t)
      if (e.has(n.id)) return n.id;
    return t[0].id
  }), o = (0, f.useStateFromStores)([T.default], () => T.default.getGuild(i)), u = (0, f.useStateFromStores)([I.default], () => I.default.getStateForGuild(i).progress), d = (0, R.useDiscoveryGameApplicationId)({
    selectedGame: n
  }), c = s.useCallback(() => {
    (0, p.trackClanAdminInviteClicked)({
      guildId: i,
      location: m.default.CLAN_DISCOVERY
    }), (0, A.openFullScreenLayer)(e => {
      let {
        closeLayer: t
      } = e;
      return (0, a.jsx)(g.default, {
        onClose: t,
        guildId: i,
        gameId: d
      })
    }, {
      layerKey: M.CLAN_SETUP_MODAL_LAYER_KEY
    })
  }, [i, d]), E = (0, f.useStateFromStores)([C.default], () => C.default.useReducedMotion), v = (0, O.useFakeDiscoveryClanForGuild)({
    guild: o,
    selectedGame: n
  }), x = (0, r.useSpring)({
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
  }), D = (0, r.useSpring)({
    from: E ? {
      transform: "translate(0px, 0px) rotate(0deg) scale(1)"
    } : {
      transform: "translate(324px, -32px) rotate(8deg) scale(1.25)"
    },
    to: {
      transform: "translate(0px, 0px) rotate(0deg) scale(1)"
    },
    config: b,
    delay: 400
  }), j = (0, r.useSpring)({
    from: E ? {
      transform: "translate(0px, 0px) rotate(0deg) scale(1)"
    } : {
      transform: "translate(176px, -16px) rotate(4deg) scale(1.1111)"
    },
    to: {
      transform: "translate(0px, 0px) rotate(0deg) scale(1)"
    },
    config: b,
    delay: 400
  }), k = (0, r.useSpring)({
    from: E ? {
      transform: "translate(0px, 0px) rotate(0deg) scale(1)"
    } : {
      transform: "translate(-176px, -16px) rotate(-4deg) scale(1.1111)"
    },
    to: {
      transform: "translate(0px, 0px) rotate(0deg) scale(1)"
    },
    config: b,
    delay: 400
  }), w = (0, r.useSpring)({
    from: E ? {
      transform: "translate(0px, 0px) rotate(0deg) scale(1)"
    } : {
      transform: "translate(-324px, -32px) rotate(-8deg) scale(1.25)"
    },
    to: {
      transform: "translate(0px, 0px) rotate(0deg) scale(1)"
    },
    config: b,
    delay: 400
  }), F = (0, r.useSpring)({
    from: E ? {
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
    config: b,
    delay: 200
  }), B = (0, r.useSpring)({
    from: E ? {
      transform: "translateY(0px)"
    } : {
      transform: "translateY(240px)"
    },
    to: {
      transform: "translateY(0px)"
    },
    config: b,
    delay: 400
  }), H = s.useMemo(() => null == u ? y.default.Messages.CLAN_DISCOVERY_UPSELL_RESERVE : y.default.Messages.CLAN_DISCOVERY_UPSELL_CONTINUE_SETUP, [u]), V = s.useCallback(e => (0, a.jsx)(h.Text, {
    tag: "span",
    variant: "text-xs/medium",
    color: "text-brand",
    children: e
  }), []), Y = s.useCallback(async () => {
    await (0, S.joinWumpusFeedbackSquad)(i), _.default.transitionToGuildSync("936317138904440892")
  }, [i]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: P.cardsContainer,
      children: [(0, a.jsx)(r.animated.div, {
        className: P.clanCardOuterContainer,
        style: {
          ...D,
          ...x
        },
        children: (0, a.jsx)(N.ClanDiscoveryCardView, {
          clan: L.FAKE_DISCOVERY_UPSELL_CLANS["0"],
          className: P.clanCardOuterLeft
        })
      }), (0, a.jsx)(r.animated.div, {
        className: P.clanCardInnerContainer,
        style: {
          ...j,
          ...x
        },
        children: (0, a.jsx)(N.ClanDiscoveryCardView, {
          clan: L.FAKE_DISCOVERY_UPSELL_CLANS["1"],
          className: P.clanCardInnerLeft
        })
      }), null != v && (0, a.jsx)(r.animated.div, {
        className: P.clanEnvelope,
        style: F,
        children: (0, a.jsx)(U, {
          children: (0, a.jsx)("div", {
            className: P.clanCardCenterContainer,
            children: (0, a.jsx)(r.animated.div, {
              style: B,
              children: (0, a.jsx)(N.ClanDiscoveryCardView, {
                clan: v,
                className: P.clanCardCenter
              })
            })
          })
        })
      }), (0, a.jsx)(r.animated.div, {
        className: P.clanCardInnerContainer,
        style: {
          ...k,
          ...x
        },
        children: (0, a.jsx)(N.ClanDiscoveryCardView, {
          clan: L.FAKE_DISCOVERY_UPSELL_CLANS["2"],
          className: P.clanCardInnerRight
        })
      }), (0, a.jsx)(r.animated.div, {
        className: P.clanCardOuterContainer,
        style: {
          ...w,
          ...x
        },
        children: (0, a.jsx)(N.ClanDiscoveryCardView, {
          clan: L.FAKE_DISCOVERY_UPSELL_CLANS["3"],
          className: P.clanCardOuterRight
        })
      })]
    }), (0, a.jsx)("div", {
      className: P.upsellCtaContainer,
      children: (0, a.jsx)(G, {
        selectedGuildId: i,
        setSelectedGuildId: l,
        eligibleGuilds: t,
        selectedGame: n,
        onButtonClick: c,
        buttonText: H
      })
    }), (0, a.jsx)("div", {
      className: P.joinWFSContainer,
      children: (0, a.jsx)(h.Clickable, {
        className: P.joinWFS,
        onClick: Y,
        "aria-label": y.default.Messages.CLAN_DISCOVERY_UPSELL_JOIN_WFS_ARIA_LABEL,
        children: (0, a.jsx)(h.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: y.default.Messages.CLAN_DISCOVERY_UPSELL_JOIN_WFS.format({
            wfsHook: V
          })
        })
      })
    })]
  })
})