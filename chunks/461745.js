n.d(t, {
    BK: function () {
        return g;
    },
    Fj: function () {
        return r;
    }
}),
    n(653041),
    n(47120);
var r,
    i,
    a,
    s = n(200651),
    o = n(192379),
    l = n(120356),
    u = n.n(l),
    c = n(481060),
    d = n(565138),
    f = n(981631),
    _ = n(388032),
    p = n(468909);
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
let m = Object.freeze({
    SMALL: p.small,
    MEDIUM: p.medium,
    LARGE: p.large
});
((a = r || (r = {})).MEMBER = 'MEMBER'), (a.ROLE = 'ROLE'), (a.CHANNEL = 'CHANNEL'), (a.GUILD = 'GUILD'), (a.USER = 'USER');
let g = (e) => {
    let { hasContent: t, onClear: n, className: r, themeOverride: i, size: a = m.SMALL } = e;
    return (0, s.jsx)(c.ThemeProvider, {
        theme: i,
        children: (e) =>
            (0, s.jsx)(c.Clickable, {
                className: u()(r, p.iconLayout, a, e, { [p.clear]: t }),
                onClick: (e) => {
                    e.stopPropagation(), null != n && n(e);
                },
                onMouseDown: (e) => {
                    e.preventDefault(), e.stopPropagation();
                },
                tabIndex: t ? 0 : -1,
                'aria-hidden': !t,
                'aria-label': _.intl.string(_.t['78fJND']),
                focusProps: { offset: 4 },
                children: (0, s.jsxs)('div', {
                    className: p.iconContainer,
                    children: [
                        (0, s.jsx)(c.MagnifyingGlassIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: u()({
                                [p.icon]: !0,
                                [p.visible]: !t
                            })
                        }),
                        (0, s.jsx)(c.XSmallIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: u()({
                                [p.icon]: !0,
                                [p.visible]: t
                            })
                        })
                    ]
                })
            })
    });
};
class E extends (i = o.Component) {
    componentDidUpdate(e) {
        let { focusAfterReady: t, isReady: n } = this.props;
        t && !e.isReady && n && this.focus();
    }
    handleKeyDownGrid(e) {
        let { selectedRow: t, selectedColumn: n, sections: r, query: i, tags: a, onSelectionChange: s, onSelect: o, onRemoveTag: l, preventEscapePropagation: u } = this.props;
        if (0 !== r.length) {
            switch (e.keyCode) {
                case f.yXg.BACKSPACE:
                    (null == i || 0 === i.length) && null != a && a.length > 0 && (e.preventDefault(), e.stopPropagation(), null == l || l(a.length - 1));
                    break;
                case f.yXg.ARROW_DOWN:
                    e.preventDefault(), e.stopPropagation(), -1 === t ? ((t = 0), (n = 0)) : ((t += 1) >= r.length && (t = r.length - 1), n >= r[t] && (n = r[t] - 1));
                    break;
                case f.yXg.ARROW_UP:
                    e.preventDefault(), e.stopPropagation(), (t -= 1) < 0 ? ((t = 0), (n = 0)) : n >= r[t] && (n = r[t] - 1);
                    break;
                case f.yXg.ARROW_LEFT:
                    e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), (n -= 1) < 0 && ((t -= 1) >= 0 ? (n = r[t] - 1) : t < 0 && ((t = 0), (n = 0)));
                    break;
                case f.yXg.ARROW_RIGHT:
                    e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), (n += 1) >= r[t] && ((n = 0), (t += 1) >= r.length && ((t = r.length - 1), (n = r[t] - 1)));
                    break;
                case f.yXg.ENTER:
                    if ((e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), -1 === n && (n = 0), t >= r.length || n >= r[t])) return;
                    null != o && o(t, n, e);
                    return;
                case f.yXg.ESCAPE:
                    e.preventDefault(), u && e.stopPropagation(), null != o && o(null, null, e);
                    return;
                default:
                    return;
            }
            null != s && s(t, n);
        }
    }
    handleKeyDownList(e) {
        let { sections: t, selectedSection: n, selectedRow: r, onSelect: i, onSelectionChange: a, query: s, tags: o, preventEscapePropagation: l } = this.props,
            { current: u } = this.ref;
        if (null != u)
            switch (e.keyCode) {
                case f.yXg.BACKSPACE:
                    if ((null == s || 0 === s.length) && null != o && o.length > 0) {
                        var c, d;
                        e.preventDefault(), e.stopPropagation(), null === (c = (d = this.props).onRemoveTag) || void 0 === c || c.call(d, o.length - 1);
                    }
                    break;
                case f.yXg.ARROW_DOWN:
                    e.preventDefault(), e.stopPropagation(), t.length > n && ++r >= t[n] && (++n >= t.length && (n = 0), (r = 0)), null == a || a(n, r);
                    break;
                case f.yXg.ARROW_UP:
                    e.preventDefault(), e.stopPropagation(), --r < 0 && (--n < 0 && (n = t.length - 1), (r = t[n] - 1)), null == a || a(n, r);
                    break;
                case f.yXg.ENTER:
                    e.preventDefault(), e.stopPropagation(), t.length > n && t[n] > r && (null == i || i(n, r, e));
                    break;
                case f.yXg.ESCAPE:
                    e.preventDefault(), l && e.stopPropagation(), null == i || i(null, null, e), u.blur();
            }
    }
    render() {
        let { autoFocus: e, query: t, placeholder: n = _.intl.string(_.t.LzcpeX), themeOverride: r, disabled: i, onClear: a, size: o, maxHeight: l, tags: f, onActivate: h, className: m, inputProps: E, focusAfterReady: v } = this.props,
            b = null != t && t.length > 0,
            I = !1,
            T = [];
        return (
            null != f &&
                f.length > 0 &&
                ('string' == typeof f[0]
                    ? f.forEach((e, t) =>
                          T.push(
                              (0, s.jsxs)(
                                  c.Anchor,
                                  {
                                      focusProps: { offset: 4 },
                                      className: p.tag,
                                      onClick: this.handleRemoveTag.bind(this, t),
                                      children: [
                                          e,
                                          (0, s.jsx)(c.XSmallIcon, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: p.close,
                                              'aria-label': _.intl.string(_.t.N86XcH)
                                          })
                                      ]
                                  },
                                  t
                              )
                          )
                      )
                    : ((I = !0),
                      f.forEach((e, t) =>
                          T.push(
                              (0, s.jsxs)(
                                  c.Anchor,
                                  {
                                      className: u()(p.tag, p.richTag),
                                      onClick: this.handleRemoveTag.bind(this, t),
                                      children: [
                                          ('MEMBER' === e.type || 'USER' === e.type) &&
                                              null != e.avatar &&
                                              (0, s.jsx)(c.Avatar, {
                                                  src: e.avatar,
                                                  'aria-hidden': !0,
                                                  size: c.AvatarSizes.SIZE_16
                                              }),
                                          'ROLE' === e.type &&
                                              null != e.color &&
                                              (0, s.jsx)('span', {
                                                  className: p.tagRoleColor,
                                                  style: { backgroundColor: e.color }
                                              }),
                                          'GUILD' === e.type &&
                                              null != e.guild &&
                                              (0, s.jsx)(d.Z, {
                                                  guild: e.guild,
                                                  active: !0,
                                                  size: d.Z.Sizes.SMOL
                                              }),
                                          (0, s.jsx)('span', {
                                              className: p.tagLabel,
                                              children: e.label
                                          }),
                                          (0, s.jsx)(c.XSmallIcon, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: p.close,
                                              'aria-label': _.intl.string(_.t.N86XcH)
                                          })
                                      ]
                                  },
                                  t
                              )
                          )
                      ))),
            (0, s.jsx)(c.FocusRing, {
                focusTarget: this.ref,
                ringTarget: this.containerRef,
                children: (0, s.jsx)(c.ThemeProvider, {
                    theme: r,
                    children: (d) =>
                        (0, s.jsx)('div', {
                            ref: this.containerRef,
                            className: u()(m, p.container, o, d, { [p.disabled]: i }),
                            children: (0, s.jsxs)(c.ScrollerThin, {
                                className: p.inner,
                                style: { maxHeight: l },
                                children: [
                                    T,
                                    (0, s.jsx)('input', {
                                        className: u()(p.input, { [p.richTagInput]: I }),
                                        type: 'text',
                                        ref: this.ref,
                                        spellCheck: 'false',
                                        placeholder: n,
                                        value: t,
                                        onChange: this.handleChange,
                                        onKeyDown: this.handleKeyDown,
                                        onFocus: this.handleFocus,
                                        disabled: i,
                                        'aria-disabled': i,
                                        autoFocus: !v && e,
                                        onMouseDown: h,
                                        ...this.defaultInputProps,
                                        ...E
                                    }),
                                    null != a
                                        ? (0, s.jsx)(g, {
                                              size: o,
                                              themeOverride: r,
                                              hasContent: b,
                                              onClear: this.handleClear
                                          })
                                        : null
                                ]
                            })
                        })
                })
            })
        );
    }
    constructor(...e) {
        super(...e),
            h(this, 'defaultInputProps', {
                role: 'combobox',
                'aria-haspopup': 'listbox',
                'aria-autocomplete': 'list'
            }),
            h(this, 'ref', o.createRef()),
            h(this, 'containerRef', o.createRef()),
            h(this, 'handleKeyDown', (e) => {
                let { onActivate: t, onKeyDown: n, onQueryChange: r, useKeyboardNavigation: i } = this.props;
                null != n && n(e);
                let { current: a } = this.ref;
                if (null == a || null != t) {
                    e.keyCode !== f.yXg.TAB && null != t && t(e);
                    return;
                }
                if (e.keyCode === f.yXg.ESCAPE && null != a.value && '' !== a.value && a.value.length > 0) {
                    (a.value = ''), null != r && r('');
                    return;
                }
                i && (this.props.gridResults ? this.handleKeyDownGrid(e) : this.handleKeyDownList(e));
            }),
            h(this, 'handleChange', (e) => {
                let { onQueryChange: t } = this.props;
                null != t && t(e.currentTarget.value);
            }),
            h(this, 'handleFocus', (e) => {
                let { onFocus: t } = this.props;
                null != t && t(e);
            }),
            h(this, 'handleClear', () => {
                let { onClear: e } = this.props,
                    { current: t } = this.ref;
                null != e && e(), null != t && t.focus();
            }),
            h(this, 'handleRemoveTag', (e) => {
                let { onRemoveTag: t } = this.props;
                null == t || t(e);
            }),
            h(this, 'focus', () => {
                let { current: e } = this.ref;
                null != e && e.focus();
            });
    }
}
h(E, 'Sizes', m),
    h(E, 'defaultProps', {
        size: m.SMALL,
        query: '',
        sections: [],
        selectedSection: 0,
        selectedRow: -1,
        selectedColumn: -1,
        gridResults: !1,
        disabled: !1,
        autoFocus: !1,
        preventEscapePropagation: !0,
        useKeyboardNavigation: !0
    }),
    (t.ZP = E);
