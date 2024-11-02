n.d(t, {
    KT: function () {
        return C;
    },
    ZP: function () {
        return h;
    },
    nX: function () {
        return p;
    }
}),
    n(47120);
var a = n(200651),
    i = n(192379),
    r = n(25441),
    l = n(536895),
    s = n(260866);
let o = 'data-grid-item-id',
    c = 'data-grid-section',
    d = 'data-grid-prev-section-boundary',
    u = new Set([l.R8.UP, l.R8.DOWN, l.R8.LEFT, l.R8.RIGHT]);
function m(e) {
    let { section: t, column: n, row: a } = e,
        i = '['.concat(c, '="').concat(t, '"]'),
        r = '['.concat('aria-colindex', '="').concat(n, '"]'),
        l = '['.concat('aria-rowindex', '="').concat(a, '"]');
    return ''.concat(i).concat(r).concat(l);
}
function h(e) {
    let { id: t, isEnabled: n, setFocus: a } = e,
        c = i.useRef(null),
        h = i.useRef(!1),
        g = i.useRef(null),
        x = i.useRef(n);
    i.useLayoutEffect(() => {
        x.current = n;
    }, [n]);
    let f = i.useCallback((e) => {
            var t;
            return (null !== (t = g.current) && void 0 !== t ? t : document).querySelector(e);
        }, []),
        p = i.useCallback(
            (e, t) => {
                x.current && a(e, t);
            },
            [a]
        ),
        C = i.useCallback((e) => {
            if (x.current) {
                var t;
                null === (t = document.querySelector(e)) || void 0 === t || t.focus();
            }
        }, []),
        v = i.useCallback(
            (e) => {
                c.current = e;
                let n = (0, s.P1)(e, o),
                    a = (0, s.x3)(e);
                p(n, a), (0, r.h)(t, a, !0);
            },
            [t, p]
        ),
        [b, j] = i.useState(!1),
        _ = i.useRef(b);
    i.useLayoutEffect(() => {
        _.current = b;
    }, [b]),
        i.useLayoutEffect(() => {
            let e = g.current;
            if (null != e)
                return (
                    e.addEventListener('focusin', n),
                    e.addEventListener('focusout', a),
                    e.addEventListener('focus', i),
                    e.addEventListener('scroll', r, { passive: !0 }),
                    () => {
                        e.removeEventListener('focusin', n), e.removeEventListener('focusout', a), e.removeEventListener('focus', i), e.removeEventListener('scroll', r);
                    }
                );
            function n() {
                j(!0);
            }
            function a(e) {
                if (!e.currentTarget.contains(e.relatedTarget))
                    j(!1),
                        requestAnimationFrame(() => {
                            let e = c.current;
                            null !== e && null == f((0, s.P1)(e, o)) && C((0, s.P1)(t, 'data-grid-id'));
                        });
            }
            function i() {
                let e = g.current;
                if (_.current || null == e) return;
            }
            function r() {
                h.current = !0;
            }
        }, [t, p, C, v, f]);
    let I = i.useCallback(
            (e) => {
                var t, n;
                if (!x.current) return;
                let a = c.current,
                    i = g.current;
                if (null == a) return;
                let r = (0, s.P1)(a, o),
                    h = null == i ? void 0 : i.querySelector(r);
                if (null == h) return;
                let p = parseInt(null !== (t = h.getAttribute('data-grid-section')) && void 0 !== t ? t : ''),
                    C = parseInt(h.getAttribute('aria-rowindex')),
                    b = parseInt(h.getAttribute('aria-colindex'));
                switch ((u.has(e.key) && (e.stopPropagation(), e.preventDefault()), e.key)) {
                    case l.R8.RIGHT: {
                        let e = f(
                            m({
                                section: p,
                                row: C,
                                column: b + 1
                            })
                        );
                        if (null != e) {
                            let t = e.getAttribute(o);
                            null != t && v(t);
                        }
                        return;
                    }
                    case l.R8.LEFT: {
                        let e = f(
                            m({
                                section: p,
                                row: C,
                                column: b - 1
                            })
                        );
                        if (null != e) {
                            let t = e.getAttribute(o);
                            null != t && v(t);
                        }
                        return;
                    }
                    case l.R8.DOWN: {
                        let e = f(
                            m({
                                section: p,
                                row: C + 1,
                                column: b
                            })
                        );
                        if (
                            (null == e &&
                                (e = f(
                                    m({
                                        section: p + 1,
                                        row: 0,
                                        column: b
                                    })
                                )),
                            null != e)
                        ) {
                            let t = e.getAttribute(o);
                            null != t && v(t);
                        }
                        return;
                    }
                    case l.R8.UP: {
                        let e;
                        if (0 === C) {
                            let t = parseInt(h.getAttribute(d));
                            null ==
                                (e = f(
                                    m({
                                        section: p - 1,
                                        row: t,
                                        column: b
                                    })
                                )) &&
                                (e = f(
                                    m({
                                        section: p - 1,
                                        row: t - 1,
                                        column: b
                                    })
                                ));
                        } else
                            e = f(
                                m({
                                    section: p,
                                    row: C - 1,
                                    column: b
                                })
                            );
                        if (null != e) {
                            let t = e.getAttribute(o);
                            null != t && v(t);
                        }
                        return;
                    }
                    case l.R8.SPACE:
                    case l.R8.ENTER: {
                        if (e.repeat) return;
                        let t = c.current;
                        if (null != t) {
                            let a = f((0, s.P1)(t, o)),
                                i = null !== (n = null == a ? void 0 : a.ownerDocument) && void 0 !== n ? n : document,
                                r = a === i.activeElement;
                            null != a && r && (e.preventDefault(), e.stopPropagation(), null == a || a.click());
                        }
                    }
                }
            },
            [f, v]
        ),
        T = i.useCallback(
            (e) => {
                let n = null != e ? (0, s.jb)(t, e) : null;
                c.current = n;
            },
            [t]
        );
    return i.useMemo(
        () => ({
            id: t,
            containerProps: {
                onKeyDown: I,
                ref: g
            },
            setFocus: T
        }),
        [t, I, T]
    );
}
let g = {
        id: 'NO_LIST',
        onKeyDown() {},
        ref: i.createRef()
    },
    x = i.createContext({
        id: 'NO_LIST',
        setFocus() {}
    }),
    f = i.createContext(g);
function p(e) {
    let { id: t, section: n, row: a, column: l, boundaries: u } = e,
        [m, h] = i.useState(0 === a && 0 === l ? 0 : -1),
        { id: g, setFocus: f } = i.useContext(x),
        p = i.useCallback(() => f(t), [t, f]);
    return (
        i.useLayoutEffect(
            () =>
                (0, r.N)(g, (e) => {
                    h(e === t ? 0 : -1);
                }),
            [t, g]
        ),
        {
            [o]: (0, s.jb)(g, t),
            [c]: n,
            [d]: u[n],
            role: 'gridcell',
            'aria-rowindex': a,
            'aria-colindex': l,
            tabIndex: m,
            onFocus: p
        }
    );
}
function C(e) {
    let { children: t, navigator: n } = e,
        {
            id: r,
            setFocus: l,
            containerProps: { onKeyDown: s, ref: o }
        } = n,
        c = i.useMemo(
            () => ({
                id: r,
                setFocus: l
            }),
            [r, l]
        ),
        d = i.useMemo(
            () => ({
                onKeyDown: s,
                ref: o,
                id: r
            }),
            [s, o, r]
        );
    return (0, a.jsx)(f.Provider, {
        value: d,
        children: (0, a.jsx)(x.Provider, {
            value: c,
            children: t
        })
    });
}
