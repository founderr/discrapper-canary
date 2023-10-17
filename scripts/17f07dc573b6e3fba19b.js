(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [49092], {
        444020: e => {
            "use strict";
            var t = "%[a-f0-9]{2}",
                r = new RegExp("(" + t + ")|([^%]+?)", "gi"),
                n = new RegExp("(" + t + ")+", "gi");

            function o(e, t) {
                try {
                    return [decodeURIComponent(e.join(""))]
                } catch (e) {}
                if (1 === e.length) return e;
                t = t || 1;
                var r = e.slice(0, t),
                    n = e.slice(t);
                return Array.prototype.concat.call([], o(r), o(n))
            }

            function c(e) {
                try {
                    return decodeURIComponent(e)
                } catch (c) {
                    for (var t = e.match(r) || [], n = 1; n < t.length; n++) t = (e = o(t, n).join("")).match(r) || [];
                    return e
                }
            }
            e.exports = function(e) {
                if ("string" != typeof e) throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
                try {
                    e = e.replace(/\+/g, " ");
                    return decodeURIComponent(e)
                } catch (t) {
                    return function(e) {
                        for (var t = {
                                "%FE%FF": "��",
                                "%FF%FE": "��"
                            }, r = n.exec(e); r;) {
                            try {
                                t[r[0]] = decodeURIComponent(r[0])
                            } catch (e) {
                                var o = c(r[0]);
                                o !== r[0] && (t[r[0]] = o)
                            }
                            r = n.exec(e)
                        }
                        t["%C2"] = "�";
                        for (var i = Object.keys(t), a = 0; a < i.length; a++) {
                            var l = i[a];
                            e = e.replace(new RegExp(l, "g"), t[l])
                        }
                        return e
                    }(e)
                }
            }
        },
        727157: (e, t, r) => {
            e.exports = r.p + "543e3b4a61955716f951463b7cd1a18a.png"
        },
        727418: e => {
            "use strict";
            var t = Object.getOwnPropertySymbols,
                r = Object.prototype.hasOwnProperty,
                n = Object.prototype.propertyIsEnumerable;

            function o(e) {
                if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(e)
            }
            e.exports = function() {
                try {
                    if (!Object.assign) return !1;
                    var e = new String("abc");
                    e[5] = "de";
                    if ("5" === Object.getOwnPropertyNames(e)[0]) return !1;
                    for (var t = {}, r = 0; r < 10; r++) t["_" + String.fromCharCode(r)] = r;
                    if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
                            return t[e]
                        })).join("")) return !1;
                    var n = {};
                    "abcdefghijklmnopqrst".split("").forEach((function(e) {
                        n[e] = e
                    }));
                    return "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
                } catch (e) {
                    return !1
                }
            }() ? Object.assign : function(e, c) {
                for (var i, a, l = o(e), u = 1; u < arguments.length; u++) {
                    i = Object(arguments[u]);
                    for (var s in i) r.call(i, s) && (l[s] = i[s]);
                    if (t) {
                        a = t(i);
                        for (var f = 0; f < a.length; f++) n.call(i, a[f]) && (l[a[f]] = i[a[f]])
                    }
                }
                return l
            }
        },
        517563: (e, t, r) => {
            "use strict";
            var n = r(970610),
                o = r(727418),
                c = r(444020);

            function i(e, t) {
                return t.encode ? t.strict ? n(e) : encodeURIComponent(e) : e
            }

            function a(e) {
                return Array.isArray(e) ? e.sort() : "object" == typeof e ? a(Object.keys(e)).sort((function(e, t) {
                    return Number(e) - Number(t)
                })).map((function(t) {
                    return e[t]
                })) : e
            }
            t.extract = function(e) {
                return e.split("?")[1] || ""
            };
            t.parse = function(e, t) {
                var r = function(e) {
                        var t;
                        switch (e.arrayFormat) {
                            case "index":
                                return function(e, r, n) {
                                    t = /\[(\d*)\]$/.exec(e);
                                    e = e.replace(/\[\d*\]$/, "");
                                    if (t) {
                                        void 0 === n[e] && (n[e] = {});
                                        n[e][t[1]] = r
                                    } else n[e] = r
                                };
                            case "bracket":
                                return function(e, r, n) {
                                    t = /(\[\])$/.exec(e);
                                    e = e.replace(/\[\]$/, "");
                                    t ? void 0 !== n[e] ? n[e] = [].concat(n[e], r) : n[e] = [r] : n[e] = r
                                };
                            default:
                                return function(e, t, r) {
                                    void 0 !== r[e] ? r[e] = [].concat(r[e], t) : r[e] = t
                                }
                        }
                    }(t = o({
                        arrayFormat: "none"
                    }, t)),
                    n = Object.create(null);
                if ("string" != typeof e) return n;
                if (!(e = e.trim().replace(/^(\?|#|&)/, ""))) return n;
                e.split("&").forEach((function(e) {
                    var t = e.replace(/\+/g, " ").split("="),
                        o = t.shift(),
                        i = t.length > 0 ? t.join("=") : void 0;
                    i = void 0 === i ? null : c(i);
                    r(c(o), i, n)
                }));
                return Object.keys(n).sort().reduce((function(e, t) {
                    var r = n[t];
                    Boolean(r) && "object" == typeof r && !Array.isArray(r) ? e[t] = a(r) : e[t] = r;
                    return e
                }), Object.create(null))
            };
            t.stringify = function(e, t) {
                var r = function(e) {
                    switch (e.arrayFormat) {
                        case "index":
                            return function(t, r, n) {
                                return null === r ? [i(t, e), "[", n, "]"].join("") : [i(t, e), "[", i(n, e), "]=", i(r, e)].join("")
                            };
                        case "bracket":
                            return function(t, r) {
                                return null === r ? i(t, e) : [i(t, e), "[]=", i(r, e)].join("")
                            };
                        default:
                            return function(t, r) {
                                return null === r ? i(t, e) : [i(t, e), "=", i(r, e)].join("")
                            }
                    }
                }(t = o({
                    encode: !0,
                    strict: !0,
                    arrayFormat: "none"
                }, t));
                return e ? Object.keys(e).sort().map((function(n) {
                    var o = e[n];
                    if (void 0 === o) return "";
                    if (null === o) return i(n, t);
                    if (Array.isArray(o)) {
                        var c = [];
                        o.slice().forEach((function(e) {
                            void 0 !== e && c.push(r(n, e, c.length))
                        }));
                        return c.join("&")
                    }
                    return i(n, t) + "=" + i(o, t)
                })).filter((function(e) {
                    return e.length > 0
                })).join("&") : ""
            }
        },
        970610: e => {
            "use strict";
            e.exports = function(e) {
                return encodeURIComponent(e).replace(/[!'()*]/g, (function(e) {
                    return "%" + e.charCodeAt(0).toString(16).toUpperCase()
                }))
            }
        },
        285991: (e, t, r) => {
            "use strict";
            r.d(t, {
                k: () => d,
                Lr: () => S,
                mB: () => T,
                PR: () => y,
                In: () => b,
                Sr: () => h
            });
            var n = r(441143),
                o = r.n(n),
                c = r(495414),
                i = r(281110),
                a = r(744564),
                l = r(722406),
                u = r(473903),
                s = r(2590);

            function f(e, t, r, n, o, c, i) {
                try {
                    var a = e[c](i),
                        l = a.value
                } catch (e) {
                    r(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(n, o)
            }

            function _(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var c = e.apply(t, r);

                        function i(e) {
                            f(c, n, o, i, a, "next", e)
                        }

                        function a(e) {
                            f(c, n, o, i, a, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function O(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        O(e, t, r[t])
                    }))
                }
                return e
            }
            var E = function(e, t) {
                    var r, n, o, c, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return c = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (c[Symbol.iterator] = function() {
                        return this
                    }), c;

                    function a(c) {
                        return function(a) {
                            return function(c) {
                                if (r) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (r = 1, n && (o = 2 & c[0] ? n.return : c[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, c[1])).done) return o;
                                    (n = 0, o) && (c = [2 & c[0], o.value]);
                                    switch (c[0]) {
                                        case 0:
                                        case 1:
                                            o = c;
                                            break;
                                        case 4:
                                            i.label++;
                                            return {
                                                value: c[1], done: !1
                                            };
                                        case 5:
                                            i.label++;
                                            n = c[1];
                                            c = [0];
                                            continue;
                                        case 7:
                                            c = i.ops.pop();
                                            i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = i.trys, o = o.length > 0 && o[o.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                                i.label = c[1];
                                                break
                                            }
                                            if (6 === c[0] && i.label < o[1]) {
                                                i.label = o[1];
                                                o = c;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2];
                                                i.ops.push(c);
                                                break
                                            }
                                            o[2] && i.ops.pop();
                                            i.trys.pop();
                                            continue
                                    }
                                    c = t.call(e, i)
                                } catch (e) {
                                    c = [6, e];
                                    n = 0
                                } finally {
                                    r = o = 0
                                }
                                if (5 & c[0]) throw c[1];
                                return {
                                    value: c[0] ? c[1] : void 0,
                                    done: !0
                                }
                            }([c, a])
                        }
                    }
                },
                I = new c.Z("UserProfileModalActionCreators");

            function d() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.withAnalyticsToken,
                    r = void 0 !== t && t;
                return i.ZP.get({
                    url: s.ANM.ME,
                    query: {
                        with_analytics_token: r
                    },
                    oldFormErrors: !0
                }).then((function(e) {
                    a.Z.dispatch({
                        type: "CURRENT_USER_UPDATE",
                        user: e.body,
                        analyticsToken: r ? e.body.analytics_token : void 0
                    });
                    return new l.Z(e.body)
                }))
            }

            function S() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                    t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                return i.ZP.patch({
                    url: s.ANM.USER_AGREEMENTS,
                    body: {
                        terms: e,
                        privacy: t
                    },
                    oldFormErrors: !0
                }).then((function() {
                    return !0
                }), (function() {
                    return !1
                }))
            }

            function T(e, t) {
                var r = u.default.getCurrentUser();
                o()(null != r, "setFlag: user cannot be undefined");
                var n = t ? r.flags | e : r.flags & ~e;
                return i.ZP.patch({
                    url: s.ANM.ME,
                    oldFormErrors: !0,
                    body: {
                        flags: n
                    }
                })
            }

            function y(e) {
                var t = u.default.getUser(e);
                return null != t ? Promise.resolve(t) : i.ZP.get({
                    url: s.ANM.USER(e),
                    oldFormErrors: !0
                }).then((function(t) {
                    a.Z.dispatch({
                        type: "USER_UPDATE",
                        user: t.body
                    });
                    return u.default.getUser(e)
                }))
            }

            function b(e) {
                return N.apply(this, arguments)
            }

            function N() {
                N = _((function(e) {
                    var t, r, n, o, c, l, u, f, _, O = arguments;
                    return E(this, (function(E) {
                        switch (E.label) {
                            case 0:
                                t = O.length > 1 && void 0 !== O[1] ? O[1] : {}, r = t.friendToken, n = t.withMutualGuilds, o = t.withMutualFriendsCount, c = t.guildId, l = t.connectionsRoleId, u = O.length > 2 ? O[2] : void 0;
                                a.Z.dispatch({
                                    type: "USER_PROFILE_FETCH_START",
                                    userId: e
                                });
                                E.label = 1;
                            case 1:
                                E.trys.push([1, 3, , 4]);
                                return [4, i.ZP.get({
                                    url: s.ANM.USER_PROFILE(e),
                                    query: {
                                        friend_token: r,
                                        with_mutual_guilds: n,
                                        with_mutual_friends_count: o,
                                        guild_id: c,
                                        connections_role_id: l
                                    },
                                    oldFormErrors: !0
                                })];
                            case 2:
                                f = E.sent();
                                null == u || u(f.body, c);
                                a.Z.dispatch({
                                    type: "USER_UPDATE",
                                    user: f.body.user
                                });
                                a.Z.dispatch(p({
                                    type: "USER_PROFILE_FETCH_SUCCESS"
                                }, f.body));
                                null != c && null != f.body.guild_member && a.Z.dispatch({
                                    type: "GUILD_MEMBER_PROFILE_UPDATE",
                                    guildId: c,
                                    guildMember: f.body.guild_member
                                });
                                return [2, f.body];
                            case 3:
                                null != (_ = E.sent()) && null != (null == _ ? void 0 : _.body) && I.warn("fetchProfile error: ".concat(_.body.code, " - ").concat(_.body.message));
                                a.Z.dispatch({
                                    type: "USER_PROFILE_FETCH_FAILURE",
                                    userId: e
                                });
                                throw _;
                            case 4:
                                return [2]
                        }
                    }))
                }));
                return N.apply(this, arguments)
            }

            function h(e) {
                return C.apply(this, arguments)
            }

            function C() {
                return (C = _((function(e) {
                    var t, r;
                    return E(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                a.Z.dispatch({
                                    type: "MUTUAL_FRIENDS_FETCH_START",
                                    userId: e
                                });
                                n.label = 1;
                            case 1:
                                n.trys.push([1, 3, , 4]);
                                return [4, i.ZP.get({
                                    url: s.ANM.USER_RELATIONSHIPS(e),
                                    oldFormErrors: !0
                                })];
                            case 2:
                                t = n.sent();
                                a.Z.dispatch({
                                    type: "MUTUAL_FRIENDS_FETCH_SUCCESS",
                                    userId: e,
                                    mutualFriends: t.body
                                });
                                return [3, 4];
                            case 3:
                                null != (null == (r = n.sent()) ? void 0 : r.body) && I.warn("fetchMutualFriends error: ".concat(r.body.code, " - ").concat(r.body.message));
                                a.Z.dispatch({
                                    type: "MUTUAL_FRIENDS_FETCH_FAILURE",
                                    userId: e
                                });
                                throw r;
                            case 4:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        66541: (e, t, r) => {
            "use strict";
            r.d(t, {
                T: () => u
            });
            var n = r(785893),
                o = (r(667294), r(795308)),
                c = r(633878);

            function i(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function a(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function l(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        c = Object.keys(e);
                    for (n = 0; n < c.length; n++) {
                        r = c[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var c = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < c.length; n++) {
                        r = c[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            var u = function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    u = e.height,
                    s = void 0 === u ? 24 : u,
                    f = e.color,
                    _ = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    O = e.colorClass,
                    p = void 0 === O ? "" : O,
                    E = l(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            i(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(E)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof _ ? _ : _.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm1-18a1 1 0 1 0-2 0v7a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V5Z",
                        clipRule: "evenodd",
                        className: p
                    })
                }))
            }
        },
        597209: (e, t, r) => {
            "use strict";
            r.d(t, {
                m: () => u
            });
            var n = r(785893),
                o = (r(667294), r(795308)),
                c = r(633878);

            function i(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function a(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function l(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        c = Object.keys(e);
                    for (n = 0; n < c.length; n++) {
                        r = c[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var c = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < c.length; n++) {
                        r = c[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            var u = function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    u = e.height,
                    s = void 0 === u ? 24 : u,
                    f = e.color,
                    _ = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    O = e.colorClass,
                    p = void 0 === O ? "" : O,
                    E = l(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            i(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(E)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof _ ? _ : _.css,
                        fillRule: "evenodd",
                        d: "M15 8V6a3 3 0 1 0-6 0v2h6ZM7 8H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3h-2V6A5 5 0 0 0 7 6v2Zm6 7.732A2 2 0 0 0 12 12a2 2 0 0 0-1 3.732V17a1 1 0 1 0 2 0v-1.268Z",
                        clipRule: "evenodd",
                        className: p
                    })
                }))
            }
        },
        142643: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => o
            });
            var n;
            ! function(e) {
                e.CHANNEL_CHAT_RESIZABLE_SIDEBAR_RESIZE_HANDLE_WIDTH = "8px";
                e.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE = "485px";
                e.ACTIVITIES_HOME_WHATS_NEW_TILE_WIDTH = "224px";
                e.ACTIVITIES_HOME_WHATS_NEW_HORIZONTAL_MARGIN = "10px";
                e.ACTIVITIES_HOME_HAPPENING_NOW_CARD_WIDTH = "305px";
                e.ACTIVITIES_HOME_HAPPENING_NOW_GAP = "16px";
                e.ACTIVITY_BOOKMARK_EMBED_IMAGE_WIDTH = "356px";
                e.FOLDER_ITEM_ANIMATION_DURATION = "150ms";
                e.FOLDER_ITEM_GUILD_ICON_SIZE = "48px";
                e.GUILD_TOOLTIP_ICON_SIZE = "20px";
                e.GUILD_TOOLTIP_ICON_SIZE_V_2 = "16px";
                e.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING = "2px";
                e.FULL_SCREEN_LAYER_ANIMATION_DURATION = "150ms";
                e.GUILD_SETTINGS_PREMIUM_TIER_STATUS_PROGRESS_WITH_SUBSCRIPTIONS_MARGIN_TOP = "7px";
                e.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_DIMENSIONS = "76px";
                e.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_PADDING = "2px";
                e.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_MARGIN = "0";
                e.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING = "8px";
                e.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE = "32px";
                e.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN = "8px";
                e.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE = "24px";
                e.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE = "1px";
                e.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL = "12px";
                e.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL = "360px";
                e.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM = "446px";
                e.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP = "0";
                e.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS = "8px";
                e.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT = "0";
                e.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM = "0";
                e.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT = "8px";
                e.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT = "30px";
                e.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS = "96px";
                e.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL = "80px";
                e.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING = "2px";
                e.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN = "12px";
                e.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT = "54px";
                e.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT = "32px";
                e.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_PRIMARY_DIMENSIONS = "28px";
                e.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_SECONDARY_DIMENSIONS = "32px";
                e.STICKERS_CONSTANTS_STICKER_DIMENSION = "160px";
                e.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN_SMALL = "4px";
                e.ASPECT_STABLE_IMAGE_CONTAINER_PADDING = "20px";
                e.USER_PROFILE_THEMED_CONTAINER_USER_PROFILE_THEMED_PADDING = "4px";
                e.USER_PROFILE_THEMED_CONTAINER_USER_POPOUT_WIDTH = "340px";
                e.USER_PROFILE_THEMED_CONTAINER_PROFILE_EFFECTS_USER_POPOUT_WIDTH = "280px";
                e.USER_BANNER_PREMIUM_BANNER_HEIGHT_POPOUT = "120px";
                e.USER_BANNER_PREMIUM_BANNER_HEIGHT_NO_BANNER_IMAGE_POPOUT = "90px";
                e.USER_BANNER_BANNER_HEIGHT_POPOUT = "60px";
                e.USER_BANNER_PREMIUM_BANNER_HEIGHT_PROFILE = "212px";
                e.USER_BANNER_BANNER_HEIGHT_PROFILE = "106px";
                e.USER_BANNER_BANNER_HEIGHT_POMELO = "64px";
                e.USER_BANNER_PREMIUM_BANNER_HEIGHT_SETTINGS = "100px";
                e.USER_BANNER_BANNER_HEIGHT_PANEL = "120px";
                e.USER_BANNER_CANCEL_MODAL_HEIGHT = "42px";
                e.PREMIUM_GUILD_PROGRESS_BAR_PROGRESS_BAR_WIDTH = "24px";
                e.PREMIUM_GUILD_PROGRESS_BAR_TIER_MARKER_SIZE = "16px";
                e.ACTIVITY_SHELF_MODAL_MODAL_PADDING = "80px";
                e.ACTIVITY_SHELF_MODAL_MODAL_WIDTH = "496px";
                e.ACTIVITY_SHELF_MODAL_MODAL_MIN_WIDTH = "496px";
                e.ACTIVITY_SHELF_MODAL_MODAL_MAX_WIDTH = "1024px";
                e.ACTIVITY_SHELF_MODAL_MODAL_MAX_HEIGHT = "720px";
                e.ACTIVITY_SHELF_MODAL_MODAL_ART_HEIGHT = "64px";
                e.ACTIVITY_SHELF_ITEM_ACTIVITY_ITEM_HEIGHT = "230px";
                e.ACTIVITY_SHELF_ITEM_LARGE_ACTIVITY_ITEM_HEIGHT = "143px";
                e.ACTIVITY_SHELF_SLIDE_ACTIVITY_DIRECTORY_SHELF_GRID_GAP = "16px";
                e.LIVE_INDICATOR_BORDER_RADIUS = "16px";
                e.GUILD_PRODUCT_DOWNLOAD_MODAL_HEADER_IMAGE_WIDTH = "119px";
                e.FOLDER_ITEM_GUILD_ICON_MARGIN = "8px";
                e.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_LARGE = "288px";
                e.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_SMALL = "225px";
                e.EMBEDDED_APPLICATION_INVITE_CONTENT_WIDTH = "576px";
                e.GUILD_ROLE_SUBSCRIPTION_CARD_BASIC_INFO_TIER_IMAGE_SIZE = "80px";
                e.GUILD_ROLE_SUBSCRIPTION_CARD_BASIC_INFO_TIER_IMAGE_SIZE_MOBILE = "48px";
                e.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH = "1024px";
                e.GUILD_COUNT_SMALL_ICON_SIZE = "16px";
                e.GUILD_COUNT_LARGE_ICON_SIZE = "20px";
                e.GUILD_BOOSTING_SIDEBAR_DISPLAY_CONDITIONAL_BOTTOM_MARGIN = "12px";
                e.USER_PREMIUM_GUILD_SUBSCRIPTION_EASTER_EGG_SIZE = "196px";
                e.APPLICATION_SUBSCRIPTION_CARD_LISTING_IMAGE_SIZE = "40px";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL = "4px";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT = "8px";
                e.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE = "32px";
                e.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL = "8px";
                e.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE = "24px";
                e.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL = "2px";
                e.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING = "4px";
                e.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE = "1px";
                e.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL = "12px";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL = "4px";
                e.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE = "24px";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP = "0";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT = "0";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM = "8px";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP = "8px";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM = "12px";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_PREMIUM_UPSELL_HEIGHT = "54px";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_PREMIUM_UPSELL_MARGIN_TOP = "16px";
                e.VOICE_WIDGET_TOP_MARGIN = "var(--custom-widget-bar-height) + calc(2 * var(--custom-widget-bar-padding))";
                e.EXPRESSION_SUGGESTIONS_CONTAINER_PADDING = "8px";
                e.EXPRESSION_SUGGESTIONS_STICKER_SUGGESTION_SIZE = "48px";
                e.EXPRESSION_SUGGESTIONS_STICKER_SUGGESTION_MARGIN = "8px";
                e.COLLECTION_GALLERY_MEDIA_BREAKPOINT = "1024px";
                e.COLLECTION_GALLERY_COLUMN_CARD_HEIGHT = "600px";
                e.COLLECTION_GALLERY_ROW_CARD_HEIGHT = "283px";
                e.COLLECTION_LIST_CARD_GAP = "16px";
                e.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_OVERVIEW_SETTINGS_MAX_WIDTH = "520px";
                e.IMPORT_BENEFITS_MODAL_ROLE_ICON_SIZE = "40px";
                e.ROLE_ICON_UPLOADER_ICON_SIZE = "24px";
                e.GRADIENT_PROGRESS_NOTCH_WIDTH = "8px";
                e.GAME_LIST_ROW_MIN_HEIGHT = "62px";
                e.GAME_LIST_LINKED_TO_GLOW_DURATION = "2000ms";
                e.INTERACTION_IFRAME_MODAL_MODAL_MIN_WIDTH = "320px";
                e.INTERACTION_IFRAME_MODAL_MODAL_MAX_WIDTH = "1280px";
                e.INTERACTION_IFRAME_MODAL_MODAL_MARGIN = "80px";
                e.INTERACTION_IFRAME_MODAL_MODAL_HEADER_HEIGHT = "52px";
                e.APPLICATION_DIRECTORY_PROFILE_ICON_SIZE = "122px"
            }(n || (n = {}));
            const o = n
        },
        13174: (e, t, r) => {
            "use strict";
            r.d(t, {
                e: () => n,
                Z: () => c
            });
            var n, o = r(260561);
            ! function(e) {
                e.ALLOWED = "allowed";
                e.DEFAULT = "default"
            }(n || (n = {}));
            const c = (0, o.B)({
                kind: "user",
                id: "2023-08_user_apps",
                label: "Allow user app commands",
                defaultConfig: {
                    userAppsTreatment: n.DEFAULT
                },
                treatments: [{
                    id: 1,
                    label: "Allow user app commands",
                    config: {
                        userAppsTreatment: n.ALLOWED
                    }
                }]
            })
        },
        175072: (e, t, r) => {
            "use strict";
            r.d(t, {
                w: () => n,
                H: () => o
            });
            var n, o;
            ! function(e) {
                e[e.GAME = 1] = "GAME";
                e[e.TICKETED_EVENTS = 3] = "TICKETED_EVENTS";
                e[e.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS"
            }(n || (n = {}));
            ! function(e) {
                e[e.BOT = 0] = "BOT";
                e[e.SERVER = 1] = "SERVER";
                e[e.SYSTEM_DM = 2] = "SYSTEM_DM";
                e[e.OFFICIAL = 3] = "OFFICIAL";
                e[e.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM";
                e[e.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER";
                e[e.AI = 6] = "AI";
                e[e.REMIX = 7] = "REMIX"
            }(o || (o = {}))
        },
        502079: (e, t, r) => {
            "use strict";
            r.d(t, {
                k4: () => o,
                fA: () => c,
                vp: () => i,
                Bj: () => a,
                H: () => l,
                Ll: () => u,
                GZ: () => s,
                lE: () => f,
                kf: () => _,
                bv: () => O,
                EV: () => p
            });

            function n(e) {
                throw e
            }

            function o(e) {
                e = null !== e ? e : n(new TypeError("Cannot destructure undefined"));
                return !1
            }

            function c(e, t) {
                return !1
            }

            function i(e) {
                return !1
            }

            function a() {
                return !1
            }

            function l() {
                return !1
            }

            function u(e) {
                e = null !== e ? e : n(new TypeError("Cannot destructure undefined"));
                return !1
            }

            function s(e, t) {
                return !1
            }

            function f() {
                return !1
            }

            function _(e) {}

            function O(e) {}

            function p(e) {
                return !1
            }
        },
        239620: (e, t, r) => {
            "use strict";
            r.d(t, {
                mv: () => c,
                xJ: () => i
            });
            var n, o = r(120415),
                c = null;

            function i() {
                return (0, o.Dt)(), null
            }! function(e) {
                e.REMINDER = "reminder";
                e.TOP_MESSAGE_PUSH = "top_messages_push";
                e.TRENDING_CONTENT_PUSH = "trending_content_push"
            }(n || (n = {}))
        },
        757942: (e, t, r) => {
            "use strict";
            r.d(t, {
                O: () => n
            });
            var n;
            ! function(e) {
                e.LANDING = "landing";
                e.PRE_CONNECT = "pre-connect";
                e.PRE_CONNECT_WAITING = "pre-connect-waiting";
                e.DISCORD_CONSENT = "discord-consent";
                e.SUCCESS = "success";
                e.ERROR = "error"
            }(n || (n = {}))
        },
        959153: (e, t, r) => {
            "use strict";
            r.d(t, {
                h: () => y
            });
            var n = r(785893),
                o = r(667294),
                c = r(441143),
                i = r.n(c),
                a = r(304548),
                l = r(579344),
                u = r(296602),
                s = r(933227),
                f = r(107364),
                _ = r(473708),
                O = r(20476),
                p = r.n(O);

            function E(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function I(e, t, r, n, o, c, i) {
                try {
                    var a = e[c](i),
                        l = a.value
                } catch (e) {
                    r(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(n, o)
            }

            function d(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, c = [],
                            i = !0,
                            a = !1;
                        try {
                            for (r = r.call(e); !(i = (n = r.next()).done); i = !0) {
                                c.push(n.value);
                                if (t && c.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                i || null == r.return || r.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return c
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return E(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return E(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var S = function(e, t) {
                    var r, n, o, c, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return c = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (c[Symbol.iterator] = function() {
                        return this
                    }), c;

                    function a(c) {
                        return function(a) {
                            return function(c) {
                                if (r) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (r = 1, n && (o = 2 & c[0] ? n.return : c[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, c[1])).done) return o;
                                    (n = 0, o) && (c = [2 & c[0], o.value]);
                                    switch (c[0]) {
                                        case 0:
                                        case 1:
                                            o = c;
                                            break;
                                        case 4:
                                            i.label++;
                                            return {
                                                value: c[1], done: !1
                                            };
                                        case 5:
                                            i.label++;
                                            n = c[1];
                                            c = [0];
                                            continue;
                                        case 7:
                                            c = i.ops.pop();
                                            i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = i.trys,
                                                    o = o.length > 0 && o[o.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                                i.label = c[1];
                                                break
                                            }
                                            if (6 === c[0] && i.label < o[1]) {
                                                i.label = o[1];
                                                o = c;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2];
                                                i.ops.push(c);
                                                break
                                            }
                                            o[2] && i.ops.pop();
                                            i.trys.pop();
                                            continue
                                    }
                                    c = t.call(e, i)
                                } catch (e) {
                                    c = [6, e];
                                    n = 0
                                } finally {
                                    r = o = 0
                                }
                                if (5 & c[0]) throw c[1];
                                return {
                                    value: c[0] ? c[1] : void 0,
                                    done: !0
                                }
                            }([c, a])
                        }
                    }
                },
                T = new u.Z("TwoWayLinkDiscordConsentWeb");

            function y(e) {
                var t, r, c = e.platformType,
                    u = e.clientId,
                    O = e.scopes,
                    E = e.authToken,
                    y = e.onContinue,
                    b = e.onError,
                    N = e.onClose,
                    h = e.redirectUri,
                    C = d(o.useState(!1), 2),
                    R = C[0],
                    A = C[1],
                    g = o.useCallback((r = (t = function(e) {
                        var t, r, n, o, i;
                        return S(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    t = e.location;
                                    r = E.callbackCode, n = E.callbackState;
                                    a.label = 1;
                                case 1:
                                    a.trys.push([1, 3, , 4]);
                                    return [4, l.Z.completeTwoWayLink(c, t, r, n)];
                                case 2:
                                    o = a.sent();
                                    return [3, 4];
                                case 3:
                                    i = a.sent();
                                    T.error("".concat(c, " link error:"), i);
                                    return [3, 4];
                                case 4:
                                    null != o ? y() : b();
                                    return [2]
                            }
                        }))
                    }, function() {
                        var e = this,
                            r = arguments;
                        return new Promise((function(n, o) {
                            var c = t.apply(e, r);

                            function i(e) {
                                I(c, n, o, i, a, "next", e)
                            }

                            function a(e) {
                                I(c, n, o, i, a, "throw", e)
                            }
                            i(void 0)
                        }))
                    }), function(e) {
                        return r.apply(this, arguments)
                    }), [c, E, y, b]),
                    v = (0, s.useOAuth2AuthorizeForm)({
                        clientId: u,
                        scopes: O,
                        responseType: "code",
                        callback: g,
                        isTrustedName: !0,
                        isEmbeddedFlow: !0,
                        redirectUri: h
                    }),
                    P = v.header,
                    m = v.body,
                    j = v.appDetails,
                    x = v.sendAuthorize,
                    w = o.useCallback((function() {
                        i()(null != x, "sendAuthorize not available");
                        A(!0);
                        x(!0)
                    }), [x]);
                return (0, n.jsxs)("div", {
                    className: p().container,
                    children: [null != N && (0, n.jsx)(a.ModalCloseButton, {
                        className: p().closeButton,
                        onClick: N
                    }), (0, n.jsxs)(a.Scroller, {
                        children: [(0, n.jsx)(a.ModalHeader, {
                            direction: f.Z.Direction.VERTICAL,
                            className: p().header,
                            separator: !1,
                            children: (0, n.jsx)(a.Text, {
                                className: p().stepHeader,
                                variant: "text-xs/bold",
                                color: "header-secondary",
                                children: _.Z.Messages.BIDIRECTIONAL_STEP_HEADER.format({
                                    number: 2,
                                    total: 2
                                })
                            })
                        }), (0, n.jsxs)("div", {
                            className: p().discordConsentBody,
                            children: [P, m, j]
                        }), (0,
                            n.jsx)(a.ModalFooter, {
                            className: p().footer,
                            children: (0, n.jsx)(a.Button, {
                                className: p().footerButton,
                                color: a.Button.Colors.BRAND,
                                submitting: R,
                                onClick: w,
                                children: _.Z.Messages.AUTHORIZE_AND_CONTINUE
                            })
                        })]
                    })]
                })
            }
        },
        227363: (e, t, r) => {
            "use strict";
            r.d(t, {
                C: () => _
            });
            var n = r(785893),
                o = (r(667294), r(304548)),
                c = r(107364),
                i = r(956054),
                a = r(473708),
                l = r(20476),
                u = r.n(l),
                s = r(727157),
                f = r.n(s);

            function _(e) {
                var t = e.onContinue,
                    r = e.onClose,
                    l = e.title,
                    s = e.body;
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)(o.ModalHeader, {
                        direction: c.Z.Direction.VERTICAL,
                        className: u().header,
                        separator: !1,
                        children: [(0, n.jsx)("img", {
                            src: f(),
                            className: u().illustration,
                            width: "254",
                            height: "127",
                            alt: ""
                        }), (0, n.jsx)(o.Heading, {
                            className: u().title,
                            variant: "heading-xl/extrabold",
                            children: l
                        }), null != r && (0, n.jsx)(o.ModalCloseButton, {
                            className: u().closeButton,
                            onClick: r
                        })]
                    }), (0, n.jsx)(o.ModalContent, {
                        className: u().body,
                        paddingFix: !1,
                        children: (0, n.jsx)(o.Text, {
                            tag: "p",
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: s
                        })
                    }), (0,
                        n.jsx)(o.ModalFooter, {
                        className: u().footer,
                        children: (0, n.jsxs)(o.Button, {
                            className: u().footerButton,
                            color: o.Button.Colors.BRAND,
                            onClick: t,
                            children: [a.Z.Messages.TRY_AGAIN, (0, n.jsx)(i.Z, {
                                className: u().launchIcon,
                                width: "16",
                                height: "16"
                            })]
                        })
                    })]
                })
            }
        },
        525493: (e, t, r) => {
            "use strict";
            r.d(t, {
                m: () => f
            });
            var n = r(785893),
                o = (r(667294), r(202351)),
                c = r(304548),
                i = r(629223),
                a = r(107364),
                l = r(473708),
                u = r(20476),
                s = r.n(u);

            function f(e) {
                var t = e.platformType,
                    r = e.onContinue,
                    u = e.onClose,
                    f = e.img,
                    _ = e.headerConnect,
                    O = e.headerReconnect,
                    p = e.body,
                    E = e.learnMoreLink,
                    I = e.valueProps,
                    d = (0, o.e7)([i.Z], (function() {
                        var e = i.Z.getAccount(null, t);
                        return !1 === (null == e ? void 0 : e.twoWayLink)
                    }));
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)(c.ModalHeader, {
                        direction: a.Z.Direction.VERTICAL,
                        className: s().header,
                        separator: !1,
                        children: [(0, n.jsxs)("div", {
                            className: s().illustration,
                            children: [f, " "]
                        }), (0, n.jsx)(c.Heading, {
                            className: s().title,
                            variant: "heading-xl/extrabold",
                            children: d && null != O ? O : _
                        }), (0, n.jsx)(c.ModalCloseButton, {
                            className: s().closeButton,
                            onClick: u
                        })]
                    }), (0, n.jsxs)(c.ModalContent, {
                        className: s().body,
                        paddingFix: !1,
                        children: [(0, n.jsx)(c.Text, {
                            tag: "p",
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: p
                        }), (0, n.jsx)("div", {
                            className: s().valueProps,
                            children: I
                        }), null != E ? (0, n.jsx)(c.Text, {
                            tag: "p",
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            children: l.Z.Messages.CONNECT_CONSOLE_LANDING_BODY_LEARN_MORE.format({
                                helpCenterLink: E
                            })
                        }) : null]
                    }), (0, n.jsx)(c.ModalFooter, {
                        className: s().footer,
                        children: (0, n.jsx)(c.Button, {
                            className: s().footerButton,
                            color: c.Button.Colors.BRAND,
                            onClick: r,
                            children: l.Z.Messages.CONTINUE
                        })
                    })]
                })
            }
        },
        797916: (e, t, r) => {
            "use strict";
            r.d(t, {
                t: () => N
            });
            var n = r(785893),
                o = r(667294),
                c = r(441143),
                i = r.n(c),
                a = r(72190),
                l = r(304548),
                u = r(744564),
                s = r(53645),
                f = r(497842),
                _ = r(296602),
                O = r(107364),
                p = r(956054),
                E = r(473708),
                I = r(20476),
                d = r.n(I);

            function S(e, t, r, n, o, c, i) {
                try {
                    var a = e[c](i),
                        l = a.value
                } catch (e) {
                    r(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(n, o)
            }

            function T(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var c = e.apply(t, r);

                        function i(e) {
                            S(c, n, o, i, a, "next", e)
                        }

                        function a(e) {
                            S(c, n, o, i, a, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }
            var y = function(e, t) {
                    var r, n, o, c, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return c = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (c[Symbol.iterator] = function() {
                        return this
                    }), c;

                    function a(c) {
                        return function(a) {
                            return function(c) {
                                if (r) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (r = 1, n && (o = 2 & c[0] ? n.return : c[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, c[1])).done) return o;
                                    (n = 0, o) && (c = [2 & c[0], o.value]);
                                    switch (c[0]) {
                                        case 0:
                                        case 1:
                                            o = c;
                                            break;
                                        case 4:
                                            i.label++;
                                            return {
                                                value: c[1], done: !1
                                            };
                                        case 5:
                                            i.label++;
                                            n = c[1];
                                            c = [0];
                                            continue;
                                        case 7:
                                            c = i.ops.pop();
                                            i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = i.trys, o = o.length > 0 && o[o.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                                i.label = c[1];
                                                break
                                            }
                                            if (6 === c[0] && i.label < o[1]) {
                                                i.label = o[1];
                                                o = c;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2];
                                                i.ops.push(c);
                                                break
                                            }
                                            o[2] && i.ops.pop();
                                            i.trys.pop();
                                            continue
                                    }
                                    c = t.call(e, i)
                                } catch (e) {
                                    c = [6, e];
                                    n = 0
                                } finally {
                                    r = o = 0
                                }
                                if (5 & c[0]) throw c[1];
                                return {
                                    value: c[0] ? c[1] : void 0,
                                    done: !0
                                }
                            }([c, a])
                        }
                    }
                },
                b = new _.Z("TwoWayLink");

            function N(e) {
                var t = e.platformType,
                    r = e.isWaitingForConnection,
                    c = e.onWaitingForConnection,
                    _ = e.expectedCallbackState,
                    I = e.onAuthToken,
                    S = e.onError,
                    N = e.onClose,
                    h = e.img,
                    C = e.title,
                    R = e.body,
                    A = e.redirectDestination,
                    g = o.useCallback(T((function() {
                        var e, r, n;
                        return y(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    o.trys.push([0, 2, , 3]);
                                    return [4, (0, f.H)(t, {
                                        twoWayLinkType: a.g.DESKTOP
                                    })];
                                case 1:
                                    if (null == (e = o.sent())) throw new Error("missing authorizeURL");
                                    return [3, 3];
                                case 2:
                                    r = o.sent();
                                    b.error("Error opening provider authorize page", r);
                                    S();
                                    return [2];
                                case 3:
                                    n = (0, s.xp)(e).state;
                                    i()(null != n, "Authorize URL state query parameter must be present");
                                    null == c || c(n);
                                    return [2]
                            }
                        }))
                    })), [t, S, c]),
                    v = o.useCallback((function(e) {
                        var r = e.callbackCode,
                            n = e.callbackState;
                        n === _ ? I({
                            callbackCode: r,
                            callbackState: n
                        }) : b.warn("".concat(t, " link: received mismatching callback state!"))
                    }), [t, _, I]);
                o.useEffect((function() {
                    u.Z.subscribe("USER_CONNECTIONS_LINK_CALLBACK", v);
                    return function() {
                        u.Z.unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", v)
                    }
                }), [v]);
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)(l.ModalHeader, {
                        direction: O.Z.Direction.VERTICAL,
                        className: d().header,
                        separator: !1,
                        children: [(0, n.jsx)(l.Text, {
                            className: d().stepHeader,
                            variant: "text-xs/bold",
                            color: "header-secondary",
                            children: E.Z.Messages.BIDIRECTIONAL_STEP_HEADER.format({
                                number: 1,
                                total: 2
                            })
                        }), (0, n.jsxs)("div", {
                            className: d().illustration,
                            children: [h, " "]
                        }), (0, n.jsx)(l.Heading, {
                            className: d().title,
                            variant: "heading-xl/extrabold",
                            children: C
                        }), null != N && (0, n.jsx)(l.ModalCloseButton, {
                            className: d().closeButton,
                            onClick: N
                        })]
                    }), (0, n.jsxs)(l.ModalContent, {
                        className: d().body,
                        paddingFix: !1,
                        children: [(0, n.jsx)(l.Text, {
                            tag: "p",
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: R
                        }), !r && (0, n.jsx)(l.Text, {
                            tag: "p",
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            children: E.Z.Messages.CONSOLE_REDIRECT_NOTICE.format({
                                redirectUrl: A
                            })
                        })]
                    }), (0, n.jsx)(l.ModalFooter, {
                        className: d().footer,
                        children: (0, n.jsxs)(l.Button, {
                            className: d().footerButton,
                            color: r ? l.Button.Colors.PRIMARY : l.Button.Colors.BRAND,
                            onClick: g,
                            children: [r ? E.Z.Messages.RETRY : E.Z.Messages.CONTINUE, (0, n.jsx)(p.Z, {
                                className: d().launchIcon,
                                width: "16",
                                height: "16"
                            })]
                        })
                    })]
                })
            }
        },
        361618: (e, t, r) => {
            "use strict";
            r.d(t, {
                L: () => u
            });
            var n = r(785893),
                o = (r(667294), r(304548)),
                c = r(107364),
                i = r(473708),
                a = r(20476),
                l = r.n(a);

            function u(e) {
                var t = e.onClose,
                    r = e.img,
                    a = e.title,
                    u = e.body,
                    s = e.content;
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)(o.ModalHeader, {
                        direction: c.Z.Direction.VERTICAL,
                        className: l().header,
                        separator: !1,
                        children: [(0, n.jsx)("div", {
                            className: l().illustration,
                            children: r
                        }), (0, n.jsx)(o.Heading, {
                            className: l().title,
                            variant: "heading-xl/extrabold",
                            children: a
                        }), (0, n.jsx)(o.ModalCloseButton, {
                            className: l().closeButton,
                            onClick: t
                        })]
                    }), (0,
                        n.jsxs)(o.ModalContent, {
                        className: l().body,
                        paddingFix: !1,
                        children: [(0, n.jsx)(o.Text, {
                            tag: "p",
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: u
                        }), s]
                    }), (0, n.jsx)(o.ModalFooter, {
                        className: l().footer,
                        children: (0, n.jsx)(o.Button, {
                            className: l().footerButton,
                            color: o.Button.Colors.BRAND,
                            onClick: t,
                            children: i.Z.Messages.DONE
                        })
                    })]
                })
            }
        },
        271663: (e, t, r) => {
            "use strict";
            r.d(t, {
                Ux: () => a,
                pT: () => l,
                yC: () => u
            });
            var n = r(785893),
                o = (r(667294), r(304548)),
                c = r(20476),
                i = r.n(c);

            function a(e) {
                var t = e.text,
                    r = e.children;
                return (0, n.jsxs)("div", {
                    className: i().valueProp,
                    children: [(0, n.jsx)("div", {
                        className: i().valuePropIconContainer,
                        children: r
                    }), (0, n.jsx)(o.Text, {
                        variant: "text-sm/medium",
                        children: t
                    })]
                })
            }

            function l(e) {
                var t = e.title,
                    r = e.bulletPoints,
                    c = e.icon;
                return (0, n.jsxs)("div", {
                    className: i().bulletedValueProp,
                    children: [(0, n.jsx)("div", {
                        className: i().valuePropIconContainer,
                        children: c
                    }), (0, n.jsxs)("div", {
                        className: i().bulletPointsContainer,
                        children: [(0, n.jsx)(o.Text, {
                            variant: "text-md/bold",
                            color: "header-primary",
                            children: t
                        }), (0, n.jsx)("div", {
                            className: i().bulletPoints,
                            children: r.map((function(e) {
                                return (0, n.jsxs)("div", {
                                    className: i().bulletPoint,
                                    children: [(0, n.jsx)(o.Text, {
                                        variant: "text-sm/medium",
                                        color: "header-secondary",
                                        children: "•"
                                    }), (0, n.jsx)(o.Text, {
                                        variant: "text-sm/medium",
                                        color: "header-secondary",
                                        className: i().bulletPointText,
                                        children: e
                                    })]
                                }, e)
                            }))
                        })]
                    })]
                })
            }

            function u(e) {
                var t = e.children;
                return (0, n.jsx)("div", {
                    className: i().valuePropContainer,
                    children: t
                })
            }
        },
        786648: (e, t, r) => {
            "use strict";
            r.d(t, {
                k: () => s
            });
            var n = r(667294),
                o = r(634698),
                c = r(652591),
                i = r(757942),
                a = r(2590);

            function l(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function u(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, c = [],
                            i = !0,
                            a = !1;
                        try {
                            for (r = r.call(e); !(i = (n = r.next()).done); i = !0) {
                                c.push(n.value);
                                if (t && c.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                i || null == r.return || r.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return c
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return l(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return l(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function s(e, t) {
                var r = u(n.useState(i.O.LANDING), 2),
                    l = r[0],
                    s = r[1],
                    f = (0, o.Z)(l),
                    _ = u(n.useState(null), 2),
                    O = _[0],
                    p = _[1],
                    E = u(n.useState(null), 2),
                    I = E[0],
                    d = E[1],
                    S = n.useCallback((function() {
                        switch (l) {
                            case i.O.LANDING:
                                s(i.O.PRE_CONNECT);
                                break;
                            case i.O.DISCORD_CONSENT:
                                s(i.O.SUCCESS);
                                break;
                            case i.O.ERROR:
                                s(i.O.PRE_CONNECT)
                        }
                    }), [l]),
                    T = n.useCallback((function() {
                        p(null);
                        s(i.O.ERROR)
                    }), []),
                    y = n.useCallback((function(e) {
                        p(e);
                        s(i.O.PRE_CONNECT_WAITING)
                    }), []),
                    b = n.useCallback((function(e) {
                        p(null);
                        d(e);
                        s(i.O.DISCORD_CONSENT)
                    }), []);
                n.useEffect((function() {
                    l !== f && c.default.track(a.rMx.ACCOUNT_LINK_STEP, {
                        location_stack: e,
                        previous_step: f,
                        current_step: l,
                        platform_type: t
                    })
                }), [l, f, e, t]);
                return {
                    slide: l,
                    gotoNext: S,
                    gotoError: T,
                    handleWaitingForConnection: y,
                    handleAuthToken: b,
                    expectedCallbackState: O,
                    callbackData: I
                }
            }
        },
        629223: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => w
            });
            var n = r(202351),
                o = r(744564),
                c = r(579344),
                i = r(265688),
                a = r(169376);

            function l(e) {
                l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return l(e)
            }

            function u(e, t) {
                return !t || "object" !== f(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function s(e, t) {
                s = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return s(e, t)
            }
            var f = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function _(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = l(e);
                    if (t) {
                        var o = l(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return u(this, r)
                }
            }
            var O = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && s(e, t)
                    }(r, e);
                    var t = _(r);

                    function r(e) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, r);
                        var n;
                        (n = t.call(this)).id = e.id;
                        n.type = e.type;
                        n.name = e.name;
                        n.revoked = e.revoked || !1;
                        n.integrations = e.integrations || [];
                        n.visibility = e.visibility || 0;
                        n.friendSync = e.friend_sync || !1;
                        n.showActivity = e.show_activity || !1;
                        n.verified = e.verified || !1;
                        n.accessToken = e.access_token || null;
                        n.twoWayLink = e.two_way_link || !1;
                        n.metadata = e.metadata || null;
                        n.metadataVisibility = e.metadata_visibility || 0;
                        return n
                    }
                    r.prototype.toString = function() {
                        return this.name
                    };
                    return r
                }(a.Z),
                p = r(848285),
                E = r(2590);

            function I(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function d(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function S(e) {
                S = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return S(e)
            }

            function T(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        d(e, t, r[t])
                    }))
                }
                return e
            }

            function y(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function b(e, t) {
                return !t || "object" !== h(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function N(e, t) {
                N = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return N(e, t)
            }
            var h = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function C(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = S(e);
                    if (t) {
                        var o = S(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return b(this, r)
                }
            }
            var R = new Set([E.ABu.CONTACTS]),
                A = !0,
                g = [],
                v = [],
                P = {},
                m = {},
                j = function(e) {
                    g = e.filter((function(e) {
                        return !R.has(e.type) && i.Z.isSupported(e.type)
                    }));
                    v = e.filter((function(e) {
                        return R.has(e.type)
                    }));
                    A = !1
                };
            var x = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && N(e, t)
                }(r, e);
                var t = C(r);

                function r() {
                    I(this, r);
                    return t.apply(this, arguments)
                }
                var n = r.prototype;
                n.isJoining = function(e) {
                    return P[e] || !1
                };
                n.isFetching = function() {
                    return A
                };
                n.getAccounts = function() {
                    return g
                };
                n.getLocalAccounts = function() {
                    return v
                };
                n.getAccount = function(e, t) {
                    return g.find((function(r) {
                        return (null == e || r.id === e) && r.type === t
                    }))
                };
                n.getLocalAccount = function(e) {
                    return v.find((function(t) {
                        return t.type === e
                    }))
                };
                n.isSuggestedAccountType = function(e) {
                    return m[e] || !1
                };
                return r
            }(n.ZP.Store);
            x.displayName = "ConnectedAccountsStore";
            const w = new x(o.Z, {
                CONNECTION_OPEN: function(e) {
                    var t = e.connectedAccounts.map((function(e) {
                        return new O(e)
                    }));
                    j(t)
                },
                USER_CONNECTIONS_UPDATE: function(e) {
                    if (e.local && null != e.accounts) {
                        var t = e.accounts.map((function(e) {
                            return new O(y(T({}, e), {
                                integrations: e.integrations.map((function(e) {
                                    return y(T({}, e), {
                                        guild: new p.Z(e.guild)
                                    })
                                }))
                            }))
                        }));
                        j(t)
                    } else c.Z.fetch()
                },
                USER_CONNECTIONS_INTEGRATION_JOINING: function(e) {
                    P[e.integrationId] = e.joining
                },
                USER_CONNECTION_UPDATE: function(e) {
                    var t = e.platformType,
                        r = e.id,
                        n = e.revoked,
                        o = e.accessToken,
                        c = g.find((function(e) {
                            return e.id === r && e.type === t
                        }));
                    if (null == c) return !1;
                    null != n && (c.revoked = n);
                    null != o && (c.accessToken = o)
                }
            })
        },
        449401: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => s
            });
            var n = r(785893),
                o = (r(667294), r(168075)),
                c = r(66541),
                i = r(633878);

            function a(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function l(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function u(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        c = Object.keys(e);
                    for (n = 0; n < c.length; n++) {
                        r = c[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var c = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < c.length; n++) {
                        r = c[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            const s = (0, o.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 16 : t,
                    o = e.height,
                    c = void 0 === o ? 16 : o,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    _ = e.foreground,
                    O = u(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            a(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(O)), {
                    width: r,
                    height: c,
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        d: "M12 2C6.4764 2 2 6.4764 2 12C2 17.5236 6.4764 22 12 22C17.5236 22 22 17.5236 22 12C22 6.4764 17.5236 2 12 2ZM12 5.6C12.4422 5.6 12.8 5.95781 12.8 6.4V11.5376L16.5625 13.7126C16.9453 13.9329 17.0703 14.4173 16.85 14.8001C16.6297 15.183 16.1453 15.3079 15.7625 15.0876L11.6873 12.7376C11.656 12.7251 11.6279 12.7048 11.5998 12.6876C11.3607 12.5486 11.1998 12.2954 11.1998 12.0001V6.4001C11.1998 5.9579 11.5578 5.6 12 5.6Z",
                        fill: f,
                        className: _
                    })
                }))
            }), c.T)
        },
        956054: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => O
            });
            var n = r(785893),
                o = (r(667294), r(168075)),
                c = r(795308),
                i = r(633878);

            function a(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function l(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function u(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        c = Object.keys(e);
                    for (n = 0; n < c.length; n++) {
                        r = c[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var c = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < c.length; n++) {
                        r = c[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function s(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function f(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function _(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        c = Object.keys(e);
                    for (n = 0; n < c.length; n++) {
                        r = c[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var c = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < c.length; n++) {
                        r = c[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            const O = (0, o.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    c = void 0 === o ? 24 : o,
                    a = e.color,
                    l = void 0 === a ? "currentColor" : a,
                    u = e.foreground,
                    O = _(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsxs)("svg", f(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            s(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(O)), {
                    width: r,
                    height: c,
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("path", {
                        className: u,
                        fill: l,
                        d: "M10 5V3H5.375C4.06519 3 3 4.06519 3 5.375V18.625C3 19.936 4.06519 21 5.375 21H18.625C19.936 21 21 19.936 21 18.625V14H19V19H5V5H10Z"
                    }), (0, n.jsx)("path", {
                        className: u,
                        fill: l,
                        d: "M21 2.99902H14V4.99902H17.586L9.29297 13.292L10.707 14.706L19 6.41302V9.99902H21V2.99902Z"
                    })]
                }))
            }), (function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    s = void 0 === o ? 24 : o,
                    f = e.color,
                    _ = void 0 === f ? c.Z.colors.INTERACTIVE_NORMAL : f,
                    O = e.colorClass,
                    p = void 0 === O ? "" : O,
                    E = u(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            a(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(E)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof _ ? _ : _.css,
                        fillRule: "evenodd",
                        d: "M15 2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V4.414l-4.293 4.293a1 1 0 1 1-1.414-1.414L19.586 3H16a1 1 0 0 1-1-1ZM5 2a3 3 0 0 0-3 3v14c0 1.655 1.34 3 2.998 3H19A2.999 2.999 0 0 0 22 19v-6a1 1 0 1 0-2 0v6c0 .553-.447 1-.999 1H4.998A.998.998 0 0 1 4 19V5a1 1 0 0 1 1-1h6a1 1 0 1 0 0-2H5Z",
                        clipRule: "evenodd",
                        className: p
                    })
                }))
            }))
        },
        349491: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => s
            });
            var n = r(785893),
                o = (r(667294), r(168075)),
                c = r(597209),
                i = r(633878);

            function a(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function l(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function u(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        c = Object.keys(e);
                    for (n = 0; n < c.length; n++) {
                        r = c[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var c = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < c.length; n++) {
                        r = c[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            const s = (0, o.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    c = void 0 === o ? 24 : o,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    _ = e.className,
                    O = e.foreground,
                    p = u(e, ["width", "height", "color", "className", "foreground"]);
                return (0, n.jsx)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            a(e, t, r[t])
                        }))
                    }
                    return e
                }({
                    width: r,
                    height: c,
                    className: _,
                    viewBox: "0 0 24 24"
                }, (0, i.Z)(p)), {
                    children: (0, n.jsx)("path", {
                        className: O,
                        fill: f,
                        d: "M17 11V7C17 4.243 14.756 2 12 2C9.242 2 7 4.243 7 7V11C5.897 11 5 11.896 5 13V20C5 21.103 5.897 22 7 22H17C18.103 22 19 21.103 19 20V13C19 11.896 18.103 11 17 11ZM12 18C11.172 18 10.5 17.328 10.5 16.5C10.5 15.672 11.172 15 12 15C12.828 15 13.5 15.672 13.5 16.5C13.5 17.328 12.828 18 12 18ZM15 11H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V11Z",
                        "aria-hidden": !0
                    })
                }))
            }), c.m)
        },
        985651: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => O
            });
            var n = r(785893),
                o = (r(667294), r(168075)),
                c = r(795308),
                i = r(633878);

            function a(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function l(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function u(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        c = Object.keys(e);
                    for (n = 0; n < c.length; n++) {
                        r = c[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var c = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < c.length; n++) {
                        r = c[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function s(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function f(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function _(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        c = Object.keys(e);
                    for (n = 0; n < c.length; n++) {
                        r = c[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var c = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < c.length; n++) {
                        r = c[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            const O = (0, o.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 16 : t,
                    o = e.height,
                    c = void 0 === o ? 16 : o,
                    a = e.color,
                    l = void 0 === a ? "currentColor" : a,
                    u = _(e, ["width", "height", "color"]);
                return (0, n.jsx)("svg", f(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            s(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(u)), {
                    width: r,
                    height: c,
                    viewBox: "0 0 16 15.2",
                    children: (0, n.jsx)("path", {
                        d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z",
                        fill: l
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    s = void 0 === o ? 24 : o,
                    f = e.color,
                    _ = void 0 === f ? c.Z.colors.INTERACTIVE_NORMAL : f,
                    O = e.colorClass,
                    p = void 0 === O ? "" : O,
                    E = u(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            a(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(E)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof _ ? _ : _.css,
                        fillRule: "evenodd",
                        d: "M18.707 7.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L10 14.586l7.293-7.293a1 1 0 0 1 1.414 0Z",
                        clipRule: "evenodd",
                        className: p
                    })
                }))
            }))
        },
        989824: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => c
            });
            var n = r(667294),
                o = {};

            function c(e) {
                var t = (0, n.useRef)(o);
                t.current === o && (t.current = e());
                return t.current
            }
        },
        970112: (e, t, r) => {
            "use strict";
            r.d(t, {
                Ue: () => S,
                U2: () => T
            });

            function n(e) {
                const t = "==".slice(0, (4 - e.length % 4) % 4),
                    r = e.replace(/-/g, "+").replace(/_/g, "/") + t,
                    n = atob(r),
                    o = new ArrayBuffer(n.length),
                    c = new Uint8Array(o);
                for (let e = 0; e < n.length; e++) c[e] = n.charCodeAt(e);
                return o
            }

            function o(e) {
                const t = new Uint8Array(e);
                let r = "";
                for (const e of t) r += String.fromCharCode(e);
                return btoa(r).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
            }
            var c = "copy",
                i = "convert";

            function a(e, t, r) {
                if (t === c) return r;
                if (t === i) return e(r);
                if (t instanceof Array) return r.map((r => a(e, t[0], r)));
                if (t instanceof Object) {
                    const n = {};
                    for (const [o, c] of Object.entries(t)) {
                        if (c.derive) {
                            const e = c.derive(r);
                            void 0 !== e && (r[o] = e)
                        }
                        if (o in r) null != r[o] ? n[o] = a(e, c.schema, r[o]) : n[o] = null;
                        else if (c.required) throw new Error(`Missing key: ${o}`)
                    }
                    return n
                }
            }

            function l(e, t) {
                return {
                    required: !0,
                    schema: e,
                    derive: t
                }
            }

            function u(e) {
                return {
                    required: !0,
                    schema: e
                }
            }

            function s(e) {
                return {
                    required: !1,
                    schema: e
                }
            }
            var f = {
                    type: u(c),
                    id: u(i),
                    transports: s(c)
                },
                _ = {
                    appid: s(c),
                    appidExclude: s(c),
                    credProps: s(c)
                },
                O = {
                    appid: s(c),
                    appidExclude: s(c),
                    credProps: s(c)
                },
                p = {
                    publicKey: u({
                        rp: u(c),
                        user: u({
                            id: u(i),
                            name: u(c),
                            displayName: u(c)
                        }),
                        challenge: u(i),
                        pubKeyCredParams: u(c),
                        timeout: s(c),
                        excludeCredentials: s([f]),
                        authenticatorSelection: s(c),
                        attestation: s(c),
                        extensions: s(_)
                    }),
                    signal: s(c)
                },
                E = {
                    type: u(c),
                    id: u(c),
                    rawId: u(i),
                    authenticatorAttachment: s(c),
                    response: u({
                        clientDataJSON: u(i),
                        attestationObject: u(i),
                        transports: l(c, (e => {
                            var t;
                            return (null == (t = e.getTransports) ? void 0 : t.call(e)) || []
                        }))
                    }),
                    clientExtensionResults: l(O, (e => e.getClientExtensionResults()))
                },
                I = {
                    mediation: s(c),
                    publicKey: u({
                        challenge: u(i),
                        timeout: s(c),
                        rpId: s(c),
                        allowCredentials: s([f]),
                        userVerification: s(c),
                        extensions: s(_)
                    }),
                    signal: s(c)
                },
                d = {
                    type: u(c),
                    id: u(c),
                    rawId: u(i),
                    authenticatorAttachment: s(c),
                    response: u({
                        clientDataJSON: u(i),
                        authenticatorData: u(i),
                        signature: u(i),
                        userHandle: u(i)
                    }),
                    clientExtensionResults: l(O, (e => e.getClientExtensionResults()))
                };
            async function S(e) {
                const t = await navigator.credentials.create(function(e) {
                    return a(n, p, e)
                }(e));
                return function(e) {
                    return a(o, E, e)
                }(t)
            }
            async function T(e) {
                const t = await navigator.credentials.get(function(e) {
                    return a(n, I, e)
                }(e));
                return function(e) {
                    return a(o, d, e)
                }(t)
            }
        }
    }
]);