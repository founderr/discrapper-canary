function r(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    throw Error(
        '[Immer] minified error nr: ' +
            e +
            (n.length
                ? ' ' +
                  n
                      .map(function (e) {
                          return "'" + e + "'";
                      })
                      .join(',')
                : '') +
            '. Find the full error at: https://bit.ly/3cXEKWf'
    );
}
function i(e) {
    return !!e && !!e[V];
}
function a(e) {
    var t;
    return (
        !!e &&
        ((function (e) {
            if (!e || 'object' != typeof e) return !1;
            var t = Object.getPrototypeOf(e);
            if (null === t) return !0;
            var n = Object.hasOwnProperty.call(t, 'constructor') && t.constructor;
            return n === Object || ('function' == typeof n && Function.toString.call(n) === j);
        })(e) ||
            Array.isArray(e) ||
            !!e[F] ||
            !!(null === (t = e.constructor) || void 0 === t ? void 0 : t[F]) ||
            c(e) ||
            d(e))
    );
}
function s(e, t, n) {
    void 0 === n && (n = !1),
        0 === o(e)
            ? (n ? Object.keys : H)(e).forEach(function (r) {
                  (n && 'symbol' == typeof r) || t(r, e[r], e);
              })
            : e.forEach(function (n, r) {
                  return t(r, n, e);
              });
}
function o(e) {
    var t = e[V];
    return t ? (t.i > 3 ? t.i - 4 : t.i) : Array.isArray(e) ? 1 : c(e) ? 2 : d(e) ? 3 : 0;
}
function l(e, t) {
    return 2 === o(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
n.d(t, {
    P2: function () {
        return X;
    },
    Uy: function () {
        return Q;
    },
    _x: function () {
        return J;
    },
    mv: function () {
        return i;
    }
});
function u(e, t, n) {
    var r = o(e);
    2 === r ? e.set(t, n) : 3 === r ? e.add(n) : (e[t] = n);
}
function c(e) {
    return U && e instanceof Map;
}
function d(e) {
    return B && e instanceof Set;
}
function f(e) {
    return e.o || e.t;
}
function _(e) {
    if (Array.isArray(e)) return Array.prototype.slice.call(e);
    var t = Y(e);
    delete t[V];
    for (var n = H(t), r = 0; r < n.length; r++) {
        var i = n[r],
            a = t[i];
        !1 === a.writable && ((a.writable = !0), (a.configurable = !0)),
            (a.get || a.set) &&
                (t[i] = {
                    configurable: !0,
                    writable: !0,
                    enumerable: a.enumerable,
                    value: e[i]
                });
    }
    return Object.create(Object.getPrototypeOf(e), t);
}
function p(e, t) {
    return (
        void 0 === t && (t = !1),
        m(e) ||
            i(e) ||
            !a(e) ||
            (o(e) > 1 && (e.set = e.add = e.clear = e.delete = h),
            Object.freeze(e),
            t &&
                s(
                    e,
                    function (e, t) {
                        return p(t, !0);
                    },
                    !0
                )),
        e
    );
}
function h() {
    r(2);
}
function m(e) {
    return null == e || 'object' != typeof e || Object.isFrozen(e);
}
function g(e) {
    var t = W[e];
    return t || r(18, e), t;
}
function E() {
    return P;
}
function v(e, t) {
    t && (g('Patches'), (e.u = []), (e.s = []), (e.v = t));
}
function b(e) {
    I(e), e.p.forEach(S), (e.p = null);
}
function I(e) {
    e === P && (P = e.l);
}
function T(e) {
    return (P = {
        p: [],
        l: P,
        h: e,
        m: !0,
        _: 0
    });
}
function S(e) {
    var t = e[V];
    0 === t.i || 1 === t.i ? t.j() : (t.g = !0);
}
function y(e, t) {
    t._ = t.p.length;
    var n = t.p[0],
        i = void 0 !== e && e !== n;
    return t.h.O || g('ES5').S(t, e, i), i ? (n[V].P && (b(t), r(4)), a(e) && ((e = A(t, e)), t.l || C(t, e)), t.u && g('Patches').M(n[V].t, e, t.u, t.s)) : (e = A(t, n, [])), b(t), t.u && t.v(t.u, t.s), e !== Z ? e : void 0;
}
function A(e, t, n) {
    if (m(t)) return t;
    var r = t[V];
    if (!r)
        return (
            s(
                t,
                function (i, a) {
                    return N(e, r, t, i, a, n);
                },
                !0
            ),
            t
        );
    if (r.A !== e) return t;
    if (!r.P) return C(e, r.t, !0), r.t;
    if (!r.I) {
        (r.I = !0), r.A._--;
        var i = 4 === r.i || 5 === r.i ? (r.o = _(r.k)) : r.o,
            a = i,
            o = !1;
        3 === r.i && ((a = new Set(i)), i.clear(), (o = !0)),
            s(a, function (t, a) {
                return N(e, r, i, t, a, n, o);
            }),
            C(e, i, !1),
            n && e.u && g('Patches').N(r, n, e.u, e.s);
    }
    return r.o;
}
function N(e, t, n, r, s, o, c) {
    if (i(s)) {
        var d = A(e, s, o && t && 3 !== t.i && !l(t.R, r) ? o.concat(r) : void 0);
        if ((u(n, r, d), !i(d))) return;
        e.m = !1;
    } else c && n.add(s);
    if (a(s) && !m(s)) {
        if (!e.h.D && e._ < 1) return;
        A(e, s), (t && t.A.l) || C(e, s);
    }
}
function C(e, t, n) {
    void 0 === n && (n = !1), !e.l && e.h.D && e.m && p(t, n);
}
function R(e, t) {
    var n = e[V];
    return (n ? f(n) : e)[t];
}
function O(e, t) {
    if (t in e)
        for (var n = Object.getPrototypeOf(e); n; ) {
            var r = Object.getOwnPropertyDescriptor(n, t);
            if (r) return r;
            n = Object.getPrototypeOf(n);
        }
}
function D(e) {
    e.P || ((e.P = !0), e.l && D(e.l));
}
function L(e) {
    e.o || (e.o = _(e.t));
}
function x(e, t, n) {
    var r,
        i,
        a,
        s,
        o,
        l,
        u,
        f,
        _,
        p = c(t)
            ? g('MapSet').F(t, n)
            : d(t)
              ? g('MapSet').T(t, n)
              : e.O
                ? ((r = t),
                  (i = n),
                  (o = s =
                      {
                          i: (a = Array.isArray(r)) ? 1 : 0,
                          A: i ? i.A : P,
                          P: !1,
                          I: !1,
                          R: {},
                          l: i,
                          t: r,
                          k: null,
                          o: null,
                          j: null,
                          C: !1
                      }),
                  (l = K),
                  a && ((o = [s]), (l = z)),
                  (f = (u = Proxy.revocable(o, l)).revoke),
                  (_ = u.proxy),
                  (s.k = _),
                  (s.j = f),
                  _)
                : g('ES5').J(t, n);
    return (n ? n.A : P).p.push(p), p;
}
function w(e, t) {
    switch (t) {
        case 2:
            return new Map(e);
        case 3:
            return Array.from(e);
    }
    return _(e);
}
var M,
    P,
    k = 'undefined' != typeof Symbol && 'symbol' == typeof Symbol('x'),
    U = 'undefined' != typeof Map,
    B = 'undefined' != typeof Set,
    G = 'undefined' != typeof Proxy && void 0 !== Proxy.revocable && 'undefined' != typeof Reflect,
    Z = k ? Symbol.for('immer-nothing') : (((M = {})['immer-nothing'] = !0), M),
    F = k ? Symbol.for('immer-draftable') : '__$immer_draftable',
    V = k ? Symbol.for('immer-state') : '__$immer_state',
    j = '' + Object.prototype.constructor,
    H =
        'undefined' != typeof Reflect && Reflect.ownKeys
            ? Reflect.ownKeys
            : void 0 !== Object.getOwnPropertySymbols
              ? function (e) {
                    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
                }
              : Object.getOwnPropertyNames,
    Y =
        Object.getOwnPropertyDescriptors ||
        function (e) {
            var t = {};
            return (
                H(e).forEach(function (n) {
                    t[n] = Object.getOwnPropertyDescriptor(e, n);
                }),
                t
            );
        },
    W = {},
    K = {
        get: function (e, t) {
            if (t === V) return e;
            var n,
                r,
                i,
                s = f(e);
            if (!l(s, t)) {
                return (n = e), (i = O(s, t)) ? ('value' in i ? i.value : null === (r = i.get) || void 0 === r ? void 0 : r.call(n.k)) : void 0;
            }
            var o = s[t];
            return e.I || !a(o) ? o : o === R(e.t, t) ? (L(e), (e.o[t] = x(e.A.h, o, e))) : o;
        },
        has: function (e, t) {
            return t in f(e);
        },
        ownKeys: function (e) {
            return Reflect.ownKeys(f(e));
        },
        set: function (e, t, n) {
            var r = O(f(e), t);
            if (null == r ? void 0 : r.set) return r.set.call(e.k, n), !0;
            if (!e.P) {
                var i,
                    a,
                    s = R(f(e), t),
                    o = null == s ? void 0 : s[V];
                if (o && o.t === n) return (e.o[t] = n), (e.R[t] = !1), !0;
                if (((i = n) === (a = s) ? 0 !== i || 1 / i == 1 / a : i != i && a != a) && (void 0 !== n || l(e.t, t))) return !0;
                L(e), D(e);
            }
            return (e.o[t] === n && (void 0 !== n || t in e.o)) || (Number.isNaN(n) && Number.isNaN(e.o[t])) || ((e.o[t] = n), (e.R[t] = !0)), !0;
        },
        deleteProperty: function (e, t) {
            return void 0 !== R(e.t, t) || t in e.t ? ((e.R[t] = !1), L(e), D(e)) : delete e.R[t], e.o && delete e.o[t], !0;
        },
        getOwnPropertyDescriptor: function (e, t) {
            var n = f(e),
                r = Reflect.getOwnPropertyDescriptor(n, t);
            return r
                ? {
                      writable: !0,
                      configurable: 1 !== e.i || 'length' !== t,
                      enumerable: r.enumerable,
                      value: n[t]
                  }
                : r;
        },
        defineProperty: function () {
            r(11);
        },
        getPrototypeOf: function (e) {
            return Object.getPrototypeOf(e.t);
        },
        setPrototypeOf: function () {
            r(12);
        }
    },
    z = {};
s(K, function (e, t) {
    z[e] = function () {
        return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
    };
}),
    (z.deleteProperty = function (e, t) {
        return z.set.call(this, e, t, void 0);
    }),
    (z.set = function (e, t, n) {
        return K.set.call(this, e[0], t, n, e[0]);
    });
var q = new ((function () {
        function e(e) {
            var t = this;
            (this.O = G),
                (this.D = !0),
                (this.produce = function (e, n, i) {
                    if ('function' == typeof e && 'function' != typeof n) {
                        var s,
                            o = n;
                        return (
                            (n = e),
                            function (e) {
                                var r = this;
                                void 0 === e && (e = o);
                                for (var i = arguments.length, a = Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++) a[s - 1] = arguments[s];
                                return t.produce(e, function (e) {
                                    var t;
                                    return (t = n).call.apply(t, [r, e].concat(a));
                                });
                            }
                        );
                    }
                    if (('function' != typeof n && r(6), void 0 !== i && 'function' != typeof i && r(7), a(e))) {
                        var l = T(t),
                            u = x(t, e, void 0),
                            c = !0;
                        try {
                            (s = n(u)), (c = !1);
                        } finally {
                            c ? b(l) : I(l);
                        }
                        return 'undefined' != typeof Promise && s instanceof Promise
                            ? s.then(
                                  function (e) {
                                      return v(l, i), y(e, l);
                                  },
                                  function (e) {
                                      throw (b(l), e);
                                  }
                              )
                            : (v(l, i), y(s, l));
                    }
                    if (!e || 'object' != typeof e) {
                        if ((void 0 === (s = n(e)) && (s = e), s === Z && (s = void 0), t.D && p(s, !0), i)) {
                            var d = [],
                                f = [];
                            g('Patches').M(e, s, d, f), i(d, f);
                        }
                        return s;
                    }
                    r(21, e);
                }),
                (this.produceWithPatches = function (e, n) {
                    if ('function' == typeof e)
                        return function (n) {
                            for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) i[a - 1] = arguments[a];
                            return t.produceWithPatches(n, function (t) {
                                return e.apply(void 0, [t].concat(i));
                            });
                        };
                    var r,
                        i,
                        a = t.produce(e, n, function (e, t) {
                            (r = e), (i = t);
                        });
                    return 'undefined' != typeof Promise && a instanceof Promise
                        ? a.then(function (e) {
                              return [e, r, i];
                          })
                        : [a, r, i];
                }),
                'boolean' == typeof (null == e ? void 0 : e.useProxies) && this.setUseProxies(e.useProxies),
                'boolean' == typeof (null == e ? void 0 : e.autoFreeze) && this.setAutoFreeze(e.autoFreeze);
        }
        var t = e.prototype;
        return (
            (t.createDraft = function (e) {
                a(e) || r(8),
                    i(e) &&
                        (i((t = e)) || r(22, t),
                        (e = (function e(t) {
                            if (!a(t)) return t;
                            var n,
                                r = t[V],
                                i = o(t);
                            if (r) {
                                if (!r.P && (r.i < 4 || !g('ES5').K(r))) return r.t;
                                (r.I = !0), (n = w(t, i)), (r.I = !1);
                            } else n = w(t, i);
                            return (
                                s(n, function (t, i) {
                                    var a, s;
                                    (r && ((a = r.t), (s = t), (2 === o(a) ? a.get(s) : a[s]) === i)) || u(n, t, e(i));
                                }),
                                3 === i ? new Set(n) : n
                            );
                        })(t)));
                var t,
                    n = T(this),
                    l = x(this, e, void 0);
                return (l[V].C = !0), I(n), l;
            }),
            (t.finishDraft = function (e, t) {
                var n = (e && e[V]).A;
                return v(n, t), y(void 0, n);
            }),
            (t.setAutoFreeze = function (e) {
                this.D = e;
            }),
            (t.setUseProxies = function (e) {
                e && !G && r(20), (this.O = e);
            }),
            (t.applyPatches = function (e, t) {
                for (n = t.length - 1; n >= 0; n--) {
                    var n,
                        r = t[n];
                    if (0 === r.path.length && 'replace' === r.op) {
                        e = r.value;
                        break;
                    }
                }
                n > -1 && (t = t.slice(n + 1));
                var a = g('Patches').$;
                return i(e)
                    ? a(e, t)
                    : this.produce(e, function (e) {
                          return a(e, t);
                      });
            }),
            e
        );
    })())(),
    Q = q.produce,
    X = (q.produceWithPatches.bind(q), q.setAutoFreeze.bind(q), q.setUseProxies.bind(q), q.applyPatches.bind(q), q.createDraft.bind(q)),
    J = q.finishDraft.bind(q);
