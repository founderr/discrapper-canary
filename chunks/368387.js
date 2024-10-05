!(function (t) {
    var n,
        r = Object.prototype,
        i = r.hasOwnProperty,
        a = 'function' == typeof Symbol ? Symbol : {},
        s = a.iterator || '@@iterator',
        o = a.asyncIterator || '@@asyncIterator',
        l = a.toStringTag || '@@toStringTag',
        u = t.regeneratorRuntime;
    if (u) {
        e.exports = u;
        return;
    }
    function c(e, t, r, i) {
        var a = Object.create((t && t.prototype instanceof p ? t : p).prototype),
            s = new C(i || []);
        return (
            (a._invoke = (function (e, t, r) {
                var i = _;
                return function (a, s) {
                    if (i === E) throw Error('Generator is already running');
                    if (i === f) {
                        if ('throw' === a) throw s;
                        return D();
                    }
                    for (r.method = a, r.arg = s; ; ) {
                        var o = r.delegate;
                        if (o) {
                            var l = (function e(t, r) {
                                var i = t.iterator[r.method];
                                if (n === i) {
                                    if (((r.delegate = null), 'throw' === r.method)) {
                                        if (t.iterator.return && ((r.method = 'return'), (r.arg = n), e(t, r), 'throw' === r.method)) return h;
                                        (r.method = 'throw'), (r.arg = TypeError("The iterator does not provide a 'throw' method"));
                                    }
                                    return h;
                                }
                                var a = d(i, t.iterator, r.arg);
                                if ('throw' === a.type) return (r.method = 'throw'), (r.arg = a.arg), (r.delegate = null), h;
                                var s = a.arg;
                                return s ? (s.done ? ((r[t.resultName] = s.value), (r.next = t.nextLoc), 'return' !== r.method && ((r.method = 'next'), (r.arg = n)), (r.delegate = null), h) : s) : ((r.method = 'throw'), (r.arg = TypeError('iterator result is not an object')), (r.delegate = null), h);
                            })(o, r);
                            if (l) {
                                if (l === h) continue;
                                return l;
                            }
                        }
                        if ('next' === r.method) r.sent = r._sent = r.arg;
                        else if ('throw' === r.method) {
                            if (i === _) throw ((i = f), r.arg);
                            r.dispatchException(r.arg);
                        } else 'return' === r.method && r.abrupt('return', r.arg);
                        i = E;
                        var u = d(e, t, r);
                        if ('normal' === u.type) {
                            if (((i = r.done ? f : 'suspendedYield'), u.arg === h)) continue;
                            return {
                                value: u.arg,
                                done: r.done
                            };
                        }
                        'throw' === u.type && ((i = f), (r.method = 'throw'), (r.arg = u.arg));
                    }
                };
            })(e, r, s)),
            a
        );
    }
    function d(e, t, n) {
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
    (u = t.regeneratorRuntime = (0, e.exports)).wrap = c;
    var _ = 'suspendedStart',
        E = 'executing',
        f = 'completed',
        h = {};
    function p() {}
    function I() {}
    function m() {}
    var T = {};
    T[s] = function () {
        return this;
    };
    var S = Object.getPrototypeOf,
        g = S && S(S(L([])));
    g && g !== r && i.call(g, s) && (T = g);
    var A = (m.prototype = p.prototype = Object.create(T));
    function N(e) {
        ['next', 'throw', 'return'].forEach(function (t) {
            e[t] = function (e) {
                return this._invoke(t, e);
            };
        });
    }
    function O(e) {
        var t;
        this._invoke = function (n, r) {
            function a() {
                return new Promise(function (t, a) {
                    !(function t(n, r, a, s) {
                        var o = d(e[n], e, r);
                        if ('throw' === o.type) s(o.arg);
                        else {
                            var l = o.arg,
                                u = l.value;
                            return u && 'object' == typeof u && i.call(u, '__await')
                                ? Promise.resolve(u.__await).then(
                                      function (e) {
                                          t('next', e, a, s);
                                      },
                                      function (e) {
                                          t('throw', e, a, s);
                                      }
                                  )
                                : Promise.resolve(u).then(
                                      function (e) {
                                          (l.value = e), a(l);
                                      },
                                      function (e) {
                                          return t('throw', e, a, s);
                                      }
                                  );
                        }
                    })(n, r, t, a);
                });
            }
            return (t = t ? t.then(a, a) : a());
        };
    }
    (I.prototype = A.constructor = m),
        (m.constructor = I),
        (m[l] = I.displayName = 'GeneratorFunction'),
        (u.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor;
            return !!t && (t === I || 'GeneratorFunction' === (t.displayName || t.name));
        }),
        (u.mark = function (e) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : ((e.__proto__ = m), !(l in e) && (e[l] = 'GeneratorFunction')), (e.prototype = Object.create(A)), e;
        }),
        (u.awrap = function (e) {
            return { __await: e };
        }),
        N(O.prototype),
        (O.prototype[o] = function () {
            return this;
        }),
        (u.AsyncIterator = O),
        (u.async = function (e, t, n, r) {
            var i = new O(c(e, t, n, r));
            return u.isGeneratorFunction(t)
                ? i
                : i.next().then(function (e) {
                      return e.done ? e.value : i.next();
                  });
        });
    function R(e) {
        var t = { tryLoc: e[0] };
        1 in e && (t.catchLoc = e[1]), 2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])), this.tryEntries.push(t);
    }
    function v(e) {
        var t = e.completion || {};
        (t.type = 'normal'), delete t.arg, (e.completion = t);
    }
    function C(e) {
        (this.tryEntries = [{ tryLoc: 'root' }]), e.forEach(R, this), this.reset(!0);
    }
    function L(e) {
        if (e) {
            var t = e[s];
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
        return { next: D };
    }
    function D() {
        return {
            value: n,
            done: !0
        };
    }
    N(A),
        (A[l] = 'Generator'),
        (A[s] = function () {
            return this;
        }),
        (A.toString = function () {
            return '[object Generator]';
        }),
        (u.keys = function (e) {
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
        (u.values = L),
        (C.prototype = {
            constructor: C,
            reset: function (e) {
                if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = n), (this.done = !1), (this.delegate = null), (this.method = 'next'), (this.arg = n), this.tryEntries.forEach(v), !e)) for (var t in this) 't' === t.charAt(0) && i.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = n);
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
                    return (o.type = 'throw'), (o.arg = e), (t.next = r), i && ((t.method = 'next'), (t.arg = n)), !!i;
                }
                for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                    var s = this.tryEntries[a],
                        o = s.completion;
                    if ('root' === s.tryLoc) return r('end');
                    if (s.tryLoc <= this.prev) {
                        var l = i.call(s, 'catchLoc'),
                            u = i.call(s, 'finallyLoc');
                        if (l && u) {
                            if (this.prev < s.catchLoc) return r(s.catchLoc, !0);
                            if (this.prev < s.finallyLoc) return r(s.finallyLoc);
                        } else if (l) {
                            if (this.prev < s.catchLoc) return r(s.catchLoc, !0);
                        } else if (u) {
                            if (this.prev < s.finallyLoc) return r(s.finallyLoc);
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
                var s = a ? a.completion : {};
                return ((s.type = e), (s.arg = t), a) ? ((this.method = 'next'), (this.next = a.finallyLoc), h) : this.complete(s);
            },
            complete: function (e, t) {
                if ('throw' === e.type) throw e.arg;
                return 'break' === e.type || 'continue' === e.type ? (this.next = e.arg) : 'return' === e.type ? ((this.rval = this.arg = e.arg), (this.method = 'return'), (this.next = 'end')) : 'normal' === e.type && t && (this.next = t), h;
            },
            finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), v(n), h;
                }
            },
            catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.tryLoc === e) {
                        var r = n.completion;
                        if ('throw' === r.type) {
                            var i = r.arg;
                            v(n);
                        }
                        return i;
                    }
                }
                throw Error('illegal catch attempt');
            },
            delegateYield: function (e, t, r) {
                return (
                    (this.delegate = {
                        iterator: L(e),
                        resultName: t,
                        nextLoc: r
                    }),
                    'next' === this.method && (this.arg = n),
                    h
                );
            }
        });
})(
    (function () {
        return this || ('object' == typeof self && self);
    })() || Function('return this')()
);
