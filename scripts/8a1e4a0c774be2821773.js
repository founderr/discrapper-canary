"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [41484, 38479], {
        652411: (e, t, r) => {
            r.d(t, {
                O_: () => I,
                qA: () => f,
                Ji: () => D,
                uR: () => T
            });
            var n = r(667294),
                i = r(468811),
                o = r(294184),
                a = r.n(o);

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
                            i = n.x,
                            o = n.y;
                        this.velocity.update(r), this.velocity.x += i, this.velocity.y += o, this.position.update(r), this.position.x += this.velocity.x * r, this.position.y += this.velocity.y * r, this.size.update(r), this.opacity.update(r), this._lastUpdatedAt = t
                    }, e.prototype.previewPositionUpdate = function(e, t) {
                        var r = t / 100,
                            n = this.velocity.previewUpdate(r),
                            i = this.getNewForces(e, r),
                            o = i.x,
                            a = i.y;
                        n.x += o, n.y += a;
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
                d = function(e, t) {
                    return d = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }, d(e, t)
                };

            function p(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function r() {
                    this.constructor = e
                }
                d(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }
            var h = function() {
                return h = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }, h.apply(this, arguments)
            };
            var g = function(e) {
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
                v = function(e) {
                    function t(t, r, n) {
                        var i = e.call(this, t, r) || this;
                        return i._z = n, i
                    }
                    return p(t, e), t.prototype.update = function(t) {
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
                }(y),
                b = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return p(t, e), t.prototype.update = function() {}, t.prototype.previewUpdate = function() {
                        return this.value
                    }, t
                }(g),
                m = function(e) {
                    function t(t, r) {
                        var n = e.call(this, t) || this;
                        return n.addValue = r, n
                    }
                    return p(t, e), t.prototype.update = function(e) {
                        this.value = this.previewUpdate(e)
                    }, t.prototype.previewUpdate = function(e) {
                        return this.value + this.addValue * e
                    }, t
                }(g),
                O = function(e) {
                    function t(t, r, n, i, o, a) {
                        var c = e.call(this, t) || this;
                        c.min = r, c.max = n, c.duration = i;
                        var l = c.value / (c.max - c.min) * c.duration,
                            u = isNaN(l) ? 0 : l;
                        return c.timePassed = u < 0 ? c.duration - u : u, c.directionMultiplier = o, c.easingFunction = a, c
                    }
                    return p(t, e), t.prototype.update = function(e) {
                        var t = this.doUpdate(e),
                            r = t[0],
                            n = t[1],
                            i = t[2];
                        this.value = r, this.directionMultiplier = i, this.timePassed = n
                    }, t.prototype.previewUpdate = function(e) {
                        return this.doUpdate(e)[0]
                    }, t.prototype.doUpdate = function(e) {
                        var t = this.max - this.min,
                            r = this.timePassed + e * this.directionMultiplier,
                            n = Math.min(Math.max(r, 0), this.duration),
                            i = r < 0 || r > this.duration ? -1 * this.directionMultiplier : this.directionMultiplier,
                            o = this.easingFunction(n, this.min, t, this.duration);
                        return [isNaN(o) ? 0 : o, n, i]
                    }, t
                }(g);

            function w(e, t) {
                return e === t ? e : Math.random() * (t - e + 1) + e
            }

            function E(e) {
                var t = Math.floor(w(0, e.length - 1));
                return [e[t], t]
            }

            function C(e, t) {
                return E([e, t])[0]
            }

            function x(e) {
                return "number" == typeof e ? {
                    x: e,
                    y: e
                } : e
            }

            function j(e) {
                return "number" == typeof e ? {
                    x: e,
                    y: e,
                    z: e
                } : e
            }

            function P(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            return new b(e.value);
                        case "static-random":
                            return new b(w(e.minValue, e.maxValue));
                        case "linear":
                            return new m(e.value, e.addValue);
                        case "linear-random":
                            return new m(w(e.minValue, e.maxValue), w(e.minAddValue, e.maxAddValue));
                        case "oscillating":
                            return new O(e.value, e.start, e.final, e.duration, e.direction, e.easingFunction);
                        case "oscillating-random":
                            return new O(w(e.minValue, e.maxValue), w(e.minStart, e.maxStart), w(e.minFinal, e.maxFinal), w(e.minDuration, e.maxDuration), C(e.minDirection, e.maxDirection), E(e.easingFunctions)[0])
                    }
                }(h(h({}, e), {
                    valueType: "number"
                }))
            }

            function _(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            var t = x(e.value);
                            return new y(new b(t.x), new b(t.y));
                        case "static-random":
                            var r = x(e.minValue),
                                n = x(e.maxValue);
                            return new y(new b(w(r.x, n.x)), new b(w(r.y, n.y)));
                        case "linear":
                            t = x(e.value);
                            var i = x(e.addValue);
                            return new y(new m(t.x, i.x), new m(t.y, i.y));
                        case "linear-random":
                            r = x(e.minValue), n = x(e.maxValue);
                            var o = x(e.minAddValue),
                                a = x(e.maxAddValue);
                            return new y(new m(w(r.x, n.x), w(o.x, a.x)), new m(w(r.y, n.y), w(o.x, a.x)));
                        case "oscillating":
                            t = x(e.value);
                            var c = x(e.start),
                                l = x(e.final),
                                u = x(e.duration),
                                s = x(e.direction);
                            return new y(new O(t.x, c.x, l.x, u.x, s.x, e.easingFunction), new O(t.y, c.y, l.y, u.x, s.y, e.easingFunction));
                        case "oscillating-random":
                            r = x(e.minValue), n = x(e.maxValue);
                            var f = x(e.minStart),
                                d = x(e.maxStart),
                                p = x(e.minFinal),
                                h = x(e.maxFinal),
                                g = x(e.minDuration),
                                v = x(e.maxDuration),
                                j = x(e.minDirection),
                                P = x(e.maxDirection);
                            return new y(new O(w(r.x, n.x), w(f.x, d.x), w(p.x, h.x), w(g.x, v.x), C(j.x, P.x), E(e.easingFunctions)[0]), new O(w(r.y, n.y), w(f.y, d.y), w(p.y, h.y), w(g.y, v.y), C(j.y, P.y), E(e.easingFunctions)[0]))
                    }
                }(h(h({}, e), {
                    valueType: "Vector2"
                }))
            }

            function R(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            var t = j(e.value);
                            return new v(new b(t.x), new b(t.y), new b(t.z));
                        case "static-random":
                            var r = j(e.minValue),
                                n = j(e.maxValue);
                            return new v(new b(w(r.x, n.x)), new b(w(r.y, n.y)), new b(w(r.z, n.z)));
                        case "linear":
                            t = j(e.value);
                            var i = j(e.addValue);
                            return new v(new m(t.x, i.x), new m(t.y, i.y), new m(t.z, i.z));
                        case "linear-random":
                            r = j(e.minValue), n = j(e.maxValue);
                            var o = j(e.minAddValue),
                                a = j(e.maxAddValue);
                            return new v(new m(w(r.x, n.x), w(o.x, a.x)), new m(w(r.y, n.y), w(o.y, a.y)), new m(w(r.z, n.z), w(o.z, a.z)));
                        case "oscillating":
                            t = j(e.value);
                            var c = j(e.start),
                                l = j(e.final),
                                u = j(e.duration),
                                s = j(e.direction);
                            return new v(new O(t.x, c.x, l.x, u.x, s.x, e.easingFunction), new O(t.y, c.y, l.y, u.z, s.y, e.easingFunction), new O(t.z, c.z, l.z, u.z, s.z, e.easingFunction));
                        case "oscillating-random":
                            r = j(e.minValue), n = j(e.maxValue);
                            var f = j(e.minStart),
                                d = j(e.maxStart),
                                p = j(e.minFinal),
                                h = j(e.maxFinal),
                                g = j(e.minDuration),
                                y = j(e.maxDuration),
                                x = j(e.minDirection),
                                P = j(e.maxDirection);
                            return new v(new O(w(r.x, n.x), w(f.x, d.x), w(p.x, h.x), w(g.x, y.x), C(x.x, P.x), E(e.easingFunctions)[0]), new O(w(r.y, n.y), w(f.y, d.y), w(p.y, h.y), w(g.y, y.y), C(x.y, P.y), E(e.easingFunctions)[0]), new O(w(r.z, n.z), w(f.z, d.z), w(p.z, h.z), w(g.z, y.z), C(x.z, P.z), E(e.easingFunctions)[0]))
                    }
                }(h(h({}, e), {
                    valueType: "Vector3"
                }))
            }

            function N(e, t, r, n, i) {
                var o = function(e, t) {
                        return h(h({
                            id: t
                        }, s), e)
                    }(t, e),
                    a = _(o.size),
                    c = function(e, t) {
                        if (null != e) {
                            var r = t.sprites.findIndex((function(t) {
                                return r = t, "string" == typeof(n = e) ? r.src === n && r.colorize : r.src === n.src && r.colorize === n.colorize;
                                var r, n
                            }));
                            if (-1 !== r) return [e, r]
                        }
                        return E(t.sprites)
                    }(n, r),
                    l = c[0],
                    f = c[1],
                    d = function(e, t, r) {
                        if (! function(e) {
                                return "string" == typeof e || e.colorize
                            }(e)) return 0;
                        var n = null != t ? r.colors.findIndex((function(e) {
                            return e === t
                        })) : -1;
                        return -1 !== n ? n : Math.floor(w(0, r.colors.length - 1))
                    }(null != n ? n : l, i, r);
                return new u({
                    id: e,
                    position: _(o.position),
                    velocity: _(o.velocity),
                    rotation: R(o.rotation),
                    dragCoefficient: _(o.dragCoefficient),
                    size: a,
                    opacity: P(o.opacity),
                    spriteX: d * r.spriteWidth + 2 * d,
                    spriteY: f * r.spriteHeight + 2 * f,
                    spriteWidth: r.spriteWidth,
                    spriteHeight: r.spriteHeight
                })
            }
            var I = n.forwardRef((function(e, t) {
                var o = e.className,
                    a = e.environment,
                    l = e.onClick,
                    u = e.onMouseDown,
                    s = e.onMouseMove,
                    f = e.onMouseUp,
                    d = e.onBeforeRender,
                    p = e.onAfterRender,
                    g = function(e, t) {
                        var r = {};
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var i = 0;
                            for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]])
                        }
                        return r
                    }(e, ["className", "environment", "onClick", "onMouseDown", "onMouseMove", "onMouseUp", "onBeforeRender", "onAfterRender"]),
                    y = n.useRef(null),
                    v = n.useRef(new Map),
                    b = n.useRef(null),
                    m = n.useRef(0),
                    O = n.useRef(0),
                    w = n.useCallback((function() {
                        var e = y.current;
                        if (null != e) {
                            var t = e.getContext("2d");
                            if (null != t) {
                                t.clearRect(0, 0, e.width, e.height), null == d || d(t), v.current.forEach((function(r, n) {
                                    var i = r.confetti,
                                        o = r.spriteCanvas;
                                    i.update(a), i.draw(o, t), i.shouldDestroy(e, a) && v.current.delete(n)
                                })), null == p || p(t), v.current.size > 0 ? b.current = window.requestAnimationFrame(w) : (t.clearRect(0, 0, e.width, e.height), b.current = null);
                                var r = Date.now();
                                0 !== m.current && (O.current = 1e3 / (r - m.current)), m.current = r
                            }
                        }
                    }), [a, p, d]);
                n.useEffect((function() {
                    null != b.current && (window.cancelAnimationFrame(b.current), b.current = window.requestAnimationFrame(w))
                }), [w]);
                var E = n.useCallback((function(e, t) {
                        v.current.set(e.id, {
                            confetti: e,
                            spriteCanvas: t
                        }), null == b.current && w()
                    }), [w]),
                    C = n.useCallback((function(e, t, r, n, o) {
                        var a, c = N(null !== (a = e.id) && void 0 !== a ? a : (0, i.v4)(), e, r, n, o);
                        return E(c, t), c
                    }), [E]),
                    x = n.useCallback((function(e) {
                        v.current.delete(e)
                    }), []),
                    j = n.useCallback((function() {
                        return v.current.clear()
                    }), []),
                    P = n.useCallback((function() {
                        return y.current
                    }), []);
                n.useImperativeHandle(t, (function() {
                    return {
                        createConfetti: C,
                        addConfetti: E,
                        deleteConfetti: x,
                        clearConfetti: j,
                        getCanvas: P
                    }
                }), [C, E, x, j, P]);
                var _ = n.useCallback((function(e, t) {
                        var r, n, i = t.clickHandler,
                            o = t.mouseHandler;
                        if (null != i || null != o) {
                            var l = null === (r = y.current) || void 0 === r ? void 0 : r.getBoundingClientRect();
                            if (null != l) {
                                var u = function(e, t) {
                                    if (null == t) throw new Error("element should not be null");
                                    var r = t.getBoundingClientRect();
                                    return {
                                        x: e.clientX - r.left,
                                        y: e.clientY - r.top
                                    }
                                }(e, y.current);
                                if (c(u, {
                                        x: l.left,
                                        y: l.top,
                                        width: l.width,
                                        height: l.height
                                    })) {
                                    if (null != o) return o(e);
                                    if (null != i) {
                                        var s = -1e3 / O.current * 2,
                                            f = function(e, t) {
                                                for (var r = 0, n = Array.from(e.values()); r < n.length; r++) {
                                                    var i = n[r];
                                                    if (null != i && t(i)) return i
                                                }
                                                return null
                                            }(v.current, (function(e) {
                                                var t = e.confetti,
                                                    r = t.previewPositionUpdate(a, s);
                                                return c(u, {
                                                    x: r.x - t.width / 2,
                                                    y: r.y - t.height / 2,
                                                    width: t.width,
                                                    height: t.height
                                                })
                                            }));
                                        i(e, null !== (n = null == f ? void 0 : f.confetti) && void 0 !== n ? n : null)
                                    }
                                }
                            }
                        }
                    }), [a]),
                    R = n.useCallback((function(e) {
                        return _(e, {
                            clickHandler: l
                        })
                    }), [_, l]),
                    I = n.useCallback((function(e) {
                        return _(e, {
                            clickHandler: u
                        })
                    }), [_, u]),
                    D = n.useCallback((function(e) {
                        return _(e, {
                            mouseHandler: s
                        })
                    }), [_, s]),
                    T = n.useCallback((function(e) {
                        return _(e, {
                            mouseHandler: f
                        })
                    }), [_, f]);
                return n.useEffect((function() {
                    var e = function(e, t, r) {
                        null != r && window.addEventListener(e, t)
                    };
                    return e("click", R, l), e("mousedown", I, u), e("mousemove", D, s), e("mouseup", T, f),
                        function() {
                            window.removeEventListener("click", R), window.removeEventListener("mousedown", I), window.removeEventListener("mousemove", D), window.removeEventListener("mouseup", D)
                        }
                }), [R, I, D, T, l, u, s, f]), n.useEffect((function() {
                    var e = y.current,
                        t = new ResizeObserver((function() {
                            ! function(e) {
                                if (null != e) {
                                    var t = e.getBoundingClientRect(),
                                        n = t.width,
                                        i = t.height;
                                    e.width = n * r.g.devicePixelRatio, e.height = i * r.g.devicePixelRatio
                                }
                            }(y.current)
                        }));
                    return null != e && t.observe(e),
                        function() {
                            null != e && t.unobserve(e)
                        }
                }), []), n.createElement("canvas", h({}, g, {
                    className: o,
                    ref: y
                }))
            }));
            ! function(e, t) {
                void 0 === t && (t = {});
                var r = t.insertAt;
                if ("undefined" != typeof document) {
                    var n = document.head || document.getElementsByTagName("head")[0],
                        i = document.createElement("style");
                    i.type = "text/css",
                        "top" === r && n.firstChild ? n.insertBefore(i, n.firstChild) : n.appendChild(i), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(document.createTextNode(e))
                }
            }(".SpriteCanvas-module_spriteCanvasHidden__ndzQV {\n  display: none;\n  position: absolute;\n  width: 0;\n  height: 0;\n  left: -100%;\n}\n");
            var D = n.forwardRef((function(e, t) {
                var r, o = e.className,
                    c = e.visible,
                    l = void 0 !== c && c,
                    u = e.sprites,
                    s = e.colors,
                    f = e.spriteWidth,
                    d = e.spriteHeight,
                    p = n.useRef(null),
                    h = n.useRef([]),
                    g = n.useRef(!1),
                    y = n.useRef({});
                n.useImperativeHandle(t, (function() {
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
                            var t = (0, i.v4)();
                            return y.current[t] = e, t
                        },
                        removeReadyListener: function(e) {
                            delete y.current[e]
                        },
                        isReady: g.current
                    }
                }), [s, d, f]);
                var v = n.useCallback((function() {
                        var e = p.current,
                            t = null == e ? void 0 : e.getContext("2d", {
                                willReadFrequently: !0
                            });
                        null != t && null != e && (t.clearRect(0, 0, e.width, e.height),
                            h.current.forEach((function(e, r) {
                                var n = function(n, i) {
                                    var o = f * i + 2 * i,
                                        a = d * r + 2 * r;
                                    if (t.drawImage(e.image, o, a, f, d), null != n) {
                                        for (var c = t.getImageData(o, a, f, d), l = function(e) {
                                                "#" === e[0] && (e = e.slice(1));
                                                var t = parseInt(e, 16);
                                                return {
                                                    r: t >> 16 & 255,
                                                    g: t >> 8 & 255,
                                                    b: 255 & t
                                                }
                                            }(n), u = 0; u < c.data.length; u += 4) c.data[u] = l.r, c.data[u + 1] = l.g, c.data[u + 2] = l.b;
                                        t.putImageData(c, o, a)
                                    }
                                };
                                e.colorize ? s.forEach((function(e, t) {
                                    return n(e, t)
                                })) : n(null, 0)
                            })))
                    }), [s, d, f]),
                    b = n.useCallback((function() {
                        var e = u.map((function(e) {
                            var t = new Image,
                                r = "string" == typeof e ? e : e.src,
                                n = "string" == typeof e || e.colorize;
                            t.src = r;
                            var i = new Promise((function(e) {
                                t.onload = e
                            }));
                            return {
                                colorize: n,
                                image: t,
                                src: r,
                                loadPromise: i
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
                    m = n.useCallback((function(e) {
                        for (var t in y.current) y.current[t](e)
                    }), []),
                    O = n.useCallback((function() {
                        return function(e, t, r, n) {
                            return new(r || (r = Promise))((function(i, o) {
                                function a(e) {
                                    try {
                                        l(n.next(e))
                                    } catch (e) {
                                        o(e)
                                    }
                                }

                                function c(e) {
                                    try {
                                        l(n.throw(e))
                                    } catch (e) {
                                        o(e)
                                    }
                                }

                                function l(e) {
                                    var t;
                                    e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                                        e(t)
                                    }))).then(a, c)
                                }
                                l((n = n.apply(e, t || [])).next())
                            }))
                        }(void 0, void 0, void 0, (function() {
                            return function(e, t) {
                                var r, n, i, o, a = {
                                    label: 0,
                                    sent: function() {
                                        if (1 & i[0]) throw i[1];
                                        return i[1]
                                    },
                                    trys: [],
                                    ops: []
                                };
                                return o = {
                                    next: c(0),
                                    throw: c(1),
                                    return: c(2)
                                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                                    return this
                                }), o;

                                function c(c) {
                                    return function(l) {
                                        return function(c) {
                                            if (r) throw new TypeError("Generator is already executing.");
                                            for (; o && (o = 0, c[0] && (a = 0)), a;) try {
                                                if (r = 1, n && (i = 2 & c[0] ? n.return : c[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, c[1])).done) return i;
                                                switch (n = 0, i && (c = [2 & c[0], i.value]), c[0]) {
                                                    case 0:
                                                    case 1:
                                                        i = c;
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
                                                        if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                                            a = 0;
                                                            continue
                                                        }
                                                        if (3 === c[0] && (!i || c[1] > i[0] && c[1] < i[3])) {
                                                            a.label = c[1];
                                                            break
                                                        }
                                                        if (6 === c[0] && a.label < i[1]) {
                                                            a.label = i[1], i = c;
                                                            break
                                                        }
                                                        if (i && a.label < i[2]) {
                                                            a.label = i[2], a.ops.push(c);
                                                            break
                                                        }
                                                        i[2] && a.ops.pop(), a.trys.pop();
                                                        continue
                                                }
                                                c = t.call(e, a)
                                            } catch (e) {
                                                c = [6, e], n = 0
                                            } finally {
                                                r = i = 0
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
                                        return [4, b()];
                                    case 1:
                                        return e.sent(), v(), g.current = !0, m(!0), [2]
                                }
                            }))
                        }))
                    }), [m, b, v]);
                return n.useEffect((function() {
                    O()
                }), [O]), n.useEffect((function() {
                    return function() {
                        return m(!1)
                    }
                }), [m]), n.useEffect((function() {
                    null != p.current && (p.current.width = (f + 2) * Math.max(s.length, 1), p.current.height = (d + 2) * u.length)
                }), [s.length, d, f, u.length]), n.createElement("canvas", {
                    ref: p,
                    className: a()(o, (r = {}, r["SpriteCanvas-module_spriteCanvasHidden__ndzQV"] = !l, r))
                })
            }));

            function T(e, t) {
                var r, i = n.useState(null !== (r = null == t ? void 0 : t.isReady) && void 0 !== r && r),
                    o = i[0],
                    a = i[1];
                n.useEffect((function() {
                    var e = null == t ? void 0 : t.addReadyListener(a);
                    return function() {
                        null != e && (null == t || t.removeReadyListener(e))
                    }
                }), [t]);
                var c = n.useCallback((function(r, n) {
                        var i = void 0 === n ? {} : n,
                            o = i.sprite,
                            a = i.color,
                            c = null == t ? void 0 : t.getCreateData(),
                            l = null == t ? void 0 : t.getCanvas();
                        if (null != l && null != c && 0 !== c.sprites.length) return null == e ? void 0 : e.createConfetti(r, l, c, o, a)
                    }), [e, t]),
                    l = n.useCallback((function(e, t, r) {
                        for (var n = [], i = 0; i < t; i++) {
                            var o = c(e, r);
                            o && n.push(o)
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
                        isReady: o && null != t && null != e
                    }
                }), [u, f, e, c, l, s, o, t])
            }
        },
        661299: (e, t, r) => {
            r.d(t, {
                Z: () => d
            });
            var n = r(785893),
                i = (r(667294),
                    r(294184)),
                o = r.n(i),
                a = r(468811),
                c = r.n(a),
                l = r(349480),
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
            const d = function(e) {
                var t, r = e.open,
                    i = e.className,
                    a = e.withHighlight,
                    c = void 0 !== a && a;
                return (0, n.jsxs)("svg", {
                    width: "18",
                    height: "18",
                    className: o()(u().button, i, (t = {}, s(t, u().open, r), s(t, u().withHighlight, c), t)),
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
        627379: (e, t, r) => {
            r.d(t, {
                O: () => u
            });
            var n = r(785893),
                i = (r(667294), r(795308)),
                o = r(633878);

            function a(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function c(e, t) {
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

            function l(e, t) {
                if (null == e) return {};
                var r, n, i = function(e, t) {
                    if (null == e) return {};
                    var r, n, i = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        t.indexOf(r) >= 0 || (i[r] = e[r])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                    }
                }
                return i
            }
            var u = function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    u = e.height,
                    s = void 0 === u ? 24 : u,
                    f = e.color,
                    d = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    h = void 0 === p ? "" : p,
                    g = l(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", c(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            a(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(g)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm2.18 13.87c-.625 0-1.178-.162-1.66-.485-.482-.324-.855-.777-1.121-1.359C4.133 13.437 4 12.762 4 12c0-.755.14-1.423.42-2.005.288-.583.701-1.039 1.24-1.37.546-.33 1.197-.495 1.951-.495.64 0 1.211.136 1.714.41.51.272.895.657 1.154 1.153l-1.218.873c-.367-.676-.913-1.013-1.639-1.013-.661 0-1.168.215-1.52.646-.352.425-.528 1.025-.528 1.8 0 .784.176 1.388.528 1.812.352.424.859.636 1.52.636.295 0 .564-.054.809-.162.251-.115.445-.27.582-.463v-.927H7.299v-1.402h3.245v4.226H9.272l-.205-.712c-.424.575-1.053.863-1.887.863Zm6.34-.151h-1.574V8.28h1.574v7.438Zm1.51 0h1.574v-2.824h2.76v-1.423h-2.76V9.704H20V8.28h-4.97v7.438Z",
                        clipRule: "evenodd",
                        className: h
                    })
                }))
            }
        },
        663207: (e, t, r) => {
            r.d(t, {
                r: () => u
            });
            var n = r(785893),
                i = (r(667294), r(795308)),
                o = r(633878);

            function a(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function c(e, t) {
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

            function l(e, t) {
                if (null == e) return {};
                var r, n, i = function(e, t) {
                    if (null == e) return {};
                    var r, n, i = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        t.indexOf(r) >= 0 || (i[r] = e[r])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                    }
                }
                return i
            }
            var u = function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    u = e.height,
                    s = void 0 === u ? 24 : u,
                    f = e.color,
                    d = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    h = void 0 === p ? "" : p,
                    g = l(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", c(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            a(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(g)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        d: "M10.815 2.861c.373-1.148 1.997-1.148 2.37 0l1.893 5.824H21.2c1.207 0 1.71 1.545.733 2.255l-4.954 3.599 1.892 5.824c.373 1.148-.941 2.103-1.918 1.393L12 18.156l-4.954 3.6c-.977.71-2.291-.245-1.918-1.393L7.02 14.54l-4.954-3.6c-.976-.71-.475-2.254.733-2.254h6.123l1.893-5.824Z",
                        className: h
                    })
                }))
            }
        },
        255875: (e, t, r) => {
            r.d(t, {
                E: () => p,
                h: () => h
            });
            var n = r(785893),
                i = r(667294),
                o = r(652411),
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
                        return l.dG4
                    },
                    removeClickListener: l.dG4
                },
                p = i.createContext(d);

            function h(e) {
                var t = e.children,
                    r = e.confettiCanvas,
                    l = e.spriteCanvas,
                    u = e.baseConfig,
                    h = e.addClickListener,
                    g = e.removeClickListener,
                    y = (0, o.uR)(r, l),
                    v = (0, a.ZP)([c.Z], (function() {
                        return c.Z.useReducedMotion
                    })),
                    b = i.useMemo((function() {
                        return v ? d : {
                            confettiCanvas: r,
                            cannon: y,
                            createConfetti: function(e, t) {
                                return y.createConfetti(s({}, u, e), t)
                            },
                            createConfettiAt: function(e, t, r, n) {
                                return y.createConfetti(s(f(s({}, u), {
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
                                return y.createMultipleConfetti(s({}, u, e), t, r)
                            },
                            createMultipleConfettiAt: function(e, t, r) {
                                var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                                    i = arguments.length > 4 ? arguments[4] : void 0;
                                return y.createMultipleConfetti(s(f(s({}, u), {
                                    position: {
                                        type: "static",
                                        value: {
                                            x: e,
                                            y: t
                                        }
                                    }
                                }), r), n, i)
                            },
                            addClickListener: h,
                            removeClickListener: g
                        }
                    }), [h, u, y, r, v, g]);
                return (0, n.jsx)(p.Provider, {
                    value: b,
                    children: t
                })
            }
        },
        337509: (e, t, r) => {
            r.d(t, {
                Q: () => n,
                i: () => o
            });
            var n, i = r(761673);
            ! function(e) {
                e[e.PARTNERED = 0] = "PARTNERED";
                e[e.VERIFIED = 1] = "VERIFIED";
                e[e.VERIFIED_AND_PARTNERED = 2] = "VERIFIED_AND_PARTNERED";
                e[e.COMMUNITY = 3] = "COMMUNITY";
                e[e.DISCOVERABLE = 4] = "DISCOVERABLE";
                e[e.STAFF = 5] = "STAFF";
                e[e.NONE = 6] = "NONE"
            }(n || (n = {}));

            function o(e) {
                return e.staff ? n.STAFF : e.verified && e.partnered ? n.VERIFIED_AND_PARTNERED : e.verified ? n.VERIFIED : e.partnered ? n.PARTNERED : e.community && e.visibility === i.PZ.PUBLIC ? n.DISCOVERABLE : e.community ? n.COMMUNITY : n.NONE
            }
        },
        243399: (e, t, r) => {
            r.d(t, {
                E: () => i
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

            function i(e) {
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
            var n, i = r(848285),
                o = r(2590);
            ! function(e) {
                e.PUBLIC = "PUBLIC";
                e.INVITE_ONLY = "INVITE_ONLY"
            }(n || (n = {}));

            function a(e) {
                var t = new Set(e.features),
                    r = t.has(o.oNc.COMMUNITY) && t.has(o.oNc.DISCOVERABLE) ? n.PUBLIC : n.INVITE_ONLY,
                    a = function(e) {
                        if (null == e) return !1;
                        if (e instanceof i.Z) return e.premiumSubscriberCount > 0 || e.premiumTier > o.Eu4.NONE;
                        if (null != e.premiumSubscriptionCount) return e.premiumSubscriptionCount > 0;
                        return !1
                    }(e),
                    c = 0;
                if (a) {
                    var l;
                    c = null !== (l = e instanceof i.Z ? e.premiumSubscriberCount : e.premiumSubscriptionCount) && void 0 !== l ? l : 0
                }
                var u = e instanceof i.Z ? e.premiumTier : o.Eu4.NONE;
                return {
                    verified: t.has(o.oNc.VERIFIED),
                    partnered: t.has(o.oNc.PARTNERED),
                    community: t.has(o.oNc.COMMUNITY),
                    staff: t.has(o.oNc.INTERNAL_EMPLOYEE_ONLY),
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
                i = r(243399),
                o = r(761673),
                a = new Set([n.Q.PARTNERED, n.Q.VERIFIED, n.Q.VERIFIED_AND_PARTNERED, n.Q.COMMUNITY, n.Q.DISCOVERABLE]);

            function c(e) {
                var t;
                if (!(0, i.E)(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "")) return !1;
                if (null == e) return !1;
                var r = (0, o.XX)(e),
                    c = (0, n.i)(r);
                return a.has(c)
            }
        },
        275086: (e, t, r) => {
            r.d(t, {
                c: () => y
            });
            var n = r(785893),
                i = (r(667294), r(304548)),
                o = r(661299),
                a = r(393299),
                c = r(930865),
                l = r(596801),
                u = r(733274),
                s = r(2590),
                f = r(473708),
                d = r(562275),
                p = r.n(d);

            function h(e) {
                var t = e.guild,
                    r = e.banner;
                return (0, n.jsx)("div", {
                    className: p().guildBanner,
                    style: {
                        backgroundImage: "url(".concat(r)
                    },
                    children: (0, n.jsxs)("div", {
                        className: p().guildHeader,
                        children: [(0, n.jsx)(a.Z, {
                            guild: t,
                            isBannerVisible: !0
                        }), (0, n.jsx)(i.Heading, {
                            className: p().guildName,
                            variant: "heading-md/semibold",
                            children: t.toString()
                        }), (0, n.jsx)(o.Z, {
                            className: p().dropdown,
                            open: !1
                        })]
                    })
                })
            }

            function g(e, t) {
                var r = (0, c.nW)(e);
                return t ? f.Z.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_ANIMATED.format({
                    targetLevelOrPlan: r
                }) : f.Z.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_STATIC.format({
                    targetLevelOrPlan: r
                })
            }

            function y(e) {
                var t = e.analyticsLocations,
                    r = e.analyticsLocation,
                    i = e.guild,
                    o = e.isGIF,
                    a = e.banner,
                    d = o ? (0, c._p)(s.oNc.ANIMATED_BANNER) : (0, c._p)(s.oNc.BANNER);
                null != d && (0, l.Z)({
                    analyticsLocations: t,
                    analyticsSourceLocation: r,
                    guild: i,
                    headerProps: {
                        title: f.Z.Messages.GUILD_BANNER_UPSELL_MODAL_TITLE,
                        subtitle: g(d, o),
                        image: (0, n.jsx)(h, {
                            guild: i,
                            banner: a
                        })
                    },
                    perkIntro: f.Z.Messages.GUILD_BANNER_UPSELL_MODAL_PERK_INTRO,
                    perks: o ? (0, u.zC)() : (0, u.XO)()
                })
            }
        },
        393299: (e, t, r) => {
            r.d(t, {
                Z: () => M
            });
            var n, i = r(785893),
                o = (r(667294), r(294184)),
                a = r.n(o),
                c = r(202351),
                l = r(304548),
                u = r(491379),
                s = r(591406),
                f = r(859917),
                d = r(784648),
                p = r(2590),
                h = r(233593),
                g = r.n(h);

            function y(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }
            var v, b = (y(n = {}, p.Eu4.NONE, g().iconBackgroundTierNone),
                    y(n, p.Eu4.TIER_1, g().iconBackgroundTierOne), y(n, p.Eu4.TIER_2, g().iconBackgroundTierTwo), y(n, p.Eu4.TIER_3, g().iconBackgroundTierThree), n),
                m = (y(v = {}, p.Eu4.NONE, g().iconTierNone), y(v, p.Eu4.TIER_1, g().iconTierOne), y(v, p.Eu4.TIER_2, g().iconTierTwo), y(v, p.Eu4.TIER_3, g().iconTierThree), v);

            function O(e) {
                var t = e.premiumTier,
                    r = e.iconBackgroundClassName,
                    n = e.iconClassName,
                    o = e.size;
                return (0, i.jsx)(f.Z, {
                    className: a()(r, b[t]),
                    size: o,
                    children: (0, i.jsx)(d.Z, {
                        tier: t,
                        className: a()(n, g().boostedGuildIconGem, m[t])
                    })
                })
            }
            var w = r(21372),
                E = r(473903),
                C = r(206986),
                x = r(521723),
                j = r(930865),
                P = r(473708),
                _ = r(625337),
                R = r.n(_);

            function N(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function I(e, t) {
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

            function D(e) {
                var t = e.guild,
                    r = e.isBannerVisible,
                    n = e.disableBoostClick,
                    o = (0, c.e7)([E.default, w.ZP], (function() {
                        var e = E.default.getCurrentUser();
                        return w.ZP.isMember(t.id, null == e ? void 0 : e.id)
                    })),
                    a = t.premiumTier,
                    u = t.premiumSubscriberCount;
                if (0 === u && a === p.Eu4.NONE) return null;
                var f = function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        o && !n && (0, s.f)({
                            guildId: t.id,
                            location: {
                                section: p.jXE.GUILD_HEADER,
                                object: p.qAy.BOOST_GEM_ICON
                            }
                        })
                    },
                    d = a === p.Eu4.NONE ? P.Z.Messages.PREMIUM_GUILD_HEADER_BADGE_NO_TIER : j.nW(a),
                    h = (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("div", {
                            className: R().tierTooltipTitle,
                            children: d
                        }), (0, i.jsx)("div", {
                            children: P.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_SUBSCRIBER_COUNT_TOOLTIP.format({
                                subscriberCount: u
                            })
                        })]
                    });
                return (0, i.jsx)("div", {
                    className: R().guildIconContainer,
                    children: (0,
                        i.jsx)(l.Tooltip, {
                        text: h,
                        position: "bottom",
                        "aria-label": null != d ? d : "",
                        children: function(e) {
                            return (0, i.jsx)(l.Clickable, I(function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {},
                                        n = Object.keys(r);
                                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                                    }))));
                                    n.forEach((function(t) {
                                        N(e, t, r[t])
                                    }))
                                }
                                return e
                            }({}, e), {
                                className: R().premiumGuildIcon,
                                onClick: f,
                                children: (0, i.jsx)(O, {
                                    premiumTier: a,
                                    iconBackgroundClassName: r ? R().boostedGuildTierIconBackgroundWithVisibleBanner : null,
                                    iconClassName: r && a !== p.Eu4.TIER_3 ? R().boostedGuildTierMutedIconWithVisibleBanner : null
                                })
                            }))
                        }
                    })
                })
            }

            function T(e) {
                var t = e.guild,
                    r = e.disableColor,
                    n = e.disableBoostClick;
                return (0, u.Z)(t) ? (0, i.jsx)("div", {
                    className: R().guildIconV2Container,
                    children: (0, i.jsx)(x.Z, {
                        guild: t,
                        tooltipPosition: "bottom",
                        tooltipColor: l.Tooltip.Colors.PRIMARY,
                        className: a()(R().guildBadge, N({}, R().disableColor, r)),
                        disableBoostClick: n
                    })
                }) : (0, i.jsx)("div", {
                    className: R().guildIconContainer,
                    children: (0, i.jsx)(C.Z, {
                        guild: t,
                        tooltipPosition: "bottom",
                        tooltipColor: l.Tooltip.Colors.PRIMARY,
                        className: a()(R().guildBadge, N({}, R().disableColor, r))
                    })
                })
            }

            function M(e) {
                var t = e.guild,
                    r = e.isBannerVisible,
                    n = e.disableBoostClick;
                return (0, u.Z)(t) ? (0, i.jsx)(T, {
                    guild: t,
                    disableColor: !1,
                    disableBoostClick: n
                }) : t.hasFeature(p.oNc.VERIFIED) || t.hasFeature(p.oNc.PARTNERED) ? (0, i.jsx)(T, {
                    guild: t,
                    disableColor: !r
                }) : (0, i.jsx)(D, {
                    guild: t,
                    isBannerVisible: r,
                    disableBoostClick: n
                })
            }
        },
        311260: (e, t, r) => {
            r.d(t, {
                $p: () => s,
                PT: () => d,
                U$: () => p,
                Es: () => g,
                kH: () => y,
                AK: () => v,
                Ae: () => b
            });
            var n = r(496486),
                i = r(921431);

            function o(e, t, r, n, i, o, a) {
                try {
                    var c = e[o](a),
                        l = c.value
                } catch (e) {
                    r(e);
                    return
                }
                c.done ? t(l) : Promise.resolve(l).then(n, i)
            }

            function a(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, i) {
                        var a = e.apply(t, r);

                        function c(e) {
                            o(a, n, i, c, l, "next", e)
                        }

                        function l(e) {
                            o(a, n, i, c, l, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }
            var c = function(e, t) {
                var r, n, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function c(o) {
                    return function(c) {
                        return function(o) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (r = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;
                                (n = 0, i) && (o = [2 & o[0], i.value]);
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
                                        n = o[1];
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
                                n = 0
                            } finally {
                                r = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, c])
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
                var i = e.naturalWidth / e.width,
                    o = t.width / 2,
                    a = t.height / 2,
                    c = (e.width / 2 - o - r.x) * i,
                    l = (e.height / 2 - a - r.y) * i,
                    u = t.width * i,
                    s = t.height * i;
                return {
                    x: c,
                    y: l,
                    scaledCropWidth: u,
                    scaledCropHeight: s,
                    canvasWidth: Math.min(u, n.width),
                    canvasHeight: Math.min(s, n.height)
                }
            }

            function s(e, t, r, n, i) {
                return f.apply(this, arguments)
            }

            function f() {
                return (f = a((function(e, t, n, o, a) {
                    var s, f, d, p, h, g, y, v;
                    return c(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                s = u(t, n, o, a), f = s.x, d = s.y, p = s.scaledCropWidth, h = s.scaledCropHeight;
                                return [4, e.arrayBuffer()];
                            case 1:
                                g = c.sent();
                                y = new Worker(new URL(r.p + r.u(92827), r.b));
                                v = new Promise((function(e, t) {
                                    y.onmessage = function(r) {
                                        var n = r.data;
                                        if (n.type === i.u.CROP_GIF_COMPLETE) {
                                            e(l(new Blob([n.result])));
                                            y.terminate()
                                        } else if (n.type === i.u.CROP_GIF_ERROR) {
                                            t(new Error("Error cropping GIF"));
                                            y.terminate()
                                        }
                                    }
                                }));
                                y.postMessage({
                                    type: i.u.CROP_GIF_START,
                                    gif: new Uint8Array(g),
                                    x: 0 | f,
                                    y: 0 | d,
                                    width: 0 | p,
                                    height: 0 | h
                                });
                                return [2, {
                                    result: v,
                                    cancelFn: function() {
                                        return y.terminate()
                                    }
                                }]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function d(e, t, r, n) {
                var i = u(e, t, r, n),
                    o = i.x,
                    a = i.y,
                    c = i.scaledCropWidth,
                    l = i.scaledCropHeight,
                    s = i.canvasWidth,
                    f = i.canvasHeight,
                    d = document.createElement("canvas");
                d.width = s;
                d.height = f;
                var p = d.getContext("2d");
                null != p && p.drawImage(e, o, a, c, l, 0, 0, d.width, d.height);
                return d.toDataURL("image/png")
            }

            function p(e, t, r) {
                return {
                    x: (0, n.clamp)(e, r.left, r.right),
                    y: (0, n.clamp)(t, r.bottom, r.top)
                }
            }

            function h(e, t, r, n) {
                var o = r,
                    a = n;
                if (r > i.vJ) {
                    o = i.vJ;
                    a = n * (i.vJ / r)
                }
                return r / n < e ? {
                    width: o,
                    height: a
                } : {
                    width: o * (t / a),
                    height: t
                }
            }

            function g(e, t, r) {
                switch (e) {
                    case i.pC.AVATAR:
                    case i.pC.AVATAR_DECORATION:
                        return {
                            width: t, height: r
                        };
                    case i.pC.BANNER:
                        return h(i.MY, i.qj, t, r);
                    case i.pC.GUILD_BANNER:
                        return h(i.Ij, i.C5, t, r);
                    case i.pC.VIDEO_BACKGROUND:
                        return h(i.Ff, i.PB, t, r);
                    case i.pC.SCHEDULED_EVENT_IMAGE:
                        return h(i.ut, i.WV, t, r);
                    case i.pC.HOME_HEADER:
                        return h(i.sX, i.SW, t, r)
                }
            }

            function y(e, t, r) {
                var n = {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0
                    },
                    i = e - r.width,
                    o = t - r.height;
                if (0 !== i) {
                    n.left = -Math.abs(i / 2);
                    n.right = i / 2
                }
                if (0 !== o) {
                    n.bottom = -Math.abs(o / 2);
                    n.top = o / 2
                }
                return n
            }

            function v(e, t, r, n) {
                switch (e) {
                    case i.pC.AVATAR:
                    case i.pC.AVATAR_DECORATION:
                        var o = Math.min(t, r);
                        return {
                            width: o, height: o
                        };
                    case i.pC.BANNER:
                        var a = Math.min(t, i.vJ);
                        return {
                            width: a, height: a * (1 / i.MY)
                        };
                    case i.pC.GUILD_BANNER:
                        var c = Math.min(t, i.vJ);
                        return {
                            width: c, height: Math.min(c * (9 / 16), n)
                        };
                    case i.pC.VIDEO_BACKGROUND:
                        var l = Math.min(t, i.vJ);
                        return {
                            width: l, height: l * (9 / 16)
                        };
                    case i.pC.SCHEDULED_EVENT_IMAGE:
                        var u = Math.min(t, i.vJ);
                        return {
                            width: u, height: .4 * u
                        };
                    case i.pC.HOME_HEADER:
                        var s = Math.min(t, i.vJ);
                        return {
                            width: s, height: s * (1 / i.sX)
                        }
                }
            }

            function b(e, t, r) {
                var n = e.naturalWidth / e.naturalHeight,
                    i = t,
                    o = r;
                e.naturalWidth > e.naturalHeight ? i /= n : o *= n;
                var a = {
                    height: i,
                    width: o
                };
                return d(e, {
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
                Z: () => k
            });
            var n = r(785893),
                i = r(667294),
                o = r(202351),
                a = r(304548),
                c = r(19585),
                l = r(275086),
                u = r(596801),
                s = r(567403),
                f = r(464187),
                d = r(217674),
                p = r(2590),
                h = r(733274),
                g = r(473708),
                y = r(460590),
                v = r.n(y);

            function b(e) {
                var t = e.analyticsSection,
                    r = e.analyticsPage,
                    i = e.isGIF,
                    y = e.banner,
                    b = (0, o.e7)([f.Z], (function() {
                        return f.Z.getGuildId()
                    })),
                    m = (0, o.e7)([s.Z], (function() {
                        return s.Z.getGuild(b)
                    })),
                    O = (0, c.Z)().analyticsLocations;
                if (null == m || m.hasFeature(p.oNc.ANIMATED_BANNER) || !i && m.hasFeature(p.oNc.BANNER)) return null;
                return (0, n.jsxs)("div", {
                    className: v().container,
                    children: [(0, n.jsx)(d.Z, {
                        className: v().guildBoostingIcon
                    }), (0, n.jsx)(a.Text, {
                        color: "header-primary",
                        variant: "text-sm/semibold",
                        children: g.Z.Messages.PREMIUM_GUILD_PREVIEW
                    }), (0, n.jsx)(a.Button, {
                        look: a.Button.Looks.LINK,
                        color: a.Button.Colors.LINK,
                        className: v().subscribeButton,
                        onClick: function() {
                            if (null != m) {
                                var e = {
                                    section: t,
                                    page: r,
                                    object: p.qAy.UPSELL_HEADER
                                };
                                null != y ? (0, l.c)({
                                    analyticsLocations: O,
                                    analyticsLocation: e,
                                    guild: m,
                                    isGIF: i,
                                    banner: y
                                }) : (0, u.Z)({
                                    analyticsLocations: O,
                                    analyticsSourceLocation: e,
                                    guild: m,
                                    perks: i ? (0, h.zC)() : (0, h.XO)()
                                })
                            }
                        },
                        children: g.Z.Messages.PREMIUM_GUILD_BOOST_SERVER
                    })]
                })
            }
            var m = r(153686),
                O = r(294184),
                w = r.n(O),
                E = r(366007),
                C = r(406493),
                x = r(98265),
                j = r(477002),
                P = r.n(j);

            function _(e) {
                var t = e.text,
                    r = e.textSize,
                    i = void 0 === r ? x.Z.Sizes.SIZE_12 : r,
                    o = e.textColor,
                    a = void 0 === o ? x.Z.Colors.STANDARD : o,
                    c = e.className,
                    l = e.button,
                    u = e.reducedRightPadding,
                    s = void 0 !== u && u;
                return (0, n.jsxs)("div", {
                    className: w()(s ? P().noticeWithoutRightPadding : P().noticeWithRightPadding, c),
                    children: [(0, n.jsxs)("div", {
                        className: P().noticeLeft,
                        children: [(0, n.jsx)(C.Z, {
                            className: P().icon,
                            color: E.JX.PREMIUM_TIER_2
                        }), (0, n.jsx)(x.Z, {
                            className: P().text,
                            size: i,
                            color: a,
                            children: t
                        })]
                    }), l]
                })
            }
            var R = r(455706),
                N = r(473903),
                I = r(652591),
                D = r(694329),
                T = r(921431),
                M = r(203600),
                S = r(167633),
                A = r.n(S);

            function L(e) {
                var t = e.analyticsSection,
                    r = e.type,
                    l = (0, o.e7)([N.default], (function() {
                        return N.default.getCurrentUser()
                    })),
                    u = D.ZP.canUseAnimatedAvatar(l),
                    s = D.ZP.canUsePremiumProfileCustomization(l),
                    f = r === T.pC.BANNER && s || r === T.pC.AVATAR && u,
                    d = (0, c.Z)(m.Z.PREMIUM_PREVIEW_UPSELL_HEADER).sourceAnalyticsLocations;
                i.useEffect((function() {
                    f || I.default.track(p.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: t,
                        location_stack: d
                    })
                }), [f, t, d]);
                if (f) return null;
                var h = (0, n.jsx)(R.Z, {
                    className: A().getNitroLink,
                    size: a.Button.Sizes.SMALL,
                    look: a.Button.Looks.LINK,
                    color: a.Button.Colors.LINK,
                    subscriptionTier: M.Si.TIER_2,
                    buttonText: g.Z.Messages.PREMIUM_PREVIEW_GET_NITRO.format(),
                    showIcon: !1,
                    premiumModalAnalyticsLocation: {
                        section: t,
                        object: p.qAy.BUTTON_CTA
                    },
                    disableShine: !0
                });
                return (0, n.jsx)(_, {
                    reducedRightPadding: !0,
                    className: A().nitroPreviewUpsell,
                    text: g.Z.Messages.PREMIUM_PREVIEW.format(),
                    textSize: x.Z.Sizes.SIZE_14,
                    textColor: x.Z.Colors.HEADER_PRIMARY,
                    button: h
                })
            }

            function k(e) {
                var t = e.type,
                    r = e.analyticsPage,
                    i = e.analyticsSection,
                    o = e.isGIF,
                    a = e.banner;
                return [T.pC.BANNER, T.pC.AVATAR].includes(t) && o ? (0, n.jsx)(L, {
                    analyticsSection: i,
                    type: t
                }) : t === T.pC.GUILD_BANNER ? (0, n.jsx)(b, {
                    analyticsSection: i,
                    analyticsPage: r,
                    isGIF: o,
                    banner: a
                }) : null
            }
        },
        521723: (e, t, r) => {
            r.d(t, {
                Z: () => J
            });
            var n = r(785893),
                i = (r(667294), r(294184)),
                o = r.n(i),
                a = r(202351),
                c = r(795308),
                l = r(575945),
                u = r(304548),
                s = r(337509),
                f = r(761673),
                d = r(591406),
                p = r(64234),
                h = r(21372),
                g = r(473903),
                y = r(930865),
                v = r(859917),
                b = r(366007),
                m = r(459308),
                O = r(450520),
                w = r(361290),
                E = r(633878);

            function C(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function x(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        C(e, t, r[t])
                    }))
                }
                return e
            }

            function j(e, t) {
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

            function P(e, t) {
                if (null == e) return {};
                var r, n, i = function(e, t) {
                    if (null == e) return {};
                    var r, n, i = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        t.indexOf(r) >= 0 || (i[r] = e[r])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                    }
                }
                return i
            }
            const _ = (0, O.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 10 : t,
                    i = e.height,
                    o = void 0 === i ? 10 : i,
                    a = e.color,
                    c = void 0 === a ? "currentColor" : a,
                    l = P(e, ["width", "height", "color"]);
                return (0, n.jsx)("svg", j(x({}, (0, E.Z)(l)), {
                    width: r,
                    height: o,
                    viewBox: "0 0 10 10",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, n.jsx)("path", {
                        d: "M4.16667 8.33333V5.83333H5.83333V8.33333H7.91667V5H9.16667L5 1.25L0.833333 5H2.08333V8.33333H4.16667Z",
                        fill: c
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    r = void 0 === t ? 10 : t,
                    i = e.height,
                    o = void 0 === i ? 10 : i,
                    a = P(e, ["width", "height"]);
                return (0, n.jsx)(w.t, x({
                    width: r,
                    height: o
                }, a))
            }));
            var R = r(666303);

            function N(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function I(e, t) {
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

            function D(e, t) {
                if (null == e) return {};
                var r, n, i = function(e, t) {
                    if (null == e) return {};
                    var r, n, i = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        t.indexOf(r) >= 0 || (i[r] = e[r])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                    }
                }
                return i
            }
            const T = (0, O.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 10 : t,
                    i = e.height,
                    o = void 0 === i ? 10 : i,
                    a = e.color,
                    c = void 0 === a ? "currentColor" : a,
                    l = D(e, ["width", "height", "color"]);
                return (0, n.jsxs)("svg", I(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            N(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, E.Z)(l)), {
                    width: r,
                    height: o,
                    viewBox: "0 0 10 10",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, n.jsx)("g", {
                        clipPath: "url(#clip0_1242_1450)",
                        children: (0, n.jsx)("path", {
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
            }), R.e);

            function M(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function S(e, t) {
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

            function A(e, t) {
                if (null == e) return {};
                var r, n, i = function(e, t) {
                    if (null == e) return {};
                    var r, n, i = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        t.indexOf(r) >= 0 || (i[r] = e[r])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                    }
                }
                return i
            }

            function L(e) {
                var t = e.width,
                    r = void 0 === t ? 10 : t,
                    i = e.height,
                    o = void 0 === i ? 10 : i,
                    a = e.color,
                    c = void 0 === a ? "currentColor" : a,
                    l = A(e, ["width", "height", "color"]);
                return (0,
                    n.jsxs)("svg", S(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            M(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, E.Z)(l)), {
                    width: r,
                    height: o,
                    viewBox: "0 0 17 22",
                    fill: c,
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, n.jsxs)("g", {
                        filter: "url(#filter0_d_1296_1706)",
                        children: [(0, n.jsx)("path", {
                            opacity: "0.55",
                            d: "M8.49999 3.7998L4.85999 7.4398V12.5598L8.49999 16.1998L12.14 12.5598V7.4398L8.49999 3.7998ZM10.32 11.7998L8.49999 13.6265L6.67999 11.8065V8.19314L8.49999 6.37314L10.32 8.19314V11.7998Z",
                            fill: "white"
                        }), (0, n.jsx)("path", {
                            opacity: "0.8",
                            d: "M6.67999 8.19354V11.8069L8.49999 13.6269L10.32 11.8069V8.19354L8.49999 6.37354L6.67999 8.19354Z",
                            fill: "white"
                        }), (0, n.jsx)("path", {
                            d: "M8.5 3.7998V6.37314L10.32 8.19314L12.14 7.4398L8.5 3.7998Z",
                            fill: "white"
                        })]
                    }), (0,
                        n.jsx)("defs", {
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
            var k, Z = r(690002),
                V = r(985651),
                B = r(2590),
                U = r(473708),
                F = r(845987),
                H = r.n(F);

            function G(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function z(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        G(e, t, r[t])
                    }))
                }
                return e
            }

            function W(e, t) {
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
            var Y = (G(k = {}, s.Q.STAFF, {
                IconComponent: Z.Z,
                foregroundDarkColor: c.Z.unsafe_rawColors.WHITE_400.css,
                foregroundLightColor: c.Z.unsafe_rawColors.WHITE_400.css,
                backgroundDarkColor: c.Z.unsafe_rawColors.GREEN_360.css,
                backgroundLightColor: c.Z.unsafe_rawColors.GREEN_360.css
            }), G(k, s.Q.VERIFIED_AND_PARTNERED, {
                IconComponent: V.Z,
                foregroundDarkColor: c.Z.unsafe_rawColors.WHITE_400.css,
                foregroundLightColor: c.Z.unsafe_rawColors.WHITE_400.css,
                backgroundDarkColor: c.Z.unsafe_rawColors.GREEN_360.css,
                backgroundLightColor: c.Z.unsafe_rawColors.GREEN_360.css
            }), G(k, s.Q.VERIFIED, {
                IconComponent: V.Z,
                foregroundDarkColor: c.Z.unsafe_rawColors.WHITE_400.css,
                foregroundLightColor: c.Z.unsafe_rawColors.WHITE_400.css,
                backgroundDarkColor: c.Z.unsafe_rawColors.GREEN_360.css,
                backgroundLightColor: c.Z.unsafe_rawColors.GREEN_360.css
            }), G(k, s.Q.PARTNERED, {
                IconComponent: m.Z,
                foregroundDarkColor: c.Z.unsafe_rawColors.WHITE_400.css,
                foregroundLightColor: c.Z.unsafe_rawColors.WHITE_400.css,
                backgroundDarkColor: c.Z.unsafe_rawColors.BRAND_500.css,
                backgroundLightColor: c.Z.unsafe_rawColors.BRAND_500.css
            }), G(k, s.Q.COMMUNITY, {
                IconComponent: _,
                foregroundDarkColor: c.Z.unsafe_rawColors.PRIMARY_500.css,
                foregroundLightColor: c.Z.unsafe_rawColors.WHITE_400.css,
                backgroundDarkColor: c.Z.unsafe_rawColors.WHITE_400.css,
                backgroundLightColor: c.Z.unsafe_rawColors.PRIMARY_500.css,
                premiumBackgroundColor: b.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
                premiumForegroundColor: c.Z.unsafe_rawColors.WHITE_400.css
            }), G(k, s.Q.DISCOVERABLE, {
                IconComponent: T,
                foregroundDarkColor: c.Z.unsafe_rawColors.PRIMARY_500.css,
                foregroundLightColor: c.Z.unsafe_rawColors.WHITE_400.css,
                backgroundDarkColor: c.Z.unsafe_rawColors.WHITE_400.css,
                backgroundLightColor: c.Z.unsafe_rawColors.PRIMARY_500.css,
                premiumBackgroundColor: b.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
                premiumForegroundColor: c.Z.unsafe_rawColors.WHITE_400.css
            }), G(k, s.Q.NONE, {}), k);

            function Q(e) {
                var t = e.guildTraits;
                return (0, n.jsxs)("div", {
                    className: H().tooltipPremiumFooterContainer,
                    children: [(0, n.jsxs)("div", {
                        className: o()(H().tooltipPremiumFooterSegment, H().tooltipPremiumFooterTierSegment),
                        children: [(0, n.jsx)(L, {
                            width: 18,
                            height: 18,
                            className: H().gemIcon
                        }), (0, n.jsx)(u.Text, {
                            variant: "text-xs/semibold",
                            color: "always-white",
                            children: y.nW(t.premiumTier)
                        })]
                    }), (0, n.jsx)("div", {
                        className: o()(H().tooltipPremiumFooterSegment),
                        children: (0, n.jsx)(u.Text, {
                            variant: "text-xs/semibold",
                            color: "always-white",
                            children: U.Z.Messages.SERVER_BADGE_PREMIUM_FOOTER_BOOST_COUNT.format({
                                count: t.premiumSubscriberCount
                            })
                        })
                    })]
                })
            }

            function X(e) {
                var t = e.badgeType,
                    r = e.guildTraits,
                    i = function(e, t) {
                        var r = t === f.PZ.PUBLIC ? U.Z.Messages.SERVER_BADGE_DESCRIPTION_ANYONE_CAN_JOIN : U.Z.Messages.SERVER_BADGE_DESCRIPTION_INVITE_ONLY;
                        switch (e) {
                            case s.Q.STAFF:
                                return {
                                    tooltipTitle: U.Z.Messages.INTERNAL_EMPLOYEE_ONLY, tooltipSubtitle: U.Z.Messages.INTERNAL_EMPLOYEE_ONLY, tooltipDescription: U.Z.Messages.INTERNAL_EMPLOYEE_ONLY
                                };
                            case s.Q.VERIFIED:
                                return {
                                    tooltipTitle: U.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipSubtitle: U.Z.Messages.GUILD_VERIFIED, tooltipDescription: r
                                };
                            case s.Q.PARTNERED:
                                return {
                                    tooltipTitle: U.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipSubtitle: U.Z.Messages.GUILD_PARTNERED,
                                        tooltipDescription: r
                                };
                            case s.Q.VERIFIED_AND_PARTNERED:
                                return {
                                    tooltipTitle: U.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipSubtitle: U.Z.Messages.GUILD_VERIFIED_AND_PARTNERED, tooltipDescription: r
                                };
                            case s.Q.COMMUNITY:
                                return {
                                    tooltipTitle: U.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipDescription: U.Z.Messages.SERVER_BADGE_DESCRIPTION_INVITE_ONLY
                                };
                            case s.Q.DISCOVERABLE:
                                return {
                                    tooltipTitle: U.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipDescription: U.Z.Messages.SERVER_BADGE_DESCRIPTION_ANYONE_CAN_JOIN
                                };
                            default:
                                return {
                                    tooltipTitle: U.Z.Messages.SERVER_BADGE_TITLE_UNKNOWN
                                }
                        }
                    }(t, r.visibility),
                    o = i.tooltipTitle,
                    a = i.tooltipSubtitle,
                    c = i.tooltipDescription;
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)("div", {
                        className: H().tooltipBodyContainer,
                        children: [(0, n.jsx)(u.Text, {
                            color: "interactive-active",
                            variant: "text-xs/bold",
                            children: o
                        }), null != a ? (0, n.jsx)(u.Text, {
                            color: "text-muted",
                            variant: "text-xs/medium",
                            children: a
                        }) : null, null != c ? (0, n.jsx)(u.Text, {
                            color: "text-muted",
                            variant: "text-xs/medium",
                            children: c
                        }) : null]
                    }), r.premium ? (0, n.jsx)(Q, {
                        guildTraits: r
                    }) : null]
                })
            }

            function J(e) {
                var t = e.guild,
                    r = e.tooltipColor,
                    i = void 0 === r ? u.Tooltip.Colors.BRAND : r,
                    o = e.tooltipPosition,
                    c = e.className,
                    y = e.flowerStarClassName,
                    b = e.iconClassName,
                    m = e.badgeStrokeColor,
                    O = e.badgeColor,
                    w = e.size,
                    E = void 0 === w ? 16 : w,
                    C = e.disableBoostClick,
                    x = e["aria-label"],
                    j = void 0 !== x && x,
                    P = (0, a.e7)([g.default, h.ZP], (function() {
                        var e = g.default.getCurrentUser();
                        return h.ZP.isMember(null == t ? void 0 : t.id, null == e ? void 0 : e.id)
                    })),
                    _ = (0, a.e7)([p.Z], (function() {
                        return p.Z.theme
                    })),
                    R = (0, f.XX)(t),
                    N = (0, s.i)(R);
                if (N === s.Q.NONE) return null;
                var I, D, T = Y[N],
                    M = T.IconComponent,
                    S = T.backgroundDarkColor,
                    A = T.backgroundLightColor,
                    L = T.foregroundDarkColor,
                    k = T.foregroundLightColor,
                    Z = T.premiumBackgroundColor,
                    V = T.premiumForegroundColor;
                if (null == M) return null;
                if (R.premium) {
                    I = V;
                    D = Z
                }
                var U = (0, l.wj)(_) ? L : k,
                    F = (0, l.wj)(_) ? S : A;
                I = null != I ? I : U;
                D = null != D ? D : F;
                var G = function(e) {
                    if (R.premium && P && !C) {
                        e.stopPropagation();
                        e.preventDefault();
                        (0, d.f)({
                            guildId: t.id,
                            location: {
                                section: B.jXE.GUILD_HEADER,
                                object: B.qAy.BOOST_GEM_ICON
                            }
                        })
                    }
                };
                return (0, n.jsx)(u.Tooltip, {
                    color: i,
                    position: o,
                    "aria-label": j,
                    text: (0, n.jsx)(X, {
                        badgeType: N,
                        guildTraits: R
                    }),
                    tooltipContentClassName: H().tooltipRemovePadding,
                    children: function(e) {
                        return (0, n.jsx)(u.Clickable, {
                            onClick: G,
                            children: (0, n.jsx)(v.Z, W(z({}, e), {
                                className: c,
                                flowerStarClassName: y,
                                color: null != D ? D : O,
                                stroke: m,
                                size: E,
                                children: (0, n.jsx)(M, {
                                    className: b,
                                    color: I
                                })
                            }))
                        })
                    }
                })
            }
        },
        816240: (e, t, r) => {
            r.d(t, {
                Z: () => s
            });
            var n = r(785893),
                i = (r(667294), r(450520)),
                o = r(43338),
                a = r(633878);

            function c(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function l(e, t) {
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

            function u(e, t) {
                if (null == e) return {};
                var r, n, i = function(e, t) {
                    if (null == e) return {};
                    var r, n, i = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        t.indexOf(r) >= 0 || (i[r] = e[r])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                    }
                }
                return i
            }
            const s = (0, i.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    i = e.height,
                    o = void 0 === i ? 24 : i,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    d = e.foreground,
                    p = u(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            c(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, a.Z)(p)), {
                    width: r,
                    height: o,
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        className: d,
                        d: "M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM10 8C10 6.8952 9.1032 6 8 6C6.8944 6 6 6.8952 6 8C6 9.1056 6.8944 10 8 10C9.1032 10 10 9.1056 10 8ZM9 14L6 18H18L15 11L11 16L9 14Z",
                        fill: f
                    })
                }))
            }), o.X)
        },
        855595: (e, t, r) => {
            r.d(t, {
                Z: () => s
            });
            var n = r(785893),
                i = (r(667294), r(450520)),
                o = r(911486),
                a = r(633878);

            function c(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function l(e, t) {
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

            function u(e, t) {
                if (null == e) return {};
                var r, n, i = function(e, t) {
                    if (null == e) return {};
                    var r, n, i = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        t.indexOf(r) >= 0 || (i[r] = e[r])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                    }
                }
                return i
            }
            const s = (0, i.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 20 : t,
                    i = e.height,
                    o = void 0 === i ? 23 : i,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    d = e.foreground,
                    p = u(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            c(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, a.Z)(p)), {
                    width: r,
                    height: o,
                    viewBox: "0 0 20 23",
                    children: (0, n.jsx)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: (0, n.jsx)("path", {
                            className: d,
                            fill: f,
                            d: "M19.487 5.126L10.487 0.126C10.184 -0.042 9.81798 -0.042 9.51498 0.126L0.514977 5.126C0.197977 5.302 0.000976562 5.636 0.000976562 5.999C0.000976562 6.693 0.114977 22.999 10.001 22.999C19.887 22.999 20.001 6.693 20.001 5.999C20.001 5.636 19.804 5.302 19.487 5.126ZM10.001 5.999C11.382 5.999 12.501 7.118 12.501 8.499C12.501 9.88 11.382 10.999 10.001 10.999C8.61998 10.999 7.50098 9.88 7.50098 8.499C7.50098 7.118 8.61998 5.999 10.001 5.999ZM6.25098 16C6.25098 13.699 7.69998 12.25 10.001 12.25C12.302 12.25 13.751 13.699 13.751 16H6.25098Z"
                        })
                    })
                }))
            }), o.l)
        },
        71236: (e, t, r) => {
            r.d(t, {
                Z: () => s
            });
            var n = r(785893),
                i = (r(667294), r(450520)),
                o = r(663207),
                a = r(633878);

            function c(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function l(e, t) {
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

            function u(e, t) {
                if (null == e) return {};
                var r, n, i = function(e, t) {
                    if (null == e) return {};
                    var r, n, i = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        t.indexOf(r) >= 0 || (i[r] = e[r])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                    }
                }
                return i
            }
            const s = (0, i.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    i = e.height,
                    o = void 0 === i ? 24 : i,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    d = e.foreground,
                    p = u(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            c(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, a.Z)(p)), {
                    width: r,
                    height: o,
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: f,
                        className: d,
                        d: "M21.924 8.61789C21.77 8.24489 21.404 8.00089 21 8.00089H15.618L12.894 2.55389C12.555 1.87689 11.444 1.87689 11.105 2.55389L8.38199 8.00089H2.99999C2.59599 8.00089 2.22999 8.24489 2.07599 8.61789C1.92199 8.99089 2.00699 9.42289 2.29299 9.70789L6.87699 14.2919L5.03899 20.7269C4.92399 21.1299 5.07199 21.5619 5.40999 21.8089C5.74999 22.0569 6.20699 22.0659 6.55399 21.8329L12 18.2029L17.445 21.8329C17.613 21.9449 17.806 22.0009 18 22.0009C18.207 22.0009 18.414 21.9369 18.59 21.8089C18.928 21.5619 19.076 21.1299 18.961 20.7269L17.123 14.2919L21.707 9.70789C21.993 9.42289 22.078 8.99089 21.924 8.61789Z"
                    })
                }))
            }), o.r)
        }
    }
]);