n.d(t, {
    Z: function () {
        return m;
    },
    v: function () {
        return g;
    }
}),
    n(47120);
var s,
    r,
    i,
    a = n(735250),
    o = n(470079),
    l = n(120356),
    c = n.n(l),
    u = n(536640),
    d = n(481060),
    _ = n(981631),
    h = n(689938),
    E = n(404934);
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
((i = s || (s = {})).TOP = 'top'), (i.BOTTOM = 'bottom');
let g = {
    container: (e, t) => {
        let { isDisabled: n } = t;
        return {
            ...e,
            cursor: n ? 'not-allowed' : void 0,
            pointerEvents: void 0,
            fontSize: 16,
            fontWeight: 500,
            width: '100%'
        };
    },
    control: (e, t) => {
        let { isDisabled: n, menuIsOpen: s } = t;
        return {
            ...e,
            backgroundColor: 'var(--input-background)',
            borderColor: 'var(--input-background)',
            opacity: n ? 0.6 : 1,
            boxShadow: void 0,
            borderRadius: s ? '4px 4px 0 0' : '4px',
            minHeight: 40,
            transition: 'border 0.15s ease',
            cursor: n ? 'not-allowed' : void 0,
            pointerEvents: n ? 'none' : void 0,
            '&:hover': { borderColor: 'var(--input-background)' }
        };
    },
    singleValue: (e, t) => {
        let { isDisabled: n } = t;
        return {
            ...e,
            color: 'var(--interactive-normal)',
            opacity: n ? 0.5 : 1
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
        let { isDisabled: n } = t;
        return {
            ...e,
            color: 'var(--interactive-normal)',
            cursor: n ? void 0 : 'pointer',
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
        let { isDisabled: n } = t;
        return {
            ...e,
            color: 'var(--interactive-normal)',
            cursor: n ? void 0 : 'pointer',
            opacity: n ? 0.3 : 1,
            padding: '8px 8px 8px 0',
            ':hover': {
                color: 'var(--interactive-hover)',
                opacity: n ? 0.3 : 1
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
        let { isSelected: n, isFocused: s } = t;
        return {
            ...e,
            ...(n
                ? {
                      backgroundColor: 'var(--background-modifier-selected)',
                      color: 'var(--interactive-active)'
                  }
                : s
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
class m extends (r = o.Component) {
    focus() {
        var e;
        null === (e = this._selectRef.current) || void 0 === e || e.focus();
    }
    render() {
        let e;
        let { className: t, selectClassName: n, error: s, valueRenderer: r, optionRenderer: i, multiValueRenderer: o, options: l, value: _, autofocus: p, disabled: m, clearable: f, searchable: I, styleOverrides: N, isMulti: T, placeholder: x, filterOption: A, closeMenuOnSelect: C = !0, ...Z } = this.props,
            R = { ...Z };
        null != p && (R.autoFocus = p), null != m && (R.isDisabled = m), null != f && (R.isClearable = f), null != I && (R.isSearchable = I);
        let v = { IndicatorSeparator: () => null };
        null != i &&
            (v.Option = (e) =>
                (0, a.jsx)(u.wx.Option, {
                    ...e,
                    children: i(e.data)
                })),
            null != r &&
                (v.SingleValue = (e) =>
                    (0, a.jsx)(u.wx.SingleValue, {
                        ...e,
                        children: r(e.data)
                    })),
            null != o && (v.MultiValue = (e) => o(e.data));
        if (T && Array.isArray(_)) {
            let t = {};
            l.forEach((e) => {
                t[String(e.value)] = e;
            }),
                (e = _.map((e) => t[String(e)]));
        } else e = null != _ ? l.find((e) => e.value === _) : null;
        return (0, a.jsx)(d.FocusRing, {
            focused: this.state.isFocused && !this.state.isOpen,
            ringTarget: this._containerRef,
            children: (0, a.jsxs)('div', {
                className: c()(E.select, t, { [E.error]: null != s }),
                ref: this._containerRef,
                children: [
                    (0, a.jsx)(u.ZP, {
                        ...R,
                        className: n,
                        ref: this._selectRef,
                        isMulti: T,
                        components: v,
                        options: l,
                        styles: null != N ? N : g,
                        onFocus: this.handleFocus,
                        onBlur: this.handleBlur,
                        onMenuOpen: this.handleMenuOpen,
                        onMenuClose: this.handleMenuClose,
                        closeMenuOnSelect: C,
                        value: e,
                        onKeyDown: this.handleKeyDown,
                        placeholder: null != x ? x : h.Z.Messages.SELECT,
                        noOptionsMessage: () => h.Z.Messages.NO_RESULTS_FOUND,
                        filterOption: A
                    }),
                    null != s
                        ? (0, a.jsx)('div', {
                              className: E.errorMessage,
                              children: s
                          })
                        : null
                ]
            })
        });
    }
    constructor(...e) {
        super(...e),
            p(this, '_selectRef', o.createRef()),
            p(this, '_containerRef', o.createRef()),
            p(this, 'state', {
                isFocused: !1,
                isOpen: !1
            }),
            p(this, 'handleFocus', (e) => {
                var t, n;
                this.setState({ isFocused: !0 }), null === (t = (n = this.props).onFocus) || void 0 === t || t.call(n, e);
            }),
            p(this, 'handleBlur', (e) => {
                var t, n;
                this.setState({ isFocused: !1 }), null === (t = (n = this.props).onBlur) || void 0 === t || t.call(n, e);
            }),
            p(this, 'handleKeyDown', (e) => {
                e.which === _.yXg.ESCAPE && this.state.isOpen && e.stopPropagation();
            }),
            p(this, 'handleMenuOpen', () => {
                this.setState({ isOpen: !0 });
            }),
            p(this, 'handleMenuClose', () => {
                this.setState({ isOpen: !1 });
            });
    }
}
p(m, 'MenuPlacements', s);
