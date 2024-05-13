"use strict";
n.r(t), n("757143");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("371917"),
  o = n("299608"),
  u = n.n(o),
  d = n("442837"),
  c = n("481060"),
  f = n("603263"),
  h = n("461745"),
  E = n("349033"),
  m = n("999650"),
  p = n("857595"),
  g = n("607070"),
  S = n("367907"),
  N = n("592125"),
  _ = n("984933"),
  T = n("768119"),
  I = n("944486"),
  C = n("153124"),
  A = n("585483"),
  v = n("72006"),
  M = n("405656"),
  R = n("181389"),
  x = n("854709"),
  L = n("778177"),
  O = n("981631"),
  b = n("689938"),
  y = n("120031");

function j(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
n("436967");
let F = (0, C.uid)(),
  D = u()(f.search, 500);
class U extends l.PureComponent {
  componentDidMount() {
    var e, t;
    A.ComponentDispatch.subscribe(O.ComponentActions.PERFORM_SEARCH, this.search), A.ComponentDispatch.subscribe(O.ComponentActions.SET_SEARCH_QUERY, this.handleSetSearchQuery), A.ComponentDispatch.subscribe(O.ComponentActions.FOCUS_SEARCH, this.handleFocusSearch), null === (t = this._editorRef) || void 0 === t || null === (e = t.editor) || void 0 === e || e.setAttribute("aria-haspopup", "listbox")
  }
  componentDidUpdate(e) {
    let {
      editorState: t,
      searchId: n
    } = this.props;
    if (t !== e.editorState) {
      let e = M.tokenizeQuery(v.getFirstTextBlock(t)),
        a = R.getSelectionScope(e, t);
      f.updateAutocompleteQuery(n, e, a), null != this._editorRef && v.scrollCursorIntoView(this._editorRef.editor)
    }
  }
  componentWillUnmount() {
    A.ComponentDispatch.unsubscribe(O.ComponentActions.PERFORM_SEARCH, this.search), A.ComponentDispatch.unsubscribe(O.ComponentActions.SET_SEARCH_QUERY, this.handleSetSearchQuery), A.ComponentDispatch.unsubscribe(O.ComponentActions.FOCUS_SEARCH, this.handleFocusSearch)
  }
  tokenize(e) {
    let t = M.tokenizeQuery(v.getFirstTextBlock(e)).filter(e => e.type !== E.default.NON_TOKEN_TYPE);
    return v.applyTokensAsEntities(t, e, m.default)
  }
  clearSearch() {
    let {
      searchId: e
    } = this.props;
    null != e && f.clearSearchState(e)
  }
  handlePastedFiles() {
    return !0
  }
  handleDroppedFiles() {
    return !0
  }
  handleDrop() {
    return !0
  }
  renderInput(e) {
    let {
      editorState: t
    } = this.props;
    return (0, a.jsx)(r.Editor, {
      autoCorrect: "off",
      ref: this.setEditorRef,
      onBlur: this.onBlur,
      onFocus: this.onFocus,
      handleReturn: this.handleReturn,
      handleBeforeInput: this.handleBeforeInput,
      handleKeyCommand: this.handleKeyCommand,
      handlePastedText: this.handlePastedText,
      handlePastedFiles: this.handlePastedFiles,
      handleDroppedFiles: this.handleDroppedFiles,
      handleDrop: this.handleDrop,
      keyBindingFn: this.handleKeyBind,
      placeholder: b.default.Messages.SEARCH,
      editorState: t,
      onChange: this.setEditorState,
      role: "combobox",
      ariaExpanded: e,
      ariaControls: e ? F : void 0,
      ariaLabel: b.default.Messages.SEARCH,
      ariaAutocomplete: "list"
    })
  }
  render() {
    let {
      searchId: e,
      editorState: t,
      hasResults: n,
      className: l
    } = this.props, {
      focused: s
    } = this.state, r = v.getFirstTextBlock(t).length > 0;
    return null == e ? null : (0, a.jsx)(c.Popout, {
      renderPopout: this.renderPopout,
      position: "bottom",
      animation: c.Popout.Animation.NONE,
      shouldShow: s,
      autoInvert: !1,
      children: (t, o) => {
        var u;
        let {
          isShown: d
        } = o;
        return (0, a.jsx)("div", {
          className: l,
          children: (0, a.jsx)("div", {
            className: i()(y.search, {
              [y.open]: r || s,
              [y.focused]: s
            }),
            children: (0, a.jsx)(c.FocusRing, {
              focusTarget: {
                current: null === (u = this._editorRef) || void 0 === u ? void 0 : u.editor
              },
              ringTarget: this._searchBarRef,
              children: (0, a.jsxs)("div", {
                className: y.searchBar,
                ref: this._searchBarRef,
                children: [this.renderInput(d), (0, a.jsx)(h.SearchBarIcon, {
                  onClear: this.handleClearSearch,
                  hasContent: r || n,
                  className: y.icon
                })]
              }, e)
            })
          })
        })
      }
    })
  }
  constructor(e) {
    super(e), j(this, "state", {
      focused: !1,
      selectedIndex: void 0
    }), j(this, "_editorRef", void 0), j(this, "_searchBarRef", l.createRef()), j(this, "_searchPopoutRef", l.createRef()), j(this, "handleSetSearchQuery", e => {
      let {
        query: t,
        anchor: n,
        focus: a,
        performSearch: l,
        replace: s
      } = e, {
        editorState: i
      } = this.props, r = v.getFirstTextBlock(i);
      " " !== t.charAt(t.length - 1) && (t += " "), null != n && 0 !== n && " " !== r.charAt(n - 1) && " " !== t.charAt(0) && (t = " " + t), s ? (i = v.replaceAllContent(t, i), n = 0) : i = v.updateContent(t, i, n, a), i = v.truncateContent(i, 512), i = this.tokenize(i);
      let o = Number(n) + t.length;
      i = v.setCollapsedSelection(o, i), this.setEditorState(i), l && this.search({
        queryString: v.getFirstTextBlock(i)
      })
    }), j(this, "handleSelectedIndexChanged", e => {
      var t, n;
      null === (n = this._editorRef) || void 0 === n || null === (t = n.editor) || void 0 === t || t.setAttribute("aria-activedescendant", null != e ? "".concat(F, "-").concat(e) : void 0), this.setState({
        selectedIndex: e
      })
    }), j(this, "renderPopout", () => (0, a.jsx)(L.default, {
      ref: this._searchPopoutRef,
      navId: F,
      onSelectedIndexChanged: this.handleSelectedIndexChanged
    })), j(this, "search", e => {
      let {
        searchId: t,
        isSearching: n
      } = this.props, {
        queryString: a,
        searchEverywhere: l
      } = null != e ? e : {};
      if (null == a || "" === a) {
        let {
          editorState: e
        } = this.props;
        a = v.getFirstTextBlock(e)
      }
      if (null != t && !n) {
        let e = M.tokenizeQuery(a),
          n = M.getSearchQueryFromTokens(e);
        for (let t = 0; t < e.length; t++) !M.filterHasAnswer(e[t], e[t + 1]) && (a = a.substring(0, e[t].start) + a.substring(e[t].end));
        if (0 === e.length || 0 === Object.keys(n).length) return !1;
        D(t, n, a, !!l), this.onBlur()
      }
      return !0
    }), j(this, "handleClearSearch", e => {
      let {
        editorState: t
      } = this.props, {
        focused: n
      } = this.state;
      if (e.preventDefault(), e.stopPropagation(), "" === v.getFirstTextBlock(t)) {
        this.focusEditor();
        return
      }
      t = v.truncateContent(t, 0), this.setEditorState(t), !n && Promise.resolve().then(() => this.blurEditor())
    }), j(this, "handleFocusSearch", e => {
      let {
        prefillCurrentChannel: t
      } = e;
      if (!t) {
        this.focusEditor();
        return
      }
      let n = I.default.getChannelId(),
        a = N.default.getChannel(n);
      if ((null == a ? void 0 : a.isThread()) && (a = N.default.getChannel(null == a ? void 0 : a.parent_id)), null == a || a.isPrivate()) {
        this.focusEditor();
        return
      }
      let l = _.default.getTextChannelNameDisambiguations(a.getGuildId())[a.id],
        s = null != l ? l.name : a.name;
      this.handleSetSearchQuery({
        query: m.default[O.SearchTokenTypes.FILTER_IN].key + "#".concat(s, " "),
        replace: !0
      })
    }), j(this, "focusEditor", () => {
      let {
        _editorRef: e
      } = this;
      null != e && Promise.resolve().then(() => e.focus())
    }), j(this, "blurEditor", () => {
      var e;
      null === (e = this._editorRef) || void 0 === e || e.blur()
    }), j(this, "setEditorRef", e => {
      this._editorRef = e
    }), j(this, "onFocus", () => {
      let {
        searchType: e
      } = this.props;
      S.default.trackWithMetadata(O.AnalyticEvents.SEARCH_OPENED, {
        search_type: e
      }), this.setState({
        focused: !0
      })
    }), j(this, "onBlur", () => {
      this.setState({
        focused: !1
      }, () => {
        v.isEmpty(this.props.editorState) && this.clearSearch()
      })
    }), j(this, "handleReturn", e => {
      let {
        shiftKey: t
      } = e;
      e.preventDefault();
      let {
        current: n
      } = this._searchPopoutRef;
      return !(null != n && n.selectOption()) && ((0, x.isFavoriteSearchEnabled)() && t ? this.search({
        searchEverywhere: !0
      }) : this.search()), !0
    }), j(this, "handleBeforeInput", e => {
      let {
        editorState: t
      } = this.props, {
        focused: n
      } = this.state;
      return !!(v.getFirstTextBlock(t).length >= 512) || (t = v.updateContent(e, t), t = v.truncateContent(t, 512), t = this.tokenize(t), this.setEditorState(t), !n && this.setState({
        focused: !0
      }), !0)
    }), j(this, "handleKeyCommand", e => {
      let {
        editorState: t
      } = this.props, {
        focused: n
      } = this.state;
      switch (e) {
        case "backspace":
        case "backspace-word":
        case "backspace-to-start-of-line":
        case "delete":
        case "delete-word":
          return t = v.deleteContent(e, t), t = this.tokenize(t), this.setEditorState(t), !n && this.setState({
            focused: !0
          }), !0;
        case "transpose-characters":
        case "move-selection-to-start-of-block":
        case "move-selection-to-end-of-block":
          return t = v.miscCommand(e, t), t = this.tokenize(t), this.setEditorState(t), !0;
        case "split-block":
        case "underline":
        case "bold":
        case "italic":
          return !0
      }
    }), j(this, "handlePastedText", e => {
      let {
        editorState: t
      } = this.props, {
        focused: n
      } = this.state;
      return e = null != e ? e.replace(/\n/g, "") : "", t = v.updateContent(e, t), t = v.truncateContent(t, 512), t = this.tokenize(t), !n && this.setState({
        focused: !0
      }), this.setEditorState(t), !0
    }), j(this, "setEditorState", e => {
      let {
        searchId: t
      } = this.props;
      f.setSearchState(t, e)
    }), j(this, "handleKeyBind", e => {
      let {
        key: t,
        metaKey: n,
        shiftKey: a
      } = e, {
        editorState: l,
        searchId: s,
        keyboardModeEnabled: i
      } = this.props;
      if (e.stopPropagation(), "Escape" === t) {
        if (e.preventDefault(), v.isEmpty(l)) this.blurEditor();
        else {
          let e = v.clearContent(l);
          f.setSearchState(s, e), this.setState({
            focused: !0
          })
        }
        return !0
      }
      if ("ArrowUp" === t) {
        e.preventDefault();
        let {
          current: t
        } = this._searchPopoutRef;
        return null != t && t.focusPreviousOption(), !0
      }
      if ("ArrowDown" === t) {
        e.preventDefault();
        let {
          current: t
        } = this._searchPopoutRef;
        return null != t && t.focusNextOption(), !0
      }
      if ("Tab" === t) {
        if (i) return;
        return (0, p.enableKeyboardMode)(), !0
      }
      if ("Home" === t || "ArrowLeft" === t && n) return e.preventDefault(), l = a ? v.setToStartSelection(l) : v.setCollapsedStartSelection(l), this.setEditorState(l), !0;
      if ("End" === t || "ArrowRight" === t && n) return e.preventDefault(), l = a ? v.setToEndSelection(l) : v.setCollapsedEndSelection(l), this.setEditorState(l), !0;
      if (("Delete" === t || "Backspace" === t) && n) {
        let e = v.clearContent(l);
        return this.setEditorState(e), !0
      }
      return v.getDefaultKeyBinding(e)
    }), M.clearTokenCache()
  }
}
t.default = d.default.connectStores([g.default, T.default], () => {
  var e;
  let t = T.default.getCurrentSearchId(),
    n = T.default.getSearchType(),
    a = null != t && T.default.isSearching(t),
    l = null != t && null !== (e = T.default.getEditorState(t)) && void 0 !== e ? e : v.createEmptyEditorState(R.generateDecorators(m.default)),
    s = g.default.keyboardModeEnabled;
  return {
    searchId: t,
    searchType: n,
    isSearching: a,
    editorState: l,
    hasResults: T.default.hasResults(t),
    keyboardModeEnabled: s
  }
})(U)