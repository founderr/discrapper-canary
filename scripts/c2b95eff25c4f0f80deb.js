"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [94095], {
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
                Z: () => m
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
                return !t || "object" !== a(t) && "function" != typeof t ? function(e) {
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
            var a = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function u(e) {
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
            var f, d, O, p, g, b = !1,
                y = !1,
                v = null,
                E = {},
                _ = {},
                h = {},
                P = {};

            function S() {
                f = void 0;
                d = void 0;
                O = void 0;
                p = void 0;
                g = void 0;
                v = null
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
                    t && s(e, t)
                }(n, e);
                var t = u(n);

                function n() {
                    o(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.getSettings = function(e) {
                    if (null != e) return h[e]
                };
                r.getProfile = function(e) {
                    return null == e ? null : E[e]
                };
                r.getPendingPersonality = function() {
                    return f
                };
                r.getPendingNick = function() {
                    return d
                };
                r.getErrors = function() {
                    return v
                };
                r.hasPendingChanges = function() {
                    return void 0 !== f || void 0 !== d || void 0 !== O || void 0 !== p || void 0 !== g
                };
                r.getPendingUpdates = function() {
                    return {
                        pendingAvatar: O,
                        pendingNick: d,
                        pendingPersonality: f,
                        pendingBanner: p,
                        pendingThemeColors: g
                    }
                };
                r.isSavingSettings = function() {
                    return b
                };
                r.isFetchingSettings = function(e) {
                    var t;
                    return null === (t = P[e]) || void 0 === t ? void 0 : t.isFetching
                };
                r.shouldFetchSettings = function(e) {
                    var t, n, r = null !== (t = P[e]) && void 0 !== t ? t : {
                            isFetching: !1
                        },
                        i = Date.now() - (null !== (n = r.lastFetchTimestampMs) && void 0 !== n ? n : 0) > 36e5;
                    return !(null == r ? void 0 : r.isFetching) && i
                };
                r.isFetchingProfile = function(e) {
                    var t;
                    return null === (t = _[e]) || void 0 === t ? void 0 : t.isFetching
                };
                r.isEditingClydeProfile = function() {
                    return y
                };
                return n
            }(r.ZP.Store);
            T.displayName = "ClydeStore";
            const m = new T(i.Z, {
                CLYDE_GUILD_SETTINGS_FETCH_START: function(e) {
                    var t = e.guildId,
                        n = P[t];
                    P[t] = {
                        isFetching: !0,
                        lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
                    }
                },
                CLYDE_GUILD_SETTINGS_FETCH_SUCCESS: function(e) {
                    var t = e.guildId,
                        n = e.settings;
                    P[t] = {
                        isFetching: !1,
                        lastFetchTimestampMs: Date.now()
                    };
                    h[t] = n
                },
                CLYDE_GUILD_SETTINGS_FETCH_FAIL: function(e) {
                    var t = e.guildId,
                        n = P[t];
                    P[t] = {
                        isFetching: !1,
                        lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
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
                    O = t
                },
                CLYDE_SET_PENDING_BANNER: function(e) {
                    var t = e.banner;
                    p = t
                },
                CLYDE_SET_PENDING_THEME_COLORS: function(e) {
                    var t = e.themeColors;
                    g = t
                },
                CLYDE_GUILD_SETTINGS_SAVE_START: function() {
                    v = null;
                    b = !0
                },
                CLYDE_GUILD_SETTINGS_SAVE_SUCCESS: function(e) {
                    var t = e.settings;
                    b = !1;
                    h[t.guild_id] = t;
                    S()
                },
                CLYDE_GUILD_SETTINGS_SAVE_FAIL: function(e) {
                    b = !1;
                    v = e.errors
                },
                CLYDE_RESET_PENDING_CHANGES: S,
                CLYDE_PROFILE_FETCH_START: function(e) {
                    var t = e.clydeProfileId,
                        n = _[t];
                    _[t] = {
                        isFetching: !0,
                        lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
                    }
                },
                CLYDE_PROFILE_FETCH_SUCCESS: function(e) {
                    var t = e.profile;
                    _[t.clyde_profile_id] = {
                        isFetching: !1,
                        lastFetchTimestampMs: Date.now()
                    };
                    E[t.clyde_profile_id] = t
                },
                CLYDE_PROFILE_FETCH_FAIL: function(e) {
                    var t = e.clydeProfileId,
                        n = _[t];
                    _[t] = {
                        isFetching: !1,
                        lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
                    }
                },
                CLYDE_PROFILE_CREATE_SUCCESS: function(e) {
                    var t = e.profile;
                    E[t.clyde_profile_id] = t
                },
                CLYDE_PROFILE_EDITING_START: function() {
                    y = !0
                },
                CLYDE_PROFILE_EDITING_END: function() {
                    y = !1
                }
            })
        },
        23925: (e, t, n) => {
            n.d(t, {
                g0: () => v,
                gJ: () => b,
                M9: () => y,
                Ib: () => O,
                lT: () => f,
                OR: () => d,
                GS: () => p
            });
            var r = n(667294),
                i = n(202351),
                o = n(567403),
                l = n(682776),
                c = n(525177),
                s = (0, n(260561).B)({
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
            var a = n(2590),
                u = n(897196);

            function f(e) {
                var t, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "",
                    i = c.Z.useExperiment({
                        guildId: r,
                        location: "1e9ccc_1"
                    }, {
                        autoTrackExposure: n
                    }).experimentState;
                return i
            }

            function d(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = f(e, t);
                return n === c.P.ClydeProfiles
            }

            function O(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = f(e, n);
                return g(r, e, t)
            }

            function p() {
                var e = (0, i.Wu)([o.Z], o.Z.getGuildIds);
                return (0, r.useMemo)((function() {
                    return e.some((function(e) {
                        return E(o.Z.getGuild(e), !1) === c.P.ClydeProfiles
                    }))
                }), [e])
            }

            function g(e, t, n) {
                if (null == t) {
                    if (null != n && n.isPrivate()) {
                        return !!n.hasFlag(u.zZ.CLYDE_AI) || !!s.getCurrentConfig({
                            location: "38acdb_1"
                        }, {
                            autoTrackExposure: !1
                        }).isClydeEnabledinGdms && o.Z.getGuildIds().some((function(e) {
                            return y(o.Z.getGuild(e))
                        }))
                    }
                    return !1
                }
                return null != e && e !== c.P.None && l.Z.can(a.Plq.USE_CLYDE_AI, n)
            }

            function b(e, t) {
                var n, r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : "",
                    o = c.Z.getCurrentConfig({
                        guildId: i,
                        location: "1e9ccc_2"
                    }, {
                        autoTrackExposure: r
                    }).experimentState;
                return g(o, e, t)
            }

            function y(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = E(e, t);
                return n !== c.P.None
            }

            function v(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return E(e, t) === c.P.ClydeProfiles
            }

            function E(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (null == e) return !1;
                var n = e.id;
                return c.Z.getCurrentConfig({
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
                default: () => C
            });
            var r = n(785893),
                i = n(667294),
                o = n(202351),
                l = n(304548),
                c = n(934870),
                s = n(567403),
                a = n(609853),
                u = n(107364),
                f = n(443812),
                d = n(873308),
                O = n(775173),
                p = n(702264),
                g = n(755550),
                b = n(131286),
                y = n(23925);
            var v, E = n(175072),
                _ = n(473708),
                h = n(371124),
                P = n.n(h);

            function S(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function T(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function m(e, t) {
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

            function I(e, t) {
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

            function j(e, t) {
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
                    if ("string" == typeof e) return S(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return S(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }! function(e) {
                e.APPLY_PERSONALITY = "apply-personality";
                e.CONFIRMATION = "confirmation"
            }(v || (v = {}));

            function C(e) {
                var t = e.clydeProfile,
                    n = I(e, ["clydeProfile"]),
                    c = n.onClose,
                    s = (0, f.Dt)(),
                    a = j(i.useState(v.APPLY_PERSONALITY), 2),
                    d = a[0],
                    O = a[1],
                    b = j(i.useState(), 2),
                    y = b[0],
                    E = b[1],
                    h = (0, o.e7)([g.Z], g.Z.isSavingSettings);
                return (0, r.jsxs)(l.ModalRoot, m(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            T(e, t, n[t])
                        }))
                    }
                    return e
                }({}, n), {
                    size: l.ModalSize.DYNAMIC,
                    className: P().modal,
                    "aria-labelledby": s,
                    children: [(0, r.jsx)("div", {
                        className: P().slidesContainer,
                        children: (0, r.jsxs)(l.Slides, {
                            activeSlide: d,
                            centered: !1,
                            children: [(0, r.jsx)(l.Slide, {
                                id: v.APPLY_PERSONALITY,
                                children: (0, r.jsx)(D, {
                                    setSelectedGuildId: E,
                                    selectedGuildId: y,
                                    clydeProfile: t
                                })
                            }), (0, r.jsx)(l.Slide, {
                                id: v.CONFIRMATION,
                                children: null != y ? (0, r.jsx)(L, {
                                    onClose: c,
                                    clydeProfile: t,
                                    guildId: y
                                }) : null
                            })]
                        })
                    }), d === v.APPLY_PERSONALITY ? (0, r.jsxs)(l.ModalFooter, {
                        justify: u.Z.Justify.BETWEEN,
                        className: P().footer,
                        children: [(0, r.jsx)(l.Button, {
                            disabled: null == y,
                            submitting: h,
                            onClick: function() {
                                null != y && (0, p.CX)(y, {
                                    clyde_profile_id: t.clyde_profile_id
                                }).then((function(e) {
                                    null != e ? O(v.CONFIRMATION) : (0, l.showToast)((0, l.createToast)(_.Z.Messages.CLYDE_PROFILE_ERROR_MESSAGE_GENERIC, l.ToastType.FAILURE))
                                }))
                            },
                            children: _.Z.Messages.CLYDE_PROFILE_APPLY
                        }), (0, r.jsx)(l.Button, {
                            look: l.ButtonLooks.BLANK,
                            color: l.ButtonColors.TRANSPARENT,
                            onClick: c,
                            children: (0, r.jsx)(l.Text, {
                                className: P().closeButton,
                                variant: "text-md/semibold",
                                children: _.Z.Messages.CLOSE
                            })
                        })]
                    }) : null]
                }))
            }

            function D(e) {
                var t, n = e.clydeProfile,
                    c = e.selectedGuildId,
                    u = e.setSelectedGuildId,
                    f = (0, b.Z)(n),
                    d = function() {
                        var e = (0, o.e7)([s.Z], (function() {
                            return s.Z.getGuilds()
                        }));
                        return i.useMemo((function() {
                            return Object.values(e).filter((function(e) {
                                return (0, y.g0)(e)
                            }))
                        }), [e])
                    }();
                return (0, r.jsxs)("div", {
                    className: P().applySlideContainer,
                    children: [(0, r.jsxs)("div", {
                        className: P().characterContainer,
                        children: [(0, r.jsx)(l.Avatar, {
                            src: f,
                            size: l.AvatarSizes.SIZE_80,
                            "aria-hidden": !0
                        }), (0, r.jsxs)("div", {
                            className: P().nameContainer,
                            children: [(0, r.jsx)(l.Text, {
                                variant: "text-lg/semibold",
                                children: n.name
                            }), (0, r.jsx)(a.Z, {
                                type: E.H.AI
                            })]
                        }), (0, r.jsx)(l.FormItem, {
                            className: P().personalityItem,
                            title: _.Z.Messages.PERSONALITY_CLYDE_SECTION,
                            children: (0, r.jsx)(l.TextArea, {
                                className: P().personalityTextArea,
                                value: null !== (t = n.personality) && void 0 !== t ? t : ""
                            })
                        })]
                    }), (0, r.jsxs)("div", {
                        className: P().serverSelectContainer,
                        children: [(0, r.jsx)(l.Text, {
                            className: P().serverSelectTitle,
                            variant: "text-lg/semibold",
                            children: _.Z.Messages.CLYDE_PROFILE_APPLY_PERSONALITY
                        }), (0, r.jsx)(l.Text, {
                            className: P().serverSelectDescription,
                            variant: "text-sm/medium",
                            children: _.Z.Messages.CLYDE_PROFILE_APPLY_PERSONALITY_SUBTITLE
                        }), (0, r.jsx)(l.FormItem, {
                            className: P().serverSelectField,
                            title: _.Z.Messages.CLYDE_PROFILE_APPLY_TO_GUILD,
                            children: (0, r.jsx)(l.SearchableSelect, {
                                placeholder: _.Z.Messages.CLYDE_PROFILE_SELECT_GUILD,
                                value: c,
                                options: d.map((function(e) {
                                    return {
                                        label: e.name,
                                        value: e.id
                                    }
                                })),
                                onChange: function(e) {
                                    return u(e)
                                }
                            })
                        })]
                    })]
                })
            }

            function L(e) {
                var t, n = e.clydeProfile,
                    i = e.guildId,
                    u = e.onClose,
                    f = (0, b.Z)(n),
                    p = (0, o.e7)([s.Z], (function() {
                        return s.Z.getGuild(i)
                    })),
                    g = null != p && null != p.icon ? O.ZP.getGuildIconURL({
                        id: i,
                        icon: p.icon,
                        size: 16
                    }) : null;
                return (0, r.jsxs)("div", {
                    className: P().confirmationSlide,
                    children: [(0, r.jsx)(l.Avatar, {
                        src: f,
                        size: l.AvatarSizes.SIZE_80,
                        "aria-hidden": !0
                    }), (0, r.jsxs)("div", {
                        className: P().nameContainer,
                        children: [(0, r.jsx)(l.Text, {
                            variant: "text-lg/semibold",
                            children: n.name
                        }), (0, r.jsx)(a.Z, {
                            type: E.H.AI
                        })]
                    }), (0, r.jsx)(l.Text, {
                        className: P().appliedToLabel,
                        variant: "text-sm/medium",
                        children: _.Z.Messages.CLYDE_PROFILE_APPLIED_TO
                    }), (0, r.jsx)(l.Button, {
                        color: l.ButtonColors.PRIMARY,
                        onClick: function() {
                            (0, c.X)(i);
                            u()
                        },
                        className: P().guildButton,
                        size: l.ButtonSizes.TINY,
                        children: (0, r.jsxs)("div", {
                            className: P().guildButtonContainer,
                            children: [null != (null == p ? void 0 : p.icon) ? (0, r.jsx)(l.Avatar, {
                                src: g,
                                size: l.AvatarSizes.SIZE_16,
                                "aria-hidden": !0
                            }) : null, (0, r.jsx)(l.Text, {
                                color: "always-white",
                                variant: "text-xs/medium",
                                children: null !== (t = null == p ? void 0 : p.name) && void 0 !== t ? t : ""
                            }), (0, r.jsx)(d.Z, {
                                width: 16,
                                height: 16,
                                direction: d.N.RIGHT
                            })]
                        })
                    }), (0, r.jsx)(l.Button, {
                        onClick: u,
                        size: l.ButtonSizes.MEDIUM,
                        children: _.Z.Messages.GOT_IT
                    })]
                })
            }
        },
        609853: (e, t, n) => {
            n.d(t, {
                Z: () => b
            });
            var r = n(785893),
                i = (n(667294), n(294184)),
                o = n.n(i),
                l = n(22212),
                c = n(985651),
                s = n(175072),
                a = n(473708),
                u = n(813968),
                f = n.n(u);

            function d(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function O(e) {
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

            function p(e, t) {
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
            var g = function(e) {
                var t = e.invertColor,
                    n = void 0 !== t && t,
                    i = e.type,
                    u = void 0 === i ? s.H.BOT : i,
                    g = e.className,
                    b = e.verified,
                    y = e.useRemSizes,
                    v = void 0 !== y && y,
                    E = null,
                    _ = a.Z.Messages.VERIFIED_BOT_TOOLTIP;
                switch (u) {
                    case s.H.SYSTEM_DM:
                    case s.H.OFFICIAL:
                        b = !0;
                        _ = a.Z.Messages.DISCORD_SYSTEM_MESSAGE_BOT_TAG_TOOLTIP;
                        E = a.Z.Messages.SYSTEM_DM_TAG_SYSTEM;
                        break;
                    case s.H.SERVER:
                        E = a.Z.Messages.BOT_TAG_SERVER;
                        break;
                    case s.H.ORIGINAL_POSTER:
                        E = a.Z.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER;
                        break;
                    case s.H.STAFF_ONLY_DM:
                        E = a.Z.Messages.STAFF_BADGE_TOOLTIP;
                        break;
                    case s.H.AI:
                        b = !0;
                        _ = a.Z.Messages.AI_GENERATED_TOOLTIP;
                        E = a.Z.Messages.AI_TAG;
                        break;
                    case s.H.REMIX:
                        b = !1;
                        E = a.Z.Messages.REMIXING_TAG;
                        break;
                    case s.H.BOT:
                    default:
                        E = a.Z.Messages.BOT_TAG_BOT
                }
                var h, P = u === s.H.ORIGINAL_POSTER,
                    S = u === s.H.REMIX,
                    T = null;
                b && (T = (0, r.jsx)(l.u, {
                    text: _,
                    align: "center",
                    position: "top",
                    children: function(e) {
                        return (0, r.jsx)(c.Z, p(O({}, e), {
                            className: f().botTagVerified
                        }))
                    }
                }));
                h = u === s.H.AI ? f().botTagAI : n ? f().botTagInvert : f().botTagRegular;
                var m = function(e) {
                    var t;
                    return (0, r.jsxs)("span", p(O({}, e), {
                        className: o()(g, h, v ? f().rem : f().px, (t = {}, d(t, f().botTagOP, P), d(t, f().botTagRemix, S), t)),
                        children: [T, (0, r.jsx)("span", {
                            className: f().botText,
                            children: E
                        })]
                    }))
                };
                switch (u) {
                    case s.H.REMIX:
                        return (0, r.jsx)(l.u, {
                            text: a.Z.Messages.REMIXING_DOWNLOAD_APP,
                            position: "top",
                            children: function(e) {
                                return m(e)
                            }
                        });
                    case s.H.ORIGINAL_POSTER:
                        return (0, r.jsx)(l.u, {
                            text: a.Z.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER_TOOLTIP,
                            position: "top",
                            children: function(e) {
                                return m(e)
                            }
                        });
                    default:
                        return m()
                }
            };
            g.Types = s.H;
            const b = g
        },
        443812: (e, t, n) => {
            n.d(t, {
                hQ: () => l,
                Dt: () => c,
                FG: () => s
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
                s = function(e) {
                    return (0, e.children)(c())
                }
        },
        873308: (e, t, n) => {
            n.d(t, {
                N: () => r,
                Z: () => g
            });
            var r, i = n(785893),
                o = (n(667294), n(294184)),
                l = n.n(o),
                c = n(633878),
                s = n(384479),
                a = n.n(s);

            function u(e, t, n) {
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

            function d(e, t) {
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

            function O(e) {
                switch (e) {
                    case r.LEFT:
                        return a().left;
                    case r.RIGHT:
                        return a().right;
                    case r.UP:
                        return null;
                    case r.DOWN:
                        return a().down;
                    case r.UP_LEFT:
                        return a().upLeft;
                    case r.DOWN_RIGHT:
                        return a().downRight;
                    default:
                        throw new Error("Invalid Direction ".concat(e))
                }
            }
            var p = function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    r = e.height,
                    o = void 0 === r ? 24 : r,
                    s = e.color,
                    a = void 0 === s ? "currentColor" : s,
                    p = e.direction,
                    g = e.foreground,
                    b = e.className,
                    y = e.title,
                    v = d(e, ["width", "height", "color", "direction", "foreground", "className", "title"]);
                return (0, i.jsxs)("svg", f(function(e) {
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
                }({}, (0, c.Z)(v)), {
                    width: n,
                    height: o,
                    className: l()(b, O(p)),
                    viewBox: "0 0 24 24",
                    children: [null != y ? (0, i.jsx)("title", {
                        children: y
                    }) : null, (0, i.jsx)("polygon", {
                        className: g,
                        fill: a,
                        fillRule: "nonzero",
                        points: "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8"
                    })]
                }))
            };
            p.Directions = r;
            const g = p
        },
        985651: (e, t, n) => {
            n.d(t, {
                Z: () => O
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

            function s(e, t) {
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

            function a(e, t) {
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

            function u(e, t, n) {
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

            function d(e, t) {
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
            const O = (0, i.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 16 : t,
                    i = e.height,
                    o = void 0 === i ? 16 : i,
                    c = e.color,
                    s = void 0 === c ? "currentColor" : c,
                    a = d(e, ["width", "height", "color"]);
                return (0, r.jsx)("svg", f(function(e) {
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
                }({}, (0, l.Z)(a)), {
                    width: n,
                    height: o,
                    viewBox: "0 0 16 15.2",
                    children: (0, r.jsx)("path", {
                        d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z",
                        fill: s
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    i = e.height,
                    u = void 0 === i ? 24 : i,
                    f = e.color,
                    d = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    O = e.colorClass,
                    p = void 0 === O ? "" : O,
                    g = a(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", s(function(e) {
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
                }({}, (0, l.Z)(g)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: u,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M18.707 7.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L10 14.586l7.293-7.293a1 1 0 0 1 1.414 0Z",
                        clipRule: "evenodd",
                        className: p
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