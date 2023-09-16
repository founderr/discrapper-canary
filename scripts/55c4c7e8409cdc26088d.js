/*! For license information please see 55c4c7e8409cdc26088d.js.LICENSE.txt */
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [39527], {
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
            e.exports = r.p + "d6b6938f5fd7a57ba2c4cc632add98d4.png"
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
                k: () => O,
                Lr: () => v,
                mB: () => g,
                PR: () => m,
                In: () => j,
                Sr: () => C
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

            function d(e) {
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

            function p(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        p(e, t, r[t])
                    }))
                }
                return e
            }
            var b = function(e, t) {
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
                h = new c.Z("UserProfileModalActionCreators");

            function O() {
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

            function v() {
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

            function g(e, t) {
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

            function m(e) {
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

            function j(e) {
                return w.apply(this, arguments)
            }

            function w() {
                w = d((function(e) {
                    var t, r, n, o, c, l, u, f, d, p = arguments;
                    return b(this, (function(b) {
                        switch (b.label) {
                            case 0:
                                t = p.length > 1 && void 0 !== p[1] ? p[1] : {}, r = t.friendToken, n = t.withMutualGuilds, o = t.withMutualFriendsCount, c = t.guildId, l = t.connectionsRoleId, u = p.length > 2 ? p[2] : void 0;
                                a.Z.dispatch({
                                    type: "USER_PROFILE_FETCH_START",
                                    userId: e
                                });
                                b.label = 1;
                            case 1:
                                b.trys.push([1, 3, , 4]);
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
                                f = b.sent();
                                null == u || u(f.body, c);
                                a.Z.dispatch({
                                    type: "USER_UPDATE",
                                    user: f.body.user
                                });
                                a.Z.dispatch(y({
                                    type: "USER_PROFILE_FETCH_SUCCESS"
                                }, f.body));
                                null != c && null != f.body.guild_member && a.Z.dispatch({
                                    type: "GUILD_MEMBER_PROFILE_UPDATE",
                                    guildId: c,
                                    guildMember: f.body.guild_member
                                });
                                return [2, f.body];
                            case 3:
                                null != (d = b.sent()) && null != (null == d ? void 0 : d.body) && h.warn("fetchProfile error: ".concat(d.body.code, " - ").concat(d.body.message));
                                a.Z.dispatch({
                                    type: "USER_PROFILE_FETCH_FAILURE",
                                    userId: e
                                });
                                throw d;
                            case 4:
                                return [2]
                        }
                    }))
                }));
                return w.apply(this, arguments)
            }

            function C(e) {
                return E.apply(this, arguments)
            }

            function E() {
                return (E = d((function(e) {
                    var t, r;
                    return b(this, (function(n) {
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
                                null != (null == (r = n.sent()) ? void 0 : r.body) && h.warn("fetchMutualFriends error: ".concat(r.body.code, " - ").concat(r.body.message));
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
                h: () => m
            });
            var n = r(785893),
                o = r(667294),
                c = r(441143),
                i = r.n(c),
                a = r(882723),
                l = r(579344),
                u = r(296602),
                s = r(514606),
                f = r(107364),
                d = r(473708),
                p = r(99235),
                y = r.n(p);

            function b(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function h(e, t, r, n, o, c, i) {
                try {
                    var a = e[c](i),
                        l = a.value
                } catch (e) {
                    r(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(n, o)
            }

            function O(e, t) {
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
                    if ("string" == typeof e) return b(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return b(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var v = function(e, t) {
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
                g = new u.Z("TwoWayLinkDiscordConsentWeb");

            function m(e) {
                var t, r, c = e.platformType,
                    u = e.clientId,
                    p = e.scopes,
                    b = e.authToken,
                    m = e.onContinue,
                    j = e.onError,
                    w = e.onClose,
                    C = e.redirectUri,
                    E = O(o.useState(!1), 2),
                    x = E[0],
                    N = E[1],
                    S = o.useCallback((r = (t = function(e) {
                        var t, r, n, o, i;
                        return v(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    t = e.location;
                                    r = b.callbackCode, n = b.callbackState;
                                    a.label = 1;
                                case 1:
                                    a.trys.push([1, 3, , 4]);
                                    return [4, l.Z.completeTwoWayLink(c, t, r, n)];
                                case 2:
                                    o = a.sent();
                                    return [3, 4];
                                case 3:
                                    i = a.sent();
                                    g.error("".concat(c, " link error:"), i);
                                    return [3, 4];
                                case 4:
                                    null != o ? m() : j();
                                    return [2]
                            }
                        }))
                    }, function() {
                        var e = this,
                            r = arguments;
                        return new Promise((function(n, o) {
                            var c = t.apply(e, r);

                            function i(e) {
                                h(c, n, o, i, a, "next", e)
                            }

                            function a(e) {
                                h(c, n, o, i, a, "throw", e)
                            }
                            i(void 0)
                        }))
                    }), function(e) {
                        return r.apply(this, arguments)
                    }), [c, b, m, j]),
                    P = (0, s.useOAuth2AuthorizeForm)({
                        clientId: u,
                        scopes: p,
                        responseType: "code",
                        callback: S,
                        isTrustedName: !0,
                        isEmbeddedFlow: !0,
                        redirectUri: C
                    }),
                    _ = P.header,
                    T = P.body,
                    R = P.appDetails,
                    I = P.sendAuthorize,
                    A = o.useCallback((function() {
                        i()(null != I, "sendAuthorize not available");
                        N(!0);
                        I(!0)
                    }), [I]);
                return (0, n.jsxs)("div", {
                    className: y().container,
                    children: [null != w && (0, n.jsx)(a.ModalCloseButton, {
                        className: y().closeButton,
                        onClick: w
                    }), (0, n.jsxs)(a.Scroller, {
                        children: [(0, n.jsx)(a.ModalHeader, {
                            direction: f.Z.Direction.VERTICAL,
                            className: y().header,
                            separator: !1,
                            children: (0, n.jsx)(a.Text, {
                                className: y().stepHeader,
                                variant: "text-xs/bold",
                                color: "header-secondary",
                                children: d.Z.Messages.BIDIRECTIONAL_STEP_HEADER.format({
                                    number: 2,
                                    total: 2
                                })
                            })
                        }), (0, n.jsxs)("div", {
                            className: y().discordConsentBody,
                            children: [_, T, R]
                        }), (0,
                            n.jsx)(a.ModalFooter, {
                            className: y().footer,
                            children: (0, n.jsx)(a.Button, {
                                className: y().footerButton,
                                color: a.Button.Colors.BRAND,
                                submitting: x,
                                onClick: A,
                                children: d.Z.Messages.AUTHORIZE_AND_CONTINUE
                            })
                        })]
                    })]
                })
            }
        },
        227363: (e, t, r) => {
            "use strict";
            r.d(t, {
                C: () => d
            });
            var n = r(785893),
                o = (r(667294), r(882723)),
                c = r(107364),
                i = r(824456),
                a = r(473708),
                l = r(99235),
                u = r.n(l),
                s = r(727157),
                f = r.n(s);

            function d(e) {
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
                c = r(882723),
                i = r(629223),
                a = r(107364),
                l = r(473708),
                u = r(99235),
                s = r.n(u);

            function f(e) {
                var t = e.platformType,
                    r = e.onContinue,
                    u = e.onClose,
                    f = e.img,
                    d = e.headerConnect,
                    p = e.headerReconnect,
                    y = e.body,
                    b = e.learnMoreLink,
                    h = e.valueProps,
                    O = (0, o.e7)([i.Z], (function() {
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
                            children: O && null != p ? p : d
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
                            children: y
                        }), (0, n.jsx)("div", {
                            className: s().valueProps,
                            children: h
                        }), null != b ? (0, n.jsx)(c.Text, {
                            tag: "p",
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            children: l.Z.Messages.CONNECT_CONSOLE_LANDING_BODY_LEARN_MORE.format({
                                helpCenterLink: b
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
                t: () => w
            });
            var n = r(785893),
                o = r(667294),
                c = r(441143),
                i = r.n(c),
                a = r(72190),
                l = r(882723),
                u = r(744564),
                s = r(53645),
                f = r(497842),
                d = r(296602),
                p = r(107364),
                y = r(824456),
                b = r(473708),
                h = r(99235),
                O = r.n(h);

            function v(e, t, r, n, o, c, i) {
                try {
                    var a = e[c](i),
                        l = a.value
                } catch (e) {
                    r(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(n, o)
            }

            function g(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var c = e.apply(t, r);

                        function i(e) {
                            v(c, n, o, i, a, "next", e)
                        }

                        function a(e) {
                            v(c, n, o, i, a, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }
            var m = function(e, t) {
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
                j = new d.Z("TwoWayLink");

            function w(e) {
                var t = e.platformType,
                    r = e.isWaitingForConnection,
                    c = e.onWaitingForConnection,
                    d = e.expectedCallbackState,
                    h = e.onAuthToken,
                    v = e.onError,
                    w = e.onClose,
                    C = e.img,
                    E = e.title,
                    x = e.body,
                    N = e.redirectDestination,
                    S = o.useCallback(g((function() {
                        var e, r, n;
                        return m(this, (function(o) {
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
                                    j.error("Error opening provider authorize page", r);
                                    v();
                                    return [2];
                                case 3:
                                    n = (0, s.xp)(e).state;
                                    i()(null != n, "Authorize URL state query parameter must be present");
                                    null == c || c(n);
                                    return [2]
                            }
                        }))
                    })), [t, v, c]),
                    P = o.useCallback((function(e) {
                        var r = e.callbackCode,
                            n = e.callbackState;
                        n === d ? h({
                            callbackCode: r,
                            callbackState: n
                        }) : j.warn("".concat(t, " link: received mismatching callback state!"))
                    }), [t, d, h]);
                o.useEffect((function() {
                    u.Z.subscribe("USER_CONNECTIONS_LINK_CALLBACK", P);
                    return function() {
                        u.Z.unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", P)
                    }
                }), [P]);
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)(l.ModalHeader, {
                        direction: p.Z.Direction.VERTICAL,
                        className: O().header,
                        separator: !1,
                        children: [(0, n.jsx)(l.Text, {
                            className: O().stepHeader,
                            variant: "text-xs/bold",
                            color: "header-secondary",
                            children: b.Z.Messages.BIDIRECTIONAL_STEP_HEADER.format({
                                number: 1,
                                total: 2
                            })
                        }), (0, n.jsxs)("div", {
                            className: O().illustration,
                            children: [C, " "]
                        }), (0, n.jsx)(l.Heading, {
                            className: O().title,
                            variant: "heading-xl/extrabold",
                            children: E
                        }), null != w && (0, n.jsx)(l.ModalCloseButton, {
                            className: O().closeButton,
                            onClick: w
                        })]
                    }), (0, n.jsxs)(l.ModalContent, {
                        className: O().body,
                        paddingFix: !1,
                        children: [(0, n.jsx)(l.Text, {
                            tag: "p",
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: x
                        }), !r && (0, n.jsx)(l.Text, {
                            tag: "p",
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            children: b.Z.Messages.CONSOLE_REDIRECT_NOTICE.format({
                                redirectUrl: N
                            })
                        })]
                    }), (0, n.jsx)(l.ModalFooter, {
                        className: O().footer,
                        children: (0, n.jsxs)(l.Button, {
                            className: O().footerButton,
                            color: r ? l.Button.Colors.PRIMARY : l.Button.Colors.BRAND,
                            onClick: S,
                            children: [r ? b.Z.Messages.RETRY : b.Z.Messages.CONTINUE, (0, n.jsx)(y.Z, {
                                className: O().launchIcon,
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
                o = (r(667294), r(882723)),
                c = r(107364),
                i = r(473708),
                a = r(99235),
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
                o = (r(667294), r(882723)),
                c = r(99235),
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
                    d = u(n.useState(null), 2),
                    p = d[0],
                    y = d[1],
                    b = u(n.useState(null), 2),
                    h = b[0],
                    O = b[1],
                    v = n.useCallback((function() {
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
                    g = n.useCallback((function() {
                        y(null);
                        s(i.O.ERROR)
                    }), []),
                    m = n.useCallback((function(e) {
                        y(e);
                        s(i.O.PRE_CONNECT_WAITING)
                    }), []),
                    j = n.useCallback((function(e) {
                        y(null);
                        O(e);
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
                    gotoNext: v,
                    gotoError: g,
                    handleWaitingForConnection: m,
                    handleAuthToken: j,
                    expectedCallbackState: p,
                    callbackData: h
                }
            }
        },
        629223: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => A
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
                    var r, n = l(e);
                    if (t) {
                        var o = l(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return u(this, r)
                }
            }
            var p = function(e) {
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
                    var t = d(r);

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
                y = r(848285),
                b = r(2590);

            function h(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
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

            function v(e) {
                v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return v(e)
            }

            function g(e) {
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

            function m(e, t) {
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

            function j(e, t) {
                return !t || "object" !== C(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function w(e, t) {
                w = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return w(e, t)
            }
            var C = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function E(e) {
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
                    var r, n = v(e);
                    if (t) {
                        var o = v(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return j(this, r)
                }
            }
            var x = new Set([b.ABu.CONTACTS]),
                N = !0,
                S = [],
                P = [],
                _ = {},
                T = {},
                R = function(e) {
                    S = e.filter((function(e) {
                        return !x.has(e.type) && i.Z.isSupported(e.type)
                    }));
                    P = e.filter((function(e) {
                        return x.has(e.type)
                    }));
                    N = !1
                };
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
                    t && w(e, t)
                }(r, e);
                var t = E(r);

                function r() {
                    h(this, r);
                    return t.apply(this, arguments)
                }
                var n = r.prototype;
                n.isJoining = function(e) {
                    return _[e] || !1
                };
                n.isFetching = function() {
                    return N
                };
                n.getAccounts = function() {
                    return S
                };
                n.getLocalAccounts = function() {
                    return P
                };
                n.getAccount = function(e, t) {
                    return S.find((function(r) {
                        return (null == e || r.id === e) && r.type === t
                    }))
                };
                n.getLocalAccount = function(e) {
                    return P.find((function(t) {
                        return t.type === e
                    }))
                };
                n.isSuggestedAccountType = function(e) {
                    return T[e] || !1
                };
                n.__getLocalVars = function() {
                    return {
                        LOCAL_PLATFORM_TYPES: x,
                        isFetching: N,
                        nonLocalAccounts: S,
                        localAccounts: P,
                        pendingJoins: _,
                        suggestedConnectionTypes: T,
                        updateAccounts: R
                    }
                };
                return r
            }(n.ZP.Store);
            I.displayName = "ConnectedAccountsStore";
            const A = new I(o.Z, {
                CONNECTION_OPEN: function(e) {
                    var t = e.connectedAccounts.map((function(e) {
                        return new p(e)
                    }));
                    R(t)
                },
                USER_CONNECTIONS_UPDATE: function(e) {
                    if (e.local && null != e.accounts) {
                        var t = e.accounts.map((function(e) {
                            return new p(m(g({}, e), {
                                integrations: e.integrations.map((function(e) {
                                    return m(g({}, e), {
                                        guild: new y.Z(e.guild)
                                    })
                                }))
                            }))
                        }));
                        R(t)
                    } else c.Z.fetch()
                },
                USER_CONNECTIONS_INTEGRATION_JOINING: function(e) {
                    _[e.integrationId] = e.joining
                },
                USER_CONNECTION_UPDATE: function(e) {
                    var t = e.platformType,
                        r = e.id,
                        n = e.revoked,
                        o = e.accessToken,
                        c = S.find((function(e) {
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
                Z: () => l
            });
            var n = r(785893),
                o = (r(667294), r(633878));

            function c(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function i(e, t) {
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

            function a(e, t) {
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

            function l(e) {
                var t = e.width,
                    r = void 0 === t ? 16 : t,
                    l = e.height,
                    u = void 0 === l ? 16 : l,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    d = e.foreground,
                    p = a(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", i(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            c(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(p)), {
                    width: r,
                    height: u,
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        d: "M12 2C6.4764 2 2 6.4764 2 12C2 17.5236 6.4764 22 12 22C17.5236 22 22 17.5236 22 12C22 6.4764 17.5236 2 12 2ZM12 5.6C12.4422 5.6 12.8 5.95781 12.8 6.4V11.5376L16.5625 13.7126C16.9453 13.9329 17.0703 14.4173 16.85 14.8001C16.6297 15.183 16.1453 15.3079 15.7625 15.0876L11.6873 12.7376C11.656 12.7251 11.6279 12.7048 11.5998 12.6876C11.3607 12.5486 11.1998 12.2954 11.1998 12.0001V6.4001C11.1998 5.9579 11.5578 5.6 12 5.6Z",
                        fill: f,
                        className: d
                    })
                }))
            }
        },
        824456: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => l
            });
            var n = r(785893),
                o = (r(667294), r(633878));

            function c(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function i(e, t) {
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

            function a(e, t) {
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

            function l(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    l = e.height,
                    u = void 0 === l ? 24 : l,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    d = e.foreground,
                    p = a(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsxs)("svg", i(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            c(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(p)), {
                    width: r,
                    height: u,
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("path", {
                        className: d,
                        fill: f,
                        d: "M10 5V3H5.375C4.06519 3 3 4.06519 3 5.375V18.625C3 19.936 4.06519 21 5.375 21H18.625C19.936 21 21 19.936 21 18.625V14H19V19H5V5H10Z"
                    }), (0, n.jsx)("path", {
                        className: d,
                        fill: f,
                        d: "M21 2.99902H14V4.99902H17.586L9.29297 13.292L10.707 14.706L19 6.41302V9.99902H21V2.99902Z"
                    })]
                }))
            }
        },
        349491: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => l
            });
            var n = r(785893),
                o = (r(667294), r(633878));

            function c(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function i(e, t) {
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

            function a(e, t) {
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

            function l(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    l = e.height,
                    u = void 0 === l ? 24 : l,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    d = e.className,
                    p = e.foreground,
                    y = a(e, ["width", "height", "color", "className", "foreground"]);
                return (0, n.jsx)("svg", i(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            c(e, t, r[t])
                        }))
                    }
                    return e
                }({
                    width: r,
                    height: u,
                    className: d,
                    viewBox: "0 0 24 24"
                }, (0, o.Z)(y)), {
                    children: (0, n.jsx)("path", {
                        className: p,
                        fill: f,
                        d: "M17 11V7C17 4.243 14.756 2 12 2C9.242 2 7 4.243 7 7V11C5.897 11 5 11.896 5 13V20C5 21.103 5.897 22 7 22H17C18.103 22 19 21.103 19 20V13C19 11.896 18.103 11 17 11ZM12 18C11.172 18 10.5 17.328 10.5 16.5C10.5 15.672 11.172 15 12 15C12.828 15 13.5 15.672 13.5 16.5C13.5 17.328 12.828 18 12 18ZM15 11H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V11Z",
                        "aria-hidden": !0
                    })
                }))
            }
        },
        128181: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => l
            });
            var n = r(785893),
                o = (r(667294), r(633878));

            function c(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function i(e, t) {
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

            function a(e, t) {
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

            function l(e) {
                var t = e.width,
                    r = void 0 === t ? 16 : t,
                    l = e.height,
                    u = void 0 === l ? 16 : l,
                    s = e.color,
                    f = void 0 === s ? "currentColor" : s,
                    d = a(e, ["width", "height", "color"]);
                return (0, n.jsx)("svg", i(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            c(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(d)), {
                    width: r,
                    height: u,
                    viewBox: "0 0 16 15.2",
                    children: (0, n.jsx)("path", {
                        d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z",
                        fill: f
                    })
                }))
            }
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
        }
    }
]);
//# sourceMappingURL=55c4c7e8409cdc26088d.js.map