"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("481060"),
  i = n("231467"),
  r = n("207796"),
  o = n("436137"),
  u = n("559469"),
  d = n("689938"),
  c = n("720395");
t.default = s.memo(function(e) {
  let {
    selectedGame: t,
    onClick: n
  } = e, [f, E] = s.useMemo(() => {
    switch (t) {
      case r.ClanDiscoveryGame.GENSHIN:
        return [d.default.Messages.CLAN_DISCOVERY_UPSELL_GENSHIN_TITLE, d.default.Messages.CLAN_DISCOVERY_UPSELL_GENSHIN_SUBTITLE];
      case r.ClanDiscoveryGame.VALORANT:
        return [d.default.Messages.CLAN_DISCOVERY_UPSELL_VALORANT_TITLE, d.default.Messages.CLAN_DISCOVERY_UPSELL_VALORANT_SUBTITLE]
    }
  }, [t]);
  return (0, a.jsxs)("div", {
    className: c.upsellContainer,
    children: [(0, a.jsx)("div", {
      className: c.cardsContainer,
      children: (0, a.jsxs)("div", {
        className: c.cards,
        children: [(0, a.jsx)("div", {
          className: c.clanCardOuterContainer,
          children: (0, a.jsx)(i.ClanDiscoveryCardView, {
            clan: u.FAKE_DISCOVERY_UPSELL_CLANS["0"],
            className: c.clanCardOuterLeft
          })
        }), (0, a.jsx)("div", {
          className: c.clanCardInnerContainer,
          children: (0, a.jsx)(i.ClanDiscoveryCardView, {
            clan: u.FAKE_DISCOVERY_UPSELL_CLANS["1"],
            className: c.clanCardInnerLeft
          })
        }), (0, a.jsx)("div", {
          className: c.clanCardCenterContainer,
          children: (0, a.jsx)(i.ClanDiscoveryCardView, {
            clan: u.FAKE_DISCOVERY_UPSELL_CLANS["4"],
            className: c.clanCardCenter
          })
        }), (0, a.jsx)("div", {
          className: c.clanCardInnerContainer,
          children: (0, a.jsx)(i.ClanDiscoveryCardView, {
            clan: u.FAKE_DISCOVERY_UPSELL_CLANS["2"],
            className: c.clanCardInnerRight
          })
        }), (0, a.jsx)("div", {
          className: c.clanCardOuterContainer,
          children: (0, a.jsx)(i.ClanDiscoveryCardView, {
            clan: u.FAKE_DISCOVERY_UPSELL_CLANS["3"],
            className: c.clanCardOuterRight
          })
        })]
      })
    }), (0, a.jsxs)("div", {
      className: c.upsellDetails,
      children: [(0, a.jsx)(l.Heading, {
        className: c.upsellTitle,
        variant: "heading-xxl/semibold",
        children: f
      }), (0, a.jsx)(l.Text, {
        className: c.upsellSubtitle,
        variant: "text-md/medium",
        children: E
      }), (0, a.jsx)(o.default, {
        onClick: n,
        children: d.default.Messages.CLAN_DISCOVERY_UPSELL_GET_STARTED
      })]
    })]
  })
})