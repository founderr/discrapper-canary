"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("348327"),
  i = n.n(l),
  r = n("718017"),
  o = n("143927"),
  u = n("481060"),
  d = n("442837"),
  c = n("224706"),
  f = n("2485"),
  E = n("229765"),
  h = n("231467"),
  _ = n("807933"),
  C = n("10473"),
  m = n("702646"),
  S = n("207796"),
  I = n("976757"),
  p = n("308083"),
  T = n("689938"),
  g = n("24953");

function A() {
  let e = (0, S.useClanDiscoveryUIStore)(S.buildSearchCriteriaFromUIState, i()),
    t = (0, S.useClanDiscoveryUIStore)(e => e.selectedPlaystyle.name, o.default),
    n = (0, d.useStateFromStores)([C.default], () => C.default.getSearchResult(e), [e]);
  return (0, I.isUnloadedSearchResult)(n) ? null : (0, I.isLoadedSearchResult)(n) ? (0, a.jsxs)("div", {
    className: g.topPicks,
    children: [(0, a.jsxs)("div", {
      className: g.topPicksHeader,
      children: [(0, a.jsx)(u.Heading, {
        variant: "heading-md/medium",
        color: "header-primary",
        children: T.default.Messages.CLAN_DISCOVERY_TOP_PICKS_TITLE
      }), (0, a.jsx)(u.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: T.default.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE.format({
          playstyle: t
        })
      })]
    }), (0, a.jsx)("div", {
      className: g.topPicksContent,
      children: n.items.map(t => (0, a.jsx)(h.default, {
        clan: t,
        affinity: (0, I.getClanDiscoveryAffinity)(t, e)
      }, t.id))
    })]
  }) : null
}

function N() {
  let e = (0, S.useClanDiscoveryUIStore)(e => e.mode, o.default),
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
        case S.ClanDiscoveryMode.PLAYSTYLE:
          return (0, a.jsx)(_.PlayStyleSelector, {});
        case S.ClanDiscoveryMode.PRIMETIME:
          return (0, a.jsx)(_.PrimetimeSelector, {});
        case S.ClanDiscoveryMode.TRAITS:
          return (0, a.jsx)(_.TraitSelector, {});
        case S.ClanDiscoveryMode.GAMES:
          return (0, a.jsx)(_.GameSelector, {});
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

function v() {
  let e = (0, S.useClanDiscoveryUIStore)(e => e.game, o.default),
    t = (0, S.useClanDiscoveryUIStore)(e => e.setGame, o.default),
    n = (0, S.useClanDiscoveryUIStore)(e => e.setSelectedGames, o.default),
    a = (0, S.useClanDiscoveryUIStore)(S.buildSearchCriteriaFromUIState, i()),
    l = (0, f.useClanDiscoveryExperimentDefaultGameId)("clan_discovery"),
    r = (0, d.useStateFromStores)([C.default], () => C.default.hasLoadedStaticClanDiscovery(e));
  return s.useEffect(() => {
    l === p.VALORANT_ID ? (t(S.ClanDiscoveryGame.VALORANT), n([l])) : l === p.GENSHIN_ID && (t(S.ClanDiscoveryGame.GENSHIN), n([l]))
  }, [t, n, l]), s.useEffect(() => {
    !r && (0, E.loadStaticClanDiscovery)(e)
  }, [e, r]), s.useEffect(() => {
    r && (0, E.searchClanDiscovery)(e, a)
  }, [e, a, r]), s.useEffect(() => {
    c.default.getDetectableGames()
  }, []), null
}
t.default = function() {
  return (0, a.jsxs)("main", {
    className: g.container,
    children: [(0, a.jsx)(v, {}), (0, a.jsx)(m.default, {}), (0, a.jsx)("div", {
      className: g.content,
      children: (0, a.jsx)(A, {})
    }), (0, a.jsx)(N, {})]
  })
}