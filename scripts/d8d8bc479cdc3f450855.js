"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [15550, 58635, 76156], {
        372956: (e, t, n) => {
            n.d(t, {
                x: () => i,
                C: () => a
            });
            var r = n(744564),
                o = n(758635);

            function i(e) {
                var t = e.omitUserIds,
                    n = e.guild,
                    i = e.channel,
                    a = e.applicationId,
                    u = e.inviteTargetType;
                return (0, o.W)().then((function() {
                    r.Z.dispatch({
                        type: "LOAD_INVITE_SUGGESTIONS",
                        omitUserIds: null != t ? t : new Set,
                        guild: n,
                        channel: i,
                        applicationId: a,
                        inviteTargetType: u
                    })
                }))
            }

            function a(e) {
                r.Z.dispatch({
                    type: "INVITE_SUGGESTIONS_SEARCH",
                    query: e
                })
            }
        },
        758635: (e, t, n) => {
            n.d(t, {
                W: () => u
            });
            var r = n(281110),
                o = n(744564),
                i = n(239734),
                a = n(2590);

            function u() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                if (i.Z.needsRefresh()) {
                    o.Z.dispatch({
                        type: "LOAD_USER_AFFINITIES"
                    });
                    return r.ZP.get({
                        url: a.ANM.USER_AFFINITIES,
                        retries: e ? 3 : 0,
                        oldFormErrors: !0
                    }).then((function(e) {
                        var t = e.body;
                        o.Z.dispatch({
                            type: "LOAD_USER_AFFINITIES_SUCCESS",
                            affinities: t
                        })
                    }), (function() {
                        o.Z.dispatch({
                            type: "LOAD_USER_AFFINITIES_FAILURE"
                        })
                    }))
                }
                return Promise.resolve()
            }
        },
        621647: (e, t, n) => {
            n.d(t, {
                x: () => s
            });
            var r = n(473903),
                o = n(775173),
                i = n(72580),
                a = n(2590);

            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function c(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return u(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function s(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                switch (e.type) {
                    case a.d4z.DM:
                        var u = c(e.recipients.map(r.default.getUser).filter(i.lm), 1),
                            s = u[0];
                        return null == s ? null : s.getAvatarURL(void 0, t, n);
                    case a.d4z.GROUP_DM:
                        return o.ZP.getChannelIconURL({
                            id: e.id,
                            icon: e.icon,
                            applicationId: e.getApplicationId(),
                            size: t
                        })
                }
            }
        },
        702264: (e, t, n) => {
            n.d(t, {
                CX: () => y,
                j7: () => v,
                Kt: () => m,
                I5: () => _,
                g_: () => g,
                z5: () => I,
                c6: () => S,
                Bn: () => O,
                Xo: () => A,
                JO: () => T,
                sN: () => N,
                lj: () => P
            });
            var r = n(281110),
                o = n(744564),
                i = n(285991),
                a = n(755550),
                u = n(876986),
                c = n(2590);

            function s(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        c = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function l(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            s(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            s(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
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
            var d = function(e, t) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0,
                                    o) && (i = [2 & i[0], o.value]);
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
                                        r = i[1];
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
                                i = t.call(e, a)
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
                        }([i, u])
                    }
                }
            };

            function y(e, t) {
                return h.apply(this, arguments)
            }

            function h() {
                return (h = l((function(e, t) {
                    return d(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, b(e, t)];
                            case 1:
                                return [2, n.sent()]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function b(e, t) {
                return E.apply(this, arguments)
            }

            function E() {
                return (E = l((function(e, t) {
                    var n, i, a, s;
                    return d(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                o.Z.dispatch({
                                    type: "CLYDE_GUILD_SETTINGS_SAVE_START"
                                });
                                l.label = 1;
                            case 1:
                                l.trys.push([1, 3, , 4]);
                                return [4, r.ZP.patch({
                                    url: c.ANM.GUILD_CLYDE_SETTINGS(e),
                                    oldFormErrors: !0,
                                    body: t
                                })];
                            case 2:
                                if ((n = l.sent()).ok) {
                                    o.Z.dispatch({
                                        type: "CLYDE_GUILD_SETTINGS_SAVE_SUCCESS",
                                        settings: n.body.settings
                                    });
                                    null != n.body.guild_member_profile && o.Z.dispatch(p({
                                        type: "USER_PROFILE_UPDATE_SUCCESS",
                                        userId: u.fL,
                                        profileEffectID: void 0
                                    }, n.body.guild_member_profile));
                                    null != n.body.guild_member && o.Z.dispatch({
                                        type: "GUILD_MEMBER_PROFILE_UPDATE",
                                        guildMember: n.body.guild_member,
                                        guildId: e
                                    });
                                    return [2, n.body.settings]
                                }
                                o.Z.dispatch({
                                    type: "CLYDE_GUILD_SETTINGS_SAVE_FAIL",
                                    errors: null !== (a = null === (i = n.body) || void 0 === i ? void 0 : i.errors) && void 0 !== a ? a : {}
                                });
                                return [2, null];
                            case 3:
                                s = l.sent();
                                o.Z.dispatch({
                                    type: "CLYDE_GUILD_SETTINGS_SAVE_FAIL",
                                    errors: s.body
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

            function m(e) {
                o.Z.dispatch({
                    type: "CLYDE_SET_PENDING_NICK",
                    nick: null != e ? e : ""
                })
            }

            function _(e) {
                o.Z.dispatch({
                    type: "CLYDE_SET_PENDING_AVATAR",
                    avatar: e
                })
            }

            function g(e) {
                o.Z.dispatch({
                    type: "CLYDE_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function I(e) {
                o.Z.dispatch({
                    type: "CLYDE_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function S() {
                o.Z.dispatch({
                    type: "CLYDE_RESET_PENDING_CHANGES"
                })
            }

            function O(e) {
                return C.apply(this, arguments)
            }

            function C() {
                C = l((function(e) {
                    var t, n, s = arguments;
                    return d(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                if (!(s.length > 1 && void 0 !== s[1] && s[1]) && !a.Z.shouldFetchSettings(e)) return [2];
                                (0, i.In)(u.fL, {
                                    guildId: e
                                });
                                o.Z.dispatch({
                                    type: "CLYDE_GUILD_SETTINGS_FETCH_START",
                                    guildId: e
                                });
                                l.label = 1;
                            case 1:
                                l.trys.push([1, 3, , 4]);
                                return [4, r.ZP.get({
                                    url: c.ANM.GUILD_CLYDE_SETTINGS(e),
                                    oldFormErrors: !0
                                })];
                            case 2:
                                t = l.sent();
                                n = t.body;
                                o.Z.dispatch({
                                    type: "CLYDE_GUILD_SETTINGS_FETCH_SUCCESS",
                                    guildId: n.guild_id,
                                    settings: n
                                });
                                return [3, 4];
                            case 3:
                                l.sent();
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
                return C.apply(this, arguments)
            }

            function A(e) {
                return w.apply(this, arguments)
            }

            function w() {
                return (w = l((function(e) {
                    var t, n;
                    return d(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                if (null != a.Z.getProfile(e)) return [2];
                                o.Z.dispatch({
                                    type: "CLYDE_PROFILE_FETCH_START",
                                    clydeProfileId: e
                                });
                                i.label = 1;
                            case 1:
                                i.trys.push([1, 3, , 4]);
                                return [4, r.ZP.get({
                                    url: c.ANM.CLYDE_PROFILES(e),
                                    oldFormErrors: !0
                                })];
                            case 2:
                                t = i.sent();
                                n = t.body;
                                o.Z.dispatch({
                                    type: "CLYDE_PROFILE_FETCH_SUCCESS",
                                    profile: n
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

            function T(e) {
                return R.apply(this, arguments)
            }

            function R() {
                return (R = l((function(e) {
                    var t;
                    return d(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                n.trys.push([0, 2, , 3]);
                                return [4, r.ZP.post({
                                    url: c.ANM.CLYDE_PROFILES_CREATE(e),
                                    oldFormErrors: !0
                                })];
                            case 1:
                                (t = n.sent()).ok && o.Z.dispatch({
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
                o.Z.dispatch({
                    type: "CLYDE_PROFILE_EDITING_START"
                })
            }

            function P() {
                o.Z.dispatch({
                    type: "CLYDE_PROFILE_EDITING_END"
                })
            }
        },
        548144: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => G
            });
            var r = n(785893),
                o = n(667294),
                i = n(202351),
                a = n(304548),
                u = n(761953),
                c = n(372956),
                s = n(720419),
                l = n(153686),
                f = n(621647),
                p = n(773011),
                d = n(567403),
                y = n(537335),
                h = n(840922),
                b = n(473903),
                E = n(282898),
                v = n(169649),
                m = n(316388),
                _ = n(775173),
                g = n(691797),
                I = n(786502),
                S = n(421281),
                O = n(749565),
                C = n(702264),
                A = n(2590),
                w = n(473708),
                T = n(232060),
                R = n.n(T);

            function N(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function P(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        c = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function L(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            P(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            P(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function j(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Z(e, t) {
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

            function F(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || U(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function x(e) {
                return function(e) {
                    if (Array.isArray(e)) return N(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || U(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function U(e, t) {
                if (e) {
                    if ("string" == typeof e) return N(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? N(e, t) : void 0
                }
            }
            var M = function(e, t) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
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
                                        r = i[1];
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
                                i = t.call(e, a)
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
                        }([i, u])
                    }
                }
            };

            function G(e) {
                var t = e.guildId,
                    n = D(e, ["guildId"]),
                    f = F(o.useState(""), 2),
                    p = f[0],
                    d = f[1],
                    h = F(o.useState([]), 2),
                    b = h[0],
                    v = h[1],
                    m = F(o.useState(""), 2),
                    _ = m[0],
                    g = m[1],
                    S = n.onClose,
                    O = "".concat(window.location.origin).concat(A.ANM.CLYDE_PROFILES(_)),
                    T = (0, i.Wu)([y.Z], (function() {
                        return y.Z.getInviteSuggestionRows()
                    }));
                o.useEffect((function() {
                    (0, c.x)({
                        omitUserIds: new Set
                    })
                }), []);
                o.useEffect((function() {
                    (0, C.JO)(t).then((function(e) {
                        if (null != e) g(null == e ? void 0 : e.clyde_profile_id);
                        else {
                            (0, a.showToast)((0, a.createToast)(w.Z.Messages.CLYDE_PROFILE_ERROR_MESSAGE_GENERIC, a.ToastType.FAILURE));
                            S()
                        }
                    }))
                }), [t, S]);
                o.useEffect((function() {
                    return (0, c.C)(p)
                }), [p]);
                var N = o.useCallback(L((function() {
                    var e;
                    return M(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                e = function(e, t) {
                                    switch (e.type) {
                                        case I.bm.DM:
                                        case I.bm.FRIEND:
                                            0;
                                            break;
                                        case I.bm.GROUP_DM:
                                            0;
                                            break;
                                        case I.bm.CHANNEL:
                                            0
                                    }
                                    return e.type === I.bm.GROUP_DM || e.type === I.bm.CHANNEL ? s.Z.sendClydeProfileOverride(e.item.id, t, l.Z.CLYDE_PROFILE_SHARE_MODAL, null) : e.type === I.bm.DM || e.type === I.bm.FRIEND ? u.Z.ensurePrivateChannel(e.item.id).then((function(e) {
                                        return s.Z.sendClydeProfileOverride(e, O, l.Z.CLYDE_PROFILE_SHARE_MODAL, null)
                                    })) : Promise.resolve()
                                };
                                0;
                                0;
                                0;
                                return [4, y.Z.getInviteSuggestionRows().filter((function(e) {
                                    return b.includes(e.item.id)
                                })).map((function(t) {
                                    return e(t, O)
                                }))];
                            case 1:
                                t.sent();
                                n.onClose();
                                return [2]
                        }
                    }))
                })), [b, n, O]);
                return (0, r.jsxs)(a.ModalRoot, Z(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            j(e, t, n[t])
                        }))
                    }
                    return e
                }({}, n), {
                    className: R().modalRoot,
                    children: [(0, r.jsxs)(a.ModalHeader, {
                        className: R().header,
                        children: [(0, r.jsx)(a.Heading, {
                            variant: "heading-md/semibold",
                            children: w.Z.Messages.CLYDE_PROFILE_SHARE_HEADER
                        }), (0, r.jsx)(a.ModalCloseButton, {
                            onClick: n.onClose
                        })]
                    }), (0, r.jsxs)(a.ModalContent, {
                        className: R().modalContent,
                        children: [(0, r.jsx)(E.Z, {
                            className: R().searchBar,
                            placeholder: w.Z.Messages.SEARCH,
                            label: w.Z.Messages.SEARCH,
                            searchTerm: p,
                            onChange: function(e) {
                                return d(e)
                            },
                            onClear: function() {
                                return d("")
                            }
                        }), T.map((function(e, t) {
                            return (0, r.jsxs)(o.Fragment, {
                                children: [0 === t ? null : (0, r.jsx)("div", {
                                    className: R().rowDivider
                                }), (0, r.jsx)(k, {
                                    row: e,
                                    onClick: function() {
                                        var t = x(b);
                                        t.includes(e.item.id) ? t = t.filter((function(t) {
                                            return t !== e.item.id
                                        })) : t.push(e.item.id);
                                        v(t)
                                    },
                                    checked: b.includes(e.item.id)
                                })]
                            }, e.item.id)
                        }))]
                    }), (0, r.jsxs)(a.ModalFooter, {
                        className: R().footer,
                        children: [(0, r.jsx)("div", {
                            className: R().footerDivider
                        }), (0, r.jsxs)("div", {
                            className: R().copySendBar,
                            children: [(0, r.jsx)(Y, {
                                link: O
                            }), (0, r.jsx)(a.Button, {
                                onClick: N,
                                disabled: b.length <= 0 || "" === _,
                                children: w.Z.Messages.SEND
                            })]
                        })]
                    })]
                }))
            }

            function k(e) {
                var t = e.row,
                    n = e.onClick,
                    o = e.checked,
                    i = null,
                    u = null,
                    c = null;
                switch (t.type) {
                    case I.bm.DM:
                    case I.bm.FRIEND:
                        i = (0, r.jsx)(a.Avatar, {
                            size: a.AvatarSizes.SIZE_40,
                            src: t.item.getAvatarURL(null, 128, !1),
                            "aria-label": t.item.username
                        });
                        u = O.ZP.getName(t.item);
                        c = O.ZP.getUserTag(t.item);
                        break;
                    case I.bm.GROUP_DM:
                        var s = (0, f.x)(t.item),
                            l = (0, p.F6)(t.item, b.default, h.Z);
                        i = (0, r.jsx)(a.Avatar, {
                            src: s,
                            "aria-label": l,
                            size: a.AvatarSizes.SIZE_40
                        });
                        u = (0, p.F6)(t.item, b.default, h.Z);
                        break;
                    case I.bm.CHANNEL:
                        var y = t.item,
                            E = d.Z.getGuild(y.guild_id);
                        if (null == E) return null;
                        u = "#".concat((0, p.F6)(y, b.default, h.Z));
                        c = E.name;
                        if (null != E.icon) {
                            var v = _.ZP.getGuildIconURL({
                                id: y.guild_id,
                                icon: E.icon,
                                size: 40
                            });
                            i = (0, r.jsx)(a.Avatar, {
                                src: v,
                                "aria-label": u,
                                size: a.AvatarSizes.SIZE_40
                            })
                        } else {
                            var m = (0, S.Zg)(E.name);
                            i = (0, r.jsx)("div", {
                                className: R().acronym,
                                "aria-hidden": !0,
                                children: m
                            })
                        }
                }
                return (0, r.jsxs)(a.Clickable, {
                    onClick: n,
                    className: R().rowContainer,
                    children: [(0, r.jsxs)("div", {
                        className: R().rowLeft,
                        children: [(0, r.jsx)("div", {
                            className: R().rowAvatar,
                            children: i
                        }), (0, r.jsxs)("div", {
                            className: R().rowNameContainer,
                            children: [(0, r.jsx)(a.Text, {
                                variant: "text-md/semibold",
                                className: R().rowName,
                                children: u
                            }), (0, r.jsx)(a.Text, {
                                variant: "text-xs/medium",
                                className: R().rowSubName,
                                children: c
                            })]
                        })]
                    }), (0, r.jsx)(a.Checkbox, {
                        value: o,
                        type: a.Checkbox.Types.INVERTED,
                        displayOnly: !0,
                        className: R().rowRight
                    })]
                })
            }

            function Y(e) {
                var t = e.link,
                    n = F(o.useState(!1), 2),
                    i = n[0],
                    u = n[1];
                o.useEffect((function() {
                    var e;
                    i && (e = setTimeout((function() {
                        u(!1)
                    }), 1e3));
                    return function() {
                        null != e && clearTimeout(e)
                    }
                }), [i]);
                return (0, r.jsxs)(a.Button, {
                    look: a.Button.Looks.LINK,
                    color: a.Button.Colors.LINK,
                    onClick: function() {
                        (0, g.JG)(t);
                        u(!0)
                    },
                    innerClassName: R().copyButton,
                    children: [i ? (0, r.jsx)(v.Z, {}) : (0, r.jsx)(m.Z, {}), i ? w.Z.Messages.COPIED : w.Z.Messages.COPY_LINK]
                })
            }
        },
        537335: (e, t, n) => {
            n.d(t, {
                Z: () => Z
            });
            var r = n(202351),
                o = n(744564),
                i = n(980604),
                a = n(72580),
                u = n(786502),
                c = n(61209),
                s = n(840922),
                l = n(239734),
                f = n(2590),
                p = n(718634);

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function y(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function h(e) {
                h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return h(e)
            }

            function b(e, t) {
                return !t || "object" !== m(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function E(e, t) {
                E = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return E(e, t)
            }

            function v(e) {
                return function(e) {
                    if (Array.isArray(e)) return d(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return d(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var m = function(e) {
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
                    var n, r = h(e);
                    if (t) {
                        var o = h(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return b(this, n)
                }
            }
            var g, I, S, O, C, A, w, T = new Set,
                R = [],
                N = new Map;

            function P(e) {
                var t = new Set,
                    n = null == O || w === p.Iq.EMBEDDED_APPLICATION ? void 0 : O.id,
                    r = (0, u.rh)(T, n);
                null == r || s.Z.isBlocked(r.id) || t.add(r.id);
                var o = !0,
                    d = !1,
                    y = void 0;
                try {
                    for (var h, b = l.Z.getUserAffinitiesUserIds()[Symbol.iterator](); !(o = (h = b.next()).done); o = !0) {
                        var E = h.value;
                        t.add(E)
                    }
                } catch (e) {
                    d = !0;
                    y = e
                } finally {
                    try {
                        o || null == b.return || b.return()
                    } finally {
                        if (d) throw y
                    }
                }
                var v = new Set;
                if (w === p.Iq.EMBEDDED_APPLICATION) {
                    i.Z.getChannelHistory().map((function(e) {
                        return c.Z.getChannel(e)
                    })).filter(a.lm).filter((function(e) {
                        return e.type === f.d4z.GUILD_TEXT
                    })).slice(0, 3).forEach((function(e) {
                        return v.add(e.id)
                    }))
                }
                return (0, u.an)({
                    query: e,
                    omitUserIds: T,
                    suggestedUserIds: t,
                    maxRowsWithoutQuery: 100,
                    omitGuildId: n,
                    suggestedChannelIds: v,
                    inviteTargetType: w
                })
            }

            function L(e) {
                R = e;
                N = new Map;
                e.forEach((function(e, t) {
                    N.set(e, {
                        index: t
                    })
                }))
            }
            var j = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && E(e, t)
                }(n, e);
                var t = _(n);

                function n() {
                    y(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(s.Z, l.Z)
                };
                r.getInviteSuggestionRows = function() {
                    return R
                };
                r.getTotalSuggestionsCount = function() {
                    return I
                };
                r.getInitialCounts = function() {
                    return g
                };
                r.getSelectedInviteMetadata = function(e) {
                    var t = N.get(e),
                        n = l.Z.getUserAffinitiesUserIds();
                    return null != t ? {
                        rowNum: t.index,
                        isAffinitySuggestion: e.isSuggested,
                        numTotal: R.length,
                        numAffinityConnections: n.size,
                        isFiltered: S
                    } : null
                };
                return n
            }(r.ZP.Store);
            j.displayName = "InviteSuggestionsStore";
            const Z = new j(o.Z, {
                LOAD_INVITE_SUGGESTIONS: function(e) {
                    var t = e.omitUserIds,
                        n = e.guild,
                        r = e.channel,
                        o = e.applicationId,
                        i = e.inviteTargetType;
                    O = null != r ? n : null;
                    C = r;
                    A = o;
                    w = i;
                    var a = s.Z.getRelationships(),
                        c = Object.keys(a).filter((function(e) {
                            return a[e] === f.OGo.BLOCKED
                        })),
                        l = (0, u.Sz)({
                            channel: C,
                            applicationId: A,
                            inviteTargetType: i
                        });
                    T = new Set(v(t).concat(v(c), v(l)));
                    S = !1;
                    var p = P(""),
                        d = p.rows,
                        y = p.counts;
                    L(d);
                    g = y;
                    I = R.length
                },
                INVITE_SUGGESTIONS_SEARCH: function(e) {
                    var t = e.query;
                    S = "" !== t;
                    L(P(t).rows)
                }
            })
        },
        239734: (e, t, n) => {
            n.d(t, {
                Z: () => m
            });
            var r = n(202351),
                o = n(744564),
                i = n(840922);

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function c(e) {
                c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return c(e)
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        u(e, t, n[t])
                    }))
                }
                return e
            }

            function l(e, t) {
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
                    var n, r = c(e);
                    if (t) {
                        var o = c(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return l(this, n)
                }
            }
            var y = !1,
                h = Object.freeze({
                    userAffinities: [],
                    affinityUserIds: new Set,
                    lastFetched: 0
                }),
                b = s({}, h);

            function E() {
                b.affinityUserIds = new Set(b.userAffinities.map((function(e) {
                    return e.user_id
                })).filter((function(e) {
                    return !i.Z.isBlocked(e)
                })))
            }
            var v = function(e) {
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
                    this.waitFor(i.Z);
                    if (null != e) {
                        b.userAffinities = e.userAffinities;
                        b.affinityUserIds = new Set(e.affinityUserIds);
                        b.lastFetched = e.lastFetched
                    }
                    this.syncWith([i.Z], E)
                };
                r.needsRefresh = function() {
                    return Date.now() - b.lastFetched > 864e5
                };
                r.getFetching = function() {
                    return y
                };
                r.getState = function() {
                    return b
                };
                r.getUserAffinities = function() {
                    return b.userAffinities
                };
                r.getUserAffinitiesUserIds = function() {
                    return b.affinityUserIds
                };
                return n
            }(r.ZP.PersistedStore);
            v.displayName = "UserAffinitiesStore";
            v.persistKey = "UserAffinitiesStore";
            v.migrations = [function(e) {
                return null
            }];
            const m = new v(o.Z, {
                LOAD_USER_AFFINITIES_SUCCESS: function(e) {
                    var t, n = e.affinities;
                    b.userAffinities = null !== (t = n.user_affinities) && void 0 !== t ? t : [];
                    b.lastFetched = Date.now();
                    E();
                    y = !1
                },
                LOAD_USER_AFFINITIES: function() {
                    y = !0
                },
                LOAD_USER_AFFINITIES_FAILURE: function() {
                    y = !1
                },
                LOGOUT: function() {
                    b = s({}, h)
                }
            })
        },
        796909: (e, t, n) => {
            n.d(t, {
                Z: () => x
            });
            var r = n(730381),
                o = n.n(r),
                i = n(202351),
                a = n(575626),
                u = n(744564),
                c = n(283513),
                s = n(624325),
                l = n(996344),
                f = n(48315),
                p = n(382060),
                d = n(61209),
                y = n(567403),
                h = n(179913),
                b = n(9430),
                E = n(473903),
                v = n(102921),
                m = n(897196);

            function _(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function g(e) {
                g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return g(e)
            }

            function I(e, t) {
                return !t || "object" !== C(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function S(e, t) {
                S = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return S(e, t)
            }
            var O, C = function(e) {
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
                    var n, r = g(e);
                    if (t) {
                        var o = g(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return I(this, n)
                }
            }! function(e) {
                e.DEFAULT = "DEFAULT";
                e.FAVORITE = "FAVORITE"
            }(O || (O = {}));
            var w = new a.Z((function(e) {
                var t = e.isRequest,
                    n = e.isFavorite;
                return t ? [] : [n ? O.FAVORITE : O.DEFAULT]
            }), (function(e) {
                return -e.lastMessageId
            }));

            function T(e) {
                var t, n, r = null !== (n = null !== (t = h.ZP.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== n ? n : e.id,
                    i = e.isMessageRequestTimestamp;
                if (null != i) {
                    var a = o()(i).valueOf(),
                        u = v.Z.fromTimestamp(a);
                    return v.Z.compare(r, u) > 0 ? r : u
                }
                return r
            }

            function R(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T(e);
                return {
                    channelId: e.id,
                    lastMessageId: t,
                    isFavorite: b.Z.isMessagesFavorite(e.id) && (0, c.cn)(),
                    isRequest: l.Z.isMessageRequest(e.id) || f.Z.isSpam(e.id)
                }
            }

            function N() {
                w.clear();
                Object.values(d.Z.getMutablePrivateChannels()).forEach((function(e) {
                    w.set(e.id, R(e))
                }));
                (0, c.cn)() && (0, s.x7)() && b.Z.getAddedToMessages().forEach((function(e) {
                    var t = d.Z.getChannel(e);
                    null != t && (0, p.zi)(t.type) && w.set(t.id, R(t))
                }))
            }

            function P() {
                var e = d.Z.getMutablePrivateChannels();
                for (var t in e) w.set(t, R(e[t]))
            }
            var L, j, Z, D = (L = [], j = [], Z = [], function() {
                    var e = w.values(O.FAVORITE),
                        t = w.values(O.DEFAULT);
                    if (L !== e || j !== t) {
                        Z = [];
                        e.forEach((function(e) {
                            var t = e.channelId;
                            return Z.push(t)
                        }));
                        L = e;
                        t.forEach((function(e) {
                            var t = e.channelId;
                            return Z.push(t)
                        }));
                        j = t
                    }
                    return Z
                }),
                F = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && S(e, t)
                    }(n, e);
                    var t = A(n);

                    function n() {
                        _(this, n);
                        return t.apply(this, arguments)
                    }
                    var r = n.prototype;
                    r.initialize = function() {
                        this.waitFor(d.Z, y.Z, E.default, l.Z, b.Z);
                        this.syncWith([b.Z, l.Z], N)
                    };
                    r.getPrivateChannelIds = function() {
                        return D()
                    };
                    r.getSortedChannels = function() {
                        return [w.values(O.FAVORITE), w.values(O.DEFAULT)]
                    };
                    r.serializeForOverlay = function() {
                        var e = {};
                        w.values().forEach((function(t) {
                            var n = t.channelId,
                                r = t.lastMessageId;
                            e[n] = r
                        }));
                        return e
                    };
                    return n
                }(i.ZP.Store);
            F.displayName = "PrivateChannelSortStore";
            const x = new F(u.Z, {
                CONNECTION_OPEN: N,
                CONNECTION_OPEN_SUPPLEMENTAL: N,
                OVERLAY_INITIALIZE: N,
                CACHE_LOADED: P,
                CACHE_LOADED_LAZY: P,
                CHANNEL_UPDATES: function(e) {
                    e.channels.forEach((function(e) {
                        ((0, p.hv)(e.type) || w.has(e.id)) && w.set(e.id, R(e))
                    }))
                },
                CHANNEL_CREATE: function(e) {
                    var t = e.channel;
                    if (!(0, p.hv)(t.type)) return !1;
                    if (t.id === m.V) return !1;
                    w.set(t.id, R(t))
                },
                CHANNEL_DELETE: function(e) {
                    var t = e.channel;
                    return w.delete(t.id)
                },
                MESSAGE_CREATE: function(e) {
                    var t = e.channelId,
                        n = e.message;
                    if (!w.has(t)) return !1;
                    var r = d.Z.getChannel(t);
                    return null != r && w.set(t, R(r, n.id))
                },
                GUILD_CREATE: function(e) {
                    var t = e.guild.id;
                    return w.delete(t)
                }
            })
        },
        282898: (e, t, n) => {
            n.d(t, {
                Z: () => g
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                u = n(304548),
                c = n(559968),
                s = n(926054),
                l = n(473708),
                f = n(415030),
                p = n.n(f);

            function d(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function y(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function h(e) {
                h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return h(e)
            }

            function b(e, t) {
                return !t || "object" !== v(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function E(e, t) {
                E = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return E(e, t)
            }
            var v = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function m(e) {
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
                    var n, r = h(e);
                    if (t) {
                        var o = h(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return b(this, n)
                }
            }
            var _ = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && E(e, t)
                }(n, e);
                var t = m(n);

                function n() {
                    d(this, n);
                    var e;
                    (e = t.apply(this, arguments))._textInputRef = o.createRef();
                    e._containerRef = o.createRef();
                    e.handleClear = function() {
                        var t = e.props,
                            n = t.onClear,
                            r = t.forwardedRef,
                            o = (null != r ? r : e._textInputRef).current;
                        null != o && o.focus();
                        null != n && n()
                    };
                    return e
                }
                n.prototype.render = function() {
                    var e = this.props,
                        t = e.autoFocus,
                        n = e.label,
                        o = e.placeholder,
                        i = e.searchTerm,
                        f = e.inputClassName,
                        d = e.className,
                        y = e.onChange,
                        h = e.onFocus,
                        b = e.onBlur,
                        E = e.onKeyPress,
                        v = e.autoComplete,
                        m = e.forwardedRef,
                        _ = e.closeIconClassName,
                        g = e.searchIconClassName,
                        I = e.cta,
                        S = null != i && i.length > 0,
                        O = null != m ? m : this._textInputRef;
                    return (0, r.jsx)(u.FocusRing, {
                        focusTarget: O,
                        ringTarget: this._containerRef,
                        children: (0, r.jsxs)("div", {
                            className: a()(p().searchBox, d),
                            ref: this._containerRef,
                            children: [(0, r.jsx)(u.TextInput, {
                                inputRef: O,
                                focusProps: {
                                    enabled: !1
                                },
                                name: "search",
                                maxLength: 100,
                                className: p().searchBoxInputWrapper,
                                inputClassName: a()(p().searchBoxInput, f),
                                onChange: y,
                                onFocus: h,
                                onBlur: b,
                                onKeyPress: E,
                                value: S ? i : "",
                                placeholder: o,
                                autoFocus: t,
                                "aria-label": n,
                                autoComplete: v ? "on" : "off"
                            }), null != I ? (0, r.jsx)(u.Text, {
                                color: "text-muted",
                                variant: "text-xs/normal",
                                className: p().cta,
                                children: I
                            }) : null, S ? (0, r.jsx)(u.Clickable, {
                                onClick: this.handleClear,
                                className: p().clear,
                                "aria-label": l.Z.Messages.SEARCH_CLEAR,
                                children: (0, r.jsx)(c.Z, {
                                    className: a()(p().clearIcon, _)
                                })
                            }) : (0, r.jsx)(s.Z, {
                                className: a()(p().searchIcon, g),
                                "aria-label": l.Z.Messages.SEARCH
                            })]
                        })
                    })
                };
                return n
            }(o.Component);
            _.defaultProps = {
                autoComplete: !1
            };
            const g = o.forwardRef((function(e, t) {
                return (0, r.jsx)(_, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            y(e, t, n[t])
                        }))
                    }
                    return e
                }({
                    forwardedRef: t
                }, e))
            }))
        }
    }
]);