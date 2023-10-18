(() => {
    var t, e, r, n, o = {
            535666: t => {
                ! function(e) {
                    "use strict";
                    var r, n = Object.prototype,
                        o = n.hasOwnProperty,
                        i = "function" == typeof Symbol ? Symbol : {},
                        a = i.iterator || "@@iterator",
                        c = i.asyncIterator || "@@asyncIterator",
                        u = i.toStringTag || "@@toStringTag",
                        s = e.regeneratorRuntime;
                    if (s) t.exports = s;
                    else {
                        (s = e.regeneratorRuntime = t.exports).wrap = _;
                        var f = "suspendedStart",
                            l = "suspendedYield",
                            h = "executing",
                            p = "completed",
                            y = {},
                            O = {};
                        O[a] = function() {
                            return this
                        };
                        var d = Object.getPrototypeOf,
                            v = d && d(d(j([])));
                        v && v !== n && o.call(v, a) && (O = v);
                        var b = P.prototype = g.prototype = Object.create(O);
                        w.prototype = b.constructor = P;
                        P.constructor = w;
                        P[u] = w.displayName = "GeneratorFunction";
                        s.isGeneratorFunction = function(t) {
                            var e = "function" == typeof t && t.constructor;
                            return !!e && (e === w || "GeneratorFunction" === (e.displayName || e.name))
                        };
                        s.mark = function(t) {
                            if (Object.setPrototypeOf) Object.setPrototypeOf(t, P);
                            else {
                                t.__proto__ = P;
                                u in t || (t[u] = "GeneratorFunction")
                            }
                            t.prototype = Object.create(b);
                            return t
                        };
                        s.awrap = function(t) {
                            return {
                                __await: t
                            }
                        };
                        E(T.prototype);
                        T.prototype[c] = function() {
                            return this
                        };
                        s.AsyncIterator = T;
                        s.async = function(t, e, r, n) {
                            var o = new T(_(t, e, r, n));
                            return s.isGeneratorFunction(e) ? o : o.next().then((function(t) {
                                return t.done ? t.value : o.next()
                            }))
                        };
                        E(b);
                        b[u] = "Generator";
                        b[a] = function() {
                            return this
                        };
                        b.toString = function() {
                            return "[object Generator]"
                        };
                        s.keys = function(t) {
                            var e = [];
                            for (var r in t) e.push(r);
                            e.reverse();
                            return function r() {
                                for (; e.length;) {
                                    var n = e.pop();
                                    if (n in t) {
                                        r.value = n;
                                        r.done = !1;
                                        return r
                                    }
                                }
                                r.done = !0;
                                return r
                            }
                        };
                        s.values = j;
                        R.prototype = {
                            constructor: R,
                            reset: function(t) {
                                this.prev = 0;
                                this.next = 0;
                                this.sent = this._sent = r;
                                this.done = !1;
                                this.delegate = null;
                                this.method = "next";
                                this.arg = r;
                                this.tryEntries.forEach(x);
                                if (!t)
                                    for (var e in this) "t" === e.charAt(0) && o.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = r)
                            },
                            stop: function() {
                                this.done = !0;
                                var t = this.tryEntries[0].completion;
                                if ("throw" === t.type) throw t.arg;
                                return this.rval
                            },
                            dispatchException: function(t) {
                                if (this.done) throw t;
                                var e = this;

                                function n(n, o) {
                                    c.type = "throw";
                                    c.arg = t;
                                    e.next = n;
                                    if (o) {
                                        e.method = "next";
                                        e.arg = r
                                    }
                                    return !!o
                                }
                                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                                    var a = this.tryEntries[i],
                                        c = a.completion;
                                    if ("root" === a.tryLoc) return n("end");
                                    if (a.tryLoc <= this.prev) {
                                        var u = o.call(a, "catchLoc"),
                                            s = o.call(a, "finallyLoc");
                                        if (u && s) {
                                            if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                            if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                        } else if (u) {
                                            if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                                        } else {
                                            if (!s) throw new Error("try statement without catch or finally");
                                            if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                        }
                                    }
                                }
                            },
                            abrupt: function(t, e) {
                                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                    var n = this.tryEntries[r];
                                    if (n.tryLoc <= this.prev && o.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                        var i = n;
                                        break
                                    }
                                }
                                i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                                var a = i ? i.completion : {};
                                a.type = t;
                                a.arg = e;
                                if (i) {
                                    this.method = "next";
                                    this.next = i.finallyLoc;
                                    return y
                                }
                                return this.complete(a)
                            },
                            complete: function(t, e) {
                                if ("throw" === t.type) throw t.arg;
                                if ("break" === t.type || "continue" === t.type) this.next = t.arg;
                                else if ("return" === t.type) {
                                    this.rval = this.arg = t.arg;
                                    this.method = "return";
                                    this.next = "end"
                                } else "normal" === t.type && e && (this.next = e);
                                return y
                            },
                            finish: function(t) {
                                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                    var r = this.tryEntries[e];
                                    if (r.finallyLoc === t) {
                                        this.complete(r.completion, r.afterLoc);
                                        x(r);
                                        return y
                                    }
                                }
                            },
                            catch: function(t) {
                                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                    var r = this.tryEntries[e];
                                    if (r.tryLoc === t) {
                                        var n = r.completion;
                                        if ("throw" === n.type) {
                                            var o = n.arg;
                                            x(r)
                                        }
                                        return o
                                    }
                                }
                                throw new Error("illegal catch attempt")
                            },
                            delegateYield: function(t, e, n) {
                                this.delegate = {
                                    iterator: j(t),
                                    resultName: e,
                                    nextLoc: n
                                };
                                "next" === this.method && (this.arg = r);
                                return y
                            }
                        }
                    }

                    function _(t, e, r, n) {
                        var o = e && e.prototype instanceof g ? e : g,
                            i = Object.create(o.prototype),
                            a = new R(n || []);
                        i._invoke = function(t, e, r) {
                            var n = f;
                            return function(o, i) {
                                if (n === h) throw new Error("Generator is already running");
                                if (n === p) {
                                    if ("throw" === o) throw i;
                                    return L()
                                }
                                r.method = o;
                                r.arg = i;
                                for (;;) {
                                    var a = r.delegate;
                                    if (a) {
                                        var c = N(a, r);
                                        if (c) {
                                            if (c === y) continue;
                                            return c
                                        }
                                    }
                                    if ("next" === r.method) r.sent = r._sent = r.arg;
                                    else if ("throw" === r.method) {
                                        if (n === f) {
                                            n = p;
                                            throw r.arg
                                        }
                                        r.dispatchException(r.arg)
                                    } else "return" === r.method && r.abrupt("return", r.arg);
                                    n = h;
                                    var u = m(t, e, r);
                                    if ("normal" === u.type) {
                                        n = r.done ? p : l;
                                        if (u.arg === y) continue;
                                        return {
                                            value: u.arg,
                                            done: r.done
                                        }
                                    }
                                    if ("throw" === u.type) {
                                        n = p;
                                        r.method = "throw";
                                        r.arg = u.arg
                                    }
                                }
                            }
                        }(t, r, a);
                        return i
                    }

                    function m(t, e, r) {
                        try {
                            return {
                                type: "normal",
                                arg: t.call(e, r)
                            }
                        } catch (t) {
                            return {
                                type: "throw",
                                arg: t
                            }
                        }
                    }

                    function g() {}

                    function w() {}

                    function P() {}

                    function E(t) {
                        ["next", "throw", "return"].forEach((function(e) {
                            t[e] = function(t) {
                                return this._invoke(e, t)
                            }
                        }))
                    }

                    function T(t) {
                        function e(r, n, i, a) {
                            var c = m(t[r], t, n);
                            if ("throw" !== c.type) {
                                var u = c.arg,
                                    s = u.value;
                                return s && "object" == typeof s && o.call(s, "__await") ? Promise.resolve(s.__await).then((function(t) {
                                    e("next", t, i, a)
                                }), (function(t) {
                                    e("throw", t, i, a)
                                })) : Promise.resolve(s).then((function(t) {
                                    u.value = t;
                                    i(u)
                                }), (function(t) {
                                    return e("throw", t, i, a)
                                }))
                            }
                            a(c.arg)
                        }
                        var r;
                        this._invoke = function(t, n) {
                            function o() {
                                return new Promise((function(r, o) {
                                    e(t, n, r, o)
                                }))
                            }
                            return r = r ? r.then(o, o) : o()
                        }
                    }

                    function N(t, e) {
                        var n = t.iterator[e.method];
                        if (n === r) {
                            e.delegate = null;
                            if ("throw" === e.method) {
                                if (t.iterator.return) {
                                    e.method = "return";
                                    e.arg = r;
                                    N(t, e);
                                    if ("throw" === e.method) return y
                                }
                                e.method = "throw";
                                e.arg = new TypeError("The iterator does not provide a 'throw' method")
                            }
                            return y
                        }
                        var o = m(n, t.iterator, e.arg);
                        if ("throw" === o.type) {
                            e.method = "throw";
                            e.arg = o.arg;
                            e.delegate = null;
                            return y
                        }
                        var i = o.arg;
                        if (!i) {
                            e.method = "throw";
                            e.arg = new TypeError("iterator result is not an object");
                            e.delegate = null;
                            return y
                        }
                        if (!i.done) return i;
                        e[t.resultName] = i.value;
                        e.next = t.nextLoc;
                        if ("return" !== e.method) {
                            e.method = "next";
                            e.arg = r
                        }
                        e.delegate = null;
                        return y
                    }

                    function I(t) {
                        var e = {
                            tryLoc: t[0]
                        };
                        1 in t && (e.catchLoc = t[1]);
                        if (2 in t) {
                            e.finallyLoc = t[2];
                            e.afterLoc = t[3]
                        }
                        this.tryEntries.push(e)
                    }

                    function x(t) {
                        var e = t.completion || {};
                        e.type = "normal";
                        delete e.arg;
                        t.completion = e
                    }

                    function R(t) {
                        this.tryEntries = [{
                            tryLoc: "root"
                        }];
                        t.forEach(I, this);
                        this.reset(!0)
                    }

                    function j(t) {
                        if (t) {
                            var e = t[a];
                            if (e) return e.call(t);
                            if ("function" == typeof t.next) return t;
                            if (!isNaN(t.length)) {
                                var n = -1,
                                    i = function e() {
                                        for (; ++n < t.length;)
                                            if (o.call(t, n)) {
                                                e.value = t[n];
                                                e.done = !1;
                                                return e
                                            } e.value = r;
                                        e.done = !0;
                                        return e
                                    };
                                return i.next = i
                            }
                        }
                        return {
                            next: L
                        }
                    }

                    function L() {
                        return {
                            value: r,
                            done: !0
                        }
                    }
                }(function() {
                    return this || "object" == typeof self && self
                }() || Function("return this")())
            }
        },
        i = {};

    function a(t) {
        var e = i[t];
        if (void 0 !== e) return e.exports;
        var r = i[t] = {
            id: t,
            loaded: !1,
            exports: {}
        };
        o[t](r, r.exports, a);
        r.loaded = !0;
        return r.exports
    }
    a.m = o;
    t = "function" == typeof Symbol ? Symbol("webpack queues") : "__webpack_queues__", e = "function" == typeof Symbol ? Symbol("webpack exports") : "__webpack_exports__", r = "function" == typeof Symbol ? Symbol("webpack error") : "__webpack_error__", n = t => {
        if (t && t.d < 1) {
            t.d = 1;
            t.forEach((t => t.r--));
            t.forEach((t => t.r-- ? t.r++ : t()))
        }
    }, a.a = (o, i, a) => {
        var c;
        a && ((c = []).d = -1);
        var u, s, f, l = new Set,
            h = o.exports,
            p = new Promise(((t, e) => {
                f = e;
                s = t
            }));
        p[e] = h;
        p[t] = t => (c && t(c), l.forEach(t), p.catch((t => {})));
        o.exports = p;
        i((o => {
            u = (o => o.map((o => {
                if (null !== o && "object" == typeof o) {
                    if (o[t]) return o;
                    if (o.then) {
                        var i = [];
                        i.d = 0;
                        o.then((t => {
                            a[e] = t;
                            n(i)
                        }), (t => {
                            a[r] = t;
                            n(i)
                        }));
                        var a = {};
                        a[t] = t => t(i);
                        return a
                    }
                }
                var c = {};
                c[t] = t => {};
                c[e] = o;
                return c
            })))(o);
            var i, a = () => u.map((t => {
                    if (t[r]) throw t[r];
                    return t[e]
                })),
                s = new Promise((e => {
                    (i = () => e(a)).r = 0;
                    var r = t => t !== c && !l.has(t) && (l.add(t), t && !t.d && (i.r++, t.push(i)));
                    u.map((e => e[t](r)))
                }));
            return i.r ? s : a()
        }), (t => (t ? f(p[r] = t) : s(h), n(c))));
        c && c.d < 0 && (c.d = 0)
    };
    a.d = (t, e) => {
        for (var r in e) a.o(e, r) && !a.o(t, r) && Object.defineProperty(t, r, {
            enumerable: !0,
            get: e[r]
        })
    };
    (() => {
        a.f = {};
        a.e = t => Promise.all(Object.keys(a.f).reduce(((e, r) => {
            a.f[r](t, e);
            return e
        }), []))
    })();
    a.u = t => "2c1338161a854edf45e3.js";
    a.hmd = t => {
        (t = Object.create(t)).children || (t.children = []);
        Object.defineProperty(t, "exports", {
            enumerable: !0,
            set: () => {
                throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + t.id)
            }
        });
        return t
    };
    a.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
    a.r = t => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    };
    a.v = (t, e, r, n) => {
        var o = fetch(a.p + "" + r + ".module.wasm");
        return "function" == typeof WebAssembly.instantiateStreaming ? WebAssembly.instantiateStreaming(o, n).then((e => Object.assign(t, e.instance.exports))) : o.then((t => t.arrayBuffer())).then((t => WebAssembly.instantiate(t, n))).then((e => Object.assign(t, e.instance.exports)))
    };
    a.p = "/assets/";
    (() => {
        var t = {
            92827: 1
        };
        a.f.i = (e, r) => {
            t[e] || importScripts(a.p + a.u(e))
        };
        var e = this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || [],
            r = e.push.bind(e);
        e.push = e => {
            var [n, o, i] = e;
            for (var c in o) a.o(o, c) && (a.m[c] = o[c]);
            i && i(a);
            for (; n.length;) t[n.pop()] = 1;
            r(e)
        }
    })();
    (() => {
        "use strict";
        async function t(t, e, r, n, o) {
            return (await a.e(5522).then(a.bind(a, 305522))).crop_gif(t, e, r, n, o)
        }
        var e, r;
        a(535666);

        function n(t, e, r) {
            e in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r;
            return t
        }

        function o(t, e) {
            e = null != e ? e : {};
            Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : function(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })));
                    r.push.apply(r, n)
                }
                return r
            }(Object(e)).forEach((function(r) {
                Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r))
            }));
            return t
        }! function(t) {
            t[t.BACKGROUND = 0] = "BACKGROUND"
        }(e || (e = {}));
        ! function(t) {
            t[t.OPTION_1 = 0] = "OPTION_1";
            t[t.OPTION_2 = 1] = "OPTION_2";
            t[t.OPTION_3 = 2] = "OPTION_3";
            t[t.OPTION_4 = 3] = "OPTION_4";
            t[t.OPTION_7 = 7] = "OPTION_7";
            t[t.OPTION_8 = 8] = "OPTION_8";
            t[t.OPTION_9 = 9] = "OPTION_9";
            t[t.OPTION_10 = 10] = "OPTION_10"
        }(r || (r = {}));
        var i;
        r.OPTION_7, r.OPTION_8, r.OPTION_9,
            r.OPTION_10, [r.OPTION_7, r.OPTION_8, r.OPTION_9, r.OPTION_10, r.OPTION_1, r.OPTION_2, r.OPTION_3, r.OPTION_4].reduce((function(t, e, r) {
                return o(function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = null != arguments[e] ? arguments[e] : {},
                            o = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter((function(t) {
                            return Object.getOwnPropertyDescriptor(r, t).enumerable
                        }))));
                        o.forEach((function(e) {
                            n(t, e, r[e])
                        }))
                    }
                    return t
                }({}, t), n({}, e, r))
            }), {});
        ! function(t) {
            t[t.AVATAR = 0] = "AVATAR";
            t[t.BANNER = 1] = "BANNER";
            t[t.GUILD_BANNER = 2] = "GUILD_BANNER";
            t[t.VIDEO_BACKGROUND = 3] = "VIDEO_BACKGROUND";
            t[t.SCHEDULED_EVENT_IMAGE = 4] = "SCHEDULED_EVENT_IMAGE";
            t[t.HOME_HEADER = 5] = "HOME_HEADER";
            t[t.AVATAR_DECORATION = 6] = "AVATAR_DECORATION"
        }(i || (i = {}));
        var c;
        ! function(t) {
            t[t.CROP_GIF_START = 0] = "CROP_GIF_START";
            t[t.CROP_GIF_COMPLETE = 1] = "CROP_GIF_COMPLETE";
            t[t.CROP_GIF_ERROR = 2] = "CROP_GIF_ERROR"
        }(c || (c = {}));

        function u(t, e, r, n, o, i, a) {
            try {
                var c = t[i](a),
                    u = c.value
            } catch (t) {
                r(t);
                return
            }
            c.done ? e(u) : Promise.resolve(u).then(n, o)
        }

        function s(t) {
            return function() {
                var e = this,
                    r = arguments;
                return new Promise((function(n, o) {
                    var i = t.apply(e, r);

                    function a(t) {
                        u(i, n, o, a, c, "next", t)
                    }

                    function c(t) {
                        u(i, n, o, a, c, "throw", t)
                    }
                    a(void 0)
                }))
            }
        }
        var f = function(t, e) {
            var r, n, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0]) throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: c(0),
                throw: c(1),
                return: c(2)
            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }), i;

            function c(i) {
                return function(c) {
                    return function(i) {
                        if (r) throw new TypeError("Generator is already executing.");
                        for (; a;) try {
                            if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                            (n = 0, o) && (i = [2 & i[0], o.value]);
                            switch (i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    a.label++;
                                    return {
                                        value: i[1], done: !1
                                    };
                                case 5:
                                    a.label++;
                                    n = i[1];
                                    i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop();
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < o[1]) {
                                        a.label = o[1];
                                        o = i;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2];
                                        a.ops.push(i);
                                        break
                                    }
                                    o[2] && a.ops.pop();
                                    a.trys.pop();
                                    continue
                            }
                            i = e.call(t, a)
                        } catch (t) {
                            i = [6, t];
                            n = 0
                        } finally {
                            r = o = 0
                        }
                        if (5 & i[0]) throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, c])
                }
            }
        };

        function l() {
            return (l = s((function(e, r, n, o, i) {
                var a;
                return f(this, (function(u) {
                    switch (u.label) {
                        case 0:
                            u.trys.push([0, 2, , 3]);
                            return [4, t(e, r, n, o, i)];
                        case 1:
                            a = u.sent();
                            self.postMessage({
                                type: c.CROP_GIF_COMPLETE,
                                result: a
                            });
                            return [3, 3];
                        case 2:
                            u.sent();
                            self.postMessage({
                                type: c.CROP_GIF_ERROR
                            });
                            return [3, 3];
                        case 3:
                            return [2]
                    }
                }))
            }))).apply(this, arguments)
        }
        self.addEventListener("message", (function(t) {
            var e = t.data;
            if (e.type === c.CROP_GIF_START) {
                ! function(t, e, r, n, o) {
                    l.apply(this, arguments)
                }(e.gif, e.x, e.y, e.width, e.height)
            }
        }))
    })()
})();