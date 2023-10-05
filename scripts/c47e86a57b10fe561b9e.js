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

            function u(e, t) {
                var r = e.x,
                    n = e.y;
                return r > t.x && r < t.x + t.width && n > t.y && n < t.y + t.height
            }

            function c(e, t) {
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
                            x: r + c(this.dragCoefficient.x, this.velocity.x),
                            y: n + c(this.dragCoefficient.y, this.velocity.y)
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
                        var u = this.position.previewUpdate(r);
                        return u.x += n.x * r, u.y += n.y * r, u
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
                        var u = e.call(this, t) || this;
                        u.min = r, u.max = n, u.duration = i;
                        var c = u.value / (u.max - u.min) * u.duration,
                            s = isNaN(c) ? 0 : c;
                        return u.timePassed = s < 0 ? u.duration - s : s, u.directionMultiplier = o, u.easingFunction = a, u
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
                            return new w(x(e.minValue, e.maxValue), x(e.minStart, e.maxStart), x(e.minFinal, e.maxFinal), x(e.minDuration, e.maxDuration), O(e.minDirection, e.maxDirection), C(e.easingFunctions)[0])
                    }
                }(h(h({}, e), {
                    valueType: "number"
                }))
            }

            function j(e) {
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
                            var u = E(e.start),
                                c = E(e.final),
                                s = E(e.duration),
                                l = E(e.direction);
                            return new y(new w(t.x, u.x, c.x, s.x, l.x, e.easingFunction), new w(t.y, u.y, c.y, s.x, l.y, e.easingFunction));
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
                            return new y(new w(x(r.x, n.x), x(f.x, d.x), x(p.x, h.x), x(v.x, m.x), O(A.x, S.x), C(e.easingFunctions)[0]), new w(x(r.y, n.y), x(f.y, d.y), x(p.y, h.y), x(v.y, m.y), O(A.y, S.y), C(e.easingFunctions)[0]))
                    }
                }(h(h({}, e), {
                    valueType: "Vector2"
                }))
            }

            function P(e) {
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
                            var u = A(e.start),
                                c = A(e.final),
                                s = A(e.duration),
                                l = A(e.direction);
                            return new m(new w(t.x, u.x, c.x, s.x, l.x, e.easingFunction), new w(t.y, u.y, c.y, s.z, l.y, e.easingFunction), new w(t.z, u.z, c.z, s.z, l.z, e.easingFunction));
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
                            return new m(new w(x(r.x, n.x), x(f.x, d.x), x(p.x, h.x), x(v.x, y.x), O(E.x, S.x), C(e.easingFunctions)[0]), new w(x(r.y, n.y), x(f.y, d.y), x(p.y, h.y), x(v.y, y.y), O(E.y, S.y), C(e.easingFunctions)[0]), new w(x(r.z, n.z), x(f.z, d.z), x(p.z, h.z), x(v.z, y.z), O(E.z, S.z), C(e.easingFunctions)[0]))
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
                    a = j(o.size),
                    u = function(e, t) {
                        if (null != e) {
                            var r = t.sprites.findIndex((function(t) {
                                return r = t, "string" == typeof(n = e) ? r.src === n && r.colorize : r.src === n.src && r.colorize === n.colorize;
                                var r, n
                            }));
                            if (-1 !== r) return [e, r]
                        }
                        return C(t.sprites)
                    }(n, r),
                    c = u[0],
                    f = u[1],
                    d = function(e, t, r) {
                        if (! function(e) {
                                return "string" == typeof e || e.colorize
                            }(e)) return 0;
                        var n = null != t ? r.colors.findIndex((function(e) {
                            return e === t
                        })) : -1;
                        return -1 !== n ? n : Math.floor(x(0, r.colors.length - 1))
                    }(null != n ? n : c, i, r);
                return new s({
                    id: e,
                    position: j(o.position),
                    velocity: j(o.velocity),
                    rotation: P(o.rotation),
                    dragCoefficient: j(o.dragCoefficient),
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
                    c = e.onClick,
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
                var C = n.useCallback((function(e, t) {
                        m.current.set(e.id, {
                            confetti: e,
                            spriteCanvas: t
                        }), null == g.current && x()
                    }), [x]),
                    O = n.useCallback((function(e, t, r, n, o) {
                        var a, u = _(null !== (a = e.id) && void 0 !== a ? a : (0, i.v4)(), e, r, n, o);
                        return C(u, t), u
                    }), [C]),
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
                        createConfetti: O,
                        addConfetti: C,
                        deleteConfetti: E,
                        clearConfetti: A,
                        getCanvas: S
                    }
                }), [O, C, E, A, S]);
                var j = n.useCallback((function(e, t) {
                        var r, n, i = t.clickHandler,
                            o = t.mouseHandler;
                        if (null != i || null != o) {
                            var c = null === (r = y.current) || void 0 === r ? void 0 : r.getBoundingClientRect();
                            if (null != c) {
                                var s = function(e, t) {
                                    if (null == t) throw new Error("element should not be null");
                                    var r = t.getBoundingClientRect();
                                    return {
                                        x: e.clientX - r.left,
                                        y: e.clientY - r.top
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
                                                for (var r = 0, n = Array.from(e.values()); r < n.length; r++) {
                                                    var i = n[r];
                                                    if (null != i && t(i)) return i
                                                }
                                                return null
                                            }(m.current, (function(e) {
                                                var t = e.confetti,
                                                    r = t.previewPositionUpdate(a, l);
                                                return u(s, {
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
                    P = n.useCallback((function(e) {
                        return j(e, {
                            clickHandler: c
                        })
                    }), [j, c]),
                    D = n.useCallback((function(e) {
                        return j(e, {
                            clickHandler: s
                        })
                    }), [j, s]),
                    R = n.useCallback((function(e) {
                        return j(e, {
                            mouseHandler: l
                        })
                    }), [j, l]),
                    I = n.useCallback((function(e) {
                        return j(e, {
                            mouseHandler: f
                        })
                    }), [j, f]);
                return n.useEffect((function() {
                    var e = function(e, t, r) {
                        null != r && window.addEventListener(e, t)
                    };
                    return e("click", P, c), e("mousedown", D, s), e("mousemove", R, l), e("mouseup", I, f),
                        function() {
                            window.removeEventListener("click", P), window.removeEventListener("mousedown", D), window.removeEventListener("mousemove", R), window.removeEventListener("mouseup", R)
                        }
                }), [P, D, R, I, c, s, l, f]), n.useEffect((function() {
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
                    u = e.visible,
                    c = void 0 !== u && u,
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
                                        for (var u = t.getImageData(o, a, f, d), c = function(e) {
                                                "#" === e[0] && (e = e.slice(1));
                                                var t = parseInt(e, 16);
                                                return {
                                                    r: t >> 16 & 255,
                                                    g: t >> 8 & 255,
                                                    b: 255 & t
                                                }
                                            }(n), s = 0; s < u.data.length; s += 4) u.data[s] = c.r, u.data[s + 1] = c.g, u.data[s + 2] = c.b;
                                        t.putImageData(u, o, a)
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
                                        c(n.next(e))
                                    } catch (e) {
                                        o(e)
                                    }
                                }

                                function u(e) {
                                    try {
                                        c(n.throw(e))
                                    } catch (e) {
                                        o(e)
                                    }
                                }

                                function c(e) {
                                    var t;
                                    e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                                        e(t)
                                    }))).then(a, u)
                                }
                                c((n = n.apply(e, t || [])).next())
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
                                    next: u(0),
                                    throw: u(1),
                                    return: u(2)
                                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                                    return this
                                }), o;

                                function u(u) {
                                    return function(c) {
                                        return function(u) {
                                            if (r) throw new TypeError("Generator is already executing.");
                                            for (; o && (o = 0, u[0] && (a = 0)), a;) try {
                                                if (r = 1, n && (i = 2 & u[0] ? n.return : u[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, u[1])).done) return i;
                                                switch (n = 0, i && (u = [2 & u[0], i.value]), u[0]) {
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
                                                        a.label++, n = u[1], u = [0];
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
                                                u = [6, e], n = 0
                                            } finally {
                                                r = i = 0
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
                    className: a()(o, (r = {}, r["SpriteCanvas-module_spriteCanvasHidden__ndzQV"] = !c, r))
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
                var u = n.useCallback((function(r, n) {
                        var i = void 0 === n ? {} : n,
                            o = i.sprite,
                            a = i.color,
                            u = null == t ? void 0 : t.getCreateData(),
                            c = null == t ? void 0 : t.getCanvas();
                        if (null != c && null != u && 0 !== u.sprites.length) return null == e ? void 0 : e.createConfetti(r, c, u, o, a)
                    }), [e, t]),
                    c = n.useCallback((function(e, t, r) {
                        for (var n = [], i = 0; i < t; i++) {
                            var o = u(e, r);
                            o && n.push(o)
                        }
                        return n
                    }), [u]),
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
                u = r(153686),
                c = r(19585),
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
                            u = !1;
                        try {
                            for (r = r.call(e); !(a = (n = r.next()).done); a = !0) {
                                o.push(n.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            i = e
                        } finally {
                            try {
                                a || null == r.return || r.return()
                            } finally {
                                if (u) throw i
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
                C = r(652591),
                O = r(694329),
                E = r(938737),
                A = r(294184),
                S = r.n(A),
                j = r(498964),
                P = r(940594),
                _ = r(584228),
                D = r(384411),
                R = r(491260),
                I = r(169844),
                M = r(310126),
                F = r(473708);

            function T(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }
            var N = M.ZP.getEnableHardwareAcceleration() ? a.AnimatedAvatar : a.Avatar;
            const Z = function(e) {
                var t = e.user,
                    r = e.avatarDecorationOverride,
                    i = e.status,
                    o = e.avatarSize,
                    u = void 0 === o ? a.AvatarSizes.SIZE_120 : o,
                    c = e["aria-hidden"],
                    s = void 0 !== c && c,
                    l = (0, I.Z)({
                        user: t,
                        size: u,
                        showPending: !0,
                        avatarDecorationOverride: r
                    }),
                    f = l.avatarDecorationSrc,
                    d = l.avatarSrc,
                    p = l.eventHandlers;
                return (0, n.jsx)(N, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            T(e, t, r[t])
                        }))
                    }
                    return e
                }({
                    avatarDecoration: f,
                    src: d,
                    size: u,
                    status: i,
                    "aria-label": s ? void 0 : F.Z.Messages.USER_SETTINGS_AVATAR,
                    "aria-hidden": s
                }, p))
            };
            var k = r(504477),
                z = r.n(k),
                H = [{
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
                        className: z().purchaseInfo,
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
                        i = (0, _.Z)(r).backgroundColors;
                    return (0, n.jsx)("div", {
                        className: z().shopPreviewBanner,
                        style: null != r ? {
                            backgroundImage: (0, P.W4)(r.banner, {
                                size: P.yV
                            })
                        } : null != i ? {
                            background: (0, P.nH)(i)
                        } : void 0,
                        children: t
                    })
                };
            const L = function(e) {
                var t = e.user,
                    r = e.avatarDecorationOverride,
                    i = e.className,
                    u = (0, o.e7)([R.Z], (function() {
                        return R.Z.getStatus(t.id)
                    })),
                    c = y(null == r ? void 0 : r.skuId),
                    s = c.category,
                    f = c.product,
                    d = c.purchase,
                    p = O.ZP.canUseCollectibles(t),
                    h = (0, l.qS)(d),
                    v = (0, l.mv)(s),
                    m = !p && h;
                return null == f || null != d && !m ? (0, n.jsxs)("div", {
                    className: S()(z().modalPreview, i),
                    children: [(0, n.jsxs)("div", {
                        className: z().previewSections,
                        children: [(0, n.jsx)("div", {
                            className: z().decorationPreview,
                            children: (0, n.jsx)(Z, {
                                user: t,
                                avatarDecorationOverride: r
                            })
                        }), (0, n.jsx)("div", {
                            className: z().smallDecorationPreviewsContainer,
                            children: H.map((function(e) {
                                var i = e.avatarSize,
                                    o = e.showStatus;
                                return (0, n.jsx)("div", {
                                    className: z().smallDecorationPreview,
                                    children: (0, n.jsx)(Z, {
                                        user: t,
                                        avatarSize: i,
                                        avatarDecorationOverride: r,
                                        status: o ? u : void 0,
                                        "aria-hidden": !0
                                    })
                                }, "".concat(i).concat(o))
                            }))
                        })]
                    }), null != d && (0, n.jsx)(V, {
                        purchase: d
                    })]
                }) : (0, n.jsxs)("div", {
                    className: S()(z().modalPreview, z().shopPreviewContainer, i),
                    children: [(0, n.jsx)(U, {
                        category: s,
                        children: (0, n.jsx)(Z, {
                            user: t,
                            avatarDecorationOverride: r
                        })
                    }), (0, n.jsxs)("div", {
                        className: z().shopPreviewTextContainer,
                        children: [(0, n.jsx)(a.Text, {
                            variant: "text-sm/semibold",
                            children: f.name
                        }), (0, n.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            children: m ? F.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_CHURNED : (0, j.EQ)([v, p]).with([!0, !0], (function() {
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
            var B, W = r(517586),
                G = r(662478),
                q = r(243764),
                Y = r(406493),
                X = r(778613),
                K = r(97990),
                $ = r(616276),
                Q = r(531441),
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
                            u = !1;
                        try {
                            for (r = r.call(e); !(a = (n = r.next()).done); a = !0) {
                                o.push(n.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            i = e
                        } finally {
                            try {
                                a || null == r.return || r.return()
                            } finally {
                                if (u) throw i
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
                    t = O.ZP.canUseCollectibles(e),
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
                            u = (0, l.qS)(i);
                        if (u && 0 === e.premium_purchase.length) {
                            e.premium_purchase = e.premium_preview;
                            e.premium_preview = []
                        }
                        if (u) {
                            e.premium_purchase.push(n);
                            return e
                        }
                        if (null != i) {
                            e.purchase.push(n);
                            return e
                        }
                        var c = o.get(a[n.skuId]);
                        if (!t && (0, l.mv)(c)) {
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
            var ue = r(158504),
                ce = r.n(ue);

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
                        u = void 0 !== o && o,
                        c = de(e, ["children", "className", "onSelect", "isSelected"]);
                    return (0, n.jsx)(a.Clickable, fe(le({
                        className: S()(ce().decorationGridItem, u ? ce().selected : void 0, r)
                    }, c), {
                        onClick: i,
                        children: t
                    }))
                },
                ve = function(e) {
                    var t = e.user,
                        r = e.avatarDecoration,
                        o = e.innerRef,
                        a = e.section,
                        u = de(e, ["user", "avatarDecoration", "innerRef", "section"]),
                        c = (0, f.ZP)([d.Z], (function() {
                            var e = d.Z.getCategoryForProduct(r.skuId);
                            return (0, l.mv)(e)
                        })),
                        s = O.ZP.canUseCollectibles(t),
                        p = a === B.PREMIUM_PURCHASE && !s,
                        h = i.useRef(null),
                        v = (0, G.Z)(null != o ? o : h),
                        y = (0, J.Z)({
                            user: t,
                            avatarDecorationOverride: r,
                            size: 80,
                            animateOnHover: !v
                        }).avatarDecorationSrc;
                    return (0, n.jsxs)(he, fe(le({
                        className: p ? ce().decorationGridItemChurned : void 0,
                        innerRef: null != o ? o : h
                    }, u), {
                        children: [(0, n.jsx)("img", {
                            className: ce().presetDecorationImg,
                            src: y,
                            alt: r.label
                        }), (a === B.PREVIEW || a === B.PREMIUM_PURCHASE && !s) && (0, n.jsx)(Q.G2, {
                            icon: c ? Y.Z : K.Z,
                            color: W.Z.BACKGROUND_ACCENT,
                            className: ce().itemBadge
                        })]
                    }))
                };
            const ye = function(e) {
                var t = e.user,
                    r = e.pendingAvatarDecoration,
                    i = e.selectedAvatarDecorationRef,
                    o = e.onSelect,
                    u = e.onOpenShop,
                    c = ae();
                return (0, n.jsx)(a.MasonryList, {
                    fade: !0,
                    className: ce().list,
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
                        return (0, j.EQ)(h[s]).with(ie, (function() {
                            return (0, n.jsxs)(he, {
                                style: le({}, l),
                                isSelected: null === r,
                                onSelect: function() {
                                    return o(null)
                                },
                                children: [(0, n.jsx)(X.Z, {
                                    className: ce().notAllowedIcon
                                }), (0, n.jsx)(a.Text, {
                                    variant: "text-xs/normal",
                                    color: "header-primary",
                                    children: F.Z.Messages.NONE
                                })]
                            }, f)
                        })).with(oe, (function() {
                            return (0, n.jsxs)(he, {
                                style: l,
                                onSelect: u,
                                children: [(0, n.jsx)(q.Z, {
                                    className: ce().shopIcon
                                }), (0, n.jsx)($.Z, {
                                    foreground: ce().shopSparkleBig
                                }), (0, n.jsx)($.Z, {
                                    foreground: ce().shopSparkleSmall
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
                        var t = c[e],
                            r = t.section,
                            i = t.header;
                        return (0, n.jsx)("div", {
                            className: ce().headings,
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
                        return c[e].height
                    },
                    getItemKey: function(e, t) {
                        return c[e].items[t].id
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

            function Ce(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, i, o = [],
                            a = !0,
                            u = !1;
                        try {
                            for (r = r.call(e); !(a = (n = r.next()).done); a = !0) {
                                o.push(n.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            i = e
                        } finally {
                            try {
                                a || null == r.return || r.return()
                            } finally {
                                if (u) throw i
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

            function Oe(e) {
                var t = e.user,
                    r = e.categories,
                    o = e.analyticsLocations,
                    c = e.onClose,
                    f = e.initialSelectedDecoration,
                    d = e.isTryItOutFlow,
                    p = (0, w.Z)({
                        analyticsLocations: o,
                        isTryItOut: d
                    }),
                    h = p.pendingAvatarDecoration,
                    v = p.setPendingAvatarDecoration,
                    m = Ce(i.useState((function() {
                        return null != f ? f : void 0 !== h ? h : null == (null == t ? void 0 : t.avatarDecoration) || 0 === r.size ? null : null !== (e = (0, l.IM)(r).find((function(e) {
                            return (0, E.sr)(e, t.avatarDecoration)
                        }))) && void 0 !== e ? e : null;
                        var e
                    })), 2),
                    x = m[0],
                    C = m[1],
                    A = y(null == x ? void 0 : x.skuId),
                    S = A.category,
                    j = A.purchase,
                    P = O.ZP.canUseCollectibles(t),
                    _ = i.useRef(null),
                    D = (0, g.Z)(o),
                    R = (0, E.sr)(x, void 0 === h ? null == t ? void 0 : t.avatarDecoration : h),
                    I = function() {
                        v(x);
                        c()
                    },
                    M = function() {
                        c();
                        (0, s.mK)({
                            analyticsLocations: o,
                            analyticsSource: u.Z.EDIT_AVATAR_DECORATION_MODAL
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
                                children: !P && (0, n.jsx)(a.Heading, {
                                    variant: "text-sm/normal",
                                    children: F.Z.Messages.CHANGE_DECORATION_MODAL_SHOP_PREVIEW_HEADER_STARTER_DESC
                                })
                            })
                        }), (0, n.jsx)(a.ModalCloseButton, {
                            className: we().modalCloseButton,
                            onClick: c
                        })]
                    }), (0, n.jsxs)(a.ModalContent, {
                        className: we().modalContent,
                        scrollbarType: "none",
                        children: [(0, n.jsx)(ye, {
                            user: t,
                            pendingAvatarDecoration: x,
                            selectedAvatarDecorationRef: _,
                            onSelect: function(e) {
                                C(e);
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
                        children: [null != j && (!(0, l.qS)(j) || P) || null === x ? (0, n.jsx)(a.Button, {
                            onClick: I,
                            disabled: R,
                            children: F.Z.Messages.AVATAR_DECORATION_MODAL_APPLY
                        }) : P || !(0, l.mv)(S) ? (0, n.jsx)(a.Button, {
                            className: we().modalFooterShopButton,
                            onClick: M,
                            children: F.Z.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
                        }) : (0, n.jsx)(b.Z, {
                            subscriptionTier: ge.Si.TIER_2,
                            buttonText: O.ZP.isPremium(t) ? F.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : F.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
                        }), (0, n.jsx)(a.Button, {
                            look: a.Button.Looks.LINK,
                            color: a.Button.Colors.PRIMARY,
                            onClick: c,
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
                    p = (0, c.Z)(r, u.Z.EDIT_AVATAR_DECORATION_MODAL),
                    h = p.AnalyticsLocationProvider,
                    v = p.analyticsLocations,
                    y = (0, m.ZP)(),
                    g = y.categories,
                    b = y.purchases,
                    w = y.isFetchingCategories,
                    O = y.isFetchingPurchases,
                    E = w || O && 0 === b.size;
                i.useEffect((function() {
                    C.default.track(me.rMx.OPEN_MODAL, {
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
                        }) : (0, n.jsx)(Oe, {
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
                ZP: () => f
            });
            var n = r(667294),
                i = r(318715),
                o = r(514722),
                a = r(339938),
                u = r(764797),
                c = r(767539);

            function s(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function l(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, i, o = [],
                            a = !0,
                            u = !1;
                        try {
                            for (r = r.call(e); !(a = (n = r.next()).done); a = !0) {
                                o.push(n.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            i = e
                        } finally {
                            try {
                                a || null == r.return || r.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return s(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return s(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function f() {
                var e = "useFetchCollectiblesCategoriesAndPurchases";
                (0, o.j)({
                    location: e + " auto on",
                    autoTrackExposure: !0
                });
                (0, o.j)({
                    location: e + " auto off",
                    autoTrackExposure: !1
                });
                var t, r = function() {
                        var e, t = "useMaybeFetchCollectiblesCategories";
                        (0, o.j)({
                            location: t + " auto on",
                            autoTrackExposure: !0
                        });
                        (0, o.j)({
                            location: t + " auto off",
                            autoTrackExposure: !1
                        });
                        var r = l((0, i.Wu)([u.Z], (function() {
                                return [u.Z.isFetching, u.Z.error, null !== (e = u.Z.lastFetched) && void 0 !== e ? e : 0, u.Z.categories]
                            })), 4),
                            c = r[0],
                            s = r[1],
                            f = r[2],
                            d = r[3];
                        (0, n.useEffect)((function() {
                            c || Boolean(s) || Date.now() - f < 6e5 || (0, a.F$)()
                        }), [c, f, s]);
                        return {
                            isFetching: c,
                            categories: d,
                            error: s
                        }
                    }(),
                    s = r.isFetching,
                    f = r.categories,
                    d = r.error,
                    p = function() {
                        (0, o.j)({
                            location: "useFetchPurchases auto on",
                            autoTrackExposure: !0
                        });
                        (0, o.j)({
                            location: "useFetchPurchases auto off",
                            autoTrackExposure: !1
                        });
                        var e = l((0, i.Wu)([c.Z], (function() {
                                return [c.Z.isFetching, c.Z.isClaiming, c.Z.fetchError, c.Z.claimError, c.Z.purchases]
                            })), 5),
                            t = e[0],
                            r = e[1],
                            u = e[2],
                            s = e[3],
                            f = e[4];
                        (0, n.useEffect)((function() {
                            (0, a.qg)()
                        }), []);
                        return {
                            isClaiming: r,
                            fetchError: u,
                            claimError: s,
                            isFetching: t,
                            purchases: f
                        }
                    }(),
                    h = p.isClaiming,
                    v = p.fetchError,
                    y = p.claimError,
                    m = p.isFetching;
                return {
                    isFetching: s || m,
                    isFetchingCategories: s,
                    isFetchingPurchases: m,
                    isClaiming: h,
                    categories: f,
                    purchases: p.purchases,
                    error: null !== (t = null != d ? d : v) && void 0 !== t ? t : y
                }
            }
        },
        940594: (e, t, r) => {
            "use strict";
            r.d(t, {
                yV: () => l,
                IC: () => f,
                nH: () => d,
                W4: () => p,
                tM: () => h,
                FB: () => v
            });
            var n = r(795308),
                i = r(265022),
                o = r(721741),
                a = r(362660),
                u = r(349771);

            function c(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function s(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, i, o = [],
                            a = !0,
                            u = !1;
                        try {
                            for (r = r.call(e); !(a = (n = r.next()).done); a = !0) {
                                o.push(n.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            i = e
                        } finally {
                            try {
                                a || null == r.return || r.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return c(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return c(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var l = 1060,
                f = function(e) {
                    return 3.8 * e
                },
                d = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 180,
                        r = s(e, 2),
                        n = r[0],
                        i = r[1];
                    return "linear-gradient(".concat(t, "deg, ").concat(n, ", ").concat(i, ")")
                },
                p = function(e, t) {
                    return "url(".concat((0, u.uV)(e, t), ")")
                },
                h = function(e) {
                    var t = s(e, 2),
                        r = t[0],
                        n = t[1],
                        i = (0, a.BM)(r, n, .5);
                    return (0, a.Cj)(i, .4)
                },
                v = function(e) {
                    var t = s(e, 2),
                        r = t[0],
                        u = t[1],
                        c = s((0, i.J2)((0, a.dX)(r), (0, a.dX)(u), .5), 3),
                        l = c[0],
                        f = c[1],
                        d = c[2];
                    return new o.Z(l, f, d, 1).toHSL().lightness > .66 ? n.Z.unsafe_rawColors.BLACK_500.css : n.Z.unsafe_rawColors.WHITE_500.css
                }
        },
        584228: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => s
            });
            var n, i = r(389349),
                o = r(795308),
                a = r(4958);

            function u(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }
            var c = (u(n = {}, i.T.FANTASY, {
                backgroundColors: ["#146144", "#021A0E"],
                buttonColors: ["#028737", "#00694A"],
                confettiSprites: [r(406112), r(200309)],
                confettiColors: ["#EFA7F7", "#B646C1", "#56B3B3", "#1A8199", "#7160AF", "#AEC7FF"]
            }), u(n, i.T.ANIME, {
                backgroundColors: ["#4B79B0", "#0F0E3A"],
                buttonColors: ["#8A45C1", "#136897"],
                confettiSprites: [r(954512), r(398015)],
                confettiColors: ["#2C9BD9", "#E46A80", "#FFE500", "#BBA8D5", "#3EDDD3", "#E2B761"]
            }), u(n, i.T.BREAKFAST, {
                backgroundColors: ["#E8B26B", "#7A3A00"],
                buttonColors: ["#FFC355", "#FF9537"],
                confettiSprites: [r(297206), r(578862)],
                confettiColors: ["#DD9C98", "#FFC037", "#FF6B00", "#FDE081", "#DD923E", "#FFEECC"]
            }), u(n, i.T.DISXCORE, {
                backgroundColors: ["#732565", "#111D40"],
                buttonColors: [o.Z.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.css, o.Z.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.css],
                confettiSprites: a.CA.filter((function(e, t) {
                    return 1 !== t && 7 !== t
                })),
                confettiColors: ["#F53273", "#9595FF", "#A7FA4E", "#331EAF"]
            }), u(n, i.T.HALLOWEEN, {
                backgroundColors: ["#5280DC", "#060F25"],
                buttonColors: ["#496BDB", "#3E41B5"],
                confettiSprites: [r(747132), r(593098)],
                confettiColors: ["#EE5619", "#FDBE44", "#42D612", "#DC0DDE", "#8A0AE5"]
            }), u(n, i.T.FALL, {
                backgroundColors: ["#FFCE85", "#923600"],
                buttonColors: ["#F5A142", "#E4760E"],
                confettiSprites: [r(999021), r(715420)],
                confettiColors: ["#FF7138", "#92360C", "#F6A334", "#FFC586", "#FF8A00"]
            }), n);
            const s = function(e) {
                if (null == e) return {};
                var t = c[e.skuId];
                return null == t ? {} : t
            }
        },
        4958: (e, t, r) => {
            "use strict";
            r.d(t, {
                vv: () => o,
                Br: () => a,
                CA: () => u,
                Ko: () => c,
                We: () => s,
                rq: () => l
            });
            var n = r(652411),
                i = r(5084),
                o = r.n(i)(),
                a = ["#FF73FA", "#FFC0FF", "#FFD836", "#FF9A15", "#A5F7DE", "#51BC9D", "#AEC7FF", "#3E70DD"],
                u = [r(173654), o, r(950175), r(248978), r(622507), r(131687), r(12668), {
                    src: r(740097),
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
                l = new n.qA
        },
        243764: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => p
            });
            var n = r(785893),
                i = (r(667294), r(168075)),
                o = r(795308),
                a = r(633878);

            function u(e, t, r) {
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
                    u = e.color,
                    c = void 0 === u ? "currentColor" : u,
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
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M1.63373 2.18776C1.99762 0.893925 3.17765 0 4.52168 0H5.99904C6.55132 0 6.99904 0.447715 6.99904 1V4.98282C6.99904 4.99819 6.99892 5.01354 6.9987 5.02886C6.99896 5.03058 6.9991 5.03234 6.9991 5.03414C6.9991 5.50023 6.89159 5.94121 6.70001 6.33363C6.21831 7.32031 5.20515 8 4.03324 8C4.02466 8 4.01609 7.99996 4.00753 7.99989C3.99898 7.99996 3.99043 8 3.98186 8C1.9825 8 0.536052 6.09062 1.07737 4.16593L1.63373 2.18776ZM8.99904 0C8.44676 0 7.99904 0.447715 7.99904 1V5C7.99904 6.5533 9.17954 7.83088 10.6923 7.98451C10.7932 7.99475 10.8955 8 10.999 8C10.9991 8 10.9991 8 10.9991 8C12.1789 8 13.1996 7.31899 13.6896 6.32862C13.883 5.93771 13.9937 5.49859 13.9989 5.03414C13.9989 5.0335 13.9989 5.03288 13.9989 5.03225C13.999 5.02151 13.999 5.01076 13.999 5V1C13.999 0.447715 13.5513 0 12.999 0H8.99904ZM15.999 0C15.4468 0 14.999 0.447715 14.999 1V4.98282C14.999 4.99845 14.9992 5.01406 14.9994 5.02963C14.9992 5.03111 14.9991 5.03261 14.9991 5.03414C14.9991 5.50023 15.1066 5.94121 15.2982 6.33363C15.7799 7.32031 16.7931 8 17.965 8C17.9735 8 17.9821 7.99996 17.9906 7.99989C17.9991 7.99996 18.0077 8 18.0162 8C20.0156 8 21.462 6.09062 20.9207 4.16593L20.3643 2.18776C20.0005 0.893924 18.8204 0 17.4764 0H15.999ZM19.9991 9.42264V17C19.9991 18.6569 18.6559 20 16.9991 20H14.2491C14.111 20 13.9991 19.8881 13.9991 19.75V14C13.9991 12.8954 13.1037 12 11.9991 12H9.99909C8.89452 12 7.99909 12.8954 7.99909 14V19.75C7.99909 19.8881 7.88716 20 7.74909 20H4.99909C3.34223 20 1.99909 18.6569 1.99909 17V9.42263C1.99909 9.2357 2.19766 9.11353 2.37121 9.18297C2.88063 9.38678 3.44019 9.5 4.03324 9.5C5.32615 9.5 6.49074 8.95057 7.30626 8.07246C7.41432 7.95611 7.60217 7.95576 7.71059 8.07178C8.53188 8.95064 9.70133 9.5 10.9991 9.5C12.2969 9.5 13.4663 8.95064 14.2876 8.07178C14.396 7.95576 14.5839 7.9561 14.6919 8.07246C15.5075 8.95057 16.672 9.5 17.965 9.5C18.558 9.5 19.1176 9.38678 19.627 9.18298C19.8005 9.11354 19.9991 9.23571 19.9991 9.42264Z",
                        fill: c
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
                return (0, n.jsx)("svg", c(function(e) {
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
        },
        778613: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => c
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

            function c(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    c = e.height,
                    s = void 0 === c ? 24 : c,
                    l = e.color,
                    f = void 0 === l ? "currentColor" : l,
                    d = e.className,
                    p = e.foreground,
                    h = u(e, ["width", "height", "color", "className", "foreground"]);
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
        }
    }
]);