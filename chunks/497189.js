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
  p = n("931240"),
  S = n("970606"),
  g = n("963202"),
  I = n("650461"),
  T = n("603839"),
  A = n("430824"),
  N = n("725568"),
  v = n("231467"),
  R = n("207796"),
  O = n("316553"),
  L = n("273254"),
  y = n("559469"),
  M = n("308083"),
  P = n("689938"),
  x = n("18712"),
  D = n("345480"),
  b = n("236613");
let U = {
  mass: 1,
  tension: 600,
  friction: 60
};

function j(e) {
  let {
    children: t
  } = e;
  return (0, a.jsxs)(r.animated.div, {
    className: x.clanEnvelope,
    children: [(0, a.jsx)("div", {
      className: x.clanEnvelopeTop,
      children: (0, a.jsx)("img", {
        src: b,
        alt: ""
      })
    }), t, (0, a.jsx)("div", {
      className: x.clanEnvelopeBottom,
      children: (0, a.jsx)("img", {
        src: D,
        alt: ""
      })
    })]
  })
}

function G(e) {
  let {
    text: t,
    icon: n
  } = e;
  return (0, a.jsxs)("div", {
    className: x.upsellDetail,
    children: [(0, a.jsx)(n, {
      height: 24,
      width: 24,
      className: x.upsellIcon
    }), (0, a.jsx)(h.Text, {
      className: x.upsellDetailText,
      variant: "text-md/medium",
      children: t
    })]
  })
}

function k(e) {
  let {
    selectedGuildId: t,
    setSelectedGuildId: n,
    eligibleGuilds: l,
    onButtonClick: r,
    buttonText: f,
    hasCompletedUpsell: _
  } = e, C = (0, R.useClanDiscoveryUIStore)(e => e.setUserUpsellScreen, o.default), m = (0, R.useClanDiscoveryUIStore)(e => e.started, o.default), p = s.useMemo(() => l.map(e => ({
    value: e.id,
    label: e.name
  })), [l]), {
    enableApplication: S
  } = (0, g.useClanPrePilotApplicationExperiment)("discovery"), I = s.useCallback(() => {
    (0, R.setClanDiscoveryMode)(R.ClanDiscoveryMode.DISCOVERY)
  }, []), T = s.useCallback(() => {
    (0, R.setClanDiscoveryMode)(R.ClanDiscoveryMode.GET_STARTED), C(R.ClanDiscoveryUserScreens.USER_ONBOARDING)
  }, [C]), A = !m && S, N = l.length > 1;
  return (0, a.jsxs)(a.Fragment, {
    children: [_ ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(h.Heading, {
        className: x.upsellTitle,
        variant: "heading-xxl/semibold",
        children: P.default.Messages.CLAN_DISCOVERY_ADMIN_UPSELL_COMPLETE_TITLE
      }), (0, a.jsx)(h.Heading, {
        className: x.upsellSubtitle,
        variant: "heading-md/medium",
        color: "header-secondary",
        children: P.default.Messages.CLAN_DISCOVERY_ADMIN_UPSELL_COMPLETE_SUBTITLE
      })]
    }) : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(h.Heading, {
        className: x.upsellTitle,
        variant: "heading-xxl/semibold",
        children: [P.default.Messages.CLAN_DISCOVERY_UPSELL_CTA_GUILD_INVITE, (0, a.jsx)("br", {}), P.default.Messages.CLAN_DISCOVERY_UPSELL_CTA_RECRUIT]
      }), (0, a.jsxs)("div", {
        className: x.upsellDetails,
        children: [(0, a.jsx)(G, {
          icon: d.CompassIcon,
          text: P.default.Messages.CLAN_DISCOVERY_UPSELL_VIBES_OR_SKILL
        }), (0, a.jsx)(G, {
          icon: u.CircleCheckIcon,
          text: P.default.Messages.CLAN_DISCOVERY_UPSELL_APPLICATIONS
        }), (0, a.jsx)(G, {
          icon: c.GroupIcon,
          text: P.default.Messages.CLAN_DISCOVERY_UPSELL_MAX_SIZE
        })]
      })]
    }), (0, a.jsxs)("div", {
      className: x.upsellButton,
      children: [N && (0, a.jsx)(h.SearchableSelect, {
        className: x.upsellSelect,
        value: t,
        options: p,
        onChange: n
      }), !_ && (0, a.jsx)(h.Button, {
        look: h.ButtonLooks.FILLED,
        size: h.ButtonSizes.LARGE,
        color: h.ButtonColors.BRAND,
        className: i()(x.reserveButton, {
          [x.buttonWithSelect]: N
        }),
        onClick: r,
        children: (0, a.jsx)(h.Text, {
          variant: "text-sm/medium",
          color: "always-white",
          children: f
        })
      }), N && A && (0, a.jsx)("div", {
        className: x.spacer,
        children: "\xb7"
      }), A && (0, a.jsx)(h.Button, {
        look: h.ButtonLooks.OUTLINED,
        color: h.ButtonColors.PRIMARY,
        className: x.browseButton,
        onClick: T,
        children: (0, a.jsx)(h.Text, {
          variant: "text-sm/medium",
          children: P.default.Messages.CLAN_DISCOVERY_UPSELL_BROWSE
        })
      })]
    }), m && (0, a.jsx)("div", {
      className: x.upsellStaticHeader,
      children: (0, a.jsx)("div", {
        className: x.upsellBackButton,
        children: (0, a.jsx)(h.Clickable, {
          onClick: I,
          "aria-label": P.default.Messages.BACK,
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
    !i && (0, S.trackClanAdminInviteViewed)({
      guildId: o,
      location: m.default.CLAN_DISCOVERY
    })
  }, [i, o]);
  let d = (0, f.useStateFromStores)([A.default], () => A.default.getGuild(o)),
    c = (0, f.useStateFromStores)([I.default], () => null != o ? I.default.getStateForGuild(o).progress : null),
    E = (0, O.useDiscoveryGameApplicationId)({
      selectedGame: l
    }),
    {
      defaultGameId: D
    } = (0, g.useClanPrepilotExperimentForGuild)({
      guild: d,
      location: "ClanDiscoveryAdminUpsell",
      includeConverted: !1
    });
  s.useEffect(() => {
    let e = D === M.VALORANT_ID ? R.ClanDiscoveryGame.VALORANT : D === M.GENSHIN_ID ? R.ClanDiscoveryGame.GENSHIN : void 0;
    null != e && E !== D && R.useClanDiscoveryUIStore.getState().setGame(e)
  }, [D, E]);
  let b = s.useCallback(() => {
      !i && ((0, S.trackClanAdminInviteClicked)({
        guildId: o,
        location: m.default.CLAN_DISCOVERY
      }), (0, N.openFullScreenLayer)(e => {
        let {
          closeLayer: t
        } = e;
        return (0, a.jsx)(T.default, {
          onClose: t,
          guildId: o
        })
      }, {
        layerKey: M.CLAN_SETUP_MODAL_LAYER_KEY
      }))
    }, [i, o]),
    G = (0, f.useStateFromStores)([C.default], () => C.default.useReducedMotion),
    w = (0, L.useFakeDiscoveryClanForGuild)({
      guild: d,
      selectedGame: l
    }),
    B = (0, y.useFakeDiscoveryUpsellClans)(E),
    [F, H] = s.useState(!0),
    V = (0, r.useSpring)({
      from: {
        opacity: 0
      },
      to: {
        opacity: 1
      },
      delay: 400,
      config: {
        duration: 0
      }
    }),
    Y = (0, r.useSpring)({
      from: G ? {
        transform: "translate(0px, 0px) rotate(0deg) scale(1)"
      } : {
        transform: "translate(324px, -56px) rotate(8deg) scale(1.25)"
      },
      to: {
        transform: "translate(0px, 0px) rotate(0deg) scale(1)"
      },
      config: U,
      delay: 400
    }),
    W = (0, r.useSpring)({
      from: G ? {
        transform: "translate(0px, 0px) rotate(0deg) scale(1)"
      } : {
        transform: "translate(176px, -24px) rotate(4deg) scale(1.1111)"
      },
      to: {
        transform: "translate(0px, 0px) rotate(0deg) scale(1)"
      },
      config: U,
      delay: 350
    }),
    K = (0, r.useSpring)({
      from: G ? {
        transform: "translate(0px, 0px) rotate(0deg) scale(1)"
      } : {
        transform: "translate(-176px, -24px) rotate(-4deg) scale(1.1111)"
      },
      to: {
        transform: "translate(0px, 0px) rotate(0deg) scale(1)"
      },
      config: U,
      delay: 350
    }),
    z = (0, r.useSpring)({
      from: G ? {
        transform: "translate(0px, 0px) rotate(0deg) scale(1)"
      } : {
        transform: "translate(-324px, -56px) rotate(-8deg) scale(1.25)"
      },
      to: {
        transform: "translate(0px, 0px) rotate(0deg) scale(1)"
      },
      config: U,
      delay: 400
    }),
    q = (0, r.useSpring)({
      from: G ? {
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
      config: U,
      delay: 200
    }),
    Q = (0, r.useSpring)({
      from: G ? {
        transform: "translateY(0px)"
      } : {
        transform: "translateY(240px)"
      },
      to: {
        transform: "translateY(0px)"
      },
      config: U,
      delay: 250,
      onRest: () => H(!1)
    }),
    Z = s.useMemo(() => null == c ? P.default.Messages.CLAN_DISCOVERY_UPSELL_RESERVE : P.default.Messages.CLAN_DISCOVERY_UPSELL_CONTINUE_SETUP, [c]),
    X = s.useCallback(async () => {
      await (0, p.joinWumpusFeedbackSquad)(o), _.default.transitionToGuildSync("936317138904440892")
    }, [o]),
    J = s.useCallback(e => (0, a.jsx)(h.Clickable, {
      tag: "span",
      className: x.joinWFSLink,
      onClick: X,
      "aria-label": P.default.Messages.CLAN_DISCOVERY_UPSELL_JOIN_WFS_ARIA_LABEL,
      children: (0, a.jsx)(h.Text, {
        tag: "span",
        variant: "text-xs/medium",
        color: "text-brand",
        children: e
      })
    }), [X]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: x.cardsContainer,
      children: [(0, a.jsx)(r.animated.div, {
        className: x.clanCardOuterContainer,
        style: {
          ...Y,
          ...V
        },
        children: (0, a.jsx)(v.ClanDiscoveryCardView, {
          clan: B[0],
          className: x.clanCardOuterLeft,
          renderBannerFromRaw: !0
        })
      }), (0, a.jsx)(r.animated.div, {
        className: x.clanCardInnerContainer,
        style: {
          ...W,
          ...V
        },
        children: (0, a.jsx)(v.ClanDiscoveryCardView, {
          clan: B[1],
          className: x.clanCardInnerLeft,
          renderBannerFromRaw: !0
        })
      }), null != w && (0, a.jsx)(r.animated.div, {
        className: x.clanEnvelope,
        style: q,
        children: (0, a.jsx)(j, {
          children: (0, a.jsx)("div", {
            className: x.clanCardCenterContainer,
            style: {
              overflow: F ? "hidden" : "visible"
            },
            children: (0, a.jsx)(r.animated.div, {
              style: Q,
              children: (0, a.jsx)(v.ClanDiscoveryCardView, {
                renderBannerFromRaw: !0,
                clan: w,
                className: x.clanCardCenter
              })
            })
          })
        })
      }), (0, a.jsx)(r.animated.div, {
        className: x.clanCardInnerContainer,
        style: {
          ...K,
          ...V
        },
        children: (0, a.jsx)(v.ClanDiscoveryCardView, {
          clan: B[2],
          className: x.clanCardInnerRight,
          renderBannerFromRaw: !0
        })
      }), (0, a.jsx)(r.animated.div, {
        className: x.clanCardOuterContainer,
        style: {
          ...z,
          ...V
        },
        children: (0, a.jsx)(v.ClanDiscoveryCardView, {
          clan: B[3],
          className: x.clanCardOuterRight,
          renderBannerFromRaw: !0
        })
      })]
    }), (0, a.jsx)("div", {
      className: x.upsellCtaContainer,
      children: (0, a.jsx)(k, {
        selectedGuildId: o,
        setSelectedGuildId: u,
        eligibleGuilds: t,
        onButtonClick: b,
        buttonText: Z,
        hasCompletedUpsell: i
      })
    }), (0, a.jsx)("div", {
      className: x.joinWFSContainer,
      children: (0, a.jsx)("div", {
        className: x.joinWFS,
        children: (0, a.jsx)(h.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: P.default.Messages.CLAN_DISCOVERY_UPSELL_JOIN_WFS.format({
            wfsHook: J
          })
        })
      })
    })]
  })
})