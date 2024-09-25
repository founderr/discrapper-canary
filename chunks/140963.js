var r = n(47120);
var i = n(757143);
var a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(481060),
    c = n(239091),
    d = n(555573),
    _ = n(998698),
    E = n(459273),
    f = n(358085),
    h = n(62883),
    p = n(752305),
    m = n(981631);
function I(e, t, n) {
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
let T = ':',
    g = /(\t|\s)/;
class S extends o.PureComponent {
    componentDidMount() {
        !this.props.disableAutoFocus &&
            (Promise.resolve().then(() => {
                var e;
                let { value: t } = this.props;
                null === (e = this._ref) || void 0 === e || e.setSelection(t.length, t.length);
            }),
            this.focus()),
            null != _.Z.getActiveCommand(this.props.channel.id) &&
                d.Po({
                    channelId: this.props.channel.id,
                    command: null,
                    section: null
                });
    }
    componentDidUpdate(e, t) {
        this.state.nextSelection !== t.nextSelection && null != this._ref && this._ref.setSelection(this.state.nextSelection, this.state.nextSelection);
    }
    getCurrentWord() {
        let e = this._ref;
        if (null == e)
            return {
                word: null,
                isAtStart: !1
            };
        let { value: t } = this.props;
        if (0 === t.trim().length)
            return {
                word: null,
                isAtStart: !1
            };
        let n = e.selectionStart,
            r = e.selectionEnd;
        for (; n > 0 && !g.test(t[n - 1]); ) {
            n--;
        }
        return {
            word: t.slice(n, r),
            isAtStart: 0 === n
        };
    }
    blur() {
        let { _ref: e } = this;
        null != e && e.blur();
    }
    submit(e) {
        return e.preventDefault(), this.props.onSubmit(this.props.value);
    }
    insertAutocomplete(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            { word: r } = this.getCurrentWord();
        if (null == r) this.insertText(e, t, n);
        else {
            let t = this._ref;
            if (null == t) return;
            let i = t.value.slice(0, t.selectionStart - r.length),
                a = t.value.slice(t.selectionEnd);
            this._insertText(e, i, a, n);
        }
    }
    insertText(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            r = this._ref;
        if (null == r) return;
        let i = r.value.slice(0, r.selectionStart),
            a = r.value.slice(r.selectionEnd);
        this._insertText(e, i, a, n);
    }
    _insertText(e, t, n, r) {
        if (null == this._ref) return;
        r && (e += ' ');
        let i = t + e + n,
            { onChange: a } = this.props;
        null == a || a(null, i, (0, p.JM)(i));
        let o = t.length + e.length;
        this.setState({ nextSelection: o }, () => {
            this.props.maybeShowAutocomplete();
        });
    }
    hasOpenCodeBlock() {
        let e = this._ref;
        if (null == e) return !1;
        let t = this.props.value.slice(0, e.selectionStart).match(/```/g);
        return null != t && t.length > 0 && t.length % 2 != 0;
    }
    render() {
        let { value: e, disabled: t, placeholder: n, required: r, onResize: i, className: o, id: s, submitting: c, textAreaPaddingClassName: d, spellcheckEnabled: _, 'aria-controls': f, 'aria-expanded': h, 'aria-activedescendant': p } = this.props;
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(E.d9, {
                    event: m.CkL.GLOBAL_CLIPBOARD_PASTE,
                    handler: this.handleGlobalPaste
                }),
                (0, a.jsx)(u.TextAreaAutosize, {
                    ref: this.handleSetRef,
                    className: l()(o, d),
                    id: s,
                    rows: 1,
                    fontWidthEstimate: 6,
                    placeholder: n,
                    disabled: t || c,
                    required: r,
                    onChange: this.handleOnChange,
                    onResize: i,
                    onKeyPress: this.handleKeyPress,
                    onKeyDown: this.handleKeyDown,
                    onKeyUp: this.handleKeyUp,
                    onFocus: this.props.onFocus,
                    onBlur: this.props.onBlur,
                    onPaste: this.handlePaste,
                    onClick: this.handleClick,
                    onContextMenu: this.handleContextMenu,
                    value: t ? '' : e,
                    tabIndex: 0,
                    spellCheck: _,
                    'aria-controls': f,
                    'aria-expanded': h,
                    'aria-activedescendant': p,
                    'aria-haspopup': 'listbox',
                    'aria-autocomplete': 'list',
                    'aria-multiline': !0
                })
            ]
        });
    }
    handleTabOrEnterDown(e) {
        e.which === m.yXg.TAB && this.props.onTab() ? (e.preventDefault(), e.stopPropagation()) : e.which === m.yXg.ENTER && this.props.onEnter(e) ? (e.preventDefault(), e.stopPropagation()) : e.which === m.yXg.ESCAPE ? (e.preventDefault(), e.stopPropagation(), this.props.hideAutocomplete()) : e.which === m.yXg.TAB && this.hasOpenCodeBlock() && (e.preventDefault(), e.stopPropagation(), this.insertText('\t', void 0, !1));
    }
    insertEmoji(e, t) {
        this.insertText(''.concat(T).concat(e.name).concat(T), void 0, t);
    }
    getFirstText() {
        return this.props.value;
    }
    constructor(...e) {
        super(...e),
            I(this, '_ref', void 0),
            I(this, 'state', { nextSelection: -1 }),
            I(this, 'focus', () => {
                let { _ref: e } = this;
                null != e && e.focus();
            }),
            I(this, 'handleSetRef', (e) => {
                this._ref = e;
            }),
            I(this, 'handleKeyPress', (e) => {
                if (e.which === m.yXg.ENTER) {
                    if (!e.shiftKey && !this.hasOpenCodeBlock() && (!this.props.disableEnterToSubmit || e.ctrlKey)) return e.preventDefault(), this.props.onSubmit(this.props.value);
                }
            }),
            I(this, 'handleKeyDown', (e) => {
                switch (e.which) {
                    case m.yXg.ARROW_DOWN:
                        this.props.moveSelection(1) && e.preventDefault();
                        break;
                    case m.yXg.N:
                        e.ctrlKey && this.props.moveSelection(1) && e.preventDefault();
                        break;
                    case m.yXg.ARROW_UP:
                        this.props.moveSelection(-1) && e.preventDefault();
                        break;
                    case m.yXg.P:
                        e.ctrlKey && this.props.moveSelection(-1) && e.preventDefault();
                        break;
                    case m.yXg.TAB:
                    case m.yXg.ENTER:
                        this.handleTabOrEnterDown(e);
                }
                let { onKeyDown: t } = this.props;
                null == t || t(e);
            }),
            I(this, 'handleKeyUp', (e) => {
                switch (e.which) {
                    case m.yXg.ARROW_RIGHT:
                    case m.yXg.ARROW_LEFT:
                    case m.yXg.HOME:
                    case m.yXg.END:
                        this.props.maybeShowAutocomplete();
                }
                let { onKeyUp: t } = this.props;
                null == t || t(e);
            }),
            I(this, 'handleGlobalPaste', (e) => {
                let { event: t } = e;
                !this.handlePaste(t) && this.focus();
            }),
            I(this, 'handlePaste', (e) => {
                let t = this.props.onPaste(e);
                return t && e.preventDefault(), t;
            }),
            I(this, 'handleClick', () => {
                this.props.maybeShowAutocomplete();
            }),
            I(this, 'handleContextMenu', (e) => {
                f.isPlatformEmbedded &&
                    (0, c.jW)(
                        e,
                        async () => {
                            let { default: e } = await n.e('99989').then(n.bind(n, 889662));
                            return (t) =>
                                (0, a.jsx)(e, {
                                    ...t,
                                    isChannelTextArea: !0,
                                    text: (0, h.getSelectionText)()
                                });
                        },
                        {
                            align: 'bottom',
                            enableSpellCheck: !0
                        }
                    );
            }),
            I(this, 'handleOnChange', (e) => {
                let { onChange: t, allowNewLines: n } = this.props,
                    r = e.currentTarget.value,
                    i = n ? r : r.replace('\n', '');
                null == t || t(e, i, (0, p.JM)(i));
            });
    }
}
t.Z = S;
