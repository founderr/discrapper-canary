(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [24206, 17586, 65614, 84832], {
        737264: t => {
            "use strict";
            t.exports.Q = function(t) {
                var e, r = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(t);
                if (!r) return null;
                r.shift();
                var n = null,
                    i = [];
                if (r[2]) {
                    n = (e = r[2].split("-")).shift();
                    i = e
                }
                var a = [];
                r[5] && (a = r[5].split("-")).shift();
                var o = [];
                if (r[6]) {
                    (e = r[6].split("-")).shift();
                    for (var u, c = []; e.length;) {
                        var s = e.shift();
                        if (1 === s.length)
                            if (u) {
                                o.push({
                                    singleton: u,
                                    extension: c
                                });
                                u = s;
                                c = []
                            } else u = s;
                        else c.push(s)
                    }
                    o.push({
                        singleton: u,
                        extension: c
                    })
                }
                var l = [];
                if (r[7]) {
                    (l = r[7].split("-")).shift();
                    l.shift()
                }
                var _ = [];
                r[8] && (_ = r[8].split("-")).shift();
                return {
                    langtag: {
                        language: {
                            language: n,
                            extlang: i
                        },
                        script: r[3] || null,
                        region: r[4] || null,
                        variant: a,
                        extension: o,
                        privateuse: l
                    },
                    privateuse: _,
                    grandfathered: {
                        irregular: r[0] || null,
                        regular: r[1] || null
                    }
                }
            }
        },
        652411: (t, e, r) => {
            "use strict";
            r.d(e, {
                O_: () => C,
                qA: () => _,
                Ji: () => B,
                uR: () => S
            });
            var n = r(667294),
                i = r(228721),
                a = r(294184),
                o = r.n(a);

            function u(t, e) {
                var r = t.x,
                    n = t.y;
                return r > e.x && r < e.x + e.width && n > e.y && n < e.y + e.height
            }

            function c(t, e) {
                return t * e * e * (e > 0 ? -1 : 1)
            }
            var s = function() {
                    function t(t) {
                        this.id = t.id, this.position = t.position, this.velocity = t.velocity, this.rotation = t.rotation, this.dragCoefficient = t.dragCoefficient, this.size = t.size, this.opacity = t.opacity, this.spriteX = t.spriteX, this.spriteY = t.spriteY, this.spriteWidth = t.spriteWidth, this.spriteHeight = t.spriteHeight, this._lastUpdatedAt = Date.now()
                    }
                    return t.prototype.getNewForces = function(t, e) {
                        var r = t.wind * e,
                            n = -t.gravity * e;
                        return {
                            x: r + c(this.dragCoefficient.x, this.velocity.x),
                            y: n + c(this.dragCoefficient.y, this.velocity.y)
                        }
                    }, t.prototype.update = function(t) {
                        var e = Date.now(),
                            r = (e - this._lastUpdatedAt) / 100;
                        this.rotation.update(r), this.dragCoefficient.update(r);
                        var n = this.getNewForces(t, r),
                            i = n.x,
                            a = n.y;
                        this.velocity.update(r), this.velocity.x += i, this.velocity.y += a, this.position.update(r), this.position.x += this.velocity.x * r, this.position.y += this.velocity.y * r, this.size.update(r), this.opacity.update(r), this._lastUpdatedAt = e
                    }, t.prototype.previewPositionUpdate = function(t, e) {
                        var r = e / 100,
                            n = this.velocity.previewUpdate(r),
                            i = this.getNewForces(t, r),
                            a = i.x,
                            o = i.y;
                        n.x += a, n.y += o;
                        var u = this.position.previewUpdate(r);
                        return u.x += n.x * r, u.y += n.y * r, u
                    }, t.prototype.draw = function(t, e) {
                        e.save(), e.globalAlpha = this.opacity.value, e.setTransform((new DOMMatrix).translateSelf(this.position.x * r.g.devicePixelRatio, this.position.y * r.g.devicePixelRatio).rotateSelf(this.rotation.x, this.rotation.y, this.rotation.z)),
                            e.drawImage(t, this.spriteX, this.spriteY, this.spriteWidth, this.spriteHeight, -this.width / 2 * r.g.devicePixelRatio, -this.height / 2 * r.g.devicePixelRatio, this.width * r.g.devicePixelRatio, this.height * r.g.devicePixelRatio), e.restore()
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
                _ = function(t) {
                    var e = void 0 === t ? {} : t,
                        r = e.gravity,
                        n = e.wind;
                    this.gravity = -9.8, this.wind = 0, this.gravity = null != r ? r : this.gravity, this.wind = null != n ? n : this.wind
                },
                d = function(t, e) {
                    return d = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                    }, d(t, e)
                };

            function v(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

                function r() {
                    this.constructor = t
                }
                d(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
            }
            var f = function() {
                return f = Object.assign || function(t) {
                    for (var e, r = 1, n = arguments.length; r < n; r++)
                        for (var i in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t
                }, f.apply(this, arguments)
            };
            var E = function(t) {
                    this.value = t
                },
                p = function() {
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
                h = function(t) {
                    function e(e, r, n) {
                        var i = t.call(this, e, r) || this;
                        return i._z = n, i
                    }
                    return v(e, t), e.prototype.update = function(e) {
                        t.prototype.update.call(this, e), this._z.update(e)
                    }, e.prototype.previewUpdate = function(e) {
                        var r = t.prototype.previewUpdate.call(this, e);
                        return f(f({}, r), {
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
                }(p),
                R = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return v(e, t), e.prototype.update = function() {}, e.prototype.previewUpdate = function() {
                        return this.value
                    }, e
                }(E),
                O = function(t) {
                    function e(e, r) {
                        var n = t.call(this, e) || this;
                        return n.addValue = r, n
                    }
                    return v(e, t), e.prototype.update = function(t) {
                        this.value = this.previewUpdate(t)
                    }, e.prototype.previewUpdate = function(t) {
                        return this.value + this.addValue * t
                    }, e
                }(E),
                g = function(t) {
                    function e(e, r, n, i, a, o) {
                        var u = t.call(this, e) || this;
                        u.min = r, u.max = n, u.duration = i;
                        var c = u.value / (u.max - u.min) * u.duration,
                            s = isNaN(c) ? 0 : c;
                        return u.timePassed = s < 0 ? u.duration - s : s, u.directionMultiplier = a, u.easingFunction = o, u
                    }
                    return v(e, t), e.prototype.update = function(t) {
                        var e = this.doUpdate(t),
                            r = e[0],
                            n = e[1],
                            i = e[2];
                        this.value = r, this.directionMultiplier = i, this.timePassed = n
                    }, e.prototype.previewUpdate = function(t) {
                        return this.doUpdate(t)[0]
                    }, e.prototype.doUpdate = function(t) {
                        var e = this.max - this.min,
                            r = this.timePassed + t * this.directionMultiplier,
                            n = Math.min(Math.max(r, 0), this.duration),
                            i = r < 0 || r > this.duration ? -1 * this.directionMultiplier : this.directionMultiplier,
                            a = this.easingFunction(n, this.min, e, this.duration);
                        return [isNaN(a) ? 0 : a, n, i]
                    }, e
                }(E);

            function T(t, e) {
                return t === e ? t : Math.random() * (e - t + 1) + t
            }

            function N(t) {
                var e = Math.floor(T(0, t.length - 1));
                return [t[e], e]
            }

            function A(t, e) {
                return N([t, e])[0]
            }

            function y(t) {
                return "number" == typeof t ? {
                    x: t,
                    y: t
                } : t
            }

            function b(t) {
                return "number" == typeof t ? {
                    x: t,
                    y: t,
                    z: t
                } : t
            }

            function D(t) {
                return function(t) {
                    switch (t.type) {
                        case "static":
                            return new R(t.value);
                        case "static-random":
                            return new R(T(t.minValue, t.maxValue));
                        case "linear":
                            return new O(t.value, t.addValue);
                        case "linear-random":
                            return new O(T(t.minValue, t.maxValue), T(t.minAddValue, t.maxAddValue));
                        case "oscillating":
                            return new g(t.value, t.start, t.final, t.duration, t.direction, t.easingFunction);
                        case "oscillating-random":
                            return new g(T(t.minValue, t.maxValue), T(t.minStart, t.maxStart), T(t.minFinal, t.maxFinal), T(t.minDuration, t.maxDuration), A(t.minDirection, t.maxDirection), N(t.easingFunctions)[0])
                    }
                }(f(f({}, t), {
                    valueType: "number"
                }))
            }

            function I(t) {
                return function(t) {
                    switch (t.type) {
                        case "static":
                            var e = y(t.value);
                            return new p(new R(e.x), new R(e.y));
                        case "static-random":
                            var r = y(t.minValue),
                                n = y(t.maxValue);
                            return new p(new R(T(r.x, n.x)), new R(T(r.y, n.y)));
                        case "linear":
                            e = y(t.value);
                            var i = y(t.addValue);
                            return new p(new O(e.x, i.x), new O(e.y, i.y));
                        case "linear-random":
                            r = y(t.minValue), n = y(t.maxValue);
                            var a = y(t.minAddValue),
                                o = y(t.maxAddValue);
                            return new p(new O(T(r.x, n.x), T(a.x, o.x)), new O(T(r.y, n.y), T(a.x, o.x)));
                        case "oscillating":
                            e = y(t.value);
                            var u = y(t.start),
                                c = y(t.final),
                                s = y(t.duration),
                                l = y(t.direction);
                            return new p(new g(e.x, u.x, c.x, s.x, l.x, t.easingFunction), new g(e.y, u.y, c.y, s.x, l.y, t.easingFunction));
                        case "oscillating-random":
                            r = y(t.minValue), n = y(t.maxValue);
                            var _ = y(t.minStart),
                                d = y(t.maxStart),
                                v = y(t.minFinal),
                                f = y(t.maxFinal),
                                E = y(t.minDuration),
                                h = y(t.maxDuration),
                                b = y(t.minDirection),
                                D = y(t.maxDirection);
                            return new p(new g(T(r.x, n.x), T(_.x, d.x), T(v.x, f.x), T(E.x, h.x), A(b.x, D.x), N(t.easingFunctions)[0]), new g(T(r.y, n.y), T(_.y, d.y), T(v.y, f.y), T(E.y, h.y), A(b.y, D.y), N(t.easingFunctions)[0]))
                    }
                }(f(f({}, t), {
                    valueType: "Vector2"
                }))
            }

            function m(t) {
                return function(t) {
                    switch (t.type) {
                        case "static":
                            var e = b(t.value);
                            return new h(new R(e.x), new R(e.y), new R(e.z));
                        case "static-random":
                            var r = b(t.minValue),
                                n = b(t.maxValue);
                            return new h(new R(T(r.x, n.x)), new R(T(r.y, n.y)), new R(T(r.z, n.z)));
                        case "linear":
                            e = b(t.value);
                            var i = b(t.addValue);
                            return new h(new O(e.x, i.x), new O(e.y, i.y), new O(e.z, i.z));
                        case "linear-random":
                            r = b(t.minValue), n = b(t.maxValue);
                            var a = b(t.minAddValue),
                                o = b(t.maxAddValue);
                            return new h(new O(T(r.x, n.x), T(a.x, o.x)), new O(T(r.y, n.y), T(a.y, o.y)), new O(T(r.z, n.z), T(a.z, o.z)));
                        case "oscillating":
                            e = b(t.value);
                            var u = b(t.start),
                                c = b(t.final),
                                s = b(t.duration),
                                l = b(t.direction);
                            return new h(new g(e.x, u.x, c.x, s.x, l.x, t.easingFunction), new g(e.y, u.y, c.y, s.z, l.y, t.easingFunction), new g(e.z, u.z, c.z, s.z, l.z, t.easingFunction));
                        case "oscillating-random":
                            r = b(t.minValue), n = b(t.maxValue);
                            var _ = b(t.minStart),
                                d = b(t.maxStart),
                                v = b(t.minFinal),
                                f = b(t.maxFinal),
                                E = b(t.minDuration),
                                p = b(t.maxDuration),
                                y = b(t.minDirection),
                                D = b(t.maxDirection);
                            return new h(new g(T(r.x, n.x), T(_.x, d.x), T(v.x, f.x), T(E.x, p.x), A(y.x, D.x), N(t.easingFunctions)[0]), new g(T(r.y, n.y), T(_.y, d.y), T(v.y, f.y), T(E.y, p.y), A(y.y, D.y), N(t.easingFunctions)[0]), new g(T(r.z, n.z), T(_.z, d.z), T(v.z, f.z), T(E.z, p.z), A(y.z, D.z), N(t.easingFunctions)[0]))
                    }
                }(f(f({}, t), {
                    valueType: "Vector3"
                }))
            }

            function U(t, e, r, n, i) {
                var a = function(t, e) {
                        return f(f({
                            id: e
                        }, l), t)
                    }(e, t),
                    o = I(a.size),
                    u = function(t, e) {
                        if (null != t) {
                            var r = e.sprites.findIndex((function(e) {
                                return r = e, "string" == typeof(n = t) ? r.src === n && r.colorize : r.src === n.src && r.colorize === n.colorize;
                                var r, n
                            }));
                            if (-1 !== r) return [t, r]
                        }
                        return N(e.sprites)
                    }(n, r),
                    c = u[0],
                    _ = u[1],
                    d = function(t, e, r) {
                        if (! function(t) {
                                return "string" == typeof t || t.colorize
                            }(t)) return 0;
                        var n = null != e ? r.colors.findIndex((function(t) {
                            return t === e
                        })) : -1;
                        return -1 !== n ? n : Math.floor(T(0, r.colors.length - 1))
                    }(null != n ? n : c, i, r);
                return new s({
                    id: t,
                    position: I(a.position),
                    velocity: I(a.velocity),
                    rotation: m(a.rotation),
                    dragCoefficient: I(a.dragCoefficient),
                    size: o,
                    opacity: D(a.opacity),
                    spriteX: d * r.spriteWidth + 2 * d,
                    spriteY: _ * r.spriteHeight + 2 * _,
                    spriteWidth: r.spriteWidth,
                    spriteHeight: r.spriteHeight
                })
            }
            var C = n.forwardRef((function(t, e) {
                var a = t.className,
                    o = t.environment,
                    c = t.onClick,
                    s = t.onMouseDown,
                    l = t.onMouseMove,
                    _ = t.onMouseUp,
                    d = t.onBeforeRender,
                    v = t.onAfterRender,
                    E = function(t, e) {
                        var r = {};
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
                        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                            var i = 0;
                            for (n = Object.getOwnPropertySymbols(t); i < n.length; i++) e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]])
                        }
                        return r
                    }(t, ["className", "environment", "onClick", "onMouseDown", "onMouseMove", "onMouseUp", "onBeforeRender", "onAfterRender"]),
                    p = n.useRef(null),
                    h = n.useRef(new Map),
                    R = n.useRef(null),
                    O = n.useRef(0),
                    g = n.useRef(0),
                    T = n.useCallback((function() {
                        var t = p.current;
                        if (null != t) {
                            var e = t.getContext("2d");
                            if (null != e) {
                                e.clearRect(0, 0, t.width, t.height), null == d || d(e), h.current.forEach((function(r, n) {
                                    var i = r.confetti,
                                        a = r.spriteCanvas;
                                    i.update(o), i.draw(a, e), i.shouldDestroy(t, o) && h.current.delete(n)
                                })), null == v || v(e), h.current.size > 0 ? R.current = window.requestAnimationFrame(T) : (e.clearRect(0, 0, t.width, t.height), R.current = null);
                                var r = Date.now();
                                0 !== O.current && (g.current = 1e3 / (r - O.current)), O.current = r
                            }
                        }
                    }), [o, v, d]);
                n.useEffect((function() {
                    null != R.current && (window.cancelAnimationFrame(R.current), R.current = window.requestAnimationFrame(T))
                }), [T]);
                var N = n.useCallback((function(t, e) {
                        h.current.set(t.id, {
                            confetti: t,
                            spriteCanvas: e
                        }), null == R.current && T()
                    }), [T]),
                    A = n.useCallback((function(t, e, r, n, a) {
                        var o, u = U(null !== (o = t.id) && void 0 !== o ? o : (0, i.Z)(), t, r, n, a);
                        return N(u, e), u
                    }), [N]),
                    y = n.useCallback((function(t) {
                        h.current.delete(t)
                    }), []),
                    b = n.useCallback((function() {
                        return h.current.clear()
                    }), []),
                    D = n.useCallback((function() {
                        return p.current
                    }), []);
                n.useImperativeHandle(e, (function() {
                    return {
                        createConfetti: A,
                        addConfetti: N,
                        deleteConfetti: y,
                        clearConfetti: b,
                        getCanvas: D
                    }
                }), [A, N, y, b, D]);
                var I = n.useCallback((function(t, e) {
                        var r, n, i = e.clickHandler,
                            a = e.mouseHandler;
                        if (null != i || null != a) {
                            var c = null === (r = p.current) || void 0 === r ? void 0 : r.getBoundingClientRect();
                            if (null != c) {
                                var s = function(t, e) {
                                    if (null == e) throw new Error("element should not be null");
                                    var r = e.getBoundingClientRect();
                                    return {
                                        x: t.clientX - r.left,
                                        y: t.clientY - r.top
                                    }
                                }(t, p.current);
                                if (u(s, {
                                        x: c.left,
                                        y: c.top,
                                        width: c.width,
                                        height: c.height
                                    })) {
                                    if (null != a) return a(t);
                                    if (null != i) {
                                        var l = -1e3 / g.current * 2,
                                            _ = function(t, e) {
                                                for (var r = 0, n = Array.from(t.values()); r < n.length; r++) {
                                                    var i = n[r];
                                                    if (null != i && e(i)) return i
                                                }
                                                return null
                                            }(h.current, (function(t) {
                                                var e = t.confetti,
                                                    r = e.previewPositionUpdate(o, l);
                                                return u(s, {
                                                    x: r.x - e.width / 2,
                                                    y: r.y - e.height / 2,
                                                    width: e.width,
                                                    height: e.height
                                                })
                                            }));
                                        i(t, null !== (n = null == _ ? void 0 : _.confetti) && void 0 !== n ? n : null)
                                    }
                                }
                            }
                        }
                    }), [o]),
                    m = n.useCallback((function(t) {
                        return I(t, {
                            clickHandler: c
                        })
                    }), [I, c]),
                    C = n.useCallback((function(t) {
                        return I(t, {
                            clickHandler: s
                        })
                    }), [I, s]),
                    B = n.useCallback((function(t) {
                        return I(t, {
                            mouseHandler: l
                        })
                    }), [I, l]),
                    S = n.useCallback((function(t) {
                        return I(t, {
                            mouseHandler: _
                        })
                    }), [I, _]);
                return n.useEffect((function() {
                    var t = function(t, e, r) {
                        null != r && window.addEventListener(t, e)
                    };
                    return t("click", m, c), t("mousedown", C, s), t("mousemove", B, l), t("mouseup", S, _),
                        function() {
                            window.removeEventListener("click", m), window.removeEventListener("mousedown", C), window.removeEventListener("mousemove", B), window.removeEventListener("mouseup", B)
                        }
                }), [m, C, B, S, c, s, l, _]), n.useEffect((function() {
                    var t = p.current,
                        e = new ResizeObserver((function() {
                            ! function(t) {
                                if (null != t) {
                                    var e = t.getBoundingClientRect(),
                                        n = e.width,
                                        i = e.height;
                                    t.width = n * r.g.devicePixelRatio, t.height = i * r.g.devicePixelRatio
                                }
                            }(p.current)
                        }));
                    return null != t && e.observe(t),
                        function() {
                            null != t && e.unobserve(t)
                        }
                }), []), n.createElement("canvas", f({}, E, {
                    className: a,
                    ref: p
                }))
            }));
            ! function(t, e) {
                void 0 === e && (e = {});
                var r = e.insertAt;
                if ("undefined" != typeof document) {
                    var n = document.head || document.getElementsByTagName("head")[0],
                        i = document.createElement("style");
                    i.type = "text/css",
                        "top" === r && n.firstChild ? n.insertBefore(i, n.firstChild) : n.appendChild(i), i.styleSheet ? i.styleSheet.cssText = t : i.appendChild(document.createTextNode(t))
                }
            }(".SpriteCanvas-module_spriteCanvasHidden__ndzQV {\n  display: none;\n  position: absolute;\n  width: 0;\n  height: 0;\n  left: -100%;\n}\n");
            var B = n.forwardRef((function(t, e) {
                var r, a = t.className,
                    u = t.visible,
                    c = void 0 !== u && u,
                    s = t.sprites,
                    l = t.colors,
                    _ = t.spriteWidth,
                    d = t.spriteHeight,
                    v = n.useRef(null),
                    f = n.useRef([]),
                    E = n.useRef(!1),
                    p = n.useRef({});
                n.useImperativeHandle(e, (function() {
                    return {
                        getCanvas: function() {
                            return v.current
                        },
                        getCreateData: function() {
                            return {
                                sprites: f.current,
                                colors: l,
                                spriteWidth: _,
                                spriteHeight: d
                            }
                        },
                        addReadyListener: function(t) {
                            var e = (0, i.Z)();
                            return p.current[e] = t, e
                        },
                        removeReadyListener: function(t) {
                            delete p.current[t]
                        },
                        isReady: E.current
                    }
                }), [l, d, _]);
                var h = n.useCallback((function() {
                        var t = v.current,
                            e = null == t ? void 0 : t.getContext("2d", {
                                willReadFrequently: !0
                            });
                        null != e && null != t && (e.clearRect(0, 0, t.width, t.height),
                            f.current.forEach((function(t, r) {
                                var n = function(n, i) {
                                    var a = _ * i + 2 * i,
                                        o = d * r + 2 * r;
                                    if (e.drawImage(t.image, a, o, _, d), null != n) {
                                        for (var u = e.getImageData(a, o, _, d), c = function(t) {
                                                "#" === t[0] && (t = t.slice(1));
                                                var e = parseInt(t, 16);
                                                return {
                                                    r: e >> 16 & 255,
                                                    g: e >> 8 & 255,
                                                    b: 255 & e
                                                }
                                            }(n), s = 0; s < u.data.length; s += 4) u.data[s] = c.r, u.data[s + 1] = c.g, u.data[s + 2] = c.b;
                                        e.putImageData(u, a, o)
                                    }
                                };
                                t.colorize ? l.forEach((function(t, e) {
                                    return n(t, e)
                                })) : n(null, 0)
                            })))
                    }), [l, d, _]),
                    R = n.useCallback((function() {
                        var t = s.map((function(t) {
                            var e = new Image,
                                r = "string" == typeof t ? t : t.src,
                                n = "string" == typeof t || t.colorize;
                            e.src = r;
                            var i = new Promise((function(t) {
                                e.onload = t
                            }));
                            return {
                                colorize: n,
                                image: e,
                                src: r,
                                loadPromise: i
                            }
                        }));
                        return Promise.all(t.map((function(t) {
                            return t.loadPromise
                        }))).then((function() {
                            f.current = t.map((function(t) {
                                return {
                                    colorize: t.colorize,
                                    image: t.image,
                                    src: t.src
                                }
                            }))
                        }))
                    }), [s]),
                    O = n.useCallback((function(t) {
                        for (var e in p.current) p.current[e](t)
                    }), []),
                    g = n.useCallback((function() {
                        return function(t, e, r, n) {
                            return new(r || (r = Promise))((function(i, a) {
                                function o(t) {
                                    try {
                                        c(n.next(t))
                                    } catch (t) {
                                        a(t)
                                    }
                                }

                                function u(t) {
                                    try {
                                        c(n.throw(t))
                                    } catch (t) {
                                        a(t)
                                    }
                                }

                                function c(t) {
                                    var e;
                                    t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                                        t(e)
                                    }))).then(o, u)
                                }
                                c((n = n.apply(t, e || [])).next())
                            }))
                        }(void 0, void 0, void 0, (function() {
                            return function(t, e) {
                                var r, n, i, a, o = {
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
                                    return function(c) {
                                        return function(u) {
                                            if (r) throw new TypeError("Generator is already executing.");
                                            for (; a && (a = 0, u[0] && (o = 0)), o;) try {
                                                if (r = 1, n && (i = 2 & u[0] ? n.return : u[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, u[1])).done) return i;
                                                switch (n = 0, i && (u = [2 & u[0], i.value]), u[0]) {
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
                                                        o.label++, n = u[1], u = [0];
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
                                                u = e.call(t, o)
                                            } catch (t) {
                                                u = [6, t], n = 0
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
                            }(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, R()];
                                    case 1:
                                        return t.sent(), h(), E.current = !0, O(!0), [2]
                                }
                            }))
                        }))
                    }), [O, R, h]);
                return n.useEffect((function() {
                    g()
                }), [g]), n.useEffect((function() {
                    return function() {
                        return O(!1)
                    }
                }), [O]), n.useEffect((function() {
                    null != v.current && (v.current.width = (_ + 2) * Math.max(l.length, 1), v.current.height = (d + 2) * s.length)
                }), [l.length, d, _, s.length]), n.createElement("canvas", {
                    ref: v,
                    className: o()(a, (r = {}, r["SpriteCanvas-module_spriteCanvasHidden__ndzQV"] = !c, r))
                })
            }));

            function S(t, e) {
                var r, i = n.useState(null !== (r = null == e ? void 0 : e.isReady) && void 0 !== r && r),
                    a = i[0],
                    o = i[1];
                n.useEffect((function() {
                    var t = null == e ? void 0 : e.addReadyListener(o);
                    return function() {
                        null != t && (null == e || e.removeReadyListener(t))
                    }
                }), [e]);
                var u = n.useCallback((function(r, n) {
                        var i = void 0 === n ? {} : n,
                            a = i.sprite,
                            o = i.color,
                            u = null == e ? void 0 : e.getCreateData(),
                            c = null == e ? void 0 : e.getCanvas();
                        if (null != c && null != u && 0 !== u.sprites.length) return null == t ? void 0 : t.createConfetti(r, c, u, a, o)
                    }), [t, e]),
                    c = n.useCallback((function(t, e, r) {
                        for (var n = [], i = 0; i < e; i++) {
                            var a = u(t, r);
                            a && n.push(a)
                        }
                        return n
                    }), [u]),
                    s = n.useCallback((function(r) {
                        var n = null == e ? void 0 : e.getCanvas();
                        null != n && (null == t || t.addConfetti(r, n))
                    }), [t, e]),
                    l = n.useCallback((function(e) {
                        null == t || t.deleteConfetti(e)
                    }), [t]),
                    _ = n.useCallback((function() {
                        return null == t ? void 0 : t.clearConfetti()
                    }), [t]);
                return n.useMemo((function() {
                    return {
                        createConfetti: u,
                        createMultipleConfetti: c,
                        addConfetti: s,
                        clearConfetti: _,
                        deleteConfetti: l,
                        isReady: a && null != e && null != t
                    }
                }), [s, _, t, u, c, l, a, e])
            }
        },
        667237: t => {
            "use strict";

            function e(t) {
                this._capacity = i(t);
                this._length = 0;
                this._front = 0;
                this._makeCapacity();
                if (r(t)) {
                    for (var e = t.length, n = 0; n < e; ++n) this[n] = t[n];
                    this._length = e
                }
            }
            e.prototype.toArray = function() {
                for (var t = this._length, e = new Array(t), r = this._front, n = this._capacity, i = 0; i < t; ++i) e[i] = this[r + i & n - 1];
                return e
            };
            e.prototype.push = function(t) {
                var e = arguments.length,
                    r = this._length;
                if (e > 1) {
                    var n = this._capacity;
                    if (r + e > n) {
                        for (var i = 0; i < e; ++i) {
                            this._checkCapacity(r + 1);
                            this[a = this._front + r & this._capacity - 1] = arguments[i];
                            r++;
                            this._length = r
                        }
                        return r
                    }
                    for (var a = this._front, i = 0; i < e; ++i) {
                        this[a + r & n - 1] = arguments[i];
                        a++
                    }
                    this._length = r + e;
                    return r + e
                }
                if (0 === e) return r;
                this._checkCapacity(r + 1);
                this[i = this._front + r & this._capacity - 1] = t;
                this._length = r + 1;
                return r + 1
            };
            e.prototype.pop = function() {
                var t = this._length;
                if (0 !== t) {
                    var e = this._front + t - 1 & this._capacity - 1,
                        r = this[e];
                    this[e] = void 0;
                    this._length = t - 1;
                    return r
                }
            };
            e.prototype.shift = function() {
                var t = this._length;
                if (0 !== t) {
                    var e = this._front,
                        r = this[e];
                    this[e] = void 0;
                    this._front = e + 1 & this._capacity - 1;
                    this._length = t - 1;
                    return r
                }
            };
            e.prototype.unshift = function(t) {
                var e = this._length,
                    r = arguments.length;
                if (r > 1) {
                    if (e + r > (i = this._capacity)) {
                        for (var n = r - 1; n >= 0; n--) {
                            this._checkCapacity(e + 1);
                            var i = this._capacity;
                            this[o = (this._front - 1 & i - 1 ^ i) - i] = arguments[n];
                            e++;
                            this._length = e;
                            this._front = o
                        }
                        return e
                    }
                    var a = this._front;
                    for (n = r - 1; n >= 0; n--) {
                        var o;
                        this[o = (a - 1 & i - 1 ^ i) - i] = arguments[n];
                        a = o
                    }
                    this._front = a;
                    this._length = e + r;
                    return e + r
                }
                if (0 === r) return e;
                this._checkCapacity(e + 1);
                i = this._capacity;
                this[n = (this._front - 1 & i - 1 ^ i) - i] = t;
                this._length = e + 1;
                this._front = n;
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
                    var r = this._length;
                    e < 0 && (e += r);
                    if (!(e < 0 || e >= r)) return this[this._front + e & this._capacity - 1]
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
                    r = this._capacity,
                    i = new Array(r),
                    a = this._length;
                n(this, 0, i, 0, r);
                this._capacity = t;
                this._makeCapacity();
                this._front = 0;
                if (e + a <= r) n(i, e, this, 0, a);
                else {
                    var o = a - (e + a & r - 1);
                    n(i, e, this, 0, o);
                    n(i, 0, this, o, a - o)
                }
            };
            var r = Array.isArray;

            function n(t, e, r, n, i) {
                for (var a = 0; a < i; ++a) r[a + n] = t[a + e]
            }

            function i(t) {
                if ("number" != typeof t) {
                    if (!r(t)) return 16;
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
                var r = e.length,
                    n = t.length;
                if (n > r) return !1;
                if (n === r) return t === e;
                t: for (var i = 0, a = 0; i < n; i++) {
                    for (var o = t.charCodeAt(i); a < r;)
                        if (e.charCodeAt(a++) === o) continue t;
                    return !1
                }
                return !0
            }
        },
        896874: t => {
            t.exports = function(t, e, r) {
                switch (r.length) {
                    case 0:
                        return t.call(e);
                    case 1:
                        return t.call(e, r[0]);
                    case 2:
                        return t.call(e, r[0], r[1]);
                    case 3:
                        return t.call(e, r[0], r[1], r[2])
                }
                return t.apply(e, r)
            }
        },
        70151: (t, e, r) => {
            var n = r(200278),
                i = r(173480);
            t.exports = function(t) {
                return i(n(t))
            }
        },
        269199: (t, e, r) => {
            var n = r(989881),
                i = r(498612);
            t.exports = function(t, e) {
                var r = -1,
                    a = i(t) ? Array(t.length) : [];
                n(t, (function(t, n, i) {
                    a[++r] = e(t, n, i)
                }));
                return a
            }
        },
        882689: (t, e, r) => {
            var n = r(829932),
                i = r(267206),
                a = r(269199),
                o = r(571131),
                u = r(307518),
                c = r(285022),
                s = r(406557);
            t.exports = function(t, e, r) {
                var l = -1;
                e = n(e.length ? e : [s], u(i));
                var _ = a(t, (function(t, r, i) {
                    return {
                        criteria: n(e, (function(e) {
                            return e(t)
                        })),
                        index: ++l,
                        value: t
                    }
                }));
                return o(_, (function(t, e) {
                    return c(t, e, r)
                }))
            }
        },
        105976: (t, e, r) => {
            var n = r(406557),
                i = r(545357),
                a = r(430061);
            t.exports = function(t, e) {
                return a(i(t, e, n), t + "")
            }
        },
        356560: (t, e, r) => {
            var n = r(575703),
                i = r(538777),
                a = r(406557),
                o = i ? function(t, e) {
                    return i(t, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: n(e),
                        writable: !0
                    })
                } : a;
            t.exports = o
        },
        525127: (t, e, r) => {
            var n = r(173480),
                i = r(252628);
            t.exports = function(t) {
                return n(i(t))
            }
        },
        571131: t => {
            t.exports = function(t, e) {
                var r = t.length;
                t.sort(e);
                for (; r--;) t[r] = t[r].value;
                return t
            }
        },
        747415: (t, e, r) => {
            var n = r(829932);
            t.exports = function(t, e) {
                return n(e, (function(e) {
                    return t[e]
                }))
            }
        },
        626393: (t, e, r) => {
            var n = r(733448);
            t.exports = function(t, e) {
                if (t !== e) {
                    var r = void 0 !== t,
                        i = null === t,
                        a = t == t,
                        o = n(t),
                        u = void 0 !== e,
                        c = null === e,
                        s = e == e,
                        l = n(e);
                    if (!c && !l && !o && t > e || o && u && s && !c && !l || i && u && s || !r && s || !a) return 1;
                    if (!i && !o && !l && t < e || l && r && a && !i && !o || c && r && a || !u && a || !s) return -1
                }
                return 0
            }
        },
        285022: (t, e, r) => {
            var n = r(626393);
            t.exports = function(t, e, r) {
                for (var i = -1, a = t.criteria, o = e.criteria, u = a.length, c = r.length; ++i < u;) {
                    var s = n(a[i], o[i]);
                    if (s) {
                        return i >= c ? s : s * ("desc" == r[i] ? -1 : 1)
                    }
                }
                return t.index - e.index
            }
        },
        200278: t => {
            t.exports = function(t, e) {
                var r = -1,
                    n = t.length;
                e || (e = Array(n));
                for (; ++r < n;) e[r] = t[r];
                return e
            }
        },
        545357: (t, e, r) => {
            var n = r(896874),
                i = Math.max;
            t.exports = function(t, e, r) {
                e = i(void 0 === e ? t.length - 1 : e, 0);
                return function() {
                    for (var a = arguments, o = -1, u = i(a.length - e, 0), c = Array(u); ++o < u;) c[o] = a[e + o];
                    o = -1;
                    for (var s = Array(e + 1); ++o < e;) s[o] = a[o];
                    s[e] = r(c);
                    return n(t, this, s)
                }
            }
        },
        430061: (t, e, r) => {
            var n = r(356560),
                i = r(521275)(n);
            t.exports = i
        },
        521275: t => {
            var e = Date.now;
            t.exports = function(t) {
                var r = 0,
                    n = 0;
                return function() {
                    var i = e(),
                        a = 16 - (i - n);
                    n = i;
                    if (a > 0) {
                        if (++r >= 800) return arguments[0]
                    } else r = 0;
                    return t.apply(void 0, arguments)
                }
            }
        },
        173480: (t, e, r) => {
            var n = r(769877);
            t.exports = function(t, e) {
                var r = -1,
                    i = t.length,
                    a = i - 1;
                e = void 0 === e ? i : e;
                for (; ++r < e;) {
                    var o = n(r, a),
                        u = t[o];
                    t[o] = t[r];
                    t[r] = u
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
        208804: (t, e, r) => {
            t.exports = r(91175)
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
        369983: (t, e, r) => {
            var n = r(70151),
                i = r(525127),
                a = r(701469);
            t.exports = function(t) {
                return (a(t) ? n : i)(t)
            }
        },
        189734: (t, e, r) => {
            var n = r(121078),
                i = r(882689),
                a = r(105976),
                o = r(816612),
                u = a((function(t, e) {
                    if (null == t) return [];
                    var r = e.length;
                    r > 1 && o(t, e[0], e[1]) ? e = [] : r > 2 && o(e[0], e[1], e[2]) && (e = [e[0]]);
                    return i(t, n(e, 1), [])
                }));
            t.exports = u
        },
        823493: (t, e, r) => {
            var n = r(23279),
                i = r(513218);
            t.exports = function(t, e, r) {
                var a = !0,
                    o = !0;
                if ("function" != typeof t) throw new TypeError("Expected a function");
                if (i(r)) {
                    a = "leading" in r ? !!r.leading : a;
                    o = "trailing" in r ? !!r.trailing : o
                }
                return n(t, e, {
                    leading: a,
                    maxWait: e,
                    trailing: o
                })
            }
        },
        252628: (t, e, r) => {
            var n = r(747415),
                i = r(3674);
            t.exports = function(t) {
                return null == t ? [] : n(t, i(t))
            }
        },
        620745: (t, e, r) => {
            "use strict";
            var n = r(973935);
            e.s = n.createRoot;
            n.hydrateRoot
        },
        108717: (t, e, r) => {
            "use strict";
            r.d(e, {
                Z: () => _
            });
            var n = r(785893),
                i = (r(667294), r(294184)),
                a = r.n(i),
                o = r(364681),
                u = r.n(o);

            function c(t, e, r) {
                e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r;
                return t
            }

            function s(t, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : function(t, e) {
                    var r = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(t);
                        e && (n = n.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(e)).forEach((function(r) {
                    Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r))
                }));
                return t
            }

            function l(t, e) {
                if (null == t) return {};
                var r, n, i = function(t, e) {
                    if (null == t) return {};
                    var r, n, i = {},
                        a = Object.keys(t);
                    for (n = 0; n < a.length; n++) {
                        r = a[n];
                        e.indexOf(r) >= 0 || (i[r] = t[r])
                    }
                    return i
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(t);
                    for (n = 0; n < a.length; n++) {
                        r = a[n];
                        e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r])
                    }
                }
                return i
            }
            const _ = function(t) {
                var e = t.open,
                    r = void 0 !== e && e,
                    i = t.className,
                    o = l(t, ["open", "className"]);
                return (0, n.jsxs)("button", s(function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = null != arguments[e] ? arguments[e] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(t) {
                            return Object.getOwnPropertyDescriptor(r, t).enumerable
                        }))));
                        n.forEach((function(e) {
                            c(t, e, r[e])
                        }))
                    }
                    return t
                }({
                    type: "button",
                    className: a()(u().btnHamburger, c({}, u().btnHamburgerOpen, r), i)
                }, o), {
                    children: [(0, n.jsx)("span", {}), (0, n.jsx)("span", {}), (0, n.jsx)("span", {}), (0, n.jsx)("span", {}), (0, n.jsx)("span", {}), (0, n.jsx)("span", {})]
                }))
            }
        },
        517586: (t, e, r) => {
            "use strict";
            r.d(e, {
                Z: () => i
            });
            var n;
            ! function(t) {
                t.ACTIVITY_CARD_BACKGROUND = "var(--activity-card-background)";
                t.ANDROID_NAVIGATION_BAR_BACKGROUND = "var(--android-navigation-bar-background)";
                t.ANDROID_NAVIGATION_SCRIM_BACKGROUND = "var(--android-navigation-scrim-background)";
                t.ANDROID_RIPPLE = "var(--android-ripple)";
                t.BACKGROUND_ACCENT = "var(--background-accent)";
                t.BACKGROUND_FLOATING = "var(--background-floating)";
                t.BACKGROUND_MENTIONED = "var(--background-mentioned)";
                t.BACKGROUND_MENTIONED_HOVER = "var(--background-mentioned-hover)";
                t.BACKGROUND_MESSAGE_AUTOMOD = "var(--background-message-automod)";
                t.BACKGROUND_MESSAGE_AUTOMOD_HOVER = "var(--background-message-automod-hover)";
                t.BACKGROUND_MESSAGE_HIGHLIGHT = "var(--background-message-highlight)";
                t.BACKGROUND_MESSAGE_HIGHLIGHT_HOVER = "var(--background-message-highlight-hover)";
                t.BACKGROUND_MESSAGE_HOVER = "var(--background-message-hover)";
                t.BACKGROUND_MOBILE_PRIMARY = "var(--background-mobile-primary)";
                t.BACKGROUND_MOBILE_SECONDARY = "var(--background-mobile-secondary)";
                t.BACKGROUND_MODIFIER_ACCENT = "var(--background-modifier-accent)";
                t.BACKGROUND_MODIFIER_ACCENT_2 = "var(--background-modifier-accent-2)";
                t.BACKGROUND_MODIFIER_ACTIVE = "var(--background-modifier-active)";
                t.BACKGROUND_MODIFIER_HOVER = "var(--background-modifier-hover)";
                t.BACKGROUND_MODIFIER_SELECTED = "var(--background-modifier-selected)";
                t.BACKGROUND_NESTED_FLOATING = "var(--background-nested-floating)";
                t.BACKGROUND_PRIMARY = "var(--background-primary)";
                t.BACKGROUND_SECONDARY = "var(--background-secondary)";
                t.BACKGROUND_SECONDARY_ALT = "var(--background-secondary-alt)";
                t.BACKGROUND_TERTIARY = "var(--background-tertiary)";
                t.BG_BACKDROP = "var(--bg-backdrop)";
                t.BG_BACKDROP_NO_OPACITY = "var(--bg-backdrop-no-opacity)";
                t.BG_BASE_PRIMARY = "var(--bg-base-primary)";
                t.BG_BASE_SECONDARY = "var(--bg-base-secondary)";
                t.BG_BASE_TERTIARY = "var(--bg-base-tertiary)";
                t.BG_MOD_FAINT = "var(--bg-mod-faint)";
                t.BG_MOD_STRONG = "var(--bg-mod-strong)";
                t.BG_MOD_SUBTLE = "var(--bg-mod-subtle)";
                t.BG_SURFACE_OVERLAY = "var(--bg-surface-overlay)";
                t.BG_SURFACE_OVERLAY_TMP = "var(--bg-surface-overlay-tmp)";
                t.BG_SURFACE_RAISED = "var(--bg-surface-raised)";
                t.BLACK = "var(--black)";
                t.BLUR_FALLBACK = "var(--blur-fallback)";
                t.BLUR_FALLBACK_PRESSED = "var(--blur-fallback-pressed)";
                t.BORDER_FAINT = "var(--border-faint)";
                t.BORDER_STRONG = "var(--border-strong)";
                t.BORDER_SUBTLE = "var(--border-subtle)";
                t.BUG_REPORTER_MODAL_SUBMITTING_BACKGROUND = "var(--bug-reporter-modal-submitting-background)";
                t.BUTTON_CREATOR_REVENUE_BACKGROUND = "var(--button-creator-revenue-background)";
                t.BUTTON_DANGER_BACKGROUND = "var(--button-danger-background)";
                t.BUTTON_DANGER_BACKGROUND_ACTIVE = "var(--button-danger-background-active)";
                t.BUTTON_DANGER_BACKGROUND_DISABLED = "var(--button-danger-background-disabled)";
                t.BUTTON_DANGER_BACKGROUND_HOVER = "var(--button-danger-background-hover)";
                t.BUTTON_OUTLINE_BRAND_BACKGROUND = "var(--button-outline-brand-background)";
                t.BUTTON_OUTLINE_BRAND_BACKGROUND_ACTIVE = "var(--button-outline-brand-background-active)";
                t.BUTTON_OUTLINE_BRAND_BACKGROUND_HOVER = "var(--button-outline-brand-background-hover)";
                t.BUTTON_OUTLINE_BRAND_BORDER = "var(--button-outline-brand-border)";
                t.BUTTON_OUTLINE_BRAND_BORDER_ACTIVE = "var(--button-outline-brand-border-active)";
                t.BUTTON_OUTLINE_BRAND_BORDER_HOVER = "var(--button-outline-brand-border-hover)";
                t.BUTTON_OUTLINE_BRAND_TEXT = "var(--button-outline-brand-text)";
                t.BUTTON_OUTLINE_BRAND_TEXT_ACTIVE = "var(--button-outline-brand-text-active)";
                t.BUTTON_OUTLINE_BRAND_TEXT_HOVER = "var(--button-outline-brand-text-hover)";
                t.BUTTON_OUTLINE_DANGER_BACKGROUND = "var(--button-outline-danger-background)";
                t.BUTTON_OUTLINE_DANGER_BACKGROUND_ACTIVE = "var(--button-outline-danger-background-active)";
                t.BUTTON_OUTLINE_DANGER_BACKGROUND_HOVER = "var(--button-outline-danger-background-hover)";
                t.BUTTON_OUTLINE_DANGER_BORDER = "var(--button-outline-danger-border)";
                t.BUTTON_OUTLINE_DANGER_BORDER_ACTIVE = "var(--button-outline-danger-border-active)";
                t.BUTTON_OUTLINE_DANGER_BORDER_HOVER = "var(--button-outline-danger-border-hover)";
                t.BUTTON_OUTLINE_DANGER_TEXT = "var(--button-outline-danger-text)";
                t.BUTTON_OUTLINE_DANGER_TEXT_ACTIVE = "var(--button-outline-danger-text-active)";
                t.BUTTON_OUTLINE_DANGER_TEXT_HOVER = "var(--button-outline-danger-text-hover)";
                t.BUTTON_OUTLINE_POSITIVE_BACKGROUND = "var(--button-outline-positive-background)";
                t.BUTTON_OUTLINE_POSITIVE_BACKGROUND_ACTIVE = "var(--button-outline-positive-background-active)";
                t.BUTTON_OUTLINE_POSITIVE_BACKGROUND_HOVER = "var(--button-outline-positive-background-hover)";
                t.BUTTON_OUTLINE_POSITIVE_BORDER = "var(--button-outline-positive-border)";
                t.BUTTON_OUTLINE_POSITIVE_BORDER_ACTIVE = "var(--button-outline-positive-border-active)";
                t.BUTTON_OUTLINE_POSITIVE_BORDER_HOVER = "var(--button-outline-positive-border-hover)";
                t.BUTTON_OUTLINE_POSITIVE_TEXT = "var(--button-outline-positive-text)";
                t.BUTTON_OUTLINE_POSITIVE_TEXT_ACTIVE = "var(--button-outline-positive-text-active)";
                t.BUTTON_OUTLINE_POSITIVE_TEXT_HOVER = "var(--button-outline-positive-text-hover)";
                t.BUTTON_OUTLINE_PRIMARY_BACKGROUND = "var(--button-outline-primary-background)";
                t.BUTTON_OUTLINE_PRIMARY_BACKGROUND_ACTIVE = "var(--button-outline-primary-background-active)";
                t.BUTTON_OUTLINE_PRIMARY_BACKGROUND_HOVER = "var(--button-outline-primary-background-hover)";
                t.BUTTON_OUTLINE_PRIMARY_BORDER = "var(--button-outline-primary-border)";
                t.BUTTON_OUTLINE_PRIMARY_BORDER_ACTIVE = "var(--button-outline-primary-border-active)";
                t.BUTTON_OUTLINE_PRIMARY_BORDER_HOVER = "var(--button-outline-primary-border-hover)";
                t.BUTTON_OUTLINE_PRIMARY_TEXT = "var(--button-outline-primary-text)";
                t.BUTTON_OUTLINE_PRIMARY_TEXT_ACTIVE = "var(--button-outline-primary-text-active)";
                t.BUTTON_OUTLINE_PRIMARY_TEXT_HOVER = "var(--button-outline-primary-text-hover)";
                t.BUTTON_POSITIVE_BACKGROUND = "var(--button-positive-background)";
                t.BUTTON_POSITIVE_BACKGROUND_ACTIVE = "var(--button-positive-background-active)";
                t.BUTTON_POSITIVE_BACKGROUND_DISABLED = "var(--button-positive-background-disabled)";
                t.BUTTON_POSITIVE_BACKGROUND_HOVER = "var(--button-positive-background-hover)";
                t.BUTTON_SECONDARY_BACKGROUND = "var(--button-secondary-background)";
                t.BUTTON_SECONDARY_BACKGROUND_ACTIVE = "var(--button-secondary-background-active)";
                t.BUTTON_SECONDARY_BACKGROUND_DISABLED = "var(--button-secondary-background-disabled)";
                t.BUTTON_SECONDARY_BACKGROUND_HOVER = "var(--button-secondary-background-hover)";
                t.CARD_GRADIENT_BG = "var(--card-gradient-bg)";
                t.CARD_GRADIENT_PRESSED_BG = "var(--card-gradient-pressed-bg)";
                t.CARD_PRIMARY_BG = "var(--card-primary-bg)";
                t.CARD_PRIMARY_PRESSED_BG = "var(--card-primary-pressed-bg)";
                t.CARD_SECONDARY_BG = "var(--card-secondary-bg)";
                t.CARD_SECONDARY_PRESSED_BG = "var(--card-secondary-pressed-bg)";
                t.CHANNEL_ICON = "var(--channel-icon)";
                t.CHANNEL_TEXT_AREA_PLACEHOLDER = "var(--channel-text-area-placeholder)";
                t.CHANNELS_DEFAULT = "var(--channels-default)";
                t.CHANNELTEXTAREA_BACKGROUND = "var(--channeltextarea-background)";
                t.CHAT_BACKGROUND = "var(--chat-background)";
                t.CHAT_BORDER = "var(--chat-border)";
                t.CHAT_INPUT_CONTAINER_BACKGROUND = "var(--chat-input-container-background)";
                t.CHAT_SWIPE_TO_REPLY_BACKGROUND = "var(--chat-swipe-to-reply-background)";
                t.CONTROL_BRAND_FOREGROUND = "var(--control-brand-foreground)";
                t.CONTROL_BRAND_FOREGROUND_NEW = "var(--control-brand-foreground-new)";
                t.CREATOR_REVENUE_ICON_GRADIENT_END = "var(--creator-revenue-icon-gradient-end)";
                t.CREATOR_REVENUE_ICON_GRADIENT_START = "var(--creator-revenue-icon-gradient-start)";
                t.CREATOR_REVENUE_INFO_BOX_BACKGROUND = "var(--creator-revenue-info-box-background)";
                t.CREATOR_REVENUE_INFO_BOX_BORDER = "var(--creator-revenue-info-box-border)";
                t.CREATOR_REVENUE_LOCKED_CHANNEL_ICON = "var(--creator-revenue-locked-channel-icon)";
                t.CREATOR_REVENUE_PROGRESS_BAR = "var(--creator-revenue-progress-bar)";
                t.DEPRECATED_CARD_BG = "var(--deprecated-card-bg)";
                t.DEPRECATED_CARD_EDITABLE_BG = "var(--deprecated-card-editable-bg)";
                t.DEPRECATED_QUICKSWITCHER_INPUT_BACKGROUND = "var(--deprecated-quickswitcher-input-background)";
                t.DEPRECATED_QUICKSWITCHER_INPUT_PLACEHOLDER = "var(--deprecated-quickswitcher-input-placeholder)";
                t.DEPRECATED_STORE_BG = "var(--deprecated-store-bg)";
                t.DEPRECATED_TEXT_INPUT_BG = "var(--deprecated-text-input-bg)";
                t.DEPRECATED_TEXT_INPUT_BORDER = "var(--deprecated-text-input-border)";
                t.DEPRECATED_TEXT_INPUT_BORDER_DISABLED = "var(--deprecated-text-input-border-disabled)";
                t.DEPRECATED_TEXT_INPUT_BORDER_HOVER = "var(--deprecated-text-input-border-hover)";
                t.DEPRECATED_TEXT_INPUT_PREFIX = "var(--deprecated-text-input-prefix)";
                t.DISPLAY_BANNER_OVERFLOW_BACKGROUND = "var(--display-banner-overflow-background)";
                t.DIVIDER_STRONG = "var(--divider-strong)";
                t.DIVIDER_SUBTLE = "var(--divider-subtle)";
                t.FOCUS_PRIMARY = "var(--focus-primary)";
                t.FORUM_POST_EXTRA_MEDIA_COUNT_CONTAINER_BACKGROUND = "var(--forum-post-extra-media-count-container-background)";
                t.FORUM_POST_TAG_BACKGROUND = "var(--forum-post-tag-background)";
                t.GUILD_NOTIFICATIONS_BOTTOM_SHEET_PILL_BACKGROUND = "var(--guild-notifications-bottom-sheet-pill-background)";
                t.HEADER_MUTED = "var(--header-muted)";
                t.HEADER_PRIMARY = "var(--header-primary)";
                t.HEADER_SECONDARY = "var(--header-secondary)";
                t.HOME_BACKGROUND = "var(--home-background)";
                t.HOME_CARD_RESTING_BORDER = "var(--home-card-resting-border)";
                t.ICON_MUTED = "var(--icon-muted)";
                t.ICON_PRIMARY = "var(--icon-primary)";
                t.ICON_SECONDARY = "var(--icon-secondary)";
                t.INFO_BOX_BACKGROUND = "var(--info-box-background)";
                t.INFO_DANGER_BACKGROUND = "var(--info-danger-background)";
                t.INFO_DANGER_FOREGROUND = "var(--info-danger-foreground)";
                t.INFO_DANGER_TEXT = "var(--info-danger-text)";
                t.INFO_HELP_BACKGROUND = "var(--info-help-background)";
                t.INFO_HELP_FOREGROUND = "var(--info-help-foreground)";
                t.INFO_HELP_TEXT = "var(--info-help-text)";
                t.INFO_POSITIVE_BACKGROUND = "var(--info-positive-background)";
                t.INFO_POSITIVE_FOREGROUND = "var(--info-positive-foreground)";
                t.INFO_POSITIVE_TEXT = "var(--info-positive-text)";
                t.INFO_WARNING_BACKGROUND = "var(--info-warning-background)";
                t.INFO_WARNING_FOREGROUND = "var(--info-warning-foreground)";
                t.INFO_WARNING_TEXT = "var(--info-warning-text)";
                t.INPUT_BACKGROUND = "var(--input-background)";
                t.INPUT_PLACEHOLDER_TEXT = "var(--input-placeholder-text)";
                t.INTERACTIVE_ACTIVE = "var(--interactive-active)";
                t.INTERACTIVE_HOVER = "var(--interactive-hover)";
                t.INTERACTIVE_MUTED = "var(--interactive-muted)";
                t.INTERACTIVE_NORMAL = "var(--interactive-normal)";
                t.LEGACY_ANDROID_BLUR_OVERLAY_DEFAULT = "var(--legacy-android-blur-overlay-default)";
                t.LEGACY_ANDROID_BLUR_OVERLAY_ULTRA_THIN = "var(--legacy-android-blur-overlay-ultra-thin)";
                t.LEGACY_BLUR_FALLBACK_DEFAULT = "var(--legacy-blur-fallback-default)";
                t.LEGACY_BLUR_FALLBACK_ULTRA_THIN = "var(--legacy-blur-fallback-ultra-thin)";
                t.LIVE_STAGE_TILE_BORDER = "var(--live-stage-tile-border)";
                t.LOGO_PRIMARY = "var(--logo-primary)";
                t.MENTION_BACKGROUND = "var(--mention-background)";
                t.MENTION_FOREGROUND = "var(--mention-foreground)";
                t.MODAL_BACKGROUND = "var(--modal-background)";
                t.MODAL_FOOTER_BACKGROUND = "var(--modal-footer-background)";
                t.NAVIGATOR_HEADER_TINT = "var(--navigator-header-tint)";
                t.PROFILE_GRADIENT_CARD_BACKGROUND = "var(--profile-gradient-card-background)";
                t.PROFILE_GRADIENT_MESSAGE_INPUT_BORDER = "var(--profile-gradient-message-input-border)";
                t.PROFILE_GRADIENT_NOTE_BACKGROUND = "var(--profile-gradient-note-background)";
                t.PROFILE_GRADIENT_OVERLAY = "var(--profile-gradient-overlay)";
                t.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME = "var(--profile-gradient-overlay-synced-with-user-theme)";
                t.PROFILE_GRADIENT_PROFILE_BODY_BACKGROUND_HOVER = "var(--profile-gradient-profile-body-background-hover)";
                t.PROFILE_GRADIENT_ROLE_PILL_BACKGROUND = "var(--profile-gradient-role-pill-background)";
                t.PROFILE_GRADIENT_ROLE_PILL_BORDER = "var(--profile-gradient-role-pill-border)";
                t.PROFILE_GRADIENT_SECTION_BOX = "var(--profile-gradient-section-box)";
                t.REDESIGN_ACTIVITY_CARD_BACKGROUND = "var(--redesign-activity-card-background)";
                t.REDESIGN_ACTIVITY_CARD_BACKGROUND_PRESSED = "var(--redesign-activity-card-background-pressed)";
                t.REDESIGN_ACTIVITY_CARD_BADGE_ICON = "var(--redesign-activity-card-badge-icon)";
                t.REDESIGN_ACTIVITY_CARD_BORDER = "var(--redesign-activity-card-border)";
                t.REDESIGN_ACTIVITY_CARD_OVERFLOW_BACKGROUND = "var(--redesign-activity-card-overflow-background)";
                t.REDESIGN_BUTTON_DANGER_BACKGROUND = "var(--redesign-button-danger-background)";
                t.REDESIGN_BUTTON_DANGER_PRESSED_BACKGROUND = "var(--redesign-button-danger-pressed-background)";
                t.REDESIGN_BUTTON_DANGER_TEXT = "var(--redesign-button-danger-text)";
                t.REDESIGN_BUTTON_OVERLAY_ALPHA_BACKGROUND = "var(--redesign-button-overlay-alpha-background)";
                t.REDESIGN_BUTTON_OVERLAY_ALPHA_PRESSED_BACKGROUND = "var(--redesign-button-overlay-alpha-pressed-background)";
                t.REDESIGN_BUTTON_OVERLAY_ALPHA_TEXT = "var(--redesign-button-overlay-alpha-text)";
                t.REDESIGN_BUTTON_OVERLAY_BACKGROUND = "var(--redesign-button-overlay-background)";
                t.REDESIGN_BUTTON_OVERLAY_PRESSED_BACKGROUND = "var(--redesign-button-overlay-pressed-background)";
                t.REDESIGN_BUTTON_OVERLAY_TEXT = "var(--redesign-button-overlay-text)";
                t.REDESIGN_BUTTON_POSITIVE_BACKGROUND = "var(--redesign-button-positive-background)";
                t.REDESIGN_BUTTON_POSITIVE_PRESSED_BACKGROUND = "var(--redesign-button-positive-pressed-background)";
                t.REDESIGN_BUTTON_POSITIVE_TEXT = "var(--redesign-button-positive-text)";
                t.REDESIGN_BUTTON_PRIMARY_ALT_BACKGROUND = "var(--redesign-button-primary-alt-background)";
                t.REDESIGN_BUTTON_PRIMARY_ALT_BORDER = "var(--redesign-button-primary-alt-border)";
                t.REDESIGN_BUTTON_PRIMARY_ALT_ON_BLURPLE_BACKGROUND = "var(--redesign-button-primary-alt-on-blurple-background)";
                t.REDESIGN_BUTTON_PRIMARY_ALT_ON_BLURPLE_BORDER = "var(--redesign-button-primary-alt-on-blurple-border)";
                t.REDESIGN_BUTTON_PRIMARY_ALT_ON_BLURPLE_PRESSED_BACKGROUND = "var(--redesign-button-primary-alt-on-blurple-pressed-background)";
                t.REDESIGN_BUTTON_PRIMARY_ALT_ON_BLURPLE_PRESSED_BORDER = "var(--redesign-button-primary-alt-on-blurple-pressed-border)";
                t.REDESIGN_BUTTON_PRIMARY_ALT_ON_BLURPLE_TEXT = "var(--redesign-button-primary-alt-on-blurple-text)";
                t.REDESIGN_BUTTON_PRIMARY_ALT_PRESSED_BACKGROUND = "var(--redesign-button-primary-alt-pressed-background)";
                t.REDESIGN_BUTTON_PRIMARY_ALT_PRESSED_BORDER = "var(--redesign-button-primary-alt-pressed-border)";
                t.REDESIGN_BUTTON_PRIMARY_ALT_PRESSED_TEXT = "var(--redesign-button-primary-alt-pressed-text)";
                t.REDESIGN_BUTTON_PRIMARY_ALT_TEXT = "var(--redesign-button-primary-alt-text)";
                t.REDESIGN_BUTTON_PRIMARY_BACKGROUND = "var(--redesign-button-primary-background)";
                t.REDESIGN_BUTTON_PRIMARY_ON_BLURPLE_BACKGROUND = "var(--redesign-button-primary-on-blurple-background)";
                t.REDESIGN_BUTTON_PRIMARY_ON_BLURPLE_PRESSED_BACKGROUND = "var(--redesign-button-primary-on-blurple-pressed-background)";
                t.REDESIGN_BUTTON_PRIMARY_ON_BLURPLE_PRESSED_TEXT = "var(--redesign-button-primary-on-blurple-pressed-text)";
                t.REDESIGN_BUTTON_PRIMARY_ON_BLURPLE_TEXT = "var(--redesign-button-primary-on-blurple-text)";
                t.REDESIGN_BUTTON_PRIMARY_PRESSED_BACKGROUND = "var(--redesign-button-primary-pressed-background)";
                t.REDESIGN_BUTTON_PRIMARY_TEXT = "var(--redesign-button-primary-text)";
                t.REDESIGN_BUTTON_SECONDARY_ALT_BACKGROUND = "var(--redesign-button-secondary-alt-background)";
                t.REDESIGN_BUTTON_SECONDARY_ALT_PRESSED_BACKGROUND = "var(--redesign-button-secondary-alt-pressed-background)";
                t.REDESIGN_BUTTON_SECONDARY_ALT_PRESSED_TEXT = "var(--redesign-button-secondary-alt-pressed-text)";
                t.REDESIGN_BUTTON_SECONDARY_ALT_TEXT = "var(--redesign-button-secondary-alt-text)";
                t.REDESIGN_BUTTON_SECONDARY_BACKGROUND = "var(--redesign-button-secondary-background)";
                t.REDESIGN_BUTTON_SECONDARY_BORDER = "var(--redesign-button-secondary-border)";
                t.REDESIGN_BUTTON_SECONDARY_PRESSED_BACKGROUND = "var(--redesign-button-secondary-pressed-background)";
                t.REDESIGN_BUTTON_SECONDARY_PRESSED_BORDER = "var(--redesign-button-secondary-pressed-border)";
                t.REDESIGN_BUTTON_SECONDARY_TEXT = "var(--redesign-button-secondary-text)";
                t.REDESIGN_CHANNEL_CATEGORY_NAME_TEXT = "var(--redesign-channel-category-name-text)";
                t.REDESIGN_CHANNEL_MESSAGE_PREVIEW_TEXT = "var(--redesign-channel-message-preview-text)";
                t.REDESIGN_CHANNEL_NAME_MUTED_TEXT = "var(--redesign-channel-name-muted-text)";
                t.REDESIGN_CHANNEL_NAME_TEXT = "var(--redesign-channel-name-text)";
                t.REDESIGN_CHAT_INPUT_BACKGROUND = "var(--redesign-chat-input-background)";
                t.REDESIGN_INPUT_CONTROL_ACTIVE_BG = "var(--redesign-input-control-active-bg)";
                t.REDESIGN_INPUT_CONTROL_SELECTED = "var(--redesign-input-control-selected)";
                t.REDESIGN_ONLY_BACKGROUND_ACTIVE = "var(--redesign-only-background-active)";
                t.REDESIGN_ONLY_BACKGROUND_DEFAULT = "var(--redesign-only-background-default)";
                t.REDESIGN_ONLY_BACKGROUND_OVERLAY = "var(--redesign-only-background-overlay)";
                t.REDESIGN_ONLY_BACKGROUND_RAISED = "var(--redesign-only-background-raised)";
                t.REDESIGN_ONLY_BACKGROUND_SUNKEN = "var(--redesign-only-background-sunken)";
                t.SCROLLBAR_AUTO_SCROLLBAR_COLOR_THUMB = "var(--scrollbar-auto-scrollbar-color-thumb)";
                t.SCROLLBAR_AUTO_SCROLLBAR_COLOR_TRACK = "var(--scrollbar-auto-scrollbar-color-track)";
                t.SCROLLBAR_AUTO_THUMB = "var(--scrollbar-auto-thumb)";
                t.SCROLLBAR_AUTO_TRACK = "var(--scrollbar-auto-track)";
                t.SCROLLBAR_THIN_THUMB = "var(--scrollbar-thin-thumb)";
                t.SCROLLBAR_THIN_TRACK = "var(--scrollbar-thin-track)";
                t.SPOILER_HIDDEN_BACKGROUND = "var(--spoiler-hidden-background)";
                t.SPOILER_REVEALED_BACKGROUND = "var(--spoiler-revealed-background)";
                t.STATUS_DANGER = "var(--status-danger)";
                t.STATUS_DANGER_BACKGROUND = "var(--status-danger-background)";
                t.STATUS_DANGER_TEXT = "var(--status-danger-text)";
                t.STATUS_DND = "var(--status-dnd)";
                t.STATUS_IDLE = "var(--status-idle)";
                t.STATUS_OFFLINE = "var(--status-offline)";
                t.STATUS_ONLINE = "var(--status-online)";
                t.STATUS_POSITIVE = "var(--status-positive)";
                t.STATUS_POSITIVE_BACKGROUND = "var(--status-positive-background)";
                t.STATUS_POSITIVE_TEXT = "var(--status-positive-text)";
                t.STATUS_SPEAKING = "var(--status-speaking)";
                t.STATUS_WARNING = "var(--status-warning)";
                t.STATUS_WARNING_BACKGROUND = "var(--status-warning-background)";
                t.STATUS_WARNING_TEXT = "var(--status-warning-text)";
                t.TEXT_BRAND = "var(--text-brand)";
                t.TEXT_DANGER = "var(--text-danger)";
                t.TEXT_LINK = "var(--text-link)";
                t.TEXT_LINK_LOW_SATURATION = "var(--text-link-low-saturation)";
                t.TEXT_LOW_CONTRAST = "var(--text-low-contrast)";
                t.TEXT_MESSAGE_PREVIEW_LOW_SAT = "var(--text-message-preview-low-sat)";
                t.TEXT_MUTED = "var(--text-muted)";
                t.TEXT_MUTED_ON_DEFAULT = "var(--text-muted-on-default)";
                t.TEXT_NORMAL = "var(--text-normal)";
                t.TEXT_POSITIVE = "var(--text-positive)";
                t.TEXT_PRIMARY = "var(--text-primary)";
                t.TEXT_SECONDARY = "var(--text-secondary)";
                t.TEXT_WARNING = "var(--text-warning)";
                t.TEXTBOX_MARKDOWN_SYNTAX = "var(--textbox-markdown-syntax)";
                t.THEME_LOCKED_BLUR_FALLBACK = "var(--theme-locked-blur-fallback)";
                t.USER_PROFILE_HEADER_OVERFLOW_BACKGROUND = "var(--user-profile-header-overflow-background)";
                t.VOICE_VIDEO_TILE_BLUR_FALLBACK = "var(--voice-video-tile-blur-fallback)";
                t.VOICE_VIDEO_VIDEO_TILE_BLUR_FALLBACK = "var(--voice-video-video-tile-blur-fallback)";
                t.WHITE = "var(--white)"
            }(n || (n = {}));
            const i = n
        },
        180735: (t, e, r) => {
            "use strict";
            r.d(e, {
                h: () => n
            });
            var n;
            ! function(t) {
                t[t.USER = 100] = "USER";
                t[t.STREAM = 18] = "STREAM"
            }(n || (n = {}))
        },
        142520: (t, e, r) => {
            "use strict";
            r.d(e, {
                x: () => n
            });
            var n;
            ! function(t) {
                t.THOUGHT_EMBED_TITLE = "Clyde Thoughts"
            }(n || (n = {}))
        },
        248634: (t, e, r) => {
            "use strict";
            r.d(e, {
                z: () => n
            });
            var n;
            ! function(t) {
                t.MATCH_ALL = "match_all";
                t.MATCH_SOME = "match_some"
            }(n || (n = {}));
            new Set(["match_all", "match_some"])
        },
        938002: (t, e, r) => {
            "use strict";
            r.d(e, {
                Y: () => n
            });

            function n() {
                var t = Promise.resolve(null);
                return function(e) {
                    return new Promise((function(r, n) {
                        t = t.then(e).then(r, n)
                    }))
                }
            }
        },
        125333: (t, e, r) => {
            "use strict";
            r.d(e, {
                z0: () => n,
                Oh: () => i,
                Gk: () => a
            });

            function n(t) {
                return "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.INVITE_HOST, "/").concat(t)
            }

            function i(t) {
                return "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST, "/").concat(t)
            }

            function a() {
                return "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT, "/channels/@me")
            }
        },
        58964: (t, e, r) => {
            "use strict";
            r.d(e, {
                ZP: () => v,
                WS: () => _,
                zS: () => d
            });
            var n = r(131795),
                i = r.n(n),
                a = r(228721);
            const o = r(426080).Z;

            function u(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function c(t, e) {
                if (null == t) return {};
                var r, n, i = function(t, e) {
                    if (null == t) return {};
                    var r, n, i = {},
                        a = Object.keys(t);
                    for (n = 0; n < a.length; n++) {
                        r = a[n];
                        e.indexOf(r) >= 0 || (i[r] = t[r])
                    }
                    return i
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(t);
                    for (n = 0; n < a.length; n++) {
                        r = a[n];
                        e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r])
                    }
                }
                return i
            }

            function s(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != r) {
                        var n, i, a = [],
                            o = !0,
                            u = !1;
                        try {
                            for (r = r.call(t); !(o = (n = r.next()).done); o = !0) {
                                a.push(n.value);
                                if (e && a.length === e) break
                            }
                        } catch (t) {
                            u = !0;
                            i = t
                        } finally {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return a
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return u(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return u(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var l = "https://discordapp.page.link";

            function _() {
                return (0, a.Z)()
            }

            function d(t) {
                if (!t.startsWith(l)) return null;
                try {
                    var e = new URL(t).searchParams,
                        r = e.get("link");
                    if (null == r) return null;
                    var n, i = decodeURIComponent(r),
                        a = new URL(i).searchParams,
                        o = {
                            utmSource: null !== (n = e.get("utm_source")) && void 0 !== n ? n : void 0
                        },
                        u = !0,
                        c = !1,
                        _ = void 0;
                    try {
                        for (var d, v = a.entries()[Symbol.iterator](); !(u = (d = v.next()).done); u = !0) {
                            var f = s(d.value, 2),
                                E = f[0],
                                p = f[1];
                            o[E] = p
                        }
                    } catch (t) {
                        c = !0;
                        _ = t
                    } finally {
                        try {
                            u || null == v.return || v.return()
                        } finally {
                            if (c) throw _
                        }
                    }
                    return o
                } catch (t) {
                    return null
                }
            }

            function v(t, e) {
                var r = e.utmSource,
                    n = e.androidFallbackLink,
                    a = e.iosFallbackLink,
                    u = c(e, ["utmSource", "androidFallbackLink", "iosFallbackLink"]),
                    s = new URL(t);
                for (var _ in u) {
                    var d = u[_];
                    null != d && s.searchParams.set(_, d)
                }
                var v, f, E, p, h, R = encodeURIComponent(s.toString()),
                    O = encodeURIComponent(o()),
                    g = (E = new RegExp("(".concat(["WebView", "(iPhone|iPod|iPad)(?!.*Safari/)"].join("|"), ")"), "ig"), p = null != (null === i() || void 0 === i() || null === (v = i().ua) || void 0 === v ? void 0 : v.match(E)),
                        h = "Safari" === (null === i() || void 0 === i() ? void 0 : i().name) && !p, "iOS" !== (null === i() || void 0 === i() || null === (f = i().os) || void 0 === f ? void 0 : f.family) || h ? 1 : 0),
                    T = null != n ? encodeURIComponent(n) : null,
                    N = null != a ? encodeURIComponent(a) : null,
                    A = "".concat(l, "/?link=").concat(R, "&utm_source=").concat(r, "&apn=").concat("com.discord", "&isi=").concat(985746746, "&ibi=").concat("com.hammerandchisel.discord", "&sd=").concat(O, "&efr=").concat(g);
                null != T && (A += "&afl=".concat(T));
                null != N && (A += "&ifl=".concat(N));
                return A
            }
        },
        426080: (t, e, r) => {
            "use strict";
            r.d(e, {
                Z: () => i
            });
            var n = r(805829);

            function i() {
                return n.Z.Messages.DynamicLinks.IOS_APP_PREVIEW_DESCRIPTION
            }
        },
        222789: (t, e, r) => {
            "use strict";
            r.d(e, {
                Rp: () => c,
                ge: () => a,
                RA: () => u
            });

            function n(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                Array.isArray(t) ? t.forEach((function(t) {
                    return n(t, e)
                })) : "string" == typeof t.content ? e.push(t.content) : null != t.content && n(t.content, e);
                return e
            }

            function i(t, e) {
                if (Array.isArray(e))
                    for (var r = e.length, n = 0; n < r; n++) t.push(e[n]);
                else t.push(e)
            }

            function a(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (Array.isArray(t)) {
                    for (var r = t.length, n = [], o = 0; o < r; o++) i(n, a(t[o], e));
                    return n
                }
                null != t.content && (t.content = a(t.content, t));
                return null != e && t.type === e.type ? t.content : t
            }
            var o = {};

            function u(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    limit: 200
                };
                if (Array.isArray(t))
                    for (var r = t.length, n = 0; n < r; n++) {
                        var i = u(t[n], e);
                        if (i === o) {
                            t.length = n;
                            break
                        }
                        t[n] = i
                    } else if ("text" !== t.type) {
                        e.limit -= 1;
                        if (e.limit <= 0) return o;
                        Array.isArray(t.content) && (t.content = u(t.content, e))
                    } return t
            }

            function c(t) {
                return n(t).join("")
            }
        },
        894012: (t, e, r) => {
            "use strict";
            r.d(e, {
                Rp: () => i.Rp,
                w4: () => a,
                _p: () => o
            });
            var n, i = r(222789),
                a = (n = r(25788).Z).reactParserFor,
                o = n.astParserFor
        },
        25788: (t, e, r) => {
            "use strict";
            r.d(e, {
                Z: () => c
            });
            var n = r(120053),
                i = r.n(n),
                a = r(222789);

            function o(t, e, r) {
                e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r;
                return t
            }

            function u(t, e, r, n, i) {
                r || (e += "\n\n");
                var u;
                u = t(e, function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = null != arguments[e] ? arguments[e] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(t) {
                            return Object.getOwnPropertyDescriptor(r, t).enumerable
                        }))));
                        n.forEach((function(e) {
                            o(t, e, r[e])
                        }))
                    }
                    return t
                }({
                    inline: r
                }, n));
                u = (0, a.ge)(u);
                u = (0, a.RA)(u);
                null != i && (u = i(u, r));
                return u
            }
            const c = {
                reactParserFor: function(t) {
                    var e = i().parserFor(t),
                        r = i().reactFor(i().ruleOutput(t, "react"));
                    return function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                        return r(u(e, t, n, i, a), i)
                    }
                },
                astParserFor: function(t) {
                    var e = i().parserFor(t);
                    return function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                        return u(e, t, r, n, i)
                    }
                }
            }
        },
        283151: (t, e, r) => {
            "use strict";
            r.d(e, {
                Z: () => o
            });
            var n = r(667294);

            function i(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function a(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != r) {
                        var n, i, a = [],
                            o = !0,
                            u = !1;
                        try {
                            for (r = r.call(t); !(o = (n = r.next()).done); o = !0) {
                                a.push(n.value);
                                if (e && a.length === e) break
                            }
                        } catch (t) {
                            u = !0;
                            i = t
                        } finally {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return a
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return i(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return i(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function o() {
                var t = a((0, n.useState)({}), 2)[1];
                return (0, n.useCallback)((function() {
                    return t({})
                }), [])
            }
        },
        989824: (t, e, r) => {
            "use strict";
            r.d(e, {
                Z: () => a
            });
            var n = r(667294),
                i = {};

            function a(t) {
                var e = (0, n.useRef)(i);
                e.current === i && (e.current = t());
                return e.current
            }
        },
        204841: (t, e, r) => {
            "use strict";
            r.d(e, {
                UN: () => n,
                Bd: () => i,
                xS: () => a
            });

            function n(t) {
                let e = t[3],
                    r = 128 & t[2],
                    n = 128 & t[4];
                return (n ? r ? 5 : 7 : 7 & e) / (n ? 7 & e : r ? 5 : 7)
            }

            function i(t, e, r) {
                let n = 4 * t + 1,
                    i = 6 + e * (5 + n),
                    a = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, t >> 8, 255 & t, 0, 0, e >> 8, 255 & e, 8, 6, 0, 0, 0, 0, 0, 0, 0, i >>> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, 73, 68, 65, 84, 120, 1],
                    o = [0, 498536548, 997073096, 651767980, 1994146192, 1802195444, 1303535960, 1342533948, -306674912, -267414716, -690576408, -882789492, -1687895376, -2032938284, -1609899400, -1111625188],
                    u = 1,
                    c = 0;
                for (let t = 0, i = 0, o = n - 1; t < e; t++, o += n - 1) {
                    a.push(t + 1 < e ? 0 : 1, 255 & n, n >> 8, 255 & ~n, n >> 8 ^ 255, 0);
                    for (c = (c + u) % 65521; i < o; i++) {
                        let t = 255 & r[i];
                        a.push(t);
                        u = (u + t) % 65521;
                        c = (c + u) % 65521
                    }
                }
                a.push(c >> 8, 255 & c, u >> 8, 255 & u, 0, 0, 0, 0, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130);
                for (let [t, e] of [
                        [12, 29],
                        [37, 41 + i]
                    ]) {
                    let r = -1;
                    for (let n = t; n < e; n++) {
                        r ^= a[n];
                        r = r >>> 4 ^ o[15 & r];
                        r = r >>> 4 ^ o[15 & r]
                    }
                    r = ~r;
                    a[e++] = r >>> 24;
                    a[e++] = r >> 16 & 255;
                    a[e++] = r >> 8 & 255;
                    a[e++] = 255 & r
                }
                return "data:image/png;base64," + btoa(String.fromCharCode(...a))
            }

            function a(t) {
                let e = function(t) {
                    let {
                        PI: e,
                        min: r,
                        max: i,
                        cos: a,
                        round: o
                    } = Math, u = t[0] | t[1] << 8 | t[2] << 16, c = t[3] | t[4] << 8, s = (63 & u) / 63, l = (u >> 6 & 63) / 31.5 - 1, _ = (u >> 12 & 63) / 31.5 - 1, d = (u >> 18 & 31) / 31, v = u >> 23, f = (c >> 3 & 63) / 63, E = (c >> 9 & 63) / 63, p = c >> 15, h = i(3, p ? v ? 5 : 7 : 7 & c), R = i(3, p ? 7 & c : v ? 5 : 7), O = v ? (15 & t[5]) / 15 : 1, g = (t[5] >> 4) / 15, T = v ? 6 : 5, N = 0, A = (e, r, n) => {
                        let i = [];
                        for (let a = 0; a < r; a++)
                            for (let o = a ? 0 : 1; o * r < e * (r - a); o++) i.push(((t[T + (N >> 1)] >> ((1 & N++) << 2) & 15) / 7.5 - 1) * n);
                        return i
                    }, y = A(h, R, d), b = A(3, 3, 1.25 * f), D = A(3, 3, 1.25 * E), I = v && A(5, 5, g), m = n(t), U = o(m > 1 ? 32 : 32 * m), C = o(m > 1 ? 32 / m : 32), B = new Uint8Array(U * C * 4), S = [], G = [];
                    for (let t = 0, n = 0; t < C; t++)
                        for (let o = 0; o < U; o++, n += 4) {
                            let u = s,
                                c = l,
                                d = _,
                                f = O;
                            for (let t = 0, r = i(h, v ? 5 : 3); t < r; t++) S[t] = a(e / U * (o + .5) * t);
                            for (let r = 0, n = i(R, v ? 5 : 3); r < n; r++) G[r] = a(e / C * (t + .5) * r);
                            for (let t = 0, e = 0; t < R; t++)
                                for (let r = t ? 0 : 1, n = 2 * G[t]; r * R < h * (R - t); r++, e++) u += y[e] * S[r] * n;
                            for (let t = 0, e = 0; t < 3; t++)
                                for (let r = t ? 0 : 1, n = 2 * G[t]; r < 3 - t; r++, e++) {
                                    let t = S[r] * n;
                                    c += b[e] * t;
                                    d += D[e] * t
                                }
                            if (v)
                                for (let t = 0, e = 0; t < 5; t++)
                                    for (let r = t ? 0 : 1, n = 2 * G[t]; r < 5 - t; r++, e++) f += I[e] * S[r] * n;
                            let E = u - 2 / 3 * c,
                                p = (3 * u - E + d) / 2,
                                g = p - d;
                            B[n] = i(0, 255 * r(1, p));
                            B[n + 1] = i(0, 255 * r(1, g));
                            B[n + 2] = i(0, 255 * r(1, E));
                            B[n + 3] = i(0, 255 * r(1, f))
                        }
                    return {
                        w: U,
                        h: C,
                        rgba: B
                    }
                }(t);
                return i(e.w, e.h, e.rgba)
            }
        },
        498964: (t, e, r) => {
            "use strict";
            r.d(e, {
                P: () => q,
                EQ: () => Q
            });
            const n = Symbol.for("@ts-pattern/matcher"),
                i = Symbol.for("@ts-pattern/isVariadic"),
                a = "@ts-pattern/anonymous-select-key",
                o = t => Boolean(t && "object" == typeof t),
                u = t => t && !!t[n],
                c = (t, e, r) => {
                    if (u(t)) {
                        const i = t[n](),
                            {
                                matched: a,
                                selections: o
                            } = i.match(e);
                        return a && o && Object.keys(o).forEach((t => r(t, o[t]))), a
                    }
                    if (o(t)) {
                        if (!o(e)) return !1;
                        if (Array.isArray(t)) {
                            if (!Array.isArray(e)) return !1;
                            let n = [],
                                a = [],
                                o = [];
                            for (const e of t.keys()) {
                                const r = t[e];
                                u(r) && r[i] ? o.push(r) : o.length ? a.push(r) : n.push(r)
                            }
                            if (o.length) {
                                if (o.length > 1) throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
                                if (e.length < n.length + a.length) return !1;
                                const t = e.slice(0, n.length),
                                    i = 0 === a.length ? [] : e.slice(-a.length),
                                    u = e.slice(n.length, 0 === a.length ? 1 / 0 : -a.length);
                                return n.every(((e, n) => c(e, t[n], r))) && a.every(((t, e) => c(t, i[e], r))) && (0 === o.length || c(o[0], u, r))
                            }
                            return t.length === e.length && t.every(((t, n) => c(t, e[n], r)))
                        }
                        return Object.keys(t).every((i => {
                            const a = t[i];
                            return (i in e || u(o = a) && "optional" === o[n]().matcherType) && c(a, e[i], r);
                            var o
                        }))
                    }
                    return Object.is(e, t)
                },
                s = t => {
                    var e, r, i;
                    return o(t) ? u(t) ? null != (e = null == (r = (i = t[n]()).getSelectionKeys) ? void 0 : r.call(i)) ? e : [] : Array.isArray(t) ? l(t, s) : l(Object.values(t), s) : []
                },
                l = (t, e) => t.reduce(((t, r) => t.concat(e(r))), []);

            function _(t) {
                return Object.assign(t, {
                    optional: () => v(t),
                    and: e => p(t, e),
                    or: e => h(t, e),
                    select: e => void 0 === e ? O(t) : O(e, t)
                })
            }

            function d(t) {
                return Object.assign((t => Object.assign(t, {
                    *[Symbol.iterator]() {
                        yield Object.assign(t, {
                            [i]: !0
                        })
                    }
                }))(t), {
                    optional: () => d(v(t)),
                    select: e => d(void 0 === e ? O(t) : O(e, t))
                })
            }

            function v(t) {
                return _({
                    [n]: () => ({
                        match: e => {
                            let r = {};
                            const n = (t, e) => {
                                r[t] = e
                            };
                            return void 0 === e ? (s(t).forEach((t => n(t, void 0))), {
                                matched: !0,
                                selections: r
                            }) : {
                                matched: c(t, e, n),
                                selections: r
                            }
                        },
                        getSelectionKeys: () => s(t),
                        matcherType: "optional"
                    })
                })
            }
            const f = (t, e) => {
                    for (const r of t)
                        if (!e(r)) return !1;
                    return !0
                },
                E = (t, e) => {
                    for (const [r, n] of t.entries())
                        if (!e(n, r)) return !1;
                    return !0
                };

            function p(...t) {
                return _({
                    [n]: () => ({
                        match: e => {
                            let r = {};
                            const n = (t, e) => {
                                r[t] = e
                            };
                            return {
                                matched: t.every((t => c(t, e, n))),
                                selections: r
                            }
                        },
                        getSelectionKeys: () => l(t, s),
                        matcherType: "and"
                    })
                })
            }

            function h(...t) {
                return _({
                    [n]: () => ({
                        match: e => {
                            let r = {};
                            const n = (t, e) => {
                                r[t] = e
                            };
                            return l(t, s).forEach((t => n(t, void 0))), {
                                matched: t.some((t => c(t, e, n))),
                                selections: r
                            }
                        },
                        getSelectionKeys: () => l(t, s),
                        matcherType: "or"
                    })
                })
            }

            function R(t) {
                return {
                    [n]: () => ({
                        match: e => ({
                            matched: Boolean(t(e))
                        })
                    })
                }
            }

            function O(...t) {
                const e = "string" == typeof t[0] ? t[0] : void 0,
                    r = 2 === t.length ? t[1] : "string" == typeof t[0] ? void 0 : t[0];
                return _({
                    [n]: () => ({
                        match: t => {
                            let n = {
                                [null != e ? e : a]: t
                            };
                            return {
                                matched: void 0 === r || c(r, t, ((t, e) => {
                                    n[t] = e
                                })),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => [null != e ? e : a].concat(void 0 === r ? [] : s(r))
                    })
                })
            }

            function g(t) {
                return "number" == typeof t
            }

            function T(t) {
                return "string" == typeof t
            }

            function N(t) {
                return "bigint" == typeof t
            }
            const A = _(R((function(t) {
                    return !0
                }))),
                y = A,
                b = t => Object.assign(_(t), {
                    startsWith: e => {
                        return b(p(t, (r = e, R((t => T(t) && t.startsWith(r))))));
                        var r
                    },
                    endsWith: e => {
                        return b(p(t, (r = e, R((t => T(t) && t.endsWith(r))))));
                        var r
                    },
                    minLength: e => b(p(t, (t => R((e => T(e) && e.length >= t)))(e))),
                    maxLength: e => b(p(t, (t => R((e => T(e) && e.length <= t)))(e))),
                    includes: e => {
                        return b(p(t, (r = e, R((t => T(t) && t.includes(r))))));
                        var r
                    },
                    regex: e => {
                        return b(p(t, (r = e, R((t => T(t) && Boolean(t.match(r)))))));
                        var r
                    }
                }),
                D = b(R(T)),
                I = (t, e) => R((r => g(r) && t <= r && e >= r)),
                m = t => R((e => g(e) && e < t)),
                U = t => R((e => g(e) && e > t)),
                C = t => R((e => g(e) && e <= t)),
                B = t => R((e => g(e) && e >= t)),
                S = () => R((t => g(t) && Number.isInteger(t))),
                G = () => R((t => g(t) && Number.isFinite(t))),
                x = () => R((t => g(t) && t > 0)),
                L = () => R((t => g(t) && t < 0)),
                w = t => Object.assign(_(t), {
                    between: (e, r) => w(p(t, I(e, r))),
                    lt: e => w(p(t, m(e))),
                    gt: e => w(p(t, U(e))),
                    lte: e => w(p(t, C(e))),
                    gte: e => w(p(t, B(e))),
                    int: () => w(p(t, S())),
                    finite: () => w(p(t, G())),
                    positive: () => w(p(t, x())),
                    negative: () => w(p(t, L()))
                }),
                P = w(R(g)),
                k = (t, e) => R((r => N(r) && t <= r && e >= r)),
                V = t => R((e => N(e) && e < t)),
                K = t => R((e => N(e) && e > t)),
                M = t => R((e => N(e) && e <= t)),
                F = t => R((e => N(e) && e >= t)),
                Y = () => R((t => N(t) && t > 0)),
                H = () => R((t => N(t) && t < 0)),
                z = t => Object.assign(_(t), {
                    between: (e, r) => z(p(t, k(e, r))),
                    lt: e => z(p(t, V(e))),
                    gt: e => z(p(t, K(e))),
                    lte: e => z(p(t, M(e))),
                    gte: e => z(p(t, F(e))),
                    positive: () => z(p(t, Y())),
                    negative: () => z(p(t, H()))
                }),
                j = z(R(N)),
                X = _(R((function(t) {
                    return "boolean" == typeof t
                }))),
                W = _(R((function(t) {
                    return "symbol" == typeof t
                }))),
                Z = _(R((function(t) {
                    return null == t
                })));
            var q = {
                __proto__: null,
                matcher: n,
                optional: v,
                array: function(...t) {
                    return d({
                        [n]: () => ({
                            match: e => {
                                if (!Array.isArray(e)) return {
                                    matched: !1
                                };
                                if (0 === t.length) return {
                                    matched: !0
                                };
                                const r = t[0];
                                let n = {};
                                if (0 === e.length) return s(r).forEach((t => {
                                    n[t] = []
                                })), {
                                    matched: !0,
                                    selections: n
                                };
                                const i = (t, e) => {
                                    n[t] = (n[t] || []).concat([e])
                                };
                                return {
                                    matched: e.every((t => c(r, t, i))),
                                    selections: n
                                }
                            },
                            getSelectionKeys: () => 0 === t.length ? [] : s(t[0])
                        })
                    })
                },
                set: function(...t) {
                    return _({
                        [n]: () => ({
                            match: e => {
                                if (!(e instanceof Set)) return {
                                    matched: !1
                                };
                                let r = {};
                                if (0 === e.size) return {
                                    matched: !0,
                                    selections: r
                                };
                                if (0 === t.length) return {
                                    matched: !0
                                };
                                const n = (t, e) => {
                                        r[t] = (r[t] || []).concat([e])
                                    },
                                    i = t[0];
                                return {
                                    matched: f(e, (t => c(i, t, n))),
                                    selections: r
                                }
                            },
                            getSelectionKeys: () => 0 === t.length ? [] : s(t[0])
                        })
                    })
                },
                map: function(...t) {
                    return _({
                        [n]: () => ({
                            match: e => {
                                if (!(e instanceof Map)) return {
                                    matched: !1
                                };
                                let r = {};
                                if (0 === e.size) return {
                                    matched: !0,
                                    selections: r
                                };
                                const n = (t, e) => {
                                    r[t] = (r[t] || []).concat([e])
                                };
                                if (0 === t.length) return {
                                    matched: !0
                                };
                                var i;
                                if (1 === t.length) throw new Error(`\`P.map\` wasn't given enough arguments. Expected (key, value), received ${null==(i=t[0])?void 0:i.toString()}`);
                                const [a, o] = t;
                                return {
                                    matched: E(e, ((t, e) => {
                                        const r = c(a, e, n),
                                            i = c(o, t, n);
                                        return r && i
                                    })),
                                    selections: r
                                }
                            },
                            getSelectionKeys: () => 0 === t.length ? [] : [...s(t[0]), ...s(t[1])]
                        })
                    })
                },
                intersection: p,
                union: h,
                not: function(t) {
                    return _({
                        [n]: () => ({
                            match: e => ({
                                matched: !c(t, e, (() => {}))
                            }),
                            getSelectionKeys: () => [],
                            matcherType: "not"
                        })
                    })
                },
                when: R,
                select: O,
                any: A,
                _: y,
                string: D,
                between: I,
                lt: m,
                gt: U,
                lte: C,
                gte: B,
                int: S,
                finite: G,
                positive: x,
                negative: L,
                number: P,
                betweenBigInt: k,
                ltBigInt: V,
                gtBigInt: K,
                lteBigInt: M,
                gteBigInt: F,
                positiveBigInt: Y,
                negativeBigInt: H,
                bigint: j,
                boolean: X,
                symbol: W,
                nullish: Z,
                instanceOf: function(t) {
                    return _(R(function(t) {
                        return e => e instanceof t
                    }(t)))
                },
                shape: function(t) {
                    return _(R(function(...t) {
                        if (1 === t.length) {
                            const [e] = t;
                            return t => c(e, t, (() => {}))
                        }
                        if (2 === t.length) {
                            const [e, r] = t;
                            return c(e, r, (() => {}))
                        }
                        throw new Error(`isMatching wasn't given the right number of arguments: expected 1 or 2, received ${t.length}.`)
                    }(t)))
                }
            };
            const $ = {
                matched: !1,
                value: void 0
            };

            function Q(t) {
                return new J(t, $)
            }
            class J {
                constructor(t, e) {
                    this.input = void 0, this.state = void 0, this.input = t, this.state = e
                }
                with(...t) {
                    if (this.state.matched) return this;
                    const e = t[t.length - 1],
                        r = [t[0]];
                    let n;
                    3 === t.length && "function" == typeof t[1] ? (r.push(t[0]), n = t[1]) : t.length > 2 && r.push(...t.slice(1, t.length - 1));
                    let i = !1,
                        o = {};
                    const u = (t, e) => {
                            i = !0,
                                o[t] = e
                        },
                        s = !r.some((t => c(t, this.input, u))) || n && !Boolean(n(this.input)) ? $ : {
                            matched: !0,
                            value: e(i ? a in o ? o[a] : o : this.input, this.input)
                        };
                    return new J(this.input, s)
                }
                when(t, e) {
                    if (this.state.matched) return this;
                    const r = Boolean(t(this.input));
                    return new J(this.input, r ? {
                        matched: !0,
                        value: e(this.input, this.input)
                    } : $)
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