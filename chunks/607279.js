n(47120);
var r,
    i = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(481060),
    u = n(388032),
    c = n(833496);
function d(e, t, n) {
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
class f extends (r = a.Component) {
    render() {
        let { autoFocus: e, label: t, placeholder: n, searchTerm: r, inputClassName: a, className: s, onChange: d, onFocus: f, onBlur: _, onKeyPress: h, autoComplete: p, forwardedRef: m, closeIconClassName: g, searchIconClassName: E, cta: v } = this.props,
            I = null != r && r.length > 0,
            S = null != m ? m : this._textInputRef;
        return (0, i.jsx)(l.FocusRing, {
            focusTarget: S,
            ringTarget: this._containerRef,
            children: (0, i.jsxs)('div', {
                className: o()(c.searchBox, s),
                ref: this._containerRef,
                children: [
                    (0, i.jsx)(l.TextInput, {
                        inputRef: S,
                        focusProps: { enabled: !1 },
                        name: 'search',
                        maxLength: 100,
                        className: c.searchBoxInputWrapper,
                        inputClassName: o()(c.searchBoxInput, a),
                        onChange: d,
                        onFocus: f,
                        onBlur: _,
                        onKeyPress: h,
                        value: I ? r : '',
                        placeholder: n,
                        autoFocus: e,
                        'aria-label': t,
                        autoComplete: p ? 'on' : 'off'
                    }),
                    null != v
                        ? (0, i.jsx)(l.Text, {
                              color: 'text-muted',
                              variant: 'text-xs/normal',
                              className: c.cta,
                              children: v
                          })
                        : null,
                    I
                        ? (0, i.jsx)(l.Clickable, {
                              onClick: this.handleClear,
                              className: c.clear,
                              'aria-label': u.intl.string(u.t['78fJND']),
                              children: (0, i.jsx)(l.CircleXIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: o()(c.clearIcon, g)
                              })
                          })
                        : (0, i.jsx)(l.MagnifyingGlassIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: o()(c.searchIcon, E),
                              'aria-label': u.intl.string(u.t['5h0QOD'])
                          })
                ]
            })
        });
    }
    constructor(...e) {
        super(...e),
            d(this, '_textInputRef', a.createRef()),
            d(this, '_containerRef', a.createRef()),
            d(this, 'handleClear', () => {
                let { onClear: e, forwardedRef: t } = this.props,
                    { current: n } = null != t ? t : this._textInputRef;
                null != n && n.focus(), null != e && e();
            });
    }
}
d(f, 'defaultProps', { autoComplete: !1 }),
    (t.Z = a.forwardRef((e, t) =>
        (0, i.jsx)(f, {
            forwardedRef: t,
            ...e
        })
    ));
