"use strict";
a.r(t), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("481060"),
  i = a("626135"),
  r = a("231467"),
  o = a("207796"),
  u = a("436137"),
  d = a("559469"),
  c = a("981631"),
  f = a("689938"),
  E = a("720395");
t.default = s.memo(function(e) {
  let {
    selectedGame: t,
    onClick: a
  } = e;
  s.useEffect(() => {
    i.default.track(c.AnalyticEvents.CLAN_DISCOVERY_USER_NUX_VIEWED)
  }, []);
  let [h, _] = s.useMemo(() => {
    switch (t) {
      case o.ClanDiscoveryGame.GENSHIN:
        return [f.default.Messages.CLAN_DISCOVERY_UPSELL_GENSHIN_TITLE, f.default.Messages.CLAN_DISCOVERY_UPSELL_GENSHIN_SUBTITLE];
      case o.ClanDiscoveryGame.VALORANT:
        return [f.default.Messages.CLAN_DISCOVERY_UPSELL_VALORANT_TITLE, f.default.Messages.CLAN_DISCOVERY_UPSELL_VALORANT_SUBTITLE]
    }
  }, [t]);
  return (0, n.jsxs)("div", {
    className: E.upsellContainer,
    children: [(0, n.jsx)("div", {
      className: E.cardsContainer,
      children: (0, n.jsxs)("div", {
        className: E.cards,
        children: [(0, n.jsx)("div", {
          className: E.clanCardOuterContainer,
          children: (0, n.jsx)(r.ClanDiscoveryCardView, {
            clan: d.FAKE_DISCOVERY_UPSELL_CLANS["0"],
            className: E.clanCardOuterLeft
          })
        }), (0, n.jsx)("div", {
          className: E.clanCardInnerContainer,
          children: (0, n.jsx)(r.ClanDiscoveryCardView, {
            clan: d.FAKE_DISCOVERY_UPSELL_CLANS["1"],
            className: E.clanCardInnerLeft
          })
        }), (0, n.jsx)("div", {
          className: E.clanCardCenterContainer,
          children: (0, n.jsx)(r.ClanDiscoveryCardView, {
            clan: d.FAKE_DISCOVERY_UPSELL_CLANS["4"],
            className: E.clanCardCenter
          })
        }), (0, n.jsx)("div", {
          className: E.clanCardInnerContainer,
          children: (0, n.jsx)(r.ClanDiscoveryCardView, {
            clan: d.FAKE_DISCOVERY_UPSELL_CLANS["2"],
            className: E.clanCardInnerRight
          })
        }), (0, n.jsx)("div", {
          className: E.clanCardOuterContainer,
          children: (0, n.jsx)(r.ClanDiscoveryCardView, {
            clan: d.FAKE_DISCOVERY_UPSELL_CLANS["3"],
            className: E.clanCardOuterRight
          })
        })]
      })
    }), (0, n.jsxs)("div", {
      className: E.upsellDetails,
      children: [(0, n.jsx)(l.Heading, {
        className: E.upsellTitle,
        variant: "heading-xxl/semibold",
        children: h
      }), (0, n.jsx)(l.Text, {
        className: E.upsellSubtitle,
        variant: "text-md/medium",
        children: _
      }), (0, n.jsx)(u.default, {
        onClick: a,
        children: f.default.Messages.CLAN_DISCOVERY_UPSELL_GET_STARTED
      })]
    })]
  })
})