! function() {
    var e, t, n = {
            448105: function(e, t, n) {
                "use strict";
                e.exports = function(e, t) {
                    var n = t.length,
                        r = e.length;
                    if (r > n) return !1;
                    if (r === n) return e === t;
                    e: for (var o = 0, i = 0; o < r; o++) {
                        for (var u = e.charCodeAt(o); i < n;)
                            if (t.charCodeAt(i++) === u) continue e;
                        return !1
                    }
                    return !0
                }
            },
            330206: function(e, t, n) {
                var Symbol = n("690516").Symbol;
                e.exports = Symbol
            },
            33426: function(e, t, n) {
                var Symbol = n("330206"),
                    r = n("447245"),
                    o = n("677201"),
                    i = Symbol ? Symbol.toStringTag : void 0;
                e.exports = function(e) {
                    return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : i && i in Object(e) ? r(e) : o(e)
                }
            },
            447414: function(e, t, n) {
                var r = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
                e.exports = r
            },
            447245: function(e, t, n) {
                var Symbol = n("330206"),
                    r = Object.prototype,
                    o = r.hasOwnProperty,
                    i = r.toString,
                    u = Symbol ? Symbol.toStringTag : void 0;
                e.exports = function(e) {
                    var t = o.call(e, u),
                        n = e[u];
                    try {
                        e[u] = void 0;
                        var r = !0
                    } catch (e) {}
                    var c = i.call(e);
                    return r && (t ? e[u] = n : delete e[u]), c
                }
            },
            677201: function(e, t, n) {
                var r = Object.prototype.toString;
                e.exports = function(e) {
                    return r.call(e)
                }
            },
            690516: function(e, t, n) {
                n("854508");
                var r = n("447414"),
                    o = "object" == typeof self && self && self.Object === Object && self,
                    i = r || o || Function("return this")();
                e.exports = i
            },
            483366: function(e, t, n) {
                n("70102");
                var r = n("285162"),
                    o = n("271388"),
                    i = n("16282"),
                    u = Math.max,
                    c = Math.min;
                e.exports = function(e, t, n) {
                    var l, a, f, s, d, p, v = 0,
                        b = !1,
                        h = !1,
                        y = !0;
                    if ("function" != typeof e) throw TypeError("Expected a function");

                    function g(t) {
                        var n = l,
                            r = a;
                        return l = a = void 0, v = t, s = e.apply(r, n)
                    }
                    t = i(t) || 0, r(n) && (b = !!n.leading, f = (h = "maxWait" in n) ? u(i(n.maxWait) || 0, t) : f, y = "trailing" in n ? !!n.trailing : y);

                    function m(e) {
                        var n = e - p,
                            r = e - v;
                        return void 0 === p || n >= t || n < 0 || h && r >= f
                    }

                    function E() {
                        var e, n, r, i, u = o();
                        if (m(u)) return j(u);
                        d = setTimeout(E, (n = (e = u) - p, r = e - v, i = t - n, h ? c(i, f - r) : i))
                    }

                    function j(e) {
                        return (d = void 0, y && l) ? g(e) : (l = a = void 0, s)
                    }

                    function S() {
                        var e, n = o(),
                            r = m(n);
                        if (l = arguments, a = this, p = n, r) {
                            if (void 0 === d) {
                                ;
                                return v = e = p, d = setTimeout(E, t), b ? g(e) : s
                            }
                            if (h) return clearTimeout(d), d = setTimeout(E, t), g(p)
                        }
                        return void 0 === d && (d = setTimeout(E, t)), s
                    }
                    return S.cancel = function() {
                        void 0 !== d && clearTimeout(d), v = 0, l = p = a = d = void 0
                    }, S.flush = function() {
                        return void 0 === d ? s : j(o())
                    }, S
                }
            },
            285162: function(e, t, n) {
                e.exports = function(e) {
                    var t = typeof e;
                    return null != e && ("object" == t || "function" == t)
                }
            },
            270879: function(e, t, n) {
                e.exports = function(e) {
                    return null != e && "object" == typeof e
                }
            },
            27556: function(e, t, n) {
                var r = n("33426"),
                    o = n("270879");
                e.exports = function(e) {
                    return "symbol" == typeof e || o(e) && "[object Symbol]" == r(e)
                }
            },
            271388: function(e, t, n) {
                var r = n("690516");
                e.exports = function() {
                    return r.Date.now()
                }
            },
            16282: function(e, t, n) {
                n("781738");
                var r = n("285162"),
                    o = n("27556"),
                    i = 0 / 0,
                    u = /^\s+|\s+$/g,
                    c = /^[-+]0x[0-9a-f]+$/i,
                    l = /^0b[01]+$/i,
                    a = /^0o[0-7]+$/i,
                    f = parseInt;
                e.exports = function(e) {
                    if ("number" == typeof e) return e;
                    if (o(e)) return i;
                    if (r(e)) {
                        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = r(t) ? t + "" : t
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = e.replace(u, "");
                    var n = l.test(e);
                    return n || a.test(e) ? f(e.slice(2), n ? 2 : 8) : c.test(e) ? i : +e
                }
            },
            195547: function(e, t, n) {
                "use strict";

                function r(e, t) {
                    if (e.score === t.score) {
                        var n, r, o, i, u, c;
                        let l = null !== (i = null !== (o = e.sortable) && void 0 !== o ? o : null === (n = e.comparator) || void 0 === n ? void 0 : n.toLocaleLowerCase()) && void 0 !== i ? i : "",
                            a = null !== (c = null !== (u = e.sortable) && void 0 !== u ? u : null === (r = t.comparator) || void 0 === r ? void 0 : r.toLocaleLowerCase()) && void 0 !== c ? c : "";
                        if (l < a) return -1;
                        if (l > a) return 1
                    }
                    return t.score - e.score
                }
                n.r(t), n.d(t, {
                    default: function() {
                        return r
                    }
                })
            },
            380029: function(e, t, n) {
                "use strict";
                n.r(t), n("222007"), n("424973"), n("854508"), n("70102");
                var r = n("448105"),
                    o = n.n(r),
                    i = n("483366"),
                    u = n.n(i),
                    c = n("655518"),
                    l = n("159885"),
                    a = n("195547");
                let f = {
                        UPDATE_USERS: "UPDATE_USERS",
                        USER_RESULTS: "USER_RESULTS",
                        QUERY_SET: "QUERY_SET",
                        QUERY_CLEAR: "QUERY_CLEAR"
                    },
                    s = new Map,
                    d = new Map,
                    p = new Set,
                    v = "username",
                    b = "friendNickname",
                    h = "globalName",
                    y = u(() => {
                        0 !== p.size && (p.forEach(e => {
                            let t = d.get(e);
                            null != t && m(e, t)
                        }), p.clear())
                    }, 100, {
                        leading: !0,
                        trailing: !0
                    });

                function g(e, t) {
                    return e * (null != t ? t : 1)
                }

                function m(e, t) {
                    var n, r;
                    let {
                        query: i,
                        limit: u,
                        filters: f,
                        blacklist: d,
                        whitelist: p
                    } = t, y = null != f && f.strict && null !== (n = f.guild) && void 0 !== n ? n : null, m = null !== (r = t.boosters) && void 0 !== r ? r : {}, j = RegExp("^".concat(c.default.escape(i)), "i"), S = RegExp(c.default.escape(i), "i"), x = [];
                    if ("" === i) return E(i, x, e);
                    let O = i.toLocaleLowerCase(),
                        T = (0, l.normalize)(O);
                    s.forEach((e, t) => {
                        let n;
                        if (! function(e, t, n, r, o) {
                                if (null != r && r.indexOf(e) >= 0) return !1;
                                if (null != o && o.indexOf(e) >= 0) return !0;
                                if (null != n) {
                                    let {
                                        friends: e,
                                        guild: r
                                    } = n;
                                    return !0 === e && !0 === t.isFriend || null != r && (null != t[r] || null === t[r]) || !1
                                }
                                return !0
                            }(t, e, f, d, p)) return;
                        let {
                            username: r
                        } = e;
                        t === i ? n = {
                            id: t,
                            username: r,
                            comparator: t,
                            score: g(10, m[t])
                        } : Object.keys(e).forEach(i => {
                            let u;
                            let c = e[i];
                            if ("boolean" == typeof c || null == c || null != y && i !== v && i !== b && i !== h && y !== i) return;
                            let a = (0, l.stripDiacritics)(c.toLocaleLowerCase());
                            j.test(c) ? u = {
                                comparator: c,
                                score: g(10, m[t])
                            } : S.test(c) ? u = {
                                comparator: c,
                                score: g(5, m[t])
                            } : o(O, a) ? u = {
                                comparator: c,
                                score: g(1, m[t])
                            } : o(T, (0, l.normalize)(a)) && (u = {
                                comparator: c,
                                score: g(1, m[t])
                            }), null != u && (null == n || n.score < u.score) && (n = {
                                ...u,
                                id: t,
                                username: r
                            })
                        }), null != n && x.push(n)
                    }), x.sort(a.default), x.length > u && (x.length = u), E(i, x, e)
                }

                function E(e, t, n) {
                    let r = {
                        type: f.USER_RESULTS,
                        uuid: n,
                        payload: {
                            query: e,
                            results: t
                        }
                    };
                    self.postMessage(r)
                }
                self.addEventListener("message", e => {
                    let {
                        data: t
                    } = e;
                    if (null == t || null == t.type) throw Error("Invalid data");
                    switch (t.type) {
                        case f.UPDATE_USERS:
                            return function(e) {
                                let {
                                    payload: t
                                } = e, n = !1, r = new Set;
                                t.forEach(e => {
                                    var t;
                                    let {
                                        id: o,
                                        ...i
                                    } = e, u = null !== (t = s.get(o)) && void 0 !== t ? t : null, c = {
                                        ...u,
                                        ...i
                                    };
                                    s.set(o, c), d.size > 0 && ((c.isFriend !== (null == u ? void 0 : u.isFriend) || c.friendNickname !== (null == u ? void 0 : u.friendNickname)) && (n = !0), Object.keys(c).forEach(e => {
                                        "isBot" !== e && "isFriend" !== e && e !== v && e !== b && e !== h && r.add(e)
                                    }))
                                }), d.forEach((e, t) => {
                                    let {
                                        filters: o
                                    } = e;
                                    (null == o || o.friends === n || r.has(o.guild)) && p.add(t)
                                }), y()
                            }(t);
                        case f.QUERY_SET:
                            return function(e) {
                                let {
                                    uuid: t,
                                    payload: n
                                } = e;
                                d.set(t, n), m(t, n)
                            }(t);
                        case f.QUERY_CLEAR:
                            return function(e) {
                                let {
                                    uuid: t
                                } = e;
                                d.delete(t), p.delete(t), 0 === p.size && y.cancel()
                            }(t)
                    }
                })
            },
            655518: function(e, t, n) {
                "use strict";
                n.r(t), n.d(t, {
                    default: function() {
                        return r
                    }
                }), n("781738");
                var r = {
                    escape: e => e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
                }
            }
        },
        r = {};

    function o(e) {
        var t = r[e];
        if (void 0 !== t) return t.exports;
        var i = r[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return n[e](i, i.exports, o), i.loaded = !0, i.exports
    }
    o.m = n, o.x = function() {
        var e = o.O(void 0, ["58409", "3341", "22843", "18731", "72880", "27043", "7273"], function() {
            return o("380029")
        });
        return e = o.O(e)
    }, e = o.x, o.x = function() {
        return Promise.all(["18731", "22843", "27043", "3341", "58409", "7273", "72880"].map(o.e, o)).then(e)
    }, o.es = function(e, t) {
        return Object.keys(e).forEach(function(n) {
            "default" !== n && !Object.prototype.hasOwnProperty.call(t, n) && Object.defineProperty(t, n, {
                enumerable: !0,
                get: function() {
                    return e[n]
                }
            })
        }), e
    }, o.f = {}, o.e = function(e) {
        return Promise.all(Object.keys(o.f).reduce(function(t, n) {
            return o.f[n](e, t), t
        }, []))
    }, o.p = "/assets/", o.u = function(e) {
        return ({
            18731: "18731.c253595d0af78dbf8b86.js",
            22843: "22843.1bda3edd4dd152273661.js",
            27043: "27043.a482c6fee3b551f66bc0.js",
            3341: "3341.1a1f8595a0c8fc9f99cf.js",
            58409: "58409.1811376ebb7f14b0be53.js",
            7273: "7273.d84e61616641e0e461af.js",
            72880: "72880.4a8d74dec2b88a67e858.js"
        })[e]
    }, o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t = [], o.O = function(e, n, r, i) {
        if (n) {
            i = i || 0;
            for (var u = t.length; u > 0 && t[u - 1][2] > i; u--) t[u] = t[u - 1];
            t[u] = [n, r, i];
            return
        }
        for (var c = 1 / 0, u = 0; u < t.length; u++) {
            for (var n = t[u][0], r = t[u][1], i = t[u][2], l = !0, a = 0; a < n.length; a++) c >= i && Object.keys(o.O).every(function(e) {
                return o.O[e](n[a])
            }) ? n.splice(a--, 1) : (l = !1, i < c && (c = i));
            if (l) {
                t.splice(u--, 1);
                var f = r();
                void 0 !== f && (e = f)
            }
        }
        return e
    }, o.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), o.d = function(e, t) {
        for (var n in t) o.o(t, n) && !o.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        })
    }, o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.n = function(e) {
        return e && e.__esModule ? e.default : e
    }, o.nmd = function(e) {
        return e.paths = [], !e.children && (e.children = []), e
    }, ! function() {
        var e = {
            88243: 1
        };
        o.f.i = function(t, n) {
            !e[t] && importScripts(o.p + o.u(t))
        };
        var t = this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || [],
            n = t.push.bind(t);
        t.push = function(t) {
            var r = t[0],
                i = t[1],
                u = t[2];
            for (var c in i) o.o(i, c) && (o.m[c] = i[c]);
            for (u && u(o); r.length;) e[r.pop()] = 1;
            n(t)
        }
    }(), o.x()
}();