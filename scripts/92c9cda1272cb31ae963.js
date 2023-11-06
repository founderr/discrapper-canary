! function() {
    var t, r, n, e, o, u, i, c, s = {
            817295: function(t, r, n) {
                "use strict";

                function e() {
                    return n.el("225629").then(n.bind(n, "225629"))
                }
                async function o(t, r, n, o, u) {
                    let i = await e();
                    return i.crop_gif(t, r, n, o, u)
                }
                n.r(r), n.d(r, {
                    default: function() {
                        return e
                    },
                    wasmCropGIF: function() {
                        return o
                    }
                })
            },
            528151: function(t, r, n) {
                "use strict";
                var e = n("664144");
                t.exports = function(t, r) {
                    var n = [][t];
                    return !!n && e(function() {
                        n.call(null, r || function() {
                            return 1
                        }, 1)
                    })
                }
            },
            383053: function(t, r, n) {
                "use strict";
                var e = n("727204"),
                    o = n("116180"),
                    u = n("949580"),
                    i = n("308274"),
                    c = TypeError,
                    s = function(t) {
                        return function(r, n, s, a) {
                            e(n);
                            var f = o(r),
                                _ = u(f),
                                E = i(f),
                                O = t ? E - 1 : 0,
                                p = t ? -1 : 1;
                            if (s < 2)
                                for (;;) {
                                    if (O in _) {
                                        a = _[O], O += p;
                                        break
                                    }
                                    if (O += p, t ? O < 0 : E <= O) throw c("Reduce of empty array with no initial value")
                                }
                            for (; t ? O >= 0 : E > O; O += p) O in _ && (a = n(a, _[O], O, f));
                            return a
                        }
                    };
                t.exports = {
                    left: s(!1),
                    right: s(!0)
                }
            },
            681802: function(t, r, n) {
                "use strict";
                var e = n("53786"),
                    o = n("125359"),
                    u = n("745795"),
                    i = n("174669")("toStringTag"),
                    c = Object,
                    s = "Arguments" === u(function() {
                        return arguments
                    }()),
                    a = function(t, r) {
                        try {
                            return t[r]
                        } catch (t) {}
                    };
                t.exports = e ? u : function(t) {
                    var r, n, e;
                    return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = a(r = c(t), i)) ? n : s ? u(r) : "Object" === (e = u(r)) && o(r.callee) ? "Arguments" : e
                }
            },
            106106: function(t, r, n) {
                "use strict";
                var e = n("503486"),
                    o = n("745795");
                t.exports = "process" === o(e.process)
            },
            350142: function(t, r, n) {
                "use strict";
                var e = n("64980"),
                    o = Error,
                    u = e("".replace),
                    i = String(o("zxcasd").stack),
                    c = /\n\s*at [^:]*:[^\n]*/,
                    s = c.test(i);
                t.exports = function(t, r) {
                    if (s && "string" == typeof t && !o.prepareStackTrace)
                        for (; r--;) t = u(t, c, "");
                    return t
                }
            },
            571503: function(t, r, n) {
                "use strict";
                var e = n("366483"),
                    o = n("350142"),
                    u = n("19125"),
                    i = Error.captureStackTrace;
                t.exports = function(t, r, n, c) {
                    u && (i ? i(t, r) : e(t, "stack", o(n, c)))
                }
            },
            19125: function(t, r, n) {
                "use strict";
                var e = n("664144"),
                    o = n("16447");
                t.exports = !e(function() {
                    var t = Error("a");
                    return !("stack" in t) || (Object.defineProperty(t, "stack", o(1, 7)), 7 !== t.stack)
                })
            },
            145661: function(t, r, n) {
                "use strict";
                var e = n("406219"),
                    o = Function.prototype,
                    u = o.apply,
                    i = o.call;
                t.exports = "object" == typeof Reflect && Reflect.apply || (e ? i.bind(u) : function() {
                    return i.apply(u, arguments)
                })
            },
            688358: function(t, r, n) {
                "use strict";
                var e = n("125359"),
                    o = n("472960"),
                    u = n("823493");
                t.exports = function(t, r, n) {
                    var i, c;
                    return u && e(i = r.constructor) && i !== n && o(c = i.prototype) && c !== n.prototype && u(t, c), t
                }
            },
            561051: function(t, r, n) {
                "use strict";
                var e = n("472960"),
                    o = n("366483");
                t.exports = function(t, r) {
                    e(r) && "cause" in r && o(t, "cause", r.cause)
                }
            },
            391358: function(t, r, n) {
                "use strict";
                var e = n("998270");
                t.exports = function(t, r) {
                    return void 0 === t ? arguments.length < 2 ? "" : r : e(t)
                }
            },
            681645: function(t, r, n) {
                "use strict";
                var e = n("541368").f;
                t.exports = function(t, r, n) {
                    n in t || e(t, n, {
                        configurable: !0,
                        get: function() {
                            return r[n]
                        },
                        set: function(t) {
                            r[n] = t
                        }
                    })
                }
            },
            53786: function(t, r, n) {
                "use strict";
                var e = n("174669")("toStringTag"),
                    o = {};
                o[e] = "z", t.exports = "[object z]" === String(o)
            },
            998270: function(t, r, n) {
                "use strict";
                var e = n("681802"),
                    o = String;
                t.exports = function(t) {
                    if ("Symbol" === e(t)) throw TypeError("Cannot convert a Symbol value to a string");
                    return o(t)
                }
            },
            802490: function(t, r, n) {
                "use strict";
                var e = n("434978"),
                    o = n("59393"),
                    u = n("366483"),
                    i = n("470984"),
                    c = n("823493"),
                    s = n("539536"),
                    a = n("681645"),
                    f = n("688358"),
                    _ = n("391358"),
                    E = n("561051"),
                    O = n("571503"),
                    p = n("814026"),
                    l = n("140925");
                t.exports = function(t, r, n, T) {
                    var A = "stackTraceLimit",
                        I = T ? 2 : 1,
                        d = t.split("."),
                        R = d[d.length - 1],
                        N = e.apply(null, d);
                    if (N) {
                        var y = N.prototype;
                        if (!l && o(y, "cause") && delete y.cause, !n) return N;
                        var h = e("Error"),
                            v = r(function(t, r) {
                                var n = _(T ? r : t, void 0),
                                    e = T ? new N(t) : new N;
                                return void 0 !== n && u(e, "message", n), O(e, v, e.stack, 2), this && i(y, this) && f(e, this, v), arguments.length > I && E(e, arguments[I]), e
                            });
                        if (v.prototype = y, "Error" !== R ? c ? c(v, h) : s(v, h, {
                                name: !0
                            }) : p && A in N && (a(v, N, A), a(v, N, "prepareStackTrace")), s(v, N), !l) try {
                            y.name !== R && u(y, "name", R), y.constructor = v
                        } catch (t) {}
                        return v
                    }
                }
            },
            808653: function(t, r, n) {
                "use strict";
                var e = n("859514"),
                    o = n("383053").left,
                    u = n("528151"),
                    i = n("693523"),
                    c = n("106106");
                e({
                    target: "Array",
                    proto: !0,
                    forced: !c && i > 79 && i < 83 || !u("reduce")
                }, {
                    reduce: function(t) {
                        var r = arguments.length;
                        return o(this, t, r, r > 1 ? arguments[1] : void 0)
                    }
                })
            },
            70102: function(t, r, n) {
                "use strict";
                var e = n("859514"),
                    o = n("503486"),
                    u = n("145661"),
                    i = n("802490"),
                    c = "WebAssembly",
                    s = o[c],
                    a = 7 !== Error("e", {
                        cause: 7
                    }).cause,
                    f = function(t, r) {
                        var n = {};
                        n[t] = i(t, r, a), e({
                            global: !0,
                            constructor: !0,
                            arity: 1,
                            forced: a
                        }, n)
                    },
                    _ = function(t, r) {
                        if (s && s[t]) {
                            var n = {};
                            n[t] = i(c + "." + t, r, a), e({
                                target: c,
                                stat: !0,
                                constructor: !0,
                                arity: 1,
                                forced: a
                            }, n)
                        }
                    };
                f("Error", function(t) {
                    return function(r) {
                        return u(t, this, arguments)
                    }
                }), f("EvalError", function(t) {
                    return function(r) {
                        return u(t, this, arguments)
                    }
                }), f("RangeError", function(t) {
                    return function(r) {
                        return u(t, this, arguments)
                    }
                }), f("ReferenceError", function(t) {
                    return function(r) {
                        return u(t, this, arguments)
                    }
                }), f("SyntaxError", function(t) {
                    return function(r) {
                        return u(t, this, arguments)
                    }
                }), f("TypeError", function(t) {
                    return function(r) {
                        return u(t, this, arguments)
                    }
                }), f("URIError", function(t) {
                    return function(r) {
                        return u(t, this, arguments)
                    }
                }), _("CompileError", function(t) {
                    return function(r) {
                        return u(t, this, arguments)
                    }
                }), _("LinkError", function(t) {
                    return function(r) {
                        return u(t, this, arguments)
                    }
                }), _("RuntimeError", function(t) {
                    return function(r) {
                        return u(t, this, arguments)
                    }
                })
            },
            75015: function(t, r, n) {
                "use strict";
                n.r(r), n.d(r, {
                    UploadTypes: function() {
                        return u
                    },
                    EDITING_CONTAINER_WIDTH: function() {
                        return s
                    },
                    USER_BANNER_MAX_WIDTH: function() {
                        return a
                    },
                    USER_BANNER_MAX_HEIGHT: function() {
                        return f
                    },
                    GUILD_BANNER_MAX_WIDTH: function() {
                        return _
                    },
                    GUILD_BANNER_MAX_HEIGHT: function() {
                        return E
                    },
                    SCHEDULED_EVENT_IMAGE_MAX_WIDTH: function() {
                        return O
                    },
                    SCHEDULED_EVENT_IMAGE_MAX_HEIGHT: function() {
                        return p
                    },
                    HOME_HEADER_MAX_WIDTH: function() {
                        return l
                    },
                    HOME_HEADER_MAX_HEIGHT: function() {
                        return T
                    },
                    BANNER_ASPECT_RATIO: function() {
                        return A
                    },
                    GUILD_BANNER_ASPECT_RATIO: function() {
                        return I
                    },
                    SCHEDULED_EVENT_IMAGE_ASPECT_RATIO: function() {
                        return d
                    },
                    HOME_HEADER_ASPECT_RATIO: function() {
                        return R
                    },
                    MAX_BANNER_OVERLAY_HEIGHT: function() {
                        return N
                    },
                    MAX_GUILD_BANNER_OVERLAY_HEIGHT: function() {
                        return y
                    },
                    MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT: function() {
                        return h
                    },
                    MAX_HOME_HEADER_OVERLAY_HEIGHT: function() {
                        return v
                    },
                    VIDEO_BACKGROUND_ASPECT_RATIO: function() {
                        return b
                    },
                    MAX_VIDEO_OVERLAY_HEIGHT: function() {
                        return P
                    },
                    MessageTypes: function() {
                        return i
                    }
                });
                var e, o, u, i, c = n("917219");
                (e = u || (u = {}))[e.AVATAR = 0] = "AVATAR", e[e.BANNER = 1] = "BANNER", e[e.GUILD_BANNER = 2] = "GUILD_BANNER", e[e.VIDEO_BACKGROUND = 3] = "VIDEO_BACKGROUND", e[e.SCHEDULED_EVENT_IMAGE = 4] = "SCHEDULED_EVENT_IMAGE", e[e.HOME_HEADER = 5] = "HOME_HEADER", e[e.AVATAR_DECORATION = 6] = "AVATAR_DECORATION";
                let s = 568,
                    a = 2400,
                    f = 848,
                    _ = 2400,
                    E = 1350,
                    O = 2400,
                    p = 960,
                    l = 2400,
                    T = 600,
                    A = 17 / 6,
                    I = 16 / 9,
                    d = 2.5,
                    R = 4,
                    N = s / A,
                    y = s / I,
                    h = s / d,
                    v = s / R,
                    b = c.BACKGROUND_REPLACEMENT_SIZE.width / c.BACKGROUND_REPLACEMENT_SIZE.height,
                    P = s / b;
                (o = i || (i = {}))[o.CROP_GIF_START = 0] = "CROP_GIF_START", o[o.CROP_GIF_COMPLETE = 1] = "CROP_GIF_COMPLETE", o[o.CROP_GIF_ERROR = 2] = "CROP_GIF_ERROR"
            },
            224915: function(t, r, n) {
                "use strict";
                n.r(r), n("854508");
                var e = n("817295");
                n("129334");
                var o = n("75015");
                async function u(t, r, n, u, i) {
                    try {
                        let c = await (0, e.wasmCropGIF)(t, r, n, u, i);
                        self.postMessage({
                            type: o.MessageTypes.CROP_GIF_COMPLETE,
                            result: c
                        })
                    } catch (t) {
                        self.postMessage({
                            type: o.MessageTypes.CROP_GIF_ERROR
                        })
                    }
                }
                self.addEventListener("message", t => {
                    let {
                        data: r
                    } = t;
                    if (r.type === o.MessageTypes.CROP_GIF_START) {
                        let {
                            gif: t,
                            x: n,
                            y: e,
                            width: o,
                            height: i
                        } = r;
                        u(t, n, e, o, i)
                    }
                })
            },
            917219: function(t, r, n) {
                "use strict";
                var e, o, u, i;
                n.r(r), n.d(r, {
                    VideoFilterType: function() {
                        return e
                    },
                    DefaultVideoBackground: function() {
                        return o
                    },
                    ANIMATED_DEFAULT_VIDEO_BACKGROUNDS: function() {
                        return c
                    },
                    DEFAULT_VIDEO_BACKGROUND_SORT: function() {
                        return s
                    },
                    BLUR_BACKGROUND_OPTION: function() {
                        return a
                    },
                    BACKGROUND_REPLACEMENT_SIZE: function() {
                        return f
                    },
                    MAX_BACKGROUND_IMAGE_UPLOAD_FILESIZE_BYTES: function() {
                        return _
                    }
                }), n("808653"), (u = e || (e = {}))[u.BACKGROUND = 0] = "BACKGROUND", (i = o || (o = {}))[i.OPTION_1 = 0] = "OPTION_1", i[i.OPTION_2 = 1] = "OPTION_2", i[i.OPTION_3 = 2] = "OPTION_3", i[i.OPTION_4 = 3] = "OPTION_4", i[i.OPTION_7 = 7] = "OPTION_7", i[i.OPTION_8 = 8] = "OPTION_8", i[i.OPTION_9 = 9] = "OPTION_9", i[i.OPTION_10 = 10] = "OPTION_10";
                let c = [o.OPTION_7, o.OPTION_8, o.OPTION_9, o.OPTION_10],
                    s = [o.OPTION_7, o.OPTION_8, o.OPTION_9, o.OPTION_10, o.OPTION_1, o.OPTION_2, o.OPTION_3, o.OPTION_4].reduce((t, r, n) => ({
                        ...t,
                        [r]: n
                    }), {}),
                    a = "blur",
                    f = {
                        width: 1280,
                        height: 720
                    },
                    _ = 10485760
            }
        },
        a = {};

    function f(t) {
        var r = a[t];
        if (void 0 !== r) return r.exports;
        var n = a[t] = {
            id: t,
            loaded: !1,
            exports: {}
        };
        return s[t](n, n.exports, f), n.loaded = !0, n.exports
    }
    f.m = s, f.x = function() {
        var t = f.O(void 0, ["58409", "31897", "3341"], function() {
            return f("224915")
        });
        return t = f.O(t)
    }, t = f.x, f.x = function() {
        return Promise.all(["31897", "3341", "58409"].map(f.e, f)).then(t)
    }, f.es = function(t, r) {
        return Object.keys(t).forEach(function(n) {
            "default" !== n && !Object.prototype.hasOwnProperty.call(r, n) && Object.defineProperty(r, n, {
                enumerable: !0,
                get: function() {
                    return t[n]
                }
            })
        }), t
    }, r = {
        135722: ["31897"],
        188503: ["31897"],
        224915: ["31897", "3341", "39703", "58409"],
        225629: ["22843", "25285"],
        380029: ["3341", "58409"],
        399758: ["31897"],
        467592: ["31897"],
        622618: ["31897"],
        632760: ["22843", "3341", "58409"],
        748375: ["3341", "58409"],
        783260: ["58409"],
        826269: ["31897"]
    }, f.el = function(t) {
        var n = r[t];
        return void 0 === n ? Promise.resolve() : n.length > 1 ? Promise.all(n.map(f.e)) : f.e(n[0])
    }, f.f = {}, f.e = function(t) {
        return Promise.all(Object.keys(f.f).reduce(function(r, n) {
            return f.f[n](t, r), r
        }, []))
    }, f.p = "/assets/", f.u = function(t) {
        return ({
            22843: "987b3af0ef2f81f0f298.js",
            25285: "2baa5a41ace6a944e6dc.js",
            31897: "8008dff0e97e29f17606.js",
            3341: "40fad28f01da56375e6a.js",
            58409: "7ebb95041b61a5bb04b8.js"
        })[t]
    }, f.o = function(t, r) {
        return Object.prototype.hasOwnProperty.call(t, r)
    }, n = [], f.O = function(t, r, e, o) {
        if (r) {
            o = o || 0;
            for (var u = n.length; u > 0 && n[u - 1][2] > o; u--) n[u] = n[u - 1];
            n[u] = [r, e, o];
            return
        }
        for (var i = 1 / 0, u = 0; u < n.length; u++) {
            for (var r = n[u][0], e = n[u][1], o = n[u][2], c = !0, s = 0; s < r.length; s++) i >= o && Object.keys(f.O).every(function(t) {
                return f.O[t](r[s])
            }) ? r.splice(s--, 1) : (c = !1, o < i && (i = o));
            if (c) {
                n.splice(u--, 1);
                var a = e();
                void 0 !== a && (t = a)
            }
        }
        return t
    }, f.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || Function("return this")()
        } catch (t) {
            if ("object" == typeof window) return window
        }
    }(), e = "function" == typeof Symbol ? Symbol("webpack queues") : "__webpack_queues__", o = "function" == typeof Symbol ? Symbol("webpack exports") : "__webpack_exports__", u = "function" == typeof Symbol ? Symbol("webpack error") : "__webpack_error__", i = t => {
        t && t.d < 1 && (t.d = 1, t.forEach(t => t.r--), t.forEach(t => t.r-- ? t.r++ : t()))
    }, c = t => t.map(t => {
        if (null !== t && "object" == typeof t) {
            if (t[e]) return t;
            if (t.then) {
                var r = [];
                r.d = 0, t.then(t => {
                    n[o] = t, i(r)
                }, t => {
                    n[u] = t, i(r)
                });
                var n = {};
                return n[e] = t => t(r), n
            }
        }
        var c = {};
        return c[e] = t => {}, c[o] = t, c
    }), f.a = (t, r, n) => {
        n && ((s = []).d = -1);
        var s, a, f, _, E = new Set,
            O = t.exports,
            p = new Promise((t, r) => {
                _ = r, f = t
            });
        p[o] = O, p[e] = t => (s && t(s), E.forEach(t), p.catch(t => {})), t.exports = p, r(t => {
            a = c(t);
            var r, n = () => a.map(t => {
                    if (t[u]) throw t[u];
                    return t[o]
                }),
                i = new Promise(t => {
                    (r = () => t(n)).r = 0;
                    var o = t => t !== s && !E.has(t) && (E.add(t), t && !t.d && (r.r++, t.push(r)));
                    a.map(t => t[e](o))
                });
            return r.r ? i : n()
        }, t => (t ? _(p[u] = t) : f(O), i(s))), s && s.d < 0 && (s.d = 0)
    }, f.d = function(t, r) {
        for (var n in r) f.o(r, n) && !f.o(t, n) && Object.defineProperty(t, n, {
            enumerable: !0,
            get: r[n]
        })
    }, f.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, f.n = function(t) {
        return t && t.__esModule ? t.default : t
    }, f.nmd = function(t) {
        return t.paths = [], !t.children && (t.children = []), t
    }, f.hmd = function(t) {
        return !(t = Object.create(t)).children && (t.children = []), Object.defineProperty(t, "exports", {
            enumerable: !0,
            set: function() {
                throw Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + t.id)
            }
        }), t
    }, ! function() {
        var t = {
            39703: 1
        };
        f.f.i = function(r, n) {
            !t[r] && importScripts(f.p + f.u(r))
        };
        var r = this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || [],
            n = r.push.bind(r);
        r.push = function(r) {
            var e = r[0],
                o = r[1],
                u = r[2];
            for (var i in o) f.o(o, i) && (f.m[i] = o[i]);
            for (u && u(f); e.length;) t[e.pop()] = 1;
            n(r)
        }
    }(), f.v = (t, r, n, e) => {
        var o = fetch(f.p + n);
        return "function" == typeof WebAssembly.instantiateStreaming ? WebAssembly.instantiateStreaming(o, e).then(r => Object.assign(t, r.instance.exports)) : o.then(t => t.arrayBuffer()).then(t => WebAssembly.instantiate(t, e)).then(r => Object.assign(t, r.instance.exports))
    }, f.x()
}();