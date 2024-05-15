"use strict";
n.r(t), n.d(t, {
  ClanDiscoveryTopPicks: function() {
    return M
  }
}), n("47120");
var a, s, l = n("735250"),
  i = n("470079"),
  r = n("685626"),
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
  p = n("231467"),
  S = n("931515"),
  g = n("480222"),
  I = n("807933"),
  T = n("702646"),
  A = n("207796"),
  N = n("543550"),
  v = n("976757"),
  R = n("981631"),
  O = n("689938"),
  L = n("93118");
let y = {
  [A.ClanDiscoveryMode.PLAYSTYLE]: I.PlayStyleSelector,
  [A.ClanDiscoveryMode.TRAITS]: I.TraitSelector,
  [A.ClanDiscoveryMode.GAMES]: I.GameSelector
};

function M(e) {
  let {
    limit: t,
    width: n
  } = e, {
    loaded: a,
    clans: s,
    searchResult: c,
    searchCriteria: f
  } = (0, S.useClanDiscoveryList)(t), C = (0, A.useClanDiscoveryUIStore)(e => e.selectedTraits, o.default), g = (0, E.default)(c), I = (0, A.useClanDiscoveryUIStore)(e => e.mode, o.default), T = i.useRef(null), N = (0, E.default)(I), y = i.useRef(0), M = Math.min(null != n ? n : 1024, 2e3), P = i.useMemo(() => {
    let e = M / 256,
      t = M / 376,
      n = M / e,
      a = M / t;
    return a > 360 ? Math.floor(t - (t - e) / 2) : n < 240 ? Math.max(e, t) : e
  }, [M]), [x, D] = i.useState({}), [b, U] = (0, r.useSpring)(() => ({
    opacity: 0,
    config: r.config.stiff
  })), j = i.useCallback(() => {
    if (null == k.current) {
      0 !== y.current && (D({
        height: 0
      }), U({
        opacity: 0
      }), y.current = 0);
      return
    }
    D({
      height: k.current.getBoundingClientRect().y + 400 + 16 + 40
    }), 0 === y.current && (U({
      opacity: 1
    }), y.current = 1)
  }, []), G = (0, _.useThrottledFunction)(j, 10, [j], {
    leading: !0,
    trailing: !0
  }), k = (0, h.useResizeObserver)(j);
  i.useEffect(() => {
    if (null != c && !!(0, v.isLoadedSearchResult)(c))(!(null != g && (0, v.isLoadedSearchResult)(g)) || !(g.loadedAt >= c.loadedAt)) && (j(), (0, m.trackClanDiscoveryViewed)(c.items.map(e => e.id), "top_picks", f))
  }, [f, c, g, j]), i.useEffect(() => {
    if (N !== I && N !== A.ClanDiscoveryMode.DISCOVERY)(N === A.ClanDiscoveryMode.ADMIN_UPSELL || null == N) && I === A.ClanDiscoveryMode.DISCOVERY && (j(), T.current = setTimeout(() => {
      j()
    }, 500))
  }, [N, I]), i.useEffect(() => () => {
    null != T.current && clearTimeout(T.current)
  }, []);
  let w = i.useMemo(() => null == s ? [] : I === A.ClanDiscoveryMode.ADMIN_UPSELL ? [{
      section: "other_guilds",
      items: s,
      sectionHeight: 24,
      header: O.default.Messages.CLAN_DISCOVERY_STANDBY_TITLE,
      subtitle: O.default.Messages.CLAN_DISCOVERY_PREPILOT_SUBTITLE
    }] : [{
      section: "top_picks",
      items: s.slice(0, P),
      sectionHeight: 24,
      header: O.default.Messages.CLAN_DISCOVERY_TOP_PICKS_TITLE,
      subtitle: O.default.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE
    }, {
      section: "other_guilds",
      items: s.slice(P),
      sectionHeight: 24
    }], [s, I, P]),
    B = i.useCallback((e, t, n, a) => {
      var s;
      let {
        items: i
      } = w[e], r = i[t];
      return (0, l.jsx)(p.default, {
        clan: r,
        affinity: null !== (s = r.affininty) && void 0 !== s ? s : (0, v.getClanDiscoveryAffinity)(r, f),
        traitsToHighlight: C,
        className: L.card,
        style: n,
        source: R.AnalyticsSections.DISCOVER_SEARCH
      }, a)
    }, [f, w, C]),
    F = i.useCallback(e => {
      let {
        header: t,
        subtitle: n,
        section: a
      } = w[e];
      return null == t ? null : "top_picks" === a ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsxs)("div", {
          className: L.topPicksHeader,
          children: [(0, l.jsxs)("div", {
            className: L.topPicksTitle,
            children: [(0, l.jsx)(u.TrophyIcon, {
              color: "currentColor"
            }), (0, l.jsx)(d.Heading, {
              variant: "heading-md/medium",
              color: "header-primary",
              children: t
            })]
          }), (0, l.jsx)("div", {
            className: L.topPicksSpacer
          }), (0, l.jsx)(d.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: n
          })]
        }), (0, l.jsx)("div", {
          ref: k
        })]
      }) : (0, l.jsxs)("div", {
        className: L.topPicksHeader,
        children: [(0, l.jsxs)("div", {
          className: L.topPicksTitle,
          children: [(0, l.jsx)(u.TrophyIcon, {
            color: "currentColor"
          }), (0, l.jsx)(d.Heading, {
            variant: "heading-md/medium",
            color: "header-primary",
            children: t
          })]
        }), (0, l.jsx)("div", {
          className: L.topPicksSpacer
        }), (0, l.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: n
        })]
      })
    }, [w, k]);
  return 0 !== s.length && a ? (0, l.jsx)(l.Fragment, {
    children: (0, l.jsxs)("div", {
      className: L.topPicks,
      children: [(0, l.jsx)(r.animated.div, {
        className: L.gradient,
        style: {
          ...b,
          ...x
        }
      }), (0, l.jsx)(d.MasonryList, {
        className: L.topPicksList,
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
        renderItem: B,
        renderSection: F,
        getSectionHeight: e => w[e].sectionHeight,
        getItemKey: (e, t) => w[e].items[t].id,
        getItemHeight: () => 400,
        chunkSize: 24,
        onScroll: G
      })]
    })
  }) : null
}(s = a || (a = {})).TOP_PICKS = "top_picks", s.OTHER_GUILDS = "other_guilds";
let P = i.memo(function(e) {
  let {
    width: t
  } = e, n = (0, c.useStateFromStores)([C.default], () => C.default.useReducedMotion), a = (0, A.useClanDiscoveryUIStore)(e => e.mode, o.default), [, s] = i.useState(0), u = (0, r.useTransition)([a], {
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
      transform: n || a !== A.ClanDiscoveryMode.DISCOVERY ? "translateY(0px)" : "translateY(-40px)",
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
      transform: n || a !== A.ClanDiscoveryMode.DISCOVERY ? "translateY(0px)" : "translateY(40px)",
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
    let t = y[e];
    return null == t ? null : (0, l.jsx)(g.default, {
      children: (0, l.jsx)(t, {})
    })
  }, []);
  switch (a) {
    case A.ClanDiscoveryMode.ADMIN_UPSELL:
      return (0, l.jsx)(N.ClanDiscoveryAdminContainer, {});
    case A.ClanDiscoveryMode.GET_STARTED:
      return (0, l.jsx)(N.ClanDiscoveryUserContainer, {});
    case A.ClanDiscoveryMode.DISCOVERY:
    case A.ClanDiscoveryMode.GAMES:
    case A.ClanDiscoveryMode.PLAYSTYLE:
    case A.ClanDiscoveryMode.TRAITS:
      return (0, l.jsxs)(l.Fragment, {
        children: [d((e, t) => (0, l.jsx)(r.animated.div, {
          style: e,
          className: L.toolbar,
          children: (0, l.jsx)(T.default, {})
        }, t)), f((e, n) => (0, l.jsx)(r.animated.div, {
          className: L.content,
          style: e,
          children: (0, l.jsx)(M, {
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
  (0, S.useAutoFetchClanDiscoveryResults)();
  let {
    ref: e,
    width: t
  } = (0, f.default)();
  return (0, l.jsx)("main", {
    className: L.container,
    ref: e,
    children: (0, l.jsx)(P, {
      width: null != t ? t : 0
    })
  })
})