(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [26050, 97717, 58093, 84832, 30689], {
        652411: (e, t, n) => {
            "use strict";
            n.d(t, {
                O_: () => D,
                qA: () => f,
                Ji: () => C,
                uR: () => N
            });
            var r = n(667294),
                i = n(468811),
                o = n(294184),
                u = n.n(o);

            function a(e, t) {
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
                            u = i.y;
                        r.x += o, r.y += u;
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
            var y = function(e) {
                    this.value = e
                },
                v = function() {
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
                }(v),
                g = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return p(t, e), t.prototype.update = function() {}, t.prototype.previewUpdate = function() {
                        return this.value
                    }, t
                }(y),
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
                }(y),
                E = function(e) {
                    function t(t, n, r, i, o, u) {
                        var a = e.call(this, t) || this;
                        a.min = n, a.max = r, a.duration = i;
                        var c = a.value / (a.max - a.min) * a.duration,
                            l = isNaN(c) ? 0 : c;
                        return a.timePassed = l < 0 ? a.duration - l : l, a.directionMultiplier = o, a.easingFunction = u, a
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
                }(y);

            function O(e, t) {
                return e === t ? e : Math.random() * (t - e + 1) + e
            }

            function S(e) {
                var t = Math.floor(O(0, e.length - 1));
                return [e[t], t]
            }

            function w(e, t) {
                return S([e, t])[0]
            }

            function _(e) {
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

            function T(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            return new g(e.value);
                        case "static-random":
                            return new g(O(e.minValue, e.maxValue));
                        case "linear":
                            return new b(e.value, e.addValue);
                        case "linear-random":
                            return new b(O(e.minValue, e.maxValue), O(e.minAddValue, e.maxAddValue));
                        case "oscillating":
                            return new E(e.value, e.start, e.final, e.duration, e.direction, e.easingFunction);
                        case "oscillating-random":
                            return new E(O(e.minValue, e.maxValue), O(e.minStart, e.maxStart), O(e.minFinal, e.maxFinal), O(e.minDuration, e.maxDuration), w(e.minDirection, e.maxDirection), S(e.easingFunctions)[0])
                    }
                }(h(h({}, e), {
                    valueType: "number"
                }))
            }

            function P(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            var t = _(e.value);
                            return new v(new g(t.x), new g(t.y));
                        case "static-random":
                            var n = _(e.minValue),
                                r = _(e.maxValue);
                            return new v(new g(O(n.x, r.x)), new g(O(n.y, r.y)));
                        case "linear":
                            t = _(e.value);
                            var i = _(e.addValue);
                            return new v(new b(t.x, i.x), new b(t.y, i.y));
                        case "linear-random":
                            n = _(e.minValue), r = _(e.maxValue);
                            var o = _(e.minAddValue),
                                u = _(e.maxAddValue);
                            return new v(new b(O(n.x, r.x), O(o.x, u.x)), new b(O(n.y, r.y), O(o.x, u.x)));
                        case "oscillating":
                            t = _(e.value);
                            var a = _(e.start),
                                c = _(e.final),
                                l = _(e.duration),
                                s = _(e.direction);
                            return new v(new E(t.x, a.x, c.x, l.x, s.x, e.easingFunction), new E(t.y, a.y, c.y, l.x, s.y, e.easingFunction));
                        case "oscillating-random":
                            n = _(e.minValue), r = _(e.maxValue);
                            var f = _(e.minStart),
                                d = _(e.maxStart),
                                p = _(e.minFinal),
                                h = _(e.maxFinal),
                                y = _(e.minDuration),
                                m = _(e.maxDuration),
                                A = _(e.minDirection),
                                T = _(e.maxDirection);
                            return new v(new E(O(n.x, r.x), O(f.x, d.x), O(p.x, h.x), O(y.x, m.x), w(A.x, T.x), S(e.easingFunctions)[0]), new E(O(n.y, r.y), O(f.y, d.y), O(p.y, h.y), O(y.y, m.y), w(A.y, T.y), S(e.easingFunctions)[0]))
                    }
                }(h(h({}, e), {
                    valueType: "Vector2"
                }))
            }

            function I(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            var t = A(e.value);
                            return new m(new g(t.x), new g(t.y), new g(t.z));
                        case "static-random":
                            var n = A(e.minValue),
                                r = A(e.maxValue);
                            return new m(new g(O(n.x, r.x)), new g(O(n.y, r.y)), new g(O(n.z, r.z)));
                        case "linear":
                            t = A(e.value);
                            var i = A(e.addValue);
                            return new m(new b(t.x, i.x), new b(t.y, i.y), new b(t.z, i.z));
                        case "linear-random":
                            n = A(e.minValue), r = A(e.maxValue);
                            var o = A(e.minAddValue),
                                u = A(e.maxAddValue);
                            return new m(new b(O(n.x, r.x), O(o.x, u.x)), new b(O(n.y, r.y), O(o.y, u.y)), new b(O(n.z, r.z), O(o.z, u.z)));
                        case "oscillating":
                            t = A(e.value);
                            var a = A(e.start),
                                c = A(e.final),
                                l = A(e.duration),
                                s = A(e.direction);
                            return new m(new E(t.x, a.x, c.x, l.x, s.x, e.easingFunction), new E(t.y, a.y, c.y, l.z, s.y, e.easingFunction), new E(t.z, a.z, c.z, l.z, s.z, e.easingFunction));
                        case "oscillating-random":
                            n = A(e.minValue), r = A(e.maxValue);
                            var f = A(e.minStart),
                                d = A(e.maxStart),
                                p = A(e.minFinal),
                                h = A(e.maxFinal),
                                y = A(e.minDuration),
                                v = A(e.maxDuration),
                                _ = A(e.minDirection),
                                T = A(e.maxDirection);
                            return new m(new E(O(n.x, r.x), O(f.x, d.x), O(p.x, h.x), O(y.x, v.x), w(_.x, T.x), S(e.easingFunctions)[0]), new E(O(n.y, r.y), O(f.y, d.y), O(p.y, h.y), O(y.y, v.y), w(_.y, T.y), S(e.easingFunctions)[0]), new E(O(n.z, r.z), O(f.z, d.z), O(p.z, h.z), O(y.z, v.z), w(_.z, T.z), S(e.easingFunctions)[0]))
                    }
                }(h(h({}, e), {
                    valueType: "Vector3"
                }))
            }

            function x(e, t, n, r, i) {
                var o = function(e, t) {
                        return h(h({
                            id: t
                        }, s), e)
                    }(t, e),
                    u = P(o.size),
                    a = function(e, t) {
                        if (null != e) {
                            var n = t.sprites.findIndex((function(t) {
                                return n = t, "string" == typeof(r = e) ? n.src === r && n.colorize : n.src === r.src && n.colorize === r.colorize;
                                var n, r
                            }));
                            if (-1 !== n) return [e, n]
                        }
                        return S(t.sprites)
                    }(r, n),
                    c = a[0],
                    f = a[1],
                    d = function(e, t, n) {
                        if (! function(e) {
                                return "string" == typeof e || e.colorize
                            }(e)) return 0;
                        var r = null != t ? n.colors.findIndex((function(e) {
                            return e === t
                        })) : -1;
                        return -1 !== r ? r : Math.floor(O(0, n.colors.length - 1))
                    }(null != r ? r : c, i, n);
                return new l({
                    id: e,
                    position: P(o.position),
                    velocity: P(o.velocity),
                    rotation: I(o.rotation),
                    dragCoefficient: P(o.dragCoefficient),
                    size: u,
                    opacity: T(o.opacity),
                    spriteX: d * n.spriteWidth + 2 * d,
                    spriteY: f * n.spriteHeight + 2 * f,
                    spriteWidth: n.spriteWidth,
                    spriteHeight: n.spriteHeight
                })
            }
            var D = r.forwardRef((function(e, t) {
                var o = e.className,
                    u = e.environment,
                    c = e.onClick,
                    l = e.onMouseDown,
                    s = e.onMouseMove,
                    f = e.onMouseUp,
                    d = e.onBeforeRender,
                    p = e.onAfterRender,
                    y = function(e, t) {
                        var n = {};
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var i = 0;
                            for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
                        }
                        return n
                    }(e, ["className", "environment", "onClick", "onMouseDown", "onMouseMove", "onMouseUp", "onBeforeRender", "onAfterRender"]),
                    v = r.useRef(null),
                    m = r.useRef(new Map),
                    g = r.useRef(null),
                    b = r.useRef(0),
                    E = r.useRef(0),
                    O = r.useCallback((function() {
                        var e = v.current;
                        if (null != e) {
                            var t = e.getContext("2d");
                            if (null != t) {
                                t.clearRect(0, 0, e.width, e.height), null == d || d(t), m.current.forEach((function(n, r) {
                                    var i = n.confetti,
                                        o = n.spriteCanvas;
                                    i.update(u), i.draw(o, t), i.shouldDestroy(e, u) && m.current.delete(r)
                                })), null == p || p(t), m.current.size > 0 ? g.current = window.requestAnimationFrame(O) : (t.clearRect(0, 0, e.width, e.height), g.current = null);
                                var n = Date.now();
                                0 !== b.current && (E.current = 1e3 / (n - b.current)), b.current = n
                            }
                        }
                    }), [u, p, d]);
                r.useEffect((function() {
                    null != g.current && (window.cancelAnimationFrame(g.current), g.current = window.requestAnimationFrame(O))
                }), [O]);
                var S = r.useCallback((function(e, t) {
                        m.current.set(e.id, {
                            confetti: e,
                            spriteCanvas: t
                        }), null == g.current && O()
                    }), [O]),
                    w = r.useCallback((function(e, t, n, r, o) {
                        var u, a = x(null !== (u = e.id) && void 0 !== u ? u : (0, i.v4)(), e, n, r, o);
                        return S(a, t), a
                    }), [S]),
                    _ = r.useCallback((function(e) {
                        m.current.delete(e)
                    }), []),
                    A = r.useCallback((function() {
                        return m.current.clear()
                    }), []),
                    T = r.useCallback((function() {
                        return v.current
                    }), []);
                r.useImperativeHandle(t, (function() {
                    return {
                        createConfetti: w,
                        addConfetti: S,
                        deleteConfetti: _,
                        clearConfetti: A,
                        getCanvas: T
                    }
                }), [w, S, _, A, T]);
                var P = r.useCallback((function(e, t) {
                        var n, r, i = t.clickHandler,
                            o = t.mouseHandler;
                        if (null != i || null != o) {
                            var c = null === (n = v.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                            if (null != c) {
                                var l = function(e, t) {
                                    if (null == t) throw new Error("element should not be null");
                                    var n = t.getBoundingClientRect();
                                    return {
                                        x: e.clientX - n.left,
                                        y: e.clientY - n.top
                                    }
                                }(e, v.current);
                                if (a(l, {
                                        x: c.left,
                                        y: c.top,
                                        width: c.width,
                                        height: c.height
                                    })) {
                                    if (null != o) return o(e);
                                    if (null != i) {
                                        var s = -1e3 / E.current * 2,
                                            f = function(e, t) {
                                                for (var n = 0, r = Array.from(e.values()); n < r.length; n++) {
                                                    var i = r[n];
                                                    if (null != i && t(i)) return i
                                                }
                                                return null
                                            }(m.current, (function(e) {
                                                var t = e.confetti,
                                                    n = t.previewPositionUpdate(u, s);
                                                return a(l, {
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
                    }), [u]),
                    I = r.useCallback((function(e) {
                        return P(e, {
                            clickHandler: c
                        })
                    }), [P, c]),
                    D = r.useCallback((function(e) {
                        return P(e, {
                            clickHandler: l
                        })
                    }), [P, l]),
                    C = r.useCallback((function(e) {
                        return P(e, {
                            mouseHandler: s
                        })
                    }), [P, s]),
                    N = r.useCallback((function(e) {
                        return P(e, {
                            mouseHandler: f
                        })
                    }), [P, f]);
                return r.useEffect((function() {
                    var e = function(e, t, n) {
                        null != n && window.addEventListener(e, t)
                    };
                    return e("click", I, c), e("mousedown", D, l), e("mousemove", C, s), e("mouseup", N, f),
                        function() {
                            window.removeEventListener("click", I), window.removeEventListener("mousedown", D), window.removeEventListener("mousemove", C), window.removeEventListener("mouseup", C)
                        }
                }), [I, D, C, N, c, l, s, f]), r.useEffect((function() {
                    var e = v.current,
                        t = new ResizeObserver((function() {
                            ! function(e) {
                                if (null != e) {
                                    var t = e.getBoundingClientRect(),
                                        r = t.width,
                                        i = t.height;
                                    e.width = r * n.g.devicePixelRatio, e.height = i * n.g.devicePixelRatio
                                }
                            }(v.current)
                        }));
                    return null != e && t.observe(e),
                        function() {
                            null != e && t.unobserve(e)
                        }
                }), []), r.createElement("canvas", h({}, y, {
                    className: o,
                    ref: v
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
            var C = r.forwardRef((function(e, t) {
                var n, o = e.className,
                    a = e.visible,
                    c = void 0 !== a && a,
                    l = e.sprites,
                    s = e.colors,
                    f = e.spriteWidth,
                    d = e.spriteHeight,
                    p = r.useRef(null),
                    h = r.useRef([]),
                    y = r.useRef(!1),
                    v = r.useRef({});
                r.useImperativeHandle(t, (function() {
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
                            return v.current[t] = e, t
                        },
                        removeReadyListener: function(e) {
                            delete v.current[e]
                        },
                        isReady: y.current
                    }
                }), [s, d, f]);
                var m = r.useCallback((function() {
                        var e = p.current,
                            t = null == e ? void 0 : e.getContext("2d", {
                                willReadFrequently: !0
                            });
                        null != t && null != e && (t.clearRect(0, 0, e.width, e.height),
                            h.current.forEach((function(e, n) {
                                var r = function(r, i) {
                                    var o = f * i + 2 * i,
                                        u = d * n + 2 * n;
                                    if (t.drawImage(e.image, o, u, f, d), null != r) {
                                        for (var a = t.getImageData(o, u, f, d), c = function(e) {
                                                "#" === e[0] && (e = e.slice(1));
                                                var t = parseInt(e, 16);
                                                return {
                                                    r: t >> 16 & 255,
                                                    g: t >> 8 & 255,
                                                    b: 255 & t
                                                }
                                            }(r), l = 0; l < a.data.length; l += 4) a.data[l] = c.r, a.data[l + 1] = c.g, a.data[l + 2] = c.b;
                                        t.putImageData(a, o, u)
                                    }
                                };
                                e.colorize ? s.forEach((function(e, t) {
                                    return r(e, t)
                                })) : r(null, 0)
                            })))
                    }), [s, d, f]),
                    g = r.useCallback((function() {
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
                        for (var t in v.current) v.current[t](e)
                    }), []),
                    E = r.useCallback((function() {
                        return function(e, t, n, r) {
                            return new(n || (n = Promise))((function(i, o) {
                                function u(e) {
                                    try {
                                        c(r.next(e))
                                    } catch (e) {
                                        o(e)
                                    }
                                }

                                function a(e) {
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
                                    }))).then(u, a)
                                }
                                c((r = r.apply(e, t || [])).next())
                            }))
                        }(void 0, void 0, void 0, (function() {
                            return function(e, t) {
                                var n, r, i, o, u = {
                                    label: 0,
                                    sent: function() {
                                        if (1 & i[0]) throw i[1];
                                        return i[1]
                                    },
                                    trys: [],
                                    ops: []
                                };
                                return o = {
                                    next: a(0),
                                    throw: a(1),
                                    return: a(2)
                                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                                    return this
                                }), o;

                                function a(a) {
                                    return function(c) {
                                        return function(a) {
                                            if (n) throw new TypeError("Generator is already executing.");
                                            for (; o && (o = 0, a[0] && (u = 0)), u;) try {
                                                if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                                switch (r = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                                                    case 0:
                                                    case 1:
                                                        i = a;
                                                        break;
                                                    case 4:
                                                        return u.label++, {
                                                            value: a[1],
                                                            done: !1
                                                        };
                                                    case 5:
                                                        u.label++, r = a[1], a = [0];
                                                        continue;
                                                    case 7:
                                                        a = u.ops.pop(), u.trys.pop();
                                                        continue;
                                                    default:
                                                        if (!(i = u.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                                            u = 0;
                                                            continue
                                                        }
                                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                                            u.label = a[1];
                                                            break
                                                        }
                                                        if (6 === a[0] && u.label < i[1]) {
                                                            u.label = i[1], i = a;
                                                            break
                                                        }
                                                        if (i && u.label < i[2]) {
                                                            u.label = i[2], u.ops.push(a);
                                                            break
                                                        }
                                                        i[2] && u.ops.pop(), u.trys.pop();
                                                        continue
                                                }
                                                a = t.call(e, u)
                                            } catch (e) {
                                                a = [6, e], r = 0
                                            } finally {
                                                n = i = 0
                                            }
                                            if (5 & a[0]) throw a[1];
                                            return {
                                                value: a[0] ? a[1] : void 0,
                                                done: !0
                                            }
                                        }([a, c])
                                    }
                                }
                            }(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, g()];
                                    case 1:
                                        return e.sent(), m(), y.current = !0, b(!0), [2]
                                }
                            }))
                        }))
                    }), [b, g, m]);
                return r.useEffect((function() {
                    E()
                }), [E]), r.useEffect((function() {
                    return function() {
                        return b(!1)
                    }
                }), [b]), r.useEffect((function() {
                    null != p.current && (p.current.width = (f + 2) * Math.max(s.length, 1), p.current.height = (d + 2) * l.length)
                }), [s.length, d, f, l.length]), r.createElement("canvas", {
                    ref: p,
                    className: u()(o, (n = {}, n["SpriteCanvas-module_spriteCanvasHidden__ndzQV"] = !c, n))
                })
            }));

            function N(e, t) {
                var n, i = r.useState(null !== (n = null == t ? void 0 : t.isReady) && void 0 !== n && n),
                    o = i[0],
                    u = i[1];
                r.useEffect((function() {
                    var e = null == t ? void 0 : t.addReadyListener(u);
                    return function() {
                        null != e && (null == t || t.removeReadyListener(e))
                    }
                }), [t]);
                var a = r.useCallback((function(n, r) {
                        var i = void 0 === r ? {} : r,
                            o = i.sprite,
                            u = i.color,
                            a = null == t ? void 0 : t.getCreateData(),
                            c = null == t ? void 0 : t.getCanvas();
                        if (null != c && null != a && 0 !== a.sprites.length) return null == e ? void 0 : e.createConfetti(n, c, a, o, u)
                    }), [e, t]),
                    c = r.useCallback((function(e, t, n) {
                        for (var r = [], i = 0; i < t; i++) {
                            var o = a(e, n);
                            o && r.push(o)
                        }
                        return r
                    }), [a]),
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
                        createConfetti: a,
                        createMultipleConfetti: c,
                        addConfetti: l,
                        clearConfetti: f,
                        deleteConfetti: s,
                        isReady: o && null != t && null != e
                    }
                }), [l, f, e, a, c, s, o, t])
            }
        },
        506907: e => {
            "use strict";
            e.exports = function(e) {
                e = String(e || "");
                if (r.test(e)) return "rtl";
                if (i.test(e)) return "ltr";
                return "neutral"
            };
            var t = "֑-߿יִ-﷽ﹰ-ﻼ",
                n = "A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",
                r = new RegExp("^[^" + n + "]*[" + t + "]"),
                i = new RegExp("^[^" + t + "]*[" + n + "]")
        },
        577660: (e, t, n) => {
            e.exports = n.p + "5e7d050aa74c846659708b2d59c72a05.svg"
        },
        824390: e => {
            "use strict";
            e.exports = function(e, t) {
                var n = t.length,
                    r = e.length;
                if (r > n) return !1;
                if (r === n) return e === t;
                e: for (var i = 0, o = 0; i < r; i++) {
                    for (var u = e.charCodeAt(i); o < n;)
                        if (t.charCodeAt(o++) === u) continue e;
                    return !1
                }
                return !0
            }
        },
        896874: e => {
            e.exports = function(e, t, n) {
                switch (n.length) {
                    case 0:
                        return e.call(t);
                    case 1:
                        return e.call(t, n[0]);
                    case 2:
                        return e.call(t, n[0], n[1]);
                    case 3:
                        return e.call(t, n[0], n[1], n[2])
                }
                return e.apply(t, n)
            }
        },
        70151: (e, t, n) => {
            var r = n(200278),
                i = n(173480);
            e.exports = function(e) {
                return i(r(e))
            }
        },
        269199: (e, t, n) => {
            var r = n(989881),
                i = n(498612);
            e.exports = function(e, t) {
                var n = -1,
                    o = i(e) ? Array(e.length) : [];
                r(e, (function(e, r, i) {
                    o[++n] = t(e, r, i)
                }));
                return o
            }
        },
        882689: (e, t, n) => {
            var r = n(829932),
                i = n(267206),
                o = n(269199),
                u = n(571131),
                a = n(307518),
                c = n(285022),
                l = n(406557);
            e.exports = function(e, t, n) {
                var s = -1;
                t = r(t.length ? t : [l], a(i));
                var f = o(e, (function(e, n, i) {
                    return {
                        criteria: r(t, (function(t) {
                            return t(e)
                        })),
                        index: ++s,
                        value: e
                    }
                }));
                return u(f, (function(e, t) {
                    return c(e, t, n)
                }))
            }
        },
        105976: (e, t, n) => {
            var r = n(406557),
                i = n(545357),
                o = n(430061);
            e.exports = function(e, t) {
                return o(i(e, t, r), e + "")
            }
        },
        356560: (e, t, n) => {
            var r = n(575703),
                i = n(538777),
                o = n(406557),
                u = i ? function(e, t) {
                    return i(e, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: r(t),
                        writable: !0
                    })
                } : o;
            e.exports = u
        },
        525127: (e, t, n) => {
            var r = n(173480),
                i = n(252628);
            e.exports = function(e) {
                return r(i(e))
            }
        },
        571131: e => {
            e.exports = function(e, t) {
                var n = e.length;
                e.sort(t);
                for (; n--;) e[n] = e[n].value;
                return e
            }
        },
        747415: (e, t, n) => {
            var r = n(829932);
            e.exports = function(e, t) {
                return r(t, (function(t) {
                    return e[t]
                }))
            }
        },
        626393: (e, t, n) => {
            var r = n(733448);
            e.exports = function(e, t) {
                if (e !== t) {
                    var n = void 0 !== e,
                        i = null === e,
                        o = e == e,
                        u = r(e),
                        a = void 0 !== t,
                        c = null === t,
                        l = t == t,
                        s = r(t);
                    if (!c && !s && !u && e > t || u && a && l && !c && !s || i && a && l || !n && l || !o) return 1;
                    if (!i && !u && !s && e < t || s && n && o && !i && !u || c && n && o || !a && o || !l) return -1
                }
                return 0
            }
        },
        285022: (e, t, n) => {
            var r = n(626393);
            e.exports = function(e, t, n) {
                for (var i = -1, o = e.criteria, u = t.criteria, a = o.length, c = n.length; ++i < a;) {
                    var l = r(o[i], u[i]);
                    if (l) {
                        return i >= c ? l : l * ("desc" == n[i] ? -1 : 1)
                    }
                }
                return e.index - t.index
            }
        },
        200278: e => {
            e.exports = function(e, t) {
                var n = -1,
                    r = e.length;
                t || (t = Array(r));
                for (; ++n < r;) t[n] = e[n];
                return t
            }
        },
        545357: (e, t, n) => {
            var r = n(896874),
                i = Math.max;
            e.exports = function(e, t, n) {
                t = i(void 0 === t ? e.length - 1 : t, 0);
                return function() {
                    for (var o = arguments, u = -1, a = i(o.length - t, 0), c = Array(a); ++u < a;) c[u] = o[t + u];
                    u = -1;
                    for (var l = Array(t + 1); ++u < t;) l[u] = o[u];
                    l[t] = n(c);
                    return r(e, this, l)
                }
            }
        },
        430061: (e, t, n) => {
            var r = n(356560),
                i = n(521275)(r);
            e.exports = i
        },
        521275: e => {
            var t = Date.now;
            e.exports = function(e) {
                var n = 0,
                    r = 0;
                return function() {
                    var i = t(),
                        o = 16 - (i - r);
                    r = i;
                    if (o > 0) {
                        if (++n >= 800) return arguments[0]
                    } else n = 0;
                    return e.apply(void 0, arguments)
                }
            }
        },
        173480: (e, t, n) => {
            var r = n(769877);
            e.exports = function(e, t) {
                var n = -1,
                    i = e.length,
                    o = i - 1;
                t = void 0 === t ? i : t;
                for (; ++n < t;) {
                    var u = r(n, o),
                        a = e[u];
                    e[u] = e[n];
                    e[n] = a
                }
                e.length = t;
                return e
            }
        },
        575703: e => {
            e.exports = function(e) {
                return function() {
                    return e
                }
            }
        },
        208804: (e, t, n) => {
            e.exports = n(91175)
        },
        91175: e => {
            e.exports = function(e) {
                return e && e.length ? e[0] : void 0
            }
        },
        531351: e => {
            var t = Array.prototype.reverse;
            e.exports = function(e) {
                return null == e ? e : t.call(e)
            }
        },
        369983: (e, t, n) => {
            var r = n(70151),
                i = n(525127),
                o = n(701469);
            e.exports = function(e) {
                return (o(e) ? r : i)(e)
            }
        },
        189734: (e, t, n) => {
            var r = n(121078),
                i = n(882689),
                o = n(105976),
                u = n(816612),
                a = o((function(e, t) {
                    if (null == e) return [];
                    var n = t.length;
                    n > 1 && u(e, t[0], t[1]) ? t = [] : n > 2 && u(t[0], t[1], t[2]) && (t = [t[0]]);
                    return i(e, r(t, 1), [])
                }));
            e.exports = a
        },
        252628: (e, t, n) => {
            var r = n(747415),
                i = n(3674);
            e.exports = function(e) {
                return null == e ? [] : r(e, i(e))
            }
        },
        620745: (e, t, n) => {
            "use strict";
            var r = n(973935);
            t.s = r.createRoot;
            r.hydrateRoot
        },
        774930: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => o
            });
            var r = n(202351),
                i = n(409125);

            function o() {
                return (0, r.e7)([i.Z], (function() {
                    return null != i.Z.getRemoteSessionId() || null != i.Z.getAwaitingRemoteSessionInfo()
                }))
            }
        },
        773411: (e, t, n) => {
            "use strict";
            n.d(t, {
                N2: () => f,
                YM: () => d,
                Dx: () => p,
                jD: () => h,
                bO: () => y,
                Xp: () => v,
                fV: () => m
            });
            var r = n(202351),
                i = n(747820),
                o = n(260561),
                u = n(339432),
                a = n(5544),
                c = n(567403),
                l = n(2590);

            function s(e, t, n) {
                return t.getChannels(e)[a.sH].filter((function(t) {
                    var r = t.channel;
                    return !n.isChannelGated(e, r.id)
                })).length > 5
            }

            function f(e) {
                var t = (0, r.e7)([a.ZP, i.Z], (function() {
                    return null != e && s(e.id, a.ZP, i.Z)
                }));
                return !__OVERLAY__ && (!!t && (null != e && e.hasFeature(l.oNc.GUILD_HOME_DEPRECATION_OVERRIDE)))
            }

            function d(e) {
                if (__OVERLAY__) return !1;
                if (e === l.ME || e === l.I_8) return !1;
                if ((0, u.cn)()) return !1;
                var t = c.Z.getGuild(e);
                return null != t && (!!s(e, a.ZP, i.Z) && t.hasFeature(l.oNc.GUILD_HOME_DEPRECATION_OVERRIDE))
            }
            var p = (0, o.B)({
                    kind: "user",
                    id: "2022-01_home_feed_toggle",
                    label: "Show Guild Feed Sorting Selector",
                    defaultConfig: {
                        showSelector: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Yes Selector",
                        config: {
                            showSelector: !0
                        }
                    }]
                }),
                h = (0, o.B)({
                    kind: "user",
                    id: "2022-06_home_refresh_button",
                    label: "Show refresh button",
                    defaultConfig: {
                        showRefreshButton: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Yes button",
                        config: {
                            showRefreshButton: !0
                        }
                    }]
                }),
                y = (0, o.B)({
                    kind: "user",
                    id: "2022-08_home_badge",
                    label: "Show badge on home channel",
                    defaultConfig: {
                        showBadge: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "show badge",
                        config: {
                            showBadge: !0
                        }
                    }]
                }),
                v = ((0, o.B)({
                    kind: "user",
                    id: "2022-08_home_drawer_autoclose",
                    label: "Auto close home drawer",
                    defaultConfig: {
                        autoCloseDrawer: !1,
                        animation: !1,
                        delay: null
                    },
                    treatments: [{
                        id: 1,
                        label: "normal animation",
                        config: {
                            autoCloseDrawer: !0,
                            animation: !0,
                            delay: null
                        }
                    }, {
                        id: 2,
                        label: "no animate",
                        config: {
                            autoCloseDrawer: !0,
                            animation: !1,
                            delay: null
                        }
                    }, {
                        id: 3,
                        label: "150 delayed animation",
                        config: {
                            autoCloseDrawer: !0,
                            animation: !0,
                            delay: 150
                        }
                    }, {
                        id: 4,
                        label: "250 delayed animation",
                        config: {
                            autoCloseDrawer: !0,
                            animation: !0,
                            delay: 250
                        }
                    }, {
                        id: 5,
                        label: "500 delayed animation",
                        config: {
                            autoCloseDrawer: !0,
                            animation: !0,
                            delay: 500
                        }
                    }]
                }), (0, o.B)({
                    kind: "user",
                    id: "2022-09_welcome_header",
                    label: "Show welcome header for home",
                    defaultConfig: {
                        showWelcomeHeader: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "show welcome header",
                        config: {
                            showWelcomeHeader: !0
                        }
                    }]
                }), (0, o.B)({
                    kind: "user",
                    id: "2022-12_home_feedback_ux",
                    label: "Show post feedback for home",
                    defaultConfig: {
                        showFeedback: !1
                    },
                    treatments: [{
                        id: 100,
                        label: "show feedback",
                        config: {
                            showFeedback: !0
                        }
                    }]
                })),
                m = (0, o.B)({
                    kind: "guild",
                    id: "2023-03_home_deprecation",
                    label: "Home Deprecation",
                    defaultConfig: {
                        showDeprecationNotice: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Show notice",
                        config: {
                            showDeprecationNotice: !0
                        }
                    }]
                })
        },
        414306: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l,
                $: () => s
            });
            var r = n(202351),
                i = n(747820),
                o = n(61209),
                u = n(682776),
                a = n(2590),
                c = {
                    needSubscriptionToAccess: !1,
                    isSubscriptionGated: !1
                };

            function l(e) {
                return (0, r.cj)([o.Z, i.Z, u.Z], (function() {
                    return s(e, o.Z, i.Z, u.Z)
                }), [e])
            }

            function s(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.Z,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.Z,
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : u.Z,
                    l = t.getChannel(e);
                if (null == l ? void 0 : l.isRoleSubscriptionTemplatePreviewChannel()) return {
                    isSubscriptionGated: !0,
                    needSubscriptionToAccess: !0
                };
                if (null == l || !n.isChannelGated(l.guild_id, l.id)) return c;
                var s = l.isGuildVocal() ? !r.can(a.Plq.CONNECT, l) : !r.can(a.Plq.VIEW_CHANNEL, l);
                return {
                    isSubscriptionGated: !0,
                    needSubscriptionToAccess: s
                }
            }
        },
        115617: (e, t, n) => {
            "use strict";
            n.d(t, {
                Kw: () => u,
                hv: () => a,
                Po: () => c
            });
            var r = n(744564),
                i = n(652591),
                o = n(2590);

            function u(e) {
                i.default.track(o.rMx.HOTSPOT_HIDDEN, {
                    hotspot_location: e
                });
                r.Z.wait((function() {
                    r.Z.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: e
                    })
                }))
            }

            function a(e, t) {
                r.Z.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: e,
                    enabled: t
                })
            }

            function c(e) {
                r.Z.dispatch({
                    type: "HOTSPOT_OVERRIDE_CLEAR",
                    location: e
                })
            }
        },
        550254: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => v
            });
            var r = n(202351),
                i = n(744564),
                o = n(113469),
                u = n(199790);

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function c(e) {
                c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return c(e)
            }

            function l(e, t) {
                return !t || "object" !== f(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function s(e, t) {
                s = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return s(e, t)
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
                    var n, r = c(e);
                    if (t) {
                        var i = c(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return l(this, n)
                }
            }
            var p = new Set,
                h = {};
            var y = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && s(e, t)
                }(n, e);
                var t = d(n);

                function n() {
                    a(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    if (null != e) {
                        Array.isArray(e.hiddenHotspots) && (p = new Set(e.hiddenHotspots));
                        null != e.hotspotOverrides && (h = e.hotspotOverrides)
                    }
                };
                r.hasHotspot = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !t && h[e];
                    return !u.a && (!o.s.isDisallowPopupsSet() && (n || !p.has(e)))
                };
                r.hasHiddenHotspot = function(e) {
                    return p.has(e)
                };
                r.getHotspotOverride = function(e) {
                    return h[e]
                };
                r.getState = function() {
                    return {
                        hiddenHotspots: p,
                        hotspotOverrides: h
                    }
                };
                r.__getLocalVars = function() {
                    return {
                        hiddenHotspots: p,
                        hotspotOverrides: h
                    }
                };
                return n
            }(r.ZP.PersistedStore);
            y.displayName = "HotspotStore";
            y.persistKey = "hotspots";
            y.migrations = [function(e) {
                return {
                    hiddenHotspots: null != e ? e : [],
                    hotspotOverrides: {}
                }
            }];
            const v = new y(i.Z, {
                OVERLAY_INITIALIZE: function(e) {
                    var t = e.hiddenHotspots;
                    p = new Set(t)
                },
                HOTSPOT_HIDE: function(e) {
                    var t = e.location;
                    if (p.has(t)) return !1;
                    p.add(t)
                },
                HOTSPOT_OVERRIDE_SET: function(e) {
                    var t = e.location,
                        n = e.enabled;
                    h[t] = n
                },
                HOTSPOT_OVERRIDE_CLEAR: function(e) {
                    var t = e.location;
                    if (null == h[t]) return !1;
                    delete h[t]
                }
            })
        },
        422513: (e, t, n) => {
            "use strict";
            n.d(t, {
                v6: () => r.v,
                Po: () => i.Po,
                Kw: () => i.Kw,
                hv: () => i.hv,
                qc: () => o.Z
            });
            var r = n(630670),
                i = n(115617),
                o = n(550254)
        },
        873934: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => A
            });
            var r = n(202351),
                i = n(744564),
                o = n(73904),
                u = n(61209),
                a = n(457896);

            function c(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function l(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
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
                return !t || "object" !== v(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function h(e, t) {
                h = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return h(e, t)
            }

            function y(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return c(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var v = function(e) {
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
            }
            var g = {},
                b = {},
                E = {},
                O = void 0,
                S = void 0;

            function w(e) {
                delete g[e];
                var t = E[e];
                null != t && delete b[t];
                delete E[e]
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
                    t && h(e, t)
                }(n, e);
                var t = m(n);

                function n() {
                    l(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.getInteraction = function(e) {
                    var t = b[e.id];
                    return null != t ? g[t] : null
                };
                r.getMessageInteractionStates = function() {
                    var e = {},
                        t = !0,
                        n = !1,
                        r = void 0;
                    try {
                        for (var i, o = Object.entries(g)[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                            var u = y(i.value, 2),
                                a = u[0],
                                c = u[1],
                                l = E[a];
                            null != l && (e[l] = c.state)
                        }
                    } catch (e) {
                        n = !0;
                        r = e
                    } finally {
                        try {
                            t || null == o.return || o.return()
                        } finally {
                            if (n) throw r
                        }
                    }
                    return e
                };
                r.canQueueInteraction = function(e, t) {
                    var n = b[e];
                    return !(null != n && null != g[n] && g[n].state !== a.F.FAILED || null != g[t] && g[t].state !== a.F.FAILED)
                };
                r.getIFrameModalApplicationId = function() {
                    return S
                };
                r.getIFrameModalKey = function() {
                    return O
                };
                r.__getLocalVars = function() {
                    return {
                        interactions: g,
                        messageIdToNonce: b,
                        nonceToMessageId: E,
                        iFrameModalKey: O,
                        iFrameModalApplicationId: S
                    }
                };
                return n
            }(r.ZP.Store);
            _.displayName = "InteractionStore";
            const A = new _(i.Z, {
                LOGOUT: function() {
                    g = {};
                    b = {};
                    E = {}
                },
                INTERACTION_QUEUE: function(e) {
                    var t = e.nonce,
                        n = e.messageId,
                        r = e.data,
                        i = e.onCreate,
                        o = e.onCancel,
                        u = e.onSuccess,
                        c = e.onFailure;
                    if (null != n) {
                        b[n] = t;
                        E[t] = n
                    }
                    g[t] = {
                        state: a.F.QUEUED,
                        data: r,
                        onCreate: i,
                        onCancel: o,
                        onSuccess: u,
                        onFailure: c
                    }
                },
                INTERACTION_CREATE: function(e) {
                    var t, n = e.nonce,
                        r = e.interactionId;
                    if (null == n) return !1;
                    var i = g[n];
                    if (null == i || i.state !== a.F.QUEUED) return !1;
                    i.state = a.F.CREATED;
                    null === (t = i.onCreate) || void 0 === t || t.call(i, r)
                },
                INTERACTION_SUCCESS: function(e) {
                    var t, n = e.nonce;
                    if (null == n) return !1;
                    var r = g[n];
                    if (null == r) return !1;
                    null === (t = r.onSuccess) || void 0 === t || t.call(r);
                    w(n)
                },
                INTERACTION_FAILURE: function(e) {
                    var t, n = e.nonce,
                        r = e.errorCode,
                        i = e.errorMessage;
                    if (null == n) return !1;
                    var u = g[n];
                    if (null == u) return !1;
                    null === (t = u.onFailure) || void 0 === t || t.call(u, r, i);
                    u.data.interactionType === o.B8.APPLICATION_COMMAND ? w(n) : g[n] = d(function(e) {
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
                    }({}, u), {
                        state: a.F.FAILED,
                        errorCode: r,
                        errorMessage: i
                    })
                },
                MESSAGE_CREATE: function(e) {
                    var t = e.message;
                    if (null == t.nonce) return !1;
                    var n, r = g[t.nonce];
                    if (null == r) return !1;
                    null === (n = r.onSuccess) || void 0 === n || n.call(r);
                    w(t.nonce)
                },
                CHANNEL_SELECT: function(e) {
                    var t = e.channelId;
                    if (null == u.Z.getChannel(t)) return !1;
                    var n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var o, c = Object.entries(g)[Symbol.iterator](); !(n = (o = c.next()).done); n = !0) {
                            var l = y(o.value, 2),
                                s = l[0];
                            l[1].state === a.F.FAILED && w(s)
                        }
                    } catch (e) {
                        r = !0;
                        i = e
                    } finally {
                        try {
                            n || null == c.return || c.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                },
                INTERACTION_IFRAME_MODAL_CREATE: function(e) {
                    var t = e.application;
                    S = t.id
                },
                INTERACTION_IFRAME_MODAL_CLOSE: function() {
                    O = void 0;
                    S = void 0
                },
                INTERACTION_IFRAME_MODAL_KEY_CREATE: function(e) {
                    var t = e.modalKey;
                    O = t
                }
            })
        },
        457896: (e, t, n) => {
            "use strict";
            n.d(t, {
                F: () => r
            });
            var r;
            ! function(e) {
                e[e.QUEUED = 0] = "QUEUED";
                e[e.CREATED = 1] = "CREATED";
                e[e.FAILED = 2] = "FAILED"
            }(r || (r = {}))
        },
        102007: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p
            });
            var r = n(785893),
                i = (n(667294), n(294184)),
                o = n.n(i),
                u = n(882723),
                a = n(95891),
                c = n(473708),
                l = n(200416),
                s = n.n(l);

            function f(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
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

            function p(e) {
                var t = e.text,
                    n = void 0 === t ? c.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP : t,
                    i = e.className;
                return (0, r.jsx)(u.Tooltip, {
                    text: n,
                    children: function(e) {
                        return (0, r.jsx)(u.Clickable, d(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                }))));
                                r.forEach((function(t) {
                                    f(e, t, n[t])
                                }))
                            }
                            return e
                        }({}, e), {
                            children: (0, r.jsx)(a.Z, {
                                className: o()(s().nitroWheel, i)
                            })
                        }))
                    }
                })
            }
        },
        598679: (e, t, n) => {
            "use strict";
            n.d(t, {
                Y: () => r,
                Z: () => p
            });
            var r, i, o = n(785893),
                u = n(667294),
                a = n(294184),
                c = n.n(a),
                l = n(483913),
                s = n.n(l);

            function f(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }! function(e) {
                e.PREMIUM = "premium";
                e.LIMITED = "limited"
            }(r || (r = {}));
            var d = (f(i = {}, r.PREMIUM, {
                border: s().premiumFeatureBorder,
                background: s().premiumBackground
            }), f(i, r.LIMITED, {
                border: s().limitedFeatureBorder,
                background: s().limitedBackground
            }), i);
            const p = u.forwardRef((function(e, t) {
                var n = e.children,
                    i = e.type,
                    u = void 0 === i ? r.PREMIUM : i,
                    a = e.isShown,
                    l = e.hasBackground,
                    f = void 0 !== l && l,
                    p = e.className,
                    h = e.backgroundClassName;
                if (!a) return (0, o.jsx)(o.Fragment, {
                    children: n
                });
                var y = d[u],
                    v = y.border,
                    m = y.background;
                return (0, o.jsx)("div", {
                    ref: t,
                    className: c()(v, p),
                    children: (0, o.jsx)("div", {
                        className: c()(f ? m : s().background, h),
                        children: n
                    })
                })
            }))
        },
        18882: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => ce
            });
            var r = n(496486),
                i = n.n(r),
                o = n(842227),
                u = n(202351),
                a = n(744564),
                c = n(656793),
                l = n(382060),
                s = n(61209),
                f = n(567403),
                d = n(179913),
                p = n(715107),
                h = n(536945),
                y = n(487685),
                v = n(102921);

            function m(e) {
                if (null == e.threadMetadata) return 0;
                var t = 60 * e.threadMetadata.autoArchiveDuration * 1e3;
                return function(e) {
                    if (null == e.threadMetadata) return 0;
                    var t, n = null !== (t = d.ZP.lastMessageId(e.id)) && void 0 !== t ? t : e.id,
                        r = v.Z.extractTimestamp(n),
                        i = null != e.threadMetadata.archiveTimestamp ? new Date(e.threadMetadata.archiveTimestamp).getTime() : 0;
                    return Math.max(r, i)
                }(e) + t
            }
            var g = n(897196);

            function b(e, t) {
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

            function O(e) {
                O = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return O(e)
            }

            function S(e) {
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
            }

            function w(e, t) {
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

            function _(e, t) {
                return !t || "object" !== T(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function A(e, t) {
                A = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return A(e, t)
            }
            var T = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function P(e) {
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
                    var n, r = O(e);
                    if (t) {
                        var i = O(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return _(this, n)
                }
            }
            var I = {},
                x = {},
                D = {},
                C = {},
                N = {},
                R = {},
                j = null,
                L = {};

            function U() {
                I = {};
                N = {};
                x = {};
                D = {};
                C = {};
                j = p.Z.getChannelId();
                for (var e in L) clearTimeout(L[e]);
                L = {};
                h.Z.forEachGuild((function(e) {
                    Z(e)
                }));
                F()
            }

            function k(e) {
                delete I[e];
                delete N[e];
                delete x[e];
                delete D[e];
                delete C[e];
                Z(e);
                for (var t in D[e]) V(e, t)
            }

            function Z(e) {
                var t = h.Z.getThreadsForGuild(e);
                for (var n in t)
                    for (var r in t[n]) {
                        J(r);
                        var i = s.Z.getChannel(r);
                        if (null != i) {
                            var o = y.Z.joinTimestamp(r);
                            if (null != o) {
                                var u = {
                                        channel: i,
                                        joinTimestamp: o.getTime()
                                    },
                                    a = K(i),
                                    c = a.isUnread,
                                    l = a.isRelevant,
                                    f = a.isTimedRelevant;
                                $(I, i, u, !1);
                                $(N, i, l ? u : null, !1);
                                $(x, i, c ? u : null, !1);
                                f && q(i, !0)
                            } else {
                                $(D, i, i, !1);
                                var p = d.ZP.isForumPostUnread(i.id);
                                $(C, i, p ? i : null, !1)
                            }
                        }
                    }
            }

            function F() {
                R = {};
                for (var e in D)
                    for (var t in D[e]) V(e, t)
            }

            function M(e) {
                var t = s.Z.getBasicChannel(e);
                null != t && l.uC.has(t.type) && V(t.guild_id, t.id)
            }

            function V(e, t) {
                var n = s.Z.getChannel(t);
                if (null != n && n.isForumLikeChannel()) {
                    null == R[e] && (R[e] = {});
                    R[e][t] = 0;
                    if (null != D[e] && null != D[e][t]) {
                        var r = f.Z.getGuild(e);
                        if (null != r) {
                            var i = d.ZP.getTrackedAckMessageId(t);
                            if (null == i) {
                                var u = Date.now();
                                null != r.joinedAt && (r.joinedAt instanceof Date ? u = r.joinedAt.getTime() : "string" == typeof r.joinedAt && (u = new Date(r.joinedAt).getTime()));
                                i = o.default.fromTimestamp(u)
                            }
                            for (var a in D[e][t]) t === j ? d.ZP.isNewForumThread(a, t, r) && R[e][t]++ : o.default.compare(a, i) > 0 && !d.ZP.hasOpenedThread(a) && R[e][t]++
                        }
                    }
                }
            }

            function B(e, t, n) {
                if (null == t) return !1;
                var r = s.Z.getChannel(n),
                    i = y.Z.joinTimestamp(n);
                if (null != r && h.Z.isActive(e, t, n)) {
                    if (null != i) {
                        var o = {
                                channel: r,
                                joinTimestamp: i.getTime()
                            },
                            u = K(r),
                            a = u.isUnread,
                            c = u.isRelevant,
                            l = u.isTimedRelevant;
                        $(I, r, o, !0);
                        $(N, r, c ? o : null, !0);
                        $(x, r, a ? o : null, !0);
                        $(D, r, null, !0);
                        $(C, r, null, !0);
                        q(r, l)
                    } else {
                        var f = d.ZP.isForumPostUnread(r.id);
                        $(I, r, null, !0);
                        $(x, r, null, !0);
                        $(N, r, null, !0);
                        $(D, r, r, !0);
                        $(C, r, f ? r : null, !0);
                        J(r.id)
                    }
                    V(e, t)
                } else {
                    Q(I, e, t, n);
                    Q(N, e, t, n);
                    Q(x, e, t, n);
                    Q(D, e, t, n);
                    Q(C, e, t, n);
                    J(n);
                    V(e, t)
                }
            }

            function G(e) {
                return B(e.channel.guild_id, e.channel.parent_id, e.channel.id)
            }

            function H(e, t) {
                if (null == t) return !1;
                var n = I[e],
                    r = null == n ? null : n[t];
                if (null != r)
                    for (var i in r)
                        if (r[i].channel.isNSFW()) return !0;
                var o = D[e],
                    u = null == o ? null : o[t];
                if (null != u)
                    for (var a in u)
                        if (u[a].isNSFW()) return !0;
                return !1
            }

            function z(e) {
                var t = s.Z.getChannel(e.id);
                return !(null == t || !h.Z.isActive(e.guildId, t.parent_id, e.id)) && B(t.guild_id, t.parent_id, t.id)
            }

            function Y(e) {
                var t = s.Z.getChannel(e.channelId);
                if (null == t) W();
                else {
                    var n = t.guild_id,
                        r = t.parent_id;
                    if (!l.Ec.has(t.type)) {
                        var i;
                        if (Number(null === (i = R[n]) || void 0 === i ? void 0 : i[t.id]) > 0) {
                            V(n, t.id);
                            return !0
                        }
                        return !1
                    }
                    if (null == r) return !1;
                    if (ee(I, t)) {
                        var o = K(t),
                            u = o.isUnread,
                            a = o.isRelevant;
                        q(t, o.isTimedRelevant);
                        var c = ee(x, t),
                            f = ee(N, t);
                        if (u === c && a === f) return !1;
                        var p = I[n][r][t.id],
                            h = a ? p : null;
                        $(x, t, u ? p : null, !0);
                        $(N, t, h, !0);
                        V(n, r)
                    } else {
                        var y = ee(C, t),
                            v = d.ZP.isForumPostUnread(t.id);
                        if (v === y) return !1;
                        $(C, t, v ? t : null, !0)
                    }
                }
            }

            function W() {
                x = {};
                N = {};
                for (var e in I)
                    for (var t in I[e])
                        for (var n in I[e][t]) {
                            var r = I[e][t][n],
                                i = K(r.channel),
                                o = i.isUnread,
                                u = i.isRelevant,
                                a = i.isTimedRelevant;
                            o && $(x, r.channel, r, !1);
                            u && $(N, r.channel, r, !1);
                            q(r.channel, a)
                        }
                C = {};
                for (var c in D)
                    for (var l in D[c])
                        for (var s in D[c][l]) {
                            var f = D[c][l][s];
                            d.ZP.isForumPostUnread(s) && $(C, f, f, !1)
                        }
                F()
            }

            function X() {
                var e = j;
                if ((j = p.Z.getChannelId()) === e) return !1;
                M(e);
                M(j)
            }

            function K(e) {
                var t = d.ZP.getMentionCount(e.id) > 0,
                    n = d.ZP.hasRelevantUnread(e) && (!y.Z.isMuted(e.id) || t) || (0, c.c)() && t,
                    r = e.hasFlag(g.zZ.PINNED),
                    i = e.isActiveThread(),
                    o = i && m(e) > Date.now();
                return {
                    isUnread: (i || r) && n,
                    isRelevant: o || r || n,
                    isTimedRelevant: o
                }
            }

            function q(e, t) {
                J(e.id);
                t && function(e) {
                    L[e.id] = setTimeout((function() {
                        var t = s.Z.getChannel(e.id);
                        null != t && a.Z.dispatch({
                            type: "THREAD_UPDATE",
                            channel: t
                        })
                    }), m(e) - Date.now() + 1)
                }(e)
            }

            function J(e) {
                if (e in L) {
                    clearTimeout(L[e]);
                    delete L[e]
                }
            }

            function $(e, t, n, r) {
                var o = t.guild_id,
                    u = t.parent_id,
                    a = t.id;
                if (null != o && null != u && null != a) {
                    o in e || (e[o] = {});
                    u in e[o] || (e[o][u] = {});
                    r && (e[o] = w(S({}, e[o]), E({}, u, S({}, e[o][u]))));
                    if (null === n) {
                        delete e[o][u][a];
                        i().isEmpty(e[o][u]) && delete e[o][u]
                    } else e[o][u][a] = n
                }
            }

            function Q(e, t, n, r) {
                if (null != t && null != n && null != r && te(e, t, n, r)) {
                    e[t] = w(S({}, e[t]), E({}, n, S({}, e[t][n])));
                    delete e[t][n][r];
                    i().isEmpty(e[t][n]) && delete e[t][n]
                }
            }

            function ee(e, t) {
                return te(e, t.guild_id, t.parent_id, t.id)
            }

            function te(e, t, n, r) {
                return t in e && n in e[t] && r in e[t][n]
            }
            var ne = {},
                re = {},
                ie = {},
                oe = {},
                ue = {},
                ae = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && A(e, t)
                    }(n, e);
                    var t = P(n);

                    function n() {
                        b(this, n);
                        return t.apply(this, arguments)
                    }
                    var r = n.prototype;
                    r.initialize = function() {
                        this.waitFor(h.Z, s.Z, y.Z, d.ZP);
                        this.syncWith([p.Z], X)
                    };
                    r.hasActiveJoinedUnreadThreads = function(e, t) {
                        return e in x && t in x[e]
                    };
                    r.getActiveUnjoinedThreadsForParent = function(e, t) {
                        var n;
                        return e in D && null !== (n = D[e][t]) && void 0 !== n ? n : oe
                    };
                    r.getActiveJoinedThreadsForParent = function(e, t) {
                        var n;
                        return e in I && null !== (n = I[e][t]) && void 0 !== n ? n : ie
                    };
                    r.getActiveJoinedThreadsForGuild = function(e) {
                        var t;
                        return null !== (t = I[e]) && void 0 !== t ? t : ne
                    };
                    r.getActiveJoinedUnreadThreadsForGuild = function(e) {
                        var t;
                        return null !== (t = x[e]) && void 0 !== t ? t : ne
                    };
                    r.getActiveJoinedUnreadThreadsForParent = function(e, t) {
                        var n;
                        return null !== (n = this.getActiveJoinedUnreadThreadsForGuild(e)[t]) && void 0 !== n ? n : ie
                    };
                    r.getActiveJoinedRelevantThreadsForGuild = function(e) {
                        var t;
                        return null !== (t = N[e]) && void 0 !== t ? t : ne
                    };
                    r.getActiveJoinedRelevantThreadsForParent = function(e, t) {
                        var n;
                        return null !== (n = this.getActiveJoinedRelevantThreadsForGuild(e)[t]) && void 0 !== n ? n : ie
                    };
                    r.getActiveUnjoinedThreadsForGuild = function(e) {
                        var t;
                        return null !== (t = D[e]) && void 0 !== t ? t : re
                    };
                    r.getActiveUnjoinedUnreadThreadsForGuild = function(e) {
                        var t;
                        return null !== (t = C[e]) && void 0 !== t ? t : ne
                    };
                    r.getActiveUnjoinedUnreadThreadsForParent = function(e, t) {
                        var n;
                        return null !== (n = this.getActiveUnjoinedUnreadThreadsForGuild(e)[t]) && void 0 !== n ? n : ie
                    };
                    r.getNewThreadCountsForGuild = function(e) {
                        var t;
                        return null !== (t = R[e]) && void 0 !== t ? t : ue
                    };
                    r.computeAllActiveJoinedThreads = function(e) {
                        var t = [];
                        for (var n in I)
                            if (n === e || null == e)
                                for (var r in I[n])
                                    for (var i in I[n][r]) t.push(I[n][r][i].channel);
                        return t
                    };
                    r.getNewThreadCount = function(e, t) {
                        var n, r;
                        return null !== (r = null === (n = R[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== r ? r : 0
                    };
                    r.getActiveThreadCount = function(e, t) {
                        var n, r, o, u;
                        return i().size(null !== (o = null === (n = I[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== o ? o : {}) + i().size(null !== (u = null === (r = D[e]) || void 0 === r ? void 0 : r[t]) && void 0 !== u ? u : {})
                    };
                    r.__getLocalVars = function() {
                        return {
                            activeJoinedThreads: I,
                            activeJoinedUnreadThreads: x,
                            activeUnjoinedThreads: D,
                            activeUnjoinedUnreadThreads: C,
                            activeJoinedRelevantThreads: N,
                            newThreadCounts: R,
                            selectedChannelId: j,
                            timers: L,
                            NO_GUILD_UNJOINED_THREADS: re,
                            NO_JOINED_THREADS: ie,
                            NO_UNJOINED_THREADS: oe,
                            NO_NEW_THREADS: ue
                        }
                    };
                    return n
                }(u.ZP.Store);
            ae.displayName = "ActiveJoinedThreadsStore";
            const ce = new ae(a.Z, {
                CONNECTION_OPEN: U,
                OVERLAY_INITIALIZE: U,
                THREAD_LIST_SYNC: function(e) {
                    return k(e.guildId)
                },
                LOAD_THREADS_SUCCESS: U,
                LOAD_ARCHIVED_THREADS_SUCCESS: U,
                SEARCH_FINISH: U,
                GUILD_CREATE: function(e) {
                    return k(e.guild.id)
                },
                GUILD_DELETE: U,
                CURRENT_USER_UPDATE: U,
                THREAD_CREATE: G,
                THREAD_UPDATE: G,
                THREAD_DELETE: G,
                CHANNEL_UPDATES: function(e) {
                    var t = e.channels,
                        n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var o, u = t[Symbol.iterator](); !(n = (o = u.next()).done); n = !0) {
                            var a = o.value;
                            if (a.isNSFW() !== H(a.guild_id, a.parent_id)) {
                                U();
                                return
                            }
                        }
                    } catch (e) {
                        r = !0;
                        i = e
                    } finally {
                        try {
                            n || null == u.return || u.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    return !1
                },
                CHANNEL_DELETE: function(e) {
                    var t = e.channel,
                        n = !1;
                    if (null != t.guild_id && null != t.parent_id) {
                        if (t.guild_id in I && t.parent_id in I[t.guild_id]) {
                            delete I[t.guild_id][t.parent_id];
                            n = !0
                        }
                        if (t.guild_id in x && t.parent_id in x[t.guild_id]) {
                            delete x[t.guild_id][t.parent_id];
                            n = !0
                        }
                        if (t.guild_id in N && t.parent_id in N[t.guild_id]) {
                            Object.keys(N[t.guild_id][t.parent_id]).forEach(J);
                            delete N[t.guild_id][t.parent_id];
                            n = !0
                        }
                        if (t.guild_id in D && t.parent_id in D[t.guild_id]) {
                            delete D[t.guild_id][t.parent_id];
                            n = !0
                        }
                        if (t.guild_id in C && t.parent_id in C[t.guild_id]) {
                            delete C[t.guild_id][t.parent_id];
                            n = !0
                        }
                        n && V(t.guild_id, t.parent_id)
                    }
                    return n
                },
                THREAD_MEMBER_UPDATE: z,
                THREAD_MEMBERS_UPDATE: z,
                LOAD_MESSAGES_SUCCESS: Y,
                MESSAGE_CREATE: Y,
                MESSAGE_DELETE: Y,
                MESSAGE_DELETE_BULK: Y,
                MESSAGE_ACK: Y,
                CHANNEL_ACK: Y,
                CHANNEL_LOCAL_ACK: Y,
                CHANNEL_SELECT: function(e) {
                    Y(e);
                    X()
                },
                PASSIVE_UPDATE_V1: function(e) {
                    null != e.channels && W()
                },
                WINDOW_FOCUS: W,
                UPDATE_CHANNEL_DIMENSIONS: W,
                DRAWER_OPEN: W,
                DRAWER_CLOSE: W,
                BULK_ACK: W
            })
        },
        225386: (e, t, n) => {
            "use strict";
            n.d(t, {
                tM: () => v,
                NE: () => m,
                ki: () => g,
                Xu: () => b,
                cD: () => E,
                Ek: () => S,
                JQ: () => w,
                C7: () => _,
                tc: () => P,
                kn: () => I,
                $R: () => x,
                RG: () => D,
                xl: () => C,
                Xb: () => R,
                Y: () => L,
                Gu: () => U
            });
            var r = n(496486),
                i = n.n(r),
                o = n(940060),
                u = n(202351),
                a = n(249139),
                c = n(774930),
                l = n(791707),
                s = n(382060),
                f = n(664625),
                d = n(61209),
                p = n(682776),
                h = n(18882),
                y = n(2590),
                v = (0, a.Z)({
                    id: "2022-07_voice_in_threads",
                    label: "Voice in Threads",
                    kind: "guild",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "On",
                        config: {
                            enabled: !0
                        }
                    }]
                });

            function m(e, t) {
                return O((0, u.e7)([p.Z], (function() {
                    var t = e.isForumLikeChannel() ? y.Plq.SEND_MESSAGES : o.Z.combine(y.Plq.CREATE_PUBLIC_THREADS, y.Plq.READ_MESSAGE_HISTORY);
                    return p.Z.can(t, e)
                }), [e]), e, t)
            }

            function g(e, t) {
                var n = e.isForumLikeChannel() ? y.Plq.SEND_MESSAGES : o.Z.combine(y.Plq.CREATE_PUBLIC_THREADS, y.Plq.READ_MESSAGE_HISTORY);
                return O(p.Z.can(n, e), e, t)
            }

            function b(e) {
                var t = (0, u.e7)([p.Z], (function() {
                    return p.Z.can(o.Z.combine(y.Plq.CREATE_PRIVATE_THREADS), e)
                }), [e]);
                return e.type === y.d4z.GUILD_TEXT && O(t, e)
            }

            function E(e) {
                var t = m(e),
                    n = b(e);
                return t || n
            }

            function O(e, t, n) {
                if (__OVERLAY__) return !1;
                if (!e) return !1;
                if (!s.uC.has(t.type)) return !1;
                if (null != n) {
                    if (n.hasFlag(y.iLy.HAS_THREAD)) return !1;
                    if ((0, l.Z)(n)) return !1
                }
                return !0
            }

            function S(e) {
                var t = (0, u.e7)([d.Z], (function() {
                    return d.Z.getChannel(e.id)
                }), [e]);
                return function(e, t, n) {
                    return !!t.hasFlag(y.iLy.HAS_THREAD) && (null != n && !!e)
                }((0, u.e7)([p.Z], (function() {
                    return p.Z.can(y.Plq.VIEW_CHANNEL, t)
                }), [t]), e, t)
            }

            function w(e) {
                return (0, u.cj)([h.Z, p.Z], (function() {
                    var t = h.Z.getActiveJoinedThreadsForParent(e.guild_id, e.id),
                        n = h.Z.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id),
                        r = h.Z.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
                        o = i()(n).some((function(e) {
                            return p.Z.can(y.Plq.VIEW_CHANNEL, e.channel)
                        })),
                        u = i()(t).some((function(e) {
                            return !(e.channel.id in n) && p.Z.can(y.Plq.VIEW_CHANNEL, e.channel)
                        })),
                        a = i()(r).some((function(e) {
                            return p.Z.can(y.Plq.VIEW_CHANNEL, e)
                        }));
                    return {
                        hasActiveThreads: o || u || a,
                        hasMoreActiveThreads: a || u
                    }
                }))
            }

            function _(e) {
                var t = (0, u.e7)([d.Z], (function() {
                        return d.Z.getChannel(null == e ? void 0 : e.parent_id)
                    })),
                    n = (0, u.e7)([p.Z], (function() {
                        return null != t && p.Z.can(y.Plq.MANAGE_THREADS, t)
                    }), [t]),
                    r = (0, u.e7)([f.default], (function() {
                        return f.default.getId()
                    }));
                return null != e && null != t && (!!e.isThread() && (!!n || !e.isLockedThread() && e.ownerId === r))
            }

            function A(e, t) {
                return null != e && t.can(y.Plq.SEND_MESSAGES_IN_THREADS, e)
            }

            function T(e, t, n) {
                var r;
                return !(null == e || !e.isThread()) && ((null === (r = e.threadMetadata) || void 0 === r ? void 0 : r.locked) ? n : t)
            }

            function P(e) {
                var t = (0, u.e7)([p.Z], (function() {
                        return A(e, p.Z)
                    })),
                    n = R(e);
                return T(e, t, n)
            }

            function I(e) {
                return T(e, A(e, p.Z), j(e))
            }

            function x(e) {
                var t, n = (0, u.e7)([p.Z], (function() {
                    return null != e && p.Z.can(y.Plq.SEND_MESSAGES_IN_THREADS, e)
                }));
                return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && !0 !== (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) && n)
            }

            function D(e) {
                var t;
                return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && !0 !== (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) && p.Z.can(y.Plq.SEND_MESSAGES_IN_THREADS, e))
            }

            function C(e) {
                var t = p.Z.can(y.Plq.MANAGE_THREADS, e);
                return e.isArchivedLockedThread() && !t
            }

            function N(e, t) {
                return null != e && t.can(y.Plq.MANAGE_THREADS, e)
            }

            function R(e) {
                return (0, u.e7)([p.Z], (function() {
                    return N(e, p.Z)
                }))
            }

            function j(e) {
                return N(e, p.Z)
            }

            function L(e) {
                var t = (0, c.Z)(),
                    n = (0, u.e7)([p.Z], (function() {
                        return p.Z.can(y.Plq.CONNECT, e)
                    })),
                    r = x(e),
                    i = v.useExperiment({
                        guildId: e.guild_id,
                        location: "e791ea_1"
                    }, {
                        autoTrackExposure: !1
                    }).enabled;
                return !t && e.isVocalThread() && i && n && r
            }

            function U(e) {
                var t = R(e);
                return e.isLockedThread() && !t
            }
        },
        543976: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => v
            });
            var r = n(730381),
                i = n.n(r),
                o = n(169376),
                u = n(661123),
                a = n(800336),
                c = n(203600);

            function l(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function s(e) {
                s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return s(e)
            }

            function f(e, t) {
                return !t || "object" !== p(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function d(e, t) {
                d = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return d(e, t)
            }
            var p = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function h(e) {
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
                    var n, r = s(e);
                    if (t) {
                        var i = s(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return f(this, n)
                }
            }
            var y = Object.freeze({
                    PAYMENT_SOURCE_REQUIRED: 1,
                    EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED: 2,
                    NOT_SELF_REDEEMABLE: 4
                }),
                v = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && d(e, t)
                    }(n, e);
                    var t = h(n);

                    function n(e) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, n);
                        var r;
                        (r = t.call(this)).userId = e.userId;
                        r.code = e.code;
                        r.skuId = e.skuId;
                        r.uses = e.uses;
                        r.maxUses = e.maxUses;
                        r.expiresAt = e.expiresAt;
                        r.redeemed = e.redeemed;
                        r.storeListingId = e.storeListingId;
                        r.subscriptionPlanId = e.subscriptionPlanId;
                        r.subscriptionPlan = e.subscriptionPlan;
                        r.revoked = e.revoked;
                        r.entitlementBranches = e.entitlementBranches;
                        r.flags = e.flags;
                        r.subscriptionTrial = e.subscriptionTrial;
                        r.promotion = e.promotion;
                        r.giftStyle = e.giftStyle;
                        return r
                    }
                    var r = n.prototype;
                    r.isExpired = function() {
                        var e = this.expiresAt;
                        return null != e && i()().isAfter(e)
                    };
                    r.toString = function() {
                        return this.code
                    };
                    n.createFromServer = function(e) {
                        return new n({
                            userId: null != e.user ? e.user.id : null,
                            code: e.code,
                            skuId: e.sku_id,
                            uses: e.uses,
                            maxUses: e.max_uses,
                            storeListingId: null != e.store_listing ? e.store_listing.id : null,
                            expiresAt: null != e.expires_at ? i()(e.expires_at) : null,
                            redeemed: e.redeemed,
                            subscriptionPlanId: null != e.subscription_plan ? e.subscription_plan.id : e.subscription_plan_id,
                            subscriptionPlan: null != e.subscription_plan ? a.Z.createFromServer(e.subscription_plan) : null,
                            revoked: !1,
                            entitlementBranches: null != e.entitlement_branches ? e.entitlement_branches : null,
                            flags: null != e.flags ? e.flags : 0,
                            giftStyle: e.gift_style,
                            subscriptionTrial: null != e.subscription_trial ? {
                                id: e.subscription_trial.id,
                                interval: e.subscription_trial.interval,
                                intervalCount: e.subscription_trial.interval_count,
                                skuId: e.subscription_trial.sku_id
                            } : null,
                            promotion: null != e.promotion ? {
                                id: e.promotion.id,
                                startDate: e.promotion.start_date,
                                endDate: e.promotion.end_date,
                                inboundHeaderText: e.promotion.inbound_header_text,
                                inboundBodyText: e.promotion.inbound_body_text,
                                inboundHelpCenterLink: e.promotion.inbound_help_center_link
                            } : null
                        })
                    };
                    ! function(e, t, n) {
                        t && l(e.prototype, t);
                        n && l(e, n)
                    }(n, [{
                        key: "hasMultipleCopies",
                        get: function() {
                            return this.maxUses > 1
                        }
                    }, {
                        key: "isClaimed",
                        get: function() {
                            return this.uses >= this.maxUses
                        }
                    }, {
                        key: "remainingUses",
                        get: function() {
                            return this.maxUses - this.uses
                        }
                    }, {
                        key: "isSubscription",
                        get: function() {
                            return null != this.subscriptionPlanId
                        }
                    }, {
                        key: "premiumSubscriptionType",
                        get: function() {
                            return this.isSubscription && c.y7[this.skuId] || null
                        }
                    }, {
                        key: "isSelfRedeemable",
                        get: function() {
                            return !(0, u.yE)(this.flags, y.NOT_SELF_REDEEMABLE)
                        }
                    }, {
                        key: "isExistingPremiumSubscriptionDisallowed",
                        get: function() {
                            return (0, u.yE)(this.flags, y.EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED)
                        }
                    }, {
                        key: "analyticsData",
                        get: function() {
                            return {
                                gift_code: this.code,
                                gift_code_max_uses: this.maxUses
                            }
                        }
                    }]);
                    return n
                }(o.Z)
        },
        630689: (e, t, n) => {
            "use strict";
            n.d(t, {
                NQ: () => x,
                HC: () => R,
                Db: () => M,
                fe: () => Y
            });
            var r = n(785893),
                i = n(667294),
                o = n(294184),
                u = n.n(o),
                a = n(248088),
                c = n(853158),
                l = n(311865),
                s = n(523846),
                f = n.n(s);

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function p(e, t, n, r, i, o, u) {
                try {
                    var a = e[o](u),
                        c = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(c) : Promise.resolve(c).then(r, i)
            }

            function h(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
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

            function v(e) {
                v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return v(e)
            }

            function m(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                });
                t && b(e, t)
            }

            function g(e, t) {
                return !t || "object" !== O(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function b(e, t) {
                b = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return b(e, t)
            }

            function E(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return d(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var O = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function S(e) {
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
                    var n, r = v(e);
                    if (t) {
                        var i = v(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return g(this, n)
                }
            }
            var w, _, A = function(e, t) {
                var n, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = u.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2];
                                            u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                o = t.call(e, u)
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
                        }([o, a])
                    }
                }
            };
            ! function(e) {
                e.NORMAL = "normal";
                e.SPEED_START = "speed_start";
                e.SPEED_LOOP = "speed_loop";
                e.FINISH = "finish";
                e.IDLE = "idle"
            }(w || (w = {}));
            var T, P, I = (y(_ = {}, w.NORMAL, {
                        BEG: 0,
                        END: 600,
                        shouldForcePlayAfter: !0
                    }),
                    y(_, w.SPEED_START, {
                        BEG: 601,
                        END: 636
                    }), y(_, w.SPEED_LOOP, {
                        BEG: 637,
                        END: 668
                    }), y(_, w.FINISH, {
                        BEG: 669,
                        END: 870
                    }), y(_, w.IDLE, {
                        BEG: 871,
                        END: 878
                    }), _),
                x = function(e) {
                    m(i, e);
                    var t = S(i);

                    function i() {
                        h(this, i);
                        return t.apply(this, arguments)
                    }
                    var o = i.prototype;
                    o.importDefault = function() {
                        return n.e(27608).then(n.t.bind(n, 445191, 19)).then((function(e) {
                            return e.default
                        }))
                    };
                    o.render = function() {
                        var e = this.props,
                            t = e.className,
                            n = e.nextScene,
                            i = e.onScenePlay,
                            o = e.onSceneComplete,
                            a = e.pause,
                            c = e.pauseWhileUnfocused;
                        return (0, r.jsx)(l.Z, {
                            className: u()(f().sequencedAnimation, t),
                            importData: this.importDefault,
                            nextScene: a ? w.IDLE : n,
                            sceneSegments: I,
                            onScenePlay: i,
                            onSceneComplete: o,
                            pauseWhileUnfocused: c,
                            pause: a
                        })
                    };
                    i.getNextScene = function(e) {
                        switch (e) {
                            case i.Scenes.SPEED_START:
                                return i.Scenes.SPEED_LOOP;
                            case i.Scenes.FINISH:
                                return i.Scenes.IDLE;
                            default:
                                return e
                        }
                    };
                    return i
                }(i.PureComponent);
            x.Scenes = w;
            ! function(e) {
                e.NORMAL = "normal";
                e.SPEED_START = "speed_start";
                e.SPEED_LOOP = "speed_loop";
                e.FINISH = "finish";
                e.IDLE = "idle"
            }(T || (T = {}));
            var D, C, N = (y(P = {}, T.NORMAL, {
                    BEG: 0,
                    END: 600,
                    shouldForcePlayAfter: !0
                }), y(P, T.SPEED_START, {
                    BEG: 601,
                    END: 636
                }), y(P, T.SPEED_LOOP, {
                    BEG: 637,
                    END: 668
                }), y(P, T.FINISH, {
                    BEG: 669,
                    END: 870
                }), y(P, T.IDLE, {
                    BEG: 871,
                    END: 878
                }), P),
                R = function(e) {
                    m(i, e);
                    var t = S(i);

                    function i() {
                        h(this, i);
                        return t.apply(this, arguments)
                    }
                    var o = i.prototype;
                    o.importDefault = function() {
                        return n.e(64849).then(n.t.bind(n, 909412, 19)).then((function(e) {
                            return e.default
                        }))
                    };
                    o.render = function() {
                        var e = this.props,
                            t = e.className,
                            n = e.nextScene,
                            i = e.onScenePlay,
                            o = e.onSceneComplete,
                            a = e.pause,
                            c = e.pauseWhileUnfocused;
                        return (0, r.jsx)(l.Z, {
                            className: u()(f().sequencedAnimation, t),
                            importData: this.importDefault,
                            nextScene: a ? T.IDLE : n,
                            sceneSegments: N,
                            onScenePlay: i,
                            onSceneComplete: o,
                            pauseWhileUnfocused: c,
                            pause: a
                        })
                    };
                    i.getNextScene = function(e) {
                        switch (e) {
                            case i.Scenes.SPEED_START:
                                return i.Scenes.SPEED_LOOP;
                            case i.Scenes.FINISH:
                                return i.Scenes.IDLE;
                            default:
                                return e
                        }
                    };
                    return i
                }(i.PureComponent);
            R.Scenes = T;
            ! function(e) {
                e.IDLE_ENTRY = "idle_entry";
                e.IDLE_LOOP = "idle_loop";
                e.BOOST_START = "boost_start";
                e.BOOST_LOOP = "boost_loop";
                e.BOOST_END = "boost_end";
                e.VICTORY = "victory";
                e.ERROR = "error"
            }(D || (D = {}));
            var j, L, U = (y(C = {}, D.IDLE_ENTRY, {
                    BEG: 0,
                    END: 50
                }), y(C, D.IDLE_LOOP, {
                    BEG: 50,
                    END: 230,
                    shouldForcePlayAfter: !0
                }), y(C, D.BOOST_START, {
                    BEG: 230,
                    END: 275
                }), y(C, D.BOOST_LOOP, {
                    BEG: 275,
                    END: 290
                }), y(C, D.BOOST_END, {
                    BEG: 386,
                    END: 455
                }), y(C, D.VICTORY, {
                    BEG: 470,
                    END: 525
                }), y(C, D.ERROR, {
                    BEG: 290,
                    END: 375
                }), C),
                k = function(e) {
                    m(n, e);
                    var t = S(n);

                    function n() {
                        h(this, n);
                        return t.apply(this, arguments)
                    }
                    var i = n.prototype;
                    i.getStyle = function(e) {
                        var t = this.props.animation;
                        return {
                            transform: [{
                                translateX: t.x.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: e ? ["100%", "0%"] : ["0%", "-100%"]
                                })
                            }, {
                                translateY: t.y.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["100%", "0%"]
                                })
                            }]
                        }
                    };
                    i.render = function() {
                        var e = this.props.className;
                        return (0, r.jsxs)("div", {
                            className: f().panningAnimation,
                            children: [(0, r.jsx)(c.Z.div, {
                                className: e,
                                style: this.getStyle(!1)
                            }), (0, r.jsx)(c.Z.div, {
                                className: e,
                                style: this.getStyle(!0)
                            })]
                        })
                    };
                    return n
                }(i.PureComponent),
                Z = Object.freeze({
                    IDLE_ENTRY: {
                        toValue: 1,
                        duration: 1500
                    },
                    IDLE_LOOP: {
                        toValue: 1,
                        duration: 6e3,
                        easing: c.Z.Easing.linear
                    },
                    BOOST_START: {
                        toValue: 0,
                        duration: 2e3,
                        delay: 500
                    },
                    ERROR: {
                        toValue: 1,
                        duration: 1500,
                        delay: 1e3
                    }
                }),
                F = 1.2,
                M = function(e) {
                    m(i, e);
                    var t = S(i);

                    function i() {
                        h(this, i);
                        var e;
                        (e = t.apply(this, arguments)).backgroundAnimation = new c.Z.ValueXY({
                            x: 0,
                            y: 0
                        });
                        e.foregroundAnimation = new c.Z.ValueXY({
                            x: 0,
                            y: 0
                        });
                        e.didUnmount = !1;
                        e.animateIdleLoopBackground = function() {
                            if (!e.didUnmount) {
                                e.backgroundAnimation.x.setValue(0);
                                c.Z.timing(e.backgroundAnimation.x, {
                                    toValue: Z.IDLE_LOOP.toValue,
                                    duration: Z.IDLE_LOOP.duration * F,
                                    easing: c.Z.Easing.linear
                                }).start(e.animateIdleLoopBackground)
                            }
                        };
                        e.animateIdleLoopForeground = function() {
                            if (!e.didUnmount) {
                                e.foregroundAnimation.x.setValue(0);
                                c.Z.timing(e.foregroundAnimation.x, {
                                    toValue: Z.IDLE_LOOP.toValue,
                                    duration: Z.IDLE_LOOP.duration,
                                    easing: Z.IDLE_LOOP.easing
                                }).start(e.animateIdleLoopForeground)
                            }
                        };
                        e.handleScenePlay = function(t) {
                            switch (t) {
                                case D.IDLE_ENTRY:
                                    e.animateIdleEntry();
                                    e.animateIdleLoop();
                                    break;
                                case D.ERROR:
                                    e.animateError();
                                    break;
                                case D.BOOST_START:
                                    e.animateBoostStart()
                            }
                            var n = e.props.onScenePlay;
                            null != n && n(t)
                        };
                        return e
                    }
                    var o = i.prototype;
                    o.componentWillUnmount = function() {
                        this.didUnmount = !0
                    };
                    o.importData = function() {
                        return n.e(56576).then(n.t.bind(n, 219177, 19)).then((function(e) {
                            return e.default
                        }))
                    };
                    o.animateEntry = function(e) {
                        c.Z.parallel([c.Z.timing(this.foregroundAnimation.y, {
                            toValue: e.toValue,
                            duration: e.duration,
                            delay: e.delay || 0
                        }), c.Z.timing(this.backgroundAnimation.y, {
                            toValue: e.toValue,
                            duration: e.duration * F,
                            delay: e.delay || 0
                        })]).start()
                    };
                    o.animateIdleEntry = function() {
                        this.animateEntry(Z.IDLE_ENTRY)
                    };
                    o.animateError = function() {
                        this.animateEntry(Z.ERROR)
                    };
                    o.animateIdleLoop = function() {
                        this.animateIdleLoopBackground();
                        this.animateIdleLoopForeground()
                    };
                    o.animateBoostStart = function() {
                        c.Z.parallel([c.Z.timing(this.foregroundAnimation.y, {
                            toValue: Z.BOOST_START.toValue,
                            duration: Z.BOOST_START.duration,
                            delay: Z.BOOST_START.delay
                        }), c.Z.timing(this.backgroundAnimation.y, {
                            toValue: Z.BOOST_START.toValue,
                            duration: Z.BOOST_START.duration * F,
                            delay: Z.BOOST_START.delay
                        })]).start()
                    };
                    o.render = function() {
                        var e = this.props,
                            t = e.className,
                            n = e.nextScene,
                            i = e.pause,
                            o = e.onSceneComplete;
                        return (0, r.jsxs)("div", {
                            className: u()(f().tier2Animation, t),
                            children: [i ? (0, r.jsx)(r.Fragment, {
                                children: (0, r.jsxs)("div", {
                                    className: f().panningAnimation,
                                    children: [(0, r.jsx)("div", {
                                        className: f().tier2Background
                                    }), (0, r.jsx)("div", {
                                        className: f().tier2Foreground
                                    })]
                                })
                            }) : (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(k, {
                                    className: f().tier2Background,
                                    animation: this.backgroundAnimation
                                }), (0, r.jsx)(k, {
                                    className: f().tier2Foreground,
                                    animation: this.foregroundAnimation
                                })]
                            }), (0, r.jsx)(l.Z, {
                                className: f().sequencedAnimation,
                                importData: this.importData,
                                nextScene: i ? D.IDLE_LOOP : n,
                                sceneSegments: U,
                                onScenePlay: this.handleScenePlay,
                                onSceneComplete: o,
                                pauseWhileUnfocused: !1,
                                pause: i
                            })]
                        })
                    };
                    i.getNextScene = function(e) {
                        switch (e) {
                            case i.Scenes.IDLE_ENTRY:
                                return i.Scenes.IDLE_LOOP;
                            case i.Scenes.BOOST_START:
                                return i.Scenes.BOOST_LOOP;
                            case i.Scenes.BOOST_END:
                                return i.Scenes.VICTORY;
                            case i.Scenes.VICTORY:
                                return i.Scenes.IDLE_ENTRY;
                            case i.Scenes.ERROR:
                                return i.Scenes.IDLE_LOOP;
                            default:
                                return e
                        }
                    };
                    return i
                }(i.PureComponent);
            M.Scenes = D;
            ! function(e) {
                e.ENTRY = "entry";
                e.IDLE = "idle";
                e.STARS = "stars";
                e.ERROR = "error";
                e.SUCCESS = "success"
            }(j || (j = {}));
            var V = (y(L = {}, j.ENTRY, {
                    BEG: 0,
                    END: 180
                }), y(L, j.IDLE, {
                    BEG: 180,
                    END: 360,
                    shouldForcePlayAfter: !0
                }), y(L, j.STARS, {
                    BEG: 180,
                    END: 360,
                    shouldForcePlayAfter: !0
                }), y(L, j.ERROR, {
                    BEG: 360,
                    END: 540
                }), y(L, j.SUCCESS, {
                    BEG: 540,
                    END: 778
                }), L),
                B = Object.freeze({
                    WHITE: "#ebf0f7",
                    PINK: "#fa6ef6"
                }),
                G = [{
                    left: 29,
                    top: 100,
                    color: B.WHITE
                }, {
                    left: 245,
                    top: 11,
                    color: B.PINK
                }, {
                    left: 393,
                    top: 22,
                    color: B.WHITE
                }, {
                    left: 74,
                    top: 30,
                    color: B.PINK
                }, {
                    left: 188,
                    top: 9,
                    color: B.WHITE
                }, {
                    left: 379,
                    top: 97,
                    color: B.PINK
                }],
                H = Object.freeze({
                    SCALE_INITIAL: 0,
                    SCALE_MIDDLE: 1,
                    SCALE_END: 0,
                    ROTATE_INITIAL: 0,
                    ROTATE_MIDDLE: 180,
                    ROTATE_END: 360,
                    DELAY_MIN: 200,
                    DELAY_MAX: 500,
                    DELAY_STAGGER: 200,
                    DURATION_MIDDLE: 400,
                    DURATION_END: 250,
                    SIZE_MIN: 7,
                    SIZE_MAX: 15,
                    EASING_MIDDLE: c.Z.Easing.bezier(.3, .01, 0, .99),
                    EASING_END: c.Z.Easing.bezier(0, -.01, .99, 0)
                });

            function z(e) {
                var t = e.animate,
                    n = E(i.useState(0), 2),
                    o = n[0],
                    u = n[1],
                    c = (0, a.useSprings)(G.length, G.map((function(e, n) {
                        var r, i, a = n > 0 ? H.DELAY_STAGGER * n + Math.random() * (H.DELAY_MAX - H.DELAY_MIN) + H.DELAY_MIN : 0,
                            c = Math.random() * (H.SIZE_MAX - H.SIZE_MIN) + H.SIZE_MIN;
                        return {
                            from: {
                                scale: H.SCALE_INITIAL,
                                rotate: H.ROTATE_INITIAL,
                                top: e.top,
                                left: e.left,
                                width: c,
                                height: c
                            },
                            to: (i = (r = function(e) {
                                return A(this, (function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return t ? [4, e({
                                                scale: H.SCALE_MIDDLE,
                                                rotate: H.ROTATE_MIDDLE,
                                                delay: a,
                                                config: {
                                                    duration: H.DURATION_MIDDLE,
                                                    easing: H.EASING_MIDDLE
                                                }
                                            })] : [3, 4];
                                        case 1:
                                            r.sent();
                                            return [4, e({
                                                scale: H.SCALE_END,
                                                rotate: H.ROTATE_END,
                                                config: {
                                                    duration: H.DURATION_END,
                                                    easing: H.EASING_END
                                                }
                                            })];
                                        case 2:
                                            r.sent();
                                            return [4, e({
                                                scale: H.SCALE_INITIAL,
                                                rotate: H.ROTATE_INITIAL,
                                                immediate: !0
                                            })];
                                        case 3:
                                            r.sent();
                                            n === G.length - 1 && u(o + 1);
                                            return [3, 6];
                                        case 4:
                                            return [4, e({
                                                scale: H.SCALE_INITIAL,
                                                rotate: H.ROTATE_INITIAL
                                            })];
                                        case 5:
                                            r.sent();
                                            r.label = 6;
                                        case 6:
                                            return [2]
                                    }
                                }))
                            }, function() {
                                var e = this,
                                    t = arguments;
                                return new Promise((function(n, i) {
                                    var o = r.apply(e, t);

                                    function u(e) {
                                        p(o, n, i, u, a, "next", e)
                                    }

                                    function a(e) {
                                        p(o, n, i, u, a, "throw", e)
                                    }
                                    u(void 0)
                                }))
                            }), function(e) {
                                return i.apply(this, arguments)
                            })
                        }
                    })));
                return (0, r.jsx)(r.Fragment, {
                    children: c.map((function(e, t) {
                        var n = G[t];
                        return (0, r.jsx)(a.animated.svg, {
                            style: e,
                            className: f().guildStar,
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 12.14 12.24",
                            children: (0, r.jsx)("path", {
                                d: "M5.62 10.22l-4 1.9a1.17 1.17 0 01-1.5-.5 1.7 1.7 0 010-1l1.9-4a.91.91 0 000-1l-1.9-4a1.14 1.14 0 01.5-1.5 1.39 1.39 0 01.9 0l4 1.9a.91.91 0 001 0l4-1.9a1.14 1.14 0 011.5.5 1.39 1.39 0 010 .9l-1.9 4a.91.91 0 000 1l1.9 4a1.17 1.17 0 01-.5 1.5 1.7 1.7 0 01-1 0l-4-1.9a1 1 0 00-.9.1z",
                                fill: n.color
                            })
                        }, t)
                    }))
                })
            }
            var Y = function(e) {
                m(i, e);
                var t = S(i);

                function i() {
                    h(this, i);
                    return t.apply(this, arguments)
                }
                var o = i.prototype;
                o.importData = function() {
                    return n.e(85789).then(n.t.bind(n, 632500, 19)).then((function(e) {
                        return e.default
                    }))
                };
                o.render = function() {
                    var e = this.props,
                        t = e.className,
                        n = e.nextScene,
                        i = e.pause,
                        o = e.onScenePlay,
                        a = e.onSceneComplete,
                        c = e.pauseWhileUnfocused;
                    return (0, r.jsxs)("div", {
                        className: u()(f().guildWrapper, t),
                        children: [(0, r.jsx)(l.Z, {
                            className: f().guildBackground,
                            importData: this.importData,
                            nextScene: i ? j.IDLE : n,
                            sceneSegments: V,
                            onScenePlay: o,
                            onSceneComplete: a,
                            pauseWhileUnfocused: c,
                            pause: i
                        }), (0, r.jsx)(z, {
                            animate: !i && n === j.STARS
                        })]
                    })
                };
                i.getNextScene = function(e) {
                    switch (e) {
                        case j.ENTRY:
                        case j.ERROR:
                        case j.SUCCESS:
                            return j.IDLE;
                        default:
                            return e
                    }
                };
                return i
            }(i.PureComponent);
            Y.Scenes = j
        },
        311865: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => T
            });
            var r = n(785893),
                i = n(667294),
                o = n(294184),
                u = n.n(o),
                a = n(202351),
                c = n(316878),
                l = n(901654),
                s = n(248080),
                f = n.n(s);

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function p(e, t, n, r, i, o, u) {
                try {
                    var a = e[o](u),
                        c = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(c) : Promise.resolve(c).then(r, i)
            }

            function h(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
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

            function v(e) {
                v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return v(e)
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

            function g(e, t) {
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

            function b(e, t) {
                return !t || "object" !== S(t) && "function" != typeof t ? function(e) {
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

            function O(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return d(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var S = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function w(e) {
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
                    var n, r = v(e);
                    if (t) {
                        var i = v(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return b(this, n)
                }
            }
            var _ = function(e, t) {
                    var n, r, i, o, u = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function a(o) {
                        return function(a) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; u;) try {
                                    if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                    (r = 0, i) && (o = [2 & o[0], i.value]);
                                    switch (o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            u.label++;
                                            return {
                                                value: o[1], done: !1
                                            };
                                        case 5:
                                            u.label++;
                                            r = o[1];
                                            o = [0];
                                            continue;
                                        case 7:
                                            o = u.ops.pop();
                                            u.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = u.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                u = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                u.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && u.label < i[1]) {
                                                u.label = i[1];
                                                i = o;
                                                break
                                            }
                                            if (i && u.label < i[2]) {
                                                u.label = i[2];
                                                u.ops.push(o);
                                                break
                                            }
                                            i[2] && u.ops.pop();
                                            u.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, u)
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
                            }([o, a])
                        }
                    }
                },
                A = function(e) {
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
                    }(i, e);
                    var t = w(i);

                    function i() {
                        h(this, i);
                        var e;
                        (e = t.apply(this, arguments)).animationRef = null;
                        e.currentScene = e.props.nextScene;
                        e.isUnmounted = !1;
                        e.handleLoopComplete = function() {
                            var t = e.props,
                                n = t.onSceneComplete,
                                r = t.nextScene;
                            null != n && n(e.currentScene);
                            e.playScene(r)
                        };
                        e.handleComplete = function() {
                            var t = e.props.onSceneComplete;
                            null != t && t(e.currentScene)
                        };
                        e.handleSetRef = function(t) {
                            e.animationRef = t;
                            var n = e.props.animationRef;
                            null != n && n(t)
                        };
                        return e
                    }
                    var o = i.prototype;
                    o.componentDidMount = function() {
                        var e, t = this;
                        return (e = function() {
                            var e, r, i, o, u, a, c, l, s, f, d;
                            return _(this, (function(p) {
                                switch (p.label) {
                                    case 0:
                                        e = t.props, r = e.importData, i = e.nextScene, o = e.pauseWhileUnfocused, u = e.pause, a = e.isWindowFocused, c = e.useReducedMotion;
                                        return [4, Promise.all([r(), n.e(11248).then(n.t.bind(n, 211248, 23))])];
                                    case 1:
                                        l = O.apply(void 0, [p.sent(), 2]), s = l[0], f = l[1], d = f.default;
                                        if (null == t.animationRef) return [2];
                                        t.animation = d.loadAnimation({
                                            container: t.animationRef,
                                            renderer: "svg",
                                            loop: !0,
                                            autoplay: !0,
                                            animationData: s
                                        });
                                        t.animation.addEventListener("loopComplete", t.handleLoopComplete);
                                        t.animation.addEventListener("complete", t.handleComplete);
                                        t.playScene(i);
                                        (o && !a || u || c) && t.animation.pause();
                                        return [2]
                                }
                            }))
                        }, function() {
                            var t = this,
                                n = arguments;
                            return new Promise((function(r, i) {
                                var o = e.apply(t, n);

                                function u(e) {
                                    p(o, r, i, u, a, "next", e)
                                }

                                function a(e) {
                                    p(o, r, i, u, a, "throw", e)
                                }
                                u(void 0)
                            }))
                        })()
                    };
                    o.componentWillUnmount = function() {
                        this.isUnmounted = !0;
                        if (null != this.animation) {
                            this.animation.destroy();
                            this.animation = void 0
                        }
                    };
                    o.componentDidUpdate = function(e) {
                        var t = this.props,
                            n = t.nextScene,
                            r = t.pauseWhileUnfocused,
                            i = t.pause,
                            o = t.isWindowFocused,
                            u = t.useReducedMotion;
                        n !== this.currentScene && this.shouldForcePlayAfter() && !i && this.playScene(n);
                        null != this.animation && (r && !e.isWindowFocused && o && !u && !0 !== i ? this.animation.play() : (u || r && e.isWindowFocused && !o) && this.animation.pause());
                        if (!e.pause && i) {
                            var a;
                            null === (a = this.animation) || void 0 === a || a.pause()
                        } else if (e.pause && !i && !u) {
                            var c;
                            null === (c = this.animation) || void 0 === c || c.play()
                        }
                        if (e.nextScene !== n && i) {
                            var l;
                            this.playScene(n);
                            null === (l = this.animation) || void 0 === l || l.pause()
                        }
                    };
                    o.shouldForcePlayAfter = function() {
                        return !0 === this.props.sceneSegments[this.currentScene].shouldForcePlayAfter
                    };
                    o.playScene = function(e) {
                        if (!this.isUnmounted) {
                            var t = this.props,
                                n = t.onScenePlay,
                                r = t.sceneSegments,
                                i = t.useReducedMotion,
                                o = r[e],
                                u = r[this.currentScene];
                            null == this.animation || e !== this.currentScene && o.BEG === u.BEG && o.END === u.END || this.animation.playSegments([o.BEG, o.END], !0);
                            this.currentScene = e;
                            null != n && n(this.currentScene);
                            if (i) {
                                var a;
                                null === (a = this.animation) || void 0 === a || a.pause()
                            }
                        }
                    };
                    o.render = function() {
                        return (0, r.jsx)("div", {
                            ref: this.handleSetRef,
                            className: u()(this.props.className, f().wrapper)
                        })
                    };
                    return i
                }(i.PureComponent);
            A.defaultProps = {
                pauseWhileUnfocused: !0,
                pause: !1
            };
            const T = function(e) {
                var t = e.componentRef,
                    n = g(e, ["componentRef"]),
                    i = (0, a.e7)([l.Z], (function() {
                        return l.Z.isFocused()
                    })),
                    o = (0, a.e7)([c.Z], (function() {
                        return c.Z.useReducedMotion
                    }));
                return (0, r.jsx)(A, m(function(e) {
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
                }({}, n), {
                    isWindowFocused: i,
                    useReducedMotion: o,
                    ref: t
                }))
            }
        },
        771966: (e, t, n) => {
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

            function a(e, t) {
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
                    p = a(e, ["width", "height", "color", "foreground"]);
                return (0,
                    r.jsx)("svg", u(function(e) {
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
                        d: "M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515 22 12C22 6.487 17.514 2 12 2ZM12 18.25C11.31 18.25 10.75 17.691 10.75 17C10.75 16.31 11.31 15.75 12 15.75C12.69 15.75 13.25 16.31 13.25 17C13.25 17.691 12.69 18.25 12 18.25ZM13 13.875V15H11V12H12C13.104 12 14 11.103 14 10C14 8.896 13.104 8 12 8C10.896 8 10 8.896 10 10H8C8 7.795 9.795 6 12 6C14.205 6 16 7.795 16 10C16 11.861 14.723 13.429 13 13.875Z"
                    })
                }))
            }
        },
        413297: (e, t, n) => {
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

            function a(e, t) {
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
                    p = a(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsxs)("svg", u(function(e) {
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
                }({
                    viewBox: "0 0 24 24"
                }, (0, i.Z)(p)), {
                    width: n,
                    height: l,
                    children: [(0, r.jsx)("path", {
                        fill: f,
                        className: d,
                        d: "M9.09091 12C9.09091 13.5786 10.3935 14.8571 12 14.8571C13.6065 14.8571 14.9091 13.5786 14.9091 12C14.9091 10.4214 13.6065 9.14286 12 9.14286C10.3935 9.14286 9.09091 10.4214 9.09091 12ZM13.3402 12C13.3402 12.789 12.689 13.4286 11.8857 13.4286C11.0823 13.4286 10.4311 12.789 10.4311 12C10.4311 11.211 11.0823 10.5714 11.8857 10.5714C12.689 10.5714 13.3402 11.211 13.3402 12Z"
                    }), (0,
                        r.jsx)("path", {
                        fill: f,
                        className: d,
                        d: "M4 2C2.89543 2 2 2.89543 2 4V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V4C22 2.89543 21.1046 2 20 2H4ZM4 12C4 12 7.38036 7 12 7C16.6196 7 20 12 20 12C20 12 16.6196 17 12 17C7.38036 17 4 12 4 12Z"
                    })]
                }))
            }
        },
        585798: (e, t, n) => {
            "use strict";
            n.d(t, {
                Ox: () => P,
                QP: () => w,
                q4: () => I,
                ob: () => x
            });
            var r = n(785893),
                i = n(667294),
                o = n(873955),
                u = n.n(o),
                a = n(494537),
                c = n(588983),
                l = n(38736),
                s = n(142643),
                f = n(882723),
                d = n(241166),
                p = n(421281),
                h = n(329543),
                y = n(664868),
                v = n.n(y);

            function m(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function g(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function b(e, t) {
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

            function E(e) {
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
            var O, S = (0, p.Mg)(s.Z.FULL_SCREEN_LAYER_ANIMATION_DURATION);
            ! function(e) {
                e[e.ENTERING = 1] = "ENTERING";
                e[e.ENTERED = 2] = "ENTERED";
                e[e.EXITING = 3] = "EXITING";
                e[e.EXITED = 4] = "EXITED"
            }(O || (O = {}));
            var w = (0, l.Z)((function(e) {
                return {
                    fullScreenLayers: [],
                    addLayer: function(t) {
                        return e((function(e) {
                            return {
                                fullScreenLayers: E(e.fullScreenLayers).concat([t])
                            }
                        }))
                    }
                }
            }));

            function _(e) {
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
                                x(e)
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
                        className: v().root,
                        ref: n,
                        children: [(0, r.jsx)("div", {
                            className: v().drag
                        }), t.render({
                            transitionState: null != t ? t.transitionState : O.EXITING,
                            closeLayer: function() {
                                return x(t.key)
                            }
                        })]
                    })
                })
            }
            var A = {
                    enter: v().enter,
                    enterActive: v().enterActive,
                    enterDone: v().enterDone,
                    exit: v().exit,
                    exitActive: v().exitActive,
                    exitDone: v().exitDone
                },
                T = {
                    enter: v().enterReducedMotion,
                    enterActive: v().enterActiveReducedMotion,
                    enterDone: v().enterDoneReducedMotion,
                    exit: v().exitReducedMotion,
                    exitActive: v().exitActiveReducedMotion,
                    exitDone: v().exitDoneReducedMotion
                };

            function P() {
                var e = i.useContext(f.AccessibilityPreferencesContext).reducedMotion.enabled ? T : A,
                    t = w((function(e) {
                        return e.fullScreenLayers
                    }));
                return (0, r.jsx)(a.Z, {
                    children: t.map((function(n) {
                        return (0, r.jsx)(c.Z, {
                            classNames: e,
                            timeout: S,
                            onEntered: function() {
                                w.setState({
                                    fullScreenLayers: t.map((function(e) {
                                        return e.key === n.key ? b(function(e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var n = null != arguments[t] ? arguments[t] : {},
                                                    r = Object.keys(n);
                                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                                }))));
                                                r.forEach((function(t) {
                                                    g(e, t, n[t])
                                                }))
                                            }
                                            return e
                                        }({}, e), {
                                            transitionState: O.ENTERED
                                        }) : e
                                    }))
                                })
                            },
                            unmountOnExit: !0,
                            children: (0, r.jsx)(_, {
                                item: n
                            })
                        }, n.key)
                    }))
                })
            }

            function I(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
                    n = t.layerKey,
                    r = t.Layer,
                    i = null != n ? n : u()();
                w.setState((function(t) {
                    return {
                        fullScreenLayers: E(t.fullScreenLayers).concat([{
                            key: i,
                            transitionState: O.ENTERING,
                            LayerComponent: null != r ? r : h.ZP,
                            render: e
                        }])
                    }
                }));
                return i
            }

            function x(e) {
                w.setState((function(t) {
                    return {
                        fullScreenLayers: t.fullScreenLayers.filter((function(t) {
                            return t.key !== e
                        }))
                    }
                }))
            }
        },
        34225: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => v
            });
            var r = n(785893),
                i = n(667294),
                o = n(294184),
                u = n.n(o),
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

            function f(e) {
                var t = e.width,
                    n = void 0 === t ? 8 : t,
                    i = e.height,
                    o = void 0 === i ? 13 : i,
                    u = e.color,
                    f = void 0 === u ? "currentColor" : u,
                    d = e.foreground,
                    p = s(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", l(function(e) {
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
                }({}, (0, a.Z)(p)), {
                    width: n,
                    height: o,
                    viewBox: "0 0 8 13",
                    children: (0, r.jsx)("path", {
                        className: null != d ? d : void 0,
                        stroke: f,
                        fill: "transparent",
                        d: "M8.16639 0.5H9C10.933 0.5 12.5 2.067 12.5 4V9C12.5 10.933 10.933 12.5 9 12.5H8.16639C7.23921 12.5 6.34992 12.1321 5.69373 11.4771L0.707739 6.5L5.69373 1.52292C6.34992 0.86789 7.23921 0.5 8.16639 0.5Z"
                    })
                }))
            }
            var d = n(473708),
                p = n(192834),
                h = n.n(p);

            function y(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            const v = i.forwardRef((function(e, t) {
                var n, i = e.className,
                    o = e.contentClassName,
                    a = e.isUnread,
                    c = e.children,
                    l = e.id,
                    s = e.role,
                    p = e["aria-label"];
                return (0, r.jsxs)("div", {
                    className: u()(i, (n = {}, y(n, h().divider, !0), y(n, h().isUnread, a), y(n, h().hasContent, null != c), n)),
                    ref: t,
                    id: l,
                    role: s,
                    "aria-label": p,
                    children: [null != c ? (0, r.jsx)("span", {
                        className: u()(h().content, o),
                        children: c
                    }) : null, a ? (0, r.jsxs)("span", {
                        className: h().unreadPill,
                        children: [(0, r.jsx)(f, {
                            foreground: h().unreadPillCapStroke,
                            className: h().unreadPillCap
                        }), d.Z.Messages.NEW]
                    }) : null]
                })
            }))
        },
        507965: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p
            });
            var r = n(785893),
                i = n(667294),
                o = n(652411);

            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function a(e, t, n) {
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
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return u(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var s = [n(577660)],
                f = ["#FFFFFF"],
                d = {
                    velocity: {
                        type: "static-random",
                        minValue: {
                            x: 0,
                            y: 1
                        },
                        maxValue: {
                            x: 3,
                            y: 3
                        }
                    },
                    rotation: {
                        type: "linear-random",
                        minValue: {
                            x: 0,
                            y: 0,
                            z: 0
                        },
                        maxValue: {
                            x: 0,
                            y: 0,
                            z: 360
                        },
                        minAddValue: {
                            x: 0,
                            y: 0,
                            z: -5
                        },
                        maxAddValue: {
                            x: 0,
                            y: 0,
                            z: 5
                        }
                    },
                    size: {
                        type: "static-random",
                        minValue: 2,
                        maxValue: 6
                    },
                    dragCoefficient: {
                        type: "static",
                        value: {
                            x: .05,
                            y: .05
                        }
                    },
                    opacity: {
                        type: "static",
                        value: .3
                    }
                };

            function p(e) {
                var t = e.className,
                    n = e.firing,
                    u = void 0 === n || n,
                    p = e.wind,
                    h = void 0 === p ? 2 : p,
                    y = l(i.useState(null), 2),
                    v = y[0],
                    m = y[1],
                    g = l(i.useState(null), 2),
                    b = g[0],
                    E = g[1],
                    O = (0, o.uR)(b, v),
                    S = i.useMemo((function() {
                        return new o.qA({
                            wind: h
                        })
                    }), [h]),
                    w = i.useCallback((function() {
                        var e = null == b ? void 0 : b.getCanvas();
                        if (null != e) {
                            var t = e.getBoundingClientRect();
                            O.createConfetti(c(function(e) {
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
                            }({}, d), {
                                position: {
                                    type: "static-random",
                                    minValue: {
                                        x: -t.width / 2,
                                        y: -6
                                    },
                                    maxValue: {
                                        x: t.width,
                                        y: -6
                                    }
                                }
                            }))
                        }
                    }), [O, b]);
                i.useEffect((function() {
                    var e = u ? setInterval(w, 16.666666666666668) : null;
                    return function() {
                        return clearInterval(e)
                    }
                }), [u, w]);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(o.O_, {
                        ref: E,
                        className: t,
                        environment: S
                    }), (0,
                        r.jsx)(o.Ji, {
                        ref: m,
                        colors: f,
                        sprites: s,
                        spriteWidth: 6,
                        spriteHeight: 6
                    })]
                })
            }
        },
        691797: (e, t, n) => {
            "use strict";
            n.d(t, {
                wS: () => u,
                JG: () => a
            });
            var r = n(482507),
                i = n(120415),
                o = n(310126),
                u = function() {
                    if (i.FB) return null != o.ZP.copy;
                    try {
                        return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                    } catch (e) {
                        return !1
                    }
                }();

            function a(e) {
                if (!u) return !1;
                if (i.FB) {
                    o.ZP.copy(e);
                    return !0
                }
                return r.J(e)
            }
        },
        254631: (e, t, n) => {
            "use strict";
            n.d(t, {
                s: () => r,
                Z: () => s
            });
            var r, i = n(247346);

            function o(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function u(e) {
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
            }! function(e) {
                e.UPDATE_COLUMN_COUNTS = "UPDATE_COLUMN_COUNTS";
                e.SET_FOCUSED_POSITION = "SET_FOCUSED_POSITION"
            }(r || (r = {}));

            function c(e, t) {
                return Number.isNaN(e) ? t : Number.isNaN(t) ? e : Math.max(e, t)
            }

            function l(e, t) {
                return Number.isNaN(e) ? t : Number.isNaN(t) ? e : Math.min(e, t)
            }

            function s(e, t) {
                switch (t.type) {
                    case i.Us.NAVIGATE_UP:
                        return function(e, t) {
                            var n = c(0, e.focusedY - 1);
                            return a(u({}, e), {
                                focusedX: l(e.columnCounts[n] - 1, e.focusedX),
                                focusedY: n
                            })
                        }(e);
                    case i.Us.NAVIGATE_DOWN:
                        return function(e, t) {
                            var n = l(e.focusedY + 1, e.columnCounts.length - 1);
                            return a(u({}, e), {
                                focusedX: l(e.columnCounts[n] - 1, e.focusedX),
                                focusedY: n
                            })
                        }(e);
                    case i.Us.NAVIGATE_RIGHT:
                        return function(e, t) {
                            var n = !(e.focusedY === e.columnCounts.length - 1) && e.focusedX + 1 === e.columnCounts[e.focusedY],
                                r = n ? 0 : l(e.focusedX + 1, e.columnCounts[e.focusedY] - 1),
                                i = n ? e.focusedY + 1 : e.focusedY;
                            return a(u({}, e), {
                                focusedX: r,
                                focusedY: i
                            })
                        }(e);
                    case i.Us.NAVIGATE_LEFT:
                        return function(e, t) {
                            var n = !(0 === e.focusedY) && 0 === e.focusedX,
                                r = n ? e.focusedY - 1 : e.focusedY,
                                i = n ? e.columnCounts[r] - 1 : c(0, e.focusedX - 1);
                            return a(u({}, e), {
                                focusedX: i,
                                focusedY: r
                            })
                        }(e);
                    case i.Us.NAVIGATE_INLINE_START:
                        return function(e, t) {
                            return a(u({}, e), {
                                focusedX: 0
                            })
                        }(e);
                    case i.Us.NAVIGATE_INLINE_END:
                        return function(e, t) {
                            return a(u({}, e), {
                                focusedX: e.columnCounts[e.focusedY] - 1
                            })
                        }(e);
                    case i.Us.NAVIGATE_START:
                        return function(e, t) {
                            return a(u({}, e), {
                                focusedX: 0,
                                focusedY: 0
                            })
                        }(e);
                    case i.Us.NAVIGATE_END:
                        return function(e, t) {
                            var n = e.columnCounts.length - 1;
                            return a(u({}, e), {
                                focusedX: e.columnCounts[n] - 1,
                                focusedY: n
                            })
                        }(e);
                    case r.UPDATE_COLUMN_COUNTS:
                        return function(e, t) {
                            var n = t.columnCounts,
                                r = l(c(0, n.length - 1), e.focusedY);
                            return a(u({}, e), {
                                columnCounts: n,
                                focusedX: l(null == n[r] ? 0 : n[r] - 1, e.focusedX),
                                focusedY: r
                            })
                        }(e, t);
                    case r.SET_FOCUSED_POSITION:
                        return function(e, t) {
                            var n = t.x,
                                r = c(0, l(t.y, e.columnCounts.length - 1));
                            return a(u({}, e), {
                                focusedX: c(0, l(n, e.columnCounts[r] - 1)),
                                focusedY: r
                            })
                        }(e, t);
                    case i.Us.SELECT_FOCUSED_ITEM:
                        return e;
                    default:
                        console.warn("Grid navigator was given an unhandled action ".concat(t.type))
                }
                return e
            }
        },
        628518: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => y
            });
            var r = n(667294),
                i = n(254631),
                o = n(247346),
                u = n(707558);

            function a(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function c(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || s(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function l(e) {
                return function(e) {
                    if (Array.isArray(e)) return a(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || s(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function s(e, t) {
                if (e) {
                    if ("string" == typeof e) return a(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(e, t) : void 0
                }
            }
            var f = [o.R8.TAB];

            function d(e, t, n) {
                return null != t && null != n ? "#".concat((0,
                    u.NE)(e, t, n)) : "[data-ref-id=".concat(e, "]")
            }

            function p(e) {
                return document.querySelector(e)
            }

            function h(e) {
                var t, n = e.navId,
                    a = e.columnCounts,
                    s = e.focusedX,
                    h = e.focusedY,
                    y = e.onSelect,
                    v = e.prepareFocus,
                    m = e.getNewFocusPosition,
                    g = e.dispatch,
                    b = e.maintainFocusPosition,
                    E = e.enabled,
                    O = e.autoFocusElement,
                    S = e.useVirtualFocus,
                    w = r.useRef();
                w.current = E;
                var _ = p(d(n, s, h)),
                    A = c(r.useState(!1), 2),
                    T = A[0],
                    P = A[1],
                    I = c(r.useState(!1), 2),
                    x = I[0],
                    D = I[1],
                    C = c(r.useState(!1), 2),
                    N = C[0],
                    R = C[1],
                    j = c(r.useState((function() {
                        return new u.$o((function(e) {
                            var t = c(e.split(",").map(Number), 2),
                                n = t[0],
                                r = t[1];
                            return function() {
                                P(!0);
                                g({
                                    type: i.s.SET_FOCUSED_POSITION,
                                    x: n,
                                    y: r
                                })
                            }
                        }))
                    })), 1),
                    L = j[0];
                r.useEffect((function() {
                    return function() {
                        return L.clean()
                    }
                }), [L]);
                var U = r.useCallback((function(e) {
                        if (!w.current || !O) return !1;
                        e.focus()
                    }), [O]),
                    k = r.useCallback((function(e, t) {
                        var r = d(n, e, t);
                        (null != v ? v(e, t, r) : Promise.resolve()).then((function() {
                            var e = p(r);
                            if (null != e) {
                                U(e);
                                D(!1)
                            } else requestAnimationFrame((function() {
                                return D(!0)
                            }))
                        }))
                    }), [n, v, U]),
                    Z = r.useCallback((function() {
                        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                            t = c(null != m ? m(s, h) : [s, h], 2),
                            r = t[0],
                            o = t[1];
                        if (r !== s || o !== h) {
                            g({
                                type: i.s.SET_FOCUSED_POSITION,
                                x: r,
                                y: o
                            });
                            if (!e) {
                                R(!0);
                                return
                            }
                        }
                        var u = p(d(n, r, o));
                        if (null != u) {
                            R(!0);
                            U(u)
                        }
                    }), [g, s, h, m, n, U]),
                    F = c(r.useState(!1), 2),
                    M = F[0],
                    V = F[1];
                r.useEffect((function() {
                    if (M && T) {
                        V(!1);
                        var e = p(d(n, s, h));
                        if (null == e) {
                            P(!1);
                            var t = p(d(n));
                            null != t && U(t)
                        } else U(e)
                    }
                }), [n, M, T, U, s, h]);
                var B = r.useCallback((function(e) {
                    w.current && null == e && V(!0)
                }), []);
                r.useEffect((function() {
                    if (T && x && null != _) {
                        U(_);
                        D(!1)
                    }
                }), [x, _]);
                r.useEffect((function() {
                    if (T) {
                        N || k(s, h);
                        R(!1)
                    }
                }), [s, h]);
                var G = r.useCallback((function(e) {
                        if (w.current)
                            if (S || !f.includes(e.key) || e.shiftKey || e.altKey || e.metaKey || e.ctrlKey || e.currentTarget !== e.target) {
                                var t, n = function(e) {
                                    switch (e.key) {
                                        case o.R8.ENTER:
                                            return o.Us.SELECT_FOCUSED_ITEM;
                                        case o.R8.UP:
                                            return o.Us.NAVIGATE_UP;
                                        case o.R8.DOWN:
                                            return o.Us.NAVIGATE_DOWN;
                                        case o.R8.RIGHT:
                                            return o.Us.NAVIGATE_RIGHT;
                                        case o.R8.LEFT:
                                            return o.Us.NAVIGATE_LEFT;
                                        case o.R8.HOME:
                                            return e.ctrlKey ? o.Us.NAVIGATE_START : o.Us.NAVIGATE_INLINE_START;
                                        case o.R8.END:
                                            return e.ctrlKey ? o.Us.NAVIGATE_END : o.Us.NAVIGATE_INLINE_END
                                    }
                                }(e);
                                switch (n) {
                                    case o.Us.NAVIGATE_UP:
                                    case o.Us.NAVIGATE_DOWN:
                                    case o.Us.NAVIGATE_RIGHT:
                                    case o.Us.NAVIGATE_LEFT:
                                    case o.Us.NAVIGATE_INLINE_START:
                                    case o.Us.NAVIGATE_INLINE_END:
                                    case o.Us.NAVIGATE_START:
                                    case o.Us.NAVIGATE_END:
                                        if (!(0 === a.length || 0 === s && 0 === h && n === o.Us.NAVIGATE_LEFT)) {
                                            e.preventDefault();
                                            e.stopPropagation()
                                        }
                                        g({
                                            type: n
                                        });
                                        return;
                                    case o.Us.SELECT_FOCUSED_ITEM:
                                        if (O && !(t = _, (null == t ? void 0 : t.ownerDocument.activeElement) === t)) return;
                                        if (e.repeat) return;
                                        e.preventDefault();
                                        e.stopPropagation();
                                        g({
                                            type: n
                                        });
                                        null != y ? y(s, h, e) : null != _ && _.click()
                                }
                            } else {
                                e.preventDefault();
                                e.stopPropagation();
                                Z()
                            }
                    }), [Z, g, O, _, y, s, h]),
                    H = r.useCallback((function(e) {
                        if (e.currentTarget !== e.target) {
                            if (!T) {
                                P(!0);
                                R(!0)
                            }
                            return !1
                        }
                        if (T) {
                            Z(!1);
                            return !1
                        }
                        b && null != _ ? k(s, h) : Z(!0)
                    }), [T, b, _, Z, k, s, h]),
                    z = r.useCallback((function(e) {
                        if (e.target !== e.currentTarget) {
                            if (e.currentTarget.contains(e.relatedTarget)) return !1;
                            P(!1)
                        }
                    }), []),
                    Y = r.useMemo((function() {
                        return (t = Math).max.apply(t, l(a))
                    }), [a]),
                    W = r.useCallback((function() {
                        return {
                            role: "grid",
                            "aria-rowcount": a.length,
                            "aria-colcount": Y,
                            tabIndex: T && b ? -1 : 0,
                            "data-ref-id": n,
                            onKeyDown: G,
                            onFocus: H,
                            onBlur: z
                        }
                    }), [a.length, Y, T, b, n, G, H, z]),
                    X = r.useCallback((function(e, t) {
                        var r = {
                            role: "gridcell",
                            "aria-rowindex": t + 1,
                            "aria-colindex": e + 1,
                            id: (0, u.NE)(n, e, t),
                            tabIndex: b && e === s && t === h ? 0 : -1,
                            onFocus: L.get("".concat(e, ",").concat(t))
                        };
                        e === s && t === h && (r.ref = B);
                        return r
                    }), [n, b, s, h, L, B]),
                    K = r.useCallback((function(e) {
                        return {
                            role: "row",
                            "aria-rowindex": e + 1
                        }
                    }), []);
                return r.useMemo((function() {
                    return {
                        dispatch: g,
                        getContainerProps: W,
                        getItemProps: X,
                        getRowProps: K
                    }
                }), [g, W, X, K])
            }

            function y(e) {
                var t = e.navId,
                    n = e.columnCounts,
                    o = e.focusedX,
                    a = void 0 === o ? 0 : o,
                    l = e.focusedY,
                    s = void 0 === l ? 0 : l,
                    f = e.onSelect,
                    d = e.prepareFocus,
                    p = e.getNewFocusPosition,
                    y = e.maintainFocusPosition,
                    v = void 0 === y || y,
                    m = e.enabled,
                    g = void 0 === m || m,
                    b = e.onDispatch,
                    E = e.autoFocusElement,
                    O = void 0 === E || E,
                    S = e.useVirtualFocus,
                    w = void 0 !== S && S,
                    _ = r.useCallback((function(e, t) {
                        var n = (0, i.Z)(e, t);
                        null != b && b(e, n, t);
                        return n
                    }), [b]),
                    A = c(r.useReducer(_, {
                        focusedX: a,
                        focusedY: s,
                        columnCounts: n
                    }), 2),
                    T = A[0],
                    P = A[1],
                    I = T.columnCounts,
                    x = T.focusedX,
                    D = T.focusedY,
                    C = c(r.useState((function() {
                        return (0, u.P2)(P, 16)
                    })), 1)[0];
                r.useEffect((function() {
                    P({
                        type: i.s.UPDATE_COLUMN_COUNTS,
                        columnCounts: n
                    })
                }), [n]);
                return h({
                    navId: t,
                    columnCounts: I,
                    focusedX: x,
                    focusedY: D,
                    dispatch: C,
                    onSelect: f,
                    prepareFocus: d,
                    getNewFocusPosition: p,
                    maintainFocusPosition: v,
                    enabled: g,
                    autoFocusElement: O,
                    useVirtualFocus: w
                })
            }
        },
        482507: (e, t, n) => {
            "use strict";
            n.d(t, {
                J: () => r
            });

            function r(e) {
                var t = document.body;
                if (null == t) throw new Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                var n = document.createRange(),
                    r = window.getSelection(),
                    i = document.createElement("textarea");
                i.value = e;
                i.contentEditable = "true";
                i.style.visibility = "none";
                t.appendChild(i);
                n.selectNodeContents(i);
                null == r || r.removeAllRanges();
                null == r || r.addRange(n);
                i.focus();
                i.setSelectionRange(0, e.length);
                var o = document.execCommand("copy");
                t.removeChild(i);
                return o
            }
        },
        938002: (e, t, n) => {
            "use strict";
            n.d(t, {
                Y: () => r
            });

            function r() {
                var e = Promise.resolve(null);
                return function(t) {
                    return new Promise((function(n, r) {
                        e = e.then(t).then(n, r)
                    }))
                }
            }
        },
        125333: (e, t, n) => {
            "use strict";
            n.d(t, {
                z0: () => r,
                Oh: () => i,
                Gk: () => o
            });

            function r(e) {
                return "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.INVITE_HOST, "/").concat(e)
            }

            function i(e) {
                return "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST, "/").concat(e)
            }

            function o() {
                return "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT, "/channels/@me")
            }
        },
        58964: (e, t, n) => {
            "use strict";
            n.d(t, {
                ZP: () => h,
                WS: () => d,
                zS: () => p
            });
            var r = n(131795),
                i = n.n(r),
                o = n(468811),
                u = n.n(o);
            const a = n(426080).Z;

            function c(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
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

            function s(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return c(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var f = "https://discordapp.page.link";

            function d() {
                return u().v4()
            }

            function p(e) {
                if (!e.startsWith(f)) return null;
                try {
                    var t = new URL(e).searchParams,
                        n = t.get("link");
                    if (null == n) return null;
                    var r, i = decodeURIComponent(n),
                        o = new URL(i).searchParams,
                        u = {
                            utmSource: null !== (r = t.get("utm_source")) && void 0 !== r ? r : void 0
                        },
                        a = !0,
                        c = !1,
                        l = void 0;
                    try {
                        for (var d, p = o.entries()[Symbol.iterator](); !(a = (d = p.next()).done); a = !0) {
                            var h = s(d.value, 2),
                                y = h[0],
                                v = h[1];
                            u[y] = v
                        }
                    } catch (e) {
                        c = !0;
                        l = e
                    } finally {
                        try {
                            a || null == p.return || p.return()
                        } finally {
                            if (c) throw l
                        }
                    }
                    return u
                } catch (e) {
                    return null
                }
            }

            function h(e, t) {
                var n = t.utmSource,
                    r = t.androidFallbackLink,
                    o = t.iosFallbackLink,
                    u = l(t, ["utmSource", "androidFallbackLink", "iosFallbackLink"]),
                    c = new URL(e);
                for (var s in u) {
                    var d = u[s];
                    null != d && c.searchParams.set(s, d)
                }
                var p, h, y, v, m, g = encodeURIComponent(c.toString()),
                    b = encodeURIComponent(a()),
                    E = (y = new RegExp("(".concat(["WebView", "(iPhone|iPod|iPad)(?!.*Safari/)"].join("|"), ")"), "ig"), v = null != (null === i() || void 0 === i() || null === (p = i().ua) || void 0 === p ? void 0 : p.match(y)), m = "Safari" === (null === i() || void 0 === i() ? void 0 : i().name) && !v,
                        "iOS" !== (null === i() || void 0 === i() || null === (h = i().os) || void 0 === h ? void 0 : h.family) || m ? 1 : 0),
                    O = null != r ? encodeURIComponent(r) : null,
                    S = null != o ? encodeURIComponent(o) : null,
                    w = "".concat(f, "/?link=").concat(g, "&utm_source=").concat(n, "&apn=").concat("com.discord", "&isi=").concat(985746746, "&ibi=").concat("com.hammerandchisel.discord", "&sd=").concat(b, "&efr=").concat(E);
                null != O && (w += "&afl=".concat(O));
                null != S && (w += "&ifl=".concat(S));
                return w
            }
        },
        426080: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var r = n(805829);

            function i() {
                return r.Z.Messages.DynamicLinks.IOS_APP_PREVIEW_DESCRIPTION
            }
        },
        222789: (e, t, n) => {
            "use strict";
            n.d(t, {
                Rp: () => c,
                ge: () => o,
                RA: () => a
            });

            function r(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                Array.isArray(e) ? e.forEach((function(e) {
                    return r(e, t)
                })) : "string" == typeof e.content ? t.push(e.content) : null != e.content && r(e.content, t);
                return t
            }

            function i(e, t) {
                if (Array.isArray(t))
                    for (var n = t.length, r = 0; r < n; r++) e.push(t[r]);
                else e.push(t)
            }

            function o(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (Array.isArray(e)) {
                    for (var n = e.length, r = [], u = 0; u < n; u++) i(r, o(e[u], t));
                    return r
                }
                null != e.content && (e.content = o(e.content, e));
                return null != t && e.type === t.type ? e.content : e
            }
            var u = {};

            function a(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    limit: 200
                };
                if (Array.isArray(e))
                    for (var n = e.length, r = 0; r < n; r++) {
                        var i = a(e[r], t);
                        if (i === u) {
                            e.length = r;
                            break
                        }
                        e[r] = i
                    } else if ("text" !== e.type) {
                        t.limit -= 1;
                        if (t.limit <= 0) return u;
                        Array.isArray(e.content) && (e.content = a(e.content, t))
                    } return e
            }

            function c(e) {
                return r(e).join("")
            }
        },
        894012: (e, t, n) => {
            "use strict";
            n.d(t, {
                Rp: () => i.Rp,
                w4: () => o,
                _p: () => u
            });
            var r, i = n(222789),
                o = (r = n(25788).Z).reactParserFor,
                u = r.astParserFor
        },
        25788: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n(120053),
                i = n.n(r),
                o = n(222789);

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function a(e, t, n, r, i) {
                n || (t += "\n\n");
                var a;
                a = e(t, function(e) {
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
                }({
                    inline: n
                }, r));
                a = (0, o.ge)(a);
                a = (0, o.RA)(a);
                null != i && (a = i(a, n));
                return a
            }
            const c = {
                reactParserFor: function(e) {
                    var t = i().parserFor(e),
                        n = i().reactFor(i().ruleOutput(e, "react"));
                    return function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                        return n(a(t, e, r, i, o), i)
                    }
                },
                astParserFor: function(e) {
                    var t = i().parserFor(e);
                    return function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                        return a(t, e, n, r, i)
                    }
                }
            }
        },
        283151: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => u
            });
            var r = n(667294);

            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function o(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return i(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function u() {
                var e = o((0, r.useState)({}), 2)[1];
                return (0, r.useCallback)((function() {
                    return e({})
                }), [])
            }
        },
        498964: (e, t, n) => {
            "use strict";
            n.d(t, {
                P: () => q,
                EQ: () => $
            });
            const r = Symbol.for("@ts-pattern/matcher"),
                i = Symbol.for("@ts-pattern/isVariadic"),
                o = "@ts-pattern/anonymous-select-key",
                u = e => Boolean(e && "object" == typeof e),
                a = e => e && !!e[r],
                c = (e, t, n) => {
                    if (a(e)) {
                        const i = e[r](),
                            {
                                matched: o,
                                selections: u
                            } = i.match(t);
                        return o && u && Object.keys(u).forEach((e => n(e, u[e]))), o
                    }
                    if (u(e)) {
                        if (!u(t)) return !1;
                        if (Array.isArray(e)) {
                            if (!Array.isArray(t)) return !1;
                            let r = [],
                                o = [],
                                u = [];
                            for (const t of e.keys()) {
                                const n = e[t];
                                a(n) && n[i] ? u.push(n) : u.length ? o.push(n) : r.push(n)
                            }
                            if (u.length) {
                                if (u.length > 1) throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
                                if (t.length < r.length + o.length) return !1;
                                const e = t.slice(0, r.length),
                                    i = 0 === o.length ? [] : t.slice(-o.length),
                                    a = t.slice(r.length, 0 === o.length ? 1 / 0 : -o.length);
                                return r.every(((t, r) => c(t, e[r], n))) && o.every(((e, t) => c(e, i[t], n))) && (0 === u.length || c(u[0], a, n))
                            }
                            return e.length === t.length && e.every(((e, r) => c(e, t[r], n)))
                        }
                        return Object.keys(e).every((i => {
                            const o = e[i];
                            return (i in t || a(u = o) && "optional" === u[r]().matcherType) && c(o, t[i], n);
                            var u
                        }))
                    }
                    return Object.is(t, e)
                },
                l = e => {
                    var t, n, i;
                    return u(e) ? a(e) ? null != (t = null == (n = (i = e[r]()).getSelectionKeys) ? void 0 : n.call(i)) ? t : [] : Array.isArray(e) ? s(e, l) : s(Object.values(e), l) : []
                },
                s = (e, t) => e.reduce(((e, n) => e.concat(t(n))), []);

            function f(e) {
                return Object.assign(e, {
                    optional: () => p(e),
                    and: t => v(e, t),
                    or: t => m(e, t),
                    select: t => void 0 === t ? b(e) : b(t, e)
                })
            }

            function d(e) {
                return Object.assign((e => Object.assign(e, {
                    *[Symbol.iterator]() {
                        yield Object.assign(e, {
                            [i]: !0
                        })
                    }
                }))(e), {
                    optional: () => d(p(e)),
                    select: t => d(void 0 === t ? b(e) : b(t, e))
                })
            }

            function p(e) {
                return f({
                    [r]: () => ({
                        match: t => {
                            let n = {};
                            const r = (e, t) => {
                                n[e] = t
                            };
                            return void 0 === t ? (l(e).forEach((e => r(e, void 0))), {
                                matched: !0,
                                selections: n
                            }) : {
                                matched: c(e, t, r),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => l(e),
                        matcherType: "optional"
                    })
                })
            }
            const h = (e, t) => {
                    for (const n of e)
                        if (!t(n)) return !1;
                    return !0
                },
                y = (e, t) => {
                    for (const [n, r] of e.entries())
                        if (!t(r, n)) return !1;
                    return !0
                };

            function v(...e) {
                return f({
                    [r]: () => ({
                        match: t => {
                            let n = {};
                            const r = (e, t) => {
                                n[e] = t
                            };
                            return {
                                matched: e.every((e => c(e, t, r))),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => s(e, l),
                        matcherType: "and"
                    })
                })
            }

            function m(...e) {
                return f({
                    [r]: () => ({
                        match: t => {
                            let n = {};
                            const r = (e, t) => {
                                n[e] = t
                            };
                            return s(e, l).forEach((e => r(e, void 0))), {
                                matched: e.some((e => c(e, t, r))),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => s(e, l),
                        matcherType: "or"
                    })
                })
            }

            function g(e) {
                return {
                    [r]: () => ({
                        match: t => ({
                            matched: Boolean(e(t))
                        })
                    })
                }
            }

            function b(...e) {
                const t = "string" == typeof e[0] ? e[0] : void 0,
                    n = 2 === e.length ? e[1] : "string" == typeof e[0] ? void 0 : e[0];
                return f({
                    [r]: () => ({
                        match: e => {
                            let r = {
                                [null != t ? t : o]: e
                            };
                            return {
                                matched: void 0 === n || c(n, e, ((e, t) => {
                                    r[e] = t
                                })),
                                selections: r
                            }
                        },
                        getSelectionKeys: () => [null != t ? t : o].concat(void 0 === n ? [] : l(n))
                    })
                })
            }

            function E(e) {
                return "number" == typeof e
            }

            function O(e) {
                return "string" == typeof e
            }

            function S(e) {
                return "bigint" == typeof e
            }
            const w = f(g((function(e) {
                    return !0
                }))),
                _ = w,
                A = e => Object.assign(f(e), {
                    startsWith: t => {
                        return A(v(e, (n = t, g((e => O(e) && e.startsWith(n))))));
                        var n
                    },
                    endsWith: t => {
                        return A(v(e, (n = t, g((e => O(e) && e.endsWith(n))))));
                        var n
                    },
                    minLength: t => A(v(e, (e => g((t => O(t) && t.length >= e)))(t))),
                    maxLength: t => A(v(e, (e => g((t => O(t) && t.length <= e)))(t))),
                    includes: t => {
                        return A(v(e, (n = t, g((e => O(e) && e.includes(n))))));
                        var n
                    },
                    regex: t => {
                        return A(v(e, (n = t, g((e => O(e) && Boolean(e.match(n)))))));
                        var n
                    }
                }),
                T = A(g(O)),
                P = (e, t) => g((n => E(n) && e <= n && t >= n)),
                I = e => g((t => E(t) && t < e)),
                x = e => g((t => E(t) && t > e)),
                D = e => g((t => E(t) && t <= e)),
                C = e => g((t => E(t) && t >= e)),
                N = () => g((e => E(e) && Number.isInteger(e))),
                R = () => g((e => E(e) && Number.isFinite(e))),
                j = () => g((e => E(e) && e > 0)),
                L = () => g((e => E(e) && e < 0)),
                U = e => Object.assign(f(e), {
                    between: (t, n) => U(v(e, P(t, n))),
                    lt: t => U(v(e, I(t))),
                    gt: t => U(v(e, x(t))),
                    lte: t => U(v(e, D(t))),
                    gte: t => U(v(e, C(t))),
                    int: () => U(v(e, N())),
                    finite: () => U(v(e, R())),
                    positive: () => U(v(e, j())),
                    negative: () => U(v(e, L()))
                }),
                k = U(g(E)),
                Z = (e, t) => g((n => S(n) && e <= n && t >= n)),
                F = e => g((t => S(t) && t < e)),
                M = e => g((t => S(t) && t > e)),
                V = e => g((t => S(t) && t <= e)),
                B = e => g((t => S(t) && t >= e)),
                G = () => g((e => S(e) && e > 0)),
                H = () => g((e => S(e) && e < 0)),
                z = e => Object.assign(f(e), {
                    between: (t, n) => z(v(e, Z(t, n))),
                    lt: t => z(v(e, F(t))),
                    gt: t => z(v(e, M(t))),
                    lte: t => z(v(e, V(t))),
                    gte: t => z(v(e, B(t))),
                    positive: () => z(v(e, G())),
                    negative: () => z(v(e, H()))
                }),
                Y = z(g(S)),
                W = f(g((function(e) {
                    return "boolean" == typeof e
                }))),
                X = f(g((function(e) {
                    return "symbol" == typeof e
                }))),
                K = f(g((function(e) {
                    return null == e
                })));
            var q = {
                __proto__: null,
                matcher: r,
                optional: p,
                array: function(...e) {
                    return d({
                        [r]: () => ({
                            match: t => {
                                if (!Array.isArray(t)) return {
                                    matched: !1
                                };
                                if (0 === e.length) return {
                                    matched: !0
                                };
                                const n = e[0];
                                let r = {};
                                if (0 === t.length) return l(n).forEach((e => {
                                    r[e] = []
                                })), {
                                    matched: !0,
                                    selections: r
                                };
                                const i = (e, t) => {
                                    r[e] = (r[e] || []).concat([t])
                                };
                                return {
                                    matched: t.every((e => c(n, e, i))),
                                    selections: r
                                }
                            },
                            getSelectionKeys: () => 0 === e.length ? [] : l(e[0])
                        })
                    })
                },
                set: function(...e) {
                    return f({
                        [r]: () => ({
                            match: t => {
                                if (!(t instanceof Set)) return {
                                    matched: !1
                                };
                                let n = {};
                                if (0 === t.size) return {
                                    matched: !0,
                                    selections: n
                                };
                                if (0 === e.length) return {
                                    matched: !0
                                };
                                const r = (e, t) => {
                                        n[e] = (n[e] || []).concat([t])
                                    },
                                    i = e[0];
                                return {
                                    matched: h(t, (e => c(i, e, r))),
                                    selections: n
                                }
                            },
                            getSelectionKeys: () => 0 === e.length ? [] : l(e[0])
                        })
                    })
                },
                map: function(...e) {
                    return f({
                        [r]: () => ({
                            match: t => {
                                if (!(t instanceof Map)) return {
                                    matched: !1
                                };
                                let n = {};
                                if (0 === t.size) return {
                                    matched: !0,
                                    selections: n
                                };
                                const r = (e, t) => {
                                    n[e] = (n[e] || []).concat([t])
                                };
                                if (0 === e.length) return {
                                    matched: !0
                                };
                                var i;
                                if (1 === e.length) throw new Error(`\`P.map\` wasn't given enough arguments. Expected (key, value), received ${null==(i=e[0])?void 0:i.toString()}`);
                                const [o, u] = e;
                                return {
                                    matched: y(t, ((e, t) => {
                                        const n = c(o, t, r),
                                            i = c(u, e, r);
                                        return n && i
                                    })),
                                    selections: n
                                }
                            },
                            getSelectionKeys: () => 0 === e.length ? [] : [...l(e[0]), ...l(e[1])]
                        })
                    })
                },
                intersection: v,
                union: m,
                not: function(e) {
                    return f({
                        [r]: () => ({
                            match: t => ({
                                matched: !c(e, t, (() => {}))
                            }),
                            getSelectionKeys: () => [],
                            matcherType: "not"
                        })
                    })
                },
                when: g,
                select: b,
                any: w,
                _,
                string: T,
                between: P,
                lt: I,
                gt: x,
                lte: D,
                gte: C,
                int: N,
                finite: R,
                positive: j,
                negative: L,
                number: k,
                betweenBigInt: Z,
                ltBigInt: F,
                gtBigInt: M,
                lteBigInt: V,
                gteBigInt: B,
                positiveBigInt: G,
                negativeBigInt: H,
                bigint: Y,
                boolean: W,
                symbol: X,
                nullish: K,
                instanceOf: function(e) {
                    return f(g(function(e) {
                        return t => t instanceof e
                    }(e)))
                },
                shape: function(e) {
                    return f(g(function(...e) {
                        if (1 === e.length) {
                            const [t] = e;
                            return e => c(t, e, (() => {}))
                        }
                        if (2 === e.length) {
                            const [t, n] = e;
                            return c(t, n, (() => {}))
                        }
                        throw new Error(`isMatching wasn't given the right number of arguments: expected 1 or 2, received ${e.length}.`)
                    }(e)))
                }
            };
            const J = {
                matched: !1,
                value: void 0
            };

            function $(e) {
                return new Q(e, J)
            }
            class Q {
                constructor(e, t) {
                    this.input = void 0, this.state = void 0, this.input = e, this.state = t
                }
                with(...e) {
                    if (this.state.matched) return this;
                    const t = e[e.length - 1],
                        n = [e[0]];
                    let r;
                    3 === e.length && "function" == typeof e[1] ? (n.push(e[0]), r = e[1]) : e.length > 2 && n.push(...e.slice(1, e.length - 1));
                    let i = !1,
                        u = {};
                    const a = (e, t) => {
                            i = !0, u[e] = t
                        },
                        l = !n.some((e => c(e, this.input, a))) || r && !Boolean(r(this.input)) ? J : {
                            matched: !0,
                            value: t(i ? o in u ? u[o] : u : this.input, this.input)
                        };
                    return new Q(this.input, l)
                }
                when(e, t) {
                    if (this.state.matched) return this;
                    const n = Boolean(e(this.input));
                    return new Q(this.input, n ? {
                        matched: !0,
                        value: t(this.input, this.input)
                    } : J)
                }
                otherwise(e) {
                    return this.state.matched ? this.state.value : e(this.input)
                }
                exhaustive() {
                    return this.run()
                }
                run() {
                    if (this.state.matched) return this.state.value;
                    let e;
                    try {
                        e = JSON.stringify(this.input)
                    } catch (t) {
                        e = this.input
                    }
                    throw new Error(`Pattern matching error: no pattern matches value ${e}`)
                }
                returnType() {
                    return this
                }
            }
        }
    }
]);