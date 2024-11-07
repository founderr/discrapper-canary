var r = n(200651),
    i = n(192379),
    a = n(782690),
    s = n(260866),
    o = n(461745),
    l = n(806966),
    u = n(28546),
    c = n(453070),
    d = n(611480),
    f = n(388032),
    _ = n(304829);
let h = i.forwardRef(function (e, t) {
    let { onKeyDown: n, stickersListRef: h, channel: p } = e,
        m = (0, c.fQ)(p),
        g = i.useRef(null),
        { searchQuery: E, isSearchSuggestion: v } = (0, u.Iu)(
            (e) => ({
                searchQuery: e.searchQuery,
                isSearchSuggestion: e.isSearchSuggestion
            }),
            a.Z
        ),
        I = l.ZN.useStore((e) => e.searchPlaceholder),
        S = l.ZN.useStore((e) => e.inspectedExpressionPosition, a.Z),
        T = i.useCallback(
            (e) => {
                var t;
                l.ZN.setActiveCategoryIndex('' === e ? 0 : d.c), l.ZN.setInspectedExpressionPosition(0, 0), l.ZN.setSearchPlaceholder(null), (0, u.ql)(e), null === (t = h.current) || void 0 === t || t.scrollTo(0);
            },
            [h]
        ),
        b = i.useCallback(() => {
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
                onClear: b,
                onKeyDown: n,
                onQueryChange: T,
                className: _.__invalid_searchBar,
                preventEscapePropagation: !1,
                useKeyboardNavigation: !1,
                inputProps: {
                    'aria-haspopup': 'grid',
                    'aria-controls': d.Vr,
                    'aria-expanded': !0,
                    'aria-activedescendant': (0, s.NE)(d.Vr, S.columnIndex, S.rowIndex)
                }
            })
        })
    );
});
t.Z = h;
