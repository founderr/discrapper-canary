n(757143);
var r = n(735250),
    i = n(470079),
    l = n(120356),
    s = n.n(l),
    a = n(371917),
    o = n(299608),
    c = n.n(o),
    u = n(442837),
    d = n(481060),
    h = n(603263),
    _ = n(461745),
    f = n(349033),
    E = n(999650),
    p = n(857595),
    m = n(607070),
    I = n(367907),
    C = n(313201),
    S = n(592125),
    g = n(984933),
    R = n(768119),
    T = n(944486),
    N = n(585483),
    x = n(72006),
    v = n(405656),
    b = n(181389),
    L = n(854709),
    O = n(778177),
    A = n(981631),
    P = n(689938),
    Z = n(948488);
function y(e, t, n) {
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
let M = (0, C.hQ)(),
    j = c()(h.yC, 500);
class U extends i.PureComponent {
    componentDidMount() {
        var e, t;
        N.S.subscribe(A.CkL.PERFORM_SEARCH, this.search), N.S.subscribe(A.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), N.S.subscribe(A.CkL.FOCUS_SEARCH, this.handleFocusSearch), null === (t = this._editorRef) || void 0 === t || null === (e = t.editor) || void 0 === e || e.setAttribute('aria-haspopup', 'listbox');
    }
    componentDidUpdate(e) {
        let { editorState: t, searchId: n } = this.props;
        if (t !== e.editorState) {
            let e = v.kG(x.Sq(t)),
                r = b.g9(e, t);
            h.u$(n, e, r), null != this._editorRef && x.iE(this._editorRef.editor);
        }
    }
    componentWillUnmount() {
        N.S.unsubscribe(A.CkL.PERFORM_SEARCH, this.search), N.S.unsubscribe(A.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), N.S.unsubscribe(A.CkL.FOCUS_SEARCH, this.handleFocusSearch);
    }
    tokenize(e) {
        let t = v.kG(x.Sq(e)).filter((e) => e.type !== f.ZP.NON_TOKEN_TYPE);
        return x.lv(t, e, E.ZP);
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
            placeholder: P.Z.Messages.SEARCH,
            editorState: t,
            onChange: this.setEditorState,
            role: 'combobox',
            ariaExpanded: e,
            ariaControls: e ? M : void 0,
            ariaLabel: P.Z.Messages.SEARCH,
            ariaAutocomplete: 'list'
        });
    }
    render() {
        let { searchId: e, editorState: t, hasResults: n, className: i } = this.props,
            { focused: l } = this.state,
            a = x.Sq(t).length > 0;
        return null == e
            ? null
            : (0, r.jsx)(d.Popout, {
                  renderPopout: this.renderPopout,
                  position: 'bottom',
                  animation: d.Popout.Animation.NONE,
                  shouldShow: l,
                  autoInvert: !1,
                  children: (t, o) => {
                      var c;
                      let { isShown: u } = o;
                      return (0, r.jsx)('div', {
                          className: i,
                          children: (0, r.jsx)('div', {
                              className: s()(Z.search, {
                                  [Z.open]: a || l,
                                  [Z.focused]: l
                              }),
                              children: (0, r.jsx)(d.FocusRing, {
                                  focusTarget: { current: null === (c = this._editorRef) || void 0 === c ? void 0 : c.editor },
                                  ringTarget: this._searchBarRef,
                                  children: (0, r.jsxs)(
                                      'div',
                                      {
                                          className: Z.searchBar,
                                          ref: this._searchBarRef,
                                          children: [
                                              this.renderInput(u),
                                              (0, r.jsx)(_.BK, {
                                                  onClear: this.handleClearSearch,
                                                  hasContent: a || n,
                                                  className: Z.icon
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
            y(this, 'state', {
                focused: !1,
                selectedIndex: void 0
            }),
            y(this, '_editorRef', void 0),
            y(this, '_searchBarRef', i.createRef()),
            y(this, '_searchPopoutRef', i.createRef()),
            y(this, 'handleSetSearchQuery', (e) => {
                let { query: t, anchor: n, focus: r, performSearch: i, replace: l } = e,
                    { editorState: s } = this.props,
                    a = x.Sq(s);
                ' ' !== t.charAt(t.length - 1) && (t += ' '), null != n && 0 !== n && ' ' !== a.charAt(n - 1) && ' ' !== t.charAt(0) && (t = ' ' + t), l ? ((s = x.c2(t, s)), (n = 0)) : (s = x.x0(t, s, n, r)), (s = x.Hl(s, 512)), (s = this.tokenize(s));
                let o = Number(n) + t.length;
                (s = x.iK(o, s)), this.setEditorState(s), i && this.search({ queryString: x.Sq(s) });
            }),
            y(this, 'handleSelectedIndexChanged', (e) => {
                var t, n;
                null === (n = this._editorRef) || void 0 === n || null === (t = n.editor) || void 0 === t || t.setAttribute('aria-activedescendant', null != e ? ''.concat(M, '-').concat(e) : void 0), this.setState({ selectedIndex: e });
            }),
            y(this, 'renderPopout', () =>
                (0, r.jsx)(O.ZP, {
                    ref: this._searchPopoutRef,
                    navId: M,
                    onSelectedIndexChanged: this.handleSelectedIndexChanged
                })
            ),
            y(this, 'search', (e) => {
                let { searchId: t, isSearching: n } = this.props,
                    { queryString: r, searchEverywhere: i } = null != e ? e : {};
                if (null == r || '' === r) {
                    let { editorState: e } = this.props;
                    r = x.Sq(e);
                }
                if (null != t && !n) {
                    let e = v.kG(r),
                        n = v.$G(e);
                    for (let t = 0; t < e.length; t++) !v.Fr(e[t], e[t + 1]) && (r = r.substring(0, e[t].start) + r.substring(e[t].end));
                    if (0 === e.length || 0 === Object.keys(n).length) return !1;
                    j(t, n, r, !!i), d.AccessibilityAnnouncer.announce(P.Z.Messages.SEARCH_STARTED_A11Y_ANNOUNCE), this.onBlur();
                }
                return !0;
            }),
            y(this, 'handleClearSearch', (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                if ((e.preventDefault(), e.stopPropagation(), '' === x.Sq(t))) {
                    this.focusEditor();
                    return;
                }
                (t = x.Hl(t, 0)), this.setEditorState(t), !n && Promise.resolve().then(() => this.blurEditor());
            }),
            y(this, 'handleFocusSearch', (e) => {
                let { prefillCurrentChannel: t } = e;
                if (!t) {
                    this.focusEditor();
                    return;
                }
                let n = T.Z.getChannelId(),
                    r = S.Z.getChannel(n);
                if (((null == r ? void 0 : r.isThread()) && (r = S.Z.getChannel(null == r ? void 0 : r.parent_id)), null == r || r.isPrivate())) {
                    this.focusEditor();
                    return;
                }
                let i = g.ZP.getTextChannelNameDisambiguations(r.getGuildId())[r.id],
                    l = null != i ? i.name : r.name;
                Promise.resolve().then(() => {
                    let { _editorRef: e } = this;
                    null == e || e.focus(),
                        this.handleSetSearchQuery({
                            query: E.ZP[A.dCx.FILTER_IN].key + '#'.concat(l, ' '),
                            replace: !0
                        });
                });
            }),
            y(this, 'focusEditor', () => {
                let { _editorRef: e } = this;
                null != e && Promise.resolve().then(() => e.focus());
            }),
            y(this, 'blurEditor', () => {
                let { _editorRef: e } = this;
                null != e && Promise.resolve().then(() => e.blur());
            }),
            y(this, 'setEditorRef', (e) => {
                this._editorRef = e;
            }),
            y(this, 'onFocus', () => {
                let { searchType: e } = this.props;
                I.ZP.trackWithMetadata(A.rMx.SEARCH_OPENED, { search_type: e }), this.setState({ focused: !0 });
            }),
            y(this, 'onBlur', () => {
                this.setState({ focused: !1 }, () => {
                    x.xb(this.props.editorState) && this.clearSearch();
                });
            }),
            y(this, 'handleReturn', (e) => {
                let { shiftKey: t } = e;
                e.preventDefault();
                let { current: n } = this._searchPopoutRef;
                return !(null != n && n.selectOption()) && ((0, L.X)() && t ? this.search({ searchEverywhere: !0 }) : this.search()), !0;
            }),
            y(this, 'handleBeforeInput', (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                return !!(x.Sq(t).length >= 512) || ((t = x.x0(e, t)), (t = x.Hl(t, 512)), (t = this.tokenize(t)), this.setEditorState(t), !n && this.setState({ focused: !0 }), !0);
            }),
            y(this, 'handleKeyCommand', (e) => {
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
            y(this, 'handlePastedText', (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                return (e = null != e ? e.replace(/\n/g, '') : ''), (t = x.x0(e, t)), (t = x.Hl(t, 512)), (t = this.tokenize(t)), !n && this.setState({ focused: !0 }), this.setEditorState(t), !0;
            }),
            y(this, 'setEditorState', (e) => {
                let { searchId: t } = this.props;
                h.j8(t, e);
            }),
            y(this, 'handleKeyBind', (e) => {
                let { key: t, metaKey: n, shiftKey: r } = e,
                    { editorState: i, searchId: l, keyboardModeEnabled: s } = this.props;
                if ((e.stopPropagation(), 'Escape' === t)) {
                    if ((e.preventDefault(), x.xb(i))) this.blurEditor();
                    else {
                        let e = x.FZ(i);
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
                if ('Home' === t || ('ArrowLeft' === t && n)) return e.preventDefault(), (i = r ? x.R8(i) : x.eE(i)), this.setEditorState(i), !0;
                if ('End' === t || ('ArrowRight' === t && n)) return e.preventDefault(), (i = r ? x.Wg(i) : x.NJ(i)), this.setEditorState(i), !0;
                if (('Delete' === t || 'Backspace' === t) && n) {
                    let e = x.FZ(i);
                    return this.setEditorState(e), !0;
                }
                return x.q0(e);
            }),
            v.WU();
    }
}
t.Z = u.ZP.connectStores([m.Z, R.Z], () => {
    var e;
    let t = R.Z.getCurrentSearchId(),
        n = R.Z.getSearchType(),
        r = null != t && R.Z.isSearching(t),
        i = null != t && null !== (e = R.Z.getEditorState(t)) && void 0 !== e ? e : x.nR(b.Jl(E.ZP)),
        l = m.Z.keyboardModeEnabled;
    return {
        searchId: t,
        searchType: n,
        isSearching: r,
        editorState: i,
        hasResults: R.Z.hasResults(t),
        keyboardModeEnabled: l
    };
})(U);
