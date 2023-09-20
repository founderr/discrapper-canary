(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [2458], {
        652411: (e, t, n) => {
            "use strict";
            n.d(t, {
                O_: () => j,
                qA: () => f,
                Ji: () => I,
                uR: () => D
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
            var s = function() {
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
                l = {
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
                m = function(e) {
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
                g = function(e) {
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
                            s = isNaN(c) ? 0 : c;
                        return u.timePassed = s < 0 ? u.duration - s : s, u.directionMultiplier = o, u.easingFunction = a, u
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

            function E(e) {
                var t = Math.floor(x(0, e.length - 1));
                return [e[t], t]
            }

            function A(e, t) {
                return E([e, t])[0]
            }

            function C(e) {
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

            function S(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            return new g(e.value);
                        case "static-random":
                            return new g(x(e.minValue, e.maxValue));
                        case "linear":
                            return new b(e.value, e.addValue);
                        case "linear-random":
                            return new b(x(e.minValue, e.maxValue), x(e.minAddValue, e.maxAddValue));
                        case "oscillating":
                            return new w(e.value, e.start, e.final, e.duration, e.direction, e.easingFunction);
                        case "oscillating-random":
                            return new w(x(e.minValue, e.maxValue), x(e.minStart, e.maxStart), x(e.minFinal, e.maxFinal), x(e.minDuration, e.maxDuration), A(e.minDirection, e.maxDirection), E(e.easingFunctions)[0])
                    }
                }(h(h({}, e), {
                    valueType: "number"
                }))
            }

            function P(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            var t = C(e.value);
                            return new y(new g(t.x), new g(t.y));
                        case "static-random":
                            var n = C(e.minValue),
                                r = C(e.maxValue);
                            return new y(new g(x(n.x, r.x)), new g(x(n.y, r.y)));
                        case "linear":
                            t = C(e.value);
                            var i = C(e.addValue);
                            return new y(new b(t.x, i.x), new b(t.y, i.y));
                        case "linear-random":
                            n = C(e.minValue), r = C(e.maxValue);
                            var o = C(e.minAddValue),
                                a = C(e.maxAddValue);
                            return new y(new b(x(n.x, r.x), x(o.x, a.x)), new b(x(n.y, r.y), x(o.x, a.x)));
                        case "oscillating":
                            t = C(e.value);
                            var u = C(e.start),
                                c = C(e.final),
                                s = C(e.duration),
                                l = C(e.direction);
                            return new y(new w(t.x, u.x, c.x, s.x, l.x, e.easingFunction), new w(t.y, u.y, c.y, s.x, l.y, e.easingFunction));
                        case "oscillating-random":
                            n = C(e.minValue), r = C(e.maxValue);
                            var f = C(e.minStart),
                                d = C(e.maxStart),
                                p = C(e.minFinal),
                                h = C(e.maxFinal),
                                v = C(e.minDuration),
                                m = C(e.maxDuration),
                                O = C(e.minDirection),
                                S = C(e.maxDirection);
                            return new y(new w(x(n.x, r.x), x(f.x, d.x), x(p.x, h.x), x(v.x, m.x), A(O.x, S.x), E(e.easingFunctions)[0]), new w(x(n.y, r.y), x(f.y, d.y), x(p.y, h.y), x(v.y, m.y), A(O.y, S.y), E(e.easingFunctions)[0]))
                    }
                }(h(h({}, e), {
                    valueType: "Vector2"
                }))
            }

            function R(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            var t = O(e.value);
                            return new m(new g(t.x), new g(t.y), new g(t.z));
                        case "static-random":
                            var n = O(e.minValue),
                                r = O(e.maxValue);
                            return new m(new g(x(n.x, r.x)), new g(x(n.y, r.y)), new g(x(n.z, r.z)));
                        case "linear":
                            t = O(e.value);
                            var i = O(e.addValue);
                            return new m(new b(t.x, i.x), new b(t.y, i.y), new b(t.z, i.z));
                        case "linear-random":
                            n = O(e.minValue), r = O(e.maxValue);
                            var o = O(e.minAddValue),
                                a = O(e.maxAddValue);
                            return new m(new b(x(n.x, r.x), x(o.x, a.x)), new b(x(n.y, r.y), x(o.y, a.y)), new b(x(n.z, r.z), x(o.z, a.z)));
                        case "oscillating":
                            t = O(e.value);
                            var u = O(e.start),
                                c = O(e.final),
                                s = O(e.duration),
                                l = O(e.direction);
                            return new m(new w(t.x, u.x, c.x, s.x, l.x, e.easingFunction), new w(t.y, u.y, c.y, s.z, l.y, e.easingFunction), new w(t.z, u.z, c.z, s.z, l.z, e.easingFunction));
                        case "oscillating-random":
                            n = O(e.minValue), r = O(e.maxValue);
                            var f = O(e.minStart),
                                d = O(e.maxStart),
                                p = O(e.minFinal),
                                h = O(e.maxFinal),
                                v = O(e.minDuration),
                                y = O(e.maxDuration),
                                C = O(e.minDirection),
                                S = O(e.maxDirection);
                            return new m(new w(x(n.x, r.x), x(f.x, d.x), x(p.x, h.x), x(v.x, y.x), A(C.x, S.x), E(e.easingFunctions)[0]), new w(x(n.y, r.y), x(f.y, d.y), x(p.y, h.y), x(v.y, y.y), A(C.y, S.y), E(e.easingFunctions)[0]), new w(x(n.z, r.z), x(f.z, d.z), x(p.z, h.z), x(v.z, y.z), A(C.z, S.z), E(e.easingFunctions)[0]))
                    }
                }(h(h({}, e), {
                    valueType: "Vector3"
                }))
            }

            function _(e, t, n, r, i) {
                var o = function(e, t) {
                        return h(h({
                            id: t
                        }, l), e)
                    }(t, e),
                    a = P(o.size),
                    u = function(e, t) {
                        if (null != e) {
                            var n = t.sprites.findIndex((function(t) {
                                return n = t, "string" == typeof(r = e) ? n.src === r && n.colorize : n.src === r.src && n.colorize === r.colorize;
                                var n, r
                            }));
                            if (-1 !== n) return [e, n]
                        }
                        return E(t.sprites)
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
                        return -1 !== r ? r : Math.floor(x(0, n.colors.length - 1))
                    }(null != r ? r : c, i, n);
                return new s({
                    id: e,
                    position: P(o.position),
                    velocity: P(o.velocity),
                    rotation: R(o.rotation),
                    dragCoefficient: P(o.dragCoefficient),
                    size: a,
                    opacity: S(o.opacity),
                    spriteX: d * n.spriteWidth + 2 * d,
                    spriteY: f * n.spriteHeight + 2 * f,
                    spriteWidth: n.spriteWidth,
                    spriteHeight: n.spriteHeight
                })
            }
            var j = r.forwardRef((function(e, t) {
                var o = e.className,
                    a = e.environment,
                    c = e.onClick,
                    s = e.onMouseDown,
                    l = e.onMouseMove,
                    f = e.onMouseUp,
                    d = e.onBeforeRender,
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
                    m = r.useRef(new Map),
                    g = r.useRef(null),
                    b = r.useRef(0),
                    w = r.useRef(0),
                    x = r.useCallback((function() {
                        var e = y.current;
                        if (null != e) {
                            var t = e.getContext("2d");
                            if (null != t) {
                                t.clearRect(0, 0, e.width, e.height), null == d || d(t), m.current.forEach((function(n, r) {
                                    var i = n.confetti,
                                        o = n.spriteCanvas;
                                    i.update(a), i.draw(o, t), i.shouldDestroy(e, a) && m.current.delete(r)
                                })), null == p || p(t), m.current.size > 0 ? g.current = window.requestAnimationFrame(x) : (t.clearRect(0, 0, e.width, e.height), g.current = null);
                                var n = Date.now();
                                0 !== b.current && (w.current = 1e3 / (n - b.current)), b.current = n
                            }
                        }
                    }), [a, p, d]);
                r.useEffect((function() {
                    null != g.current && (window.cancelAnimationFrame(g.current), g.current = window.requestAnimationFrame(x))
                }), [x]);
                var E = r.useCallback((function(e, t) {
                        m.current.set(e.id, {
                            confetti: e,
                            spriteCanvas: t
                        }), null == g.current && x()
                    }), [x]),
                    A = r.useCallback((function(e, t, n, r, o) {
                        var a, u = _(null !== (a = e.id) && void 0 !== a ? a : (0, i.v4)(), e, n, r, o);
                        return E(u, t), u
                    }), [E]),
                    C = r.useCallback((function(e) {
                        m.current.delete(e)
                    }), []),
                    O = r.useCallback((function() {
                        return m.current.clear()
                    }), []),
                    S = r.useCallback((function() {
                        return y.current
                    }), []);
                r.useImperativeHandle(t, (function() {
                    return {
                        createConfetti: A,
                        addConfetti: E,
                        deleteConfetti: C,
                        clearConfetti: O,
                        getCanvas: S
                    }
                }), [A, E, C, O, S]);
                var P = r.useCallback((function(e, t) {
                        var n, r, i = t.clickHandler,
                            o = t.mouseHandler;
                        if (null != i || null != o) {
                            var c = null === (n = y.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                            if (null != c) {
                                var s = function(e, t) {
                                    if (null == t) throw new Error("element should not be null");
                                    var n = t.getBoundingClientRect();
                                    return {
                                        x: e.clientX - n.left,
                                        y: e.clientY - n.top
                                    }
                                }(e, y.current);
                                if (u(s, {
                                        x: c.left,
                                        y: c.top,
                                        width: c.width,
                                        height: c.height
                                    })) {
                                    if (null != o) return o(e);
                                    if (null != i) {
                                        var l = -1e3 / w.current * 2,
                                            f = function(e, t) {
                                                for (var n = 0, r = Array.from(e.values()); n < r.length; n++) {
                                                    var i = r[n];
                                                    if (null != i && t(i)) return i
                                                }
                                                return null
                                            }(m.current, (function(e) {
                                                var t = e.confetti,
                                                    n = t.previewPositionUpdate(a, l);
                                                return u(s, {
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
                        return P(e, {
                            clickHandler: c
                        })
                    }), [P, c]),
                    j = r.useCallback((function(e) {
                        return P(e, {
                            clickHandler: s
                        })
                    }), [P, s]),
                    I = r.useCallback((function(e) {
                        return P(e, {
                            mouseHandler: l
                        })
                    }), [P, l]),
                    D = r.useCallback((function(e) {
                        return P(e, {
                            mouseHandler: f
                        })
                    }), [P, f]);
                return r.useEffect((function() {
                    var e = function(e, t, n) {
                        null != n && window.addEventListener(e, t)
                    };
                    return e("click", R, c), e("mousedown", j, s), e("mousemove", I, l), e("mouseup", D, f),
                        function() {
                            window.removeEventListener("click", R), window.removeEventListener("mousedown", j), window.removeEventListener("mousemove", I), window.removeEventListener("mouseup", I)
                        }
                }), [R, j, I, D, c, s, l, f]), r.useEffect((function() {
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
            var I = r.forwardRef((function(e, t) {
                var n, o = e.className,
                    u = e.visible,
                    c = void 0 !== u && u,
                    s = e.sprites,
                    l = e.colors,
                    f = e.spriteWidth,
                    d = e.spriteHeight,
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
                                colors: l,
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
                }), [l, d, f]);
                var m = r.useCallback((function() {
                        var e = p.current,
                            t = null == e ? void 0 : e.getContext("2d", {
                                willReadFrequently: !0
                            });
                        null != t && null != e && (t.clearRect(0, 0, e.width, e.height),
                            h.current.forEach((function(e, n) {
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
                                            }(r), s = 0; s < u.data.length; s += 4) u.data[s] = c.r, u.data[s + 1] = c.g, u.data[s + 2] = c.b;
                                        t.putImageData(u, o, a)
                                    }
                                };
                                e.colorize ? l.forEach((function(e, t) {
                                    return r(e, t)
                                })) : r(null, 0)
                            })))
                    }), [l, d, f]),
                    g = r.useCallback((function() {
                        var e = s.map((function(e) {
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
                    }), [s]),
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
                                        return [4, g()];
                                    case 1:
                                        return e.sent(), m(), v.current = !0, b(!0), [2]
                                }
                            }))
                        }))
                    }), [b, g, m]);
                return r.useEffect((function() {
                    w()
                }), [w]), r.useEffect((function() {
                    return function() {
                        return b(!1)
                    }
                }), [b]), r.useEffect((function() {
                    null != p.current && (p.current.width = (f + 2) * Math.max(l.length, 1), p.current.height = (d + 2) * s.length)
                }), [l.length, d, f, s.length]), r.createElement("canvas", {
                    ref: p,
                    className: a()(o, (n = {}, n["SpriteCanvas-module_spriteCanvasHidden__ndzQV"] = !c, n))
                })
            }));

            function D(e, t) {
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
                    s = r.useCallback((function(n) {
                        var r = null == t ? void 0 : t.getCanvas();
                        null != r && (null == e || e.addConfetti(n, r))
                    }), [e, t]),
                    l = r.useCallback((function(t) {
                        null == e || e.deleteConfetti(t)
                    }), [e]),
                    f = r.useCallback((function() {
                        return null == e ? void 0 : e.clearConfetti()
                    }), [e]);
                return r.useMemo((function() {
                    return {
                        createConfetti: u,
                        createMultipleConfetti: c,
                        addConfetti: s,
                        clearConfetti: f,
                        deleteConfetti: l,
                        isReady: o && null != t && null != e
                    }
                }), [s, f, e, u, c, l, o, t])
            }
        },
        578862: (e, t, n) => {
            e.exports = n.p + "f7963229b547598b0ad00d0709a23e5d.png"
        },
        297206: (e, t, n) => {
            e.exports = n.p + "f1ddf309c7c2db629a6deae0590fef7d.png"
        },
        406112: (e, t, n) => {
            e.exports = n.p + "99dc9a00df6750595689491e8375c322.png"
        },
        398015: (e, t, n) => {
            e.exports = n.p + "47e70fb32fa1bac0984f0315d0ee37d8.png"
        },
        954512: (e, t, n) => {
            e.exports = n.p + "12f609335019910fcf794763b4dd2d75.png"
        },
        200309: (e, t, n) => {
            e.exports = n.p + "c2d60d152d1156c1097d320737305ca4.png"
        },
        173654: (e, t, n) => {
            e.exports = n.p + "72a8b168ad2c7eea7b2559b5690c7695.svg"
        },
        5084: (e, t, n) => {
            e.exports = n.p + "e1349377226366f95f85ab9eac4586d3.svg"
        },
        950175: (e, t, n) => {
            e.exports = n.p + "b1d4c5e276e3aaa8ec41e6014dd572b2.svg"
        },
        248978: (e, t, n) => {
            e.exports = n.p + "7d883ba72b5dbc0229f5d1980205ee34.svg"
        },
        622507: (e, t, n) => {
            e.exports = n.p + "e843c51c0eec3801b70cae5c45ad343f.svg"
        },
        131687: (e, t, n) => {
            e.exports = n.p + "c6ce0010471b65c0faeda6c53ab297bd.svg"
        },
        12668: (e, t, n) => {
            e.exports = n.p + "70275fe3104cf1d3388586ad8ffd478e.svg"
        },
        740097: (e, t, n) => {
            e.exports = n.p + "81084ff5a27b6e6ff487e479c37d1660.svg"
        },
        102458: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => _e
            });
            var r = n(785893),
                i = n(667294),
                o = n(202351),
                a = n(882723),
                u = n(153686),
                c = n(19585),
                s = n(339938),
                l = n(349771),
                f = n(318715),
                d = n(764797),
                p = n(767539);

            function h(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function v(e, t) {
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
                    if ("string" == typeof e) return h(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            const y = function(e) {
                var t = v((0, f.Wu)([d.Z], (function() {
                    return [d.Z.getCategoryForProduct(e), d.Z.getProduct(e)]
                })), 2);
                return {
                    category: t[0],
                    product: t[1],
                    purchase: (0, f.ZP)([p.Z], (function() {
                        return p.Z.getPurchase(e)
                    }))
                }
            };
            var m = n(681714),
                g = n(498964),
                b = n(408522),
                w = n(652591),
                x = n(2590),
                E = n(203600);

            function A(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function C(e, t) {
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
                    if ("string" == typeof e) return A(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return A(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            const O = function(e) {
                var t = C((0, f.Wu)([d.Z], (function() {
                        return [d.Z.categories, d.Z.products, d.Z.categorySkuIdsByProductSkuId]
                    })), 3),
                    n = t[0],
                    r = t[1],
                    o = t[2];
                return (0, i.useCallback)((function(t) {
                    var i = t.type,
                        a = t.skuId,
                        u = n.get(o[a]),
                        c = r.get(a);
                    w.default.track(x.rMx.PREMIUM_FEATURE_TRY_OUT, {
                        feature_name: (0, g.EQ)(i).with(b.Z.AVATAR_DECORATION, (function() {
                            return E.QP.AVATAR_DECORATION
                        })).otherwise((function() {})),
                        feature_tier: (0, l.mv)(u) ? E.h1.FREE : E.h1.PREMIUM_STANDARD,
                        feature_selection: null == c ? void 0 : c.name,
                        location_stack: e
                    })
                }), [n, r, o, e])
            };
            var S = n(455706),
                P = n(357920),
                R = n(450383),
                _ = n(473903),
                j = n(116094),
                I = n(938737),
                D = n(294184),
                M = n.n(D),
                Z = n(940594),
                N = n(584228),
                T = n(491260),
                H = n(89836),
                U = n(310126),
                F = n(841379),
                k = n(995141),
                z = n(473708);

            function V(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var L = U.ZP.getEnableHardwareAcceleration() ? a.AnimatedAvatar : a.Avatar;
            const B = function(e) {
                var t = e.user,
                    n = e.pendingAvatarDecoration,
                    i = e.status,
                    o = e.avatarSize,
                    u = void 0 === o ? a.AvatarSizes.SIZE_120 : o,
                    c = e["aria-hidden"],
                    s = void 0 !== c && c,
                    l = (0, H.w)({
                        user: t,
                        size: (0, a.getAvatarSize)(u),
                        showPending: !0
                    }),
                    f = l.avatarSrc,
                    d = l.isAvatarAnimating,
                    p = l.eventHandlers,
                    h = (0, F.Z)({
                        user: t,
                        pendingAvatarDecoration: n,
                        size: (0, k.y9)(u),
                        canAnimate: d
                    });
                return (0, r.jsx)(L, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            V(e, t, n[t])
                        }))
                    }
                    return e
                }({
                    avatarDecoration: h,
                    src: f,
                    size: u,
                    status: i,
                    "aria-label": s ? void 0 : z.Z.Messages.USER_SETTINGS_AVATAR,
                    "aria-hidden": s
                }, p))
            };
            var W = n(675960),
                G = n.n(W),
                q = [{
                    avatarSize: a.AvatarSizes.SIZE_40,
                    showStatus: !1
                }, {
                    avatarSize: a.AvatarSizes.SIZE_32,
                    showStatus: !1
                }, {
                    avatarSize: a.AvatarSizes.SIZE_40,
                    showStatus: !0
                }, {
                    avatarSize: a.AvatarSizes.SIZE_32,
                    showStatus: !0
                }],
                Y = function(e) {
                    var t = e.purchase,
                        n = (0, l.qS)(t);
                    return (0, r.jsxs)("div", {
                        className: G().purchaseInfo,
                        children: [(0, r.jsx)(a.Text, {
                            variant: "text-sm/semibold",
                            color: "header-primary",
                            children: t.name
                        }), (0, r.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            children: t.summary
                        }), (0, r.jsx)(a.Text, {
                            variant: "text-xxs/normal",
                            color: "text-muted",
                            children: n ? z.Z.Messages.CHANGE_DECORATION_MODAL_STARTER_DESC : z.Z.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
                                date: t.purchasedAt.toLocaleDateString(void 0, {
                                    month: "long",
                                    year: "numeric"
                                })
                            })
                        })]
                    })
                },
                X = function(e) {
                    var t = e.children,
                        n = e.category,
                        i = (0, N.Z)(n).backgroundColors,
                        o = null != n ? (0, l.uV)(n.banner, {
                            size: Z.yV
                        }) : null;
                    return (0, r.jsx)("div", {
                        className: G().shopPreviewBanner,
                        style: null != o ? {
                            backgroundImage: "url(".concat(o, ")")
                        } : {
                            background: "linear-gradient(".concat(i[0], ", ").concat(i[1], ")")
                        },
                        children: t
                    })
                };
            const K = function(e) {
                var t = e.user,
                    n = e.pendingAvatarDecoration,
                    i = e.className,
                    u = (0, o.e7)([T.Z], (function() {
                        return T.Z.getStatus(t.id)
                    })),
                    c = y(null == n ? void 0 : n.skuId),
                    s = c.category,
                    f = c.product,
                    d = c.purchase,
                    p = j.ZP.canUseCollectibles(t),
                    h = (0, l.qS)(d),
                    v = (0, l.mv)(s),
                    m = !p && h;
                return null == f || null != d && !m ? (0, r.jsxs)("div", {
                    className: M()(G().modalPreview, i),
                    children: [(0, r.jsxs)("div", {
                        className: G().previewSections,
                        children: [(0, r.jsx)("div", {
                            className: G().decorationPreview,
                            children: (0, r.jsx)(B, {
                                user: t,
                                pendingAvatarDecoration: n
                            })
                        }), (0, r.jsx)("div", {
                            className: G().smallDecorationPreviewsContainer,
                            children: q.map((function(e) {
                                var i = e.avatarSize,
                                    o = e.showStatus;
                                return (0, r.jsx)("div", {
                                    className: G().smallDecorationPreview,
                                    children: (0, r.jsx)(B, {
                                        user: t,
                                        avatarSize: i,
                                        pendingAvatarDecoration: n,
                                        status: o ? u : void 0,
                                        "aria-hidden": !0
                                    })
                                }, "".concat(i).concat(o))
                            }))
                        })]
                    }), null != d && (0, r.jsx)(Y, {
                        purchase: d
                    })]
                }) : (0, r.jsxs)("div", {
                    className: M()(G().modalPreview, G().shopPreviewContainer, i),
                    children: [(0, r.jsx)(X, {
                        category: s,
                        children: (0, r.jsx)(B, {
                            user: t,
                            pendingAvatarDecoration: n
                        })
                    }), (0, r.jsxs)("div", {
                        className: G().shopPreviewTextContainer,
                        children: [(0, r.jsx)(a.Text, {
                            variant: "text-sm/semibold",
                            children: f.name
                        }), (0, r.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            children: m ? z.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_CHURNED : (0, g.EQ)([v, p]).with([!0, !0], (function() {
                                return z.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_PREMIUM
                            })).with([!0, !1], (function() {
                                return z.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER
                            })).with([!1, !0], (function() {
                                return z.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_PURCHASE_PREMIUM
                            })).with([!1, !1], (function() {
                                return z.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_PURCHASE
                            })).exhaustive()
                        })]
                    })]
                })
            };
            var Q, $ = n(517586),
                J = n(662478),
                ee = n(95891),
                te = n(778613),
                ne = n(97990),
                re = n(155217),
                ie = n(616276),
                oe = n(531441);

            function ae(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function ue(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function ce(e, t) {
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
                }(e, t) || le(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function se(e) {
                return function(e) {
                    if (Array.isArray(e)) return ae(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || le(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function le(e, t) {
                if (e) {
                    if ("string" == typeof e) return ae(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ae(e, t) : void 0
                }
            }! function(e) {
                e[e.PURCHASE = 0] = "PURCHASE";
                e[e.PREMIUM_PURCHASE = 1] = "PREMIUM_PURCHASE";
                e[e.PREVIEW = 2] = "PREVIEW"
            }(Q || (Q = {}));
            var fe = {
                    id: "None"
                },
                de = {
                    id: "Shop"
                };
            const pe = function() {
                var e = (0, f.ZP)([_.default], (function() {
                        return _.default.getCurrentUser()
                    })),
                    t = j.ZP.canUseCollectibles(e),
                    n = (0, f.ZP)([p.Z], (function() {
                        return p.Z.purchases
                    })),
                    r = ce((0,
                        f.Wu)([d.Z], (function() {
                        return [d.Z.categories, d.Z.categorySkuIdsByProductSkuId]
                    })), 2),
                    o = r[0],
                    a = r[1];
                return (0, i.useMemo)((function() {
                    var e, r = (0, l.IM)(o).reduce((function(e, r) {
                        var i = n.get(r.skuId);
                        if (null != i && (0, l.qS)(i)) {
                            e[Q.PREMIUM_PURCHASE].push(r);
                            return e
                        }
                        if (null != i) {
                            e[Q.PURCHASE].push(r);
                            return e
                        }
                        var u = o.get(a[r.skuId]);
                        if (!t && (0, l.mv)(u)) {
                            e[Q.PREMIUM_PURCHASE].push(r);
                            return e
                        }
                        e[Q.PREVIEW].push(r);
                        return e
                    }), (ue(e = {}, Q.PURCHASE, []), ue(e, Q.PREMIUM_PURCHASE, []), ue(e, Q.PREVIEW, []), e));
                    return [{
                        section: Q.PURCHASE,
                        items: r[Q.PURCHASE].length > 0 ? [fe, de].concat(se(r[Q.PURCHASE])) : r[Q.PURCHASE],
                        height: 12,
                        header: z.Z.Messages.CHANGE_DECORATION_MODAL_PURCHASE_HEADER
                    }, {
                        section: Q.PREMIUM_PURCHASE,
                        items: r[Q.PREMIUM_PURCHASE],
                        height: 12,
                        header: z.Z.Messages.CHANGE_DECORATION_MODAL_PREMIUM_STARTER_HEADER
                    }, {
                        section: Q.PREVIEW,
                        items: r[Q.PREVIEW],
                        height: 56,
                        header: z.Z.Messages.CHANGE_DECORATION_MODAL_SHOP_PREVIEW_HEADER
                    }].filter((function(e) {
                        return e.items.length > 0
                    }))
                }), [o, n, a, t])
            };
            var he = n(389091),
                ve = n.n(he);

            function ye(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function me(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        ye(e, t, n[t])
                    }))
                }
                return e
            }

            function ge(e, t) {
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

            function be(e, t) {
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
            var we = function() {
                    return 80
                },
                xe = function(e) {
                    var t = e.children,
                        n = e.className,
                        i = e.onSelect,
                        o = e.isSelected,
                        u = void 0 !== o && o,
                        c = be(e, ["children", "className", "onSelect", "isSelected"]);
                    return (0, r.jsx)(a.Clickable, ge(me({
                        className: M()(ve().decorationGridItem, u ? ve().selected : void 0, n)
                    }, c), {
                        onClick: i,
                        children: t
                    }))
                },
                Ee = function(e) {
                    var t = e.user,
                        n = e.avatarDecoration,
                        o = e.innerRef,
                        a = e.section,
                        u = be(e, ["user", "avatarDecoration", "innerRef", "section"]),
                        c = (0, f.ZP)([d.Z], (function() {
                            var e = d.Z.getCategoryForProduct(n.skuId);
                            return (0, l.mv)(e)
                        })),
                        s = j.ZP.canUseCollectibles(t),
                        p = a === Q.PREMIUM_PURCHASE && c && !s,
                        h = i.useRef(null),
                        v = (0, J.Z)(null != o ? o : h),
                        y = (0, F.Z)({
                            user: t,
                            pendingAvatarDecoration: n,
                            size: 80,
                            canAnimate: v
                        });
                    return (0, r.jsxs)(xe, ge(me({
                        className: p ? ve().decorationGridItemChurned : void 0,
                        innerRef: null != o ? o : h
                    }, u), {
                        children: [(0, r.jsx)("img", {
                            className: ve().presetDecorationImg,
                            src: y,
                            alt: n.label
                        }), (a === Q.PREVIEW || a === Q.PREMIUM_PURCHASE && !s) && (0, r.jsx)(oe.G2, {
                            icon: c ? ee.Z : ne.Z,
                            color: $.Z.BACKGROUND_ACCENT,
                            className: ve().itemBadge
                        })]
                    }))
                };
            const Ae = function(e) {
                var t = e.user,
                    n = e.pendingAvatarDecoration,
                    i = e.selectedAvatarDecorationRef,
                    o = e.onSelect,
                    u = e.onOpenShop,
                    c = pe();
                return (0, r.jsx)(a.MasonryList, {
                    fade: !0,
                    className: ve().list,
                    columns: 3,
                    sections: c.map((function(e) {
                        return e.items.length
                    })),
                    sectionGutter: 16,
                    itemGutter: 12,
                    paddingHorizontal: 12,
                    paddingVertical: 0,
                    removeEdgeItemGutters: !0,
                    renderItem: function(e, s, l, f) {
                        var d = c[e],
                            p = d.section,
                            h = d.items;
                        return (0, g.EQ)(h[s]).with(fe, (function() {
                            return (0, r.jsxs)(xe, {
                                style: me({}, l),
                                isSelected: null === n,
                                onSelect: function() {
                                    return o(null)
                                },
                                children: [(0, r.jsx)(te.Z, {
                                    className: ve().notAllowedIcon
                                }), (0, r.jsx)(a.Text, {
                                    variant: "text-xs/normal",
                                    color: "header-primary",
                                    children: z.Z.Messages.NONE
                                })]
                            }, f)
                        })).with(de, (function() {
                            return (0, r.jsxs)(xe, {
                                style: l,
                                onSelect: u,
                                children: [(0, r.jsx)(re.Z, {
                                    className: ve().shopIcon
                                }), (0, r.jsx)(ie.Z, {
                                    foreground: ve().shopSparkleBig
                                }), (0, r.jsx)(ie.Z, {
                                    foreground: ve().shopSparkleSmall
                                }), (0, r.jsx)(a.Text, {
                                    variant: "text-xs/normal",
                                    color: "header-primary",
                                    children: z.Z.Messages.COLLECTIBLES_SHOP
                                })]
                            }, f)
                        })).otherwise((function(e) {
                            var a = (null == n ? void 0 : n.id) === e.id;
                            return (0, r.jsx)(Ee, {
                                style: me({}, l),
                                user: t,
                                avatarDecoration: e,
                                section: p,
                                innerRef: a ? i : void 0,
                                isSelected: a,
                                onSelect: function() {
                                    return o(e)
                                }
                            }, f)
                        }))
                    },
                    renderSection: function(e) {
                        var t = c[e],
                            n = t.section,
                            i = t.header;
                        return (0, r.jsx)("div", {
                            className: ve().headings,
                            children: (0, r.jsx)(a.HeadingLevel, {
                                forceLevel: 5,
                                component: (0, r.jsx)(a.Heading, {
                                    variant: "eyebrow",
                                    color: "header-secondary",
                                    children: i
                                }),
                                children: n === Q.PREVIEW && (0, r.jsx)(a.Heading, {
                                    variant: "text-sm/normal",
                                    children: z.Z.Messages.CHANGE_DECORATION_MODAL_SHOP_PREVIEW_DESC
                                })
                            })
                        })
                    },
                    getSectionHeight: function(e) {
                        return c[e].height
                    },
                    getItemKey: function(e, t) {
                        return c[e].items[t].id
                    },
                    getItemHeight: we
                })
            };
            var Ce = n(240647),
                Oe = n.n(Ce);

            function Se(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Pe(e, t) {
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
                    if ("string" == typeof e) return Se(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Se(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Re(e) {
                var t = e.user,
                    n = e.categories,
                    c = e.analyticsLocations,
                    f = e.onClose,
                    d = e.initialSelectedDecoration,
                    p = (0, o.e7)([R.Z], (function() {
                        return R.Z.getPendingAvatarDecoration()
                    })),
                    h = Pe(i.useState((function() {
                        return null != d ? d : void 0 !== p ? p : null == (null == t ? void 0 : t.avatarDecoration) || 0 === n.size ? null : null !== (e = (0, l.IM)(n).find((function(e) {
                            return (0, I.sr)(e, t.avatarDecoration)
                        }))) && void 0 !== e ? e : null;
                        var e
                    })), 2),
                    v = h[0],
                    m = h[1],
                    g = y(null == v ? void 0 : v.skuId),
                    b = g.category,
                    w = g.purchase,
                    x = j.ZP.canUseCollectibles(t),
                    A = i.useRef(null),
                    C = O(c),
                    _ = (0, I.sr)(v, void 0 === p ? null == t ? void 0 : t.avatarDecoration : p),
                    D = function() {
                        (0, P.PO)(v, null == t ? void 0 : t.avatarDecoration);
                        f()
                    },
                    M = function() {
                        f();
                        (0, s.mK)({
                            analyticsLocations: c,
                            analyticsSource: u.Z.EDIT_AVATAR_DECORATION_MODAL
                        })
                    };
                return (0, r.jsxs)("div", {
                    className: Oe().modalBody,
                    children: [(0,
                        r.jsxs)(a.ModalHeader, {
                        separator: !1,
                        className: Oe().modalHeader,
                        children: [(0, r.jsx)("div", {
                            className: Oe().modalHeadings,
                            children: (0, r.jsx)(a.HeadingLevel, {
                                component: (0, r.jsx)(a.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: z.Z.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
                                }),
                                children: !x && (0, r.jsx)(a.Heading, {
                                    variant: "text-sm/normal",
                                    children: z.Z.Messages.CHANGE_DECORATION_MODAL_SHOP_PREVIEW_HEADER_STARTER_DESC
                                })
                            })
                        }), (0, r.jsx)(a.ModalCloseButton, {
                            className: Oe().modalCloseButton,
                            onClick: f
                        })]
                    }), (0, r.jsxs)(a.ModalContent, {
                        className: Oe().modalContent,
                        scrollbarType: "none",
                        children: [(0, r.jsx)(Ae, {
                            user: t,
                            pendingAvatarDecoration: v,
                            selectedAvatarDecorationRef: A,
                            onSelect: function(e) {
                                m(e);
                                null != e && C(e)
                            },
                            onOpenShop: M
                        }), (0, r.jsx)(K, {
                            className: Oe().modalPreview,
                            user: t,
                            pendingAvatarDecoration: v
                        })]
                    }), (0, r.jsxs)(a.ModalFooter, {
                        className: Oe().modalFooter,
                        children: [null != w && (!(0, l.qS)(w) || x) || null === v ? (0, r.jsx)(a.Button, {
                            onClick: D,
                            disabled: _,
                            children: z.Z.Messages.AVATAR_DECORATION_MODAL_APPLY
                        }) : x || !(0,
                            l.mv)(b) ? (0, r.jsx)(a.Button, {
                            className: Oe().modalFooterShopButton,
                            onClick: M,
                            children: z.Z.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
                        }) : (0, r.jsx)(S.Z, {
                            subscriptionTier: E.Si.TIER_2,
                            buttonText: j.ZP.isPremium(t) ? z.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : z.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
                        }), (0, r.jsx)(a.Button, {
                            look: a.Button.Looks.LINK,
                            color: a.Button.Colors.PRIMARY,
                            onClick: f,
                            children: z.Z.Messages.CANCEL
                        })]
                    })]
                })
            }

            function _e(e) {
                var t = e.transitionState,
                    n = e.analyticsLocations,
                    s = e.onClose,
                    l = e.initialSelectedDecoration,
                    f = (0, m.ZP)(),
                    d = f.categories,
                    p = f.isFetching,
                    h = (0, o.e7)([_.default], (function() {
                        return _.default.getCurrentUser()
                    })),
                    v = (0, c.Z)(n, u.Z.EDIT_AVATAR_DECORATION_MODAL),
                    y = v.AnalyticsLocationProvider,
                    g = v.analyticsLocations;
                i.useEffect((function() {
                    w.default.track(x.rMx.OPEN_MODAL, {
                        type: "Edit Avatar Decoration Modal",
                        location_stack: g
                    })
                }), [g]);
                return null == h ? null : (0, r.jsx)(y, {
                    children: (0, r.jsx)(a.ModalRoot, {
                        transitionState: t,
                        className: Oe().modal,
                        size: p ? a.ModalSize.DYNAMIC : a.ModalSize.MEDIUM,
                        children: p ? (0, r.jsx)(a.Spinner, {
                            className: Oe().spinner,
                            type: a.Spinner.Type.SPINNING_CIRCLE
                        }) : (0, r.jsx)(Re, {
                            user: h,
                            categories: d,
                            analyticsLocations: g,
                            initialSelectedDecoration: l,
                            onClose: s
                        })
                    })
                })
            }
        },
        681714: (e, t, n) => {
            "use strict";
            n.d(t, {
                ZP: () => f
            });
            var r = n(667294),
                i = n(318715),
                o = n(339938),
                a = n(764797),
                u = n(525628),
                c = n(767539);

            function s(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function l(e, t) {
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
                    if ("string" == typeof e) return s(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function f() {
                var e, t = (0, u.OE)().canUseCollectiblesIAP,
                    n = function() {
                        var e, t = (0, u.OE)().canUseCollectiblesIAP,
                            n = l((0, i.Wu)([a.Z], (function() {
                                return [a.Z.isFetching, a.Z.error, null !== (e = a.Z.lastFetched) && void 0 !== e ? e : 0, a.Z.categories]
                            })), 4),
                            c = n[0],
                            s = n[1],
                            f = n[2],
                            d = n[3];
                        (0, r.useEffect)((function() {
                            !t || c || Date.now() - f < 6e5 || (0, o.F$)()
                        }), [t, c, f]);
                        return {
                            canUseCollectiblesIAP: t,
                            isFetching: c,
                            categories: d,
                            error: s
                        }
                    }(),
                    s = n.isFetching,
                    f = n.categories,
                    d = n.error,
                    p = function() {
                        var e = (0, u.OE)().canUseCollectiblesIAP,
                            t = l((0, i.Wu)([c.Z], (function() {
                                return [c.Z.isFetching, c.Z.isClaiming, c.Z.fetchError, c.Z.claimError, c.Z.purchases]
                            })), 5),
                            n = t[0],
                            a = t[1],
                            s = t[2],
                            f = t[3],
                            d = t[4];
                        (0, r.useEffect)((function() {
                            e && (0, o.qg)()
                        }), [e]);
                        return {
                            canUseCollectiblesIAP: e,
                            isClaiming: a,
                            fetchError: s,
                            claimError: f,
                            isFetching: n,
                            purchases: d
                        }
                    }(),
                    h = p.isClaiming,
                    v = p.fetchError,
                    y = p.claimError,
                    m = p.isFetching;
                return {
                    canUseCollectiblesIAP: t,
                    isFetching: s || m,
                    isClaiming: h,
                    categories: f,
                    purchases: p.purchases,
                    error: null !== (e = null != d ? d : v) && void 0 !== e ? e : y
                }
            }
        },
        940594: (e, t, n) => {
            "use strict";
            n.d(t, {
                yV: () => u,
                IC: () => c,
                Ch: () => s
            });
            var r = n(795308),
                i = n(265022),
                o = n(721741),
                a = n(362660),
                u = 1060,
                c = function(e) {
                    return 3.8 * e
                },
                s = function(e) {
                    var t = (0, i.J2)((0, a.dX)(e[0]), (0, a.dX)(e[1]), .5),
                        n = new o.Z(t[0], t[1], t[2], 1).toHSL();
                    return {
                        background: "linear-gradient(to right, ".concat(e.join(", "), ")"),
                        color: n.lightness > .66 ? r.Z.unsafe_rawColors.BLACK_500.css : r.Z.unsafe_rawColors.WHITE_500.css
                    }
                }
        },
        584228: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => u
            });
            var r = n(389349),
                i = n(795308),
                o = n(4958),
                a = o.CA.filter((function(e, t) {
                    return 1 !== t && 7 !== t
                }));
            const u = function(e) {
                var t = {
                    backgroundColors: [],
                    buttonColors: [],
                    confettiSprites: o.CA,
                    confettiColors: o.Br
                };
                if (null == e) return t;
                switch (e.skuId) {
                    case r.T.FANTASY:
                        return {
                            backgroundColors: ["#146144", "#021A0E"], buttonColors: ["#028737", "#00694A"], confettiSprites: [n(406112), n(200309)], confettiColors: ["#EFA7F7", "#B646C1", "#56B3B3", "#1A8199", "#7160AF", "#AEC7FF"]
                        };
                    case r.T.ANIME:
                        return {
                            backgroundColors: ["#4B79B0", "#0F0E3A"], buttonColors: ["#8A45C1", "#136897"], confettiSprites: [n(954512), n(398015)], confettiColors: ["#2C9BD9", "#E46A80", "#FFE500", "#BBA8D5", "#3EDDD3", "#E2B761"]
                        };
                    case r.T.BREAKFAST:
                        return {
                            backgroundColors: ["#E8B26B", "#7A3A00"], buttonColors: ["#FFC355", "#FF9537"], confettiSprites: [n(297206), n(578862)], confettiColors: ["#DD9C98", "#FFC037", "#FF6B00", "#FDE081", "#DD923E", "#FFEECC"]
                        };
                    case r.T.DISXCORE:
                        return {
                            backgroundColors: ["#732565", "#111D40"], buttonColors: [i.Z.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.css, i.Z.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.css], confettiSprites: a,
                                confettiColors: ["#F53273", "#9595FF", "#A7FA4E", "#331EAF"]
                        };
                    default:
                        return t
                }
            }
        },
        4958: (e, t, n) => {
            "use strict";
            n.d(t, {
                vv: () => o,
                Br: () => a,
                CA: () => u,
                Ko: () => c,
                We: () => s,
                rq: () => l
            });
            var r = n(652411),
                i = n(5084),
                o = n.n(i)(),
                a = ["#FF73FA", "#FFC0FF", "#FFD836", "#FF9A15", "#A5F7DE", "#51BC9D", "#AEC7FF", "#3E70DD"],
                u = [n(173654), o, n(950175), n(248978), n(622507), n(131687), n(12668), {
                    src: n(740097),
                    colorize: !1
                }],
                c = 28,
                s = {
                    velocity: {
                        type: "static-random",
                        minValue: {
                            x: 30,
                            y: -80
                        },
                        maxValue: {
                            x: -30,
                            y: -180
                        }
                    },
                    rotation: {
                        type: "linear-random",
                        minValue: 0,
                        maxValue: 360,
                        minAddValue: -25,
                        maxAddValue: 25
                    },
                    size: {
                        type: "static-random",
                        minValue: 14,
                        maxValue: c
                    }
                },
                l = new r.qA
        },
        778613: (e, t, n) => {
            "use strict";
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
                    s = void 0 === c ? 24 : c,
                    l = e.color,
                    f = void 0 === l ? "currentColor" : l,
                    d = e.className,
                    p = e.foreground,
                    h = u(e, ["width", "height", "color", "className", "foreground"]);
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
                }({}, (0, i.Z)(h)), {
                    className: d,
                    width: n,
                    height: s,
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }), (0, r.jsx)("path", {
                        className: p,
                        fill: f,
                        d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"
                    })]
                }))
            }
        },
        155217: (e, t, n) => {
            "use strict";
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
                    n = void 0 === t ? 23 : t,
                    c = e.height,
                    s = void 0 === c ? 18 : c,
                    l = e.color,
                    f = void 0 === l ? "currentColor" : l,
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
                    height: s,
                    viewBox: "0 0 23 18",
                    fill: "none",
                    children: (0, r.jsx)("path", {
                        d: "M22.8735 7.606L19.7485 0.606C19.585 0.238 19.2079 0 18.7912 0H4.2079C3.79123 0 3.41415 0.238 3.25061 0.606L0.125607 7.606C-0.0129344 7.914 0.0203989 8.269 0.213107 8.55C0.405815 8.832 0.732899 9 1.0829 9H2.12457V17C2.12457 17.552 2.59019 18 3.16623 18H13.5829V11H17.7496V18H19.8329C20.4089 18 20.8746 17.552 20.8746 17V9H21.9162C22.2662 9 22.5933 8.832 22.786 8.551C22.9787 8.269 23.0121 7.915 22.8735 7.606ZM10.4579 15H5.24956V11H10.4579V15ZM20.336 7H17.4933L16.0058 2H18.1048L20.336 7ZM7.67248 7L9.15998 2H10.4579V7H7.67248ZM12.5412 2H13.8391L15.3266 7H12.5412V2ZM4.89436 2H6.99331L5.50581 7H2.66207L4.89436 2Z",
                        fill: f
                    })
                }))
            }
        }
    }
]);