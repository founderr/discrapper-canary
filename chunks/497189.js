"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
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
  L = n("273254"),
  O = n("559469"),
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
    eligibleGuilds: l,
    selectedGame: r,
    onButtonClick: f,
    buttonText: _,
    hasCompletedUpsell: C
  } = e, m = (0, v.useClanDiscoveryUIStore)(e => e.setUserUpsellScreen, o.default), S = (0, v.useClanDiscoveryUIStore)(e => e.started, o.default), p = s.useMemo(() => {
    switch (r) {
      case v.ClanDiscoveryGame.GENSHIN:
        return y.default.Messages.CLAN_DISCOVERY_UPSELL_CTA_RECRUIT_GENSHIN;
      case v.ClanDiscoveryGame.VALORANT:
        return y.default.Messages.CLAN_DISCOVERY_UPSELL_CTA_RECRUIT_VALORANT
    }
  }, [r]), I = s.useMemo(() => l.map(e => ({
    value: e.id,
    label: e.name
  })), [l]), g = s.useCallback(() => {
    (0, v.setClanDiscoveryMode)(v.ClanDiscoveryMode.DISCOVERY)
  }, []), T = s.useCallback(() => {
    (0, v.setClanDiscoveryMode)(v.ClanDiscoveryMode.GET_STARTED), m(v.ClanDiscoveryUserScreens.USER_ONBOARDING)
  }, [m]), A = !S, N = l.length > 1;
  return (0, a.jsxs)(a.Fragment, {
    children: [C ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(h.Heading, {
        className: P.upsellTitle,
        variant: "heading-xxl/semibold",
        children: y.default.Messages.CLAN_DISCOVERY_ADMIN_UPSELL_COMPLETE_TITLE
      }), (0, a.jsx)(h.Heading, {
        className: P.upsellSubtitle,
        variant: "heading-md/medium",
        color: "header-secondary",
        children: y.default.Messages.CLAN_DISCOVERY_ADMIN_UPSELL_COMPLETE_SUBTITLE
      })]
    }) : (0, a.jsxs)(a.Fragment, {
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
      })]
    }), (0, a.jsxs)("div", {
      className: P.upsellButton,
      children: [N && (0, a.jsx)(h.SearchableSelect, {
        className: P.upsellSelect,
        value: t,
        options: I,
        onChange: n
      }), !C && (0, a.jsx)(h.Button, {
        look: h.ButtonLooks.FILLED,
        size: h.ButtonSizes.MEDIUM,
        color: h.ButtonColors.CUSTOM,
        className: i()(P.reserveButton, {
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
    eligibleGuildsIncludingConverted: n,
    selectedGame: l
  } = e, i = 0 === t.length, [o, u] = s.useState(() => {
    let e = new Set(I.default.getGuildIds());
    for (let n of t)
      if (e.has(n.id)) return n.id;
    return i ? n[0].id : t[0].id
  });
  s.useEffect(() => {
    !i && (0, p.trackClanAdminInviteViewed)({
      guildId: o,
      location: m.default.CLAN_DISCOVERY
    })
  }, [i, o]);
  let d = (0, f.useStateFromStores)([T.default], () => T.default.getGuild(o)),
    c = (0, f.useStateFromStores)([I.default], () => null != o ? I.default.getStateForGuild(o).progress : null),
    E = (0, R.useDiscoveryGameApplicationId)({
      selectedGame: l
    }),
    v = s.useCallback(() => {
      !i && ((0, p.trackClanAdminInviteClicked)({
        guildId: o,
        location: m.default.CLAN_DISCOVERY
      }), (0, A.openFullScreenLayer)(e => {
        let {
          closeLayer: t
        } = e;
        return (0, a.jsx)(g.default, {
          onClose: t,
          guildId: o,
          gameId: E
        })
      }, {
        layerKey: M.CLAN_SETUP_MODAL_LAYER_KEY
      }))
    }, [i, o, E]),
    x = (0, f.useStateFromStores)([C.default], () => C.default.useReducedMotion),
    D = (0, L.useFakeDiscoveryClanForGuild)({
      guild: d,
      selectedGame: l
    }),
    j = (0, r.useSpring)({
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
    }),
    k = (0, r.useSpring)({
      from: x ? {
        transform: "translate(0px, 0px) rotate(0deg) scale(1)"
      } : {
        transform: "translate(324px, -32px) rotate(8deg) scale(1.25)"
      },
      to: {
        transform: "translate(0px, 0px) rotate(0deg) scale(1)"
      },
      config: b,
      delay: 400
    }),
    w = (0, r.useSpring)({
      from: x ? {
        transform: "translate(0px, 0px) rotate(0deg) scale(1)"
      } : {
        transform: "translate(176px, -16px) rotate(4deg) scale(1.1111)"
      },
      to: {
        transform: "translate(0px, 0px) rotate(0deg) scale(1)"
      },
      config: b,
      delay: 400
    }),
    F = (0, r.useSpring)({
      from: x ? {
        transform: "translate(0px, 0px) rotate(0deg) scale(1)"
      } : {
        transform: "translate(-176px, -16px) rotate(-4deg) scale(1.1111)"
      },
      to: {
        transform: "translate(0px, 0px) rotate(0deg) scale(1)"
      },
      config: b,
      delay: 400
    }),
    B = (0, r.useSpring)({
      from: x ? {
        transform: "translate(0px, 0px) rotate(0deg) scale(1)"
      } : {
        transform: "translate(-324px, -32px) rotate(-8deg) scale(1.25)"
      },
      to: {
        transform: "translate(0px, 0px) rotate(0deg) scale(1)"
      },
      config: b,
      delay: 400
    }),
    H = (0, r.useSpring)({
      from: x ? {
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
    }),
    V = (0, r.useSpring)({
      from: x ? {
        transform: "translateY(0px)"
      } : {
        transform: "translateY(240px)"
      },
      to: {
        transform: "translateY(0px)"
      },
      config: b,
      delay: 400
    }),
    Y = s.useMemo(() => null == c ? y.default.Messages.CLAN_DISCOVERY_UPSELL_RESERVE : y.default.Messages.CLAN_DISCOVERY_UPSELL_CONTINUE_SETUP, [c]),
    W = s.useCallback(e => (0, a.jsx)(h.Text, {
      tag: "span",
      variant: "text-xs/medium",
      color: "text-brand",
      children: e
    }), []),
    K = s.useCallback(async () => {
      await (0, S.joinWumpusFeedbackSquad)(o), _.default.transitionToGuildSync("936317138904440892")
    }, [o]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: P.cardsContainer,
      children: [(0, a.jsx)(r.animated.div, {
        className: P.clanCardOuterContainer,
        style: {
          ...k,
          ...j
        },
        children: (0, a.jsx)(N.ClanDiscoveryCardView, {
          clan: O.FAKE_DISCOVERY_UPSELL_CLANS["0"],
          className: P.clanCardOuterLeft
        })
      }), (0, a.jsx)(r.animated.div, {
        className: P.clanCardInnerContainer,
        style: {
          ...w,
          ...j
        },
        children: (0, a.jsx)(N.ClanDiscoveryCardView, {
          clan: O.FAKE_DISCOVERY_UPSELL_CLANS["1"],
          className: P.clanCardInnerLeft
        })
      }), null != D && (0, a.jsx)(r.animated.div, {
        className: P.clanEnvelope,
        style: H,
        children: (0, a.jsx)(U, {
          children: (0, a.jsx)("div", {
            className: P.clanCardCenterContainer,
            children: (0, a.jsx)(r.animated.div, {
              style: V,
              children: (0, a.jsx)(N.ClanDiscoveryCardView, {
                clan: D,
                className: P.clanCardCenter
              })
            })
          })
        })
      }), (0, a.jsx)(r.animated.div, {
        className: P.clanCardInnerContainer,
        style: {
          ...F,
          ...j
        },
        children: (0, a.jsx)(N.ClanDiscoveryCardView, {
          clan: O.FAKE_DISCOVERY_UPSELL_CLANS["2"],
          className: P.clanCardInnerRight
        })
      }), (0, a.jsx)(r.animated.div, {
        className: P.clanCardOuterContainer,
        style: {
          ...B,
          ...j
        },
        children: (0, a.jsx)(N.ClanDiscoveryCardView, {
          clan: O.FAKE_DISCOVERY_UPSELL_CLANS["3"],
          className: P.clanCardOuterRight
        })
      })]
    }), (0, a.jsx)("div", {
      className: P.upsellCtaContainer,
      children: (0, a.jsx)(G, {
        selectedGuildId: o,
        setSelectedGuildId: u,
        eligibleGuilds: t,
        selectedGame: l,
        onButtonClick: v,
        buttonText: Y,
        hasCompletedUpsell: i
      })
    }), (0, a.jsx)("div", {
      className: P.joinWFSContainer,
      children: (0, a.jsx)(h.Clickable, {
        className: P.joinWFS,
        onClick: K,
        "aria-label": y.default.Messages.CLAN_DISCOVERY_UPSELL_JOIN_WFS_ARIA_LABEL,
        children: (0, a.jsx)(h.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: y.default.Messages.CLAN_DISCOVERY_UPSELL_JOIN_WFS.format({
            wfsHook: W
          })
        })
      })
    })]
  })
})