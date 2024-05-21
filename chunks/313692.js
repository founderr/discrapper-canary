"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("392711"),
  o = n("399606"),
  u = n("481060"),
  d = n("963374"),
  c = n("735020"),
  f = n("786761"),
  h = n("937889"),
  m = n("619753"),
  p = n("433355"),
  E = n("271383"),
  C = n("594174"),
  g = n("189432"),
  S = n("356778"),
  _ = n("370595"),
  T = n("991570"),
  I = n("50493"),
  A = n("806338"),
  N = n("976335");

function v(e) {
  var t, n;
  let {
    userId: s,
    guildId: v,
    location: x,
    className: M,
    onNavigate: R
  } = e, y = l.useRef(null), L = (0, o.useStateFromStores)([p.default], () => p.default.getGuildSidebarState(v), [v]), O = l.useRef(0), [j, P] = l.useState(null !== (t = null == L ? void 0 : L.details.additionalSearchQuery) && void 0 !== t ? t : {}), D = (0, S.useServerMessageHistoryForUser)(s, v, {
    addtionalQuery: j,
    shouldDispatch: !0
  }), b = (0, o.useStateFromStores)([C.default], () => C.default.getUser(s), [s]), U = (0, o.useStateFromStores)([E.default], () => E.default.getMember(v, s), [v, s]), F = (0, T.useProfileThemedPanelBackground)(s, v);
  l.useLayoutEffect(() => {
    let e = null == L ? void 0 : L.details.scrollOffset;
    if (null != e) {
      var t;
      null === (t = y.current) || void 0 === t || t.scrollTo({
        to: e,
        animate: !1
      })
    }
  }, []);
  let w = l.useCallback(e => {
      if (null == L) return;
      let t = e.target.scrollTop;
      O.current = t, (0, g.openGuildMemberModViewSidebar)(v, s, L.baseChannelId, {
        modViewPanel: I.ModViewPanel.MESSAGE_HISTORY,
        additionalSearchQuery: j,
        scrollOffset: O.current
      })
    }, [v, s, L, j]),
    k = (0, r.throttle)(w, 300),
    B = l.useCallback(e => {
      if (null == L) return;
      let t = {
        ...j,
        offset: 25 * e
      };
      P(t), (0, g.openGuildMemberModViewSidebar)(v, s, L.baseChannelId, {
        modViewPanel: I.ModViewPanel.MESSAGE_HISTORY,
        additionalSearchQuery: t,
        scrollOffset: O.current
      })
    }, [v, s, L, j]),
    H = null !== (n = null == j ? void 0 : j.offset) && void 0 !== n ? n : 0,
    G = (0, o.useStateFromStores)([c.default], () => {
      if (null == D.result) return [];
      let e = D.result.messages,
        t = (0, d.createASTHighlighter)("");
      return e.map(e => e.map(e => {
        let n = c.default.getMessage(e.id, e.channel_id),
          a = (0, f.createMessageRecord)(e);
        return null != n && (a = a.merge({
          attachments: n.attachments,
          embeds: n.embeds
        })), a.isSearchHit ? a.set("customRenderedContent", (0, h.default)(a, {
          postProcessor: t,
          allowHeading: !0,
          allowList: !0
        })) : a
      }))
    }, [D.result]),
    V = l.useMemo(() => {
      var e, t, n, a;
      return null == D.result ? {
        documentsIndexed: 0,
        isSearching: !0,
        isIndexing: !1,
        isHistoricalIndexing: !1,
        offset: H,
        totalResults: 0,
        hasError: !1,
        showBlockedResults: !1,
        showNoResultsAlt: !1
      } : {
        documentsIndexed: null !== (e = D.result.documents_indexed) && void 0 !== e ? e : 0,
        isSearching: !1,
        isIndexing: null !== (t = D.result.doing_deep_historical_index) && void 0 !== t && t,
        isHistoricalIndexing: null !== (n = D.result.doing_deep_historical_index) && void 0 !== n && n,
        offset: H,
        totalResults: null !== (a = D.result.total_results) && void 0 !== a ? a : 0,
        hasError: !1,
        showBlockedResults: !1,
        showNoResultsAlt: !1
      }
    }, [D.result, H]);
  return null == b || null == U || null == V ? null : (0, a.jsxs)("div", {
    className: i()(A.container, M),
    style: {
      backgroundColor: F
    },
    children: [(0, a.jsx)(_.default, {
      guildId: v,
      userId: s,
      onNavigate: R
    }), (0, a.jsx)(u.AdvancedScroller, {
      className: i()(N.innerContainer),
      ref: y,
      onScroll: k,
      children: (0, a.jsx)(m.default, {
        searchResults: G,
        search: V,
        searchId: s,
        renderEmbeds: !0,
        blockCount: 0,
        scrollTo: () => {},
        onChangePage: B
      })
    })]
  })
}