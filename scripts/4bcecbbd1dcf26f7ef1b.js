(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [96732], {
        444020: e => {
            "use strict";
            var t = "%[a-f0-9]{2}",
                n = new RegExp("(" + t + ")|([^%]+?)", "gi"),
                r = new RegExp("(" + t + ")+", "gi");

            function o(e, t) {
                try {
                    return [decodeURIComponent(e.join(""))]
                } catch (e) {}
                if (1 === e.length) return e;
                t = t || 1;
                var n = e.slice(0, t),
                    r = e.slice(t);
                return Array.prototype.concat.call([], o(n), o(r))
            }

            function i(e) {
                try {
                    return decodeURIComponent(e)
                } catch (i) {
                    for (var t = e.match(n) || [], r = 1; r < t.length; r++) t = (e = o(t, r).join("")).match(n) || [];
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
                            }, n = r.exec(e); n;) {
                            try {
                                t[n[0]] = decodeURIComponent(n[0])
                            } catch (e) {
                                var o = i(n[0]);
                                o !== n[0] && (t[n[0]] = o)
                            }
                            n = r.exec(e)
                        }
                        t["%C2"] = "�";
                        for (var c = Object.keys(t), a = 0; a < c.length; a++) {
                            var l = c[a];
                            e = e.replace(new RegExp(l, "g"), t[l])
                        }
                        return e
                    }(e)
                }
            }
        },
        727157: (e, t, n) => {
            e.exports = n.p + "d6b6938f5fd7a57ba2c4cc632add98d4.png"
        },
        727418: e => {
            "use strict";
            var t = Object.getOwnPropertySymbols,
                n = Object.prototype.hasOwnProperty,
                r = Object.prototype.propertyIsEnumerable;

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
                    for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                    if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
                            return t[e]
                        })).join("")) return !1;
                    var r = {};
                    "abcdefghijklmnopqrst".split("").forEach((function(e) {
                        r[e] = e
                    }));
                    return "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
                } catch (e) {
                    return !1
                }
            }() ? Object.assign : function(e, i) {
                for (var c, a, l = o(e), u = 1; u < arguments.length; u++) {
                    c = Object(arguments[u]);
                    for (var s in c) n.call(c, s) && (l[s] = c[s]);
                    if (t) {
                        a = t(c);
                        for (var f = 0; f < a.length; f++) r.call(c, a[f]) && (l[a[f]] = c[a[f]])
                    }
                }
                return l
            }
        },
        517563: (e, t, n) => {
            "use strict";
            var r = n(970610),
                o = n(727418),
                i = n(444020);

            function c(e, t) {
                return t.encode ? t.strict ? r(e) : encodeURIComponent(e) : e
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
                var n = function(e) {
                        var t;
                        switch (e.arrayFormat) {
                            case "index":
                                return function(e, n, r) {
                                    t = /\[(\d*)\]$/.exec(e);
                                    e = e.replace(/\[\d*\]$/, "");
                                    if (t) {
                                        void 0 === r[e] && (r[e] = {});
                                        r[e][t[1]] = n
                                    } else r[e] = n
                                };
                            case "bracket":
                                return function(e, n, r) {
                                    t = /(\[\])$/.exec(e);
                                    e = e.replace(/\[\]$/, "");
                                    t ? void 0 !== r[e] ? r[e] = [].concat(r[e], n) : r[e] = [n] : r[e] = n
                                };
                            default:
                                return function(e, t, n) {
                                    void 0 !== n[e] ? n[e] = [].concat(n[e], t) : n[e] = t
                                }
                        }
                    }(t = o({
                        arrayFormat: "none"
                    }, t)),
                    r = Object.create(null);
                if ("string" != typeof e) return r;
                if (!(e = e.trim().replace(/^(\?|#|&)/, ""))) return r;
                e.split("&").forEach((function(e) {
                    var t = e.replace(/\+/g, " ").split("="),
                        o = t.shift(),
                        c = t.length > 0 ? t.join("=") : void 0;
                    c = void 0 === c ? null : i(c);
                    n(i(o), c, r)
                }));
                return Object.keys(r).sort().reduce((function(e, t) {
                    var n = r[t];
                    Boolean(n) && "object" == typeof n && !Array.isArray(n) ? e[t] = a(n) : e[t] = n;
                    return e
                }), Object.create(null))
            };
            t.stringify = function(e, t) {
                var n = function(e) {
                    switch (e.arrayFormat) {
                        case "index":
                            return function(t, n, r) {
                                return null === n ? [c(t, e), "[", r, "]"].join("") : [c(t, e), "[", c(r, e), "]=", c(n, e)].join("")
                            };
                        case "bracket":
                            return function(t, n) {
                                return null === n ? c(t, e) : [c(t, e), "[]=", c(n, e)].join("")
                            };
                        default:
                            return function(t, n) {
                                return null === n ? c(t, e) : [c(t, e), "=", c(n, e)].join("")
                            }
                    }
                }(t = o({
                    encode: !0,
                    strict: !0,
                    arrayFormat: "none"
                }, t));
                return e ? Object.keys(e).sort().map((function(r) {
                    var o = e[r];
                    if (void 0 === o) return "";
                    if (null === o) return c(r, t);
                    if (Array.isArray(o)) {
                        var i = [];
                        o.slice().forEach((function(e) {
                            void 0 !== e && i.push(n(r, e, i.length))
                        }));
                        return i.join("&")
                    }
                    return c(r, t) + "=" + c(o, t)
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
        285991: (e, t, n) => {
            "use strict";
            n.d(t, {
                k: () => I,
                Lr: () => y,
                mB: () => T,
                PR: () => S,
                In: () => b,
                Sr: () => v
            });
            var r = n(441143),
                o = n.n(r),
                i = n(495414),
                c = n(281110),
                a = n(744564),
                l = n(722406),
                u = n(473903),
                s = n(2590);

            function f(e, t, n, r, o, i, c) {
                try {
                    var a = e[i](c),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function p(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function c(e) {
                            f(i, r, o, c, a, "next", e)
                        }

                        function a(e) {
                            f(i, r, o, c, a, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }

            function d(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function _(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        d(e, t, n[t])
                    }))
                }
                return e
            }
            var E = function(e, t) {
                    var n, r, o, i, c = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function a(i) {
                        return function(a) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; c;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    (r = 0, o) && (i = [2 & i[0], o.value]);
                                    switch (i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            c.label++;
                                            return {
                                                value: i[1], done: !1
                                            };
                                        case 5:
                                            c.label++;
                                            r = i[1];
                                            i = [0];
                                            continue;
                                        case 7:
                                            i = c.ops.pop();
                                            c.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = c.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                c = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                c.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && c.label < o[1]) {
                                                c.label = o[1];
                                                o = i;
                                                break
                                            }
                                            if (o && c.label < o[2]) {
                                                c.label = o[2];
                                                c.ops.push(i);
                                                break
                                            }
                                            o[2] && c.ops.pop();
                                            c.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, c)
                                } catch (e) {
                                    i = [6, e];
                                    r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, a])
                        }
                    }
                },
                O = new i.Z("UserProfileModalActionCreators");

            function I() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.withAnalyticsToken,
                    n = void 0 !== t && t;
                return c.ZP.get({
                    url: s.ANM.ME,
                    query: {
                        with_analytics_token: n
                    },
                    oldFormErrors: !0
                }).then((function(e) {
                    a.Z.dispatch({
                        type: "CURRENT_USER_UPDATE",
                        user: e.body,
                        analyticsToken: n ? e.body.analytics_token : void 0
                    });
                    return new l.Z(e.body)
                }))
            }

            function y() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                    t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                return c.ZP.patch({
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
                var n = u.default.getCurrentUser();
                o()(null != n, "setFlag: user cannot be undefined");
                var r = t ? n.flags | e : n.flags & ~e;
                return c.ZP.patch({
                    url: s.ANM.ME,
                    oldFormErrors: !0,
                    body: {
                        flags: r
                    }
                })
            }

            function S(e) {
                var t = u.default.getUser(e);
                return null != t ? Promise.resolve(t) : c.ZP.get({
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
                return h.apply(this, arguments)
            }

            function h() {
                h = p((function(e) {
                    var t, n, r, o, i, l, u, f, p, d = arguments;
                    return E(this, (function(E) {
                        switch (E.label) {
                            case 0:
                                t = d.length > 1 && void 0 !== d[1] ? d[1] : {}, n = t.friendToken, r = t.withMutualGuilds, o = t.withMutualFriendsCount, i = t.guildId, l = t.connectionsRoleId, u = d.length > 2 ? d[2] : void 0;
                                a.Z.dispatch({
                                    type: "USER_PROFILE_FETCH_START",
                                    userId: e
                                });
                                E.label = 1;
                            case 1:
                                E.trys.push([1, 3, , 4]);
                                return [4, c.ZP.get({
                                    url: s.ANM.USER_PROFILE(e),
                                    query: {
                                        friend_token: n,
                                        with_mutual_guilds: r,
                                        with_mutual_friends_count: o,
                                        guild_id: i,
                                        connections_role_id: l
                                    },
                                    oldFormErrors: !0
                                })];
                            case 2:
                                f = E.sent();
                                null == u || u(f.body, i);
                                a.Z.dispatch({
                                    type: "USER_UPDATE",
                                    user: f.body.user
                                });
                                a.Z.dispatch(_({
                                    type: "USER_PROFILE_FETCH_SUCCESS"
                                }, f.body));
                                null != i && null != f.body.guild_member && a.Z.dispatch({
                                    type: "GUILD_MEMBER_PROFILE_UPDATE",
                                    guildId: i,
                                    guildMember: f.body.guild_member
                                });
                                return [2, f.body];
                            case 3:
                                null != (p = E.sent()) && null != (null == p ? void 0 : p.body) && O.warn("fetchProfile error: ".concat(p.body.code, " - ").concat(p.body.message));
                                a.Z.dispatch({
                                    type: "USER_PROFILE_FETCH_FAILURE",
                                    userId: e
                                });
                                throw p;
                            case 4:
                                return [2]
                        }
                    }))
                }));
                return h.apply(this, arguments)
            }

            function v(e) {
                return A.apply(this, arguments)
            }

            function A() {
                return (A = p((function(e) {
                    var t, n;
                    return E(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                a.Z.dispatch({
                                    type: "MUTUAL_FRIENDS_FETCH_START",
                                    userId: e
                                });
                                r.label = 1;
                            case 1:
                                r.trys.push([1, 3, , 4]);
                                return [4, c.ZP.get({
                                    url: s.ANM.USER_RELATIONSHIPS(e),
                                    oldFormErrors: !0
                                })];
                            case 2:
                                t = r.sent();
                                a.Z.dispatch({
                                    type: "MUTUAL_FRIENDS_FETCH_SUCCESS",
                                    userId: e,
                                    mutualFriends: t.body
                                });
                                return [3, 4];
                            case 3:
                                null != (null == (n = r.sent()) ? void 0 : n.body) && O.warn("fetchMutualFriends error: ".concat(n.body.code, " - ").concat(n.body.message));
                                a.Z.dispatch({
                                    type: "MUTUAL_FRIENDS_FETCH_FAILURE",
                                    userId: e
                                });
                                throw n;
                            case 4:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        66541: (e, t, n) => {
            "use strict";
            n.d(t, {
                T: () => u
            });
            var r = n(785893),
                o = (n(667294), n(795308)),
                i = n(633878);

            function c(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function a(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function l(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            var u = function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    u = e.height,
                    s = void 0 === u ? 24 : u,
                    f = e.color,
                    p = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    d = e.colorClass,
                    _ = void 0 === d ? "" : d,
                    E = l(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            c(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(E)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm1-18a1 1 0 1 0-2 0v7a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V5Z",
                        clipRule: "evenodd",
                        className: _
                    })
                }))
            }
        },
        597209: (e, t, n) => {
            "use strict";
            n.d(t, {
                m: () => u
            });
            var r = n(785893),
                o = (n(667294), n(795308)),
                i = n(633878);

            function c(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function a(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function l(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            var u = function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    u = e.height,
                    s = void 0 === u ? 24 : u,
                    f = e.color,
                    p = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    d = e.colorClass,
                    _ = void 0 === d ? "" : d,
                    E = l(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            c(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(E)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M15 8V6a3 3 0 1 0-6 0v2h6ZM7 8H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3h-2V6A5 5 0 0 0 7 6v2Zm6 7.732A2 2 0 0 0 12 12a2 2 0 0 0-1 3.732V17a1 1 0 1 0 2 0v-1.268Z",
                        clipRule: "evenodd",
                        className: _
                    })
                }))
            }
        },
        142643: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => o
            });
            var r;
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
                e.USER_PROFILE_THEMED_CONTAINER_PROFILE_EFFECTS_USER_POPOUT_WIDTH = "270px";
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
            }(r || (r = {}));
            const o = r
        },
        560213: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => y
            });
            var r = n(202351),
                o = n(744564),
                i = n(661123),
                c = n(2590);

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function l(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function u(e) {
                u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return u(e)
            }

            function s(e, t) {
                return !t || "object" !== p(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function f(e, t) {
                f = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return f(e, t)
            }
            var p = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function d(e) {
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
                    var n, r = u(e);
                    if (t) {
                        var o = u(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return s(this, n)
                }
            }
            var _ = {
                    isEnabled: !1,
                    lastUsedObject: {},
                    useActivityUrlOverride: !1,
                    activityUrlOverride: null,
                    filter: ""
                },
                E = null,
                O = [];
            var I = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && f(e, t)
                }(n, e);
                var t = d(n);

                function n() {
                    a(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    _ = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))));
                            r.forEach((function(t) {
                                l(e, t, n[t])
                            }))
                        }
                        return e
                    }({}, {
                        isEnabled: !1,
                        lastUsedObject: {},
                        useActivityUrlOverride: !1,
                        activityUrlOverride: null,
                        filter: ""
                    }, null != e ? e : {})
                };
                r.getState = function() {
                    return _
                };
                r.getIsEnabled = function() {
                    return _.isEnabled
                };
                r.getLastUsedObject = function() {
                    return _.lastUsedObject
                };
                r.getUseActivityUrlOverride = function() {
                    return _.useActivityUrlOverride
                };
                r.getActivityUrlOverride = function() {
                    return _.activityUrlOverride
                };
                r.getFetchState = function() {
                    return E
                };
                r.getFilter = function() {
                    return _.filter
                };
                r.getDeveloperShelfItems = function() {
                    return O
                };
                r.isApplicationInDevShelf = function(e) {
                    return null != O.find((function(t) {
                        return t.id === e
                    }))
                };
                r.inDevModeForApplication = function(e) {
                    return _.isEnabled && this.isApplicationInDevShelf(e)
                };
                return n
            }(r.ZP.PersistedStore);
            I.displayName = "DeveloperActivityShelfStore";
            I.persistKey = "DeveloperActivityShelfStore";
            const y = new I(o.Z, {
                LOGOUT: function() {
                    _ = {
                        isEnabled: !1,
                        lastUsedObject: {},
                        useActivityUrlOverride: !1,
                        activityUrlOverride: null,
                        filter: ""
                    };
                    E = null;
                    O = []
                },
                DEVELOPER_ACTIVITY_SHELF_TOGGLE_ENABLED: function() {
                    _.isEnabled = !_.isEnabled
                },
                DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE: function() {
                    _.useActivityUrlOverride = !_.useActivityUrlOverride
                },
                DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE: function(e) {
                    var t = e.activityUrlOverride;
                    _.activityUrlOverride = t
                },
                DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED: function(e) {
                    var t = e.applicationId,
                        n = e.timestamp;
                    if (null == O.find((function(e) {
                            return e.id === t
                        }))) return !1;
                    _.lastUsedObject[t] = n
                },
                DEVELOPER_ACTIVITY_SHELF_FETCH_START: function() {
                    E = "loading"
                },
                DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS: function(e) {
                    var t = e.items;
                    E = "loaded";
                    O = t.filter((function(e) {
                        return null != e.flags && (0, i.yE)(e.flags, c.udG.EMBEDDED)
                    }))
                },
                DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL: function(e) {
                    e.type;
                    E = "errored"
                },
                DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER: function(e) {
                    var t = e.filter;
                    _.filter = t
                }
            })
        },
        258104: (e, t, n) => {
            "use strict";
            n.d(t, {
                i6: () => P,
                ZP: () => X
            });
            var r = n(202351),
                o = n(744564),
                i = n(73904),
                c = n(664625),
                a = n(61209),
                l = n(682776),
                u = n(473903),
                s = n(120415),
                f = n(84894),
                p = n(838733),
                d = n(2590),
                _ = n(473708);

            function E(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function O(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function I(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function y(e) {
                y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return y(e)
            }

            function T(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        I(e, t, n[t])
                    }))
                }
                return e
            }

            function S(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function b(e, t) {
                return !t || "object" !== N(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function h(e, t) {
                h = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return h(e, t)
            }

            function v(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            c = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(c = (r = n.next()).done); c = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                c || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || C(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function A(e) {
                return function(e) {
                    if (Array.isArray(e)) return E(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || C(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var N = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function C(e, t) {
                if (e) {
                    if ("string" == typeof e) return E(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? E(e, t) : void 0
                }
            }

            function R(e) {
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
                    var n, r = y(e);
                    if (t) {
                        var o = y(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return b(this, n)
                }
            }
            new Set([]);
            var g = {
                    seenActivities: [],
                    shouldShowNewActivityIndicator: !1,
                    usersHavePlayedByApp: new Map
                },
                P = [],
                m = new Map,
                D = new Map,
                w = new Map,
                j = !1,
                M = new Map,
                x = new Map,
                L = new Map,
                U = new Map,
                G = new Map,
                H = new Map,
                F = new Map,
                B = new Set([]),
                Z = void 0;

            function k(e) {
                return null != e ? e : "0"
            }

            function V(e, t, n, r) {
                var o = (0, f.Z)(n.application_id);
                if (null != o) {
                    var i = a.Z.getBasicChannel(t),
                        u = null != i && l.Z.canBasicChannel(d.S7T.CONNECT, i) || (null == i ? void 0 : i.type) === d.d4z.DM || (null == i ? void 0 : i.type) === d.d4z.GROUP_DM;
                    ! function(e, t) {
                        var n;
                        g.usersHavePlayedByApp.set(e, new Set(A(null !== (n = g.usersHavePlayedByApp.get(e)) && void 0 !== n ? n : []).concat(A(t.map((function(e) {
                            return e.user_id
                        }))))))
                    }(n.application_id, r);
                    if (u) {
                        var s, p = function(e, t, n, r, o) {
                                var i, c, a = new Map;
                                t.forEach((function(e) {
                                    a.set(e.user_id, e)
                                }));
                                return S(T({}, e), {
                                    name: null !== (i = e.name) && void 0 !== i ? i : _.Z.Messages.EMBEDDED_ACTIVITIES_UNKNOWN_ACTIVITY_NAME,
                                    type: null !== (c = e.type) && void 0 !== c ? c : d.IIU.PLAYING,
                                    url: n,
                                    connections: a,
                                    guildId: r,
                                    channelId: o
                                })
                            }(n, r, o, e, t),
                            E = c.default.getId(),
                            O = m.get(p.application_id);
                        r.some((function(e) {
                            return e.user_id === E
                        })) && null != O && m.set(O.application_id, T({}, O, p));
                        var I, y = (null !== (s = w.get(t)) && void 0 !== s ? s : []).filter((function(e) {
                                return e.application_id !== n.application_id
                            })),
                            b = k(e),
                            h = (null !== (I = D.get(b)) && void 0 !== I ? I : []).filter((function(e) {
                                return !(e.application_id === n.application_id && e.channelId === t)
                            }));
                        if (0 !== r.length) {
                            y.push(p);
                            h.push(p)
                        }
                        w.set(t, y);
                        D.set(b, h)
                    }
                }
            }

            function K(e) {
                e.embedded_activities.forEach((function(t) {
                    var n = t.channel_id,
                        r = t.embedded_activity,
                        o = t.connections;
                    V(e.id, n, r, o)
                }))
            }

            function Y() {
                j = !1
            }

            function W(e, t) {
                return "".concat(e, ":").concat(t)
            }
            var J = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && h(e, t)
                }(n, e);
                var t = R(n);

                function n() {
                    O(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    var t = new Map;
                    Array.isArray(null == e ? void 0 : e.usersHavePlayedByApp) && (null == e || e.usersHavePlayedByApp.forEach((function(e) {
                        if (Array.isArray(e)) {
                            var n = v(e, 2),
                                r = n[0],
                                o = n[1];
                            "string" == typeof r && Array.isArray(o) && t.set(r, new Set(o))
                        }
                    })));
                    null != e && (g = S(T({}, e), {
                        usersHavePlayedByApp: t
                    }))
                };
                r.getState = function() {
                    return g
                };
                r.getSelfEmbeddedActivityForChannel = function(e) {
                    var t;
                    return null !== (t = Array.from(m.values()).find((function(t) {
                        var n = t.channelId;
                        return e === n
                    }))) && void 0 !== t ? t : null
                };
                r.getSelfEmbeddedActivities = function() {
                    return m
                };
                r.getEmbeddedActivitiesForGuild = function(e) {
                    var t;
                    return null !== (t = D.get(e)) && void 0 !== t ? t : P
                };
                r.getEmbeddedActivitiesForChannel = function(e) {
                    var t;
                    return null !== (t = w.get(e)) && void 0 !== t ? t : P
                };
                r.getEmbeddedActivitiesByChannel = function() {
                    return w
                };
                r.getEmbeddedActivityDurationMs = function(e, t) {
                    var n = F.get(W(e, t));
                    return null == n ? null : Date.now() - n
                };
                r.isLaunchingActivity = function() {
                    return j
                };
                r.getShelfActivities = function(e) {
                    var t, n = k(e);
                    return null !== (t = M.get(n)) && void 0 !== t ? t : []
                };
                r.getShelfFetchStatus = function(e) {
                    var t = k(e);
                    return x.get(t)
                };
                r.shouldFetchShelf = function(e) {
                    var t, n, r = k(e),
                        o = null !== (t = x.get(r)) && void 0 !== t ? t : {
                            isFetching: !1
                        },
                        i = Date.now() - (null !== (n = null == o ? void 0 : o.lastFetchTimestampMs) && void 0 !== n ? n : 0) > 216e5;
                    return !(null == o ? void 0 : o.isFetching) && i
                };
                r.getOrientationLockStateForApp = function(e) {
                    var t;
                    return null !== (t = L.get(e)) && void 0 !== t ? t : null
                };
                r.getPipOrientationLockStateForApp = function(e) {
                    var t;
                    return null !== (t = U.get(e)) && void 0 !== t ? t : this.getOrientationLockStateForApp(e)
                };
                r.getGridOrientationLockStateForApp = function(e) {
                    var t, n;
                    return null !== (n = null !== (t = G.get(e)) && void 0 !== t ? t : U.get(e)) && void 0 !== n ? n : this.getOrientationLockStateForApp(e)
                };
                r.getLayoutModeForApp = function(e) {
                    return H.get(e)
                };
                r.getDismissedEmbeddedActivityMessageKeys = function() {
                    return Array.from(B)
                };
                r.getUsersHavePlayedByApp = function(e) {
                    var t;
                    return A(null !== (t = g.usersHavePlayedByApp.get(e)) && void 0 !== t ? t : [])
                };
                r.getConnectedActivityChannelId = function() {
                    return Z
                };
                return n
            }(r.ZP.PersistedStore);
            J.displayName = "EmbeddedActivitiesStore";
            J.persistKey = "EmbeddedActivities";
            J.migrations = [function(e) {
                return S(T({}, e), {
                    seenFeaturedActivities: [],
                    shouldShowNewActivityIndicator: !1
                })
            }, function(e) {
                delete e.seenFeaturedActivities;
                return S(T({}, e), {
                    seenActivities: []
                })
            }, function(e) {
                return T({}, e)
            }, function(e) {
                delete e.currentFreeActivity;
                delete e.lastFreeActivityRotationTimestampMs;
                delete e.freePeriodActivities;
                delete e.shouldShowFreeActivityIndicator;
                return T({}, e)
            }];
            const X = new J(o.Z, {
                ACTIVITY_LAYOUT_MODE_UPDATE: function(e) {
                    var t = e.applicationId,
                        n = e.layoutMode;
                    H.set(t, n)
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
                    var t = e.guilds;
                    w.clear();
                    D.clear();
                    t.forEach((function(e) {
                        return K(e)
                    }))
                },
                GUILD_CREATE: function(e) {
                    K(e.guild)
                },
                CALL_CREATE: function(e) {
                    e.channelId;
                    ! function(e, t) {
                        t.forEach((function(e) {
                            V(null, e.channel_id, e.embedded_activity, e.connections)
                        }))
                    }(0, e.embeddedActivities)
                },
                CHANNEL_DELETE: function(e) {
                    var t = e.channel;
                    w.set(t.id, []);
                    var n = t.guild_id;
                    if (null != n) {
                        var r, o = k(n),
                            i = (null !== (r = D.get(o)) && void 0 !== r ? r : []).filter((function(e) {
                                return e.channelId !== t.id
                            }));
                        D.set(o, i)
                    }
                },
                EMBEDDED_ACTIVITY_LAUNCH_START: function() {
                    j = !0
                },
                EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: Y,
                EMBEDDED_ACTIVITY_LAUNCH_FAIL: Y,
                EMBEDDED_ACTIVITY_OPEN: function(e) {
                    var t, n = e.channelId,
                        r = e.embeddedActivity,
                        o = r.application_id,
                        i = (0, f.Z)(o),
                        l = c.default.getSessionId();
                    if (null == i || null == l) return !1;
                    if ((null === (t = m.get(o)) || void 0 === t ? void 0 : t.channelId) === n) return !1;
                    var s, p = a.Z.getChannel(n),
                        E = null == p ? void 0 : p.getGuildId(),
                        O = u.default.getCurrentUser();
                    if (null == E && (null === (s = null == p ? void 0 : p.isPrivate()) || void 0 === s || !s) || null == O) return !1;
                    Z = n;
                    var I, y = new Map,
                        T = O.id;
                    y.set(T, {
                        user_id: T
                    });
                    m.set(o, {
                        guildId: E,
                        channelId: n,
                        application_id: o,
                        name: null !== (I = r.name) && void 0 !== I ? I : _.Z.Messages.EMBEDDED_ACTIVITIES_UNKNOWN_ACTIVITY_NAME,
                        url: i,
                        type: d.IIU.PLAYING,
                        connections: y,
                        connectedSince: Date.now()
                    });
                    F.set(W(n, o), Date.now())
                },
                EMBEDDED_ACTIVITY_CLOSE: function(e) {
                    var t = e.applicationId,
                        n = m.get(t);
                    m.delete(t);
                    (null == n ? void 0 : n.channelId) === Z && (Z = void 0)
                },
                EMBEDDED_ACTIVITY_INBOUND_UPDATE: function(e) {
                    V(e.guildId, e.channelId, e.embeddedActivity, e.connections)
                },
                LOCAL_ACTIVITY_UPDATE: function(e) {
                    var t, n = e.activity;
                    if (null == n) return !1;
                    var r, o = m.get(null !== (t = n.application_id) && void 0 !== t ? t : "");
                    if (null == o) return !1;
                    m.set(o.application_id, S(T({}, o), {
                        type: null !== (r = n.type) && void 0 !== r ? r : o.type,
                        secrets: n.secrets
                    }))
                },
                EMBEDDED_ACTIVITY_SET_CONFIG: function(e) {
                    var t = e.applicationId,
                        n = e.config,
                        r = m.get(t);
                    null != r && m.set(r.application_id, S(T({}, r), {
                        config: n
                    }))
                },
                EMBEDDED_ACTIVITY_FETCH_SHELF: function(e) {
                    var t = k(e.guildId),
                        n = x.get(t);
                    x.set(t, {
                        isFetching: !0,
                        lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
                    })
                },
                EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: function(e) {
                    var t = e.guildId,
                        n = e.activities,
                        r = k(t);
                    M.set(r, n);
                    var o = Date.now();
                    n.forEach((function(e) {
                        var t = e.application_id,
                            n = e.client_platform_config[(0, p.Z)((0, s.Ij)())];
                        n.label_type === i.ww.NEW && null != n.label_until && new Date(n.label_until).getTime() > o && !g.seenActivities.includes(t) && (g.shouldShowNewActivityIndicator = !0);
                        g.seenActivities.push(t)
                    }));
                    x.set(r, {
                        isFetching: !1,
                        lastFetchTimestampMs: o
                    })
                },
                EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL: function(e) {
                    var t = k(e.guildId),
                        n = x.get(t);
                    x.set(t, {
                        isFetching: !1,
                        lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
                    })
                },
                EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR: function() {
                    g.shouldShowNewActivityIndicator = !1
                },
                EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE: function(e) {
                    var t = e.applicationId,
                        n = e.lockState,
                        r = e.pictureInPictureLockState,
                        o = e.gridLockState;
                    null == n ? L.delete(t) : L.set(t, n);
                    null === r ? U.delete(t) : void 0 !== r && U.set(t, r);
                    null === o ? G.delete(t) : void 0 !== o && G.set(t, o)
                },
                EMBEDDED_ACTIVITY_DISMISS_MESSAGE: function(e) {
                    var t = e.embeddedActivityKey;
                    B.add(t)
                }
            })
        },
        84894: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var r = n(325213),
                o = n(560213);

            function i(e) {
                var t = o.Z.getState();
                return t.isEnabled && t.useActivityUrlOverride && null != t.activityUrlOverride && "" !== t.activityUrlOverride ? t.activityUrlOverride : r.Z.inTestModeForEmbeddedApplication(e) ? r.Z.testModeOriginURL : function(e) {
                    var t = window.GLOBAL_ENV.ACTIVITY_APPLICATION_HOST;
                    return null == t ? null : "https://".concat(e, ".").concat(t)
                }(e)
            }
        },
        838733: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => o
            });
            var r = n(73904);

            function o(e) {
                switch (e) {
                    case "android":
                        return r.C3.ANDROID;
                    case "ios":
                        return r.C3.IOS;
                    default:
                        return r.C3.WEB
                }
            }
        },
        175072: (e, t, n) => {
            "use strict";
            n.d(t, {
                w: () => r,
                H: () => o
            });
            var r, o;
            ! function(e) {
                e[e.GAME = 1] = "GAME";
                e[e.TICKETED_EVENTS = 3] = "TICKETED_EVENTS";
                e[e.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS"
            }(r || (r = {}));
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
        239620: (e, t, n) => {
            "use strict";
            n.d(t, {
                mv: () => i,
                xJ: () => c
            });
            var r, o = n(120415),
                i = null;

            function c() {
                return (0, o.Dt)(), null
            }! function(e) {
                e.REMINDER = "reminder";
                e.TOP_MESSAGE_PUSH = "top_messages_push";
                e.TRENDING_CONTENT_PUSH = "trending_content_push"
            }(r || (r = {}))
        },
        757942: (e, t, n) => {
            "use strict";
            n.d(t, {
                O: () => r
            });
            var r;
            ! function(e) {
                e.LANDING = "landing";
                e.PRE_CONNECT = "pre-connect";
                e.PRE_CONNECT_WAITING = "pre-connect-waiting";
                e.DISCORD_CONSENT = "discord-consent";
                e.SUCCESS = "success";
                e.ERROR = "error"
            }(r || (r = {}))
        },
        959153: (e, t, n) => {
            "use strict";
            n.d(t, {
                h: () => S
            });
            var r = n(785893),
                o = n(667294),
                i = n(441143),
                c = n.n(i),
                a = n(304548),
                l = n(579344),
                u = n(296602),
                s = n(933227),
                f = n(107364),
                p = n(473708),
                d = n(20476),
                _ = n.n(d);

            function E(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function O(e, t, n, r, o, i, c) {
                try {
                    var a = e[i](c),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function I(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            c = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(c = (r = n.next()).done); c = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                c || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return E(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return E(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var y = function(e, t) {
                    var n, r, o, i, c = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function a(i) {
                        return function(a) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; c;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    (r = 0, o) && (i = [2 & i[0], o.value]);
                                    switch (i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            c.label++;
                                            return {
                                                value: i[1], done: !1
                                            };
                                        case 5:
                                            c.label++;
                                            r = i[1];
                                            i = [0];
                                            continue;
                                        case 7:
                                            i = c.ops.pop();
                                            c.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = c.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                c = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                c.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && c.label < o[1]) {
                                                c.label = o[1];
                                                o = i;
                                                break
                                            }
                                            if (o && c.label < o[2]) {
                                                c.label = o[2];
                                                c.ops.push(i);
                                                break
                                            }
                                            o[2] && c.ops.pop();
                                            c.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, c)
                                } catch (e) {
                                    i = [6, e];
                                    r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, a])
                        }
                    }
                },
                T = new u.Z("TwoWayLinkDiscordConsentWeb");

            function S(e) {
                var t, n, i = e.platformType,
                    u = e.clientId,
                    d = e.scopes,
                    E = e.authToken,
                    S = e.onContinue,
                    b = e.onError,
                    h = e.onClose,
                    v = e.redirectUri,
                    A = I(o.useState(!1), 2),
                    N = A[0],
                    C = A[1],
                    R = o.useCallback((n = (t = function(e) {
                        var t, n, r, o, c;
                        return y(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    t = e.location;
                                    n = E.callbackCode, r = E.callbackState;
                                    a.label = 1;
                                case 1:
                                    a.trys.push([1, 3, , 4]);
                                    return [4, l.Z.completeTwoWayLink(i, t, n, r)];
                                case 2:
                                    o = a.sent();
                                    return [3, 4];
                                case 3:
                                    c = a.sent();
                                    T.error("".concat(i, " link error:"), c);
                                    return [3, 4];
                                case 4:
                                    null != o ? S() : b();
                                    return [2]
                            }
                        }))
                    }, function() {
                        var e = this,
                            n = arguments;
                        return new Promise((function(r, o) {
                            var i = t.apply(e, n);

                            function c(e) {
                                O(i, r, o, c, a, "next", e)
                            }

                            function a(e) {
                                O(i, r, o, c, a, "throw", e)
                            }
                            c(void 0)
                        }))
                    }), function(e) {
                        return n.apply(this, arguments)
                    }), [i, E, S, b]),
                    g = (0, s.useOAuth2AuthorizeForm)({
                        clientId: u,
                        scopes: d,
                        responseType: "code",
                        callback: R,
                        isTrustedName: !0,
                        isEmbeddedFlow: !0,
                        redirectUri: v
                    }),
                    P = g.header,
                    m = g.body,
                    D = g.appDetails,
                    w = g.sendAuthorize,
                    j = o.useCallback((function() {
                        c()(null != w, "sendAuthorize not available");
                        C(!0);
                        w(!0)
                    }), [w]);
                return (0, r.jsxs)("div", {
                    className: _().container,
                    children: [null != h && (0, r.jsx)(a.ModalCloseButton, {
                        className: _().closeButton,
                        onClick: h
                    }), (0, r.jsxs)(a.Scroller, {
                        children: [(0, r.jsx)(a.ModalHeader, {
                            direction: f.Z.Direction.VERTICAL,
                            className: _().header,
                            separator: !1,
                            children: (0, r.jsx)(a.Text, {
                                className: _().stepHeader,
                                variant: "text-xs/bold",
                                color: "header-secondary",
                                children: p.Z.Messages.BIDIRECTIONAL_STEP_HEADER.format({
                                    number: 2,
                                    total: 2
                                })
                            })
                        }), (0, r.jsxs)("div", {
                            className: _().discordConsentBody,
                            children: [P, m, D]
                        }), (0, r.jsx)(a.ModalFooter, {
                            className: _().footer,
                            children: (0, r.jsx)(a.Button, {
                                className: _().footerButton,
                                color: a.Button.Colors.BRAND,
                                submitting: N,
                                onClick: j,
                                children: p.Z.Messages.AUTHORIZE_AND_CONTINUE
                            })
                        })]
                    })]
                })
            }
        },
        227363: (e, t, n) => {
            "use strict";
            n.d(t, {
                C: () => p
            });
            var r = n(785893),
                o = (n(667294), n(304548)),
                i = n(107364),
                c = n(956054),
                a = n(473708),
                l = n(20476),
                u = n.n(l),
                s = n(727157),
                f = n.n(s);

            function p(e) {
                var t = e.onContinue,
                    n = e.onClose,
                    l = e.title,
                    s = e.body;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(o.ModalHeader, {
                        direction: i.Z.Direction.VERTICAL,
                        className: u().header,
                        separator: !1,
                        children: [(0, r.jsx)("img", {
                            src: f(),
                            className: u().illustration,
                            width: "254",
                            height: "127",
                            alt: ""
                        }), (0, r.jsx)(o.Heading, {
                            className: u().title,
                            variant: "heading-xl/extrabold",
                            children: l
                        }), null != n && (0, r.jsx)(o.ModalCloseButton, {
                            className: u().closeButton,
                            onClick: n
                        })]
                    }), (0,
                        r.jsx)(o.ModalContent, {
                        className: u().body,
                        paddingFix: !1,
                        children: (0, r.jsx)(o.Text, {
                            tag: "p",
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: s
                        })
                    }), (0, r.jsx)(o.ModalFooter, {
                        className: u().footer,
                        children: (0, r.jsxs)(o.Button, {
                            className: u().footerButton,
                            color: o.Button.Colors.BRAND,
                            onClick: t,
                            children: [a.Z.Messages.TRY_AGAIN, (0, r.jsx)(c.Z, {
                                className: u().launchIcon,
                                width: "16",
                                height: "16"
                            })]
                        })
                    })]
                })
            }
        },
        525493: (e, t, n) => {
            "use strict";
            n.d(t, {
                m: () => f
            });
            var r = n(785893),
                o = (n(667294), n(202351)),
                i = n(304548),
                c = n(629223),
                a = n(107364),
                l = n(473708),
                u = n(20476),
                s = n.n(u);

            function f(e) {
                var t = e.platformType,
                    n = e.onContinue,
                    u = e.onClose,
                    f = e.img,
                    p = e.headerConnect,
                    d = e.headerReconnect,
                    _ = e.body,
                    E = e.learnMoreLink,
                    O = e.valueProps,
                    I = (0, o.e7)([c.Z], (function() {
                        var e = c.Z.getAccount(null, t);
                        return !1 === (null == e ? void 0 : e.twoWayLink)
                    }));
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(i.ModalHeader, {
                        direction: a.Z.Direction.VERTICAL,
                        className: s().header,
                        separator: !1,
                        children: [(0, r.jsxs)("div", {
                            className: s().illustration,
                            children: [f, " "]
                        }), (0, r.jsx)(i.Heading, {
                            className: s().title,
                            variant: "heading-xl/extrabold",
                            children: I && null != d ? d : p
                        }), (0, r.jsx)(i.ModalCloseButton, {
                            className: s().closeButton,
                            onClick: u
                        })]
                    }), (0, r.jsxs)(i.ModalContent, {
                        className: s().body,
                        paddingFix: !1,
                        children: [(0, r.jsx)(i.Text, {
                            tag: "p",
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: _
                        }), (0, r.jsx)("div", {
                            className: s().valueProps,
                            children: O
                        }), null != E ? (0, r.jsx)(i.Text, {
                            tag: "p",
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            children: l.Z.Messages.CONNECT_CONSOLE_LANDING_BODY_LEARN_MORE.format({
                                helpCenterLink: E
                            })
                        }) : null]
                    }), (0, r.jsx)(i.ModalFooter, {
                        className: s().footer,
                        children: (0, r.jsx)(i.Button, {
                            className: s().footerButton,
                            color: i.Button.Colors.BRAND,
                            onClick: n,
                            children: l.Z.Messages.CONTINUE
                        })
                    })]
                })
            }
        },
        797916: (e, t, n) => {
            "use strict";
            n.d(t, {
                t: () => h
            });
            var r = n(785893),
                o = n(667294),
                i = n(441143),
                c = n.n(i),
                a = n(72190),
                l = n(304548),
                u = n(744564),
                s = n(53645),
                f = n(497842),
                p = n(296602),
                d = n(107364),
                _ = n(956054),
                E = n(473708),
                O = n(20476),
                I = n.n(O);

            function y(e, t, n, r, o, i, c) {
                try {
                    var a = e[i](c),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function T(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function c(e) {
                            y(i, r, o, c, a, "next", e)
                        }

                        function a(e) {
                            y(i, r, o, c, a, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }
            var S = function(e, t) {
                    var n, r, o, i, c = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function a(i) {
                        return function(a) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; c;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    (r = 0, o) && (i = [2 & i[0], o.value]);
                                    switch (i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            c.label++;
                                            return {
                                                value: i[1], done: !1
                                            };
                                        case 5:
                                            c.label++;
                                            r = i[1];
                                            i = [0];
                                            continue;
                                        case 7:
                                            i = c.ops.pop();
                                            c.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = c.trys,
                                                    o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                c = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                c.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && c.label < o[1]) {
                                                c.label = o[1];
                                                o = i;
                                                break
                                            }
                                            if (o && c.label < o[2]) {
                                                c.label = o[2];
                                                c.ops.push(i);
                                                break
                                            }
                                            o[2] && c.ops.pop();
                                            c.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, c)
                                } catch (e) {
                                    i = [6, e];
                                    r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, a])
                        }
                    }
                },
                b = new p.Z("TwoWayLink");

            function h(e) {
                var t = e.platformType,
                    n = e.isWaitingForConnection,
                    i = e.onWaitingForConnection,
                    p = e.expectedCallbackState,
                    O = e.onAuthToken,
                    y = e.onError,
                    h = e.onClose,
                    v = e.img,
                    A = e.title,
                    N = e.body,
                    C = e.redirectDestination,
                    R = o.useCallback(T((function() {
                        var e, n, r;
                        return S(this, (function(o) {
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
                                    n = o.sent();
                                    b.error("Error opening provider authorize page", n);
                                    y();
                                    return [2];
                                case 3:
                                    r = (0, s.xp)(e).state;
                                    c()(null != r, "Authorize URL state query parameter must be present");
                                    null == i || i(r);
                                    return [2]
                            }
                        }))
                    })), [t, y, i]),
                    g = o.useCallback((function(e) {
                        var n = e.callbackCode,
                            r = e.callbackState;
                        r === p ? O({
                            callbackCode: n,
                            callbackState: r
                        }) : b.warn("".concat(t, " link: received mismatching callback state!"))
                    }), [t, p, O]);
                o.useEffect((function() {
                    u.Z.subscribe("USER_CONNECTIONS_LINK_CALLBACK", g);
                    return function() {
                        u.Z.unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", g)
                    }
                }), [g]);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(l.ModalHeader, {
                        direction: d.Z.Direction.VERTICAL,
                        className: I().header,
                        separator: !1,
                        children: [(0, r.jsx)(l.Text, {
                            className: I().stepHeader,
                            variant: "text-xs/bold",
                            color: "header-secondary",
                            children: E.Z.Messages.BIDIRECTIONAL_STEP_HEADER.format({
                                number: 1,
                                total: 2
                            })
                        }), (0, r.jsxs)("div", {
                            className: I().illustration,
                            children: [v, " "]
                        }), (0, r.jsx)(l.Heading, {
                            className: I().title,
                            variant: "heading-xl/extrabold",
                            children: A
                        }), null != h && (0, r.jsx)(l.ModalCloseButton, {
                            className: I().closeButton,
                            onClick: h
                        })]
                    }), (0,
                        r.jsxs)(l.ModalContent, {
                        className: I().body,
                        paddingFix: !1,
                        children: [(0, r.jsx)(l.Text, {
                            tag: "p",
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: N
                        }), !n && (0, r.jsx)(l.Text, {
                            tag: "p",
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            children: E.Z.Messages.CONSOLE_REDIRECT_NOTICE.format({
                                redirectUrl: C
                            })
                        })]
                    }), (0, r.jsx)(l.ModalFooter, {
                        className: I().footer,
                        children: (0, r.jsxs)(l.Button, {
                            className: I().footerButton,
                            color: n ? l.Button.Colors.PRIMARY : l.Button.Colors.BRAND,
                            onClick: R,
                            children: [n ? E.Z.Messages.RETRY : E.Z.Messages.CONTINUE, (0, r.jsx)(_.Z, {
                                className: I().launchIcon,
                                width: "16",
                                height: "16"
                            })]
                        })
                    })]
                })
            }
        },
        361618: (e, t, n) => {
            "use strict";
            n.d(t, {
                L: () => u
            });
            var r = n(785893),
                o = (n(667294), n(304548)),
                i = n(107364),
                c = n(473708),
                a = n(20476),
                l = n.n(a);

            function u(e) {
                var t = e.onClose,
                    n = e.img,
                    a = e.title,
                    u = e.body,
                    s = e.content;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(o.ModalHeader, {
                        direction: i.Z.Direction.VERTICAL,
                        className: l().header,
                        separator: !1,
                        children: [(0, r.jsx)("div", {
                            className: l().illustration,
                            children: n
                        }), (0, r.jsx)(o.Heading, {
                            className: l().title,
                            variant: "heading-xl/extrabold",
                            children: a
                        }), (0, r.jsx)(o.ModalCloseButton, {
                            className: l().closeButton,
                            onClick: t
                        })]
                    }), (0, r.jsxs)(o.ModalContent, {
                        className: l().body,
                        paddingFix: !1,
                        children: [(0, r.jsx)(o.Text, {
                            tag: "p",
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: u
                        }), s]
                    }), (0, r.jsx)(o.ModalFooter, {
                        className: l().footer,
                        children: (0, r.jsx)(o.Button, {
                            className: l().footerButton,
                            color: o.Button.Colors.BRAND,
                            onClick: t,
                            children: c.Z.Messages.DONE
                        })
                    })]
                })
            }
        },
        271663: (e, t, n) => {
            "use strict";
            n.d(t, {
                Ux: () => a,
                pT: () => l,
                yC: () => u
            });
            var r = n(785893),
                o = (n(667294), n(304548)),
                i = n(20476),
                c = n.n(i);

            function a(e) {
                var t = e.text,
                    n = e.children;
                return (0, r.jsxs)("div", {
                    className: c().valueProp,
                    children: [(0, r.jsx)("div", {
                        className: c().valuePropIconContainer,
                        children: n
                    }), (0, r.jsx)(o.Text, {
                        variant: "text-sm/medium",
                        children: t
                    })]
                })
            }

            function l(e) {
                var t = e.title,
                    n = e.bulletPoints,
                    i = e.icon;
                return (0, r.jsxs)("div", {
                    className: c().bulletedValueProp,
                    children: [(0, r.jsx)("div", {
                        className: c().valuePropIconContainer,
                        children: i
                    }), (0, r.jsxs)("div", {
                        className: c().bulletPointsContainer,
                        children: [(0, r.jsx)(o.Text, {
                            variant: "text-md/bold",
                            color: "header-primary",
                            children: t
                        }), (0, r.jsx)("div", {
                            className: c().bulletPoints,
                            children: n.map((function(e) {
                                return (0, r.jsxs)("div", {
                                    className: c().bulletPoint,
                                    children: [(0, r.jsx)(o.Text, {
                                        variant: "text-sm/medium",
                                        color: "header-secondary",
                                        children: "•"
                                    }), (0, r.jsx)(o.Text, {
                                        variant: "text-sm/medium",
                                        color: "header-secondary",
                                        className: c().bulletPointText,
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
                return (0, r.jsx)("div", {
                    className: c().valuePropContainer,
                    children: t
                })
            }
        },
        786648: (e, t, n) => {
            "use strict";
            n.d(t, {
                k: () => s
            });
            var r = n(667294),
                o = n(634698),
                i = n(652591),
                c = n(757942),
                a = n(2590);

            function l(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function u(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            c = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(c = (r = n.next()).done); c = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                c || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return l(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function s(e, t) {
                var n = u(r.useState(c.O.LANDING), 2),
                    l = n[0],
                    s = n[1],
                    f = (0, o.Z)(l),
                    p = u(r.useState(null), 2),
                    d = p[0],
                    _ = p[1],
                    E = u(r.useState(null), 2),
                    O = E[0],
                    I = E[1],
                    y = r.useCallback((function() {
                        switch (l) {
                            case c.O.LANDING:
                                s(c.O.PRE_CONNECT);
                                break;
                            case c.O.DISCORD_CONSENT:
                                s(c.O.SUCCESS);
                                break;
                            case c.O.ERROR:
                                s(c.O.PRE_CONNECT)
                        }
                    }), [l]),
                    T = r.useCallback((function() {
                        _(null);
                        s(c.O.ERROR)
                    }), []),
                    S = r.useCallback((function(e) {
                        _(e);
                        s(c.O.PRE_CONNECT_WAITING)
                    }), []),
                    b = r.useCallback((function(e) {
                        _(null);
                        I(e);
                        s(c.O.DISCORD_CONSENT)
                    }), []);
                r.useEffect((function() {
                    l !== f && i.default.track(a.rMx.ACCOUNT_LINK_STEP, {
                        location_stack: e,
                        previous_step: f,
                        current_step: l,
                        platform_type: t
                    })
                }), [l, f, e, t]);
                return {
                    slide: l,
                    gotoNext: y,
                    gotoError: T,
                    handleWaitingForConnection: S,
                    handleAuthToken: b,
                    expectedCallbackState: d,
                    callbackData: O
                }
            }
        },
        629223: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => j
            });
            var r = n(202351),
                o = n(744564),
                i = n(579344),
                c = n(265688),
                a = n(169376);

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

            function p(e) {
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
                    var n, r = l(e);
                    if (t) {
                        var o = l(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return u(this, n)
                }
            }
            var d = function(e) {
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
                    }(n, e);
                    var t = p(n);

                    function n(e) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, n);
                        var r;
                        (r = t.call(this)).id = e.id;
                        r.type = e.type;
                        r.name = e.name;
                        r.revoked = e.revoked || !1;
                        r.integrations = e.integrations || [];
                        r.visibility = e.visibility || 0;
                        r.friendSync = e.friend_sync || !1;
                        r.showActivity = e.show_activity || !1;
                        r.verified = e.verified || !1;
                        r.accessToken = e.access_token || null;
                        r.twoWayLink = e.two_way_link || !1;
                        r.metadata = e.metadata || null;
                        r.metadataVisibility = e.metadata_visibility || 0;
                        return r
                    }
                    n.prototype.toString = function() {
                        return this.name
                    };
                    return n
                }(a.Z),
                _ = n(848285),
                E = n(2590);

            function O(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function I(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function y(e) {
                y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return y(e)
            }

            function T(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        I(e, t, n[t])
                    }))
                }
                return e
            }

            function S(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function b(e, t) {
                return !t || "object" !== v(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function h(e, t) {
                h = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return h(e, t)
            }
            var v = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function A(e) {
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
                    var n, r = y(e);
                    if (t) {
                        var o = y(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return b(this, n)
                }
            }
            var N = new Set([E.ABu.CONTACTS]),
                C = !0,
                R = [],
                g = [],
                P = {},
                m = {},
                D = function(e) {
                    R = e.filter((function(e) {
                        return !N.has(e.type) && c.Z.isSupported(e.type)
                    }));
                    g = e.filter((function(e) {
                        return N.has(e.type)
                    }));
                    C = !1
                };
            var w = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && h(e, t)
                }(n, e);
                var t = A(n);

                function n() {
                    O(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.isJoining = function(e) {
                    return P[e] || !1
                };
                r.isFetching = function() {
                    return C
                };
                r.getAccounts = function() {
                    return R
                };
                r.getLocalAccounts = function() {
                    return g
                };
                r.getAccount = function(e, t) {
                    return R.find((function(n) {
                        return (null == e || n.id === e) && n.type === t
                    }))
                };
                r.getLocalAccount = function(e) {
                    return g.find((function(t) {
                        return t.type === e
                    }))
                };
                r.isSuggestedAccountType = function(e) {
                    return m[e] || !1
                };
                return n
            }(r.ZP.Store);
            w.displayName = "ConnectedAccountsStore";
            const j = new w(o.Z, {
                CONNECTION_OPEN: function(e) {
                    var t = e.connectedAccounts.map((function(e) {
                        return new d(e)
                    }));
                    D(t)
                },
                USER_CONNECTIONS_UPDATE: function(e) {
                    if (e.local && null != e.accounts) {
                        var t = e.accounts.map((function(e) {
                            return new d(S(T({}, e), {
                                integrations: e.integrations.map((function(e) {
                                    return S(T({}, e), {
                                        guild: new _.Z(e.guild)
                                    })
                                }))
                            }))
                        }));
                        D(t)
                    } else i.Z.fetch()
                },
                USER_CONNECTIONS_INTEGRATION_JOINING: function(e) {
                    P[e.integrationId] = e.joining
                },
                USER_CONNECTION_UPDATE: function(e) {
                    var t = e.platformType,
                        n = e.id,
                        r = e.revoked,
                        o = e.accessToken,
                        i = R.find((function(e) {
                            return e.id === n && e.type === t
                        }));
                    if (null == i) return !1;
                    null != r && (i.revoked = r);
                    null != o && (i.accessToken = o)
                }
            })
        },
        325213: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => R
            });
            var r = n(202351),
                o = n(744564),
                i = n(121534),
                c = n(968449),
                a = n(473419),
                l = n(761814);

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function f(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function p(e) {
                p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return p(e)
            }

            function d(e, t) {
                return !t || "object" !== E(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function _(e, t) {
                _ = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return _(e, t)
            }
            var E = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function O(e) {
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
                    var n, r = p(e);
                    if (t) {
                        var o = p(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return d(this, n)
                }
            }
            var I, y, T, S = {
                    applicationId: null,
                    originURL: null
                },
                b = S,
                h = new Set,
                v = !1;

            function A() {
                T = null
            }

            function N() {
                I = null;
                y = null;
                h = new Set;
                b.applicationId = null;
                b.originURL = null;
                A()
            }
            var C = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && _(e, t)
                }(n, e);
                var t = O(n);

                function n() {
                    u(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    b = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))));
                            r.forEach((function(t) {
                                f(e, t, n[t])
                            }))
                        }
                        return e
                    }({}, null != e ? e : S);
                    I = b.applicationId;
                    y = b.originURL;
                    this.waitFor(a.Z, i.Z);
                    this.syncWith([a.Z, i.Z], (function() {
                        return !0
                    }));
                    l.Z.whenInitialized((function() {
                        v = !0
                    }))
                };
                r.inTestModeForApplication = function(e) {
                    return I === e
                };
                r.inTestModeForEmbeddedApplication = function(e) {
                    return I === e && null != y
                };
                r.shouldDisplayTestMode = function(e) {
                    return c.Sb.getSetting() && this.inTestModeForApplication(e)
                };
                r.getState = function() {
                    return b
                };
                r.whenInitialized = function(e) {
                    this.addConditionalChangeListener((function() {
                        if (v) {
                            setImmediate(e);
                            return !1
                        }
                    }))
                };
                ! function(e, t, n) {
                    t && s(e.prototype, t);
                    n && s(e, n)
                }(n, [{
                    key: "isTestMode",
                    get: function() {
                        return null != I
                    }
                }, {
                    key: "isFetchingAuthorization",
                    get: function() {
                        return h.size > 0
                    }
                }, {
                    key: "testModeEmbeddedApplicationId",
                    get: function() {
                        return null != y ? I : null
                    }
                }, {
                    key: "testModeApplicationId",
                    get: function() {
                        return I
                    }
                }, {
                    key: "testModeOriginURL",
                    get: function() {
                        return y
                    }
                }, {
                    key: "error",
                    get: function() {
                        return T
                    }
                }]);
                return n
            }(r.ZP.PersistedStore);
            C.displayName = "TestModeStore";
            C.persistKey = "TestModeStore";
            const R = new C(o.Z, {
                DEVELOPER_TEST_MODE_AUTHORIZATION_START: function(e) {
                    var t = e.applicationId;
                    h.add(t);
                    T = null
                },
                DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: function(e) {
                    var t = e.applicationId,
                        n = e.originURL;
                    I = t;
                    y = n;
                    h.delete(t);
                    T = null;
                    b.applicationId = t;
                    b.originURL = n
                },
                DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: function(e) {
                    var t = e.applicationId,
                        n = e.error;
                    h.delete(t);
                    T = n
                },
                OVERLAY_INITIALIZE: function(e) {
                    var t = e.testModeApplicationId;
                    I = t
                },
                DEVELOPER_TEST_MODE_RESET_ERROR: A,
                LOGOUT: N,
                DEVELOPER_TEST_MODE_RESET: N
            })
        },
        449401: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var r = n(785893),
                o = (n(667294), n(450520)),
                i = n(66541),
                c = n(633878);

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function u(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            const s = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 16 : t,
                    o = e.height,
                    i = void 0 === o ? 16 : o,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    p = e.foreground,
                    d = u(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            a(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(d)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        d: "M12 2C6.4764 2 2 6.4764 2 12C2 17.5236 6.4764 22 12 22C17.5236 22 22 17.5236 22 12C22 6.4764 17.5236 2 12 2ZM12 5.6C12.4422 5.6 12.8 5.95781 12.8 6.4V11.5376L16.5625 13.7126C16.9453 13.9329 17.0703 14.4173 16.85 14.8001C16.6297 15.183 16.1453 15.3079 15.7625 15.0876L11.6873 12.7376C11.656 12.7251 11.6279 12.7048 11.5998 12.6876C11.3607 12.5486 11.1998 12.2954 11.1998 12.0001V6.4001C11.1998 5.9579 11.5578 5.6 12 5.6Z",
                        fill: f,
                        className: p
                    })
                }))
            }), i.T)
        },
        956054: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => d
            });
            var r = n(785893),
                o = (n(667294), n(450520)),
                i = n(795308),
                c = n(633878);

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function u(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function f(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function p(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            const d = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    a = e.color,
                    l = void 0 === a ? "currentColor" : a,
                    u = e.foreground,
                    d = p(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsxs)("svg", f(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            s(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(d)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        className: u,
                        fill: l,
                        d: "M10 5V3H5.375C4.06519 3 3 4.06519 3 5.375V18.625C3 19.936 4.06519 21 5.375 21H18.625C19.936 21 21 19.936 21 18.625V14H19V19H5V5H10Z"
                    }), (0, r.jsx)("path", {
                        className: u,
                        fill: l,
                        d: "M21 2.99902H14V4.99902H17.586L9.29297 13.292L10.707 14.706L19 6.41302V9.99902H21V2.99902Z"
                    })]
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    s = void 0 === o ? 24 : o,
                    f = e.color,
                    p = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    d = e.colorClass,
                    _ = void 0 === d ? "" : d,
                    E = u(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            a(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(E)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M15 2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V4.414l-4.293 4.293a1 1 0 1 1-1.414-1.414L19.586 3H16a1 1 0 0 1-1-1ZM5 2a3 3 0 0 0-3 3v14c0 1.655 1.34 3 2.998 3H19A2.999 2.999 0 0 0 22 19v-6a1 1 0 1 0-2 0v6c0 .553-.447 1-.999 1H4.998A.998.998 0 0 1 4 19V5a1 1 0 0 1 1-1h6a1 1 0 1 0 0-2H5Z",
                        clipRule: "evenodd",
                        className: _
                    })
                }))
            }))
        },
        349491: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var r = n(785893),
                o = (n(667294), n(450520)),
                i = n(597209),
                c = n(633878);

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function u(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            const s = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    p = e.className,
                    d = e.foreground,
                    _ = u(e, ["width", "height", "color", "className", "foreground"]);
                return (0, r.jsx)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            a(e, t, n[t])
                        }))
                    }
                    return e
                }({
                    width: n,
                    height: i,
                    className: p,
                    viewBox: "0 0 24 24"
                }, (0, c.Z)(_)), {
                    children: (0, r.jsx)("path", {
                        className: d,
                        fill: f,
                        d: "M17 11V7C17 4.243 14.756 2 12 2C9.242 2 7 4.243 7 7V11C5.897 11 5 11.896 5 13V20C5 21.103 5.897 22 7 22H17C18.103 22 19 21.103 19 20V13C19 11.896 18.103 11 17 11ZM12 18C11.172 18 10.5 17.328 10.5 16.5C10.5 15.672 11.172 15 12 15C12.828 15 13.5 15.672 13.5 16.5C13.5 17.328 12.828 18 12 18ZM15 11H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V11Z",
                        "aria-hidden": !0
                    })
                }))
            }), i.m)
        },
        985651: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => d
            });
            var r = n(785893),
                o = (n(667294), n(450520)),
                i = n(795308),
                c = n(633878);

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function u(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function f(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function p(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            const d = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 16 : t,
                    o = e.height,
                    i = void 0 === o ? 16 : o,
                    a = e.color,
                    l = void 0 === a ? "currentColor" : a,
                    u = p(e, ["width", "height", "color"]);
                return (0, r.jsx)("svg", f(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            s(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(u)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 16 15.2",
                    children: (0, r.jsx)("path", {
                        d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z",
                        fill: l
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    s = void 0 === o ? 24 : o,
                    f = e.color,
                    p = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    d = e.colorClass,
                    _ = void 0 === d ? "" : d,
                    E = u(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            a(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(E)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M18.707 7.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L10 14.586l7.293-7.293a1 1 0 0 1 1.414 0Z",
                        clipRule: "evenodd",
                        className: _
                    })
                }))
            }))
        },
        989824: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var r = n(667294),
                o = {};

            function i(e) {
                var t = (0, r.useRef)(o);
                t.current === o && (t.current = e());
                return t.current
            }
        },
        970112: (e, t, n) => {
            "use strict";
            n.d(t, {
                Ue: () => y,
                U2: () => T
            });

            function r(e) {
                const t = "==".slice(0, (4 - e.length % 4) % 4),
                    n = e.replace(/-/g, "+").replace(/_/g, "/") + t,
                    r = atob(n),
                    o = new ArrayBuffer(r.length),
                    i = new Uint8Array(o);
                for (let e = 0; e < r.length; e++) i[e] = r.charCodeAt(e);
                return o
            }

            function o(e) {
                const t = new Uint8Array(e);
                let n = "";
                for (const e of t) n += String.fromCharCode(e);
                return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
            }
            var i = "copy",
                c = "convert";

            function a(e, t, n) {
                if (t === i) return n;
                if (t === c) return e(n);
                if (t instanceof Array) return n.map((n => a(e, t[0], n)));
                if (t instanceof Object) {
                    const r = {};
                    for (const [o, i] of Object.entries(t)) {
                        if (i.derive) {
                            const e = i.derive(n);
                            void 0 !== e && (n[o] = e)
                        }
                        if (o in n) null != n[o] ? r[o] = a(e, i.schema, n[o]) : r[o] = null;
                        else if (i.required) throw new Error(`Missing key: ${o}`)
                    }
                    return r
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
                    type: u(i),
                    id: u(c),
                    transports: s(i)
                },
                p = {
                    appid: s(i),
                    appidExclude: s(i),
                    credProps: s(i)
                },
                d = {
                    appid: s(i),
                    appidExclude: s(i),
                    credProps: s(i)
                },
                _ = {
                    publicKey: u({
                        rp: u(i),
                        user: u({
                            id: u(c),
                            name: u(i),
                            displayName: u(i)
                        }),
                        challenge: u(c),
                        pubKeyCredParams: u(i),
                        timeout: s(i),
                        excludeCredentials: s([f]),
                        authenticatorSelection: s(i),
                        attestation: s(i),
                        extensions: s(p)
                    }),
                    signal: s(i)
                },
                E = {
                    type: u(i),
                    id: u(i),
                    rawId: u(c),
                    authenticatorAttachment: s(i),
                    response: u({
                        clientDataJSON: u(c),
                        attestationObject: u(c),
                        transports: l(i, (e => {
                            var t;
                            return (null == (t = e.getTransports) ? void 0 : t.call(e)) || []
                        }))
                    }),
                    clientExtensionResults: l(d, (e => e.getClientExtensionResults()))
                },
                O = {
                    mediation: s(i),
                    publicKey: u({
                        challenge: u(c),
                        timeout: s(i),
                        rpId: s(i),
                        allowCredentials: s([f]),
                        userVerification: s(i),
                        extensions: s(p)
                    }),
                    signal: s(i)
                },
                I = {
                    type: u(i),
                    id: u(i),
                    rawId: u(c),
                    authenticatorAttachment: s(i),
                    response: u({
                        clientDataJSON: u(c),
                        authenticatorData: u(c),
                        signature: u(c),
                        userHandle: u(c)
                    }),
                    clientExtensionResults: l(d, (e => e.getClientExtensionResults()))
                };
            async function y(e) {
                const t = await navigator.credentials.create(function(e) {
                    return a(r, _, e)
                }(e));
                return function(e) {
                    return a(o, E, e)
                }(t)
            }
            async function T(e) {
                const t = await navigator.credentials.get(function(e) {
                    return a(r, O, e)
                }(e));
                return function(e) {
                    return a(o, I, e)
                }(t)
            }
        }
    }
]);