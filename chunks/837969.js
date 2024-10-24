n.d(t, {
    ZP: function () {
        return d;
    }
}),
    n(47120);
var i = n(192379),
    s = n(714319),
    a = n(536895),
    l = n(260866);
let r = [a.R8.TAB, a.R8.UP, a.R8.DOWN];
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
    let { navId: t, itemCount: n, focusedIndex: d = 0, onSelect: h, setFocus: m, getNewFocusIndex: p, maintainFocusPosition: _ = !0, includeSetSizes: f = !0, focusOnMount: E = !0, enabled: g = !0, onDispatch: C } = e,
        I = i.useCallback(
            (e, t) => {
                let n = (0, s.Z)(e, t);
                return null != C && C(e, n, t), n;
            },
            [C]
        ),
        [T, x] = i.useReducer(I, {
            focusedIndex: d,
            itemCount: n
        }),
        { itemCount: S, focusedIndex: v } = T,
        [N] = i.useState(() => (0, l.P2)(x, 16));
    return (
        i.useEffect(() => {
            x({
                type: s.G.UPDATE_ITEM_COUNT,
                itemCount: n
            });
        }, [n]),
        (function (e) {
            let { navId: t, itemCount: n, focusedIndex: d, onSelect: h, setFocus: m = u, getNewFocusIndex: p, dispatch: _, maintainFocusPosition: f, includeSetSizes: E, focusOnMount: g, enabled: C, makeId: I = l.qR, getIndexFromId: T } = e,
                x = i.useRef(n),
                S = i.useRef(T);
            (S.current = T), (x.current = n);
            let v = i.useRef();
            i.useEffect(() => {
                v.current = C;
            }, [C]);
            let [N, A] = i.useState(!1),
                [Z] = i.useState(
                    () =>
                        new l.$o((e) => () => {
                            let t = null != S.current && 'string' == typeof e ? S.current(e) : e;
                            'number' == typeof t &&
                                !(t < 0) &&
                                _({
                                    type: s.G.SET_FOCUSED_INDEX,
                                    index: t
                                });
                        })
                );
            i.useEffect(() => () => Z.clean(), [Z]);
            let M = i.useCallback(
                    (e, t) => {
                        v.current && m(e, t);
                    },
                    [m]
                ),
                [b, R] = i.useState(!0);
            i.useEffect(() => {
                if (b && !g) {
                    R(!1);
                    return;
                }
                M(I(t, d), d);
            }, [d]);
            let L = i.useCallback(
                    function () {
                        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                            n = null != p ? p(d) : d;
                        n !== d &&
                            _({
                                type: s.G.SET_FOCUSED_INDEX,
                                index: n
                            }),
                            e && M(I(t, n), n);
                    },
                    [I, d, p, _, t, M]
                ),
                P = i.useCallback(
                    (e) => {
                        if (!v.current) return;
                        if (r.includes(e.key) && !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) && e.currentTarget === e.target) {
                            e.preventDefault(), e.stopPropagation(), L();
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
                                e.preventDefault(), e.stopPropagation(), _({ type: n });
                                return;
                            case a.Us.SELECT_FOCUSED_ITEM:
                                var i;
                                let s = c(o(I, t, d));
                                if ((null == (i = s) ? void 0 : i.ownerDocument.activeElement) !== i || e.repeat) return;
                                if ((e.preventDefault(), e.stopPropagation(), _({ type: n }), null != h)) {
                                    h(d);
                                    return;
                                }
                                null == s || s.click();
                        }
                    },
                    [I, t, _, d, L, h]
                ),
                j = i.useCallback(() => {
                    N || A(!0);
                }, [N]),
                O = i.useCallback(() => {
                    if (!N) f ? M(I(t, d), d) : L(!0);
                }, [I, t, M, f, N, d, L]),
                y = i.useCallback(
                    (e) => {
                        if (!e.currentTarget.contains(e.relatedTarget))
                            requestAnimationFrame(() => {
                                if (null == c(o(I, t, d))) {
                                    M(t);
                                    return;
                                }
                                A(!1);
                            });
                    },
                    [I, t, d, M]
                ),
                D = i.useRef(null);
            i.useLayoutEffect(() => {
                let e = D.current;
                if (null != e)
                    return (
                        e.addEventListener('focusin', j),
                        e.addEventListener('focus', O),
                        e.addEventListener('focusout', y),
                        () => {
                            e.removeEventListener('focusin', j), e.removeEventListener('focus', O), e.removeEventListener('focusout', y);
                        }
                    );
            }, [O, j, y]);
            let U = i.useCallback(
                    () => ({
                        role: 'list',
                        tabIndex: N && f ? -1 : 0,
                        id: t,
                        onKeyDown: P,
                        ref: D
                    }),
                    [t, N, P, f]
                ),
                k = i.useCallback(
                    (e) => {
                        let { index: n } = e;
                        return {
                            role: 'listitem',
                            'aria-setsize': E ? x.current : void 0,
                            'aria-posinset': E ? n + 1 : void 0,
                            id: I(t, n),
                            tabIndex: f && n === d ? 0 : -1,
                            onFocus: Z.get(null != S.current ? I(t, n) : n)
                        };
                    },
                    [I, t, d, f, Z, E]
                );
            return i.useMemo(
                () => ({
                    dispatch: _,
                    getContainerProps: U,
                    getItemProps: k
                }),
                [_, U, k]
            );
        })({
            navId: t,
            itemCount: S,
            focusedIndex: v,
            dispatch: N,
            onSelect: h,
            setFocus: m,
            getNewFocusIndex: p,
            maintainFocusPosition: _,
            includeSetSizes: f,
            focusOnMount: E,
            enabled: g
        })
    );
}
