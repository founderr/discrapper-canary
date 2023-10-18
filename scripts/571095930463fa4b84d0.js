(() => {
    "use strict";
    var e, r, t = {
            749252: (e, r, t) => {
                var n = t(824390),
                    o = t.n(n),
                    i = t(23279),
                    l = t.n(i);
                const a = function(e) {
                    return e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
                };
                var u = t(712861);

                function c(e, r) {
                    if (e.score === r.score) {
                        var t, n, o, i, l, a, u = null !== (i = null !== (o = e.sortable) && void 0 !== o ? o : null === (t = e.comparator) || void 0 === t ? void 0 : t.toLocaleLowerCase()) && void 0 !== i ? i : "",
                            c = null !== (a = null !== (l = e.sortable) && void 0 !== l ? l : null === (n = r.comparator) || void 0 === n ? void 0 : n.toLocaleLowerCase()) && void 0 !== a ? a : "";
                        if (u < c) return -1;
                        if (u > c) return 1
                    }
                    return r.score - e.score
                }

                function s(e, r, t) {
                    r in e ? Object.defineProperty(e, r, {
                        value: t,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[r] = t;
                    return e
                }

                function f(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = null != arguments[r] ? arguments[r] : {},
                            n = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        n.forEach((function(r) {
                            s(e, r, t[r])
                        }))
                    }
                    return e
                }

                function p(e, r) {
                    r = null != r ? r : {};
                    Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(e, r) {
                        var t = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(e);
                            r && (n = n.filter((function(r) {
                                return Object.getOwnPropertyDescriptor(e, r).enumerable
                            })));
                            t.push.apply(t, n)
                        }
                        return t
                    }(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }));
                    return e
                }

                function d(e, r) {
                    if (null == e) return {};
                    var t, n, o = function(e, r) {
                        if (null == e) return {};
                        var t, n, o = {},
                            i = Object.keys(e);
                        for (n = 0; n < i.length; n++) {
                            t = i[n];
                            r.indexOf(t) >= 0 || (o[t] = e[t])
                        }
                        return o
                    }(e, r);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        for (n = 0; n < i.length; n++) {
                            t = i[n];
                            r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                        }
                    }
                    return o
                }
                var v = "UPDATE_USERS",
                    b = "USER_RESULTS",
                    y = "QUERY_SET",
                    O = "QUERY_CLEAR",
                    g = new Map,
                    h = new Map,
                    w = new Set,
                    m = "username",
                    j = "friendNickname",
                    E = "globalName";
                var P = l()((function() {
                    if (0 !== w.size) {
                        w.forEach((function(e) {
                            var r = h.get(e);
                            null != r && S(e, r)
                        }));
                        w.clear()
                    }
                }), 100, {
                    leading: !0,
                    trailing: !0
                });

                function k(e, r) {
                    return e * (null != r ? r : 1)
                }

                function S(e, r) {
                    var t, n, i = r.query,
                        l = r.limit,
                        s = r.filters,
                        d = r.blacklist,
                        v = r.whitelist,
                        b = null != s && s.strict && null !== (t = s.guild) && void 0 !== t ? t : null,
                        y = null !== (n = r.boosters) && void 0 !== n ? n : {},
                        O = new RegExp("^".concat(a(i)), "i"),
                        h = new RegExp(a(i), "i"),
                        w = [];
                    if ("" === i) return x(i, w, e);
                    var P = i.toLocaleLowerCase(),
                        S = (0, u.Fv)(P);
                    g.forEach((function(e, r) {
                        if (function(e, r, t, n, o) {
                                if (null != n && n.indexOf(e) >= 0) return !1;
                                if (null != o && o.indexOf(e) >= 0) return !0;
                                if (null != t) {
                                    var i = t.friends,
                                        l = t.guild;
                                    return !0 === i && !0 === r.isFriend || null != l && (null != r[l] || null === r[l])
                                }
                                return !0
                            }(r, e, s, d, v)) {
                            var t, n = e.username;
                            r === i ? t = {
                                id: r,
                                username: n,
                                comparator: r,
                                score: k(10, y[r])
                            } : Object.keys(e).forEach((function(i) {
                                var l = e[i];
                                if ("boolean" != typeof l && null != l && (null == b || i === m || i === j || i === E || b === i)) {
                                    var a, c = (0, u._I)(l.toLocaleLowerCase());
                                    O.test(l) ? a = {
                                        comparator: l,
                                        score: k(10, y[r])
                                    } : h.test(l) ? a = {
                                        comparator: l,
                                        score: k(5, y[r])
                                    } : (o()(P, c) || o()(S, (0, u.Fv)(c))) && (a = {
                                        comparator: l,
                                        score: k(1, y[r])
                                    });
                                    null != a && (null == t || t.score < a.score) && (t = p(f({}, a), {
                                        id: r,
                                        username: n
                                    }))
                                }
                            }));
                            null != t && w.push(t)
                        }
                    }));
                    w.sort(c);
                    w.length > l && (w.length = l);
                    x(i, w, e)
                }

                function x(e, r, t) {
                    var n = {
                        type: b,
                        uuid: t,
                        payload: {
                            query: e,
                            results: r
                        }
                    };
                    self.postMessage(n)
                }
                self.addEventListener("message", (function(e) {
                    var r = e.data;
                    if (null == r || null == r.type) throw new Error("Invalid data");
                    switch (r.type) {
                        case v:
                            return function(e) {
                                var r = e.payload,
                                    t = !1,
                                    n = new Set;
                                r.forEach((function(e) {
                                    var r, o = e.id,
                                        i = d(e, ["id"]),
                                        l = null !== (r = g.get(o)) && void 0 !== r ? r : null,
                                        a = f({}, l, i);
                                    g.set(o, a);
                                    if (h.size > 0) {
                                        a.isFriend === (null == l ? void 0 : l.isFriend) && a.friendNickname === (null == l ? void 0 : l.friendNickname) || (t = !0);
                                        Object.keys(a).forEach((function(e) {
                                            "isBot" !== e && "isFriend" !== e && e !== m && e !== j && e !== E && n.add(e)
                                        }))
                                    }
                                }));
                                h.forEach((function(e, r) {
                                    var o = e.filters;
                                    (null == o || o.friends === t || n.has(o.guild)) && w.add(r)
                                }));
                                P()
                            }(r);
                        case y:
                            return function(e) {
                                var r = e.uuid,
                                    t = e.payload;
                                h.set(r, t);
                                S(r, t)
                            }(r);
                        case O:
                            return function(e) {
                                var r = e.uuid;
                                h.delete(r);
                                w.delete(r);
                                0 === w.size && P.cancel()
                            }(r)
                    }
                }))
            }
        },
        n = {};

    function o(e) {
        var r = n[e];
        if (void 0 !== r) return r.exports;
        var i = n[e] = {
            exports: {}
        };
        t[e](i, i.exports, o);
        return i.exports
    }
    o.m = t;
    o.x = () => {
        var e = o.O(void 0, [70065], (() => o(749252)));
        return e = o.O(e)
    };
    e = [], o.O = (r, t, n, i) => {
        if (!t) {
            var l = 1 / 0;
            for (s = 0; s < e.length; s++) {
                for (var [t, n, i] = e[s], a = !0, u = 0; u < t.length; u++)
                    if ((!1 & i || l >= i) && Object.keys(o.O).every((e => o.O[e](t[u])))) t.splice(u--, 1);
                    else {
                        a = !1;
                        i < l && (l = i)
                    } if (a) {
                    e.splice(s--, 1);
                    var c = n();
                    void 0 !== c && (r = c)
                }
            }
            return r
        }
        i = i || 0;
        for (var s = e.length; s > 0 && e[s - 1][2] > i; s--) e[s] = e[s - 1];
        e[s] = [t, n, i]
    };
    o.n = e => {
        var r = e && e.__esModule ? () => e.default : () => e;
        o.d(r, {
            a: r
        });
        return r
    };
    o.d = (e, r) => {
        for (var t in r) o.o(r, t) && !o.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: r[t]
        })
    };
    (() => {
        o.f = {};
        o.e = e => Promise.all(Object.keys(o.f).reduce(((r, t) => {
            o.f[t](e, r);
            return r
        }), []))
    })();
    o.u = e => "63f0e1c5753a1d1932e9.js";
    o.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }();
    o.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r);
    o.p = "/assets/";
    (() => {
        var e = {
            49252: 1
        };
        o.f.i = (r, t) => {
            e[r] || importScripts(o.p + o.u(r))
        };
        var r = this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || [],
            t = r.push.bind(r);
        r.push = r => {
            var [n, i, l] = r;
            for (var a in i) o.o(i, a) && (o.m[a] = i[a]);
            l && l(o);
            for (; n.length;) e[n.pop()] = 1;
            t(r)
        }
    })();
    r = o.x, o.x = () => o.e(70065).then(r);
    o.x()
})();