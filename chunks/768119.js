let r;
var i,
    a = n(733860);
var o = n(392711),
    s = n.n(o),
    l = n(442837),
    u = n(433517),
    c = n(570140),
    d = n(840877),
    _ = n(952537),
    E = n(592125),
    f = n(430824),
    h = n(981631);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let m = 0.05,
    I = {},
    T = !1;
function g(e) {
    let { searchId: t, searchType: n } = e;
    null != t && (L = t), (T = !0), (r = n);
}
function S() {
    (T = !1), (r = void 0);
}
function A(e) {
    return (
        null == I[e] &&
            (I[e] = {
                searchId: e,
                searchType: v(e),
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
            }),
        I[e]
    );
}
function v(e) {
    return e === h.aib.DMS ? h.aib.DMS : e === h.I_8 ? h.aib.FAVORITES : null != f.Z.getGuild(e) ? h.aib.GUILD : null != E.Z.getChannel(e) ? h.aib.CHANNEL : null;
}
function N(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    if (null == e) return n;
    let r = I[e];
    return null == r ? n : t(r);
}
let O = 'SearchStore',
    R = 'tokenized',
    C = !1,
    y = {},
    L = null;
function b(e) {
    let { searchId: t, editorState: n } = e;
    A(t).editorState = n;
}
function D(e) {
    let { searchId: t } = e;
    null != t && A(t);
}
function M(e) {
    var t, n;
    let { queryString: r, searchId: i, query: a } = e,
        o = A(i);
    null != o.searchFetcher && (o.searchFetcher.cancel(), (o.searchFetcher = null));
    let l = i,
        u = o.searchType,
        f = new d.ZP(l, u, a);
    (o.searchFetcher = f),
        (o.isSearching = !0),
        (o.rawResults = null),
        (o.analyticsId = null),
        (o.query = s().omit(a, 'type')),
        (o.offset = null !== (n = a.offset) && void 0 !== n ? n : 0),
        (o.showBlockedResults = !1),
        P({
            type: 'SEARCH_ADD_HISTORY',
            searchId: i,
            query: r
        });
    let p = i === h.I_8 ? (null === (t = E.Z.getChannel(l)) || void 0 === t ? void 0 : t.guild_id) : u === h.aib.GUILD ? i : null;
    f.fetch(
        (e) => {
            var t, n;
            c.Z.dispatch({
                type: 'SEARCH_FINISH',
                searchId: i,
                guildId: p,
                analyticsId: e.body.analytics_id,
                totalResults: e.body.total_results,
                messages: e.body.messages,
                threads: null !== (t = e.body.threads) && void 0 !== t ? t : [],
                members: (null !== (n = e.body.members) && void 0 !== n ? n : []).map((e) => (0, _.Z)(e)),
                hasError: !1,
                doingHistoricalIndex: e.body.doing_deep_historical_index,
                documentsIndexed: e.body.documents_indexed
            });
        },
        () => {
            c.Z.dispatch({
                type: 'SEARCH_INDEXING',
                searchId: i
            });
        },
        () => {
            c.Z.dispatch({
                type: 'SEARCH_FINISH',
                searchId: i,
                guildId: p,
                messages: [],
                threads: [],
                members: [],
                totalResults: 0,
                analyticsId: null,
                hasError: !0,
                doingHistoricalIndex: !1,
                documentsIndexed: 0
            });
        }
    );
}
function P(e) {
    var t;
    let { searchId: n, query: r } = e;
    if ('string' != typeof r || '' === (r = r.trim())) return;
    let i = (y[n] = null !== (t = y[n]) && void 0 !== t ? t : []),
        a = i.indexOf(r);
    -1 !== a ? (i.splice(a, 1), i.unshift(r)) : null != i[0] && '' !== i[0] && r.startsWith(i[0]) ? (i[0] = r) : a < 0 && i.unshift(r), i.length > 5 && i.splice(5, i.length), u.K.set(O, { history: y });
}
function U(e) {
    let { searchId: t } = e,
        n = A(t);
    (n.isIndexing = !0), (n.isHistoricalIndexing = !0), (n.isSearching = !1);
}
function w(e) {
    let { searchId: t } = e,
        n = A(t);
    (n.isSearching = !1), (n.isIndexing = !1), (n.isHistoricalIndexing = e.doingHistoricalIndex || !1), (n.searchFetcher = null), (n.totalResults = e.totalResults), (n.hasError = e.hasError), (n.analyticsId = e.analyticsId), (n.documentsIndexed = null != e.documentsIndexed ? e.documentsIndexed : 0), (n.showNoResultsAlt = Math.random() < m), (n.rawResults = e.messages), null == n.query && (n.hasError = !0);
}
function x(e) {
    let { searchId: t } = e,
        n = I[t];
    if (null == n) return !1;
    null != n.searchFetcher && n.searchFetcher.cancel(), delete I[t];
}
function G(e) {
    if (e === L) return !1;
    null != e && null == I[e] && A(e), (L = e);
}
function k(e) {
    let { guildId: t, channelId: n } = e;
    G(null != t ? t : n);
}
function B(e) {
    let { searchId: t } = e;
    G(t);
}
function F(e) {
    let { searchId: t } = e;
    null == t ? (u.K.remove(O), (y = {})) : (delete y[t], u.K.set(O, { history: y }));
}
function Z(e) {
    let { searchId: t, query: n } = e;
    null != y[t] && ((y[t] = y[t].filter((e) => e !== n)), u.K.set(O, { history: y }));
}
function V(e) {
    return (
        Object.keys(e).forEach((t) => {
            Array.isArray(e[t]) && (e[t] = e[t].filter((e) => 'string' == typeof e && e.trim())), (!Array.isArray(e[t]) || 0 === e[t].length) && delete e[t];
        }),
        e
    );
}
function H(e) {
    let { searchId: t, showBlocked: n } = e;
    A(t).showBlockedResults = n;
}
function Y() {
    Object.keys(I).forEach((e) => {
        null != I[e] && (I[e].searchType = v(e));
    });
}
function j() {
    u.K.remove(O), (y = {});
}
function W() {
    return null != L && x({ searchId: L });
}
class K extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(f.Z, E.Z);
        let e = u.K.get(O);
        (null == e ? void 0 : e.history) != null && (y = V(e.history)), (C = !!u.K.get(R));
    }
    isOpen() {
        return T;
    }
    getCurrentSearchModalType() {
        return r;
    }
    getCurrentSearchId() {
        return L;
    }
    isActive() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : L;
        return null != e && (this.isIndexing(e) || this.isSearching(e) || this.hasResults(e));
    }
    isTokenized() {
        return C;
    }
    getSearchType(e) {
        return N(null != e ? e : L, (e) => e.searchType);
    }
    getRawResults(e) {
        return N(e, (e) => e.rawResults);
    }
    hasResults(e) {
        return null != N(e, (e) => e.rawResults);
    }
    isIndexing(e) {
        return N(e, (e) => e.isIndexing) || !1;
    }
    isHistoricalIndexing(e) {
        return N(e, (e) => e.isHistoricalIndexing) || !1;
    }
    isSearching(e) {
        return N(e, (e) => e.isSearching) || !1;
    }
    getAnalyticsId(e) {
        return N(e, (e) => e.analyticsId);
    }
    getResultsBlocked(e) {
        return N(e, (e) => e.resultsBlocked);
    }
    getDocumentsIndexedCount(e) {
        return N(e, (e) => e.documentsIndexed);
    }
    getSearchFetcher(e) {
        return N(e, (e) => e.searchFetcher);
    }
    getTotalResults(e) {
        var t;
        return null !== (t = N(e, (e) => e.totalResults)) && void 0 !== t ? t : 0;
    }
    getEditorState(e) {
        return N(e, (e) => e.editorState);
    }
    getHistory(e) {
        return y[e];
    }
    getOffset(e) {
        var t;
        return null !== (t = N(e, (e) => e.offset)) && void 0 !== t ? t : 0;
    }
    getQuery(e) {
        return N(e, (e) => e.query);
    }
    hasError(e) {
        var t;
        return null !== (t = N(e, (e) => e.hasError)) && void 0 !== t && t;
    }
    shouldShowBlockedResults(e) {
        var t;
        return null !== (t = N(e, (e) => e.showBlockedResults, !1)) && void 0 !== t && t;
    }
    shouldShowNoResultsAlt(e) {
        var t;
        return null !== (t = N(e, (e) => e.showNoResultsAlt, !1)) && void 0 !== t && t;
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
        };
    }
}
p(K, 'displayName', 'SearchStore'),
    (t.Z = new K(c.Z, {
        SEARCH_START: M,
        SEARCH_INDEXING: U,
        SEARCH_FINISH: w,
        SEARCH_EDITOR_STATE_CLEAR: x,
        SEARCH_ENSURE_SEARCH_STATE: D,
        SEARCH_EDITOR_STATE_CHANGE: b,
        SEARCH_SET_SHOW_BLOCKED_RESULTS: H,
        SEARCH_SCREEN_OPEN: B,
        CHANNEL_SELECT: k,
        CHANNEL_TOGGLE_MEMBERS_SECTION: W,
        SEARCH_CLEAR_HISTORY: F,
        SEARCH_REMOVE_HISTORY: Z,
        SEARCH_ADD_HISTORY: P,
        LOGOUT: j,
        CONNECTION_OPEN: Y,
        SEARCH_MODAL_OPEN: g,
        SEARCH_MODAL_CLOSE: S
    }));
