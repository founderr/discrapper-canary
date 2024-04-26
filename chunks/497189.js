"use strict";
a.r(t);
var n = a("735250"),
  s = a("470079"),
  l = a("903788"),
  i = a("625483"),
  r = a("388469"),
  o = a("481060"),
  u = a("603839"),
  d = a("725568"),
  c = a("231467"),
  f = a("207796"),
  E = a("436137"),
  h = a("316553"),
  _ = a("273254"),
  C = a("559469"),
  m = a("308083"),
  S = a("689938"),
  I = a("550211"),
  p = a("345480"),
  T = a("236613");

function g(e) {
  let {
    children: t
  } = e;
  return (0, n.jsxs)("div", {
    className: I.clanEnvelope,
    children: [(0, n.jsx)("div", {
      className: I.clanEnvelopeTop,
      children: (0, n.jsx)("img", {
        src: T,
        alt: ""
      })
    }), t, (0, n.jsx)("div", {
      className: I.clanEnvelopeBottom,
      children: (0, n.jsx)("img", {
        src: p,
        alt: ""
      })
    })]
  })
}

function A(e) {
  let {
    text: t,
    icon: a
  } = e;
  return (0, n.jsxs)("div", {
    className: I.upsellDetail,
    children: [(0, n.jsx)(a, {
      height: 24,
      width: 24,
      className: I.upsellIcon
    }), (0, n.jsx)(o.Text, {
      className: I.upsellDetailText,
      variant: "text-md/medium",
      children: t
    })]
  })
}

function N(e) {
  let {
    guildId: t,
    selectedGame: a
  } = e, c = (0, h.useDiscoveryGameApplicationId)({
    selectedGame: a
  }), _ = s.useMemo(() => {
    switch (a) {
      case f.ClanDiscoveryGame.GENSHIN:
        return S.default.Messages.CLAN_DISCOVERY_UPSELL_CTA_RECRUIT_GENSHIN;
      case f.ClanDiscoveryGame.VALORANT:
        return S.default.Messages.CLAN_DISCOVERY_UPSELL_CTA_RECRUIT_VALORANT
    }
  }, [a]), C = s.useCallback(() => {
    (0, d.openFullScreenLayer)(e => {
      let {
        closeLayer: a
      } = e;
      return (0, n.jsx)(u.default, {
        onClose: a,
        guildId: t,
        gameId: c
      })
    }, {
      layerKey: m.CLAN_SETUP_MODAL_LAYER_KEY
    })
  }, [t, c]);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(o.Heading, {
      className: I.upsellTitle,
      variant: "heading-xxl/semibold",
      children: [S.default.Messages.CLAN_DISCOVERY_UPSELL_CTA_GUILD_INVITE, (0, n.jsx)("br", {}), _]
    }), (0, n.jsxs)("div", {
      className: I.upsellDetails,
      children: [(0, n.jsx)(A, {
        icon: i.CompassIcon,
        text: S.default.Messages.CLAN_DISCOVERY_UPSELL_VIBES_OR_SKILL
      }), (0, n.jsx)(A, {
        icon: l.CircleCheckIcon,
        text: S.default.Messages.CLAN_DISCOVERY_UPSELL_APPLICATIONS
      }), (0, n.jsx)(A, {
        icon: r.GroupIcon,
        text: S.default.Messages.CLAN_DISCOVERY_UPSELL_MAX_SIZE
      })]
    }), (0, n.jsx)(E.default, {
      onClick: C,
      children: S.default.Messages.CLAN_DISCOVERY_UPSELL_RESERVE
    })]
  })
}
t.default = s.memo(function(e) {
  let {
    guild: t,
    selectedGame: a
  } = e, s = (0, _.useFakeDiscoveryClanForGuild)({
    guild: t,
    selectedGame: a
  });
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: I.cardsContainer,
      children: [(0, n.jsx)("div", {
        className: I.clanCardOuterContainer,
        children: (0, n.jsx)(c.ClanDiscoveryCardView, {
          clan: C.FAKE_DISCOVERY_UPSELL_CLANS["0"],
          className: I.clanCardOuterLeft
        })
      }), (0, n.jsx)("div", {
        className: I.clanCardInnerContainer,
        children: (0, n.jsx)(c.ClanDiscoveryCardView, {
          clan: C.FAKE_DISCOVERY_UPSELL_CLANS["1"],
          className: I.clanCardInnerLeft
        })
      }), (0, n.jsx)(g, {
        children: (0, n.jsx)("div", {
          className: I.clanCardCenterContainer,
          children: (0, n.jsx)(c.ClanDiscoveryCardView, {
            className: I.clanCardCenter,
            clan: s
          })
        })
      }), (0, n.jsx)("div", {
        className: I.clanCardInnerContainer,
        children: (0, n.jsx)(c.ClanDiscoveryCardView, {
          clan: C.FAKE_DISCOVERY_UPSELL_CLANS["2"],
          className: I.clanCardInnerRight
        })
      }), (0, n.jsx)("div", {
        className: I.clanCardOuterContainer,
        children: (0, n.jsx)(c.ClanDiscoveryCardView, {
          clan: C.FAKE_DISCOVERY_UPSELL_CLANS["3"],
          className: I.clanCardOuterRight
        })
      })]
    }), (0, n.jsx)("div", {
      className: I.upsellCtaContainer,
      children: (0, n.jsx)(N, {
        guildId: t.id,
        selectedGame: a
      })
    })]
  })
})