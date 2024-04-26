"use strict";
a.r(t), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("143927"),
  i = a("481060"),
  r = a("754961"),
  o = a("231467"),
  u = a("807933"),
  d = a("207796"),
  c = a("436137"),
  f = a("559469"),
  E = a("689938"),
  h = a("720395");

function _(e) {
  let {
    selectedGame: t,
    onClick: a
  } = e, [l, r] = s.useMemo(() => {
    switch (t) {
      case d.ClanDiscoveryGame.GENSHIN:
        return [E.default.Messages.CLAN_DISCOVERY_UPSELL_GENSHIN_TITLE, E.default.Messages.CLAN_DISCOVERY_UPSELL_GENSHIN_SUBTITLE];
      case d.ClanDiscoveryGame.VALORANT:
        return [E.default.Messages.CLAN_DISCOVERY_UPSELL_VALORANT_TITLE, E.default.Messages.CLAN_DISCOVERY_UPSELL_VALORANT_SUBTITLE]
    }
  }, [t]);
  return (0, n.jsxs)("div", {
    className: h.upsellContainer,
    children: [(0, n.jsx)("div", {
      className: h.cardsContainer,
      children: (0, n.jsxs)("div", {
        className: h.cards,
        children: [(0, n.jsx)("div", {
          className: h.clanCardOuterContainer,
          children: (0, n.jsx)(o.ClanDiscoveryCardView, {
            clan: f.FAKE_DISCOVERY_UPSELL_CLANS["0"],
            className: h.clanCardOuterLeft
          })
        }), (0, n.jsx)("div", {
          className: h.clanCardInnerContainer,
          children: (0, n.jsx)(o.ClanDiscoveryCardView, {
            clan: f.FAKE_DISCOVERY_UPSELL_CLANS["1"],
            className: h.clanCardInnerLeft
          })
        }), (0, n.jsx)("div", {
          className: h.clanCardCenterContainer,
          children: (0, n.jsx)(o.ClanDiscoveryCardView, {
            clan: f.FAKE_DISCOVERY_UPSELL_CLANS["4"],
            className: h.clanCardCenter
          })
        }), (0, n.jsx)("div", {
          className: h.clanCardInnerContainer,
          children: (0, n.jsx)(o.ClanDiscoveryCardView, {
            clan: f.FAKE_DISCOVERY_UPSELL_CLANS["2"],
            className: h.clanCardInnerRight
          })
        }), (0, n.jsx)("div", {
          className: h.clanCardOuterContainer,
          children: (0, n.jsx)(o.ClanDiscoveryCardView, {
            clan: f.FAKE_DISCOVERY_UPSELL_CLANS["3"],
            className: h.clanCardOuterRight
          })
        })]
      })
    }), (0, n.jsxs)("div", {
      className: h.upsellDetails,
      children: [(0, n.jsx)(i.Heading, {
        className: h.upsellTitle,
        variant: "heading-xxl/semibold",
        children: l
      }), (0, n.jsx)(i.Text, {
        className: h.upsellSubtitle,
        variant: "text-md/medium",
        children: r
      }), (0, n.jsx)(c.default, {
        onClick: a,
        children: E.default.Messages.CLAN_DISCOVERY_UPSELL_GET_STARTED
      })]
    })]
  })
}
let C = [0, 1, 2],
  m = [
    [0],
    [1],
    [2]
  ];
t.default = s.memo(function(e) {
  let {
    selectedGame: t
  } = e, [a, o] = s.useState("upsell"), [c, f] = s.useState(0), [E, S] = s.useState(0), p = (0, d.useClanDiscoveryUIStore)(e => e.setMode, l.default), I = (0, d.useClanDiscoveryUIStore)(e => e.selectedPlaystyle, l.default), T = s.useCallback(e => {
    f(e), E < e && S(e)
  }, [E]), g = s.useCallback(() => {
    o("onboarding")
  }, []), A = s.useCallback(() => {
    switch (c) {
      case 0:
        return (0, n.jsx)(u.GameSelector, {});
      case 1:
        return (0, n.jsx)(u.PlayStyleSelector, {});
      case 2:
        return (0, n.jsx)(u.TraitSelector, {})
    }
  }, [c]), N = s.useCallback(() => {
    0 === c ? o("upsell") : T(c - 1)
  }, [c, T]), v = s.useCallback(() => {
    2 === c ? p(d.ClanDiscoveryMode.DISCOVERY) : T(c + 1)
  }, [p, c, T]), R = s.useMemo(() => 1 === c && null == I, [I, c]);
  switch (a) {
    case "upsell":
      return (0, n.jsx)(_, {
        selectedGame: t,
        onClick: g
      });
    case "onboarding":
      return (0, n.jsxs)("div", {
        className: h.stepsContainer,
        children: [(0, n.jsx)(i.Sequencer, {
          className: h.sequencer,
          innerClassName: h.sequencer,
          animatedNodeClassName: h.sequencer,
          step: c,
          steps: C,
          sideMargin: 24,
          verticalMargin: 24,
          children: (0, n.jsx)(i.ScrollerThin, {
            className: h.scroller,
            fade: !0,
            children: A()
          })
        }), (0, n.jsx)("div", {
          className: h.footer,
          children: (0, n.jsxs)("div", {
            className: h.footerActions,
            children: [(0, n.jsx)(r.ClanSetupProgress, {
              sections: m,
              furthestStep: E,
              onStepClick: T
            }), (0, n.jsx)(r.ClanSetupProgressButtons, {
              className: h.footerButtons,
              isBackDisabled: !1,
              isNextDisabled: R,
              onNextClick: v,
              onBackClick: N
            })]
          })
        })]
      })
  }
})