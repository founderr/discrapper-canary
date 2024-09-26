!(function (t) {
    var n,
        r = Object.prototype,
        i = r.hasOwnProperty,
        a = 'function' == typeof Symbol ? Symbol : {},
        o = a.iterator || '@@iterator',
        s = a.asyncIterator || '@@asyncIterator',
        l = a.toStringTag || '@@toStringTag',
        u = !0,
        c = t.regeneratorRuntime;
    if (c) {
        u && (e.exports = c);
        return;
    }
    function d(e, t, n, r) {
        var i = Object.create((t && t.prototype instanceof I ? t : I).prototype),
            a = new D(r || []);
        return (i._invoke = C(e, n, a)), i;
    }
    function _(e, t, n) {
        try {
            return {
                type: 'normal',
                arg: e.call(t, n)
            };
        } catch (e) {
            return {
                type: 'throw',
                arg: e
            };
        }
    }
    (c = t.regeneratorRuntime = u ? e.exports : {}).wrap = d;
    var E = 'suspendedStart',
        f = 'suspendedYield',
        h = 'executing',
        p = 'completed',
        m = {};
    function I() {}
    function T() {}
    function g() {}
    var S = {};
    S[o] = function () {
        return this;
    };
    var A = Object.getPrototypeOf,
        v = A && A(A(M([])));
    v && v !== r && i.call(v, o) && (S = v);
    var N = (g.prototype = I.prototype = Object.create(S));
    function O(e) {
        ['next', 'throw', 'return'].forEach(function (t) {
            e[t] = function (e) {
                return this._invoke(t, e);
            };
        });
    }
    function R(e) {
        var t;
        function n(t, r, a, o) {
            var s = _(e[t], e, r);
            if ('throw' === s.type) o(s.arg);
            else {
                var l = s.arg,
                    u = l.value;
                return u && 'object' == typeof u && i.call(u, '__await')
                    ? Promise.resolve(u.__await).then(
                          function (e) {
                              n('next', e, a, o);
                          },
                          function (e) {
                              n('throw', e, a, o);
                          }
                      )
                    : Promise.resolve(u).then(
                          function (e) {
                              (l.value = e), a(l);
                          },
                          function (e) {
                              return n('throw', e, a, o);
                          }
                      );
            }
        }
        function r(e, r) {
            function i() {
                return new Promise(function (t, i) {
                    n(e, r, t, i);
                });
            }
            return (t = t ? t.then(i, i) : i());
        }
        this._invoke = r;
    }
    function C(e, t, n) {
        var r = E;
        return function (i, a) {
            if (r === h) throw Error('Generator is already running');
            if (r === p) {
                if ('throw' === i) throw a;
                return P();
            }
            for (n.method = i, n.arg = a; ; ) {
                var o = n.delegate;
                if (o) {
                    var s = y(o, n);
                    if (s) {
                        if (s === m) continue;
                        return s;
                    }
                }
                if ('next' === n.method) n.sent = n._sent = n.arg;
                else if ('throw' === n.method) {
                    if (r === E) throw ((r = p), n.arg);
                    n.dispatchException(n.arg);
                } else 'return' === n.method && n.abrupt('return', n.arg);
                r = h;
                var l = _(e, t, n);
                if ('normal' === l.type) {
                    if (((r = n.done ? p : f), l.arg === m)) continue;
                    return {
                        value: l.arg,
                        done: n.done
                    };
                }
                'throw' === l.type && ((r = p), (n.method = 'throw'), (n.arg = l.arg));
            }
        };
    }
    function y(e, t) {
        var r = e.iterator[t.method];
        if (n === r) {
            if (((t.delegate = null), 'throw' === t.method)) {
                if (e.iterator.return && ((t.method = 'return'), (t.arg = n), y(e, t), 'throw' === t.method)) return m;
                (t.method = 'throw'), (t.arg = TypeError("The iterator does not provide a 'throw' method"));
            }
            return m;
        }
        var i = _(r, e.iterator, t.arg);
        if ('throw' === i.type) return (t.method = 'throw'), (t.arg = i.arg), (t.delegate = null), m;
        var a = i.arg;
        return a ? (a.done ? ((t[e.resultName] = a.value), (t.next = e.nextLoc), 'return' !== t.method && ((t.method = 'next'), (t.arg = n)), (t.delegate = null), m) : a) : ((t.method = 'throw'), (t.arg = TypeError('iterator result is not an object')), (t.delegate = null), m);
    }
    function L(e) {
        var t = { tryLoc: e[0] };
        1 in e && (t.catchLoc = e[1]), 2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])), this.tryEntries.push(t);
    }
    function b(e) {
        var t = e.completion || {};
        (t.type = 'normal'), delete t.arg, (e.completion = t);
    }
    function D(e) {
        (this.tryEntries = [{ tryLoc: 'root' }]), e.forEach(L, this), this.reset(!0);
    }
    function M(e) {
        if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
                var r = -1,
                    a = function t() {
                        for (; ++r < e.length; ) if (i.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                        return (t.value = n), (t.done = !0), t;
                    };
                return (a.next = a);
            }
        }
        return { next: P };
    }
    function P() {
        return {
            value: n,
            done: !0
        };
    }
    (T.prototype = N.constructor = g),
        (g.constructor = T),
        (g[l] = T.displayName = 'GeneratorFunction'),
        (c.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor;
            return !!t && (t === T || 'GeneratorFunction' === (t.displayName || t.name));
        }),
        (c.mark = function (e) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e, g) : ((e.__proto__ = g), !(l in e) && (e[l] = 'GeneratorFunction')), (e.prototype = Object.create(N)), e;
        }),
        (c.awrap = function (e) {
            return { __await: e };
        }),
        O(R.prototype),
        (R.prototype[s] = function () {
            return this;
        }),
        (c.AsyncIterator = R),
        (c.async = function (e, t, n, r) {
            var i = new R(d(e, t, n, r));
            return c.isGeneratorFunction(t)
                ? i
                : i.next().then(function (e) {
                      return e.done ? e.value : i.next();
                  });
        }),
        O(N),
        (N[l] = 'Generator'),
        (N[o] = function () {
            return this;
        }),
        (N.toString = function () {
            return '[object Generator]';
        }),
        (c.keys = function (e) {
            var t = [];
            for (var n in e) t.push(n);
            return (
                t.reverse(),
                function n() {
                    for (; t.length; ) {
                        var r = t.pop();
                        if (r in e) return (n.value = r), (n.done = !1), n;
                    }
                    return (n.done = !0), n;
                }
            );
        }),
        (c.values = M),
        (D.prototype = {
            constructor: D,
            reset: function (e) {
                if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = n), (this.done = !1), (this.delegate = null), (this.method = 'next'), (this.arg = n), this.tryEntries.forEach(b), !e)) for (var t in this) 't' === t.charAt(0) && i.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = n);
            },
            stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ('throw' === e.type) throw e.arg;
                return this.rval;
            },
            dispatchException: function (e) {
                if (this.done) throw e;
                var t = this;
                function r(r, i) {
                    return (s.type = 'throw'), (s.arg = e), (t.next = r), i && ((t.method = 'next'), (t.arg = n)), !!i;
                }
                for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                    var o = this.tryEntries[a],
                        s = o.completion;
                    if ('root' === o.tryLoc) return r('end');
                    if (o.tryLoc <= this.prev) {
                        var l = i.call(o, 'catchLoc'),
                            u = i.call(o, 'finallyLoc');
                        if (l && u) {
                            if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                            if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                        } else if (l) {
                            if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                        } else if (u) {
                            if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                        } else throw Error('try statement without catch or finally');
                    }
                }
            },
            abrupt: function (e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var r = this.tryEntries[n];
                    if (r.tryLoc <= this.prev && i.call(r, 'finallyLoc') && this.prev < r.finallyLoc) {
                        var a = r;
                        break;
                    }
                }
                a && ('break' === e || 'continue' === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                var o = a ? a.completion : {};
                return ((o.type = e), (o.arg = t), a) ? ((this.method = 'next'), (this.next = a.finallyLoc), m) : this.complete(o);
            },
            complete: function (e, t) {
                if ('throw' === e.type) throw e.arg;
                return 'break' === e.type || 'continue' === e.type ? (this.next = e.arg) : 'return' === e.type ? ((this.rval = this.arg = e.arg), (this.method = 'return'), (this.next = 'end')) : 'normal' === e.type && t && (this.next = t), m;
            },
            finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), b(n), m;
                }
            },
            catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.tryLoc === e) {
                        var r = n.completion;
                        if ('throw' === r.type) {
                            var i = r.arg;
                            b(n);
                        }
                        return i;
                    }
                }
                throw Error('illegal catch attempt');
            },
            delegateYield: function (e, t, r) {
                return (
                    (this.delegate = {
                        iterator: M(e),
                        resultName: t,
                        nextLoc: r
                    }),
                    'next' === this.method && (this.arg = n),
                    m
                );
            }
        });
})(
    (function () {
        return this || ('object' == typeof self && self);
    })() || Function('return this')()
);
