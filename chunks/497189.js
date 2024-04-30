"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("903788"),
  i = n("625483"),
  r = n("388469"),
  o = n("442837"),
  u = n("481060"),
  d = n("650461"),
  c = n("603839"),
  f = n("430824"),
  E = n("725568"),
  h = n("231467"),
  _ = n("207796"),
  C = n("436137"),
  m = n("316553"),
  S = n("273254"),
  p = n("559469"),
  I = n("308083"),
  T = n("689938"),
  g = n("258036"),
  A = n("345480"),
  N = n("236613");

function v(e) {
  let {
    children: t
  } = e;
  return (0, a.jsxs)("div", {
    className: g.clanEnvelope,
    children: [(0, a.jsx)("div", {
      className: g.clanEnvelopeTop,
      children: (0, a.jsx)("img", {
        src: N,
        alt: ""
      })
    }), t, (0, a.jsx)("div", {
      className: g.clanEnvelopeBottom,
      children: (0, a.jsx)("img", {
        src: A,
        alt: ""
      })
    })]
  })
}

function L(e) {
  let {
    text: t,
    icon: n
  } = e;
  return (0, a.jsxs)("div", {
    className: g.upsellDetail,
    children: [(0, a.jsx)(n, {
      height: 24,
      width: 24,
      className: g.upsellIcon
    }), (0, a.jsx)(u.Text, {
      className: g.upsellDetailText,
      variant: "text-md/medium",
      children: t
    })]
  })
}

function R(e) {
  let {
    selectedGuildId: t,
    setSelectedGuildId: n,
    eligibleGuilds: o,
    selectedGame: d,
    onButtonClick: c,
    buttonText: f
  } = e, E = s.useMemo(() => {
    switch (d) {
      case _.ClanDiscoveryGame.GENSHIN:
        return T.default.Messages.CLAN_DISCOVERY_UPSELL_CTA_RECRUIT_GENSHIN;
      case _.ClanDiscoveryGame.VALORANT:
        return T.default.Messages.CLAN_DISCOVERY_UPSELL_CTA_RECRUIT_VALORANT
    }
  }, [d]), h = s.useMemo(() => o.map(e => ({
    value: e.id,
    label: e.name
  })), [o]), m = o.length > 1;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(u.Heading, {
      className: g.upsellTitle,
      variant: "heading-xxl/semibold",
      children: [T.default.Messages.CLAN_DISCOVERY_UPSELL_CTA_GUILD_INVITE, (0, a.jsx)("br", {}), E]
    }), (0, a.jsxs)("div", {
      className: g.upsellDetails,
      children: [(0, a.jsx)(L, {
        icon: i.CompassIcon,
        text: T.default.Messages.CLAN_DISCOVERY_UPSELL_VIBES_OR_SKILL
      }), (0, a.jsx)(L, {
        icon: l.CircleCheckIcon,
        text: T.default.Messages.CLAN_DISCOVERY_UPSELL_APPLICATIONS
      }), (0, a.jsx)(L, {
        icon: r.GroupIcon,
        text: T.default.Messages.CLAN_DISCOVERY_UPSELL_MAX_SIZE
      })]
    }), (0, a.jsxs)("div", {
      className: g.upsellButton,
      children: [m && (0, a.jsx)(u.SearchableSelect, {
        className: g.upsellSelect,
        value: t,
        options: h,
        onChange: n
      }), (0, a.jsx)(C.default, {
        className: m ? g.buttonWithSelect : void 0,
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
  } = e, [l, i] = s.useState(() => {
    let e = new Set(d.default.getGuildIds());
    for (let n of t)
      if (e.has(n.id)) return n.id;
    return t[0].id
  }), r = (0, o.useStateFromStores)([f.default], () => f.default.getGuild(l)), u = (0, o.useStateFromStores)([d.default], () => d.default.getStateForGuild(l).progress), _ = (0, m.useDiscoveryGameApplicationId)({
    selectedGame: n
  }), C = s.useCallback(() => {
    (0, E.openFullScreenLayer)(e => {
      let {
        closeLayer: t
      } = e;
      return (0, a.jsx)(c.default, {
        onClose: t,
        guildId: l,
        gameId: _
      })
    }, {
      layerKey: I.CLAN_SETUP_MODAL_LAYER_KEY
    })
  }, [l, _]), A = (0, S.useFakeDiscoveryClanForGuild)({
    guild: r,
    selectedGame: n
  }), N = s.useMemo(() => null == u ? T.default.Messages.CLAN_DISCOVERY_UPSELL_RESERVE : T.default.Messages.CLAN_DISCOVERY_UPSELL_CONTINUE_SETUP, [u]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: g.cardsContainer,
      children: [(0, a.jsx)("div", {
        className: g.clanCardOuterContainer,
        children: (0, a.jsx)(h.ClanDiscoveryCardView, {
          clan: p.FAKE_DISCOVERY_UPSELL_CLANS["0"],
          className: g.clanCardOuterLeft
        })
      }), (0, a.jsx)("div", {
        className: g.clanCardInnerContainer,
        children: (0, a.jsx)(h.ClanDiscoveryCardView, {
          clan: p.FAKE_DISCOVERY_UPSELL_CLANS["1"],
          className: g.clanCardInnerLeft
        })
      }), null != A && (0, a.jsx)(v, {
        children: (0, a.jsx)("div", {
          className: g.clanCardCenterContainer,
          children: (0, a.jsx)(h.ClanDiscoveryCardView, {
            className: g.clanCardCenter,
            clan: A
          })
        })
      }), (0, a.jsx)("div", {
        className: g.clanCardInnerContainer,
        children: (0, a.jsx)(h.ClanDiscoveryCardView, {
          clan: p.FAKE_DISCOVERY_UPSELL_CLANS["2"],
          className: g.clanCardInnerRight
        })
      }), (0, a.jsx)("div", {
        className: g.clanCardOuterContainer,
        children: (0, a.jsx)(h.ClanDiscoveryCardView, {
          clan: p.FAKE_DISCOVERY_UPSELL_CLANS["3"],
          className: g.clanCardOuterRight
        })
      })]
    }), (0, a.jsx)("div", {
      className: g.upsellCtaContainer,
      children: (0, a.jsx)(R, {
        selectedGuildId: l,
        setSelectedGuildId: i,
        eligibleGuilds: t,
        selectedGame: n,
        onButtonClick: C,
        buttonText: N
      })
    })]
  })
})