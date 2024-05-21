"use strict";
n.r(t), n.d(t, {
  ClanDiscoveryTopPicks: function() {
    return x
  }
}), n("47120");
var a, s, l = n("735250"),
  i = n("470079"),
  r = n("920906"),
  o = n("143927"),
  u = n("71970"),
  d = n("481060"),
  c = n("442837"),
  f = n("393238"),
  E = n("110924"),
  h = n("393903"),
  _ = n("638730"),
  C = n("607070"),
  m = n("970606"),
  S = n("963202"),
  p = n("353093"),
  g = n("231467"),
  I = n("931515"),
  T = n("480222"),
  A = n("807933"),
  N = n("702646"),
  v = n("207796"),
  R = n("543550"),
  O = n("976757"),
  L = n("981631"),
  M = n("689938"),
  y = n("93118");
let P = {
  [v.ClanDiscoveryMode.PLAYSTYLE]: A.PlayStyleSelector,
  [v.ClanDiscoveryMode.TRAITS]: A.TraitSelector,
  [v.ClanDiscoveryMode.GAMES]: A.GameSelector
};

function x(e) {
  let {
    limit: t,
    width: n
  } = e, {
    loaded: a,
    clans: s,
    searchResult: c,
    searchCriteria: f
  } = (0, I.useClanDiscoveryList)(t), C = (0, v.useClanDiscoveryUIStore)(e => e.selectedTraits, o.default), S = (0, E.default)(c), p = (0, v.useClanDiscoveryUIStore)(e => e.mode, o.default), T = i.useRef(null), A = (0, E.default)(p), N = i.useRef(0), R = Math.min(null != n ? n : 1024, 2e3), P = i.useMemo(() => {
    let e = R / 256,
      t = R / 376,
      n = R / e,
      a = R / t;
    return a > 360 ? Math.floor(t - (t - e) / 2) : n < 240 ? Math.max(e, t) : e
  }, [R]), [x, D] = i.useState({}), [b, U] = (0, r.useSpring)(() => ({
    opacity: 0,
    config: r.config.stiff
  })), j = i.useCallback(() => {
    if (null == k.current) {
      0 !== N.current && (D({
        height: 0
      }), U({
        opacity: 0
      }), N.current = 0);
      return
    }
    D({
      height: k.current.getBoundingClientRect().y + 400 + 16 + 40
    }), 0 === N.current && (U({
      opacity: 1
    }), N.current = 1)
  }, []), G = (0, _.useThrottledFunction)(j, 10, [j], {
    leading: !0,
    trailing: !0
  }), k = (0, h.useResizeObserver)(j);
  i.useEffect(() => {
    if (null != c && !!(0, O.isLoadedSearchResult)(c))(!(null != S && (0, O.isLoadedSearchResult)(S)) || !(S.loadedAt >= c.loadedAt)) && (j(), (0, m.trackClanDiscoveryViewed)(c.items.map(e => e.id), "top_picks", f))
  }, [f, c, S, j]), i.useEffect(() => {
    if (A !== p && A !== v.ClanDiscoveryMode.DISCOVERY)(A === v.ClanDiscoveryMode.ADMIN_UPSELL || null == A) && p === v.ClanDiscoveryMode.DISCOVERY && (j(), T.current = setTimeout(() => {
      j()
    }, 500))
  }, [A, p]), i.useEffect(() => () => {
    null != T.current && clearTimeout(T.current)
  }, []);
  let w = i.useMemo(() => null == s ? [] : p === v.ClanDiscoveryMode.ADMIN_UPSELL ? [{
      section: "other_guilds",
      items: s,
      sectionHeight: 24,
      header: M.default.Messages.CLAN_DISCOVERY_STANDBY_TITLE,
      subtitle: M.default.Messages.CLAN_DISCOVERY_PREPILOT_SUBTITLE
    }] : [{
      section: "top_picks",
      items: s.slice(0, P),
      sectionHeight: 24,
      header: M.default.Messages.CLAN_DISCOVERY_TOP_PICKS_TITLE,
      subtitle: M.default.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE
    }, {
      section: "other_guilds",
      items: s.slice(P),
      sectionHeight: 24
    }], [s, p, P]),
    B = i.useMemo(() => new Set(f.games), [f.games]),
    F = i.useCallback((e, t, n, a) => {
      var s;
      let {
        items: i
      } = w[e], r = i[t];
      return (0, l.jsx)(g.default, {
        clan: r,
        affinity: null !== (s = r.affininty) && void 0 !== s ? s : (0, O.getClanDiscoveryAffinity)(r, f),
        traitsToHighlight: C,
        className: y.card,
        style: n,
        source: L.AnalyticsSections.DISCOVER_SEARCH,
        prioritizedGameIds: B
      }, a)
    }, [f, w, C, B]),
    H = i.useCallback(e => {
      let {
        header: t,
        subtitle: n,
        section: a
      } = w[e];
      return null == t ? null : "top_picks" === a ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsxs)("div", {
          className: y.topPicksHeader,
          children: [(0, l.jsxs)("div", {
            className: y.topPicksTitle,
            children: [(0, l.jsx)(u.TrophyIcon, {
              color: "currentColor"
            }), (0, l.jsx)(d.Heading, {
              variant: "heading-md/medium",
              color: "header-primary",
              children: t
            })]
          }), (0, l.jsx)("div", {
            className: y.topPicksSpacer
          }), (0, l.jsx)(d.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: n
          })]
        }), (0, l.jsx)("div", {
          ref: k
        })]
      }) : (0, l.jsxs)("div", {
        className: y.topPicksHeader,
        children: [(0, l.jsxs)("div", {
          className: y.topPicksTitle,
          children: [(0, l.jsx)(u.TrophyIcon, {
            color: "currentColor"
          }), (0, l.jsx)(d.Heading, {
            variant: "heading-md/medium",
            color: "header-primary",
            children: t
          })]
        }), (0, l.jsx)("div", {
          className: y.topPicksSpacer
        }), (0, l.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: n
        })]
      })
    }, [w, k]);
  return 0 !== s.length && a ? (0, l.jsx)(l.Fragment, {
    children: (0, l.jsxs)("div", {
      className: y.topPicks,
      children: [(0, l.jsx)(r.animated.div, {
        className: y.gradient,
        style: {
          ...b,
          ...x
        }
      }), (0, l.jsx)(d.MasonryList, {
        className: y.topPicksList,
        sections: w.map(e => {
          let {
            items: t
          } = e;
          return t.length
        }),
        columns: P,
        sectionGutter: 16,
        itemGutter: 16,
        paddingHorizontal: 32,
        paddingVertical: 40,
        removeEdgeItemGutters: !0,
        renderItem: F,
        renderSection: H,
        getSectionHeight: e => w[e].sectionHeight,
        getItemKey: (e, t) => w[e].items[t].id,
        getItemHeight: () => 400,
        chunkSize: 24,
        onScroll: G
      })]
    })
  }) : null
}(s = a || (a = {})).TOP_PICKS = "top_picks", s.OTHER_GUILDS = "other_guilds";
let D = i.memo(function(e) {
  let {
    width: t
  } = e, n = (0, c.useStateFromStores)([C.default], () => C.default.useReducedMotion), a = (0, v.useClanDiscoveryUIStore)(e => e.mode, o.default), [, s] = i.useState(0), u = (0, r.useTransition)([a], {
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
  }), d = (0, r.useTransition)([a], {
    key: e => e,
    from: {
      transform: n || a !== v.ClanDiscoveryMode.DISCOVERY ? "translateY(0px)" : "translateY(-40px)",
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
  }), f = (0, r.useTransition)([a], {
    key: e => e,
    from: {
      transform: n || a !== v.ClanDiscoveryMode.DISCOVERY ? "translateY(0px)" : "translateY(40px)",
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
  }), E = i.useCallback(e => {
    let t = P[e];
    return null == t ? null : (0, l.jsx)(T.default, {
      children: (0, l.jsx)(t, {})
    })
  }, []), h = (0, v.useClanDiscoveryUIStore)(e => e.userUpsellScreen, o.default), _ = (0, v.useClanDiscoveryUIStore)(e => e.started, o.default), {
    guilds: m
  } = (0, S.useClanPrepilotExperimentForAllGuilds)({
    location: "ClanDiscoveryAdminContainer",
    includeConverted: !0
  }), g = i.useMemo(() => m.filter(e => !(0, p.isGuildAClan)(e)), [m]), {
    enableApplication: I
  } = (0, S.useClanPrePilotApplicationExperiment)("ClanDiscoveryAdminContainer");
  switch (i.useEffect(() => {
      let e = m.length > 0;
      if (e && !I && h === v.ClanDiscoveryUserScreens.USER_UPSELL) {
        (0, v.setClanDiscoveryMode)(v.ClanDiscoveryMode.ADMIN_UPSELL);
        return
      }
      if (!e && I && !_) {
        (0, v.setClanDiscoveryMode)(v.ClanDiscoveryMode.GET_STARTED);
        return
      }
    }, [g.length, m.length, _, I, h]), a) {
    case v.ClanDiscoveryMode.ADMIN_UPSELL:
      return (0, l.jsx)(R.ClanDiscoveryAdminContainer, {});
    case v.ClanDiscoveryMode.GET_STARTED:
      return (0, l.jsx)(R.ClanDiscoveryUserContainer, {});
    case v.ClanDiscoveryMode.DISCOVERY:
    case v.ClanDiscoveryMode.GAMES:
    case v.ClanDiscoveryMode.PLAYSTYLE:
    case v.ClanDiscoveryMode.TRAITS:
      return (0, l.jsxs)("div", {
        className: y.discoveryContainer,
        children: [d((e, t) => (0, l.jsx)(r.animated.div, {
          style: e,
          className: y.toolbar,
          children: (0, l.jsx)(N.default, {})
        }, t)), f((e, n) => (0, l.jsx)(r.animated.div, {
          className: y.content,
          style: e,
          children: (0, l.jsx)(x, {
            width: t
          })
        }, n)), (0, l.jsx)("div", {
          children: u((e, t) => (0, l.jsx)(r.animated.div, {
            style: e,
            children: E(t)
          }, t))
        })]
      })
  }
});
t.default = i.memo(function() {
  (0, I.useAutoFetchClanDiscoveryResults)();
  let {
    ref: e,
    width: t
  } = (0, f.default)();
  return (0, l.jsxs)("main", {
    className: y.container,
    ref: e,
    children: [(0, l.jsx)("div", {
      className: y.dragRegion
    }), (0, l.jsx)(D, {
      width: null != t ? t : 0
    })]
  })
})