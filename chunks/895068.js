"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
}), n("47120");
var a, s, l = n("735250"),
  i = n("470079"),
  r = n("920906"),
  o = n("143927"),
  u = n("481060"),
  d = n("110924"),
  c = n("393903"),
  f = n("638730"),
  E = n("970606"),
  h = n("945124"),
  _ = n("231467"),
  C = n("931515"),
  m = n("207796"),
  S = n("777734"),
  p = n("976757"),
  g = n("981631"),
  I = n("689938"),
  T = n("886722");

function A(e) {
  let {
    width: t
  } = e, {
    loaded: n,
    clans: a,
    searchResult: s,
    searchCriteria: A
  } = (0, C.useClanDiscoveryList)(), N = (0, m.useClanDiscoveryUIStore)(e => e.selectedTraits, o.default), v = (0, m.useClanDiscoveryUIStore)(e => e.mode, o.default), R = (0, d.default)(s), O = (0, d.default)(v), L = i.useRef(null), M = i.useRef(0), [y, P] = i.useState({}), [x, D] = (0, r.useSpring)(() => ({
    opacity: 0,
    config: r.config.stiff
  })), b = Math.min(null != t ? t : 1024, 2e3), U = i.useMemo(() => {
    let e = b / 256,
      t = b / 376,
      n = b / e,
      a = b / t;
    return a > 360 ? Math.floor(t - (t - e) / 2) : n < 240 ? Math.max(e, t) : e
  }, [b]), j = i.useCallback(() => {
    if (null == k.current) {
      0 !== M.current && (P({
        height: 0
      }), D({
        opacity: 0
      }), M.current = 0);
      return
    }
    P({
      height: k.current.getBoundingClientRect().y + 400 + 16 + 40
    }), 0 === M.current && (D({
      opacity: 1
    }), M.current = 1)
  }, []), G = (0, f.useThrottledFunction)(j, 10, [j], {
    leading: !0,
    trailing: !0
  }), k = (0, c.useResizeObserver)(j);
  i.useEffect(() => {
    if (null != s && !!(0, p.isLoadedSearchResult)(s))(!(null != R && (0, p.isLoadedSearchResult)(R)) || !(R.loadedAt >= s.loadedAt)) && (j(), (0, E.trackClanDiscoveryViewed)(s.items.map(e => e.id), "top_picks", A))
  }, [A, s, R, j]), i.useEffect(() => {
    if (O !== v && O !== m.ClanDiscoveryMode.DISCOVERY)(O === m.ClanDiscoveryMode.ADMIN_UPSELL || null == O) && v === m.ClanDiscoveryMode.DISCOVERY && (j(), L.current = setTimeout(() => {
      j()
    }, 500))
  }, [O, v]), i.useEffect(() => () => {
    null != L.current && clearTimeout(L.current)
  }, []);
  let w = i.useMemo(() => null == a ? [] : [{
      section: "top_picks",
      items: a.slice(0, U),
      sectionHeight: 24,
      header: I.default.Messages.CLAN_DISCOVERY_TOP_PICKS_TITLE,
      subtitle: I.default.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE
    }, {
      section: "other_guilds",
      items: a.slice(U),
      sectionHeight: 24
    }], [a, U]),
    B = i.useMemo(() => new Set(A.games), [A.games]),
    F = i.useCallback((e, t, n, a) => {
      var s;
      let {
        items: i
      } = w[e], r = i[t];
      return (0, l.jsx)(_.default, {
        clan: r,
        affinity: null !== (s = r.affininty) && void 0 !== s ? s : (0, h.getClanDiscoveryAffinity)(r, A),
        traitsToHighlight: N,
        className: T.card,
        style: n,
        source: g.AnalyticsSections.DISCOVER_SEARCH,
        prioritizedGameIds: B,
        onlyAnimateIconOnHover: !0
      }, a)
    }, [A, w, N, B]),
    H = i.useCallback(e => {
      let {
        header: t,
        subtitle: n,
        section: a
      } = w[e];
      return null == t ? null : "top_picks" === a ? (0, l.jsx)(S.default, {
        ref: k,
        title: t,
        subtitle: n
      }) : (0, l.jsx)(S.default, {
        title: t,
        subtitle: n
      })
    }, [w, k]);
  return 0 !== a.length && n ? (0, l.jsx)(l.Fragment, {
    children: (0, l.jsxs)("div", {
      className: T.masonryListContainer,
      children: [(0, l.jsx)(r.animated.div, {
        className: T.masonryListGradient,
        style: {
          ...x,
          ...y
        }
      }), (0, l.jsx)(u.MasonryList, {
        className: T.masonryList,
        sections: w.map(e => {
          let {
            items: t
          } = e;
          return t.length
        }),
        columns: U,
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
}(s = a || (a = {})).TOP_PICKS = "top_picks", s.OTHER_GUILDS = "other_guilds"