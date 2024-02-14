"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("917351"),
  o = n("65597"),
  u = n("77078"),
  d = n("419135"),
  c = n("574933"),
  f = n("692038"),
  h = n("95045"),
  m = n("549206"),
  p = n("982108"),
  E = n("26989"),
  S = n("697218"),
  g = n("994906"),
  C = n("180968"),
  _ = n("473073"),
  I = n("763225"),
  T = n("789150"),
  v = n("865331"),
  x = n("714605");

function N(e) {
  var t, n;
  let {
    userId: s,
    guildId: N,
    location: A,
    className: M,
    onNavigate: R
  } = e, j = l.useRef(null), L = (0, o.default)([p.default], () => p.default.getGuildSidebarState(N), [N]), O = l.useRef(0), [y, P] = l.useState(null !== (t = null == L ? void 0 : L.details.additionalSearchQuery) && void 0 !== t ? t : {}), b = (0, C.useServerMessageHistoryForUser)(s, N, {
    addtionalQuery: y,
    shouldDispatch: !0
  }), D = (0, o.default)([S.default], () => S.default.getUser(s), [s]), U = (0, o.default)([E.default], () => E.default.getMember(N, s), [N, s]), w = (0, I.useProfileThemedPanelBackground)(s, N);
  l.useLayoutEffect(() => {
    let e = null == L ? void 0 : L.details.scrollOffset;
    if (null != e) {
      var t;
      null === (t = j.current) || void 0 === t || t.scrollTo({
        to: e,
        animate: !1
      })
    }
  }, []);
  let F = l.useCallback(e => {
      if (null == L) return;
      let t = e.target.scrollTop;
      O.current = t, (0, g.openGuildMemberModViewSidebar)(N, s, L.baseChannelId, {
        modViewPanel: T.ModViewPanel.MESSAGE_HISTORY,
        additionalSearchQuery: y,
        scrollOffset: O.current
      })
    }, [N, s, L, y]),
    k = (0, r.throttle)(F, 300),
    V = l.useCallback(e => {
      if (null == L) return;
      let t = {
        ...y,
        offset: 25 * e
      };
      P(t), (0, g.openGuildMemberModViewSidebar)(N, s, L.baseChannelId, {
        modViewPanel: T.ModViewPanel.MESSAGE_HISTORY,
        additionalSearchQuery: t,
        scrollOffset: O.current
      })
    }, [N, s, L, y]),
    B = null !== (n = null == y ? void 0 : y.offset) && void 0 !== n ? n : 0,
    H = (0, o.default)([c.default], () => {
      if (null == b.result) return [];
      let e = b.result.messages,
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
    }, [b.result]),
    G = l.useMemo(() => {
      var e, t, n, a;
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
        totalResults: null !== (a = b.result.total_results) && void 0 !== a ? a : 0,
        hasError: !1,
        showBlockedResults: !1,
        showNoResultsAlt: !1
      }
    }, [b.result, B]);
  return null == D || null == U || null == G ? null : (0, a.jsxs)("div", {
    className: i(v.container, M),
    style: {
      backgroundColor: w
    },
    children: [(0, a.jsx)(_.default, {
      guildId: N,
      userId: s,
      onNavigate: R
    }), (0, a.jsx)(u.AdvancedScroller, {
      className: i(x.innerContainer),
      ref: j,
      onScroll: k,
      children: (0, a.jsx)(m.default, {
        searchResults: H,
        search: G,
        searchId: s,
        renderEmbeds: !0,
        blockCount: 0,
        scrollTo: () => {},
        onChangePage: V
      })
    })]
  })
}