n.d(t, {
    ZP: function () {
        return u;
    }
}),
    n(47120);
var i = n(192379),
    l = n(714319),
    a = n(536895),
    r = n(260866);
let s = [a.R8.TAB, a.R8.UP, a.R8.DOWN];
function o(e, t, n) {
    return null != n ? '#'.concat(e(t, n)) : '#'.concat(t);
}
function c(e) {
    return document.querySelector(e);
}
function d(e) {
    var t;
    null === (t = document.getElementById(e)) || void 0 === t || t.focus();
}
function u(e) {
    let { navId: t, itemCount: n, focusedIndex: u = 0, onSelect: h, setFocus: p, getNewFocusIndex: m, maintainFocusPosition: f = !0, includeSetSizes: g = !0, focusOnMount: C = !0, enabled: x = !0, onDispatch: v } = e,
        _ = i.useCallback(
            (e, t) => {
                let n = (0, l.Z)(e, t);
                return null != v && v(e, n, t), n;
            },
            [v]
        ),
        [I, E] = i.useReducer(_, {
            focusedIndex: u,
            itemCount: n
        }),
        { itemCount: b, focusedIndex: N } = I,
        [Z] = i.useState(() => (0, r.P2)(E, 16));
    return (
        i.useEffect(() => {
            E({
                type: l.G.UPDATE_ITEM_COUNT,
                itemCount: n
            });
        }, [n]),
        (function (e) {
            let { navId: t, itemCount: n, focusedIndex: u, onSelect: h, setFocus: p = d, getNewFocusIndex: m, dispatch: f, maintainFocusPosition: g, includeSetSizes: C, focusOnMount: x, enabled: v, makeId: _ = r.qR, getIndexFromId: I } = e,
                E = i.useRef(n),
                b = i.useRef(I);
            (b.current = I), (E.current = n);
            let N = i.useRef();
            i.useEffect(() => {
                N.current = v;
            }, [v]);
            let [Z, S] = i.useState(!1),
                [T] = i.useState(
                    () =>
                        new r.$o((e) => () => {
                            let t = null != b.current && 'string' == typeof e ? b.current(e) : e;
                            'number' == typeof t &&
                                !(t < 0) &&
                                f({
                                    type: l.G.SET_FOCUSED_INDEX,
                                    index: t
                                });
                        })
                );
            i.useEffect(() => () => T.clean(), [T]);
            let j = i.useCallback(
                    (e, t) => {
                        N.current && p(e, t);
                    },
                    [p]
                ),
                [A, y] = i.useState(!0);
            i.useEffect(() => {
                if (A && !x) {
                    y(!1);
                    return;
                }
                j(_(t, u), u);
            }, [u]);
            let P = i.useCallback(
                    function () {
                        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                            n = null != m ? m(u) : u;
                        n !== u &&
                            f({
                                type: l.G.SET_FOCUSED_INDEX,
                                index: n
                            }),
                            e && j(_(t, n), n);
                    },
                    [_, u, m, f, t, j]
                ),
                M = i.useCallback(
                    (e) => {
                        if (!N.current) return;
                        if (s.includes(e.key) && !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) && e.currentTarget === e.target) {
                            e.preventDefault(), e.stopPropagation(), P();
                            return;
                        }
                        let n = (function (e) {
                            switch (e.key) {
                                case a.R8.ENTER:
                                case a.R8.SPACE:
                                    return a.Us.SELECT_FOCUSED_ITEM;
                                case a.R8.UP:
                                    return a.Us.NAVIGATE_UP;
                                case a.R8.DOWN:
                                    return a.Us.NAVIGATE_DOWN;
                                case a.R8.HOME:
                                    return a.Us.NAVIGATE_START;
                                case a.R8.END:
                                    return a.Us.NAVIGATE_END;
                            }
                        })(e);
                        switch (n) {
                            case a.Us.NAVIGATE_UP:
                            case a.Us.NAVIGATE_DOWN:
                            case a.Us.NAVIGATE_START:
                            case a.Us.NAVIGATE_END:
                                e.preventDefault(), e.stopPropagation(), f({ type: n });
                                return;
                            case a.Us.SELECT_FOCUSED_ITEM:
                                var i;
                                let l = c(o(_, t, u));
                                if ((null == (i = l) ? void 0 : i.ownerDocument.activeElement) !== i || e.repeat) return;
                                if ((e.preventDefault(), e.stopPropagation(), f({ type: n }), null != h)) {
                                    h(u);
                                    return;
                                }
                                null == l || l.click();
                        }
                    },
                    [_, t, f, u, P, h]
                ),
                R = i.useCallback(() => {
                    Z || S(!0);
                }, [Z]),
                L = i.useCallback(() => {
                    if (!Z) g ? j(_(t, u), u) : P(!0);
                }, [_, t, j, g, Z, u, P]),
                k = i.useCallback(
                    (e) => {
                        if (!e.currentTarget.contains(e.relatedTarget))
                            requestAnimationFrame(() => {
                                if (null == c(o(_, t, u))) {
                                    j(t);
                                    return;
                                }
                                S(!1);
                            });
                    },
                    [_, t, u, j]
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
            let D = i.useCallback(
                    () => ({
                        role: 'list',
                        tabIndex: Z && g ? -1 : 0,
                        id: t,
                        onKeyDown: M,
                        ref: O
                    }),
                    [t, Z, M, g]
                ),
                w = i.useCallback(
                    (e) => {
                        let { index: n } = e;
                        return {
                            role: 'listitem',
                            'aria-setsize': C ? E.current : void 0,
                            'aria-posinset': C ? n + 1 : void 0,
                            id: _(t, n),
                            tabIndex: g && n === u ? 0 : -1,
                            onFocus: T.get(null != b.current ? _(t, n) : n)
                        };
                    },
                    [_, t, u, g, T, C]
                );
            return i.useMemo(
                () => ({
                    dispatch: f,
                    getContainerProps: D,
                    getItemProps: w
                }),
                [f, D, w]
            );
        })({
            navId: t,
            itemCount: b,
            focusedIndex: N,
            dispatch: Z,
            onSelect: h,
            setFocus: p,
            getNewFocusIndex: m,
            maintainFocusPosition: f,
            includeSetSizes: g,
            focusOnMount: C,
            enabled: x
        })
    );
}
