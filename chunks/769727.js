"use strict";
n.r(t), n.d(t, {
  ClanDiscoveryTopPicks: function() {
    return O
  }
}), n("47120");
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
  E = n("963202"),
  h = n("2485"),
  _ = n("229765"),
  C = n("231467"),
  S = n("480222"),
  m = n("807933"),
  p = n("10473"),
  I = n("702646"),
  T = n("207796"),
  g = n("543550"),
  A = n("976757"),
  N = n("308083"),
  v = n("689938"),
  R = n("548290");
let L = {
  [T.ClanDiscoveryMode.PLAYSTYLE]: m.PlayStyleSelector,
  [T.ClanDiscoveryMode.TRAITS]: m.TraitSelector,
  [T.ClanDiscoveryMode.GAMES]: m.GameSelector
};

function O(e) {
  var t;
  let {
    limit: n
  } = e, l = (0, T.useClanDiscoveryUIStore)(T.buildSearchCriteriaFromUIState, i()), r = (0, T.useClanDiscoveryUIStore)(e => e.selectedTraits, o.default), f = (0, T.useClanDiscoveryUIStore)(e => e.selectedPlaystyle, o.default), E = s.useMemo(() => (0, N.getPlaystyleOptions)(), []), h = f ? null === (t = E[f]) || void 0 === t ? void 0 : t.title : "", _ = (0, c.useStateFromStores)([p.default], () => p.default.getSearchResult(l), [l]), S = s.useMemo(() => {
    if ((0, A.isLoadedSearchResult)(_)) {
      let e = _.items;
      return null != n ? e.slice(0, n) : e
    }
    return null
  }, [n, _]);
  return null == S ? null : (0, a.jsxs)("div", {
    className: R.topPicks,
    children: [(0, a.jsxs)("div", {
      className: R.topPicksHeader,
      children: [(0, a.jsxs)("div", {
        className: R.topPicksTitle,
        children: [(0, a.jsx)(u.TrophyIcon, {
          color: "currentColor"
        }), (0, a.jsx)(d.Heading, {
          variant: "heading-md/medium",
          color: "header-primary",
          children: v.default.Messages.CLAN_DISCOVERY_TOP_PICKS_TITLE
        })]
      }), (0, a.jsx)("div", {
        className: R.topPicksSpacer
      }), (0, a.jsx)(d.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        children: v.default.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE.format({
          playstyle: h
        })
      })]
    }), (0, a.jsx)("div", {
      className: R.topPicksContent,
      children: S.map((e, t) => (0, a.jsx)(C.default, {
        clan: e,
        affinity: (0, A.getClanDiscoveryAffinity)(e, l),
        traitsToHighlight: r,
        className: R.card,
        index: t
      }, e.id))
    })]
  })
}
let M = s.memo(function() {
  let e = (0, T.useClanDiscoveryUIStore)(e => e.mode, o.default),
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
    l = s.useCallback(e => {
      let t = L[e];
      return null == t ? null : (0, a.jsx)(S.default, {
        children: (0, a.jsx)(t, {})
      })
    }, []);
  switch (e) {
    case T.ClanDiscoveryMode.ADMIN_UPSELL:
      return (0, a.jsx)(g.ClanDiscoveryAdminContainer, {});
    case T.ClanDiscoveryMode.GET_STARTED:
      return (0, a.jsx)(g.ClanDiscoveryUserContainer, {});
    case T.ClanDiscoveryMode.DISCOVERY:
    case T.ClanDiscoveryMode.GAMES:
    case T.ClanDiscoveryMode.PLAYSTYLE:
    case T.ClanDiscoveryMode.TRAITS:
      return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsxs)(d.ScrollerAuto, {
          fade: !0,
          className: R.scroller,
          children: [(0, a.jsx)(I.default, {}), (0, a.jsx)("div", {
            className: R.content,
            children: (0, a.jsx)(O, {})
          })]
        }), (0, a.jsx)("div", {
          children: n((e, t) => (0, a.jsx)(r.animated.div, {
            style: e,
            children: l(t)
          }, t))
        })]
      })
  }
});
t.default = s.memo(function() {
  return ! function() {
    let e = (0, T.useClanDiscoveryUIStore)(e => e.game, o.default),
      t = (0, T.useClanDiscoveryUIStore)(e => e.setGame, o.default),
      n = (0, T.useClanDiscoveryUIStore)(e => e.setSelectedGames, o.default),
      a = (0, T.useClanDiscoveryUIStore)(e => e.selectedGames, o.default),
      l = (0, T.useClanDiscoveryUIStore)(T.buildSearchCriteriaFromUIState, i()),
      r = (0, E.useClanGuildExperimentDefaultGameId)("clan_discovery"),
      u = (0, h.useClanDiscoveryExperimentDefaultGameId)("clan_discovery"),
      d = null != r ? r : u,
      C = (0, c.useStateFromStores)([p.default], () => p.default.hasLoadedStaticClanDiscovery(e));
    s.useEffect(() => {
      !(a.length > 0) && (d === N.VALORANT_ID ? (t(T.ClanDiscoveryGame.VALORANT), n([d])) : d === N.GENSHIN_ID && (t(T.ClanDiscoveryGame.GENSHIN), n([d])))
    }, [t, n, d, a]), s.useEffect(() => {
      !C && (0, _.loadStaticClanDiscovery)(e)
    }, [e, C]), s.useEffect(() => {
      C && (0, _.searchClanDiscovery)(e, l)
    }, [e, l, C]), s.useEffect(() => {
      f.default.getDetectableGames()
    }, [])
  }(), (0, a.jsx)("main", {
    className: R.container,
    children: (0, a.jsx)(M, {})
  })
})