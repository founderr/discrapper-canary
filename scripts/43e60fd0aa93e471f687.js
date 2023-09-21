"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [17183, 38479, 72935], {
        652411: (e, t, r) => {
            r.d(t, {
                O_: () => M,
                qA: () => f,
                Ji: () => N,
                uR: () => S
            });
            var n = r(667294),
                o = r(468811),
                i = r(294184),
                a = r.n(i);

            function c(e, t) {
                var r = e.x,
                    n = e.y;
                return r > t.x && r < t.x + t.width && n > t.y && n < t.y + t.height
            }

            function l(e, t) {
                return e * t * t * (t > 0 ? -1 : 1)
            }
            var u = function() {
                    function e(e) {
                        this.id = e.id, this.position = e.position, this.velocity = e.velocity, this.rotation = e.rotation, this.dragCoefficient = e.dragCoefficient, this.size = e.size, this.opacity = e.opacity, this.spriteX = e.spriteX, this.spriteY = e.spriteY, this.spriteWidth = e.spriteWidth, this.spriteHeight = e.spriteHeight, this._lastUpdatedAt = Date.now()
                    }
                    return e.prototype.getNewForces = function(e, t) {
                        var r = e.wind * t,
                            n = -e.gravity * t;
                        return {
                            x: r + l(this.dragCoefficient.x, this.velocity.x),
                            y: n + l(this.dragCoefficient.y, this.velocity.y)
                        }
                    }, e.prototype.update = function(e) {
                        var t = Date.now(),
                            r = (t - this._lastUpdatedAt) / 100;
                        this.rotation.update(r), this.dragCoefficient.update(r);
                        var n = this.getNewForces(e, r),
                            o = n.x,
                            i = n.y;
                        this.velocity.update(r), this.velocity.x += o, this.velocity.y += i, this.position.update(r), this.position.x += this.velocity.x * r, this.position.y += this.velocity.y * r, this.size.update(r), this.opacity.update(r), this._lastUpdatedAt = t
                    }, e.prototype.previewPositionUpdate = function(e, t) {
                        var r = t / 100,
                            n = this.velocity.previewUpdate(r),
                            o = this.getNewForces(e, r),
                            i = o.x,
                            a = o.y;
                        n.x += i, n.y += a;
                        var c = this.position.previewUpdate(r);
                        return c.x += n.x * r, c.y += n.y * r, c
                    }, e.prototype.draw = function(e, t) {
                        t.save(), t.globalAlpha = this.opacity.value, t.setTransform((new DOMMatrix).translateSelf(this.position.x * r.g.devicePixelRatio, this.position.y * r.g.devicePixelRatio).rotateSelf(this.rotation.x, this.rotation.y, this.rotation.z)), t.drawImage(e, this.spriteX, this.spriteY, this.spriteWidth, this.spriteHeight, -this.width / 2 * r.g.devicePixelRatio, -this.height / 2 * r.g.devicePixelRatio, this.width * r.g.devicePixelRatio, this.height * r.g.devicePixelRatio), t.restore()
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
                        r = t.gravity,
                        n = t.wind;
                    this.gravity = -9.8, this.wind = 0, this.gravity = null != r ? r : this.gravity, this.wind = null != n ? n : this.wind
                },
                p = function(e, t) {
                    return p = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }, p(e, t)
                };

            function d(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function r() {
                    this.constructor = e
                }
                p(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }
            var h = function() {
                return h = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }, h.apply(this, arguments)
            };
            var y = function(e) {
                    this.value = e
                },
                g = function() {
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
                b = function(e) {
                    function t(t, r, n) {
                        var o = e.call(this, t, r) || this;
                        return o._z = n, o
                    }
                    return d(t, e), t.prototype.update = function(t) {
                        e.prototype.update.call(this, t), this._z.update(t)
                    }, t.prototype.previewUpdate = function(t) {
                        var r = e.prototype.previewUpdate.call(this, t);
                        return h(h({}, r), {
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
                }(g),
                v = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return d(t, e), t.prototype.update = function() {}, t.prototype.previewUpdate = function() {
                        return this.value
                    }, t
                }(y),
                O = function(e) {
                    function t(t, r) {
                        var n = e.call(this, t) || this;
                        return n.addValue = r, n
                    }
                    return d(t, e), t.prototype.update = function(e) {
                        this.value = this.previewUpdate(e)
                    }, t.prototype.previewUpdate = function(e) {
                        return this.value + this.addValue * e
                    }, t
                }(y),
                E = function(e) {
                    function t(t, r, n, o, i, a) {
                        var c = e.call(this, t) || this;
                        c.min = r, c.max = n, c.duration = o;
                        var l = c.value / (c.max - c.min) * c.duration,
                            u = isNaN(l) ? 0 : l;
                        return c.timePassed = u < 0 ? c.duration - u : u, c.directionMultiplier = i, c.easingFunction = a, c
                    }
                    return d(t, e), t.prototype.update = function(e) {
                        var t = this.doUpdate(e),
                            r = t[0],
                            n = t[1],
                            o = t[2];
                        this.value = r, this.directionMultiplier = o, this.timePassed = n
                    }, t.prototype.previewUpdate = function(e) {
                        return this.doUpdate(e)[0]
                    }, t.prototype.doUpdate = function(e) {
                        var t = this.max - this.min,
                            r = this.timePassed + e * this.directionMultiplier,
                            n = Math.min(Math.max(r, 0), this.duration),
                            o = r < 0 || r > this.duration ? -1 * this.directionMultiplier : this.directionMultiplier,
                            i = this.easingFunction(n, this.min, t, this.duration);
                        return [isNaN(i) ? 0 : i, n, o]
                    }, t
                }(y);

            function m(e, t) {
                return e === t ? e : Math.random() * (t - e + 1) + e
            }

            function w(e) {
                var t = Math.floor(m(0, e.length - 1));
                return [e[t], t]
            }

            function C(e, t) {
                return w([e, t])[0]
            }

            function P(e) {
                return "number" == typeof e ? {
                    x: e,
                    y: e
                } : e
            }

            function _(e) {
                return "number" == typeof e ? {
                    x: e,
                    y: e,
                    z: e
                } : e
            }

            function j(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            return new v(e.value);
                        case "static-random":
                            return new v(m(e.minValue, e.maxValue));
                        case "linear":
                            return new O(e.value, e.addValue);
                        case "linear-random":
                            return new O(m(e.minValue, e.maxValue), m(e.minAddValue, e.maxAddValue));
                        case "oscillating":
                            return new E(e.value, e.start, e.final, e.duration, e.direction, e.easingFunction);
                        case "oscillating-random":
                            return new E(m(e.minValue, e.maxValue), m(e.minStart, e.maxStart), m(e.minFinal, e.maxFinal), m(e.minDuration, e.maxDuration), C(e.minDirection, e.maxDirection), w(e.easingFunctions)[0])
                    }
                }(h(h({}, e), {
                    valueType: "number"
                }))
            }

            function x(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            var t = P(e.value);
                            return new g(new v(t.x), new v(t.y));
                        case "static-random":
                            var r = P(e.minValue),
                                n = P(e.maxValue);
                            return new g(new v(m(r.x, n.x)), new v(m(r.y, n.y)));
                        case "linear":
                            t = P(e.value);
                            var o = P(e.addValue);
                            return new g(new O(t.x, o.x), new O(t.y, o.y));
                        case "linear-random":
                            r = P(e.minValue), n = P(e.maxValue);
                            var i = P(e.minAddValue),
                                a = P(e.maxAddValue);
                            return new g(new O(m(r.x, n.x), m(i.x, a.x)), new O(m(r.y, n.y), m(i.x, a.x)));
                        case "oscillating":
                            t = P(e.value);
                            var c = P(e.start),
                                l = P(e.final),
                                u = P(e.duration),
                                s = P(e.direction);
                            return new g(new E(t.x, c.x, l.x, u.x, s.x, e.easingFunction), new E(t.y, c.y, l.y, u.x, s.y, e.easingFunction));
                        case "oscillating-random":
                            r = P(e.minValue), n = P(e.maxValue);
                            var f = P(e.minStart),
                                p = P(e.maxStart),
                                d = P(e.minFinal),
                                h = P(e.maxFinal),
                                y = P(e.minDuration),
                                b = P(e.maxDuration),
                                _ = P(e.minDirection),
                                j = P(e.maxDirection);
                            return new g(new E(m(r.x, n.x), m(f.x, p.x), m(d.x, h.x), m(y.x, b.x), C(_.x, j.x), w(e.easingFunctions)[0]), new E(m(r.y, n.y), m(f.y, p.y), m(d.y, h.y), m(y.y, b.y), C(_.y, j.y), w(e.easingFunctions)[0]))
                    }
                }(h(h({}, e), {
                    valueType: "Vector2"
                }))
            }

            function R(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            var t = _(e.value);
                            return new b(new v(t.x), new v(t.y), new v(t.z));
                        case "static-random":
                            var r = _(e.minValue),
                                n = _(e.maxValue);
                            return new b(new v(m(r.x, n.x)), new v(m(r.y, n.y)), new v(m(r.z, n.z)));
                        case "linear":
                            t = _(e.value);
                            var o = _(e.addValue);
                            return new b(new O(t.x, o.x), new O(t.y, o.y), new O(t.z, o.z));
                        case "linear-random":
                            r = _(e.minValue), n = _(e.maxValue);
                            var i = _(e.minAddValue),
                                a = _(e.maxAddValue);
                            return new b(new O(m(r.x, n.x), m(i.x, a.x)), new O(m(r.y, n.y), m(i.y, a.y)), new O(m(r.z, n.z), m(i.z, a.z)));
                        case "oscillating":
                            t = _(e.value);
                            var c = _(e.start),
                                l = _(e.final),
                                u = _(e.duration),
                                s = _(e.direction);
                            return new b(new E(t.x, c.x, l.x, u.x, s.x, e.easingFunction), new E(t.y, c.y, l.y, u.z, s.y, e.easingFunction), new E(t.z, c.z, l.z, u.z, s.z, e.easingFunction));
                        case "oscillating-random":
                            r = _(e.minValue), n = _(e.maxValue);
                            var f = _(e.minStart),
                                p = _(e.maxStart),
                                d = _(e.minFinal),
                                h = _(e.maxFinal),
                                y = _(e.minDuration),
                                g = _(e.maxDuration),
                                P = _(e.minDirection),
                                j = _(e.maxDirection);
                            return new b(new E(m(r.x, n.x), m(f.x, p.x), m(d.x, h.x), m(y.x, g.x), C(P.x, j.x), w(e.easingFunctions)[0]), new E(m(r.y, n.y), m(f.y, p.y), m(d.y, h.y), m(y.y, g.y), C(P.y, j.y), w(e.easingFunctions)[0]), new E(m(r.z, n.z), m(f.z, p.z), m(d.z, h.z), m(y.z, g.z), C(P.z, j.z), w(e.easingFunctions)[0]))
                    }
                }(h(h({}, e), {
                    valueType: "Vector3"
                }))
            }

            function I(e, t, r, n, o) {
                var i = function(e, t) {
                        return h(h({
                            id: t
                        }, s), e)
                    }(t, e),
                    a = x(i.size),
                    c = function(e, t) {
                        if (null != e) {
                            var r = t.sprites.findIndex((function(t) {
                                return r = t, "string" == typeof(n = e) ? r.src === n && r.colorize : r.src === n.src && r.colorize === n.colorize;
                                var r, n
                            }));
                            if (-1 !== r) return [e, r]
                        }
                        return w(t.sprites)
                    }(n, r),
                    l = c[0],
                    f = c[1],
                    p = function(e, t, r) {
                        if (! function(e) {
                                return "string" == typeof e || e.colorize
                            }(e)) return 0;
                        var n = null != t ? r.colors.findIndex((function(e) {
                            return e === t
                        })) : -1;
                        return -1 !== n ? n : Math.floor(m(0, r.colors.length - 1))
                    }(null != n ? n : l, o, r);
                return new u({
                    id: e,
                    position: x(i.position),
                    velocity: x(i.velocity),
                    rotation: R(i.rotation),
                    dragCoefficient: x(i.dragCoefficient),
                    size: a,
                    opacity: j(i.opacity),
                    spriteX: p * r.spriteWidth + 2 * p,
                    spriteY: f * r.spriteHeight + 2 * f,
                    spriteWidth: r.spriteWidth,
                    spriteHeight: r.spriteHeight
                })
            }
            var M = n.forwardRef((function(e, t) {
                var i = e.className,
                    a = e.environment,
                    l = e.onClick,
                    u = e.onMouseDown,
                    s = e.onMouseMove,
                    f = e.onMouseUp,
                    p = e.onBeforeRender,
                    d = e.onAfterRender,
                    y = function(e, t) {
                        var r = {};
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var o = 0;
                            for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
                        }
                        return r
                    }(e, ["className", "environment", "onClick", "onMouseDown", "onMouseMove", "onMouseUp", "onBeforeRender", "onAfterRender"]),
                    g = n.useRef(null),
                    b = n.useRef(new Map),
                    v = n.useRef(null),
                    O = n.useRef(0),
                    E = n.useRef(0),
                    m = n.useCallback((function() {
                        var e = g.current;
                        if (null != e) {
                            var t = e.getContext("2d");
                            if (null != t) {
                                t.clearRect(0, 0, e.width, e.height), null == p || p(t), b.current.forEach((function(r, n) {
                                    var o = r.confetti,
                                        i = r.spriteCanvas;
                                    o.update(a), o.draw(i, t), o.shouldDestroy(e, a) && b.current.delete(n)
                                })), null == d || d(t), b.current.size > 0 ? v.current = window.requestAnimationFrame(m) : (t.clearRect(0, 0, e.width, e.height), v.current = null);
                                var r = Date.now();
                                0 !== O.current && (E.current = 1e3 / (r - O.current)), O.current = r
                            }
                        }
                    }), [a, d, p]);
                n.useEffect((function() {
                    null != v.current && (window.cancelAnimationFrame(v.current), v.current = window.requestAnimationFrame(m))
                }), [m]);
                var w = n.useCallback((function(e, t) {
                        b.current.set(e.id, {
                            confetti: e,
                            spriteCanvas: t
                        }), null == v.current && m()
                    }), [m]),
                    C = n.useCallback((function(e, t, r, n, i) {
                        var a, c = I(null !== (a = e.id) && void 0 !== a ? a : (0, o.v4)(), e, r, n, i);
                        return w(c, t), c
                    }), [w]),
                    P = n.useCallback((function(e) {
                        b.current.delete(e)
                    }), []),
                    _ = n.useCallback((function() {
                        return b.current.clear()
                    }), []),
                    j = n.useCallback((function() {
                        return g.current
                    }), []);
                n.useImperativeHandle(t, (function() {
                    return {
                        createConfetti: C,
                        addConfetti: w,
                        deleteConfetti: P,
                        clearConfetti: _,
                        getCanvas: j
                    }
                }), [C, w, P, _, j]);
                var x = n.useCallback((function(e, t) {
                        var r, n, o = t.clickHandler,
                            i = t.mouseHandler;
                        if (null != o || null != i) {
                            var l = null === (r = g.current) || void 0 === r ? void 0 : r.getBoundingClientRect();
                            if (null != l) {
                                var u = function(e, t) {
                                    if (null == t) throw new Error("element should not be null");
                                    var r = t.getBoundingClientRect();
                                    return {
                                        x: e.clientX - r.left,
                                        y: e.clientY - r.top
                                    }
                                }(e, g.current);
                                if (c(u, {
                                        x: l.left,
                                        y: l.top,
                                        width: l.width,
                                        height: l.height
                                    })) {
                                    if (null != i) return i(e);
                                    if (null != o) {
                                        var s = -1e3 / E.current * 2,
                                            f = function(e, t) {
                                                for (var r = 0, n = Array.from(e.values()); r < n.length; r++) {
                                                    var o = n[r];
                                                    if (null != o && t(o)) return o
                                                }
                                                return null
                                            }(b.current, (function(e) {
                                                var t = e.confetti,
                                                    r = t.previewPositionUpdate(a, s);
                                                return c(u, {
                                                    x: r.x - t.width / 2,
                                                    y: r.y - t.height / 2,
                                                    width: t.width,
                                                    height: t.height
                                                })
                                            }));
                                        o(e, null !== (n = null == f ? void 0 : f.confetti) && void 0 !== n ? n : null)
                                    }
                                }
                            }
                        }
                    }), [a]),
                    R = n.useCallback((function(e) {
                        return x(e, {
                            clickHandler: l
                        })
                    }), [x, l]),
                    M = n.useCallback((function(e) {
                        return x(e, {
                            clickHandler: u
                        })
                    }), [x, u]),
                    N = n.useCallback((function(e) {
                        return x(e, {
                            mouseHandler: s
                        })
                    }), [x, s]),
                    S = n.useCallback((function(e) {
                        return x(e, {
                            mouseHandler: f
                        })
                    }), [x, f]);
                return n.useEffect((function() {
                    var e = function(e, t, r) {
                        null != r && window.addEventListener(e, t)
                    };
                    return e("click", R, l), e("mousedown", M, u), e("mousemove", N, s), e("mouseup", S, f),
                        function() {
                            window.removeEventListener("click", R), window.removeEventListener("mousedown", M), window.removeEventListener("mousemove", N), window.removeEventListener("mouseup", N)
                        }
                }), [R, M, N, S, l, u, s, f]), n.useEffect((function() {
                    var e = g.current,
                        t = new ResizeObserver((function() {
                            ! function(e) {
                                if (null != e) {
                                    var t = e.getBoundingClientRect(),
                                        n = t.width,
                                        o = t.height;
                                    e.width = n * r.g.devicePixelRatio, e.height = o * r.g.devicePixelRatio
                                }
                            }(g.current)
                        }));
                    return null != e && t.observe(e),
                        function() {
                            null != e && t.unobserve(e)
                        }
                }), []), n.createElement("canvas", h({}, y, {
                    className: i,
                    ref: g
                }))
            }));
            ! function(e, t) {
                void 0 === t && (t = {});
                var r = t.insertAt;
                if ("undefined" != typeof document) {
                    var n = document.head || document.getElementsByTagName("head")[0],
                        o = document.createElement("style");
                    o.type = "text/css",
                        "top" === r && n.firstChild ? n.insertBefore(o, n.firstChild) : n.appendChild(o), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e))
                }
            }(".SpriteCanvas-module_spriteCanvasHidden__ndzQV {\n  display: none;\n  position: absolute;\n  width: 0;\n  height: 0;\n  left: -100%;\n}\n");
            var N = n.forwardRef((function(e, t) {
                var r, i = e.className,
                    c = e.visible,
                    l = void 0 !== c && c,
                    u = e.sprites,
                    s = e.colors,
                    f = e.spriteWidth,
                    p = e.spriteHeight,
                    d = n.useRef(null),
                    h = n.useRef([]),
                    y = n.useRef(!1),
                    g = n.useRef({});
                n.useImperativeHandle(t, (function() {
                    return {
                        getCanvas: function() {
                            return d.current
                        },
                        getCreateData: function() {
                            return {
                                sprites: h.current,
                                colors: s,
                                spriteWidth: f,
                                spriteHeight: p
                            }
                        },
                        addReadyListener: function(e) {
                            var t = (0, o.v4)();
                            return g.current[t] = e, t
                        },
                        removeReadyListener: function(e) {
                            delete g.current[e]
                        },
                        isReady: y.current
                    }
                }), [s, p, f]);
                var b = n.useCallback((function() {
                        var e = d.current,
                            t = null == e ? void 0 : e.getContext("2d", {
                                willReadFrequently: !0
                            });
                        null != t && null != e && (t.clearRect(0, 0, e.width, e.height),
                            h.current.forEach((function(e, r) {
                                var n = function(n, o) {
                                    var i = f * o + 2 * o,
                                        a = p * r + 2 * r;
                                    if (t.drawImage(e.image, i, a, f, p), null != n) {
                                        for (var c = t.getImageData(i, a, f, p), l = function(e) {
                                                "#" === e[0] && (e = e.slice(1));
                                                var t = parseInt(e, 16);
                                                return {
                                                    r: t >> 16 & 255,
                                                    g: t >> 8 & 255,
                                                    b: 255 & t
                                                }
                                            }(n), u = 0; u < c.data.length; u += 4) c.data[u] = l.r, c.data[u + 1] = l.g, c.data[u + 2] = l.b;
                                        t.putImageData(c, i, a)
                                    }
                                };
                                e.colorize ? s.forEach((function(e, t) {
                                    return n(e, t)
                                })) : n(null, 0)
                            })))
                    }), [s, p, f]),
                    v = n.useCallback((function() {
                        var e = u.map((function(e) {
                            var t = new Image,
                                r = "string" == typeof e ? e : e.src,
                                n = "string" == typeof e || e.colorize;
                            t.src = r;
                            var o = new Promise((function(e) {
                                t.onload = e
                            }));
                            return {
                                colorize: n,
                                image: t,
                                src: r,
                                loadPromise: o
                            }
                        }));
                        return Promise.all(e.map((function(e) {
                            return e.loadPromise
                        }))).then((function() {
                            h.current = e.map((function(e) {
                                return {
                                    colorize: e.colorize,
                                    image: e.image,
                                    src: e.src
                                }
                            }))
                        }))
                    }), [u]),
                    O = n.useCallback((function(e) {
                        for (var t in g.current) g.current[t](e)
                    }), []),
                    E = n.useCallback((function() {
                        return function(e, t, r, n) {
                            return new(r || (r = Promise))((function(o, i) {
                                function a(e) {
                                    try {
                                        l(n.next(e))
                                    } catch (e) {
                                        i(e)
                                    }
                                }

                                function c(e) {
                                    try {
                                        l(n.throw(e))
                                    } catch (e) {
                                        i(e)
                                    }
                                }

                                function l(e) {
                                    var t;
                                    e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                                        e(t)
                                    }))).then(a, c)
                                }
                                l((n = n.apply(e, t || [])).next())
                            }))
                        }(void 0, void 0, void 0, (function() {
                            return function(e, t) {
                                var r, n, o, i, a = {
                                    label: 0,
                                    sent: function() {
                                        if (1 & o[0]) throw o[1];
                                        return o[1]
                                    },
                                    trys: [],
                                    ops: []
                                };
                                return i = {
                                    next: c(0),
                                    throw: c(1),
                                    return: c(2)
                                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                                    return this
                                }), i;

                                function c(c) {
                                    return function(l) {
                                        return function(c) {
                                            if (r) throw new TypeError("Generator is already executing.");
                                            for (; i && (i = 0, c[0] && (a = 0)), a;) try {
                                                if (r = 1, n && (o = 2 & c[0] ? n.return : c[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, c[1])).done) return o;
                                                switch (n = 0, o && (c = [2 & c[0], o.value]), c[0]) {
                                                    case 0:
                                                    case 1:
                                                        o = c;
                                                        break;
                                                    case 4:
                                                        return a.label++, {
                                                            value: c[1],
                                                            done: !1
                                                        };
                                                    case 5:
                                                        a.label++, n = c[1], c = [0];
                                                        continue;
                                                    case 7:
                                                        c = a.ops.pop(), a.trys.pop();
                                                        continue;
                                                    default:
                                                        if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                                            a = 0;
                                                            continue
                                                        }
                                                        if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                                            a.label = c[1];
                                                            break
                                                        }
                                                        if (6 === c[0] && a.label < o[1]) {
                                                            a.label = o[1], o = c;
                                                            break
                                                        }
                                                        if (o && a.label < o[2]) {
                                                            a.label = o[2], a.ops.push(c);
                                                            break
                                                        }
                                                        o[2] && a.ops.pop(), a.trys.pop();
                                                        continue
                                                }
                                                c = t.call(e, a)
                                            } catch (e) {
                                                c = [6, e], n = 0
                                            } finally {
                                                r = o = 0
                                            }
                                            if (5 & c[0]) throw c[1];
                                            return {
                                                value: c[0] ? c[1] : void 0,
                                                done: !0
                                            }
                                        }([c, l])
                                    }
                                }
                            }(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, v()];
                                    case 1:
                                        return e.sent(), b(), y.current = !0, O(!0), [2]
                                }
                            }))
                        }))
                    }), [O, v, b]);
                return n.useEffect((function() {
                    E()
                }), [E]), n.useEffect((function() {
                    return function() {
                        return O(!1)
                    }
                }), [O]), n.useEffect((function() {
                    null != d.current && (d.current.width = (f + 2) * Math.max(s.length, 1), d.current.height = (p + 2) * u.length)
                }), [s.length, p, f, u.length]), n.createElement("canvas", {
                    ref: d,
                    className: a()(i, (r = {}, r["SpriteCanvas-module_spriteCanvasHidden__ndzQV"] = !l, r))
                })
            }));

            function S(e, t) {
                var r, o = n.useState(null !== (r = null == t ? void 0 : t.isReady) && void 0 !== r && r),
                    i = o[0],
                    a = o[1];
                n.useEffect((function() {
                    var e = null == t ? void 0 : t.addReadyListener(a);
                    return function() {
                        null != e && (null == t || t.removeReadyListener(e))
                    }
                }), [t]);
                var c = n.useCallback((function(r, n) {
                        var o = void 0 === n ? {} : n,
                            i = o.sprite,
                            a = o.color,
                            c = null == t ? void 0 : t.getCreateData(),
                            l = null == t ? void 0 : t.getCanvas();
                        if (null != l && null != c && 0 !== c.sprites.length) return null == e ? void 0 : e.createConfetti(r, l, c, i, a)
                    }), [e, t]),
                    l = n.useCallback((function(e, t, r) {
                        for (var n = [], o = 0; o < t; o++) {
                            var i = c(e, r);
                            i && n.push(i)
                        }
                        return n
                    }), [c]),
                    u = n.useCallback((function(r) {
                        var n = null == t ? void 0 : t.getCanvas();
                        null != n && (null == e || e.addConfetti(r, n))
                    }), [e, t]),
                    s = n.useCallback((function(t) {
                        null == e || e.deleteConfetti(t)
                    }), [e]),
                    f = n.useCallback((function() {
                        return null == e ? void 0 : e.clearConfetti()
                    }), [e]);
                return n.useMemo((function() {
                    return {
                        createConfetti: c,
                        createMultipleConfetti: l,
                        addConfetti: u,
                        clearConfetti: f,
                        deleteConfetti: s,
                        isReady: i && null != t && null != e
                    }
                }), [u, f, e, c, l, s, i, t])
            }
        },
        661299: (e, t, r) => {
            r.d(t, {
                Z: () => p
            });
            var n = r(785893),
                o = (r(667294),
                    r(294184)),
                i = r.n(o),
                a = r(468811),
                c = r.n(a),
                l = r(305484),
                u = r.n(l);

            function s(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }
            var f = c().v4();
            const p = function(e) {
                var t, r = e.open,
                    o = e.className,
                    a = e.withHighlight,
                    c = void 0 !== a && a;
                return (0, n.jsxs)("svg", {
                    width: "18",
                    height: "18",
                    className: i()(u().button, o, (t = {}, s(t, u().open, r), s(t, u().withHighlight, c), t)),
                    children: [c && (0, n.jsx)("defs", {
                        children: (0, n.jsxs)("linearGradient", {
                            id: f,
                            x1: "0",
                            y1: "0",
                            x2: "0",
                            y2: "18",
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, n.jsx)("stop", {
                                offset: "0",
                                stopColor: "#B473F5"
                            }), (0, n.jsx)("stop", {
                                offset: "1",
                                stopColor: "#E292AA"
                            })]
                        })
                    }), (0, n.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, n.jsx)("path", {
                            d: "M0 0h18v18H0"
                        }), (0, n.jsx)("path", {
                            stroke: c ? "url(#".concat(f, ")") : "currentColor",
                            d: "M4.5 4.5l9 9",
                            strokeLinecap: "round"
                        }), (0, n.jsx)("path", {
                            stroke: c ? "url(#".concat(f, ")") : "currentColor",
                            d: "M13.5 4.5l-9 9",
                            strokeLinecap: "round"
                        })]
                    })]
                })
            }
        },
        255875: (e, t, r) => {
            r.d(t, {
                E: () => d,
                h: () => h
            });
            var n = r(785893),
                o = r(667294),
                i = r(652411),
                a = r(318715),
                c = r(316878),
                l = r(2590);

            function u(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        u(e, t, r[t])
                    }))
                }
                return e
            }

            function f(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
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

            function h(e) {
                var t = e.children,
                    r = e.confettiCanvas,
                    l = e.spriteCanvas,
                    u = e.baseConfig,
                    h = e.addClickListener,
                    y = e.removeClickListener,
                    g = (0, i.uR)(r, l),
                    b = (0, a.ZP)([c.Z], (function() {
                        return c.Z.useReducedMotion
                    })),
                    v = o.useMemo((function() {
                        return b ? p : {
                            confettiCanvas: r,
                            cannon: g,
                            createConfetti: function(e, t) {
                                return g.createConfetti(s({}, u, e), t)
                            },
                            createConfettiAt: function(e, t, r, n) {
                                return g.createConfetti(s(f(s({}, u), {
                                    position: {
                                        type: "static",
                                        value: {
                                            x: e,
                                            y: t
                                        }
                                    }
                                }), r), n)
                            },
                            createMultipleConfetti: function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                                    r = arguments.length > 2 ? arguments[2] : void 0;
                                return g.createMultipleConfetti(s({}, u, e), t, r)
                            },
                            createMultipleConfettiAt: function(e, t, r) {
                                var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                                    o = arguments.length > 4 ? arguments[4] : void 0;
                                return g.createMultipleConfetti(s(f(s({}, u), {
                                    position: {
                                        type: "static",
                                        value: {
                                            x: e,
                                            y: t
                                        }
                                    }
                                }), r), n, o)
                            },
                            addClickListener: h,
                            removeClickListener: y
                        }
                    }), [h, u, g, r, b, y]);
                return (0, n.jsx)(d.Provider, {
                    value: v,
                    children: t
                })
            }
        },
        337509: (e, t, r) => {
            r.d(t, {
                Q: () => n,
                i: () => i
            });
            var n, o = r(761673);
            ! function(e) {
                e[e.PARTNERED = 0] = "PARTNERED";
                e[e.VERIFIED = 1] = "VERIFIED";
                e[e.VERIFIED_AND_PARTNERED = 2] = "VERIFIED_AND_PARTNERED";
                e[e.COMMUNITY = 3] = "COMMUNITY";
                e[e.DISCOVERABLE = 4] = "DISCOVERABLE";
                e[e.STAFF = 5] = "STAFF";
                e[e.NONE = 6] = "NONE"
            }(n || (n = {}));

            function i(e) {
                return e.staff ? n.STAFF : e.verified && e.partnered ? n.VERIFIED_AND_PARTNERED : e.verified ? n.VERIFIED : e.partnered ? n.PARTNERED : e.community && e.visibility === o.PZ.PUBLIC ? n.DISCOVERABLE : e.community ? n.COMMUNITY : n.NONE
            }
        },
        243399: (e, t, r) => {
            r.d(t, {
                E: () => o
            });
            var n = (0, r(260561).B)({
                kind: "guild",
                id: "2023-04_server_badging",
                label: "Server Badging",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable Server Badging",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function o(e) {
                return n.useExperiment({
                    guildId: e,
                    location: "482926_1"
                }, {
                    autoTrackExposure: !1
                }).enabled
            }
        },
        761673: (e, t, r) => {
            r.d(t, {
                PZ: () => n,
                XX: () => a
            });
            var n, o = r(848285),
                i = r(2590);
            ! function(e) {
                e.PUBLIC = "PUBLIC";
                e.INVITE_ONLY = "INVITE_ONLY"
            }(n || (n = {}));

            function a(e) {
                var t = new Set(e.features),
                    r = t.has(i.oNc.COMMUNITY) && t.has(i.oNc.DISCOVERABLE) ? n.PUBLIC : n.INVITE_ONLY,
                    a = function(e) {
                        if (null == e) return !1;
                        if (e instanceof o.Z) return e.premiumSubscriberCount > 0 || e.premiumTier > i.Eu4.NONE;
                        if (null != e.premiumSubscriptionCount) return e.premiumSubscriptionCount > 0;
                        return !1
                    }(e),
                    c = 0;
                if (a) {
                    var l;
                    c = null !== (l = e instanceof o.Z ? e.premiumSubscriberCount : e.premiumSubscriptionCount) && void 0 !== l ? l : 0
                }
                var u = e instanceof o.Z ? e.premiumTier : i.Eu4.NONE;
                return {
                    verified: t.has(i.oNc.VERIFIED),
                    partnered: t.has(i.oNc.PARTNERED),
                    community: t.has(i.oNc.COMMUNITY),
                    staff: t.has(i.oNc.INTERNAL_EMPLOYEE_ONLY),
                    visibility: r,
                    premium: a,
                    premiumSubscriberCount: c,
                    premiumTier: u
                }
            }
        },
        491379: (e, t, r) => {
            r.d(t, {
                Z: () => c
            });
            var n = r(337509),
                o = r(243399),
                i = r(761673),
                a = new Set([n.Q.PARTNERED, n.Q.VERIFIED, n.Q.VERIFIED_AND_PARTNERED, n.Q.COMMUNITY, n.Q.DISCOVERABLE]);

            function c(e) {
                var t;
                if (!(0, o.E)(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "")) return !1;
                if (null == e) return !1;
                var r = (0, i.XX)(e),
                    c = (0, n.i)(r);
                return a.has(c)
            }
        },
        733274: (e, t, r) => {
            r.d(t, {
                zC: () => M,
                Yp: () => R,
                XO: () => I,
                hC: () => D,
                o9: () => S,
                VF: () => L,
                WW: () => N
            });
            var n = r(795308),
                o = r(805457),
                i = r(901644),
                a = r(217674),
                c = r(312690),
                l = r(855595),
                u = r(575562),
                s = r(235606),
                f = r(71236),
                p = r(521798),
                d = r(785893),
                h = (r(667294), r(633878));

            function y(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function g(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function b(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function v(e) {
                var t = e.width,
                    r = void 0 === t ? 40 : t,
                    n = e.height,
                    o = void 0 === n ? 40 : n,
                    i = e.color,
                    a = void 0 === i ? "currentColor" : i,
                    c = b(e, ["width", "height", "color"]);
                return (0, d.jsx)("svg", g(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            y(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, h.Z)(c)), {
                    width: r,
                    height: o,
                    viewBox: "0 0 20 21",
                    fill: a,
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, d.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M9.2139 1.00082L0.271335 12.3825C-0.0698739 12.8168 0.00557122 13.4454 0.439846 13.7866C0.616031 13.9251 0.833599 14.0003 1.05766 14.0003H5.00022V20.0003C5.00022 20.5526 5.44794 21.0003 6.00022 21.0003H14.0002C14.5525 21.0003 15.0002 20.5526 15.0002 20.0003V14.0003H18.9428C19.495 14.0003 19.9428 13.5526 19.9428 13.0003C19.9428 12.7763 19.8675 12.5587 19.7291 12.3825L10.7865 1.00082C10.4453 0.566546 9.81669 0.4911 9.38241 0.832308C9.31972 0.881561 9.26315 0.938133 9.2139 1.00082Z",
                        fill: a
                    })
                }))
            }
            var O = r(2590),
                E = (r(203600), r(473708)),
                m = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n.Z.unsafe_rawColors.PREMIUM_PERK_ORANGE.css;
                    return {
                        color: e,
                        icon: c.Z,
                        description: E.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_ANIMATED_ICON
                    }
                },
                w = function() {
                    return {
                        color: n.Z.unsafe_rawColors.PREMIUM_PERK_ORANGE.css,
                        icon: l.Z,
                        description: E.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_ROLE_ICON
                    }
                },
                C = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n.Z.unsafe_rawColors.PREMIUM_PERK_PURPLE.css;
                    return {
                        color: e,
                        icon: p.Z,
                        description: E.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_STICKERS
                    }
                },
                P = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.Z.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
                        r = 0,
                        o = 0;
                    switch (e) {
                        case O.Eu4.TIER_1:
                            r = 15;
                            o = 100;
                            break;
                        case O.Eu4.TIER_2:
                            r = 30;
                            o = 150;
                            break;
                        case O.Eu4.TIER_3:
                            r = 60;
                            o = 250
                    }
                    return {
                        color: t,
                        icon: p.Z,
                        description: E.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_STICKERS_AND_EMOJIS.format({
                            numStickers: r,
                            numEmojis: o
                        })
                    }
                },
                _ = function() {
                    return {
                        color: n.Z.unsafe_rawColors.PREMIUM_PERK_GOLD.css,
                        icon: f.Z,
                        description: E.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_VANITY_URL
                    }
                },
                j = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_OTHER;
                    return {
                        color: n.Z.unsafe_rawColors.PREMIUM_PERK_BLUE.css,
                        icon: i.Z,
                        description: e
                    }
                },
                x = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css;
                    return {
                        color: e,
                        icon: s.Z,
                        description: E.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_SCREEN_SHARE_1080P
                    }
                };

            function R() {
                return [w(), {
                    color: n.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
                    icon: u.Z,
                    description: E.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_GUILD_BANNER
                }, C(), j()]
            }

            function I() {
                return [w(), P(O.Eu4.TIER_2), x(), j()]
            }

            function M() {
                return [P(O.Eu4.TIER_3, n.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css), {
                    color: n.Z.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
                    icon: v,
                    description: E.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_FILE_UPLOAD_TIER_3
                }, _(), j()]
            }

            function N() {
                return [_(), {
                    color: n.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
                    icon: c.Z,
                    description: E.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_ANIMATED_GUILD_BANNER
                }, P(O.Eu4.TIER_3), j()]
            }

            function S() {
                return [{
                    color: n.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
                    icon: u.Z,
                    description: E.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_CUSTOM_INVITE
                }, C(), m(), j()]
            }

            function D() {
                return [C(), j()]
            }

            function L() {
                return [{
                    icon: a.Z,
                    color: n.Z.unsafe_rawColors.PREMIUM_PERK_PINK.css,
                    description: E.Z.Messages.PREMIUM_GUILD_USER_FEATURE_BOOST_CRYSTAL
                }, {
                    icon: l.Z,
                    color: n.Z.unsafe_rawColors.PREMIUM_PERK_YELLOW.css,
                    description: E.Z.Messages.PREMIUM_GUILD_USER_FEATURE_SPECIAL_ROLE
                }, {
                    icon: o.Z,
                    description: E.Z.Messages.PREMIUM_GUILD_USER_FEATURE_PROFILE_BADGE
                }, {
                    color: n.Z.unsafe_rawColors.PREMIUM_PERK_BLUE.css,
                    icon: i.Z,
                    description: E.Z.Messages.PREMIUM_GUILD_USER_FEATURE_OTHERS
                }]
            }
        },
        275086: (e, t, r) => {
            r.d(t, {
                c: () => g
            });
            var n = r(785893),
                o = (r(667294), r(882723)),
                i = r(661299),
                a = r(393299),
                c = r(930865),
                l = r(596801),
                u = r(733274),
                s = r(2590),
                f = r(473708),
                p = r(206322),
                d = r.n(p);

            function h(e) {
                var t = e.guild,
                    r = e.banner;
                return (0, n.jsx)("div", {
                    className: d().guildBanner,
                    style: {
                        backgroundImage: "url(".concat(r)
                    },
                    children: (0, n.jsxs)("div", {
                        className: d().guildHeader,
                        children: [(0, n.jsx)(a.Z, {
                            guild: t,
                            isBannerVisible: !0
                        }), (0, n.jsx)(o.Heading, {
                            className: d().guildName,
                            variant: "heading-md/semibold",
                            children: t.toString()
                        }), (0, n.jsx)(i.Z, {
                            className: d().dropdown,
                            open: !1
                        })]
                    })
                })
            }

            function y(e, t) {
                var r = (0, c.nW)(e);
                return t ? f.Z.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_ANIMATED.format({
                    targetLevelOrPlan: r
                }) : f.Z.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_STATIC.format({
                    targetLevelOrPlan: r
                })
            }

            function g(e) {
                var t = e.analyticsLocations,
                    r = e.analyticsLocation,
                    o = e.guild,
                    i = e.isGIF,
                    a = e.banner,
                    p = i ? (0, c._p)(s.oNc.ANIMATED_BANNER) : (0, c._p)(s.oNc.BANNER);
                null != p && (0, l.Z)({
                    analyticsLocations: t,
                    analyticsSourceLocation: r,
                    guild: o,
                    headerProps: {
                        title: f.Z.Messages.GUILD_BANNER_UPSELL_MODAL_TITLE,
                        subtitle: y(p, i),
                        image: (0, n.jsx)(h, {
                            guild: o,
                            banner: a
                        })
                    },
                    perkIntro: f.Z.Messages.GUILD_BANNER_UPSELL_MODAL_PERK_INTRO,
                    perks: i ? (0, u.zC)() : (0, u.XO)()
                })
            }
        },
        596801: (e, t, r) => {
            r.d(t, {
                Z: () => h
            });
            var n = r(785893),
                o = (r(667294), r(882723)),
                i = r(979197),
                a = r(625797),
                c = r(652591),
                l = r(2590);

            function u(e, t, r, n, o, i, a) {
                try {
                    var c = e[i](a),
                        l = c.value
                } catch (e) {
                    r(e);
                    return
                }
                c.done ? t(l) : Promise.resolve(l).then(n, o)
            }

            function s(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = e.apply(t, r);

                        function a(e) {
                            u(i, n, o, a, c, "next", e)
                        }

                        function c(e) {
                            u(i, n, o, a, c, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function f(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function p(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            var d = function(e, t) {
                var r, n, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function c(i) {
                    return function(c) {
                        return function(i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                (n = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        n = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2];
                                            a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e];
                                n = 0
                            } finally {
                                r = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, c])
                    }
                }
            };

            function h(e, t) {
                var u = null != t ? t : "".concat(l.jXE.PREMIUM_GUILD_UPSELL_MODAL);
                null != e.targetBoostedGuildTier && (u += " - Tier ".concat(e.targetBoostedGuildTier));
                c.default.track(l.rMx.OPEN_MODAL, {
                    type: u,
                    location: e.analyticsSourceLocation
                });
                var h = e.openInPopoutEnabled,
                    y = p(e, ["openInPopoutEnabled"]),
                    g = i.Z.getWindowOpen(l.KJ3.CHANNEL_CALL_POPOUT) && null != h && h;
                g && (0, a.Z)(l.KJ3.CHANNEL_CALL_POPOUT);
                var b = g ? o.POPOUT_MODAL_CONTEXT : o.DEFAULT_MODAL_CONTEXT;
                (0, o.openModalLazy)(s((function() {
                    var e, t;
                    return d(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, Promise.all([r.e(40532), r.e(29392), r.e(39685), r.e(47007), r.e(6543), r.e(93364), r.e(27499), r.e(79913), r.e(27764), r.e(64466), r.e(92465), r.e(10675), r.e(73727), r.e(52555), r.e(94302), r.e(82786), r.e(38237)]).then(r.bind(r, 374714))];
                            case 1:
                                e = o.sent(), t = e.default;
                                return [2, function(e) {
                                    return (0, n.jsx)(t, function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var r = null != arguments[t] ? arguments[t] : {},
                                                n = Object.keys(r);
                                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(r, e).enumerable
                                            }))));
                                            n.forEach((function(t) {
                                                f(e, t, r[t])
                                            }))
                                        }
                                        return e
                                    }({}, y, e))
                                }]
                        }
                    }))
                })), {
                    onCloseCallback: function() {
                        c.default.track(l.rMx.MODAL_DISMISSED, {
                            type: u,
                            location: e.analyticsSourceLocation
                        })
                    },
                    contextKey: b
                })
            }
        },
        393299: (e, t, r) => {
            r.d(t, {
                Z: () => D
            });
            var n, o = r(785893),
                i = (r(667294), r(294184)),
                a = r.n(i),
                c = r(202351),
                l = r(882723),
                u = r(491379),
                s = r(591406),
                f = r(859917),
                p = r(784648),
                d = r(2590),
                h = r(476997),
                y = r.n(h);

            function g(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }
            var b, v = (g(n = {}, d.Eu4.NONE, y().iconBackgroundTierNone), g(n, d.Eu4.TIER_1, y().iconBackgroundTierOne), g(n, d.Eu4.TIER_2, y().iconBackgroundTierTwo), g(n, d.Eu4.TIER_3, y().iconBackgroundTierThree), n),
                O = (g(b = {}, d.Eu4.NONE, y().iconTierNone), g(b, d.Eu4.TIER_1, y().iconTierOne), g(b, d.Eu4.TIER_2, y().iconTierTwo),
                    g(b, d.Eu4.TIER_3, y().iconTierThree), b);

            function E(e) {
                var t = e.premiumTier,
                    r = e.iconBackgroundClassName,
                    n = e.iconClassName,
                    i = e.size;
                return (0, o.jsx)(f.Z, {
                    className: a()(r, v[t]),
                    size: i,
                    children: (0, o.jsx)(p.Z, {
                        tier: t,
                        className: a()(n, y().boostedGuildIconGem, O[t])
                    })
                })
            }
            var m = r(21372),
                w = r(473903),
                C = r(206986),
                P = r(521723),
                _ = r(930865),
                j = r(473708),
                x = r(36373),
                R = r.n(x);

            function I(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function M(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function N(e) {
                var t = e.guild,
                    r = e.isBannerVisible,
                    n = e.disableBoostClick,
                    i = (0, c.e7)([w.default, m.ZP], (function() {
                        var e = w.default.getCurrentUser();
                        return m.ZP.isMember(t.id, null == e ? void 0 : e.id)
                    })),
                    a = t.premiumTier,
                    u = t.premiumSubscriberCount;
                if (0 === u && a === d.Eu4.NONE) return null;
                var f = function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        i && !n && (0, s.f)({
                            guildId: t.id,
                            location: {
                                section: d.jXE.GUILD_HEADER,
                                object: d.qAy.BOOST_GEM_ICON
                            }
                        })
                    },
                    p = a === d.Eu4.NONE ? j.Z.Messages.PREMIUM_GUILD_HEADER_BADGE_NO_TIER : _.nW(a),
                    h = (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("div", {
                            className: R().tierTooltipTitle,
                            children: p
                        }), (0, o.jsx)("div", {
                            children: j.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_SUBSCRIBER_COUNT_TOOLTIP.format({
                                subscriberCount: u
                            })
                        })]
                    });
                return (0, o.jsx)("div", {
                    className: R().guildIconContainer,
                    children: (0, o.jsx)(l.Tooltip, {
                        text: h,
                        position: "bottom",
                        "aria-label": null != p ? p : "",
                        children: function(e) {
                            return (0, o.jsx)(l.Clickable, M(function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {},
                                        n = Object.keys(r);
                                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                                    }))));
                                    n.forEach((function(t) {
                                        I(e, t, r[t])
                                    }))
                                }
                                return e
                            }({}, e), {
                                className: R().premiumGuildIcon,
                                onClick: f,
                                children: (0, o.jsx)(E, {
                                    premiumTier: a,
                                    iconBackgroundClassName: r ? R().boostedGuildTierIconBackgroundWithVisibleBanner : null,
                                    iconClassName: r && a !== d.Eu4.TIER_3 ? R().boostedGuildTierMutedIconWithVisibleBanner : null
                                })
                            }))
                        }
                    })
                })
            }

            function S(e) {
                var t = e.guild,
                    r = e.disableColor,
                    n = e.disableBoostClick;
                return (0, u.Z)(t) ? (0, o.jsx)("div", {
                    className: R().guildIconV2Container,
                    children: (0, o.jsx)(P.Z, {
                        guild: t,
                        tooltipPosition: "bottom",
                        tooltipColor: l.Tooltip.Colors.PRIMARY,
                        className: a()(R().guildBadge, I({}, R().disableColor, r)),
                        disableBoostClick: n
                    })
                }) : (0, o.jsx)("div", {
                    className: R().guildIconContainer,
                    children: (0, o.jsx)(C.Z, {
                        guild: t,
                        tooltipPosition: "bottom",
                        tooltipColor: l.Tooltip.Colors.PRIMARY,
                        className: a()(R().guildBadge, I({}, R().disableColor, r))
                    })
                })
            }

            function D(e) {
                var t = e.guild,
                    r = e.isBannerVisible,
                    n = e.disableBoostClick;
                return (0, u.Z)(t) ? (0, o.jsx)(S, {
                    guild: t,
                    disableColor: !1,
                    disableBoostClick: n
                }) : t.hasFeature(d.oNc.VERIFIED) || t.hasFeature(d.oNc.PARTNERED) ? (0, o.jsx)(S, {
                    guild: t,
                    disableColor: !r
                }) : (0, o.jsx)(N, {
                    guild: t,
                    isBannerVisible: r,
                    disableBoostClick: n
                })
            }
        },
        311260: (e, t, r) => {
            r.d(t, {
                $p: () => s,
                PT: () => p,
                U$: () => d,
                Es: () => y,
                kH: () => g,
                AK: () => b,
                Ae: () => v
            });
            var n = r(496486),
                o = r(921431);

            function i(e, t, r, n, o, i, a) {
                try {
                    var c = e[i](a),
                        l = c.value
                } catch (e) {
                    r(e);
                    return
                }
                c.done ? t(l) : Promise.resolve(l).then(n, o)
            }

            function a(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var a = e.apply(t, r);

                        function c(e) {
                            i(a, n, o, c, l, "next", e)
                        }

                        function l(e) {
                            i(a, n, o, c, l, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }
            var c = function(e, t) {
                var r, n, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function c(i) {
                    return function(c) {
                        return function(i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                (n = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        n = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2];
                                            a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e];
                                n = 0
                            } finally {
                                r = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, c])
                    }
                }
            };

            function l(e) {
                return new Promise((function(t) {
                    var r = new FileReader;
                    r.onload = function(e) {
                        var r, n = null === (r = e.target) || void 0 === r ? void 0 : r.result;
                        t("string" == typeof n ? n : "")
                    };
                    r.readAsDataURL(e)
                }))
            }

            function u(e, t, r, n) {
                var o = e.naturalWidth / e.width,
                    i = t.width / 2,
                    a = t.height / 2,
                    c = (e.width / 2 - i - r.x) * o,
                    l = (e.height / 2 - a - r.y) * o,
                    u = t.width * o,
                    s = t.height * o;
                return {
                    x: c,
                    y: l,
                    scaledCropWidth: u,
                    scaledCropHeight: s,
                    canvasWidth: Math.min(u, n.width),
                    canvasHeight: Math.min(s, n.height)
                }
            }

            function s(e, t, r, n, o) {
                return f.apply(this, arguments)
            }

            function f() {
                return (f = a((function(e, t, n, i, a) {
                    var s, f, p, d, h, y, g, b;
                    return c(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                s = u(t, n, i, a), f = s.x, p = s.y, d = s.scaledCropWidth, h = s.scaledCropHeight;
                                return [4, e.arrayBuffer()];
                            case 1:
                                y = c.sent();
                                g = new Worker(new URL(r.p + r.u(92827), r.b));
                                b = new Promise((function(e, t) {
                                    g.onmessage = function(r) {
                                        var n = r.data;
                                        if (n.type === o.u.CROP_GIF_COMPLETE) {
                                            e(l(new Blob([n.result])));
                                            g.terminate()
                                        } else if (n.type === o.u.CROP_GIF_ERROR) {
                                            t(new Error("Error cropping GIF"));
                                            g.terminate()
                                        }
                                    }
                                }));
                                g.postMessage({
                                    type: o.u.CROP_GIF_START,
                                    gif: new Uint8Array(y),
                                    x: 0 | f,
                                    y: 0 | p,
                                    width: 0 | d,
                                    height: 0 | h
                                });
                                return [2, {
                                    result: b,
                                    cancelFn: function() {
                                        return g.terminate()
                                    }
                                }]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function p(e, t, r, n) {
                var o = u(e, t, r, n),
                    i = o.x,
                    a = o.y,
                    c = o.scaledCropWidth,
                    l = o.scaledCropHeight,
                    s = o.canvasWidth,
                    f = o.canvasHeight,
                    p = document.createElement("canvas");
                p.width = s;
                p.height = f;
                var d = p.getContext("2d");
                null != d && d.drawImage(e, i, a, c, l, 0, 0, p.width, p.height);
                return p.toDataURL("image/png")
            }

            function d(e, t, r) {
                return {
                    x: (0, n.clamp)(e, r.left, r.right),
                    y: (0, n.clamp)(t, r.bottom, r.top)
                }
            }

            function h(e, t, r, n) {
                var i = r,
                    a = n;
                if (r > o.vJ) {
                    i = o.vJ;
                    a = n * (o.vJ / r)
                }
                return r / n < e ? {
                    width: i,
                    height: a
                } : {
                    width: i * (t / a),
                    height: t
                }
            }

            function y(e, t, r) {
                switch (e) {
                    case o.pC.AVATAR:
                    case o.pC.AVATAR_DECORATION:
                        return {
                            width: t, height: r
                        };
                    case o.pC.BANNER:
                        return h(o.MY, o.qj, t, r);
                    case o.pC.GUILD_BANNER:
                        return h(o.Ij, o.C5, t, r);
                    case o.pC.VIDEO_BACKGROUND:
                        return h(o.Ff, o.PB, t, r);
                    case o.pC.SCHEDULED_EVENT_IMAGE:
                        return h(o.ut, o.WV, t, r);
                    case o.pC.HOME_HEADER:
                        return h(o.sX, o.SW, t, r)
                }
            }

            function g(e, t, r) {
                var n = {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0
                    },
                    o = e - r.width,
                    i = t - r.height;
                if (0 !== o) {
                    n.left = -Math.abs(o / 2);
                    n.right = o / 2
                }
                if (0 !== i) {
                    n.bottom = -Math.abs(i / 2);
                    n.top = i / 2
                }
                return n
            }

            function b(e, t, r, n) {
                switch (e) {
                    case o.pC.AVATAR:
                    case o.pC.AVATAR_DECORATION:
                        var i = Math.min(t, r);
                        return {
                            width: i, height: i
                        };
                    case o.pC.BANNER:
                        var a = Math.min(t, o.vJ);
                        return {
                            width: a, height: a * (1 / o.MY)
                        };
                    case o.pC.GUILD_BANNER:
                        var c = Math.min(t, o.vJ);
                        return {
                            width: c, height: Math.min(c * (9 / 16), n)
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

            function v(e, t, r) {
                var n = e.naturalWidth / e.naturalHeight,
                    o = t,
                    i = r;
                e.naturalWidth > e.naturalHeight ? o /= n : i *= n;
                var a = {
                    height: o,
                    width: i
                };
                return p(e, {
                    width: e.width,
                    height: e.height
                }, {
                    x: 0,
                    y: 0
                }, a)
            }
        },
        338479: (e, t, r) => {
            r.d(t, {
                Z: () => A
            });
            var n = r(785893),
                o = r(667294),
                i = r(202351),
                a = r(882723),
                c = r(19585),
                l = r(275086),
                u = r(596801),
                s = r(567403),
                f = r(464187),
                p = r(217674),
                d = r(2590),
                h = r(733274),
                y = r(473708),
                g = r(352900),
                b = r.n(g);

            function v(e) {
                var t = e.analyticsSection,
                    r = e.analyticsPage,
                    o = e.isGIF,
                    g = e.banner,
                    v = (0, i.e7)([f.Z], (function() {
                        return f.Z.getGuildId()
                    })),
                    O = (0, i.e7)([s.Z], (function() {
                        return s.Z.getGuild(v)
                    })),
                    E = (0, c.Z)().analyticsLocations;
                if (null == O || O.hasFeature(d.oNc.ANIMATED_BANNER) || !o && O.hasFeature(d.oNc.BANNER)) return null;
                return (0, n.jsxs)("div", {
                    className: b().container,
                    children: [(0, n.jsx)(p.Z, {
                        className: b().guildBoostingIcon
                    }), (0, n.jsx)(a.Text, {
                        color: "header-primary",
                        variant: "text-sm/semibold",
                        children: y.Z.Messages.PREMIUM_GUILD_PREVIEW
                    }), (0, n.jsx)(a.Button, {
                        look: a.Button.Looks.LINK,
                        color: a.Button.Colors.LINK,
                        className: b().subscribeButton,
                        onClick: function() {
                            if (null != O) {
                                var e = {
                                    section: t,
                                    page: r,
                                    object: d.qAy.UPSELL_HEADER
                                };
                                null != g ? (0, l.c)({
                                    analyticsLocations: E,
                                    analyticsLocation: e,
                                    guild: O,
                                    isGIF: o,
                                    banner: g
                                }) : (0, u.Z)({
                                    analyticsLocations: E,
                                    analyticsSourceLocation: e,
                                    guild: O,
                                    perks: o ? (0, h.zC)() : (0, h.XO)()
                                })
                            }
                        },
                        children: y.Z.Messages.PREMIUM_GUILD_BOOST_SERVER
                    })]
                })
            }
            var O = r(153686),
                E = r(294184),
                m = r.n(E),
                w = r(366007),
                C = r(95891),
                P = r(98265),
                _ = r(41717),
                j = r.n(_);

            function x(e) {
                var t = e.text,
                    r = e.textSize,
                    o = void 0 === r ? P.Z.Sizes.SIZE_12 : r,
                    i = e.textColor,
                    a = void 0 === i ? P.Z.Colors.STANDARD : i,
                    c = e.className,
                    l = e.button,
                    u = e.reducedRightPadding,
                    s = void 0 !== u && u;
                return (0, n.jsxs)("div", {
                    className: m()(s ? j().noticeWithoutRightPadding : j().noticeWithRightPadding, c),
                    children: [(0, n.jsxs)("div", {
                        className: j().noticeLeft,
                        children: [(0, n.jsx)(C.Z, {
                            className: j().icon,
                            color: w.JX.PREMIUM_TIER_2
                        }), (0, n.jsx)(P.Z, {
                            className: j().text,
                            size: o,
                            color: a,
                            children: t
                        })]
                    }), l]
                })
            }
            var R = r(455706),
                I = r(473903),
                M = r(652591),
                N = r(116094),
                S = r(921431),
                D = r(203600),
                L = r(917567),
                T = r.n(L);

            function Z(e) {
                var t = e.analyticsSection,
                    r = e.type,
                    l = (0, i.e7)([I.default], (function() {
                        return I.default.getCurrentUser()
                    })),
                    u = N.ZP.canUseAnimatedAvatar(l),
                    s = N.ZP.canUsePremiumProfileCustomization(l),
                    f = r === S.pC.BANNER && s || r === S.pC.AVATAR && u,
                    p = (0, c.Z)(O.Z.PREMIUM_PREVIEW_UPSELL_HEADER).sourceAnalyticsLocations;
                o.useEffect((function() {
                    f || M.default.track(d.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: t,
                        location_stack: p
                    })
                }), [f, t, p]);
                if (f) return null;
                var h = (0, n.jsx)(R.Z, {
                    className: T().getNitroLink,
                    size: a.Button.Sizes.SMALL,
                    look: a.Button.Looks.LINK,
                    color: a.Button.Colors.LINK,
                    subscriptionTier: D.Si.TIER_2,
                    buttonText: y.Z.Messages.PREMIUM_PREVIEW_GET_NITRO.format(),
                    showIcon: !1,
                    premiumModalAnalyticsLocation: {
                        section: t,
                        object: d.qAy.BUTTON_CTA
                    },
                    disableShine: !0
                });
                return (0, n.jsx)(x, {
                    reducedRightPadding: !0,
                    className: T().nitroPreviewUpsell,
                    text: y.Z.Messages.PREMIUM_PREVIEW.format(),
                    textSize: P.Z.Sizes.SIZE_14,
                    textColor: P.Z.Colors.HEADER_PRIMARY,
                    button: h
                })
            }

            function A(e) {
                var t = e.type,
                    r = e.analyticsPage,
                    o = e.analyticsSection,
                    i = e.isGIF,
                    a = e.banner;
                return [S.pC.BANNER, S.pC.AVATAR].includes(t) && i ? (0, n.jsx)(Z, {
                    analyticsSection: o,
                    type: t
                }) : t === S.pC.GUILD_BANNER ? (0, n.jsx)(v, {
                    analyticsSection: o,
                    analyticsPage: r,
                    isGIF: i,
                    banner: a
                }) : null
            }
        },
        521723: (e, t, r) => {
            r.d(t, {
                Z: () => F
            });
            var n = r(785893),
                o = (r(667294),
                    r(294184)),
                i = r.n(o),
                a = r(202351),
                c = r(795308),
                l = r(575945),
                u = r(882723),
                s = r(337509),
                f = r(761673),
                p = r(591406),
                d = r(64234),
                h = r(21372),
                y = r(473903),
                g = r(930865),
                b = r(859917),
                v = r(366007),
                O = r(459308),
                E = r(633878);

            function m(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function w(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function C(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function P(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function _(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function j(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function x(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function R(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function I(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function M(e) {
                var t = e.width,
                    r = void 0 === t ? 10 : t,
                    o = e.height,
                    i = void 0 === o ? 10 : o,
                    a = e.color,
                    c = void 0 === a ? "currentColor" : a,
                    l = I(e, ["width", "height", "color"]);
                return (0, n.jsxs)("svg", R(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            x(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, E.Z)(l)), {
                    width: r,
                    height: i,
                    viewBox: "0 0 17 22",
                    fill: c,
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, n.jsxs)("g", {
                        filter: "url(#filter0_d_1296_1706)",
                        children: [(0, n.jsx)("path", {
                            opacity: "0.55",
                            d: "M8.49999 3.7998L4.85999 7.4398V12.5598L8.49999 16.1998L12.14 12.5598V7.4398L8.49999 3.7998ZM10.32 11.7998L8.49999 13.6265L6.67999 11.8065V8.19314L8.49999 6.37314L10.32 8.19314V11.7998Z",
                            fill: "white"
                        }), (0,
                            n.jsx)("path", {
                            opacity: "0.8",
                            d: "M6.67999 8.19354V11.8069L8.49999 13.6269L10.32 11.8069V8.19354L8.49999 6.37354L6.67999 8.19354Z",
                            fill: "white"
                        }), (0, n.jsx)("path", {
                            d: "M8.5 3.7998V6.37314L10.32 8.19314L12.14 7.4398L8.5 3.7998Z",
                            fill: "white"
                        })]
                    }), (0, n.jsx)("defs", {
                        children: (0, n.jsxs)("filter", {
                            id: "filter0_d_1296_1706",
                            x: "-3.5",
                            y: "-1",
                            width: "24",
                            height: "24",
                            filterUnits: "userSpaceOnUse",
                            "color-interpolation-filters": "sRGB",
                            children: [(0, n.jsx)("feFlood", {
                                "flood-opacity": "0",
                                result: "BackgroundImageFix"
                            }), (0, n.jsx)("feColorMatrix", {
                                in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                            }), (0, n.jsx)("feOffset", {
                                dy: "1"
                            }), (0, n.jsx)("feGaussianBlur", {
                                stdDeviation: "2"
                            }), (0, n.jsx)("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0"
                            }), (0, n.jsx)("feBlend", {
                                mode: "normal",
                                in2: "BackgroundImageFix",
                                result: "effect1_dropShadow_1296_1706"
                            }), (0, n.jsx)("feBlend", {
                                mode: "normal",
                                in: "SourceGraphic",
                                in2: "effect1_dropShadow_1296_1706",
                                result: "shape"
                            })]
                        })
                    })]
                }))
            }
            var N, S = r(690002),
                D = r(128181),
                L = r(2590),
                T = r(473708),
                Z = r(238191),
                A = r.n(Z);

            function U(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function k(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        U(e, t, r[t])
                    }))
                }
                return e
            }

            function B(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }
            var V = (U(N = {}, s.Q.STAFF, {
                IconComponent: S.Z,
                foregroundDarkColor: c.Z.unsafe_rawColors.WHITE_400.css,
                foregroundLightColor: c.Z.unsafe_rawColors.WHITE_400.css,
                backgroundDarkColor: c.Z.unsafe_rawColors.GREEN_360.css,
                backgroundLightColor: c.Z.unsafe_rawColors.GREEN_360.css
            }), U(N, s.Q.VERIFIED_AND_PARTNERED, {
                IconComponent: D.Z,
                foregroundDarkColor: c.Z.unsafe_rawColors.WHITE_400.css,
                foregroundLightColor: c.Z.unsafe_rawColors.WHITE_400.css,
                backgroundDarkColor: c.Z.unsafe_rawColors.GREEN_360.css,
                backgroundLightColor: c.Z.unsafe_rawColors.GREEN_360.css
            }), U(N, s.Q.VERIFIED, {
                IconComponent: D.Z,
                foregroundDarkColor: c.Z.unsafe_rawColors.WHITE_400.css,
                foregroundLightColor: c.Z.unsafe_rawColors.WHITE_400.css,
                backgroundDarkColor: c.Z.unsafe_rawColors.GREEN_360.css,
                backgroundLightColor: c.Z.unsafe_rawColors.GREEN_360.css
            }), U(N, s.Q.PARTNERED, {
                IconComponent: O.Z,
                foregroundDarkColor: c.Z.unsafe_rawColors.WHITE_400.css,
                foregroundLightColor: c.Z.unsafe_rawColors.WHITE_400.css,
                backgroundDarkColor: c.Z.unsafe_rawColors.BRAND_500.css,
                backgroundLightColor: c.Z.unsafe_rawColors.BRAND_500.css
            }), U(N, s.Q.COMMUNITY, {
                IconComponent: function(e) {
                    var t = e.width,
                        r = void 0 === t ? 10 : t,
                        o = e.height,
                        i = void 0 === o ? 10 : o,
                        a = e.color,
                        c = void 0 === a ? "currentColor" : a,
                        l = C(e, ["width", "height", "color"]);
                    return (0, n.jsx)("svg", w(function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(r);
                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable
                            }))));
                            n.forEach((function(t) {
                                m(e, t, r[t])
                            }))
                        }
                        return e
                    }({}, (0, E.Z)(l)), {
                        width: r,
                        height: i,
                        viewBox: "0 0 10 10",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, n.jsx)("path", {
                            d: "M4.16667 8.33333V5.83333H5.83333V8.33333H7.91667V5H9.16667L5 1.25L0.833333 5H2.08333V8.33333H4.16667Z",
                            fill: c
                        })
                    }))
                },
                foregroundDarkColor: c.Z.unsafe_rawColors.PRIMARY_500.css,
                foregroundLightColor: c.Z.unsafe_rawColors.WHITE_400.css,
                backgroundDarkColor: c.Z.unsafe_rawColors.WHITE_400.css,
                backgroundLightColor: c.Z.unsafe_rawColors.PRIMARY_500.css,
                premiumBackgroundColor: v.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
                premiumForegroundColor: c.Z.unsafe_rawColors.WHITE_400.css
            }), U(N, s.Q.DISCOVERABLE, {
                IconComponent: function(e) {
                    var t = e.width,
                        r = void 0 === t ? 10 : t,
                        o = e.height,
                        i = void 0 === o ? 10 : o,
                        a = e.color,
                        c = void 0 === a ? "currentColor" : a,
                        l = j(e, ["width", "height", "color"]);
                    return (0, n.jsxs)("svg", _(function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(r);
                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable
                            }))));
                            n.forEach((function(t) {
                                P(e, t, r[t])
                            }))
                        }
                        return e
                    }({}, (0, E.Z)(l)), {
                        width: r,
                        height: i,
                        viewBox: "0 0 10 10",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, n.jsx)("g", {
                            clipPath: "url(#clip0_1242_1450)",
                            children: (0,
                                n.jsx)("path", {
                                d: "M5 0.833252C2.7 0.833252 0.833333 2.69992 0.833333 4.99992C0.833333 7.29992 2.7 9.16659 5 9.16659C7.3 9.16659 9.16667 7.29992 9.16667 4.99992C9.16667 2.69992 7.3 0.833252 5 0.833252ZM4.58333 8.30409C2.9375 8.09992 1.66667 6.69992 1.66667 4.99992C1.66667 4.74159 1.7 4.49575 1.75417 4.25409L3.75 6.24992V6.66659C3.75 7.12492 4.125 7.49992 4.58333 7.49992V8.30409ZM7.45833 7.24575C7.35 6.90825 7.04167 6.66659 6.66667 6.66659H6.25V5.41659C6.25 5.18742 6.0625 4.99992 5.83333 4.99992H3.33333V4.16659H4.16667C4.39583 4.16659 4.58333 3.97909 4.58333 3.74992V2.91659H5.41667C5.875 2.91659 6.25 2.54159 6.25 2.08325V1.91242C7.47083 2.40825 8.33333 3.60409 8.33333 4.99992C8.33333 5.86659 8 6.65409 7.45833 7.24575Z",
                                fill: c
                            })
                        }), (0, n.jsx)("defs", {
                            children: (0, n.jsx)("clipPath", {
                                id: "clip0_1242_1450",
                                children: (0, n.jsx)("rect", {
                                    width: "10",
                                    height: "10",
                                    fill: "white"
                                })
                            })
                        })]
                    }))
                },
                foregroundDarkColor: c.Z.unsafe_rawColors.PRIMARY_500.css,
                foregroundLightColor: c.Z.unsafe_rawColors.WHITE_400.css,
                backgroundDarkColor: c.Z.unsafe_rawColors.WHITE_400.css,
                backgroundLightColor: c.Z.unsafe_rawColors.PRIMARY_500.css,
                premiumBackgroundColor: v.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
                premiumForegroundColor: c.Z.unsafe_rawColors.WHITE_400.css
            }), U(N, s.Q.NONE, {}), N);

            function G(e) {
                var t = e.guildTraits;
                return (0, n.jsxs)("div", {
                    className: A().tooltipPremiumFooterContainer,
                    children: [(0, n.jsxs)("div", {
                        className: i()(A().tooltipPremiumFooterSegment, A().tooltipPremiumFooterTierSegment),
                        children: [(0, n.jsx)(M, {
                            width: 18,
                            height: 18,
                            className: A().gemIcon
                        }), (0, n.jsx)(u.Text, {
                            variant: "text-xs/semibold",
                            color: "always-white",
                            children: g.nW(t.premiumTier)
                        })]
                    }), (0, n.jsx)("div", {
                        className: i()(A().tooltipPremiumFooterSegment),
                        children: (0, n.jsx)(u.Text, {
                            variant: "text-xs/semibold",
                            color: "always-white",
                            children: T.Z.Messages.SERVER_BADGE_PREMIUM_FOOTER_BOOST_COUNT.format({
                                count: t.premiumSubscriberCount
                            })
                        })
                    })]
                })
            }

            function H(e) {
                var t = e.badgeType,
                    r = e.guildTraits,
                    o = function(e, t) {
                        var r = t === f.PZ.PUBLIC ? T.Z.Messages.SERVER_BADGE_DESCRIPTION_ANYONE_CAN_JOIN : T.Z.Messages.SERVER_BADGE_DESCRIPTION_INVITE_ONLY;
                        switch (e) {
                            case s.Q.STAFF:
                                return {
                                    tooltipTitle: T.Z.Messages.INTERNAL_EMPLOYEE_ONLY, tooltipSubtitle: T.Z.Messages.INTERNAL_EMPLOYEE_ONLY, tooltipDescription: T.Z.Messages.INTERNAL_EMPLOYEE_ONLY
                                };
                            case s.Q.VERIFIED:
                                return {
                                    tooltipTitle: T.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipSubtitle: T.Z.Messages.GUILD_VERIFIED, tooltipDescription: r
                                };
                            case s.Q.PARTNERED:
                                return {
                                    tooltipTitle: T.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipSubtitle: T.Z.Messages.GUILD_PARTNERED, tooltipDescription: r
                                };
                            case s.Q.VERIFIED_AND_PARTNERED:
                                return {
                                    tooltipTitle: T.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipSubtitle: T.Z.Messages.GUILD_VERIFIED_AND_PARTNERED, tooltipDescription: r
                                };
                            case s.Q.COMMUNITY:
                                return {
                                    tooltipTitle: T.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipDescription: T.Z.Messages.SERVER_BADGE_DESCRIPTION_INVITE_ONLY
                                };
                            case s.Q.DISCOVERABLE:
                                return {
                                    tooltipTitle: T.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipDescription: T.Z.Messages.SERVER_BADGE_DESCRIPTION_ANYONE_CAN_JOIN
                                };
                            default:
                                return {
                                    tooltipTitle: T.Z.Messages.SERVER_BADGE_TITLE_UNKNOWN
                                }
                        }
                    }(t, r.visibility),
                    i = o.tooltipTitle,
                    a = o.tooltipSubtitle,
                    c = o.tooltipDescription;
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)("div", {
                        className: A().tooltipBodyContainer,
                        children: [(0, n.jsx)(u.Text, {
                            color: "interactive-active",
                            variant: "text-xs/bold",
                            children: i
                        }), null != a ? (0, n.jsx)(u.Text, {
                            color: "text-muted",
                            variant: "text-xs/medium",
                            children: a
                        }) : null, null != c ? (0, n.jsx)(u.Text, {
                            color: "text-muted",
                            variant: "text-xs/medium",
                            children: c
                        }) : null]
                    }), r.premium ? (0, n.jsx)(G, {
                        guildTraits: r
                    }) : null]
                })
            }

            function F(e) {
                var t = e.guild,
                    r = e.tooltipColor,
                    o = void 0 === r ? u.Tooltip.Colors.BRAND : r,
                    i = e.tooltipPosition,
                    c = e.className,
                    g = e.flowerStarClassName,
                    v = e.iconClassName,
                    O = e.badgeStrokeColor,
                    E = e.badgeColor,
                    m = e.size,
                    w = void 0 === m ? 16 : m,
                    C = e.disableBoostClick,
                    P = e["aria-label"],
                    _ = void 0 !== P && P,
                    j = (0,
                        a.e7)([y.default, h.ZP], (function() {
                        var e = y.default.getCurrentUser();
                        return h.ZP.isMember(null == t ? void 0 : t.id, null == e ? void 0 : e.id)
                    })),
                    x = (0, a.e7)([d.Z], (function() {
                        return d.Z.theme
                    })),
                    R = (0, f.XX)(t),
                    I = (0, s.i)(R);
                if (I === s.Q.NONE) return null;
                var M, N, S = V[I],
                    D = S.IconComponent,
                    T = S.backgroundDarkColor,
                    Z = S.backgroundLightColor,
                    U = S.foregroundDarkColor,
                    G = S.foregroundLightColor,
                    F = S.premiumBackgroundColor,
                    z = S.premiumForegroundColor;
                if (null == D) return null;
                if (R.premium) {
                    M = z;
                    N = F
                }
                var W = (0, l.wj)(x) ? U : G,
                    Y = (0, l.wj)(x) ? T : Z;
                M = null != M ? M : W;
                N = null != N ? N : Y;
                var K = function(e) {
                    if (R.premium && j && !C) {
                        e.stopPropagation();
                        e.preventDefault();
                        (0, p.f)({
                            guildId: t.id,
                            location: {
                                section: L.jXE.GUILD_HEADER,
                                object: L.qAy.BOOST_GEM_ICON
                            }
                        })
                    }
                };
                return (0, n.jsx)(u.Tooltip, {
                    color: o,
                    position: i,
                    "aria-label": _,
                    text: (0, n.jsx)(H, {
                        badgeType: I,
                        guildTraits: R
                    }),
                    tooltipContentClassName: A().tooltipRemovePadding,
                    children: function(e) {
                        return (0, n.jsx)(u.Clickable, {
                            onClick: K,
                            children: (0, n.jsx)(b.Z, B(k({}, e), {
                                className: c,
                                flowerStarClassName: g,
                                color: null != N ? N : E,
                                stroke: O,
                                size: w,
                                children: (0, n.jsx)(D, {
                                    className: v,
                                    color: M
                                })
                            }))
                        })
                    }
                })
            }
        },
        805457: (e, t, r) => {
            r.d(t, {
                Z: () => l
            });
            var n = r(785893),
                o = (r(667294), r(633878));

            function i(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function a(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function c(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function l(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    l = e.height,
                    u = void 0 === l ? 24 : l,
                    s = c(e, ["width", "height"]);
                return (0, n.jsxs)("svg", a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            i(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(s)), {
                    height: u,
                    width: r,
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("path", {
                        d: "m6.3599 4.33.41.84c.02245.04336.03052.09274.02304.14099s-.03013.09287-.06465.1274c-.03453.03453-.07915.05717-.1274.06465s-.09763-.00059-.14099-.02304l-.84-.41c-.03119-.01506-.06537-.02288-.1-.02288s-.06882.00782-.1.02288l-.84.41c-.04336.02245-.09274.03052-.141.02304-.04825-.00748-.09287-.03012-.12739-.06465-.03453-.03453-.05717-.07915-.06465-.1274s.00058-.09763.02304-.14099l.41-.84c.01505-.03119.02287-.06537.02287-.1s-.00782-.06881-.02287-.1l-.41-.84c-.01585-.04253-.01876-.08879-.00836-.13297.01039-.04417.03362-.08429.06676-.11529s.07471-.05151.11948-.05894c.04477-.00742.09074-.00144.13212.0172l.84.41c.03118.01506.06537.02288.1.02288s.06881-.00782.1-.02288l.84-.41c.04336-.02245.09274-.03052.14099-.02304s.09287.03012.1274.06465c.03452.03453.05717.07914.06465.1274.00748.04825-.00059.09763-.02304.14099l-.41.84c-.01211.02846-.01834.05907-.01834.09s.00623.06154.01834.09z",
                        fill: "#ffd836"
                    }), (0, n.jsx)("path", {
                        d: "m12 2.70001-5.45996 5.46v7.67999l5.45996 5.46 5.46-5.46v-7.67999zm2.73 11.99999-2.73 2.74-2.72996-2.73v-5.41999l2.72996-2.73 2.73 2.73z",
                        fill: "#ff73fa"
                    }), (0, n.jsx)("path", {
                        d: "m12 2.70001v3.86l2.73 2.73 2.73-1.13z",
                        fill: "#ffc0ff"
                    }), (0, n.jsx)("path", {
                        d: "m9.27004 14.71-2.73 1.13 5.45996 5.46v-3.86z",
                        fill: "#e655d4"
                    }), (0, n.jsxs)("g", {
                        fill: "#d4e4ff",
                        children: [(0, n.jsx)("path", {
                            d: "m16.2199 17.7h.01c.243 0 .44-.197.44-.44v-.89c0-.243-.197-.44-.44-.44h-.01c-.243 0-.44.197-.44.44v.89c0 .243.197.44.44.44z"
                        }), (0, n.jsx)("path", {
                            d: "m16.2199 21.25h.01c.243 0 .44-.197.44-.44v-.89c0-.243-.197-.44-.44-.44h-.01c-.243 0-.44.197-.44.44v.89c0 .243.197.44.44.44z"
                        }), (0, n.jsx)("path", {
                            d: "m15.3401 18.59v-.01c0-.243-.197-.44-.44-.44h-.89c-.243 0-.44.197-.44.44v.01c0 .243.197.44.44.44h.89c.243 0 .44-.197.44-.44z"
                        }), (0, n.jsx)("path", {
                            d: "m18.8799 18.59v-.01c0-.243-.197-.44-.44-.44h-.89c-.243 0-.44.197-.44.44v.01c0 .243.197.44.44.44h.89c.243 0 .44-.197.44-.44z"
                        })]
                    }), (0, n.jsx)("path", {
                        d: "m9.27002 9.29v5.42l2.72998 2.73 2.73-2.73v-5.42l-2.73-2.73z",
                        fill: "#ffdef9"
                    }), (0, n.jsx)("path", {
                        d: "m14.72 9.28998v.01l-5.42997 5.43002-.01-.01v-1.47l4.69997-4.71002z",
                        fill: "#fff"
                    }), (0, n.jsx)("path", {
                        d: "m14.7201 11.34v1.5l-3.66 3.66-.75-.75z",
                        fill: "#fff"
                    })]
                }))
            }
        },
        901644: (e, t, r) => {
            r.d(t, {
                Z: () => l
            });
            var n = r(785893),
                o = (r(667294), r(633878));

            function i(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function a(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function c(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function l(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    l = e.height,
                    u = void 0 === l ? 24 : l,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    p = e.foreground,
                    d = c(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            i(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(d)), {
                    width: r,
                    height: u,
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: f,
                        className: p,
                        d: "M12 2C6.477 2 2 6.477 2 12C2 17.522 6.477 22 12 22C17.523 22 22 17.522 22 12C22 6.477 17.522 2 12 2ZM16.293 6.293L17.707 7.706L16.414 9L17.707 10.293L16.293 11.706L13.586 9L16.293 6.293ZM6.293 7.707L7.707 6.294L10.414 9L7.707 11.707L6.293 10.294L7.586 9L6.293 7.707ZM18 14C18 16.617 15.14 19 12 19C8.86 19 6 16.617 6 14V13H18V14Z"
                    })
                }))
            }
        },
        816240: (e, t, r) => {
            r.d(t, {
                Z: () => l
            });
            var n = r(785893),
                o = (r(667294), r(633878));

            function i(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function a(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function c(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function l(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    l = e.height,
                    u = void 0 === l ? 24 : l,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    p = e.foreground,
                    d = c(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            i(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(d)), {
                    width: r,
                    height: u,
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        className: p,
                        d: "M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM10 8C10 6.8952 9.1032 6 8 6C6.8944 6 6 6.8952 6 8C6 9.1056 6.8944 10 8 10C9.1032 10 10 9.1056 10 8ZM9 14L6 18H18L15 11L11 16L9 14Z",
                        fill: f
                    })
                }))
            }
        },
        855595: (e, t, r) => {
            r.d(t, {
                Z: () => l
            });
            var n = r(785893),
                o = (r(667294), r(633878));

            function i(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function a(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function c(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function l(e) {
                var t = e.width,
                    r = void 0 === t ? 20 : t,
                    l = e.height,
                    u = void 0 === l ? 23 : l,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    p = e.foreground,
                    d = c(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            i(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(d)), {
                    width: r,
                    height: u,
                    viewBox: "0 0 20 23",
                    children: (0, n.jsx)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: (0, n.jsx)("path", {
                            className: p,
                            fill: f,
                            d: "M19.487 5.126L10.487 0.126C10.184 -0.042 9.81798 -0.042 9.51498 0.126L0.514977 5.126C0.197977 5.302 0.000976562 5.636 0.000976562 5.999C0.000976562 6.693 0.114977 22.999 10.001 22.999C19.887 22.999 20.001 6.693 20.001 5.999C20.001 5.636 19.804 5.302 19.487 5.126ZM10.001 5.999C11.382 5.999 12.501 7.118 12.501 8.499C12.501 9.88 11.382 10.999 10.001 10.999C8.61998 10.999 7.50098 9.88 7.50098 8.499C7.50098 7.118 8.61998 5.999 10.001 5.999ZM6.25098 16C6.25098 13.699 7.69998 12.25 10.001 12.25C12.302 12.25 13.751 13.699 13.751 16H6.25098Z"
                        })
                    })
                }))
            }
        },
        575562: (e, t, r) => {
            r.d(t, {
                Z: () => l
            });
            var n = r(785893),
                o = (r(667294), r(633878));

            function i(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function a(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function c(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function l(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    l = e.height,
                    u = void 0 === l ? 24 : l,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    p = e.foreground,
                    d = c(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            i(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(d)), {
                    width: r,
                    height: u,
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: f,
                        className: p,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M17 6V6.999H7C5.896 6.999 5 7.895 5 8.999V16H3C1.895 16 1 15.104 1 14V6C1 4.896 1.895 4 3 4H15C16.104 4 17 4.896 17 6ZM7 10.999C7 9.89502 7.896 8.99902 9 8.99902H21C22.104 8.99902 23 9.89502 23 10.999V18.999C23 20.103 22.104 20.999 21 20.999H9C7.896 20.999 7 20.103 7 18.999V10.999ZM11.828 14.462L9 18.999H21L17.023 12.618L13.85 17.706L11.828 14.462Z"
                    })
                }))
            }
        },
        71236: (e, t, r) => {
            r.d(t, {
                Z: () => l
            });
            var n = r(785893),
                o = (r(667294), r(633878));

            function i(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function a(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function c(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function l(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    l = e.height,
                    u = void 0 === l ? 24 : l,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    p = e.foreground,
                    d = c(e, ["width", "height", "color", "foreground"]);
                return (0,
                    n.jsx)("svg", a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            i(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(d)), {
                    width: r,
                    height: u,
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: f,
                        className: p,
                        d: "M21.924 8.61789C21.77 8.24489 21.404 8.00089 21 8.00089H15.618L12.894 2.55389C12.555 1.87689 11.444 1.87689 11.105 2.55389L8.38199 8.00089H2.99999C2.59599 8.00089 2.22999 8.24489 2.07599 8.61789C1.92199 8.99089 2.00699 9.42289 2.29299 9.70789L6.87699 14.2919L5.03899 20.7269C4.92399 21.1299 5.07199 21.5619 5.40999 21.8089C5.74999 22.0569 6.20699 22.0659 6.55399 21.8329L12 18.2029L17.445 21.8329C17.613 21.9449 17.806 22.0009 18 22.0009C18.207 22.0009 18.414 21.9369 18.59 21.8089C18.928 21.5619 19.076 21.1299 18.961 20.7269L17.123 14.2919L21.707 9.70789C21.993 9.42289 22.078 8.99089 21.924 8.61789Z"
                    })
                }))
            }
        },
        521798: (e, t, r) => {
            r.d(t, {
                Z: () => p
            });
            var n = r(785893),
                o = (r(667294), r(294184)),
                i = r.n(o),
                a = r(633878),
                c = r(658695),
                l = r.n(c);

            function u(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function s(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function f(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function p(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    c = void 0 === o ? 24 : o,
                    p = e.color,
                    d = void 0 === p ? "currentColor" : p,
                    h = e.winking,
                    y = void 0 !== h && h,
                    g = e.foreground,
                    b = f(e, ["width", "height", "color", "winking", "foreground"]);
                return (0, n.jsxs)("svg", s(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            u(e, t, r[t])
                        }))
                    }
                    return e
                }({
                    width: r,
                    height: c
                }, (0, a.Z)(b)), {
                    viewBox: "0 0 20 20",
                    children: [(0, n.jsx)("path", {
                        fill: d,
                        className: i()(g, u({}, l().hidden, y)),
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M12.0002 0.662583V5.40204C12.0002 6.83974 13.1605 7.99981 14.5986 7.99981H19.3393C19.9245 7.99981 20.222 7.29584 19.8055 6.8794L13.1209 0.196569C12.7043 -0.219868 12.0002 0.0676718 12.0002 0.662583ZM14.5759 10.0282C12.0336 10.0282 9.96986 7.96441 9.96986 5.42209V0.0583083H1.99397C0.897287 0.0583083 0 0.955595 0 2.05228V18.0041C0 19.1007 0.897287 19.998 1.99397 19.998H17.9457C19.0424 19.998 19.9397 19.1007 19.9397 18.0041V10.0282H14.5759ZM11.9998 12.2201C11.9998 13.3245 11.1046 14.2198 10.0002 14.2198C8.8958 14.2198 8.00052 13.3245 8.00052 12.2201H6.66742C6.66742 14.0607 8.15955 15.5529 10.0002 15.5529C11.8408 15.5529 13.3329 14.0607 13.3329 12.2201H11.9998ZM4.44559 13.331C4.44559 13.9446 3.94821 14.442 3.33467 14.442C2.72112 14.442 2.22375 13.9446 2.22375 13.331C2.22375 12.7175 2.72112 12.2201 3.33467 12.2201C3.94821 12.2201 4.44559 12.7175 4.44559 13.331ZM16.6657 14.442C17.2793 14.442 17.7766 13.9446 17.7766 13.331C17.7766 12.7175 17.2793 12.2201 16.6657 12.2201C16.0522 12.2201 15.5548 12.7175 15.5548 13.331C15.5548 13.9446 16.0522 14.442 16.6657 14.442Z"
                    }), (0, n.jsx)("path", {
                        fill: d,
                        className: i()(g, u({}, l().hidden, !y)),
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M12.0002 0.662583V5.40204C12.0002 6.83974 13.1605 7.99981 14.5986 7.99981H19.3393C19.9245 7.99981 20.222 7.29584 19.8055 6.8794L13.1209 0.196569C12.7043 -0.219868 12.0002 0.0676718 12.0002 0.662583ZM14.5759 10.0282C12.0336 10.0282 9.96986 7.96441 9.96986 5.42209V0.0583083H1.99397C0.897287 0.0583083 0 0.955595 0 2.05228V18.0041C0 19.1007 0.897287 19.998 1.99397 19.998H17.9457C19.0424 19.998 19.9397 19.1007 19.9397 18.0041V10.0282H14.5759ZM12 13H11.2H8.8H8C8 14.1046 8.89543 15 10 15C11.1046 15 12 14.1046 12 13ZM17.7766 13.331C17.7766 13.9446 17.2793 14.442 16.6657 14.442C16.0522 14.442 15.5548 13.9446 15.5548 13.331C15.5548 12.7175 16.0522 12.2201 16.6657 12.2201C17.2793 12.2201 17.7766 12.7175 17.7766 13.331ZM2 12.2361L2.53532 11L5.62492 12.7835C5.79161 12.8797 5.79161 13.1203 5.62492 13.2165L2.53532 15L2 13.7639L3.32339 13L2 12.2361Z"
                    })]
                }))
            }
        }
    }
]);