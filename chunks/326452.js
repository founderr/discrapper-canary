n.d(t, {
    E: function () {
        return g;
    }
}),
    n(47120);
var r,
    i = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(1561),
    u = n(84735),
    c = n(922770),
    d = n(481060),
    f = n(388032),
    _ = n(78277);
function p(e, t, n) {
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
let h = Object.freeze({
        SMALL: _.small,
        MEDIUM: _.medium,
        LARGE: _.large
    }),
    m = (e) => {
        let { hasContent: t, onClear: n, className: r, isLoading: s, size: u = h.SMALL } = e;
        return (0, i.jsx)(l.P, {
            className: o()(r, _.iconLayout, u, { [_.pointer]: t }),
            onClick: (e) => {
                e.stopPropagation(), null != n && n(e);
            },
            tabIndex: t ? 0 : -1,
            'aria-hidden': !t,
            onMouseDown: (e) => {
                e.preventDefault(), e.stopPropagation();
            },
            children: (0, i.jsx)('div', {
                className: _.iconContainer,
                children: s
                    ? (0, i.jsx)(c.$, {
                          type: c.$.Type.SPINNING_CIRCLE,
                          className: o()(_.icon, _.visible)
                      })
                    : (0, i.jsxs)(a.Fragment, {
                          children: [
                              (0, i.jsx)(d.MagnifyingGlassIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: o()(_.icon, { [_.visible]: !t }),
                                  'aria-label': f.intl.string(f.t['5h0QOD'])
                              }),
                              (0, i.jsx)(d.XSmallIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: o()(_.clear, { [_.visible]: t }),
                                  'aria-label': f.intl.string(f.t.VkKicX)
                              })
                          ]
                      })
            })
        });
    };
m.Sizes = h;
class g extends (r = a.PureComponent) {
    focus() {
        let { current: e } = this.inputRef;
        null == e || e.focus();
    }
    blur() {
        let { current: e } = this.inputRef;
        null == e || e.blur();
    }
    render() {
        let { query: e, autoFocus: t, onClear: n, className: r, placeholder: a = f.intl.string(f.t['5h0QOD']), iconClassName: s, onKeyDown: l, onKeyUp: c, onKeyPress: d, isLoading: p, size: h, disabled: g, onChange: E, onBlur: v, onFocus: b, autoComplete: I, inputProps: S, hideSearchIcon: T, 'aria-label': y = f.intl.string(f.t['5h0QOD']), ...A } = this.props;
        return (0, i.jsx)(u.t, {
            focusTarget: this.inputRef,
            ringTarget: this.containerRef,
            children: (0, i.jsx)('div', {
                className: o()(r, _.container, h, { [_.disabled]: g }),
                ref: this.containerRef,
                ...A,
                children: (0, i.jsxs)('div', {
                    className: _.inner,
                    children: [
                        (0, i.jsx)('input', {
                            ...S,
                            onFocus: b,
                            onBlur: v,
                            className: _.input,
                            value: e,
                            onChange: this.handleOnChange,
                            onKeyDown: l,
                            onKeyUp: c,
                            onKeyPress: d,
                            placeholder: a,
                            disabled: g,
                            autoFocus: t,
                            autoComplete: I,
                            'aria-label': y,
                            ref: this.inputRef
                        }),
                        !T &&
                            (0, i.jsx)(m, {
                                size: h,
                                hasContent: e.length > 0,
                                onClear: n,
                                className: s,
                                isLoading: p
                            })
                    ]
                })
            })
        });
    }
    constructor(...e) {
        super(...e),
            p(this, 'inputRef', a.createRef()),
            p(this, 'containerRef', a.createRef()),
            p(this, 'handleOnChange', (e) => {
                let { onChange: t } = this.props;
                null == t || t(e.currentTarget.value);
            });
    }
}
p(g, 'Sizes', h),
    p(g, 'defaultProps', {
        size: h.SMALL,
        isLoading: !1,
        disabled: !1
    });
