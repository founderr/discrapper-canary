n.d(t, {
    K: function () {
        return O;
    }
});
var r,
    i = n(653041);
var a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(772848),
    c = n(84735),
    d = n(15127),
    _ = n(766646),
    E = n(993365),
    f = n(179240),
    h = n(689938),
    p = n(37823),
    m = n(803636),
    I = n(112864);
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
let g = (0, u.Z)(),
    S = (0, u.Z)(),
    A = (0, u.Z)(),
    v = 10,
    N = 7.23;
class O extends (r = o.Component) {
    getPaddingRight() {
        let { maxLength: e, showCharacterCountFullPadding: t } = this.props;
        if (null == e) return v;
        let n = ''.concat(e).length;
        return t && (n += ''.concat(e, ' / ').length), N * n + v;
    }
    getCharsLeftLength() {
        let { maxLength: e, value: t } = this.props;
        return null == e ? null : e - (null != t ? t.length : 0);
    }
    getIsOverflowing() {
        let e = this.getCharsLeftLength();
        return null != e && e < 0;
    }
    getIsUnderflowing() {
        let { minLength: e, value: t } = this.props;
        return null != e && (null != t ? t.length : 0) < e;
    }
    renderCharacterCount() {
        if (this.props.showCharacterCount) {
            var e;
            let { value: t, maxLength: n } = this.props;
            return (0, a.jsxs)('div', {
                className: l()(p.maxLength, { [p.errorOverflow]: this.hasError() }),
                'aria-hidden': 'true',
                children: [null !== (e = null == t ? void 0 : t.length) && void 0 !== e ? e : 0, ' ', null != n && '/ '.concat(n)]
            });
        }
        return null;
    }
    renderMaxLength() {
        if (this.props.showCharacterCount || !1 === this.props.showRemainingCharacterCount) return null;
        let e = this.getCharsLeftLength();
        return null == e
            ? null
            : (0, a.jsx)('div', {
                  className: l()(p.maxLength, { [p.errorOverflow]: e < 0 }),
                  'aria-hidden': 'true',
                  children: e
              });
    }
    hasError() {
        return null != this.props.error || null != this.context.error || (!1 !== this.state.dirty && (this.getIsOverflowing() || this.getIsUnderflowing() || !1));
    }
    getErrorMessage() {
        let { error: e, maxLength: t, minLength: n } = this.props,
            r = this.getIsOverflowing() ? h.Z.Messages.MAXIMUM_LENGTH_ERROR.format({ maxLength: t }) : null,
            i = this.getIsUnderflowing() ? h.Z.Messages.MINIMUM_LENGTH_ERROR.format({ minLength: n }) : null;
        return (null != e && e.length < 1) || null === e ? null : void 0 !== e ? e : !1 === this.state.dirty ? null : null != r ? r : i;
    }
    renderErrorMessage() {
        let e = this.getErrorMessage();
        return null == e
            ? null
            : (0, a.jsx)(E.x, {
                  id: g,
                  variant: 'text-xs/normal',
                  color: 'text-danger',
                  className: p.errorMessage,
                  children: e
              });
    }
    render() {
        var e, t;
        let { disabled: n, value: r, placeholder: i, autoFocus: o, minLength: s, maxLength: u, allowOverflow: d, spellCheck: E, resizeable: T, className: g, id: v, rows: N, flex: O, autosize: R, required: C, onInvalid: y, inputRef: b } = this.props,
            L = R ? f.l : 'textarea',
            D = this.hasError(),
            M = null !== (t = this.props['aria-labelledby']) && void 0 !== t ? t : null === (e = this.context) || void 0 === e ? void 0 : e.titleId,
            P = this.getAriaDescribedBy();
        return (0, a.jsxs)('div', {
            className: l()(m.inputWrapper, { [p.flex]: O }),
            children: [
                (0, a.jsxs)('div', {
                    className: l()(p.inputMaxLength, { [p.flex]: O }),
                    children: [
                        (0, a.jsx)(c.t, {
                            children: (0, a.jsx)(L, {
                                type: 'text',
                                className: l()(m.inputDefault, p.textArea, I.scrollbarDefault, g, {
                                    [m.error]: D,
                                    [m.disabled]: n,
                                    [p.resizeable]: T
                                }),
                                'aria-labelledby': M,
                                'aria-describedby': P,
                                'aria-invalid': D,
                                style: { paddingRight: this.getPaddingRight() },
                                id: v,
                                disabled: n,
                                placeholder: i,
                                value: r,
                                autoFocus: o,
                                minLength: s,
                                maxLength: d ? void 0 : u,
                                spellCheck: E,
                                required: C,
                                onChange: this.onChange,
                                onBlur: this.onBlur,
                                onFocus: this.onFocus,
                                onKeyDown: this.onKeyDown,
                                onInvalid: y,
                                rows: N,
                                ref: b
                            })
                        }),
                        null != s &&
                            (0, a.jsx)(_.n, {
                                id: S,
                                children: h.Z.Messages.MINIMUM_LENGTH.format({ minLength: s })
                            }),
                        null != u &&
                            (0, a.jsx)(_.n, {
                                id: A,
                                children: h.Z.Messages.MAXIMUM_LENGTH.format({ maxLength: u })
                            }),
                        this.renderCharacterCount(),
                        this.renderMaxLength()
                    ]
                }),
                this.renderErrorMessage()
            ]
        });
    }
    constructor(e) {
        var t;
        super(e),
            T(this, 'getAriaDescribedBy', () => {
                var e;
                let { maxLength: t, minLength: n, error: r } = this.props,
                    i = [],
                    a = null === (e = this.context) || void 0 === e ? void 0 : e.errorId;
                return null != a && i.push(a), null != r ? i.push(g) : (null != t && i.push(A), null != n && i.push(S)), i.length > 0 ? i.join(' ') : void 0;
            }),
            T(this, 'onChange', (e) => {
                let { onChange: t, name: n } = this.props;
                null == t || t(e.currentTarget.value, n), this.setState({ dirty: !0 });
            }),
            T(this, 'onFocus', (e) => {
                let { onFocus: t, name: n } = this.props;
                null == t || t(e, n);
            }),
            T(this, 'onBlur', (e) => {
                let { onBlur: t, name: n } = this.props;
                null == t || t(e, n);
            }),
            T(this, 'onKeyDown', (e) => {
                let { onKeyDown: t } = this.props;
                null == t || t(e);
            }),
            (this.state = { dirty: null !== (t = e.defaultDirty) && void 0 !== t && t });
    }
}
T(O, 'contextType', d.q3),
    T(O, 'defaultProps', {
        name: '',
        disabled: !1,
        placeholder: '',
        autoFocus: !1,
        resizeable: !1,
        flex: !1,
        autosize: !1,
        rows: 3,
        allowOverflow: !1
    });
