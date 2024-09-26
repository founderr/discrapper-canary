n.d(t, {
    Z: function () {
        return x;
    }
});
var r = n(47120);
var i = n(653041);
var a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(392711),
    c = n.n(u),
    d = n(218887),
    _ = n.n(d),
    E = n(729594),
    f = n(873546),
    h = n(430742),
    p = n(166459),
    m = n(911969),
    I = n(476326),
    T = n(998698),
    g = n(710845),
    S = n(117530),
    A = n(459273),
    v = n(403182),
    N = n(541716),
    O = n(752305),
    R = n(30465),
    C = n(140963),
    y = n(4484),
    L = n(925994),
    b = n(981631),
    D = n(689938),
    M = n(933283);
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
new g.Z('ChannelEditor.tsx');
let U = function () {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    },
    w = {
        12: M.fontSize12Padding,
        14: M.fontSize14Padding,
        15: M.fontSize15Padding,
        16: M.fontSize16Padding,
        18: M.fontSize18Padding,
        20: M.fontSize20Padding,
        24: M.fontSize24Padding
    };
class x extends o.Component {
    componentDidMount() {
        this.props.focused && requestAnimationFrame(() => this.focus()), document.addEventListener('selectionchange', this.handleSelectionChange), window.addEventListener('beforeunload', this.handleBeforeUnload);
    }
    componentDidUpdate(e) {
        if ((this.fixFocus(e), this.props.useSlate !== e.useSlate)) {
            var t, n;
            let e;
            (e = this.props.useSlate ? this.props.textValue : (0, L.sk)(this.props.richValue, { mode: 'plain' })), null === (t = (n = this.props).onChange) || void 0 === t || t.call(n, null, e, (0, O.JM)(e));
        } else this.props.textValue !== e.textValue && this.saveCurrentTextThrottled();
    }
    componentWillUnmount() {
        var e, t;
        this.saveCurrentText(), null === (e = (t = this)._unsubscribe) || void 0 === e || e.call(t), window.removeEventListener('beforeunload', this.handleBeforeUnload), document.removeEventListener('selectionchange', this.handleSelectionChange), (this._focusBlurQueue = null), (this._unsubscribe = null);
    }
    blur() {
        let e = this.ref.current;
        null != e && e.blur();
    }
    submit(e) {
        var t;
        null === (t = this.ref.current) || void 0 === t || t.submit(e);
    }
    insertEmoji(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            { textValue: r } = this.props,
            i = this.ref.current;
        null != e && null != i && (n && !r.endsWith(' ') && i.insertText(' ', void 0, !1), i.insertEmoji(e, t), t && this.focus());
    }
    insertGIF(e) {
        let { textValue: t } = this.props,
            n = this.ref.current;
        null != e && null != n && (!t.endsWith(' ') && n.insertText(' ', void 0, !1), n.insertText(e.url));
    }
    insertSound(e) {
        let { textValue: t } = this.props,
            n = this.ref.current;
        null != e && null != n && (!t.endsWith(' ') && n.insertText(' ', void 0, !1), n.insertText('<sound:' + e.soundId + '>'));
    }
    handleOuterClick() {
        this.focus();
    }
    clearValue() {
        let { channel: e, type: t } = this.props;
        this.setState({
            focused: !0,
            submitting: !1
        }),
            h.Z.saveDraft(e.id, '', t.drafts.type);
    }
    getCurrentWord() {
        var e;
        let t = this.ref.current;
        return null !== (e = null == t ? void 0 : t.getCurrentWord()) && void 0 !== e
            ? e
            : {
                  word: null,
                  isAtStart: !1
              };
    }
    insertAutocomplete(e, t, n) {
        let r = this.ref.current;
        return null == r ? void 0 : r.insertAutocomplete(e, t, n);
    }
    getCurrentCommandOption() {
        var e, t;
        let n = this.ref.current;
        return null !== (t = null == n ? void 0 : null === (e = n.getCurrentCommandOption) || void 0 === e ? void 0 : e.call(n)) && void 0 !== t ? t : null;
    }
    getCurrentCommandOptionValue() {
        var e, t;
        let n = this.ref.current;
        return null !== (t = null == n ? void 0 : null === (e = n.getCurrentCommandOptionValue) || void 0 === e ? void 0 : e.call(n)) && void 0 !== t ? t : [];
    }
    getCommandOptionValues() {
        var e, t;
        let n = this.ref.current;
        return null !== (t = null == n ? void 0 : null === (e = n.getCommandOptionValues) || void 0 === e ? void 0 : e.call(n)) && void 0 !== t ? t : {};
    }
    getFirstText() {
        var e;
        let t = this.ref.current;
        return null !== (e = null == t ? void 0 : t.getFirstText()) && void 0 !== e ? e : null;
    }
    getSlateEditor() {
        var e, t;
        let n = this.ref.current;
        return null !== (t = null == n ? void 0 : null === (e = n.getSlateEditor) || void 0 === e ? void 0 : e.call(n)) && void 0 !== t ? t : null;
    }
    fixFocus(e) {
        e.focused && !this.props.focused ? this.blur() : !e.focused && this.props.focused && this.focus();
    }
    appendText(e, t) {
        var n;
        let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        null === (n = this.ref.current) || void 0 === n || n.insertText(e, t, r);
    }
    getPlaceholder() {
        let { disabled: e, placeholder: t, isPreviewing: n } = this.props;
        return e && !n ? D.Z.Messages.NO_SEND_MESSAGES_PERMISSION_PLACEHOLDER : t;
    }
    render() {
        var e, t, n, r, i, o;
        let { textValue: s, richValue: u, disabled: c, onChange: d, onKeyDown: _, onResize: E, onSubmit: h, channel: p, type: m, fontSize: I, useSlate: T, spellcheckEnabled: g, useNewSlashCommands: S, canOnlyUseTextCommands: v, className: R, id: L, required: D, maxCharacterCount: P, allowNewLines: U, 'aria-describedby': x, 'aria-labelledby': G, accessibilityLabel: k } = this.props,
            { submitting: B, popup: F } = this.state,
            Z = {
                channel: p,
                className: l()(R, M.textArea, {
                    [M.textAreaSlate]: T,
                    [M.textAreaDisabled]: c || B
                }),
                id: L,
                placeholder: this.getPlaceholder(),
                required: D,
                accessibilityLabel: k,
                disabled: c || !1,
                submitting: B,
                isEdit: m === N.I.EDIT,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur,
                onPaste: this.handlePaste,
                onTab: this.handleTab,
                onEnter: this.handleEnter,
                moveSelection: this.handleMoveSelection,
                maybeShowAutocomplete: this.maybeShowAutocomplete,
                hideAutocomplete: this.hideAutocomplete,
                allowNewLines: U,
                onChange: d,
                onResize: E,
                onKeyDown: _,
                onSubmit: h,
                textAreaPaddingClassName: l()(w[I], {
                    [M.textAreaWithoutAttachmentButton]: m !== N.I.NORMAL && m !== N.I.OVERLAY && m !== N.I.THREAD_CREATION && m !== N.I.SIDEBAR,
                    [M.textAreaForPostCreation]: m === N.I.CREATE_FORUM_POST,
                    [M.textAreaCustomGift]: m === N.I.CUSTOM_GIFT,
                    [M.textAreaForUserProfile]: m === N.I.USER_PROFILE
                }),
                spellcheckEnabled: g,
                useNewSlashCommands: S,
                disableAutoFocus: f.tq || (null !== (n = m.disableAutoFocus) && void 0 !== n && n),
                disableEnterToSubmit: null !== (r = null === (e = m.submit) || void 0 === e ? void 0 : e.disableEnterToSubmit) && void 0 !== r && r,
                'aria-controls': null !== (i = F.id) && void 0 !== i ? i : void 0,
                'aria-haspopup': 'listbox',
                'aria-expanded': null !== F.id || void 0,
                'aria-activedescendant': null !== (o = F.activeDescendant) && void 0 !== o ? o : void 0,
                'aria-invalid': s.length > P,
                'aria-describedby': x,
                'aria-labelledby': G,
                'aria-autocomplete': 'list'
            },
            V = T
                ? (0, a.jsx)(y.Z, {
                      ref: this.ref,
                      ...Z,
                      type: m,
                      value: c ? (0, O.JM)('') : u,
                      canUseCommands: null === (t = m.commands) || void 0 === t ? void 0 : t.enabled,
                      canOnlyUseTextCommands: v
                  })
                : (0, a.jsx)(C.Z, {
                      ref: this.ref,
                      ...Z,
                      value: c ? '' : s
                  });
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(A.d9, {
                    event: b.CkL.INSERT_TEXT,
                    handler: this.handleInsertText
                }),
                (0, a.jsx)(A.d9, {
                    event: b.CkL.CLEAR_TEXT,
                    handler: this.handleClearText
                }),
                V
            ]
        });
    }
    constructor(e) {
        var t;
        super(e),
            (t = this),
            P(this, 'ref', o.createRef()),
            P(this, '_focusBlurQueue', Promise.resolve()),
            P(this, '_unsubscribe', void 0),
            P(this, 'handleSelectionChange', () => {
                if (this.props.focused) {
                    var e, t, n;
                    this.props.onSelectionChanged(null === (t = (n = document).getSelection) || void 0 === t ? void 0 : null === (e = t.call(n)) || void 0 === e ? void 0 : e.toString());
                }
            }),
            P(this, 'focus', () => {
                var e;
                null === (e = this._focusBlurQueue) ||
                    void 0 === e ||
                    e.then(() => {
                        this.setState({ focused: !0 }, () => {
                            let e = this.ref.current;
                            null != e && e.focus();
                        });
                    });
            }),
            P(this, 'saveCurrentText', function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                    { type: n, channel: r } = t.props;
                n.drafts.autoSave && (e && t.saveCurrentTextThrottled.cancel(), t.handleSaveCurrentText(r.id));
            }),
            P(this, 'handleBeforeUnload', () => this.saveCurrentText()),
            P(this, 'saveCurrentTextThrottled', c().throttle(this.saveCurrentText.bind(this, !1), 500)),
            P(this, 'handleEnter', (e) => {
                var t, n;
                return null === (t = (n = this.props).onEnter) || void 0 === t ? void 0 : t.call(n, e);
            }),
            P(this, 'handleTab', () => {
                var e, t;
                return null === (e = (t = this.props).onTab) || void 0 === e ? void 0 : e.call(t);
            }),
            P(this, 'handleMoveSelection', (e) => {
                var t, n;
                return null === (t = (n = this.props).onMoveSelection) || void 0 === t ? void 0 : t.call(n, e);
            }),
            P(this, 'maybeShowAutocomplete', () => {
                var e, t;
                return null === (e = (t = this.props).onMaybeShowAutocomplete) || void 0 === e ? void 0 : e.call(t);
            }),
            P(this, 'hideAutocomplete', () => {
                var e, t;
                return null === (e = (t = this.props).onHideAutocomplete) || void 0 === e ? void 0 : e.call(t);
            }),
            P(this, 'handleSaveCurrentText', (e) => {
                h.Z.saveDraft(e, this.props.textValue, this.props.type.drafts.type);
            }),
            P(this, 'handleClearText', () => {
                var e, t;
                null === (e = (t = this.props).onChange) || void 0 === e || e.call(t, null, '', (0, O.JM)(''));
            }),
            P(this, 'handleInsertText', (e) => {
                let { plainText: t, rawText: n, addSpace: r = !1 } = e;
                !this.props.disabled && (this.appendText(t, n, r), this.focus());
            }),
            P(this, 'handleFocus', (e) => {
                let { onFocus: t } = this.props,
                    { focused: n } = this.state;
                null == t || t(e), !n && this.setState({ focused: !0 });
            }),
            P(this, 'handleBlur', (e) => {
                let { onBlur: t } = this.props,
                    { focused: n } = this.state;
                null == t || t(e), n && this.setState({ focused: !1 });
            }),
            P(this, 'handlePaste', (e) => {
                let { channel: t, canPasteFiles: n, uploadPromptCharacterCount: r, promptToUpload: i, maxCharacterCount: a, type: o } = this.props;
                if (null == i || (!t.isPrivate() && !n) || (t.isPrivate() && t.isManaged())) return !1;
                let s = (e, n) => {
                        var r, a;
                        let s = T.Z.getActiveCommand(t.id);
                        if (null == s)
                            return i(e, t, o.drafts.type, {
                                requireConfirm: !0,
                                showLargeMessageDialog: n
                            });
                        let l = null !== (r = o.drafts.commandType) && void 0 !== r ? r : o.drafts.type,
                            u = null,
                            c = T.Z.getActiveOption(t.id);
                        if (
                            null !=
                            (u =
                                (null == c ? void 0 : c.type) === m.jw.ATTACHMENT
                                    ? c
                                    : null === (a = s.options) || void 0 === a
                                      ? void 0
                                      : a.find((e) => {
                                            if (e.type === m.jw.ATTACHMENT) return null == S.Z.getUpload(t.id, e.name, l);
                                        }))
                        )
                            p.Z.setFile({
                                channelId: t.id,
                                id: u.name,
                                draftType: l,
                                file: {
                                    id: u.name,
                                    platform: I.ow.WEB,
                                    file: e[0]
                                }
                            });
                    },
                    l = null != r ? r : a,
                    { files: u } = G(e.clipboardData, o.uploadLongMessages ? l : null);
                return (
                    U(
                        'onPaste',
                        [...e.clipboardData.items].map((e) => {
                            if ('file' !== e.kind)
                                return {
                                    kind: e.kind,
                                    type: e.type
                                };
                            {
                                let t = e.getAsFile();
                                return {
                                    kind: e.kind,
                                    type: e.type,
                                    name: null == t ? void 0 : t.name,
                                    path: null == t ? void 0 : t.path
                                };
                            }
                        })
                    ),
                    0 !== u.length && (e.preventDefault(), e.stopPropagation(), this.saveCurrentText(), s(u), this.focus(), !0)
                );
            }),
            (this._unsubscribe = R.p8.subscribe((e) => {
                requestAnimationFrame(() => {
                    this.setState({ popup: e });
                });
            })),
            (this.state = {
                focused: !1,
                submitting: !1,
                popup: R.p8.getState()
            });
    }
}
function G(e, t) {
    let n = [],
        r = [],
        i = null,
        a = null;
    for (let t of e.items)
        if ('file' === t.kind) {
            let e = t.getAsFile();
            if (null == e) continue;
            null != e.path && e.path.length > 0 ? n.push(e) : r.push(e);
        } else 'string' === t.kind && ('text/plain' === t.type && null == i ? (i = t) : 'text/html' === t.type && null == a && (a = t));
    if (n.length > 0) return { files: n };
    if (r.length > 0) {
        if (1 === r.length && 'image/png' === r[0].type && null != a) {
            var o;
            let t = r[0],
                n = null !== (o = k(e.getData(a.type))) && void 0 !== o ? o : t.name;
            return { files: [(0, v.dp)(t, n, t.type)] };
        }
        return { files: r };
    }
    if (null != i && null != t) {
        let n = e.getData(i.type);
        if (n.length > t) {
            let e = new Blob([n], { type: 'text/plain' });
            return {
                files: [(0, v.dp)(e, 'message.txt')],
                convertedStringToFile: !0
            };
        }
    }
    return { files: [] };
}
function k(e) {
    let t = new DOMParser().parseFromString(e, 'text/html').querySelector('img');
    if (null != t) {
        let e;
        try {
            let { pathname: n } = E.parse(t.src);
            null != n && n.length > 0 && (e = _().basename(n).split('.')[0]);
        } catch (e) {}
        if (null != e && e.length > 0) return ''.concat(e, '.png');
    }
}
