r.d(n, {
    Ji: function () {
        return w;
    },
    O_: function () {
        return L;
    },
    qA: function () {
        return c;
    },
    uR: function () {
        return P;
    }
});
var i = r(192379),
    a = r(772848);
function s(e, n) {
    var r = e.x,
        i = e.y;
    return r > n.x && r < n.x + n.width && i > n.y && i < n.y + n.height;
}
function o(e, n, r, i) {
    var a = n > 0 ? -1 : 1,
        s = Math.abs(n);
    return 0.5 * e * i * r * s * s * a;
}
var l = (function () {
        function e(e) {
            (this.id = e.id), (this.position = e.position), (this.velocity = e.velocity), (this.rotation = e.rotation), (this.dragCoefficient = e.dragCoefficient), (this.airResistanceArea = e.airResistanceArea), (this.size = e.size), (this.opacity = e.opacity), (this.spriteX = e.spriteX), (this.spriteY = e.spriteY), (this.spriteWidth = e.spriteWidth), (this.spriteHeight = e.spriteHeight), (this._lastUpdatedAt = Date.now());
        }
        return (
            (e.prototype.getNewForces = function (e, n) {
                var r = e.wind * n,
                    i = -e.gravity * n;
                return {
                    x: r + o(this.dragCoefficient.x, this.velocity.x, this.airResistanceArea.x, e.density),
                    y: i + o(this.dragCoefficient.y, this.velocity.y, this.airResistanceArea.y, e.density)
                };
            }),
            (e.prototype.update = function (e) {
                var n = Date.now(),
                    r = (n - this._lastUpdatedAt) / 100;
                this.rotation.update(r), this.dragCoefficient.update(r);
                var i = this.getNewForces(e, r),
                    a = i.x,
                    s = i.y;
                this.velocity.update(r), (this.velocity.x += a), (this.velocity.y += s), this.position.update(r), (this.position.x += this.velocity.x * r), (this.position.y += this.velocity.y * r), this.size.update(r), this.opacity.update(r), (this.opacity.value = Math.max(this.opacity.value, 0)), (this._lastUpdatedAt = n);
            }),
            (e.prototype.previewPositionUpdate = function (e, n) {
                var r = n / 100,
                    i = this.velocity.previewUpdate(r),
                    a = this.getNewForces(e, r),
                    s = a.x,
                    o = a.y;
                (i.x += s), (i.y += o);
                var l = this.position.previewUpdate(r);
                return (l.x += i.x * r), (l.y += i.y * r), l;
            }),
            (e.prototype.draw = function (e, n) {
                n.save(), (n.globalAlpha = this.opacity.value), n.setTransform(new DOMMatrix().translateSelf(this.position.x * r.g.devicePixelRatio, this.position.y * r.g.devicePixelRatio).rotateSelf(this.rotation.x, this.rotation.y, this.rotation.z)), n.drawImage(e, this.spriteX, this.spriteY, this.spriteWidth, this.spriteHeight, (-this.width / 2) * r.g.devicePixelRatio, (-this.height / 2) * r.g.devicePixelRatio, this.width * r.g.devicePixelRatio, this.height * r.g.devicePixelRatio), n.restore();
            }),
            (e.prototype.shouldDestroy = function (e, n) {
                return this.opacity.value < 0 || (n.gravity >= 0 && this.velocity.y < 0 && this.position.y + this.height < 0) || (n.gravity <= 0 && this.velocity.y > 0 && this.position.y - this.height > e.height) || (n.wind >= 0 && this.velocity.x > 0 && this.position.x - this.width > e.width) || (n.wind <= 0 && this.velocity.x < 0 && this.position.x + this.width < 0);
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
    u = {
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
            value: 1.66
        },
        airResistanceArea: {
            type: 'static',
            value: 0.001
        },
        opacity: {
            type: 'static',
            value: 1
        }
    },
    c = function (e) {
        var n = void 0 === e ? {} : e,
            r = n.gravity,
            i = n.wind,
            a = n.density;
        (this.gravity = -9.8), (this.wind = 0), (this.density = 1.2041), (this.gravity = null != r ? r : this.gravity), (this.wind = null != i ? i : this.wind), (this.density = null != a ? a : this.density);
    },
    d = function (e, n) {
        return (d =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
                function (e, n) {
                    e.__proto__ = n;
                }) ||
            function (e, n) {
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            })(e, n);
    };
function f(e, n) {
    if ('function' != typeof n && null !== n) throw TypeError('Class extends value ' + String(n) + ' is not a constructor or null');
    function r() {
        this.constructor = e;
    }
    d(e, n), (e.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
}
var _ = function () {
    return (_ =
        Object.assign ||
        function (e) {
            for (var n, r = 1, i = arguments.length; r < i; r++) for (var a in (n = arguments[r])) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            return e;
        }).apply(this, arguments);
};
function h(e, n, r, i) {
    return new (r || (r = Promise))(function (a, s) {
        function o(e) {
            try {
                u(i.next(e));
            } catch (e) {
                s(e);
            }
        }
        function l(e) {
            try {
                u(i.throw(e));
            } catch (e) {
                s(e);
            }
        }
        function u(e) {
            var n;
            e.done
                ? a(e.value)
                : ((n = e.value) instanceof r
                      ? n
                      : new r(function (e) {
                            e(n);
                        })
                  ).then(o, l);
        }
        u((i = i.apply(e, n || [])).next());
    });
}
function p(e, n) {
    var r,
        i,
        a,
        s,
        o = {
            label: 0,
            sent: function () {
                if (1 & a[0]) throw a[1];
                return a[1];
            },
            trys: [],
            ops: []
        };
    return (
        (s = {
            next: l(0),
            throw: l(1),
            return: l(2)
        }),
        'function' == typeof Symbol &&
            (s[Symbol.iterator] = function () {
                return this;
            }),
        s
    );
    function l(l) {
        return function (u) {
            return (function (l) {
                if (r) throw TypeError('Generator is already executing.');
                for (; s && ((s = 0), l[0] && (o = 0)), o; )
                    try {
                        if (((r = 1), i && (a = 2 & l[0] ? i.return : l[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, l[1])).done)) return a;
                        switch (((i = 0), a && (l = [2 & l[0], a.value]), l[0])) {
                            case 0:
                            case 1:
                                a = l;
                                break;
                            case 4:
                                return (
                                    o.label++,
                                    {
                                        value: l[1],
                                        done: !1
                                    }
                                );
                            case 5:
                                o.label++, (i = l[1]), (l = [0]);
                                continue;
                            case 7:
                                (l = o.ops.pop()), o.trys.pop();
                                continue;
                            default:
                                if (!(a = (a = o.trys).length > 0 && a[a.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                    o = 0;
                                    continue;
                                }
                                if (3 === l[0] && (!a || (l[1] > a[0] && l[1] < a[3]))) {
                                    o.label = l[1];
                                    break;
                                }
                                if (6 === l[0] && o.label < a[1]) {
                                    (o.label = a[1]), (a = l);
                                    break;
                                }
                                if (a && o.label < a[2]) {
                                    (o.label = a[2]), o.ops.push(l);
                                    break;
                                }
                                a[2] && o.ops.pop(), o.trys.pop();
                                continue;
                        }
                        l = n.call(e, o);
                    } catch (e) {
                        (l = [6, e]), (i = 0);
                    } finally {
                        r = a = 0;
                    }
                if (5 & l[0]) throw l[1];
                return {
                    value: l[0] ? l[1] : void 0,
                    done: !0
                };
            })([l, u]);
        };
    }
}
var m = function (e) {
        this.value = e;
    },
    g = (function () {
        function e(e, n, r) {
            (this._x = e), (this._y = r ? e : n);
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
    E = (function (e) {
        function n(n, r, i, a) {
            var s = e.call(this, n, r, a) || this;
            return (s._z = a ? n : i), s;
        }
        return (
            f(n, e),
            (n.prototype.update = function (n) {
                e.prototype.update.call(this, n), this._z.update(n);
            }),
            (n.prototype.previewUpdate = function (n) {
                var r = e.prototype.previewUpdate.call(this, n);
                return _(_({}, r), { z: this._z.previewUpdate(n) });
            }),
            Object.defineProperty(n.prototype, 'z', {
                get: function () {
                    return this._z.value;
                },
                set: function (e) {
                    this._z.value = e;
                },
                enumerable: !1,
                configurable: !0
            }),
            n
        );
    })(g),
    v = (function (e) {
        function n() {
            return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
            f(n, e),
            (n.prototype.update = function () {}),
            (n.prototype.previewUpdate = function () {
                return this.value;
            }),
            n
        );
    })(m),
    I = (function (e) {
        function n(n, r) {
            var i = e.call(this, n) || this;
            return (i.addValue = r), i;
        }
        return (
            f(n, e),
            (n.prototype.update = function (e) {
                this.value = this.previewUpdate(e);
            }),
            (n.prototype.previewUpdate = function (e) {
                return this.value + this.addValue * e;
            }),
            n
        );
    })(m),
    T = (function (e) {
        function n(n, r, i, a, s, o) {
            var l = e.call(this, n) || this;
            (l.min = r), (l.max = i), (l.duration = a);
            var u = (l.value / (l.max - l.min)) * l.duration,
                c = isNaN(u) ? 0 : u;
            return (l.timePassed = c < 0 ? l.duration - c : c), (l.directionMultiplier = s), (l.easingFunction = o), l;
        }
        return (
            f(n, e),
            (n.prototype.update = function (e) {
                var n = this.doUpdate(e),
                    r = n[0],
                    i = n[1],
                    a = n[2];
                (this.value = r), (this.directionMultiplier = a), (this.timePassed = i);
            }),
            (n.prototype.previewUpdate = function (e) {
                return this.doUpdate(e)[0];
            }),
            (n.prototype.doUpdate = function (e) {
                var n = this.max - this.min,
                    r = this.timePassed + e * this.directionMultiplier,
                    i = Math.min(Math.max(r, 0), this.duration),
                    a = r < 0 || r > this.duration ? -1 * this.directionMultiplier : this.directionMultiplier,
                    s = this.easingFunction(i, this.min, n, this.duration);
                return [isNaN(s) ? 0 : s, i, a];
            }),
            n
        );
    })(m);
function b(e, n) {
    return e === n ? e : Math.random() * (n - e + 1) + e;
}
function y(e) {
    var n = Math.floor(b(0, e.length - 1));
    return [e[n], n];
}
function S(e, n) {
    return y([e, n])[0];
}
function A(e) {
    return 'number' == typeof e
        ? {
              x: e,
              y: e
          }
        : e;
}
function N(e) {
    return 'number' == typeof e
        ? {
              x: e,
              y: e,
              z: e
          }
        : e;
}
function C(e) {
    return (function (e) {
        switch (e.type) {
            case 'static':
                return new v(e.value);
            case 'static-random':
                return new v(b(e.minValue, e.maxValue));
            case 'linear':
                return new I(e.value, e.addValue);
            case 'linear-random':
                return new I(b(e.minValue, e.maxValue), b(e.minAddValue, e.maxAddValue));
            case 'oscillating':
                return new T(e.value, e.start, e.final, e.duration, e.direction, e.easingFunction);
            case 'oscillating-random':
                return new T(b(e.minValue, e.maxValue), b(e.minStart, e.maxStart), b(e.minFinal, e.maxFinal), b(e.minDuration, e.maxDuration), S(e.minDirection, e.maxDirection), y(e.easingFunctions)[0]);
        }
    })(_(_({}, e), { valueType: 'number' }));
}
function R(e) {
    return (function (e) {
        switch (e.type) {
            case 'static':
                var n = A(e.value);
                return new g(new v(n.x), new v(n.y), e.uniformVectorValues);
            case 'static-random':
                var r = A(e.minValue),
                    i = A(e.maxValue);
                return new g(new v(b(r.x, i.x)), new v(b(r.y, i.y)), e.uniformVectorValues);
            case 'linear':
                n = A(e.value);
                var a = A(e.addValue);
                return new g(new I(n.x, a.x), new I(n.y, a.y), e.uniformVectorValues);
            case 'linear-random':
                (r = A(e.minValue)), (i = A(e.maxValue));
                var s = A(e.minAddValue),
                    o = A(e.maxAddValue);
                return new g(new I(b(r.x, i.x), b(s.x, o.x)), new I(b(r.y, i.y), b(s.x, o.x)), e.uniformVectorValues);
            case 'oscillating':
                n = A(e.value);
                var l = A(e.start),
                    u = A(e.final),
                    c = A(e.duration),
                    d = A(e.direction);
                return new g(new T(n.x, l.x, u.x, c.x, d.x, e.easingFunction), new T(n.y, l.y, u.y, c.x, d.y, e.easingFunction), e.uniformVectorValues);
            case 'oscillating-random':
                (r = A(e.minValue)), (i = A(e.maxValue));
                var f = A(e.minStart),
                    _ = A(e.maxStart),
                    h = A(e.minFinal),
                    p = A(e.maxFinal),
                    m = A(e.minDuration),
                    E = A(e.maxDuration),
                    N = A(e.minDirection),
                    C = A(e.maxDirection);
                return new g(new T(b(r.x, i.x), b(f.x, _.x), b(h.x, p.x), b(m.x, E.x), S(N.x, C.x), y(e.easingFunctions)[0]), new T(b(r.y, i.y), b(f.y, _.y), b(h.y, p.y), b(m.y, E.y), S(N.y, C.y), y(e.easingFunctions)[0]), e.uniformVectorValues);
        }
    })(_(_({}, e), { valueType: 'Vector2' }));
}
function O(e) {
    return (function (e) {
        switch (e.type) {
            case 'static':
                var n = N(e.value);
                return new E(new v(n.x), new v(n.y), new v(n.z), e.uniformVectorValues);
            case 'static-random':
                var r = N(e.minValue),
                    i = N(e.maxValue);
                return new E(new v(b(r.x, i.x)), new v(b(r.y, i.y)), new v(b(r.z, i.z)), e.uniformVectorValues);
            case 'linear':
                n = N(e.value);
                var a = N(e.addValue);
                return new E(new I(n.x, a.x), new I(n.y, a.y), new I(n.z, a.z), e.uniformVectorValues);
            case 'linear-random':
                (r = N(e.minValue)), (i = N(e.maxValue));
                var s = N(e.minAddValue),
                    o = N(e.maxAddValue);
                return new E(new I(b(r.x, i.x), b(s.x, o.x)), new I(b(r.y, i.y), b(s.y, o.y)), new I(b(r.z, i.z), b(s.z, o.z)), e.uniformVectorValues);
            case 'oscillating':
                n = N(e.value);
                var l = N(e.start),
                    u = N(e.final),
                    c = N(e.duration),
                    d = N(e.direction);
                return new E(new T(n.x, l.x, u.x, c.x, d.x, e.easingFunction), new T(n.y, l.y, u.y, c.z, d.y, e.easingFunction), new T(n.z, l.z, u.z, c.z, d.z, e.easingFunction), e.uniformVectorValues);
            case 'oscillating-random':
                (r = N(e.minValue)), (i = N(e.maxValue));
                var f = N(e.minStart),
                    _ = N(e.maxStart),
                    h = N(e.minFinal),
                    p = N(e.maxFinal),
                    m = N(e.minDuration),
                    g = N(e.maxDuration),
                    A = N(e.minDirection),
                    C = N(e.maxDirection);
                return new E(new T(b(r.x, i.x), b(f.x, _.x), b(h.x, p.x), b(m.x, g.x), S(A.x, C.x), y(e.easingFunctions)[0]), new T(b(r.y, i.y), b(f.y, _.y), b(h.y, p.y), b(m.y, g.y), S(A.y, C.y), y(e.easingFunctions)[0]), new T(b(r.z, i.z), b(f.z, _.z), b(h.z, p.z), b(m.z, g.z), S(A.z, C.z), y(e.easingFunctions)[0]), e.uniformVectorValues);
        }
    })(_(_({}, e), { valueType: 'Vector3' }));
}
function D(e, n, r, i, a) {
    var s = (function (e, n) {
            return _(_({ id: n }, u), e);
        })(n, e),
        o = (function (e, n) {
            if (null != e) {
                var r = n.sprites.findIndex(function (n) {
                    var r, i;
                    return (r = n), 'string' == typeof (i = e) ? r.src === i && r.colorize : r.src === i.src && r.colorize === i.colorize;
                });
                if (-1 !== r) return [e, r];
            }
            return y(n.sprites);
        })(i, r),
        c = o[0],
        d = o[1],
        f = (function (e, n, r) {
            if (
                !(function (e) {
                    return 'string' == typeof e || e.colorize;
                })(e)
            )
                return 0;
            var i =
                null != n
                    ? r.colors.findIndex(function (e) {
                          return e === n;
                      })
                    : -1;
            return -1 !== i ? i : Math.floor(b(0, r.colors.length - 1));
        })(null != i ? i : c, a, r);
    return new l({
        id: e,
        position: R(s.position),
        velocity: R(s.velocity),
        rotation: O(s.rotation),
        dragCoefficient: R(s.dragCoefficient),
        size: R(s.size),
        opacity: C(s.opacity),
        airResistanceArea: R(s.airResistanceArea),
        spriteX: f * r.spriteWidth + 2 * f,
        spriteY: d * r.spriteHeight + 2 * d,
        spriteWidth: r.spriteWidth,
        spriteHeight: r.spriteHeight
    });
}
var L = i.forwardRef(function (e, n) {
        var o = e.className,
            l = e.environment,
            u = e.onClick,
            c = e.onMouseDown,
            d = e.onMouseMove,
            f = e.onMouseUp,
            h = e.onBeforeRender,
            p = e.onAfterRender,
            m = (function (e, n) {
                var r = {};
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && 0 > n.indexOf(i) && (r[i] = e[i]);
                if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
                    var a = 0;
                    for (i = Object.getOwnPropertySymbols(e); a < i.length; a++) 0 > n.indexOf(i[a]) && Object.prototype.propertyIsEnumerable.call(e, i[a]) && (r[i[a]] = e[i[a]]);
                }
                return r;
            })(e, ['className', 'environment', 'onClick', 'onMouseDown', 'onMouseMove', 'onMouseUp', 'onBeforeRender', 'onAfterRender']),
            g = i.useRef(null),
            E = i.useRef(new Map()),
            v = i.useRef(null),
            I = i.useRef(0),
            T = i.useRef(0),
            b = i.useCallback(
                function () {
                    var e = g.current;
                    if (null != e) {
                        var n = e.getContext('2d');
                        if (null != n) {
                            n.clearRect(0, 0, e.width, e.height),
                                null == h || h(n),
                                E.current.forEach(function (r, i) {
                                    var a = r.confetti,
                                        s = r.spriteCanvas;
                                    a.update(l), a.draw(s, n), a.shouldDestroy(e, l) && E.current.delete(i);
                                }),
                                null == p || p(n),
                                E.current.size > 0 ? (v.current = window.requestAnimationFrame(b)) : (n.clearRect(0, 0, e.width, e.height), (v.current = null));
                            var r = Date.now();
                            0 !== I.current && (T.current = 1000 / (r - I.current)), (I.current = r);
                        }
                    }
                },
                [l, p, h]
            );
        i.useEffect(
            function () {
                null != v.current && (window.cancelAnimationFrame(v.current), (v.current = window.requestAnimationFrame(b)));
            },
            [b]
        );
        var y = i.useCallback(
                function (e, n) {
                    E.current.set(e.id, {
                        confetti: e,
                        spriteCanvas: n
                    }),
                        null == v.current && b();
                },
                [b]
            ),
            S = i.useCallback(
                function (e, n, r, i, s) {
                    var o,
                        l = D(null !== (o = e.id) && void 0 !== o ? o : (0, a.Z)(), e, r, i, s);
                    return y(l, n), l;
                },
                [y]
            ),
            A = i.useCallback(function (e) {
                E.current.delete(e);
            }, []),
            N = i.useCallback(function () {
                return E.current.clear();
            }, []),
            C = i.useCallback(function () {
                return g.current;
            }, []);
        i.useImperativeHandle(
            n,
            function () {
                return {
                    createConfetti: S,
                    addConfetti: y,
                    deleteConfetti: A,
                    clearConfetti: N,
                    getCanvas: C
                };
            },
            [S, y, A, N, C]
        );
        var R = i.useCallback(
                function (e, n) {
                    var r,
                        i,
                        a = n.clickHandler,
                        o = n.mouseHandler;
                    if (null != a || null != o) {
                        var u = null === (r = g.current) || void 0 === r ? void 0 : r.getBoundingClientRect();
                        if (null != u) {
                            var c = (function (e, n) {
                                if (null == n) throw Error('element should not be null');
                                var r = n.getBoundingClientRect();
                                return {
                                    x: e.clientX - r.left,
                                    y: e.clientY - r.top
                                };
                            })(e, g.current);
                            if (
                                s(c, {
                                    x: u.left,
                                    y: u.top,
                                    width: u.width,
                                    height: u.height
                                })
                            ) {
                                if (null != o) return o(e);
                                if (null != a) {
                                    var d = (-1000 / T.current) * 2,
                                        f = (function (e, n) {
                                            for (var r = 0, i = Array.from(e.values()); r < i.length; r++) {
                                                var a = i[r];
                                                if (null != a && n(a)) return a;
                                            }
                                            return null;
                                        })(E.current, function (e) {
                                            var n = e.confetti,
                                                r = n.previewPositionUpdate(l, d);
                                            return s(c, {
                                                x: r.x - n.width / 2,
                                                y: r.y - n.height / 2,
                                                width: n.width,
                                                height: n.height
                                            });
                                        });
                                    a(e, null !== (i = null == f ? void 0 : f.confetti) && void 0 !== i ? i : null);
                                }
                            }
                        }
                    }
                },
                [l]
            ),
            O = i.useCallback(
                function (e) {
                    return R(e, { clickHandler: u });
                },
                [R, u]
            ),
            L = i.useCallback(
                function (e) {
                    return R(e, { clickHandler: c });
                },
                [R, c]
            ),
            x = i.useCallback(
                function (e) {
                    return R(e, { mouseHandler: d });
                },
                [R, d]
            ),
            w = i.useCallback(
                function (e) {
                    return R(e, { mouseHandler: f });
                },
                [R, f]
            );
        return (
            i.useEffect(
                function () {
                    var e = function (e, n, r) {
                        null != r && window.addEventListener(e, n);
                    };
                    return (
                        e('click', O, u),
                        e('mousedown', L, c),
                        e('mousemove', x, d),
                        e('mouseup', w, f),
                        function () {
                            window.removeEventListener('click', O), window.removeEventListener('mousedown', L), window.removeEventListener('mousemove', x), window.removeEventListener('mouseup', x);
                        }
                    );
                },
                [O, L, x, w, u, c, d, f]
            ),
            i.useEffect(function () {
                var e = g.current,
                    n = new ResizeObserver(function () {
                        !(function (e) {
                            if (null != e) {
                                var n = e.getBoundingClientRect(),
                                    i = n.width,
                                    a = n.height;
                                (e.width = i * r.g.devicePixelRatio), (e.height = a * r.g.devicePixelRatio);
                            }
                        })(g.current);
                    });
                return (
                    null != e && n.observe(e),
                    function () {
                        null != e && n.unobserve(e);
                    }
                );
            }, []),
            i.createElement(
                'canvas',
                _({}, m, {
                    className: o,
                    ref: g
                })
            )
        );
    }),
    x = {
        display: 'none',
        position: 'absolute',
        width: 0,
        height: 0,
        left: '-100%'
    },
    w = i.forwardRef(function (e, n) {
        var r = e.className,
            s = e.visible,
            o = void 0 !== s && s,
            l = e.sprites,
            u = e.colors,
            c = e.spriteWidth,
            d = e.spriteHeight,
            f = i.useRef(null),
            _ = i.useRef([]),
            m = i.useRef(!1),
            g = i.useRef({});
        i.useImperativeHandle(
            n,
            function () {
                return {
                    getCanvas: function () {
                        return f.current;
                    },
                    getCreateData: function () {
                        return {
                            sprites: _.current,
                            colors: u,
                            spriteWidth: c,
                            spriteHeight: d
                        };
                    },
                    addReadyListener: function (e) {
                        var n = (0, a.Z)();
                        return (g.current[n] = e), n;
                    },
                    removeReadyListener: function (e) {
                        delete g.current[e];
                    },
                    isReady: m.current
                };
            },
            [u, d, c]
        );
        var E = i.useCallback(
                function () {
                    var e = f.current,
                        n = null == e ? void 0 : e.getContext('2d', { willReadFrequently: !0 });
                    null != n &&
                        null != e &&
                        (n.clearRect(0, 0, e.width, e.height),
                        _.current.forEach(function (e, r) {
                            var i = function (i, a) {
                                var s = c * a + 2 * a,
                                    o = d * r + 2 * r;
                                if ((n.drawImage(e.image, s, o, c, d), null != i)) {
                                    for (
                                        var l = n.getImageData(s, o, c, d),
                                            u = (function (e) {
                                                '#' === e[0] && (e = e.slice(1));
                                                var n = parseInt(e, 16);
                                                return {
                                                    r: (n >> 16) & 255,
                                                    g: (n >> 8) & 255,
                                                    b: 255 & n
                                                };
                                            })(i),
                                            f = 0;
                                        f < l.data.length;
                                        f += 4
                                    )
                                        (l.data[f] = u.r), (l.data[f + 1] = u.g), (l.data[f + 2] = u.b);
                                    n.putImageData(l, s, o);
                                }
                            };
                            e.colorize
                                ? u.forEach(function (e, n) {
                                      return i(e, n);
                                  })
                                : i(null, 0);
                        }));
                },
                [u, d, c]
            ),
            v = i.useCallback(
                function () {
                    var e = l.map(function (e) {
                        var n = new Image(),
                            r = 'string' == typeof e ? e : e.src,
                            i = 'string' == typeof e || e.colorize;
                        n.src = r;
                        var a = new Promise(function (e) {
                            n.onload = e;
                        });
                        return {
                            colorize: i,
                            image: n,
                            src: r,
                            loadPromise: a
                        };
                    });
                    return Promise.all(
                        e.map(function (e) {
                            return e.loadPromise;
                        })
                    ).then(function () {
                        _.current = e.map(function (e) {
                            return {
                                colorize: e.colorize,
                                image: e.image,
                                src: e.src
                            };
                        });
                    });
                },
                [l]
            ),
            I = i.useCallback(function (e) {
                for (var n in g.current) g.current[n](e);
            }, []),
            T = i.useCallback(
                function () {
                    return h(void 0, void 0, void 0, function () {
                        return p(this, function (e) {
                            switch (e.label) {
                                case 0:
                                    return [4, v()];
                                case 1:
                                    return e.sent(), E(), (m.current = !0), I(!0), [2];
                            }
                        });
                    });
                },
                [I, v, E]
            );
        return (
            i.useEffect(
                function () {
                    T();
                },
                [T]
            ),
            i.useEffect(
                function () {
                    return function () {
                        return I(!1);
                    };
                },
                [I]
            ),
            i.useEffect(
                function () {
                    null != f.current && ((f.current.width = (c + 2) * Math.max(u.length, 1)), (f.current.height = (d + 2) * l.length));
                },
                [u.length, d, c, l.length]
            ),
            i.createElement('canvas', {
                ref: f,
                className: r,
                style: o ? void 0 : x
            })
        );
    });
function P(e, n) {
    var r,
        a = i.useState(null !== (r = null == n ? void 0 : n.isReady) && void 0 !== r && r),
        s = a[0],
        o = a[1];
    i.useEffect(
        function () {
            var e = null == n ? void 0 : n.addReadyListener(o);
            return function () {
                null != e && (null == n || n.removeReadyListener(e));
            };
        },
        [n]
    );
    var l = i.useCallback(
            function (r, i) {
                var a = void 0 === i ? {} : i,
                    s = a.sprite,
                    o = a.color,
                    l = null == n ? void 0 : n.getCreateData(),
                    u = null == n ? void 0 : n.getCanvas();
                if (null != u && null != l && 0 !== l.sprites.length) return null == e ? void 0 : e.createConfetti(r, u, l, s, o);
            },
            [e, n]
        ),
        u = i.useCallback(
            function (e, n, r) {
                for (var i = [], a = 0; a < n; a++) {
                    var s = l(e, r);
                    s && i.push(s);
                }
                return i;
            },
            [l]
        ),
        c = i.useCallback(
            function (r) {
                var i = null == n ? void 0 : n.getCanvas();
                null != i && (null == e || e.addConfetti(r, i));
            },
            [e, n]
        ),
        d = i.useCallback(
            function (n) {
                null == e || e.deleteConfetti(n);
            },
            [e]
        ),
        f = i.useCallback(
            function () {
                return null == e ? void 0 : e.clearConfetti();
            },
            [e]
        );
    return i.useMemo(
        function () {
            return {
                createConfetti: l,
                createMultipleConfetti: u,
                addConfetti: c,
                clearConfetti: f,
                deleteConfetti: d,
                isReady: s && null != n && null != e
            };
        },
        [c, f, e, l, u, d, s, n]
    );
}
