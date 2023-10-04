"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [89157], {
        289157: (i, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => o
            });
            var e = n(441143),
                a = n.n(e),
                r = n(624971);
            var s = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope,
                o = function() {
                    function i(t) {
                        var n = t.canvas,
                            e = t.id,
                            o = t.assetUrl,
                            h = t.assetData,
                            c = t.isVisible,
                            l = t.shouldAnimate,
                            u = t.onInitialDraw,
                            m = t.onError,
                            d = this;
                        ! function(i, t) {
                            if (!(i instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, i);
                        this.animation = null;
                        this.onInitialAnimationTick = function(i) {
                            d.requestAnimationFrameId = null;
                            if ((performance.now() - i < 30 || s) && d.draw(0)) {
                                var t, n;
                                d.resumeAnimation();
                                null === (n = (t = d).onInitialDraw) || void 0 === n || n.call(t);
                                d.hasInitialFrame = !0
                            }
                            d.scheduleOrCancelTick()
                        };
                        this.onAnimationTick = function(i) {
                            d.requestAnimationFrameId = null;
                            var t = performance.now(),
                                n = (s ? t : i) - d.currentFrameTime,
                                e = Math.floor(n / d.frameDuration);
                            if (e > 0) {
                                if (t - i < 12 || s) {
                                    d.draw(d.currentFrame);
                                    d.currentFrame += e
                                }
                                d.currentFrameTime += e * d.frameDuration
                            }
                            d.scheduleOrCancelTick()
                        };
                        var f = n.getContext("2d");
                        a()(null != f, "couldn't get canvas 2d context.");
                        this.canvas = n;
                        this.canvasContext = f;
                        this.animation = null;
                        this.dropped = !1;
                        this.currentFrame = 0;
                        this.currentFrameTime = 0;
                        this.frameDuration = 1e3;
                        this.animate = l;
                        this.visible = c;
                        this.requestAnimationFrameId = null;
                        this.hasInitialFrame = !1;
                        this.onInitialDraw = u;
                        this.onError = m;
                        this.key = "".concat(e, ":").concat(n.width, ":").concat(n.height);
                        r.Z.create(this.key, n.width, n.height, o, h).then((function(i) {
                            if (null != i)
                                if (d.dropped) r.Z.drop(d.key);
                                else {
                                    d.animation = i;
                                    d.frameDuration = 1e3 / i.frameRate;
                                    d.scheduleOrCancelTick()
                                }
                        })).catch((function(i) {
                            null == m || m()
                        }))
                    }
                    var t = i.prototype;
                    t.setState = function(i, t) {
                        if (null != t) {
                            i || t === this.currentFrame || this.draw(t);
                            this.currentFrame = t
                        }
                        i && !this.animate && this.resumeAnimation();
                        this.animate = i;
                        this.scheduleOrCancelTick()
                    };
                    t.setVisibility = function(i) {
                        var t = this.visible;
                        this.visible = i;
                        this.visible && !t && this.resumeAnimation();
                        this.scheduleOrCancelTick()
                    };
                    t.resumeAnimation = function() {
                        this.currentFrameTime = performance.now()
                    };
                    t.clear = function() {
                        this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height)
                    };
                    t.draw = function(i) {
                        if (null != this.animation) {
                            this.clear();
                            this.animation.drawInto(this.canvasContext, i, this.canvas.width, this.canvas.height);
                            return !0
                        }
                        return !1
                    };
                    t.drop = function() {
                        this.animate = !1;
                        this.scheduleOrCancelTick();
                        r.Z.drop(this.key);
                        this.animation = null;
                        this.dropped = !0
                    };
                    t.scheduleOrCancelTick = function() {
                        this.dropped || (this.hasInitialFrame ? this.requestAnimationFrame(this.animate && this.visible ? this.onAnimationTick : null) : this.requestAnimationFrame(this.onInitialAnimationTick))
                    };
                    t.requestAnimationFrame = function(i) {
                        null != i && null == this.requestAnimationFrameId && (this.requestAnimationFrameId = requestAnimationFrame(i));
                        if (null != i && null != this.requestAnimationFrameId) {
                            cancelAnimationFrame(this.requestAnimationFrameId);
                            this.requestAnimationFrameId = requestAnimationFrame(i)
                        }
                        if (null == i && null != this.requestAnimationFrameId) {
                            cancelAnimationFrame(this.requestAnimationFrameId);
                            this.requestAnimationFrameId = null
                        }
                    };
                    return i
                }()
        }
    }
]);