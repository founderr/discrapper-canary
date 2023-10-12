"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [24971], {
        624971: (t, e, n) => {
            n.d(e, {
                Z: () => T
            });

            function r(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function i(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, i, a = [],
                            o = !0,
                            u = !1;
                        try {
                            for (n = n.call(t); !(o = (r = n.next()).done); o = !0) {
                                a.push(r.value);
                                if (e && a.length === e) break
                            }
                        } catch (t) {
                            u = !0;
                            i = t
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return a
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return r(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var a = function() {
                function t(e, n, r, a) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var o = i(function(t, e, n) {
                            var r = Math.sqrt(n),
                                i = Math.ceil(r);
                            return [i, i * t, i * e]
                        }(r, a, e.frames), 3),
                        u = o[0],
                        s = o[1],
                        c = o[2];
                    this.key = n;
                    this.canvas = function(t, e) {
                        if ("function" == typeof OffscreenCanvas) return new OffscreenCanvas(t, e);
                        var n = document.createElement("canvas");
                        n.width = t;
                        n.height = e;
                        return n
                    }(s, c);
                    this.context = this.canvas.getContext("2d");
                    this.cells = u;
                    this.native = e;
                    this.renderedFrames = new Set;
                    this.frameWidth = r;
                    this.frameHeight = a;
                    this.frameRate = e.fps;
                    this.frameCount = e.frames;
                    if (null == this.context) throw new Error("couldn't create 2d canvas context.")
                }
                var e = t.prototype;
                e.drawInto = function(t, e, n, r) {
                    e %= this.frameCount;
                    this.requireFrame(e);
                    var a = i(o(e, this.frameWidth, this.frameHeight, this.cells), 4),
                        u = a[0],
                        s = a[1],
                        c = a[2],
                        l = a[3];
                    t.drawImage(this.canvas, u, s, c, l, 0, 0, n, r)
                };
                e.drop = function() {
                    var t;
                    null === (t = this.native) || void 0 === t || t.drop();
                    this.native = null
                };
                e.requireFrame = function(t) {
                    if (null != this.native) {
                        if (!this.renderedFrames.has(t)) {
                            this.paint(t);
                            this.renderedFrames.add(t)
                        }
                        this.renderedFrames.size === this.frameCount && this.drop()
                    }
                };
                e.paint = function(t) {
                    if (null != this.native) {
                        var e, n = this.native.get_bgra(t, this.frameWidth, this.frameHeight),
                            r = new ImageData(n, this.frameWidth, this.frameHeight),
                            a = i(o(t, this.frameWidth, this.frameHeight, this.cells), 4),
                            u = a[0],
                            s = a[1],
                            c = a[2],
                            l = a[3];
                        null === (e = this.context) || void 0 === e || e.putImageData(r, u, s, 0, 0, c, l)
                    }
                };
                return t
            }();

            function o(t, e, n, r) {
                return [Math.floor(t / r) * e, t % r * n, e, n]
            }
            var u = n(441143),
                s = n.n(u),
                c = n(341526);

            function l(t, e, n, r, i, a, o) {
                try {
                    var u = t[a](o),
                        s = u.value
                } catch (t) {
                    n(t);
                    return
                }
                u.done ? e(s) : Promise.resolve(s).then(r, i)
            }

            function f(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var a = t.apply(e, n);

                        function o(t) {
                            l(a, r, i, o, u, "next", t)
                        }

                        function u(t) {
                            l(a, r, i, o, u, "throw", t)
                        }
                        o(void 0)
                    }))
                }
            }

            function h(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(t, r.key, r)
                }
            }
            var p, v, d, y, m, b, w, g, k, _ = function(t, e) {
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

                    function u(a) {
                        return function(u) {
                            return function(a) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; o;) try {
                                    if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                    (r = 0, i) && (a = [2 & a[0], i.value]);
                                    switch (a[0]) {
                                        case 0:
                                        case 1:
                                            i = a;
                                            break;
                                        case 4:
                                            o.label++;
                                            return {
                                                value: a[1], done: !1
                                            };
                                        case 5:
                                            o.label++;
                                            r = a[1];
                                            a = [0];
                                            continue;
                                        case 7:
                                            a = o.ops.pop();
                                            o.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                o = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                                o.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && o.label < i[1]) {
                                                o.label = i[1];
                                                i = a;
                                                break
                                            }
                                            if (i && o.label < i[2]) {
                                                o.label = i[2];
                                                o.ops.push(a);
                                                break
                                            }
                                            i[2] && o.ops.pop();
                                            o.trys.pop();
                                            continue
                                    }
                                    a = e.call(t, o)
                                } catch (t) {
                                    a = [6, t];
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, u])
                        }
                    }
                },
                x = 320,
                C = (0, c.G)(f((function() {
                    var t;
                    return _(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, n.e(21819).then(n.bind(n, 321819))];
                            case 1:
                                return [4, e.sent().default()];
                            case 2:
                                t = e.sent();
                                d = t.cwrap("lottie_create", "number", ["string"]);
                                y = t._lottie_destroy;
                                m = t._lottie_draw_into_bgra;
                                b = t._lottie_draw_into_rgba;
                                w = t._lottie_frame_count;
                                g = t._lottie_frame_rate;
                                k = t._memory_create;
                                p = t;
                                v = k(409600);
                                return [2]
                        }
                    }))
                })));

            function E(t, e) {
                return new Uint8ClampedArray(p.HEAPU8.buffer, v, t * e * 4)
            }
            var A = function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    this.native = d(e);
                    if (0 === this.native) throw new Error("couldn't create wasm lottie. potentially bad json.")
                }
                var e = t.prototype;
                e.get_bgra = function(t, e, n) {
                    s()(e <= x, "width exceeds static allocation.");
                    s()(n <= x, "height exceeds static allocation.");
                    m(this.native, v, t, e, n);
                    return E(e, n)
                };
                e.get_rgba = function(t, e, n) {
                    s()(e <= x, "width exceeds static allocation.");
                    s()(n <= x, "height exceeds static allocation.");
                    b(this.native, v, t, e, n);
                    return E(e, n)
                };
                e.drop = function() {
                    y(this.native)
                };
                ! function(t, e, n) {
                    e && h(t.prototype, e);
                    n && h(t, n)
                }(t, [{
                    key: "fps",
                    get: function() {
                        return g(this.native)
                    }
                }, {
                    key: "frames",
                    get: function() {
                        return w(this.native)
                    }
                }]);
                return t
            }();

            function S(t, e, n, r, i, a, o) {
                try {
                    var u = t[a](o),
                        s = u.value
                } catch (t) {
                    n(t);
                    return
                }
                u.done ? e(s) : Promise.resolve(s).then(r, i)
            }

            function I(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var a = t.apply(e, n);

                        function o(t) {
                            S(a, r, i, o, u, "next", t)
                        }

                        function u(t) {
                            S(a, r, i, o, u, "throw", t)
                        }
                        o(void 0)
                    }))
                }
            }
            var P = function(t, e) {
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

                function u(a) {
                    return function(u) {
                        return function(a) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                (r = 0, i) && (a = [2 & a[0], i.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            o.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && o.label < i[1]) {
                                            o.label = i[1];
                                            i = a;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2];
                                            o.ops.push(a);
                                            break
                                        }
                                        i[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                a = e.call(t, o)
                            } catch (t) {
                                a = [6, t];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, u])
                    }
                }
            };

            function F(t, e, n, r, i) {
                return H.apply(this, arguments)
            }

            function H() {
                return (H = I((function(t, e, n, r, i) {
                    var o, u, s;
                    return P(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                return null != (o = i) ? [3, 3] : [4, fetch(r)];
                            case 1:
                                if (!(u = c.sent()).ok) throw new Error("Error fetching sticker at ".concat(r));
                                return [4, u.text()];
                            case 2:
                                o = c.sent();
                                c.label = 3;
                            case 3:
                                return null == o ? [2, null] : [4, C()];
                            case 4:
                                c.sent();
                                s = new A(o);
                                return [2, new a(s, t, e, n)]
                        }
                    }))
                }))).apply(this, arguments)
            }
            const T = new(function() {
                function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    this.entries = [];
                    this.referenceCounts = new Map
                }
                var e = t.prototype;
                e.create = function(t, e, n, r, i) {
                    var a = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
                        o = this;
                    return this.getCached(t).then((function(u) {
                        var s;
                        o.referenceCounts.set(t, (null !== (s = o.referenceCounts.get(t)) && void 0 !== s ? s : 0) + 1);
                        if (u) return u;
                        var c = {
                            key: t,
                            promise: F(t, e, n, r, i)
                        };
                        if (a) {
                            o.entries.push(c);
                            c.promise.then((function(e) {
                                null == e && o.removeEntry(t);
                                return e
                            })).catch((function(e) {
                                return o.removeEntry(t)
                            }));
                            o.entries.length > 50 && o.removeEntryAt(0)
                        }
                        return c.promise
                    }))
                };
                e.drop = function(t) {
                    this.removeEntry(t)
                };
                e.getCached = function(t) {
                    var e = this,
                        n = this.entries.findIndex((function(e) {
                            return e.key === t
                        }));
                    if (n >= 0) {
                        var r = this.entries[n];
                        this.entries.splice(n, 1);
                        this.entries.push(r);
                        return r.promise.then((function(t) {
                            null == t && e.removeEntryAt(n);
                            return t
                        }))
                    }
                    return Promise.resolve(null)
                };
                e.removeEntry = function(t) {
                    var e = this.entries.findIndex((function(e) {
                        return e.key === t
                    }));
                    if (!(e >= 0)) return null;
                    this.removeEntryAt(e)
                };
                e.removeEntryAt = function(t) {
                    var e = this.entries[t],
                        n = this.referenceCounts.get(e.key);
                    if (null != n && n > 1) {
                        this.referenceCounts.set(e.key, n - 1);
                        return null
                    }
                    this.entries.splice(t, 1);
                    this.referenceCounts.delete(e.key);
                    e.promise.then((function(t) {
                        return null == t ? void 0 : t.drop()
                    }));
                    return e
                };
                return t
            }())
        }
    }
]);