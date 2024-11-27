n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(232713),
    l = n(260866),
    u = n(481060),
    c = n(806966),
    d = n(28546),
    f = n(149203),
    _ = n(981631),
    p = n(388032),
    h = n(405156);
let m = i.forwardRef(function (e, t) {
    let { emojiListRef: n, gridNavigatorId: a, isFullRow: m, onKeyDown: g, onFocus: E, autoFocus: v, className: I, defaultSearchPlaceholder: T } = e,
        b = i.useRef(null),
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
                return null === (e = b.current) || void 0 === e ? void 0 : e.focus();
            }
        })),
        (0, r.jsx)(u.SearchBar, {
            autoFocus: v,
            query: S,
            ref: b,
            size: u.SearchBar.Sizes.MEDIUM,
            placeholder: null != A ? A : T,
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
            onChange: N,
            className: s()(I, { [h.searchBarFullRow]: m }),
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
