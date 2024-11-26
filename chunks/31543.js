var r = n(200651),
    i = n(192379),
    a = n(232713),
    s = n(260866),
    o = n(461745),
    l = n(806966),
    u = n(28546),
    c = n(453070),
    d = n(611480),
    f = n(388032),
    _ = n(844094);
let p = i.forwardRef(function (e, t) {
    let { onKeyDown: n, stickersListRef: p, channel: h } = e,
        m = (0, c.fQ)(h),
        g = i.useRef(null),
        { searchQuery: E, isSearchSuggestion: v } = (0, u.Iu)(
            (e) => ({
                searchQuery: e.searchQuery,
                isSearchSuggestion: e.isSearchSuggestion
            }),
            a.X
        ),
        I = l.ZN.useStore((e) => e.searchPlaceholder),
        T = l.ZN.useStore((e) => e.inspectedExpressionPosition, a.X),
        b = i.useCallback(
            (e) => {
                var t;
                l.ZN.setActiveCategoryIndex('' === e ? 0 : d.c), l.ZN.setInspectedExpressionPosition(0, 0), l.ZN.setSearchPlaceholder(null), (0, u.ql)(e), null === (t = p.current) || void 0 === t || t.scrollTo(0);
            },
            [p]
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
            className: _.wrapper,
            children: (0, r.jsx)(o.ZP, {
                autoFocus: m,
                disabled: !m,
                query: E,
                ref: g,
                size: o.ZP.Sizes.MEDIUM,
                placeholder: null != I ? I : m ? f.intl.string(f.t.dt5h1N) : f.intl.string(f.t['Pck/4e']),
                onClear: S,
                onKeyDown: n,
                onQueryChange: b,
                className: _.__invalid_searchBar,
                preventEscapePropagation: !1,
                useKeyboardNavigation: !1,
                inputProps: {
                    'aria-haspopup': 'grid',
                    'aria-controls': d.Vr,
                    'aria-expanded': !0,
                    'aria-activedescendant': (0, s.NE)(d.Vr, T.columnIndex, T.rowIndex)
                }
            })
        })
    );
});
t.Z = p;
