"use strict";
n.r(t), n.d(t, {
  ClanDiscoveryTopPicks: function() {
    return j
  }
}), n("47120");
var a, s, l = n("735250"),
  i = n("470079"),
  r = n("348327"),
  o = n.n(r),
  u = n("685626"),
  d = n("143927"),
  c = n("71970"),
  f = n("481060"),
  E = n("442837"),
  h = n("224706"),
  _ = n("393238"),
  C = n("110924"),
  m = n("393903"),
  S = n("638730"),
  p = n("607070"),
  g = n("970606"),
  I = n("963202"),
  T = n("229765"),
  A = n("231467"),
  N = n("480222"),
  v = n("807933"),
  R = n("10473"),
  O = n("702646"),
  L = n("207796"),
  M = n("543550"),
  y = n("976757"),
  P = n("981631"),
  x = n("308083"),
  D = n("689938"),
  b = n("93118");
let U = {
  [L.ClanDiscoveryMode.PLAYSTYLE]: v.PlayStyleSelector,
  [L.ClanDiscoveryMode.TRAITS]: v.TraitSelector,
  [L.ClanDiscoveryMode.GAMES]: v.GameSelector
};

function j(e) {
  let {
    limit: t,
    width: n
  } = e, a = (0, L.useClanDiscoveryUIStore)(L.buildSearchCriteriaFromUIState, o()), s = (0, L.useClanDiscoveryUIStore)(e => e.selectedTraits, d.default), r = (0, E.useStateFromStores)([R.default], () => R.default.getSearchResult(a), [a]), h = (0, C.default)(r), _ = (0, L.useClanDiscoveryUIStore)(e => e.mode, d.default), p = i.useRef(null), I = (0, C.default)(_), T = i.useRef(0), N = Math.min(null != n ? n : 1024, 2e3), v = i.useMemo(() => {
    let e = N / 256,
      t = N / 376,
      n = N / e,
      a = N / t;
    return a > 360 ? Math.floor(t - (t - e) / 2) : n < 240 ? Math.max(e, t) : e
  }, [N]), O = i.useMemo(() => {
    if ((0, y.isLoadedSearchResult)(r)) {
      let e = r.items;
      return null != t ? e.slice(0, t) : e
    }
    return null
  }, [t, r]), [M, x] = i.useState({}), [U, j] = (0, u.useSpring)(() => ({
    opacity: 0,
    config: u.config.stiff
  })), G = i.useCallback(() => {
    if (null == w.current) {
      0 !== T.current && (x({
        height: 0
      }), j({
        opacity: 0
      }), T.current = 0);
      return
    }
    x({
      height: w.current.getBoundingClientRect().y + 400 + 16 + 40
    }), 0 === T.current && (j({
      opacity: 1
    }), T.current = 1)
  }, []), k = (0, S.useThrottledFunction)(G, 10, [G], {
    leading: !0,
    trailing: !0
  }), w = (0, m.useResizeObserver)(G);
  i.useEffect(() => {
    if (null != r && !!(0, y.isLoadedSearchResult)(r))(!(null != h && (0, y.isLoadedSearchResult)(h)) || !(h.loadedAt >= r.loadedAt)) && (G(), (0, g.trackClanDiscoveryViewed)(r.items.map(e => e.id), "top_picks", a))
  }, [a, r, h, G]), i.useEffect(() => {
    if (I !== _ && I !== L.ClanDiscoveryMode.DISCOVERY)(I === L.ClanDiscoveryMode.ADMIN_UPSELL || null == I) && _ === L.ClanDiscoveryMode.DISCOVERY && (G(), p.current = setTimeout(() => {
      G()
    }, 500))
  }, [I, _]), i.useEffect(() => () => {
    null != p.current && clearTimeout(p.current)
  }, []);
  let B = i.useMemo(() => null == O ? [] : _ === L.ClanDiscoveryMode.ADMIN_UPSELL ? [{
    section: "other_guilds",
    items: O,
    sectionHeight: 24,
    header: D.default.Messages.CLAN_DISCOVERY_STANDBY_TITLE,
    subtitle: D.default.Messages.CLAN_DISCOVERY_PREPILOT_SUBTITLE
  }] : [{
    section: "top_picks",
    items: O.slice(0, v),
    sectionHeight: 24,
    header: D.default.Messages.CLAN_DISCOVERY_TOP_PICKS_TITLE,
    subtitle: D.default.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE
  }, {
    section: "other_guilds",
    items: O.slice(v),
    sectionHeight: 24
  }], [O, _, v]);
  return null == O ? null : (0, l.jsx)(l.Fragment, {
    children: (0, l.jsxs)("div", {
      className: b.topPicks,
      children: [(0, l.jsx)(u.animated.div, {
        className: b.gradient,
        style: {
          ...U,
          ...M
        }
      }), (0, l.jsx)(f.MasonryList, {
        className: b.topPicksList,
        sections: B.map(e => {
          let {
            items: t
          } = e;
          return t.length
        }),
        columns: v,
        sectionGutter: 16,
        itemGutter: 16,
        paddingHorizontal: 32,
        paddingVertical: 40,
        removeEdgeItemGutters: !0,
        renderItem: (e, t, n, i) => {
          var r;
          let {
            items: o
          } = B[e], u = o[t];
          return (0, l.jsx)(A.default, {
            clan: u,
            affinity: null !== (r = u.affininty) && void 0 !== r ? r : (0, y.getClanDiscoveryAffinity)(u, a),
            traitsToHighlight: s,
            className: b.card,
            style: n,
            source: P.AnalyticsSections.DISCOVER_SEARCH
          }, i)
        },
        renderSection: e => {
          let {
            header: t,
            subtitle: n,
            section: a
          } = B[e];
          return null == t ? null : "top_picks" === a ? (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsxs)("div", {
              className: b.topPicksHeader,
              children: [(0, l.jsxs)("div", {
                className: b.topPicksTitle,
                children: [(0, l.jsx)(c.TrophyIcon, {
                  color: "currentColor"
                }), (0, l.jsx)(f.Heading, {
                  variant: "heading-md/medium",
                  color: "header-primary",
                  children: t
                })]
              }), (0, l.jsx)("div", {
                className: b.topPicksSpacer
              }), (0, l.jsx)(f.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: n
              })]
            }), (0, l.jsx)("div", {
              ref: w
            })]
          }) : (0, l.jsxs)("div", {
            className: b.topPicksHeader,
            children: [(0, l.jsxs)("div", {
              className: b.topPicksTitle,
              children: [(0, l.jsx)(c.TrophyIcon, {
                color: "currentColor"
              }), (0, l.jsx)(f.Heading, {
                variant: "heading-md/medium",
                color: "header-primary",
                children: t
              })]
            }), (0, l.jsx)("div", {
              className: b.topPicksSpacer
            }), (0, l.jsx)(f.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: n
            })]
          })
        },
        getSectionHeight: e => B[e].sectionHeight,
        getItemKey: (e, t) => B[e].items[t].id,
        getItemHeight: () => 400,
        chunkSize: 24,
        onScroll: k
      })]
    })
  })
}(s = a || (a = {})).TOP_PICKS = "top_picks", s.OTHER_GUILDS = "other_guilds";
let G = i.memo(function(e) {
  let {
    width: t
  } = e, n = (0, E.useStateFromStores)([p.default], () => p.default.useReducedMotion), a = (0, L.useClanDiscoveryUIStore)(e => e.mode, d.default), [, s] = i.useState(0), r = (0, u.useTransition)([a], {
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
    onRest: () => s(e => e + 1)
  }), o = (0, u.useTransition)([a], {
    key: e => e,
    from: {
      transform: n || a !== L.ClanDiscoveryMode.DISCOVERY ? "translateY(0px)" : "translateY(-40px)",
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
  }), c = (0, u.useTransition)([a], {
    key: e => e,
    from: {
      transform: n || a !== L.ClanDiscoveryMode.DISCOVERY ? "translateY(0px)" : "translateY(40px)",
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
  }), f = i.useCallback(e => {
    let t = U[e];
    return null == t ? null : (0, l.jsx)(N.default, {
      children: (0, l.jsx)(t, {})
    })
  }, []);
  switch (a) {
    case L.ClanDiscoveryMode.ADMIN_UPSELL:
      return (0, l.jsx)(M.ClanDiscoveryAdminContainer, {});
    case L.ClanDiscoveryMode.GET_STARTED:
      return (0, l.jsx)(M.ClanDiscoveryUserContainer, {});
    case L.ClanDiscoveryMode.DISCOVERY:
    case L.ClanDiscoveryMode.GAMES:
    case L.ClanDiscoveryMode.PLAYSTYLE:
    case L.ClanDiscoveryMode.TRAITS:
      return (0, l.jsxs)(l.Fragment, {
        children: [o((e, t) => (0, l.jsx)(u.animated.div, {
          style: e,
          className: b.toolbar,
          children: (0, l.jsx)(O.default, {})
        }, t)), c((e, n) => (0, l.jsx)(u.animated.div, {
          className: b.content,
          style: e,
          children: (0, l.jsx)(j, {
            width: t
          })
        }, n)), (0, l.jsx)("div", {
          children: r((e, t) => (0, l.jsx)(u.animated.div, {
            style: e,
            children: f(t)
          }, t))
        })]
      })
  }
});
t.default = i.memo(function() {
  ! function() {
    let e = (0, L.useClanDiscoveryUIStore)(e => e.game, d.default),
      t = (0, L.useClanDiscoveryUIStore)(e => e.setGame, d.default),
      n = (0, L.useClanDiscoveryUIStore)(e => e.setSelectedGames, d.default),
      a = (0, L.useClanDiscoveryUIStore)(e => e.selectedGames, d.default),
      s = (0, L.useClanDiscoveryUIStore)(L.buildSearchCriteriaFromUIState, o()),
      l = (0, I.useClanPrepilotExperimentDefaultGameId)("clan_discovery"),
      {
        defaultGameId: r
      } = (0, I.useClanPilotExperiment)("clan_discovery"),
      u = null != l ? l : r,
      c = (0, E.useStateFromStores)([R.default], () => R.default.hasLoadedStaticClanDiscovery(e));
    i.useEffect(() => {
      !(a.length > 0) && (u === x.VALORANT_ID ? (t(L.ClanDiscoveryGame.VALORANT), n([u])) : u === x.GENSHIN_ID && (t(L.ClanDiscoveryGame.GENSHIN), n([u])))
    }, [t, n, u, a]), i.useEffect(() => {
      !c && (0, T.loadStaticClanDiscovery)(e)
    }, [e, c]), i.useEffect(() => {
      c && (0, T.searchClanDiscovery)(e, s)
    }, [e, s, c]), i.useEffect(() => {
      h.default.getDetectableGames()
    }, [])
  }();
  let {
    ref: e,
    width: t
  } = (0, _.default)();
  return (0, l.jsx)("main", {
    className: b.container,
    ref: e,
    children: (0, l.jsx)(G, {
      width: null != t ? t : 0
    })
  })
})