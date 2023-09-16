"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [33973], {
        737264: t => {
            t.exports.Q = function(t) {
                var e, n = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(t);
                if (!n) return null;
                n.shift();
                var i = null,
                    r = [];
                if (n[2]) {
                    i = (e = n[2].split("-")).shift();
                    r = e
                }
                var a = [];
                n[5] && (a = n[5].split("-")).shift();
                var o = [];
                if (n[6]) {
                    (e = n[6].split("-")).shift();
                    for (var u, l = []; e.length;) {
                        var s = e.shift();
                        if (1 === s.length)
                            if (u) {
                                o.push({
                                    singleton: u,
                                    extension: l
                                });
                                u = s;
                                l = []
                            } else u = s;
                        else l.push(s)
                    }
                    o.push({
                        singleton: u,
                        extension: l
                    })
                }
                var c = [];
                if (n[7]) {
                    (c = n[7].split("-")).shift();
                    c.shift()
                }
                var f = [];
                n[8] && (f = n[8].split("-")).shift();
                return {
                    langtag: {
                        language: {
                            language: i,
                            extlang: r
                        },
                        script: n[3] || null,
                        region: n[4] || null,
                        variant: a,
                        extension: o,
                        privateuse: c
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
            n.d(e, {
                O_: () => E,
                qA: () => f,
                Ji: () => M,
                uR: () => O
            });
            var i = n(667294),
                r = n(468811),
                a = n(294184),
                o = n.n(a);

            function u(t, e) {
                var n = t.x,
                    i = t.y;
                return n > e.x && n < e.x + e.width && i > e.y && i < e.y + e.height
            }

            function l(t, e) {
                return t * e * e * (e > 0 ? -1 : 1)
            }
            var s = function() {
                    function t(t) {
                        this.id = t.id, this.position = t.position, this.velocity = t.velocity, this.rotation = t.rotation, this.dragCoefficient = t.dragCoefficient, this.size = t.size, this.opacity = t.opacity, this.spriteX = t.spriteX, this.spriteY = t.spriteY, this.spriteWidth = t.spriteWidth, this.spriteHeight = t.spriteHeight, this._lastUpdatedAt = Date.now()
                    }
                    return t.prototype.getNewForces = function(t, e) {
                            var n = t.wind * e,
                                i = -t.gravity * e;
                            return {
                                x: n + l(this.dragCoefficient.x, this.velocity.x),
                                y: i + l(this.dragCoefficient.y, this.velocity.y)
                            }
                        },
                        t.prototype.update = function(t) {
                            var e = Date.now(),
                                n = (e - this._lastUpdatedAt) / 100;
                            this.rotation.update(n), this.dragCoefficient.update(n);
                            var i = this.getNewForces(t, n),
                                r = i.x,
                                a = i.y;
                            this.velocity.update(n), this.velocity.x += r, this.velocity.y += a, this.position.update(n), this.position.x += this.velocity.x * n, this.position.y += this.velocity.y * n, this.size.update(n), this.opacity.update(n), this._lastUpdatedAt = e
                        }, t.prototype.previewPositionUpdate = function(t, e) {
                            var n = e / 100,
                                i = this.velocity.previewUpdate(n),
                                r = this.getNewForces(t, n),
                                a = r.x,
                                o = r.y;
                            i.x += a, i.y += o;
                            var u = this.position.previewUpdate(n);
                            return u.x += i.x * n, u.y += i.y * n, u
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
                c = {
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
                        i = e.wind;
                    this.gravity = -9.8, this.wind = 0, this.gravity = null != n ? n : this.gravity, this.wind = null != i ? i : this.wind
                },
                d = function(t, e) {
                    return d = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                    }, d(t, e)
                };

            function h(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

                function n() {
                    this.constructor = t
                }
                d(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }
            var p = function() {
                return p = Object.assign || function(t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                        for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }, p.apply(this, arguments)
            };
            var v = function(t) {
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
                m = function(t) {
                    function e(e, n, i) {
                        var r = t.call(this, e, n) || this;
                        return r._z = i, r
                    }
                    return h(e, t), e.prototype.update = function(e) {
                        t.prototype.update.call(this, e), this._z.update(e)
                    }, e.prototype.previewUpdate = function(e) {
                        var n = t.prototype.previewUpdate.call(this, e);
                        return p(p({}, n), {
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
                g = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return h(e, t), e.prototype.update = function() {}, e.prototype.previewUpdate = function() {
                        return this.value
                    }, e
                }(v),
                w = function(t) {
                    function e(e, n) {
                        var i = t.call(this, e) || this;
                        return i.addValue = n, i
                    }
                    return h(e, t), e.prototype.update = function(t) {
                        this.value = this.previewUpdate(t)
                    }, e.prototype.previewUpdate = function(t) {
                        return this.value + this.addValue * t
                    }, e
                }(v),
                x = function(t) {
                    function e(e, n, i, r, a, o) {
                        var u = t.call(this, e) || this;
                        u.min = n, u.max = i, u.duration = r;
                        var l = u.value / (u.max - u.min) * u.duration,
                            s = isNaN(l) ? 0 : l;
                        return u.timePassed = s < 0 ? u.duration - s : s, u.directionMultiplier = a, u.easingFunction = o, u
                    }
                    return h(e, t), e.prototype.update = function(t) {
                        var e = this.doUpdate(t),
                            n = e[0],
                            i = e[1],
                            r = e[2];
                        this.value = n, this.directionMultiplier = r, this.timePassed = i
                    }, e.prototype.previewUpdate = function(t) {
                        return this.doUpdate(t)[0]
                    }, e.prototype.doUpdate = function(t) {
                        var e = this.max - this.min,
                            n = this.timePassed + t * this.directionMultiplier,
                            i = Math.min(Math.max(n, 0), this.duration),
                            r = n < 0 || n > this.duration ? -1 * this.directionMultiplier : this.directionMultiplier,
                            a = this.easingFunction(i, this.min, e, this.duration);
                        return [isNaN(a) ? 0 : a, i, r]
                    }, e
                }(v);

            function b(t, e) {
                return t === e ? t : Math.random() * (e - t + 1) + t
            }

            function z(t) {
                var e = Math.floor(b(0, t.length - 1));
                return [t[e], e]
            }

            function C(t, e) {
                return z([t, e])[0]
            }

            function R(t) {
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

            function k(t) {
                return function(t) {
                    switch (t.type) {
                        case "static":
                            return new g(t.value);
                        case "static-random":
                            return new g(b(t.minValue, t.maxValue));
                        case "linear":
                            return new w(t.value, t.addValue);
                        case "linear-random":
                            return new w(b(t.minValue, t.maxValue), b(t.minAddValue, t.maxAddValue));
                        case "oscillating":
                            return new x(t.value, t.start, t.final, t.duration, t.direction, t.easingFunction);
                        case "oscillating-random":
                            return new x(b(t.minValue, t.maxValue), b(t.minStart, t.maxStart), b(t.minFinal, t.maxFinal), b(t.minDuration, t.maxDuration), C(t.minDirection, t.maxDirection), z(t.easingFunctions)[0])
                    }
                }(p(p({}, t), {
                    valueType: "number"
                }))
            }

            function V(t) {
                return function(t) {
                    switch (t.type) {
                        case "static":
                            var e = R(t.value);
                            return new y(new g(e.x), new g(e.y));
                        case "static-random":
                            var n = R(t.minValue),
                                i = R(t.maxValue);
                            return new y(new g(b(n.x, i.x)), new g(b(n.y, i.y)));
                        case "linear":
                            e = R(t.value);
                            var r = R(t.addValue);
                            return new y(new w(e.x, r.x), new w(e.y, r.y));
                        case "linear-random":
                            n = R(t.minValue), i = R(t.maxValue);
                            var a = R(t.minAddValue),
                                o = R(t.maxAddValue);
                            return new y(new w(b(n.x, i.x), b(a.x, o.x)), new w(b(n.y, i.y), b(a.x, o.x)));
                        case "oscillating":
                            e = R(t.value);
                            var u = R(t.start),
                                l = R(t.final),
                                s = R(t.duration),
                                c = R(t.direction);
                            return new y(new x(e.x, u.x, l.x, s.x, c.x, t.easingFunction), new x(e.y, u.y, l.y, s.x, c.y, t.easingFunction));
                        case "oscillating-random":
                            n = R(t.minValue), i = R(t.maxValue);
                            var f = R(t.minStart),
                                d = R(t.maxStart),
                                h = R(t.minFinal),
                                p = R(t.maxFinal),
                                v = R(t.minDuration),
                                m = R(t.maxDuration),
                                _ = R(t.minDirection),
                                k = R(t.maxDirection);
                            return new y(new x(b(n.x, i.x), b(f.x, d.x), b(h.x, p.x), b(v.x, m.x), C(_.x, k.x), z(t.easingFunctions)[0]), new x(b(n.y, i.y), b(f.y, d.y), b(h.y, p.y), b(v.y, m.y), C(_.y, k.y), z(t.easingFunctions)[0]))
                    }
                }(p(p({}, t), {
                    valueType: "Vector2"
                }))
            }

            function F(t) {
                return function(t) {
                    switch (t.type) {
                        case "static":
                            var e = _(t.value);
                            return new m(new g(e.x), new g(e.y), new g(e.z));
                        case "static-random":
                            var n = _(t.minValue),
                                i = _(t.maxValue);
                            return new m(new g(b(n.x, i.x)), new g(b(n.y, i.y)), new g(b(n.z, i.z)));
                        case "linear":
                            e = _(t.value);
                            var r = _(t.addValue);
                            return new m(new w(e.x, r.x), new w(e.y, r.y), new w(e.z, r.z));
                        case "linear-random":
                            n = _(t.minValue), i = _(t.maxValue);
                            var a = _(t.minAddValue),
                                o = _(t.maxAddValue);
                            return new m(new w(b(n.x, i.x), b(a.x, o.x)), new w(b(n.y, i.y), b(a.y, o.y)), new w(b(n.z, i.z), b(a.z, o.z)));
                        case "oscillating":
                            e = _(t.value);
                            var u = _(t.start),
                                l = _(t.final),
                                s = _(t.duration),
                                c = _(t.direction);
                            return new m(new x(e.x, u.x, l.x, s.x, c.x, t.easingFunction), new x(e.y, u.y, l.y, s.z, c.y, t.easingFunction), new x(e.z, u.z, l.z, s.z, c.z, t.easingFunction));
                        case "oscillating-random":
                            n = _(t.minValue), i = _(t.maxValue);
                            var f = _(t.minStart),
                                d = _(t.maxStart),
                                h = _(t.minFinal),
                                p = _(t.maxFinal),
                                v = _(t.minDuration),
                                y = _(t.maxDuration),
                                R = _(t.minDirection),
                                k = _(t.maxDirection);
                            return new m(new x(b(n.x, i.x), b(f.x, d.x), b(h.x, p.x), b(v.x, y.x), C(R.x, k.x), z(t.easingFunctions)[0]), new x(b(n.y, i.y), b(f.y, d.y), b(h.y, p.y), b(v.y, y.y), C(R.y, k.y), z(t.easingFunctions)[0]), new x(b(n.z, i.z), b(f.z, d.z), b(h.z, p.z), b(v.z, y.z), C(R.z, k.z), z(t.easingFunctions)[0]))
                    }
                }(p(p({}, t), {
                    valueType: "Vector3"
                }))
            }

            function P(t, e, n, i, r) {
                var a = function(t, e) {
                        return p(p({
                            id: e
                        }, c), t)
                    }(e, t),
                    o = V(a.size),
                    u = function(t, e) {
                        if (null != t) {
                            var n = e.sprites.findIndex((function(e) {
                                return n = e, "string" == typeof(i = t) ? n.src === i && n.colorize : n.src === i.src && n.colorize === i.colorize;
                                var n, i
                            }));
                            if (-1 !== n) return [t, n]
                        }
                        return z(e.sprites)
                    }(i, n),
                    l = u[0],
                    f = u[1],
                    d = function(t, e, n) {
                        if (! function(t) {
                                return "string" == typeof t || t.colorize
                            }(t)) return 0;
                        var i = null != e ? n.colors.findIndex((function(t) {
                            return t === e
                        })) : -1;
                        return -1 !== i ? i : Math.floor(b(0, n.colors.length - 1))
                    }(null != i ? i : l, r, n);
                return new s({
                    id: t,
                    position: V(a.position),
                    velocity: V(a.velocity),
                    rotation: F(a.rotation),
                    dragCoefficient: V(a.dragCoefficient),
                    size: o,
                    opacity: k(a.opacity),
                    spriteX: d * n.spriteWidth + 2 * d,
                    spriteY: f * n.spriteHeight + 2 * f,
                    spriteWidth: n.spriteWidth,
                    spriteHeight: n.spriteHeight
                })
            }
            var E = i.forwardRef((function(t, e) {
                var a = t.className,
                    o = t.environment,
                    l = t.onClick,
                    s = t.onMouseDown,
                    c = t.onMouseMove,
                    f = t.onMouseUp,
                    d = t.onBeforeRender,
                    h = t.onAfterRender,
                    v = function(t, e) {
                        var n = {};
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
                        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                            var r = 0;
                            for (i = Object.getOwnPropertySymbols(t); r < i.length; r++) e.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[r]) && (n[i[r]] = t[i[r]])
                        }
                        return n
                    }(t, ["className", "environment", "onClick", "onMouseDown", "onMouseMove", "onMouseUp", "onBeforeRender", "onAfterRender"]),
                    y = i.useRef(null),
                    m = i.useRef(new Map),
                    g = i.useRef(null),
                    w = i.useRef(0),
                    x = i.useRef(0),
                    b = i.useCallback((function() {
                        var t = y.current;
                        if (null != t) {
                            var e = t.getContext("2d");
                            if (null != e) {
                                e.clearRect(0, 0, t.width, t.height), null == d || d(e), m.current.forEach((function(n, i) {
                                    var r = n.confetti,
                                        a = n.spriteCanvas;
                                    r.update(o), r.draw(a, e), r.shouldDestroy(t, o) && m.current.delete(i)
                                })), null == h || h(e), m.current.size > 0 ? g.current = window.requestAnimationFrame(b) : (e.clearRect(0, 0, t.width, t.height), g.current = null);
                                var n = Date.now();
                                0 !== w.current && (x.current = 1e3 / (n - w.current)), w.current = n
                            }
                        }
                    }), [o, h, d]);
                i.useEffect((function() {
                    null != g.current && (window.cancelAnimationFrame(g.current), g.current = window.requestAnimationFrame(b))
                }), [b]);
                var z = i.useCallback((function(t, e) {
                        m.current.set(t.id, {
                            confetti: t,
                            spriteCanvas: e
                        }), null == g.current && b()
                    }), [b]),
                    C = i.useCallback((function(t, e, n, i, a) {
                        var o, u = P(null !== (o = t.id) && void 0 !== o ? o : (0, r.v4)(), t, n, i, a);
                        return z(u, e), u
                    }), [z]),
                    R = i.useCallback((function(t) {
                        m.current.delete(t)
                    }), []),
                    _ = i.useCallback((function() {
                        return m.current.clear()
                    }), []),
                    k = i.useCallback((function() {
                        return y.current
                    }), []);
                i.useImperativeHandle(e, (function() {
                    return {
                        createConfetti: C,
                        addConfetti: z,
                        deleteConfetti: R,
                        clearConfetti: _,
                        getCanvas: k
                    }
                }), [C, z, R, _, k]);
                var V = i.useCallback((function(t, e) {
                        var n, i, r = e.clickHandler,
                            a = e.mouseHandler;
                        if (null != r || null != a) {
                            var l = null === (n = y.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                            if (null != l) {
                                var s = function(t, e) {
                                    if (null == e) throw new Error("element should not be null");
                                    var n = e.getBoundingClientRect();
                                    return {
                                        x: t.clientX - n.left,
                                        y: t.clientY - n.top
                                    }
                                }(t, y.current);
                                if (u(s, {
                                        x: l.left,
                                        y: l.top,
                                        width: l.width,
                                        height: l.height
                                    })) {
                                    if (null != a) return a(t);
                                    if (null != r) {
                                        var c = -1e3 / x.current * 2,
                                            f = function(t, e) {
                                                for (var n = 0, i = Array.from(t.values()); n < i.length; n++) {
                                                    var r = i[n];
                                                    if (null != r && e(r)) return r
                                                }
                                                return null
                                            }(m.current, (function(t) {
                                                var e = t.confetti,
                                                    n = e.previewPositionUpdate(o, c);
                                                return u(s, {
                                                    x: n.x - e.width / 2,
                                                    y: n.y - e.height / 2,
                                                    width: e.width,
                                                    height: e.height
                                                })
                                            }));
                                        r(t, null !== (i = null == f ? void 0 : f.confetti) && void 0 !== i ? i : null)
                                    }
                                }
                            }
                        }
                    }), [o]),
                    F = i.useCallback((function(t) {
                        return V(t, {
                            clickHandler: l
                        })
                    }), [V, l]),
                    E = i.useCallback((function(t) {
                        return V(t, {
                            clickHandler: s
                        })
                    }), [V, s]),
                    M = i.useCallback((function(t) {
                        return V(t, {
                            mouseHandler: c
                        })
                    }), [V, c]),
                    O = i.useCallback((function(t) {
                        return V(t, {
                            mouseHandler: f
                        })
                    }), [V, f]);
                return i.useEffect((function() {
                    var t = function(t, e, n) {
                        null != n && window.addEventListener(t, e)
                    };
                    return t("click", F, l), t("mousedown", E, s), t("mousemove", M, c), t("mouseup", O, f),
                        function() {
                            window.removeEventListener("click", F), window.removeEventListener("mousedown", E), window.removeEventListener("mousemove", M), window.removeEventListener("mouseup", M)
                        }
                }), [F, E, M, O, l, s, c, f]), i.useEffect((function() {
                    var t = y.current,
                        e = new ResizeObserver((function() {
                            ! function(t) {
                                if (null != t) {
                                    var e = t.getBoundingClientRect(),
                                        i = e.width,
                                        r = e.height;
                                    t.width = i * n.g.devicePixelRatio, t.height = r * n.g.devicePixelRatio
                                }
                            }(y.current)
                        }));
                    return null != t && e.observe(t),
                        function() {
                            null != t && e.unobserve(t)
                        }
                }), []), i.createElement("canvas", p({}, v, {
                    className: a,
                    ref: y
                }))
            }));
            ! function(t, e) {
                void 0 === e && (e = {});
                var n = e.insertAt;
                if ("undefined" != typeof document) {
                    var i = document.head || document.getElementsByTagName("head")[0],
                        r = document.createElement("style");
                    r.type = "text/css",
                        "top" === n && i.firstChild ? i.insertBefore(r, i.firstChild) : i.appendChild(r), r.styleSheet ? r.styleSheet.cssText = t : r.appendChild(document.createTextNode(t))
                }
            }(".SpriteCanvas-module_spriteCanvasHidden__ndzQV {\n  display: none;\n  position: absolute;\n  width: 0;\n  height: 0;\n  left: -100%;\n}\n");
            var M = i.forwardRef((function(t, e) {
                var n, a = t.className,
                    u = t.visible,
                    l = void 0 !== u && u,
                    s = t.sprites,
                    c = t.colors,
                    f = t.spriteWidth,
                    d = t.spriteHeight,
                    h = i.useRef(null),
                    p = i.useRef([]),
                    v = i.useRef(!1),
                    y = i.useRef({});
                i.useImperativeHandle(e, (function() {
                    return {
                        getCanvas: function() {
                            return h.current
                        },
                        getCreateData: function() {
                            return {
                                sprites: p.current,
                                colors: c,
                                spriteWidth: f,
                                spriteHeight: d
                            }
                        },
                        addReadyListener: function(t) {
                            var e = (0, r.v4)();
                            return y.current[e] = t, e
                        },
                        removeReadyListener: function(t) {
                            delete y.current[t]
                        },
                        isReady: v.current
                    }
                }), [c, d, f]);
                var m = i.useCallback((function() {
                        var t = h.current,
                            e = null == t ? void 0 : t.getContext("2d", {
                                willReadFrequently: !0
                            });
                        null != e && null != t && (e.clearRect(0, 0, t.width, t.height),
                            p.current.forEach((function(t, n) {
                                var i = function(i, r) {
                                    var a = f * r + 2 * r,
                                        o = d * n + 2 * n;
                                    if (e.drawImage(t.image, a, o, f, d), null != i) {
                                        for (var u = e.getImageData(a, o, f, d), l = function(t) {
                                                "#" === t[0] && (t = t.slice(1));
                                                var e = parseInt(t, 16);
                                                return {
                                                    r: e >> 16 & 255,
                                                    g: e >> 8 & 255,
                                                    b: 255 & e
                                                }
                                            }(i), s = 0; s < u.data.length; s += 4) u.data[s] = l.r, u.data[s + 1] = l.g, u.data[s + 2] = l.b;
                                        e.putImageData(u, a, o)
                                    }
                                };
                                t.colorize ? c.forEach((function(t, e) {
                                    return i(t, e)
                                })) : i(null, 0)
                            })))
                    }), [c, d, f]),
                    g = i.useCallback((function() {
                        var t = s.map((function(t) {
                            var e = new Image,
                                n = "string" == typeof t ? t : t.src,
                                i = "string" == typeof t || t.colorize;
                            e.src = n;
                            var r = new Promise((function(t) {
                                e.onload = t
                            }));
                            return {
                                colorize: i,
                                image: e,
                                src: n,
                                loadPromise: r
                            }
                        }));
                        return Promise.all(t.map((function(t) {
                            return t.loadPromise
                        }))).then((function() {
                            p.current = t.map((function(t) {
                                return {
                                    colorize: t.colorize,
                                    image: t.image,
                                    src: t.src
                                }
                            }))
                        }))
                    }), [s]),
                    w = i.useCallback((function(t) {
                        for (var e in y.current) y.current[e](t)
                    }), []),
                    x = i.useCallback((function() {
                        return function(t, e, n, i) {
                            return new(n || (n = Promise))((function(r, a) {
                                function o(t) {
                                    try {
                                        l(i.next(t))
                                    } catch (t) {
                                        a(t)
                                    }
                                }

                                function u(t) {
                                    try {
                                        l(i.throw(t))
                                    } catch (t) {
                                        a(t)
                                    }
                                }

                                function l(t) {
                                    var e;
                                    t.done ? r(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                                        t(e)
                                    }))).then(o, u)
                                }
                                l((i = i.apply(t, e || [])).next())
                            }))
                        }(void 0, void 0, void 0, (function() {
                            return function(t, e) {
                                var n, i, r, a, o = {
                                    label: 0,
                                    sent: function() {
                                        if (1 & r[0]) throw r[1];
                                        return r[1]
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
                                                if (n = 1, i && (r = 2 & u[0] ? i.return : u[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, u[1])).done) return r;
                                                switch (i = 0, r && (u = [2 & u[0], r.value]), u[0]) {
                                                    case 0:
                                                    case 1:
                                                        r = u;
                                                        break;
                                                    case 4:
                                                        return o.label++, {
                                                            value: u[1],
                                                            done: !1
                                                        };
                                                    case 5:
                                                        o.label++, i = u[1], u = [0];
                                                        continue;
                                                    case 7:
                                                        u = o.ops.pop(), o.trys.pop();
                                                        continue;
                                                    default:
                                                        if (!(r = o.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== u[0] && 2 !== u[0])) {
                                                            o = 0;
                                                            continue
                                                        }
                                                        if (3 === u[0] && (!r || u[1] > r[0] && u[1] < r[3])) {
                                                            o.label = u[1];
                                                            break
                                                        }
                                                        if (6 === u[0] && o.label < r[1]) {
                                                            o.label = r[1], r = u;
                                                            break
                                                        }
                                                        if (r && o.label < r[2]) {
                                                            o.label = r[2], o.ops.push(u);
                                                            break
                                                        }
                                                        r[2] && o.ops.pop(), o.trys.pop();
                                                        continue
                                                }
                                                u = e.call(t, o)
                                            } catch (t) {
                                                u = [6, t], i = 0
                                            } finally {
                                                n = r = 0
                                            }
                                            if (5 & u[0]) throw u[1];
                                            return {
                                                value: u[0] ? u[1] : void 0,
                                                done: !0
                                            }
                                        }([u, l])
                                    }
                                }
                            }(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, g()];
                                    case 1:
                                        return t.sent(), m(), v.current = !0, w(!0), [2]
                                }
                            }))
                        }))
                    }), [w, g, m]);
                return i.useEffect((function() {
                    x()
                }), [x]), i.useEffect((function() {
                    return function() {
                        return w(!1)
                    }
                }), [w]), i.useEffect((function() {
                    null != h.current && (h.current.width = (f + 2) * Math.max(c.length, 1), h.current.height = (d + 2) * s.length)
                }), [c.length, d, f, s.length]), i.createElement("canvas", {
                    ref: h,
                    className: o()(a, (n = {}, n["SpriteCanvas-module_spriteCanvasHidden__ndzQV"] = !l, n))
                })
            }));

            function O(t, e) {
                var n, r = i.useState(null !== (n = null == e ? void 0 : e.isReady) && void 0 !== n && n),
                    a = r[0],
                    o = r[1];
                i.useEffect((function() {
                    var t = null == e ? void 0 : e.addReadyListener(o);
                    return function() {
                        null != t && (null == e || e.removeReadyListener(t))
                    }
                }), [e]);
                var u = i.useCallback((function(n, i) {
                        var r = void 0 === i ? {} : i,
                            a = r.sprite,
                            o = r.color,
                            u = null == e ? void 0 : e.getCreateData(),
                            l = null == e ? void 0 : e.getCanvas();
                        if (null != l && null != u && 0 !== u.sprites.length) return null == t ? void 0 : t.createConfetti(n, l, u, a, o)
                    }), [t, e]),
                    l = i.useCallback((function(t, e, n) {
                        for (var i = [], r = 0; r < e; r++) {
                            var a = u(t, n);
                            a && i.push(a)
                        }
                        return i
                    }), [u]),
                    s = i.useCallback((function(n) {
                        var i = null == e ? void 0 : e.getCanvas();
                        null != i && (null == t || t.addConfetti(n, i))
                    }), [t, e]),
                    c = i.useCallback((function(e) {
                        null == t || t.deleteConfetti(e)
                    }), [t]),
                    f = i.useCallback((function() {
                        return null == t ? void 0 : t.clearConfetti()
                    }), [t]);
                return i.useMemo((function() {
                    return {
                        createConfetti: u,
                        createMultipleConfetti: l,
                        addConfetti: s,
                        clearConfetti: f,
                        deleteConfetti: c,
                        isReady: a && null != e && null != t
                    }
                }), [s, f, t, u, l, c, a, e])
            }
        },
        248634: (t, e, n) => {
            n.d(e, {
                z: () => i
            });
            var i;
            ! function(t) {
                t.MATCH_ALL = "match_all";
                t.MATCH_SOME = "match_some"
            }(i || (i = {}));
            new Set(["match_all", "match_some"])
        },
        989824: (t, e, n) => {
            n.d(e, {
                Z: () => a
            });
            var i = n(667294),
                r = {};

            function a(t) {
                var e = (0, i.useRef)(r);
                e.current === r && (e.current = t());
                return e.current
            }
        }
    }
]);
//# sourceMappingURL=41d0825cfcfee4eb744d.js.map