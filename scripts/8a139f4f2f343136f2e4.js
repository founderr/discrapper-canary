(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [92381], {
        652411: (e, t, n) => {
            "use strict";
            n.d(t, {
                O_: () => R,
                qA: () => d,
                Ji: () => D,
                uR: () => I
            });
            var r = n(667294),
                i = n(468811),
                o = n(294184),
                a = n.n(o);

            function s(e, t) {
                var n = e.x,
                    r = e.y;
                return n > t.x && n < t.x + t.width && r > t.y && r < t.y + t.height
            }

            function c(e, t) {
                return e * t * t * (t > 0 ? -1 : 1)
            }
            var u = function() {
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
                        var s = this.position.previewUpdate(n);
                        return s.x += r.x * n, s.y += r.y * n, s
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
                        var s = e.call(this, t) || this;
                        s.min = n, s.max = r, s.duration = i;
                        var c = s.value / (s.max - s.min) * s.duration,
                            u = isNaN(c) ? 0 : c;
                        return s.timePassed = u < 0 ? s.duration - u : u, s.directionMultiplier = o, s.easingFunction = a, s
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

            function A(e, t) {
                return C([e, t])[0]
            }

            function O(e) {
                return "number" == typeof e ? {
                    x: e,
                    y: e
                } : e
            }

            function E(e) {
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
                            return new x(w(e.minValue, e.maxValue), w(e.minStart, e.maxStart), w(e.minFinal, e.maxFinal), w(e.minDuration, e.maxDuration), A(e.minDirection, e.maxDirection), C(e.easingFunctions)[0])
                    }
                }(h(h({}, e), {
                    valueType: "number"
                }))
            }

            function P(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            var t = O(e.value);
                            return new y(new g(t.x), new g(t.y));
                        case "static-random":
                            var n = O(e.minValue),
                                r = O(e.maxValue);
                            return new y(new g(w(n.x, r.x)), new g(w(n.y, r.y)));
                        case "linear":
                            t = O(e.value);
                            var i = O(e.addValue);
                            return new y(new b(t.x, i.x), new b(t.y, i.y));
                        case "linear-random":
                            n = O(e.minValue), r = O(e.maxValue);
                            var o = O(e.minAddValue),
                                a = O(e.maxAddValue);
                            return new y(new b(w(n.x, r.x), w(o.x, a.x)), new b(w(n.y, r.y), w(o.x, a.x)));
                        case "oscillating":
                            t = O(e.value);
                            var s = O(e.start),
                                c = O(e.final),
                                u = O(e.duration),
                                l = O(e.direction);
                            return new y(new x(t.x, s.x, c.x, u.x, l.x, e.easingFunction), new x(t.y, s.y, c.y, u.x, l.y, e.easingFunction));
                        case "oscillating-random":
                            n = O(e.minValue), r = O(e.maxValue);
                            var d = O(e.minStart),
                                f = O(e.maxStart),
                                p = O(e.minFinal),
                                h = O(e.maxFinal),
                                v = O(e.minDuration),
                                m = O(e.maxDuration),
                                E = O(e.minDirection),
                                S = O(e.maxDirection);
                            return new y(new x(w(n.x, r.x), w(d.x, f.x), w(p.x, h.x), w(v.x, m.x), A(E.x, S.x), C(e.easingFunctions)[0]), new x(w(n.y, r.y), w(d.y, f.y), w(p.y, h.y), w(v.y, m.y), A(E.y, S.y), C(e.easingFunctions)[0]))
                    }
                }(h(h({}, e), {
                    valueType: "Vector2"
                }))
            }

            function _(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            var t = E(e.value);
                            return new m(new g(t.x), new g(t.y), new g(t.z));
                        case "static-random":
                            var n = E(e.minValue),
                                r = E(e.maxValue);
                            return new m(new g(w(n.x, r.x)), new g(w(n.y, r.y)), new g(w(n.z, r.z)));
                        case "linear":
                            t = E(e.value);
                            var i = E(e.addValue);
                            return new m(new b(t.x, i.x), new b(t.y, i.y), new b(t.z, i.z));
                        case "linear-random":
                            n = E(e.minValue), r = E(e.maxValue);
                            var o = E(e.minAddValue),
                                a = E(e.maxAddValue);
                            return new m(new b(w(n.x, r.x), w(o.x, a.x)), new b(w(n.y, r.y), w(o.y, a.y)), new b(w(n.z, r.z), w(o.z, a.z)));
                        case "oscillating":
                            t = E(e.value);
                            var s = E(e.start),
                                c = E(e.final),
                                u = E(e.duration),
                                l = E(e.direction);
                            return new m(new x(t.x, s.x, c.x, u.x, l.x, e.easingFunction), new x(t.y, s.y, c.y, u.z, l.y, e.easingFunction), new x(t.z, s.z, c.z, u.z, l.z, e.easingFunction));
                        case "oscillating-random":
                            n = E(e.minValue), r = E(e.maxValue);
                            var d = E(e.minStart),
                                f = E(e.maxStart),
                                p = E(e.minFinal),
                                h = E(e.maxFinal),
                                v = E(e.minDuration),
                                y = E(e.maxDuration),
                                O = E(e.minDirection),
                                S = E(e.maxDirection);
                            return new m(new x(w(n.x, r.x), w(d.x, f.x), w(p.x, h.x), w(v.x, y.x), A(O.x, S.x), C(e.easingFunctions)[0]), new x(w(n.y, r.y), w(d.y, f.y), w(p.y, h.y), w(v.y, y.y), A(O.y, S.y), C(e.easingFunctions)[0]), new x(w(n.z, r.z), w(d.z, f.z), w(p.z, h.z), w(v.z, y.z), A(O.z, S.z), C(e.easingFunctions)[0]))
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
                    s = function(e, t) {
                        if (null != e) {
                            var n = t.sprites.findIndex((function(t) {
                                return n = t, "string" == typeof(r = e) ? n.src === r && n.colorize : n.src === r.src && n.colorize === r.colorize;
                                var n, r
                            }));
                            if (-1 !== n) return [e, n]
                        }
                        return C(t.sprites)
                    }(r, n),
                    c = s[0],
                    d = s[1],
                    f = function(e, t, n) {
                        if (! function(e) {
                                return "string" == typeof e || e.colorize
                            }(e)) return 0;
                        var r = null != t ? n.colors.findIndex((function(e) {
                            return e === t
                        })) : -1;
                        return -1 !== r ? r : Math.floor(w(0, n.colors.length - 1))
                    }(null != r ? r : c, i, n);
                return new u({
                    id: e,
                    position: P(o.position),
                    velocity: P(o.velocity),
                    rotation: _(o.rotation),
                    dragCoefficient: P(o.dragCoefficient),
                    size: a,
                    opacity: S(o.opacity),
                    spriteX: f * n.spriteWidth + 2 * f,
                    spriteY: d * n.spriteHeight + 2 * d,
                    spriteWidth: n.spriteWidth,
                    spriteHeight: n.spriteHeight
                })
            }
            var R = r.forwardRef((function(e, t) {
                var o = e.className,
                    a = e.environment,
                    c = e.onClick,
                    u = e.onMouseDown,
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
                    A = r.useCallback((function(e, t, n, r, o) {
                        var a, s = j(null !== (a = e.id) && void 0 !== a ? a : (0, i.v4)(), e, n, r, o);
                        return C(s, t), s
                    }), [C]),
                    O = r.useCallback((function(e) {
                        m.current.delete(e)
                    }), []),
                    E = r.useCallback((function() {
                        return m.current.clear()
                    }), []),
                    S = r.useCallback((function() {
                        return y.current
                    }), []);
                r.useImperativeHandle(t, (function() {
                    return {
                        createConfetti: A,
                        addConfetti: C,
                        deleteConfetti: O,
                        clearConfetti: E,
                        getCanvas: S
                    }
                }), [A, C, O, E, S]);
                var P = r.useCallback((function(e, t) {
                        var n, r, i = t.clickHandler,
                            o = t.mouseHandler;
                        if (null != i || null != o) {
                            var c = null === (n = y.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                            if (null != c) {
                                var u = function(e, t) {
                                    if (null == t) throw new Error("element should not be null");
                                    var n = t.getBoundingClientRect();
                                    return {
                                        x: e.clientX - n.left,
                                        y: e.clientY - n.top
                                    }
                                }(e, y.current);
                                if (s(u, {
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
                                                return s(u, {
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
                        return P(e, {
                            clickHandler: c
                        })
                    }), [P, c]),
                    R = r.useCallback((function(e) {
                        return P(e, {
                            clickHandler: u
                        })
                    }), [P, u]),
                    D = r.useCallback((function(e) {
                        return P(e, {
                            mouseHandler: l
                        })
                    }), [P, l]),
                    I = r.useCallback((function(e) {
                        return P(e, {
                            mouseHandler: d
                        })
                    }), [P, d]);
                return r.useEffect((function() {
                    var e = function(e, t, n) {
                        null != n && window.addEventListener(e, t)
                    };
                    return e("click", _, c), e("mousedown", R, u), e("mousemove", D, l), e("mouseup", I, d),
                        function() {
                            window.removeEventListener("click", _), window.removeEventListener("mousedown", R), window.removeEventListener("mousemove", D), window.removeEventListener("mouseup", D)
                        }
                }), [_, R, D, I, c, u, l, d]), r.useEffect((function() {
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
                    s = e.visible,
                    c = void 0 !== s && s,
                    u = e.sprites,
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
                                        for (var s = t.getImageData(o, a, d, f), c = function(e) {
                                                "#" === e[0] && (e = e.slice(1));
                                                var t = parseInt(e, 16);
                                                return {
                                                    r: t >> 16 & 255,
                                                    g: t >> 8 & 255,
                                                    b: 255 & t
                                                }
                                            }(r), u = 0; u < s.data.length; u += 4) s.data[u] = c.r, s.data[u + 1] = c.g, s.data[u + 2] = c.b;
                                        t.putImageData(s, o, a)
                                    }
                                };
                                e.colorize ? l.forEach((function(e, t) {
                                    return r(e, t)
                                })) : r(null, 0)
                            })))
                    }), [l, f, d]),
                    g = r.useCallback((function() {
                        var e = u.map((function(e) {
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
                    }), [u]),
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

                                function s(e) {
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
                                    }))).then(a, s)
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
                                    next: s(0),
                                    throw: s(1),
                                    return: s(2)
                                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                                    return this
                                }), o;

                                function s(s) {
                                    return function(c) {
                                        return function(s) {
                                            if (n) throw new TypeError("Generator is already executing.");
                                            for (; o && (o = 0, s[0] && (a = 0)), a;) try {
                                                if (n = 1, r && (i = 2 & s[0] ? r.return : s[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, s[1])).done) return i;
                                                switch (r = 0, i && (s = [2 & s[0], i.value]), s[0]) {
                                                    case 0:
                                                    case 1:
                                                        i = s;
                                                        break;
                                                    case 4:
                                                        return a.label++, {
                                                            value: s[1],
                                                            done: !1
                                                        };
                                                    case 5:
                                                        a.label++, r = s[1], s = [0];
                                                        continue;
                                                    case 7:
                                                        s = a.ops.pop(), a.trys.pop();
                                                        continue;
                                                    default:
                                                        if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                                                            a = 0;
                                                            continue
                                                        }
                                                        if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
                                                            a.label = s[1];
                                                            break
                                                        }
                                                        if (6 === s[0] && a.label < i[1]) {
                                                            a.label = i[1], i = s;
                                                            break
                                                        }
                                                        if (i && a.label < i[2]) {
                                                            a.label = i[2], a.ops.push(s);
                                                            break
                                                        }
                                                        i[2] && a.ops.pop(), a.trys.pop();
                                                        continue
                                                }
                                                s = t.call(e, a)
                                            } catch (e) {
                                                s = [6, e], r = 0
                                            } finally {
                                                n = i = 0
                                            }
                                            if (5 & s[0]) throw s[1];
                                            return {
                                                value: s[0] ? s[1] : void 0,
                                                done: !0
                                            }
                                        }([s, c])
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
                    null != p.current && (p.current.width = (d + 2) * Math.max(l.length, 1), p.current.height = (f + 2) * u.length)
                }), [l.length, f, d, u.length]), r.createElement("canvas", {
                    ref: p,
                    className: a()(o, (n = {}, n["SpriteCanvas-module_spriteCanvasHidden__ndzQV"] = !c, n))
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
                var s = r.useCallback((function(n, r) {
                        var i = void 0 === r ? {} : r,
                            o = i.sprite,
                            a = i.color,
                            s = null == t ? void 0 : t.getCreateData(),
                            c = null == t ? void 0 : t.getCanvas();
                        if (null != c && null != s && 0 !== s.sprites.length) return null == e ? void 0 : e.createConfetti(n, c, s, o, a)
                    }), [e, t]),
                    c = r.useCallback((function(e, t, n) {
                        for (var r = [], i = 0; i < t; i++) {
                            var o = s(e, n);
                            o && r.push(o)
                        }
                        return r
                    }), [s]),
                    u = r.useCallback((function(n) {
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
                        createConfetti: s,
                        createMultipleConfetti: c,
                        addConfetti: u,
                        clearConfetti: d,
                        deleteConfetti: l,
                        isReady: o && null != t && null != e
                    }
                }), [u, d, e, s, c, l, o, t])
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
        592381: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => Se
            });
            var r = n(785893),
                i = n(667294),
                o = n(294184),
                a = n.n(o),
                s = n(202351),
                c = n(882723),
                u = n(735885),
                l = n(153686),
                d = n(19585),
                f = n(339938),
                p = n(767539),
                h = n(349771),
                v = n(681714),
                y = n(498964),
                m = n(408522),
                g = n(318715),
                b = n(652591),
                x = n(764797),
                w = n(2590),
                C = n(203600);

            function A(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function O(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            a = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            i = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (s) throw i
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
            const E = function(e) {
                var t = O((0, g.Wu)([x.Z], (function() {
                        return [x.Z.categories, x.Z.products, x.Z.categorySkuIdsByProductSkuId]
                    })), 3),
                    n = t[0],
                    r = t[1],
                    o = t[2];
                return (0, i.useCallback)((function(t) {
                    var i = t.type,
                        a = t.skuId,
                        s = n.get(o[a]),
                        c = r.get(a);
                    b.default.track(w.rMx.PREMIUM_FEATURE_TRY_OUT, {
                        feature_name: (0, y.EQ)(i).with(m.Z.AVATAR_DECORATION, (function() {
                            return C.QP.AVATAR_DECORATION
                        })).otherwise((function() {})),
                        feature_tier: (0, h.mv)(s) ? C.h1.FREE : C.h1.PREMIUM_STANDARD,
                        feature_selection: null == c ? void 0 : c.name,
                        location_stack: e
                    })
                }), [n, r, o, e])
            };
            var S = n(455706),
                P = n(357920),
                _ = n(784426),
                j = n(450383),
                R = n(473903),
                D = n(116094),
                I = n(938737);
            const M = function(e) {
                return {
                    product: (0, g.ZP)([x.Z], (function() {
                        return x.Z.getProduct(e)
                    })),
                    purchase: (0,
                        g.ZP)([p.Z], (function() {
                        return p.Z.getPurchase(e)
                    }))
                }
            };
            var N = n(940594),
                Z = n(584228),
                T = n(491260),
                F = n(89836),
                k = n(310126),
                z = n(841379),
                U = n(995141),
                H = n(473708);

            function L(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var V = k.ZP.getEnableHardwareAcceleration() ? c.AnimatedAvatar : c.Avatar;
            const B = function(e) {
                var t = e.user,
                    n = e.pendingAvatarDecoration,
                    i = e.status,
                    o = e.avatarSize,
                    a = void 0 === o ? c.AvatarSizes.SIZE_120 : o,
                    s = e["aria-hidden"],
                    u = void 0 !== s && s,
                    l = (0, F.w)({
                        user: t,
                        size: (0, c.getAvatarSize)(a),
                        showPending: !0
                    }),
                    d = l.avatarSrc,
                    f = l.isAvatarAnimating,
                    p = l.eventHandlers,
                    h = (0, z.Z)({
                        user: t,
                        pendingAvatarDecoration: n,
                        size: (0, U.y9)(a),
                        canAnimate: f
                    });
                return (0, r.jsx)(V, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            L(e, t, n[t])
                        }))
                    }
                    return e
                }({
                    avatarDecoration: h,
                    src: d,
                    size: a,
                    status: i,
                    "aria-label": u ? void 0 : H.Z.Messages.USER_SETTINGS_AVATAR,
                    "aria-hidden": u
                }, p))
            };
            var G = n(675960),
                W = n.n(G),
                K = [{
                    avatarSize: c.AvatarSizes.SIZE_40,
                    showStatus: !1
                }, {
                    avatarSize: c.AvatarSizes.SIZE_32,
                    showStatus: !1
                }, {
                    avatarSize: c.AvatarSizes.SIZE_40,
                    showStatus: !0
                }, {
                    avatarSize: c.AvatarSizes.SIZE_32,
                    showStatus: !0
                }],
                Y = function(e) {
                    var t = e.purchase,
                        n = (0, h.qS)(t);
                    return (0, r.jsxs)("div", {
                        className: W().purchaseInfo,
                        children: [(0, r.jsx)(c.Text, {
                            variant: "text-sm/semibold",
                            children: t.name
                        }), (0, r.jsxs)("div", {
                            children: [(0, r.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                children: t.summary
                            }), (0, r.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                children: n ? H.Z.Messages.CHANGE_DECORATION_MODAL_STARTER_DESC : H.Z.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
                                    date: t.purchasedAt.toLocaleDateString(void 0, {
                                        month: "long",
                                        year: "numeric"
                                    })
                                })
                            })]
                        })]
                    })
                },
                q = function(e) {
                    var t = e.user,
                        n = e.pendingAvatarDecoration,
                        i = e.product,
                        o = e.text,
                        u = e.className,
                        l = (0,
                            s.e7)([x.Z], (function() {
                            return x.Z.getCategoryForProduct(i.skuId)
                        })),
                        d = (0, Z.Z)(l).backgroundColors,
                        f = (0, h.mv)(l) ? H.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_PREMIUM : H.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_PURCHASE_PREMIUM;
                    return (0, r.jsxs)("div", {
                        className: a()(W().modalPreview, W().shopPreviewContainer, u),
                        children: [(0, r.jsx)("div", {
                            className: W().shopPreviewBanner,
                            style: null != (null == l ? void 0 : l.banner) ? {
                                backgroundImage: "url(".concat((0, h.uV)(l.banner, {
                                    size: N.yV
                                }), ")")
                            } : {
                                background: "linear-gradient(".concat(d[0], ", ").concat(d[1], ")")
                            },
                            children: (0, r.jsx)(B, {
                                user: t,
                                pendingAvatarDecoration: n
                            })
                        }), (0, r.jsxs)("div", {
                            className: W().shopPreviewTextContainer,
                            children: [(0, r.jsx)(c.Text, {
                                variant: "text-sm/semibold",
                                children: i.name
                            }), (0, r.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                children: null != o ? o : f
                            })]
                        })]
                    })
                };
            const X = function(e) {
                var t = e.user,
                    n = e.pendingAvatarDecoration,
                    i = e.className,
                    o = (0, s.e7)([T.Z], (function() {
                        return T.Z.getStatus(t.id)
                    })),
                    c = M(null == n ? void 0 : n.skuId),
                    u = c.product,
                    l = c.purchase,
                    d = (0, h.qS)(l),
                    f = !D.ZP.canUsePremiumProfileCustomization(t) && d;
                return null == n || null == u || null != l && !f ? (0, r.jsxs)("div", {
                    className: a()(W().modalPreview, i),
                    children: [(0, r.jsxs)("div", {
                        className: W().previewSections,
                        children: [(0, r.jsx)("div", {
                            className: W().decorationPreview,
                            children: (0, r.jsx)(B, {
                                user: t,
                                pendingAvatarDecoration: n
                            })
                        }), (0, r.jsx)("div", {
                            className: W().smallDecorationPreviewsContainer,
                            children: K.map((function(e) {
                                var i = e.avatarSize,
                                    a = e.showStatus;
                                return (0, r.jsx)("div", {
                                    className: W().smallDecorationPreview,
                                    children: (0, r.jsx)(B, {
                                        user: t,
                                        avatarSize: i,
                                        pendingAvatarDecoration: n,
                                        status: a ? o : void 0,
                                        "aria-hidden": !0
                                    })
                                }, "".concat(i).concat(a))
                            }))
                        })]
                    }), null != l && (0, r.jsx)(Y, {
                        purchase: l
                    })]
                }) : (0, r.jsx)(q, {
                    className: i,
                    user: t,
                    pendingAvatarDecoration: n,
                    product: u,
                    text: f ? H.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_CHURNED : void 0
                })
            };
            var Q, $ = n(517586),
                J = n(662478),
                ee = n(95891),
                te = n(778613),
                ne = n(97990),
                re = n(155217),
                ie = n(616276),
                oe = n(531441),
                ae = n(389091),
                se = n.n(ae);

            function ce(e, t) {
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

            function le(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        ue(e, t, n[t])
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

            function fe(e, t) {
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

            function pe(e) {
                return function(e) {
                    if (Array.isArray(e)) return ce(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return ce(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ce(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }! function(e) {
                e[e.PURCHASE = 0] = "PURCHASE";
                e[e.PREMIUM_PURCHASE = 1] = "PREMIUM_PURCHASE";
                e[e.PREVIEW = 2] = "PREVIEW"
            }(Q || (Q = {}));
            var he = {
                    id: "None"
                },
                ve = {
                    id: "Shop"
                },
                ye = function() {
                    return 80
                },
                me = function(e) {
                    var t = e.children,
                        n = e.className,
                        i = e.onSelect,
                        o = e.isSelected,
                        s = void 0 !== o && o,
                        u = fe(e, ["children", "className", "onSelect", "isSelected"]);
                    return (0, r.jsx)(c.Clickable, de(le({
                        className: a()(se().decorationGridItem, s ? se().selected : void 0, n)
                    }, u), {
                        onClick: i,
                        children: t
                    }))
                },
                ge = function(e) {
                    var t = e.user,
                        n = e.avatarDecoration,
                        o = e.innerRef,
                        a = e.section,
                        s = fe(e, ["user", "avatarDecoration", "innerRef", "section"]),
                        c = (0, g.ZP)([x.Z], (function() {
                            var e = x.Z.getCategoryForProduct(n.skuId);
                            return (0, h.mv)(e)
                        })),
                        u = a === Q.PREMIUM_PURCHASE && c && !D.ZP.canUseCollectibles(t),
                        l = i.useRef(null),
                        d = (0, J.Z)(null != o ? o : l),
                        f = (0, z.Z)({
                            user: t,
                            pendingAvatarDecoration: n,
                            size: 80,
                            canAnimate: d
                        });
                    return (0, r.jsxs)(me, de(le({
                        className: u ? se().decorationGridItemChurned : void 0,
                        innerRef: null != o ? o : l
                    }, s), {
                        children: [(0, r.jsx)("img", {
                            className: se().presetDecorationImg,
                            src: f,
                            alt: n.label
                        }), (a === Q.PREVIEW || u) && (0, r.jsx)(oe.G2, {
                            icon: c ? ee.Z : ne.Z,
                            color: $.Z.BACKGROUND_ACCENT,
                            className: se().itemBadge
                        })]
                    }))
                };
            const be = function(e) {
                var t = e.user,
                    n = e.pendingAvatarDecoration,
                    o = e.selectedAvatarDecorationRef,
                    a = e.onSelect,
                    s = e.onOpenShop,
                    u = (0, g.ZP)([x.Z], (function() {
                        return x.Z.categories
                    })),
                    l = (0, g.ZP)([p.Z], (function() {
                        return p.Z.purchases
                    })),
                    d = i.useMemo((function() {
                        var e = (0, h.L8)(u, l);
                        return [{
                            section: Q.PURCHASE,
                            items: [he, ve].concat(pe(e.purchase)),
                            height: 12,
                            header: H.Z.Messages.CHANGE_DECORATION_MODAL_PURCHASE_HEADER
                        }, {
                            section: Q.PREMIUM_PURCHASE,
                            items: e.premiumPurchase,
                            height: 12,
                            header: H.Z.Messages.CHANGE_DECORATION_MODAL_PREMIUM_STARTER_HEADER
                        }, {
                            section: Q.PREVIEW,
                            items: e.preview,
                            height: 56,
                            header: H.Z.Messages.CHANGE_DECORATION_MODAL_SHOP_PREVIEW_HEADER
                        }].filter((function(e) {
                            return e.items.length > 0
                        }))
                    }), [u, l]);
                return (0, r.jsx)(c.MasonryList, {
                    fade: !0,
                    className: se().list,
                    columns: 3,
                    sections: d.map((function(e) {
                        return e.items.length
                    })),
                    sectionGutter: 16,
                    itemGutter: 12,
                    paddingHorizontal: 12,
                    paddingVertical: 0,
                    removeEdgeItemGutters: !0,
                    renderItem: function(e, i, u, l) {
                        var f = d[e],
                            p = f.section,
                            h = f.items;
                        return (0, y.EQ)(h[i]).with(he, (function() {
                            return (0, r.jsxs)(me, {
                                style: le({}, u),
                                isSelected: null === n,
                                onSelect: function() {
                                    return a(null)
                                },
                                children: [(0, r.jsx)(te.Z, {
                                    className: se().notAllowedIcon
                                }), (0, r.jsx)(c.Text, {
                                    variant: "text-xs/normal",
                                    color: "header-primary",
                                    children: H.Z.Messages.NONE
                                })]
                            }, l)
                        })).with(ve, (function() {
                            return (0, r.jsxs)(me, {
                                style: u,
                                onSelect: s,
                                children: [(0, r.jsx)(re.Z, {
                                    className: se().shopIcon
                                }), (0, r.jsx)(ie.Z, {
                                    foreground: se().shopSparkleBig
                                }), (0, r.jsx)(ie.Z, {
                                    foreground: se().shopSparkleSmall
                                }), (0, r.jsx)(c.Text, {
                                    variant: "text-xs/normal",
                                    color: "header-primary",
                                    children: H.Z.Messages.COLLECTIBLES_SHOP
                                })]
                            }, l)
                        })).otherwise((function(e) {
                            var i = (null == n ? void 0 : n.id) === e.id;
                            return (0, r.jsx)(ge, {
                                style: le({}, u),
                                user: t,
                                avatarDecoration: e,
                                section: p,
                                innerRef: i ? o : void 0,
                                isSelected: i,
                                onSelect: function() {
                                    return a(e)
                                }
                            }, l)
                        }))
                    },
                    renderSection: function(e) {
                        var t = d[e],
                            n = t.section,
                            i = t.header;
                        return (0, r.jsx)("div", {
                            className: se().headings,
                            children: (0, r.jsx)(c.HeadingLevel, {
                                forceLevel: 5,
                                component: (0, r.jsx)(c.Heading, {
                                    variant: "eyebrow",
                                    color: "header-secondary",
                                    children: i
                                }),
                                children: n === Q.PREVIEW && (0, r.jsx)(c.Heading, {
                                    variant: "text-sm/normal",
                                    children: H.Z.Messages.CHANGE_DECORATION_MODAL_SHOP_PREVIEW_DESC
                                })
                            })
                        })
                    },
                    getSectionHeight: function(e) {
                        return d[e].height
                    },
                    getItemKey: function(e, t) {
                        return d[e].items[t].id
                    },
                    getItemHeight: ye
                })
            };
            var xe = n(240647),
                we = n.n(xe);

            function Ce(e, t) {
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
                            s = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            i = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (s) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Ce(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ce(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Oe(e) {
                var t = e.onApply,
                    n = e.onOpenShop,
                    i = e.onClose,
                    o = e.user,
                    l = e.disableApplyButton,
                    d = e.pendingAvatarDecoration,
                    f = D.ZP.canUsePremiumProfileCustomization(o),
                    h = (0, s.e7)([j.Z], (function() {
                        return j.Z.showNotice()
                    })),
                    v = (0, s.e7)([p.Z], (function() {
                        return null != p.Z.getPurchase(null == d ? void 0 : d.skuId)
                    }));
                if (f) return (0, r.jsxs)(c.ModalFooter, {
                    className: we().modalFooter,
                    children: [null === d || v || l ? (0, r.jsx)(c.Button, {
                        onClick: t,
                        disabled: l,
                        children: H.Z.Messages.AVATAR_DECORATION_MODAL_APPLY
                    }) : (0, r.jsx)(c.Button, {
                        className: we().goToShopButton,
                        onClick: n,
                        children: H.Z.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
                    }), (0, r.jsx)(c.Button, {
                        look: c.Button.Looks.LINK,
                        color: c.Button.Colors.PRIMARY,
                        onClick: i,
                        children: H.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_CANCEL
                    })]
                });
                var y = D.ZP.isPremium(o) ? H.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : H.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL;
                return (0, r.jsxs)(c.ModalFooter, {
                    className: a()(we().modalFooter, we().subscribeFooter),
                    children: [(0, r.jsxs)("div", {
                        className: we().buttonsRight,
                        children: [(0, r.jsx)(c.Button, {
                            look: c.Button.Looks.LINK,
                            color: c.Button.Colors.PRIMARY,
                            onClick: i,
                            children: H.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_CANCEL
                        }), (0, r.jsx)(S.Z, {
                            buttonText: y,
                            subscriptionTier: C.Si.TIER_2
                        })]
                    }), !h && (0, r.jsx)(c.Button, {
                        onClick: function(e) {
                            e.preventDefault();
                            (0, _.uL)(w.Z5c.APPLICATION_STORE);
                            (0, u.xf)();
                            i()
                        },
                        look: c.Button.Looks.LINK,
                        color: c.Button.Colors.LINK,
                        children: H.Z.Messages.AVATAR_DECORATION_MODAL_DISCOVER_MORE_PERKS
                    })]
                })
            }

            function Ee(e) {
                var t = e.user,
                    n = e.categories,
                    o = e.analyticsLocations,
                    a = e.onClose,
                    u = e.initialSelectedDecoration,
                    d = D.ZP.canUseCollectibles(t),
                    p = (0, s.e7)([j.Z], (function() {
                        return j.Z.getPendingAvatarDecoration()
                    })),
                    v = Ae(i.useState((function() {
                        return null != u ? u : void 0 !== p ? p : null == (null == t ? void 0 : t.avatarDecoration) || 0 === n.size ? null : null !== (e = (0, h.IM)(n).find((function(e) {
                            return (0, I.sr)(e, t.avatarDecoration)
                        }))) && void 0 !== e ? e : null;
                        var e
                    })), 2),
                    y = v[0],
                    m = v[1],
                    g = (0, I.sr)(y, p),
                    b = i.useRef(null),
                    x = E(o),
                    C = function() {
                        a();
                        (0, f.mK)({
                            analyticsLocations: o,
                            analyticsSource: l.Z.EDIT_AVATAR_DECORATION_MODAL
                        })
                    };
                return (0, r.jsxs)("div", {
                    className: we().modalBody,
                    children: [(0, r.jsxs)(c.ModalHeader, {
                        separator: !1,
                        className: we().modalHeader,
                        children: [(0, r.jsx)("div", {
                            className: we().modalHeadings,
                            children: (0, r.jsx)(c.HeadingLevel, {
                                component: (0, r.jsx)(c.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: H.Z.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
                                }),
                                children: !d && (0, r.jsx)(c.Heading, {
                                    variant: "text-sm/normal",
                                    children: H.Z.Messages.CHANGE_DECORATION_MODAL_SHOP_PREVIEW_HEADER_STARTER_DESC
                                })
                            })
                        }), (0, r.jsx)(c.ModalCloseButton, {
                            className: we().modalCloseButton,
                            onClick: a
                        })]
                    }), (0, r.jsxs)(c.ModalContent, {
                        className: we().modalContent,
                        scrollbarType: "none",
                        children: [(0, r.jsx)(be, {
                            user: t,
                            pendingAvatarDecoration: y,
                            selectedAvatarDecorationRef: b,
                            onSelect: function(e) {
                                m(e);
                                null != e && x(e)
                            },
                            onOpenShop: C
                        }), (0, r.jsx)(X, {
                            className: we().modalPreview,
                            user: t,
                            pendingAvatarDecoration: y
                        })]
                    }), (0, r.jsx)(Oe, {
                        onApply: g ? w.dG4 : function() {
                            (0,
                                P.PO)(y, null == t ? void 0 : t.avatarDecoration);
                            a()
                        },
                        onOpenShop: C,
                        onClose: a,
                        user: t,
                        pendingAvatarDecoration: y,
                        disableApplyButton: g
                    })]
                })
            }

            function Se(e) {
                var t = e.transitionState,
                    n = e.analyticsLocations,
                    o = e.onClose,
                    a = e.initialSelectedDecoration,
                    u = (0, v.ZP)(),
                    f = u.categories,
                    p = u.isFetching,
                    h = (0, s.e7)([R.default], (function() {
                        return R.default.getCurrentUser()
                    })),
                    y = (0, d.Z)(n, l.Z.EDIT_AVATAR_DECORATION_MODAL),
                    m = y.AnalyticsLocationProvider,
                    g = y.analyticsLocations;
                i.useEffect((function() {
                    b.default.track(w.rMx.OPEN_MODAL, {
                        type: "Edit Avatar Decoration Modal",
                        location_stack: g
                    })
                }), [g]);
                return null == h ? null : (0, r.jsx)(m, {
                    children: (0, r.jsx)(c.ModalRoot, {
                        transitionState: t,
                        className: we().modal,
                        size: p ? c.ModalSize.DYNAMIC : c.ModalSize.MEDIUM,
                        children: p ? (0, r.jsx)(c.Spinner, {
                            className: we().spinner,
                            type: c.Spinner.Type.SPINNING_CIRCLE
                        }) : (0, r.jsx)(Ee, {
                            user: h,
                            categories: f,
                            analyticsLocations: g,
                            initialSelectedDecoration: a,
                            onClose: o
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
                s = n(525628),
                c = n(767539);

            function u(e, t) {
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
                            s = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            i = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (s) throw i
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

            function d() {
                var e, t = (0, s.OE)().canUseCollectiblesIAP,
                    n = function() {
                        var e, t = (0, s.OE)().canUseCollectiblesIAP,
                            n = l((0, i.Wu)([a.Z], (function() {
                                return [a.Z.isFetching, a.Z.error, null !== (e = a.Z.lastFetched) && void 0 !== e ? e : 0, a.Z.categories]
                            })), 4),
                            c = n[0],
                            u = n[1],
                            d = n[2],
                            f = n[3];
                        (0, r.useEffect)((function() {
                            !t || c || Date.now() - d < 6e5 || (0, o.F$)()
                        }), [t, c, d]);
                        return {
                            canUseCollectiblesIAP: t,
                            isFetching: c,
                            categories: f,
                            error: u
                        }
                    }(),
                    u = n.isFetching,
                    d = n.categories,
                    f = n.error,
                    p = function() {
                        var e = (0, s.OE)().canUseCollectiblesIAP,
                            t = l((0, i.Wu)([c.Z], (function() {
                                return [c.Z.isFetching, c.Z.isClaiming, c.Z.fetchError, c.Z.claimError, c.Z.purchases]
                            })), 5),
                            n = t[0],
                            a = t[1],
                            u = t[2],
                            d = t[3],
                            f = t[4];
                        (0, r.useEffect)((function() {
                            e && (0, o.qg)()
                        }), [e]);
                        return {
                            canUseCollectiblesIAP: e,
                            isClaiming: a,
                            fetchError: u,
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
                    isFetching: u || m,
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
                yV: () => s,
                IC: () => c,
                Ch: () => u
            });
            var r = n(795308),
                i = n(265022),
                o = n(721741),
                a = n(362660),
                s = 1060,
                c = function(e) {
                    return 3.8 * e
                },
                u = function(e) {
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
                Z: () => s
            });
            var r = n(389349),
                i = n(795308),
                o = n(4958),
                a = o.CA.filter((function(e, t) {
                    return 1 !== t && 7 !== t
                }));
            const s = function(e) {
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
                            backgroundColors: ["#146144", "#021A0E"],
                                buttonColors: ["#028737", "#00694A"], confettiSprites: [n(406112), n(200309)], confettiColors: ["#EFA7F7", "#B646C1", "#56B3B3", "#1A8199", "#7160AF", "#AEC7FF"]
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
                CA: () => s,
                Ko: () => c,
                We: () => u,
                rq: () => l
            });
            var r = n(652411),
                i = n(5084),
                o = n.n(i)(),
                a = ["#FF73FA", "#FFC0FF", "#FFD836", "#FF9A15", "#A5F7DE", "#51BC9D", "#AEC7FF", "#3E70DD"],
                s = [n(173654), o, n(950175), n(248978), n(622507), n(131687), n(12668), {
                    src: n(740097),
                    colorize: !1
                }],
                c = 28,
                u = {
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

            function c(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    c = e.height,
                    u = void 0 === c ? 24 : c,
                    l = e.color,
                    d = void 0 === l ? "currentColor" : l,
                    f = e.className,
                    p = e.foreground,
                    h = s(e, ["width", "height", "color", "className", "foreground"]);
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
                    height: u,
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

            function c(e) {
                var t = e.width,
                    n = void 0 === t ? 23 : t,
                    c = e.height,
                    u = void 0 === c ? 18 : c,
                    l = e.color,
                    d = void 0 === l ? "currentColor" : l,
                    f = s(e, ["width", "height", "color"]);
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
                    height: u,
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