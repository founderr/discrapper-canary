!(function (t) {
    'function' == typeof define && define.amd ? define([], t) : e.exports ? (e.exports = t()) : (window.idleCallbackShim = t());
})(function () {
    var e,
        t,
        r,
        i,
        a = 'undefined' != typeof window ? window : (n.g, n.g),
        o = (a.cancelRequestAnimationFrame && a.requestAnimationFrame) || setTimeout,
        s = a.cancelRequestAnimationFrame || clearTimeout,
        l = [],
        u = 0,
        c = !1,
        d = 7,
        _ = 35,
        E = 125,
        f = 0,
        h = 0,
        p = 0,
        m = {
            get didTimeout() {
                return !1;
            },
            timeRemaining: function () {
                var e = d - (Date.now() - h);
                return e < 0 ? 0 : e;
            }
        },
        I = T(function () {
            (d = 22), (E = 66), (_ = 0);
        });
    function T(e) {
        var t,
            n,
            r = 99,
            i = function () {
                var a = Date.now() - n;
                a < r ? (t = setTimeout(i, r - a)) : ((t = null), e());
            };
        return function () {
            (n = Date.now()), !t && (t = setTimeout(i, r));
        };
    }
    function g() {
        c && (i && s(i), r && clearTimeout(r), (c = !1));
    }
    function S() {
        125 != E && ((d = 7), (E = 125), (_ = 35), c && (g(), N())), I();
    }
    function A() {
        (i = null), (r = setTimeout(O, 0));
    }
    function v() {
        (r = null), o(A);
    }
    function N() {
        if (!c) (t = E - (Date.now() - h)), (e = Date.now()), (c = !0), _ && t < _ && (t = _), t > 9 ? (r = setTimeout(v, t)) : ((t = 0), v());
    }
    function O() {
        var n,
            i,
            a,
            o = d > 9 ? 9 : 1;
        if (((h = Date.now()), (c = !1), (r = null), u > 2 || h - t - 50 < e)) for (i = 0, a = l.length; i < a && m.timeRemaining() > o; i++) (n = l.shift()), p++, n && n(m);
        l.length ? N() : (u = 0);
    }
    function R(e) {
        return f++, l.push(e), N(), f;
    }
    function C(e) {
        var t = e - 1 - p;
        l[t] && (l[t] = null);
    }
    if (a.requestIdleCallback && a.cancelIdleCallback)
        try {
            a.requestIdleCallback(function () {}, { timeout: 0 });
        } catch (e) {
            !(function (e) {
                var t, n;
                if (
                    ((a.requestIdleCallback = function (t, n) {
                        return n && 'number' == typeof n.timeout ? e(t, n.timeout) : e(t);
                    }),
                    a.IdleCallbackDeadline && (t = IdleCallbackDeadline.prototype))
                ) {
                    if (!(n = Object.getOwnPropertyDescriptor(t, 'timeRemaining')) || !n.configurable || !n.get) return;
                    Object.defineProperty(t, 'timeRemaining', {
                        value: function () {
                            return n.get.call(this);
                        },
                        enumerable: !0,
                        configurable: !0
                    });
                }
            })(a.requestIdleCallback);
        }
    else
        (a.requestIdleCallback = R),
            (a.cancelIdleCallback = C),
            a.document &&
                document.addEventListener &&
                (a.addEventListener('scroll', S, !0),
                a.addEventListener('resize', S),
                document.addEventListener('focus', S, !0),
                document.addEventListener('mouseover', S, !0),
                ['click', 'keypress', 'touchstart', 'mousedown'].forEach(function (e) {
                    document.addEventListener(e, S, {
                        capture: !0,
                        passive: !0
                    });
                }),
                a.MutationObserver &&
                    new MutationObserver(S).observe(document.documentElement, {
                        childList: !0,
                        subtree: !0,
                        attributes: !0
                    }));
    return {
        request: R,
        cancel: C
    };
});
