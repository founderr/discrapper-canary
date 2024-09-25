var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(143927),
    s = n(260866),
    l = n(461745),
    u = n(806966),
    c = n(28546),
    d = n(324889);
let _ = a.forwardRef(function (e, t) {
    let { store: n, hasSendableExpressions: r, onKeyDown: _, gridNavigatorId: E, expressionsListRef: f, defaultSearchPlaceholder: h, emptySearchPlaceholder: p } = e,
        m = a.useRef(null),
        [I, T] = (0, c.Iu)((e) => [e.searchQuery, e.isSearchSuggestion], o.Z),
        g = n.useStore((e) => e.searchPlaceholder),
        S = n.useStore((e) => e.inspectedExpressionPosition, o.Z),
        A = a.useCallback(
            (e) => {
                var t;
                n.setActiveCategoryIndex('' === e ? 0 : u.c), n.setInspectedExpressionPosition(0, 0), n.setSearchPlaceholder(null), (0, c.ql)(e), null === (t = f.current) || void 0 === t || t.scrollTo(0);
            },
            [f, n]
        ),
        v = a.useCallback(() => {
            (0, c.ql)('');
        }, []);
    a.useImperativeHandle(t, () => ({
        focus: () => {
            var e;
            return null === (e = m.current) || void 0 === e ? void 0 : e.focus();
        }
    })),
        a.useLayoutEffect(() => {
            if (T) {
                var e;
                null === (e = m.current) || void 0 === e || e.focus();
            }
        }, [T]);
    let N = () => (null != g ? g : r || null == p ? h : p);
    return (0, i.jsx)('div', {
        className: d.wrapper,
        children: (0, i.jsx)(l.ZP, {
            autoFocus: r,
            disabled: !r,
            query: I,
            ref: m,
            size: l.ZP.Sizes.MEDIUM,
            placeholder: N(),
            onClear: v,
            onKeyDown: _,
            onQueryChange: A,
            className: d.__invalid_searchBar,
            preventEscapePropagation: !1,
            useKeyboardNavigation: !1,
            inputProps: {
                'aria-haspopup': 'grid',
                'aria-controls': E,
                'aria-expanded': !0,
                'aria-activedescendant': (0, s.NE)(E, S.columnIndex, S.rowIndex)
            }
        })
    });
});
t.Z = _;
