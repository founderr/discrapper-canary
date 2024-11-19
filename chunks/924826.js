n.d(t, {
    ZP: function () {
        return c;
    }
}),
    n(47120);
var r = n(192379),
    i = n(372817),
    a = n(25441),
    s = n(585627),
    o = n(536895),
    l = n(260866);
function u(e, t) {
    var n;
    return Array.from((null !== (n = t.current) && void 0 !== n ? n : document).querySelectorAll('['.concat(l.ie, '^="').concat(e, '"]')));
}
function c(e) {
    let { id: t, defaultFocused: n, isEnabled: c, scrollToStart: d, scrollToEnd: f, onNavigatePreviousAtStart: _, onNavigateNextAtEnd: p, setFocus: h, setFocusOnList: m, preserveFocusPosition: g = !0, useVirtualFocus: E = !1, wrap: v = !1, orientation: b = o.hy.VERTICAL, disableClickOnSpace: I = !1 } = e,
        S = r.useRef(n ? (0, l.jb)(t, n) : null),
        T = r.useRef(!1),
        y = r.useRef(null),
        A = r.useRef(c);
    function N(e) {
        var t;
        return (null !== (t = y.current) && void 0 !== t ? t : document).querySelector(e);
    }
    function C(e) {
        var t;
        null === (t = N(e)) || void 0 === t || t.focus();
    }
    r.useLayoutEffect(() => {
        A.current = c;
    }, [c]);
    let R = r.useCallback(
            (e, t) => {
                A.current && (null != h ? h : C)(e, t);
            },
            [h]
        ),
        O = r.useCallback(
            (e) => {
                A.current && (null != m ? m : C)(e);
            },
            [m]
        ),
        D = r.useCallback(
            (e) => {
                if (((S.current = e), null == e)) {
                    (0, a.h)(t, null, g);
                    return;
                }
                let n = (0, l.P1)(e),
                    r = (0, l.x3)(e);
                R(n, r), (0, a.h)(t, r, g);
            },
            [t, g, R]
        ),
        L = r.useMemo(
            () =>
                (0, i.E)({
                    getFocusableElements: () => u(t, y),
                    getActiveElement() {
                        var e;
                        return null === (e = y.current) || void 0 === e ? void 0 : e.ownerDocument.activeElement;
                    },
                    scrollToStart: d,
                    scrollToEnd: f
                }),
            [t, d, f]
        ),
        [x, w] = r.useState(!1),
        M = r.useRef(x);
    r.useLayoutEffect(() => {
        M.current = x;
    }, [x]),
        r.useLayoutEffect(() => {
            let e = y.current;
            if (null != e) {
                if (!c) return;
                return (
                    e.addEventListener('focusin', n),
                    e.addEventListener('focusout', r),
                    e.addEventListener('focus', i),
                    e.addEventListener('scroll', a, { passive: !0 }),
                    () => {
                        e.removeEventListener('focusin', n), e.removeEventListener('focusout', r), e.removeEventListener('focus', i), e.removeEventListener('scroll', a);
                    }
                );
            }
            function n() {
                w(!0);
            }
            function r(e) {
                if (!e.currentTarget.contains(e.relatedTarget))
                    w(!1),
                        requestAnimationFrame(() => {
                            let e = S.current;
                            null !== e && null == N((0, l.P1)(e)) && O((0, l.P1)(t, l.kn));
                        });
            }
            async function i() {
                let e = y.current;
                if (M.current || null == e) return;
                let n = S.current;
                if (g && null !== n) {
                    let t = (0, l.P1)(n),
                        r = N(t);
                    if (null != r) {
                        if (!0 !== T.current) return R(t, (0, l.x3)(n));
                        if (await (0, s.JJ)(e, r)) return R(t, (0, l.x3)(n));
                    }
                }
                let r = await (0, s.KG)(e, u(t, y));
                null !== r && D(r);
            }
            function a() {
                T.current = !0;
            }
        }, [c, t, g, R, m, O, D]);
    let P = r.useMemo(
            () => ({
                wrap: v,
                get from() {
                    if (!E) return;
                    let t = S.current;
                    if (null != t) {
                        var e;
                        return null !== (e = N((0, l.P1)(t))) && void 0 !== e ? e : void 0;
                    }
                    return;
                }
            }),
            [E, v]
        ),
        k = r.useCallback(async () => {
            let e = await L.getNextFocusableElement(P),
                t = null == e ? void 0 : e.getAttribute(l.ie);
            null != t ? D(t) : null == e && null != p && p();
        }, [L, P, p, D]),
        U = r.useCallback(async () => {
            let e = await L.getPreviousFocusableElement(P),
                t = null == e ? void 0 : e.getAttribute(l.ie);
            null != t ? D(t) : null == e && null != _ && _();
        }, [L, P, _, D]),
        G = r.useCallback(
            (e) => {
                if (!A.current || (!E && !M.current)) return;
                let n = b === o.hy.HORIZONTAL ? o.R8.RIGHT : o.R8.DOWN,
                    r = b === o.hy.HORIZONTAL ? o.R8.LEFT : o.R8.UP;
                switch (e.key) {
                    case n:
                        e.stopPropagation(), e.preventDefault(), k();
                        return;
                    case r:
                        e.stopPropagation(), e.preventDefault(), U();
                        return;
                    case o.R8.HOME:
                        e.stopPropagation(),
                            e.preventDefault(),
                            d().then(() => {
                                var e;
                                let n = null === (e = u(t, y)[0]) || void 0 === e ? void 0 : e.getAttribute(l.ie);
                                null != n && D(n);
                            });
                        return;
                    case o.R8.END:
                        e.stopPropagation(),
                            e.preventDefault(),
                            f().then(() => {
                                var e;
                                let n = u(t, y),
                                    r = null === (e = n[n.length - 1]) || void 0 === e ? void 0 : e.getAttribute(l.ie);
                                null != r && D(r);
                            });
                        return;
                    case o.R8.SPACE:
                    case o.R8.ENTER: {
                        if ((e.key === o.R8.SPACE && I) || e.repeat) return;
                        let t = S.current;
                        if (null != t) {
                            var i;
                            let n = N((0, l.P1)(t)),
                                r = null !== (i = null == n ? void 0 : n.ownerDocument) && void 0 !== i ? i : document,
                                a = E || n === r.activeElement;
                            null != n && a && (e.preventDefault(), e.stopPropagation(), null == n || n.click());
                        }
                    }
                }
            },
            [k, U, t, b, f, d, D, E]
        ),
        B = r.useCallback(
            (e) => {
                let n = null != e ? (0, l.jb)(t, e) : null;
                (S.current = n), (0, a.h)(t, e, g);
            },
            [t, g]
        );
    return r.useMemo(
        () => ({
            id: t,
            containerProps: {
                onKeyDown: G,
                ref: y,
                tabIndex: x && g ? -1 : 0
            },
            orientation: b,
            setFocus: B,
            async focusLastVisibleItem() {
                var e;
                let n = await (0, s.jo)(null !== (e = y.current) && void 0 !== e ? e : document.body, u(t, y));
                null !== n && D(n);
            },
            async focusFirstVisibleItem() {
                var e;
                let n = await (0, s.KG)(null !== (e = y.current) && void 0 !== e ? e : document.body, u(t, y));
                null !== n && D(n);
            },
            focusPreviousItem: U,
            focusNextItem: k,
            focusedItemId() {
                let e = S.current;
                return e ? (0, l.x3)(e) : null;
            }
        }),
        [t, G, b, x, g, B, U, k, D]
    );
}
