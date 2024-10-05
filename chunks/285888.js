t.d(n, {
    Z: function () {
        return g;
    },
    v: function () {
        return h;
    }
}),
    t(47120);
var o,
    r,
    a,
    i = t(735250),
    c = t(470079),
    l = t(120356),
    s = t.n(l),
    u = t(536640),
    d = t(481060),
    p = t(981631),
    _ = t(689938),
    f = t(404934);
function m(e, n, t) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = t),
        e
    );
}
((a = o || (o = {})).TOP = 'top'), (a.BOTTOM = 'bottom');
let h = {
    container: (e, n) => {
        let { isDisabled: t } = n;
        return {
            ...e,
            cursor: t ? 'not-allowed' : void 0,
            pointerEvents: void 0,
            fontSize: 16,
            fontWeight: 500,
            width: '100%'
        };
    },
    control: (e, n) => {
        let { isDisabled: t, menuIsOpen: o } = n;
        return {
            ...e,
            backgroundColor: 'var(--input-background)',
            borderColor: 'var(--input-background)',
            opacity: t ? 0.6 : 1,
            boxShadow: void 0,
            borderRadius: o ? '4px 4px 0 0' : '4px',
            minHeight: 40,
            transition: 'border 0.15s ease',
            cursor: t ? 'not-allowed' : void 0,
            pointerEvents: t ? 'none' : void 0,
            '&:hover': { borderColor: 'var(--input-background)' }
        };
    },
    singleValue: (e, n) => {
        let { isDisabled: t } = n;
        return {
            ...e,
            color: 'var(--interactive-normal)',
            opacity: t ? 0.5 : 1
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
    clearIndicator: (e, n) => {
        let { isDisabled: t } = n;
        return {
            ...e,
            color: 'var(--interactive-normal)',
            cursor: t ? void 0 : 'pointer',
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
    dropdownIndicator: (e, n) => {
        let { isDisabled: t } = n;
        return {
            ...e,
            color: 'var(--interactive-normal)',
            cursor: t ? void 0 : 'pointer',
            opacity: t ? 0.3 : 1,
            padding: '8px 8px 8px 0',
            ':hover': {
                color: 'var(--interactive-hover)',
                opacity: t ? 0.3 : 1
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
    option: (e, n) => {
        let { isSelected: t, isFocused: o } = n;
        return {
            ...e,
            ...(t
                ? {
                      backgroundColor: 'var(--background-modifier-selected)',
                      color: 'var(--interactive-active)'
                  }
                : o
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
class g extends (r = c.Component) {
    focus() {
        var e;
        null === (e = this._selectRef.current) || void 0 === e || e.focus();
    }
    render() {
        let e;
        let { className: n, selectClassName: t, error: o, valueRenderer: r, optionRenderer: a, multiValueRenderer: c, options: l, value: p, autofocus: m, disabled: g, clearable: S, searchable: b, styleOverrides: E, isMulti: I, placeholder: P, filterOption: T, closeMenuOnSelect: x = !0, ...y } = this.props,
            M = { ...y };
        null != m && (M.autoFocus = m), null != g && (M.isDisabled = g), null != S && (M.isClearable = S), null != b && (M.isSearchable = b);
        let C = { IndicatorSeparator: () => null };
        null != a &&
            (C.Option = (e) =>
                (0, i.jsx)(u.wx.Option, {
                    ...e,
                    children: a(e.data)
                })),
            null != r &&
                (C.SingleValue = (e) =>
                    (0, i.jsx)(u.wx.SingleValue, {
                        ...e,
                        children: r(e.data)
                    })),
            null != c && (C.MultiValue = (e) => c(e.data));
        if (I && Array.isArray(p)) {
            let n = {};
            l.forEach((e) => {
                n[String(e.value)] = e;
            }),
                (e = p.map((e) => n[String(e)]));
        } else e = null != p ? l.find((e) => e.value === p) : null;
        return (0, i.jsx)(d.FocusRing, {
            focused: this.state.isFocused && !this.state.isOpen,
            ringTarget: this._containerRef,
            children: (0, i.jsxs)('div', {
                className: s()(f.select, n, { [f.error]: null != o }),
                ref: this._containerRef,
                children: [
                    (0, i.jsx)(u.ZP, {
                        ...M,
                        className: t,
                        ref: this._selectRef,
                        isMulti: I,
                        components: C,
                        options: l,
                        styles: null != E ? E : h,
                        onFocus: this.handleFocus,
                        onBlur: this.handleBlur,
                        onMenuOpen: this.handleMenuOpen,
                        onMenuClose: this.handleMenuClose,
                        closeMenuOnSelect: x,
                        value: e,
                        onKeyDown: this.handleKeyDown,
                        placeholder: null != P ? P : _.Z.Messages.SELECT,
                        noOptionsMessage: () => _.Z.Messages.NO_RESULTS_FOUND,
                        filterOption: T
                    }),
                    null != o
                        ? (0, i.jsx)('div', {
                              className: f.errorMessage,
                              children: o
                          })
                        : null
                ]
            })
        });
    }
    constructor(...e) {
        super(...e),
            m(this, '_selectRef', c.createRef()),
            m(this, '_containerRef', c.createRef()),
            m(this, 'state', {
                isFocused: !1,
                isOpen: !1
            }),
            m(this, 'handleFocus', (e) => {
                var n, t;
                this.setState({ isFocused: !0 }), null === (n = (t = this.props).onFocus) || void 0 === n || n.call(t, e);
            }),
            m(this, 'handleBlur', (e) => {
                var n, t;
                this.setState({ isFocused: !1 }), null === (n = (t = this.props).onBlur) || void 0 === n || n.call(t, e);
            }),
            m(this, 'handleKeyDown', (e) => {
                e.which === p.yXg.ESCAPE && this.state.isOpen && e.stopPropagation();
            }),
            m(this, 'handleMenuOpen', () => {
                this.setState({ isOpen: !0 });
            }),
            m(this, 'handleMenuClose', () => {
                this.setState({ isOpen: !1 });
            });
    }
}
m(g, 'MenuPlacements', o);
