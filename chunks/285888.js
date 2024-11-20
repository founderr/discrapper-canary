n.d(t, {
    Z: function () {
        return m;
    },
    v: function () {
        return b;
    }
}),
    n(47120);
var r,
    i,
    o,
    a = n(200651),
    l = n(192379),
    s = n(120356),
    c = n.n(s),
    d = n(569619),
    u = n(481060),
    f = n(981631),
    p = n(388032),
    v = n(404934);
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
((o = r || (r = {})).TOP = 'top'), (o.BOTTOM = 'bottom');
let b = {
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
        let { isDisabled: n, menuIsOpen: r } = t;
        return {
            ...e,
            backgroundColor: 'var(--input-background)',
            borderColor: 'var(--input-background)',
            opacity: n ? 0.6 : 1,
            boxShadow: void 0,
            borderRadius: r ? '4px 4px 0 0' : '4px',
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
        let { isSelected: n, isFocused: r } = t;
        return {
            ...e,
            ...(n
                ? {
                      backgroundColor: 'var(--background-modifier-selected)',
                      color: 'var(--interactive-active)'
                  }
                : r
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
class m extends (i = l.Component) {
    focus() {
        var e;
        null === (e = this._selectRef.current) || void 0 === e || e.focus();
    }
    render() {
        let e;
        let { className: t, selectClassName: n, error: r, valueRenderer: i, optionRenderer: o, multiValueRenderer: l, options: s, value: f, autofocus: h, disabled: m, clearable: _, searchable: g, styleOverrides: x, isMulti: C, placeholder: I, filterOption: S, closeMenuOnSelect: E = !0, ...w } = this.props,
            A = { ...w };
        null != h && (A.autoFocus = h), null != m && (A.isDisabled = m), null != _ && (A.isClearable = _), null != g && (A.isSearchable = g);
        let j = { IndicatorSeparator: () => null };
        null != o &&
            (j.Option = (e) =>
                (0, a.jsx)(d.wx.Option, {
                    ...e,
                    children: o(e.data)
                })),
            null != i &&
                (j.SingleValue = (e) =>
                    (0, a.jsx)(d.wx.SingleValue, {
                        ...e,
                        children: i(e.data)
                    })),
            null != l && (j.MultiValue = (e) => l(e.data));
        if (C && Array.isArray(f)) {
            let t = {};
            s.forEach((e) => {
                t[String(e.value)] = e;
            }),
                (e = f.map((e) => t[String(e)]));
        } else e = null != f ? s.find((e) => e.value === f) : null;
        return (0, a.jsx)(u.FocusRing, {
            focused: this.state.isFocused && !this.state.isOpen,
            ringTarget: this._containerRef,
            children: (0, a.jsxs)('div', {
                className: c()(v.select, t, { [v.error]: null != r }),
                ref: this._containerRef,
                children: [
                    (0, a.jsx)(d.ZP, {
                        ...A,
                        className: n,
                        ref: this._selectRef,
                        isMulti: C,
                        components: j,
                        options: s,
                        styles: null != x ? x : b,
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
                    null != r
                        ? (0, a.jsx)('div', {
                              className: v.errorMessage,
                              children: r
                          })
                        : null
                ]
            })
        });
    }
    constructor(...e) {
        super(...e),
            h(this, '_selectRef', l.createRef()),
            h(this, '_containerRef', l.createRef()),
            h(this, 'state', {
                isFocused: !1,
                isOpen: !1
            }),
            h(this, 'handleFocus', (e) => {
                var t, n;
                this.setState({ isFocused: !0 }), null === (t = (n = this.props).onFocus) || void 0 === t || t.call(n, e);
            }),
            h(this, 'handleBlur', (e) => {
                var t, n;
                this.setState({ isFocused: !1 }), null === (t = (n = this.props).onBlur) || void 0 === t || t.call(n, e);
            }),
            h(this, 'handleKeyDown', (e) => {
                e.which === f.yXg.ESCAPE && this.state.isOpen && e.stopPropagation();
            }),
            h(this, 'handleMenuOpen', () => {
                this.setState({ isOpen: !0 });
            }),
            h(this, 'handleMenuClose', () => {
                this.setState({ isOpen: !1 });
            });
    }
}
h(m, 'MenuPlacements', r);
