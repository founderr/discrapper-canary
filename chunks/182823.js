n.d(t, {
    Ao: function () {
        return v;
    },
    B3: function () {
        return ee;
    },
    Dt: function () {
        return k;
    },
    Gt: function () {
        return eh;
    },
    IN: function () {
        return M;
    },
    Me: function () {
        return d;
    },
    PK: function () {
        return ed;
    },
    Pf: function () {
        return x;
    },
    QB: function () {
        return Q;
    },
    V5: function () {
        return D;
    },
    Zj: function () {
        return ep;
    },
    a9: function () {
        return eo;
    },
    ad: function () {
        return w;
    },
    b0: function () {
        return V;
    },
    bE: function () {
        return J;
    },
    bt: function () {
        return o;
    },
    cr: function () {
        return em;
    },
    dG: function () {
        return m;
    },
    gn: function () {
        return U;
    },
    iW: function () {
        return s;
    },
    ib: function () {
        return W;
    },
    kR: function () {
        return p;
    },
    lE: function () {
        return ei;
    },
    mp: function () {
        return E;
    },
    nG: function () {
        return H;
    },
    r3: function () {
        return h;
    },
    rP: function () {
        return ea;
    },
    rf: function () {
        return et;
    },
    tS: function () {
        return f;
    },
    tv: function () {
        return Z;
    },
    vE: function () {
        return eI;
    },
    xi: function () {
        return $;
    },
    y$: function () {
        return eT;
    },
    yU: function () {
        return er;
    },
    zL: function () {
        return A;
    },
    zT: function () {
        return eE;
    },
    zX: function () {
        return e_;
    }
});
var r = n(470079),
    i = n(230012),
    a = n(867330);
let o = 'undefined' != typeof document ? r.useLayoutEffect : () => {};
function s(e) {
    let t = (0, r.useRef)(null);
    return (
        o(() => {
            t.current = e;
        }, [e]),
        (0, r.useCallback)((...e) => (0, t.current)(...e), [])
    );
}
function l(e) {
    let [t, n] = (0, r.useState)(e),
        i = (0, r.useRef)(null),
        a = s(() => {
            let e = i.current.next();
            if (e.done) {
                i.current = null;
                return;
            }
            t === e.value ? a() : n(e.value);
        });
    o(() => {
        i.current && a();
    });
    let l = s((e) => {
        (i.current = e(t)), a();
    });
    return [t, l];
}
let u = !!('undefined' != typeof window && window.document && window.document.createElement),
    c = new Map();
function d(e) {
    let [t, n] = (0, r.useState)(e),
        a = (0, r.useRef)(null),
        s = (0, i.gP)(t),
        l = (0, r.useCallback)((e) => {
            a.current = e;
        }, []);
    return (
        u && c.set(s, l),
        o(() => {
            let e = s;
            return () => {
                c.delete(e);
            };
        }, [s]),
        (0, r.useEffect)(() => {
            let e = a.current;
            e && ((a.current = null), n(e));
        }),
        s
    );
}
function _(e, t) {
    if (e === t) return e;
    let n = c.get(e);
    if (n) return n(t), t;
    let r = c.get(t);
    return r ? (r(e), e) : t;
}
function E(e = []) {
    let t = d(),
        [n, i] = l(t),
        a = (0, r.useCallback)(() => {
            i(function* () {
                yield t, yield document.getElementById(t) ? t : void 0;
            });
        }, [t, i]);
    return o(a, [t, a, ...e]), n;
}
function f(...e) {
    return (...t) => {
        for (let n of e) 'function' == typeof n && n(...t);
    };
}
let h = (e) => {
        var t;
        return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document;
    },
    p = (e) => (e && 'window' in e && e.window === e ? e : h(e).defaultView || window);
function m(...e) {
    let t = { ...e[0] };
    for (let n = 1; n < e.length; n++) {
        let r = e[n];
        for (let e in r) {
            let n = t[e],
                i = r[e];
            'function' == typeof n && 'function' == typeof i && 'o' === e[0] && 'n' === e[1] && e.charCodeAt(2) >= 65 && 90 >= e.charCodeAt(2) ? (t[e] = f(n, i)) : ('className' === e || 'UNSAFE_className' === e) && 'string' == typeof n && 'string' == typeof i ? (t[e] = (0, a.Z)(n, i)) : 'id' === e && n && i ? (t.id = _(n, i)) : (t[e] = void 0 !== i ? i : n);
        }
    }
    return t;
}
let I = new Set(['id']),
    T = new Set(['aria-label', 'aria-labelledby', 'aria-describedby', 'aria-details']),
    g = new Set(['href', 'target', 'rel', 'download', 'ping', 'referrerPolicy']),
    S = /^(data-.*)$/;
function A(e, t = {}) {
    let { labelable: n, isLink: r, propNames: i } = t,
        a = {};
    for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (I.has(t) || (n && T.has(t)) || (r && g.has(t)) || (null == i ? void 0 : i.has(t)) || S.test(t)) && (a[t] = e[t]);
    return a;
}
function v(e) {
    if (O()) e.focus({ preventScroll: !0 });
    else {
        let t = R(e);
        e.focus(), C(t);
    }
}
let N = null;
function O() {
    if (null == N) {
        N = !1;
        try {
            document.createElement('div').focus({
                get preventScroll() {
                    return (N = !0), !0;
                }
            });
        } catch (e) {}
    }
    return N;
}
function R(e) {
    for (var t = e.parentNode, n = [], r = document.scrollingElement || document.documentElement; t instanceof HTMLElement && t !== r; )
        (t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) &&
            n.push({
                element: t,
                scrollTop: t.scrollTop,
                scrollLeft: t.scrollLeft
            }),
            (t = t.parentNode);
    return (
        r instanceof HTMLElement &&
            n.push({
                element: r,
                scrollTop: r.scrollTop,
                scrollLeft: r.scrollLeft
            }),
        n
    );
}
function C(e) {
    for (let { element: t, scrollTop: n, scrollLeft: r } of e) (t.scrollTop = n), (t.scrollLeft = r);
}
function y(e, t, n = 'horizontal') {
    let r = e.getBoundingClientRect();
    return t ? ('horizontal' === n ? r.right : r.bottom) : 'horizontal' === n ? r.left : r.top;
}
function L(e) {
    var t;
    return 'undefined' != typeof window && null != window.navigator && ((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands.some((t) => e.test(t.brand))) || e.test(window.navigator.userAgent));
}
function b(e) {
    var t;
    return 'undefined' != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform);
}
function D() {
    return b(/^Mac/i);
}
function M() {
    return b(/^iPhone/i);
}
function P() {
    return b(/^iPad/i) || (D() && navigator.maxTouchPoints > 1);
}
function U() {
    return M() || P();
}
function w() {
    return D() || U();
}
function x() {
    return L(/AppleWebKit/i) && !G();
}
function G() {
    return L(/Chrome/i);
}
function k() {
    return L(/Android/i);
}
function B() {
    return L(/Firefox/i);
}
let F = (0, r.createContext)({
    isNative: !0,
    open: j
});
function Z() {
    return (0, r.useContext)(F);
}
function V(e, t) {
    let n = e.getAttribute('target');
    return (!n || '_self' === n) && e.origin === location.origin && !e.hasAttribute('download') && !t.metaKey && !t.ctrlKey && !t.altKey && !t.shiftKey;
}
function H(e, t, n = !0) {
    var r, i;
    let { metaKey: a, ctrlKey: o, altKey: s, shiftKey: l } = t;
    B() && (null === (i = window.event) || void 0 === i ? void 0 : null === (r = i.type) || void 0 === r ? void 0 : r.startsWith('key')) && '_blank' === e.target && (D() ? (a = !0) : (o = !0));
    let u =
        x() && D() && !P()
            ? new KeyboardEvent('keydown', {
                  keyIdentifier: 'Enter',
                  metaKey: a,
                  ctrlKey: o,
                  altKey: s,
                  shiftKey: l
              })
            : new MouseEvent('click', {
                  metaKey: a,
                  ctrlKey: o,
                  altKey: s,
                  shiftKey: l,
                  bubbles: !0,
                  cancelable: !0
              });
    (H.isOpening = n), v(e), e.dispatchEvent(u), (H.isOpening = !1);
}
function Y(e, t) {
    if (e instanceof HTMLAnchorElement) t(e);
    else if (e.hasAttribute('data-href')) {
        let n = document.createElement('a');
        (n.href = e.getAttribute('data-href')), e.hasAttribute('data-target') && (n.target = e.getAttribute('data-target')), e.hasAttribute('data-rel') && (n.rel = e.getAttribute('data-rel')), e.hasAttribute('data-download') && (n.download = e.getAttribute('data-download')), e.hasAttribute('data-ping') && (n.ping = e.getAttribute('data-ping')), e.hasAttribute('data-referrer-policy') && (n.referrerPolicy = e.getAttribute('data-referrer-policy')), e.appendChild(n), t(n), e.removeChild(n);
    }
}
function j(e, t) {
    Y(e, (e) => H(e, t));
}
function W(e) {
    return {
        'data-href': e.href,
        'data-target': e.target,
        'data-rel': e.rel,
        'data-download': e.download,
        'data-ping': e.ping,
        'data-referrer-policy': e.referrerPolicy
    };
}
H.isOpening = !1;
let K = new Map(),
    z = new Set();
function q() {
    if ('undefined' == typeof window) return;
    let e = (e) => {
            let n = K.get(e.target);
            !n && ((n = new Set()), K.set(e.target, n), e.target.addEventListener('transitioncancel', t)), n.add(e.propertyName);
        },
        t = (e) => {
            let n = K.get(e.target);
            if (n && (n.delete(e.propertyName), 0 === n.size && (e.target.removeEventListener('transitioncancel', t), K.delete(e.target)), 0 === K.size)) {
                for (let e of z) e();
                z.clear();
            }
        };
    document.body.addEventListener('transitionrun', e), document.body.addEventListener('transitionend', t);
}
function Q(e) {
    requestAnimationFrame(() => {
        0 === K.size ? e() : z.add(e);
    });
}
'undefined' != typeof document && ('loading' !== document.readyState ? q() : document.addEventListener('DOMContentLoaded', q));
let X = null;
function $() {
    let e = (0, r.useRef)(new Map()),
        t = (0, r.useCallback)((t, n, r, i) => {
            let a = (null == i ? void 0 : i.once)
                ? (...t) => {
                      e.current.delete(r), r(...t);
                  }
                : r;
            e.current.set(r, {
                type: n,
                eventTarget: t,
                fn: a,
                options: i
            }),
                t.addEventListener(n, r, i);
        }, []),
        n = (0, r.useCallback)((t, n, r, i) => {
            var a;
            let o = (null === (a = e.current.get(r)) || void 0 === a ? void 0 : a.fn) || r;
            t.removeEventListener(n, o, i), e.current.delete(r);
        }, []),
        i = (0, r.useCallback)(() => {
            e.current.forEach((e, t) => {
                n(e.eventTarget, e.type, t, e.options);
            });
        }, [n]);
    return (
        (0, r.useEffect)(() => i, [i]),
        {
            addGlobalListener: t,
            removeGlobalListener: n,
            removeAllGlobalListeners: i
        }
    );
}
function J(e, t) {
    let { id: n, 'aria-label': r, 'aria-labelledby': i } = e;
    return (
        (n = d(n)),
        i && r ? (i = [...new Set([n, ...i.trim().split(/\s+/)])].join(' ')) : i && (i = i.trim().split(/\s+/).join(' ')),
        !r && !i && t && (r = t),
        {
            id: n,
            'aria-label': r,
            'aria-labelledby': i
        }
    );
}
function ee(e) {
    let t = (0, r.useRef)();
    return (0, r.useMemo)(
        () => ({
            get current() {
                return t.current;
            },
            set current(value) {
                (t.current = value), 'function' == typeof e ? e(value) : e && (e.current = value);
            }
        }),
        [e]
    );
}
function et(e, t) {
    let n = (0, r.useRef)(!0),
        i = (0, r.useRef)(null);
    (0, r.useEffect)(
        () => (
            (n.current = !0),
            () => {
                n.current = !1;
            }
        ),
        []
    ),
        (0, r.useEffect)(() => {
            n.current ? (n.current = !1) : (!i.current || t.some((e, t) => !Object.is(e, i[t]))) && e(), (i.current = t);
        }, t);
}
function en() {
    return void 0 !== window.ResizeObserver;
}
function er(e) {
    let { ref: t, onResize: n } = e;
    (0, r.useEffect)(() => {
        let e = null == t ? void 0 : t.current;
        if (e) {
            if (!en())
                return (
                    window.addEventListener('resize', n, !1),
                    () => {
                        window.removeEventListener('resize', n, !1);
                    }
                );
            else {
                let t = new window.ResizeObserver((e) => {
                    e.length && n();
                });
                return (
                    t.observe(e),
                    () => {
                        e && t.unobserve(e);
                    }
                );
            }
        }
    }, [n, t]);
}
function ei(e, t) {
    o(() => {
        if (e && e.ref && t)
            return (
                (e.ref.current = t.current),
                () => {
                    e.ref.current = null;
                }
            );
    });
}
function ea(e, t) {
    for (eo(e, t) && (e = e.parentElement); e && !eo(e, t); ) e = e.parentElement;
    return e || document.scrollingElement || document.documentElement;
}
function eo(e, t) {
    let n = window.getComputedStyle(e),
        r = /(auto|scroll)/.test(n.overflow + n.overflowX + n.overflowY);
    return r && t && (r = e.scrollHeight !== e.clientHeight || e.scrollWidth !== e.clientWidth), r;
}
let es = 'undefined' != typeof document && window.visualViewport;
function el() {
    return {
        width: (null == es ? void 0 : es.width) || window.innerWidth,
        height: (null == es ? void 0 : es.height) || window.innerHeight
    };
}
let eu = 0,
    ec = new Map();
function ed(e) {
    let [t, n] = (0, r.useState)(void 0);
    return (
        o(() => {
            if (!e) return;
            let t = ec.get(e);
            if (t) n(t.element.id);
            else {
                let r = `react-aria-description-${eu++}`;
                n(r);
                let i = document.createElement('div');
                (i.id = r),
                    (i.style.display = 'none'),
                    (i.textContent = e),
                    document.body.appendChild(i),
                    (t = {
                        refCount: 0,
                        element: i
                    }),
                    ec.set(e, t);
            }
            return (
                t.refCount++,
                () => {
                    0 == --t.refCount && (t.element.remove(), ec.delete(e));
                }
            );
        }, [e]),
        { 'aria-describedby': e ? t : void 0 }
    );
}
function e_(e, t, n, i) {
    let a = s(n),
        o = null == n;
    (0, r.useEffect)(() => {
        if (o) return;
        let n = e.current;
        return (
            n.addEventListener(t, a, i),
            () => {
                n.removeEventListener(t, a, i);
            }
        );
    }, [e, t, i, o, a]);
}
function eE(e, t) {
    let n = ef(e, t, 'left'),
        r = ef(e, t, 'top'),
        i = t.offsetWidth,
        a = t.offsetHeight,
        o = e.scrollLeft,
        s = e.scrollTop,
        { borderTopWidth: l, borderLeftWidth: u } = getComputedStyle(e),
        c = e.scrollLeft + parseInt(u, 10),
        d = e.scrollTop + parseInt(l, 10),
        _ = c + e.clientWidth,
        E = d + e.clientHeight;
    n <= o ? (o = n - parseInt(u, 10)) : n + i > _ && (o += n + i - _), r <= d ? (s = r - parseInt(l, 10)) : r + a > E && (s += r + a - E), (e.scrollLeft = o), (e.scrollTop = s);
}
function ef(e, t, n) {
    let r = 'left' === n ? 'offsetLeft' : 'offsetTop',
        i = 0;
    for (; t.offsetParent && ((i += t[r]), t.offsetParent !== e); ) {
        if (t.offsetParent.contains(e)) {
            i -= e[r];
            break;
        }
        t = t.offsetParent;
    }
    return i;
}
function eh(e, t) {
    if (document.contains(e)) {
        let o = document.scrollingElement || document.documentElement;
        if ('hidden' === window.getComputedStyle(o).overflow) {
            let t = ea(e);
            for (; e && t && e !== o && t !== o; ) eE(t, e), (t = ea((e = t)));
        } else {
            var n, r, i, a;
            let { left: o, top: s } = e.getBoundingClientRect();
            null == e || null === (n = e.scrollIntoView) || void 0 === n || n.call(e, { block: 'nearest' });
            let { left: l, top: u } = e.getBoundingClientRect();
            (Math.abs(o - l) > 1 || Math.abs(s - u) > 1) &&
                (null == t ||
                    null === (i = t.containingElement) ||
                    void 0 === i ||
                    null === (r = i.scrollIntoView) ||
                    void 0 === r ||
                    r.call(i, {
                        block: 'center',
                        inline: 'center'
                    }),
                null === (a = e.scrollIntoView) || void 0 === a || a.call(e, { block: 'nearest' }));
        }
    }
}
function ep(e) {
    return (0 === e.mozInputSource && !!e.isTrusted) || (k() && e.pointerType ? 'click' === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType);
}
function em(e) {
    return (!k() && 0 === e.width && 0 === e.height) || (1 === e.width && 1 === e.height && 0 === e.pressure && 0 === e.detail && 'mouse' === e.pointerType);
}
function eI(e, t) {
    let n = (0, r.useRef)(null);
    return e && n.current && t(e, n.current) && (e = n.current), (n.current = e), e;
}
function eT(e, t, n) {
    let i = (0, r.useRef)(t),
        a = s(() => {
            n && n(i.current);
        });
    (0, r.useEffect)(() => {
        var t;
        let n = null == e ? void 0 : null === (t = e.current) || void 0 === t ? void 0 : t.form;
        return (
            null == n || n.addEventListener('reset', a),
            () => {
                null == n || n.removeEventListener('reset', a);
            }
        );
    }, [e, a]);
}
