"use strict";
a.r(t), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("481060"),
  i = a("231467"),
  r = a("207796"),
  o = a("436137"),
  u = a("559469"),
  d = a("689938"),
  c = a("720395");
t.default = s.memo(function(e) {
  let {
    selectedGame: t,
    onClick: a
  } = e, [f, E] = s.useMemo(() => {
    switch (t) {
      case r.ClanDiscoveryGame.GENSHIN:
        return [d.default.Messages.CLAN_DISCOVERY_UPSELL_GENSHIN_TITLE, d.default.Messages.CLAN_DISCOVERY_UPSELL_GENSHIN_SUBTITLE];
      case r.ClanDiscoveryGame.VALORANT:
        return [d.default.Messages.CLAN_DISCOVERY_UPSELL_VALORANT_TITLE, d.default.Messages.CLAN_DISCOVERY_UPSELL_VALORANT_SUBTITLE]
    }
  }, [t]);
  return (0, n.jsxs)("div", {
    className: c.upsellContainer,
    children: [(0, n.jsx)("div", {
      className: c.cardsContainer,
      children: (0, n.jsxs)("div", {
        className: c.cards,
        children: [(0, n.jsx)("div", {
          className: c.clanCardOuterContainer,
          children: (0, n.jsx)(i.ClanDiscoveryCardView, {
            clan: u.FAKE_DISCOVERY_UPSELL_CLANS["0"],
            className: c.clanCardOuterLeft
          })
        }), (0, n.jsx)("div", {
          className: c.clanCardInnerContainer,
          children: (0, n.jsx)(i.ClanDiscoveryCardView, {
            clan: u.FAKE_DISCOVERY_UPSELL_CLANS["1"],
            className: c.clanCardInnerLeft
          })
        }), (0, n.jsx)("div", {
          className: c.clanCardCenterContainer,
          children: (0, n.jsx)(i.ClanDiscoveryCardView, {
            clan: u.FAKE_DISCOVERY_UPSELL_CLANS["4"],
            className: c.clanCardCenter
          })
        }), (0, n.jsx)("div", {
          className: c.clanCardInnerContainer,
          children: (0, n.jsx)(i.ClanDiscoveryCardView, {
            clan: u.FAKE_DISCOVERY_UPSELL_CLANS["2"],
            className: c.clanCardInnerRight
          })
        }), (0, n.jsx)("div", {
          className: c.clanCardOuterContainer,
          children: (0, n.jsx)(i.ClanDiscoveryCardView, {
            clan: u.FAKE_DISCOVERY_UPSELL_CLANS["3"],
            className: c.clanCardOuterRight
          })
        })]
      })
    }), (0, n.jsxs)("div", {
      className: c.upsellDetails,
      children: [(0, n.jsx)(l.Heading, {
        className: c.upsellTitle,
        variant: "heading-xxl/semibold",
        children: f
      }), (0, n.jsx)(l.Text, {
        className: c.upsellSubtitle,
        variant: "text-md/medium",
        children: E
      }), (0, n.jsx)(o.default, {
        onClick: a,
        children: d.default.Messages.CLAN_DISCOVERY_UPSELL_GET_STARTED
      })]
    })]
  })
})