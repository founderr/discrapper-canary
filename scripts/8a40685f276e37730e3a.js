(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["46116"], {
        332822: function(t, e, i) {
            "use strict";
            i("918437")("Uint8", function(t) {
                return function(e, i, n) {
                    return t(this, e, i, n)
                }
            }, !0)
        },
        854508: function(t, e, i) {
            "use strict";
            var n = i("859514"),
                r = i("503486"),
                a = i("18563"),
                s = i("814026"),
                h = TypeError,
                l = Object.defineProperty,
                o = r.self !== r;
            try {
                if (s) {
                    var c = Object.getOwnPropertyDescriptor(r, "self");
                    (o || !c || !c.get || !c.enumerable) && a(r, "self", {
                        get: function() {
                            return r
                        },
                        set: function(t) {
                            if (this !== r) throw h("Illegal invocation");
                            l(r, "self", {
                                value: t,
                                writable: !0,
                                configurable: !0,
                                enumerable: !0
                            })
                        },
                        configurable: !0,
                        enumerable: !0
                    })
                } else n({
                    global: !0,
                    simple: !0,
                    forced: o
                }, {
                    self: r
                })
            } catch (t) {}
        },
        62981: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return n
                }
            }), i("854508");
            var n, r = i("627445"),
                a = i.n(r),
                s = i("429281");
            let h = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope;
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
                    this.animate = !1, this.scheduleOrCancelTick(), s.default.drop(this.key), this.animation = null, this.dropped = !0
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
                    assetUrl: i,
                    assetData: n,
                    isVisible: r,
                    shouldAnimate: l,
                    onInitialDraw: o,
                    onError: c
                }) {
                    this.animation = null, this.onInitialAnimationTick = t => {
                        this.requestAnimationFrameId = null;
                        let e = performance.now();
                        if ((e - t < 30 || h) && this.draw(0)) {
                            var i;
                            this.resumeAnimation(), null === (i = this.onInitialDraw) || void 0 === i || i.call(this), this.hasInitialFrame = !0
                        }
                        this.scheduleOrCancelTick()
                    }, this.onAnimationTick = t => {
                        this.requestAnimationFrameId = null;
                        let e = performance.now(),
                            i = (h ? e : t) - this.currentFrameTime,
                            n = Math.floor(i / this.frameDuration);
                        n > 0 && ((e - t < 12 || h) && (this.draw(this.currentFrame), this.currentFrame += n), this.currentFrameTime += n * this.frameDuration), this.scheduleOrCancelTick()
                    };
                    let u = t.getContext("2d");
                    a(null != u, "couldn't get canvas 2d context."), this.canvas = t, this.canvasContext = u, this.animation = null, this.dropped = !1, this.currentFrame = 0, this.currentFrameTime = 0, this.frameDuration = 1e3, this.animate = l, this.visible = r, this.requestAnimationFrameId = null, this.hasInitialFrame = !1, this.onInitialDraw = o, this.onError = c, this.key = "".concat(e, ":").concat(t.width, ":").concat(t.height), s.default.create(this.key, t.width, t.height, i, n).then(t => {
                        null != t && (this.dropped ? s.default.drop(this.key) : (this.animation = t, this.frameDuration = 1e3 / t.frameRate, this.scheduleOrCancelTick()))
                    }).catch(t => {
                        null == c || c()
                    })
                }
            }
        },
        349807: function(t, e, i) {
            "use strict";
            var n;
            i.r(e), i.d(e, {
                default: function() {
                    return n
                }
            }), i("222007"), i("70102");
            n = class {
                drawInto(t, e, i, n) {
                    e %= this.frameCount, this.requireFrame(e);
                    let [a, s, h, l] = r(e, this.frameWidth, this.frameHeight, this.cells);
                    t.drawImage(this.canvas, a, s, h, l, 0, 0, i, n)
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
                        let i = this.native.get_bgra(t, this.frameWidth, this.frameHeight),
                            n = new ImageData(i, this.frameWidth, this.frameHeight),
                            [a, s, h, l] = r(t, this.frameWidth, this.frameHeight, this.cells);
                        null === (e = this.context) || void 0 === e || e.putImageData(n, a, s, 0, 0, h, l)
                    }
                }
                constructor(t, e, i, n) {
                    let [r, a, s] = function(t, e, i) {
                        let n = Math.ceil(Math.sqrt(i));
                        return [n, n * t, n * e]
                    }(i, n, t.frames);
                    if (this.key = e, this.canvas = function(t, e) {
                            if ("function" == typeof OffscreenCanvas) return new OffscreenCanvas(t, e);
                            let i = document.createElement("canvas");
                            return i.width = t, i.height = e, i
                        }(a, s), this.context = this.canvas.getContext("2d"), this.cells = r, this.native = t, this.renderedFrames = new Set, this.frameWidth = i, this.frameHeight = n, this.frameRate = t.fps, this.frameCount = t.frames, null == this.context) throw Error("couldn't create 2d canvas context.")
                }
            };

            function r(t, e, i, n) {
                return [Math.floor(t / n) * e, t % n * i, e, i]
            }
        },
        429281: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return s
                }
            }), i("222007"), i("424973"), i("70102");
            var n = i("349807"),
                r = i("244639");
            async function a(t, e, i, a, s) {
                let h = s;
                if (null == h) {
                    let t = await fetch(a);
                    if (!t.ok) throw Error("Error fetching sticker at ".concat(a));
                    h = await t.text()
                }
                if (null == h) return null;
                await (0, r.initialize)();
                let l = new r.default(h);
                return new n.default(l, t, e, i)
            }
            var s = new class t {
                create(t, e, i, n, r) {
                    let s = !(arguments.length > 5) || void 0 === arguments[5] || arguments[5];
                    return this.getCached(t).then(h => {
                        var l;
                        if (this.referenceCounts.set(t, (null !== (l = this.referenceCounts.get(t)) && void 0 !== l ? l : 0) + 1), h) return h;
                        let o = {
                            key: t,
                            promise: a(t, e, i, n, r)
                        };
                        return s && (this.entries.push(o), o.promise.then(e => (null == e && this.removeEntry(t), e)).catch(e => this.removeEntry(t)), this.entries.length > 50 && this.removeEntryAt(0)), o.promise
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
                        i = this.referenceCounts.get(e.key);
                    return null != i && i > 1 ? (this.referenceCounts.set(e.key, i - 1), null) : (this.entries.splice(t, 1), this.referenceCounts.delete(e.key), e.promise.then(t => null == t ? void 0 : t.drop()), e)
                }
                constructor() {
                    this.entries = [], this.referenceCounts = new Map
                }
            }
        },
        244639: function(t, e, i) {
            "use strict";
            let n, r, a, s, h, l, o, c, u;
            i.r(e), i.d(e, {
                initialize: function() {
                    return w
                },
                default: function() {
                    return m
                }
            }), i("332822"), i("477657"), i("811875"), i("90301"), i("652153"), i("28797"), i("817884"), i("597349"), i("667536"), i("690341"), i("70102");
            var m, d = i("627445"),
                f = i.n(d),
                v = i("739942");
            let p = 409600,
                w = (0, v.createQueuedAsyncInitializer)(async () => {
                    let t = await i.el("227332").then(i.bind(i, "227332")),
                        e = await t.default();
                    a = e.cwrap("lottie_create", "number", ["string"]), s = e._lottie_destroy, h = e._lottie_draw_into_bgra, l = e._lottie_draw_into_rgba, o = e._lottie_frame_count, c = e._lottie_frame_rate, u = e._memory_create, n = e, r = u(p)
                });

            function g(t, e) {
                return new Uint8ClampedArray(n.HEAPU8.buffer, r, t * e * 4)
            }
            m = class {
                get fps() {
                    return c(this.native)
                }
                get frames() {
                    return o(this.native)
                }
                get_bgra(t, e, i) {
                    return f(e <= 320, "width exceeds static allocation."), f(i <= 320, "height exceeds static allocation."), h(this.native, r, t, e, i), g(e, i)
                }
                get_rgba(t, e, i) {
                    return f(e <= 320, "width exceeds static allocation."), f(i <= 320, "height exceeds static allocation."), l(this.native, r, t, e, i), g(e, i)
                }
                drop() {
                    s(this.native)
                }
                constructor(t) {
                    if (this.native = a(t), 0 === this.native) throw Error("couldn't create wasm lottie. potentially bad json.")
                }
            }
        }
    }
]);