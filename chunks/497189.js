"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  i = n("120356"),
  l = n.n(i),
  r = n("718017"),
  o = n("143927"),
  u = n("903788"),
  d = n("625483"),
  c = n("388469"),
  f = n("442837"),
  E = n("484957"),
  h = n("481060"),
  _ = n("607070"),
  C = n("650461"),
  m = n("603839"),
  S = n("430824"),
  p = n("725568"),
  g = n("626135"),
  I = n("231467"),
  T = n("207796"),
  A = n("316553"),
  N = n("273254"),
  v = n("559469"),
  R = n("981631"),
  O = n("308083"),
  L = n("689938"),
  M = n("258036"),
  y = n("345480"),
  P = n("236613");
let x = {
  mass: 1,
  tension: 600,
  friction: 60
};

function D(e) {
  let {
    children: t
  } = e;
  return (0, a.jsxs)(r.animated.div, {
    className: M.clanEnvelope,
    children: [(0, a.jsx)("div", {
      className: M.clanEnvelopeTop,
      children: (0, a.jsx)("img", {
        src: P,
        alt: ""
      })
    }), t, (0, a.jsx)("div", {
      className: M.clanEnvelopeBottom,
      children: (0, a.jsx)("img", {
        src: y,
        alt: ""
      })
    })]
  })
}

function b(e) {
  let {
    text: t,
    icon: n
  } = e;
  return (0, a.jsxs)("div", {
    className: M.upsellDetail,
    children: [(0, a.jsx)(n, {
      height: 24,
      width: 24,
      className: M.upsellIcon
    }), (0, a.jsx)(h.Text, {
      className: M.upsellDetailText,
      variant: "text-md/medium",
      children: t
    })]
  })
}

function U(e) {
  let {
    selectedGuildId: t,
    setSelectedGuildId: n,
    eligibleGuilds: i,
    selectedGame: r,
    onButtonClick: f,
    buttonText: _
  } = e, C = (0, T.useClanDiscoveryUIStore)(e => e.setMode, o.default), m = (0, T.useClanDiscoveryUIStore)(e => e.setUserUpsellScreen, o.default), S = (0, T.useClanDiscoveryUIStore)(e => e.started, o.default), p = s.useMemo(() => {
    switch (r) {
      case T.ClanDiscoveryGame.GENSHIN:
        return L.default.Messages.CLAN_DISCOVERY_UPSELL_CTA_RECRUIT_GENSHIN;
      case T.ClanDiscoveryGame.VALORANT:
        return L.default.Messages.CLAN_DISCOVERY_UPSELL_CTA_RECRUIT_VALORANT
    }
  }, [r]), g = s.useMemo(() => i.map(e => ({
    value: e.id,
    label: e.name
  })), [i]), I = s.useCallback(() => {
    C(T.ClanDiscoveryMode.DISCOVERY)
  }, [C]), A = s.useCallback(() => {
    C(T.ClanDiscoveryMode.GET_STARTED), m(T.ClanDiscoveryUserScreens.USER_ONBOARDING)
  }, [C, m]), N = !S, v = i.length > 1;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(h.Heading, {
      className: M.upsellTitle,
      variant: "heading-xxl/semibold",
      children: [L.default.Messages.CLAN_DISCOVERY_UPSELL_CTA_GUILD_INVITE, (0, a.jsx)("br", {}), p]
    }), (0, a.jsxs)("div", {
      className: M.upsellDetails,
      children: [(0, a.jsx)(b, {
        icon: d.CompassIcon,
        text: L.default.Messages.CLAN_DISCOVERY_UPSELL_VIBES_OR_SKILL
      }), (0, a.jsx)(b, {
        icon: u.CircleCheckIcon,
        text: L.default.Messages.CLAN_DISCOVERY_UPSELL_APPLICATIONS
      }), (0, a.jsx)(b, {
        icon: c.GroupIcon,
        text: L.default.Messages.CLAN_DISCOVERY_UPSELL_MAX_SIZE
      })]
    }), (0, a.jsxs)("div", {
      className: M.upsellButton,
      children: [v && (0, a.jsx)(h.SearchableSelect, {
        className: M.upsellSelect,
        value: t,
        options: g,
        onChange: n
      }), (0, a.jsx)(h.Button, {
        look: h.ButtonLooks.FILLED,
        size: h.ButtonSizes.MEDIUM,
        color: h.ButtonColors.CUSTOM,
        className: l()(M.reserveButton, {
          [M.buttonWithSelect]: v
        }),
        onClick: f,
        children: (0, a.jsx)(h.Text, {
          variant: "text-sm/medium",
          color: "redesign-button-overlay-text",
          children: _
        })
      }), v && N && (0, a.jsx)("div", {
        className: M.spacer,
        children: "\xb7"
      }), N && (0, a.jsx)(h.Button, {
        look: h.ButtonLooks.OUTLINED,
        color: h.ButtonColors.PRIMARY,
        className: M.browseButton,
        onClick: A,
        children: (0, a.jsx)(h.Text, {
          variant: "text-sm/medium",
          children: L.default.Messages.CLAN_DISCOVERY_UPSELL_BROWSE
        })
      })]
    }), S && (0, a.jsx)("div", {
      className: M.upsellStaticHeader,
      children: (0, a.jsx)("div", {
        className: M.upsellBackButton,
        children: (0, a.jsx)(h.Clickable, {
          onClick: I,
          "aria-label": L.default.Messages.BACK,
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
    g.default.track(R.AnalyticEvents.CLAN_DISCOVERY_ADMIN_INVITE_VIEWED)
  }, []);
  let [i, l] = s.useState(() => {
    let e = new Set(C.default.getGuildIds());
    for (let n of t)
      if (e.has(n.id)) return n.id;
    return t[0].id
  }), o = (0, f.useStateFromStores)([S.default], () => S.default.getGuild(i)), u = (0, f.useStateFromStores)([C.default], () => C.default.getStateForGuild(i).progress), d = (0, A.useDiscoveryGameApplicationId)({
    selectedGame: n
  }), c = s.useCallback(() => {
    g.default.track(R.AnalyticEvents.CLAN_DISCOVERY_ADMIN_INVITE_CLICKED, {
      guild_id: i
    }), (0, p.openFullScreenLayer)(e => {
      let {
        closeLayer: t
      } = e;
      return (0, a.jsx)(m.default, {
        onClose: t,
        guildId: i,
        gameId: d
      })
    }, {
      layerKey: O.CLAN_SETUP_MODAL_LAYER_KEY
    })
  }, [i, d]), E = (0, f.useStateFromStores)([_.default], () => _.default.useReducedMotion), h = (0, N.useFakeDiscoveryClanForGuild)({
    guild: o,
    selectedGame: n
  }), T = (0, r.useSpring)({
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
  }), y = (0, r.useSpring)({
    from: E ? {
      transform: "translate(0px, 0px) rotate(0deg) scale(1)"
    } : {
      transform: "translate(324px, -32px) rotate(8deg) scale(1.25)"
    },
    to: {
      transform: "translate(0px, 0px) rotate(0deg) scale(1)"
    },
    config: x,
    delay: 400
  }), P = (0, r.useSpring)({
    from: E ? {
      transform: "translate(0px, 0px) rotate(0deg) scale(1)"
    } : {
      transform: "translate(176px, -16px) rotate(4deg) scale(1.1111)"
    },
    to: {
      transform: "translate(0px, 0px) rotate(0deg) scale(1)"
    },
    config: x,
    delay: 400
  }), b = (0, r.useSpring)({
    from: E ? {
      transform: "translate(0px, 0px) rotate(0deg) scale(1)"
    } : {
      transform: "translate(-176px, -16px) rotate(-4deg) scale(1.1111)"
    },
    to: {
      transform: "translate(0px, 0px) rotate(0deg) scale(1)"
    },
    config: x,
    delay: 400
  }), j = (0, r.useSpring)({
    from: E ? {
      transform: "translate(0px, 0px) rotate(0deg) scale(1)"
    } : {
      transform: "translate(-324px, -32px) rotate(-8deg) scale(1.25)"
    },
    to: {
      transform: "translate(0px, 0px) rotate(0deg) scale(1)"
    },
    config: x,
    delay: 400
  }), G = (0, r.useSpring)({
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
    config: x,
    delay: 200
  }), k = (0, r.useSpring)({
    from: E ? {
      transform: "translateY(0px)"
    } : {
      transform: "translateY(240px)"
    },
    to: {
      transform: "translateY(0px)"
    },
    config: x,
    delay: 400
  }), w = s.useMemo(() => null == u ? L.default.Messages.CLAN_DISCOVERY_UPSELL_RESERVE : L.default.Messages.CLAN_DISCOVERY_UPSELL_CONTINUE_SETUP, [u]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: M.cardsContainer,
      children: [(0, a.jsx)(r.animated.div, {
        className: M.clanCardOuterContainer,
        style: {
          ...y,
          ...T
        },
        children: (0, a.jsx)(I.ClanDiscoveryCardView, {
          clan: v.FAKE_DISCOVERY_UPSELL_CLANS["0"],
          className: M.clanCardOuterLeft
        })
      }), (0, a.jsx)(r.animated.div, {
        className: M.clanCardInnerContainer,
        style: {
          ...P,
          ...T
        },
        children: (0, a.jsx)(I.ClanDiscoveryCardView, {
          clan: v.FAKE_DISCOVERY_UPSELL_CLANS["1"],
          className: M.clanCardInnerLeft
        })
      }), null != h && (0, a.jsx)(r.animated.div, {
        className: M.clanEnvelope,
        style: G,
        children: (0, a.jsx)(D, {
          children: (0, a.jsx)("div", {
            className: M.clanCardCenterContainer,
            children: (0, a.jsx)(r.animated.div, {
              style: k,
              children: (0, a.jsx)(I.ClanDiscoveryCardView, {
                clan: h,
                className: M.clanCardCenter
              })
            })
          })
        })
      }), (0, a.jsx)(r.animated.div, {
        className: M.clanCardInnerContainer,
        style: {
          ...b,
          ...T
        },
        children: (0, a.jsx)(I.ClanDiscoveryCardView, {
          clan: v.FAKE_DISCOVERY_UPSELL_CLANS["2"],
          className: M.clanCardInnerRight
        })
      }), (0, a.jsx)(r.animated.div, {
        className: M.clanCardOuterContainer,
        style: {
          ...j,
          ...T
        },
        children: (0, a.jsx)(I.ClanDiscoveryCardView, {
          clan: v.FAKE_DISCOVERY_UPSELL_CLANS["3"],
          className: M.clanCardOuterRight
        })
      })]
    }), (0, a.jsx)("div", {
      className: M.upsellCtaContainer,
      children: (0, a.jsx)(U, {
        selectedGuildId: i,
        setSelectedGuildId: l,
        eligibleGuilds: t,
        selectedGame: n,
        onButtonClick: c,
        buttonText: w
      })
    })]
  })
})