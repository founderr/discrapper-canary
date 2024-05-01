"use strict";
a.r(t), a.d(t, {
  ClanDiscoveryTopPicks: function() {
    return L
  }
}), a("47120");
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
  p = a("702646"),
  I = a("207796"),
  g = a("543550"),
  T = a("976757"),
  A = a("308083"),
  N = a("689938"),
  v = a("548290");
let R = {
  [I.ClanDiscoveryMode.PLAYSTYLE]: m.PlayStyleSelector,
  [I.ClanDiscoveryMode.TRAITS]: m.TraitSelector,
  [I.ClanDiscoveryMode.GAMES]: m.GameSelector
};

function L(e) {
  var t;
  let {
    limit: a
  } = e, l = (0, I.useClanDiscoveryUIStore)(I.buildSearchCriteriaFromUIState, i()), r = (0, I.useClanDiscoveryUIStore)(e => e.selectedTraits, o.default), f = (0, I.useClanDiscoveryUIStore)(e => e.selectedPlaystyle, o.default), E = s.useMemo(() => (0, A.getPlaystyleOptions)(), []), h = f ? null === (t = E[f]) || void 0 === t ? void 0 : t.title : "", C = (0, c.useStateFromStores)([S.default], () => S.default.getSearchResult(l), [l]), m = s.useMemo(() => {
    if ((0, T.isLoadedSearchResult)(C)) {
      let e = C.items;
      return null != a ? e.slice(0, a) : e
    }
    return null
  }, [a, C]);
  return null == m ? null : (0, n.jsxs)("div", {
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
          playstyle: h
        })
      })]
    }), (0, n.jsx)("div", {
      className: v.topPicksContent,
      children: m.map((e, t) => (0, n.jsx)(_.default, {
        clan: e,
        affinity: (0, T.getClanDiscoveryAffinity)(e, l),
        traitsToHighlight: r,
        className: v.card,
        index: t
      }, e.id))
    })]
  })
}
let O = s.memo(function() {
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
    l = s.useCallback(e => {
      let t = R[e];
      return null == t ? null : (0, n.jsx)(C.default, {
        children: (0, n.jsx)(t, {})
      })
    }, []);
  switch (e) {
    case I.ClanDiscoveryMode.GET_STARTED:
      return (0, n.jsx)(g.default, {});
    case I.ClanDiscoveryMode.DISCOVERY:
    case I.ClanDiscoveryMode.GAMES:
    case I.ClanDiscoveryMode.PLAYSTYLE:
    case I.ClanDiscoveryMode.TRAITS:
      return (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsxs)(d.ScrollerAuto, {
          fade: !0,
          className: v.scroller,
          children: [(0, n.jsx)(p.default, {}), (0, n.jsx)("div", {
            className: v.content,
            children: (0, n.jsx)(L, {})
          })]
        }), (0, n.jsx)("div", {
          children: a((e, t) => (0, n.jsx)(r.animated.div, {
            style: e,
            children: l(t)
          }, t))
        })]
      })
  }
});
t.default = s.memo(function() {
  return ! function() {
    let e = (0, I.useClanDiscoveryUIStore)(e => e.game, o.default),
      t = (0, I.useClanDiscoveryUIStore)(e => e.setGame, o.default),
      a = (0, I.useClanDiscoveryUIStore)(e => e.setSelectedGames, o.default),
      n = (0, I.useClanDiscoveryUIStore)(e => e.selectedGames, o.default),
      l = (0, I.useClanDiscoveryUIStore)(I.buildSearchCriteriaFromUIState, i()),
      r = (0, E.useClanDiscoveryExperimentDefaultGameId)("clan_discovery"),
      u = (0, c.useStateFromStores)([S.default], () => S.default.hasLoadedStaticClanDiscovery(e));
    s.useEffect(() => {
      !(n.length > 0) && (r === A.VALORANT_ID ? (t(I.ClanDiscoveryGame.VALORANT), a([r])) : r === A.GENSHIN_ID && (t(I.ClanDiscoveryGame.GENSHIN), a([r])))
    }, [t, a, r, n]), s.useEffect(() => {
      !u && (0, h.loadStaticClanDiscovery)(e)
    }, [e, u]), s.useEffect(() => {
      u && (0, h.searchClanDiscovery)(e, l)
    }, [e, l, u]), s.useEffect(() => {
      f.default.getDetectableGames()
    }, [])
  }(), (0, n.jsx)("main", {
    className: v.container,
    children: (0, n.jsx)(O, {})
  })
})