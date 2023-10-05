(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [23775], {
        618446: (e, n, t) => {
            var r = t(539551);
            e.exports = function(e, n) {
                return r(e, n)
            }
        },
        570814: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => r
            });
            const r = t(667294).createContext(void 0)
        },
        702264: (e, n, t) => {
            "use strict";
            t.d(n, {
                CX: () => b,
                j7: () => v,
                Kt: () => m,
                I5: () => O,
                g_: () => j,
                z5: () => E,
                c6: () => P,
                Bn: () => C,
                Xo: () => w,
                JO: () => _,
                sN: () => I,
                lj: () => T
            });
            var r = t(281110),
                o = t(744564),
                i = t(285991),
                l = t(755550),
                c = t(876986),
                a = t(2590);

            function s(e, n, t, r, o, i, l) {
                try {
                    var c = e[i](l),
                        a = c.value
                } catch (e) {
                    t(e);
                    return
                }
                c.done ? n(a) : Promise.resolve(a).then(r, o)
            }

            function u(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(n, t);

                        function l(e) {
                            s(i, r, o, l, c, "next", e)
                        }

                        function c(e) {
                            s(i, r, o, l, c, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function f(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function d(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        f(e, n, t[n])
                    }))
                }
                return e
            }
            var p = function(e, n) {
                var t, r, o, i, l = {
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
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (t = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
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
                                        r = i[1];
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
                                i = n.call(e, l)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                t = o = 0
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

            function b(e, n) {
                return h.apply(this, arguments)
            }

            function h() {
                return (h = u((function(e, n) {
                    return p(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, y(e, n)];
                            case 1:
                                return [2, t.sent()]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function y(e, n) {
                return g.apply(this, arguments)
            }

            function g() {
                return (g = u((function(e, n) {
                    var t, i, l, s;
                    return p(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                o.Z.dispatch({
                                    type: "CLYDE_GUILD_SETTINGS_SAVE_START"
                                });
                                u.label = 1;
                            case 1:
                                u.trys.push([1, 3, , 4]);
                                return [4, r.ZP.patch({
                                    url: a.ANM.GUILD_CLYDE_SETTINGS(e),
                                    oldFormErrors: !0,
                                    body: n
                                })];
                            case 2:
                                if ((t = u.sent()).ok) {
                                    o.Z.dispatch({
                                        type: "CLYDE_GUILD_SETTINGS_SAVE_SUCCESS",
                                        settings: t.body.settings
                                    });
                                    null != t.body.guild_member_profile && o.Z.dispatch(d({
                                        type: "USER_PROFILE_UPDATE_SUCCESS",
                                        userId: c.fL,
                                        profileEffectID: void 0
                                    }, t.body.guild_member_profile));
                                    null != t.body.guild_member && o.Z.dispatch({
                                        type: "GUILD_MEMBER_PROFILE_UPDATE",
                                        guildMember: t.body.guild_member,
                                        guildId: e
                                    });
                                    return [2, t.body.settings]
                                }
                                o.Z.dispatch({
                                    type: "CLYDE_GUILD_SETTINGS_SAVE_FAIL",
                                    errors: null !== (l = null === (i = t.body) || void 0 === i ? void 0 : i.errors) && void 0 !== l ? l : {}
                                });
                                return [2, null];
                            case 3:
                                s = u.sent();
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

            function O(e) {
                o.Z.dispatch({
                    type: "CLYDE_SET_PENDING_AVATAR",
                    avatar: e
                })
            }

            function j(e) {
                o.Z.dispatch({
                    type: "CLYDE_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function E(e) {
                o.Z.dispatch({
                    type: "CLYDE_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function P() {
                o.Z.dispatch({
                    type: "CLYDE_RESET_PENDING_CHANGES"
                })
            }

            function C(e) {
                return S.apply(this, arguments)
            }

            function S() {
                S = u((function(e) {
                    var n, t, s = arguments;
                    return p(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                if (!(s.length > 1 && void 0 !== s[1] && s[1]) && !l.Z.shouldFetchSettings(e)) return [2];
                                (0, i.In)(c.fL, {
                                    guildId: e
                                });
                                o.Z.dispatch({
                                    type: "CLYDE_GUILD_SETTINGS_FETCH_START",
                                    guildId: e
                                });
                                u.label = 1;
                            case 1:
                                u.trys.push([1, 3, , 4]);
                                return [4, r.ZP.get({
                                    url: a.ANM.GUILD_CLYDE_SETTINGS(e),
                                    oldFormErrors: !0
                                })];
                            case 2:
                                n = u.sent();
                                t = n.body;
                                o.Z.dispatch({
                                    type: "CLYDE_GUILD_SETTINGS_FETCH_SUCCESS",
                                    guildId: t.guild_id,
                                    settings: t
                                });
                                return [3, 4];
                            case 3:
                                u.sent();
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
                return S.apply(this, arguments)
            }

            function w(e) {
                return x.apply(this, arguments)
            }

            function x() {
                return (x = u((function(e) {
                    var n, t;
                    return p(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                if (null != l.Z.getProfile(e)) return [2];
                                o.Z.dispatch({
                                    type: "CLYDE_PROFILE_FETCH_START",
                                    clydeProfileId: e
                                });
                                i.label = 1;
                            case 1:
                                i.trys.push([1, 3, , 4]);
                                return [4, r.ZP.get({
                                    url: a.ANM.CLYDE_PROFILES(e),
                                    oldFormErrors: !0
                                })];
                            case 2:
                                n = i.sent();
                                t = n.body;
                                o.Z.dispatch({
                                    type: "CLYDE_PROFILE_FETCH_SUCCESS",
                                    profile: t
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

            function _(e) {
                return N.apply(this, arguments)
            }

            function N() {
                return (N = u((function(e) {
                    var n;
                    return p(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                t.trys.push([0, 2, , 3]);
                                return [4, r.ZP.post({
                                    url: a.ANM.CLYDE_PROFILES_CREATE(e),
                                    oldFormErrors: !0
                                })];
                            case 1:
                                (n = t.sent()).ok && o.Z.dispatch({
                                    type: "CLYDE_PROFILE_CREATE_SUCCESS",
                                    profile: n.body
                                });
                                return [2, n.body];
                            case 2:
                                t.sent();
                                return [2, null];
                            case 3:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function I() {
                o.Z.dispatch({
                    type: "CLYDE_PROFILE_EDITING_START"
                })
            }

            function T() {
                o.Z.dispatch({
                    type: "CLYDE_PROFILE_EDITING_END"
                })
            }
        },
        703118: (e, n, t) => {
            "use strict";
            t.r(n);
            t.d(n, {
                ClydeEditProfileModalContent: () => U,
                default: () => G
            });
            var r = t(785893),
                o = t(667294),
                i = t(202351),
                l = t(304548),
                c = t(567403),
                a = t(107364),
                s = t(702264),
                u = t(755550),
                f = t(23925),
                d = t(318715),
                p = t(369263),
                b = t(2590),
                h = t(473708),
                y = t(587629),
                g = t.n(y);

            function v(e) {
                var n, t = e.settings,
                    o = (0, d.cj)([u.Z], (function() {
                        return {
                            pendingPersonality: u.Z.getPendingPersonality(),
                            errors: u.Z.getErrors()
                        }
                    })),
                    i = o.pendingPersonality,
                    c = o.errors,
                    a = null != c && Number(c.code) === b.evJ.CLYDE_UNSAFE_PERSONALITY ? c.message : void 0;
                return (0, r.jsxs)(p.Z, {
                    title: h.Z.Messages.PERSONALITY_CLYDE_SECTION,
                    children: [(0, r.jsxs)(l.FormText, {
                        type: l.FormText.Types.DESCRIPTION,
                        className: g().description,
                        children: [h.Z.Messages.PERSONALITY_DESCRIPTION, " ", (0, r.jsx)(l.Anchor, {
                            href: "https://forms.gle/T12GPi33Pt5ocg89A",
                            children: h.Z.Messages.PERSONALITY_FEEDBACK
                        })]
                    }), (0, r.jsx)(l.TextArea, {
                        value: null !== (n = null != i ? i : t.personality) && void 0 !== n ? n : "",
                        onChange: function(e) {
                            (0, s.j7)(e)
                        },
                        placeholder: h.Z.Messages.PERSONALITY_PLACEHOLDER,
                        maxLength: 1e3,
                        autosize: !0
                    }), null != a ? (0, r.jsx)(l.FormErrorBlock, {
                        className: g().errorBlock,
                        children: a
                    }) : null]
                }, "personality")
            }
            var m = t(441143),
                O = t.n(m),
                j = t(618354),
                E = t(546083),
                P = t(718421),
                C = t(380014),
                S = t(532369),
                w = t(526957),
                x = t(21372),
                _ = t(473903),
                N = t(876986),
                I = t(462128),
                T = t.n(I);

            function D(e) {
                var n = e.guildId,
                    t = e.clydeUser,
                    o = (0, i.cj)([u.Z], (function() {
                        return u.Z.getPendingUpdates()
                    })),
                    l = o.pendingNick,
                    c = o.pendingThemeColors,
                    a = (0, i.e7)([x.ZP], (function() {
                        return x.ZP.getMember(n, N.fL)
                    }));
                return (0, r.jsxs)("div", {
                    className: T().editProfileSections,
                    children: [(0, r.jsx)(C.Z, {
                        placeholder: h.Z.Messages.CLYDE_NAME,
                        errors: [],
                        currentGlobalName: null == a ? void 0 : a.nick,
                        pendingGlobalName: l,
                        onGlobalNameChange: s.Kt
                    }), (0, r.jsx)(P.Z, {
                        guildId: n,
                        onAvatarChange: s.I5,
                        showRemoveAvatarButton: !0,
                        sectionTitle: h.Z.Messages.CLYDE_SETTINGS_AVATAR_HEADER,
                        isClyde: !0
                    }), (0, r.jsx)(S.Z, {
                        guildId: n,
                        onBannerChange: s.g_,
                        showRemoveBannerButton: !0,
                        showPremiumIcon: !1
                    }), (0, r.jsx)(w.Z, {
                        user: t,
                        guildId: n,
                        showPremiumIcon: !1,
                        preventDisabled: !0,
                        pendingColors: null != c ? c : void 0,
                        onThemeColorsChange: s.z5
                    })]
                })
            }

            function k(e) {
                var n = e.guildId,
                    t = (0, i.cj)([u.Z], (function() {
                        return u.Z.getPendingUpdates()
                    })),
                    o = t.pendingNick,
                    l = t.pendingAvatar,
                    a = t.pendingBanner,
                    f = t.pendingThemeColors,
                    d = (0, i.e7)([_.default], (function() {
                        return _.default.getUser(N.fL)
                    }));
                O()(null != d, "Clyde User must exist");
                var p = (0, i.e7)([c.Z], (function() {
                    return c.Z.getGuild(n)
                }));
                return (0, r.jsx)(E.Z, {
                    className: T().profileCustomizationTab,
                    previewTitle: "Clyde",
                    profilePreview: (0, r.jsx)(j.Z, {
                        user: d,
                        guild: p,
                        canUsePremiumCustomization: !0,
                        onAvatarChange: s.I5,
                        onBannerChange: s.g_,
                        pendingNickname: null != o ? o : void 0,
                        pendingAvatar: l,
                        pendingBanner: a,
                        pendingThemeColors: null != f ? f : void 0,
                        pendingBio: void 0,
                        pendingPronouns: void 0,
                        hideFakeActivity: !0
                    }),
                    children: (0, r.jsx)(D, {
                        guildId: n,
                        clydeUser: d
                    })
                })
            }
            var Z = t(498898),
                L = t.n(Z);

            function A(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function R(e, n, t, r, o, i, l) {
                try {
                    var c = e[i](l),
                        a = c.value
                } catch (e) {
                    t(e);
                    return
                }
                c.done ? n(a) : Promise.resolve(a).then(r, o)
            }

            function M(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, o, i = [],
                            l = !0,
                            c = !1;
                        try {
                            for (t = t.call(e); !(l = (r = t.next()).done); l = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            c = !0;
                            o = e
                        } finally {
                            try {
                                l || null == t.return || t.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return A(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return A(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var F = function(e, n) {
                var t, r, o, i, l = {
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
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (t = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
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
                                        r = i[1];
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
                                i = n.call(e, l)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                t = o = 0
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

            function B(e) {
                var n = {};
                void 0 !== e.pendingPersonality && (n.personality = e.pendingPersonality);
                void 0 !== e.pendingNick && (n.nick = e.pendingNick);
                void 0 !== e.pendingAvatar && (n.avatar = e.pendingAvatar);
                void 0 !== e.pendingBanner && (n.banner = e.pendingBanner);
                void 0 !== e.pendingAccentColor && (n.accent_color = e.pendingAccentColor);
                void 0 !== e.pendingThemeColors && (n.theme_colors = e.pendingThemeColors);
                return n
            }

            function U(e) {
                var n = e.onClose,
                    t = e.guildId,
                    d = (0, i.cj)([u.Z], (function() {
                        return {
                            settings: u.Z.getSettings(t),
                            isFetchingSettings: u.Z.isFetchingSettings(t),
                            isSavingSettings: u.Z.isSavingSettings(),
                            hasPendingChanges: u.Z.hasPendingChanges(),
                            errors: u.Z.getErrors()
                        }
                    })),
                    p = d.settings,
                    b = d.isFetchingSettings,
                    y = d.isSavingSettings,
                    g = d.hasPendingChanges,
                    m = d.errors,
                    O = (0, i.e7)([c.Z], (function() {
                        return c.Z.getGuild(t)
                    })),
                    j = (0, f.OR)(O),
                    E = M(o.useState(!1), 2),
                    P = E[0],
                    C = E[1];
                o.useEffect((function() {
                    (0, s.sN)();
                    return s.lj
                }), []);
                o.useEffect((function() {
                    (0, s.Bn)(t, !0)
                }), [t]);
                o.useEffect((function() {
                    (g || null != m) && C(!1)
                }), [g, m]);
                var S, w, x = (w = (S = function() {
                    var e;
                    return F(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                if (null == t || !u.Z.hasPendingChanges()) return [2];
                                e = u.Z.getPendingUpdates();
                                return [4, (0, s.CX)(t, B(e))];
                            case 1:
                                n.sent();
                                C(!0);
                                return [2]
                        }
                    }))
                }, function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(t, r) {
                        var o = S.apply(e, n);

                        function i(e) {
                            R(o, t, r, i, l, "next", e)
                        }

                        function l(e) {
                            R(o, t, r, i, l, "throw", e)
                        }
                        i(void 0)
                    }))
                }), function() {
                    return w.apply(this, arguments)
                });
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(l.ModalHeader, {
                        separator: !1,
                        children: [(0, r.jsx)("div", {
                            className: L().heading,
                            children: (0, r.jsx)(l.Heading, {
                                variant: "heading-xl/semibold",
                                children: h.Z.Messages.CLYDE_CUSTOMIZE
                            })
                        }), (0, r.jsx)(l.ModalCloseButton, {
                            onClick: n
                        })]
                    }), (0, r.jsx)(l.ScrollerAuto, {
                        className: L().content,
                        children: b || null == p ? (0, r.jsx)(l.Spinner, {
                            type: l.Spinner.Type.SPINNING_CIRCLE
                        }) : (0, r.jsxs)(r.Fragment, {
                            children: [j && (0, r.jsx)(k, {
                                guildId: t
                            }), null != p && (0, r.jsx)("div", {
                                className: L().section,
                                children: (0, r.jsx)(v, {
                                    settings: p
                                })
                            })]
                        })
                    }), (0,
                        r.jsxs)(l.ModalFooter, {
                        direction: a.Z.Direction.HORIZONTAL,
                        className: L().footer,
                        children: [(0, r.jsx)("div", {
                            className: L().resetButtonContainer,
                            children: (0, r.jsx)(l.Button, {
                                onClick: s.c6,
                                color: l.ButtonColors.PRIMARY,
                                size: l.ButtonSizes.SMALL,
                                disabled: !g,
                                children: h.Z.Messages.RESET
                            })
                        }), g && null == m && (0, r.jsx)("div", {
                            className: L().pendingChangesMessage,
                            children: h.Z.Messages.SETTINGS_NOTICE_MESSAGE
                        }), P && (0, r.jsx)("div", {
                            className: L().successfullSaveMessage,
                            children: h.Z.Messages.CLYDE_SETTINGS_SAVE_SUCCESS
                        }), null != m && (0, r.jsx)("div", {
                            className: L().errorMessage,
                            children: h.Z.Messages.CLYDE_SETTINGS_SAVE_FAILED
                        }), (0, r.jsx)("div", {
                            children: (0, r.jsx)(l.Button, {
                                onClick: x,
                                color: l.ButtonColors.GREEN,
                                size: l.ButtonSizes.SMALL,
                                submitting: y,
                                disabled: !g,
                                children: h.Z.Messages.SAVE_CHANGES
                            })
                        })]
                    })]
                })
            }

            function G(e) {
                var n = e.transitionState,
                    t = e.onClose,
                    o = e.guildId;
                return (0, r.jsx)(l.ModalRoot, {
                    transitionState: n,
                    size: l.ModalSize.LARGE,
                    children: (0, r.jsx)(U, {
                        onClose: t,
                        guildId: o
                    })
                })
            }
        },
        888291: (e, n, t) => {
            "use strict";
            t.d(n, {
                S: () => S,
                Z: () => x
            });
            var r = t(785893),
                o = t(667294),
                i = t(294184),
                l = t.n(i),
                c = t(441143),
                a = t.n(c),
                s = t(304548),
                u = t(421281),
                f = t(694755),
                d = t(2590),
                p = t(473708),
                b = t(307436),
                h = t.n(b);

            function y(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function g(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function v(e) {
                v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return v(e)
            }

            function m(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        g(e, n, t[n])
                    }))
                }
                return e
            }

            function O(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function j(e, n) {
                return !n || "object" !== P(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function E(e, n) {
                E = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return E(e, n)
            }
            var P = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function C(e) {
                var n = function() {
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
                    var t, r = v(e);
                    if (n) {
                        var o = v(this).constructor;
                        t = Reflect.construct(r, arguments, o)
                    } else t = r.apply(this, arguments);
                    return j(this, t)
                }
            }

            function S(e) {
                var n = e.className,
                    t = e.icon,
                    o = void 0 === t ? null : t;
                return (0, r.jsx)("div", {
                    className: l()(h().imageUploaderIcon, n),
                    children: o
                })
            }
            var w = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && E(e, n)
                }(t, e);
                var n = C(t);

                function t() {
                    y(this, t);
                    var e;
                    (e = n.apply(this, arguments)).inputRef = o.createRef();
                    e.handleRemove = function() {
                        e.props.onChange(null)
                    };
                    return e
                }
                var i = t.prototype;
                i.handleExternalFileChange = function(e) {
                    a()(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted");
                    this.inputRef.current.handleFileChange(e)
                };
                i.render = function() {
                    var e, n, t, o, i, c = this.props,
                        a = c.image,
                        b = c.hint,
                        y = c.name,
                        g = c.makeURL,
                        v = c.disabled,
                        j = c.onChange,
                        E = c.showIcon,
                        P = c.showIconDisabled,
                        C = c.className,
                        w = c.imageClassName,
                        x = c.iconClassName,
                        _ = c.iconWrapperClassName,
                        N = c.icon,
                        I = c.hideSize,
                        T = c.imageStyle,
                        D = c.showRemoveButton,
                        k = c.maxFileSizeBytes,
                        Z = c.onFileSizeError,
                        L = c.onOpenImageSelectModal,
                        A = c["aria-label"];
                    null != (e = null != a && /^data:/.test(a) ? a : g(a)) ? n = 'url("'.concat(e, '")') : null != y && (t = (0, r.jsx)("div", {
                        className: h().imageUploaderAcronym,
                        children: (0, u.Zg)(y)
                    }));
                    if (v) return (0, r.jsx)("div", {
                        className: l()(h().imageUploader, h().disabled, C),
                        children: (0, r.jsxs)("div", {
                            className: l()(h().imageUploaderInner, w),
                            style: O(m({}, T), {
                                backgroundImage: n
                            }),
                            children: [t, P && (0, r.jsx)("div", {
                                className: l()(h().imageUploaderIcon, h().imageUploaderIconDisabled, x),
                                children: N
                            })]
                        })
                    });
                    null != a ? o = (0, r.jsx)(s.Anchor, {
                        className: h().removeButton,
                        onClick: this.handleRemove,
                        children: p.Z.Messages.REMOVE
                    }) : I || (o = (0, r.jsx)("small", {
                        className: h().sizeInfo,
                        children: p.Z.Messages.MINIMUM_SIZE.format({
                            size: d.IXf
                        })
                    }));
                    var R = null !== (i = null != A ? A : b) && void 0 !== i ? i : p.Z.Messages.CHANGE_AVATAR;
                    return (0, r.jsxs)("div", {
                        className: l()(h().imageUploader, C),
                        children: [(0, r.jsx)(s.FocusRing, {
                            within: !0,
                            children: (0, r.jsxs)("div", {
                                className: E ? l()(h().imageUploaderIconWrapper, _) : void 0,
                                children: [(0, r.jsxs)("div", {
                                    className: l()(h().imageUploaderInner, w),
                                    style: O(m({}, T), {
                                        backgroundImage: n
                                    }),
                                    children: [(0, r.jsx)("span", {
                                        "aria-hidden": !0,
                                        children: t
                                    }), null != L ? (0, r.jsx)(s.Clickable, {
                                        className: h().imageUploaderFileInput,
                                        "aria-label": R,
                                        onClick: L
                                    }) : (0, r.jsx)(f.ZP, {
                                        ref: this.inputRef,
                                        onChange: j,
                                        className: h().imageUploaderFileInput,
                                        "aria-label": R,
                                        tabIndex: 0,
                                        maxFileSizeBytes: k,
                                        onFileSizeError: Z
                                    })]
                                }), null != b && (0, r.jsx)("div", {
                                    className: h().imageUploaderHint,
                                    "aria-hidden": "true",
                                    children: b
                                }), E && (0, r.jsx)(S, {
                                    className: x,
                                    icon: N
                                })]
                            })
                        }), D ? o : null]
                    })
                };
                return t
            }(o.PureComponent);
            w.defaultProps = {
                name: "",
                makeURL: function(e) {
                    return e
                },
                disabled: !1,
                showIcon: !1,
                hideSize: !1,
                showRemoveButton: !0,
                maxFileSizeBytes: 1 / 0,
                icon: null
            };
            const x = w
        },
        821: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => y
            });
            var r = t(202351),
                o = t(744564);

            function i(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function l(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var r = n[t];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function c(e) {
                c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return c(e)
            }

            function a(e, n) {
                return !n || "object" !== d(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function s(e, n) {
                s = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return s(e, n)
            }
            var u, f, d = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function p(e) {
                var n = function() {
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
                    var t, r = c(e);
                    if (n) {
                        var o = c(this).constructor;
                        t = Reflect.construct(r, arguments, o)
                    } else t = r.apply(this, arguments);
                    return a(this, t)
                }
            }

            function b() {
                u = !1;
                f = null
            }
            b();
            var h = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && s(e, n)
                }(t, e);
                var n = p(t);

                function t() {
                    i(this, t);
                    return n.apply(this, arguments)
                }! function(e, n, t) {
                    n && l(e.prototype, n);
                    t && l(e, t)
                }(t, [{
                    key: "hasCompletedStepDuringSession",
                    get: function() {
                        return u
                    }
                }, {
                    key: "activeSubstep",
                    get: function() {
                        return f
                    }
                }]);
                return t
            }(r.ZP.Store);
            h.displayName = "PremiumTutorialSessionStore";
            const y = new h(o.Z, {
                SET_HAS_COMPLETED_STEP: function() {
                    u = !0
                },
                RESET_HAS_COMPLETED_STEP: function() {
                    u = !1
                },
                SET_ACTIVE_SUBSTEP: function(e) {
                    var n = e.substep;
                    f = n
                },
                LOGOUT: function() {
                    b()
                }
            })
        },
        102007: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => p
            });
            var r = t(785893),
                o = (t(667294), t(294184)),
                i = t.n(o),
                l = t(304548),
                c = t(406493),
                a = t(473708),
                s = t(148849),
                u = t.n(s);

            function f(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function d(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function p(e) {
                var n = e.text,
                    t = void 0 === n ? a.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP : n,
                    o = e.className;
                return (0, r.jsx)(l.Tooltip, {
                    text: t,
                    children: function(e) {
                        return (0, r.jsx)(l.Clickable, d(function(e) {
                            for (var n = 1; n < arguments.length; n++) {
                                var t = null != arguments[n] ? arguments[n] : {},
                                    r = Object.keys(t);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                                }))));
                                r.forEach((function(n) {
                                    f(e, n, t[n])
                                }))
                            }
                            return e
                        }({}, e), {
                            children: (0, r.jsx)(c.Z, {
                                className: i()(u().nitroWheel, o)
                            })
                        }))
                    }
                })
            }
        },
        598679: (e, n, t) => {
            "use strict";
            t.d(n, {
                Y: () => r,
                Z: () => p
            });
            var r, o, i = t(785893),
                l = t(667294),
                c = t(294184),
                a = t.n(c),
                s = t(273465),
                u = t.n(s);

            function f(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }! function(e) {
                e.PREMIUM = "premium";
                e.LIMITED = "limited"
            }(r || (r = {}));
            var d = (f(o = {}, r.PREMIUM, {
                border: u().premiumFeatureBorder,
                background: u().premiumBackground
            }), f(o, r.LIMITED, {
                border: u().limitedFeatureBorder,
                background: u().limitedBackground
            }), o);
            const p = l.forwardRef((function(e, n) {
                var t = e.children,
                    o = e.type,
                    l = void 0 === o ? r.PREMIUM : o,
                    c = e.isShown,
                    s = e.hasBackground,
                    f = void 0 !== s && s,
                    p = e.className,
                    b = e.backgroundClassName;
                if (!c) return (0, i.jsx)(i.Fragment, {
                    children: t
                });
                var h = d[l],
                    y = h.border,
                    g = h.background;
                return (0, i.jsx)("div", {
                    ref: n,
                    className: a()(y, p),
                    children: (0, i.jsx)("div", {
                        className: a()(f ? g : u().background, b),
                        children: t
                    })
                })
            }))
        },
        577939: (e, n, t) => {
            "use strict";
            t.d(n, {
                T6: () => J,
                Z$: () => q,
                k3: () => K,
                ZP: () => $
            });
            var r = t(785893),
                o = t(667294),
                i = t(294184),
                l = t.n(i),
                c = t(798159),
                a = t(457217),
                s = t(547308),
                u = t(304548);

            function f(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function d(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, o, i = [],
                            l = !0,
                            c = !1;
                        try {
                            for (t = t.call(e); !(l = (r = t.next()).done); l = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            c = !0;
                            o = e
                        } finally {
                            try {
                                l || null == t.return || t.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return f(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return f(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            const p = function() {
                var e = d((0, o.useState)(null), 2),
                    n = e[0],
                    t = e[1];
                (0, o.useEffect)((function() {
                    null != (null === window || void 0 === window ? void 0 : window.EyeDropper) && t(new window.EyeDropper)
                }), []);
                return n
            };
            var b = t(795470),
                h = t(681706),
                y = t(1150),
                g = t(49657),
                v = t.n(g);

            function m(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function O(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        m(e, n, t[n])
                    }))
                }
                return e
            }

            function j(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }
            var E = (0, h.iS)((function(e) {
                return (0, r.jsxs)("div", {
                    className: v().wrapper,
                    children: [(0, r.jsx)("div", {
                        className: v().saturation,
                        children: (0, r.jsx)(y.OQ, O({}, e))
                    }), (0, r.jsx)("div", {
                        className: v().hue,
                        children: (0, r.jsx)(y.PS, j(O({}, e), {
                            direction: "horizontal"
                        }))
                    })]
                })
            }));
            const P = o.memo(E);
            var C = t(621329),
                S = t(179649),
                w = t(373438),
                x = t(2590),
                _ = t(473708),
                N = t(70812),
                I = t.n(N);

            function T(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function D(e, n, t, r, o, i, l) {
                try {
                    var c = e[i](l),
                        a = c.value
                } catch (e) {
                    t(e);
                    return
                }
                c.done ? n(a) : Promise.resolve(a).then(r, o)
            }

            function k(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function Z(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function L(e) {
                L = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return L(e)
            }

            function A(e, n) {
                if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(n && n.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                });
                n && U(e, n)
            }

            function R(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        Z(e, n, t[n])
                    }))
                }
                return e
            }

            function M(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function F(e, n) {
                if (null == e) return {};
                var t, r, o = function(e, n) {
                    if (null == e) return {};
                    var t, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        t = i[r];
                        n.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        t = i[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }

            function B(e, n) {
                return !n || "object" !== Y(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function U(e, n) {
                U = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return U(e, n)
            }

            function G(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, o, i = [],
                            l = !0,
                            c = !1;
                        try {
                            for (t = t.call(e); !(l = (r = t.next()).done); l = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            c = !0;
                            o = e
                        } finally {
                            try {
                                l || null == t.return || t.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return T(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return T(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Y = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function H(e) {
                var n = function() {
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
                    var t, r = L(e);
                    if (n) {
                        var o = L(this).constructor;
                        t = Reflect.construct(r, arguments, o)
                    } else t = r.apply(this, arguments);
                    return B(this, t)
                }
            }
            var z = function(e, n) {
                    var t, r, o, i, l = {
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
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; l;) try {
                                    if (t = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    (r = 0, o) && (i = [2 & i[0], o.value]);
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
                                            r = i[1];
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
                                    i = n.call(e, l)
                                } catch (e) {
                                    i = [6, e];
                                    r = 0
                                } finally {
                                    t = o = 0
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
                V = function() {
                    return Promise.resolve()
                };

            function W(e) {
                var n, t = e.color,
                    o = e.isDefault,
                    i = void 0 !== o && o,
                    c = e.isCustom,
                    f = void 0 !== c && c,
                    d = e.isSelected,
                    p = void 0 !== d && d,
                    h = e.disabled,
                    y = void 0 !== h && h,
                    g = e.style,
                    v = void 0 === g ? {} : g,
                    m = e.onClick,
                    O = e["aria-label"],
                    j = (0, a.JA)("color-".concat(t)),
                    E = null != t ? (0, s.Rf)(t) : v.backgroundColor,
                    P = !1;
                f && !p ? P = !0 : (f || p) && (P = (0, s.Bd)(t) > .1);
                return (0, r.jsx)(u.FocusRing, {
                    offset: -2,
                    children: (0, r.jsxs)("button", M(R({
                        type: "button",
                        className: l()(I().colorPickerSwatch, (n = {}, Z(n, I().disabled, y), Z(n, I().default, i), Z(n, I().custom, f), Z(n, I().noColor, null == t), n)),
                        disabled: y,
                        onClick: function() {
                            return null == m ? void 0 : m(t)
                        },
                        style: M(R({}, v), {
                            backgroundColor: E
                        }),
                        "aria-label": null != O ? O : E
                    }, j), {
                        children: [f ? (0, r.jsx)(S.Z, {
                            className: I().colorPickerDropper,
                            foreground: I().colorPickerDropperFg,
                            width: 14,
                            height: 14,
                            color: (0, b.Lq)(P ? x.Ilk.WHITE_500 : x.Ilk.BLACK_500)
                        }) : null, function() {
                            var e = 16,
                                n = 16;
                            if (f || i) {
                                e = 32;
                                n = 24
                            }
                            if (p) return (0, r.jsx)(C.Z, {
                                width: e,
                                height: n,
                                color: (0, b.Lq)(P ? x.Ilk.WHITE_500 : x.Ilk.BLACK_500)
                            })
                        }()]
                    }))
                })
            }
            var K = function(e) {
                    A(t, e);
                    var n = H(t);

                    function t() {
                        k(this, t);
                        return n.apply(this, arguments)
                    }
                    t.prototype.render = function() {
                        var e = this.props,
                            n = e.color,
                            t = e.onChange,
                            o = e.value,
                            i = e.disabled;
                        return (0, r.jsx)(W, {
                            isDefault: !0,
                            color: n,
                            isSelected: n === o || 0 === o,
                            onClick: t,
                            disabled: i
                        })
                    };
                    return t
                }(o.PureComponent),
                J = function(e) {
                    A(t, e);
                    var n = H(t);

                    function t() {
                        k(this, t);
                        return n.apply(this, arguments)
                    }
                    t.prototype.render = function() {
                        var e = this.props,
                            n = e.customColor,
                            t = e.value,
                            o = e.disabled,
                            i = e["aria-label"];
                        return (0, r.jsx)(W, {
                            isCustom: !0,
                            color: n,
                            isSelected: t === n,
                            disabled: o,
                            "aria-label": i
                        })
                    };
                    return t
                }(o.PureComponent),
                X = function(e) {
                    var n = e.value,
                        t = e.onChange,
                        i = e.onClose,
                        l = e.suggestedColors,
                        c = e.middle,
                        a = e.footer,
                        f = e.showEyeDropper,
                        d = p(),
                        b = G(o.useState((function() {
                            var e = null != n ? n : 0,
                                t = (0, s.Rf)(e);
                            return {
                                current: e,
                                pending: t,
                                input: t
                            }
                        })), 2),
                        h = b[0],
                        y = b[1];
                    o.useEffect((function() {
                        if (null != n && n !== h.current) {
                            var e = (0, s.Rf)(n);
                            y({
                                current: n,
                                pending: e,
                                input: e
                            })
                        }
                    }), [n, h]);
                    o.useEffect((function() {
                        return i
                    }), [i]);
                    var g, v, m = function(e) {
                            var n = "#" === e[0] ? e : "#".concat(e);
                            if ((0, s.FX)(n)) {
                                var r = (0, s._i)(n);
                                y({
                                    current: r,
                                    pending: n,
                                    input: n
                                });
                                t(r)
                            } else y((function(e) {
                                return M(R({}, e), {
                                    input: n
                                })
                            }))
                        },
                        O = (v = (g = function() {
                            var e;
                            return z(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (null == d) return [2];
                                        n.label = 1;
                                    case 1:
                                        n.trys.push([1, 3, , 4]);
                                        return [4, d.open()];
                                    case 2:
                                        e = n.sent().sRGBHex;
                                        m(e);
                                        return [3, 4];
                                    case 3:
                                        n.sent();
                                        return [3, 4];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }, function() {
                            var e = this,
                                n = arguments;
                            return new Promise((function(t, r) {
                                var o = g.apply(e, n);

                                function i(e) {
                                    D(o, t, r, i, l, "next", e)
                                }

                                function l(e) {
                                    D(o, t, r, i, l, "throw", e)
                                }
                                i(void 0)
                            }))
                        }), function() {
                            return v.apply(this, arguments)
                        });
                    return (0, r.jsxs)(u.Dialog, {
                        "aria-label": _.Z.Messages.PICK_A_COLOR,
                        className: I().customColorPicker,
                        children: [(0, r.jsx)(P, {
                            onChange: function(e) {
                                return function(e) {
                                    y((function(n) {
                                        return M(R({}, n), {
                                            pending: e,
                                            input: e
                                        })
                                    }))
                                }(e.hex)
                            },
                            onChangeComplete: function(e) {
                                return function(e) {
                                    t((0, s._i)(e))
                                }(e.hex)
                            },
                            color: h.pending
                        }), c, (0, r.jsxs)("div", {
                            className: I().customColorPickerInputContainer,
                            children: [f && null != d && (0, r.jsx)(w.JO, {
                                onClick: O,
                                tooltip: _.Z.Messages.PICK_A_COLOR_FROM_THE_PAGE,
                                tooltipPosition: "top",
                                className: I().customColorPickerEyeDropper,
                                icon: S.Z
                            }), (0, r.jsx)(u.TextInput, {
                                className: I().customColorPickerInput,
                                value: h.input,
                                onChange: m,
                                maxLength: 7
                            })]
                        }), null != l && l.length > 0 && (0, r.jsx)("div", {
                            className: I().suggestedColors,
                            children: l.map((function(e, n) {
                                return (0, r.jsx)(u.Clickable, {
                                    "aria-label": "",
                                    style: {
                                        backgroundColor: e
                                    },
                                    className: I().suggestedColor,
                                    onClick: function() {
                                        return m(e)
                                    }
                                }, "".concat(e, "-").concat(n))
                            }))
                        }), a]
                    })
                },
                q = o.memo(X);

            function $(e) {
                var n = e.className,
                    t = e.defaultColor,
                    o = e.customColor,
                    i = e.colors,
                    s = e.value,
                    u = e.disabled,
                    f = e.onChange,
                    d = e.renderDefaultButton,
                    p = e.renderCustomButton,
                    b = e.colorContainerClassName,
                    h = function(e) {
                        return (0, r.jsx)("div", {
                            className: I().colorPickerRow,
                            children: e.map((function(e) {
                                return (0, r.jsx)(W, {
                                    color: e,
                                    isSelected: e === s,
                                    onClick: f,
                                    disabled: u
                                }, e)
                            }))
                        })
                    },
                    y = i.slice(0, i.length / 2),
                    g = i.slice(i.length / 2, i.length),
                    v = (0, c.ZP)({
                        id: "color-picker",
                        isEnabled: !0,
                        scrollToStart: V,
                        scrollToEnd: V
                    });
                return (0, r.jsx)(a.bG, {
                    navigator: v,
                    children: (0, r.jsx)(a.SJ, {
                        children: function(e) {
                            var i = e.ref,
                                c = F(e, ["ref"]);
                            return (0, r.jsxs)("div", M(R({
                                className: l()(I().container, n),
                                ref: i
                            }, c), {
                                children: [(0, r.jsx)("div", {
                                    className: l()(I().defaultContainer, b),
                                    children: d({
                                        value: s,
                                        color: t,
                                        onChange: f,
                                        disabled: u
                                    })
                                }), (0, r.jsx)("div", {
                                    className: l()(I().customContainer, b),
                                    children: p({
                                        value: s,
                                        customColor: o,
                                        disabled: u
                                    })
                                }), (0, r.jsxs)("div", {
                                    className: I().presets,
                                    children: [h(y), h(g)]
                                })]
                            }))
                        }
                    })
                })
            }
        },
        179649: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => u
            });
            var r = t(785893),
                o = (t(667294), t(168075)),
                i = t(795308),
                l = t(633878);

            function c(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function a(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function s(e, n) {
                if (null == e) return {};
                var t, r, o = function(e, n) {
                    if (null == e) return {};
                    var t, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        t = i[r];
                        n.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        t = i[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }
            const u = (0, o.hN)((function(e) {
                var n = e.width,
                    t = void 0 === n ? 16 : n,
                    o = e.height,
                    i = void 0 === o ? 16 : o,
                    l = e.color,
                    c = void 0 === l ? "currentColor" : l,
                    a = e.className,
                    s = e.foreground;
                return (0, r.jsx)("svg", {
                    className: a,
                    width: t,
                    height: i,
                    viewBox: "0 0 16 16",
                    children: (0, r.jsxs)("g", {
                        fill: "none",
                        children: [(0, r.jsx)("path", {
                            d: "M-4-4h24v24H-4z"
                        }), (0,
                            r.jsx)("path", {
                            className: s,
                            fill: c,
                            d: "M14.994 1.006C13.858-.257 11.904-.3 10.72.89L8.637 2.975l-.696-.697-1.387 1.388 5.557 5.557 1.387-1.388-.697-.697 1.964-1.964c1.13-1.13 1.3-2.985.23-4.168zm-13.25 10.25c-.225.224-.408.48-.55.764L.02 14.37l1.39 1.39 2.35-1.174c.283-.14.54-.33.765-.55l4.808-4.808-2.776-2.776-4.813 4.803z"
                        })]
                    })
                })
            }), (function(e) {
                var n = e.width,
                    t = void 0 === n ? 24 : n,
                    o = e.height,
                    u = void 0 === o ? 24 : o,
                    f = e.color,
                    d = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    b = void 0 === p ? "" : p,
                    h = s(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", a(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            c(e, n, t[n])
                        }))
                    }
                    return e
                }({}, (0, l.Z)(h)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: u,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "m16.25 2.25-2 2-.629-.629a3 3 0 0 0-4.242 0l-.849.849a.75.75 0 0 0 0 1.06l9.94 9.94a.75.75 0 0 0 1.06 0l.849-.849a3 3 0 0 0 0-4.242l-.629-.63 2-2a3.89 3.89 0 1 0-5.5-5.5ZM9.293 9.707a1 1 0 0 1 1.414 0l3.586 3.586a1 1 0 0 1 0 1.414l-4.829 4.828A5 5 0 0 1 6.76 20.93c-.467.08-.86.418-1.099.827A2.499 2.499 0 0 1 1 20.5c0-.922.5-1.728 1.243-2.162.41-.238.748-.63.827-1.098a5 5 0 0 1 1.394-2.705l4.829-4.828Z",
                        clipRule: "evenodd",
                        className: b
                    })
                }))
            }))
        },
        912250: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => u
            });
            var r = t(785893),
                o = (t(667294), t(168075)),
                i = t(218790),
                l = t(633878);

            function c(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function a(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function s(e, n) {
                if (null == e) return {};
                var t, r, o = function(e, n) {
                    if (null == e) return {};
                    var t, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        t = i[r];
                        n.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        t = i[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }
            const u = (0, o.hN)((function(e) {
                var n = e.color,
                    t = void 0 === n ? "currentColor" : n,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    u = e.width,
                    f = void 0 === u ? 24 : u,
                    d = s(e, ["color", "height", "width"]);
                return (0, r.jsx)("svg", a(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            c(e, n, t[n])
                        }))
                    }
                    return e
                }({}, (0, l.Z)(d)), {
                    width: f,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z",
                        fill: t
                    })
                }))
            }), i.v)
        },
        373438: (e, n, t) => {
            "use strict";
            t.d(n, {
                JO: () => g,
                iz: () => v,
                ZP: () => O
            });
            var r = t(785893),
                o = t(667294),
                i = t(294184),
                l = t.n(i),
                c = t(108717),
                a = t(289283),
                s = t(304548),
                u = t(570814),
                f = t(249697),
                d = t(136317),
                p = t(211482),
                b = t(526976),
                h = t.n(b);

            function y(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }
            var g = function(e) {
                    var n = e.className,
                        t = e.iconClassName,
                        o = e.children,
                        i = e.selected,
                        c = void 0 !== i && i,
                        a = e.disabled,
                        u = void 0 !== a && a,
                        f = e.showBadge,
                        d = void 0 !== f && f,
                        b = e.color,
                        g = e.foreground,
                        v = e.background,
                        m = e.icon,
                        O = e.onClick,
                        j = e.onContextMenu,
                        E = e.tooltip,
                        P = void 0 === E ? null : E,
                        C = e.tooltipColor,
                        S = e.tooltipPosition,
                        w = void 0 === S ? "bottom" : S,
                        x = e.hideOnClick,
                        _ = void 0 === x || x,
                        N = e.role,
                        I = e["aria-label"],
                        T = e["aria-hidden"],
                        D = e["aria-checked"],
                        k = e["aria-expanded"],
                        Z = e["aria-haspopup"],
                        L = (0, r.jsx)(m, {
                            x: 0,
                            y: 0,
                            width: 24,
                            height: 24,
                            className: l()(t, h().icon),
                            foreground: null != g ? g : void 0,
                            background: null != v ? v : void 0,
                            color: b
                        }),
                        A = I;
                    null == A && "string" == typeof P && (A = P);
                    return (0, r.jsx)(s.Tooltip, {
                        text: P,
                        color: C,
                        position: w,
                        hideOnClick: _,
                        children: function(e) {
                            var i, a = e.onMouseEnter,
                                f = e.onMouseLeave,
                                E = e.onFocus,
                                P = e.onBlur;
                            return null == O ? (0, r.jsx)("div", {
                                className: l()(n, [h().iconWrapper]),
                                children: (0, r.jsx)(m, {
                                    x: 0,
                                    y: 0,
                                    width: 24,
                                    height: 24,
                                    className: l()(t, h().icon),
                                    foreground: null != g ? g : void 0,
                                    background: null != v ? v : void 0,
                                    color: b,
                                    "aria-hidden": T,
                                    onMouseEnter: a,
                                    onMouseLeave: f,
                                    onFocus: E,
                                    onBlur: P
                                })
                            }) : (0, r.jsxs)(s.Clickable, {
                                tag: "div",
                                onClick: u ? void 0 : O,
                                onContextMenu: u ? void 0 : j,
                                onMouseEnter: a,
                                onMouseLeave: f,
                                onFocus: E,
                                onBlur: P,
                                className: l()(n, (i = {}, y(i, h().iconWrapper, !0), y(i, h().clickable, !u && null != O), y(i, h().selected, c), i)),
                                role: N,
                                "aria-label": A,
                                "aria-hidden": T,
                                "aria-checked": D,
                                "aria-haspopup": Z,
                                "aria-expanded": k,
                                tabIndex: u || null == O ? -1 : 0,
                                children: [d ? (0, r.jsx)(p.ZP, {
                                    mask: p.ZP.Masks.HEADER_BAR_BADGE,
                                    children: L
                                }) : L, d ? (0, r.jsx)("span", {
                                    className: h().iconBadge
                                }) : null, o]
                            })
                        }
                    })
                },
                v = function(e) {
                    var n = e.className;
                    return (0, r.jsx)("div", {
                        className: l()(h().divider, n)
                    })
                };
            var m = function(e) {
                var n, t = e.className,
                    i = e.innerClassName,
                    f = e.children,
                    d = e.childrenBottom,
                    p = e.toolbar,
                    b = e.onDoubleClick,
                    g = e["aria-label"],
                    v = e["aria-labelledby"],
                    m = e.role,
                    O = e.scrollable,
                    j = e.transparent,
                    E = void 0 !== j && j,
                    P = o.useRef(null),
                    C = o.useContext(u.Z);
                return (0,
                    r.jsx)("section", {
                    className: l()(t, h().container, (n = {}, y(n, h().themed, !E), y(n, h().transparent, E), y(n, h().themedMobile, a.tq), n)),
                    "aria-label": g,
                    "aria-labelledby": v,
                    role: m,
                    ref: P,
                    children: (0, r.jsxs)(s.FocusRingScope, {
                        containerRef: P,
                        children: [(0, r.jsxs)("div", {
                            className: h().upperContainer,
                            children: [(0, r.jsxs)("div", {
                                className: l()(h().children, i, y({}, h().scrollable, O)),
                                onDoubleClick: b,
                                children: [a.tq && null != C ? (0, r.jsx)(c.Z, {
                                    onClick: C,
                                    className: h().hamburger
                                }) : null, f]
                            }), null != p ? (0, r.jsx)("div", {
                                className: h().toolbar,
                                children: p
                            }) : null]
                        }), d]
                    })
                })
            };
            m.Icon = g;
            m.Title = function(e) {
                var n = e.className,
                    t = e.wrapperClassName,
                    o = e.children,
                    i = e.onContextMenu,
                    c = e.onClick,
                    a = e.id,
                    u = e.muted,
                    f = void 0 !== u && u,
                    d = e.level,
                    p = void 0 === d ? 1 : d,
                    b = (0, r.jsx)(s.HeadingLevel, {
                        forceLevel: p,
                        children: (0, r.jsx)(s.Heading, {
                            variant: "heading-md/semibold",
                            color: f ? "header-secondary" : void 0,
                            className: l()(n, h().title),
                            id: a,
                            children: o
                        })
                    });
                return null != c ? (0, r.jsx)(s.Clickable, {
                    onClick: c,
                    onContextMenu: i,
                    className: l()(t, h().titleWrapper),
                    children: b
                }) : (0, r.jsx)("div", {
                    className: l()(t, h().titleWrapper),
                    onContextMenu: i,
                    children: b
                })
            };
            m.Divider = v;
            m.Caret = function(e) {
                var n = e.direction;
                return "right" === (void 0 === n ? "right" : n) ? (0, r.jsx)(d.Z, {
                    className: h().caret
                }) : (0, r.jsx)(f.Z, {
                    className: h().caret
                })
            };
            const O = m
        },
        108717: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => f
            });
            var r = t(785893),
                o = (t(667294), t(294184)),
                i = t.n(o),
                l = t(364681),
                c = t.n(l);

            function a(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function s(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function u(e, n) {
                if (null == e) return {};
                var t, r, o = function(e, n) {
                    if (null == e) return {};
                    var t, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        t = i[r];
                        n.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        t = i[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }
            const f = function(e) {
                var n = e.open,
                    t = void 0 !== n && n,
                    o = e.className,
                    l = u(e, ["open", "className"]);
                return (0, r.jsxs)("button", s(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            a(e, n, t[n])
                        }))
                    }
                    return e
                }({
                    type: "button",
                    className: i()(c().btnHamburger, a({}, c().btnHamburgerOpen, t), o)
                }, l), {
                    children: [(0, r.jsx)("span", {}), (0, r.jsx)("span", {}), (0, r.jsx)("span", {}), (0, r.jsx)("span", {}), (0, r.jsx)("span", {}), (0,
                        r.jsx)("span", {})]
                }))
            }
        }
    }
]);