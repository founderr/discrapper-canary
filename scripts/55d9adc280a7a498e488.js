(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [63820, 58093, 84832, 45887, 53935, 57678, 58621, 33973, 74996], {
        737264: e => {
            "use strict";
            e.exports.Q = function(e) {
                var t, n = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(e);
                if (!n) return null;
                n.shift();
                var r = null,
                    i = [];
                if (n[2]) {
                    r = (t = n[2].split("-")).shift();
                    i = t
                }
                var a = [];
                n[5] && (a = n[5].split("-")).shift();
                var o = [];
                if (n[6]) {
                    (t = n[6].split("-")).shift();
                    for (var u, l = []; t.length;) {
                        var c = t.shift();
                        if (1 === c.length)
                            if (u) {
                                o.push({
                                    singleton: u,
                                    extension: l
                                });
                                u = c;
                                l = []
                            } else u = c;
                        else l.push(c)
                    }
                    o.push({
                        singleton: u,
                        extension: l
                    })
                }
                var s = [];
                if (n[7]) {
                    (s = n[7].split("-")).shift();
                    s.shift()
                }
                var f = [];
                n[8] && (f = n[8].split("-")).shift();
                return {
                    langtag: {
                        language: {
                            language: r,
                            extlang: i
                        },
                        script: n[3] || null,
                        region: n[4] || null,
                        variant: a,
                        extension: o,
                        privateuse: s
                    },
                    privateuse: f,
                    grandfathered: {
                        irregular: n[0] || null,
                        regular: n[1] || null
                    }
                }
            }
        },
        652411: (e, t, n) => {
            "use strict";
            n.d(t, {
                O_: () => I,
                qA: () => f,
                Ji: () => N,
                uR: () => P
            });
            var r = n(667294),
                i = n(468811),
                a = n(294184),
                o = n.n(a);

            function u(e, t) {
                var n = e.x,
                    r = e.y;
                return n > t.x && n < t.x + t.width && r > t.y && r < t.y + t.height
            }

            function l(e, t) {
                return e * t * t * (t > 0 ? -1 : 1)
            }
            var c = function() {
                    function e(e) {
                        this.id = e.id, this.position = e.position, this.velocity = e.velocity, this.rotation = e.rotation, this.dragCoefficient = e.dragCoefficient, this.size = e.size, this.opacity = e.opacity, this.spriteX = e.spriteX, this.spriteY = e.spriteY, this.spriteWidth = e.spriteWidth, this.spriteHeight = e.spriteHeight, this._lastUpdatedAt = Date.now()
                    }
                    return e.prototype.getNewForces = function(e, t) {
                        var n = e.wind * t,
                            r = -e.gravity * t;
                        return {
                            x: n + l(this.dragCoefficient.x, this.velocity.x),
                            y: r + l(this.dragCoefficient.y, this.velocity.y)
                        }
                    }, e.prototype.update = function(e) {
                        var t = Date.now(),
                            n = (t - this._lastUpdatedAt) / 100;
                        this.rotation.update(n), this.dragCoefficient.update(n);
                        var r = this.getNewForces(e, n),
                            i = r.x,
                            a = r.y;
                        this.velocity.update(n), this.velocity.x += i, this.velocity.y += a, this.position.update(n), this.position.x += this.velocity.x * n, this.position.y += this.velocity.y * n, this.size.update(n), this.opacity.update(n), this._lastUpdatedAt = t
                    }, e.prototype.previewPositionUpdate = function(e, t) {
                        var n = t / 100,
                            r = this.velocity.previewUpdate(n),
                            i = this.getNewForces(e, n),
                            a = i.x,
                            o = i.y;
                        r.x += a, r.y += o;
                        var u = this.position.previewUpdate(n);
                        return u.x += r.x * n, u.y += r.y * n, u
                    }, e.prototype.draw = function(e, t) {
                        t.save(), t.globalAlpha = this.opacity.value, t.setTransform((new DOMMatrix).translateSelf(this.position.x * n.g.devicePixelRatio, this.position.y * n.g.devicePixelRatio).rotateSelf(this.rotation.x, this.rotation.y, this.rotation.z)),
                            t.drawImage(e, this.spriteX, this.spriteY, this.spriteWidth, this.spriteHeight, -this.width / 2 * n.g.devicePixelRatio, -this.height / 2 * n.g.devicePixelRatio, this.width * n.g.devicePixelRatio, this.height * n.g.devicePixelRatio), t.restore()
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
                v = function(e, t) {
                    return v = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    }, v(e, t)
                };

            function h(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function n() {
                    this.constructor = e
                }
                v(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }
            var d = function() {
                return d = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }, d.apply(this, arguments)
            };
            var p = function(e) {
                    this.value = e
                },
                y = function() {
                    function e(e, t) {
                        this._x = e, this._y = t
                    }
                    return e.prototype.update = function(e) {
                            this._x.update(e), this._y.update(e)
                        },
                        e.prototype.previewUpdate = function(e) {
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
                    return h(t, e), t.prototype.update = function(t) {
                        e.prototype.update.call(this, t), this._z.update(t)
                    }, t.prototype.previewUpdate = function(t) {
                        var n = e.prototype.previewUpdate.call(this, t);
                        return d(d({}, n), {
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
                    return h(t, e), t.prototype.update = function() {}, t.prototype.previewUpdate = function() {
                        return this.value
                    }, t
                }(p),
                b = function(e) {
                    function t(t, n) {
                        var r = e.call(this, t) || this;
                        return r.addValue = n, r
                    }
                    return h(t, e), t.prototype.update = function(e) {
                        this.value = this.previewUpdate(e)
                    }, t.prototype.previewUpdate = function(e) {
                        return this.value + this.addValue * e
                    }, t
                }(p),
                w = function(e) {
                    function t(t, n, r, i, a, o) {
                        var u = e.call(this, t) || this;
                        u.min = n, u.max = r, u.duration = i;
                        var l = u.value / (u.max - u.min) * u.duration,
                            c = isNaN(l) ? 0 : l;
                        return u.timePassed = c < 0 ? u.duration - c : c, u.directionMultiplier = a, u.easingFunction = o, u
                    }
                    return h(t, e), t.prototype.update = function(e) {
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
                            a = this.easingFunction(r, this.min, t, this.duration);
                        return [isNaN(a) ? 0 : a, r, i]
                    }, t
                }(p);

            function x(e, t) {
                return e === t ? e : Math.random() * (t - e + 1) + e
            }

            function A(e) {
                var t = Math.floor(x(0, e.length - 1));
                return [e[t], t]
            }

            function C(e, t) {
                return A([e, t])[0]
            }

            function S(e) {
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

            function M(e) {
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
                            return new w(x(e.minValue, e.maxValue), x(e.minStart, e.maxStart), x(e.minFinal, e.maxFinal), x(e.minDuration, e.maxDuration), C(e.minDirection, e.maxDirection), A(e.easingFunctions)[0])
                    }
                }(d(d({}, e), {
                    valueType: "number"
                }))
            }

            function R(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            var t = S(e.value);
                            return new y(new m(t.x), new m(t.y));
                        case "static-random":
                            var n = S(e.minValue),
                                r = S(e.maxValue);
                            return new y(new m(x(n.x, r.x)), new m(x(n.y, r.y)));
                        case "linear":
                            t = S(e.value);
                            var i = S(e.addValue);
                            return new y(new b(t.x, i.x), new b(t.y, i.y));
                        case "linear-random":
                            n = S(e.minValue), r = S(e.maxValue);
                            var a = S(e.minAddValue),
                                o = S(e.maxAddValue);
                            return new y(new b(x(n.x, r.x), x(a.x, o.x)), new b(x(n.y, r.y), x(a.x, o.x)));
                        case "oscillating":
                            t = S(e.value);
                            var u = S(e.start),
                                l = S(e.final),
                                c = S(e.duration),
                                s = S(e.direction);
                            return new y(new w(t.x, u.x, l.x, c.x, s.x, e.easingFunction), new w(t.y, u.y, l.y, c.x, s.y, e.easingFunction));
                        case "oscillating-random":
                            n = S(e.minValue), r = S(e.maxValue);
                            var f = S(e.minStart),
                                v = S(e.maxStart),
                                h = S(e.minFinal),
                                d = S(e.maxFinal),
                                p = S(e.minDuration),
                                g = S(e.maxDuration),
                                E = S(e.minDirection),
                                M = S(e.maxDirection);
                            return new y(new w(x(n.x, r.x), x(f.x, v.x), x(h.x, d.x), x(p.x, g.x), C(E.x, M.x), A(e.easingFunctions)[0]), new w(x(n.y, r.y), x(f.y, v.y), x(h.y, d.y), x(p.y, g.y), C(E.y, M.y), A(e.easingFunctions)[0]))
                    }
                }(d(d({}, e), {
                    valueType: "Vector2"
                }))
            }

            function O(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            var t = E(e.value);
                            return new g(new m(t.x), new m(t.y), new m(t.z));
                        case "static-random":
                            var n = E(e.minValue),
                                r = E(e.maxValue);
                            return new g(new m(x(n.x, r.x)), new m(x(n.y, r.y)), new m(x(n.z, r.z)));
                        case "linear":
                            t = E(e.value);
                            var i = E(e.addValue);
                            return new g(new b(t.x, i.x), new b(t.y, i.y), new b(t.z, i.z));
                        case "linear-random":
                            n = E(e.minValue), r = E(e.maxValue);
                            var a = E(e.minAddValue),
                                o = E(e.maxAddValue);
                            return new g(new b(x(n.x, r.x), x(a.x, o.x)), new b(x(n.y, r.y), x(a.y, o.y)), new b(x(n.z, r.z), x(a.z, o.z)));
                        case "oscillating":
                            t = E(e.value);
                            var u = E(e.start),
                                l = E(e.final),
                                c = E(e.duration),
                                s = E(e.direction);
                            return new g(new w(t.x, u.x, l.x, c.x, s.x, e.easingFunction), new w(t.y, u.y, l.y, c.z, s.y, e.easingFunction), new w(t.z, u.z, l.z, c.z, s.z, e.easingFunction));
                        case "oscillating-random":
                            n = E(e.minValue), r = E(e.maxValue);
                            var f = E(e.minStart),
                                v = E(e.maxStart),
                                h = E(e.minFinal),
                                d = E(e.maxFinal),
                                p = E(e.minDuration),
                                y = E(e.maxDuration),
                                S = E(e.minDirection),
                                M = E(e.maxDirection);
                            return new g(new w(x(n.x, r.x), x(f.x, v.x), x(h.x, d.x), x(p.x, y.x), C(S.x, M.x), A(e.easingFunctions)[0]), new w(x(n.y, r.y), x(f.y, v.y), x(h.y, d.y), x(p.y, y.y), C(S.y, M.y), A(e.easingFunctions)[0]), new w(x(n.z, r.z), x(f.z, v.z), x(h.z, d.z), x(p.z, y.z), C(S.z, M.z), A(e.easingFunctions)[0]))
                    }
                }(d(d({}, e), {
                    valueType: "Vector3"
                }))
            }

            function T(e, t, n, r, i) {
                var a = function(e, t) {
                        return d(d({
                            id: t
                        }, s), e)
                    }(t, e),
                    o = R(a.size),
                    u = function(e, t) {
                        if (null != e) {
                            var n = t.sprites.findIndex((function(t) {
                                return n = t, "string" == typeof(r = e) ? n.src === r && n.colorize : n.src === r.src && n.colorize === r.colorize;
                                var n, r
                            }));
                            if (-1 !== n) return [e, n]
                        }
                        return A(t.sprites)
                    }(r, n),
                    l = u[0],
                    f = u[1],
                    v = function(e, t, n) {
                        if (! function(e) {
                                return "string" == typeof e || e.colorize
                            }(e)) return 0;
                        var r = null != t ? n.colors.findIndex((function(e) {
                            return e === t
                        })) : -1;
                        return -1 !== r ? r : Math.floor(x(0, n.colors.length - 1))
                    }(null != r ? r : l, i, n);
                return new c({
                    id: e,
                    position: R(a.position),
                    velocity: R(a.velocity),
                    rotation: O(a.rotation),
                    dragCoefficient: R(a.dragCoefficient),
                    size: o,
                    opacity: M(a.opacity),
                    spriteX: v * n.spriteWidth + 2 * v,
                    spriteY: f * n.spriteHeight + 2 * f,
                    spriteWidth: n.spriteWidth,
                    spriteHeight: n.spriteHeight
                })
            }
            var I = r.forwardRef((function(e, t) {
                var a = e.className,
                    o = e.environment,
                    l = e.onClick,
                    c = e.onMouseDown,
                    s = e.onMouseMove,
                    f = e.onMouseUp,
                    v = e.onBeforeRender,
                    h = e.onAfterRender,
                    p = function(e, t) {
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
                                t.clearRect(0, 0, e.width, e.height), null == v || v(t), g.current.forEach((function(n, r) {
                                    var i = n.confetti,
                                        a = n.spriteCanvas;
                                    i.update(o), i.draw(a, t), i.shouldDestroy(e, o) && g.current.delete(r)
                                })), null == h || h(t), g.current.size > 0 ? m.current = window.requestAnimationFrame(x) : (t.clearRect(0, 0, e.width, e.height), m.current = null);
                                var n = Date.now();
                                0 !== b.current && (w.current = 1e3 / (n - b.current)), b.current = n
                            }
                        }
                    }), [o, h, v]);
                r.useEffect((function() {
                    null != m.current && (window.cancelAnimationFrame(m.current), m.current = window.requestAnimationFrame(x))
                }), [x]);
                var A = r.useCallback((function(e, t) {
                        g.current.set(e.id, {
                            confetti: e,
                            spriteCanvas: t
                        }), null == m.current && x()
                    }), [x]),
                    C = r.useCallback((function(e, t, n, r, a) {
                        var o, u = T(null !== (o = e.id) && void 0 !== o ? o : (0, i.v4)(), e, n, r, a);
                        return A(u, t), u
                    }), [A]),
                    S = r.useCallback((function(e) {
                        g.current.delete(e)
                    }), []),
                    E = r.useCallback((function() {
                        return g.current.clear()
                    }), []),
                    M = r.useCallback((function() {
                        return y.current
                    }), []);
                r.useImperativeHandle(t, (function() {
                    return {
                        createConfetti: C,
                        addConfetti: A,
                        deleteConfetti: S,
                        clearConfetti: E,
                        getCanvas: M
                    }
                }), [C, A, S, E, M]);
                var R = r.useCallback((function(e, t) {
                        var n, r, i = t.clickHandler,
                            a = t.mouseHandler;
                        if (null != i || null != a) {
                            var l = null === (n = y.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                            if (null != l) {
                                var c = function(e, t) {
                                    if (null == t) throw new Error("element should not be null");
                                    var n = t.getBoundingClientRect();
                                    return {
                                        x: e.clientX - n.left,
                                        y: e.clientY - n.top
                                    }
                                }(e, y.current);
                                if (u(c, {
                                        x: l.left,
                                        y: l.top,
                                        width: l.width,
                                        height: l.height
                                    })) {
                                    if (null != a) return a(e);
                                    if (null != i) {
                                        var s = -1e3 / w.current * 2,
                                            f = function(e, t) {
                                                for (var n = 0, r = Array.from(e.values()); n < r.length; n++) {
                                                    var i = r[n];
                                                    if (null != i && t(i)) return i
                                                }
                                                return null
                                            }(g.current, (function(e) {
                                                var t = e.confetti,
                                                    n = t.previewPositionUpdate(o, s);
                                                return u(c, {
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
                    }), [o]),
                    O = r.useCallback((function(e) {
                        return R(e, {
                            clickHandler: l
                        })
                    }), [R, l]),
                    I = r.useCallback((function(e) {
                        return R(e, {
                            clickHandler: c
                        })
                    }), [R, c]),
                    N = r.useCallback((function(e) {
                        return R(e, {
                            mouseHandler: s
                        })
                    }), [R, s]),
                    P = r.useCallback((function(e) {
                        return R(e, {
                            mouseHandler: f
                        })
                    }), [R, f]);
                return r.useEffect((function() {
                    var e = function(e, t, n) {
                        null != n && window.addEventListener(e, t)
                    };
                    return e("click", O, l), e("mousedown", I, c), e("mousemove", N, s), e("mouseup", P, f),
                        function() {
                            window.removeEventListener("click", O), window.removeEventListener("mousedown", I), window.removeEventListener("mousemove", N), window.removeEventListener("mouseup", N)
                        }
                }), [O, I, N, P, l, c, s, f]), r.useEffect((function() {
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
                }), []), r.createElement("canvas", d({}, p, {
                    className: a,
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
            var N = r.forwardRef((function(e, t) {
                var n, a = e.className,
                    u = e.visible,
                    l = void 0 !== u && u,
                    c = e.sprites,
                    s = e.colors,
                    f = e.spriteWidth,
                    v = e.spriteHeight,
                    h = r.useRef(null),
                    d = r.useRef([]),
                    p = r.useRef(!1),
                    y = r.useRef({});
                r.useImperativeHandle(t, (function() {
                    return {
                        getCanvas: function() {
                            return h.current
                        },
                        getCreateData: function() {
                            return {
                                sprites: d.current,
                                colors: s,
                                spriteWidth: f,
                                spriteHeight: v
                            }
                        },
                        addReadyListener: function(e) {
                            var t = (0, i.v4)();
                            return y.current[t] = e, t
                        },
                        removeReadyListener: function(e) {
                            delete y.current[e]
                        },
                        isReady: p.current
                    }
                }), [s, v, f]);
                var g = r.useCallback((function() {
                        var e = h.current,
                            t = null == e ? void 0 : e.getContext("2d", {
                                willReadFrequently: !0
                            });
                        null != t && null != e && (t.clearRect(0, 0, e.width, e.height),
                            d.current.forEach((function(e, n) {
                                var r = function(r, i) {
                                    var a = f * i + 2 * i,
                                        o = v * n + 2 * n;
                                    if (t.drawImage(e.image, a, o, f, v), null != r) {
                                        for (var u = t.getImageData(a, o, f, v), l = function(e) {
                                                "#" === e[0] && (e = e.slice(1));
                                                var t = parseInt(e, 16);
                                                return {
                                                    r: t >> 16 & 255,
                                                    g: t >> 8 & 255,
                                                    b: 255 & t
                                                }
                                            }(r), c = 0; c < u.data.length; c += 4) u.data[c] = l.r, u.data[c + 1] = l.g, u.data[c + 2] = l.b;
                                        t.putImageData(u, a, o)
                                    }
                                };
                                e.colorize ? s.forEach((function(e, t) {
                                    return r(e, t)
                                })) : r(null, 0)
                            })))
                    }), [s, v, f]),
                    m = r.useCallback((function() {
                        var e = c.map((function(e) {
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
                            d.current = e.map((function(e) {
                                return {
                                    colorize: e.colorize,
                                    image: e.image,
                                    src: e.src
                                }
                            }))
                        }))
                    }), [c]),
                    b = r.useCallback((function(e) {
                        for (var t in y.current) y.current[t](e)
                    }), []),
                    w = r.useCallback((function() {
                        return function(e, t, n, r) {
                            return new(n || (n = Promise))((function(i, a) {
                                function o(e) {
                                    try {
                                        l(r.next(e))
                                    } catch (e) {
                                        a(e)
                                    }
                                }

                                function u(e) {
                                    try {
                                        l(r.throw(e))
                                    } catch (e) {
                                        a(e)
                                    }
                                }

                                function l(e) {
                                    var t;
                                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                        e(t)
                                    }))).then(o, u)
                                }
                                l((r = r.apply(e, t || [])).next())
                            }))
                        }(void 0, void 0, void 0, (function() {
                            return function(e, t) {
                                var n, r, i, a, o = {
                                    label: 0,
                                    sent: function() {
                                        if (1 & i[0]) throw i[1];
                                        return i[1]
                                    },
                                    trys: [],
                                    ops: []
                                };
                                return a = {
                                    next: u(0),
                                    throw: u(1),
                                    return: u(2)
                                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                                    return this
                                }), a;

                                function u(u) {
                                    return function(l) {
                                        return function(u) {
                                            if (n) throw new TypeError("Generator is already executing.");
                                            for (; a && (a = 0, u[0] && (o = 0)), o;) try {
                                                if (n = 1, r && (i = 2 & u[0] ? r.return : u[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, u[1])).done) return i;
                                                switch (r = 0, i && (u = [2 & u[0], i.value]), u[0]) {
                                                    case 0:
                                                    case 1:
                                                        i = u;
                                                        break;
                                                    case 4:
                                                        return o.label++, {
                                                            value: u[1],
                                                            done: !1
                                                        };
                                                    case 5:
                                                        o.label++, r = u[1], u = [0];
                                                        continue;
                                                    case 7:
                                                        u = o.ops.pop(), o.trys.pop();
                                                        continue;
                                                    default:
                                                        if (!(i = o.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== u[0] && 2 !== u[0])) {
                                                            o = 0;
                                                            continue
                                                        }
                                                        if (3 === u[0] && (!i || u[1] > i[0] && u[1] < i[3])) {
                                                            o.label = u[1];
                                                            break
                                                        }
                                                        if (6 === u[0] && o.label < i[1]) {
                                                            o.label = i[1], i = u;
                                                            break
                                                        }
                                                        if (i && o.label < i[2]) {
                                                            o.label = i[2], o.ops.push(u);
                                                            break
                                                        }
                                                        i[2] && o.ops.pop(), o.trys.pop();
                                                        continue
                                                }
                                                u = t.call(e, o)
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
                                        }([u, l])
                                    }
                                }
                            }(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, m()];
                                    case 1:
                                        return e.sent(), g(), p.current = !0, b(!0), [2]
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
                    null != h.current && (h.current.width = (f + 2) * Math.max(s.length, 1), h.current.height = (v + 2) * c.length)
                }), [s.length, v, f, c.length]), r.createElement("canvas", {
                    ref: h,
                    className: o()(a, (n = {}, n["SpriteCanvas-module_spriteCanvasHidden__ndzQV"] = !l, n))
                })
            }));

            function P(e, t) {
                var n, i = r.useState(null !== (n = null == t ? void 0 : t.isReady) && void 0 !== n && n),
                    a = i[0],
                    o = i[1];
                r.useEffect((function() {
                    var e = null == t ? void 0 : t.addReadyListener(o);
                    return function() {
                        null != e && (null == t || t.removeReadyListener(e))
                    }
                }), [t]);
                var u = r.useCallback((function(n, r) {
                        var i = void 0 === r ? {} : r,
                            a = i.sprite,
                            o = i.color,
                            u = null == t ? void 0 : t.getCreateData(),
                            l = null == t ? void 0 : t.getCanvas();
                        if (null != l && null != u && 0 !== u.sprites.length) return null == e ? void 0 : e.createConfetti(n, l, u, a, o)
                    }), [e, t]),
                    l = r.useCallback((function(e, t, n) {
                        for (var r = [], i = 0; i < t; i++) {
                            var a = u(e, n);
                            a && r.push(a)
                        }
                        return r
                    }), [u]),
                    c = r.useCallback((function(n) {
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
                        createConfetti: u,
                        createMultipleConfetti: l,
                        addConfetti: c,
                        clearConfetti: f,
                        deleteConfetti: s,
                        isReady: a && null != t && null != e
                    }
                }), [c, f, e, u, l, s, a, t])
            }
        },
        824390: e => {
            "use strict";
            e.exports = function(e, t) {
                var n = t.length,
                    r = e.length;
                if (r > n) return !1;
                if (r === n) return e === t;
                e: for (var i = 0, a = 0; i < r; i++) {
                    for (var o = e.charCodeAt(i); a < n;)
                        if (t.charCodeAt(a++) === o) continue e;
                    return !1
                }
                return !0
            }
        },
        753074: e => {
            "use strict";
            var t = {
                    childContextTypes: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                n = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    arguments: !0,
                    arity: !0
                },
                r = "function" == typeof Object.getOwnPropertySymbols;
            e.exports = function(e, i, a) {
                if ("string" != typeof i) {
                    var o = Object.getOwnPropertyNames(i);
                    r && (o = o.concat(Object.getOwnPropertySymbols(i)));
                    for (var u = 0; u < o.length; ++u)
                        if (!(t[o[u]] || n[o[u]] || a && a[o[u]])) try {
                            e[o[u]] = i[o[u]]
                        } catch (e) {}
                }
                return e
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
                    a = i(e) ? Array(e.length) : [];
                r(e, (function(e, r, i) {
                    a[++n] = t(e, r, i)
                }));
                return a
            }
        },
        882689: (e, t, n) => {
            var r = n(829932),
                i = n(267206),
                a = n(269199),
                o = n(571131),
                u = n(307518),
                l = n(285022),
                c = n(406557);
            e.exports = function(e, t, n) {
                var s = -1;
                t = r(t.length ? t : [c], u(i));
                var f = a(e, (function(e, n, i) {
                    return {
                        criteria: r(t, (function(t) {
                            return t(e)
                        })),
                        index: ++s,
                        value: e
                    }
                }));
                return o(f, (function(e, t) {
                    return l(e, t, n)
                }))
            }
        },
        105976: (e, t, n) => {
            var r = n(406557),
                i = n(545357),
                a = n(430061);
            e.exports = function(e, t) {
                return a(i(e, t, r), e + "")
            }
        },
        356560: (e, t, n) => {
            var r = n(575703),
                i = n(538777),
                a = n(406557),
                o = i ? function(e, t) {
                    return i(e, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: r(t),
                        writable: !0
                    })
                } : a;
            e.exports = o
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
                        a = e == e,
                        o = r(e),
                        u = void 0 !== t,
                        l = null === t,
                        c = t == t,
                        s = r(t);
                    if (!l && !s && !o && e > t || o && u && c && !l && !s || i && u && c || !n && c || !a) return 1;
                    if (!i && !o && !s && e < t || s && n && a && !i && !o || l && n && a || !u && a || !c) return -1
                }
                return 0
            }
        },
        285022: (e, t, n) => {
            var r = n(626393);
            e.exports = function(e, t, n) {
                for (var i = -1, a = e.criteria, o = t.criteria, u = a.length, l = n.length; ++i < u;) {
                    var c = r(a[i], o[i]);
                    if (c) {
                        return i >= l ? c : c * ("desc" == n[i] ? -1 : 1)
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
                    for (var a = arguments, o = -1, u = i(a.length - t, 0), l = Array(u); ++o < u;) l[o] = a[t + o];
                    o = -1;
                    for (var c = Array(t + 1); ++o < t;) c[o] = a[o];
                    c[t] = n(l);
                    return r(e, this, c)
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
                        a = 16 - (i - r);
                    r = i;
                    if (a > 0) {
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
                    a = i - 1;
                t = void 0 === t ? i : t;
                for (; ++n < t;) {
                    var o = r(n, a),
                        u = e[o];
                    e[o] = e[n];
                    e[n] = u
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
                a = n(701469);
            e.exports = function(e) {
                return (a(e) ? r : i)(e)
            }
        },
        189734: (e, t, n) => {
            var r = n(121078),
                i = n(882689),
                a = n(105976),
                o = n(816612),
                u = a((function(e, t) {
                    if (null == e) return [];
                    var n = t.length;
                    n > 1 && o(e, t[0], t[1]) ? t = [] : n > 2 && o(t[0], t[1], t[2]) && (t = [t[0]]);
                    return i(e, r(t, 1), [])
                }));
            e.exports = u
        },
        252628: (e, t, n) => {
            var r = n(747415),
                i = n(3674);
            e.exports = function(e) {
                return null == e ? [] : r(e, i(e))
            }
        },
        16243: e => {
            if (!t) var t = {
                map: function(e, t) {
                    var n = {};
                    return t ? e.map((function(e, r) {
                        n.index = r;
                        return t.call(n, e)
                    })) : e.slice()
                },
                naturalOrder: function(e, t) {
                    return e < t ? -1 : e > t ? 1 : 0
                },
                sum: function(e, t) {
                    var n = {};
                    return e.reduce(t ? function(e, r, i) {
                        n.index = i;
                        return e + t.call(n, r)
                    } : function(e, t) {
                        return e + t
                    }, 0)
                },
                max: function(e, n) {
                    return Math.max.apply(null, n ? t.map(e, n) : e)
                }
            };
            var n = function() {
                function e(e, t, n) {
                    return (e << 10) + (t << 5) + n
                }

                function n(e) {
                    var t = [],
                        n = !1;

                    function r() {
                        t.sort(e);
                        n = !0
                    }
                    return {
                        push: function(e) {
                            t.push(e);
                            n = !1
                        },
                        peek: function(e) {
                            n || r();
                            void 0 === e && (e = t.length - 1);
                            return t[e]
                        },
                        pop: function() {
                            n || r();
                            return t.pop()
                        },
                        size: function() {
                            return t.length
                        },
                        map: function(e) {
                            return t.map(e)
                        },
                        debug: function() {
                            n || r();
                            return t
                        }
                    }
                }

                function r(e, t, n, r, i, a, o) {
                    var u = this;
                    u.r1 = e;
                    u.r2 = t;
                    u.g1 = n;
                    u.g2 = r;
                    u.b1 = i;
                    u.b2 = a;
                    u.histo = o
                }
                r.prototype = {
                    volume: function(e) {
                        var t = this;
                        t._volume && !e || (t._volume = (t.r2 - t.r1 + 1) * (t.g2 - t.g1 + 1) * (t.b2 - t.b1 + 1));
                        return t._volume
                    },
                    count: function(t) {
                        var n = this,
                            r = n.histo;
                        if (!n._count_set || t) {
                            var i, a, o, u = 0;
                            for (i = n.r1; i <= n.r2; i++)
                                for (a = n.g1; a <= n.g2; a++)
                                    for (o = n.b1; o <= n.b2; o++) u += r[e(i, a, o)] || 0;
                            n._count = u;
                            n._count_set = !0
                        }
                        return n._count
                    },
                    copy: function() {
                        var e = this;
                        return new r(e.r1, e.r2, e.g1, e.g2, e.b1, e.b2, e.histo)
                    },
                    avg: function(t) {
                        var n = this,
                            r = n.histo;
                        if (!n._avg || t) {
                            var i, a, o, u, l = 0,
                                c = 0,
                                s = 0,
                                f = 0;
                            for (a = n.r1; a <= n.r2; a++)
                                for (o = n.g1; o <= n.g2; o++)
                                    for (u = n.b1; u <= n.b2; u++) {
                                        l += i = r[e(a, o, u)] || 0;
                                        c += i * (a + .5) * 8;
                                        s += i * (o + .5) * 8;
                                        f += i * (u + .5) * 8
                                    }
                            n._avg = l ? [~~(c / l), ~~(s / l), ~~(f / l)] : [~~(8 * (n.r1 + n.r2 + 1) / 2), ~~(8 * (n.g1 + n.g2 + 1) / 2), ~~(8 * (n.b1 + n.b2 + 1) / 2)]
                        }
                        return n._avg
                    },
                    contains: function(e) {
                        var t = this,
                            n = e[0] >> 3;
                        gval = e[1] >> 3;
                        bval = e[2] >> 3;
                        return n >= t.r1 && n <= t.r2 && gval >= t.g1 && gval <= t.g2 && bval >= t.b1 && bval <= t.b2
                    }
                };

                function i() {
                    this.vboxes = new n((function(e, n) {
                        return t.naturalOrder(e.vbox.count() * e.vbox.volume(), n.vbox.count() * n.vbox.volume())
                    }))
                }
                i.prototype = {
                    push: function(e) {
                        this.vboxes.push({
                            vbox: e,
                            color: e.avg()
                        })
                    },
                    palette: function() {
                        return this.vboxes.map((function(e) {
                            return e.color
                        }))
                    },
                    size: function() {
                        return this.vboxes.size()
                    },
                    map: function(e) {
                        for (var t = this.vboxes, n = 0; n < t.size(); n++)
                            if (t.peek(n).vbox.contains(e)) return t.peek(n).color;
                        return this.nearest(e)
                    },
                    nearest: function(e) {
                        for (var t, n, r, i = this.vboxes, a = 0; a < i.size(); a++)
                            if ((n = Math.sqrt(Math.pow(e[0] - i.peek(a).color[0], 2) + Math.pow(e[1] - i.peek(a).color[1], 2) + Math.pow(e[2] - i.peek(a).color[2], 2))) < t || void 0 === t) {
                                t = n;
                                r = i.peek(a).color
                            } return r
                    },
                    forcebw: function() {
                        var e = this.vboxes;
                        e.sort((function(e, n) {
                            return t.naturalOrder(t.sum(e.color), t.sum(n.color))
                        }));
                        var n = e[0].color;
                        n[0] < 5 && n[1] < 5 && n[2] < 5 && (e[0].color = [0, 0, 0]);
                        var r = e.length - 1,
                            i = e[r].color;
                        i[0] > 251 && i[1] > 251 && i[2] > 251 && (e[r].color = [255, 255, 255])
                    }
                };

                function a(n, r) {
                    if (r.count()) {
                        var i = r.r2 - r.r1 + 1,
                            a = r.g2 - r.g1 + 1,
                            o = r.b2 - r.b1 + 1,
                            u = t.max([i, a, o]);
                        if (1 == r.count()) return [r.copy()];
                        var l, c, s, f, v = 0,
                            h = [],
                            d = [];
                        if (u == i)
                            for (l = r.r1; l <= r.r2; l++) {
                                f = 0;
                                for (c = r.g1; c <= r.g2; c++)
                                    for (s = r.b1; s <= r.b2; s++) f += n[e(l, c, s)] || 0;
                                v += f;
                                h[l] = v
                            } else if (u == a)
                                for (l = r.g1; l <= r.g2; l++) {
                                    f = 0;
                                    for (c = r.r1; c <= r.r2; c++)
                                        for (s = r.b1; s <= r.b2; s++) f += n[e(c, l, s)] || 0;
                                    v += f;
                                    h[l] = v
                                } else
                                    for (l = r.b1; l <= r.b2; l++) {
                                        f = 0;
                                        for (c = r.r1; c <= r.r2; c++)
                                            for (s = r.g1; s <= r.g2; s++) f += n[e(c, s, l)] || 0;
                                        v += f;
                                        h[l] = v
                                    }
                        h.forEach((function(e, t) {
                            d[t] = v - e
                        }));
                        return p(u == i ? "r" : u == a ? "g" : "b")
                    }

                    function p(e) {
                        var t, n, i, a, o, u = e + "1",
                            c = e + "2",
                            s = 0;
                        for (l = r[u]; l <= r[c]; l++)
                            if (h[l] > v / 2) {
                                i = r.copy();
                                a = r.copy();
                                o = (t = l - r[u]) <= (n = r[c] - l) ? Math.min(r[c] - 1, ~~(l + n / 2)) : Math.max(r[u], ~~(l - 1 - t / 2));
                                for (; !h[o];) o++;
                                s = d[o];
                                for (; !s && h[o - 1];) s = d[--o];
                                i[c] = o;
                                a[u] = i[c] + 1;
                                return [i, a]
                            }
                    }
                }
                return {
                    quantize: function(o, u) {
                        if (!o.length || u < 2 || u > 256) return !1;
                        var l = function(t) {
                            var n, r, i, a, o = new Array(32768);
                            t.forEach((function(t) {
                                r = t[0] >> 3;
                                i = t[1] >> 3;
                                a = t[2] >> 3;
                                n = e(r, i, a);
                                o[n] = (o[n] || 0) + 1
                            }));
                            return o
                        }(o);
                        l.forEach((function() {
                            0
                        }));
                        var c = function(e, t) {
                                var n, i, a, o = 1e6,
                                    u = 0,
                                    l = 1e6,
                                    c = 0,
                                    s = 1e6,
                                    f = 0;
                                e.forEach((function(e) {
                                    n = e[0] >> 3;
                                    i = e[1] >> 3;
                                    a = e[2] >> 3;
                                    n < o ? o = n : n > u && (u = n);
                                    i < l ? l = i : i > c && (c = i);
                                    a < s ? s = a : a > f && (f = a)
                                }));
                                return new r(o, u, l, c, s, f, t)
                            }(o, l),
                            s = new n((function(e, n) {
                                return t.naturalOrder(e.count(), n.count())
                            }));
                        s.push(c);

                        function f(e, t) {
                            for (var n, r = 1, i = 0; i < 1e3;)
                                if ((n = e.pop()).count()) {
                                    var o = a(l, n),
                                        u = o[0],
                                        c = o[1];
                                    if (!u) return;
                                    e.push(u);
                                    if (c) {
                                        e.push(c);
                                        r++
                                    }
                                    if (r >= t) return;
                                    if (i++ > 1e3) return
                                } else {
                                    e.push(n);
                                    i++
                                }
                        }
                        f(s, .75 * u);
                        for (var v = new n((function(e, n) {
                                return t.naturalOrder(e.count() * e.volume(), n.count() * n.volume())
                            })); s.size();) v.push(s.pop());
                        f(v, u - v.size());
                        for (var h = new i; v.size();) h.push(v.pop());
                        return h
                    }
                }
            }();
            e.exports = n.quantize
        },
        620745: (e, t, n) => {
            "use strict";
            var r = n(973935);
            t.s = r.createRoot;
            r.hydrateRoot
        },
        852316: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => r
            });
            const r = [{
                label: "Alberta",
                value: "AB"
            }, {
                label: "British Columbia",
                value: "BC"
            }, {
                label: "Manitoba",
                value: "MB"
            }, {
                label: "New Brunswick",
                value: "NB"
            }, {
                label: "Newfoundland and Labrador",
                value: "NL"
            }, {
                label: "Nova Scotia",
                value: "NS"
            }, {
                label: "Ontario",
                value: "ON"
            }, {
                label: "Prince Edward Island",
                value: "PE"
            }, {
                label: "Quebec",
                value: "QC"
            }, {
                label: "Saskatchewan",
                value: "SK"
            }, {
                label: "Northwest Territories",
                value: "NT"
            }, {
                label: "Nunavut",
                value: "NU"
            }, {
                label: "Yukon",
                value: "YT"
            }]
        },
        947592: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => r
            });
            const r = [{
                label: "Alabama",
                value: "AL"
            }, {
                label: "Alaska",
                value: "AK"
            }, {
                label: "American Samoa",
                value: "AS"
            }, {
                label: "Arizona",
                value: "AZ"
            }, {
                label: "Arkansas",
                value: "AR"
            }, {
                label: "Armed Forces: Americas",
                value: "AA"
            }, {
                label: "Armed Forces: Europe",
                value: "AE"
            }, {
                label: "Armed Forces: Pacific",
                value: "AP"
            }, {
                label: "California",
                value: "CA"
            }, {
                label: "Colorado",
                value: "CO"
            }, {
                label: "Connecticut",
                value: "CT"
            }, {
                label: "Delaware",
                value: "DE"
            }, {
                label: "District Of Columbia",
                value: "DC"
            }, {
                label: "Federated States Of Micronesia",
                value: "FM"
            }, {
                label: "Florida",
                value: "FL"
            }, {
                label: "Georgia",
                value: "GA"
            }, {
                label: "Guam",
                value: "GU"
            }, {
                label: "Hawaii",
                value: "HI"
            }, {
                label: "Idaho",
                value: "ID"
            }, {
                label: "Illinois",
                value: "IL"
            }, {
                label: "Indiana",
                value: "IN"
            }, {
                label: "Iowa",
                value: "IA"
            }, {
                label: "Kansas",
                value: "KS"
            }, {
                label: "Kentucky",
                value: "KY"
            }, {
                label: "Louisiana",
                value: "LA"
            }, {
                label: "Maine",
                value: "ME"
            }, {
                label: "Marshall Islands",
                value: "MH"
            }, {
                label: "Maryland",
                value: "MD"
            }, {
                label: "Massachusetts",
                value: "MA"
            }, {
                label: "Michigan",
                value: "MI"
            }, {
                label: "Minnesota",
                value: "MN"
            }, {
                label: "Mississippi",
                value: "MS"
            }, {
                label: "Missouri",
                value: "MO"
            }, {
                label: "Montana",
                value: "MT"
            }, {
                label: "Nebraska",
                value: "NE"
            }, {
                label: "Nevada",
                value: "NV"
            }, {
                label: "New Hampshire",
                value: "NH"
            }, {
                label: "New Jersey",
                value: "NJ"
            }, {
                label: "New Mexico",
                value: "NM"
            }, {
                label: "New York",
                value: "NY"
            }, {
                label: "North Carolina",
                value: "NC"
            }, {
                label: "North Dakota",
                value: "ND"
            }, {
                label: "Northern Mariana Islands",
                value: "MP"
            }, {
                label: "Ohio",
                value: "OH"
            }, {
                label: "Oklahoma",
                value: "OK"
            }, {
                label: "Oregon",
                value: "OR"
            }, {
                label: "Palau",
                value: "PW"
            }, {
                label: "Pennsylvania",
                value: "PA"
            }, {
                label: "Puerto Rico",
                value: "PR"
            }, {
                label: "Rhode Island",
                value: "RI"
            }, {
                label: "South Carolina",
                value: "SC"
            }, {
                label: "South Dakota",
                value: "SD"
            }, {
                label: "Tennessee",
                value: "TN"
            }, {
                label: "Texas",
                value: "TX"
            }, {
                label: "Utah",
                value: "UT"
            }, {
                label: "Vermont",
                value: "VT"
            }, {
                label: "Virgin Islands",
                value: "VI"
            }, {
                label: "Virginia",
                value: "VA"
            }, {
                label: "Washington",
                value: "WA"
            }, {
                label: "West Virginia",
                value: "WV"
            }, {
                label: "Wisconsin",
                value: "WI"
            }, {
                label: "Wyoming",
                value: "WY"
            }]
        },
        180735: (e, t, n) => {
            "use strict";
            n.d(t, {
                h: () => r
            });
            var r;
            ! function(e) {
                e[e.USER = 100] = "USER";
                e[e.STREAM = 18] = "STREAM"
            }(r || (r = {}))
        },
        284157: (e, t, n) => {
            "use strict";
            n.d(t, {
                n: () => r
            });
            var r;
            ! function(e) {
                e.CONNECT_VOICE = "connect_voice"
            }(r || (r = {}));
            new Set(["connect_voice"])
        },
        349139: (e, t, n) => {
            "use strict";
            n.d(t, {
                o: () => r
            });
            var r;
            ! function(e) {
                e.TRANSFER_EXISTING_CALL = "TRANSFER_EXISTING_CALL";
                e.CREATE_NEW_CALL = "CREATE_NEW_CALL"
            }(r || (r = {}));
            new Set(["CREATE_NEW_CALL", "TRANSFER_EXISTING_CALL"])
        },
        197597: (e, t, n) => {
            "use strict";
            n.d(t, {
                S: () => r,
                M: () => i
            });
            var r;
            ! function(e) {
                e.AC = "AC";
                e.AD = "AD";
                e.AE = "AE";
                e.AF = "AF";
                e.AG = "AG";
                e.AI = "AI";
                e.AL = "AL";
                e.AM = "AM";
                e.AN = "AN";
                e.AO = "AO";
                e.AR = "AR";
                e.AS = "AS";
                e.AT = "AT";
                e.AU = "AU";
                e.AW = "AW";
                e.AX = "AX";
                e.AZ = "AZ";
                e.BA = "BA";
                e.BB = "BB";
                e.BD = "BD";
                e.BE = "BE";
                e.BF = "BF";
                e.BG = "BG";
                e.BH = "BH";
                e.BI = "BI";
                e.BJ = "BJ";
                e.BM = "BM";
                e.BN = "BN";
                e.BO = "BO";
                e.BR = "BR";
                e.BS = "BS";
                e.BT = "BT";
                e.BW = "BW";
                e.BY = "BY";
                e.BZ = "BZ";
                e.CA = "CA";
                e.CC = "CC";
                e.CD = "CD";
                e.CF = "CF";
                e.CG = "CG";
                e.CH = "CH";
                e.CI = "CI";
                e.CK = "CK";
                e.CL = "CL";
                e.CM = "CM";
                e.CN = "CN";
                e.CO = "CO";
                e.CR = "CR";
                e.CU = "CU";
                e.CV = "CV";
                e.CW = "CW";
                e.CX = "CX";
                e.CY = "CY";
                e.CZ = "CZ";
                e.DE = "DE";
                e.DG = "DG";
                e.DJ = "DJ";
                e.DK = "DK";
                e.DM = "DM";
                e.DO = "DO";
                e.DZ = "DZ";
                e.EC = "EC";
                e.EE = "EE";
                e.EG = "EG";
                e.EL = "EL";
                e.ER = "ER";
                e.ES = "ES";
                e.ET = "ET";
                e.FI = "FI";
                e.FJ = "FJ";
                e.FK = "FK";
                e.FM = "FM";
                e.FO = "FO";
                e.FR = "FR";
                e.GA = "GA";
                e.GB = "GB";
                e.GD = "GD";
                e.GE = "GE";
                e.GF = "GF";
                e.GG = "GG";
                e.GH = "GH";
                e.GI = "GI";
                e.GL = "GL";
                e.GM = "GM";
                e.GN = "GN";
                e.GP = "GP";
                e.GQ = "GQ";
                e.GR = "GR";
                e.GS = "GS";
                e.GT = "GT";
                e.GU = "GU";
                e.GW = "GW";
                e.GY = "GY";
                e.HK = "HK";
                e.HM = "HM";
                e.HN = "HN";
                e.HR = "HR";
                e.HT = "HT";
                e.HU = "HU";
                e.IC = "IC";
                e.ID = "ID";
                e.IE = "IE";
                e.IL = "IL";
                e.IM = "IM";
                e.IN = "IN";
                e.IO = "IO";
                e.IQ = "IQ";
                e.IR = "IR";
                e.IS = "IS";
                e.IT = "IT";
                e.JE = "JE";
                e.JM = "JM";
                e.JO = "JO";
                e.JP = "JP";
                e.KE = "KE";
                e.KG = "KG";
                e.KH = "KH";
                e.KI = "KI";
                e.KM = "KM";
                e.KN = "KN";
                e.KP = "KP";
                e.KR = "KR";
                e.KW = "KW";
                e.KY = "KY";
                e.KZ = "KZ";
                e.LA = "LA";
                e.LB = "LB";
                e.LI = "LI";
                e.LK = "LK";
                e.LR = "LR";
                e.LS = "LS";
                e.LT = "LT";
                e.LU = "LU";
                e.LV = "LV";
                e.LY = "LY";
                e.MA = "MA";
                e.MC = "MC";
                e.MD = "MD";
                e.ME = "ME";
                e.MG = "MG";
                e.MH = "MH";
                e.MI = "MI";
                e.MK = "MK";
                e.ML = "ML";
                e.MM = "MM";
                e.MN = "MN";
                e.MO = "MO";
                e.MP = "MP";
                e.MQ = "MQ";
                e.MR = "MR";
                e.MS = "MS";
                e.MT = "MT";
                e.MU = "MU";
                e.MV = "MV";
                e.MW = "MW";
                e.MX = "MX";
                e.MY = "MY";
                e.MZ = "MZ";
                e.NA = "NA";
                e.NC = "NC";
                e.NE = "NE";
                e.NF = "NF";
                e.NG = "NG";
                e.NI = "NI";
                e.NL = "NL";
                e.NO = "NO";
                e.NP = "NP";
                e.NR = "NR";
                e.NU = "NU";
                e.NZ = "NZ";
                e.OM = "OM";
                e.PA = "PA";
                e.PE = "PE";
                e.PF = "PF";
                e.PG = "PG";
                e.PH = "PH";
                e.PK = "PK";
                e.PL = "PL";
                e.PM = "PM";
                e.PR = "PR";
                e.PS = "PS";
                e.PT = "PT";
                e.PW = "PW";
                e.PY = "PY";
                e.QA = "QA";
                e.RE = "RE";
                e.RO = "RO";
                e.RS = "RS";
                e.RU = "RU";
                e.RW = "RW";
                e.SA = "SA";
                e.SB = "SB";
                e.SC = "SC";
                e.SD = "SD";
                e.SE = "SE";
                e.SG = "SG";
                e.SI = "SI";
                e.SJ = "SJ";
                e.SK = "SK";
                e.SL = "SL";
                e.SM = "SM";
                e.SN = "SN";
                e.SO = "SO";
                e.SR = "SR";
                e.SS = "SS";
                e.SV = "SV";
                e.SX = "SX";
                e.SY = "SY";
                e.SZ = "SZ";
                e.TC = "TC";
                e.TD = "TD";
                e.TG = "TG";
                e.TH = "TH";
                e.TJ = "TJ";
                e.TK = "TK";
                e.TL = "TL";
                e.TM = "TM";
                e.TN = "TN";
                e.TO = "TO";
                e.TP = "TP";
                e.TR = "TR";
                e.TT = "TT";
                e.TV = "TV";
                e.TW = "TW";
                e.TZ = "TZ";
                e.UA = "UA";
                e.UG = "UG";
                e.UK = "UK";
                e.US = "US";
                e.UY = "UY";
                e.UZ = "UZ";
                e.VA = "VA";
                e.VE = "VE";
                e.VG = "VG";
                e.VI = "VI";
                e.VN = "VN";
                e.VU = "VU";
                e.WF = "WF";
                e.WK = "WK";
                e.WS = "WS";
                e.XK = "XK";
                e.YE = "YE";
                e.YT = "YT";
                e.ZA = "ZA";
                e.ZM = "ZM";
                e.ZW = "ZW";
                e.ST = "ST";
                e.BQ = "BQ";
                e.TF = "TF";
                e.VC = "VC";
                e.LC = "LC"
            }(r || (r = {}));
            var i = {
                VAT_EU_COUNTRIES: new Set(["AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FR", "GR", "HR", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "PL", "PT", "RO", "SE", "SI", "SK"]),
                EU_COUNTRIES: new Set(["AD", "AL", "AT", "AX", "BA", "BE", "BG", "BY", "CH", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FO", "FR", "GG", "GR", "HR", "HU", "IC", "IE", "IM", "IT", "JE", "LI", "LT", "LU", "LV", "MC", "MD", "MK", "MT", "NL", "NO", "PL", "PT", "RO", "RU", "SE", "SI", "SJ", "SK", "SM", "UA", "VA"]),
                EEA_COUNTRIES: new Set(["AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FR", "GR", "HR", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MT", "NL", "NO", "PL", "PT", "RO", "SE", "SI", "SK"])
            }
        },
        248634: (e, t, n) => {
            "use strict";
            n.d(t, {
                z: () => r
            });
            var r;
            ! function(e) {
                e.MATCH_ALL = "match_all";
                e.MATCH_SOME = "match_some"
            }(r || (r = {}));
            new Set(["match_all", "match_some"])
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
                Gk: () => a
            });

            function r(e) {
                return "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.INVITE_HOST, "/").concat(e)
            }

            function i(e) {
                return "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST, "/").concat(e)
            }

            function a() {
                return "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT, "/channels/@me")
            }
        },
        58964: (e, t, n) => {
            "use strict";
            n.d(t, {
                ZP: () => d,
                WS: () => v,
                zS: () => h
            });
            var r = n(131795),
                i = n.n(r),
                a = n(468811),
                o = n.n(a);
            const u = n(426080).Z;

            function l(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function c(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
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
                        var r, i, a = [],
                            o = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done); o = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            i = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return l(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var f = "https://discordapp.page.link";

            function v() {
                return o().v4()
            }

            function h(e) {
                if (!e.startsWith(f)) return null;
                try {
                    var t = new URL(e).searchParams,
                        n = t.get("link");
                    if (null == n) return null;
                    var r, i = decodeURIComponent(n),
                        a = new URL(i).searchParams,
                        o = {
                            utmSource: null !== (r = t.get("utm_source")) && void 0 !== r ? r : void 0
                        },
                        u = !0,
                        l = !1,
                        c = void 0;
                    try {
                        for (var v, h = a.entries()[Symbol.iterator](); !(u = (v = h.next()).done); u = !0) {
                            var d = s(v.value, 2),
                                p = d[0],
                                y = d[1];
                            o[p] = y
                        }
                    } catch (e) {
                        l = !0;
                        c = e
                    } finally {
                        try {
                            u || null == h.return || h.return()
                        } finally {
                            if (l) throw c
                        }
                    }
                    return o
                } catch (e) {
                    return null
                }
            }

            function d(e, t) {
                var n = t.utmSource,
                    r = t.androidFallbackLink,
                    a = t.iosFallbackLink,
                    o = c(t, ["utmSource", "androidFallbackLink", "iosFallbackLink"]),
                    l = new URL(e);
                for (var s in o) {
                    var v = o[s];
                    null != v && l.searchParams.set(s, v)
                }
                var h, d, p, y, g, m = encodeURIComponent(l.toString()),
                    b = encodeURIComponent(u()),
                    w = (p = new RegExp("(".concat(["WebView", "(iPhone|iPod|iPad)(?!.*Safari/)"].join("|"), ")"), "ig"), y = null != (null === i() || void 0 === i() || null === (h = i().ua) || void 0 === h ? void 0 : h.match(p)), g = "Safari" === (null === i() || void 0 === i() ? void 0 : i().name) && !y, "iOS" !== (null === i() || void 0 === i() || null === (d = i().os) || void 0 === d ? void 0 : d.family) || g ? 1 : 0),
                    x = null != r ? encodeURIComponent(r) : null,
                    A = null != a ? encodeURIComponent(a) : null,
                    C = "".concat(f, "/?link=").concat(m, "&utm_source=").concat(n, "&apn=").concat("com.discord", "&isi=").concat(985746746, "&ibi=").concat("com.hammerandchisel.discord", "&sd=").concat(b, "&efr=").concat(w);
                null != x && (C += "&afl=".concat(x));
                null != A && (C += "&ifl=".concat(A));
                return C
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
                Rp: () => l,
                ge: () => a,
                RA: () => u
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

            function a(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (Array.isArray(e)) {
                    for (var n = e.length, r = [], o = 0; o < n; o++) i(r, a(e[o], t));
                    return r
                }
                null != e.content && (e.content = a(e.content, e));
                return null != t && e.type === t.type ? e.content : e
            }
            var o = {};

            function u(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    limit: 200
                };
                if (Array.isArray(e))
                    for (var n = e.length, r = 0; r < n; r++) {
                        var i = u(e[r], t);
                        if (i === o) {
                            e.length = r;
                            break
                        }
                        e[r] = i
                    } else if ("text" !== e.type) {
                        t.limit -= 1;
                        if (t.limit <= 0) return o;
                        Array.isArray(e.content) && (e.content = u(e.content, t))
                    } return e
            }

            function l(e) {
                return r(e).join("")
            }
        },
        894012: (e, t, n) => {
            "use strict";
            n.d(t, {
                Rp: () => i.Rp,
                w4: () => a,
                _p: () => o
            });
            var r, i = n(222789),
                a = (r = n(25788).Z).reactParserFor,
                o = r.astParserFor
        },
        25788: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var r = n(120053),
                i = n.n(r),
                a = n(222789);

            function o(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function u(e, t, n, r, i) {
                n || (t += "\n\n");
                var u;
                u = e(t, function(e) {
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
                    inline: n
                }, r));
                u = (0, a.ge)(u);
                u = (0, a.RA)(u);
                null != i && (u = i(u, n));
                return u
            }
            const l = {
                reactParserFor: function(e) {
                    var t = i().parserFor(e),
                        n = i().reactFor(i().ruleOutput(e, "react"));
                    return function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                        return n(u(t, e, r, i, a), i)
                    }
                },
                astParserFor: function(e) {
                    var t = i().parserFor(e);
                    return function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                        return u(t, e, n, r, i)
                    }
                }
            }
        },
        283151: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => o
            });
            var r = n(667294);

            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function a(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, a = [],
                            o = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done); o = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            i = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return a
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

            function o() {
                var e = a((0, r.useState)({}), 2)[1];
                return (0, r.useCallback)((function() {
                    return e({})
                }), [])
            }
        },
        989824: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a
            });
            var r = n(667294),
                i = {};

            function a(e) {
                var t = (0, r.useRef)(i);
                t.current === i && (t.current = e());
                return t.current
            }
        },
        685269: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a
            });
            var r = n(667294);
            var i = [];

            function a(e, t) {
                var n = (0, r.useRef)(),
                    a = (0, r.useRef)(i);
                if (a.current === i) {
                    n.current = e();
                    a.current = t
                } else if (! function(e, t) {
                        if (e.length !== t.length) return !1;
                        for (var n = 0; n < t.length && n < e.length; n++)
                            if (!Object.is(e[n], t[n])) return !1;
                        return !0
                    }(t, a.current)) {
                    n.current = e();
                    a.current = t
                }
                return n.current
            }
        },
        498964: (e, t, n) => {
            "use strict";
            n.d(t, {
                P: () => X,
                EQ: () => $
            });
            const r = Symbol.for("@ts-pattern/matcher"),
                i = Symbol.for("@ts-pattern/isVariadic"),
                a = "@ts-pattern/anonymous-select-key",
                o = e => Boolean(e && "object" == typeof e),
                u = e => e && !!e[r],
                l = (e, t, n) => {
                    if (u(e)) {
                        const i = e[r](),
                            {
                                matched: a,
                                selections: o
                            } = i.match(t);
                        return a && o && Object.keys(o).forEach((e => n(e, o[e]))), a
                    }
                    if (o(e)) {
                        if (!o(t)) return !1;
                        if (Array.isArray(e)) {
                            if (!Array.isArray(t)) return !1;
                            let r = [],
                                a = [],
                                o = [];
                            for (const t of e.keys()) {
                                const n = e[t];
                                u(n) && n[i] ? o.push(n) : o.length ? a.push(n) : r.push(n)
                            }
                            if (o.length) {
                                if (o.length > 1) throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
                                if (t.length < r.length + a.length) return !1;
                                const e = t.slice(0, r.length),
                                    i = 0 === a.length ? [] : t.slice(-a.length),
                                    u = t.slice(r.length, 0 === a.length ? 1 / 0 : -a.length);
                                return r.every(((t, r) => l(t, e[r], n))) && a.every(((e, t) => l(e, i[t], n))) && (0 === o.length || l(o[0], u, n))
                            }
                            return e.length === t.length && e.every(((e, r) => l(e, t[r], n)))
                        }
                        return Object.keys(e).every((i => {
                            const a = e[i];
                            return (i in t || u(o = a) && "optional" === o[r]().matcherType) && l(a, t[i], n);
                            var o
                        }))
                    }
                    return Object.is(t, e)
                },
                c = e => {
                    var t, n, i;
                    return o(e) ? u(e) ? null != (t = null == (n = (i = e[r]()).getSelectionKeys) ? void 0 : n.call(i)) ? t : [] : Array.isArray(e) ? s(e, c) : s(Object.values(e), c) : []
                },
                s = (e, t) => e.reduce(((e, n) => e.concat(t(n))), []);

            function f(e) {
                return Object.assign(e, {
                    optional: () => h(e),
                    and: t => y(e, t),
                    or: t => g(e, t),
                    select: t => void 0 === t ? b(e) : b(t, e)
                })
            }

            function v(e) {
                return Object.assign((e => Object.assign(e, {
                    *[Symbol.iterator]() {
                        yield Object.assign(e, {
                            [i]: !0
                        })
                    }
                }))(e), {
                    optional: () => v(h(e)),
                    select: t => v(void 0 === t ? b(e) : b(t, e))
                })
            }

            function h(e) {
                return f({
                    [r]: () => ({
                        match: t => {
                            let n = {};
                            const r = (e, t) => {
                                n[e] = t
                            };
                            return void 0 === t ? (c(e).forEach((e => r(e, void 0))), {
                                matched: !0,
                                selections: n
                            }) : {
                                matched: l(e, t, r),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => c(e),
                        matcherType: "optional"
                    })
                })
            }
            const d = (e, t) => {
                    for (const n of e)
                        if (!t(n)) return !1;
                    return !0
                },
                p = (e, t) => {
                    for (const [n, r] of e.entries())
                        if (!t(r, n)) return !1;
                    return !0
                };

            function y(...e) {
                return f({
                    [r]: () => ({
                        match: t => {
                            let n = {};
                            const r = (e, t) => {
                                n[e] = t
                            };
                            return {
                                matched: e.every((e => l(e, t, r))),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => s(e, c),
                        matcherType: "and"
                    })
                })
            }

            function g(...e) {
                return f({
                    [r]: () => ({
                        match: t => {
                            let n = {};
                            const r = (e, t) => {
                                n[e] = t
                            };
                            return s(e, c).forEach((e => r(e, void 0))), {
                                matched: e.some((e => l(e, t, r))),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => s(e, c),
                        matcherType: "or"
                    })
                })
            }

            function m(e) {
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
                                [null != t ? t : a]: e
                            };
                            return {
                                matched: void 0 === n || l(n, e, ((e, t) => {
                                    r[e] = t
                                })),
                                selections: r
                            }
                        },
                        getSelectionKeys: () => [null != t ? t : a].concat(void 0 === n ? [] : c(n))
                    })
                })
            }

            function w(e) {
                return "number" == typeof e
            }

            function x(e) {
                return "string" == typeof e
            }

            function A(e) {
                return "bigint" == typeof e
            }
            const C = f(m((function(e) {
                    return !0
                }))),
                S = C,
                E = e => Object.assign(f(e), {
                    startsWith: t => {
                        return E(y(e, (n = t, m((e => x(e) && e.startsWith(n))))));
                        var n
                    },
                    endsWith: t => {
                        return E(y(e, (n = t, m((e => x(e) && e.endsWith(n))))));
                        var n
                    },
                    minLength: t => E(y(e, (e => m((t => x(t) && t.length >= e)))(t))),
                    maxLength: t => E(y(e, (e => m((t => x(t) && t.length <= e)))(t))),
                    includes: t => {
                        return E(y(e, (n = t, m((e => x(e) && e.includes(n))))));
                        var n
                    },
                    regex: t => {
                        return E(y(e, (n = t, m((e => x(e) && Boolean(e.match(n)))))));
                        var n
                    }
                }),
                M = E(m(x)),
                R = (e, t) => m((n => w(n) && e <= n && t >= n)),
                O = e => m((t => w(t) && t < e)),
                T = e => m((t => w(t) && t > e)),
                I = e => m((t => w(t) && t <= e)),
                N = e => m((t => w(t) && t >= e)),
                P = () => m((e => w(e) && Number.isInteger(e))),
                L = () => m((e => w(e) && Number.isFinite(e))),
                _ = () => m((e => w(e) && e > 0)),
                G = () => m((e => w(e) && e < 0)),
                z = e => Object.assign(f(e), {
                    between: (t, n) => z(y(e, R(t, n))),
                    lt: t => z(y(e, O(t))),
                    gt: t => z(y(e, T(t))),
                    lte: t => z(y(e, I(t))),
                    gte: t => z(y(e, N(t))),
                    int: () => z(y(e, P())),
                    finite: () => z(y(e, L())),
                    positive: () => z(y(e, _())),
                    negative: () => z(y(e, G()))
                }),
                B = z(m(w)),
                F = (e, t) => m((n => A(n) && e <= n && t >= n)),
                U = e => m((t => A(t) && t < e)),
                k = e => m((t => A(t) && t > e)),
                D = e => m((t => A(t) && t <= e)),
                V = e => m((t => A(t) && t >= e)),
                K = () => m((e => A(e) && e > 0)),
                H = () => m((e => A(e) && e < 0)),
                W = e => Object.assign(f(e), {
                    between: (t, n) => W(y(e, F(t, n))),
                    lt: t => W(y(e, U(t))),
                    gt: t => W(y(e, k(t))),
                    lte: t => W(y(e, D(t))),
                    gte: t => W(y(e, V(t))),
                    positive: () => W(y(e, K())),
                    negative: () => W(y(e, H()))
                }),
                j = W(m(A)),
                Z = f(m((function(e) {
                    return "boolean" == typeof e
                }))),
                Y = f(m((function(e) {
                    return "symbol" == typeof e
                }))),
                J = f(m((function(e) {
                    return null == e
                })));
            var X = {
                __proto__: null,
                matcher: r,
                optional: h,
                array: function(...e) {
                    return v({
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
                                if (0 === t.length) return c(n).forEach((e => {
                                    r[e] = []
                                })), {
                                    matched: !0,
                                    selections: r
                                };
                                const i = (e, t) => {
                                    r[e] = (r[e] || []).concat([t])
                                };
                                return {
                                    matched: t.every((e => l(n, e, i))),
                                    selections: r
                                }
                            },
                            getSelectionKeys: () => 0 === e.length ? [] : c(e[0])
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
                                    matched: d(t, (e => l(i, e, r))),
                                    selections: n
                                }
                            },
                            getSelectionKeys: () => 0 === e.length ? [] : c(e[0])
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
                                const [a, o] = e;
                                return {
                                    matched: p(t, ((e, t) => {
                                        const n = l(a, t, r),
                                            i = l(o, e, r);
                                        return n && i
                                    })),
                                    selections: n
                                }
                            },
                            getSelectionKeys: () => 0 === e.length ? [] : [...c(e[0]), ...c(e[1])]
                        })
                    })
                },
                intersection: y,
                union: g,
                not: function(e) {
                    return f({
                        [r]: () => ({
                            match: t => ({
                                matched: !l(e, t, (() => {}))
                            }),
                            getSelectionKeys: () => [],
                            matcherType: "not"
                        })
                    })
                },
                when: m,
                select: b,
                any: C,
                _: S,
                string: M,
                between: R,
                lt: O,
                gt: T,
                lte: I,
                gte: N,
                int: P,
                finite: L,
                positive: _,
                negative: G,
                number: B,
                betweenBigInt: F,
                ltBigInt: U,
                gtBigInt: k,
                lteBigInt: D,
                gteBigInt: V,
                positiveBigInt: K,
                negativeBigInt: H,
                bigint: j,
                boolean: Z,
                symbol: Y,
                nullish: J,
                instanceOf: function(e) {
                    return f(m(function(e) {
                        return t => t instanceof e
                    }(e)))
                },
                shape: function(e) {
                    return f(m(function(...e) {
                        if (1 === e.length) {
                            const [t] = e;
                            return e => l(t, e, (() => {}))
                        }
                        if (2 === e.length) {
                            const [t, n] = e;
                            return l(t, n, (() => {}))
                        }
                        throw new Error(`isMatching wasn't given the right number of arguments: expected 1 or 2, received ${e.length}.`)
                    }(e)))
                }
            };
            const Q = {
                matched: !1,
                value: void 0
            };

            function $(e) {
                return new q(e, Q)
            }
            class q {
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
                        o = {};
                    const u = (e, t) => {
                            i = !0, o[e] = t
                        },
                        c = !n.some((e => l(e, this.input, u))) || r && !Boolean(r(this.input)) ? Q : {
                            matched: !0,
                            value: t(i ? a in o ? o[a] : o : this.input, this.input)
                        };
                    return new q(this.input, c)
                }
                when(e, t) {
                    if (this.state.matched) return this;
                    const n = Boolean(e(this.input));
                    return new q(this.input, n ? {
                        matched: !0,
                        value: t(this.input, this.input)
                    } : Q)
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