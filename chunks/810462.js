n(47120);
var r = n(200651),
    i = n(192379),
    a = n(232713),
    s = n(260866),
    o = n(481060),
    l = n(806966),
    u = n(28546),
    c = n(849736);
let d = i.forwardRef(function (e, t) {
    let { store: n, hasSendableExpressions: d, onKeyDown: f, gridNavigatorId: _, expressionsListRef: p, defaultSearchPlaceholder: h, emptySearchPlaceholder: m } = e,
        g = i.useRef(null),
        [E, v] = (0, u.Iu)((e) => [e.searchQuery, e.isSearchSuggestion], a.X),
        I = n.useStore((e) => e.searchPlaceholder),
        T = n.useStore((e) => e.inspectedExpressionPosition, a.X),
        b = i.useCallback(
            (e) => {
                var t;
                n.setActiveCategoryIndex('' === e ? 0 : l.c), n.setInspectedExpressionPosition(0, 0), n.setSearchPlaceholder(null), (0, u.ql)(e), null === (t = p.current) || void 0 === t || t.scrollTo(0);
            },
            [p, n]
        ),
        S = i.useCallback(() => {
            (0, u.ql)('');
        }, []);
    return (
        i.useImperativeHandle(t, () => ({
            focus: () => {
                var e;
                return null === (e = g.current) || void 0 === e ? void 0 : e.focus();
            }
        })),
        i.useLayoutEffect(() => {
            if (v) {
                var e;
                null === (e = g.current) || void 0 === e || e.focus();
            }
        }, [v]),
        (0, r.jsx)('div', {
            className: c.wrapper,
            children: (0, r.jsx)(o.SearchBar, {
                autoFocus: d,
                disabled: !d,
                query: E,
                ref: g,
                size: o.SearchBar.Sizes.MEDIUM,
                placeholder: null != I ? I : d || null == m ? h : m,
                onClear: S,
                onKeyDown: f,
                onChange: b,
                className: c.__invalid_searchBar,
                inputProps: {
                    'aria-haspopup': 'grid',
                    'aria-controls': _,
                    'aria-expanded': !0,
                    'aria-activedescendant': (0, s.NE)(_, T.columnIndex, T.rowIndex)
                }
            })
        })
    );
});
t.Z = d;
