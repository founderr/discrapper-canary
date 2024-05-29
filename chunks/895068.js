"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("47120");
var a, s, l = n("735250"),
  i = n("470079"),
  r = n("920906"),
  o = n("143927"),
  u = n("964094"),
  d = n("481060"),
  c = n("110924"),
  f = n("393903"),
  E = n("638730"),
  C = n("970606"),
  h = n("945124"),
  _ = n("231467"),
  S = n("931515"),
  m = n("207796"),
  p = n("777734"),
  I = n("976757"),
  g = n("981631"),
  T = n("689938"),
  A = n("886722");

function N(e) {
  let {
    width: t,
    isAnimating: n
  } = e, {
    loaded: a,
    clans: s,
    searchResult: N,
    searchCriteria: v
  } = (0, S.useClanDiscoveryList)(), R = (0, m.useClanDiscoveryUIStore)(e => e.selectedTraits, o.default), O = (0, c.default)(N), [L, P] = i.useState(0), y = i.useMemo(() => ({
    height: L
  }), [L]), M = (0, r.useSpring)({
    opacity: L > 0 ? 1 : 0,
    config: r.config.stiff
  }), D = Math.min(null != t ? t : 1024, 2e3), x = i.useMemo(() => {
    let e = D / 256,
      t = D / 376,
      n = D / e,
      a = D / t;
    return a > 360 ? Math.floor(t - (t - e) / 2) : n < 240 ? Math.max(e, t) : e
  }, [D]), b = i.useCallback(e => {
    if (null == e) {
      P(0);
      return
    }
    P(e.getBoundingClientRect().y + 16 + 400 + 40 + 4)
  }, []), U = (0, f.useResizeObserver)(b), j = i.useCallback(() => {
    b(U.current)
  }, [b, U]), G = (0, E.useThrottledFunction)(j, 10, [j], {
    leading: !0,
    trailing: !0
  });
  i.useEffect(() => {
    if (null != N && !!(0, I.isLoadedSearchResult)(N))(!(null != O && (0, I.isLoadedSearchResult)(O)) || !(O.loadedAt >= N.loadedAt)) && (0, C.trackClanDiscoveryViewed)(N.items.map(e => e.id), "top_picks", v)
  }, [v, N, O, j, n]), i.useEffect(() => {
    !n && (0, I.isLoadedSearchResult)(N) && setTimeout(() => j())
  }, [j, n, N]);
  let w = i.useMemo(() => null == s ? [] : [{
      section: "top_picks",
      items: s.slice(0, x),
      sectionHeight: 24,
      header: T.default.Messages.CLAN_DISCOVERY_TOP_PICKS_TITLE,
      subtitle: T.default.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE
    }, {
      section: "other_guilds",
      items: s.slice(x),
      sectionHeight: 24,
      header: T.default.Messages.CLAN_DISCOVERY_OTHER_GUILDS_TITLE
    }], [s, x]),
    k = i.useMemo(() => new Set(v.games), [v.games]),
    B = i.useCallback((e, t, n, a) => {
      var s;
      let {
        items: i
      } = w[e], r = i[t];
      return (0, l.jsx)(_.default, {
        clan: r,
        affinity: null !== (s = r.affininty) && void 0 !== s ? s : (0, h.getClanDiscoveryAffinity)(r, v),
        traitsToHighlight: R,
        className: A.card,
        style: n,
        source: g.AnalyticsSections.DISCOVER_SEARCH,
        prioritizedGameIds: k,
        onlyAnimateIconOnHover: !0
      }, a)
    }, [v, w, R, k]),
    F = i.useCallback(e => {
      let {
        header: t,
        subtitle: n,
        section: a
      } = w[e];
      return null == t ? null : "top_picks" === a ? (0, l.jsx)(p.default, {
        ref: U,
        icon: (0, l.jsx)(u.TrophyIcon, {
          color: "currentColor"
        }),
        title: t,
        subtitle: n
      }) : (0, l.jsx)(p.default, {
        title: t,
        subtitle: n
      })
    }, [w, U]);
  return 0 !== s.length && a ? (0, l.jsx)(l.Fragment, {
    children: (0, l.jsxs)("div", {
      className: A.masonryListContainer,
      children: [(0, l.jsx)(r.animated.div, {
        className: A.masonryListGradient,
        style: {
          ...M,
          ...y
        }
      }), (0, l.jsx)(d.MasonryList, {
        className: A.masonryList,
        sections: w.map(e => {
          let {
            items: t
          } = e;
          return t.length
        }),
        columns: x,
        sectionGutter: 80,
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
}(s = a || (a = {})).TOP_PICKS = "top_picks", s.OTHER_GUILDS = "other_guilds"