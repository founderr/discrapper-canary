"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("348327"),
  i = n.n(l),
  r = n("718017"),
  o = n("143927"),
  u = n("71970"),
  d = n("481060"),
  c = n("442837"),
  f = n("224706"),
  E = n("2485"),
  h = n("229765"),
  _ = n("231467"),
  C = n("807933"),
  m = n("10473"),
  S = n("702646"),
  I = n("207796"),
  p = n("976757"),
  T = n("308083"),
  g = n("689938"),
  A = n("24953");

function N() {
  let e = (0, I.useClanDiscoveryUIStore)(I.buildSearchCriteriaFromUIState, i()),
    t = (0, I.useClanDiscoveryUIStore)(e => e.selectedTraits, o.default),
    n = (0, I.useClanDiscoveryUIStore)(e => e.selectedPlaystyle.name, o.default),
    s = (0, c.useStateFromStores)([m.default], () => m.default.getSearchResult(e), [e]);
  return (0, p.isUnloadedSearchResult)(s) ? null : (0, p.isLoadedSearchResult)(s) ? (0, a.jsxs)("div", {
    className: A.topPicks,
    children: [(0, a.jsxs)("div", {
      className: A.topPicksHeader,
      children: [(0, a.jsxs)("div", {
        className: A.topPicksTitle,
        children: [(0, a.jsx)(u.TrophyIcon, {
          color: "currentColor"
        }), (0, a.jsx)(d.Heading, {
          variant: "heading-md/medium",
          color: "header-primary",
          children: g.default.Messages.CLAN_DISCOVERY_TOP_PICKS_TITLE
        })]
      }), (0, a.jsx)("div", {
        className: A.topPicksSpacer
      }), (0, a.jsx)(d.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        children: g.default.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE.format({
          playstyle: n
        })
      })]
    }), (0, a.jsx)("div", {
      className: A.topPicksContent,
      children: s.items.map(n => (0, a.jsx)(_.default, {
        clan: n,
        affinity: (0, p.getClanDiscoveryAffinity)(n, e),
        traitsToHighlight: t
      }, n.id))
    })]
  }) : null
}

function v() {
  let e = (0, I.useClanDiscoveryUIStore)(e => e.mode, o.default),
    [, t] = s.useState(0),
    n = (0, r.useTransition)([e], {
      key: e => e,
      config: {
        mass: 1,
        tension: 280,
        friction: 20,
        clamp: !0
      },
      from: {
        opacity: 0
      },
      enter: {
        opacity: 1
      },
      leave: {
        opacity: 0
      },
      onRest: () => t(e => e + 1)
    }),
    l = e => {
      switch (e) {
        case I.ClanDiscoveryMode.PLAYSTYLE:
          return (0, a.jsx)(C.PlayStyleSelector, {});
        case I.ClanDiscoveryMode.TRAITS:
          return (0, a.jsx)(C.TraitSelector, {});
        case I.ClanDiscoveryMode.GAMES:
          return (0, a.jsx)(C.GameSelector, {});
        default:
          return null
      }
    };
  return (0, a.jsx)("div", {
    children: n((e, t) => (0, a.jsx)(r.animated.div, {
      style: e,
      children: l(t)
    }, t))
  })
}

function R() {
  let e = (0, I.useClanDiscoveryUIStore)(e => e.game, o.default),
    t = (0, I.useClanDiscoveryUIStore)(e => e.setGame, o.default),
    n = (0, I.useClanDiscoveryUIStore)(e => e.setSelectedGames, o.default),
    a = (0, I.useClanDiscoveryUIStore)(I.buildSearchCriteriaFromUIState, i()),
    l = (0, E.useClanDiscoveryExperimentDefaultGameId)("clan_discovery"),
    r = (0, c.useStateFromStores)([m.default], () => m.default.hasLoadedStaticClanDiscovery(e));
  return s.useEffect(() => {
    l === T.VALORANT_ID ? (t(I.ClanDiscoveryGame.VALORANT), n([l])) : l === T.GENSHIN_ID && (t(I.ClanDiscoveryGame.GENSHIN), n([l]))
  }, [t, n, l]), s.useEffect(() => {
    !r && (0, h.loadStaticClanDiscovery)(e)
  }, [e, r]), s.useEffect(() => {
    r && (0, h.searchClanDiscovery)(e, a)
  }, [e, a, r]), s.useEffect(() => {
    f.default.getDetectableGames()
  }, []), null
}
t.default = function() {
  return (0, a.jsxs)("main", {
    className: A.container,
    children: [(0, a.jsx)(R, {}), (0, a.jsxs)(d.ScrollerAuto, {
      fade: !0,
      className: A.scroller,
      children: [(0, a.jsx)(S.default, {}), (0, a.jsx)("div", {
        className: A.content,
        children: (0, a.jsx)(N, {})
      })]
    }), (0, a.jsx)(v, {})]
  })
}