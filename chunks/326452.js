n.d(t, {
    E: function () {
        return I;
    }
});
var r,
    i = n(47120);
var a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(1561),
    c = n(84735),
    d = n(922770),
    _ = n(481060),
    E = n(689938),
    f = n(78277);
function h(e, t, n) {
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
let p = Object.freeze({
        SMALL: f.small,
        MEDIUM: f.medium,
        LARGE: f.large
    }),
    m = (e) => {
        let { hasContent: t, onClear: n, className: r, isLoading: i, size: s = p.SMALL } = e;
        return (0, a.jsx)(u.P, {
            className: l()(r, f.iconLayout, s, { [f.pointer]: t }),
            onClick: (e) => {
                e.stopPropagation(), null != n && n(e);
            },
            tabIndex: t ? 0 : -1,
            'aria-hidden': !t,
            onMouseDown: (e) => {
                e.preventDefault(), e.stopPropagation();
            },
            children: (0, a.jsx)('div', {
                className: f.iconContainer,
                children: i
                    ? (0, a.jsx)(d.$, {
                          type: d.$.Type.SPINNING_CIRCLE,
                          className: l()(f.icon, f.visible)
                      })
                    : (0, a.jsxs)(o.Fragment, {
                          children: [
                              (0, a.jsx)(_.MagnifyingGlassIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: l()(f.icon, { [f.visible]: !t }),
                                  'aria-label': E.Z.Messages.SEARCH
                              }),
                              (0, a.jsx)(_.XSmallIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: l()(f.clear, { [f.visible]: t }),
                                  'aria-label': E.Z.Messages.CLEAR
                              })
                          ]
                      })
            })
        });
    };
m.Sizes = p;
class I extends (r = o.PureComponent) {
    focus() {
        let { current: e } = this.inputRef;
        null == e || e.focus();
    }
    blur() {
        let { current: e } = this.inputRef;
        null == e || e.blur();
    }
    render() {
        let { query: e, autoFocus: t, onClear: n, className: r, placeholder: i = E.Z.Messages.SEARCH, iconClassName: o, onKeyDown: s, onKeyUp: u, onKeyPress: d, isLoading: _, size: h, disabled: p, onChange: I, onBlur: T, onFocus: g, autoComplete: S, inputProps: A, hideSearchIcon: v, 'aria-label': N = E.Z.Messages.SEARCH, ...O } = this.props;
        return (0, a.jsx)(c.t, {
            focusTarget: this.inputRef,
            ringTarget: this.containerRef,
            children: (0, a.jsx)('div', {
                className: l()(r, f.container, h, { [f.disabled]: p }),
                ref: this.containerRef,
                ...O,
                children: (0, a.jsxs)('div', {
                    className: f.inner,
                    children: [
                        (0, a.jsx)('input', {
                            ...A,
                            onFocus: g,
                            onBlur: T,
                            className: f.input,
                            value: e,
                            onChange: this.handleOnChange,
                            onKeyDown: s,
                            onKeyUp: u,
                            onKeyPress: d,
                            placeholder: i,
                            disabled: p,
                            autoFocus: t,
                            autoComplete: S,
                            'aria-label': N,
                            ref: this.inputRef
                        }),
                        !v &&
                            (0, a.jsx)(m, {
                                size: h,
                                hasContent: e.length > 0,
                                onClear: n,
                                className: o,
                                isLoading: _
                            })
                    ]
                })
            })
        });
    }
    constructor(...e) {
        super(...e),
            h(this, 'inputRef', o.createRef()),
            h(this, 'containerRef', o.createRef()),
            h(this, 'handleOnChange', (e) => {
                let { onChange: t } = this.props;
                null == t || t(e.currentTarget.value);
            });
    }
}
h(I, 'Sizes', p),
    h(I, 'defaultProps', {
        size: p.SMALL,
        isLoading: !1,
        disabled: !1
    });
