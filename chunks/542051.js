n.d(t, {
    M: function () {
        return E;
    }
}),
    n(411104);
var r,
    i,
    l,
    s,
    a = n(735250),
    o = n(470079),
    c = n(120356),
    u = n.n(c),
    d = n(481060),
    h = n(689938),
    _ = n(463659);
function f(e) {
    e.stopPropagation(), e.preventDefault();
}
function E(e, t, n) {
    return {
        id: ''.concat(e, '-').concat(t),
        role: 'option',
        tabIndex: -1,
        'aria-selected': n
    };
}
class p extends (r = o.PureComponent) {
    renderQuery(e) {
        let { query: t, navId: n, focusedIndex: r, onSelectQuery: i, onSelectSearchEverywhere: l, onHighlightQuery: s, hideQuery: o, searchFavorites: c } = this.props;
        if (e || o) return null;
        let f = -1 === r;
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsxs)(d.Clickable, {
                    className: u()(_.queryContainer, { [_.focused]: f }),
                    ...E(n, -1, f),
                    onMouseEnter: s,
                    onClick: i,
                    children: [
                        (0, a.jsx)('div', {
                            className: _.queryText,
                            children: c ? h.Z.Messages.SEARCH_FAVORITES : h.Z.Messages.SEARCH_FOR_VALUE.format({ value: t })
                        }),
                        (0, a.jsx)('div', {
                            className: _.queryShortcut,
                            'aria-hidden': !0,
                            children: (0, a.jsx)(d.KeyCombo, {
                                shortcut: 'return',
                                dim: !0,
                                className: _.keyCombo
                            })
                        })
                    ]
                }),
                c &&
                    (0, a.jsxs)(d.Clickable, {
                        className: u()(_.queryContainer, { [_.focused]: f }),
                        ...E(n, -1, f),
                        onMouseEnter: s,
                        onClick: l,
                        children: [
                            (0, a.jsx)('div', {
                                className: _.queryText,
                                children: h.Z.Messages.SEARCH_EVERYWHERE
                            }),
                            (0, a.jsx)('div', {
                                className: _.queryShortcut,
                                'aria-hidden': !0,
                                children: (0, a.jsx)(d.KeyCombo, {
                                    shortcut: 'shift+return',
                                    dim: !0,
                                    className: _.keyCombo
                                })
                            })
                        ]
                    })
            ]
        });
    }
    renderResults(e) {
        let { numResults: t, renderNoResults: n, renderInitialState: r, renderResult: i, renderCustomResults: l } = this.props;
        if (e) return r();
        if (0 === t) return n();
        if (null != i) return Array.from({ length: t }).map((e, t) => i(t));
        if (null != l) return l();
        throw Error('SearchResultsPopout.renderResults: Flow should never allow this...');
    }
    render() {
        let { query: e, focusedIndex: t, navId: n, width: r } = this.props,
            i = '' === e.trim();
        return (0, a.jsxs)('div', {
            className: _.container,
            style: { width: r },
            onMouseDown: f,
            role: 'listbox',
            id: n,
            tabIndex: -1,
            'aria-activedescendant': ''.concat(n, '-').concat(t),
            children: [this.renderQuery(i), this.renderResults(i)]
        });
    }
}
(s = {
    renderInitialState: () => null,
    hideQuery: !1,
    width: 320
}),
    (l = 'defaultProps') in (i = p)
        ? Object.defineProperty(i, l, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[l] = s),
    (t.Z = p);
