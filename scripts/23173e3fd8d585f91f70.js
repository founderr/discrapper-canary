(() => {
    var r, e, t = {
            824390: r => {
                "use strict";
                r.exports = function(r, e) {
                    var t = e.length,
                        n = r.length;
                    if (n > t) return !1;
                    if (n === t) return r === e;
                    r: for (var o = 0, i = 0; o < n; o++) {
                        for (var u = r.charCodeAt(o); i < t;)
                            if (e.charCodeAt(i++) === u) continue r;
                        return !1
                    }
                    return !0
                }
            },
            23279: (r, e, t) => {
                var n = t(513218),
                    o = t(707771),
                    i = t(14841),
                    u = Math.max,
                    a = Math.min;
                r.exports = function(r, e, t) {
                    var l, c, f, s, p, d, v = 0,
                        y = !1,
                        b = !1,
                        m = !0;
                    if ("function" != typeof r) throw new TypeError("Expected a function");
                    e = i(e) || 0;
                    if (n(t)) {
                        y = !!t.leading;
                        f = (b = "maxWait" in t) ? u(i(t.maxWait) || 0, e) : f;
                        m = "trailing" in t ? !!t.trailing : m
                    }

                    function g(e) {
                        var t = l,
                            n = c;
                        l = c = void 0;
                        v = e;
                        return s = r.apply(n, t)
                    }

                    function h(r) {
                        v = r;
                        p = setTimeout(w, e);
                        return y ? g(r) : s
                    }

                    function O(r) {
                        var t = r - d;
                        return void 0 === d || t >= e || t < 0 || b && r - v >= f
                    }

                    function w() {
                        var r = o();
                        if (O(r)) return j(r);
                        p = setTimeout(w, function(r) {
                            var t = e - (r - d);
                            return b ? a(t, f - (r - v)) : t
                        }(r))
                    }

                    function j(r) {
                        p = void 0;
                        if (m && l) return g(r);
                        l = c = void 0;
                        return s
                    }

                    function E() {
                        var r = o(),
                            t = O(r);
                        l = arguments;
                        c = this;
                        d = r;
                        if (t) {
                            if (void 0 === p) return h(d);
                            if (b) {
                                clearTimeout(p);
                                p = setTimeout(w, e);
                                return g(d)
                            }
                        }
                        void 0 === p && (p = setTimeout(w, e));
                        return s
                    }
                    E.cancel = function() {
                        void 0 !== p && clearTimeout(p);
                        v = 0;
                        l = d = c = p = void 0
                    };
                    E.flush = function() {
                        return void 0 === p ? s : j(o())
                    };
                    return E
                }
            },
            707771: (r, e, t) => {
                var n = t(555639);
                r.exports = function() {
                    return n.Date.now()
                }
            },
            644829: (r, e, t) => {
                "use strict";
                var n = t(824390),
                    o = t.n(n),
                    i = t(23279),
                    u = t.n(i);
                const a = function(r) {
                    return r.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
                };

                function l(r, e) {
                    (null == e || e > r.length) && (e = r.length);
                    for (var t = 0, n = new Array(e); t < e; t++) n[t] = r[t];
                    return n
                }

                function c(r) {
                    return function(r) {
                        if (Array.isArray(r)) return l(r)
                    }(r) || function(r) {
                        if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r)
                    }(r) || function(r, e) {
                        if (!r) return;
                        if ("string" == typeof r) return l(r, e);
                        var t = Object.prototype.toString.call(r).slice(8, -1);
                        "Object" === t && r.constructor && (t = r.constructor.name);
                        if ("Map" === t || "Set" === t) return Array.from(t);
                        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return l(r, e)
                    }(r) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }
                var f = /[\u0300-\u036f]/g;
                var s = null == String.prototype.normalize ? function(r) {
                    return r
                } : function(r) {
                    return r.normalize("NFD").replace(f, "").normalize("NFC")
                };
                var p = null == String.prototype.normalize ? function(r) {
                    return r
                } : function(r) {
                    var e = t(851709),
                        n = "";
                    c(r.normalize("NFD")).forEach((function(r) {
                        var t;
                        n += null !== (t = e[r]) && void 0 !== t ? t : r
                    }));
                    return n.normalize("NFD").toLocaleLowerCase()
                };

                function d(r, e) {
                    if (r.score === e.score) {
                        var t, n, o, i, u, a, l = null !== (i = null !== (o = r.sortable) && void 0 !== o ? o : null === (t = r.comparator) || void 0 === t ? void 0 : t.toLocaleLowerCase()) && void 0 !== i ? i : "",
                            c = null !== (a = null !== (u = r.sortable) && void 0 !== u ? u : null === (n = e.comparator) || void 0 === n ? void 0 : n.toLocaleLowerCase()) && void 0 !== a ? a : "";
                        if (l < c) return -1;
                        if (l > c) return 1
                    }
                    return e.score - r.score
                }

                function v(r, e, t) {
                    e in r ? Object.defineProperty(r, e, {
                        value: t,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[e] = t;
                    return r
                }

                function y(r) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = null != arguments[e] ? arguments[e] : {},
                            n = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(r) {
                            return Object.getOwnPropertyDescriptor(t, r).enumerable
                        }))));
                        n.forEach((function(e) {
                            v(r, e, t[e])
                        }))
                    }
                    return r
                }

                function b(r, e) {
                    e = null != e ? e : {};
                    Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(e)) : function(r, e) {
                        var t = Object.keys(r);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(r);
                            e && (n = n.filter((function(e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable
                            })));
                            t.push.apply(t, n)
                        }
                        return t
                    }(Object(e)).forEach((function(t) {
                        Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(e, t))
                    }));
                    return r
                }

                function m(r, e) {
                    if (null == r) return {};
                    var t, n, o = function(r, e) {
                        if (null == r) return {};
                        var t, n, o = {},
                            i = Object.keys(r);
                        for (n = 0; n < i.length; n++) {
                            t = i[n];
                            e.indexOf(t) >= 0 || (o[t] = r[t])
                        }
                        return o
                    }(r, e);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(r);
                        for (n = 0; n < i.length; n++) {
                            t = i[n];
                            e.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(r, t) && (o[t] = r[t])
                        }
                    }
                    return o
                }
                var g = "UPDATE_USERS",
                    h = "USER_RESULTS",
                    O = "QUERY_SET",
                    w = "QUERY_CLEAR",
                    j = new Map,
                    E = new Map,
                    S = new Set,
                    x = "username",
                    P = "friendNickname",
                    k = "globalName";
                var L = u()((function() {
                    if (0 !== S.size) {
                        S.forEach((function(r) {
                            var e = E.get(r);
                            null != e && C(r, e)
                        }));
                        S.clear()
                    }
                }), 100, {
                    leading: !0,
                    trailing: !0
                });

                function T(r, e) {
                    return r * (null != e ? e : 1)
                }

                function C(r, e) {
                    var t, n, i = e.query,
                        u = e.limit,
                        l = e.filters,
                        c = e.blacklist,
                        f = e.whitelist,
                        v = null != l && l.strict && null !== (t = l.guild) && void 0 !== t ? t : null,
                        m = null !== (n = e.boosters) && void 0 !== n ? n : {},
                        g = new RegExp("^".concat(a(i)), "i"),
                        h = new RegExp(a(i), "i"),
                        O = [];
                    if ("" === i) return A(i, O, r);
                    var w = i.toLocaleLowerCase(),
                        E = p(w);
                    j.forEach((function(r, e) {
                        if (function(r, e, t, n, o) {
                                if (null != n && n.indexOf(r) >= 0) return !1;
                                if (null != o && o.indexOf(r) >= 0) return !0;
                                if (null != t) {
                                    var i = t.friends,
                                        u = t.guild;
                                    return !0 === i && !0 === e.isFriend || null != u && (null != e[u] || null === e[u])
                                }
                                return !0
                            }(e, r, l, c, f)) {
                            var t, n = r.username;
                            e === i ? t = {
                                id: e,
                                username: n,
                                comparator: e,
                                score: T(10, m[e])
                            } : Object.keys(r).forEach((function(i) {
                                var u = r[i];
                                if ("boolean" != typeof u && null != u && (null == v || i === x || i === P || i === k || v === i)) {
                                    var a, l = s(u.toLocaleLowerCase());
                                    g.test(u) ? a = {
                                        comparator: u,
                                        score: T(10, m[e])
                                    } : h.test(u) ? a = {
                                        comparator: u,
                                        score: T(5, m[e])
                                    } : (o()(w, l) || o()(E, p(l))) && (a = {
                                        comparator: u,
                                        score: T(1, m[e])
                                    });
                                    null != a && (null == t || t.score < a.score) && (t = b(y({}, a), {
                                        id: e,
                                        username: n
                                    }))
                                }
                            }));
                            null != t && O.push(t)
                        }
                    }));
                    O.sort(d);
                    O.length > u && (O.length = u);
                    A(i, O, r)
                }

                function A(r, e, t) {
                    var n = {
                        type: h,
                        uuid: t,
                        payload: {
                            query: r,
                            results: e
                        }
                    };
                    self.postMessage(n)
                }
                self.addEventListener("message", (function(r) {
                    var e = r.data;
                    if (null == e || null == e.type) throw new Error("Invalid data");
                    switch (e.type) {
                        case g:
                            return function(r) {
                                var e = r.payload,
                                    t = !1,
                                    n = new Set;
                                e.forEach((function(r) {
                                    var e, o = r.id,
                                        i = m(r, ["id"]),
                                        u = null !== (e = j.get(o)) && void 0 !== e ? e : null,
                                        a = y({}, u, i);
                                    j.set(o, a);
                                    if (E.size > 0) {
                                        a.isFriend === (null == u ? void 0 : u.isFriend) && a.friendNickname === (null == u ? void 0 : u.friendNickname) || (t = !0);
                                        Object.keys(a).forEach((function(r) {
                                            "isBot" !== r && "isFriend" !== r && r !== x && r !== P && r !== k && n.add(r)
                                        }))
                                    }
                                }));
                                E.forEach((function(r, e) {
                                    var o = r.filters;
                                    (null == o || o.friends === t || n.has(o.guild)) && S.add(e)
                                }));
                                L()
                            }(e);
                        case O:
                            return function(r) {
                                var e = r.uuid,
                                    t = r.payload;
                                E.set(e, t);
                                C(e, t)
                            }(e);
                        case w:
                            return function(r) {
                                var e = r.uuid;
                                E.delete(e);
                                S.delete(e);
                                0 === S.size && L.cancel()
                            }(e)
                    }
                }))
            }
        },
        n = {};

    function o(r) {
        var e = n[r];
        if (void 0 !== e) return e.exports;
        var i = n[r] = {
            exports: {}
        };
        t[r](i, i.exports, o);
        return i.exports
    }
    o.m = t;
    o.x = () => {
        var r = o.O(void 0, [85157], (() => o(644829)));
        return r = o.O(r)
    };
    r = [], o.O = (e, t, n, i) => {
        if (!t) {
            var u = 1 / 0;
            for (f = 0; f < r.length; f++) {
                for (var [t, n, i] = r[f], a = !0, l = 0; l < t.length; l++)
                    if ((!1 & i || u >= i) && Object.keys(o.O).every((r => o.O[r](t[l])))) t.splice(l--, 1);
                    else {
                        a = !1;
                        i < u && (u = i)
                    } if (a) {
                    r.splice(f--, 1);
                    var c = n();
                    void 0 !== c && (e = c)
                }
            }
            return e
        }
        i = i || 0;
        for (var f = r.length; f > 0 && r[f - 1][2] > i; f--) r[f] = r[f - 1];
        r[f] = [t, n, i]
    };
    o.n = r => {
        var e = r && r.__esModule ? () => r.default : () => r;
        o.d(e, {
            a: e
        });
        return e
    };
    o.d = (r, e) => {
        for (var t in e) o.o(e, t) && !o.o(r, t) && Object.defineProperty(r, t, {
            enumerable: !0,
            get: e[t]
        })
    };
    (() => {
        o.f = {};
        o.e = r => Promise.all(Object.keys(o.f).reduce(((e, t) => {
            o.f[t](r, e);
            return e
        }), []))
    })();
    o.u = r => "c4052d5851654f1d202e.js";
    o.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (r) {
            if ("object" == typeof window) return window
        }
    }();
    o.o = (r, e) => Object.prototype.hasOwnProperty.call(r, e);
    o.p = "/assets/";
    (() => {
        var r = {
            44829: 1
        };
        o.f.i = (e, t) => {
            r[e] || importScripts(o.p + o.u(e))
        };
        var e = this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || [],
            t = e.push.bind(e);
        e.push = e => {
            var [n, i, u] = e;
            for (var a in i) o.o(i, a) && (o.m[a] = i[a]);
            u && u(o);
            for (; n.length;) r[n.pop()] = 1;
            t(e)
        }
    })();
    e = o.x, o.x = () => o.e(85157).then(e);
    o.x()
})();