n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(976649),
    l = n(260866),
    u = n(461745),
    c = n(806966),
    d = n(28546),
    f = n(149203),
    _ = n(981631),
    p = n(388032),
    h = n(744924);
let m = i.forwardRef(function (e, t) {
    let { emojiListRef: n, gridNavigatorId: a, isFullRow: m, onKeyDown: g, onFocus: E, autoFocus: v, className: b, defaultSearchPlaceholder: I } = e,
        T = i.useRef(null),
        S = (0, d.Iu)((e) => e.searchQuery),
        [y, A] = c.kJ.useStore((e) => [e.inspectedExpressionPosition, e.searchPlaceholder], o.X),
        N = i.useCallback(
            (e) => {
                var t;
                c.kJ.setActiveCategoryIndex('' === e ? 0 : f.c), c.kJ.setInspectedExpressionPosition(0, 0), c.kJ.setSearchPlaceholder(null), (0, d.ql)(e), null === (t = n.current) || void 0 === t || t.scrollTo(0);
            },
            [n]
        ),
        C = i.useCallback(() => {
            (0, d.ql)('');
        }, []);
    return (
        i.useImperativeHandle(t, () => ({
            focus: () => {
                var e;
                return null === (e = T.current) || void 0 === e ? void 0 : e.focus();
            }
        })),
        (0, r.jsx)(u.ZP, {
            autoFocus: v,
            query: S,
            ref: T,
            size: u.ZP.Sizes.MEDIUM,
            placeholder: null != A ? A : I,
            onClear: C,
            onKeyDown: (e) => {
                switch (e.keyCode) {
                    case _.yXg.ARROW_LEFT:
                    case _.yXg.ARROW_RIGHT:
                    case _.yXg.ARROW_UP:
                    case _.yXg.ARROW_DOWN:
                        document.activeElement !== e.target && e.preventDefault();
                }
                g(e);
            },
            onFocus: E,
            onQueryChange: N,
            className: s()(b, { [h.searchBarFullRow]: m }),
            preventEscapePropagation: !1,
            useKeyboardNavigation: !1,
            inputProps: {
                'aria-label': p.intl.string(p.t.tCauZW),
                'aria-haspopup': 'grid',
                'aria-controls': a,
                'aria-expanded': !0,
                'aria-activedescendant': (0, l.NE)(a, y.columnIndex, y.rowIndex)
            }
        })
    );
});
t.Z = i.memo(m);
