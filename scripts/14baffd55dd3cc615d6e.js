(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["81794"], {
        516555: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                ConfettiCanvas: function() {
                    return A
                },
                Environment: function() {
                    return h
                },
                SpriteCanvas: function() {
                    return P
                },
                useConfettiCannon: function() {
                    return E
                }
            }), n("70102"), n("222007"), n("424973");
            var r = n("884691"),
                i = n("748820"),
                a = n("414456"),
                o = n.n(a);

            function u(t, e) {
                var n = t.x,
                    r = t.y;
                return n > e.x && n < e.x + e.width && r > e.y && r < e.y + e.height
            }

            function l(t, e) {
                return t * e * e * (e > 0 ? -1 : 1)
            }
            var s = function() {
                    function t(t) {
                        this.id = t.id, this.position = t.position, this.velocity = t.velocity, this.rotation = t.rotation, this.dragCoefficient = t.dragCoefficient, this.size = t.size, this.opacity = t.opacity, this.spriteX = t.spriteX, this.spriteY = t.spriteY, this.spriteWidth = t.spriteWidth, this.spriteHeight = t.spriteHeight, this._lastUpdatedAt = Date.now()
                    }
                    return t.prototype.getNewForces = function(t, e) {
                        var n, r, i, a, o = t.wind * e,
                            u = -t.gravity * e;
                        return {
                            x: o + (n = this.dragCoefficient.x, n * (r = this.velocity.x) * r * (r > 0 ? -1 : 1)),
                            y: u + (i = this.dragCoefficient.y, i * (a = this.velocity.y) * a * (a > 0 ? -1 : 1))
                        }
                    }, t.prototype.update = function(t) {
                        var e = Date.now(),
                            n = (e - this._lastUpdatedAt) / 100;
                        this.rotation.update(n), this.dragCoefficient.update(n);
                        var r = this.getNewForces(t, n),
                            i = r.x,
                            a = r.y;
                        this.velocity.update(n), this.velocity.x += i, this.velocity.y += a, this.position.update(n), this.position.x += this.velocity.x * n, this.position.y += this.velocity.y * n, this.size.update(n), this.opacity.update(n), this._lastUpdatedAt = e
                    }, t.prototype.previewPositionUpdate = function(t, e) {
                        var n = e / 100,
                            r = this.velocity.previewUpdate(n),
                            i = this.getNewForces(t, n),
                            a = i.x,
                            o = i.y;
                        r.x += a, r.y += o;
                        var u = this.position.previewUpdate(n);
                        return u.x += r.x * n, u.y += r.y * n, u
                    }, t.prototype.draw = function(t, e) {
                        e.save(), e.globalAlpha = this.opacity.value, e.setTransform((new DOMMatrix).translateSelf(this.position.x * n.g.devicePixelRatio, this.position.y * n.g.devicePixelRatio).rotateSelf(this.rotation.x, this.rotation.y, this.rotation.z)), e.drawImage(t, this.spriteX, this.spriteY, this.spriteWidth, this.spriteHeight, -this.width / 2 * n.g.devicePixelRatio, -this.height / 2 * n.g.devicePixelRatio, this.width * n.g.devicePixelRatio, this.height * n.g.devicePixelRatio), e.restore()
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
                h = function(t) {
                    var e = void 0 === t ? {} : t,
                        n = e.gravity,
                        r = e.wind;
                    this.gravity = -9.8, this.wind = 0, this.gravity = null != n ? n : this.gravity, this.wind = null != r ? r : this.wind
                },
                f = function(t, e) {
                    return (f = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                    })(t, e)
                };

            function d(t, e) {
                if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");

                function n() {
                    this.constructor = t
                }
                f(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }
            var p = function() {
                    return (p = Object.assign || function(t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++)
                            for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                        return t
                    }).apply(this, arguments)
                },
                v = function(t) {
                    this.value = t
                },
                y = function() {
                    function t(t, e) {
                        this._x = t, this._y = e
                    }
                    return t.prototype.update = function(t) {
                        this._x.update(t), this._y.update(t)
                    }, t.prototype.previewUpdate = function(t) {
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
                    return d(e, t), e.prototype.update = function(e) {
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
                m = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return d(e, t), e.prototype.update = function() {}, e.prototype.previewUpdate = function() {
                        return this.value
                    }, e
                }(v),
                w = function(t) {
                    function e(e, n) {
                        var r = t.call(this, e) || this;
                        return r.addValue = n, r
                    }
                    return d(e, t), e.prototype.update = function(t) {
                        this.value = this.previewUpdate(t)
                    }, e.prototype.previewUpdate = function(t) {
                        return this.value + this.addValue * t
                    }, e
                }(v),
                x = function(t) {
                    function e(e, n, r, i, a, o) {
                        var u = t.call(this, e) || this;
                        u.min = n, u.max = r, u.duration = i;
                        var l = u.value / (u.max - u.min) * u.duration,
                            s = isNaN(l) ? 0 : l;
                        return u.timePassed = s < 0 ? u.duration - s : s, u.directionMultiplier = a, u.easingFunction = o, u
                    }
                    return d(e, t), e.prototype.update = function(t) {
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
                            a = this.easingFunction(r, this.min, e, this.duration);
                        return [isNaN(a) ? 0 : a, r, i]
                    }, e
                }(v);

            function b(t, e) {
                return t === e ? t : Math.random() * (e - t + 1) + t
            }

            function C(t) {
                var e = Math.floor(b(0, t.length - 1));
                return [t[e], e]
            }

            function z(t, e) {
                return C([t, e])[0]
            }

            function O(t) {
                return "number" == typeof t ? {
                    x: t,
                    y: t
                } : t
            }

            function S(t) {
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
                            var e = O(t.value);
                            return new y(new m(e.x), new m(e.y));
                        case "static-random":
                            var n = O(t.minValue),
                                r = O(t.maxValue);
                            return new y(new m(b(n.x, r.x)), new m(b(n.y, r.y)));
                        case "linear":
                            e = O(t.value);
                            var i = O(t.addValue);
                            return new y(new w(e.x, i.x), new w(e.y, i.y));
                        case "linear-random":
                            n = O(t.minValue), r = O(t.maxValue);
                            var a = O(t.minAddValue),
                                o = O(t.maxAddValue);
                            return new y(new w(b(n.x, r.x), b(a.x, o.x)), new w(b(n.y, r.y), b(a.x, o.x)));
                        case "oscillating":
                            e = O(t.value);
                            var u = O(t.start),
                                l = O(t.final),
                                s = O(t.duration),
                                c = O(t.direction);
                            return new y(new x(e.x, u.x, l.x, s.x, c.x, t.easingFunction), new x(e.y, u.y, l.y, s.x, c.y, t.easingFunction));
                        case "oscillating-random":
                            n = O(t.minValue), r = O(t.maxValue);
                            var h = O(t.minStart),
                                f = O(t.maxStart),
                                d = O(t.minFinal),
                                p = O(t.maxFinal),
                                v = O(t.minDuration),
                                g = O(t.maxDuration),
                                S = O(t.minDirection),
                                k = O(t.maxDirection);
                            return new y(new x(b(n.x, r.x), b(h.x, f.x), b(d.x, p.x), b(v.x, g.x), z(S.x, k.x), C(t.easingFunctions)[0]), new x(b(n.y, r.y), b(h.y, f.y), b(d.y, p.y), b(v.y, g.y), z(S.y, k.y), C(t.easingFunctions)[0]))
                    }
                }(p(p({}, t), {
                    valueType: "Vector2"
                }))
            }
            var A = r.forwardRef(function(t, e) {
                var a = t.className,
                    o = t.environment,
                    l = t.onClick,
                    h = t.onMouseDown,
                    f = t.onMouseMove,
                    d = t.onMouseUp,
                    v = t.onBeforeRender,
                    y = t.onAfterRender,
                    O = function(t, e) {
                        var n = {};
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && 0 > e.indexOf(r) && (n[r] = t[r]);
                        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                            var i = 0;
                            for (r = Object.getOwnPropertySymbols(t); i < r.length; i++) 0 > e.indexOf(r[i]) && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]])
                        }
                        return n
                    }(t, ["className", "environment", "onClick", "onMouseDown", "onMouseMove", "onMouseUp", "onBeforeRender", "onAfterRender"]),
                    A = r.useRef(null),
                    P = r.useRef(new Map),
                    E = r.useRef(null),
                    R = r.useRef(0),
                    _ = r.useRef(0),
                    V = r.useCallback(function() {
                        var t = A.current;
                        if (null != t) {
                            var e = t.getContext("2d");
                            if (null != e) {
                                e.clearRect(0, 0, t.width, t.height), null == v || v(e), P.current.forEach(function(n, r) {
                                    var i = n.confetti,
                                        a = n.spriteCanvas;
                                    i.update(o), i.draw(a, e), i.shouldDestroy(t, o) && P.current.delete(r)
                                }), null == y || y(e), P.current.size > 0 ? E.current = window.requestAnimationFrame(V) : (e.clearRect(0, 0, t.width, t.height), E.current = null);
                                var n = Date.now();
                                0 !== R.current && (_.current = 1e3 / (n - R.current)), R.current = n
                            }
                        }
                    }, [o, y, v]);
                r.useEffect(function() {
                    null != E.current && (window.cancelAnimationFrame(E.current), E.current = window.requestAnimationFrame(V))
                }, [V]);
                var j = r.useCallback(function(t, e) {
                        P.current.set(t.id, {
                            confetti: t,
                            spriteCanvas: e
                        }), null == E.current && V()
                    }, [V]),
                    F = r.useCallback(function(t, e, n, r, a) {
                        var o, u, l, h, f, d, v, y, O, A, P, E, R, _, V, F = (o = null !== (V = t.id) && void 0 !== V ? V : (0, i.v4)(), u = t, l = n, h = r, f = a, y = k((v = (d = u, p(p({
                            id: o
                        }, c), d))).size), A = (O = function(t, e) {
                            if (null != t) {
                                var n = e.sprites.findIndex(function(e) {
                                    return "string" == typeof t ? e.src === t && e.colorize : e.src === t.src && e.colorize === t.colorize
                                });
                                if (-1 !== n) return [t, n]
                            }
                            return C(e.sprites)
                        }(h, l))[0], P = O[1], E = function(t, e, n) {
                            if (!("string" == typeof(r = t) || r.colorize)) return 0;
                            var r, i = null != e ? n.colors.findIndex(function(t) {
                                return t === e
                            }) : -1;
                            return -1 !== i ? i : Math.floor(b(0, n.colors.length - 1))
                        }(null != h ? h : A, f, l), new s({
                            id: o,
                            position: k(v.position),
                            velocity: k(v.velocity),
                            rotation: (R = v.rotation, function(t) {
                                switch (t.type) {
                                    case "static":
                                        var e = S(t.value);
                                        return new g(new m(e.x), new m(e.y), new m(e.z));
                                    case "static-random":
                                        var n = S(t.minValue),
                                            r = S(t.maxValue);
                                        return new g(new m(b(n.x, r.x)), new m(b(n.y, r.y)), new m(b(n.z, r.z)));
                                    case "linear":
                                        e = S(t.value);
                                        var i = S(t.addValue);
                                        return new g(new w(e.x, i.x), new w(e.y, i.y), new w(e.z, i.z));
                                    case "linear-random":
                                        n = S(t.minValue), r = S(t.maxValue);
                                        var a = S(t.minAddValue),
                                            o = S(t.maxAddValue);
                                        return new g(new w(b(n.x, r.x), b(a.x, o.x)), new w(b(n.y, r.y), b(a.y, o.y)), new w(b(n.z, r.z), b(a.z, o.z)));
                                    case "oscillating":
                                        e = S(t.value);
                                        var u = S(t.start),
                                            l = S(t.final),
                                            s = S(t.duration),
                                            c = S(t.direction);
                                        return new g(new x(e.x, u.x, l.x, s.x, c.x, t.easingFunction), new x(e.y, u.y, l.y, s.z, c.y, t.easingFunction), new x(e.z, u.z, l.z, s.z, c.z, t.easingFunction));
                                    case "oscillating-random":
                                        n = S(t.minValue), r = S(t.maxValue);
                                        var h = S(t.minStart),
                                            f = S(t.maxStart),
                                            d = S(t.minFinal),
                                            p = S(t.maxFinal),
                                            v = S(t.minDuration),
                                            y = S(t.maxDuration),
                                            O = S(t.minDirection),
                                            k = S(t.maxDirection);
                                        return new g(new x(b(n.x, r.x), b(h.x, f.x), b(d.x, p.x), b(v.x, y.x), z(O.x, k.x), C(t.easingFunctions)[0]), new x(b(n.y, r.y), b(h.y, f.y), b(d.y, p.y), b(v.y, y.y), z(O.y, k.y), C(t.easingFunctions)[0]), new x(b(n.z, r.z), b(h.z, f.z), b(d.z, p.z), b(v.z, y.z), z(O.z, k.z), C(t.easingFunctions)[0]))
                                }
                            }(p(p({}, R), {
                                valueType: "Vector3"
                            }))),
                            dragCoefficient: k(v.dragCoefficient),
                            size: y,
                            opacity: (_ = v.opacity, function(t) {
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
                                        return new x(b(t.minValue, t.maxValue), b(t.minStart, t.maxStart), b(t.minFinal, t.maxFinal), b(t.minDuration, t.maxDuration), z(t.minDirection, t.maxDirection), C(t.easingFunctions)[0])
                                }
                            }(p(p({}, _), {
                                valueType: "number"
                            }))),
                            spriteX: E * l.spriteWidth + 2 * E,
                            spriteY: P * l.spriteHeight + 2 * P,
                            spriteWidth: l.spriteWidth,
                            spriteHeight: l.spriteHeight
                        }));
                        return j(F, e), F
                    }, [j]),
                    I = r.useCallback(function(t) {
                        P.current.delete(t)
                    }, []),
                    M = r.useCallback(function() {
                        return P.current.clear()
                    }, []),
                    D = r.useCallback(function() {
                        return A.current
                    }, []);
                r.useImperativeHandle(e, function() {
                    return {
                        createConfetti: F,
                        addConfetti: j,
                        deleteConfetti: I,
                        clearConfetti: M,
                        getCanvas: D
                    }
                }, [F, j, I, M, D]);
                var U = r.useCallback(function(t, e) {
                        var n, r, i = e.clickHandler,
                            a = e.mouseHandler;
                        if (null != i || null != a) {
                            var l = null === (n = A.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                            if (null != l) {
                                var s = function(t, e) {
                                    if (null == e) throw Error("element should not be null");
                                    var n = e.getBoundingClientRect();
                                    return {
                                        x: t.clientX - n.left,
                                        y: t.clientY - n.top
                                    }
                                }(t, A.current);
                                if (u(s, {
                                        x: l.left,
                                        y: l.top,
                                        width: l.width,
                                        height: l.height
                                    })) {
                                    if (null != a) return a(t);
                                    if (null != i) {
                                        var c = -1e3 / _.current * 2,
                                            h = function(t, e) {
                                                for (var n = 0, r = Array.from(t.values()); n < r.length; n++) {
                                                    var i = r[n];
                                                    if (null != i && e(i)) return i
                                                }
                                                return null
                                            }(P.current, function(t) {
                                                var e = t.confetti,
                                                    n = e.previewPositionUpdate(o, c);
                                                return u(s, {
                                                    x: n.x - e.width / 2,
                                                    y: n.y - e.height / 2,
                                                    width: e.width,
                                                    height: e.height
                                                })
                                            });
                                        i(t, null !== (r = null == h ? void 0 : h.confetti) && void 0 !== r ? r : null)
                                    }
                                }
                            }
                        }
                    }, [o]),
                    H = r.useCallback(function(t) {
                        return U(t, {
                            clickHandler: l
                        })
                    }, [U, l]),
                    N = r.useCallback(function(t) {
                        return U(t, {
                            clickHandler: h
                        })
                    }, [U, h]),
                    T = r.useCallback(function(t) {
                        return U(t, {
                            mouseHandler: f
                        })
                    }, [U, f]),
                    B = r.useCallback(function(t) {
                        return U(t, {
                            mouseHandler: d
                        })
                    }, [U, d]);
                return r.useEffect(function() {
                    var t = function(t, e, n) {
                        null != n && window.addEventListener(t, e)
                    };
                    return t("click", H, l), t("mousedown", N, h), t("mousemove", T, f), t("mouseup", B, d),
                        function() {
                            window.removeEventListener("click", H), window.removeEventListener("mousedown", N), window.removeEventListener("mousemove", T), window.removeEventListener("mouseup", T)
                        }
                }, [H, N, T, B, l, h, f, d]), r.useEffect(function() {
                    var t = A.current,
                        e = new ResizeObserver(function() {
                            ! function(t) {
                                if (null != t) {
                                    var e = t.getBoundingClientRect(),
                                        r = e.width,
                                        i = e.height;
                                    t.width = r * n.g.devicePixelRatio, t.height = i * n.g.devicePixelRatio
                                }
                            }(A.current)
                        });
                    return null != t && e.observe(t),
                        function() {
                            null != t && e.unobserve(t)
                        }
                }, []), r.createElement("canvas", p({}, O, {
                    className: a,
                    ref: A
                }))
            });
            ! function(t, e) {
                void 0 === e && (e = {});
                var n = e.insertAt;
                if (t && "undefined" != typeof document) {
                    var r = document.head || document.getElementsByTagName("head")[0],
                        i = document.createElement("style");
                    i.type = "text/css", "top" === n && r.firstChild ? r.insertBefore(i, r.firstChild) : r.appendChild(i), i.styleSheet ? i.styleSheet.cssText = t : i.appendChild(document.createTextNode(t))
                }
            }(".SpriteCanvas-module_spriteCanvasHidden__ndzQV {\n  display: none;\n  position: absolute;\n  width: 0;\n  height: 0;\n  left: -100%;\n}\n");
            var P = r.forwardRef(function(t, e) {
                var n, a = t.className,
                    u = t.visible,
                    l = void 0 !== u && u,
                    s = t.sprites,
                    c = t.colors,
                    h = t.spriteWidth,
                    f = t.spriteHeight,
                    d = r.useRef(null),
                    p = r.useRef([]),
                    v = r.useRef(!1),
                    y = r.useRef({});
                r.useImperativeHandle(e, function() {
                    return {
                        getCanvas: function() {
                            return d.current
                        },
                        getCreateData: function() {
                            return {
                                sprites: p.current,
                                colors: c,
                                spriteWidth: h,
                                spriteHeight: f
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
                }, [c, f, h]);
                var g = r.useCallback(function() {
                        var t = d.current,
                            e = null == t ? void 0 : t.getContext("2d", {
                                willReadFrequently: !0
                            });
                        null != e && null != t && (e.clearRect(0, 0, t.width, t.height), p.current.forEach(function(t, n) {
                            var r = function(r, i) {
                                var a = h * i + 2 * i,
                                    o = f * n + 2 * n;
                                if (e.drawImage(t.image, a, o, h, f), null != r) {
                                    for (var u, l, s = e.getImageData(a, o, h, f), c = ("#" === (u = r)[0] && (u = u.slice(1)), {
                                            r: (l = parseInt(u, 16)) >> 16 & 255,
                                            g: l >> 8 & 255,
                                            b: 255 & l
                                        }), d = 0; d < s.data.length; d += 4) s.data[d] = c.r, s.data[d + 1] = c.g, s.data[d + 2] = c.b;
                                    e.putImageData(s, a, o)
                                }
                            };
                            t.colorize ? c.forEach(function(t, e) {
                                return r(t, e)
                            }) : r(null, 0)
                        }))
                    }, [c, f, h]),
                    m = r.useCallback(function() {
                        var t = s.map(function(t) {
                            var e = new Image,
                                n = "string" == typeof t ? t : t.src,
                                r = "string" == typeof t || t.colorize;
                            e.src = n;
                            var i = new Promise(function(t) {
                                e.onload = t
                            });
                            return {
                                colorize: r,
                                image: e,
                                src: n,
                                loadPromise: i
                            }
                        });
                        return Promise.all(t.map(function(t) {
                            return t.loadPromise
                        })).then(function() {
                            p.current = t.map(function(t) {
                                return {
                                    colorize: t.colorize,
                                    image: t.image,
                                    src: t.src
                                }
                            })
                        })
                    }, [s]),
                    w = r.useCallback(function(t) {
                        for (var e in y.current) y.current[e](t)
                    }, []),
                    x = r.useCallback(function() {
                        var t, e, n, r;
                        return t = void 0, e = void 0, n = void 0, r = function() {
                            return function(t, e) {
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
                                            if (n) throw TypeError("Generator is already executing.");
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
                                                        if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === u[0] || 2 === u[0])) {
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
                                                u = [6, t], r = 0
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
                            }(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, m()];
                                    case 1:
                                        return t.sent(), g(), v.current = !0, w(!0), [2]
                                }
                            })
                        }, new(n || (n = Promise))(function(i, a) {
                            function o(t) {
                                try {
                                    l(r.next(t))
                                } catch (t) {
                                    a(t)
                                }
                            }

                            function u(t) {
                                try {
                                    l(r.throw(t))
                                } catch (t) {
                                    a(t)
                                }
                            }

                            function l(t) {
                                var e;
                                t.done ? i(t.value) : ((e = t.value) instanceof n ? e : new n(function(t) {
                                    t(e)
                                })).then(o, u)
                            }
                            l((r = r.apply(t, e || [])).next())
                        })
                    }, [w, m, g]);
                return r.useEffect(function() {
                    x()
                }, [x]), r.useEffect(function() {
                    return function() {
                        return w(!1)
                    }
                }, [w]), r.useEffect(function() {
                    null != d.current && (d.current.width = (h + 2) * Math.max(c.length, 1), d.current.height = (f + 2) * s.length)
                }, [c.length, f, h, s.length]), r.createElement("canvas", {
                    ref: d,
                    className: o(a, ((n = {})["SpriteCanvas-module_spriteCanvasHidden__ndzQV"] = !l, n))
                })
            });

            function E(t, e) {
                var n, i = r.useState(null !== (n = null == e ? void 0 : e.isReady) && void 0 !== n && n),
                    a = i[0],
                    o = i[1];
                r.useEffect(function() {
                    var t = null == e ? void 0 : e.addReadyListener(o);
                    return function() {
                        null != t && (null == e || e.removeReadyListener(t))
                    }
                }, [e]);
                var u = r.useCallback(function(n, r) {
                        var i = void 0 === r ? {} : r,
                            a = i.sprite,
                            o = i.color,
                            u = null == e ? void 0 : e.getCreateData(),
                            l = null == e ? void 0 : e.getCanvas();
                        if (null != l && null != u && 0 !== u.sprites.length) return null == t ? void 0 : t.createConfetti(n, l, u, a, o)
                    }, [t, e]),
                    l = r.useCallback(function(t, e, n) {
                        for (var r = [], i = 0; i < e; i++) {
                            var a = u(t, n);
                            a && r.push(a)
                        }
                        return r
                    }, [u]),
                    s = r.useCallback(function(n) {
                        var r = null == e ? void 0 : e.getCanvas();
                        null != r && (null == t || t.addConfetti(n, r))
                    }, [t, e]),
                    c = r.useCallback(function(e) {
                        null == t || t.deleteConfetti(e)
                    }, [t]),
                    h = r.useCallback(function() {
                        return null == t ? void 0 : t.clearConfetti()
                    }, [t]);
                return r.useMemo(function() {
                    return {
                        createConfetti: u,
                        createMultipleConfetti: l,
                        addConfetti: s,
                        clearConfetti: h,
                        deleteConfetti: c,
                        isReady: a && null != e && null != t
                    }
                }, [s, h, t, u, l, c, a, e])
            }
        },
        794252: function(t, e, n) {
            "use strict";
            var r = n("859514"),
                i = n("960049"),
                a = n("124852"),
                o = Array;
            r({
                target: "Array",
                proto: !0
            }, {
                with: function(t, e) {
                    return i(a(this), o, t, e)
                }
            })
        },
        448105: function(t, e, n) {
            "use strict";
            t.exports = function(t, e) {
                var n = e.length,
                    r = t.length;
                if (r > n) return !1;
                if (r === n) return t === e;
                t: for (var i = 0, a = 0; i < r; i++) {
                    for (var o = t.charCodeAt(i); a < n;)
                        if (e.charCodeAt(a++) === o) continue t;
                    return !1
                }
                return !0
            }
        },
        136759: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                persist: function() {
                    return c
                }
            }), n("222007");
            Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
            var r = Object.defineProperty,
                i = Object.getOwnPropertySymbols,
                a = Object.prototype.hasOwnProperty,
                o = Object.prototype.propertyIsEnumerable,
                u = (t, e, n) => e in t ? r(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : t[e] = n,
                l = (t, e) => {
                    for (var n in e || (e = {})) a.call(e, n) && u(t, n, e[n]);
                    if (i)
                        for (var n of i(e)) o.call(e, n) && u(t, n, e[n]);
                    return t
                };
            let s = t => e => {
                    try {
                        let n = t(e);
                        if (n instanceof Promise) return n;
                        return {
                            then: t => s(t)(n),
                            catch (t) {
                                return this
                            }
                        }
                    } catch (t) {
                        return {
                            then(t) {
                                return this
                            },
                            catch: e => s(e)(t)
                        }
                    }
                },
                c = (t, e) => (n, r, i) => {
                    let a, o, u = l({
                        getStorage: () => localStorage,
                        serialize: JSON.stringify,
                        deserialize: JSON.parse,
                        partialize: t => t,
                        version: 0,
                        merge: (t, e) => l(l({}, e), t)
                    }, e);
                    (u.blacklist || u.whitelist) && console.warn("The ".concat(u.blacklist ? "blacklist" : "whitelist", " option is deprecated and will be removed in the next version. Please use the 'partialize' option instead."));
                    let c = !1,
                        h = new Set,
                        f = new Set;
                    try {
                        a = u.getStorage()
                    } catch (t) {}
                    if (!a) return t(function() {
                        for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                        console.warn("[zustand persist middleware] Unable to update item '".concat(u.name, "', the given storage is currently unavailable.")), n(...e)
                    }, r, i);
                    !a.removeItem && console.warn("[zustand persist middleware] The given storage for item '".concat(u.name, "' does not contain a 'removeItem' method, which will be required in v4."));
                    let d = s(u.serialize),
                        p = () => {
                            let t;
                            let e = u.partialize(l({}, r()));
                            u.whitelist && Object.keys(e).forEach(t => {
                                var n;
                                (null == (n = u.whitelist) ? void 0 : n.includes(t)) || delete e[t]
                            }), u.blacklist && u.blacklist.forEach(t => delete e[t]);
                            let n = d({
                                state: e,
                                version: u.version
                            }).then(t => a.setItem(u.name, t)).catch(e => {
                                t = e
                            });
                            if (t) throw t;
                            return n
                        },
                        v = i.setState;
                    i.setState = (t, e) => {
                        v(t, e), p()
                    };
                    let y = t(function() {
                            for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                            n(...e), p()
                        }, r, i),
                        g = () => {
                            var t;
                            if (!a) return;
                            c = !1, h.forEach(t => t(r()));
                            let e = (null == (t = u.onRehydrateStorage) ? void 0 : t.call(u, r())) || void 0;
                            return s(a.getItem.bind(a))(u.name).then(t => {
                                if (t) return u.deserialize(t)
                            }).then(t => {
                                if (t) {
                                    if ("number" != typeof t.version || t.version === u.version) return t.state;
                                    if (u.migrate) return u.migrate(t.state, t.version);
                                    console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                                }
                            }).then(t => {
                                var e;
                                return n(o = u.merge(t, null != (e = r()) ? e : y), !0), p()
                            }).then(() => {
                                null == e || e(o, void 0), c = !0, f.forEach(t => t(o))
                            }).catch(t => {
                                null == e || e(void 0, t)
                            })
                        };
                    return i.persist = {
                        setOptions: t => {
                            u = l(l({}, u), t), t.getStorage && (a = t.getStorage())
                        },
                        clearStorage: () => {
                            var t;
                            null == (t = null == a ? void 0 : a.removeItem) || t.call(a, u.name)
                        },
                        rehydrate: () => g(),
                        hasHydrated: () => c,
                        onHydrate: t => (h.add(t), () => {
                            h.delete(t)
                        }),
                        onFinishHydration: t => (f.add(t), () => {
                            f.delete(t)
                        })
                    }, g(), o || y
                }
        },
        506838: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                P: function() {
                    return q
                },
                match: function() {
                    return Q
                }
            }), n("222007"), n("424973"), n("70102"), n("808653");
            let r = Symbol.for("@ts-pattern/matcher"),
                i = Symbol.for("@ts-pattern/isVariadic"),
                a = "@ts-pattern/anonymous-select-key",
                o = t => !!(t && "object" == typeof t),
                u = t => t && !!t[r],
                l = (t, e, n) => {
                    if (u(t)) {
                        let i = t[r](),
                            {
                                matched: a,
                                selections: o
                            } = i.match(e);
                        return a && o && Object.keys(o).forEach(t => n(t, o[t])), a
                    }
                    if (o(t)) {
                        if (!o(e)) return !1;
                        if (Array.isArray(t)) {
                            if (!Array.isArray(e)) return !1;
                            let r = [],
                                a = [],
                                o = [];
                            for (let e of t.keys()) {
                                let n = t[e];
                                u(n) && n[i] ? o.push(n) : o.length ? a.push(n) : r.push(n)
                            }
                            if (o.length) {
                                if (o.length > 1) throw Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
                                if (e.length < r.length + a.length) return !1;
                                let t = e.slice(0, r.length),
                                    i = 0 === a.length ? [] : e.slice(-a.length),
                                    u = e.slice(r.length, 0 === a.length ? 1 / 0 : -a.length);
                                return r.every((e, r) => l(e, t[r], n)) && a.every((t, e) => l(t, i[e], n)) && (0 === o.length || l(o[0], u, n))
                            }
                            return t.length === e.length && t.every((t, r) => l(t, e[r], n))
                        }
                        return Object.keys(t).every(i => {
                            let a = t[i];
                            return (i in e || u(a) && "optional" === a[r]().matcherType) && l(a, e[i], n)
                        })
                    }
                    return Object.is(e, t)
                },
                s = t => {
                    var e, n, i;
                    return o(t) ? u(t) ? null != (e = null == (n = (i = t[r]()).getSelectionKeys) ? void 0 : n.call(i)) ? e : [] : Array.isArray(t) ? c(t, s) : c(Object.values(t), s) : []
                },
                c = (t, e) => t.reduce((t, n) => t.concat(e(n)), []);

            function h(t) {
                return Object.assign(t, {
                    optional: () => f(t),
                    and: e => v(t, e),
                    or: e => y(t, e),
                    select: e => void 0 === e ? m(t) : m(e, t)
                })
            }

            function f(t) {
                return h({
                    [r]: () => ({
                        match: e => {
                            let n = {},
                                r = (t, e) => {
                                    n[t] = e
                                };
                            return void 0 === e ? (s(t).forEach(t => r(t, void 0)), {
                                matched: !0,
                                selections: n
                            }) : {
                                matched: l(t, e, r),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => s(t),
                        matcherType: "optional"
                    })
                })
            }
            let d = (t, e) => {
                    for (let n of t)
                        if (!e(n)) return !1;
                    return !0
                },
                p = (t, e) => {
                    for (let [n, r] of t.entries())
                        if (!e(r, n)) return !1;
                    return !0
                };

            function v() {
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return h({
                    [r]: () => ({
                        match: t => {
                            let n = {},
                                r = (t, e) => {
                                    n[t] = e
                                };
                            return {
                                matched: e.every(e => l(e, t, r)),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => c(e, s),
                        matcherType: "and"
                    })
                })
            }

            function y() {
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return h({
                    [r]: () => ({
                        match: t => {
                            let n = {},
                                r = (t, e) => {
                                    n[t] = e
                                };
                            return c(e, s).forEach(t => r(t, void 0)), {
                                matched: e.some(e => l(e, t, r)),
                                selections: n
                            }
                        },
                        getSelectionKeys: () => c(e, s),
                        matcherType: "or"
                    })
                })
            }

            function g(t) {
                return {
                    [r]: () => ({
                        match: e => ({
                            matched: !!t(e)
                        })
                    })
                }
            }

            function m() {
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                let i = "string" == typeof e[0] ? e[0] : void 0,
                    o = 2 === e.length ? e[1] : "string" == typeof e[0] ? void 0 : e[0];
                return h({
                    [r]: () => ({
                        match: t => {
                            let e = {
                                [null != i ? i : a]: t
                            };
                            return {
                                matched: void 0 === o || l(o, t, (t, n) => {
                                    e[t] = n
                                }),
                                selections: e
                            }
                        },
                        getSelectionKeys: () => [null != i ? i : a].concat(void 0 === o ? [] : s(o))
                    })
                })
            }

            function w(t) {
                return "number" == typeof t
            }

            function x(t) {
                return "string" == typeof t
            }

            function b(t) {
                return "bigint" == typeof t
            }
            let C = h(g(function(t) {
                    return !0
                })),
                z = t => Object.assign(h(t), {
                    startsWith: e => z(v(t, g(t => x(t) && t.startsWith(e)))),
                    endsWith: e => z(v(t, g(t => x(t) && t.endsWith(e)))),
                    minLength: e => {
                        var n;
                        return z(v(t, (n = e, g(t => x(t) && t.length >= n))))
                    },
                    maxLength: e => {
                        var n;
                        return z(v(t, (n = e, g(t => x(t) && t.length <= n))))
                    },
                    includes: e => z(v(t, g(t => x(t) && t.includes(e)))),
                    regex: e => z(v(t, g(t => x(t) && !!t.match(e))))
                }),
                O = z(g(x)),
                S = (t, e) => g(n => w(n) && t <= n && e >= n),
                k = t => g(e => w(e) && e < t),
                A = t => g(e => w(e) && e > t),
                P = t => g(e => w(e) && e <= t),
                E = t => g(e => w(e) && e >= t),
                R = () => g(t => w(t) && Number.isInteger(t)),
                _ = () => g(t => w(t) && Number.isFinite(t)),
                V = () => g(t => w(t) && t > 0),
                j = () => g(t => w(t) && t < 0),
                F = t => Object.assign(h(t), {
                    between: (e, n) => F(v(t, S(e, n))),
                    lt: e => F(v(t, k(e))),
                    gt: e => F(v(t, A(e))),
                    lte: e => F(v(t, P(e))),
                    gte: e => F(v(t, E(e))),
                    int: () => F(v(t, R())),
                    finite: () => F(v(t, _())),
                    positive: () => F(v(t, V())),
                    negative: () => F(v(t, j()))
                }),
                I = F(g(w)),
                M = (t, e) => g(n => b(n) && t <= n && e >= n),
                D = t => g(e => b(e) && e < t),
                U = t => g(e => b(e) && e > t),
                H = t => g(e => b(e) && e <= t),
                N = t => g(e => b(e) && e >= t),
                T = () => g(t => b(t) && t > 0),
                B = () => g(t => b(t) && t < 0),
                W = t => Object.assign(h(t), {
                    between: (e, n) => W(v(t, M(e, n))),
                    lt: e => W(v(t, D(e))),
                    gt: e => W(v(t, U(e))),
                    lte: e => W(v(t, H(e))),
                    gte: e => W(v(t, N(e))),
                    positive: () => W(v(t, T())),
                    negative: () => W(v(t, B()))
                }),
                L = W(g(b)),
                K = h(g(function(t) {
                    return "boolean" == typeof t
                })),
                X = h(g(function(t) {
                    return "symbol" == typeof t
                })),
                Y = h(g(function(t) {
                    return null == t
                }));
            var q = {
                __proto__: null,
                matcher: r,
                optional: f,
                array: function() {
                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    return function t(e) {
                        var n;
                        return Object.assign((n = e, Object.assign(n, {
                            *[Symbol.iterator]() {
                                yield Object.assign(n, {
                                    [i]: !0
                                })
                            }
                        })), {
                            optional: () => t(f(e)),
                            select: n => t(void 0 === n ? m(e) : m(n, e))
                        })
                    }({
                        [r]: () => ({
                            match: t => {
                                if (!Array.isArray(t)) return {
                                    matched: !1
                                };
                                if (0 === e.length) return {
                                    matched: !0
                                };
                                let n = e[0],
                                    r = {};
                                if (0 === t.length) return s(n).forEach(t => {
                                    r[t] = []
                                }), {
                                    matched: !0,
                                    selections: r
                                };
                                let i = (t, e) => {
                                    r[t] = (r[t] || []).concat([e])
                                };
                                return {
                                    matched: t.every(t => l(n, t, i)),
                                    selections: r
                                }
                            },
                            getSelectionKeys: () => 0 === e.length ? [] : s(e[0])
                        })
                    })
                },
                set: function() {
                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    return h({
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
                                let r = (t, e) => {
                                        n[t] = (n[t] || []).concat([e])
                                    },
                                    i = e[0];
                                return {
                                    matched: d(t, t => l(i, t, r)),
                                    selections: n
                                }
                            },
                            getSelectionKeys: () => 0 === e.length ? [] : s(e[0])
                        })
                    })
                },
                map: function() {
                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    return h({
                        [r]: () => ({
                            match: t => {
                                var n;
                                if (!(t instanceof Map)) return {
                                    matched: !1
                                };
                                let r = {};
                                if (0 === t.size) return {
                                    matched: !0,
                                    selections: r
                                };
                                let i = (t, e) => {
                                    r[t] = (r[t] || []).concat([e])
                                };
                                if (0 === e.length) return {
                                    matched: !0
                                };
                                if (1 === e.length) throw Error("`P.map` wasn't given enough arguments. Expected (key, value), received ".concat(null == (n = e[0]) ? void 0 : n.toString()));
                                let [a, o] = e;
                                return {
                                    matched: p(t, (t, e) => {
                                        let n = l(a, e, i),
                                            r = l(o, t, i);
                                        return n && r
                                    }),
                                    selections: r
                                }
                            },
                            getSelectionKeys: () => 0 === e.length ? [] : [...s(e[0]), ...s(e[1])]
                        })
                    })
                },
                intersection: v,
                union: y,
                not: function(t) {
                    return h({
                        [r]: () => ({
                            match: e => ({
                                matched: !l(t, e, () => {})
                            }),
                            getSelectionKeys: () => [],
                            matcherType: "not"
                        })
                    })
                },
                when: g,
                select: m,
                any: C,
                _: C,
                string: O,
                between: S,
                lt: k,
                gt: A,
                lte: P,
                gte: E,
                int: R,
                finite: _,
                positive: V,
                negative: j,
                number: I,
                betweenBigInt: M,
                ltBigInt: D,
                gtBigInt: U,
                lteBigInt: H,
                gteBigInt: N,
                positiveBigInt: T,
                negativeBigInt: B,
                bigint: L,
                boolean: K,
                symbol: X,
                nullish: Y,
                instanceOf: function(t) {
                    var e;
                    return h(g((e = t, t => t instanceof e)))
                },
                shape: function(t) {
                    return h(g(function() {
                        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                        if (1 === e.length) {
                            let [t] = e;
                            return e => l(t, e, () => {})
                        }
                        if (2 === e.length) {
                            let [t, n] = e;
                            return l(t, n, () => {})
                        }
                        throw Error("isMatching wasn't given the right number of arguments: expected 1 or 2, received ".concat(e.length, "."))
                    }(t)))
                }
            };
            let J = {
                matched: !1,
                value: void 0
            };

            function Q(t) {
                return new G(t, J)
            }
            class G {
                with() {
                    let t;
                    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                    if (this.state.matched) return this;
                    let i = n[n.length - 1],
                        o = [n[0]];
                    3 === n.length && "function" == typeof n[1] ? (o.push(n[0]), t = n[1]) : n.length > 2 && o.push(...n.slice(1, n.length - 1));
                    let u = !1,
                        s = {},
                        c = (t, e) => {
                            u = !0, s[t] = e
                        },
                        h = o.some(t => l(t, this.input, c)) && (!t || t(this.input)) ? {
                            matched: !0,
                            value: i(u ? a in s ? s[a] : s : this.input, this.input)
                        } : J;
                    return new G(this.input, h)
                }
                when(t, e) {
                    if (this.state.matched) return this;
                    let n = !!t(this.input);
                    return new G(this.input, n ? {
                        matched: !0,
                        value: e(this.input, this.input)
                    } : J)
                }
                otherwise(t) {
                    return this.state.matched ? this.state.value : t(this.input)
                }
                exhaustive() {
                    return this.run()
                }
                run() {
                    let t;
                    if (this.state.matched) return this.state.value;
                    try {
                        t = JSON.stringify(this.input)
                    } catch (e) {
                        t = this.input
                    }
                    throw Error("Pattern matching error: no pattern matches value ".concat(t))
                }
                returnType() {
                    return this
                }
                constructor(t, e) {
                    this.input = void 0, this.state = void 0, this.input = t, this.state = e
                }
            }
        }
    }
]);