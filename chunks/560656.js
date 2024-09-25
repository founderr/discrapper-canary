function r(e) {
    return e && 'object' == typeof e && 'default' in e ? e.default : e;
}
Object.defineProperty(t, '__esModule', { value: !0 });
var i = n(698091),
    a = r(n(624482)),
    o = r(n(102386)),
    s = r(n(248766)),
    l = n(239189),
    u = n(470079),
    c = n(672268),
    d = Symbol.for('Animated:node'),
    _ = function (e) {
        return !!e && e[d] === e;
    },
    E = function (e) {
        return e && e[d];
    },
    f = function (e, t) {
        return i.defineHidden(e, d, t);
    },
    h = function (e) {
        return e && e[d] && e[d].getPayload();
    },
    p = (function () {
        function e() {
            (this.payload = void 0), f(this, this);
        }
        return (
            (e.prototype.getPayload = function () {
                return this.payload || [];
            }),
            e
        );
    })(),
    m = (function (e) {
        function t(t) {
            var n;
            return ((n = e.call(this) || this)._value = t), (n.done = !0), (n.elapsedTime = void 0), (n.lastPosition = void 0), (n.lastVelocity = void 0), (n.v0 = void 0), i.is.num(n._value) && (n.lastPosition = n._value), n;
        }
        a(t, e),
            (t.create = function (e, n) {
                return new t(e);
            });
        var n = t.prototype;
        return (
            (n.getPayload = function () {
                return [this];
            }),
            (n.getValue = function () {
                return this._value;
            }),
            (n.setValue = function (e, t) {
                return i.is.num(e) && ((this.lastPosition = e), t && ((e = Math.round(e / t) * t), this.done && (this.lastPosition = e))), this._value !== e && ((this._value = e), !0);
            }),
            (n.reset = function () {
                var e = this.done;
                (this.done = !1), i.is.num(this._value) && ((this.elapsedTime = 0), (this.lastPosition = this._value), e && (this.lastVelocity = null), (this.v0 = null));
            }),
            t
        );
    })(p),
    I = (function (e) {
        function t(t, n) {
            var r;
            return (
                ((r = e.call(this, 0) || this)._value = void 0),
                (r._string = null),
                (r._toString = void 0),
                (r._toString = i.createInterpolator({
                    output: [t, n]
                })),
                r
            );
        }
        a(t, e),
            (t.create = function (e, n) {
                if ((void 0 === n && (n = e), i.is.str(e) && i.is.str(n))) return new t(e, n);
                throw TypeError('Expected "from" and "to" to be strings');
            });
        var n = t.prototype;
        return (
            (n.getValue = function () {
                var e = this._string;
                return null == e ? (this._string = this._toString(this._value)) : e;
            }),
            (n.setValue = function (t) {
                if (i.is.num(t)) {
                    if (!e.prototype.setValue.call(this, t)) return !1;
                    else this._string = null;
                } else (this._string = t), (this._value = 1);
                return !0;
            }),
            (n.reset = function (t) {
                t &&
                    (this._toString = i.createInterpolator({
                        output: [this.getValue(), t]
                    })),
                    (this._value = 0),
                    e.prototype.reset.call(this);
            }),
            t
        );
    })(m),
    T = { current: null },
    g = (function (e) {
        function t(t) {
            var n;
            return void 0 === t && (t = null), ((n = e.call(this) || this).source = void 0), n.setValue(t), n;
        }
        a(t, e);
        var n = t.prototype;
        return (
            (n.getValue = function (e) {
                if (!this.source) return null;
                var t = {};
                return (
                    i.each(this.source, function (n, r) {
                        if (_(n)) t[r] = n.getValue(e);
                        else {
                            var a = i.getFluidConfig(n);
                            a ? (t[r] = a.get()) : !e && (t[r] = n);
                        }
                    }),
                    t
                );
            }),
            (n.setValue = function (e) {
                (this.source = e), (this.payload = this._makePayload(e));
            }),
            (n.reset = function () {
                this.payload &&
                    i.each(this.payload, function (e) {
                        return e.reset();
                    });
            }),
            (n._makePayload = function (e) {
                if (e) {
                    var t = new Set();
                    return i.each(e, this._addToPayload, t), Array.from(t);
                }
            }),
            (n._addToPayload = function (e) {
                var t = this;
                i.getFluidConfig(e) && T.current && T.current.dependencies.add(e);
                var n = h(e);
                n &&
                    i.each(n, function (e) {
                        return t.add(e);
                    });
            }),
            t
        );
    })(p),
    S = (function (e) {
        function t(t, n) {
            var r;
            return ((r = e.call(this, null) || this).source = void 0), e.prototype.setValue.call(o(r), r._makeAnimated(t, n)), r;
        }
        a(t, e),
            (t.create = function (e, n) {
                return new t(e, n);
            });
        var n = t.prototype;
        return (
            (n.getValue = function () {
                return this.source.map(function (e) {
                    return e.getValue();
                });
            }),
            (n.setValue = function (e) {
                var t = this.getPayload();
                e && e.length == t.length
                    ? i.each(t, function (t, n) {
                          return t.setValue(e[n]);
                      })
                    : ((this.source = this._makeAnimated(e)), (this.payload = this._makePayload(this.source)));
            }),
            (n._makeAnimated = function (e, t) {
                return (
                    void 0 === t && (t = e),
                    e
                        ? e.map(function (e, n) {
                              return (i.isAnimatedString(e) ? I : m).create(e, t[n]);
                          })
                        : []
                );
            }),
            t
        );
    })(g),
    A = (function (e) {
        function t(t) {
            var n;
            return ((n = e.call(this, null) || this).update = t), (n.dirty = !1), n;
        }
        a(t, e);
        var n = t.prototype;
        return (
            (n.setValue = function (t, n) {
                if (t) {
                    if (n && ((T.current = n), t.style)) {
                        var r = n.host.createAnimatedStyle;
                        t = s(s({}, t), {}, { style: r(t.style) });
                    }
                    e.prototype.setValue.call(this, t), (T.current = null);
                }
            }),
            (n.onParentChange = function (e) {
                var t = this,
                    n = e.type;
                !this.dirty &&
                    'change' === n &&
                    ((this.dirty = !0),
                    l.frameLoop.onFrame(function () {
                        (t.dirty = !1), t.update();
                    }));
            }),
            t
        );
    })(g),
    v = function (e, t) {
        return u.forwardRef(function (n, r) {
            var a = u.useRef(null),
                o = !i.is.fun(e) || (e.prototype && e.prototype.isReactComponent),
                l = i.useForceUpdate(),
                d = new A(function () {
                    var e = a.current;
                    if (!o || !!e) !1 === (!!e && t.applyAnimatedValues(e, d.getValue(!0))) && l();
                }),
                _ = new Set();
            return (
                d.setValue(n, {
                    dependencies: _,
                    host: t
                }),
                c.useLayoutEffect(function () {
                    return (
                        i.each(_, function (e) {
                            return e.addChild(d);
                        }),
                        function () {
                            return i.each(_, function (e) {
                                return e.removeChild(d);
                            });
                        }
                    );
                }),
                u.createElement(
                    e,
                    s({}, t.getComponentProps(d.getValue()), {
                        ref:
                            o &&
                            function (e) {
                                a.current = N(r, e);
                            }
                    })
                )
            );
        });
    };
function N(e, t) {
    return e && (i.is.fun(e) ? e(t) : (e.current = t)), t;
}
var O = Symbol.for('AnimatedComponent'),
    R = function (e, t) {
        var n = void 0 === t ? {} : t,
            r = n.applyAnimatedValues,
            a =
                void 0 === r
                    ? function () {
                          return !1;
                      }
                    : r,
            o = n.createAnimatedStyle,
            s =
                void 0 === o
                    ? function (e) {
                          return new g(e);
                      }
                    : o,
            l = n.getComponentProps,
            u = {
                applyAnimatedValues: a,
                createAnimatedStyle: s,
                getComponentProps:
                    void 0 === l
                        ? function (e) {
                              return e;
                          }
                        : l
            },
            c = function (e) {
                var t = C(e) || 'Anonymous';
                return ((e = i.is.str(e) ? v(e, u) : e[O] || (e[O] = v(e, u))).displayName = 'Animated(' + t + ')'), e;
            };
        return (
            i.each(e, function (e, t) {
                !i.is.str(t) && (t = C(e)), (c[t] = c(e));
            }),
            { animated: c }
        );
    },
    C = function (e) {
        return i.is.str(e) ? e : e && i.is.str(e.displayName) ? e.displayName : (i.is.fun(e) && e.name) || null;
    };
(t.Animated = p), (t.AnimatedArray = S), (t.AnimatedObject = g), (t.AnimatedProps = A), (t.AnimatedString = I), (t.AnimatedValue = m), (t.createHost = R), (t.getAnimated = E), (t.getPayload = h), (t.isAnimated = _), (t.setAnimated = f);
