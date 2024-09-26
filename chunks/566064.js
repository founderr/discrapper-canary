n.d(t, {
    Z: function () {
        return f;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(611144),
    o = n(536895),
    s = n(260866);
let l = [o.R8.TAB];
function u(e) {
    switch (e.key) {
        case o.R8.ENTER:
            return o.Us.SELECT_FOCUSED_ITEM;
        case o.R8.UP:
            return o.Us.NAVIGATE_UP;
        case o.R8.DOWN:
            return o.Us.NAVIGATE_DOWN;
        case o.R8.RIGHT:
            return o.Us.NAVIGATE_RIGHT;
        case o.R8.LEFT:
            return o.Us.NAVIGATE_LEFT;
        case o.R8.HOME:
            if (e.ctrlKey) return o.Us.NAVIGATE_START;
            return o.Us.NAVIGATE_INLINE_START;
        case o.R8.END:
            if (e.ctrlKey) return o.Us.NAVIGATE_END;
            return o.Us.NAVIGATE_INLINE_END;
    }
}
function c(e, t, n) {
    return null != t && null != n ? '#'.concat((0, s.NE)(e, t, n)) : '[data-ref-id='.concat(e, ']');
}
function d(e) {
    return document.querySelector(e);
}
function _(e) {
    return (null == e ? void 0 : e.ownerDocument.activeElement) === e;
}
function E(e) {
    let { navId: t, columnCounts: n, focusedX: r, focusedY: E, onSelect: f, prepareFocus: h, getNewFocusPosition: p, dispatch: m, maintainFocusPosition: I, enabled: T, autoFocusElement: g, useVirtualFocus: S } = e,
        A = i.useRef();
    A.current = T;
    let v = d(c(t, r, E)),
        [N, O] = i.useState(!1),
        [R, C] = i.useState(!1),
        [y, L] = i.useState(!1),
        [b] = i.useState(
            () =>
                new s.$o((e) => {
                    let [t, n] = e.split(',').map(Number);
                    return () => {
                        O(!0),
                            m({
                                type: a.s.SET_FOCUSED_POSITION,
                                x: t,
                                y: n
                            });
                    };
                })
        );
    i.useEffect(() => () => b.clean(), [b]);
    let D = i.useCallback(
            (e) => {
                if (!A.current || !g) return !1;
                e.focus();
            },
            [g]
        ),
        M = i.useCallback(
            (e, n) => {
                let r = c(t, e, n);
                (null != h ? h(e, n, r) : Promise.resolve()).then(() => {
                    let e = d(r);
                    null != e ? (D(e), C(!1)) : requestAnimationFrame(() => C(!0));
                });
            },
            [t, h, D]
        ),
        P = i.useCallback(
            function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                    [n, i] = null != p ? p(r, E) : [r, E];
                if (
                    (n !== r || i !== E) &&
                    (m({
                        type: a.s.SET_FOCUSED_POSITION,
                        x: n,
                        y: i
                    }),
                    !e)
                ) {
                    L(!0);
                    return;
                }
                let o = d(c(t, n, i));
                null != o && (L(!0), D(o));
            },
            [m, r, E, p, t, D]
        ),
        [U, w] = i.useState(!1);
    i.useEffect(() => {
        if (!U || !N) return;
        w(!1);
        let e = d(c(t, r, E));
        if (null != e) {
            D(e);
            return;
        }
        O(!1);
        let n = d(c(t));
        null != n && D(n);
    }, [t, U, N, D, r, E]);
    let x = i.useCallback((e) => {
        A.current && null == e && w(!0);
    }, []);
    i.useEffect(() => {
        N && R && null != v && (D(v), C(!1));
    }, [R, v]),
        i.useEffect(() => {
            N && (!y && M(r, E), L(!1));
        }, [r, E]);
    let G = i.useCallback(
            (e) => {
                if (!A.current) return;
                if (!S && l.includes(e.key) && !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) && e.currentTarget === e.target) {
                    e.preventDefault(), e.stopPropagation(), P();
                    return;
                }
                let t = u(e);
                switch (t) {
                    case o.Us.NAVIGATE_UP:
                    case o.Us.NAVIGATE_DOWN:
                    case o.Us.NAVIGATE_RIGHT:
                    case o.Us.NAVIGATE_LEFT:
                    case o.Us.NAVIGATE_INLINE_START:
                    case o.Us.NAVIGATE_INLINE_END:
                    case o.Us.NAVIGATE_START:
                    case o.Us.NAVIGATE_END:
                        !(0 === n.length || (0 === r && 0 === E && t === o.Us.NAVIGATE_LEFT)) && (e.preventDefault(), e.stopPropagation()), m({ type: t });
                        return;
                    case o.Us.SELECT_FOCUSED_ITEM:
                        if ((g && !_(v)) || e.repeat) return;
                        e.preventDefault(), e.stopPropagation(), m({ type: t }), null != f ? f(r, E, e) : null != v && v.click();
                }
            },
            [P, m, g, v, f, r, E]
        ),
        k = i.useCallback((e) => (e.currentTarget !== e.target ? (!N && (O(!0), L(!0)), !1) : N ? (P(!1), !1) : void (I && null != v ? M(r, E) : P(!0))), [N, I, v, P, M, r, E]),
        B = i.useCallback((e) => {
            if (e.target !== e.currentTarget) {
                if (e.currentTarget.contains(e.relatedTarget)) return !1;
                O(!1);
            }
        }, []),
        F = i.useMemo(() => Math.max(...n), [n]),
        Z = i.useCallback(
            () => ({
                role: 'grid',
                'aria-rowcount': n.length,
                'aria-colcount': F,
                tabIndex: N && I ? -1 : 0,
                'data-ref-id': t,
                onKeyDown: G,
                onFocus: k,
                onBlur: B
            }),
            [n.length, F, N, I, t, G, k, B]
        ),
        V = i.useCallback(
            (e, n) => {
                let i = {
                    role: 'gridcell',
                    'aria-rowindex': n + 1,
                    'aria-colindex': e + 1,
                    id: (0, s.NE)(t, e, n),
                    tabIndex: I && e === r && n === E ? 0 : -1,
                    onFocus: b.get(''.concat(e, ',').concat(n))
                };
                return e === r && n === E && (i.ref = x), i;
            },
            [t, I, r, E, b, x]
        ),
        H = i.useCallback(
            (e) => ({
                role: 'row',
                'aria-rowindex': e + 1
            }),
            []
        );
    return i.useMemo(
        () => ({
            dispatch: m,
            getContainerProps: Z,
            getItemProps: V,
            getRowProps: H
        }),
        [m, Z, V, H]
    );
}
function f(e) {
    let { navId: t, columnCounts: n, focusedX: r = 0, focusedY: o = 0, onSelect: l, prepareFocus: u, getNewFocusPosition: c, maintainFocusPosition: d = !0, enabled: _ = !0, onDispatch: f, autoFocusElement: h = !0, useVirtualFocus: p = !1 } = e,
        m = i.useCallback(
            (e, t) => {
                let n = (0, a.Z)(e, t);
                return null != f && f(e, n, t), n;
            },
            [f]
        ),
        [I, T] = i.useReducer(m, {
            focusedX: r,
            focusedY: o,
            columnCounts: n
        }),
        { columnCounts: g, focusedX: S, focusedY: A } = I,
        [v] = i.useState(() => (0, s.P2)(T, 16));
    return (
        i.useEffect(() => {
            T({
                type: a.s.UPDATE_COLUMN_COUNTS,
                columnCounts: n
            });
        }, [n]),
        E({
            navId: t,
            columnCounts: g,
            focusedX: S,
            focusedY: A,
            dispatch: v,
            onSelect: l,
            prepareFocus: u,
            getNewFocusPosition: c,
            maintainFocusPosition: d,
            enabled: _,
            autoFocusElement: h,
            useVirtualFocus: p
        })
    );
}
