(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [45482, 70801, 83081, 53686], {
        652411: (e, t, n) => {
            "use strict";
            n.d(t, {
                O_: () => P,
                qA: () => d,
                Ji: () => L,
                uR: () => M
            });
            var r = n(667294),
                i = n(468811),
                o = n(294184),
                a = n.n(o);

            function u(e, t) {
                var n = e.x,
                    r = e.y;
                return n > t.x && n < t.x + t.width && r > t.y && r < t.y + t.height
            }

            function l(e, t) {
                return e * t * t * (t > 0 ? -1 : 1)
            }
            var c = function() {
                    function e(e) {
                        this.id = e.id, this.position = e.position, this.velocity = e.velocity, this.rotation = e.rotation, this.dragCoefficient = e.dragCoefficient, this.size = e.size, this.opacity = e.opacity, this.spriteX = e.spriteX, this.spriteY = e.spriteY, this.spriteWidth = e.spriteWidth, this.spriteHeight = e.spriteHeight, this._lastUpdatedAt = Date.now()
                    }
                    return e.prototype.getNewForces = function(e, t) {
                        var n = e.wind * t,
                            r = -e.gravity * t;
                        return {
                            x: n + l(this.dragCoefficient.x, this.velocity.x),
                            y: r + l(this.dragCoefficient.y, this.velocity.y)
                        }
                    }, e.prototype.update = function(e) {
                        var t = Date.now(),
                            n = (t - this._lastUpdatedAt) / 100;
                        this.rotation.update(n), this.dragCoefficient.update(n);
                        var r = this.getNewForces(e, n),
                            i = r.x,
                            o = r.y;
                        this.velocity.update(n), this.velocity.x += i, this.velocity.y += o, this.position.update(n), this.position.x += this.velocity.x * n, this.position.y += this.velocity.y * n, this.size.update(n), this.opacity.update(n), this._lastUpdatedAt = t
                    }, e.prototype.previewPositionUpdate = function(e, t) {
                        var n = t / 100,
                            r = this.velocity.previewUpdate(n),
                            i = this.getNewForces(e, n),
                            o = i.x,
                            a = i.y;
                        r.x += o, r.y += a;
                        var u = this.position.previewUpdate(n);
                        return u.x += r.x * n, u.y += r.y * n, u
                    }, e.prototype.draw = function(e, t) {
                        t.save(), t.globalAlpha = this.opacity.value, t.setTransform((new DOMMatrix).translateSelf(this.position.x * n.g.devicePixelRatio, this.position.y * n.g.devicePixelRatio).rotateSelf(this.rotation.x, this.rotation.y, this.rotation.z)), t.drawImage(e, this.spriteX, this.spriteY, this.spriteWidth, this.spriteHeight, -this.width / 2 * n.g.devicePixelRatio, -this.height / 2 * n.g.devicePixelRatio, this.width * n.g.devicePixelRatio, this.height * n.g.devicePixelRatio), t.restore()
                    }, e.prototype.shouldDestroy = function(e, t) {
                        return this.opacity.value < 0 || t.gravity >= 0 && this.velocity.y < 0 && this.position.y + this.height < 0 || t.gravity <= 0 && this.velocity.y > 0 && this.position.y - this.height > e.height || t.wind >= 0 && this.velocity.x > 0 && this.position.x - this.width > e.width || t.wind <= 0 && this.velocity.x < 0 && this.position.x + this.width < 0
                    }, Object.defineProperty(e.prototype, "width", {
                        get: function() {
                            return this.size.x
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "height", {
                        get: function() {
                            return this.size.y
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e.prototype.addForce = function(e) {
                        this.velocity.x += e.x, this.velocity.y += e.y
                    }, e
                }(),
                s = {
                    velocity: {
                        type: "static",
                        value: 0
                    },
                    rotation: {
                        type: "static",
                        value: 0
                    },
                    dragCoefficient: {
                        type: "static",
                        value: .001
                    },
                    opacity: {
                        type: "static",
                        value: 1
                    }
                },
                d = function(e) {
                    var t = void 0 === e ? {} : e,
                        n = t.gravity,
                        r = t.wind;
                    this.gravity = -9.8, this.wind = 0, this.gravity = null != n ? n : this.gravity, this.wind = null != r ? r : this.wind
                },
                f = function(e, t) {
                    return f = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    }, f(e, t)
                };

            function p(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function n() {
                    this.constructor = e
                }
                f(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }
            var E = function() {
                return E = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }, E.apply(this, arguments)
            };
            var _ = function(e) {
                    this.value = e
                },
                h = function() {
                    function e(e, t) {
                        this._x = e, this._y = t
                    }
                    return e.prototype.update = function(e) {
                        this._x.update(e), this._y.update(e)
                    }, e.prototype.previewUpdate = function(e) {
                        return {
                            x: this._x.previewUpdate(e),
                            y: this._y.previewUpdate(e)
                        }
                    }, Object.defineProperty(e.prototype, "x", {
                        get: function() {
                            return this._x.value
                        },
                        set: function(e) {
                            this._x.value = e
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "y", {
                        get: function() {
                            return this._y.value
                        },
                        set: function(e) {
                            this._y.value = e
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e
                }(),
                v = function(e) {
                    function t(t, n, r) {
                        var i = e.call(this, t, n) || this;
                        return i._z = r, i
                    }
                    return p(t, e), t.prototype.update = function(t) {
                        e.prototype.update.call(this, t), this._z.update(t)
                    }, t.prototype.previewUpdate = function(t) {
                        var n = e.prototype.previewUpdate.call(this, t);
                        return E(E({}, n), {
                            z: this._z.previewUpdate(t)
                        })
                    }, Object.defineProperty(t.prototype, "z", {
                        get: function() {
                            return this._z.value
                        },
                        set: function(e) {
                            this._z.value = e
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(h),
                m = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return p(t, e), t.prototype.update = function() {}, t.prototype.previewUpdate = function() {
                        return this.value
                    }, t
                }(_),
                O = function(e) {
                    function t(t, n) {
                        var r = e.call(this, t) || this;
                        return r.addValue = n, r
                    }
                    return p(t, e), t.prototype.update = function(e) {
                        this.value = this.previewUpdate(e)
                    }, t.prototype.previewUpdate = function(e) {
                        return this.value + this.addValue * e
                    }, t
                }(_),
                g = function(e) {
                    function t(t, n, r, i, o, a) {
                        var u = e.call(this, t) || this;
                        u.min = n, u.max = r, u.duration = i;
                        var l = u.value / (u.max - u.min) * u.duration,
                            c = isNaN(l) ? 0 : l;
                        return u.timePassed = c < 0 ? u.duration - c : c, u.directionMultiplier = o, u.easingFunction = a, u
                    }
                    return p(t, e), t.prototype.update = function(e) {
                        var t = this.doUpdate(e),
                            n = t[0],
                            r = t[1],
                            i = t[2];
                        this.value = n, this.directionMultiplier = i, this.timePassed = r
                    }, t.prototype.previewUpdate = function(e) {
                        return this.doUpdate(e)[0]
                    }, t.prototype.doUpdate = function(e) {
                        var t = this.max - this.min,
                            n = this.timePassed + e * this.directionMultiplier,
                            r = Math.min(Math.max(n, 0), this.duration),
                            i = n < 0 || n > this.duration ? -1 * this.directionMultiplier : this.directionMultiplier,
                            o = this.easingFunction(r, this.min, t, this.duration);
                        return [isNaN(o) ? 0 : o, r, i]
                    }, t
                }(_);

            function y(e, t) {
                return e === t ? e : Math.random() * (t - e + 1) + e
            }

            function T(e) {
                var t = Math.floor(y(0, e.length - 1));
                return [e[t], t]
            }

            function I(e, t) {
                return T([e, t])[0]
            }

            function b(e) {
                return "number" == typeof e ? {
                    x: e,
                    y: e
                } : e
            }

            function A(e) {
                return "number" == typeof e ? {
                    x: e,
                    y: e,
                    z: e
                } : e
            }

            function C(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            return new m(e.value);
                        case "static-random":
                            return new m(y(e.minValue, e.maxValue));
                        case "linear":
                            return new O(e.value, e.addValue);
                        case "linear-random":
                            return new O(y(e.minValue, e.maxValue), y(e.minAddValue, e.maxAddValue));
                        case "oscillating":
                            return new g(e.value, e.start, e.final, e.duration, e.direction, e.easingFunction);
                        case "oscillating-random":
                            return new g(y(e.minValue, e.maxValue), y(e.minStart, e.maxStart), y(e.minFinal, e.maxFinal), y(e.minDuration, e.maxDuration), I(e.minDirection, e.maxDirection), T(e.easingFunctions)[0])
                    }
                }(E(E({}, e), {
                    valueType: "number"
                }))
            }

            function R(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            var t = b(e.value);
                            return new h(new m(t.x), new m(t.y));
                        case "static-random":
                            var n = b(e.minValue),
                                r = b(e.maxValue);
                            return new h(new m(y(n.x, r.x)), new m(y(n.y, r.y)));
                        case "linear":
                            t = b(e.value);
                            var i = b(e.addValue);
                            return new h(new O(t.x, i.x), new O(t.y, i.y));
                        case "linear-random":
                            n = b(e.minValue), r = b(e.maxValue);
                            var o = b(e.minAddValue),
                                a = b(e.maxAddValue);
                            return new h(new O(y(n.x, r.x), y(o.x, a.x)), new O(y(n.y, r.y), y(o.x, a.x)));
                        case "oscillating":
                            t = b(e.value);
                            var u = b(e.start),
                                l = b(e.final),
                                c = b(e.duration),
                                s = b(e.direction);
                            return new h(new g(t.x, u.x, l.x, c.x, s.x, e.easingFunction), new g(t.y, u.y, l.y, c.x, s.y, e.easingFunction));
                        case "oscillating-random":
                            n = b(e.minValue), r = b(e.maxValue);
                            var d = b(e.minStart),
                                f = b(e.maxStart),
                                p = b(e.minFinal),
                                E = b(e.maxFinal),
                                _ = b(e.minDuration),
                                v = b(e.maxDuration),
                                A = b(e.minDirection),
                                C = b(e.maxDirection);
                            return new h(new g(y(n.x, r.x), y(d.x, f.x), y(p.x, E.x), y(_.x, v.x), I(A.x, C.x), T(e.easingFunctions)[0]), new g(y(n.y, r.y), y(d.y, f.y), y(p.y, E.y), y(_.y, v.y), I(A.y, C.y), T(e.easingFunctions)[0]))
                    }
                }(E(E({}, e), {
                    valueType: "Vector2"
                }))
            }

            function N(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            var t = A(e.value);
                            return new v(new m(t.x), new m(t.y), new m(t.z));
                        case "static-random":
                            var n = A(e.minValue),
                                r = A(e.maxValue);
                            return new v(new m(y(n.x, r.x)), new m(y(n.y, r.y)), new m(y(n.z, r.z)));
                        case "linear":
                            t = A(e.value);
                            var i = A(e.addValue);
                            return new v(new O(t.x, i.x), new O(t.y, i.y), new O(t.z, i.z));
                        case "linear-random":
                            n = A(e.minValue), r = A(e.maxValue);
                            var o = A(e.minAddValue),
                                a = A(e.maxAddValue);
                            return new v(new O(y(n.x, r.x), y(o.x, a.x)), new O(y(n.y, r.y), y(o.y, a.y)), new O(y(n.z, r.z), y(o.z, a.z)));
                        case "oscillating":
                            t = A(e.value);
                            var u = A(e.start),
                                l = A(e.final),
                                c = A(e.duration),
                                s = A(e.direction);
                            return new v(new g(t.x, u.x, l.x, c.x, s.x, e.easingFunction), new g(t.y, u.y, l.y, c.z, s.y, e.easingFunction), new g(t.z, u.z, l.z, c.z, s.z, e.easingFunction));
                        case "oscillating-random":
                            n = A(e.minValue), r = A(e.maxValue);
                            var d = A(e.minStart),
                                f = A(e.maxStart),
                                p = A(e.minFinal),
                                E = A(e.maxFinal),
                                _ = A(e.minDuration),
                                h = A(e.maxDuration),
                                b = A(e.minDirection),
                                C = A(e.maxDirection);
                            return new v(new g(y(n.x, r.x), y(d.x, f.x), y(p.x, E.x), y(_.x, h.x), I(b.x, C.x), T(e.easingFunctions)[0]), new g(y(n.y, r.y), y(d.y, f.y), y(p.y, E.y), y(_.y, h.y), I(b.y, C.y), T(e.easingFunctions)[0]), new g(y(n.z, r.z), y(d.z, f.z), y(p.z, E.z), y(_.z, h.z), I(b.z, C.z), T(e.easingFunctions)[0]))
                    }
                }(E(E({}, e), {
                    valueType: "Vector3"
                }))
            }

            function S(e, t, n, r, i) {
                var o = function(e, t) {
                        return E(E({
                            id: t
                        }, s), e)
                    }(t, e),
                    a = R(o.size),
                    u = function(e, t) {
                        if (null != e) {
                            var n = t.sprites.findIndex((function(t) {
                                return n = t, "string" == typeof(r = e) ? n.src === r && n.colorize : n.src === r.src && n.colorize === r.colorize;
                                var n, r
                            }));
                            if (-1 !== n) return [e, n]
                        }
                        return T(t.sprites)
                    }(r, n),
                    l = u[0],
                    d = u[1],
                    f = function(e, t, n) {
                        if (! function(e) {
                                return "string" == typeof e || e.colorize
                            }(e)) return 0;
                        var r = null != t ? n.colors.findIndex((function(e) {
                            return e === t
                        })) : -1;
                        return -1 !== r ? r : Math.floor(y(0, n.colors.length - 1))
                    }(null != r ? r : l, i, n);
                return new c({
                    id: e,
                    position: R(o.position),
                    velocity: R(o.velocity),
                    rotation: N(o.rotation),
                    dragCoefficient: R(o.dragCoefficient),
                    size: a,
                    opacity: C(o.opacity),
                    spriteX: f * n.spriteWidth + 2 * f,
                    spriteY: d * n.spriteHeight + 2 * d,
                    spriteWidth: n.spriteWidth,
                    spriteHeight: n.spriteHeight
                })
            }
            var P = r.forwardRef((function(e, t) {
                var o = e.className,
                    a = e.environment,
                    l = e.onClick,
                    c = e.onMouseDown,
                    s = e.onMouseMove,
                    d = e.onMouseUp,
                    f = e.onBeforeRender,
                    p = e.onAfterRender,
                    _ = function(e, t) {
                        var n = {};
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var i = 0;
                            for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
                        }
                        return n
                    }(e, ["className", "environment", "onClick", "onMouseDown", "onMouseMove", "onMouseUp", "onBeforeRender", "onAfterRender"]),
                    h = r.useRef(null),
                    v = r.useRef(new Map),
                    m = r.useRef(null),
                    O = r.useRef(0),
                    g = r.useRef(0),
                    y = r.useCallback((function() {
                        var e = h.current;
                        if (null != e) {
                            var t = e.getContext("2d");
                            if (null != t) {
                                t.clearRect(0, 0, e.width, e.height), null == f || f(t), v.current.forEach((function(n, r) {
                                    var i = n.confetti,
                                        o = n.spriteCanvas;
                                    i.update(a), i.draw(o, t), i.shouldDestroy(e, a) && v.current.delete(r)
                                })), null == p || p(t), v.current.size > 0 ? m.current = window.requestAnimationFrame(y) : (t.clearRect(0, 0, e.width, e.height), m.current = null);
                                var n = Date.now();
                                0 !== O.current && (g.current = 1e3 / (n - O.current)), O.current = n
                            }
                        }
                    }), [a, p, f]);
                r.useEffect((function() {
                    null != m.current && (window.cancelAnimationFrame(m.current), m.current = window.requestAnimationFrame(y))
                }), [y]);
                var T = r.useCallback((function(e, t) {
                        v.current.set(e.id, {
                            confetti: e,
                            spriteCanvas: t
                        }), null == m.current && y()
                    }), [y]),
                    I = r.useCallback((function(e, t, n, r, o) {
                        var a, u = S(null !== (a = e.id) && void 0 !== a ? a : (0, i.v4)(), e, n, r, o);
                        return T(u, t), u
                    }), [T]),
                    b = r.useCallback((function(e) {
                        v.current.delete(e)
                    }), []),
                    A = r.useCallback((function() {
                        return v.current.clear()
                    }), []),
                    C = r.useCallback((function() {
                        return h.current
                    }), []);
                r.useImperativeHandle(t, (function() {
                    return {
                        createConfetti: I,
                        addConfetti: T,
                        deleteConfetti: b,
                        clearConfetti: A,
                        getCanvas: C
                    }
                }), [I, T, b, A, C]);
                var R = r.useCallback((function(e, t) {
                        var n, r, i = t.clickHandler,
                            o = t.mouseHandler;
                        if (null != i || null != o) {
                            var l = null === (n = h.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                            if (null != l) {
                                var c = function(e, t) {
                                    if (null == t) throw new Error("element should not be null");
                                    var n = t.getBoundingClientRect();
                                    return {
                                        x: e.clientX - n.left,
                                        y: e.clientY - n.top
                                    }
                                }(e, h.current);
                                if (u(c, {
                                        x: l.left,
                                        y: l.top,
                                        width: l.width,
                                        height: l.height
                                    })) {
                                    if (null != o) return o(e);
                                    if (null != i) {
                                        var s = -1e3 / g.current * 2,
                                            d = function(e, t) {
                                                for (var n = 0, r = Array.from(e.values()); n < r.length; n++) {
                                                    var i = r[n];
                                                    if (null != i && t(i)) return i
                                                }
                                                return null
                                            }(v.current, (function(e) {
                                                var t = e.confetti,
                                                    n = t.previewPositionUpdate(a, s);
                                                return u(c, {
                                                    x: n.x - t.width / 2,
                                                    y: n.y - t.height / 2,
                                                    width: t.width,
                                                    height: t.height
                                                })
                                            }));
                                        i(e, null !== (r = null == d ? void 0 : d.confetti) && void 0 !== r ? r : null)
                                    }
                                }
                            }
                        }
                    }), [a]),
                    N = r.useCallback((function(e) {
                        return R(e, {
                            clickHandler: l
                        })
                    }), [R, l]),
                    P = r.useCallback((function(e) {
                        return R(e, {
                            clickHandler: c
                        })
                    }), [R, c]),
                    L = r.useCallback((function(e) {
                        return R(e, {
                            mouseHandler: s
                        })
                    }), [R, s]),
                    M = r.useCallback((function(e) {
                        return R(e, {
                            mouseHandler: d
                        })
                    }), [R, d]);
                return r.useEffect((function() {
                    var e = function(e, t, n) {
                        null != n && window.addEventListener(e, t)
                    };
                    return e("click", N, l), e("mousedown", P, c), e("mousemove", L, s), e("mouseup", M, d),
                        function() {
                            window.removeEventListener("click", N), window.removeEventListener("mousedown", P), window.removeEventListener("mousemove", L), window.removeEventListener("mouseup", L)
                        }
                }), [N, P, L, M, l, c, s, d]), r.useEffect((function() {
                    var e = h.current,
                        t = new ResizeObserver((function() {
                            ! function(e) {
                                if (null != e) {
                                    var t = e.getBoundingClientRect(),
                                        r = t.width,
                                        i = t.height;
                                    e.width = r * n.g.devicePixelRatio, e.height = i * n.g.devicePixelRatio
                                }
                            }(h.current)
                        }));
                    return null != e && t.observe(e),
                        function() {
                            null != e && t.unobserve(e)
                        }
                }), []), r.createElement("canvas", E({}, _, {
                    className: o,
                    ref: h
                }))
            }));
            ! function(e, t) {
                void 0 === t && (t = {});
                var n = t.insertAt;
                if ("undefined" != typeof document) {
                    var r = document.head || document.getElementsByTagName("head")[0],
                        i = document.createElement("style");
                    i.type = "text/css",
                        "top" === n && r.firstChild ? r.insertBefore(i, r.firstChild) : r.appendChild(i), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(document.createTextNode(e))
                }
            }(".SpriteCanvas-module_spriteCanvasHidden__ndzQV {\n  display: none;\n  position: absolute;\n  width: 0;\n  height: 0;\n  left: -100%;\n}\n");
            var L = r.forwardRef((function(e, t) {
                var n, o = e.className,
                    u = e.visible,
                    l = void 0 !== u && u,
                    c = e.sprites,
                    s = e.colors,
                    d = e.spriteWidth,
                    f = e.spriteHeight,
                    p = r.useRef(null),
                    E = r.useRef([]),
                    _ = r.useRef(!1),
                    h = r.useRef({});
                r.useImperativeHandle(t, (function() {
                    return {
                        getCanvas: function() {
                            return p.current
                        },
                        getCreateData: function() {
                            return {
                                sprites: E.current,
                                colors: s,
                                spriteWidth: d,
                                spriteHeight: f
                            }
                        },
                        addReadyListener: function(e) {
                            var t = (0, i.v4)();
                            return h.current[t] = e, t
                        },
                        removeReadyListener: function(e) {
                            delete h.current[e]
                        },
                        isReady: _.current
                    }
                }), [s, f, d]);
                var v = r.useCallback((function() {
                        var e = p.current,
                            t = null == e ? void 0 : e.getContext("2d", {
                                willReadFrequently: !0
                            });
                        null != t && null != e && (t.clearRect(0, 0, e.width, e.height),
                            E.current.forEach((function(e, n) {
                                var r = function(r, i) {
                                    var o = d * i + 2 * i,
                                        a = f * n + 2 * n;
                                    if (t.drawImage(e.image, o, a, d, f), null != r) {
                                        for (var u = t.getImageData(o, a, d, f), l = function(e) {
                                                "#" === e[0] && (e = e.slice(1));
                                                var t = parseInt(e, 16);
                                                return {
                                                    r: t >> 16 & 255,
                                                    g: t >> 8 & 255,
                                                    b: 255 & t
                                                }
                                            }(r), c = 0; c < u.data.length; c += 4) u.data[c] = l.r, u.data[c + 1] = l.g, u.data[c + 2] = l.b;
                                        t.putImageData(u, o, a)
                                    }
                                };
                                e.colorize ? s.forEach((function(e, t) {
                                    return r(e, t)
                                })) : r(null, 0)
                            })))
                    }), [s, f, d]),
                    m = r.useCallback((function() {
                        var e = c.map((function(e) {
                            var t = new Image,
                                n = "string" == typeof e ? e : e.src,
                                r = "string" == typeof e || e.colorize;
                            t.src = n;
                            var i = new Promise((function(e) {
                                t.onload = e
                            }));
                            return {
                                colorize: r,
                                image: t,
                                src: n,
                                loadPromise: i
                            }
                        }));
                        return Promise.all(e.map((function(e) {
                            return e.loadPromise
                        }))).then((function() {
                            E.current = e.map((function(e) {
                                return {
                                    colorize: e.colorize,
                                    image: e.image,
                                    src: e.src
                                }
                            }))
                        }))
                    }), [c]),
                    O = r.useCallback((function(e) {
                        for (var t in h.current) h.current[t](e)
                    }), []),
                    g = r.useCallback((function() {
                        return function(e, t, n, r) {
                            return new(n || (n = Promise))((function(i, o) {
                                function a(e) {
                                    try {
                                        l(r.next(e))
                                    } catch (e) {
                                        o(e)
                                    }
                                }

                                function u(e) {
                                    try {
                                        l(r.throw(e))
                                    } catch (e) {
                                        o(e)
                                    }
                                }

                                function l(e) {
                                    var t;
                                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                        e(t)
                                    }))).then(a, u)
                                }
                                l((r = r.apply(e, t || [])).next())
                            }))
                        }(void 0, void 0, void 0, (function() {
                            return function(e, t) {
                                var n, r, i, o, a = {
                                    label: 0,
                                    sent: function() {
                                        if (1 & i[0]) throw i[1];
                                        return i[1]
                                    },
                                    trys: [],
                                    ops: []
                                };
                                return o = {
                                    next: u(0),
                                    throw: u(1),
                                    return: u(2)
                                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                                    return this
                                }), o;

                                function u(u) {
                                    return function(l) {
                                        return function(u) {
                                            if (n) throw new TypeError("Generator is already executing.");
                                            for (; o && (o = 0, u[0] && (a = 0)), a;) try {
                                                if (n = 1, r && (i = 2 & u[0] ? r.return : u[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, u[1])).done) return i;
                                                switch (r = 0, i && (u = [2 & u[0], i.value]), u[0]) {
                                                    case 0:
                                                    case 1:
                                                        i = u;
                                                        break;
                                                    case 4:
                                                        return a.label++, {
                                                            value: u[1],
                                                            done: !1
                                                        };
                                                    case 5:
                                                        a.label++, r = u[1], u = [0];
                                                        continue;
                                                    case 7:
                                                        u = a.ops.pop(), a.trys.pop();
                                                        continue;
                                                    default:
                                                        if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== u[0] && 2 !== u[0])) {
                                                            a = 0;
                                                            continue
                                                        }
                                                        if (3 === u[0] && (!i || u[1] > i[0] && u[1] < i[3])) {
                                                            a.label = u[1];
                                                            break
                                                        }
                                                        if (6 === u[0] && a.label < i[1]) {
                                                            a.label = i[1], i = u;
                                                            break
                                                        }
                                                        if (i && a.label < i[2]) {
                                                            a.label = i[2], a.ops.push(u);
                                                            break
                                                        }
                                                        i[2] && a.ops.pop(), a.trys.pop();
                                                        continue
                                                }
                                                u = t.call(e, a)
                                            } catch (e) {
                                                u = [6, e], r = 0
                                            } finally {
                                                n = i = 0
                                            }
                                            if (5 & u[0]) throw u[1];
                                            return {
                                                value: u[0] ? u[1] : void 0,
                                                done: !0
                                            }
                                        }([u, l])
                                    }
                                }
                            }(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, m()];
                                    case 1:
                                        return e.sent(), v(), _.current = !0, O(!0), [2]
                                }
                            }))
                        }))
                    }), [O, m, v]);
                return r.useEffect((function() {
                    g()
                }), [g]), r.useEffect((function() {
                    return function() {
                        return O(!1)
                    }
                }), [O]), r.useEffect((function() {
                    null != p.current && (p.current.width = (d + 2) * Math.max(s.length, 1), p.current.height = (f + 2) * c.length)
                }), [s.length, f, d, c.length]), r.createElement("canvas", {
                    ref: p,
                    className: a()(o, (n = {}, n["SpriteCanvas-module_spriteCanvasHidden__ndzQV"] = !l, n))
                })
            }));

            function M(e, t) {
                var n, i = r.useState(null !== (n = null == t ? void 0 : t.isReady) && void 0 !== n && n),
                    o = i[0],
                    a = i[1];
                r.useEffect((function() {
                    var e = null == t ? void 0 : t.addReadyListener(a);
                    return function() {
                        null != e && (null == t || t.removeReadyListener(e))
                    }
                }), [t]);
                var u = r.useCallback((function(n, r) {
                        var i = void 0 === r ? {} : r,
                            o = i.sprite,
                            a = i.color,
                            u = null == t ? void 0 : t.getCreateData(),
                            l = null == t ? void 0 : t.getCanvas();
                        if (null != l && null != u && 0 !== u.sprites.length) return null == e ? void 0 : e.createConfetti(n, l, u, o, a)
                    }), [e, t]),
                    l = r.useCallback((function(e, t, n) {
                        for (var r = [], i = 0; i < t; i++) {
                            var o = u(e, n);
                            o && r.push(o)
                        }
                        return r
                    }), [u]),
                    c = r.useCallback((function(n) {
                        var r = null == t ? void 0 : t.getCanvas();
                        null != r && (null == e || e.addConfetti(n, r))
                    }), [e, t]),
                    s = r.useCallback((function(t) {
                        null == e || e.deleteConfetti(t)
                    }), [e]),
                    d = r.useCallback((function() {
                        return null == e ? void 0 : e.clearConfetti()
                    }), [e]);
                return r.useMemo((function() {
                    return {
                        createConfetti: u,
                        createMultipleConfetti: l,
                        addConfetti: c,
                        clearConfetti: d,
                        deleteConfetti: s,
                        isReady: o && null != t && null != e
                    }
                }), [c, d, e, u, l, s, o, t])
            }
        },
        483683: (e, t, n) => {
            e.exports = n.p + "72db7a1fbe5d3c861fe63c26f634b5d2.svg"
        },
        63685: (e, t, n) => {
            e.exports = n.p + "a4e25b25c89b862150e6eeb520e67dd5.svg"
        },
        735885: (e, t, n) => {
            "use strict";
            n.d(t, {
                jN: () => i,
                xf: () => o,
                Ou: () => a
            });
            var r = n(744564);

            function i(e) {
                r.Z.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function o() {
                r.Z.dispatch({
                    type: "LAYER_POP"
                })
            }

            function a() {
                r.Z.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        294882: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => v
            });
            var r = n(785893),
                i = n(667294),
                o = n(248088),
                a = n(795308),
                u = n(304548),
                l = n(930948),
                c = n(2590),
                s = n(473708),
                d = n(701784),
                f = n.n(d);

            function p(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function E(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function _(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function h(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            i = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return p(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return p(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            const v = function(e) {
                var t = e.message,
                    n = e.errorMessage,
                    d = e.submitting,
                    p = e.onReset,
                    v = e.onSave,
                    m = e.onSaveText,
                    O = e.onResetText,
                    g = e.onSaveButtonColor,
                    y = e.disabled,
                    T = e.saveButtonTooltip,
                    I = i.useRef(null),
                    b = h((0, o.useSpring)((function() {
                        return {
                            spring: 0
                        }
                    })), 2),
                    A = b[0].spring,
                    C = b[1];
                i.useEffect((function() {
                    var e = function() {
                        C({
                            spring: 1,
                            config: o.config.gentle
                        });
                        C({
                            spring: 0,
                            config: o.config.gentle,
                            delay: 1e3
                        })
                    };
                    l.S.subscribe(c.CkL.EMPHASIZE_NOTICE, e);
                    return function() {
                        l.S.unsubscribe(c.CkL.EMPHASIZE_NOTICE, e)
                    }
                }), [C]);
                var R, N = A.to({
                        range: [0, 1],
                        output: [(0, u.useToken)(a.Z.colors.TEXT_NORMAL).hex(), (0, u.useToken)(a.Z.unsafe_rawColors.WHITE_500).hex()]
                    }),
                    S = A.to({
                        range: [0, 1],
                        output: [(0, u.useToken)(a.Z.colors.BACKGROUND_FLOATING).hex(), (0, u.useToken)(a.Z.colors.STATUS_DANGER).hex()]
                    }),
                    P = (0, u.useToken)(a.Z.colors.TEXT_DANGER).hex();
                return (0,
                    r.jsx)(o.animated.div, {
                    className: f().container,
                    style: {
                        backgroundColor: S
                    },
                    children: (0, r.jsx)("div", {
                        className: f().flexContainer,
                        ref: I,
                        children: (0, r.jsxs)(u.FocusRingScope, {
                            containerRef: I,
                            children: [(0, r.jsx)("div", {
                                className: f().shrinkingContainer,
                                children: (0, r.jsx)(o.animated.div, {
                                    className: f().message,
                                    style: {
                                        color: null != n ? P : N
                                    },
                                    children: null !== (R = null != n ? n : t) && void 0 !== R ? R : s.Z.Messages.SETTINGS_NOTICE_MESSAGE
                                })
                            }), (0, r.jsxs)("div", {
                                className: f().actions,
                                children: [null != p && (0, r.jsx)(u.Button, {
                                    className: f().resetButton,
                                    size: u.Button.Sizes.SMALL,
                                    color: u.Button.Colors.PRIMARY,
                                    look: u.Button.Looks.LINK,
                                    onClick: p,
                                    children: (0, r.jsx)(o.animated.span, {
                                        style: {
                                            color: N
                                        },
                                        children: null != O ? O : s.Z.Messages.RESET
                                    })
                                }), null != v ? (0, r.jsx)(u.Tooltip, {
                                    text: T,
                                    children: function(e) {
                                        return (0, r.jsx)(u.Button, _(function(e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var n = null != arguments[t] ? arguments[t] : {},
                                                    r = Object.keys(n);
                                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                                }))));
                                                r.forEach((function(t) {
                                                    E(e, t, n[t])
                                                }))
                                            }
                                            return e
                                        }({
                                            size: u.Button.Sizes.SMALL,
                                            color: null != g ? g : u.Button.Colors.GREEN,
                                            submitting: d,
                                            disabled: y,
                                            onClick: v
                                        }, e), {
                                            children: null != m ? m : s.Z.Messages.SAVE_CHANGES
                                        }))
                                    }
                                }) : null]
                            })]
                        })
                    })
                })
            }
        },
        153686: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var r;
            ! function(e) {
                e.POPOUT_WINDOW = "popout window";
                e.OVERLAY = "overlay";
                e.NOTICE = "notice";
                e.PREMIUM_UPSELL_TOOLTIP = "premium upsell tooltip";
                e.BADGE = "badge";
                e.USER_SETTINGS = "user settings";
                e.USER_SETTINGS_MENU = "user settings menu";
                e.ACCOUNT = "account";
                e.TEXT_AND_IMAGES = "text and images";
                e.GUILD_SETTINGS = "guild settings";
                e.OVERVIEW = "overview";
                e.STICKERS = "stickers";
                e.VANITY_URL = "vanity url";
                e.PREMIUM_MARKETING = "premium marketing";
                e.PREMIUM_MARKETING_PLAN_COMPARISON = "premium marketing plan comparison";
                e.PREMIUM_PAYMENT_MODAL = "premium payment modal";
                e.PREMIUM_UPSELL_ALERT = "premium upsell alert";
                e.PREMIUM_UPSELL_MODAL = "premium upsell modal";
                e.PREMIUM_SETTINGS = "premium settings";
                e.PAYMENT_FLOW_TEST_PAGE = "payment flow test page";
                e.PREMIUM_PAYMENT_ACTION_SHEET = "premium payment action sheet";
                e.CHANNEL_CALL = "channel call";
                e.CHANNEL_CALL_CONNECTING_SCREEN = "channel call connecting screen";
                e.RTC_PANEL = "rtc panel";
                e.SOUNDBOARD_BUTTON = "soundboard button";
                e.SOUNDBOARD_POPOUT = "soundboard popout";
                e.SOUNDBOARD_WHEEL = "soundboard wheel";
                e.SOUNDBOARD_ACTION_SHEET = "soundboard action sheet";
                e.GIFT_BUTTON = "gift button";
                e.EXPRESSION_SUGGESTIONS = "expression suggestions";
                e.EMOJI_PICKER = "emoji picker";
                e.STICKER_PICKER = "sticker picker";
                e.STICKER_POPOUT = "sticker popout";
                e.PREMIUM_UPSELL = "premium upsell";
                e.EMPTY_STATE = "empty state";
                e.SUBSCRIPTION_DETAILS = "subscription details";
                e.SUBSCRIPTION_HEADER = "subscription header";
                e.ACCOUNT_CREDIT_BANNER = "account credit banner";
                e.PREMIUM_UNCANCEL_MODAL = "premium uncancel modal";
                e.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER = "past due one time payment method banner";
                e.STREAM_QUALITY_INDICATOR = "stream quality indicator";
                e.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE = "premium tier 0 trial ending notice";
                e.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE = "premium tier 2 trial ending notice";
                e.BOOSTED_GUILD_PERKS_MODAL = "boosted guild perks modal";
                e.GUILD_BOOSTING_PREMIUM_UPSELL = "guild boosting premium upsell";
                e.RPC = "rpc";
                e.BILLING_STANDALONE = "billing standalone";
                e.GUILD_CHANNEL_LIST = "guild channel list";
                e.GUILD_CHANNEL_LIST_FOOTER = "guild channel list footer";
                e.STICKER_MESSAGE = "sticker message";
                e.CHANNEL_TEXT_AREA = "channel text area";
                e.HEADER_BAR = "header bar";
                e.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL = "guild role subscription cancellation modal";
                e.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE = "guild role subscription purchase system message";
                e.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL = "guild role subscription emoji picker upsell";
                e.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL = "guild role subscription emoji text popover upsell";
                e.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL = "premium subscription cancellation modal";
                e.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL = "application subscription cancellation modal";
                e.PENDING_PLAN_CHANGE_NOTICE = "pending plan change notice";
                e.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL = "subscription cancel downgrade modal";
                e.GUILD_HEADER = "guild header";
                e.GUILD_BANNER = "guild banner";
                e.GUILD_BANNER_NOTICE = "guild banner notice";
                e.GUILD_BOOST_PURCHASE_MODAL = "guild boost purchase modal";
                e.GUILD_BOOST_CANCELLATION_MODAL = "guild boost cancellation modal";
                e.GUILD_BOOST_UNCANCELLATION_MODAL = "guild boost uncancellation modal";
                e.GUILD_BOOSTING_PROGRESS_BAR = "guild boosting progress bar";
                e.GUILD_BOOSTING_TIER_NONE = "guild boosting tier none";
                e.GUILD_BOOSTING_TIER_1 = "guild boosting tier 1";
                e.GUILD_BOOSTING_TIER_2 = "guild boosting tier 2";
                e.GUILD_BOOSTING_TIER_3 = "guild boosting tier 3";
                e.GUILD_BOOSTING_UPSELL_BANNER = "guild boosting upsell banner";
                e.GUILD_BOOSTING_SIDEBAR_DISPLAY = "guild boosting sidebar display";
                e.GUILDS_LIST = "guilds list";
                e.ACTIVITY_CHANNEL_SELECTOR = "activity channel selector";
                e.ACTIVITY_DIRECTORY = "activity directory";
                e.ACTIVITY_TILE = "activity tile";
                e.ACTIVITY_UPSELL = "activity upsell";
                e.ACTIVITY_VOICE_CONTROLS_TOGGLE = "activity voice controls toggle";
                e.INSTANT_INVITE_MODAL = "instant invite modal";
                e.IMAGE_CROPPING_MODAL = "image cropping modal";
                e.GIF_PICKER = "gif picker";
                e.EXTERNAL_INVITE_LINK_MODAL = "external invite link modal";
                e.INVITE_MODAL = "invite modal";
                e.INVITE_EMBED = "invite embed";
                e.NEW_GUILD_BUTTON = "new guild button";
                e.CHARACTER_COUNT = "character count";
                e.DM_CHANNEL = "dm channel";
                e.GUILD_CHANNEL = "guild channel";
                e.FORUM_CHANNEL = "forum channel";
                e.FILE_UPLOAD_POPOUT = "file upload popout";
                e.EMOJI = "emoji";
                e.PROFILE = "profile";
                e.PROFILE_MODAL = "profile modal";
                e.PROFILE_POPOUT = "profile popout";
                e.GUILD_PROFILE = "guild profile";
                e.EDIT_AVATAR = "edit avatar";
                e.EDIT_BANNER = "edit banner";
                e.CHAT_INPUT = "chat input";
                e.CREATE_THREAD = "create thread";
                e.PREMIUM_PREVIEW_UPSELL_HEADER = "premium preview upsell header";
                e.PREMIUM_UPSELL_OVERLAY = "premium upsell overlay";
                e.SELECT_IMAGE_MODAL = "select image modal";
                e.VIDEO_BACKGROUND_OPTIONS = "video background options";
                e.VIDEO_BACKGROUND_IMAGE_OPTION = "video background image option";
                e.VIDEO_BACKGROUND_CUSTOM_UPSELL = "video background custom upsell";
                e.CAMERA_PREVIEW = "camera preview";
                e.HOME_PAGE_PREMIUM_TAB = "home page premium tab";
                e.PREMIUM_MARKETING_SURFACE = "premium marketing surface";
                e.PREMIUM_MARKETING_HERO_CTA = "premium marketing hero cta";
                e.PREMIUM_MARKETING_TIER_1_CTA = "premium marketing tier 1 cta";
                e.PREMIUM_MARKETING_TIER_2_CTA = "premium marketing tier 2 cta";
                e.PREMIUM_MARKETING_LOCALIZED_PRICING_TIER_2_CTA = "premium marketing localized pricing tier 2 cta";
                e.PREMIUM_MARKETING_SURFACE_HERO_CTA = "premium marketing surface hero cta";
                e.PREMIUM_MARKETING_SURFACE_TIER_2_CTA = "premium marketing surface tier 2 cta";
                e.PREMIUM_MARKETING_SURFACE_TIER_1_CTA = "premium marketing surface tier 1 cta";
                e.PREMIUM_MARKETING_TIER_CARD = "premium marketing tier card";
                e.PREMIUM_MARKETING_PERK_CARD = "premium marketing perk card";
                e.PREMIUM_MARKETING_FEATURE = "premium marketing feature";
                e.PREMIUM_MARKETING_COMPARISON_TABLE = "premium marketing comparison table";
                e.PREMIUM_MARKETING_FOOTER = "premium marketing footer";
                e.CHANNEL_CALL_ACTION_BAR = "channel call action bar";
                e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI = "aggregate premium upsell modal emoji";
                e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_PROFILE_CUSTOMIZATION = "aggregate premium upsell modal profile customization";
                e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_HD_STREAMING = "aggregate premium upsell modal hd streaming";
                e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_LARGER_FILE_UPLOADS = "aggregate premium upsell modal larger file uploads";
                e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_BOGO = "aggregate premium upsell modal bogo";
                e.CHANNEL_EXPANDED_CONTROLS = "channel expanded controls";
                e.VOICE_CONTROL_TRAY = "voice control tray";
                e.ACTIVE_NOW_COLUMN = "active now column";
                e.CONTEXT_MENU = "context menu";
                e.CHANNEL_ACTIVITY_FEED_VOICE_MENU = "channel activity feed voice menu";
                e.CHANNEL_AUDIT_LOG_MENU = "channel audit log menu";
                e.CHANNEL_CATEGORY_MENU = "channel category menu";
                e.CHANNEL_LIST_DIRECTORY_CHANNEL_MENU = "channel list menu";
                e.CHANNEL_LIST_STORE_CHANNEL_MENU = "channel list store channel menu";
                e.CHANNEL_LIST_TEXT_CHANNEL_MENU = "channel list text channel menu";
                e.CHANNEL_LIST_THREAD_MENU = "channel list thread menu";
                e.CHANNEL_LIST_VOICE_CHANNEL_MENU = "channel list voice channel menu";
                e.CHANNEL_TITLE_MENU = "channel title menu";
                e.GROUP_DM_MENU = "group dm menu";
                e.AUDIT_LOG_USER_MENU = "audit log user menu";
                e.BANNED_USER_MENU = "banned user menu";
                e.DM_USER_MENU = "dm user menu";
                e.GROUP_DM_USER_MENU = "group dm user menu";
                e.GUILD_CHANNEL_USER_MENU = "guild channel user menu";
                e.GUILD_MODERATION_USER_MENU = "guild moderation user menu";
                e.GUILD_MODERATION_RAID_MENU = "guild moderation raid menu";
                e.GUILD_SETTINGS_USER_MENU = "guild settings user menu";
                e.GUILD_USER_MENU = "guild user menu";
                e.THREAD_USER_MENU = "thread user menu";
                e.USER_GENERIC_MENU = "user generic menu";
                e.USER_PROFILE_ACTIONS_MENU = "user profile actions menu";
                e.VOICE_ACTION_SHEET = "voice action sheet";
                e.FOCUSED_VOICE_CONTROLS = "focused voice controls";
                e.MASKED_LINK = "masked link";
                e.LAST_NITRO_HOST_ACTION_SHEET = "last nitro host action sheet";
                e.LAST_NITRO_HOST_LEFT_ACTION_SHEET = "last nitro host left action sheet";
                e.PREMIUM_TIER_0_ANNOUNCEMENT_ACTION_SHEET = "premium tier 0 announcement action sheet";
                e.PS_VOICE_CONNECT_UPSELL = "ps voice connect upsell";
                e.PROFILE_THEME_UPSELL_MODAL = "profile theme upsell modal";
                e.EDIT_AVATAR_DECORATION_MODAL = "edit avatar decoration modal";
                e.EDIT_AVATAR_DECORATION_SHEET = "edit avatar decoration sheet";
                e.EDIT_PROFILE_EFFECT_MODAL = "edit profile effect modal";
                e.ACCOUNT_PROFILE_POPOUT = "account profile popout";
                e.CHANNEL_CALL_OVERFLOW_ACTION_SHEET = "channel_call_overflow_action_sheet";
                e.USER_SETTINGS_TRY_OUT_PREMIUM = "user settings try out premium";
                e.ACTIVITY_COACH_MARK_NITRO = "activity coach mark nitro";
                e.ACTIVITY_COACH_MARK_BOOSTING = "activity coach mark boosting";
                e.ACTIVITY_COACH_MARK_HALLOWEEN_2022 = "activity coach mark halloween 2022";
                e.PREMIUM_TRIAL_TUTORIAL_COACHMARK = "premium trial tutorial coachmark";
                e.PREMIUM_TRIAL_TUTORIAL_TOOLTIP = "premium trial tutorial tooltip";
                e.ACTIVITY_COACH_MARK_BASH_OUT = "activity coach mark bash out";
                e.ACTIVITY_COACH_MARK_POKER = "activity coach mark poker";
                e.ACTIVITY_COACH_MARK_GARTIC_PHONE = "activity coach mark gartic phone";
                e.ACTIVITIES_COACH_MARK_GAME_NIGHT = "activities coach mark game night";
                e.STAGE_VIDEO_LIMIT = "stage video limit";
                e.ACTIVITIES_MINI_SHELF = "activities mini shelf";
                e.ACTIVITIES_MINI_SHELF_BANNER = "activities mini shelf banner";
                e.VC_TILE_ACTIVITY_INVITE = "vc tile activity invite";
                e.VC_TILE_ACTIVITY_SUGGESTION = "vc tile activity suggestion";
                e.VC_TILE_ACTIVITY_SHELF_BUTTON = "vc tile activity shelf button";
                e.BURST_REACTION_TUTORIAL_COACHMARK = "super reaction tutorial coachmark";
                e.APP_ICON_EDITOR = "app icon editor";
                e.CLIENT_THEMES_EDITOR = "client themes editor";
                e.CLIENT_THEMES_THEME_SELECTOR = "client themes theme selector";
                e.AUTOMOD_PROFILE_QUARANTINE_ALERT = "automod profile quarantine alert";
                e.SHARE_NITRO_EMBED = "share nitro embed";
                e.EMBEDDED_ACTIVITY_MESSAGE = "embedded activity message";
                e.REFERRAL_TRIALS_COMPOSER_BUTTON = "referral trials composer button";
                e.REFERRAL_TRIALS_POPOUT = "referral trials popout";
                e.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL = "premium marketing announcement modal";
                e.PREMIUM_MARKETING_PAGE_BANNER = "premium marketing page banner";
                e.ACTIVITY_BOOKMARK = "activity bookmark";
                e.ACTIVITY_BOOKMARK_LAUNCHER = "activity bookmark launcher";
                e.ACTIVITY_DETAIL_PAGE = "activity detail page";
                e.ACTIVITIES_PAGE = "activities page";
                e.ACTIVITIES_PAGE_NOTIFICATION_DOT = "activities page cta";
                e.ACTIVITIES_PAGE_WHATS_NEW_TILE = "activities page whats new tile";
                e.VOICE_PANEL_PRE_JOIN = "voice panel pre-join content";
                e.ACTIVITIES_IM_FEELING_LUCKY = "activities im feeling lucky";
                e.ACTIVITIES_HAPPENING_NOW = "activities happening now";
                e.MEDIA_VIEWER = "media viewer";
                e.MESSAGE_LONG_PRESS_MENU = "message long press menu";
                e.COLLECTIBLES_SHOP = "collectibles shop";
                e.COLLECTIBLES_SHOP_CARD = "collectibles shop card";
                e.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON = "collectibles shop card preview button";
                e.COLLECTIBLES_SHOP_DETAILS_MODAL = "collectibles shop details modal";
                e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL = "collectibles profile settings upsell";
                e.COLLECTIBLES_PREMIUM_MARKETING_PAGE_UPSELL = "collectibles premium marketing page upsell";
                e.COLLECTIBLES_PAYMENT_MODAL = "collectibles payment modal";
                e.COLLECTIBLES_COLLECTED_MODAL = "collectibles collected modal";
                e.COLLECTIBLES_USER_POPOUT_UPSELL = "collectibles user popout upsell";
                e.COLLECTIBLES_ACCOUNT_SWITCH_UPSELL = "collectibles account switch upsell";
                e.COLLECTIBLES_FEATURE_EDUCATION_TOOLTIP = "collectibles feature education tooltip";
                e.PREMIUM_BILLING_INFO = "premium billing info";
                e.PREMIUM_SUBSCRIPTION_DETAILS = "premium subscription details";
                e.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "application subscription payment source with invoice";
                e.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW = "guild boost slot cancellation modal current invoice preview";
                e.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW = "guild boost slot cancellation modal renewal invoice preview";
                e.GUILD_BOOSTING_REVIEW_PRORATED = "guild boosting review prorated";
                e.GUILD_BOOSTING_REVIEW_RENEWAL = "guild boosting review renewal";
                e.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "guild role subscription payment source with invoice";
                e.PREMIUM_PLAN_SELECT = "premium_plan_select";
                e.CANCEL_INVOICE_PREVIEW = "cancel_invoice_preview";
                e.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT = "premium subscription fine print content";
                e.SUBSCRIPTION_INVOICE_FOOTER = "subscription invoice footer";
                e.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW = "billing switch plan immediate prorated invoice preview";
                e.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW = "billing switch plan immediate renewal invoice preview";
                e.GUILD_BOOSTING_PLAN_SELECT = "GUILD_BOOSTING_PLAN_SELECT";
                e.MEMBER_SAFETY_PAGE = "member safety page";
                e.GUILD_SETTINGS_MEMBERS_PAGE = "guild settings members page";
                e.GUILD_MEMBER_MOD_VIEW = "guild member mod view";
                e.GUILD_PRODUCT_EMBED_CARD = "guild product embed card";
                e.GUILD_PRODUCT_INFO_MODAL = "guild product info modal";
                e.GUILD_PRODUCT_PAYMENT_MODAL = "guild product payment modal";
                e.GUILD_SHOP_PAGE = "guild shop page";
                e.ACTIVITY_SHELF_ACTIVITY_DETAILS = "activity shelf activty details";
                e.MESSAGE_REMIX_TAG = "message remix tag";
                e.MESSAGE_REMIX_BUTTON = "message remix button";
                e.HAPPENING_NOW_EMBEDDED_ACTIVITY = "happening now embedded activity";
                e.CLIPS_SETTINGS = "clips settings";
                e.CLIPS_GALLERY = "clips gallery";
                e.CLIPS_GALLERY_ITEM = "clips gallery item";
                e.CLIPS_EDITOR = "clips editor";
                e.CLIPS_SHARE_MODAL = "clips share modal";
                e.CHANNEL_ATTACH_BUTTON = "channel attach button";
                e.PREMIUM_TRIAL_OFFER_ACTION_SHEET = "premium trial offer action sheet";
                e.PREMIUM_SUBSCRIBER_NITRO_HOME = "premium subscriber nitro home"
            }(r || (r = {}));
            const i = r
        },
        87931: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => r
            });
            const r = n(517586).Z
        },
        255875: (e, t, n) => {
            "use strict";
            n.d(t, {
                E: () => p,
                h: () => E
            });
            var r = n(785893),
                i = n(667294),
                o = n(652411),
                a = n(318715),
                u = n(316878),
                l = n(2590);

            function c(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        c(e, t, n[t])
                    }))
                }
                return e
            }

            function d(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }
            var f = {
                    confettiCanvas: null,
                    cannon: null,
                    createConfetti: function() {},
                    createConfettiAt: function() {},
                    createMultipleConfetti: function() {
                        return []
                    },
                    createMultipleConfettiAt: function() {
                        return []
                    },
                    addClickListener: function() {
                        return l.dG4
                    },
                    removeClickListener: l.dG4
                },
                p = i.createContext(f);

            function E(e) {
                var t = e.children,
                    n = e.confettiCanvas,
                    l = e.spriteCanvas,
                    c = e.baseConfig,
                    E = e.addClickListener,
                    _ = e.removeClickListener,
                    h = (0, o.uR)(n, l),
                    v = (0, a.ZP)([u.Z], (function() {
                        return u.Z.useReducedMotion
                    })),
                    m = i.useMemo((function() {
                        return v ? f : {
                            confettiCanvas: n,
                            cannon: h,
                            createConfetti: function(e, t) {
                                return h.createConfetti(s({}, c, e), t)
                            },
                            createConfettiAt: function(e, t, n, r) {
                                return h.createConfetti(s(d(s({}, c), {
                                    position: {
                                        type: "static",
                                        value: {
                                            x: e,
                                            y: t
                                        }
                                    }
                                }), n), r)
                            },
                            createMultipleConfetti: function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                                    n = arguments.length > 2 ? arguments[2] : void 0;
                                return h.createMultipleConfetti(s({}, c, e), t, n)
                            },
                            createMultipleConfettiAt: function(e, t, n) {
                                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                                    i = arguments.length > 4 ? arguments[4] : void 0;
                                return h.createMultipleConfetti(s(d(s({}, c), {
                                    position: {
                                        type: "static",
                                        value: {
                                            x: e,
                                            y: t
                                        }
                                    }
                                }), n), r, i)
                            },
                            addClickListener: E,
                            removeClickListener: _
                        }
                    }), [E, c, h, n, v, _]);
                return (0, r.jsx)(p.Provider, {
                    value: m,
                    children: t
                })
            }
        },
        774930: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => o
            });
            var r = n(202351),
                i = n(409125);

            function o() {
                return (0, r.e7)([i.Z], (function() {
                    return null != i.Z.getRemoteSessionId() || null != i.Z.getAwaitingRemoteSessionInfo()
                }))
            }
        },
        895657: (e, t, n) => {
            "use strict";
            n.d(t, {
                OA: () => a,
                kT: () => u,
                _C: () => l
            });
            var r = n(72580),
                i = n(886391),
                o = n(198181),
                a = function(e) {
                    var t = e.required,
                        n = e.response,
                        o = e.field_type;
                    if (!t) return !0;
                    if (null == n) return !1;
                    switch (o) {
                        case i.QJ.TERMS:
                        case i.QJ.VERIFICATION:
                            return Boolean(n);
                        case i.QJ.TEXT_INPUT:
                        case i.QJ.PARAGRAPH:
                            return "string" == typeof n && "" !== n.trim();
                        case i.QJ.MULTIPLE_CHOICE:
                            return "number" == typeof n;
                        default:
                            return (0, r.vE)(o)
                    }
                };

            function u(e) {
                return o.lI.has(null == e ? void 0 : e.field_type)
            }

            function l(e) {
                return o.hZ.has(null == e ? void 0 : e.field_type)
            }
        },
        370801: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => O
            });
            var r = n(785893),
                i = n(667294),
                o = n(202351),
                a = n(443660),
                u = n(304548),
                l = n(294882),
                c = n(698011),
                s = n(443812),
                d = n(976685),
                f = n(770393),
                p = n(680068),
                E = n(198181),
                _ = n(473708),
                h = n(133766),
                v = n.n(h),
                m = function() {
                    return (0, r.jsx)(l.Z, {
                        submitting: !1,
                        message: _.Z.Messages.MEMBER_VERIFICATION_PROGRESS_LOST_TITLE,
                        onReset: function() {
                            (0, f.PE)(!1)
                        },
                        onResetText: _.Z.Messages.CANCEL,
                        onSave: function() {
                            (0, f.PE)(!1);
                            (0, u.closeModal)(E.Pn)
                        },
                        onSaveText: _.Z.Messages.MEMBER_VERIFICATION_PROGRESS_LOST_CONTINUE,
                        onSaveButtonColor: u.ButtonColors.RED
                    })
                };
            const O = function(e) {
                var t = e.guildId,
                    n = e.transitionState,
                    l = e.onClose,
                    E = e.onComplete,
                    _ = e.isPreview,
                    h = void 0 !== _ && _,
                    O = (0, f.rb)((function(e) {
                        return e.shouldShowWarning
                    })),
                    g = (0, o.e7)([d.Z], (function() {
                        return d.Z.get(t)
                    })),
                    y = (0, s.Dt)();
                i.useEffect((function() {
                    g === d.t && l()
                }), [l, g]);
                return g === d.t ? null : (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(u.ModalRoot, {
                        size: u.ModalSize.MEDIUM,
                        className: v().container,
                        transitionState: n,
                        "aria-labelledby": y,
                        children: [(0, r.jsx)(u.ModalCloseButton, {
                            onClick: function() {
                                return l(!1)
                            },
                            className: v().closeButton
                        }), (0, r.jsx)(p.Z, {
                            headerId: y,
                            guildId: t,
                            onClose: l,
                            onComplete: E,
                            isPreview: h
                        })]
                    }), (0, r.jsx)(a.Z, {
                        children: !0 === O && (0, r.jsx)(c.Z, {
                            className: v().notice,
                            children: (0, r.jsx)(m, {})
                        })
                    })]
                })
            }
        },
        668844: (e, t, n) => {
            "use strict";
            n.d(t, {
                hK: () => s,
                Ih: () => d,
                PU: () => f
            });
            var r = n(785893),
                i = (n(667294), n(795308)),
                o = n(304548),
                a = n(169649),
                u = n(559968),
                l = n(978707),
                c = n.n(l);

            function s(e) {
                var t = e.title,
                    n = e.children;
                return (0, r.jsxs)("div", {
                    className: c().questionContainer,
                    children: [(0, r.jsx)(o.Text, {
                        className: c().questionTitle,
                        variant: "text-md/semibold",
                        color: "header-primary",
                        children: t
                    }), n]
                })
            }

            function d(e) {
                var t = e.icon,
                    n = e.text,
                    l = e.meetsRequirement;
                return (0, r.jsxs)("div", {
                    className: c().requirementContainer,
                    children: [(0, r.jsx)(t, {
                        className: c().requirementIcon,
                        height: 20,
                        width: 20
                    }), (0, r.jsx)(o.Text, {
                        className: c().requirementText,
                        variant: "text-md/normal",
                        children: n
                    }), l ? (0, r.jsx)(a.Z, {
                        width: 24,
                        height: 24,
                        className: c().requirementSuccess,
                        backgroundColor: i.Z.unsafe_rawColors.WHITE_500.css
                    }) : (0, r.jsx)(u.Z, {
                        width: 24,
                        height: 24,
                        className: c().requirementFailure,
                        backgroundColor: i.Z.unsafe_rawColors.WHITE_500.css
                    })]
                })
            }

            function f(e) {
                var t = e.icon,
                    n = e.text,
                    u = e.footnote,
                    l = e.meetsRequirement,
                    s = e.children;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)("div", {
                        className: c().requirementContainer,
                        children: [(0, r.jsx)(t, {
                            className: c().requirementIcon,
                            height: 20,
                            width: 20
                        }), (0,
                            r.jsx)(o.Text, {
                            className: c().requirementText,
                            variant: "text-md/normal",
                            children: n
                        }), l ? (0, r.jsx)(a.Z, {
                            width: 24,
                            height: 24,
                            className: c().requirementSuccess,
                            backgroundColor: i.Z.unsafe_rawColors.WHITE_500.css
                        }) : s]
                    }), null != u && (0, r.jsx)(o.Text, {
                        color: "header-secondary",
                        className: c().footnote,
                        variant: "text-xs/normal",
                        children: u
                    })]
                })
            }
        },
        448124: (e, t, n) => {
            "use strict";
            n.d(t, {
                BO: () => f,
                QH: () => p,
                sp: () => E
            });
            var r = n(785893),
                i = n(667294),
                o = n(294184),
                a = n.n(o),
                u = n(304548),
                l = n(668844),
                c = n(880213),
                s = n(732231),
                d = n.n(s);

            function f(e) {
                var t = e.disabled,
                    n = e.field,
                    o = e.value,
                    l = e.radioItemClassName,
                    c = e.radioItemIconClassName,
                    s = e.onChange,
                    f = n.choices,
                    p = i.useMemo((function() {
                        return f.map((function(e, t) {
                            return {
                                name: e,
                                value: t,
                                radioItemIconClassName: a()(d().multipleChoiceIcon, c)
                            }
                        }))
                    }), [f, c]);
                return (0, r.jsx)(u.RadioGroup, {
                    disabled: t,
                    options: p,
                    value: o,
                    onChange: s,
                    radioItemClassName: l,
                    withTransparentBackground: !0
                })
            }

            function p(e) {
                var t = e.formField,
                    n = null != t.response ? t.choices[t.response] : "";
                return (0, r.jsx)(l.hK, {
                    title: t.label,
                    children: (0, r.jsx)(c.Gi, {
                        className: d().fieldBackground,
                        value: n,
                        disabled: !0
                    })
                })
            }

            function E(e) {
                var t = e.formField,
                    n = e.onChange;
                return (0, r.jsx)(l.hK, {
                    title: t.label,
                    children: (0, r.jsx)(f, {
                        radioItemClassName: d().fieldBackground,
                        field: t,
                        value: t.response,
                        onChange: n
                    })
                })
            }
        },
        434823: (e, t, n) => {
            "use strict";
            n.d(t, {
                Q8: () => d,
                jn: () => f,
                lX: () => p
            });
            var r = n(785893),
                i = (n(667294), n(294184)),
                o = n.n(i),
                a = n(304548),
                u = n(668844),
                l = n(198181),
                c = n(732231),
                s = n.n(c);

            function d(e) {
                var t = e.value,
                    n = e.placeholder,
                    i = e.onChange,
                    u = e.disabled,
                    c = e.className;
                return (0, r.jsx)(a.TextArea, {
                    className: o()(s().paragraphFieldBody, c),
                    maxLength: l.RS,
                    value: null != t ? t : "",
                    placeholder: null != n ? n : "",
                    onChange: i,
                    disabled: u,
                    autosize: !0
                })
            }

            function f(e) {
                var t = e.formField;
                return (0, r.jsx)(u.hK, {
                    title: t.label,
                    children: (0, r.jsx)(d, {
                        className: s().fieldBackground,
                        value: t.response,
                        disabled: !0
                    })
                })
            }

            function p(e) {
                var t = e.formField,
                    n = e.onChange;
                return (0, r.jsx)(u.hK, {
                    title: t.label,
                    children: (0, r.jsx)(d, {
                        className: s().fieldBackground,
                        value: t.response,
                        onChange: n
                    })
                })
            }
        },
        388025: (e, t, n) => {
            "use strict";
            n.d(t, {
                EK: () => p,
                G0: () => E,
                QC: () => _,
                dd: () => h
            });
            var r = n(785893),
                i = (n(667294), n(294184)),
                o = n.n(i),
                a = n(304548),
                u = n(883064),
                l = n(120491),
                c = n(668844),
                s = n(473708),
                d = n(732231),
                f = n.n(d);

            function p(e) {
                var t = e.terms,
                    n = e.channelId,
                    i = e.className;
                return (0, r.jsx)("div", {
                    className: o()(f().termsFieldBody, i),
                    children: t.map((function(e, t) {
                        return (0, r.jsxs)("div", {
                            className: f().termsRow,
                            children: [(0, r.jsx)(a.Text, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                children: "".concat(t + 1, ".")
                            }), (0, r.jsx)(a.Text, {
                                variant: "text-md/normal",
                                className: f().termsRowContent,
                                children: u.Z.parseGuildVerificationFormRule(e, !0, {
                                    channelId: n
                                })
                            })]
                        }, "term-".concat(t))
                    }))
                })
            }

            function E(e) {
                var t = e.onChange,
                    n = e.checked,
                    i = e.disabled;
                return (0, r.jsx)(a.Checkbox, {
                    size: 20,
                    type: a.Checkbox.Types.INVERTED,
                    value: n,
                    onChange: t,
                    disabled: i,
                    style: {
                        borderWidth: 2
                    },
                    className: f().checkbox,
                    children: (0, r.jsx)(a.Text, {
                        variant: "text-sm/normal",
                        children: s.Z.Messages.MEMBER_VERIFICATION_READ_RULES
                    })
                })
            }

            function _(e) {
                var t = e.formField;
                return (0, r.jsx)(c.Ih, {
                    icon: l.Z,
                    text: s.Z.Messages.MEMBER_VERIFICATION_AGREED_TO_RULES,
                    meetsRequirement: !!t.response
                })
            }
            var h = function(e) {
                var t = e.channelId,
                    n = e.formField,
                    i = e.onChange;
                return (0, r.jsxs)(c.hK, {
                    title: s.Z.Messages.SERVER_DISCOVERY_AGREE_TO_RULES,
                    children: [(0, r.jsx)(p, {
                        className: f().fieldBackground,
                        terms: n.values,
                        channelId: t
                    }), (0, r.jsx)(E, {
                        onChange: i,
                        checked: n.response
                    })]
                })
            }
        },
        880213: (e, t, n) => {
            "use strict";
            n.d(t, {
                Gi: () => d,
                YJ: () => f,
                zY: () => p
            });
            var r = n(785893),
                i = (n(667294), n(294184)),
                o = n.n(i),
                a = n(304548),
                u = n(668844),
                l = n(198181),
                c = n(732231),
                s = n.n(c);

            function d(e) {
                var t = e.value,
                    n = e.placeholder,
                    i = e.onChange,
                    u = e.disabled,
                    c = e.className;
                return (0, r.jsx)(a.TextInput, {
                    inputClassName: o()(s().textInputFieldBodyInput, c),
                    maxLength: l.tL,
                    value: null != t ? t : "",
                    placeholder: n,
                    onChange: i,
                    disabled: u
                })
            }

            function f(e) {
                var t = e.formField;
                return (0, r.jsx)(u.hK, {
                    title: t.label,
                    children: (0, r.jsx)(d, {
                        className: s().fieldBackground,
                        value: t.response,
                        disabled: !0
                    })
                })
            }

            function p(e) {
                var t = e.formField,
                    n = e.onChange;
                return (0, r.jsx)(u.hK, {
                    title: t.label,
                    children: (0, r.jsx)(d, {
                        className: s().fieldBackground,
                        onChange: n,
                        value: t.response
                    })
                })
            }
        },
        414306: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c,
                $: () => s
            });
            var r = n(202351),
                i = n(747820),
                o = n(61209),
                a = n(682776),
                u = n(2590),
                l = {
                    needSubscriptionToAccess: !1,
                    isSubscriptionGated: !1
                };

            function c(e) {
                return (0, r.cj)([o.Z, i.Z, a.Z], (function() {
                    return s(e, o.Z, i.Z, a.Z)
                }), [e])
            }

            function s(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.Z,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.Z,
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a.Z,
                    c = t.getChannel(e);
                if (null == c ? void 0 : c.isRoleSubscriptionTemplatePreviewChannel()) return {
                    isSubscriptionGated: !0,
                    needSubscriptionToAccess: !0
                };
                if (null == c || !n.isChannelGated(c.guild_id, c.id)) return l;
                var s = c.isGuildVocal() ? !r.can(u.Plq.CONNECT, c) : !r.can(u.Plq.VIEW_CHANNEL, c);
                return {
                    isSubscriptionGated: !0,
                    needSubscriptionToAccess: s
                }
            }
        },
        302685: (e, t, n) => {
            "use strict";
            n.d(t, {
                E: () => _,
                H: () => O
            });
            var r = n(5387),
                i = n.n(r),
                o = n(281110),
                a = n(744564),
                u = n(327499),
                l = n(664731),
                c = n(2590);

            function s(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function d(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            s(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            s(o, r, i, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var f = function(e, t) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function u(o) {
                    return function(u) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2];
                                            a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, u])
                    }
                }
            };

            function p(e) {
                return E.apply(this, arguments)
            }

            function E() {
                return (E = d((function(e) {
                    var t, n;
                    return f(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                r.trys.push([0, 2, , 3]);
                                a.Z.dispatch({
                                    type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START",
                                    guildId: e
                                });
                                return [4, o.ZP.get({
                                    url: c.ANM.GUILD_ROLE_MEMBER_COUNTS(e)
                                })];
                            case 1:
                                t = r.sent();
                                n = t.body;
                                a.Z.dispatch({
                                    type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS",
                                    guildId: e,
                                    roleMemberCount: n
                                });
                                return [3, 3];
                            case 2:
                                r.sent();
                                a.Z.dispatch({
                                    type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE",
                                    guildId: e
                                });
                                return [3, 3];
                            case 3:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function _(e) {
                return h.apply(this, arguments)
            }

            function h() {
                return (h = d((function(e) {
                    return f(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return l.Z.shouldFetch(e) ? [4, p(e)] : [3, 2];
                            case 1:
                                t.sent();
                                t.label = 2;
                            case 2:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
            var v = new(i())({
                maxAge: 1e4
            });

            function m(e, t) {
                return o.ZP.get({
                    url: c.ANM.GUILD_ROLE_MEMBER_IDS(e, t)
                }).then((function(t) {
                    u.Z.requestMembersById(e, t.body, !1);
                    return t.body.length
                }))
            }

            function O(e, t) {
                var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    r = "".concat(e, "-").concat(t);
                if (!n || null == v.get(r)) {
                    v.set(r, !0);
                    return m(e, t)
                }
                return Promise.resolve(null)
            }
        },
        664731: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => E
            });
            var r = n(202351),
                i = n(744564);

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e) {
                a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return a(e)
            }

            function u(e, t) {
                return !t || "object" !== c(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function l(e, t) {
                l = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return l(e, t)
            }
            var c = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function s(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = a(e);
                    if (t) {
                        var i = a(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return u(this, n)
                }
            }
            var d = {},
                f = {};
            var p = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && l(e, t)
                }(n, e);
                var t = s(n);

                function n() {
                    o(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.getRoleMemberCount = function(e) {
                    return null != e ? d[e] : null
                };
                r.shouldFetch = function(e) {
                    if (null == e) return !1;
                    var t = f[e];
                    return null == t || Date.now() - t > 12e4
                };
                return n
            }(r.ZP.Store);
            p.displayName = "GuildRoleMemberCountStore";
            const E = new p(i.Z, {
                GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: function(e) {
                    var t = e.guildId,
                        n = e.roleMemberCount;
                    d[t] = n;
                    f[t] = Date.now()
                },
                GUILD_ROLE_MEMBER_COUNT_UPDATE: function(e) {
                    var t = e.guildId,
                        n = e.roleId,
                        r = e.count,
                        i = d[t];
                    if (null == i) return !1;
                    i[n] = r
                },
                GUILD_ROLE_MEMBER_BULK_ADD: function(e) {
                    var t = e.guildId,
                        n = e.roleId,
                        r = e.added,
                        i = d[t];
                    if (null == i) return !1;
                    if (null == i[n]) return !1;
                    var o = Object.keys(r).length;
                    i[n] += o
                },
                GUILD_ROLE_MEMBER_ADD: function(e) {
                    var t = e.guildId,
                        n = e.roleId,
                        r = d[t];
                    if (null == r) return !1;
                    if (null == r[n]) return !1;
                    r[n] = r[n] + 1
                },
                GUILD_ROLE_MEMBER_REMOVE: function(e) {
                    var t = e.guildId,
                        n = e.roleId,
                        r = d[t];
                    if (null == r) return !1;
                    if (null == r[n]) return !1;
                    r[n] = Math.max(r[n] - 1, 0)
                },
                GUILD_ROLE_CREATE: function(e) {
                    var t = e.guildId,
                        n = e.role;
                    null == d[t] && (d[t] = {});
                    d[t][n.id] = 0
                },
                GUILD_DELETE: function(e) {
                    var t = e.guild;
                    delete d[t.id];
                    delete f[t.id]
                }
            })
        },
        426797: (e, t, n) => {
            "use strict";
            n.d(t, {
                L: () => m,
                Z: () => g
            });
            var r = n(993231),
                i = n(281110),
                o = n(744564),
                a = (0, n(260561).B)({
                    kind: "user",
                    id: "2023-02_mfa_remove_phone",
                    label: "Safety Experience MFA Remove Phone",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                });
            const u = a;
            var l = n(664625),
                c = n(488110),
                s = n(391438),
                d = n(58118),
                f = n(2590),
                p = n(473708);

            function E(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function _(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            E(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            E(o, r, i, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function h(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        h(e, t, n[t])
                    }))
                }
                return e
            }
            var m, O = function(e, t) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function u(o) {
                    return function(u) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2];
                                            a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, u])
                    }
                }
            };
            ! function(e) {
                e.USER_ACTION_REQUIRED = "user_action_required";
                e.USER_SETTINGS_UPDATE = "user_settings_update";
                e.GUILD_PHONE_REQUIRED = "guild_phone_required";
                e.MFA_PHONE_UPDATE = "mfa_phone_update";
                e.CONTACT_SYNC = "contact_sync"
            }(m || (m = {}));
            const g = {
                setCountryCode: function(e) {
                    o.Z.dispatch({
                        type: "PHONE_SET_COUNTRY_CODE",
                        countryCode: e
                    })
                },
                removePhone: function(e, t) {
                    return u.getCurrentConfig({
                        location: "81427d_1"
                    }, {
                        autoTrackExposure: !1
                    }).enabled ? (0, c.Z)((function(n) {
                        return i.ZP.delete({
                            url: f.ANM.PHONE,
                            body: v({
                                password: e,
                                change_phone_reason: t
                            }, n),
                            oldFormErrors: !0
                        })
                    }), {
                        modalProps: {
                            title: p.Z.Messages.USER_SETTINGS_ACCOUNT_REMOVE_PHONE_NUMBER_BUTTON,
                            actionText: p.Z.Messages.USER_SETTINGS_ACCOUNT_REMOVE_PHONE_NUMBER_BUTTON
                        },
                        checkEnabled: !1
                    }) : i.ZP.delete({
                        url: f.ANM.PHONE,
                        body: {
                            password: e,
                            change_phone_reason: t
                        },
                        oldFormErrors: !0
                    })
                },
                resendCode: function(e) {
                    var t = {},
                        n = l.default.getFingerprint();
                    null != n && "" !== n && (t["X-Fingerprint"] = n);
                    return i.ZP.post({
                        url: f.ANM.RESEND_PHONE,
                        headers: t,
                        body: {
                            phone: e
                        }
                    })
                },
                beginAddPhone: function(e, t) {
                    return i.ZP.post({
                        url: f.ANM.PHONE,
                        body: {
                            phone: e,
                            change_phone_reason: t
                        }
                    })
                },
                addPhone: function(e, t, n) {
                    return i.ZP.post({
                        url: f.ANM.PHONE,
                        body: {
                            phone_token: e,
                            password: t,
                            change_phone_reason: n
                        },
                        oldFormErrors: !0
                    })
                },
                addPhoneWithoutPassword: function(e) {
                    return i.ZP.post({
                        url: f.ANM.PHONE_VERIFY_NO_PASSWORD,
                        body: {
                            code: e
                        }
                    })
                },
                beginReverifyPhone: function(e, t) {
                    return i.ZP.post({
                        url: f.ANM.PHONE_REVERIFY,
                        body: {
                            phone: e,
                            change_phone_reason: t
                        }
                    })
                },
                reverifyPhone: function(e, t, n) {
                    return i.ZP.post({
                        url: f.ANM.PHONE_REVERIFY,
                        body: {
                            phone_token: e,
                            password: t,
                            change_phone_reason: n
                        },
                        oldFormErrors: !0
                    })
                },
                validatePhoneForSupport: function(e) {
                    return i.ZP.post({
                        url: f.ANM.VERIFY_PHONE_FOR_TICKET,
                        body: {
                            token: e
                        },
                        oldFormErrors: !0
                    })
                },
                verifyPhone: function(e, t) {
                    var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    return _((function() {
                        var a, u, c;
                        return O(this, (function(p) {
                            switch (p.label) {
                                case 0:
                                    a = {};
                                    null != (u = l.default.getFingerprint()) && "" !== u && (a["X-Fingerprint"] = u);
                                    i && (a.authorization = "");
                                    return [4, s.Z.post({
                                        url: f.ANM.VERIFY_PHONE,
                                        headers: a,
                                        body: {
                                            phone: e,
                                            code: t
                                        },
                                        oldFormErrors: !0,
                                        trackedActionData: {
                                            event: r.a9.USER_VERIFY_PHONE
                                        }
                                    })];
                                case 1:
                                    c = p.sent();
                                    n && o.Z.dispatch({
                                        type: "MODAL_POP",
                                        key: d.M
                                    });
                                    return [2, c.body]
                            }
                        }))
                    }))()
                }
            }
        },
        58118: (e, t, n) => {
            "use strict";
            n.d(t, {
                M: () => r,
                z: () => i
            });
            var r = "PHONE_VERIFICATION_MODAL_KEY",
                i = 6
        },
        367299: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a
            });
            var r = n(785893),
                i = (n(667294), n(318715)),
                o = n(785085);

            function a(e) {
                var t = e.children,
                    n = e.confettiLocation;
                return (0,
                    i.ZP)([o.Z], (function() {
                    return o.Z.isEnabled({
                        confettiLocation: n
                    })
                })) ? (0, r.jsx)(r.Fragment, {
                    children: t
                }) : null
            }
        },
        919031: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var r = n(667294),
                i = n(318715),
                o = n(255875),
                a = n(785085);

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l() {
                var e = r.useContext(o.E).createMultipleConfettiAt,
                    t = (0, i.ZP)([a.Z], (function() {
                        return a.Z.getState()
                    })),
                    n = r.useCallback((function(e) {
                        return {
                            size: {
                                type: "static-random",
                                minValue: e.confettiSize - 7,
                                maxValue: e.confettiSize + 7
                            }
                        }
                    }), []),
                    l = r.useMemo((function() {
                        return {
                            fire: function(r, i, o) {
                                var a, l, c = null != (null == o ? void 0 : o.settings) ? function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                r = Object.keys(n);
                                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                                            }))));
                                            r.forEach((function(t) {
                                                u(e, t, n[t])
                                            }))
                                        }
                                        return e
                                    }({}, t, o.settings) : t,
                                    s = n(c);
                                e(r, i, s, (null !== (a = null == o ? void 0 : o.count) && void 0 !== a ? a : c.confettiCount) * (null !== (l = null == o ? void 0 : o.countMultiplier) && void 0 !== l ? l : 1), {
                                    sprite: null == o ? void 0 : o.sprite
                                })
                            }
                        }
                    }), [e, n, t]);
                return l
            }
        },
        18882: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => le
            });
            var r = n(496486),
                i = n.n(r),
                o = n(842227),
                a = n(202351),
                u = n(744564),
                l = n(656793),
                c = n(382060),
                s = n(61209),
                d = n(567403),
                f = n(179913),
                p = n(715107),
                E = n(536945),
                _ = n(487685),
                h = n(102921);

            function v(e) {
                if (null == e.threadMetadata) return 0;
                var t = 60 * e.threadMetadata.autoArchiveDuration * 1e3;
                return function(e) {
                    if (null == e.threadMetadata) return 0;
                    var t, n = null !== (t = f.ZP.lastMessageId(e.id)) && void 0 !== t ? t : e.id,
                        r = h.Z.extractTimestamp(n),
                        i = null != e.threadMetadata.archiveTimestamp ? new Date(e.threadMetadata.archiveTimestamp).getTime() : 0;
                    return Math.max(r, i)
                }(e) + t
            }
            var m = n(897196);

            function O(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function g(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function y(e) {
                y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return y(e)
            }

            function T(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        g(e, t, n[t])
                    }))
                }
                return e
            }

            function I(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function b(e, t) {
                return !t || "object" !== C(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function A(e, t) {
                A = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return A(e, t)
            }
            var C = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function R(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = y(e);
                    if (t) {
                        var i = y(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return b(this, n)
                }
            }
            var N = {},
                S = {},
                P = {},
                L = {},
                M = {},
                w = {},
                U = null,
                D = {};

            function x() {
                N = {};
                M = {};
                S = {};
                P = {};
                L = {};
                U = p.Z.getChannelId();
                for (var e in D) clearTimeout(D[e]);
                D = {};
                E.Z.forEachGuild((function(e) {
                    G(e)
                }));
                Z()
            }

            function j(e) {
                delete N[e];
                delete M[e];
                delete S[e];
                delete P[e];
                delete L[e];
                G(e);
                for (var t in P[e]) k(e, t)
            }

            function G(e) {
                var t = E.Z.getThreadsForGuild(e);
                for (var n in t)
                    for (var r in t[n]) {
                        X(r);
                        var i = s.Z.getChannel(r);
                        if (null != i) {
                            var o = _.Z.joinTimestamp(r);
                            if (null != o) {
                                var a = {
                                        channel: i,
                                        joinTimestamp: o.getTime()
                                    },
                                    u = q(i),
                                    l = u.isUnread,
                                    c = u.isRelevant,
                                    d = u.isTimedRelevant;
                                Q(N, i, a, !1);
                                Q(M, i, c ? a : null, !1);
                                Q(S, i, l ? a : null, !1);
                                d && J(i, !0)
                            } else {
                                Q(P, i, i, !1);
                                var p = f.ZP.isForumPostUnread(i.id);
                                Q(L, i, p ? i : null, !1)
                            }
                        }
                    }
            }

            function Z() {
                w = {};
                for (var e in P)
                    for (var t in P[e]) k(e, t)
            }

            function H(e) {
                var t = s.Z.getBasicChannel(e);
                null != t && c.uC.has(t.type) && k(t.guild_id, t.id)
            }

            function k(e, t) {
                var n = s.Z.getChannel(t);
                if (null != n && n.isForumLikeChannel()) {
                    null == w[e] && (w[e] = {});
                    w[e][t] = 0;
                    if (null != P[e] && null != P[e][t]) {
                        var r = d.Z.getGuild(e);
                        if (null != r) {
                            var i = f.ZP.getTrackedAckMessageId(t);
                            if (null == i) {
                                var a = Date.now();
                                null != r.joinedAt && (r.joinedAt instanceof Date ? a = r.joinedAt.getTime() : "string" == typeof r.joinedAt && (a = new Date(r.joinedAt).getTime()));
                                i = o.default.fromTimestamp(a)
                            }
                            for (var u in P[e][t]) t === U ? f.ZP.isNewForumThread(u, t, r) && w[e][t]++ : o.default.compare(u, i) > 0 && !f.ZP.hasOpenedThread(u) && w[e][t]++
                        }
                    }
                }
            }

            function B(e, t, n) {
                if (null == t) return !1;
                var r = s.Z.getChannel(n),
                    i = _.Z.joinTimestamp(n);
                if (null != r && E.Z.isActive(e, t, n)) {
                    if (null != i) {
                        var o = {
                                channel: r,
                                joinTimestamp: i.getTime()
                            },
                            a = q(r),
                            u = a.isUnread,
                            l = a.isRelevant,
                            c = a.isTimedRelevant;
                        Q(N, r, o, !0);
                        Q(M, r, l ? o : null, !0);
                        Q(S, r, u ? o : null, !0);
                        Q(P, r, null, !0);
                        Q(L, r, null, !0);
                        J(r, c)
                    } else {
                        var d = f.ZP.isForumPostUnread(r.id);
                        Q(N, r, null, !0);
                        Q(S, r, null, !0);
                        Q(M, r, null, !0);
                        Q(P, r, r, !0);
                        Q(L, r, d ? r : null, !0);
                        X(r.id)
                    }
                    k(e, t)
                } else {
                    $(N, e, t, n);
                    $(M, e, t, n);
                    $(S, e, t, n);
                    $(P, e, t, n);
                    $(L, e, t, n);
                    X(n);
                    k(e, t)
                }
            }

            function F(e) {
                return B(e.channel.guild_id, e.channel.parent_id, e.channel.id)
            }

            function V(e, t) {
                if (null == t) return !1;
                var n = N[e],
                    r = null == n ? null : n[t];
                if (null != r)
                    for (var i in r)
                        if (r[i].channel.isNSFW()) return !0;
                var o = P[e],
                    a = null == o ? null : o[t];
                if (null != a)
                    for (var u in a)
                        if (a[u].isNSFW()) return !0;
                return !1
            }

            function z(e) {
                var t = s.Z.getChannel(e.id);
                return !(null == t || !E.Z.isActive(e.guildId, t.parent_id, e.id)) && B(t.guild_id, t.parent_id, t.id)
            }

            function Y(e) {
                var t = s.Z.getChannel(e.channelId);
                if (null == t) K();
                else {
                    var n = t.guild_id,
                        r = t.parent_id;
                    if (!c.Ec.has(t.type)) {
                        var i;
                        if (Number(null === (i = w[n]) || void 0 === i ? void 0 : i[t.id]) > 0) {
                            k(n, t.id);
                            return !0
                        }
                        return !1
                    }
                    if (null == r) return !1;
                    if (ee(N, t)) {
                        var o = q(t),
                            a = o.isUnread,
                            u = o.isRelevant;
                        J(t, o.isTimedRelevant);
                        var l = ee(S, t),
                            d = ee(M, t);
                        if (a === l && u === d) return !1;
                        var p = N[n][r][t.id],
                            E = u ? p : null;
                        Q(S, t, a ? p : null, !0);
                        Q(M, t, E, !0);
                        k(n, r)
                    } else {
                        var _ = ee(L, t),
                            h = f.ZP.isForumPostUnread(t.id);
                        if (h === _) return !1;
                        Q(L, t, h ? t : null, !0)
                    }
                }
            }

            function K() {
                S = {};
                M = {};
                for (var e in N)
                    for (var t in N[e])
                        for (var n in N[e][t]) {
                            var r = N[e][t][n],
                                i = q(r.channel),
                                o = i.isUnread,
                                a = i.isRelevant,
                                u = i.isTimedRelevant;
                            o && Q(S, r.channel, r, !1);
                            a && Q(M, r.channel, r, !1);
                            J(r.channel, u)
                        }
                L = {};
                for (var l in P)
                    for (var c in P[l])
                        for (var s in P[l][c]) {
                            var d = P[l][c][s];
                            f.ZP.isForumPostUnread(s) && Q(L, d, d, !1)
                        }
                Z()
            }

            function W() {
                var e = U;
                if ((U = p.Z.getChannelId()) === e) return !1;
                H(e);
                H(U)
            }

            function q(e) {
                var t = f.ZP.getMentionCount(e.id) > 0,
                    n = f.ZP.hasRelevantUnread(e) && (!_.Z.isMuted(e.id) || t) || (0, l.c)() && t,
                    r = e.hasFlag(m.zZ.PINNED),
                    i = e.isActiveThread(),
                    o = i && v(e) > Date.now();
                return {
                    isUnread: (i || r) && n,
                    isRelevant: o || r || n,
                    isTimedRelevant: o
                }
            }

            function J(e, t) {
                X(e.id);
                t && function(e) {
                    D[e.id] = setTimeout((function() {
                        var t = s.Z.getChannel(e.id);
                        null != t && u.Z.dispatch({
                            type: "THREAD_UPDATE",
                            channel: t
                        })
                    }), v(e) - Date.now() + 1)
                }(e)
            }

            function X(e) {
                if (e in D) {
                    clearTimeout(D[e]);
                    delete D[e]
                }
            }

            function Q(e, t, n, r) {
                var o = t.guild_id,
                    a = t.parent_id,
                    u = t.id;
                if (null != o && null != a && null != u) {
                    o in e || (e[o] = {});
                    a in e[o] || (e[o][a] = {});
                    r && (e[o] = I(T({}, e[o]), g({}, a, T({}, e[o][a]))));
                    if (null === n) {
                        delete e[o][a][u];
                        i().isEmpty(e[o][a]) && delete e[o][a]
                    } else e[o][a][u] = n
                }
            }

            function $(e, t, n, r) {
                if (null != t && null != n && null != r && te(e, t, n, r)) {
                    e[t] = I(T({}, e[t]), g({}, n, T({}, e[t][n])));
                    delete e[t][n][r];
                    i().isEmpty(e[t][n]) && delete e[t][n]
                }
            }

            function ee(e, t) {
                return te(e, t.guild_id, t.parent_id, t.id)
            }

            function te(e, t, n, r) {
                return t in e && n in e[t] && r in e[t][n]
            }
            var ne = {},
                re = {},
                ie = {},
                oe = {},
                ae = {},
                ue = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && A(e, t)
                    }(n, e);
                    var t = R(n);

                    function n() {
                        O(this, n);
                        return t.apply(this, arguments)
                    }
                    var r = n.prototype;
                    r.initialize = function() {
                        this.waitFor(E.Z, s.Z, _.Z, f.ZP);
                        this.syncWith([p.Z], W)
                    };
                    r.hasActiveJoinedUnreadThreads = function(e, t) {
                        return e in S && t in S[e]
                    };
                    r.getActiveUnjoinedThreadsForParent = function(e, t) {
                        var n;
                        return e in P && null !== (n = P[e][t]) && void 0 !== n ? n : oe
                    };
                    r.getActiveJoinedThreadsForParent = function(e, t) {
                        var n;
                        return e in N && null !== (n = N[e][t]) && void 0 !== n ? n : ie
                    };
                    r.getActiveJoinedThreadsForGuild = function(e) {
                        var t;
                        return null !== (t = N[e]) && void 0 !== t ? t : ne
                    };
                    r.getActiveJoinedUnreadThreadsForGuild = function(e) {
                        var t;
                        return null !== (t = S[e]) && void 0 !== t ? t : ne
                    };
                    r.getActiveJoinedUnreadThreadsForParent = function(e, t) {
                        var n;
                        return null !== (n = this.getActiveJoinedUnreadThreadsForGuild(e)[t]) && void 0 !== n ? n : ie
                    };
                    r.getActiveJoinedRelevantThreadsForGuild = function(e) {
                        var t;
                        return null !== (t = M[e]) && void 0 !== t ? t : ne
                    };
                    r.getActiveJoinedRelevantThreadsForParent = function(e, t) {
                        var n;
                        return null !== (n = this.getActiveJoinedRelevantThreadsForGuild(e)[t]) && void 0 !== n ? n : ie
                    };
                    r.getActiveUnjoinedThreadsForGuild = function(e) {
                        var t;
                        return null !== (t = P[e]) && void 0 !== t ? t : re
                    };
                    r.getActiveUnjoinedUnreadThreadsForGuild = function(e) {
                        var t;
                        return null !== (t = L[e]) && void 0 !== t ? t : ne
                    };
                    r.getActiveUnjoinedUnreadThreadsForParent = function(e, t) {
                        var n;
                        return null !== (n = this.getActiveUnjoinedUnreadThreadsForGuild(e)[t]) && void 0 !== n ? n : ie
                    };
                    r.getNewThreadCountsForGuild = function(e) {
                        var t;
                        return null !== (t = w[e]) && void 0 !== t ? t : ae
                    };
                    r.computeAllActiveJoinedThreads = function(e) {
                        var t = [];
                        for (var n in N)
                            if (n === e || null == e)
                                for (var r in N[n])
                                    for (var i in N[n][r]) t.push(N[n][r][i].channel);
                        return t
                    };
                    r.getNewThreadCount = function(e, t) {
                        var n, r;
                        return null !== (r = null === (n = w[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== r ? r : 0
                    };
                    r.getActiveThreadCount = function(e, t) {
                        var n, r, o, a;
                        return i().size(null !== (o = null === (n = N[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== o ? o : {}) + i().size(null !== (a = null === (r = P[e]) || void 0 === r ? void 0 : r[t]) && void 0 !== a ? a : {})
                    };
                    return n
                }(a.ZP.Store);
            ue.displayName = "ActiveJoinedThreadsStore";
            const le = new ue(u.Z, {
                CONNECTION_OPEN: x,
                OVERLAY_INITIALIZE: x,
                THREAD_LIST_SYNC: function(e) {
                    return j(e.guildId)
                },
                LOAD_THREADS_SUCCESS: x,
                LOAD_ARCHIVED_THREADS_SUCCESS: x,
                SEARCH_FINISH: x,
                GUILD_CREATE: function(e) {
                    return j(e.guild.id)
                },
                GUILD_DELETE: x,
                CURRENT_USER_UPDATE: x,
                THREAD_CREATE: F,
                THREAD_UPDATE: F,
                THREAD_DELETE: F,
                CHANNEL_UPDATES: function(e) {
                    var t = e.channels,
                        n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var o, a = t[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) {
                            var u = o.value;
                            if (u.isNSFW() !== V(u.guild_id, u.parent_id)) {
                                x();
                                return
                            }
                        }
                    } catch (e) {
                        r = !0;
                        i = e
                    } finally {
                        try {
                            n || null == a.return || a.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    return !1
                },
                CHANNEL_DELETE: function(e) {
                    var t = e.channel,
                        n = !1;
                    if (null != t.guild_id && null != t.parent_id) {
                        if (t.guild_id in N && t.parent_id in N[t.guild_id]) {
                            delete N[t.guild_id][t.parent_id];
                            n = !0
                        }
                        if (t.guild_id in S && t.parent_id in S[t.guild_id]) {
                            delete S[t.guild_id][t.parent_id];
                            n = !0
                        }
                        if (t.guild_id in M && t.parent_id in M[t.guild_id]) {
                            Object.keys(M[t.guild_id][t.parent_id]).forEach(X);
                            delete M[t.guild_id][t.parent_id];
                            n = !0
                        }
                        if (t.guild_id in P && t.parent_id in P[t.guild_id]) {
                            delete P[t.guild_id][t.parent_id];
                            n = !0
                        }
                        if (t.guild_id in L && t.parent_id in L[t.guild_id]) {
                            delete L[t.guild_id][t.parent_id];
                            n = !0
                        }
                        n && k(t.guild_id, t.parent_id)
                    }
                    return n
                },
                THREAD_MEMBER_UPDATE: z,
                THREAD_MEMBERS_UPDATE: z,
                LOAD_MESSAGES_SUCCESS: Y,
                MESSAGE_CREATE: Y,
                MESSAGE_DELETE: Y,
                MESSAGE_DELETE_BULK: Y,
                MESSAGE_ACK: Y,
                CHANNEL_ACK: Y,
                CHANNEL_LOCAL_ACK: Y,
                CHANNEL_SELECT: function(e) {
                    Y(e);
                    W()
                },
                PASSIVE_UPDATE_V1: function(e) {
                    null != e.channels && K()
                },
                WINDOW_FOCUS: K,
                UPDATE_CHANNEL_DIMENSIONS: K,
                DRAWER_OPEN: K,
                DRAWER_CLOSE: K,
                BULK_ACK: K
            })
        },
        225386: (e, t, n) => {
            "use strict";
            n.d(t, {
                tM: () => h,
                NE: () => v,
                ki: () => m,
                Xu: () => O,
                cD: () => g,
                Ek: () => T,
                JQ: () => I,
                C7: () => b,
                tc: () => R,
                kn: () => N,
                $R: () => S,
                RG: () => P,
                xl: () => L,
                Xb: () => w,
                Y: () => D,
                Gu: () => x
            });
            var r = n(496486),
                i = n.n(r),
                o = n(940060),
                a = n(202351),
                u = n(249139),
                l = n(774930),
                c = n(791707),
                s = n(382060),
                d = n(664625),
                f = n(61209),
                p = n(682776),
                E = n(18882),
                _ = n(2590),
                h = (0, u.Z)({
                    id: "2022-07_voice_in_threads",
                    label: "Voice in Threads",
                    kind: "guild",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "On",
                        config: {
                            enabled: !0
                        }
                    }]
                });

            function v(e, t) {
                return y((0, a.e7)([p.Z], (function() {
                    var t = e.isForumLikeChannel() ? _.Plq.SEND_MESSAGES : o.Z.combine(_.Plq.CREATE_PUBLIC_THREADS, _.Plq.READ_MESSAGE_HISTORY);
                    return p.Z.can(t, e)
                }), [e]), e, t)
            }

            function m(e, t) {
                var n = e.isForumLikeChannel() ? _.Plq.SEND_MESSAGES : o.Z.combine(_.Plq.CREATE_PUBLIC_THREADS, _.Plq.READ_MESSAGE_HISTORY);
                return y(p.Z.can(n, e), e, t)
            }

            function O(e) {
                var t = (0, a.e7)([p.Z], (function() {
                    return p.Z.can(o.Z.combine(_.Plq.CREATE_PRIVATE_THREADS), e)
                }), [e]);
                return e.type === _.d4z.GUILD_TEXT && y(t, e)
            }

            function g(e) {
                var t = v(e),
                    n = O(e);
                return t || n
            }

            function y(e, t, n) {
                if (__OVERLAY__) return !1;
                if (!e) return !1;
                if (!s.uC.has(t.type)) return !1;
                if (null != n) {
                    if (n.hasFlag(_.iLy.HAS_THREAD)) return !1;
                    if ((0, c.Z)(n)) return !1
                }
                return !0
            }

            function T(e) {
                var t = (0, a.e7)([f.Z], (function() {
                    return f.Z.getChannel(e.id)
                }), [e]);
                return function(e, t, n) {
                    return !!t.hasFlag(_.iLy.HAS_THREAD) && (null != n && !!e)
                }((0, a.e7)([p.Z], (function() {
                    return p.Z.can(_.Plq.VIEW_CHANNEL, t)
                }), [t]), e, t)
            }

            function I(e) {
                return (0, a.cj)([E.Z, p.Z], (function() {
                    var t = E.Z.getActiveJoinedThreadsForParent(e.guild_id, e.id),
                        n = E.Z.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id),
                        r = E.Z.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
                        o = i()(n).some((function(e) {
                            return p.Z.can(_.Plq.VIEW_CHANNEL, e.channel)
                        })),
                        a = i()(t).some((function(e) {
                            return !(e.channel.id in n) && p.Z.can(_.Plq.VIEW_CHANNEL, e.channel)
                        })),
                        u = i()(r).some((function(e) {
                            return p.Z.can(_.Plq.VIEW_CHANNEL, e)
                        }));
                    return {
                        hasActiveThreads: o || a || u,
                        hasMoreActiveThreads: u || a
                    }
                }))
            }

            function b(e) {
                var t = (0, a.e7)([f.Z], (function() {
                        return f.Z.getChannel(null == e ? void 0 : e.parent_id)
                    })),
                    n = (0, a.e7)([p.Z], (function() {
                        return null != t && p.Z.can(_.Plq.MANAGE_THREADS, t)
                    }), [t]),
                    r = (0, a.e7)([d.default], (function() {
                        return d.default.getId()
                    }));
                return null != e && null != t && (!!e.isThread() && (!!n || !e.isLockedThread() && e.ownerId === r))
            }

            function A(e, t) {
                return null != e && t.can(_.Plq.SEND_MESSAGES_IN_THREADS, e)
            }

            function C(e, t, n) {
                var r;
                return !(null == e || !e.isThread()) && ((null === (r = e.threadMetadata) || void 0 === r ? void 0 : r.locked) ? n : t)
            }

            function R(e) {
                var t = (0, a.e7)([p.Z], (function() {
                        return A(e, p.Z)
                    })),
                    n = w(e);
                return C(e, t, n)
            }

            function N(e) {
                return C(e, A(e, p.Z), U(e))
            }

            function S(e) {
                var t, n = (0, a.e7)([p.Z], (function() {
                    return null != e && p.Z.can(_.Plq.SEND_MESSAGES_IN_THREADS, e)
                }));
                return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && !0 !== (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) && n)
            }

            function P(e) {
                var t;
                return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && !0 !== (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) && p.Z.can(_.Plq.SEND_MESSAGES_IN_THREADS, e))
            }

            function L(e) {
                var t = p.Z.can(_.Plq.MANAGE_THREADS, e);
                return e.isArchivedLockedThread() && !t
            }

            function M(e, t) {
                return null != e && t.can(_.Plq.MANAGE_THREADS, e)
            }

            function w(e) {
                return (0, a.e7)([p.Z], (function() {
                    return M(e, p.Z)
                }))
            }

            function U(e) {
                return M(e, p.Z)
            }

            function D(e) {
                var t = (0, l.Z)(),
                    n = (0, a.e7)([p.Z], (function() {
                        return p.Z.can(_.Plq.CONNECT, e)
                    })),
                    r = S(e),
                    i = h.useExperiment({
                        guildId: e.guild_id,
                        location: "e791ea_1"
                    }, {
                        autoTrackExposure: !1
                    }).enabled;
                return !t && e.isVocalThread() && i && n && r
            }

            function x(e) {
                var t = w(e);
                return e.isLockedThread() && !t
            }
        },
        698011: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => y
            });
            var r = n(785893),
                i = n(667294),
                o = n(294184),
                a = n.n(o),
                u = n(853158),
                l = n(304548),
                c = n(773940),
                s = n.n(c);

            function d(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function f(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function p(e) {
                p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return p(e)
            }

            function E(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function _(e, t) {
                return !t || "object" !== v(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function h(e, t) {
                h = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return h(e, t)
            }
            var v = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function m(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = p(e);
                    if (t) {
                        var i = p(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return _(this, n)
                }
            }
            var O = {
                    friction: 7,
                    tension: 60
                },
                g = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && h(e, t)
                    }(n, e);
                    var t = m(n);

                    function n() {
                        d(this, n);
                        var e;
                        (e = t.apply(this, arguments)).animation = new u.Z.Value(0);
                        return e
                    }
                    var i = n.prototype;
                    i.componentWillAppear = function(e) {
                        this.animateTo(1).start(e)
                    };
                    i.componentWillEnter = function(e) {
                        this.animateTo(1).start(e)
                    };
                    i.componentWillLeave = function(e) {
                        this.context.reducedMotion.enabled ? this.animateTo(0).start(e) : u.Z.stagger(250, [this.animateTo(1.3), this.animateTo(0)]).start(e)
                    };
                    i.animateTo = function(e) {
                        return u.Z.spring(this.animation, E(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                }))));
                                r.forEach((function(t) {
                                    f(e, t, n[t])
                                }))
                            }
                            return e
                        }({}, O), {
                            toValue: e
                        }))
                    };
                    i.getAnimatedStyle = function() {
                        var e = this.context.reducedMotion;
                        return u.Z.accelerate({
                            opacity: this.animation,
                            transform: e.enabled ? void 0 : [{
                                translateY: this.animation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["150%", "0%"]
                                })
                            }]
                        })
                    };
                    i.render = function() {
                        var e = this.props,
                            t = e.className,
                            n = e.children;
                        return (0, r.jsx)(u.Z.div, {
                            className: a()(t, s().slider),
                            style: this.getAnimatedStyle(),
                            children: n
                        })
                    };
                    return n
                }(i.Component);
            g.contextType = l.AccessibilityPreferencesContext;
            const y = g
        },
        269175: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p
            });
            var r = n(785893),
                i = (n(667294), n(450520)),
                o = n(795308),
                a = n(633878);

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function c(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function d(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function f(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }
            const p = (0, i.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    i = e.height,
                    o = void 0 === i ? 24 : i,
                    u = e.color,
                    l = void 0 === u ? "currentColor" : u,
                    c = e.foreground,
                    p = f(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsxs)("svg", d(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            s(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, a.Z)(p)), {
                    width: n,
                    height: o,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: [(0, r.jsx)("path", {
                        d: "M12.0002 10.823L20.9652 5.26C20.6772 5.1 20.3522 5 20.0002 5H4.00016C3.64816 5 3.32216 5.1 3.03516 5.26L12.0002 10.823Z",
                        fill: l,
                        className: c
                    }), (0, r.jsx)("path", {
                        d: "M12.527 12.8489C12.366 12.9489 12.183 12.9999 12 12.9999C11.817 12.9999 11.634 12.9489 11.473 12.8499L2.003 6.97292C2.003 6.98192 2 6.99092 2 6.99892V15.9989C2 17.1009 2.897 17.9989 4 17.9989H20C21.103 17.9989 22 17.1009 22 15.9989V6.99892C22 6.98992 21.997 6.98092 21.997 6.97192L12.527 12.8489Z",
                        fill: l,
                        className: c
                    })]
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    i = e.height,
                    s = void 0 === i ? 24 : i,
                    d = e.color,
                    f = void 0 === d ? o.Z.colors.INTERACTIVE_NORMAL : d,
                    p = e.colorClass,
                    E = void 0 === p ? "" : p,
                    _ = c(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsxs)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            u(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, a.Z)(_)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fill: "string" == typeof f ? f : f.css,
                        d: "M5 2a3 3 0 0 0-3 3v.596a1 1 0 0 0 .445.832L12 12.798l9.555-6.37A1 1 0 0 0 22 5.596V5a3 3 0 0 0-3-3H5Z",
                        className: E
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof f ? f : f.css,
                        d: "M22 9.47a.5.5 0 0 0-.777-.417l-8.53 5.687c-.42.28-.966.28-1.386 0l-8.53-5.687A.5.5 0 0 0 2 9.47V19a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V9.47Z",
                        className: E
                    })]
                }))
            }))
        },
        252761: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p
            });
            var r = n(785893),
                i = (n(667294), n(450520)),
                o = n(795308),
                a = n(633878);

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function c(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function d(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function f(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }
            const p = (0, i.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 16 : t,
                    i = e.height,
                    o = void 0 === i ? 16 : i,
                    u = e.color,
                    l = void 0 === u ? "currentColor" : u,
                    c = f(e, ["width", "height", "color"]);
                return (0, r.jsx)("svg", d(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            s(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, a.Z)(c)), {
                    width: n,
                    height: o,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: (0, r.jsx)("path", {
                            fill: l,
                            d: "M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"
                        })
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    i = e.height,
                    s = void 0 === i ? 24 : i,
                    d = e.color,
                    f = void 0 === d ? o.Z.colors.INTERACTIVE_NORMAL : d,
                    p = e.colorClass,
                    E = void 0 === p ? "" : p,
                    _ = c(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            u(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, a.Z)(_)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof f ? f : f.css,
                        fillRule: "evenodd",
                        d: "M8 1a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H8Zm2 2a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2h-4Z",
                        clipRule: "evenodd",
                        className: E
                    })
                }))
            }))
        },
        531441: (e, t, n) => {
            "use strict";
            n.d(t, {
                Dv: () => p,
                OV: () => _,
                NG: () => h,
                mA: () => v,
                IG: () => m,
                lB: () => O,
                G2: () => g,
                fW: () => y
            });
            var r = n(785893),
                i = (n(667294), n(294184)),
                o = n.n(i),
                a = (n(304548), n(87931)),
                u = (n(473708), n(800624)),
                l = n.n(u);

            function c(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        c(e, t, n[t])
                    }))
                }
                return e
            }

            function d(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function f(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }
            var p = {
                ROUND: l().baseShapeRound,
                ROUND_LEFT: l().baseShapeRoundLeft,
                ROUND_RIGHT: l().baseShapeRoundRight,
                SQUARE: ""
            };

            function E(e) {
                switch (e) {
                    case 1:
                    case 4:
                    case 6:
                        return 1;
                    default:
                        return
                }
            }

            function _(e) {
                return e < 10 ? 16 : e < 100 ? 22 : 30
            }

            function h(e) {
                return e < 1e3 ? "".concat(e) : "".concat(Math.min(Math.floor(e / 1e3), 9), "k+")
            }
            var v = function(e) {
                    var t = e.count,
                        n = e.color,
                        i = void 0 === n ? a.Z.STATUS_DANGER : n,
                        u = e.disableColor,
                        c = void 0 !== u && u,
                        v = e.shape,
                        m = void 0 === v ? p.ROUND : v,
                        O = e.className,
                        g = e.style,
                        y = f(e, ["count", "color", "disableColor", "shape", "className", "style"]);
                    return (0, r.jsx)("div", d(s({
                        className: o()(O, l().numberBadge, m),
                        style: s({
                            backgroundColor: c ? void 0 : i,
                            width: _(t),
                            paddingRight: E(t)
                        }, g)
                    }, y), {
                        children: h(t)
                    }))
                },
                m = function(e) {
                    var t = e.text,
                        n = e.className,
                        i = e.color,
                        u = void 0 === i ? a.Z.STATUS_DANGER : i,
                        c = e.shape,
                        E = void 0 === c ? p.ROUND : c,
                        _ = e.disableColor,
                        h = void 0 !== _ && _,
                        v = e.style,
                        m = f(e, ["text", "className", "color", "shape", "disableColor", "style"]);
                    return (0, r.jsx)("div", d(s({
                        className: o()(n, l().textBadge, E),
                        style: s({
                            backgroundColor: h ? void 0 : u
                        }, v)
                    }, m), {
                        children: t
                    }))
                },
                O = function(e) {
                    var t = e.text,
                        n = e.className,
                        i = f(e, ["text", "className"]);
                    return (0, r.jsx)(m, s({
                        className: o()(l().premiumBadge, n),
                        text: t
                    }, i))
                },
                g = function(e) {
                    var t = e.icon,
                        n = e.className,
                        i = e.color,
                        u = void 0 === i ? a.Z.STATUS_DANGER : i,
                        c = e.shape,
                        d = void 0 === c ? p.ROUND : c,
                        f = e.disableColor,
                        E = void 0 !== f && f,
                        _ = e.style;
                    return (0, r.jsx)("div", {
                        className: o()(n, l().iconBadge, d),
                        style: s({
                            backgroundColor: E ? void 0 : u
                        }, _),
                        children: (0, r.jsx)(t, {
                            className: l().icon
                        })
                    })
                },
                y = function(e) {
                    var t = e.className,
                        n = e.color,
                        i = void 0 === n ? a.Z.INTERACTIVE_ACTIVE : n,
                        u = e.shape,
                        c = void 0 === u ? p.ROUND : u,
                        d = e.disableColor,
                        E = void 0 !== d && d,
                        _ = e.style,
                        h = f(e, ["className", "color", "shape", "disableColor", "style"]);
                    return (0,
                        r.jsx)("div", s({
                        className: o()(t, l().circleBadge, c),
                        style: s({
                            backgroundColor: E ? void 0 : i
                        }, _)
                    }, h))
                }
        },
        691797: (e, t, n) => {
            "use strict";
            n.d(t, {
                wS: () => a,
                JG: () => u
            });
            var r = n(482507),
                i = n(120415),
                o = n(310126),
                a = function() {
                    if (i.FB) return null != o.ZP.copy;
                    try {
                        return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                    } catch (e) {
                        return !1
                    }
                }();

            function u(e) {
                if (!a) return !1;
                if (i.FB) {
                    o.ZP.copy(e);
                    return !0
                }
                return r.J(e)
            }
        },
        248634: (e, t, n) => {
            "use strict";
            n.d(t, {
                z: () => r
            });
            var r;
            ! function(e) {
                e.MATCH_ALL = "match_all";
                e.MATCH_SOME = "match_some"
            }(r || (r = {}));
            new Set(["match_all", "match_some"])
        },
        482507: (e, t, n) => {
            "use strict";
            n.d(t, {
                J: () => r
            });

            function r(e) {
                var t = document.body;
                if (null == t) throw new Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                var n = document.createRange(),
                    r = window.getSelection(),
                    i = document.createElement("textarea");
                i.value = e;
                i.contentEditable = "true";
                i.style.visibility = "none";
                t.appendChild(i);
                n.selectNodeContents(i);
                null == r || r.removeAllRanges();
                null == r || r.addRange(n);
                i.focus();
                i.setSelectionRange(0, e.length);
                var o = document.execCommand("copy");
                t.removeChild(i);
                return o
            }
        },
        989824: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => o
            });
            var r = n(667294),
                i = {};

            function o(e) {
                var t = (0, r.useRef)(i);
                t.current === i && (t.current = e());
                return t.current
            }
        }
    }
]);