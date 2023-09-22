"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [75313, 38479], {
        652411: (e, t, n) => {
            n.d(t, {
                O_: () => I,
                qA: () => d,
                Ji: () => A,
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
            var h = function() {
                return h = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
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
                g = function(e) {
                    function t(t, n, r) {
                        var i = e.call(this, t, n) || this;
                        return i._z = r, i
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
                b = function(e) {
                    function t(t, n) {
                        var r = e.call(this, t) || this;
                        return r.addValue = n, r
                    }
                    return p(t, e), t.prototype.update = function(e) {
                        this.value = this.previewUpdate(e)
                    }, t.prototype.previewUpdate = function(e) {
                        return this.value + this.addValue * e
                    }, t
                }(v),
                w = function(e) {
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
                }(v);

            function x(e, t) {
                return e === t ? e : Math.random() * (t - e + 1) + e
            }

            function C(e) {
                var t = Math.floor(x(0, e.length - 1));
                return [e[t], t]
            }

            function O(e, t) {
                return C([e, t])[0]
            }

            function E(e) {
                return "number" == typeof e ? {
                    x: e,
                    y: e
                } : e
            }

            function P(e) {
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
                            return new m(e.value);
                        case "static-random":
                            return new m(x(e.minValue, e.maxValue));
                        case "linear":
                            return new b(e.value, e.addValue);
                        case "linear-random":
                            return new b(x(e.minValue, e.maxValue), x(e.minAddValue, e.maxAddValue));
                        case "oscillating":
                            return new w(e.value, e.start, e.final, e.duration, e.direction, e.easingFunction);
                        case "oscillating-random":
                            return new w(x(e.minValue, e.maxValue), x(e.minStart, e.maxStart), x(e.minFinal, e.maxFinal), x(e.minDuration, e.maxDuration), O(e.minDirection, e.maxDirection), C(e.easingFunctions)[0])
                    }
                }(h(h({}, e), {
                    valueType: "number"
                }))
            }

            function R(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            var t = E(e.value);
                            return new y(new m(t.x), new m(t.y));
                        case "static-random":
                            var n = E(e.minValue),
                                r = E(e.maxValue);
                            return new y(new m(x(n.x, r.x)), new m(x(n.y, r.y)));
                        case "linear":
                            t = E(e.value);
                            var i = E(e.addValue);
                            return new y(new b(t.x, i.x), new b(t.y, i.y));
                        case "linear-random":
                            n = E(e.minValue), r = E(e.maxValue);
                            var o = E(e.minAddValue),
                                a = E(e.maxAddValue);
                            return new y(new b(x(n.x, r.x), x(o.x, a.x)), new b(x(n.y, r.y), x(o.x, a.x)));
                        case "oscillating":
                            t = E(e.value);
                            var u = E(e.start),
                                c = E(e.final),
                                l = E(e.duration),
                                s = E(e.direction);
                            return new y(new w(t.x, u.x, c.x, l.x, s.x, e.easingFunction), new w(t.y, u.y, c.y, l.x, s.y, e.easingFunction));
                        case "oscillating-random":
                            n = E(e.minValue), r = E(e.maxValue);
                            var d = E(e.minStart),
                                f = E(e.maxStart),
                                p = E(e.minFinal),
                                h = E(e.maxFinal),
                                v = E(e.minDuration),
                                g = E(e.maxDuration),
                                P = E(e.minDirection),
                                j = E(e.maxDirection);
                            return new y(new w(x(n.x, r.x), x(d.x, f.x), x(p.x, h.x), x(v.x, g.x), O(P.x, j.x), C(e.easingFunctions)[0]), new w(x(n.y, r.y), x(d.y, f.y), x(p.y, h.y), x(v.y, g.y), O(P.y, j.y), C(e.easingFunctions)[0]))
                    }
                }(h(h({}, e), {
                    valueType: "Vector2"
                }))
            }

            function _(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            var t = P(e.value);
                            return new g(new m(t.x), new m(t.y), new m(t.z));
                        case "static-random":
                            var n = P(e.minValue),
                                r = P(e.maxValue);
                            return new g(new m(x(n.x, r.x)), new m(x(n.y, r.y)), new m(x(n.z, r.z)));
                        case "linear":
                            t = P(e.value);
                            var i = P(e.addValue);
                            return new g(new b(t.x, i.x), new b(t.y, i.y), new b(t.z, i.z));
                        case "linear-random":
                            n = P(e.minValue), r = P(e.maxValue);
                            var o = P(e.minAddValue),
                                a = P(e.maxAddValue);
                            return new g(new b(x(n.x, r.x), x(o.x, a.x)), new b(x(n.y, r.y), x(o.y, a.y)), new b(x(n.z, r.z), x(o.z, a.z)));
                        case "oscillating":
                            t = P(e.value);
                            var u = P(e.start),
                                c = P(e.final),
                                l = P(e.duration),
                                s = P(e.direction);
                            return new g(new w(t.x, u.x, c.x, l.x, s.x, e.easingFunction), new w(t.y, u.y, c.y, l.z, s.y, e.easingFunction), new w(t.z, u.z, c.z, l.z, s.z, e.easingFunction));
                        case "oscillating-random":
                            n = P(e.minValue), r = P(e.maxValue);
                            var d = P(e.minStart),
                                f = P(e.maxStart),
                                p = P(e.minFinal),
                                h = P(e.maxFinal),
                                v = P(e.minDuration),
                                y = P(e.maxDuration),
                                E = P(e.minDirection),
                                j = P(e.maxDirection);
                            return new g(new w(x(n.x, r.x), x(d.x, f.x), x(p.x, h.x), x(v.x, y.x), O(E.x, j.x), C(e.easingFunctions)[0]), new w(x(n.y, r.y), x(d.y, f.y), x(p.y, h.y), x(v.y, y.y), O(E.y, j.y), C(e.easingFunctions)[0]), new w(x(n.z, r.z), x(d.z, f.z), x(p.z, h.z), x(v.z, y.z), O(E.z, j.z), C(e.easingFunctions)[0]))
                    }
                }(h(h({}, e), {
                    valueType: "Vector3"
                }))
            }

            function N(e, t, n, r, i) {
                var o = function(e, t) {
                        return h(h({
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
                        return C(t.sprites)
                    }(r, n),
                    c = u[0],
                    d = u[1],
                    f = function(e, t, n) {
                        if (! function(e) {
                                return "string" == typeof e || e.colorize
                            }(e)) return 0;
                        var r = null != t ? n.colors.findIndex((function(e) {
                            return e === t
                        })) : -1;
                        return -1 !== r ? r : Math.floor(x(0, n.colors.length - 1))
                    }(null != r ? r : c, i, n);
                return new l({
                    id: e,
                    position: R(o.position),
                    velocity: R(o.velocity),
                    rotation: _(o.rotation),
                    dragCoefficient: R(o.dragCoefficient),
                    size: a,
                    opacity: j(o.opacity),
                    spriteX: f * n.spriteWidth + 2 * f,
                    spriteY: d * n.spriteHeight + 2 * d,
                    spriteWidth: n.spriteWidth,
                    spriteHeight: n.spriteHeight
                })
            }
            var I = r.forwardRef((function(e, t) {
                var o = e.className,
                    a = e.environment,
                    c = e.onClick,
                    l = e.onMouseDown,
                    s = e.onMouseMove,
                    d = e.onMouseUp,
                    f = e.onBeforeRender,
                    p = e.onAfterRender,
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
                    g = r.useRef(new Map),
                    m = r.useRef(null),
                    b = r.useRef(0),
                    w = r.useRef(0),
                    x = r.useCallback((function() {
                        var e = y.current;
                        if (null != e) {
                            var t = e.getContext("2d");
                            if (null != t) {
                                t.clearRect(0, 0, e.width, e.height), null == f || f(t), g.current.forEach((function(n, r) {
                                    var i = n.confetti,
                                        o = n.spriteCanvas;
                                    i.update(a), i.draw(o, t), i.shouldDestroy(e, a) && g.current.delete(r)
                                })), null == p || p(t), g.current.size > 0 ? m.current = window.requestAnimationFrame(x) : (t.clearRect(0, 0, e.width, e.height), m.current = null);
                                var n = Date.now();
                                0 !== b.current && (w.current = 1e3 / (n - b.current)), b.current = n
                            }
                        }
                    }), [a, p, f]);
                r.useEffect((function() {
                    null != m.current && (window.cancelAnimationFrame(m.current), m.current = window.requestAnimationFrame(x))
                }), [x]);
                var C = r.useCallback((function(e, t) {
                        g.current.set(e.id, {
                            confetti: e,
                            spriteCanvas: t
                        }), null == m.current && x()
                    }), [x]),
                    O = r.useCallback((function(e, t, n, r, o) {
                        var a, u = N(null !== (a = e.id) && void 0 !== a ? a : (0, i.v4)(), e, n, r, o);
                        return C(u, t), u
                    }), [C]),
                    E = r.useCallback((function(e) {
                        g.current.delete(e)
                    }), []),
                    P = r.useCallback((function() {
                        return g.current.clear()
                    }), []),
                    j = r.useCallback((function() {
                        return y.current
                    }), []);
                r.useImperativeHandle(t, (function() {
                    return {
                        createConfetti: O,
                        addConfetti: C,
                        deleteConfetti: E,
                        clearConfetti: P,
                        getCanvas: j
                    }
                }), [O, C, E, P, j]);
                var R = r.useCallback((function(e, t) {
                        var n, r, i = t.clickHandler,
                            o = t.mouseHandler;
                        if (null != i || null != o) {
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
                                    if (null != o) return o(e);
                                    if (null != i) {
                                        var s = -1e3 / w.current * 2,
                                            d = function(e, t) {
                                                for (var n = 0, r = Array.from(e.values()); n < r.length; n++) {
                                                    var i = r[n];
                                                    if (null != i && t(i)) return i
                                                }
                                                return null
                                            }(g.current, (function(e) {
                                                var t = e.confetti,
                                                    n = t.previewPositionUpdate(a, s);
                                                return u(l, {
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
                    _ = r.useCallback((function(e) {
                        return R(e, {
                            clickHandler: c
                        })
                    }), [R, c]),
                    I = r.useCallback((function(e) {
                        return R(e, {
                            clickHandler: l
                        })
                    }), [R, l]),
                    A = r.useCallback((function(e) {
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
                    return e("click", _, c), e("mousedown", I, l), e("mousemove", A, s), e("mouseup", M, d),
                        function() {
                            window.removeEventListener("click", _), window.removeEventListener("mousedown", I), window.removeEventListener("mousemove", A), window.removeEventListener("mouseup", A)
                        }
                }), [_, I, A, M, c, l, s, d]), r.useEffect((function() {
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
                }), []), r.createElement("canvas", h({}, v, {
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
            var A = r.forwardRef((function(e, t) {
                var n, o = e.className,
                    u = e.visible,
                    c = void 0 !== u && u,
                    l = e.sprites,
                    s = e.colors,
                    d = e.spriteWidth,
                    f = e.spriteHeight,
                    p = r.useRef(null),
                    h = r.useRef([]),
                    v = r.useRef(!1),
                    y = r.useRef({});
                r.useImperativeHandle(t, (function() {
                    return {
                        getCanvas: function() {
                            return p.current
                        },
                        getCreateData: function() {
                            return {
                                sprites: h.current,
                                colors: s,
                                spriteWidth: d,
                                spriteHeight: f
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
                }), [s, f, d]);
                var g = r.useCallback((function() {
                        var e = p.current,
                            t = null == e ? void 0 : e.getContext("2d", {
                                willReadFrequently: !0
                            });
                        null != t && null != e && (t.clearRect(0, 0, e.width, e.height),
                            h.current.forEach((function(e, n) {
                                var r = function(r, i) {
                                    var o = d * i + 2 * i,
                                        a = f * n + 2 * n;
                                    if (t.drawImage(e.image, o, a, d, f), null != r) {
                                        for (var u = t.getImageData(o, a, d, f), c = function(e) {
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
                    }), [s, f, d]),
                    m = r.useCallback((function() {
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
                            h.current = e.map((function(e) {
                                return {
                                    colorize: e.colorize,
                                    image: e.image,
                                    src: e.src
                                }
                            }))
                        }))
                    }), [l]),
                    b = r.useCallback((function(e) {
                        for (var t in y.current) y.current[t](e)
                    }), []),
                    w = r.useCallback((function() {
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
                                        return [4, m()];
                                    case 1:
                                        return e.sent(), g(), v.current = !0, b(!0), [2]
                                }
                            }))
                        }))
                    }), [b, m, g]);
                return r.useEffect((function() {
                    w()
                }), [w]), r.useEffect((function() {
                    return function() {
                        return b(!1)
                    }
                }), [b]), r.useEffect((function() {
                    null != p.current && (p.current.width = (d + 2) * Math.max(s.length, 1), p.current.height = (f + 2) * l.length)
                }), [s.length, f, d, l.length]), r.createElement("canvas", {
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
                    d = r.useCallback((function() {
                        return null == e ? void 0 : e.clearConfetti()
                    }), [e]);
                return r.useMemo((function() {
                    return {
                        createConfetti: u,
                        createMultipleConfetti: c,
                        addConfetti: l,
                        clearConfetti: d,
                        deleteConfetti: s,
                        isReady: o && null != t && null != e
                    }
                }), [l, d, e, u, c, s, o, t])
            }
        },
        661299: (e, t, n) => {
            n.d(t, {
                Z: () => f
            });
            var r = n(785893),
                i = (n(667294),
                    n(294184)),
                o = n.n(i),
                a = n(468811),
                u = n.n(a),
                c = n(305484),
                l = n.n(c);

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var d = u().v4();
            const f = function(e) {
                var t, n = e.open,
                    i = e.className,
                    a = e.withHighlight,
                    u = void 0 !== a && a;
                return (0, r.jsxs)("svg", {
                    width: "18",
                    height: "18",
                    className: o()(l().button, i, (t = {}, s(t, l().open, n), s(t, l().withHighlight, u), t)),
                    children: [u && (0, r.jsx)("defs", {
                        children: (0, r.jsxs)("linearGradient", {
                            id: d,
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
                            stroke: u ? "url(#".concat(d, ")") : "currentColor",
                            d: "M4.5 4.5l9 9",
                            strokeLinecap: "round"
                        }), (0, r.jsx)("path", {
                            stroke: u ? "url(#".concat(d, ")") : "currentColor",
                            d: "M13.5 4.5l-9 9",
                            strokeLinecap: "round"
                        })]
                    })]
                })
            }
        },
        627379: (e, t, n) => {
            n.d(t, {
                O: () => l
            });
            var r = n(785893),
                i = (n(667294), n(795308)),
                o = n(633878);

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function u(e, t) {
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
            var l = function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    l = e.height,
                    s = void 0 === l ? 24 : l,
                    d = e.color,
                    f = void 0 === d ? i.Z.colors.INTERACTIVE_NORMAL : d,
                    p = e.colorClass,
                    h = void 0 === p ? "" : p,
                    v = c(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", u(function(e) {
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
                }({}, (0, o.Z)(v)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof f ? f : f.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm2.18 13.87c-.625 0-1.178-.162-1.66-.485-.482-.324-.855-.777-1.121-1.359C4.133 13.437 4 12.762 4 12c0-.755.14-1.423.42-2.005.288-.583.701-1.039 1.24-1.37.546-.33 1.197-.495 1.951-.495.64 0 1.211.136 1.714.41.51.272.895.657 1.154 1.153l-1.218.873c-.367-.676-.913-1.013-1.639-1.013-.661 0-1.168.215-1.52.646-.352.425-.528 1.025-.528 1.8 0 .784.176 1.388.528 1.812.352.424.859.636 1.52.636.295 0 .564-.054.809-.162.251-.115.445-.27.582-.463v-.927H7.299v-1.402h3.245v4.226H9.272l-.205-.712c-.424.575-1.053.863-1.887.863Zm6.34-.151h-1.574V8.28h1.574v7.438Zm1.51 0h1.574v-2.824h2.76v-1.423h-2.76V9.704H20V8.28h-4.97v7.438Z",
                        clipRule: "evenodd",
                        className: h
                    })
                }))
            }
        },
        255875: (e, t, n) => {
            n.d(t, {
                E: () => p,
                h: () => h
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
                        return c.dG4
                    },
                    removeClickListener: c.dG4
                },
                p = i.createContext(f);

            function h(e) {
                var t = e.children,
                    n = e.confettiCanvas,
                    c = e.spriteCanvas,
                    l = e.baseConfig,
                    h = e.addClickListener,
                    v = e.removeClickListener,
                    y = (0, o.uR)(n, c),
                    g = (0, a.ZP)([u.Z], (function() {
                        return u.Z.useReducedMotion
                    })),
                    m = i.useMemo((function() {
                        return g ? f : {
                            confettiCanvas: n,
                            cannon: y,
                            createConfetti: function(e, t) {
                                return y.createConfetti(s({}, l, e), t)
                            },
                            createConfettiAt: function(e, t, n, r) {
                                return y.createConfetti(s(d(s({}, l), {
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
                                return y.createMultipleConfetti(s({}, l, e), t, n)
                            },
                            createMultipleConfettiAt: function(e, t, n) {
                                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                                    i = arguments.length > 4 ? arguments[4] : void 0;
                                return y.createMultipleConfetti(s(d(s({}, l), {
                                    position: {
                                        type: "static",
                                        value: {
                                            x: e,
                                            y: t
                                        }
                                    }
                                }), n), r, i)
                            },
                            addClickListener: h,
                            removeClickListener: v
                        }
                    }), [h, l, y, n, g, v]);
                return (0, r.jsx)(p.Provider, {
                    value: m,
                    children: t
                })
            }
        },
        275086: (e, t, n) => {
            n.d(t, {
                c: () => y
            });
            var r = n(785893),
                i = (n(667294), n(882723)),
                o = n(661299),
                a = n(393299),
                u = n(930865),
                c = n(596801),
                l = n(733274),
                s = n(2590),
                d = n(473708),
                f = n(206322),
                p = n.n(f);

            function h(e) {
                var t = e.guild,
                    n = e.banner;
                return (0, r.jsx)("div", {
                    className: p().guildBanner,
                    style: {
                        backgroundImage: "url(".concat(n)
                    },
                    children: (0, r.jsxs)("div", {
                        className: p().guildHeader,
                        children: [(0, r.jsx)(a.Z, {
                            guild: t,
                            isBannerVisible: !0
                        }), (0, r.jsx)(i.Heading, {
                            className: p().guildName,
                            variant: "heading-md/semibold",
                            children: t.toString()
                        }), (0, r.jsx)(o.Z, {
                            className: p().dropdown,
                            open: !1
                        })]
                    })
                })
            }

            function v(e, t) {
                var n = (0, u.nW)(e);
                return t ? d.Z.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_ANIMATED.format({
                    targetLevelOrPlan: n
                }) : d.Z.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_STATIC.format({
                    targetLevelOrPlan: n
                })
            }

            function y(e) {
                var t = e.analyticsLocations,
                    n = e.analyticsLocation,
                    i = e.guild,
                    o = e.isGIF,
                    a = e.banner,
                    f = o ? (0, u._p)(s.oNc.ANIMATED_BANNER) : (0, u._p)(s.oNc.BANNER);
                null != f && (0,
                    c.Z)({
                    analyticsLocations: t,
                    analyticsSourceLocation: n,
                    guild: i,
                    headerProps: {
                        title: d.Z.Messages.GUILD_BANNER_UPSELL_MODAL_TITLE,
                        subtitle: v(f, o),
                        image: (0, r.jsx)(h, {
                            guild: i,
                            banner: a
                        })
                    },
                    perkIntro: d.Z.Messages.GUILD_BANNER_UPSELL_MODAL_PERK_INTRO,
                    perks: o ? (0, l.zC)() : (0, l.XO)()
                })
            }
        },
        393299: (e, t, n) => {
            n.d(t, {
                Z: () => D
            });
            var r, i = n(785893),
                o = (n(667294), n(294184)),
                a = n.n(o),
                u = n(202351),
                c = n(882723),
                l = n(491379),
                s = n(591406),
                d = n(859917),
                f = n(784648),
                p = n(2590),
                h = n(476997),
                v = n.n(h);

            function y(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var g, m = (y(r = {}, p.Eu4.NONE, v().iconBackgroundTierNone), y(r, p.Eu4.TIER_1, v().iconBackgroundTierOne), y(r, p.Eu4.TIER_2, v().iconBackgroundTierTwo), y(r, p.Eu4.TIER_3, v().iconBackgroundTierThree), r),
                b = (y(g = {}, p.Eu4.NONE, v().iconTierNone), y(g, p.Eu4.TIER_1, v().iconTierOne), y(g, p.Eu4.TIER_2, v().iconTierTwo), y(g, p.Eu4.TIER_3, v().iconTierThree), g);

            function w(e) {
                var t = e.premiumTier,
                    n = e.iconBackgroundClassName,
                    r = e.iconClassName,
                    o = e.size;
                return (0, i.jsx)(d.Z, {
                    className: a()(n, m[t]),
                    size: o,
                    children: (0, i.jsx)(f.Z, {
                        tier: t,
                        className: a()(r, v().boostedGuildIconGem, b[t])
                    })
                })
            }
            var x = n(21372),
                C = n(473903),
                O = n(206986),
                E = n(521723),
                P = n(930865),
                j = n(473708),
                R = n(36373),
                _ = n.n(R);

            function N(e, t, n) {
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

            function A(e) {
                var t = e.guild,
                    n = e.isBannerVisible,
                    r = e.disableBoostClick,
                    o = (0, u.e7)([C.default, x.ZP], (function() {
                        var e = C.default.getCurrentUser();
                        return x.ZP.isMember(t.id, null == e ? void 0 : e.id)
                    })),
                    a = t.premiumTier,
                    l = t.premiumSubscriberCount;
                if (0 === l && a === p.Eu4.NONE) return null;
                var d = function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        o && !r && (0, s.f)({
                            guildId: t.id,
                            location: {
                                section: p.jXE.GUILD_HEADER,
                                object: p.qAy.BOOST_GEM_ICON
                            }
                        })
                    },
                    f = a === p.Eu4.NONE ? j.Z.Messages.PREMIUM_GUILD_HEADER_BADGE_NO_TIER : P.nW(a),
                    h = (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("div", {
                            className: _().tierTooltipTitle,
                            children: f
                        }), (0, i.jsx)("div", {
                            children: j.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_SUBSCRIBER_COUNT_TOOLTIP.format({
                                subscriberCount: l
                            })
                        })]
                    });
                return (0, i.jsx)("div", {
                    className: _().guildIconContainer,
                    children: (0, i.jsx)(c.Tooltip, {
                        text: h,
                        position: "bottom",
                        "aria-label": null != f ? f : "",
                        children: function(e) {
                            return (0, i.jsx)(c.Clickable, I(function(e) {
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
                                className: _().premiumGuildIcon,
                                onClick: d,
                                children: (0, i.jsx)(w, {
                                    premiumTier: a,
                                    iconBackgroundClassName: n ? _().boostedGuildTierIconBackgroundWithVisibleBanner : null,
                                    iconClassName: n && a !== p.Eu4.TIER_3 ? _().boostedGuildTierMutedIconWithVisibleBanner : null
                                })
                            }))
                        }
                    })
                })
            }

            function M(e) {
                var t = e.guild,
                    n = e.disableColor,
                    r = e.disableBoostClick;
                return (0, l.Z)(t) ? (0, i.jsx)("div", {
                    className: _().guildIconV2Container,
                    children: (0, i.jsx)(E.Z, {
                        guild: t,
                        tooltipPosition: "bottom",
                        tooltipColor: c.Tooltip.Colors.PRIMARY,
                        className: a()(_().guildBadge, N({}, _().disableColor, n)),
                        disableBoostClick: r
                    })
                }) : (0, i.jsx)("div", {
                    className: _().guildIconContainer,
                    children: (0, i.jsx)(O.Z, {
                        guild: t,
                        tooltipPosition: "bottom",
                        tooltipColor: c.Tooltip.Colors.PRIMARY,
                        className: a()(_().guildBadge, N({}, _().disableColor, n))
                    })
                })
            }

            function D(e) {
                var t = e.guild,
                    n = e.isBannerVisible,
                    r = e.disableBoostClick;
                return (0, l.Z)(t) ? (0, i.jsx)(M, {
                    guild: t,
                    disableColor: !1,
                    disableBoostClick: r
                }) : t.hasFeature(p.oNc.VERIFIED) || t.hasFeature(p.oNc.PARTNERED) ? (0, i.jsx)(M, {
                    guild: t,
                    disableColor: !n
                }) : (0, i.jsx)(A, {
                    guild: t,
                    isBannerVisible: n,
                    disableBoostClick: r
                })
            }
        },
        311260: (e, t, n) => {
            n.d(t, {
                $p: () => s,
                PT: () => f,
                U$: () => p,
                Es: () => v,
                kH: () => y,
                AK: () => g,
                Ae: () => m
            });
            var r = n(496486),
                i = n(921431);

            function o(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        c = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(c) : Promise.resolve(c).then(r, i)
            }

            function a(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var a = e.apply(t, n);

                        function u(e) {
                            o(a, r, i, u, c, "next", e)
                        }

                        function c(e) {
                            o(a, r, i, u, c, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }
            var u = function(e, t) {
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

            function c(e) {
                return new Promise((function(t) {
                    var n = new FileReader;
                    n.onload = function(e) {
                        var n, r = null === (n = e.target) || void 0 === n ? void 0 : n.result;
                        t("string" == typeof r ? r : "")
                    };
                    n.readAsDataURL(e)
                }))
            }

            function l(e, t, n, r) {
                var i = e.naturalWidth / e.width,
                    o = t.width / 2,
                    a = t.height / 2,
                    u = (e.width / 2 - o - n.x) * i,
                    c = (e.height / 2 - a - n.y) * i,
                    l = t.width * i,
                    s = t.height * i;
                return {
                    x: u,
                    y: c,
                    scaledCropWidth: l,
                    scaledCropHeight: s,
                    canvasWidth: Math.min(l, r.width),
                    canvasHeight: Math.min(s, r.height)
                }
            }

            function s(e, t, n, r, i) {
                return d.apply(this, arguments)
            }

            function d() {
                return (d = a((function(e, t, r, o, a) {
                    var s, d, f, p, h, v, y, g;
                    return u(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                s = l(t, r, o, a), d = s.x, f = s.y, p = s.scaledCropWidth, h = s.scaledCropHeight;
                                return [4, e.arrayBuffer()];
                            case 1:
                                v = u.sent();
                                y = new Worker(new URL(n.p + n.u(92827), n.b));
                                g = new Promise((function(e, t) {
                                    y.onmessage = function(n) {
                                        var r = n.data;
                                        if (r.type === i.u.CROP_GIF_COMPLETE) {
                                            e(c(new Blob([r.result])));
                                            y.terminate()
                                        } else if (r.type === i.u.CROP_GIF_ERROR) {
                                            t(new Error("Error cropping GIF"));
                                            y.terminate()
                                        }
                                    }
                                }));
                                y.postMessage({
                                    type: i.u.CROP_GIF_START,
                                    gif: new Uint8Array(v),
                                    x: 0 | d,
                                    y: 0 | f,
                                    width: 0 | p,
                                    height: 0 | h
                                });
                                return [2, {
                                    result: g,
                                    cancelFn: function() {
                                        return y.terminate()
                                    }
                                }]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function f(e, t, n, r) {
                var i = l(e, t, n, r),
                    o = i.x,
                    a = i.y,
                    u = i.scaledCropWidth,
                    c = i.scaledCropHeight,
                    s = i.canvasWidth,
                    d = i.canvasHeight,
                    f = document.createElement("canvas");
                f.width = s;
                f.height = d;
                var p = f.getContext("2d");
                null != p && p.drawImage(e, o, a, u, c, 0, 0, f.width, f.height);
                return f.toDataURL("image/png")
            }

            function p(e, t, n) {
                return {
                    x: (0, r.clamp)(e, n.left, n.right),
                    y: (0, r.clamp)(t, n.bottom, n.top)
                }
            }

            function h(e, t, n, r) {
                var o = n,
                    a = r;
                if (n > i.vJ) {
                    o = i.vJ;
                    a = r * (i.vJ / n)
                }
                return n / r < e ? {
                    width: o,
                    height: a
                } : {
                    width: o * (t / a),
                    height: t
                }
            }

            function v(e, t, n) {
                switch (e) {
                    case i.pC.AVATAR:
                    case i.pC.AVATAR_DECORATION:
                        return {
                            width: t, height: n
                        };
                    case i.pC.BANNER:
                        return h(i.MY, i.qj, t, n);
                    case i.pC.GUILD_BANNER:
                        return h(i.Ij, i.C5, t, n);
                    case i.pC.VIDEO_BACKGROUND:
                        return h(i.Ff, i.PB, t, n);
                    case i.pC.SCHEDULED_EVENT_IMAGE:
                        return h(i.ut, i.WV, t, n);
                    case i.pC.HOME_HEADER:
                        return h(i.sX, i.SW, t, n)
                }
            }

            function y(e, t, n) {
                var r = {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0
                    },
                    i = e - n.width,
                    o = t - n.height;
                if (0 !== i) {
                    r.left = -Math.abs(i / 2);
                    r.right = i / 2
                }
                if (0 !== o) {
                    r.bottom = -Math.abs(o / 2);
                    r.top = o / 2
                }
                return r
            }

            function g(e, t, n, r) {
                switch (e) {
                    case i.pC.AVATAR:
                    case i.pC.AVATAR_DECORATION:
                        var o = Math.min(t, n);
                        return {
                            width: o, height: o
                        };
                    case i.pC.BANNER:
                        var a = Math.min(t, i.vJ);
                        return {
                            width: a, height: a * (1 / i.MY)
                        };
                    case i.pC.GUILD_BANNER:
                        var u = Math.min(t, i.vJ);
                        return {
                            width: u, height: Math.min(u * (9 / 16), r)
                        };
                    case i.pC.VIDEO_BACKGROUND:
                        var c = Math.min(t, i.vJ);
                        return {
                            width: c, height: c * (9 / 16)
                        };
                    case i.pC.SCHEDULED_EVENT_IMAGE:
                        var l = Math.min(t, i.vJ);
                        return {
                            width: l, height: .4 * l
                        };
                    case i.pC.HOME_HEADER:
                        var s = Math.min(t, i.vJ);
                        return {
                            width: s, height: s * (1 / i.sX)
                        }
                }
            }

            function m(e, t, n) {
                var r = e.naturalWidth / e.naturalHeight,
                    i = t,
                    o = n;
                e.naturalWidth > e.naturalHeight ? i /= r : o *= r;
                var a = {
                    height: i,
                    width: o
                };
                return f(e, {
                    width: e.width,
                    height: e.height
                }, {
                    x: 0,
                    y: 0
                }, a)
            }
        },
        338479: (e, t, n) => {
            n.d(t, {
                Z: () => S
            });
            var r = n(785893),
                i = n(667294),
                o = n(202351),
                a = n(882723),
                u = n(19585),
                c = n(275086),
                l = n(596801),
                s = n(567403),
                d = n(464187),
                f = n(217674),
                p = n(2590),
                h = n(733274),
                v = n(473708),
                y = n(352900),
                g = n.n(y);

            function m(e) {
                var t = e.analyticsSection,
                    n = e.analyticsPage,
                    i = e.isGIF,
                    y = e.banner,
                    m = (0, o.e7)([d.Z], (function() {
                        return d.Z.getGuildId()
                    })),
                    b = (0, o.e7)([s.Z], (function() {
                        return s.Z.getGuild(m)
                    })),
                    w = (0, u.Z)().analyticsLocations;
                if (null == b || b.hasFeature(p.oNc.ANIMATED_BANNER) || !i && b.hasFeature(p.oNc.BANNER)) return null;
                return (0, r.jsxs)("div", {
                    className: g().container,
                    children: [(0, r.jsx)(f.Z, {
                        className: g().guildBoostingIcon
                    }), (0, r.jsx)(a.Text, {
                        color: "header-primary",
                        variant: "text-sm/semibold",
                        children: v.Z.Messages.PREMIUM_GUILD_PREVIEW
                    }), (0, r.jsx)(a.Button, {
                        look: a.Button.Looks.LINK,
                        color: a.Button.Colors.LINK,
                        className: g().subscribeButton,
                        onClick: function() {
                            if (null != b) {
                                var e = {
                                    section: t,
                                    page: n,
                                    object: p.qAy.UPSELL_HEADER
                                };
                                null != y ? (0, c.c)({
                                    analyticsLocations: w,
                                    analyticsLocation: e,
                                    guild: b,
                                    isGIF: i,
                                    banner: y
                                }) : (0, l.Z)({
                                    analyticsLocations: w,
                                    analyticsSourceLocation: e,
                                    guild: b,
                                    perks: i ? (0, h.zC)() : (0, h.XO)()
                                })
                            }
                        },
                        children: v.Z.Messages.PREMIUM_GUILD_BOOST_SERVER
                    })]
                })
            }
            var b = n(153686),
                w = n(294184),
                x = n.n(w),
                C = n(366007),
                O = n(406493),
                E = n(98265),
                P = n(41717),
                j = n.n(P);

            function R(e) {
                var t = e.text,
                    n = e.textSize,
                    i = void 0 === n ? E.Z.Sizes.SIZE_12 : n,
                    o = e.textColor,
                    a = void 0 === o ? E.Z.Colors.STANDARD : o,
                    u = e.className,
                    c = e.button,
                    l = e.reducedRightPadding,
                    s = void 0 !== l && l;
                return (0, r.jsxs)("div", {
                    className: x()(s ? j().noticeWithoutRightPadding : j().noticeWithRightPadding, u),
                    children: [(0, r.jsxs)("div", {
                        className: j().noticeLeft,
                        children: [(0, r.jsx)(O.Z, {
                            className: j().icon,
                            color: C.JX.PREMIUM_TIER_2
                        }), (0, r.jsx)(E.Z, {
                            className: j().text,
                            size: i,
                            color: a,
                            children: t
                        })]
                    }), c]
                })
            }
            var _ = n(455706),
                N = n(473903),
                I = n(652591),
                A = n(116094),
                M = n(921431),
                D = n(203600),
                k = n(917567),
                T = n.n(k);

            function L(e) {
                var t = e.analyticsSection,
                    n = e.type,
                    c = (0, o.e7)([N.default], (function() {
                        return N.default.getCurrentUser()
                    })),
                    l = A.ZP.canUseAnimatedAvatar(c),
                    s = A.ZP.canUsePremiumProfileCustomization(c),
                    d = n === M.pC.BANNER && s || n === M.pC.AVATAR && l,
                    f = (0, u.Z)(b.Z.PREMIUM_PREVIEW_UPSELL_HEADER).sourceAnalyticsLocations;
                i.useEffect((function() {
                    d || I.default.track(p.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: t,
                        location_stack: f
                    })
                }), [d, t, f]);
                if (d) return null;
                var h = (0, r.jsx)(_.Z, {
                    className: T().getNitroLink,
                    size: a.Button.Sizes.SMALL,
                    look: a.Button.Looks.LINK,
                    color: a.Button.Colors.LINK,
                    subscriptionTier: D.Si.TIER_2,
                    buttonText: v.Z.Messages.PREMIUM_PREVIEW_GET_NITRO.format(),
                    showIcon: !1,
                    premiumModalAnalyticsLocation: {
                        section: t,
                        object: p.qAy.BUTTON_CTA
                    },
                    disableShine: !0
                });
                return (0, r.jsx)(R, {
                    reducedRightPadding: !0,
                    className: T().nitroPreviewUpsell,
                    text: v.Z.Messages.PREMIUM_PREVIEW.format(),
                    textSize: E.Z.Sizes.SIZE_14,
                    textColor: E.Z.Colors.HEADER_PRIMARY,
                    button: h
                })
            }

            function S(e) {
                var t = e.type,
                    n = e.analyticsPage,
                    i = e.analyticsSection,
                    o = e.isGIF,
                    a = e.banner;
                return [M.pC.BANNER, M.pC.AVATAR].includes(t) && o ? (0, r.jsx)(L, {
                    analyticsSection: i,
                    type: t
                }) : t === M.pC.GUILD_BANNER ? (0, r.jsx)(m, {
                    analyticsSection: i,
                    analyticsPage: n,
                    isGIF: o,
                    banner: a
                }) : null
            }
        },
        816240: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(785893),
                i = (n(667294), n(450520)),
                o = n(43338),
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

            function c(e, t) {
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
            const s = (0, i.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    i = e.height,
                    o = void 0 === i ? 24 : i,
                    s = e.color,
                    d = void 0 === s ? "currentColor" : s,
                    f = e.foreground,
                    p = l(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", c(function(e) {
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
                }({}, (0, a.Z)(p)), {
                    width: n,
                    height: o,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        className: f,
                        d: "M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM10 8C10 6.8952 9.1032 6 8 6C6.8944 6 6 6.8952 6 8C6 9.1056 6.8944 10 8 10C9.1032 10 10 9.1056 10 8ZM9 14L6 18H18L15 11L11 16L9 14Z",
                        fill: d
                    })
                }))
            }), o.X)
        }
    }
]);