n.d(t, {
    ZP: function () {
        return d;
    }
}),
    n(47120);
var i = n(192379),
    l = n(714319),
    r = n(536895),
    s = n(260866);
let a = [r.R8.TAB, r.R8.UP, r.R8.DOWN];
function o(e, t, n) {
    return null != n ? '#'.concat(e(t, n)) : '#'.concat(t);
}
function c(e) {
    return document.querySelector(e);
}
function u(e) {
    var t;
    null === (t = document.getElementById(e)) || void 0 === t || t.focus();
}
function d(e) {
    let { navId: t, itemCount: n, focusedIndex: d = 0, onSelect: h, setFocus: m, getNewFocusIndex: p, maintainFocusPosition: f = !0, includeSetSizes: g = !0, focusOnMount: C = !0, enabled: x = !0, onDispatch: v } = e,
        _ = i.useCallback(
            (e, t) => {
                let n = (0, l.Z)(e, t);
                return null != v && v(e, n, t), n;
            },
            [v]
        ),
        [I, E] = i.useReducer(_, {
            focusedIndex: d,
            itemCount: n
        }),
        { itemCount: b, focusedIndex: S } = I,
        [Z] = i.useState(() => (0, s.P2)(E, 16));
    return (
        i.useEffect(() => {
            E({
                type: l.G.UPDATE_ITEM_COUNT,
                itemCount: n
            });
        }, [n]),
        (function (e) {
            let { navId: t, itemCount: n, focusedIndex: d, onSelect: h, setFocus: m = u, getNewFocusIndex: p, dispatch: f, maintainFocusPosition: g, includeSetSizes: C, focusOnMount: x, enabled: v, makeId: _ = s.qR, getIndexFromId: I } = e,
                E = i.useRef(n),
                b = i.useRef(I);
            (b.current = I), (E.current = n);
            let S = i.useRef();
            i.useEffect(() => {
                S.current = v;
            }, [v]);
            let [Z, T] = i.useState(!1),
                [N] = i.useState(
                    () =>
                        new s.$o((e) => () => {
                            let t = null != b.current && 'string' == typeof e ? b.current(e) : e;
                            'number' == typeof t &&
                                !(t < 0) &&
                                f({
                                    type: l.G.SET_FOCUSED_INDEX,
                                    index: t
                                });
                        })
                );
            i.useEffect(() => () => N.clean(), [N]);
            let j = i.useCallback(
                    (e, t) => {
                        S.current && m(e, t);
                    },
                    [m]
                ),
                [A, y] = i.useState(!0);
            i.useEffect(() => {
                if (A && !x) {
                    y(!1);
                    return;
                }
                j(_(t, d), d);
            }, [d]);
            let P = i.useCallback(
                    function () {
                        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                            n = null != p ? p(d) : d;
                        n !== d &&
                            f({
                                type: l.G.SET_FOCUSED_INDEX,
                                index: n
                            }),
                            e && j(_(t, n), n);
                    },
                    [_, d, p, f, t, j]
                ),
                M = i.useCallback(
                    (e) => {
                        if (!S.current) return;
                        if (a.includes(e.key) && !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) && e.currentTarget === e.target) {
                            e.preventDefault(), e.stopPropagation(), P();
                            return;
                        }
                        let n = (function (e) {
                            switch (e.key) {
                                case r.R8.ENTER:
                                case r.R8.SPACE:
                                    return r.Us.SELECT_FOCUSED_ITEM;
                                case r.R8.UP:
                                    return r.Us.NAVIGATE_UP;
                                case r.R8.DOWN:
                                    return r.Us.NAVIGATE_DOWN;
                                case r.R8.HOME:
                                    return r.Us.NAVIGATE_START;
                                case r.R8.END:
                                    return r.Us.NAVIGATE_END;
                            }
                        })(e);
                        switch (n) {
                            case r.Us.NAVIGATE_UP:
                            case r.Us.NAVIGATE_DOWN:
                            case r.Us.NAVIGATE_START:
                            case r.Us.NAVIGATE_END:
                                e.preventDefault(), e.stopPropagation(), f({ type: n });
                                return;
                            case r.Us.SELECT_FOCUSED_ITEM:
                                var i;
                                let l = c(o(_, t, d));
                                if ((null == (i = l) ? void 0 : i.ownerDocument.activeElement) !== i || e.repeat) return;
                                if ((e.preventDefault(), e.stopPropagation(), f({ type: n }), null != h)) {
                                    h(d);
                                    return;
                                }
                                null == l || l.click();
                        }
                    },
                    [_, t, f, d, P, h]
                ),
                R = i.useCallback(() => {
                    Z || T(!0);
                }, [Z]),
                L = i.useCallback(() => {
                    if (!Z) g ? j(_(t, d), d) : P(!0);
                }, [_, t, j, g, Z, d, P]),
                k = i.useCallback(
                    (e) => {
                        if (!e.currentTarget.contains(e.relatedTarget))
                            requestAnimationFrame(() => {
                                if (null == c(o(_, t, d))) {
                                    j(t);
                                    return;
                                }
                                T(!1);
                            });
                    },
                    [_, t, d, j]
                ),
                O = i.useRef(null);
            i.useLayoutEffect(() => {
                let e = O.current;
                if (null != e)
                    return (
                        e.addEventListener('focusin', R),
                        e.addEventListener('focus', L),
                        e.addEventListener('focusout', k),
                        () => {
                            e.removeEventListener('focusin', R), e.removeEventListener('focus', L), e.removeEventListener('focusout', k);
                        }
                    );
            }, [L, R, k]);
            let w = i.useCallback(
                    () => ({
                        role: 'list',
                        tabIndex: Z && g ? -1 : 0,
                        id: t,
                        onKeyDown: M,
                        ref: O
                    }),
                    [t, Z, M, g]
                ),
                D = i.useCallback(
                    (e) => {
                        let { index: n } = e;
                        return {
                            role: 'listitem',
                            'aria-setsize': C ? E.current : void 0,
                            'aria-posinset': C ? n + 1 : void 0,
                            id: _(t, n),
                            tabIndex: g && n === d ? 0 : -1,
                            onFocus: N.get(null != b.current ? _(t, n) : n)
                        };
                    },
                    [_, t, d, g, N, C]
                );
            return i.useMemo(
                () => ({
                    dispatch: f,
                    getContainerProps: w,
                    getItemProps: D
                }),
                [f, w, D]
            );
        })({
            navId: t,
            itemCount: b,
            focusedIndex: S,
            dispatch: Z,
            onSelect: h,
            setFocus: m,
            getNewFocusIndex: p,
            maintainFocusPosition: f,
            includeSetSizes: g,
            focusOnMount: C,
            enabled: x
        })
    );
}
