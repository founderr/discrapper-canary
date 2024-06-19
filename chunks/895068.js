n.d(t, {
  Bj: function() {
    return s
  },
  ZP: function() {
    return L
  }
}), n(47120);
var i, s, l, a, r = n(735250),
  o = n(470079),
  c = n(920906),
  u = n(143927),
  d = n(481060),
  E = n(110924),
  h = n(393903),
  _ = n(638730),
  I = n(970606),
  m = n(945124),
  g = n(231467),
  p = n(931515),
  T = n(207796),
  N = n(526282),
  S = n(777734),
  C = n(976757),
  A = n(981631),
  f = n(689938),
  Z = n(920040);
let v = 40;

function L(e) {
  let {
    width: t,
    isAnimating: n,
    variant: i = "default",
    onScroll: s
  } = e, {
    loaded: l,
    clans: a,
    searchResult: L,
    searchCriteria: O
  } = (0, p.Qc)(), R = (0, T.GN)(e => e.selectedTraits, u.Z), x = (0, E.Z)(L), [M, P] = o.useState(0), D = o.useMemo(() => ({
    height: M
  }), [M]), b = (0, c.useSpring)({
    opacity: M > 0 ? 1 : 0,
    config: c.config.stiff
  }), y = "upsell" === i, j = Math.min(null != t ? t : 1024, 2e3), U = o.useMemo(() => {
    let e = j / 256,
      t = j / 376,
      n = j / e,
      i = j / t;
    return i > 360 ? Math.floor(t - (t - e) / 2) : n < 240 ? Math.max(e, t) : e
  }, [j]), G = o.useCallback(e => {
    if (null == e) {
      P(0);
      return
    }
    P(e.getBoundingClientRect().y + 8 + 400 + 64)
  }, []), w = (0, h.y)(G), k = o.useCallback(e => {
    G(w.current), null != e && (null == s || s(e))
  }, [G, w, s]), B = (0, _.h)(k, 10, [k], {
    leading: !0,
    trailing: !0
  });
  o.useEffect(() => {
    if (null != L && !!(0, C.Pw)(L))(!(null != x && (0, C.Pw)(x)) || !(x.loadedAt >= L.loadedAt)) && (0, I.Oe)(L.items.map(e => e.id), "top_picks", O)
  }, [O, L, x, k, n]), o.useEffect(() => {
    !n && (0, C.Pw)(L) && setTimeout(() => k())
  }, [k, n, L]);
  let H = o.useMemo(() => (function(e, t, n) {
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
            sectionHeight: v,
            itemHeight: 400,
            props: {
              className: Z.glassBackgroundTop
            },
            header: f.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_TITLE,
            subtitle: f.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE
          }, {
            section: "other_guilds",
            items: e.slice(t),
            sectionHeight: 0,
            itemHeight: 400,
            props: {
              className: Z.glassBackground
            }
          }];
        case "default":
          return [{
            section: "top_picks",
            items: e.slice(0, t),
            sectionHeight: v,
            itemHeight: 400,
            header: f.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_TITLE,
            subtitle: f.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE
          }, {
            section: "other_guilds",
            items: e.slice(t),
            sectionHeight: v,
            itemHeight: 400,
            header: f.Z.Messages.CLAN_DISCOVERY_OTHER_GUILDS_TITLE
          }];
        default:
          return []
      }
    })(a, U, i), [a, U, i]),
    V = o.useMemo(() => new Set(O.games), [O.games]),
    F = o.useCallback((e, t, n, i) => {
      var s;
      let {
        items: l,
        section: a
      } = H[e];
      if ("upsell" === a) return null;
      let o = l[t];
      return (0, r.jsx)(g.ZP, {
        clan: o,
        affinity: null !== (s = o.affininty) && void 0 !== s ? s : (0, m.y)(o, O),
        traitsToHighlight: R,
        className: Z.card,
        style: n,
        source: A.jXE.DISCOVER_SEARCH,
        prioritizedGameIds: V,
        onlyAnimateIconOnHover: !0
      }, i)
    }, [O, H, R, V]),
    Y = o.useCallback((e, t) => {
      let {
        header: n,
        subtitle: i,
        section: s
      } = H[e];
      switch (s) {
        case "upsell":
          return (0, r.jsx)(N.Z, {});
        case "top_picks":
          return (0, r.jsx)(S.Z, {
            ref: w,
            icon: (0, r.jsx)(d.TrophyIcon, {
              color: "currentColor"
            }),
            style: {
              ...t,
              marginTop: 8,
              position: "absolute"
            },
            title: n,
            subtitle: i
          });
        default:
          if (null === n) return null;
          return (0, r.jsx)(S.Z, {
            title: n,
            subtitle: i,
            style: {
              ...t,
              position: "absolute"
            }
          })
      }
    }, [H, w]);
  return 0 !== a.length && l ? (0, r.jsx)(r.Fragment, {
    children: (0, r.jsxs)("div", {
      className: Z.masonryListContainer,
      children: [!y && (0, r.jsx)(r.Fragment, {
        children: (0, r.jsx)(c.animated.div, {
          className: Z.masonryListGradient,
          style: {
            ...b,
            ...D
          }
        })
      }), (0, r.jsx)(d.MasonryList, {
        className: Z.masonryList,
        sections: H.map(e => {
          let {
            items: t
          } = e;
          return t.length
        }),
        columns: U,
        itemGutter: 16,
        paddingHorizontal: 16,
        paddingVertical: "upsell" === i ? 64 : 0,
        removeEdgeItemGutters: !0,
        renderItem: F,
        renderSection: Y,
        getSectionHeight: e => H[e].sectionHeight,
        getItemKey: (e, t) => H[e].items[t].id,
        getItemHeight: e => H[e].itemHeight,
        getSectionProps: e => {
          var t;
          return null !== (t = H[e].props) && void 0 !== t ? t : {}
        },
        chunkSize: 24,
        onScroll: B,
        maxContentWidth: 2e3
      })]
    })
  }) : null
}(l = i || (i = {})).UPSELL = "upsell", l.TOP_PICKS = "top_picks", l.OTHER_GUILDS = "other_guilds", (a = s || (s = {})).DEFAULT = "default", a.UPSELL = "upsell"