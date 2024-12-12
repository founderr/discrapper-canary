!(function (n) {
    'function' == typeof define && define.amd ? define([], n) : e.exports ? (e.exports = n()) : (window.idleCallbackShim = n());
})(function () {
    var e,
        n,
        i,
        a,
        s = 'undefined' != typeof window ? window : (r.g, r.g),
        o = (s.cancelRequestAnimationFrame && s.requestAnimationFrame) || setTimeout,
        l = s.cancelRequestAnimationFrame || clearTimeout,
        u = [],
        c = 0,
        d = !1,
        f = 7,
        _ = 35,
        h = 125,
        p = 0,
        m = 0,
        g = 0,
        E = {
            get didTimeout() {
                return !1;
            },
            timeRemaining: function () {
                var e = f - (Date.now() - m);
                return e < 0 ? 0 : e;
            }
        },
        v = I(function () {
            (f = 22), (h = 66), (_ = 0);
        });
    function I(e) {
        var n,
            r,
            i = 99,
            a = function () {
                var s = Date.now() - r;
                s < i ? (n = setTimeout(a, i - s)) : ((n = null), e());
            };
        return function () {
            (r = Date.now()), !n && (n = setTimeout(a, i));
        };
    }
    function T() {
        d && (a && l(a), i && clearTimeout(i), (d = !1));
    }
    function b() {
        125 != h && ((f = 7), (h = 125), (_ = 35), d && (T(), A())), v();
    }
    function y() {
        (a = null), (i = setTimeout(N, 0));
    }
    function S() {
        (i = null), o(y);
    }
    function A() {
        if (!d) (n = h - (Date.now() - m)), (e = Date.now()), (d = !0), _ && n < _ && (n = _), n > 9 ? (i = setTimeout(S, n)) : ((n = 0), S());
    }
    function N() {
        var r,
            a,
            s,
            o = f > 9 ? 9 : 1;
        if (((m = Date.now()), (d = !1), (i = null), c > 2 || m - n - 50 < e)) for (a = 0, s = u.length; a < s && E.timeRemaining() > o; a++) (r = u.shift()), g++, r && r(E);
        u.length ? A() : (c = 0);
    }
    function C(e) {
        return p++, u.push(e), A(), p;
    }
    function R(e) {
        var n = e - 1 - g;
        u[n] && (u[n] = null);
    }
    if (s.requestIdleCallback && s.cancelIdleCallback)
        try {
            s.requestIdleCallback(function () {}, { timeout: 0 });
        } catch (e) {
            !(function (e) {
                var n, r;
                if (
                    ((s.requestIdleCallback = function (n, r) {
                        return r && 'number' == typeof r.timeout ? e(n, r.timeout) : e(n);
                    }),
                    s.IdleCallbackDeadline && (n = IdleCallbackDeadline.prototype))
                ) {
                    if (!(r = Object.getOwnPropertyDescriptor(n, 'timeRemaining')) || !r.configurable || !r.get) return;
                    Object.defineProperty(n, 'timeRemaining', {
                        value: function () {
                            return r.get.call(this);
                        },
                        enumerable: !0,
                        configurable: !0
                    });
                }
            })(s.requestIdleCallback);
        }
    else
        (s.requestIdleCallback = C),
            (s.cancelIdleCallback = R),
            s.document &&
                document.addEventListener &&
                (s.addEventListener('scroll', b, !0),
                s.addEventListener('resize', b),
                document.addEventListener('focus', b, !0),
                document.addEventListener('mouseover', b, !0),
                ['click', 'keypress', 'touchstart', 'mousedown'].forEach(function (e) {
                    document.addEventListener(e, b, {
                        capture: !0,
                        passive: !0
                    });
                }),
                s.MutationObserver &&
                    new MutationObserver(b).observe(document.documentElement, {
                        childList: !0,
                        subtree: !0,
                        attributes: !0
                    }));
    return {
        request: C,
        cancel: R
    };
});
