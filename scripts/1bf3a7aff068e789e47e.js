(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [2988, 65614, 84832, 71402], {
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
                var o = [];
                n[5] && (o = n[5].split("-")).shift();
                var u = [];
                if (n[6]) {
                    (t = n[6].split("-")).shift();
                    for (var a, l = []; t.length;) {
                        var c = t.shift();
                        if (1 === c.length)
                            if (a) {
                                u.push({
                                    singleton: a,
                                    extension: l
                                });
                                a = c;
                                l = []
                            } else a = c;
                        else l.push(c)
                    }
                    u.push({
                        singleton: a,
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
                        variant: o,
                        extension: u,
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
                O_: () => C,
                qA: () => f,
                Ji: () => x,
                uR: () => N
            });
            var r = n(667294),
                i = n(228721),
                o = n(294184),
                u = n.n(o);

            function a(e, t) {
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
                            o = r.y;
                        this.velocity.update(n), this.velocity.x += i, this.velocity.y += o, this.position.update(n), this.position.x += this.velocity.x * n, this.position.y += this.velocity.y * n, this.size.update(n), this.opacity.update(n), this._lastUpdatedAt = t
                    }, e.prototype.previewPositionUpdate = function(e, t) {
                        var n = t / 100,
                            r = this.velocity.previewUpdate(n),
                            i = this.getNewForces(e, n),
                            o = i.x,
                            u = i.y;
                        r.x += o, r.y += u;
                        var a = this.position.previewUpdate(n);
                        return a.x += r.x * n, a.y += r.y * n, a
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
                d = function(e, t) {
                    return d = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    }, d(e, t)
                };

            function p(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function n() {
                    this.constructor = e
                }
                d(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }
            var h = function() {
                return h = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }, h.apply(this, arguments)
            };
            var y = function(e) {
                    this.value = e
                },
                v = function() {
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
                }(v),
                m = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return p(t, e), t.prototype.update = function() {}, t.prototype.previewUpdate = function() {
                        return this.value
                    }, t
                }(y),
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
                }(y),
                O = function(e) {
                    function t(t, n, r, i, o, u) {
                        var a = e.call(this, t) || this;
                        a.min = n, a.max = r, a.duration = i;
                        var l = a.value / (a.max - a.min) * a.duration,
                            c = isNaN(l) ? 0 : l;
                        return a.timePassed = c < 0 ? a.duration - c : c, a.directionMultiplier = o, a.easingFunction = u, a
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
                }(y);

            function _(e, t) {
                return e === t ? e : Math.random() * (t - e + 1) + e
            }

            function E(e) {
                var t = Math.floor(_(0, e.length - 1));
                return [e[t], t]
            }

            function S(e, t) {
                return E([e, t])[0]
            }

            function w(e) {
                return "number" == typeof e ? {
                    x: e,
                    y: e
                } : e
            }

            function P(e) {
                return "number" == typeof e ? {
                    x: e,
                    y: e,
                    z: e
                } : e
            }

            function T(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            return new m(e.value);
                        case "static-random":
                            return new m(_(e.minValue, e.maxValue));
                        case "linear":
                            return new b(e.value, e.addValue);
                        case "linear-random":
                            return new b(_(e.minValue, e.maxValue), _(e.minAddValue, e.maxAddValue));
                        case "oscillating":
                            return new O(e.value, e.start, e.final, e.duration, e.direction, e.easingFunction);
                        case "oscillating-random":
                            return new O(_(e.minValue, e.maxValue), _(e.minStart, e.maxStart), _(e.minFinal, e.maxFinal), _(e.minDuration, e.maxDuration), S(e.minDirection, e.maxDirection), E(e.easingFunctions)[0])
                    }
                }(h(h({}, e), {
                    valueType: "number"
                }))
            }

            function R(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            var t = w(e.value);
                            return new v(new m(t.x), new m(t.y));
                        case "static-random":
                            var n = w(e.minValue),
                                r = w(e.maxValue);
                            return new v(new m(_(n.x, r.x)), new m(_(n.y, r.y)));
                        case "linear":
                            t = w(e.value);
                            var i = w(e.addValue);
                            return new v(new b(t.x, i.x), new b(t.y, i.y));
                        case "linear-random":
                            n = w(e.minValue), r = w(e.maxValue);
                            var o = w(e.minAddValue),
                                u = w(e.maxAddValue);
                            return new v(new b(_(n.x, r.x), _(o.x, u.x)), new b(_(n.y, r.y), _(o.x, u.x)));
                        case "oscillating":
                            t = w(e.value);
                            var a = w(e.start),
                                l = w(e.final),
                                c = w(e.duration),
                                s = w(e.direction);
                            return new v(new O(t.x, a.x, l.x, c.x, s.x, e.easingFunction), new O(t.y, a.y, l.y, c.x, s.y, e.easingFunction));
                        case "oscillating-random":
                            n = w(e.minValue), r = w(e.maxValue);
                            var f = w(e.minStart),
                                d = w(e.maxStart),
                                p = w(e.minFinal),
                                h = w(e.maxFinal),
                                y = w(e.minDuration),
                                g = w(e.maxDuration),
                                P = w(e.minDirection),
                                T = w(e.maxDirection);
                            return new v(new O(_(n.x, r.x), _(f.x, d.x), _(p.x, h.x), _(y.x, g.x), S(P.x, T.x), E(e.easingFunctions)[0]), new O(_(n.y, r.y), _(f.y, d.y), _(p.y, h.y), _(y.y, g.y), S(P.y, T.y), E(e.easingFunctions)[0]))
                    }
                }(h(h({}, e), {
                    valueType: "Vector2"
                }))
            }

            function A(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            var t = P(e.value);
                            return new g(new m(t.x), new m(t.y), new m(t.z));
                        case "static-random":
                            var n = P(e.minValue),
                                r = P(e.maxValue);
                            return new g(new m(_(n.x, r.x)), new m(_(n.y, r.y)), new m(_(n.z, r.z)));
                        case "linear":
                            t = P(e.value);
                            var i = P(e.addValue);
                            return new g(new b(t.x, i.x), new b(t.y, i.y), new b(t.z, i.z));
                        case "linear-random":
                            n = P(e.minValue), r = P(e.maxValue);
                            var o = P(e.minAddValue),
                                u = P(e.maxAddValue);
                            return new g(new b(_(n.x, r.x), _(o.x, u.x)), new b(_(n.y, r.y), _(o.y, u.y)), new b(_(n.z, r.z), _(o.z, u.z)));
                        case "oscillating":
                            t = P(e.value);
                            var a = P(e.start),
                                l = P(e.final),
                                c = P(e.duration),
                                s = P(e.direction);
                            return new g(new O(t.x, a.x, l.x, c.x, s.x, e.easingFunction), new O(t.y, a.y, l.y, c.z, s.y, e.easingFunction), new O(t.z, a.z, l.z, c.z, s.z, e.easingFunction));
                        case "oscillating-random":
                            n = P(e.minValue), r = P(e.maxValue);
                            var f = P(e.minStart),
                                d = P(e.maxStart),
                                p = P(e.minFinal),
                                h = P(e.maxFinal),
                                y = P(e.minDuration),
                                v = P(e.maxDuration),
                                w = P(e.minDirection),
                                T = P(e.maxDirection);
                            return new g(new O(_(n.x, r.x), _(f.x, d.x), _(p.x, h.x), _(y.x, v.x), S(w.x, T.x), E(e.easingFunctions)[0]), new O(_(n.y, r.y), _(f.y, d.y), _(p.y, h.y), _(y.y, v.y), S(w.y, T.y), E(e.easingFunctions)[0]), new O(_(n.z, r.z), _(f.z, d.z), _(p.z, h.z), _(y.z, v.z), S(w.z, T.z), E(e.easingFunctions)[0]))
                    }
                }(h(h({}, e), {
                    valueType: "Vector3"
                }))
            }

            function I(e, t, n, r, i) {
                var o = function(e, t) {
                        return h(h({
                            id: t
                        }, s), e)
                    }(t, e),
                    u = R(o.size),
                    a = function(e, t) {
                        if (null != e) {
                            var n = t.sprites.findIndex((function(t) {
                                return n = t, "string" == typeof(r = e) ? n.src === r && n.colorize : n.src === r.src && n.colorize === r.colorize;
                                var n, r
                            }));
                            if (-1 !== n) return [e, n]
                        }
                        return E(t.sprites)
                    }(r, n),
                    l = a[0],
                    f = a[1],
                    d = function(e, t, n) {
                        if (! function(e) {
                                return "string" == typeof e || e.colorize
                            }(e)) return 0;
                        var r = null != t ? n.colors.findIndex((function(e) {
                            return e === t
                        })) : -1;
                        return -1 !== r ? r : Math.floor(_(0, n.colors.length - 1))
                    }(null != r ? r : l, i, n);
                return new c({
                    id: e,
                    position: R(o.position),
                    velocity: R(o.velocity),
                    rotation: A(o.rotation),
                    dragCoefficient: R(o.dragCoefficient),
                    size: u,
                    opacity: T(o.opacity),
                    spriteX: d * n.spriteWidth + 2 * d,
                    spriteY: f * n.spriteHeight + 2 * f,
                    spriteWidth: n.spriteWidth,
                    spriteHeight: n.spriteHeight
                })
            }
            var C = r.forwardRef((function(e, t) {
                var o = e.className,
                    u = e.environment,
                    l = e.onClick,
                    c = e.onMouseDown,
                    s = e.onMouseMove,
                    f = e.onMouseUp,
                    d = e.onBeforeRender,
                    p = e.onAfterRender,
                    y = function(e, t) {
                        var n = {};
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var i = 0;
                            for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
                        }
                        return n
                    }(e, ["className", "environment", "onClick", "onMouseDown", "onMouseMove", "onMouseUp", "onBeforeRender", "onAfterRender"]),
                    v = r.useRef(null),
                    g = r.useRef(new Map),
                    m = r.useRef(null),
                    b = r.useRef(0),
                    O = r.useRef(0),
                    _ = r.useCallback((function() {
                        var e = v.current;
                        if (null != e) {
                            var t = e.getContext("2d");
                            if (null != t) {
                                t.clearRect(0, 0, e.width, e.height), null == d || d(t), g.current.forEach((function(n, r) {
                                    var i = n.confetti,
                                        o = n.spriteCanvas;
                                    i.update(u), i.draw(o, t), i.shouldDestroy(e, u) && g.current.delete(r)
                                })), null == p || p(t), g.current.size > 0 ? m.current = window.requestAnimationFrame(_) : (t.clearRect(0, 0, e.width, e.height), m.current = null);
                                var n = Date.now();
                                0 !== b.current && (O.current = 1e3 / (n - b.current)), b.current = n
                            }
                        }
                    }), [u, p, d]);
                r.useEffect((function() {
                    null != m.current && (window.cancelAnimationFrame(m.current), m.current = window.requestAnimationFrame(_))
                }), [_]);
                var E = r.useCallback((function(e, t) {
                        g.current.set(e.id, {
                            confetti: e,
                            spriteCanvas: t
                        }), null == m.current && _()
                    }), [_]),
                    S = r.useCallback((function(e, t, n, r, o) {
                        var u, a = I(null !== (u = e.id) && void 0 !== u ? u : (0, i.Z)(), e, n, r, o);
                        return E(a, t), a
                    }), [E]),
                    w = r.useCallback((function(e) {
                        g.current.delete(e)
                    }), []),
                    P = r.useCallback((function() {
                        return g.current.clear()
                    }), []),
                    T = r.useCallback((function() {
                        return v.current
                    }), []);
                r.useImperativeHandle(t, (function() {
                    return {
                        createConfetti: S,
                        addConfetti: E,
                        deleteConfetti: w,
                        clearConfetti: P,
                        getCanvas: T
                    }
                }), [S, E, w, P, T]);
                var R = r.useCallback((function(e, t) {
                        var n, r, i = t.clickHandler,
                            o = t.mouseHandler;
                        if (null != i || null != o) {
                            var l = null === (n = v.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                            if (null != l) {
                                var c = function(e, t) {
                                    if (null == t) throw new Error("element should not be null");
                                    var n = t.getBoundingClientRect();
                                    return {
                                        x: e.clientX - n.left,
                                        y: e.clientY - n.top
                                    }
                                }(e, v.current);
                                if (a(c, {
                                        x: l.left,
                                        y: l.top,
                                        width: l.width,
                                        height: l.height
                                    })) {
                                    if (null != o) return o(e);
                                    if (null != i) {
                                        var s = -1e3 / O.current * 2,
                                            f = function(e, t) {
                                                for (var n = 0, r = Array.from(e.values()); n < r.length; n++) {
                                                    var i = r[n];
                                                    if (null != i && t(i)) return i
                                                }
                                                return null
                                            }(g.current, (function(e) {
                                                var t = e.confetti,
                                                    n = t.previewPositionUpdate(u, s);
                                                return a(c, {
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
                    }), [u]),
                    A = r.useCallback((function(e) {
                        return R(e, {
                            clickHandler: l
                        })
                    }), [R, l]),
                    C = r.useCallback((function(e) {
                        return R(e, {
                            clickHandler: c
                        })
                    }), [R, c]),
                    x = r.useCallback((function(e) {
                        return R(e, {
                            mouseHandler: s
                        })
                    }), [R, s]),
                    N = r.useCallback((function(e) {
                        return R(e, {
                            mouseHandler: f
                        })
                    }), [R, f]);
                return r.useEffect((function() {
                    var e = function(e, t, n) {
                        null != n && window.addEventListener(e, t)
                    };
                    return e("click", A, l), e("mousedown", C, c), e("mousemove", x, s), e("mouseup", N, f),
                        function() {
                            window.removeEventListener("click", A), window.removeEventListener("mousedown", C), window.removeEventListener("mousemove", x), window.removeEventListener("mouseup", x)
                        }
                }), [A, C, x, N, l, c, s, f]), r.useEffect((function() {
                    var e = v.current,
                        t = new ResizeObserver((function() {
                            ! function(e) {
                                if (null != e) {
                                    var t = e.getBoundingClientRect(),
                                        r = t.width,
                                        i = t.height;
                                    e.width = r * n.g.devicePixelRatio, e.height = i * n.g.devicePixelRatio
                                }
                            }(v.current)
                        }));
                    return null != e && t.observe(e),
                        function() {
                            null != e && t.unobserve(e)
                        }
                }), []), r.createElement("canvas", h({}, y, {
                    className: o,
                    ref: v
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
            var x = r.forwardRef((function(e, t) {
                var n, o = e.className,
                    a = e.visible,
                    l = void 0 !== a && a,
                    c = e.sprites,
                    s = e.colors,
                    f = e.spriteWidth,
                    d = e.spriteHeight,
                    p = r.useRef(null),
                    h = r.useRef([]),
                    y = r.useRef(!1),
                    v = r.useRef({});
                r.useImperativeHandle(t, (function() {
                    return {
                        getCanvas: function() {
                            return p.current
                        },
                        getCreateData: function() {
                            return {
                                sprites: h.current,
                                colors: s,
                                spriteWidth: f,
                                spriteHeight: d
                            }
                        },
                        addReadyListener: function(e) {
                            var t = (0, i.Z)();
                            return v.current[t] = e, t
                        },
                        removeReadyListener: function(e) {
                            delete v.current[e]
                        },
                        isReady: y.current
                    }
                }), [s, d, f]);
                var g = r.useCallback((function() {
                        var e = p.current,
                            t = null == e ? void 0 : e.getContext("2d", {
                                willReadFrequently: !0
                            });
                        null != t && null != e && (t.clearRect(0, 0, e.width, e.height),
                            h.current.forEach((function(e, n) {
                                var r = function(r, i) {
                                    var o = f * i + 2 * i,
                                        u = d * n + 2 * n;
                                    if (t.drawImage(e.image, o, u, f, d), null != r) {
                                        for (var a = t.getImageData(o, u, f, d), l = function(e) {
                                                "#" === e[0] && (e = e.slice(1));
                                                var t = parseInt(e, 16);
                                                return {
                                                    r: t >> 16 & 255,
                                                    g: t >> 8 & 255,
                                                    b: 255 & t
                                                }
                                            }(r), c = 0; c < a.data.length; c += 4) a.data[c] = l.r, a.data[c + 1] = l.g, a.data[c + 2] = l.b;
                                        t.putImageData(a, o, u)
                                    }
                                };
                                e.colorize ? s.forEach((function(e, t) {
                                    return r(e, t)
                                })) : r(null, 0)
                            })))
                    }), [s, d, f]),
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
                            h.current = e.map((function(e) {
                                return {
                                    colorize: e.colorize,
                                    image: e.image,
                                    src: e.src
                                }
                            }))
                        }))
                    }), [c]),
                    b = r.useCallback((function(e) {
                        for (var t in v.current) v.current[t](e)
                    }), []),
                    O = r.useCallback((function() {
                        return function(e, t, n, r) {
                            return new(n || (n = Promise))((function(i, o) {
                                function u(e) {
                                    try {
                                        l(r.next(e))
                                    } catch (e) {
                                        o(e)
                                    }
                                }

                                function a(e) {
                                    try {
                                        l(r.throw(e))
                                    } catch (e) {
                                        o(e)
                                    }
                                }

                                function l(e) {
                                    var t;
                                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                        e(t)
                                    }))).then(u, a)
                                }
                                l((r = r.apply(e, t || [])).next())
                            }))
                        }(void 0, void 0, void 0, (function() {
                            return function(e, t) {
                                var n, r, i, o, u = {
                                    label: 0,
                                    sent: function() {
                                        if (1 & i[0]) throw i[1];
                                        return i[1]
                                    },
                                    trys: [],
                                    ops: []
                                };
                                return o = {
                                    next: a(0),
                                    throw: a(1),
                                    return: a(2)
                                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                                    return this
                                }), o;

                                function a(a) {
                                    return function(l) {
                                        return function(a) {
                                            if (n) throw new TypeError("Generator is already executing.");
                                            for (; o && (o = 0, a[0] && (u = 0)), u;) try {
                                                if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                                switch (r = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                                                    case 0:
                                                    case 1:
                                                        i = a;
                                                        break;
                                                    case 4:
                                                        return u.label++, {
                                                            value: a[1],
                                                            done: !1
                                                        };
                                                    case 5:
                                                        u.label++, r = a[1], a = [0];
                                                        continue;
                                                    case 7:
                                                        a = u.ops.pop(), u.trys.pop();
                                                        continue;
                                                    default:
                                                        if (!(i = u.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                                            u = 0;
                                                            continue
                                                        }
                                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                                            u.label = a[1];
                                                            break
                                                        }
                                                        if (6 === a[0] && u.label < i[1]) {
                                                            u.label = i[1], i = a;
                                                            break
                                                        }
                                                        if (i && u.label < i[2]) {
                                                            u.label = i[2], u.ops.push(a);
                                                            break
                                                        }
                                                        i[2] && u.ops.pop(), u.trys.pop();
                                                        continue
                                                }
                                                a = t.call(e, u)
                                            } catch (e) {
                                                a = [6, e], r = 0
                                            } finally {
                                                n = i = 0
                                            }
                                            if (5 & a[0]) throw a[1];
                                            return {
                                                value: a[0] ? a[1] : void 0,
                                                done: !0
                                            }
                                        }([a, l])
                                    }
                                }
                            }(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, m()];
                                    case 1:
                                        return e.sent(), g(), y.current = !0, b(!0), [2]
                                }
                            }))
                        }))
                    }), [b, m, g]);
                return r.useEffect((function() {
                    O()
                }), [O]), r.useEffect((function() {
                    return function() {
                        return b(!1)
                    }
                }), [b]), r.useEffect((function() {
                    null != p.current && (p.current.width = (f + 2) * Math.max(s.length, 1), p.current.height = (d + 2) * c.length)
                }), [s.length, d, f, c.length]), r.createElement("canvas", {
                    ref: p,
                    className: u()(o, (n = {}, n["SpriteCanvas-module_spriteCanvasHidden__ndzQV"] = !l, n))
                })
            }));

            function N(e, t) {
                var n, i = r.useState(null !== (n = null == t ? void 0 : t.isReady) && void 0 !== n && n),
                    o = i[0],
                    u = i[1];
                r.useEffect((function() {
                    var e = null == t ? void 0 : t.addReadyListener(u);
                    return function() {
                        null != e && (null == t || t.removeReadyListener(e))
                    }
                }), [t]);
                var a = r.useCallback((function(n, r) {
                        var i = void 0 === r ? {} : r,
                            o = i.sprite,
                            u = i.color,
                            a = null == t ? void 0 : t.getCreateData(),
                            l = null == t ? void 0 : t.getCanvas();
                        if (null != l && null != a && 0 !== a.sprites.length) return null == e ? void 0 : e.createConfetti(n, l, a, o, u)
                    }), [e, t]),
                    l = r.useCallback((function(e, t, n) {
                        for (var r = [], i = 0; i < t; i++) {
                            var o = a(e, n);
                            o && r.push(o)
                        }
                        return r
                    }), [a]),
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
                        createConfetti: a,
                        createMultipleConfetti: l,
                        addConfetti: c,
                        clearConfetti: f,
                        deleteConfetti: s,
                        isReady: o && null != t && null != e
                    }
                }), [c, f, e, a, l, s, o, t])
            }
        },
        667237: e => {
            "use strict";

            function t(e) {
                this._capacity = i(e);
                this._length = 0;
                this._front = 0;
                this._makeCapacity();
                if (n(e)) {
                    for (var t = e.length, r = 0; r < t; ++r) this[r] = e[r];
                    this._length = t
                }
            }
            t.prototype.toArray = function() {
                for (var e = this._length, t = new Array(e), n = this._front, r = this._capacity, i = 0; i < e; ++i) t[i] = this[n + i & r - 1];
                return t
            };
            t.prototype.push = function(e) {
                var t = arguments.length,
                    n = this._length;
                if (t > 1) {
                    var r = this._capacity;
                    if (n + t > r) {
                        for (var i = 0; i < t; ++i) {
                            this._checkCapacity(n + 1);
                            this[o = this._front + n & this._capacity - 1] = arguments[i];
                            n++;
                            this._length = n
                        }
                        return n
                    }
                    for (var o = this._front, i = 0; i < t; ++i) {
                        this[o + n & r - 1] = arguments[i];
                        o++
                    }
                    this._length = n + t;
                    return n + t
                }
                if (0 === t) return n;
                this._checkCapacity(n + 1);
                this[i = this._front + n & this._capacity - 1] = e;
                this._length = n + 1;
                return n + 1
            };
            t.prototype.pop = function() {
                var e = this._length;
                if (0 !== e) {
                    var t = this._front + e - 1 & this._capacity - 1,
                        n = this[t];
                    this[t] = void 0;
                    this._length = e - 1;
                    return n
                }
            };
            t.prototype.shift = function() {
                var e = this._length;
                if (0 !== e) {
                    var t = this._front,
                        n = this[t];
                    this[t] = void 0;
                    this._front = t + 1 & this._capacity - 1;
                    this._length = e - 1;
                    return n
                }
            };
            t.prototype.unshift = function(e) {
                var t = this._length,
                    n = arguments.length;
                if (n > 1) {
                    if (t + n > (i = this._capacity)) {
                        for (var r = n - 1; r >= 0; r--) {
                            this._checkCapacity(t + 1);
                            var i = this._capacity;
                            this[u = (this._front - 1 & i - 1 ^ i) - i] = arguments[r];
                            t++;
                            this._length = t;
                            this._front = u
                        }
                        return t
                    }
                    var o = this._front;
                    for (r = n - 1; r >= 0; r--) {
                        var u;
                        this[u = (o - 1 & i - 1 ^ i) - i] = arguments[r];
                        o = u
                    }
                    this._front = o;
                    this._length = t + n;
                    return t + n
                }
                if (0 === n) return t;
                this._checkCapacity(t + 1);
                i = this._capacity;
                this[r = (this._front - 1 & i - 1 ^ i) - i] = e;
                this._length = t + 1;
                this._front = r;
                return t + 1
            };
            t.prototype.peekBack = function() {
                var e = this._length;
                if (0 !== e) {
                    return this[this._front + e - 1 & this._capacity - 1]
                }
            };
            t.prototype.peekFront = function() {
                if (0 !== this._length) return this[this._front]
            };
            t.prototype.get = function(e) {
                var t = e;
                if (t === (0 | t)) {
                    var n = this._length;
                    t < 0 && (t += n);
                    if (!(t < 0 || t >= n)) return this[this._front + t & this._capacity - 1]
                }
            };
            t.prototype.isEmpty = function() {
                return 0 === this._length
            };
            t.prototype.clear = function() {
                this._length = 0;
                this._front = 0;
                this._makeCapacity()
            };
            t.prototype.toString = function() {
                return this.toArray().toString()
            };
            t.prototype.valueOf = t.prototype.toString;
            t.prototype.removeFront = t.prototype.shift;
            t.prototype.removeBack = t.prototype.pop;
            t.prototype.insertFront = t.prototype.unshift;
            t.prototype.insertBack = t.prototype.push;
            t.prototype.enqueue = t.prototype.push;
            t.prototype.dequeue = t.prototype.shift;
            t.prototype.toJSON = t.prototype.toArray;
            Object.defineProperty(t.prototype, "length", {
                get: function() {
                    return this._length
                },
                set: function() {
                    throw new RangeError("")
                }
            });
            t.prototype._makeCapacity = function() {
                for (var e = this._capacity, t = 0; t < e; ++t) this[t] = void 0
            };
            t.prototype._checkCapacity = function(e) {
                this._capacity < e && this._resizeTo(i(1.5 * this._capacity + 16))
            };
            t.prototype._resizeTo = function(e) {
                var t = this._front,
                    n = this._capacity,
                    i = new Array(n),
                    o = this._length;
                r(this, 0, i, 0, n);
                this._capacity = e;
                this._makeCapacity();
                this._front = 0;
                if (t + o <= n) r(i, t, this, 0, o);
                else {
                    var u = o - (t + o & n - 1);
                    r(i, t, this, 0, u);
                    r(i, 0, this, u, o - u)
                }
            };
            var n = Array.isArray;

            function r(e, t, n, r, i) {
                for (var o = 0; o < i; ++o) n[o + r] = e[o + t]
            }

            function i(e) {
                if ("number" != typeof e) {
                    if (!n(e)) return 16;
                    e = e.length
                }
                return function(e) {
                    e >>>= 0;
                    e -= 1;
                    e |= e >> 1;
                    e |= e >> 2;
                    e |= e >> 4;
                    e |= e >> 8;
                    return 1 + (e |= e >> 16)
                }(Math.min(Math.max(16, e), 1073741824))
            }
            e.exports = t
        },
        577660: (e, t, n) => {
            e.exports = n.p + "5e7d050aa74c846659708b2d59c72a05.svg"
        },
        824390: e => {
            "use strict";
            e.exports = function(e, t) {
                var n = t.length,
                    r = e.length;
                if (r > n) return !1;
                if (r === n) return e === t;
                e: for (var i = 0, o = 0; i < r; i++) {
                    for (var u = e.charCodeAt(i); o < n;)
                        if (t.charCodeAt(o++) === u) continue e;
                    return !1
                }
                return !0
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
                    o = i(e) ? Array(e.length) : [];
                r(e, (function(e, r, i) {
                    o[++n] = t(e, r, i)
                }));
                return o
            }
        },
        882689: (e, t, n) => {
            var r = n(829932),
                i = n(267206),
                o = n(269199),
                u = n(571131),
                a = n(307518),
                l = n(285022),
                c = n(406557);
            e.exports = function(e, t, n) {
                var s = -1;
                t = r(t.length ? t : [c], a(i));
                var f = o(e, (function(e, n, i) {
                    return {
                        criteria: r(t, (function(t) {
                            return t(e)
                        })),
                        index: ++s,
                        value: e
                    }
                }));
                return u(f, (function(e, t) {
                    return l(e, t, n)
                }))
            }
        },
        105976: (e, t, n) => {
            var r = n(406557),
                i = n(545357),
                o = n(430061);
            e.exports = function(e, t) {
                return o(i(e, t, r), e + "")
            }
        },
        356560: (e, t, n) => {
            var r = n(575703),
                i = n(538777),
                o = n(406557),
                u = i ? function(e, t) {
                    return i(e, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: r(t),
                        writable: !0
                    })
                } : o;
            e.exports = u
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
                        o = e == e,
                        u = r(e),
                        a = void 0 !== t,
                        l = null === t,
                        c = t == t,
                        s = r(t);
                    if (!l && !s && !u && e > t || u && a && c && !l && !s || i && a && c || !n && c || !o) return 1;
                    if (!i && !u && !s && e < t || s && n && o && !i && !u || l && n && o || !a && o || !c) return -1
                }
                return 0
            }
        },
        285022: (e, t, n) => {
            var r = n(626393);
            e.exports = function(e, t, n) {
                for (var i = -1, o = e.criteria, u = t.criteria, a = o.length, l = n.length; ++i < a;) {
                    var c = r(o[i], u[i]);
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
                    for (var o = arguments, u = -1, a = i(o.length - t, 0), l = Array(a); ++u < a;) l[u] = o[t + u];
                    u = -1;
                    for (var c = Array(t + 1); ++u < t;) c[u] = o[u];
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
                        o = 16 - (i - r);
                    r = i;
                    if (o > 0) {
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
                    o = i - 1;
                t = void 0 === t ? i : t;
                for (; ++n < t;) {
                    var u = r(n, o),
                        a = e[u];
                    e[u] = e[n];
                    e[n] = a
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
                o = n(701469);
            e.exports = function(e) {
                return (o(e) ? r : i)(e)
            }
        },
        189734: (e, t, n) => {
            var r = n(121078),
                i = n(882689),
                o = n(105976),
                u = n(816612),
                a = o((function(e, t) {
                    if (null == e) return [];
                    var n = t.length;
                    n > 1 && u(e, t[0], t[1]) ? t = [] : n > 2 && u(t[0], t[1], t[2]) && (t = [t[0]]);
                    return i(e, r(t, 1), [])
                }));
            e.exports = a
        },
        823493: (e, t, n) => {
            var r = n(23279),
                i = n(513218);
            e.exports = function(e, t, n) {
                var o = !0,
                    u = !0;
                if ("function" != typeof e) throw new TypeError("Expected a function");
                if (i(n)) {
                    o = "leading" in n ? !!n.leading : o;
                    u = "trailing" in n ? !!n.trailing : u
                }
                return r(e, t, {
                    leading: o,
                    maxWait: t,
                    trailing: u
                })
            }
        },
        252628: (e, t, n) => {
            var r = n(747415),
                i = n(3674);
            e.exports = function(e) {
                return null == e ? [] : r(e, i(e))
            }
        },
        620745: (e, t, n) => {
            "use strict";
            var r = n(973935);
            t.s = r.createRoot;
            r.hydrateRoot
        },
        971402: (e, t, n) => {
            "use strict";
            n.d(t, {
                Zy: () => f,
                vq: () => d,
                jW: () => p
            });
            var r = n(744564),
                i = n(26468),
                o = n(120415),
                u = n(73105),
                a = n(2590);

            function l(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        l(e, t, n[t])
                    }))
                }
                return e
            }

            function s(e) {
                r.Z.dispatch({
                    type: "CONTEXT_MENU_OPEN",
                    contextMenu: e
                })
            }

            function f(e) {
                (0, n(973935).flushSync)((function() {
                    r.Z.wait((function() {
                        r.Z.dispatch({
                            type: "CONTEXT_MENU_CLOSE"
                        }).finally(e)
                    }))
                }))
            }

            function d(e, t, n, r) {
                e.stopPropagation();
                if (null == e.currentTarget.contains || e.currentTarget.contains(e.target)) {
                    var l, f, d = 0,
                        p = 0;
                    if ("pageX" in e) {
                        d = e.pageX;
                        p = e.pageY
                    }
                    if (0 === d && 0 === p) {
                        var h, y = null === (h = e.target) || void 0 === h ? void 0 : h.getBoundingClientRect(),
                            v = null != y ? y : {},
                            g = v.left,
                            m = void 0 === g ? 0 : g,
                            b = v.top,
                            O = void 0 === b ? 0 : b,
                            _ = v.width,
                            E = void 0 === _ ? 0 : _,
                            S = v.height;
                        d = m + E / 2;
                        p = O + (void 0 === S ? 0 : S) / 2
                    }
                    var w = {
                        render: t,
                        renderLazy: r,
                        target: null !== (l = e.target) && void 0 !== l ? l : e.currentTarget,
                        rect: new DOMRect(d, p, 0, 0),
                        config: c({
                            context: __OVERLAY__ ? a.IlC.OVERLAY : null !== (f = (0, i.GB)()) && void 0 !== f ? f : a.IlC.APP
                        }, n)
                    };
                    if ((null == n ? void 0 : n.enableSpellCheck) && (0, o.nI)()) var P = (0, u.RD)((function() {
                        P();
                        s(w)
                    }));
                    else {
                        e.preventDefault();
                        s(w)
                    }
                }
            }

            function p(e, t, n) {
                d(e, void 0, n, t)
            }
        },
        320142: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a
            });
            var r = n(120415);

            function i(e, t, n, r, i, o, u) {
                try {
                    var a = e[o](u),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function o(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var u = e.apply(t, n);

                        function a(e) {
                            i(u, r, o, a, l, "next", e)
                        }

                        function l(e) {
                            i(u, r, o, a, l, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var u = function(e, t) {
                var n, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = u.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2];
                                            u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                o = t.call(e, u)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            };

            function a(e, t) {
                return l.apply(this, arguments)
            }

            function l() {
                return (l = o((function(e, t) {
                    var i, o, a, l;
                    return u(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                0;
                                return [4, Promise.all([n.e(40532), n.e(64572), n.e(6543), n.e(29342), n.e(84832), n.e(27499), n.e(79913), n.e(45353), n.e(92465), n.e(73727), n.e(10675), n.e(52555), n.e(61953), n.e(84441), n.e(14990), n.e(33227), n.e(24501), n.e(93420)]).then(n.bind(n, 624501))];
                            case 1:
                                i = u.sent(), o = i.default;
                                if (null != (a = o(e, {
                                        skipExtensionCheck: t,
                                        analyticsLocations: []
                                    }))) a(null);
                                else if (r.FB) window.open(e);
                                else {
                                    (l = document.createElement("a")).href = e;
                                    l.target = "_blank";
                                    l.rel = "noreferrer noopener";
                                    l.click()
                                }
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        272200: (e, t, n) => {
            "use strict";
            n.d(t, {
                Qi: () => r,
                iw: () => i,
                Kw: () => o,
                Vh: () => u,
                ub: () => a,
                bB: () => l
            });
            var r, i, o, u, a, l;
            ! function(e) {
                e[e.BUILT_IN = 0] = "BUILT_IN";
                e[e.APPLICATION = 1] = "APPLICATION"
            }(r || (r = {}));
            ! function(e) {
                e[e.BUILT_IN = 0] = "BUILT_IN";
                e[e.BUILT_IN_TEXT = 1] = "BUILT_IN_TEXT";
                e[e.BUILT_IN_INTEGRATION = 2] = "BUILT_IN_INTEGRATION";
                e[e.BOT = 3] = "BOT";
                e[e.PLACEHOLDER = 4] = "PLACEHOLDER"
            }(i || (i = {}));
            ! function(e) {
                e[e.ROLE = 1] = "ROLE";
                e[e.USER = 2] = "USER";
                e[e.CHANNEL = 3] = "CHANNEL"
            }(o || (o = {}));
            ! function(e) {
                e.DISCOVERY = "discovery";
                e.SUGGESTION = "suggestion";
                e.MENTION = "mention";
                e.PASTE = "paste";
                e.RECALL = "recall";
                e.POPULAR_COMMANDS = "popular_commands";
                e.MJ_CHAT_BAR = "mj_chat_bar";
                e.QUERY = "query"
            }(u || (u = {}));
            ! function(e) {
                e[e.BUILT_IN = 1] = "BUILT_IN";
                e[e.FRECENCY = 2] = "FRECENCY";
                e[e.APP = 3] = "APP"
            }(a || (a = {}));
            ! function(e) {
                e[e.CHAT = 0] = "CHAT";
                e[e.APPLICATION_LAUNCHER = 1] = "APPLICATION_LAUNCHER"
            }(l || (l = {}))
        },
        711013: (e, t, n) => {
            "use strict";
            n.d(t, {
                F: () => i,
                Z: () => u
            });
            var r = n(785893),
                i = (n(667294), n(779329), "cash-app-pay-container");

            function o() {
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)("div", {
                        id: i
                    })
                })
            }

            function u() {
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(o, {})
                })
            }
        },
        774930: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => o
            });
            var r = n(202351),
                i = n(409125);

            function o() {
                return (0, r.e7)([i.Z], (function() {
                    return null != i.Z.getRemoteSessionId() || null != i.Z.getAwaitingRemoteSessionInfo()
                }))
            }
        },
        165586: (e, t, n) => {
            "use strict";
            n.d(t, {
                LY: () => r,
                aW: () => f,
                ws: () => i,
                tI: () => o,
                L9: () => d,
                no: () => p,
                ND: () => h,
                WC: () => v,
                z8: () => g,
                km: () => b,
                k0: () => O,
                af: () => _
            });
            var r, i, o, u, a = n(2590),
                l = n(203600),
                c = n(473708);

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }! function(e) {
                e[e.RESOLUTION_480 = 480] = "RESOLUTION_480";
                e[e.RESOLUTION_720 = 720] = "RESOLUTION_720";
                e[e.RESOLUTION_1080 = 1080] = "RESOLUTION_1080";
                e[e.RESOLUTION_1440 = 1440] = "RESOLUTION_1440";
                e[e.RESOLUTION_SOURCE = 0] = "RESOLUTION_SOURCE"
            }(r || (r = {}));

            function f(e) {
                switch (e) {
                    case r.RESOLUTION_480:
                        return r.RESOLUTION_480;
                    case r.RESOLUTION_720:
                        return r.RESOLUTION_720;
                    case r.RESOLUTION_1080:
                        return r.RESOLUTION_1080;
                    case r.RESOLUTION_SOURCE:
                        return r.RESOLUTION_SOURCE;
                    default:
                        throw new Error("Unknown resolution: ".concat(e))
                }
            }! function(e) {
                e[e.FPS_5 = 5] = "FPS_5";
                e[e.FPS_15 = 15] = "FPS_15";
                e[e.FPS_30 = 30] = "FPS_30";
                e[e.FPS_60 = 60] = "FPS_60"
            }(i || (i = {}));
            ! function(e) {
                e[e.PRESET_VIDEO = 1] = "PRESET_VIDEO";
                e[e.PRESET_DOCUMENTS = 2] = "PRESET_DOCUMENTS";
                e[e.PRESET_CUSTOM = 3] = "PRESET_CUSTOM"
            }(o || (o = {}));

            function d(e) {
                switch (e) {
                    case i.FPS_5:
                        return i.FPS_5;
                    case i.FPS_15:
                        return i.FPS_15;
                    case i.FPS_30:
                        return i.FPS_30;
                    case i.FPS_60:
                        return i.FPS_60;
                    default:
                        throw new Error("Unknown frame rate: ".concat(e))
                }
            }
            var p = (s(u = {}, o.PRESET_DOCUMENTS, [{
                    resolution: r.RESOLUTION_SOURCE,
                    fps: i.FPS_15
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: i.FPS_5
                }]), s(u, o.PRESET_VIDEO, [{
                    resolution: r.RESOLUTION_1440,
                    fps: i.FPS_60
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: i.FPS_60
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: i.FPS_60
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: i.FPS_30
                }]), s(u, o.PRESET_CUSTOM, []), u),
                h = [{
                    resolution: r.RESOLUTION_SOURCE,
                    fps: i.FPS_60,
                    quality: l.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: i.FPS_30,
                    quality: l.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: i.FPS_15,
                    quality: l.ys.HIGH_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_SOURCE,
                    fps: i.FPS_5,
                    preset: o.PRESET_DOCUMENTS
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: i.FPS_60,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: i.FPS_30,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1440,
                    fps: i.FPS_15,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: i.FPS_60,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: i.FPS_30,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_1080,
                    fps: i.FPS_15,
                    guildPremiumTier: a.Eu4.TIER_2,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: i.FPS_60,
                    guildPremiumTier: a.Eu4.TIER_1,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: i.FPS_30
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: i.FPS_15
                }, {
                    resolution: r.RESOLUTION_720,
                    fps: i.FPS_5
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: i.FPS_60,
                    guildPremiumTier: a.Eu4.TIER_1,
                    quality: l.ys.MID_STREAMING_QUALITY
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: i.FPS_30
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: i.FPS_15
                }, {
                    resolution: r.RESOLUTION_480,
                    fps: i.FPS_5
                }];

            function y(e, t) {
                return {
                    value: e,
                    get label() {
                        return null != t ? t() : e
                    }
                }
            }
            var v = [y(r.RESOLUTION_720), y(r.RESOLUTION_1080), y(r.RESOLUTION_1440), y(r.RESOLUTION_SOURCE, (function() {
                    return c.Z.Messages.SCREENSHARE_SOURCE
                }))],
                g = [y(r.RESOLUTION_720), y(r.RESOLUTION_1080), y(r.RESOLUTION_1440)],
                m = function(e) {
                    return "".concat(e, "p")
                },
                b = [y(r.RESOLUTION_480, (function() {
                    return m(r.RESOLUTION_480)
                })), y(r.RESOLUTION_720, (function() {
                    return m(r.RESOLUTION_720)
                })), y(r.RESOLUTION_1080, (function() {
                    return m(r.RESOLUTION_1080)
                })), y(r.RESOLUTION_1440, (function() {
                    return m(r.RESOLUTION_1440)
                })), y(r.RESOLUTION_SOURCE, (function() {
                    return c.Z.Messages.SCREENSHARE_SOURCE
                }))],
                O = [y(i.FPS_15), y(i.FPS_30), y(i.FPS_60)],
                _ = [y(i.FPS_15, (function() {
                    return c.Z.Messages.STREAM_FPS_OPTION.format({
                        value: i.FPS_15
                    })
                })), y(i.FPS_30, (function() {
                    return c.Z.Messages.STREAM_FPS_OPTION.format({
                        value: i.FPS_30
                    })
                })), y(i.FPS_60, (function() {
                    return c.Z.Messages.STREAM_FPS_OPTION.format({
                        value: i.FPS_60
                    })
                }))]
        },
        773411: (e, t, n) => {
            "use strict";
            n.d(t, {
                N2: () => f,
                YM: () => d,
                Dx: () => p,
                jD: () => h,
                bO: () => y,
                Xp: () => v,
                fV: () => g
            });
            var r = n(202351),
                i = n(747820),
                o = n(260561),
                u = n(621696),
                a = n(5544),
                l = n(567403),
                c = n(2590);

            function s(e, t, n) {
                return t.getChannels(e)[a.sH].filter((function(t) {
                    var r = t.channel;
                    return !n.isChannelGated(e, r.id)
                })).length > 5
            }

            function f(e) {
                var t = (0, r.e7)([a.ZP, i.Z], (function() {
                    return null != e && s(e.id, a.ZP, i.Z)
                }));
                return !__OVERLAY__ && (!!t && (null != e && e.hasFeature(c.oNc.GUILD_HOME_DEPRECATION_OVERRIDE)))
            }

            function d(e) {
                if (__OVERLAY__) return !1;
                if (e === c.ME || e === c.I_8) return !1;
                if ((0, u.cn)()) return !1;
                var t = l.Z.getGuild(e);
                return null != t && (!!s(e, a.ZP, i.Z) && t.hasFeature(c.oNc.GUILD_HOME_DEPRECATION_OVERRIDE))
            }
            var p = (0, o.B)({
                    kind: "user",
                    id: "2022-01_home_feed_toggle",
                    label: "Show Guild Feed Sorting Selector",
                    defaultConfig: {
                        showSelector: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Yes Selector",
                        config: {
                            showSelector: !0
                        }
                    }]
                }),
                h = (0, o.B)({
                    kind: "user",
                    id: "2022-06_home_refresh_button",
                    label: "Show refresh button",
                    defaultConfig: {
                        showRefreshButton: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Yes button",
                        config: {
                            showRefreshButton: !0
                        }
                    }]
                }),
                y = (0, o.B)({
                    kind: "user",
                    id: "2022-08_home_badge",
                    label: "Show badge on home channel",
                    defaultConfig: {
                        showBadge: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "show badge",
                        config: {
                            showBadge: !0
                        }
                    }]
                }),
                v = ((0, o.B)({
                    kind: "user",
                    id: "2022-08_home_drawer_autoclose",
                    label: "Auto close home drawer",
                    defaultConfig: {
                        autoCloseDrawer: !1,
                        animation: !1,
                        delay: null
                    },
                    treatments: [{
                        id: 1,
                        label: "normal animation",
                        config: {
                            autoCloseDrawer: !0,
                            animation: !0,
                            delay: null
                        }
                    }, {
                        id: 2,
                        label: "no animate",
                        config: {
                            autoCloseDrawer: !0,
                            animation: !1,
                            delay: null
                        }
                    }, {
                        id: 3,
                        label: "150 delayed animation",
                        config: {
                            autoCloseDrawer: !0,
                            animation: !0,
                            delay: 150
                        }
                    }, {
                        id: 4,
                        label: "250 delayed animation",
                        config: {
                            autoCloseDrawer: !0,
                            animation: !0,
                            delay: 250
                        }
                    }, {
                        id: 5,
                        label: "500 delayed animation",
                        config: {
                            autoCloseDrawer: !0,
                            animation: !0,
                            delay: 500
                        }
                    }]
                }), (0, o.B)({
                    kind: "user",
                    id: "2022-09_welcome_header",
                    label: "Show welcome header for home",
                    defaultConfig: {
                        showWelcomeHeader: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "show welcome header",
                        config: {
                            showWelcomeHeader: !0
                        }
                    }]
                }), (0, o.B)({
                    kind: "user",
                    id: "2022-12_home_feedback_ux",
                    label: "Show post feedback for home",
                    defaultConfig: {
                        showFeedback: !1
                    },
                    treatments: [{
                        id: 100,
                        label: "show feedback",
                        config: {
                            showFeedback: !0
                        }
                    }]
                })),
                g = (0, o.B)({
                    kind: "guild",
                    id: "2023-03_home_deprecation",
                    label: "Home Deprecation",
                    defaultConfig: {
                        showDeprecationNotice: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Show notice",
                        config: {
                            showDeprecationNotice: !0
                        }
                    }]
                })
        },
        414306: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c,
                $: () => s
            });
            var r = n(202351),
                i = n(747820),
                o = n(61209),
                u = n(682776),
                a = n(2590),
                l = {
                    needSubscriptionToAccess: !1,
                    isSubscriptionGated: !1
                };

            function c(e) {
                return (0, r.cj)([o.Z, i.Z, u.Z], (function() {
                    return s(e, o.Z, i.Z, u.Z)
                }), [e])
            }

            function s(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.Z,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.Z,
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : u.Z,
                    c = t.getChannel(e);
                if (null == c ? void 0 : c.isRoleSubscriptionTemplatePreviewChannel()) return {
                    isSubscriptionGated: !0,
                    needSubscriptionToAccess: !0
                };
                if (null == c || !n.isChannelGated(c.guild_id, c.id)) return l;
                var s = c.isGuildVocal() ? !r.can(a.Plq.CONNECT, c) : !r.can(a.Plq.VIEW_CHANNEL, c);
                return {
                    isSubscriptionGated: !0,
                    needSubscriptionToAccess: s
                }
            }
        },
        115617: (e, t, n) => {
            "use strict";
            n.d(t, {
                Kw: () => u,
                hv: () => a,
                Po: () => l
            });
            var r = n(744564),
                i = n(652591),
                o = n(2590);

            function u(e) {
                i.default.track(o.rMx.HOTSPOT_HIDDEN, {
                    hotspot_location: e
                });
                r.Z.wait((function() {
                    r.Z.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: e
                    })
                }))
            }

            function a(e, t) {
                r.Z.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: e,
                    enabled: t
                })
            }

            function l(e) {
                r.Z.dispatch({
                    type: "HOTSPOT_OVERRIDE_CLEAR",
                    location: e
                })
            }
        },
        550254: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => v
            });
            var r = n(202351),
                i = n(744564),
                o = n(113469),
                u = n(199790);

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function l(e) {
                l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return l(e)
            }

            function c(e, t) {
                return !t || "object" !== f(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function s(e, t) {
                s = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return s(e, t)
            }
            var f = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function d(e) {
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
                    var n, r = l(e);
                    if (t) {
                        var i = l(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return c(this, n)
                }
            }
            var p = new Set,
                h = {};
            var y = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && s(e, t)
                }(n, e);
                var t = d(n);

                function n() {
                    a(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    if (null != e) {
                        Array.isArray(e.hiddenHotspots) && (p = new Set(e.hiddenHotspots));
                        null != e.hotspotOverrides && (h = e.hotspotOverrides)
                    }
                };
                r.hasHotspot = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !t && h[e];
                    return !u.a && (!o.s.isDisallowPopupsSet() && (n || !p.has(e)))
                };
                r.hasHiddenHotspot = function(e) {
                    return p.has(e)
                };
                r.getHotspotOverride = function(e) {
                    return h[e]
                };
                r.getState = function() {
                    return {
                        hiddenHotspots: p,
                        hotspotOverrides: h
                    }
                };
                return n
            }(r.ZP.PersistedStore);
            y.displayName = "HotspotStore";
            y.persistKey = "hotspots";
            y.migrations = [function(e) {
                return {
                    hiddenHotspots: null != e ? e : [],
                    hotspotOverrides: {}
                }
            }];
            const v = new y(i.Z, {
                OVERLAY_INITIALIZE: function(e) {
                    var t = e.hiddenHotspots;
                    p = new Set(t)
                },
                HOTSPOT_HIDE: function(e) {
                    var t = e.location;
                    if (p.has(t)) return !1;
                    p.add(t)
                },
                HOTSPOT_OVERRIDE_SET: function(e) {
                    var t = e.location,
                        n = e.enabled;
                    h[t] = n
                },
                HOTSPOT_OVERRIDE_CLEAR: function(e) {
                    var t = e.location;
                    if (null == h[t]) return !1;
                    delete h[t]
                }
            })
        },
        422513: (e, t, n) => {
            "use strict";
            n.d(t, {
                v6: () => r.v,
                Po: () => i.Po,
                Kw: () => i.Kw,
                hv: () => i.hv,
                qc: () => o.Z
            });
            var r = n(630670),
                i = n(115617),
                o = n(550254)
        },
        873934: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => P
            });
            var r = n(202351),
                i = n(744564),
                o = n(73904),
                u = n(61209),
                a = n(457896);

            function l(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function c(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function f(e) {
                f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return f(e)
            }

            function d(e, t) {
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

            function p(e, t) {
                return !t || "object" !== v(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function h(e, t) {
                h = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return h(e, t)
            }

            function y(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
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
            var v = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function g(e) {
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
                    var n, r = f(e);
                    if (t) {
                        var i = f(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return p(this, n)
                }
            }
            var m = {},
                b = {},
                O = {},
                _ = void 0,
                E = void 0;

            function S(e) {
                delete m[e];
                var t = O[e];
                null != t && delete b[t];
                delete O[e]
            }
            var w = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && h(e, t)
                }(n, e);
                var t = g(n);

                function n() {
                    c(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.getInteraction = function(e) {
                    var t = b[e.id];
                    return null != t ? m[t] : null
                };
                r.getMessageInteractionStates = function() {
                    var e = {},
                        t = !0,
                        n = !1,
                        r = void 0;
                    try {
                        for (var i, o = Object.entries(m)[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                            var u = y(i.value, 2),
                                a = u[0],
                                l = u[1],
                                c = O[a];
                            null != c && (e[c] = l.state)
                        }
                    } catch (e) {
                        n = !0;
                        r = e
                    } finally {
                        try {
                            t || null == o.return || o.return()
                        } finally {
                            if (n) throw r
                        }
                    }
                    return e
                };
                r.canQueueInteraction = function(e, t) {
                    var n = b[e];
                    return !(null != n && null != m[n] && m[n].state !== a.F.FAILED || null != m[t] && m[t].state !== a.F.FAILED)
                };
                r.getIFrameModalApplicationId = function() {
                    return E
                };
                r.getIFrameModalKey = function() {
                    return _
                };
                return n
            }(r.ZP.Store);
            w.displayName = "InteractionStore";
            const P = new w(i.Z, {
                LOGOUT: function() {
                    m = {};
                    b = {};
                    O = {}
                },
                INTERACTION_QUEUE: function(e) {
                    var t = e.nonce,
                        n = e.messageId,
                        r = e.data,
                        i = e.onCreate,
                        o = e.onCancel,
                        u = e.onSuccess,
                        l = e.onFailure;
                    if (null != n) {
                        b[n] = t;
                        O[t] = n
                    }
                    m[t] = {
                        state: a.F.QUEUED,
                        data: r,
                        onCreate: i,
                        onCancel: o,
                        onSuccess: u,
                        onFailure: l
                    }
                },
                INTERACTION_CREATE: function(e) {
                    var t, n = e.nonce,
                        r = e.interactionId;
                    if (null == n) return !1;
                    var i = m[n];
                    if (null == i || i.state !== a.F.QUEUED) return !1;
                    i.state = a.F.CREATED;
                    null === (t = i.onCreate) || void 0 === t || t.call(i, r)
                },
                INTERACTION_SUCCESS: function(e) {
                    var t, n = e.nonce;
                    if (null == n) return !1;
                    var r = m[n];
                    if (null == r) return !1;
                    null === (t = r.onSuccess) || void 0 === t || t.call(r);
                    S(n)
                },
                INTERACTION_FAILURE: function(e) {
                    var t, n = e.nonce,
                        r = e.errorCode,
                        i = e.errorMessage;
                    if (null == n) return !1;
                    var u = m[n];
                    if (null == u) return !1;
                    null === (t = u.onFailure) || void 0 === t || t.call(u, r, i);
                    u.data.interactionType === o.B8.APPLICATION_COMMAND ? S(n) : m[n] = d(function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))));
                            r.forEach((function(t) {
                                s(e, t, n[t])
                            }))
                        }
                        return e
                    }({}, u), {
                        state: a.F.FAILED,
                        errorCode: r,
                        errorMessage: i
                    })
                },
                MESSAGE_CREATE: function(e) {
                    var t = e.message;
                    if (null == t.nonce) return !1;
                    var n, r = m[t.nonce];
                    if (null == r) return !1;
                    null === (n = r.onSuccess) || void 0 === n || n.call(r);
                    S(t.nonce)
                },
                CHANNEL_SELECT: function(e) {
                    var t = e.channelId;
                    if (null == u.Z.getChannel(t)) return !1;
                    var n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var o, l = Object.entries(m)[Symbol.iterator](); !(n = (o = l.next()).done); n = !0) {
                            var c = y(o.value, 2),
                                s = c[0];
                            c[1].state === a.F.FAILED && S(s)
                        }
                    } catch (e) {
                        r = !0;
                        i = e
                    } finally {
                        try {
                            n || null == l.return || l.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                },
                INTERACTION_IFRAME_MODAL_CREATE: function(e) {
                    var t = e.application;
                    E = t.id
                },
                INTERACTION_IFRAME_MODAL_CLOSE: function() {
                    _ = void 0;
                    E = void 0
                },
                INTERACTION_IFRAME_MODAL_KEY_CREATE: function(e) {
                    var t = e.modalKey;
                    _ = t
                }
            })
        },
        457896: (e, t, n) => {
            "use strict";
            n.d(t, {
                F: () => r
            });
            var r;
            ! function(e) {
                e[e.QUEUED = 0] = "QUEUED";
                e[e.CREATED = 1] = "CREATED";
                e[e.FAILED = 2] = "FAILED"
            }(r || (r = {}))
        },
        102007: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p
            });
            var r = n(785893),
                i = (n(667294), n(294184)),
                o = n.n(i),
                u = n(304548),
                a = n(406493),
                l = n(473708),
                c = n(148849),
                s = n.n(c);

            function f(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function d(e, t) {
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

            function p(e) {
                var t = e.text,
                    n = void 0 === t ? l.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP : t,
                    i = e.className;
                return (0, r.jsx)(u.Tooltip, {
                    text: n,
                    children: function(e) {
                        return (0, r.jsx)(u.Clickable, d(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                }))));
                                r.forEach((function(t) {
                                    f(e, t, n[t])
                                }))
                            }
                            return e
                        }({}, e), {
                            children: (0, r.jsx)(a.Z, {
                                className: o()(s().nitroWheel, i)
                            })
                        }))
                    }
                })
            }
        },
        598679: (e, t, n) => {
            "use strict";
            n.d(t, {
                Y: () => r,
                Z: () => p
            });
            var r, i, o = n(785893),
                u = n(667294),
                a = n(294184),
                l = n.n(a),
                c = n(273465),
                s = n.n(c);

            function f(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }! function(e) {
                e.PREMIUM = "premium";
                e.LIMITED = "limited"
            }(r || (r = {}));
            var d = (f(i = {}, r.PREMIUM, {
                border: s().premiumFeatureBorder,
                background: s().premiumBackground
            }), f(i, r.LIMITED, {
                border: s().limitedFeatureBorder,
                background: s().limitedBackground
            }), i);
            const p = u.forwardRef((function(e, t) {
                var n = e.children,
                    i = e.type,
                    u = void 0 === i ? r.PREMIUM : i,
                    a = e.isShown,
                    c = e.hasBackground,
                    f = void 0 !== c && c,
                    p = e.className,
                    h = e.backgroundClassName;
                if (!a) return (0, o.jsx)(o.Fragment, {
                    children: n
                });
                var y = d[u],
                    v = y.border,
                    g = y.background;
                return (0, o.jsx)("div", {
                    ref: t,
                    className: l()(v, p),
                    children: (0, o.jsx)("div", {
                        className: l()(f ? g : s().background, h),
                        children: n
                    })
                })
            }))
        },
        18882: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => le
            });
            var r = n(496486),
                i = n.n(r),
                o = n(842227),
                u = n(202351),
                a = n(744564),
                l = n(656793),
                c = n(382060),
                s = n(61209),
                f = n(567403),
                d = n(179913),
                p = n(715107),
                h = n(536945),
                y = n(487685),
                v = n(102921);

            function g(e) {
                if (null == e.threadMetadata) return 0;
                var t = 60 * e.threadMetadata.autoArchiveDuration * 1e3;
                return function(e) {
                    if (null == e.threadMetadata) return 0;
                    var t, n = null !== (t = d.ZP.lastMessageId(e.id)) && void 0 !== t ? t : e.id,
                        r = v.Z.extractTimestamp(n),
                        i = null != e.threadMetadata.archiveTimestamp ? new Date(e.threadMetadata.archiveTimestamp).getTime() : 0;
                    return Math.max(r, i)
                }(e) + t
            }
            var m = n(897196);

            function b(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function O(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function _(e) {
                _ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return _(e)
            }

            function E(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        O(e, t, n[t])
                    }))
                }
                return e
            }

            function S(e, t) {
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

            function w(e, t) {
                return !t || "object" !== T(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function P(e, t) {
                P = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return P(e, t)
            }
            var T = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function R(e) {
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
                    var n, r = _(e);
                    if (t) {
                        var i = _(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return w(this, n)
                }
            }
            var A = {},
                I = {},
                C = {},
                x = {},
                N = {},
                j = {},
                L = null,
                U = {};

            function k() {
                A = {};
                N = {};
                I = {};
                C = {};
                x = {};
                L = p.Z.getChannelId();
                for (var e in U) clearTimeout(U[e]);
                U = {};
                h.Z.forEachGuild((function(e) {
                    M(e)
                }));
                F()
            }

            function D(e) {
                delete A[e];
                delete N[e];
                delete I[e];
                delete C[e];
                delete x[e];
                M(e);
                for (var t in C[e]) H(e, t)
            }

            function M(e) {
                var t = h.Z.getThreadsForGuild(e);
                for (var n in t)
                    for (var r in t[n]) {
                        J(r);
                        var i = s.Z.getChannel(r);
                        if (null != i) {
                            var o = y.Z.joinTimestamp(r);
                            if (null != o) {
                                var u = {
                                        channel: i,
                                        joinTimestamp: o.getTime()
                                    },
                                    a = K(i),
                                    l = a.isUnread,
                                    c = a.isRelevant,
                                    f = a.isTimedRelevant;
                                X(A, i, u, !1);
                                X(N, i, c ? u : null, !1);
                                X(I, i, l ? u : null, !1);
                                f && Q(i, !0)
                            } else {
                                X(C, i, i, !1);
                                var p = d.ZP.isForumPostUnread(i.id);
                                X(x, i, p ? i : null, !1)
                            }
                        }
                    }
            }

            function F() {
                j = {};
                for (var e in C)
                    for (var t in C[e]) H(e, t)
            }

            function Z(e) {
                var t = s.Z.getBasicChannel(e);
                null != t && c.uC.has(t.type) && H(t.guild_id, t.id)
            }

            function H(e, t) {
                var n = s.Z.getChannel(t);
                if (null != n && n.isForumLikeChannel()) {
                    null == j[e] && (j[e] = {});
                    j[e][t] = 0;
                    if (null != C[e] && null != C[e][t]) {
                        var r = f.Z.getGuild(e);
                        if (null != r) {
                            var i = d.ZP.getTrackedAckMessageId(t);
                            if (null == i) {
                                var u = Date.now();
                                null != r.joinedAt && (r.joinedAt instanceof Date ? u = r.joinedAt.getTime() : "string" == typeof r.joinedAt && (u = new Date(r.joinedAt).getTime()));
                                i = o.default.fromTimestamp(u)
                            }
                            for (var a in C[e][t]) t === L ? d.ZP.isNewForumThread(a, t, r) && j[e][t]++ : o.default.compare(a, i) > 0 && !d.ZP.hasOpenedThread(a) && j[e][t]++
                        }
                    }
                }
            }

            function B(e, t, n) {
                if (null == t) return !1;
                var r = s.Z.getChannel(n),
                    i = y.Z.joinTimestamp(n);
                if (null != r && h.Z.isActive(e, t, n)) {
                    if (null != i) {
                        var o = {
                                channel: r,
                                joinTimestamp: i.getTime()
                            },
                            u = K(r),
                            a = u.isUnread,
                            l = u.isRelevant,
                            c = u.isTimedRelevant;
                        X(A, r, o, !0);
                        X(N, r, l ? o : null, !0);
                        X(I, r, a ? o : null, !0);
                        X(C, r, null, !0);
                        X(x, r, null, !0);
                        Q(r, c)
                    } else {
                        var f = d.ZP.isForumPostUnread(r.id);
                        X(A, r, null, !0);
                        X(I, r, null, !0);
                        X(N, r, null, !0);
                        X(C, r, r, !0);
                        X(x, r, f ? r : null, !0);
                        J(r.id)
                    }
                    H(e, t)
                } else {
                    $(A, e, t, n);
                    $(N, e, t, n);
                    $(I, e, t, n);
                    $(C, e, t, n);
                    $(x, e, t, n);
                    J(n);
                    H(e, t)
                }
            }

            function G(e) {
                return B(e.channel.guild_id, e.channel.parent_id, e.channel.id)
            }

            function z(e, t) {
                if (null == t) return !1;
                var n = A[e],
                    r = null == n ? null : n[t];
                if (null != r)
                    for (var i in r)
                        if (r[i].channel.isNSFW()) return !0;
                var o = C[e],
                    u = null == o ? null : o[t];
                if (null != u)
                    for (var a in u)
                        if (u[a].isNSFW()) return !0;
                return !1
            }

            function V(e) {
                var t = s.Z.getChannel(e.id);
                return !(null == t || !h.Z.isActive(e.guildId, t.parent_id, e.id)) && B(t.guild_id, t.parent_id, t.id)
            }

            function W(e) {
                var t = s.Z.getChannel(e.channelId);
                if (null == t) q();
                else {
                    var n = t.guild_id,
                        r = t.parent_id;
                    if (!c.Ec.has(t.type)) {
                        var i;
                        if (Number(null === (i = j[n]) || void 0 === i ? void 0 : i[t.id]) > 0) {
                            H(n, t.id);
                            return !0
                        }
                        return !1
                    }
                    if (null == r) return !1;
                    if (ee(A, t)) {
                        var o = K(t),
                            u = o.isUnread,
                            a = o.isRelevant;
                        Q(t, o.isTimedRelevant);
                        var l = ee(I, t),
                            f = ee(N, t);
                        if (u === l && a === f) return !1;
                        var p = A[n][r][t.id],
                            h = a ? p : null;
                        X(I, t, u ? p : null, !0);
                        X(N, t, h, !0);
                        H(n, r)
                    } else {
                        var y = ee(x, t),
                            v = d.ZP.isForumPostUnread(t.id);
                        if (v === y) return !1;
                        X(x, t, v ? t : null, !0)
                    }
                }
            }

            function q() {
                I = {};
                N = {};
                for (var e in A)
                    for (var t in A[e])
                        for (var n in A[e][t]) {
                            var r = A[e][t][n],
                                i = K(r.channel),
                                o = i.isUnread,
                                u = i.isRelevant,
                                a = i.isTimedRelevant;
                            o && X(I, r.channel, r, !1);
                            u && X(N, r.channel, r, !1);
                            Q(r.channel, a)
                        }
                x = {};
                for (var l in C)
                    for (var c in C[l])
                        for (var s in C[l][c]) {
                            var f = C[l][c][s];
                            d.ZP.isForumPostUnread(s) && X(x, f, f, !1)
                        }
                F()
            }

            function Y() {
                var e = L;
                if ((L = p.Z.getChannelId()) === e) return !1;
                Z(e);
                Z(L)
            }

            function K(e) {
                var t = d.ZP.getMentionCount(e.id) > 0,
                    n = d.ZP.hasRelevantUnread(e) && (!y.Z.isMuted(e.id) || t) || (0, l.c)() && t,
                    r = e.hasFlag(m.zZ.PINNED),
                    i = e.isActiveThread(),
                    o = i && g(e) > Date.now();
                return {
                    isUnread: (i || r) && n,
                    isRelevant: o || r || n,
                    isTimedRelevant: o
                }
            }

            function Q(e, t) {
                J(e.id);
                t && function(e) {
                    U[e.id] = setTimeout((function() {
                        var t = s.Z.getChannel(e.id);
                        null != t && a.Z.dispatch({
                            type: "THREAD_UPDATE",
                            channel: t
                        })
                    }), g(e) - Date.now() + 1)
                }(e)
            }

            function J(e) {
                if (e in U) {
                    clearTimeout(U[e]);
                    delete U[e]
                }
            }

            function X(e, t, n, r) {
                var o = t.guild_id,
                    u = t.parent_id,
                    a = t.id;
                if (null != o && null != u && null != a) {
                    o in e || (e[o] = {});
                    u in e[o] || (e[o][u] = {});
                    r && (e[o] = S(E({}, e[o]), O({}, u, E({}, e[o][u]))));
                    if (null === n) {
                        delete e[o][u][a];
                        i().isEmpty(e[o][u]) && delete e[o][u]
                    } else e[o][u][a] = n
                }
            }

            function $(e, t, n, r) {
                if (null != t && null != n && null != r && te(e, t, n, r)) {
                    e[t] = S(E({}, e[t]), O({}, n, E({}, e[t][n])));
                    delete e[t][n][r];
                    i().isEmpty(e[t][n]) && delete e[t][n]
                }
            }

            function ee(e, t) {
                return te(e, t.guild_id, t.parent_id, t.id)
            }

            function te(e, t, n, r) {
                return t in e && n in e[t] && r in e[t][n]
            }
            var ne = {},
                re = {},
                ie = {},
                oe = {},
                ue = {},
                ae = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && P(e, t)
                    }(n, e);
                    var t = R(n);

                    function n() {
                        b(this, n);
                        return t.apply(this, arguments)
                    }
                    var r = n.prototype;
                    r.initialize = function() {
                        this.waitFor(h.Z, s.Z, y.Z, d.ZP);
                        this.syncWith([p.Z], Y)
                    };
                    r.hasActiveJoinedUnreadThreads = function(e, t) {
                        return e in I && t in I[e]
                    };
                    r.getActiveUnjoinedThreadsForParent = function(e, t) {
                        var n;
                        return e in C && null !== (n = C[e][t]) && void 0 !== n ? n : oe
                    };
                    r.getActiveJoinedThreadsForParent = function(e, t) {
                        var n;
                        return e in A && null !== (n = A[e][t]) && void 0 !== n ? n : ie
                    };
                    r.getActiveJoinedThreadsForGuild = function(e) {
                        var t;
                        return null !== (t = A[e]) && void 0 !== t ? t : ne
                    };
                    r.getActiveJoinedUnreadThreadsForGuild = function(e) {
                        var t;
                        return null !== (t = I[e]) && void 0 !== t ? t : ne
                    };
                    r.getActiveJoinedUnreadThreadsForParent = function(e, t) {
                        var n;
                        return null !== (n = this.getActiveJoinedUnreadThreadsForGuild(e)[t]) && void 0 !== n ? n : ie
                    };
                    r.getActiveJoinedRelevantThreadsForGuild = function(e) {
                        var t;
                        return null !== (t = N[e]) && void 0 !== t ? t : ne
                    };
                    r.getActiveJoinedRelevantThreadsForParent = function(e, t) {
                        var n;
                        return null !== (n = this.getActiveJoinedRelevantThreadsForGuild(e)[t]) && void 0 !== n ? n : ie
                    };
                    r.getActiveUnjoinedThreadsForGuild = function(e) {
                        var t;
                        return null !== (t = C[e]) && void 0 !== t ? t : re
                    };
                    r.getActiveUnjoinedUnreadThreadsForGuild = function(e) {
                        var t;
                        return null !== (t = x[e]) && void 0 !== t ? t : ne
                    };
                    r.getActiveUnjoinedUnreadThreadsForParent = function(e, t) {
                        var n;
                        return null !== (n = this.getActiveUnjoinedUnreadThreadsForGuild(e)[t]) && void 0 !== n ? n : ie
                    };
                    r.getNewThreadCountsForGuild = function(e) {
                        var t;
                        return null !== (t = j[e]) && void 0 !== t ? t : ue
                    };
                    r.computeAllActiveJoinedThreads = function(e) {
                        var t = [];
                        for (var n in A)
                            if (n === e || null == e)
                                for (var r in A[n])
                                    for (var i in A[n][r]) t.push(A[n][r][i].channel);
                        return t
                    };
                    r.getNewThreadCount = function(e, t) {
                        var n, r;
                        return null !== (r = null === (n = j[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== r ? r : 0
                    };
                    r.getActiveThreadCount = function(e, t) {
                        var n, r, o, u;
                        return i().size(null !== (o = null === (n = A[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== o ? o : {}) + i().size(null !== (u = null === (r = C[e]) || void 0 === r ? void 0 : r[t]) && void 0 !== u ? u : {})
                    };
                    return n
                }(u.ZP.Store);
            ae.displayName = "ActiveJoinedThreadsStore";
            const le = new ae(a.Z, {
                CONNECTION_OPEN: k,
                OVERLAY_INITIALIZE: k,
                THREAD_LIST_SYNC: function(e) {
                    return D(e.guildId)
                },
                LOAD_THREADS_SUCCESS: k,
                LOAD_ARCHIVED_THREADS_SUCCESS: k,
                SEARCH_FINISH: k,
                GUILD_CREATE: function(e) {
                    return D(e.guild.id)
                },
                GUILD_DELETE: k,
                CURRENT_USER_UPDATE: k,
                THREAD_CREATE: G,
                THREAD_UPDATE: G,
                THREAD_DELETE: G,
                CHANNEL_UPDATES: function(e) {
                    var t = e.channels,
                        n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var o, u = t[Symbol.iterator](); !(n = (o = u.next()).done); n = !0) {
                            var a = o.value;
                            if (a.isNSFW() !== z(a.guild_id, a.parent_id)) {
                                k();
                                return
                            }
                        }
                    } catch (e) {
                        r = !0;
                        i = e
                    } finally {
                        try {
                            n || null == u.return || u.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    return !1
                },
                CHANNEL_DELETE: function(e) {
                    var t = e.channel,
                        n = !1;
                    if (null != t.guild_id && null != t.parent_id) {
                        if (t.guild_id in A && t.parent_id in A[t.guild_id]) {
                            delete A[t.guild_id][t.parent_id];
                            n = !0
                        }
                        if (t.guild_id in I && t.parent_id in I[t.guild_id]) {
                            delete I[t.guild_id][t.parent_id];
                            n = !0
                        }
                        if (t.guild_id in N && t.parent_id in N[t.guild_id]) {
                            Object.keys(N[t.guild_id][t.parent_id]).forEach(J);
                            delete N[t.guild_id][t.parent_id];
                            n = !0
                        }
                        if (t.guild_id in C && t.parent_id in C[t.guild_id]) {
                            delete C[t.guild_id][t.parent_id];
                            n = !0
                        }
                        if (t.guild_id in x && t.parent_id in x[t.guild_id]) {
                            delete x[t.guild_id][t.parent_id];
                            n = !0
                        }
                        n && H(t.guild_id, t.parent_id)
                    }
                    return n
                },
                THREAD_MEMBER_UPDATE: V,
                THREAD_MEMBERS_UPDATE: V,
                LOAD_MESSAGES_SUCCESS: W,
                MESSAGE_CREATE: W,
                MESSAGE_DELETE: W,
                MESSAGE_DELETE_BULK: W,
                MESSAGE_ACK: W,
                CHANNEL_ACK: W,
                CHANNEL_LOCAL_ACK: W,
                CHANNEL_SELECT: function(e) {
                    W(e);
                    Y()
                },
                PASSIVE_UPDATE_V1: function(e) {
                    null != e.channels && q()
                },
                WINDOW_FOCUS: q,
                UPDATE_CHANNEL_DIMENSIONS: q,
                DRAWER_OPEN: q,
                DRAWER_CLOSE: q,
                BULK_ACK: q
            })
        },
        225386: (e, t, n) => {
            "use strict";
            n.d(t, {
                tM: () => v,
                NE: () => g,
                ki: () => m,
                Xu: () => b,
                cD: () => O,
                Ek: () => E,
                JQ: () => S,
                C7: () => w,
                tc: () => R,
                kn: () => A,
                $R: () => I,
                RG: () => C,
                xl: () => x,
                Xb: () => j,
                Y: () => U,
                Gu: () => k
            });
            var r = n(496486),
                i = n.n(r),
                o = n(940060),
                u = n(202351),
                a = n(249139),
                l = n(774930),
                c = n(791707),
                s = n(382060),
                f = n(664625),
                d = n(61209),
                p = n(682776),
                h = n(18882),
                y = n(2590),
                v = (0, a.Z)({
                    id: "2022-07_voice_in_threads",
                    label: "Voice in Threads",
                    kind: "guild",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "On",
                        config: {
                            enabled: !0
                        }
                    }]
                });

            function g(e, t) {
                return _((0, u.e7)([p.Z], (function() {
                    var t = e.isForumLikeChannel() ? y.Plq.SEND_MESSAGES : o.Z.combine(y.Plq.CREATE_PUBLIC_THREADS, y.Plq.READ_MESSAGE_HISTORY);
                    return p.Z.can(t, e)
                }), [e]), e, t)
            }

            function m(e, t) {
                var n = e.isForumLikeChannel() ? y.Plq.SEND_MESSAGES : o.Z.combine(y.Plq.CREATE_PUBLIC_THREADS, y.Plq.READ_MESSAGE_HISTORY);
                return _(p.Z.can(n, e), e, t)
            }

            function b(e) {
                var t = (0, u.e7)([p.Z], (function() {
                    return p.Z.can(o.Z.combine(y.Plq.CREATE_PRIVATE_THREADS), e)
                }), [e]);
                return e.type === y.d4z.GUILD_TEXT && _(t, e)
            }

            function O(e) {
                var t = g(e),
                    n = b(e);
                return t || n
            }

            function _(e, t, n) {
                if (__OVERLAY__) return !1;
                if (!e) return !1;
                if (!s.uC.has(t.type)) return !1;
                if (null != n) {
                    if (n.hasFlag(y.iLy.HAS_THREAD)) return !1;
                    if ((0, c.Z)(n)) return !1
                }
                return !0
            }

            function E(e) {
                var t = (0, u.e7)([d.Z], (function() {
                    return d.Z.getChannel(e.id)
                }), [e]);
                return function(e, t, n) {
                    return !!t.hasFlag(y.iLy.HAS_THREAD) && (null != n && !!e)
                }((0, u.e7)([p.Z], (function() {
                    return p.Z.can(y.Plq.VIEW_CHANNEL, t)
                }), [t]), e, t)
            }

            function S(e) {
                return (0, u.cj)([h.Z, p.Z], (function() {
                    var t = h.Z.getActiveJoinedThreadsForParent(e.guild_id, e.id),
                        n = h.Z.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id),
                        r = h.Z.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
                        o = i()(n).some((function(e) {
                            return p.Z.can(y.Plq.VIEW_CHANNEL, e.channel)
                        })),
                        u = i()(t).some((function(e) {
                            return !(e.channel.id in n) && p.Z.can(y.Plq.VIEW_CHANNEL, e.channel)
                        })),
                        a = i()(r).some((function(e) {
                            return p.Z.can(y.Plq.VIEW_CHANNEL, e)
                        }));
                    return {
                        hasActiveThreads: o || u || a,
                        hasMoreActiveThreads: a || u
                    }
                }))
            }

            function w(e) {
                var t = (0, u.e7)([d.Z], (function() {
                        return d.Z.getChannel(null == e ? void 0 : e.parent_id)
                    })),
                    n = (0, u.e7)([p.Z], (function() {
                        return null != t && p.Z.can(y.Plq.MANAGE_THREADS, t)
                    }), [t]),
                    r = (0, u.e7)([f.default], (function() {
                        return f.default.getId()
                    }));
                return null != e && null != t && (!!e.isThread() && (!!n || !e.isLockedThread() && e.ownerId === r))
            }

            function P(e, t) {
                return null != e && t.can(y.Plq.SEND_MESSAGES_IN_THREADS, e)
            }

            function T(e, t, n) {
                var r;
                return !(null == e || !e.isThread()) && ((null === (r = e.threadMetadata) || void 0 === r ? void 0 : r.locked) ? n : t)
            }

            function R(e) {
                var t = (0, u.e7)([p.Z], (function() {
                        return P(e, p.Z)
                    })),
                    n = j(e);
                return T(e, t, n)
            }

            function A(e) {
                return T(e, P(e, p.Z), L(e))
            }

            function I(e) {
                var t, n = (0, u.e7)([p.Z], (function() {
                    return null != e && p.Z.can(y.Plq.SEND_MESSAGES_IN_THREADS, e)
                }));
                return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && !0 !== (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) && n)
            }

            function C(e) {
                var t;
                return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && !0 !== (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) && p.Z.can(y.Plq.SEND_MESSAGES_IN_THREADS, e))
            }

            function x(e) {
                var t = p.Z.can(y.Plq.MANAGE_THREADS, e);
                return e.isArchivedLockedThread() && !t
            }

            function N(e, t) {
                return null != e && t.can(y.Plq.MANAGE_THREADS, e)
            }

            function j(e) {
                return (0, u.e7)([p.Z], (function() {
                    return N(e, p.Z)
                }))
            }

            function L(e) {
                return N(e, p.Z)
            }

            function U(e) {
                var t = (0, l.Z)(),
                    n = (0, u.e7)([p.Z], (function() {
                        return p.Z.can(y.Plq.CONNECT, e)
                    })),
                    r = I(e),
                    i = v.useExperiment({
                        guildId: e.guild_id,
                        location: "e791ea_1"
                    }, {
                        autoTrackExposure: !1
                    }).enabled;
                return !t && e.isVocalThread() && i && n && r
            }

            function k(e) {
                var t = j(e);
                return e.isLockedThread() && !t
            }
        },
        543976: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => v
            });
            var r = n(730381),
                i = n.n(r),
                o = n(169376),
                u = n(661123),
                a = n(800336),
                l = n(203600);

            function c(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function s(e) {
                s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return s(e)
            }

            function f(e, t) {
                return !t || "object" !== p(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function d(e, t) {
                d = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return d(e, t)
            }
            var p = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function h(e) {
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
                    var n, r = s(e);
                    if (t) {
                        var i = s(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return f(this, n)
                }
            }
            var y = Object.freeze({
                    PAYMENT_SOURCE_REQUIRED: 1,
                    EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED: 2,
                    NOT_SELF_REDEEMABLE: 4
                }),
                v = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && d(e, t)
                    }(n, e);
                    var t = h(n);

                    function n(e) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, n);
                        var r;
                        (r = t.call(this)).userId = e.userId;
                        r.code = e.code;
                        r.skuId = e.skuId;
                        r.uses = e.uses;
                        r.maxUses = e.maxUses;
                        r.expiresAt = e.expiresAt;
                        r.redeemed = e.redeemed;
                        r.storeListingId = e.storeListingId;
                        r.subscriptionPlanId = e.subscriptionPlanId;
                        r.subscriptionPlan = e.subscriptionPlan;
                        r.revoked = e.revoked;
                        r.entitlementBranches = e.entitlementBranches;
                        r.flags = e.flags;
                        r.subscriptionTrial = e.subscriptionTrial;
                        r.promotion = e.promotion;
                        r.giftStyle = e.giftStyle;
                        return r
                    }
                    var r = n.prototype;
                    r.isExpired = function() {
                        var e = this.expiresAt;
                        return null != e && i()().isAfter(e)
                    };
                    r.toString = function() {
                        return this.code
                    };
                    n.createFromServer = function(e) {
                        return new n({
                            userId: null != e.user ? e.user.id : null,
                            code: e.code,
                            skuId: e.sku_id,
                            uses: e.uses,
                            maxUses: e.max_uses,
                            storeListingId: null != e.store_listing ? e.store_listing.id : null,
                            expiresAt: null != e.expires_at ? i()(e.expires_at) : null,
                            redeemed: e.redeemed,
                            subscriptionPlanId: null != e.subscription_plan ? e.subscription_plan.id : e.subscription_plan_id,
                            subscriptionPlan: null != e.subscription_plan ? a.ZP.createFromServer(e.subscription_plan) : null,
                            revoked: !1,
                            entitlementBranches: null != e.entitlement_branches ? e.entitlement_branches : null,
                            flags: null != e.flags ? e.flags : 0,
                            giftStyle: e.gift_style,
                            subscriptionTrial: null != e.subscription_trial ? {
                                id: e.subscription_trial.id,
                                interval: e.subscription_trial.interval,
                                intervalCount: e.subscription_trial.interval_count,
                                skuId: e.subscription_trial.sku_id
                            } : null,
                            promotion: null != e.promotion ? {
                                id: e.promotion.id,
                                startDate: e.promotion.start_date,
                                endDate: e.promotion.end_date,
                                inboundHeaderText: e.promotion.inbound_header_text,
                                inboundBodyText: e.promotion.inbound_body_text,
                                inboundHelpCenterLink: e.promotion.inbound_help_center_link
                            } : null
                        })
                    };
                    ! function(e, t, n) {
                        t && c(e.prototype, t);
                        n && c(e, n)
                    }(n, [{
                        key: "hasMultipleCopies",
                        get: function() {
                            return this.maxUses > 1
                        }
                    }, {
                        key: "isClaimed",
                        get: function() {
                            return this.uses >= this.maxUses
                        }
                    }, {
                        key: "remainingUses",
                        get: function() {
                            return this.maxUses - this.uses
                        }
                    }, {
                        key: "isSubscription",
                        get: function() {
                            return null != this.subscriptionPlanId
                        }
                    }, {
                        key: "premiumSubscriptionType",
                        get: function() {
                            return this.isSubscription && l.y7[this.skuId] || null
                        }
                    }, {
                        key: "isSelfRedeemable",
                        get: function() {
                            return !(0, u.yE)(this.flags, y.NOT_SELF_REDEEMABLE)
                        }
                    }, {
                        key: "isExistingPremiumSubscriptionDisallowed",
                        get: function() {
                            return (0, u.yE)(this.flags, y.EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED)
                        }
                    }, {
                        key: "analyticsData",
                        get: function() {
                            return {
                                gift_code: this.code,
                                gift_code_max_uses: this.maxUses
                            }
                        }
                    }]);
                    return n
                }(o.Z)
        },
        311865: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => T
            });
            var r = n(785893),
                i = n(667294),
                o = n(294184),
                u = n.n(o),
                a = n(202351),
                l = n(316878),
                c = n(901654),
                s = n(574075),
                f = n.n(s);

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function p(e, t, n, r, i, o, u) {
                try {
                    var a = e[o](u),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function h(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function y(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function v(e) {
                v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return v(e)
            }

            function g(e, t) {
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

            function m(e, t) {
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

            function b(e, t) {
                return !t || "object" !== E(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function O(e, t) {
                O = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return O(e, t)
            }

            function _(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return d(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var E = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function S(e) {
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
                    var n, r = v(e);
                    if (t) {
                        var i = v(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return b(this, n)
                }
            }
            var w = function(e, t) {
                    var n, r, i, o, u = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function a(o) {
                        return function(a) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; u;) try {
                                    if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                    (r = 0, i) && (o = [2 & o[0], i.value]);
                                    switch (o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            u.label++;
                                            return {
                                                value: o[1], done: !1
                                            };
                                        case 5:
                                            u.label++;
                                            r = o[1];
                                            o = [0];
                                            continue;
                                        case 7:
                                            o = u.ops.pop();
                                            u.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = u.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                u = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                u.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && u.label < i[1]) {
                                                u.label = i[1];
                                                i = o;
                                                break
                                            }
                                            if (i && u.label < i[2]) {
                                                u.label = i[2];
                                                u.ops.push(o);
                                                break
                                            }
                                            i[2] && u.ops.pop();
                                            u.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, u)
                                } catch (e) {
                                    o = [6, e];
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, a])
                        }
                    }
                },
                P = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && O(e, t)
                    }(i, e);
                    var t = S(i);

                    function i() {
                        h(this, i);
                        var e;
                        (e = t.apply(this, arguments)).animationRef = null;
                        e.currentScene = e.props.nextScene;
                        e.isUnmounted = !1;
                        e.handleLoopComplete = function() {
                            var t = e.props,
                                n = t.onSceneComplete,
                                r = t.nextScene;
                            null != n && n(e.currentScene);
                            e.playScene(r)
                        };
                        e.handleComplete = function() {
                            var t = e.props.onSceneComplete;
                            null != t && t(e.currentScene)
                        };
                        e.handleSetRef = function(t) {
                            e.animationRef = t;
                            var n = e.props.animationRef;
                            null != n && n(t)
                        };
                        return e
                    }
                    var o = i.prototype;
                    o.componentDidMount = function() {
                        var e, t = this;
                        return (e = function() {
                            var e, r, i, o, u, a, l, c, s, f, d;
                            return w(this, (function(p) {
                                switch (p.label) {
                                    case 0:
                                        e = t.props, r = e.importData, i = e.nextScene, o = e.pauseWhileUnfocused, u = e.pause, a = e.isWindowFocused, l = e.useReducedMotion;
                                        return [4, Promise.all([r(), n.e(11248).then(n.t.bind(n, 211248, 23))])];
                                    case 1:
                                        c = _.apply(void 0, [p.sent(), 2]), s = c[0], f = c[1], d = f.default;
                                        if (null == t.animationRef) return [2];
                                        t.animation = d.loadAnimation({
                                            container: t.animationRef,
                                            renderer: "svg",
                                            loop: !0,
                                            autoplay: !0,
                                            animationData: s
                                        });
                                        t.animation.addEventListener("loopComplete", t.handleLoopComplete);
                                        t.animation.addEventListener("complete", t.handleComplete);
                                        t.playScene(i);
                                        (o && !a || u || l) && t.animation.pause();
                                        return [2]
                                }
                            }))
                        }, function() {
                            var t = this,
                                n = arguments;
                            return new Promise((function(r, i) {
                                var o = e.apply(t, n);

                                function u(e) {
                                    p(o, r, i, u, a, "next", e)
                                }

                                function a(e) {
                                    p(o, r, i, u, a, "throw", e)
                                }
                                u(void 0)
                            }))
                        })()
                    };
                    o.componentWillUnmount = function() {
                        this.isUnmounted = !0;
                        if (null != this.animation) {
                            this.animation.destroy();
                            this.animation = void 0
                        }
                    };
                    o.componentDidUpdate = function(e) {
                        var t = this.props,
                            n = t.nextScene,
                            r = t.pauseWhileUnfocused,
                            i = t.pause,
                            o = t.isWindowFocused,
                            u = t.useReducedMotion;
                        n !== this.currentScene && this.shouldForcePlayAfter() && !i && this.playScene(n);
                        null != this.animation && (r && !e.isWindowFocused && o && !u && !0 !== i ? this.animation.play() : (u || r && e.isWindowFocused && !o) && this.animation.pause());
                        if (!e.pause && i) {
                            var a;
                            null === (a = this.animation) || void 0 === a || a.pause()
                        } else if (e.pause && !i && !u) {
                            var l;
                            null === (l = this.animation) || void 0 === l || l.play()
                        }
                        if (e.nextScene !== n && i) {
                            var c;
                            this.playScene(n);
                            null === (c = this.animation) || void 0 === c || c.pause()
                        }
                    };
                    o.shouldForcePlayAfter = function() {
                        return !0 === this.props.sceneSegments[this.currentScene].shouldForcePlayAfter
                    };
                    o.playScene = function(e) {
                        if (!this.isUnmounted) {
                            var t = this.props,
                                n = t.onScenePlay,
                                r = t.sceneSegments,
                                i = t.useReducedMotion,
                                o = r[e],
                                u = r[this.currentScene];
                            null == this.animation || e !== this.currentScene && o.BEG === u.BEG && o.END === u.END || this.animation.playSegments([o.BEG, o.END], !0);
                            this.currentScene = e;
                            null != n && n(this.currentScene);
                            if (i) {
                                var a;
                                null === (a = this.animation) || void 0 === a || a.pause()
                            }
                        }
                    };
                    o.render = function() {
                        return (0, r.jsx)("div", {
                            ref: this.handleSetRef,
                            className: u()(this.props.className, f().wrapper)
                        })
                    };
                    return i
                }(i.PureComponent);
            P.defaultProps = {
                pauseWhileUnfocused: !0,
                pause: !1
            };
            const T = function(e) {
                var t = e.componentRef,
                    n = m(e, ["componentRef"]),
                    i = (0, a.e7)([c.Z], (function() {
                        return c.Z.isFocused()
                    })),
                    o = (0, a.e7)([l.Z], (function() {
                        return l.Z.useReducedMotion
                    }));
                return (0, r.jsx)(P, g(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            y(e, t, n[t])
                        }))
                    }
                    return e
                }({}, n), {
                    isWindowFocused: i,
                    useReducedMotion: o,
                    ref: t
                }))
            }
        },
        986979: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p
            });
            var r = n(785893),
                i = (n(667294), n(168075)),
                o = n(795308),
                u = n(633878);

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e, t) {
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

            function c(e, t) {
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

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function f(e, t) {
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

            function d(e, t) {
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
            const p = (0, i.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    i = e.height,
                    o = void 0 === i ? 24 : i,
                    a = e.color,
                    l = void 0 === a ? "currentColor" : a,
                    c = e.foreground,
                    p = d(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", f(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            s(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, u.Z)(p)), {
                    width: n,
                    height: o,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: c,
                        fill: l,
                        d: "M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515 22 12C22 6.487 17.514 2 12 2ZM12 18.25C11.31 18.25 10.75 17.691 10.75 17C10.75 16.31 11.31 15.75 12 15.75C12.69 15.75 13.25 16.31 13.25 17C13.25 17.691 12.69 18.25 12 18.25ZM13 13.875V15H11V12H12C13.104 12 14 11.103 14 10C14 8.896 13.104 8 12 8C10.896 8 10 8.896 10 10H8C8 7.795 9.795 6 12 6C14.205 6 16 7.795 16 10C16 11.861 14.723 13.429 13 13.875Z"
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    i = e.height,
                    s = void 0 === i ? 24 : i,
                    f = e.color,
                    d = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    h = void 0 === p ? "" : p,
                    y = c(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            a(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0,
                    u.Z)(y)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm-.281-16c-.981 0-1.812.473-2.269 1.14A1 1 0 1 1 7.8 7.01C8.638 5.786 10.095 5 11.719 5c2.495 0 4.656 1.885 4.656 4.375 0 2.103-1.542 3.775-3.524 4.243l.14.993a1 1 0 0 1-1.981.278l-.281-2a1 1 0 0 1 .99-1.139c1.544 0 2.656-1.137 2.656-2.375S13.263 7 11.719 7ZM13 17.875a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0Z",
                        clipRule: "evenodd",
                        className: h
                    })
                }))
            }))
        },
        585798: (e, t, n) => {
            "use strict";
            n.d(t, {
                Ox: () => R,
                QP: () => S,
                q4: () => A,
                ob: () => I
            });
            var r = n(785893),
                i = n(667294),
                o = n(873955),
                u = n.n(o),
                a = n(494537),
                l = n(588983),
                c = n(38736),
                s = n(142643),
                f = n(304548),
                d = n(241166),
                p = n(421281),
                h = n(329543),
                y = n(801791),
                v = n.n(y);

            function g(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function m(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function b(e, t) {
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

            function O(e) {
                return function(e) {
                    if (Array.isArray(e)) return g(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return g(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return g(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var _, E = (0, p.Mg)(s.Z.FULL_SCREEN_LAYER_ANIMATION_DURATION);
            ! function(e) {
                e[e.ENTERING = 1] = "ENTERING";
                e[e.ENTERED = 2] = "ENTERED";
                e[e.EXITING = 3] = "EXITING";
                e[e.EXITED = 4] = "EXITED"
            }(_ || (_ = {}));
            var S = (0, c.Z)((function(e) {
                return {
                    fullScreenLayers: [],
                    addLayer: function(t) {
                        return e((function(e) {
                            return {
                                fullScreenLayers: O(e.fullScreenLayers).concat([t])
                            }
                        }))
                    }
                }
            }));

            function w(e) {
                var t = e.item,
                    n = i.useRef(null);
                (0, f.useFocusLock)(n);
                i.useEffect((function() {
                    d.Z.disable();
                    d.Z.enableTemp((e = t.key, {
                        POP_LAYER: {
                            binds: ["esc"],
                            comboKeysBindGlobal: !0,
                            action: function() {
                                I(e)
                            }
                        }
                    }));
                    var e;
                    return function() {
                        d.Z.disableTemp()
                    }
                }), [t.key]);
                return (0, r.jsx)(t.LayerComponent, {
                    children: (0, r.jsxs)("div", {
                        className: v().root,
                        ref: n,
                        children: [(0, r.jsx)("div", {
                            className: v().drag
                        }), t.render({
                            transitionState: null != t ? t.transitionState : _.EXITING,
                            closeLayer: function() {
                                return I(t.key)
                            }
                        })]
                    })
                })
            }
            var P = {
                    enter: v().enter,
                    enterActive: v().enterActive,
                    enterDone: v().enterDone,
                    exit: v().exit,
                    exitActive: v().exitActive,
                    exitDone: v().exitDone
                },
                T = {
                    enter: v().enterReducedMotion,
                    enterActive: v().enterActiveReducedMotion,
                    enterDone: v().enterDoneReducedMotion,
                    exit: v().exitReducedMotion,
                    exitActive: v().exitActiveReducedMotion,
                    exitDone: v().exitDoneReducedMotion
                };

            function R() {
                var e = i.useContext(f.AccessibilityPreferencesContext).reducedMotion.enabled ? T : P,
                    t = S((function(e) {
                        return e.fullScreenLayers
                    }));
                return (0, r.jsx)(a.Z, {
                    children: t.map((function(n) {
                        return (0, r.jsx)(l.Z, {
                            classNames: e,
                            timeout: E,
                            onEntered: function() {
                                S.setState({
                                    fullScreenLayers: t.map((function(e) {
                                        return e.key === n.key ? b(function(e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var n = null != arguments[t] ? arguments[t] : {},
                                                    r = Object.keys(n);
                                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                                }))));
                                                r.forEach((function(t) {
                                                    m(e, t, n[t])
                                                }))
                                            }
                                            return e
                                        }({}, e), {
                                            transitionState: _.ENTERED
                                        }) : e
                                    }))
                                })
                            },
                            unmountOnExit: !0,
                            children: (0, r.jsx)(w, {
                                item: n
                            })
                        }, n.key)
                    }))
                })
            }

            function A(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
                    n = t.layerKey,
                    r = t.Layer,
                    i = null != n ? n : u()();
                S.setState((function(t) {
                    return {
                        fullScreenLayers: O(t.fullScreenLayers).concat([{
                            key: i,
                            transitionState: _.ENTERING,
                            LayerComponent: null != r ? r : h.ZP,
                            render: e
                        }])
                    }
                }));
                return i
            }

            function I(e) {
                S.setState((function(t) {
                    return {
                        fullScreenLayers: t.fullScreenLayers.filter((function(t) {
                            return t.key !== e
                        }))
                    }
                }))
            }
        },
        507965: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p
            });
            var r = n(785893),
                i = n(667294),
                o = n(652411);

            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e, t) {
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

            function c(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw i
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
            var s = [n(577660)],
                f = ["#FFFFFF"],
                d = {
                    velocity: {
                        type: "static-random",
                        minValue: {
                            x: 0,
                            y: 1
                        },
                        maxValue: {
                            x: 3,
                            y: 3
                        }
                    },
                    rotation: {
                        type: "linear-random",
                        minValue: {
                            x: 0,
                            y: 0,
                            z: 0
                        },
                        maxValue: {
                            x: 0,
                            y: 0,
                            z: 360
                        },
                        minAddValue: {
                            x: 0,
                            y: 0,
                            z: -5
                        },
                        maxAddValue: {
                            x: 0,
                            y: 0,
                            z: 5
                        }
                    },
                    size: {
                        type: "static-random",
                        minValue: 2,
                        maxValue: 6
                    },
                    dragCoefficient: {
                        type: "static",
                        value: {
                            x: .05,
                            y: .05
                        }
                    },
                    opacity: {
                        type: "static",
                        value: .3
                    }
                };

            function p(e) {
                var t = e.className,
                    n = e.firing,
                    u = void 0 === n || n,
                    p = e.wind,
                    h = void 0 === p ? 2 : p,
                    y = c(i.useState(null), 2),
                    v = y[0],
                    g = y[1],
                    m = c(i.useState(null), 2),
                    b = m[0],
                    O = m[1],
                    _ = (0, o.uR)(b, v),
                    E = i.useMemo((function() {
                        return new o.qA({
                            wind: h
                        })
                    }), [h]),
                    S = i.useCallback((function() {
                        var e = null == b ? void 0 : b.getCanvas();
                        if (null != e) {
                            var t = e.getBoundingClientRect();
                            _.createConfetti(l(function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                    }))));
                                    r.forEach((function(t) {
                                        a(e, t, n[t])
                                    }))
                                }
                                return e
                            }({}, d), {
                                position: {
                                    type: "static-random",
                                    minValue: {
                                        x: -t.width / 2,
                                        y: -6
                                    },
                                    maxValue: {
                                        x: t.width,
                                        y: -6
                                    }
                                }
                            }))
                        }
                    }), [_, b]);
                i.useEffect((function() {
                    var e = u ? setInterval(S, 16.666666666666668) : null;
                    return function() {
                        return clearInterval(e)
                    }
                }), [u, S]);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(o.O_, {
                        ref: O,
                        className: t,
                        environment: E
                    }), (0, r.jsx)(o.Ji, {
                        ref: g,
                        colors: f,
                        sprites: s,
                        spriteWidth: 6,
                        spriteHeight: 6
                    })]
                })
            }
        },
        691797: (e, t, n) => {
            "use strict";
            n.d(t, {
                wS: () => u,
                JG: () => a
            });
            var r = n(482507),
                i = n(120415),
                o = n(310126),
                u = function() {
                    if (i.FB) return null != o.ZP.copy;
                    try {
                        return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                    } catch (e) {
                        return !1
                    }
                }();

            function a(e) {
                if (!u) return !1;
                if (i.FB) {
                    o.ZP.copy(e);
                    return !0
                }
                return r.J(e)
            }
        },
        73105: (e, t, n) => {
            "use strict";
            n.d(t, {
                RD: () => q,
                WA: () => H,
                f5: () => F,
                Gb: () => j,
                Rs: () => G,
                _2: () => V,
                gL: () => U,
                fG: () => D
            });
            var r = n(306472),
                i = n(737264),
                o = n(496486),
                u = n.n(o),
                a = n(809784),
                l = n(296602),
                c = n(384411),
                s = n(72580),
                f = n(310126);

            function d(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }
            var p = function() {
                function e(t, n) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    this._shouldProcess = !1;
                    this._processing = !1;
                    this._minimumTimeRemaining = 5;
                    this._language = t;
                    this._languageHint = t;
                    this._onChange = n;
                    n(t)
                }
                var t = e.prototype;
                t.process = function(e) {
                    var t = this;
                    if (!this._processing) {
                        this._processing = !0;
                        requestIdleCallback((function(n) {
                            if (n.timeRemaining() <= t._minimumTimeRemaining) t._processEnd();
                            else {
                                e.length > 256 && (e = e.slice(0, 256));
                                (function(e, t) {
                                    return f.ZP.ensureModule("discord_spellcheck").then((function() {
                                        var n = f.ZP.requireModule("discord_spellcheck").cld;
                                        return new Promise((function(r, i) {
                                            n.detect(e, {
                                                httpHint: t,
                                                encodingHint: "UTF8"
                                            }, (function(e, t) {
                                                null != e ? i(new Error(e.message)) : !t.reliable || t.languages[0].percent < 90 || t.languages[0].score < 500 ? i(new Error("Not enough reliable text.")) : r(t.languages[0].code)
                                            }))
                                        }))
                                    }))
                                })(e, t._languageHint).then((function(e) {
                                    t.language = e;
                                    t._processEnd(n.didTimeout)
                                }), (function() {
                                    t._processEnd(n.didTimeout)
                                }))
                            }
                        }))
                    }
                };
                t._processEnd = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this._processing = !1;
                    e && this._minimumTimeRemaining++
                };
                ! function(e, t, n) {
                    t && d(e.prototype, t);
                    n && d(e, n)
                }(e, [{
                    key: "language",
                    get: function() {
                        return this._language
                    },
                    set: function(e) {
                        if (this._language !== e) {
                            this._language = e;
                            this._onChange(e)
                        }
                    }
                }, {
                    key: "languageHint",
                    set: function(e) {
                        this._languageHint = e
                    }
                }]);
                return e
            }();
            const h = {
                aa: "aa-ET",
                af: "af-ZA",
                ak: "ak-GH",
                am: "am-ET",
                an: "an-ES",
                ar: "ar-MA",
                as: "as-IN",
                ay: "ay-PE",
                az: "az-AZ",
                be: "be-BY",
                bg: "bg-BG",
                bi: "bi-TV",
                bn: "bn-BD",
                bo: "bo-CN",
                br: "br-FR",
                bs: "bs-BA",
                ca: "ca-ES",
                ce: "ce-RU",
                cs: "cs-CZ",
                cv: "cv-RU",
                cy: "cy-GB",
                da: "da-DK",
                de: "de-DE",
                dv: "dv-MV",
                dz: "dz-BT",
                el: "el-GR",
                en: "en-US",
                es: "es-ES",
                et: "et-EE",
                eu: "eu-ES",
                fa: "fa-IR",
                ff: "ff-SN",
                fi: "fi-FI",
                fo: "fo-FO",
                fr: "fr-FR",
                fy: "fy-DE",
                ga: "ga-IE",
                gd: "gd-GB",
                gl: "gl-ES",
                gu: "gu-IN",
                gv: "gv-GB",
                ha: "ha-NG",
                he: "he-IL",
                hi: "hi-IN",
                hr: "hr-HR",
                ht: "ht-HT",
                hu: "hu-HU",
                hy: "hy-AM",
                ia: "ia-FR",
                id: "id-ID",
                ig: "ig-NG",
                ik: "ik-CA",
                is: "is-IS",
                it: "it-IT",
                iu: "iu-CA",
                ja: "ja-JP",
                ka: "ka-GE",
                kk: "kk-KZ",
                kl: "kl-GL",
                km: "km-KH",
                kn: "kn-IN",
                ko: "ko-KR",
                ks: "ks-IN",
                ku: "ku-TR",
                kw: "kw-GB",
                ky: "ky-KG",
                lb: "lb-LU",
                lg: "lg-UG",
                li: "li-BE",
                ln: "ln-CD",
                lo: "lo-LA",
                lt: "lt-LT",
                lv: "lv-LV",
                mg: "mg-MG",
                mh: "mh-MH",
                mi: "mi-NZ",
                mk: "mk-MK",
                ml: "ml-IN",
                mn: "mn-MN",
                mr: "mr-IN",
                ms: "ms-MY",
                mt: "mt-MT",
                my: "my-MM",
                nb: "nb-NO",
                ne: "ne-NP",
                nl: "nl-NL",
                nn: "nn-NO",
                nr: "nr-ZA",
                oc: "oc-FR",
                om: "om-KE",
                or: "or-IN",
                os: "os-RU",
                pa: "pa-PK",
                pl: "pl-PL",
                ps: "ps-AF",
                pt: "pt-PT",
                ro: "ro-RO",
                ru: "ru-RU",
                rw: "rw-RW",
                sa: "sa-IN",
                sc: "sc-IT",
                sd: "sd-IN",
                se: "se-NO",
                si: "si-LK",
                sk: "sk-SK",
                sl: "sl-SI",
                so: "so-SO",
                sq: "sq-AL",
                sr: "sr-RS",
                ss: "ss-ZA",
                st: "st-ZA",
                sv: "sv-SE",
                sw: "sw-KE",
                ta: "ta-IN",
                te: "te-IN",
                tg: "tg-TJ",
                th: "th-TH",
                ti: "ti-ER",
                tk: "tk-TM",
                tl: "tl-PH",
                tn: "tn-ZA",
                tr: "tr-TR",
                ts: "ts-ZA",
                tt: "tt-RU",
                ug: "ug-CN",
                uk: "uk-UA",
                ur: "ur-PK",
                uz: "uz-UZ",
                ve: "ve-ZA",
                vi: "vi-VN",
                wa: "wa-BE",
                wo: "wo-SN",
                xh: "xh-ZA",
                yi: "yi-US",
                yo: "yo-NG",
                zh: "zh-CN",
                zu: "zu-ZA"
            };

            function y(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function v(e, t, n, r, i, o, u) {
                try {
                    var a = e[o](u),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function g(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function u(e) {
                            v(o, r, i, u, a, "next", e)
                        }

                        function a(e) {
                            v(o, r, i, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function m(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function b(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return y(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var O = function(e, t) {
                    var n, r, i, o, u = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function a(o) {
                        return function(a) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; u;) try {
                                    if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                    (r = 0, i) && (o = [2 & o[0], i.value]);
                                    switch (o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            u.label++;
                                            return {
                                                value: o[1], done: !1
                                            };
                                        case 5:
                                            u.label++;
                                            r = o[1];
                                            o = [0];
                                            continue;
                                        case 7:
                                            o = u.ops.pop();
                                            u.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = u.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                u = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                u.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && u.label < i[1]) {
                                                u.label = i[1];
                                                i = o;
                                                break
                                            }
                                            if (i && u.label < i[2]) {
                                                u.label = i[2];
                                                u.ops.push(o);
                                                break
                                            }
                                            i[2] && u.ops.pop();
                                            u.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, u)
                                } catch (e) {
                                    o = [6, e];
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, a])
                        }
                    }
                },
                _ = new l.Z("Spellchecker"),
                E = null === r.Z || void 0 === r.Z ? void 0 : r.Z.spellCheck;

            function S(e) {
                var t;
                e = null !== (t = h[e]) && void 0 !== t ? t : e;
                var n = (0, i.Q)(e.replace(/[_-]/g, "-"));
                if (null != n && null != n.langtag.language && null != n.langtag.region) {
                    var r = n.langtag,
                        o = r.language,
                        u = r.region;
                    return "".concat(o.language.toLowerCase(), "-").concat(u.toUpperCase())
                }
                _.error("".concat(e, " is not a valid locale."))
            }
            var w = function() {
                    function e(t) {
                        var n = this;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e);
                        this._enabled = !0;
                        this.misspelledWord = "";
                        this.corrections = [];
                        var r = b(c.default.locale.split("-"), 2),
                            i = r[0],
                            o = r[1];
                        this.regionPreference = o;
                        var u = this.getAvailableLanguages(t);
                        this.languageDetector = new p(i, (function(e) {
                            var r = "".concat(e, "-").concat(n.regionPreference);
                            if (-1 !== t.indexOf(r)) n.setLocale(r);
                            else {
                                var o, a = null !== (o = u[e]) && void 0 !== o ? o : h[i];
                                null != a && n.setLocale(a)
                            }
                        }));
                        E.on("spellcheck-result", (function(e, t) {
                            n.misspelledWord = null != e ? e : "";
                            n.corrections = null != t ? t : []
                        }))
                    }
                    var t = e.prototype;
                    t.setLearnedWords = function(e) {
                        E.setLearnedWords(e)
                    };
                    t.setLocale = function(e) {
                        var t;
                        null === (t = E.setLocale(e)) || void 0 === t || t.then((function(t) {
                            _.info("Switching to ".concat(e), t ? "(available)" : "(unavailable)")
                        }))
                    };
                    t.setAppLocale = function(e) {
                        this.regionPreference = e.split("-")[1]
                    };
                    t.detectLanguage = function(e) {
                        this.enabled && this.languageDetector.process(e)
                    };
                    t.getAvailableLanguages = function(e) {
                        var t = {};
                        e.forEach((function(e) {
                            var n, r = b(e.split("-"), 1)[0];
                            t[r] = null !== (n = t[r]) && void 0 !== n ? n : e
                        }));
                        return t
                    };
                    t.isMisspelled = function(e, t) {
                        return "" !== this.misspelledWord && e === this.misspelledWord
                    };
                    t.getCorrectionsForMisspelling = function(e, t) {
                        return this.isMisspelled(e, t) ? this.corrections : []
                    };
                    t.replaceMisspelling = function(e) {
                        E.replaceMisspelling(e)
                    };
                    ! function(e, t, n) {
                        t && m(e.prototype, t);
                        n && m(e, n)
                    }(e, [{
                        key: "enabled",
                        get: function() {
                            return this._enabled
                        },
                        set: function(e) {
                            this._enabled = e
                        }
                    }]);
                    return e
                }(),
                P = u().debounce((function(e, t) {
                    var n = function(e) {
                        if (null == e) return null;
                        if ((0, a.k)(e, HTMLInputElement) || (0, a.k)(e, HTMLTextAreaElement)) return e.value;
                        if ((0, a.k)(e) && e.hasAttribute("contenteditable")) return e.textContent
                    }(t);
                    null != n && e.detectLanguage(n)
                }), 250);

            function T(e) {
                null != document.body && document.body.addEventListener("beforeinput", (function(t) {
                    return P(e, t.target)
                }), !0)
            }

            function R() {
                return (R = g((function() {
                    var e, t, n, r;
                    return O(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, E.getAvailableDictionaries()];
                            case 1:
                                t = null !== (e = i.sent()) && void 0 !== e ? e : [];
                                n = t.map(S).filter(s.lm);
                                T(r = new w(n));
                                return [2, r]
                        }
                    }))
                }))).apply(this, arguments)
            }
            var A = n(120415);

            function I(e, t, n, r, i, o, u) {
                try {
                    var a = e[o](u),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function C(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function u(e) {
                            I(o, r, i, u, a, "next", e)
                        }

                        function a(e) {
                            I(o, r, i, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }
            var x = function(e, t) {
                var n, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = u.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2];
                                            u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                o = t.call(e, u)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            };

            function N() {
                return null != (null === r.Z || void 0 === r.Z ? void 0 : r.Z.spellCheck)
            }

            function j() {
                return (0, A.nI)() && N()
            }
            var L = j() ? function() {
                return R.apply(this, arguments)
            }() : null;

            function U(e) {
                return k.apply(this, arguments)
            }

            function k() {
                return (k = C((function(e) {
                    var t;
                    return x(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, L];
                            case 1:
                                if (null == (t = n.sent())) return [2];
                                t.enabled = e;
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function D(e) {
                return M.apply(this, arguments)
            }

            function M() {
                return (M = C((function(e) {
                    var t;
                    return x(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, L];
                            case 1:
                                if (null == (t = n.sent())) return [2];
                                t.setLearnedWords(e);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function F(e) {
                return Z.apply(this, arguments)
            }

            function Z() {
                Z = C((function(e) {
                    var t, n, r = arguments;
                    return x(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                t = r.length > 1 && void 0 !== r[1] && r[1];
                                return [4, L];
                            case 1:
                                return null == (n = i.sent()) ? [2, !1] : [2, n.isMisspelled(e, t)]
                        }
                    }))
                }));
                return Z.apply(this, arguments)
            }

            function H(e) {
                return B.apply(this, arguments)
            }

            function B() {
                B = C((function(e) {
                    var t, n, r, i = arguments;
                    return x(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                t = i.length > 1 && void 0 !== i[1] && i[1], n = i.length > 2 && void 0 !== i[2] ? i[2] : 5;
                                return [4, L];
                            case 1:
                                return null == (r = o.sent()) ? [2, []] : [2, r.getCorrectionsForMisspelling(e, t).slice(0, n)]
                        }
                    }))
                }));
                return B.apply(this, arguments)
            }

            function G(e) {
                return z.apply(this, arguments)
            }

            function z() {
                return (z = C((function(e) {
                    var t;
                    return x(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, L];
                            case 1:
                                if (null == (t = n.sent())) return [2];
                                t.replaceMisspelling(e);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function V(e) {
                return W.apply(this, arguments)
            }

            function W() {
                return (W = C((function(e) {
                    var t;
                    return x(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, L];
                            case 1:
                                if (null == (t = n.sent())) return [2];
                                t.setAppLocale(e);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function q(e) {
                if (!N()) return function() {};
                var t = r.Z.spellCheck.on("spellcheck-result", e);
                return null != t ? t : function() {}
            }
        },
        391438: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n(281110),
                i = n(652591);

            function o(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function u(e) {
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
            }

            function a(e, t) {
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

            function l(e, t, n) {
                var r = t.trackedActionData,
                    o = a(t, ["trackedActionData"]),
                    l = {
                        url: o.url,
                        request_method: n
                    };
                return new Promise((function(t, n) {
                    e(o).then((function(e) {
                        var n = r.properties;
                        "function" == typeof r.properties && (n = r.properties(e));
                        (0, i.trackNetworkAction)(r.event, u({
                            status_code: e.status
                        }, l, n));
                        t(e)
                    })).catch((function(e) {
                        var t, o, a = r.properties;
                        "function" == typeof r.properties && (a = r.properties(e));
                        (0, i.trackNetworkAction)(r.event, u({
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (o = e.body) || void 0 === o ? void 0 : o.message
                        }, l, a));
                        n(e)
                    }))
                }))
            }
            const c = {
                get: function(e) {
                    return l(r.ZP.get, e, "get")
                },
                post: function(e) {
                    return l(r.ZP.post, e, "post")
                },
                put: function(e) {
                    return l(r.ZP.put, e, "put")
                },
                patch: function(e) {
                    return l(r.ZP.patch, e, "patch")
                },
                delete: function(e) {
                    return l(r.ZP.delete, e, "del")
                }
            }
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
        142520: (e, t, n) => {
            "use strict";
            n.d(t, {
                x: () => r
            });
            var r;
            ! function(e) {
                e.THOUGHT_EMBED_TITLE = "Clyde Thoughts"
            }(r || (r = {}))
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
        482507: (e, t, n) => {
            "use strict";
            n.d(t, {
                J: () => r
            });

            function r(e) {
                var t = document.body;
                if (null == t) throw new Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                var n = document.createRange(),
                    r = window.getSelection(),
                    i = document.createElement("textarea");
                i.value = e;
                i.contentEditable = "true";
                i.style.visibility = "none";
                t.appendChild(i);
                n.selectNodeContents(i);
                null == r || r.removeAllRanges();
                null == r || r.addRange(n);
                i.focus();
                i.setSelectionRange(0, e.length);
                var o = document.execCommand("copy");
                t.removeChild(i);
                return o
            }
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
                Gk: () => o
            });

            function r(e) {
                return "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.INVITE_HOST, "/").concat(e)
            }

            function i(e) {
                return "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST, "/").concat(e)
            }

            function o() {
                return "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT, "/channels/@me")
            }
        },
        58964: (e, t, n) => {
            "use strict";
            n.d(t, {
                ZP: () => p,
                WS: () => f,
                zS: () => d
            });
            var r = n(131795),
                i = n.n(r),
                o = n(228721);
            const u = n(426080).Z;

            function a(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function l(e, t) {
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

            function c(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return a(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var s = "https://discordapp.page.link";

            function f() {
                return (0, o.Z)()
            }

            function d(e) {
                if (!e.startsWith(s)) return null;
                try {
                    var t = new URL(e).searchParams,
                        n = t.get("link");
                    if (null == n) return null;
                    var r, i = decodeURIComponent(n),
                        o = new URL(i).searchParams,
                        u = {
                            utmSource: null !== (r = t.get("utm_source")) && void 0 !== r ? r : void 0
                        },
                        a = !0,
                        l = !1,
                        f = void 0;
                    try {
                        for (var d, p = o.entries()[Symbol.iterator](); !(a = (d = p.next()).done); a = !0) {
                            var h = c(d.value, 2),
                                y = h[0],
                                v = h[1];
                            u[y] = v
                        }
                    } catch (e) {
                        l = !0;
                        f = e
                    } finally {
                        try {
                            a || null == p.return || p.return()
                        } finally {
                            if (l) throw f
                        }
                    }
                    return u
                } catch (e) {
                    return null
                }
            }

            function p(e, t) {
                var n = t.utmSource,
                    r = t.androidFallbackLink,
                    o = t.iosFallbackLink,
                    a = l(t, ["utmSource", "androidFallbackLink", "iosFallbackLink"]),
                    c = new URL(e);
                for (var f in a) {
                    var d = a[f];
                    null != d && c.searchParams.set(f, d)
                }
                var p, h, y, v, g, m = encodeURIComponent(c.toString()),
                    b = encodeURIComponent(u()),
                    O = (y = new RegExp("(".concat(["WebView", "(iPhone|iPod|iPad)(?!.*Safari/)"].join("|"), ")"), "ig"), v = null != (null === i() || void 0 === i() || null === (p = i().ua) || void 0 === p ? void 0 : p.match(y)),
                        g = "Safari" === (null === i() || void 0 === i() ? void 0 : i().name) && !v, "iOS" !== (null === i() || void 0 === i() || null === (h = i().os) || void 0 === h ? void 0 : h.family) || g ? 1 : 0),
                    _ = null != r ? encodeURIComponent(r) : null,
                    E = null != o ? encodeURIComponent(o) : null,
                    S = "".concat(s, "/?link=").concat(m, "&utm_source=").concat(n, "&apn=").concat("com.discord", "&isi=").concat(985746746, "&ibi=").concat("com.hammerandchisel.discord", "&sd=").concat(b, "&efr=").concat(O);
                null != _ && (S += "&afl=".concat(_));
                null != E && (S += "&ifl=".concat(E));
                return S
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
                ge: () => o,
                RA: () => a
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

            function o(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (Array.isArray(e)) {
                    for (var n = e.length, r = [], u = 0; u < n; u++) i(r, o(e[u], t));
                    return r
                }
                null != e.content && (e.content = o(e.content, e));
                return null != t && e.type === t.type ? e.content : e
            }
            var u = {};

            function a(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    limit: 200
                };
                if (Array.isArray(e))
                    for (var n = e.length, r = 0; r < n; r++) {
                        var i = a(e[r], t);
                        if (i === u) {
                            e.length = r;
                            break
                        }
                        e[r] = i
                    } else if ("text" !== e.type) {
                        t.limit -= 1;
                        if (t.limit <= 0) return u;
                        Array.isArray(e.content) && (e.content = a(e.content, t))
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
                w4: () => o,
                _p: () => u
            });
            var r, i = n(222789),
                o = (r = n(25788).Z).reactParserFor,
                u = r.astParserFor
        },
        25788: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var r = n(120053),
                i = n.n(r),
                o = n(222789);

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function a(e, t, n, r, i) {
                n || (t += "\n\n");
                var a;
                a = e(t, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            u(e, t, n[t])
                        }))
                    }
                    return e
                }({
                    inline: n
                }, r));
                a = (0, o.ge)(a);
                a = (0, o.RA)(a);
                null != i && (a = i(a, n));
                return a
            }
            const l = {
                reactParserFor: function(e) {
                    var t = i().parserFor(e),
                        n = i().reactFor(i().ruleOutput(e, "react"));
                    return function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                        return n(a(t, e, r, i, o), i)
                    }
                },
                astParserFor: function(e) {
                    var t = i().parserFor(e);
                    return function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                        return a(t, e, n, r, i)
                    }
                }
            }
        },
        283151: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => u
            });
            var r = n(667294);

            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function o(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
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

            function u() {
                var e = o((0, r.useState)({}), 2)[1];
                return (0, r.useCallback)((function() {
                    return e({})
                }), [])
            }
        },
        204841: (e, t, n) => {
            "use strict";
            n.d(t, {
                UN: () => r,
                Bd: () => i,
                xS: () => o
            });

            function r(e) {
                let t = e[3],
                    n = 128 & e[2],
                    r = 128 & e[4];
                return (r ? n ? 5 : 7 : 7 & t) / (r ? 7 & t : n ? 5 : 7)
            }

            function i(e, t, n) {
                let r = 4 * e + 1,
                    i = 6 + t * (5 + r),
                    o = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, e >> 8, 255 & e, 0, 0, t >> 8, 255 & t, 8, 6, 0, 0, 0, 0, 0, 0, 0, i >>> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, 73, 68, 65, 84, 120, 1],
                    u = [0, 498536548, 997073096, 651767980, 1994146192, 1802195444, 1303535960, 1342533948, -306674912, -267414716, -690576408, -882789492, -1687895376, -2032938284, -1609899400, -1111625188],
                    a = 1,
                    l = 0;
                for (let e = 0, i = 0, u = r - 1; e < t; e++, u += r - 1) {
                    o.push(e + 1 < t ? 0 : 1, 255 & r, r >> 8, 255 & ~r, r >> 8 ^ 255, 0);
                    for (l = (l + a) % 65521; i < u; i++) {
                        let e = 255 & n[i];
                        o.push(e);
                        a = (a + e) % 65521;
                        l = (l + a) % 65521
                    }
                }
                o.push(l >> 8, 255 & l, a >> 8, 255 & a, 0, 0, 0, 0, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130);
                for (let [e, t] of [
                        [12, 29],
                        [37, 41 + i]
                    ]) {
                    let n = -1;
                    for (let r = e; r < t; r++) {
                        n ^= o[r];
                        n = n >>> 4 ^ u[15 & n];
                        n = n >>> 4 ^ u[15 & n]
                    }
                    n = ~n;
                    o[t++] = n >>> 24;
                    o[t++] = n >> 16 & 255;
                    o[t++] = n >> 8 & 255;
                    o[t++] = 255 & n
                }
                return "data:image/png;base64," + btoa(String.fromCharCode(...o))
            }

            function o(e) {
                let t = function(e) {
                    let {
                        PI: t,
                        min: n,
                        max: i,
                        cos: o,
                        round: u
                    } = Math, a = e[0] | e[1] << 8 | e[2] << 16, l = e[3] | e[4] << 8, c = (63 & a) / 63, s = (a >> 6 & 63) / 31.5 - 1, f = (a >> 12 & 63) / 31.5 - 1, d = (a >> 18 & 31) / 31, p = a >> 23, h = (l >> 3 & 63) / 63, y = (l >> 9 & 63) / 63, v = l >> 15, g = i(3, v ? p ? 5 : 7 : 7 & l), m = i(3, v ? 7 & l : p ? 5 : 7), b = p ? (15 & e[5]) / 15 : 1, O = (e[5] >> 4) / 15, _ = p ? 6 : 5, E = 0, S = (t, n, r) => {
                        let i = [];
                        for (let o = 0; o < n; o++)
                            for (let u = o ? 0 : 1; u * n < t * (n - o); u++) i.push(((e[_ + (E >> 1)] >> ((1 & E++) << 2) & 15) / 7.5 - 1) * r);
                        return i
                    }, w = S(g, m, d), P = S(3, 3, 1.25 * h), T = S(3, 3, 1.25 * y), R = p && S(5, 5, O), A = r(e), I = u(A > 1 ? 32 : 32 * A), C = u(A > 1 ? 32 / A : 32), x = new Uint8Array(I * C * 4), N = [], j = [];
                    for (let e = 0, r = 0; e < C; e++)
                        for (let u = 0; u < I; u++, r += 4) {
                            let a = c,
                                l = s,
                                d = f,
                                h = b;
                            for (let e = 0, n = i(g, p ? 5 : 3); e < n; e++) N[e] = o(t / I * (u + .5) * e);
                            for (let n = 0, r = i(m, p ? 5 : 3); n < r; n++) j[n] = o(t / C * (e + .5) * n);
                            for (let e = 0, t = 0; e < m; e++)
                                for (let n = e ? 0 : 1, r = 2 * j[e]; n * m < g * (m - e); n++, t++) a += w[t] * N[n] * r;
                            for (let e = 0, t = 0; e < 3; e++)
                                for (let n = e ? 0 : 1, r = 2 * j[e]; n < 3 - e; n++, t++) {
                                    let e = N[n] * r;
                                    l += P[t] * e;
                                    d += T[t] * e
                                }
                            if (p)
                                for (let e = 0, t = 0; e < 5; e++)
                                    for (let n = e ? 0 : 1, r = 2 * j[e]; n < 5 - e; n++, t++) h += R[t] * N[n] * r;
                            let y = a - 2 / 3 * l,
                                v = (3 * a - y + d) / 2,
                                O = v - d;
                            x[r] = i(0, 255 * n(1, v));
                            x[r + 1] = i(0, 255 * n(1, O));
                            x[r + 2] = i(0, 255 * n(1, y));
                            x[r + 3] = i(0, 255 * n(1, h))
                        }
                    return {
                        w: I,
                        h: C,
                        rgba: x
                    }
                }(e);
                return i(t.w, t.h, t.rgba)
            }
        },
        498964: (e, t, n) => {
            "use strict";
            n.d(t, {
                P: () => Q,
                EQ: () => X
            });
            const r = Symbol.for("@ts-pattern/matcher"),
                i = Symbol.for("@ts-pattern/isVariadic"),
                o = "@ts-pattern/anonymous-select-key",
                u = e => Boolean(e && "object" == typeof e),
                a = e => e && !!e[r],
                l = (e, t, n) => {
                    if (a(e)) {
                        const i = e[r](),
                            {
                                matched: o,
                                selections: u
                            } = i.match(t);
                        return o && u && Object.keys(u).forEach((e => n(e, u[e]))), o
                    }
                    if (u(e)) {
                        if (!u(t)) return !1;
                        if (Array.isArray(e)) {
                            if (!Array.isArray(t)) return !1;
                            let r = [],
                                o = [],
                                u = [];
                            for (const t of e.keys()) {
                                const n = e[t];
                                a(n) && n[i] ? u.push(n) : u.length ? o.push(n) : r.push(n)
                            }
                            if (u.length) {
                                if (u.length > 1) throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
                                if (t.length < r.length + o.length) return !1;
                                const e = t.slice(0, r.length),
                                    i = 0 === o.length ? [] : t.slice(-o.length),
                                    a = t.slice(r.length, 0 === o.length ? 1 / 0 : -o.length);
                                return r.every(((t, r) => l(t, e[r], n))) && o.every(((e, t) => l(e, i[t], n))) && (0 === u.length || l(u[0], a, n))
                            }
                            return e.length === t.length && e.every(((e, r) => l(e, t[r], n)))
                        }
                        return Object.keys(e).every((i => {
                            const o = e[i];
                            return (i in t || a(u = o) && "optional" === u[r]().matcherType) && l(o, t[i], n);
                            var u
                        }))
                    }
                    return Object.is(t, e)
                },
                c = e => {
                    var t, n, i;
                    return u(e) ? a(e) ? null != (t = null == (n = (i = e[r]()).getSelectionKeys) ? void 0 : n.call(i)) ? t : [] : Array.isArray(e) ? s(e, c) : s(Object.values(e), c) : []
                },
                s = (e, t) => e.reduce(((e, n) => e.concat(t(n))), []);

            function f(e) {
                return Object.assign(e, {
                    optional: () => p(e),
                    and: t => v(e, t),
                    or: t => g(e, t),
                    select: t => void 0 === t ? b(e) : b(t, e)
                })
            }

            function d(e) {
                return Object.assign((e => Object.assign(e, {
                    *[Symbol.iterator]() {
                        yield Object.assign(e, {
                            [i]: !0
                        })
                    }
                }))(e), {
                    optional: () => d(p(e)),
                    select: t => d(void 0 === t ? b(e) : b(t, e))
                })
            }

            function p(e) {
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
            const h = (e, t) => {
                    for (const n of e)
                        if (!t(n)) return !1;
                    return !0
                },
                y = (e, t) => {
                    for (const [n, r] of e.entries())
                        if (!t(r, n)) return !1;
                    return !0
                };

            function v(...e) {
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
                                [null != t ? t : o]: e
                            };
                            return {
                                matched: void 0 === n || l(n, e, ((e, t) => {
                                    r[e] = t
                                })),
                                selections: r
                            }
                        },
                        getSelectionKeys: () => [null != t ? t : o].concat(void 0 === n ? [] : c(n))
                    })
                })
            }

            function O(e) {
                return "number" == typeof e
            }

            function _(e) {
                return "string" == typeof e
            }

            function E(e) {
                return "bigint" == typeof e
            }
            const S = f(m((function(e) {
                    return !0
                }))),
                w = S,
                P = e => Object.assign(f(e), {
                    startsWith: t => {
                        return P(v(e, (n = t, m((e => _(e) && e.startsWith(n))))));
                        var n
                    },
                    endsWith: t => {
                        return P(v(e, (n = t, m((e => _(e) && e.endsWith(n))))));
                        var n
                    },
                    minLength: t => P(v(e, (e => m((t => _(t) && t.length >= e)))(t))),
                    maxLength: t => P(v(e, (e => m((t => _(t) && t.length <= e)))(t))),
                    includes: t => {
                        return P(v(e, (n = t, m((e => _(e) && e.includes(n))))));
                        var n
                    },
                    regex: t => {
                        return P(v(e, (n = t, m((e => _(e) && Boolean(e.match(n)))))));
                        var n
                    }
                }),
                T = P(m(_)),
                R = (e, t) => m((n => O(n) && e <= n && t >= n)),
                A = e => m((t => O(t) && t < e)),
                I = e => m((t => O(t) && t > e)),
                C = e => m((t => O(t) && t <= e)),
                x = e => m((t => O(t) && t >= e)),
                N = () => m((e => O(e) && Number.isInteger(e))),
                j = () => m((e => O(e) && Number.isFinite(e))),
                L = () => m((e => O(e) && e > 0)),
                U = () => m((e => O(e) && e < 0)),
                k = e => Object.assign(f(e), {
                    between: (t, n) => k(v(e, R(t, n))),
                    lt: t => k(v(e, A(t))),
                    gt: t => k(v(e, I(t))),
                    lte: t => k(v(e, C(t))),
                    gte: t => k(v(e, x(t))),
                    int: () => k(v(e, N())),
                    finite: () => k(v(e, j())),
                    positive: () => k(v(e, L())),
                    negative: () => k(v(e, U()))
                }),
                D = k(m(O)),
                M = (e, t) => m((n => E(n) && e <= n && t >= n)),
                F = e => m((t => E(t) && t < e)),
                Z = e => m((t => E(t) && t > e)),
                H = e => m((t => E(t) && t <= e)),
                B = e => m((t => E(t) && t >= e)),
                G = () => m((e => E(e) && e > 0)),
                z = () => m((e => E(e) && e < 0)),
                V = e => Object.assign(f(e), {
                    between: (t, n) => V(v(e, M(t, n))),
                    lt: t => V(v(e, F(t))),
                    gt: t => V(v(e, Z(t))),
                    lte: t => V(v(e, H(t))),
                    gte: t => V(v(e, B(t))),
                    positive: () => V(v(e, G())),
                    negative: () => V(v(e, z()))
                }),
                W = V(m(E)),
                q = f(m((function(e) {
                    return "boolean" == typeof e
                }))),
                Y = f(m((function(e) {
                    return "symbol" == typeof e
                }))),
                K = f(m((function(e) {
                    return null == e
                })));
            var Q = {
                __proto__: null,
                matcher: r,
                optional: p,
                array: function(...e) {
                    return d({
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
                                    matched: h(t, (e => l(i, e, r))),
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
                                const [o, u] = e;
                                return {
                                    matched: y(t, ((e, t) => {
                                        const n = l(o, t, r),
                                            i = l(u, e, r);
                                        return n && i
                                    })),
                                    selections: n
                                }
                            },
                            getSelectionKeys: () => 0 === e.length ? [] : [...c(e[0]), ...c(e[1])]
                        })
                    })
                },
                intersection: v,
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
                any: S,
                _: w,
                string: T,
                between: R,
                lt: A,
                gt: I,
                lte: C,
                gte: x,
                int: N,
                finite: j,
                positive: L,
                negative: U,
                number: D,
                betweenBigInt: M,
                ltBigInt: F,
                gtBigInt: Z,
                lteBigInt: H,
                gteBigInt: B,
                positiveBigInt: G,
                negativeBigInt: z,
                bigint: W,
                boolean: q,
                symbol: Y,
                nullish: K,
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
            const J = {
                matched: !1,
                value: void 0
            };

            function X(e) {
                return new $(e, J)
            }
            class $ {
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
                        u = {};
                    const a = (e, t) => {
                            i = !0, u[e] = t
                        },
                        c = !n.some((e => l(e, this.input, a))) || r && !Boolean(r(this.input)) ? J : {
                            matched: !0,
                            value: t(i ? o in u ? u[o] : u : this.input, this.input)
                        };
                    return new $(this.input, c)
                }
                when(e, t) {
                    if (this.state.matched) return this;
                    const n = Boolean(e(this.input));
                    return new $(this.input, n ? {
                        matched: !0,
                        value: t(this.input, this.input)
                    } : J)
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