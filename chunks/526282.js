"use strict";
a.r(t), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("143927"),
  i = a("481060"),
  r = a("231467"),
  o = a("807933"),
  u = a("207796"),
  d = a("436137"),
  c = a("559469"),
  f = a("689938"),
  E = a("907204");
let h = [0, 1, 2];

function _(e) {
  let {
    selectedGame: t,
    onClick: a
  } = e, [l, o] = s.useMemo(() => {
    switch (t) {
      case u.ClanDiscoveryGame.GENSHIN:
        return [f.default.Messages.CLAN_DISCOVERY_UPSELL_GENSHIN_TITLE, f.default.Messages.CLAN_DISCOVERY_UPSELL_GENSHIN_SUBTITLE];
      case u.ClanDiscoveryGame.VALORANT:
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
            clan: c.FAKE_DISCOVERY_UPSELL_CLANS["0"],
            className: E.clanCardOuterLeft
          })
        }), (0, n.jsx)("div", {
          className: E.clanCardInnerContainer,
          children: (0, n.jsx)(r.ClanDiscoveryCardView, {
            clan: c.FAKE_DISCOVERY_UPSELL_CLANS["1"],
            className: E.clanCardInnerLeft
          })
        }), (0, n.jsx)("div", {
          className: E.clanCardCenterContainer,
          children: (0, n.jsx)(r.ClanDiscoveryCardView, {
            clan: c.FAKE_DISCOVERY_UPSELL_CLANS["4"],
            className: E.clanCardCenter
          })
        }), (0, n.jsx)("div", {
          className: E.clanCardInnerContainer,
          children: (0, n.jsx)(r.ClanDiscoveryCardView, {
            clan: c.FAKE_DISCOVERY_UPSELL_CLANS["2"],
            className: E.clanCardInnerRight
          })
        }), (0, n.jsx)("div", {
          className: E.clanCardOuterContainer,
          children: (0, n.jsx)(r.ClanDiscoveryCardView, {
            clan: c.FAKE_DISCOVERY_UPSELL_CLANS["3"],
            className: E.clanCardOuterRight
          })
        })]
      })
    }), (0, n.jsxs)("div", {
      className: E.upsellDetails,
      children: [(0, n.jsx)(i.Heading, {
        className: E.upsellTitle,
        variant: "heading-xxl/semibold",
        children: l
      }), (0, n.jsx)(i.Text, {
        className: E.upsellSubtitle,
        variant: "text-md/medium",
        children: o
      }), (0, n.jsx)(d.default, {
        onClick: a,
        children: f.default.Messages.CLAN_DISCOVERY_UPSELL_GET_STARTED
      })]
    })]
  })
}
t.default = s.memo(function(e) {
  let {
    selectedGame: t
  } = e, [a, r] = s.useState("upsell"), [d, c] = s.useState(0), C = (0, u.useClanDiscoveryUIStore)(e => e.setMode, l.default), m = (0, u.useClanDiscoveryUIStore)(e => e.selectedPlaystyle, l.default), S = s.useCallback(() => {
    r("onboarding")
  }, []), I = s.useCallback(() => {
    switch (d) {
      case 0:
        return (0, n.jsx)(o.GameSelector, {});
      case 1:
        return (0, n.jsx)(o.PlayStyleSelector, {});
      case 2:
        return (0, n.jsx)(o.TraitSelector, {})
    }
  }, [d]), p = s.useCallback(() => {
    0 === d ? r("upsell") : c(e => e - 1)
  }, [d]), T = s.useCallback(() => {
    2 === d ? C(u.ClanDiscoveryMode.DISCOVERY) : c(e => e + 1)
  }, [C, d]), g = s.useMemo(() => 1 === d && null == m, [m, d]);
  switch (a) {
    case "upsell":
      return (0, n.jsx)(_, {
        selectedGame: t,
        onClick: S
      });
    case "onboarding":
      return (0, n.jsxs)("div", {
        className: E.wizard,
        children: [(0, n.jsx)(i.Sequencer, {
          className: E.sequencer,
          innerClassName: E.sequencer,
          animatedNodeClassName: E.sequencer,
          step: d,
          steps: h,
          sideMargin: 24,
          verticalMargin: 24,
          children: (0, n.jsx)(i.ScrollerThin, {
            className: E.scroller,
            fade: !0,
            children: I()
          })
        }), (0, n.jsx)("div", {
          className: E.footer,
          children: (0, n.jsxs)("div", {
            className: E.footerActions,
            children: [(0, n.jsx)(i.Button, {
              look: i.ButtonLooks.OUTLINED,
              color: i.ButtonColors.PRIMARY,
              onClick: p,
              children: (0, n.jsx)(i.Text, {
                variant: "text-sm/medium",
                color: "none",
                children: f.default.Messages.BACK
              })
            }), (0, n.jsx)(i.Button, {
              look: i.ButtonLooks.FILLED,
              color: i.ButtonColors.BRAND,
              onClick: T,
              disabled: g,
              children: (0, n.jsx)(i.Text, {
                variant: "text-sm/medium",
                color: "none",
                children: f.default.Messages.NEXT
              })
            })]
          })
        })]
      })
  }
})