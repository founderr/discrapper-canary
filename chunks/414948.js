n.d(t, {
    B3: function () {
        return C;
    },
    Pf: function () {
        return H;
    },
    bt: function () {
        return a;
    },
    dG: function () {
        return _;
    },
    gn: function () {
        return V;
    },
    lq: function () {
        return E;
    },
    nP: function () {
        return P;
    },
    yU: function () {
        return L;
    },
    zL: function () {
        return m;
    }
});
var r = n(470079),
    i = n(819841);
let a = 'undefined' != typeof document ? r.useLayoutEffect : () => {};
function o(e) {
    let t = $12uGp$useRef(null);
    return (
        a(() => {
            t.current = e;
        }, [e]),
        $12uGp$useCallback((...e) => (0, t.current)(...e), [])
    );
}
function s(e) {
    let [t, n] = $12uGp$useState(e),
        r = $12uGp$useRef(null),
        i = o(() => {
            let e = r.current.next();
            if (e.done) {
                r.current = null;
                return;
            }
            t === e.value ? i() : n(e.value);
        });
    a(() => {
        r.current && i();
    });
    let s = o((e) => {
        (r.current = e(t)), i();
    });
    return [t, s];
}
let l = new Map();
function u(e) {
    let [t, n] = $12uGp$useState(e),
        r = $12uGp$useRef(null),
        i = $12uGp$useSSRSafeId(t),
        o = $12uGp$useCallback((e) => {
            r.current = e;
        }, []);
    return (
        l.set(i, o),
        a(() => {
            let e = i;
            return () => {
                l.delete(e);
            };
        }, [i]),
        $12uGp$useEffect(() => {
            let e = r.current;
            e && ((r.current = null), n(e));
        }),
        i
    );
}
function c(e, t) {
    if (e === t) return e;
    let n = l.get(e);
    if (n) return n(t), t;
    let r = l.get(t);
    return r ? (r(e), e) : t;
}
function d(...e) {
    return (...t) => {
        for (let n of e) 'function' == typeof n && n(...t);
    };
}
function _(...e) {
    let t = { ...e[0] };
    for (let n = 1; n < e.length; n++) {
        let r = e[n];
        for (let e in r) {
            let n = t[e],
                a = r[e];
            'function' == typeof n && 'function' == typeof a && 'o' === e[0] && 'n' === e[1] && e.charCodeAt(2) >= 65 && 90 >= e.charCodeAt(2) ? (t[e] = d(n, a)) : ('className' === e || 'UNSAFE_className' === e) && 'string' == typeof n && 'string' == typeof a ? (t[e] = (0, i.Z)(n, a)) : 'id' === e && n && a ? (t.id = c(n, a)) : (t[e] = void 0 !== a ? a : n);
        }
    }
    return t;
}
function E(...e) {
    return 1 === e.length
        ? e[0]
        : (t) => {
              for (let n of e) 'function' == typeof n ? n(t) : null != n && (n.current = t);
          };
}
let f = new Set(['id']),
    h = new Set(['aria-label', 'aria-labelledby', 'aria-describedby', 'aria-details']),
    p = /^(data-.*)$/;
function m(e, t = {}) {
    let { labelable: n, propNames: r } = t,
        i = {};
    for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (f.has(t) || (n && h.has(t)) || (null == r ? void 0 : r.has(t)) || p.test(t)) && (i[t] = e[t]);
    return i;
}
let I = null;
function T() {
    if (null == I) {
        I = !1;
        try {
            document.createElement('div').focus({
                get preventScroll() {
                    return (I = !0), !0;
                }
            });
        } catch (e) {}
    }
    return I;
}
function g(e) {
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
function S(e) {
    for (let { element: t, scrollTop: n, scrollLeft: r } of e) (t.scrollTop = n), (t.scrollLeft = r);
}
function A(e, t, n = 'horizontal') {
    let r = e.getBoundingClientRect();
    return t ? ('horizontal' === n ? r.right : r.bottom) : 'horizontal' === n ? r.left : r.top;
}
let v = new Map(),
    N = new Set();
function O() {
    if ('undefined' == typeof window) return;
    let e = (e) => {
            let n = v.get(e.target);
            !n && ((n = new Set()), v.set(e.target, n), e.target.addEventListener('transitioncancel', t)), n.add(e.propertyName);
        },
        t = (e) => {
            let n = v.get(e.target);
            if (n && (n.delete(e.propertyName), 0 === n.size && (e.target.removeEventListener('transitioncancel', t), v.delete(e.target)), 0 === v.size)) {
                for (let e of N) e();
                N.clear();
            }
        };
    document.body.addEventListener('transitionrun', e), document.body.addEventListener('transitionend', t);
}
'undefined' != typeof document && ('loading' !== document.readyState ? O() : document.addEventListener('DOMContentLoaded', O));
let R = null;
function C(e) {
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
function y() {
    return void 0 !== window.ResizeObserver;
}
function L(e) {
    let { ref: t, onResize: n } = e;
    (0, r.useEffect)(() => {
        let e = null == t ? void 0 : t.current;
        if (e) {
            if (!y())
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
function b(e) {
    for (D(e) && (e = e.parentElement); e && !D(e); ) e = e.parentElement;
    return e || document.scrollingElement || document.documentElement;
}
function D(e) {
    let t = window.getComputedStyle(e);
    return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
let M = 'undefined' != typeof document && window.visualViewport;
function P() {
    let [e, t] = (0, r.useState)(() => U());
    return (
        (0, r.useEffect)(() => {
            let e = () => {
                t((e) => {
                    let t = U();
                    return t.width === e.width && t.height === e.height ? e : t;
                });
            };
            return (
                M ? M.addEventListener('resize', e) : window.addEventListener('resize', e),
                () => {
                    M ? M.removeEventListener('resize', e) : window.removeEventListener('resize', e);
                }
            );
        }, []),
        e
    );
}
function U() {
    return {
        width: (null == M ? void 0 : M.width) || window.innerWidth,
        height: (null == M ? void 0 : M.height) || window.innerHeight
    };
}
let w = 0,
    x = new Map();
function G(e) {
    var t;
    return 'undefined' != typeof window && null != window.navigator && ((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands.some((t) => e.test(t.brand))) || e.test(window.navigator.userAgent));
}
function k(e) {
    var t;
    return 'undefined' != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform);
}
function B() {
    return k(/^Mac/i);
}
function F() {
    return k(/^iPhone/i);
}
function Z() {
    return k(/^iPad/i) || (B() && navigator.maxTouchPoints > 1);
}
function V() {
    return F() || Z();
}
function H() {
    return G(/AppleWebKit/i) && !Y();
}
function Y() {
    return G(/Chrome/i);
}
function j() {
    return G(/Android/i);
}
function W(e, t) {
    let n = K(e, t, 'left'),
        r = K(e, t, 'top'),
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
function K(e, t, n) {
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
