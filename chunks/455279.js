n.d(t, {
    c: function () {
        return i;
    }
}),
    n(47120);
var i,
    s,
    r = n(200651),
    l = n(192379),
    a = n(120356),
    o = n.n(a),
    c = n(879443),
    d = n.n(c),
    u = n(392711),
    m = n.n(u),
    h = n(481060),
    g = n(600164),
    p = n(13140),
    x = n(388032),
    S = n(98256);
function T(e, t, n) {
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
((s = i || (i = {})).DEFAULT = 'DEFAULT'), (s.RECORDING = 'RECORDING');
let C = {
    DEFAULT: S.__invalid_default,
    RECORDING: S.recording
};
class _ extends l.PureComponent {
    componentWillUnmount() {
        null != this._unregisterNativeRecorder && this._unregisterNativeRecorder();
    }
    componentDidUpdate(e) {
        let { mode: t } = this.props,
            { mode: n } = e;
        if (n === t) return;
        let { _inputRef: i } = this;
        if (null == i.current) return;
        let { activeElement: s } = document;
        'DEFAULT' === t && i.current === s && i.current.blur(), 'RECORDING' === t && i.current !== s && i.current.focus();
    }
    render() {
        let e;
        let { mode: t, value: n, disabled: i } = this.props,
            s = (0, p.BB)(n, !0);
        e = 'RECORDING' === t ? x.intl.string(x.t.bmOri4) : 0 === n.length ? x.intl.string(x.t.co3wt7) : x.intl.string(x.t.idFMvL);
        let l = 'DEFAULT' === t && n.length > 0;
        return (0, r.jsx)(h.FocusRing, {
            focusTarget: this._inputRef,
            ringTarget: this._containerRef,
            children: (0, r.jsx)('div', {
                onClick: this.handleClick,
                onMouseDown: this.handleMouseDown,
                ref: this._containerRef,
                className: o()(S.recorderContainer, C[t], {
                    [S.hasValue]: l,
                    [S.containerDisabled]: i
                }),
                children: (0, r.jsxs)(g.Z, {
                    className: S.recorderLayout,
                    children: [
                        (0, r.jsx)(g.Z.Child, {
                            className: S.keybindInput,
                            children: (0, r.jsx)('input', {
                                id: this._inputId,
                                placeholder: x.intl.string(x.t.nWRdnp),
                                type: 'text',
                                ref: this.setInputRef,
                                readOnly: !0,
                                value: s,
                                disabled: 'RECORDING' !== this.props.mode || i
                            })
                        }),
                        (0, r.jsx)(g.Z, {
                            shrink: 1,
                            grow: 0,
                            style: { margin: 0 },
                            children: (0, r.jsxs)(h.Button, {
                                className: S.addKeybindButton,
                                disabled: i,
                                onClick: (e) => {
                                    e.stopPropagation(), e.preventDefault(), this.handleClick(e);
                                },
                                size: h.Button.Sizes.MIN,
                                color: h.ButtonColors.PRIMARY,
                                children: [
                                    (0, r.jsx)('span', {
                                        className: S.text,
                                        children: e
                                    }),
                                    (0, r.jsx)('span', { className: S.editIcon })
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
            T(this, '_inputId', m().uniqueId('key-recorder-')),
            T(this, '_unregisterNativeRecorder', null),
            T(this, '_mousedownMode', null),
            T(this, '_inputRef', l.createRef()),
            T(this, '_containerRef', l.createRef()),
            T(this, 'setInputRef', (e) => {
                var t;
                let { registerNativeRecorder: n, onChange: i } = this.props;
                (this._inputRef.current = e), null === (t = this._unregisterNativeRecorder) || void 0 === t || t.call(this), null != e && (null != n && null != i ? (this._unregisterNativeRecorder = n(e.id, i)) : null != i && (new (d())(e).handleKey = i));
            }),
            T(this, 'handleClick', (e) => {
                e.stopPropagation(), e.preventDefault();
                let { onClick: t, disableOnClickWhileRecording: n } = this.props;
                if (!n || 'RECORDING' !== this._mousedownMode) t();
            }),
            T(this, 'handleMouseDown', () => {
                this._mousedownMode = this.props.mode;
            });
    }
}
t.Z = _;
