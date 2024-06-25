n.d(t, {
  Z: function() {
    return v
  }
}), n(47120);
var s, i = n(735250),
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
  T = n(878727),
  g = n(117496),
  p = n(150192),
  N = n(731455),
  S = n(981631),
  C = n(689938),
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
  L = e => {
    let {
      isSelected: t,
      onCategoryChange: n,
      categoryId: s,
      name: l,
      count: a
    } = e;
    return (0, i.jsx)(d.Clickable, {
      onClick: () => n(s),
      className: r()(A.categoryPill, {
        [A.selected]: t
      }),
      children: (0, i.jsx)(d.Text, {
        className: A.categoryLabel,
        variant: "text-sm/normal",
        children: null != a ? "".concat(l, " (").concat(a, ")") : l
      })
    })
  };
class O extends(s = l.PureComponent) {
  componentDidMount() {
    let {
      loadId: e,
      searchResults: t,
      currentCategoryId: n
    } = this.props, {
      searchId: s,
      query: i,
      isHandlingTagSearch: l
    } = this.state, a = this.context;
    if (null == h.ZP.getSearchIndex() && E.Ue(), I.S.subscribe(S.CkL.GLOBAL_CLIPBOARD_PASTE, this.focusInput), I.S.subscribe(S.CkL.TEXTAREA_FOCUS, this.focusInput), i.length > 0) {
      let r = n !== N.Hk ? n : null;
      Z({
        loadId: e,
        searchId: s,
        query: i,
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
      isFetchingSearch: s,
      searchResults: i,
      currentCategoryId: l,
      mostRecentQuery: a
    } = this.props, {
      isSearching: r,
      searchId: o,
      query: c,
      isHandlingTagSearch: u
    } = this.state, d = this.context, E = e.isFetchingSearch && !s, h = l !== N.Hk ? l : null;
    (r || u) && E && (Z({
      loadId: n,
      searchId: o,
      query: c,
      guildResults: i.guilds,
      analyticsContext: d,
      categoryId: h,
      isTagSearch: u
    }), this.setState({
      isHandlingTagSearch: !1
    })), !t.isSearching && r && m.tI(n, h, d), e.mostRecentQuery !== a && this.setState({
      query: a,
      searchId: (0, g.P)(),
      isHandlingTagSearch: !0
    })
  }
  componentWillUnmount() {
    I.S.unsubscribe(S.CkL.GLOBAL_CLIPBOARD_PASTE, this.focusInput), I.S.unsubscribe(S.CkL.TEXTAREA_FOCUS, this.focusInput)
  }
  renderSearchOptions() {
    var e;
    let {
      availableLanguages: t
    } = this.props, {
      selectedLanguage: n
    } = this.state;
    if (null == t) return null;
    let s = t.map(e => {
      let {
        name: t
      } = e;
      return {
        label: t,
        value: t
      }
    });
    return (0, i.jsx)(d.SingleSelect, {
      className: A.languageSelector,
      options: s,
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
    return (0, i.jsx)("div", {
      className: A.categories,
      children: null == t ? void 0 : t.map(t => {
        let [n, s] = t;
        return (0, i.jsx)(L, {
          categoryId: n,
          name: n === N.Hk ? C.Z.Messages.GUILD_DISCOVERY_ALL_CATEGORY_FILTER : p.Z.getCategoryName(n),
          onCategoryChange: this.handleCategoryChange,
          isSelected: e === n,
          count: s
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
      isSearchPage: s
    } = this.props;
    return (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsxs)("div", {
        className: r()(A.container, {
          [A.searchPage]: s
        }),
        children: [(0, i.jsx)("div", {
          className: A.search,
          children: (0, i.jsx)(d.SearchBox, {
            ref: this._searchRef,
            searchTerm: e,
            className: s ? void 0 : A.searchBox,
            inputClassName: s ? void 0 : A.searchBoxInput,
            closeIconClassName: s ? void 0 : A.closeIcon,
            searchIconClassName: s ? void 0 : A.searchIcon,
            label: C.Z.Messages.GUILD_DISCOVERY_SEARCH_LABEL,
            placeholder: n,
            onChange: this.handleQueryChanged,
            onClear: this.handleQueryCleared,
            onFocus: this.handleFocus,
            onBlur: this.handleSearchBlurred,
            onKeyPress: this.handleSearchKeyPress,
            autoFocus: !s,
            cta: t && null != e && e.length > 1 ? C.Z.Messages.GUILD_DISCOVERY_SEARCH_ENTER_CTA : null
          })
        }), s ? this.renderSearchOptions() : null]
      }), s ? this.renderCategories() : null]
    })
  }
  constructor(e) {
    super(e), f(this, "_searchRef", l.createRef()), f(this, "canSearch", e => e.trim().length >= 2 && !(0, T.x)(e)), f(this, "doSearch", (e, t, n, s) => {
      var i;
      let {
        defaultLanguage: l,
        currentCategoryId: a
      } = this.props, {
        query: r,
        selectedLanguage: o
      } = this.state, c = {
        approximate_member_count: m.sq
      };
      s && E.G7(r, c), this.setState({
        searchId: (0, g.P)(),
        queryHasChanged: !1,
        isSearching: !0
      }), E.bR(r, {
        categoryId: null == n ? a : n,
        preferredLocale: null !== (i = null == o ? void 0 : o.code) && void 0 !== i ? i : l.code,
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
        loadId: s,
        currentCategoryId: i
      } = this.props, l = i !== N.Hk ? i : null;
      this.canSearch(t) && n && e.charCode === S.yXg.ENTER ? (m.tI(s, l), this.doSearch(0, 12, void 0, !0)) : 0 === t.length && e.charCode === S.yXg.ENTER && this.setState({
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
      } = this.props, s = null == n ? void 0 : n.find(t => t.name === e);
      this.setState({
        selectedLanguage: s
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
      searchId: (0, g.P)(),
      query: e.isSearchPage ? e.mostRecentQuery : "",
      queryHasChanged: !1,
      isSearching: !1,
      selectedLanguage: e.defaultLanguage,
      inputFocused: !1,
      isHandlingTagSearch: e.isTagSearch || !1
    }
  }
}

function v(e) {
  let t = (0, u.e7)([p.Z], () => p.Z.getDiscoveryCategories(), [], p.j),
    n = (0, u.e7)([h.ZP], () => h.ZP.getTopCategoryCounts(e.mostRecentQuery));
  return (0, i.jsx)(O, {
    ...e,
    categories: t,
    countsByCategory: n
  })
}
f(O, "contextType", void 0), O.contextType = _.AnalyticsContext