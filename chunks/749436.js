"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
}), n("47120");
var a, s = n("735250"),
  i = n("470079"),
  l = n("120356"),
  r = n.n(l),
  o = n("392711"),
  u = n.n(o),
  d = n("442837"),
  c = n("481060"),
  f = n("212093"),
  E = n("683301"),
  h = n("408814"),
  _ = n("626135"),
  C = n("585483"),
  m = n("900849"),
  S = n("878727"),
  p = n("117496"),
  I = n("150192"),
  g = n("731455"),
  T = n("981631"),
  A = n("689938"),
  N = n("195047");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let R = u().throttle(m.trackSearchResultsViewed, 1e3, {
    leading: !1,
    trailing: !0
  }),
  L = e => {
    let {
      isSelected: t,
      onCategoryChange: n,
      categoryId: a,
      name: i,
      count: l
    } = e;
    return (0, s.jsx)(c.Clickable, {
      onClick: () => n(a),
      className: r()(N.categoryPill, {
        [N.selected]: t
      }),
      children: (0, s.jsx)(c.Text, {
        className: N.categoryLabel,
        variant: "text-sm/normal",
        children: null != l ? "".concat(i, " (").concat(l, ")") : i
      })
    })
  };
class O extends(a = i.PureComponent) {
  componentDidMount() {
    let {
      loadId: e,
      searchResults: t,
      currentCategoryId: n
    } = this.props, {
      searchId: a,
      query: s,
      isHandlingTagSearch: i
    } = this.state, l = this.context;
    if (null == E.default.getSearchIndex() && f.createAlgoliaIndex(), C.ComponentDispatch.subscribe(T.ComponentActions.GLOBAL_CLIPBOARD_PASTE, this.focusInput), C.ComponentDispatch.subscribe(T.ComponentActions.TEXTAREA_FOCUS, this.focusInput), s.length > 0) {
      let r = n !== g.DISCOVERY_ALL_CATEGORIES_ID ? n : null;
      R({
        loadId: e,
        searchId: a,
        query: s,
        guildResults: t.guilds,
        analyticsContext: l,
        categoryId: r,
        isTagSearch: i
      })
    }
  }
  componentDidUpdate(e, t) {
    let {
      loadId: n,
      isFetchingSearch: a,
      searchResults: s,
      currentCategoryId: i,
      mostRecentQuery: l
    } = this.props, {
      isSearching: r,
      searchId: o,
      query: u,
      isHandlingTagSearch: d
    } = this.state, c = this.context, f = e.isFetchingSearch && !a, E = i !== g.DISCOVERY_ALL_CATEGORIES_ID ? i : null;
    (r || d) && f && (R({
      loadId: n,
      searchId: o,
      query: u,
      guildResults: s.guilds,
      analyticsContext: c,
      categoryId: E,
      isTagSearch: d
    }), this.setState({
      isHandlingTagSearch: !1
    })), !t.isSearching && r && m.trackSearchStarted(n, E, c), e.mostRecentQuery !== l && this.setState({
      query: l,
      searchId: (0, p.makeAnalyticsID)(),
      isHandlingTagSearch: !0
    })
  }
  componentWillUnmount() {
    C.ComponentDispatch.unsubscribe(T.ComponentActions.GLOBAL_CLIPBOARD_PASTE, this.focusInput), C.ComponentDispatch.unsubscribe(T.ComponentActions.TEXTAREA_FOCUS, this.focusInput)
  }
  renderSearchOptions() {
    var e;
    let {
      availableLanguages: t
    } = this.props, {
      selectedLanguage: n
    } = this.state;
    if (null == t) return null;
    let a = t.map(e => {
      let {
        name: t
      } = e;
      return {
        label: t,
        value: t
      }
    });
    return (0, s.jsx)(c.SingleSelect, {
      className: N.languageSelector,
      options: a,
      value: null !== (e = null == n ? void 0 : n.name) && void 0 !== e ? e : "",
      onChange: this.handleLanguageChange,
      maxVisibleItems: 6
    })
  }
  renderCategories() {
    let {
      currentCategoryId: e,
      countsByCategory: t
    } = this.props;
    return (0, s.jsx)("div", {
      className: N.categories,
      children: null == t ? void 0 : t.map(t => {
        let [n, a] = t;
        return (0, s.jsx)(L, {
          categoryId: n,
          name: n === g.DISCOVERY_ALL_CATEGORIES_ID ? A.default.Messages.GUILD_DISCOVERY_ALL_CATEGORY_FILTER : I.default.getCategoryName(n),
          onCategoryChange: this.handleCategoryChange,
          isSelected: e === n,
          count: a
        }, n)
      })
    })
  }
  render() {
    let {
      query: e,
      inputFocused: t
    } = this.state, {
      placeholder: n,
      isSearchPage: a
    } = this.props;
    return (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsxs)("div", {
        className: r()(N.container, {
          [N.searchPage]: a
        }),
        children: [(0, s.jsx)("div", {
          className: N.search,
          children: (0, s.jsx)(h.default, {
            ref: this._searchRef,
            searchTerm: e,
            className: a ? void 0 : N.searchBox,
            inputClassName: a ? void 0 : N.searchBoxInput,
            closeIconClassName: a ? void 0 : N.closeIcon,
            searchIconClassName: a ? void 0 : N.searchIcon,
            label: A.default.Messages.GUILD_DISCOVERY_SEARCH_LABEL,
            placeholder: n,
            onChange: this.handleQueryChanged,
            onClear: this.handleQueryCleared,
            onFocus: this.handleFocus,
            onBlur: this.handleSearchBlurred,
            onKeyPress: this.handleSearchKeyPress,
            autoFocus: !a,
            cta: t && null != e && e.length > 1 ? A.default.Messages.GUILD_DISCOVERY_SEARCH_ENTER_CTA : null
          })
        }), a ? this.renderSearchOptions() : null]
      }), a ? this.renderCategories() : null]
    })
  }
  constructor(e) {
    super(e), v(this, "_searchRef", i.createRef()), v(this, "canSearch", e => e.trim().length >= 2 && !(0, S.searchQueryContainsBannedWord)(e)), v(this, "doSearch", (e, t, n, a) => {
      var s;
      let {
        defaultLanguage: i,
        currentCategoryId: l
      } = this.props, {
        query: r,
        selectedLanguage: o
      } = this.state, u = {
        approximate_member_count: m.MINIMUM_MEMBER_COUNT
      };
      a && f.getSearchResultsCount(r, u), this.setState({
        searchId: (0, p.makeAnalyticsID)(),
        queryHasChanged: !1,
        isSearching: !0
      }), f.doAlgoliaSearch(r, {
        categoryId: null == n ? l : n,
        preferredLocale: null !== (s = null == o ? void 0 : o.code) && void 0 !== s ? s : i.code,
        offset: e,
        length: t,
        filters: u
      })
    }), v(this, "handleSearchBlurred", e => {
      let {
        onSearchBlur: t
      } = this.props;
      this.setState({
        inputFocused: !1
      }), null == t || t()
    }), v(this, "handleSearchKeyPress", e => {
      let {
        query: t,
        queryHasChanged: n
      } = this.state, {
        loadId: a,
        currentCategoryId: s
      } = this.props, i = s !== g.DISCOVERY_ALL_CATEGORIES_ID ? s : null;
      this.canSearch(t) && n && e.charCode === T.KeyboardKeys.ENTER ? (m.trackSearchStarted(a, i), this.doSearch(0, 12, void 0, !0)) : 0 === t.length && e.charCode === T.KeyboardKeys.ENTER && this.setState({
        isSearching: !1
      })
    }), v(this, "handleQueryChanged", e => {
      this.setState({
        query: e,
        queryHasChanged: !0
      })
    }), v(this, "handleQueryCleared", () => {
      this.setState({
        query: "",
        queryHasChanged: !0,
        isSearching: !1
      })
    }), v(this, "handleLanguageChange", e => {
      let {
        mostRecentQuery: t,
        availableLanguages: n
      } = this.props, a = null == n ? void 0 : n.find(t => t.name === e);
      this.setState({
        selectedLanguage: a
      }, () => {
        this.canSearch(t) && this.doSearch(0, 12)
      })
    }), v(this, "handleCategoryChange", e => {
      let {
        mostRecentQuery: t
      } = this.props;
      f.selectCategory(e), this.canSearch(t) && this.doSearch(0, 12, e)
    }), v(this, "handleFocus", () => {
      let {
        onSearchFocus: e
      } = this.props;
      this.setState({
        inputFocused: !0
      }), null == e || e()
    }), v(this, "focusInput", () => {
      var e;
      null === (e = this._searchRef.current) || void 0 === e || e.focus()
    }), this.state = {
      searchId: (0, p.makeAnalyticsID)(),
      query: e.isSearchPage ? e.mostRecentQuery : "",
      queryHasChanged: !1,
      isSearching: !1,
      selectedLanguage: e.defaultLanguage,
      inputFocused: !1,
      isHandlingTagSearch: e.isTagSearch || !1
    }
  }
}

function M(e) {
  let t = (0, d.useStateFromStores)([I.default], () => I.default.getDiscoveryCategories(), [], I.areDiscoveryCategoriesEqual),
    n = (0, d.useStateFromStores)([E.default], () => E.default.getTopCategoryCounts(e.mostRecentQuery));
  return (0, s.jsx)(O, {
    ...e,
    categories: t,
    countsByCategory: n
  })
}
v(O, "contextType", void 0), O.contextType = _.AnalyticsContext