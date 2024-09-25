var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(143927),
    u = n(260866),
    c = n(461745),
    d = n(806966),
    _ = n(28546),
    E = n(149203),
    f = n(981631),
    h = n(689938),
    p = n(74353);
let m = a.forwardRef(function (e, t) {
    let { emojiListRef: n, gridNavigatorId: r, isFullRow: o, onKeyDown: m, onFocus: I, autoFocus: T, className: g, defaultSearchPlaceholder: S } = e,
        A = a.useRef(null),
        v = (0, _.Iu)((e) => e.searchQuery),
        [N, O] = d.kJ.useStore((e) => [e.inspectedExpressionPosition, e.searchPlaceholder], l.Z),
        R = a.useCallback(
            (e) => {
                var t;
                d.kJ.setActiveCategoryIndex('' === e ? 0 : E.c), d.kJ.setInspectedExpressionPosition(0, 0), d.kJ.setSearchPlaceholder(null), (0, _.ql)(e), null === (t = n.current) || void 0 === t || t.scrollTo(0);
            },
            [n]
        ),
        C = a.useCallback(() => {
            (0, _.ql)('');
        }, []),
        y = (e) => {
            switch (e.keyCode) {
                case f.yXg.ARROW_LEFT:
                case f.yXg.ARROW_RIGHT:
                case f.yXg.ARROW_UP:
                case f.yXg.ARROW_DOWN:
                    document.activeElement !== e.target && e.preventDefault();
            }
            m(e);
        };
    return (
        a.useImperativeHandle(t, () => ({
            focus: () => {
                var e;
                return null === (e = A.current) || void 0 === e ? void 0 : e.focus();
            }
        })),
        (0, i.jsx)(c.ZP, {
            autoFocus: T,
            query: v,
            ref: A,
            size: c.ZP.Sizes.MEDIUM,
            placeholder: null != O ? O : S,
            onClear: C,
            onKeyDown: y,
            onFocus: I,
            onQueryChange: R,
            className: s()(g, { [p.searchBarFullRow]: o }),
            preventEscapePropagation: !1,
            useKeyboardNavigation: !1,
            inputProps: {
                'aria-label': h.Z.Messages.SEARCH_EMOJIS,
                'aria-haspopup': 'grid',
                'aria-controls': r,
                'aria-expanded': !0,
                'aria-activedescendant': (0, u.NE)(r, N.columnIndex, N.rowIndex)
            }
        })
    );
});
t.Z = a.memo(m);
