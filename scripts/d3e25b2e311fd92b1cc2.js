"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [56492, 85293], {
        652411: (e, t, n) => {
            n.d(t, {
                O_: () => P,
                qA: () => f,
                Ji: () => F,
                uR: () => M
            });
            var i = n(667294),
                r = n(468811),
                a = n(294184),
                o = n.n(a);

            function u(e, t) {
                var n = e.x,
                    i = e.y;
                return n > t.x && n < t.x + t.width && i > t.y && i < t.y + t.height
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
                            i = -e.gravity * t;
                        return {
                            x: n + c(this.dragCoefficient.x, this.velocity.x),
                            y: i + c(this.dragCoefficient.y, this.velocity.y)
                        }
                    }, e.prototype.update = function(e) {
                        var t = Date.now(),
                            n = (t - this._lastUpdatedAt) / 100;
                        this.rotation.update(n), this.dragCoefficient.update(n);
                        var i = this.getNewForces(e, n),
                            r = i.x,
                            a = i.y;
                        this.velocity.update(n), this.velocity.x += r, this.velocity.y += a, this.position.update(n), this.position.x += this.velocity.x * n, this.position.y += this.velocity.y * n, this.size.update(n), this.opacity.update(n), this._lastUpdatedAt = t
                    }, e.prototype.previewPositionUpdate = function(e, t) {
                        var n = t / 100,
                            i = this.velocity.previewUpdate(n),
                            r = this.getNewForces(e, n),
                            a = r.x,
                            o = r.y;
                        i.x += a, i.y += o;
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

            function p(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function n() {
                    this.constructor = e
                }
                d(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }
            var h = function() {
                return h = Object.assign || function(e) {
                    for (var t, n = 1, i = arguments.length; n < i; n++)
                        for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }, h.apply(this, arguments)
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
                w = function(e) {
                    function t(t, n, i) {
                        var r = e.call(this, t, n) || this;
                        return r._z = i, r
                    }
                    return p(t, e), t.prototype.update = function(t) {
                        e.prototype.update.call(this, t), this._z.update(t)
                    }, t.prototype.previewUpdate = function(t) {
                        var n = e.prototype.previewUpdate.call(this, t);
                        return h(h({}, n), {
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
                m = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return p(t, e), t.prototype.update = function() {}, t.prototype.previewUpdate = function() {
                        return this.value
                    }, t
                }(v),
                x = function(e) {
                    function t(t, n) {
                        var i = e.call(this, t) || this;
                        return i.addValue = n, i
                    }
                    return p(t, e), t.prototype.update = function(e) {
                        this.value = this.previewUpdate(e)
                    }, t.prototype.previewUpdate = function(e) {
                        return this.value + this.addValue * e
                    }, t
                }(v),
                g = function(e) {
                    function t(t, n, i, r, a, o) {
                        var u = e.call(this, t) || this;
                        u.min = n, u.max = i, u.duration = r;
                        var c = u.value / (u.max - u.min) * u.duration,
                            l = isNaN(c) ? 0 : c;
                        return u.timePassed = l < 0 ? u.duration - l : l, u.directionMultiplier = a, u.easingFunction = o, u
                    }
                    return p(t, e), t.prototype.update = function(e) {
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
                            a = this.easingFunction(i, this.min, t, this.duration);
                        return [isNaN(a) ? 0 : a, i, r]
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

            function R(e) {
                return "number" == typeof e ? {
                    x: e,
                    y: e
                } : e
            }

            function k(e) {
                return "number" == typeof e ? {
                    x: e,
                    y: e,
                    z: e
                } : e
            }

            function _(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            return new m(e.value);
                        case "static-random":
                            return new m(b(e.minValue, e.maxValue));
                        case "linear":
                            return new x(e.value, e.addValue);
                        case "linear-random":
                            return new x(b(e.minValue, e.maxValue), b(e.minAddValue, e.maxAddValue));
                        case "oscillating":
                            return new g(e.value, e.start, e.final, e.duration, e.direction, e.easingFunction);
                        case "oscillating-random":
                            return new g(b(e.minValue, e.maxValue), b(e.minStart, e.maxStart), b(e.minFinal, e.maxFinal), b(e.minDuration, e.maxDuration), z(e.minDirection, e.maxDirection), C(e.easingFunctions)[0])
                    }
                }(h(h({}, e), {
                    valueType: "number"
                }))
            }

            function E(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            var t = R(e.value);
                            return new y(new m(t.x), new m(t.y));
                        case "static-random":
                            var n = R(e.minValue),
                                i = R(e.maxValue);
                            return new y(new m(b(n.x, i.x)), new m(b(n.y, i.y)));
                        case "linear":
                            t = R(e.value);
                            var r = R(e.addValue);
                            return new y(new x(t.x, r.x), new x(t.y, r.y));
                        case "linear-random":
                            n = R(e.minValue), i = R(e.maxValue);
                            var a = R(e.minAddValue),
                                o = R(e.maxAddValue);
                            return new y(new x(b(n.x, i.x), b(a.x, o.x)), new x(b(n.y, i.y), b(a.x, o.x)));
                        case "oscillating":
                            t = R(e.value);
                            var u = R(e.start),
                                c = R(e.final),
                                l = R(e.duration),
                                s = R(e.direction);
                            return new y(new g(t.x, u.x, c.x, l.x, s.x, e.easingFunction), new g(t.y, u.y, c.y, l.x, s.y, e.easingFunction));
                        case "oscillating-random":
                            n = R(e.minValue), i = R(e.maxValue);
                            var f = R(e.minStart),
                                d = R(e.maxStart),
                                p = R(e.minFinal),
                                h = R(e.maxFinal),
                                v = R(e.minDuration),
                                w = R(e.maxDuration),
                                k = R(e.minDirection),
                                _ = R(e.maxDirection);
                            return new y(new g(b(n.x, i.x), b(f.x, d.x), b(p.x, h.x), b(v.x, w.x), z(k.x, _.x), C(e.easingFunctions)[0]), new g(b(n.y, i.y), b(f.y, d.y), b(p.y, h.y), b(v.y, w.y), z(k.y, _.y), C(e.easingFunctions)[0]))
                    }
                }(h(h({}, e), {
                    valueType: "Vector2"
                }))
            }

            function V(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            var t = k(e.value);
                            return new w(new m(t.x), new m(t.y), new m(t.z));
                        case "static-random":
                            var n = k(e.minValue),
                                i = k(e.maxValue);
                            return new w(new m(b(n.x, i.x)), new m(b(n.y, i.y)), new m(b(n.z, i.z)));
                        case "linear":
                            t = k(e.value);
                            var r = k(e.addValue);
                            return new w(new x(t.x, r.x), new x(t.y, r.y), new x(t.z, r.z));
                        case "linear-random":
                            n = k(e.minValue), i = k(e.maxValue);
                            var a = k(e.minAddValue),
                                o = k(e.maxAddValue);
                            return new w(new x(b(n.x, i.x), b(a.x, o.x)), new x(b(n.y, i.y), b(a.y, o.y)), new x(b(n.z, i.z), b(a.z, o.z)));
                        case "oscillating":
                            t = k(e.value);
                            var u = k(e.start),
                                c = k(e.final),
                                l = k(e.duration),
                                s = k(e.direction);
                            return new w(new g(t.x, u.x, c.x, l.x, s.x, e.easingFunction), new g(t.y, u.y, c.y, l.z, s.y, e.easingFunction), new g(t.z, u.z, c.z, l.z, s.z, e.easingFunction));
                        case "oscillating-random":
                            n = k(e.minValue), i = k(e.maxValue);
                            var f = k(e.minStart),
                                d = k(e.maxStart),
                                p = k(e.minFinal),
                                h = k(e.maxFinal),
                                v = k(e.minDuration),
                                y = k(e.maxDuration),
                                R = k(e.minDirection),
                                _ = k(e.maxDirection);
                            return new w(new g(b(n.x, i.x), b(f.x, d.x), b(p.x, h.x), b(v.x, y.x), z(R.x, _.x), C(e.easingFunctions)[0]), new g(b(n.y, i.y), b(f.y, d.y), b(p.y, h.y), b(v.y, y.y), z(R.y, _.y), C(e.easingFunctions)[0]), new g(b(n.z, i.z), b(f.z, d.z), b(p.z, h.z), b(v.z, y.z), z(R.z, _.z), C(e.easingFunctions)[0]))
                    }
                }(h(h({}, e), {
                    valueType: "Vector3"
                }))
            }

            function D(e, t, n, i, r) {
                var a = function(e, t) {
                        return h(h({
                            id: t
                        }, s), e)
                    }(t, e),
                    o = E(a.size),
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
                    c = u[0],
                    f = u[1],
                    d = function(e, t, n) {
                        if (! function(e) {
                                return "string" == typeof e || e.colorize
                            }(e)) return 0;
                        var i = null != t ? n.colors.findIndex((function(e) {
                            return e === t
                        })) : -1;
                        return -1 !== i ? i : Math.floor(b(0, n.colors.length - 1))
                    }(null != i ? i : c, r, n);
                return new l({
                    id: e,
                    position: E(a.position),
                    velocity: E(a.velocity),
                    rotation: V(a.rotation),
                    dragCoefficient: E(a.dragCoefficient),
                    size: o,
                    opacity: _(a.opacity),
                    spriteX: d * n.spriteWidth + 2 * d,
                    spriteY: f * n.spriteHeight + 2 * f,
                    spriteWidth: n.spriteWidth,
                    spriteHeight: n.spriteHeight
                })
            }
            var P = i.forwardRef((function(e, t) {
                var a = e.className,
                    o = e.environment,
                    c = e.onClick,
                    l = e.onMouseDown,
                    s = e.onMouseMove,
                    f = e.onMouseUp,
                    d = e.onBeforeRender,
                    p = e.onAfterRender,
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
                    w = i.useRef(new Map),
                    m = i.useRef(null),
                    x = i.useRef(0),
                    g = i.useRef(0),
                    b = i.useCallback((function() {
                        var e = y.current;
                        if (null != e) {
                            var t = e.getContext("2d");
                            if (null != t) {
                                t.clearRect(0, 0, e.width, e.height), null == d || d(t), w.current.forEach((function(n, i) {
                                    var r = n.confetti,
                                        a = n.spriteCanvas;
                                    r.update(o), r.draw(a, t), r.shouldDestroy(e, o) && w.current.delete(i)
                                })), null == p || p(t), w.current.size > 0 ? m.current = window.requestAnimationFrame(b) : (t.clearRect(0, 0, e.width, e.height), m.current = null);
                                var n = Date.now();
                                0 !== x.current && (g.current = 1e3 / (n - x.current)), x.current = n
                            }
                        }
                    }), [o, p, d]);
                i.useEffect((function() {
                    null != m.current && (window.cancelAnimationFrame(m.current), m.current = window.requestAnimationFrame(b))
                }), [b]);
                var C = i.useCallback((function(e, t) {
                        w.current.set(e.id, {
                            confetti: e,
                            spriteCanvas: t
                        }), null == m.current && b()
                    }), [b]),
                    z = i.useCallback((function(e, t, n, i, a) {
                        var o, u = D(null !== (o = e.id) && void 0 !== o ? o : (0, r.v4)(), e, n, i, a);
                        return C(u, t), u
                    }), [C]),
                    R = i.useCallback((function(e) {
                        w.current.delete(e)
                    }), []),
                    k = i.useCallback((function() {
                        return w.current.clear()
                    }), []),
                    _ = i.useCallback((function() {
                        return y.current
                    }), []);
                i.useImperativeHandle(t, (function() {
                    return {
                        createConfetti: z,
                        addConfetti: C,
                        deleteConfetti: R,
                        clearConfetti: k,
                        getCanvas: _
                    }
                }), [z, C, R, k, _]);
                var E = i.useCallback((function(e, t) {
                        var n, i, r = t.clickHandler,
                            a = t.mouseHandler;
                        if (null != r || null != a) {
                            var c = null === (n = y.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                            if (null != c) {
                                var l = function(e, t) {
                                    if (null == t) throw new Error("element should not be null");
                                    var n = t.getBoundingClientRect();
                                    return {
                                        x: e.clientX - n.left,
                                        y: e.clientY - n.top
                                    }
                                }(e, y.current);
                                if (u(l, {
                                        x: c.left,
                                        y: c.top,
                                        width: c.width,
                                        height: c.height
                                    })) {
                                    if (null != a) return a(e);
                                    if (null != r) {
                                        var s = -1e3 / g.current * 2,
                                            f = function(e, t) {
                                                for (var n = 0, i = Array.from(e.values()); n < i.length; n++) {
                                                    var r = i[n];
                                                    if (null != r && t(r)) return r
                                                }
                                                return null
                                            }(w.current, (function(e) {
                                                var t = e.confetti,
                                                    n = t.previewPositionUpdate(o, s);
                                                return u(l, {
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
                    }), [o]),
                    V = i.useCallback((function(e) {
                        return E(e, {
                            clickHandler: c
                        })
                    }), [E, c]),
                    P = i.useCallback((function(e) {
                        return E(e, {
                            clickHandler: l
                        })
                    }), [E, l]),
                    F = i.useCallback((function(e) {
                        return E(e, {
                            mouseHandler: s
                        })
                    }), [E, s]),
                    M = i.useCallback((function(e) {
                        return E(e, {
                            mouseHandler: f
                        })
                    }), [E, f]);
                return i.useEffect((function() {
                    var e = function(e, t, n) {
                        null != n && window.addEventListener(e, t)
                    };
                    return e("click", V, c), e("mousedown", P, l), e("mousemove", F, s), e("mouseup", M, f),
                        function() {
                            window.removeEventListener("click", V), window.removeEventListener("mousedown", P), window.removeEventListener("mousemove", F), window.removeEventListener("mouseup", F)
                        }
                }), [V, P, F, M, c, l, s, f]), i.useEffect((function() {
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
                }), []), i.createElement("canvas", h({}, v, {
                    className: a,
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
            var F = i.forwardRef((function(e, t) {
                var n, a = e.className,
                    u = e.visible,
                    c = void 0 !== u && u,
                    l = e.sprites,
                    s = e.colors,
                    f = e.spriteWidth,
                    d = e.spriteHeight,
                    p = i.useRef(null),
                    h = i.useRef([]),
                    v = i.useRef(!1),
                    y = i.useRef({});
                i.useImperativeHandle(t, (function() {
                    return {
                        getCanvas: function() {
                            return p.current
                        },
                        getCreateData: function() {
                            return {
                                sprites: h.current,
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
                var w = i.useCallback((function() {
                        var e = p.current,
                            t = null == e ? void 0 : e.getContext("2d", {
                                willReadFrequently: !0
                            });
                        null != t && null != e && (t.clearRect(0, 0, e.width, e.height),
                            h.current.forEach((function(e, n) {
                                var i = function(i, r) {
                                    var a = f * r + 2 * r,
                                        o = d * n + 2 * n;
                                    if (t.drawImage(e.image, a, o, f, d), null != i) {
                                        for (var u = t.getImageData(a, o, f, d), c = function(e) {
                                                "#" === e[0] && (e = e.slice(1));
                                                var t = parseInt(e, 16);
                                                return {
                                                    r: t >> 16 & 255,
                                                    g: t >> 8 & 255,
                                                    b: 255 & t
                                                }
                                            }(i), l = 0; l < u.data.length; l += 4) u.data[l] = c.r, u.data[l + 1] = c.g, u.data[l + 2] = c.b;
                                        t.putImageData(u, a, o)
                                    }
                                };
                                e.colorize ? s.forEach((function(e, t) {
                                    return i(e, t)
                                })) : i(null, 0)
                            })))
                    }), [s, d, f]),
                    m = i.useCallback((function() {
                        var e = l.map((function(e) {
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
                            h.current = e.map((function(e) {
                                return {
                                    colorize: e.colorize,
                                    image: e.image,
                                    src: e.src
                                }
                            }))
                        }))
                    }), [l]),
                    x = i.useCallback((function(e) {
                        for (var t in y.current) y.current[t](e)
                    }), []),
                    g = i.useCallback((function() {
                        return function(e, t, n, i) {
                            return new(n || (n = Promise))((function(r, a) {
                                function o(e) {
                                    try {
                                        c(i.next(e))
                                    } catch (e) {
                                        a(e)
                                    }
                                }

                                function u(e) {
                                    try {
                                        c(i.throw(e))
                                    } catch (e) {
                                        a(e)
                                    }
                                }

                                function c(e) {
                                    var t;
                                    e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                        e(t)
                                    }))).then(o, u)
                                }
                                c((i = i.apply(e, t || [])).next())
                            }))
                        }(void 0, void 0, void 0, (function() {
                            return function(e, t) {
                                var n, i, r, a, o = {
                                    label: 0,
                                    sent: function() {
                                        if (1 & r[0]) throw r[1];
                                        return r[1]
                                    },
                                    trys: [],
                                    ops: []
                                };
                                return a = {
                                    next: u(0),
                                    throw: u(1),
                                    return: u(2)
                                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                                    return this
                                }), a;

                                function u(u) {
                                    return function(c) {
                                        return function(u) {
                                            if (n) throw new TypeError("Generator is already executing.");
                                            for (; a && (a = 0, u[0] && (o = 0)), o;) try {
                                                if (n = 1, i && (r = 2 & u[0] ? i.return : u[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, u[1])).done) return r;
                                                switch (i = 0, r && (u = [2 & u[0], r.value]), u[0]) {
                                                    case 0:
                                                    case 1:
                                                        r = u;
                                                        break;
                                                    case 4:
                                                        return o.label++, {
                                                            value: u[1],
                                                            done: !1
                                                        };
                                                    case 5:
                                                        o.label++, i = u[1], u = [0];
                                                        continue;
                                                    case 7:
                                                        u = o.ops.pop(), o.trys.pop();
                                                        continue;
                                                    default:
                                                        if (!(r = o.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== u[0] && 2 !== u[0])) {
                                                            o = 0;
                                                            continue
                                                        }
                                                        if (3 === u[0] && (!r || u[1] > r[0] && u[1] < r[3])) {
                                                            o.label = u[1];
                                                            break
                                                        }
                                                        if (6 === u[0] && o.label < r[1]) {
                                                            o.label = r[1], r = u;
                                                            break
                                                        }
                                                        if (r && o.label < r[2]) {
                                                            o.label = r[2], o.ops.push(u);
                                                            break
                                                        }
                                                        r[2] && o.ops.pop(), o.trys.pop();
                                                        continue
                                                }
                                                u = t.call(e, o)
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
                                        }([u, c])
                                    }
                                }
                            }(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, m()];
                                    case 1:
                                        return e.sent(), w(), v.current = !0, x(!0), [2]
                                }
                            }))
                        }))
                    }), [x, m, w]);
                return i.useEffect((function() {
                    g()
                }), [g]), i.useEffect((function() {
                    return function() {
                        return x(!1)
                    }
                }), [x]), i.useEffect((function() {
                    null != p.current && (p.current.width = (f + 2) * Math.max(s.length, 1), p.current.height = (d + 2) * l.length)
                }), [s.length, d, f, l.length]), i.createElement("canvas", {
                    ref: p,
                    className: o()(a, (n = {}, n["SpriteCanvas-module_spriteCanvasHidden__ndzQV"] = !c, n))
                })
            }));

            function M(e, t) {
                var n, r = i.useState(null !== (n = null == t ? void 0 : t.isReady) && void 0 !== n && n),
                    a = r[0],
                    o = r[1];
                i.useEffect((function() {
                    var e = null == t ? void 0 : t.addReadyListener(o);
                    return function() {
                        null != e && (null == t || t.removeReadyListener(e))
                    }
                }), [t]);
                var u = i.useCallback((function(n, i) {
                        var r = void 0 === i ? {} : i,
                            a = r.sprite,
                            o = r.color,
                            u = null == t ? void 0 : t.getCreateData(),
                            c = null == t ? void 0 : t.getCanvas();
                        if (null != c && null != u && 0 !== u.sprites.length) return null == e ? void 0 : e.createConfetti(n, c, u, a, o)
                    }), [e, t]),
                    c = i.useCallback((function(e, t, n) {
                        for (var i = [], r = 0; r < t; r++) {
                            var a = u(e, n);
                            a && i.push(a)
                        }
                        return i
                    }), [u]),
                    l = i.useCallback((function(n) {
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
                        createMultipleConfetti: c,
                        addConfetti: l,
                        clearConfetti: f,
                        deleteConfetti: s,
                        isReady: a && null != t && null != e
                    }
                }), [l, f, e, u, c, s, a, t])
            }
        },
        708313: (e, t, n) => {
            n.d(t, {
                C: () => i
            });
            var i;
            ! function(e) {
                e.MESSAGE = "message";
                e.CHANNEL = "channel";
                e.USER = "user"
            }(i || (i = {}));
            new Set(["channel", "message", "user"])
        },
        668073: (e, t, n) => {
            n.d(t, {
                T: () => i
            });
            var i;
            ! function(e) {
                e[e.HIDDEN = 1] = "HIDDEN";
                e[e.DEMOTED = 2] = "DEMOTED"
            }(i || (i = {}));
            new Set([1, 2])
        },
        989824: (e, t, n) => {
            n.d(t, {
                Z: () => a
            });
            var i = n(667294),
                r = {};

            function a(e) {
                var t = (0, i.useRef)(r);
                t.current === r && (t.current = e());
                return t.current
            }
        }
    }
]);
//# sourceMappingURL=d3e25b2e311fd92b1cc2.js.map