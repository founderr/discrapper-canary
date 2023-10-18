"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [20554], {
        20554: (e, n, t) => {
            t.r(n);
            t.d(n, {
                default: () => m
            });
            var r, i = t(228721);
            ! function(e) {
                e[e.DROP = 0] = "DROP";
                e[e.INITIALIZE = 1] = "INITIALIZE";
                e[e.VISIBILITY_CHANGE = 2] = "VISIBILITY_CHANGE";
                e[e.STATE_CHANGE = 3] = "STATE_CHANGE";
                e[e.FIRST_DRAW = 4] = "FIRST_DRAW";
                e[e.ERROR = 5] = "ERROR"
            }(r || (r = {}));
            var a = t(341526);

            function o(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function s(e, n, t, r, i, a, o) {
                try {
                    var s = e[a](o),
                        l = s.value
                } catch (e) {
                    t(e);
                    return
                }
                s.done ? n(l) : Promise.resolve(l).then(r, i)
            }

            function l(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var a = e.apply(n, t);

                        function o(e) {
                            s(a, r, i, o, l, "next", e)
                        }

                        function l(e) {
                            s(a, r, i, o, l, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function u(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var r = n[t];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function c(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, a = [],
                            o = !0,
                            s = !1;
                        try {
                            for (t = t.call(e); !(o = (r = t.next()).done); o = !0) {
                                a.push(r.value);
                                if (n && a.length === n) break
                            }
                        } catch (e) {
                            s = !0;
                            i = e
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (s) throw i
                            }
                        }
                        return a
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return o(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return o(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var f, v = function(e, n) {
                    var t, r, i, a, o = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                            next: s(0),
                            throw: s(1),
                            return: s(2)
                        },
                        "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                            return this
                        }), a;

                    function s(a) {
                        return function(s) {
                            return function(a) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; o;) try {
                                    if (t = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
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
                                    a = n.call(e, o)
                                } catch (e) {
                                    a = [6, e];
                                    r = 0
                                } finally {
                                    t = i = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, s])
                        }
                    }
                },
                h = Math.min(4, Math.ceil(navigator.hardwareConcurrency / 2)),
                d = "undefined" != typeof OffscreenCanvas,
                I = [],
                p = new Map,
                b = new Map,
                y = (0, a.G)(l((function() {
                    var e, n;
                    return v(this, (function(r) {
                        for (e = 0; e < h; e++) {
                            n = new Worker(new URL(t.p + t.u(4782), t.b));
                            I.push({
                                worker: n,
                                numActive: 0
                            })
                        }
                        return [2]
                    }))
                }))),
                w = (0, a.G)(l((function() {
                    var e;
                    return v(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, Promise.all([t.e(24971), t.e(89157)]).then(t.bind(t, 289157))];
                            case 1:
                                e = n.sent();
                                f = e.default;
                                return [2]
                        }
                    }))
                })));
            d ? y() : w();
            var m = function() {
                function e(n) {
                    var t = n.canvas,
                        a = n.animationId,
                        o = n.assetUrl,
                        s = n.assetData,
                        l = n.onInitialDraw,
                        u = n.onError,
                        c = this;
                    ! function(e, n) {
                        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    this.isVisible = !1;
                    this.isInitialized = !1;
                    this.shouldAnimate = !1;
                    this.handleVisibilityChange = function(e) {
                        var n = e[e.length - 1].isIntersecting;
                        if (n !== c.isVisible) {
                            c.isVisible = n;
                            if (!c.isInitialized) return;
                            if (d) {
                                var t;
                                null === (t = c.worker) || void 0 === t || t.postMessage({
                                    canvasId: c.canvasId,
                                    type: r.VISIBILITY_CHANGE,
                                    isVisible: n
                                })
                            } else {
                                var i;
                                null === (i = c.lottieView) || void 0 === i || i.setVisibility(n)
                            }
                        }
                    };
                    this.handleMessage = function(e) {
                        if (e.data.type === r.FIRST_DRAW) {
                            var n, t;
                            null === (t = (n = c).onInitialDraw) || void 0 === t || t.call(n)
                        }
                        if (e.data.type === r.ERROR) {
                            var i, a;
                            null === (a = (i = c).onError) || void 0 === a || a.call(i)
                        }
                    };
                    this.handleError = function(e) {
                        var n, t;
                        null === (t = (n = c).onError) || void 0 === t || t.call(n, e)
                    };
                    this.canvasId = (0, i.Z)();
                    this.assetUrl = o;
                    this.assetData = s;
                    this.onInitialDraw = l;
                    this.onError = u;
                    this.observer = new IntersectionObserver(this.handleVisibilityChange);
                    this.observer.observe(t);
                    this.initializationPromise = d ? y().then((function() {
                        var e, n, i;
                        null === (e = c.worker) || void 0 === e || e.addEventListener("message", c.handleMessage);
                        null === (n = c.worker) || void 0 === n || n.addEventListener("error", c.handleError);
                        var l = t.transferControlToOffscreen();
                        null === (i = c.worker) || void 0 === i || i.postMessage({
                            type: r.INITIALIZE,
                            animationId: a,
                            assetUrl: o,
                            assetData: s,
                            canvas: l,
                            canvasId: c.canvasId,
                            isVisible: c.isVisible,
                            shouldAnimate: c.shouldAnimate
                        }, [l]);
                        c.isInitialized = !0
                    })) : w().then((function() {
                        c.lottieView = new f({
                            canvas: t,
                            id: a,
                            assetUrl: o,
                            assetData: s,
                            isVisible: c.isVisible,
                            shouldAnimate: c.shouldAnimate,
                            onInitialDraw: l,
                            onError: u
                        });
                        c.isInitialized = !0
                    }))
                }
                var n = e.prototype;
                n.drop = function() {
                    var e = this;
                    return l((function() {
                        var n, t, i, a, o;
                        return v(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    return [4, e.initializationPromise];
                                case 1:
                                    s.sent();
                                    if (d) {
                                        null === (n = e.worker) || void 0 === n || n.removeEventListener("message", e.handleMessage);
                                        null === (t = e.worker) || void 0 === t || t.removeEventListener("error", e.handleError);
                                        null === (i = e.worker) || void 0 === i || i.postMessage({
                                            canvasId: e.canvasId,
                                            type: r.DROP
                                        });
                                        if (null == (a = p.get(e.canvasId))) throw new Error("No worker index assigned for asset ".concat(e.canvasId));
                                        p.delete(e.canvasId);
                                        I[a].numActive--
                                    } else null === (o = e.lottieView) || void 0 === o || o.drop();
                                    e.observer.disconnect();
                                    return [2]
                            }
                        }))
                    }))()
                };
                n.setState = function(e, n) {
                    this.shouldAnimate = e;
                    if (this.isInitialized)
                        if (d) {
                            var t;
                            null === (t = this.worker) || void 0 === t || t.postMessage({
                                canvasId: this.canvasId,
                                type: r.STATE_CHANGE,
                                shouldAnimate: e,
                                nextFrame: n
                            })
                        } else {
                            var i;
                            null === (i = this.lottieView) || void 0 === i || i.setState(e, n)
                        }
                };
                ! function(e, n, t) {
                    n && u(e.prototype, n);
                    t && u(e, t)
                }(e, [{
                    key: "workerIndex",
                    get: function() {
                        var e = p.get(this.canvasId);
                        if (null == e) {
                            var n = b.get(this.assetUrl);
                            if (null != n) e = n;
                            else {
                                var t, r, i = null !== (r = null === (t = I[0]) || void 0 === t ? void 0 : t.numActive) && void 0 !== r ? r : 0,
                                    a = !0,
                                    o = !1,
                                    s = void 0;
                                try {
                                    for (var l, u = I.entries()[Symbol.iterator](); !(a = (l = u.next()).done); a = !0) {
                                        var f = c(l.value, 2),
                                            v = f[0],
                                            h = f[1];
                                        if (h.numActive <= i) {
                                            i = h.numActive;
                                            e = v
                                        }
                                    }
                                } catch (e) {
                                    o = !0;
                                    s = e
                                } finally {
                                    try {
                                        a || null == u.return || u.return()
                                    } finally {
                                        if (o) throw s
                                    }
                                }
                                b.set(this.assetUrl, e)
                            }
                            p.set(this.canvasId, e);
                            I[e].numActive++
                        }
                        return e
                    }
                }, {
                    key: "worker",
                    get: function() {
                        var e = this.workerIndex;
                        if (null == I[e]) throw new Error("No worker in pool at index ".concat(e));
                        return I[e].worker
                    }
                }]);
                return e
            }()
        },
        341526: (e, n, t) => {
            t.d(n, {
                G: () => o
            });

            function r(e, n, t, r, i, a, o) {
                try {
                    var s = e[a](o),
                        l = s.value
                } catch (e) {
                    t(e);
                    return
                }
                s.done ? n(l) : Promise.resolve(l).then(r, i)
            }
            var i, a = function(e, n) {
                var t, r, i, a, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
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
                                if (t = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
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
                                a = n.call(e, o)
                            } catch (e) {
                                a = [6, e];
                                r = 0
                            } finally {
                                t = i = 0
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
            }(i || (i = {}));

            function o(e) {
                var n, t, o = i.UNINITIALIZED,
                    s = [];
                return t = (n = function() {
                        return a(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    if (o === i.READY) return [2];
                                    if (o === i.INITIALIZING) return [2, new Promise((function(e) {
                                        s.push(e)
                                    }))];
                                    o = i.INITIALIZING;
                                    return [4, e()];
                                case 1:
                                    n.sent();
                                    o = i.READY;
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
                        return new Promise((function(i, a) {
                            var o = n.apply(e, t);

                            function s(e) {
                                r(o, i, a, s, l, "next", e)
                            }

                            function l(e) {
                                r(o, i, a, s, l, "throw", e)
                            }
                            s(void 0)
                        }))
                    }),
                    function() {
                        return t.apply(this, arguments)
                    }
            }
        }
    }
]);