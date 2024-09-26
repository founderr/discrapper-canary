n.d(t, {
    Ji: function () {
        return U;
    },
    O_: function () {
        return M;
    },
    qA: function () {
        return d;
    },
    uR: function () {
        return w;
    }
});
var r = n(470079),
    i = n(772848),
    a = n(120356),
    o = n.n(a);
function s(e, t) {
    var n = e.x,
        r = e.y;
    return n > t.x && n < t.x + t.width && r > t.y && r < t.y + t.height;
}
function l(e, t) {
    return e * t * t * (t > 0 ? -1 : 1);
}
var u = (function () {
        function e(e) {
            (this.id = e.id), (this.position = e.position), (this.velocity = e.velocity), (this.rotation = e.rotation), (this.dragCoefficient = e.dragCoefficient), (this.size = e.size), (this.opacity = e.opacity), (this.spriteX = e.spriteX), (this.spriteY = e.spriteY), (this.spriteWidth = e.spriteWidth), (this.spriteHeight = e.spriteHeight), (this._lastUpdatedAt = Date.now());
        }
        return (
            (e.prototype.getNewForces = function (e, t) {
                var n = e.wind * t,
                    r = -e.gravity * t;
                return {
                    x: n + l(this.dragCoefficient.x, this.velocity.x),
                    y: r + l(this.dragCoefficient.y, this.velocity.y)
                };
            }),
            (e.prototype.update = function (e) {
                var t = Date.now(),
                    n = (t - this._lastUpdatedAt) / 100;
                this.rotation.update(n), this.dragCoefficient.update(n);
                var r = this.getNewForces(e, n),
                    i = r.x,
                    a = r.y;
                this.velocity.update(n), (this.velocity.x += i), (this.velocity.y += a), this.position.update(n), (this.position.x += this.velocity.x * n), (this.position.y += this.velocity.y * n), this.size.update(n), this.opacity.update(n), (this._lastUpdatedAt = t);
            }),
            (e.prototype.previewPositionUpdate = function (e, t) {
                var n = t / 100,
                    r = this.velocity.previewUpdate(n),
                    i = this.getNewForces(e, n),
                    a = i.x,
                    o = i.y;
                (r.x += a), (r.y += o);
                var s = this.position.previewUpdate(n);
                return (s.x += r.x * n), (s.y += r.y * n), s;
            }),
            (e.prototype.draw = function (e, t) {
                t.save(), (t.globalAlpha = this.opacity.value), t.setTransform(new DOMMatrix().translateSelf(this.position.x * n.g.devicePixelRatio, this.position.y * n.g.devicePixelRatio).rotateSelf(this.rotation.x, this.rotation.y, this.rotation.z)), t.drawImage(e, this.spriteX, this.spriteY, this.spriteWidth, this.spriteHeight, (-this.width / 2) * n.g.devicePixelRatio, (-this.height / 2) * n.g.devicePixelRatio, this.width * n.g.devicePixelRatio, this.height * n.g.devicePixelRatio), t.restore();
            }),
            (e.prototype.shouldDestroy = function (e, t) {
                return this.opacity.value < 0 || (t.gravity >= 0 && this.velocity.y < 0 && this.position.y + this.height < 0) || (t.gravity <= 0 && this.velocity.y > 0 && this.position.y - this.height > e.height) || (t.wind >= 0 && this.velocity.x > 0 && this.position.x - this.width > e.width) || (t.wind <= 0 && this.velocity.x < 0 && this.position.x + this.width < 0);
            }),
            Object.defineProperty(e.prototype, 'width', {
                get: function () {
                    return this.size.x;
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, 'height', {
                get: function () {
                    return this.size.y;
                },
                enumerable: !1,
                configurable: !0
            }),
            (e.prototype.addForce = function (e) {
                (this.velocity.x += e.x), (this.velocity.y += e.y);
            }),
            e
        );
    })(),
    c = {
        velocity: {
            type: 'static',
            value: 0
        },
        rotation: {
            type: 'static',
            value: 0
        },
        dragCoefficient: {
            type: 'static',
            value: 0.001
        },
        opacity: {
            type: 'static',
            value: 1
        }
    },
    d = function (e) {
        var t = void 0 === e ? {} : e,
            n = t.gravity,
            r = t.wind;
        (this.gravity = -9.8), (this.wind = 0), (this.gravity = null != n ? n : this.gravity), (this.wind = null != r ? r : this.wind);
    },
    _ = function (e, t) {
        return (_ =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                    e.__proto__ = t;
                }) ||
            function (e, t) {
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
    };
function E(e, t) {
    if ('function' != typeof t && null !== t) throw TypeError('Class extends value ' + String(t) + ' is not a constructor or null');
    function n() {
        this.constructor = e;
    }
    _(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
}
var f = function () {
    return (f =
        Object.assign ||
        function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
        }).apply(this, arguments);
};
function h(e, t, n, r) {
    return new (n || (n = Promise))(function (i, a) {
        function o(e) {
            try {
                l(r.next(e));
            } catch (e) {
                a(e);
            }
        }
        function s(e) {
            try {
                l(r.throw(e));
            } catch (e) {
                a(e);
            }
        }
        function l(e) {
            var t;
            e.done
                ? i(e.value)
                : ((t = e.value) instanceof n
                      ? t
                      : new n(function (e) {
                            e(t);
                        })
                  ).then(o, s);
        }
        l((r = r.apply(e, t || [])).next());
    });
}
function p(e, t) {
    var n,
        r,
        i,
        a,
        o = {
            label: 0,
            sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
            },
            trys: [],
            ops: []
        };
    return (
        (a = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }),
        'function' == typeof Symbol &&
            (a[Symbol.iterator] = function () {
                return this;
            }),
        a
    );
    function s(s) {
        return function (l) {
            return (function (s) {
                if (n) throw TypeError('Generator is already executing.');
                for (; a && ((a = 0), s[0] && (o = 0)), o; )
                    try {
                        if (((n = 1), r && (i = 2 & s[0] ? r.return : s[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, s[1])).done)) return i;
                        switch (((r = 0), i && (s = [2 & s[0], i.value]), s[0])) {
                            case 0:
                            case 1:
                                i = s;
                                break;
                            case 4:
                                return (
                                    o.label++,
                                    {
                                        value: s[1],
                                        done: !1
                                    }
                                );
                            case 5:
                                o.label++, (r = s[1]), (s = [0]);
                                continue;
                            case 7:
                                (s = o.ops.pop()), o.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                    o = 0;
                                    continue;
                                }
                                if (3 === s[0] && (!i || (s[1] > i[0] && s[1] < i[3]))) {
                                    o.label = s[1];
                                    break;
                                }
                                if (6 === s[0] && o.label < i[1]) {
                                    (o.label = i[1]), (i = s);
                                    break;
                                }
                                if (i && o.label < i[2]) {
                                    (o.label = i[2]), o.ops.push(s);
                                    break;
                                }
                                i[2] && o.ops.pop(), o.trys.pop();
                                continue;
                        }
                        s = t.call(e, o);
                    } catch (e) {
                        (s = [6, e]), (r = 0);
                    } finally {
                        n = i = 0;
                    }
                if (5 & s[0]) throw s[1];
                return {
                    value: s[0] ? s[1] : void 0,
                    done: !0
                };
            })([s, l]);
        };
    }
}
var m = function (e) {
        this.value = e;
    },
    I = (function () {
        function e(e, t) {
            (this._x = e), (this._y = t);
        }
        return (
            (e.prototype.update = function (e) {
                this._x.update(e), this._y.update(e);
            }),
            (e.prototype.previewUpdate = function (e) {
                return {
                    x: this._x.previewUpdate(e),
                    y: this._y.previewUpdate(e)
                };
            }),
            Object.defineProperty(e.prototype, 'x', {
                get: function () {
                    return this._x.value;
                },
                set: function (e) {
                    this._x.value = e;
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, 'y', {
                get: function () {
                    return this._y.value;
                },
                set: function (e) {
                    this._y.value = e;
                },
                enumerable: !1,
                configurable: !0
            }),
            e
        );
    })(),
    T = (function (e) {
        function t(t, n, r) {
            var i = e.call(this, t, n) || this;
            return (i._z = r), i;
        }
        return (
            E(t, e),
            (t.prototype.update = function (t) {
                e.prototype.update.call(this, t), this._z.update(t);
            }),
            (t.prototype.previewUpdate = function (t) {
                var n = e.prototype.previewUpdate.call(this, t);
                return f(f({}, n), { z: this._z.previewUpdate(t) });
            }),
            Object.defineProperty(t.prototype, 'z', {
                get: function () {
                    return this._z.value;
                },
                set: function (e) {
                    this._z.value = e;
                },
                enumerable: !1,
                configurable: !0
            }),
            t
        );
    })(I),
    g = (function (e) {
        function t() {
            return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
            E(t, e),
            (t.prototype.update = function () {}),
            (t.prototype.previewUpdate = function () {
                return this.value;
            }),
            t
        );
    })(m),
    S = (function (e) {
        function t(t, n) {
            var r = e.call(this, t) || this;
            return (r.addValue = n), r;
        }
        return (
            E(t, e),
            (t.prototype.update = function (e) {
                this.value = this.previewUpdate(e);
            }),
            (t.prototype.previewUpdate = function (e) {
                return this.value + this.addValue * e;
            }),
            t
        );
    })(m),
    A = (function (e) {
        function t(t, n, r, i, a, o) {
            var s = e.call(this, t) || this;
            (s.min = n), (s.max = r), (s.duration = i);
            var l = (s.value / (s.max - s.min)) * s.duration,
                u = isNaN(l) ? 0 : l;
            return (s.timePassed = u < 0 ? s.duration - u : u), (s.directionMultiplier = a), (s.easingFunction = o), s;
        }
        return (
            E(t, e),
            (t.prototype.update = function (e) {
                var t = this.doUpdate(e),
                    n = t[0],
                    r = t[1],
                    i = t[2];
                (this.value = n), (this.directionMultiplier = i), (this.timePassed = r);
            }),
            (t.prototype.previewUpdate = function (e) {
                return this.doUpdate(e)[0];
            }),
            (t.prototype.doUpdate = function (e) {
                var t = this.max - this.min,
                    n = this.timePassed + e * this.directionMultiplier,
                    r = Math.min(Math.max(n, 0), this.duration),
                    i = n < 0 || n > this.duration ? -1 * this.directionMultiplier : this.directionMultiplier,
                    a = this.easingFunction(r, this.min, t, this.duration);
                return [isNaN(a) ? 0 : a, r, i];
            }),
            t
        );
    })(m);
function v(e, t) {
    return e === t ? e : Math.random() * (t - e + 1) + e;
}
function N(e) {
    var t = Math.floor(v(0, e.length - 1));
    return [e[t], t];
}
function O(e, t) {
    return N([e, t])[0];
}
function R(e) {
    return 'number' == typeof e
        ? {
              x: e,
              y: e
          }
        : e;
}
function C(e) {
    return 'number' == typeof e
        ? {
              x: e,
              y: e,
              z: e
          }
        : e;
}
function y(e) {
    return (function (e) {
        switch (e.type) {
            case 'static':
                return new g(e.value);
            case 'static-random':
                return new g(v(e.minValue, e.maxValue));
            case 'linear':
                return new S(e.value, e.addValue);
            case 'linear-random':
                return new S(v(e.minValue, e.maxValue), v(e.minAddValue, e.maxAddValue));
            case 'oscillating':
                return new A(e.value, e.start, e.final, e.duration, e.direction, e.easingFunction);
            case 'oscillating-random':
                return new A(v(e.minValue, e.maxValue), v(e.minStart, e.maxStart), v(e.minFinal, e.maxFinal), v(e.minDuration, e.maxDuration), O(e.minDirection, e.maxDirection), N(e.easingFunctions)[0]);
        }
    })(f(f({}, e), { valueType: 'number' }));
}
function L(e) {
    return (function (e) {
        switch (e.type) {
            case 'static':
                var t = R(e.value);
                return new I(new g(t.x), new g(t.y));
            case 'static-random':
                var n = R(e.minValue),
                    r = R(e.maxValue);
                return new I(new g(v(n.x, r.x)), new g(v(n.y, r.y)));
            case 'linear':
                t = R(e.value);
                var i = R(e.addValue);
                return new I(new S(t.x, i.x), new S(t.y, i.y));
            case 'linear-random':
                (n = R(e.minValue)), (r = R(e.maxValue));
                var a = R(e.minAddValue),
                    o = R(e.maxAddValue);
                return new I(new S(v(n.x, r.x), v(a.x, o.x)), new S(v(n.y, r.y), v(a.x, o.x)));
            case 'oscillating':
                t = R(e.value);
                var s = R(e.start),
                    l = R(e.final),
                    u = R(e.duration),
                    c = R(e.direction);
                return new I(new A(t.x, s.x, l.x, u.x, c.x, e.easingFunction), new A(t.y, s.y, l.y, u.x, c.y, e.easingFunction));
            case 'oscillating-random':
                (n = R(e.minValue)), (r = R(e.maxValue));
                var d = R(e.minStart),
                    _ = R(e.maxStart),
                    E = R(e.minFinal),
                    f = R(e.maxFinal),
                    h = R(e.minDuration),
                    p = R(e.maxDuration),
                    m = R(e.minDirection),
                    T = R(e.maxDirection);
                return new I(new A(v(n.x, r.x), v(d.x, _.x), v(E.x, f.x), v(h.x, p.x), O(m.x, T.x), N(e.easingFunctions)[0]), new A(v(n.y, r.y), v(d.y, _.y), v(E.y, f.y), v(h.y, p.y), O(m.y, T.y), N(e.easingFunctions)[0]));
        }
    })(f(f({}, e), { valueType: 'Vector2' }));
}
function b(e) {
    return (function (e) {
        switch (e.type) {
            case 'static':
                var t = C(e.value);
                return new T(new g(t.x), new g(t.y), new g(t.z));
            case 'static-random':
                var n = C(e.minValue),
                    r = C(e.maxValue);
                return new T(new g(v(n.x, r.x)), new g(v(n.y, r.y)), new g(v(n.z, r.z)));
            case 'linear':
                t = C(e.value);
                var i = C(e.addValue);
                return new T(new S(t.x, i.x), new S(t.y, i.y), new S(t.z, i.z));
            case 'linear-random':
                (n = C(e.minValue)), (r = C(e.maxValue));
                var a = C(e.minAddValue),
                    o = C(e.maxAddValue);
                return new T(new S(v(n.x, r.x), v(a.x, o.x)), new S(v(n.y, r.y), v(a.y, o.y)), new S(v(n.z, r.z), v(a.z, o.z)));
            case 'oscillating':
                t = C(e.value);
                var s = C(e.start),
                    l = C(e.final),
                    u = C(e.duration),
                    c = C(e.direction);
                return new T(new A(t.x, s.x, l.x, u.x, c.x, e.easingFunction), new A(t.y, s.y, l.y, u.z, c.y, e.easingFunction), new A(t.z, s.z, l.z, u.z, c.z, e.easingFunction));
            case 'oscillating-random':
                (n = C(e.minValue)), (r = C(e.maxValue));
                var d = C(e.minStart),
                    _ = C(e.maxStart),
                    E = C(e.minFinal),
                    f = C(e.maxFinal),
                    h = C(e.minDuration),
                    p = C(e.maxDuration),
                    m = C(e.minDirection),
                    I = C(e.maxDirection);
                return new T(new A(v(n.x, r.x), v(d.x, _.x), v(E.x, f.x), v(h.x, p.x), O(m.x, I.x), N(e.easingFunctions)[0]), new A(v(n.y, r.y), v(d.y, _.y), v(E.y, f.y), v(h.y, p.y), O(m.y, I.y), N(e.easingFunctions)[0]), new A(v(n.z, r.z), v(d.z, _.z), v(E.z, f.z), v(h.z, p.z), O(m.z, I.z), N(e.easingFunctions)[0]));
        }
    })(f(f({}, e), { valueType: 'Vector3' }));
}
function D(e, t, n, r, i) {
    var a = (function (e, t) {
            return f(f({ id: t }, c), e);
        })(t, e),
        o = L(a.size),
        s = (function (e, t) {
            if (null != e) {
                var n = t.sprites.findIndex(function (t) {
                    var n, r;
                    return (n = t), 'string' == typeof (r = e) ? n.src === r && n.colorize : n.src === r.src && n.colorize === r.colorize;
                });
                if (-1 !== n) return [e, n];
            }
            return N(t.sprites);
        })(r, n),
        l = s[0],
        d = s[1],
        _ = (function (e, t, n) {
            if (
                !(function (e) {
                    return 'string' == typeof e || e.colorize;
                })(e)
            )
                return 0;
            var r =
                null != t
                    ? n.colors.findIndex(function (e) {
                          return e === t;
                      })
                    : -1;
            return -1 !== r ? r : Math.floor(v(0, n.colors.length - 1));
        })(null != r ? r : l, i, n);
    return new u({
        id: e,
        position: L(a.position),
        velocity: L(a.velocity),
        rotation: b(a.rotation),
        dragCoefficient: L(a.dragCoefficient),
        size: o,
        opacity: y(a.opacity),
        spriteX: _ * n.spriteWidth + 2 * _,
        spriteY: d * n.spriteHeight + 2 * d,
        spriteWidth: n.spriteWidth,
        spriteHeight: n.spriteHeight
    });
}
var M = r.forwardRef(function (e, t) {
        var a = e.className,
            o = e.environment,
            l = e.onClick,
            u = e.onMouseDown,
            c = e.onMouseMove,
            d = e.onMouseUp,
            _ = e.onBeforeRender,
            E = e.onAfterRender,
            h = (function (e, t) {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
                    var i = 0;
                    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) 0 > t.indexOf(r[i]) && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
                }
                return n;
            })(e, ['className', 'environment', 'onClick', 'onMouseDown', 'onMouseMove', 'onMouseUp', 'onBeforeRender', 'onAfterRender']),
            p = r.useRef(null),
            m = r.useRef(new Map()),
            I = r.useRef(null),
            T = r.useRef(0),
            g = r.useRef(0),
            S = r.useCallback(
                function () {
                    var e = p.current;
                    if (null != e) {
                        var t = e.getContext('2d');
                        if (null != t) {
                            t.clearRect(0, 0, e.width, e.height),
                                null == _ || _(t),
                                m.current.forEach(function (n, r) {
                                    var i = n.confetti,
                                        a = n.spriteCanvas;
                                    i.update(o), i.draw(a, t), i.shouldDestroy(e, o) && m.current.delete(r);
                                }),
                                null == E || E(t),
                                m.current.size > 0 ? (I.current = window.requestAnimationFrame(S)) : (t.clearRect(0, 0, e.width, e.height), (I.current = null));
                            var n = Date.now();
                            0 !== T.current && (g.current = 1000 / (n - T.current)), (T.current = n);
                        }
                    }
                },
                [o, E, _]
            );
        r.useEffect(
            function () {
                null != I.current && (window.cancelAnimationFrame(I.current), (I.current = window.requestAnimationFrame(S)));
            },
            [S]
        );
        var A = r.useCallback(
                function (e, t) {
                    m.current.set(e.id, {
                        confetti: e,
                        spriteCanvas: t
                    }),
                        null == I.current && S();
                },
                [S]
            ),
            v = r.useCallback(
                function (e, t, n, r, a) {
                    var o,
                        s = D(null !== (o = e.id) && void 0 !== o ? o : (0, i.Z)(), e, n, r, a);
                    return A(s, t), s;
                },
                [A]
            ),
            N = r.useCallback(function (e) {
                m.current.delete(e);
            }, []),
            O = r.useCallback(function () {
                return m.current.clear();
            }, []),
            R = r.useCallback(function () {
                return p.current;
            }, []);
        r.useImperativeHandle(
            t,
            function () {
                return {
                    createConfetti: v,
                    addConfetti: A,
                    deleteConfetti: N,
                    clearConfetti: O,
                    getCanvas: R
                };
            },
            [v, A, N, O, R]
        );
        var C = r.useCallback(
                function (e, t) {
                    var n,
                        r,
                        i = t.clickHandler,
                        a = t.mouseHandler;
                    if (null != i || null != a) {
                        var l = null === (n = p.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                        if (null != l) {
                            var u = (function (e, t) {
                                if (null == t) throw Error('element should not be null');
                                var n = t.getBoundingClientRect();
                                return {
                                    x: e.clientX - n.left,
                                    y: e.clientY - n.top
                                };
                            })(e, p.current);
                            if (
                                s(u, {
                                    x: l.left,
                                    y: l.top,
                                    width: l.width,
                                    height: l.height
                                })
                            ) {
                                if (null != a) return a(e);
                                if (null != i) {
                                    var c = (-1000 / g.current) * 2,
                                        d = (function (e, t) {
                                            for (var n = 0, r = Array.from(e.values()); n < r.length; n++) {
                                                var i = r[n];
                                                if (null != i && t(i)) return i;
                                            }
                                            return null;
                                        })(m.current, function (e) {
                                            var t = e.confetti,
                                                n = t.previewPositionUpdate(o, c);
                                            return s(u, {
                                                x: n.x - t.width / 2,
                                                y: n.y - t.height / 2,
                                                width: t.width,
                                                height: t.height
                                            });
                                        });
                                    i(e, null !== (r = null == d ? void 0 : d.confetti) && void 0 !== r ? r : null);
                                }
                            }
                        }
                    }
                },
                [o]
            ),
            y = r.useCallback(
                function (e) {
                    return C(e, { clickHandler: l });
                },
                [C, l]
            ),
            L = r.useCallback(
                function (e) {
                    return C(e, { clickHandler: u });
                },
                [C, u]
            ),
            b = r.useCallback(
                function (e) {
                    return C(e, { mouseHandler: c });
                },
                [C, c]
            ),
            M = r.useCallback(
                function (e) {
                    return C(e, { mouseHandler: d });
                },
                [C, d]
            );
        return (
            r.useEffect(
                function () {
                    var e = function (e, t, n) {
                        null != n && window.addEventListener(e, t);
                    };
                    return (
                        e('click', y, l),
                        e('mousedown', L, u),
                        e('mousemove', b, c),
                        e('mouseup', M, d),
                        function () {
                            window.removeEventListener('click', y), window.removeEventListener('mousedown', L), window.removeEventListener('mousemove', b), window.removeEventListener('mouseup', b);
                        }
                    );
                },
                [y, L, b, M, l, u, c, d]
            ),
            r.useEffect(function () {
                var e = p.current,
                    t = new ResizeObserver(function () {
                        !(function (e) {
                            if (null != e) {
                                var t = e.getBoundingClientRect(),
                                    r = t.width,
                                    i = t.height;
                                (e.width = r * n.g.devicePixelRatio), (e.height = i * n.g.devicePixelRatio);
                            }
                        })(p.current);
                    });
                return (
                    null != e && t.observe(e),
                    function () {
                        null != e && t.unobserve(e);
                    }
                );
            }, []),
            r.createElement(
                'canvas',
                f({}, h, {
                    className: a,
                    ref: p
                })
            )
        );
    }),
    P = 'SpriteCanvas-module_spriteCanvasHidden__ndzQV';
!(function (e, t) {
    void 0 === t && (t = {});
    var n = t.insertAt;
    if (e && 'undefined' != typeof document) {
        var r = document.head || document.getElementsByTagName('head')[0],
            i = document.createElement('style');
        (i.type = 'text/css'), 'top' === n && r.firstChild ? r.insertBefore(i, r.firstChild) : r.appendChild(i), i.styleSheet ? (i.styleSheet.cssText = e) : i.appendChild(document.createTextNode(e));
    }
})('.SpriteCanvas-module_spriteCanvasHidden__ndzQV {\n  display: none;\n  position: absolute;\n  width: 0;\n  height: 0;\n  left: -100%;\n}\n');
var U = r.forwardRef(function (e, t) {
    var n,
        a = e.className,
        s = e.visible,
        l = void 0 !== s && s,
        u = e.sprites,
        c = e.colors,
        d = e.spriteWidth,
        _ = e.spriteHeight,
        E = r.useRef(null),
        f = r.useRef([]),
        m = r.useRef(!1),
        I = r.useRef({});
    r.useImperativeHandle(
        t,
        function () {
            return {
                getCanvas: function () {
                    return E.current;
                },
                getCreateData: function () {
                    return {
                        sprites: f.current,
                        colors: c,
                        spriteWidth: d,
                        spriteHeight: _
                    };
                },
                addReadyListener: function (e) {
                    var t = (0, i.Z)();
                    return (I.current[t] = e), t;
                },
                removeReadyListener: function (e) {
                    delete I.current[e];
                },
                isReady: m.current
            };
        },
        [c, _, d]
    );
    var T = r.useCallback(
            function () {
                var e = E.current,
                    t = null == e ? void 0 : e.getContext('2d', { willReadFrequently: !0 });
                null != t &&
                    null != e &&
                    (t.clearRect(0, 0, e.width, e.height),
                    f.current.forEach(function (e, n) {
                        var r = function (r, i) {
                            var a = d * i + 2 * i,
                                o = _ * n + 2 * n;
                            if ((t.drawImage(e.image, a, o, d, _), null != r)) {
                                for (
                                    var s = t.getImageData(a, o, d, _),
                                        l = (function (e) {
                                            '#' === e[0] && (e = e.slice(1));
                                            var t = parseInt(e, 16);
                                            return {
                                                r: (t >> 16) & 255,
                                                g: (t >> 8) & 255,
                                                b: 255 & t
                                            };
                                        })(r),
                                        u = 0;
                                    u < s.data.length;
                                    u += 4
                                )
                                    (s.data[u] = l.r), (s.data[u + 1] = l.g), (s.data[u + 2] = l.b);
                                t.putImageData(s, a, o);
                            }
                        };
                        e.colorize
                            ? c.forEach(function (e, t) {
                                  return r(e, t);
                              })
                            : r(null, 0);
                    }));
            },
            [c, _, d]
        ),
        g = r.useCallback(
            function () {
                var e = u.map(function (e) {
                    var t = new Image(),
                        n = 'string' == typeof e ? e : e.src,
                        r = 'string' == typeof e || e.colorize;
                    t.src = n;
                    var i = new Promise(function (e) {
                        t.onload = e;
                    });
                    return {
                        colorize: r,
                        image: t,
                        src: n,
                        loadPromise: i
                    };
                });
                return Promise.all(
                    e.map(function (e) {
                        return e.loadPromise;
                    })
                ).then(function () {
                    f.current = e.map(function (e) {
                        return {
                            colorize: e.colorize,
                            image: e.image,
                            src: e.src
                        };
                    });
                });
            },
            [u]
        ),
        S = r.useCallback(function (e) {
            for (var t in I.current) I.current[t](e);
        }, []),
        A = r.useCallback(
            function () {
                return h(void 0, void 0, void 0, function () {
                    return p(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return [4, g()];
                            case 1:
                                return e.sent(), T(), (m.current = !0), S(!0), [2];
                        }
                    });
                });
            },
            [S, g, T]
        );
    return (
        r.useEffect(
            function () {
                A();
            },
            [A]
        ),
        r.useEffect(
            function () {
                return function () {
                    return S(!1);
                };
            },
            [S]
        ),
        r.useEffect(
            function () {
                null != E.current && ((E.current.width = (d + 2) * Math.max(c.length, 1)), (E.current.height = (_ + 2) * u.length));
            },
            [c.length, _, d, u.length]
        ),
        r.createElement('canvas', {
            ref: E,
            className: o()(a, (((n = {})[P] = !l), n))
        })
    );
});
function w(e, t) {
    var n,
        i = r.useState(null !== (n = null == t ? void 0 : t.isReady) && void 0 !== n && n),
        a = i[0],
        o = i[1];
    r.useEffect(
        function () {
            var e = null == t ? void 0 : t.addReadyListener(o);
            return function () {
                null != e && (null == t || t.removeReadyListener(e));
            };
        },
        [t]
    );
    var s = r.useCallback(
            function (n, r) {
                var i = void 0 === r ? {} : r,
                    a = i.sprite,
                    o = i.color,
                    s = null == t ? void 0 : t.getCreateData(),
                    l = null == t ? void 0 : t.getCanvas();
                if (null != l && null != s && 0 !== s.sprites.length) return null == e ? void 0 : e.createConfetti(n, l, s, a, o);
            },
            [e, t]
        ),
        l = r.useCallback(
            function (e, t, n) {
                for (var r = [], i = 0; i < t; i++) {
                    var a = s(e, n);
                    a && r.push(a);
                }
                return r;
            },
            [s]
        ),
        u = r.useCallback(
            function (n) {
                var r = null == t ? void 0 : t.getCanvas();
                null != r && (null == e || e.addConfetti(n, r));
            },
            [e, t]
        ),
        c = r.useCallback(
            function (t) {
                null == e || e.deleteConfetti(t);
            },
            [e]
        ),
        d = r.useCallback(
            function () {
                return null == e ? void 0 : e.clearConfetti();
            },
            [e]
        );
    return r.useMemo(
        function () {
            return {
                createConfetti: s,
                createMultipleConfetti: l,
                addConfetti: u,
                clearConfetti: d,
                deleteConfetti: c,
                isReady: a && null != t && null != e
            };
        },
        [u, d, e, s, l, c, a, t]
    );
}
