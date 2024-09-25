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
    return !!e && !!e[q];
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
            return n === Object || ('function' == typeof n && Function.toString.call(n) === X);
        })(e) ||
            Array.isArray(e) ||
            !!e[z] ||
            !!(null === (t = e.constructor) || void 0 === t ? void 0 : t[z]) ||
            _(e) ||
            E(e))
    );
}
n.d(t, {
    P2: function () {
        return ea;
    },
    Uy: function () {
        return ei;
    },
    _x: function () {
        return eo;
    },
    mv: function () {
        return i;
    }
});
function o(e, t, n) {
    void 0 === n && (n = !1),
        0 === s(e)
            ? (n ? Object.keys : $)(e).forEach(function (r) {
                  (n && 'symbol' == typeof r) || t(r, e[r], e);
              })
            : e.forEach(function (n, r) {
                  return t(r, n, e);
              });
}
function s(e) {
    var t = e[q];
    return t ? (t.i > 3 ? t.i - 4 : t.i) : Array.isArray(e) ? 1 : _(e) ? 2 : E(e) ? 3 : 0;
}
function l(e, t) {
    return 2 === s(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function u(e, t) {
    return 2 === s(e) ? e.get(t) : e[t];
}
function c(e, t, n) {
    var r = s(e);
    2 === r ? e.set(t, n) : 3 === r ? e.add(n) : (e[t] = n);
}
function d(e, t) {
    return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
}
function _(e) {
    return Y && e instanceof Map;
}
function E(e) {
    return j && e instanceof Set;
}
function f(e) {
    return e.o || e.t;
}
function h(e) {
    if (Array.isArray(e)) return Array.prototype.slice.call(e);
    var t = J(e);
    delete t[q];
    for (var n = $(t), r = 0; r < n.length; r++) {
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
        I(e) ||
            i(e) ||
            !a(e) ||
            (s(e) > 1 && (e.set = e.add = e.clear = e.delete = m),
            Object.freeze(e),
            t &&
                o(
                    e,
                    function (e, t) {
                        return p(t, !0);
                    },
                    !0
                )),
        e
    );
}
function m() {
    r(2);
}
function I(e) {
    return null == e || 'object' != typeof e || Object.isFrozen(e);
}
function T(e) {
    var t = ee[e];
    return t || r(18, e), t;
}
function g(e, t) {
    ee[e] || (ee[e] = t);
}
function S() {
    return V;
}
function A(e, t) {
    t && (T('Patches'), (e.u = []), (e.s = []), (e.v = t));
}
function v(e) {
    N(e), e.p.forEach(R), (e.p = null);
}
function N(e) {
    e === V && (V = e.l);
}
function O(e) {
    return (V = {
        p: [],
        l: V,
        h: e,
        m: !0,
        _: 0
    });
}
function R(e) {
    var t = e[q];
    0 === t.i || 1 === t.i ? t.j() : (t.g = !0);
}
function C(e, t) {
    t._ = t.p.length;
    var n = t.p[0],
        i = void 0 !== e && e !== n;
    return t.h.O || T('ES5').S(t, e, i), i ? (n[q].P && (v(t), r(4)), a(e) && ((e = y(t, e)), t.l || L(t, e)), t.u && T('Patches').M(n[q].t, e, t.u, t.s)) : (e = y(t, n, [])), v(t), t.u && t.v(t.u, t.s), e !== K ? e : void 0;
}
function y(e, t, n) {
    if (I(t)) return t;
    var r = t[q];
    if (!r)
        return (
            o(
                t,
                function (i, a) {
                    return b(e, r, t, i, a, n);
                },
                !0
            ),
            t
        );
    if (r.A !== e) return t;
    if (!r.P) return L(e, r.t, !0), r.t;
    if (!r.I) {
        (r.I = !0), r.A._--;
        var i = 4 === r.i || 5 === r.i ? (r.o = h(r.k)) : r.o,
            a = i,
            s = !1;
        3 === r.i && ((a = new Set(i)), i.clear(), (s = !0)),
            o(a, function (t, a) {
                return b(e, r, i, t, a, n, s);
            }),
            L(e, i, !1),
            n && e.u && T('Patches').N(r, n, e.u, e.s);
    }
    return r.o;
}
function b(e, t, n, r, o, s, u) {
    if (i(o)) {
        var d = y(e, o, s && t && 3 !== t.i && !l(t.R, r) ? s.concat(r) : void 0);
        if ((c(n, r, d), !i(d))) return;
        e.m = !1;
    } else u && n.add(o);
    if (a(o) && !I(o)) {
        if (!e.h.D && e._ < 1) return;
        y(e, o), (t && t.A.l) || L(e, o);
    }
}
function L(e, t, n) {
    void 0 === n && (n = !1), !e.l && e.h.D && e.m && p(t, n);
}
function D(e, t) {
    var n = e[q];
    return (n ? f(n) : e)[t];
}
function M(e, t) {
    if (t in e)
        for (var n = Object.getPrototypeOf(e); n; ) {
            var r = Object.getOwnPropertyDescriptor(n, t);
            if (r) return r;
            n = Object.getPrototypeOf(n);
        }
}
function P(e) {
    e.P || ((e.P = !0), e.l && P(e.l));
}
function U(e) {
    e.o || (e.o = h(e.t));
}
function w(e, t, n) {
    var r = _(t)
        ? T('MapSet').F(t, n)
        : E(t)
          ? T('MapSet').T(t, n)
          : e.O
            ? (function (e, t) {
                  var n = Array.isArray(e),
                      r = {
                          i: n ? 1 : 0,
                          A: t ? t.A : S(),
                          P: !1,
                          I: !1,
                          R: {},
                          l: t,
                          t: e,
                          k: null,
                          o: null,
                          j: null,
                          C: !1
                      },
                      i = r,
                      a = et;
                  n && ((i = [r]), (a = en));
                  var o = Proxy.revocable(i, a),
                      s = o.revoke,
                      l = o.proxy;
                  return (r.k = l), (r.j = s), l;
              })(t, n)
            : T('ES5').J(t, n);
    return (n ? n.A : S()).p.push(r), r;
}
function x(e) {
    return (
        i(e) || r(22, e),
        (function e(t) {
            if (!a(t)) return t;
            var n,
                r = t[q],
                i = s(t);
            if (r) {
                if (!r.P && (r.i < 4 || !T('ES5').K(r))) return r.t;
                (r.I = !0), (n = G(t, i)), (r.I = !1);
            } else n = G(t, i);
            return (
                o(n, function (t, i) {
                    (r && u(r.t, t) === i) || c(n, t, e(i));
                }),
                3 === i ? new Set(n) : n
            );
        })(e)
    );
}
function G(e, t) {
    switch (t) {
        case 2:
            return new Map(e);
        case 3:
            return Array.from(e);
    }
    return h(e);
}
function k() {
    function e(e, t) {
        var n = a[e];
        return (
            n
                ? (n.enumerable = t)
                : (a[e] = n =
                      {
                          configurable: !0,
                          enumerable: t,
                          get: function () {
                              var t = this[q];
                              return et.get(t, e);
                          },
                          set: function (t) {
                              var n = this[q];
                              et.set(n, e, t);
                          }
                      }),
            n
        );
    }
    function t(e) {
        for (var t = e.length - 1; t >= 0; t--) {
            var i = e[t][q];
            if (!i.P)
                switch (i.i) {
                    case 5:
                        r(i) && P(i);
                        break;
                    case 4:
                        n(i) && P(i);
                }
        }
    }
    function n(e) {
        for (var t = e.t, n = e.k, r = $(n), i = r.length - 1; i >= 0; i--) {
            var a = r[i];
            if (a !== q) {
                var o = t[a];
                if (void 0 === o && !l(t, a)) return !0;
                var s = n[a],
                    u = s && s[q];
                if (u ? u.t !== o : !d(s, o)) return !0;
            }
        }
        var c = !!t[q];
        return r.length !== $(t).length + (c ? 0 : 1);
    }
    function r(e) {
        var t = e.k;
        if (t.length !== e.t.length) return !0;
        var n = Object.getOwnPropertyDescriptor(t, t.length - 1);
        if (n && !n.get) return !0;
        for (var r = 0; r < t.length; r++) if (!t.hasOwnProperty(r)) return !0;
        return !1;
    }
    var a = {};
    g('ES5', {
        J: function (t, n) {
            var r = Array.isArray(t),
                i = (function (t, n) {
                    if (t) {
                        for (var r = Array(n.length), i = 0; i < n.length; i++) Object.defineProperty(r, '' + i, e(i, !0));
                        return r;
                    }
                    var a = J(n);
                    delete a[q];
                    for (var o = $(a), s = 0; s < o.length; s++) {
                        var l = o[s];
                        a[l] = e(l, t || !!a[l].enumerable);
                    }
                    return Object.create(Object.getPrototypeOf(n), a);
                })(r, t),
                a = {
                    i: r ? 5 : 4,
                    A: n ? n.A : S(),
                    P: !1,
                    I: !1,
                    R: {},
                    l: n,
                    t: t,
                    k: i,
                    o: null,
                    g: !1,
                    C: !1
                };
            return (
                Object.defineProperty(i, q, {
                    value: a,
                    writable: !0
                }),
                i
            );
        },
        S: function (e, n, a) {
            a
                ? i(n) && n[q].A === e && t(e.p)
                : (e.u &&
                      (function e(t) {
                          if (t && 'object' == typeof t) {
                              var n = t[q];
                              if (n) {
                                  var i = n.t,
                                      a = n.k,
                                      s = n.R,
                                      u = n.i;
                                  if (4 === u)
                                      o(a, function (t) {
                                          t !== q && (void 0 !== i[t] || l(i, t) ? s[t] || e(a[t]) : ((s[t] = !0), P(n)));
                                      }),
                                          o(i, function (e) {
                                              void 0 !== a[e] || l(a, e) || ((s[e] = !1), P(n));
                                          });
                                  else if (5 === u) {
                                      if ((r(n) && (P(n), (s.length = !0)), a.length < i.length)) for (var c = a.length; c < i.length; c++) s[c] = !1;
                                      else for (var d = i.length; d < a.length; d++) s[d] = !0;
                                      for (var _ = Math.min(a.length, i.length), E = 0; E < _; E++) a.hasOwnProperty(E) || (s[E] = !0), void 0 === s[E] && e(a[E]);
                                  }
                              }
                          }
                      })(e.p[0]),
                  t(e.p));
        },
        K: function (e) {
            return 4 === e.i ? n(e) : r(e);
        }
    });
}
function B() {
    function e(t) {
        if (!a(t)) return t;
        if (Array.isArray(t)) return t.map(e);
        if (_(t))
            return new Map(
                Array.from(t.entries()).map(function (t) {
                    return [t[0], e(t[1])];
                })
            );
        if (E(t)) return new Set(Array.from(t).map(e));
        var n = Object.create(Object.getPrototypeOf(t));
        for (var r in t) n[r] = e(t[r]);
        return l(t, z) && (n[z] = t[z]), n;
    }
    function t(t) {
        return i(t) ? e(t) : t;
    }
    var n = 'add';
    g('Patches', {
        $: function (t, i) {
            return (
                i.forEach(function (i) {
                    for (var a = i.path, o = i.op, l = t, c = 0; c < a.length - 1; c++) {
                        var d = s(l),
                            _ = a[c];
                        'string' != typeof _ && 'number' != typeof _ && (_ = '' + _), (0 !== d && 1 !== d) || ('__proto__' !== _ && 'constructor' !== _) || r(24), 'function' == typeof l && 'prototype' === _ && r(24), 'object' != typeof (l = u(l, _)) && r(15, a.join('/'));
                    }
                    var E = s(l),
                        f = e(i.value),
                        h = a[a.length - 1];
                    switch (o) {
                        case 'replace':
                            switch (E) {
                                case 2:
                                    return l.set(h, f);
                                case 3:
                                    r(16);
                                default:
                                    return (l[h] = f);
                            }
                        case n:
                            switch (E) {
                                case 1:
                                    return '-' === h ? l.push(f) : l.splice(h, 0, f);
                                case 2:
                                    return l.set(h, f);
                                case 3:
                                    return l.add(f);
                                default:
                                    return (l[h] = f);
                            }
                        case 'remove':
                            switch (E) {
                                case 1:
                                    return l.splice(h, 1);
                                case 2:
                                    return l.delete(h);
                                case 3:
                                    return l.delete(i.value);
                                default:
                                    return delete l[h];
                            }
                        default:
                            r(17, o);
                    }
                }),
                t
            );
        },
        N: function (e, r, i, a) {
            switch (e.i) {
                case 0:
                case 4:
                case 2:
                    return (function (e, r, i, a) {
                        var s = e.t,
                            c = e.o;
                        o(e.R, function (e, o) {
                            var d = u(s, e),
                                _ = u(c, e),
                                E = o ? (l(s, e) ? 'replace' : n) : 'remove';
                            if (d !== _ || 'replace' !== E) {
                                var f = r.concat(e);
                                i.push(
                                    'remove' === E
                                        ? {
                                              op: E,
                                              path: f
                                          }
                                        : {
                                              op: E,
                                              path: f,
                                              value: _
                                          }
                                ),
                                    a.push(
                                        E === n
                                            ? {
                                                  op: 'remove',
                                                  path: f
                                              }
                                            : 'remove' === E
                                              ? {
                                                    op: n,
                                                    path: f,
                                                    value: t(d)
                                                }
                                              : {
                                                    op: 'replace',
                                                    path: f,
                                                    value: t(d)
                                                }
                                    );
                            }
                        });
                    })(e, r, i, a);
                case 5:
                case 1:
                    return (function (e, r, i, a) {
                        var o = e.t,
                            s = e.R,
                            l = e.o;
                        if (l.length < o.length) {
                            var u = [l, o];
                            (o = u[0]), (l = u[1]);
                            var c = [a, i];
                            (i = c[0]), (a = c[1]);
                        }
                        for (var d = 0; d < o.length; d++)
                            if (s[d] && l[d] !== o[d]) {
                                var _ = r.concat([d]);
                                i.push({
                                    op: 'replace',
                                    path: _,
                                    value: t(l[d])
                                }),
                                    a.push({
                                        op: 'replace',
                                        path: _,
                                        value: t(o[d])
                                    });
                            }
                        for (var E = o.length; E < l.length; E++) {
                            var f = r.concat([E]);
                            i.push({
                                op: n,
                                path: f,
                                value: t(l[E])
                            });
                        }
                        o.length < l.length &&
                            a.push({
                                op: 'replace',
                                path: r.concat(['length']),
                                value: o.length
                            });
                    })(e, r, i, a);
                case 3:
                    return (function (e, t, r, i) {
                        var a = e.t,
                            o = e.o,
                            s = 0;
                        a.forEach(function (e) {
                            if (!o.has(e)) {
                                var a = t.concat([s]);
                                r.push({
                                    op: 'remove',
                                    path: a,
                                    value: e
                                }),
                                    i.unshift({
                                        op: n,
                                        path: a,
                                        value: e
                                    });
                            }
                            s++;
                        }),
                            (s = 0),
                            o.forEach(function (e) {
                                if (!a.has(e)) {
                                    var o = t.concat([s]);
                                    r.push({
                                        op: n,
                                        path: o,
                                        value: e
                                    }),
                                        i.unshift({
                                            op: 'remove',
                                            path: o,
                                            value: e
                                        });
                                }
                                s++;
                            });
                    })(e, r, i, a);
            }
        },
        M: function (e, t, n, r) {
            n.push({
                op: 'replace',
                path: [],
                value: t === K ? void 0 : t
            }),
                r.push({
                    op: 'replace',
                    path: [],
                    value: e
                });
        }
    });
}
function F() {
    function e(e, t) {
        function n() {
            this.constructor = e;
        }
        s(e, t), (e.prototype = ((n.prototype = t.prototype), new n()));
    }
    function t(e) {
        e.o || ((e.R = new Map()), (e.o = new Map(e.t)));
    }
    function n(e) {
        e.o ||
            ((e.o = new Set()),
            e.t.forEach(function (t) {
                if (a(t)) {
                    var n = w(e.A.h, t, e);
                    e.p.set(t, n), e.o.add(n);
                } else e.o.add(t);
            }));
    }
    function i(e) {
        e.g && r(3, JSON.stringify(f(e)));
    }
    var s = function (e, t) {
            return (s =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                        e.__proto__ = t;
                    }) ||
                function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                })(e, t);
        },
        l = (function () {
            function n(e, t) {
                return (
                    (this[q] = {
                        i: 2,
                        l: t,
                        A: t ? t.A : S(),
                        P: !1,
                        I: !1,
                        o: void 0,
                        R: void 0,
                        t: e,
                        k: this,
                        C: !1,
                        g: !1
                    }),
                    this
                );
            }
            e(n, Map);
            var r = n.prototype;
            return (
                Object.defineProperty(r, 'size', {
                    get: function () {
                        return f(this[q]).size;
                    }
                }),
                (r.has = function (e) {
                    return f(this[q]).has(e);
                }),
                (r.set = function (e, n) {
                    var r = this[q];
                    return i(r), (f(r).has(e) && f(r).get(e) === n) || (t(r), P(r), r.R.set(e, !0), r.o.set(e, n), r.R.set(e, !0)), this;
                }),
                (r.delete = function (e) {
                    if (!this.has(e)) return !1;
                    var n = this[q];
                    return i(n), t(n), P(n), n.t.has(e) ? n.R.set(e, !1) : n.R.delete(e), n.o.delete(e), !0;
                }),
                (r.clear = function () {
                    var e = this[q];
                    i(e),
                        f(e).size &&
                            (t(e),
                            P(e),
                            (e.R = new Map()),
                            o(e.t, function (t) {
                                e.R.set(t, !1);
                            }),
                            e.o.clear());
                }),
                (r.forEach = function (e, t) {
                    var n = this;
                    f(this[q]).forEach(function (r, i) {
                        e.call(t, n.get(i), i, n);
                    });
                }),
                (r.get = function (e) {
                    var n = this[q];
                    i(n);
                    var r = f(n).get(e);
                    if (n.I || !a(r) || r !== n.t.get(e)) return r;
                    var o = w(n.A.h, r, n);
                    return t(n), n.o.set(e, o), o;
                }),
                (r.keys = function () {
                    return f(this[q]).keys();
                }),
                (r.values = function () {
                    var e,
                        t = this,
                        n = this.keys();
                    return (
                        ((e = {})[Q] = function () {
                            return t.values();
                        }),
                        (e.next = function () {
                            var e = n.next();
                            return e.done
                                ? e
                                : {
                                      done: !1,
                                      value: t.get(e.value)
                                  };
                        }),
                        e
                    );
                }),
                (r.entries = function () {
                    var e,
                        t = this,
                        n = this.keys();
                    return (
                        ((e = {})[Q] = function () {
                            return t.entries();
                        }),
                        (e.next = function () {
                            var e = n.next();
                            if (e.done) return e;
                            var r = t.get(e.value);
                            return {
                                done: !1,
                                value: [e.value, r]
                            };
                        }),
                        e
                    );
                }),
                (r[Q] = function () {
                    return this.entries();
                }),
                n
            );
        })(),
        u = (function () {
            function t(e, t) {
                return (
                    (this[q] = {
                        i: 3,
                        l: t,
                        A: t ? t.A : S(),
                        P: !1,
                        I: !1,
                        o: void 0,
                        t: e,
                        k: this,
                        p: new Map(),
                        g: !1,
                        C: !1
                    }),
                    this
                );
            }
            e(t, Set);
            var r = t.prototype;
            return (
                Object.defineProperty(r, 'size', {
                    get: function () {
                        return f(this[q]).size;
                    }
                }),
                (r.has = function (e) {
                    var t = this[q];
                    return i(t), t.o ? !!t.o.has(e) || !(!t.p.has(e) || !t.o.has(t.p.get(e))) : t.t.has(e);
                }),
                (r.add = function (e) {
                    var t = this[q];
                    return i(t), this.has(e) || (n(t), P(t), t.o.add(e)), this;
                }),
                (r.delete = function (e) {
                    if (!this.has(e)) return !1;
                    var t = this[q];
                    return i(t), n(t), P(t), t.o.delete(e) || (!!t.p.has(e) && t.o.delete(t.p.get(e)));
                }),
                (r.clear = function () {
                    var e = this[q];
                    i(e), f(e).size && (n(e), P(e), e.o.clear());
                }),
                (r.values = function () {
                    var e = this[q];
                    return i(e), n(e), e.o.values();
                }),
                (r.entries = function () {
                    var e = this[q];
                    return i(e), n(e), e.o.entries();
                }),
                (r.keys = function () {
                    return this.values();
                }),
                (r[Q] = function () {
                    return this.values();
                }),
                (r.forEach = function (e, t) {
                    for (var n = this.values(), r = n.next(); !r.done; ) e.call(t, r.value, r.value, this), (r = n.next());
                }),
                t
            );
        })();
    g('MapSet', {
        F: function (e, t) {
            return new l(e, t);
        },
        T: function (e, t) {
            return new u(e, t);
        }
    });
}
var Z,
    V,
    H = 'undefined' != typeof Symbol && 'symbol' == typeof Symbol('x'),
    Y = 'undefined' != typeof Map,
    j = 'undefined' != typeof Set,
    W = 'undefined' != typeof Proxy && void 0 !== Proxy.revocable && 'undefined' != typeof Reflect,
    K = H ? Symbol.for('immer-nothing') : (((Z = {})['immer-nothing'] = !0), Z),
    z = H ? Symbol.for('immer-draftable') : '__$immer_draftable',
    q = H ? Symbol.for('immer-state') : '__$immer_state',
    Q = ('undefined' != typeof Symbol && Symbol.iterator) || '@@iterator',
    X = '' + Object.prototype.constructor,
    $ =
        'undefined' != typeof Reflect && Reflect.ownKeys
            ? Reflect.ownKeys
            : void 0 !== Object.getOwnPropertySymbols
              ? function (e) {
                    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
                }
              : Object.getOwnPropertyNames,
    J =
        Object.getOwnPropertyDescriptors ||
        function (e) {
            var t = {};
            return (
                $(e).forEach(function (n) {
                    t[n] = Object.getOwnPropertyDescriptor(e, n);
                }),
                t
            );
        },
    ee = {},
    et = {
        get: function (e, t) {
            if (t === q) return e;
            var n = f(e);
            if (!l(n, t))
                return (function (e, t, n) {
                    var r,
                        i = M(t, n);
                    return i ? ('value' in i ? i.value : null === (r = i.get) || void 0 === r ? void 0 : r.call(e.k)) : void 0;
                })(e, n, t);
            var r = n[t];
            return e.I || !a(r) ? r : r === D(e.t, t) ? (U(e), (e.o[t] = w(e.A.h, r, e))) : r;
        },
        has: function (e, t) {
            return t in f(e);
        },
        ownKeys: function (e) {
            return Reflect.ownKeys(f(e));
        },
        set: function (e, t, n) {
            var r = M(f(e), t);
            if (null == r ? void 0 : r.set) return r.set.call(e.k, n), !0;
            if (!e.P) {
                var i = D(f(e), t),
                    a = null == i ? void 0 : i[q];
                if (a && a.t === n) return (e.o[t] = n), (e.R[t] = !1), !0;
                if (d(n, i) && (void 0 !== n || l(e.t, t))) return !0;
                U(e), P(e);
            }
            return (e.o[t] === n && (void 0 !== n || t in e.o)) || (Number.isNaN(n) && Number.isNaN(e.o[t])) || ((e.o[t] = n), (e.R[t] = !0)), !0;
        },
        deleteProperty: function (e, t) {
            return void 0 !== D(e.t, t) || t in e.t ? ((e.R[t] = !1), U(e), P(e)) : delete e.R[t], e.o && delete e.o[t], !0;
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
    en = {};
o(et, function (e, t) {
    en[e] = function () {
        return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
    };
}),
    (en.deleteProperty = function (e, t) {
        return en.set.call(this, e, t, void 0);
    }),
    (en.set = function (e, t, n) {
        return et.set.call(this, e[0], t, n, e[0]);
    });
var er = new ((function () {
        function e(e) {
            var t = this;
            (this.O = W),
                (this.D = !0),
                (this.produce = function (e, n, i) {
                    if ('function' == typeof e && 'function' != typeof n) {
                        var o,
                            s = n;
                        n = e;
                        var l = t;
                        return function (e) {
                            var t = this;
                            void 0 === e && (e = s);
                            for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) i[a - 1] = arguments[a];
                            return l.produce(e, function (e) {
                                var r;
                                return (r = n).call.apply(r, [t, e].concat(i));
                            });
                        };
                    }
                    if (('function' != typeof n && r(6), void 0 !== i && 'function' != typeof i && r(7), a(e))) {
                        var u = O(t),
                            c = w(t, e, void 0),
                            d = !0;
                        try {
                            (o = n(c)), (d = !1);
                        } finally {
                            d ? v(u) : N(u);
                        }
                        return 'undefined' != typeof Promise && o instanceof Promise
                            ? o.then(
                                  function (e) {
                                      return A(u, i), C(e, u);
                                  },
                                  function (e) {
                                      throw (v(u), e);
                                  }
                              )
                            : (A(u, i), C(o, u));
                    }
                    if (!e || 'object' != typeof e) {
                        if ((void 0 === (o = n(e)) && (o = e), o === K && (o = void 0), t.D && p(o, !0), i)) {
                            var _ = [],
                                E = [];
                            T('Patches').M(e, o, _, E), i(_, E);
                        }
                        return o;
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
                a(e) || r(8), i(e) && (e = x(e));
                var t = O(this),
                    n = w(this, e, void 0);
                return (n[q].C = !0), N(t), n;
            }),
            (t.finishDraft = function (e, t) {
                var n = (e && e[q]).A;
                return A(n, t), C(void 0, n);
            }),
            (t.setAutoFreeze = function (e) {
                this.D = e;
            }),
            (t.setUseProxies = function (e) {
                e && !W && r(20), (this.O = e);
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
                var a = T('Patches').$;
                return i(e)
                    ? a(e, t)
                    : this.produce(e, function (e) {
                          return a(e, t);
                      });
            }),
            e
        );
    })())(),
    ei = er.produce,
    ea = (er.produceWithPatches.bind(er), er.setAutoFreeze.bind(er), er.setUseProxies.bind(er), er.applyPatches.bind(er), er.createDraft.bind(er)),
    eo = er.finishDraft.bind(er);
