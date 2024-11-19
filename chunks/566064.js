n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(47120);
var r = n(192379),
    i = n(611144),
    a = n(536895),
    s = n(260866);
let o = [a.R8.TAB];
function l(e, t, n) {
    return null != t && null != n ? '#'.concat((0, s.NE)(e, t, n)) : '[data-ref-id='.concat(e, ']');
}
function u(e) {
    return document.querySelector(e);
}
function c(e) {
    let { navId: t, columnCounts: n, focusedX: c = 0, focusedY: d = 0, onSelect: f, prepareFocus: _, getNewFocusPosition: p, maintainFocusPosition: h = !0, enabled: m = !0, onDispatch: g, autoFocusElement: E = !0, useVirtualFocus: v = !1 } = e,
        b = r.useCallback(
            (e, t) => {
                let n = (0, i.Z)(e, t);
                return null != g && g(e, n, t), n;
            },
            [g]
        ),
        [I, S] = r.useReducer(b, {
            focusedX: c,
            focusedY: d,
            columnCounts: n
        }),
        { columnCounts: T, focusedX: y, focusedY: A } = I,
        [N] = r.useState(() => (0, s.P2)(S, 16));
    return (
        r.useEffect(() => {
            S({
                type: i.s.UPDATE_COLUMN_COUNTS,
                columnCounts: n
            });
        }, [n]),
        (function (e) {
            let { navId: t, columnCounts: n, focusedX: c, focusedY: d, onSelect: f, prepareFocus: _, getNewFocusPosition: p, dispatch: h, maintainFocusPosition: m, enabled: g, autoFocusElement: E, useVirtualFocus: v } = e,
                b = r.useRef();
            b.current = g;
            let I = u(l(t, c, d)),
                [S, T] = r.useState(!1),
                [y, A] = r.useState(!1),
                [N, C] = r.useState(!1),
                [R] = r.useState(
                    () =>
                        new s.$o((e) => {
                            let [t, n] = e.split(',').map(Number);
                            return () => {
                                T(!0),
                                    h({
                                        type: i.s.SET_FOCUSED_POSITION,
                                        x: t,
                                        y: n
                                    });
                            };
                        })
                );
            r.useEffect(() => () => R.clean(), [R]);
            let O = r.useCallback(
                    (e) => {
                        if (!b.current || !E) return !1;
                        e.focus();
                    },
                    [E]
                ),
                D = r.useCallback(
                    (e, n) => {
                        let r = l(t, e, n);
                        (null != _ ? _(e, n, r) : Promise.resolve()).then(() => {
                            let e = u(r);
                            null != e ? (O(e), A(!1)) : requestAnimationFrame(() => A(!0));
                        });
                    },
                    [t, _, O]
                ),
                L = r.useCallback(
                    function () {
                        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                            [n, r] = null != p ? p(c, d) : [c, d];
                        if (
                            (n !== c || r !== d) &&
                            (h({
                                type: i.s.SET_FOCUSED_POSITION,
                                x: n,
                                y: r
                            }),
                            !e)
                        ) {
                            C(!0);
                            return;
                        }
                        let a = u(l(t, n, r));
                        null != a && (C(!0), O(a));
                    },
                    [h, c, d, p, t, O]
                ),
                [x, w] = r.useState(!1);
            r.useEffect(() => {
                if (!x || !S) return;
                w(!1);
                let e = u(l(t, c, d));
                if (null != e) {
                    O(e);
                    return;
                }
                T(!1);
                let n = u(l(t));
                null != n && O(n);
            }, [t, x, S, O, c, d]);
            let M = r.useCallback((e) => {
                b.current && null == e && w(!0);
            }, []);
            r.useEffect(() => {
                S && y && null != I && (O(I), A(!1));
            }, [y, I]),
                r.useEffect(() => {
                    S && (!N && D(c, d), C(!1));
                }, [c, d]);
            let P = r.useCallback(
                    (e) => {
                        if (!b.current) return;
                        if (!v && o.includes(e.key) && !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) && e.currentTarget === e.target) {
                            e.preventDefault(), e.stopPropagation(), L();
                            return;
                        }
                        let t = (function (e) {
                            switch (e.key) {
                                case a.R8.ENTER:
                                    return a.Us.SELECT_FOCUSED_ITEM;
                                case a.R8.UP:
                                    return a.Us.NAVIGATE_UP;
                                case a.R8.DOWN:
                                    return a.Us.NAVIGATE_DOWN;
                                case a.R8.RIGHT:
                                    return a.Us.NAVIGATE_RIGHT;
                                case a.R8.LEFT:
                                    return a.Us.NAVIGATE_LEFT;
                                case a.R8.HOME:
                                    if (e.ctrlKey) return a.Us.NAVIGATE_START;
                                    return a.Us.NAVIGATE_INLINE_START;
                                case a.R8.END:
                                    if (e.ctrlKey) return a.Us.NAVIGATE_END;
                                    return a.Us.NAVIGATE_INLINE_END;
                            }
                        })(e);
                        switch (t) {
                            case a.Us.NAVIGATE_UP:
                            case a.Us.NAVIGATE_DOWN:
                            case a.Us.NAVIGATE_RIGHT:
                            case a.Us.NAVIGATE_LEFT:
                            case a.Us.NAVIGATE_INLINE_START:
                            case a.Us.NAVIGATE_INLINE_END:
                            case a.Us.NAVIGATE_START:
                            case a.Us.NAVIGATE_END:
                                !(0 === n.length || (0 === c && 0 === d && t === a.Us.NAVIGATE_LEFT)) && (e.preventDefault(), e.stopPropagation()), h({ type: t });
                                return;
                            case a.Us.SELECT_FOCUSED_ITEM:
                                var r;
                                if ((E && (null == (r = I) ? void 0 : r.ownerDocument.activeElement) !== r) || e.repeat) return;
                                e.preventDefault(), e.stopPropagation(), h({ type: t }), null != f ? f(c, d, e) : null != I && I.click();
                        }
                    },
                    [L, h, E, I, f, c, d]
                ),
                k = r.useCallback((e) => (e.currentTarget !== e.target ? (!S && (T(!0), C(!0)), !1) : S ? (L(!1), !1) : void (m && null != I ? D(c, d) : L(!0))), [S, m, I, L, D, c, d]),
                U = r.useCallback((e) => {
                    if (e.target !== e.currentTarget) {
                        if (e.currentTarget.contains(e.relatedTarget)) return !1;
                        T(!1);
                    }
                }, []),
                G = r.useMemo(() => Math.max(...n), [n]),
                B = r.useCallback(
                    () => ({
                        role: 'grid',
                        'aria-rowcount': n.length,
                        'aria-colcount': G,
                        tabIndex: S && m ? -1 : 0,
                        'data-ref-id': t,
                        onKeyDown: P,
                        onFocus: k,
                        onBlur: U
                    }),
                    [n.length, G, S, m, t, P, k, U]
                ),
                Z = r.useCallback(
                    (e, n) => {
                        let r = {
                            role: 'gridcell',
                            'aria-rowindex': n + 1,
                            'aria-colindex': e + 1,
                            id: (0, s.NE)(t, e, n),
                            tabIndex: m && e === c && n === d ? 0 : -1,
                            onFocus: R.get(''.concat(e, ',').concat(n))
                        };
                        return e === c && n === d && (r.ref = M), r;
                    },
                    [t, m, c, d, R, M]
                ),
                F = r.useCallback(
                    (e) => ({
                        role: 'row',
                        'aria-rowindex': e + 1
                    }),
                    []
                );
            return r.useMemo(
                () => ({
                    dispatch: h,
                    getContainerProps: B,
                    getItemProps: Z,
                    getRowProps: F
                }),
                [h, B, Z, F]
            );
        })({
            navId: t,
            columnCounts: T,
            focusedX: y,
            focusedY: A,
            dispatch: N,
            onSelect: f,
            prepareFocus: _,
            getNewFocusPosition: p,
            maintainFocusPosition: h,
            enabled: m,
            autoFocusElement: E,
            useVirtualFocus: v
        })
    );
}
