t.d(s, {
    c: function () {
        return n;
    }
}),
    t(47120);
var n,
    a,
    i = t(200651),
    r = t(192379),
    o = t(120356),
    l = t.n(o),
    c = t(879443),
    d = t.n(c),
    _ = t(392711),
    u = t.n(_),
    E = t(481060),
    T = t(600164),
    S = t(13140),
    I = t(689938),
    N = t(98256);
function m(e, s, t) {
    return (
        s in e
            ? Object.defineProperty(e, s, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[s] = t),
        e
    );
}
((a = n || (n = {})).DEFAULT = 'DEFAULT'), (a.RECORDING = 'RECORDING');
let C = {
    DEFAULT: N.__invalid_default,
    RECORDING: N.recording
};
class A extends r.PureComponent {
    componentWillUnmount() {
        null != this._unregisterNativeRecorder && this._unregisterNativeRecorder();
    }
    componentDidUpdate(e) {
        let { mode: s } = this.props,
            { mode: t } = e;
        if (t === s) return;
        let { _inputRef: n } = this;
        if (null == n.current) return;
        let { activeElement: a } = document;
        'DEFAULT' === s && n.current === a && n.current.blur(), 'RECORDING' === s && n.current !== a && n.current.focus();
    }
    render() {
        let e;
        let { mode: s, value: t, disabled: n } = this.props,
            a = (0, S.BB)(t, !0);
        e = 'RECORDING' === s ? I.Z.Messages.SHORTCUT_RECORDER_BUTTON_RECORDING : 0 === t.length ? I.Z.Messages.SHORTCUT_RECORDER_BUTTON : I.Z.Messages.SHORTCUT_RECORDER_BUTTON_EDIT;
        let r = 'DEFAULT' === s && t.length > 0;
        return (0, i.jsx)(E.FocusRing, {
            focusTarget: this._inputRef,
            ringTarget: this._containerRef,
            children: (0, i.jsx)('div', {
                onClick: this.handleClick,
                onMouseDown: this.handleMouseDown,
                ref: this._containerRef,
                className: l()(N.recorderContainer, C[s], {
                    [N.hasValue]: r,
                    [N.containerDisabled]: n
                }),
                children: (0, i.jsxs)(T.Z, {
                    className: N.recorderLayout,
                    children: [
                        (0, i.jsx)(T.Z.Child, {
                            className: N.keybindInput,
                            children: (0, i.jsx)('input', {
                                id: this._inputId,
                                placeholder: I.Z.Messages.SHORTCUT_RECORDER_NO_BIND,
                                type: 'text',
                                ref: this.setInputRef,
                                readOnly: !0,
                                value: a,
                                disabled: 'RECORDING' !== this.props.mode || n
                            })
                        }),
                        (0, i.jsx)(T.Z, {
                            shrink: 1,
                            grow: 0,
                            style: { margin: 0 },
                            children: (0, i.jsxs)(E.Button, {
                                className: N.addKeybindButton,
                                disabled: n,
                                onClick: (e) => {
                                    e.stopPropagation(), e.preventDefault(), this.handleClick(e);
                                },
                                size: E.Button.Sizes.MIN,
                                color: E.ButtonColors.PRIMARY,
                                children: [
                                    (0, i.jsx)('span', {
                                        className: N.text,
                                        children: e
                                    }),
                                    (0, i.jsx)('span', { className: N.editIcon })
                                ]
                            })
                        })
                    ]
                })
            })
        });
    }
    constructor(...e) {
        super(...e),
            m(this, '_inputId', u().uniqueId('key-recorder-')),
            m(this, '_unregisterNativeRecorder', null),
            m(this, '_mousedownMode', null),
            m(this, '_inputRef', r.createRef()),
            m(this, '_containerRef', r.createRef()),
            m(this, 'setInputRef', (e) => {
                var s;
                let { registerNativeRecorder: t, onChange: n } = this.props;
                (this._inputRef.current = e), null === (s = this._unregisterNativeRecorder) || void 0 === s || s.call(this), null != e && (null != t && null != n ? (this._unregisterNativeRecorder = t(e.id, n)) : null != n && (new (d())(e).handleKey = n));
            }),
            m(this, 'handleClick', (e) => {
                e.stopPropagation(), e.preventDefault();
                let { onClick: s, disableOnClickWhileRecording: t } = this.props;
                if (!t || 'RECORDING' !== this._mousedownMode) s();
            }),
            m(this, 'handleMouseDown', () => {
                this._mousedownMode = this.props.mode;
            });
    }
}
s.Z = A;
