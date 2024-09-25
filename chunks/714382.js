function r(e) {
    return 'Minified Redux error #' + e + '; visit https://redux.js.org/Errors?code=' + e + ' for the full message or use the non-minified dev environment for full errors. ';
}
n.d(t, {
    MT: function () {
        return _;
    }
}),
    n(189885);
var i = (function () {
        return ('function' == typeof Symbol && Symbol.observable) || '@@observable';
    })(),
    a = function () {
        return Math.random().toString(36).substring(7).split('').join('.');
    },
    o = {
        INIT: '@@redux/INIT' + a(),
        REPLACE: '@@redux/REPLACE' + a(),
        PROBE_UNKNOWN_ACTION: function () {
            return '@@redux/PROBE_UNKNOWN_ACTION' + a();
        }
    };
function s(e) {
    if ('object' != typeof e || null === e) return !1;
    for (var t = e; null !== Object.getPrototypeOf(t); ) t = Object.getPrototypeOf(t);
    return Object.getPrototypeOf(e) === t;
}
function l(e) {
    return 'function' == typeof e.constructor ? e.constructor.name : null;
}
function u(e) {
    return e instanceof Error || ('string' == typeof e.message && e.constructor && 'number' == typeof e.constructor.stackTraceLimit);
}
function c(e) {
    return e instanceof Date || ('function' == typeof e.toDateString && 'function' == typeof e.getDate && 'function' == typeof e.setDate);
}
function d(e) {
    var t = typeof e;
    return t;
}
function _(e, t, n) {
    if (('function' == typeof t && 'function' == typeof n) || ('function' == typeof n && 'function' == typeof arguments[3])) throw Error(r(0));
    if (('function' == typeof t && void 0 === n && ((n = t), (t = void 0)), void 0 !== n)) {
        if ('function' != typeof n) throw Error(r(1));
        return n(_)(e, t);
    }
    if ('function' != typeof e) throw Error(r(2));
    var a,
        l = e,
        u = t,
        c = [],
        d = c,
        E = !1;
    function f() {
        d === c && (d = c.slice());
    }
    function h() {
        if (E) throw Error(r(3));
        return u;
    }
    function p(e) {
        if ('function' != typeof e) throw Error(r(4));
        if (E) throw Error(r(5));
        var t = !0;
        return (
            f(),
            d.push(e),
            function () {
                if (!!t) {
                    if (E) throw Error(r(6));
                    (t = !1), f();
                    var n = d.indexOf(e);
                    d.splice(n, 1), (c = null);
                }
            }
        );
    }
    function m(e) {
        if (!s(e)) throw Error(r(7));
        if (void 0 === e.type) throw Error(r(8));
        if (E) throw Error(r(9));
        try {
            (E = !0), (u = l(u, e));
        } finally {
            E = !1;
        }
        for (var t = (c = d), n = 0; n < t.length; n++) (0, t[n])();
        return e;
    }
    function I(e) {
        if ('function' != typeof e) throw Error(r(10));
        (l = e), m({ type: o.REPLACE });
    }
    function T() {
        var e,
            t = p;
        return (
            ((e = {
                subscribe: function (e) {
                    if ('object' != typeof e || null === e) throw Error(r(11));
                    function n() {
                        e.next && e.next(h());
                    }
                    return n(), { unsubscribe: t(n) };
                }
            })[i] = function () {
                return this;
            }),
            e
        );
    }
    return (
        m({ type: o.INIT }),
        ((a = {
            dispatch: m,
            subscribe: p,
            getState: h,
            replaceReducer: I
        })[i] = T),
        a
    );
}
function E(e) {
    Object.keys(e).forEach(function (t) {
        var n = e[t];
        if (void 0 === n(void 0, { type: o.INIT })) throw Error(r(12));
        if (void 0 === n(void 0, { type: o.PROBE_UNKNOWN_ACTION() })) throw Error(r(13));
    });
}
function f(e, t) {
    return function () {
        return t(e.apply(this, arguments));
    };
}
function h() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return 0 === t.length
        ? function (e) {
              return e;
          }
        : 1 === t.length
          ? t[0]
          : t.reduce(function (e, t) {
                return function () {
                    return e(t.apply(void 0, arguments));
                };
            });
}
