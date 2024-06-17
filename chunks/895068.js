"use strict";
n.r(t), n.d(t, {
  ClanDiscoveryListVariant: function() {
    return s
  },
  default: function() {
    return L
  }
}), n("47120");
var a, s, l, i, r = n("735250"),
  o = n("470079"),
  u = n("920906"),
  d = n("143927"),
  c = n("964094"),
  f = n("481060"),
  E = n("110924"),
  h = n("393903"),
  C = n("638730"),
  _ = n("970606"),
  m = n("945124"),
  S = n("231467"),
  p = n("931515"),
  I = n("207796"),
  g = n("526282"),
  T = n("777734"),
  A = n("976757"),
  N = n("981631"),
  v = n("689938"),
  R = n("886722");
let O = 40;

function L(e) {
  let {
    width: t,
    isAnimating: n,
    variant: a = "default",
    onScroll: s
  } = e, {
    loaded: l,
    clans: i,
    searchResult: L,
    searchCriteria: P
  } = (0, p.useClanDiscoveryList)(), M = (0, I.useClanDiscoveryUIStore)(e => e.selectedTraits, d.default), y = (0, E.default)(L), [D, x] = o.useState(0), b = o.useMemo(() => ({
    height: D
  }), [D]), U = (0, u.useSpring)({
    opacity: D > 0 ? 1 : 0,
    config: u.config.stiff
  }), j = "upsell" === a, G = Math.min(null != t ? t : 1024, 2e3), w = o.useMemo(() => {
    let e = G / 256,
      t = G / 376,
      n = G / e,
      a = G / t;
    return a > 360 ? Math.floor(t - (t - e) / 2) : n < 240 ? Math.max(e, t) : e
  }, [G]), k = o.useCallback(e => {
    if (null == e) {
      x(0);
      return
    }
    x(e.getBoundingClientRect().y + 8 + 400 + 64)
  }, []), B = (0, h.useResizeObserver)(k), F = o.useCallback(e => {
    k(B.current), null != e && (null == s || s(e))
  }, [k, B, s]), H = (0, C.useThrottledFunction)(F, 10, [F], {
    leading: !0,
    trailing: !0
  });
  o.useEffect(() => {
    if (null != L && !!(0, A.isLoadedSearchResult)(L))(!(null != y && (0, A.isLoadedSearchResult)(y)) || !(y.loadedAt >= L.loadedAt)) && (0, _.trackClanDiscoveryViewed)(L.items.map(e => e.id), "top_picks", P)
  }, [P, L, y, F, n]), o.useEffect(() => {
    !n && (0, A.isLoadedSearchResult)(L) && setTimeout(() => F())
  }, [F, n, L]);
  let V = o.useMemo(() => (function(e, t, n) {
      if (null == e) return [];
      switch (n) {
        case "upsell":
          return [{
            section: "upsell",
            items: [e[0]],
            sectionHeight: 268,
            itemHeight: 0
          }, {
            section: "top_picks",
            items: e.slice(0, t),
            sectionHeight: O,
            itemHeight: 400,
            props: {
              className: R.glassBackgroundTop
            },
            header: v.default.Messages.CLAN_DISCOVERY_TOP_PICKS_TITLE,
            subtitle: v.default.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE
          }, {
            section: "other_guilds",
            items: e.slice(t),
            sectionHeight: 0,
            itemHeight: 400,
            props: {
              className: R.glassBackground
            }
          }];
        case "default":
          return [{
            section: "top_picks",
            items: e.slice(0, t),
            sectionHeight: O,
            itemHeight: 400,
            header: v.default.Messages.CLAN_DISCOVERY_TOP_PICKS_TITLE,
            subtitle: v.default.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE
          }, {
            section: "other_guilds",
            items: e.slice(t),
            sectionHeight: O,
            itemHeight: 400,
            header: v.default.Messages.CLAN_DISCOVERY_OTHER_GUILDS_TITLE
          }];
        default:
          return []
      }
    })(i, w, a), [i, w, a]),
    Y = o.useMemo(() => new Set(P.games), [P.games]),
    W = o.useCallback((e, t, n, a) => {
      var s;
      let {
        items: l,
        section: i
      } = V[e];
      if ("upsell" === i) return null;
      let o = l[t];
      return (0, r.jsx)(S.default, {
        clan: o,
        affinity: null !== (s = o.affininty) && void 0 !== s ? s : (0, m.getClanDiscoveryAffinity)(o, P),
        traitsToHighlight: M,
        className: R.card,
        style: n,
        source: N.AnalyticsSections.DISCOVER_SEARCH,
        prioritizedGameIds: Y,
        onlyAnimateIconOnHover: !0
      }, a)
    }, [P, V, M, Y]),
    K = o.useCallback((e, t) => {
      let {
        header: n,
        subtitle: a,
        section: s
      } = V[e];
      switch (s) {
        case "upsell":
          return (0, r.jsx)(g.default, {});
        case "top_picks":
          return (0, r.jsx)(T.default, {
            ref: B,
            icon: (0, r.jsx)(c.TrophyIcon, {
              color: "currentColor"
            }),
            style: {
              ...t,
              marginTop: 8,
              position: "absolute"
            },
            title: n,
            subtitle: a
          });
        default:
          if (null === n) return null;
          return (0, r.jsx)(T.default, {
            title: n,
            subtitle: a,
            style: {
              ...t,
              position: "absolute"
            }
          })
      }
    }, [V, B]);
  return 0 !== i.length && l ? (0, r.jsx)(r.Fragment, {
    children: (0, r.jsxs)("div", {
      className: R.masonryListContainer,
      children: [!j && (0, r.jsx)(r.Fragment, {
        children: (0, r.jsx)(u.animated.div, {
          className: R.masonryListGradient,
          style: {
            ...U,
            ...b
          }
        })
      }), (0, r.jsx)(f.MasonryList, {
        className: R.masonryList,
        sections: V.map(e => {
          let {
            items: t
          } = e;
          return t.length
        }),
        columns: w,
        itemGutter: 16,
        paddingHorizontal: 16,
        paddingVertical: "upsell" === a ? 64 : 0,
        removeEdgeItemGutters: !0,
        renderItem: W,
        renderSection: K,
        getSectionHeight: e => V[e].sectionHeight,
        getItemKey: (e, t) => V[e].items[t].id,
        getItemHeight: e => V[e].itemHeight,
        getSectionProps: e => {
          var t;
          return null !== (t = V[e].props) && void 0 !== t ? t : {}
        },
        chunkSize: 24,
        onScroll: H,
        maxContentWidth: 2e3
      })]
    })
  }) : null
}(l = a || (a = {})).UPSELL = "upsell", l.TOP_PICKS = "top_picks", l.OTHER_GUILDS = "other_guilds", (i = s || (s = {})).DEFAULT = "default", i.UPSELL = "upsell"