n.d(t, {
  Z: function() {
    return S
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(392711),
  o = n(399606),
  c = n(481060),
  u = n(963374),
  d = n(735020),
  h = n(786761),
  m = n(937889),
  p = n(619753),
  E = n(433355),
  g = n(271383),
  f = n(594174),
  C = n(189432),
  _ = n(356778),
  I = n(370595),
  x = n(991570),
  T = n(50493),
  N = n(332513),
  Z = n(812387);

function S(e) {
  var t, n;
  let {
    userId: s,
    guildId: S,
    location: v,
    className: A,
    onNavigate: M
  } = e, R = i.useRef(null), j = (0, o.e7)([E.ZP], () => E.ZP.getGuildSidebarState(S), [S]), L = i.useRef(0), [O, P] = i.useState(null !== (t = null == j ? void 0 : j.details.additionalSearchQuery) && void 0 !== t ? t : {}), b = (0, _.z0)(s, S, {
    addtionalQuery: O,
    shouldDispatch: !0
  }), y = (0, o.e7)([f.default], () => f.default.getUser(s), [s]), D = (0, o.e7)([g.ZP], () => g.ZP.getMember(S, s), [S, s]), U = (0, x.f)(s, S);
  i.useLayoutEffect(() => {
    let e = null == j ? void 0 : j.details.scrollOffset;
    if (null != e) {
      var t;
      null === (t = R.current) || void 0 === t || t.scrollTo({
        to: e,
        animate: !1
      })
    }
  }, []);
  let k = i.useCallback(e => {
      if (null == j) return;
      let t = e.target.scrollTop;
      L.current = t, (0, C.r)(S, s, j.baseChannelId, {
        modViewPanel: T.k.MESSAGE_HISTORY,
        additionalSearchQuery: O,
        scrollOffset: L.current
      })
    }, [S, s, j, O]),
    w = (0, r.throttle)(k, 300),
    H = i.useCallback(e => {
      if (null == j) return;
      let t = {
        ...O,
        offset: 25 * e
      };
      P(t), (0, C.r)(S, s, j.baseChannelId, {
        modViewPanel: T.k.MESSAGE_HISTORY,
        additionalSearchQuery: t,
        scrollOffset: L.current
      })
    }, [S, s, j, O]),
    B = null !== (n = null == O ? void 0 : O.offset) && void 0 !== n ? n : 0,
    G = (0, o.e7)([d.Z], () => {
      if (null == b.result) return [];
      let e = b.result.messages,
        t = (0, u.nC)("");
      return e.map(e => e.map(e => {
        let n = d.Z.getMessage(e.id, e.channel_id),
          l = (0, h.e5)(e);
        return null != n && (l = l.merge({
          attachments: n.attachments,
          embeds: n.embeds
        })), l.isSearchHit ? l.set("customRenderedContent", (0, m.ZP)(l, {
          postProcessor: t,
          allowHeading: !0,
          allowList: !0
        })) : l
      }))
    }, [b.result]),
    V = i.useMemo(() => {
      var e, t, n, l;
      return null == b.result ? {
        documentsIndexed: 0,
        isSearching: !0,
        isIndexing: !1,
        isHistoricalIndexing: !1,
        offset: B,
        totalResults: 0,
        hasError: !1,
        showBlockedResults: !1,
        showNoResultsAlt: !1
      } : {
        documentsIndexed: null !== (e = b.result.documents_indexed) && void 0 !== e ? e : 0,
        isSearching: !1,
        isIndexing: null !== (t = b.result.doing_deep_historical_index) && void 0 !== t && t,
        isHistoricalIndexing: null !== (n = b.result.doing_deep_historical_index) && void 0 !== n && n,
        offset: B,
        totalResults: null !== (l = b.result.total_results) && void 0 !== l ? l : 0,
        hasError: !1,
        showBlockedResults: !1,
        showNoResultsAlt: !1
      }
    }, [b.result, B]);
  return null == y || null == D || null == V ? null : (0, l.jsxs)("div", {
    className: a()(N.container, A),
    style: {
      backgroundColor: U
    },
    children: [(0, l.jsx)(I.Z, {
      guildId: S,
      userId: s,
      onNavigate: M
    }), (0, l.jsx)(c.AdvancedScroller, {
      className: a()(Z.innerContainer),
      ref: R,
      onScroll: w,
      children: (0, l.jsx)(p.Z, {
        searchResults: G,
        search: V,
        searchId: s,
        renderEmbeds: !0,
        blockCount: 0,
        scrollTo: () => {},
        onChangePage: H
      })
    })]
  })
}