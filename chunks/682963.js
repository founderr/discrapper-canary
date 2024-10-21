n.d(t, {
    Ji: function () {
        return L;
    },
    O_: function () {
        return C;
    },
    qA: function () {
        return d;
    },
    uR: function () {
        return D;
    }
});
var r = n(470079),
    i = n(772848),
    a = n(120356),
    s = n.n(a);
function o(e, t) {
    var n = e.x,
        r = e.y;
    return n > t.x && n < t.x + t.width && r > t.y && r < t.y + t.height;
}
function l(e, t, n, r) {
    var i = Math.abs(t);
    return 0.5 * e * r * n * i * i * (t > 0 ? -1 : 1);
}
var u = (function () {
        function e(e) {
            (this.id = e.id), (this.position = e.position), (this.velocity = e.velocity), (this.rotation = e.rotation), (this.dragCoefficient = e.dragCoefficient), (this.airResistanceArea = e.airResistanceArea), (this.size = e.size), (this.opacity = e.opacity), (this.spriteX = e.spriteX), (this.spriteY = e.spriteY), (this.spriteWidth = e.spriteWidth), (this.spriteHeight = e.spriteHeight), (this._lastUpdatedAt = Date.now());
        }
        return (
            (e.prototype.getNewForces = function (e, t) {
                var n = e.wind * t,
                    r = -e.gravity * t;
                return {
                    x: n + l(this.dragCoefficient.x, this.velocity.x, this.airResistanceArea.x, e.density),
                    y: r + l(this.dragCoefficient.y, this.velocity.y, this.airResistanceArea.y, e.density)
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
                    s = i.y;
                (r.x += a), (r.y += s);
                var o = this.position.previewUpdate(n);
                return (o.x += r.x * n), (o.y += r.y * n), o;
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
    d = function (e) {
        var t = void 0 === e ? {} : e,
            n = t.gravity,
            r = t.wind,
            i = t.density;
        (this.gravity = -9.8), (this.wind = 0), (this.density = 1.2041), (this.gravity = null != n ? n : this.gravity), (this.wind = null != r ? r : this.wind), (this.density = null != i ? i : this.density);
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
    },
    h = function (e) {
        this.value = e;
    },
    p = (function () {
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
    I = (function (e) {
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
    })(p),
    m = (function (e) {
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
    })(h),
    T = (function (e) {
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
    })(h),
    S = (function (e) {
        function t(t, n, r, i, a, s) {
            var o = e.call(this, t) || this;
            (o.min = n), (o.max = r), (o.duration = i);
            var l = (o.value / (o.max - o.min)) * o.duration,
                u = isNaN(l) ? 0 : l;
            return (o.timePassed = u < 0 ? o.duration - u : u), (o.directionMultiplier = a), (o.easingFunction = s), o;
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
    })(h);
function g(e, t) {
    return e === t ? e : Math.random() * (t - e + 1) + e;
}
function A(e) {
    var t = Math.floor(g(0, e.length - 1));
    return [e[t], t];
}
function N(e, t) {
    return A([e, t])[0];
}
function R(e) {
    return 'number' == typeof e
        ? {
              x: e,
              y: e
          }
        : e;
}
function O(e) {
    return 'number' == typeof e
        ? {
              x: e,
              y: e,
              z: e
          }
        : e;
}
function v(e) {
    return (function (e) {
        switch (e.type) {
            case 'static':
                var t = R(e.value);
                return new p(new m(t.x), new m(t.y));
            case 'static-random':
                var n = R(e.minValue),
                    r = R(e.maxValue);
                return new p(new m(g(n.x, r.x)), new m(g(n.y, r.y)));
            case 'linear':
                t = R(e.value);
                var i = R(e.addValue);
                return new p(new T(t.x, i.x), new T(t.y, i.y));
            case 'linear-random':
                (n = R(e.minValue)), (r = R(e.maxValue));
                var a = R(e.minAddValue),
                    s = R(e.maxAddValue);
                return new p(new T(g(n.x, r.x), g(a.x, s.x)), new T(g(n.y, r.y), g(a.x, s.x)));
            case 'oscillating':
                t = R(e.value);
                var o = R(e.start),
                    l = R(e.final),
                    u = R(e.duration),
                    c = R(e.direction);
                return new p(new S(t.x, o.x, l.x, u.x, c.x, e.easingFunction), new S(t.y, o.y, l.y, u.x, c.y, e.easingFunction));
            case 'oscillating-random':
                (n = R(e.minValue)), (r = R(e.maxValue));
                var d = R(e.minStart),
                    _ = R(e.maxStart),
                    E = R(e.minFinal),
                    f = R(e.maxFinal),
                    h = R(e.minDuration),
                    I = R(e.maxDuration),
                    O = R(e.minDirection),
                    v = R(e.maxDirection);
                return new p(new S(g(n.x, r.x), g(d.x, _.x), g(E.x, f.x), g(h.x, I.x), N(O.x, v.x), A(e.easingFunctions)[0]), new S(g(n.y, r.y), g(d.y, _.y), g(E.y, f.y), g(h.y, I.y), N(O.y, v.y), A(e.easingFunctions)[0]));
        }
    })(f(f({}, e), { valueType: 'Vector2' }));
}
var C = r.forwardRef(function (e, t) {
    var a = e.className,
        s = e.environment,
        l = e.onClick,
        d = e.onMouseDown,
        _ = e.onMouseMove,
        E = e.onMouseUp,
        h = e.onBeforeRender,
        p = e.onAfterRender,
        R = (function (e, t) {
            var n = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
            if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
                var i = 0;
                for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) 0 > t.indexOf(r[i]) && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
            }
            return n;
        })(e, ['className', 'environment', 'onClick', 'onMouseDown', 'onMouseMove', 'onMouseUp', 'onBeforeRender', 'onAfterRender']),
        C = r.useRef(null),
        L = r.useRef(new Map()),
        D = r.useRef(null),
        y = r.useRef(0),
        b = r.useRef(0),
        M = r.useCallback(
            function () {
                var e = C.current;
                if (null != e) {
                    var t = e.getContext('2d');
                    if (null != t) {
                        t.clearRect(0, 0, e.width, e.height),
                            null == h || h(t),
                            L.current.forEach(function (n, r) {
                                var i = n.confetti,
                                    a = n.spriteCanvas;
                                i.update(s), i.draw(a, t), i.shouldDestroy(e, s) && L.current.delete(r);
                            }),
                            null == p || p(t),
                            L.current.size > 0 ? (D.current = window.requestAnimationFrame(M)) : (t.clearRect(0, 0, e.width, e.height), (D.current = null));
                        var n = Date.now();
                        0 !== y.current && (b.current = 1000 / (n - y.current)), (y.current = n);
                    }
                }
            },
            [s, p, h]
        );
    r.useEffect(
        function () {
            null != D.current && (window.cancelAnimationFrame(D.current), (D.current = window.requestAnimationFrame(M)));
        },
        [M]
    );
    var P = r.useCallback(
            function (e, t) {
                L.current.set(e.id, {
                    confetti: e,
                    spriteCanvas: t
                }),
                    null == D.current && M();
            },
            [M]
        ),
        U = r.useCallback(
            function (e, t, n, r, a) {
                var s,
                    o,
                    l,
                    d,
                    _,
                    E,
                    h,
                    p,
                    R,
                    C,
                    L,
                    D,
                    y,
                    b,
                    M,
                    U =
                        ((s = null !== (M = e.id) && void 0 !== M ? M : (0, i.Z)()),
                        (o = e),
                        (l = n),
                        (d = r),
                        (_ = a),
                        (p = v((h = ((E = o), f(f({ id: s }, c), E))).size)),
                        (C = (R = (function (e, t) {
                            if (null != e) {
                                var n = t.sprites.findIndex(function (t) {
                                    return 'string' == typeof e ? t.src === e && t.colorize : t.src === e.src && t.colorize === e.colorize;
                                });
                                if (-1 !== n) return [e, n];
                            }
                            return A(t.sprites);
                        })(d, l))[0]),
                        (L = R[1]),
                        (D = (function (e, t, n) {
                            if (!('string' == typeof (r = e) || r.colorize)) return 0;
                            var r,
                                i =
                                    null != t
                                        ? n.colors.findIndex(function (e) {
                                              return e === t;
                                          })
                                        : -1;
                            return -1 !== i ? i : Math.floor(g(0, n.colors.length - 1));
                        })(null != d ? d : C, _, l)),
                        new u({
                            id: s,
                            position: v(h.position),
                            velocity: v(h.velocity),
                            rotation:
                                ((y = h.rotation),
                                (function (e) {
                                    switch (e.type) {
                                        case 'static':
                                            var t = O(e.value);
                                            return new I(new m(t.x), new m(t.y), new m(t.z));
                                        case 'static-random':
                                            var n = O(e.minValue),
                                                r = O(e.maxValue);
                                            return new I(new m(g(n.x, r.x)), new m(g(n.y, r.y)), new m(g(n.z, r.z)));
                                        case 'linear':
                                            t = O(e.value);
                                            var i = O(e.addValue);
                                            return new I(new T(t.x, i.x), new T(t.y, i.y), new T(t.z, i.z));
                                        case 'linear-random':
                                            (n = O(e.minValue)), (r = O(e.maxValue));
                                            var a = O(e.minAddValue),
                                                s = O(e.maxAddValue);
                                            return new I(new T(g(n.x, r.x), g(a.x, s.x)), new T(g(n.y, r.y), g(a.y, s.y)), new T(g(n.z, r.z), g(a.z, s.z)));
                                        case 'oscillating':
                                            t = O(e.value);
                                            var o = O(e.start),
                                                l = O(e.final),
                                                u = O(e.duration),
                                                c = O(e.direction);
                                            return new I(new S(t.x, o.x, l.x, u.x, c.x, e.easingFunction), new S(t.y, o.y, l.y, u.z, c.y, e.easingFunction), new S(t.z, o.z, l.z, u.z, c.z, e.easingFunction));
                                        case 'oscillating-random':
                                            (n = O(e.minValue)), (r = O(e.maxValue));
                                            var d = O(e.minStart),
                                                _ = O(e.maxStart),
                                                E = O(e.minFinal),
                                                f = O(e.maxFinal),
                                                h = O(e.minDuration),
                                                p = O(e.maxDuration),
                                                R = O(e.minDirection),
                                                v = O(e.maxDirection);
                                            return new I(new S(g(n.x, r.x), g(d.x, _.x), g(E.x, f.x), g(h.x, p.x), N(R.x, v.x), A(e.easingFunctions)[0]), new S(g(n.y, r.y), g(d.y, _.y), g(E.y, f.y), g(h.y, p.y), N(R.y, v.y), A(e.easingFunctions)[0]), new S(g(n.z, r.z), g(d.z, _.z), g(E.z, f.z), g(h.z, p.z), N(R.z, v.z), A(e.easingFunctions)[0]));
                                    }
                                })(f(f({}, y), { valueType: 'Vector3' }))),
                            dragCoefficient: v(h.dragCoefficient),
                            size: p,
                            opacity:
                                ((b = h.opacity),
                                (function (e) {
                                    switch (e.type) {
                                        case 'static':
                                            return new m(e.value);
                                        case 'static-random':
                                            return new m(g(e.minValue, e.maxValue));
                                        case 'linear':
                                            return new T(e.value, e.addValue);
                                        case 'linear-random':
                                            return new T(g(e.minValue, e.maxValue), g(e.minAddValue, e.maxAddValue));
                                        case 'oscillating':
                                            return new S(e.value, e.start, e.final, e.duration, e.direction, e.easingFunction);
                                        case 'oscillating-random':
                                            return new S(g(e.minValue, e.maxValue), g(e.minStart, e.maxStart), g(e.minFinal, e.maxFinal), g(e.minDuration, e.maxDuration), N(e.minDirection, e.maxDirection), A(e.easingFunctions)[0]);
                                    }
                                })(f(f({}, b), { valueType: 'number' }))),
                            airResistanceArea: v(h.airResistanceArea),
                            spriteX: D * l.spriteWidth + 2 * D,
                            spriteY: L * l.spriteHeight + 2 * L,
                            spriteWidth: l.spriteWidth,
                            spriteHeight: l.spriteHeight
                        }));
                return P(U, t), U;
            },
            [P]
        ),
        w = r.useCallback(function (e) {
            L.current.delete(e);
        }, []),
        x = r.useCallback(function () {
            return L.current.clear();
        }, []),
        G = r.useCallback(function () {
            return C.current;
        }, []);
    r.useImperativeHandle(
        t,
        function () {
            return {
                createConfetti: U,
                addConfetti: P,
                deleteConfetti: w,
                clearConfetti: x,
                getCanvas: G
            };
        },
        [U, P, w, x, G]
    );
    var k = r.useCallback(
            function (e, t) {
                var n,
                    r,
                    i = t.clickHandler,
                    a = t.mouseHandler;
                if (null != i || null != a) {
                    var l = null === (n = C.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                    if (null != l) {
                        var u = (function (e, t) {
                            if (null == t) throw Error('element should not be null');
                            var n = t.getBoundingClientRect();
                            return {
                                x: e.clientX - n.left,
                                y: e.clientY - n.top
                            };
                        })(e, C.current);
                        if (
                            o(u, {
                                x: l.left,
                                y: l.top,
                                width: l.width,
                                height: l.height
                            })
                        ) {
                            if (null != a) return a(e);
                            if (null != i) {
                                var c = (-1000 / b.current) * 2,
                                    d = (function (e, t) {
                                        for (var n = 0, r = Array.from(e.values()); n < r.length; n++) {
                                            var i = r[n];
                                            if (null != i && t(i)) return i;
                                        }
                                        return null;
                                    })(L.current, function (e) {
                                        var t = e.confetti,
                                            n = t.previewPositionUpdate(s, c);
                                        return o(u, {
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
            [s]
        ),
        B = r.useCallback(
            function (e) {
                return k(e, { clickHandler: l });
            },
            [k, l]
        ),
        F = r.useCallback(
            function (e) {
                return k(e, { clickHandler: d });
            },
            [k, d]
        ),
        V = r.useCallback(
            function (e) {
                return k(e, { mouseHandler: _ });
            },
            [k, _]
        ),
        H = r.useCallback(
            function (e) {
                return k(e, { mouseHandler: E });
            },
            [k, E]
        );
    return (
        r.useEffect(
            function () {
                var e = function (e, t, n) {
                    null != n && window.addEventListener(e, t);
                };
                return (
                    e('click', B, l),
                    e('mousedown', F, d),
                    e('mousemove', V, _),
                    e('mouseup', H, E),
                    function () {
                        window.removeEventListener('click', B), window.removeEventListener('mousedown', F), window.removeEventListener('mousemove', V), window.removeEventListener('mouseup', V);
                    }
                );
            },
            [B, F, V, H, l, d, _, E]
        ),
        r.useEffect(function () {
            var e = C.current,
                t = new ResizeObserver(function () {
                    !(function (e) {
                        if (null != e) {
                            var t = e.getBoundingClientRect(),
                                r = t.width,
                                i = t.height;
                            (e.width = r * n.g.devicePixelRatio), (e.height = i * n.g.devicePixelRatio);
                        }
                    })(C.current);
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
            f({}, R, {
                className: a,
                ref: C
            })
        )
    );
});
!(function (e, t) {
    void 0 === t && (t = {});
    var n = t.insertAt;
    if (e && 'undefined' != typeof document) {
        var r = document.head || document.getElementsByTagName('head')[0],
            i = document.createElement('style');
        (i.type = 'text/css'), 'top' === n && r.firstChild ? r.insertBefore(i, r.firstChild) : r.appendChild(i), i.styleSheet ? (i.styleSheet.cssText = e) : i.appendChild(document.createTextNode(e));
    }
})('.SpriteCanvas-module_spriteCanvasHidden__ndzQV {\n  display: none;\n  position: absolute;\n  width: 0;\n  height: 0;\n  left: -100%;\n}\n');
var L = r.forwardRef(function (e, t) {
    var n,
        a = e.className,
        o = e.visible,
        l = e.sprites,
        u = e.colors,
        c = e.spriteWidth,
        d = e.spriteHeight,
        _ = r.useRef(null),
        E = r.useRef([]),
        f = r.useRef(!1),
        h = r.useRef({});
    r.useImperativeHandle(
        t,
        function () {
            return {
                getCanvas: function () {
                    return _.current;
                },
                getCreateData: function () {
                    return {
                        sprites: E.current,
                        colors: u,
                        spriteWidth: c,
                        spriteHeight: d
                    };
                },
                addReadyListener: function (e) {
                    var t = (0, i.Z)();
                    return (h.current[t] = e), t;
                },
                removeReadyListener: function (e) {
                    delete h.current[e];
                },
                isReady: f.current
            };
        },
        [u, d, c]
    );
    var p = r.useCallback(
            function () {
                var e = _.current,
                    t = null == e ? void 0 : e.getContext('2d', { willReadFrequently: !0 });
                null != t &&
                    null != e &&
                    (t.clearRect(0, 0, e.width, e.height),
                    E.current.forEach(function (e, n) {
                        var r = function (r, i) {
                            var a = c * i + 2 * i,
                                s = d * n + 2 * n;
                            if ((t.drawImage(e.image, a, s, c, d), null != r)) {
                                for (
                                    var o,
                                        l,
                                        u = t.getImageData(a, s, c, d),
                                        _ =
                                            ('#' === (o = r)[0] && (o = o.slice(1)),
                                            {
                                                r: ((l = parseInt(o, 16)) >> 16) & 255,
                                                g: (l >> 8) & 255,
                                                b: 255 & l
                                            }),
                                        E = 0;
                                    E < u.data.length;
                                    E += 4
                                )
                                    (u.data[E] = _.r), (u.data[E + 1] = _.g), (u.data[E + 2] = _.b);
                                t.putImageData(u, a, s);
                            }
                        };
                        e.colorize
                            ? u.forEach(function (e, t) {
                                  return r(e, t);
                              })
                            : r(null, 0);
                    }));
            },
            [u, d, c]
        ),
        I = r.useCallback(
            function () {
                var e = l.map(function (e) {
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
                    E.current = e.map(function (e) {
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
        m = r.useCallback(function (e) {
            for (var t in h.current) h.current[t](e);
        }, []),
        T = r.useCallback(
            function () {
                var e, t, n, r;
                return (
                    (e = void 0),
                    (t = void 0),
                    (n = void 0),
                    (r = function () {
                        return (function (e, t) {
                            var n,
                                r,
                                i,
                                a,
                                s = {
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
                                    next: o(0),
                                    throw: o(1),
                                    return: o(2)
                                }),
                                'function' == typeof Symbol &&
                                    (a[Symbol.iterator] = function () {
                                        return this;
                                    }),
                                a
                            );
                            function o(o) {
                                return function (l) {
                                    return (function (o) {
                                        if (n) throw TypeError('Generator is already executing.');
                                        for (; a && ((a = 0), o[0] && (s = 0)), s; )
                                            try {
                                                if (((n = 1), r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done)) return i;
                                                switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                                                    case 0:
                                                    case 1:
                                                        i = o;
                                                        break;
                                                    case 4:
                                                        return (
                                                            s.label++,
                                                            {
                                                                value: o[1],
                                                                done: !1
                                                            }
                                                        );
                                                    case 5:
                                                        s.label++, (r = o[1]), (o = [0]);
                                                        continue;
                                                    case 7:
                                                        (o = s.ops.pop()), s.trys.pop();
                                                        continue;
                                                    default:
                                                        if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                            s = 0;
                                                            continue;
                                                        }
                                                        if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                                                            s.label = o[1];
                                                            break;
                                                        }
                                                        if (6 === o[0] && s.label < i[1]) {
                                                            (s.label = i[1]), (i = o);
                                                            break;
                                                        }
                                                        if (i && s.label < i[2]) {
                                                            (s.label = i[2]), s.ops.push(o);
                                                            break;
                                                        }
                                                        i[2] && s.ops.pop(), s.trys.pop();
                                                        continue;
                                                }
                                                o = t.call(e, s);
                                            } catch (e) {
                                                (o = [6, e]), (r = 0);
                                            } finally {
                                                n = i = 0;
                                            }
                                        if (5 & o[0]) throw o[1];
                                        return {
                                            value: o[0] ? o[1] : void 0,
                                            done: !0
                                        };
                                    })([o, l]);
                                };
                            }
                        })(this, function (e) {
                            switch (e.label) {
                                case 0:
                                    return [4, I()];
                                case 1:
                                    return e.sent(), p(), (f.current = !0), m(!0), [2];
                            }
                        });
                    }),
                    new (n || (n = Promise))(function (i, a) {
                        function s(e) {
                            try {
                                l(r.next(e));
                            } catch (e) {
                                a(e);
                            }
                        }
                        function o(e) {
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
                                  ).then(s, o);
                        }
                        l((r = r.apply(e, t || [])).next());
                    })
                );
            },
            [m, I, p]
        );
    return (
        r.useEffect(
            function () {
                T();
            },
            [T]
        ),
        r.useEffect(
            function () {
                return function () {
                    return m(!1);
                };
            },
            [m]
        ),
        r.useEffect(
            function () {
                null != _.current && ((_.current.width = (c + 2) * Math.max(u.length, 1)), (_.current.height = (d + 2) * l.length));
            },
            [u.length, d, c, l.length]
        ),
        r.createElement('canvas', {
            ref: _,
            className: s()(a, (((n = {})['SpriteCanvas-module_spriteCanvasHidden__ndzQV'] = !(void 0 !== o && o)), n))
        })
    );
});
function D(e, t) {
    var n,
        i = r.useState(null !== (n = null == t ? void 0 : t.isReady) && void 0 !== n && n),
        a = i[0],
        s = i[1];
    r.useEffect(
        function () {
            var e = null == t ? void 0 : t.addReadyListener(s);
            return function () {
                null != e && (null == t || t.removeReadyListener(e));
            };
        },
        [t]
    );
    var o = r.useCallback(
            function (n, r) {
                var i = void 0 === r ? {} : r,
                    a = i.sprite,
                    s = i.color,
                    o = null == t ? void 0 : t.getCreateData(),
                    l = null == t ? void 0 : t.getCanvas();
                if (null != l && null != o && 0 !== o.sprites.length) return null == e ? void 0 : e.createConfetti(n, l, o, a, s);
            },
            [e, t]
        ),
        l = r.useCallback(
            function (e, t, n) {
                for (var r = [], i = 0; i < t; i++) {
                    var a = o(e, n);
                    a && r.push(a);
                }
                return r;
            },
            [o]
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
                createConfetti: o,
                createMultipleConfetti: l,
                addConfetti: u,
                clearConfetti: d,
                deleteConfetti: c,
                isReady: a && null != t && null != e
            };
        },
        [u, d, e, o, l, c, a, t]
    );
}
