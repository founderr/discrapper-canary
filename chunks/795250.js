let r;
n.d(t, {
    Bq: function () {
        return ez;
    },
    IB: function () {
        return ev;
    },
    NE: function () {
        return eq;
    },
    RP: function () {
        return eY;
    },
    Sv: function () {
        return ej;
    },
    U4: function () {
        return eZ;
    },
    Xj: function () {
        return eB;
    },
    aV: function () {
        return eK;
    },
    tN: function () {
        return eI;
    }
});
var i = n(53786),
    a = n(519313),
    o = n(588016),
    s = n(993330),
    l = n(119380),
    u = n(230874),
    c = n(643586),
    d = n(676730),
    _ = n(113404),
    E = n(837692),
    f = n(848560),
    h = n(397865),
    p = n(652695),
    m = n(108760),
    I = n(658311),
    T = n(814878),
    g = n(166305),
    S = n(860223),
    A = n(313573),
    v = n(901670),
    N = n(96730),
    O = n(917050),
    R = n(510022),
    C = n(423793),
    y = n(517156),
    L = n(587818),
    b = n(864407),
    D = n(637290),
    M = n(854451),
    P = n(275051),
    U = n(749118),
    w = n(561161),
    x = n(674303),
    G = n(419301),
    k = n(470079),
    B = n(882932),
    F = n(182823),
    Z = n(616073),
    V = n(706682),
    H = n(612001),
    Y = n(699581),
    j = n(230012),
    W = n(297821);
function K(e) {
    return e && e.__esModule ? e.default : e;
}
let z = {
        top: 'top',
        bottom: 'top',
        left: 'left',
        right: 'left'
    },
    q = {
        top: 'bottom',
        bottom: 'top',
        left: 'right',
        right: 'left'
    },
    Q = {
        top: 'left',
        left: 'top'
    },
    X = {
        top: 'height',
        left: 'width'
    },
    $ = {
        width: 'totalWidth',
        height: 'totalHeight'
    },
    J = {},
    ee = 'undefined' != typeof document && window.visualViewport;
function et(e) {
    let t = 0,
        n = 0,
        r = 0,
        i = 0,
        a = 0,
        o = 0,
        s = {};
    if ('BODY' === e.tagName) {
        var l, u;
        let a = document.documentElement;
        (r = a.clientWidth), (i = a.clientHeight), (t = null !== (l = null == ee ? void 0 : ee.width) && void 0 !== l ? l : r), (n = null !== (u = null == ee ? void 0 : ee.height) && void 0 !== u ? u : i), (s.top = a.scrollTop || e.scrollTop), (s.left = a.scrollLeft || e.scrollLeft);
    } else ({ width: t, height: n, top: a, left: o } = ed(e)), (s.top = e.scrollTop), (s.left = e.scrollLeft), (r = t), (i = n);
    return {
        width: t,
        height: n,
        totalWidth: r,
        totalHeight: i,
        scroll: s,
        top: a,
        left: o
    };
}
function en(e) {
    return {
        top: e.scrollTop,
        left: e.scrollLeft,
        width: e.scrollWidth,
        height: e.scrollHeight
    };
}
function er(e, t, n, r, i, a) {
    let o = i.scroll[e],
        s = r[X[e]],
        l = t - a - o,
        u = t + a - o + n;
    return l < 0 ? -l : u > s ? Math.max(s - u, -l) : 0;
}
function ei(e) {
    let t = window.getComputedStyle(e);
    return {
        top: parseInt(t.marginTop, 10) || 0,
        bottom: parseInt(t.marginBottom, 10) || 0,
        left: parseInt(t.marginLeft, 10) || 0,
        right: parseInt(t.marginRight, 10) || 0
    };
}
function ea(e) {
    if (J[e]) return J[e];
    let [t, n] = e.split(' '),
        r = z[t] || 'right',
        i = Q[r];
    !z[n] && (n = 'center');
    let a = X[r],
        o = X[i];
    return (
        (J[e] = {
            placement: t,
            crossPlacement: n,
            axis: r,
            crossAxis: i,
            size: a,
            crossSize: o
        }),
        J[e]
    );
}
function eo(e, t, n, r, i, a, o, s, l, u) {
    let { placement: c, crossPlacement: d, axis: _, crossAxis: E, size: f, crossSize: h } = r,
        p = {};
    (p[E] = e[E]), 'center' === d ? (p[E] += (e[h] - n[h]) / 2) : d !== E && (p[E] += e[h] - n[h]), (p[E] += a);
    let m = e[E] - n[h] + l + u,
        I = e[E] + e[h] - l - u;
    if (((p[E] = (0, B.uZ)(p[E], m, I)), c === _)) {
        let n = s ? o[f] : t[$[f]];
        p[q[_]] = Math.floor(n - e[_] + i);
    } else p[_] = Math.floor(e[_] + e[f] + i);
    return p;
}
function es(e, t, n, r, i, a) {
    return null != e.top ? Math.max(0, t.height + t.top + t.scroll.top - (n.top + e.top) - (i.top + i.bottom + a)) : Math.max(0, r.top + n.top - (t.top + t.scroll.top) - (i.top + i.bottom + a));
}
function el(e, t, n, r, i, a) {
    let { placement: o, axis: s, size: l } = a;
    return o === s ? Math.max(0, n[s] - e[s] - e.scroll[s] + t[s] - r[s] - r[q[s]] - i) : Math.max(0, e[l] + e[s] + e.scroll[s] - t[s] - n[s] - n[l] - r[s] - r[q[s]] - i);
}
function eu(e, t, n, r, i, a, o, s, l, u, c, d, _, E, f, h) {
    let p = ea(e),
        { size: m, crossAxis: I, crossSize: T, placement: g, crossPlacement: S } = p,
        A = eo(t, s, n, p, c, d, u, _, f, h),
        v = c,
        N = el(s, u, t, i, a + c, p);
    if (o && r[m] > N) {
        let e = ea(`${q[g]} ${S}`),
            r = eo(t, s, n, e, c, d, u, _, f, h);
        el(s, u, t, i, a + c, e) > N && ((p = e), (A = r), (v = c));
    }
    let O = er(I, A[I], n[T], s, l, a);
    A[I] += O;
    let R = es(A, s, u, t, i, a);
    E && E < R && (R = E), (n.height = Math.min(n.height, R)), (O = er(I, (A = eo(t, s, n, p, v, d, u, _, f, h))[I], n[T], s, l, a)), (A[I] += O);
    let C = {},
        y = t[I] + 0.5 * t[T] - n[I],
        L = f / 2 + h,
        b = n[T] - f / 2 - h,
        D = t[I] - n[I] + f / 2,
        M = t[I] + t[T] - n[I] - f / 2,
        P = (0, B.uZ)(y, D, M);
    return (
        (C[I] = (0, B.uZ)(P, L, b)),
        {
            position: A,
            maxHeight: R,
            arrowOffsetLeft: C.left,
            arrowOffsetTop: C.top,
            placement: p.placement
        }
    );
}
function ec(e) {
    let { placement: t, targetNode: n, overlayNode: r, scrollNode: i, padding: a, shouldFlip: o, boundaryElement: s, offset: l, crossOffset: u, maxHeight: c, arrowSize: d = 0, arrowBoundaryOffset: _ = 0 } = e,
        E = r instanceof HTMLElement ? eE(r) : document.documentElement,
        f = E === document.documentElement,
        h = window.getComputedStyle(E).position,
        p = !!h && 'static' !== h,
        m = f ? ed(n) : e_(n, E);
    if (!f) {
        let { marginTop: e, marginLeft: t } = window.getComputedStyle(n);
        (m.top += parseInt(e, 10) || 0), (m.left += parseInt(t, 10) || 0);
    }
    let I = ed(r),
        T = ei(r);
    return (I.width += T.left + T.right), (I.height += T.top + T.bottom), eu(t, m, I, en(i), T, a, o, et(s), et(E), 'BODY' === s.tagName ? ed(E) : e_(E, s), l, u, p, c, d, _);
}
function ed(e) {
    let { top: t, left: n, width: r, height: i } = e.getBoundingClientRect(),
        { scrollTop: a, scrollLeft: o, clientTop: s, clientLeft: l } = document.documentElement;
    return {
        top: t + a - s,
        left: n + o - l,
        width: r,
        height: i
    };
}
function e_(e, t) {
    let n,
        r = window.getComputedStyle(e);
    if ('fixed' === r.position) {
        let { top: t, left: r, width: i, height: a } = e.getBoundingClientRect();
        n = {
            top: t,
            left: r,
            width: i,
            height: a
        };
    } else {
        n = ed(e);
        let r = ed(t),
            i = window.getComputedStyle(t);
        (r.top += (parseInt(i.borderTopWidth, 10) || 0) - t.scrollTop), (r.left += (parseInt(i.borderLeftWidth, 10) || 0) - t.scrollLeft), (n.top -= r.top), (n.left -= r.left);
    }
    return (n.top -= parseInt(r.marginTop, 10) || 0), (n.left -= parseInt(r.marginLeft, 10) || 0), n;
}
function eE(e) {
    let t = e.offsetParent;
    if ((t && t === document.body && 'static' === window.getComputedStyle(t).position && !ef(t) && (t = document.documentElement), null == t)) for (t = e.parentElement; t && !ef(t); ) t = t.parentElement;
    return t || document.documentElement;
}
function ef(e) {
    let t = window.getComputedStyle(e);
    return 'none' !== t.transform || /transform|perspective/.test(t.willChange) || 'none' !== t.filter || 'paint' === t.contain || ('backdropFilter' in t && 'none' !== t.backdropFilter) || ('WebkitBackdropFilter' in t && 'none' !== t.WebkitBackdropFilter);
}
let eh = new WeakMap();
function ep(e) {
    let { triggerRef: t, isOpen: n, onClose: r } = e;
    (0, k.useEffect)(() => {
        if (!n || null === r) return;
        let e = (e) => {
            let n = e.target;
            if (!t.current || (n instanceof Node && !n.contains(t.current))) return;
            let i = r || eh.get(t.current);
            i && i();
        };
        return (
            window.addEventListener('scroll', e, !0),
            () => {
                window.removeEventListener('scroll', e, !0);
            }
        );
    }, [n, r, t]);
}
let em = 'undefined' != typeof document && window.visualViewport;
function eI(e) {
    let { direction: t } = (0, Z.bU)(),
        { arrowSize: n = 0, targetRef: r, overlayRef: i, scrollRef: a = i, placement: o = 'bottom', containerPadding: s = 12, shouldFlip: l = !0, boundaryElement: u = 'undefined' != typeof document ? document.body : null, offset: c = 0, crossOffset: d = 0, shouldUpdatePosition: _ = !0, isOpen: E = !0, onClose: f, maxHeight: h, arrowBoundaryOffset: p = 0 } = e,
        [m, I] = (0, k.useState)({
            position: {},
            arrowOffsetLeft: void 0,
            arrowOffsetTop: void 0,
            maxHeight: void 0,
            placement: void 0
        }),
        T = [_, o, i.current, r.current, a.current, s, l, u, c, d, E, t, h, p, n],
        g = (0, k.useCallback)(() => {
            if (!1 === _ || !E || !i.current || !r.current || !a.current || !u) return;
            let e = ec({
                placement: eg(o, t),
                overlayNode: i.current,
                targetNode: r.current,
                scrollNode: a.current,
                padding: s,
                shouldFlip: l,
                boundaryElement: u,
                offset: c,
                crossOffset: d,
                maxHeight: h,
                arrowSize: n,
                arrowBoundaryOffset: p
            });
            Object.keys(e.position).forEach((t) => (i.current.style[t] = e.position[t] + 'px')), (i.current.style.maxHeight = null != e.maxHeight ? e.maxHeight + 'px' : void 0), I(e);
        }, T);
    (0, F.bt)(g, T),
        eT(g),
        (0, F.yU)({
            ref: i,
            onResize: g
        });
    let S = (0, k.useRef)(!1);
    (0, F.bt)(() => {
        let e;
        let t = () => {
            (S.current = !0),
                clearTimeout(e),
                (e = setTimeout(() => {
                    S.current = !1;
                }, 500)),
                g();
        };
        return (
            null == em || em.addEventListener('resize', t),
            null == em || em.addEventListener('scroll', t),
            () => {
                null == em || em.removeEventListener('resize', t), null == em || em.removeEventListener('scroll', t);
            }
        );
    }, [g]);
    let A = (0, k.useCallback)(() => {
        !S.current && f();
    }, [f, S]);
    return (
        ep({
            triggerRef: r,
            isOpen: E,
            onClose: f && A
        }),
        {
            overlayProps: {
                style: {
                    position: 'absolute',
                    zIndex: 100000,
                    ...m.position,
                    maxHeight: m.maxHeight
                }
            },
            placement: m.placement,
            arrowProps: {
                'aria-hidden': 'true',
                role: 'presentation',
                style: {
                    left: m.arrowOffsetLeft,
                    top: m.arrowOffsetTop
                }
            },
            updatePosition: g
        }
    );
}
function eT(e) {
    (0, F.bt)(
        () => (
            window.addEventListener('resize', e, !1),
            () => {
                window.removeEventListener('resize', e, !1);
            }
        ),
        [e]
    );
}
function eg(e, t) {
    return 'rtl' === t ? e.replace('start', 'right').replace('end', 'left') : e.replace('start', 'left').replace('end', 'right');
}
let eS = [];
function eA(e, t) {
    let { onClose: n, shouldCloseOnBlur: r, isOpen: i, isDismissable: a = !1, isKeyboardDismissDisabled: o = !1, shouldCloseOnInteractOutside: s } = e;
    (0, k.useEffect)(
        () => (
            i && eS.push(t),
            () => {
                let e = eS.indexOf(t);
                e >= 0 && eS.splice(e, 1);
            }
        ),
        [i, t]
    );
    let l = () => {
            eS[eS.length - 1] === t && n && n();
        },
        u = (e) => {
            (!s || s(e.target)) && eS[eS.length - 1] === t && (e.stopPropagation(), e.preventDefault());
        },
        c = (e) => {
            (!s || s(e.target)) && (eS[eS.length - 1] === t && (e.stopPropagation(), e.preventDefault()), l());
        },
        d = (e) => {
            'Escape' === e.key && !o && (e.stopPropagation(), e.preventDefault(), l());
        };
    (0, H.Fc)({
        ref: t,
        onInteractOutside: a && i ? c : null,
        onInteractOutsideStart: u
    });
    let { focusWithinProps: _ } = (0, H.L_)({
            isDisabled: !r,
            onBlurWithin: (e) => {
                !(!e.relatedTarget || (0, V.cW)(e.relatedTarget)) && (!s || s(e.relatedTarget)) && n();
            }
        }),
        E = (e) => {
            e.target === e.currentTarget && e.preventDefault();
        };
    return {
        overlayProps: {
            onKeyDown: d,
            ..._
        },
        underlayProps: { onPointerDown: E }
    };
}
function ev(e, t, n) {
    let r,
        { type: i } = e,
        { isOpen: a } = t;
    (0, k.useEffect)(() => {
        n && n.current && eh.set(n.current, t.close);
    });
    'menu' === i ? (r = !0) : 'listbox' === i && (r = 'listbox');
    let o = (0, F.Me)();
    return {
        triggerProps: {
            'aria-haspopup': r,
            'aria-expanded': a,
            'aria-controls': a ? o : null,
            onPress: t.toggle
        },
        overlayProps: { id: o }
    };
}
let eN = 'undefined' != typeof document && window.visualViewport,
    eO = new Set(['checkbox', 'radio', 'range', 'color', 'file', 'image', 'button', 'submit', 'reset']),
    eR = 0;
function eC(e = {}) {
    let { isDisabled: t } = e;
    (0, F.bt)(() => {
        if (!t)
            return (
                eR++,
                1 === eR && (r = (0, F.gn)() ? eL() : ey()),
                () => {
                    0 == --eR && r();
                }
            );
    }, [t]);
}
function ey() {
    return (0, F.tS)(eb(document.documentElement, 'paddingRight', `${window.innerWidth - document.documentElement.clientWidth}px`), eb(document.documentElement, 'overflow', 'hidden'));
}
function eL() {
    let e, t;
    let n = (n) => {
            ((e = (0, F.rP)(n.target, !0)) !== document.documentElement || e !== document.body) && e instanceof HTMLElement && 'auto' === window.getComputedStyle(e).overscrollBehavior && (t = eb(e, 'overscrollBehavior', 'contain'));
        },
        r = (t) => {
            if (!e || e === document.documentElement || e === document.body) {
                t.preventDefault();
                return;
            }
            e.scrollHeight === e.clientHeight && e.scrollWidth === e.clientWidth && t.preventDefault();
        },
        i = (e) => {
            let n = e.target;
            eP(n) &&
                n !== document.activeElement &&
                (e.preventDefault(),
                s(),
                (n.style.transform = 'translateY(-2000px)'),
                n.focus(),
                requestAnimationFrame(() => {
                    n.style.transform = '';
                })),
                t && t();
        },
        a = (e) => {
            let t = e.target;
            eP(t) &&
                (s(),
                (t.style.transform = 'translateY(-2000px)'),
                requestAnimationFrame(() => {
                    (t.style.transform = ''),
                        eN &&
                            (eN.height < window.innerHeight
                                ? requestAnimationFrame(() => {
                                      eM(t);
                                  })
                                : eN.addEventListener('resize', () => eM(t), { once: !0 }));
                }));
        },
        o = null,
        s = () => {
            if (o) return;
            let e = () => {
                    window.scrollTo(0, 0);
                },
                t = window.pageXOffset,
                n = window.pageYOffset;
            (o = (0, F.tS)(eD(window, 'scroll', e), eb(document.documentElement, 'paddingRight', `${window.innerWidth - document.documentElement.clientWidth}px`), eb(document.documentElement, 'overflow', 'hidden'), eb(document.body, 'marginTop', `-${n}px`), () => {
                window.scrollTo(t, n);
            })),
                window.scrollTo(0, 0);
        },
        l = (0, F.tS)(
            eD(document, 'touchstart', n, {
                passive: !1,
                capture: !0
            }),
            eD(document, 'touchmove', r, {
                passive: !1,
                capture: !0
            }),
            eD(document, 'touchend', i, {
                passive: !1,
                capture: !0
            }),
            eD(document, 'focus', a, !0)
        );
    return () => {
        null == t || t(), null == o || o(), l();
    };
}
function eb(e, t, n) {
    let r = e.style[t];
    return (
        (e.style[t] = n),
        () => {
            e.style[t] = r;
        }
    );
}
function eD(e, t, n, r) {
    return (
        e.addEventListener(t, n, r),
        () => {
            e.removeEventListener(t, n, r);
        }
    );
}
function eM(e) {
    let t = document.scrollingElement || document.documentElement;
    for (; e && e !== t; ) {
        let t = (0, F.rP)(e);
        if (t !== document.documentElement && t !== document.body && t !== e) {
            let n = t.getBoundingClientRect().top,
                r = e.getBoundingClientRect().top;
            r > n + e.clientHeight && (t.scrollTop += r - n);
        }
        e = t.parentElement;
    }
}
function eP(e) {
    return (e instanceof HTMLInputElement && !eO.has(e.type)) || e instanceof HTMLTextAreaElement || (e instanceof HTMLElement && e.isContentEditable);
}
let eU = k.createContext(null);
function ew(e) {
    let { children: t } = e,
        n = (0, k.useContext)(eU),
        [r, i] = (0, k.useState)(0),
        a = (0, k.useMemo)(
            () => ({
                parent: n,
                modalCount: r,
                addModal() {
                    i((e) => e + 1), n && n.addModal();
                },
                removeModal() {
                    i((e) => e - 1), n && n.removeModal();
                }
            }),
            [n, r]
        );
    return k.createElement(eU.Provider, { value: a }, t);
}
function ex() {
    let e = (0, k.useContext)(eU);
    return { modalProviderProps: { 'aria-hidden': (!!e && e.modalCount > 0) || null } };
}
function eG(e) {
    let { modalProviderProps: t } = ex();
    return k.createElement('div', {
        'data-overlay-container': !0,
        ...e,
        ...t
    });
}
function ek(e) {
    return k.createElement(ew, null, k.createElement(eG, e));
}
function eB(e) {
    let t = (0, j.Av)(),
        { portalContainer: n = t ? null : document.body, ...r } = e;
    if (
        (k.useEffect(() => {
            if (null == n ? void 0 : n.closest('[data-overlay-container]')) throw Error('An OverlayContainer must not be inside another container. Please change the portalContainer prop.');
        }, [n]),
        !n)
    )
        return null;
    let i = k.createElement(ek, r);
    return Y.createPortal(i, n);
}
var eF = {};
function eZ(e) {
    let { onDismiss: t, ...n } = e,
        r = (0, Z.qb)(K(eF), '@react-aria/overlays'),
        i = (0, F.bE)(n, r.format('dismiss')),
        a = () => {
            t && t();
        };
    return k.createElement(
        W.T,
        null,
        k.createElement('button', {
            ...i,
            tabIndex: -1,
            onClick: a,
            style: {
                width: 1,
                height: 1
            }
        })
    );
}
eF = {
    'ar-AE': i.Z,
    'bg-BG': a.Z,
    'cs-CZ': o.Z,
    'da-DK': s.Z,
    'de-DE': l.Z,
    'el-GR': u.Z,
    'en-US': c.Z,
    'es-ES': d.Z,
    'et-EE': _.Z,
    'fi-FI': E.Z,
    'fr-FR': f.Z,
    'he-IL': h.Z,
    'hr-HR': p.Z,
    'hu-HU': m.Z,
    'it-IT': I.Z,
    'ja-JP': T.Z,
    'ko-KR': g.Z,
    'lt-LT': S.Z,
    'lv-LV': A.Z,
    'nb-NO': v.Z,
    'nl-NL': N.Z,
    'pl-PL': O.Z,
    'pt-BR': R.Z,
    'pt-PT': C.Z,
    'ro-RO': y.Z,
    'ru-RU': L.Z,
    'sk-SK': b.Z,
    'sl-SI': D.Z,
    'sr-SP': M.Z,
    'sv-SE': P.Z,
    'tr-TR': U.Z,
    'uk-UA': w.Z,
    'zh-CN': x.Z,
    'zh-TW': G.Z
};
let eV = new WeakMap(),
    eH = [];
function eY(e, t = document.body) {
    let n = new Set(e),
        r = new Set(),
        i = (e) => {
            for (let t of e.querySelectorAll('[data-live-announcer], [data-react-aria-top-layer]')) n.add(t);
            let t = (e) => {
                    if (n.has(e) || (r.has(e.parentElement) && 'row' !== e.parentElement.getAttribute('role'))) return NodeFilter.FILTER_REJECT;
                    for (let t of n) if (e.contains(t)) return NodeFilter.FILTER_SKIP;
                    return NodeFilter.FILTER_ACCEPT;
                },
                i = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: t }),
                o = t(e);
            if ((o === NodeFilter.FILTER_ACCEPT && a(e), o !== NodeFilter.FILTER_REJECT)) {
                let e = i.nextNode();
                for (; null != e; ) a(e), (e = i.nextNode());
            }
        },
        a = (e) => {
            var t;
            let n = null !== (t = eV.get(e)) && void 0 !== t ? t : 0;
            ('true' !== e.getAttribute('aria-hidden') || 0 !== n) && (0 === n && e.setAttribute('aria-hidden', 'true'), r.add(e), eV.set(e, n + 1));
        };
    eH.length && eH[eH.length - 1].disconnect(), i(t);
    let o = new MutationObserver((e) => {
        for (let t of e)
            if ('childList' === t.type && 0 !== t.addedNodes.length && ![...n, ...r].some((e) => e.contains(t.target))) {
                for (let e of t.removedNodes) e instanceof Element && (n.delete(e), r.delete(e));
                for (let e of t.addedNodes) (e instanceof HTMLElement || e instanceof SVGElement) && ('true' === e.dataset.liveAnnouncer || 'true' === e.dataset.reactAriaTopLayer) ? n.add(e) : e instanceof Element && i(e);
            }
    });
    o.observe(t, {
        childList: !0,
        subtree: !0
    });
    let s = {
        observe() {
            o.observe(t, {
                childList: !0,
                subtree: !0
            });
        },
        disconnect() {
            o.disconnect();
        }
    };
    return (
        eH.push(s),
        () => {
            for (let e of (o.disconnect(), r)) {
                let t = eV.get(e);
                1 === t ? (e.removeAttribute('aria-hidden'), eV.delete(e)) : eV.set(e, t - 1);
            }
            s === eH[eH.length - 1] ? (eH.pop(), eH.length && eH[eH.length - 1].observe()) : eH.splice(eH.indexOf(s), 1);
        }
    );
}
function ej(e, t) {
    let { triggerRef: n, popoverRef: r, isNonModal: i, isKeyboardDismissDisabled: a, shouldCloseOnInteractOutside: o, ...s } = e,
        { overlayProps: l, underlayProps: u } = eA(
            {
                isOpen: t.isOpen,
                onClose: t.close,
                shouldCloseOnBlur: !0,
                isDismissable: !i,
                isKeyboardDismissDisabled: a,
                shouldCloseOnInteractOutside: o
            },
            r
        ),
        {
            overlayProps: c,
            arrowProps: d,
            placement: _
        } = eI({
            ...s,
            targetRef: n,
            overlayRef: r,
            isOpen: t.isOpen,
            onClose: i ? t.close : null
        });
    return (
        eC({ isDisabled: i || !t.isOpen }),
        (0, F.bt)(() => {
            if (t.isOpen && !i && r.current) return eY([r.current]);
        }, [i, t.isOpen, r]),
        {
            popoverProps: (0, F.dG)(l, c),
            arrowProps: d,
            underlayProps: u,
            placement: _
        }
    );
}
let eW = k.createContext(null);
function eK(e) {
    let t = (0, j.Av)(),
        { portalContainer: n = t ? null : document.body, isExiting: r } = e,
        [i, a] = (0, k.useState)(!1),
        o = (0, k.useMemo)(
            () => ({
                contain: i,
                setContain: a
            }),
            [i, a]
        );
    if (!n) return null;
    let s = e.children;
    return (
        !e.disableFocusManagement &&
            (s = k.createElement(
                V.MT,
                {
                    restoreFocus: !0,
                    contain: i && !r
                },
                s
            )),
        (s = k.createElement(eW.Provider, { value: o }, k.createElement(H.mk, null, s))),
        Y.createPortal(s, n)
    );
}
function ez() {
    let e = (0, k.useContext)(eW),
        t = null == e ? void 0 : e.setContain;
    (0, F.bt)(() => {
        null == t || t(!0);
    }, [t]);
}
function eq(e, t, n) {
    let { overlayProps: r, underlayProps: i } = eA(
        {
            ...e,
            isOpen: t.isOpen,
            onClose: t.close
        },
        n
    );
    return (
        eC({ isDisabled: !t.isOpen }),
        ez(),
        (0, k.useEffect)(() => {
            if (t.isOpen) return eY([n.current]);
        }, [t.isOpen, n]),
        {
            modalProps: (0, F.dG)(r),
            underlayProps: i
        }
    );
}
