n.d(t, {
    Z: function () {
        return R;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    a = n(120356),
    l = n.n(a),
    r = n(392711),
    o = n.n(r),
    c = n(442837),
    u = n(481060),
    d = n(447543),
    h = n(603263),
    p = n(367907),
    m = n(210887),
    _ = n(695346),
    f = n(768119),
    E = n(944486),
    g = n(585483),
    C = n(251285),
    I = n(406326),
    T = n(994463),
    x = n(619753),
    S = n(981631),
    v = n(689938),
    N = n(343662);
function A(e, t, n) {
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
class Z extends s.Component {
    componentDidMount() {
        this.autoAnalytics();
    }
    componentDidUpdate(e) {
        (this.props.searchAnalyticsId !== e.searchAnalyticsId || this.props.searchOffset !== e.searchOffset) && this.autoAnalytics(e.searchAnalyticsId);
    }
    render() {
        return null;
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            A(this, 'autoAnalytics', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                if (null == t.props.searchAnalyticsId) return;
                let n = 0,
                    i = 0,
                    s = 0,
                    a = 0;
                null != t.props.searchResults &&
                    o()(t.props.searchResults)
                        .flatten()
                        .filter((e) => e.isSearchHit)
                        .forEach((e) => {
                            null != e.content && '' !== e.content && (n++, /https?:\/\/[^\s]+/.test(e.content) && a++), null != e.embeds && e.embeds.length > 0 && s++, null != e.attachments && e.attachments.length > 0 && i++;
                        }),
                    p.ZP.trackWithMetadata(S.rMx.SEARCH_RESULT_VIEWED, {
                        search_type: t.props.searchType,
                        search_id: t.props.searchAnalyticsId,
                        prev_search_id: e !== t.props.searchAnalyticsId ? e : null,
                        is_error: t.props.searchHasError,
                        limit: t.props.searchLimit,
                        offset: t.props.searchOffset,
                        page: Math.floor(t.props.searchOffset / t.props.searchLimit) + 1,
                        total_results: t.props.searchTotalResults,
                        page_results: null != t.props.searchResults ? t.props.searchResults.length : null,
                        is_indexing: t.props.searchIsIndexing,
                        page_num_messages: n,
                        page_num_links: a,
                        page_num_embeds: s,
                        page_num_attach: i
                    });
            });
    }
}
let M = (e) => {
    let { children: t } = e;
    return (0, i.jsx)('div', {
        className: N.emptyResultsWrap,
        children: (0, i.jsx)('div', {
            className: N.emptyResultsContent,
            children: t
        })
    });
};
class b extends s.PureComponent {
    componentDidMount() {
        g.S.subscribe(S.CkL.SEARCH_RESULTS_CLOSE, this.handleSearchResultsClose);
    }
    componentWillUnmount() {
        g.S.unsubscribe(S.CkL.SEARCH_RESULTS_CLOSE, this.handleSearchResultsClose);
    }
    componentDidUpdate(e) {
        let { search: t } = e;
        if (this.props.search.showBlockedResults !== t.showBlockedResults) {
            let e = this.scrollerRef.current;
            if (null == e) return;
            e.scrollToBottom();
        }
        let n = f.Z.getQuery(this.props.searchId);
        JSON.stringify(n) !== JSON.stringify(this.state.searchQuery) &&
            this.setState({
                searchQuery: n,
                searchMode:
                    (null == n ? void 0 : n.sort_by) != null && null != n.sort_order
                        ? h.Vj({
                              sort_by: n.sort_by,
                              sort_order: n.sort_order
                          })
                        : S.QIO.NEWEST
            });
    }
    render() {
        let { searchAnalyticsId: e, searchType: t, searchResults: n } = this.props,
            { offset: s, hasError: a, totalResults: l, isHistoricalIndexing: r } = this.props.search;
        return (0, i.jsxs)('section', {
            className: N.searchResultsWrap,
            'aria-label': v.Z.Messages.SEARCH_RESULTS_SECTION_LABEL,
            children: [
                this.renderHeader(),
                (0, i.jsx)(u.AdvancedScroller, {
                    ref: this.scrollerRef,
                    className: N.scroller,
                    children: this.renderContent()
                }),
                (0, i.jsx)(Z, {
                    searchType: t,
                    searchAnalyticsId: e,
                    searchResults: n,
                    searchOffset: s,
                    searchLimit: S.vpv,
                    searchHasError: a,
                    searchTotalResults: l,
                    searchIsIndexing: r
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            A(this, 'state', {
                searchMode: S.QIO.NEWEST,
                searchQuery: null
            }),
            A(this, 'scrollerRef', s.createRef()),
            A(this, 'scrollTo', (e, t, n) => {
                let i = this.scrollerRef.current;
                if (null == i) return;
                let s = i.getScrollerState().scrollTop - e;
                i.scrollTo({
                    to: s,
                    animate: t,
                    callback: n
                });
            }),
            A(this, 'selectChannel', (e) => {
                e !== E.Z.getChannelId() && d.Z.transitionToInviteChannelSync(e);
            }),
            A(this, 'searchPrevious', () => {
                let {
                    searchId: e,
                    search: { isSearching: t }
                } = this.props;
                !t && h.jn(e);
            }),
            A(this, 'searchNext', () => {
                let {
                    searchId: e,
                    search: { isSearching: t }
                } = this.props;
                !t && h.m$(e);
            }),
            A(this, 'handleSearchResultsClose', () => {
                let { searchId: e } = this.props;
                h.qt(e);
            }),
            A(this, 'searchByMode', (e) => {
                let {
                        searchId: t,
                        search: { isSearching: n }
                    } = this.props,
                    { searchMode: i } = this.state;
                e !== i &&
                    !n &&
                    (p.ZP.trackWithMetadata(S.rMx.SEARCH_RESULT_SORT_CHANGED, {
                        search_id: f.Z.getAnalyticsId(t),
                        new_sort_type: e
                    }),
                    h.Nz(t, e),
                    this.setState({ searchMode: e }));
            }),
            A(this, 'toggleShowBlockedMessages', () => {
                let {
                    searchId: e,
                    search: { showBlockedResults: t }
                } = this.props;
                h.QY(e, !t);
            }),
            A(this, 'renderHeader', () => {
                let { searchMode: e } = this.state,
                    { totalResults: t, isSearching: n, isHistoricalIndexing: s, documentsIndexed: a } = this.props.search;
                return (0, i.jsx)(I.Z, {
                    searchMode: e,
                    searchByMode: this.searchByMode,
                    totalResults: t,
                    isSearching: n,
                    isIndexing: s,
                    documentsIndexed: a
                });
            }),
            A(this, 'renderIndexing', () => {
                let e = f.Z.getSearchType(this.props.searchId) === S.aib.GUILD ? v.Z.Messages.SEARCH_GUILD_STILL_INDEXING : v.Z.Messages.SEARCH_DM_STILL_INDEXING;
                return (0, i.jsxs)(M, {
                    children: [
                        (0, i.jsx)(T.Z, {}),
                        (0, i.jsx)('div', {
                            className: (N.emptyResultsText, N.stillIndexing),
                            children: e
                        })
                    ]
                });
            }),
            A(this, 'renderNoResults', () => {
                let { showNoResultsAlt: e } = this.props.search,
                    t = e ? v.Z.Messages.SEARCH_NO_RESULTS_ALT : v.Z.Messages.SEARCH_NO_RESULTS;
                return (0, i.jsxs)(M, {
                    children: [
                        (0, i.jsx)('div', { className: l()(N.noResultsImage, { [N.alt]: e }) }),
                        (0, i.jsx)('div', {
                            className: l()(N.emptyResultsText, N.noResults, { [N.alt]: e }),
                            children: t
                        })
                    ]
                });
            }),
            A(this, 'renderError', () =>
                (0, i.jsxs)(M, {
                    children: [
                        (0, i.jsx)('div', { className: N.errorImage }),
                        (0, i.jsx)('div', {
                            className: l()(N.emptyResultsText, N.errorMessage),
                            children: v.Z.Messages.SEARCH_ERROR
                        })
                    ]
                })
            ),
            A(this, 'renderContent', () => {
                let { searchResults: e, blockCount: t } = this.props,
                    { totalResults: n, isSearching: s, isIndexing: a, hasError: l } = this.props.search;
                return l
                    ? this.renderError()
                    : a
                      ? this.renderIndexing()
                      : s
                        ? null
                        : n > 0
                          ? (0, i.jsx)(x.Z, {
                                search: this.props.search,
                                searchResults: e,
                                blockCount: t,
                                searchId: this.props.searchId,
                                renderEmbeds: this.props.renderEmbeds,
                                scrollTo: this.scrollTo
                            })
                          : this.renderNoResults();
            });
    }
}
function R(e) {
    let { searchId: t } = e,
        n = (0, c.cj)([f.Z], () => f.Z.getResultsState(t), [t]);
    return (0, i.jsx)(b, {
        searchId: t,
        search: n,
        ...(0, c.cj)(
            [f.Z],
            () => ({
                searchAnalyticsId: f.Z.getAnalyticsId(t),
                searchType: f.Z.getSearchType()
            }),
            [t]
        ),
        ...(0, C.Z)(t),
        renderEmbeds: _.NA.useSetting(),
        developerMode: _.Sb.useSetting(),
        ...(0, c.cj)([m.Z], () => {
            let { theme: e } = m.Z;
            return { theme: e };
        })
    });
}
