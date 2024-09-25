n.d(t, {
    Ep: function () {
        return E;
    },
    Hp: function () {
        return h;
    },
    PP: function () {
        return w;
    },
    lX: function () {
        return R;
    },
    ob: function () {
        return f;
    },
    q_: function () {
        return P;
    }
});
var r = n(599295),
    i = n(634450),
    a = n(115953),
    o = n(568895);
function s(e) {
    return '/' === e.charAt(0) ? e : '/' + e;
}
function l(e) {
    return '/' === e.charAt(0) ? e.substr(1) : e;
}
function u(e, t) {
    return 0 === e.toLowerCase().indexOf(t.toLowerCase()) && -1 !== '/?#'.indexOf(e.charAt(t.length));
}
function c(e, t) {
    return u(e, t) ? e.substr(t.length) : e;
}
function d(e) {
    return '/' === e.charAt(e.length - 1) ? e.slice(0, -1) : e;
}
function _(e) {
    var t = e || '/',
        n = '',
        r = '',
        i = t.indexOf('#');
    -1 !== i && ((r = t.substr(i)), (t = t.substr(0, i)));
    var a = t.indexOf('?');
    return (
        -1 !== a && ((n = t.substr(a)), (t = t.substr(0, a))),
        {
            pathname: t,
            search: '?' === n ? '' : n,
            hash: '#' === r ? '' : r
        }
    );
}
function E(e) {
    var t = e.pathname,
        n = e.search,
        r = e.hash,
        i = t || '/';
    return n && '?' !== n && (i += '?' === n.charAt(0) ? n : '?' + n), r && '#' !== r && (i += '#' === r.charAt(0) ? r : '#' + r), i;
}
function f(e, t, n, a) {
    var o;
    'string' == typeof e ? ((o = _(e)).state = t) : (void 0 === (o = (0, r.Z)({}, e)).pathname && (o.pathname = ''), o.search ? '?' !== o.search.charAt(0) && (o.search = '?' + o.search) : (o.search = ''), o.hash ? '#' !== o.hash.charAt(0) && (o.hash = '#' + o.hash) : (o.hash = ''), void 0 !== t && void 0 === o.state && (o.state = t));
    try {
        o.pathname = decodeURI(o.pathname);
    } catch (e) {
        if (e instanceof URIError) throw URIError('Pathname "' + o.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.');
        throw e;
    }
    return n && (o.key = n), a ? (o.pathname ? '/' !== o.pathname.charAt(0) && (o.pathname = (0, i.Z)(o.pathname, a.pathname)) : (o.pathname = a.pathname)) : !o.pathname && (o.pathname = '/'), o;
}
function h(e, t) {
    return e.pathname === t.pathname && e.search === t.search && e.hash === t.hash && e.key === t.key && (0, a.Z)(e.state, t.state);
}
function p() {
    var e = null,
        t = [];
    return {
        setPrompt: function t(t) {
            return (
                (e = t),
                function () {
                    e === t && (e = null);
                }
            );
        },
        confirmTransitionTo: function t(t, n, r, i) {
            if (null != e) {
                var a = 'function' == typeof e ? e(t, n) : e;
                'string' == typeof a ? ('function' == typeof r ? r(a, i) : i(!0)) : i(!1 !== a);
            } else i(!0);
        },
        appendListener: function e(e) {
            var n = !0;
            function r() {
                n && e.apply(void 0, arguments);
            }
            return (
                t.push(r),
                function () {
                    (n = !1),
                        (t = t.filter(function (e) {
                            return e !== r;
                        }));
                }
            );
        },
        notifyListeners: function e() {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            t.forEach(function (e) {
                return e.apply(void 0, n);
            });
        }
    };
}
var m = !!('undefined' != typeof window && window.document && window.document.createElement);
function I(e, t) {
    t(window.confirm(e));
}
function T() {
    var e = window.navigator.userAgent;
    return ((-1 === e.indexOf('Android 2.') && -1 === e.indexOf('Android 4.0')) || -1 === e.indexOf('Mobile Safari') || -1 !== e.indexOf('Chrome') || -1 !== e.indexOf('Windows Phone')) && window.history && 'pushState' in window.history;
}
function g() {
    return -1 === window.navigator.userAgent.indexOf('Trident');
}
function S() {
    return -1 === window.navigator.userAgent.indexOf('Firefox');
}
function A(e) {
    return void 0 === e.state && -1 === navigator.userAgent.indexOf('CriOS');
}
var v = 'popstate',
    N = 'hashchange';
function O() {
    try {
        return window.history.state || {};
    } catch (e) {
        return {};
    }
}
function R(e) {
    void 0 === e && (e = {}), m || (0, o.Z)(!1);
    var t = window.history,
        n = T(),
        i = !g(),
        a = e,
        l = a.forceRefresh,
        u = void 0 !== l && l,
        _ = a.getUserConfirmation,
        h = void 0 === _ ? I : _,
        S = a.keyLength,
        R = void 0 === S ? 6 : S,
        C = e.basename ? d(s(e.basename)) : '';
    function y(e) {
        var t = e || {},
            n = t.key,
            r = t.state,
            i = window.location,
            a = i.pathname + i.search + i.hash;
        return C && (a = c(a, C)), f(a, r, n);
    }
    function b() {
        return Math.random().toString(36).substr(2, R);
    }
    var L = p();
    function D(e) {
        (0, r.Z)(Q, e), (Q.length = t.length), L.notifyListeners(Q.location, Q.action);
    }
    function M(e) {
        !A(e) && w(y(e.state));
    }
    function P() {
        w(y(O()));
    }
    var U = !1;
    function w(e) {
        if (U) (U = !1), D();
        else {
            var t = 'POP';
            L.confirmTransitionTo(e, t, h, function (n) {
                n
                    ? D({
                          action: t,
                          location: e
                      })
                    : x(e);
            });
        }
    }
    function x(e) {
        var t = Q.location,
            n = k.indexOf(t.key);
        -1 === n && (n = 0);
        var r = k.indexOf(e.key);
        -1 === r && (r = 0);
        var i = n - r;
        i && ((U = !0), V(i));
    }
    var G = y(O()),
        k = [G.key];
    function B(e) {
        return C + E(e);
    }
    function F(e, r) {
        var i = 'PUSH',
            a = f(e, r, b(), Q.location);
        L.confirmTransitionTo(a, i, h, function (e) {
            if (e) {
                var r = B(a),
                    o = a.key,
                    s = a.state;
                if (n) {
                    if (
                        (t.pushState(
                            {
                                key: o,
                                state: s
                            },
                            null,
                            r
                        ),
                        u)
                    )
                        window.location.href = r;
                    else {
                        var l = k.indexOf(Q.location.key),
                            c = k.slice(0, l + 1);
                        c.push(a.key),
                            (k = c),
                            D({
                                action: i,
                                location: a
                            });
                    }
                } else window.location.href = r;
            }
        });
    }
    function Z(e, r) {
        var i = 'REPLACE',
            a = f(e, r, b(), Q.location);
        L.confirmTransitionTo(a, i, h, function (e) {
            if (e) {
                var r = B(a),
                    o = a.key,
                    s = a.state;
                if (n) {
                    if (
                        (t.replaceState(
                            {
                                key: o,
                                state: s
                            },
                            null,
                            r
                        ),
                        u)
                    )
                        window.location.replace(r);
                    else {
                        var l = k.indexOf(Q.location.key);
                        -1 !== l && (k[l] = a.key),
                            D({
                                action: i,
                                location: a
                            });
                    }
                } else window.location.replace(r);
            }
        });
    }
    function V(e) {
        t.go(e);
    }
    function H() {
        V(-1);
    }
    function Y() {
        V(1);
    }
    var j = 0;
    function W(e) {
        1 === (j += e) && 1 === e ? (window.addEventListener(v, M), i && window.addEventListener(N, P)) : 0 === j && (window.removeEventListener(v, M), i && window.removeEventListener(N, P));
    }
    var K = !1;
    function z(e) {
        void 0 === e && (e = !1);
        var t = L.setPrompt(e);
        return (
            !K && (W(1), (K = !0)),
            function () {
                return K && ((K = !1), W(-1)), t();
            }
        );
    }
    function q(e) {
        var t = L.appendListener(e);
        return (
            W(1),
            function () {
                W(-1), t();
            }
        );
    }
    var Q = {
        length: t.length,
        action: 'POP',
        location: G,
        createHref: B,
        push: F,
        replace: Z,
        go: V,
        goBack: H,
        goForward: Y,
        block: z,
        listen: q
    };
    return Q;
}
var C = 'hashchange',
    y = {
        hashbang: {
            encodePath: function (e) {
                return '!' === e.charAt(0) ? e : '!/' + l(e);
            },
            decodePath: function (e) {
                return '!' === e.charAt(0) ? e.substr(1) : e;
            }
        },
        noslash: {
            encodePath: l,
            decodePath: s
        },
        slash: {
            encodePath: s,
            decodePath: s
        }
    };
function b(e) {
    var t = e.indexOf('#');
    return -1 === t ? e : e.slice(0, t);
}
function L() {
    var e = window.location.href,
        t = e.indexOf('#');
    return -1 === t ? '' : e.substring(t + 1);
}
function D(e) {
    window.location.hash = e;
}
function M(e) {
    window.location.replace(b(window.location.href) + '#' + e);
}
function P(e) {
    void 0 === e && (e = {}), m || (0, o.Z)(!1);
    var t = window.history;
    S();
    var n = e,
        i = n.getUserConfirmation,
        a = void 0 === i ? I : i,
        l = n.hashType,
        u = void 0 === l ? 'slash' : l,
        _ = e.basename ? d(s(e.basename)) : '',
        h = y[u],
        T = h.encodePath,
        g = h.decodePath;
    function A() {
        var e = g(L());
        return _ && (e = c(e, _)), f(e);
    }
    var v = p();
    function N(e) {
        (0, r.Z)($, e), ($.length = t.length), v.notifyListeners($.location, $.action);
    }
    var O = !1,
        R = null;
    function P(e, t) {
        return e.pathname === t.pathname && e.search === t.search && e.hash === t.hash;
    }
    function U() {
        var e = L(),
            t = T(e);
        if (e !== t) M(t);
        else {
            var n = A(),
                r = $.location;
            if ((!O && P(r, n)) || R === E(n)) return;
            (R = null), w(n);
        }
    }
    function w(e) {
        if (O) (O = !1), N();
        else {
            var t = 'POP';
            v.confirmTransitionTo(e, t, a, function (n) {
                n
                    ? N({
                          action: t,
                          location: e
                      })
                    : x(e);
            });
        }
    }
    function x(e) {
        var t = $.location,
            n = F.lastIndexOf(E(t));
        -1 === n && (n = 0);
        var r = F.lastIndexOf(E(e));
        -1 === r && (r = 0);
        var i = n - r;
        i && ((O = !0), Y(i));
    }
    var G = L(),
        k = T(G);
    G !== k && M(k);
    var B = A(),
        F = [E(B)];
    function Z(e) {
        var t = document.querySelector('base'),
            n = '';
        return t && t.getAttribute('href') && (n = b(window.location.href)), n + '#' + T(_ + E(e));
    }
    function V(e, t) {
        var n = 'PUSH',
            r = f(e, void 0, void 0, $.location);
        v.confirmTransitionTo(r, n, a, function (e) {
            if (e) {
                var t = E(r),
                    i = T(_ + t),
                    a = L() !== i;
                if (a) {
                    (R = t), D(i);
                    var o = F.lastIndexOf(E($.location)),
                        s = F.slice(0, o + 1);
                    s.push(t),
                        (F = s),
                        N({
                            action: n,
                            location: r
                        });
                } else N();
            }
        });
    }
    function H(e, t) {
        var n = 'REPLACE',
            r = f(e, void 0, void 0, $.location);
        v.confirmTransitionTo(r, n, a, function (e) {
            if (e) {
                var t = E(r),
                    i = T(_ + t),
                    a = L() !== i;
                a && ((R = t), M(i));
                var o = F.indexOf(E($.location));
                -1 !== o && (F[o] = t),
                    N({
                        action: n,
                        location: r
                    });
            }
        });
    }
    function Y(e) {
        t.go(e);
    }
    function j() {
        Y(-1);
    }
    function W() {
        Y(1);
    }
    var K = 0;
    function z(e) {
        1 === (K += e) && 1 === e ? window.addEventListener(C, U) : 0 === K && window.removeEventListener(C, U);
    }
    var q = !1;
    function Q(e) {
        void 0 === e && (e = !1);
        var t = v.setPrompt(e);
        return (
            !q && (z(1), (q = !0)),
            function () {
                return q && ((q = !1), z(-1)), t();
            }
        );
    }
    function X(e) {
        var t = v.appendListener(e);
        return (
            z(1),
            function () {
                z(-1), t();
            }
        );
    }
    var $ = {
        length: t.length,
        action: 'POP',
        location: B,
        createHref: Z,
        push: V,
        replace: H,
        go: Y,
        goBack: j,
        goForward: W,
        block: Q,
        listen: X
    };
    return $;
}
function U(e, t, n) {
    return Math.min(Math.max(e, t), n);
}
function w(e) {
    void 0 === e && (e = {});
    var t = e,
        n = t.getUserConfirmation,
        i = t.initialEntries,
        a = void 0 === i ? ['/'] : i,
        o = t.initialIndex,
        s = void 0 === o ? 0 : o,
        l = t.keyLength,
        u = void 0 === l ? 6 : l,
        c = p();
    function d(e) {
        (0, r.Z)(C, e), (C.length = C.entries.length), c.notifyListeners(C.location, C.action);
    }
    function _() {
        return Math.random().toString(36).substr(2, u);
    }
    var h = U(s, 0, a.length - 1),
        m = a.map(function (e) {
            return 'string' == typeof e ? f(e, void 0, _()) : f(e, void 0, e.key || _());
        }),
        I = E;
    function T(e, t) {
        var r = 'PUSH',
            i = f(e, t, _(), C.location);
        c.confirmTransitionTo(i, r, n, function (e) {
            if (e) {
                var t = C.index,
                    n = t + 1,
                    a = C.entries.slice(0);
                a.length > n ? a.splice(n, a.length - n, i) : a.push(i),
                    d({
                        action: r,
                        location: i,
                        index: n,
                        entries: a
                    });
            }
        });
    }
    function g(e, t) {
        var r = 'REPLACE',
            i = f(e, t, _(), C.location);
        c.confirmTransitionTo(i, r, n, function (e) {
            e &&
                ((C.entries[C.index] = i),
                d({
                    action: r,
                    location: i
                }));
        });
    }
    function S(e) {
        var t = U(C.index + e, 0, C.entries.length - 1),
            r = 'POP',
            i = C.entries[t];
        c.confirmTransitionTo(i, r, n, function (e) {
            e
                ? d({
                      action: r,
                      location: i,
                      index: t
                  })
                : d();
        });
    }
    function A() {
        S(-1);
    }
    function v() {
        S(1);
    }
    function N(e) {
        var t = C.index + e;
        return t >= 0 && t < C.entries.length;
    }
    function O(e) {
        return void 0 === e && (e = !1), c.setPrompt(e);
    }
    function R(e) {
        return c.appendListener(e);
    }
    var C = {
        length: m.length,
        action: 'POP',
        location: m[h],
        index: h,
        entries: m,
        createHref: I,
        push: T,
        replace: g,
        go: S,
        goBack: A,
        goForward: v,
        canGo: N,
        block: O,
        listen: R
    };
    return C;
}
