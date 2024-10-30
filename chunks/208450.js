n(757143);
var i = n(200651),
    a = n(192379),
    s = n(120356),
    r = n.n(s),
    l = n(5148),
    o = n(299608),
    c = n.n(o),
    u = n(442837),
    d = n(481060),
    _ = n(603263),
    E = n(461745),
    I = n(349033),
    m = n(999650),
    f = n(857595),
    h = n(607070),
    T = n(367907),
    N = n(313201),
    p = n(592125),
    C = n(984933),
    g = n(768119),
    S = n(944486),
    A = n(585483),
    x = n(72006),
    R = n(405656),
    v = n(181389),
    M = n(854709),
    O = n(778177),
    L = n(981631),
    Z = n(689938),
    b = n(948488);
function P(e, t, n) {
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
n(855542);
let D = (0, N.hQ)(),
    j = c()(_.yC, 500);
class U extends a.PureComponent {
    componentDidMount() {
        var e, t;
        A.S.subscribe(L.CkL.PERFORM_SEARCH, this.search), A.S.subscribe(L.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), A.S.subscribe(L.CkL.FOCUS_SEARCH, this.handleFocusSearch), null === (t = this._editorRef) || void 0 === t || null === (e = t.editor) || void 0 === e || e.setAttribute('aria-haspopup', 'listbox');
    }
    componentDidUpdate(e) {
        let { editorState: t, searchId: n } = this.props;
        if (t !== e.editorState) {
            let e = R.kG(x.Sq(t)),
                i = v.g9(e, t);
            _.u$(n, e, i), null != this._editorRef && x.iE(this._editorRef.editor);
        }
    }
    componentWillUnmount() {
        A.S.unsubscribe(L.CkL.PERFORM_SEARCH, this.search), A.S.unsubscribe(L.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), A.S.unsubscribe(L.CkL.FOCUS_SEARCH, this.handleFocusSearch);
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
        let { searchId: e, editorState: t, hasResults: n, className: a } = this.props,
            { focused: s } = this.state,
            l = x.Sq(t).length > 0;
        return null == e
            ? null
            : (0, i.jsx)(d.Popout, {
                  renderPopout: this.renderPopout,
                  position: 'bottom',
                  animation: d.Popout.Animation.NONE,
                  shouldShow: s,
                  autoInvert: !1,
                  children: (t, o) => {
                      var c;
                      let { isShown: u } = o;
                      return (0, i.jsx)('div', {
                          className: a,
                          children: (0, i.jsx)('div', {
                              className: r()(b.search, {
                                  [b.open]: l || s,
                                  [b.focused]: s
                              }),
                              children: (0, i.jsx)(d.FocusRing, {
                                  focusTarget: { current: null === (c = this._editorRef) || void 0 === c ? void 0 : c.editor },
                                  ringTarget: this._searchBarRef,
                                  children: (0, i.jsxs)(
                                      'div',
                                      {
                                          className: b.searchBar,
                                          ref: this._searchBarRef,
                                          children: [
                                              this.renderInput(u),
                                              (0, i.jsx)(E.BK, {
                                                  onClear: this.handleClearSearch,
                                                  hasContent: l || n,
                                                  className: b.icon
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
            P(this, 'state', {
                focused: !1,
                selectedIndex: void 0
            }),
            P(this, '_editorRef', void 0),
            P(this, '_searchBarRef', a.createRef()),
            P(this, '_searchPopoutRef', a.createRef()),
            P(this, 'handleSetSearchQuery', (e) => {
                let { query: t, anchor: n, focus: i, performSearch: a, replace: s } = e,
                    { editorState: r } = this.props,
                    l = x.Sq(r);
                ' ' !== t.charAt(t.length - 1) && (t += ' '), null != n && 0 !== n && ' ' !== l.charAt(n - 1) && ' ' !== t.charAt(0) && (t = ' ' + t), s ? ((r = x.c2(t, r)), (n = 0)) : (r = x.x0(t, r, n, i)), (r = x.Hl(r, 512)), (r = this.tokenize(r));
                let o = Number(n) + t.length;
                (r = x.iK(o, r)), this.setEditorState(r), a && this.search({ queryString: x.Sq(r) });
            }),
            P(this, 'handleSelectedIndexChanged', (e) => {
                var t, n;
                null === (n = this._editorRef) || void 0 === n || null === (t = n.editor) || void 0 === t || t.setAttribute('aria-activedescendant', null != e ? ''.concat(D, '-').concat(e) : void 0), this.setState({ selectedIndex: e });
            }),
            P(this, 'renderPopout', () =>
                (0, i.jsx)(O.ZP, {
                    ref: this._searchPopoutRef,
                    navId: D,
                    onSelectedIndexChanged: this.handleSelectedIndexChanged
                })
            ),
            P(this, 'search', (e) => {
                let { searchId: t, isSearching: n } = this.props,
                    { queryString: i, searchEverywhere: a } = null != e ? e : {};
                if (null == i || '' === i) {
                    let { editorState: e } = this.props;
                    i = x.Sq(e);
                }
                if (null != t && !n) {
                    let e = R.kG(i),
                        n = R.$G(e);
                    for (let t = 0; t < e.length; t++) !R.Fr(e[t], e[t + 1]) && (i = i.substring(0, e[t].start) + i.substring(e[t].end));
                    if (0 === e.length || 0 === Object.keys(n).length) return !1;
                    j(t, n, i, !!a), d.AccessibilityAnnouncer.announce(Z.Z.Messages.SEARCH_STARTED_A11Y_ANNOUNCE), this.onBlur();
                }
                return !0;
            }),
            P(this, 'handleClearSearch', (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                if ((e.preventDefault(), e.stopPropagation(), '' === x.Sq(t))) {
                    this.focusEditor();
                    return;
                }
                (t = x.Hl(t, 0)), this.setEditorState(t), !n && Promise.resolve().then(() => this.blurEditor());
            }),
            P(this, 'handleFocusSearch', (e) => {
                let { prefillCurrentChannel: t } = e;
                if (!t) {
                    this.focusEditor();
                    return;
                }
                let n = S.Z.getChannelId(),
                    i = p.Z.getChannel(n);
                if (((null == i ? void 0 : i.isThread()) && (i = p.Z.getChannel(null == i ? void 0 : i.parent_id)), null == i || i.isPrivate())) {
                    this.focusEditor();
                    return;
                }
                let a = C.ZP.getTextChannelNameDisambiguations(i.getGuildId())[i.id],
                    s = null != a ? a.name : i.name;
                Promise.resolve().then(() => {
                    let { _editorRef: e } = this;
                    null == e || e.focus(),
                        this.handleSetSearchQuery({
                            query: m.ZP[L.dCx.FILTER_IN].key + '#'.concat(s, ' '),
                            replace: !0
                        });
                });
            }),
            P(this, 'focusEditor', () => {
                let { _editorRef: e } = this;
                null != e && Promise.resolve().then(() => e.focus());
            }),
            P(this, 'blurEditor', () => {
                let { _editorRef: e } = this;
                null != e && Promise.resolve().then(() => e.blur());
            }),
            P(this, 'setEditorRef', (e) => {
                this._editorRef = e;
            }),
            P(this, 'onFocus', () => {
                let { searchType: e } = this.props;
                T.ZP.trackWithMetadata(L.rMx.SEARCH_OPENED, { search_type: e }), this.setState({ focused: !0 });
            }),
            P(this, 'onBlur', () => {
                this.setState({ focused: !1 }, () => {
                    x.xb(this.props.editorState) && this.clearSearch();
                });
            }),
            P(this, 'handleReturn', (e) => {
                let { shiftKey: t } = e;
                e.preventDefault();
                let { current: n } = this._searchPopoutRef;
                return !(null != n && n.selectOption()) && ((0, M.X)() && t ? this.search({ searchEverywhere: !0 }) : this.search()), !0;
            }),
            P(this, 'handleBeforeInput', (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                return !!(x.Sq(t).length >= 512) || ((t = x.x0(e, t)), (t = x.Hl(t, 512)), (t = this.tokenize(t)), this.setEditorState(t), !n && this.setState({ focused: !0 }), !0);
            }),
            P(this, 'handleKeyCommand', (e) => {
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
            P(this, 'handlePastedText', (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                return (e = null != e ? e.replace(/\n/g, '') : ''), (t = x.x0(e, t)), (t = x.Hl(t, 512)), (t = this.tokenize(t)), !n && this.setState({ focused: !0 }), this.setEditorState(t), !0;
            }),
            P(this, 'setEditorState', (e) => {
                let { searchId: t } = this.props;
                _.j8(t, e);
            }),
            P(this, 'handleKeyBind', (e) => {
                let { key: t, metaKey: n, shiftKey: i } = e,
                    { editorState: a, searchId: s, keyboardModeEnabled: r } = this.props;
                if ((e.stopPropagation(), 'Escape' === t)) {
                    if ((e.preventDefault(), x.xb(a))) this.blurEditor();
                    else {
                        let e = x.FZ(a);
                        _.j8(s, e), this.setState({ focused: !0 });
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
                    return (0, f.Qj)(), !0;
                }
                if ('Home' === t || ('ArrowLeft' === t && n)) return e.preventDefault(), (a = i ? x.R8(a) : x.eE(a)), this.setEditorState(a), !0;
                if ('End' === t || ('ArrowRight' === t && n)) return e.preventDefault(), (a = i ? x.Wg(a) : x.NJ(a)), this.setEditorState(a), !0;
                if (('Delete' === t || 'Backspace' === t) && n) {
                    let e = x.FZ(a);
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
        a = null != t && null !== (e = g.Z.getEditorState(t)) && void 0 !== e ? e : x.nR(v.Jl(m.ZP)),
        s = h.Z.keyboardModeEnabled;
    return {
        searchId: t,
        searchType: n,
        isSearching: i,
        editorState: a,
        hasResults: g.Z.hasResults(t),
        keyboardModeEnabled: s
    };
})(U);
