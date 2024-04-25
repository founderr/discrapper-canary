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
  C = a("480222"),
  m = a("807933"),
  S = a("10473"),
  I = a("702646"),
  p = a("207796"),
  T = a("543550"),
  g = a("976757"),
  A = a("308083"),
  N = a("689938"),
  v = a("24953");

function R() {
  var e;
  let t = (0, p.useClanDiscoveryUIStore)(p.buildSearchCriteriaFromUIState, i()),
    a = (0, p.useClanDiscoveryUIStore)(e => e.selectedTraits, o.default),
    l = (0, p.useClanDiscoveryUIStore)(e => e.selectedPlaystyle, o.default),
    r = s.useMemo(() => (0, A.getPlaystyleOptions)(), []),
    f = l ? null === (e = r[l]) || void 0 === e ? void 0 : e.title : "",
    E = (0, c.useStateFromStores)([S.default], () => S.default.getSearchResult(t), [t]);
  return (0, g.isUnloadedSearchResult)(E) ? null : (0, g.isLoadedSearchResult)(E) ? (0, n.jsxs)("div", {
    className: v.topPicks,
    children: [(0, n.jsxs)("div", {
      className: v.topPicksHeader,
      children: [(0, n.jsxs)("div", {
        className: v.topPicksTitle,
        children: [(0, n.jsx)(u.TrophyIcon, {
          color: "currentColor"
        }), (0, n.jsx)(d.Heading, {
          variant: "heading-md/medium",
          color: "header-primary",
          children: N.default.Messages.CLAN_DISCOVERY_TOP_PICKS_TITLE
        })]
      }), (0, n.jsx)("div", {
        className: v.topPicksSpacer
      }), (0, n.jsx)(d.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        children: N.default.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE.format({
          playstyle: f
        })
      })]
    }), (0, n.jsx)("div", {
      className: v.topPicksContent,
      children: E.items.map(e => (0, n.jsx)(_.default, {
        clan: e,
        affinity: (0, g.getClanDiscoveryAffinity)(e, t),
        traitsToHighlight: a,
        className: v.card
      }, e.id))
    })]
  }) : null
}

function L() {
  let e = (0, p.useClanDiscoveryUIStore)(e => e.mode, o.default),
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
        case p.ClanDiscoveryMode.PLAYSTYLE:
          return (0, n.jsx)(C.default, {
            children: (0, n.jsx)(m.PlayStyleSelector, {})
          });
        case p.ClanDiscoveryMode.TRAITS:
          return (0, n.jsx)(C.default, {
            children: (0, n.jsx)(m.TraitSelector, {})
          });
        case p.ClanDiscoveryMode.GAMES:
          return (0, n.jsx)(C.default, {
            children: (0, n.jsx)(m.GameSelector, {})
          });
        default:
          return null
      }
    };
  return e === p.ClanDiscoveryMode.GET_STARTED ? (0, n.jsx)(T.default, {}) : (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(d.ScrollerAuto, {
      fade: !0,
      className: v.scroller,
      children: [(0, n.jsx)(I.default, {}), (0, n.jsx)("div", {
        className: v.content,
        children: (0, n.jsx)(R, {})
      })]
    }), (0, n.jsx)("div", {
      children: a((e, t) => (0, n.jsx)(r.animated.div, {
        style: e,
        children: l(t)
      }, t))
    })]
  })
}

function O() {
  let e = (0, p.useClanDiscoveryUIStore)(e => e.game, o.default),
    t = (0, p.useClanDiscoveryUIStore)(e => e.setGame, o.default),
    a = (0, p.useClanDiscoveryUIStore)(e => e.setSelectedGames, o.default),
    n = (0, p.useClanDiscoveryUIStore)(e => e.selectedGames, o.default),
    l = (0, p.useClanDiscoveryUIStore)(p.buildSearchCriteriaFromUIState, i()),
    r = (0, E.useClanDiscoveryExperimentDefaultGameId)("clan_discovery"),
    u = (0, c.useStateFromStores)([S.default], () => S.default.hasLoadedStaticClanDiscovery(e));
  return s.useEffect(() => {
    !(n.length > 0) && (r === A.VALORANT_ID ? (t(p.ClanDiscoveryGame.VALORANT), a([r])) : r === A.GENSHIN_ID && (t(p.ClanDiscoveryGame.GENSHIN), a([r])))
  }, [t, a, r, n]), s.useEffect(() => {
    !u && (0, h.loadStaticClanDiscovery)(e)
  }, [e, u]), s.useEffect(() => {
    u && (0, h.searchClanDiscovery)(e, l)
  }, [e, l, u]), s.useEffect(() => {
    f.default.getDetectableGames()
  }, []), null
}
t.default = function() {
  return (0, n.jsxs)("main", {
    className: v.container,
    children: [(0, n.jsx)(O, {}), (0, n.jsx)(L, {})]
  })
}