"use strict";
a.r(t), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("348327"),
  i = a.n(l),
  r = a("718017"),
  o = a("143927"),
  u = a("71970"),
  d = a("481060"),
  c = a("442837"),
  f = a("224706"),
  E = a("2485"),
  h = a("229765"),
  _ = a("231467"),
  C = a("807933"),
  m = a("10473"),
  S = a("702646"),
  I = a("207796"),
  p = a("976757"),
  T = a("308083"),
  g = a("689938"),
  A = a("24953");

function N() {
  let e = (0, I.useClanDiscoveryUIStore)(I.buildSearchCriteriaFromUIState, i()),
    t = (0, I.useClanDiscoveryUIStore)(e => e.selectedPlaystyle.name, o.default),
    a = (0, c.useStateFromStores)([m.default], () => m.default.getSearchResult(e), [e]);
  return (0, p.isUnloadedSearchResult)(a) ? null : (0, p.isLoadedSearchResult)(a) ? (0, n.jsxs)("div", {
    className: A.topPicks,
    children: [(0, n.jsxs)("div", {
      className: A.topPicksHeader,
      children: [(0, n.jsxs)("div", {
        className: A.topPicksTitle,
        children: [(0, n.jsx)(u.TrophyIcon, {
          color: "currentColor"
        }), (0, n.jsx)(d.Heading, {
          variant: "heading-md/medium",
          color: "header-primary",
          children: g.default.Messages.CLAN_DISCOVERY_TOP_PICKS_TITLE
        })]
      }), (0, n.jsx)("div", {
        className: A.topPicksSpacer
      }), (0, n.jsx)(d.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        children: g.default.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE.format({
          playstyle: t
        })
      })]
    }), (0, n.jsx)("div", {
      className: A.topPicksContent,
      children: a.items.map(t => (0, n.jsx)(_.default, {
        clan: t,
        affinity: (0, p.getClanDiscoveryAffinity)(t, e)
      }, t.id))
    })]
  }) : null
}

function v() {
  let e = (0, I.useClanDiscoveryUIStore)(e => e.mode, o.default),
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
        case I.ClanDiscoveryMode.PLAYSTYLE:
          return (0, n.jsx)(C.PlayStyleSelector, {});
        case I.ClanDiscoveryMode.PRIMETIME:
          return (0, n.jsx)(C.PrimetimeSelector, {});
        case I.ClanDiscoveryMode.TRAITS:
          return (0, n.jsx)(C.TraitSelector, {});
        case I.ClanDiscoveryMode.GAMES:
          return (0, n.jsx)(C.GameSelector, {});
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

function R() {
  let e = (0, I.useClanDiscoveryUIStore)(e => e.game, o.default),
    t = (0, I.useClanDiscoveryUIStore)(e => e.setGame, o.default),
    a = (0, I.useClanDiscoveryUIStore)(e => e.setSelectedGames, o.default),
    n = (0, I.useClanDiscoveryUIStore)(I.buildSearchCriteriaFromUIState, i()),
    l = (0, E.useClanDiscoveryExperimentDefaultGameId)("clan_discovery"),
    r = (0, c.useStateFromStores)([m.default], () => m.default.hasLoadedStaticClanDiscovery(e));
  return s.useEffect(() => {
    l === T.VALORANT_ID ? (t(I.ClanDiscoveryGame.VALORANT), a([l])) : l === T.GENSHIN_ID && (t(I.ClanDiscoveryGame.GENSHIN), a([l]))
  }, [t, a, l]), s.useEffect(() => {
    !r && (0, h.loadStaticClanDiscovery)(e)
  }, [e, r]), s.useEffect(() => {
    r && (0, h.searchClanDiscovery)(e, n)
  }, [e, n, r]), s.useEffect(() => {
    f.default.getDetectableGames()
  }, []), null
}
t.default = function() {
  return (0, n.jsxs)("main", {
    className: A.container,
    children: [(0, n.jsx)(R, {}), (0, n.jsxs)(d.ScrollerAuto, {
      fade: !0,
      className: A.scroller,
      children: [(0, n.jsx)(S.default, {}), (0, n.jsx)("div", {
        className: A.content,
        children: (0, n.jsx)(N, {})
      })]
    }), (0, n.jsx)(v, {})]
  })
}