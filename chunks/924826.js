n.d(t, {
    ZP: function () {
        return d;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(372817),
    o = n(25441),
    s = n(585627),
    l = n(536895),
    u = n(260866);
function c(e, t) {
    var n;
    return Array.from((null !== (n = t.current) && void 0 !== n ? n : document).querySelectorAll('['.concat(u.ie, '^="').concat(e, '"]')));
}
function d(e) {
    let { id: t, defaultFocused: n, isEnabled: r, scrollToStart: d, scrollToEnd: _, onNavigatePreviousAtStart: E, onNavigateNextAtEnd: f, setFocus: h, setFocusOnList: p, preserveFocusPosition: m = !0, useVirtualFocus: I = !1, wrap: T = !1, orientation: g = l.hy.VERTICAL, disableClickOnSpace: S = !1 } = e,
        A = i.useRef(n ? (0, u.jb)(t, n) : null),
        v = i.useRef(!1),
        N = i.useRef(null),
        O = i.useRef(r);
    function R(e) {
        var t;
        return (null !== (t = N.current) && void 0 !== t ? t : document).querySelector(e);
    }
    function C(e) {
        var t;
        null === (t = R(e)) || void 0 === t || t.focus();
    }
    i.useLayoutEffect(() => {
        O.current = r;
    }, [r]);
    let y = i.useCallback(
            (e, t) => {
                O.current && (null != h ? h : C)(e, t);
            },
            [h]
        ),
        L = i.useCallback(
            (e) => {
                O.current && (null != p ? p : C)(e);
            },
            [p]
        ),
        b = i.useCallback(
            (e) => {
                if (((A.current = e), null == e)) {
                    (0, o.h)(t, null, m);
                    return;
                }
                let n = (0, u.P1)(e),
                    r = (0, u.x3)(e);
                y(n, r), (0, o.h)(t, r, m);
            },
            [t, m, y]
        ),
        D = i.useMemo(
            () =>
                (0, a.E)({
                    getFocusableElements: () => c(t, N),
                    getActiveElement() {
                        var e;
                        return null === (e = N.current) || void 0 === e ? void 0 : e.ownerDocument.activeElement;
                    },
                    scrollToStart: d,
                    scrollToEnd: _
                }),
            [t, d, _]
        ),
        [M, P] = i.useState(!1),
        U = i.useRef(M);
    i.useLayoutEffect(() => {
        U.current = M;
    }, [M]),
        i.useLayoutEffect(() => {
            let e = N.current;
            if (null != e) {
                if (!r) return;
                return (
                    e.addEventListener('focusin', n),
                    e.addEventListener('focusout', i),
                    e.addEventListener('focus', a),
                    e.addEventListener('scroll', o, { passive: !0 }),
                    () => {
                        e.removeEventListener('focusin', n), e.removeEventListener('focusout', i), e.removeEventListener('focus', a), e.removeEventListener('scroll', o);
                    }
                );
            }
            function n() {
                P(!0);
            }
            function i(e) {
                if (!e.currentTarget.contains(e.relatedTarget))
                    P(!1),
                        requestAnimationFrame(() => {
                            let e = A.current;
                            null !== e && null == R((0, u.P1)(e)) && L((0, u.P1)(t, u.kn));
                        });
            }
            async function a() {
                let e = N.current;
                if (U.current || null == e) return;
                let n = A.current;
                if (m && null !== n) {
                    let t = (0, u.P1)(n),
                        r = R(t);
                    if (null != r) {
                        if (!0 !== v.current) return y(t, (0, u.x3)(n));
                        if (await (0, s.JJ)(e, r)) return y(t, (0, u.x3)(n));
                    }
                }
                let r = await (0, s.KG)(e, c(t, N));
                null !== r && b(r);
            }
            function o() {
                v.current = !0;
            }
        }, [r, t, m, y, p, L, b]);
    let w = i.useMemo(
            () => ({
                wrap: T,
                get from() {
                    if (!I) return;
                    let t = A.current;
                    if (null != t) {
                        var e;
                        return null !== (e = R((0, u.P1)(t))) && void 0 !== e ? e : void 0;
                    }
                    return;
                }
            }),
            [I, T]
        ),
        x = i.useCallback(async () => {
            let e = await D.getNextFocusableElement(w),
                t = null == e ? void 0 : e.getAttribute(u.ie);
            null != t ? b(t) : null == e && null != f && f();
        }, [D, w, f, b]),
        G = i.useCallback(async () => {
            let e = await D.getPreviousFocusableElement(w),
                t = null == e ? void 0 : e.getAttribute(u.ie);
            null != t ? b(t) : null == e && null != E && E();
        }, [D, w, E, b]),
        k = i.useCallback(
            (e) => {
                if (!O.current || (!I && !U.current)) return;
                let n = g === l.hy.HORIZONTAL ? l.R8.RIGHT : l.R8.DOWN,
                    r = g === l.hy.HORIZONTAL ? l.R8.LEFT : l.R8.UP;
                switch (e.key) {
                    case n:
                        e.stopPropagation(), e.preventDefault(), x();
                        return;
                    case r:
                        e.stopPropagation(), e.preventDefault(), G();
                        return;
                    case l.R8.HOME:
                        e.stopPropagation(),
                            e.preventDefault(),
                            d().then(() => {
                                var e;
                                let n = null === (e = c(t, N)[0]) || void 0 === e ? void 0 : e.getAttribute(u.ie);
                                null != n && b(n);
                            });
                        return;
                    case l.R8.END:
                        e.stopPropagation(),
                            e.preventDefault(),
                            _().then(() => {
                                var e;
                                let n = c(t, N),
                                    r = null === (e = n[n.length - 1]) || void 0 === e ? void 0 : e.getAttribute(u.ie);
                                null != r && b(r);
                            });
                        return;
                    case l.R8.SPACE:
                    case l.R8.ENTER: {
                        if ((e.key === l.R8.SPACE && S) || e.repeat) return;
                        let t = A.current;
                        if (null != t) {
                            var i;
                            let n = R((0, u.P1)(t)),
                                r = null !== (i = null == n ? void 0 : n.ownerDocument) && void 0 !== i ? i : document,
                                a = I || n === r.activeElement;
                            null != n && a && (e.preventDefault(), e.stopPropagation(), null == n || n.click());
                        }
                    }
                }
            },
            [x, G, t, g, _, d, b, I]
        ),
        B = i.useCallback(
            (e) => {
                let n = null != e ? (0, u.jb)(t, e) : null;
                (A.current = n), (0, o.h)(t, e, m);
            },
            [t, m]
        );
    return i.useMemo(
        () => ({
            id: t,
            containerProps: {
                onKeyDown: k,
                ref: N,
                tabIndex: M && m ? -1 : 0
            },
            orientation: g,
            setFocus: B,
            async focusLastVisibleItem() {
                var e;
                let n = await (0, s.jo)(null !== (e = N.current) && void 0 !== e ? e : document.body, c(t, N));
                null !== n && b(n);
            },
            async focusFirstVisibleItem() {
                var e;
                let n = await (0, s.KG)(null !== (e = N.current) && void 0 !== e ? e : document.body, c(t, N));
                null !== n && b(n);
            },
            focusPreviousItem: G,
            focusNextItem: x,
            focusedItemId() {
                let e = A.current;
                return e ? (0, u.x3)(e) : null;
            }
        }),
        [t, k, g, M, m, B, G, x, b]
    );
}
