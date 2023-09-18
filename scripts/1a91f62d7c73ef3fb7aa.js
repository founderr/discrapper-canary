"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [24784], {
        652411: (e, t, n) => {
            n.d(t, {
                O_: () => F,
                qA: () => f,
                Ji: () => O,
                uR: () => D
            });
            var i = n(667294),
                r = n(468811),
                o = n(294184),
                a = n.n(o);

            function u(e, t) {
                var n = e.x,
                    i = e.y;
                return n > t.x && n < t.x + t.width && i > t.y && i < t.y + t.height
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
                            i = -e.gravity * t;
                        return {
                            x: n + l(this.dragCoefficient.x, this.velocity.x),
                            y: i + l(this.dragCoefficient.y, this.velocity.y)
                        }
                    }, e.prototype.update = function(e) {
                        var t = Date.now(),
                            n = (t - this._lastUpdatedAt) / 100;
                        this.rotation.update(n), this.dragCoefficient.update(n);
                        var i = this.getNewForces(e, n),
                            r = i.x,
                            o = i.y;
                        this.velocity.update(n), this.velocity.x += r, this.velocity.y += o, this.position.update(n), this.position.x += this.velocity.x * n, this.position.y += this.velocity.y * n, this.size.update(n), this.opacity.update(n), this._lastUpdatedAt = t
                    }, e.prototype.previewPositionUpdate = function(e, t) {
                        var n = t / 100,
                            i = this.velocity.previewUpdate(n),
                            r = this.getNewForces(e, n),
                            o = r.x,
                            a = r.y;
                        i.x += o, i.y += a;
                        var u = this.position.previewUpdate(n);
                        return u.x += i.x * n, u.y += i.y * n, u
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
                        i = t.wind;
                    this.gravity = -9.8, this.wind = 0, this.gravity = null != n ? n : this.gravity, this.wind = null != i ? i : this.wind
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
                    for (var t, n = 1, i = arguments.length; n < i; n++)
                        for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
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
                    function t(t, n, i) {
                        var r = e.call(this, t, n) || this;
                        return r._z = i, r
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
                x = function(e) {
                    function t(t, n) {
                        var i = e.call(this, t) || this;
                        return i.addValue = n, i
                    }
                    return h(t, e), t.prototype.update = function(e) {
                        this.value = this.previewUpdate(e)
                    }, t.prototype.previewUpdate = function(e) {
                        return this.value + this.addValue * e
                    }, t
                }(v),
                g = function(e) {
                    function t(t, n, i, r, o, a) {
                        var u = e.call(this, t) || this;
                        u.min = n, u.max = i, u.duration = r;
                        var l = u.value / (u.max - u.min) * u.duration,
                            c = isNaN(l) ? 0 : l;
                        return u.timePassed = c < 0 ? u.duration - c : c, u.directionMultiplier = o, u.easingFunction = a, u
                    }
                    return h(t, e), t.prototype.update = function(e) {
                        var t = this.doUpdate(e),
                            n = t[0],
                            i = t[1],
                            r = t[2];
                        this.value = n, this.directionMultiplier = r, this.timePassed = i
                    }, t.prototype.previewUpdate = function(e) {
                        return this.doUpdate(e)[0]
                    }, t.prototype.doUpdate = function(e) {
                        var t = this.max - this.min,
                            n = this.timePassed + e * this.directionMultiplier,
                            i = Math.min(Math.max(n, 0), this.duration),
                            r = n < 0 || n > this.duration ? -1 * this.directionMultiplier : this.directionMultiplier,
                            o = this.easingFunction(i, this.min, t, this.duration);
                        return [isNaN(o) ? 0 : o, i, r]
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

            function R(e) {
                return "number" == typeof e ? {
                    x: e,
                    y: e,
                    z: e
                } : e
            }

            function k(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            return new w(e.value);
                        case "static-random":
                            return new w(b(e.minValue, e.maxValue));
                        case "linear":
                            return new x(e.value, e.addValue);
                        case "linear-random":
                            return new x(b(e.minValue, e.maxValue), b(e.minAddValue, e.maxAddValue));
                        case "oscillating":
                            return new g(e.value, e.start, e.final, e.duration, e.direction, e.easingFunction);
                        case "oscillating-random":
                            return new g(b(e.minValue, e.maxValue), b(e.minStart, e.maxStart), b(e.minFinal, e.maxFinal), b(e.minDuration, e.maxDuration), z(e.minDirection, e.maxDirection), C(e.easingFunctions)[0])
                    }
                }(p(p({}, e), {
                    valueType: "number"
                }))
            }

            function V(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            var t = _(e.value);
                            return new y(new w(t.x), new w(t.y));
                        case "static-random":
                            var n = _(e.minValue),
                                i = _(e.maxValue);
                            return new y(new w(b(n.x, i.x)), new w(b(n.y, i.y)));
                        case "linear":
                            t = _(e.value);
                            var r = _(e.addValue);
                            return new y(new x(t.x, r.x), new x(t.y, r.y));
                        case "linear-random":
                            n = _(e.minValue), i = _(e.maxValue);
                            var o = _(e.minAddValue),
                                a = _(e.maxAddValue);
                            return new y(new x(b(n.x, i.x), b(o.x, a.x)), new x(b(n.y, i.y), b(o.x, a.x)));
                        case "oscillating":
                            t = _(e.value);
                            var u = _(e.start),
                                l = _(e.final),
                                c = _(e.duration),
                                s = _(e.direction);
                            return new y(new g(t.x, u.x, l.x, c.x, s.x, e.easingFunction), new g(t.y, u.y, l.y, c.x, s.y, e.easingFunction));
                        case "oscillating-random":
                            n = _(e.minValue), i = _(e.maxValue);
                            var f = _(e.minStart),
                                d = _(e.maxStart),
                                h = _(e.minFinal),
                                p = _(e.maxFinal),
                                v = _(e.minDuration),
                                m = _(e.maxDuration),
                                R = _(e.minDirection),
                                k = _(e.maxDirection);
                            return new y(new g(b(n.x, i.x), b(f.x, d.x), b(h.x, p.x), b(v.x, m.x), z(R.x, k.x), C(e.easingFunctions)[0]), new g(b(n.y, i.y), b(f.y, d.y), b(h.y, p.y), b(v.y, m.y), z(R.y, k.y), C(e.easingFunctions)[0]))
                    }
                }(p(p({}, e), {
                    valueType: "Vector2"
                }))
            }

            function E(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            var t = R(e.value);
                            return new m(new w(t.x), new w(t.y), new w(t.z));
                        case "static-random":
                            var n = R(e.minValue),
                                i = R(e.maxValue);
                            return new m(new w(b(n.x, i.x)), new w(b(n.y, i.y)), new w(b(n.z, i.z)));
                        case "linear":
                            t = R(e.value);
                            var r = R(e.addValue);
                            return new m(new x(t.x, r.x), new x(t.y, r.y), new x(t.z, r.z));
                        case "linear-random":
                            n = R(e.minValue), i = R(e.maxValue);
                            var o = R(e.minAddValue),
                                a = R(e.maxAddValue);
                            return new m(new x(b(n.x, i.x), b(o.x, a.x)), new x(b(n.y, i.y), b(o.y, a.y)), new x(b(n.z, i.z), b(o.z, a.z)));
                        case "oscillating":
                            t = R(e.value);
                            var u = R(e.start),
                                l = R(e.final),
                                c = R(e.duration),
                                s = R(e.direction);
                            return new m(new g(t.x, u.x, l.x, c.x, s.x, e.easingFunction), new g(t.y, u.y, l.y, c.z, s.y, e.easingFunction), new g(t.z, u.z, l.z, c.z, s.z, e.easingFunction));
                        case "oscillating-random":
                            n = R(e.minValue), i = R(e.maxValue);
                            var f = R(e.minStart),
                                d = R(e.maxStart),
                                h = R(e.minFinal),
                                p = R(e.maxFinal),
                                v = R(e.minDuration),
                                y = R(e.maxDuration),
                                _ = R(e.minDirection),
                                k = R(e.maxDirection);
                            return new m(new g(b(n.x, i.x), b(f.x, d.x), b(h.x, p.x), b(v.x, y.x), z(_.x, k.x), C(e.easingFunctions)[0]), new g(b(n.y, i.y), b(f.y, d.y), b(h.y, p.y), b(v.y, y.y), z(_.y, k.y), C(e.easingFunctions)[0]), new g(b(n.z, i.z), b(f.z, d.z), b(h.z, p.z), b(v.z, y.z), z(_.z, k.z), C(e.easingFunctions)[0]))
                    }
                }(p(p({}, e), {
                    valueType: "Vector3"
                }))
            }

            function P(e, t, n, i, r) {
                var o = function(e, t) {
                        return p(p({
                            id: t
                        }, s), e)
                    }(t, e),
                    a = V(o.size),
                    u = function(e, t) {
                        if (null != e) {
                            var n = t.sprites.findIndex((function(t) {
                                return n = t, "string" == typeof(i = e) ? n.src === i && n.colorize : n.src === i.src && n.colorize === i.colorize;
                                var n, i
                            }));
                            if (-1 !== n) return [e, n]
                        }
                        return C(t.sprites)
                    }(i, n),
                    l = u[0],
                    f = u[1],
                    d = function(e, t, n) {
                        if (! function(e) {
                                return "string" == typeof e || e.colorize
                            }(e)) return 0;
                        var i = null != t ? n.colors.findIndex((function(e) {
                            return e === t
                        })) : -1;
                        return -1 !== i ? i : Math.floor(b(0, n.colors.length - 1))
                    }(null != i ? i : l, r, n);
                return new c({
                    id: e,
                    position: V(o.position),
                    velocity: V(o.velocity),
                    rotation: E(o.rotation),
                    dragCoefficient: V(o.dragCoefficient),
                    size: a,
                    opacity: k(o.opacity),
                    spriteX: d * n.spriteWidth + 2 * d,
                    spriteY: f * n.spriteHeight + 2 * f,
                    spriteWidth: n.spriteWidth,
                    spriteHeight: n.spriteHeight
                })
            }
            var F = i.forwardRef((function(e, t) {
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
                        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var r = 0;
                            for (i = Object.getOwnPropertySymbols(e); r < i.length; r++) t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (n[i[r]] = e[i[r]])
                        }
                        return n
                    }(e, ["className", "environment", "onClick", "onMouseDown", "onMouseMove", "onMouseUp", "onBeforeRender", "onAfterRender"]),
                    y = i.useRef(null),
                    m = i.useRef(new Map),
                    w = i.useRef(null),
                    x = i.useRef(0),
                    g = i.useRef(0),
                    b = i.useCallback((function() {
                        var e = y.current;
                        if (null != e) {
                            var t = e.getContext("2d");
                            if (null != t) {
                                t.clearRect(0, 0, e.width, e.height), null == d || d(t), m.current.forEach((function(n, i) {
                                    var r = n.confetti,
                                        o = n.spriteCanvas;
                                    r.update(a), r.draw(o, t), r.shouldDestroy(e, a) && m.current.delete(i)
                                })), null == h || h(t), m.current.size > 0 ? w.current = window.requestAnimationFrame(b) : (t.clearRect(0, 0, e.width, e.height), w.current = null);
                                var n = Date.now();
                                0 !== x.current && (g.current = 1e3 / (n - x.current)), x.current = n
                            }
                        }
                    }), [a, h, d]);
                i.useEffect((function() {
                    null != w.current && (window.cancelAnimationFrame(w.current), w.current = window.requestAnimationFrame(b))
                }), [b]);
                var C = i.useCallback((function(e, t) {
                        m.current.set(e.id, {
                            confetti: e,
                            spriteCanvas: t
                        }), null == w.current && b()
                    }), [b]),
                    z = i.useCallback((function(e, t, n, i, o) {
                        var a, u = P(null !== (a = e.id) && void 0 !== a ? a : (0, r.v4)(), e, n, i, o);
                        return C(u, t), u
                    }), [C]),
                    _ = i.useCallback((function(e) {
                        m.current.delete(e)
                    }), []),
                    R = i.useCallback((function() {
                        return m.current.clear()
                    }), []),
                    k = i.useCallback((function() {
                        return y.current
                    }), []);
                i.useImperativeHandle(t, (function() {
                    return {
                        createConfetti: z,
                        addConfetti: C,
                        deleteConfetti: _,
                        clearConfetti: R,
                        getCanvas: k
                    }
                }), [z, C, _, R, k]);
                var V = i.useCallback((function(e, t) {
                        var n, i, r = t.clickHandler,
                            o = t.mouseHandler;
                        if (null != r || null != o) {
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
                                    if (null != r) {
                                        var s = -1e3 / g.current * 2,
                                            f = function(e, t) {
                                                for (var n = 0, i = Array.from(e.values()); n < i.length; n++) {
                                                    var r = i[n];
                                                    if (null != r && t(r)) return r
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
                                        r(e, null !== (i = null == f ? void 0 : f.confetti) && void 0 !== i ? i : null)
                                    }
                                }
                            }
                        }
                    }), [a]),
                    E = i.useCallback((function(e) {
                        return V(e, {
                            clickHandler: l
                        })
                    }), [V, l]),
                    F = i.useCallback((function(e) {
                        return V(e, {
                            clickHandler: c
                        })
                    }), [V, c]),
                    O = i.useCallback((function(e) {
                        return V(e, {
                            mouseHandler: s
                        })
                    }), [V, s]),
                    D = i.useCallback((function(e) {
                        return V(e, {
                            mouseHandler: f
                        })
                    }), [V, f]);
                return i.useEffect((function() {
                    var e = function(e, t, n) {
                        null != n && window.addEventListener(e, t)
                    };
                    return e("click", E, l), e("mousedown", F, c), e("mousemove", O, s), e("mouseup", D, f),
                        function() {
                            window.removeEventListener("click", E), window.removeEventListener("mousedown", F), window.removeEventListener("mousemove", O), window.removeEventListener("mouseup", O)
                        }
                }), [E, F, O, D, l, c, s, f]), i.useEffect((function() {
                    var e = y.current,
                        t = new ResizeObserver((function() {
                            ! function(e) {
                                if (null != e) {
                                    var t = e.getBoundingClientRect(),
                                        i = t.width,
                                        r = t.height;
                                    e.width = i * n.g.devicePixelRatio, e.height = r * n.g.devicePixelRatio
                                }
                            }(y.current)
                        }));
                    return null != e && t.observe(e),
                        function() {
                            null != e && t.unobserve(e)
                        }
                }), []), i.createElement("canvas", p({}, v, {
                    className: o,
                    ref: y
                }))
            }));
            ! function(e, t) {
                void 0 === t && (t = {});
                var n = t.insertAt;
                if ("undefined" != typeof document) {
                    var i = document.head || document.getElementsByTagName("head")[0],
                        r = document.createElement("style");
                    r.type = "text/css",
                        "top" === n && i.firstChild ? i.insertBefore(r, i.firstChild) : i.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
                }
            }(".SpriteCanvas-module_spriteCanvasHidden__ndzQV {\n  display: none;\n  position: absolute;\n  width: 0;\n  height: 0;\n  left: -100%;\n}\n");
            var O = i.forwardRef((function(e, t) {
                var n, o = e.className,
                    u = e.visible,
                    l = void 0 !== u && u,
                    c = e.sprites,
                    s = e.colors,
                    f = e.spriteWidth,
                    d = e.spriteHeight,
                    h = i.useRef(null),
                    p = i.useRef([]),
                    v = i.useRef(!1),
                    y = i.useRef({});
                i.useImperativeHandle(t, (function() {
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
                            var t = (0, r.v4)();
                            return y.current[t] = e, t
                        },
                        removeReadyListener: function(e) {
                            delete y.current[e]
                        },
                        isReady: v.current
                    }
                }), [s, d, f]);
                var m = i.useCallback((function() {
                        var e = h.current,
                            t = null == e ? void 0 : e.getContext("2d", {
                                willReadFrequently: !0
                            });
                        null != t && null != e && (t.clearRect(0, 0, e.width, e.height),
                            p.current.forEach((function(e, n) {
                                var i = function(i, r) {
                                    var o = f * r + 2 * r,
                                        a = d * n + 2 * n;
                                    if (t.drawImage(e.image, o, a, f, d), null != i) {
                                        for (var u = t.getImageData(o, a, f, d), l = function(e) {
                                                "#" === e[0] && (e = e.slice(1));
                                                var t = parseInt(e, 16);
                                                return {
                                                    r: t >> 16 & 255,
                                                    g: t >> 8 & 255,
                                                    b: 255 & t
                                                }
                                            }(i), c = 0; c < u.data.length; c += 4) u.data[c] = l.r, u.data[c + 1] = l.g, u.data[c + 2] = l.b;
                                        t.putImageData(u, o, a)
                                    }
                                };
                                e.colorize ? s.forEach((function(e, t) {
                                    return i(e, t)
                                })) : i(null, 0)
                            })))
                    }), [s, d, f]),
                    w = i.useCallback((function() {
                        var e = c.map((function(e) {
                            var t = new Image,
                                n = "string" == typeof e ? e : e.src,
                                i = "string" == typeof e || e.colorize;
                            t.src = n;
                            var r = new Promise((function(e) {
                                t.onload = e
                            }));
                            return {
                                colorize: i,
                                image: t,
                                src: n,
                                loadPromise: r
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
                    x = i.useCallback((function(e) {
                        for (var t in y.current) y.current[t](e)
                    }), []),
                    g = i.useCallback((function() {
                        return function(e, t, n, i) {
                            return new(n || (n = Promise))((function(r, o) {
                                function a(e) {
                                    try {
                                        l(i.next(e))
                                    } catch (e) {
                                        o(e)
                                    }
                                }

                                function u(e) {
                                    try {
                                        l(i.throw(e))
                                    } catch (e) {
                                        o(e)
                                    }
                                }

                                function l(e) {
                                    var t;
                                    e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                        e(t)
                                    }))).then(a, u)
                                }
                                l((i = i.apply(e, t || [])).next())
                            }))
                        }(void 0, void 0, void 0, (function() {
                            return function(e, t) {
                                var n, i, r, o, a = {
                                    label: 0,
                                    sent: function() {
                                        if (1 & r[0]) throw r[1];
                                        return r[1]
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
                                                if (n = 1, i && (r = 2 & u[0] ? i.return : u[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, u[1])).done) return r;
                                                switch (i = 0, r && (u = [2 & u[0], r.value]), u[0]) {
                                                    case 0:
                                                    case 1:
                                                        r = u;
                                                        break;
                                                    case 4:
                                                        return a.label++, {
                                                            value: u[1],
                                                            done: !1
                                                        };
                                                    case 5:
                                                        a.label++, i = u[1], u = [0];
                                                        continue;
                                                    case 7:
                                                        u = a.ops.pop(), a.trys.pop();
                                                        continue;
                                                    default:
                                                        if (!(r = a.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== u[0] && 2 !== u[0])) {
                                                            a = 0;
                                                            continue
                                                        }
                                                        if (3 === u[0] && (!r || u[1] > r[0] && u[1] < r[3])) {
                                                            a.label = u[1];
                                                            break
                                                        }
                                                        if (6 === u[0] && a.label < r[1]) {
                                                            a.label = r[1], r = u;
                                                            break
                                                        }
                                                        if (r && a.label < r[2]) {
                                                            a.label = r[2], a.ops.push(u);
                                                            break
                                                        }
                                                        r[2] && a.ops.pop(), a.trys.pop();
                                                        continue
                                                }
                                                u = t.call(e, a)
                                            } catch (e) {
                                                u = [6, e], i = 0
                                            } finally {
                                                n = r = 0
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
                                        return e.sent(), m(), v.current = !0, x(!0), [2]
                                }
                            }))
                        }))
                    }), [x, w, m]);
                return i.useEffect((function() {
                    g()
                }), [g]), i.useEffect((function() {
                    return function() {
                        return x(!1)
                    }
                }), [x]), i.useEffect((function() {
                    null != h.current && (h.current.width = (f + 2) * Math.max(s.length, 1), h.current.height = (d + 2) * c.length)
                }), [s.length, d, f, c.length]), i.createElement("canvas", {
                    ref: h,
                    className: a()(o, (n = {}, n["SpriteCanvas-module_spriteCanvasHidden__ndzQV"] = !l, n))
                })
            }));

            function D(e, t) {
                var n, r = i.useState(null !== (n = null == t ? void 0 : t.isReady) && void 0 !== n && n),
                    o = r[0],
                    a = r[1];
                i.useEffect((function() {
                    var e = null == t ? void 0 : t.addReadyListener(a);
                    return function() {
                        null != e && (null == t || t.removeReadyListener(e))
                    }
                }), [t]);
                var u = i.useCallback((function(n, i) {
                        var r = void 0 === i ? {} : i,
                            o = r.sprite,
                            a = r.color,
                            u = null == t ? void 0 : t.getCreateData(),
                            l = null == t ? void 0 : t.getCanvas();
                        if (null != l && null != u && 0 !== u.sprites.length) return null == e ? void 0 : e.createConfetti(n, l, u, o, a)
                    }), [e, t]),
                    l = i.useCallback((function(e, t, n) {
                        for (var i = [], r = 0; r < t; r++) {
                            var o = u(e, n);
                            o && i.push(o)
                        }
                        return i
                    }), [u]),
                    c = i.useCallback((function(n) {
                        var i = null == t ? void 0 : t.getCanvas();
                        null != i && (null == e || e.addConfetti(n, i))
                    }), [e, t]),
                    s = i.useCallback((function(t) {
                        null == e || e.deleteConfetti(t)
                    }), [e]),
                    f = i.useCallback((function() {
                        return null == e ? void 0 : e.clearConfetti()
                    }), [e]);
                return i.useMemo((function() {
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
            var i = n(973935);
            t.s = i.createRoot;
            i.hydrateRoot
        },
        957083: (e, t, n) => {
            n.d(t, {
                Z: () => i
            });
            const i = function() {
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
        }
    }
]);