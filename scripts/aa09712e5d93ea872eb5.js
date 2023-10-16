(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [24570, 33600, 84832, 96043, 71402], {
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
                var u = [];
                if (n[6]) {
                    (e = n[6].split("-")).shift();
                    for (var a, l = []; e.length;) {
                        var c = e.shift();
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
        652411: (t, e, n) => {
            "use strict";
            n.d(e, {
                O_: () => A,
                qA: () => f,
                Ji: () => N,
                uR: () => x
            });
            var r = n(667294),
                i = n(228721),
                o = n(294184),
                u = n.n(o);

            function a(t, e) {
                var n = t.x,
                    r = t.y;
                return n > e.x && n < e.x + e.width && r > e.y && r < e.y + e.height
            }

            function l(t, e) {
                return t * e * e * (e > 0 ? -1 : 1)
            }
            var c = function() {
                    function t(t) {
                        this.id = t.id, this.position = t.position, this.velocity = t.velocity, this.rotation = t.rotation, this.dragCoefficient = t.dragCoefficient, this.size = t.size, this.opacity = t.opacity, this.spriteX = t.spriteX, this.spriteY = t.spriteY, this.spriteWidth = t.spriteWidth, this.spriteHeight = t.spriteHeight, this._lastUpdatedAt = Date.now()
                    }
                    return t.prototype.getNewForces = function(t, e) {
                        var n = t.wind * e,
                            r = -t.gravity * e;
                        return {
                            x: n + l(this.dragCoefficient.x, this.velocity.x),
                            y: r + l(this.dragCoefficient.y, this.velocity.y)
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
                            u = i.y;
                        r.x += o, r.y += u;
                        var a = this.position.previewUpdate(n);
                        return a.x += r.x * n, a.y += r.y * n, a
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

            function p(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

                function n() {
                    this.constructor = t
                }
                d(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }
            var h = function() {
                return h = Object.assign || function(t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t
                }, h.apply(this, arguments)
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
                        return h(h({}, n), {
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
                }(v),
                O = function(t) {
                    function e(e, n, r, i, o, u) {
                        var a = t.call(this, e) || this;
                        a.min = n, a.max = r, a.duration = i;
                        var l = a.value / (a.max - a.min) * a.duration,
                            c = isNaN(l) ? 0 : l;
                        return a.timePassed = c < 0 ? a.duration - c : c, a.directionMultiplier = o, a.easingFunction = u, a
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

            function _(t, e) {
                return t === e ? t : Math.random() * (e - t + 1) + t
            }

            function S(t) {
                var e = Math.floor(_(0, t.length - 1));
                return [t[e], e]
            }

            function E(t, e) {
                return S([t, e])[0]
            }

            function w(t) {
                return "number" == typeof t ? {
                    x: t,
                    y: t
                } : t
            }

            function I(t) {
                return "number" == typeof t ? {
                    x: t,
                    y: t,
                    z: t
                } : t
            }

            function P(t) {
                return function(t) {
                    switch (t.type) {
                        case "static":
                            return new m(t.value);
                        case "static-random":
                            return new m(_(t.minValue, t.maxValue));
                        case "linear":
                            return new b(t.value, t.addValue);
                        case "linear-random":
                            return new b(_(t.minValue, t.maxValue), _(t.minAddValue, t.maxAddValue));
                        case "oscillating":
                            return new O(t.value, t.start, t.final, t.duration, t.direction, t.easingFunction);
                        case "oscillating-random":
                            return new O(_(t.minValue, t.maxValue), _(t.minStart, t.maxStart), _(t.minFinal, t.maxFinal), _(t.minDuration, t.maxDuration), E(t.minDirection, t.maxDirection), S(t.easingFunctions)[0])
                    }
                }(h(h({}, t), {
                    valueType: "number"
                }))
            }

            function T(t) {
                return function(t) {
                    switch (t.type) {
                        case "static":
                            var e = w(t.value);
                            return new y(new m(e.x), new m(e.y));
                        case "static-random":
                            var n = w(t.minValue),
                                r = w(t.maxValue);
                            return new y(new m(_(n.x, r.x)), new m(_(n.y, r.y)));
                        case "linear":
                            e = w(t.value);
                            var i = w(t.addValue);
                            return new y(new b(e.x, i.x), new b(e.y, i.y));
                        case "linear-random":
                            n = w(t.minValue), r = w(t.maxValue);
                            var o = w(t.minAddValue),
                                u = w(t.maxAddValue);
                            return new y(new b(_(n.x, r.x), _(o.x, u.x)), new b(_(n.y, r.y), _(o.x, u.x)));
                        case "oscillating":
                            e = w(t.value);
                            var a = w(t.start),
                                l = w(t.final),
                                c = w(t.duration),
                                s = w(t.direction);
                            return new y(new O(e.x, a.x, l.x, c.x, s.x, t.easingFunction), new O(e.y, a.y, l.y, c.x, s.y, t.easingFunction));
                        case "oscillating-random":
                            n = w(t.minValue), r = w(t.maxValue);
                            var f = w(t.minStart),
                                d = w(t.maxStart),
                                p = w(t.minFinal),
                                h = w(t.maxFinal),
                                v = w(t.minDuration),
                                g = w(t.maxDuration),
                                I = w(t.minDirection),
                                P = w(t.maxDirection);
                            return new y(new O(_(n.x, r.x), _(f.x, d.x), _(p.x, h.x), _(v.x, g.x), E(I.x, P.x), S(t.easingFunctions)[0]), new O(_(n.y, r.y), _(f.y, d.y), _(p.y, h.y), _(v.y, g.y), E(I.y, P.y), S(t.easingFunctions)[0]))
                    }
                }(h(h({}, t), {
                    valueType: "Vector2"
                }))
            }

            function R(t) {
                return function(t) {
                    switch (t.type) {
                        case "static":
                            var e = I(t.value);
                            return new g(new m(e.x), new m(e.y), new m(e.z));
                        case "static-random":
                            var n = I(t.minValue),
                                r = I(t.maxValue);
                            return new g(new m(_(n.x, r.x)), new m(_(n.y, r.y)), new m(_(n.z, r.z)));
                        case "linear":
                            e = I(t.value);
                            var i = I(t.addValue);
                            return new g(new b(e.x, i.x), new b(e.y, i.y), new b(e.z, i.z));
                        case "linear-random":
                            n = I(t.minValue), r = I(t.maxValue);
                            var o = I(t.minAddValue),
                                u = I(t.maxAddValue);
                            return new g(new b(_(n.x, r.x), _(o.x, u.x)), new b(_(n.y, r.y), _(o.y, u.y)), new b(_(n.z, r.z), _(o.z, u.z)));
                        case "oscillating":
                            e = I(t.value);
                            var a = I(t.start),
                                l = I(t.final),
                                c = I(t.duration),
                                s = I(t.direction);
                            return new g(new O(e.x, a.x, l.x, c.x, s.x, t.easingFunction), new O(e.y, a.y, l.y, c.z, s.y, t.easingFunction), new O(e.z, a.z, l.z, c.z, s.z, t.easingFunction));
                        case "oscillating-random":
                            n = I(t.minValue), r = I(t.maxValue);
                            var f = I(t.minStart),
                                d = I(t.maxStart),
                                p = I(t.minFinal),
                                h = I(t.maxFinal),
                                v = I(t.minDuration),
                                y = I(t.maxDuration),
                                w = I(t.minDirection),
                                P = I(t.maxDirection);
                            return new g(new O(_(n.x, r.x), _(f.x, d.x), _(p.x, h.x), _(v.x, y.x), E(w.x, P.x), S(t.easingFunctions)[0]), new O(_(n.y, r.y), _(f.y, d.y), _(p.y, h.y), _(v.y, y.y), E(w.y, P.y), S(t.easingFunctions)[0]), new O(_(n.z, r.z), _(f.z, d.z), _(p.z, h.z), _(v.z, y.z), E(w.z, P.z), S(t.easingFunctions)[0]))
                    }
                }(h(h({}, t), {
                    valueType: "Vector3"
                }))
            }

            function C(t, e, n, r, i) {
                var o = function(t, e) {
                        return h(h({
                            id: e
                        }, s), t)
                    }(e, t),
                    u = T(o.size),
                    a = function(t, e) {
                        if (null != t) {
                            var n = e.sprites.findIndex((function(e) {
                                return n = e, "string" == typeof(r = t) ? n.src === r && n.colorize : n.src === r.src && n.colorize === r.colorize;
                                var n, r
                            }));
                            if (-1 !== n) return [t, n]
                        }
                        return S(e.sprites)
                    }(r, n),
                    l = a[0],
                    f = a[1],
                    d = function(t, e, n) {
                        if (! function(t) {
                                return "string" == typeof t || t.colorize
                            }(t)) return 0;
                        var r = null != e ? n.colors.findIndex((function(t) {
                            return t === e
                        })) : -1;
                        return -1 !== r ? r : Math.floor(_(0, n.colors.length - 1))
                    }(null != r ? r : l, i, n);
                return new c({
                    id: t,
                    position: T(o.position),
                    velocity: T(o.velocity),
                    rotation: R(o.rotation),
                    dragCoefficient: T(o.dragCoefficient),
                    size: u,
                    opacity: P(o.opacity),
                    spriteX: d * n.spriteWidth + 2 * d,
                    spriteY: f * n.spriteHeight + 2 * f,
                    spriteWidth: n.spriteWidth,
                    spriteHeight: n.spriteHeight
                })
            }
            var A = r.forwardRef((function(t, e) {
                var o = t.className,
                    u = t.environment,
                    l = t.onClick,
                    c = t.onMouseDown,
                    s = t.onMouseMove,
                    f = t.onMouseUp,
                    d = t.onBeforeRender,
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
                    b = r.useRef(0),
                    O = r.useRef(0),
                    _ = r.useCallback((function() {
                        var t = y.current;
                        if (null != t) {
                            var e = t.getContext("2d");
                            if (null != e) {
                                e.clearRect(0, 0, t.width, t.height), null == d || d(e), g.current.forEach((function(n, r) {
                                    var i = n.confetti,
                                        o = n.spriteCanvas;
                                    i.update(u), i.draw(o, e), i.shouldDestroy(t, u) && g.current.delete(r)
                                })), null == p || p(e), g.current.size > 0 ? m.current = window.requestAnimationFrame(_) : (e.clearRect(0, 0, t.width, t.height), m.current = null);
                                var n = Date.now();
                                0 !== b.current && (O.current = 1e3 / (n - b.current)), b.current = n
                            }
                        }
                    }), [u, p, d]);
                r.useEffect((function() {
                    null != m.current && (window.cancelAnimationFrame(m.current), m.current = window.requestAnimationFrame(_))
                }), [_]);
                var S = r.useCallback((function(t, e) {
                        g.current.set(t.id, {
                            confetti: t,
                            spriteCanvas: e
                        }), null == m.current && _()
                    }), [_]),
                    E = r.useCallback((function(t, e, n, r, o) {
                        var u, a = C(null !== (u = t.id) && void 0 !== u ? u : (0, i.Z)(), t, n, r, o);
                        return S(a, e), a
                    }), [S]),
                    w = r.useCallback((function(t) {
                        g.current.delete(t)
                    }), []),
                    I = r.useCallback((function() {
                        return g.current.clear()
                    }), []),
                    P = r.useCallback((function() {
                        return y.current
                    }), []);
                r.useImperativeHandle(e, (function() {
                    return {
                        createConfetti: E,
                        addConfetti: S,
                        deleteConfetti: w,
                        clearConfetti: I,
                        getCanvas: P
                    }
                }), [E, S, w, I, P]);
                var T = r.useCallback((function(t, e) {
                        var n, r, i = e.clickHandler,
                            o = e.mouseHandler;
                        if (null != i || null != o) {
                            var l = null === (n = y.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                            if (null != l) {
                                var c = function(t, e) {
                                    if (null == e) throw new Error("element should not be null");
                                    var n = e.getBoundingClientRect();
                                    return {
                                        x: t.clientX - n.left,
                                        y: t.clientY - n.top
                                    }
                                }(t, y.current);
                                if (a(c, {
                                        x: l.left,
                                        y: l.top,
                                        width: l.width,
                                        height: l.height
                                    })) {
                                    if (null != o) return o(t);
                                    if (null != i) {
                                        var s = -1e3 / O.current * 2,
                                            f = function(t, e) {
                                                for (var n = 0, r = Array.from(t.values()); n < r.length; n++) {
                                                    var i = r[n];
                                                    if (null != i && e(i)) return i
                                                }
                                                return null
                                            }(g.current, (function(t) {
                                                var e = t.confetti,
                                                    n = e.previewPositionUpdate(u, s);
                                                return a(c, {
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
                    }), [u]),
                    R = r.useCallback((function(t) {
                        return T(t, {
                            clickHandler: l
                        })
                    }), [T, l]),
                    A = r.useCallback((function(t) {
                        return T(t, {
                            clickHandler: c
                        })
                    }), [T, c]),
                    N = r.useCallback((function(t) {
                        return T(t, {
                            mouseHandler: s
                        })
                    }), [T, s]),
                    x = r.useCallback((function(t) {
                        return T(t, {
                            mouseHandler: f
                        })
                    }), [T, f]);
                return r.useEffect((function() {
                    var t = function(t, e, n) {
                        null != n && window.addEventListener(t, e)
                    };
                    return t("click", R, l), t("mousedown", A, c), t("mousemove", N, s), t("mouseup", x, f),
                        function() {
                            window.removeEventListener("click", R), window.removeEventListener("mousedown", A), window.removeEventListener("mousemove", N), window.removeEventListener("mouseup", N)
                        }
                }), [R, A, N, x, l, c, s, f]), r.useEffect((function() {
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
                }), []), r.createElement("canvas", h({}, v, {
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
            var N = r.forwardRef((function(t, e) {
                var n, o = t.className,
                    a = t.visible,
                    l = void 0 !== a && a,
                    c = t.sprites,
                    s = t.colors,
                    f = t.spriteWidth,
                    d = t.spriteHeight,
                    p = r.useRef(null),
                    h = r.useRef([]),
                    v = r.useRef(!1),
                    y = r.useRef({});
                r.useImperativeHandle(e, (function() {
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
                        addReadyListener: function(t) {
                            var e = (0, i.Z)();
                            return y.current[e] = t, e
                        },
                        removeReadyListener: function(t) {
                            delete y.current[t]
                        },
                        isReady: v.current
                    }
                }), [s, d, f]);
                var g = r.useCallback((function() {
                        var t = p.current,
                            e = null == t ? void 0 : t.getContext("2d", {
                                willReadFrequently: !0
                            });
                        null != e && null != t && (e.clearRect(0, 0, t.width, t.height),
                            h.current.forEach((function(t, n) {
                                var r = function(r, i) {
                                    var o = f * i + 2 * i,
                                        u = d * n + 2 * n;
                                    if (e.drawImage(t.image, o, u, f, d), null != r) {
                                        for (var a = e.getImageData(o, u, f, d), l = function(t) {
                                                "#" === t[0] && (t = t.slice(1));
                                                var e = parseInt(t, 16);
                                                return {
                                                    r: e >> 16 & 255,
                                                    g: e >> 8 & 255,
                                                    b: 255 & e
                                                }
                                            }(r), c = 0; c < a.data.length; c += 4) a.data[c] = l.r, a.data[c + 1] = l.g, a.data[c + 2] = l.b;
                                        e.putImageData(a, o, u)
                                    }
                                };
                                t.colorize ? s.forEach((function(t, e) {
                                    return r(t, e)
                                })) : r(null, 0)
                            })))
                    }), [s, d, f]),
                    m = r.useCallback((function() {
                        var t = c.map((function(t) {
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
                            h.current = t.map((function(t) {
                                return {
                                    colorize: t.colorize,
                                    image: t.image,
                                    src: t.src
                                }
                            }))
                        }))
                    }), [c]),
                    b = r.useCallback((function(t) {
                        for (var e in y.current) y.current[e](t)
                    }), []),
                    O = r.useCallback((function() {
                        return function(t, e, n, r) {
                            return new(n || (n = Promise))((function(i, o) {
                                function u(t) {
                                    try {
                                        l(r.next(t))
                                    } catch (t) {
                                        o(t)
                                    }
                                }

                                function a(t) {
                                    try {
                                        l(r.throw(t))
                                    } catch (t) {
                                        o(t)
                                    }
                                }

                                function l(t) {
                                    var e;
                                    t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                                        t(e)
                                    }))).then(u, a)
                                }
                                l((r = r.apply(t, e || [])).next())
                            }))
                        }(void 0, void 0, void 0, (function() {
                            return function(t, e) {
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
                                                a = e.call(t, u)
                                            } catch (t) {
                                                a = [6, t], r = 0
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
                            }(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, m()];
                                    case 1:
                                        return t.sent(), g(), v.current = !0, b(!0), [2]
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

            function x(t, e) {
                var n, i = r.useState(null !== (n = null == e ? void 0 : e.isReady) && void 0 !== n && n),
                    o = i[0],
                    u = i[1];
                r.useEffect((function() {
                    var t = null == e ? void 0 : e.addReadyListener(u);
                    return function() {
                        null != t && (null == e || e.removeReadyListener(t))
                    }
                }), [e]);
                var a = r.useCallback((function(n, r) {
                        var i = void 0 === r ? {} : r,
                            o = i.sprite,
                            u = i.color,
                            a = null == e ? void 0 : e.getCreateData(),
                            l = null == e ? void 0 : e.getCanvas();
                        if (null != l && null != a && 0 !== a.sprites.length) return null == t ? void 0 : t.createConfetti(n, l, a, o, u)
                    }), [t, e]),
                    l = r.useCallback((function(t, e, n) {
                        for (var r = [], i = 0; i < e; i++) {
                            var o = a(t, n);
                            o && r.push(o)
                        }
                        return r
                    }), [a]),
                    c = r.useCallback((function(n) {
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
                        createConfetti: a,
                        createMultipleConfetti: l,
                        addConfetti: c,
                        clearConfetti: f,
                        deleteConfetti: s,
                        isReady: o && null != e && null != t
                    }
                }), [c, f, t, a, l, s, o, e])
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
                            this[u = (this._front - 1 & i - 1 ^ i) - i] = arguments[r];
                            e++;
                            this._length = e;
                            this._front = u
                        }
                        return e
                    }
                    var o = this._front;
                    for (r = n - 1; r >= 0; r--) {
                        var u;
                        this[u = (o - 1 & i - 1 ^ i) - i] = arguments[r];
                        o = u
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
                    var u = o - (e + o & n - 1);
                    r(i, e, this, 0, u);
                    r(i, 0, this, u, o - u)
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
        460122: (t, e, n) => {
            t.exports = n.p + "fdbcc8efcf1ba7be0df5fa425a5df5b3.svg"
        },
        873994: (t, e, n) => {
            t.exports = n.p + "b2ce83d133a3d9fa54411e732f2fa74c.svg"
        },
        413369: (t, e, n) => {
            t.exports = n.p + "b820b6002cb6ff7c3c2fb123d72c7866.svg"
        },
        132354: (t, e, n) => {
            t.exports = n.p + "a9009aaba5bfab576a517f6915b3c0b6.svg"
        },
        824390: t => {
            "use strict";
            t.exports = function(t, e) {
                var n = e.length,
                    r = t.length;
                if (r > n) return !1;
                if (r === n) return t === e;
                t: for (var i = 0, o = 0; i < r; i++) {
                    for (var u = t.charCodeAt(i); o < n;)
                        if (e.charCodeAt(o++) === u) continue t;
                    return !1
                }
                return !0
            }
        },
        753074: t => {
            "use strict";
            var e = {
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
            t.exports = function(t, i, o) {
                if ("string" != typeof i) {
                    var u = Object.getOwnPropertyNames(i);
                    r && (u = u.concat(Object.getOwnPropertySymbols(i)));
                    for (var a = 0; a < u.length; ++a)
                        if (!(e[u[a]] || n[u[a]] || o && o[u[a]])) try {
                            t[u[a]] = i[u[a]]
                        } catch (t) {}
                }
                return t
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
                u = n(571131),
                a = n(307518),
                l = n(285022),
                c = n(406557);
            t.exports = function(t, e, n) {
                var s = -1;
                e = r(e.length ? e : [c], a(i));
                var f = o(t, (function(t, n, i) {
                    return {
                        criteria: r(e, (function(e) {
                            return e(t)
                        })),
                        index: ++s,
                        value: t
                    }
                }));
                return u(f, (function(t, e) {
                    return l(t, e, n)
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
                u = i ? function(t, e) {
                    return i(t, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: r(e),
                        writable: !0
                    })
                } : o;
            t.exports = u
        },
        571131: t => {
            t.exports = function(t, e) {
                var n = t.length;
                t.sort(e);
                for (; n--;) t[n] = t[n].value;
                return t
            }
        },
        626393: (t, e, n) => {
            var r = n(733448);
            t.exports = function(t, e) {
                if (t !== e) {
                    var n = void 0 !== t,
                        i = null === t,
                        o = t == t,
                        u = r(t),
                        a = void 0 !== e,
                        l = null === e,
                        c = e == e,
                        s = r(e);
                    if (!l && !s && !u && t > e || u && a && c && !l && !s || i && a && c || !n && c || !o) return 1;
                    if (!i && !u && !s && t < e || s && n && o && !i && !u || l && n && o || !a && o || !c) return -1
                }
                return 0
            }
        },
        285022: (t, e, n) => {
            var r = n(626393);
            t.exports = function(t, e, n) {
                for (var i = -1, o = t.criteria, u = e.criteria, a = o.length, l = n.length; ++i < a;) {
                    var c = r(o[i], u[i]);
                    if (c) {
                        return i >= l ? c : c * ("desc" == n[i] ? -1 : 1)
                    }
                }
                return t.index - e.index
            }
        },
        545357: (t, e, n) => {
            var r = n(896874),
                i = Math.max;
            t.exports = function(t, e, n) {
                e = i(void 0 === e ? t.length - 1 : e, 0);
                return function() {
                    for (var o = arguments, u = -1, a = i(o.length - e, 0), l = Array(a); ++u < a;) l[u] = o[e + u];
                    u = -1;
                    for (var c = Array(e + 1); ++u < e;) c[u] = o[u];
                    c[e] = n(l);
                    return r(t, this, c)
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
        189734: (t, e, n) => {
            var r = n(121078),
                i = n(882689),
                o = n(105976),
                u = n(816612),
                a = o((function(t, e) {
                    if (null == t) return [];
                    var n = e.length;
                    n > 1 && u(t, e[0], e[1]) ? e = [] : n > 2 && u(e[0], e[1], e[2]) && (e = [e[0]]);
                    return i(t, r(e, 1), [])
                }));
            t.exports = a
        },
        823493: (t, e, n) => {
            var r = n(23279),
                i = n(513218);
            t.exports = function(t, e, n) {
                var o = !0,
                    u = !0;
                if ("function" != typeof t) throw new TypeError("Expected a function");
                if (i(n)) {
                    o = "leading" in n ? !!n.leading : o;
                    u = "trailing" in n ? !!n.trailing : u
                }
                return r(t, e, {
                    leading: o,
                    maxWait: e,
                    trailing: u
                })
            }
        },
        620745: (t, e, n) => {
            "use strict";
            var r = n(973935);
            e.s = r.createRoot;
            r.hydrateRoot
        },
        971402: (t, e, n) => {
            "use strict";
            n.d(e, {
                Zy: () => f,
                vq: () => d,
                jW: () => p
            });
            var r = n(744564),
                i = n(26468),
                o = n(120415),
                u = n(73105),
                a = n(2590);

            function l(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function c(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        l(t, e, n[e])
                    }))
                }
                return t
            }

            function s(t) {
                r.Z.dispatch({
                    type: "CONTEXT_MENU_OPEN",
                    contextMenu: t
                })
            }

            function f(t) {
                (0, n(973935).flushSync)((function() {
                    r.Z.wait((function() {
                        r.Z.dispatch({
                            type: "CONTEXT_MENU_CLOSE"
                        }).finally(t)
                    }))
                }))
            }

            function d(t, e, n, r) {
                t.stopPropagation();
                if (null == t.currentTarget.contains || t.currentTarget.contains(t.target)) {
                    var l, f, d = 0,
                        p = 0;
                    if ("pageX" in t) {
                        d = t.pageX;
                        p = t.pageY
                    }
                    if (0 === d && 0 === p) {
                        var h, v = null === (h = t.target) || void 0 === h ? void 0 : h.getBoundingClientRect(),
                            y = null != v ? v : {},
                            g = y.left,
                            m = void 0 === g ? 0 : g,
                            b = y.top,
                            O = void 0 === b ? 0 : b,
                            _ = y.width,
                            S = void 0 === _ ? 0 : _,
                            E = y.height;
                        d = m + S / 2;
                        p = O + (void 0 === E ? 0 : E) / 2
                    }
                    var w = {
                        render: e,
                        renderLazy: r,
                        target: null !== (l = t.target) && void 0 !== l ? l : t.currentTarget,
                        rect: new DOMRect(d, p, 0, 0),
                        config: c({
                            context: __OVERLAY__ ? a.IlC.OVERLAY : null !== (f = (0, i.GB)()) && void 0 !== f ? f : a.IlC.APP
                        }, n)
                    };
                    if ((null == n ? void 0 : n.enableSpellCheck) && (0, o.nI)()) var I = (0, u.RD)((function() {
                        I();
                        s(w)
                    }));
                    else {
                        t.preventDefault();
                        s(w)
                    }
                }
            }

            function p(t, e, n) {
                d(t, void 0, n, e)
            }
        },
        810978: (t, e, n) => {
            "use strict";
            n.d(e, {
                GZ: () => h,
                Gn: () => y,
                Y2: () => g,
                mE: () => m
            });
            var r = n(281110),
                i = n(744564),
                o = n(973889),
                u = n(615796),
                a = n(264628),
                l = n(673679),
                c = n(2590),
                s = n(203600);

            function f(t, e, n, r, i, o, u) {
                try {
                    var a = t[o](u),
                        l = a.value
                } catch (t) {
                    n(t);
                    return
                }
                a.done ? e(l) : Promise.resolve(l).then(r, i)
            }

            function d(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = t.apply(e, n);

                        function u(t) {
                            f(o, r, i, u, a, "next", t)
                        }

                        function a(t) {
                            f(o, r, i, u, a, "throw", t)
                        }
                        u(void 0)
                    }))
                }
            }
            var p = function(t, e) {
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
                                        if (!(i = u.trys,
                                                i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
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
                                o = e.call(t, u)
                            } catch (t) {
                                o = [6, t];
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

            function h(t, e, n, r, i) {
                return v.apply(this, arguments)
            }

            function v() {
                return (v = d((function(t, e, n, s, f) {
                    var d, h, v, y;
                    return p(this, (function(p) {
                        switch (p.label) {
                            case 0:
                                i.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH",
                                    skuId: t
                                });
                                p.label = 1;
                            case 1:
                                p.trys.push([1, 5, , 6]);
                                d = {
                                    url: c.ANM.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS(t),
                                    oldFormErrors: !0
                                };
                                h = {};
                                null != e && (h.country_code = e);
                                null != n && (h.payment_source_id = n);
                                null != s && (h.include_unpublished = s);
                                null != f && (h.revenue_surface = f);
                                d.query = h;
                                return u.Z.ipCountryCodeLoaded ? [3, 3] : [4, (0, l.GE)()];
                            case 2:
                                p.sent();
                                p.label = 3;
                            case 3:
                                return [4, r.ZP.get(d)];
                            case 4:
                                v = p.sent();
                                i.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                                    skuId: t,
                                    subscriptionPlans: v.body
                                });
                                return [3, 6];
                            case 5:
                                y = p.sent();
                                i.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH_FAILURE",
                                    skuId: t
                                });
                                (0, a.q2)(y);
                                throw new o.Z(y);
                            case 6:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function y(t, e) {
                return Promise.all(t.filter((function(t) {
                    return t !== s.Si.NONE
                })).map((function(t) {
                    return h(t, e)
                })))
            }

            function g(t, e, n) {
                return Promise.all(s.YQ.filter((function(t) {
                    return t !== s.Si.NONE
                })).map((function(r) {
                    return h(r, t, e, void 0, n)
                })))
            }

            function m() {
                i.Z.dispatch({
                    type: "SUBSCRIPTION_PLANS_RESET"
                })
            }
        },
        973889: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => f
            });
            var r = n(281110),
                i = n(2590),
                o = n(473708);

            function u(t) {
                u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return u(t)
            }

            function a(t, e) {
                return !e || "object" !== c(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function l(t, e) {
                l = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return l(t, e)
            }
            var c = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function s(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = u(t);
                    if (e) {
                        var i = u(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return a(this, n)
                }
            }
            var f = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && l(t, e)
                }(n, t);
                var e = s(n);

                function n(t, r) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    return e.call(this, t, r, null != r ? o.Z.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: i.yXt.STATUS,
                        details: "".concat(r)
                    }) : o.Z.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: i.yXt.STATUS
                    }))
                }
                return n
            }(r.ZP.V6OrEarlierAPIError)
        },
        320142: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => a
            });
            var r = n(120415);

            function i(t, e, n, r, i, o, u) {
                try {
                    var a = t[o](u),
                        l = a.value
                } catch (t) {
                    n(t);
                    return
                }
                a.done ? e(l) : Promise.resolve(l).then(r, i)
            }

            function o(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var u = t.apply(e, n);

                        function a(t) {
                            i(u, r, o, a, l, "next", t)
                        }

                        function l(t) {
                            i(u, r, o, a, l, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }
            var u = function(t, e) {
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
                                if (n = 1,
                                    r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
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
                                o = e.call(t, u)
                            } catch (t) {
                                o = [6, t];
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

            function a(t, e) {
                return l.apply(this, arguments)
            }

            function l() {
                return (l = o((function(t, e) {
                    var i, o, a, l;
                    return u(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                0
                                ;
                                return [4, Promise.all([n.e(40532), n.e(39685), n.e(47007), n.e(6543), n.e(29342), n.e(84832), n.e(27499), n.e(79913), n.e(64466), n.e(92465), n.e(45353), n.e(10675), n.e(73727), n.e(52555), n.e(61953), n.e(84441), n.e(14990), n.e(33227), n.e(24501), n.e(25066)]).then(n.bind(n, 624501))];
                            case 1:
                                i = u.sent(), o = i.default;
                                if (null != (a = o(t, {
                                        skipExtensionCheck: e,
                                        analyticsLocations: []
                                    }))) a(null);
                                else if (r.FB) window.open(t);
                                else {
                                    (l = document.createElement("a")).href = t;
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
        83797: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => i
            });
            var r = n(2590);

            function i(t) {
                return null != t && t.type !== r.IIU.CUSTOM_STATUS && (null != t.details || null != t.assets && (null != t.assets.large_image || null != t.assets.small_text) || null != t.party || null != t.secrets || null != t.state)
            }
        },
        396043: (t, e, n) => {
            "use strict";
            n.d(e, {
                v_: () => N,
                JS: () => A,
                hH: () => R,
                AB: () => x,
                ZP: () => M,
                oG: () => k,
                kO: () => U,
                yw: () => j
            });
            var r = n(496486),
                i = n.n(r),
                o = n(940060),
                u = n(382060),
                a = n(664625),
                l = n(61209),
                c = n(5544),
                s = n(27851),
                f = n(21372),
                d = n(567403),
                p = n(973469),
                h = n(682776),
                v = n(491260),
                y = n(563367),
                g = n(715107),
                m = n(464187),
                b = n(407561),
                O = n(652591),
                _ = n(563135),
                S = n(671723);
            var E = n(2590),
                w = n(897196);

            function I(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function P(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        I(t, e, n[e])
                    }))
                }
                return t
            }

            function T(t) {
                var e = 0;
                for (var n in t) e += 1;
                return e
            }

            function R(t) {
                if (null == t) return null;
                var e = d.Z.getGuild(t);
                if (null == e) return null;
                var n, r = a.default.getId(),
                    i = f.ZP.getMember(t, r),
                    o = c.ZP.getChannels(t),
                    u = o[c.sH].length,
                    l = o[c.Zb].length,
                    p = b.Z.getVoiceStates(t);
                return {
                    guild_id: e.id,
                    guild_size_total: s.Z.getMemberCount(t),
                    guild_num_channels: u + l,
                    guild_num_text_channels: u,
                    guild_num_voice_channels: l,
                    guild_num_roles: T(e.roles),
                    guild_member_num_roles: null != i ? i.roles.length : 0,
                    guild_member_perms: String(null !== (n = h.Z.getGuildPermissions(e)) && void 0 !== n ? n : _.ZP.NONE),
                    guild_is_vip: e.hasFeature(E.oNc.VIP_REGIONS),
                    is_member: null != i,
                    num_voice_channels_active: T(p)
                }
            }

            function C(t, e) {
                return {
                    channel_static_route: e,
                    channel_hidden: !1
                }
            }

            function A(t) {
                if (null == t) return null;
                var e = l.Z.getChannel(t);
                return null == e ? null : N(e)
            }

            function N(t) {
                if (null == t) return null;
                var e, n = !1,
                    r = t.getGuildId();
                if (null != r) {
                    var i = function(t) {
                        if (null == t) return !1;
                        var e = t.permissionOverwrites[r];
                        return null != e && o.Z.has(e.deny, E.Plq.VIEW_CHANNEL)
                    };
                    n = u.Ec.has(t.type) && null != t.parent_id ? i(l.Z.getChannel(t.parent_id)) : i(t)
                }
                return {
                    channel_id: t.id,
                    channel_type: t.type,
                    channel_size_total: t.isPrivate() ? t.recipients.length : 0,
                    channel_member_perms: String(null != r && null !== (e = h.Z.getChannelPermissions(t)) && void 0 !== e ? e : _.ZP.NONE),
                    channel_hidden: n
                }
            }

            function x(t) {
                if (null == t) return null;
                var e = l.Z.getChannel(t);
                if (null == e) return null;
                var n, r = p.Z.isVideoEnabled(),
                    i = y.Z.getMediaSessionId();
                return P({
                    channel_id: e.id,
                    channel_type: e.type,
                    guild_id: e.getGuildId(),
                    media_session_id: i
                }, U(e.getGuildId(), e.id, r), {
                    game_name: null != (n = S.ZP.getCurrentGameForAnalytics()) ? n.name : null,
                    game_id: null != n ? n.id : null
                })
            }

            function L(t, e) {
                return null == t ? null != e ? e : null : t.isPrivate() ? null : null !== (r = null !== (n = t.getGuildId()) && void 0 !== n ? n : e) && void 0 !== r ? r : null;
                var n, r
            }

            function j(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (!O.default.isThrottled(t)) {
                    var r = !("location" in e) || e.location !== E.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
                        i = "guild_id" in e ? e.guild_id : r ? m.Z.getGuildId() : null,
                        o = "channel_id" in e ? e.channel_id : r ? g.Z.getChannelId(i) : null,
                        u = l.Z.getChannel(o),
                        a = L(u, i),
                        c = P({}, e, R(a), null != i && null != o && (0, w.AB)(o) ? C(0, o) : N(u));
                    O.default.track(t, c, {
                        flush: n
                    })
                }
            }

            function U(t, e, n) {
                var r = {
                    voice_state_count: 0,
                    video_stream_count: 0,
                    video_enabled: n
                };
                i()(b.Z.getVoiceStates(t)).filter((function(t) {
                    return t.channelId === e
                })).filter((function(t) {
                    return t.userId !== a.default.getId()
                })).forEach((function(t) {
                    r.voice_state_count++;
                    (t.selfVideo || t.selfStream) && r.video_stream_count++
                }));
                return r
            }

            function k(t, e) {
                var n = {
                    custom_status_count: 0
                };
                i()(b.Z.getVoiceStates(t)).forEach((function(t) {
                    t.channelId === e && null != v.Z.findActivity(t.userId, (function(t) {
                        return t.type === E.IIU.CUSTOM_STATUS
                    })) && n.custom_status_count++
                }));
                return n
            }
            const M = {
                trackWithMetadata: j,
                getVoiceStateMetadata: U
            }
        },
        272200: (t, e, n) => {
            "use strict";
            n.d(e, {
                Qi: () => r,
                iw: () => i,
                Kw: () => o,
                Vh: () => u,
                ub: () => a,
                bB: () => l
            });
            var r, i, o, u, a, l;
            ! function(t) {
                t[t.BUILT_IN = 0] = "BUILT_IN";
                t[t.APPLICATION = 1] = "APPLICATION"
            }(r || (r = {}));
            ! function(t) {
                t[t.BUILT_IN = 0] = "BUILT_IN";
                t[t.BUILT_IN_TEXT = 1] = "BUILT_IN_TEXT";
                t[t.BUILT_IN_INTEGRATION = 2] = "BUILT_IN_INTEGRATION";
                t[t.BOT = 3] = "BOT";
                t[t.PLACEHOLDER = 4] = "PLACEHOLDER"
            }(i || (i = {}));
            ! function(t) {
                t[t.ROLE = 1] = "ROLE";
                t[t.USER = 2] = "USER";
                t[t.CHANNEL = 3] = "CHANNEL"
            }(o || (o = {}));
            ! function(t) {
                t.DISCOVERY = "discovery";
                t.SUGGESTION = "suggestion";
                t.MENTION = "mention";
                t.PASTE = "paste";
                t.RECALL = "recall";
                t.POPULAR_COMMANDS = "popular_commands";
                t.MJ_CHAT_BAR = "mj_chat_bar";
                t.QUERY = "query"
            }(u || (u = {}));
            ! function(t) {
                t[t.BUILT_IN = 1] = "BUILT_IN";
                t[t.FRECENCY = 2] = "FRECENCY";
                t[t.APP = 3] = "APP"
            }(a || (a = {}));
            ! function(t) {
                t[t.CHAT = 0] = "CHAT";
                t[t.APPLICATION_LAUNCHER = 1] = "APPLICATION_LAUNCHER"
            }(l || (l = {}))
        },
        255875: (t, e, n) => {
            "use strict";
            n.d(e, {
                E: () => p,
                h: () => h
            });
            var r = n(785893),
                i = n(667294),
                o = n(652411),
                u = n(318715),
                a = n(316878),
                l = n(2590);

            function c(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function s(t) {
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
            }

            function f(t, e) {
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
            var d = {
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
                        return l.dG4
                    },
                    removeClickListener: l.dG4
                },
                p = i.createContext(d);

            function h(t) {
                var e = t.children,
                    n = t.confettiCanvas,
                    l = t.spriteCanvas,
                    c = t.baseConfig,
                    h = t.addClickListener,
                    v = t.removeClickListener,
                    y = (0, o.uR)(n, l),
                    g = (0,
                        u.ZP)([a.Z], (function() {
                        return a.Z.useReducedMotion
                    })),
                    m = i.useMemo((function() {
                        return g ? d : {
                            confettiCanvas: n,
                            cannon: y,
                            createConfetti: function(t, e) {
                                return y.createConfetti(s({}, c, t), e)
                            },
                            createConfettiAt: function(t, e, n, r) {
                                return y.createConfetti(s(f(s({}, c), {
                                    position: {
                                        type: "static",
                                        value: {
                                            x: t,
                                            y: e
                                        }
                                    }
                                }), n), r)
                            },
                            createMultipleConfetti: function(t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                                    n = arguments.length > 2 ? arguments[2] : void 0;
                                return y.createMultipleConfetti(s({}, c, t), e, n)
                            },
                            createMultipleConfettiAt: function(t, e, n) {
                                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                                    i = arguments.length > 4 ? arguments[4] : void 0;
                                return y.createMultipleConfetti(s(f(s({}, c), {
                                    position: {
                                        type: "static",
                                        value: {
                                            x: t,
                                            y: e
                                        }
                                    }
                                }), n), r, i)
                            },
                            addClickListener: h,
                            removeClickListener: v
                        }
                    }), [h, c, y, n, g, v]);
                return (0, r.jsx)(p.Provider, {
                    value: m,
                    children: e
                })
            }
        },
        165586: (t, e, n) => {
            "use strict";
            n.d(e, {
                LY: () => r,
                aW: () => f,
                ws: () => i,
                tI: () => o,
                L9: () => d,
                no: () => p,
                ND: () => h,
                WC: () => y,
                z8: () => g,
                km: () => b,
                k0: () => O,
                af: () => _
            });
            var r, i, o, u, a = n(2590),
                l = n(203600),
                c = n(473708);

            function s(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }! function(t) {
                t[t.RESOLUTION_480 = 480] = "RESOLUTION_480";
                t[t.RESOLUTION_720 = 720] = "RESOLUTION_720";
                t[t.RESOLUTION_1080 = 1080] = "RESOLUTION_1080";
                t[t.RESOLUTION_1440 = 1440] = "RESOLUTION_1440";
                t[t.RESOLUTION_SOURCE = 0] = "RESOLUTION_SOURCE"
            }(r || (r = {}));

            function f(t) {
                switch (t) {
                    case r.RESOLUTION_480:
                        return r.RESOLUTION_480;
                    case r.RESOLUTION_720:
                        return r.RESOLUTION_720;
                    case r.RESOLUTION_1080:
                        return r.RESOLUTION_1080;
                    case r.RESOLUTION_SOURCE:
                        return r.RESOLUTION_SOURCE;
                    default:
                        throw new Error("Unknown resolution: ".concat(t))
                }
            }! function(t) {
                t[t.FPS_5 = 5] = "FPS_5";
                t[t.FPS_15 = 15] = "FPS_15";
                t[t.FPS_30 = 30] = "FPS_30";
                t[t.FPS_60 = 60] = "FPS_60"
            }(i || (i = {}));
            ! function(t) {
                t[t.PRESET_VIDEO = 1] = "PRESET_VIDEO";
                t[t.PRESET_DOCUMENTS = 2] = "PRESET_DOCUMENTS";
                t[t.PRESET_CUSTOM = 3] = "PRESET_CUSTOM"
            }(o || (o = {}));

            function d(t) {
                switch (t) {
                    case i.FPS_5:
                        return i.FPS_5;
                    case i.FPS_15:
                        return i.FPS_15;
                    case i.FPS_30:
                        return i.FPS_30;
                    case i.FPS_60:
                        return i.FPS_60;
                    default:
                        throw new Error("Unknown frame rate: ".concat(t))
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

            function v(t, e) {
                return {
                    value: t,
                    get label() {
                        return null != e ? e() : t
                    }
                }
            }
            var y = [v(r.RESOLUTION_720), v(r.RESOLUTION_1080), v(r.RESOLUTION_1440), v(r.RESOLUTION_SOURCE, (function() {
                    return c.Z.Messages.SCREENSHARE_SOURCE
                }))],
                g = [v(r.RESOLUTION_720), v(r.RESOLUTION_1080), v(r.RESOLUTION_1440)],
                m = function(t) {
                    return "".concat(t, "p")
                },
                b = [v(r.RESOLUTION_480, (function() {
                    return m(r.RESOLUTION_480)
                })), v(r.RESOLUTION_720, (function() {
                    return m(r.RESOLUTION_720)
                })), v(r.RESOLUTION_1080, (function() {
                    return m(r.RESOLUTION_1080)
                })), v(r.RESOLUTION_1440, (function() {
                    return m(r.RESOLUTION_1440)
                })), v(r.RESOLUTION_SOURCE, (function() {
                    return c.Z.Messages.SCREENSHARE_SOURCE
                }))],
                O = [v(i.FPS_15), v(i.FPS_30), v(i.FPS_60)],
                _ = [v(i.FPS_15, (function() {
                    return c.Z.Messages.STREAM_FPS_OPTION.format({
                        value: i.FPS_15
                    })
                })), v(i.FPS_30, (function() {
                    return c.Z.Messages.STREAM_FPS_OPTION.format({
                        value: i.FPS_30
                    })
                })), v(i.FPS_60, (function() {
                    return c.Z.Messages.STREAM_FPS_OPTION.format({
                        value: i.FPS_60
                    })
                }))]
        },
        773411: (t, e, n) => {
            "use strict";
            n.d(e, {
                N2: () => f,
                YM: () => d,
                Dx: () => p,
                jD: () => h,
                bO: () => v,
                Xp: () => y,
                fV: () => g
            });
            var r = n(202351),
                i = n(747820),
                o = n(260561),
                u = n(621696),
                a = n(5544),
                l = n(567403),
                c = n(2590);

            function s(t, e, n) {
                return e.getChannels(t)[a.sH].filter((function(e) {
                    var r = e.channel;
                    return !n.isChannelGated(t, r.id)
                })).length > 5
            }

            function f(t) {
                var e = (0, r.e7)([a.ZP, i.Z], (function() {
                    return null != t && s(t.id, a.ZP, i.Z)
                }));
                return !__OVERLAY__ && (!!e && (null != t && t.hasFeature(c.oNc.GUILD_HOME_DEPRECATION_OVERRIDE)))
            }

            function d(t) {
                if (__OVERLAY__) return !1;
                if (t === c.ME || t === c.I_8) return !1;
                if ((0, u.cn)()) return !1;
                var e = l.Z.getGuild(t);
                return null != e && (!!s(t, a.ZP, i.Z) && e.hasFeature(c.oNc.GUILD_HOME_DEPRECATION_OVERRIDE))
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
                v = (0, o.B)({
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
                y = ((0, o.B)({
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
                }), (0,
                    o.B)({
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
        414306: (t, e, n) => {
            "use strict";
            n.d(e, {
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

            function c(t) {
                return (0, r.cj)([o.Z, i.Z, u.Z], (function() {
                    return s(t, o.Z, i.Z, u.Z)
                }), [t])
            }

            function s(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.Z,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.Z,
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : u.Z,
                    c = e.getChannel(t);
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
        327930: (t, e, n) => {
            "use strict";
            n.d(e, {
                Jv: () => v,
                M0: () => y,
                Qj: () => g,
                Ao: () => m,
                YO: () => b,
                VO: () => O
            });
            var r = n(61209),
                i = n(567403),
                o = n(682776),
                u = n(968696),
                a = n(2590),
                l = n(897196),
                c = Array.from(l.Vg).map((function(t) {
                    return u.Z.escape(t)
                })).join("|"),
                s = new RegExp("^/channels/(\\d+|".concat(a.ME, ")(?:/)?(\\d+|").concat(c, ")?")),
                f = new RegExp("^/channels/(\\d+|".concat(a.ME, ")(?:/)(\\d+|").concat(c, ")(?:/)(\\d+)")),
                d = new RegExp("^/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)"),
                p = new RegExp("^/guild-stages/(\\d+)(?:/)?(\\d+)?"),
                h = new RegExp("^/events/(\\d+)(?:/)(\\d+)?"),
                v = new RegExp("^https://(?:canary\\.|ptb\\.)?discord.com/channels/(\\d+|".concat(a.ME, ")(?:/(\\d+|[a-zA-Z-]+))?(?:/(\\d+|[a-zA-Z-]+))?")),
                y = new RegExp("^https://(?:canary\\.|ptb\\.)?discord.com/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)");

            function g(t) {
                if (null == t) return null;
                var e = t.match(f);
                if (null != e && e.length > 3) return {
                    guildId: e[1],
                    channelId: e[2],
                    messageId: e[3]
                };
                var n = t.match(d);
                if (null != n && n.length > 4) return {
                    guildId: n[1],
                    channelId: n[2],
                    threadId: n[3],
                    messageId: n[4]
                };
                var r = t.match(s);
                if (null != r && r.length > 1) {
                    var i;
                    return {
                        guildId: r[1],
                        channelId: null !== (i = r[2]) && void 0 !== i ? i : void 0
                    }
                }
                var o = t.match(p);
                return null != o && o.length > 1 ? {
                    guildId: o[1]
                } : null
            }

            function m(t) {
                if (null == t) return null;
                var e = t.match(h);
                return null != e && e.length > 1 ? {
                    guildId: e[1],
                    guildEventId: e[2]
                } : null
            }

            function b(t) {
                return !!t.isPrivate() || o.Z.can(a.Plq.VIEW_CHANNEL, t)
            }

            function O(t) {
                var e = t.guildId,
                    n = t.channelId;
                if (null == i.Z.getGuild(e) && e !== a.ME) return !1;
                if (null == n) return !0;
                var o = r.Z.getChannel(n);
                return null != o && b(o)
            }
        },
        133600: (t, e, n) => {
            "use strict";
            n.r(e);
            n.d(e, {
                default: () => Q
            });
            var r = n(785893),
                i = n(667294),
                o = n(294184),
                u = n.n(o),
                a = n(202351),
                l = n(304548),
                c = n(875700),
                s = n(563726),
                f = n(316878),
                d = n(255875),
                p = n(784426),
                h = n(959207),
                v = n(70321),
                y = n(761814),
                g = n(473903),
                m = n(551778),
                b = n(746974),
                O = n(750203),
                _ = n(443812),
                S = n(652591),
                E = n(644144),
                w = n(530562),
                I = n(749565),
                P = n(467345),
                T = n(882211),
                R = n(203600),
                C = n(2590),
                A = n(473708),
                N = n(245879),
                x = n.n(N);

            function L(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function j(t, e, n, r, i, o, u) {
                try {
                    var a = t[o](u),
                        l = a.value
                } catch (t) {
                    n(t);
                    return
                }
                a.done ? e(l) : Promise.resolve(l).then(r, i)
            }

            function U(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = t.apply(e, n);

                        function u(t) {
                            j(o, r, i, u, a, "next", t)
                        }

                        function a(t) {
                            j(o, r, i, u, a, "throw", t)
                        }
                        u(void 0)
                    }))
                }
            }

            function k(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function M(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(t, r.key, r)
                }
            }

            function Z(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function D(t) {
                D = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return D(t)
            }

            function F(t, e) {
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

            function G(t, e) {
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

            function z(t, e) {
                return !e || "object" !== B(e) && "function" != typeof e ? L(t) : e
            }

            function H(t, e) {
                H = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return H(t, e)
            }
            var B = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function V(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = D(t);
                    if (e) {
                        var i = D(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return z(this, n)
                }
            }
            var Y = function(t, e) {
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
                                            if (!(i = u.trys,
                                                    i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
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
                                    o = e.call(t, u)
                                } catch (t) {
                                    o = [6, t];
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
                W = function(t) {
                    var e = t.openedGift,
                        n = i.useContext(d.E).createMultipleConfettiAt;
                    i.useEffect((function() {
                        e && n(window.innerWidth / 2, window.innerHeight / 4)
                    }), [n, e]);
                    return null
                },
                q = function(t) {
                    ! function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        e && H(t, e)
                    }(n, t);
                    var e = V(n);

                    function n() {
                        k(this, n);
                        var t;
                        (t = e.apply(this, arguments)).state = {
                            error: null,
                            accepted: !1,
                            opened: !1,
                            isCustomGift: !1,
                            step: void 0
                        };
                        t.handleOpen = function() {
                            t.setState({
                                opened: !0
                            })
                        };
                        var r = L(t);
                        t.handleAccept = U((function() {
                            var t, e, n, i;
                            return Y(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        t = r.props, e = t.giftCode, n = t.channelContext;
                                        if (null == e) throw new Error("GiftCode is null at acceptance.");
                                        o.label = 1;
                                    case 1:
                                        o.trys.push([1, 3, , 4]);
                                        return [4, s.Z.redeemGiftCode(e.code, {
                                            channelId: n
                                        })];
                                    case 2:
                                        o.sent();
                                        r.setState({
                                            accepted: !0
                                        });
                                        return [3, 4];
                                    case 3:
                                        i = o.sent();
                                        r.setState({
                                            error: i
                                        });
                                        return [3, 4];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }));
                        t.handleGoToLibrary = function() {
                            var e = t.props,
                                n = e.onClose,
                                r = e.libraryApplication;
                            (0, p.uL)(C.Z5c.APPLICATION_LIBRARY, {
                                state: {
                                    applicationId: null != r ? r.id : null
                                }
                            });
                            n()
                        };
                        t.getDefaultAnimationStatus = function() {
                            return t.step === C.wZ8.OPEN ? P.SR.IDLE : P.SR.ACTION
                        };
                        t.getIdleAnimationStatus = function() {
                            if (t.step !== C.wZ8.OPEN) return P.SR.LOOP
                        };
                        return t
                    }
                    var i = n.prototype;
                    i.componentDidMount = function() {
                        var t = this.props,
                            e = t.application,
                            n = t.sku,
                            r = t.customGiftMessage,
                            i = t.giftCode;
                        null == e && null != n && c.Z.fetchApplication(n.applicationId);
                        var o = null != r || null != i.giftStyle;
                        this.setState({
                            isCustomGift: o
                        });
                        this.trackStepAnalytics()
                    };
                    i.trackStepAnalytics = function() {
                        var t = this.props,
                            e = t.giftCode,
                            n = t.customGiftMessage,
                            r = this.state.isCustomGift;
                        S.default.track(C.rMx.GIFT_ACCEPT_STEP, {
                            to_step: this.step,
                            has_custom_message: r,
                            is_custom_message_edited: r && n !== A.Z.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE,
                            gift_style: e.giftStyle,
                            gift_code: e.code
                        })
                    };
                    i.render = function() {
                        var t, e, n = this,
                            i = this.props,
                            o = i.application,
                            a = i.accepting,
                            c = i.onClose,
                            s = i.giftCode,
                            f = i.headerId,
                            d = i.transitionState,
                            p = i.useReducedMotion,
                            h = i.onComplete,
                            v = i.customGiftMessage,
                            y = g.default.getUser(s.userId),
                            m = this.state,
                            b = m.isCustomGift,
                            _ = m.accepted,
                            S = m.opened,
                            E = g.default.getCurrentUser(),
                            w = null != (null == s ? void 0 : s.userId) && null != E && null != (null == E ? void 0 : E.id) && s.userId === E.id;
                        switch (this.step) {
                            case C.wZ8.ERROR:
                                null == h || h(s, !1);
                                break;
                            case C.wZ8.SUCCESS:
                                null == h || h(s, !0)
                        }
                        return (0, r.jsxs)("div", {
                            children: [(0, r.jsxs)(l.ModalRoot, {
                                transitionState: d,
                                size: l.ModalSize.SMALL,
                                className: x().modal,
                                "aria-labelledby": f,
                                children: [null != s.giftStyle && !b && (0, r.jsx)(T.Z, {
                                    defaultAnimationState: this.getDefaultAnimationStatus(),
                                    idleAnimationState: this.getIdleAnimationStatus(),
                                    giftStyle: s.giftStyle,
                                    className: x().seasonalGiftIcon
                                }), (0, r.jsx)("div", {
                                    className: b ? void 0 : x().backSplash
                                }), (0, r.jsxs)(l.ModalContent, {
                                    className: u()((t = {}, Z(t, x().content, !b), Z(t, x().contentCustomGift, b), t)),
                                    children: [(0, r.jsx)(l.ModalCloseButton, {
                                        onClick: c,
                                        className: x().closeButton
                                    }), (null == s.giftStyle || b && _) && (0, r.jsx)(O.Z, {
                                        size: O.Z.Sizes.LARGE,
                                        game: o,
                                        skuId: s.skuId
                                    }), (0, r.jsxs)(l.Heading, {
                                        id: f,
                                        className: u()((e = {}, Z(e, x().customGiftHeader, b && !_), Z(e, x().header, !b || _), e)),
                                        variant: "heading-sm/semibold",
                                        children: [(0, r.jsx)("div", {
                                            className: u()(Z({}, x().customGiftHeaderText, b)),
                                            children: this.firstHeaderText
                                        }), (0, r.jsx)("div", {
                                            children: this.secondHeaderText
                                        })]
                                    }), !(b && !_) && (0, r.jsx)(l.Text, {
                                        className: x().body,
                                        variant: "text-sm/normal",
                                        children: this.bodyText
                                    }), b && null != s.giftStyle && !_ && (0, r.jsx)(T.Z, {
                                        defaultAnimationState: this.getDefaultAnimationStatus(),
                                        idleAnimationState: this.getIdleAnimationStatus(),
                                        className: x().giftAnimation,
                                        giftStyle: s.giftStyle
                                    }), b && this.state.opened && !this.state.accepted && null != v && "" !== v && !w && (0, r.jsxs)(r.Fragment, {
                                        children: [(0, r.jsx)(l.FormTitle, {
                                            children: A.Z.Messages.GIFT_SENDER_INFO.format({
                                                senderDisplayName: I.ZP.getName(y)
                                            })
                                        }), (0, r.jsx)(l.Heading, {
                                            id: f,
                                            className: x().customMessage,
                                            variant: "heading-sm/bold",
                                            children: this.props.customGiftMessage
                                        })]
                                    }), (0, r.jsx)(l.Button, {
                                        submitting: a,
                                        onClick: function() {
                                            n.trackStepAnalytics();
                                            n.handleClick()
                                        },
                                        children: this.buttonText
                                    })]
                                })]
                            }), null != s.giftStyle && !p && (0, r.jsx)(W, {
                                openedGift: S && !_ && !a
                            })]
                        })
                    };
                    ! function(t, e, n) {
                        e && M(t.prototype, e);
                        n && M(t, n)
                    }(n, [{
                        key: "step",
                        get: function() {
                            var t = this.props,
                                e = t.libraryApplication,
                                n = t.accepting,
                                r = t.giftCode,
                                i = this.state,
                                o = i.error,
                                u = i.accepted,
                                a = i.opened,
                                l = i.isCustomGift;
                            return (0, E.TO)(e, r, o, u, n, a, l)
                        }
                    }, {
                        key: "buttonText",
                        get: function() {
                            return (0,
                                E.L2)(this.step, this.props.giftCode, this.state.isCustomGift)
                        }
                    }, {
                        key: "firstHeaderText",
                        get: function() {
                            var t = this.state,
                                e = t.isCustomGift,
                                n = t.opened,
                                r = t.accepted,
                                i = this.props,
                                o = i.giftCode,
                                u = i.subscriptionPlan;
                            if (e && !r) {
                                if (n) {
                                    var a = g.default.getUser(o.userId);
                                    return A.Z.Messages.GIFT_SUBSCRIPTION_INFO.format({
                                        senderDisplayName: I.ZP.getName(a),
                                        timeInterval: (null == u ? void 0 : u.interval) === R.rV.MONTH ? A.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH : A.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR
                                    })
                                }
                                return A.Z.Messages.GIFT_RECIPIENT_INFO.format({
                                    recipientDisplayName: I.ZP.getName(g.default.getCurrentUser())
                                })
                            }
                            return null == this.props.sku ? null : (0, E.dQ)(this.step, this.props.giftCode, this.props.sku)
                        }
                    }, {
                        key: "secondHeaderText",
                        get: function() {
                            if (!this.state.isCustomGift || this.state.opened || this.state.accepted) return null;
                            var t = g.default.getUser(this.props.giftCode.userId);
                            return A.Z.Messages.GIFT_SENDER_INFO.format({
                                senderDisplayName: I.ZP.getName(t)
                            })
                        }
                    }, {
                        key: "bodyText",
                        get: function() {
                            var t = this.props,
                                e = t.sku,
                                n = t.accepting,
                                r = t.libraryApplication,
                                i = t.subscriptionPlan;
                            if (null == e) return null;
                            var o = this.state,
                                u = o.error,
                                a = o.accepted,
                                l = o.isCustomGift;
                            return !o.opened && l ? null : (0, E.iM)({
                                step: this.step,
                                sku: e,
                                libraryApplication: r,
                                error: u,
                                accepted: a,
                                accepting: n,
                                onGoToLibrary: this.handleGoToLibrary,
                                subscriptionPlan: i
                            })
                        }
                    }, {
                        key: "errorMessage",
                        get: function() {
                            var t = this.props,
                                e = t.libraryApplication,
                                n = t.accepting,
                                r = this.state,
                                i = r.error,
                                o = r.accepted;
                            return (0, E.e$)(e, i, o, n, this.handleGoToLibrary)
                        }
                    }, {
                        key: "handleClick",
                        get: function() {
                            var t = this.props,
                                e = t.giftCode,
                                n = t.onClose;
                            switch (this.step) {
                                case C.wZ8.ERROR:
                                    return n;
                                case C.wZ8.SUCCESS:
                                    return __OVERLAY__ || null != e.subscriptionPlanId ? n : this.handleGoToLibrary;
                                case C.wZ8.OPEN:
                                    return this.handleOpen;
                                case C.wZ8.CONFIRM:
                                default:
                                    return this.handleAccept
                            }
                        }
                    }]);
                    return n
                }(i.Component),
                K = a.ZP.connectStores([y.Z, b.Z, h.Z, v.Z, m.Z, f.Z], (function(t) {
                    var e = t.giftCode,
                        n = b.Z.get(e.skuId),
                        r = null != n ? h.Z.getGame(n.applicationId) : null,
                        i = f.Z.useReducedMotion;
                    return {
                        sku: n,
                        libraryApplication: null != n ? (0, E.z2)(e, n, y.Z) : null,
                        application: r,
                        subscriptionPlan: null != e.subscriptionPlanId ? (0, w.oE)(e.subscriptionPlanId) : null,
                        accepting: v.Z.getIsAccepting(e.code),
                        useReducedMotion: i
                    }
                }))(q);
            const Q = function(t) {
                var e = t.channelContext,
                    n = t.code,
                    i = t.customGiftMessage,
                    o = G(t, ["channelContext", "code", "customGiftMessage"]),
                    u = (0, _.Dt)(),
                    l = (0, a.e7)([v.Z], (function() {
                        return v.Z.get(n)
                    }));
                return null == l ? null : (0, r.jsx)(K, F(function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                        }))));
                        r.forEach((function(e) {
                            Z(t, e, n[e])
                        }))
                    }
                    return t
                }({}, o), {
                    customGiftMessage: i,
                    channelContext: e,
                    giftCode: l,
                    headerId: u
                }))
            }
        },
        18882: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => lt
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
                v = n(487685),
                y = n(102921);

            function g(t) {
                if (null == t.threadMetadata) return 0;
                var e = 60 * t.threadMetadata.autoArchiveDuration * 1e3;
                return function(t) {
                    if (null == t.threadMetadata) return 0;
                    var e, n = null !== (e = d.ZP.lastMessageId(t.id)) && void 0 !== e ? e : t.id,
                        r = y.Z.extractTimestamp(n),
                        i = null != t.threadMetadata.archiveTimestamp ? new Date(t.threadMetadata.archiveTimestamp).getTime() : 0;
                    return Math.max(r, i)
                }(t) + e
            }
            var m = n(897196);

            function b(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function O(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function _(t) {
                _ = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return _(t)
            }

            function S(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        O(t, e, n[e])
                    }))
                }
                return t
            }

            function E(t, e) {
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

            function w(t, e) {
                return !e || "object" !== P(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function I(t, e) {
                I = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return I(t, e)
            }
            var P = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function T(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = _(t);
                    if (e) {
                        var i = _(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return w(this, n)
                }
            }
            var R = {},
                C = {},
                A = {},
                N = {},
                x = {},
                L = {},
                j = null,
                U = {};

            function k() {
                R = {};
                x = {};
                C = {};
                A = {};
                N = {};
                j = p.Z.getChannelId();
                for (var t in U) clearTimeout(U[t]);
                U = {};
                h.Z.forEachGuild((function(t) {
                    Z(t)
                }));
                D()
            }

            function M(t) {
                delete R[t];
                delete x[t];
                delete C[t];
                delete A[t];
                delete N[t];
                Z(t);
                for (var e in A[t]) G(t, e)
            }

            function Z(t) {
                var e = h.Z.getThreadsForGuild(t);
                for (var n in e)
                    for (var r in e[n]) {
                        X(r);
                        var i = s.Z.getChannel(r);
                        if (null != i) {
                            var o = v.Z.joinTimestamp(r);
                            if (null != o) {
                                var u = {
                                        channel: i,
                                        joinTimestamp: o.getTime()
                                    },
                                    a = K(i),
                                    l = a.isUnread,
                                    c = a.isRelevant,
                                    f = a.isTimedRelevant;
                                J(R, i, u, !1);
                                J(x, i, c ? u : null, !1);
                                J(C, i, l ? u : null, !1);
                                f && Q(i, !0)
                            } else {
                                J(A, i, i, !1);
                                var p = d.ZP.isForumPostUnread(i.id);
                                J(N, i, p ? i : null, !1)
                            }
                        }
                    }
            }

            function D() {
                L = {};
                for (var t in A)
                    for (var e in A[t]) G(t, e)
            }

            function F(t) {
                var e = s.Z.getBasicChannel(t);
                null != e && c.uC.has(e.type) && G(e.guild_id, e.id)
            }

            function G(t, e) {
                var n = s.Z.getChannel(e);
                if (null != n && n.isForumLikeChannel()) {
                    null == L[t] && (L[t] = {});
                    L[t][e] = 0;
                    if (null != A[t] && null != A[t][e]) {
                        var r = f.Z.getGuild(t);
                        if (null != r) {
                            var i = d.ZP.getTrackedAckMessageId(e);
                            if (null == i) {
                                var u = Date.now();
                                null != r.joinedAt && (r.joinedAt instanceof Date ? u = r.joinedAt.getTime() : "string" == typeof r.joinedAt && (u = new Date(r.joinedAt).getTime()));
                                i = o.default.fromTimestamp(u)
                            }
                            for (var a in A[t][e]) e === j ? d.ZP.isNewForumThread(a, e, r) && L[t][e]++ : o.default.compare(a, i) > 0 && !d.ZP.hasOpenedThread(a) && L[t][e]++
                        }
                    }
                }
            }

            function z(t, e, n) {
                if (null == e) return !1;
                var r = s.Z.getChannel(n),
                    i = v.Z.joinTimestamp(n);
                if (null != r && h.Z.isActive(t, e, n)) {
                    if (null != i) {
                        var o = {
                                channel: r,
                                joinTimestamp: i.getTime()
                            },
                            u = K(r),
                            a = u.isUnread,
                            l = u.isRelevant,
                            c = u.isTimedRelevant;
                        J(R, r, o, !0);
                        J(x, r, l ? o : null, !0);
                        J(C, r, a ? o : null, !0);
                        J(A, r, null, !0);
                        J(N, r, null, !0);
                        Q(r, c)
                    } else {
                        var f = d.ZP.isForumPostUnread(r.id);
                        J(R, r, null, !0);
                        J(C, r, null, !0);
                        J(x, r, null, !0);
                        J(A, r, r, !0);
                        J(N, r, f ? r : null, !0);
                        X(r.id)
                    }
                    G(t, e)
                } else {
                    $(R, t, e, n);
                    $(x, t, e, n);
                    $(C, t, e, n);
                    $(A, t, e, n);
                    $(N, t, e, n);
                    X(n);
                    G(t, e)
                }
            }

            function H(t) {
                return z(t.channel.guild_id, t.channel.parent_id, t.channel.id)
            }

            function B(t, e) {
                if (null == e) return !1;
                var n = R[t],
                    r = null == n ? null : n[e];
                if (null != r)
                    for (var i in r)
                        if (r[i].channel.isNSFW()) return !0;
                var o = A[t],
                    u = null == o ? null : o[e];
                if (null != u)
                    for (var a in u)
                        if (u[a].isNSFW()) return !0;
                return !1
            }

            function V(t) {
                var e = s.Z.getChannel(t.id);
                return !(null == e || !h.Z.isActive(t.guildId, e.parent_id, t.id)) && z(e.guild_id, e.parent_id, e.id)
            }

            function Y(t) {
                var e = s.Z.getChannel(t.channelId);
                if (null == e) W();
                else {
                    var n = e.guild_id,
                        r = e.parent_id;
                    if (!c.Ec.has(e.type)) {
                        var i;
                        if (Number(null === (i = L[n]) || void 0 === i ? void 0 : i[e.id]) > 0) {
                            G(n, e.id);
                            return !0
                        }
                        return !1
                    }
                    if (null == r) return !1;
                    if (tt(R, e)) {
                        var o = K(e),
                            u = o.isUnread,
                            a = o.isRelevant;
                        Q(e, o.isTimedRelevant);
                        var l = tt(C, e),
                            f = tt(x, e);
                        if (u === l && a === f) return !1;
                        var p = R[n][r][e.id],
                            h = a ? p : null;
                        J(C, e, u ? p : null, !0);
                        J(x, e, h, !0);
                        G(n, r)
                    } else {
                        var v = tt(N, e),
                            y = d.ZP.isForumPostUnread(e.id);
                        if (y === v) return !1;
                        J(N, e, y ? e : null, !0)
                    }
                }
            }

            function W() {
                C = {};
                x = {};
                for (var t in R)
                    for (var e in R[t])
                        for (var n in R[t][e]) {
                            var r = R[t][e][n],
                                i = K(r.channel),
                                o = i.isUnread,
                                u = i.isRelevant,
                                a = i.isTimedRelevant;
                            o && J(C, r.channel, r, !1);
                            u && J(x, r.channel, r, !1);
                            Q(r.channel, a)
                        }
                N = {};
                for (var l in A)
                    for (var c in A[l])
                        for (var s in A[l][c]) {
                            var f = A[l][c][s];
                            d.ZP.isForumPostUnread(s) && J(N, f, f, !1)
                        }
                D()
            }

            function q() {
                var t = j;
                if ((j = p.Z.getChannelId()) === t) return !1;
                F(t);
                F(j)
            }

            function K(t) {
                var e = d.ZP.getMentionCount(t.id) > 0,
                    n = d.ZP.hasRelevantUnread(t) && (!v.Z.isMuted(t.id) || e) || (0, l.c)() && e,
                    r = t.hasFlag(m.zZ.PINNED),
                    i = t.isActiveThread(),
                    o = i && g(t) > Date.now();
                return {
                    isUnread: (i || r) && n,
                    isRelevant: o || r || n,
                    isTimedRelevant: o
                }
            }

            function Q(t, e) {
                X(t.id);
                e && function(t) {
                    U[t.id] = setTimeout((function() {
                        var e = s.Z.getChannel(t.id);
                        null != e && a.Z.dispatch({
                            type: "THREAD_UPDATE",
                            channel: e
                        })
                    }), g(t) - Date.now() + 1)
                }(t)
            }

            function X(t) {
                if (t in U) {
                    clearTimeout(U[t]);
                    delete U[t]
                }
            }

            function J(t, e, n, r) {
                var o = e.guild_id,
                    u = e.parent_id,
                    a = e.id;
                if (null != o && null != u && null != a) {
                    o in t || (t[o] = {});
                    u in t[o] || (t[o][u] = {});
                    r && (t[o] = E(S({}, t[o]), O({}, u, S({}, t[o][u]))));
                    if (null === n) {
                        delete t[o][u][a];
                        i().isEmpty(t[o][u]) && delete t[o][u]
                    } else t[o][u][a] = n
                }
            }

            function $(t, e, n, r) {
                if (null != e && null != n && null != r && et(t, e, n, r)) {
                    t[e] = E(S({}, t[e]), O({}, n, S({}, t[e][n])));
                    delete t[e][n][r];
                    i().isEmpty(t[e][n]) && delete t[e][n]
                }
            }

            function tt(t, e) {
                return et(t, e.guild_id, e.parent_id, e.id)
            }

            function et(t, e, n, r) {
                return e in t && n in t[e] && r in t[e][n]
            }
            var nt = {},
                rt = {},
                it = {},
                ot = {},
                ut = {},
                at = function(t) {
                    ! function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        e && I(t, e)
                    }(n, t);
                    var e = T(n);

                    function n() {
                        b(this, n);
                        return e.apply(this, arguments)
                    }
                    var r = n.prototype;
                    r.initialize = function() {
                        this.waitFor(h.Z, s.Z, v.Z, d.ZP);
                        this.syncWith([p.Z], q)
                    };
                    r.hasActiveJoinedUnreadThreads = function(t, e) {
                        return t in C && e in C[t]
                    };
                    r.getActiveUnjoinedThreadsForParent = function(t, e) {
                        var n;
                        return t in A && null !== (n = A[t][e]) && void 0 !== n ? n : ot
                    };
                    r.getActiveJoinedThreadsForParent = function(t, e) {
                        var n;
                        return t in R && null !== (n = R[t][e]) && void 0 !== n ? n : it
                    };
                    r.getActiveJoinedThreadsForGuild = function(t) {
                        var e;
                        return null !== (e = R[t]) && void 0 !== e ? e : nt
                    };
                    r.getActiveJoinedUnreadThreadsForGuild = function(t) {
                        var e;
                        return null !== (e = C[t]) && void 0 !== e ? e : nt
                    };
                    r.getActiveJoinedUnreadThreadsForParent = function(t, e) {
                        var n;
                        return null !== (n = this.getActiveJoinedUnreadThreadsForGuild(t)[e]) && void 0 !== n ? n : it
                    };
                    r.getActiveJoinedRelevantThreadsForGuild = function(t) {
                        var e;
                        return null !== (e = x[t]) && void 0 !== e ? e : nt
                    };
                    r.getActiveJoinedRelevantThreadsForParent = function(t, e) {
                        var n;
                        return null !== (n = this.getActiveJoinedRelevantThreadsForGuild(t)[e]) && void 0 !== n ? n : it
                    };
                    r.getActiveUnjoinedThreadsForGuild = function(t) {
                        var e;
                        return null !== (e = A[t]) && void 0 !== e ? e : rt
                    };
                    r.getActiveUnjoinedUnreadThreadsForGuild = function(t) {
                        var e;
                        return null !== (e = N[t]) && void 0 !== e ? e : nt
                    };
                    r.getActiveUnjoinedUnreadThreadsForParent = function(t, e) {
                        var n;
                        return null !== (n = this.getActiveUnjoinedUnreadThreadsForGuild(t)[e]) && void 0 !== n ? n : it
                    };
                    r.getNewThreadCountsForGuild = function(t) {
                        var e;
                        return null !== (e = L[t]) && void 0 !== e ? e : ut
                    };
                    r.computeAllActiveJoinedThreads = function(t) {
                        var e = [];
                        for (var n in R)
                            if (n === t || null == t)
                                for (var r in R[n])
                                    for (var i in R[n][r]) e.push(R[n][r][i].channel);
                        return e
                    };
                    r.getNewThreadCount = function(t, e) {
                        var n, r;
                        return null !== (r = null === (n = L[t]) || void 0 === n ? void 0 : n[e]) && void 0 !== r ? r : 0
                    };
                    r.getActiveThreadCount = function(t, e) {
                        var n, r, o, u;
                        return i().size(null !== (o = null === (n = R[t]) || void 0 === n ? void 0 : n[e]) && void 0 !== o ? o : {}) + i().size(null !== (u = null === (r = A[t]) || void 0 === r ? void 0 : r[e]) && void 0 !== u ? u : {})
                    };
                    return n
                }(u.ZP.Store);
            at.displayName = "ActiveJoinedThreadsStore";
            const lt = new at(a.Z, {
                CONNECTION_OPEN: k,
                OVERLAY_INITIALIZE: k,
                THREAD_LIST_SYNC: function(t) {
                    return M(t.guildId)
                },
                LOAD_THREADS_SUCCESS: k,
                LOAD_ARCHIVED_THREADS_SUCCESS: k,
                SEARCH_FINISH: k,
                GUILD_CREATE: function(t) {
                    return M(t.guild.id)
                },
                GUILD_DELETE: k,
                CURRENT_USER_UPDATE: k,
                THREAD_CREATE: H,
                THREAD_UPDATE: H,
                THREAD_DELETE: H,
                CHANNEL_UPDATES: function(t) {
                    var e = t.channels,
                        n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var o, u = e[Symbol.iterator](); !(n = (o = u.next()).done); n = !0) {
                            var a = o.value;
                            if (a.isNSFW() !== B(a.guild_id, a.parent_id)) {
                                k();
                                return
                            }
                        }
                    } catch (t) {
                        r = !0;
                        i = t
                    } finally {
                        try {
                            n || null == u.return || u.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    return !1
                },
                CHANNEL_DELETE: function(t) {
                    var e = t.channel,
                        n = !1;
                    if (null != e.guild_id && null != e.parent_id) {
                        if (e.guild_id in R && e.parent_id in R[e.guild_id]) {
                            delete R[e.guild_id][e.parent_id];
                            n = !0
                        }
                        if (e.guild_id in C && e.parent_id in C[e.guild_id]) {
                            delete C[e.guild_id][e.parent_id];
                            n = !0
                        }
                        if (e.guild_id in x && e.parent_id in x[e.guild_id]) {
                            Object.keys(x[e.guild_id][e.parent_id]).forEach(X);
                            delete x[e.guild_id][e.parent_id];
                            n = !0
                        }
                        if (e.guild_id in A && e.parent_id in A[e.guild_id]) {
                            delete A[e.guild_id][e.parent_id];
                            n = !0
                        }
                        if (e.guild_id in N && e.parent_id in N[e.guild_id]) {
                            delete N[e.guild_id][e.parent_id];
                            n = !0
                        }
                        n && G(e.guild_id, e.parent_id)
                    }
                    return n
                },
                THREAD_MEMBER_UPDATE: V,
                THREAD_MEMBERS_UPDATE: V,
                LOAD_MESSAGES_SUCCESS: Y,
                MESSAGE_CREATE: Y,
                MESSAGE_DELETE: Y,
                MESSAGE_DELETE_BULK: Y,
                MESSAGE_ACK: Y,
                CHANNEL_ACK: Y,
                CHANNEL_LOCAL_ACK: Y,
                CHANNEL_SELECT: function(t) {
                    Y(t);
                    q()
                },
                PASSIVE_UPDATE_V1: function(t) {
                    null != t.channels && W()
                },
                WINDOW_FOCUS: W,
                UPDATE_CHANNEL_DIMENSIONS: W,
                DRAWER_OPEN: W,
                DRAWER_CLOSE: W,
                BULK_ACK: W
            })
        },
        232806: (t, e, n) => {
            "use strict";
            n.d(e, {
                xV: () => o,
                dp: () => u,
                X7: () => a,
                E1: () => l,
                f7: () => c,
                HE: () => s,
                SJ: () => f
            });

            function r(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function i(t, e) {
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
            var o, u;
            ! function(t) {
                t[t.BACKGROUND = 0] = "BACKGROUND"
            }(o || (o = {}));
            ! function(t) {
                t[t.OPTION_1 = 0] = "OPTION_1";
                t[t.OPTION_2 = 1] = "OPTION_2";
                t[t.OPTION_3 = 2] = "OPTION_3";
                t[t.OPTION_4 = 3] = "OPTION_4";
                t[t.OPTION_7 = 7] = "OPTION_7";
                t[t.OPTION_8 = 8] = "OPTION_8";
                t[t.OPTION_9 = 9] = "OPTION_9";
                t[t.OPTION_10 = 10] = "OPTION_10"
            }(u || (u = {}));
            var a = [u.OPTION_7, u.OPTION_8, u.OPTION_9, u.OPTION_10],
                l = [u.OPTION_7, u.OPTION_8, u.OPTION_9, u.OPTION_10, u.OPTION_1, u.OPTION_2, u.OPTION_3, u.OPTION_4].reduce((function(t, e, n) {
                    return i(function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {},
                                i = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                                return Object.getOwnPropertyDescriptor(n, t).enumerable
                            }))));
                            i.forEach((function(e) {
                                r(t, e, n[e])
                            }))
                        }
                        return t
                    }({}, t), r({}, e, n))
                }), {}),
                c = "blur",
                s = {
                    width: 1280,
                    height: 720
                },
                f = 10485760
        },
        205294: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => c
            });
            var r = n(169376);

            function i(t) {
                i = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return i(t)
            }

            function o(t, e) {
                return !e || "object" !== a(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function u(t, e) {
                u = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return u(t, e)
            }
            var a = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function l(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = i(t);
                    if (e) {
                        var u = i(this).constructor;
                        n = Reflect.construct(r, arguments, u)
                    } else n = r.apply(this, arguments);
                    return o(this, n)
                }
            }
            const c = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && u(t, e)
                }(n, t);
                var e = l(n);

                function n(t) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var r;
                    (r = e.call(this)).id = t.id;
                    r.subscriptionId = t.subscriptionId;
                    r.premiumGuildSubscription = t.premiumGuildSubscription;
                    r.canceled = t.canceled;
                    r.cooldownEndsAt = t.cooldownEndsAt;
                    r.subscription = t.subscription;
                    return r
                }
                var r = n.prototype;
                r.isOnCooldown = function() {
                    return null != this.cooldownEndsAt && new Date(this.cooldownEndsAt).getTime() >= Date.now()
                };
                r.isAvailable = function() {
                    return null == this.premiumGuildSubscription && !this.isOnCooldown()
                };
                n.createFromServer = function(t, e) {
                    return new n({
                        id: t.id,
                        subscriptionId: t.subscription_id,
                        premiumGuildSubscription: null != t.premium_guild_subscription ? {
                            id: t.premium_guild_subscription.id,
                            guildId: t.premium_guild_subscription.guild_id
                        } : null,
                        canceled: t.canceled,
                        cooldownEndsAt: t.cooldown_ends_at,
                        subscription: e
                    })
                };
                return n
            }(r.Z)
        },
        50433: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => y
            });
            var r = n(202351),
                i = n(744564);

            function o(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function u(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function a(t) {
                a = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return a(t)
            }

            function l(t, e) {
                return !e || "object" !== f(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function c(t, e) {
                c = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return c(t, e)
            }

            function s(t) {
                return function(t) {
                    if (Array.isArray(t)) return o(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return o(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var f = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function d(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = a(t);
                    if (e) {
                        var i = a(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return l(this, n)
                }
            }
            var p = [];

            function h() {
                p = []
            }
            var v = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && c(t, e)
                }(n, t);
                var e = d(n);

                function n() {
                    u(this, n);
                    return e.apply(this, arguments)
                }
                var r = n.prototype;
                r.hasLayers = function() {
                    return p.length > 0
                };
                r.getLayers = function() {
                    return p
                };
                return n
            }(r.ZP.Store);
            v.displayName = "LayerStore";
            const y = new v(i.Z, {
                LAYER_PUSH: function(t) {
                    var e = t.component;
                    if (p.indexOf(e) >= 0) return !1;
                    p = s(p).concat([e])
                },
                LAYER_POP: function() {
                    if (0 === p.length) return !1;
                    p = p.slice(0, -1)
                },
                LAYER_POP_ALL: h,
                LOGOUT: h,
                NOTIFICATION_CLICK: h
            })
        },
        491260: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => G
            });
            var r = n(110251),
                i = n.n(r),
                o = n(496486),
                u = n.n(o),
                a = n(202351),
                l = n(744564),
                c = n(83797),
                s = n(664625),
                f = n(473903),
                d = n(2590);

            function p(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function h(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function v(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function y(t) {
                y = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return y(t)
            }

            function g(t, e) {
                return !e || "object" !== _(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function m(t, e) {
                m = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return m(t, e)
            }

            function b(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(t); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (e && o.length === e) break
                            }
                        } catch (t) {
                            a = !0;
                            i = t
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(t, e) || S(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function O(t) {
                return function(t) {
                    if (Array.isArray(t)) return p(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || S(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var _ = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function S(t, e) {
                if (t) {
                    if ("string" == typeof t) return p(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? p(t, e) : void 0
                }
            }

            function E(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = y(t);
                    if (e) {
                        var i = y(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return g(this, n)
                }
            }
            var w = Object.freeze([]),
                I = {},
                P = {},
                T = {},
                R = {},
                C = {};

            function A(t, e) {
                var n = I[t];
                return null != n ? n[e] : null
            }
            var N = function(t) {
                switch (t.type) {
                    case d.IIU.CUSTOM_STATUS:
                        return 4;
                    case d.IIU.COMPETING:
                        return 3;
                    case d.IIU.STREAMING:
                        return 2;
                    case d.IIU.PLAYING:
                        return 1;
                    default:
                        return 0
                }
            };
            var x = function(t) {
                return (0, c.Z)(t) ? 1 : 0
            };

            function L(t, e) {
                return function(t, e) {
                    return N(e) - N(t)
                }(t, e) || function(t, e) {
                    return x(e) - x(t)
                }(t, e) || function(t, e) {
                    var n, r;
                    return (null !== (n = e.created_at) && void 0 !== n ? n : 0) - (null !== (r = t.created_at) && void 0 !== r ? r : 0)
                }(t, e)
            }

            function j(t) {
                delete P[t];
                delete T[t];
                delete R[t];
                if (null != I[t]) {
                    var e = b(u().sortBy(I[t], (function(t) {
                            return -t.timestamp
                        })), 1),
                        n = e[0];
                    if (n.status !== d.Skl.OFFLINE) {
                        P[t] = n.status;
                        T[t] = n.activities;
                        null != n.clientStatus && (R[t] = n.clientStatus)
                    } else u().every(I[t], (function(t) {
                        return t.status === d.Skl.OFFLINE
                    })) && delete I[t]
                }
            }

            function U(t) {
                var e = I[t];
                if (null != e) {
                    var n = u().maxBy(Object.values(e), (function(t) {
                        return t.timestamp
                    }));
                    if (n.status !== d.Skl.OFFLINE) {
                        P[t] = n.status;
                        T[t] = n.activities;
                        null != n.clientStatus && (R[t] = n.clientStatus)
                    }
                }
            }

            function k(t) {
                var e = t.guildId,
                    n = t.userId,
                    r = t.status,
                    o = t.clientStatus,
                    u = t.activities;
                if (n === s.default.getId()) return !1;
                var a = I[n];
                if (null == a) {
                    if (r === d.Skl.OFFLINE) return !1;
                    a = I[n] = {}
                }
                if (r === d.Skl.OFFLINE) a[e] = {
                    status: r,
                    clientStatus: o,
                    activities: w,
                    timestamp: Date.now()
                };
                else {
                    var l = u.length > 1 ? O(u).sort(L) : u,
                        c = a[e];
                    u = null != c && i()(c.activities, l) ? c.activities : l;
                    a[e] = {
                        status: r,
                        clientStatus: o,
                        activities: u,
                        timestamp: Date.now()
                    }
                }
                delete C[n];
                j(n);
                return !0
            }

            function M(t) {
                var e = t.guildId,
                    n = t.userId,
                    r = t.status,
                    i = t.clientStatus,
                    o = t.activities,
                    u = t.timestamp;
                if (n !== s.default.getId()) {
                    var a = I[n];
                    if (null == a) {
                        if (r === d.Skl.OFFLINE) return;
                        a = I[n] = {}
                    }
                    if (r === d.Skl.OFFLINE) a[e] = {
                        status: r,
                        clientStatus: i,
                        activities: w,
                        timestamp: Date.now()
                    };
                    else {
                        var l = o.length > 1 ? O(o).sort(L) : o;
                        a[e] = {
                            status: r,
                            clientStatus: i,
                            activities: l,
                            timestamp: u
                        }
                    }
                }
            }

            function Z(t, e) {
                if (e === s.default.getId()) return !1;
                var n = I[e];
                if (null == n || null == n[t]) return !1;
                delete n[t];
                0 === Object.keys(n).length && delete I[e];
                j(e)
            }

            function D(t) {
                var e = !0,
                    n = !1,
                    r = void 0;
                try {
                    for (var i, o = Object.keys(I)[Symbol.iterator](); !(e = (i = o.next()).done); e = !0) {
                        Z(t, i.value)
                    }
                } catch (t) {
                    n = !0;
                    r = t
                } finally {
                    try {
                        e || null == o.return || o.return()
                    } finally {
                        if (n) throw r
                    }
                }
            }
            var F = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && m(t, e)
                }(n, t);
                var e = E(n);

                function n() {
                    h(this, n);
                    return e.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(s.default)
                };
                r.setCurrentUserOnConnectionOpen = function(t, e) {
                    P[s.default.getId()] = t;
                    T[s.default.getId()] = e
                };
                r.getStatus = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.Skl.OFFLINE,
                        r = f.default.getUser(t);
                    null != r && r.hasFlag(d.xW$.BOT_HTTP_INTERACTIONS) && (n = d.Skl.UNKNOWN);
                    if (null == r ? void 0 : r.isClyde()) return d.Skl.ONLINE;
                    if (null == e) {
                        var i;
                        return null !== (i = P[t]) && void 0 !== i ? i : n
                    }
                    var o, u = A(t, e);
                    return null !== (o = null == u ? void 0 : u.status) && void 0 !== o ? o : n
                };
                r.getActivities = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null == e) {
                        var n;
                        return null !== (n = T[t]) && void 0 !== n ? n : w
                    }
                    var r = A(t, e);
                    return null == r || null == r.activities ? w : r.activities
                };
                r.getPrimaryActivity = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = this.getActivities(t, e);
                    return n[0]
                };
                r.getAllApplicationActivities = function(t) {
                    var e = [],
                        n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var o, u = Object.keys(T)[Symbol.iterator](); !(n = (o = u.next()).done); n = !0) {
                            var a = o.value,
                                l = T[a],
                                c = !0,
                                s = !1,
                                f = void 0;
                            try {
                                for (var d, p = l[Symbol.iterator](); !(c = (d = p.next()).done); c = !0) {
                                    var h = d.value;
                                    h.application_id === t && e.push({
                                        userId: a,
                                        activity: h
                                    })
                                }
                            } catch (t) {
                                s = !0;
                                f = t
                            } finally {
                                try {
                                    c || null == p.return || p.return()
                                } finally {
                                    if (s) throw f
                                }
                            }
                        }
                    } catch (t) {
                        r = !0;
                        i = t
                    } finally {
                        try {
                            n || null == u.return || u.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    return e
                };
                r.getApplicationActivity = function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    return this.findActivity(t, (function(t) {
                        return t.application_id === e
                    }), n)
                };
                r.findActivity = function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    return this.getActivities(t, n).find(e)
                };
                r.getActivityMetadata = function(t) {
                    return C[t]
                };
                r.getUserIds = function() {
                    return Object.keys(T)
                };
                r.isMobileOnline = function(t) {
                    var e = R[t];
                    return null != e && e[d.X5t.MOBILE] === d.Skl.ONLINE && e[d.X5t.DESKTOP] !== d.Skl.ONLINE
                };
                r.getState = function() {
                    return {
                        presencesForGuilds: I,
                        statuses: P,
                        activities: T,
                        activityMetadata: C,
                        clientStatuses: R
                    }
                };
                return n
            }(a.ZP.Store);
            F.displayName = "PresenceStore";
            const G = new F(l.Z, {
                CONNECTION_OPEN: function() {
                    return !0
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function(t) {
                    var e = t.guilds,
                        n = t.presences,
                        r = s.default.getId();
                    I = {};
                    C = {};
                    P = v({}, r, P[r]);
                    T = v({}, r, T[r]);
                    R = v({}, r, {});
                    var i = new Set,
                        o = Date.now();
                    e.forEach((function(t) {
                        t.presences.forEach((function(e) {
                            var n = e.user,
                                r = e.status,
                                u = e.clientStatus,
                                a = e.activities;
                            M({
                                guildId: t.id,
                                userId: n.id,
                                status: r,
                                clientStatus: u,
                                activities: a,
                                timestamp: o
                            });
                            i.add(n.id)
                        }))
                    }));
                    n.forEach((function(t) {
                        var e = t.user,
                            n = t.status,
                            r = t.clientStatus,
                            u = t.activities;
                        if (null != e) {
                            M({
                                guildId: d.ME,
                                userId: e.id,
                                status: n,
                                clientStatus: r,
                                activities: u,
                                timestamp: o
                            });
                            i.add(e.id)
                        }
                    }));
                    i.delete(r);
                    i.forEach(U)
                },
                OVERLAY_INITIALIZE: function(t) {
                    var e = t.presences;
                    I = e.presencesForGuilds;
                    P = e.statuses;
                    T = e.activities;
                    C = e.activityMetadata
                },
                GUILD_CREATE: function(t) {
                    var e = t.guild;
                    e.presences.forEach((function(t) {
                        var n = t.user,
                            r = t.status,
                            i = t.clientStatus,
                            o = t.activities;
                        k({
                            guildId: e.id,
                            userId: n.id,
                            status: r,
                            clientStatus: i,
                            activities: o
                        })
                    }))
                },
                GUILD_DELETE: function(t) {
                    D(t.guild.id)
                },
                GUILD_MEMBER_REMOVE: function(t) {
                    return Z(t.guildId, t.user.id)
                },
                PRESENCE_UPDATES: function(t) {
                    return t.updates.map((function(t) {
                        var e = t.guildId,
                            n = t.user,
                            r = t.status,
                            i = t.clientStatus,
                            o = t.activities;
                        return k({
                            guildId: null != e ? e : d.ME,
                            userId: n.id,
                            status: r,
                            clientStatus: i,
                            activities: o
                        })
                    })).some((function(t) {
                        return t
                    }))
                },
                PRESENCES_REPLACE: function(t) {
                    var e = t.presences;
                    D(d.ME);
                    e.forEach((function(t) {
                        var e = t.user,
                            n = t.status,
                            r = t.clientStatus,
                            i = t.activities;
                        null != e && k({
                            guildId: d.ME,
                            userId: e.id,
                            status: n,
                            clientStatus: r,
                            activities: i
                        })
                    }))
                },
                ACTIVITY_METADATA_UPDATE: function(t) {
                    var e = t.userId,
                        n = t.metadata;
                    C[e] = n;
                    return !1
                },
                THREAD_MEMBER_LIST_UPDATE: function(t) {
                    var e = t.guildId;
                    t.members.forEach((function(t) {
                        null != t.presence && k({
                            guildId: e,
                            userId: t.user_id,
                            status: t.presence.status,
                            clientStatus: t.presence.clientStatus,
                            activities: t.presence.activities
                        })
                    }))
                },
                THREAD_MEMBERS_UPDATE: function(t) {
                    var e = t.guildId,
                        n = t.addedMembers;
                    null == n || n.forEach((function(t) {
                        null != t.presence && k({
                            guildId: e,
                            userId: t.userId,
                            status: t.presence.status,
                            clientStatus: t.presence.clientStatus,
                            activities: t.presence.activities
                        })
                    }))
                },
                SELF_PRESENCE_STORE_UPDATE: function(t) {
                    var e = s.default.getId();
                    if (P[e] === t.status && T[e] === t.activities) return !1;
                    P[e] = t.status;
                    T[e] = t.activities;
                    delete C[e]
                }
            })
        },
        750203: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => C
            });
            var r = n(785893),
                i = n(667294),
                o = n(294184),
                u = n.n(o),
                a = n(269116);

            function l(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function c(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(t); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (e && o.length === e) break
                            }
                        } catch (t) {
                            a = !0;
                            i = t
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return l(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var s = n(124251),
                f = n(168075),
                d = n(795308),
                p = n(633878);

            function h(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function v(t, e) {
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

            function y(t, e) {
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

            function g(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function m(t, e) {
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

            function b(t, e) {
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
            const O = (0, f.hN)((function(t) {
                var e = t.width,
                    n = void 0 === e ? 24 : e,
                    i = t.height,
                    o = void 0 === i ? 24 : i,
                    u = t.color,
                    a = void 0 === u ? "currentColor" : u,
                    l = t.foreground,
                    c = b(t, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", m(function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                        }))));
                        r.forEach((function(e) {
                            g(t, e, n[e])
                        }))
                    }
                    return t
                }({}, (0, p.Z)(c)), {
                    width: n,
                    height: o,
                    viewBox: "0 0 40 40",
                    children: (0, r.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, r.jsx)("path", {
                            className: l,
                            fill: a,
                            fillOpacity: ".8",
                            d: "M21.226 30v-4.154h-3.755V30h3.755zm-.512-8.62c3.67-1.337 5.718-2.959 5.718-6.145 0-3.272-2.36-5.235-6.088-5.235-2.589 0-4.637.825-6.344 2.048l.484 3.3c1.621-1.251 3.47-2.162 5.49-2.162 1.707 0 2.845.854 2.845 2.305 0 1.593-1.08 2.475-3.812 3.442l-.882.342.342 4.523 2.076-.455.171-1.963z"
                        }), (0, r.jsx)("rect", {
                            className: l,
                            width: "38",
                            height: "38",
                            x: "1",
                            y: "1",
                            stroke: a,
                            strokeOpacity: ".4",
                            strokeWidth: "2",
                            rx: "5"
                        }), (0, r.jsx)("circle", {
                            className: l,
                            cx: "7",
                            cy: "7",
                            r: "2",
                            fill: a,
                            fillOpacity: ".4"
                        }), (0, r.jsx)("circle", {
                            className: l,
                            cx: "7",
                            cy: "33",
                            r: "2",
                            fill: a,
                            fillOpacity: ".4"
                        }), (0, r.jsx)("circle", {
                            className: l,
                            cx: "33",
                            cy: "7",
                            r: "2",
                            fill: a,
                            fillOpacity: ".4"
                        }), (0, r.jsx)("circle", {
                            className: l,
                            cx: "33",
                            cy: "33",
                            r: "2",
                            fill: a,
                            fillOpacity: ".4"
                        })]
                    })
                }))
            }), (function(t) {
                var e = t.width,
                    n = void 0 === e ? 24 : e,
                    i = t.height,
                    o = void 0 === i ? 24 : i,
                    u = t.color,
                    a = void 0 === u ? d.Z.colors.INTERACTIVE_NORMAL : u,
                    l = t.colorClass,
                    c = void 0 === l ? "" : l,
                    s = y(t, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", v(function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                        }))));
                        r.forEach((function(e) {
                            h(t, e, n[e])
                        }))
                    }
                    return t
                }({}, (0, p.Z)(s)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: o,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm6.813 7c-.548 0-.997.263-1.238.615a1 1 0 0 1-1.65-1.13C9.548 7.576 10.623 7 11.812 7c1.822 0 3.438 1.381 3.438 3.25 0 1.454-.977 2.612-2.27 3.055l.003.01a1 1 0 0 1-1.966.37l-.187-1a1 1 0 0 1 .982-1.185c.871 0 1.438-.633 1.438-1.25S12.683 9 11.812 9ZM13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm7-10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM18.5 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM7 18.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM5.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
                        clipRule: "evenodd",
                        className: c
                    })
                }))
            }));
            var _ = n(203600),
                S = n(605254),
                E = n.n(S);

            function w(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function I(t, e) {
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

            function P(t, e) {
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
            var T = {
                XSMALL: E().xsmall,
                SMALL: E().small,
                MEDIUM: E().medium,
                LARGE: E().large
            };
            var R = function(t) {
                var e, o = t.game,
                    l = t.guild,
                    f = t.skuId,
                    d = t.pid,
                    p = t.className,
                    h = t.guildClassName,
                    v = t.size,
                    y = void 0 === v ? T.MEDIUM : v,
                    g = P(t, ["game", "guild", "skuId", "pid", "className", "guildClassName", "size"]);
                null != f && (e = function(t) {
                    if (null == t) return null;
                    switch (t) {
                        case _.Si.GUILD:
                            return n(460122);
                        case _.Si.TIER_0:
                            return n(873994);
                        case _.Si.TIER_1:
                            return n(413369);
                        case _.Si.TIER_2:
                        case _.Si.LEGACY:
                            return n(132354);
                        default:
                            return null
                    }
                }(f));
                null != o && null == e && (e = o.getIconURL(function(t) {
                    switch (t) {
                        case T.XSMALL:
                            return 24;
                        case T.SMALL:
                            return 30;
                        case T.MEDIUM:
                            return 40;
                        case T.LARGE:
                            return 60;
                        default:
                            return 80
                    }
                }(y)));
                e = function(t, e) {
                    var n = c(i.useState(), 2),
                        r = n[0],
                        o = n[1];
                    i.useEffect((function() {
                        null != t && null == e ? (0, a.Z)().then((function(e) {
                            null != e && e.identifyGame(t, (function(t, e) {
                                0 === t && null != e.icon && "" !== e.icon && null != e.name && "" !== e.name && o("data:image/png;base64,".concat(e.icon))
                            }))
                        })) : o(void 0)
                    }), [t, e]);
                    return null != e ? e : r
                }(d, e);
                if (null == e && null != l) {
                    var m = function(t) {
                        switch (t) {
                            case T.XSMALL:
                                return s.Z.Sizes.SMALLER;
                            case T.SMALL:
                                return s.Z.Sizes.SMALL;
                            case T.LARGE:
                                return s.Z.Sizes.LARGE;
                            default:
                                return s.Z.Sizes.MEDIUM
                        }
                    }(y);
                    return (0, r.jsx)(s.Z, {
                        className: u()(E().gameIcon, h, p),
                        guild: l,
                        size: m
                    })
                }
                return null == e ? (0, r.jsx)(O, {
                    className: u()(E().gameIcon, y, p)
                }) : (0, r.jsx)("div", I(function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                        }))));
                        r.forEach((function(e) {
                            w(t, e, n[e])
                        }))
                    }
                    return t
                }({}, g), {
                    className: u()(E().gameIcon, y, p),
                    style: {
                        backgroundImage: "url('".concat(e, "')")
                    }
                }))
            };
            R.Sizes = T;
            const C = R
        },
        443812: (t, e, n) => {
            "use strict";
            n.d(e, {
                hQ: () => u,
                Dt: () => a,
                FG: () => l
            });
            var r = n(873955),
                i = n.n(r),
                o = n(989824),
                u = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return i()(t)
                },
                a = function() {
                    return (0, o.Z)((function() {
                        return u()
                    }))
                },
                l = function(t) {
                    return (0, t.children)(a())
                }
        },
        73105: (t, e, n) => {
            "use strict";
            n.d(e, {
                RD: () => W,
                WA: () => G,
                f5: () => D,
                Gb: () => L,
                Rs: () => H,
                _2: () => V,
                gL: () => U,
                fG: () => M
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

            function d(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(t, r.key, r)
                }
            }
            var p = function() {
                function t(e, n) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    this._shouldProcess = !1;
                    this._processing = !1;
                    this._minimumTimeRemaining = 5;
                    this._language = e;
                    this._languageHint = e;
                    this._onChange = n;
                    n(e)
                }
                var e = t.prototype;
                e.process = function(t) {
                    var e = this;
                    if (!this._processing) {
                        this._processing = !0;
                        requestIdleCallback((function(n) {
                            if (n.timeRemaining() <= e._minimumTimeRemaining) e._processEnd();
                            else {
                                t.length > 256 && (t = t.slice(0, 256));
                                (function(t, e) {
                                    return f.ZP.ensureModule("discord_spellcheck").then((function() {
                                        var n = f.ZP.requireModule("discord_spellcheck").cld;
                                        return new Promise((function(r, i) {
                                            n.detect(t, {
                                                httpHint: e,
                                                encodingHint: "UTF8"
                                            }, (function(t, e) {
                                                null != t ? i(new Error(t.message)) : !e.reliable || e.languages[0].percent < 90 || e.languages[0].score < 500 ? i(new Error("Not enough reliable text.")) : r(e.languages[0].code)
                                            }))
                                        }))
                                    }))
                                })(t, e._languageHint).then((function(t) {
                                    e.language = t;
                                    e._processEnd(n.didTimeout)
                                }), (function() {
                                    e._processEnd(n.didTimeout)
                                }))
                            }
                        }))
                    }
                };
                e._processEnd = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this._processing = !1;
                    t && this._minimumTimeRemaining++
                };
                ! function(t, e, n) {
                    e && d(t.prototype, e);
                    n && d(t, n)
                }(t, [{
                    key: "language",
                    get: function() {
                        return this._language
                    },
                    set: function(t) {
                        if (this._language !== t) {
                            this._language = t;
                            this._onChange(t)
                        }
                    }
                }, {
                    key: "languageHint",
                    set: function(t) {
                        this._languageHint = t
                    }
                }]);
                return t
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

            function v(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function y(t, e, n, r, i, o, u) {
                try {
                    var a = t[o](u),
                        l = a.value
                } catch (t) {
                    n(t);
                    return
                }
                a.done ? e(l) : Promise.resolve(l).then(r, i)
            }

            function g(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = t.apply(e, n);

                        function u(t) {
                            y(o, r, i, u, a, "next", t)
                        }

                        function a(t) {
                            y(o, r, i, u, a, "throw", t)
                        }
                        u(void 0)
                    }))
                }
            }

            function m(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(t, r.key, r)
                }
            }

            function b(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(t); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (e && o.length === e) break
                            }
                        } catch (t) {
                            a = !0;
                            i = t
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return v(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return v(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var O = function(t, e) {
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
                                    (r = 0,
                                        i) && (o = [2 & o[0], i.value]);
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
                                    o = e.call(t, u)
                                } catch (t) {
                                    o = [6, t];
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
                S = null === r.Z || void 0 === r.Z ? void 0 : r.Z.spellCheck;

            function E(t) {
                var e;
                t = null !== (e = h[t]) && void 0 !== e ? e : t;
                var n = (0, i.Q)(t.replace(/[_-]/g, "-"));
                if (null != n && null != n.langtag.language && null != n.langtag.region) {
                    var r = n.langtag,
                        o = r.language,
                        u = r.region;
                    return "".concat(o.language.toLowerCase(), "-").concat(u.toUpperCase())
                }
                _.error("".concat(t, " is not a valid locale."))
            }
            var w = function() {
                    function t(e) {
                        var n = this;
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        this._enabled = !0;
                        this.misspelledWord = "";
                        this.corrections = [];
                        var r = b(c.default.locale.split("-"), 2),
                            i = r[0],
                            o = r[1];
                        this.regionPreference = o;
                        var u = this.getAvailableLanguages(e);
                        this.languageDetector = new p(i, (function(t) {
                            var r = "".concat(t, "-").concat(n.regionPreference);
                            if (-1 !== e.indexOf(r)) n.setLocale(r);
                            else {
                                var o, a = null !== (o = u[t]) && void 0 !== o ? o : h[i];
                                null != a && n.setLocale(a)
                            }
                        }));
                        S.on("spellcheck-result", (function(t, e) {
                            n.misspelledWord = null != t ? t : "";
                            n.corrections = null != e ? e : []
                        }))
                    }
                    var e = t.prototype;
                    e.setLearnedWords = function(t) {
                        S.setLearnedWords(t)
                    };
                    e.setLocale = function(t) {
                        var e;
                        null === (e = S.setLocale(t)) || void 0 === e || e.then((function(e) {
                            _.info("Switching to ".concat(t), e ? "(available)" : "(unavailable)")
                        }))
                    };
                    e.setAppLocale = function(t) {
                        this.regionPreference = t.split("-")[1]
                    };
                    e.detectLanguage = function(t) {
                        this.enabled && this.languageDetector.process(t)
                    };
                    e.getAvailableLanguages = function(t) {
                        var e = {};
                        t.forEach((function(t) {
                            var n, r = b(t.split("-"), 1)[0];
                            e[r] = null !== (n = e[r]) && void 0 !== n ? n : t
                        }));
                        return e
                    };
                    e.isMisspelled = function(t, e) {
                        return "" !== this.misspelledWord && t === this.misspelledWord
                    };
                    e.getCorrectionsForMisspelling = function(t, e) {
                        return this.isMisspelled(t, e) ? this.corrections : []
                    };
                    e.replaceMisspelling = function(t) {
                        S.replaceMisspelling(t)
                    };
                    ! function(t, e, n) {
                        e && m(t.prototype, e);
                        n && m(t, n)
                    }(t, [{
                        key: "enabled",
                        get: function() {
                            return this._enabled
                        },
                        set: function(t) {
                            this._enabled = t
                        }
                    }]);
                    return t
                }(),
                I = u().debounce((function(t, e) {
                    var n = function(t) {
                        if (null == t) return null;
                        if ((0, a.k)(t, HTMLInputElement) || (0, a.k)(t, HTMLTextAreaElement)) return t.value;
                        if ((0, a.k)(t) && t.hasAttribute("contenteditable")) return t.textContent
                    }(e);
                    null != n && t.detectLanguage(n)
                }), 250);

            function P(t) {
                null != document.body && document.body.addEventListener("beforeinput", (function(e) {
                    return I(t, e.target)
                }), !0)
            }

            function T() {
                return (T = g((function() {
                    var t, e, n, r;
                    return O(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, S.getAvailableDictionaries()];
                            case 1:
                                e = null !== (t = i.sent()) && void 0 !== t ? t : [];
                                n = e.map(E).filter(s.lm);
                                P(r = new w(n));
                                return [2, r]
                        }
                    }))
                }))).apply(this, arguments)
            }
            var R = n(120415);

            function C(t, e, n, r, i, o, u) {
                try {
                    var a = t[o](u),
                        l = a.value
                } catch (t) {
                    n(t);
                    return
                }
                a.done ? e(l) : Promise.resolve(l).then(r, i)
            }

            function A(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = t.apply(e, n);

                        function u(t) {
                            C(o, r, i, u, a, "next", t)
                        }

                        function a(t) {
                            C(o, r, i, u, a, "throw", t)
                        }
                        u(void 0)
                    }))
                }
            }
            var N = function(t, e) {
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
                                (r = 0,
                                    i) && (o = [2 & o[0], i.value]);
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
                                o = e.call(t, u)
                            } catch (t) {
                                o = [6, t];
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

            function x() {
                return null != (null === r.Z || void 0 === r.Z ? void 0 : r.Z.spellCheck)
            }

            function L() {
                return (0, R.nI)() && x()
            }
            var j = L() ? function() {
                return T.apply(this, arguments)
            }() : null;

            function U(t) {
                return k.apply(this, arguments)
            }

            function k() {
                return (k = A((function(t) {
                    var e;
                    return N(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, j];
                            case 1:
                                if (null == (e = n.sent())) return [2];
                                e.enabled = t;
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function M(t) {
                return Z.apply(this, arguments)
            }

            function Z() {
                return (Z = A((function(t) {
                    var e;
                    return N(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, j];
                            case 1:
                                if (null == (e = n.sent())) return [2];
                                e.setLearnedWords(t);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function D(t) {
                return F.apply(this, arguments)
            }

            function F() {
                F = A((function(t) {
                    var e, n, r = arguments;
                    return N(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                e = r.length > 1 && void 0 !== r[1] && r[1];
                                return [4, j];
                            case 1:
                                return null == (n = i.sent()) ? [2, !1] : [2, n.isMisspelled(t, e)]
                        }
                    }))
                }));
                return F.apply(this, arguments)
            }

            function G(t) {
                return z.apply(this, arguments)
            }

            function z() {
                z = A((function(t) {
                    var e, n, r, i = arguments;
                    return N(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                e = i.length > 1 && void 0 !== i[1] && i[1], n = i.length > 2 && void 0 !== i[2] ? i[2] : 5;
                                return [4, j];
                            case 1:
                                return null == (r = o.sent()) ? [2, []] : [2, r.getCorrectionsForMisspelling(t, e).slice(0, n)]
                        }
                    }))
                }));
                return z.apply(this, arguments)
            }

            function H(t) {
                return B.apply(this, arguments)
            }

            function B() {
                return (B = A((function(t) {
                    var e;
                    return N(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, j];
                            case 1:
                                if (null == (e = n.sent())) return [2];
                                e.replaceMisspelling(t);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function V(t) {
                return Y.apply(this, arguments)
            }

            function Y() {
                return (Y = A((function(t) {
                    var e;
                    return N(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, j];
                            case 1:
                                if (null == (e = n.sent())) return [2];
                                e.setAppLocale(t);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function W(t) {
                if (!x()) return function() {};
                var e = r.Z.spellCheck.on("spellcheck-result", t);
                return null != e ? e : function() {}
            }
        },
        990554: (t, e, n) => {
            "use strict";
            n.d(e, {
                l: () => i
            });
            var r = n(421281);

            function i(t, e) {
                for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++) i[o - 2] = arguments[o];
                var u = i.reduce((function(t, e) {
                        return t + (0, r.De)(e)
                    }), ""),
                    a = "".concat(e).concat(u),
                    l = t[a];
                if (null != l) return l;
                0
            }
        },
        391438: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => c
            });
            var r = n(281110),
                i = n(652591);

            function o(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function u(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        o(t, e, n[e])
                    }))
                }
                return t
            }

            function a(t, e) {
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

            function l(t, e, n) {
                var r = e.trackedActionData,
                    o = a(e, ["trackedActionData"]),
                    l = {
                        url: o.url,
                        request_method: n
                    };
                return new Promise((function(e, n) {
                    t(o).then((function(t) {
                        var n = r.properties;
                        "function" == typeof r.properties && (n = r.properties(t));
                        (0,
                            i.trackNetworkAction)(r.event, u({
                            status_code: t.status
                        }, l, n));
                        e(t)
                    })).catch((function(t) {
                        var e, o, a = r.properties;
                        "function" == typeof r.properties && (a = r.properties(t));
                        (0, i.trackNetworkAction)(r.event, u({
                            status_code: t.status,
                            error_code: null === (e = t.body) || void 0 === e ? void 0 : e.code,
                            error_message: null === (o = t.body) || void 0 === o ? void 0 : o.message
                        }, l, a));
                        n(t)
                    }))
                }))
            }
            const c = {
                get: function(t) {
                    return l(r.ZP.get, t, "get")
                },
                post: function(t) {
                    return l(r.ZP.post, t, "post")
                },
                put: function(t) {
                    return l(r.ZP.put, t, "put")
                },
                patch: function(t) {
                    return l(r.ZP.patch, t, "patch")
                },
                delete: function(t) {
                    return l(r.ZP.delete, t, "del")
                }
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
                ZP: () => p,
                WS: () => f,
                zS: () => d
            });
            var r = n(131795),
                i = n.n(r),
                o = n(228721);
            const u = n(426080).Z;

            function a(t, e) {
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

            function c(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(t); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (e && o.length === e) break
                            }
                        } catch (t) {
                            a = !0;
                            i = t
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return a(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var s = "https://discordapp.page.link";

            function f() {
                return (0, o.Z)()
            }

            function d(t) {
                if (!t.startsWith(s)) return null;
                try {
                    var e = new URL(t).searchParams,
                        n = e.get("link");
                    if (null == n) return null;
                    var r, i = decodeURIComponent(n),
                        o = new URL(i).searchParams,
                        u = {
                            utmSource: null !== (r = e.get("utm_source")) && void 0 !== r ? r : void 0
                        },
                        a = !0,
                        l = !1,
                        f = void 0;
                    try {
                        for (var d, p = o.entries()[Symbol.iterator](); !(a = (d = p.next()).done); a = !0) {
                            var h = c(d.value, 2),
                                v = h[0],
                                y = h[1];
                            u[v] = y
                        }
                    } catch (t) {
                        l = !0;
                        f = t
                    } finally {
                        try {
                            a || null == p.return || p.return()
                        } finally {
                            if (l) throw f
                        }
                    }
                    return u
                } catch (t) {
                    return null
                }
            }

            function p(t, e) {
                var n = e.utmSource,
                    r = e.androidFallbackLink,
                    o = e.iosFallbackLink,
                    a = l(e, ["utmSource", "androidFallbackLink", "iosFallbackLink"]),
                    c = new URL(t);
                for (var f in a) {
                    var d = a[f];
                    null != d && c.searchParams.set(f, d)
                }
                var p, h, v, y, g, m = encodeURIComponent(c.toString()),
                    b = encodeURIComponent(u()),
                    O = (v = new RegExp("(".concat(["WebView", "(iPhone|iPod|iPad)(?!.*Safari/)"].join("|"), ")"), "ig"), y = null != (null === i() || void 0 === i() || null === (p = i().ua) || void 0 === p ? void 0 : p.match(v)),
                        g = "Safari" === (null === i() || void 0 === i() ? void 0 : i().name) && !y, "iOS" !== (null === i() || void 0 === i() || null === (h = i().os) || void 0 === h ? void 0 : h.family) || g ? 1 : 0),
                    _ = null != r ? encodeURIComponent(r) : null,
                    S = null != o ? encodeURIComponent(o) : null,
                    E = "".concat(s, "/?link=").concat(m, "&utm_source=").concat(n, "&apn=").concat("com.discord", "&isi=").concat(985746746, "&ibi=").concat("com.hammerandchisel.discord", "&sd=").concat(b, "&efr=").concat(O);
                null != _ && (E += "&afl=".concat(_));
                null != S && (E += "&ifl=".concat(S));
                return E
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
        }
    }
]);