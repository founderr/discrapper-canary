"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [53781], {
        285991: (e, t, r) => {
            r.d(t, {
                k: () => O,
                Lr: () => h,
                mB: () => _,
                PR: () => g,
                In: () => v,
                Sr: () => P
            });
            var n = r(441143),
                o = r.n(n),
                i = r(495414),
                l = r(281110),
                c = r(744564),
                u = r(722406),
                s = r(473903),
                a = r(2590);

            function f(e, t, r, n, o, i, l) {
                try {
                    var c = e[i](l),
                        u = c.value
                } catch (e) {
                    r(e);
                    return
                }
                c.done ? t(u) : Promise.resolve(u).then(n, o)
            }

            function d(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = e.apply(t, r);

                        function l(e) {
                            f(i, n, o, l, c, "next", e)
                        }

                        function c(e) {
                            f(i, n, o, l, c, "throw", e)
                        }
                        l(void 0)
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
                    var r, n, o, i, l = {
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
                                for (; l;) try {
                                    if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                    (n = 0, o) && (i = [2 & i[0], o.value]);
                                    switch (i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            l.label++;
                                            return {
                                                value: i[1], done: !1
                                            };
                                        case 5:
                                            l.label++;
                                            n = i[1];
                                            i = [0];
                                            continue;
                                        case 7:
                                            i = l.ops.pop();
                                            l.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = l.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                l.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && l.label < o[1]) {
                                                l.label = o[1];
                                                o = i;
                                                break
                                            }
                                            if (o && l.label < o[2]) {
                                                l.label = o[2];
                                                l.ops.push(i);
                                                break
                                            }
                                            o[2] && l.ops.pop();
                                            l.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, l)
                                } catch (e) {
                                    i = [6, e];
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
                },
                E = new i.Z("UserProfileModalActionCreators");

            function O() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.withAnalyticsToken,
                    r = void 0 !== t && t;
                return l.ZP.get({
                    url: a.ANM.ME,
                    query: {
                        with_analytics_token: r
                    },
                    oldFormErrors: !0
                }).then((function(e) {
                    c.Z.dispatch({
                        type: "CURRENT_USER_UPDATE",
                        user: e.body,
                        analyticsToken: r ? e.body.analytics_token : void 0
                    });
                    return new u.Z(e.body)
                }))
            }

            function h() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                    t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                return l.ZP.patch({
                    url: a.ANM.USER_AGREEMENTS,
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

            function _(e, t) {
                var r = s.default.getCurrentUser();
                o()(null != r, "setFlag: user cannot be undefined");
                var n = t ? r.flags | e : r.flags & ~e;
                return l.ZP.patch({
                    url: a.ANM.ME,
                    oldFormErrors: !0,
                    body: {
                        flags: n
                    }
                })
            }

            function g(e) {
                var t = s.default.getUser(e);
                return null != t ? Promise.resolve(t) : l.ZP.get({
                    url: a.ANM.USER(e),
                    oldFormErrors: !0
                }).then((function(t) {
                    c.Z.dispatch({
                        type: "USER_UPDATE",
                        user: t.body
                    });
                    return s.default.getUser(e)
                }))
            }

            function v(e) {
                return S.apply(this, arguments)
            }

            function S() {
                S = d((function(e) {
                    var t, r, n, o, i, u, s, f, d, p = arguments;
                    return b(this, (function(b) {
                        switch (b.label) {
                            case 0:
                                t = p.length > 1 && void 0 !== p[1] ? p[1] : {}, r = t.friendToken, n = t.withMutualGuilds, o = t.withMutualFriendsCount, i = t.guildId, u = t.connectionsRoleId, s = p.length > 2 ? p[2] : void 0;
                                c.Z.dispatch({
                                    type: "USER_PROFILE_FETCH_START",
                                    userId: e
                                });
                                b.label = 1;
                            case 1:
                                b.trys.push([1, 3, , 4]);
                                return [4, l.ZP.get({
                                    url: a.ANM.USER_PROFILE(e),
                                    query: {
                                        friend_token: r,
                                        with_mutual_guilds: n,
                                        with_mutual_friends_count: o,
                                        guild_id: i,
                                        connections_role_id: u
                                    },
                                    oldFormErrors: !0
                                })];
                            case 2:
                                f = b.sent();
                                null == s || s(f.body, i);
                                c.Z.dispatch({
                                    type: "USER_UPDATE",
                                    user: f.body.user
                                });
                                c.Z.dispatch(y({
                                    type: "USER_PROFILE_FETCH_SUCCESS"
                                }, f.body));
                                null != i && null != f.body.guild_member && c.Z.dispatch({
                                    type: "GUILD_MEMBER_PROFILE_UPDATE",
                                    guildId: i,
                                    guildMember: f.body.guild_member
                                });
                                return [2, f.body];
                            case 3:
                                null != (d = b.sent()) && null != (null == d ? void 0 : d.body) && E.warn("fetchProfile error: ".concat(d.body.code, " - ").concat(d.body.message));
                                c.Z.dispatch({
                                    type: "USER_PROFILE_FETCH_FAILURE",
                                    userId: e
                                });
                                throw d;
                            case 4:
                                return [2]
                        }
                    }))
                }));
                return S.apply(this, arguments)
            }

            function P(e) {
                return I.apply(this, arguments)
            }

            function I() {
                return (I = d((function(e) {
                    var t, r;
                    return b(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                c.Z.dispatch({
                                    type: "MUTUAL_FRIENDS_FETCH_START",
                                    userId: e
                                });
                                n.label = 1;
                            case 1:
                                n.trys.push([1, 3, , 4]);
                                return [4, l.ZP.get({
                                    url: a.ANM.USER_RELATIONSHIPS(e),
                                    oldFormErrors: !0
                                })];
                            case 2:
                                t = n.sent();
                                c.Z.dispatch({
                                    type: "MUTUAL_FRIENDS_FETCH_SUCCESS",
                                    userId: e,
                                    mutualFriends: t.body
                                });
                                return [3, 4];
                            case 3:
                                null != (null == (r = n.sent()) ? void 0 : r.body) && E.warn("fetchMutualFriends error: ".concat(r.body.code, " - ").concat(r.body.message));
                                c.Z.dispatch({
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
        218790: (e, t, r) => {
            r.d(t, {
                v: () => s
            });
            var n = r(785893),
                o = (r(667294), r(795308)),
                i = r(633878);

            function l(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function c(e, t) {
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
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            var s = function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    s = e.height,
                    a = void 0 === s ? 24 : s,
                    f = e.color,
                    d = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    y = void 0 === p ? "" : p,
                    b = u(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", c(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            l(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(b)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: a,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "m13.957 5.457 4.586 4.586a1 1 0 0 0 1.414 0l1.379-1.379a2 2 0 0 0 0-2.828l-3.172-3.172a2 2 0 0 0-2.828 0l-1.379 1.379a1 1 0 0 0 0 1.414ZM2.111 20.156l.727-4.218a3 3 0 0 1 .835-1.611l7.87-7.87a1 1 0 0 1 1.414 0l4.586 4.586a1 1 0 0 1 0 1.414l-7.87 7.87a3 3 0 0 1-1.611.835l-4.218.727a1.5 1.5 0 0 1-1.733-1.733Z",
                        clipRule: "evenodd",
                        className: y
                    })
                }))
            }
        },
        175072: (e, t, r) => {
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
        702264: (e, t, r) => {
            r.d(t, {
                CX: () => b,
                J0: () => O,
                j7: () => v,
                Kt: () => S,
                I5: () => P,
                g_: () => I,
                z5: () => m,
                c6: () => T,
                Bn: () => j,
                Xo: () => D,
                JO: () => w,
                sN: () => N,
                lj: () => A
            });
            var n = r(281110),
                o = r(744564),
                i = r(285991),
                l = r(652591),
                c = r(755550),
                u = r(876986),
                s = r(2590);

            function a(e, t, r, n, o, i, l) {
                try {
                    var c = e[i](l),
                        u = c.value
                } catch (e) {
                    r(e);
                    return
                }
                c.done ? t(u) : Promise.resolve(u).then(n, o)
            }

            function f(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = e.apply(t, r);

                        function l(e) {
                            a(i, n, o, l, c, "next", e)
                        }

                        function c(e) {
                            a(i, n, o, l, c, "throw", e)
                        }
                        l(void 0)
                    }))
                }
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

            function p(e) {
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
            var y = function(e, t) {
                var r, n, o, i, l = {
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
                    },
                    "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                function c(i) {
                    return function(c) {
                        return function(i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                (n = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        n = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = l.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            l.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && l.label < o[1]) {
                                            l.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && l.label < o[2]) {
                                            l.label = o[2];
                                            l.ops.push(i);
                                            break
                                        }
                                        o[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                i = t.call(e, l)
                            } catch (e) {
                                i = [6, e];
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

            function b(e, t) {
                return E.apply(this, arguments)
            }

            function E() {
                return (E = f((function(e, t) {
                    return y(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, _(e, t)];
                            case 1:
                                return [2, r.sent()]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function O(e) {
                return h.apply(this, arguments)
            }

            function h() {
                return (h = f((function(e) {
                    return y(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, n.ZP.put({
                                    url: s.ANM.GUILD_CLYDE_ADD_MEMBER(e),
                                    oldFormErrors: !0
                                })];
                            case 1:
                                return [2, t.sent()]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function _(e, t) {
                return g.apply(this, arguments)
            }

            function g() {
                return (g = f((function(e, t) {
                    var r, i, c, a;
                    return y(this, (function(f) {
                        switch (f.label) {
                            case 0:
                                o.Z.dispatch({
                                    type: "CLYDE_GUILD_SETTINGS_SAVE_START"
                                });
                                f.label = 1;
                            case 1:
                                f.trys.push([1, 3, , 4]);
                                return [4, n.ZP.patch({
                                    url: s.ANM.GUILD_CLYDE_SETTINGS(e),
                                    oldFormErrors: !0,
                                    body: t
                                })];
                            case 2:
                                if ((r = f.sent()).ok) {
                                    o.Z.dispatch({
                                        type: "CLYDE_GUILD_SETTINGS_SAVE_SUCCESS",
                                        settings: r.body.settings
                                    });
                                    null != r.body.guild_member_profile && o.Z.dispatch(p({
                                        type: "USER_PROFILE_UPDATE_SUCCESS",
                                        userId: u.fL,
                                        profileEffectID: void 0
                                    }, r.body.guild_member_profile));
                                    null != r.body.guild_member && o.Z.dispatch({
                                        type: "GUILD_MEMBER_PROFILE_UPDATE",
                                        guildMember: r.body.guild_member,
                                        guildId: e
                                    });
                                    return [2, r.body.settings]
                                }
                                o.Z.dispatch({
                                    type: "CLYDE_GUILD_SETTINGS_SAVE_FAIL",
                                    errors: null !== (c = null === (i = r.body) || void 0 === i ? void 0 : i.errors) && void 0 !== c ? c : {}
                                });
                                l.default.track(s.rMx.CLYDE_AI_PROFILE_UPDATE_FAILED, {
                                    guild_id: e,
                                    clyde_profile_id: t.clyde_profile_id
                                });
                                return [2, null];
                            case 3:
                                a = f.sent();
                                o.Z.dispatch({
                                    type: "CLYDE_GUILD_SETTINGS_SAVE_FAIL",
                                    errors: a.body
                                });
                                l.default.track(s.rMx.CLYDE_AI_PROFILE_UPDATE_FAILED, {
                                    guild_id: e,
                                    clyde_profile_id: t.clyde_profile_id
                                });
                                return [2, null];
                            case 4:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function v(e) {
                o.Z.dispatch({
                    type: "CLYDE_SET_PENDING_PERSONALITY",
                    personality: e
                })
            }

            function S(e) {
                o.Z.dispatch({
                    type: "CLYDE_SET_PENDING_NICK",
                    nick: null != e ? e : ""
                })
            }

            function P(e) {
                o.Z.dispatch({
                    type: "CLYDE_SET_PENDING_AVATAR",
                    avatar: e
                })
            }

            function I(e) {
                o.Z.dispatch({
                    type: "CLYDE_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function m(e) {
                o.Z.dispatch({
                    type: "CLYDE_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function T() {
                o.Z.dispatch({
                    type: "CLYDE_RESET_PENDING_CHANGES"
                })
            }

            function j(e) {
                return L.apply(this, arguments)
            }

            function L() {
                L = f((function(e) {
                    var t, r, l = arguments;
                    return y(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                if (!(l.length > 1 && void 0 !== l[1] && l[1]) && !c.Z.shouldFetchSettings(e)) return [2];
                                (0, i.In)(u.fL, {
                                    guildId: e
                                });
                                o.Z.dispatch({
                                    type: "CLYDE_GUILD_SETTINGS_FETCH_START",
                                    guildId: e
                                });
                                a.label = 1;
                            case 1:
                                a.trys.push([1, 3, , 4]);
                                return [4, n.ZP.get({
                                    url: s.ANM.GUILD_CLYDE_SETTINGS(e),
                                    oldFormErrors: !0
                                })];
                            case 2:
                                t = a.sent();
                                r = t.body;
                                o.Z.dispatch({
                                    type: "CLYDE_GUILD_SETTINGS_FETCH_SUCCESS",
                                    guildId: r.guild_id,
                                    settings: r
                                });
                                return [3, 4];
                            case 3:
                                a.sent();
                                o.Z.dispatch({
                                    type: "CLYDE_GUILD_SETTINGS_FETCH_FAIL",
                                    guildId: e
                                });
                                return [3, 4];
                            case 4:
                                return [2]
                        }
                    }))
                }));
                return L.apply(this, arguments)
            }

            function D(e) {
                return C.apply(this, arguments)
            }

            function C() {
                return (C = f((function(e) {
                    var t, r;
                    return y(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                if (null != c.Z.getProfile(e)) return [2];
                                o.Z.dispatch({
                                    type: "CLYDE_PROFILE_FETCH_START",
                                    clydeProfileId: e
                                });
                                i.label = 1;
                            case 1:
                                i.trys.push([1, 3, , 4]);
                                return [4, n.ZP.get({
                                    url: s.ANM.CLYDE_PROFILES(e),
                                    oldFormErrors: !0
                                })];
                            case 2:
                                t = i.sent();
                                r = t.body;
                                o.Z.dispatch({
                                    type: "CLYDE_PROFILE_FETCH_SUCCESS",
                                    profile: r
                                });
                                return [3, 4];
                            case 3:
                                i.sent();
                                o.Z.dispatch({
                                    type: "CLYDE_PROFILE_FETCH_FAIL",
                                    clydeProfileId: e
                                });
                                return [3, 4];
                            case 4:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function w(e) {
                return R.apply(this, arguments)
            }

            function R() {
                return (R = f((function(e) {
                    var t;
                    return y(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                r.trys.push([0, 2, , 3]);
                                return [4, n.ZP.post({
                                    url: s.ANM.CLYDE_PROFILES_CREATE(e),
                                    oldFormErrors: !0
                                })];
                            case 1:
                                (t = r.sent()).ok && o.Z.dispatch({
                                    type: "CLYDE_PROFILE_CREATE_SUCCESS",
                                    profile: t.body
                                });
                                return [2, t.body];
                            case 2:
                                r.sent();
                                return [2, null];
                            case 3:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function N() {
                o.Z.dispatch({
                    type: "CLYDE_PROFILE_EDITING_START"
                })
            }

            function A() {
                o.Z.dispatch({
                    type: "CLYDE_PROFILE_EDITING_END"
                })
            }
        },
        525177: (e, t, r) => {
            r.d(t, {
                P: () => n,
                Z: () => i
            });
            var n, o = r(260561);
            ! function(e) {
                e[e.None = 0] = "None";
                e[e.DefaultOn = 1] = "DefaultOn";
                e[e.DefaultOff = 2] = "DefaultOff";
                e[e.ComingSoon = 3] = "ComingSoon";
                e[e.ClydeProfiles = 4] = "ClydeProfiles"
            }(n || (n = {}));
            const i = (0, o.B)({
                kind: "guild",
                id: "2023-03_clyde_ai",
                label: "ClydeAI",
                defaultConfig: {
                    experimentState: n.None
                },
                treatments: [{
                    id: 1,
                    label: "Enabled (Default Off)",
                    config: {
                        experimentState: n.DefaultOff
                    }
                }, {
                    id: 3,
                    label: "Enabled (Default On)",
                    config: {
                        experimentState: n.DefaultOn
                    }
                }, {
                    id: 4,
                    label: "Coming Soon",
                    config: {
                        experimentState: n.ComingSoon
                    }
                }, {
                    id: 5,
                    label: "Clyde Profiles",
                    config: {
                        experimentState: n.ClydeProfiles
                    }
                }]
            })
        },
        755550: (e, t, r) => {
            r.d(t, {
                Z: () => m
            });
            var n = r(202351),
                o = r(744564);

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function l(e) {
                l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return l(e)
            }

            function c(e, t) {
                return !t || "object" !== s(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function u(e, t) {
                u = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return u(e, t)
            }
            var s = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function a(e) {
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
                    return c(this, r)
                }
            }
            var f, d, p, y, b, E = !1,
                O = !1,
                h = null,
                _ = {},
                g = {},
                v = {},
                S = {};

            function P() {
                f = void 0;
                d = void 0;
                p = void 0;
                y = void 0;
                b = void 0;
                h = null
            }
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
                    t && u(e, t)
                }(r, e);
                var t = a(r);

                function r() {
                    i(this, r);
                    return t.apply(this, arguments)
                }
                var n = r.prototype;
                n.getSettings = function(e) {
                    if (null != e) return v[e]
                };
                n.getProfile = function(e) {
                    return null == e ? null : _[e]
                };
                n.getPendingPersonality = function() {
                    return f
                };
                n.getPendingNick = function() {
                    return d
                };
                n.getErrors = function() {
                    return h
                };
                n.hasPendingChanges = function() {
                    return void 0 !== f || void 0 !== d || void 0 !== p || void 0 !== y || void 0 !== b
                };
                n.getPendingUpdates = function() {
                    return {
                        pendingAvatar: p,
                        pendingNick: d,
                        pendingPersonality: f,
                        pendingBanner: y,
                        pendingThemeColors: b
                    }
                };
                n.isSavingSettings = function() {
                    return E
                };
                n.isFetchingSettings = function(e) {
                    var t;
                    return null === (t = S[e]) || void 0 === t ? void 0 : t.isFetching
                };
                n.shouldFetchSettings = function(e) {
                    var t, r, n = null !== (t = S[e]) && void 0 !== t ? t : {
                            isFetching: !1
                        },
                        o = Date.now() - (null !== (r = n.lastFetchTimestampMs) && void 0 !== r ? r : 0) > 36e5;
                    return !(null == n ? void 0 : n.isFetching) && o
                };
                n.isFetchingProfile = function(e) {
                    var t;
                    return null === (t = g[e]) || void 0 === t ? void 0 : t.isFetching
                };
                n.isEditingClydeProfile = function() {
                    return O
                };
                return r
            }(n.ZP.Store);
            I.displayName = "ClydeStore";
            const m = new I(o.Z, {
                CLYDE_GUILD_SETTINGS_FETCH_START: function(e) {
                    var t = e.guildId,
                        r = S[t];
                    S[t] = {
                        isFetching: !0,
                        lastFetchTimestampMs: null == r ? void 0 : r.lastFetchTimestampMs
                    }
                },
                CLYDE_GUILD_SETTINGS_FETCH_SUCCESS: function(e) {
                    var t = e.guildId,
                        r = e.settings;
                    S[t] = {
                        isFetching: !1,
                        lastFetchTimestampMs: Date.now()
                    };
                    v[t] = r
                },
                CLYDE_GUILD_SETTINGS_FETCH_FAIL: function(e) {
                    var t = e.guildId,
                        r = S[t];
                    S[t] = {
                        isFetching: !1,
                        lastFetchTimestampMs: null == r ? void 0 : r.lastFetchTimestampMs
                    }
                },
                CLYDE_SET_PENDING_PERSONALITY: function(e) {
                    var t = e.personality;
                    f = t
                },
                CLYDE_SET_PENDING_NICK: function(e) {
                    var t = e.nick;
                    d = t
                },
                CLYDE_SET_PENDING_AVATAR: function(e) {
                    var t = e.avatar;
                    p = t
                },
                CLYDE_SET_PENDING_BANNER: function(e) {
                    var t = e.banner;
                    y = t
                },
                CLYDE_SET_PENDING_THEME_COLORS: function(e) {
                    var t = e.themeColors;
                    b = t
                },
                CLYDE_GUILD_SETTINGS_SAVE_START: function() {
                    h = null;
                    E = !0
                },
                CLYDE_GUILD_SETTINGS_SAVE_SUCCESS: function(e) {
                    var t = e.settings;
                    E = !1;
                    v[t.guild_id] = t;
                    P()
                },
                CLYDE_GUILD_SETTINGS_SAVE_FAIL: function(e) {
                    E = !1;
                    h = e.errors
                },
                CLYDE_RESET_PENDING_CHANGES: P,
                CLYDE_PROFILE_FETCH_START: function(e) {
                    var t = e.clydeProfileId,
                        r = g[t];
                    g[t] = {
                        isFetching: !0,
                        lastFetchTimestampMs: null == r ? void 0 : r.lastFetchTimestampMs
                    }
                },
                CLYDE_PROFILE_FETCH_SUCCESS: function(e) {
                    var t = e.profile;
                    g[t.clyde_profile_id] = {
                        isFetching: !1,
                        lastFetchTimestampMs: Date.now()
                    };
                    _[t.clyde_profile_id] = t
                },
                CLYDE_PROFILE_FETCH_FAIL: function(e) {
                    var t = e.clydeProfileId,
                        r = g[t];
                    g[t] = {
                        isFetching: !1,
                        lastFetchTimestampMs: null == r ? void 0 : r.lastFetchTimestampMs
                    }
                },
                CLYDE_PROFILE_CREATE_SUCCESS: function(e) {
                    var t = e.profile;
                    _[t.clyde_profile_id] = t
                },
                CLYDE_PROFILE_EDITING_START: function() {
                    O = !0
                },
                CLYDE_PROFILE_EDITING_END: function() {
                    O = !1
                }
            })
        },
        23925: (e, t, r) => {
            r.d(t, {
                g0: () => b,
                gJ: () => p,
                M9: () => y,
                Ib: () => f,
                lT: () => s,
                OR: () => a
            });
            r(667294), r(202351);
            var n = r(567403),
                o = r(682776),
                i = r(525177),
                l = (0, r(260561).B)({
                    kind: "user",
                    id: "2023-06_clyde_ai_gdm",
                    label: "Clyde in DMs/GDMs",
                    defaultConfig: {
                        isClydeEnabledinGdms: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "enable clyde in gdms",
                        config: {
                            isClydeEnabledinGdms: !0
                        }
                    }]
                });
            var c = r(2590),
                u = r(897196);

            function s(e) {
                var t, r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "",
                    o = i.Z.useExperiment({
                        guildId: n,
                        location: "1e9ccc_1"
                    }, {
                        autoTrackExposure: r
                    }).experimentState;
                return o
            }

            function a(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = s(e, t);
                return r === i.P.ClydeProfiles
            }

            function f(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    n = s(e, r);
                return d(n, e, t)
            }

            function d(e, t, r) {
                if (null == t) {
                    if (null != r && r.isPrivate()) {
                        return !!r.hasFlag(u.zZ.CLYDE_AI) || !!l.getCurrentConfig({
                            location: "38acdb_1"
                        }, {
                            autoTrackExposure: !1
                        }).isClydeEnabledinGdms && n.Z.getGuildIds().some((function(e) {
                            return y(n.Z.getGuild(e))
                        }))
                    }
                    return !1
                }
                return null != e && e !== i.P.None && o.Z.can(c.Plq.USE_CLYDE_AI, r)
            }

            function p(e, t) {
                var r, n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    o = null !== (r = null == e ? void 0 : e.id) && void 0 !== r ? r : "",
                    l = i.Z.getCurrentConfig({
                        guildId: o,
                        location: "1e9ccc_2"
                    }, {
                        autoTrackExposure: n
                    }).experimentState;
                return d(l, e, t)
            }

            function y(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = E(e, t);
                return r !== i.P.None
            }

            function b(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return E(e, t) === i.P.ClydeProfiles
            }

            function E(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (null == e) return !1;
                var r = e.id;
                return i.Z.getCurrentConfig({
                    guildId: r,
                    location: "1e9ccc_4"
                }, {
                    autoTrackExposure: t
                }).experimentState
            }
        },
        53781: (e, t, r) => {
            r.r(t);
            r.d(t, {
                default: () => M
            });
            var n = r(785893),
                o = r(667294),
                i = r(202351),
                l = r(304548),
                c = r(934870),
                u = r(567403),
                s = r(473903),
                a = r(609853),
                f = r(107364),
                d = r(443812),
                p = r(873308),
                y = r(652591),
                b = r(775173),
                E = r(702264),
                O = r(755550),
                h = r(131286),
                _ = r(23925);
            var g = r(294184),
                v = r.n(g),
                S = r(472034),
                P = r(749565),
                I = r(473708),
                m = r(268969),
                T = r.n(m);

            function j(e) {
                var t = e.user,
                    r = e.className;
                return (0, n.jsxs)("div", {
                    className: v()(r, T().container),
                    children: [(0, n.jsx)(S.Z, {
                        color: "var(--interactive-active)",
                        width: 12,
                        height: 12
                    }), (0, n.jsx)(l.Text, {
                        color: "text-normal",
                        variant: "text-xs/medium",
                        children: I.Z.Messages.CLYDE_LAST_EDITED_BY_TAG.format({
                            username: P.ZP.getUserTag(t, {
                                decoration: "auto"
                            })
                        })
                    })]
                })
            }
            var L, D = r(2590),
                C = r(175072),
                w = r(371124),
                R = r.n(w);

            function N(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function A(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function x(e, t) {
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

            function F(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function Z(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, i = [],
                            l = !0,
                            c = !1;
                        try {
                            for (r = r.call(e); !(l = (n = r.next()).done); l = !0) {
                                i.push(n.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            c = !0;
                            o = e
                        } finally {
                            try {
                                l || null == r.return || r.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return N(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return N(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }! function(e) {
                e.APPLY_PERSONALITY = "apply-personality";
                e.CONFIRMATION = "confirmation"
            }(L || (L = {}));

            function M(e) {
                var t = e.clydeProfile,
                    r = F(e, ["clydeProfile"]),
                    c = r.onClose,
                    u = (0, d.Dt)(),
                    s = Z(o.useState(L.APPLY_PERSONALITY), 2),
                    a = s[0],
                    p = s[1],
                    b = Z(o.useState(), 2),
                    h = b[0],
                    _ = b[1],
                    g = (0, i.e7)([O.Z], O.Z.isSavingSettings);
                return (0, n.jsxs)(l.ModalRoot, x(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            A(e, t, r[t])
                        }))
                    }
                    return e
                }({}, r), {
                    size: l.ModalSize.DYNAMIC,
                    className: R().modal,
                    "aria-labelledby": u,
                    children: [(0, n.jsx)("div", {
                        className: R().slidesContainer,
                        children: (0, n.jsxs)(l.Slides, {
                            activeSlide: a,
                            centered: !1,
                            children: [(0, n.jsx)(l.Slide, {
                                id: L.APPLY_PERSONALITY,
                                children: (0, n.jsx)(G, {
                                    setSelectedGuildId: _,
                                    selectedGuildId: h,
                                    clydeProfile: t
                                })
                            }), (0, n.jsx)(l.Slide, {
                                id: L.CONFIRMATION,
                                children: null != h ? (0, n.jsx)(Y, {
                                    onClose: c,
                                    clydeProfile: t,
                                    guildId: h
                                }) : null
                            })]
                        })
                    }), a === L.APPLY_PERSONALITY ? (0, n.jsxs)(l.ModalFooter, {
                        justify: f.Z.Justify.BETWEEN,
                        className: R().footer,
                        children: [(0, n.jsx)(l.Button, {
                            disabled: null == h,
                            submitting: g,
                            onClick: function() {
                                null != h && (0, E.CX)(h, {
                                    clyde_profile_id: t.clyde_profile_id
                                }).then((function(e) {
                                    if (null != e) {
                                        p(L.CONFIRMATION);
                                        y.default.track(D.rMx.CLYDE_AI_SHARED_PROFILE_APPLIED, {
                                            clyde_profile_id: t.clyde_profile_id,
                                            guild_id: h
                                        })
                                    } else(0, l.showToast)((0, l.createToast)(I.Z.Messages.CLYDE_PROFILE_ERROR_MESSAGE_GENERIC, l.ToastType.FAILURE))
                                }))
                            },
                            children: I.Z.Messages.CLYDE_PROFILE_APPLY
                        }), (0, n.jsx)(l.Button, {
                            look: l.ButtonLooks.BLANK,
                            color: l.ButtonColors.TRANSPARENT,
                            onClick: c,
                            children: (0, n.jsx)(l.Text, {
                                className: R().closeButton,
                                variant: "text-md/semibold",
                                children: I.Z.Messages.CLOSE
                            })
                        })]
                    }) : null]
                }))
            }

            function G(e) {
                var t, r = e.clydeProfile,
                    c = e.selectedGuildId,
                    f = e.setSelectedGuildId,
                    d = (0, h.Z)(r),
                    p = function() {
                        var e = (0, i.e7)([u.Z], (function() {
                            return u.Z.getGuilds()
                        }));
                        return o.useMemo((function() {
                            return Object.values(e).filter((function(e) {
                                return (0, _.g0)(e)
                            }))
                        }), [e])
                    }(),
                    y = (0, i.e7)([s.default], (function() {
                        return s.default.getUser(r.author_id)
                    })),
                    b = I.Z.Messages.CLYDE_PROFILE_APPLY_PERSONALITY_SUBHEADING.format({
                        clydeHook: function(e) {
                            return (0, n.jsx)(l.Text, {
                                className: R().clydeName,
                                tag: "span",
                                variant: "text-sm/medium",
                                children: e
                            })
                        }
                    });
                return (0, n.jsxs)("div", {
                    className: R().applySlideContainer,
                    children: [(0, n.jsxs)("div", {
                        className: R().characterContainer,
                        children: [(0, n.jsx)(l.Avatar, {
                            src: d,
                            size: l.AvatarSizes.SIZE_80,
                            "aria-hidden": !0
                        }), (0,
                            n.jsxs)("div", {
                            className: R().nameContainer,
                            children: [(0, n.jsx)(l.Text, {
                                variant: "text-lg/semibold",
                                children: r.name
                            }), (0, n.jsx)(a.Z, {
                                type: C.H.AI
                            })]
                        }), null != y ? (0, n.jsx)(j, {
                            className: R().lastEditedByContainer,
                            user: y
                        }) : null, (0, n.jsx)(l.FormItem, {
                            className: R().personalityItem,
                            title: I.Z.Messages.PERSONALITY_CLYDE_SECTION,
                            children: (0, n.jsx)(l.TextArea, {
                                className: R().personalityTextArea,
                                value: null !== (t = r.personality) && void 0 !== t ? t : "",
                                spellCheck: !1
                            })
                        })]
                    }), (0, n.jsxs)("div", {
                        className: R().serverSelectContainer,
                        children: [(0, n.jsx)(l.Text, {
                            className: R().serverSelectTitle,
                            variant: "text-lg/semibold",
                            children: I.Z.Messages.CLYDE_PROFILE_APPLY_PERSONALITY
                        }), (0, n.jsx)(l.Text, {
                            className: R().serverSelectDescription,
                            variant: "text-sm/medium",
                            children: b
                        }), (0, n.jsxs)(l.FormItem, {
                            className: R().serverSelectField,
                            title: I.Z.Messages.CLYDE_PROFILE_APPLY_TO_GUILD,
                            children: [(0, n.jsx)(l.Text, {
                                className: R().applyToCaption,
                                variant: "text-xs/normal",
                                children: I.Z.Messages.CLYDE_PROFILE_APPLY_TO_GUILD_CAPTION
                            }), (0,
                                n.jsx)(l.SearchableSelect, {
                                isDisabled: 0 === p.length,
                                placeholder: I.Z.Messages.CLYDE_PROFILE_SELECT_GUILD,
                                value: c,
                                options: p.map((function(e) {
                                    return {
                                        label: e.name,
                                        value: e.id
                                    }
                                })),
                                onChange: function(e) {
                                    return f(e)
                                }
                            }), 0 === p.length ? (0, n.jsx)(l.Text, {
                                className: R().selectGuildErrorLabel,
                                variant: "text-xs/normal",
                                children: I.Z.Messages.CLYDE_PROFILE_SELECT_GUILD_ERROR
                            }) : null]
                        })]
                    })]
                })
            }

            function Y(e) {
                var t, r = e.clydeProfile,
                    o = e.guildId,
                    s = e.onClose,
                    f = (0, h.Z)(r),
                    d = (0, i.e7)([u.Z], (function() {
                        return u.Z.getGuild(o)
                    })),
                    y = null != d && null != d.icon ? b.ZP.getGuildIconURL({
                        id: o,
                        icon: d.icon,
                        size: 16
                    }) : null;
                return (0, n.jsxs)("div", {
                    className: R().confirmationSlide,
                    children: [(0, n.jsx)(l.Avatar, {
                        src: f,
                        size: l.AvatarSizes.SIZE_80,
                        "aria-hidden": !0
                    }), (0, n.jsxs)("div", {
                        className: R().nameContainer,
                        children: [(0, n.jsx)(l.Text, {
                            variant: "text-lg/semibold",
                            children: r.name
                        }), (0, n.jsx)(a.Z, {
                            type: C.H.AI
                        })]
                    }), (0, n.jsx)(l.Text, {
                        className: R().appliedToLabel,
                        variant: "text-sm/medium",
                        children: I.Z.Messages.CLYDE_PROFILE_APPLIED_TO
                    }), (0,
                        n.jsx)(l.Button, {
                        color: l.ButtonColors.PRIMARY,
                        onClick: function() {
                            (0, c.X)(o);
                            s()
                        },
                        className: R().guildButton,
                        size: l.ButtonSizes.TINY,
                        children: (0, n.jsxs)("div", {
                            className: R().guildButtonContainer,
                            children: [null != (null == d ? void 0 : d.icon) ? (0, n.jsx)(l.Avatar, {
                                src: y,
                                size: l.AvatarSizes.SIZE_16,
                                "aria-hidden": !0
                            }) : null, (0, n.jsx)(l.Text, {
                                color: "always-white",
                                variant: "text-xs/medium",
                                children: null !== (t = null == d ? void 0 : d.name) && void 0 !== t ? t : ""
                            }), (0, n.jsx)(p.Z, {
                                width: 16,
                                height: 16,
                                direction: p.N.RIGHT
                            })]
                        })
                    }), (0, n.jsx)(l.Button, {
                        onClick: s,
                        size: l.ButtonSizes.MEDIUM,
                        children: I.Z.Messages.GOT_IT
                    })]
                })
            }
        },
        609853: (e, t, r) => {
            r.d(t, {
                Z: () => E
            });
            var n = r(785893),
                o = (r(667294), r(294184)),
                i = r.n(o),
                l = r(22212),
                c = r(985651),
                u = r(175072),
                s = r(473708),
                a = r(813968),
                f = r.n(a);

            function d(e, t, r) {
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
            var b = function(e) {
                var t = e.invertColor,
                    r = void 0 !== t && t,
                    o = e.type,
                    a = void 0 === o ? u.H.BOT : o,
                    b = e.className,
                    E = e.verified,
                    O = e.hideIcon,
                    h = void 0 !== O && O,
                    _ = e.useRemSizes,
                    g = void 0 !== _ && _,
                    v = e.children,
                    S = void 0 === v ? [] : v,
                    P = null,
                    I = s.Z.Messages.VERIFIED_BOT_TOOLTIP;
                switch (a) {
                    case u.H.SYSTEM_DM:
                    case u.H.OFFICIAL:
                        E = !0;
                        I = s.Z.Messages.DISCORD_SYSTEM_MESSAGE_BOT_TAG_TOOLTIP;
                        P = s.Z.Messages.SYSTEM_DM_TAG_SYSTEM;
                        break;
                    case u.H.SERVER:
                        P = s.Z.Messages.BOT_TAG_SERVER;
                        break;
                    case u.H.ORIGINAL_POSTER:
                        P = s.Z.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER;
                        break;
                    case u.H.STAFF_ONLY_DM:
                        P = s.Z.Messages.STAFF_BADGE_TOOLTIP;
                        break;
                    case u.H.AI:
                        E = !0;
                        I = s.Z.Messages.AI_GENERATED_TOOLTIP;
                        P = s.Z.Messages.AI_TAG;
                        break;
                    case u.H.REMIX:
                        E = !1;
                        P = s.Z.Messages.REMIXING_TAG;
                        break;
                    case u.H.BOT:
                    default:
                        P = s.Z.Messages.BOT_TAG_BOT
                }
                var m, T = a === u.H.ORIGINAL_POSTER,
                    j = a === u.H.REMIX,
                    L = null;
                E && (L = (0, n.jsx)(l.u, {
                    text: I,
                    align: "center",
                    position: "top",
                    children: function(e) {
                        return (0, n.jsx)(c.Z, y(p({}, e), {
                            className: f().botTagVerified
                        }))
                    }
                }));
                m = a === u.H.AI ? f().botTagAI : r ? f().botTagInvert : f().botTagRegular;
                var D = function(e) {
                    var t;
                    return (0, n.jsxs)("span", y(p({}, e), {
                        className: i()(b, m, g ? f().rem : f().px, (t = {}, d(t, f().botTagOP, T), d(t, f().botTagRemix, j), t)),
                        children: [h ? null : L, S, (0, n.jsx)("span", {
                            className: f().botText,
                            children: P
                        })]
                    }))
                };
                switch (a) {
                    case u.H.REMIX:
                        return (0,
                            n.jsx)(l.u, {
                            text: s.Z.Messages.REMIXING_DOWNLOAD_APP,
                            position: "top",
                            children: function(e) {
                                return D(e)
                            }
                        });
                    case u.H.ORIGINAL_POSTER:
                        return (0, n.jsx)(l.u, {
                            text: s.Z.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER_TOOLTIP,
                            position: "top",
                            children: function(e) {
                                return D(e)
                            }
                        });
                    default:
                        return D()
                }
            };
            b.Types = u.H;
            const E = b
        },
        443812: (e, t, r) => {
            r.d(t, {
                hQ: () => l,
                Dt: () => c,
                FG: () => u
            });
            var n = r(873955),
                o = r.n(n),
                i = r(989824),
                l = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return o()(e)
                },
                c = function() {
                    return (0, i.Z)((function() {
                        return l()
                    }))
                },
                u = function(e) {
                    return (0, e.children)(c())
                }
        },
        873308: (e, t, r) => {
            r.d(t, {
                N: () => n,
                Z: () => b
            });
            var n, o = r(785893),
                i = (r(667294), r(294184)),
                l = r.n(i),
                c = r(633878),
                u = r(384479),
                s = r.n(u);

            function a(e, t, r) {
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

            function d(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }! function(e) {
                e.LEFT = "LEFT";
                e.RIGHT = "RIGHT";
                e.UP = "UP";
                e.DOWN = "DOWN";
                e.UP_LEFT = "UP_LEFT";
                e.DOWN_RIGHT = "DOWN_RIGHT"
            }(n || (n = {}));

            function p(e) {
                switch (e) {
                    case n.LEFT:
                        return s().left;
                    case n.RIGHT:
                        return s().right;
                    case n.UP:
                        return null;
                    case n.DOWN:
                        return s().down;
                    case n.UP_LEFT:
                        return s().upLeft;
                    case n.DOWN_RIGHT:
                        return s().downRight;
                    default:
                        throw new Error("Invalid Direction ".concat(e))
                }
            }
            var y = function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    n = e.height,
                    i = void 0 === n ? 24 : n,
                    u = e.color,
                    s = void 0 === u ? "currentColor" : u,
                    y = e.direction,
                    b = e.foreground,
                    E = e.className,
                    O = e.title,
                    h = d(e, ["width", "height", "color", "direction", "foreground", "className", "title"]);
                return (0, o.jsxs)("svg", f(function(e) {
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
                }({}, (0, c.Z)(h)), {
                    width: r,
                    height: i,
                    className: l()(E, p(y)),
                    viewBox: "0 0 24 24",
                    children: [null != O ? (0, o.jsx)("title", {
                        children: O
                    }) : null, (0, o.jsx)("polygon", {
                        className: b,
                        fill: s,
                        fillRule: "nonzero",
                        points: "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8"
                    })]
                }))
            };
            y.Directions = n;
            const b = y
        },
        472034: (e, t, r) => {
            r.d(t, {
                Z: () => a
            });
            var n = r(785893),
                o = (r(667294), r(168075)),
                i = r(218790),
                l = r(633878);

            function c(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function u(e, t) {
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

            function s(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            const a = (0, o.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 16 : t,
                    o = e.height,
                    i = void 0 === o ? 16 : o,
                    a = e.color,
                    f = void 0 === a ? "currentColor" : a,
                    d = e.foreground,
                    p = s(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", u(function(e) {
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
                }({}, (0, l.Z)(p)), {
                    width: r,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z",
                        className: d,
                        fill: f
                    })
                }))
            }), i.v)
        },
        985651: (e, t, r) => {
            r.d(t, {
                Z: () => p
            });
            var n = r(785893),
                o = (r(667294), r(168075)),
                i = r(795308),
                l = r(633878);

            function c(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function u(e, t) {
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

            function s(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function a(e, t, r) {
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

            function d(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            const p = (0, o.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 16 : t,
                    o = e.height,
                    i = void 0 === o ? 16 : o,
                    c = e.color,
                    u = void 0 === c ? "currentColor" : c,
                    s = d(e, ["width", "height", "color"]);
                return (0, n.jsx)("svg", f(function(e) {
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
                }({}, (0, l.Z)(s)), {
                    width: r,
                    height: i,
                    viewBox: "0 0 16 15.2",
                    children: (0, n.jsx)("path", {
                        d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z",
                        fill: u
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    a = void 0 === o ? 24 : o,
                    f = e.color,
                    d = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    y = void 0 === p ? "" : p,
                    b = s(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", u(function(e) {
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
                }({}, (0, l.Z)(b)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: a,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M18.707 7.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L10 14.586l7.293-7.293a1 1 0 0 1 1.414 0Z",
                        clipRule: "evenodd",
                        className: y
                    })
                }))
            }))
        },
        989824: (e, t, r) => {
            r.d(t, {
                Z: () => i
            });
            var n = r(667294),
                o = {};

            function i(e) {
                var t = (0, n.useRef)(o);
                t.current === o && (t.current = e());
                return t.current
            }
        }
    }
]);