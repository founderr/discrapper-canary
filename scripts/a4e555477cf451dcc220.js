(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [6831, 58093, 84832, 57678, 58621, 33973], {
        737264: t => {
            "use strict";
            t.exports.Q = function(t) {
                var e, n = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(t);
                if (!n) return null;
                n.shift();
                var r = null,
                    i = [];
                if (n[2]) {
                    r = (e = n[2].split("-")).shift();
                    i = e
                }
                var o = [];
                n[5] && (o = n[5].split("-")).shift();
                var a = [];
                if (n[6]) {
                    (e = n[6].split("-")).shift();
                    for (var u, c = []; e.length;) {
                        var l = e.shift();
                        if (1 === l.length)
                            if (u) {
                                a.push({
                                    singleton: u,
                                    extension: c
                                });
                                u = l;
                                c = []
                            } else u = l;
                        else c.push(l)
                    }
                    a.push({
                        singleton: u,
                        extension: c
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
                        variant: o,
                        extension: a,
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
        652411: (t, e, n) => {
            "use strict";
            n.d(e, {
                O_: () => k,
                qA: () => f,
                Ji: () => R,
                uR: () => j
            });
            var r = n(667294),
                i = n(468811),
                o = n(294184),
                a = n.n(o);

            function u(t, e) {
                var n = t.x,
                    r = t.y;
                return n > e.x && n < e.x + e.width && r > e.y && r < e.y + e.height
            }

            function c(t, e) {
                return t * e * e * (e > 0 ? -1 : 1)
            }
            var l = function() {
                    function t(t) {
                        this.id = t.id, this.position = t.position, this.velocity = t.velocity, this.rotation = t.rotation, this.dragCoefficient = t.dragCoefficient, this.size = t.size, this.opacity = t.opacity, this.spriteX = t.spriteX, this.spriteY = t.spriteY, this.spriteWidth = t.spriteWidth, this.spriteHeight = t.spriteHeight, this._lastUpdatedAt = Date.now()
                    }
                    return t.prototype.getNewForces = function(t, e) {
                        var n = t.wind * e,
                            r = -t.gravity * e;
                        return {
                            x: n + c(this.dragCoefficient.x, this.velocity.x),
                            y: r + c(this.dragCoefficient.y, this.velocity.y)
                        }
                    }, t.prototype.update = function(t) {
                        var e = Date.now(),
                            n = (e - this._lastUpdatedAt) / 100;
                        this.rotation.update(n), this.dragCoefficient.update(n);
                        var r = this.getNewForces(t, n),
                            i = r.x,
                            o = r.y;
                        this.velocity.update(n), this.velocity.x += i, this.velocity.y += o, this.position.update(n), this.position.x += this.velocity.x * n, this.position.y += this.velocity.y * n, this.size.update(n), this.opacity.update(n), this._lastUpdatedAt = e
                    }, t.prototype.previewPositionUpdate = function(t, e) {
                        var n = e / 100,
                            r = this.velocity.previewUpdate(n),
                            i = this.getNewForces(t, n),
                            o = i.x,
                            a = i.y;
                        r.x += o, r.y += a;
                        var u = this.position.previewUpdate(n);
                        return u.x += r.x * n, u.y += r.y * n, u
                    }, t.prototype.draw = function(t, e) {
                        e.save(), e.globalAlpha = this.opacity.value, e.setTransform((new DOMMatrix).translateSelf(this.position.x * n.g.devicePixelRatio, this.position.y * n.g.devicePixelRatio).rotateSelf(this.rotation.x, this.rotation.y, this.rotation.z)),
                            e.drawImage(t, this.spriteX, this.spriteY, this.spriteWidth, this.spriteHeight, -this.width / 2 * n.g.devicePixelRatio, -this.height / 2 * n.g.devicePixelRatio, this.width * n.g.devicePixelRatio, this.height * n.g.devicePixelRatio), e.restore()
                    }, t.prototype.shouldDestroy = function(t, e) {
                        return this.opacity.value < 0 || e.gravity >= 0 && this.velocity.y < 0 && this.position.y + this.height < 0 || e.gravity <= 0 && this.velocity.y > 0 && this.position.y - this.height > t.height || e.wind >= 0 && this.velocity.x > 0 && this.position.x - this.width > t.width || e.wind <= 0 && this.velocity.x < 0 && this.position.x + this.width < 0
                    }, Object.defineProperty(t.prototype, "width", {
                        get: function() {
                            return this.size.x
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "height", {
                        get: function() {
                            return this.size.y
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.addForce = function(t) {
                        this.velocity.x += t.x, this.velocity.y += t.y
                    }, t
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
                f = function(t) {
                    var e = void 0 === t ? {} : t,
                        n = e.gravity,
                        r = e.wind;
                    this.gravity = -9.8, this.wind = 0, this.gravity = null != n ? n : this.gravity, this.wind = null != r ? r : this.wind
                },
                h = function(t, e) {
                    return h = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                    }, h(t, e)
                };

            function p(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

                function n() {
                    this.constructor = t
                }
                h(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }
            var v = function() {
                return v = Object.assign || function(t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t
                }, v.apply(this, arguments)
            };
            var d = function(t) {
                    this.value = t
                },
                y = function() {
                    function t(t, e) {
                        this._x = t, this._y = e
                    }
                    return t.prototype.update = function(t) {
                            this._x.update(t), this._y.update(t)
                        },
                        t.prototype.previewUpdate = function(t) {
                            return {
                                x: this._x.previewUpdate(t),
                                y: this._y.previewUpdate(t)
                            }
                        }, Object.defineProperty(t.prototype, "x", {
                            get: function() {
                                return this._x.value
                            },
                            set: function(t) {
                                this._x.value = t
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "y", {
                            get: function() {
                                return this._y.value
                            },
                            set: function(t) {
                                this._y.value = t
                            },
                            enumerable: !1,
                            configurable: !0
                        }), t
                }(),
                g = function(t) {
                    function e(e, n, r) {
                        var i = t.call(this, e, n) || this;
                        return i._z = r, i
                    }
                    return p(e, t), e.prototype.update = function(e) {
                        t.prototype.update.call(this, e), this._z.update(e)
                    }, e.prototype.previewUpdate = function(e) {
                        var n = t.prototype.previewUpdate.call(this, e);
                        return v(v({}, n), {
                            z: this._z.previewUpdate(e)
                        })
                    }, Object.defineProperty(e.prototype, "z", {
                        get: function() {
                            return this._z.value
                        },
                        set: function(t) {
                            this._z.value = t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e
                }(y),
                m = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return p(e, t), e.prototype.update = function() {}, e.prototype.previewUpdate = function() {
                        return this.value
                    }, e
                }(d),
                b = function(t) {
                    function e(e, n) {
                        var r = t.call(this, e) || this;
                        return r.addValue = n, r
                    }
                    return p(e, t), e.prototype.update = function(t) {
                        this.value = this.previewUpdate(t)
                    }, e.prototype.previewUpdate = function(t) {
                        return this.value + this.addValue * t
                    }, e
                }(d),
                w = function(t) {
                    function e(e, n, r, i, o, a) {
                        var u = t.call(this, e) || this;
                        u.min = n, u.max = r, u.duration = i;
                        var c = u.value / (u.max - u.min) * u.duration,
                            l = isNaN(c) ? 0 : c;
                        return u.timePassed = l < 0 ? u.duration - l : l, u.directionMultiplier = o, u.easingFunction = a, u
                    }
                    return p(e, t), e.prototype.update = function(t) {
                        var e = this.doUpdate(t),
                            n = e[0],
                            r = e[1],
                            i = e[2];
                        this.value = n, this.directionMultiplier = i, this.timePassed = r
                    }, e.prototype.previewUpdate = function(t) {
                        return this.doUpdate(t)[0]
                    }, e.prototype.doUpdate = function(t) {
                        var e = this.max - this.min,
                            n = this.timePassed + t * this.directionMultiplier,
                            r = Math.min(Math.max(n, 0), this.duration),
                            i = n < 0 || n > this.duration ? -1 * this.directionMultiplier : this.directionMultiplier,
                            o = this.easingFunction(r, this.min, e, this.duration);
                        return [isNaN(o) ? 0 : o, r, i]
                    }, e
                }(d);

            function x(t, e) {
                return t === e ? t : Math.random() * (e - t + 1) + t
            }

            function O(t) {
                var e = Math.floor(x(0, t.length - 1));
                return [t[e], e]
            }

            function C(t, e) {
                return O([t, e])[0]
            }

            function z(t) {
                return "number" == typeof t ? {
                    x: t,
                    y: t
                } : t
            }

            function _(t) {
                return "number" == typeof t ? {
                    x: t,
                    y: t,
                    z: t
                } : t
            }

            function S(t) {
                return function(t) {
                    switch (t.type) {
                        case "static":
                            return new m(t.value);
                        case "static-random":
                            return new m(x(t.minValue, t.maxValue));
                        case "linear":
                            return new b(t.value, t.addValue);
                        case "linear-random":
                            return new b(x(t.minValue, t.maxValue), x(t.minAddValue, t.maxAddValue));
                        case "oscillating":
                            return new w(t.value, t.start, t.final, t.duration, t.direction, t.easingFunction);
                        case "oscillating-random":
                            return new w(x(t.minValue, t.maxValue), x(t.minStart, t.maxStart), x(t.minFinal, t.maxFinal), x(t.minDuration, t.maxDuration), C(t.minDirection, t.maxDirection), O(t.easingFunctions)[0])
                    }
                }(v(v({}, t), {
                    valueType: "number"
                }))
            }

            function A(t) {
                return function(t) {
                    switch (t.type) {
                        case "static":
                            var e = z(t.value);
                            return new y(new m(e.x), new m(e.y));
                        case "static-random":
                            var n = z(t.minValue),
                                r = z(t.maxValue);
                            return new y(new m(x(n.x, r.x)), new m(x(n.y, r.y)));
                        case "linear":
                            e = z(t.value);
                            var i = z(t.addValue);
                            return new y(new b(e.x, i.x), new b(e.y, i.y));
                        case "linear-random":
                            n = z(t.minValue), r = z(t.maxValue);
                            var o = z(t.minAddValue),
                                a = z(t.maxAddValue);
                            return new y(new b(x(n.x, r.x), x(o.x, a.x)), new b(x(n.y, r.y), x(o.x, a.x)));
                        case "oscillating":
                            e = z(t.value);
                            var u = z(t.start),
                                c = z(t.final),
                                l = z(t.duration),
                                s = z(t.direction);
                            return new y(new w(e.x, u.x, c.x, l.x, s.x, t.easingFunction), new w(e.y, u.y, c.y, l.x, s.y, t.easingFunction));
                        case "oscillating-random":
                            n = z(t.minValue), r = z(t.maxValue);
                            var f = z(t.minStart),
                                h = z(t.maxStart),
                                p = z(t.minFinal),
                                v = z(t.maxFinal),
                                d = z(t.minDuration),
                                g = z(t.maxDuration),
                                _ = z(t.minDirection),
                                S = z(t.maxDirection);
                            return new y(new w(x(n.x, r.x), x(f.x, h.x), x(p.x, v.x), x(d.x, g.x), C(_.x, S.x), O(t.easingFunctions)[0]), new w(x(n.y, r.y), x(f.y, h.y), x(p.y, v.y), x(d.y, g.y), C(_.y, S.y), O(t.easingFunctions)[0]))
                    }
                }(v(v({}, t), {
                    valueType: "Vector2"
                }))
            }

            function E(t) {
                return function(t) {
                    switch (t.type) {
                        case "static":
                            var e = _(t.value);
                            return new g(new m(e.x), new m(e.y), new m(e.z));
                        case "static-random":
                            var n = _(t.minValue),
                                r = _(t.maxValue);
                            return new g(new m(x(n.x, r.x)), new m(x(n.y, r.y)), new m(x(n.z, r.z)));
                        case "linear":
                            e = _(t.value);
                            var i = _(t.addValue);
                            return new g(new b(e.x, i.x), new b(e.y, i.y), new b(e.z, i.z));
                        case "linear-random":
                            n = _(t.minValue), r = _(t.maxValue);
                            var o = _(t.minAddValue),
                                a = _(t.maxAddValue);
                            return new g(new b(x(n.x, r.x), x(o.x, a.x)), new b(x(n.y, r.y), x(o.y, a.y)), new b(x(n.z, r.z), x(o.z, a.z)));
                        case "oscillating":
                            e = _(t.value);
                            var u = _(t.start),
                                c = _(t.final),
                                l = _(t.duration),
                                s = _(t.direction);
                            return new g(new w(e.x, u.x, c.x, l.x, s.x, t.easingFunction), new w(e.y, u.y, c.y, l.z, s.y, t.easingFunction), new w(e.z, u.z, c.z, l.z, s.z, t.easingFunction));
                        case "oscillating-random":
                            n = _(t.minValue), r = _(t.maxValue);
                            var f = _(t.minStart),
                                h = _(t.maxStart),
                                p = _(t.minFinal),
                                v = _(t.maxFinal),
                                d = _(t.minDuration),
                                y = _(t.maxDuration),
                                z = _(t.minDirection),
                                S = _(t.maxDirection);
                            return new g(new w(x(n.x, r.x), x(f.x, h.x), x(p.x, v.x), x(d.x, y.x), C(z.x, S.x), O(t.easingFunctions)[0]), new w(x(n.y, r.y), x(f.y, h.y), x(p.y, v.y), x(d.y, y.y), C(z.y, S.y), O(t.easingFunctions)[0]), new w(x(n.z, r.z), x(f.z, h.z), x(p.z, v.z), x(d.z, y.z), C(z.z, S.z), O(t.easingFunctions)[0]))
                    }
                }(v(v({}, t), {
                    valueType: "Vector3"
                }))
            }

            function P(t, e, n, r, i) {
                var o = function(t, e) {
                        return v(v({
                            id: e
                        }, s), t)
                    }(e, t),
                    a = A(o.size),
                    u = function(t, e) {
                        if (null != t) {
                            var n = e.sprites.findIndex((function(e) {
                                return n = e, "string" == typeof(r = t) ? n.src === r && n.colorize : n.src === r.src && n.colorize === r.colorize;
                                var n, r
                            }));
                            if (-1 !== n) return [t, n]
                        }
                        return O(e.sprites)
                    }(r, n),
                    c = u[0],
                    f = u[1],
                    h = function(t, e, n) {
                        if (! function(t) {
                                return "string" == typeof t || t.colorize
                            }(t)) return 0;
                        var r = null != e ? n.colors.findIndex((function(t) {
                            return t === e
                        })) : -1;
                        return -1 !== r ? r : Math.floor(x(0, n.colors.length - 1))
                    }(null != r ? r : c, i, n);
                return new l({
                    id: t,
                    position: A(o.position),
                    velocity: A(o.velocity),
                    rotation: E(o.rotation),
                    dragCoefficient: A(o.dragCoefficient),
                    size: a,
                    opacity: S(o.opacity),
                    spriteX: h * n.spriteWidth + 2 * h,
                    spriteY: f * n.spriteHeight + 2 * f,
                    spriteWidth: n.spriteWidth,
                    spriteHeight: n.spriteHeight
                })
            }
            var k = r.forwardRef((function(t, e) {
                var o = t.className,
                    a = t.environment,
                    c = t.onClick,
                    l = t.onMouseDown,
                    s = t.onMouseMove,
                    f = t.onMouseUp,
                    h = t.onBeforeRender,
                    p = t.onAfterRender,
                    d = function(t, e) {
                        var n = {};
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
                        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                            var i = 0;
                            for (r = Object.getOwnPropertySymbols(t); i < r.length; i++) e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]])
                        }
                        return n
                    }(t, ["className", "environment", "onClick", "onMouseDown", "onMouseMove", "onMouseUp", "onBeforeRender", "onAfterRender"]),
                    y = r.useRef(null),
                    g = r.useRef(new Map),
                    m = r.useRef(null),
                    b = r.useRef(0),
                    w = r.useRef(0),
                    x = r.useCallback((function() {
                        var t = y.current;
                        if (null != t) {
                            var e = t.getContext("2d");
                            if (null != e) {
                                e.clearRect(0, 0, t.width, t.height), null == h || h(e), g.current.forEach((function(n, r) {
                                    var i = n.confetti,
                                        o = n.spriteCanvas;
                                    i.update(a), i.draw(o, e), i.shouldDestroy(t, a) && g.current.delete(r)
                                })), null == p || p(e), g.current.size > 0 ? m.current = window.requestAnimationFrame(x) : (e.clearRect(0, 0, t.width, t.height), m.current = null);
                                var n = Date.now();
                                0 !== b.current && (w.current = 1e3 / (n - b.current)), b.current = n
                            }
                        }
                    }), [a, p, h]);
                r.useEffect((function() {
                    null != m.current && (window.cancelAnimationFrame(m.current), m.current = window.requestAnimationFrame(x))
                }), [x]);
                var O = r.useCallback((function(t, e) {
                        g.current.set(t.id, {
                            confetti: t,
                            spriteCanvas: e
                        }), null == m.current && x()
                    }), [x]),
                    C = r.useCallback((function(t, e, n, r, o) {
                        var a, u = P(null !== (a = t.id) && void 0 !== a ? a : (0, i.v4)(), t, n, r, o);
                        return O(u, e), u
                    }), [O]),
                    z = r.useCallback((function(t) {
                        g.current.delete(t)
                    }), []),
                    _ = r.useCallback((function() {
                        return g.current.clear()
                    }), []),
                    S = r.useCallback((function() {
                        return y.current
                    }), []);
                r.useImperativeHandle(e, (function() {
                    return {
                        createConfetti: C,
                        addConfetti: O,
                        deleteConfetti: z,
                        clearConfetti: _,
                        getCanvas: S
                    }
                }), [C, O, z, _, S]);
                var A = r.useCallback((function(t, e) {
                        var n, r, i = e.clickHandler,
                            o = e.mouseHandler;
                        if (null != i || null != o) {
                            var c = null === (n = y.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                            if (null != c) {
                                var l = function(t, e) {
                                    if (null == e) throw new Error("element should not be null");
                                    var n = e.getBoundingClientRect();
                                    return {
                                        x: t.clientX - n.left,
                                        y: t.clientY - n.top
                                    }
                                }(t, y.current);
                                if (u(l, {
                                        x: c.left,
                                        y: c.top,
                                        width: c.width,
                                        height: c.height
                                    })) {
                                    if (null != o) return o(t);
                                    if (null != i) {
                                        var s = -1e3 / w.current * 2,
                                            f = function(t, e) {
                                                for (var n = 0, r = Array.from(t.values()); n < r.length; n++) {
                                                    var i = r[n];
                                                    if (null != i && e(i)) return i
                                                }
                                                return null
                                            }(g.current, (function(t) {
                                                var e = t.confetti,
                                                    n = e.previewPositionUpdate(a, s);
                                                return u(l, {
                                                    x: n.x - e.width / 2,
                                                    y: n.y - e.height / 2,
                                                    width: e.width,
                                                    height: e.height
                                                })
                                            }));
                                        i(t, null !== (r = null == f ? void 0 : f.confetti) && void 0 !== r ? r : null)
                                    }
                                }
                            }
                        }
                    }), [a]),
                    E = r.useCallback((function(t) {
                        return A(t, {
                            clickHandler: c
                        })
                    }), [A, c]),
                    k = r.useCallback((function(t) {
                        return A(t, {
                            clickHandler: l
                        })
                    }), [A, l]),
                    R = r.useCallback((function(t) {
                        return A(t, {
                            mouseHandler: s
                        })
                    }), [A, s]),
                    j = r.useCallback((function(t) {
                        return A(t, {
                            mouseHandler: f
                        })
                    }), [A, f]);
                return r.useEffect((function() {
                    var t = function(t, e, n) {
                        null != n && window.addEventListener(t, e)
                    };
                    return t("click", E, c), t("mousedown", k, l), t("mousemove", R, s), t("mouseup", j, f),
                        function() {
                            window.removeEventListener("click", E), window.removeEventListener("mousedown", k), window.removeEventListener("mousemove", R), window.removeEventListener("mouseup", R)
                        }
                }), [E, k, R, j, c, l, s, f]), r.useEffect((function() {
                    var t = y.current,
                        e = new ResizeObserver((function() {
                            ! function(t) {
                                if (null != t) {
                                    var e = t.getBoundingClientRect(),
                                        r = e.width,
                                        i = e.height;
                                    t.width = r * n.g.devicePixelRatio, t.height = i * n.g.devicePixelRatio
                                }
                            }(y.current)
                        }));
                    return null != t && e.observe(t),
                        function() {
                            null != t && e.unobserve(t)
                        }
                }), []), r.createElement("canvas", v({}, d, {
                    className: o,
                    ref: y
                }))
            }));
            ! function(t, e) {
                void 0 === e && (e = {});
                var n = e.insertAt;
                if ("undefined" != typeof document) {
                    var r = document.head || document.getElementsByTagName("head")[0],
                        i = document.createElement("style");
                    i.type = "text/css",
                        "top" === n && r.firstChild ? r.insertBefore(i, r.firstChild) : r.appendChild(i), i.styleSheet ? i.styleSheet.cssText = t : i.appendChild(document.createTextNode(t))
                }
            }(".SpriteCanvas-module_spriteCanvasHidden__ndzQV {\n  display: none;\n  position: absolute;\n  width: 0;\n  height: 0;\n  left: -100%;\n}\n");
            var R = r.forwardRef((function(t, e) {
                var n, o = t.className,
                    u = t.visible,
                    c = void 0 !== u && u,
                    l = t.sprites,
                    s = t.colors,
                    f = t.spriteWidth,
                    h = t.spriteHeight,
                    p = r.useRef(null),
                    v = r.useRef([]),
                    d = r.useRef(!1),
                    y = r.useRef({});
                r.useImperativeHandle(e, (function() {
                    return {
                        getCanvas: function() {
                            return p.current
                        },
                        getCreateData: function() {
                            return {
                                sprites: v.current,
                                colors: s,
                                spriteWidth: f,
                                spriteHeight: h
                            }
                        },
                        addReadyListener: function(t) {
                            var e = (0, i.v4)();
                            return y.current[e] = t, e
                        },
                        removeReadyListener: function(t) {
                            delete y.current[t]
                        },
                        isReady: d.current
                    }
                }), [s, h, f]);
                var g = r.useCallback((function() {
                        var t = p.current,
                            e = null == t ? void 0 : t.getContext("2d", {
                                willReadFrequently: !0
                            });
                        null != e && null != t && (e.clearRect(0, 0, t.width, t.height),
                            v.current.forEach((function(t, n) {
                                var r = function(r, i) {
                                    var o = f * i + 2 * i,
                                        a = h * n + 2 * n;
                                    if (e.drawImage(t.image, o, a, f, h), null != r) {
                                        for (var u = e.getImageData(o, a, f, h), c = function(t) {
                                                "#" === t[0] && (t = t.slice(1));
                                                var e = parseInt(t, 16);
                                                return {
                                                    r: e >> 16 & 255,
                                                    g: e >> 8 & 255,
                                                    b: 255 & e
                                                }
                                            }(r), l = 0; l < u.data.length; l += 4) u.data[l] = c.r, u.data[l + 1] = c.g, u.data[l + 2] = c.b;
                                        e.putImageData(u, o, a)
                                    }
                                };
                                t.colorize ? s.forEach((function(t, e) {
                                    return r(t, e)
                                })) : r(null, 0)
                            })))
                    }), [s, h, f]),
                    m = r.useCallback((function() {
                        var t = l.map((function(t) {
                            var e = new Image,
                                n = "string" == typeof t ? t : t.src,
                                r = "string" == typeof t || t.colorize;
                            e.src = n;
                            var i = new Promise((function(t) {
                                e.onload = t
                            }));
                            return {
                                colorize: r,
                                image: e,
                                src: n,
                                loadPromise: i
                            }
                        }));
                        return Promise.all(t.map((function(t) {
                            return t.loadPromise
                        }))).then((function() {
                            v.current = t.map((function(t) {
                                return {
                                    colorize: t.colorize,
                                    image: t.image,
                                    src: t.src
                                }
                            }))
                        }))
                    }), [l]),
                    b = r.useCallback((function(t) {
                        for (var e in y.current) y.current[e](t)
                    }), []),
                    w = r.useCallback((function() {
                        return function(t, e, n, r) {
                            return new(n || (n = Promise))((function(i, o) {
                                function a(t) {
                                    try {
                                        c(r.next(t))
                                    } catch (t) {
                                        o(t)
                                    }
                                }

                                function u(t) {
                                    try {
                                        c(r.throw(t))
                                    } catch (t) {
                                        o(t)
                                    }
                                }

                                function c(t) {
                                    var e;
                                    t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                                        t(e)
                                    }))).then(a, u)
                                }
                                c((r = r.apply(t, e || [])).next())
                            }))
                        }(void 0, void 0, void 0, (function() {
                            return function(t, e) {
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
                                                u = e.call(t, a)
                                            } catch (t) {
                                                u = [6, t], r = 0
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
                            }(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, m()];
                                    case 1:
                                        return t.sent(), g(), d.current = !0, b(!0), [2]
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
                    null != p.current && (p.current.width = (f + 2) * Math.max(s.length, 1), p.current.height = (h + 2) * l.length)
                }), [s.length, h, f, l.length]), r.createElement("canvas", {
                    ref: p,
                    className: a()(o, (n = {}, n["SpriteCanvas-module_spriteCanvasHidden__ndzQV"] = !c, n))
                })
            }));

            function j(t, e) {
                var n, i = r.useState(null !== (n = null == e ? void 0 : e.isReady) && void 0 !== n && n),
                    o = i[0],
                    a = i[1];
                r.useEffect((function() {
                    var t = null == e ? void 0 : e.addReadyListener(a);
                    return function() {
                        null != t && (null == e || e.removeReadyListener(t))
                    }
                }), [e]);
                var u = r.useCallback((function(n, r) {
                        var i = void 0 === r ? {} : r,
                            o = i.sprite,
                            a = i.color,
                            u = null == e ? void 0 : e.getCreateData(),
                            c = null == e ? void 0 : e.getCanvas();
                        if (null != c && null != u && 0 !== u.sprites.length) return null == t ? void 0 : t.createConfetti(n, c, u, o, a)
                    }), [t, e]),
                    c = r.useCallback((function(t, e, n) {
                        for (var r = [], i = 0; i < e; i++) {
                            var o = u(t, n);
                            o && r.push(o)
                        }
                        return r
                    }), [u]),
                    l = r.useCallback((function(n) {
                        var r = null == e ? void 0 : e.getCanvas();
                        null != r && (null == t || t.addConfetti(n, r))
                    }), [t, e]),
                    s = r.useCallback((function(e) {
                        null == t || t.deleteConfetti(e)
                    }), [t]),
                    f = r.useCallback((function() {
                        return null == t ? void 0 : t.clearConfetti()
                    }), [t]);
                return r.useMemo((function() {
                    return {
                        createConfetti: u,
                        createMultipleConfetti: c,
                        addConfetti: l,
                        clearConfetti: f,
                        deleteConfetti: s,
                        isReady: o && null != e && null != t
                    }
                }), [l, f, t, u, c, s, o, e])
            }
        },
        824390: t => {
            "use strict";
            t.exports = function(t, e) {
                var n = e.length,
                    r = t.length;
                if (r > n) return !1;
                if (r === n) return t === e;
                t: for (var i = 0, o = 0; i < r; i++) {
                    for (var a = t.charCodeAt(i); o < n;)
                        if (e.charCodeAt(o++) === a) continue t;
                    return !1
                }
                return !0
            }
        },
        896874: t => {
            t.exports = function(t, e, n) {
                switch (n.length) {
                    case 0:
                        return t.call(e);
                    case 1:
                        return t.call(e, n[0]);
                    case 2:
                        return t.call(e, n[0], n[1]);
                    case 3:
                        return t.call(e, n[0], n[1], n[2])
                }
                return t.apply(e, n)
            }
        },
        70151: (t, e, n) => {
            var r = n(200278),
                i = n(173480);
            t.exports = function(t) {
                return i(r(t))
            }
        },
        269199: (t, e, n) => {
            var r = n(989881),
                i = n(498612);
            t.exports = function(t, e) {
                var n = -1,
                    o = i(t) ? Array(t.length) : [];
                r(t, (function(t, r, i) {
                    o[++n] = e(t, r, i)
                }));
                return o
            }
        },
        882689: (t, e, n) => {
            var r = n(829932),
                i = n(267206),
                o = n(269199),
                a = n(571131),
                u = n(307518),
                c = n(285022),
                l = n(406557);
            t.exports = function(t, e, n) {
                var s = -1;
                e = r(e.length ? e : [l], u(i));
                var f = o(t, (function(t, n, i) {
                    return {
                        criteria: r(e, (function(e) {
                            return e(t)
                        })),
                        index: ++s,
                        value: t
                    }
                }));
                return a(f, (function(t, e) {
                    return c(t, e, n)
                }))
            }
        },
        105976: (t, e, n) => {
            var r = n(406557),
                i = n(545357),
                o = n(430061);
            t.exports = function(t, e) {
                return o(i(t, e, r), t + "")
            }
        },
        356560: (t, e, n) => {
            var r = n(575703),
                i = n(538777),
                o = n(406557),
                a = i ? function(t, e) {
                    return i(t, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: r(e),
                        writable: !0
                    })
                } : o;
            t.exports = a
        },
        525127: (t, e, n) => {
            var r = n(173480),
                i = n(252628);
            t.exports = function(t) {
                return r(i(t))
            }
        },
        571131: t => {
            t.exports = function(t, e) {
                var n = t.length;
                t.sort(e);
                for (; n--;) t[n] = t[n].value;
                return t
            }
        },
        747415: (t, e, n) => {
            var r = n(829932);
            t.exports = function(t, e) {
                return r(e, (function(e) {
                    return t[e]
                }))
            }
        },
        626393: (t, e, n) => {
            var r = n(733448);
            t.exports = function(t, e) {
                if (t !== e) {
                    var n = void 0 !== t,
                        i = null === t,
                        o = t == t,
                        a = r(t),
                        u = void 0 !== e,
                        c = null === e,
                        l = e == e,
                        s = r(e);
                    if (!c && !s && !a && t > e || a && u && l && !c && !s || i && u && l || !n && l || !o) return 1;
                    if (!i && !a && !s && t < e || s && n && o && !i && !a || c && n && o || !u && o || !l) return -1
                }
                return 0
            }
        },
        285022: (t, e, n) => {
            var r = n(626393);
            t.exports = function(t, e, n) {
                for (var i = -1, o = t.criteria, a = e.criteria, u = o.length, c = n.length; ++i < u;) {
                    var l = r(o[i], a[i]);
                    if (l) {
                        return i >= c ? l : l * ("desc" == n[i] ? -1 : 1)
                    }
                }
                return t.index - e.index
            }
        },
        200278: t => {
            t.exports = function(t, e) {
                var n = -1,
                    r = t.length;
                e || (e = Array(r));
                for (; ++n < r;) e[n] = t[n];
                return e
            }
        },
        545357: (t, e, n) => {
            var r = n(896874),
                i = Math.max;
            t.exports = function(t, e, n) {
                e = i(void 0 === e ? t.length - 1 : e, 0);
                return function() {
                    for (var o = arguments, a = -1, u = i(o.length - e, 0), c = Array(u); ++a < u;) c[a] = o[e + a];
                    a = -1;
                    for (var l = Array(e + 1); ++a < e;) l[a] = o[a];
                    l[e] = n(c);
                    return r(t, this, l)
                }
            }
        },
        430061: (t, e, n) => {
            var r = n(356560),
                i = n(521275)(r);
            t.exports = i
        },
        521275: t => {
            var e = Date.now;
            t.exports = function(t) {
                var n = 0,
                    r = 0;
                return function() {
                    var i = e(),
                        o = 16 - (i - r);
                    r = i;
                    if (o > 0) {
                        if (++n >= 800) return arguments[0]
                    } else n = 0;
                    return t.apply(void 0, arguments)
                }
            }
        },
        173480: (t, e, n) => {
            var r = n(769877);
            t.exports = function(t, e) {
                var n = -1,
                    i = t.length,
                    o = i - 1;
                e = void 0 === e ? i : e;
                for (; ++n < e;) {
                    var a = r(n, o),
                        u = t[a];
                    t[a] = t[n];
                    t[n] = u
                }
                t.length = e;
                return t
            }
        },
        575703: t => {
            t.exports = function(t) {
                return function() {
                    return t
                }
            }
        },
        208804: (t, e, n) => {
            t.exports = n(91175)
        },
        91175: t => {
            t.exports = function(t) {
                return t && t.length ? t[0] : void 0
            }
        },
        531351: t => {
            var e = Array.prototype.reverse;
            t.exports = function(t) {
                return null == t ? t : e.call(t)
            }
        },
        369983: (t, e, n) => {
            var r = n(70151),
                i = n(525127),
                o = n(701469);
            t.exports = function(t) {
                return (o(t) ? r : i)(t)
            }
        },
        189734: (t, e, n) => {
            var r = n(121078),
                i = n(882689),
                o = n(105976),
                a = n(816612),
                u = o((function(t, e) {
                    if (null == t) return [];
                    var n = e.length;
                    n > 1 && a(t, e[0], e[1]) ? e = [] : n > 2 && a(e[0], e[1], e[2]) && (e = [e[0]]);
                    return i(t, r(e, 1), [])
                }));
            t.exports = u
        },
        252628: (t, e, n) => {
            var r = n(747415),
                i = n(3674);
            t.exports = function(t) {
                return null == t ? [] : r(t, i(t))
            }
        },
        16243: t => {
            if (!e) var e = {
                map: function(t, e) {
                    var n = {};
                    return e ? t.map((function(t, r) {
                        n.index = r;
                        return e.call(n, t)
                    })) : t.slice()
                },
                naturalOrder: function(t, e) {
                    return t < e ? -1 : t > e ? 1 : 0
                },
                sum: function(t, e) {
                    var n = {};
                    return t.reduce(e ? function(t, r, i) {
                        n.index = i;
                        return t + e.call(n, r)
                    } : function(t, e) {
                        return t + e
                    }, 0)
                },
                max: function(t, n) {
                    return Math.max.apply(null, n ? e.map(t, n) : t)
                }
            };
            var n = function() {
                function t(t, e, n) {
                    return (t << 10) + (e << 5) + n
                }

                function n(t) {
                    var e = [],
                        n = !1;

                    function r() {
                        e.sort(t);
                        n = !0
                    }
                    return {
                        push: function(t) {
                            e.push(t);
                            n = !1
                        },
                        peek: function(t) {
                            n || r();
                            void 0 === t && (t = e.length - 1);
                            return e[t]
                        },
                        pop: function() {
                            n || r();
                            return e.pop()
                        },
                        size: function() {
                            return e.length
                        },
                        map: function(t) {
                            return e.map(t)
                        },
                        debug: function() {
                            n || r();
                            return e
                        }
                    }
                }

                function r(t, e, n, r, i, o, a) {
                    var u = this;
                    u.r1 = t;
                    u.r2 = e;
                    u.g1 = n;
                    u.g2 = r;
                    u.b1 = i;
                    u.b2 = o;
                    u.histo = a
                }
                r.prototype = {
                    volume: function(t) {
                        var e = this;
                        e._volume && !t || (e._volume = (e.r2 - e.r1 + 1) * (e.g2 - e.g1 + 1) * (e.b2 - e.b1 + 1));
                        return e._volume
                    },
                    count: function(e) {
                        var n = this,
                            r = n.histo;
                        if (!n._count_set || e) {
                            var i, o, a, u = 0;
                            for (i = n.r1; i <= n.r2; i++)
                                for (o = n.g1; o <= n.g2; o++)
                                    for (a = n.b1; a <= n.b2; a++) u += r[t(i, o, a)] || 0;
                            n._count = u;
                            n._count_set = !0
                        }
                        return n._count
                    },
                    copy: function() {
                        var t = this;
                        return new r(t.r1, t.r2, t.g1, t.g2, t.b1, t.b2, t.histo)
                    },
                    avg: function(e) {
                        var n = this,
                            r = n.histo;
                        if (!n._avg || e) {
                            var i, o, a, u, c = 0,
                                l = 0,
                                s = 0,
                                f = 0;
                            for (o = n.r1; o <= n.r2; o++)
                                for (a = n.g1; a <= n.g2; a++)
                                    for (u = n.b1; u <= n.b2; u++) {
                                        c += i = r[t(o, a, u)] || 0;
                                        l += i * (o + .5) * 8;
                                        s += i * (a + .5) * 8;
                                        f += i * (u + .5) * 8
                                    }
                            n._avg = c ? [~~(l / c), ~~(s / c), ~~(f / c)] : [~~(8 * (n.r1 + n.r2 + 1) / 2), ~~(8 * (n.g1 + n.g2 + 1) / 2), ~~(8 * (n.b1 + n.b2 + 1) / 2)]
                        }
                        return n._avg
                    },
                    contains: function(t) {
                        var e = this,
                            n = t[0] >> 3;
                        gval = t[1] >> 3;
                        bval = t[2] >> 3;
                        return n >= e.r1 && n <= e.r2 && gval >= e.g1 && gval <= e.g2 && bval >= e.b1 && bval <= e.b2
                    }
                };

                function i() {
                    this.vboxes = new n((function(t, n) {
                        return e.naturalOrder(t.vbox.count() * t.vbox.volume(), n.vbox.count() * n.vbox.volume())
                    }))
                }
                i.prototype = {
                    push: function(t) {
                        this.vboxes.push({
                            vbox: t,
                            color: t.avg()
                        })
                    },
                    palette: function() {
                        return this.vboxes.map((function(t) {
                            return t.color
                        }))
                    },
                    size: function() {
                        return this.vboxes.size()
                    },
                    map: function(t) {
                        for (var e = this.vboxes, n = 0; n < e.size(); n++)
                            if (e.peek(n).vbox.contains(t)) return e.peek(n).color;
                        return this.nearest(t)
                    },
                    nearest: function(t) {
                        for (var e, n, r, i = this.vboxes, o = 0; o < i.size(); o++)
                            if ((n = Math.sqrt(Math.pow(t[0] - i.peek(o).color[0], 2) + Math.pow(t[1] - i.peek(o).color[1], 2) + Math.pow(t[2] - i.peek(o).color[2], 2))) < e || void 0 === e) {
                                e = n;
                                r = i.peek(o).color
                            } return r
                    },
                    forcebw: function() {
                        var t = this.vboxes;
                        t.sort((function(t, n) {
                            return e.naturalOrder(e.sum(t.color), e.sum(n.color))
                        }));
                        var n = t[0].color;
                        n[0] < 5 && n[1] < 5 && n[2] < 5 && (t[0].color = [0, 0, 0]);
                        var r = t.length - 1,
                            i = t[r].color;
                        i[0] > 251 && i[1] > 251 && i[2] > 251 && (t[r].color = [255, 255, 255])
                    }
                };

                function o(n, r) {
                    if (r.count()) {
                        var i = r.r2 - r.r1 + 1,
                            o = r.g2 - r.g1 + 1,
                            a = r.b2 - r.b1 + 1,
                            u = e.max([i, o, a]);
                        if (1 == r.count()) return [r.copy()];
                        var c, l, s, f, h = 0,
                            p = [],
                            v = [];
                        if (u == i)
                            for (c = r.r1; c <= r.r2; c++) {
                                f = 0;
                                for (l = r.g1; l <= r.g2; l++)
                                    for (s = r.b1; s <= r.b2; s++) f += n[t(c, l, s)] || 0;
                                h += f;
                                p[c] = h
                            } else if (u == o)
                                for (c = r.g1; c <= r.g2; c++) {
                                    f = 0;
                                    for (l = r.r1; l <= r.r2; l++)
                                        for (s = r.b1; s <= r.b2; s++) f += n[t(l, c, s)] || 0;
                                    h += f;
                                    p[c] = h
                                } else
                                    for (c = r.b1; c <= r.b2; c++) {
                                        f = 0;
                                        for (l = r.r1; l <= r.r2; l++)
                                            for (s = r.g1; s <= r.g2; s++) f += n[t(l, s, c)] || 0;
                                        h += f;
                                        p[c] = h
                                    }
                        p.forEach((function(t, e) {
                            v[e] = h - t
                        }));
                        return d(u == i ? "r" : u == o ? "g" : "b")
                    }

                    function d(t) {
                        var e, n, i, o, a, u = t + "1",
                            l = t + "2",
                            s = 0;
                        for (c = r[u]; c <= r[l]; c++)
                            if (p[c] > h / 2) {
                                i = r.copy();
                                o = r.copy();
                                a = (e = c - r[u]) <= (n = r[l] - c) ? Math.min(r[l] - 1, ~~(c + n / 2)) : Math.max(r[u], ~~(c - 1 - e / 2));
                                for (; !p[a];) a++;
                                s = v[a];
                                for (; !s && p[a - 1];) s = v[--a];
                                i[l] = a;
                                o[u] = i[l] + 1;
                                return [i, o]
                            }
                    }
                }
                return {
                    quantize: function(a, u) {
                        if (!a.length || u < 2 || u > 256) return !1;
                        var c = function(e) {
                            var n, r, i, o, a = new Array(32768);
                            e.forEach((function(e) {
                                r = e[0] >> 3;
                                i = e[1] >> 3;
                                o = e[2] >> 3;
                                n = t(r, i, o);
                                a[n] = (a[n] || 0) + 1
                            }));
                            return a
                        }(a);
                        c.forEach((function() {
                            0
                        }));
                        var l = function(t, e) {
                                var n, i, o, a = 1e6,
                                    u = 0,
                                    c = 1e6,
                                    l = 0,
                                    s = 1e6,
                                    f = 0;
                                t.forEach((function(t) {
                                    n = t[0] >> 3;
                                    i = t[1] >> 3;
                                    o = t[2] >> 3;
                                    n < a ? a = n : n > u && (u = n);
                                    i < c ? c = i : i > l && (l = i);
                                    o < s ? s = o : o > f && (f = o)
                                }));
                                return new r(a, u, c, l, s, f, e)
                            }(a, c),
                            s = new n((function(t, n) {
                                return e.naturalOrder(t.count(), n.count())
                            }));
                        s.push(l);

                        function f(t, e) {
                            for (var n, r = 1, i = 0; i < 1e3;)
                                if ((n = t.pop()).count()) {
                                    var a = o(c, n),
                                        u = a[0],
                                        l = a[1];
                                    if (!u) return;
                                    t.push(u);
                                    if (l) {
                                        t.push(l);
                                        r++
                                    }
                                    if (r >= e) return;
                                    if (i++ > 1e3) return
                                } else {
                                    t.push(n);
                                    i++
                                }
                        }
                        f(s, .75 * u);
                        for (var h = new n((function(t, n) {
                                return e.naturalOrder(t.count() * t.volume(), n.count() * n.volume())
                            })); s.size();) h.push(s.pop());
                        f(h, u - h.size());
                        for (var p = new i; h.size();) p.push(h.pop());
                        return p
                    }
                }
            }();
            t.exports = n.quantize
        },
        620745: (t, e, n) => {
            "use strict";
            var r = n(973935);
            e.s = r.createRoot;
            r.hydrateRoot
        },
        108717: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => f
            });
            var r = n(785893),
                i = (n(667294), n(294184)),
                o = n.n(i),
                a = n(294347),
                u = n.n(a);

            function c(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function l(t, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : function(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(e)).forEach((function(n) {
                    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
                }));
                return t
            }

            function s(t, e) {
                if (null == t) return {};
                var n, r, i = function(t, e) {
                    if (null == t) return {};
                    var n, r, i = {},
                        o = Object.keys(t);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        e.indexOf(n) >= 0 || (i[n] = t[n])
                    }
                    return i
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n])
                    }
                }
                return i
            }
            const f = function(t) {
                var e = t.open,
                    n = void 0 !== e && e,
                    i = t.className,
                    a = s(t, ["open", "className"]);
                return (0, r.jsxs)("button", l(function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                        }))));
                        r.forEach((function(e) {
                            c(t, e, n[e])
                        }))
                    }
                    return t
                }({
                    type: "button",
                    className: o()(u().btnHamburger, c({}, u().btnHamburgerOpen, n), i)
                }, a), {
                    children: [(0, r.jsx)("span", {}), (0, r.jsx)("span", {}), (0, r.jsx)("span", {}), (0, r.jsx)("span", {}), (0, r.jsx)("span", {}), (0, r.jsx)("span", {})]
                }))
            }
        },
        180735: (t, e, n) => {
            "use strict";
            n.d(e, {
                h: () => r
            });
            var r;
            ! function(t) {
                t[t.USER = 100] = "USER";
                t[t.STREAM = 18] = "STREAM"
            }(r || (r = {}))
        },
        284157: (t, e, n) => {
            "use strict";
            n.d(e, {
                n: () => r
            });
            var r;
            ! function(t) {
                t.CONNECT_VOICE = "connect_voice"
            }(r || (r = {}));
            new Set(["connect_voice"])
        },
        349139: (t, e, n) => {
            "use strict";
            n.d(e, {
                o: () => r
            });
            var r;
            ! function(t) {
                t.TRANSFER_EXISTING_CALL = "TRANSFER_EXISTING_CALL";
                t.CREATE_NEW_CALL = "CREATE_NEW_CALL"
            }(r || (r = {}));
            new Set(["CREATE_NEW_CALL", "TRANSFER_EXISTING_CALL"])
        },
        248634: (t, e, n) => {
            "use strict";
            n.d(e, {
                z: () => r
            });
            var r;
            ! function(t) {
                t.MATCH_ALL = "match_all";
                t.MATCH_SOME = "match_some"
            }(r || (r = {}));
            new Set(["match_all", "match_some"])
        },
        938002: (t, e, n) => {
            "use strict";
            n.d(e, {
                Y: () => r
            });

            function r() {
                var t = Promise.resolve(null);
                return function(e) {
                    return new Promise((function(n, r) {
                        t = t.then(e).then(n, r)
                    }))
                }
            }
        },
        125333: (t, e, n) => {
            "use strict";
            n.d(e, {
                z0: () => r,
                Oh: () => i,
                Gk: () => o
            });

            function r(t) {
                return "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.INVITE_HOST, "/").concat(t)
            }

            function i(t) {
                return "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST, "/").concat(t)
            }

            function o() {
                return "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT, "/channels/@me")
            }
        },
        58964: (t, e, n) => {
            "use strict";
            n.d(e, {
                ZP: () => v,
                WS: () => h,
                zS: () => p
            });
            var r = n(131795),
                i = n.n(r),
                o = n(468811),
                a = n.n(o);
            const u = n(426080).Z;

            function c(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function l(t, e) {
                if (null == t) return {};
                var n, r, i = function(t, e) {
                    if (null == t) return {};
                    var n, r, i = {},
                        o = Object.keys(t);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        e.indexOf(n) >= 0 || (i[n] = t[n])
                    }
                    return i
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n])
                    }
                }
                return i
            }

            function s(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(t); !(a = (r = n.next()).done); a = !0) {
                                o.push(r.value);
                                if (e && o.length === e) break
                            }
                        } catch (t) {
                            u = !0;
                            i = t
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return o
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return c(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var f = "https://discordapp.page.link";

            function h() {
                return a().v4()
            }

            function p(t) {
                if (!t.startsWith(f)) return null;
                try {
                    var e = new URL(t).searchParams,
                        n = e.get("link");
                    if (null == n) return null;
                    var r, i = decodeURIComponent(n),
                        o = new URL(i).searchParams,
                        a = {
                            utmSource: null !== (r = e.get("utm_source")) && void 0 !== r ? r : void 0
                        },
                        u = !0,
                        c = !1,
                        l = void 0;
                    try {
                        for (var h, p = o.entries()[Symbol.iterator](); !(u = (h = p.next()).done); u = !0) {
                            var v = s(h.value, 2),
                                d = v[0],
                                y = v[1];
                            a[d] = y
                        }
                    } catch (t) {
                        c = !0;
                        l = t
                    } finally {
                        try {
                            u || null == p.return || p.return()
                        } finally {
                            if (c) throw l
                        }
                    }
                    return a
                } catch (t) {
                    return null
                }
            }

            function v(t, e) {
                var n = e.utmSource,
                    r = e.androidFallbackLink,
                    o = e.iosFallbackLink,
                    a = l(e, ["utmSource", "androidFallbackLink", "iosFallbackLink"]),
                    c = new URL(t);
                for (var s in a) {
                    var h = a[s];
                    null != h && c.searchParams.set(s, h)
                }
                var p, v, d, y, g, m = encodeURIComponent(c.toString()),
                    b = encodeURIComponent(u()),
                    w = (d = new RegExp("(".concat(["WebView", "(iPhone|iPod|iPad)(?!.*Safari/)"].join("|"), ")"), "ig"), y = null != (null === i() || void 0 === i() || null === (p = i().ua) || void 0 === p ? void 0 : p.match(d)), g = "Safari" === (null === i() || void 0 === i() ? void 0 : i().name) && !y,
                        "iOS" !== (null === i() || void 0 === i() || null === (v = i().os) || void 0 === v ? void 0 : v.family) || g ? 1 : 0),
                    x = null != r ? encodeURIComponent(r) : null,
                    O = null != o ? encodeURIComponent(o) : null,
                    C = "".concat(f, "/?link=").concat(m, "&utm_source=").concat(n, "&apn=").concat("com.discord", "&isi=").concat(985746746, "&ibi=").concat("com.hammerandchisel.discord", "&sd=").concat(b, "&efr=").concat(w);
                null != x && (C += "&afl=".concat(x));
                null != O && (C += "&ifl=".concat(O));
                return C
            }
        },
        426080: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => i
            });
            var r = n(805829);

            function i() {
                return r.Z.Messages.DynamicLinks.IOS_APP_PREVIEW_DESCRIPTION
            }
        },
        222789: (t, e, n) => {
            "use strict";
            n.d(e, {
                Rp: () => c,
                ge: () => o,
                RA: () => u
            });

            function r(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                Array.isArray(t) ? t.forEach((function(t) {
                    return r(t, e)
                })) : "string" == typeof t.content ? e.push(t.content) : null != t.content && r(t.content, e);
                return e
            }

            function i(t, e) {
                if (Array.isArray(e))
                    for (var n = e.length, r = 0; r < n; r++) t.push(e[r]);
                else t.push(e)
            }

            function o(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (Array.isArray(t)) {
                    for (var n = t.length, r = [], a = 0; a < n; a++) i(r, o(t[a], e));
                    return r
                }
                null != t.content && (t.content = o(t.content, t));
                return null != e && t.type === e.type ? t.content : t
            }
            var a = {};

            function u(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    limit: 200
                };
                if (Array.isArray(t))
                    for (var n = t.length, r = 0; r < n; r++) {
                        var i = u(t[r], e);
                        if (i === a) {
                            t.length = r;
                            break
                        }
                        t[r] = i
                    } else if ("text" !== t.type) {
                        e.limit -= 1;
                        if (e.limit <= 0) return a;
                        Array.isArray(t.content) && (t.content = u(t.content, e))
                    } return t
            }

            function c(t) {
                return r(t).join("")
            }
        },
        894012: (t, e, n) => {
            "use strict";
            n.d(e, {
                Rp: () => i.Rp,
                w4: () => o,
                _p: () => a
            });
            var r, i = n(222789),
                o = (r = n(25788).Z).reactParserFor,
                a = r.astParserFor
        },
        25788: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => c
            });
            var r = n(120053),
                i = n.n(r),
                o = n(222789);

            function a(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function u(t, e, n, r, i) {
                n || (e += "\n\n");
                var u;
                u = t(e, function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                        }))));
                        r.forEach((function(e) {
                            a(t, e, n[e])
                        }))
                    }
                    return t
                }({
                    inline: n
                }, r));
                u = (0, o.ge)(u);
                u = (0, o.RA)(u);
                null != i && (u = i(u, n));
                return u
            }
            const c = {
                reactParserFor: function(t) {
                    var e = i().parserFor(t),
                        n = i().reactFor(i().ruleOutput(t, "react"));
                    return function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                        return n(u(e, t, r, i, o), i)
                    }
                },
                astParserFor: function(t) {
                    var e = i().parserFor(t);
                    return function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                        return u(e, t, n, r, i)
                    }
                }
            }
        },
        283151: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => a
            });
            var r = n(667294);

            function i(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function o(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(t); !(a = (r = n.next()).done); a = !0) {
                                o.push(r.value);
                                if (e && o.length === e) break
                            }
                        } catch (t) {
                            u = !0;
                            i = t
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return o
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return i(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function a() {
                var t = o((0, r.useState)({}), 2)[1];
                return (0, r.useCallback)((function() {
                    return t({})
                }), [])
            }
        },
        989824: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => o
            });
            var r = n(667294),
                i = {};

            function o(t) {
                var e = (0, r.useRef)(i);
                e.current === i && (e.current = t());
                return e.current
            }
        },
        498964: (t, e, n) => {
            "use strict";
            n.d(e, {
                P: () => q,
                EQ: () => Q
            });
            const r = Symbol.for("@ts-pattern/matcher"),
                i = Symbol.for("@ts-pattern/isVariadic"),
                o = "@ts-pattern/anonymous-select-key",
                a = t => Boolean(t && "object" == typeof t),
                u = t => t && !!t[r],
                c = (t, e, n) => {
                    if (u(t)) {
                        const i = t[r](),
                            {
                                matched: o,
                                selections: a
                            } = i.match(e);
                        return o && a && Object.keys(a).forEach((t => n(t, a[t]))), o
                    }
                    if (a(t)) {
                        if (!a(e)) return !1;
                        if (Array.isArray(t)) {
                            if (!Array.isArray(e)) return !1;
                            let r = [],
                                o = [],
                                a = [];
                            for (const e of t.keys()) {
                                const n = t[e];
                                u(n) && n[i] ? a.push(n) : a.length ? o.push(n) : r.push(n)
                            }
                            if (a.length) {
                                if (a.length > 1) throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
                                if (e.length < r.length + o.length) return !1;
                                const t = e.slice(0, r.length),
                                    i = 0 === o.length ? [] : e.slice(-o.length),
                                    u = e.slice(r.length, 0 === o.length ? 1 / 0 : -o.length);
                                return r.every(((e, r) => c(e, t[r], n))) && o.every(((t, e) => c(t, i[e], n))) && (0 === a.length || c(a[0], u, n))
                            }
                            return t.length === e.length && t.every(((t, r) => c(t, e[r], n)))
                        }
                        return Object.keys(t).every((i => {
                            const o = t[i];
                            return (i in e || u(a = o) && "optional" === a[r]().matcherType) && c(o, e[i], n);
                            var a
                        }))
                    }
                    return Object.is(e, t)
                },
                l = t => {
                    var e, n, i;
                    return a(t) ? u(t) ? null != (e = null == (n = (i = t[r]()).getSelectionKeys) ? void 0 : n.call(i)) ? e : [] : Array.isArray(t) ? s(t, l) : s(Object.values(t), l) : []
                },
                s = (t, e) => t.reduce(((t, n) => t.concat(e(n))), []);

            function f(t) {
                return Object.assign(t, {
                    optional: () => p(t),
                    and: e => y(t, e),
                    or: e => g(t, e),
                    select: e => void 0 === e ? b(t) : b(e, t)
                })
            }

            function h(t) {
                return Object.assign((t => Object.assign(t, {
                    *[Symbol.iterator]() {
                        yield Object.assign(t, {
                            [i]: !0
                        })
                    }
                }))(t), {
                    optional: () => h(p(t)),
                    select: e => h(void 0 === e ? b(t) : b(e, t))
                })
            }

            function p(t) {
                return f({
                    [r]: () => ({
                        match: e => {
                            let n = {};
                            const r = (t, e) => {
                                n[t] = e
                            };
                            return void 0 === e ? (l(t).forEach((t => r(t, void 0))), {
                                matched: !0,
                                selections: n
                            }) : {
                                matched: c(t, e, r),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => l(t),
                        matcherType: "optional"
                    })
                })
            }
            const v = (t, e) => {
                    for (const n of t)
                        if (!e(n)) return !1;
                    return !0
                },
                d = (t, e) => {
                    for (const [n, r] of t.entries())
                        if (!e(r, n)) return !1;
                    return !0
                };

            function y(...t) {
                return f({
                    [r]: () => ({
                        match: e => {
                            let n = {};
                            const r = (t, e) => {
                                n[t] = e
                            };
                            return {
                                matched: t.every((t => c(t, e, r))),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => s(t, l),
                        matcherType: "and"
                    })
                })
            }

            function g(...t) {
                return f({
                    [r]: () => ({
                        match: e => {
                            let n = {};
                            const r = (t, e) => {
                                n[t] = e
                            };
                            return s(t, l).forEach((t => r(t, void 0))), {
                                matched: t.some((t => c(t, e, r))),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => s(t, l),
                        matcherType: "or"
                    })
                })
            }

            function m(t) {
                return {
                    [r]: () => ({
                        match: e => ({
                            matched: Boolean(t(e))
                        })
                    })
                }
            }

            function b(...t) {
                const e = "string" == typeof t[0] ? t[0] : void 0,
                    n = 2 === t.length ? t[1] : "string" == typeof t[0] ? void 0 : t[0];
                return f({
                    [r]: () => ({
                        match: t => {
                            let r = {
                                [null != e ? e : o]: t
                            };
                            return {
                                matched: void 0 === n || c(n, t, ((t, e) => {
                                    r[t] = e
                                })),
                                selections: r
                            }
                        },
                        getSelectionKeys: () => [null != e ? e : o].concat(void 0 === n ? [] : l(n))
                    })
                })
            }

            function w(t) {
                return "number" == typeof t
            }

            function x(t) {
                return "string" == typeof t
            }

            function O(t) {
                return "bigint" == typeof t
            }
            const C = f(m((function(t) {
                    return !0
                }))),
                z = C,
                _ = t => Object.assign(f(t), {
                    startsWith: e => {
                        return _(y(t, (n = e, m((t => x(t) && t.startsWith(n))))));
                        var n
                    },
                    endsWith: e => {
                        return _(y(t, (n = e, m((t => x(t) && t.endsWith(n))))));
                        var n
                    },
                    minLength: e => _(y(t, (t => m((e => x(e) && e.length >= t)))(e))),
                    maxLength: e => _(y(t, (t => m((e => x(e) && e.length <= t)))(e))),
                    includes: e => {
                        return _(y(t, (n = e, m((t => x(t) && t.includes(n))))));
                        var n
                    },
                    regex: e => {
                        return _(y(t, (n = e, m((t => x(t) && Boolean(t.match(n)))))));
                        var n
                    }
                }),
                S = _(m(x)),
                A = (t, e) => m((n => w(n) && t <= n && e >= n)),
                E = t => m((e => w(e) && e < t)),
                P = t => m((e => w(e) && e > t)),
                k = t => m((e => w(e) && e <= t)),
                R = t => m((e => w(e) && e >= t)),
                j = () => m((t => w(t) && Number.isInteger(t))),
                I = () => m((t => w(t) && Number.isFinite(t))),
                F = () => m((t => w(t) && t > 0)),
                M = () => m((t => w(t) && t < 0)),
                L = t => Object.assign(f(t), {
                    between: (e, n) => L(y(t, A(e, n))),
                    lt: e => L(y(t, E(e))),
                    gt: e => L(y(t, P(e))),
                    lte: e => L(y(t, k(e))),
                    gte: e => L(y(t, R(e))),
                    int: () => L(y(t, j())),
                    finite: () => L(y(t, I())),
                    positive: () => L(y(t, F())),
                    negative: () => L(y(t, M()))
                }),
                V = L(m(w)),
                N = (t, e) => m((n => O(n) && t <= n && e >= n)),
                T = t => m((e => O(e) && e < t)),
                D = t => m((e => O(e) && e > t)),
                U = t => m((e => O(e) && e <= t)),
                B = t => m((e => O(e) && e >= t)),
                H = () => m((t => O(t) && t > 0)),
                W = () => m((t => O(t) && t < 0)),
                G = t => Object.assign(f(t), {
                    between: (e, n) => G(y(t, N(e, n))),
                    lt: e => G(y(t, T(e))),
                    gt: e => G(y(t, D(e))),
                    lte: e => G(y(t, U(e))),
                    gte: e => G(y(t, B(e))),
                    positive: () => G(y(t, H())),
                    negative: () => G(y(t, W()))
                }),
                K = G(m(O)),
                Z = f(m((function(t) {
                    return "boolean" == typeof t
                }))),
                X = f(m((function(t) {
                    return "symbol" == typeof t
                }))),
                $ = f(m((function(t) {
                    return null == t
                })));
            var q = {
                __proto__: null,
                matcher: r,
                optional: p,
                array: function(...t) {
                    return h({
                        [r]: () => ({
                            match: e => {
                                if (!Array.isArray(e)) return {
                                    matched: !1
                                };
                                if (0 === t.length) return {
                                    matched: !0
                                };
                                const n = t[0];
                                let r = {};
                                if (0 === e.length) return l(n).forEach((t => {
                                    r[t] = []
                                })), {
                                    matched: !0,
                                    selections: r
                                };
                                const i = (t, e) => {
                                    r[t] = (r[t] || []).concat([e])
                                };
                                return {
                                    matched: e.every((t => c(n, t, i))),
                                    selections: r
                                }
                            },
                            getSelectionKeys: () => 0 === t.length ? [] : l(t[0])
                        })
                    })
                },
                set: function(...t) {
                    return f({
                        [r]: () => ({
                            match: e => {
                                if (!(e instanceof Set)) return {
                                    matched: !1
                                };
                                let n = {};
                                if (0 === e.size) return {
                                    matched: !0,
                                    selections: n
                                };
                                if (0 === t.length) return {
                                    matched: !0
                                };
                                const r = (t, e) => {
                                        n[t] = (n[t] || []).concat([e])
                                    },
                                    i = t[0];
                                return {
                                    matched: v(e, (t => c(i, t, r))),
                                    selections: n
                                }
                            },
                            getSelectionKeys: () => 0 === t.length ? [] : l(t[0])
                        })
                    })
                },
                map: function(...t) {
                    return f({
                        [r]: () => ({
                            match: e => {
                                if (!(e instanceof Map)) return {
                                    matched: !1
                                };
                                let n = {};
                                if (0 === e.size) return {
                                    matched: !0,
                                    selections: n
                                };
                                const r = (t, e) => {
                                    n[t] = (n[t] || []).concat([e])
                                };
                                if (0 === t.length) return {
                                    matched: !0
                                };
                                var i;
                                if (1 === t.length) throw new Error(`\`P.map\` wasn't given enough arguments. Expected (key, value), received ${null==(i=t[0])?void 0:i.toString()}`);
                                const [o, a] = t;
                                return {
                                    matched: d(e, ((t, e) => {
                                        const n = c(o, e, r),
                                            i = c(a, t, r);
                                        return n && i
                                    })),
                                    selections: n
                                }
                            },
                            getSelectionKeys: () => 0 === t.length ? [] : [...l(t[0]), ...l(t[1])]
                        })
                    })
                },
                intersection: y,
                union: g,
                not: function(t) {
                    return f({
                        [r]: () => ({
                            match: e => ({
                                matched: !c(t, e, (() => {}))
                            }),
                            getSelectionKeys: () => [],
                            matcherType: "not"
                        })
                    })
                },
                when: m,
                select: b,
                any: C,
                _: z,
                string: S,
                between: A,
                lt: E,
                gt: P,
                lte: k,
                gte: R,
                int: j,
                finite: I,
                positive: F,
                negative: M,
                number: V,
                betweenBigInt: N,
                ltBigInt: T,
                gtBigInt: D,
                lteBigInt: U,
                gteBigInt: B,
                positiveBigInt: H,
                negativeBigInt: W,
                bigint: K,
                boolean: Z,
                symbol: X,
                nullish: $,
                instanceOf: function(t) {
                    return f(m(function(t) {
                        return e => e instanceof t
                    }(t)))
                },
                shape: function(t) {
                    return f(m(function(...t) {
                        if (1 === t.length) {
                            const [e] = t;
                            return t => c(e, t, (() => {}))
                        }
                        if (2 === t.length) {
                            const [e, n] = t;
                            return c(e, n, (() => {}))
                        }
                        throw new Error(`isMatching wasn't given the right number of arguments: expected 1 or 2, received ${t.length}.`)
                    }(t)))
                }
            };
            const Y = {
                matched: !1,
                value: void 0
            };

            function Q(t) {
                return new J(t, Y)
            }
            class J {
                constructor(t, e) {
                    this.input = void 0, this.state = void 0, this.input = t, this.state = e
                }
                with(...t) {
                    if (this.state.matched) return this;
                    const e = t[t.length - 1],
                        n = [t[0]];
                    let r;
                    3 === t.length && "function" == typeof t[1] ? (n.push(t[0]), r = t[1]) : t.length > 2 && n.push(...t.slice(1, t.length - 1));
                    let i = !1,
                        a = {};
                    const u = (t, e) => {
                            i = !0, a[t] = e
                        },
                        l = !n.some((t => c(t, this.input, u))) || r && !Boolean(r(this.input)) ? Y : {
                            matched: !0,
                            value: e(i ? o in a ? a[o] : a : this.input, this.input)
                        };
                    return new J(this.input, l)
                }
                when(t, e) {
                    if (this.state.matched) return this;
                    const n = Boolean(t(this.input));
                    return new J(this.input, n ? {
                        matched: !0,
                        value: e(this.input, this.input)
                    } : Y)
                }
                otherwise(t) {
                    return this.state.matched ? this.state.value : t(this.input)
                }
                exhaustive() {
                    return this.run()
                }
                run() {
                    if (this.state.matched) return this.state.value;
                    let t;
                    try {
                        t = JSON.stringify(this.input)
                    } catch (e) {
                        t = this.input
                    }
                    throw new Error(`Pattern matching error: no pattern matches value ${t}`)
                }
                returnType() {
                    return this
                }
            }
        }
    }
]);
//# sourceMappingURL=a4e555477cf451dcc220.js.map