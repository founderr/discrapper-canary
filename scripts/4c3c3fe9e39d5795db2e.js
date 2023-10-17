"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [6017, 38479, 72935], {
        652411: (e, t, r) => {
            r.d(t, {
                O_: () => j,
                qA: () => f,
                Ji: () => N,
                uR: () => x
            });
            var n = r(667294),
                o = r(228721),
                i = r(294184),
                c = r.n(i);

            function l(e, t) {
                var r = e.x,
                    n = e.y;
                return r > t.x && r < t.x + t.width && n > t.y && n < t.y + t.height
            }

            function a(e, t) {
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
                            x: r + a(this.dragCoefficient.x, this.velocity.x),
                            y: n + a(this.dragCoefficient.y, this.velocity.y)
                        }
                    }, e.prototype.update = function(e) {
                        var t = Date.now(),
                            r = (t - this._lastUpdatedAt) / 100;
                        this.rotation.update(r), this.dragCoefficient.update(r);
                        var n = this.getNewForces(e, r),
                            o = n.x,
                            i = n.y;
                        this.velocity.update(r), this.velocity.x += o, this.velocity.y += i, this.position.update(r), this.position.x += this.velocity.x * r, this.position.y += this.velocity.y * r, this.size.update(r), this.opacity.update(r), this._lastUpdatedAt = t
                    }, e.prototype.previewPositionUpdate = function(e, t) {
                        var r = t / 100,
                            n = this.velocity.previewUpdate(r),
                            o = this.getNewForces(e, r),
                            i = o.x,
                            c = o.y;
                        n.x += i, n.y += c;
                        var l = this.position.previewUpdate(r);
                        return l.x += n.x * r, l.y += n.y * r, l
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
                p = function(e, t) {
                    return p = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }, p(e, t)
                };

            function O(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function r() {
                    this.constructor = e
                }
                p(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }
            var d = function() {
                return d = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }, d.apply(this, arguments)
            };
            var _ = function(e) {
                    this.value = e
                },
                E = function() {
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
                h = function(e) {
                    function t(t, r, n) {
                        var o = e.call(this, t, r) || this;
                        return o._z = n, o
                    }
                    return O(t, e), t.prototype.update = function(t) {
                        e.prototype.update.call(this, t), this._z.update(t)
                    }, t.prototype.previewUpdate = function(t) {
                        var r = e.prototype.previewUpdate.call(this, t);
                        return d(d({}, r), {
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
                }(E),
                y = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return O(t, e), t.prototype.update = function() {}, t.prototype.previewUpdate = function() {
                        return this.value
                    }, t
                }(_),
                b = function(e) {
                    function t(t, r) {
                        var n = e.call(this, t) || this;
                        return n.addValue = r, n
                    }
                    return O(t, e), t.prototype.update = function(e) {
                        this.value = this.previewUpdate(e)
                    }, t.prototype.previewUpdate = function(e) {
                        return this.value + this.addValue * e
                    }, t
                }(_),
                g = function(e) {
                    function t(t, r, n, o, i, c) {
                        var l = e.call(this, t) || this;
                        l.min = r, l.max = n, l.duration = o;
                        var a = l.value / (l.max - l.min) * l.duration,
                            u = isNaN(a) ? 0 : a;
                        return l.timePassed = u < 0 ? l.duration - u : u, l.directionMultiplier = i, l.easingFunction = c, l
                    }
                    return O(t, e), t.prototype.update = function(e) {
                        var t = this.doUpdate(e),
                            r = t[0],
                            n = t[1],
                            o = t[2];
                        this.value = r, this.directionMultiplier = o, this.timePassed = n
                    }, t.prototype.previewUpdate = function(e) {
                        return this.doUpdate(e)[0]
                    }, t.prototype.doUpdate = function(e) {
                        var t = this.max - this.min,
                            r = this.timePassed + e * this.directionMultiplier,
                            n = Math.min(Math.max(r, 0), this.duration),
                            o = r < 0 || r > this.duration ? -1 * this.directionMultiplier : this.directionMultiplier,
                            i = this.easingFunction(n, this.min, t, this.duration);
                        return [isNaN(i) ? 0 : i, n, o]
                    }, t
                }(_);

            function v(e, t) {
                return e === t ? e : Math.random() * (t - e + 1) + e
            }

            function I(e) {
                var t = Math.floor(v(0, e.length - 1));
                return [e[t], t]
            }

            function w(e, t) {
                return I([e, t])[0]
            }

            function P(e) {
                return "number" == typeof e ? {
                    x: e,
                    y: e
                } : e
            }

            function C(e) {
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
                            return new y(e.value);
                        case "static-random":
                            return new y(v(e.minValue, e.maxValue));
                        case "linear":
                            return new b(e.value, e.addValue);
                        case "linear-random":
                            return new b(v(e.minValue, e.maxValue), v(e.minAddValue, e.maxAddValue));
                        case "oscillating":
                            return new g(e.value, e.start, e.final, e.duration, e.direction, e.easingFunction);
                        case "oscillating-random":
                            return new g(v(e.minValue, e.maxValue), v(e.minStart, e.maxStart), v(e.minFinal, e.maxFinal), v(e.minDuration, e.maxDuration), w(e.minDirection, e.maxDirection), I(e.easingFunctions)[0])
                    }
                }(d(d({}, e), {
                    valueType: "number"
                }))
            }

            function T(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            var t = P(e.value);
                            return new E(new y(t.x), new y(t.y));
                        case "static-random":
                            var r = P(e.minValue),
                                n = P(e.maxValue);
                            return new E(new y(v(r.x, n.x)), new y(v(r.y, n.y)));
                        case "linear":
                            t = P(e.value);
                            var o = P(e.addValue);
                            return new E(new b(t.x, o.x), new b(t.y, o.y));
                        case "linear-random":
                            r = P(e.minValue), n = P(e.maxValue);
                            var i = P(e.minAddValue),
                                c = P(e.maxAddValue);
                            return new E(new b(v(r.x, n.x), v(i.x, c.x)), new b(v(r.y, n.y), v(i.x, c.x)));
                        case "oscillating":
                            t = P(e.value);
                            var l = P(e.start),
                                a = P(e.final),
                                u = P(e.duration),
                                s = P(e.direction);
                            return new E(new g(t.x, l.x, a.x, u.x, s.x, e.easingFunction), new g(t.y, l.y, a.y, u.x, s.y, e.easingFunction));
                        case "oscillating-random":
                            r = P(e.minValue), n = P(e.maxValue);
                            var f = P(e.minStart),
                                p = P(e.maxStart),
                                O = P(e.minFinal),
                                d = P(e.maxFinal),
                                _ = P(e.minDuration),
                                h = P(e.maxDuration),
                                C = P(e.minDirection),
                                R = P(e.maxDirection);
                            return new E(new g(v(r.x, n.x), v(f.x, p.x), v(O.x, d.x), v(_.x, h.x), w(C.x, R.x), I(e.easingFunctions)[0]), new g(v(r.y, n.y), v(f.y, p.y), v(O.y, d.y), v(_.y, h.y), w(C.y, R.y), I(e.easingFunctions)[0]))
                    }
                }(d(d({}, e), {
                    valueType: "Vector2"
                }))
            }

            function S(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            var t = C(e.value);
                            return new h(new y(t.x), new y(t.y), new y(t.z));
                        case "static-random":
                            var r = C(e.minValue),
                                n = C(e.maxValue);
                            return new h(new y(v(r.x, n.x)), new y(v(r.y, n.y)), new y(v(r.z, n.z)));
                        case "linear":
                            t = C(e.value);
                            var o = C(e.addValue);
                            return new h(new b(t.x, o.x), new b(t.y, o.y), new b(t.z, o.z));
                        case "linear-random":
                            r = C(e.minValue), n = C(e.maxValue);
                            var i = C(e.minAddValue),
                                c = C(e.maxAddValue);
                            return new h(new b(v(r.x, n.x), v(i.x, c.x)), new b(v(r.y, n.y), v(i.y, c.y)), new b(v(r.z, n.z), v(i.z, c.z)));
                        case "oscillating":
                            t = C(e.value);
                            var l = C(e.start),
                                a = C(e.final),
                                u = C(e.duration),
                                s = C(e.direction);
                            return new h(new g(t.x, l.x, a.x, u.x, s.x, e.easingFunction), new g(t.y, l.y, a.y, u.z, s.y, e.easingFunction), new g(t.z, l.z, a.z, u.z, s.z, e.easingFunction));
                        case "oscillating-random":
                            r = C(e.minValue), n = C(e.maxValue);
                            var f = C(e.minStart),
                                p = C(e.maxStart),
                                O = C(e.minFinal),
                                d = C(e.maxFinal),
                                _ = C(e.minDuration),
                                E = C(e.maxDuration),
                                P = C(e.minDirection),
                                R = C(e.maxDirection);
                            return new h(new g(v(r.x, n.x), v(f.x, p.x), v(O.x, d.x), v(_.x, E.x), w(P.x, R.x), I(e.easingFunctions)[0]), new g(v(r.y, n.y), v(f.y, p.y), v(O.y, d.y), v(_.y, E.y), w(P.y, R.y), I(e.easingFunctions)[0]), new g(v(r.z, n.z), v(f.z, p.z), v(O.z, d.z), v(_.z, E.z), w(P.z, R.z), I(e.easingFunctions)[0]))
                    }
                }(d(d({}, e), {
                    valueType: "Vector3"
                }))
            }

            function m(e, t, r, n, o) {
                var i = function(e, t) {
                        return d(d({
                            id: t
                        }, s), e)
                    }(t, e),
                    c = T(i.size),
                    l = function(e, t) {
                        if (null != e) {
                            var r = t.sprites.findIndex((function(t) {
                                return r = t, "string" == typeof(n = e) ? r.src === n && r.colorize : r.src === n.src && r.colorize === n.colorize;
                                var r, n
                            }));
                            if (-1 !== r) return [e, r]
                        }
                        return I(t.sprites)
                    }(n, r),
                    a = l[0],
                    f = l[1],
                    p = function(e, t, r) {
                        if (! function(e) {
                                return "string" == typeof e || e.colorize
                            }(e)) return 0;
                        var n = null != t ? r.colors.findIndex((function(e) {
                            return e === t
                        })) : -1;
                        return -1 !== n ? n : Math.floor(v(0, r.colors.length - 1))
                    }(null != n ? n : a, o, r);
                return new u({
                    id: e,
                    position: T(i.position),
                    velocity: T(i.velocity),
                    rotation: S(i.rotation),
                    dragCoefficient: T(i.dragCoefficient),
                    size: c,
                    opacity: R(i.opacity),
                    spriteX: p * r.spriteWidth + 2 * p,
                    spriteY: f * r.spriteHeight + 2 * f,
                    spriteWidth: r.spriteWidth,
                    spriteHeight: r.spriteHeight
                })
            }
            var j = n.forwardRef((function(e, t) {
                var i = e.className,
                    c = e.environment,
                    a = e.onClick,
                    u = e.onMouseDown,
                    s = e.onMouseMove,
                    f = e.onMouseUp,
                    p = e.onBeforeRender,
                    O = e.onAfterRender,
                    _ = function(e, t) {
                        var r = {};
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var o = 0;
                            for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
                        }
                        return r
                    }(e, ["className", "environment", "onClick", "onMouseDown", "onMouseMove", "onMouseUp", "onBeforeRender", "onAfterRender"]),
                    E = n.useRef(null),
                    h = n.useRef(new Map),
                    y = n.useRef(null),
                    b = n.useRef(0),
                    g = n.useRef(0),
                    v = n.useCallback((function() {
                        var e = E.current;
                        if (null != e) {
                            var t = e.getContext("2d");
                            if (null != t) {
                                t.clearRect(0, 0, e.width, e.height), null == p || p(t), h.current.forEach((function(r, n) {
                                    var o = r.confetti,
                                        i = r.spriteCanvas;
                                    o.update(c), o.draw(i, t), o.shouldDestroy(e, c) && h.current.delete(n)
                                })), null == O || O(t), h.current.size > 0 ? y.current = window.requestAnimationFrame(v) : (t.clearRect(0, 0, e.width, e.height), y.current = null);
                                var r = Date.now();
                                0 !== b.current && (g.current = 1e3 / (r - b.current)), b.current = r
                            }
                        }
                    }), [c, O, p]);
                n.useEffect((function() {
                    null != y.current && (window.cancelAnimationFrame(y.current), y.current = window.requestAnimationFrame(v))
                }), [v]);
                var I = n.useCallback((function(e, t) {
                        h.current.set(e.id, {
                            confetti: e,
                            spriteCanvas: t
                        }), null == y.current && v()
                    }), [v]),
                    w = n.useCallback((function(e, t, r, n, i) {
                        var c, l = m(null !== (c = e.id) && void 0 !== c ? c : (0, o.Z)(), e, r, n, i);
                        return I(l, t), l
                    }), [I]),
                    P = n.useCallback((function(e) {
                        h.current.delete(e)
                    }), []),
                    C = n.useCallback((function() {
                        return h.current.clear()
                    }), []),
                    R = n.useCallback((function() {
                        return E.current
                    }), []);
                n.useImperativeHandle(t, (function() {
                    return {
                        createConfetti: w,
                        addConfetti: I,
                        deleteConfetti: P,
                        clearConfetti: C,
                        getCanvas: R
                    }
                }), [w, I, P, C, R]);
                var T = n.useCallback((function(e, t) {
                        var r, n, o = t.clickHandler,
                            i = t.mouseHandler;
                        if (null != o || null != i) {
                            var a = null === (r = E.current) || void 0 === r ? void 0 : r.getBoundingClientRect();
                            if (null != a) {
                                var u = function(e, t) {
                                    if (null == t) throw new Error("element should not be null");
                                    var r = t.getBoundingClientRect();
                                    return {
                                        x: e.clientX - r.left,
                                        y: e.clientY - r.top
                                    }
                                }(e, E.current);
                                if (l(u, {
                                        x: a.left,
                                        y: a.top,
                                        width: a.width,
                                        height: a.height
                                    })) {
                                    if (null != i) return i(e);
                                    if (null != o) {
                                        var s = -1e3 / g.current * 2,
                                            f = function(e, t) {
                                                for (var r = 0, n = Array.from(e.values()); r < n.length; r++) {
                                                    var o = n[r];
                                                    if (null != o && t(o)) return o
                                                }
                                                return null
                                            }(h.current, (function(e) {
                                                var t = e.confetti,
                                                    r = t.previewPositionUpdate(c, s);
                                                return l(u, {
                                                    x: r.x - t.width / 2,
                                                    y: r.y - t.height / 2,
                                                    width: t.width,
                                                    height: t.height
                                                })
                                            }));
                                        o(e, null !== (n = null == f ? void 0 : f.confetti) && void 0 !== n ? n : null)
                                    }
                                }
                            }
                        }
                    }), [c]),
                    S = n.useCallback((function(e) {
                        return T(e, {
                            clickHandler: a
                        })
                    }), [T, a]),
                    j = n.useCallback((function(e) {
                        return T(e, {
                            clickHandler: u
                        })
                    }), [T, u]),
                    N = n.useCallback((function(e) {
                        return T(e, {
                            mouseHandler: s
                        })
                    }), [T, s]),
                    x = n.useCallback((function(e) {
                        return T(e, {
                            mouseHandler: f
                        })
                    }), [T, f]);
                return n.useEffect((function() {
                    var e = function(e, t, r) {
                        null != r && window.addEventListener(e, t)
                    };
                    return e("click", S, a), e("mousedown", j, u), e("mousemove", N, s), e("mouseup", x, f),
                        function() {
                            window.removeEventListener("click", S), window.removeEventListener("mousedown", j), window.removeEventListener("mousemove", N), window.removeEventListener("mouseup", N)
                        }
                }), [S, j, N, x, a, u, s, f]), n.useEffect((function() {
                    var e = E.current,
                        t = new ResizeObserver((function() {
                            ! function(e) {
                                if (null != e) {
                                    var t = e.getBoundingClientRect(),
                                        n = t.width,
                                        o = t.height;
                                    e.width = n * r.g.devicePixelRatio, e.height = o * r.g.devicePixelRatio
                                }
                            }(E.current)
                        }));
                    return null != e && t.observe(e),
                        function() {
                            null != e && t.unobserve(e)
                        }
                }), []), n.createElement("canvas", d({}, _, {
                    className: i,
                    ref: E
                }))
            }));
            ! function(e, t) {
                void 0 === t && (t = {});
                var r = t.insertAt;
                if ("undefined" != typeof document) {
                    var n = document.head || document.getElementsByTagName("head")[0],
                        o = document.createElement("style");
                    o.type = "text/css",
                        "top" === r && n.firstChild ? n.insertBefore(o, n.firstChild) : n.appendChild(o), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e))
                }
            }(".SpriteCanvas-module_spriteCanvasHidden__ndzQV {\n  display: none;\n  position: absolute;\n  width: 0;\n  height: 0;\n  left: -100%;\n}\n");
            var N = n.forwardRef((function(e, t) {
                var r, i = e.className,
                    l = e.visible,
                    a = void 0 !== l && l,
                    u = e.sprites,
                    s = e.colors,
                    f = e.spriteWidth,
                    p = e.spriteHeight,
                    O = n.useRef(null),
                    d = n.useRef([]),
                    _ = n.useRef(!1),
                    E = n.useRef({});
                n.useImperativeHandle(t, (function() {
                    return {
                        getCanvas: function() {
                            return O.current
                        },
                        getCreateData: function() {
                            return {
                                sprites: d.current,
                                colors: s,
                                spriteWidth: f,
                                spriteHeight: p
                            }
                        },
                        addReadyListener: function(e) {
                            var t = (0, o.Z)();
                            return E.current[t] = e, t
                        },
                        removeReadyListener: function(e) {
                            delete E.current[e]
                        },
                        isReady: _.current
                    }
                }), [s, p, f]);
                var h = n.useCallback((function() {
                        var e = O.current,
                            t = null == e ? void 0 : e.getContext("2d", {
                                willReadFrequently: !0
                            });
                        null != t && null != e && (t.clearRect(0, 0, e.width, e.height),
                            d.current.forEach((function(e, r) {
                                var n = function(n, o) {
                                    var i = f * o + 2 * o,
                                        c = p * r + 2 * r;
                                    if (t.drawImage(e.image, i, c, f, p), null != n) {
                                        for (var l = t.getImageData(i, c, f, p), a = function(e) {
                                                "#" === e[0] && (e = e.slice(1));
                                                var t = parseInt(e, 16);
                                                return {
                                                    r: t >> 16 & 255,
                                                    g: t >> 8 & 255,
                                                    b: 255 & t
                                                }
                                            }(n), u = 0; u < l.data.length; u += 4) l.data[u] = a.r, l.data[u + 1] = a.g, l.data[u + 2] = a.b;
                                        t.putImageData(l, i, c)
                                    }
                                };
                                e.colorize ? s.forEach((function(e, t) {
                                    return n(e, t)
                                })) : n(null, 0)
                            })))
                    }), [s, p, f]),
                    y = n.useCallback((function() {
                        var e = u.map((function(e) {
                            var t = new Image,
                                r = "string" == typeof e ? e : e.src,
                                n = "string" == typeof e || e.colorize;
                            t.src = r;
                            var o = new Promise((function(e) {
                                t.onload = e
                            }));
                            return {
                                colorize: n,
                                image: t,
                                src: r,
                                loadPromise: o
                            }
                        }));
                        return Promise.all(e.map((function(e) {
                            return e.loadPromise
                        }))).then((function() {
                            d.current = e.map((function(e) {
                                return {
                                    colorize: e.colorize,
                                    image: e.image,
                                    src: e.src
                                }
                            }))
                        }))
                    }), [u]),
                    b = n.useCallback((function(e) {
                        for (var t in E.current) E.current[t](e)
                    }), []),
                    g = n.useCallback((function() {
                        return function(e, t, r, n) {
                            return new(r || (r = Promise))((function(o, i) {
                                function c(e) {
                                    try {
                                        a(n.next(e))
                                    } catch (e) {
                                        i(e)
                                    }
                                }

                                function l(e) {
                                    try {
                                        a(n.throw(e))
                                    } catch (e) {
                                        i(e)
                                    }
                                }

                                function a(e) {
                                    var t;
                                    e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                                        e(t)
                                    }))).then(c, l)
                                }
                                a((n = n.apply(e, t || [])).next())
                            }))
                        }(void 0, void 0, void 0, (function() {
                            return function(e, t) {
                                var r, n, o, i, c = {
                                    label: 0,
                                    sent: function() {
                                        if (1 & o[0]) throw o[1];
                                        return o[1]
                                    },
                                    trys: [],
                                    ops: []
                                };
                                return i = {
                                    next: l(0),
                                    throw: l(1),
                                    return: l(2)
                                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                                    return this
                                }), i;

                                function l(l) {
                                    return function(a) {
                                        return function(l) {
                                            if (r) throw new TypeError("Generator is already executing.");
                                            for (; i && (i = 0, l[0] && (c = 0)), c;) try {
                                                if (r = 1, n && (o = 2 & l[0] ? n.return : l[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, l[1])).done) return o;
                                                switch (n = 0, o && (l = [2 & l[0], o.value]), l[0]) {
                                                    case 0:
                                                    case 1:
                                                        o = l;
                                                        break;
                                                    case 4:
                                                        return c.label++, {
                                                            value: l[1],
                                                            done: !1
                                                        };
                                                    case 5:
                                                        c.label++, n = l[1], l = [0];
                                                        continue;
                                                    case 7:
                                                        l = c.ops.pop(), c.trys.pop();
                                                        continue;
                                                    default:
                                                        if (!(o = c.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== l[0] && 2 !== l[0])) {
                                                            c = 0;
                                                            continue
                                                        }
                                                        if (3 === l[0] && (!o || l[1] > o[0] && l[1] < o[3])) {
                                                            c.label = l[1];
                                                            break
                                                        }
                                                        if (6 === l[0] && c.label < o[1]) {
                                                            c.label = o[1], o = l;
                                                            break
                                                        }
                                                        if (o && c.label < o[2]) {
                                                            c.label = o[2], c.ops.push(l);
                                                            break
                                                        }
                                                        o[2] && c.ops.pop(), c.trys.pop();
                                                        continue
                                                }
                                                l = t.call(e, c)
                                            } catch (e) {
                                                l = [6, e], n = 0
                                            } finally {
                                                r = o = 0
                                            }
                                            if (5 & l[0]) throw l[1];
                                            return {
                                                value: l[0] ? l[1] : void 0,
                                                done: !0
                                            }
                                        }([l, a])
                                    }
                                }
                            }(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, y()];
                                    case 1:
                                        return e.sent(), h(), _.current = !0, b(!0), [2]
                                }
                            }))
                        }))
                    }), [b, y, h]);
                return n.useEffect((function() {
                    g()
                }), [g]), n.useEffect((function() {
                    return function() {
                        return b(!1)
                    }
                }), [b]), n.useEffect((function() {
                    null != O.current && (O.current.width = (f + 2) * Math.max(s.length, 1), O.current.height = (p + 2) * u.length)
                }), [s.length, p, f, u.length]), n.createElement("canvas", {
                    ref: O,
                    className: c()(i, (r = {}, r["SpriteCanvas-module_spriteCanvasHidden__ndzQV"] = !a, r))
                })
            }));

            function x(e, t) {
                var r, o = n.useState(null !== (r = null == t ? void 0 : t.isReady) && void 0 !== r && r),
                    i = o[0],
                    c = o[1];
                n.useEffect((function() {
                    var e = null == t ? void 0 : t.addReadyListener(c);
                    return function() {
                        null != e && (null == t || t.removeReadyListener(e))
                    }
                }), [t]);
                var l = n.useCallback((function(r, n) {
                        var o = void 0 === n ? {} : n,
                            i = o.sprite,
                            c = o.color,
                            l = null == t ? void 0 : t.getCreateData(),
                            a = null == t ? void 0 : t.getCanvas();
                        if (null != a && null != l && 0 !== l.sprites.length) return null == e ? void 0 : e.createConfetti(r, a, l, i, c)
                    }), [e, t]),
                    a = n.useCallback((function(e, t, r) {
                        for (var n = [], o = 0; o < t; o++) {
                            var i = l(e, r);
                            i && n.push(i)
                        }
                        return n
                    }), [l]),
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
                        createConfetti: l,
                        createMultipleConfetti: a,
                        addConfetti: u,
                        clearConfetti: f,
                        deleteConfetti: s,
                        isReady: i && null != t && null != e
                    }
                }), [u, f, e, l, a, s, i, t])
            }
        },
        620745: (e, t, r) => {
            var n = r(973935);
            t.s = n.createRoot;
            n.hydrateRoot
        },
        72831: (e, t, r) => {
            r.d(t, {
                Z: () => E
            });
            var n, o = r(785893),
                i = (r(667294), r(294184)),
                c = r.n(i),
                l = r(289283),
                a = r(304548),
                u = r(189865),
                s = r(559968),
                f = r(473708),
                p = r(601334),
                O = r.n(p);

            function d(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }! function(e) {
                e.DEFAULT = "";
                e.BOLD = "Bold";
                e.SOLID = "Solid"
            }(n || (n = {}));
            var _ = function(e) {
                var t, r = e.closeAction,
                    i = e.variant,
                    p = e.keybind,
                    _ = e.className;
                return (0, o.jsxs)("div", {
                    className: c()(O().container, _),
                    children: [(0, o.jsx)(a.Clickable, {
                        className: c()(O().closeButton, (t = {}, d(t, O().closeButtonBold, i === n.BOLD), d(t, O().closeButtonSolid, i === n.SOLID), t)),
                        onClick: r,
                        "aria-label": f.Z.Messages.CLOSE,
                        children: i === n.SOLID ? (0, o.jsx)(s.Z, {
                            width: 24,
                            height: 24,
                            "aria-hidden": !0
                        }) : (0, o.jsx)(u.Z, {
                            width: 18,
                            height: 18,
                            "aria-hidden": !0
                        })
                    }), l.tq ? null : (0, o.jsx)("div", {
                        className: c()(O().keybind),
                        "aria-hidden": !0,
                        children: p
                    })]
                })
            };
            _.defaultProps = {
                variant: n.DEFAULT
            };
            _.Variants = n;
            const E = _
        },
        661299: (e, t, r) => {
            r.d(t, {
                Z: () => f
            });
            var n = r(785893),
                o = (r(667294),
                    r(294184)),
                i = r.n(o),
                c = r(228721),
                l = r(349480),
                a = r.n(l);

            function u(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }
            var s = (0, c.Z)();
            const f = function(e) {
                var t, r = e.open,
                    o = e.className,
                    c = e.withHighlight,
                    l = void 0 !== c && c;
                return (0, n.jsxs)("svg", {
                    width: "18",
                    height: "18",
                    className: i()(a().button, o, (t = {}, u(t, a().open, r), u(t, a().withHighlight, l), t)),
                    children: [l && (0, n.jsx)("defs", {
                        children: (0, n.jsxs)("linearGradient", {
                            id: s,
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
                            stroke: l ? "url(#".concat(s, ")") : "currentColor",
                            d: "M4.5 4.5l9 9",
                            strokeLinecap: "round"
                        }), (0, n.jsx)("path", {
                            stroke: l ? "url(#".concat(s, ")") : "currentColor",
                            d: "M13.5 4.5l-9 9",
                            strokeLinecap: "round"
                        })]
                    })]
                })
            }
        },
        666303: (e, t, r) => {
            r.d(t, {
                e: () => u
            });
            var n = r(785893),
                o = (r(667294), r(795308)),
                i = r(633878);

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

            function a(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            var u = function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    u = e.height,
                    s = void 0 === u ? 24 : u,
                    f = e.color,
                    p = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    O = e.colorClass,
                    d = void 0 === O ? "" : O,
                    _ = a(e, ["width", "height", "color", "colorClass"]);
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
                }({}, (0, i.Z)(_)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M18.843 17.847A9.004 9.004 0 0 0 15 3.513V4a3 3 0 0 1-3 3h-.77a.23.23 0 0 0-.23.23A2.77 2.77 0 0 1 8.23 10a.23.23 0 0 0-.23.23v1.52c0 .138.112.25.25.25H13a3 3 0 0 1 3 3v.77c0 .127.103.23.23.23a2.77 2.77 0 0 1 2.613 1.847Zm-15.66-7.664A9.001 9.001 0 0 0 11 20.945v-2.714a.23.23 0 0 0-.23-.231h-.649A2.121 2.121 0 0 1 8 15.879c0-.563-.223-1.102-.621-1.5l-4.196-4.196ZM23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11Z",
                        clipRule: "evenodd",
                        className: d
                    })
                }))
            }
        },
        361290: (e, t, r) => {
            r.d(t, {
                t: () => u
            });
            var n = r(785893),
                o = (r(667294), r(795308)),
                i = r(633878);

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

            function a(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            var u = function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    u = e.height,
                    s = void 0 === u ? 24 : u,
                    f = e.color,
                    p = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    O = e.colorClass,
                    d = void 0 === O ? "" : O,
                    _ = a(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsxs)("svg", l(function(e) {
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
                }({}, (0, i.Z)(_)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("g", {
                        clipPath: "url(#a)",
                        children: (0, n.jsx)("path", {
                            fill: "string" == typeof p ? p : p.css,
                            d: "m2.392 8.39 8.389-6.452a2 2 0 0 1 2.438 0l8.389 6.453c1.345 1.035.871 3.17-.786 3.537L20.5 12l-.82 8.2a2 2 0 0 1-1.99 1.8H16a1 1 0 0 1-1-1v-5a3 3 0 0 0-6 0v5a1 1 0 0 1-1 1H6.31a2 2 0 0 1-1.99-1.8L3.5 12l-.322-.072c-1.657-.368-2.131-2.502-.786-3.537Z",
                            className: d
                        })
                    }), (0, n.jsx)("defs", {
                        children: (0, n.jsx)("clipPath", {
                            id: "a",
                            children: (0, n.jsx)("path", {
                                fill: "#fff",
                                d: "M0 0h24v24H0z"
                            })
                        })
                    })]
                }))
            }
        },
        43338: (e, t, r) => {
            r.d(t, {
                X: () => u
            });
            var n = r(785893),
                o = (r(667294), r(795308)),
                i = r(633878);

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

            function a(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            var u = function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    u = e.height,
                    s = void 0 === u ? 24 : u,
                    f = e.color,
                    p = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    O = e.colorClass,
                    d = void 0 === O ? "" : O,
                    _ = a(e, ["width", "height", "color", "colorClass"]);
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
                }({}, (0, i.Z)(_)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm13.35 8.133 3.5 4.667a.75.75 0 0 1-.6 1.2H5.81a.75.75 0 0 1-.585-1.218l1.854-2.318a1.5 1.5 0 0 1 2.342 0l.506.633 2.223-2.964a2 2 0 0 1 3.2 0Zm-5.146-7.156c.229-.91-.88-1.55-1.555-.898a.934.934 0 0 1-1.298 0c-.675-.653-1.784-.013-1.556.898a.934.934 0 0 1-.649 1.125c-.903.258-.903 1.538 0 1.796a.934.934 0 0 1 .65 1.125c-.229.91.88 1.55 1.555.898a.934.934 0 0 1 1.298 0c.675.653 1.784.013 1.556-.898a.934.934 0 0 1 .649-1.125c.903-.258.903-1.538 0-1.796a.934.934 0 0 1-.65-1.125Z",
                        clipRule: "evenodd",
                        className: d
                    })
                }))
            }
        },
        147751: (e, t, r) => {
            r.d(t, {
                q: () => u
            });
            var n = r(785893),
                o = (r(667294), r(795308)),
                i = r(633878);

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

            function a(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            var u = function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    u = e.height,
                    s = void 0 === u ? 24 : u,
                    f = e.color,
                    p = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    O = e.colorClass,
                    d = void 0 === O ? "" : O,
                    _ = a(e, ["width", "height", "color", "colorClass"]);
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
                }({}, (0, i.Z)(_)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6Z",
                        clipRule: "evenodd",
                        className: d
                    })
                }))
            }
        },
        663207: (e, t, r) => {
            r.d(t, {
                r: () => u
            });
            var n = r(785893),
                o = (r(667294), r(795308)),
                i = r(633878);

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

            function a(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            var u = function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    u = e.height,
                    s = void 0 === u ? 24 : u,
                    f = e.color,
                    p = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    O = e.colorClass,
                    d = void 0 === O ? "" : O,
                    _ = a(e, ["width", "height", "color", "colorClass"]);
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
                }({}, (0, i.Z)(_)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        d: "M10.815 2.861c.373-1.148 1.997-1.148 2.37 0l1.893 5.824H21.2c1.207 0 1.71 1.545.733 2.255l-4.954 3.599 1.892 5.824c.373 1.148-.941 2.103-1.918 1.393L12 18.156l-4.954 3.6c-.977.71-2.291-.245-1.918-1.393L7.02 14.54l-4.954-3.6c-.976-.71-.475-2.254.733-2.254h6.123l1.893-5.824Z",
                        className: d
                    })
                }))
            }
        },
        142643: (e, t, r) => {
            r.d(t, {
                Z: () => o
            });
            var n;
            ! function(e) {
                e.CHANNEL_CHAT_RESIZABLE_SIDEBAR_RESIZE_HANDLE_WIDTH = "8px";
                e.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE = "485px";
                e.ACTIVITIES_HOME_WHATS_NEW_TILE_WIDTH = "224px";
                e.ACTIVITIES_HOME_WHATS_NEW_HORIZONTAL_MARGIN = "10px";
                e.ACTIVITIES_HOME_HAPPENING_NOW_CARD_WIDTH = "305px";
                e.ACTIVITIES_HOME_HAPPENING_NOW_GAP = "16px";
                e.ACTIVITY_BOOKMARK_EMBED_IMAGE_WIDTH = "356px";
                e.FOLDER_ITEM_ANIMATION_DURATION = "150ms";
                e.FOLDER_ITEM_GUILD_ICON_SIZE = "48px";
                e.GUILD_TOOLTIP_ICON_SIZE = "20px";
                e.GUILD_TOOLTIP_ICON_SIZE_V_2 = "16px";
                e.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING = "2px";
                e.FULL_SCREEN_LAYER_ANIMATION_DURATION = "150ms";
                e.GUILD_SETTINGS_PREMIUM_TIER_STATUS_PROGRESS_WITH_SUBSCRIPTIONS_MARGIN_TOP = "7px";
                e.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_DIMENSIONS = "76px";
                e.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_PADDING = "2px";
                e.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_MARGIN = "0";
                e.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING = "8px";
                e.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE = "32px";
                e.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN = "8px";
                e.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE = "24px";
                e.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE = "1px";
                e.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL = "12px";
                e.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL = "360px";
                e.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM = "446px";
                e.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP = "0";
                e.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS = "8px";
                e.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT = "0";
                e.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM = "0";
                e.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT = "8px";
                e.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT = "30px";
                e.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS = "96px";
                e.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL = "80px";
                e.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING = "2px";
                e.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN = "12px";
                e.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT = "54px";
                e.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT = "32px";
                e.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_PRIMARY_DIMENSIONS = "28px";
                e.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_SECONDARY_DIMENSIONS = "32px";
                e.STICKERS_CONSTANTS_STICKER_DIMENSION = "160px";
                e.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN_SMALL = "4px";
                e.ASPECT_STABLE_IMAGE_CONTAINER_PADDING = "20px";
                e.USER_PROFILE_THEMED_CONTAINER_USER_PROFILE_THEMED_PADDING = "4px";
                e.USER_PROFILE_THEMED_CONTAINER_USER_POPOUT_WIDTH = "340px";
                e.USER_PROFILE_THEMED_CONTAINER_PROFILE_EFFECTS_USER_POPOUT_WIDTH = "280px";
                e.USER_BANNER_PREMIUM_BANNER_HEIGHT_POPOUT = "120px";
                e.USER_BANNER_PREMIUM_BANNER_HEIGHT_NO_BANNER_IMAGE_POPOUT = "90px";
                e.USER_BANNER_BANNER_HEIGHT_POPOUT = "60px";
                e.USER_BANNER_PREMIUM_BANNER_HEIGHT_PROFILE = "212px";
                e.USER_BANNER_BANNER_HEIGHT_PROFILE = "106px";
                e.USER_BANNER_BANNER_HEIGHT_POMELO = "64px";
                e.USER_BANNER_PREMIUM_BANNER_HEIGHT_SETTINGS = "100px";
                e.USER_BANNER_BANNER_HEIGHT_PANEL = "120px";
                e.USER_BANNER_CANCEL_MODAL_HEIGHT = "42px";
                e.PREMIUM_GUILD_PROGRESS_BAR_PROGRESS_BAR_WIDTH = "24px";
                e.PREMIUM_GUILD_PROGRESS_BAR_TIER_MARKER_SIZE = "16px";
                e.ACTIVITY_SHELF_MODAL_MODAL_PADDING = "80px";
                e.ACTIVITY_SHELF_MODAL_MODAL_WIDTH = "496px";
                e.ACTIVITY_SHELF_MODAL_MODAL_MIN_WIDTH = "496px";
                e.ACTIVITY_SHELF_MODAL_MODAL_MAX_WIDTH = "1024px";
                e.ACTIVITY_SHELF_MODAL_MODAL_MAX_HEIGHT = "720px";
                e.ACTIVITY_SHELF_MODAL_MODAL_ART_HEIGHT = "64px";
                e.ACTIVITY_SHELF_ITEM_ACTIVITY_ITEM_HEIGHT = "230px";
                e.ACTIVITY_SHELF_ITEM_LARGE_ACTIVITY_ITEM_HEIGHT = "143px";
                e.ACTIVITY_SHELF_SLIDE_ACTIVITY_DIRECTORY_SHELF_GRID_GAP = "16px";
                e.LIVE_INDICATOR_BORDER_RADIUS = "16px";
                e.GUILD_PRODUCT_DOWNLOAD_MODAL_HEADER_IMAGE_WIDTH = "119px";
                e.FOLDER_ITEM_GUILD_ICON_MARGIN = "8px";
                e.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_LARGE = "288px";
                e.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_SMALL = "225px";
                e.EMBEDDED_APPLICATION_INVITE_CONTENT_WIDTH = "576px";
                e.GUILD_ROLE_SUBSCRIPTION_CARD_BASIC_INFO_TIER_IMAGE_SIZE = "80px";
                e.GUILD_ROLE_SUBSCRIPTION_CARD_BASIC_INFO_TIER_IMAGE_SIZE_MOBILE = "48px";
                e.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH = "1024px";
                e.GUILD_COUNT_SMALL_ICON_SIZE = "16px";
                e.GUILD_COUNT_LARGE_ICON_SIZE = "20px";
                e.GUILD_BOOSTING_SIDEBAR_DISPLAY_CONDITIONAL_BOTTOM_MARGIN = "12px";
                e.USER_PREMIUM_GUILD_SUBSCRIPTION_EASTER_EGG_SIZE = "196px";
                e.APPLICATION_SUBSCRIPTION_CARD_LISTING_IMAGE_SIZE = "40px";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL = "4px";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT = "8px";
                e.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE = "32px";
                e.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL = "8px";
                e.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE = "24px";
                e.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL = "2px";
                e.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING = "4px";
                e.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE = "1px";
                e.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL = "12px";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL = "4px";
                e.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE = "24px";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP = "0";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT = "0";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM = "8px";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP = "8px";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM = "12px";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_PREMIUM_UPSELL_HEIGHT = "54px";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_PREMIUM_UPSELL_MARGIN_TOP = "16px";
                e.VOICE_WIDGET_TOP_MARGIN = "var(--custom-widget-bar-height) + calc(2 * var(--custom-widget-bar-padding))";
                e.EXPRESSION_SUGGESTIONS_CONTAINER_PADDING = "8px";
                e.EXPRESSION_SUGGESTIONS_STICKER_SUGGESTION_SIZE = "48px";
                e.EXPRESSION_SUGGESTIONS_STICKER_SUGGESTION_MARGIN = "8px";
                e.COLLECTION_GALLERY_MEDIA_BREAKPOINT = "1024px";
                e.COLLECTION_GALLERY_COLUMN_CARD_HEIGHT = "600px";
                e.COLLECTION_GALLERY_ROW_CARD_HEIGHT = "283px";
                e.COLLECTION_LIST_CARD_GAP = "16px";
                e.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_OVERVIEW_SETTINGS_MAX_WIDTH = "520px";
                e.IMPORT_BENEFITS_MODAL_ROLE_ICON_SIZE = "40px";
                e.ROLE_ICON_UPLOADER_ICON_SIZE = "24px";
                e.GRADIENT_PROGRESS_NOTCH_WIDTH = "8px";
                e.GAME_LIST_ROW_MIN_HEIGHT = "62px";
                e.GAME_LIST_LINKED_TO_GLOW_DURATION = "2000ms";
                e.INTERACTION_IFRAME_MODAL_MODAL_MIN_WIDTH = "320px";
                e.INTERACTION_IFRAME_MODAL_MODAL_MAX_WIDTH = "1280px";
                e.INTERACTION_IFRAME_MODAL_MODAL_MARGIN = "80px";
                e.INTERACTION_IFRAME_MODAL_MODAL_HEADER_HEIGHT = "52px";
                e.APPLICATION_DIRECTORY_PROFILE_ICON_SIZE = "122px"
            }(n || (n = {}));
            const o = n
        },
        255875: (e, t, r) => {
            r.d(t, {
                E: () => O,
                h: () => d
            });
            var n = r(785893),
                o = r(667294),
                i = r(652411),
                c = r(318715),
                l = r(316878),
                a = r(2590);

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
            var p = {
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
                        return a.dG4
                    },
                    removeClickListener: a.dG4
                },
                O = o.createContext(p);

            function d(e) {
                var t = e.children,
                    r = e.confettiCanvas,
                    a = e.spriteCanvas,
                    u = e.baseConfig,
                    d = e.addClickListener,
                    _ = e.removeClickListener,
                    E = (0, i.uR)(r, a),
                    h = (0, c.ZP)([l.Z], (function() {
                        return l.Z.useReducedMotion
                    })),
                    y = o.useMemo((function() {
                        return h ? p : {
                            confettiCanvas: r,
                            cannon: E,
                            createConfetti: function(e, t) {
                                return E.createConfetti(s({}, u, e), t)
                            },
                            createConfettiAt: function(e, t, r, n) {
                                return E.createConfetti(s(f(s({}, u), {
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
                                return E.createMultipleConfetti(s({}, u, e), t, r)
                            },
                            createMultipleConfettiAt: function(e, t, r) {
                                var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                                    o = arguments.length > 4 ? arguments[4] : void 0;
                                return E.createMultipleConfetti(s(f(s({}, u), {
                                    position: {
                                        type: "static",
                                        value: {
                                            x: e,
                                            y: t
                                        }
                                    }
                                }), r), n, o)
                            },
                            addClickListener: d,
                            removeClickListener: _
                        }
                    }), [d, u, E, r, h, _]);
                return (0, n.jsx)(O.Provider, {
                    value: y,
                    children: t
                })
            }
        },
        337509: (e, t, r) => {
            r.d(t, {
                Q: () => n,
                i: () => i
            });
            var n, o = r(761673);
            ! function(e) {
                e[e.PARTNERED = 0] = "PARTNERED";
                e[e.VERIFIED = 1] = "VERIFIED";
                e[e.VERIFIED_AND_PARTNERED = 2] = "VERIFIED_AND_PARTNERED";
                e[e.COMMUNITY = 3] = "COMMUNITY";
                e[e.DISCOVERABLE = 4] = "DISCOVERABLE";
                e[e.STAFF = 5] = "STAFF";
                e[e.NONE = 6] = "NONE"
            }(n || (n = {}));

            function i(e) {
                return e.staff ? n.STAFF : e.verified && e.partnered ? n.VERIFIED_AND_PARTNERED : e.verified ? n.VERIFIED : e.partnered ? n.PARTNERED : e.community && e.visibility === o.PZ.PUBLIC ? n.DISCOVERABLE : e.community ? n.COMMUNITY : n.NONE
            }
        },
        243399: (e, t, r) => {
            r.d(t, {
                E: () => o
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

            function o(e) {
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
                XX: () => c
            });
            var n, o = r(848285),
                i = r(2590);
            ! function(e) {
                e.PUBLIC = "PUBLIC";
                e.INVITE_ONLY = "INVITE_ONLY"
            }(n || (n = {}));

            function c(e) {
                var t = new Set(e.features),
                    r = t.has(i.oNc.COMMUNITY) && t.has(i.oNc.DISCOVERABLE) ? n.PUBLIC : n.INVITE_ONLY,
                    c = function(e) {
                        if (null == e) return !1;
                        if (e instanceof o.Z) return e.premiumSubscriberCount > 0 || e.premiumTier > i.Eu4.NONE;
                        if (null != e.premiumSubscriptionCount) return e.premiumSubscriptionCount > 0;
                        return !1
                    }(e),
                    l = 0;
                if (c) {
                    var a;
                    l = null !== (a = e instanceof o.Z ? e.premiumSubscriberCount : e.premiumSubscriptionCount) && void 0 !== a ? a : 0
                }
                var u = e instanceof o.Z ? e.premiumTier : i.Eu4.NONE;
                return {
                    verified: t.has(i.oNc.VERIFIED),
                    partnered: t.has(i.oNc.PARTNERED),
                    community: t.has(i.oNc.COMMUNITY),
                    staff: t.has(i.oNc.INTERNAL_EMPLOYEE_ONLY),
                    visibility: r,
                    premium: c,
                    premiumSubscriberCount: l,
                    premiumTier: u
                }
            }
        },
        491379: (e, t, r) => {
            r.d(t, {
                Z: () => l
            });
            var n = r(337509),
                o = r(243399),
                i = r(761673),
                c = new Set([n.Q.PARTNERED, n.Q.VERIFIED, n.Q.VERIFIED_AND_PARTNERED, n.Q.COMMUNITY, n.Q.DISCOVERABLE]);

            function l(e) {
                var t;
                if (!(0, o.E)(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "")) return !1;
                if (null == e) return !1;
                var r = (0, i.XX)(e),
                    l = (0, n.i)(r);
                return c.has(l)
            }
        },
        275086: (e, t, r) => {
            r.d(t, {
                c: () => E
            });
            var n = r(785893),
                o = (r(667294), r(304548)),
                i = r(661299),
                c = r(393299),
                l = r(930865),
                a = r(596801),
                u = r(733274),
                s = r(2590),
                f = r(473708),
                p = r(562275),
                O = r.n(p);

            function d(e) {
                var t = e.guild,
                    r = e.banner;
                return (0, n.jsx)("div", {
                    className: O().guildBanner,
                    style: {
                        backgroundImage: "url(".concat(r)
                    },
                    children: (0, n.jsxs)("div", {
                        className: O().guildHeader,
                        children: [(0, n.jsx)(c.Z, {
                            guild: t,
                            isBannerVisible: !0
                        }), (0, n.jsx)(o.Heading, {
                            className: O().guildName,
                            variant: "heading-md/semibold",
                            children: t.toString()
                        }), (0, n.jsx)(i.Z, {
                            className: O().dropdown,
                            open: !1
                        })]
                    })
                })
            }

            function _(e, t) {
                var r = (0, l.nW)(e);
                return t ? f.Z.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_ANIMATED.format({
                    targetLevelOrPlan: r
                }) : f.Z.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_STATIC.format({
                    targetLevelOrPlan: r
                })
            }

            function E(e) {
                var t = e.analyticsLocations,
                    r = e.analyticsLocation,
                    o = e.guild,
                    i = e.isGIF,
                    c = e.banner,
                    p = i ? (0, l._p)(s.oNc.ANIMATED_BANNER) : (0, l._p)(s.oNc.BANNER);
                null != p && (0, a.Z)({
                    analyticsLocations: t,
                    analyticsSourceLocation: r,
                    guild: o,
                    headerProps: {
                        title: f.Z.Messages.GUILD_BANNER_UPSELL_MODAL_TITLE,
                        subtitle: _(p, i),
                        image: (0, n.jsx)(d, {
                            guild: o,
                            banner: c
                        })
                    },
                    perkIntro: f.Z.Messages.GUILD_BANNER_UPSELL_MODAL_PERK_INTRO,
                    perks: i ? (0, u.zC)() : (0, u.XO)()
                })
            }
        },
        393299: (e, t, r) => {
            r.d(t, {
                Z: () => A
            });
            var n, o = r(785893),
                i = (r(667294), r(294184)),
                c = r.n(i),
                l = r(202351),
                a = r(304548),
                u = r(491379),
                s = r(591406),
                f = r(859917),
                p = r(784648),
                O = r(2590),
                d = r(233593),
                _ = r.n(d);

            function E(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }
            var h, y = (E(n = {}, O.Eu4.NONE, _().iconBackgroundTierNone), E(n, O.Eu4.TIER_1, _().iconBackgroundTierOne), E(n, O.Eu4.TIER_2, _().iconBackgroundTierTwo), E(n, O.Eu4.TIER_3, _().iconBackgroundTierThree), n),
                b = (E(h = {}, O.Eu4.NONE, _().iconTierNone), E(h, O.Eu4.TIER_1, _().iconTierOne), E(h, O.Eu4.TIER_2, _().iconTierTwo), E(h, O.Eu4.TIER_3, _().iconTierThree), h);

            function g(e) {
                var t = e.premiumTier,
                    r = e.iconBackgroundClassName,
                    n = e.iconClassName,
                    i = e.size;
                return (0, o.jsx)(f.Z, {
                    className: c()(r, y[t]),
                    size: i,
                    children: (0, o.jsx)(p.Z, {
                        tier: t,
                        className: c()(n, _().boostedGuildIconGem, b[t])
                    })
                })
            }
            var v = r(21372),
                I = r(473903),
                w = r(206986),
                P = r(521723),
                C = r(930865),
                R = r(473708),
                T = r(625337),
                S = r.n(T);

            function m(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
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

            function N(e) {
                var t = e.guild,
                    r = e.isBannerVisible,
                    n = e.disableBoostClick,
                    i = (0, l.e7)([I.default, v.ZP], (function() {
                        var e = I.default.getCurrentUser();
                        return v.ZP.isMember(t.id, null == e ? void 0 : e.id)
                    })),
                    c = t.premiumTier,
                    u = t.premiumSubscriberCount;
                if (0 === u && c === O.Eu4.NONE) return null;
                var f = function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        i && !n && (0, s.f)({
                            guildId: t.id,
                            location: {
                                section: O.jXE.GUILD_HEADER,
                                object: O.qAy.BOOST_GEM_ICON
                            }
                        })
                    },
                    p = c === O.Eu4.NONE ? R.Z.Messages.PREMIUM_GUILD_HEADER_BADGE_NO_TIER : C.nW(c),
                    d = (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("div", {
                            className: S().tierTooltipTitle,
                            children: p
                        }), (0, o.jsx)("div", {
                            children: R.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_SUBSCRIBER_COUNT_TOOLTIP.format({
                                subscriberCount: u
                            })
                        })]
                    });
                return (0, o.jsx)("div", {
                    className: S().guildIconContainer,
                    children: (0, o.jsx)(a.Tooltip, {
                        text: d,
                        position: "bottom",
                        "aria-label": null != p ? p : "",
                        children: function(e) {
                            return (0, o.jsx)(a.Clickable, j(function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {},
                                        n = Object.keys(r);
                                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                                    }))));
                                    n.forEach((function(t) {
                                        m(e, t, r[t])
                                    }))
                                }
                                return e
                            }({}, e), {
                                className: S().premiumGuildIcon,
                                onClick: f,
                                children: (0, o.jsx)(g, {
                                    premiumTier: c,
                                    iconBackgroundClassName: r ? S().boostedGuildTierIconBackgroundWithVisibleBanner : null,
                                    iconClassName: r && c !== O.Eu4.TIER_3 ? S().boostedGuildTierMutedIconWithVisibleBanner : null
                                })
                            }))
                        }
                    })
                })
            }

            function x(e) {
                var t = e.guild,
                    r = e.disableColor,
                    n = e.disableBoostClick;
                return (0, u.Z)(t) ? (0, o.jsx)("div", {
                    className: S().guildIconV2Container,
                    children: (0, o.jsx)(P.Z, {
                        guild: t,
                        tooltipPosition: "bottom",
                        tooltipColor: a.Tooltip.Colors.PRIMARY,
                        className: c()(S().guildBadge, m({}, S().disableColor, r)),
                        disableBoostClick: n
                    })
                }) : (0, o.jsx)("div", {
                    className: S().guildIconContainer,
                    children: (0, o.jsx)(w.Z, {
                        guild: t,
                        tooltipPosition: "bottom",
                        tooltipColor: a.Tooltip.Colors.PRIMARY,
                        className: c()(S().guildBadge, m({}, S().disableColor, r))
                    })
                })
            }

            function A(e) {
                var t = e.guild,
                    r = e.isBannerVisible,
                    n = e.disableBoostClick;
                return (0, u.Z)(t) ? (0, o.jsx)(x, {
                    guild: t,
                    disableColor: !1,
                    disableBoostClick: n
                }) : t.hasFeature(O.oNc.VERIFIED) || t.hasFeature(O.oNc.PARTNERED) ? (0, o.jsx)(x, {
                    guild: t,
                    disableColor: !r
                }) : (0, o.jsx)(N, {
                    guild: t,
                    isBannerVisible: r,
                    disableBoostClick: n
                })
            }
        },
        311260: (e, t, r) => {
            r.d(t, {
                $p: () => s,
                PT: () => p,
                U$: () => O,
                Es: () => _,
                kH: () => E,
                AK: () => h,
                Ae: () => y
            });
            var n = r(496486),
                o = r(921431);

            function i(e, t, r, n, o, i, c) {
                try {
                    var l = e[i](c),
                        a = l.value
                } catch (e) {
                    r(e);
                    return
                }
                l.done ? t(a) : Promise.resolve(a).then(n, o)
            }

            function c(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var c = e.apply(t, r);

                        function l(e) {
                            i(c, n, o, l, a, "next", e)
                        }

                        function a(e) {
                            i(c, n, o, l, a, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }
            var l = function(e, t) {
                var r, n, o, i, c = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function l(i) {
                    return function(l) {
                        return function(i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; c;) try {
                                if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                (n = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        c.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        c.label++;
                                        n = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = c.ops.pop();
                                        c.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = c.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            c = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            c.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && c.label < o[1]) {
                                            c.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && c.label < o[2]) {
                                            c.label = o[2];
                                            c.ops.push(i);
                                            break
                                        }
                                        o[2] && c.ops.pop();
                                        c.trys.pop();
                                        continue
                                }
                                i = t.call(e, c)
                            } catch (e) {
                                i = [6, e];
                                n = 0
                            } finally {
                                r = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, l])
                    }
                }
            };

            function a(e) {
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
                var o = e.naturalWidth / e.width,
                    i = t.width / 2,
                    c = t.height / 2,
                    l = (e.width / 2 - i - r.x) * o,
                    a = (e.height / 2 - c - r.y) * o,
                    u = t.width * o,
                    s = t.height * o;
                return {
                    x: l,
                    y: a,
                    scaledCropWidth: u,
                    scaledCropHeight: s,
                    canvasWidth: Math.min(u, n.width),
                    canvasHeight: Math.min(s, n.height)
                }
            }

            function s(e, t, r, n, o) {
                return f.apply(this, arguments)
            }

            function f() {
                return (f = c((function(e, t, n, i, c) {
                    var s, f, p, O, d, _, E, h;
                    return l(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                s = u(t, n, i, c), f = s.x, p = s.y, O = s.scaledCropWidth, d = s.scaledCropHeight;
                                return [4, e.arrayBuffer()];
                            case 1:
                                _ = l.sent();
                                E = new Worker(new URL(r.p + r.u(92827), r.b));
                                h = new Promise((function(e, t) {
                                    E.onmessage = function(r) {
                                        var n = r.data;
                                        if (n.type === o.u.CROP_GIF_COMPLETE) {
                                            e(a(new Blob([n.result])));
                                            E.terminate()
                                        } else if (n.type === o.u.CROP_GIF_ERROR) {
                                            t(new Error("Error cropping GIF"));
                                            E.terminate()
                                        }
                                    }
                                }));
                                E.postMessage({
                                    type: o.u.CROP_GIF_START,
                                    gif: new Uint8Array(_),
                                    x: 0 | f,
                                    y: 0 | p,
                                    width: 0 | O,
                                    height: 0 | d
                                });
                                return [2, {
                                    result: h,
                                    cancelFn: function() {
                                        return E.terminate()
                                    }
                                }]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function p(e, t, r, n) {
                var o = u(e, t, r, n),
                    i = o.x,
                    c = o.y,
                    l = o.scaledCropWidth,
                    a = o.scaledCropHeight,
                    s = o.canvasWidth,
                    f = o.canvasHeight,
                    p = document.createElement("canvas");
                p.width = s;
                p.height = f;
                var O = p.getContext("2d");
                null != O && O.drawImage(e, i, c, l, a, 0, 0, p.width, p.height);
                return p.toDataURL("image/png")
            }

            function O(e, t, r) {
                return {
                    x: (0, n.clamp)(e, r.left, r.right),
                    y: (0,
                        n.clamp)(t, r.bottom, r.top)
                }
            }

            function d(e, t, r, n) {
                var i = r,
                    c = n;
                if (r > o.vJ) {
                    i = o.vJ;
                    c = n * (o.vJ / r)
                }
                return r / n < e ? {
                    width: i,
                    height: c
                } : {
                    width: i * (t / c),
                    height: t
                }
            }

            function _(e, t, r) {
                switch (e) {
                    case o.pC.AVATAR:
                    case o.pC.AVATAR_DECORATION:
                        return {
                            width: t, height: r
                        };
                    case o.pC.BANNER:
                        return d(o.MY, o.qj, t, r);
                    case o.pC.GUILD_BANNER:
                        return d(o.Ij, o.C5, t, r);
                    case o.pC.VIDEO_BACKGROUND:
                        return d(o.Ff, o.PB, t, r);
                    case o.pC.SCHEDULED_EVENT_IMAGE:
                        return d(o.ut, o.WV, t, r);
                    case o.pC.HOME_HEADER:
                        return d(o.sX, o.SW, t, r)
                }
            }

            function E(e, t, r) {
                var n = {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0
                    },
                    o = e - r.width,
                    i = t - r.height;
                if (0 !== o) {
                    n.left = -Math.abs(o / 2);
                    n.right = o / 2
                }
                if (0 !== i) {
                    n.bottom = -Math.abs(i / 2);
                    n.top = i / 2
                }
                return n
            }

            function h(e, t, r, n) {
                switch (e) {
                    case o.pC.AVATAR:
                    case o.pC.AVATAR_DECORATION:
                        var i = Math.min(t, r);
                        return {
                            width: i, height: i
                        };
                    case o.pC.BANNER:
                        var c = Math.min(t, o.vJ);
                        return {
                            width: c, height: c * (1 / o.MY)
                        };
                    case o.pC.GUILD_BANNER:
                        var l = Math.min(t, o.vJ);
                        return {
                            width: l, height: Math.min(l * (9 / 16), n)
                        };
                    case o.pC.VIDEO_BACKGROUND:
                        var a = Math.min(t, o.vJ);
                        return {
                            width: a, height: a * (9 / 16)
                        };
                    case o.pC.SCHEDULED_EVENT_IMAGE:
                        var u = Math.min(t, o.vJ);
                        return {
                            width: u, height: .4 * u
                        };
                    case o.pC.HOME_HEADER:
                        var s = Math.min(t, o.vJ);
                        return {
                            width: s, height: s * (1 / o.sX)
                        }
                }
            }

            function y(e, t, r) {
                var n = e.naturalWidth / e.naturalHeight,
                    o = t,
                    i = r;
                e.naturalWidth > e.naturalHeight ? o /= n : i *= n;
                var c = {
                    height: o,
                    width: i
                };
                return p(e, {
                    width: e.width,
                    height: e.height
                }, {
                    x: 0,
                    y: 0
                }, c)
            }
        },
        338479: (e, t, r) => {
            r.d(t, {
                Z: () => U
            });
            var n = r(785893),
                o = r(667294),
                i = r(202351),
                c = r(304548),
                l = r(19585),
                a = r(275086),
                u = r(596801),
                s = r(567403),
                f = r(464187),
                p = r(217674),
                O = r(2590),
                d = r(733274),
                _ = r(473708),
                E = r(460590),
                h = r.n(E);

            function y(e) {
                var t = e.analyticsSection,
                    r = e.analyticsPage,
                    o = e.isGIF,
                    E = e.banner,
                    y = (0, i.e7)([f.Z], (function() {
                        return f.Z.getGuildId()
                    })),
                    b = (0, i.e7)([s.Z], (function() {
                        return s.Z.getGuild(y)
                    })),
                    g = (0, l.Z)().analyticsLocations;
                if (null == b || b.hasFeature(O.oNc.ANIMATED_BANNER) || !o && b.hasFeature(O.oNc.BANNER)) return null;
                return (0, n.jsxs)("div", {
                    className: h().container,
                    children: [(0, n.jsx)(p.Z, {
                        className: h().guildBoostingIcon
                    }), (0, n.jsx)(c.Text, {
                        color: "header-primary",
                        variant: "text-sm/semibold",
                        children: _.Z.Messages.PREMIUM_GUILD_PREVIEW
                    }), (0, n.jsx)(c.Button, {
                        look: c.Button.Looks.LINK,
                        color: c.Button.Colors.LINK,
                        className: h().subscribeButton,
                        onClick: function() {
                            if (null != b) {
                                var e = {
                                    section: t,
                                    page: r,
                                    object: O.qAy.UPSELL_HEADER
                                };
                                null != E ? (0, a.c)({
                                    analyticsLocations: g,
                                    analyticsLocation: e,
                                    guild: b,
                                    isGIF: o,
                                    banner: E
                                }) : (0, u.Z)({
                                    analyticsLocations: g,
                                    analyticsSourceLocation: e,
                                    guild: b,
                                    perks: o ? (0, d.zC)() : (0, d.XO)()
                                })
                            }
                        },
                        children: _.Z.Messages.PREMIUM_GUILD_BOOST_SERVER
                    })]
                })
            }
            var b = r(153686),
                g = r(294184),
                v = r.n(g),
                I = r(366007),
                w = r(406493),
                P = r(98265),
                C = r(477002),
                R = r.n(C);

            function T(e) {
                var t = e.text,
                    r = e.textSize,
                    o = void 0 === r ? P.Z.Sizes.SIZE_12 : r,
                    i = e.textColor,
                    c = void 0 === i ? P.Z.Colors.STANDARD : i,
                    l = e.className,
                    a = e.button,
                    u = e.reducedRightPadding,
                    s = void 0 !== u && u;
                return (0, n.jsxs)("div", {
                    className: v()(s ? R().noticeWithoutRightPadding : R().noticeWithRightPadding, l),
                    children: [(0, n.jsxs)("div", {
                        className: R().noticeLeft,
                        children: [(0, n.jsx)(w.Z, {
                            className: R().icon,
                            color: I.JX.PREMIUM_TIER_2
                        }), (0, n.jsx)(P.Z, {
                            className: R().text,
                            size: o,
                            color: c,
                            children: t
                        })]
                    }), a]
                })
            }
            var S = r(455706),
                m = r(473903),
                j = r(652591),
                N = r(116094),
                x = r(921431),
                A = r(203600),
                D = r(167633),
                M = r.n(D);

            function L(e) {
                var t = e.analyticsSection,
                    r = e.type,
                    a = (0, i.e7)([m.default], (function() {
                        return m.default.getCurrentUser()
                    })),
                    u = N.ZP.canUseAnimatedAvatar(a),
                    s = N.ZP.canUsePremiumProfileCustomization(a),
                    f = r === x.pC.BANNER && s || r === x.pC.AVATAR && u,
                    p = (0, l.Z)(b.Z.PREMIUM_PREVIEW_UPSELL_HEADER).sourceAnalyticsLocations;
                o.useEffect((function() {
                    f || j.default.track(O.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: t,
                        location_stack: p
                    })
                }), [f, t, p]);
                if (f) return null;
                var d = (0, n.jsx)(S.Z, {
                    className: M().getNitroLink,
                    size: c.Button.Sizes.SMALL,
                    look: c.Button.Looks.LINK,
                    color: c.Button.Colors.LINK,
                    subscriptionTier: A.Si.TIER_2,
                    buttonText: _.Z.Messages.PREMIUM_PREVIEW_GET_NITRO.format(),
                    showIcon: !1,
                    premiumModalAnalyticsLocation: {
                        section: t,
                        object: O.qAy.BUTTON_CTA
                    },
                    disableShine: !0
                });
                return (0, n.jsx)(T, {
                    reducedRightPadding: !0,
                    className: M().nitroPreviewUpsell,
                    text: _.Z.Messages.PREMIUM_PREVIEW.format(),
                    textSize: P.Z.Sizes.SIZE_14,
                    textColor: P.Z.Colors.HEADER_PRIMARY,
                    button: d
                })
            }

            function U(e) {
                var t = e.type,
                    r = e.analyticsPage,
                    o = e.analyticsSection,
                    i = e.isGIF,
                    c = e.banner;
                return [x.pC.BANNER, x.pC.AVATAR].includes(t) && i ? (0, n.jsx)(L, {
                    analyticsSection: o,
                    type: t
                }) : t === x.pC.GUILD_BANNER ? (0, n.jsx)(y, {
                    analyticsSection: o,
                    analyticsPage: r,
                    isGIF: i,
                    banner: c
                }) : null
            }
        },
        63509: (e, t, r) => {
            r.d(t, {
                Z: () => Z
            });
            var n = r(441143),
                o = r.n(n),
                i = r(496486),
                c = r.n(i),
                l = r(620745),
                a = r(202351),
                u = r(744564),
                s = r(296602),
                f = r(120415),
                p = r(310126),
                O = r(202181),
                d = r(2590);

            function _(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function E(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function h(e) {
                h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return h(e)
            }

            function y(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function b(e, t) {
                return !t || "object" !== v(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function g(e, t) {
                g = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return g(e, t)
            }
            var v = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function I(e) {
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
                    var r, n = h(e);
                    if (t) {
                        var o = h(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return b(this, r)
                }
            }
            var w = {},
                P = {},
                C = {},
                R = {},
                T = {},
                S = new Set,
                m = function() {
                    return U.emitChange()
                },
                j = c().debounce(m, 150);

            function N(e) {
                var t = C[e];
                null == t || t.closed || (w[e] = {
                    x: t.screenX,
                    y: t.screenY,
                    width: t.innerWidth,
                    height: t.innerHeight,
                    alwaysOnTop: !!f.FB && P[e]
                })
            }

            function x(e) {
                var t = C[e],
                    r = T[e];
                if (null != t) {
                    var n = t.document;
                    (0, O.uF)(n, m);
                    t.addEventListener("focus", m);
                    t.addEventListener("blur", m);
                    t.addEventListener("resize", j);
                    ! function(e, t) {
                        var r = t.document,
                            n = document.querySelectorAll('link[rel="stylesheet"]'),
                            i = "".concat(window.location.protocol, "//").concat(window.location.host),
                            c = !0,
                            l = !1,
                            a = void 0;
                        try {
                            for (var u, s = n[Symbol.iterator](); !(c = (u = s.next()).done); c = !0) {
                                var f = u.value;
                                if (f.href.startsWith(i)) {
                                    var p = r.createElement("link");
                                    p.href = f.href;
                                    p.rel = f.rel;
                                    p.integrity = f.integrity;
                                    o()(null != r.head, "Document head was null");
                                    r.head.appendChild(p)
                                }
                            }
                        } catch (e) {
                            l = !0;
                            a = e
                        } finally {
                            try {
                                c || null == s.return || s.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                    }(0, t);
                    var i = (0, l.s)(n.getElementById("app-mount"));
                    o()(null != i, "No render target for popout!");
                    R[e] = i;
                    i.render(r(e))
                } else new s.Z("PopoutWindowStore").warn("Failed to open window", e)
            }

            function A(e) {
                var t = C[e];
                if (null != t) {
                    t.closed || N(e);
                    t.close();
                    ! function(e) {
                        var t = C[e];
                        o()(null != t, "Popout window was null during unmount");
                        t.removeEventListener("focus", m);
                        t.removeEventListener("blur", m);
                        t.removeEventListener("resize", j);
                        var r = R[e];
                        o()(null != r, "Window root was null while unmounting");
                        r.unmount();
                        delete C[e];
                        delete P[e];
                        delete T[e];
                        delete R[e]
                    }(e);
                    U.emitChange()
                }
            }

            function D(e) {
                var t = e.data;
                if (t instanceof Object && t.discordPopoutEvent instanceof Object) {
                    var r = t.discordPopoutEvent;
                    if (null != r.key) switch (r.type) {
                        case d.l9w.LOADED:
                            return function(e) {
                                if (S.has(e)) {
                                    x(e);
                                    S.delete(e);
                                    U.emitChange()
                                }
                            }(r.key);
                        case d.l9w.UNLOADED:
                            return A(r.key)
                    }
                }
            }

            function M() {
                var e = !0,
                    t = !1,
                    r = void 0;
                try {
                    for (var n, o = Object.keys(C)[Symbol.iterator](); !(e = (n = o.next()).done); e = !0) {
                        var i = n.value,
                            c = C[i];
                        null != c && c.close()
                    }
                } catch (e) {
                    t = !0;
                    r = e
                } finally {
                    try {
                        e || null == o.return || o.return()
                    } finally {
                        if (t) throw r
                    }
                }
            }
            var L = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && g(e, t)
                }(r, e);
                var t = I(r);

                function r() {
                    _(this, r);
                    return t.apply(this, arguments)
                }
                var n = r.prototype;
                n.initialize = function(e) {
                    window.addEventListener("message", D);
                    window.addEventListener("beforeunload", M);
                    w = null != e ? e : {}
                };
                n.getWindow = function(e) {
                    return C[e]
                };
                n.getWindowState = function(e) {
                    return w[e]
                };
                n.getWindowKeys = function() {
                    return Object.keys(C)
                };
                n.getWindowOpen = function(e) {
                    var t = C[e];
                    return null != t && !t.closed
                };
                n.getIsAlwaysOnTop = function(e) {
                    return Boolean(P[e])
                };
                n.getWindowFocused = function(e) {
                    var t, r, n = C[e];
                    return null !== (r = null == n || null === (t = n.document) || void 0 === t ? void 0 : t.hasFocus()) && void 0 !== r && r
                };
                n.getState = function() {
                    return w
                };
                n.unmountWindow = function(e) {
                    return A(e)
                };
                return r
            }(a.ZP.PersistedStore);
            L.displayName = "PopoutWindowStore";
            L.persistKey = "PopoutWindowStore";
            var U = new L(u.Z, {
                POPOUT_WINDOW_OPEN: function(e) {
                    var t = e.key,
                        r = e.features,
                        n = e.render;
                    if (f.FB && !p.ZP.supportsFeature(d.eRX.POPOUT_WINDOWS)) throw new Error("Popout windows not supported on this native module version!");
                    var o = C[t];
                    if (null != o && !o.closed) {
                        f.FB ? p.ZP.focus(t) : o.focus();
                        return !1
                    }
                    var i = r.defaultWidth,
                        c = r.defaultHeight,
                        l = r.defaultAlwaysOnTop,
                        a = void 0 !== l && l,
                        u = y(r, ["defaultWidth", "defaultHeight", "defaultAlwaysOnTop"]),
                        s = a,
                        O = w[t];
                    if (null != O) {
                        var _ = O.width,
                            h = O.height,
                            b = O.x,
                            g = O.y,
                            v = O.alwaysOnTop;
                        s = null != v ? v : a;
                        u = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(r);
                                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                                }))));
                                n.forEach((function(t) {
                                    E(e, t, r[t])
                                }))
                            }
                            return e
                        }({
                            width: null != _ && 0 !== _ ? _ : i,
                            height: null != h && 0 !== h ? h : c,
                            left: b,
                            top: g
                        }, u)
                    }
                    var I = window.open(d.Z5c.POPOUT_WINDOW, t, function(e) {
                        var t = "",
                            r = !0,
                            n = !1,
                            o = void 0;
                        try {
                            for (var i, c = Object.keys(e)[Symbol.iterator](); !(r = (i = c.next()).done); r = !0) {
                                var l = i.value,
                                    a = e[l];
                                if (void 0 !== a) {
                                    "boolean" == typeof a && (a = a ? "yes" : "no");
                                    t += "".concat(l, "=").concat(a, ",")
                                }
                            }
                        } catch (e) {
                            n = !0;
                            o = e
                        } finally {
                            try {
                                r || null == c.return || c.return()
                            } finally {
                                if (n) throw o
                            }
                        }
                        return t
                    }(u));
                    I.windowKey = t;
                    null == I || I.focus();
                    C[t] = I;
                    T[t] = n;
                    if (f.FB) {
                        p.ZP.setAlwaysOnTop(t, s);
                        P[t] = s;
                        p.ZP.isAlwaysOnTop(t).then((function(e) {
                            return P[t] = e
                        }))
                    }
                    S.add(t)
                },
                POPOUT_WINDOW_CLOSE: function(e) {
                    var t = e.key,
                        r = C[t];
                    if (null != r && !r.closed) {
                        N(t);
                        r.close()
                    }
                },
                POPOUT_WINDOW_SET_ALWAYS_ON_TOP: function(e) {
                    var t = e.key,
                        r = e.alwaysOnTop;
                    if (f.FB) {
                        p.ZP.setAlwaysOnTop(t, r);
                        P[t] = r;
                        p.ZP.isAlwaysOnTop(t).then((function(e) {
                            return P[t] = e
                        }))
                    }
                },
                LOGOUT: M
            });
            const Z = U
        },
        979197: (e, t, r) => {
            r.d(t, {
                Z: () => n.Z
            });
            var n = r(63509)
        },
        625797: (e, t, r) => {
            r.d(t, {
                Z: () => c
            });
            var n = r(120415),
                o = r(310126),
                i = r(63509);

            function c(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = i.Z.getWindow(e);
                null == r || r.closed || (n.FB ? o.ZP.focus(e, t) : r.focus())
            }
        },
        821: (e, t, r) => {
            r.d(t, {
                Z: () => E
            });
            var n = r(202351),
                o = r(744564);

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function c(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1;
                    n.configurable = !0;
                    "value" in n && (n.writable = !0);
                    Object.defineProperty(e, n.key, n)
                }
            }

            function l(e) {
                l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return l(e)
            }

            function a(e, t) {
                return !t || "object" !== p(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function u(e, t) {
                u = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return u(e, t)
            }
            var s, f, p = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function O(e) {
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
                    var r, n = l(e);
                    if (t) {
                        var o = l(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return a(this, r)
                }
            }

            function d() {
                s = !1;
                f = null
            }
            d();
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
                    t && u(e, t)
                }(r, e);
                var t = O(r);

                function r() {
                    i(this, r);
                    return t.apply(this, arguments)
                }! function(e, t, r) {
                    t && c(e.prototype, t);
                    r && c(e, r)
                }(r, [{
                    key: "hasCompletedStepDuringSession",
                    get: function() {
                        return s
                    }
                }, {
                    key: "activeSubstep",
                    get: function() {
                        return f
                    }
                }]);
                return r
            }(n.ZP.Store);
            _.displayName = "PremiumTutorialSessionStore";
            const E = new _(o.Z, {
                SET_HAS_COMPLETED_STEP: function() {
                    s = !0
                },
                RESET_HAS_COMPLETED_STEP: function() {
                    s = !1
                },
                SET_ACTIVE_SUBSTEP: function(e) {
                    var t = e.substep;
                    f = t
                },
                LOGOUT: function() {
                    d()
                }
            })
        },
        366007: (e, t, r) => {
            r.d(t, {
                Rj: () => l,
                JX: () => a,
                ZP: () => u
            });
            var n = r(785893),
                o = r(667294),
                i = r(228721),
                c = r(795308),
                l = Object.freeze({
                    PREMIUM_TIER_0: (0, i.Z)(),
                    PREMIUM_TIER_1: (0, i.Z)(),
                    PREMIUM_TIER_2: (0, i.Z)(),
                    PREMIUM_GUILD: (0, i.Z)(),
                    PREMIUM_TRIAL_TUTORIAL: (0, i.Z)(),
                    PREMIUM_GUILD_BADGE_V2_BACKGROUND: (0, i.Z)()
                }),
                a = {
                    PREMIUM_TIER_0: "url(#".concat(l.PREMIUM_TIER_0, ")"),
                    PREMIUM_TIER_1: "url(#".concat(l.PREMIUM_TIER_1, ")"),
                    PREMIUM_TIER_2: "url(#".concat(l.PREMIUM_TIER_2, ")"),
                    PREMIUM_GUILD: "url(#".concat(l.PREMIUM_GUILD, ")"),
                    PREMIUM_TRIAL_TUTORIAL: "url(#".concat(l.PREMIUM_TRIAL_TUTORIAL, ")"),
                    PREMIUM_GUILD_BADGE_V2_BACKGROUND: "url(#".concat(l.PREMIUM_GUILD_BADGE_V2_BACKGROUND, ")")
                };
            const u = o.memo((function() {
                return (0, n.jsxs)("svg", {
                    viewBox: "0 0 1 1",
                    style: {
                        position: "absolute",
                        pointerEvents: "none",
                        top: -1,
                        left: -1,
                        width: 1,
                        height: 1
                    },
                    "aria-hidden": !0,
                    children: [(0, n.jsxs)("linearGradient", {
                        id: l.PREMIUM_TIER_0,
                        children: [(0, n.jsx)("stop", {
                            offset: ".1762",
                            stopColor: c.Z.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS.css
                        }), (0, n.jsx)("stop", {
                            offset: "0.5351",
                            stopColor: c.Z.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2.css
                        }), (0, n.jsx)("stop", {
                            offset: "1",
                            stopColor: c.Z.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css
                        })]
                    }), (0, n.jsxs)("linearGradient", {
                        id: l.PREMIUM_TIER_1,
                        children: [(0, n.jsx)("stop", {
                            stopColor: c.Z.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css
                        }), (0, n.jsx)("stop", {
                            offset: "1",
                            stopColor: c.Z.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css
                        })]
                    }), (0, n.jsxs)("linearGradient", {
                        id: l.PREMIUM_TIER_2,
                        children: [(0,
                            n.jsx)("stop", {
                            stopColor: c.Z.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.css
                        }), (0, n.jsx)("stop", {
                            offset: "0.502368",
                            stopColor: c.Z.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.css
                        }), (0, n.jsx)("stop", {
                            offset: "1",
                            stopColor: c.Z.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS.css
                        })]
                    }), (0, n.jsxs)("linearGradient", {
                        id: l.PREMIUM_GUILD,
                        children: [(0, n.jsx)("stop", {
                            stopColor: c.Z.unsafe_rawColors.GUILD_BOOSTING_BLUE.css
                        }), (0, n.jsx)("stop", {
                            offset: "1",
                            stopColor: c.Z.unsafe_rawColors.GUILD_BOOSTING_PURPLE.css
                        })]
                    }), (0, n.jsxs)("linearGradient", {
                        id: l.PREMIUM_TRIAL_TUTORIAL,
                        children: [(0, n.jsx)("stop", {
                            stopColor: c.Z.unsafe_rawColors.PREMIUM_TIER_2_PURPLE.css
                        }), (0, n.jsx)("stop", {
                            offset: "1",
                            stopColor: c.Z.unsafe_rawColors.PREMIUM_TIER_2_PINK.css
                        })]
                    }), (0, n.jsxs)("linearGradient", {
                        id: l.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
                        gradientTransform: "rotate(45)",
                        children: [(0, n.jsx)("stop", {
                            offset: "0",
                            stopColor: c.Z.unsafe_rawColors.PREMIUM_TIER_2_PURPLE.css
                        }), (0, n.jsx)("stop", {
                            offset: "1",
                            stopColor: c.Z.unsafe_rawColors.PREMIUM_TIER_2_PINK.css
                        })]
                    })]
                })
            }), (function() {
                return !0
            }))
        },
        521723: (e, t, r) => {
            r.d(t, {
                Z: () => X
            });
            var n = r(785893),
                o = (r(667294), r(294184)),
                i = r.n(o),
                c = r(202351),
                l = r(795308),
                a = r(575945),
                u = r(304548),
                s = r(337509),
                f = r(761673),
                p = r(591406),
                O = r(64234),
                d = r(21372),
                _ = r(473903),
                E = r(930865),
                h = r(859917),
                y = r(366007),
                b = r(459308),
                g = r(168075),
                v = r(361290),
                I = r(633878);

            function w(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function P(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        w(e, t, r[t])
                    }))
                }
                return e
            }

            function C(e, t) {
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

            function R(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            const T = (0, g.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 10 : t,
                    o = e.height,
                    i = void 0 === o ? 10 : o,
                    c = e.color,
                    l = void 0 === c ? "currentColor" : c,
                    a = R(e, ["width", "height", "color"]);
                return (0, n.jsx)("svg", C(P({}, (0, I.Z)(a)), {
                    width: r,
                    height: i,
                    viewBox: "0 0 10 10",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, n.jsx)("path", {
                        d: "M4.16667 8.33333V5.83333H5.83333V8.33333H7.91667V5H9.16667L5 1.25L0.833333 5H2.08333V8.33333H4.16667Z",
                        fill: l
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    r = void 0 === t ? 10 : t,
                    o = e.height,
                    i = void 0 === o ? 10 : o,
                    c = R(e, ["width", "height"]);
                return (0, n.jsx)(v.t, P({
                    width: r,
                    height: i
                }, c))
            }));
            var S = r(666303);

            function m(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
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

            function N(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            const x = (0, g.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 10 : t,
                    o = e.height,
                    i = void 0 === o ? 10 : o,
                    c = e.color,
                    l = void 0 === c ? "currentColor" : c,
                    a = N(e, ["width", "height", "color"]);
                return (0, n.jsxs)("svg", j(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            m(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, I.Z)(a)), {
                    width: r,
                    height: i,
                    viewBox: "0 0 10 10",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, n.jsx)("g", {
                        clipPath: "url(#clip0_1242_1450)",
                        children: (0, n.jsx)("path", {
                            d: "M5 0.833252C2.7 0.833252 0.833333 2.69992 0.833333 4.99992C0.833333 7.29992 2.7 9.16659 5 9.16659C7.3 9.16659 9.16667 7.29992 9.16667 4.99992C9.16667 2.69992 7.3 0.833252 5 0.833252ZM4.58333 8.30409C2.9375 8.09992 1.66667 6.69992 1.66667 4.99992C1.66667 4.74159 1.7 4.49575 1.75417 4.25409L3.75 6.24992V6.66659C3.75 7.12492 4.125 7.49992 4.58333 7.49992V8.30409ZM7.45833 7.24575C7.35 6.90825 7.04167 6.66659 6.66667 6.66659H6.25V5.41659C6.25 5.18742 6.0625 4.99992 5.83333 4.99992H3.33333V4.16659H4.16667C4.39583 4.16659 4.58333 3.97909 4.58333 3.74992V2.91659H5.41667C5.875 2.91659 6.25 2.54159 6.25 2.08325V1.91242C7.47083 2.40825 8.33333 3.60409 8.33333 4.99992C8.33333 5.86659 8 6.65409 7.45833 7.24575Z",
                            fill: l
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
            }), S.e);

            function A(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function D(e, t) {
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

            function M(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function L(e) {
                var t = e.width,
                    r = void 0 === t ? 10 : t,
                    o = e.height,
                    i = void 0 === o ? 10 : o,
                    c = e.color,
                    l = void 0 === c ? "currentColor" : c,
                    a = M(e, ["width", "height", "color"]);
                return (0,
                    n.jsxs)("svg", D(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            A(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, I.Z)(a)), {
                    width: r,
                    height: i,
                    viewBox: "0 0 17 22",
                    fill: l,
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
            var U, Z = r(690002),
                G = r(985651),
                B = r(2590),
                k = r(473708),
                H = r(845987),
                V = r.n(H);

            function F(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function W(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        F(e, t, r[t])
                    }))
                }
                return e
            }

            function K(e, t) {
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
            var Y = (F(U = {}, s.Q.STAFF, {
                IconComponent: Z.Z,
                foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
                foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
                backgroundDarkColor: l.Z.unsafe_rawColors.GREEN_360.css,
                backgroundLightColor: l.Z.unsafe_rawColors.GREEN_360.css
            }), F(U, s.Q.VERIFIED_AND_PARTNERED, {
                IconComponent: G.Z,
                foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
                foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
                backgroundDarkColor: l.Z.unsafe_rawColors.GREEN_360.css,
                backgroundLightColor: l.Z.unsafe_rawColors.GREEN_360.css
            }), F(U, s.Q.VERIFIED, {
                IconComponent: G.Z,
                foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
                foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
                backgroundDarkColor: l.Z.unsafe_rawColors.GREEN_360.css,
                backgroundLightColor: l.Z.unsafe_rawColors.GREEN_360.css
            }), F(U, s.Q.PARTNERED, {
                IconComponent: b.Z,
                foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
                foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
                backgroundDarkColor: l.Z.unsafe_rawColors.BRAND_500.css,
                backgroundLightColor: l.Z.unsafe_rawColors.BRAND_500.css
            }), F(U, s.Q.COMMUNITY, {
                IconComponent: T,
                foregroundDarkColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
                foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
                backgroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
                backgroundLightColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
                premiumBackgroundColor: y.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
                premiumForegroundColor: l.Z.unsafe_rawColors.WHITE_400.css
            }), F(U, s.Q.DISCOVERABLE, {
                IconComponent: x,
                foregroundDarkColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
                foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
                backgroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
                backgroundLightColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
                premiumBackgroundColor: y.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
                premiumForegroundColor: l.Z.unsafe_rawColors.WHITE_400.css
            }), F(U, s.Q.NONE, {}), U);

            function z(e) {
                var t = e.guildTraits;
                return (0, n.jsxs)("div", {
                    className: V().tooltipPremiumFooterContainer,
                    children: [(0, n.jsxs)("div", {
                        className: i()(V().tooltipPremiumFooterSegment, V().tooltipPremiumFooterTierSegment),
                        children: [(0, n.jsx)(L, {
                            width: 18,
                            height: 18,
                            className: V().gemIcon
                        }), (0, n.jsx)(u.Text, {
                            variant: "text-xs/semibold",
                            color: "always-white",
                            children: E.nW(t.premiumTier)
                        })]
                    }), (0, n.jsx)("div", {
                        className: i()(V().tooltipPremiumFooterSegment),
                        children: (0, n.jsx)(u.Text, {
                            variant: "text-xs/semibold",
                            color: "always-white",
                            children: k.Z.Messages.SERVER_BADGE_PREMIUM_FOOTER_BOOST_COUNT.format({
                                count: t.premiumSubscriberCount
                            })
                        })
                    })]
                })
            }

            function J(e) {
                var t = e.badgeType,
                    r = e.guildTraits,
                    o = function(e, t) {
                        var r = t === f.PZ.PUBLIC ? k.Z.Messages.SERVER_BADGE_DESCRIPTION_ANYONE_CAN_JOIN : k.Z.Messages.SERVER_BADGE_DESCRIPTION_INVITE_ONLY;
                        switch (e) {
                            case s.Q.STAFF:
                                return {
                                    tooltipTitle: k.Z.Messages.INTERNAL_EMPLOYEE_ONLY, tooltipSubtitle: k.Z.Messages.INTERNAL_EMPLOYEE_ONLY, tooltipDescription: k.Z.Messages.INTERNAL_EMPLOYEE_ONLY
                                };
                            case s.Q.VERIFIED:
                                return {
                                    tooltipTitle: k.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipSubtitle: k.Z.Messages.GUILD_VERIFIED, tooltipDescription: r
                                };
                            case s.Q.PARTNERED:
                                return {
                                    tooltipTitle: k.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipSubtitle: k.Z.Messages.GUILD_PARTNERED,
                                        tooltipDescription: r
                                };
                            case s.Q.VERIFIED_AND_PARTNERED:
                                return {
                                    tooltipTitle: k.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipSubtitle: k.Z.Messages.GUILD_VERIFIED_AND_PARTNERED, tooltipDescription: r
                                };
                            case s.Q.COMMUNITY:
                                return {
                                    tooltipTitle: k.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipDescription: k.Z.Messages.SERVER_BADGE_DESCRIPTION_INVITE_ONLY
                                };
                            case s.Q.DISCOVERABLE:
                                return {
                                    tooltipTitle: k.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipDescription: k.Z.Messages.SERVER_BADGE_DESCRIPTION_ANYONE_CAN_JOIN
                                };
                            default:
                                return {
                                    tooltipTitle: k.Z.Messages.SERVER_BADGE_TITLE_UNKNOWN
                                }
                        }
                    }(t, r.visibility),
                    i = o.tooltipTitle,
                    c = o.tooltipSubtitle,
                    l = o.tooltipDescription;
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)("div", {
                        className: V().tooltipBodyContainer,
                        children: [(0, n.jsx)(u.Text, {
                            color: "interactive-active",
                            variant: "text-xs/bold",
                            children: i
                        }), null != c ? (0, n.jsx)(u.Text, {
                            color: "text-muted",
                            variant: "text-xs/medium",
                            children: c
                        }) : null, null != l ? (0, n.jsx)(u.Text, {
                            color: "text-muted",
                            variant: "text-xs/medium",
                            children: l
                        }) : null]
                    }), r.premium ? (0, n.jsx)(z, {
                        guildTraits: r
                    }) : null]
                })
            }

            function X(e) {
                var t = e.guild,
                    r = e.tooltipColor,
                    o = void 0 === r ? u.Tooltip.Colors.BRAND : r,
                    i = e.tooltipPosition,
                    l = e.className,
                    E = e.flowerStarClassName,
                    y = e.iconClassName,
                    b = e.badgeStrokeColor,
                    g = e.badgeColor,
                    v = e.size,
                    I = void 0 === v ? 16 : v,
                    w = e.disableBoostClick,
                    P = e["aria-label"],
                    C = void 0 !== P && P,
                    R = (0, c.e7)([_.default, d.ZP], (function() {
                        var e = _.default.getCurrentUser();
                        return d.ZP.isMember(null == t ? void 0 : t.id, null == e ? void 0 : e.id)
                    })),
                    T = (0, c.e7)([O.Z], (function() {
                        return O.Z.theme
                    })),
                    S = (0, f.XX)(t),
                    m = (0, s.i)(S);
                if (m === s.Q.NONE) return null;
                var j, N, x = Y[m],
                    A = x.IconComponent,
                    D = x.backgroundDarkColor,
                    M = x.backgroundLightColor,
                    L = x.foregroundDarkColor,
                    U = x.foregroundLightColor,
                    Z = x.premiumBackgroundColor,
                    G = x.premiumForegroundColor;
                if (null == A) return null;
                if (S.premium) {
                    j = G;
                    N = Z
                }
                var k = (0, a.wj)(T) ? L : U,
                    H = (0, a.wj)(T) ? D : M;
                j = null != j ? j : k;
                N = null != N ? N : H;
                var F = function(e) {
                    if (S.premium && R && !w) {
                        e.stopPropagation();
                        e.preventDefault();
                        (0, p.f)({
                            guildId: t.id,
                            location: {
                                section: B.jXE.GUILD_HEADER,
                                object: B.qAy.BOOST_GEM_ICON
                            }
                        })
                    }
                };
                return (0, n.jsx)(u.Tooltip, {
                    color: o,
                    position: i,
                    "aria-label": C,
                    text: (0, n.jsx)(J, {
                        badgeType: m,
                        guildTraits: S
                    }),
                    tooltipContentClassName: V().tooltipRemovePadding,
                    children: function(e) {
                        return (0, n.jsx)(u.Clickable, {
                            onClick: F,
                            children: (0, n.jsx)(h.Z, K(W({}, e), {
                                className: l,
                                flowerStarClassName: E,
                                color: null != N ? N : g,
                                stroke: b,
                                size: I,
                                children: (0, n.jsx)(A, {
                                    className: y,
                                    color: j
                                })
                            }))
                        })
                    }
                })
            }
        },
        559968: (e, t, r) => {
            r.d(t, {
                Z: () => O
            });
            var n = r(785893),
                o = (r(667294), r(168075)),
                i = r(795308),
                c = r(633878);

            function l(e, t, r) {
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

            function u(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function s(e, t, r) {
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

            function p(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            const O = (0, o.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    l = e.color,
                    a = void 0 === l ? "currentColor" : l,
                    u = e.foreground,
                    O = e.backgroundColor,
                    d = p(e, ["width", "height", "color", "foreground", "backgroundColor"]);
                return (0, n.jsxs)("svg", f(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            s(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(d)), {
                    width: r,
                    height: i,
                    viewBox: "0 0 14 14",
                    children: [null != O ? (0, n.jsx)("circle", {
                        r: 5,
                        cx: 7,
                        cy: 7,
                        fill: O
                    }) : null, (0, n.jsx)("path", {
                        fill: a,
                        className: u,
                        d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                    })]
                }))
            }), (function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    s = void 0 === o ? 24 : o,
                    f = e.color,
                    p = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    O = e.colorClass,
                    d = void 0 === O ? "" : O,
                    _ = u(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", a(function(e) {
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
                }({}, (0, c.Z)(_)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm4.707-15.707a1 1 0 0 0-1.414 0L12 10.586 8.707 7.293a1 1 0 0 0-1.414 1.414L10.586 12l-3.293 3.293a1 1 0 1 0 1.414 1.414L12 13.414l3.293 3.293a1 1 0 0 0 1.414-1.414L13.414 12l3.293-3.293a1 1 0 0 0 0-1.414Z",
                        clipRule: "evenodd",
                        className: d
                    })
                }))
            }))
        },
        816240: (e, t, r) => {
            r.d(t, {
                Z: () => s
            });
            var n = r(785893),
                o = (r(667294), r(168075)),
                i = r(43338),
                c = r(633878);

            function l(e, t, r) {
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

            function u(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            const s = (0, o.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    p = e.foreground,
                    O = u(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", a(function(e) {
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
                }({}, (0, c.Z)(O)), {
                    width: r,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        className: p,
                        d: "M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM10 8C10 6.8952 9.1032 6 8 6C6.8944 6 6 6.8952 6 8C6 9.1056 6.8944 10 8 10C9.1032 10 10 9.1056 10 8ZM9 14L6 18H18L15 11L11 16L9 14Z",
                        fill: f
                    })
                }))
            }), i.X)
        },
        316388: (e, t, r) => {
            r.d(t, {
                Z: () => O
            });
            var n = r(785893),
                o = (r(667294), r(168075)),
                i = r(795308),
                c = r(633878);

            function l(e, t, r) {
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

            function u(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function s(e, t, r) {
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

            function p(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            const O = (0, o.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    l = e.color,
                    a = void 0 === l ? "currentColor" : l,
                    u = e.foreground,
                    O = p(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", f(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            s(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(O)), {
                    width: r,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, n.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, n.jsx)("path", {
                            className: u,
                            fill: a,
                            d: "M10.59 13.41c.41.39.41 1.03 0 1.42-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0 5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.982 2.982 0 0 0 0-4.24 2.982 2.982 0 0 0-4.24 0l-3.53 3.53a2.982 2.982 0 0 0 0 4.24zm2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0 5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.982 2.982 0 0 0 0 4.24 2.982 2.982 0 0 0 4.24 0l3.53-3.53a2.982 2.982 0 0 0 0-4.24.973.973 0 0 1 0-1.42z"
                        }), (0, n.jsx)("rect", {
                            width: "24",
                            height: "24"
                        })]
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    s = void 0 === o ? 24 : o,
                    f = e.color,
                    p = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    O = e.colorClass,
                    d = void 0 === O ? "" : O,
                    _ = u(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", a(function(e) {
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
                }({}, (0, c.Z)(_)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M16.293 14.707a1 1 0 0 1 0-1.414l2.5-2.5a3.95 3.95 0 1 0-5.586-5.586l-2.5 2.5a1 1 0 1 1-1.414-1.414l2.5-2.5a5.95 5.95 0 0 1 8.414 8.414l-2.5 2.5a1 1 0 0 1-1.414 0ZM7.707 9.293a1 1 0 0 1 0 1.414l-2.5 2.5a3.95 3.95 0 0 0 5.586 5.586l2.5-2.5a1 1 0 0 1 1.414 1.414l-2.5 2.5a5.95 5.95 0 1 1-8.414-8.414l2.5-2.5a1 1 0 0 1 1.414 0Zm7 1.414a1 1 0 1 0-1.414-1.414l-4 4a1 1 0 0 0 1.414 1.414l4-4Z",
                        clipRule: "evenodd",
                        className: d
                    })
                }))
            }))
        },
        855595: (e, t, r) => {
            r.d(t, {
                Z: () => s
            });
            var n = r(785893),
                o = (r(667294), r(168075)),
                i = r(911486),
                c = r(633878);

            function l(e, t, r) {
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

            function u(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            const s = (0, o.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 20 : t,
                    o = e.height,
                    i = void 0 === o ? 23 : o,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    p = e.foreground,
                    O = u(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", a(function(e) {
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
                }({}, (0, c.Z)(O)), {
                    width: r,
                    height: i,
                    viewBox: "0 0 20 23",
                    children: (0, n.jsx)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: (0, n.jsx)("path", {
                            className: p,
                            fill: f,
                            d: "M19.487 5.126L10.487 0.126C10.184 -0.042 9.81798 -0.042 9.51498 0.126L0.514977 5.126C0.197977 5.302 0.000976562 5.636 0.000976562 5.999C0.000976562 6.693 0.114977 22.999 10.001 22.999C19.887 22.999 20.001 6.693 20.001 5.999C20.001 5.636 19.804 5.302 19.487 5.126ZM10.001 5.999C11.382 5.999 12.501 7.118 12.501 8.499C12.501 9.88 11.382 10.999 10.001 10.999C8.61998 10.999 7.50098 9.88 7.50098 8.499C7.50098 7.118 8.61998 5.999 10.001 5.999ZM6.25098 16C6.25098 13.699 7.69998 12.25 10.001 12.25C12.302 12.25 13.751 13.699 13.751 16H6.25098Z"
                        })
                    })
                }))
            }), i.l)
        },
        933850: (e, t, r) => {
            r.d(t, {
                Z: () => s
            });
            var n = r(785893),
                o = (r(667294), r(168075)),
                i = r(147751),
                c = r(633878);

            function l(e, t, r) {
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

            function u(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            const s = (0, o.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    p = e.foreground,
                    O = u(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", a(function(e) {
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
                }({}, (0, c.Z)(O)), {
                    width: r,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: f,
                        className: p,
                        d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
                    })
                }))
            }), i.q)
        },
        755914: (e, t, r) => {
            r.d(t, {
                Z: () => O
            });
            var n = r(785893),
                o = (r(667294), r(168075)),
                i = r(795308),
                c = r(633878);

            function l(e, t, r) {
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

            function u(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function s(e, t, r) {
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

            function p(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            const O = (0, o.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    l = e.color,
                    a = void 0 === l ? "currentColor" : l,
                    u = e.foreground,
                    O = p(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", f(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            s(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(O)), {
                    width: r,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        className: u,
                        fill: a,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                        "aria-hidden": !0
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    s = void 0 === o ? 24 : o,
                    f = e.color,
                    p = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    O = e.colorClass,
                    d = void 0 === O ? "" : O,
                    _ = u(e, ["width", "height", "color", "colorClass"]);
                return (0,
                    n.jsx)("svg", a(function(e) {
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
                }({}, (0, c.Z)(_)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.737.324L5.917 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.917l4.286 4.676a1 1 0 0 0 .737.324H11a1 1 0 0 0 1-1V3Zm3.1 17.754c-.58.138-1.1-.33-1.1-.926v-.032c0-.497.369-.912.849-1.043a7.003 7.003 0 0 0 0-13.506C14.369 5.116 14 4.7 14 4.204v-.032c0-.596.52-1.064 1.1-.926a9.004 9.004 0 0 1 0 17.508Zm.057-4.242c-.57.273-1.157-.203-1.157-.835v-.14c0-.424.277-.789.633-1.02A2.997 2.997 0 0 0 16 12a2.997 2.997 0 0 0-1.367-2.517c-.356-.231-.633-.596-.633-1.02v-.14c0-.632.587-1.108 1.157-.835a5 5 0 0 1 0 9.024Z",
                        clipRule: "evenodd",
                        className: d
                    })
                }))
            }))
        },
        565571: (e, t, r) => {
            r.d(t, {
                Z: () => O
            });
            var n = r(785893),
                o = (r(667294), r(168075)),
                i = r(795308),
                c = r(633878);

            function l(e, t, r) {
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

            function u(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function s(e, t, r) {
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

            function p(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            const O = (0, o.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 32 : t,
                    o = e.height,
                    i = void 0 === o ? 32 : o,
                    l = e.color,
                    a = void 0 === l ? "currentColor" : l,
                    u = p(e, ["width", "height", "color"]);
                return (0, n.jsx)("svg", f(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            s(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(u)), {
                    width: r,
                    height: i,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: (0, n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                        fill: a
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    s = void 0 === o ? 24 : o,
                    f = e.color,
                    p = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    O = e.colorClass,
                    d = void 0 === O ? "" : O,
                    _ = u(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", a(function(e) {
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
                }({}, (0, c.Z)(_)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M19.615 18.25c-.335-.364-.35-.914-.079-1.328a9 9 0 1 0-15.072 0c.27.414.256.964-.079 1.328l-.019.02c-.407.442-1.113.428-1.452-.068A10.949 10.949 0 0 1 1 12C1 5.925 5.925 1 12 1s11 4.925 11 11c0 2.3-.706 4.436-1.914 6.202-.339.496-1.045.51-1.452.068l-.02-.02Zm-2.785-3.017c.428.463 1.176.42 1.454-.145a7 7 0 1 0-12.568 0c.278.565 1.026.608 1.454.145l.054-.06c.304-.329.342-.817.168-1.23a5 5 0 1 1 9.216 0c-.174.413-.136.901.168 1.23l.054.06ZM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-8.669 8.03c-.252.725.12 1.5.808 1.84A10.955 10.955 0 0 0 12 23c1.745 0 3.395-.406 4.861-1.13.69-.34 1.06-1.115.808-1.84a6.003 6.003 0 0 0-11.338 0Z",
                        clipRule: "evenodd",
                        className: d
                    })
                }))
            }))
        },
        71236: (e, t, r) => {
            r.d(t, {
                Z: () => s
            });
            var n = r(785893),
                o = (r(667294), r(168075)),
                i = r(663207),
                c = r(633878);

            function l(e, t, r) {
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

            function u(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            const s = (0, o.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    p = e.foreground,
                    O = u(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", a(function(e) {
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
                }({}, (0, c.Z)(O)), {
                    width: r,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: f,
                        className: p,
                        d: "M21.924 8.61789C21.77 8.24489 21.404 8.00089 21 8.00089H15.618L12.894 2.55389C12.555 1.87689 11.444 1.87689 11.105 2.55389L8.38199 8.00089H2.99999C2.59599 8.00089 2.22999 8.24489 2.07599 8.61789C1.92199 8.99089 2.00699 9.42289 2.29299 9.70789L6.87699 14.2919L5.03899 20.7269C4.92399 21.1299 5.07199 21.5619 5.40999 21.8089C5.74999 22.0569 6.20699 22.0659 6.55399 21.8329L12 18.2029L17.445 21.8329C17.613 21.9449 17.806 22.0009 18 22.0009C18.207 22.0009 18.414 21.9369 18.59 21.8089C18.928 21.5619 19.076 21.1299 18.961 20.7269L17.123 14.2919L21.707 9.70789C21.993 9.42289 22.078 8.99089 21.924 8.61789Z"
                    })
                }))
            }), i.r)
        },
        990554: (e, t, r) => {
            r.d(t, {
                l: () => o
            });
            var n = r(421281);

            function o(e, t) {
                for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) o[i - 2] = arguments[i];
                var c = o.reduce((function(e, t) {
                        return e + (0, n.De)(t)
                    }), ""),
                    l = "".concat(t).concat(c),
                    a = e[l];
                if (null != a) return a;
                0
            }
        }
    }
]);