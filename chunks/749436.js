"use strict";
a.r(t), a.d(t, {
  default: function() {
    return M
  }
}), a("47120");
var n, s = a("735250"),
  l = a("470079"),
  i = a("803997"),
  r = a.n(i),
  o = a("392711"),
  u = a.n(o),
  d = a("442837"),
  c = a("481060"),
  f = a("212093"),
  E = a("683301"),
  h = a("408814"),
  _ = a("626135"),
  C = a("585483"),
  m = a("900849"),
  S = a("878727"),
  p = a("117496"),
  I = a("150192"),
  T = a("731455"),
  g = a("981631"),
  A = a("689938"),
  N = a("80420");

function v(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
let R = u().throttle(m.trackSearchResultsViewed, 1e3, {
    leading: !1,
    trailing: !0
  }),
  O = e => {
    let {
      isSelected: t,
      onCategoryChange: a,
      categoryId: n,
      name: l,
      count: i
    } = e;
    return (0, s.jsx)(c.Clickable, {
      onClick: () => a(n),
      className: r()(N.categoryPill, {
        [N.selected]: t
      }),
      children: (0, s.jsx)(c.Text, {
        className: N.categoryLabel,
        variant: "text-sm/normal",
        children: null != i ? "".concat(l, " (").concat(i, ")") : l
      })
    })
  };
class L extends(n = l.PureComponent) {
  componentDidMount() {
    let {
      loadId: e,
      searchResults: t,
      currentCategoryId: a
    } = this.props, {
      searchId: n,
      query: s,
      isHandlingTagSearch: l
    } = this.state, i = this.context;
    if (null == E.default.getSearchIndex() && f.createAlgoliaIndex(), C.ComponentDispatch.subscribe(g.ComponentActions.GLOBAL_CLIPBOARD_PASTE, this.focusInput), C.ComponentDispatch.subscribe(g.ComponentActions.TEXTAREA_FOCUS, this.focusInput), s.length > 0) {
      let r = a !== T.DISCOVERY_ALL_CATEGORIES_ID ? a : null;
      R({
        loadId: e,
        searchId: n,
        query: s,
        guildResults: t.guilds,
        analyticsContext: i,
        categoryId: r,
        isTagSearch: l
      })
    }
  }
  componentDidUpdate(e, t) {
    let {
      loadId: a,
      isFetchingSearch: n,
      searchResults: s,
      currentCategoryId: l,
      mostRecentQuery: i
    } = this.props, {
      isSearching: r,
      searchId: o,
      query: u,
      isHandlingTagSearch: d
    } = this.state, c = this.context, f = e.isFetchingSearch && !n, E = l !== T.DISCOVERY_ALL_CATEGORIES_ID ? l : null;
    (r || d) && f && (R({
      loadId: a,
      searchId: o,
      query: u,
      guildResults: s.guilds,
      analyticsContext: c,
      categoryId: E,
      isTagSearch: d
    }), this.setState({
      isHandlingTagSearch: !1
    })), !t.isSearching && r && m.trackSearchStarted(a, E, c), e.mostRecentQuery !== i && this.setState({
      query: i,
      searchId: (0, p.makeAnalyticsID)(),
      isHandlingTagSearch: !0
    })
  }
  componentWillUnmount() {
    C.ComponentDispatch.unsubscribe(g.ComponentActions.GLOBAL_CLIPBOARD_PASTE, this.focusInput), C.ComponentDispatch.unsubscribe(g.ComponentActions.TEXTAREA_FOCUS, this.focusInput)
  }
  renderSearchOptions() {
    var e;
    let {
      availableLanguages: t
    } = this.props, {
      selectedLanguage: a
    } = this.state;
    if (null == t) return null;
    let n = t.map(e => {
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
      options: n,
      value: null !== (e = null == a ? void 0 : a.name) && void 0 !== e ? e : "",
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
        let [a, n] = t;
        return (0, s.jsx)(O, {
          categoryId: a,
          name: a === T.DISCOVERY_ALL_CATEGORIES_ID ? A.default.Messages.GUILD_DISCOVERY_ALL_CATEGORY_FILTER : I.default.getCategoryName(a),
          onCategoryChange: this.handleCategoryChange,
          isSelected: e === a,
          count: n
        }, a)
      })
    })
  }
  render() {
    let {
      query: e,
      inputFocused: t
    } = this.state, {
      placeholder: a,
      isSearchPage: n
    } = this.props;
    return (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsxs)("div", {
        className: r()(N.container, {
          [N.searchPage]: n
        }),
        children: [(0, s.jsx)("div", {
          className: N.search,
          children: (0, s.jsx)(h.default, {
            ref: this._searchRef,
            searchTerm: e,
            className: n ? void 0 : N.searchBox,
            inputClassName: n ? void 0 : N.searchBoxInput,
            closeIconClassName: n ? void 0 : N.closeIcon,
            searchIconClassName: n ? void 0 : N.searchIcon,
            label: A.default.Messages.GUILD_DISCOVERY_SEARCH_LABEL,
            placeholder: a,
            onChange: this.handleQueryChanged,
            onClear: this.handleQueryCleared,
            onFocus: this.handleFocus,
            onBlur: this.handleSearchBlurred,
            onKeyPress: this.handleSearchKeyPress,
            autoFocus: !n,
            cta: t && null != e && e.length > 1 ? A.default.Messages.GUILD_DISCOVERY_SEARCH_ENTER_CTA : null
          })
        }), n ? this.renderSearchOptions() : null]
      }), n ? this.renderCategories() : null]
    })
  }
  constructor(e) {
    super(e), v(this, "_searchRef", l.createRef()), v(this, "canSearch", e => e.trim().length >= 2 && !(0, S.searchQueryContainsBannedWord)(e)), v(this, "doSearch", (e, t, a, n) => {
      var s;
      let {
        defaultLanguage: l,
        currentCategoryId: i
      } = this.props, {
        query: r,
        selectedLanguage: o
      } = this.state, u = {
        approximate_member_count: m.MINIMUM_MEMBER_COUNT
      };
      n && f.getSearchResultsCount(r, u), this.setState({
        searchId: (0, p.makeAnalyticsID)(),
        queryHasChanged: !1,
        isSearching: !0
      }), f.doAlgoliaSearch(r, {
        categoryId: null == a ? i : a,
        preferredLocale: null !== (s = null == o ? void 0 : o.code) && void 0 !== s ? s : l.code,
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
        queryHasChanged: a
      } = this.state, {
        loadId: n,
        currentCategoryId: s
      } = this.props, l = s !== T.DISCOVERY_ALL_CATEGORIES_ID ? s : null;
      this.canSearch(t) && a && e.charCode === g.KeyboardKeys.ENTER ? (m.trackSearchStarted(n, l), this.doSearch(0, 12, void 0, !0)) : 0 === t.length && e.charCode === g.KeyboardKeys.ENTER && this.setState({
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
        availableLanguages: a
      } = this.props, n = null == a ? void 0 : a.find(t => t.name === e);
      this.setState({
        selectedLanguage: n
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
    a = (0, d.useStateFromStores)([E.default], () => E.default.getTopCategoryCounts(e.mostRecentQuery));
  return (0, s.jsx)(L, {
    ...e,
    categories: t,
    countsByCategory: a
  })
}
v(L, "contextType", void 0), L.contextType = _.AnalyticsContext