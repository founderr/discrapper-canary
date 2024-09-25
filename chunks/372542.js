function r(e) {
    return e && 'object' == typeof e && 'default' in e ? e.default : e;
}
Object.defineProperty(t, '__esModule', { value: !0 });
var i = n(672268),
    a = n(698091),
    o = r(n(248766)),
    s = n(470079),
    l = r(n(222675)),
    u = r(n(309496)),
    c = r(n(572677)),
    d = r(n(624482)),
    _ = n(560656),
    E = n(239189),
    f = n(482033),
    h = r(n(956845)),
    p = n(640809),
    m = r(n(449686)),
    I = r(n(102386)),
    T = n(179237),
    g = n(467568);
function S(e, t, n) {
    void 0 === n && (n = 1000),
        i.useLayoutEffect(function () {
            if (t) {
                var r = 0;
                a.each(e, function (e, i) {
                    if (e.current) {
                        var o = e.current.controllers;
                        if (o.length) {
                            var s = n * t[i];
                            isNaN(s) ? (s = r) : (r = s),
                                a.each(o, function (e) {
                                    a.each(e.queue, function (e) {
                                        e.delay = s + (e.delay || 0);
                                    }),
                                        e.start();
                                });
                        }
                    }
                });
            } else {
                var i = Promise.resolve();
                a.each(e, function (e) {
                    var t = e.current || {},
                        n = t.controllers,
                        r = t.start;
                    if (n && n.length) {
                        var o = n.map(function (e) {
                            var t = e.queue;
                            return (e.queue = []), t;
                        });
                        i = i.then(function () {
                            return (
                                a.each(n, function (e, t) {
                                    var n;
                                    return (n = e.queue).push.apply(n, o[t]);
                                }),
                                r()
                            );
                        });
                    }
                });
            }
        });
}
var A = {
        default: {
            tension: 170,
            friction: 26
        },
        gentle: {
            tension: 120,
            friction: 14
        },
        wobbly: {
            tension: 180,
            friction: 12
        },
        stiff: {
            tension: 210,
            friction: 20
        },
        slow: {
            tension: 280,
            friction: 60
        },
        molasses: {
            tension: 280,
            friction: 120
        }
    },
    v = function (e) {
        return e;
    },
    N = o(
        o({}, A.default),
        {},
        {
            mass: 1,
            damping: 1,
            easing: v,
            clamp: !1
        }
    ),
    O = function () {
        (this.tension = void 0), (this.friction = void 0), (this.frequency = void 0), (this.damping = void 0), (this.mass = void 0), (this.velocity = 0), (this.restVelocity = void 0), (this.precision = void 0), (this.progress = void 0), (this.duration = void 0), (this.easing = void 0), (this.clamp = void 0), (this.bounce = void 0), (this.decay = void 0), (this.round = void 0), Object.assign(this, N);
    };
function R(e, t, n) {
    for (var r in (n && (C((n = o({}, n)), t), (t = o(o({}, n), t))), C(e, t), Object.assign(e, t), N)) null == e[r] && (e[r] = N[r]);
    var i = e.mass,
        s = e.frequency,
        l = e.damping;
    return !a.is.und(s) && (s < 0.01 && (s = 0.01), l < 0 && (l = 0), (e.tension = Math.pow((2 * Math.PI) / s, 2) * i), (e.friction = (4 * Math.PI * l * i) / s)), e;
}
function C(e, t) {
    if (a.is.und(t.decay)) {
        var n = !a.is.und(t.tension) || !a.is.und(t.friction);
        (n || !a.is.und(t.frequency) || !a.is.und(t.damping) || !a.is.und(t.mass)) && ((e.duration = void 0), (e.decay = void 0)), n && (e.frequency = void 0);
    } else e.duration = void 0;
}
var y = [],
    b = function () {
        (this.changed = !1), (this.values = y), (this.toValues = null), (this.fromValues = y), (this.to = void 0), (this.from = void 0), (this.config = new O()), (this.immediate = !1), (this.onStart = void 0), (this.onChange = void 0), (this.onRest = []);
    };
function L(e) {
    var t = 0;
    if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (e = D(e)))
            return function () {
                return t >= e.length
                    ? { done: !0 }
                    : {
                          done: !1,
                          value: e[t++]
                      };
            };
        throw TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    return (t = e[Symbol.iterator]()).next.bind(t);
}
function D(e, t) {
    if (e) {
        if ('string' == typeof e) return M(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (('Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n)) return Array.from(e);
        if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return M(e, t);
    }
}
function M(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
}
var P = function (e, t) {
    return f.useMemoOne(e, t || [{}]);
};
function U(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    return a.is.fun(e) ? e.apply(void 0, n) : e;
}
var w = function (e, t) {
        return !0 === e || !!(t && e && (a.is.fun(e) ? e(t) : a.toArray(e).includes(t)));
    },
    x = function (e, t, n) {
        return e && (a.is.fun(e) ? e(t, n) : a.is.arr(e) ? e[t] : o({}, e));
    },
    G = function (e, t) {
        return !a.is.und(k(e, t));
    },
    k = function (e, t) {
        return !0 === e.default ? e[t] : e.default ? e.default[t] : void 0;
    },
    B = function (e, t, n) {
        void 0 === t && (t = []), void 0 === n && (n = {});
        var r = Z;
        e.default && !0 !== e.default && (r = Object.keys((e = e.default)));
        for (var i, o = L(r); !(i = o()).done; ) {
            var s = i.value,
                l = e[s];
            !a.is.und(l) && !t.includes(s) && (n[s] = l);
        }
        return n;
    },
    F = function (e, t, n) {
        return B(t, n, e);
    },
    Z = ['pause', 'cancel', 'config', 'immediate', 'onDelayEnd', 'onProps', 'onStart', 'onChange', 'onRest'],
    V = {
        config: 1,
        from: 1,
        to: 1,
        ref: 1,
        loop: 1,
        reset: 1,
        pause: 1,
        cancel: 1,
        reverse: 1,
        immediate: 1,
        default: 1,
        delay: 1,
        onDelayEnd: 1,
        onProps: 1,
        onStart: 1,
        onChange: 1,
        onRest: 1,
        onNoopRest: 1,
        items: 1,
        trail: 1,
        sort: 1,
        expires: 1,
        initial: 1,
        enter: 1,
        update: 1,
        leave: 1,
        children: 1,
        keys: 1,
        callId: 1,
        parentId: 1
    };
function H(e) {
    var t = {},
        n = 0;
    if (
        (a.each(e, function (e, r) {
            !V[r] && ((t[r] = e), n++);
        }),
        n)
    )
        return t;
}
function Y(e) {
    var t = H(e);
    if (t) {
        var n = { to: t };
        return (
            a.each(e, function (e, r) {
                return r in t || (n[r] = e);
            }),
            n
        );
    }
    return o({}, e);
}
function j(e) {
    var t = a.getFluidConfig(e);
    return t
        ? j(t.get())
        : a.is.arr(e)
          ? e.map(j)
          : a.isAnimatedString(e)
            ? E.createStringInterpolator({
                  range: [0, 1],
                  output: [e, e]
              })(1)
            : e;
}
function W(e, t) {
    var n = t.key,
        r = t.props,
        i = t.state,
        s = t.actions;
    return new Promise(function (t, l) {
        var u,
            c,
            d = !1,
            _ = w(r.cancel, n);
        function E() {
            i.resumeQueue.add(f), c.cancel(), (u = c.time - a.Globals.now());
        }
        function f() {
            u > 0 ? (i.pauseQueue.add(E), (c = a.Globals.frameLoop.setTimeout(h, u))) : h();
        }
        function h() {
            i.pauseQueue.delete(E), e <= (i.cancelId || 0) && (_ = !0);
            try {
                s.start(
                    o(
                        o({}, r),
                        {},
                        {
                            callId: e,
                            delay: u,
                            cancel: _,
                            pause: d
                        }
                    ),
                    t
                );
            } catch (e) {
                l(e);
            }
        }
        _ ? h() : ((u = U(r.delay || 0, n)), (d = w(r.pause, n)) ? (i.resumeQueue.add(f), s.pause()) : (s.resume(), f()));
    });
}
var K = function (e, t) {
        return 1 == t.length
            ? t[0]
            : t.some(function (e) {
                    return e.cancelled;
                })
              ? Q(e)
              : t.every(function (e) {
                      return e.noop;
                  })
                ? z(e)
                : q(
                      e,
                      t.every(function (e) {
                          return e.finished;
                      })
                  );
    },
    z = function (e, t) {
        return (
            void 0 === t && (t = e.get()),
            {
                value: t,
                noop: !0,
                finished: !0,
                target: e
            }
        );
    },
    q = function (e, t, n) {
        return (
            void 0 === n && (n = e.get()),
            {
                value: n,
                finished: t,
                target: e
            }
        );
    },
    Q = function (e, t) {
        return (
            void 0 === t && (t = e.get()),
            {
                value: t,
                cancelled: !0,
                target: e
            }
        );
    };
function X(e) {
    var t = 0;
    if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (e = $(e)))
            return function () {
                return t >= e.length
                    ? { done: !0 }
                    : {
                          done: !1,
                          value: e[t++]
                      };
            };
        throw TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    return (t = e[Symbol.iterator]()).next.bind(t);
}
function $(e, t) {
    if (e) {
        if ('string' == typeof e) return J(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (('Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n)) return Array.from(e);
        if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return J(e, t);
    }
}
function J(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
}
function ee(e, t, n, r) {
    return et.apply(this, arguments);
}
function et() {
    return (et = u(
        l.mark(function e(t, n, r, i) {
            var s, c, d, _, f;
            return l.wrap(function (e) {
                for (;;)
                    switch ((e.prev = e.next)) {
                        case 0:
                            if (!n.pause) {
                                e.next = 3;
                                break;
                            }
                            return (
                                (e.next = 3),
                                new Promise(function (e) {
                                    r.resumeQueue.add(e);
                                })
                            );
                        case 3:
                            if (((s = n.callId), (c = n.parentId), (d = n.onRest), (_ = r.asyncTo), (f = r.promise), !(!c && t === _ && !n.reset))) {
                                e.next = 7;
                                break;
                            }
                            return e.abrupt('return', f);
                        case 7:
                            return e.abrupt(
                                'return',
                                (r.promise = u(
                                    l.mark(function e() {
                                        var h, p, m, I, T, g, S, A, v;
                                        return l.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return (
                                                                (r.asyncId = s),
                                                                (r.asyncTo = t),
                                                                (h = B(n, ['onRest'])),
                                                                (I = new Promise(function (e, t) {
                                                                    return (p = e), (m = t);
                                                                })),
                                                                (T = function (e) {
                                                                    return function () {
                                                                        var t = function (e) {
                                                                            throw (e instanceof er && m(e), e);
                                                                        };
                                                                        try {
                                                                            return e.apply(void 0, arguments).catch(t);
                                                                        } catch (e) {
                                                                            t(e);
                                                                        }
                                                                    };
                                                                }),
                                                                (g = function (e) {
                                                                    var t = (s <= (r.cancelId || 0) && Q(i)) || (s !== r.asyncId && q(i, !1));
                                                                    if (t) throw ((e.result = t), e);
                                                                }),
                                                                (S = T(function (e, t) {
                                                                    var n = new er();
                                                                    g(n);
                                                                    var c = a.is.obj(e) ? o({}, e) : o(o({}, t), {}, { to: e });
                                                                    return (
                                                                        (c.parentId = s),
                                                                        a.each(h, function (e, t) {
                                                                            a.is.und(c[t]) && (c[t] = e);
                                                                        }),
                                                                        i.start(c).then(
                                                                            (function () {
                                                                                var e = u(
                                                                                    l.mark(function e(t) {
                                                                                        return l.wrap(function (e) {
                                                                                            for (;;)
                                                                                                switch ((e.prev = e.next)) {
                                                                                                    case 0:
                                                                                                        if ((g(n), !i.is('PAUSED'))) {
                                                                                                            e.next = 4;
                                                                                                            break;
                                                                                                        }
                                                                                                        return (
                                                                                                            (e.next = 4),
                                                                                                            new Promise(function (e) {
                                                                                                                r.resumeQueue.add(e);
                                                                                                            })
                                                                                                        );
                                                                                                    case 4:
                                                                                                        return e.abrupt('return', t);
                                                                                                    case 5:
                                                                                                    case 'end':
                                                                                                        return e.stop();
                                                                                                }
                                                                                        }, e);
                                                                                    })
                                                                                );
                                                                                return function (t) {
                                                                                    return e.apply(this, arguments);
                                                                                };
                                                                            })()
                                                                        )
                                                                    );
                                                                })),
                                                                (e.prev = 7),
                                                                a.is.arr(t)
                                                                    ? (v = (function () {
                                                                          var e = u(
                                                                              l.mark(function e(t) {
                                                                                  var n, r, i;
                                                                                  return l.wrap(function (e) {
                                                                                      for (;;)
                                                                                          switch ((e.prev = e.next)) {
                                                                                              case 0:
                                                                                                  n = X(t);
                                                                                              case 1:
                                                                                                  if ((r = n()).done) {
                                                                                                      e.next = 7;
                                                                                                      break;
                                                                                                  }
                                                                                                  return (i = r.value), (e.next = 5), S(i);
                                                                                              case 5:
                                                                                                  e.next = 1;
                                                                                                  break;
                                                                                              case 7:
                                                                                              case 'end':
                                                                                                  return e.stop();
                                                                                          }
                                                                                  }, e);
                                                                              })
                                                                          );
                                                                          return function (t) {
                                                                              return e.apply(this, arguments);
                                                                          };
                                                                      })()(t))
                                                                    : a.is.fun(t) && (v = Promise.resolve(t(S, i.stop.bind(i)))),
                                                                (e.next = 11),
                                                                Promise.all([v.then(p), I])
                                                            );
                                                        case 11:
                                                            (A = q(i, !0)), (e.next = 21);
                                                            break;
                                                        case 14:
                                                            if (((e.prev = 14), (e.t0 = e.catch(7)), !(e.t0 instanceof er))) {
                                                                e.next = 20;
                                                                break;
                                                            }
                                                            (A = e.t0.result), (e.next = 21);
                                                            break;
                                                        case 20:
                                                            throw e.t0;
                                                        case 21:
                                                            return (e.prev = 21), s == r.asyncId && ((r.asyncId = c), (r.asyncTo = c ? _ : void 0), (r.promise = c ? f : void 0)), e.finish(21);
                                                        case 24:
                                                            return (
                                                                a.is.fun(d) &&
                                                                    E.batchedUpdates(function () {
                                                                        d(A);
                                                                    }),
                                                                e.abrupt('return', A)
                                                            );
                                                        case 26:
                                                        case 'end':
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            null,
                                            [[7, 14, 21, 24]]
                                        );
                                    })
                                )())
                            );
                        case 8:
                        case 'end':
                            return e.stop();
                    }
            }, e);
        })
    )).apply(this, arguments);
}
function en(e, t) {
    (e.cancelId = t), (e.asyncId = e.asyncTo = e.promise = void 0);
}
var er = (function (e) {
        function t() {
            var t;
            return ((t = e.call(this, 'An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.') || this).result = void 0), t;
        }
        return d(t, e), t;
    })(h(Error)),
    ei = function (e) {
        return e instanceof eo;
    },
    ea = 1,
    eo = (function (e) {
        function t() {
            for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
            return ((t = e.call.apply(e, [this].concat(r)) || this).id = ea++), (t.key = void 0), (t._priority = 0), (t._children = new Set()), t;
        }
        d(t, e);
        var n = t.prototype;
        return (
            (n.get = function () {
                var e = _.getAnimated(this);
                return e && e.getValue();
            }),
            (n.to = function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return E.to(this, t);
            }),
            (n.interpolate = function () {
                p.deprecateInterpolate();
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return E.to(this, t);
            }),
            (n.addChild = function (e) {
                !this._children.size && this._attach(), this._children.add(e);
            }),
            (n.removeChild = function (e) {
                this._children.delete(e), !this._children.size && this._detach();
            }),
            (n.onParentChange = function (e) {
                var t = e.type;
                this.idle ? 'start' == t && (this._reset(), this._start()) : 'reset' == t && this._reset();
            }),
            (n._attach = function () {}),
            (n._detach = function () {}),
            (n._reset = function () {
                this._emit({
                    type: 'reset',
                    parent: this
                });
            }),
            (n._start = function () {
                this._emit({
                    type: 'start',
                    parent: this
                });
            }),
            (n._onChange = function (e, t) {
                void 0 === t && (t = !1),
                    this._emit({
                        type: 'change',
                        parent: this,
                        value: e,
                        idle: t
                    });
            }),
            (n._onPriorityChange = function (e) {
                !this.idle && E.frameLoop.start(this),
                    this._emit({
                        type: 'priority',
                        parent: this,
                        priority: e
                    });
            }),
            (n._emit = function (e) {
                a.each(Array.from(this._children), function (t) {
                    t.onParentChange(e);
                });
            }),
            c(t, [
                {
                    key: 'priority',
                    get: function () {
                        return this._priority;
                    },
                    set: function (e) {
                        this._priority != e && ((this._priority = e), this._onPriorityChange(e));
                    }
                }
            ]),
            t
        );
    })(a.FluidValue),
    es = 'CREATED',
    el = 'IDLE',
    eu = 'ACTIVE',
    ec = 'PAUSED',
    ed = 'DISPOSED',
    e_ = (function (e) {
        function t(t, n) {
            var r;
            if (
                (((r = e.call(this) || this).key = void 0),
                (r.animation = new b()),
                (r.queue = void 0),
                (r._phase = es),
                (r._state = {
                    pauseQueue: new Set(),
                    resumeQueue: new Set()
                }),
                (r._defaultProps = {}),
                (r._lastCallId = 0),
                (r._lastToId = 0),
                !a.is.und(t) || !a.is.und(n))
            ) {
                var i = a.is.obj(t) ? o({}, t) : o(o({}, n), {}, { from: t });
                (i.default = !0), r.start(i);
            }
            return r;
        }
        d(t, e);
        var n = t.prototype;
        return (
            (n.advance = function (e) {
                var t = this,
                    n = !0,
                    r = !1,
                    i = this.animation,
                    o = i.config,
                    s = i.toValues,
                    l = _.getPayload(i.to);
                if (!l) {
                    var u = a.getFluidConfig(i.to);
                    u && (s = a.toArray(u.get()));
                }
                return (
                    i.values.forEach(function (u, c) {
                        if (!u.done) {
                            var d = l ? l[c].lastPosition : s[c],
                                _ = i.immediate,
                                E = d;
                            if (!_) {
                                if (((E = u.lastPosition), o.tension <= 0)) {
                                    u.done = !0;
                                    return;
                                }
                                var f = (u.elapsedTime += e),
                                    h = i.fromValues[c],
                                    p = null != u.v0 ? u.v0 : (u.v0 = a.is.arr(o.velocity) ? o.velocity[c] : o.velocity);
                                if (a.is.und(o.duration)) {
                                    if (o.decay) {
                                        var m = !0 === o.decay ? 0.998 : o.decay,
                                            I = Math.exp(-(1 - m) * f);
                                        (E = h + (p / (1 - m)) * (1 - I)), (_ = 0.1 > Math.abs(u.lastPosition - E)), (T = p * I);
                                    } else {
                                        T = null == u.lastVelocity ? p : u.lastVelocity;
                                        for (var T, g = o.precision || (h == d ? 0.005 : Math.min(1, 0.001 * Math.abs(d - h))), S = o.restVelocity || g / 10, A = o.clamp ? 0 : o.bounce, v = !a.is.und(A), N = h == d ? u.v0 > 0 : h < d, O = !1, R = 1, C = Math.ceil(e / 1), y = 0; y < C && !(!(Math.abs(T) > S) && (_ = Math.abs(d - E) <= g)); ++y) {
                                            v && (O = E == d || E > d == N) && ((T = -T * A), (E = d));
                                            var b = (-(0.000001 * o.tension) * (E - d) + -(0.001 * o.friction) * T) / o.mass;
                                            (T += b * R), (E += T * R);
                                        }
                                    }
                                } else {
                                    var L = o.progress || 0;
                                    o.duration <= 0 ? (L = 1) : (L += (1 - L) * Math.min(1, f / o.duration)), (T = ((E = h + o.easing(L) * (d - h)) - u.lastPosition) / e), (_ = 1 == L);
                                }
                                (u.lastVelocity = T), Number.isNaN(E) && (console.warn('Got NaN while animating:', t), (_ = !0));
                            }
                            l && !l[c].done && (_ = !1), _ ? (u.done = !0) : (n = !1), u.setValue(E, o.round) && (r = !0);
                        }
                    }),
                    n ? this.finish() : r && this._onChange(this.get()),
                    n
                );
            }),
            (n.is = function (e) {
                return this._phase == e;
            }),
            (n.set = function (e) {
                var t = this;
                return (
                    E.batchedUpdates(function () {
                        if ((t._focus(e), t._set(e) && !t.is(eu))) return t._onChange(t.get(), !0);
                        t._stop();
                    }),
                    this
                );
            }),
            (n.pause = function () {
                eE(this, 'pause'),
                    !this.is(ec) &&
                        ((this._phase = ec),
                        a.flush(this._state.pauseQueue, function (e) {
                            return e();
                        }));
            }),
            (n.resume = function () {
                eE(this, 'resume'),
                    this.is(ec) &&
                        (this._start(),
                        a.flush(this._state.resumeQueue, function (e) {
                            return e();
                        }));
            }),
            (n.finish = function (e) {
                var t = this;
                if ((this.resume(), this.is(eu))) {
                    var n = this.animation;
                    !n.config.decay && a.is.und(e) && (e = n.to),
                        !a.is.und(e) && this._set(e),
                        E.batchedUpdates(function () {
                            !n.changed && ((n.changed = !0), n.onStart && n.onStart(t)), t._stop();
                        });
                }
                return this;
            }),
            (n.update = function (e) {
                return eE(this, 'update'), (this.queue || (this.queue = [])).push(e), this;
            }),
            (n.start = (function () {
                var e = u(
                    l.mark(function e(t, n) {
                        var r,
                            i,
                            s = this;
                        return l.wrap(
                            function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (
                                                eE(this, 'start'),
                                                a.is.und(t) ? ((r = this.queue || []), (this.queue = [])) : (r = [a.is.obj(t) ? t : o(o({}, n), {}, { to: t })]),
                                                (e.next = 4),
                                                Promise.all(
                                                    r.map(function (e) {
                                                        return s._update(e);
                                                    })
                                                )
                                            );
                                        case 4:
                                            return (i = e.sent), e.abrupt('return', K(this, i));
                                        case 6:
                                        case 'end':
                                            return e.stop();
                                    }
                            },
                            e,
                            this
                        );
                    })
                );
                return function t(t, n) {
                    return e.apply(this, arguments);
                };
            })()),
            (n.stop = function (e) {
                var t = this;
                return (
                    !this.is(ed) &&
                        (en(this._state, this._lastCallId),
                        this._focus(this.get()),
                        E.batchedUpdates(function () {
                            return t._stop(e);
                        })),
                    this
                );
            }),
            (n.reset = function () {
                this._update({ reset: !0 });
            }),
            (n.dispose = function () {
                !this.is(ed) && (this.animation && (this.animation.onRest = []), this.stop(), (this._phase = ed));
            }),
            (n.onParentChange = function (t) {
                e.prototype.onParentChange.call(this, t), 'change' == t.type ? !this.is(eu) && (this._reset(), !this.is(ec) && this._start()) : 'priority' == t.type && (this.priority = t.priority + 1);
            }),
            (n._prepareNode = function (e) {
                var t = e.to,
                    n = e.from,
                    r = e.reverse,
                    i = this.key || '';
                t = !a.is.obj(t) || a.getFluidConfig(t) ? t : t[i];
                var o = {
                    to: t,
                    from: (n = !a.is.obj(n) || a.getFluidConfig(n) ? n : n[i])
                };
                if (this.is(es)) {
                    if (r) {
                        var s = [n, t];
                        (t = s[0]), (n = s[1]);
                    }
                    n = a.getFluidValue(n);
                    var l = this._updateNode(a.is.und(n) ? a.getFluidValue(t) : n);
                    l && !a.is.und(n) && l.setValue(n);
                }
                return o;
            }),
            (n._updateNode = function (e) {
                var t = _.getAnimated(this);
                if (!a.is.und(e)) {
                    var n = this._getNodeType(e);
                    (!t || t.constructor !== n) && _.setAnimated(this, (t = n.create(e)));
                }
                return t;
            }),
            (n._getNodeType = function (e) {
                var t = _.getAnimated(e);
                return t ? t.constructor : a.is.arr(e) ? _.AnimatedArray : a.isAnimatedString(e) ? _.AnimatedString : _.AnimatedValue;
            }),
            (n._update = function (e, t) {
                var n = this,
                    r = this._defaultProps,
                    i = function (t) {
                        var n = k(e, t);
                        !a.is.und(n) && (r[t] = n), r[t] && (e[t] = r[t]);
                    };
                i('cancel'), i('pause');
                var o = this._prepareNode(e);
                return W(++this._lastCallId, {
                    key: this.key,
                    props: e,
                    state: this._state,
                    actions: {
                        pause: this.pause.bind(this),
                        resume: this.resume.bind(this),
                        start: this._merge.bind(this, o)
                    }
                }).then(function (r) {
                    if (e.loop && r.finished && !(t && r.noop)) {
                        var i = ep(e);
                        if (i) return n._update(i, !0);
                    }
                    return r;
                });
            }),
            (n._merge = function (e, t, n) {
                if (t.cancel) return this.stop(!0), n(Q(this));
                var r = this.key,
                    i = this.animation,
                    o = this._defaultProps,
                    s = !a.is.und(e.to),
                    l = !a.is.und(e.from);
                if (s || l) {
                    if (!(t.callId > this._lastToId)) return n(Q(this));
                    this._lastToId = t.callId;
                }
                var u = function (e) {
                        return a.is.und(t[e]) ? o[e] : t[e];
                    },
                    c = ef(u('onDelayEnd'), r);
                c && c(t, this), t.default && F(o, t, ['pause', 'cancel']);
                var d = i.to,
                    f = i.from,
                    h = e.to,
                    p = void 0 === h ? d : h,
                    m = e.from,
                    I = void 0 === m ? f : m;
                if ((l && !s && (p = I), t.reverse)) {
                    var T = [I, p];
                    (p = T[0]), (I = T[1]);
                }
                var g = !a.isEqual(I, f);
                g && (i.from = I);
                var S = !a.isEqual(p, d);
                S && this._focus(p);
                var A = a.getFluidConfig(p),
                    v = a.getFluidConfig(I);
                v && (I = v.get());
                var N = a.is.arr(t.to) || a.is.fun(t.to),
                    O = i.config,
                    C = O.decay,
                    y = O.velocity;
                t.config && !N && R(O, U(t.config, r), t.config !== o.config ? U(o.config, r) : void 0);
                var b = _.getAnimated(this);
                if (!b || a.is.und(p)) return n(q(this, !0));
                var L = a.is.und(t.reset) ? l && !t.default : !a.is.und(I) && w(t.reset, r),
                    D = L ? I : this.get(),
                    M = j(p),
                    P = a.is.num(M) || a.is.arr(M) || a.isAnimatedString(M),
                    x = !N && (!P || w(o.immediate || t.immediate, r));
                if (S) {
                    if (x) b = this._updateNode(M);
                    else {
                        var G = this._getNodeType(p);
                        if (G !== b.constructor) throw Error('Cannot animate between ' + b.constructor.name + ' and ' + G.name + ', as the "to" prop suggests');
                    }
                }
                var k = b.constructor,
                    B = !!A,
                    Z = !1;
                if (!B) {
                    var V = L || (this.is(es) && g);
                    (S || V) && (B = !(Z = a.isEqual(j(D), M))), (!a.isEqual(O.decay, C) || !a.isEqual(O.velocity, y)) && (B = !0);
                }
                if ((Z && this.is(eu) && (i.changed && !L ? (B = !0) : !B && this._stop()), !N)) {
                    (B || a.getFluidConfig(d)) && ((i.values = b.getPayload()), (i.toValues = A ? null : k == _.AnimatedString ? [1] : a.toArray(M))), (i.immediate = x), (i.onStart = ef(u('onStart'), r)), (i.onChange = ef(u('onChange'), r));
                    var H = i.onRest,
                        Y = L && !t.onRest ? H[0] || a.noop : eh(ef(u('onRest'), r), this);
                    if (B) {
                        i.onRest = [Y, eh(n, this)];
                        var W = L ? 0 : 1;
                        W < H.length &&
                            E.batchedUpdates(function () {
                                for (; W < H.length; W++) H[W]();
                            });
                    } else (L || t.onRest) && (i.onRest[0] = Y);
                }
                var K = ef(u('onProps'), r);
                if ((K && K(t, this), L && b.setValue(D), N)) n(ee(t.to, t, this._state, this));
                else if (B) L && (this._phase = el), this._reset(), this._start();
                else if (this.is(eu) && !S) i.onRest.push(eh(n, this));
                else {
                    let e = z(this, D),
                        t = ef(u('onNoopRest'), r);
                    null != t && t(e), n(e);
                }
            }),
            (n._focus = function (e) {
                var t = this.animation;
                if (e !== t.to) {
                    var n = a.getFluidConfig(t.to);
                    n && n.removeChild(this), (t.to = e);
                    var r = 0;
                    (n = a.getFluidConfig(e)) && (n.addChild(this), ei(e) && (r = (e.priority || 0) + 1)), (this.priority = r);
                }
            }),
            (n._set = function (e) {
                var t = a.getFluidConfig(e);
                t && (e = t.get());
                var n = _.getAnimated(this),
                    r = n && n.getValue();
                return n ? n.setValue(e) : this._updateNode(e), !a.isEqual(e, r);
            }),
            (n._onChange = function (t, n) {
                void 0 === n && (n = !1);
                var r = this.animation;
                !r.changed && !n && ((r.changed = !0), r.onStart && r.onStart(this)), r.onChange && r.onChange(t, this), e.prototype._onChange.call(this, t, n);
            }),
            (n._reset = function () {
                var t = this.animation;
                _.getAnimated(this).reset(t.to),
                    !this.is(eu) && (t.changed = !1),
                    !t.immediate &&
                        (t.fromValues = t.values.map(function (e) {
                            return e.lastPosition;
                        })),
                    e.prototype._reset.call(this);
            }),
            (n._start = function () {
                !this.is(eu) && ((this._phase = eu), e.prototype._start.call(this), E.skipAnimation ? this.finish() : E.frameLoop.start(this));
            }),
            (n._stop = function (e) {
                if ((this.resume(), this.is(eu))) {
                    (this._phase = el), this._onChange(this.get(), !0);
                    var t = this.animation;
                    a.each(t.values, function (e) {
                        e.done = !0;
                    });
                    var n = t.onRest;
                    n.length &&
                        ((t.onRest = [t.toValues ? a.noop : n[0]]),
                        !t.changed && (n[0] = a.noop),
                        a.each(n, function (t) {
                            return t(e);
                        }));
                }
            }),
            c(t, [
                {
                    key: 'idle',
                    get: function () {
                        return !this.is(eu) && !this._state.asyncTo;
                    }
                },
                {
                    key: 'goal',
                    get: function () {
                        return a.getFluidValue(this.animation.to);
                    }
                },
                {
                    key: 'velocity',
                    get: function () {
                        var e = _.getAnimated(this);
                        return e instanceof _.AnimatedValue
                            ? e.lastVelocity || 0
                            : e.getPayload().map(function (e) {
                                  return e.lastVelocity || 0;
                              });
                    }
                }
            ]),
            t
        );
    })(eo);
function eE(e, t) {
    if (e.is(ed)) throw Error('Cannot call "' + t + '" of disposed "' + e.constructor.name + '" object');
}
function ef(e, t) {
    return a.is.fun(e) ? e : t && e ? e[t] : void 0;
}
var eh = function (e, t) {
    var n = t.animation.to;
    return e
        ? function (r) {
              if (r) e(Q(t));
              else {
                  var i = j(n),
                      o = j(t.get());
                  e(q(t, a.isEqual(o, i)));
              }
          }
        : a.noop;
};
function ep(e, t, n) {
    void 0 === t && (t = e.loop), void 0 === n && (n = e.to);
    var r = U(t);
    if (r) {
        var i = !0 !== r && Y(r),
            s = (i || e).reverse,
            l = !i || i.reset;
        return em(
            o(
                o({}, e),
                {},
                {
                    loop: t,
                    default: !1,
                    to: !s || a.is.arr(n) || a.is.fun(n) ? n : void 0,
                    from: l ? e.from : void 0,
                    reset: l
                },
                i
            )
        );
    }
}
function em(e) {
    var t = (e = Y(e)),
        n = t.to,
        r = t.from,
        i = new Set();
    return r ? eT(r, i) : delete e.from, a.is.obj(n) ? eT(n, i) : !n && delete e.to, (e.keys = i.size ? Array.from(i) : null), e;
}
function eI(e) {
    var t = em(e);
    return a.is.und(t.default) && (t.default = B(t, [!0 === t.immediate && 'immediate'])), t;
}
function eT(e, t) {
    a.each(e, function (e, n) {
        return null != e && t.add(n);
    });
}
var eg = ['onStart', 'onChange', 'onRest'],
    eS = 1,
    eA = (function () {
        function e(e, t) {
            (this.id = eS++),
                (this.springs = {}),
                (this.queue = []),
                (this._flush = void 0),
                (this._initialProps = void 0),
                (this._phase = es),
                (this._lastAsyncId = 0),
                (this._active = new Set()),
                (this._state = {
                    pauseQueue: new Set(),
                    resumeQueue: new Set()
                }),
                (this._events = {
                    onStart: new Set(),
                    onChange: new Set(),
                    onRest: new Map()
                }),
                (this._onFrame = this._onFrame.bind(this)),
                t && (this._flush = t),
                e && this.start(e);
        }
        var t = e.prototype;
        return (
            (t.is = function (e) {
                return this._phase == e;
            }),
            (t.get = function () {
                var e = {};
                return (
                    this.each(function (t, n) {
                        return (e[n] = t.get());
                    }),
                    e
                );
            }),
            (t.update = function (e) {
                return e && this.queue.push(em(e)), this;
            }),
            (t.start = function (e) {
                var t = e ? a.toArray(e).map(em) : this.queue;
                return (!e && (this.queue = []), this._flush) ? this._flush(this, t) : (eb(this, t), ev(this, t));
            }),
            (t.stop = function (e) {
                if (a.is.und(e))
                    this.each(function (e) {
                        return e.stop();
                    }),
                        en(this._state, this._lastAsyncId);
                else {
                    var t = this.springs;
                    a.each(a.toArray(e), function (e) {
                        return t[e].stop();
                    });
                }
                return this;
            }),
            (t.pause = function (e) {
                if (a.is.und(e))
                    this.each(function (e) {
                        return e.pause();
                    });
                else {
                    var t = this.springs;
                    a.each(a.toArray(e), function (e) {
                        return t[e].pause();
                    });
                }
                return this;
            }),
            (t.resume = function (e) {
                if (a.is.und(e))
                    this.each(function (e) {
                        return e.resume();
                    });
                else {
                    var t = this.springs;
                    a.each(a.toArray(e), function (e) {
                        return t[e].resume();
                    });
                }
                return this;
            }),
            (t.reset = function () {
                return (
                    this.each(function (e) {
                        return e.reset();
                    }),
                    this
                );
            }),
            (t.each = function (e) {
                a.each(this.springs, e);
            }),
            (t.dispose = function () {
                (this._state.asyncTo = void 0),
                    this.each(function (e) {
                        return e.dispose();
                    }),
                    (this.springs = {});
            }),
            (t._onFrame = function () {
                var e = this,
                    t = this._events,
                    n = t.onStart,
                    r = t.onChange,
                    i = t.onRest,
                    o = this._active.size > 0;
                o &&
                    this._phase != eu &&
                    ((this._phase = eu),
                    a.flush(n, function (t) {
                        return t(e);
                    }));
                var s = (r.size || (!o && i.size)) && this.get();
                a.flush(r, function (e) {
                    return e(s);
                }),
                    !o &&
                        ((this._phase = el),
                        a.flush(i, function (e) {
                            var t = e[0],
                                n = e[1];
                            (n.value = s), t(n);
                        }));
            }),
            (t.onParentChange = function (e) {
                'change' == e.type && (this._active[e.idle ? 'delete' : 'add'](e.parent), E.frameLoop.onFrame(this._onFrame));
            }),
            c(e, [
                {
                    key: 'idle',
                    get: function () {
                        return (
                            !this._state.asyncTo &&
                            Object.values(this.springs).every(function (e) {
                                return e.idle;
                            })
                        );
                    }
                }
            ]),
            e
        );
    })();
function ev(e, t) {
    return Promise.all(
        t.map(function (t) {
            return eN(e, t);
        })
    ).then(function (t) {
        return K(e, t);
    });
}
function eN(e, t, n) {
    var r = t.to,
        i = t.loop,
        o = t.onRest;
    i && (t.loop = !1);
    var s = a.is.arr(r) || a.is.fun(r) ? r : void 0;
    s
        ? ((t.to = void 0), (t.onRest = void 0))
        : a.each(eg, function (n) {
              var r = t[n];
              if (a.is.fun(r)) {
                  var i = e._events[n];
                  i instanceof Set
                      ? (t[n] = function () {
                            return i.add(r);
                        })
                      : (t[n] = function (e) {
                            var t = e.finished,
                                n = e.cancelled,
                                a = i.get(r);
                            a
                                ? (!t && (a.finished = !1), n && (a.cancelled = !0))
                                : i.set(r, {
                                      value: null,
                                      finished: t,
                                      cancelled: n
                                  });
                        });
              }
          });
    var l = (t.keys || Object.keys(e.springs)).map(function (n) {
            return e.springs[n].start(t);
        }),
        u = e._state;
    return (
        s
            ? l.push(
                  W(++e._lastAsyncId, {
                      props: t,
                      state: u,
                      actions: {
                          pause: a.noop,
                          resume: a.noop,
                          start: function (t, n) {
                              (t.onRest = o), t.cancel ? G(t, 'cancel') && en(u, t.callId) : n(ee(s, t, u, e));
                          }
                      }
                  })
              )
            : !t.keys && !0 === t.cancel && en(u, e._lastAsyncId),
        Promise.all(l).then(function (a) {
            var o = K(e, a);
            if (i && o.finished && !(n && o.noop)) {
                var s = ep(t, i, r);
                if (s) return eb(e, [s]), eN(e, s, !0);
            }
            return o;
        })
    );
}
function eO(e, t) {
    var n = o({}, e.springs);
    return (
        t &&
            a.each(a.toArray(t), function (e) {
                a.is.und(e.keys) && (e = em(e)),
                    !a.is.obj(e.to) && (e = o(o({}, e), {}, { to: void 0 })),
                    ey(n, e, function (e) {
                        return eC(e);
                    });
            }),
        n
    );
}
function eR(e, t) {
    a.each(t, function (t, n) {
        !e.springs[n] && ((e.springs[n] = t), t.addChild(e));
    });
}
function eC(e, t) {
    var n = new e_();
    return (n.key = e), t && n.addChild(t), n;
}
function ey(e, t, n) {
    t.keys &&
        a.each(t.keys, function (r) {
            (e[r] || (e[r] = n(r)))._prepareNode(t);
        });
}
function eb(e, t) {
    a.each(t, function (t) {
        ey(e.springs, t, function (t) {
            return eC(t, e);
        });
    });
}
var eL = s.createContext({}),
    eD = function (e) {
        var t = e.children,
            n = m(e, ['children']),
            r = s.useContext(eL);
        n = P(
            function () {
                return o(o({}, r), n);
            },
            [r, n.pause, n.cancel, n.immediate, n.config]
        );
        var i = eL.Provider;
        return s.createElement(i, { value: n }, t);
    };
(eD.Provider = eL.Provider), (eD.Consumer = eL.Consumer);
var eM = function () {
        return s.useContext(eL);
    },
    eP = {
        create: function (e) {
            return {
                get controllers() {
                    return e();
                },
                update: function (t) {
                    return (
                        a.each(e(), function (e, n) {
                            e.update(x(t, n, e));
                        }),
                        this
                    );
                },
                start: function (t) {
                    return u(
                        l.mark(function n() {
                            var r;
                            return l.wrap(function (n) {
                                for (;;)
                                    switch ((n.prev = n.next)) {
                                        case 0:
                                            return (
                                                (n.next = 2),
                                                Promise.all(
                                                    e().map(function (e, n) {
                                                        var r = x(t, n, e);
                                                        return e.start(r);
                                                    })
                                                )
                                            );
                                        case 2:
                                            return (
                                                (r = n.sent),
                                                n.abrupt('return', {
                                                    value: r.map(function (e) {
                                                        return e.value;
                                                    }),
                                                    finished: r.every(function (e) {
                                                        return e.finished;
                                                    })
                                                })
                                            );
                                        case 4:
                                        case 'end':
                                            return n.stop();
                                    }
                            }, n);
                        })
                    )();
                },
                stop: function (t) {
                    return a.each(e(), function (e) {
                        return e.stop(t);
                    });
                },
                pause: function (t) {
                    return a.each(e(), function (e) {
                        return e.pause(t);
                    });
                },
                resume: function (t) {
                    return a.each(e(), function (e) {
                        return e.resume(t);
                    });
                }
            };
        }
    };
function eU(e, t, n) {
    var r = a.is.fun(t) && t;
    r && !n && (n = []);
    var l = s.useRef(0),
        u = a.useForceUpdate(),
        c = s.useState(function () {
            return {
                ctrls: [],
                queue: [],
                flush: function (e, t) {
                    var n = eO(e, t);
                    return !(l.current > 0) ||
                        c.queue.length ||
                        Object.keys(n).some(function (t) {
                            return !e.springs[t];
                        })
                        ? new Promise(function (r) {
                              eR(e, n),
                                  c.queue.push(function () {
                                      r(ev(e, t));
                                  }),
                                  u();
                          })
                        : ev(e, t);
                }
            };
        })[0],
        d = s.useRef(),
        _ = [].concat(c.ctrls),
        E = [],
        f = a.usePrev(e) || 0,
        h = _.slice(e, f);
    function p(e, n) {
        for (var i = e; i < n; i++) {
            var a = _[i] || (_[i] = new eA(null, c.flush)),
                o = r ? r(i, a) : t[i];
            o && ((o = E[i] = eI(o)), 0 == i && ((d.current = o.ref), (o.ref = void 0)));
        }
    }
    P(
        function () {
            (_.length = e), p(f, e);
        },
        [e]
    ),
        P(function () {
            p(0, Math.min(f, e));
        }, n);
    var m = s.useMemo(function () {
            return eP.create(function () {
                return c.ctrls;
            });
        }, []),
        I = _.map(function (e, t) {
            return eO(e, E[t]);
        }),
        T = eM();
    i.useLayoutEffect(function () {
        l.current++, (c.ctrls = _), d.current && (d.current.current = m);
        var e = c.queue;
        e.length &&
            ((c.queue = []),
            a.each(e, function (e) {
                return e();
            })),
            a.each(h, function (e) {
                return e.dispose();
            }),
            a.each(_, function (e, t) {
                eR(e, I[t]), e.start({ default: T });
                var n = E[t];
                n && (d.current ? e.queue.push(n) : e.start(n));
            });
    }),
        a.useOnce(function () {
            return function () {
                a.each(c.ctrls, function (e) {
                    return e.dispose();
                });
            };
        });
    var g = I.map(function (e) {
        return o({}, e);
    });
    return r || 3 == arguments.length ? [g, m.start, m.stop] : g;
}
function ew(e, t) {
    var n = a.is.fun(e),
        r = eU(1, n ? e : [e], n ? t || [] : t),
        i = r[0][0],
        o = r[1],
        s = r[2];
    return n || 2 == arguments.length ? [i, o, s] : i;
}
function ex(e, t, n) {
    var r = a.is.fun(t) && t;
    r && !n && (n = []);
    var o = [],
        s = eU(
            e,
            function (e, n) {
                return (o[e] = n), x(t, e, n);
            },
            n || [{}]
        );
    if (
        (i.useLayoutEffect(function () {
            for (var e = a.is.obj(t) && t.reverse, n = 0; n < o.length; n++) {
                var r = o[n + (e ? 1 : -1)];
                r && o[n].update({ to: r.springs }).start();
            }
        }, n),
        r || 3 == arguments.length)
    ) {
        var l = s[1];
        return (
            (s[1] = f.useCallbackOne(function (e) {
                var t = a.is.obj(e) && e.reverse;
                return l(function (n, r) {
                    var i = x(e, n, r),
                        a = o[n + (t ? 1 : -1)];
                    return a && (i.to = a.springs), i;
                });
            }, n)),
            s
        );
    }
    return s[0];
}
var eG = 'mount',
    ek = 'enter',
    eB = 'update',
    eF = 'leave';
function eZ(e, t, n) {
    var r = t.ref,
        l = t.reset,
        u = t.sort,
        c = t.trail,
        d = void 0 === c ? 0 : c,
        _ = t.expires,
        E = void 0 === _ || _,
        f = a.toArray(e),
        h = [],
        p = eV(f, t),
        m = s.useRef(null),
        I = l ? null : m.current;
    i.useLayoutEffect(function () {
        m.current = h;
    }),
        a.useOnce(function () {
            return function () {
                return a.each(m.current, function (e) {
                    e.expired && clearTimeout(e.expirationId), e.ctrl.dispose();
                });
            };
        });
    var T = [];
    if (
        (I &&
            a.each(I, function (e, t) {
                e.expired ? clearTimeout(e.expirationId) : ~(t = T[t] = p.indexOf(e.key)) && (h[t] = e);
            }),
        a.each(f, function (e, t) {
            h[t] ||
                (h[t] = {
                    key: p[t],
                    item: e,
                    phase: eG,
                    ctrl: new eA()
                });
        }),
        T.length)
    ) {
        var g = -1;
        a.each(T, function (e, n) {
            var r = I[n];
            ~e ? ((g = h.indexOf(r)), (h[g] = o(o({}, r), {}, { item: f[e] }))) : t.leave && h.splice(++g, 0, r);
        });
    }
    a.is.fun(u) &&
        h.sort(function (e, t) {
            return u(e.item, t.item);
        });
    var S = -d,
        A = a.useForceUpdate(),
        v = B(t),
        N = new Map();
    a.each(h, function (e, n) {
        var r,
            i,
            s = e.key,
            l = e.phase;
        if (l == eG) (r = t.enter), (i = ek);
        else {
            var u = 0 > p.indexOf(s);
            if (l != eF) {
                if (u) (r = t.leave), (i = eF);
                else {
                    if (!(r = t.update)) return;
                    i = eB;
                }
            } else {
                if (u) return;
                (r = t.enter), (i = ek);
            }
        }
        if (((r = U(r, e.item, n)), !(r = a.is.obj(r) ? Y(r) : { to: r }).config)) {
            var c = t.config || v.config;
            r.config = U(c, e.item, n);
        }
        var _ = o(
            o({}, v),
            {},
            {
                delay: (S += d),
                reset: !1
            },
            r
        );
        if (i == ek && a.is.und(_.from)) {
            var f = a.is.und(t.initial) || I ? t.from : t.initial;
            _.from = U(f, e.item, n);
        }
        var h = _.onRest;
        _.onRest = _.onNoopRest = function (e) {
            var t = m.current,
                n = t.find(function (e) {
                    return e.key === s;
                });
            if (n) {
                if ((a.is.fun(h) && !0 !== e.noop && h(e, n), e.cancelled && n.phase != eB)) {
                    n.phase = l;
                    return;
                }
                if (n.ctrl.idle) {
                    var r = t.every(function (e) {
                        return e.ctrl.idle;
                    });
                    if (n.phase == eF) {
                        var i = U(E, n.item);
                        if (!1 !== i) {
                            var o = !0 === i ? 0 : i;
                            if (((n.expired = !0), !r && o > 0)) {
                                o <= 2147483647 && (n.expirationId = setTimeout(A, o));
                                return;
                            }
                        }
                    }
                    r &&
                        t.some(function (e) {
                            return e.expired;
                        }) &&
                        A();
                }
            }
        };
        var T = eO(e.ctrl, _);
        N.set(e, {
            phase: i,
            springs: T,
            payload: _
        });
    });
    var O = eM();
    i.useLayoutEffect(
        function () {
            a.each(h, function (e) {
                e.ctrl.start({ default: O });
            });
        },
        [O]
    );
    var R = s.useMemo(function () {
        return eP.create(function () {
            return m.current.map(function (e) {
                return e.ctrl;
            });
        });
    }, []);
    s.useImperativeHandle(r, function () {
        return R;
    }),
        i.useLayoutEffect(
            function () {
                a.each(N, function (e, t) {
                    var n = e.phase,
                        i = e.springs,
                        a = e.payload;
                    eR(t.ctrl, i), !O.cancel && ((t.phase = n), n == ek && t.ctrl.start({ default: O }), t.ctrl[r ? 'update' : 'start'](a));
                });
            },
            l ? void 0 : n
        );
    var C = function (e) {
        return s.createElement(
            s.Fragment,
            null,
            h.map(function (t, n) {
                var r = e(o({}, (N.get(t) || t.ctrl).springs), t.item, t, n);
                return r && r.type
                    ? s.createElement(
                          r.type,
                          o({}, r.props, {
                              key: a.is.str(t.key) || a.is.num(t.key) ? t.key : t.ctrl.id,
                              ref: r.ref
                          })
                      )
                    : r;
            })
        );
    };
    return 3 == arguments.length ? [C, R.start, R.stop] : C;
}
function eV(e, t) {
    var n = t.key,
        r = t.keys,
        i = void 0 === r ? n : r;
    return a.is.und(i) ? e : a.is.fun(i) ? e.map(i) : a.toArray(i);
}
function eH(e) {
    return (0, e.children)(ew(m(e, ['children'])));
}
function eY(e) {
    var t = e.items,
        n = e.children,
        r = m(e, ['items', 'children']),
        i = ex(t.length, r);
    return t.map(function (e, t) {
        var r = n(e, t);
        return a.is.fun(r) ? r(i[t]) : r;
    });
}
function ej(e) {
    var t = e.items,
        n = e.children,
        r = m(e, ['items', 'children']);
    return s.createElement(s.Fragment, null, eZ(t, r)(n));
}
var eW = (function (e) {
        function t(t, n) {
            ((r = e.call(this) || this).source = t), (r.key = void 0), (r.idle = !0), (r.calc = void 0), (r.calc = a.createInterpolator.apply(void 0, n));
            var r,
                i = r._get(),
                o = a.is.arr(i) ? _.AnimatedArray : _.AnimatedValue;
            return _.setAnimated(I(r), o.create(i)), r;
        }
        d(t, e);
        var n = t.prototype;
        return (
            (n.advance = function (e) {
                var t = this._get(),
                    n = this.get();
                !a.isEqual(t, n) && (_.getAnimated(this).setValue(t), this._onChange(t, this.idle));
            }),
            (n._get = function () {
                var e = a.is.arr(this.source)
                    ? this.source.map(function (e) {
                          return e.get();
                      })
                    : a.toArray(this.source.get());
                return this.calc.apply(this, e);
            }),
            (n._reset = function () {
                a.each(_.getPayload(this), function (e) {
                    return e.reset();
                }),
                    e.prototype._reset.call(this);
            }),
            (n._start = function () {
                (this.idle = !1), e.prototype._start.call(this), E.skipAnimation ? ((this.idle = !0), this.advance()) : E.frameLoop.start(this);
            }),
            (n._attach = function () {
                var e = this,
                    t = !0,
                    n = 1;
                a.each(a.toArray(this.source), function (r) {
                    ei(r) && (!r.idle && (t = !1), (n = Math.max(n, r.priority + 1))), r.addChild(e);
                }),
                    (this.priority = n),
                    !t && (this._reset(), this._start());
            }),
            (n._detach = function () {
                var e = this;
                a.each(a.toArray(this.source), function (t) {
                    t.removeChild(e);
                }),
                    (this.idle = !0);
            }),
            (n.onParentChange = function (t) {
                'start' == t.type
                    ? this.advance()
                    : 'change' == t.type
                      ? this.idle
                          ? this.advance()
                          : t.idle &&
                            ((this.idle = a.toArray(this.source).every(function (e) {
                                return !1 !== e.idle;
                            })),
                            this.idle &&
                                (this.advance(),
                                a.each(_.getPayload(this), function (e) {
                                    e.done = !0;
                                })))
                      : 'priority' == t.type &&
                        (this.priority = a.toArray(this.source).reduce(function (e, t) {
                            return Math.max(e, (t.priority || 0) + 1);
                        }, 0)),
                    e.prototype.onParentChange.call(this, t);
            }),
            t
        );
    })(eo),
    eK = function (e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return new eW(e, n);
    },
    ez = function (e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return p.deprecateInterpolate(), new eW(e, n);
    };
a.Globals.assign({
    createStringInterpolator: T.createStringInterpolator,
    to: function (e, t) {
        return new eW(e, t);
    }
});
var eq = function () {
    return a.Globals.frameLoop.advance();
};
Object.keys(g).forEach(function (e) {
    'default' !== e &&
        Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
                return g[e];
            }
        });
}),
    Object.defineProperty(t, 'FrameLoop', {
        enumerable: !0,
        get: function () {
            return a.FrameLoop;
        }
    }),
    Object.defineProperty(t, 'Globals', {
        enumerable: !0,
        get: function () {
            return a.Globals;
        }
    }),
    Object.defineProperty(t, 'createInterpolator', {
        enumerable: !0,
        get: function () {
            return a.createInterpolator;
        }
    }),
    (t.BailSignal = er),
    (t.Controller = eA),
    (t.FrameValue = eo),
    (t.Interpolation = eW),
    (t.Spring = eH),
    (t.SpringContext = eD),
    (t.SpringHandle = eP),
    (t.SpringValue = e_),
    (t.Trail = eY),
    (t.Transition = ej),
    (t.config = A),
    (t.inferTo = Y),
    (t.interpolate = ez),
    (t.to = eK),
    (t.update = eq),
    (t.useChain = S),
    (t.useSpring = ew),
    (t.useSprings = eU),
    (t.useTrail = ex),
    (t.useTransition = eZ);
