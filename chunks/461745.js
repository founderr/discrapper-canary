n.d(t, {
    BK: function () {
        return I;
    },
    Fj: function () {
        return r;
    }
});
var r,
    i,
    a = n(653041);
var o = n(47120);
var s = n(735250),
    l = n(470079),
    u = n(120356),
    c = n.n(u),
    d = n(481060),
    _ = n(565138),
    E = n(981631),
    f = n(689938),
    h = n(924908);
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
let m = Object.freeze({
    SMALL: h.small,
    MEDIUM: h.medium,
    LARGE: h.large
});
!(function (e) {
    (e.MEMBER = 'MEMBER'), (e.ROLE = 'ROLE'), (e.CHANNEL = 'CHANNEL'), (e.GUILD = 'GUILD'), (e.USER = 'USER');
})(r || (r = {}));
let I = (e) => {
    let { hasContent: t, onClear: n, className: r, themeOverride: i, size: a = m.SMALL } = e;
    return (0, s.jsx)(d.ThemeProvider, {
        theme: i,
        children: (e) =>
            (0, s.jsx)(d.Clickable, {
                className: c()(r, h.iconLayout, a, e, { [h.clear]: t }),
                onClick: (e) => {
                    e.stopPropagation(), null != n && n(e);
                },
                onMouseDown: (e) => {
                    e.preventDefault(), e.stopPropagation();
                },
                tabIndex: t ? 0 : -1,
                'aria-hidden': !t,
                'aria-label': f.Z.Messages.SEARCH_CLEAR,
                focusProps: { offset: 4 },
                children: (0, s.jsxs)('div', {
                    className: h.iconContainer,
                    children: [
                        (0, s.jsx)(d.MagnifyingGlassIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: c()({
                                [h.icon]: !0,
                                [h.visible]: !t
                            })
                        }),
                        (0, s.jsx)(d.XSmallIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: c()({
                                [h.icon]: !0,
                                [h.visible]: t
                            })
                        })
                    ]
                })
            })
    });
};
class T extends (i = l.Component) {
    componentDidUpdate(e) {
        let { focusAfterReady: t, isReady: n } = this.props;
        t && !e.isReady && n && this.focus();
    }
    handleKeyDownGrid(e) {
        let { selectedRow: t, selectedColumn: n, sections: r, query: i, tags: a, onSelectionChange: o, onSelect: s, onRemoveTag: l, preventEscapePropagation: u } = this.props;
        if (0 !== r.length) {
            switch (e.keyCode) {
                case E.yXg.BACKSPACE:
                    (null == i || 0 === i.length) && null != a && a.length > 0 && (e.preventDefault(), e.stopPropagation(), null == l || l(a.length - 1));
                    break;
                case E.yXg.ARROW_DOWN:
                    e.preventDefault(), e.stopPropagation(), -1 === t ? ((t = 0), (n = 0)) : ((t += 1) >= r.length && (t = r.length - 1), n >= r[t] && (n = r[t] - 1));
                    break;
                case E.yXg.ARROW_UP:
                    e.preventDefault(), e.stopPropagation(), (t -= 1) < 0 ? ((t = 0), (n = 0)) : n >= r[t] && (n = r[t] - 1);
                    break;
                case E.yXg.ARROW_LEFT:
                    e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), (n -= 1) < 0 && ((t -= 1) >= 0 ? (n = r[t] - 1) : t < 0 && ((t = 0), (n = 0)));
                    break;
                case E.yXg.ARROW_RIGHT:
                    e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), (n += 1) >= r[t] && ((n = 0), (t += 1) >= r.length && ((t = r.length - 1), (n = r[t] - 1)));
                    break;
                case E.yXg.ENTER:
                    if ((e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), -1 === n && (n = 0), t >= r.length || n >= r[t])) return;
                    null != s && s(t, n, e);
                    return;
                case E.yXg.ESCAPE:
                    e.preventDefault(), u && e.stopPropagation(), null != s && s(null, null, e);
                    return;
                default:
                    return;
            }
            null != o && o(t, n);
        }
    }
    handleKeyDownList(e) {
        let { sections: t, selectedSection: n, selectedRow: r, onSelect: i, onSelectionChange: a, query: o, tags: s, preventEscapePropagation: l } = this.props,
            { current: u } = this.ref;
        if (null != u)
            switch (e.keyCode) {
                case E.yXg.BACKSPACE:
                    if ((null == o || 0 === o.length) && null != s && s.length > 0) {
                        var c, d;
                        e.preventDefault(), e.stopPropagation(), null === (c = (d = this.props).onRemoveTag) || void 0 === c || c.call(d, s.length - 1);
                    }
                    break;
                case E.yXg.ARROW_DOWN:
                    e.preventDefault(), e.stopPropagation(), t.length > n && ++r >= t[n] && (++n >= t.length && (n = 0), (r = 0)), null == a || a(n, r);
                    break;
                case E.yXg.ARROW_UP:
                    e.preventDefault(), e.stopPropagation(), --r < 0 && (--n < 0 && (n = t.length - 1), (r = t[n] - 1)), null == a || a(n, r);
                    break;
                case E.yXg.ENTER:
                    e.preventDefault(), e.stopPropagation(), t.length > n && t[n] > r && (null == i || i(n, r, e));
                    break;
                case E.yXg.ESCAPE:
                    e.preventDefault(), l && e.stopPropagation(), null == i || i(null, null, e), u.blur();
            }
    }
    render() {
        let { autoFocus: e, query: t, placeholder: n = f.Z.Messages.DM_SEARCH_PLACEHOLDER, themeOverride: r, disabled: i, onClear: a, size: o, maxHeight: l, tags: u, onActivate: E, className: p, inputProps: m, focusAfterReady: T } = this.props,
            g = null != t && t.length > 0,
            S = !1,
            A = [];
        return (
            null != u &&
                u.length > 0 &&
                ('string' == typeof u[0]
                    ? u.forEach((e, t) =>
                          A.push(
                              (0, s.jsxs)(
                                  d.Anchor,
                                  {
                                      focusProps: { offset: 4 },
                                      className: h.tag,
                                      onClick: this.handleRemoveTag.bind(this, t),
                                      children: [
                                          e,
                                          (0, s.jsx)(d.XSmallIcon, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: h.close,
                                              'aria-label': f.Z.Messages.REMOVE
                                          })
                                      ]
                                  },
                                  t
                              )
                          )
                      )
                    : ((S = !0),
                      u.forEach((e, t) =>
                          A.push(
                              (0, s.jsxs)(
                                  d.Anchor,
                                  {
                                      className: c()(h.tag, h.richTag),
                                      onClick: this.handleRemoveTag.bind(this, t),
                                      children: [
                                          ('MEMBER' === e.type || 'USER' === e.type) &&
                                              null != e.avatar &&
                                              (0, s.jsx)(d.Avatar, {
                                                  src: e.avatar,
                                                  'aria-hidden': !0,
                                                  size: d.AvatarSizes.SIZE_16
                                              }),
                                          'ROLE' === e.type &&
                                              null != e.color &&
                                              (0, s.jsx)('span', {
                                                  className: h.tagRoleColor,
                                                  style: { backgroundColor: e.color }
                                              }),
                                          'GUILD' === e.type &&
                                              null != e.guild &&
                                              (0, s.jsx)(_.Z, {
                                                  guild: e.guild,
                                                  active: !0,
                                                  size: _.Z.Sizes.SMOL
                                              }),
                                          (0, s.jsx)('span', {
                                              className: h.tagLabel,
                                              children: e.label
                                          }),
                                          (0, s.jsx)(d.XSmallIcon, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: h.close,
                                              'aria-label': f.Z.Messages.REMOVE
                                          })
                                      ]
                                  },
                                  t
                              )
                          )
                      ))),
            (0, s.jsx)(d.FocusRing, {
                focusTarget: this.ref,
                ringTarget: this.containerRef,
                children: (0, s.jsx)(d.ThemeProvider, {
                    theme: r,
                    children: (u) =>
                        (0, s.jsx)('div', {
                            ref: this.containerRef,
                            className: c()(p, h.container, o, u, { [h.disabled]: i }),
                            children: (0, s.jsxs)(d.ScrollerThin, {
                                className: h.inner,
                                style: { maxHeight: l },
                                children: [
                                    A,
                                    (0, s.jsx)('input', {
                                        className: c()(h.input, { [h.richTagInput]: S }),
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
                                        autoFocus: !T && e,
                                        onMouseDown: E,
                                        ...this.defaultInputProps,
                                        ...m
                                    }),
                                    null != a
                                        ? (0, s.jsx)(I, {
                                              size: o,
                                              themeOverride: r,
                                              hasContent: g,
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
            p(this, 'defaultInputProps', {
                role: 'combobox',
                'aria-haspopup': 'listbox',
                'aria-autocomplete': 'list'
            }),
            p(this, 'ref', l.createRef()),
            p(this, 'containerRef', l.createRef()),
            p(this, 'handleKeyDown', (e) => {
                let { onActivate: t, onKeyDown: n, onQueryChange: r, useKeyboardNavigation: i } = this.props;
                null != n && n(e);
                let { current: a } = this.ref;
                if (null == a || null != t) {
                    e.keyCode !== E.yXg.TAB && null != t && t(e);
                    return;
                }
                if (e.keyCode === E.yXg.ESCAPE && null != a.value && '' !== a.value && a.value.length > 0) {
                    (a.value = ''), null != r && r('');
                    return;
                }
                i && (this.props.gridResults ? this.handleKeyDownGrid(e) : this.handleKeyDownList(e));
            }),
            p(this, 'handleChange', (e) => {
                let { onQueryChange: t } = this.props;
                null != t && t(e.currentTarget.value);
            }),
            p(this, 'handleFocus', (e) => {
                let { onFocus: t } = this.props;
                null != t && t(e);
            }),
            p(this, 'handleClear', () => {
                let { onClear: e } = this.props,
                    { current: t } = this.ref;
                null != e && e(), null != t && t.focus();
            }),
            p(this, 'handleRemoveTag', (e) => {
                let { onRemoveTag: t } = this.props;
                null == t || t(e);
            }),
            p(this, 'focus', () => {
                let { current: e } = this.ref;
                null != e && e.focus();
            });
    }
}
p(T, 'Sizes', m),
    p(T, 'defaultProps', {
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
    (t.ZP = T);
