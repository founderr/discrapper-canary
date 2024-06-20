n(757143);
var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(371917),
  o = n(299608),
  c = n.n(o),
  u = n(442837),
  d = n(481060),
  E = n(603263),
  _ = n(461745),
  I = n(349033),
  T = n(999650),
  N = n(857595),
  m = n(607070),
  h = n(367907),
  C = n(592125),
  S = n(984933),
  A = n(768119),
  p = n(944486),
  g = n(153124),
  f = n(585483),
  O = n(72006),
  R = n(405656),
  M = n(181389),
  x = n(854709),
  v = n(778177),
  L = n(981631),
  Z = n(689938),
  P = n(514646);

function D(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
n(72385);
let j = (0, g.hQ)(),
  U = c()(E.yC, 500);
class y extends i.PureComponent {
  componentDidMount() {
    var e, t;
    f.S.subscribe(L.CkL.PERFORM_SEARCH, this.search), f.S.subscribe(L.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), f.S.subscribe(L.CkL.FOCUS_SEARCH, this.handleFocusSearch), null === (t = this._editorRef) || void 0 === t || null === (e = t.editor) || void 0 === e || e.setAttribute("aria-haspopup", "listbox")
  }
  componentDidUpdate(e) {
    let {
      editorState: t,
      searchId: n
    } = this.props;
    if (t !== e.editorState) {
      let e = R.kG(O.Sq(t)),
        s = M.g9(e, t);
      E.u$(n, e, s), null != this._editorRef && O.iE(this._editorRef.editor)
    }
  }
  componentWillUnmount() {
    f.S.unsubscribe(L.CkL.PERFORM_SEARCH, this.search), f.S.unsubscribe(L.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), f.S.unsubscribe(L.CkL.FOCUS_SEARCH, this.handleFocusSearch)
  }
  tokenize(e) {
    let t = R.kG(O.Sq(e)).filter(e => e.type !== I.ZP.NON_TOKEN_TYPE);
    return O.lv(t, e, T.ZP)
  }
  clearSearch() {
    let {
      searchId: e
    } = this.props;
    null != e && E.qt(e)
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
    return (0, s.jsx)(r.Editor, {
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
      placeholder: Z.Z.Messages.SEARCH,
      editorState: t,
      onChange: this.setEditorState,
      role: "combobox",
      ariaExpanded: e,
      ariaControls: e ? j : void 0,
      ariaLabel: Z.Z.Messages.SEARCH,
      ariaAutocomplete: "list"
    })
  }
  render() {
    let {
      searchId: e,
      editorState: t,
      hasResults: n,
      className: i
    } = this.props, {
      focused: l
    } = this.state, r = O.Sq(t).length > 0;
    return null == e ? null : (0, s.jsx)(d.Popout, {
      renderPopout: this.renderPopout,
      position: "bottom",
      animation: d.Popout.Animation.NONE,
      shouldShow: l,
      autoInvert: !1,
      children: (t, o) => {
        var c;
        let {
          isShown: u
        } = o;
        return (0, s.jsx)("div", {
          className: i,
          children: (0, s.jsx)("div", {
            className: a()(P.search, {
              [P.open]: r || l,
              [P.focused]: l
            }),
            children: (0, s.jsx)(d.FocusRing, {
              focusTarget: {
                current: null === (c = this._editorRef) || void 0 === c ? void 0 : c.editor
              },
              ringTarget: this._searchBarRef,
              children: (0, s.jsxs)("div", {
                className: P.searchBar,
                ref: this._searchBarRef,
                children: [this.renderInput(u), (0, s.jsx)(_.BK, {
                  onClear: this.handleClearSearch,
                  hasContent: r || n,
                  className: P.icon
                })]
              }, e)
            })
          })
        })
      }
    })
  }
  constructor(e) {
    super(e), D(this, "state", {
      focused: !1,
      selectedIndex: void 0
    }), D(this, "_editorRef", void 0), D(this, "_searchBarRef", i.createRef()), D(this, "_searchPopoutRef", i.createRef()), D(this, "handleSetSearchQuery", e => {
      let {
        query: t,
        anchor: n,
        focus: s,
        performSearch: i,
        replace: l
      } = e, {
        editorState: a
      } = this.props, r = O.Sq(a);
      " " !== t.charAt(t.length - 1) && (t += " "), null != n && 0 !== n && " " !== r.charAt(n - 1) && " " !== t.charAt(0) && (t = " " + t), l ? (a = O.c2(t, a), n = 0) : a = O.x0(t, a, n, s), a = O.Hl(a, 512), a = this.tokenize(a);
      let o = Number(n) + t.length;
      a = O.iK(o, a), this.setEditorState(a), i && this.search({
        queryString: O.Sq(a)
      })
    }), D(this, "handleSelectedIndexChanged", e => {
      var t, n;
      null === (n = this._editorRef) || void 0 === n || null === (t = n.editor) || void 0 === t || t.setAttribute("aria-activedescendant", null != e ? "".concat(j, "-").concat(e) : void 0), this.setState({
        selectedIndex: e
      })
    }), D(this, "renderPopout", () => (0, s.jsx)(v.ZP, {
      ref: this._searchPopoutRef,
      navId: j,
      onSelectedIndexChanged: this.handleSelectedIndexChanged
    })), D(this, "search", e => {
      let {
        searchId: t,
        isSearching: n
      } = this.props, {
        queryString: s,
        searchEverywhere: i
      } = null != e ? e : {};
      if (null == s || "" === s) {
        let {
          editorState: e
        } = this.props;
        s = O.Sq(e)
      }
      if (null != t && !n) {
        let e = R.kG(s),
          n = R.$G(e);
        for (let t = 0; t < e.length; t++) !R.Fr(e[t], e[t + 1]) && (s = s.substring(0, e[t].start) + s.substring(e[t].end));
        if (0 === e.length || 0 === Object.keys(n).length) return !1;
        U(t, n, s, !!i), d.AccessibilityAnnouncer.announce(Z.Z.Messages.SEARCH_STARTED_A11Y_ANNOUNCE), this.onBlur()
      }
      return !0
    }), D(this, "handleClearSearch", e => {
      let {
        editorState: t
      } = this.props, {
        focused: n
      } = this.state;
      if (e.preventDefault(), e.stopPropagation(), "" === O.Sq(t)) {
        this.focusEditor();
        return
      }
      t = O.Hl(t, 0), this.setEditorState(t), !n && Promise.resolve().then(() => this.blurEditor())
    }), D(this, "handleFocusSearch", e => {
      let {
        prefillCurrentChannel: t
      } = e;
      if (!t) {
        this.focusEditor();
        return
      }
      let n = p.Z.getChannelId(),
        s = C.Z.getChannel(n);
      if ((null == s ? void 0 : s.isThread()) && (s = C.Z.getChannel(null == s ? void 0 : s.parent_id)), null == s || s.isPrivate()) {
        this.focusEditor();
        return
      }
      let i = S.ZP.getTextChannelNameDisambiguations(s.getGuildId())[s.id],
        l = null != i ? i.name : s.name;
      this.handleSetSearchQuery({
        query: T.ZP[L.dCx.FILTER_IN].key + "#".concat(l, " "),
        replace: !0
      })
    }), D(this, "focusEditor", () => {
      let {
        _editorRef: e
      } = this;
      null != e && Promise.resolve().then(() => e.focus())
    }), D(this, "blurEditor", () => {
      var e;
      null === (e = this._editorRef) || void 0 === e || e.blur()
    }), D(this, "setEditorRef", e => {
      this._editorRef = e
    }), D(this, "onFocus", () => {
      let {
        searchType: e
      } = this.props;
      h.ZP.trackWithMetadata(L.rMx.SEARCH_OPENED, {
        search_type: e
      }), this.setState({
        focused: !0
      })
    }), D(this, "onBlur", () => {
      this.setState({
        focused: !1
      }, () => {
        O.xb(this.props.editorState) && this.clearSearch()
      })
    }), D(this, "handleReturn", e => {
      let {
        shiftKey: t
      } = e;
      e.preventDefault();
      let {
        current: n
      } = this._searchPopoutRef;
      return !(null != n && n.selectOption()) && ((0, x.X)() && t ? this.search({
        searchEverywhere: !0
      }) : this.search()), !0
    }), D(this, "handleBeforeInput", e => {
      let {
        editorState: t
      } = this.props, {
        focused: n
      } = this.state;
      return !!(O.Sq(t).length >= 512) || (t = O.x0(e, t), t = O.Hl(t, 512), t = this.tokenize(t), this.setEditorState(t), !n && this.setState({
        focused: !0
      }), !0)
    }), D(this, "handleKeyCommand", e => {
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
          return t = O.yd(e, t), t = this.tokenize(t), this.setEditorState(t), !n && this.setState({
            focused: !0
          }), !0;
        case "transpose-characters":
        case "move-selection-to-start-of-block":
        case "move-selection-to-end-of-block":
          return t = O.Zn(e, t), t = this.tokenize(t), this.setEditorState(t), !0;
        case "split-block":
        case "underline":
        case "bold":
        case "italic":
          return !0
      }
    }), D(this, "handlePastedText", e => {
      let {
        editorState: t
      } = this.props, {
        focused: n
      } = this.state;
      return e = null != e ? e.replace(/\n/g, "") : "", t = O.x0(e, t), t = O.Hl(t, 512), t = this.tokenize(t), !n && this.setState({
        focused: !0
      }), this.setEditorState(t), !0
    }), D(this, "setEditorState", e => {
      let {
        searchId: t
      } = this.props;
      E.j8(t, e)
    }), D(this, "handleKeyBind", e => {
      let {
        key: t,
        metaKey: n,
        shiftKey: s
      } = e, {
        editorState: i,
        searchId: l,
        keyboardModeEnabled: a
      } = this.props;
      if (e.stopPropagation(), "Escape" === t) {
        if (e.preventDefault(), O.xb(i)) this.blurEditor();
        else {
          let e = O.FZ(i);
          E.j8(l, e), this.setState({
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
        if (a) return;
        return (0, N.Qj)(), !0
      }
      if ("Home" === t || "ArrowLeft" === t && n) return e.preventDefault(), i = s ? O.R8(i) : O.eE(i), this.setEditorState(i), !0;
      if ("End" === t || "ArrowRight" === t && n) return e.preventDefault(), i = s ? O.Wg(i) : O.NJ(i), this.setEditorState(i), !0;
      if (("Delete" === t || "Backspace" === t) && n) {
        let e = O.FZ(i);
        return this.setEditorState(e), !0
      }
      return O.q0(e)
    }), R.WU()
  }
}
t.Z = u.ZP.connectStores([m.Z, A.Z], () => {
  var e;
  let t = A.Z.getCurrentSearchId(),
    n = A.Z.getSearchType(),
    s = null != t && A.Z.isSearching(t),
    i = null != t && null !== (e = A.Z.getEditorState(t)) && void 0 !== e ? e : O.nR(M.Jl(T.ZP)),
    l = m.Z.keyboardModeEnabled;
  return {
    searchId: t,
    searchType: n,
    isSearching: s,
    editorState: i,
    hasResults: A.Z.hasResults(t),
    keyboardModeEnabled: l
  }
})(y)