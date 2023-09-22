"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [15408, 56620], {
        652411: (e, t, n) => {
            n.d(t, {
                O_: () => L,
                qA: () => f,
                Ji: () => N,
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

            function c(e, t) {
                return e * t * t * (t > 0 ? -1 : 1)
            }
            var l = function() {
                    function e(e) {
                        this.id = e.id, this.position = e.position, this.velocity = e.velocity, this.rotation = e.rotation, this.dragCoefficient = e.dragCoefficient, this.size = e.size, this.opacity = e.opacity, this.spriteX = e.spriteX, this.spriteY = e.spriteY, this.spriteWidth = e.spriteWidth, this.spriteHeight = e.spriteHeight, this._lastUpdatedAt = Date.now()
                    }
                    return e.prototype.getNewForces = function(e, t) {
                        var n = e.wind * t,
                            r = -e.gravity * t;
                        return {
                            x: n + c(this.dragCoefficient.x, this.velocity.x),
                            y: r + c(this.dragCoefficient.y, this.velocity.y)
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
                f = function(e) {
                    var t = void 0 === e ? {} : e,
                        n = t.gravity,
                        r = t.wind;
                    this.gravity = -9.8, this.wind = 0, this.gravity = null != n ? n : this.gravity, this.wind = null != r ? r : this.wind
                },
                d = function(e, t) {
                    return d = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    }, d(e, t)
                };

            function p(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function n() {
                    this.constructor = e
                }
                d(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
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
                O = function() {
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
                m = function(e) {
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
                }(O),
                y = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return p(t, e), t.prototype.update = function() {}, t.prototype.previewUpdate = function() {
                        return this.value
                    }, t
                }(_),
                I = function(e) {
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
                h = function(e) {
                    function t(t, n, r, i, o, a) {
                        var u = e.call(this, t) || this;
                        u.min = n, u.max = r, u.duration = i;
                        var c = u.value / (u.max - u.min) * u.duration,
                            l = isNaN(c) ? 0 : c;
                        return u.timePassed = l < 0 ? u.duration - l : l, u.directionMultiplier = o, u.easingFunction = a, u
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

            function v(e, t) {
                return e === t ? e : Math.random() * (t - e + 1) + e
            }

            function T(e) {
                var t = Math.floor(v(0, e.length - 1));
                return [e[t], t]
            }

            function b(e, t) {
                return T([e, t])[0]
            }

            function g(e) {
                return "number" == typeof e ? {
                    x: e,
                    y: e
                } : e
            }

            function C(e) {
                return "number" == typeof e ? {
                    x: e,
                    y: e,
                    z: e
                } : e
            }

            function A(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            return new y(e.value);
                        case "static-random":
                            return new y(v(e.minValue, e.maxValue));
                        case "linear":
                            return new I(e.value, e.addValue);
                        case "linear-random":
                            return new I(v(e.minValue, e.maxValue), v(e.minAddValue, e.maxAddValue));
                        case "oscillating":
                            return new h(e.value, e.start, e.final, e.duration, e.direction, e.easingFunction);
                        case "oscillating-random":
                            return new h(v(e.minValue, e.maxValue), v(e.minStart, e.maxStart), v(e.minFinal, e.maxFinal), v(e.minDuration, e.maxDuration), b(e.minDirection, e.maxDirection), T(e.easingFunctions)[0])
                    }
                }(E(E({}, e), {
                    valueType: "number"
                }))
            }

            function S(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            var t = g(e.value);
                            return new O(new y(t.x), new y(t.y));
                        case "static-random":
                            var n = g(e.minValue),
                                r = g(e.maxValue);
                            return new O(new y(v(n.x, r.x)), new y(v(n.y, r.y)));
                        case "linear":
                            t = g(e.value);
                            var i = g(e.addValue);
                            return new O(new I(t.x, i.x), new I(t.y, i.y));
                        case "linear-random":
                            n = g(e.minValue), r = g(e.maxValue);
                            var o = g(e.minAddValue),
                                a = g(e.maxAddValue);
                            return new O(new I(v(n.x, r.x), v(o.x, a.x)), new I(v(n.y, r.y), v(o.x, a.x)));
                        case "oscillating":
                            t = g(e.value);
                            var u = g(e.start),
                                c = g(e.final),
                                l = g(e.duration),
                                s = g(e.direction);
                            return new O(new h(t.x, u.x, c.x, l.x, s.x, e.easingFunction), new h(t.y, u.y, c.y, l.x, s.y, e.easingFunction));
                        case "oscillating-random":
                            n = g(e.minValue), r = g(e.maxValue);
                            var f = g(e.minStart),
                                d = g(e.maxStart),
                                p = g(e.minFinal),
                                E = g(e.maxFinal),
                                _ = g(e.minDuration),
                                m = g(e.maxDuration),
                                C = g(e.minDirection),
                                A = g(e.maxDirection);
                            return new O(new h(v(n.x, r.x), v(f.x, d.x), v(p.x, E.x), v(_.x, m.x), b(C.x, A.x), T(e.easingFunctions)[0]), new h(v(n.y, r.y), v(f.y, d.y), v(p.y, E.y), v(_.y, m.y), b(C.y, A.y), T(e.easingFunctions)[0]))
                    }
                }(E(E({}, e), {
                    valueType: "Vector2"
                }))
            }

            function R(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            var t = C(e.value);
                            return new m(new y(t.x), new y(t.y), new y(t.z));
                        case "static-random":
                            var n = C(e.minValue),
                                r = C(e.maxValue);
                            return new m(new y(v(n.x, r.x)), new y(v(n.y, r.y)), new y(v(n.z, r.z)));
                        case "linear":
                            t = C(e.value);
                            var i = C(e.addValue);
                            return new m(new I(t.x, i.x), new I(t.y, i.y), new I(t.z, i.z));
                        case "linear-random":
                            n = C(e.minValue), r = C(e.maxValue);
                            var o = C(e.minAddValue),
                                a = C(e.maxAddValue);
                            return new m(new I(v(n.x, r.x), v(o.x, a.x)), new I(v(n.y, r.y), v(o.y, a.y)), new I(v(n.z, r.z), v(o.z, a.z)));
                        case "oscillating":
                            t = C(e.value);
                            var u = C(e.start),
                                c = C(e.final),
                                l = C(e.duration),
                                s = C(e.direction);
                            return new m(new h(t.x, u.x, c.x, l.x, s.x, e.easingFunction), new h(t.y, u.y, c.y, l.z, s.y, e.easingFunction), new h(t.z, u.z, c.z, l.z, s.z, e.easingFunction));
                        case "oscillating-random":
                            n = C(e.minValue), r = C(e.maxValue);
                            var f = C(e.minStart),
                                d = C(e.maxStart),
                                p = C(e.minFinal),
                                E = C(e.maxFinal),
                                _ = C(e.minDuration),
                                O = C(e.maxDuration),
                                g = C(e.minDirection),
                                A = C(e.maxDirection);
                            return new m(new h(v(n.x, r.x), v(f.x, d.x), v(p.x, E.x), v(_.x, O.x), b(g.x, A.x), T(e.easingFunctions)[0]), new h(v(n.y, r.y), v(f.y, d.y), v(p.y, E.y), v(_.y, O.y), b(g.y, A.y), T(e.easingFunctions)[0]), new h(v(n.z, r.z), v(f.z, d.z), v(p.z, E.z), v(_.z, O.z), b(g.z, A.z), T(e.easingFunctions)[0]))
                    }
                }(E(E({}, e), {
                    valueType: "Vector3"
                }))
            }

            function P(e, t, n, r, i) {
                var o = function(e, t) {
                        return E(E({
                            id: t
                        }, s), e)
                    }(t, e),
                    a = S(o.size),
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
                    c = u[0],
                    f = u[1],
                    d = function(e, t, n) {
                        if (! function(e) {
                                return "string" == typeof e || e.colorize
                            }(e)) return 0;
                        var r = null != t ? n.colors.findIndex((function(e) {
                            return e === t
                        })) : -1;
                        return -1 !== r ? r : Math.floor(v(0, n.colors.length - 1))
                    }(null != r ? r : c, i, n);
                return new l({
                    id: e,
                    position: S(o.position),
                    velocity: S(o.velocity),
                    rotation: R(o.rotation),
                    dragCoefficient: S(o.dragCoefficient),
                    size: a,
                    opacity: A(o.opacity),
                    spriteX: d * n.spriteWidth + 2 * d,
                    spriteY: f * n.spriteHeight + 2 * f,
                    spriteWidth: n.spriteWidth,
                    spriteHeight: n.spriteHeight
                })
            }
            var L = r.forwardRef((function(e, t) {
                var o = e.className,
                    a = e.environment,
                    c = e.onClick,
                    l = e.onMouseDown,
                    s = e.onMouseMove,
                    f = e.onMouseUp,
                    d = e.onBeforeRender,
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
                    O = r.useRef(null),
                    m = r.useRef(new Map),
                    y = r.useRef(null),
                    I = r.useRef(0),
                    h = r.useRef(0),
                    v = r.useCallback((function() {
                        var e = O.current;
                        if (null != e) {
                            var t = e.getContext("2d");
                            if (null != t) {
                                t.clearRect(0, 0, e.width, e.height), null == d || d(t), m.current.forEach((function(n, r) {
                                    var i = n.confetti,
                                        o = n.spriteCanvas;
                                    i.update(a), i.draw(o, t), i.shouldDestroy(e, a) && m.current.delete(r)
                                })), null == p || p(t), m.current.size > 0 ? y.current = window.requestAnimationFrame(v) : (t.clearRect(0, 0, e.width, e.height), y.current = null);
                                var n = Date.now();
                                0 !== I.current && (h.current = 1e3 / (n - I.current)), I.current = n
                            }
                        }
                    }), [a, p, d]);
                r.useEffect((function() {
                    null != y.current && (window.cancelAnimationFrame(y.current), y.current = window.requestAnimationFrame(v))
                }), [v]);
                var T = r.useCallback((function(e, t) {
                        m.current.set(e.id, {
                            confetti: e,
                            spriteCanvas: t
                        }), null == y.current && v()
                    }), [v]),
                    b = r.useCallback((function(e, t, n, r, o) {
                        var a, u = P(null !== (a = e.id) && void 0 !== a ? a : (0, i.v4)(), e, n, r, o);
                        return T(u, t), u
                    }), [T]),
                    g = r.useCallback((function(e) {
                        m.current.delete(e)
                    }), []),
                    C = r.useCallback((function() {
                        return m.current.clear()
                    }), []),
                    A = r.useCallback((function() {
                        return O.current
                    }), []);
                r.useImperativeHandle(t, (function() {
                    return {
                        createConfetti: b,
                        addConfetti: T,
                        deleteConfetti: g,
                        clearConfetti: C,
                        getCanvas: A
                    }
                }), [b, T, g, C, A]);
                var S = r.useCallback((function(e, t) {
                        var n, r, i = t.clickHandler,
                            o = t.mouseHandler;
                        if (null != i || null != o) {
                            var c = null === (n = O.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                            if (null != c) {
                                var l = function(e, t) {
                                    if (null == t) throw new Error("element should not be null");
                                    var n = t.getBoundingClientRect();
                                    return {
                                        x: e.clientX - n.left,
                                        y: e.clientY - n.top
                                    }
                                }(e, O.current);
                                if (u(l, {
                                        x: c.left,
                                        y: c.top,
                                        width: c.width,
                                        height: c.height
                                    })) {
                                    if (null != o) return o(e);
                                    if (null != i) {
                                        var s = -1e3 / h.current * 2,
                                            f = function(e, t) {
                                                for (var n = 0, r = Array.from(e.values()); n < r.length; n++) {
                                                    var i = r[n];
                                                    if (null != i && t(i)) return i
                                                }
                                                return null
                                            }(m.current, (function(e) {
                                                var t = e.confetti,
                                                    n = t.previewPositionUpdate(a, s);
                                                return u(l, {
                                                    x: n.x - t.width / 2,
                                                    y: n.y - t.height / 2,
                                                    width: t.width,
                                                    height: t.height
                                                })
                                            }));
                                        i(e, null !== (r = null == f ? void 0 : f.confetti) && void 0 !== r ? r : null)
                                    }
                                }
                            }
                        }
                    }), [a]),
                    R = r.useCallback((function(e) {
                        return S(e, {
                            clickHandler: c
                        })
                    }), [S, c]),
                    L = r.useCallback((function(e) {
                        return S(e, {
                            clickHandler: l
                        })
                    }), [S, l]),
                    N = r.useCallback((function(e) {
                        return S(e, {
                            mouseHandler: s
                        })
                    }), [S, s]),
                    M = r.useCallback((function(e) {
                        return S(e, {
                            mouseHandler: f
                        })
                    }), [S, f]);
                return r.useEffect((function() {
                    var e = function(e, t, n) {
                        null != n && window.addEventListener(e, t)
                    };
                    return e("click", R, c), e("mousedown", L, l), e("mousemove", N, s), e("mouseup", M, f),
                        function() {
                            window.removeEventListener("click", R), window.removeEventListener("mousedown", L), window.removeEventListener("mousemove", N), window.removeEventListener("mouseup", N)
                        }
                }), [R, L, N, M, c, l, s, f]), r.useEffect((function() {
                    var e = O.current,
                        t = new ResizeObserver((function() {
                            ! function(e) {
                                if (null != e) {
                                    var t = e.getBoundingClientRect(),
                                        r = t.width,
                                        i = t.height;
                                    e.width = r * n.g.devicePixelRatio, e.height = i * n.g.devicePixelRatio
                                }
                            }(O.current)
                        }));
                    return null != e && t.observe(e),
                        function() {
                            null != e && t.unobserve(e)
                        }
                }), []), r.createElement("canvas", E({}, _, {
                    className: o,
                    ref: O
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
            var N = r.forwardRef((function(e, t) {
                var n, o = e.className,
                    u = e.visible,
                    c = void 0 !== u && u,
                    l = e.sprites,
                    s = e.colors,
                    f = e.spriteWidth,
                    d = e.spriteHeight,
                    p = r.useRef(null),
                    E = r.useRef([]),
                    _ = r.useRef(!1),
                    O = r.useRef({});
                r.useImperativeHandle(t, (function() {
                    return {
                        getCanvas: function() {
                            return p.current
                        },
                        getCreateData: function() {
                            return {
                                sprites: E.current,
                                colors: s,
                                spriteWidth: f,
                                spriteHeight: d
                            }
                        },
                        addReadyListener: function(e) {
                            var t = (0, i.v4)();
                            return O.current[t] = e, t
                        },
                        removeReadyListener: function(e) {
                            delete O.current[e]
                        },
                        isReady: _.current
                    }
                }), [s, d, f]);
                var m = r.useCallback((function() {
                        var e = p.current,
                            t = null == e ? void 0 : e.getContext("2d", {
                                willReadFrequently: !0
                            });
                        null != t && null != e && (t.clearRect(0, 0, e.width, e.height),
                            E.current.forEach((function(e, n) {
                                var r = function(r, i) {
                                    var o = f * i + 2 * i,
                                        a = d * n + 2 * n;
                                    if (t.drawImage(e.image, o, a, f, d), null != r) {
                                        for (var u = t.getImageData(o, a, f, d), c = function(e) {
                                                "#" === e[0] && (e = e.slice(1));
                                                var t = parseInt(e, 16);
                                                return {
                                                    r: t >> 16 & 255,
                                                    g: t >> 8 & 255,
                                                    b: 255 & t
                                                }
                                            }(r), l = 0; l < u.data.length; l += 4) u.data[l] = c.r, u.data[l + 1] = c.g, u.data[l + 2] = c.b;
                                        t.putImageData(u, o, a)
                                    }
                                };
                                e.colorize ? s.forEach((function(e, t) {
                                    return r(e, t)
                                })) : r(null, 0)
                            })))
                    }), [s, d, f]),
                    y = r.useCallback((function() {
                        var e = l.map((function(e) {
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
                    }), [l]),
                    I = r.useCallback((function(e) {
                        for (var t in O.current) O.current[t](e)
                    }), []),
                    h = r.useCallback((function() {
                        return function(e, t, n, r) {
                            return new(n || (n = Promise))((function(i, o) {
                                function a(e) {
                                    try {
                                        c(r.next(e))
                                    } catch (e) {
                                        o(e)
                                    }
                                }

                                function u(e) {
                                    try {
                                        c(r.throw(e))
                                    } catch (e) {
                                        o(e)
                                    }
                                }

                                function c(e) {
                                    var t;
                                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                        e(t)
                                    }))).then(a, u)
                                }
                                c((r = r.apply(e, t || [])).next())
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
                                    return function(c) {
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
                                        }([u, c])
                                    }
                                }
                            }(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, y()];
                                    case 1:
                                        return e.sent(), m(), _.current = !0, I(!0), [2]
                                }
                            }))
                        }))
                    }), [I, y, m]);
                return r.useEffect((function() {
                    h()
                }), [h]), r.useEffect((function() {
                    return function() {
                        return I(!1)
                    }
                }), [I]), r.useEffect((function() {
                    null != p.current && (p.current.width = (f + 2) * Math.max(s.length, 1), p.current.height = (d + 2) * l.length)
                }), [s.length, d, f, l.length]), r.createElement("canvas", {
                    ref: p,
                    className: a()(o, (n = {}, n["SpriteCanvas-module_spriteCanvasHidden__ndzQV"] = !c, n))
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
                            c = null == t ? void 0 : t.getCanvas();
                        if (null != c && null != u && 0 !== u.sprites.length) return null == e ? void 0 : e.createConfetti(n, c, u, o, a)
                    }), [e, t]),
                    c = r.useCallback((function(e, t, n) {
                        for (var r = [], i = 0; i < t; i++) {
                            var o = u(e, n);
                            o && r.push(o)
                        }
                        return r
                    }), [u]),
                    l = r.useCallback((function(n) {
                        var r = null == t ? void 0 : t.getCanvas();
                        null != r && (null == e || e.addConfetti(n, r))
                    }), [e, t]),
                    s = r.useCallback((function(t) {
                        null == e || e.deleteConfetti(t)
                    }), [e]),
                    f = r.useCallback((function() {
                        return null == e ? void 0 : e.clearConfetti()
                    }), [e]);
                return r.useMemo((function() {
                    return {
                        createConfetti: u,
                        createMultipleConfetti: c,
                        addConfetti: l,
                        clearConfetti: f,
                        deleteConfetti: s,
                        isReady: o && null != t && null != e
                    }
                }), [l, f, e, u, c, s, o, t])
            }
        },
        735885: (e, t, n) => {
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
        810978: (e, t, n) => {
            n.d(t, {
                GZ: () => E,
                Gn: () => O,
                Y2: () => m,
                mE: () => y
            });
            var r = n(281110),
                i = n(744564),
                o = n(973889),
                a = n(615796),
                u = n(264628),
                c = n(673679),
                l = n(2590),
                s = n(203600);

            function f(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        c = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(c) : Promise.resolve(c).then(r, i)
            }

            function d(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            f(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            f(o, r, i, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var p = function(e, t) {
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
                                if (n = 1,
                                    r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
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

            function E(e, t, n, r, i) {
                return _.apply(this, arguments)
            }

            function _() {
                return (_ = d((function(e, t, n, s, f) {
                    var d, E, _, O;
                    return p(this, (function(p) {
                        switch (p.label) {
                            case 0:
                                i.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH",
                                    skuId: e
                                });
                                p.label = 1;
                            case 1:
                                p.trys.push([1, 5, , 6]);
                                d = {
                                    url: l.ANM.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS(e),
                                    oldFormErrors: !0
                                };
                                E = {};
                                null != t && (E.country_code = t);
                                null != n && (E.payment_source_id = n);
                                null != s && (E.include_unpublished = s);
                                null != f && (E.revenue_surface = f);
                                d.query = E;
                                return a.Z.ipCountryCodeLoaded ? [3, 3] : [4, (0, c.GE)()];
                            case 2:
                                p.sent();
                                p.label = 3;
                            case 3:
                                return [4, r.ZP.get(d)];
                            case 4:
                                _ = p.sent();
                                i.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                                    skuId: e,
                                    subscriptionPlans: _.body
                                });
                                return [3, 6];
                            case 5:
                                O = p.sent();
                                i.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH_FAILURE",
                                    skuId: e
                                });
                                (0, u.q2)(O);
                                throw new o.Z(O);
                            case 6:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function O(e, t) {
                return Promise.all(e.filter((function(e) {
                    return e !== s.Si.NONE
                })).map((function(e) {
                    return E(e, t)
                })))
            }

            function m(e, t, n) {
                return Promise.all(s.YQ.filter((function(e) {
                    return e !== s.Si.NONE
                })).map((function(r) {
                    return E(r, e, t, void 0, n)
                })))
            }

            function y() {
                i.Z.dispatch({
                    type: "SUBSCRIPTION_PLANS_RESET"
                })
            }
        },
        72831: (e, t, n) => {
            n.d(t, {
                Z: () => O
            });
            var r, i = n(785893),
                o = (n(667294),
                    n(294184)),
                a = n.n(o),
                u = n(289283),
                c = n(882723),
                l = n(189865),
                s = n(127661),
                f = n(473708),
                d = n(545107),
                p = n.n(d);

            function E(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }! function(e) {
                e.DEFAULT = "";
                e.BOLD = "Bold";
                e.SOLID = "Solid"
            }(r || (r = {}));
            var _ = function(e) {
                var t, n = e.closeAction,
                    o = e.variant,
                    d = e.keybind,
                    _ = e.className;
                return (0, i.jsxs)("div", {
                    className: a()(p().container, _),
                    children: [(0, i.jsx)(c.Clickable, {
                        className: a()(p().closeButton, (t = {}, E(t, p().closeButtonBold, o === r.BOLD), E(t, p().closeButtonSolid, o === r.SOLID), t)),
                        onClick: n,
                        "aria-label": f.Z.Messages.CLOSE,
                        children: o === r.SOLID ? (0, i.jsx)(s.Z, {
                            width: 24,
                            height: 24,
                            "aria-hidden": !0
                        }) : (0, i.jsx)(l.Z, {
                            width: 18,
                            height: 18,
                            "aria-hidden": !0
                        })
                    }), u.tq ? null : (0, i.jsx)("div", {
                        className: a()(p().keybind),
                        "aria-hidden": !0,
                        children: d
                    })]
                })
            };
            _.defaultProps = {
                variant: r.DEFAULT
            };
            _.Variants = r;
            const O = _
        },
        153686: (e, t, n) => {
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
        525628: (e, t, n) => {
            n.d(t, {
                WZ: () => r,
                OE: () => i,
                ZP: () => o
            });
            var r = (0, n(260561).B)({
                    kind: "user",
                    id: "2023-08_collectiblesnitroavatardecoiap",
                    label: "Collectible Nitro Avatar Decorations IAP",
                    defaultConfig: {
                        canUseCollectiblesIAP: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Collectibles IAP",
                        config: {
                            canUseCollectiblesIAP: !0
                        }
                    }]
                }),
                i = function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    return r.useExperiment({
                        location: "b697b5_1"
                    }, {
                        autoTrackExposure: e
                    })
                };
            const o = i
        },
        87931: (e, t, n) => {
            n.d(t, {
                Z: () => r
            });
            const r = n(517586).Z
        },
        255875: (e, t, n) => {
            n.d(t, {
                E: () => p,
                h: () => E
            });
            var r = n(785893),
                i = n(667294),
                o = n(652411),
                a = n(318715),
                u = n(316878),
                c = n(2590);

            function l(e, t, n) {
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
                        l(e, t, n[t])
                    }))
                }
                return e
            }

            function f(e, t) {
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
            var d = {
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
                        return c.dG4
                    },
                    removeClickListener: c.dG4
                },
                p = i.createContext(d);

            function E(e) {
                var t = e.children,
                    n = e.confettiCanvas,
                    c = e.spriteCanvas,
                    l = e.baseConfig,
                    E = e.addClickListener,
                    _ = e.removeClickListener,
                    O = (0, o.uR)(n, c),
                    m = (0, a.ZP)([u.Z], (function() {
                        return u.Z.useReducedMotion
                    })),
                    y = i.useMemo((function() {
                        return m ? d : {
                            confettiCanvas: n,
                            cannon: O,
                            createConfetti: function(e, t) {
                                return O.createConfetti(s({}, l, e), t)
                            },
                            createConfettiAt: function(e, t, n, r) {
                                return O.createConfetti(s(f(s({}, l), {
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
                                return O.createMultipleConfetti(s({}, l, e), t, n)
                            },
                            createMultipleConfettiAt: function(e, t, n) {
                                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                                    i = arguments.length > 4 ? arguments[4] : void 0;
                                return O.createMultipleConfetti(s(f(s({}, l), {
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
                    }), [E, l, O, n, m, _]);
                return (0, r.jsx)(p.Provider, {
                    value: y,
                    children: t
                })
            }
        },
        398344: (e, t, n) => {
            n.d(t, {
                K: () => _,
                Z: () => b
            });
            var r = n(202351),
                i = n(744564),
                o = n(536392),
                a = n(162308),
                u = n(203600);

            function c(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function l(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
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

            function f(e) {
                f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return f(e)
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

            function p(e, t) {
                return !t || "object" !== O(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function E(e, t) {
                E = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return E(e, t)
            }
            var _, O = function(e) {
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
                    var n, r = f(e);
                    if (t) {
                        var i = f(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return p(this, n)
                }
            }! function(e) {
                e.FILE_UPLOAD = "file_upload";
                e.STICKER_PICKER = "sticker_picker";
                e.EMOJI_PICKER = "emoji_picker";
                e.BOOSTING_FLOW = "boosting_flow"
            }(_ || (_ = {}));
            var y = {
                isPersistentCoachmarkCollapsed: !1,
                hasFlowStartEventBeenEmitted: {},
                canPlayWowMoment: !1,
                isPersistentHelperHidden: !0,
                isFetchingWowMomentMedia: !1,
                wowMomentWumpusMediaUrl: null,
                wowMomentHelperMediaUrl: null,
                navigatedFromHelper: !1,
                tutorialExpirationTime: null
            };

            function I() {
                y = {
                    isPersistentCoachmarkCollapsed: !1,
                    hasFlowStartEventBeenEmitted: {},
                    canPlayWowMoment: !1,
                    isPersistentHelperHidden: !0,
                    isFetchingWowMomentMedia: !1,
                    wowMomentWumpusMediaUrl: null,
                    wowMomentHelperMediaUrl: null,
                    navigatedFromHelper: !1,
                    tutorialExpirationTime: null
                }
            }

            function h() {
                var e = new Date;
                e.setDate(e.getDate() + 14);
                y.tutorialExpirationTime = e.getTime()
            }
            var v, T = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && E(e, t)
                }(n, e);
                var t = m(n);

                function n() {
                    c(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    null != e && (y = e);
                    y.isPersistentHelperHidden = !1;
                    y.canPlayWowMoment = !1;
                    y.isFetchingWowMomentMedia = !1;
                    y.wowMomentWumpusMediaUrl = null;
                    y.wowMomentHelperMediaUrl = null
                };
                r.getState = function() {
                    return y
                };
                r.hasFlowStartEventBeenEmitted = function(e) {
                    null == y.hasFlowStartEventBeenEmitted[e] && (y.hasFlowStartEventBeenEmitted[e] = !1);
                    return y.hasFlowStartEventBeenEmitted[e]
                };
                r.__getLocalVars = function() {
                    return {
                        state: y
                    }
                };
                ! function(e, t, n) {
                    t && l(e.prototype, t);
                    n && l(e, n)
                }(n, [{
                    key: "isPersistentCoachmarkCollapsed",
                    get: function() {
                        return y.isPersistentCoachmarkCollapsed
                    }
                }, {
                    key: "canPlayWowMoment",
                    get: function() {
                        return y.canPlayWowMoment
                    }
                }, {
                    key: "isPersistentHelperHidden",
                    get: function() {
                        return y.isPersistentHelperHidden
                    }
                }, {
                    key: "isFetchingWowMomentMedia",
                    get: function() {
                        return y.isFetchingWowMomentMedia
                    }
                }, {
                    key: "wowMomentWumpusMedia",
                    get: function() {
                        return y.wowMomentWumpusMediaUrl
                    }
                }, {
                    key: "wowMomentHelperMedia",
                    get: function() {
                        return y.wowMomentHelperMediaUrl
                    }
                }, {
                    key: "navigatedFromHelper",
                    get: function() {
                        return y.navigatedFromHelper
                    }
                }, {
                    key: "tutorialExpirationTime",
                    get: function() {
                        return y.tutorialExpirationTime
                    }
                }]);
                return n
            }(r.ZP.PersistedStore);
            T.displayName = "PremiumTutorialStore";
            T.persistKey = "PremiumTutorialStore";
            T.migrations = [function(e) {
                return d(function(e) {
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
                }({}, e), {
                    hasFlowStartEventBeenEmitted: null !== (v = e.hasFlowStartEventBeenEmitted) && void 0 !== v ? v : {}
                })
            }];
            const b = new T(i.Z, {
                PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE: function() {
                    y.isPersistentCoachmarkCollapsed = !y.isPersistentCoachmarkCollapsed
                },
                UPDATE_HAS_FLOW_START_EVENT_BEEN_EMITTED: function(e) {
                    var t = e.event,
                        n = e.value;
                    y.hasFlowStartEventBeenEmitted[t] = n
                },
                LOGOUT: function() {
                    I()
                },
                RESET_PREMIUM_TUTORIAL_STORE: I,
                PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT: function(e) {
                    var t = e.value;
                    y.canPlayWowMoment = t
                },
                PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN: function(e) {
                    var t = e.value;
                    y.isPersistentHelperHidden = t
                },
                PREMIUM_TUTORIAL_IS_FETCHING_WOW_MOMENT_MEDIA: function(e) {
                    var t = e.value;
                    y.isFetchingWowMomentMedia = t
                },
                PREMIUM_TUTORIAL_FETCH_WOW_MOMENT_MEDIA_SUCCESS: function(e) {
                    var t = e.wumpusMedia,
                        n = e.helperMedia;
                    y.wowMomentWumpusMediaUrl = t;
                    y.wowMomentHelperMediaUrl = n;
                    y.isFetchingWowMomentMedia = !1
                },
                PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER: function(e) {
                    var t = e.value;
                    y.navigatedFromHelper = t
                },
                PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: function(e) {
                    var t = e.subscription;
                    a.Z.getCurrentConfig({
                        location: "5f2710_1"
                    }, {
                        autoTrackExposure: !1
                    }).enabled && null != t.items.find((function(e) {
                        return u.UD.has(e.plan_id)
                    })) && h()
                },
                GIFT_CODE_REDEEM_SUCCESS: function(e) {
                    var t = e.entitlement;
                    a.Z.getCurrentConfig({
                        location: "5f2710_2"
                    }, {
                        autoTrackExposure: !1
                    }).enabled && (null == t ? void 0 : t.sku_id) === u.Si.TIER_2 && null == o.Z.getPremiumSubscription(!1) && null == y.tutorialExpirationTime && h()
                }
            })
        },
        156620: (e, t, n) => {
            n.d(t, {
                Z: () => r
            });
            const r = (0, n(260561).B)({
                kind: "user",
                id: "2023-02_nitroduction_experience",
                label: "Nitroduction Experience",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "One month trial users recieve the Nitroduction experience",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        162308: (e, t, n) => {
            n.d(t, {
                Z: () => r
            });
            const r = (0, n(260561).B)({
                kind: "user",
                id: "2023-08_premium_tutorial_for_all",
                label: "Premium Tutorial Experience For All",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "All net new users (exclude trial) receive premium tutorial experience",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        305082: (e, t, n) => {
            n.d(t, {
                dA: () => h,
                z2: () => b,
                eM: () => A
            });
            var r = n(667294),
                i = n(202351),
                o = n(418705),
                a = n(673679),
                u = n(896490),
                c = n(473419),
                l = n(473903),
                s = n(536392),
                f = n(116094),
                d = n(666870),
                p = n(398344),
                E = n(156620),
                _ = n(162308),
                O = n(203600),
                m = 18e5,
                y = function() {
                    var e = (0, i.e7)([s.Z], (function() {
                            return s.Z.getPremiumTypeSubscription()
                        })),
                        t = (0, u.wE)(o.z$.PREMIUM_TUTORIAL_EXPERIENCE);
                    return (0, d.s6)(e) && !t
                },
                I = function() {
                    var e = (0, d._O)(),
                        t = (0, u.wE)(o.z$.PREMIUM_TUTORIAL_EXPERIENCE),
                        n = (0, i.e7)([l.default], (function() {
                            return l.default.getCurrentUser()
                        })),
                        c = (0, f.M5)(n, O.p9.TIER_2),
                        p = (0, i.e7)([s.Z], (function() {
                            return s.Z.hasFetchedPreviousPremiumTypeSubscription()
                        })),
                        E = (0, i.e7)([s.Z], (function() {
                            return s.Z.getPreviousPremiumTypeSubscription()
                        })),
                        _ = !e && c;
                    r.useEffect((function() {
                        !_ || p || t || (0, a.ou)()
                    }), [_, p, t]);
                    return _ && p && null == E && !t
                };

            function h(e) {
                var t, n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    r = y() && n,
                    o = E.Z.useExperiment({
                        location: e
                    }, {
                        autoTrackExposure: r,
                        disable: !r
                    }),
                    a = o.enabled,
                    u = (0, i.e7)([p.Z], (function() {
                        return p.Z.tutorialExpirationTime
                    })),
                    c = (new Date).getTime(),
                    l = null != u && u > c,
                    f = (0, i.e7)([s.Z], (function() {
                        var e, n;
                        return null !== (t = null === (e = s.Z.getPremiumSubscription()) || void 0 === e || null === (n = e.createdAt) || void 0 === n ? void 0 : n.getTime()) && void 0 !== t ? t : 0
                    })),
                    d = c - f < m,
                    O = I() && n,
                    h = _.Z.useExperiment({
                        location: e
                    }, {
                        autoTrackExposure: O && d,
                        disable: !O
                    }).enabled && l;
                return a || h
            }
            var v = function() {
                    var e = s.Z.getPremiumTypeSubscription(),
                        t = (0, u.un)(o.z$.PREMIUM_TUTORIAL_EXPERIENCE);
                    return (0, d.s6)(e) && !t
                },
                T = function() {
                    var e = (0, d.se)(),
                        t = (0, u.un)(o.z$.PREMIUM_TUTORIAL_EXPERIENCE),
                        n = l.default.getCurrentUser(),
                        r = (0,
                            f.M5)(n, O.p9.TIER_2),
                        i = s.Z.hasFetchedPreviousPremiumTypeSubscription(),
                        c = s.Z.getPreviousPremiumTypeSubscription();
                    i || !r || t || (0, a.ou)();
                    return !t && (!e && r && i && null == c)
                },
                b = function(e) {
                    var t, n, r, i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        o = v() && i,
                        a = E.Z.getCurrentConfig({
                            location: e
                        }, {
                            disable: !o,
                            autoTrackExposure: o
                        }),
                        u = a.enabled,
                        c = (new Date).getTime(),
                        l = p.Z.tutorialExpirationTime,
                        f = null != l && l > c,
                        d = null !== (r = null === (t = s.Z.getPremiumSubscription()) || void 0 === t || null === (n = t.createdAt) || void 0 === n ? void 0 : n.getTime()) && void 0 !== r ? r : 0,
                        O = c - d < m,
                        y = T() && i,
                        I = _.Z.getCurrentConfig({
                            location: e
                        }, {
                            disable: !y,
                            autoTrackExposure: y && O
                        }).enabled && f;
                    return u || I
                };
            var g = [];

            function C() {
                return O.N$.filter((function(e) {
                    return (0, u.un)(e)
                }))
            }

            function A() {
                return e = C, t = g, n = h("useMemoizedValueSyncedWithDismissibleContents"), o = (0, i.e7)([c.Z], (function() {
                    var e;
                    return null === (e = c.Z.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents
                })), r.useMemo((function() {
                    return n ? e() : t
                }), [n, t, e, o]);
                var e, t, n, o
            }
        },
        518197: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => h
            });
            var r = n(785893),
                i = (n(667294), n(882723)),
                o = n(591406),
                a = n(567403),
                u = n(682776),
                c = n(107364),
                l = n(709189),
                s = n(652591),
                f = n(82274),
                d = n(808194),
                p = n(227202),
                E = n(713717),
                _ = n(2590),
                O = n(203600),
                m = n(473708),
                y = n(458463),
                I = n.n(y);

            function h(e) {
                var t, n, y = e.channel,
                    h = e.transitionState,
                    v = e.onClose,
                    T = a.Z.getGuild(y.guild_id),
                    b = null !== (t = null == T ? void 0 : T.maxStageVideoChannelUsers) && void 0 !== t ? t : 0,
                    g = E.AI.getCurrentConfig({
                        guildId: y.guild_id,
                        location: "cf0105_1"
                    }, {
                        autoTrackExposure: !0
                    }).enabled,
                    C = m.Z.Messages.STAGE_FULL_TITLE,
                    A = g ? b < _.TU7 : (null == T ? void 0 : T.premiumTier) !== _.Eu4.TIER_3 && b <= _.eez,
                    S = u.Z.can(p.yP, y);
                n = g && (null == T ? void 0 : T.premiumTier) === _.Eu4.TIER_3 ? b <= _.TU7 ? m.Z.Messages.STAGE_FULL_BOOST_MORE_BODY : m.Z.Messages.STAGE_FULL_MAX_BODY : A ? m.Z.Messages.STAGE_FULL_BODY : m.Z.Messages.STAGE_FULL_MAX_BODY;
                var R = function() {
                        v();
                        s.default.track(_.rMx.BOOSTING_UPSELL_CLICKED, {
                            guild_id: y.guild_id,
                            type: O.cd.VIDEO_STAGE_LIMIT,
                            is_moderator: S,
                            action: O.T7.DISMISS
                        })
                    },
                    P = f.Z.getMutableParticipants(y.id, d.pV.SPEAKER).filter((function(e) {
                        return e.type === d.Ui.VOICE
                    })).length,
                    L = f.Z.getParticipantCount(y.id, d.pV.AUDIENCE);
                s.default.track(_.rMx.BOOSTING_UPSELL_VIEWED, {
                    guild_id: y.guild_id,
                    type: O.cd.VIDEO_STAGE_LIMIT,
                    is_moderator: S,
                    listener_count: P + L
                });
                return (0, r.jsxs)(i.ModalRoot, {
                    size: i.ModalSize.SMALL,
                    transitionState: h,
                    "aria-label": C,
                    children: [(0, r.jsxs)(i.ModalHeader, {
                        justify: c.Z.Justify.END,
                        separator: !1,
                        className: I().header,
                        children: [(0, r.jsx)("div", {
                            className: I().fullArt
                        }), (0, r.jsx)(i.ModalCloseButton, {
                            onClick: v
                        })]
                    }), (0, r.jsxs)(i.ModalContent, {
                        className: I().content,
                        children: [(0, r.jsx)(i.Heading, {
                            variant: "heading-xl/bold",
                            children: C
                        }), (0, r.jsx)(i.Text, {
                            variant: "text-md/medium",
                            children: n
                        })]
                    }), (0, r.jsx)(i.ModalFooter, {
                        className: I().footer,
                        children: A ? (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(i.Button, {
                                look: i.ButtonLooks.LINK,
                                className: I().noThanksButton,
                                color: i.ButtonColors.CUSTOM,
                                size: i.ButtonSizes.SMALL,
                                onClick: R,
                                children: m.Z.Messages.NO_THANKS
                            }), (0,
                                r.jsx)(l.C, {
                                onClick: function() {
                                    v();
                                    (0, o.f)({
                                        guildId: y.guild_id,
                                        location: {
                                            section: _.jXE.STAGE_VIDEO_LIMIT
                                        }
                                    });
                                    s.default.track(_.rMx.BOOSTING_UPSELL_CLICKED, {
                                        guild_id: y.guild_id,
                                        type: O.cd.VIDEO_STAGE_LIMIT,
                                        is_moderator: S,
                                        action: O.T7.BOOST
                                    })
                                },
                                size: i.ButtonSizes.SMALL,
                                className: I().boostButton,
                                children: m.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION
                            })]
                        }) : (0, r.jsx)(i.Button, {
                            onClick: R,
                            size: i.ButtonSizes.SMALL,
                            color: i.ButtonColors.CUSTOM,
                            className: I().boostButton,
                            children: m.Z.Messages.GOT_IT
                        })
                    })]
                })
            }
        },
        205294: (e, t, n) => {
            n.d(t, {
                Z: () => l
            });
            var r = n(169376);

            function i(e) {
                i = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return i(e)
            }

            function o(e, t) {
                return !t || "object" !== u(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function a(e, t) {
                a = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return a(e, t)
            }
            var u = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function c(e) {
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
                    var n, r = i(e);
                    if (t) {
                        var a = i(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return o(this, n)
                }
            }
            const l = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && a(e, t)
                }(n, e);
                var t = c(n);

                function n(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var r;
                    (r = t.call(this)).id = e.id;
                    r.subscriptionId = e.subscriptionId;
                    r.premiumGuildSubscription = e.premiumGuildSubscription;
                    r.canceled = e.canceled;
                    r.cooldownEndsAt = e.cooldownEndsAt;
                    r.subscription = e.subscription;
                    return r
                }
                var r = n.prototype;
                r.isOnCooldown = function() {
                    return null != this.cooldownEndsAt && new Date(this.cooldownEndsAt).getTime() >= Date.now()
                };
                r.isAvailable = function() {
                    return null == this.premiumGuildSubscription && !this.isOnCooldown()
                };
                n.createFromServer = function(e, t) {
                    return new n({
                        id: e.id,
                        subscriptionId: e.subscription_id,
                        premiumGuildSubscription: null != e.premium_guild_subscription ? {
                            id: e.premium_guild_subscription.id,
                            guildId: e.premium_guild_subscription.guild_id
                        } : null,
                        canceled: e.canceled,
                        cooldownEndsAt: e.cooldown_ends_at,
                        subscription: t
                    })
                };
                return n
            }(r.Z)
        },
        50433: (e, t, n) => {
            n.d(t, {
                Z: () => O
            });
            var r = n(202351),
                i = n(744564);

            function o(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function u(e) {
                u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return u(e)
            }

            function c(e, t) {
                return !t || "object" !== f(t) && "function" != typeof t ? function(e) {
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

            function s(e) {
                return function(e) {
                    if (Array.isArray(e)) return o(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return o(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var f = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function d(e) {
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
                    var n, r = u(e);
                    if (t) {
                        var i = u(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return c(this, n)
                }
            }
            var p = [];

            function E() {
                p = []
            }
            var _ = function(e) {
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
                var t = d(n);

                function n() {
                    a(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.hasLayers = function() {
                    return p.length > 0
                };
                r.getLayers = function() {
                    return p
                };
                r.__getLocalVars = function() {
                    return {
                        layers: p
                    }
                };
                return n
            }(r.ZP.Store);
            _.displayName = "LayerStore";
            const O = new _(i.Z, {
                LAYER_PUSH: function(e) {
                    var t = e.component;
                    if (p.indexOf(t) >= 0) return !1;
                    p = s(p).concat([t])
                },
                LAYER_POP: function() {
                    if (0 === p.length) return !1;
                    p = p.slice(0, -1)
                },
                LAYER_POP_ALL: E,
                LOGOUT: E,
                NOTIFICATION_CLICK: E
            })
        },
        127661: (e, t, n) => {
            n.d(t, {
                Z: () => c
            });
            var r = n(785893),
                i = (n(667294), n(633878));

            function o(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function a(e, t) {
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

            function u(e, t) {
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

            function c(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    c = e.height,
                    l = void 0 === c ? 24 : c,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    d = e.foreground,
                    p = e.backgroundColor,
                    E = u(e, ["width", "height", "color", "foreground", "backgroundColor"]);
                return (0, r.jsxs)("svg", a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            o(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(E)), {
                    width: n,
                    height: l,
                    viewBox: "0 0 14 14",
                    children: [null != p ? (0, r.jsx)("circle", {
                        r: 5,
                        cx: 7,
                        cy: 7,
                        fill: p
                    }) : null, (0, r.jsx)("path", {
                        fill: f,
                        className: d,
                        d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                    })]
                }))
            }
        },
        963881: (e, t, n) => {
            n.d(t, {
                Z: () => c
            });
            var r = n(785893),
                i = (n(667294), n(633878));

            function o(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function a(e, t) {
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

            function u(e, t) {
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

            function c(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    c = e.height,
                    l = void 0 === c ? 24 : c,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    d = e.foreground,
                    p = u(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            o(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(p)), {
                    width: n,
                    height: l,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, r.jsx)("path", {
                            className: d,
                            fill: f,
                            d: "M10.59 13.41c.41.39.41 1.03 0 1.42-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0 5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.982 2.982 0 0 0 0-4.24 2.982 2.982 0 0 0-4.24 0l-3.53 3.53a2.982 2.982 0 0 0 0 4.24zm2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0 5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.982 2.982 0 0 0 0 4.24 2.982 2.982 0 0 0 4.24 0l3.53-3.53a2.982 2.982 0 0 0 0-4.24.973.973 0 0 1 0-1.42z"
                        }), (0, r.jsx)("rect", {
                            width: "24",
                            height: "24"
                        })]
                    })
                }))
            }
        },
        933850: (e, t, n) => {
            n.d(t, {
                Z: () => c
            });
            var r = n(785893),
                i = (n(667294), n(633878));

            function o(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function a(e, t) {
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

            function u(e, t) {
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

            function c(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    c = e.height,
                    l = void 0 === c ? 24 : c,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    d = e.foreground,
                    p = u(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            o(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(p)), {
                    width: n,
                    height: l,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: f,
                        className: d,
                        d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
                    })
                }))
            }
        },
        235606: (e, t, n) => {
            n.d(t, {
                Z: () => i
            });
            var r = n(785893);
            n(667294);

            function i(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    i = e.height,
                    o = void 0 === i ? 24 : i,
                    a = e.color,
                    u = void 0 === a ? "currentColor" : a,
                    c = e.className,
                    l = e.foreground;
                return (0, r.jsx)("svg", {
                    className: c,
                    width: n,
                    height: o,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, r.jsx)("path", {
                        className: l,
                        fill: u,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M2 4.5C2 3.397 2.897 2.5 4 2.5H20C21.103 2.5 22 3.397 22 4.5V15.5C22 16.604 21.103 17.5 20 17.5H13V19.5H17V21.5H7V19.5H11V17.5H4C2.897 17.5 2 16.604 2 15.5V4.5ZM13.2 14.3375V11.6C9.864 11.6 7.668 12.6625 6 15C6.672 11.6625 8.532 8.3375 13.2 7.6625V5L18 9.6625L13.2 14.3375Z"
                    })
                })
            }
        },
        796938: (e, t, n) => {
            n.d(t, {
                Z: () => c
            });
            var r = n(785893),
                i = (n(667294), n(633878));

            function o(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function a(e, t) {
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

            function u(e, t) {
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

            function c(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    c = e.height,
                    l = void 0 === c ? 24 : c,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    d = e.foreground,
                    p = u(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            o(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(p)), {
                    width: n,
                    height: l,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: d,
                        fill: f,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                        "aria-hidden": !0
                    })
                }))
            }
        },
        516909: (e, t, n) => {
            n.d(t, {
                Z: () => c
            });
            var r = n(785893),
                i = (n(667294), n(633878));

            function o(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function a(e, t) {
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

            function u(e, t) {
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

            function c(e) {
                var t = e.width,
                    n = void 0 === t ? 32 : t,
                    c = e.height,
                    l = void 0 === c ? 32 : c,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    d = u(e, ["width", "height", "color"]);
                return (0, r.jsx)("svg", a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            o(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(d)), {
                    width: n,
                    height: l,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                        fill: f
                    })
                }))
            }
        },
        585798: (e, t, n) => {
            n.d(t, {
                Ox: () => S,
                QP: () => b,
                q4: () => R,
                ob: () => P
            });
            var r = n(785893),
                i = n(667294),
                o = n(873955),
                a = n.n(o),
                u = n(494537),
                c = n(588983),
                l = n(38736),
                s = n(142643),
                f = n(882723),
                d = n(241166),
                p = n(421281),
                E = n(329543),
                _ = n(664868),
                O = n.n(_);

            function m(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function y(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
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

            function h(e) {
                return function(e) {
                    if (Array.isArray(e)) return m(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return m(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return m(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var v, T = (0, p.Mg)(s.Z.FULL_SCREEN_LAYER_ANIMATION_DURATION);
            ! function(e) {
                e[e.ENTERING = 1] = "ENTERING";
                e[e.ENTERED = 2] = "ENTERED";
                e[e.EXITING = 3] = "EXITING";
                e[e.EXITED = 4] = "EXITED"
            }(v || (v = {}));
            var b = (0, l.Z)((function(e) {
                return {
                    fullScreenLayers: [],
                    addLayer: function(t) {
                        return e((function(e) {
                            return {
                                fullScreenLayers: h(e.fullScreenLayers).concat([t])
                            }
                        }))
                    }
                }
            }));

            function g(e) {
                var t = e.item,
                    n = i.useRef(null);
                (0, f.useFocusLock)(n);
                i.useEffect((function() {
                    d.Z.disable();
                    d.Z.enableTemp((e = t.key, {
                        POP_LAYER: {
                            binds: ["esc"],
                            comboKeysBindGlobal: !0,
                            action: function() {
                                P(e)
                            }
                        }
                    }));
                    var e;
                    return function() {
                        d.Z.disableTemp()
                    }
                }), [t.key]);
                return (0, r.jsx)(t.LayerComponent, {
                    children: (0, r.jsxs)("div", {
                        className: O().root,
                        ref: n,
                        children: [(0, r.jsx)("div", {
                            className: O().drag
                        }), t.render({
                            transitionState: null != t ? t.transitionState : v.EXITING,
                            closeLayer: function() {
                                return P(t.key)
                            }
                        })]
                    })
                })
            }
            var C = {
                    enter: O().enter,
                    enterActive: O().enterActive,
                    enterDone: O().enterDone,
                    exit: O().exit,
                    exitActive: O().exitActive,
                    exitDone: O().exitDone
                },
                A = {
                    enter: O().enterReducedMotion,
                    enterActive: O().enterActiveReducedMotion,
                    enterDone: O().enterDoneReducedMotion,
                    exit: O().exitReducedMotion,
                    exitActive: O().exitActiveReducedMotion,
                    exitDone: O().exitDoneReducedMotion
                };

            function S() {
                var e = i.useContext(f.AccessibilityPreferencesContext).reducedMotion.enabled ? A : C,
                    t = b((function(e) {
                        return e.fullScreenLayers
                    }));
                return (0, r.jsx)(u.Z, {
                    children: t.map((function(n) {
                        return (0, r.jsx)(c.Z, {
                            classNames: e,
                            timeout: T,
                            onEntered: function() {
                                b.setState({
                                    fullScreenLayers: t.map((function(e) {
                                        return e.key === n.key ? I(function(e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var n = null != arguments[t] ? arguments[t] : {},
                                                    r = Object.keys(n);
                                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                                }))));
                                                r.forEach((function(t) {
                                                    y(e, t, n[t])
                                                }))
                                            }
                                            return e
                                        }({}, e), {
                                            transitionState: v.ENTERED
                                        }) : e
                                    }))
                                })
                            },
                            unmountOnExit: !0,
                            children: (0, r.jsx)(g, {
                                item: n
                            })
                        }, n.key)
                    }))
                })
            }

            function R(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
                    n = t.layerKey,
                    r = t.Layer,
                    i = null != n ? n : a()();
                b.setState((function(t) {
                    return {
                        fullScreenLayers: h(t.fullScreenLayers).concat([{
                            key: i,
                            transitionState: v.ENTERING,
                            LayerComponent: null != r ? r : E.ZP,
                            render: e
                        }])
                    }
                }));
                return i
            }

            function P(e) {
                b.setState((function(t) {
                    return {
                        fullScreenLayers: t.fullScreenLayers.filter((function(t) {
                            return t.key !== e
                        }))
                    }
                }))
            }
        },
        531441: (e, t, n) => {
            n.d(t, {
                Dv: () => p,
                OV: () => _,
                NG: () => O,
                mA: () => m,
                IG: () => y,
                lB: () => I,
                G2: () => h,
                fW: () => v
            });
            var r = n(785893),
                i = (n(667294), n(294184)),
                o = n.n(i),
                a = (n(882723), n(87931)),
                u = (n(473708), n(202427)),
                c = n.n(u);

            function l(e, t, n) {
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
                        l(e, t, n[t])
                    }))
                }
                return e
            }

            function f(e, t) {
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

            function d(e, t) {
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
                ROUND: c().baseShapeRound,
                ROUND_LEFT: c().baseShapeRoundLeft,
                ROUND_RIGHT: c().baseShapeRoundRight,
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

            function O(e) {
                return e < 1e3 ? "".concat(e) : "".concat(Math.min(Math.floor(e / 1e3), 9), "k+")
            }
            var m = function(e) {
                    var t = e.count,
                        n = e.color,
                        i = void 0 === n ? a.Z.STATUS_DANGER : n,
                        u = e.disableColor,
                        l = void 0 !== u && u,
                        m = e.shape,
                        y = void 0 === m ? p.ROUND : m,
                        I = e.className,
                        h = e.style,
                        v = d(e, ["count", "color", "disableColor", "shape", "className", "style"]);
                    return (0, r.jsx)("div", f(s({
                        className: o()(I, c().numberBadge, y),
                        style: s({
                            backgroundColor: l ? void 0 : i,
                            width: _(t),
                            paddingRight: E(t)
                        }, h)
                    }, v), {
                        children: O(t)
                    }))
                },
                y = function(e) {
                    var t = e.text,
                        n = e.className,
                        i = e.color,
                        u = void 0 === i ? a.Z.STATUS_DANGER : i,
                        l = e.shape,
                        E = void 0 === l ? p.ROUND : l,
                        _ = e.disableColor,
                        O = void 0 !== _ && _,
                        m = e.style,
                        y = d(e, ["text", "className", "color", "shape", "disableColor", "style"]);
                    return (0, r.jsx)("div", f(s({
                        className: o()(n, c().textBadge, E),
                        style: s({
                            backgroundColor: O ? void 0 : u
                        }, m)
                    }, y), {
                        children: t
                    }))
                },
                I = function(e) {
                    var t = e.text,
                        n = e.className,
                        i = d(e, ["text", "className"]);
                    return (0, r.jsx)(y, s({
                        className: o()(c().premiumBadge, n),
                        text: t
                    }, i))
                },
                h = function(e) {
                    var t = e.icon,
                        n = e.className,
                        i = e.color,
                        u = void 0 === i ? a.Z.STATUS_DANGER : i,
                        l = e.shape,
                        f = void 0 === l ? p.ROUND : l,
                        d = e.disableColor,
                        E = void 0 !== d && d,
                        _ = e.style;
                    return (0, r.jsx)("div", {
                        className: o()(n, c().iconBadge, f),
                        style: s({
                            backgroundColor: E ? void 0 : u
                        }, _),
                        children: (0, r.jsx)(t, {
                            className: c().icon
                        })
                    })
                },
                v = function(e) {
                    var t = e.className,
                        n = e.color,
                        i = void 0 === n ? a.Z.INTERACTIVE_ACTIVE : n,
                        u = e.shape,
                        l = void 0 === u ? p.ROUND : u,
                        f = e.disableColor,
                        E = void 0 !== f && f,
                        _ = e.style,
                        O = d(e, ["className", "color", "shape", "disableColor", "style"]);
                    return (0,
                        r.jsx)("div", s({
                        className: o()(t, c().circleBadge, l),
                        style: s({
                            backgroundColor: E ? void 0 : i
                        }, _)
                    }, O))
                }
        },
        990554: (e, t, n) => {
            n.d(t, {
                l: () => i
            });
            var r = n(421281);

            function i(e, t) {
                for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++) i[o - 2] = arguments[o];
                var a = i.reduce((function(e, t) {
                        return e + (0, r.De)(t)
                    }), ""),
                    u = "".concat(t).concat(a),
                    c = e[u];
                if (null != c) return c;
                0
            }
        },
        989824: (e, t, n) => {
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