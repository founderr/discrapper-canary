n(733860);
var r,
    i,
    a,
    s,
    o = n(392711),
    l = n.n(o),
    u = n(442837),
    c = n(433517),
    d = n(570140),
    _ = n(840877),
    E = n(952537),
    f = n(592125),
    h = n(430824),
    p = n(981631);
let I = {};
function m(e) {
    return (
        null == I[e] &&
            (I[e] = {
                searchId: e,
                searchType: T(e),
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
function T(e) {
    return e === p.aib.DMS ? p.aib.DMS : e === p.I_8 ? p.aib.FAVORITES : null != h.Z.getGuild(e) ? p.aib.GUILD : null != f.Z.getChannel(e) ? p.aib.CHANNEL : null;
}
function S(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    if (null == e) return n;
    let r = I[e];
    return null == r ? n : t(r);
}
let g = 'SearchStore',
    A = !1,
    N = {},
    O = null;
function R(e) {
    var t;
    let { searchId: n, query: r } = e;
    if ('string' != typeof r || '' === (r = r.trim())) return;
    let i = (N[n] = null !== (t = N[n]) && void 0 !== t ? t : []),
        a = i.indexOf(r);
    -1 !== a ? (i.splice(a, 1), i.unshift(r)) : null != i[0] && '' !== i[0] && r.startsWith(i[0]) ? (i[0] = r) : a < 0 && i.unshift(r), i.length > 5 && i.splice(5, i.length), c.K.set(g, { history: N });
}
function v(e) {
    let { searchId: t } = e,
        n = I[t];
    if (null == n) return !1;
    null != n.searchFetcher && n.searchFetcher.cancel(), delete I[t];
}
function C(e) {
    if (e === O) return !1;
    null != e && null == I[e] && m(e), (O = e);
}
class L extends (r = u.ZP.Store) {
    initialize() {
        this.waitFor(h.Z, f.Z);
        let e = c.K.get(g);
        if ((null == e ? void 0 : e.history) != null) {
            var t;
            Object.keys((t = e.history)).forEach((e) => {
                Array.isArray(t[e]) && (t[e] = t[e].filter((e) => 'string' == typeof e && e.trim())), (!Array.isArray(t[e]) || 0 === t[e].length) && delete t[e];
            }),
                (N = t);
        }
        A = !!c.K.get('tokenized');
    }
    getCurrentSearchId() {
        return O;
    }
    isActive() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O;
        return null != e && (this.isIndexing(e) || this.isSearching(e) || this.hasResults(e));
    }
    isTokenized() {
        return A;
    }
    getSearchType(e) {
        return S(null != e ? e : O, (e) => e.searchType);
    }
    getRawResults(e) {
        return S(e, (e) => e.rawResults);
    }
    hasResults(e) {
        return null != S(e, (e) => e.rawResults);
    }
    isIndexing(e) {
        return S(e, (e) => e.isIndexing) || !1;
    }
    isHistoricalIndexing(e) {
        return S(e, (e) => e.isHistoricalIndexing) || !1;
    }
    isSearching(e) {
        return S(e, (e) => e.isSearching) || !1;
    }
    getAnalyticsId(e) {
        return S(e, (e) => e.analyticsId);
    }
    getResultsBlocked(e) {
        return S(e, (e) => e.resultsBlocked);
    }
    getDocumentsIndexedCount(e) {
        return S(e, (e) => e.documentsIndexed);
    }
    getSearchFetcher(e) {
        return S(e, (e) => e.searchFetcher);
    }
    getTotalResults(e) {
        var t;
        return null !== (t = S(e, (e) => e.totalResults)) && void 0 !== t ? t : 0;
    }
    getEditorState(e) {
        return S(e, (e) => e.editorState);
    }
    getHistory(e) {
        return N[e];
    }
    getOffset(e) {
        var t;
        return null !== (t = S(e, (e) => e.offset)) && void 0 !== t ? t : 0;
    }
    getQuery(e) {
        return S(e, (e) => e.query);
    }
    hasError(e) {
        var t;
        return null !== (t = S(e, (e) => e.hasError)) && void 0 !== t && t;
    }
    shouldShowBlockedResults(e) {
        var t;
        return null !== (t = S(e, (e) => e.showBlockedResults, !1)) && void 0 !== t && t;
    }
    shouldShowNoResultsAlt(e) {
        var t;
        return null !== (t = S(e, (e) => e.showNoResultsAlt, !1)) && void 0 !== t && t;
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
(s = 'SearchStore'),
    (a = 'displayName') in (i = L)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new L(d.Z, {
        SEARCH_START: function (e) {
            var t, n;
            let { queryString: r, searchId: i, query: a } = e,
                s = m(i);
            null != s.searchFetcher && (s.searchFetcher.cancel(), (s.searchFetcher = null));
            let o = s.searchType,
                u = new _.ZP(i, o, a);
            (s.searchFetcher = u),
                (s.isSearching = !0),
                (s.rawResults = null),
                (s.analyticsId = null),
                (s.query = l().omit(a, 'type')),
                (s.offset = null !== (n = a.offset) && void 0 !== n ? n : 0),
                (s.showBlockedResults = !1),
                R({
                    type: 'SEARCH_ADD_HISTORY',
                    searchId: i,
                    query: r
                });
            let c = i === p.I_8 ? (null === (t = f.Z.getChannel(i)) || void 0 === t ? void 0 : t.guild_id) : o === p.aib.GUILD ? i : null;
            u.fetch(
                (e) => {
                    var t, n;
                    d.Z.dispatch({
                        type: 'SEARCH_FINISH',
                        searchId: i,
                        guildId: c,
                        analyticsId: e.body.analytics_id,
                        totalResults: e.body.total_results,
                        messages: e.body.messages,
                        threads: null !== (t = e.body.threads) && void 0 !== t ? t : [],
                        members: (null !== (n = e.body.members) && void 0 !== n ? n : []).map((e) => (0, E.Z)(e)),
                        hasError: !1,
                        doingHistoricalIndex: e.body.doing_deep_historical_index,
                        documentsIndexed: e.body.documents_indexed
                    });
                },
                () => {
                    d.Z.dispatch({
                        type: 'SEARCH_INDEXING',
                        searchId: i
                    });
                },
                () => {
                    d.Z.dispatch({
                        type: 'SEARCH_FINISH',
                        searchId: i,
                        guildId: c,
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
        },
        SEARCH_INDEXING: function (e) {
            let { searchId: t } = e,
                n = m(t);
            (n.isIndexing = !0), (n.isHistoricalIndexing = !0), (n.isSearching = !1);
        },
        SEARCH_FINISH: function (e) {
            let { searchId: t } = e,
                n = m(t);
            (n.isSearching = !1), (n.isIndexing = !1), (n.isHistoricalIndexing = e.doingHistoricalIndex || !1), (n.searchFetcher = null), (n.totalResults = e.totalResults), (n.hasError = e.hasError), (n.analyticsId = e.analyticsId), (n.documentsIndexed = null != e.documentsIndexed ? e.documentsIndexed : 0), (n.showNoResultsAlt = 0.05 > Math.random()), (n.rawResults = e.messages), null == n.query && (n.hasError = !0);
        },
        SEARCH_EDITOR_STATE_CLEAR: v,
        SEARCH_ENSURE_SEARCH_STATE: function (e) {
            let { searchId: t } = e;
            null != t && m(t);
        },
        SEARCH_EDITOR_STATE_CHANGE: function (e) {
            let { searchId: t, editorState: n } = e;
            m(t).editorState = n;
        },
        SEARCH_SET_SHOW_BLOCKED_RESULTS: function (e) {
            let { searchId: t, showBlocked: n } = e;
            m(t).showBlockedResults = n;
        },
        SEARCH_SCREEN_OPEN: function (e) {
            let { searchId: t } = e;
            C(t);
        },
        CHANNEL_SELECT: function (e) {
            let { guildId: t, channelId: n } = e;
            C(null != t ? t : n);
        },
        CHANNEL_TOGGLE_MEMBERS_SECTION: function () {
            return null != O && v({ searchId: O });
        },
        SEARCH_CLEAR_HISTORY: function (e) {
            let { searchId: t } = e;
            null == t ? (c.K.remove(g), (N = {})) : (delete N[t], c.K.set(g, { history: N }));
        },
        SEARCH_REMOVE_HISTORY: function (e) {
            let { searchId: t, query: n } = e;
            null != N[t] && ((N[t] = N[t].filter((e) => e !== n)), c.K.set(g, { history: N }));
        },
        SEARCH_ADD_HISTORY: R,
        LOGOUT: function () {
            c.K.remove(g), (N = {});
        },
        CONNECTION_OPEN: function () {
            Object.keys(I).forEach((e) => {
                null != I[e] && (I[e].searchType = T(e));
            });
        }
    }));
