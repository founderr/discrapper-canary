"use strict";
a.r(t), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("348327"),
  i = a.n(l),
  r = a("718017"),
  o = a("143927"),
  u = a("481060"),
  d = a("442837"),
  c = a("224706"),
  f = a("2485"),
  E = a("229765"),
  h = a("231467"),
  _ = a("807933"),
  C = a("10473"),
  m = a("702646"),
  S = a("207796"),
  I = a("980721"),
  p = a("308083"),
  T = a("689938"),
  g = a("24953");

function A() {
  let e = (0, S.useClanDiscoveryUIStore)(S.buildSearchCriteriaFromUIState, i()),
    t = (0, S.useClanDiscoveryUIStore)(e => e.selectedPlaystyle.name, o.default),
    a = (0, d.useStateFromStores)([C.default], () => C.default.getSearchResult(e), [e]);
  return (0, I.isUnloadedSearchResult)(a) ? null : (0, I.isLoadedSearchResult)(a) ? (0, n.jsxs)("div", {
    className: g.topPicks,
    children: [(0, n.jsxs)("div", {
      className: g.topPicksHeader,
      children: [(0, n.jsx)(u.Heading, {
        variant: "heading-md/medium",
        color: "header-primary",
        children: T.default.Messages.CLAN_DISCOVERY_TOP_PICKS_TITLE
      }), (0, n.jsx)(u.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: T.default.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE.format({
          playstyle: t
        })
      })]
    }), (0, n.jsx)("div", {
      className: g.topPicksContent,
      children: a.items.map(t => (0, n.jsx)(h.default, {
        clan: t,
        affinity: (0, I.getClanDiscoveryAffinity)(t, e)
      }, t.id))
    })]
  }) : null
}

function N() {
  let e = (0, S.useClanDiscoveryUIStore)(e => e.mode, o.default),
    [, t] = s.useState(0),
    a = (0, r.useTransition)([e], {
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
          return (0, n.jsx)(_.PlayStyleSelector, {});
        case S.ClanDiscoveryMode.PRIMETIME:
          return (0, n.jsx)(_.PrimetimeSelector, {});
        case S.ClanDiscoveryMode.TRAITS:
          return (0, n.jsx)(_.TraitSelector, {});
        case S.ClanDiscoveryMode.GAMES:
          return (0, n.jsx)(_.GameSelector, {});
        default:
          return null
      }
    };
  return (0, n.jsx)("div", {
    children: a((e, t) => (0, n.jsx)(r.animated.div, {
      style: e,
      children: l(t)
    }, t))
  })
}

function v() {
  let e = (0, S.useClanDiscoveryUIStore)(e => e.game, o.default),
    t = (0, S.useClanDiscoveryUIStore)(e => e.setGame, o.default),
    a = (0, S.useClanDiscoveryUIStore)(e => e.setSelectedGames, o.default),
    n = (0, S.useClanDiscoveryUIStore)(S.buildSearchCriteriaFromUIState, i()),
    l = (0, f.useClanDiscoveryExperimentDefaultGameId)("clan_discovery"),
    r = (0, d.useStateFromStores)([C.default], () => C.default.hasLoadedStaticClanDiscovery(e));
  return s.useEffect(() => {
    l === p.VALORANT_ID ? (t(S.ClanDiscoveryGame.VALORANT), a([{
      applicationId: l,
      name: "Valorant"
    }])) : l === p.GENSHIN_ID && (t(S.ClanDiscoveryGame.GENSHIN), a([{
      applicationId: l,
      name: "Genshin"
    }]))
  }, [t, a, l]), s.useEffect(() => {
    !r && (0, E.loadStaticClanDiscovery)(e)
  }, [e, r]), s.useEffect(() => {
    r && (0, E.searchClanDiscovery)(e, n)
  }, [e, n, r]), s.useEffect(() => {
    c.default.getDetectableGames()
  }, []), null
}
t.default = function() {
  return (0, n.jsxs)("main", {
    className: g.container,
    children: [(0, n.jsx)(v, {}), (0, n.jsx)(m.default, {}), (0, n.jsx)("div", {
      className: g.content,
      children: (0, n.jsx)(A, {})
    }), (0, n.jsx)(N, {})]
  })
}