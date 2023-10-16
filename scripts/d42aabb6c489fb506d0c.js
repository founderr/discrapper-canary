(() => {
    "use strict";
    var e, n, t = {
            441143: e => {
                e.exports = function(e, n, t, i, r, a, o, s) {
                    0;
                    if (!e) {
                        var l;
                        if (void 0 === n) l = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                        else {
                            var u = [t, i, r, a, o, s],
                                c = 0;
                            (l = new Error(n.replace(/%s/g, (function() {
                                return u[c++]
                            })))).name = "Invariant Violation"
                        }
                        l.framesToPop = 1;
                        throw l
                    }
                }
            },
            290657: (e, n, t) => {
                var i = t(441143),
                    r = t.n(i),
                    a = t(624971);
                var o, s = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope,
                    l = function() {
                        function e(n) {
                            var t = n.canvas,
                                i = n.id,
                                o = n.assetUrl,
                                l = n.assetData,
                                u = n.isVisible,
                                c = n.shouldAnimate,
                                h = n.onInitialDraw,
                                f = n.onError,
                                d = this;
                            ! function(e, n) {
                                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
                            }(this, e);
                            this.animation = null;
                            this.onInitialAnimationTick = function(e) {
                                d.requestAnimationFrameId = null;
                                if ((performance.now() - e < 30 || s) && d.draw(0)) {
                                    var n, t;
                                    d.resumeAnimation();
                                    null === (t = (n = d).onInitialDraw) || void 0 === t || t.call(n);
                                    d.hasInitialFrame = !0
                                }
                                d.scheduleOrCancelTick()
                            };
                            this.onAnimationTick = function(e) {
                                d.requestAnimationFrameId = null;
                                var n = performance.now(),
                                    t = (s ? n : e) - d.currentFrameTime,
                                    i = Math.floor(t / d.frameDuration);
                                if (i > 0) {
                                    if (n - e < 12 || s) {
                                        d.draw(d.currentFrame);
                                        d.currentFrame += i
                                    }
                                    d.currentFrameTime += i * d.frameDuration
                                }
                                d.scheduleOrCancelTick()
                            };
                            var m = t.getContext("2d");
                            r()(null != m, "couldn't get canvas 2d context.");
                            this.canvas = t;
                            this.canvasContext = m;
                            this.animation = null;
                            this.dropped = !1;
                            this.currentFrame = 0;
                            this.currentFrameTime = 0;
                            this.frameDuration = 1e3;
                            this.animate = c;
                            this.visible = u;
                            this.requestAnimationFrameId = null;
                            this.hasInitialFrame = !1;
                            this.onInitialDraw = h;
                            this.onError = f;
                            this.key = "".concat(i, ":").concat(t.width, ":").concat(t.height);
                            a.Z.create(this.key, t.width, t.height, o, l).then((function(e) {
                                if (null != e)
                                    if (d.dropped) a.Z.drop(d.key);
                                    else {
                                        d.animation = e;
                                        d.frameDuration = 1e3 / e.frameRate;
                                        d.scheduleOrCancelTick()
                                    }
                            })).catch((function(e) {
                                null == f || f()
                            }))
                        }
                        var n = e.prototype;
                        n.setState = function(e, n) {
                            if (null != n) {
                                e || n === this.currentFrame || this.draw(n);
                                this.currentFrame = n
                            }
                            e && !this.animate && this.resumeAnimation();
                            this.animate = e;
                            this.scheduleOrCancelTick()
                        };
                        n.setVisibility = function(e) {
                            var n = this.visible;
                            this.visible = e;
                            this.visible && !n && this.resumeAnimation();
                            this.scheduleOrCancelTick()
                        };
                        n.resumeAnimation = function() {
                            this.currentFrameTime = performance.now()
                        };
                        n.clear = function() {
                            this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height)
                        };
                        n.draw = function(e) {
                            if (null != this.animation) {
                                this.clear();
                                this.animation.drawInto(this.canvasContext, e, this.canvas.width, this.canvas.height);
                                return !0
                            }
                            return !1
                        };
                        n.drop = function() {
                            this.animate = !1;
                            this.scheduleOrCancelTick();
                            a.Z.drop(this.key);
                            this.animation = null;
                            this.dropped = !0
                        };
                        n.scheduleOrCancelTick = function() {
                            this.dropped || (this.hasInitialFrame ? this.requestAnimationFrame(this.animate && this.visible ? this.onAnimationTick : null) : this.requestAnimationFrame(this.onInitialAnimationTick))
                        };
                        n.requestAnimationFrame = function(e) {
                            null != e && null == this.requestAnimationFrameId && (this.requestAnimationFrameId = requestAnimationFrame(e));
                            if (null != e && null != this.requestAnimationFrameId) {
                                cancelAnimationFrame(this.requestAnimationFrameId);
                                this.requestAnimationFrameId = requestAnimationFrame(e)
                            }
                            if (null == e && null != this.requestAnimationFrameId) {
                                cancelAnimationFrame(this.requestAnimationFrameId);
                                this.requestAnimationFrameId = null
                            }
                        };
                        return e
                    }();
                ! function(e) {
                    e[e.DROP = 0] = "DROP";
                    e[e.INITIALIZE = 1] = "INITIALIZE";
                    e[e.VISIBILITY_CHANGE = 2] = "VISIBILITY_CHANGE";
                    e[e.STATE_CHANGE = 3] = "STATE_CHANGE";
                    e[e.FIRST_DRAW = 4] = "FIRST_DRAW";
                    e[e.ERROR = 5] = "ERROR"
                }(o || (o = {}));
                var u = new Map;
                self.addEventListener("message", (function(e) {
                    var n = e.data;
                    switch (n.type) {
                        case o.INITIALIZE:
                            ! function(e) {
                                var n = e.canvas,
                                    t = e.canvasId,
                                    i = e.animationId,
                                    r = e.assetUrl,
                                    a = e.assetData,
                                    s = e.isVisible,
                                    c = e.shouldAnimate,
                                    h = new l({
                                        canvas: n,
                                        id: i,
                                        assetUrl: r,
                                        assetData: a,
                                        isVisible: s,
                                        shouldAnimate: c,
                                        onInitialDraw: function() {
                                            self.postMessage({
                                                type: o.FIRST_DRAW,
                                                canvasId: t
                                            })
                                        },
                                        onError: function() {
                                            self.postMessage({
                                                type: o.ERROR,
                                                canvasId: t
                                            })
                                        }
                                    });
                                u.set(t, h)
                            }(n);
                            break;
                        case o.DROP:
                            ! function(e) {
                                var n, t = e.canvasId;
                                null === (n = u.get(t)) || void 0 === n || n.drop();
                                u.delete(t)
                            }(n);
                            break;
                        case o.VISIBILITY_CHANGE:
                            ! function(e) {
                                var n, t = e.canvasId,
                                    i = e.isVisible;
                                null === (n = u.get(t)) || void 0 === n || n.setVisibility(i)
                            }(n);
                            break;
                        case o.STATE_CHANGE:
                            ! function(e) {
                                var n, t = e.canvasId,
                                    i = e.shouldAnimate,
                                    r = e.nextFrame;
                                null === (n = u.get(t)) || void 0 === n || n.setState(i, r)
                            }(n)
                    }
                }))
            },
            341526: (e, n, t) => {
                t.d(n, {
                    G: () => o
                });

                function i(e, n, t, i, r, a, o) {
                    try {
                        var s = e[a](o),
                            l = s.value
                    } catch (e) {
                        t(e);
                        return
                    }
                    s.done ? n(l) : Promise.resolve(l).then(i, r)
                }
                var r, a = function(e, n) {
                    var t, i, r, a, o = {
                        label: 0,
                        sent: function() {
                            if (1 & r[0]) throw r[1];
                            return r[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function s(a) {
                        return function(s) {
                            return function(a) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; o;) try {
                                    if (t = 1,
                                        i && (r = 2 & a[0] ? i.return : a[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, a[1])).done) return r;
                                    (i = 0, r) && (a = [2 & a[0], r.value]);
                                    switch (a[0]) {
                                        case 0:
                                        case 1:
                                            r = a;
                                            break;
                                        case 4:
                                            o.label++;
                                            return {
                                                value: a[1], done: !1
                                            };
                                        case 5:
                                            o.label++;
                                            i = a[1];
                                            a = [0];
                                            continue;
                                        case 7:
                                            a = o.ops.pop();
                                            o.trys.pop();
                                            continue;
                                        default:
                                            if (!(r = o.trys, r = r.length > 0 && r[r.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                o = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!r || a[1] > r[0] && a[1] < r[3])) {
                                                o.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && o.label < r[1]) {
                                                o.label = r[1];
                                                r = a;
                                                break
                                            }
                                            if (r && o.label < r[2]) {
                                                o.label = r[2];
                                                o.ops.push(a);
                                                break
                                            }
                                            r[2] && o.ops.pop();
                                            o.trys.pop();
                                            continue
                                    }
                                    a = n.call(e, o)
                                } catch (e) {
                                    a = [6, e];
                                    i = 0
                                } finally {
                                    t = r = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, s])
                        }
                    }
                };
                ! function(e) {
                    e[e.UNINITIALIZED = 0] = "UNINITIALIZED";
                    e[e.INITIALIZING = 1] = "INITIALIZING";
                    e[e.READY = 2] = "READY"
                }(r || (r = {}));

                function o(e) {
                    var n, t, o = r.UNINITIALIZED,
                        s = [];
                    return t = (n = function() {
                            return a(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (o === r.READY) return [2];
                                        if (o === r.INITIALIZING) return [2, new Promise((function(e) {
                                            s.push(e)
                                        }))];
                                        o = r.INITIALIZING;
                                        return [4, e()];
                                    case 1:
                                        n.sent();
                                        o = r.READY;
                                        for (; s.length > 0;) {
                                            var t;
                                            null === (t = s.shift()) || void 0 === t || t()
                                        }
                                        return [2]
                                }
                            }))
                        }, function() {
                            var e = this,
                                t = arguments;
                            return new Promise((function(r, a) {
                                var o = n.apply(e, t);

                                function s(e) {
                                    i(o, r, a, s, l, "next", e)
                                }

                                function l(e) {
                                    i(o, r, a, s, l, "throw", e)
                                }
                                s(void 0)
                            }))
                        }),
                        function() {
                            return t.apply(this, arguments)
                        }
                }
            }
        },
        i = {};

    function r(e) {
        var n = i[e];
        if (void 0 !== n) return n.exports;
        var a = i[e] = {
            exports: {}
        };
        t[e](a, a.exports, r);
        return a.exports
    }
    r.m = t;
    r.x = () => {
        var e = r.O(void 0, [24971], (() => r(290657)));
        return e = r.O(e)
    };
    e = [], r.O = (n, t, i, a) => {
        if (!t) {
            var o = 1 / 0;
            for (c = 0; c < e.length; c++) {
                for (var [t, i, a] = e[c], s = !0, l = 0; l < t.length; l++)
                    if ((!1 & a || o >= a) && Object.keys(r.O).every((e => r.O[e](t[l])))) t.splice(l--, 1);
                    else {
                        s = !1;
                        a < o && (o = a)
                    } if (s) {
                    e.splice(c--, 1);
                    var u = i();
                    void 0 !== u && (n = u)
                }
            }
            return n
        }
        a = a || 0;
        for (var c = e.length; c > 0 && e[c - 1][2] > a; c--) e[c] = e[c - 1];
        e[c] = [t, i, a]
    };
    r.n = e => {
        var n = e && e.__esModule ? () => e.default : () => e;
        r.d(n, {
            a: n
        });
        return n
    };
    r.d = (e, n) => {
        for (var t in n) r.o(n, t) && !r.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: n[t]
        })
    };
    (() => {
        r.f = {};
        r.e = e => Promise.all(Object.keys(r.f).reduce(((n, t) => {
            r.f[t](e, n);
            return n
        }), []))
    })();
    r.u = e => ({
        21819: "4dd3010dd911c6fd05d8",
        24971: "74fd042ce9911b251976"
    } [e] + ".js");
    r.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n);
    r.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    };
    r.p = "/assets/";
    (() => {
        var e = {
            4782: 1
        };
        r.f.i = (n, t) => {
            e[n] || importScripts(r.p + r.u(n))
        };
        var n = this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || [],
            t = n.push.bind(n);
        n.push = n => {
            var [i, a, o] = n;
            for (var s in a) r.o(a, s) && (r.m[s] = a[s]);
            o && o(r);
            for (; i.length;) e[i.pop()] = 1;
            t(n)
        }
    })();
    n = r.x, r.x = () => r.e(24971).then(n);
    r.x()
})();