n(757143);
var i = n(735250),
    s = n(470079),
    a = n(120356),
    r = n.n(a),
    l = n(371917),
    o = n(299608),
    c = n.n(o),
    u = n(442837),
    d = n(481060),
    _ = n(603263),
    E = n(461745),
    I = n(349033),
    m = n(999650),
    T = n(857595),
    h = n(607070),
    N = n(367907),
    f = n(313201),
    C = n(592125),
    p = n(984933),
    g = n(768119),
    A = n(944486),
    S = n(585483),
    x = n(72006),
    R = n(405656),
    O = n(181389),
    M = n(854709),
    v = n(778177),
    L = n(981631),
    Z = n(689938),
    P = n(948488);
function b(e, t, n) {
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
n(49637);
let D = (0, f.hQ)(),
    j = c()(_.yC, 500);
class U extends s.PureComponent {
    componentDidMount() {
        var e, t;
        S.S.subscribe(L.CkL.PERFORM_SEARCH, this.search), S.S.subscribe(L.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), S.S.subscribe(L.CkL.FOCUS_SEARCH, this.handleFocusSearch), null === (t = this._editorRef) || void 0 === t || null === (e = t.editor) || void 0 === e || e.setAttribute('aria-haspopup', 'listbox');
    }
    componentDidUpdate(e) {
        let { editorState: t, searchId: n } = this.props;
        if (t !== e.editorState) {
            let e = R.kG(x.Sq(t)),
                i = O.g9(e, t);
            _.u$(n, e, i), null != this._editorRef && x.iE(this._editorRef.editor);
        }
    }
    componentWillUnmount() {
        S.S.unsubscribe(L.CkL.PERFORM_SEARCH, this.search), S.S.unsubscribe(L.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), S.S.unsubscribe(L.CkL.FOCUS_SEARCH, this.handleFocusSearch);
    }
    tokenize(e) {
        let t = R.kG(x.Sq(e)).filter((e) => e.type !== I.ZP.NON_TOKEN_TYPE);
        return x.lv(t, e, m.ZP);
    }
    clearSearch() {
        let { searchId: e } = this.props;
        null != e && _.qt(e);
    }
    handlePastedFiles() {
        return !0;
    }
    handleDroppedFiles() {
        return !0;
    }
    handleDrop() {
        return !0;
    }
    renderInput(e) {
        let { editorState: t } = this.props;
        return (0, i.jsx)(l.Editor, {
            autoCorrect: 'off',
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
            role: 'combobox',
            ariaExpanded: e,
            ariaControls: e ? D : void 0,
            ariaLabel: Z.Z.Messages.SEARCH,
            ariaAutocomplete: 'list'
        });
    }
    render() {
        let { searchId: e, editorState: t, hasResults: n, className: s } = this.props,
            { focused: a } = this.state,
            l = x.Sq(t).length > 0;
        return null == e
            ? null
            : (0, i.jsx)(d.Popout, {
                  renderPopout: this.renderPopout,
                  position: 'bottom',
                  animation: d.Popout.Animation.NONE,
                  shouldShow: a,
                  autoInvert: !1,
                  children: (t, o) => {
                      var c;
                      let { isShown: u } = o;
                      return (0, i.jsx)('div', {
                          className: s,
                          children: (0, i.jsx)('div', {
                              className: r()(P.search, {
                                  [P.open]: l || a,
                                  [P.focused]: a
                              }),
                              children: (0, i.jsx)(d.FocusRing, {
                                  focusTarget: { current: null === (c = this._editorRef) || void 0 === c ? void 0 : c.editor },
                                  ringTarget: this._searchBarRef,
                                  children: (0, i.jsxs)(
                                      'div',
                                      {
                                          className: P.searchBar,
                                          ref: this._searchBarRef,
                                          children: [
                                              this.renderInput(u),
                                              (0, i.jsx)(E.BK, {
                                                  onClear: this.handleClearSearch,
                                                  hasContent: l || n,
                                                  className: P.icon
                                              })
                                          ]
                                      },
                                      e
                                  )
                              })
                          })
                      });
                  }
              });
    }
    constructor(e) {
        super(e),
            b(this, 'state', {
                focused: !1,
                selectedIndex: void 0
            }),
            b(this, '_editorRef', void 0),
            b(this, '_searchBarRef', s.createRef()),
            b(this, '_searchPopoutRef', s.createRef()),
            b(this, 'handleSetSearchQuery', (e) => {
                let { query: t, anchor: n, focus: i, performSearch: s, replace: a } = e,
                    { editorState: r } = this.props,
                    l = x.Sq(r);
                ' ' !== t.charAt(t.length - 1) && (t += ' '), null != n && 0 !== n && ' ' !== l.charAt(n - 1) && ' ' !== t.charAt(0) && (t = ' ' + t), a ? ((r = x.c2(t, r)), (n = 0)) : (r = x.x0(t, r, n, i)), (r = x.Hl(r, 512)), (r = this.tokenize(r));
                let o = Number(n) + t.length;
                (r = x.iK(o, r)), this.setEditorState(r), s && this.search({ queryString: x.Sq(r) });
            }),
            b(this, 'handleSelectedIndexChanged', (e) => {
                var t, n;
                null === (n = this._editorRef) || void 0 === n || null === (t = n.editor) || void 0 === t || t.setAttribute('aria-activedescendant', null != e ? ''.concat(D, '-').concat(e) : void 0), this.setState({ selectedIndex: e });
            }),
            b(this, 'renderPopout', () =>
                (0, i.jsx)(v.ZP, {
                    ref: this._searchPopoutRef,
                    navId: D,
                    onSelectedIndexChanged: this.handleSelectedIndexChanged
                })
            ),
            b(this, 'search', (e) => {
                let { searchId: t, isSearching: n } = this.props,
                    { queryString: i, searchEverywhere: s } = null != e ? e : {};
                if (null == i || '' === i) {
                    let { editorState: e } = this.props;
                    i = x.Sq(e);
                }
                if (null != t && !n) {
                    let e = R.kG(i),
                        n = R.$G(e);
                    for (let t = 0; t < e.length; t++) !R.Fr(e[t], e[t + 1]) && (i = i.substring(0, e[t].start) + i.substring(e[t].end));
                    if (0 === e.length || 0 === Object.keys(n).length) return !1;
                    j(t, n, i, !!s), d.AccessibilityAnnouncer.announce(Z.Z.Messages.SEARCH_STARTED_A11Y_ANNOUNCE), this.onBlur();
                }
                return !0;
            }),
            b(this, 'handleClearSearch', (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                if ((e.preventDefault(), e.stopPropagation(), '' === x.Sq(t))) {
                    this.focusEditor();
                    return;
                }
                (t = x.Hl(t, 0)), this.setEditorState(t), !n && Promise.resolve().then(() => this.blurEditor());
            }),
            b(this, 'handleFocusSearch', (e) => {
                let { prefillCurrentChannel: t } = e;
                if (!t) {
                    this.focusEditor();
                    return;
                }
                let n = A.Z.getChannelId(),
                    i = C.Z.getChannel(n);
                if (((null == i ? void 0 : i.isThread()) && (i = C.Z.getChannel(null == i ? void 0 : i.parent_id)), null == i || i.isPrivate())) {
                    this.focusEditor();
                    return;
                }
                let s = p.ZP.getTextChannelNameDisambiguations(i.getGuildId())[i.id],
                    a = null != s ? s.name : i.name;
                Promise.resolve().then(() => {
                    let { _editorRef: e } = this;
                    null == e || e.focus(),
                        this.handleSetSearchQuery({
                            query: m.ZP[L.dCx.FILTER_IN].key + '#'.concat(a, ' '),
                            replace: !0
                        });
                });
            }),
            b(this, 'focusEditor', () => {
                let { _editorRef: e } = this;
                null != e && Promise.resolve().then(() => e.focus());
            }),
            b(this, 'blurEditor', () => {
                let { _editorRef: e } = this;
                null != e && Promise.resolve().then(() => e.blur());
            }),
            b(this, 'setEditorRef', (e) => {
                this._editorRef = e;
            }),
            b(this, 'onFocus', () => {
                let { searchType: e } = this.props;
                N.ZP.trackWithMetadata(L.rMx.SEARCH_OPENED, { search_type: e }), this.setState({ focused: !0 });
            }),
            b(this, 'onBlur', () => {
                this.setState({ focused: !1 }, () => {
                    x.xb(this.props.editorState) && this.clearSearch();
                });
            }),
            b(this, 'handleReturn', (e) => {
                let { shiftKey: t } = e;
                e.preventDefault();
                let { current: n } = this._searchPopoutRef;
                return !(null != n && n.selectOption()) && ((0, M.X)() && t ? this.search({ searchEverywhere: !0 }) : this.search()), !0;
            }),
            b(this, 'handleBeforeInput', (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                return !!(x.Sq(t).length >= 512) || ((t = x.x0(e, t)), (t = x.Hl(t, 512)), (t = this.tokenize(t)), this.setEditorState(t), !n && this.setState({ focused: !0 }), !0);
            }),
            b(this, 'handleKeyCommand', (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                switch (e) {
                    case 'backspace':
                    case 'backspace-word':
                    case 'backspace-to-start-of-line':
                    case 'delete':
                    case 'delete-word':
                        return (t = x.yd(e, t)), (t = this.tokenize(t)), this.setEditorState(t), !n && this.setState({ focused: !0 }), !0;
                    case 'transpose-characters':
                    case 'move-selection-to-start-of-block':
                    case 'move-selection-to-end-of-block':
                        return (t = x.Zn(e, t)), (t = this.tokenize(t)), this.setEditorState(t), !0;
                    case 'split-block':
                    case 'underline':
                    case 'bold':
                    case 'italic':
                        return !0;
                }
            }),
            b(this, 'handlePastedText', (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                return (e = null != e ? e.replace(/\n/g, '') : ''), (t = x.x0(e, t)), (t = x.Hl(t, 512)), (t = this.tokenize(t)), !n && this.setState({ focused: !0 }), this.setEditorState(t), !0;
            }),
            b(this, 'setEditorState', (e) => {
                let { searchId: t } = this.props;
                _.j8(t, e);
            }),
            b(this, 'handleKeyBind', (e) => {
                let { key: t, metaKey: n, shiftKey: i } = e,
                    { editorState: s, searchId: a, keyboardModeEnabled: r } = this.props;
                if ((e.stopPropagation(), 'Escape' === t)) {
                    if ((e.preventDefault(), x.xb(s))) this.blurEditor();
                    else {
                        let e = x.FZ(s);
                        _.j8(a, e), this.setState({ focused: !0 });
                    }
                    return !0;
                }
                if ('ArrowUp' === t) {
                    e.preventDefault();
                    let { current: t } = this._searchPopoutRef;
                    return null != t && t.focusPreviousOption(), !0;
                }
                if ('ArrowDown' === t) {
                    e.preventDefault();
                    let { current: t } = this._searchPopoutRef;
                    return null != t && t.focusNextOption(), !0;
                }
                if ('Tab' === t) {
                    if (r) return;
                    return (0, T.Qj)(), !0;
                }
                if ('Home' === t || ('ArrowLeft' === t && n)) return e.preventDefault(), (s = i ? x.R8(s) : x.eE(s)), this.setEditorState(s), !0;
                if ('End' === t || ('ArrowRight' === t && n)) return e.preventDefault(), (s = i ? x.Wg(s) : x.NJ(s)), this.setEditorState(s), !0;
                if (('Delete' === t || 'Backspace' === t) && n) {
                    let e = x.FZ(s);
                    return this.setEditorState(e), !0;
                }
                return x.q0(e);
            }),
            R.WU();
    }
}
t.Z = u.ZP.connectStores([h.Z, g.Z], () => {
    var e;
    let t = g.Z.getCurrentSearchId(),
        n = g.Z.getSearchType(),
        i = null != t && g.Z.isSearching(t),
        s = null != t && null !== (e = g.Z.getEditorState(t)) && void 0 !== e ? e : x.nR(O.Jl(m.ZP)),
        a = h.Z.keyboardModeEnabled;
    return {
        searchId: t,
        searchType: n,
        isSearching: i,
        editorState: s,
        hasResults: g.Z.hasResults(t),
        keyboardModeEnabled: a
    };
})(U);
