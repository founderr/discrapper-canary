(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [89030], {
        652411: (e, t, r) => {
            "use strict";
            r.d(t, {
                O_: () => D,
                qA: () => f,
                Ji: () => R,
                uR: () => I
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

            function u(e, t) {
                return e * t * t * (t > 0 ? -1 : 1)
            }
            var s = function() {
                    function e(e) {
                        this.id = e.id, this.position = e.position, this.velocity = e.velocity, this.rotation = e.rotation, this.dragCoefficient = e.dragCoefficient, this.size = e.size, this.opacity = e.opacity, this.spriteX = e.spriteX, this.spriteY = e.spriteY, this.spriteWidth = e.spriteWidth, this.spriteHeight = e.spriteHeight, this._lastUpdatedAt = Date.now()
                    }
                    return e.prototype.getNewForces = function(e, t) {
                        var r = e.wind * t,
                            n = -e.gravity * t;
                        return {
                            x: r + u(this.dragCoefficient.x, this.velocity.x),
                            y: n + u(this.dragCoefficient.y, this.velocity.y)
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
                g = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return p(t, e), t.prototype.update = function() {}, t.prototype.previewUpdate = function() {
                        return this.value
                    }, t
                }(v),
                b = function(e) {
                    function t(t, r) {
                        var n = e.call(this, t) || this;
                        return n.addValue = r, n
                    }
                    return p(t, e), t.prototype.update = function(e) {
                        this.value = this.previewUpdate(e)
                    }, t.prototype.previewUpdate = function(e) {
                        return this.value + this.addValue * e
                    }, t
                }(v),
                w = function(e) {
                    function t(t, r, n, i, o, a) {
                        var c = e.call(this, t) || this;
                        c.min = r, c.max = n, c.duration = i;
                        var u = c.value / (c.max - c.min) * c.duration,
                            s = isNaN(u) ? 0 : u;
                        return c.timePassed = s < 0 ? c.duration - s : s, c.directionMultiplier = o, c.easingFunction = a, c
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
                            var r = E(e.minValue),
                                n = E(e.maxValue);
                            return new y(new g(x(r.x, n.x)), new g(x(r.y, n.y)));
                        case "linear":
                            t = E(e.value);
                            var i = E(e.addValue);
                            return new y(new b(t.x, i.x), new b(t.y, i.y));
                        case "linear-random":
                            r = E(e.minValue), n = E(e.maxValue);
                            var o = E(e.minAddValue),
                                a = E(e.maxAddValue);
                            return new y(new b(x(r.x, n.x), x(o.x, a.x)), new b(x(r.y, n.y), x(o.x, a.x)));
                        case "oscillating":
                            t = E(e.value);
                            var c = E(e.start),
                                u = E(e.final),
                                s = E(e.duration),
                                l = E(e.direction);
                            return new y(new w(t.x, c.x, u.x, s.x, l.x, e.easingFunction), new w(t.y, c.y, u.y, s.x, l.y, e.easingFunction));
                        case "oscillating-random":
                            r = E(e.minValue), n = E(e.maxValue);
                            var f = E(e.minStart),
                                d = E(e.maxStart),
                                p = E(e.minFinal),
                                h = E(e.maxFinal),
                                v = E(e.minDuration),
                                m = E(e.maxDuration),
                                A = E(e.minDirection),
                                S = E(e.maxDirection);
                            return new y(new w(x(r.x, n.x), x(f.x, d.x), x(p.x, h.x), x(v.x, m.x), C(A.x, S.x), O(e.easingFunctions)[0]), new w(x(r.y, n.y), x(f.y, d.y), x(p.y, h.y), x(v.y, m.y), C(A.y, S.y), O(e.easingFunctions)[0]))
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
                            var r = A(e.minValue),
                                n = A(e.maxValue);
                            return new m(new g(x(r.x, n.x)), new g(x(r.y, n.y)), new g(x(r.z, n.z)));
                        case "linear":
                            t = A(e.value);
                            var i = A(e.addValue);
                            return new m(new b(t.x, i.x), new b(t.y, i.y), new b(t.z, i.z));
                        case "linear-random":
                            r = A(e.minValue), n = A(e.maxValue);
                            var o = A(e.minAddValue),
                                a = A(e.maxAddValue);
                            return new m(new b(x(r.x, n.x), x(o.x, a.x)), new b(x(r.y, n.y), x(o.y, a.y)), new b(x(r.z, n.z), x(o.z, a.z)));
                        case "oscillating":
                            t = A(e.value);
                            var c = A(e.start),
                                u = A(e.final),
                                s = A(e.duration),
                                l = A(e.direction);
                            return new m(new w(t.x, c.x, u.x, s.x, l.x, e.easingFunction), new w(t.y, c.y, u.y, s.z, l.y, e.easingFunction), new w(t.z, c.z, u.z, s.z, l.z, e.easingFunction));
                        case "oscillating-random":
                            r = A(e.minValue), n = A(e.maxValue);
                            var f = A(e.minStart),
                                d = A(e.maxStart),
                                p = A(e.minFinal),
                                h = A(e.maxFinal),
                                v = A(e.minDuration),
                                y = A(e.maxDuration),
                                E = A(e.minDirection),
                                S = A(e.maxDirection);
                            return new m(new w(x(r.x, n.x), x(f.x, d.x), x(p.x, h.x), x(v.x, y.x), C(E.x, S.x), O(e.easingFunctions)[0]), new w(x(r.y, n.y), x(f.y, d.y), x(p.y, h.y), x(v.y, y.y), C(E.y, S.y), O(e.easingFunctions)[0]), new w(x(r.z, n.z), x(f.z, d.z), x(p.z, h.z), x(v.z, y.z), C(E.z, S.z), O(e.easingFunctions)[0]))
                    }
                }(h(h({}, e), {
                    valueType: "Vector3"
                }))
            }

            function _(e, t, r, n, i) {
                var o = function(e, t) {
                        return h(h({
                            id: t
                        }, l), e)
                    }(t, e),
                    a = P(o.size),
                    c = function(e, t) {
                        if (null != e) {
                            var r = t.sprites.findIndex((function(t) {
                                return r = t, "string" == typeof(n = e) ? r.src === n && r.colorize : r.src === n.src && r.colorize === n.colorize;
                                var r, n
                            }));
                            if (-1 !== r) return [e, r]
                        }
                        return O(t.sprites)
                    }(n, r),
                    u = c[0],
                    f = c[1],
                    d = function(e, t, r) {
                        if (! function(e) {
                                return "string" == typeof e || e.colorize
                            }(e)) return 0;
                        var n = null != t ? r.colors.findIndex((function(e) {
                            return e === t
                        })) : -1;
                        return -1 !== n ? n : Math.floor(x(0, r.colors.length - 1))
                    }(null != n ? n : u, i, r);
                return new s({
                    id: e,
                    position: P(o.position),
                    velocity: P(o.velocity),
                    rotation: j(o.rotation),
                    dragCoefficient: P(o.dragCoefficient),
                    size: a,
                    opacity: S(o.opacity),
                    spriteX: d * r.spriteWidth + 2 * d,
                    spriteY: f * r.spriteHeight + 2 * f,
                    spriteWidth: r.spriteWidth,
                    spriteHeight: r.spriteHeight
                })
            }
            var D = n.forwardRef((function(e, t) {
                var o = e.className,
                    a = e.environment,
                    u = e.onClick,
                    s = e.onMouseDown,
                    l = e.onMouseMove,
                    f = e.onMouseUp,
                    d = e.onBeforeRender,
                    p = e.onAfterRender,
                    v = function(e, t) {
                        var r = {};
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var i = 0;
                            for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]])
                        }
                        return r
                    }(e, ["className", "environment", "onClick", "onMouseDown", "onMouseMove", "onMouseUp", "onBeforeRender", "onAfterRender"]),
                    y = n.useRef(null),
                    m = n.useRef(new Map),
                    g = n.useRef(null),
                    b = n.useRef(0),
                    w = n.useRef(0),
                    x = n.useCallback((function() {
                        var e = y.current;
                        if (null != e) {
                            var t = e.getContext("2d");
                            if (null != t) {
                                t.clearRect(0, 0, e.width, e.height), null == d || d(t), m.current.forEach((function(r, n) {
                                    var i = r.confetti,
                                        o = r.spriteCanvas;
                                    i.update(a), i.draw(o, t), i.shouldDestroy(e, a) && m.current.delete(n)
                                })), null == p || p(t), m.current.size > 0 ? g.current = window.requestAnimationFrame(x) : (t.clearRect(0, 0, e.width, e.height), g.current = null);
                                var r = Date.now();
                                0 !== b.current && (w.current = 1e3 / (r - b.current)), b.current = r
                            }
                        }
                    }), [a, p, d]);
                n.useEffect((function() {
                    null != g.current && (window.cancelAnimationFrame(g.current), g.current = window.requestAnimationFrame(x))
                }), [x]);
                var O = n.useCallback((function(e, t) {
                        m.current.set(e.id, {
                            confetti: e,
                            spriteCanvas: t
                        }), null == g.current && x()
                    }), [x]),
                    C = n.useCallback((function(e, t, r, n, o) {
                        var a, c = _(null !== (a = e.id) && void 0 !== a ? a : (0, i.v4)(), e, r, n, o);
                        return O(c, t), c
                    }), [O]),
                    E = n.useCallback((function(e) {
                        m.current.delete(e)
                    }), []),
                    A = n.useCallback((function() {
                        return m.current.clear()
                    }), []),
                    S = n.useCallback((function() {
                        return y.current
                    }), []);
                n.useImperativeHandle(t, (function() {
                    return {
                        createConfetti: C,
                        addConfetti: O,
                        deleteConfetti: E,
                        clearConfetti: A,
                        getCanvas: S
                    }
                }), [C, O, E, A, S]);
                var P = n.useCallback((function(e, t) {
                        var r, n, i = t.clickHandler,
                            o = t.mouseHandler;
                        if (null != i || null != o) {
                            var u = null === (r = y.current) || void 0 === r ? void 0 : r.getBoundingClientRect();
                            if (null != u) {
                                var s = function(e, t) {
                                    if (null == t) throw new Error("element should not be null");
                                    var r = t.getBoundingClientRect();
                                    return {
                                        x: e.clientX - r.left,
                                        y: e.clientY - r.top
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
                                                for (var r = 0, n = Array.from(e.values()); r < n.length; r++) {
                                                    var i = n[r];
                                                    if (null != i && t(i)) return i
                                                }
                                                return null
                                            }(m.current, (function(e) {
                                                var t = e.confetti,
                                                    r = t.previewPositionUpdate(a, l);
                                                return c(s, {
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
                    j = n.useCallback((function(e) {
                        return P(e, {
                            clickHandler: u
                        })
                    }), [P, u]),
                    D = n.useCallback((function(e) {
                        return P(e, {
                            clickHandler: s
                        })
                    }), [P, s]),
                    R = n.useCallback((function(e) {
                        return P(e, {
                            mouseHandler: l
                        })
                    }), [P, l]),
                    I = n.useCallback((function(e) {
                        return P(e, {
                            mouseHandler: f
                        })
                    }), [P, f]);
                return n.useEffect((function() {
                    var e = function(e, t, r) {
                        null != r && window.addEventListener(e, t)
                    };
                    return e("click", j, u), e("mousedown", D, s), e("mousemove", R, l), e("mouseup", I, f),
                        function() {
                            window.removeEventListener("click", j), window.removeEventListener("mousedown", D), window.removeEventListener("mousemove", R), window.removeEventListener("mouseup", R)
                        }
                }), [j, D, R, I, u, s, l, f]), n.useEffect((function() {
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
                }), []), n.createElement("canvas", h({}, v, {
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
            var R = n.forwardRef((function(e, t) {
                var r, o = e.className,
                    c = e.visible,
                    u = void 0 !== c && c,
                    s = e.sprites,
                    l = e.colors,
                    f = e.spriteWidth,
                    d = e.spriteHeight,
                    p = n.useRef(null),
                    h = n.useRef([]),
                    v = n.useRef(!1),
                    y = n.useRef({});
                n.useImperativeHandle(t, (function() {
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
                var m = n.useCallback((function() {
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
                                        for (var c = t.getImageData(o, a, f, d), u = function(e) {
                                                "#" === e[0] && (e = e.slice(1));
                                                var t = parseInt(e, 16);
                                                return {
                                                    r: t >> 16 & 255,
                                                    g: t >> 8 & 255,
                                                    b: 255 & t
                                                }
                                            }(n), s = 0; s < c.data.length; s += 4) c.data[s] = u.r, c.data[s + 1] = u.g, c.data[s + 2] = u.b;
                                        t.putImageData(c, o, a)
                                    }
                                };
                                e.colorize ? l.forEach((function(e, t) {
                                    return n(e, t)
                                })) : n(null, 0)
                            })))
                    }), [l, d, f]),
                    g = n.useCallback((function() {
                        var e = s.map((function(e) {
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
                    }), [s]),
                    b = n.useCallback((function(e) {
                        for (var t in y.current) y.current[t](e)
                    }), []),
                    w = n.useCallback((function() {
                        return function(e, t, r, n) {
                            return new(r || (r = Promise))((function(i, o) {
                                function a(e) {
                                    try {
                                        u(n.next(e))
                                    } catch (e) {
                                        o(e)
                                    }
                                }

                                function c(e) {
                                    try {
                                        u(n.throw(e))
                                    } catch (e) {
                                        o(e)
                                    }
                                }

                                function u(e) {
                                    var t;
                                    e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                                        e(t)
                                    }))).then(a, c)
                                }
                                u((n = n.apply(e, t || [])).next())
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
                                    return function(u) {
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
                return n.useEffect((function() {
                    w()
                }), [w]), n.useEffect((function() {
                    return function() {
                        return b(!1)
                    }
                }), [b]), n.useEffect((function() {
                    null != p.current && (p.current.width = (f + 2) * Math.max(l.length, 1), p.current.height = (d + 2) * s.length)
                }), [l.length, d, f, s.length]), n.createElement("canvas", {
                    ref: p,
                    className: a()(o, (r = {}, r["SpriteCanvas-module_spriteCanvasHidden__ndzQV"] = !u, r))
                })
            }));

            function I(e, t) {
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
                            u = null == t ? void 0 : t.getCanvas();
                        if (null != u && null != c && 0 !== c.sprites.length) return null == e ? void 0 : e.createConfetti(r, u, c, o, a)
                    }), [e, t]),
                    u = n.useCallback((function(e, t, r) {
                        for (var n = [], i = 0; i < t; i++) {
                            var o = c(e, r);
                            o && n.push(o)
                        }
                        return n
                    }), [c]),
                    s = n.useCallback((function(r) {
                        var n = null == t ? void 0 : t.getCanvas();
                        null != n && (null == e || e.addConfetti(r, n))
                    }), [e, t]),
                    l = n.useCallback((function(t) {
                        null == e || e.deleteConfetti(t)
                    }), [e]),
                    f = n.useCallback((function() {
                        return null == e ? void 0 : e.clearConfetti()
                    }), [e]);
                return n.useMemo((function() {
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
        715420: (e, t, r) => {
            e.exports = r.p + "19f094930b6fb657a372595f72ea08e2.png"
        },
        578862: (e, t, r) => {
            e.exports = r.p + "f7963229b547598b0ad00d0709a23e5d.png"
        },
        297206: (e, t, r) => {
            e.exports = r.p + "f1ddf309c7c2db629a6deae0590fef7d.png"
        },
        406112: (e, t, r) => {
            e.exports = r.p + "99dc9a00df6750595689491e8375c322.png"
        },
        999021: (e, t, r) => {
            e.exports = r.p + "e9b7161fd84bd2fe49ff137517f54a32.png"
        },
        398015: (e, t, r) => {
            e.exports = r.p + "47e70fb32fa1bac0984f0315d0ee37d8.png"
        },
        593098: (e, t, r) => {
            e.exports = r.p + "02d7bd754f28973b2be670fbe9951967.png"
        },
        747132: (e, t, r) => {
            e.exports = r.p + "bb9ab80d4608f897060a500eecd21244.png"
        },
        954512: (e, t, r) => {
            e.exports = r.p + "12f609335019910fcf794763b4dd2d75.png"
        },
        200309: (e, t, r) => {
            e.exports = r.p + "c2d60d152d1156c1097d320737305ca4.png"
        },
        173654: (e, t, r) => {
            e.exports = r.p + "72a8b168ad2c7eea7b2559b5690c7695.svg"
        },
        5084: (e, t, r) => {
            e.exports = r.p + "e1349377226366f95f85ab9eac4586d3.svg"
        },
        950175: (e, t, r) => {
            e.exports = r.p + "b1d4c5e276e3aaa8ec41e6014dd572b2.svg"
        },
        248978: (e, t, r) => {
            e.exports = r.p + "7d883ba72b5dbc0229f5d1980205ee34.svg"
        },
        622507: (e, t, r) => {
            e.exports = r.p + "e843c51c0eec3801b70cae5c45ad343f.svg"
        },
        131687: (e, t, r) => {
            e.exports = r.p + "c6ce0010471b65c0faeda6c53ab297bd.svg"
        },
        12668: (e, t, r) => {
            e.exports = r.p + "70275fe3104cf1d3388586ad8ffd478e.svg"
        },
        740097: (e, t, r) => {
            e.exports = r.p + "81084ff5a27b6e6ff487e479c37d1660.svg"
        },
        489030: (e, t, r) => {
            "use strict";
            r.r(t);
            r.d(t, {
                default: () => Ee
            });
            var n = r(785893),
                i = r(667294),
                o = r(202351),
                a = r(304548),
                c = r(153686),
                u = r(19585),
                s = r(339938),
                l = r(349771),
                f = r(318715),
                d = r(764797),
                p = r(767539);

            function h(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function v(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, i, o = [],
                            a = !0,
                            c = !1;
                        try {
                            for (r = r.call(e); !(a = (n = r.next()).done); a = !0) {
                                o.push(n.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            c = !0;
                            i = e
                        } finally {
                            try {
                                a || null == r.return || r.return()
                            } finally {
                                if (c) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return h(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return h(e, t)
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
            var m = r(681714),
                g = r(118024),
                b = r(455706),
                w = r(708783),
                x = r(473903),
                O = r(652591),
                C = r(694329),
                E = r(938737),
                A = r(294184),
                S = r.n(A),
                P = r(498964),
                j = r(940594),
                _ = r(584228),
                D = r(384411),
                R = r(491260),
                I = r(169844),
                M = r(310126),
                F = r(473708);

            function Z(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }
            var T = M.ZP.getEnableHardwareAcceleration() ? a.AnimatedAvatar : a.Avatar;
            const N = function(e) {
                var t = e.user,
                    r = e.avatarDecorationOverride,
                    i = e.status,
                    o = e.avatarSize,
                    c = void 0 === o ? a.AvatarSizes.SIZE_120 : o,
                    u = e["aria-hidden"],
                    s = void 0 !== u && u,
                    l = (0, I.Z)({
                        user: t,
                        size: c,
                        showPending: !0,
                        avatarDecorationOverride: r
                    }),
                    f = l.avatarDecorationSrc,
                    d = l.avatarSrc,
                    p = l.eventHandlers;
                return (0, n.jsx)(T, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            Z(e, t, r[t])
                        }))
                    }
                    return e
                }({
                    avatarDecoration: f,
                    src: d,
                    size: c,
                    status: i,
                    "aria-label": s ? void 0 : F.Z.Messages.USER_SETTINGS_AVATAR,
                    "aria-hidden": s
                }, p))
            };
            var k = r(504477),
                H = r.n(k),
                z = [{
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
                V = function(e) {
                    var t = e.purchase,
                        r = (0, o.e7)([D.default], (function() {
                            return D.default.locale
                        })),
                        i = (0, l.qS)(t);
                    return (0, n.jsxs)("div", {
                        className: H().purchaseInfo,
                        children: [(0, n.jsx)(a.Text, {
                            variant: "text-sm/semibold",
                            color: "header-primary",
                            children: t.name
                        }), (0, n.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            children: t.summary
                        }), (0, n.jsxs)(a.Text, {
                            variant: "text-xxs/normal",
                            color: "text-muted",
                            children: [F.Z.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
                                date: t.purchasedAt.toLocaleDateString(r, {
                                    month: "long",
                                    year: "numeric"
                                })
                            }), i && (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)("br", {}), F.Z.Messages.CHANGE_DECORATION_MODAL_STARTER_DESC]
                            })]
                        })]
                    })
                },
                U = function(e) {
                    var t = e.children,
                        r = e.category,
                        i = (0, _.Z)(r).backgroundColors,
                        o = null != r ? (0, l.uV)(r.banner, {
                            size: j.yV
                        }) : null;
                    return (0, n.jsx)("div", {
                        className: H().shopPreviewBanner,
                        style: null != o ? {
                            backgroundImage: "url(".concat(o, ")")
                        } : {
                            background: "linear-gradient(".concat(i[0], ", ").concat(i[1], ")")
                        },
                        children: t
                    })
                };
            const L = function(e) {
                var t = e.user,
                    r = e.avatarDecorationOverride,
                    i = e.className,
                    c = (0, o.e7)([R.Z], (function() {
                        return R.Z.getStatus(t.id)
                    })),
                    u = y(null == r ? void 0 : r.skuId),
                    s = u.category,
                    f = u.product,
                    d = u.purchase,
                    p = C.ZP.canUseCollectibles(t),
                    h = (0, l.qS)(d),
                    v = (0, l.mv)(s),
                    m = !p && h;
                return null == f || null != d && !m ? (0, n.jsxs)("div", {
                    className: S()(H().modalPreview, i),
                    children: [(0, n.jsxs)("div", {
                        className: H().previewSections,
                        children: [(0, n.jsx)("div", {
                            className: H().decorationPreview,
                            children: (0, n.jsx)(N, {
                                user: t,
                                avatarDecorationOverride: r
                            })
                        }), (0, n.jsx)("div", {
                            className: H().smallDecorationPreviewsContainer,
                            children: z.map((function(e) {
                                var i = e.avatarSize,
                                    o = e.showStatus;
                                return (0, n.jsx)("div", {
                                    className: H().smallDecorationPreview,
                                    children: (0, n.jsx)(N, {
                                        user: t,
                                        avatarSize: i,
                                        avatarDecorationOverride: r,
                                        status: o ? c : void 0,
                                        "aria-hidden": !0
                                    })
                                }, "".concat(i).concat(o))
                            }))
                        })]
                    }), null != d && (0, n.jsx)(V, {
                        purchase: d
                    })]
                }) : (0, n.jsxs)("div", {
                    className: S()(H().modalPreview, H().shopPreviewContainer, i),
                    children: [(0, n.jsx)(U, {
                        category: s,
                        children: (0, n.jsx)(N, {
                            user: t,
                            avatarDecorationOverride: r
                        })
                    }), (0, n.jsxs)("div", {
                        className: H().shopPreviewTextContainer,
                        children: [(0, n.jsx)(a.Text, {
                            variant: "text-sm/semibold",
                            children: f.name
                        }), (0, n.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            children: m ? F.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_CHURNED : (0, P.EQ)([v, p]).with([!0, !0], (function() {
                                return F.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_PREMIUM
                            })).with([!0, !1], (function() {
                                return F.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER
                            })).with([!1, !0], (function() {
                                return F.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_PURCHASE_PREMIUM
                            })).with([!1, !1], (function() {
                                return F.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_PURCHASE
                            })).exhaustive()
                        })]
                    })]
                })
            };
            var B, G = r(517586),
                W = r(662478),
                q = r(406493),
                Y = r(778613),
                X = r(97990),
                K = r(969292),
                Q = r(616276),
                $ = r(531441),
                J = r(841379);

            function ee(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function te(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, i, o = [],
                            a = !0,
                            c = !1;
                        try {
                            for (r = r.call(e); !(a = (n = r.next()).done); a = !0) {
                                o.push(n.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            c = !0;
                            i = e
                        } finally {
                            try {
                                a || null == r.return || r.return()
                            } finally {
                                if (c) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || ne(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function re(e) {
                return function(e) {
                    if (Array.isArray(e)) return ee(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || ne(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ne(e, t) {
                if (e) {
                    if ("string" == typeof e) return ee(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    return "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ee(e, t) : void 0
                }
            }! function(e) {
                e.PURCHASE = "purchase";
                e.PREMIUM_PURCHASE = "premium_purchase";
                e.PREVIEW = "preview";
                e.PREMIUM_PREVIEW = "premium_preview"
            }(B || (B = {}));
            var ie = {
                    id: "None"
                },
                oe = {
                    id: "Shop"
                };
            const ae = function() {
                var e = (0, f.ZP)([x.default], (function() {
                        return x.default.getCurrentUser()
                    })),
                    t = C.ZP.canUseCollectibles(e),
                    r = (0, f.ZP)([p.Z], (function() {
                        return p.Z.purchases
                    })),
                    n = te((0, f.Wu)([d.Z], (function() {
                        return [d.Z.categories, d.Z.categorySkuIdsByProductSkuId]
                    })), 2),
                    o = n[0],
                    a = n[1];
                return (0, i.useMemo)((function() {
                    var e = (0, l.IM)(o).reduce((function(e, n) {
                        var i = r.get(n.skuId),
                            c = (0, l.qS)(i);
                        if (c && 0 === e.premium_purchase.length) {
                            e.premium_purchase = e.premium_preview;
                            e.premium_preview = []
                        }
                        if (c) {
                            e.premium_purchase.push(n);
                            return e
                        }
                        if (null != i) {
                            e.purchase.push(n);
                            return e
                        }
                        var u = o.get(a[n.skuId]);
                        if (!t && (0, l.mv)(u)) {
                            (e.premium_purchase.length > 0 ? e.premium_purchase : e.premium_preview).push(n);
                            return e
                        }
                        e.preview.push(n);
                        return e
                    }), {
                        purchase: [],
                        premium_purchase: [],
                        preview: [],
                        premium_preview: []
                    });
                    return [{
                        section: B.PURCHASE,
                        items: t || 0 !== e.purchase.length ? [ie, oe].concat(re(e.purchase)) : [],
                        height: 12,
                        header: F.Z.Messages.CHANGE_DECORATION_MODAL_PURCHASE_HEADER
                    }, {
                        section: e.premium_purchase.length > 0 ? B.PREMIUM_PURCHASE : B.PREMIUM_PREVIEW,
                        items: e.premium_purchase.length > 0 ? e.premium_purchase : e.premium_preview,
                        height: 12,
                        header: F.Z.Messages.CHANGE_DECORATION_MODAL_PREMIUM_STARTER_HEADER
                    }, {
                        section: B.PREVIEW,
                        items: e.preview,
                        height: 56,
                        header: F.Z.Messages.CHANGE_DECORATION_MODAL_SHOP_PREVIEW_HEADER
                    }].filter((function(e) {
                        return e.items.length > 0
                    }))
                }), [o, r, a, t])
            };
            var ce = r(158504),
                ue = r.n(ce);

            function se(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function le(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        se(e, t, r[t])
                    }))
                }
                return e
            }

            function fe(e, t) {
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

            function de(e, t) {
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
            var pe = function() {
                    return 80
                },
                he = function(e) {
                    var t = e.children,
                        r = e.className,
                        i = e.onSelect,
                        o = e.isSelected,
                        c = void 0 !== o && o,
                        u = de(e, ["children", "className", "onSelect", "isSelected"]);
                    return (0, n.jsx)(a.Clickable, fe(le({
                        className: S()(ue().decorationGridItem, c ? ue().selected : void 0, r)
                    }, u), {
                        onClick: i,
                        children: t
                    }))
                },
                ve = function(e) {
                    var t = e.user,
                        r = e.avatarDecoration,
                        o = e.innerRef,
                        a = e.section,
                        c = de(e, ["user", "avatarDecoration", "innerRef", "section"]),
                        u = (0, f.ZP)([d.Z], (function() {
                            var e = d.Z.getCategoryForProduct(r.skuId);
                            return (0, l.mv)(e)
                        })),
                        s = C.ZP.canUseCollectibles(t),
                        p = a === B.PREMIUM_PURCHASE && !s,
                        h = i.useRef(null),
                        v = (0, W.Z)(null != o ? o : h),
                        y = (0, J.Z)({
                            user: t,
                            avatarDecorationOverride: r,
                            size: 80,
                            animateOnHover: !v
                        }).avatarDecorationSrc;
                    return (0, n.jsxs)(he, fe(le({
                        className: p ? ue().decorationGridItemChurned : void 0,
                        innerRef: null != o ? o : h
                    }, c), {
                        children: [(0, n.jsx)("img", {
                            className: ue().presetDecorationImg,
                            src: y,
                            alt: r.label
                        }), (a === B.PREVIEW || a === B.PREMIUM_PURCHASE && !s) && (0, n.jsx)($.G2, {
                            icon: u ? q.Z : X.Z,
                            color: G.Z.BACKGROUND_ACCENT,
                            className: ue().itemBadge
                        })]
                    }))
                };
            const ye = function(e) {
                var t = e.user,
                    r = e.pendingAvatarDecoration,
                    i = e.selectedAvatarDecorationRef,
                    o = e.onSelect,
                    c = e.onOpenShop,
                    u = ae();
                return (0, n.jsx)(a.MasonryList, {
                    fade: !0,
                    className: ue().list,
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
                        return (0, P.EQ)(h[s]).with(ie, (function() {
                            return (0, n.jsxs)(he, {
                                style: le({}, l),
                                isSelected: null === r,
                                onSelect: function() {
                                    return o(null)
                                },
                                children: [(0, n.jsx)(Y.Z, {
                                    className: ue().notAllowedIcon
                                }), (0, n.jsx)(a.Text, {
                                    variant: "text-xs/normal",
                                    color: "header-primary",
                                    children: F.Z.Messages.NONE
                                })]
                            }, f)
                        })).with(oe, (function() {
                            return (0, n.jsxs)(he, {
                                style: l,
                                onSelect: c,
                                children: [(0, n.jsx)(K.Z, {
                                    className: ue().shopIcon
                                }), (0, n.jsx)(Q.Z, {
                                    foreground: ue().shopSparkleBig
                                }), (0, n.jsx)(Q.Z, {
                                    foreground: ue().shopSparkleSmall
                                }), (0, n.jsx)(a.Text, {
                                    variant: "text-xs/normal",
                                    color: "header-primary",
                                    children: F.Z.Messages.COLLECTIBLES_SHOP
                                })]
                            }, f)
                        })).otherwise((function(e) {
                            var a = (null == r ? void 0 : r.id) === e.id;
                            return (0, n.jsx)(ve, {
                                style: le({}, l),
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
                            r = t.section,
                            i = t.header;
                        return (0, n.jsx)("div", {
                            className: ue().headings,
                            children: (0, n.jsx)(a.HeadingLevel, {
                                forceLevel: 5,
                                component: (0, n.jsx)(a.Heading, {
                                    variant: "eyebrow",
                                    color: "header-secondary",
                                    children: i
                                }),
                                children: r === B.PREVIEW && (0, n.jsx)(a.Heading, {
                                    variant: "text-sm/normal",
                                    children: F.Z.Messages.CHANGE_DECORATION_MODAL_SHOP_PREVIEW_DESC
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
                    getItemHeight: pe
                })
            };
            var me = r(2590),
                ge = r(203600),
                be = r(919065),
                we = r.n(be);

            function xe(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function Oe(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, i, o = [],
                            a = !0,
                            c = !1;
                        try {
                            for (r = r.call(e); !(a = (n = r.next()).done); a = !0) {
                                o.push(n.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            c = !0;
                            i = e
                        } finally {
                            try {
                                a || null == r.return || r.return()
                            } finally {
                                if (c) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return xe(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return xe(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ce(e) {
                var t = e.user,
                    r = e.categories,
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
                    m = Oe(i.useState((function() {
                        return null != f ? f : void 0 !== h ? h : null == (null == t ? void 0 : t.avatarDecoration) || 0 === r.size ? null : null !== (e = (0, l.IM)(r).find((function(e) {
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
                    D = (0, g.Z)(o),
                    R = (0, E.sr)(x, void 0 === h ? null == t ? void 0 : t.avatarDecoration : h),
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
                return (0, n.jsxs)("div", {
                    className: we().modalBody,
                    children: [(0, n.jsxs)(a.ModalHeader, {
                        separator: !1,
                        className: we().modalHeader,
                        children: [(0, n.jsx)("div", {
                            className: we().modalHeadings,
                            children: (0, n.jsx)(a.HeadingLevel, {
                                component: (0,
                                    n.jsx)(a.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: F.Z.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
                                }),
                                children: !j && (0, n.jsx)(a.Heading, {
                                    variant: "text-sm/normal",
                                    children: F.Z.Messages.CHANGE_DECORATION_MODAL_SHOP_PREVIEW_HEADER_STARTER_DESC
                                })
                            })
                        }), (0, n.jsx)(a.ModalCloseButton, {
                            className: we().modalCloseButton,
                            onClick: u
                        })]
                    }), (0, n.jsxs)(a.ModalContent, {
                        className: we().modalContent,
                        scrollbarType: "none",
                        children: [(0, n.jsx)(ye, {
                            user: t,
                            pendingAvatarDecoration: x,
                            selectedAvatarDecorationRef: _,
                            onSelect: function(e) {
                                O(e);
                                null != e && D(e)
                            },
                            onOpenShop: M
                        }), (0, n.jsx)(L, {
                            className: we().modalPreview,
                            user: t,
                            avatarDecorationOverride: x
                        })]
                    }), (0, n.jsxs)(a.ModalFooter, {
                        className: we().modalFooter,
                        children: [null != P && (!(0, l.qS)(P) || j) || null === x ? (0, n.jsx)(a.Button, {
                            onClick: I,
                            disabled: R,
                            children: F.Z.Messages.AVATAR_DECORATION_MODAL_APPLY
                        }) : j || !(0, l.mv)(S) ? (0, n.jsx)(a.Button, {
                            className: we().modalFooterShopButton,
                            onClick: M,
                            children: F.Z.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
                        }) : (0, n.jsx)(b.Z, {
                            subscriptionTier: ge.Si.TIER_2,
                            buttonText: C.ZP.isPremium(t) ? F.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : F.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
                        }), (0, n.jsx)(a.Button, {
                            look: a.Button.Looks.LINK,
                            color: a.Button.Colors.PRIMARY,
                            onClick: u,
                            children: F.Z.Messages.CANCEL
                        })]
                    })]
                })
            }

            function Ee(e) {
                var t = e.transitionState,
                    r = e.analyticsLocations,
                    s = e.onClose,
                    l = e.initialSelectedDecoration,
                    f = e.isTryItOutFlow,
                    d = (0, o.e7)([x.default], (function() {
                        return x.default.getCurrentUser()
                    })),
                    p = (0, u.Z)(r, c.Z.EDIT_AVATAR_DECORATION_MODAL),
                    h = p.AnalyticsLocationProvider,
                    v = p.analyticsLocations,
                    y = (0, m.ZP)(),
                    g = y.categories,
                    b = y.purchases,
                    w = y.isFetchingCategories,
                    C = y.isFetchingPurchases,
                    E = w || C && 0 === b.size;
                i.useEffect((function() {
                    O.default.track(me.rMx.OPEN_MODAL, {
                        type: "Edit Avatar Decoration Modal",
                        location_stack: v
                    })
                }), [v]);
                return null == d ? null : (0, n.jsx)(h, {
                    children: (0, n.jsx)(a.ModalRoot, {
                        transitionState: t,
                        className: we().modal,
                        size: E ? a.ModalSize.DYNAMIC : a.ModalSize.MEDIUM,
                        children: E ? (0, n.jsx)(a.Spinner, {
                            className: we().spinner,
                            type: a.Spinner.Type.SPINNING_CIRCLE
                        }) : (0, n.jsx)(Ce, {
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
        681714: (e, t, r) => {
            "use strict";
            r.d(t, {
                ZP: () => d
            });
            var n = r(667294),
                i = r(318715),
                o = r(514722),
                a = r(339938),
                c = r(764797),
                u = r(525628),
                s = r(767539);

            function l(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function f(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, i, o = [],
                            a = !0,
                            c = !1;
                        try {
                            for (r = r.call(e); !(a = (n = r.next()).done); a = !0) {
                                o.push(n.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            c = !0;
                            i = e
                        } finally {
                            try {
                                a || null == r.return || r.return()
                            } finally {
                                if (c) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return l(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return l(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function d() {
                var e = (0, u.OE)({
                        location: "useFetchCollectiblesCategoriesAndPurchases"
                    }).canUseCollectiblesIAP,
                    t = "useFetchCollectiblesCategoriesAndPurchases";
                (0, o.j)({
                    location: t + " auto on",
                    autoTrackExposure: !0
                });
                (0, o.j)({
                    location: t + " auto off",
                    autoTrackExposure: !1
                });
                var r, l = function() {
                        var e, t = (0, u.OE)({
                                location: "useMaybeFetchCollectiblesCategories"
                            }).canUseCollectiblesIAP,
                            r = "useMaybeFetchCollectiblesCategories";
                        (0, o.j)({
                            location: r + " auto on",
                            autoTrackExposure: !0
                        });
                        (0, o.j)({
                            location: r + " auto off",
                            autoTrackExposure: !1
                        });
                        var s = f((0, i.Wu)([c.Z], (function() {
                                return [c.Z.isFetching, c.Z.error, null !== (e = c.Z.lastFetched) && void 0 !== e ? e : 0, c.Z.categories]
                            })), 4),
                            l = s[0],
                            d = s[1],
                            p = s[2],
                            h = s[3];
                        (0,
                            n.useEffect)((function() {
                            !t || l || Boolean(d) || Date.now() - p < 6e5 || (0, a.F$)()
                        }), [t, l, p, d]);
                        return {
                            canUseCollectiblesIAP: t,
                            isFetching: l,
                            categories: h,
                            error: d
                        }
                    }(),
                    d = l.isFetching,
                    p = l.categories,
                    h = l.error,
                    v = function() {
                        var e = (0, u.OE)({
                            location: "useFetchPurchases"
                        }).canUseCollectiblesIAP;
                        (0, o.j)({
                            location: "useFetchPurchases auto on",
                            autoTrackExposure: !0
                        });
                        (0, o.j)({
                            location: "useFetchPurchases auto off",
                            autoTrackExposure: !1
                        });
                        var t = f((0, i.Wu)([s.Z], (function() {
                                return [s.Z.isFetching, s.Z.isClaiming, s.Z.fetchError, s.Z.claimError, s.Z.purchases]
                            })), 5),
                            r = t[0],
                            c = t[1],
                            l = t[2],
                            d = t[3],
                            p = t[4];
                        (0, n.useEffect)((function() {
                            e && (0, a.qg)()
                        }), [e]);
                        return {
                            canUseCollectiblesIAP: e,
                            isClaiming: c,
                            fetchError: l,
                            claimError: d,
                            isFetching: r,
                            purchases: p
                        }
                    }(),
                    y = v.isClaiming,
                    m = v.fetchError,
                    g = v.claimError,
                    b = v.isFetching;
                return {
                    canUseCollectiblesIAP: e,
                    isFetching: d || b,
                    isFetchingCategories: d,
                    isFetchingPurchases: b,
                    isClaiming: y,
                    categories: p,
                    purchases: v.purchases,
                    error: null !== (r = null != h ? h : m) && void 0 !== r ? r : g
                }
            }
        },
        940594: (e, t, r) => {
            "use strict";
            r.d(t, {
                yV: () => c,
                IC: () => u,
                Ch: () => s
            });
            var n = r(795308),
                i = r(265022),
                o = r(721741),
                a = r(362660),
                c = 1060,
                u = function(e) {
                    return 3.8 * e
                },
                s = function(e) {
                    var t = (0, i.J2)((0, a.dX)(e[0]), (0, a.dX)(e[1]), .5),
                        r = new o.Z(t[0], t[1], t[2], 1).toHSL();
                    return {
                        background: "linear-gradient(to right, ".concat(e.join(", "), ")"),
                        color: r.lightness > .66 ? n.Z.unsafe_rawColors.BLACK_500.css : n.Z.unsafe_rawColors.WHITE_500.css
                    }
                }
        },
        584228: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => c
            });
            var n = r(389349),
                i = r(795308),
                o = r(4958),
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
                    case n.T.FANTASY:
                        return {
                            backgroundColors: ["#146144", "#021A0E"], buttonColors: ["#028737", "#00694A"], confettiSprites: [r(406112), r(200309)], confettiColors: ["#EFA7F7", "#B646C1", "#56B3B3", "#1A8199", "#7160AF", "#AEC7FF"]
                        };
                    case n.T.ANIME:
                        return {
                            backgroundColors: ["#4B79B0", "#0F0E3A"], buttonColors: ["#8A45C1", "#136897"],
                                confettiSprites: [r(954512), r(398015)], confettiColors: ["#2C9BD9", "#E46A80", "#FFE500", "#BBA8D5", "#3EDDD3", "#E2B761"]
                        };
                    case n.T.BREAKFAST:
                        return {
                            backgroundColors: ["#E8B26B", "#7A3A00"], buttonColors: ["#FFC355", "#FF9537"], confettiSprites: [r(297206), r(578862)], confettiColors: ["#DD9C98", "#FFC037", "#FF6B00", "#FDE081", "#DD923E", "#FFEECC"]
                        };
                    case n.T.DISXCORE:
                        return {
                            backgroundColors: ["#732565", "#111D40"], buttonColors: [i.Z.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.css, i.Z.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.css], confettiSprites: a, confettiColors: ["#F53273", "#9595FF", "#A7FA4E", "#331EAF"]
                        };
                    case "halloween":
                        return {
                            backgroundColors: ["#5280DC", "#060F25"], buttonColors: ["#496BDB", "#3E41B5"], confettiSprites: [r(747132), r(593098)], confettiColors: ["#EE5619", "#FDBE44", "#42D612", "#DC0DDE", "#8A0AE5"]
                        };
                    case "fall":
                        return {
                            backgroundColors: ["#FFCE85", "#923600"], buttonColors: ["#F5A142", "#E4760E"], confettiSprites: [r(999021), r(715420)],
                                confettiColors: ["#FF7138", "#92360C", "#F6A334", "#FFC586", "#FF8A00"]
                        };
                    default:
                        return t
                }
            }
        },
        4958: (e, t, r) => {
            "use strict";
            r.d(t, {
                vv: () => o,
                Br: () => a,
                CA: () => c,
                Ko: () => u,
                We: () => s,
                rq: () => l
            });
            var n = r(652411),
                i = r(5084),
                o = r.n(i)(),
                a = ["#FF73FA", "#FFC0FF", "#FFD836", "#FF9A15", "#A5F7DE", "#51BC9D", "#AEC7FF", "#3E70DD"],
                c = [r(173654), o, r(950175), r(248978), r(622507), r(131687), r(12668), {
                    src: r(740097),
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
                l = new n.qA
        },
        778613: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => u
            });
            var n = r(785893),
                i = (r(667294), r(633878));

            function o(e, t, r) {
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

            function u(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    u = e.height,
                    s = void 0 === u ? 24 : u,
                    l = e.color,
                    f = void 0 === l ? "currentColor" : l,
                    d = e.className,
                    p = e.foreground,
                    h = c(e, ["width", "height", "color", "className", "foreground"]);
                return (0, n.jsxs)("svg", a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            o(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(h)), {
                    className: d,
                    width: r,
                    height: s,
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("path", {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }), (0, n.jsx)("path", {
                        className: p,
                        fill: f,
                        d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"
                    })]
                }))
            }
        },
        969292: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => p
            });
            var n = r(785893),
                i = (r(667294), r(450520)),
                o = r(795308),
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

            function u(e, t) {
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

            function s(e, t) {
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

            function l(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
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

            function d(e, t) {
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
            const p = (0, i.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 23 : t,
                    i = e.height,
                    o = void 0 === i ? 18 : i,
                    c = e.color,
                    u = void 0 === c ? "currentColor" : c,
                    s = d(e, ["width", "height", "color"]);
                return (0,
                    n.jsx)("svg", f(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            l(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, a.Z)(s)), {
                    width: r,
                    height: o,
                    viewBox: "0 0 23 18",
                    fill: "none",
                    children: (0, n.jsx)("path", {
                        d: "M22.8735 7.606L19.7485 0.606C19.585 0.238 19.2079 0 18.7912 0H4.2079C3.79123 0 3.41415 0.238 3.25061 0.606L0.125607 7.606C-0.0129344 7.914 0.0203989 8.269 0.213107 8.55C0.405815 8.832 0.732899 9 1.0829 9H2.12457V17C2.12457 17.552 2.59019 18 3.16623 18H13.5829V11H17.7496V18H19.8329C20.4089 18 20.8746 17.552 20.8746 17V9H21.9162C22.2662 9 22.5933 8.832 22.786 8.551C22.9787 8.269 23.0121 7.915 22.8735 7.606ZM10.4579 15H5.24956V11H10.4579V15ZM20.336 7H17.4933L16.0058 2H18.1048L20.336 7ZM7.67248 7L9.15998 2H10.4579V7H7.67248ZM12.5412 2H13.8391L15.3266 7H12.5412V2ZM4.89436 2H6.99331L5.50581 7H2.66207L4.89436 2Z",
                        fill: u
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    i = e.height,
                    l = void 0 === i ? 24 : i,
                    f = e.color,
                    d = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    h = void 0 === p ? "" : p,
                    v = s(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", u(function(e) {
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
                }({}, (0, a.Z)(v)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
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