"use strict";
n.r(t), n.d(t, {
  ClanDiscoveryTopPicks: function() {
    return P
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  i = n("348327"),
  l = n.n(i),
  r = n("685626"),
  o = n("143927"),
  u = n("71970"),
  d = n("481060"),
  c = n("442837"),
  f = n("224706"),
  E = n("110924"),
  h = n("607070"),
  _ = n("970606"),
  C = n("963202"),
  m = n("229765"),
  S = n("231467"),
  p = n("480222"),
  g = n("807933"),
  I = n("10473"),
  T = n("702646"),
  A = n("207796"),
  N = n("543550"),
  v = n("976757"),
  R = n("981631"),
  L = n("308083"),
  O = n("689938"),
  M = n("93118");
let y = {
  [A.ClanDiscoveryMode.PLAYSTYLE]: g.PlayStyleSelector,
  [A.ClanDiscoveryMode.TRAITS]: g.TraitSelector,
  [A.ClanDiscoveryMode.GAMES]: g.GameSelector
};

function P(e) {
  let {
    limit: t
  } = e, n = (0, A.useClanDiscoveryUIStore)(A.buildSearchCriteriaFromUIState, l()), i = (0, A.useClanDiscoveryUIStore)(e => e.selectedTraits, o.default), r = (0, c.useStateFromStores)([I.default], () => I.default.getSearchResult(n), [n]), f = (0, E.default)(r), h = s.useMemo(() => {
    if ((0, v.isLoadedSearchResult)(r)) {
      let e = r.items;
      return null != t ? e.slice(0, t) : e
    }
    return null
  }, [t, r]);
  return (s.useEffect(() => {
    if (null != r && !!(0, v.isLoadedSearchResult)(r))(!(null != f && (0, v.isLoadedSearchResult)(f)) || !(f.loadedAt >= r.loadedAt)) && (0, _.trackClanDiscoveryViewed)(r.items.map(e => e.id), "top_picks", n)
  }, [n, r, f]), null == h) ? null : (0, a.jsxs)("div", {
    className: M.topPicks,
    children: [(0, a.jsxs)("div", {
      className: M.topPicksHeader,
      children: [(0, a.jsxs)("div", {
        className: M.topPicksTitle,
        children: [(0, a.jsx)(u.TrophyIcon, {
          color: "currentColor"
        }), (0, a.jsx)(d.Heading, {
          variant: "heading-md/medium",
          color: "header-primary",
          children: O.default.Messages.CLAN_DISCOVERY_TOP_PICKS_TITLE
        })]
      }), (0, a.jsx)("div", {
        className: M.topPicksSpacer
      }), (0, a.jsx)(d.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        children: O.default.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE
      })]
    }), (0, a.jsx)("div", {
      className: M.topPicksContent,
      children: h.map((e, t) => (0, a.jsx)(S.default, {
        clan: e,
        affinity: (0, v.getClanDiscoveryAffinity)(e, n),
        traitsToHighlight: i,
        className: M.card,
        index: t,
        source: R.AnalyticsSections.DISCOVER_SEARCH
      }, e.id))
    })]
  })
}
let x = s.memo(function() {
  let e = (0, c.useStateFromStores)([h.default], () => h.default.useReducedMotion),
    t = (0, A.useClanDiscoveryUIStore)(e => e.mode, o.default),
    [, n] = s.useState(0),
    i = (0, r.useTransition)([t], {
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
      onRest: () => n(e => e + 1)
    }),
    l = (0, r.useTransition)([t], {
      key: e => e,
      from: {
        transform: e || t !== A.ClanDiscoveryMode.DISCOVERY ? "translateY(0px)" : "translateY(-40px)",
        opacity: 0
      },
      enter: {
        transform: "translateY(0px)",
        opacity: 1
      },
      config: {
        mass: 1,
        tension: 600,
        friction: 60
      },
      delay: 500
    }),
    u = (0, r.useTransition)([t], {
      key: e => e,
      from: {
        transform: e || t !== A.ClanDiscoveryMode.DISCOVERY ? "translateY(0px)" : "translateY(40px)",
        opacity: 0
      },
      enter: {
        transform: "translateY(0px)",
        opacity: 1
      },
      config: {
        mass: 1,
        tension: 600,
        friction: 60
      },
      delay: 500
    }),
    f = s.useCallback(e => {
      let t = y[e];
      return null == t ? null : (0, a.jsx)(p.default, {
        children: (0, a.jsx)(t, {})
      })
    }, []);
  switch (t) {
    case A.ClanDiscoveryMode.ADMIN_UPSELL:
      return (0, a.jsx)(N.ClanDiscoveryAdminContainer, {});
    case A.ClanDiscoveryMode.GET_STARTED:
      return (0, a.jsx)(N.ClanDiscoveryUserContainer, {});
    case A.ClanDiscoveryMode.DISCOVERY:
    case A.ClanDiscoveryMode.GAMES:
    case A.ClanDiscoveryMode.PLAYSTYLE:
    case A.ClanDiscoveryMode.TRAITS:
      return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsxs)(d.ScrollerAuto, {
          fade: !0,
          className: M.scroller,
          children: [l((e, t) => (0, a.jsx)(r.animated.div, {
            style: e,
            children: (0, a.jsx)(T.default, {})
          }, t)), u((e, t) => (0, a.jsx)(r.animated.div, {
            className: M.content,
            style: e,
            children: (0, a.jsx)(P, {})
          }, t))]
        }), (0, a.jsx)("div", {
          children: i((e, t) => (0, a.jsx)(r.animated.div, {
            style: e,
            children: f(t)
          }, t))
        })]
      })
  }
});
t.default = s.memo(function() {
  return ! function() {
    let e = (0, A.useClanDiscoveryUIStore)(e => e.game, o.default),
      t = (0, A.useClanDiscoveryUIStore)(e => e.setGame, o.default),
      n = (0, A.useClanDiscoveryUIStore)(e => e.setSelectedGames, o.default),
      a = (0, A.useClanDiscoveryUIStore)(e => e.selectedGames, o.default),
      i = (0, A.useClanDiscoveryUIStore)(A.buildSearchCriteriaFromUIState, l()),
      r = (0, C.useClanPrepilotExperimentDefaultGameId)("clan_discovery"),
      {
        defaultGameId: u
      } = (0, C.useClanPilotExperiment)("clan_discovery"),
      d = null != r ? r : u,
      E = (0, c.useStateFromStores)([I.default], () => I.default.hasLoadedStaticClanDiscovery(e));
    s.useEffect(() => {
      !(a.length > 0) && (d === L.VALORANT_ID ? (t(A.ClanDiscoveryGame.VALORANT), n([d])) : d === L.GENSHIN_ID && (t(A.ClanDiscoveryGame.GENSHIN), n([d])))
    }, [t, n, d, a]), s.useEffect(() => {
      !E && (0, m.loadStaticClanDiscovery)(e)
    }, [e, E]), s.useEffect(() => {
      E && (0, m.searchClanDiscovery)(e, i)
    }, [e, i, E]), s.useEffect(() => {
      f.default.getDetectableGames()
    }, [])
  }(), (0, a.jsx)("main", {
    className: M.container,
    children: (0, a.jsx)(x, {})
  })
})