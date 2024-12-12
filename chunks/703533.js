r.d(n, {
    Ji: function () {
        return M;
    },
    O_: function () {
        return w;
    },
    qA: function () {
        return f;
    },
    uR: function () {
        return k;
    }
});
var i = r(192379),
    a = r(772848),
    s = r(120356),
    o = r.n(s);
function l(e, n) {
    var r = e.x,
        i = e.y;
    return r > n.x && r < n.x + n.width && i > n.y && i < n.y + n.height;
}
function u(e, n, r, i) {
    var a = n > 0 ? -1 : 1,
        s = Math.abs(n);
    return 0.5 * e * i * r * s * s * a;
}
var c = (function () {
        function e(e) {
            (this.id = e.id), (this.position = e.position), (this.velocity = e.velocity), (this.rotation = e.rotation), (this.dragCoefficient = e.dragCoefficient), (this.airResistanceArea = e.airResistanceArea), (this.size = e.size), (this.opacity = e.opacity), (this.spriteX = e.spriteX), (this.spriteY = e.spriteY), (this.spriteWidth = e.spriteWidth), (this.spriteHeight = e.spriteHeight), (this._lastUpdatedAt = Date.now());
        }
        return (
            (e.prototype.getNewForces = function (e, n) {
                var r = e.wind * n,
                    i = -e.gravity * n;
                return {
                    x: r + u(this.dragCoefficient.x, this.velocity.x, this.airResistanceArea.x, e.density),
                    y: i + u(this.dragCoefficient.y, this.velocity.y, this.airResistanceArea.y, e.density)
                };
            }),
            (e.prototype.update = function (e) {
                var n = Date.now(),
                    r = (n - this._lastUpdatedAt) / 100;
                this.rotation.update(r), this.dragCoefficient.update(r);
                var i = this.getNewForces(e, r),
                    a = i.x,
                    s = i.y;
                this.velocity.update(r), (this.velocity.x += a), (this.velocity.y += s), this.position.update(r), (this.position.x += this.velocity.x * r), (this.position.y += this.velocity.y * r), this.size.update(r), this.opacity.update(r), (this._lastUpdatedAt = n);
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
    d = {
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
    f = function (e) {
        var n = void 0 === e ? {} : e,
            r = n.gravity,
            i = n.wind,
            a = n.density;
        (this.gravity = -9.8), (this.wind = 0), (this.density = 1.2041), (this.gravity = null != r ? r : this.gravity), (this.wind = null != i ? i : this.wind), (this.density = null != a ? a : this.density);
    },
    _ = function (e, n) {
        return (_ =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
                function (e, n) {
                    e.__proto__ = n;
                }) ||
            function (e, n) {
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            })(e, n);
    };
function h(e, n) {
    if ('function' != typeof n && null !== n) throw TypeError('Class extends value ' + String(n) + ' is not a constructor or null');
    function r() {
        this.constructor = e;
    }
    _(e, n), (e.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
}
var p = function () {
    return (p =
        Object.assign ||
        function (e) {
            for (var n, r = 1, i = arguments.length; r < i; r++) for (var a in (n = arguments[r])) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            return e;
        }).apply(this, arguments);
};
function m(e, n, r, i) {
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
function g(e, n) {
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
var E = function (e) {
        this.value = e;
    },
    v = (function () {
        function e(e, n) {
            (this._x = e), (this._y = n);
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
        function n(n, r, i) {
            var a = e.call(this, n, r) || this;
            return (a._z = i), a;
        }
        return (
            h(n, e),
            (n.prototype.update = function (n) {
                e.prototype.update.call(this, n), this._z.update(n);
            }),
            (n.prototype.previewUpdate = function (n) {
                var r = e.prototype.previewUpdate.call(this, n);
                return p(p({}, r), { z: this._z.previewUpdate(n) });
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
    })(v),
    T = (function (e) {
        function n() {
            return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
            h(n, e),
            (n.prototype.update = function () {}),
            (n.prototype.previewUpdate = function () {
                return this.value;
            }),
            n
        );
    })(E),
    b = (function (e) {
        function n(n, r) {
            var i = e.call(this, n) || this;
            return (i.addValue = r), i;
        }
        return (
            h(n, e),
            (n.prototype.update = function (e) {
                this.value = this.previewUpdate(e);
            }),
            (n.prototype.previewUpdate = function (e) {
                return this.value + this.addValue * e;
            }),
            n
        );
    })(E),
    y = (function (e) {
        function n(n, r, i, a, s, o) {
            var l = e.call(this, n) || this;
            (l.min = r), (l.max = i), (l.duration = a);
            var u = (l.value / (l.max - l.min)) * l.duration,
                c = isNaN(u) ? 0 : u;
            return (l.timePassed = c < 0 ? l.duration - c : c), (l.directionMultiplier = s), (l.easingFunction = o), l;
        }
        return (
            h(n, e),
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
    })(E);
function S(e, n) {
    return e === n ? e : Math.random() * (n - e + 1) + e;
}
function A(e) {
    var n = Math.floor(S(0, e.length - 1));
    return [e[n], n];
}
function N(e, n) {
    return A([e, n])[0];
}
function C(e) {
    return 'number' == typeof e
        ? {
              x: e,
              y: e
          }
        : e;
}
function R(e) {
    return 'number' == typeof e
        ? {
              x: e,
              y: e,
              z: e
          }
        : e;
}
function O(e) {
    return (function (e) {
        switch (e.type) {
            case 'static':
                return new T(e.value);
            case 'static-random':
                return new T(S(e.minValue, e.maxValue));
            case 'linear':
                return new b(e.value, e.addValue);
            case 'linear-random':
                return new b(S(e.minValue, e.maxValue), S(e.minAddValue, e.maxAddValue));
            case 'oscillating':
                return new y(e.value, e.start, e.final, e.duration, e.direction, e.easingFunction);
            case 'oscillating-random':
                return new y(S(e.minValue, e.maxValue), S(e.minStart, e.maxStart), S(e.minFinal, e.maxFinal), S(e.minDuration, e.maxDuration), N(e.minDirection, e.maxDirection), A(e.easingFunctions)[0]);
        }
    })(p(p({}, e), { valueType: 'number' }));
}
function D(e) {
    return (function (e) {
        switch (e.type) {
            case 'static':
                var n = C(e.value);
                return new v(new T(n.x), new T(n.y));
            case 'static-random':
                var r = C(e.minValue),
                    i = C(e.maxValue);
                return new v(new T(S(r.x, i.x)), new T(S(r.y, i.y)));
            case 'linear':
                n = C(e.value);
                var a = C(e.addValue);
                return new v(new b(n.x, a.x), new b(n.y, a.y));
            case 'linear-random':
                (r = C(e.minValue)), (i = C(e.maxValue));
                var s = C(e.minAddValue),
                    o = C(e.maxAddValue);
                return new v(new b(S(r.x, i.x), S(s.x, o.x)), new b(S(r.y, i.y), S(s.x, o.x)));
            case 'oscillating':
                n = C(e.value);
                var l = C(e.start),
                    u = C(e.final),
                    c = C(e.duration),
                    d = C(e.direction);
                return new v(new y(n.x, l.x, u.x, c.x, d.x, e.easingFunction), new y(n.y, l.y, u.y, c.x, d.y, e.easingFunction));
            case 'oscillating-random':
                (r = C(e.minValue)), (i = C(e.maxValue));
                var f = C(e.minStart),
                    _ = C(e.maxStart),
                    h = C(e.minFinal),
                    p = C(e.maxFinal),
                    m = C(e.minDuration),
                    g = C(e.maxDuration),
                    E = C(e.minDirection),
                    I = C(e.maxDirection);
                return new v(new y(S(r.x, i.x), S(f.x, _.x), S(h.x, p.x), S(m.x, g.x), N(E.x, I.x), A(e.easingFunctions)[0]), new y(S(r.y, i.y), S(f.y, _.y), S(h.y, p.y), S(m.y, g.y), N(E.y, I.y), A(e.easingFunctions)[0]));
        }
    })(p(p({}, e), { valueType: 'Vector2' }));
}
function L(e) {
    return (function (e) {
        switch (e.type) {
            case 'static':
                var n = R(e.value);
                return new I(new T(n.x), new T(n.y), new T(n.z));
            case 'static-random':
                var r = R(e.minValue),
                    i = R(e.maxValue);
                return new I(new T(S(r.x, i.x)), new T(S(r.y, i.y)), new T(S(r.z, i.z)));
            case 'linear':
                n = R(e.value);
                var a = R(e.addValue);
                return new I(new b(n.x, a.x), new b(n.y, a.y), new b(n.z, a.z));
            case 'linear-random':
                (r = R(e.minValue)), (i = R(e.maxValue));
                var s = R(e.minAddValue),
                    o = R(e.maxAddValue);
                return new I(new b(S(r.x, i.x), S(s.x, o.x)), new b(S(r.y, i.y), S(s.y, o.y)), new b(S(r.z, i.z), S(s.z, o.z)));
            case 'oscillating':
                n = R(e.value);
                var l = R(e.start),
                    u = R(e.final),
                    c = R(e.duration),
                    d = R(e.direction);
                return new I(new y(n.x, l.x, u.x, c.x, d.x, e.easingFunction), new y(n.y, l.y, u.y, c.z, d.y, e.easingFunction), new y(n.z, l.z, u.z, c.z, d.z, e.easingFunction));
            case 'oscillating-random':
                (r = R(e.minValue)), (i = R(e.maxValue));
                var f = R(e.minStart),
                    _ = R(e.maxStart),
                    h = R(e.minFinal),
                    p = R(e.maxFinal),
                    m = R(e.minDuration),
                    g = R(e.maxDuration),
                    E = R(e.minDirection),
                    v = R(e.maxDirection);
                return new I(new y(S(r.x, i.x), S(f.x, _.x), S(h.x, p.x), S(m.x, g.x), N(E.x, v.x), A(e.easingFunctions)[0]), new y(S(r.y, i.y), S(f.y, _.y), S(h.y, p.y), S(m.y, g.y), N(E.y, v.y), A(e.easingFunctions)[0]), new y(S(r.z, i.z), S(f.z, _.z), S(h.z, p.z), S(m.z, g.z), N(E.z, v.z), A(e.easingFunctions)[0]));
        }
    })(p(p({}, e), { valueType: 'Vector3' }));
}
function x(e, n, r, i, a) {
    var s = (function (e, n) {
            return p(p({ id: n }, d), e);
        })(n, e),
        o = D(s.size),
        l = (function (e, n) {
            if (null != e) {
                var r = n.sprites.findIndex(function (n) {
                    var r, i;
                    return (r = n), 'string' == typeof (i = e) ? r.src === i && r.colorize : r.src === i.src && r.colorize === i.colorize;
                });
                if (-1 !== r) return [e, r];
            }
            return A(n.sprites);
        })(i, r),
        u = l[0],
        f = l[1],
        _ = (function (e, n, r) {
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
            return -1 !== i ? i : Math.floor(S(0, r.colors.length - 1));
        })(null != i ? i : u, a, r);
    return new c({
        id: e,
        position: D(s.position),
        velocity: D(s.velocity),
        rotation: L(s.rotation),
        dragCoefficient: D(s.dragCoefficient),
        size: o,
        opacity: O(s.opacity),
        airResistanceArea: D(s.airResistanceArea),
        spriteX: _ * r.spriteWidth + 2 * _,
        spriteY: f * r.spriteHeight + 2 * f,
        spriteWidth: r.spriteWidth,
        spriteHeight: r.spriteHeight
    });
}
var w = i.forwardRef(function (e, n) {
        var s = e.className,
            o = e.environment,
            u = e.onClick,
            c = e.onMouseDown,
            d = e.onMouseMove,
            f = e.onMouseUp,
            _ = e.onBeforeRender,
            h = e.onAfterRender,
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
                                null == _ || _(n),
                                E.current.forEach(function (r, i) {
                                    var a = r.confetti,
                                        s = r.spriteCanvas;
                                    a.update(o), a.draw(s, n), a.shouldDestroy(e, o) && E.current.delete(i);
                                }),
                                null == h || h(n),
                                E.current.size > 0 ? (v.current = window.requestAnimationFrame(b)) : (n.clearRect(0, 0, e.width, e.height), (v.current = null));
                            var r = Date.now();
                            0 !== I.current && (T.current = 1000 / (r - I.current)), (I.current = r);
                        }
                    }
                },
                [o, h, _]
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
                        l = x(null !== (o = e.id) && void 0 !== o ? o : (0, a.Z)(), e, r, i, s);
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
                        s = n.mouseHandler;
                    if (null != a || null != s) {
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
                                l(c, {
                                    x: u.left,
                                    y: u.top,
                                    width: u.width,
                                    height: u.height
                                })
                            ) {
                                if (null != s) return s(e);
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
                                                r = n.previewPositionUpdate(o, d);
                                            return l(c, {
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
                [o]
            ),
            O = i.useCallback(
                function (e) {
                    return R(e, { clickHandler: u });
                },
                [R, u]
            ),
            D = i.useCallback(
                function (e) {
                    return R(e, { clickHandler: c });
                },
                [R, c]
            ),
            L = i.useCallback(
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
                        e('mousedown', D, c),
                        e('mousemove', L, d),
                        e('mouseup', w, f),
                        function () {
                            window.removeEventListener('click', O), window.removeEventListener('mousedown', D), window.removeEventListener('mousemove', L), window.removeEventListener('mouseup', L);
                        }
                    );
                },
                [O, D, L, w, u, c, d, f]
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
                p({}, m, {
                    className: s,
                    ref: g
                })
            )
        );
    }),
    P = 'SpriteCanvas-module_spriteCanvasHidden__ndzQV';
!(function (e, n) {
    void 0 === n && (n = {});
    var r = n.insertAt;
    if (e && 'undefined' != typeof document) {
        var i = document.head || document.getElementsByTagName('head')[0],
            a = document.createElement('style');
        (a.type = 'text/css'), 'top' === r && i.firstChild ? i.insertBefore(a, i.firstChild) : i.appendChild(a), a.styleSheet ? (a.styleSheet.cssText = e) : a.appendChild(document.createTextNode(e));
    }
})('.SpriteCanvas-module_spriteCanvasHidden__ndzQV {\n  display: none;\n  position: absolute;\n  width: 0;\n  height: 0;\n  left: -100%;\n}\n');
var M = i.forwardRef(function (e, n) {
    var r,
        s = e.className,
        l = e.visible,
        u = void 0 !== l && l,
        c = e.sprites,
        d = e.colors,
        f = e.spriteWidth,
        _ = e.spriteHeight,
        h = i.useRef(null),
        p = i.useRef([]),
        E = i.useRef(!1),
        v = i.useRef({});
    i.useImperativeHandle(
        n,
        function () {
            return {
                getCanvas: function () {
                    return h.current;
                },
                getCreateData: function () {
                    return {
                        sprites: p.current,
                        colors: d,
                        spriteWidth: f,
                        spriteHeight: _
                    };
                },
                addReadyListener: function (e) {
                    var n = (0, a.Z)();
                    return (v.current[n] = e), n;
                },
                removeReadyListener: function (e) {
                    delete v.current[e];
                },
                isReady: E.current
            };
        },
        [d, _, f]
    );
    var I = i.useCallback(
            function () {
                var e = h.current,
                    n = null == e ? void 0 : e.getContext('2d', { willReadFrequently: !0 });
                null != n &&
                    null != e &&
                    (n.clearRect(0, 0, e.width, e.height),
                    p.current.forEach(function (e, r) {
                        var i = function (i, a) {
                            var s = f * a + 2 * a,
                                o = _ * r + 2 * r;
                            if ((n.drawImage(e.image, s, o, f, _), null != i)) {
                                for (
                                    var l = n.getImageData(s, o, f, _),
                                        u = (function (e) {
                                            '#' === e[0] && (e = e.slice(1));
                                            var n = parseInt(e, 16);
                                            return {
                                                r: (n >> 16) & 255,
                                                g: (n >> 8) & 255,
                                                b: 255 & n
                                            };
                                        })(i),
                                        c = 0;
                                    c < l.data.length;
                                    c += 4
                                )
                                    (l.data[c] = u.r), (l.data[c + 1] = u.g), (l.data[c + 2] = u.b);
                                n.putImageData(l, s, o);
                            }
                        };
                        e.colorize
                            ? d.forEach(function (e, n) {
                                  return i(e, n);
                              })
                            : i(null, 0);
                    }));
            },
            [d, _, f]
        ),
        T = i.useCallback(
            function () {
                var e = c.map(function (e) {
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
                    p.current = e.map(function (e) {
                        return {
                            colorize: e.colorize,
                            image: e.image,
                            src: e.src
                        };
                    });
                });
            },
            [c]
        ),
        b = i.useCallback(function (e) {
            for (var n in v.current) v.current[n](e);
        }, []),
        y = i.useCallback(
            function () {
                return m(void 0, void 0, void 0, function () {
                    return g(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return [4, T()];
                            case 1:
                                return e.sent(), I(), (E.current = !0), b(!0), [2];
                        }
                    });
                });
            },
            [b, T, I]
        );
    return (
        i.useEffect(
            function () {
                y();
            },
            [y]
        ),
        i.useEffect(
            function () {
                return function () {
                    return b(!1);
                };
            },
            [b]
        ),
        i.useEffect(
            function () {
                null != h.current && ((h.current.width = (f + 2) * Math.max(d.length, 1)), (h.current.height = (_ + 2) * c.length));
            },
            [d.length, _, f, c.length]
        ),
        i.createElement('canvas', {
            ref: h,
            className: o()(s, (((r = {})[P] = !u), r))
        })
    );
});
function k(e, n) {
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
