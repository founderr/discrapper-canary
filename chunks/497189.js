"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("920906"),
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
  g = n("963202"),
  I = n("650461"),
  T = n("353093"),
  A = n("603839"),
  N = n("430824"),
  v = n("725568"),
  R = n("231467"),
  O = n("207796"),
  L = n("316553"),
  M = n("273254"),
  y = n("559469"),
  P = n("308083"),
  x = n("689938"),
  D = n("18712"),
  b = n("345480"),
  U = n("236613");
let j = {
  mass: 1,
  tension: 600,
  friction: 60
};

function G(e) {
  let {
    children: t
  } = e;
  return (0, a.jsxs)(r.animated.div, {
    className: D.clanEnvelope,
    children: [(0, a.jsx)("div", {
      className: D.clanEnvelopeTop,
      children: (0, a.jsx)("img", {
        src: U,
        alt: ""
      })
    }), t, (0, a.jsx)("div", {
      className: D.clanEnvelopeBottom,
      children: (0, a.jsx)("img", {
        src: b,
        alt: ""
      })
    })]
  })
}

function k(e) {
  let {
    text: t,
    icon: n
  } = e;
  return (0, a.jsxs)("div", {
    className: D.upsellDetail,
    children: [(0, a.jsx)(n, {
      height: 24,
      width: 24,
      className: D.upsellIcon
    }), (0, a.jsx)(h.Text, {
      className: D.upsellDetailText,
      variant: "text-md/medium",
      children: t
    })]
  })
}

function w(e) {
  let {
    selectedGuildId: t,
    setSelectedGuildId: n,
    eligibleGuilds: l,
    onButtonClick: r,
    buttonText: f,
    hasCompletedUpsell: _,
    isBrowseButtonVisible: C
  } = e, m = (0, O.useClanDiscoveryUIStore)(e => e.setUserUpsellScreen, o.default), S = (0, O.useClanDiscoveryUIStore)(e => e.started, o.default), p = s.useMemo(() => l.map(e => ({
    value: e.id,
    label: e.name
  })), [l]), g = s.useCallback(() => {
    (0, O.setClanDiscoveryMode)(O.ClanDiscoveryMode.DISCOVERY)
  }, []), I = s.useCallback(() => {
    (0, O.setClanDiscoveryMode)(O.ClanDiscoveryMode.GET_STARTED), m(O.ClanDiscoveryUserScreens.USER_ONBOARDING)
  }, [m]), T = l.length > 1;
  return (0, a.jsxs)(a.Fragment, {
    children: [_ ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(h.Heading, {
        className: D.upsellTitle,
        variant: "heading-xxl/semibold",
        children: x.default.Messages.CLAN_DISCOVERY_ADMIN_UPSELL_COMPLETE_TITLE
      }), (0, a.jsx)(h.Heading, {
        className: D.upsellSubtitle,
        variant: "heading-md/medium",
        color: "header-secondary",
        children: x.default.Messages.CLAN_DISCOVERY_ADMIN_UPSELL_COMPLETE_SUBTITLE
      })]
    }) : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(h.Heading, {
        className: D.upsellTitle,
        variant: "heading-xxl/semibold",
        children: [x.default.Messages.CLAN_DISCOVERY_UPSELL_CTA_GUILD_INVITE, (0, a.jsx)("br", {}), x.default.Messages.CLAN_DISCOVERY_UPSELL_CTA_RECRUIT]
      }), (0, a.jsxs)("div", {
        className: D.upsellDetails,
        children: [(0, a.jsx)(k, {
          icon: d.CompassIcon,
          text: x.default.Messages.CLAN_DISCOVERY_UPSELL_VIBES_OR_SKILL
        }), (0, a.jsx)(k, {
          icon: u.CircleCheckIcon,
          text: x.default.Messages.CLAN_DISCOVERY_UPSELL_APPLICATIONS
        }), (0, a.jsx)(k, {
          icon: c.GroupIcon,
          text: x.default.Messages.CLAN_DISCOVERY_UPSELL_MAX_SIZE
        })]
      })]
    }), (0, a.jsxs)("div", {
      className: D.upsellButton,
      children: [T && (0, a.jsx)(h.SearchableSelect, {
        className: D.upsellSelect,
        value: t,
        options: p,
        onChange: n
      }), !_ && (0, a.jsx)(h.Button, {
        look: h.ButtonLooks.FILLED,
        size: h.ButtonSizes.LARGE,
        color: h.ButtonColors.BRAND,
        className: i()(D.reserveButton, {
          [D.buttonWithSelect]: T
        }),
        onClick: r,
        children: (0, a.jsx)(h.Text, {
          variant: "text-sm/medium",
          color: "always-white",
          children: f
        })
      }), T && C && (0, a.jsx)("div", {
        className: D.spacer,
        children: "\xb7"
      }), C && (0, a.jsx)(h.Button, {
        look: h.ButtonLooks.OUTLINED,
        color: h.ButtonColors.PRIMARY,
        className: D.browseButton,
        onClick: I,
        children: x.default.Messages.CLAN_DISCOVERY_UPSELL_BROWSE
      })]
    }), S && (0, a.jsx)("div", {
      className: D.upsellStaticHeader,
      children: (0, a.jsx)("div", {
        className: D.upsellBackButton,
        children: (0, a.jsx)(h.Clickable, {
          onClick: g,
          "aria-label": x.default.Messages.BACK,
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
    selectedGame: l,
    isBrowseButtonVisible: i
  } = e, o = 0 === t.length, [u, d] = s.useState(() => {
    let e = new Set(I.default.getGuildIds());
    for (let n of t)
      if (e.has(n.id)) return n.id;
    return o ? n[0].id : t[0].id
  });
  s.useEffect(() => {
    !o && (0, p.trackClanAdminInviteViewed)({
      guildId: u,
      location: m.default.CLAN_DISCOVERY
    })
  }, [o, u]);
  let c = (0, f.useStateFromStores)([N.default], () => N.default.getGuild(u)),
    E = (0, f.useStateFromStores)([I.default], () => null != u ? I.default.getStateForGuild(u).progress : null),
    b = (0, L.useDiscoveryGameApplicationId)({
      selectedGame: l
    }),
    {
      defaultGameId: U
    } = (0, g.useClanPrepilotExperimentForGuild)({
      guild: c,
      location: "ClanDiscoveryAdminUpsell",
      includeConverted: !1
    });
  s.useEffect(() => {
    let e = U === P.VALORANT_ID ? O.ClanDiscoveryGame.VALORANT : U === P.GENSHIN_ID ? O.ClanDiscoveryGame.GENSHIN : void 0;
    null != e && b !== U && O.useClanDiscoveryUIStore.getState().setGame(e)
  }, [U, b]);
  let k = s.useCallback(() => {
      !o && ((0, p.trackClanAdminInviteClicked)({
        guildId: u,
        location: m.default.CLAN_DISCOVERY
      }), (0, v.openFullScreenLayer)(e => {
        let {
          closeLayer: t
        } = e;
        return (0, a.jsx)(A.default, {
          onClose: t,
          guildId: u
        })
      }, {
        layerKey: P.CLAN_SETUP_MODAL_LAYER_KEY
      }))
    }, [o, u]),
    B = (0, f.useStateFromStores)([C.default], () => C.default.useReducedMotion),
    F = (0, M.useFakeDiscoveryClanForGuild)({
      guild: c,
      selectedGame: l
    }),
    H = (0, y.useFakeDiscoveryUpsellClans)(b),
    [V, Y] = s.useState(!0),
    W = (0, r.useSpring)({
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
    K = (0, r.useSpring)({
      from: B ? {
        transform: "translate(0px, 0px) rotate(0deg) scale(1)"
      } : {
        transform: "translate(324px, -56px) rotate(8deg) scale(1.25)"
      },
      to: {
        transform: "translate(0px, 0px) rotate(0deg) scale(1)"
      },
      config: j,
      delay: 400
    }),
    z = (0, r.useSpring)({
      from: B ? {
        transform: "translate(0px, 0px) rotate(0deg) scale(1)"
      } : {
        transform: "translate(176px, -24px) rotate(4deg) scale(1.1111)"
      },
      to: {
        transform: "translate(0px, 0px) rotate(0deg) scale(1)"
      },
      config: j,
      delay: 350
    }),
    q = (0, r.useSpring)({
      from: B ? {
        transform: "translate(0px, 0px) rotate(0deg) scale(1)"
      } : {
        transform: "translate(-176px, -24px) rotate(-4deg) scale(1.1111)"
      },
      to: {
        transform: "translate(0px, 0px) rotate(0deg) scale(1)"
      },
      config: j,
      delay: 350
    }),
    Q = (0, r.useSpring)({
      from: B ? {
        transform: "translate(0px, 0px) rotate(0deg) scale(1)"
      } : {
        transform: "translate(-324px, -56px) rotate(-8deg) scale(1.25)"
      },
      to: {
        transform: "translate(0px, 0px) rotate(0deg) scale(1)"
      },
      config: j,
      delay: 400
    }),
    Z = (0, r.useSpring)({
      from: B ? {
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
      config: j,
      delay: 200
    }),
    X = (0, r.useSpring)({
      from: B ? {
        transform: "translateY(0px)"
      } : {
        transform: "translateY(240px)"
      },
      to: {
        transform: "translateY(0px)"
      },
      config: j,
      delay: 250,
      onRest: () => Y(!1)
    }),
    J = s.useMemo(() => null == E ? x.default.Messages.CLAN_DISCOVERY_UPSELL_RESERVE : x.default.Messages.CLAN_DISCOVERY_UPSELL_CONTINUE_SETUP, [E]),
    $ = s.useCallback(async () => {
      await (0, S.joinWumpusFeedbackSquad)(u), _.default.transitionToGuildSync("936317138904440892")
    }, [u]),
    ee = s.useCallback(e => (0, a.jsx)(h.Clickable, {
      tag: "span",
      className: D.joinWFSLink,
      onClick: $,
      "aria-label": x.default.Messages.CLAN_DISCOVERY_UPSELL_JOIN_WFS_ARIA_LABEL,
      children: (0, a.jsx)(h.Text, {
        tag: "span",
        variant: "text-xs/medium",
        color: "text-brand",
        children: e
      })
    }), [$]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: D.cardsContainer,
      children: [(0, a.jsx)(r.animated.div, {
        className: D.clanCardOuterContainer,
        style: {
          ...K,
          ...W
        },
        children: (0, a.jsx)(R.ClanDiscoveryCardView, {
          clan: H[0],
          className: D.clanCardOuterLeft
        })
      }), (0, a.jsx)(r.animated.div, {
        className: D.clanCardInnerContainer,
        style: {
          ...z,
          ...W
        },
        children: (0, a.jsx)(R.ClanDiscoveryCardView, {
          clan: H[1],
          className: D.clanCardInnerLeft
        })
      }), null != F && (0, a.jsx)(r.animated.div, {
        className: D.clanEnvelope,
        style: Z,
        children: (0, a.jsx)(G, {
          children: (0, a.jsx)("div", {
            className: D.clanCardCenterContainer,
            style: {
              overflow: V ? "hidden" : "visible"
            },
            children: (0, a.jsx)(r.animated.div, {
              style: X,
              children: (0, a.jsx)(R.ClanDiscoveryCardView, {
                clan: F,
                className: D.clanCardCenter,
                bannerUrl: (0, T.getClanBannerUrl)(H[4].id, H[4].bannerHash)
              })
            })
          })
        })
      }), (0, a.jsx)(r.animated.div, {
        className: D.clanCardInnerContainer,
        style: {
          ...q,
          ...W
        },
        children: (0, a.jsx)(R.ClanDiscoveryCardView, {
          clan: H[2],
          className: D.clanCardInnerRight
        })
      }), (0, a.jsx)(r.animated.div, {
        className: D.clanCardOuterContainer,
        style: {
          ...Q,
          ...W
        },
        children: (0, a.jsx)(R.ClanDiscoveryCardView, {
          clan: H[3],
          className: D.clanCardOuterRight
        })
      })]
    }), (0, a.jsx)("div", {
      className: D.upsellCtaContainer,
      children: (0, a.jsx)(w, {
        selectedGuildId: u,
        setSelectedGuildId: d,
        eligibleGuilds: t,
        onButtonClick: k,
        buttonText: J,
        hasCompletedUpsell: o,
        isBrowseButtonVisible: i
      })
    }), (0, a.jsx)("div", {
      className: D.joinWFSContainer,
      children: (0, a.jsx)("div", {
        className: D.joinWFS,
        children: (0, a.jsx)(h.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: x.default.Messages.CLAN_DISCOVERY_UPSELL_JOIN_WFS.format({
            wfsHook: ee
          })
        })
      })
    })]
  })
})