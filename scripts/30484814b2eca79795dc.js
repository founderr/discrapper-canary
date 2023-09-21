"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [50526], {
        652411: (e, t, n) => {
            n.d(t, {
                O_: () => E,
                qA: () => f,
                Ji: () => V,
                uR: () => F
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

            function h(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function n() {
                    this.constructor = e
                }
                d(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }
            var p = function() {
                return p = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }, p.apply(this, arguments)
            };
            var v = function(e) {
                    this.value = e
                },
                y = function() {
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
                    return h(t, e), t.prototype.update = function(t) {
                        e.prototype.update.call(this, t), this._z.update(t)
                    }, t.prototype.previewUpdate = function(t) {
                        var n = e.prototype.previewUpdate.call(this, t);
                        return p(p({}, n), {
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
                }(y),
                w = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return h(t, e), t.prototype.update = function() {}, t.prototype.previewUpdate = function() {
                        return this.value
                    }, t
                }(v),
                g = function(e) {
                    function t(t, n) {
                        var r = e.call(this, t) || this;
                        return r.addValue = n, r
                    }
                    return h(t, e), t.prototype.update = function(e) {
                        this.value = this.previewUpdate(e)
                    }, t.prototype.previewUpdate = function(e) {
                        return this.value + this.addValue * e
                    }, t
                }(v),
                x = function(e) {
                    function t(t, n, r, i, o, a) {
                        var u = e.call(this, t) || this;
                        u.min = n, u.max = r, u.duration = i;
                        var l = u.value / (u.max - u.min) * u.duration,
                            c = isNaN(l) ? 0 : l;
                        return u.timePassed = c < 0 ? u.duration - c : c, u.directionMultiplier = o, u.easingFunction = a, u
                    }
                    return h(t, e), t.prototype.update = function(e) {
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
                }(v);

            function b(e, t) {
                return e === t ? e : Math.random() * (t - e + 1) + e
            }

            function C(e) {
                var t = Math.floor(b(0, e.length - 1));
                return [e[t], t]
            }

            function z(e, t) {
                return C([e, t])[0]
            }

            function _(e) {
                return "number" == typeof e ? {
                    x: e,
                    y: e
                } : e
            }

            function O(e) {
                return "number" == typeof e ? {
                    x: e,
                    y: e,
                    z: e
                } : e
            }

            function R(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            return new w(e.value);
                        case "static-random":
                            return new w(b(e.minValue, e.maxValue));
                        case "linear":
                            return new g(e.value, e.addValue);
                        case "linear-random":
                            return new g(b(e.minValue, e.maxValue), b(e.minAddValue, e.maxAddValue));
                        case "oscillating":
                            return new x(e.value, e.start, e.final, e.duration, e.direction, e.easingFunction);
                        case "oscillating-random":
                            return new x(b(e.minValue, e.maxValue), b(e.minStart, e.maxStart), b(e.minFinal, e.maxFinal), b(e.minDuration, e.maxDuration), z(e.minDirection, e.maxDirection), C(e.easingFunctions)[0])
                    }
                }(p(p({}, e), {
                    valueType: "number"
                }))
            }

            function k(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            var t = _(e.value);
                            return new y(new w(t.x), new w(t.y));
                        case "static-random":
                            var n = _(e.minValue),
                                r = _(e.maxValue);
                            return new y(new w(b(n.x, r.x)), new w(b(n.y, r.y)));
                        case "linear":
                            t = _(e.value);
                            var i = _(e.addValue);
                            return new y(new g(t.x, i.x), new g(t.y, i.y));
                        case "linear-random":
                            n = _(e.minValue), r = _(e.maxValue);
                            var o = _(e.minAddValue),
                                a = _(e.maxAddValue);
                            return new y(new g(b(n.x, r.x), b(o.x, a.x)), new g(b(n.y, r.y), b(o.x, a.x)));
                        case "oscillating":
                            t = _(e.value);
                            var u = _(e.start),
                                l = _(e.final),
                                c = _(e.duration),
                                s = _(e.direction);
                            return new y(new x(t.x, u.x, l.x, c.x, s.x, e.easingFunction), new x(t.y, u.y, l.y, c.x, s.y, e.easingFunction));
                        case "oscillating-random":
                            n = _(e.minValue), r = _(e.maxValue);
                            var f = _(e.minStart),
                                d = _(e.maxStart),
                                h = _(e.minFinal),
                                p = _(e.maxFinal),
                                v = _(e.minDuration),
                                m = _(e.maxDuration),
                                O = _(e.minDirection),
                                R = _(e.maxDirection);
                            return new y(new x(b(n.x, r.x), b(f.x, d.x), b(h.x, p.x), b(v.x, m.x), z(O.x, R.x), C(e.easingFunctions)[0]), new x(b(n.y, r.y), b(f.y, d.y), b(h.y, p.y), b(v.y, m.y), z(O.y, R.y), C(e.easingFunctions)[0]))
                    }
                }(p(p({}, e), {
                    valueType: "Vector2"
                }))
            }

            function S(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            var t = O(e.value);
                            return new m(new w(t.x), new w(t.y), new w(t.z));
                        case "static-random":
                            var n = O(e.minValue),
                                r = O(e.maxValue);
                            return new m(new w(b(n.x, r.x)), new w(b(n.y, r.y)), new w(b(n.z, r.z)));
                        case "linear":
                            t = O(e.value);
                            var i = O(e.addValue);
                            return new m(new g(t.x, i.x), new g(t.y, i.y), new g(t.z, i.z));
                        case "linear-random":
                            n = O(e.minValue), r = O(e.maxValue);
                            var o = O(e.minAddValue),
                                a = O(e.maxAddValue);
                            return new m(new g(b(n.x, r.x), b(o.x, a.x)), new g(b(n.y, r.y), b(o.y, a.y)), new g(b(n.z, r.z), b(o.z, a.z)));
                        case "oscillating":
                            t = O(e.value);
                            var u = O(e.start),
                                l = O(e.final),
                                c = O(e.duration),
                                s = O(e.direction);
                            return new m(new x(t.x, u.x, l.x, c.x, s.x, e.easingFunction), new x(t.y, u.y, l.y, c.z, s.y, e.easingFunction), new x(t.z, u.z, l.z, c.z, s.z, e.easingFunction));
                        case "oscillating-random":
                            n = O(e.minValue), r = O(e.maxValue);
                            var f = O(e.minStart),
                                d = O(e.maxStart),
                                h = O(e.minFinal),
                                p = O(e.maxFinal),
                                v = O(e.minDuration),
                                y = O(e.maxDuration),
                                _ = O(e.minDirection),
                                R = O(e.maxDirection);
                            return new m(new x(b(n.x, r.x), b(f.x, d.x), b(h.x, p.x), b(v.x, y.x), z(_.x, R.x), C(e.easingFunctions)[0]), new x(b(n.y, r.y), b(f.y, d.y), b(h.y, p.y), b(v.y, y.y), z(_.y, R.y), C(e.easingFunctions)[0]), new x(b(n.z, r.z), b(f.z, d.z), b(h.z, p.z), b(v.z, y.z), z(_.z, R.z), C(e.easingFunctions)[0]))
                    }
                }(p(p({}, e), {
                    valueType: "Vector3"
                }))
            }

            function P(e, t, n, r, i) {
                var o = function(e, t) {
                        return p(p({
                            id: t
                        }, s), e)
                    }(t, e),
                    a = k(o.size),
                    u = function(e, t) {
                        if (null != e) {
                            var n = t.sprites.findIndex((function(t) {
                                return n = t, "string" == typeof(r = e) ? n.src === r && n.colorize : n.src === r.src && n.colorize === r.colorize;
                                var n, r
                            }));
                            if (-1 !== n) return [e, n]
                        }
                        return C(t.sprites)
                    }(r, n),
                    l = u[0],
                    f = u[1],
                    d = function(e, t, n) {
                        if (! function(e) {
                                return "string" == typeof e || e.colorize
                            }(e)) return 0;
                        var r = null != t ? n.colors.findIndex((function(e) {
                            return e === t
                        })) : -1;
                        return -1 !== r ? r : Math.floor(b(0, n.colors.length - 1))
                    }(null != r ? r : l, i, n);
                return new c({
                    id: e,
                    position: k(o.position),
                    velocity: k(o.velocity),
                    rotation: S(o.rotation),
                    dragCoefficient: k(o.dragCoefficient),
                    size: a,
                    opacity: R(o.opacity),
                    spriteX: d * n.spriteWidth + 2 * d,
                    spriteY: f * n.spriteHeight + 2 * f,
                    spriteWidth: n.spriteWidth,
                    spriteHeight: n.spriteHeight
                })
            }
            var E = r.forwardRef((function(e, t) {
                var o = e.className,
                    a = e.environment,
                    l = e.onClick,
                    c = e.onMouseDown,
                    s = e.onMouseMove,
                    f = e.onMouseUp,
                    d = e.onBeforeRender,
                    h = e.onAfterRender,
                    v = function(e, t) {
                        var n = {};
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var i = 0;
                            for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
                        }
                        return n
                    }(e, ["className", "environment", "onClick", "onMouseDown", "onMouseMove", "onMouseUp", "onBeforeRender", "onAfterRender"]),
                    y = r.useRef(null),
                    m = r.useRef(new Map),
                    w = r.useRef(null),
                    g = r.useRef(0),
                    x = r.useRef(0),
                    b = r.useCallback((function() {
                        var e = y.current;
                        if (null != e) {
                            var t = e.getContext("2d");
                            if (null != t) {
                                t.clearRect(0, 0, e.width, e.height), null == d || d(t), m.current.forEach((function(n, r) {
                                    var i = n.confetti,
                                        o = n.spriteCanvas;
                                    i.update(a), i.draw(o, t), i.shouldDestroy(e, a) && m.current.delete(r)
                                })), null == h || h(t), m.current.size > 0 ? w.current = window.requestAnimationFrame(b) : (t.clearRect(0, 0, e.width, e.height), w.current = null);
                                var n = Date.now();
                                0 !== g.current && (x.current = 1e3 / (n - g.current)), g.current = n
                            }
                        }
                    }), [a, h, d]);
                r.useEffect((function() {
                    null != w.current && (window.cancelAnimationFrame(w.current), w.current = window.requestAnimationFrame(b))
                }), [b]);
                var C = r.useCallback((function(e, t) {
                        m.current.set(e.id, {
                            confetti: e,
                            spriteCanvas: t
                        }), null == w.current && b()
                    }), [b]),
                    z = r.useCallback((function(e, t, n, r, o) {
                        var a, u = P(null !== (a = e.id) && void 0 !== a ? a : (0, i.v4)(), e, n, r, o);
                        return C(u, t), u
                    }), [C]),
                    _ = r.useCallback((function(e) {
                        m.current.delete(e)
                    }), []),
                    O = r.useCallback((function() {
                        return m.current.clear()
                    }), []),
                    R = r.useCallback((function() {
                        return y.current
                    }), []);
                r.useImperativeHandle(t, (function() {
                    return {
                        createConfetti: z,
                        addConfetti: C,
                        deleteConfetti: _,
                        clearConfetti: O,
                        getCanvas: R
                    }
                }), [z, C, _, O, R]);
                var k = r.useCallback((function(e, t) {
                        var n, r, i = t.clickHandler,
                            o = t.mouseHandler;
                        if (null != i || null != o) {
                            var l = null === (n = y.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                            if (null != l) {
                                var c = function(e, t) {
                                    if (null == t) throw new Error("element should not be null");
                                    var n = t.getBoundingClientRect();
                                    return {
                                        x: e.clientX - n.left,
                                        y: e.clientY - n.top
                                    }
                                }(e, y.current);
                                if (u(c, {
                                        x: l.left,
                                        y: l.top,
                                        width: l.width,
                                        height: l.height
                                    })) {
                                    if (null != o) return o(e);
                                    if (null != i) {
                                        var s = -1e3 / x.current * 2,
                                            f = function(e, t) {
                                                for (var n = 0, r = Array.from(e.values()); n < r.length; n++) {
                                                    var i = r[n];
                                                    if (null != i && t(i)) return i
                                                }
                                                return null
                                            }(m.current, (function(e) {
                                                var t = e.confetti,
                                                    n = t.previewPositionUpdate(a, s);
                                                return u(c, {
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
                    S = r.useCallback((function(e) {
                        return k(e, {
                            clickHandler: l
                        })
                    }), [k, l]),
                    E = r.useCallback((function(e) {
                        return k(e, {
                            clickHandler: c
                        })
                    }), [k, c]),
                    V = r.useCallback((function(e) {
                        return k(e, {
                            mouseHandler: s
                        })
                    }), [k, s]),
                    F = r.useCallback((function(e) {
                        return k(e, {
                            mouseHandler: f
                        })
                    }), [k, f]);
                return r.useEffect((function() {
                    var e = function(e, t, n) {
                        null != n && window.addEventListener(e, t)
                    };
                    return e("click", S, l), e("mousedown", E, c), e("mousemove", V, s), e("mouseup", F, f),
                        function() {
                            window.removeEventListener("click", S), window.removeEventListener("mousedown", E), window.removeEventListener("mousemove", V), window.removeEventListener("mouseup", V)
                        }
                }), [S, E, V, F, l, c, s, f]), r.useEffect((function() {
                    var e = y.current,
                        t = new ResizeObserver((function() {
                            ! function(e) {
                                if (null != e) {
                                    var t = e.getBoundingClientRect(),
                                        r = t.width,
                                        i = t.height;
                                    e.width = r * n.g.devicePixelRatio, e.height = i * n.g.devicePixelRatio
                                }
                            }(y.current)
                        }));
                    return null != e && t.observe(e),
                        function() {
                            null != e && t.unobserve(e)
                        }
                }), []), r.createElement("canvas", p({}, v, {
                    className: o,
                    ref: y
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
            var V = r.forwardRef((function(e, t) {
                var n, o = e.className,
                    u = e.visible,
                    l = void 0 !== u && u,
                    c = e.sprites,
                    s = e.colors,
                    f = e.spriteWidth,
                    d = e.spriteHeight,
                    h = r.useRef(null),
                    p = r.useRef([]),
                    v = r.useRef(!1),
                    y = r.useRef({});
                r.useImperativeHandle(t, (function() {
                    return {
                        getCanvas: function() {
                            return h.current
                        },
                        getCreateData: function() {
                            return {
                                sprites: p.current,
                                colors: s,
                                spriteWidth: f,
                                spriteHeight: d
                            }
                        },
                        addReadyListener: function(e) {
                            var t = (0, i.v4)();
                            return y.current[t] = e, t
                        },
                        removeReadyListener: function(e) {
                            delete y.current[e]
                        },
                        isReady: v.current
                    }
                }), [s, d, f]);
                var m = r.useCallback((function() {
                        var e = h.current,
                            t = null == e ? void 0 : e.getContext("2d", {
                                willReadFrequently: !0
                            });
                        null != t && null != e && (t.clearRect(0, 0, e.width, e.height),
                            p.current.forEach((function(e, n) {
                                var r = function(r, i) {
                                    var o = f * i + 2 * i,
                                        a = d * n + 2 * n;
                                    if (t.drawImage(e.image, o, a, f, d), null != r) {
                                        for (var u = t.getImageData(o, a, f, d), l = function(e) {
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
                    }), [s, d, f]),
                    w = r.useCallback((function() {
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
                            p.current = e.map((function(e) {
                                return {
                                    colorize: e.colorize,
                                    image: e.image,
                                    src: e.src
                                }
                            }))
                        }))
                    }), [c]),
                    g = r.useCallback((function(e) {
                        for (var t in y.current) y.current[t](e)
                    }), []),
                    x = r.useCallback((function() {
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
                                        return [4, w()];
                                    case 1:
                                        return e.sent(), m(), v.current = !0, g(!0), [2]
                                }
                            }))
                        }))
                    }), [g, w, m]);
                return r.useEffect((function() {
                    x()
                }), [x]), r.useEffect((function() {
                    return function() {
                        return g(!1)
                    }
                }), [g]), r.useEffect((function() {
                    null != h.current && (h.current.width = (f + 2) * Math.max(s.length, 1), h.current.height = (d + 2) * c.length)
                }), [s.length, d, f, c.length]), r.createElement("canvas", {
                    ref: h,
                    className: a()(o, (n = {}, n["SpriteCanvas-module_spriteCanvasHidden__ndzQV"] = !l, n))
                })
            }));

            function F(e, t) {
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
                    f = r.useCallback((function() {
                        return null == e ? void 0 : e.clearConfetti()
                    }), [e]);
                return r.useMemo((function() {
                    return {
                        createConfetti: u,
                        createMultipleConfetti: l,
                        addConfetti: c,
                        clearConfetti: f,
                        deleteConfetti: s,
                        isReady: o && null != t && null != e
                    }
                }), [c, f, e, u, l, s, o, t])
            }
        },
        620745: (e, t, n) => {
            var r = n(973935);
            t.s = r.createRoot;
            r.hydrateRoot
        },
        957083: (e, t, n) => {
            n.d(t, {
                Z: () => r
            });
            const r = function() {
                function e(t, n) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    this._elements = [];
                    this._createElement = t;
                    this._cleanElement = n
                }
                var t = e.prototype;
                t.getElement = function() {
                    return 0 === this._elements.length ? this._createElement() : this._elements.pop()
                };
                t.poolElement = function(e) {
                    this._cleanElement(e);
                    this._elements.push(e)
                };
                t.clearPool = function() {
                    this._elements.length = 0
                };
                return e
            }()
        },
        979730: (e, t, n) => {
            n.d(t, {
                tJ: () => d
            });

            function r(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function i(e) {
                return function(e) {
                    if (Array.isArray(e)) return r(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return r(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            Object.defineProperty, Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
            var o = Object.defineProperty,
                a = Object.getOwnPropertySymbols,
                u = Object.prototype.hasOwnProperty,
                l = Object.prototype.propertyIsEnumerable,
                c = function(e, t, n) {
                    return t in e ? o(e, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: n
                    }) : e[t] = n
                },
                s = function(e, t) {
                    for (var n in t || (t = {})) u.call(t, n) && c(e, n, t[n]);
                    var r = !0,
                        i = !1,
                        o = void 0;
                    if (a) try {
                        for (var s, f = a(t)[Symbol.iterator](); !(r = (s = f.next()).done); r = !0) {
                            n = s.value;
                            l.call(t, n) && c(e, n, t[n])
                        }
                    } catch (e) {
                        i = !0;
                        o = e
                    } finally {
                        try {
                            r || null == f.return || f.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return e
                },
                f = function(e) {
                    return function(t) {
                        try {
                            var n = e(t);
                            return n instanceof Promise ? n : {
                                then: function(e) {
                                    return f(e)(n)
                                },
                                catch: function(e) {
                                    return this
                                }
                            }
                        } catch (e) {
                            return {
                                then: function(e) {
                                    return this
                                },
                                catch: function(t) {
                                    return f(t)(e)
                                }
                            }
                        }
                    }
                },
                d = function(e, t) {
                    return function(n, r, o) {
                        var a = s({
                            getStorage: function() {
                                return localStorage
                            },
                            serialize: JSON.stringify,
                            deserialize: JSON.parse,
                            partialize: function(e) {
                                return e
                            },
                            version: 0,
                            merge: function(e, t) {
                                return s(s({}, t), e)
                            }
                        }, t);
                        (a.blacklist || a.whitelist) && console.warn("The ".concat(a.blacklist ? "blacklist" : "whitelist", " option is deprecated and will be removed in the next version. Please use the 'partialize' option instead."));
                        var u, l = !1,
                            c = new Set,
                            d = new Set;
                        try {
                            u = a.getStorage()
                        } catch (e) {}
                        if (!u) return e((function() {
                            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                            console.warn("[zustand persist middleware] Unable to update item '".concat(a.name, "', the given storage is currently unavailable."));
                            n.apply(void 0, i(t))
                        }), r, o);
                        u.removeItem || console.warn("[zustand persist middleware] The given storage for item '".concat(a.name, "' does not contain a 'removeItem' method, which will be required in v4."));
                        var h = f(a.serialize),
                            p = function() {
                                var e, t = a.partialize(s({}, r()));
                                a.whitelist && Object.keys(t).forEach((function(e) {
                                    var n;
                                    !(null == (n = a.whitelist) ? void 0 : n.includes(e)) && delete t[e]
                                }));
                                a.blacklist && a.blacklist.forEach((function(e) {
                                    return delete t[e]
                                }));
                                var n = h({
                                    state: t,
                                    version: a.version
                                }).then((function(e) {
                                    return u.setItem(a.name, e)
                                })).catch((function(t) {
                                    e = t
                                }));
                                if (e) throw e;
                                return n
                            },
                            v = o.setState;
                        o.setState = function(e, t) {
                            v(e, t);
                            p()
                        };
                        var y, m = e((function() {
                                for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                                n.apply(void 0, i(t));
                                p()
                            }), r, o),
                            w = function() {
                                var e;
                                if (u) {
                                    l = !1;
                                    c.forEach((function(e) {
                                        return e(r())
                                    }));
                                    var t = (null == (e = a.onRehydrateStorage) ? void 0 : e.call(a, r())) || void 0;
                                    return f(u.getItem.bind(u))(a.name).then((function(e) {
                                        if (e) return a.deserialize(e)
                                    })).then((function(e) {
                                        if (e) {
                                            if ("number" != typeof e.version || e.version === a.version) return e.state;
                                            if (a.migrate) return a.migrate(e.state, e.version);
                                            console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                                        }
                                    })).then((function(e) {
                                        var t;
                                        y = a.merge(e, null != (t = r()) ? t : m);
                                        n(y, !0);
                                        return p()
                                    })).then((function() {
                                        null == t || t(y, void 0);
                                        l = !0;
                                        d.forEach((function(e) {
                                            return e(y)
                                        }))
                                    })).catch((function(e) {
                                        null == t || t(void 0, e)
                                    }))
                                }
                            };
                        o.persist = {
                            setOptions: function(e) {
                                a = s(s({}, a), e);
                                e.getStorage && (u = e.getStorage())
                            },
                            clearStorage: function() {
                                var e;
                                null == (e = null == u ? void 0 : u.removeItem) || e.call(u, a.name)
                            },
                            rehydrate: function() {
                                return w()
                            },
                            hasHydrated: function() {
                                return l
                            },
                            onHydrate: function(e) {
                                c.add(e);
                                return function() {
                                    c.delete(e)
                                }
                            },
                            onFinishHydration: function(e) {
                                d.add(e);
                                return function() {
                                    d.delete(e)
                                }
                            }
                        };
                        w();
                        return y || m
                    }
                }
        }
    }
]);