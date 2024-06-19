n.d(t, {
  Z: function() {
    return j
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(392711),
  o = n.n(r),
  c = n(442837),
  u = n(481060),
  d = n(447543),
  h = n(603263),
  m = n(367907),
  p = n(210887),
  E = n(695346),
  g = n(768119),
  f = n(944486),
  C = n(693580),
  _ = n(585483),
  I = n(251285),
  x = n(406326),
  T = n(619753),
  N = n(981631),
  Z = n(689938),
  S = n(762705);

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class A extends i.Component {
  componentDidMount() {
    this.autoAnalytics()
  }
  componentDidUpdate(e) {
    (this.props.searchAnalyticsId !== e.searchAnalyticsId || this.props.searchOffset !== e.searchOffset) && this.autoAnalytics(e.searchAnalyticsId)
  }
  render() {
    return null
  }
  constructor(...e) {
    var t;
    super(...e), t = this, v(this, "autoAnalytics", function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      if (null == t.props.searchAnalyticsId) return;
      let n = 0,
        l = 0,
        i = 0,
        s = 0;
      null != t.props.searchResults && o()(t.props.searchResults).flatten().filter(e => e.isSearchHit).forEach(e => {
        null != e.content && "" !== e.content && (n++, /https?:\/\/[^\s]+/.test(e.content) && s++), null != e.embeds && e.embeds.length > 0 && i++, null != e.attachments && e.attachments.length > 0 && l++
      }), m.ZP.trackWithMetadata(N.rMx.SEARCH_RESULT_VIEWED, {
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
        page_num_links: s,
        page_num_embeds: i,
        page_num_attach: l
      })
    })
  }
}
let M = e => {
  let {
    children: t
  } = e;
  return (0, l.jsx)("div", {
    className: S.emptyResultsWrap,
    children: (0, l.jsx)("div", {
      className: S.emptyResultsContent,
      children: t
    })
  })
};
class R extends i.PureComponent {
  componentDidMount() {
    _.S.subscribe(N.CkL.SEARCH_RESULTS_CLOSE, this.handleSearchResultsClose)
  }
  componentWillUnmount() {
    _.S.unsubscribe(N.CkL.SEARCH_RESULTS_CLOSE, this.handleSearchResultsClose)
  }
  componentDidUpdate(e) {
    let {
      search: t
    } = e;
    if (this.props.search.showBlockedResults !== t.showBlockedResults) {
      let e = this.scrollerRef.current;
      if (null == e) return;
      e.scrollToBottom()
    }
    let n = g.Z.getQuery(this.props.searchId);
    JSON.stringify(n) !== JSON.stringify(this.state.searchQuery) && this.setState({
      searchQuery: n,
      searchMode: (null == n ? void 0 : n.sort_by) != null && null != n.sort_order ? h.Vj({
        sort_by: n.sort_by,
        sort_order: n.sort_order
      }) : N.QIO.NEWEST
    })
  }
  render() {
    let {
      searchAnalyticsId: e,
      searchType: t,
      searchResults: n
    } = this.props, {
      offset: i,
      hasError: s,
      totalResults: a,
      isHistoricalIndexing: r
    } = this.props.search;
    return (0, l.jsxs)("section", {
      className: S.searchResultsWrap,
      "aria-label": Z.Z.Messages.SEARCH_RESULTS_SECTION_LABEL,
      children: [this.renderHeader(), (0, l.jsx)(u.AdvancedScroller, {
        ref: this.scrollerRef,
        className: S.scroller,
        children: this.renderContent()
      }), (0, l.jsx)(A, {
        searchType: t,
        searchAnalyticsId: e,
        searchResults: n,
        searchOffset: i,
        searchLimit: N.vpv,
        searchHasError: s,
        searchTotalResults: a,
        searchIsIndexing: r
      })]
    })
  }
  constructor(...e) {
    super(...e), v(this, "state", {
      searchMode: N.QIO.NEWEST,
      searchQuery: null
    }), v(this, "scrollerRef", i.createRef()), v(this, "scrollTo", (e, t, n) => {
      let l = this.scrollerRef.current;
      if (null == l) return;
      let i = l.getScrollerState().scrollTop - e;
      l.scrollTo({
        to: i,
        animate: t,
        callback: n
      })
    }), v(this, "selectChannel", e => {
      e !== f.Z.getChannelId() && d.Z.transitionToInviteChannelSync(e)
    }), v(this, "searchPrevious", () => {
      let {
        searchId: e,
        search: {
          isSearching: t
        }
      } = this.props;
      !t && h.jn(e)
    }), v(this, "searchNext", () => {
      let {
        searchId: e,
        search: {
          isSearching: t
        }
      } = this.props;
      !t && h.m$(e)
    }), v(this, "handleSearchResultsClose", () => {
      let {
        searchId: e
      } = this.props;
      h.qt(e)
    }), v(this, "searchByMode", e => {
      let {
        searchId: t,
        search: {
          isSearching: n
        }
      } = this.props, {
        searchMode: l
      } = this.state;
      e !== l && !n && (m.ZP.trackWithMetadata(N.rMx.SEARCH_RESULT_SORT_CHANGED, {
        search_id: g.Z.getAnalyticsId(t),
        new_sort_type: e
      }), h.Nz(t, e), this.setState({
        searchMode: e
      }))
    }), v(this, "toggleShowBlockedMessages", () => {
      let {
        searchId: e,
        search: {
          showBlockedResults: t
        }
      } = this.props;
      h.QY(e, !t)
    }), v(this, "renderHeader", () => {
      let {
        searchMode: e
      } = this.state, {
        totalResults: t,
        isSearching: n,
        isHistoricalIndexing: i,
        documentsIndexed: s
      } = this.props.search;
      return (0, l.jsx)(x.Z, {
        searchMode: e,
        searchByMode: this.searchByMode,
        totalResults: t,
        isSearching: n,
        isIndexing: i,
        documentsIndexed: s
      })
    }), v(this, "renderIndexing", () => {
      let e = g.Z.getSearchType(this.props.searchId) === N.aib.GUILD ? Z.Z.Messages.SEARCH_GUILD_STILL_INDEXING : Z.Z.Messages.SEARCH_DM_STILL_INDEXING;
      return (0, l.jsxs)(M, {
        children: [(0, l.jsx)(C.Z, {}), (0, l.jsx)("div", {
          className: (S.emptyResultsText, S.stillIndexing),
          children: e
        })]
      })
    }), v(this, "renderNoResults", () => {
      let {
        showNoResultsAlt: e
      } = this.props.search, t = e ? Z.Z.Messages.SEARCH_NO_RESULTS_ALT : Z.Z.Messages.SEARCH_NO_RESULTS;
      return (0, l.jsxs)(M, {
        children: [(0, l.jsx)("div", {
          className: a()(S.noResultsImage, {
            [S.alt]: e
          })
        }), (0, l.jsx)("div", {
          className: a()(S.emptyResultsText, S.noResults, {
            [S.alt]: e
          }),
          children: t
        })]
      })
    }), v(this, "renderError", () => (0, l.jsxs)(M, {
      children: [(0, l.jsx)("div", {
        className: S.errorImage
      }), (0, l.jsx)("div", {
        className: a()(S.emptyResultsText, S.errorMessage),
        children: Z.Z.Messages.SEARCH_ERROR
      })]
    })), v(this, "renderContent", () => {
      let {
        searchResults: e,
        blockCount: t
      } = this.props, {
        totalResults: n,
        isSearching: i,
        isIndexing: s,
        hasError: a
      } = this.props.search;
      return a ? this.renderError() : s ? this.renderIndexing() : i ? null : n > 0 ? (0, l.jsx)(T.Z, {
        search: this.props.search,
        searchResults: e,
        blockCount: t,
        searchId: this.props.searchId,
        renderEmbeds: this.props.renderEmbeds,
        scrollTo: this.scrollTo
      }) : this.renderNoResults()
    })
  }
}

function j(e) {
  let {
    searchId: t
  } = e, n = (0, c.cj)([g.Z], () => g.Z.getResultsState(t), [t]);
  return (0, l.jsx)(R, {
    searchId: t,
    search: n,
    ...(0, c.cj)([g.Z], () => ({
      searchAnalyticsId: g.Z.getAnalyticsId(t),
      searchType: g.Z.getSearchType()
    }), [t]),
    ...(0, I.Z)(t),
    renderEmbeds: E.NA.useSetting(),
    developerMode: E.Sb.useSetting(),
    ...(0, c.cj)([p.Z], () => {
      let {
        theme: e
      } = p.Z;
      return {
        theme: e
      }
    })
  })
}