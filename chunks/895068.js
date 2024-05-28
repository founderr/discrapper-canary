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
    width: t
  } = e, {
    loaded: n,
    clans: a,
    searchResult: s,
    searchCriteria: N
  } = (0, S.useClanDiscoveryList)(), v = (0, m.useClanDiscoveryUIStore)(e => e.selectedTraits, o.default), R = (0, m.useClanDiscoveryUIStore)(e => e.mode, o.default), O = (0, c.default)(s), L = (0, c.default)(R), P = i.useRef(null), y = i.useRef(0), [M, D] = i.useState({}), [x, b] = (0, r.useSpring)(() => ({
    opacity: 0,
    config: r.config.stiff
  })), U = Math.min(null != t ? t : 1024, 2e3), j = i.useMemo(() => {
    let e = U / 256,
      t = U / 376,
      n = U / e,
      a = U / t;
    return a > 360 ? Math.floor(t - (t - e) / 2) : n < 240 ? Math.max(e, t) : e
  }, [U]), G = i.useCallback(() => {
    if (null == k.current) {
      0 !== y.current && (D({
        height: 0
      }), b({
        opacity: 0
      }), y.current = 0);
      return
    }
    D({
      height: k.current.getBoundingClientRect().y + 16 + 400 + 40 + 4
    }), 0 === y.current && (b({
      opacity: 1
    }), y.current = 1)
  }, []), w = (0, E.useThrottledFunction)(G, 10, [G], {
    leading: !0,
    trailing: !0
  }), k = (0, f.useResizeObserver)(G);
  i.useEffect(() => {
    if (null != s && !!(0, I.isLoadedSearchResult)(s))(!(null != O && (0, I.isLoadedSearchResult)(O)) || !(O.loadedAt >= s.loadedAt)) && (G(), (0, C.trackClanDiscoveryViewed)(s.items.map(e => e.id), "top_picks", N))
  }, [N, s, O, G]), i.useEffect(() => {
    if (L !== R && L !== m.ClanDiscoveryMode.DISCOVERY)(L === m.ClanDiscoveryMode.ADMIN_UPSELL || null == L) && R === m.ClanDiscoveryMode.DISCOVERY && (G(), P.current = setTimeout(() => {
      G()
    }, 500))
  }, [L, R]), i.useEffect(() => () => {
    null != P.current && clearTimeout(P.current)
  }, []);
  let B = i.useMemo(() => null == a ? [] : [{
      section: "top_picks",
      items: a.slice(0, j),
      sectionHeight: 24,
      header: T.default.Messages.CLAN_DISCOVERY_TOP_PICKS_TITLE,
      subtitle: T.default.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE
    }, {
      section: "other_guilds",
      items: a.slice(j),
      sectionHeight: 24,
      header: T.default.Messages.CLAN_DISCOVERY_OTHER_GUILDS_TITLE
    }], [a, j]),
    F = i.useMemo(() => new Set(N.games), [N.games]),
    H = i.useCallback((e, t, n, a) => {
      var s;
      let {
        items: i
      } = B[e], r = i[t];
      return (0, l.jsx)(_.default, {
        clan: r,
        affinity: null !== (s = r.affininty) && void 0 !== s ? s : (0, h.getClanDiscoveryAffinity)(r, N),
        traitsToHighlight: v,
        className: A.card,
        style: n,
        source: g.AnalyticsSections.DISCOVER_SEARCH,
        prioritizedGameIds: F,
        onlyAnimateIconOnHover: !0
      }, a)
    }, [N, B, v, F]),
    V = i.useCallback(e => {
      let {
        header: t,
        subtitle: n,
        section: a
      } = B[e];
      return null == t ? null : "top_picks" === a ? (0, l.jsx)(p.default, {
        ref: k,
        icon: (0, l.jsx)(u.TrophyIcon, {
          color: "currentColor"
        }),
        title: t,
        subtitle: n
      }) : (0, l.jsx)(p.default, {
        title: t,
        subtitle: n
      })
    }, [B, k]);
  return 0 !== a.length && n ? (0, l.jsx)(l.Fragment, {
    children: (0, l.jsxs)("div", {
      className: A.masonryListContainer,
      children: [(0, l.jsx)(r.animated.div, {
        className: A.masonryListGradient,
        style: {
          ...x,
          ...M
        }
      }), (0, l.jsx)(d.MasonryList, {
        className: A.masonryList,
        sections: B.map(e => {
          let {
            items: t
          } = e;
          return t.length
        }),
        columns: j,
        sectionGutter: 80,
        itemGutter: 16,
        paddingHorizontal: 32,
        paddingVertical: 40,
        removeEdgeItemGutters: !0,
        renderItem: H,
        renderSection: V,
        getSectionHeight: e => B[e].sectionHeight,
        getItemKey: (e, t) => B[e].items[t].id,
        getItemHeight: () => 400,
        chunkSize: 24,
        onScroll: w
      })]
    })
  }) : null
}(s = a || (a = {})).TOP_PICKS = "top_picks", s.OTHER_GUILDS = "other_guilds"