"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [25171, 38479, 72935], {
        652411: (e, t, n) => {
            n.d(t, {
                O_: () => m,
                qA: () => f,
                Ji: () => A,
                uR: () => x
            });
            var r = n(667294),
                o = n(468811),
                i = n(294184),
                c = n.n(i);

            function a(e, t) {
                var n = e.x,
                    r = e.y;
                return n > t.x && n < t.x + t.width && r > t.y && r < t.y + t.height
            }

            function l(e, t) {
                return e * t * t * (t > 0 ? -1 : 1)
            }
            var u = function() {
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
                            o = r.x,
                            i = r.y;
                        this.velocity.update(n), this.velocity.x += o, this.velocity.y += i, this.position.update(n), this.position.x += this.velocity.x * n, this.position.y += this.velocity.y * n, this.size.update(n), this.opacity.update(n), this._lastUpdatedAt = t
                    }, e.prototype.previewPositionUpdate = function(e, t) {
                        var n = t / 100,
                            r = this.velocity.previewUpdate(n),
                            o = this.getNewForces(e, n),
                            i = o.x,
                            c = o.y;
                        r.x += i, r.y += c;
                        var a = this.position.previewUpdate(n);
                        return a.x += r.x * n, a.y += r.y * n, a
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
                p = function(e, t) {
                    return p = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    }, p(e, t)
                };

            function d(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function n() {
                    this.constructor = e
                }
                p(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }
            var O = function() {
                return O = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }, O.apply(this, arguments)
            };
            var _ = function(e) {
                    this.value = e
                },
                E = function() {
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
                h = function(e) {
                    function t(t, n, r) {
                        var o = e.call(this, t, n) || this;
                        return o._z = r, o
                    }
                    return d(t, e), t.prototype.update = function(t) {
                        e.prototype.update.call(this, t), this._z.update(t)
                    }, t.prototype.previewUpdate = function(t) {
                        var n = e.prototype.previewUpdate.call(this, t);
                        return O(O({}, n), {
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
                }(E),
                y = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return d(t, e), t.prototype.update = function() {}, t.prototype.previewUpdate = function() {
                        return this.value
                    }, t
                }(_),
                I = function(e) {
                    function t(t, n) {
                        var r = e.call(this, t) || this;
                        return r.addValue = n, r
                    }
                    return d(t, e), t.prototype.update = function(e) {
                        this.value = this.previewUpdate(e)
                    }, t.prototype.previewUpdate = function(e) {
                        return this.value + this.addValue * e
                    }, t
                }(_),
                v = function(e) {
                    function t(t, n, r, o, i, c) {
                        var a = e.call(this, t) || this;
                        a.min = n, a.max = r, a.duration = o;
                        var l = a.value / (a.max - a.min) * a.duration,
                            u = isNaN(l) ? 0 : l;
                        return a.timePassed = u < 0 ? a.duration - u : u, a.directionMultiplier = i, a.easingFunction = c, a
                    }
                    return d(t, e), t.prototype.update = function(e) {
                        var t = this.doUpdate(e),
                            n = t[0],
                            r = t[1],
                            o = t[2];
                        this.value = n, this.directionMultiplier = o, this.timePassed = r
                    }, t.prototype.previewUpdate = function(e) {
                        return this.doUpdate(e)[0]
                    }, t.prototype.doUpdate = function(e) {
                        var t = this.max - this.min,
                            n = this.timePassed + e * this.directionMultiplier,
                            r = Math.min(Math.max(n, 0), this.duration),
                            o = n < 0 || n > this.duration ? -1 * this.directionMultiplier : this.directionMultiplier,
                            i = this.easingFunction(r, this.min, t, this.duration);
                        return [isNaN(i) ? 0 : i, r, o]
                    }, t
                }(_);

            function b(e, t) {
                return e === t ? e : Math.random() * (t - e + 1) + e
            }

            function g(e) {
                var t = Math.floor(b(0, e.length - 1));
                return [e[t], t]
            }

            function R(e, t) {
                return g([e, t])[0]
            }

            function P(e) {
                return "number" == typeof e ? {
                    x: e,
                    y: e
                } : e
            }

            function T(e) {
                return "number" == typeof e ? {
                    x: e,
                    y: e,
                    z: e
                } : e
            }

            function w(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            return new y(e.value);
                        case "static-random":
                            return new y(b(e.minValue, e.maxValue));
                        case "linear":
                            return new I(e.value, e.addValue);
                        case "linear-random":
                            return new I(b(e.minValue, e.maxValue), b(e.minAddValue, e.maxAddValue));
                        case "oscillating":
                            return new v(e.value, e.start, e.final, e.duration, e.direction, e.easingFunction);
                        case "oscillating-random":
                            return new v(b(e.minValue, e.maxValue), b(e.minStart, e.maxStart), b(e.minFinal, e.maxFinal), b(e.minDuration, e.maxDuration), R(e.minDirection, e.maxDirection), g(e.easingFunctions)[0])
                    }
                }(O(O({}, e), {
                    valueType: "number"
                }))
            }

            function C(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            var t = P(e.value);
                            return new E(new y(t.x), new y(t.y));
                        case "static-random":
                            var n = P(e.minValue),
                                r = P(e.maxValue);
                            return new E(new y(b(n.x, r.x)), new y(b(n.y, r.y)));
                        case "linear":
                            t = P(e.value);
                            var o = P(e.addValue);
                            return new E(new I(t.x, o.x), new I(t.y, o.y));
                        case "linear-random":
                            n = P(e.minValue), r = P(e.maxValue);
                            var i = P(e.minAddValue),
                                c = P(e.maxAddValue);
                            return new E(new I(b(n.x, r.x), b(i.x, c.x)), new I(b(n.y, r.y), b(i.x, c.x)));
                        case "oscillating":
                            t = P(e.value);
                            var a = P(e.start),
                                l = P(e.final),
                                u = P(e.duration),
                                s = P(e.direction);
                            return new E(new v(t.x, a.x, l.x, u.x, s.x, e.easingFunction), new v(t.y, a.y, l.y, u.x, s.y, e.easingFunction));
                        case "oscillating-random":
                            n = P(e.minValue), r = P(e.maxValue);
                            var f = P(e.minStart),
                                p = P(e.maxStart),
                                d = P(e.minFinal),
                                O = P(e.maxFinal),
                                _ = P(e.minDuration),
                                h = P(e.maxDuration),
                                T = P(e.minDirection),
                                w = P(e.maxDirection);
                            return new E(new v(b(n.x, r.x), b(f.x, p.x), b(d.x, O.x), b(_.x, h.x), R(T.x, w.x), g(e.easingFunctions)[0]), new v(b(n.y, r.y), b(f.y, p.y), b(d.y, O.y), b(_.y, h.y), R(T.y, w.y), g(e.easingFunctions)[0]))
                    }
                }(O(O({}, e), {
                    valueType: "Vector2"
                }))
            }

            function S(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            var t = T(e.value);
                            return new h(new y(t.x), new y(t.y), new y(t.z));
                        case "static-random":
                            var n = T(e.minValue),
                                r = T(e.maxValue);
                            return new h(new y(b(n.x, r.x)), new y(b(n.y, r.y)), new y(b(n.z, r.z)));
                        case "linear":
                            t = T(e.value);
                            var o = T(e.addValue);
                            return new h(new I(t.x, o.x), new I(t.y, o.y), new I(t.z, o.z));
                        case "linear-random":
                            n = T(e.minValue), r = T(e.maxValue);
                            var i = T(e.minAddValue),
                                c = T(e.maxAddValue);
                            return new h(new I(b(n.x, r.x), b(i.x, c.x)), new I(b(n.y, r.y), b(i.y, c.y)), new I(b(n.z, r.z), b(i.z, c.z)));
                        case "oscillating":
                            t = T(e.value);
                            var a = T(e.start),
                                l = T(e.final),
                                u = T(e.duration),
                                s = T(e.direction);
                            return new h(new v(t.x, a.x, l.x, u.x, s.x, e.easingFunction), new v(t.y, a.y, l.y, u.z, s.y, e.easingFunction), new v(t.z, a.z, l.z, u.z, s.z, e.easingFunction));
                        case "oscillating-random":
                            n = T(e.minValue), r = T(e.maxValue);
                            var f = T(e.minStart),
                                p = T(e.maxStart),
                                d = T(e.minFinal),
                                O = T(e.maxFinal),
                                _ = T(e.minDuration),
                                E = T(e.maxDuration),
                                P = T(e.minDirection),
                                w = T(e.maxDirection);
                            return new h(new v(b(n.x, r.x), b(f.x, p.x), b(d.x, O.x), b(_.x, E.x), R(P.x, w.x), g(e.easingFunctions)[0]), new v(b(n.y, r.y), b(f.y, p.y), b(d.y, O.y), b(_.y, E.y), R(P.y, w.y), g(e.easingFunctions)[0]), new v(b(n.z, r.z), b(f.z, p.z), b(d.z, O.z), b(_.z, E.z), R(P.z, w.z), g(e.easingFunctions)[0]))
                    }
                }(O(O({}, e), {
                    valueType: "Vector3"
                }))
            }

            function N(e, t, n, r, o) {
                var i = function(e, t) {
                        return O(O({
                            id: t
                        }, s), e)
                    }(t, e),
                    c = C(i.size),
                    a = function(e, t) {
                        if (null != e) {
                            var n = t.sprites.findIndex((function(t) {
                                return n = t, "string" == typeof(r = e) ? n.src === r && n.colorize : n.src === r.src && n.colorize === r.colorize;
                                var n, r
                            }));
                            if (-1 !== n) return [e, n]
                        }
                        return g(t.sprites)
                    }(r, n),
                    l = a[0],
                    f = a[1],
                    p = function(e, t, n) {
                        if (! function(e) {
                                return "string" == typeof e || e.colorize
                            }(e)) return 0;
                        var r = null != t ? n.colors.findIndex((function(e) {
                            return e === t
                        })) : -1;
                        return -1 !== r ? r : Math.floor(b(0, n.colors.length - 1))
                    }(null != r ? r : l, o, n);
                return new u({
                    id: e,
                    position: C(i.position),
                    velocity: C(i.velocity),
                    rotation: S(i.rotation),
                    dragCoefficient: C(i.dragCoefficient),
                    size: c,
                    opacity: w(i.opacity),
                    spriteX: p * n.spriteWidth + 2 * p,
                    spriteY: f * n.spriteHeight + 2 * f,
                    spriteWidth: n.spriteWidth,
                    spriteHeight: n.spriteHeight
                })
            }
            var m = r.forwardRef((function(e, t) {
                var i = e.className,
                    c = e.environment,
                    l = e.onClick,
                    u = e.onMouseDown,
                    s = e.onMouseMove,
                    f = e.onMouseUp,
                    p = e.onBeforeRender,
                    d = e.onAfterRender,
                    _ = function(e, t) {
                        var n = {};
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var o = 0;
                            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
                        }
                        return n
                    }(e, ["className", "environment", "onClick", "onMouseDown", "onMouseMove", "onMouseUp", "onBeforeRender", "onAfterRender"]),
                    E = r.useRef(null),
                    h = r.useRef(new Map),
                    y = r.useRef(null),
                    I = r.useRef(0),
                    v = r.useRef(0),
                    b = r.useCallback((function() {
                        var e = E.current;
                        if (null != e) {
                            var t = e.getContext("2d");
                            if (null != t) {
                                t.clearRect(0, 0, e.width, e.height), null == p || p(t), h.current.forEach((function(n, r) {
                                    var o = n.confetti,
                                        i = n.spriteCanvas;
                                    o.update(c), o.draw(i, t), o.shouldDestroy(e, c) && h.current.delete(r)
                                })), null == d || d(t), h.current.size > 0 ? y.current = window.requestAnimationFrame(b) : (t.clearRect(0, 0, e.width, e.height), y.current = null);
                                var n = Date.now();
                                0 !== I.current && (v.current = 1e3 / (n - I.current)), I.current = n
                            }
                        }
                    }), [c, d, p]);
                r.useEffect((function() {
                    null != y.current && (window.cancelAnimationFrame(y.current), y.current = window.requestAnimationFrame(b))
                }), [b]);
                var g = r.useCallback((function(e, t) {
                        h.current.set(e.id, {
                            confetti: e,
                            spriteCanvas: t
                        }), null == y.current && b()
                    }), [b]),
                    R = r.useCallback((function(e, t, n, r, i) {
                        var c, a = N(null !== (c = e.id) && void 0 !== c ? c : (0, o.v4)(), e, n, r, i);
                        return g(a, t), a
                    }), [g]),
                    P = r.useCallback((function(e) {
                        h.current.delete(e)
                    }), []),
                    T = r.useCallback((function() {
                        return h.current.clear()
                    }), []),
                    w = r.useCallback((function() {
                        return E.current
                    }), []);
                r.useImperativeHandle(t, (function() {
                    return {
                        createConfetti: R,
                        addConfetti: g,
                        deleteConfetti: P,
                        clearConfetti: T,
                        getCanvas: w
                    }
                }), [R, g, P, T, w]);
                var C = r.useCallback((function(e, t) {
                        var n, r, o = t.clickHandler,
                            i = t.mouseHandler;
                        if (null != o || null != i) {
                            var l = null === (n = E.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                            if (null != l) {
                                var u = function(e, t) {
                                    if (null == t) throw new Error("element should not be null");
                                    var n = t.getBoundingClientRect();
                                    return {
                                        x: e.clientX - n.left,
                                        y: e.clientY - n.top
                                    }
                                }(e, E.current);
                                if (a(u, {
                                        x: l.left,
                                        y: l.top,
                                        width: l.width,
                                        height: l.height
                                    })) {
                                    if (null != i) return i(e);
                                    if (null != o) {
                                        var s = -1e3 / v.current * 2,
                                            f = function(e, t) {
                                                for (var n = 0, r = Array.from(e.values()); n < r.length; n++) {
                                                    var o = r[n];
                                                    if (null != o && t(o)) return o
                                                }
                                                return null
                                            }(h.current, (function(e) {
                                                var t = e.confetti,
                                                    n = t.previewPositionUpdate(c, s);
                                                return a(u, {
                                                    x: n.x - t.width / 2,
                                                    y: n.y - t.height / 2,
                                                    width: t.width,
                                                    height: t.height
                                                })
                                            }));
                                        o(e, null !== (r = null == f ? void 0 : f.confetti) && void 0 !== r ? r : null)
                                    }
                                }
                            }
                        }
                    }), [c]),
                    S = r.useCallback((function(e) {
                        return C(e, {
                            clickHandler: l
                        })
                    }), [C, l]),
                    m = r.useCallback((function(e) {
                        return C(e, {
                            clickHandler: u
                        })
                    }), [C, u]),
                    A = r.useCallback((function(e) {
                        return C(e, {
                            mouseHandler: s
                        })
                    }), [C, s]),
                    x = r.useCallback((function(e) {
                        return C(e, {
                            mouseHandler: f
                        })
                    }), [C, f]);
                return r.useEffect((function() {
                    var e = function(e, t, n) {
                        null != n && window.addEventListener(e, t)
                    };
                    return e("click", S, l), e("mousedown", m, u), e("mousemove", A, s), e("mouseup", x, f),
                        function() {
                            window.removeEventListener("click", S), window.removeEventListener("mousedown", m), window.removeEventListener("mousemove", A), window.removeEventListener("mouseup", A)
                        }
                }), [S, m, A, x, l, u, s, f]), r.useEffect((function() {
                    var e = E.current,
                        t = new ResizeObserver((function() {
                            ! function(e) {
                                if (null != e) {
                                    var t = e.getBoundingClientRect(),
                                        r = t.width,
                                        o = t.height;
                                    e.width = r * n.g.devicePixelRatio, e.height = o * n.g.devicePixelRatio
                                }
                            }(E.current)
                        }));
                    return null != e && t.observe(e),
                        function() {
                            null != e && t.unobserve(e)
                        }
                }), []), r.createElement("canvas", O({}, _, {
                    className: i,
                    ref: E
                }))
            }));
            ! function(e, t) {
                void 0 === t && (t = {});
                var n = t.insertAt;
                if ("undefined" != typeof document) {
                    var r = document.head || document.getElementsByTagName("head")[0],
                        o = document.createElement("style");
                    o.type = "text/css",
                        "top" === n && r.firstChild ? r.insertBefore(o, r.firstChild) : r.appendChild(o), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e))
                }
            }(".SpriteCanvas-module_spriteCanvasHidden__ndzQV {\n  display: none;\n  position: absolute;\n  width: 0;\n  height: 0;\n  left: -100%;\n}\n");
            var A = r.forwardRef((function(e, t) {
                var n, i = e.className,
                    a = e.visible,
                    l = void 0 !== a && a,
                    u = e.sprites,
                    s = e.colors,
                    f = e.spriteWidth,
                    p = e.spriteHeight,
                    d = r.useRef(null),
                    O = r.useRef([]),
                    _ = r.useRef(!1),
                    E = r.useRef({});
                r.useImperativeHandle(t, (function() {
                    return {
                        getCanvas: function() {
                            return d.current
                        },
                        getCreateData: function() {
                            return {
                                sprites: O.current,
                                colors: s,
                                spriteWidth: f,
                                spriteHeight: p
                            }
                        },
                        addReadyListener: function(e) {
                            var t = (0, o.v4)();
                            return E.current[t] = e, t
                        },
                        removeReadyListener: function(e) {
                            delete E.current[e]
                        },
                        isReady: _.current
                    }
                }), [s, p, f]);
                var h = r.useCallback((function() {
                        var e = d.current,
                            t = null == e ? void 0 : e.getContext("2d", {
                                willReadFrequently: !0
                            });
                        null != t && null != e && (t.clearRect(0, 0, e.width, e.height),
                            O.current.forEach((function(e, n) {
                                var r = function(r, o) {
                                    var i = f * o + 2 * o,
                                        c = p * n + 2 * n;
                                    if (t.drawImage(e.image, i, c, f, p), null != r) {
                                        for (var a = t.getImageData(i, c, f, p), l = function(e) {
                                                "#" === e[0] && (e = e.slice(1));
                                                var t = parseInt(e, 16);
                                                return {
                                                    r: t >> 16 & 255,
                                                    g: t >> 8 & 255,
                                                    b: 255 & t
                                                }
                                            }(r), u = 0; u < a.data.length; u += 4) a.data[u] = l.r, a.data[u + 1] = l.g, a.data[u + 2] = l.b;
                                        t.putImageData(a, i, c)
                                    }
                                };
                                e.colorize ? s.forEach((function(e, t) {
                                    return r(e, t)
                                })) : r(null, 0)
                            })))
                    }), [s, p, f]),
                    y = r.useCallback((function() {
                        var e = u.map((function(e) {
                            var t = new Image,
                                n = "string" == typeof e ? e : e.src,
                                r = "string" == typeof e || e.colorize;
                            t.src = n;
                            var o = new Promise((function(e) {
                                t.onload = e
                            }));
                            return {
                                colorize: r,
                                image: t,
                                src: n,
                                loadPromise: o
                            }
                        }));
                        return Promise.all(e.map((function(e) {
                            return e.loadPromise
                        }))).then((function() {
                            O.current = e.map((function(e) {
                                return {
                                    colorize: e.colorize,
                                    image: e.image,
                                    src: e.src
                                }
                            }))
                        }))
                    }), [u]),
                    I = r.useCallback((function(e) {
                        for (var t in E.current) E.current[t](e)
                    }), []),
                    v = r.useCallback((function() {
                        return function(e, t, n, r) {
                            return new(n || (n = Promise))((function(o, i) {
                                function c(e) {
                                    try {
                                        l(r.next(e))
                                    } catch (e) {
                                        i(e)
                                    }
                                }

                                function a(e) {
                                    try {
                                        l(r.throw(e))
                                    } catch (e) {
                                        i(e)
                                    }
                                }

                                function l(e) {
                                    var t;
                                    e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                        e(t)
                                    }))).then(c, a)
                                }
                                l((r = r.apply(e, t || [])).next())
                            }))
                        }(void 0, void 0, void 0, (function() {
                            return function(e, t) {
                                var n, r, o, i, c = {
                                    label: 0,
                                    sent: function() {
                                        if (1 & o[0]) throw o[1];
                                        return o[1]
                                    },
                                    trys: [],
                                    ops: []
                                };
                                return i = {
                                    next: a(0),
                                    throw: a(1),
                                    return: a(2)
                                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                                    return this
                                }), i;

                                function a(a) {
                                    return function(l) {
                                        return function(a) {
                                            if (n) throw new TypeError("Generator is already executing.");
                                            for (; i && (i = 0, a[0] && (c = 0)), c;) try {
                                                if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                                switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                                    case 0:
                                                    case 1:
                                                        o = a;
                                                        break;
                                                    case 4:
                                                        return c.label++, {
                                                            value: a[1],
                                                            done: !1
                                                        };
                                                    case 5:
                                                        c.label++, r = a[1], a = [0];
                                                        continue;
                                                    case 7:
                                                        a = c.ops.pop(), c.trys.pop();
                                                        continue;
                                                    default:
                                                        if (!(o = c.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                                            c = 0;
                                                            continue
                                                        }
                                                        if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                            c.label = a[1];
                                                            break
                                                        }
                                                        if (6 === a[0] && c.label < o[1]) {
                                                            c.label = o[1], o = a;
                                                            break
                                                        }
                                                        if (o && c.label < o[2]) {
                                                            c.label = o[2], c.ops.push(a);
                                                            break
                                                        }
                                                        o[2] && c.ops.pop(), c.trys.pop();
                                                        continue
                                                }
                                                a = t.call(e, c)
                                            } catch (e) {
                                                a = [6, e], r = 0
                                            } finally {
                                                n = o = 0
                                            }
                                            if (5 & a[0]) throw a[1];
                                            return {
                                                value: a[0] ? a[1] : void 0,
                                                done: !0
                                            }
                                        }([a, l])
                                    }
                                }
                            }(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, y()];
                                    case 1:
                                        return e.sent(), h(), _.current = !0, I(!0), [2]
                                }
                            }))
                        }))
                    }), [I, y, h]);
                return r.useEffect((function() {
                    v()
                }), [v]), r.useEffect((function() {
                    return function() {
                        return I(!1)
                    }
                }), [I]), r.useEffect((function() {
                    null != d.current && (d.current.width = (f + 2) * Math.max(s.length, 1), d.current.height = (p + 2) * u.length)
                }), [s.length, p, f, u.length]), r.createElement("canvas", {
                    ref: d,
                    className: c()(i, (n = {}, n["SpriteCanvas-module_spriteCanvasHidden__ndzQV"] = !l, n))
                })
            }));

            function x(e, t) {
                var n, o = r.useState(null !== (n = null == t ? void 0 : t.isReady) && void 0 !== n && n),
                    i = o[0],
                    c = o[1];
                r.useEffect((function() {
                    var e = null == t ? void 0 : t.addReadyListener(c);
                    return function() {
                        null != e && (null == t || t.removeReadyListener(e))
                    }
                }), [t]);
                var a = r.useCallback((function(n, r) {
                        var o = void 0 === r ? {} : r,
                            i = o.sprite,
                            c = o.color,
                            a = null == t ? void 0 : t.getCreateData(),
                            l = null == t ? void 0 : t.getCanvas();
                        if (null != l && null != a && 0 !== a.sprites.length) return null == e ? void 0 : e.createConfetti(n, l, a, i, c)
                    }), [e, t]),
                    l = r.useCallback((function(e, t, n) {
                        for (var r = [], o = 0; o < t; o++) {
                            var i = a(e, n);
                            i && r.push(i)
                        }
                        return r
                    }), [a]),
                    u = r.useCallback((function(n) {
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
                        createConfetti: a,
                        createMultipleConfetti: l,
                        addConfetti: u,
                        clearConfetti: f,
                        deleteConfetti: s,
                        isReady: i && null != t && null != e
                    }
                }), [u, f, e, a, l, s, i, t])
            }
        },
        620745: (e, t, n) => {
            var r = n(973935);
            t.s = r.createRoot;
            r.hydrateRoot
        },
        72831: (e, t, n) => {
            n.d(t, {
                Z: () => E
            });
            var r, o = n(785893),
                i = (n(667294), n(294184)),
                c = n.n(i),
                a = n(289283),
                l = n(882723),
                u = n(155349),
                s = n(559968),
                f = n(473708),
                p = n(545107),
                d = n.n(p);

            function O(e, t, n) {
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
                    i = e.variant,
                    p = e.keybind,
                    _ = e.className;
                return (0, o.jsxs)("div", {
                    className: c()(d().container, _),
                    children: [(0, o.jsx)(l.Clickable, {
                        className: c()(d().closeButton, (t = {}, O(t, d().closeButtonBold, i === r.BOLD), O(t, d().closeButtonSolid, i === r.SOLID), t)),
                        onClick: n,
                        "aria-label": f.Z.Messages.CLOSE,
                        children: i === r.SOLID ? (0, o.jsx)(s.Z, {
                            width: 24,
                            height: 24,
                            "aria-hidden": !0
                        }) : (0, o.jsx)(u.Z, {
                            width: 18,
                            height: 18,
                            "aria-hidden": !0
                        })
                    }), a.tq ? null : (0, o.jsx)("div", {
                        className: c()(d().keybind),
                        "aria-hidden": !0,
                        children: p
                    })]
                })
            };
            _.defaultProps = {
                variant: r.DEFAULT
            };
            _.Variants = r;
            const E = _
        },
        661299: (e, t, n) => {
            n.d(t, {
                Z: () => p
            });
            var r = n(785893),
                o = (n(667294),
                    n(294184)),
                i = n.n(o),
                c = n(468811),
                a = n.n(c),
                l = n(305484),
                u = n.n(l);

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var f = a().v4();
            const p = function(e) {
                var t, n = e.open,
                    o = e.className,
                    c = e.withHighlight,
                    a = void 0 !== c && c;
                return (0, r.jsxs)("svg", {
                    width: "18",
                    height: "18",
                    className: i()(u().button, o, (t = {}, s(t, u().open, n), s(t, u().withHighlight, a), t)),
                    children: [a && (0, r.jsx)("defs", {
                        children: (0, r.jsxs)("linearGradient", {
                            id: f,
                            x1: "0",
                            y1: "0",
                            x2: "0",
                            y2: "18",
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, r.jsx)("stop", {
                                offset: "0",
                                stopColor: "#B473F5"
                            }), (0, r.jsx)("stop", {
                                offset: "1",
                                stopColor: "#E292AA"
                            })]
                        })
                    }), (0, r.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, r.jsx)("path", {
                            d: "M0 0h18v18H0"
                        }), (0, r.jsx)("path", {
                            stroke: a ? "url(#".concat(f, ")") : "currentColor",
                            d: "M4.5 4.5l9 9",
                            strokeLinecap: "round"
                        }), (0, r.jsx)("path", {
                            stroke: a ? "url(#".concat(f, ")") : "currentColor",
                            d: "M13.5 4.5l-9 9",
                            strokeLinecap: "round"
                        })]
                    })]
                })
            }
        },
        361290: (e, t, n) => {
            n.d(t, {
                t: () => u
            });
            var r = n(785893),
                o = (n(667294), n(795308)),
                i = n(633878);

            function c(e, t, n) {
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

            function l(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            var u = function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    u = e.height,
                    s = void 0 === u ? 24 : u,
                    f = e.color,
                    p = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    d = e.colorClass,
                    O = void 0 === d ? "" : d,
                    _ = l(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsxs)("svg", a(function(e) {
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
                }({}, (0, i.Z)(_)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("g", {
                        clipPath: "url(#a)",
                        children: (0, r.jsx)("path", {
                            fill: "string" == typeof p ? p : p.css,
                            d: "m2.392 8.39 8.389-6.452a2 2 0 0 1 2.438 0l8.389 6.453c1.345 1.035.871 3.17-.786 3.537L20.5 12l-.82 8.2a2 2 0 0 1-1.99 1.8H16a1 1 0 0 1-1-1v-5a3 3 0 0 0-6 0v5a1 1 0 0 1-1 1H6.31a2 2 0 0 1-1.99-1.8L3.5 12l-.322-.072c-1.657-.368-2.131-2.502-.786-3.537Z",
                            className: O
                        })
                    }), (0, r.jsx)("defs", {
                        children: (0, r.jsx)("clipPath", {
                            id: "a",
                            children: (0, r.jsx)("path", {
                                fill: "#fff",
                                d: "M0 0h24v24H0z"
                            })
                        })
                    })]
                }))
            }
        },
        43338: (e, t, n) => {
            n.d(t, {
                X: () => u
            });
            var r = n(785893),
                o = (n(667294), n(795308)),
                i = n(633878);

            function c(e, t, n) {
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

            function l(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            var u = function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    u = e.height,
                    s = void 0 === u ? 24 : u,
                    f = e.color,
                    p = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    d = e.colorClass,
                    O = void 0 === d ? "" : d,
                    _ = l(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", a(function(e) {
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
                }({}, (0, i.Z)(_)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm13.35 8.133 3.5 4.667a.75.75 0 0 1-.6 1.2H5.81a.75.75 0 0 1-.585-1.218l1.854-2.318a1.5 1.5 0 0 1 2.342 0l.506.633 2.223-2.964a2 2 0 0 1 3.2 0Zm-5.146-7.156c.229-.91-.88-1.55-1.555-.898a.934.934 0 0 1-1.298 0c-.675-.653-1.784-.013-1.556.898a.934.934 0 0 1-.649 1.125c-.903.258-.903 1.538 0 1.796a.934.934 0 0 1 .65 1.125c-.229.91.88 1.55 1.555.898a.934.934 0 0 1 1.298 0c.675.653 1.784.013 1.556-.898a.934.934 0 0 1 .649-1.125c.903-.258.903-1.538 0-1.796a.934.934 0 0 1-.65-1.125Z",
                        clipRule: "evenodd",
                        className: O
                    })
                }))
            }
        },
        147751: (e, t, n) => {
            n.d(t, {
                q: () => u
            });
            var r = n(785893),
                o = (n(667294), n(795308)),
                i = n(633878);

            function c(e, t, n) {
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

            function l(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            var u = function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    u = e.height,
                    s = void 0 === u ? 24 : u,
                    f = e.color,
                    p = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    d = e.colorClass,
                    O = void 0 === d ? "" : d,
                    _ = l(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", a(function(e) {
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
                }({}, (0, i.Z)(_)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6Z",
                        clipRule: "evenodd",
                        className: O
                    })
                }))
            }
        },
        142643: (e, t, n) => {
            n.d(t, {
                Z: () => o
            });
            var r;
            ! function(e) {
                e.CHANNEL_CHAT_RESIZABLE_SIDEBAR_RESIZE_HANDLE_WIDTH = "8px";
                e.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE = "485px";
                e.ACTIVITIES_HOME_WHATS_NEW_TILE_WIDTH = "224px";
                e.ACTIVITIES_HOME_WHATS_NEW_HORIZONTAL_MARGIN = "10px";
                e.ACTIVITIES_HOME_HAPPENING_NOW_CARD_WIDTH = "305px";
                e.ACTIVITIES_HOME_HAPPENING_NOW_GAP = "16px";
                e.ACTIVITY_BOOKMARK_EMBED_IMAGE_WIDTH = "356px";
                e.FOLDER_ITEM_ANIMATION_DURATION = "150ms";
                e.FOLDER_ITEM_GUILD_ICON_SIZE = "48px";
                e.GUILD_TOOLTIP_ICON_SIZE = "20px";
                e.GUILD_TOOLTIP_ICON_SIZE_V_2 = "16px";
                e.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING = "2px";
                e.FULL_SCREEN_LAYER_ANIMATION_DURATION = "150ms";
                e.GUILD_SETTINGS_PREMIUM_TIER_STATUS_PROGRESS_WITH_SUBSCRIPTIONS_MARGIN_TOP = "7px";
                e.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_DIMENSIONS = "76px";
                e.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_PADDING = "2px";
                e.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_MARGIN = "0";
                e.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING = "8px";
                e.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE = "32px";
                e.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN = "8px";
                e.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE = "24px";
                e.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE = "1px";
                e.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL = "12px";
                e.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL = "360px";
                e.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM = "446px";
                e.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP = "0";
                e.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS = "8px";
                e.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT = "0";
                e.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM = "0";
                e.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT = "8px";
                e.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT = "30px";
                e.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS = "96px";
                e.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL = "80px";
                e.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING = "2px";
                e.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN = "12px";
                e.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT = "54px";
                e.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT = "32px";
                e.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_PRIMARY_DIMENSIONS = "28px";
                e.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_SECONDARY_DIMENSIONS = "32px";
                e.STICKERS_CONSTANTS_STICKER_DIMENSION = "160px";
                e.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN_SMALL = "4px";
                e.ASPECT_STABLE_IMAGE_CONTAINER_PADDING = "20px";
                e.USER_PROFILE_THEMED_CONTAINER_USER_PROFILE_THEMED_PADDING = "4px";
                e.USER_PROFILE_THEMED_CONTAINER_USER_POPOUT_WIDTH = "340px";
                e.USER_PROFILE_THEMED_CONTAINER_PROFILE_EFFECTS_USER_POPOUT_WIDTH = "280px";
                e.USER_BANNER_PREMIUM_BANNER_HEIGHT_POPOUT = "120px";
                e.USER_BANNER_PREMIUM_BANNER_HEIGHT_NO_BANNER_IMAGE_POPOUT = "90px";
                e.USER_BANNER_BANNER_HEIGHT_POPOUT = "60px";
                e.USER_BANNER_PREMIUM_BANNER_HEIGHT_PROFILE = "212px";
                e.USER_BANNER_BANNER_HEIGHT_PROFILE = "106px";
                e.USER_BANNER_BANNER_HEIGHT_POMELO = "64px";
                e.USER_BANNER_PREMIUM_BANNER_HEIGHT_SETTINGS = "100px";
                e.USER_BANNER_BANNER_HEIGHT_PANEL = "120px";
                e.USER_BANNER_CANCEL_MODAL_HEIGHT = "42px";
                e.PREMIUM_GUILD_PROGRESS_BAR_PROGRESS_BAR_WIDTH = "24px";
                e.PREMIUM_GUILD_PROGRESS_BAR_TIER_MARKER_SIZE = "16px";
                e.ACTIVITY_SHELF_MODAL_MODAL_PADDING = "80px";
                e.ACTIVITY_SHELF_MODAL_MODAL_WIDTH = "496px";
                e.ACTIVITY_SHELF_MODAL_MODAL_MIN_WIDTH = "496px";
                e.ACTIVITY_SHELF_MODAL_MODAL_MAX_WIDTH = "1024px";
                e.ACTIVITY_SHELF_MODAL_MODAL_MAX_HEIGHT = "720px";
                e.ACTIVITY_SHELF_MODAL_MODAL_ART_HEIGHT = "64px";
                e.ACTIVITY_SHELF_ITEM_ACTIVITY_ITEM_HEIGHT = "230px";
                e.ACTIVITY_SHELF_ITEM_LARGE_ACTIVITY_ITEM_HEIGHT = "143px";
                e.ACTIVITY_SHELF_SLIDE_ACTIVITY_DIRECTORY_SHELF_GRID_GAP = "16px";
                e.LIVE_INDICATOR_BORDER_RADIUS = "16px";
                e.GUILD_PRODUCT_DOWNLOAD_MODAL_HEADER_IMAGE_WIDTH = "119px";
                e.FOLDER_ITEM_GUILD_ICON_MARGIN = "8px";
                e.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_LARGE = "288px";
                e.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_SMALL = "225px";
                e.EMBEDDED_APPLICATION_INVITE_CONTENT_WIDTH = "576px";
                e.GUILD_ROLE_SUBSCRIPTION_CARD_BASIC_INFO_TIER_IMAGE_SIZE = "80px";
                e.GUILD_ROLE_SUBSCRIPTION_CARD_BASIC_INFO_TIER_IMAGE_SIZE_MOBILE = "48px";
                e.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH = "1024px";
                e.GUILD_COUNT_SMALL_ICON_SIZE = "16px";
                e.GUILD_COUNT_LARGE_ICON_SIZE = "20px";
                e.GUILD_BOOSTING_SIDEBAR_DISPLAY_CONDITIONAL_BOTTOM_MARGIN = "12px";
                e.USER_PREMIUM_GUILD_SUBSCRIPTION_EASTER_EGG_SIZE = "196px";
                e.APPLICATION_SUBSCRIPTION_CARD_LISTING_IMAGE_SIZE = "40px";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL = "4px";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT = "8px";
                e.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE = "32px";
                e.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL = "8px";
                e.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE = "24px";
                e.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL = "2px";
                e.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING = "4px";
                e.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE = "1px";
                e.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL = "12px";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL = "4px";
                e.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE = "24px";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP = "0";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT = "0";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM = "8px";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP = "8px";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM = "12px";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_PREMIUM_UPSELL_HEIGHT = "54px";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_PREMIUM_UPSELL_MARGIN_TOP = "16px";
                e.VOICE_WIDGET_TOP_MARGIN = "var(--custom-widget-bar-height) + calc(2 * var(--custom-widget-bar-padding))";
                e.EXPRESSION_SUGGESTIONS_CONTAINER_PADDING = "8px";
                e.EXPRESSION_SUGGESTIONS_STICKER_SUGGESTION_SIZE = "48px";
                e.EXPRESSION_SUGGESTIONS_STICKER_SUGGESTION_MARGIN = "8px";
                e.COLLECTION_GALLERY_MEDIA_BREAKPOINT = "1024px";
                e.COLLECTION_GALLERY_COLUMN_CARD_HEIGHT = "600px";
                e.COLLECTION_GALLERY_ROW_CARD_HEIGHT = "283px";
                e.COLLECTION_LIST_CARD_GAP = "16px";
                e.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_OVERVIEW_SETTINGS_MAX_WIDTH = "520px";
                e.IMPORT_BENEFITS_MODAL_ROLE_ICON_SIZE = "40px";
                e.ROLE_ICON_UPLOADER_ICON_SIZE = "24px";
                e.GRADIENT_PROGRESS_NOTCH_WIDTH = "8px";
                e.GAME_LIST_ROW_MIN_HEIGHT = "62px";
                e.GAME_LIST_LINKED_TO_GLOW_DURATION = "2000ms";
                e.INTERACTION_IFRAME_MODAL_MODAL_MIN_WIDTH = "320px";
                e.INTERACTION_IFRAME_MODAL_MODAL_MAX_WIDTH = "1280px";
                e.INTERACTION_IFRAME_MODAL_MODAL_MARGIN = "80px";
                e.INTERACTION_IFRAME_MODAL_MODAL_HEADER_HEIGHT = "52px";
                e.APPLICATION_DIRECTORY_PROFILE_ICON_SIZE = "122px"
            }(r || (r = {}));
            const o = r
        },
        525628: (e, t, n) => {
            n.d(t, {
                WZ: () => r,
                OE: () => o,
                ZP: () => i
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
                o = function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    return r.useExperiment({
                        location: "b697b5_1"
                    }, {
                        autoTrackExposure: e
                    })
                };
            const i = o
        },
        255875: (e, t, n) => {
            n.d(t, {
                E: () => d,
                h: () => O
            });
            var r = n(785893),
                o = n(667294),
                i = n(652411),
                c = n(318715),
                a = n(316878),
                l = n(2590);

            function u(e, t, n) {
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
                        u(e, t, n[t])
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
            var p = {
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
                d = o.createContext(p);

            function O(e) {
                var t = e.children,
                    n = e.confettiCanvas,
                    l = e.spriteCanvas,
                    u = e.baseConfig,
                    O = e.addClickListener,
                    _ = e.removeClickListener,
                    E = (0, i.uR)(n, l),
                    h = (0, c.ZP)([a.Z], (function() {
                        return a.Z.useReducedMotion
                    })),
                    y = o.useMemo((function() {
                        return h ? p : {
                            confettiCanvas: n,
                            cannon: E,
                            createConfetti: function(e, t) {
                                return E.createConfetti(s({}, u, e), t)
                            },
                            createConfettiAt: function(e, t, n, r) {
                                return E.createConfetti(s(f(s({}, u), {
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
                                return E.createMultipleConfetti(s({}, u, e), t, n)
                            },
                            createMultipleConfettiAt: function(e, t, n) {
                                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                                    o = arguments.length > 4 ? arguments[4] : void 0;
                                return E.createMultipleConfetti(s(f(s({}, u), {
                                    position: {
                                        type: "static",
                                        value: {
                                            x: e,
                                            y: t
                                        }
                                    }
                                }), n), r, o)
                            },
                            addClickListener: O,
                            removeClickListener: _
                        }
                    }), [O, u, E, n, h, _]);
                return (0, r.jsx)(d.Provider, {
                    value: y,
                    children: t
                })
            }
        },
        275086: (e, t, n) => {
            n.d(t, {
                c: () => E
            });
            var r = n(785893),
                o = (n(667294), n(882723)),
                i = n(661299),
                c = n(393299),
                a = n(930865),
                l = n(596801),
                u = n(733274),
                s = n(2590),
                f = n(473708),
                p = n(206322),
                d = n.n(p);

            function O(e) {
                var t = e.guild,
                    n = e.banner;
                return (0, r.jsx)("div", {
                    className: d().guildBanner,
                    style: {
                        backgroundImage: "url(".concat(n)
                    },
                    children: (0, r.jsxs)("div", {
                        className: d().guildHeader,
                        children: [(0, r.jsx)(c.Z, {
                            guild: t,
                            isBannerVisible: !0
                        }), (0, r.jsx)(o.Heading, {
                            className: d().guildName,
                            variant: "heading-md/semibold",
                            children: t.toString()
                        }), (0, r.jsx)(i.Z, {
                            className: d().dropdown,
                            open: !1
                        })]
                    })
                })
            }

            function _(e, t) {
                var n = (0, a.nW)(e);
                return t ? f.Z.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_ANIMATED.format({
                    targetLevelOrPlan: n
                }) : f.Z.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_STATIC.format({
                    targetLevelOrPlan: n
                })
            }

            function E(e) {
                var t = e.analyticsLocations,
                    n = e.analyticsLocation,
                    o = e.guild,
                    i = e.isGIF,
                    c = e.banner,
                    p = i ? (0, a._p)(s.oNc.ANIMATED_BANNER) : (0, a._p)(s.oNc.BANNER);
                null != p && (0, l.Z)({
                    analyticsLocations: t,
                    analyticsSourceLocation: n,
                    guild: o,
                    headerProps: {
                        title: f.Z.Messages.GUILD_BANNER_UPSELL_MODAL_TITLE,
                        subtitle: _(p, i),
                        image: (0, r.jsx)(O, {
                            guild: o,
                            banner: c
                        })
                    },
                    perkIntro: f.Z.Messages.GUILD_BANNER_UPSELL_MODAL_PERK_INTRO,
                    perks: i ? (0, u.zC)() : (0, u.XO)()
                })
            }
        },
        393299: (e, t, n) => {
            n.d(t, {
                Z: () => j
            });
            var r, o = n(785893),
                i = (n(667294), n(294184)),
                c = n.n(i),
                a = n(202351),
                l = n(882723),
                u = n(491379),
                s = n(591406),
                f = n(859917),
                p = n(784648),
                d = n(2590),
                O = n(476997),
                _ = n.n(O);

            function E(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var h, y = (E(r = {}, d.Eu4.NONE, _().iconBackgroundTierNone),
                    E(r, d.Eu4.TIER_1, _().iconBackgroundTierOne), E(r, d.Eu4.TIER_2, _().iconBackgroundTierTwo), E(r, d.Eu4.TIER_3, _().iconBackgroundTierThree), r),
                I = (E(h = {}, d.Eu4.NONE, _().iconTierNone), E(h, d.Eu4.TIER_1, _().iconTierOne), E(h, d.Eu4.TIER_2, _().iconTierTwo), E(h, d.Eu4.TIER_3, _().iconTierThree), h);

            function v(e) {
                var t = e.premiumTier,
                    n = e.iconBackgroundClassName,
                    r = e.iconClassName,
                    i = e.size;
                return (0, o.jsx)(f.Z, {
                    className: c()(n, y[t]),
                    size: i,
                    children: (0, o.jsx)(p.Z, {
                        tier: t,
                        className: c()(r, _().boostedGuildIconGem, I[t])
                    })
                })
            }
            var b = n(21372),
                g = n(473903),
                R = n(206986),
                P = n(521723),
                T = n(930865),
                w = n(473708),
                C = n(36373),
                S = n.n(C);

            function N(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function m(e, t) {
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

            function A(e) {
                var t = e.guild,
                    n = e.isBannerVisible,
                    r = e.disableBoostClick,
                    i = (0, a.e7)([g.default, b.ZP], (function() {
                        var e = g.default.getCurrentUser();
                        return b.ZP.isMember(t.id, null == e ? void 0 : e.id)
                    })),
                    c = t.premiumTier,
                    u = t.premiumSubscriberCount;
                if (0 === u && c === d.Eu4.NONE) return null;
                var f = function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        i && !r && (0, s.f)({
                            guildId: t.id,
                            location: {
                                section: d.jXE.GUILD_HEADER,
                                object: d.qAy.BOOST_GEM_ICON
                            }
                        })
                    },
                    p = c === d.Eu4.NONE ? w.Z.Messages.PREMIUM_GUILD_HEADER_BADGE_NO_TIER : T.nW(c),
                    O = (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("div", {
                            className: S().tierTooltipTitle,
                            children: p
                        }), (0, o.jsx)("div", {
                            children: w.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_SUBSCRIBER_COUNT_TOOLTIP.format({
                                subscriberCount: u
                            })
                        })]
                    });
                return (0, o.jsx)("div", {
                    className: S().guildIconContainer,
                    children: (0,
                        o.jsx)(l.Tooltip, {
                        text: O,
                        position: "bottom",
                        "aria-label": null != p ? p : "",
                        children: function(e) {
                            return (0, o.jsx)(l.Clickable, m(function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                    }))));
                                    r.forEach((function(t) {
                                        N(e, t, n[t])
                                    }))
                                }
                                return e
                            }({}, e), {
                                className: S().premiumGuildIcon,
                                onClick: f,
                                children: (0, o.jsx)(v, {
                                    premiumTier: c,
                                    iconBackgroundClassName: n ? S().boostedGuildTierIconBackgroundWithVisibleBanner : null,
                                    iconClassName: n && c !== d.Eu4.TIER_3 ? S().boostedGuildTierMutedIconWithVisibleBanner : null
                                })
                            }))
                        }
                    })
                })
            }

            function x(e) {
                var t = e.guild,
                    n = e.disableColor,
                    r = e.disableBoostClick;
                return (0, u.Z)(t) ? (0, o.jsx)("div", {
                    className: S().guildIconV2Container,
                    children: (0, o.jsx)(P.Z, {
                        guild: t,
                        tooltipPosition: "bottom",
                        tooltipColor: l.Tooltip.Colors.PRIMARY,
                        className: c()(S().guildBadge, N({}, S().disableColor, n)),
                        disableBoostClick: r
                    })
                }) : (0, o.jsx)("div", {
                    className: S().guildIconContainer,
                    children: (0, o.jsx)(R.Z, {
                        guild: t,
                        tooltipPosition: "bottom",
                        tooltipColor: l.Tooltip.Colors.PRIMARY,
                        className: c()(S().guildBadge, N({}, S().disableColor, n))
                    })
                })
            }

            function j(e) {
                var t = e.guild,
                    n = e.isBannerVisible,
                    r = e.disableBoostClick;
                return (0, u.Z)(t) ? (0, o.jsx)(x, {
                    guild: t,
                    disableColor: !1,
                    disableBoostClick: r
                }) : t.hasFeature(d.oNc.VERIFIED) || t.hasFeature(d.oNc.PARTNERED) ? (0, o.jsx)(x, {
                    guild: t,
                    disableColor: !n
                }) : (0, o.jsx)(A, {
                    guild: t,
                    isBannerVisible: n,
                    disableBoostClick: r
                })
            }
        },
        311260: (e, t, n) => {
            n.d(t, {
                $p: () => s,
                PT: () => p,
                U$: () => d,
                Es: () => _,
                kH: () => E,
                AK: () => h,
                Ae: () => y
            });
            var r = n(496486),
                o = n(921431);

            function i(e, t, n, r, o, i, c) {
                try {
                    var a = e[i](c),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function c(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var c = e.apply(t, n);

                        function a(e) {
                            i(c, r, o, a, l, "next", e)
                        }

                        function l(e) {
                            i(c, r, o, a, l, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var a = function(e, t) {
                var n, r, o, i, c = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; c;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        c.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        c.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = c.ops.pop();
                                        c.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = c.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            c = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            c.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && c.label < o[1]) {
                                            c.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && c.label < o[2]) {
                                            c.label = o[2];
                                            c.ops.push(i);
                                            break
                                        }
                                        o[2] && c.ops.pop();
                                        c.trys.pop();
                                        continue
                                }
                                i = t.call(e, c)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, a])
                    }
                }
            };

            function l(e) {
                return new Promise((function(t) {
                    var n = new FileReader;
                    n.onload = function(e) {
                        var n, r = null === (n = e.target) || void 0 === n ? void 0 : n.result;
                        t("string" == typeof r ? r : "")
                    };
                    n.readAsDataURL(e)
                }))
            }

            function u(e, t, n, r) {
                var o = e.naturalWidth / e.width,
                    i = t.width / 2,
                    c = t.height / 2,
                    a = (e.width / 2 - i - n.x) * o,
                    l = (e.height / 2 - c - n.y) * o,
                    u = t.width * o,
                    s = t.height * o;
                return {
                    x: a,
                    y: l,
                    scaledCropWidth: u,
                    scaledCropHeight: s,
                    canvasWidth: Math.min(u, r.width),
                    canvasHeight: Math.min(s, r.height)
                }
            }

            function s(e, t, n, r, o) {
                return f.apply(this, arguments)
            }

            function f() {
                return (f = c((function(e, t, r, i, c) {
                    var s, f, p, d, O, _, E, h;
                    return a(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                s = u(t, r, i, c), f = s.x, p = s.y, d = s.scaledCropWidth, O = s.scaledCropHeight;
                                return [4, e.arrayBuffer()];
                            case 1:
                                _ = a.sent();
                                E = new Worker(new URL(n.p + n.u(92827), n.b));
                                h = new Promise((function(e, t) {
                                    E.onmessage = function(n) {
                                        var r = n.data;
                                        if (r.type === o.u.CROP_GIF_COMPLETE) {
                                            e(l(new Blob([r.result])));
                                            E.terminate()
                                        } else if (r.type === o.u.CROP_GIF_ERROR) {
                                            t(new Error("Error cropping GIF"));
                                            E.terminate()
                                        }
                                    }
                                }));
                                E.postMessage({
                                    type: o.u.CROP_GIF_START,
                                    gif: new Uint8Array(_),
                                    x: 0 | f,
                                    y: 0 | p,
                                    width: 0 | d,
                                    height: 0 | O
                                });
                                return [2, {
                                    result: h,
                                    cancelFn: function() {
                                        return E.terminate()
                                    }
                                }]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function p(e, t, n, r) {
                var o = u(e, t, n, r),
                    i = o.x,
                    c = o.y,
                    a = o.scaledCropWidth,
                    l = o.scaledCropHeight,
                    s = o.canvasWidth,
                    f = o.canvasHeight,
                    p = document.createElement("canvas");
                p.width = s;
                p.height = f;
                var d = p.getContext("2d");
                null != d && d.drawImage(e, i, c, a, l, 0, 0, p.width, p.height);
                return p.toDataURL("image/png")
            }

            function d(e, t, n) {
                return {
                    x: (0, r.clamp)(e, n.left, n.right),
                    y: (0, r.clamp)(t, n.bottom, n.top)
                }
            }

            function O(e, t, n, r) {
                var i = n,
                    c = r;
                if (n > o.vJ) {
                    i = o.vJ;
                    c = r * (o.vJ / n)
                }
                return n / r < e ? {
                    width: i,
                    height: c
                } : {
                    width: i * (t / c),
                    height: t
                }
            }

            function _(e, t, n) {
                switch (e) {
                    case o.pC.AVATAR:
                    case o.pC.AVATAR_DECORATION:
                        return {
                            width: t, height: n
                        };
                    case o.pC.BANNER:
                        return O(o.MY, o.qj, t, n);
                    case o.pC.GUILD_BANNER:
                        return O(o.Ij, o.C5, t, n);
                    case o.pC.VIDEO_BACKGROUND:
                        return O(o.Ff, o.PB, t, n);
                    case o.pC.SCHEDULED_EVENT_IMAGE:
                        return O(o.ut, o.WV, t, n);
                    case o.pC.HOME_HEADER:
                        return O(o.sX, o.SW, t, n)
                }
            }

            function E(e, t, n) {
                var r = {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0
                    },
                    o = e - n.width,
                    i = t - n.height;
                if (0 !== o) {
                    r.left = -Math.abs(o / 2);
                    r.right = o / 2
                }
                if (0 !== i) {
                    r.bottom = -Math.abs(i / 2);
                    r.top = i / 2
                }
                return r
            }

            function h(e, t, n, r) {
                switch (e) {
                    case o.pC.AVATAR:
                    case o.pC.AVATAR_DECORATION:
                        var i = Math.min(t, n);
                        return {
                            width: i, height: i
                        };
                    case o.pC.BANNER:
                        var c = Math.min(t, o.vJ);
                        return {
                            width: c, height: c * (1 / o.MY)
                        };
                    case o.pC.GUILD_BANNER:
                        var a = Math.min(t, o.vJ);
                        return {
                            width: a, height: Math.min(a * (9 / 16), r)
                        };
                    case o.pC.VIDEO_BACKGROUND:
                        var l = Math.min(t, o.vJ);
                        return {
                            width: l, height: l * (9 / 16)
                        };
                    case o.pC.SCHEDULED_EVENT_IMAGE:
                        var u = Math.min(t, o.vJ);
                        return {
                            width: u, height: .4 * u
                        };
                    case o.pC.HOME_HEADER:
                        var s = Math.min(t, o.vJ);
                        return {
                            width: s, height: s * (1 / o.sX)
                        }
                }
            }

            function y(e, t, n) {
                var r = e.naturalWidth / e.naturalHeight,
                    o = t,
                    i = n;
                e.naturalWidth > e.naturalHeight ? o /= r : i *= r;
                var c = {
                    height: o,
                    width: i
                };
                return p(e, {
                    width: e.width,
                    height: e.height
                }, {
                    x: 0,
                    y: 0
                }, c)
            }
        },
        338479: (e, t, n) => {
            n.d(t, {
                Z: () => U
            });
            var r = n(785893),
                o = n(667294),
                i = n(202351),
                c = n(882723),
                a = n(19585),
                l = n(275086),
                u = n(596801),
                s = n(567403),
                f = n(464187),
                p = n(217674),
                d = n(2590),
                O = n(733274),
                _ = n(473708),
                E = n(352900),
                h = n.n(E);

            function y(e) {
                var t = e.analyticsSection,
                    n = e.analyticsPage,
                    o = e.isGIF,
                    E = e.banner,
                    y = (0, i.e7)([f.Z], (function() {
                        return f.Z.getGuildId()
                    })),
                    I = (0, i.e7)([s.Z], (function() {
                        return s.Z.getGuild(y)
                    })),
                    v = (0, a.Z)().analyticsLocations;
                if (null == I || I.hasFeature(d.oNc.ANIMATED_BANNER) || !o && I.hasFeature(d.oNc.BANNER)) return null;
                return (0, r.jsxs)("div", {
                    className: h().container,
                    children: [(0, r.jsx)(p.Z, {
                        className: h().guildBoostingIcon
                    }), (0, r.jsx)(c.Text, {
                        color: "header-primary",
                        variant: "text-sm/semibold",
                        children: _.Z.Messages.PREMIUM_GUILD_PREVIEW
                    }), (0, r.jsx)(c.Button, {
                        look: c.Button.Looks.LINK,
                        color: c.Button.Colors.LINK,
                        className: h().subscribeButton,
                        onClick: function() {
                            if (null != I) {
                                var e = {
                                    section: t,
                                    page: n,
                                    object: d.qAy.UPSELL_HEADER
                                };
                                null != E ? (0, l.c)({
                                    analyticsLocations: v,
                                    analyticsLocation: e,
                                    guild: I,
                                    isGIF: o,
                                    banner: E
                                }) : (0, u.Z)({
                                    analyticsLocations: v,
                                    analyticsSourceLocation: e,
                                    guild: I,
                                    perks: o ? (0, O.zC)() : (0, O.XO)()
                                })
                            }
                        },
                        children: _.Z.Messages.PREMIUM_GUILD_BOOST_SERVER
                    })]
                })
            }
            var I = n(153686),
                v = n(294184),
                b = n.n(v),
                g = n(366007),
                R = n(406493),
                P = n(98265),
                T = n(41717),
                w = n.n(T);

            function C(e) {
                var t = e.text,
                    n = e.textSize,
                    o = void 0 === n ? P.Z.Sizes.SIZE_12 : n,
                    i = e.textColor,
                    c = void 0 === i ? P.Z.Colors.STANDARD : i,
                    a = e.className,
                    l = e.button,
                    u = e.reducedRightPadding,
                    s = void 0 !== u && u;
                return (0, r.jsxs)("div", {
                    className: b()(s ? w().noticeWithoutRightPadding : w().noticeWithRightPadding, a),
                    children: [(0, r.jsxs)("div", {
                        className: w().noticeLeft,
                        children: [(0, r.jsx)(R.Z, {
                            className: w().icon,
                            color: g.JX.PREMIUM_TIER_2
                        }), (0, r.jsx)(P.Z, {
                            className: w().text,
                            size: o,
                            color: c,
                            children: t
                        })]
                    }), l]
                })
            }
            var S = n(455706),
                N = n(473903),
                m = n(652591),
                A = n(116094),
                x = n(921431),
                j = n(203600),
                M = n(917567),
                D = n.n(M);

            function L(e) {
                var t = e.analyticsSection,
                    n = e.type,
                    l = (0, i.e7)([N.default], (function() {
                        return N.default.getCurrentUser()
                    })),
                    u = A.ZP.canUseAnimatedAvatar(l),
                    s = A.ZP.canUsePremiumProfileCustomization(l),
                    f = n === x.pC.BANNER && s || n === x.pC.AVATAR && u,
                    p = (0, a.Z)(I.Z.PREMIUM_PREVIEW_UPSELL_HEADER).sourceAnalyticsLocations;
                o.useEffect((function() {
                    f || m.default.track(d.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: t,
                        location_stack: p
                    })
                }), [f, t, p]);
                if (f) return null;
                var O = (0, r.jsx)(S.Z, {
                    className: D().getNitroLink,
                    size: c.Button.Sizes.SMALL,
                    look: c.Button.Looks.LINK,
                    color: c.Button.Colors.LINK,
                    subscriptionTier: j.Si.TIER_2,
                    buttonText: _.Z.Messages.PREMIUM_PREVIEW_GET_NITRO.format(),
                    showIcon: !1,
                    premiumModalAnalyticsLocation: {
                        section: t,
                        object: d.qAy.BUTTON_CTA
                    },
                    disableShine: !0
                });
                return (0, r.jsx)(C, {
                    reducedRightPadding: !0,
                    className: D().nitroPreviewUpsell,
                    text: _.Z.Messages.PREMIUM_PREVIEW.format(),
                    textSize: P.Z.Sizes.SIZE_14,
                    textColor: P.Z.Colors.HEADER_PRIMARY,
                    button: O
                })
            }

            function U(e) {
                var t = e.type,
                    n = e.analyticsPage,
                    o = e.analyticsSection,
                    i = e.isGIF,
                    c = e.banner;
                return [x.pC.BANNER, x.pC.AVATAR].includes(t) && i ? (0, r.jsx)(L, {
                    analyticsSection: o,
                    type: t
                }) : t === x.pC.GUILD_BANNER ? (0, r.jsx)(y, {
                    analyticsSection: o,
                    analyticsPage: n,
                    isGIF: i,
                    banner: c
                }) : null
            }
        },
        63509: (e, t, n) => {
            n.d(t, {
                Z: () => H
            });
            var r = n(441143),
                o = n.n(r),
                i = n(496486),
                c = n.n(i),
                a = n(620745),
                l = n(202351),
                u = n(744564),
                s = n(296602),
                f = n(120415),
                p = n(310126),
                d = n(202181),
                O = n(2590);

            function _(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
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

            function h(e) {
                h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return h(e)
            }

            function y(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function I(e, t) {
                return !t || "object" !== b(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function v(e, t) {
                v = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return v(e, t)
            }
            var b = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function g(e) {
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
                    var n, r = h(e);
                    if (t) {
                        var o = h(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return I(this, n)
                }
            }
            var R = {},
                P = {},
                T = {},
                w = {},
                C = {},
                S = new Set,
                N = "app-mount",
                m = function() {
                    return G.emitChange()
                },
                A = c().debounce(m, 150);

            function x(e) {
                var t = T[e];
                null == t || t.closed || (R[e] = {
                    x: t.screenX,
                    y: t.screenY,
                    width: t.innerWidth,
                    height: t.innerHeight,
                    alwaysOnTop: !!f.FB && P[e]
                })
            }

            function j(e) {
                var t = T[e],
                    n = C[e];
                if (null != t) {
                    var r = t.document;
                    (0, d.uF)(r, m);
                    t.addEventListener("focus", m);
                    t.addEventListener("blur", m);
                    t.addEventListener("resize", A);
                    ! function(e, t) {
                        var n = t.document,
                            r = document.querySelectorAll('link[rel="stylesheet"]'),
                            i = "".concat(window.location.protocol, "//").concat(window.location.host),
                            c = !0,
                            a = !1,
                            l = void 0;
                        try {
                            for (var u, s = r[Symbol.iterator](); !(c = (u = s.next()).done); c = !0) {
                                var f = u.value;
                                if (f.href.startsWith(i)) {
                                    var p = n.createElement("link");
                                    p.href = f.href;
                                    p.rel = f.rel;
                                    p.integrity = f.integrity;
                                    o()(null != n.head, "Document head was null");
                                    n.head.appendChild(p)
                                }
                            }
                        } catch (e) {
                            a = !0;
                            l = e
                        } finally {
                            try {
                                c || null == s.return || s.return()
                            } finally {
                                if (a) throw l
                            }
                        }
                    }(0, t);
                    var i = (0, a.s)(r.getElementById(N));
                    o()(null != i, "No render target for popout!");
                    w[e] = i;
                    i.render(n(e))
                } else new s.Z("PopoutWindowStore").warn("Failed to open window", e)
            }

            function M(e) {
                var t = T[e];
                if (null != t) {
                    t.closed || x(e);
                    t.close();
                    ! function(e) {
                        var t = T[e];
                        o()(null != t, "Popout window was null during unmount");
                        t.removeEventListener("focus", m);
                        t.removeEventListener("blur", m);
                        t.removeEventListener("resize", A);
                        var n = w[e];
                        o()(null != n, "Window root was null while unmounting");
                        n.unmount();
                        delete T[e];
                        delete P[e];
                        delete C[e];
                        delete w[e]
                    }(e);
                    G.emitChange()
                }
            }

            function D(e) {
                var t = e.data;
                if (t instanceof Object && t.discordPopoutEvent instanceof Object) {
                    var n = t.discordPopoutEvent;
                    if (null != n.key) switch (n.type) {
                        case O.l9w.LOADED:
                            return function(e) {
                                if (S.has(e)) {
                                    j(e);
                                    S.delete(e);
                                    G.emitChange()
                                }
                            }(n.key);
                        case O.l9w.UNLOADED:
                            return M(n.key)
                    }
                }
            }

            function L() {
                var e = !0,
                    t = !1,
                    n = void 0;
                try {
                    for (var r, o = Object.keys(T)[Symbol.iterator](); !(e = (r = o.next()).done); e = !0) {
                        var i = r.value,
                            c = T[i];
                        null != c && c.close()
                    }
                } catch (e) {
                    t = !0;
                    n = e
                } finally {
                    try {
                        e || null == o.return || o.return()
                    } finally {
                        if (t) throw n
                    }
                }
            }
            var U = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && v(e, t)
                }(n, e);
                var t = g(n);

                function n() {
                    _(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    window.addEventListener("message", D);
                    window.addEventListener("beforeunload", L);
                    R = null != e ? e : {}
                };
                r.getWindow = function(e) {
                    return T[e]
                };
                r.getWindowState = function(e) {
                    return R[e]
                };
                r.getWindowKeys = function() {
                    return Object.keys(T)
                };
                r.getWindowOpen = function(e) {
                    var t = T[e];
                    return null != t && !t.closed
                };
                r.getIsAlwaysOnTop = function(e) {
                    return Boolean(P[e])
                };
                r.getWindowFocused = function(e) {
                    var t, n, r = T[e];
                    return null !== (n = null == r || null === (t = r.document) || void 0 === t ? void 0 : t.hasFocus()) && void 0 !== n && n
                };
                r.getState = function() {
                    return R
                };
                r.unmountWindow = function(e) {
                    return M(e)
                };
                r.__getLocalVars = function() {
                    return {
                        popoutWindowState: R,
                        popoutWindowsAlwaysOnTop: P,
                        popoutWindows: T,
                        windowRoots: w,
                        windowRenderers: C,
                        pendingInjections: S,
                        INJECTION_ID: N,
                        emitChange: m,
                        debouncedEmitChange: A,
                        DEVELOPMENT_MODE: false,
                        instance: G
                    }
                };
                return n
            }(l.ZP.PersistedStore);
            U.displayName = "PopoutWindowStore";
            U.persistKey = "PopoutWindowStore";
            var G = new U(u.Z, {
                POPOUT_WINDOW_OPEN: function(e) {
                    var t = e.key,
                        n = e.features,
                        r = e.render;
                    if (f.FB && !p.ZP.supportsFeature(O.eRX.POPOUT_WINDOWS)) throw new Error("Popout windows not supported on this native module version!");
                    var o = T[t];
                    if (null != o && !o.closed) {
                        f.FB ? p.ZP.focus(t) : o.focus();
                        return !1
                    }
                    var i = n.defaultWidth,
                        c = n.defaultHeight,
                        a = n.defaultAlwaysOnTop,
                        l = void 0 !== a && a,
                        u = y(n, ["defaultWidth", "defaultHeight", "defaultAlwaysOnTop"]),
                        s = l,
                        d = R[t];
                    if (null != d) {
                        var _ = d.width,
                            h = d.height,
                            I = d.x,
                            v = d.y,
                            b = d.alwaysOnTop;
                        s = null != b ? b : l;
                        u = function(e) {
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
                            width: null != _ && 0 !== _ ? _ : i,
                            height: null != h && 0 !== h ? h : c,
                            left: I,
                            top: v
                        }, u)
                    }
                    var g = window.open(O.Z5c.POPOUT_WINDOW, t, function(e) {
                        var t = "",
                            n = !0,
                            r = !1,
                            o = void 0;
                        try {
                            for (var i, c = Object.keys(e)[Symbol.iterator](); !(n = (i = c.next()).done); n = !0) {
                                var a = i.value,
                                    l = e[a];
                                if (void 0 !== l) {
                                    "boolean" == typeof l && (l = l ? "yes" : "no");
                                    t += "".concat(a, "=").concat(l, ",")
                                }
                            }
                        } catch (e) {
                            r = !0;
                            o = e
                        } finally {
                            try {
                                n || null == c.return || c.return()
                            } finally {
                                if (r) throw o
                            }
                        }
                        return t
                    }(u));
                    g.windowKey = t;
                    null == g || g.focus();
                    T[t] = g;
                    C[t] = r;
                    if (f.FB) {
                        p.ZP.setAlwaysOnTop(t, s);
                        P[t] = s;
                        p.ZP.isAlwaysOnTop(t).then((function(e) {
                            return P[t] = e
                        }))
                    }
                    S.add(t)
                },
                POPOUT_WINDOW_CLOSE: function(e) {
                    var t = e.key,
                        n = T[t];
                    if (null != n && !n.closed) {
                        x(t);
                        n.close()
                    }
                },
                POPOUT_WINDOW_SET_ALWAYS_ON_TOP: function(e) {
                    var t = e.key,
                        n = e.alwaysOnTop;
                    if (f.FB) {
                        p.ZP.setAlwaysOnTop(t, n);
                        P[t] = n;
                        p.ZP.isAlwaysOnTop(t).then((function(e) {
                            return P[t] = e
                        }))
                    }
                },
                LOGOUT: L
            });
            const H = G
        },
        979197: (e, t, n) => {
            n.d(t, {
                Z: () => r.Z
            });
            var r = n(63509)
        },
        625797: (e, t, n) => {
            n.d(t, {
                Z: () => c
            });
            var r = n(120415),
                o = n(310126),
                i = n(63509);

            function c(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = i.Z.getWindow(e);
                null == n || n.closed || (r.FB ? o.ZP.focus(e, t) : n.focus())
            }
        },
        366007: (e, t, n) => {
            n.d(t, {
                Rj: () => l,
                JX: () => u,
                ZP: () => s
            });
            var r = n(785893),
                o = n(667294),
                i = n(468811),
                c = n.n(i),
                a = n(795308),
                l = Object.freeze({
                    PREMIUM_TIER_0: c().v4(),
                    PREMIUM_TIER_1: c().v4(),
                    PREMIUM_TIER_2: c().v4(),
                    PREMIUM_GUILD: c().v4(),
                    PREMIUM_TRIAL_TUTORIAL: c().v4(),
                    PREMIUM_GUILD_BADGE_V2_BACKGROUND: c().v4()
                }),
                u = {
                    PREMIUM_TIER_0: "url(#".concat(l.PREMIUM_TIER_0, ")"),
                    PREMIUM_TIER_1: "url(#".concat(l.PREMIUM_TIER_1, ")"),
                    PREMIUM_TIER_2: "url(#".concat(l.PREMIUM_TIER_2, ")"),
                    PREMIUM_GUILD: "url(#".concat(l.PREMIUM_GUILD, ")"),
                    PREMIUM_TRIAL_TUTORIAL: "url(#".concat(l.PREMIUM_TRIAL_TUTORIAL, ")"),
                    PREMIUM_GUILD_BADGE_V2_BACKGROUND: "url(#".concat(l.PREMIUM_GUILD_BADGE_V2_BACKGROUND, ")")
                };
            const s = o.memo((function() {
                return (0, r.jsxs)("svg", {
                    viewBox: "0 0 1 1",
                    style: {
                        position: "absolute",
                        pointerEvents: "none",
                        top: -1,
                        left: -1,
                        width: 1,
                        height: 1
                    },
                    "aria-hidden": !0,
                    children: [(0, r.jsxs)("linearGradient", {
                        id: l.PREMIUM_TIER_0,
                        children: [(0, r.jsx)("stop", {
                            offset: ".1762",
                            stopColor: a.Z.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS.css
                        }), (0, r.jsx)("stop", {
                            offset: "0.5351",
                            stopColor: a.Z.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2.css
                        }), (0, r.jsx)("stop", {
                            offset: "1",
                            stopColor: a.Z.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css
                        })]
                    }), (0, r.jsxs)("linearGradient", {
                        id: l.PREMIUM_TIER_1,
                        children: [(0, r.jsx)("stop", {
                            stopColor: a.Z.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css
                        }), (0, r.jsx)("stop", {
                            offset: "1",
                            stopColor: a.Z.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css
                        })]
                    }), (0, r.jsxs)("linearGradient", {
                        id: l.PREMIUM_TIER_2,
                        children: [(0, r.jsx)("stop", {
                            stopColor: a.Z.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.css
                        }), (0, r.jsx)("stop", {
                            offset: "0.502368",
                            stopColor: a.Z.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.css
                        }), (0, r.jsx)("stop", {
                            offset: "1",
                            stopColor: a.Z.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS.css
                        })]
                    }), (0,
                        r.jsxs)("linearGradient", {
                        id: l.PREMIUM_GUILD,
                        children: [(0, r.jsx)("stop", {
                            stopColor: a.Z.unsafe_rawColors.GUILD_BOOSTING_BLUE.css
                        }), (0, r.jsx)("stop", {
                            offset: "1",
                            stopColor: a.Z.unsafe_rawColors.GUILD_BOOSTING_PURPLE.css
                        })]
                    }), (0, r.jsxs)("linearGradient", {
                        id: l.PREMIUM_TRIAL_TUTORIAL,
                        children: [(0, r.jsx)("stop", {
                            stopColor: a.Z.unsafe_rawColors.PREMIUM_TIER_2_PURPLE.css
                        }), (0, r.jsx)("stop", {
                            offset: "1",
                            stopColor: a.Z.unsafe_rawColors.PREMIUM_TIER_2_PINK.css
                        })]
                    }), (0, r.jsxs)("linearGradient", {
                        id: l.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
                        gradientTransform: "rotate(45)",
                        children: [(0, r.jsx)("stop", {
                            offset: "0",
                            stopColor: a.Z.unsafe_rawColors.PREMIUM_TIER_2_PURPLE.css
                        }), (0, r.jsx)("stop", {
                            offset: "1",
                            stopColor: a.Z.unsafe_rawColors.PREMIUM_TIER_2_PINK.css
                        })]
                    })]
                })
            }), (function() {
                return !0
            }))
        },
        559968: (e, t, n) => {
            n.d(t, {
                Z: () => d
            });
            var r = n(785893),
                o = (n(667294), n(450520)),
                i = n(795308),
                c = n(633878);

            function a(e, t, n) {
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

            function u(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
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

            function p(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            const d = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    a = e.color,
                    l = void 0 === a ? "currentColor" : a,
                    u = e.foreground,
                    d = e.backgroundColor,
                    O = p(e, ["width", "height", "color", "foreground", "backgroundColor"]);
                return (0, r.jsxs)("svg", f(function(e) {
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
                }({}, (0, c.Z)(O)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 14 14",
                    children: [null != d ? (0, r.jsx)("circle", {
                        r: 5,
                        cx: 7,
                        cy: 7,
                        fill: d
                    }) : null, (0, r.jsx)("path", {
                        fill: l,
                        className: u,
                        d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                    })]
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    s = void 0 === o ? 24 : o,
                    f = e.color,
                    p = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    d = e.colorClass,
                    O = void 0 === d ? "" : d,
                    _ = u(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            a(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0,
                    c.Z)(_)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm4.707-15.707a1 1 0 0 0-1.414 0L12 10.586 8.707 7.293a1 1 0 0 0-1.414 1.414L10.586 12l-3.293 3.293a1 1 0 1 0 1.414 1.414L12 13.414l3.293 3.293a1 1 0 0 0 1.414-1.414L13.414 12l3.293-3.293a1 1 0 0 0 0-1.414Z",
                        clipRule: "evenodd",
                        className: O
                    })
                }))
            }))
        },
        816240: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(785893),
                o = (n(667294), n(450520)),
                i = n(43338),
                c = n(633878);

            function a(e, t, n) {
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

            function u(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            const s = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    p = e.foreground,
                    d = u(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            a(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(d)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        className: p,
                        d: "M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM10 8C10 6.8952 9.1032 6 8 6C6.8944 6 6 6.8952 6 8C6 9.1056 6.8944 10 8 10C9.1032 10 10 9.1056 10 8ZM9 14L6 18H18L15 11L11 16L9 14Z",
                        fill: f
                    })
                }))
            }), i.X)
        },
        316388: (e, t, n) => {
            n.d(t, {
                Z: () => d
            });
            var r = n(785893),
                o = (n(667294), n(450520)),
                i = n(795308),
                c = n(633878);

            function a(e, t, n) {
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

            function u(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
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

            function p(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            const d = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    a = e.color,
                    l = void 0 === a ? "currentColor" : a,
                    u = e.foreground,
                    d = p(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", f(function(e) {
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
                }({}, (0, c.Z)(d)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, r.jsx)("path", {
                            className: u,
                            fill: l,
                            d: "M10.59 13.41c.41.39.41 1.03 0 1.42-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0 5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.982 2.982 0 0 0 0-4.24 2.982 2.982 0 0 0-4.24 0l-3.53 3.53a2.982 2.982 0 0 0 0 4.24zm2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0 5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.982 2.982 0 0 0 0 4.24 2.982 2.982 0 0 0 4.24 0l3.53-3.53a2.982 2.982 0 0 0 0-4.24.973.973 0 0 1 0-1.42z"
                        }), (0, r.jsx)("rect", {
                            width: "24",
                            height: "24"
                        })]
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    s = void 0 === o ? 24 : o,
                    f = e.color,
                    p = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    d = e.colorClass,
                    O = void 0 === d ? "" : d,
                    _ = u(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            a(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(_)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M16.293 14.707a1 1 0 0 1 0-1.414l2.5-2.5a3.95 3.95 0 1 0-5.586-5.586l-2.5 2.5a1 1 0 1 1-1.414-1.414l2.5-2.5a5.95 5.95 0 0 1 8.414 8.414l-2.5 2.5a1 1 0 0 1-1.414 0ZM7.707 9.293a1 1 0 0 1 0 1.414l-2.5 2.5a3.95 3.95 0 0 0 5.586 5.586l2.5-2.5a1 1 0 0 1 1.414 1.414l-2.5 2.5a5.95 5.95 0 1 1-8.414-8.414l2.5-2.5a1 1 0 0 1 1.414 0Zm7 1.414a1 1 0 1 0-1.414-1.414l-4 4a1 1 0 0 0 1.414 1.414l4-4Z",
                        clipRule: "evenodd",
                        className: O
                    })
                }))
            }))
        },
        933850: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(785893),
                o = (n(667294), n(450520)),
                i = n(147751),
                c = n(633878);

            function a(e, t, n) {
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

            function u(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            const s = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    p = e.foreground,
                    d = u(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            a(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(d)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: f,
                        className: p,
                        d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
                    })
                }))
            }), i.q)
        },
        755914: (e, t, n) => {
            n.d(t, {
                Z: () => d
            });
            var r = n(785893),
                o = (n(667294), n(450520)),
                i = n(795308),
                c = n(633878);

            function a(e, t, n) {
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

            function u(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
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

            function p(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            const d = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    a = e.color,
                    l = void 0 === a ? "currentColor" : a,
                    u = e.foreground,
                    d = p(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", f(function(e) {
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
                }({}, (0, c.Z)(d)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: u,
                        fill: l,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                        "aria-hidden": !0
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    s = void 0 === o ? 24 : o,
                    f = e.color,
                    p = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    d = e.colorClass,
                    O = void 0 === d ? "" : d,
                    _ = u(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            a(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(_)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.737.324L5.917 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.917l4.286 4.676a1 1 0 0 0 .737.324H11a1 1 0 0 0 1-1V3Zm3.1 17.754c-.58.138-1.1-.33-1.1-.926v-.032c0-.497.369-.912.849-1.043a7.003 7.003 0 0 0 0-13.506C14.369 5.116 14 4.7 14 4.204v-.032c0-.596.52-1.064 1.1-.926a9.004 9.004 0 0 1 0 17.508Zm.057-4.242c-.57.273-1.157-.203-1.157-.835v-.14c0-.424.277-.789.633-1.02A2.997 2.997 0 0 0 16 12a2.997 2.997 0 0 0-1.367-2.517c-.356-.231-.633-.596-.633-1.02v-.14c0-.632.587-1.108 1.157-.835a5 5 0 0 1 0 9.024Z",
                        clipRule: "evenodd",
                        className: O
                    })
                }))
            }))
        },
        565571: (e, t, n) => {
            n.d(t, {
                Z: () => d
            });
            var r = n(785893),
                o = (n(667294), n(450520)),
                i = n(795308),
                c = n(633878);

            function a(e, t, n) {
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

            function u(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
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

            function p(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            const d = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 32 : t,
                    o = e.height,
                    i = void 0 === o ? 32 : o,
                    a = e.color,
                    l = void 0 === a ? "currentColor" : a,
                    u = p(e, ["width", "height", "color"]);
                return (0, r.jsx)("svg", f(function(e) {
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
                }({}, (0, c.Z)(u)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                        fill: l
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    s = void 0 === o ? 24 : o,
                    f = e.color,
                    p = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    d = e.colorClass,
                    O = void 0 === d ? "" : d,
                    _ = u(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            a(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(_)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M19.615 18.25c-.335-.364-.35-.914-.079-1.328a9 9 0 1 0-15.072 0c.27.414.256.964-.079 1.328l-.019.02c-.407.442-1.113.428-1.452-.068A10.949 10.949 0 0 1 1 12C1 5.925 5.925 1 12 1s11 4.925 11 11c0 2.3-.706 4.436-1.914 6.202-.339.496-1.045.51-1.452.068l-.02-.02Zm-2.785-3.017c.428.463 1.176.42 1.454-.145a7 7 0 1 0-12.568 0c.278.565 1.026.608 1.454.145l.054-.06c.304-.329.342-.817.168-1.23a5 5 0 1 1 9.216 0c-.174.413-.136.901.168 1.23l.054.06ZM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-8.669 8.03c-.252.725.12 1.5.808 1.84A10.955 10.955 0 0 0 12 23c1.745 0 3.395-.406 4.861-1.13.69-.34 1.06-1.115.808-1.84a6.003 6.003 0 0 0-11.338 0Z",
                        clipRule: "evenodd",
                        className: O
                    })
                }))
            }))
        },
        990554: (e, t, n) => {
            n.d(t, {
                l: () => o
            });
            var r = n(421281);

            function o(e, t) {
                for (var n = arguments.length, o = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) o[i - 2] = arguments[i];
                var c = o.reduce((function(e, t) {
                        return e + (0, r.De)(t)
                    }), ""),
                    a = "".concat(t).concat(c),
                    l = e[a];
                if (null != l) return l;
                0
            }
        }
    }
]);