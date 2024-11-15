t.d(r, {
    Z: function () {
        return C;
    },
    v: function () {
        return b;
    }
}),
    t(47120);
var o,
    n,
    a,
    i = t(200651),
    s = t(192379),
    l = t(120356),
    c = t.n(l),
    d = t(569619),
    u = t(481060),
    f = t(981631),
    p = t(388032),
    h = t(7804);
function _(e, r, t) {
    return (
        r in e
            ? Object.defineProperty(e, r, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[r] = t),
        e
    );
}
((a = o || (o = {})).TOP = 'top'), (a.BOTTOM = 'bottom');
let b = {
    container: (e, r) => {
        let { isDisabled: t } = r;
        return {
            ...e,
            cursor: t ? 'not-allowed' : void 0,
            pointerEvents: void 0,
            fontSize: 16,
            fontWeight: 500,
            width: '100%'
        };
    },
    control: (e, r) => {
        let { isDisabled: t, menuIsOpen: o } = r;
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
    singleValue: (e, r) => {
        let { isDisabled: t } = r;
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
    clearIndicator: (e, r) => {
        let { isDisabled: t } = r;
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
    dropdownIndicator: (e, r) => {
        let { isDisabled: t } = r;
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
    option: (e, r) => {
        let { isSelected: t, isFocused: o } = r;
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
class C extends (n = s.Component) {
    focus() {
        var e;
        null === (e = this._selectRef.current) || void 0 === e || e.focus();
    }
    render() {
        let e;
        let { className: r, selectClassName: t, error: o, valueRenderer: n, optionRenderer: a, multiValueRenderer: s, options: l, value: f, autofocus: _, disabled: C, clearable: v, searchable: m, styleOverrides: g, isMulti: F, placeholder: I, filterOption: S, closeMenuOnSelect: x = !0, ...A } = this.props,
            y = { ...A };
        null != _ && (y.autoFocus = _), null != C && (y.isDisabled = C), null != v && (y.isClearable = v), null != m && (y.isSearchable = m);
        let w = { IndicatorSeparator: () => null };
        null != a &&
            (w.Option = (e) =>
                (0, i.jsx)(d.wx.Option, {
                    ...e,
                    children: a(e.data)
                })),
            null != n &&
                (w.SingleValue = (e) =>
                    (0, i.jsx)(d.wx.SingleValue, {
                        ...e,
                        children: n(e.data)
                    })),
            null != s && (w.MultiValue = (e) => s(e.data));
        if (F && Array.isArray(f)) {
            let r = {};
            l.forEach((e) => {
                r[String(e.value)] = e;
            }),
                (e = f.map((e) => r[String(e)]));
        } else e = null != f ? l.find((e) => e.value === f) : null;
        return (0, i.jsx)(u.FocusRing, {
            focused: this.state.isFocused && !this.state.isOpen,
            ringTarget: this._containerRef,
            children: (0, i.jsxs)('div', {
                className: c()(h.select, r, { [h.error]: null != o }),
                ref: this._containerRef,
                children: [
                    (0, i.jsx)(d.ZP, {
                        ...y,
                        className: t,
                        ref: this._selectRef,
                        isMulti: F,
                        components: w,
                        options: l,
                        styles: null != g ? g : b,
                        onFocus: this.handleFocus,
                        onBlur: this.handleBlur,
                        onMenuOpen: this.handleMenuOpen,
                        onMenuClose: this.handleMenuClose,
                        closeMenuOnSelect: x,
                        value: e,
                        onKeyDown: this.handleKeyDown,
                        placeholder: null != I ? I : p.intl.string(p.t.XqMe3N),
                        noOptionsMessage: () => p.intl.string(p.t['Xe+fJC']),
                        filterOption: S
                    }),
                    null != o
                        ? (0, i.jsx)('div', {
                              className: h.errorMessage,
                              children: o
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
                var r, t;
                this.setState({ isFocused: !0 }), null === (r = (t = this.props).onFocus) || void 0 === r || r.call(t, e);
            }),
            _(this, 'handleBlur', (e) => {
                var r, t;
                this.setState({ isFocused: !1 }), null === (r = (t = this.props).onBlur) || void 0 === r || r.call(t, e);
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
_(C, 'MenuPlacements', o);
