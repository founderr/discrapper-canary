n(757143);
var r = n(735250),
    i = n(470079),
    l = n(120356),
    s = n.n(l),
    a = n(371917),
    o = n(299608),
    u = n.n(o),
    c = n(442837),
    d = n(481060),
    h = n(603263),
    _ = n(461745),
    f = n(349033),
    E = n(999650),
    p = n(857595),
    m = n(607070),
    C = n(367907),
    S = n(313201),
    I = n(592125),
    g = n(984933),
    T = n(768119),
    R = n(944486),
    N = n(585483),
    v = n(72006),
    x = n(405656),
    A = n(181389),
    L = n(854709),
    b = n(778177),
    O = n(981631),
    Z = n(689938),
    P = n(948488);
function M(e, t, n) {
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
let y = (0, S.hQ)(),
    j = u()(h.yC, 500);
class U extends i.PureComponent {
    componentDidMount() {
        var e, t;
        N.S.subscribe(O.CkL.PERFORM_SEARCH, this.search), N.S.subscribe(O.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), N.S.subscribe(O.CkL.FOCUS_SEARCH, this.handleFocusSearch), null === (t = this._editorRef) || void 0 === t || null === (e = t.editor) || void 0 === e || e.setAttribute('aria-haspopup', 'listbox');
    }
    componentDidUpdate(e) {
        let { editorState: t, searchId: n } = this.props;
        if (t !== e.editorState) {
            let e = x.kG(v.Sq(t)),
                r = A.g9(e, t);
            h.u$(n, e, r), null != this._editorRef && v.iE(this._editorRef.editor);
        }
    }
    componentWillUnmount() {
        N.S.unsubscribe(O.CkL.PERFORM_SEARCH, this.search), N.S.unsubscribe(O.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), N.S.unsubscribe(O.CkL.FOCUS_SEARCH, this.handleFocusSearch);
    }
    tokenize(e) {
        let t = x.kG(v.Sq(e)).filter((e) => e.type !== f.ZP.NON_TOKEN_TYPE);
        return v.lv(t, e, E.ZP);
    }
    clearSearch() {
        let { searchId: e } = this.props;
        null != e && h.qt(e);
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
        return (0, r.jsx)(a.Editor, {
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
            ariaControls: e ? y : void 0,
            ariaLabel: Z.Z.Messages.SEARCH,
            ariaAutocomplete: 'list'
        });
    }
    render() {
        let { searchId: e, editorState: t, hasResults: n, className: i } = this.props,
            { focused: l } = this.state,
            a = v.Sq(t).length > 0;
        return null == e
            ? null
            : (0, r.jsx)(d.Popout, {
                  renderPopout: this.renderPopout,
                  position: 'bottom',
                  animation: d.Popout.Animation.NONE,
                  shouldShow: l,
                  autoInvert: !1,
                  children: (t, o) => {
                      var u;
                      let { isShown: c } = o;
                      return (0, r.jsx)('div', {
                          className: i,
                          children: (0, r.jsx)('div', {
                              className: s()(P.search, {
                                  [P.open]: a || l,
                                  [P.focused]: l
                              }),
                              children: (0, r.jsx)(d.FocusRing, {
                                  focusTarget: { current: null === (u = this._editorRef) || void 0 === u ? void 0 : u.editor },
                                  ringTarget: this._searchBarRef,
                                  children: (0, r.jsxs)(
                                      'div',
                                      {
                                          className: P.searchBar,
                                          ref: this._searchBarRef,
                                          children: [
                                              this.renderInput(c),
                                              (0, r.jsx)(_.BK, {
                                                  onClear: this.handleClearSearch,
                                                  hasContent: a || n,
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
            M(this, 'state', {
                focused: !1,
                selectedIndex: void 0
            }),
            M(this, '_editorRef', void 0),
            M(this, '_searchBarRef', i.createRef()),
            M(this, '_searchPopoutRef', i.createRef()),
            M(this, 'handleSetSearchQuery', (e) => {
                let { query: t, anchor: n, focus: r, performSearch: i, replace: l } = e,
                    { editorState: s } = this.props,
                    a = v.Sq(s);
                ' ' !== t.charAt(t.length - 1) && (t += ' '), null != n && 0 !== n && ' ' !== a.charAt(n - 1) && ' ' !== t.charAt(0) && (t = ' ' + t), l ? ((s = v.c2(t, s)), (n = 0)) : (s = v.x0(t, s, n, r)), (s = v.Hl(s, 512)), (s = this.tokenize(s));
                let o = Number(n) + t.length;
                (s = v.iK(o, s)), this.setEditorState(s), i && this.search({ queryString: v.Sq(s) });
            }),
            M(this, 'handleSelectedIndexChanged', (e) => {
                var t, n;
                null === (n = this._editorRef) || void 0 === n || null === (t = n.editor) || void 0 === t || t.setAttribute('aria-activedescendant', null != e ? ''.concat(y, '-').concat(e) : void 0), this.setState({ selectedIndex: e });
            }),
            M(this, 'renderPopout', () =>
                (0, r.jsx)(b.ZP, {
                    ref: this._searchPopoutRef,
                    navId: y,
                    onSelectedIndexChanged: this.handleSelectedIndexChanged
                })
            ),
            M(this, 'search', (e) => {
                let { searchId: t, isSearching: n } = this.props,
                    { queryString: r, searchEverywhere: i } = null != e ? e : {};
                if (null == r || '' === r) {
                    let { editorState: e } = this.props;
                    r = v.Sq(e);
                }
                if (null != t && !n) {
                    let e = x.kG(r),
                        n = x.$G(e);
                    for (let t = 0; t < e.length; t++) !x.Fr(e[t], e[t + 1]) && (r = r.substring(0, e[t].start) + r.substring(e[t].end));
                    if (0 === e.length || 0 === Object.keys(n).length) return !1;
                    j(t, n, r, !!i), d.AccessibilityAnnouncer.announce(Z.Z.Messages.SEARCH_STARTED_A11Y_ANNOUNCE), this.onBlur();
                }
                return !0;
            }),
            M(this, 'handleClearSearch', (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                if ((e.preventDefault(), e.stopPropagation(), '' === v.Sq(t))) {
                    this.focusEditor();
                    return;
                }
                (t = v.Hl(t, 0)), this.setEditorState(t), !n && Promise.resolve().then(() => this.blurEditor());
            }),
            M(this, 'handleFocusSearch', (e) => {
                let { prefillCurrentChannel: t } = e;
                if (!t) {
                    this.focusEditor();
                    return;
                }
                let n = R.Z.getChannelId(),
                    r = I.Z.getChannel(n);
                if (((null == r ? void 0 : r.isThread()) && (r = I.Z.getChannel(null == r ? void 0 : r.parent_id)), null == r || r.isPrivate())) {
                    this.focusEditor();
                    return;
                }
                let i = g.ZP.getTextChannelNameDisambiguations(r.getGuildId())[r.id],
                    l = null != i ? i.name : r.name;
                Promise.resolve().then(() => {
                    let { _editorRef: e } = this;
                    null == e || e.focus(),
                        this.handleSetSearchQuery({
                            query: E.ZP[O.dCx.FILTER_IN].key + '#'.concat(l, ' '),
                            replace: !0
                        });
                });
            }),
            M(this, 'focusEditor', () => {
                let { _editorRef: e } = this;
                null != e && Promise.resolve().then(() => e.focus());
            }),
            M(this, 'blurEditor', () => {
                let { _editorRef: e } = this;
                null != e && Promise.resolve().then(() => e.blur());
            }),
            M(this, 'setEditorRef', (e) => {
                this._editorRef = e;
            }),
            M(this, 'onFocus', () => {
                let { searchType: e } = this.props;
                C.ZP.trackWithMetadata(O.rMx.SEARCH_OPENED, { search_type: e }), this.setState({ focused: !0 });
            }),
            M(this, 'onBlur', () => {
                this.setState({ focused: !1 }, () => {
                    v.xb(this.props.editorState) && this.clearSearch();
                });
            }),
            M(this, 'handleReturn', (e) => {
                let { shiftKey: t } = e;
                e.preventDefault();
                let { current: n } = this._searchPopoutRef;
                return !(null != n && n.selectOption()) && ((0, L.X)() && t ? this.search({ searchEverywhere: !0 }) : this.search()), !0;
            }),
            M(this, 'handleBeforeInput', (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                return !!(v.Sq(t).length >= 512) || ((t = v.x0(e, t)), (t = v.Hl(t, 512)), (t = this.tokenize(t)), this.setEditorState(t), !n && this.setState({ focused: !0 }), !0);
            }),
            M(this, 'handleKeyCommand', (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                switch (e) {
                    case 'backspace':
                    case 'backspace-word':
                    case 'backspace-to-start-of-line':
                    case 'delete':
                    case 'delete-word':
                        return (t = v.yd(e, t)), (t = this.tokenize(t)), this.setEditorState(t), !n && this.setState({ focused: !0 }), !0;
                    case 'transpose-characters':
                    case 'move-selection-to-start-of-block':
                    case 'move-selection-to-end-of-block':
                        return (t = v.Zn(e, t)), (t = this.tokenize(t)), this.setEditorState(t), !0;
                    case 'split-block':
                    case 'underline':
                    case 'bold':
                    case 'italic':
                        return !0;
                }
            }),
            M(this, 'handlePastedText', (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                return (e = null != e ? e.replace(/\n/g, '') : ''), (t = v.x0(e, t)), (t = v.Hl(t, 512)), (t = this.tokenize(t)), !n && this.setState({ focused: !0 }), this.setEditorState(t), !0;
            }),
            M(this, 'setEditorState', (e) => {
                let { searchId: t } = this.props;
                h.j8(t, e);
            }),
            M(this, 'handleKeyBind', (e) => {
                let { key: t, metaKey: n, shiftKey: r } = e,
                    { editorState: i, searchId: l, keyboardModeEnabled: s } = this.props;
                if ((e.stopPropagation(), 'Escape' === t)) {
                    if ((e.preventDefault(), v.xb(i))) this.blurEditor();
                    else {
                        let e = v.FZ(i);
                        h.j8(l, e), this.setState({ focused: !0 });
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
                    if (s) return;
                    return (0, p.Qj)(), !0;
                }
                if ('Home' === t || ('ArrowLeft' === t && n)) return e.preventDefault(), (i = r ? v.R8(i) : v.eE(i)), this.setEditorState(i), !0;
                if ('End' === t || ('ArrowRight' === t && n)) return e.preventDefault(), (i = r ? v.Wg(i) : v.NJ(i)), this.setEditorState(i), !0;
                if (('Delete' === t || 'Backspace' === t) && n) {
                    let e = v.FZ(i);
                    return this.setEditorState(e), !0;
                }
                return v.q0(e);
            }),
            x.WU();
    }
}
t.Z = c.ZP.connectStores([m.Z, T.Z], () => {
    var e;
    let t = T.Z.getCurrentSearchId(),
        n = T.Z.getSearchType(),
        r = null != t && T.Z.isSearching(t),
        i = null != t && null !== (e = T.Z.getEditorState(t)) && void 0 !== e ? e : v.nR(A.Jl(E.ZP)),
        l = m.Z.keyboardModeEnabled;
    return {
        searchId: t,
        searchType: n,
        isSearching: r,
        editorState: i,
        hasResults: T.Z.hasResults(t),
        keyboardModeEnabled: l
    };
})(U);
