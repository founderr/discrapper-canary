"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [94095], {
        285991: (e, t, n) => {
            n.d(t, {
                k: () => b,
                Lr: () => h,
                mB: () => O,
                PR: () => g,
                In: () => v,
                Sr: () => I
            });
            var r = n(441143),
                i = n.n(r),
                o = n(495414),
                l = n(281110),
                c = n(744564),
                u = n(722406),
                s = n(473903),
                a = n(2590);

            function d(e, t, n, r, i, o, l) {
                try {
                    var c = e[o](l),
                        u = c.value
                } catch (e) {
                    n(e);
                    return
                }
                c.done ? t(u) : Promise.resolve(u).then(r, i)
            }

            function f(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function l(e) {
                            d(o, r, i, l, c, "next", e)
                        }

                        function c(e) {
                            d(o, r, i, l, c, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function p(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function E(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        p(e, t, n[t])
                    }))
                }
                return e
            }
            var y = function(e, t) {
                    var n, r, i, o, l = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: c(0),
                        throw: c(1),
                        return: c(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function c(o) {
                        return function(c) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; l;) try {
                                    if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                    (r = 0, i) && (o = [2 & o[0], i.value]);
                                    switch (o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            l.label++;
                                            return {
                                                value: o[1], done: !1
                                            };
                                        case 5:
                                            l.label++;
                                            r = o[1];
                                            o = [0];
                                            continue;
                                        case 7:
                                            o = l.ops.pop();
                                            l.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = l.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                l.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && l.label < i[1]) {
                                                l.label = i[1];
                                                i = o;
                                                break
                                            }
                                            if (i && l.label < i[2]) {
                                                l.label = i[2];
                                                l.ops.push(o);
                                                break
                                            }
                                            i[2] && l.ops.pop();
                                            l.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, l)
                                } catch (e) {
                                    o = [6, e];
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, c])
                        }
                    }
                },
                _ = new o.Z("UserProfileModalActionCreators");

            function b() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.withAnalyticsToken,
                    n = void 0 !== t && t;
                return l.ZP.get({
                    url: a.ANM.ME,
                    query: {
                        with_analytics_token: n
                    },
                    oldFormErrors: !0
                }).then((function(e) {
                    c.Z.dispatch({
                        type: "CURRENT_USER_UPDATE",
                        user: e.body,
                        analyticsToken: n ? e.body.analytics_token : void 0
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

            function O(e, t) {
                var n = s.default.getCurrentUser();
                i()(null != n, "setFlag: user cannot be undefined");
                var r = t ? n.flags | e : n.flags & ~e;
                return l.ZP.patch({
                    url: a.ANM.ME,
                    oldFormErrors: !0,
                    body: {
                        flags: r
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
                S = f((function(e) {
                    var t, n, r, i, o, u, s, d, f, p = arguments;
                    return y(this, (function(y) {
                        switch (y.label) {
                            case 0:
                                t = p.length > 1 && void 0 !== p[1] ? p[1] : {}, n = t.friendToken, r = t.withMutualGuilds, i = t.withMutualFriendsCount, o = t.guildId, u = t.connectionsRoleId, s = p.length > 2 ? p[2] : void 0;
                                c.Z.dispatch({
                                    type: "USER_PROFILE_FETCH_START",
                                    userId: e
                                });
                                y.label = 1;
                            case 1:
                                y.trys.push([1, 3, , 4]);
                                return [4, l.ZP.get({
                                    url: a.ANM.USER_PROFILE(e),
                                    query: {
                                        friend_token: n,
                                        with_mutual_guilds: r,
                                        with_mutual_friends_count: i,
                                        guild_id: o,
                                        connections_role_id: u
                                    },
                                    oldFormErrors: !0
                                })];
                            case 2:
                                d = y.sent();
                                null == s || s(d.body, o);
                                c.Z.dispatch({
                                    type: "USER_UPDATE",
                                    user: d.body.user
                                });
                                c.Z.dispatch(E({
                                    type: "USER_PROFILE_FETCH_SUCCESS"
                                }, d.body));
                                null != o && null != d.body.guild_member && c.Z.dispatch({
                                    type: "GUILD_MEMBER_PROFILE_UPDATE",
                                    guildId: o,
                                    guildMember: d.body.guild_member
                                });
                                return [2, d.body];
                            case 3:
                                null != (f = y.sent()) && null != (null == f ? void 0 : f.body) && _.warn("fetchProfile error: ".concat(f.body.code, " - ").concat(f.body.message));
                                c.Z.dispatch({
                                    type: "USER_PROFILE_FETCH_FAILURE",
                                    userId: e
                                });
                                throw f;
                            case 4:
                                return [2]
                        }
                    }))
                }));
                return S.apply(this, arguments)
            }

            function I(e) {
                return T.apply(this, arguments)
            }

            function T() {
                return (T = f((function(e) {
                    var t, n;
                    return y(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                c.Z.dispatch({
                                    type: "MUTUAL_FRIENDS_FETCH_START",
                                    userId: e
                                });
                                r.label = 1;
                            case 1:
                                r.trys.push([1, 3, , 4]);
                                return [4, l.ZP.get({
                                    url: a.ANM.USER_RELATIONSHIPS(e),
                                    oldFormErrors: !0
                                })];
                            case 2:
                                t = r.sent();
                                c.Z.dispatch({
                                    type: "MUTUAL_FRIENDS_FETCH_SUCCESS",
                                    userId: e,
                                    mutualFriends: t.body
                                });
                                return [3, 4];
                            case 3:
                                null != (null == (n = r.sent()) ? void 0 : n.body) && _.warn("fetchMutualFriends error: ".concat(n.body.code, " - ").concat(n.body.message));
                                c.Z.dispatch({
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
        175072: (e, t, n) => {
            n.d(t, {
                w: () => r,
                H: () => i
            });
            var r, i;
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
            }(i || (i = {}))
        },
        702264: (e, t, n) => {
            n.d(t, {
                CX: () => y,
                J0: () => b,
                j7: () => v,
                Kt: () => S,
                I5: () => I,
                g_: () => T,
                z5: () => P,
                c6: () => m,
                Bn: () => L,
                Xo: () => C,
                JO: () => j,
                sN: () => N,
                lj: () => w
            });
            var r = n(281110),
                i = n(744564),
                o = n(285991),
                l = n(652591),
                c = n(755550),
                u = n(876986),
                s = n(2590);

            function a(e, t, n, r, i, o, l) {
                try {
                    var c = e[o](l),
                        u = c.value
                } catch (e) {
                    n(e);
                    return
                }
                c.done ? t(u) : Promise.resolve(u).then(r, i)
            }

            function d(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function l(e) {
                            a(o, r, i, l, c, "next", e)
                        }

                        function c(e) {
                            a(o, r, i, l, c, "throw", e)
                        }
                        l(void 0)
                    }))
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
            }
            var E = function(e, t) {
                var n, r, i, o, l = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function c(o) {
                    return function(c) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = l.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            l.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && l.label < i[1]) {
                                            l.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && l.label < i[2]) {
                                            l.label = i[2];
                                            l.ops.push(o);
                                            break
                                        }
                                        i[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                o = t.call(e, l)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, c])
                    }
                }
            };

            function y(e, t) {
                return _.apply(this, arguments)
            }

            function _() {
                return (_ = d((function(e, t) {
                    return E(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, O(e, t)];
                            case 1:
                                return [2, n.sent()]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function b(e) {
                return h.apply(this, arguments)
            }

            function h() {
                return (h = d((function(e) {
                    return E(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, r.ZP.put({
                                    url: s.ANM.GUILD_CLYDE_ADD_MEMBER(e),
                                    oldFormErrors: !0
                                })];
                            case 1:
                                return [2, t.sent()]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function O(e, t) {
                return g.apply(this, arguments)
            }

            function g() {
                return (g = d((function(e, t) {
                    var n, o, c, a;
                    return E(this, (function(d) {
                        switch (d.label) {
                            case 0:
                                i.Z.dispatch({
                                    type: "CLYDE_GUILD_SETTINGS_SAVE_START"
                                });
                                d.label = 1;
                            case 1:
                                d.trys.push([1, 3, , 4]);
                                return [4, r.ZP.patch({
                                    url: s.ANM.GUILD_CLYDE_SETTINGS(e),
                                    oldFormErrors: !0,
                                    body: t
                                })];
                            case 2:
                                if ((n = d.sent()).ok) {
                                    i.Z.dispatch({
                                        type: "CLYDE_GUILD_SETTINGS_SAVE_SUCCESS",
                                        settings: n.body.settings
                                    });
                                    null != n.body.guild_member_profile && i.Z.dispatch(p({
                                        type: "USER_PROFILE_UPDATE_SUCCESS",
                                        userId: u.fL,
                                        profileEffectID: void 0
                                    }, n.body.guild_member_profile));
                                    null != n.body.guild_member && i.Z.dispatch({
                                        type: "GUILD_MEMBER_PROFILE_UPDATE",
                                        guildMember: n.body.guild_member,
                                        guildId: e
                                    });
                                    return [2, n.body.settings]
                                }
                                i.Z.dispatch({
                                    type: "CLYDE_GUILD_SETTINGS_SAVE_FAIL",
                                    errors: null !== (c = null === (o = n.body) || void 0 === o ? void 0 : o.errors) && void 0 !== c ? c : {}
                                });
                                l.default.track(s.rMx.CLYDE_AI_PROFILE_UPDATE_FAILED, {
                                    guild_id: e,
                                    clyde_profile_id: t.clyde_profile_id
                                });
                                return [2, null];
                            case 3:
                                a = d.sent();
                                i.Z.dispatch({
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
                i.Z.dispatch({
                    type: "CLYDE_SET_PENDING_PERSONALITY",
                    personality: e
                })
            }

            function S(e) {
                i.Z.dispatch({
                    type: "CLYDE_SET_PENDING_NICK",
                    nick: null != e ? e : ""
                })
            }

            function I(e) {
                i.Z.dispatch({
                    type: "CLYDE_SET_PENDING_AVATAR",
                    avatar: e
                })
            }

            function T(e) {
                i.Z.dispatch({
                    type: "CLYDE_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function P(e) {
                i.Z.dispatch({
                    type: "CLYDE_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function m() {
                i.Z.dispatch({
                    type: "CLYDE_RESET_PENDING_CHANGES"
                })
            }

            function L(e) {
                return D.apply(this, arguments)
            }

            function D() {
                D = d((function(e) {
                    var t, n, l = arguments;
                    return E(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                if (!(l.length > 1 && void 0 !== l[1] && l[1]) && !c.Z.shouldFetchSettings(e)) return [2];
                                (0, o.In)(u.fL, {
                                    guildId: e
                                });
                                i.Z.dispatch({
                                    type: "CLYDE_GUILD_SETTINGS_FETCH_START",
                                    guildId: e
                                });
                                a.label = 1;
                            case 1:
                                a.trys.push([1, 3, , 4]);
                                return [4, r.ZP.get({
                                    url: s.ANM.GUILD_CLYDE_SETTINGS(e),
                                    oldFormErrors: !0
                                })];
                            case 2:
                                t = a.sent();
                                n = t.body;
                                i.Z.dispatch({
                                    type: "CLYDE_GUILD_SETTINGS_FETCH_SUCCESS",
                                    guildId: n.guild_id,
                                    settings: n
                                });
                                return [3, 4];
                            case 3:
                                a.sent();
                                i.Z.dispatch({
                                    type: "CLYDE_GUILD_SETTINGS_FETCH_FAIL",
                                    guildId: e
                                });
                                return [3, 4];
                            case 4:
                                return [2]
                        }
                    }))
                }));
                return D.apply(this, arguments)
            }

            function C(e) {
                return R.apply(this, arguments)
            }

            function R() {
                return (R = d((function(e) {
                    var t, n;
                    return E(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                if (null != c.Z.getProfile(e)) return [2];
                                i.Z.dispatch({
                                    type: "CLYDE_PROFILE_FETCH_START",
                                    clydeProfileId: e
                                });
                                o.label = 1;
                            case 1:
                                o.trys.push([1, 3, , 4]);
                                return [4, r.ZP.get({
                                    url: s.ANM.CLYDE_PROFILES(e),
                                    oldFormErrors: !0
                                })];
                            case 2:
                                t = o.sent();
                                n = t.body;
                                i.Z.dispatch({
                                    type: "CLYDE_PROFILE_FETCH_SUCCESS",
                                    profile: n
                                });
                                return [3, 4];
                            case 3:
                                o.sent();
                                i.Z.dispatch({
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

            function j(e) {
                return A.apply(this, arguments)
            }

            function A() {
                return (A = d((function(e) {
                    var t;
                    return E(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                n.trys.push([0, 2, , 3]);
                                return [4, r.ZP.post({
                                    url: s.ANM.CLYDE_PROFILES_CREATE(e),
                                    oldFormErrors: !0
                                })];
                            case 1:
                                (t = n.sent()).ok && i.Z.dispatch({
                                    type: "CLYDE_PROFILE_CREATE_SUCCESS",
                                    profile: t.body
                                });
                                return [2, t.body];
                            case 2:
                                n.sent();
                                return [2, null];
                            case 3:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function N() {
                i.Z.dispatch({
                    type: "CLYDE_PROFILE_EDITING_START"
                })
            }

            function w() {
                i.Z.dispatch({
                    type: "CLYDE_PROFILE_EDITING_END"
                })
            }
        },
        525177: (e, t, n) => {
            n.d(t, {
                P: () => r,
                Z: () => o
            });
            var r, i = n(260561);
            ! function(e) {
                e[e.None = 0] = "None";
                e[e.DefaultOn = 1] = "DefaultOn";
                e[e.DefaultOff = 2] = "DefaultOff";
                e[e.ComingSoon = 3] = "ComingSoon";
                e[e.ClydeProfiles = 4] = "ClydeProfiles"
            }(r || (r = {}));
            const o = (0, i.B)({
                kind: "guild",
                id: "2023-03_clyde_ai",
                label: "ClydeAI",
                defaultConfig: {
                    experimentState: r.None
                },
                treatments: [{
                    id: 1,
                    label: "Enabled (Default Off)",
                    config: {
                        experimentState: r.DefaultOff
                    }
                }, {
                    id: 3,
                    label: "Enabled (Default On)",
                    config: {
                        experimentState: r.DefaultOn
                    }
                }, {
                    id: 4,
                    label: "Coming Soon",
                    config: {
                        experimentState: r.ComingSoon
                    }
                }, {
                    id: 5,
                    label: "Clyde Profiles",
                    config: {
                        experimentState: r.ClydeProfiles
                    }
                }]
            })
        },
        755550: (e, t, n) => {
            n.d(t, {
                Z: () => P
            });
            var r = n(202351),
                i = n(744564);

            function o(e, t) {
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
                    var n, r = l(e);
                    if (t) {
                        var i = l(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return c(this, n)
                }
            }
            var d, f, p, E, y, _ = !1,
                b = !1,
                h = null,
                O = {},
                g = {},
                v = {},
                S = {};

            function I() {
                d = void 0;
                f = void 0;
                p = void 0;
                E = void 0;
                y = void 0;
                h = null
            }
            var T = function(e) {
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
                }(n, e);
                var t = a(n);

                function n() {
                    o(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.getSettings = function(e) {
                    if (null != e) return v[e]
                };
                r.getProfile = function(e) {
                    return null == e ? null : O[e]
                };
                r.getPendingPersonality = function() {
                    return d
                };
                r.getPendingNick = function() {
                    return f
                };
                r.getErrors = function() {
                    return h
                };
                r.hasPendingChanges = function() {
                    return void 0 !== d || void 0 !== f || void 0 !== p || void 0 !== E || void 0 !== y
                };
                r.getPendingUpdates = function() {
                    return {
                        pendingAvatar: p,
                        pendingNick: f,
                        pendingPersonality: d,
                        pendingBanner: E,
                        pendingThemeColors: y
                    }
                };
                r.isSavingSettings = function() {
                    return _
                };
                r.isFetchingSettings = function(e) {
                    var t;
                    return null === (t = S[e]) || void 0 === t ? void 0 : t.isFetching
                };
                r.shouldFetchSettings = function(e) {
                    var t, n, r = null !== (t = S[e]) && void 0 !== t ? t : {
                            isFetching: !1
                        },
                        i = Date.now() - (null !== (n = r.lastFetchTimestampMs) && void 0 !== n ? n : 0) > 36e5;
                    return !(null == r ? void 0 : r.isFetching) && i
                };
                r.isFetchingProfile = function(e) {
                    var t;
                    return null === (t = g[e]) || void 0 === t ? void 0 : t.isFetching
                };
                r.isEditingClydeProfile = function() {
                    return b
                };
                return n
            }(r.ZP.Store);
            T.displayName = "ClydeStore";
            const P = new T(i.Z, {
                CLYDE_GUILD_SETTINGS_FETCH_START: function(e) {
                    var t = e.guildId,
                        n = S[t];
                    S[t] = {
                        isFetching: !0,
                        lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
                    }
                },
                CLYDE_GUILD_SETTINGS_FETCH_SUCCESS: function(e) {
                    var t = e.guildId,
                        n = e.settings;
                    S[t] = {
                        isFetching: !1,
                        lastFetchTimestampMs: Date.now()
                    };
                    v[t] = n
                },
                CLYDE_GUILD_SETTINGS_FETCH_FAIL: function(e) {
                    var t = e.guildId,
                        n = S[t];
                    S[t] = {
                        isFetching: !1,
                        lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
                    }
                },
                CLYDE_SET_PENDING_PERSONALITY: function(e) {
                    var t = e.personality;
                    d = t
                },
                CLYDE_SET_PENDING_NICK: function(e) {
                    var t = e.nick;
                    f = t
                },
                CLYDE_SET_PENDING_AVATAR: function(e) {
                    var t = e.avatar;
                    p = t
                },
                CLYDE_SET_PENDING_BANNER: function(e) {
                    var t = e.banner;
                    E = t
                },
                CLYDE_SET_PENDING_THEME_COLORS: function(e) {
                    var t = e.themeColors;
                    y = t
                },
                CLYDE_GUILD_SETTINGS_SAVE_START: function() {
                    h = null;
                    _ = !0
                },
                CLYDE_GUILD_SETTINGS_SAVE_SUCCESS: function(e) {
                    var t = e.settings;
                    _ = !1;
                    v[t.guild_id] = t;
                    I()
                },
                CLYDE_GUILD_SETTINGS_SAVE_FAIL: function(e) {
                    _ = !1;
                    h = e.errors
                },
                CLYDE_RESET_PENDING_CHANGES: I,
                CLYDE_PROFILE_FETCH_START: function(e) {
                    var t = e.clydeProfileId,
                        n = g[t];
                    g[t] = {
                        isFetching: !0,
                        lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
                    }
                },
                CLYDE_PROFILE_FETCH_SUCCESS: function(e) {
                    var t = e.profile;
                    g[t.clyde_profile_id] = {
                        isFetching: !1,
                        lastFetchTimestampMs: Date.now()
                    };
                    O[t.clyde_profile_id] = t
                },
                CLYDE_PROFILE_FETCH_FAIL: function(e) {
                    var t = e.clydeProfileId,
                        n = g[t];
                    g[t] = {
                        isFetching: !1,
                        lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
                    }
                },
                CLYDE_PROFILE_CREATE_SUCCESS: function(e) {
                    var t = e.profile;
                    O[t.clyde_profile_id] = t
                },
                CLYDE_PROFILE_EDITING_START: function() {
                    b = !0
                },
                CLYDE_PROFILE_EDITING_END: function() {
                    b = !1
                }
            })
        },
        23925: (e, t, n) => {
            n.d(t, {
                g0: () => y,
                gJ: () => p,
                M9: () => E,
                Ib: () => d,
                lT: () => s,
                OR: () => a
            });
            n(667294), n(202351);
            var r = n(567403),
                i = n(682776),
                o = n(525177),
                l = (0, n(260561).B)({
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
            var c = n(2590),
                u = n(897196);

            function s(e) {
                var t, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "",
                    i = o.Z.useExperiment({
                        guildId: r,
                        location: "1e9ccc_1"
                    }, {
                        autoTrackExposure: n
                    }).experimentState;
                return i
            }

            function a(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = s(e, t);
                return n === o.P.ClydeProfiles
            }

            function d(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = s(e, n);
                return f(r, e, t)
            }

            function f(e, t, n) {
                if (null == t) {
                    if (null != n && n.isPrivate()) {
                        return !!n.hasFlag(u.zZ.CLYDE_AI) || !!l.getCurrentConfig({
                            location: "38acdb_1"
                        }, {
                            autoTrackExposure: !1
                        }).isClydeEnabledinGdms && r.Z.getGuildIds().some((function(e) {
                            return E(r.Z.getGuild(e))
                        }))
                    }
                    return !1
                }
                return null != e && e !== o.P.None && i.Z.can(c.Plq.USE_CLYDE_AI, n)
            }

            function p(e, t) {
                var n, r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : "",
                    l = o.Z.getCurrentConfig({
                        guildId: i,
                        location: "1e9ccc_2"
                    }, {
                        autoTrackExposure: r
                    }).experimentState;
                return f(l, e, t)
            }

            function E(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = _(e, t);
                return n !== o.P.None
            }

            function y(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return _(e, t) === o.P.ClydeProfiles
            }

            function _(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (null == e) return !1;
                var n = e.id;
                return o.Z.getCurrentConfig({
                    guildId: n,
                    location: "1e9ccc_4"
                }, {
                    autoTrackExposure: t
                }).experimentState
            }
        },
        794095: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => R
            });
            var r = n(785893),
                i = n(667294),
                o = n(202351),
                l = n(304548),
                c = n(934870),
                u = n(567403),
                s = n(609853),
                a = n(107364),
                d = n(443812),
                f = n(873308),
                p = n(652591),
                E = n(775173),
                y = n(702264),
                _ = n(755550),
                b = n(131286),
                h = n(23925);
            var O, g = n(2590),
                v = n(175072),
                S = n(473708),
                I = n(371124),
                T = n.n(I);

            function P(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function m(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function L(e, t) {
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

            function D(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }

            function C(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            l = !0,
                            c = !1;
                        try {
                            for (n = n.call(e); !(l = (r = n.next()).done); l = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            c = !0;
                            i = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (c) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return P(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return P(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }! function(e) {
                e.APPLY_PERSONALITY = "apply-personality";
                e.CONFIRMATION = "confirmation"
            }(O || (O = {}));

            function R(e) {
                var t = e.clydeProfile,
                    n = D(e, ["clydeProfile"]),
                    c = n.onClose,
                    u = (0, d.Dt)(),
                    s = C(i.useState(O.APPLY_PERSONALITY), 2),
                    f = s[0],
                    E = s[1],
                    b = C(i.useState(), 2),
                    h = b[0],
                    v = b[1],
                    I = (0, o.e7)([_.Z], _.Z.isSavingSettings);
                return (0, r.jsxs)(l.ModalRoot, L(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            m(e, t, n[t])
                        }))
                    }
                    return e
                }({}, n), {
                    size: l.ModalSize.DYNAMIC,
                    className: T().modal,
                    "aria-labelledby": u,
                    children: [(0, r.jsx)("div", {
                        className: T().slidesContainer,
                        children: (0, r.jsxs)(l.Slides, {
                            activeSlide: f,
                            centered: !1,
                            children: [(0, r.jsx)(l.Slide, {
                                id: O.APPLY_PERSONALITY,
                                children: (0, r.jsx)(j, {
                                    setSelectedGuildId: v,
                                    selectedGuildId: h,
                                    clydeProfile: t
                                })
                            }), (0, r.jsx)(l.Slide, {
                                id: O.CONFIRMATION,
                                children: null != h ? (0, r.jsx)(A, {
                                    onClose: c,
                                    clydeProfile: t,
                                    guildId: h
                                }) : null
                            })]
                        })
                    }), f === O.APPLY_PERSONALITY ? (0, r.jsxs)(l.ModalFooter, {
                        justify: a.Z.Justify.BETWEEN,
                        className: T().footer,
                        children: [(0, r.jsx)(l.Button, {
                            disabled: null == h,
                            submitting: I,
                            onClick: function() {
                                null != h && (0, y.CX)(h, {
                                    clyde_profile_id: t.clyde_profile_id
                                }).then((function(e) {
                                    if (null != e) {
                                        E(O.CONFIRMATION);
                                        p.default.track(g.rMx.CLYDE_AI_SHARED_PROFILE_APPLIED, {
                                            clyde_profile_id: t.clyde_profile_id,
                                            guild_id: h
                                        })
                                    } else(0, l.showToast)((0, l.createToast)(S.Z.Messages.CLYDE_PROFILE_ERROR_MESSAGE_GENERIC, l.ToastType.FAILURE))
                                }))
                            },
                            children: S.Z.Messages.CLYDE_PROFILE_APPLY
                        }), (0, r.jsx)(l.Button, {
                            look: l.ButtonLooks.BLANK,
                            color: l.ButtonColors.TRANSPARENT,
                            onClick: c,
                            children: (0, r.jsx)(l.Text, {
                                className: T().closeButton,
                                variant: "text-md/semibold",
                                children: S.Z.Messages.CLOSE
                            })
                        })]
                    }) : null]
                }))
            }

            function j(e) {
                var t, n = e.clydeProfile,
                    c = e.selectedGuildId,
                    a = e.setSelectedGuildId,
                    d = (0, b.Z)(n),
                    f = function() {
                        var e = (0, o.e7)([u.Z], (function() {
                            return u.Z.getGuilds()
                        }));
                        return i.useMemo((function() {
                            return Object.values(e).filter((function(e) {
                                return (0, h.g0)(e)
                            }))
                        }), [e])
                    }();
                return (0, r.jsxs)("div", {
                    className: T().applySlideContainer,
                    children: [(0, r.jsxs)("div", {
                        className: T().characterContainer,
                        children: [(0, r.jsx)(l.Avatar, {
                            src: d,
                            size: l.AvatarSizes.SIZE_80,
                            "aria-hidden": !0
                        }), (0, r.jsxs)("div", {
                            className: T().nameContainer,
                            children: [(0, r.jsx)(l.Text, {
                                variant: "text-lg/semibold",
                                children: n.name
                            }), (0, r.jsx)(s.Z, {
                                type: v.H.AI
                            })]
                        }), (0, r.jsx)(l.FormItem, {
                            className: T().personalityItem,
                            title: S.Z.Messages.PERSONALITY_CLYDE_SECTION,
                            children: (0, r.jsx)(l.TextArea, {
                                className: T().personalityTextArea,
                                value: null !== (t = n.personality) && void 0 !== t ? t : ""
                            })
                        })]
                    }), (0, r.jsxs)("div", {
                        className: T().serverSelectContainer,
                        children: [(0, r.jsx)(l.Text, {
                            className: T().serverSelectTitle,
                            variant: "text-lg/semibold",
                            children: S.Z.Messages.CLYDE_PROFILE_APPLY_PERSONALITY
                        }), (0, r.jsx)(l.Text, {
                            className: T().serverSelectDescription,
                            variant: "text-sm/medium",
                            children: S.Z.Messages.CLYDE_PROFILE_APPLY_PERSONALITY_SUBTITLE
                        }), (0, r.jsxs)(l.FormItem, {
                            className: T().serverSelectField,
                            title: S.Z.Messages.CLYDE_PROFILE_APPLY_TO_GUILD,
                            children: [(0, r.jsx)(l.SearchableSelect, {
                                isDisabled: 0 === f.length,
                                placeholder: S.Z.Messages.CLYDE_PROFILE_SELECT_GUILD,
                                value: c,
                                options: f.map((function(e) {
                                    return {
                                        label: e.name,
                                        value: e.id
                                    }
                                })),
                                onChange: function(e) {
                                    return a(e)
                                }
                            }), 0 === f.length ? (0, r.jsx)(l.Text, {
                                className: T().selectGuildErrorLabel,
                                variant: "text-xs/normal",
                                children: S.Z.Messages.CLYDE_PROFILE_SELECT_GUILD_ERROR
                            }) : null]
                        })]
                    })]
                })
            }

            function A(e) {
                var t, n = e.clydeProfile,
                    i = e.guildId,
                    a = e.onClose,
                    d = (0, b.Z)(n),
                    p = (0, o.e7)([u.Z], (function() {
                        return u.Z.getGuild(i)
                    })),
                    y = null != p && null != p.icon ? E.ZP.getGuildIconURL({
                        id: i,
                        icon: p.icon,
                        size: 16
                    }) : null;
                return (0, r.jsxs)("div", {
                    className: T().confirmationSlide,
                    children: [(0, r.jsx)(l.Avatar, {
                        src: d,
                        size: l.AvatarSizes.SIZE_80,
                        "aria-hidden": !0
                    }), (0, r.jsxs)("div", {
                        className: T().nameContainer,
                        children: [(0, r.jsx)(l.Text, {
                            variant: "text-lg/semibold",
                            children: n.name
                        }), (0, r.jsx)(s.Z, {
                            type: v.H.AI
                        })]
                    }), (0, r.jsx)(l.Text, {
                        className: T().appliedToLabel,
                        variant: "text-sm/medium",
                        children: S.Z.Messages.CLYDE_PROFILE_APPLIED_TO
                    }), (0, r.jsx)(l.Button, {
                        color: l.ButtonColors.PRIMARY,
                        onClick: function() {
                            (0, c.X)(i);
                            a()
                        },
                        className: T().guildButton,
                        size: l.ButtonSizes.TINY,
                        children: (0, r.jsxs)("div", {
                            className: T().guildButtonContainer,
                            children: [null != (null == p ? void 0 : p.icon) ? (0,
                                r.jsx)(l.Avatar, {
                                src: y,
                                size: l.AvatarSizes.SIZE_16,
                                "aria-hidden": !0
                            }) : null, (0, r.jsx)(l.Text, {
                                color: "always-white",
                                variant: "text-xs/medium",
                                children: null !== (t = null == p ? void 0 : p.name) && void 0 !== t ? t : ""
                            }), (0, r.jsx)(f.Z, {
                                width: 16,
                                height: 16,
                                direction: f.N.RIGHT
                            })]
                        })
                    }), (0, r.jsx)(l.Button, {
                        onClick: a,
                        size: l.ButtonSizes.MEDIUM,
                        children: S.Z.Messages.GOT_IT
                    })]
                })
            }
        },
        609853: (e, t, n) => {
            n.d(t, {
                Z: () => _
            });
            var r = n(785893),
                i = (n(667294), n(294184)),
                o = n.n(i),
                l = n(22212),
                c = n(985651),
                u = n(175072),
                s = n(473708),
                a = n(813968),
                d = n.n(a);

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
            }

            function E(e, t) {
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
            var y = function(e) {
                var t = e.invertColor,
                    n = void 0 !== t && t,
                    i = e.type,
                    a = void 0 === i ? u.H.BOT : i,
                    y = e.className,
                    _ = e.verified,
                    b = e.hideIcon,
                    h = void 0 !== b && b,
                    O = e.useRemSizes,
                    g = void 0 !== O && O,
                    v = e.children,
                    S = void 0 === v ? [] : v,
                    I = null,
                    T = s.Z.Messages.VERIFIED_BOT_TOOLTIP;
                switch (a) {
                    case u.H.SYSTEM_DM:
                    case u.H.OFFICIAL:
                        _ = !0;
                        T = s.Z.Messages.DISCORD_SYSTEM_MESSAGE_BOT_TAG_TOOLTIP;
                        I = s.Z.Messages.SYSTEM_DM_TAG_SYSTEM;
                        break;
                    case u.H.SERVER:
                        I = s.Z.Messages.BOT_TAG_SERVER;
                        break;
                    case u.H.ORIGINAL_POSTER:
                        I = s.Z.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER;
                        break;
                    case u.H.STAFF_ONLY_DM:
                        I = s.Z.Messages.STAFF_BADGE_TOOLTIP;
                        break;
                    case u.H.AI:
                        _ = !0;
                        T = s.Z.Messages.AI_GENERATED_TOOLTIP;
                        I = s.Z.Messages.AI_TAG;
                        break;
                    case u.H.REMIX:
                        _ = !1;
                        I = s.Z.Messages.REMIXING_TAG;
                        break;
                    case u.H.BOT:
                    default:
                        I = s.Z.Messages.BOT_TAG_BOT
                }
                var P, m = a === u.H.ORIGINAL_POSTER,
                    L = a === u.H.REMIX,
                    D = null;
                _ && (D = (0, r.jsx)(l.u, {
                    text: T,
                    align: "center",
                    position: "top",
                    children: function(e) {
                        return (0, r.jsx)(c.Z, E(p({}, e), {
                            className: d().botTagVerified
                        }))
                    }
                }));
                P = a === u.H.AI ? d().botTagAI : n ? d().botTagInvert : d().botTagRegular;
                var C = function(e) {
                    var t;
                    return (0, r.jsxs)("span", E(p({}, e), {
                        className: o()(y, P, g ? d().rem : d().px, (t = {}, f(t, d().botTagOP, m), f(t, d().botTagRemix, L), t)),
                        children: [h ? null : D, S, (0, r.jsx)("span", {
                            className: d().botText,
                            children: I
                        })]
                    }))
                };
                switch (a) {
                    case u.H.REMIX:
                        return (0, r.jsx)(l.u, {
                            text: s.Z.Messages.REMIXING_DOWNLOAD_APP,
                            position: "top",
                            children: function(e) {
                                return C(e)
                            }
                        });
                    case u.H.ORIGINAL_POSTER:
                        return (0, r.jsx)(l.u, {
                            text: s.Z.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER_TOOLTIP,
                            position: "top",
                            children: function(e) {
                                return C(e)
                            }
                        });
                    default:
                        return C()
                }
            };
            y.Types = u.H;
            const _ = y
        },
        443812: (e, t, n) => {
            n.d(t, {
                hQ: () => l,
                Dt: () => c,
                FG: () => u
            });
            var r = n(873955),
                i = n.n(r),
                o = n(989824),
                l = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return i()(e)
                },
                c = function() {
                    return (0, o.Z)((function() {
                        return l()
                    }))
                },
                u = function(e) {
                    return (0, e.children)(c())
                }
        },
        873308: (e, t, n) => {
            n.d(t, {
                N: () => r,
                Z: () => y
            });
            var r, i = n(785893),
                o = (n(667294), n(294184)),
                l = n.n(o),
                c = n(633878),
                u = n(384479),
                s = n.n(u);

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function d(e, t) {
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

            function f(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }! function(e) {
                e.LEFT = "LEFT";
                e.RIGHT = "RIGHT";
                e.UP = "UP";
                e.DOWN = "DOWN";
                e.UP_LEFT = "UP_LEFT";
                e.DOWN_RIGHT = "DOWN_RIGHT"
            }(r || (r = {}));

            function p(e) {
                switch (e) {
                    case r.LEFT:
                        return s().left;
                    case r.RIGHT:
                        return s().right;
                    case r.UP:
                        return null;
                    case r.DOWN:
                        return s().down;
                    case r.UP_LEFT:
                        return s().upLeft;
                    case r.DOWN_RIGHT:
                        return s().downRight;
                    default:
                        throw new Error("Invalid Direction ".concat(e))
                }
            }
            var E = function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    r = e.height,
                    o = void 0 === r ? 24 : r,
                    u = e.color,
                    s = void 0 === u ? "currentColor" : u,
                    E = e.direction,
                    y = e.foreground,
                    _ = e.className,
                    b = e.title,
                    h = f(e, ["width", "height", "color", "direction", "foreground", "className", "title"]);
                return (0, i.jsxs)("svg", d(function(e) {
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
                }({}, (0, c.Z)(h)), {
                    width: n,
                    height: o,
                    className: l()(_, p(E)),
                    viewBox: "0 0 24 24",
                    children: [null != b ? (0, i.jsx)("title", {
                        children: b
                    }) : null, (0, i.jsx)("polygon", {
                        className: y,
                        fill: s,
                        fillRule: "nonzero",
                        points: "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8"
                    })]
                }))
            };
            E.Directions = r;
            const y = E
        },
        985651: (e, t, n) => {
            n.d(t, {
                Z: () => p
            });
            var r = n(785893),
                i = (n(667294), n(168075)),
                o = n(795308),
                l = n(633878);

            function c(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function u(e, t) {
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

            function s(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function d(e, t) {
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

            function f(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }
            const p = (0, i.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 16 : t,
                    i = e.height,
                    o = void 0 === i ? 16 : i,
                    c = e.color,
                    u = void 0 === c ? "currentColor" : c,
                    s = f(e, ["width", "height", "color"]);
                return (0, r.jsx)("svg", d(function(e) {
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
                }({}, (0, l.Z)(s)), {
                    width: n,
                    height: o,
                    viewBox: "0 0 16 15.2",
                    children: (0, r.jsx)("path", {
                        d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z",
                        fill: u
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    i = e.height,
                    a = void 0 === i ? 24 : i,
                    d = e.color,
                    f = void 0 === d ? o.Z.colors.INTERACTIVE_NORMAL : d,
                    p = e.colorClass,
                    E = void 0 === p ? "" : p,
                    y = s(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", u(function(e) {
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
                }({}, (0, l.Z)(y)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: a,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof f ? f : f.css,
                        fillRule: "evenodd",
                        d: "M18.707 7.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L10 14.586l7.293-7.293a1 1 0 0 1 1.414 0Z",
                        clipRule: "evenodd",
                        className: E
                    })
                }))
            }))
        },
        989824: (e, t, n) => {
            n.d(t, {
                Z: () => o
            });
            var r = n(667294),
                i = {};

            function o(e) {
                var t = (0, r.useRef)(i);
                t.current === i && (t.current = e());
                return t.current
            }
        }
    }
]);