(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [89030], {
        652411: (e, t, n) => {
            "use strict";
            n.d(t, {
                O_: () => R,
                qA: () => f,
                Ji: () => D,
                uR: () => I
            });
            var r = n(667294),
                i = n(468811),
                o = n(294184),
                a = n.n(o);

            function c(e, t) {
                var n = e.x,
                    r = e.y;
                return n > t.x && n < t.x + t.width && r > t.y && r < t.y + t.height
            }

            function u(e, t) {
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
                            x: n + u(this.dragCoefficient.x, this.velocity.x),
                            y: r + u(this.dragCoefficient.y, this.velocity.y)
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
                        var c = this.position.previewUpdate(n);
                        return c.x += r.x * n, c.y += r.y * n, c
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
                        var c = e.call(this, t) || this;
                        c.min = n, c.max = r, c.duration = i;
                        var u = c.value / (c.max - c.min) * c.duration,
                            s = isNaN(u) ? 0 : u;
                        return c.timePassed = s < 0 ? c.duration - s : s, c.directionMultiplier = o, c.easingFunction = a, c
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

            function O(e) {
                var t = Math.floor(x(0, e.length - 1));
                return [e[t], t]
            }

            function C(e, t) {
                return O([e, t])[0]
            }

            function E(e) {
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
                            return new w(x(e.minValue, e.maxValue), x(e.minStart, e.maxStart), x(e.minFinal, e.maxFinal), x(e.minDuration, e.maxDuration), C(e.minDirection, e.maxDirection), O(e.easingFunctions)[0])
                    }
                }(h(h({}, e), {
                    valueType: "number"
                }))
            }

            function P(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            var t = E(e.value);
                            return new y(new g(t.x), new g(t.y));
                        case "static-random":
                            var n = E(e.minValue),
                                r = E(e.maxValue);
                            return new y(new g(x(n.x, r.x)), new g(x(n.y, r.y)));
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
                            var c = E(e.start),
                                u = E(e.final),
                                s = E(e.duration),
                                l = E(e.direction);
                            return new y(new w(t.x, c.x, u.x, s.x, l.x, e.easingFunction), new w(t.y, c.y, u.y, s.x, l.y, e.easingFunction));
                        case "oscillating-random":
                            n = E(e.minValue), r = E(e.maxValue);
                            var f = E(e.minStart),
                                d = E(e.maxStart),
                                p = E(e.minFinal),
                                h = E(e.maxFinal),
                                v = E(e.minDuration),
                                m = E(e.maxDuration),
                                A = E(e.minDirection),
                                S = E(e.maxDirection);
                            return new y(new w(x(n.x, r.x), x(f.x, d.x), x(p.x, h.x), x(v.x, m.x), C(A.x, S.x), O(e.easingFunctions)[0]), new w(x(n.y, r.y), x(f.y, d.y), x(p.y, h.y), x(v.y, m.y), C(A.y, S.y), O(e.easingFunctions)[0]))
                    }
                }(h(h({}, e), {
                    valueType: "Vector2"
                }))
            }

            function j(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            var t = A(e.value);
                            return new m(new g(t.x), new g(t.y), new g(t.z));
                        case "static-random":
                            var n = A(e.minValue),
                                r = A(e.maxValue);
                            return new m(new g(x(n.x, r.x)), new g(x(n.y, r.y)), new g(x(n.z, r.z)));
                        case "linear":
                            t = A(e.value);
                            var i = A(e.addValue);
                            return new m(new b(t.x, i.x), new b(t.y, i.y), new b(t.z, i.z));
                        case "linear-random":
                            n = A(e.minValue), r = A(e.maxValue);
                            var o = A(e.minAddValue),
                                a = A(e.maxAddValue);
                            return new m(new b(x(n.x, r.x), x(o.x, a.x)), new b(x(n.y, r.y), x(o.y, a.y)), new b(x(n.z, r.z), x(o.z, a.z)));
                        case "oscillating":
                            t = A(e.value);
                            var c = A(e.start),
                                u = A(e.final),
                                s = A(e.duration),
                                l = A(e.direction);
                            return new m(new w(t.x, c.x, u.x, s.x, l.x, e.easingFunction), new w(t.y, c.y, u.y, s.z, l.y, e.easingFunction), new w(t.z, c.z, u.z, s.z, l.z, e.easingFunction));
                        case "oscillating-random":
                            n = A(e.minValue), r = A(e.maxValue);
                            var f = A(e.minStart),
                                d = A(e.maxStart),
                                p = A(e.minFinal),
                                h = A(e.maxFinal),
                                v = A(e.minDuration),
                                y = A(e.maxDuration),
                                E = A(e.minDirection),
                                S = A(e.maxDirection);
                            return new m(new w(x(n.x, r.x), x(f.x, d.x), x(p.x, h.x), x(v.x, y.x), C(E.x, S.x), O(e.easingFunctions)[0]), new w(x(n.y, r.y), x(f.y, d.y), x(p.y, h.y), x(v.y, y.y), C(E.y, S.y), O(e.easingFunctions)[0]), new w(x(n.z, r.z), x(f.z, d.z), x(p.z, h.z), x(v.z, y.z), C(E.z, S.z), O(e.easingFunctions)[0]))
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
                    c = function(e, t) {
                        if (null != e) {
                            var n = t.sprites.findIndex((function(t) {
                                return n = t, "string" == typeof(r = e) ? n.src === r && n.colorize : n.src === r.src && n.colorize === r.colorize;
                                var n, r
                            }));
                            if (-1 !== n) return [e, n]
                        }
                        return O(t.sprites)
                    }(r, n),
                    u = c[0],
                    f = c[1],
                    d = function(e, t, n) {
                        if (! function(e) {
                                return "string" == typeof e || e.colorize
                            }(e)) return 0;
                        var r = null != t ? n.colors.findIndex((function(e) {
                            return e === t
                        })) : -1;
                        return -1 !== r ? r : Math.floor(x(0, n.colors.length - 1))
                    }(null != r ? r : u, i, n);
                return new s({
                    id: e,
                    position: P(o.position),
                    velocity: P(o.velocity),
                    rotation: j(o.rotation),
                    dragCoefficient: P(o.dragCoefficient),
                    size: a,
                    opacity: S(o.opacity),
                    spriteX: d * n.spriteWidth + 2 * d,
                    spriteY: f * n.spriteHeight + 2 * f,
                    spriteWidth: n.spriteWidth,
                    spriteHeight: n.spriteHeight
                })
            }
            var R = r.forwardRef((function(e, t) {
                var o = e.className,
                    a = e.environment,
                    u = e.onClick,
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
                var O = r.useCallback((function(e, t) {
                        m.current.set(e.id, {
                            confetti: e,
                            spriteCanvas: t
                        }), null == g.current && x()
                    }), [x]),
                    C = r.useCallback((function(e, t, n, r, o) {
                        var a, c = _(null !== (a = e.id) && void 0 !== a ? a : (0, i.v4)(), e, n, r, o);
                        return O(c, t), c
                    }), [O]),
                    E = r.useCallback((function(e) {
                        m.current.delete(e)
                    }), []),
                    A = r.useCallback((function() {
                        return m.current.clear()
                    }), []),
                    S = r.useCallback((function() {
                        return y.current
                    }), []);
                r.useImperativeHandle(t, (function() {
                    return {
                        createConfetti: C,
                        addConfetti: O,
                        deleteConfetti: E,
                        clearConfetti: A,
                        getCanvas: S
                    }
                }), [C, O, E, A, S]);
                var P = r.useCallback((function(e, t) {
                        var n, r, i = t.clickHandler,
                            o = t.mouseHandler;
                        if (null != i || null != o) {
                            var u = null === (n = y.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                            if (null != u) {
                                var s = function(e, t) {
                                    if (null == t) throw new Error("element should not be null");
                                    var n = t.getBoundingClientRect();
                                    return {
                                        x: e.clientX - n.left,
                                        y: e.clientY - n.top
                                    }
                                }(e, y.current);
                                if (c(s, {
                                        x: u.left,
                                        y: u.top,
                                        width: u.width,
                                        height: u.height
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
                                                return c(s, {
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
                    j = r.useCallback((function(e) {
                        return P(e, {
                            clickHandler: u
                        })
                    }), [P, u]),
                    R = r.useCallback((function(e) {
                        return P(e, {
                            clickHandler: s
                        })
                    }), [P, s]),
                    D = r.useCallback((function(e) {
                        return P(e, {
                            mouseHandler: l
                        })
                    }), [P, l]),
                    I = r.useCallback((function(e) {
                        return P(e, {
                            mouseHandler: f
                        })
                    }), [P, f]);
                return r.useEffect((function() {
                    var e = function(e, t, n) {
                        null != n && window.addEventListener(e, t)
                    };
                    return e("click", j, u), e("mousedown", R, s), e("mousemove", D, l), e("mouseup", I, f),
                        function() {
                            window.removeEventListener("click", j), window.removeEventListener("mousedown", R), window.removeEventListener("mousemove", D), window.removeEventListener("mouseup", D)
                        }
                }), [j, R, D, I, u, s, l, f]), r.useEffect((function() {
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
            var D = r.forwardRef((function(e, t) {
                var n, o = e.className,
                    c = e.visible,
                    u = void 0 !== c && c,
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
                                        for (var c = t.getImageData(o, a, f, d), u = function(e) {
                                                "#" === e[0] && (e = e.slice(1));
                                                var t = parseInt(e, 16);
                                                return {
                                                    r: t >> 16 & 255,
                                                    g: t >> 8 & 255,
                                                    b: 255 & t
                                                }
                                            }(r), s = 0; s < c.data.length; s += 4) c.data[s] = u.r, c.data[s + 1] = u.g, c.data[s + 2] = u.b;
                                        t.putImageData(c, o, a)
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
                                        u(r.next(e))
                                    } catch (e) {
                                        o(e)
                                    }
                                }

                                function c(e) {
                                    try {
                                        u(r.throw(e))
                                    } catch (e) {
                                        o(e)
                                    }
                                }

                                function u(e) {
                                    var t;
                                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                        e(t)
                                    }))).then(a, c)
                                }
                                u((r = r.apply(e, t || [])).next())
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
                                    next: c(0),
                                    throw: c(1),
                                    return: c(2)
                                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                                    return this
                                }), o;

                                function c(c) {
                                    return function(u) {
                                        return function(c) {
                                            if (n) throw new TypeError("Generator is already executing.");
                                            for (; o && (o = 0, c[0] && (a = 0)), a;) try {
                                                if (n = 1, r && (i = 2 & c[0] ? r.return : c[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, c[1])).done) return i;
                                                switch (r = 0, i && (c = [2 & c[0], i.value]), c[0]) {
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
                                                        a.label++, r = c[1], c = [0];
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
                                                c = [6, e], r = 0
                                            } finally {
                                                n = i = 0
                                            }
                                            if (5 & c[0]) throw c[1];
                                            return {
                                                value: c[0] ? c[1] : void 0,
                                                done: !0
                                            }
                                        }([c, u])
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
                    className: a()(o, (n = {}, n["SpriteCanvas-module_spriteCanvasHidden__ndzQV"] = !u, n))
                })
            }));

            function I(e, t) {
                var n, i = r.useState(null !== (n = null == t ? void 0 : t.isReady) && void 0 !== n && n),
                    o = i[0],
                    a = i[1];
                r.useEffect((function() {
                    var e = null == t ? void 0 : t.addReadyListener(a);
                    return function() {
                        null != e && (null == t || t.removeReadyListener(e))
                    }
                }), [t]);
                var c = r.useCallback((function(n, r) {
                        var i = void 0 === r ? {} : r,
                            o = i.sprite,
                            a = i.color,
                            c = null == t ? void 0 : t.getCreateData(),
                            u = null == t ? void 0 : t.getCanvas();
                        if (null != u && null != c && 0 !== c.sprites.length) return null == e ? void 0 : e.createConfetti(n, u, c, o, a)
                    }), [e, t]),
                    u = r.useCallback((function(e, t, n) {
                        for (var r = [], i = 0; i < t; i++) {
                            var o = c(e, n);
                            o && r.push(o)
                        }
                        return r
                    }), [c]),
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
                        createConfetti: c,
                        createMultipleConfetti: u,
                        addConfetti: s,
                        clearConfetti: f,
                        deleteConfetti: l,
                        isReady: o && null != t && null != e
                    }
                }), [s, f, e, c, u, l, o, t])
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
        489030: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => Ae
            });
            var r = n(785893),
                i = n(667294),
                o = n(202351),
                a = n(882723),
                c = n(153686),
                u = n(19585),
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
                            c = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            c = !0;
                            i = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (c) throw i
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
                g = n(118024),
                b = n(455706),
                w = n(708783),
                x = n(473903),
                O = n(652591),
                C = n(116094),
                E = n(938737),
                A = n(294184),
                S = n.n(A),
                P = n(498964),
                j = n(940594),
                _ = n(584228),
                R = n(384411),
                D = n(491260),
                I = n(89836),
                M = n(310126),
                Z = n(841379),
                N = n(995141),
                T = n(473708);

            function F(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var H = M.ZP.getEnableHardwareAcceleration() ? a.AnimatedAvatar : a.Avatar;
            const z = function(e) {
                var t = e.user,
                    n = e.pendingAvatarDecoration,
                    i = e.status,
                    o = e.avatarSize,
                    c = void 0 === o ? a.AvatarSizes.SIZE_120 : o,
                    u = e["aria-hidden"],
                    s = void 0 !== u && u,
                    l = (0, I.w)({
                        user: t,
                        size: (0,
                            a.getAvatarSize)(c),
                        showPending: !0
                    }),
                    f = l.avatarSrc,
                    d = l.isAvatarAnimating,
                    p = l.eventHandlers,
                    h = (0, Z.Z)({
                        user: t,
                        pendingAvatarDecoration: n,
                        size: (0, N.y9)(c),
                        canAnimate: d
                    });
                return (0, r.jsx)(H, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            F(e, t, n[t])
                        }))
                    }
                    return e
                }({
                    avatarDecoration: h,
                    src: f,
                    size: c,
                    status: i,
                    "aria-label": s ? void 0 : T.Z.Messages.USER_SETTINGS_AVATAR,
                    "aria-hidden": s
                }, p))
            };
            var k = n(675960),
                V = n.n(k),
                U = [{
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
                L = function(e) {
                    var t = e.purchase,
                        n = (0, o.e7)([R.default], (function() {
                            return R.default.locale
                        })),
                        i = (0, l.qS)(t);
                    return (0, r.jsxs)("div", {
                        className: V().purchaseInfo,
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
                            children: i ? T.Z.Messages.CHANGE_DECORATION_MODAL_STARTER_DESC : T.Z.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
                                date: t.purchasedAt.toLocaleDateString(n, {
                                    month: "long",
                                    year: "numeric"
                                })
                            })
                        })]
                    })
                },
                B = function(e) {
                    var t = e.children,
                        n = e.category,
                        i = (0, _.Z)(n).backgroundColors,
                        o = null != n ? (0, l.uV)(n.banner, {
                            size: j.yV
                        }) : null;
                    return (0, r.jsx)("div", {
                        className: V().shopPreviewBanner,
                        style: null != o ? {
                            backgroundImage: "url(".concat(o, ")")
                        } : {
                            background: "linear-gradient(".concat(i[0], ", ").concat(i[1], ")")
                        },
                        children: t
                    })
                };
            const G = function(e) {
                var t = e.user,
                    n = e.pendingAvatarDecoration,
                    i = e.className,
                    c = (0, o.e7)([D.Z], (function() {
                        return D.Z.getStatus(t.id)
                    })),
                    u = y(null == n ? void 0 : n.skuId),
                    s = u.category,
                    f = u.product,
                    d = u.purchase,
                    p = C.ZP.canUseCollectibles(t),
                    h = (0, l.qS)(d),
                    v = (0,
                        l.mv)(s),
                    m = !p && h;
                return null == f || null != d && !m ? (0, r.jsxs)("div", {
                    className: S()(V().modalPreview, i),
                    children: [(0, r.jsxs)("div", {
                        className: V().previewSections,
                        children: [(0, r.jsx)("div", {
                            className: V().decorationPreview,
                            children: (0, r.jsx)(z, {
                                user: t,
                                pendingAvatarDecoration: n
                            })
                        }), (0, r.jsx)("div", {
                            className: V().smallDecorationPreviewsContainer,
                            children: U.map((function(e) {
                                var i = e.avatarSize,
                                    o = e.showStatus;
                                return (0, r.jsx)("div", {
                                    className: V().smallDecorationPreview,
                                    children: (0, r.jsx)(z, {
                                        user: t,
                                        avatarSize: i,
                                        pendingAvatarDecoration: n,
                                        status: o ? c : void 0,
                                        "aria-hidden": !0
                                    })
                                }, "".concat(i).concat(o))
                            }))
                        })]
                    }), null != d && (0, r.jsx)(L, {
                        purchase: d
                    })]
                }) : (0, r.jsxs)("div", {
                    className: S()(V().modalPreview, V().shopPreviewContainer, i),
                    children: [(0, r.jsx)(B, {
                        category: s,
                        children: (0, r.jsx)(z, {
                            user: t,
                            pendingAvatarDecoration: n
                        })
                    }), (0, r.jsxs)("div", {
                        className: V().shopPreviewTextContainer,
                        children: [(0, r.jsx)(a.Text, {
                            variant: "text-sm/semibold",
                            children: f.name
                        }), (0, r.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            children: m ? T.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_CHURNED : (0, P.EQ)([v, p]).with([!0, !0], (function() {
                                return T.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_PREMIUM
                            })).with([!0, !1], (function() {
                                return T.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER
                            })).with([!1, !0], (function() {
                                return T.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_PURCHASE_PREMIUM
                            })).with([!1, !1], (function() {
                                return T.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_PURCHASE
                            })).exhaustive()
                        })]
                    })]
                })
            };
            var W, q = n(517586),
                Y = n(662478),
                X = n(406493),
                K = n(778613),
                Q = n(97990),
                $ = n(969292),
                J = n(616276),
                ee = n(531441);

            function te(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function ne(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            a = !0,
                            c = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            c = !0;
                            i = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (c) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || ie(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function re(e) {
                return function(e) {
                    if (Array.isArray(e)) return te(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || ie(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ie(e, t) {
                if (e) {
                    if ("string" == typeof e) return te(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? te(e, t) : void 0
                }
            }! function(e) {
                e.PURCHASE = "purchase";
                e.PREMIUM_PURCHASE = "premium_purchase";
                e.PREVIEW = "preview";
                e.PREMIUM_PREVIEW = "premium_preview"
            }(W || (W = {}));
            var oe = {
                    id: "None"
                },
                ae = {
                    id: "Shop"
                };
            const ce = function() {
                var e = (0, f.ZP)([x.default], (function() {
                        return x.default.getCurrentUser()
                    })),
                    t = C.ZP.canUseCollectibles(e),
                    n = (0, f.ZP)([p.Z], (function() {
                        return p.Z.purchases
                    })),
                    r = ne((0, f.Wu)([d.Z], (function() {
                        return [d.Z.categories, d.Z.categorySkuIdsByProductSkuId]
                    })), 2),
                    o = r[0],
                    a = r[1];
                return (0, i.useMemo)((function() {
                    var e = (0, l.IM)(o).reduce((function(e, r) {
                        var i = n.get(r.skuId),
                            c = (0, l.qS)(i);
                        if (c && 0 === e.premium_purchase.length) {
                            e.premium_purchase = e.premium_preview;
                            e.premium_preview = []
                        }
                        if (c) {
                            e.premium_purchase.push(r);
                            return e
                        }
                        if (null != i) {
                            e.purchase.push(r);
                            return e
                        }
                        var u = o.get(a[r.skuId]);
                        if (!t && (0, l.mv)(u)) {
                            (e.premium_purchase.length > 0 ? e.premium_purchase : e.premium_preview).push(r);
                            return e
                        }
                        e.preview.push(r);
                        return e
                    }), {
                        purchase: [],
                        premium_purchase: [],
                        preview: [],
                        premium_preview: []
                    });
                    return [{
                        section: W.PURCHASE,
                        items: t || 0 !== e.purchase.length ? [oe, ae].concat(re(e.purchase)) : [],
                        height: 12,
                        header: T.Z.Messages.CHANGE_DECORATION_MODAL_PURCHASE_HEADER
                    }, {
                        section: e.premium_purchase.length > 0 ? W.PREMIUM_PURCHASE : W.PREMIUM_PREVIEW,
                        items: e.premium_purchase.length > 0 ? e.premium_purchase : e.premium_preview,
                        height: 12,
                        header: T.Z.Messages.CHANGE_DECORATION_MODAL_PREMIUM_STARTER_HEADER
                    }, {
                        section: W.PREVIEW,
                        items: e.preview,
                        height: 56,
                        header: T.Z.Messages.CHANGE_DECORATION_MODAL_SHOP_PREVIEW_HEADER
                    }].filter((function(e) {
                        return e.items.length > 0
                    }))
                }), [o, n, a, t])
            };
            var ue = n(389091),
                se = n.n(ue);

            function le(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function fe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        le(e, t, n[t])
                    }))
                }
                return e
            }

            function de(e, t) {
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

            function pe(e, t) {
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
            var he = function() {
                    return 80
                },
                ve = function(e) {
                    var t = e.children,
                        n = e.className,
                        i = e.onSelect,
                        o = e.isSelected,
                        c = void 0 !== o && o,
                        u = pe(e, ["children", "className", "onSelect", "isSelected"]);
                    return (0,
                        r.jsx)(a.Clickable, de(fe({
                        className: S()(se().decorationGridItem, c ? se().selected : void 0, n)
                    }, u), {
                        onClick: i,
                        children: t
                    }))
                },
                ye = function(e) {
                    var t = e.user,
                        n = e.avatarDecoration,
                        o = e.innerRef,
                        a = e.section,
                        c = pe(e, ["user", "avatarDecoration", "innerRef", "section"]),
                        u = (0, f.ZP)([d.Z], (function() {
                            var e = d.Z.getCategoryForProduct(n.skuId);
                            return (0, l.mv)(e)
                        })),
                        s = C.ZP.canUseCollectibles(t),
                        p = a === W.PREMIUM_PURCHASE && !s,
                        h = i.useRef(null),
                        v = (0, Y.Z)(null != o ? o : h),
                        y = (0, Z.Z)({
                            user: t,
                            pendingAvatarDecoration: n,
                            size: 80,
                            canAnimate: v
                        });
                    return (0, r.jsxs)(ve, de(fe({
                        className: p ? se().decorationGridItemChurned : void 0,
                        innerRef: null != o ? o : h
                    }, c), {
                        children: [(0, r.jsx)("img", {
                            className: se().presetDecorationImg,
                            src: y,
                            alt: n.label
                        }), (a === W.PREVIEW || a === W.PREMIUM_PURCHASE && !s) && (0, r.jsx)(ee.G2, {
                            icon: u ? X.Z : Q.Z,
                            color: q.Z.BACKGROUND_ACCENT,
                            className: se().itemBadge
                        })]
                    }))
                };
            const me = function(e) {
                var t = e.user,
                    n = e.pendingAvatarDecoration,
                    i = e.selectedAvatarDecorationRef,
                    o = e.onSelect,
                    c = e.onOpenShop,
                    u = ce();
                return (0, r.jsx)(a.MasonryList, {
                    fade: !0,
                    className: se().list,
                    columns: 3,
                    sections: u.map((function(e) {
                        return e.items.length
                    })),
                    sectionGutter: 16,
                    itemGutter: 12,
                    paddingHorizontal: 12,
                    paddingVertical: 0,
                    removeEdgeItemGutters: !0,
                    renderItem: function(e, s, l, f) {
                        var d = u[e],
                            p = d.section,
                            h = d.items;
                        return (0, P.EQ)(h[s]).with(oe, (function() {
                            return (0, r.jsxs)(ve, {
                                style: fe({}, l),
                                isSelected: null === n,
                                onSelect: function() {
                                    return o(null)
                                },
                                children: [(0, r.jsx)(K.Z, {
                                    className: se().notAllowedIcon
                                }), (0, r.jsx)(a.Text, {
                                    variant: "text-xs/normal",
                                    color: "header-primary",
                                    children: T.Z.Messages.NONE
                                })]
                            }, f)
                        })).with(ae, (function() {
                            return (0, r.jsxs)(ve, {
                                style: l,
                                onSelect: c,
                                children: [(0, r.jsx)($.Z, {
                                    className: se().shopIcon
                                }), (0, r.jsx)(J.Z, {
                                    foreground: se().shopSparkleBig
                                }), (0, r.jsx)(J.Z, {
                                    foreground: se().shopSparkleSmall
                                }), (0, r.jsx)(a.Text, {
                                    variant: "text-xs/normal",
                                    color: "header-primary",
                                    children: T.Z.Messages.COLLECTIBLES_SHOP
                                })]
                            }, f)
                        })).otherwise((function(e) {
                            var a = (null == n ? void 0 : n.id) === e.id;
                            return (0, r.jsx)(ye, {
                                style: fe({}, l),
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
                        var t = u[e],
                            n = t.section,
                            i = t.header;
                        return (0, r.jsx)("div", {
                            className: se().headings,
                            children: (0, r.jsx)(a.HeadingLevel, {
                                forceLevel: 5,
                                component: (0, r.jsx)(a.Heading, {
                                    variant: "eyebrow",
                                    color: "header-secondary",
                                    children: i
                                }),
                                children: n === W.PREVIEW && (0, r.jsx)(a.Heading, {
                                    variant: "text-sm/normal",
                                    children: T.Z.Messages.CHANGE_DECORATION_MODAL_SHOP_PREVIEW_DESC
                                })
                            })
                        })
                    },
                    getSectionHeight: function(e) {
                        return u[e].height
                    },
                    getItemKey: function(e, t) {
                        return u[e].items[t].id
                    },
                    getItemHeight: he
                })
            };
            var ge = n(2590),
                be = n(203600),
                we = n(240647),
                xe = n.n(we);

            function Oe(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Ce(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            a = !0,
                            c = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            c = !0;
                            i = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (c) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Oe(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Oe(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ee(e) {
                var t = e.user,
                    n = e.categories,
                    o = e.analyticsLocations,
                    u = e.onClose,
                    f = e.initialSelectedDecoration,
                    d = e.isTryItOutFlow,
                    p = (0, w.Z)({
                        analyticsLocations: o,
                        isTryItOut: d
                    }),
                    h = p.pendingAvatarDecoration,
                    v = p.setPendingAvatarDecoration,
                    m = Ce(i.useState((function() {
                        return null != f ? f : void 0 !== h ? h : null == (null == t ? void 0 : t.avatarDecoration) || 0 === n.size ? null : null !== (e = (0,
                            l.IM)(n).find((function(e) {
                            return (0, E.sr)(e, t.avatarDecoration)
                        }))) && void 0 !== e ? e : null;
                        var e
                    })), 2),
                    x = m[0],
                    O = m[1],
                    A = y(null == x ? void 0 : x.skuId),
                    S = A.category,
                    P = A.purchase,
                    j = C.ZP.canUseCollectibles(t),
                    _ = i.useRef(null),
                    R = (0, g.Z)(o),
                    D = (0, E.sr)(x, void 0 === h ? null == t ? void 0 : t.avatarDecoration : h),
                    I = function() {
                        v(x);
                        u()
                    },
                    M = function() {
                        u();
                        (0, s.mK)({
                            analyticsLocations: o,
                            analyticsSource: c.Z.EDIT_AVATAR_DECORATION_MODAL
                        })
                    };
                return (0, r.jsxs)("div", {
                    className: xe().modalBody,
                    children: [(0, r.jsxs)(a.ModalHeader, {
                        separator: !1,
                        className: xe().modalHeader,
                        children: [(0, r.jsx)("div", {
                            className: xe().modalHeadings,
                            children: (0, r.jsx)(a.HeadingLevel, {
                                component: (0, r.jsx)(a.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: T.Z.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
                                }),
                                children: !j && (0, r.jsx)(a.Heading, {
                                    variant: "text-sm/normal",
                                    children: T.Z.Messages.CHANGE_DECORATION_MODAL_SHOP_PREVIEW_HEADER_STARTER_DESC
                                })
                            })
                        }), (0, r.jsx)(a.ModalCloseButton, {
                            className: xe().modalCloseButton,
                            onClick: u
                        })]
                    }), (0, r.jsxs)(a.ModalContent, {
                        className: xe().modalContent,
                        scrollbarType: "none",
                        children: [(0, r.jsx)(me, {
                            user: t,
                            pendingAvatarDecoration: x,
                            selectedAvatarDecorationRef: _,
                            onSelect: function(e) {
                                O(e);
                                null != e && R(e)
                            },
                            onOpenShop: M
                        }), (0, r.jsx)(G, {
                            className: xe().modalPreview,
                            user: t,
                            pendingAvatarDecoration: x
                        })]
                    }), (0, r.jsxs)(a.ModalFooter, {
                        className: xe().modalFooter,
                        children: [null != P && (!(0, l.qS)(P) || j) || null === x ? (0, r.jsx)(a.Button, {
                            onClick: I,
                            disabled: D,
                            children: T.Z.Messages.AVATAR_DECORATION_MODAL_APPLY
                        }) : j || !(0, l.mv)(S) ? (0, r.jsx)(a.Button, {
                            className: xe().modalFooterShopButton,
                            onClick: M,
                            children: T.Z.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
                        }) : (0, r.jsx)(b.Z, {
                            subscriptionTier: be.Si.TIER_2,
                            buttonText: C.ZP.isPremium(t) ? T.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : T.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
                        }), (0, r.jsx)(a.Button, {
                            look: a.Button.Looks.LINK,
                            color: a.Button.Colors.PRIMARY,
                            onClick: u,
                            children: T.Z.Messages.CANCEL
                        })]
                    })]
                })
            }

            function Ae(e) {
                var t = e.transitionState,
                    n = e.analyticsLocations,
                    s = e.onClose,
                    l = e.initialSelectedDecoration,
                    f = e.isTryItOutFlow,
                    d = (0, o.e7)([x.default], (function() {
                        return x.default.getCurrentUser()
                    })),
                    p = (0, u.Z)(n, c.Z.EDIT_AVATAR_DECORATION_MODAL),
                    h = p.AnalyticsLocationProvider,
                    v = p.analyticsLocations,
                    y = (0, m.ZP)(),
                    g = y.categories,
                    b = y.purchases,
                    w = y.isFetchingCategories,
                    C = y.isFetchingPurchases,
                    E = w || C && 0 === b.size;
                i.useEffect((function() {
                    O.default.track(ge.rMx.OPEN_MODAL, {
                        type: "Edit Avatar Decoration Modal",
                        location_stack: v
                    })
                }), [v]);
                return null == d ? null : (0, r.jsx)(h, {
                    children: (0, r.jsx)(a.ModalRoot, {
                        transitionState: t,
                        className: xe().modal,
                        size: E ? a.ModalSize.DYNAMIC : a.ModalSize.MEDIUM,
                        children: E ? (0, r.jsx)(a.Spinner, {
                            className: xe().spinner,
                            type: a.Spinner.Type.SPINNING_CIRCLE
                        }) : (0, r.jsx)(Ee, {
                            user: d,
                            categories: g,
                            analyticsLocations: v,
                            initialSelectedDecoration: l,
                            onClose: s,
                            isTryItOutFlow: f
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
                c = n(525628),
                u = n(767539);

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
                            c = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            c = !0;
                            i = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (c) throw i
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
                var e, t = (0, c.OE)({
                        location: "useFetchCollectiblesCategoriesAndPurchases"
                    }).canUseCollectiblesIAP,
                    n = function() {
                        var e, t = (0, c.OE)({
                                location: "useMaybeFetchCollectiblesCategories"
                            }).canUseCollectiblesIAP,
                            n = l((0, i.Wu)([a.Z], (function() {
                                return [a.Z.isFetching, a.Z.error, null !== (e = a.Z.lastFetched) && void 0 !== e ? e : 0, a.Z.categories]
                            })), 4),
                            u = n[0],
                            s = n[1],
                            f = n[2],
                            d = n[3];
                        (0, r.useEffect)((function() {
                            !t || u || Boolean(s) || Date.now() - f < 6e5 || (0, o.F$)()
                        }), [t, u, f, s]);
                        return {
                            canUseCollectiblesIAP: t,
                            isFetching: u,
                            categories: d,
                            error: s
                        }
                    }(),
                    s = n.isFetching,
                    f = n.categories,
                    d = n.error,
                    p = function() {
                        var e = (0, c.OE)({
                                location: "useFetchPurchases"
                            }).canUseCollectiblesIAP,
                            t = l((0, i.Wu)([u.Z], (function() {
                                return [u.Z.isFetching, u.Z.isClaiming, u.Z.fetchError, u.Z.claimError, u.Z.purchases]
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
                    isFetchingCategories: s,
                    isFetchingPurchases: m,
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
                yV: () => c,
                IC: () => u,
                Ch: () => s
            });
            var r = n(795308),
                i = n(265022),
                o = n(721741),
                a = n(362660),
                c = 1060,
                u = function(e) {
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
                Z: () => c
            });
            var r = n(389349),
                i = n(795308),
                o = n(4958),
                a = o.CA.filter((function(e, t) {
                    return 1 !== t && 7 !== t
                }));
            const c = function(e) {
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
                            backgroundColors: ["#146144", "#021A0E"], buttonColors: ["#028737", "#00694A"],
                                confettiSprites: [n(406112), n(200309)], confettiColors: ["#EFA7F7", "#B646C1", "#56B3B3", "#1A8199", "#7160AF", "#AEC7FF"]
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
                            backgroundColors: ["#732565", "#111D40"], buttonColors: [i.Z.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.css, i.Z.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.css], confettiSprites: a, confettiColors: ["#F53273", "#9595FF", "#A7FA4E", "#331EAF"]
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
                CA: () => c,
                Ko: () => u,
                We: () => s,
                rq: () => l
            });
            var r = n(652411),
                i = n(5084),
                o = n.n(i)(),
                a = ["#FF73FA", "#FFC0FF", "#FFD836", "#FF9A15", "#A5F7DE", "#51BC9D", "#AEC7FF", "#3E70DD"],
                c = [n(173654), o, n(950175), n(248978), n(622507), n(131687), n(12668), {
                    src: n(740097),
                    colorize: !1
                }],
                u = 28,
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
                        maxValue: u
                    }
                },
                l = new r.qA
        },
        778613: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => u
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

            function u(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    u = e.height,
                    s = void 0 === u ? 24 : u,
                    l = e.color,
                    f = void 0 === l ? "currentColor" : l,
                    d = e.className,
                    p = e.foreground,
                    h = c(e, ["width", "height", "color", "className", "foreground"]);
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
        969292: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p
            });
            var r = n(785893),
                i = (n(667294), n(450520)),
                o = n(795308),
                a = n(633878);

            function c(e, t, n) {
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

            function s(e, t) {
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

            function l(e, t, n) {
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
            const p = (0, i.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 23 : t,
                    i = e.height,
                    o = void 0 === i ? 18 : i,
                    c = e.color,
                    u = void 0 === c ? "currentColor" : c,
                    s = d(e, ["width", "height", "color"]);
                return (0, r.jsx)("svg", f(function(e) {
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
                }({}, (0, a.Z)(s)), {
                    width: n,
                    height: o,
                    viewBox: "0 0 23 18",
                    fill: "none",
                    children: (0, r.jsx)("path", {
                        d: "M22.8735 7.606L19.7485 0.606C19.585 0.238 19.2079 0 18.7912 0H4.2079C3.79123 0 3.41415 0.238 3.25061 0.606L0.125607 7.606C-0.0129344 7.914 0.0203989 8.269 0.213107 8.55C0.405815 8.832 0.732899 9 1.0829 9H2.12457V17C2.12457 17.552 2.59019 18 3.16623 18H13.5829V11H17.7496V18H19.8329C20.4089 18 20.8746 17.552 20.8746 17V9H21.9162C22.2662 9 22.5933 8.832 22.786 8.551C22.9787 8.269 23.0121 7.915 22.8735 7.606ZM10.4579 15H5.24956V11H10.4579V15ZM20.336 7H17.4933L16.0058 2H18.1048L20.336 7ZM7.67248 7L9.15998 2H10.4579V7H7.67248ZM12.5412 2H13.8391L15.3266 7H12.5412V2ZM4.89436 2H6.99331L5.50581 7H2.66207L4.89436 2Z",
                        fill: u
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    i = e.height,
                    l = void 0 === i ? 24 : i,
                    f = e.color,
                    d = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    h = void 0 === p ? "" : p,
                    v = s(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", u(function(e) {
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
                }({}, (0, a.Z)(v)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M2.635 4.188A3 3 0 0 1 5.523 2H7a1 1 0 0 1 1 1v3.983a3.067 3.067 0 0 1 0 .051A2.966 2.966 0 0 1 4.983 10c-2 0-3.446-1.91-2.905-3.834l.557-1.978ZM10 2a1 1 0 0 0-1 1v4a3 3 0 0 0 3 3 3 3 0 0 0 3-2.966V3a1 1 0 0 0-1-1h-4Zm7 0a1 1 0 0 0-1 1v3.983a2.43 2.43 0 0 0 0 .051A2.966 2.966 0 0 0 19.017 10c2 0 3.446-1.91 2.905-3.834l-.557-1.978A3 3 0 0 0 18.477 2H17Zm4 9.423V19a3 3 0 0 1-3 3h-2.75a.25.25 0 0 1-.25-.25V16a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v5.75a.25.25 0 0 1-.25.25H6a3 3 0 0 1-3-3v-7.577c0-.187.199-.31.372-.24a4.46 4.46 0 0 0 1.662.317c1.293 0 2.458-.55 3.273-1.428a.278.278 0 0 1 .405 0A4.488 4.488 0 0 0 12 11.5c1.298 0 2.467-.55 3.289-1.428a.278.278 0 0 1 .404 0 4.454 4.454 0 0 0 3.273 1.428 4.46 4.46 0 0 0 1.662-.317c.174-.07.372.053.372.24Z",
                        clipRule: "evenodd",
                        className: h
                    })
                }))
            }))
        }
    }
]);