"use strict";
n.r(t), n.d(t, {
  ClanDiscoveryTopPicks: function() {
    return M
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  i = n("348327"),
  l = n.n(i),
  r = n("718017"),
  o = n("143927"),
  u = n("71970"),
  d = n("481060"),
  c = n("442837"),
  f = n("224706"),
  E = n("607070"),
  h = n("963202"),
  _ = n("229765"),
  C = n("231467"),
  m = n("480222"),
  S = n("807933"),
  p = n("10473"),
  g = n("702646"),
  I = n("207796"),
  T = n("543550"),
  A = n("976757"),
  N = n("981631"),
  v = n("308083"),
  R = n("689938"),
  O = n("548290");
let L = {
  [I.ClanDiscoveryMode.PLAYSTYLE]: S.PlayStyleSelector,
  [I.ClanDiscoveryMode.TRAITS]: S.TraitSelector,
  [I.ClanDiscoveryMode.GAMES]: S.GameSelector
};

function M(e) {
  let {
    limit: t
  } = e, n = (0, I.useClanDiscoveryUIStore)(I.buildSearchCriteriaFromUIState, l()), i = (0, I.useClanDiscoveryUIStore)(e => e.selectedTraits, o.default), r = (0, c.useStateFromStores)([p.default], () => p.default.getSearchResult(n), [n]), f = s.useMemo(() => {
    if ((0, A.isLoadedSearchResult)(r)) {
      let e = r.items;
      return null != t ? e.slice(0, t) : e
    }
    return null
  }, [t, r]);
  return null == f ? null : (0, a.jsxs)("div", {
    className: O.topPicks,
    children: [(0, a.jsxs)("div", {
      className: O.topPicksHeader,
      children: [(0, a.jsxs)("div", {
        className: O.topPicksTitle,
        children: [(0, a.jsx)(u.TrophyIcon, {
          color: "currentColor"
        }), (0, a.jsx)(d.Heading, {
          variant: "heading-md/medium",
          color: "header-primary",
          children: R.default.Messages.CLAN_DISCOVERY_TOP_PICKS_TITLE
        })]
      }), (0, a.jsx)("div", {
        className: O.topPicksSpacer
      }), (0, a.jsx)(d.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        children: R.default.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE
      })]
    }), (0, a.jsx)("div", {
      className: O.topPicksContent,
      children: f.map((e, t) => (0, a.jsx)(C.default, {
        clan: e,
        affinity: (0, A.getClanDiscoveryAffinity)(e, n),
        traitsToHighlight: i,
        className: O.card,
        index: t,
        source: N.AnalyticsSections.DISCOVER_SEARCH
      }, e.id))
    })]
  })
}
let y = s.memo(function() {
  let e = (0, c.useStateFromStores)([E.default], () => E.default.useReducedMotion),
    t = (0, I.useClanDiscoveryUIStore)(e => e.mode, o.default),
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
        transform: e || t !== I.ClanDiscoveryMode.DISCOVERY ? "translateY(0px)" : "translateY(-40px)",
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
        transform: e || t !== I.ClanDiscoveryMode.DISCOVERY ? "translateY(0px)" : "translateY(40px)",
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
      let t = L[e];
      return null == t ? null : (0, a.jsx)(m.default, {
        children: (0, a.jsx)(t, {})
      })
    }, []);
  switch (t) {
    case I.ClanDiscoveryMode.ADMIN_UPSELL:
      return (0, a.jsx)(T.ClanDiscoveryAdminContainer, {});
    case I.ClanDiscoveryMode.GET_STARTED:
      return (0, a.jsx)(T.ClanDiscoveryUserContainer, {});
    case I.ClanDiscoveryMode.DISCOVERY:
    case I.ClanDiscoveryMode.GAMES:
    case I.ClanDiscoveryMode.PLAYSTYLE:
    case I.ClanDiscoveryMode.TRAITS:
      return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsxs)(d.ScrollerAuto, {
          fade: !0,
          className: O.scroller,
          children: [l((e, t) => (0, a.jsx)(r.animated.div, {
            style: e,
            children: (0, a.jsx)(g.default, {})
          }, t)), u((e, t) => (0, a.jsx)(r.animated.div, {
            className: O.content,
            style: e,
            children: (0, a.jsx)(M, {})
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
    let e = (0, I.useClanDiscoveryUIStore)(e => e.game, o.default),
      t = (0, I.useClanDiscoveryUIStore)(e => e.setGame, o.default),
      n = (0, I.useClanDiscoveryUIStore)(e => e.setSelectedGames, o.default),
      a = (0, I.useClanDiscoveryUIStore)(e => e.selectedGames, o.default),
      i = (0, I.useClanDiscoveryUIStore)(I.buildSearchCriteriaFromUIState, l()),
      r = (0, h.useClanPrepilotExperimentDefaultGameId)("clan_discovery"),
      {
        defaultGameId: u
      } = (0, h.useClanPilotExperiment)("clan_discovery"),
      d = null != r ? r : u,
      E = (0, c.useStateFromStores)([p.default], () => p.default.hasLoadedStaticClanDiscovery(e));
    s.useEffect(() => {
      !(a.length > 0) && (d === v.VALORANT_ID ? (t(I.ClanDiscoveryGame.VALORANT), n([d])) : d === v.GENSHIN_ID && (t(I.ClanDiscoveryGame.GENSHIN), n([d])))
    }, [t, n, d, a]), s.useEffect(() => {
      !E && (0, _.loadStaticClanDiscovery)(e)
    }, [e, E]), s.useEffect(() => {
      E && (0, _.searchClanDiscovery)(e, i)
    }, [e, i, E]), s.useEffect(() => {
      f.default.getDetectableGames()
    }, [])
  }(), (0, a.jsx)("main", {
    className: O.container,
    children: (0, a.jsx)(y, {})
  })
})