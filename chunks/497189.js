"use strict";
a.r(t);
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("143927"),
  o = a("903788"),
  u = a("625483"),
  d = a("388469"),
  c = a("481060"),
  f = a("603839"),
  E = a("725568"),
  h = a("231467"),
  _ = a("207796"),
  C = a("316553"),
  m = a("273254"),
  S = a("559469"),
  I = a("308083"),
  p = a("689938"),
  T = a("550211"),
  g = a("345480"),
  A = a("236613");

function N(e) {
  let {
    children: t
  } = e, a = (0, _.useClanDiscoveryUIStore)(e => e.game, r.default), l = s.useMemo(() => {
    switch (a) {
      case _.ClanDiscoveryGame.GENSHIN:
        return T.genshinBackgroundImage;
      case _.ClanDiscoveryGame.VALORANT:
        return T.valorantBackgroundImage;
      default:
        return
    }
  }, [a]);
  return (0, n.jsx)("div", {
    className: i()(l, T.upsell),
    children: t
  })
}

function v(e) {
  let {
    children: t
  } = e;
  return (0, n.jsxs)("div", {
    className: T.clanEnvelope,
    children: [(0, n.jsx)("div", {
      className: T.clanEnvelopeTop,
      children: (0, n.jsx)("img", {
        src: A,
        alt: ""
      })
    }), t, (0, n.jsx)("div", {
      className: T.clanEnvelopeBottom,
      children: (0, n.jsx)("img", {
        src: g,
        alt: ""
      })
    })]
  })
}

function R(e) {
  let {
    text: t,
    icon: a
  } = e;
  return (0, n.jsxs)("div", {
    className: T.upsellCtaDetail,
    children: [(0, n.jsx)(a, {
      height: 24,
      width: 24,
      className: T.upsellIcon
    }), (0, n.jsx)(c.Text, {
      variant: "text-md/medium",
      color: "header-secondary",
      children: t
    })]
  })
}

function L(e) {
  let {
    guildId: t
  } = e, a = (0, C.useDiscoveryGameApplicationId)(), l = (0, _.useClanDiscoveryUIStore)(e => e.game, r.default), i = s.useMemo(() => {
    switch (l) {
      case _.ClanDiscoveryGame.GENSHIN:
        return p.default.Messages.CLAN_DISCOVERY_UPSELL_CTA_RECRUIT_GENSHIN;
      case _.ClanDiscoveryGame.VALORANT:
        return p.default.Messages.CLAN_DISCOVERY_UPSELL_CTA_RECRUIT_VALORANT;
      default:
        return
    }
  }, [l]), h = s.useCallback(() => {
    (0, E.openFullScreenLayer)(e => {
      let {
        closeLayer: s
      } = e;
      return (0, n.jsx)(f.default, {
        onClose: s,
        guildId: t,
        gameId: a
      })
    }, {
      layerKey: I.CLAN_SETUP_MODAL_LAYER_KEY
    })
  }, [t, a]);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(c.Heading, {
      className: T.upsellCtaTitle,
      variant: "heading-xxl/semibold",
      color: "header-primary",
      children: [p.default.Messages.CLAN_DISCOVERY_UPSELL_CTA_GUILD_INVITE, (0, n.jsx)("br", {}), i]
    }), (0, n.jsxs)("div", {
      className: T.upsellCtaDetails,
      children: [(0, n.jsx)(R, {
        icon: u.CompassIcon,
        text: p.default.Messages.CLAN_DISCOVERY_UPSELL_VIBES_OR_SKILL
      }), (0, n.jsx)(R, {
        icon: o.CircleCheckIcon,
        text: p.default.Messages.CLAN_DISCOVERY_UPSELL_APPLICATIONS
      }), (0, n.jsx)(R, {
        icon: d.GroupIcon,
        text: p.default.Messages.CLAN_DISCOVERY_UPSELL_MAX_SIZE
      })]
    }), (0, n.jsx)(c.Button, {
      className: T.button,
      wrapperClassName: T.buttonWrapper,
      look: c.Button.Looks.FILLED,
      color: c.Button.Colors.BRAND_NEW,
      onClick: h,
      children: p.default.Messages.CLAN_DISCOVERY_UPSELL_RESERVE
    })]
  })
}
t.default = s.memo(function(e) {
  let {
    guild: t
  } = e, a = (0, m.useFakeDiscoveryClanForGuild)({
    guild: t
  });
  return (0, n.jsxs)(N, {
    children: [(0, n.jsxs)("div", {
      className: T.cardsContainer,
      children: [(0, n.jsx)("div", {
        className: T.clanCardOuterContainer,
        children: (0, n.jsx)(h.ClanDiscoveryCardView, {
          clan: S.FAKE_DISCOVERY_UPSELL_CLANS["0"],
          className: T.clanCardOuterLeft
        })
      }), (0, n.jsx)("div", {
        className: T.clanCardInnerContainer,
        children: (0, n.jsx)(h.ClanDiscoveryCardView, {
          clan: S.FAKE_DISCOVERY_UPSELL_CLANS["1"],
          className: T.clanCardInnerLeft
        })
      }), (0, n.jsx)(v, {
        children: (0, n.jsx)("div", {
          className: T.clanCardCenterContainer,
          children: (0, n.jsx)(h.ClanDiscoveryCardView, {
            className: T.clanCardCenter,
            clan: a
          })
        })
      }), (0, n.jsx)("div", {
        className: T.clanCardInnerContainer,
        children: (0, n.jsx)(h.ClanDiscoveryCardView, {
          clan: S.FAKE_DISCOVERY_UPSELL_CLANS["2"],
          className: T.clanCardInnerRight
        })
      }), (0, n.jsx)("div", {
        className: T.clanCardOuterContainer,
        children: (0, n.jsx)(h.ClanDiscoveryCardView, {
          clan: S.FAKE_DISCOVERY_UPSELL_CLANS["3"],
          className: T.clanCardOuterRight
        })
      })]
    }), (0, n.jsx)("div", {
      className: T.upsellCtaContainer,
      children: (0, n.jsx)(L, {
        guildId: t.id
      })
    })]
  })
})