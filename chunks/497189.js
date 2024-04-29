"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("903788"),
  i = n("625483"),
  r = n("388469"),
  o = n("481060"),
  u = n("603839"),
  d = n("725568"),
  c = n("231467"),
  f = n("207796"),
  E = n("436137"),
  h = n("316553"),
  _ = n("273254"),
  C = n("559469"),
  m = n("308083"),
  S = n("689938"),
  p = n("18712"),
  I = n("345480"),
  T = n("236613");

function g(e) {
  let {
    children: t
  } = e;
  return (0, a.jsxs)("div", {
    className: p.clanEnvelope,
    children: [(0, a.jsx)("div", {
      className: p.clanEnvelopeTop,
      children: (0, a.jsx)("img", {
        src: T,
        alt: ""
      })
    }), t, (0, a.jsx)("div", {
      className: p.clanEnvelopeBottom,
      children: (0, a.jsx)("img", {
        src: I,
        alt: ""
      })
    })]
  })
}

function A(e) {
  let {
    text: t,
    icon: n
  } = e;
  return (0, a.jsxs)("div", {
    className: p.upsellDetail,
    children: [(0, a.jsx)(n, {
      height: 24,
      width: 24,
      className: p.upsellIcon
    }), (0, a.jsx)(o.Text, {
      className: p.upsellDetailText,
      variant: "text-md/medium",
      children: t
    })]
  })
}

function N(e) {
  let {
    selectedGuild: t,
    setSelectedGuild: n,
    guilds: c,
    selectedGame: _
  } = e, C = (0, h.useDiscoveryGameApplicationId)({
    selectedGame: _
  }), I = s.useMemo(() => {
    switch (_) {
      case f.ClanDiscoveryGame.GENSHIN:
        return S.default.Messages.CLAN_DISCOVERY_UPSELL_CTA_RECRUIT_GENSHIN;
      case f.ClanDiscoveryGame.VALORANT:
        return S.default.Messages.CLAN_DISCOVERY_UPSELL_CTA_RECRUIT_VALORANT
    }
  }, [_]), T = s.useCallback(() => {
    (0, d.openFullScreenLayer)(e => {
      let {
        closeLayer: n
      } = e;
      return (0, a.jsx)(u.default, {
        onClose: n,
        guildId: t.id,
        gameId: C
      })
    }, {
      layerKey: m.CLAN_SETUP_MODAL_LAYER_KEY
    })
  }, [t.id, C]), g = s.useMemo(() => c.map(e => ({
    value: e,
    label: e.name
  })), [c]), N = c.length > 1;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(o.Heading, {
      className: p.upsellTitle,
      variant: "heading-xxl/semibold",
      children: [S.default.Messages.CLAN_DISCOVERY_UPSELL_CTA_GUILD_INVITE, (0, a.jsx)("br", {}), I]
    }), (0, a.jsxs)("div", {
      className: p.upsellDetails,
      children: [(0, a.jsx)(A, {
        icon: i.CompassIcon,
        text: S.default.Messages.CLAN_DISCOVERY_UPSELL_VIBES_OR_SKILL
      }), (0, a.jsx)(A, {
        icon: l.CircleCheckIcon,
        text: S.default.Messages.CLAN_DISCOVERY_UPSELL_APPLICATIONS
      }), (0, a.jsx)(A, {
        icon: r.GroupIcon,
        text: S.default.Messages.CLAN_DISCOVERY_UPSELL_MAX_SIZE
      })]
    }), (0, a.jsxs)("div", {
      className: p.upsellButton,
      children: [N && (0, a.jsx)(o.SearchableSelect, {
        className: p.upsellSelect,
        wrapperClassName: p.upsellSelectWrapper,
        value: t,
        options: g,
        onChange: n
      }), (0, a.jsx)(E.default, {
        className: N ? p.buttonWithSelect : void 0,
        onClick: T,
        children: S.default.Messages.CLAN_DISCOVERY_UPSELL_RESERVE
      })]
    })]
  })
}
t.default = s.memo(function(e) {
  let {
    guilds: t,
    selectedGame: n
  } = e, [l, i] = s.useState(t[0]), r = (0, _.useFakeDiscoveryClanForGuild)({
    guild: l,
    selectedGame: n
  });
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: p.cardsContainer,
      children: [(0, a.jsx)("div", {
        className: p.clanCardOuterContainer,
        children: (0, a.jsx)(c.ClanDiscoveryCardView, {
          clan: C.FAKE_DISCOVERY_UPSELL_CLANS["0"],
          className: p.clanCardOuterLeft
        })
      }), (0, a.jsx)("div", {
        className: p.clanCardInnerContainer,
        children: (0, a.jsx)(c.ClanDiscoveryCardView, {
          clan: C.FAKE_DISCOVERY_UPSELL_CLANS["1"],
          className: p.clanCardInnerLeft
        })
      }), (0, a.jsx)(g, {
        children: (0, a.jsx)("div", {
          className: p.clanCardCenterContainer,
          children: (0, a.jsx)(c.ClanDiscoveryCardView, {
            className: p.clanCardCenter,
            clan: r
          })
        })
      }), (0, a.jsx)("div", {
        className: p.clanCardInnerContainer,
        children: (0, a.jsx)(c.ClanDiscoveryCardView, {
          clan: C.FAKE_DISCOVERY_UPSELL_CLANS["2"],
          className: p.clanCardInnerRight
        })
      }), (0, a.jsx)("div", {
        className: p.clanCardOuterContainer,
        children: (0, a.jsx)(c.ClanDiscoveryCardView, {
          clan: C.FAKE_DISCOVERY_UPSELL_CLANS["3"],
          className: p.clanCardOuterRight
        })
      })]
    }), (0, a.jsx)("div", {
      className: p.upsellCtaContainer,
      children: (0, a.jsx)(N, {
        selectedGuild: l,
        setSelectedGuild: i,
        guilds: t,
        selectedGame: n
      })
    })]
  })
})