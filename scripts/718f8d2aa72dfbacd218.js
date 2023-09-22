(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [89030], {
        652411: (e, t, n) => {
            "use strict";
            n.d(t, {
                O_: () => _,
                qA: () => d,
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
                x = function(e) {
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

            function w(e, t) {
                return e === t ? e : Math.random() * (t - e + 1) + e
            }

            function C(e) {
                var t = Math.floor(w(0, e.length - 1));
                return [e[t], t]
            }

            function E(e, t) {
                return C([e, t])[0]
            }

            function A(e) {
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
                            return new g(w(e.minValue, e.maxValue));
                        case "linear":
                            return new b(e.value, e.addValue);
                        case "linear-random":
                            return new b(w(e.minValue, e.maxValue), w(e.minAddValue, e.maxAddValue));
                        case "oscillating":
                            return new x(e.value, e.start, e.final, e.duration, e.direction, e.easingFunction);
                        case "oscillating-random":
                            return new x(w(e.minValue, e.maxValue), w(e.minStart, e.maxStart), w(e.minFinal, e.maxFinal), w(e.minDuration, e.maxDuration), E(e.minDirection, e.maxDirection), C(e.easingFunctions)[0])
                    }
                }(h(h({}, e), {
                    valueType: "number"
                }))
            }

            function P(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            var t = A(e.value);
                            return new y(new g(t.x), new g(t.y));
                        case "static-random":
                            var n = A(e.minValue),
                                r = A(e.maxValue);
                            return new y(new g(w(n.x, r.x)), new g(w(n.y, r.y)));
                        case "linear":
                            t = A(e.value);
                            var i = A(e.addValue);
                            return new y(new b(t.x, i.x), new b(t.y, i.y));
                        case "linear-random":
                            n = A(e.minValue), r = A(e.maxValue);
                            var o = A(e.minAddValue),
                                a = A(e.maxAddValue);
                            return new y(new b(w(n.x, r.x), w(o.x, a.x)), new b(w(n.y, r.y), w(o.x, a.x)));
                        case "oscillating":
                            t = A(e.value);
                            var u = A(e.start),
                                c = A(e.final),
                                s = A(e.duration),
                                l = A(e.direction);
                            return new y(new x(t.x, u.x, c.x, s.x, l.x, e.easingFunction), new x(t.y, u.y, c.y, s.x, l.y, e.easingFunction));
                        case "oscillating-random":
                            n = A(e.minValue), r = A(e.maxValue);
                            var d = A(e.minStart),
                                f = A(e.maxStart),
                                p = A(e.minFinal),
                                h = A(e.maxFinal),
                                v = A(e.minDuration),
                                m = A(e.maxDuration),
                                O = A(e.minDirection),
                                S = A(e.maxDirection);
                            return new y(new x(w(n.x, r.x), w(d.x, f.x), w(p.x, h.x), w(v.x, m.x), E(O.x, S.x), C(e.easingFunctions)[0]), new x(w(n.y, r.y), w(d.y, f.y), w(p.y, h.y), w(v.y, m.y), E(O.y, S.y), C(e.easingFunctions)[0]))
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
                            return new m(new g(w(n.x, r.x)), new g(w(n.y, r.y)), new g(w(n.z, r.z)));
                        case "linear":
                            t = O(e.value);
                            var i = O(e.addValue);
                            return new m(new b(t.x, i.x), new b(t.y, i.y), new b(t.z, i.z));
                        case "linear-random":
                            n = O(e.minValue), r = O(e.maxValue);
                            var o = O(e.minAddValue),
                                a = O(e.maxAddValue);
                            return new m(new b(w(n.x, r.x), w(o.x, a.x)), new b(w(n.y, r.y), w(o.y, a.y)), new b(w(n.z, r.z), w(o.z, a.z)));
                        case "oscillating":
                            t = O(e.value);
                            var u = O(e.start),
                                c = O(e.final),
                                s = O(e.duration),
                                l = O(e.direction);
                            return new m(new x(t.x, u.x, c.x, s.x, l.x, e.easingFunction), new x(t.y, u.y, c.y, s.z, l.y, e.easingFunction), new x(t.z, u.z, c.z, s.z, l.z, e.easingFunction));
                        case "oscillating-random":
                            n = O(e.minValue), r = O(e.maxValue);
                            var d = O(e.minStart),
                                f = O(e.maxStart),
                                p = O(e.minFinal),
                                h = O(e.maxFinal),
                                v = O(e.minDuration),
                                y = O(e.maxDuration),
                                A = O(e.minDirection),
                                S = O(e.maxDirection);
                            return new m(new x(w(n.x, r.x), w(d.x, f.x), w(p.x, h.x), w(v.x, y.x), E(A.x, S.x), C(e.easingFunctions)[0]), new x(w(n.y, r.y), w(d.y, f.y), w(p.y, h.y), w(v.y, y.y), E(A.y, S.y), C(e.easingFunctions)[0]), new x(w(n.z, r.z), w(d.z, f.z), w(p.z, h.z), w(v.z, y.z), E(A.z, S.z), C(e.easingFunctions)[0]))
                    }
                }(h(h({}, e), {
                    valueType: "Vector3"
                }))
            }

            function j(e, t, n, r, i) {
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
                        return -1 !== r ? r : Math.floor(w(0, n.colors.length - 1))
                    }(null != r ? r : c, i, n);
                return new s({
                    id: e,
                    position: P(o.position),
                    velocity: P(o.velocity),
                    rotation: R(o.rotation),
                    dragCoefficient: P(o.dragCoefficient),
                    size: a,
                    opacity: S(o.opacity),
                    spriteX: f * n.spriteWidth + 2 * f,
                    spriteY: d * n.spriteHeight + 2 * d,
                    spriteWidth: n.spriteWidth,
                    spriteHeight: n.spriteHeight
                })
            }
            var _ = r.forwardRef((function(e, t) {
                var o = e.className,
                    a = e.environment,
                    c = e.onClick,
                    s = e.onMouseDown,
                    l = e.onMouseMove,
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
                    m = r.useRef(new Map),
                    g = r.useRef(null),
                    b = r.useRef(0),
                    x = r.useRef(0),
                    w = r.useCallback((function() {
                        var e = y.current;
                        if (null != e) {
                            var t = e.getContext("2d");
                            if (null != t) {
                                t.clearRect(0, 0, e.width, e.height), null == f || f(t), m.current.forEach((function(n, r) {
                                    var i = n.confetti,
                                        o = n.spriteCanvas;
                                    i.update(a), i.draw(o, t), i.shouldDestroy(e, a) && m.current.delete(r)
                                })), null == p || p(t), m.current.size > 0 ? g.current = window.requestAnimationFrame(w) : (t.clearRect(0, 0, e.width, e.height), g.current = null);
                                var n = Date.now();
                                0 !== b.current && (x.current = 1e3 / (n - b.current)), b.current = n
                            }
                        }
                    }), [a, p, f]);
                r.useEffect((function() {
                    null != g.current && (window.cancelAnimationFrame(g.current), g.current = window.requestAnimationFrame(w))
                }), [w]);
                var C = r.useCallback((function(e, t) {
                        m.current.set(e.id, {
                            confetti: e,
                            spriteCanvas: t
                        }), null == g.current && w()
                    }), [w]),
                    E = r.useCallback((function(e, t, n, r, o) {
                        var a, u = j(null !== (a = e.id) && void 0 !== a ? a : (0, i.v4)(), e, n, r, o);
                        return C(u, t), u
                    }), [C]),
                    A = r.useCallback((function(e) {
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
                        createConfetti: E,
                        addConfetti: C,
                        deleteConfetti: A,
                        clearConfetti: O,
                        getCanvas: S
                    }
                }), [E, C, A, O, S]);
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
                                        var l = -1e3 / x.current * 2,
                                            d = function(e, t) {
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
                                        i(e, null !== (r = null == d ? void 0 : d.confetti) && void 0 !== r ? r : null)
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
                    _ = r.useCallback((function(e) {
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
                            mouseHandler: d
                        })
                    }), [P, d]);
                return r.useEffect((function() {
                    var e = function(e, t, n) {
                        null != n && window.addEventListener(e, t)
                    };
                    return e("click", R, c), e("mousedown", _, s), e("mousemove", I, l), e("mouseup", D, d),
                        function() {
                            window.removeEventListener("click", R), window.removeEventListener("mousedown", _), window.removeEventListener("mousemove", I), window.removeEventListener("mouseup", I)
                        }
                }), [R, _, I, D, c, s, l, d]), r.useEffect((function() {
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
                                colors: l,
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
                }), [l, f, d]);
                var m = r.useCallback((function() {
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
                                            }(r), s = 0; s < u.data.length; s += 4) u.data[s] = c.r, u.data[s + 1] = c.g, u.data[s + 2] = c.b;
                                        t.putImageData(u, o, a)
                                    }
                                };
                                e.colorize ? l.forEach((function(e, t) {
                                    return r(e, t)
                                })) : r(null, 0)
                            })))
                    }), [l, f, d]),
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
                    x = r.useCallback((function() {
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
                    x()
                }), [x]), r.useEffect((function() {
                    return function() {
                        return b(!1)
                    }
                }), [b]), r.useEffect((function() {
                    null != p.current && (p.current.width = (d + 2) * Math.max(l.length, 1), p.current.height = (f + 2) * s.length)
                }), [l.length, f, d, s.length]), r.createElement("canvas", {
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
                    d = r.useCallback((function() {
                        return null == e ? void 0 : e.clearConfetti()
                    }), [e]);
                return r.useMemo((function() {
                    return {
                        createConfetti: u,
                        createMultipleConfetti: c,
                        addConfetti: s,
                        clearConfetti: d,
                        deleteConfetti: l,
                        isReady: o && null != t && null != e
                    }
                }), [s, d, e, u, c, l, o, t])
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
                default: () => Se
            });
            var r = n(785893),
                i = n(667294),
                o = n(202351),
                a = n(882723),
                u = n(153686),
                c = n(19585),
                s = n(339938),
                l = n(349771),
                d = n(318715),
                f = n(764797),
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
                var t = v((0, d.Wu)([f.Z], (function() {
                    return [f.Z.getCategoryForProduct(e), f.Z.getProduct(e)]
                })), 2);
                return {
                    category: t[0],
                    product: t[1],
                    purchase: (0, d.ZP)([p.Z], (function() {
                        return p.Z.getPurchase(e)
                    }))
                }
            };
            var m = n(681714),
                g = n(118024),
                b = n(455706),
                x = n(708783),
                w = n(473903),
                C = n(652591),
                E = n(116094),
                A = n(938737),
                O = n(294184),
                S = n.n(O),
                P = n(498964),
                R = n(940594),
                j = n(584228),
                _ = n(384411),
                I = n(491260),
                D = n(89836),
                M = n(310126),
                N = n(841379),
                Z = n(995141),
                T = n(473708);

            function H(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var F = M.ZP.getEnableHardwareAcceleration() ? a.AnimatedAvatar : a.Avatar;
            const U = function(e) {
                var t = e.user,
                    n = e.pendingAvatarDecoration,
                    i = e.status,
                    o = e.avatarSize,
                    u = void 0 === o ? a.AvatarSizes.SIZE_120 : o,
                    c = e["aria-hidden"],
                    s = void 0 !== c && c,
                    l = (0, D.w)({
                        user: t,
                        size: (0,
                            a.getAvatarSize)(u),
                        showPending: !0
                    }),
                    d = l.avatarSrc,
                    f = l.isAvatarAnimating,
                    p = l.eventHandlers,
                    h = (0, N.Z)({
                        user: t,
                        pendingAvatarDecoration: n,
                        size: (0, Z.y9)(u),
                        canAnimate: f
                    });
                return (0, r.jsx)(F, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            H(e, t, n[t])
                        }))
                    }
                    return e
                }({
                    avatarDecoration: h,
                    src: d,
                    size: u,
                    status: i,
                    "aria-label": s ? void 0 : T.Z.Messages.USER_SETTINGS_AVATAR,
                    "aria-hidden": s
                }, p))
            };
            var z = n(675960),
                k = n.n(z),
                V = [{
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
                        n = (0, o.e7)([_.default], (function() {
                            return _.default.locale
                        })),
                        i = (0, l.qS)(t);
                    return (0, r.jsxs)("div", {
                        className: k().purchaseInfo,
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
                        i = (0, j.Z)(n).backgroundColors,
                        o = null != n ? (0, l.uV)(n.banner, {
                            size: R.yV
                        }) : null;
                    return (0, r.jsx)("div", {
                        className: k().shopPreviewBanner,
                        style: null != o ? {
                            backgroundImage: "url(".concat(o, ")")
                        } : {
                            background: "linear-gradient(".concat(i[0], ", ").concat(i[1], ")")
                        },
                        children: t
                    })
                };
            const W = function(e) {
                var t = e.user,
                    n = e.pendingAvatarDecoration,
                    i = e.className,
                    u = (0, o.e7)([I.Z], (function() {
                        return I.Z.getStatus(t.id)
                    })),
                    c = y(null == n ? void 0 : n.skuId),
                    s = c.category,
                    d = c.product,
                    f = c.purchase,
                    p = E.ZP.canUseCollectibles(t),
                    h = (0, l.qS)(f),
                    v = (0,
                        l.mv)(s),
                    m = !p && h;
                return null == d || null != f && !m ? (0, r.jsxs)("div", {
                    className: S()(k().modalPreview, i),
                    children: [(0, r.jsxs)("div", {
                        className: k().previewSections,
                        children: [(0, r.jsx)("div", {
                            className: k().decorationPreview,
                            children: (0, r.jsx)(U, {
                                user: t,
                                pendingAvatarDecoration: n
                            })
                        }), (0, r.jsx)("div", {
                            className: k().smallDecorationPreviewsContainer,
                            children: V.map((function(e) {
                                var i = e.avatarSize,
                                    o = e.showStatus;
                                return (0, r.jsx)("div", {
                                    className: k().smallDecorationPreview,
                                    children: (0, r.jsx)(U, {
                                        user: t,
                                        avatarSize: i,
                                        pendingAvatarDecoration: n,
                                        status: o ? u : void 0,
                                        "aria-hidden": !0
                                    })
                                }, "".concat(i).concat(o))
                            }))
                        })]
                    }), null != f && (0, r.jsx)(L, {
                        purchase: f
                    })]
                }) : (0, r.jsxs)("div", {
                    className: S()(k().modalPreview, k().shopPreviewContainer, i),
                    children: [(0, r.jsx)(B, {
                        category: s,
                        children: (0, r.jsx)(U, {
                            user: t,
                            pendingAvatarDecoration: n
                        })
                    }), (0, r.jsxs)("div", {
                        className: k().shopPreviewTextContainer,
                        children: [(0, r.jsx)(a.Text, {
                            variant: "text-sm/semibold",
                            children: d.name
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
            var G, q = n(517586),
                Y = n(662478),
                X = n(95891),
                K = n(778613),
                Q = n(97990),
                $ = n(155217),
                J = n(616276),
                ee = n(531441);

            function te(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function ne(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function re(e, t) {
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
                }(e, t) || oe(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ie(e) {
                return function(e) {
                    if (Array.isArray(e)) return te(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || oe(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function oe(e, t) {
                if (e) {
                    if ("string" == typeof e) return te(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? te(e, t) : void 0
                }
            }! function(e) {
                e[e.PURCHASE = 0] = "PURCHASE";
                e[e.PREMIUM_PURCHASE = 1] = "PREMIUM_PURCHASE";
                e[e.PREVIEW = 2] = "PREVIEW"
            }(G || (G = {}));
            var ae = {
                    id: "None"
                },
                ue = {
                    id: "Shop"
                };
            const ce = function() {
                var e = (0, d.ZP)([w.default], (function() {
                        return w.default.getCurrentUser()
                    })),
                    t = E.ZP.canUseCollectibles(e),
                    n = (0, d.ZP)([p.Z], (function() {
                        return p.Z.purchases
                    })),
                    r = re((0, d.Wu)([f.Z], (function() {
                        return [f.Z.categories, f.Z.categorySkuIdsByProductSkuId]
                    })), 2),
                    o = r[0],
                    a = r[1];
                return (0, i.useMemo)((function() {
                    var e, r = (0, l.IM)(o).reduce((function(e, r) {
                        var i = n.get(r.skuId);
                        if (null != i && (0, l.qS)(i)) {
                            e[G.PREMIUM_PURCHASE].push(r);
                            return e
                        }
                        if (null != i) {
                            e[G.PURCHASE].push(r);
                            return e
                        }
                        var u = o.get(a[r.skuId]);
                        if (!t && (0, l.mv)(u)) {
                            e[G.PREMIUM_PURCHASE].push(r);
                            return e
                        }
                        e[G.PREVIEW].push(r);
                        return e
                    }), (ne(e = {}, G.PURCHASE, []), ne(e, G.PREMIUM_PURCHASE, []), ne(e, G.PREVIEW, []), e));
                    return [{
                        section: G.PURCHASE,
                        items: r[G.PURCHASE].length > 0 ? [ae, ue].concat(ie(r[G.PURCHASE])) : r[G.PURCHASE],
                        height: 12,
                        header: T.Z.Messages.CHANGE_DECORATION_MODAL_PURCHASE_HEADER
                    }, {
                        section: G.PREMIUM_PURCHASE,
                        items: r[G.PREMIUM_PURCHASE],
                        height: 12,
                        header: T.Z.Messages.CHANGE_DECORATION_MODAL_PREMIUM_STARTER_HEADER
                    }, {
                        section: G.PREVIEW,
                        items: r[G.PREVIEW],
                        height: 56,
                        header: T.Z.Messages.CHANGE_DECORATION_MODAL_SHOP_PREVIEW_HEADER
                    }].filter((function(e) {
                        return e.items.length > 0
                    }))
                }), [o, n, a, t])
            };
            var se = n(389091),
                le = n.n(se);

            function de(e, t, n) {
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
                        de(e, t, n[t])
                    }))
                }
                return e
            }

            function pe(e, t) {
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

            function he(e, t) {
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
            var ve = function() {
                    return 80
                },
                ye = function(e) {
                    var t = e.children,
                        n = e.className,
                        i = e.onSelect,
                        o = e.isSelected,
                        u = void 0 !== o && o,
                        c = he(e, ["children", "className", "onSelect", "isSelected"]);
                    return (0,
                        r.jsx)(a.Clickable, pe(fe({
                        className: S()(le().decorationGridItem, u ? le().selected : void 0, n)
                    }, c), {
                        onClick: i,
                        children: t
                    }))
                },
                me = function(e) {
                    var t = e.user,
                        n = e.avatarDecoration,
                        o = e.innerRef,
                        a = e.section,
                        u = he(e, ["user", "avatarDecoration", "innerRef", "section"]),
                        c = (0, d.ZP)([f.Z], (function() {
                            var e = f.Z.getCategoryForProduct(n.skuId);
                            return (0, l.mv)(e)
                        })),
                        s = E.ZP.canUseCollectibles(t),
                        p = a === G.PREMIUM_PURCHASE && c && !s,
                        h = i.useRef(null),
                        v = (0, Y.Z)(null != o ? o : h),
                        y = (0, N.Z)({
                            user: t,
                            pendingAvatarDecoration: n,
                            size: 80,
                            canAnimate: v
                        });
                    return (0, r.jsxs)(ye, pe(fe({
                        className: p ? le().decorationGridItemChurned : void 0,
                        innerRef: null != o ? o : h
                    }, u), {
                        children: [(0, r.jsx)("img", {
                            className: le().presetDecorationImg,
                            src: y,
                            alt: n.label
                        }), (a === G.PREVIEW || a === G.PREMIUM_PURCHASE && !s) && (0, r.jsx)(ee.G2, {
                            icon: c ? X.Z : Q.Z,
                            color: q.Z.BACKGROUND_ACCENT,
                            className: le().itemBadge
                        })]
                    }))
                };
            const ge = function(e) {
                var t = e.user,
                    n = e.pendingAvatarDecoration,
                    i = e.selectedAvatarDecorationRef,
                    o = e.onSelect,
                    u = e.onOpenShop,
                    c = ce();
                return (0, r.jsx)(a.MasonryList, {
                    fade: !0,
                    className: le().list,
                    columns: 3,
                    sections: c.map((function(e) {
                        return e.items.length
                    })),
                    sectionGutter: 16,
                    itemGutter: 12,
                    paddingHorizontal: 12,
                    paddingVertical: 0,
                    removeEdgeItemGutters: !0,
                    renderItem: function(e, s, l, d) {
                        var f = c[e],
                            p = f.section,
                            h = f.items;
                        return (0, P.EQ)(h[s]).with(ae, (function() {
                            return (0, r.jsxs)(ye, {
                                style: fe({}, l),
                                isSelected: null === n,
                                onSelect: function() {
                                    return o(null)
                                },
                                children: [(0, r.jsx)(K.Z, {
                                    className: le().notAllowedIcon
                                }), (0, r.jsx)(a.Text, {
                                    variant: "text-xs/normal",
                                    color: "header-primary",
                                    children: T.Z.Messages.NONE
                                })]
                            }, d)
                        })).with(ue, (function() {
                            return (0, r.jsxs)(ye, {
                                style: l,
                                onSelect: u,
                                children: [(0, r.jsx)($.Z, {
                                    className: le().shopIcon
                                }), (0, r.jsx)(J.Z, {
                                    foreground: le().shopSparkleBig
                                }), (0, r.jsx)(J.Z, {
                                    foreground: le().shopSparkleSmall
                                }), (0, r.jsx)(a.Text, {
                                    variant: "text-xs/normal",
                                    color: "header-primary",
                                    children: T.Z.Messages.COLLECTIBLES_SHOP
                                })]
                            }, d)
                        })).otherwise((function(e) {
                            var a = (null == n ? void 0 : n.id) === e.id;
                            return (0, r.jsx)(me, {
                                style: fe({}, l),
                                user: t,
                                avatarDecoration: e,
                                section: p,
                                innerRef: a ? i : void 0,
                                isSelected: a,
                                onSelect: function() {
                                    return o(e)
                                }
                            }, d)
                        }))
                    },
                    renderSection: function(e) {
                        var t = c[e],
                            n = t.section,
                            i = t.header;
                        return (0, r.jsx)("div", {
                            className: le().headings,
                            children: (0, r.jsx)(a.HeadingLevel, {
                                forceLevel: 5,
                                component: (0, r.jsx)(a.Heading, {
                                    variant: "eyebrow",
                                    color: "header-secondary",
                                    children: i
                                }),
                                children: n === G.PREVIEW && (0, r.jsx)(a.Heading, {
                                    variant: "text-sm/normal",
                                    children: T.Z.Messages.CHANGE_DECORATION_MODAL_SHOP_PREVIEW_DESC
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
                    getItemHeight: ve
                })
            };
            var be = n(2590),
                xe = n(203600),
                we = n(240647),
                Ce = n.n(we);

            function Ee(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Ae(e, t) {
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
                    if ("string" == typeof e) return Ee(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ee(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Oe(e) {
                var t = e.user,
                    n = e.categories,
                    o = e.analyticsLocations,
                    c = e.onClose,
                    d = e.initialSelectedDecoration,
                    f = e.isTryItOutFlow,
                    p = (0, x.Z)({
                        analyticsLocations: o,
                        isTryItOut: f
                    }),
                    h = p.pendingAvatarDecoration,
                    v = p.setPendingAvatarDecoration,
                    m = Ae(i.useState((function() {
                        return null != d ? d : void 0 !== h ? h : null == (null == t ? void 0 : t.avatarDecoration) || 0 === n.size ? null : null !== (e = (0,
                            l.IM)(n).find((function(e) {
                            return (0, A.sr)(e, t.avatarDecoration)
                        }))) && void 0 !== e ? e : null;
                        var e
                    })), 2),
                    w = m[0],
                    C = m[1],
                    O = y(null == w ? void 0 : w.skuId),
                    S = O.category,
                    P = O.purchase,
                    R = E.ZP.canUseCollectibles(t),
                    j = i.useRef(null),
                    _ = (0, g.Z)(o),
                    I = (0, A.sr)(w, void 0 === h ? null == t ? void 0 : t.avatarDecoration : h),
                    D = function() {
                        v(w);
                        c()
                    },
                    M = function() {
                        c();
                        (0, s.mK)({
                            analyticsLocations: o,
                            analyticsSource: u.Z.EDIT_AVATAR_DECORATION_MODAL
                        })
                    };
                return (0, r.jsxs)("div", {
                    className: Ce().modalBody,
                    children: [(0, r.jsxs)(a.ModalHeader, {
                        separator: !1,
                        className: Ce().modalHeader,
                        children: [(0, r.jsx)("div", {
                            className: Ce().modalHeadings,
                            children: (0, r.jsx)(a.HeadingLevel, {
                                component: (0, r.jsx)(a.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: T.Z.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
                                }),
                                children: !R && (0, r.jsx)(a.Heading, {
                                    variant: "text-sm/normal",
                                    children: T.Z.Messages.CHANGE_DECORATION_MODAL_SHOP_PREVIEW_HEADER_STARTER_DESC
                                })
                            })
                        }), (0, r.jsx)(a.ModalCloseButton, {
                            className: Ce().modalCloseButton,
                            onClick: c
                        })]
                    }), (0, r.jsxs)(a.ModalContent, {
                        className: Ce().modalContent,
                        scrollbarType: "none",
                        children: [(0, r.jsx)(ge, {
                            user: t,
                            pendingAvatarDecoration: w,
                            selectedAvatarDecorationRef: j,
                            onSelect: function(e) {
                                C(e);
                                null != e && _(e)
                            },
                            onOpenShop: M
                        }), (0, r.jsx)(W, {
                            className: Ce().modalPreview,
                            user: t,
                            pendingAvatarDecoration: w
                        })]
                    }), (0, r.jsxs)(a.ModalFooter, {
                        className: Ce().modalFooter,
                        children: [null != P && (!(0, l.qS)(P) || R) || null === w ? (0, r.jsx)(a.Button, {
                            onClick: D,
                            disabled: I,
                            children: T.Z.Messages.AVATAR_DECORATION_MODAL_APPLY
                        }) : R || !(0, l.mv)(S) ? (0, r.jsx)(a.Button, {
                            className: Ce().modalFooterShopButton,
                            onClick: M,
                            children: T.Z.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
                        }) : (0, r.jsx)(b.Z, {
                            subscriptionTier: xe.Si.TIER_2,
                            buttonText: E.ZP.isPremium(t) ? T.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : T.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
                        }), (0, r.jsx)(a.Button, {
                            look: a.Button.Looks.LINK,
                            color: a.Button.Colors.PRIMARY,
                            onClick: c,
                            children: T.Z.Messages.CANCEL
                        })]
                    })]
                })
            }

            function Se(e) {
                var t = e.transitionState,
                    n = e.analyticsLocations,
                    s = e.onClose,
                    l = e.initialSelectedDecoration,
                    d = e.isTryItOutFlow,
                    f = (0, m.ZP)(),
                    p = f.categories,
                    h = f.isFetching,
                    v = (0, o.e7)([w.default], (function() {
                        return w.default.getCurrentUser()
                    })),
                    y = (0, c.Z)(n, u.Z.EDIT_AVATAR_DECORATION_MODAL),
                    g = y.AnalyticsLocationProvider,
                    b = y.analyticsLocations;
                i.useEffect((function() {
                    C.default.track(be.rMx.OPEN_MODAL, {
                        type: "Edit Avatar Decoration Modal",
                        location_stack: b
                    })
                }), [b]);
                return null == v ? null : (0, r.jsx)(g, {
                    children: (0, r.jsx)(a.ModalRoot, {
                        transitionState: t,
                        className: Ce().modal,
                        size: h ? a.ModalSize.DYNAMIC : a.ModalSize.MEDIUM,
                        children: h ? (0, r.jsx)(a.Spinner, {
                            className: Ce().spinner,
                            type: a.Spinner.Type.SPINNING_CIRCLE
                        }) : (0, r.jsx)(Oe, {
                            user: v,
                            categories: p,
                            analyticsLocations: b,
                            initialSelectedDecoration: l,
                            onClose: s,
                            isTryItOutFlow: d
                        })
                    })
                })
            }
        },
        681714: (e, t, n) => {
            "use strict";
            n.d(t, {
                ZP: () => d
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

            function d() {
                var e, t = (0, u.OE)().canUseCollectiblesIAP,
                    n = function() {
                        var e, t = (0, u.OE)().canUseCollectiblesIAP,
                            n = l((0, i.Wu)([a.Z], (function() {
                                return [a.Z.isFetching, a.Z.error, null !== (e = a.Z.lastFetched) && void 0 !== e ? e : 0, a.Z.categories]
                            })), 4),
                            c = n[0],
                            s = n[1],
                            d = n[2],
                            f = n[3];
                        (0, r.useEffect)((function() {
                            !t || c || Date.now() - d < 6e5 || (0, o.F$)()
                        }), [t, c, d]);
                        return {
                            canUseCollectiblesIAP: t,
                            isFetching: c,
                            categories: f,
                            error: s
                        }
                    }(),
                    s = n.isFetching,
                    d = n.categories,
                    f = n.error,
                    p = function() {
                        var e = (0, u.OE)().canUseCollectiblesIAP,
                            t = l((0, i.Wu)([c.Z], (function() {
                                return [c.Z.isFetching, c.Z.isClaiming, c.Z.fetchError, c.Z.claimError, c.Z.purchases]
                            })), 5),
                            n = t[0],
                            a = t[1],
                            s = t[2],
                            d = t[3],
                            f = t[4];
                        (0, r.useEffect)((function() {
                            e && (0, o.qg)()
                        }), [e]);
                        return {
                            canUseCollectiblesIAP: e,
                            isClaiming: a,
                            fetchError: s,
                            claimError: d,
                            isFetching: n,
                            purchases: f
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
                    categories: d,
                    purchases: p.purchases,
                    error: null !== (e = null != f ? f : v) && void 0 !== e ? e : y
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
                            backgroundColors: ["#4B79B0", "#0F0E3A"], buttonColors: ["#8A45C1", "#136897"], confettiSprites: [n(954512), n(398015)],
                                confettiColors: ["#2C9BD9", "#E46A80", "#FFE500", "#BBA8D5", "#3EDDD3", "#E2B761"]
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
                    d = void 0 === l ? "currentColor" : l,
                    f = e.className,
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
                    className: f,
                    width: n,
                    height: s,
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }), (0, r.jsx)("path", {
                        className: p,
                        fill: d,
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
                    d = void 0 === l ? "currentColor" : l,
                    f = u(e, ["width", "height", "color"]);
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
                }({}, (0, i.Z)(f)), {
                    width: n,
                    height: s,
                    viewBox: "0 0 23 18",
                    fill: "none",
                    children: (0, r.jsx)("path", {
                        d: "M22.8735 7.606L19.7485 0.606C19.585 0.238 19.2079 0 18.7912 0H4.2079C3.79123 0 3.41415 0.238 3.25061 0.606L0.125607 7.606C-0.0129344 7.914 0.0203989 8.269 0.213107 8.55C0.405815 8.832 0.732899 9 1.0829 9H2.12457V17C2.12457 17.552 2.59019 18 3.16623 18H13.5829V11H17.7496V18H19.8329C20.4089 18 20.8746 17.552 20.8746 17V9H21.9162C22.2662 9 22.5933 8.832 22.786 8.551C22.9787 8.269 23.0121 7.915 22.8735 7.606ZM10.4579 15H5.24956V11H10.4579V15ZM20.336 7H17.4933L16.0058 2H18.1048L20.336 7ZM7.67248 7L9.15998 2H10.4579V7H7.67248ZM12.5412 2H13.8391L15.3266 7H12.5412V2ZM4.89436 2H6.99331L5.50581 7H2.66207L4.89436 2Z",
                        fill: d
                    })
                }))
            }
        }
    }
]);