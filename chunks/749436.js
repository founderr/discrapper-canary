n.d(t, {
  Z: function() {
    return O
  }
}), n(47120);
var i, s = n(735250),
  l = n(470079),
  a = n(120356),
  r = n.n(a),
  o = n(392711),
  c = n.n(o),
  u = n(442837),
  d = n(481060),
  E = n(212093),
  h = n(683301),
  _ = n(626135),
  I = n(585483),
  m = n(900849),
  g = n(878727),
  p = n(117496),
  N = n(150192),
  T = n(731455),
  C = n(981631),
  S = n(689938),
  A = n(627716);

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let Z = c().throttle(m.c6, 1e3, {
    leading: !1,
    trailing: !0
  }),
  v = e => {
    let {
      isSelected: t,
      onCategoryChange: n,
      categoryId: i,
      name: l,
      count: a
    } = e;
    return (0, s.jsx)(d.Clickable, {
      onClick: () => n(i),
      className: r()(A.categoryPill, {
        [A.selected]: t
      }),
      children: (0, s.jsx)(d.Text, {
        className: A.categoryLabel,
        variant: "text-sm/normal",
        children: null != a ? "".concat(l, " (").concat(a, ")") : l
      })
    })
  };
class L extends(i = l.PureComponent) {
  componentDidMount() {
    let {
      loadId: e,
      searchResults: t,
      currentCategoryId: n
    } = this.props, {
      searchId: i,
      query: s,
      isHandlingTagSearch: l
    } = this.state, a = this.context;
    if (null == h.ZP.getSearchIndex() && E.Ue(), I.S.subscribe(C.CkL.GLOBAL_CLIPBOARD_PASTE, this.focusInput), I.S.subscribe(C.CkL.TEXTAREA_FOCUS, this.focusInput), s.length > 0) {
      let r = n !== T.Hk ? n : null;
      Z({
        loadId: e,
        searchId: i,
        query: s,
        guildResults: t.guilds,
        analyticsContext: a,
        categoryId: r,
        isTagSearch: l
      })
    }
  }
  componentDidUpdate(e, t) {
    let {
      loadId: n,
      isFetchingSearch: i,
      searchResults: s,
      currentCategoryId: l,
      mostRecentQuery: a
    } = this.props, {
      isSearching: r,
      searchId: o,
      query: c,
      isHandlingTagSearch: u
    } = this.state, d = this.context, E = e.isFetchingSearch && !i, h = l !== T.Hk ? l : null;
    (r || u) && E && (Z({
      loadId: n,
      searchId: o,
      query: c,
      guildResults: s.guilds,
      analyticsContext: d,
      categoryId: h,
      isTagSearch: u
    }), this.setState({
      isHandlingTagSearch: !1
    })), !t.isSearching && r && m.tI(n, h, d), e.mostRecentQuery !== a && this.setState({
      query: a,
      searchId: (0, p.P)(),
      isHandlingTagSearch: !0
    })
  }
  componentWillUnmount() {
    I.S.unsubscribe(C.CkL.GLOBAL_CLIPBOARD_PASTE, this.focusInput), I.S.unsubscribe(C.CkL.TEXTAREA_FOCUS, this.focusInput)
  }
  renderSearchOptions() {
    var e;
    let {
      availableLanguages: t
    } = this.props, {
      selectedLanguage: n
    } = this.state;
    if (null == t) return null;
    let i = t.map(e => {
      let {
        name: t
      } = e;
      return {
        label: t,
        value: t
      }
    });
    return (0, s.jsx)(d.SingleSelect, {
      className: A.languageSelector,
      options: i,
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
      className: A.categories,
      children: null == t ? void 0 : t.map(t => {
        let [n, i] = t;
        return (0, s.jsx)(v, {
          categoryId: n,
          name: n === T.Hk ? S.Z.Messages.GUILD_DISCOVERY_ALL_CATEGORY_FILTER : N.Z.getCategoryName(n),
          onCategoryChange: this.handleCategoryChange,
          isSelected: e === n,
          count: i
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
      isSearchPage: i
    } = this.props;
    return (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsxs)("div", {
        className: r()(A.container, {
          [A.searchPage]: i
        }),
        children: [(0, s.jsx)("div", {
          className: A.search,
          children: (0, s.jsx)(d.SearchBox, {
            ref: this._searchRef,
            searchTerm: e,
            className: i ? void 0 : A.searchBox,
            inputClassName: i ? void 0 : A.searchBoxInput,
            closeIconClassName: i ? void 0 : A.closeIcon,
            searchIconClassName: i ? void 0 : A.searchIcon,
            label: S.Z.Messages.GUILD_DISCOVERY_SEARCH_LABEL,
            placeholder: n,
            onChange: this.handleQueryChanged,
            onClear: this.handleQueryCleared,
            onFocus: this.handleFocus,
            onBlur: this.handleSearchBlurred,
            onKeyPress: this.handleSearchKeyPress,
            autoFocus: !i,
            cta: t && null != e && e.length > 1 ? S.Z.Messages.GUILD_DISCOVERY_SEARCH_ENTER_CTA : null
          })
        }), i ? this.renderSearchOptions() : null]
      }), i ? this.renderCategories() : null]
    })
  }
  constructor(e) {
    super(e), f(this, "_searchRef", l.createRef()), f(this, "canSearch", e => e.trim().length >= 2 && !(0, g.x)(e)), f(this, "doSearch", (e, t, n, i) => {
      var s;
      let {
        defaultLanguage: l,
        currentCategoryId: a
      } = this.props, {
        query: r,
        selectedLanguage: o
      } = this.state, c = {
        approximate_member_count: m.sq
      };
      i && E.G7(r, c), this.setState({
        searchId: (0, p.P)(),
        queryHasChanged: !1,
        isSearching: !0
      }), E.bR(r, {
        categoryId: null == n ? a : n,
        preferredLocale: null !== (s = null == o ? void 0 : o.code) && void 0 !== s ? s : l.code,
        offset: e,
        length: t,
        filters: c
      })
    }), f(this, "handleSearchBlurred", e => {
      let {
        onSearchBlur: t
      } = this.props;
      this.setState({
        inputFocused: !1
      }), null == t || t()
    }), f(this, "handleSearchKeyPress", e => {
      let {
        query: t,
        queryHasChanged: n
      } = this.state, {
        loadId: i,
        currentCategoryId: s
      } = this.props, l = s !== T.Hk ? s : null;
      this.canSearch(t) && n && e.charCode === C.yXg.ENTER ? (m.tI(i, l), this.doSearch(0, 12, void 0, !0)) : 0 === t.length && e.charCode === C.yXg.ENTER && this.setState({
        isSearching: !1
      })
    }), f(this, "handleQueryChanged", e => {
      this.setState({
        query: e,
        queryHasChanged: !0
      })
    }), f(this, "handleQueryCleared", () => {
      this.setState({
        query: "",
        queryHasChanged: !0,
        isSearching: !1
      })
    }), f(this, "handleLanguageChange", e => {
      let {
        mostRecentQuery: t,
        availableLanguages: n
      } = this.props, i = null == n ? void 0 : n.find(t => t.name === e);
      this.setState({
        selectedLanguage: i
      }, () => {
        this.canSearch(t) && this.doSearch(0, 12)
      })
    }), f(this, "handleCategoryChange", e => {
      let {
        mostRecentQuery: t
      } = this.props;
      E.uY(e), this.canSearch(t) && this.doSearch(0, 12, e)
    }), f(this, "handleFocus", () => {
      let {
        onSearchFocus: e
      } = this.props;
      this.setState({
        inputFocused: !0
      }), null == e || e()
    }), f(this, "focusInput", () => {
      var e;
      null === (e = this._searchRef.current) || void 0 === e || e.focus()
    }), this.state = {
      searchId: (0, p.P)(),
      query: e.isSearchPage ? e.mostRecentQuery : "",
      queryHasChanged: !1,
      isSearching: !1,
      selectedLanguage: e.defaultLanguage,
      inputFocused: !1,
      isHandlingTagSearch: e.isTagSearch || !1
    }
  }
}

function O(e) {
  let t = (0, u.e7)([N.Z], () => N.Z.getDiscoveryCategories(), [], N.j),
    n = (0, u.e7)([h.ZP], () => h.ZP.getTopCategoryCounts(e.mostRecentQuery));
  return (0, s.jsx)(L, {
    ...e,
    categories: t,
    countsByCategory: n
  })
}
f(L, "contextType", void 0), L.contextType = _.AnalyticsContext