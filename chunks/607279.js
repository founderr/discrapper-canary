var r,
    i = n(47120);
var a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(481060),
    c = n(689938),
    d = n(833496);
function _(e, t, n) {
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
let E = 100,
    f = 'search';
class h extends (r = o.Component) {
    render() {
        let { autoFocus: e, label: t, placeholder: n, searchTerm: r, inputClassName: i, className: o, onChange: s, onFocus: _, onBlur: h, onKeyPress: p, autoComplete: m, forwardedRef: I, closeIconClassName: T, searchIconClassName: g, cta: S } = this.props,
            A = null != r && r.length > 0,
            v = null != I ? I : this._textInputRef;
        return (0, a.jsx)(u.FocusRing, {
            focusTarget: v,
            ringTarget: this._containerRef,
            children: (0, a.jsxs)('div', {
                className: l()(d.searchBox, o),
                ref: this._containerRef,
                children: [
                    (0, a.jsx)(u.TextInput, {
                        inputRef: v,
                        focusProps: { enabled: !1 },
                        name: f,
                        maxLength: E,
                        className: d.searchBoxInputWrapper,
                        inputClassName: l()(d.searchBoxInput, i),
                        onChange: s,
                        onFocus: _,
                        onBlur: h,
                        onKeyPress: p,
                        value: A ? r : '',
                        placeholder: n,
                        autoFocus: e,
                        'aria-label': t,
                        autoComplete: m ? 'on' : 'off'
                    }),
                    null != S
                        ? (0, a.jsx)(u.Text, {
                              color: 'text-muted',
                              variant: 'text-xs/normal',
                              className: d.cta,
                              children: S
                          })
                        : null,
                    A
                        ? (0, a.jsx)(u.Clickable, {
                              onClick: this.handleClear,
                              className: d.clear,
                              'aria-label': c.Z.Messages.SEARCH_CLEAR,
                              children: (0, a.jsx)(u.CircleXIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: l()(d.clearIcon, T)
                              })
                          })
                        : (0, a.jsx)(u.MagnifyingGlassIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: l()(d.searchIcon, g),
                              'aria-label': c.Z.Messages.SEARCH
                          })
                ]
            })
        });
    }
    constructor(...e) {
        super(...e),
            _(this, '_textInputRef', o.createRef()),
            _(this, '_containerRef', o.createRef()),
            _(this, 'handleClear', () => {
                let { onClear: e, forwardedRef: t } = this.props,
                    { current: n } = null != t ? t : this._textInputRef;
                null != n && n.focus(), null != e && e();
            });
    }
}
_(h, 'defaultProps', { autoComplete: !1 }),
    (t.Z = o.forwardRef((e, t) =>
        (0, a.jsx)(h, {
            forwardedRef: t,
            ...e
        })
    ));
