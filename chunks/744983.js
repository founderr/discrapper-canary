"use strict";
let i;
n.r(t), n.d(t, {
  default: function() {
    return O
  }
}), n("843762");
var s = n("917351"),
  r = n.n(s),
  a = n("446674"),
  o = n("95410"),
  l = n("913144"),
  u = n("390933"),
  d = n("25932"),
  c = n("42203"),
  f = n("305961"),
  _ = n("18494"),
  h = n("49111");
let g = {},
  m = !1;

function E(e) {
  return null == g[e] && (g[e] = {
    searchId: e,
    searchType: p(e),
    isIndexing: !1,
    isHistoricalIndexing: !1,
    isSearching: !1,
    analyticsId: null,
    editorState: null,
    offset: 0,
    query: null,
    hasError: !1,
    searchFetcher: null,
    rawResults: null,
    totalResults: 0,
    documentsIndexed: 0,
    resultsBlocked: 0,
    showBlockedResults: !1,
    showNoResultsAlt: !1
  }), g[e]
}

function p(e) {
  return e === h.SearchTypes.DMS ? h.SearchTypes.DMS : null != f.default.getGuild(e) ? h.SearchTypes.GUILD : null != c.default.getChannel(e) ? h.SearchTypes.CHANNEL : null
}

function v(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
  if (null == e) return n;
  let i = g[e];
  return null == i ? n : t(i)
}
let S = "SearchStore",
  T = !1,
  I = {},
  C = null;

function A(e) {
  var t;
  let {
    searchId: n,
    query: i
  } = e;
  if ("string" != typeof i || "" === (i = i.trim())) return;
  let s = I[n] = null !== (t = I[n]) && void 0 !== t ? t : [],
    r = s.indexOf(i); - 1 !== r ? (s.splice(r, 1), s.unshift(i)) : null != s[0] && "" !== s[0] && i.startsWith(s[0]) ? s[0] = i : r < 0 && s.unshift(i), s.length > 5 && s.splice(5, s.length), o.default.set(S, {
    history: I
  })
}

function y(e) {
  let {
    searchId: t
  } = e, n = g[t];
  if (null == n) return !1;
  null != n.searchFetcher && n.searchFetcher.cancel(), delete g[t]
}

function N(e) {
  if (e === C) return !1;
  null != e && null == g[e] && E(e), C = e
}
class R extends a.default.Store {
  initialize() {
    this.waitFor(f.default, c.default);
    let e = o.default.get(S);
    if ((null == e ? void 0 : e.history) != null) {
      var t;
      Object.keys(t = e.history).forEach(e => {
        Array.isArray(t[e]) && (t[e] = t[e].filter(e => "string" == typeof e && e.trim())), (!Array.isArray(t[e]) || 0 === t[e].length) && delete t[e]
      }), I = t
    }
    T = !!o.default.get("tokenized")
  }
  isOpen() {
    return m
  }
  getCurrentSearchModalType() {
    return i
  }
  getCurrentSearchId() {
    return C
  }
  isActive() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : C;
    return null != e && (this.isIndexing(e) || this.isSearching(e) || this.hasResults(e))
  }
  isTokenized() {
    return T
  }
  getSearchType(e) {
    return v(null != e ? e : C, e => e.searchType)
  }
  getRawResults(e) {
    return v(e, e => e.rawResults)
  }
  hasResults(e) {
    return null != v(e, e => e.rawResults)
  }
  isIndexing(e) {
    return v(e, e => e.isIndexing) || !1
  }
  isHistoricalIndexing(e) {
    return v(e, e => e.isHistoricalIndexing) || !1
  }
  isSearching(e) {
    return v(e, e => e.isSearching) || !1
  }
  getAnalyticsId(e) {
    return v(e, e => e.analyticsId)
  }
  getResultsBlocked(e) {
    return v(e, e => e.resultsBlocked)
  }
  getDocumentsIndexedCount(e) {
    return v(e, e => e.documentsIndexed)
  }
  getSearchFetcher(e) {
    return v(e, e => e.searchFetcher)
  }
  getTotalResults(e) {
    var t;
    return null !== (t = v(e, e => e.totalResults)) && void 0 !== t ? t : 0
  }
  getEditorState(e) {
    return v(e, e => e.editorState)
  }
  getHistory(e) {
    return I[e]
  }
  getOffset(e) {
    var t;
    return null !== (t = v(e, e => e.offset)) && void 0 !== t ? t : 0
  }
  getQuery(e) {
    return v(e, e => e.query)
  }
  hasError(e) {
    var t;
    return null !== (t = v(e, e => e.hasError)) && void 0 !== t && t
  }
  shouldShowBlockedResults(e) {
    var t;
    return null !== (t = v(e, e => e.showBlockedResults, !1)) && void 0 !== t && t
  }
  shouldShowNoResultsAlt(e) {
    var t;
    return null !== (t = v(e, e => e.showNoResultsAlt, !1)) && void 0 !== t && t
  }
  getResultsState(e) {
    return {
      isSearching: this.isSearching(e),
      isIndexing: this.isIndexing(e),
      isHistoricalIndexing: this.isHistoricalIndexing(e),
      documentsIndexed: this.getDocumentsIndexedCount(e),
      offset: this.getOffset(e),
      totalResults: this.getTotalResults(e),
      hasError: this.hasError(e),
      showBlockedResults: this.shouldShowBlockedResults(e),
      showNoResultsAlt: this.shouldShowNoResultsAlt(e)
    }
  }
}
R.displayName = "SearchStore";
var O = new R(l.default, {
  SEARCH_START: function(e) {
    var t, n, i;
    let {
      queryString: s,
      searchId: a,
      query: o
    } = e, f = E(a);
    null != f.searchFetcher && (f.searchFetcher.cancel(), f.searchFetcher = null);
    let g = a,
      m = f.searchType;
    a === h.FAVORITES && (g = null !== (n = _.default.getChannelId()) && void 0 !== n ? n : a, m = h.SearchTypes.CHANNEL);
    let p = new u.default(g, m, o);
    f.searchFetcher = p, f.isSearching = !0, f.rawResults = null, f.analyticsId = null, f.query = r.omit(o, "type"), f.offset = null !== (i = o.offset) && void 0 !== i ? i : 0, f.showBlockedResults = !1, A({
      type: "SEARCH_ADD_HISTORY",
      searchId: a,
      query: s
    });
    let v = a === h.FAVORITES ? null === (t = c.default.getChannel(g)) || void 0 === t ? void 0 : t.guild_id : m === h.SearchTypes.GUILD ? a : null;
    p.fetch(e => {
      var t, n;
      l.default.dispatch({
        type: "SEARCH_FINISH",
        searchId: a,
        guildId: v,
        analyticsId: e.body.analytics_id,
        totalResults: e.body.total_results,
        messages: e.body.messages,
        threads: null !== (t = e.body.threads) && void 0 !== t ? t : [],
        members: (null !== (n = e.body.members) && void 0 !== n ? n : []).map(e => (0, d.default)(e)),
        hasError: !1,
        doingHistoricalIndex: e.body.doing_deep_historical_index,
        documentsIndexed: e.body.documents_indexed
      })
    }, () => {
      l.default.dispatch({
        type: "SEARCH_INDEXING",
        searchId: a
      })
    }, () => {
      l.default.dispatch({
        type: "SEARCH_FINISH",
        searchId: a,
        guildId: v,
        messages: [],
        threads: [],
        members: [],
        totalResults: 0,
        analyticsId: null,
        hasError: !0,
        doingHistoricalIndex: !1,
        documentsIndexed: 0
      })
    })
  },
  SEARCH_INDEXING: function(e) {
    let {
      searchId: t
    } = e, n = E(t);
    n.isIndexing = !0, n.isHistoricalIndexing = !0, n.isSearching = !1
  },
  SEARCH_FINISH: function(e) {
    let {
      searchId: t
    } = e, n = E(t);
    n.isSearching = !1, n.isIndexing = !1, n.isHistoricalIndexing = e.doingHistoricalIndex || !1, n.searchFetcher = null, n.totalResults = e.totalResults, n.hasError = e.hasError, n.analyticsId = e.analyticsId, n.documentsIndexed = null != e.documentsIndexed ? e.documentsIndexed : 0, n.showNoResultsAlt = .05 > Math.random(), n.rawResults = e.messages;
    let i = n.query;
    null == i && (n.hasError = !0)
  },
  SEARCH_EDITOR_STATE_CLEAR: y,
  SEARCH_ENSURE_SEARCH_STATE: function(e) {
    let {
      searchId: t
    } = e;
    null != t && E(t)
  },
  SEARCH_EDITOR_STATE_CHANGE: function(e) {
    let {
      searchId: t,
      editorState: n
    } = e;
    E(t).editorState = n
  },
  SEARCH_SET_SHOW_BLOCKED_RESULTS: function(e) {
    let {
      searchId: t,
      showBlocked: n
    } = e, i = E(t);
    i.showBlockedResults = n
  },
  SEARCH_SCREEN_OPEN: function(e) {
    let {
      searchId: t
    } = e;
    N(t)
  },
  CHANNEL_SELECT: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    N(null != t ? t : n)
  },
  CHANNEL_TOGGLE_MEMBERS_SECTION: function() {
    return null != C && y({
      searchId: C
    })
  },
  SEARCH_CLEAR_HISTORY: function(e) {
    let {
      searchId: t
    } = e;
    null == t ? (o.default.remove(S), I = {}) : (delete I[t], o.default.set(S, {
      history: I
    }))
  },
  SEARCH_REMOVE_HISTORY: function(e) {
    let {
      searchId: t,
      query: n
    } = e;
    null != I[t] && (I[t] = I[t].filter(e => e !== n), o.default.set(S, {
      history: I
    }))
  },
  SEARCH_ADD_HISTORY: A,
  LOGOUT: function() {
    o.default.remove(S), I = {}
  },
  CONNECTION_OPEN: function() {
    Object.keys(g).forEach(e => {
      null != g[e] && (g[e].searchType = p(e))
    })
  },
  SEARCH_MODAL_OPEN: function(e) {
    let {
      searchId: t,
      searchType: n
    } = e;
    null != t && (C = t), m = !0, i = n
  },
  SEARCH_MODAL_CLOSE: function() {
    m = !1, i = void 0
  }
})