"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [33928, 38479, 17183, 72935], {
        652411: (e, t, r) => {
            r.d(t, {
                O_: () => M,
                qA: () => f,
                Ji: () => D,
                uR: () => L
            });
            var n = r(667294),
                o = r(468811),
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

            function d(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function r() {
                    this.constructor = e
                }
                p(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }
            var h = function() {
                return h = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }, h.apply(this, arguments)
            };
            var y = function(e) {
                    this.value = e
                },
                b = function() {
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
                O = function(e) {
                    function t(t, r, n) {
                        var o = e.call(this, t, r) || this;
                        return o._z = n, o
                    }
                    return d(t, e), t.prototype.update = function(t) {
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
                }(b),
                v = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return d(t, e), t.prototype.update = function() {}, t.prototype.previewUpdate = function() {
                        return this.value
                    }, t
                }(y),
                g = function(e) {
                    function t(t, r) {
                        var n = e.call(this, t) || this;
                        return n.addValue = r, n
                    }
                    return d(t, e), t.prototype.update = function(e) {
                        this.value = this.previewUpdate(e)
                    }, t.prototype.previewUpdate = function(e) {
                        return this.value + this.addValue * e
                    }, t
                }(y),
                w = function(e) {
                    function t(t, r, n, o, i, c) {
                        var l = e.call(this, t) || this;
                        l.min = r, l.max = n, l.duration = o;
                        var a = l.value / (l.max - l.min) * l.duration,
                            u = isNaN(a) ? 0 : a;
                        return l.timePassed = u < 0 ? l.duration - u : u, l.directionMultiplier = i, l.easingFunction = c, l
                    }
                    return d(t, e), t.prototype.update = function(e) {
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
                }(y);

            function E(e, t) {
                return e === t ? e : Math.random() * (t - e + 1) + e
            }

            function m(e) {
                var t = Math.floor(E(0, e.length - 1));
                return [e[t], t]
            }

            function P(e, t) {
                return m([e, t])[0]
            }

            function _(e) {
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

            function C(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            return new v(e.value);
                        case "static-random":
                            return new v(E(e.minValue, e.maxValue));
                        case "linear":
                            return new g(e.value, e.addValue);
                        case "linear-random":
                            return new g(E(e.minValue, e.maxValue), E(e.minAddValue, e.maxAddValue));
                        case "oscillating":
                            return new w(e.value, e.start, e.final, e.duration, e.direction, e.easingFunction);
                        case "oscillating-random":
                            return new w(E(e.minValue, e.maxValue), E(e.minStart, e.maxStart), E(e.minFinal, e.maxFinal), E(e.minDuration, e.maxDuration), P(e.minDirection, e.maxDirection), m(e.easingFunctions)[0])
                    }
                }(h(h({}, e), {
                    valueType: "number"
                }))
            }

            function R(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            var t = _(e.value);
                            return new b(new v(t.x), new v(t.y));
                        case "static-random":
                            var r = _(e.minValue),
                                n = _(e.maxValue);
                            return new b(new v(E(r.x, n.x)), new v(E(r.y, n.y)));
                        case "linear":
                            t = _(e.value);
                            var o = _(e.addValue);
                            return new b(new g(t.x, o.x), new g(t.y, o.y));
                        case "linear-random":
                            r = _(e.minValue), n = _(e.maxValue);
                            var i = _(e.minAddValue),
                                c = _(e.maxAddValue);
                            return new b(new g(E(r.x, n.x), E(i.x, c.x)), new g(E(r.y, n.y), E(i.x, c.x)));
                        case "oscillating":
                            t = _(e.value);
                            var l = _(e.start),
                                a = _(e.final),
                                u = _(e.duration),
                                s = _(e.direction);
                            return new b(new w(t.x, l.x, a.x, u.x, s.x, e.easingFunction), new w(t.y, l.y, a.y, u.x, s.y, e.easingFunction));
                        case "oscillating-random":
                            r = _(e.minValue), n = _(e.maxValue);
                            var f = _(e.minStart),
                                p = _(e.maxStart),
                                d = _(e.minFinal),
                                h = _(e.maxFinal),
                                y = _(e.minDuration),
                                O = _(e.maxDuration),
                                j = _(e.minDirection),
                                C = _(e.maxDirection);
                            return new b(new w(E(r.x, n.x), E(f.x, p.x), E(d.x, h.x), E(y.x, O.x), P(j.x, C.x), m(e.easingFunctions)[0]), new w(E(r.y, n.y), E(f.y, p.y), E(d.y, h.y), E(y.y, O.y), P(j.y, C.y), m(e.easingFunctions)[0]))
                    }
                }(h(h({}, e), {
                    valueType: "Vector2"
                }))
            }

            function I(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            var t = j(e.value);
                            return new O(new v(t.x), new v(t.y), new v(t.z));
                        case "static-random":
                            var r = j(e.minValue),
                                n = j(e.maxValue);
                            return new O(new v(E(r.x, n.x)), new v(E(r.y, n.y)), new v(E(r.z, n.z)));
                        case "linear":
                            t = j(e.value);
                            var o = j(e.addValue);
                            return new O(new g(t.x, o.x), new g(t.y, o.y), new g(t.z, o.z));
                        case "linear-random":
                            r = j(e.minValue), n = j(e.maxValue);
                            var i = j(e.minAddValue),
                                c = j(e.maxAddValue);
                            return new O(new g(E(r.x, n.x), E(i.x, c.x)), new g(E(r.y, n.y), E(i.y, c.y)), new g(E(r.z, n.z), E(i.z, c.z)));
                        case "oscillating":
                            t = j(e.value);
                            var l = j(e.start),
                                a = j(e.final),
                                u = j(e.duration),
                                s = j(e.direction);
                            return new O(new w(t.x, l.x, a.x, u.x, s.x, e.easingFunction), new w(t.y, l.y, a.y, u.z, s.y, e.easingFunction), new w(t.z, l.z, a.z, u.z, s.z, e.easingFunction));
                        case "oscillating-random":
                            r = j(e.minValue), n = j(e.maxValue);
                            var f = j(e.minStart),
                                p = j(e.maxStart),
                                d = j(e.minFinal),
                                h = j(e.maxFinal),
                                y = j(e.minDuration),
                                b = j(e.maxDuration),
                                _ = j(e.minDirection),
                                C = j(e.maxDirection);
                            return new O(new w(E(r.x, n.x), E(f.x, p.x), E(d.x, h.x), E(y.x, b.x), P(_.x, C.x), m(e.easingFunctions)[0]), new w(E(r.y, n.y), E(f.y, p.y), E(d.y, h.y), E(y.y, b.y), P(_.y, C.y), m(e.easingFunctions)[0]), new w(E(r.z, n.z), E(f.z, p.z), E(d.z, h.z), E(y.z, b.z), P(_.z, C.z), m(e.easingFunctions)[0]))
                    }
                }(h(h({}, e), {
                    valueType: "Vector3"
                }))
            }

            function x(e, t, r, n, o) {
                var i = function(e, t) {
                        return h(h({
                            id: t
                        }, s), e)
                    }(t, e),
                    c = R(i.size),
                    l = function(e, t) {
                        if (null != e) {
                            var r = t.sprites.findIndex((function(t) {
                                return r = t, "string" == typeof(n = e) ? r.src === n && r.colorize : r.src === n.src && r.colorize === n.colorize;
                                var r, n
                            }));
                            if (-1 !== r) return [e, r]
                        }
                        return m(t.sprites)
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
                        return -1 !== n ? n : Math.floor(E(0, r.colors.length - 1))
                    }(null != n ? n : a, o, r);
                return new u({
                    id: e,
                    position: R(i.position),
                    velocity: R(i.velocity),
                    rotation: I(i.rotation),
                    dragCoefficient: R(i.dragCoefficient),
                    size: c,
                    opacity: C(i.opacity),
                    spriteX: p * r.spriteWidth + 2 * p,
                    spriteY: f * r.spriteHeight + 2 * f,
                    spriteWidth: r.spriteWidth,
                    spriteHeight: r.spriteHeight
                })
            }
            var M = n.forwardRef((function(e, t) {
                var i = e.className,
                    c = e.environment,
                    a = e.onClick,
                    u = e.onMouseDown,
                    s = e.onMouseMove,
                    f = e.onMouseUp,
                    p = e.onBeforeRender,
                    d = e.onAfterRender,
                    y = function(e, t) {
                        var r = {};
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var o = 0;
                            for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
                        }
                        return r
                    }(e, ["className", "environment", "onClick", "onMouseDown", "onMouseMove", "onMouseUp", "onBeforeRender", "onAfterRender"]),
                    b = n.useRef(null),
                    O = n.useRef(new Map),
                    v = n.useRef(null),
                    g = n.useRef(0),
                    w = n.useRef(0),
                    E = n.useCallback((function() {
                        var e = b.current;
                        if (null != e) {
                            var t = e.getContext("2d");
                            if (null != t) {
                                t.clearRect(0, 0, e.width, e.height), null == p || p(t), O.current.forEach((function(r, n) {
                                    var o = r.confetti,
                                        i = r.spriteCanvas;
                                    o.update(c), o.draw(i, t), o.shouldDestroy(e, c) && O.current.delete(n)
                                })), null == d || d(t), O.current.size > 0 ? v.current = window.requestAnimationFrame(E) : (t.clearRect(0, 0, e.width, e.height), v.current = null);
                                var r = Date.now();
                                0 !== g.current && (w.current = 1e3 / (r - g.current)), g.current = r
                            }
                        }
                    }), [c, d, p]);
                n.useEffect((function() {
                    null != v.current && (window.cancelAnimationFrame(v.current), v.current = window.requestAnimationFrame(E))
                }), [E]);
                var m = n.useCallback((function(e, t) {
                        O.current.set(e.id, {
                            confetti: e,
                            spriteCanvas: t
                        }), null == v.current && E()
                    }), [E]),
                    P = n.useCallback((function(e, t, r, n, i) {
                        var c, l = x(null !== (c = e.id) && void 0 !== c ? c : (0, o.v4)(), e, r, n, i);
                        return m(l, t), l
                    }), [m]),
                    _ = n.useCallback((function(e) {
                        O.current.delete(e)
                    }), []),
                    j = n.useCallback((function() {
                        return O.current.clear()
                    }), []),
                    C = n.useCallback((function() {
                        return b.current
                    }), []);
                n.useImperativeHandle(t, (function() {
                    return {
                        createConfetti: P,
                        addConfetti: m,
                        deleteConfetti: _,
                        clearConfetti: j,
                        getCanvas: C
                    }
                }), [P, m, _, j, C]);
                var R = n.useCallback((function(e, t) {
                        var r, n, o = t.clickHandler,
                            i = t.mouseHandler;
                        if (null != o || null != i) {
                            var a = null === (r = b.current) || void 0 === r ? void 0 : r.getBoundingClientRect();
                            if (null != a) {
                                var u = function(e, t) {
                                    if (null == t) throw new Error("element should not be null");
                                    var r = t.getBoundingClientRect();
                                    return {
                                        x: e.clientX - r.left,
                                        y: e.clientY - r.top
                                    }
                                }(e, b.current);
                                if (l(u, {
                                        x: a.left,
                                        y: a.top,
                                        width: a.width,
                                        height: a.height
                                    })) {
                                    if (null != i) return i(e);
                                    if (null != o) {
                                        var s = -1e3 / w.current * 2,
                                            f = function(e, t) {
                                                for (var r = 0, n = Array.from(e.values()); r < n.length; r++) {
                                                    var o = n[r];
                                                    if (null != o && t(o)) return o
                                                }
                                                return null
                                            }(O.current, (function(e) {
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
                    I = n.useCallback((function(e) {
                        return R(e, {
                            clickHandler: a
                        })
                    }), [R, a]),
                    M = n.useCallback((function(e) {
                        return R(e, {
                            clickHandler: u
                        })
                    }), [R, u]),
                    D = n.useCallback((function(e) {
                        return R(e, {
                            mouseHandler: s
                        })
                    }), [R, s]),
                    L = n.useCallback((function(e) {
                        return R(e, {
                            mouseHandler: f
                        })
                    }), [R, f]);
                return n.useEffect((function() {
                    var e = function(e, t, r) {
                        null != r && window.addEventListener(e, t)
                    };
                    return e("click", I, a), e("mousedown", M, u), e("mousemove", D, s), e("mouseup", L, f),
                        function() {
                            window.removeEventListener("click", I), window.removeEventListener("mousedown", M), window.removeEventListener("mousemove", D), window.removeEventListener("mouseup", D)
                        }
                }), [I, M, D, L, a, u, s, f]), n.useEffect((function() {
                    var e = b.current,
                        t = new ResizeObserver((function() {
                            ! function(e) {
                                if (null != e) {
                                    var t = e.getBoundingClientRect(),
                                        n = t.width,
                                        o = t.height;
                                    e.width = n * r.g.devicePixelRatio, e.height = o * r.g.devicePixelRatio
                                }
                            }(b.current)
                        }));
                    return null != e && t.observe(e),
                        function() {
                            null != e && t.unobserve(e)
                        }
                }), []), n.createElement("canvas", h({}, y, {
                    className: i,
                    ref: b
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
            var D = n.forwardRef((function(e, t) {
                var r, i = e.className,
                    l = e.visible,
                    a = void 0 !== l && l,
                    u = e.sprites,
                    s = e.colors,
                    f = e.spriteWidth,
                    p = e.spriteHeight,
                    d = n.useRef(null),
                    h = n.useRef([]),
                    y = n.useRef(!1),
                    b = n.useRef({});
                n.useImperativeHandle(t, (function() {
                    return {
                        getCanvas: function() {
                            return d.current
                        },
                        getCreateData: function() {
                            return {
                                sprites: h.current,
                                colors: s,
                                spriteWidth: f,
                                spriteHeight: p
                            }
                        },
                        addReadyListener: function(e) {
                            var t = (0, o.v4)();
                            return b.current[t] = e, t
                        },
                        removeReadyListener: function(e) {
                            delete b.current[e]
                        },
                        isReady: y.current
                    }
                }), [s, p, f]);
                var O = n.useCallback((function() {
                        var e = d.current,
                            t = null == e ? void 0 : e.getContext("2d", {
                                willReadFrequently: !0
                            });
                        null != t && null != e && (t.clearRect(0, 0, e.width, e.height),
                            h.current.forEach((function(e, r) {
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
                    v = n.useCallback((function() {
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
                            h.current = e.map((function(e) {
                                return {
                                    colorize: e.colorize,
                                    image: e.image,
                                    src: e.src
                                }
                            }))
                        }))
                    }), [u]),
                    g = n.useCallback((function(e) {
                        for (var t in b.current) b.current[t](e)
                    }), []),
                    w = n.useCallback((function() {
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
                                        return [4, v()];
                                    case 1:
                                        return e.sent(), O(), y.current = !0, g(!0), [2]
                                }
                            }))
                        }))
                    }), [g, v, O]);
                return n.useEffect((function() {
                    w()
                }), [w]), n.useEffect((function() {
                    return function() {
                        return g(!1)
                    }
                }), [g]), n.useEffect((function() {
                    null != d.current && (d.current.width = (f + 2) * Math.max(s.length, 1), d.current.height = (p + 2) * u.length)
                }), [s.length, p, f, u.length]), n.createElement("canvas", {
                    ref: d,
                    className: c()(i, (r = {}, r["SpriteCanvas-module_spriteCanvasHidden__ndzQV"] = !a, r))
                })
            }));

            function L(e, t) {
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
                Z: () => b
            });
            var n, o = r(785893),
                i = (r(667294), r(294184)),
                c = r.n(i),
                l = r(289283),
                a = r(882723),
                u = r(189865),
                s = r(127661),
                f = r(473708),
                p = r(545107),
                d = r.n(p);

            function h(e, t, r) {
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
            var y = function(e) {
                var t, r = e.closeAction,
                    i = e.variant,
                    p = e.keybind,
                    y = e.className;
                return (0, o.jsxs)("div", {
                    className: c()(d().container, y),
                    children: [(0, o.jsx)(a.Clickable, {
                        className: c()(d().closeButton, (t = {}, h(t, d().closeButtonBold, i === n.BOLD), h(t, d().closeButtonSolid, i === n.SOLID), t)),
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
                        className: c()(d().keybind),
                        "aria-hidden": !0,
                        children: p
                    })]
                })
            };
            y.defaultProps = {
                variant: n.DEFAULT
            };
            y.Variants = n;
            const b = y
        },
        661299: (e, t, r) => {
            r.d(t, {
                Z: () => p
            });
            var n = r(785893),
                o = (r(667294),
                    r(294184)),
                i = r.n(o),
                c = r(468811),
                l = r.n(c),
                a = r(305484),
                u = r.n(a);

            function s(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }
            var f = l().v4();
            const p = function(e) {
                var t, r = e.open,
                    o = e.className,
                    c = e.withHighlight,
                    l = void 0 !== c && c;
                return (0, n.jsxs)("svg", {
                    width: "18",
                    height: "18",
                    className: i()(u().button, o, (t = {}, s(t, u().open, r), s(t, u().withHighlight, l), t)),
                    children: [l && (0, n.jsx)("defs", {
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
                            stroke: l ? "url(#".concat(f, ")") : "currentColor",
                            d: "M4.5 4.5l9 9",
                            strokeLinecap: "round"
                        }), (0, n.jsx)("path", {
                            stroke: l ? "url(#".concat(f, ")") : "currentColor",
                            d: "M13.5 4.5l-9 9",
                            strokeLinecap: "round"
                        })]
                    })]
                })
            }
        },
        525628: (e, t, r) => {
            r.d(t, {
                WZ: () => n,
                OE: () => o,
                ZP: () => i
            });
            var n = (0, r(260561).B)({
                    kind: "user",
                    id: "2023-08_collectiblesnitroavatardecoiap",
                    label: "Collectible Nitro Avatar Decorations IAP",
                    defaultConfig: {
                        canUseCollectiblesIAP: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Collectibles IAP",
                        config: {
                            canUseCollectiblesIAP: !0
                        }
                    }]
                }),
                o = function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    return n.useExperiment({
                        location: "b697b5_1"
                    }, {
                        autoTrackExposure: e
                    })
                };
            const i = o
        },
        255875: (e, t, r) => {
            r.d(t, {
                E: () => d,
                h: () => h
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
                d = o.createContext(p);

            function h(e) {
                var t = e.children,
                    r = e.confettiCanvas,
                    a = e.spriteCanvas,
                    u = e.baseConfig,
                    h = e.addClickListener,
                    y = e.removeClickListener,
                    b = (0, i.uR)(r, a),
                    O = (0, c.ZP)([l.Z], (function() {
                        return l.Z.useReducedMotion
                    })),
                    v = o.useMemo((function() {
                        return O ? p : {
                            confettiCanvas: r,
                            cannon: b,
                            createConfetti: function(e, t) {
                                return b.createConfetti(s({}, u, e), t)
                            },
                            createConfettiAt: function(e, t, r, n) {
                                return b.createConfetti(s(f(s({}, u), {
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
                                return b.createMultipleConfetti(s({}, u, e), t, r)
                            },
                            createMultipleConfettiAt: function(e, t, r) {
                                var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                                    o = arguments.length > 4 ? arguments[4] : void 0;
                                return b.createMultipleConfetti(s(f(s({}, u), {
                                    position: {
                                        type: "static",
                                        value: {
                                            x: e,
                                            y: t
                                        }
                                    }
                                }), r), n, o)
                            },
                            addClickListener: h,
                            removeClickListener: y
                        }
                    }), [h, u, b, r, O, y]);
                return (0, n.jsx)(d.Provider, {
                    value: v,
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
        733274: (e, t, r) => {
            r.d(t, {
                zC: () => M,
                Yp: () => I,
                XO: () => x,
                hC: () => S,
                o9: () => L,
                VF: () => N,
                WW: () => D
            });
            var n = r(795308),
                o = r(805457),
                i = r(901644),
                c = r(217674),
                l = r(312690),
                a = r(855595),
                u = r(575562),
                s = r(235606),
                f = r(71236),
                p = r(521798),
                d = r(785893),
                h = (r(667294), r(633878));

            function y(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function b(e, t) {
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

            function O(e, t) {
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

            function v(e) {
                var t = e.width,
                    r = void 0 === t ? 40 : t,
                    n = e.height,
                    o = void 0 === n ? 40 : n,
                    i = e.color,
                    c = void 0 === i ? "currentColor" : i,
                    l = O(e, ["width", "height", "color"]);
                return (0, d.jsx)("svg", b(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            y(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, h.Z)(l)), {
                    width: r,
                    height: o,
                    viewBox: "0 0 20 21",
                    fill: c,
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, d.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M9.2139 1.00082L0.271335 12.3825C-0.0698739 12.8168 0.00557122 13.4454 0.439846 13.7866C0.616031 13.9251 0.833599 14.0003 1.05766 14.0003H5.00022V20.0003C5.00022 20.5526 5.44794 21.0003 6.00022 21.0003H14.0002C14.5525 21.0003 15.0002 20.5526 15.0002 20.0003V14.0003H18.9428C19.495 14.0003 19.9428 13.5526 19.9428 13.0003C19.9428 12.7763 19.8675 12.5587 19.7291 12.3825L10.7865 1.00082C10.4453 0.566546 9.81669 0.4911 9.38241 0.832308C9.31972 0.881561 9.26315 0.938133 9.2139 1.00082Z",
                        fill: c
                    })
                }))
            }
            var g = r(2590),
                w = (r(203600), r(473708)),
                E = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n.Z.unsafe_rawColors.PREMIUM_PERK_ORANGE.css;
                    return {
                        color: e,
                        icon: l.Z,
                        description: w.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_ANIMATED_ICON
                    }
                },
                m = function() {
                    return {
                        color: n.Z.unsafe_rawColors.PREMIUM_PERK_ORANGE.css,
                        icon: a.Z,
                        description: w.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_ROLE_ICON
                    }
                },
                P = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n.Z.unsafe_rawColors.PREMIUM_PERK_PURPLE.css;
                    return {
                        color: e,
                        icon: p.Z,
                        description: w.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_STICKERS
                    }
                },
                _ = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.Z.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
                        r = 0,
                        o = 0;
                    switch (e) {
                        case g.Eu4.TIER_1:
                            r = 15;
                            o = 100;
                            break;
                        case g.Eu4.TIER_2:
                            r = 30;
                            o = 150;
                            break;
                        case g.Eu4.TIER_3:
                            r = 60;
                            o = 250
                    }
                    return {
                        color: t,
                        icon: p.Z,
                        description: w.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_STICKERS_AND_EMOJIS.format({
                            numStickers: r,
                            numEmojis: o
                        })
                    }
                },
                j = function() {
                    return {
                        color: n.Z.unsafe_rawColors.PREMIUM_PERK_GOLD.css,
                        icon: f.Z,
                        description: w.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_VANITY_URL
                    }
                },
                C = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : w.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_OTHER;
                    return {
                        color: n.Z.unsafe_rawColors.PREMIUM_PERK_BLUE.css,
                        icon: i.Z,
                        description: e
                    }
                },
                R = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css;
                    return {
                        color: e,
                        icon: s.Z,
                        description: w.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_SCREEN_SHARE_1080P
                    }
                };

            function I() {
                return [m(), {
                    color: n.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
                    icon: u.Z,
                    description: w.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_GUILD_BANNER
                }, P(), C()]
            }

            function x() {
                return [m(), _(g.Eu4.TIER_2), R(), C()]
            }

            function M() {
                return [_(g.Eu4.TIER_3, n.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css), {
                    color: n.Z.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
                    icon: v,
                    description: w.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_FILE_UPLOAD_TIER_3
                }, j(), C()]
            }

            function D() {
                return [j(), {
                    color: n.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
                    icon: l.Z,
                    description: w.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_ANIMATED_GUILD_BANNER
                }, _(g.Eu4.TIER_3), C()]
            }

            function L() {
                return [{
                    color: n.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
                    icon: u.Z,
                    description: w.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_CUSTOM_INVITE
                }, P(), E(), C()]
            }

            function S() {
                return [P(), C()]
            }

            function N() {
                return [{
                    icon: c.Z,
                    color: n.Z.unsafe_rawColors.PREMIUM_PERK_PINK.css,
                    description: w.Z.Messages.PREMIUM_GUILD_USER_FEATURE_BOOST_CRYSTAL
                }, {
                    icon: a.Z,
                    color: n.Z.unsafe_rawColors.PREMIUM_PERK_YELLOW.css,
                    description: w.Z.Messages.PREMIUM_GUILD_USER_FEATURE_SPECIAL_ROLE
                }, {
                    icon: o.Z,
                    description: w.Z.Messages.PREMIUM_GUILD_USER_FEATURE_PROFILE_BADGE
                }, {
                    color: n.Z.unsafe_rawColors.PREMIUM_PERK_BLUE.css,
                    icon: i.Z,
                    description: w.Z.Messages.PREMIUM_GUILD_USER_FEATURE_OTHERS
                }]
            }
        },
        275086: (e, t, r) => {
            r.d(t, {
                c: () => b
            });
            var n = r(785893),
                o = (r(667294), r(882723)),
                i = r(661299),
                c = r(393299),
                l = r(930865),
                a = r(596801),
                u = r(733274),
                s = r(2590),
                f = r(473708),
                p = r(206322),
                d = r.n(p);

            function h(e) {
                var t = e.guild,
                    r = e.banner;
                return (0, n.jsx)("div", {
                    className: d().guildBanner,
                    style: {
                        backgroundImage: "url(".concat(r)
                    },
                    children: (0, n.jsxs)("div", {
                        className: d().guildHeader,
                        children: [(0, n.jsx)(c.Z, {
                            guild: t,
                            isBannerVisible: !0
                        }), (0, n.jsx)(o.Heading, {
                            className: d().guildName,
                            variant: "heading-md/semibold",
                            children: t.toString()
                        }), (0, n.jsx)(i.Z, {
                            className: d().dropdown,
                            open: !1
                        })]
                    })
                })
            }

            function y(e, t) {
                var r = (0, l.nW)(e);
                return t ? f.Z.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_ANIMATED.format({
                    targetLevelOrPlan: r
                }) : f.Z.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_STATIC.format({
                    targetLevelOrPlan: r
                })
            }

            function b(e) {
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
                        subtitle: y(p, i),
                        image: (0, n.jsx)(h, {
                            guild: o,
                            banner: c
                        })
                    },
                    perkIntro: f.Z.Messages.GUILD_BANNER_UPSELL_MODAL_PERK_INTRO,
                    perks: i ? (0, u.zC)() : (0, u.XO)()
                })
            }
        },
        596801: (e, t, r) => {
            r.d(t, {
                Z: () => h
            });
            var n = r(785893),
                o = (r(667294), r(882723)),
                i = r(979197),
                c = r(625797),
                l = r(652591),
                a = r(2590);

            function u(e, t, r, n, o, i, c) {
                try {
                    var l = e[i](c),
                        a = l.value
                } catch (e) {
                    r(e);
                    return
                }
                l.done ? t(a) : Promise.resolve(a).then(n, o)
            }

            function s(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = e.apply(t, r);

                        function c(e) {
                            u(i, n, o, c, l, "next", e)
                        }

                        function l(e) {
                            u(i, n, o, c, l, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }

            function f(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
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
            var d = function(e, t) {
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

            function h(e, t) {
                var u = null != t ? t : "".concat(a.jXE.PREMIUM_GUILD_UPSELL_MODAL);
                null != e.targetBoostedGuildTier && (u += " - Tier ".concat(e.targetBoostedGuildTier));
                l.default.track(a.rMx.OPEN_MODAL, {
                    type: u,
                    location: e.analyticsSourceLocation
                });
                var h = e.openInPopoutEnabled,
                    y = p(e, ["openInPopoutEnabled"]),
                    b = i.Z.getWindowOpen(a.KJ3.CHANNEL_CALL_POPOUT) && null != h && h;
                b && (0, c.Z)(a.KJ3.CHANNEL_CALL_POPOUT);
                var O = b ? o.POPOUT_MODAL_CONTEXT : o.DEFAULT_MODAL_CONTEXT;
                (0, o.openModalLazy)(s((function() {
                    var e, t;
                    return d(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, Promise.all([r.e(40532), r.e(94302), r.e(82786), r.e(56713)]).then(r.bind(r, 374714))];
                            case 1:
                                e = o.sent(), t = e.default;
                                return [2, function(e) {
                                    return (0, n.jsx)(t, function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var r = null != arguments[t] ? arguments[t] : {},
                                                n = Object.keys(r);
                                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(r, e).enumerable
                                            }))));
                                            n.forEach((function(t) {
                                                f(e, t, r[t])
                                            }))
                                        }
                                        return e
                                    }({}, y, e))
                                }]
                        }
                    }))
                })), {
                    onCloseCallback: function() {
                        l.default.track(a.rMx.MODAL_DISMISSED, {
                            type: u,
                            location: e.analyticsSourceLocation
                        })
                    },
                    contextKey: O
                })
            }
        },
        393299: (e, t, r) => {
            r.d(t, {
                Z: () => S
            });
            var n, o = r(785893),
                i = (r(667294), r(294184)),
                c = r.n(i),
                l = r(202351),
                a = r(882723),
                u = r(491379),
                s = r(591406),
                f = r(859917),
                p = r(784648),
                d = r(2590),
                h = r(476997),
                y = r.n(h);

            function b(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }
            var O, v = (b(n = {}, d.Eu4.NONE, y().iconBackgroundTierNone), b(n, d.Eu4.TIER_1, y().iconBackgroundTierOne), b(n, d.Eu4.TIER_2, y().iconBackgroundTierTwo), b(n, d.Eu4.TIER_3, y().iconBackgroundTierThree), n),
                g = (b(O = {}, d.Eu4.NONE, y().iconTierNone), b(O, d.Eu4.TIER_1, y().iconTierOne), b(O, d.Eu4.TIER_2, y().iconTierTwo), b(O, d.Eu4.TIER_3, y().iconTierThree), O);

            function w(e) {
                var t = e.premiumTier,
                    r = e.iconBackgroundClassName,
                    n = e.iconClassName,
                    i = e.size;
                return (0, o.jsx)(f.Z, {
                    className: c()(r, v[t]),
                    size: i,
                    children: (0, o.jsx)(p.Z, {
                        tier: t,
                        className: c()(n, y().boostedGuildIconGem, g[t])
                    })
                })
            }
            var E = r(21372),
                m = r(473903),
                P = r(206986),
                _ = r(521723),
                j = r(930865),
                C = r(473708),
                R = r(36373),
                I = r.n(R);

            function x(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function M(e, t) {
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
                    i = (0, l.e7)([m.default, E.ZP], (function() {
                        var e = m.default.getCurrentUser();
                        return E.ZP.isMember(t.id, null == e ? void 0 : e.id)
                    })),
                    c = t.premiumTier,
                    u = t.premiumSubscriberCount;
                if (0 === u && c === d.Eu4.NONE) return null;
                var f = function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        i && !n && (0, s.f)({
                            guildId: t.id,
                            location: {
                                section: d.jXE.GUILD_HEADER,
                                object: d.qAy.BOOST_GEM_ICON
                            }
                        })
                    },
                    p = c === d.Eu4.NONE ? C.Z.Messages.PREMIUM_GUILD_HEADER_BADGE_NO_TIER : j.nW(c),
                    h = (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("div", {
                            className: I().tierTooltipTitle,
                            children: p
                        }), (0, o.jsx)("div", {
                            children: C.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_SUBSCRIBER_COUNT_TOOLTIP.format({
                                subscriberCount: u
                            })
                        })]
                    });
                return (0, o.jsx)("div", {
                    className: I().guildIconContainer,
                    children: (0, o.jsx)(a.Tooltip, {
                        text: h,
                        position: "bottom",
                        "aria-label": null != p ? p : "",
                        children: function(e) {
                            return (0, o.jsx)(a.Clickable, M(function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {},
                                        n = Object.keys(r);
                                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                                    }))));
                                    n.forEach((function(t) {
                                        x(e, t, r[t])
                                    }))
                                }
                                return e
                            }({}, e), {
                                className: I().premiumGuildIcon,
                                onClick: f,
                                children: (0, o.jsx)(w, {
                                    premiumTier: c,
                                    iconBackgroundClassName: r ? I().boostedGuildTierIconBackgroundWithVisibleBanner : null,
                                    iconClassName: r && c !== d.Eu4.TIER_3 ? I().boostedGuildTierMutedIconWithVisibleBanner : null
                                })
                            }))
                        }
                    })
                })
            }

            function L(e) {
                var t = e.guild,
                    r = e.disableColor,
                    n = e.disableBoostClick;
                return (0, u.Z)(t) ? (0, o.jsx)("div", {
                    className: I().guildIconV2Container,
                    children: (0, o.jsx)(_.Z, {
                        guild: t,
                        tooltipPosition: "bottom",
                        tooltipColor: a.Tooltip.Colors.PRIMARY,
                        className: c()(I().guildBadge, x({}, I().disableColor, r)),
                        disableBoostClick: n
                    })
                }) : (0, o.jsx)("div", {
                    className: I().guildIconContainer,
                    children: (0, o.jsx)(P.Z, {
                        guild: t,
                        tooltipPosition: "bottom",
                        tooltipColor: a.Tooltip.Colors.PRIMARY,
                        className: c()(I().guildBadge, x({}, I().disableColor, r))
                    })
                })
            }

            function S(e) {
                var t = e.guild,
                    r = e.isBannerVisible,
                    n = e.disableBoostClick;
                return (0, u.Z)(t) ? (0, o.jsx)(L, {
                    guild: t,
                    disableColor: !1,
                    disableBoostClick: n
                }) : t.hasFeature(d.oNc.VERIFIED) || t.hasFeature(d.oNc.PARTNERED) ? (0, o.jsx)(L, {
                    guild: t,
                    disableColor: !r
                }) : (0, o.jsx)(D, {
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
                U$: () => d,
                Es: () => y,
                kH: () => b,
                AK: () => O,
                Ae: () => v
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
                    var s, f, p, d, h, y, b, O;
                    return l(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                s = u(t, n, i, c), f = s.x, p = s.y, d = s.scaledCropWidth, h = s.scaledCropHeight;
                                return [4, e.arrayBuffer()];
                            case 1:
                                y = l.sent();
                                b = new Worker(new URL(r.p + r.u(92827), r.b));
                                O = new Promise((function(e, t) {
                                    b.onmessage = function(r) {
                                        var n = r.data;
                                        if (n.type === o.u.CROP_GIF_COMPLETE) {
                                            e(a(new Blob([n.result])));
                                            b.terminate()
                                        } else if (n.type === o.u.CROP_GIF_ERROR) {
                                            t(new Error("Error cropping GIF"));
                                            b.terminate()
                                        }
                                    }
                                }));
                                b.postMessage({
                                    type: o.u.CROP_GIF_START,
                                    gif: new Uint8Array(y),
                                    x: 0 | f,
                                    y: 0 | p,
                                    width: 0 | d,
                                    height: 0 | h
                                });
                                return [2, {
                                    result: O,
                                    cancelFn: function() {
                                        return b.terminate()
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
                var d = p.getContext("2d");
                null != d && d.drawImage(e, i, c, l, a, 0, 0, p.width, p.height);
                return p.toDataURL("image/png")
            }

            function d(e, t, r) {
                return {
                    x: (0, n.clamp)(e, r.left, r.right),
                    y: (0,
                        n.clamp)(t, r.bottom, r.top)
                }
            }

            function h(e, t, r, n) {
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

            function y(e, t, r) {
                switch (e) {
                    case o.pC.AVATAR:
                    case o.pC.AVATAR_DECORATION:
                        return {
                            width: t, height: r
                        };
                    case o.pC.BANNER:
                        return h(o.MY, o.qj, t, r);
                    case o.pC.GUILD_BANNER:
                        return h(o.Ij, o.C5, t, r);
                    case o.pC.VIDEO_BACKGROUND:
                        return h(o.Ff, o.PB, t, r);
                    case o.pC.SCHEDULED_EVENT_IMAGE:
                        return h(o.ut, o.WV, t, r);
                    case o.pC.HOME_HEADER:
                        return h(o.sX, o.SW, t, r)
                }
            }

            function b(e, t, r) {
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

            function O(e, t, r, n) {
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

            function v(e, t, r) {
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
                Z: () => Z
            });
            var n = r(785893),
                o = r(667294),
                i = r(202351),
                c = r(882723),
                l = r(19585),
                a = r(275086),
                u = r(596801),
                s = r(567403),
                f = r(464187),
                p = r(217674),
                d = r(2590),
                h = r(733274),
                y = r(473708),
                b = r(352900),
                O = r.n(b);

            function v(e) {
                var t = e.analyticsSection,
                    r = e.analyticsPage,
                    o = e.isGIF,
                    b = e.banner,
                    v = (0, i.e7)([f.Z], (function() {
                        return f.Z.getGuildId()
                    })),
                    g = (0, i.e7)([s.Z], (function() {
                        return s.Z.getGuild(v)
                    })),
                    w = (0, l.Z)().analyticsLocations;
                if (null == g || g.hasFeature(d.oNc.ANIMATED_BANNER) || !o && g.hasFeature(d.oNc.BANNER)) return null;
                return (0, n.jsxs)("div", {
                    className: O().container,
                    children: [(0, n.jsx)(p.Z, {
                        className: O().guildBoostingIcon
                    }), (0, n.jsx)(c.Text, {
                        color: "header-primary",
                        variant: "text-sm/semibold",
                        children: y.Z.Messages.PREMIUM_GUILD_PREVIEW
                    }), (0, n.jsx)(c.Button, {
                        look: c.Button.Looks.LINK,
                        color: c.Button.Colors.LINK,
                        className: O().subscribeButton,
                        onClick: function() {
                            if (null != g) {
                                var e = {
                                    section: t,
                                    page: r,
                                    object: d.qAy.UPSELL_HEADER
                                };
                                null != b ? (0, a.c)({
                                    analyticsLocations: w,
                                    analyticsLocation: e,
                                    guild: g,
                                    isGIF: o,
                                    banner: b
                                }) : (0, u.Z)({
                                    analyticsLocations: w,
                                    analyticsSourceLocation: e,
                                    guild: g,
                                    perks: o ? (0, h.zC)() : (0, h.XO)()
                                })
                            }
                        },
                        children: y.Z.Messages.PREMIUM_GUILD_BOOST_SERVER
                    })]
                })
            }
            var g = r(153686),
                w = r(294184),
                E = r.n(w),
                m = r(366007),
                P = r(95891),
                _ = r(98265),
                j = r(41717),
                C = r.n(j);

            function R(e) {
                var t = e.text,
                    r = e.textSize,
                    o = void 0 === r ? _.Z.Sizes.SIZE_12 : r,
                    i = e.textColor,
                    c = void 0 === i ? _.Z.Colors.STANDARD : i,
                    l = e.className,
                    a = e.button,
                    u = e.reducedRightPadding,
                    s = void 0 !== u && u;
                return (0, n.jsxs)("div", {
                    className: E()(s ? C().noticeWithoutRightPadding : C().noticeWithRightPadding, l),
                    children: [(0, n.jsxs)("div", {
                        className: C().noticeLeft,
                        children: [(0, n.jsx)(P.Z, {
                            className: C().icon,
                            color: m.JX.PREMIUM_TIER_2
                        }), (0, n.jsx)(_.Z, {
                            className: C().text,
                            size: o,
                            color: c,
                            children: t
                        })]
                    }), a]
                })
            }
            var I = r(455706),
                x = r(473903),
                M = r(652591),
                D = r(116094),
                L = r(921431),
                S = r(203600),
                N = r(917567),
                T = r.n(N);

            function U(e) {
                var t = e.analyticsSection,
                    r = e.type,
                    a = (0, i.e7)([x.default], (function() {
                        return x.default.getCurrentUser()
                    })),
                    u = D.ZP.canUseAnimatedAvatar(a),
                    s = D.ZP.canUsePremiumProfileCustomization(a),
                    f = r === L.pC.BANNER && s || r === L.pC.AVATAR && u,
                    p = (0, l.Z)(g.Z.PREMIUM_PREVIEW_UPSELL_HEADER).sourceAnalyticsLocations;
                o.useEffect((function() {
                    f || M.default.track(d.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: t,
                        location_stack: p
                    })
                }), [f, t, p]);
                if (f) return null;
                var h = (0, n.jsx)(I.Z, {
                    className: T().getNitroLink,
                    size: c.Button.Sizes.SMALL,
                    look: c.Button.Looks.LINK,
                    color: c.Button.Colors.LINK,
                    subscriptionTier: S.Si.TIER_2,
                    buttonText: y.Z.Messages.PREMIUM_PREVIEW_GET_NITRO.format(),
                    showIcon: !1,
                    premiumModalAnalyticsLocation: {
                        section: t,
                        object: d.qAy.BUTTON_CTA
                    },
                    disableShine: !0
                });
                return (0, n.jsx)(R, {
                    reducedRightPadding: !0,
                    className: T().nitroPreviewUpsell,
                    text: y.Z.Messages.PREMIUM_PREVIEW.format(),
                    textSize: _.Z.Sizes.SIZE_14,
                    textColor: _.Z.Colors.HEADER_PRIMARY,
                    button: h
                })
            }

            function Z(e) {
                var t = e.type,
                    r = e.analyticsPage,
                    o = e.analyticsSection,
                    i = e.isGIF,
                    c = e.banner;
                return [L.pC.BANNER, L.pC.AVATAR].includes(t) && i ? (0, n.jsx)(U, {
                    analyticsSection: o,
                    type: t
                }) : t === L.pC.GUILD_BANNER ? (0, n.jsx)(v, {
                    analyticsSection: o,
                    analyticsPage: r,
                    isGIF: i,
                    banner: c
                }) : null
            }
        },
        63509: (e, t, r) => {
            r.d(t, {
                Z: () => k
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
                d = r(202181),
                h = r(2590);

            function y(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function b(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function O(e) {
                O = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return O(e)
            }

            function v(e, t) {
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

            function g(e, t) {
                return !t || "object" !== E(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function w(e, t) {
                w = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return w(e, t)
            }
            var E = function(e) {
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
                    var r, n = O(e);
                    if (t) {
                        var o = O(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return g(this, r)
                }
            }
            var P = {},
                _ = {},
                j = {},
                C = {},
                R = {},
                I = new Set,
                x = "app-mount",
                M = function() {
                    return A.emitChange()
                },
                D = c().debounce(M, 150);

            function L(e) {
                var t = j[e];
                null == t || t.closed || (P[e] = {
                    x: t.screenX,
                    y: t.screenY,
                    width: t.innerWidth,
                    height: t.innerHeight,
                    alwaysOnTop: !!f.FB && _[e]
                })
            }

            function S(e) {
                var t = j[e],
                    r = R[e];
                if (null != t) {
                    var n = t.document;
                    (0, d.uF)(n, M);
                    t.addEventListener("focus", M);
                    t.addEventListener("blur", M);
                    t.addEventListener("resize", D);
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
                    var i = (0, l.s)(n.getElementById(x));
                    o()(null != i, "No render target for popout!");
                    C[e] = i;
                    i.render(r(e))
                } else new s.Z("PopoutWindowStore").warn("Failed to open window", e)
            }

            function N(e) {
                var t = j[e];
                if (null != t) {
                    t.closed || L(e);
                    t.close();
                    ! function(e) {
                        var t = j[e];
                        o()(null != t, "Popout window was null during unmount");
                        t.removeEventListener("focus", M);
                        t.removeEventListener("blur", M);
                        t.removeEventListener("resize", D);
                        var r = C[e];
                        o()(null != r, "Window root was null while unmounting");
                        r.unmount();
                        delete j[e];
                        delete _[e];
                        delete R[e];
                        delete C[e]
                    }(e);
                    A.emitChange()
                }
            }

            function T(e) {
                var t = e.data;
                if (t instanceof Object && t.discordPopoutEvent instanceof Object) {
                    var r = t.discordPopoutEvent;
                    if (null != r.key) switch (r.type) {
                        case h.l9w.LOADED:
                            return function(e) {
                                if (I.has(e)) {
                                    S(e);
                                    I.delete(e);
                                    A.emitChange()
                                }
                            }(r.key);
                        case h.l9w.UNLOADED:
                            return N(r.key)
                    }
                }
            }

            function U() {
                var e = !0,
                    t = !1,
                    r = void 0;
                try {
                    for (var n, o = Object.keys(j)[Symbol.iterator](); !(e = (n = o.next()).done); e = !0) {
                        var i = n.value,
                            c = j[i];
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
            var Z = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && w(e, t)
                }(r, e);
                var t = m(r);

                function r() {
                    y(this, r);
                    return t.apply(this, arguments)
                }
                var n = r.prototype;
                n.initialize = function(e) {
                    window.addEventListener("message", T);
                    window.addEventListener("beforeunload", U);
                    P = null != e ? e : {}
                };
                n.getWindow = function(e) {
                    return j[e]
                };
                n.getWindowState = function(e) {
                    return P[e]
                };
                n.getWindowKeys = function() {
                    return Object.keys(j)
                };
                n.getWindowOpen = function(e) {
                    var t = j[e];
                    return null != t && !t.closed
                };
                n.getIsAlwaysOnTop = function(e) {
                    return Boolean(_[e])
                };
                n.getWindowFocused = function(e) {
                    var t, r, n = j[e];
                    return null !== (r = null == n || null === (t = n.document) || void 0 === t ? void 0 : t.hasFocus()) && void 0 !== r && r
                };
                n.getState = function() {
                    return P
                };
                n.unmountWindow = function(e) {
                    return N(e)
                };
                n.__getLocalVars = function() {
                    return {
                        popoutWindowState: P,
                        popoutWindowsAlwaysOnTop: _,
                        popoutWindows: j,
                        windowRoots: C,
                        windowRenderers: R,
                        pendingInjections: I,
                        INJECTION_ID: x,
                        emitChange: M,
                        debouncedEmitChange: D,
                        DEVELOPMENT_MODE: false,
                        instance: A
                    }
                };
                return r
            }(a.ZP.PersistedStore);
            Z.displayName = "PopoutWindowStore";
            Z.persistKey = "PopoutWindowStore";
            var A = new Z(u.Z, {
                POPOUT_WINDOW_OPEN: function(e) {
                    var t = e.key,
                        r = e.features,
                        n = e.render;
                    if (f.FB && !p.ZP.supportsFeature(h.eRX.POPOUT_WINDOWS)) throw new Error("Popout windows not supported on this native module version!");
                    var o = j[t];
                    if (null != o && !o.closed) {
                        f.FB ? p.ZP.focus(t) : o.focus();
                        return !1
                    }
                    var i = r.defaultWidth,
                        c = r.defaultHeight,
                        l = r.defaultAlwaysOnTop,
                        a = void 0 !== l && l,
                        u = v(r, ["defaultWidth", "defaultHeight", "defaultAlwaysOnTop"]),
                        s = a,
                        d = P[t];
                    if (null != d) {
                        var y = d.width,
                            O = d.height,
                            g = d.x,
                            w = d.y,
                            E = d.alwaysOnTop;
                        s = null != E ? E : a;
                        u = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(r);
                                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                                }))));
                                n.forEach((function(t) {
                                    b(e, t, r[t])
                                }))
                            }
                            return e
                        }({
                            width: null != y && 0 !== y ? y : i,
                            height: null != O && 0 !== O ? O : c,
                            left: g,
                            top: w
                        }, u)
                    }
                    var m = window.open(h.Z5c.POPOUT_WINDOW, t, function(e) {
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
                    m.windowKey = t;
                    null == m || m.focus();
                    j[t] = m;
                    R[t] = n;
                    if (f.FB) {
                        p.ZP.setAlwaysOnTop(t, s);
                        _[t] = s;
                        p.ZP.isAlwaysOnTop(t).then((function(e) {
                            return _[t] = e
                        }))
                    }
                    I.add(t)
                },
                POPOUT_WINDOW_CLOSE: function(e) {
                    var t = e.key,
                        r = j[t];
                    if (null != r && !r.closed) {
                        L(t);
                        r.close()
                    }
                },
                POPOUT_WINDOW_SET_ALWAYS_ON_TOP: function(e) {
                    var t = e.key,
                        r = e.alwaysOnTop;
                    if (f.FB) {
                        p.ZP.setAlwaysOnTop(t, r);
                        _[t] = r;
                        p.ZP.isAlwaysOnTop(t).then((function(e) {
                            return _[t] = e
                        }))
                    }
                },
                LOGOUT: U
            });
            const k = A
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
        366007: (e, t, r) => {
            r.d(t, {
                Rj: () => a,
                JX: () => u,
                ZP: () => s
            });
            var n = r(785893),
                o = r(667294),
                i = r(468811),
                c = r.n(i),
                l = r(795308),
                a = Object.freeze({
                    PREMIUM_TIER_0: c().v4(),
                    PREMIUM_TIER_1: c().v4(),
                    PREMIUM_TIER_2: c().v4(),
                    PREMIUM_GUILD: c().v4(),
                    PREMIUM_TRIAL_TUTORIAL: c().v4(),
                    PREMIUM_GUILD_BADGE_V2_BACKGROUND: c().v4()
                }),
                u = {
                    PREMIUM_TIER_0: "url(#".concat(a.PREMIUM_TIER_0, ")"),
                    PREMIUM_TIER_1: "url(#".concat(a.PREMIUM_TIER_1, ")"),
                    PREMIUM_TIER_2: "url(#".concat(a.PREMIUM_TIER_2, ")"),
                    PREMIUM_GUILD: "url(#".concat(a.PREMIUM_GUILD, ")"),
                    PREMIUM_TRIAL_TUTORIAL: "url(#".concat(a.PREMIUM_TRIAL_TUTORIAL, ")"),
                    PREMIUM_GUILD_BADGE_V2_BACKGROUND: "url(#".concat(a.PREMIUM_GUILD_BADGE_V2_BACKGROUND, ")")
                };
            const s = o.memo((function() {
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
                        id: a.PREMIUM_TIER_0,
                        children: [(0, n.jsx)("stop", {
                            offset: ".1762",
                            stopColor: l.Z.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS.css
                        }), (0, n.jsx)("stop", {
                            offset: "0.5351",
                            stopColor: l.Z.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2.css
                        }), (0, n.jsx)("stop", {
                            offset: "1",
                            stopColor: l.Z.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css
                        })]
                    }), (0, n.jsxs)("linearGradient", {
                        id: a.PREMIUM_TIER_1,
                        children: [(0, n.jsx)("stop", {
                            stopColor: l.Z.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css
                        }), (0, n.jsx)("stop", {
                            offset: "1",
                            stopColor: l.Z.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css
                        })]
                    }), (0, n.jsxs)("linearGradient", {
                        id: a.PREMIUM_TIER_2,
                        children: [(0, n.jsx)("stop", {
                            stopColor: l.Z.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.css
                        }), (0, n.jsx)("stop", {
                            offset: "0.502368",
                            stopColor: l.Z.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.css
                        }), (0, n.jsx)("stop", {
                            offset: "1",
                            stopColor: l.Z.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS.css
                        })]
                    }), (0, n.jsxs)("linearGradient", {
                        id: a.PREMIUM_GUILD,
                        children: [(0, n.jsx)("stop", {
                            stopColor: l.Z.unsafe_rawColors.GUILD_BOOSTING_BLUE.css
                        }), (0, n.jsx)("stop", {
                            offset: "1",
                            stopColor: l.Z.unsafe_rawColors.GUILD_BOOSTING_PURPLE.css
                        })]
                    }), (0, n.jsxs)("linearGradient", {
                        id: a.PREMIUM_TRIAL_TUTORIAL,
                        children: [(0, n.jsx)("stop", {
                            stopColor: l.Z.unsafe_rawColors.PREMIUM_TIER_2_PURPLE.css
                        }), (0, n.jsx)("stop", {
                            offset: "1",
                            stopColor: l.Z.unsafe_rawColors.PREMIUM_TIER_2_PINK.css
                        })]
                    }), (0, n.jsxs)("linearGradient", {
                        id: a.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
                        gradientTransform: "rotate(45)",
                        children: [(0,
                            n.jsx)("stop", {
                            offset: "0",
                            stopColor: l.Z.unsafe_rawColors.PREMIUM_TIER_2_PURPLE.css
                        }), (0, n.jsx)("stop", {
                            offset: "1",
                            stopColor: l.Z.unsafe_rawColors.PREMIUM_TIER_2_PINK.css
                        })]
                    })]
                })
            }), (function() {
                return !0
            }))
        },
        521723: (e, t, r) => {
            r.d(t, {
                Z: () => F
            });
            var n = r(785893),
                o = (r(667294), r(294184)),
                i = r.n(o),
                c = r(202351),
                l = r(795308),
                a = r(575945),
                u = r(882723),
                s = r(337509),
                f = r(761673),
                p = r(591406),
                d = r(64234),
                h = r(21372),
                y = r(473903),
                b = r(930865),
                O = r(859917),
                v = r(366007),
                g = r(459308),
                w = r(633878);

            function E(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function m(e, t) {
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

            function _(e, t, r) {
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

            function C(e, t) {
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

            function R(e, t, r) {
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

            function x(e, t) {
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

            function M(e) {
                var t = e.width,
                    r = void 0 === t ? 10 : t,
                    o = e.height,
                    i = void 0 === o ? 10 : o,
                    c = e.color,
                    l = void 0 === c ? "currentColor" : c,
                    a = x(e, ["width", "height", "color"]);
                return (0, n.jsxs)("svg", I(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            R(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, w.Z)(a)), {
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
                    }), (0, n.jsx)("defs", {
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
            var D, L = r(690002),
                S = r(128181),
                N = r(2590),
                T = r(473708),
                U = r(238191),
                Z = r.n(U);

            function A(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function k(e) {
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
            }

            function B(e, t) {
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
            var V = (A(D = {}, s.Q.STAFF, {
                IconComponent: L.Z,
                foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
                foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
                backgroundDarkColor: l.Z.unsafe_rawColors.GREEN_360.css,
                backgroundLightColor: l.Z.unsafe_rawColors.GREEN_360.css
            }), A(D, s.Q.VERIFIED_AND_PARTNERED, {
                IconComponent: S.Z,
                foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
                foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
                backgroundDarkColor: l.Z.unsafe_rawColors.GREEN_360.css,
                backgroundLightColor: l.Z.unsafe_rawColors.GREEN_360.css
            }), A(D, s.Q.VERIFIED, {
                IconComponent: S.Z,
                foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
                foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
                backgroundDarkColor: l.Z.unsafe_rawColors.GREEN_360.css,
                backgroundLightColor: l.Z.unsafe_rawColors.GREEN_360.css
            }), A(D, s.Q.PARTNERED, {
                IconComponent: g.Z,
                foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
                foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
                backgroundDarkColor: l.Z.unsafe_rawColors.BRAND_500.css,
                backgroundLightColor: l.Z.unsafe_rawColors.BRAND_500.css
            }), A(D, s.Q.COMMUNITY, {
                IconComponent: function(e) {
                    var t = e.width,
                        r = void 0 === t ? 10 : t,
                        o = e.height,
                        i = void 0 === o ? 10 : o,
                        c = e.color,
                        l = void 0 === c ? "currentColor" : c,
                        a = P(e, ["width", "height", "color"]);
                    return (0, n.jsx)("svg", m(function(e) {
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
                    }({}, (0, w.Z)(a)), {
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
                },
                foregroundDarkColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
                foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
                backgroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
                backgroundLightColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
                premiumBackgroundColor: v.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
                premiumForegroundColor: l.Z.unsafe_rawColors.WHITE_400.css
            }), A(D, s.Q.DISCOVERABLE, {
                IconComponent: function(e) {
                    var t = e.width,
                        r = void 0 === t ? 10 : t,
                        o = e.height,
                        i = void 0 === o ? 10 : o,
                        c = e.color,
                        l = void 0 === c ? "currentColor" : c,
                        a = C(e, ["width", "height", "color"]);
                    return (0, n.jsxs)("svg", j(function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(r);
                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable
                            }))));
                            n.forEach((function(t) {
                                _(e, t, r[t])
                            }))
                        }
                        return e
                    }({}, (0, w.Z)(a)), {
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
                },
                foregroundDarkColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
                foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
                backgroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
                backgroundLightColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
                premiumBackgroundColor: v.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
                premiumForegroundColor: l.Z.unsafe_rawColors.WHITE_400.css
            }), A(D, s.Q.NONE, {}), D);

            function G(e) {
                var t = e.guildTraits;
                return (0, n.jsxs)("div", {
                    className: Z().tooltipPremiumFooterContainer,
                    children: [(0, n.jsxs)("div", {
                        className: i()(Z().tooltipPremiumFooterSegment, Z().tooltipPremiumFooterTierSegment),
                        children: [(0, n.jsx)(M, {
                            width: 18,
                            height: 18,
                            className: Z().gemIcon
                        }), (0, n.jsx)(u.Text, {
                            variant: "text-xs/semibold",
                            color: "always-white",
                            children: b.nW(t.premiumTier)
                        })]
                    }), (0, n.jsx)("div", {
                        className: i()(Z().tooltipPremiumFooterSegment),
                        children: (0, n.jsx)(u.Text, {
                            variant: "text-xs/semibold",
                            color: "always-white",
                            children: T.Z.Messages.SERVER_BADGE_PREMIUM_FOOTER_BOOST_COUNT.format({
                                count: t.premiumSubscriberCount
                            })
                        })
                    })]
                })
            }

            function H(e) {
                var t = e.badgeType,
                    r = e.guildTraits,
                    o = function(e, t) {
                        var r = t === f.PZ.PUBLIC ? T.Z.Messages.SERVER_BADGE_DESCRIPTION_ANYONE_CAN_JOIN : T.Z.Messages.SERVER_BADGE_DESCRIPTION_INVITE_ONLY;
                        switch (e) {
                            case s.Q.STAFF:
                                return {
                                    tooltipTitle: T.Z.Messages.INTERNAL_EMPLOYEE_ONLY, tooltipSubtitle: T.Z.Messages.INTERNAL_EMPLOYEE_ONLY, tooltipDescription: T.Z.Messages.INTERNAL_EMPLOYEE_ONLY
                                };
                            case s.Q.VERIFIED:
                                return {
                                    tooltipTitle: T.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipSubtitle: T.Z.Messages.GUILD_VERIFIED, tooltipDescription: r
                                };
                            case s.Q.PARTNERED:
                                return {
                                    tooltipTitle: T.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipSubtitle: T.Z.Messages.GUILD_PARTNERED, tooltipDescription: r
                                };
                            case s.Q.VERIFIED_AND_PARTNERED:
                                return {
                                    tooltipTitle: T.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipSubtitle: T.Z.Messages.GUILD_VERIFIED_AND_PARTNERED, tooltipDescription: r
                                };
                            case s.Q.COMMUNITY:
                                return {
                                    tooltipTitle: T.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipDescription: T.Z.Messages.SERVER_BADGE_DESCRIPTION_INVITE_ONLY
                                };
                            case s.Q.DISCOVERABLE:
                                return {
                                    tooltipTitle: T.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipDescription: T.Z.Messages.SERVER_BADGE_DESCRIPTION_ANYONE_CAN_JOIN
                                };
                            default:
                                return {
                                    tooltipTitle: T.Z.Messages.SERVER_BADGE_TITLE_UNKNOWN
                                }
                        }
                    }(t, r.visibility),
                    i = o.tooltipTitle,
                    c = o.tooltipSubtitle,
                    l = o.tooltipDescription;
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)("div", {
                        className: Z().tooltipBodyContainer,
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
                    }), r.premium ? (0, n.jsx)(G, {
                        guildTraits: r
                    }) : null]
                })
            }

            function F(e) {
                var t = e.guild,
                    r = e.tooltipColor,
                    o = void 0 === r ? u.Tooltip.Colors.BRAND : r,
                    i = e.tooltipPosition,
                    l = e.className,
                    b = e.flowerStarClassName,
                    v = e.iconClassName,
                    g = e.badgeStrokeColor,
                    w = e.badgeColor,
                    E = e.size,
                    m = void 0 === E ? 16 : E,
                    P = e.disableBoostClick,
                    _ = e["aria-label"],
                    j = void 0 !== _ && _,
                    C = (0,
                        c.e7)([y.default, h.ZP], (function() {
                        var e = y.default.getCurrentUser();
                        return h.ZP.isMember(null == t ? void 0 : t.id, null == e ? void 0 : e.id)
                    })),
                    R = (0, c.e7)([d.Z], (function() {
                        return d.Z.theme
                    })),
                    I = (0, f.XX)(t),
                    x = (0, s.i)(I);
                if (x === s.Q.NONE) return null;
                var M, D, L = V[x],
                    S = L.IconComponent,
                    T = L.backgroundDarkColor,
                    U = L.backgroundLightColor,
                    A = L.foregroundDarkColor,
                    G = L.foregroundLightColor,
                    F = L.premiumBackgroundColor,
                    z = L.premiumForegroundColor;
                if (null == S) return null;
                if (I.premium) {
                    M = z;
                    D = F
                }
                var W = (0, a.wj)(R) ? A : G,
                    K = (0, a.wj)(R) ? T : U;
                M = null != M ? M : W;
                D = null != D ? D : K;
                var Y = function(e) {
                    if (I.premium && C && !P) {
                        e.stopPropagation();
                        e.preventDefault();
                        (0, p.f)({
                            guildId: t.id,
                            location: {
                                section: N.jXE.GUILD_HEADER,
                                object: N.qAy.BOOST_GEM_ICON
                            }
                        })
                    }
                };
                return (0, n.jsx)(u.Tooltip, {
                    color: o,
                    position: i,
                    "aria-label": j,
                    text: (0, n.jsx)(H, {
                        badgeType: x,
                        guildTraits: I
                    }),
                    tooltipContentClassName: Z().tooltipRemovePadding,
                    children: function(e) {
                        return (0, n.jsx)(u.Clickable, {
                            onClick: Y,
                            children: (0, n.jsx)(O.Z, B(k({}, e), {
                                className: l,
                                flowerStarClassName: b,
                                color: null != D ? D : w,
                                stroke: g,
                                size: m,
                                children: (0, n.jsx)(S, {
                                    className: v,
                                    color: M
                                })
                            }))
                        })
                    }
                })
            }
        },
        805457: (e, t, r) => {
            r.d(t, {
                Z: () => a
            });
            var n = r(785893),
                o = (r(667294), r(633878));

            function i(e, t, r) {
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

            function a(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    a = e.height,
                    u = void 0 === a ? 24 : a,
                    s = l(e, ["width", "height"]);
                return (0, n.jsxs)("svg", c(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            i(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(s)), {
                    height: u,
                    width: r,
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("path", {
                        d: "m6.3599 4.33.41.84c.02245.04336.03052.09274.02304.14099s-.03013.09287-.06465.1274c-.03453.03453-.07915.05717-.1274.06465s-.09763-.00059-.14099-.02304l-.84-.41c-.03119-.01506-.06537-.02288-.1-.02288s-.06882.00782-.1.02288l-.84.41c-.04336.02245-.09274.03052-.141.02304-.04825-.00748-.09287-.03012-.12739-.06465-.03453-.03453-.05717-.07915-.06465-.1274s.00058-.09763.02304-.14099l.41-.84c.01505-.03119.02287-.06537.02287-.1s-.00782-.06881-.02287-.1l-.41-.84c-.01585-.04253-.01876-.08879-.00836-.13297.01039-.04417.03362-.08429.06676-.11529s.07471-.05151.11948-.05894c.04477-.00742.09074-.00144.13212.0172l.84.41c.03118.01506.06537.02288.1.02288s.06881-.00782.1-.02288l.84-.41c.04336-.02245.09274-.03052.14099-.02304s.09287.03012.1274.06465c.03452.03453.05717.07914.06465.1274.00748.04825-.00059.09763-.02304.14099l-.41.84c-.01211.02846-.01834.05907-.01834.09s.00623.06154.01834.09z",
                        fill: "#ffd836"
                    }), (0, n.jsx)("path", {
                        d: "m12 2.70001-5.45996 5.46v7.67999l5.45996 5.46 5.46-5.46v-7.67999zm2.73 11.99999-2.73 2.74-2.72996-2.73v-5.41999l2.72996-2.73 2.73 2.73z",
                        fill: "#ff73fa"
                    }), (0, n.jsx)("path", {
                        d: "m12 2.70001v3.86l2.73 2.73 2.73-1.13z",
                        fill: "#ffc0ff"
                    }), (0, n.jsx)("path", {
                        d: "m9.27004 14.71-2.73 1.13 5.45996 5.46v-3.86z",
                        fill: "#e655d4"
                    }), (0, n.jsxs)("g", {
                        fill: "#d4e4ff",
                        children: [(0, n.jsx)("path", {
                            d: "m16.2199 17.7h.01c.243 0 .44-.197.44-.44v-.89c0-.243-.197-.44-.44-.44h-.01c-.243 0-.44.197-.44.44v.89c0 .243.197.44.44.44z"
                        }), (0, n.jsx)("path", {
                            d: "m16.2199 21.25h.01c.243 0 .44-.197.44-.44v-.89c0-.243-.197-.44-.44-.44h-.01c-.243 0-.44.197-.44.44v.89c0 .243.197.44.44.44z"
                        }), (0, n.jsx)("path", {
                            d: "m15.3401 18.59v-.01c0-.243-.197-.44-.44-.44h-.89c-.243 0-.44.197-.44.44v.01c0 .243.197.44.44.44h.89c.243 0 .44-.197.44-.44z"
                        }), (0, n.jsx)("path", {
                            d: "m18.8799 18.59v-.01c0-.243-.197-.44-.44-.44h-.89c-.243 0-.44.197-.44.44v.01c0 .243.197.44.44.44h.89c.243 0 .44-.197.44-.44z"
                        })]
                    }), (0, n.jsx)("path", {
                        d: "m9.27002 9.29v5.42l2.72998 2.73 2.73-2.73v-5.42l-2.73-2.73z",
                        fill: "#ffdef9"
                    }), (0, n.jsx)("path", {
                        d: "m14.72 9.28998v.01l-5.42997 5.43002-.01-.01v-1.47l4.69997-4.71002z",
                        fill: "#fff"
                    }), (0, n.jsx)("path", {
                        d: "m14.7201 11.34v1.5l-3.66 3.66-.75-.75z",
                        fill: "#fff"
                    })]
                }))
            }
        },
        127661: (e, t, r) => {
            r.d(t, {
                Z: () => a
            });
            var n = r(785893),
                o = (r(667294), r(633878));

            function i(e, t, r) {
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

            function a(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    a = e.height,
                    u = void 0 === a ? 24 : a,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    p = e.foreground,
                    d = e.backgroundColor,
                    h = l(e, ["width", "height", "color", "foreground", "backgroundColor"]);
                return (0, n.jsxs)("svg", c(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            i(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(h)), {
                    width: r,
                    height: u,
                    viewBox: "0 0 14 14",
                    children: [null != d ? (0, n.jsx)("circle", {
                        r: 5,
                        cx: 7,
                        cy: 7,
                        fill: d
                    }) : null, (0, n.jsx)("path", {
                        fill: f,
                        className: p,
                        d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                    })]
                }))
            }
        },
        901644: (e, t, r) => {
            r.d(t, {
                Z: () => a
            });
            var n = r(785893),
                o = (r(667294), r(633878));

            function i(e, t, r) {
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

            function a(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    a = e.height,
                    u = void 0 === a ? 24 : a,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    p = e.foreground,
                    d = l(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", c(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            i(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(d)), {
                    width: r,
                    height: u,
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: f,
                        className: p,
                        d: "M12 2C6.477 2 2 6.477 2 12C2 17.522 6.477 22 12 22C17.523 22 22 17.522 22 12C22 6.477 17.522 2 12 2ZM16.293 6.293L17.707 7.706L16.414 9L17.707 10.293L16.293 11.706L13.586 9L16.293 6.293ZM6.293 7.707L7.707 6.294L10.414 9L7.707 11.707L6.293 10.294L7.586 9L6.293 7.707ZM18 14C18 16.617 15.14 19 12 19C8.86 19 6 16.617 6 14V13H18V14Z"
                    })
                }))
            }
        },
        816240: (e, t, r) => {
            r.d(t, {
                Z: () => a
            });
            var n = r(785893),
                o = (r(667294), r(633878));

            function i(e, t, r) {
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

            function a(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    a = e.height,
                    u = void 0 === a ? 24 : a,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    p = e.foreground,
                    d = l(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", c(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            i(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(d)), {
                    width: r,
                    height: u,
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        className: p,
                        d: "M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM10 8C10 6.8952 9.1032 6 8 6C6.8944 6 6 6.8952 6 8C6 9.1056 6.8944 10 8 10C9.1032 10 10 9.1056 10 8ZM9 14L6 18H18L15 11L11 16L9 14Z",
                        fill: f
                    })
                }))
            }
        },
        963881: (e, t, r) => {
            r.d(t, {
                Z: () => a
            });
            var n = r(785893),
                o = (r(667294), r(633878));

            function i(e, t, r) {
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

            function a(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    a = e.height,
                    u = void 0 === a ? 24 : a,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    p = e.foreground,
                    d = l(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", c(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            i(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(d)), {
                    width: r,
                    height: u,
                    viewBox: "0 0 24 24",
                    children: (0, n.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, n.jsx)("path", {
                            className: p,
                            fill: f,
                            d: "M10.59 13.41c.41.39.41 1.03 0 1.42-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0 5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.982 2.982 0 0 0 0-4.24 2.982 2.982 0 0 0-4.24 0l-3.53 3.53a2.982 2.982 0 0 0 0 4.24zm2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0 5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.982 2.982 0 0 0 0 4.24 2.982 2.982 0 0 0 4.24 0l3.53-3.53a2.982 2.982 0 0 0 0-4.24.973.973 0 0 1 0-1.42z"
                        }), (0, n.jsx)("rect", {
                            width: "24",
                            height: "24"
                        })]
                    })
                }))
            }
        },
        855595: (e, t, r) => {
            r.d(t, {
                Z: () => a
            });
            var n = r(785893),
                o = (r(667294), r(633878));

            function i(e, t, r) {
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

            function a(e) {
                var t = e.width,
                    r = void 0 === t ? 20 : t,
                    a = e.height,
                    u = void 0 === a ? 23 : a,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    p = e.foreground,
                    d = l(e, ["width", "height", "color", "foreground"]);
                return (0,
                    n.jsx)("svg", c(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            i(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(d)), {
                    width: r,
                    height: u,
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
            }
        },
        575562: (e, t, r) => {
            r.d(t, {
                Z: () => a
            });
            var n = r(785893),
                o = (r(667294), r(633878));

            function i(e, t, r) {
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

            function a(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    a = e.height,
                    u = void 0 === a ? 24 : a,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    p = e.foreground,
                    d = l(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", c(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            i(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(d)), {
                    width: r,
                    height: u,
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: f,
                        className: p,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M17 6V6.999H7C5.896 6.999 5 7.895 5 8.999V16H3C1.895 16 1 15.104 1 14V6C1 4.896 1.895 4 3 4H15C16.104 4 17 4.896 17 6ZM7 10.999C7 9.89502 7.896 8.99902 9 8.99902H21C22.104 8.99902 23 9.89502 23 10.999V18.999C23 20.103 22.104 20.999 21 20.999H9C7.896 20.999 7 20.103 7 18.999V10.999ZM11.828 14.462L9 18.999H21L17.023 12.618L13.85 17.706L11.828 14.462Z"
                    })
                }))
            }
        },
        933850: (e, t, r) => {
            r.d(t, {
                Z: () => a
            });
            var n = r(785893),
                o = (r(667294), r(633878));

            function i(e, t, r) {
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

            function a(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    a = e.height,
                    u = void 0 === a ? 24 : a,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    p = e.foreground,
                    d = l(e, ["width", "height", "color", "foreground"]);
                return (0,
                    n.jsx)("svg", c(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            i(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(d)), {
                    width: r,
                    height: u,
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: f,
                        className: p,
                        d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
                    })
                }))
            }
        },
        796938: (e, t, r) => {
            r.d(t, {
                Z: () => a
            });
            var n = r(785893),
                o = (r(667294), r(633878));

            function i(e, t, r) {
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

            function a(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    a = e.height,
                    u = void 0 === a ? 24 : a,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    p = e.foreground,
                    d = l(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", c(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            i(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(d)), {
                    width: r,
                    height: u,
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        className: p,
                        fill: f,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                        "aria-hidden": !0
                    })
                }))
            }
        },
        516909: (e, t, r) => {
            r.d(t, {
                Z: () => a
            });
            var n = r(785893),
                o = (r(667294), r(633878));

            function i(e, t, r) {
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

            function a(e) {
                var t = e.width,
                    r = void 0 === t ? 32 : t,
                    a = e.height,
                    u = void 0 === a ? 32 : a,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    p = l(e, ["width", "height", "color"]);
                return (0, n.jsx)("svg", c(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            i(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(p)), {
                    width: r,
                    height: u,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: (0, n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                        fill: f
                    })
                }))
            }
        },
        71236: (e, t, r) => {
            r.d(t, {
                Z: () => a
            });
            var n = r(785893),
                o = (r(667294), r(633878));

            function i(e, t, r) {
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

            function a(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    a = e.height,
                    u = void 0 === a ? 24 : a,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    p = e.foreground,
                    d = l(e, ["width", "height", "color", "foreground"]);
                return (0,
                    n.jsx)("svg", c(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            i(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(d)), {
                    width: r,
                    height: u,
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: f,
                        className: p,
                        d: "M21.924 8.61789C21.77 8.24489 21.404 8.00089 21 8.00089H15.618L12.894 2.55389C12.555 1.87689 11.444 1.87689 11.105 2.55389L8.38199 8.00089H2.99999C2.59599 8.00089 2.22999 8.24489 2.07599 8.61789C1.92199 8.99089 2.00699 9.42289 2.29299 9.70789L6.87699 14.2919L5.03899 20.7269C4.92399 21.1299 5.07199 21.5619 5.40999 21.8089C5.74999 22.0569 6.20699 22.0659 6.55399 21.8329L12 18.2029L17.445 21.8329C17.613 21.9449 17.806 22.0009 18 22.0009C18.207 22.0009 18.414 21.9369 18.59 21.8089C18.928 21.5619 19.076 21.1299 18.961 20.7269L17.123 14.2919L21.707 9.70789C21.993 9.42289 22.078 8.99089 21.924 8.61789Z"
                    })
                }))
            }
        },
        521798: (e, t, r) => {
            r.d(t, {
                Z: () => p
            });
            var n = r(785893),
                o = (r(667294), r(294184)),
                i = r.n(o),
                c = r(633878),
                l = r(658695),
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

            function s(e, t) {
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

            function f(e, t) {
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

            function p(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    l = void 0 === o ? 24 : o,
                    p = e.color,
                    d = void 0 === p ? "currentColor" : p,
                    h = e.winking,
                    y = void 0 !== h && h,
                    b = e.foreground,
                    O = f(e, ["width", "height", "color", "winking", "foreground"]);
                return (0, n.jsxs)("svg", s(function(e) {
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
                }({
                    width: r,
                    height: l
                }, (0, c.Z)(O)), {
                    viewBox: "0 0 20 20",
                    children: [(0, n.jsx)("path", {
                        fill: d,
                        className: i()(b, u({}, a().hidden, y)),
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M12.0002 0.662583V5.40204C12.0002 6.83974 13.1605 7.99981 14.5986 7.99981H19.3393C19.9245 7.99981 20.222 7.29584 19.8055 6.8794L13.1209 0.196569C12.7043 -0.219868 12.0002 0.0676718 12.0002 0.662583ZM14.5759 10.0282C12.0336 10.0282 9.96986 7.96441 9.96986 5.42209V0.0583083H1.99397C0.897287 0.0583083 0 0.955595 0 2.05228V18.0041C0 19.1007 0.897287 19.998 1.99397 19.998H17.9457C19.0424 19.998 19.9397 19.1007 19.9397 18.0041V10.0282H14.5759ZM11.9998 12.2201C11.9998 13.3245 11.1046 14.2198 10.0002 14.2198C8.8958 14.2198 8.00052 13.3245 8.00052 12.2201H6.66742C6.66742 14.0607 8.15955 15.5529 10.0002 15.5529C11.8408 15.5529 13.3329 14.0607 13.3329 12.2201H11.9998ZM4.44559 13.331C4.44559 13.9446 3.94821 14.442 3.33467 14.442C2.72112 14.442 2.22375 13.9446 2.22375 13.331C2.22375 12.7175 2.72112 12.2201 3.33467 12.2201C3.94821 12.2201 4.44559 12.7175 4.44559 13.331ZM16.6657 14.442C17.2793 14.442 17.7766 13.9446 17.7766 13.331C17.7766 12.7175 17.2793 12.2201 16.6657 12.2201C16.0522 12.2201 15.5548 12.7175 15.5548 13.331C15.5548 13.9446 16.0522 14.442 16.6657 14.442Z"
                    }), (0, n.jsx)("path", {
                        fill: d,
                        className: i()(b, u({}, a().hidden, !y)),
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M12.0002 0.662583V5.40204C12.0002 6.83974 13.1605 7.99981 14.5986 7.99981H19.3393C19.9245 7.99981 20.222 7.29584 19.8055 6.8794L13.1209 0.196569C12.7043 -0.219868 12.0002 0.0676718 12.0002 0.662583ZM14.5759 10.0282C12.0336 10.0282 9.96986 7.96441 9.96986 5.42209V0.0583083H1.99397C0.897287 0.0583083 0 0.955595 0 2.05228V18.0041C0 19.1007 0.897287 19.998 1.99397 19.998H17.9457C19.0424 19.998 19.9397 19.1007 19.9397 18.0041V10.0282H14.5759ZM12 13H11.2H8.8H8C8 14.1046 8.89543 15 10 15C11.1046 15 12 14.1046 12 13ZM17.7766 13.331C17.7766 13.9446 17.2793 14.442 16.6657 14.442C16.0522 14.442 15.5548 13.9446 15.5548 13.331C15.5548 12.7175 16.0522 12.2201 16.6657 12.2201C17.2793 12.2201 17.7766 12.7175 17.7766 13.331ZM2 12.2361L2.53532 11L5.62492 12.7835C5.79161 12.8797 5.79161 13.1203 5.62492 13.2165L2.53532 15L2 13.7639L3.32339 13L2 12.2361Z"
                    })]
                }))
            }
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