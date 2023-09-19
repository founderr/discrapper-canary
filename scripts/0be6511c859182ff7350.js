(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [90189, 33600, 84832, 53935, 57678, 58621, 33973, 96043, 71402], {
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
                O_: () => N,
                qA: () => f,
                Ji: () => A,
                uR: () => x
            });
            var r = n(667294),
                i = n(468811),
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
            var v = function(e) {
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
                m = function(e) {
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
                _ = function(e) {
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
                }(v);

            function O(e, t) {
                return e === t ? e : Math.random() * (t - e + 1) + e
            }

            function E(e) {
                var t = Math.floor(O(0, e.length - 1));
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

            function I(e) {
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
                            return new m(O(e.minValue, e.maxValue));
                        case "linear":
                            return new b(e.value, e.addValue);
                        case "linear-random":
                            return new b(O(e.minValue, e.maxValue), O(e.minAddValue, e.maxAddValue));
                        case "oscillating":
                            return new _(e.value, e.start, e.final, e.duration, e.direction, e.easingFunction);
                        case "oscillating-random":
                            return new _(O(e.minValue, e.maxValue), O(e.minStart, e.maxStart), O(e.minFinal, e.maxFinal), O(e.minDuration, e.maxDuration), S(e.minDirection, e.maxDirection), E(e.easingFunctions)[0])
                    }
                }(h(h({}, e), {
                    valueType: "number"
                }))
            }

            function P(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            var t = w(e.value);
                            return new y(new m(t.x), new m(t.y));
                        case "static-random":
                            var n = w(e.minValue),
                                r = w(e.maxValue);
                            return new y(new m(O(n.x, r.x)), new m(O(n.y, r.y)));
                        case "linear":
                            t = w(e.value);
                            var i = w(e.addValue);
                            return new y(new b(t.x, i.x), new b(t.y, i.y));
                        case "linear-random":
                            n = w(e.minValue), r = w(e.maxValue);
                            var o = w(e.minAddValue),
                                u = w(e.maxAddValue);
                            return new y(new b(O(n.x, r.x), O(o.x, u.x)), new b(O(n.y, r.y), O(o.x, u.x)));
                        case "oscillating":
                            t = w(e.value);
                            var a = w(e.start),
                                l = w(e.final),
                                c = w(e.duration),
                                s = w(e.direction);
                            return new y(new _(t.x, a.x, l.x, c.x, s.x, e.easingFunction), new _(t.y, a.y, l.y, c.x, s.y, e.easingFunction));
                        case "oscillating-random":
                            n = w(e.minValue), r = w(e.maxValue);
                            var f = w(e.minStart),
                                d = w(e.maxStart),
                                p = w(e.minFinal),
                                h = w(e.maxFinal),
                                v = w(e.minDuration),
                                g = w(e.maxDuration),
                                I = w(e.minDirection),
                                T = w(e.maxDirection);
                            return new y(new _(O(n.x, r.x), O(f.x, d.x), O(p.x, h.x), O(v.x, g.x), S(I.x, T.x), E(e.easingFunctions)[0]), new _(O(n.y, r.y), O(f.y, d.y), O(p.y, h.y), O(v.y, g.y), S(I.y, T.y), E(e.easingFunctions)[0]))
                    }
                }(h(h({}, e), {
                    valueType: "Vector2"
                }))
            }

            function R(e) {
                return function(e) {
                    switch (e.type) {
                        case "static":
                            var t = I(e.value);
                            return new g(new m(t.x), new m(t.y), new m(t.z));
                        case "static-random":
                            var n = I(e.minValue),
                                r = I(e.maxValue);
                            return new g(new m(O(n.x, r.x)), new m(O(n.y, r.y)), new m(O(n.z, r.z)));
                        case "linear":
                            t = I(e.value);
                            var i = I(e.addValue);
                            return new g(new b(t.x, i.x), new b(t.y, i.y), new b(t.z, i.z));
                        case "linear-random":
                            n = I(e.minValue), r = I(e.maxValue);
                            var o = I(e.minAddValue),
                                u = I(e.maxAddValue);
                            return new g(new b(O(n.x, r.x), O(o.x, u.x)), new b(O(n.y, r.y), O(o.y, u.y)), new b(O(n.z, r.z), O(o.z, u.z)));
                        case "oscillating":
                            t = I(e.value);
                            var a = I(e.start),
                                l = I(e.final),
                                c = I(e.duration),
                                s = I(e.direction);
                            return new g(new _(t.x, a.x, l.x, c.x, s.x, e.easingFunction), new _(t.y, a.y, l.y, c.z, s.y, e.easingFunction), new _(t.z, a.z, l.z, c.z, s.z, e.easingFunction));
                        case "oscillating-random":
                            n = I(e.minValue), r = I(e.maxValue);
                            var f = I(e.minStart),
                                d = I(e.maxStart),
                                p = I(e.minFinal),
                                h = I(e.maxFinal),
                                v = I(e.minDuration),
                                y = I(e.maxDuration),
                                w = I(e.minDirection),
                                T = I(e.maxDirection);
                            return new g(new _(O(n.x, r.x), O(f.x, d.x), O(p.x, h.x), O(v.x, y.x), S(w.x, T.x), E(e.easingFunctions)[0]), new _(O(n.y, r.y), O(f.y, d.y), O(p.y, h.y), O(v.y, y.y), S(w.y, T.y), E(e.easingFunctions)[0]), new _(O(n.z, r.z), O(f.z, d.z), O(p.z, h.z), O(v.z, y.z), S(w.z, T.z), E(e.easingFunctions)[0]))
                    }
                }(h(h({}, e), {
                    valueType: "Vector3"
                }))
            }

            function C(e, t, n, r, i) {
                var o = function(e, t) {
                        return h(h({
                            id: t
                        }, s), e)
                    }(t, e),
                    u = P(o.size),
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
                        return -1 !== r ? r : Math.floor(O(0, n.colors.length - 1))
                    }(null != r ? r : l, i, n);
                return new c({
                    id: e,
                    position: P(o.position),
                    velocity: P(o.velocity),
                    rotation: R(o.rotation),
                    dragCoefficient: P(o.dragCoefficient),
                    size: u,
                    opacity: T(o.opacity),
                    spriteX: d * n.spriteWidth + 2 * d,
                    spriteY: f * n.spriteHeight + 2 * f,
                    spriteWidth: n.spriteWidth,
                    spriteHeight: n.spriteHeight
                })
            }
            var N = r.forwardRef((function(e, t) {
                var o = e.className,
                    u = e.environment,
                    l = e.onClick,
                    c = e.onMouseDown,
                    s = e.onMouseMove,
                    f = e.onMouseUp,
                    d = e.onBeforeRender,
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
                    g = r.useRef(new Map),
                    m = r.useRef(null),
                    b = r.useRef(0),
                    _ = r.useRef(0),
                    O = r.useCallback((function() {
                        var e = y.current;
                        if (null != e) {
                            var t = e.getContext("2d");
                            if (null != t) {
                                t.clearRect(0, 0, e.width, e.height), null == d || d(t), g.current.forEach((function(n, r) {
                                    var i = n.confetti,
                                        o = n.spriteCanvas;
                                    i.update(u), i.draw(o, t), i.shouldDestroy(e, u) && g.current.delete(r)
                                })), null == p || p(t), g.current.size > 0 ? m.current = window.requestAnimationFrame(O) : (t.clearRect(0, 0, e.width, e.height), m.current = null);
                                var n = Date.now();
                                0 !== b.current && (_.current = 1e3 / (n - b.current)), b.current = n
                            }
                        }
                    }), [u, p, d]);
                r.useEffect((function() {
                    null != m.current && (window.cancelAnimationFrame(m.current), m.current = window.requestAnimationFrame(O))
                }), [O]);
                var E = r.useCallback((function(e, t) {
                        g.current.set(e.id, {
                            confetti: e,
                            spriteCanvas: t
                        }), null == m.current && O()
                    }), [O]),
                    S = r.useCallback((function(e, t, n, r, o) {
                        var u, a = C(null !== (u = e.id) && void 0 !== u ? u : (0, i.v4)(), e, n, r, o);
                        return E(a, t), a
                    }), [E]),
                    w = r.useCallback((function(e) {
                        g.current.delete(e)
                    }), []),
                    I = r.useCallback((function() {
                        return g.current.clear()
                    }), []),
                    T = r.useCallback((function() {
                        return y.current
                    }), []);
                r.useImperativeHandle(t, (function() {
                    return {
                        createConfetti: S,
                        addConfetti: E,
                        deleteConfetti: w,
                        clearConfetti: I,
                        getCanvas: T
                    }
                }), [S, E, w, I, T]);
                var P = r.useCallback((function(e, t) {
                        var n, r, i = t.clickHandler,
                            o = t.mouseHandler;
                        if (null != i || null != o) {
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
                                if (a(c, {
                                        x: l.left,
                                        y: l.top,
                                        width: l.width,
                                        height: l.height
                                    })) {
                                    if (null != o) return o(e);
                                    if (null != i) {
                                        var s = -1e3 / _.current * 2,
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
                    R = r.useCallback((function(e) {
                        return P(e, {
                            clickHandler: l
                        })
                    }), [P, l]),
                    N = r.useCallback((function(e) {
                        return P(e, {
                            clickHandler: c
                        })
                    }), [P, c]),
                    A = r.useCallback((function(e) {
                        return P(e, {
                            mouseHandler: s
                        })
                    }), [P, s]),
                    x = r.useCallback((function(e) {
                        return P(e, {
                            mouseHandler: f
                        })
                    }), [P, f]);
                return r.useEffect((function() {
                    var e = function(e, t, n) {
                        null != n && window.addEventListener(e, t)
                    };
                    return e("click", R, l), e("mousedown", N, c), e("mousemove", A, s), e("mouseup", x, f),
                        function() {
                            window.removeEventListener("click", R), window.removeEventListener("mousedown", N), window.removeEventListener("mousemove", A), window.removeEventListener("mouseup", A)
                        }
                }), [R, N, A, x, l, c, s, f]), r.useEffect((function() {
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
            var A = r.forwardRef((function(e, t) {
                var n, o = e.className,
                    a = e.visible,
                    l = void 0 !== a && a,
                    c = e.sprites,
                    s = e.colors,
                    f = e.spriteWidth,
                    d = e.spriteHeight,
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
                                colors: s,
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
                        for (var t in y.current) y.current[t](e)
                    }), []),
                    _ = r.useCallback((function() {
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
                                        return e.sent(), g(), v.current = !0, b(!0), [2]
                                }
                            }))
                        }))
                    }), [b, m, g]);
                return r.useEffect((function() {
                    _()
                }), [_]), r.useEffect((function() {
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

            function x(e, t) {
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
        460122: (e, t, n) => {
            e.exports = n.p + "fdbcc8efcf1ba7be0df5fa425a5df5b3.svg"
        },
        873994: (e, t, n) => {
            e.exports = n.p + "b2ce83d133a3d9fa54411e732f2fa74c.svg"
        },
        413369: (e, t, n) => {
            e.exports = n.p + "b820b6002cb6ff7c3c2fb123d72c7866.svg"
        },
        132354: (e, t, n) => {
            e.exports = n.p + "a9009aaba5bfab576a517f6915b3c0b6.svg"
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
            e.exports = function(e, i, o) {
                if ("string" != typeof i) {
                    var u = Object.getOwnPropertyNames(i);
                    r && (u = u.concat(Object.getOwnPropertySymbols(i)));
                    for (var a = 0; a < u.length; ++a)
                        if (!(t[u[a]] || n[u[a]] || o && o[u[a]])) try {
                            e[u[a]] = i[u[a]]
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
        571131: e => {
            e.exports = function(e, t) {
                var n = e.length;
                e.sort(t);
                for (; n--;) e[n] = e[n].value;
                return e
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

                function r(e, t, n, r, i, o, u) {
                    var a = this;
                    a.r1 = e;
                    a.r2 = t;
                    a.g1 = n;
                    a.g2 = r;
                    a.b1 = i;
                    a.b2 = o;
                    a.histo = u
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
                            var i, o, u, a = 0;
                            for (i = n.r1; i <= n.r2; i++)
                                for (o = n.g1; o <= n.g2; o++)
                                    for (u = n.b1; u <= n.b2; u++) a += r[e(i, o, u)] || 0;
                            n._count = a;
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
                            var i, o, u, a, l = 0,
                                c = 0,
                                s = 0,
                                f = 0;
                            for (o = n.r1; o <= n.r2; o++)
                                for (u = n.g1; u <= n.g2; u++)
                                    for (a = n.b1; a <= n.b2; a++) {
                                        l += i = r[e(o, u, a)] || 0;
                                        c += i * (o + .5) * 8;
                                        s += i * (u + .5) * 8;
                                        f += i * (a + .5) * 8
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
                        for (var t, n, r, i = this.vboxes, o = 0; o < i.size(); o++)
                            if ((n = Math.sqrt(Math.pow(e[0] - i.peek(o).color[0], 2) + Math.pow(e[1] - i.peek(o).color[1], 2) + Math.pow(e[2] - i.peek(o).color[2], 2))) < t || void 0 === t) {
                                t = n;
                                r = i.peek(o).color
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

                function o(n, r) {
                    if (r.count()) {
                        var i = r.r2 - r.r1 + 1,
                            o = r.g2 - r.g1 + 1,
                            u = r.b2 - r.b1 + 1,
                            a = t.max([i, o, u]);
                        if (1 == r.count()) return [r.copy()];
                        var l, c, s, f, d = 0,
                            p = [],
                            h = [];
                        if (a == i)
                            for (l = r.r1; l <= r.r2; l++) {
                                f = 0;
                                for (c = r.g1; c <= r.g2; c++)
                                    for (s = r.b1; s <= r.b2; s++) f += n[e(l, c, s)] || 0;
                                d += f;
                                p[l] = d
                            } else if (a == o)
                                for (l = r.g1; l <= r.g2; l++) {
                                    f = 0;
                                    for (c = r.r1; c <= r.r2; c++)
                                        for (s = r.b1; s <= r.b2; s++) f += n[e(c, l, s)] || 0;
                                    d += f;
                                    p[l] = d
                                } else
                                    for (l = r.b1; l <= r.b2; l++) {
                                        f = 0;
                                        for (c = r.r1; c <= r.r2; c++)
                                            for (s = r.g1; s <= r.g2; s++) f += n[e(c, s, l)] || 0;
                                        d += f;
                                        p[l] = d
                                    }
                        p.forEach((function(e, t) {
                            h[t] = d - e
                        }));
                        return v(a == i ? "r" : a == o ? "g" : "b")
                    }

                    function v(e) {
                        var t, n, i, o, u, a = e + "1",
                            c = e + "2",
                            s = 0;
                        for (l = r[a]; l <= r[c]; l++)
                            if (p[l] > d / 2) {
                                i = r.copy();
                                o = r.copy();
                                u = (t = l - r[a]) <= (n = r[c] - l) ? Math.min(r[c] - 1, ~~(l + n / 2)) : Math.max(r[a], ~~(l - 1 - t / 2));
                                for (; !p[u];) u++;
                                s = h[u];
                                for (; !s && p[u - 1];) s = h[--u];
                                i[c] = u;
                                o[a] = i[c] + 1;
                                return [i, o]
                            }
                    }
                }
                return {
                    quantize: function(u, a) {
                        if (!u.length || a < 2 || a > 256) return !1;
                        var l = function(t) {
                            var n, r, i, o, u = new Array(32768);
                            t.forEach((function(t) {
                                r = t[0] >> 3;
                                i = t[1] >> 3;
                                o = t[2] >> 3;
                                n = e(r, i, o);
                                u[n] = (u[n] || 0) + 1
                            }));
                            return u
                        }(u);
                        l.forEach((function() {
                            0
                        }));
                        var c = function(e, t) {
                                var n, i, o, u = 1e6,
                                    a = 0,
                                    l = 1e6,
                                    c = 0,
                                    s = 1e6,
                                    f = 0;
                                e.forEach((function(e) {
                                    n = e[0] >> 3;
                                    i = e[1] >> 3;
                                    o = e[2] >> 3;
                                    n < u ? u = n : n > a && (a = n);
                                    i < l ? l = i : i > c && (c = i);
                                    o < s ? s = o : o > f && (f = o)
                                }));
                                return new r(u, a, l, c, s, f, t)
                            }(u, l),
                            s = new n((function(e, n) {
                                return t.naturalOrder(e.count(), n.count())
                            }));
                        s.push(c);

                        function f(e, t) {
                            for (var n, r = 1, i = 0; i < 1e3;)
                                if ((n = e.pop()).count()) {
                                    var u = o(l, n),
                                        a = u[0],
                                        c = u[1];
                                    if (!a) return;
                                    e.push(a);
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
                        f(s, .75 * a);
                        for (var d = new n((function(e, n) {
                                return t.naturalOrder(e.count() * e.volume(), n.count() * n.volume())
                            })); s.size();) d.push(s.pop());
                        f(d, a - d.size());
                        for (var p = new i; d.size();) p.push(d.pop());
                        return p
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
                        var h, v = null === (h = e.target) || void 0 === h ? void 0 : h.getBoundingClientRect(),
                            y = null != v ? v : {},
                            g = y.left,
                            m = void 0 === g ? 0 : g,
                            b = y.top,
                            _ = void 0 === b ? 0 : b,
                            O = y.width,
                            E = void 0 === O ? 0 : O,
                            S = y.height;
                        d = m + E / 2;
                        p = _ + (void 0 === S ? 0 : S) / 2
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
                    if ((null == n ? void 0 : n.enableSpellCheck) && (0, o.nI)()) var I = (0, u.RD)((function() {
                        I();
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
        810978: (e, t, n) => {
            "use strict";
            n.d(t, {
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

            function f(e, t, n, r, i, o, u) {
                try {
                    var a = e[o](u),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function d(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function u(e) {
                            f(o, r, i, u, a, "next", e)
                        }

                        function a(e) {
                            f(o, r, i, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }
            var p = function(e, t) {
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

            function h(e, t, n, r, i) {
                return v.apply(this, arguments)
            }

            function v() {
                return (v = d((function(e, t, n, s, f) {
                    var d, h, v, y;
                    return p(this, (function(p) {
                        switch (p.label) {
                            case 0:
                                i.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH",
                                    skuId: e
                                });
                                p.label = 1;
                            case 1:
                                p.trys.push([1, 5, , 6]);
                                d = {
                                    url: c.ANM.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS(e),
                                    oldFormErrors: !0
                                };
                                h = {};
                                null != t && (h.country_code = t);
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
                                    skuId: e,
                                    subscriptionPlans: v.body
                                });
                                return [3, 6];
                            case 5:
                                y = p.sent();
                                i.Z.dispatch({
                                    type: "SUBSCRIPTION_PLANS_FETCH_FAILURE",
                                    skuId: e
                                });
                                (0, a.q2)(y);
                                throw new o.Z(y);
                            case 6:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function y(e, t) {
                return Promise.all(e.filter((function(e) {
                    return e !== s.Si.NONE
                })).map((function(e) {
                    return h(e, t)
                })))
            }

            function g(e, t, n) {
                return Promise.all(s.YQ.filter((function(e) {
                    return e !== s.Si.NONE
                })).map((function(r) {
                    return h(r, e, t, void 0, n)
                })))
            }

            function m() {
                i.Z.dispatch({
                    type: "SUBSCRIPTION_PLANS_RESET"
                })
            }
        },
        973889: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => f
            });
            var r = n(281110),
                i = n(2590),
                o = n(473708);

            function u(e) {
                u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return u(e)
            }

            function a(e, t) {
                return !t || "object" !== c(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function l(e, t) {
                l = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return l(e, t)
            }
            var c = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function s(e) {
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
                    var n, r = u(e);
                    if (t) {
                        var i = u(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return a(this, n)
                }
            }
            var f = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && l(e, t)
                }(n, e);
                var t = s(n);

                function n(e, r) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    return t.call(this, e, r, o.Z.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: i.yXt.STATUS
                    }))
                }
                return n
            }(r.ZP.V6OrEarlierAPIError)
        },
        83797: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var r = n(2590);

            function i(e) {
                return null != e && e.type !== r.IIU.CUSTOM_STATUS && (null != e.details || null != e.assets && (null != e.assets.large_image || null != e.assets.small_text) || null != e.party || null != e.secrets || null != e.state)
            }
        },
        396043: (e, t, n) => {
            "use strict";
            n.d(t, {
                v_: () => A,
                JS: () => N,
                hH: () => R,
                AB: () => x,
                ZP: () => j,
                oG: () => k,
                kO: () => M,
                yw: () => U
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
                p = n(525077),
                h = n(682776),
                v = n(491260),
                y = n(563367),
                g = n(715107),
                m = n(464187),
                b = n(407561),
                _ = n(652591),
                O = n(563135),
                E = n(671723);
            var S = n(2590),
                w = n(897196);

            function I(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function T(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        I(e, t, n[t])
                    }))
                }
                return e
            }

            function P(e) {
                var t = 0;
                for (var n in e) t += 1;
                return t
            }

            function R(e) {
                if (null == e) return null;
                var t = d.Z.getGuild(e);
                if (null == t) return null;
                var n, r = a.default.getId(),
                    i = f.ZP.getMember(e, r),
                    o = c.ZP.getChannels(e),
                    u = o[c.sH].length,
                    l = o[c.Zb].length,
                    p = b.Z.getVoiceStates(e);
                return {
                    guild_id: t.id,
                    guild_size_total: s.Z.getMemberCount(e),
                    guild_num_channels: u + l,
                    guild_num_text_channels: u,
                    guild_num_voice_channels: l,
                    guild_num_roles: P(t.roles),
                    guild_member_num_roles: null != i ? i.roles.length : 0,
                    guild_member_perms: String(null !== (n = h.Z.getGuildPermissions(t)) && void 0 !== n ? n : O.ZP.NONE),
                    guild_is_vip: t.hasFeature(S.oNc.VIP_REGIONS),
                    is_member: null != i,
                    num_voice_channels_active: P(p)
                }
            }

            function C(e, t) {
                return {
                    channel_static_route: t,
                    channel_hidden: !1
                }
            }

            function N(e) {
                if (null == e) return null;
                var t = l.Z.getChannel(e);
                return null == t ? null : A(t)
            }

            function A(e) {
                if (null == e) return null;
                var t, n = !1,
                    r = e.getGuildId();
                if (null != r) {
                    var i = function(e) {
                        if (null == e) return !1;
                        var t = e.permissionOverwrites[r];
                        return null != t && o.Z.has(t.deny, S.Plq.VIEW_CHANNEL)
                    };
                    n = u.Ec.has(e.type) && null != e.parent_id ? i(l.Z.getChannel(e.parent_id)) : i(e)
                }
                return {
                    channel_id: e.id,
                    channel_type: e.type,
                    channel_size_total: e.isPrivate() ? e.recipients.length : 0,
                    channel_member_perms: String(null != r && null !== (t = h.Z.getChannelPermissions(e)) && void 0 !== t ? t : O.ZP.NONE),
                    channel_hidden: n
                }
            }

            function x(e) {
                if (null == e) return null;
                var t = l.Z.getChannel(e);
                if (null == t) return null;
                var n, r = p.Z.isVideoEnabled(),
                    i = y.Z.getMediaSessionId();
                return T({
                    channel_id: t.id,
                    channel_type: t.type,
                    guild_id: t.getGuildId(),
                    media_session_id: i
                }, M(t.getGuildId(), t.id, r), {
                    game_name: null != (n = E.ZP.getCurrentGameForAnalytics()) ? n.name : null,
                    game_id: null != n ? n.id : null
                })
            }

            function L(e, t) {
                return null == e ? null != t ? t : null : e.isPrivate() ? null : null !== (r = null !== (n = e.getGuildId()) && void 0 !== n ? n : t) && void 0 !== r ? r : null;
                var n, r
            }

            function U(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (!_.default.isThrottled(e)) {
                    var r = !("location" in t) || t.location !== S.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
                        i = "guild_id" in t ? t.guild_id : r ? m.Z.getGuildId() : null,
                        o = "channel_id" in t ? t.channel_id : r ? g.Z.getChannelId(i) : null,
                        u = l.Z.getChannel(o),
                        a = L(u, i),
                        c = T({}, t, R(a), null != i && null != o && (0, w.AB)(o) ? C(0, o) : A(u));
                    _.default.track(e, c, {
                        flush: n
                    })
                }
            }

            function M(e, t, n) {
                var r = {
                    voice_state_count: 0,
                    video_stream_count: 0,
                    video_enabled: n
                };
                i()(b.Z.getVoiceStates(e)).filter((function(e) {
                    return e.channelId === t
                })).filter((function(e) {
                    return e.userId !== a.default.getId()
                })).forEach((function(e) {
                    r.voice_state_count++;
                    (e.selfVideo || e.selfStream) && r.video_stream_count++
                }));
                return r
            }

            function k(e, t) {
                var n = {
                    custom_status_count: 0
                };
                i()(b.Z.getVoiceStates(e)).forEach((function(e) {
                    e.channelId === t && null != v.Z.findActivity(e.userId, (function(e) {
                        return e.type === S.IIU.CUSTOM_STATUS
                    })) && n.custom_status_count++
                }));
                return n
            }
            const j = {
                trackWithMetadata: U,
                getVoiceStateMetadata: M
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
        255875: (e, t, n) => {
            "use strict";
            n.d(t, {
                E: () => p,
                h: () => h
            });
            var r = n(785893),
                i = n(667294),
                o = n(652411),
                u = n(318715),
                a = n(316878),
                l = n(2590);

            function c(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        c(e, t, n[t])
                    }))
                }
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

            function h(e) {
                var t = e.children,
                    n = e.confettiCanvas,
                    l = e.spriteCanvas,
                    c = e.baseConfig,
                    h = e.addClickListener,
                    v = e.removeClickListener,
                    y = (0, o.uR)(n, l),
                    g = (0, u.ZP)([a.Z], (function() {
                        return a.Z.useReducedMotion
                    })),
                    m = i.useMemo((function() {
                        return g ? d : {
                            confettiCanvas: n,
                            cannon: y,
                            createConfetti: function(e, t) {
                                return y.createConfetti(s({}, c, e), t)
                            },
                            createConfettiAt: function(e, t, n, r) {
                                return y.createConfetti(s(f(s({}, c), {
                                    position: {
                                        type: "static",
                                        value: {
                                            x: e,
                                            y: t
                                        }
                                    }
                                }), n), r)
                            },
                            createMultipleConfetti: function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                                    n = arguments.length > 2 ? arguments[2] : void 0;
                                return y.createMultipleConfetti(s({}, c, e), t, n)
                            },
                            createMultipleConfettiAt: function(e, t, n) {
                                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                                    i = arguments.length > 4 ? arguments[4] : void 0;
                                return y.createMultipleConfetti(s(f(s({}, c), {
                                    position: {
                                        type: "static",
                                        value: {
                                            x: e,
                                            y: t
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
                    children: t
                })
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
                WC: () => y,
                z8: () => g,
                km: () => b,
                k0: () => _,
                af: () => O
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

            function v(e, t) {
                return {
                    value: e,
                    get label() {
                        return null != t ? t() : e
                    }
                }
            }
            var y = [v(r.RESOLUTION_720), v(r.RESOLUTION_1080), v(r.RESOLUTION_1440), v(r.RESOLUTION_SOURCE, (function() {
                    return c.Z.Messages.SCREENSHARE_SOURCE
                }))],
                g = [v(r.RESOLUTION_720), v(r.RESOLUTION_1080), v(r.RESOLUTION_1440)],
                m = function(e) {
                    return "".concat(e, "p")
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
                _ = [v(i.FPS_15), v(i.FPS_30), v(i.FPS_60)],
                O = [v(i.FPS_15, (function() {
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
        773411: (e, t, n) => {
            "use strict";
            n.d(t, {
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
                u = n(339432),
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
        133600: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => q
            });
            var r = n(785893),
                i = n(667294),
                o = n(294184),
                u = n.n(o),
                a = n(202351),
                l = n(882723),
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
                _ = n(641277),
                O = n(443812),
                E = n(644144),
                S = n(530562),
                w = n(749565),
                I = n(882211),
                T = n(203600),
                P = n(2590),
                R = n(473708),
                C = n(231594),
                N = n.n(C);

            function A(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function x(e, t, n, r, i, o, u) {
                try {
                    var a = e[o](u),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function L(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function u(e) {
                            x(o, r, i, u, a, "next", e)
                        }

                        function a(e) {
                            x(o, r, i, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function U(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function M(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function k(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function j(e) {
                j = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return j(e)
            }

            function D(e, t) {
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

            function Z(e, t) {
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

            function F(e, t) {
                return !t || "object" !== z(t) && "function" != typeof t ? A(e) : t
            }

            function G(e, t) {
                G = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return G(e, t)
            }
            var z = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function H(e) {
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
                    var n, r = j(e);
                    if (t) {
                        var i = j(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return F(this, n)
                }
            }
            var B = function(e, t) {
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
                    },
                    "function" == typeof Symbol && (o[Symbol.iterator] = function() {
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

            function V() {
                var e = i.useContext(d.E).createMultipleConfettiAt;
                i.useEffect((function() {
                    e(window.innerWidth / 2, window.innerHeight / 2)
                }), [e]);
                return null
            }
            var W = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && G(e, t)
                    }(n, e);
                    var t = H(n);

                    function n() {
                        U(this, n);
                        var e;
                        (e = t.apply(this, arguments)).state = {
                            error: null,
                            accepted: !1,
                            opened: !1,
                            isCustomGift: !1
                        };
                        e.handleOpen = function() {
                            e.setState({
                                opened: !0
                            })
                        };
                        var r = A(e);
                        e.handleAccept = L((function() {
                            var e, t, n, i;
                            return B(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        e = r.props, t = e.giftCode, n = e.channelContext;
                                        if (null == t) throw new Error("GiftCode is null at acceptance.");
                                        o.label = 1;
                                    case 1:
                                        o.trys.push([1, 3, , 4]);
                                        return [4, s.Z.redeemGiftCode(t.code, {
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
                        e.handleGoToLibrary = function() {
                            var t = e.props,
                                n = t.onClose,
                                r = t.libraryApplication;
                            (0, p.uL)(P.Z5c.APPLICATION_LIBRARY, {
                                state: {
                                    applicationId: null != r ? r.id : null
                                }
                            });
                            n()
                        };
                        return e
                    }
                    var i = n.prototype;
                    i.componentDidMount = function() {
                        var e = this.props,
                            t = e.application,
                            n = e.sku,
                            r = e.customGiftMessage;
                        null == t && null != n && c.Z.fetchApplication(n.applicationId);
                        this.setState({
                            isCustomGift: null != r
                        })
                    };
                    i.render = function() {
                        var e, t, n = this.props,
                            i = n.application,
                            o = n.accepting,
                            a = n.onClose,
                            c = n.giftCode,
                            s = n.headerId,
                            f = n.transitionState,
                            d = n.useReducedMotion,
                            p = n.onComplete,
                            h = g.default.getUser(c.userId),
                            v = this.state,
                            y = v.isCustomGift,
                            m = v.accepted;
                        switch (this.step) {
                            case P.wZ8.ERROR:
                                null == p || p(c, !1);
                                break;
                            case P.wZ8.SUCCESS:
                                null == p || p(c, !0)
                        }
                        return (0, r.jsxs)("div", {
                            children: [(0, r.jsxs)(l.ModalRoot, {
                                transitionState: f,
                                size: l.ModalSize.SMALL,
                                className: N().modal,
                                "aria-labelledby": s,
                                children: [null != c.giftStyle && !y && (0, r.jsx)(I.Z, {
                                    giftStyle: c.giftStyle,
                                    className: N().seasonalGiftIcon
                                }), (0, r.jsx)("div", {
                                    className: y ? void 0 : N().backSplash
                                }), (0,
                                    r.jsxs)(l.ModalContent, {
                                    className: u()((e = {}, k(e, N().content, !y), k(e, N().contentCustomGift, y), e)),
                                    children: [(0, r.jsx)(l.ModalCloseButton, {
                                        onClick: a,
                                        className: N().closeButton
                                    }), (null == c.giftStyle || y && this.state.accepted) && (0, r.jsx)(_.Z, {
                                        size: _.Z.Sizes.LARGE,
                                        game: i,
                                        skuId: c.skuId
                                    }), (0, r.jsxs)(l.Heading, {
                                        id: s,
                                        className: u()((t = {}, k(t, N().customGiftHeader, y && !m), k(t, N().header, !y || m), t)),
                                        variant: "heading-sm/semibold",
                                        children: [(0, r.jsx)("div", {
                                            className: u()(k({}, N().customGiftHeaderText, y)),
                                            children: this.firstHeaderText
                                        }), (0, r.jsx)("div", {
                                            children: this.secondHeaderText
                                        })]
                                    }), !(y && !this.state.accepted) && (0, r.jsx)(l.Text, {
                                        className: N().body,
                                        variant: "text-sm/normal",
                                        children: this.bodyText
                                    }), y && null != c.giftStyle && !this.state.accepted && (0, r.jsx)(I.Z, {
                                        className: N().giftAnimation,
                                        giftStyle: c.giftStyle
                                    }), y && this.state.opened && !this.state.accepted && (0, r.jsxs)(r.Fragment, {
                                        children: [(0, r.jsx)(l.FormTitle, {
                                            children: R.Z.Messages.GIFT_SENDER_INFO.format({
                                                senderDisplayName: w.ZP.getName(h)
                                            })
                                        }), (0,
                                            r.jsx)(l.Heading, {
                                            id: s,
                                            className: N().customMessage,
                                            variant: "heading-sm/bold",
                                            children: this.props.customGiftMessage
                                        })]
                                    }), (0, r.jsx)(l.Button, {
                                        submitting: o,
                                        onClick: this.handleClick,
                                        children: this.buttonText
                                    })]
                                })]
                            }), null == c.giftStyle || d ? null : (0, r.jsx)(V, {})]
                        })
                    };
                    ! function(e, t, n) {
                        t && M(e.prototype, t);
                        n && M(e, n)
                    }(n, [{
                        key: "step",
                        get: function() {
                            var e = this.props,
                                t = e.libraryApplication,
                                n = e.accepting,
                                r = e.giftCode,
                                i = this.state,
                                o = i.error,
                                u = i.accepted,
                                a = i.opened,
                                l = i.isCustomGift;
                            return (0, E.TO)(t, r, o, u, n, a, l)
                        }
                    }, {
                        key: "buttonText",
                        get: function() {
                            return (0, E.L2)(this.step, this.props.giftCode, this.state.isCustomGift)
                        }
                    }, {
                        key: "firstHeaderText",
                        get: function() {
                            var e = this.state,
                                t = e.isCustomGift,
                                n = e.opened,
                                r = e.accepted,
                                i = this.props,
                                o = i.giftCode,
                                u = i.subscriptionPlan;
                            if (t && !r) {
                                if (n) {
                                    var a = g.default.getUser(o.userId);
                                    return R.Z.Messages.GIFT_SUBSCRIPTION_INFO.format({
                                        senderDisplayName: w.ZP.getName(a),
                                        timeInterval: (null == u ? void 0 : u.interval) === T.rV.MONTH ? R.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH : R.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR
                                    })
                                }
                                return R.Z.Messages.GIFT_RECIPIENT_INFO.format({
                                    recipientDisplayName: w.ZP.getName(g.default.getCurrentUser())
                                })
                            }
                            return null == this.props.sku ? null : (0, E.dQ)(this.step, this.props.giftCode, this.props.sku)
                        }
                    }, {
                        key: "secondHeaderText",
                        get: function() {
                            if (!this.state.isCustomGift || this.state.opened || this.state.accepted) return null;
                            var e = g.default.getUser(this.props.giftCode.userId);
                            return R.Z.Messages.GIFT_SENDER_INFO.format({
                                senderDisplayName: w.ZP.getName(e)
                            })
                        }
                    }, {
                        key: "bodyText",
                        get: function() {
                            var e = this.props,
                                t = e.sku,
                                n = e.accepting,
                                r = e.libraryApplication,
                                i = e.subscriptionPlan;
                            if (null == t) return null;
                            var o = this.state,
                                u = o.error,
                                a = o.accepted,
                                l = o.isCustomGift;
                            return !o.opened && l ? null : (0, E.iM)({
                                step: this.step,
                                sku: t,
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
                            var e = this.props,
                                t = e.libraryApplication,
                                n = e.accepting,
                                r = this.state,
                                i = r.error,
                                o = r.accepted;
                            return (0, E.e$)(t, i, o, n, this.handleGoToLibrary)
                        }
                    }, {
                        key: "handleClick",
                        get: function() {
                            var e = this.props,
                                t = e.giftCode,
                                n = e.onClose;
                            switch (this.step) {
                                case P.wZ8.ERROR:
                                    return n;
                                case P.wZ8.SUCCESS:
                                    return __OVERLAY__ || null != t.subscriptionPlanId ? n : this.handleGoToLibrary;
                                case P.wZ8.OPEN:
                                    return this.handleOpen;
                                case P.wZ8.CONFIRM:
                                default:
                                    return this.handleAccept
                            }
                        }
                    }]);
                    return n
                }(i.Component),
                Y = a.ZP.connectStores([y.Z, b.Z, h.Z, v.Z, m.Z, f.Z], (function(e) {
                    var t = e.giftCode,
                        n = b.Z.get(t.skuId),
                        r = null != n ? h.Z.getGame(n.applicationId) : null,
                        i = f.Z.useReducedMotion;
                    return {
                        sku: n,
                        libraryApplication: null != n ? (0, E.z2)(t, n, y.Z) : null,
                        application: r,
                        subscriptionPlan: null != t.subscriptionPlanId ? (0, S.oE)(t.subscriptionPlanId) : null,
                        accepting: v.Z.getIsAccepting(t.code),
                        useReducedMotion: i
                    }
                }))(W);
            const q = function(e) {
                var t = e.channelContext,
                    n = e.code,
                    i = e.customGiftMessage,
                    o = Z(e, ["channelContext", "code", "customGiftMessage"]),
                    u = (0,
                        O.Dt)(),
                    l = (0, a.e7)([v.Z], (function() {
                        return v.Z.get(n)
                    }));
                return null == l ? null : (0, r.jsx)(Y, D(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            k(e, t, n[t])
                        }))
                    }
                    return e
                }({}, o), {
                    customGiftMessage: i,
                    channelContext: t,
                    giftCode: l,
                    headerId: u
                }))
            }
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
                v = n(487685),
                y = n(102921);

            function g(e) {
                if (null == e.threadMetadata) return 0;
                var t = 60 * e.threadMetadata.autoArchiveDuration * 1e3;
                return function(e) {
                    if (null == e.threadMetadata) return 0;
                    var t, n = null !== (t = d.ZP.lastMessageId(e.id)) && void 0 !== t ? t : e.id,
                        r = y.Z.extractTimestamp(n),
                        i = null != e.threadMetadata.archiveTimestamp ? new Date(e.threadMetadata.archiveTimestamp).getTime() : 0;
                    return Math.max(r, i)
                }(e) + t
            }
            var m = n(897196);

            function b(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function _(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function O(e) {
                O = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return O(e)
            }

            function E(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        _(e, t, n[t])
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

            function I(e, t) {
                I = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return I(e, t)
            }
            var T = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function P(e) {
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
                    var n, r = O(e);
                    if (t) {
                        var i = O(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return w(this, n)
                }
            }
            var R = {},
                C = {},
                N = {},
                A = {},
                x = {},
                L = {},
                U = null,
                M = {};

            function k() {
                R = {};
                x = {};
                C = {};
                N = {};
                A = {};
                U = p.Z.getChannelId();
                for (var e in M) clearTimeout(M[e]);
                M = {};
                h.Z.forEachGuild((function(e) {
                    D(e)
                }));
                Z()
            }

            function j(e) {
                delete R[e];
                delete x[e];
                delete C[e];
                delete N[e];
                delete A[e];
                D(e);
                for (var t in N[e]) G(e, t)
            }

            function D(e) {
                var t = h.Z.getThreadsForGuild(e);
                for (var n in t)
                    for (var r in t[n]) {
                        K(r);
                        var i = s.Z.getChannel(r);
                        if (null != i) {
                            var o = v.Z.joinTimestamp(r);
                            if (null != o) {
                                var u = {
                                        channel: i,
                                        joinTimestamp: o.getTime()
                                    },
                                    a = J(i),
                                    l = a.isUnread,
                                    c = a.isRelevant,
                                    f = a.isTimedRelevant;
                                Q(R, i, u, !1);
                                Q(x, i, c ? u : null, !1);
                                Q(C, i, l ? u : null, !1);
                                f && X(i, !0)
                            } else {
                                Q(N, i, i, !1);
                                var p = d.ZP.isForumPostUnread(i.id);
                                Q(A, i, p ? i : null, !1)
                            }
                        }
                    }
            }

            function Z() {
                L = {};
                for (var e in N)
                    for (var t in N[e]) G(e, t)
            }

            function F(e) {
                var t = s.Z.getBasicChannel(e);
                null != t && c.uC.has(t.type) && G(t.guild_id, t.id)
            }

            function G(e, t) {
                var n = s.Z.getChannel(t);
                if (null != n && n.isForumLikeChannel()) {
                    null == L[e] && (L[e] = {});
                    L[e][t] = 0;
                    if (null != N[e] && null != N[e][t]) {
                        var r = f.Z.getGuild(e);
                        if (null != r) {
                            var i = d.ZP.getTrackedAckMessageId(t);
                            if (null == i) {
                                var u = Date.now();
                                null != r.joinedAt && (r.joinedAt instanceof Date ? u = r.joinedAt.getTime() : "string" == typeof r.joinedAt && (u = new Date(r.joinedAt).getTime()));
                                i = o.default.fromTimestamp(u)
                            }
                            for (var a in N[e][t]) t === U ? d.ZP.isNewForumThread(a, t, r) && L[e][t]++ : o.default.compare(a, i) > 0 && !d.ZP.hasOpenedThread(a) && L[e][t]++
                        }
                    }
                }
            }

            function z(e, t, n) {
                if (null == t) return !1;
                var r = s.Z.getChannel(n),
                    i = v.Z.joinTimestamp(n);
                if (null != r && h.Z.isActive(e, t, n)) {
                    if (null != i) {
                        var o = {
                                channel: r,
                                joinTimestamp: i.getTime()
                            },
                            u = J(r),
                            a = u.isUnread,
                            l = u.isRelevant,
                            c = u.isTimedRelevant;
                        Q(R, r, o, !0);
                        Q(x, r, l ? o : null, !0);
                        Q(C, r, a ? o : null, !0);
                        Q(N, r, null, !0);
                        Q(A, r, null, !0);
                        X(r, c)
                    } else {
                        var f = d.ZP.isForumPostUnread(r.id);
                        Q(R, r, null, !0);
                        Q(C, r, null, !0);
                        Q(x, r, null, !0);
                        Q(N, r, r, !0);
                        Q(A, r, f ? r : null, !0);
                        K(r.id)
                    }
                    G(e, t)
                } else {
                    $(R, e, t, n);
                    $(x, e, t, n);
                    $(C, e, t, n);
                    $(N, e, t, n);
                    $(A, e, t, n);
                    K(n);
                    G(e, t)
                }
            }

            function H(e) {
                return z(e.channel.guild_id, e.channel.parent_id, e.channel.id)
            }

            function B(e, t) {
                if (null == t) return !1;
                var n = R[e],
                    r = null == n ? null : n[t];
                if (null != r)
                    for (var i in r)
                        if (r[i].channel.isNSFW()) return !0;
                var o = N[e],
                    u = null == o ? null : o[t];
                if (null != u)
                    for (var a in u)
                        if (u[a].isNSFW()) return !0;
                return !1
            }

            function V(e) {
                var t = s.Z.getChannel(e.id);
                return !(null == t || !h.Z.isActive(e.guildId, t.parent_id, e.id)) && z(t.guild_id, t.parent_id, t.id)
            }

            function W(e) {
                var t = s.Z.getChannel(e.channelId);
                if (null == t) Y();
                else {
                    var n = t.guild_id,
                        r = t.parent_id;
                    if (!c.Ec.has(t.type)) {
                        var i;
                        if (Number(null === (i = L[n]) || void 0 === i ? void 0 : i[t.id]) > 0) {
                            G(n, t.id);
                            return !0
                        }
                        return !1
                    }
                    if (null == r) return !1;
                    if (ee(R, t)) {
                        var o = J(t),
                            u = o.isUnread,
                            a = o.isRelevant;
                        X(t, o.isTimedRelevant);
                        var l = ee(C, t),
                            f = ee(x, t);
                        if (u === l && a === f) return !1;
                        var p = R[n][r][t.id],
                            h = a ? p : null;
                        Q(C, t, u ? p : null, !0);
                        Q(x, t, h, !0);
                        G(n, r)
                    } else {
                        var v = ee(A, t),
                            y = d.ZP.isForumPostUnread(t.id);
                        if (y === v) return !1;
                        Q(A, t, y ? t : null, !0)
                    }
                }
            }

            function Y() {
                C = {};
                x = {};
                for (var e in R)
                    for (var t in R[e])
                        for (var n in R[e][t]) {
                            var r = R[e][t][n],
                                i = J(r.channel),
                                o = i.isUnread,
                                u = i.isRelevant,
                                a = i.isTimedRelevant;
                            o && Q(C, r.channel, r, !1);
                            u && Q(x, r.channel, r, !1);
                            X(r.channel, a)
                        }
                A = {};
                for (var l in N)
                    for (var c in N[l])
                        for (var s in N[l][c]) {
                            var f = N[l][c][s];
                            d.ZP.isForumPostUnread(s) && Q(A, f, f, !1)
                        }
                Z()
            }

            function q() {
                var e = U;
                if ((U = p.Z.getChannelId()) === e) return !1;
                F(e);
                F(U)
            }

            function J(e) {
                var t = d.ZP.getMentionCount(e.id) > 0,
                    n = d.ZP.hasRelevantUnread(e) && (!v.Z.isMuted(e.id) || t) || (0, l.c)() && t,
                    r = e.hasFlag(m.zZ.PINNED),
                    i = e.isActiveThread(),
                    o = i && g(e) > Date.now();
                return {
                    isUnread: (i || r) && n,
                    isRelevant: o || r || n,
                    isTimedRelevant: o
                }
            }

            function X(e, t) {
                K(e.id);
                t && function(e) {
                    M[e.id] = setTimeout((function() {
                        var t = s.Z.getChannel(e.id);
                        null != t && a.Z.dispatch({
                            type: "THREAD_UPDATE",
                            channel: t
                        })
                    }), g(e) - Date.now() + 1)
                }(e)
            }

            function K(e) {
                if (e in M) {
                    clearTimeout(M[e]);
                    delete M[e]
                }
            }

            function Q(e, t, n, r) {
                var o = t.guild_id,
                    u = t.parent_id,
                    a = t.id;
                if (null != o && null != u && null != a) {
                    o in e || (e[o] = {});
                    u in e[o] || (e[o][u] = {});
                    r && (e[o] = S(E({}, e[o]), _({}, u, E({}, e[o][u]))));
                    if (null === n) {
                        delete e[o][u][a];
                        i().isEmpty(e[o][u]) && delete e[o][u]
                    } else e[o][u][a] = n
                }
            }

            function $(e, t, n, r) {
                if (null != t && null != n && null != r && te(e, t, n, r)) {
                    e[t] = S(E({}, e[t]), _({}, n, E({}, e[t][n])));
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
                        t && I(e, t)
                    }(n, e);
                    var t = P(n);

                    function n() {
                        b(this, n);
                        return t.apply(this, arguments)
                    }
                    var r = n.prototype;
                    r.initialize = function() {
                        this.waitFor(h.Z, s.Z, v.Z, d.ZP);
                        this.syncWith([p.Z], q)
                    };
                    r.hasActiveJoinedUnreadThreads = function(e, t) {
                        return e in C && t in C[e]
                    };
                    r.getActiveUnjoinedThreadsForParent = function(e, t) {
                        var n;
                        return e in N && null !== (n = N[e][t]) && void 0 !== n ? n : oe
                    };
                    r.getActiveJoinedThreadsForParent = function(e, t) {
                        var n;
                        return e in R && null !== (n = R[e][t]) && void 0 !== n ? n : ie
                    };
                    r.getActiveJoinedThreadsForGuild = function(e) {
                        var t;
                        return null !== (t = R[e]) && void 0 !== t ? t : ne
                    };
                    r.getActiveJoinedUnreadThreadsForGuild = function(e) {
                        var t;
                        return null !== (t = C[e]) && void 0 !== t ? t : ne
                    };
                    r.getActiveJoinedUnreadThreadsForParent = function(e, t) {
                        var n;
                        return null !== (n = this.getActiveJoinedUnreadThreadsForGuild(e)[t]) && void 0 !== n ? n : ie
                    };
                    r.getActiveJoinedRelevantThreadsForGuild = function(e) {
                        var t;
                        return null !== (t = x[e]) && void 0 !== t ? t : ne
                    };
                    r.getActiveJoinedRelevantThreadsForParent = function(e, t) {
                        var n;
                        return null !== (n = this.getActiveJoinedRelevantThreadsForGuild(e)[t]) && void 0 !== n ? n : ie
                    };
                    r.getActiveUnjoinedThreadsForGuild = function(e) {
                        var t;
                        return null !== (t = N[e]) && void 0 !== t ? t : re
                    };
                    r.getActiveUnjoinedUnreadThreadsForGuild = function(e) {
                        var t;
                        return null !== (t = A[e]) && void 0 !== t ? t : ne
                    };
                    r.getActiveUnjoinedUnreadThreadsForParent = function(e, t) {
                        var n;
                        return null !== (n = this.getActiveUnjoinedUnreadThreadsForGuild(e)[t]) && void 0 !== n ? n : ie
                    };
                    r.getNewThreadCountsForGuild = function(e) {
                        var t;
                        return null !== (t = L[e]) && void 0 !== t ? t : ue
                    };
                    r.computeAllActiveJoinedThreads = function(e) {
                        var t = [];
                        for (var n in R)
                            if (n === e || null == e)
                                for (var r in R[n])
                                    for (var i in R[n][r]) t.push(R[n][r][i].channel);
                        return t
                    };
                    r.getNewThreadCount = function(e, t) {
                        var n, r;
                        return null !== (r = null === (n = L[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== r ? r : 0
                    };
                    r.getActiveThreadCount = function(e, t) {
                        var n, r, o, u;
                        return i().size(null !== (o = null === (n = R[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== o ? o : {}) + i().size(null !== (u = null === (r = N[e]) || void 0 === r ? void 0 : r[t]) && void 0 !== u ? u : {})
                    };
                    r.__getLocalVars = function() {
                        return {
                            activeJoinedThreads: R,
                            activeJoinedUnreadThreads: C,
                            activeUnjoinedThreads: N,
                            activeUnjoinedUnreadThreads: A,
                            activeJoinedRelevantThreads: x,
                            newThreadCounts: L,
                            selectedChannelId: U,
                            timers: M,
                            NO_GUILD_UNJOINED_THREADS: re,
                            NO_JOINED_THREADS: ie,
                            NO_UNJOINED_THREADS: oe,
                            NO_NEW_THREADS: ue
                        }
                    };
                    return n
                }(u.ZP.Store);
            ae.displayName = "ActiveJoinedThreadsStore";
            const le = new ae(a.Z, {
                CONNECTION_OPEN: k,
                OVERLAY_INITIALIZE: k,
                THREAD_LIST_SYNC: function(e) {
                    return j(e.guildId)
                },
                LOAD_THREADS_SUCCESS: k,
                LOAD_ARCHIVED_THREADS_SUCCESS: k,
                SEARCH_FINISH: k,
                GUILD_CREATE: function(e) {
                    return j(e.guild.id)
                },
                GUILD_DELETE: k,
                CURRENT_USER_UPDATE: k,
                THREAD_CREATE: H,
                THREAD_UPDATE: H,
                THREAD_DELETE: H,
                CHANNEL_UPDATES: function(e) {
                    var t = e.channels,
                        n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var o, u = t[Symbol.iterator](); !(n = (o = u.next()).done); n = !0) {
                            var a = o.value;
                            if (a.isNSFW() !== B(a.guild_id, a.parent_id)) {
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
                        if (t.guild_id in R && t.parent_id in R[t.guild_id]) {
                            delete R[t.guild_id][t.parent_id];
                            n = !0
                        }
                        if (t.guild_id in C && t.parent_id in C[t.guild_id]) {
                            delete C[t.guild_id][t.parent_id];
                            n = !0
                        }
                        if (t.guild_id in x && t.parent_id in x[t.guild_id]) {
                            Object.keys(x[t.guild_id][t.parent_id]).forEach(K);
                            delete x[t.guild_id][t.parent_id];
                            n = !0
                        }
                        if (t.guild_id in N && t.parent_id in N[t.guild_id]) {
                            delete N[t.guild_id][t.parent_id];
                            n = !0
                        }
                        if (t.guild_id in A && t.parent_id in A[t.guild_id]) {
                            delete A[t.guild_id][t.parent_id];
                            n = !0
                        }
                        n && G(t.guild_id, t.parent_id)
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
                    q()
                },
                PASSIVE_UPDATE_V1: function(e) {
                    null != e.channels && Y()
                },
                WINDOW_FOCUS: Y,
                UPDATE_CHANNEL_DIMENSIONS: Y,
                DRAWER_OPEN: Y,
                DRAWER_CLOSE: Y,
                BULK_ACK: Y
            })
        },
        491260: (e, t, n) => {
            "use strict";
            n.d(t, {
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

            function p(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function h(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function v(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function y(e) {
                y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return y(e)
            }

            function g(e, t) {
                return !t || "object" !== O(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function m(e, t) {
                m = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return m(e, t)
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
                }(e, t) || E(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function _(e) {
                return function(e) {
                    if (Array.isArray(e)) return p(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || E(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var O = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function E(e, t) {
                if (e) {
                    if ("string" == typeof e) return p(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? p(e, t) : void 0
                }
            }

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
                    var n, r = y(e);
                    if (t) {
                        var i = y(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return g(this, n)
                }
            }
            var w = Object.freeze([]),
                I = {},
                T = {},
                P = {},
                R = {},
                C = {};

            function N(e, t) {
                var n = I[e];
                return null != n ? n[t] : null
            }
            var A = function(e) {
                switch (e.type) {
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
            var x = function(e) {
                return (0, c.Z)(e) ? 1 : 0
            };

            function L(e, t) {
                return function(e, t) {
                    return A(t) - A(e)
                }(e, t) || function(e, t) {
                    return x(t) - x(e)
                }(e, t) || function(e, t) {
                    var n, r;
                    return (null !== (n = t.created_at) && void 0 !== n ? n : 0) - (null !== (r = e.created_at) && void 0 !== r ? r : 0)
                }(e, t)
            }

            function U(e) {
                delete T[e];
                delete P[e];
                delete R[e];
                if (null != I[e]) {
                    var t = b(u().sortBy(I[e], (function(e) {
                            return -e.timestamp
                        })), 1),
                        n = t[0];
                    if (n.status !== d.Skl.OFFLINE) {
                        T[e] = n.status;
                        P[e] = n.activities;
                        null != n.clientStatus && (R[e] = n.clientStatus)
                    } else u().every(I[e], (function(e) {
                        return e.status === d.Skl.OFFLINE
                    })) && delete I[e]
                }
            }

            function M(e) {
                var t = I[e];
                if (null != t) {
                    var n = u().maxBy(Object.values(t), (function(e) {
                        return e.timestamp
                    }));
                    if (n.status !== d.Skl.OFFLINE) {
                        T[e] = n.status;
                        P[e] = n.activities;
                        null != n.clientStatus && (R[e] = n.clientStatus)
                    }
                }
            }

            function k(e) {
                var t = e.guildId,
                    n = e.userId,
                    r = e.status,
                    o = e.clientStatus,
                    u = e.activities;
                if (n === s.default.getId()) return !1;
                var a = I[n];
                if (null == a) {
                    if (r === d.Skl.OFFLINE) return !1;
                    a = I[n] = {}
                }
                if (r === d.Skl.OFFLINE) a[t] = {
                    status: r,
                    clientStatus: o,
                    activities: w,
                    timestamp: Date.now()
                };
                else {
                    var l = u.length > 1 ? _(u).sort(L) : u,
                        c = a[t];
                    u = null != c && i()(c.activities, l) ? c.activities : l;
                    a[t] = {
                        status: r,
                        clientStatus: o,
                        activities: u,
                        timestamp: Date.now()
                    }
                }
                delete C[n];
                U(n);
                return !0
            }

            function j(e) {
                var t = e.guildId,
                    n = e.userId,
                    r = e.status,
                    i = e.clientStatus,
                    o = e.activities,
                    u = e.timestamp;
                if (n !== s.default.getId()) {
                    var a = I[n];
                    if (null == a) {
                        if (r === d.Skl.OFFLINE) return;
                        a = I[n] = {}
                    }
                    if (r === d.Skl.OFFLINE) a[t] = {
                        status: r,
                        clientStatus: i,
                        activities: w,
                        timestamp: Date.now()
                    };
                    else {
                        var l = o.length > 1 ? _(o).sort(L) : o;
                        a[t] = {
                            status: r,
                            clientStatus: i,
                            activities: l,
                            timestamp: u
                        }
                    }
                }
            }

            function D(e, t) {
                if (t === s.default.getId()) return !1;
                var n = I[t];
                if (null == n || null == n[e]) return !1;
                delete n[e];
                0 === Object.keys(n).length && delete I[t];
                U(t)
            }

            function Z(e) {
                var t = !0,
                    n = !1,
                    r = void 0;
                try {
                    for (var i, o = Object.keys(I)[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                        D(e, i.value)
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
            }
            var F = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && m(e, t)
                }(n, e);
                var t = S(n);

                function n() {
                    h(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(s.default)
                };
                r.setCurrentUserOnConnectionOpen = function(e, t) {
                    T[s.default.getId()] = e;
                    P[s.default.getId()] = t
                };
                r.getStatus = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.Skl.OFFLINE,
                        r = f.default.getUser(e);
                    null != r && r.hasFlag(d.xW$.BOT_HTTP_INTERACTIONS) && (n = d.Skl.UNKNOWN);
                    if (null == r ? void 0 : r.isClyde()) return d.Skl.ONLINE;
                    if (null == t) {
                        var i;
                        return null !== (i = T[e]) && void 0 !== i ? i : n
                    }
                    var o, u = N(e, t);
                    return null !== (o = null == u ? void 0 : u.status) && void 0 !== o ? o : n
                };
                r.getActivities = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null == t) {
                        var n;
                        return null !== (n = P[e]) && void 0 !== n ? n : w
                    }
                    var r = N(e, t);
                    return null == r || null == r.activities ? w : r.activities
                };
                r.getPrimaryActivity = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = this.getActivities(e, t);
                    return n[0]
                };
                r.getAllApplicationActivities = function(e) {
                    var t = [],
                        n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var o, u = Object.keys(P)[Symbol.iterator](); !(n = (o = u.next()).done); n = !0) {
                            var a = o.value,
                                l = P[a],
                                c = !0,
                                s = !1,
                                f = void 0;
                            try {
                                for (var d, p = l[Symbol.iterator](); !(c = (d = p.next()).done); c = !0) {
                                    var h = d.value;
                                    h.application_id === e && t.push({
                                        userId: a,
                                        activity: h
                                    })
                                }
                            } catch (e) {
                                s = !0;
                                f = e
                            } finally {
                                try {
                                    c || null == p.return || p.return()
                                } finally {
                                    if (s) throw f
                                }
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
                    return t
                };
                r.getApplicationActivity = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    return this.findActivity(e, (function(e) {
                        return e.application_id === t
                    }), n)
                };
                r.findActivity = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    return this.getActivities(e, n).find(t)
                };
                r.getActivityMetadata = function(e) {
                    return C[e]
                };
                r.getUserIds = function() {
                    return Object.keys(P)
                };
                r.isMobileOnline = function(e) {
                    var t = R[e];
                    return null != t && t[d.X5t.MOBILE] === d.Skl.ONLINE && t[d.X5t.DESKTOP] !== d.Skl.ONLINE
                };
                r.getState = function() {
                    return {
                        presencesForGuilds: I,
                        statuses: T,
                        activities: P,
                        activityMetadata: C,
                        clientStatuses: R
                    }
                };
                r.__getLocalVars = function() {
                    return {
                        NO_ACTIVITIES: w,
                        presencesForGuilds: I,
                        statuses: T,
                        activities: P,
                        clientStatuses: R,
                        activityMetadata: C,
                        typeScore: A,
                        richnessScore: x
                    }
                };
                return n
            }(a.ZP.Store);
            F.displayName = "PresenceStore";
            const G = new F(l.Z, {
                CONNECTION_OPEN: function() {
                    return !0
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
                    var t = e.guilds,
                        n = e.presences,
                        r = s.default.getId();
                    I = {};
                    C = {};
                    T = v({}, r, T[r]);
                    P = v({}, r, P[r]);
                    R = v({}, r, {});
                    var i = new Set,
                        o = Date.now();
                    t.forEach((function(e) {
                        e.presences.forEach((function(t) {
                            var n = t.user,
                                r = t.status,
                                u = t.clientStatus,
                                a = t.activities;
                            j({
                                guildId: e.id,
                                userId: n.id,
                                status: r,
                                clientStatus: u,
                                activities: a,
                                timestamp: o
                            });
                            i.add(n.id)
                        }))
                    }));
                    n.forEach((function(e) {
                        var t = e.user,
                            n = e.status,
                            r = e.clientStatus,
                            u = e.activities;
                        if (null != t) {
                            j({
                                guildId: d.ME,
                                userId: t.id,
                                status: n,
                                clientStatus: r,
                                activities: u,
                                timestamp: o
                            });
                            i.add(t.id)
                        }
                    }));
                    i.delete(r);
                    i.forEach(M)
                },
                OVERLAY_INITIALIZE: function(e) {
                    var t = e.presences;
                    I = t.presencesForGuilds;
                    T = t.statuses;
                    P = t.activities;
                    C = t.activityMetadata
                },
                GUILD_CREATE: function(e) {
                    var t = e.guild;
                    t.presences.forEach((function(e) {
                        var n = e.user,
                            r = e.status,
                            i = e.clientStatus,
                            o = e.activities;
                        k({
                            guildId: t.id,
                            userId: n.id,
                            status: r,
                            clientStatus: i,
                            activities: o
                        })
                    }))
                },
                GUILD_DELETE: function(e) {
                    Z(e.guild.id)
                },
                GUILD_MEMBER_REMOVE: function(e) {
                    return D(e.guildId, e.user.id)
                },
                PRESENCE_UPDATES: function(e) {
                    return e.updates.map((function(e) {
                        var t = e.guildId,
                            n = e.user,
                            r = e.status,
                            i = e.clientStatus,
                            o = e.activities;
                        return k({
                            guildId: null != t ? t : d.ME,
                            userId: n.id,
                            status: r,
                            clientStatus: i,
                            activities: o
                        })
                    })).some((function(e) {
                        return e
                    }))
                },
                PRESENCES_REPLACE: function(e) {
                    var t = e.presences;
                    Z(d.ME);
                    t.forEach((function(e) {
                        var t = e.user,
                            n = e.status,
                            r = e.clientStatus,
                            i = e.activities;
                        null != t && k({
                            guildId: d.ME,
                            userId: t.id,
                            status: n,
                            clientStatus: r,
                            activities: i
                        })
                    }))
                },
                ACTIVITY_METADATA_UPDATE: function(e) {
                    var t = e.userId,
                        n = e.metadata;
                    C[t] = n;
                    return !1
                },
                THREAD_MEMBER_LIST_UPDATE: function(e) {
                    var t = e.guildId;
                    e.members.forEach((function(e) {
                        null != e.presence && k({
                            guildId: t,
                            userId: e.user_id,
                            status: e.presence.status,
                            clientStatus: e.presence.clientStatus,
                            activities: e.presence.activities
                        })
                    }))
                },
                THREAD_MEMBERS_UPDATE: function(e) {
                    var t = e.guildId,
                        n = e.addedMembers;
                    null == n || n.forEach((function(e) {
                        null != e.presence && k({
                            guildId: t,
                            userId: e.userId,
                            status: e.presence.status,
                            clientStatus: e.presence.clientStatus,
                            activities: e.presence.activities
                        })
                    }))
                },
                SELF_PRESENCE_STORE_UPDATE: function(e) {
                    var t = s.default.getId();
                    if (T[t] === e.status && P[t] === e.activities) return !1;
                    T[t] = e.status;
                    P[t] = e.activities;
                    delete C[t]
                }
            })
        },
        641277: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => w
            });
            var r = n(785893),
                i = n(667294),
                o = n(294184),
                u = n.n(o),
                a = n(269116);

            function l(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
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
                    if ("string" == typeof e) return l(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var s = n(124251),
                f = n(633878);

            function d(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function p(e, t) {
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

            function h(e, t) {
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

            function v(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    i = e.height,
                    o = void 0 === i ? 24 : i,
                    u = e.color,
                    a = void 0 === u ? "currentColor" : u,
                    l = e.foreground,
                    c = h(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", p(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            d(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, f.Z)(c)), {
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
            }
            var y = n(203600),
                g = n(331774),
                m = n.n(g);

            function b(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function _(e, t) {
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

            function O(e, t) {
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
            var E = {
                XSMALL: m().xsmall,
                SMALL: m().small,
                MEDIUM: m().medium,
                LARGE: m().large
            };
            var S = function(e) {
                var t, o = e.game,
                    l = e.guild,
                    f = e.skuId,
                    d = e.pid,
                    p = e.className,
                    h = e.guildClassName,
                    g = e.size,
                    S = void 0 === g ? E.MEDIUM : g,
                    w = O(e, ["game", "guild", "skuId", "pid", "className", "guildClassName", "size"]);
                null != f && (t = function(e) {
                    if (null == e) return null;
                    switch (e) {
                        case y.Si.GUILD:
                            return n(460122);
                        case y.Si.TIER_0:
                            return n(873994);
                        case y.Si.TIER_1:
                            return n(413369);
                        case y.Si.TIER_2:
                        case y.Si.LEGACY:
                            return n(132354);
                        default:
                            return null
                    }
                }(f));
                null != o && null == t && (t = o.getIconURL(function(e) {
                    switch (e) {
                        case E.XSMALL:
                            return 24;
                        case E.SMALL:
                            return 30;
                        case E.MEDIUM:
                            return 40;
                        case E.LARGE:
                            return 60;
                        default:
                            return 80
                    }
                }(S)));
                t = function(e, t) {
                    var n = c(i.useState(), 2),
                        r = n[0],
                        o = n[1];
                    i.useEffect((function() {
                        null != e && null == t ? (0, a.Z)().then((function(t) {
                            null != t && t.identifyGame(e, (function(e, t) {
                                0 === e && null != t.icon && "" !== t.icon && null != t.name && "" !== t.name && o("data:image/png;base64,".concat(t.icon))
                            }))
                        })) : o(void 0)
                    }), [e, t]);
                    return null != t ? t : r
                }(d, t);
                if (null == t && null != l) {
                    var I = function(e) {
                        switch (e) {
                            case E.XSMALL:
                                return s.Z.Sizes.SMALLER;
                            case E.SMALL:
                                return s.Z.Sizes.SMALL;
                            case E.LARGE:
                                return s.Z.Sizes.LARGE;
                            default:
                                return s.Z.Sizes.MEDIUM
                        }
                    }(S);
                    return (0, r.jsx)(s.Z, {
                        className: u()(m().gameIcon, h, p),
                        guild: l,
                        size: I
                    })
                }
                return null == t ? (0, r.jsx)(v, {
                    className: u()(m().gameIcon, S, p)
                }) : (0, r.jsx)("div", _(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            b(e, t, n[t])
                        }))
                    }
                    return e
                }({}, w), {
                    className: u()(m().gameIcon, S, p),
                    style: {
                        backgroundImage: "url('".concat(t, "')")
                    }
                }))
            };
            S.Sizes = E;
            const w = S
        },
        443812: (e, t, n) => {
            "use strict";
            n.d(t, {
                hQ: () => u,
                Dt: () => a,
                FG: () => l
            });
            var r = n(873955),
                i = n.n(r),
                o = n(989824),
                u = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return i()(e)
                },
                a = function() {
                    return (0, o.Z)((function() {
                        return u()
                    }))
                },
                l = function(e) {
                    return (0, e.children)(a())
                }
        },
        347117: (e, t, n) => {
            "use strict";
            n.d(t, {
                Tj: () => d,
                zp: () => p,
                Dc: () => h,
                rn: () => v,
                rv: () => y,
                XN: () => m,
                OF: () => b,
                fD: () => O,
                QB: () => E,
                Bo: () => S,
                c0: () => T
            });
            var r = n(441143),
                i = n.n(r),
                o = n(496486),
                u = n.n(o),
                a = n(16243),
                l = n.n(a);

            function c(e, t, n, r, i, o, u) {
                try {
                    var a = e[o](u),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function s(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function u(e) {
                            c(o, r, i, u, a, "next", e)
                        }

                        function a(e) {
                            c(o, r, i, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }
            var f = function(e, t) {
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
            0
            ;

            function d(e) {
                var t = e.width,
                    n = e.height,
                    r = e.maxWidth,
                    i = e.maxHeight,
                    o = e.minWidth,
                    u = void 0 === o ? 0 : o,
                    a = e.minHeight,
                    l = void 0 === a ? 0 : a;
                if (t !== r || n !== i) {
                    var c = t > r ? r / t : 1;
                    t = Math.max(Math.round(t * c), u);
                    var s = (n = Math.max(Math.round(n * c), l)) > i ? i / n : 1;
                    t = Math.max(Math.round(t * s), u);
                    n = Math.max(Math.round(n * s), l)
                }
                return {
                    width: t,
                    height: n
                }
            }

            function p(e, t) {
                var n = Math.min(Math.round(.65 * window.innerHeight), 2e3);
                return d({
                    width: e,
                    height: t,
                    maxWidth: Math.min(Math.round(.75 * window.innerWidth), 2e3),
                    maxHeight: n
                })
            }

            function h(e) {
                var t = e.width,
                    n = e.height,
                    r = e.maxWidth,
                    i = e.maxHeight,
                    o = 1;
                t > r && (o = r / t);
                t = Math.round(t * o);
                var u = 1;
                (n = Math.round(n * o)) > i && (u = i / n);
                return Math.min(o * u, 1)
            }

            function v(e) {
                var t = e.width,
                    n = e.height,
                    r = e.maxWidth,
                    i = e.maxHeight;
                if (t === n) return 1;
                var o = Math.max(r / t, i / n);
                return Math.min(o, 1)
            }

            function y(e) {
                return null == e || "" === e ? "none" : "url(".concat(e, ")")
            }
            var g = [
                [0, 0, 0]
            ];

            function m(e, t, n) {
                var r = document.createElement("canvas"),
                    i = r.getContext("2d");
                if (null == i) return g;
                var o = r.width = 0 === e.width ? 128 : e.width,
                    u = r.height = 0 === e.height ? 128 : e.height;
                i.drawImage(e, 0, 0, o, u);
                var a = function(e, t, n) {
                        for (var r, i, o, u, a, l = [], c = 0; c < t; c += n) {
                            i = e[0 + (r = 4 * c)];
                            o = e[r + 1];
                            u = e[r + 2];
                            (void 0 === (a = e[r + 3]) || a >= 125) && (i > 250 && o > 250 && u > 250 || l.push([i, o, u]))
                        }
                        return l
                    }(i.getImageData(0, 0, o, u).data, o * u, n),
                    c = l()(a, t);
                return "boolean" == typeof c ? g : c.palette()
            }
            var b = function(e) {
                    return _(e)
                },
                _ = u().memoize((function(e) {
                    return new Promise((function(t, n) {
                        var r = new Image;
                        r.crossOrigin = "Anonymous";
                        r.onerror = function(e) {
                            n(e);
                            r.onerror = r.onload = null;
                            r = null
                        };
                        r.onload = function() {
                            t(m(r, 5, 10));
                            r.onerror = r.onload = null;
                            r = null
                        };
                        r.src = e
                    }))
                }));

            function O(e) {
                return new Promise((function(t, n) {
                    var r = new FileReader;
                    r.readAsDataURL(e);
                    r.onload = function() {
                        i()("string" == typeof r.result, "Result must be a string");
                        t(r.result)
                    };
                    r.onerror = function(e) {
                        return n(e)
                    }
                }))
            }

            function E(e) {
                var t = e.split(";base64,");
                i()(2 === t.length, "Input data is not a valid image.");
                return atob(t[1]).length
            }

            function S(e, t, n) {
                return w.apply(this, arguments)
            }

            function w() {
                return (w = s((function(e, t, n) {
                    var r;
                    return f(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, I(e).arrayBuffer()];
                            case 1:
                                r = i.sent();
                                return [2, new File([r], t, {
                                    type: n
                                })]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function I(e) {
                var t;
                t = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : btoa(e.split(",")[1]);
                for (var n = e.split(",")[0].split(":")[1].split(";")[0], r = new Uint8Array(t.length), i = 0; i < t.length; i++) r[i] = t.charCodeAt(i);
                return new Blob([r], {
                    type: n
                })
            }

            function T(e) {
                return P.apply(this, arguments)
            }

            function P() {
                return (P = s((function(e) {
                    var t, n, r;
                    return f(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                if ("image/png" !== (null === (t = e.type) || void 0 === t ? void 0 : t.split(";")[0])) throw new Error("File is not a PNG");
                                return [4, e.text()];
                            case 1:
                                n = i.sent();
                                return (r = n.indexOf("IDAT")) > 0 && -1 !== n.substring(0, r).indexOf("acTL") ? [2, !0] : [2, !1]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        73105: (e, t, n) => {
            "use strict";
            n.d(t, {
                RD: () => Y,
                WA: () => G,
                f5: () => Z,
                Gb: () => L,
                Rs: () => H,
                _2: () => V,
                gL: () => M,
                fG: () => j
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

            function v(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function y(e, t, n, r, i, o, u) {
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
                            y(o, r, i, u, a, "next", e)
                        }

                        function a(e) {
                            y(o, r, i, u, a, "throw", e)
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
                    if ("string" == typeof e) return v(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return v(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var _ = function(e, t) {
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
                O = new l.Z("Spellchecker"),
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
                O.error("".concat(e, " is not a valid locale."))
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
                            O.info("Switching to ".concat(e), t ? "(available)" : "(unavailable)")
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
                I = u().debounce((function(e, t) {
                    var n = function(e) {
                        if (null == e) return null;
                        if ((0, a.k)(e, HTMLInputElement) || (0, a.k)(e, HTMLTextAreaElement)) return e.value;
                        if ((0,
                                a.k)(e) && e.hasAttribute("contenteditable")) return e.textContent
                    }(t);
                    null != n && e.detectLanguage(n)
                }), 250);

            function T(e) {
                null != document.body && document.body.addEventListener("beforeinput", (function(t) {
                    return I(e, t.target)
                }), !0)
            }

            function P() {
                return (P = g((function() {
                    var e, t, n, r;
                    return _(this, (function(i) {
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
            var R = n(120415);

            function C(e, t, n, r, i, o, u) {
                try {
                    var a = e[o](u),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function N(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function u(e) {
                            C(o, r, i, u, a, "next", e)
                        }

                        function a(e) {
                            C(o, r, i, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }
            var A = function(e, t) {
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
                    },
                    "function" == typeof Symbol && (o[Symbol.iterator] = function() {
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

            function x() {
                return null != (null === r.Z || void 0 === r.Z ? void 0 : r.Z.spellCheck)
            }

            function L() {
                return (0, R.nI)() && x()
            }
            var U = L() ? function() {
                return P.apply(this, arguments)
            }() : null;

            function M(e) {
                return k.apply(this, arguments)
            }

            function k() {
                return (k = N((function(e) {
                    var t;
                    return A(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, U];
                            case 1:
                                if (null == (t = n.sent())) return [2];
                                t.enabled = e;
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function j(e) {
                return D.apply(this, arguments)
            }

            function D() {
                return (D = N((function(e) {
                    var t;
                    return A(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, U];
                            case 1:
                                if (null == (t = n.sent())) return [2];
                                t.setLearnedWords(e);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function Z(e) {
                return F.apply(this, arguments)
            }

            function F() {
                F = N((function(e) {
                    var t, n, r = arguments;
                    return A(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                t = r.length > 1 && void 0 !== r[1] && r[1];
                                return [4, U];
                            case 1:
                                return null == (n = i.sent()) ? [2, !1] : [2, n.isMisspelled(e, t)]
                        }
                    }))
                }));
                return F.apply(this, arguments)
            }

            function G(e) {
                return z.apply(this, arguments)
            }

            function z() {
                z = N((function(e) {
                    var t, n, r, i = arguments;
                    return A(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                t = i.length > 1 && void 0 !== i[1] && i[1], n = i.length > 2 && void 0 !== i[2] ? i[2] : 5;
                                return [4, U];
                            case 1:
                                return null == (r = o.sent()) ? [2, []] : [2, r.getCorrectionsForMisspelling(e, t).slice(0, n)]
                        }
                    }))
                }));
                return z.apply(this, arguments)
            }

            function H(e) {
                return B.apply(this, arguments)
            }

            function B() {
                return (B = N((function(e) {
                    var t;
                    return A(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, U];
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
                return (W = N((function(e) {
                    var t;
                    return A(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, U];
                            case 1:
                                if (null == (t = n.sent())) return [2];
                                t.setAppLocale(e);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function Y(e) {
                if (!x()) return function() {};
                var t = r.Z.spellCheck.on("spellcheck-result", e);
                return null != t ? t : function() {}
            }
        },
        990554: (e, t, n) => {
            "use strict";
            n.d(t, {
                l: () => i
            });
            var r = n(421281);

            function i(e, t) {
                for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++) i[o - 2] = arguments[o];
                var u = i.reduce((function(e, t) {
                        return e + (0, r.De)(t)
                    }), ""),
                    a = "".concat(t).concat(u),
                    l = e[a];
                if (null != l) return l;
                0
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
        322500: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = /^([\w-+]+(?:\.[\w-+]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,63}(?:\.[a-z]{2})?)$/i,
                i = /^((https:\/\/)?(discord\.gg\/)|(discord\.com\/)(invite\/)?)?[A-Za-z0-9]{8,8}$/,
                o = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                u = /^(.*)#[0-9]{1,5}$/,
                a = ["@", "#", ":", "```", "discord", "hypesquad", "system message", "system mesage", "sustem message", "sustem mesage"],
                l = ["discordtag", "everyone", "here", "discord nitro", "discord"];
            const c = {
                isEmail: function(e) {
                    return r.test(e)
                },
                isInvite: function(e) {
                    return i.test(e)
                },
                isPhoneNumber: function(e) {
                    return o.test(e)
                },
                isUserTagLike: function(e) {
                    var t = u.exec(e);
                    if (null != t && t.length > 1) {
                        var n = t[1],
                            r = a.some((function(e) {
                                return n.includes(e)
                            })),
                            i = l.includes(n);
                        return !r && !i
                    }
                    return !1
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
                ZP: () => h,
                WS: () => d,
                zS: () => p
            });
            var r = n(131795),
                i = n.n(r),
                o = n(468811),
                u = n.n(o);
            const a = n(426080).Z;

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

            function s(e, t) {
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
            var f = "https://discordapp.page.link";

            function d() {
                return u().v4()
            }

            function p(e) {
                if (!e.startsWith(f)) return null;
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
                        c = void 0;
                    try {
                        for (var d, p = o.entries()[Symbol.iterator](); !(a = (d = p.next()).done); a = !0) {
                            var h = s(d.value, 2),
                                v = h[0],
                                y = h[1];
                            u[v] = y
                        }
                    } catch (e) {
                        l = !0;
                        c = e
                    } finally {
                        try {
                            a || null == p.return || p.return()
                        } finally {
                            if (l) throw c
                        }
                    }
                    return u
                } catch (e) {
                    return null
                }
            }

            function h(e, t) {
                var n = t.utmSource,
                    r = t.androidFallbackLink,
                    o = t.iosFallbackLink,
                    u = c(t, ["utmSource", "androidFallbackLink", "iosFallbackLink"]),
                    l = new URL(e);
                for (var s in u) {
                    var d = u[s];
                    null != d && l.searchParams.set(s, d)
                }
                var p, h, v, y, g, m = encodeURIComponent(l.toString()),
                    b = encodeURIComponent(a()),
                    _ = (v = new RegExp("(".concat(["WebView", "(iPhone|iPod|iPad)(?!.*Safari/)"].join("|"), ")"), "ig"), y = null != (null === i() || void 0 === i() || null === (p = i().ua) || void 0 === p ? void 0 : p.match(v)), g = "Safari" === (null === i() || void 0 === i() ? void 0 : i().name) && !y, "iOS" !== (null === i() || void 0 === i() || null === (h = i().os) || void 0 === h ? void 0 : h.family) || g ? 1 : 0),
                    O = null != r ? encodeURIComponent(r) : null,
                    E = null != o ? encodeURIComponent(o) : null,
                    S = "".concat(f, "/?link=").concat(m, "&utm_source=").concat(n, "&apn=").concat("com.discord", "&isi=").concat(985746746, "&ibi=").concat("com.hammerandchisel.discord", "&sd=").concat(b, "&efr=").concat(_);
                null != O && (S += "&afl=".concat(O));
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
        989824: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => o
            });
            var r = n(667294),
                i = {};

            function o(e) {
                var t = (0, r.useRef)(i);
                t.current === i && (t.current = e());
                return t.current
            }
        }
    }
]);