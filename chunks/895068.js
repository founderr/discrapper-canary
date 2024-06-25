n.d(t, {
  Bj: function() {
    return i
  },
  ZP: function() {
    return O
  }
}), n(47120);
var s, i, l, a, r = n(735250),
  o = n(470079),
  c = n(920906),
  u = n(143927),
  d = n(481060),
  E = n(110924),
  h = n(393903),
  _ = n(638730),
  I = n(970606),
  m = n(945124),
  T = n(231467),
  g = n(931515),
  p = n(207796),
  N = n(526282),
  S = n(777734),
  C = n(976757),
  A = n(981631),
  f = n(689938),
  Z = n(920040);
let L = 40;

function O(e) {
  let {
    width: t,
    isAnimating: n,
    variant: s = "default",
    onScroll: i
  } = e, {
    loaded: l,
    clans: a,
    searchResult: O,
    searchCriteria: v
  } = (0, g.Qc)(), R = (0, p.GN)(e => e.selectedTraits, u.Z), P = (0, E.Z)(O), [x, M] = o.useState(0), D = o.useMemo(() => ({
    height: x
  }), [x]), b = (0, c.useSpring)({
    opacity: x > 0 ? 1 : 0,
    config: c.config.stiff
  }), y = "upsell" === s, j = Math.min(null != t ? t : 1024, 2e3), U = o.useMemo(() => {
    let e = j / 256,
      t = j / 376,
      n = j / e,
      s = j / t;
    return s > 360 ? Math.floor(t - (t - e) / 2) : n < 240 ? Math.max(e, t) : e
  }, [j]), G = o.useCallback(e => {
    if (null == e) {
      M(0);
      return
    }
    M(e.getBoundingClientRect().y + 8 + 400 + 64)
  }, []), w = (0, h.y)(G), k = o.useCallback(e => {
    G(w.current), null != e && (null == i || i(e))
  }, [G, w, i]), B = (0, _.h)(k, 10, [k], {
    leading: !0,
    trailing: !0
  });
  o.useEffect(() => {
    if (null != O && !!(0, C.Pw)(O))(!(null != P && (0, C.Pw)(P)) || !(P.loadedAt >= O.loadedAt)) && (0, I.Oe)(O.items.map(e => e.id), "top_picks", v)
  }, [v, O, P, k, n]), o.useEffect(() => {
    !n && (0, C.Pw)(O) && setTimeout(() => k())
  }, [k, n, O]);
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
            sectionHeight: L,
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
            sectionHeight: L,
            itemHeight: 400,
            header: f.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_TITLE,
            subtitle: f.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE
          }, {
            section: "other_guilds",
            items: e.slice(t),
            sectionHeight: L,
            itemHeight: 400,
            header: f.Z.Messages.CLAN_DISCOVERY_OTHER_GUILDS_TITLE
          }];
        default:
          return []
      }
    })(a, U, s), [a, U, s]),
    V = o.useMemo(() => new Set(v.games), [v.games]),
    F = o.useCallback((e, t, n, s) => {
      var i;
      let {
        items: l,
        section: a
      } = H[e];
      if ("upsell" === a) return null;
      let o = l[t];
      return (0, r.jsx)(T.ZP, {
        clan: o,
        affinity: null !== (i = o.affininty) && void 0 !== i ? i : (0, m.y)(o, v),
        traitsToHighlight: R,
        className: Z.card,
        style: n,
        source: A.jXE.DISCOVER_SEARCH,
        prioritizedGameIds: V,
        onlyAnimateIconOnHover: !0
      }, s)
    }, [v, H, R, V]),
    Y = o.useCallback((e, t) => {
      let {
        header: n,
        subtitle: s,
        section: i
      } = H[e];
      switch (i) {
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
            subtitle: s
          });
        default:
          if (null === n) return null;
          return (0, r.jsx)(S.Z, {
            title: n,
            subtitle: s,
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
        paddingVertical: "upsell" === s ? 64 : 0,
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
}(l = s || (s = {})).UPSELL = "upsell", l.TOP_PICKS = "top_picks", l.OTHER_GUILDS = "other_guilds", (a = i || (i = {})).DEFAULT = "default", a.UPSELL = "upsell"