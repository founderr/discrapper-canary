! function() {
    var t, e, r, n = {
            681802: function(t, e, r) {
                "use strict";
                var n = r("53786"),
                    i = r("125359"),
                    s = r("745795"),
                    a = r("174669")("toStringTag"),
                    o = Object,
                    u = "Arguments" === s(function() {
                        return arguments
                    }()),
                    c = function(t, e) {
                        try {
                            return t[e]
                        } catch (t) {}
                    };
                t.exports = n ? s : function(t) {
                    var e, r, n;
                    return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(r = c(e = o(t), a)) ? r : u ? s(e) : "Object" === (n = s(e)) && i(e.callee) ? "Arguments" : n
                }
            },
            350142: function(t, e, r) {
                "use strict";
                var n = r("64980"),
                    i = Error,
                    s = n("".replace),
                    a = String(i("zxcasd").stack),
                    o = /\n\s*at [^:]*:[^\n]*/,
                    u = o.test(a);
                t.exports = function(t, e) {
                    if (u && "string" == typeof t && !i.prepareStackTrace)
                        for (; e--;) t = s(t, o, "");
                    return t
                }
            },
            571503: function(t, e, r) {
                "use strict";
                var n = r("366483"),
                    i = r("350142"),
                    s = r("19125"),
                    a = Error.captureStackTrace;
                t.exports = function(t, e, r, o) {
                    s && (a ? a(t, e) : n(t, "stack", i(r, o)))
                }
            },
            19125: function(t, e, r) {
                "use strict";
                var n = r("664144"),
                    i = r("16447");
                t.exports = !n(function() {
                    var t = Error("a");
                    return !("stack" in t) || (Object.defineProperty(t, "stack", i(1, 7)), 7 !== t.stack)
                })
            },
            145661: function(t, e, r) {
                "use strict";
                var n = r("406219"),
                    i = Function.prototype,
                    s = i.apply,
                    a = i.call;
                t.exports = "object" == typeof Reflect && Reflect.apply || (n ? a.bind(s) : function() {
                    return a.apply(s, arguments)
                })
            },
            688358: function(t, e, r) {
                "use strict";
                var n = r("125359"),
                    i = r("472960"),
                    s = r("823493");
                t.exports = function(t, e, r) {
                    var a, o;
                    return s && n(a = e.constructor) && a !== r && i(o = a.prototype) && o !== r.prototype && s(t, o), t
                }
            },
            561051: function(t, e, r) {
                "use strict";
                var n = r("472960"),
                    i = r("366483");
                t.exports = function(t, e) {
                    n(e) && "cause" in e && i(t, "cause", e.cause)
                }
            },
            391358: function(t, e, r) {
                "use strict";
                var n = r("998270");
                t.exports = function(t, e) {
                    return void 0 === t ? arguments.length < 2 ? "" : e : n(t)
                }
            },
            681645: function(t, e, r) {
                "use strict";
                var n = r("541368").f;
                t.exports = function(t, e, r) {
                    r in t || n(t, r, {
                        configurable: !0,
                        get: function() {
                            return e[r]
                        },
                        set: function(t) {
                            e[r] = t
                        }
                    })
                }
            },
            696397: function(t, e, r) {
                "use strict";
                var n = r("64980"),
                    i = r("969708"),
                    s = r("998270"),
                    a = r("590455"),
                    o = n("".charAt),
                    u = n("".charCodeAt),
                    c = n("".slice),
                    l = function(t) {
                        return function(e, r) {
                            var n, l, h = s(a(e)),
                                f = i(r),
                                d = h.length;
                            return f < 0 || f >= d ? t ? "" : void 0 : (n = u(h, f)) < 55296 || n > 56319 || f + 1 === d || (l = u(h, f + 1)) < 56320 || l > 57343 ? t ? o(h, f) : n : t ? c(h, f, f + 2) : (n - 55296 << 10) + (l - 56320) + 65536
                        }
                    };
                t.exports = {
                    codeAt: l(!1),
                    charAt: l(!0)
                }
            },
            53786: function(t, e, r) {
                "use strict";
                var n = r("174669")("toStringTag"),
                    i = {};
                i[n] = "z", t.exports = "[object z]" === String(i)
            },
            998270: function(t, e, r) {
                "use strict";
                var n = r("681802"),
                    i = String;
                t.exports = function(t) {
                    if ("Symbol" === n(t)) throw TypeError("Cannot convert a Symbol value to a string");
                    return i(t)
                }
            },
            802490: function(t, e, r) {
                "use strict";
                var n = r("434978"),
                    i = r("59393"),
                    s = r("366483"),
                    a = r("470984"),
                    o = r("823493"),
                    u = r("539536"),
                    c = r("681645"),
                    l = r("688358"),
                    h = r("391358"),
                    f = r("561051"),
                    d = r("571503"),
                    m = r("814026"),
                    p = r("140925");
                t.exports = function(t, e, r, v) {
                    var g = "stackTraceLimit",
                        y = v ? 2 : 1,
                        I = t.split("."),
                        A = I[I.length - 1],
                        b = n.apply(null, I);
                    if (b) {
                        var w = b.prototype;
                        if (!p && i(w, "cause") && delete w.cause, !r) return b;
                        var E = n("Error"),
                            T = e(function(t, e) {
                                var r = h(v ? e : t, void 0),
                                    n = v ? new b(t) : new b;
                                return void 0 !== r && s(n, "message", r), d(n, T, n.stack, 2), this && a(w, this) && l(n, this, T), arguments.length > y && f(n, arguments[y]), n
                            });
                        if (T.prototype = w, "Error" !== A ? o ? o(T, E) : u(T, E, {
                                name: !0
                            }) : m && g in b && (c(T, b, g), c(T, b, "prepareStackTrace")), u(T, b), !p) try {
                            w.name !== A && s(w, "name", A), w.constructor = T
                        } catch (t) {}
                        return T
                    }
                }
            },
            70102: function(t, e, r) {
                "use strict";
                var n = r("859514"),
                    i = r("503486"),
                    s = r("145661"),
                    a = r("802490"),
                    o = "WebAssembly",
                    WebAssembly = i[o],
                    u = 7 !== Error("e", {
                        cause: 7
                    }).cause,
                    c = function(t, e) {
                        var r = {};
                        r[t] = a(t, e, u), n({
                            global: !0,
                            constructor: !0,
                            arity: 1,
                            forced: u
                        }, r)
                    },
                    l = function(t, e) {
                        if (WebAssembly && WebAssembly[t]) {
                            var r = {};
                            r[t] = a(o + "." + t, e, u), n({
                                target: o,
                                stat: !0,
                                constructor: !0,
                                arity: 1,
                                forced: u
                            }, r)
                        }
                    };
                c("Error", function(t) {
                    return function(e) {
                        return s(t, this, arguments)
                    }
                }), c("EvalError", function(t) {
                    return function(e) {
                        return s(t, this, arguments)
                    }
                }), c("RangeError", function(t) {
                    return function(e) {
                        return s(t, this, arguments)
                    }
                }), c("ReferenceError", function(t) {
                    return function(e) {
                        return s(t, this, arguments)
                    }
                }), c("SyntaxError", function(t) {
                    return function(e) {
                        return s(t, this, arguments)
                    }
                }), c("TypeError", function(t) {
                    return function(e) {
                        return s(t, this, arguments)
                    }
                }), c("URIError", function(t) {
                    return function(e) {
                        return s(t, this, arguments)
                    }
                }), l("CompileError", function(t) {
                    return function(e) {
                        return s(t, this, arguments)
                    }
                }), l("LinkError", function(t) {
                    return function(e) {
                        return s(t, this, arguments)
                    }
                }), l("RuntimeError", function(t) {
                    return function(e) {
                        return s(t, this, arguments)
                    }
                })
            },
            332822: function(t, e, r) {
                "use strict";
                r("918437")("Uint8", function(t) {
                    return function(e, r, n) {
                        return t(this, e, r, n)
                    }
                }, !0)
            },
            62981: function(t, e, r) {
                "use strict";
                r.r(e), r.d(e, {
                    default: function() {
                        return n
                    }
                }), r("854508");
                var n, i = r("627445"),
                    s = r.n(i),
                    a = r("429281");
                let o = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope;
                n = class {
                    setState(t, e) {
                        null != e && (!t && e !== this.currentFrame && this.draw(e), this.currentFrame = e), t && !this.animate && this.resumeAnimation(), this.animate = t, this.scheduleOrCancelTick()
                    }
                    setVisibility(t) {
                        let e = this.visible;
                        this.visible = t, this.visible && !e && this.resumeAnimation(), this.scheduleOrCancelTick()
                    }
                    resumeAnimation() {
                        this.currentFrameTime = performance.now()
                    }
                    clear() {
                        this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height)
                    }
                    draw(t) {
                        return null != this.animation && (this.clear(), this.animation.drawInto(this.canvasContext, t, this.canvas.width, this.canvas.height), !0)
                    }
                    drop() {
                        this.animate = !1, this.scheduleOrCancelTick(), a.default.drop(this.key), this.animation = null, this.dropped = !0
                    }
                    scheduleOrCancelTick() {
                        !this.dropped && (this.hasInitialFrame ? this.requestAnimationFrame(this.animate && this.visible ? this.onAnimationTick : null) : this.requestAnimationFrame(this.onInitialAnimationTick))
                    }
                    requestAnimationFrame(t) {
                        null != t && null == this.requestAnimationFrameId && (this.requestAnimationFrameId = requestAnimationFrame(t)), null != t && null != this.requestAnimationFrameId && (cancelAnimationFrame(this.requestAnimationFrameId), this.requestAnimationFrameId = requestAnimationFrame(t)), null == t && null != this.requestAnimationFrameId && (cancelAnimationFrame(this.requestAnimationFrameId), this.requestAnimationFrameId = null)
                    }
                    constructor({
                        canvas: t,
                        id: e,
                        assetUrl: r,
                        assetData: n,
                        isVisible: i,
                        shouldAnimate: u,
                        onInitialDraw: c,
                        onError: l
                    }) {
                        this.animation = null, this.onInitialAnimationTick = t => {
                            this.requestAnimationFrameId = null;
                            let e = performance.now();
                            if ((e - t < 30 || o) && this.draw(0)) {
                                var r;
                                this.resumeAnimation(), null === (r = this.onInitialDraw) || void 0 === r || r.call(this), this.hasInitialFrame = !0
                            }
                            this.scheduleOrCancelTick()
                        }, this.onAnimationTick = t => {
                            this.requestAnimationFrameId = null;
                            let e = performance.now(),
                                r = (o ? e : t) - this.currentFrameTime,
                                n = Math.floor(r / this.frameDuration);
                            n > 0 && ((e - t < 12 || o) && (this.draw(this.currentFrame), this.currentFrame += n), this.currentFrameTime += n * this.frameDuration), this.scheduleOrCancelTick()
                        };
                        let h = t.getContext("2d");
                        s(null != h, "couldn't get canvas 2d context."), this.canvas = t, this.canvasContext = h, this.animation = null, this.dropped = !1, this.currentFrame = 0, this.currentFrameTime = 0, this.frameDuration = 1e3, this.animate = u, this.visible = i, this.requestAnimationFrameId = null, this.hasInitialFrame = !1, this.onInitialDraw = c, this.onError = l, this.key = "".concat(e, ":").concat(t.width, ":").concat(t.height), a.default.create(this.key, t.width, t.height, r, n).then(t => {
                            null != t && (this.dropped ? a.default.drop(this.key) : (this.animation = t, this.frameDuration = 1e3 / t.frameRate, this.scheduleOrCancelTick()))
                        }).catch(t => {
                            null == l || l()
                        })
                    }
                }
            },
            349807: function(t, e, r) {
                "use strict";
                var n;
                r.r(e), r.d(e, {
                    default: function() {
                        return n
                    }
                }), r("222007"), r("70102");
                n = class {
                    drawInto(t, e, r, n) {
                        e %= this.frameCount, this.requireFrame(e);
                        let [s, a, o, u] = i(e, this.frameWidth, this.frameHeight, this.cells);
                        t.drawImage(this.canvas, s, a, o, u, 0, 0, r, n)
                    }
                    drop() {
                        var t;
                        null === (t = this.native) || void 0 === t || t.drop(), this.native = null
                    }
                    requireFrame(t) {
                        null != this.native && (!this.renderedFrames.has(t) && (this.paint(t), this.renderedFrames.add(t)), this.renderedFrames.size === this.frameCount && this.drop())
                    }
                    paint(t) {
                        if (null != this.native) {
                            var e;
                            let r = this.native.get_bgra(t, this.frameWidth, this.frameHeight),
                                n = new ImageData(r, this.frameWidth, this.frameHeight),
                                [s, a, o, u] = i(t, this.frameWidth, this.frameHeight, this.cells);
                            null === (e = this.context) || void 0 === e || e.putImageData(n, s, a, 0, 0, o, u)
                        }
                    }
                    constructor(t, e, r, n) {
                        let [i, s, a] = function(t, e, r) {
                            let n = Math.ceil(Math.sqrt(r));
                            return [n, n * t, n * e]
                        }(r, n, t.frames);
                        if (this.key = e, this.canvas = function(t, e) {
                                if ("function" == typeof OffscreenCanvas) return new OffscreenCanvas(t, e);
                                let r = document.createElement("canvas");
                                return r.width = t, r.height = e, r
                            }(s, a), this.context = this.canvas.getContext("2d"), this.cells = i, this.native = t, this.renderedFrames = new Set, this.frameWidth = r, this.frameHeight = n, this.frameRate = t.fps, this.frameCount = t.frames, null == this.context) throw Error("couldn't create 2d canvas context.")
                    }
                };

                function i(t, e, r, n) {
                    return [Math.floor(t / n) * e, t % n * r, e, r]
                }
            },
            429281: function(t, e, r) {
                "use strict";
                r.r(e), r.d(e, {
                    default: function() {
                        return a
                    }
                }), r("222007"), r("424973"), r("70102");
                var n = r("349807"),
                    i = r("244639");
                async function s(t, e, r, s, a) {
                    let o = a;
                    if (null == o) {
                        let t = await fetch(s);
                        if (!t.ok) throw Error("Error fetching sticker at ".concat(s));
                        o = await t.text()
                    }
                    if (null == o) return null;
                    await (0, i.initialize)();
                    let u = new i.default(o);
                    return new n.default(u, t, e, r)
                }
                var a = new class t {
                    create(t, e, r, n, i) {
                        let a = !(arguments.length > 5) || void 0 === arguments[5] || arguments[5];
                        return this.getCached(t).then(o => {
                            var u;
                            if (this.referenceCounts.set(t, (null !== (u = this.referenceCounts.get(t)) && void 0 !== u ? u : 0) + 1), o) return o;
                            let c = {
                                key: t,
                                promise: s(t, e, r, n, i)
                            };
                            return a && (this.entries.push(c), c.promise.then(e => (null == e && this.removeEntry(t), e)).catch(e => this.removeEntry(t)), this.entries.length > 50 && this.removeEntryAt(0)), c.promise
                        })
                    }
                    drop(t) {
                        this.removeEntry(t)
                    }
                    getCached(t) {
                        let e = this.entries.findIndex(e => e.key === t);
                        if (e >= 0) {
                            let t = this.entries[e];
                            return this.entries.splice(e, 1), this.entries.push(t), t.promise.then(t => (null == t && this.removeEntryAt(e), t))
                        }
                        return Promise.resolve(null)
                    }
                    removeEntry(t) {
                        let e = this.entries.findIndex(e => e.key === t);
                        if (!(e >= 0)) return null;
                        this.removeEntryAt(e)
                    }
                    removeEntryAt(t) {
                        let e = this.entries[t],
                            r = this.referenceCounts.get(e.key);
                        return null != r && r > 1 ? (this.referenceCounts.set(e.key, r - 1), null) : (this.entries.splice(t, 1), this.referenceCounts.delete(e.key), e.promise.then(t => null == t ? void 0 : t.drop()), e)
                    }
                    constructor() {
                        this.entries = [], this.referenceCounts = new Map
                    }
                }
            },
            632760: function(t, e, r) {
                "use strict";
                r.r(e), r("222007"), r("854508");
                var n = r("62981"),
                    i = r("551750");
                let s = new Map,
                    a = t => {
                        let {
                            canvas: e,
                            canvasId: r,
                            animationId: a,
                            assetUrl: o,
                            assetData: u,
                            isVisible: c,
                            shouldAnimate: l
                        } = t, h = new n.default({
                            canvas: e,
                            id: a,
                            assetUrl: o,
                            assetData: u,
                            isVisible: c,
                            shouldAnimate: l,
                            onInitialDraw: () => {
                                self.postMessage({
                                    type: i.MessageTypes.FIRST_DRAW,
                                    canvasId: r
                                })
                            },
                            onError: () => {
                                self.postMessage({
                                    type: i.MessageTypes.ERROR,
                                    canvasId: r
                                })
                            }
                        });
                        s.set(r, h)
                    },
                    o = t => {
                        var e;
                        let {
                            canvasId: r
                        } = t;
                        null === (e = s.get(r)) || void 0 === e || e.drop(), s.delete(r)
                    },
                    u = t => {
                        var e;
                        let {
                            canvasId: r,
                            isVisible: n
                        } = t;
                        null === (e = s.get(r)) || void 0 === e || e.setVisibility(n)
                    },
                    c = t => {
                        var e;
                        let {
                            canvasId: r,
                            shouldAnimate: n,
                            nextFrame: i
                        } = t;
                        null === (e = s.get(r)) || void 0 === e || e.setState(n, i)
                    };
                self.addEventListener("message", t => {
                    let {
                        data: e
                    } = t;
                    switch (e.type) {
                        case i.MessageTypes.INITIALIZE:
                            a(e);
                            break;
                        case i.MessageTypes.DROP:
                            o(e);
                            break;
                        case i.MessageTypes.VISIBILITY_CHANGE:
                            u(e);
                            break;
                        case i.MessageTypes.STATE_CHANGE:
                            c(e)
                    }
                })
            },
            551750: function(t, e, r) {
                "use strict";
                var n, i;
                r.r(e), r.d(e, {
                    MessageTypes: function() {
                        return n
                    }
                }), (i = n || (n = {}))[i.DROP = 0] = "DROP", i[i.INITIALIZE = 1] = "INITIALIZE", i[i.VISIBILITY_CHANGE = 2] = "VISIBILITY_CHANGE", i[i.STATE_CHANGE = 3] = "STATE_CHANGE", i[i.FIRST_DRAW = 4] = "FIRST_DRAW", i[i.ERROR = 5] = "ERROR"
            },
            244639: function(t, e, r) {
                "use strict";
                let n, i, s, a, o, u, c, l, h;
                r.r(e), r.d(e, {
                    initialize: function() {
                        return g
                    },
                    default: function() {
                        return f
                    }
                }), r("332822"), r("477657"), r("811875"), r("90301"), r("652153"), r("28797"), r("817884"), r("597349"), r("667536"), r("690341"), r("70102");
                var f, d = r("627445"),
                    m = r.n(d),
                    p = r("739942");
                let v = 409600,
                    g = (0, p.createQueuedAsyncInitializer)(async () => {
                        let t = await r.el("227332").then(r.bind(r, "227332")),
                            e = await t.default();
                        s = e.cwrap("lottie_create", "number", ["string"]), a = e._lottie_destroy, o = e._lottie_draw_into_bgra, u = e._lottie_draw_into_rgba, c = e._lottie_frame_count, l = e._lottie_frame_rate, h = e._memory_create, n = e, i = h(v)
                    });

                function y(t, e) {
                    return new Uint8ClampedArray(n.HEAPU8.buffer, i, t * e * 4)
                }
                f = class {
                    get fps() {
                        return l(this.native)
                    }
                    get frames() {
                        return c(this.native)
                    }
                    get_bgra(t, e, r) {
                        return m(e <= 320, "width exceeds static allocation."), m(r <= 320, "height exceeds static allocation."), o(this.native, i, t, e, r), y(e, r)
                    }
                    get_rgba(t, e, r) {
                        return m(e <= 320, "width exceeds static allocation."), m(r <= 320, "height exceeds static allocation."), u(this.native, i, t, e, r), y(e, r)
                    }
                    drop() {
                        a(this.native)
                    }
                    constructor(t) {
                        if (this.native = s(t), 0 === this.native) throw Error("couldn't create wasm lottie. potentially bad json.")
                    }
                }
            },
            739942: function(t, e, r) {
                "use strict";
                var n, i;

                function s(t) {
                    let e = 0,
                        r = [];
                    return async function() {
                        if (2 !== e) {
                            if (1 === e) return new Promise(t => {
                                r.push(t)
                            });
                            for (e = 1, await t(), e = 2; r.length > 0;) {
                                var n;
                                null === (n = r.shift()) || void 0 === n || n()
                            }
                        }
                    }
                }
                r.r(e), r.d(e, {
                    createQueuedAsyncInitializer: function() {
                        return s
                    }
                }), r("424973"), (i = n || (n = {}))[i.UNINITIALIZED = 0] = "UNINITIALIZED", i[i.INITIALIZING = 1] = "INITIALIZING", i[i.READY = 2] = "READY"
            }
        },
        i = {};

    function s(t) {
        var e = i[t];
        if (void 0 !== e) return e.exports;
        var r = i[t] = {
            exports: {}
        };
        return n[t](r, r.exports, s), r.exports
    }
    s.m = n, s.x = function() {
        var t = s.O(void 0, ["58409", "3341", "22843", "18731"], function() {
            return s("632760")
        });
        return t = s.O(t)
    }, t = s.x, s.x = function() {
        return Promise.all(["18731", "22843", "3341", "58409"].map(s.e, s)).then(t)
    }, e = {
        224915: ["58409", "3341"],
        225629: ["22843"],
        227332: ["40912"],
        380029: ["58409", "3341", "22843", "18731"],
        62981: ["18731"],
        632760: ["58409", "3341", "22843", "18731", "44839"],
        748375: ["58409", "3341"],
        783260: ["58409"]
    }, s.el = function(t) {
        var r = e[t];
        return void 0 === r ? Promise.resolve() : r.length > 1 ? Promise.all(r.map(s.e)) : s.e(r[0])
    }, s.f = {}, s.e = function(t) {
        return Promise.all(Object.keys(s.f).reduce(function(e, r) {
            return s.f[r](t, e), e
        }, []))
    }, s.p = "/assets/", s.u = function(t) {
        return ({
            18731: "18731.c253595d0af78dbf8b86.js",
            22843: "22843.1bda3edd4dd152273661.js",
            3341: "3341.1a1f8595a0c8fc9f99cf.js",
            40912: "84971a3d6c47b0e0972c.js",
            58409: "58409.1811376ebb7f14b0be53.js"
        })[t]
    }, s.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, r = [], s.O = function(t, e, n, i) {
        if (e) {
            i = i || 0;
            for (var a = r.length; a > 0 && r[a - 1][2] > i; a--) r[a] = r[a - 1];
            r[a] = [e, n, i];
            return
        }
        for (var o = 1 / 0, a = 0; a < r.length; a++) {
            for (var e = r[a][0], n = r[a][1], i = r[a][2], u = !0, c = 0; c < e.length; c++) o >= i && Object.keys(s.O).every(function(t) {
                return s.O[t](e[c])
            }) ? e.splice(c--, 1) : (u = !1, i < o && (o = i));
            if (u) {
                r.splice(a--, 1);
                var l = n();
                void 0 !== l && (t = l)
            }
        }
        return t
    }, s.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || Function("return this")()
        } catch (t) {
            if ("object" == typeof window) return window
        }
    }(), s.d = function(t, e) {
        for (var r in e) s.o(e, r) && !s.o(t, r) && Object.defineProperty(t, r, {
            enumerable: !0,
            get: e[r]
        })
    }, s.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, s.n = function(t) {
        return t && t.__esModule ? t.default : t
    }, ! function() {
        var t = {
            44839: 1
        };
        s.f.i = function(e, r) {
            !t[e] && importScripts(s.p + s.u(e))
        };
        var e = this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || [],
            r = e.push.bind(e);
        e.push = function(e) {
            var n = e[0],
                i = e[1],
                a = e[2];
            for (var o in i) s.o(i, o) && (s.m[o] = i[o]);
            for (a && a(s); n.length;) t[n.pop()] = 1;
            r(e)
        }
    }(), s.x()
}();