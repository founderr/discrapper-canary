r.d(t, {
    Z: function () {
        return b;
    },
    v: function () {
        return v;
    }
}),
    r(47120);
var n,
    o,
    i,
    a = r(200651),
    s = r(192379),
    c = r(120356),
    l = r.n(c),
    d = r(569619),
    u = r(481060),
    f = r(981631),
    p = r(388032),
    h = r(808786);
function _(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = r),
        e
    );
}
((i = n || (n = {})).TOP = 'top'), (i.BOTTOM = 'bottom');
let v = {
    container: (e, t) => {
        let { isDisabled: r } = t;
        return {
            ...e,
            cursor: r ? 'not-allowed' : void 0,
            pointerEvents: void 0,
            fontSize: 16,
            fontWeight: 500,
            width: '100%'
        };
    },
    control: (e, t) => {
        let { isDisabled: r, menuIsOpen: n } = t;
        return {
            ...e,
            backgroundColor: 'var(--input-background)',
            borderColor: 'var(--input-background)',
            opacity: r ? 0.6 : 1,
            boxShadow: void 0,
            borderRadius: n ? '4px 4px 0 0' : '4px',
            minHeight: 40,
            transition: 'border 0.15s ease',
            cursor: r ? 'not-allowed' : void 0,
            pointerEvents: r ? 'none' : void 0,
            '&:hover': { borderColor: 'var(--input-background)' }
        };
    },
    singleValue: (e, t) => {
        let { isDisabled: r } = t;
        return {
            ...e,
            color: 'var(--interactive-normal)',
            opacity: r ? 0.5 : 1
        };
    },
    input: (e) => ({
        ...e,
        color: 'var(--interactive-normal)'
    }),
    menu: (e) => ({
        ...e,
        backgroundColor: 'var(--background-secondary)',
        border: '1px solid var(--background-tertiary)',
        borderRadius: '0 0 4px 4px',
        color: 'var(--interactive-normal)',
        marginTop: -1,
        marginBottom: -1
    }),
    clearIndicator: (e, t) => {
        let { isDisabled: r } = t;
        return {
            ...e,
            color: 'var(--interactive-normal)',
            cursor: r ? void 0 : 'pointer',
            opacity: 0.3,
            padding: '8px 0',
            transform: 'scale(0.8)',
            ':hover': {
                color: 'var(--text-danger)',
                opacity: 1
            }
        };
    },
    indicatorsContainer: (e) => ({
        ...e,
        alignItems: 'flex-start'
    }),
    dropdownIndicator: (e, t) => {
        let { isDisabled: r } = t;
        return {
            ...e,
            color: 'var(--interactive-normal)',
            cursor: r ? void 0 : 'pointer',
            opacity: r ? 0.3 : 1,
            padding: '8px 8px 8px 0',
            ':hover': {
                color: 'var(--interactive-hover)',
                opacity: r ? 0.3 : 1
            }
        };
    },
    menuList: (e) => ({
        ...e,
        padding: 0,
        '&::-webkit-scrollbar': {
            width: 8,
            padding: '0px 2px'
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'var(--scrollbar-thin-thumb)',
            border: '2px solid transparent',
            backgroundClip: 'padding-box',
            borderRadius: 4
        },
        '&::-webkit-scrollbar-track-piece': {
            backgroundColor: 'transparent',
            borderColor: 'transparent'
        }
    }),
    option: (e, t) => {
        let { isSelected: r, isFocused: n } = t;
        return {
            ...e,
            ...(r
                ? {
                      backgroundColor: 'var(--background-modifier-selected)',
                      color: 'var(--interactive-active)'
                  }
                : n
                  ? {
                        backgroundColor: 'var(--background-modifier-hover)',
                        color: 'var(--interactive-hover)'
                    }
                  : {
                        backgroundColor: 'transparent',
                        color: 'var(--interactive-normal)'
                    }),
            cursor: 'pointer',
            display: 'flex',
            padding: 12,
            alignItems: 'center',
            minHeight: 40,
            '&:active': {
                backgroundColor: 'var(--background-modifier-selected)',
                color: 'var(--interactive-active)'
            }
        };
    },
    placeholder: (e) => ({
        ...e,
        color: 'var(--text-muted)'
    })
};
class b extends (o = s.Component) {
    focus() {
        var e;
        null === (e = this._selectRef.current) || void 0 === e || e.focus();
    }
    render() {
        let e;
        let { className: t, selectClassName: r, error: n, valueRenderer: o, optionRenderer: i, multiValueRenderer: s, options: c, value: f, autofocus: _, disabled: b, clearable: g, searchable: m, styleOverrides: C, isMulti: x, placeholder: I, filterOption: S, closeMenuOnSelect: E = !0, ...T } = this.props,
            y = { ...T };
        null != _ && (y.autoFocus = _), null != b && (y.isDisabled = b), null != g && (y.isClearable = g), null != m && (y.isSearchable = m);
        let w = { IndicatorSeparator: () => null };
        null != i &&
            (w.Option = (e) =>
                (0, a.jsx)(d.wx.Option, {
                    ...e,
                    children: i(e.data)
                })),
            null != o &&
                (w.SingleValue = (e) =>
                    (0, a.jsx)(d.wx.SingleValue, {
                        ...e,
                        children: o(e.data)
                    })),
            null != s && (w.MultiValue = (e) => s(e.data));
        if (x && Array.isArray(f)) {
            let t = {};
            c.forEach((e) => {
                t[String(e.value)] = e;
            }),
                (e = f.map((e) => t[String(e)]));
        } else e = null != f ? c.find((e) => e.value === f) : null;
        return (0, a.jsx)(u.FocusRing, {
            focused: this.state.isFocused && !this.state.isOpen,
            ringTarget: this._containerRef,
            children: (0, a.jsxs)('div', {
                className: l()(h.select, t, { [h.error]: null != n }),
                ref: this._containerRef,
                children: [
                    (0, a.jsx)(d.ZP, {
                        ...y,
                        className: r,
                        ref: this._selectRef,
                        isMulti: x,
                        components: w,
                        options: c,
                        styles: null != C ? C : v,
                        onFocus: this.handleFocus,
                        onBlur: this.handleBlur,
                        onMenuOpen: this.handleMenuOpen,
                        onMenuClose: this.handleMenuClose,
                        closeMenuOnSelect: E,
                        value: e,
                        onKeyDown: this.handleKeyDown,
                        placeholder: null != I ? I : p.intl.string(p.t.XqMe3N),
                        noOptionsMessage: () => p.intl.string(p.t['Xe+fJC']),
                        filterOption: S
                    }),
                    null != n
                        ? (0, a.jsx)('div', {
                              className: h.errorMessage,
                              children: n
                          })
                        : null
                ]
            })
        });
    }
    constructor(...e) {
        super(...e),
            _(this, '_selectRef', s.createRef()),
            _(this, '_containerRef', s.createRef()),
            _(this, 'state', {
                isFocused: !1,
                isOpen: !1
            }),
            _(this, 'handleFocus', (e) => {
                var t, r;
                this.setState({ isFocused: !0 }), null === (t = (r = this.props).onFocus) || void 0 === t || t.call(r, e);
            }),
            _(this, 'handleBlur', (e) => {
                var t, r;
                this.setState({ isFocused: !1 }), null === (t = (r = this.props).onBlur) || void 0 === t || t.call(r, e);
            }),
            _(this, 'handleKeyDown', (e) => {
                e.which === f.yXg.ESCAPE && this.state.isOpen && e.stopPropagation();
            }),
            _(this, 'handleMenuOpen', () => {
                this.setState({ isOpen: !0 });
            }),
            _(this, 'handleMenuClose', () => {
                this.setState({ isOpen: !1 });
            });
    }
}
_(b, 'MenuPlacements', n);
