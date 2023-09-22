(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [89448, 58093, 65091], {
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
                        var s = e.shift();
                        if (1 === s.length)
                            if (u) {
                                a.push({
                                    singleton: u,
                                    extension: c
                                });
                                u = s;
                                c = []
                            } else u = s;
                        else c.push(s)
                    }
                    a.push({
                        singleton: u,
                        extension: c
                    })
                }
                var l = [];
                if (n[7]) {
                    (l = n[7].split("-")).shift();
                    l.shift()
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
                        privateuse: l
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
                O_: () => j,
                qA: () => f,
                Ji: () => E,
                uR: () => R
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
            var s = function() {
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
            var d = function() {
                return d = Object.assign || function(t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t
                }, d.apply(this, arguments)
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
                g = function(t) {
                    function e(e, n, r) {
                        var i = t.call(this, e, n) || this;
                        return i._z = r, i
                    }
                    return p(e, t), e.prototype.update = function(e) {
                        t.prototype.update.call(this, e), this._z.update(e)
                    }, e.prototype.previewUpdate = function(e) {
                        var n = t.prototype.previewUpdate.call(this, e);
                        return d(d({}, n), {
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
                }(v),
                w = function(t) {
                    function e(e, n) {
                        var r = t.call(this, e) || this;
                        return r.addValue = n, r
                    }
                    return p(e, t), e.prototype.update = function(t) {
                        this.value = this.previewUpdate(t)
                    }, e.prototype.previewUpdate = function(t) {
                        return this.value + this.addValue * t
                    }, e
                }(v),
                x = function(t) {
                    function e(e, n, r, i, o, a) {
                        var u = t.call(this, e) || this;
                        u.min = n, u.max = r, u.duration = i;
                        var c = u.value / (u.max - u.min) * u.duration,
                            s = isNaN(c) ? 0 : c;
                        return u.timePassed = s < 0 ? u.duration - s : s, u.directionMultiplier = o, u.easingFunction = a, u
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
                }(v);

            function b(t, e) {
                return t === e ? t : Math.random() * (e - t + 1) + t
            }

            function _(t) {
                var e = Math.floor(b(0, t.length - 1));
                return [t[e], e]
            }

            function O(t, e) {
                return _([t, e])[0]
            }

            function C(t) {
                return "number" == typeof t ? {
                    x: t,
                    y: t
                } : t
            }

            function k(t) {
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
                            return new m(b(t.minValue, t.maxValue));
                        case "linear":
                            return new w(t.value, t.addValue);
                        case "linear-random":
                            return new w(b(t.minValue, t.maxValue), b(t.minAddValue, t.maxAddValue));
                        case "oscillating":
                            return new x(t.value, t.start, t.final, t.duration, t.direction, t.easingFunction);
                        case "oscillating-random":
                            return new x(b(t.minValue, t.maxValue), b(t.minStart, t.maxStart), b(t.minFinal, t.maxFinal), b(t.minDuration, t.maxDuration), O(t.minDirection, t.maxDirection), _(t.easingFunctions)[0])
                    }
                }(d(d({}, t), {
                    valueType: "number"
                }))
            }

            function z(t) {
                return function(t) {
                    switch (t.type) {
                        case "static":
                            var e = C(t.value);
                            return new y(new m(e.x), new m(e.y));
                        case "static-random":
                            var n = C(t.minValue),
                                r = C(t.maxValue);
                            return new y(new m(b(n.x, r.x)), new m(b(n.y, r.y)));
                        case "linear":
                            e = C(t.value);
                            var i = C(t.addValue);
                            return new y(new w(e.x, i.x), new w(e.y, i.y));
                        case "linear-random":
                            n = C(t.minValue), r = C(t.maxValue);
                            var o = C(t.minAddValue),
                                a = C(t.maxAddValue);
                            return new y(new w(b(n.x, r.x), b(o.x, a.x)), new w(b(n.y, r.y), b(o.x, a.x)));
                        case "oscillating":
                            e = C(t.value);
                            var u = C(t.start),
                                c = C(t.final),
                                s = C(t.duration),
                                l = C(t.direction);
                            return new y(new x(e.x, u.x, c.x, s.x, l.x, t.easingFunction), new x(e.y, u.y, c.y, s.x, l.y, t.easingFunction));
                        case "oscillating-random":
                            n = C(t.minValue), r = C(t.maxValue);
                            var f = C(t.minStart),
                                h = C(t.maxStart),
                                p = C(t.minFinal),
                                d = C(t.maxFinal),
                                v = C(t.minDuration),
                                g = C(t.maxDuration),
                                k = C(t.minDirection),
                                S = C(t.maxDirection);
                            return new y(new x(b(n.x, r.x), b(f.x, h.x), b(p.x, d.x), b(v.x, g.x), O(k.x, S.x), _(t.easingFunctions)[0]), new x(b(n.y, r.y), b(f.y, h.y), b(p.y, d.y), b(v.y, g.y), O(k.y, S.y), _(t.easingFunctions)[0]))
                    }
                }(d(d({}, t), {
                    valueType: "Vector2"
                }))
            }

            function A(t) {
                return function(t) {
                    switch (t.type) {
                        case "static":
                            var e = k(t.value);
                            return new g(new m(e.x), new m(e.y), new m(e.z));
                        case "static-random":
                            var n = k(t.minValue),
                                r = k(t.maxValue);
                            return new g(new m(b(n.x, r.x)), new m(b(n.y, r.y)), new m(b(n.z, r.z)));
                        case "linear":
                            e = k(t.value);
                            var i = k(t.addValue);
                            return new g(new w(e.x, i.x), new w(e.y, i.y), new w(e.z, i.z));
                        case "linear-random":
                            n = k(t.minValue), r = k(t.maxValue);
                            var o = k(t.minAddValue),
                                a = k(t.maxAddValue);
                            return new g(new w(b(n.x, r.x), b(o.x, a.x)), new w(b(n.y, r.y), b(o.y, a.y)), new w(b(n.z, r.z), b(o.z, a.z)));
                        case "oscillating":
                            e = k(t.value);
                            var u = k(t.start),
                                c = k(t.final),
                                s = k(t.duration),
                                l = k(t.direction);
                            return new g(new x(e.x, u.x, c.x, s.x, l.x, t.easingFunction), new x(e.y, u.y, c.y, s.z, l.y, t.easingFunction), new x(e.z, u.z, c.z, s.z, l.z, t.easingFunction));
                        case "oscillating-random":
                            n = k(t.minValue), r = k(t.maxValue);
                            var f = k(t.minStart),
                                h = k(t.maxStart),
                                p = k(t.minFinal),
                                d = k(t.maxFinal),
                                v = k(t.minDuration),
                                y = k(t.maxDuration),
                                C = k(t.minDirection),
                                S = k(t.maxDirection);
                            return new g(new x(b(n.x, r.x), b(f.x, h.x), b(p.x, d.x), b(v.x, y.x), O(C.x, S.x), _(t.easingFunctions)[0]), new x(b(n.y, r.y), b(f.y, h.y), b(p.y, d.y), b(v.y, y.y), O(C.y, S.y), _(t.easingFunctions)[0]), new x(b(n.z, r.z), b(f.z, h.z), b(p.z, d.z), b(v.z, y.z), O(C.z, S.z), _(t.easingFunctions)[0]))
                    }
                }(d(d({}, t), {
                    valueType: "Vector3"
                }))
            }

            function P(t, e, n, r, i) {
                var o = function(t, e) {
                        return d(d({
                            id: e
                        }, l), t)
                    }(e, t),
                    a = z(o.size),
                    u = function(t, e) {
                        if (null != t) {
                            var n = e.sprites.findIndex((function(e) {
                                return n = e, "string" == typeof(r = t) ? n.src === r && n.colorize : n.src === r.src && n.colorize === r.colorize;
                                var n, r
                            }));
                            if (-1 !== n) return [t, n]
                        }
                        return _(e.sprites)
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
                        return -1 !== r ? r : Math.floor(b(0, n.colors.length - 1))
                    }(null != r ? r : c, i, n);
                return new s({
                    id: t,
                    position: z(o.position),
                    velocity: z(o.velocity),
                    rotation: A(o.rotation),
                    dragCoefficient: z(o.dragCoefficient),
                    size: a,
                    opacity: S(o.opacity),
                    spriteX: h * n.spriteWidth + 2 * h,
                    spriteY: f * n.spriteHeight + 2 * f,
                    spriteWidth: n.spriteWidth,
                    spriteHeight: n.spriteHeight
                })
            }
            var j = r.forwardRef((function(t, e) {
                var o = t.className,
                    a = t.environment,
                    c = t.onClick,
                    s = t.onMouseDown,
                    l = t.onMouseMove,
                    f = t.onMouseUp,
                    h = t.onBeforeRender,
                    p = t.onAfterRender,
                    v = function(t, e) {
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
                    w = r.useRef(0),
                    x = r.useRef(0),
                    b = r.useCallback((function() {
                        var t = y.current;
                        if (null != t) {
                            var e = t.getContext("2d");
                            if (null != e) {
                                e.clearRect(0, 0, t.width, t.height), null == h || h(e), g.current.forEach((function(n, r) {
                                    var i = n.confetti,
                                        o = n.spriteCanvas;
                                    i.update(a), i.draw(o, e), i.shouldDestroy(t, a) && g.current.delete(r)
                                })), null == p || p(e), g.current.size > 0 ? m.current = window.requestAnimationFrame(b) : (e.clearRect(0, 0, t.width, t.height), m.current = null);
                                var n = Date.now();
                                0 !== w.current && (x.current = 1e3 / (n - w.current)), w.current = n
                            }
                        }
                    }), [a, p, h]);
                r.useEffect((function() {
                    null != m.current && (window.cancelAnimationFrame(m.current), m.current = window.requestAnimationFrame(b))
                }), [b]);
                var _ = r.useCallback((function(t, e) {
                        g.current.set(t.id, {
                            confetti: t,
                            spriteCanvas: e
                        }), null == m.current && b()
                    }), [b]),
                    O = r.useCallback((function(t, e, n, r, o) {
                        var a, u = P(null !== (a = t.id) && void 0 !== a ? a : (0, i.v4)(), t, n, r, o);
                        return _(u, e), u
                    }), [_]),
                    C = r.useCallback((function(t) {
                        g.current.delete(t)
                    }), []),
                    k = r.useCallback((function() {
                        return g.current.clear()
                    }), []),
                    S = r.useCallback((function() {
                        return y.current
                    }), []);
                r.useImperativeHandle(e, (function() {
                    return {
                        createConfetti: O,
                        addConfetti: _,
                        deleteConfetti: C,
                        clearConfetti: k,
                        getCanvas: S
                    }
                }), [O, _, C, k, S]);
                var z = r.useCallback((function(t, e) {
                        var n, r, i = e.clickHandler,
                            o = e.mouseHandler;
                        if (null != i || null != o) {
                            var c = null === (n = y.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                            if (null != c) {
                                var s = function(t, e) {
                                    if (null == e) throw new Error("element should not be null");
                                    var n = e.getBoundingClientRect();
                                    return {
                                        x: t.clientX - n.left,
                                        y: t.clientY - n.top
                                    }
                                }(t, y.current);
                                if (u(s, {
                                        x: c.left,
                                        y: c.top,
                                        width: c.width,
                                        height: c.height
                                    })) {
                                    if (null != o) return o(t);
                                    if (null != i) {
                                        var l = -1e3 / x.current * 2,
                                            f = function(t, e) {
                                                for (var n = 0, r = Array.from(t.values()); n < r.length; n++) {
                                                    var i = r[n];
                                                    if (null != i && e(i)) return i
                                                }
                                                return null
                                            }(g.current, (function(t) {
                                                var e = t.confetti,
                                                    n = e.previewPositionUpdate(a, l);
                                                return u(s, {
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
                    A = r.useCallback((function(t) {
                        return z(t, {
                            clickHandler: c
                        })
                    }), [z, c]),
                    j = r.useCallback((function(t) {
                        return z(t, {
                            clickHandler: s
                        })
                    }), [z, s]),
                    E = r.useCallback((function(t) {
                        return z(t, {
                            mouseHandler: l
                        })
                    }), [z, l]),
                    R = r.useCallback((function(t) {
                        return z(t, {
                            mouseHandler: f
                        })
                    }), [z, f]);
                return r.useEffect((function() {
                    var t = function(t, e, n) {
                        null != n && window.addEventListener(t, e)
                    };
                    return t("click", A, c), t("mousedown", j, s), t("mousemove", E, l), t("mouseup", R, f),
                        function() {
                            window.removeEventListener("click", A), window.removeEventListener("mousedown", j), window.removeEventListener("mousemove", E), window.removeEventListener("mouseup", E)
                        }
                }), [A, j, E, R, c, s, l, f]), r.useEffect((function() {
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
                }), []), r.createElement("canvas", d({}, v, {
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
            var E = r.forwardRef((function(t, e) {
                var n, o = t.className,
                    u = t.visible,
                    c = void 0 !== u && u,
                    s = t.sprites,
                    l = t.colors,
                    f = t.spriteWidth,
                    h = t.spriteHeight,
                    p = r.useRef(null),
                    d = r.useRef([]),
                    v = r.useRef(!1),
                    y = r.useRef({});
                r.useImperativeHandle(e, (function() {
                    return {
                        getCanvas: function() {
                            return p.current
                        },
                        getCreateData: function() {
                            return {
                                sprites: d.current,
                                colors: l,
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
                        isReady: v.current
                    }
                }), [l, h, f]);
                var g = r.useCallback((function() {
                        var t = p.current,
                            e = null == t ? void 0 : t.getContext("2d", {
                                willReadFrequently: !0
                            });
                        null != e && null != t && (e.clearRect(0, 0, t.width, t.height),
                            d.current.forEach((function(t, n) {
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
                                            }(r), s = 0; s < u.data.length; s += 4) u.data[s] = c.r, u.data[s + 1] = c.g, u.data[s + 2] = c.b;
                                        e.putImageData(u, o, a)
                                    }
                                };
                                t.colorize ? l.forEach((function(t, e) {
                                    return r(t, e)
                                })) : r(null, 0)
                            })))
                    }), [l, h, f]),
                    m = r.useCallback((function() {
                        var t = s.map((function(t) {
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
                            d.current = t.map((function(t) {
                                return {
                                    colorize: t.colorize,
                                    image: t.image,
                                    src: t.src
                                }
                            }))
                        }))
                    }), [s]),
                    w = r.useCallback((function(t) {
                        for (var e in y.current) y.current[e](t)
                    }), []),
                    x = r.useCallback((function() {
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
                                        return t.sent(), g(), v.current = !0, w(!0), [2]
                                }
                            }))
                        }))
                    }), [w, m, g]);
                return r.useEffect((function() {
                    x()
                }), [x]), r.useEffect((function() {
                    return function() {
                        return w(!1)
                    }
                }), [w]), r.useEffect((function() {
                    null != p.current && (p.current.width = (f + 2) * Math.max(l.length, 1), p.current.height = (h + 2) * s.length)
                }), [l.length, h, f, s.length]), r.createElement("canvas", {
                    ref: p,
                    className: a()(o, (n = {}, n["SpriteCanvas-module_spriteCanvasHidden__ndzQV"] = !c, n))
                })
            }));

            function R(t, e) {
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
                    s = r.useCallback((function(n) {
                        var r = null == e ? void 0 : e.getCanvas();
                        null != r && (null == t || t.addConfetti(n, r))
                    }), [t, e]),
                    l = r.useCallback((function(e) {
                        null == t || t.deleteConfetti(e)
                    }), [t]),
                    f = r.useCallback((function() {
                        return null == t ? void 0 : t.clearConfetti()
                    }), [t]);
                return r.useMemo((function() {
                    return {
                        createConfetti: u,
                        createMultipleConfetti: c,
                        addConfetti: s,
                        clearConfetti: f,
                        deleteConfetti: l,
                        isReady: o && null != e && null != t
                    }
                }), [s, f, t, u, c, l, o, e])
            }
        },
        667237: t => {
            "use strict";

            function e(t) {
                this._capacity = i(t);
                this._length = 0;
                this._front = 0;
                this._makeCapacity();
                if (n(t)) {
                    for (var e = t.length, r = 0; r < e; ++r) this[r] = t[r];
                    this._length = e
                }
            }
            e.prototype.toArray = function() {
                for (var t = this._length, e = new Array(t), n = this._front, r = this._capacity, i = 0; i < t; ++i) e[i] = this[n + i & r - 1];
                return e
            };
            e.prototype.push = function(t) {
                var e = arguments.length,
                    n = this._length;
                if (e > 1) {
                    var r = this._capacity;
                    if (n + e > r) {
                        for (var i = 0; i < e; ++i) {
                            this._checkCapacity(n + 1);
                            this[o = this._front + n & this._capacity - 1] = arguments[i];
                            n++;
                            this._length = n
                        }
                        return n
                    }
                    for (var o = this._front, i = 0; i < e; ++i) {
                        this[o + n & r - 1] = arguments[i];
                        o++
                    }
                    this._length = n + e;
                    return n + e
                }
                if (0 === e) return n;
                this._checkCapacity(n + 1);
                this[i = this._front + n & this._capacity - 1] = t;
                this._length = n + 1;
                return n + 1
            };
            e.prototype.pop = function() {
                var t = this._length;
                if (0 !== t) {
                    var e = this._front + t - 1 & this._capacity - 1,
                        n = this[e];
                    this[e] = void 0;
                    this._length = t - 1;
                    return n
                }
            };
            e.prototype.shift = function() {
                var t = this._length;
                if (0 !== t) {
                    var e = this._front,
                        n = this[e];
                    this[e] = void 0;
                    this._front = e + 1 & this._capacity - 1;
                    this._length = t - 1;
                    return n
                }
            };
            e.prototype.unshift = function(t) {
                var e = this._length,
                    n = arguments.length;
                if (n > 1) {
                    if (e + n > (i = this._capacity)) {
                        for (var r = n - 1; r >= 0; r--) {
                            this._checkCapacity(e + 1);
                            var i = this._capacity;
                            this[a = (this._front - 1 & i - 1 ^ i) - i] = arguments[r];
                            e++;
                            this._length = e;
                            this._front = a
                        }
                        return e
                    }
                    var o = this._front;
                    for (r = n - 1; r >= 0; r--) {
                        var a;
                        this[a = (o - 1 & i - 1 ^ i) - i] = arguments[r];
                        o = a
                    }
                    this._front = o;
                    this._length = e + n;
                    return e + n
                }
                if (0 === n) return e;
                this._checkCapacity(e + 1);
                i = this._capacity;
                this[r = (this._front - 1 & i - 1 ^ i) - i] = t;
                this._length = e + 1;
                this._front = r;
                return e + 1
            };
            e.prototype.peekBack = function() {
                var t = this._length;
                if (0 !== t) {
                    return this[this._front + t - 1 & this._capacity - 1]
                }
            };
            e.prototype.peekFront = function() {
                if (0 !== this._length) return this[this._front]
            };
            e.prototype.get = function(t) {
                var e = t;
                if (e === (0 | e)) {
                    var n = this._length;
                    e < 0 && (e += n);
                    if (!(e < 0 || e >= n)) return this[this._front + e & this._capacity - 1]
                }
            };
            e.prototype.isEmpty = function() {
                return 0 === this._length
            };
            e.prototype.clear = function() {
                this._length = 0;
                this._front = 0;
                this._makeCapacity()
            };
            e.prototype.toString = function() {
                return this.toArray().toString()
            };
            e.prototype.valueOf = e.prototype.toString;
            e.prototype.removeFront = e.prototype.shift;
            e.prototype.removeBack = e.prototype.pop;
            e.prototype.insertFront = e.prototype.unshift;
            e.prototype.insertBack = e.prototype.push;
            e.prototype.enqueue = e.prototype.push;
            e.prototype.dequeue = e.prototype.shift;
            e.prototype.toJSON = e.prototype.toArray;
            Object.defineProperty(e.prototype, "length", {
                get: function() {
                    return this._length
                },
                set: function() {
                    throw new RangeError("")
                }
            });
            e.prototype._makeCapacity = function() {
                for (var t = this._capacity, e = 0; e < t; ++e) this[e] = void 0
            };
            e.prototype._checkCapacity = function(t) {
                this._capacity < t && this._resizeTo(i(1.5 * this._capacity + 16))
            };
            e.prototype._resizeTo = function(t) {
                var e = this._front,
                    n = this._capacity,
                    i = new Array(n),
                    o = this._length;
                r(this, 0, i, 0, n);
                this._capacity = t;
                this._makeCapacity();
                this._front = 0;
                if (e + o <= n) r(i, e, this, 0, o);
                else {
                    var a = o - (e + o & n - 1);
                    r(i, e, this, 0, a);
                    r(i, 0, this, a, o - a)
                }
            };
            var n = Array.isArray;

            function r(t, e, n, r, i) {
                for (var o = 0; o < i; ++o) n[o + r] = t[o + e]
            }

            function i(t) {
                if ("number" != typeof t) {
                    if (!n(t)) return 16;
                    t = t.length
                }
                return function(t) {
                    t >>>= 0;
                    t -= 1;
                    t |= t >> 1;
                    t |= t >> 2;
                    t |= t >> 4;
                    t |= t >> 8;
                    return 1 + (t |= t >> 16)
                }(Math.min(Math.max(16, t), 1073741824))
            }
            t.exports = e
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
                s = n(406557);
            t.exports = function(t, e, n) {
                var l = -1;
                e = r(e.length ? e : [s], u(i));
                var f = o(t, (function(t, n, i) {
                    return {
                        criteria: r(e, (function(e) {
                            return e(t)
                        })),
                        index: ++l,
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
                        s = e == e,
                        l = r(e);
                    if (!c && !l && !a && t > e || a && u && s && !c && !l || i && u && s || !n && s || !o) return 1;
                    if (!i && !a && !l && t < e || l && n && o && !i && !a || c && n && o || !u && o || !s) return -1
                }
                return 0
            }
        },
        285022: (t, e, n) => {
            var r = n(626393);
            t.exports = function(t, e, n) {
                for (var i = -1, o = t.criteria, a = e.criteria, u = o.length, c = n.length; ++i < u;) {
                    var s = r(o[i], a[i]);
                    if (s) {
                        return i >= c ? s : s * ("desc" == n[i] ? -1 : 1)
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
                    for (var s = Array(e + 1); ++a < e;) s[a] = o[a];
                    s[e] = n(c);
                    return r(t, this, s)
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
        823493: (t, e, n) => {
            var r = n(23279),
                i = n(513218);
            t.exports = function(t, e, n) {
                var o = !0,
                    a = !0;
                if ("function" != typeof t) throw new TypeError("Expected a function");
                if (i(n)) {
                    o = "leading" in n ? !!n.leading : o;
                    a = "trailing" in n ? !!n.trailing : a
                }
                return r(t, e, {
                    leading: o,
                    maxWait: e,
                    trailing: a
                })
            }
        },
        252628: (t, e, n) => {
            var r = n(747415),
                i = n(3674);
            t.exports = function(t) {
                return null == t ? [] : r(t, i(t))
            }
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

            function s(t, e) {
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
            const f = function(t) {
                var e = t.open,
                    n = void 0 !== e && e,
                    i = t.className,
                    a = l(t, ["open", "className"]);
                return (0, r.jsxs)("button", s(function(t) {
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
        142520: (t, e, n) => {
            "use strict";
            n.d(e, {
                x: () => r
            });
            var r;
            ! function(t) {
                t.THOUGHT_EMBED_TITLE = "Clyde Thoughts"
            }(r || (r = {}))
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
                ZP: () => d,
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

            function l(t, e) {
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
                        s = void 0;
                    try {
                        for (var h, p = o.entries()[Symbol.iterator](); !(u = (h = p.next()).done); u = !0) {
                            var d = l(h.value, 2),
                                v = d[0],
                                y = d[1];
                            a[v] = y
                        }
                    } catch (t) {
                        c = !0;
                        s = t
                    } finally {
                        try {
                            u || null == p.return || p.return()
                        } finally {
                            if (c) throw s
                        }
                    }
                    return a
                } catch (t) {
                    return null
                }
            }

            function d(t, e) {
                var n = e.utmSource,
                    r = e.androidFallbackLink,
                    o = e.iosFallbackLink,
                    a = s(e, ["utmSource", "androidFallbackLink", "iosFallbackLink"]),
                    c = new URL(t);
                for (var l in a) {
                    var h = a[l];
                    null != h && c.searchParams.set(l, h)
                }
                var p, d, v, y, g, m = encodeURIComponent(c.toString()),
                    w = encodeURIComponent(u()),
                    x = (v = new RegExp("(".concat(["WebView", "(iPhone|iPod|iPad)(?!.*Safari/)"].join("|"), ")"), "ig"), y = null != (null === i() || void 0 === i() || null === (p = i().ua) || void 0 === p ? void 0 : p.match(v)), g = "Safari" === (null === i() || void 0 === i() ? void 0 : i().name) && !y, "iOS" !== (null === i() || void 0 === i() || null === (d = i().os) || void 0 === d ? void 0 : d.family) || g ? 1 : 0),
                    b = null != r ? encodeURIComponent(r) : null,
                    _ = null != o ? encodeURIComponent(o) : null,
                    O = "".concat(f, "/?link=").concat(m, "&utm_source=").concat(n, "&apn=").concat("com.discord", "&isi=").concat(985746746, "&ibi=").concat("com.hammerandchisel.discord", "&sd=").concat(w, "&efr=").concat(x);
                null != b && (O += "&afl=".concat(b));
                null != _ && (O += "&ifl=".concat(_));
                return O
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
                P: () => Y,
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
                s = t => {
                    var e, n, i;
                    return a(t) ? u(t) ? null != (e = null == (n = (i = t[r]()).getSelectionKeys) ? void 0 : n.call(i)) ? e : [] : Array.isArray(t) ? l(t, s) : l(Object.values(t), s) : []
                },
                l = (t, e) => t.reduce(((t, n) => t.concat(e(n))), []);

            function f(t) {
                return Object.assign(t, {
                    optional: () => p(t),
                    and: e => y(t, e),
                    or: e => g(t, e),
                    select: e => void 0 === e ? w(t) : w(e, t)
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
                    select: e => h(void 0 === e ? w(t) : w(e, t))
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
                            return void 0 === e ? (s(t).forEach((t => r(t, void 0))), {
                                matched: !0,
                                selections: n
                            }) : {
                                matched: c(t, e, r),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => s(t),
                        matcherType: "optional"
                    })
                })
            }
            const d = (t, e) => {
                    for (const n of t)
                        if (!e(n)) return !1;
                    return !0
                },
                v = (t, e) => {
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
                        getSelectionKeys: () => l(t, s),
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
                            return l(t, s).forEach((t => r(t, void 0))), {
                                matched: t.some((t => c(t, e, r))),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => l(t, s),
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

            function w(...t) {
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
                        getSelectionKeys: () => [null != e ? e : o].concat(void 0 === n ? [] : s(n))
                    })
                })
            }

            function x(t) {
                return "number" == typeof t
            }

            function b(t) {
                return "string" == typeof t
            }

            function _(t) {
                return "bigint" == typeof t
            }
            const O = f(m((function(t) {
                    return !0
                }))),
                C = O,
                k = t => Object.assign(f(t), {
                    startsWith: e => {
                        return k(y(t, (n = e, m((t => b(t) && t.startsWith(n))))));
                        var n
                    },
                    endsWith: e => {
                        return k(y(t, (n = e, m((t => b(t) && t.endsWith(n))))));
                        var n
                    },
                    minLength: e => k(y(t, (t => m((e => b(e) && e.length >= t)))(e))),
                    maxLength: e => k(y(t, (t => m((e => b(e) && e.length <= t)))(e))),
                    includes: e => {
                        return k(y(t, (n = e, m((t => b(t) && t.includes(n))))));
                        var n
                    },
                    regex: e => {
                        return k(y(t, (n = e, m((t => b(t) && Boolean(t.match(n)))))));
                        var n
                    }
                }),
                S = k(m(b)),
                z = (t, e) => m((n => x(n) && t <= n && e >= n)),
                A = t => m((e => x(e) && e < t)),
                P = t => m((e => x(e) && e > t)),
                j = t => m((e => x(e) && e <= t)),
                E = t => m((e => x(e) && e >= t)),
                R = () => m((t => x(t) && Number.isInteger(t))),
                F = () => m((t => x(t) && Number.isFinite(t))),
                I = () => m((t => x(t) && t > 0)),
                V = () => m((t => x(t) && t < 0)),
                M = t => Object.assign(f(t), {
                    between: (e, n) => M(y(t, z(e, n))),
                    lt: e => M(y(t, A(e))),
                    gt: e => M(y(t, P(e))),
                    lte: e => M(y(t, j(e))),
                    gte: e => M(y(t, E(e))),
                    int: () => M(y(t, R())),
                    finite: () => M(y(t, F())),
                    positive: () => M(y(t, I())),
                    negative: () => M(y(t, V()))
                }),
                D = M(m(x)),
                U = (t, e) => m((n => _(n) && t <= n && e >= n)),
                T = t => m((e => _(e) && e < t)),
                L = t => m((e => _(e) && e > t)),
                B = t => m((e => _(e) && e <= t)),
                N = t => m((e => _(e) && e >= t)),
                H = () => m((t => _(t) && t > 0)),
                W = () => m((t => _(t) && t < 0)),
                K = t => Object.assign(f(t), {
                    between: (e, n) => K(y(t, U(e, n))),
                    lt: e => K(y(t, T(e))),
                    gt: e => K(y(t, L(e))),
                    lte: e => K(y(t, B(e))),
                    gte: e => K(y(t, N(e))),
                    positive: () => K(y(t, H())),
                    negative: () => K(y(t, W()))
                }),
                Z = K(m(_)),
                G = f(m((function(t) {
                    return "boolean" == typeof t
                }))),
                $ = f(m((function(t) {
                    return "symbol" == typeof t
                }))),
                q = f(m((function(t) {
                    return null == t
                })));
            var Y = {
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
                                if (0 === e.length) return s(n).forEach((t => {
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
                            getSelectionKeys: () => 0 === t.length ? [] : s(t[0])
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
                                    matched: d(e, (t => c(i, t, r))),
                                    selections: n
                                }
                            },
                            getSelectionKeys: () => 0 === t.length ? [] : s(t[0])
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
                                    matched: v(e, ((t, e) => {
                                        const n = c(o, e, r),
                                            i = c(a, t, r);
                                        return n && i
                                    })),
                                    selections: n
                                }
                            },
                            getSelectionKeys: () => 0 === t.length ? [] : [...s(t[0]), ...s(t[1])]
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
                select: w,
                any: O,
                _: C,
                string: S,
                between: z,
                lt: A,
                gt: P,
                lte: j,
                gte: E,
                int: R,
                finite: F,
                positive: I,
                negative: V,
                number: D,
                betweenBigInt: U,
                ltBigInt: T,
                gtBigInt: L,
                lteBigInt: B,
                gteBigInt: N,
                positiveBigInt: H,
                negativeBigInt: W,
                bigint: Z,
                boolean: G,
                symbol: $,
                nullish: q,
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
            const X = {
                matched: !1,
                value: void 0
            };

            function Q(t) {
                return new J(t, X)
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
                        s = !n.some((t => c(t, this.input, u))) || r && !Boolean(r(this.input)) ? X : {
                            matched: !0,
                            value: e(i ? o in a ? a[o] : a : this.input, this.input)
                        };
                    return new J(this.input, s)
                }
                when(t, e) {
                    if (this.state.matched) return this;
                    const n = Boolean(t(this.input));
                    return new J(this.input, n ? {
                        matched: !0,
                        value: e(this.input, this.input)
                    } : X)
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