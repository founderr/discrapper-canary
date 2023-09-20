(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [83376], {
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
        703118: (e, n, t) => {
            "use strict";
            t.r(n);
            t.d(n, {
                ClydeEditProfileModalContent: () => F,
                default: () => B
            });
            var r = t(785893),
                o = t(667294),
                i = t(202351),
                l = t(882723),
                a = t(330481),
                c = t(167749),
                s = t(567403),
                u = t(107364),
                d = t(23925),
                f = t(318715),
                p = t(369263),
                h = t(2590),
                b = t(473708),
                g = t(932886),
                y = t.n(g);

            function v(e) {
                var n, t = e.settings,
                    o = (0, f.cj)([c.Z], (function() {
                        return {
                            pendingPersonality: c.Z.getPendingPersonality(),
                            errors: c.Z.getErrors()
                        }
                    })),
                    i = o.pendingPersonality,
                    s = o.errors,
                    u = null != s && Number(s.code) === h.evJ.CLYDE_UNSAFE_PERSONALITY ? s.message : void 0;
                return (0, r.jsxs)(p.Z, {
                    title: b.Z.Messages.PERSONALITY_CLYDE_SECTION,
                    children: [(0, r.jsxs)(l.FormText, {
                        type: l.FormText.Types.DESCRIPTION,
                        className: y().description,
                        children: [b.Z.Messages.PERSONALITY_DESCRIPTION, " ", (0, r.jsx)(l.Anchor, {
                            href: "https://forms.gle/T12GPi33Pt5ocg89A",
                            children: b.Z.Messages.PERSONALITY_FEEDBACK
                        })]
                    }), (0, r.jsx)(l.TextArea, {
                        value: null !== (n = null != i ? i : t.personality) && void 0 !== n ? n : "",
                        onChange: function(e) {
                            (0, a.j7)(e)
                        },
                        placeholder: b.Z.Messages.PERSONALITY_PLACEHOLDER,
                        maxLength: 500,
                        autosize: !0
                    }), null != u ? (0, r.jsx)(l.FormErrorBlock, {
                        className: y().errorBlock,
                        children: u
                    }) : null]
                }, "personality")
            }
            var m = t(441143),
                j = t.n(m),
                O = t(618354),
                S = t(546083),
                E = t(718421),
                C = t(380014),
                _ = t(532369),
                P = t(526957),
                I = t(21372),
                N = t(473903),
                w = t(876986),
                x = t(749288),
                T = t.n(x);

            function D(e) {
                var n = e.guildId,
                    t = e.clydeUser,
                    o = (0, i.cj)([c.Z], (function() {
                        return c.Z.getPendingUpdates()
                    })),
                    l = o.pendingNick,
                    s = o.pendingThemeColors,
                    u = (0, i.e7)([I.ZP], (function() {
                        return I.ZP.getMember(n, w.fL)
                    }));
                return (0, r.jsxs)("div", {
                    className: T().editProfileSections,
                    children: [(0, r.jsx)(C.Z, {
                        placeholder: b.Z.Messages.CLYDE_NAME,
                        errors: [],
                        currentGlobalName: null == u ? void 0 : u.nick,
                        pendingGlobalName: l,
                        onGlobalNameChange: a.Kt
                    }), (0, r.jsx)(E.Z, {
                        guildId: n,
                        onAvatarChange: a.I5,
                        showRemoveAvatarButton: !0,
                        sectionTitle: b.Z.Messages.CLYDE_SETTINGS_AVATAR_HEADER,
                        isClyde: !0
                    }), (0, r.jsx)(_.Z, {
                        guildId: n,
                        onBannerChange: a.g_,
                        showRemoveBannerButton: !0,
                        showPremiumIcon: !1
                    }), (0, r.jsx)(P.Z, {
                        user: t,
                        guildId: n,
                        showPremiumIcon: !1,
                        preventDisabled: !0,
                        pendingColors: null != s ? s : void 0,
                        onThemeColorsChange: a.z5
                    })]
                })
            }

            function L(e) {
                var n = e.guildId,
                    t = (0, i.cj)([c.Z], (function() {
                        return c.Z.getPendingUpdates()
                    })),
                    o = t.pendingNick,
                    l = t.pendingAvatar,
                    u = t.pendingBanner,
                    d = t.pendingThemeColors,
                    f = (0, i.e7)([N.default], (function() {
                        return N.default.getUser(w.fL)
                    }));
                j()(null != f, "Clyde User must exist");
                var p = (0, i.e7)([s.Z], (function() {
                    return s.Z.getGuild(n)
                }));
                return (0, r.jsx)(S.Z, {
                    className: T().profileCustomizationTab,
                    previewTitle: "Clyde",
                    profilePreview: (0, r.jsx)(O.Z, {
                        user: f,
                        guild: p,
                        canUsePremiumCustomization: !0,
                        onAvatarChange: a.I5,
                        onBannerChange: a.g_,
                        pendingNickname: null != o ? o : void 0,
                        pendingAvatar: l,
                        pendingBanner: u,
                        pendingThemeColors: null != d ? d : void 0,
                        pendingBio: void 0,
                        pendingPronouns: void 0,
                        hideFakeActivity: !0
                    }),
                    children: (0, r.jsx)(D, {
                        guildId: n,
                        clydeUser: f
                    })
                })
            }
            var k = t(808841),
                A = t.n(k);

            function Z(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function G(e, n, t, r, o, i, l) {
                try {
                    var a = e[i](l),
                        c = a.value
                } catch (e) {
                    t(e);
                    return
                }
                a.done ? n(c) : Promise.resolve(c).then(r, o)
            }

            function R(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, o, i = [],
                            l = !0,
                            a = !1;
                        try {
                            for (t = t.call(e); !(l = (r = t.next()).done); l = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                l || null == t.return || t.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return Z(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Z(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var M = function(e, n) {
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
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
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
                                        if (!(o = l.trys,
                                                o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
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
                        }([i, a])
                    }
                }
            };

            function U(e) {
                var n = {};
                void 0 !== e.pendingPersonality && (n.personality = e.pendingPersonality);
                void 0 !== e.pendingNick && (n.nick = e.pendingNick);
                void 0 !== e.pendingAvatar && (n.avatar = e.pendingAvatar);
                void 0 !== e.pendingBanner && (n.banner = e.pendingBanner);
                void 0 !== e.pendingAccentColor && (n.accent_color = e.pendingAccentColor);
                void 0 !== e.pendingThemeColors && (n.theme_colors = e.pendingThemeColors);
                return n
            }

            function F(e) {
                var n = e.onClose,
                    t = e.guildId,
                    f = (0, i.cj)([c.Z], (function() {
                        return {
                            settings: c.Z.getSettings(t),
                            isFetchingSettings: c.Z.isFetchingSettings(t),
                            isSavingSettings: c.Z.isSavingSettings(),
                            hasPendingChanges: c.Z.hasPendingChanges(),
                            errors: c.Z.getErrors()
                        }
                    })),
                    p = f.settings,
                    h = f.isFetchingSettings,
                    g = f.isSavingSettings,
                    y = f.hasPendingChanges,
                    m = f.errors,
                    j = (0, i.e7)([s.Z], (function() {
                        return s.Z.getGuild(t)
                    })),
                    O = (0, d.OR)(j),
                    S = R(o.useState(!1), 2),
                    E = S[0],
                    C = S[1];
                o.useEffect((function() {
                    (0, a.Bn)(t, !0)
                }), [t]);
                o.useEffect((function() {
                    (y || null != m) && C(!1)
                }), [y, m]);
                var _, P, I = (P = (_ = function() {
                    var e;
                    return M(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                if (null == t || !c.Z.hasPendingChanges()) return [2];
                                e = c.Z.getPendingUpdates();
                                return [4, (0, a.CX)(t, U(e))];
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
                        var o = _.apply(e, n);

                        function i(e) {
                            G(o, t, r, i, l, "next", e)
                        }

                        function l(e) {
                            G(o, t, r, i, l, "throw", e)
                        }
                        i(void 0)
                    }))
                }), function() {
                    return P.apply(this, arguments)
                });
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(l.ModalHeader, {
                        separator: !1,
                        children: [(0, r.jsx)("div", {
                            className: A().heading,
                            children: (0, r.jsx)(l.Heading, {
                                variant: "heading-xl/semibold",
                                children: b.Z.Messages.CLYDE_CUSTOMIZE
                            })
                        }), (0, r.jsx)(l.ModalCloseButton, {
                            onClick: n
                        })]
                    }), (0, r.jsx)(l.ScrollerAuto, {
                        className: A().content,
                        children: h || null == p ? (0, r.jsx)(l.Spinner, {
                            type: l.Spinner.Type.SPINNING_CIRCLE
                        }) : (0, r.jsxs)(r.Fragment, {
                            children: [O && (0, r.jsx)(L, {
                                guildId: t
                            }), null != p && (0, r.jsx)("div", {
                                className: A().section,
                                children: (0, r.jsx)(v, {
                                    settings: p
                                })
                            })]
                        })
                    }), (0, r.jsxs)(l.ModalFooter, {
                        direction: u.Z.Direction.HORIZONTAL,
                        className: A().footer,
                        children: [(0, r.jsx)("div", {
                            className: A().resetButtonContainer,
                            children: (0, r.jsx)(l.Button, {
                                onClick: a.c6,
                                color: l.ButtonColors.PRIMARY,
                                size: l.ButtonSizes.SMALL,
                                disabled: !y,
                                children: b.Z.Messages.RESET
                            })
                        }), y && null == m && (0, r.jsx)("div", {
                            className: A().pendingChangesMessage,
                            children: b.Z.Messages.SETTINGS_NOTICE_MESSAGE
                        }), E && (0, r.jsx)("div", {
                            className: A().successfullSaveMessage,
                            children: b.Z.Messages.CLYDE_SETTINGS_SAVE_SUCCESS
                        }), null != m && (0, r.jsx)("div", {
                            className: A().errorMessage,
                            children: b.Z.Messages.CLYDE_SETTINGS_SAVE_FAILED
                        }), (0, r.jsx)("div", {
                            children: (0, r.jsx)(l.Button, {
                                onClick: I,
                                color: l.ButtonColors.GREEN,
                                size: l.ButtonSizes.SMALL,
                                submitting: g,
                                disabled: !y,
                                children: b.Z.Messages.SAVE_CHANGES
                            })
                        })]
                    })]
                })
            }

            function B(e) {
                var n = e.transitionState,
                    t = e.onClose,
                    o = e.guildId;
                return (0, r.jsx)(l.ModalRoot, {
                    transitionState: n,
                    size: l.ModalSize.LARGE,
                    children: (0, r.jsx)(F, {
                        onClose: t,
                        guildId: o
                    })
                })
            }
        },
        330481: (e, n, t) => {
            "use strict";
            t.d(n, {
                CX: () => h,
                j7: () => v,
                Kt: () => m,
                I5: () => j,
                g_: () => O,
                z5: () => S,
                c6: () => E,
                Bn: () => C
            });
            var r = t(281110),
                o = t(744564),
                i = t(285991),
                l = t(167749),
                a = t(2590),
                c = t(876986);

            function s(e, n, t, r, o, i, l) {
                try {
                    var a = e[i](l),
                        c = a.value
                } catch (e) {
                    t(e);
                    return
                }
                a.done ? n(c) : Promise.resolve(c).then(r, o)
            }

            function u(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(n, t);

                        function l(e) {
                            s(i, r, o, l, a, "next", e)
                        }

                        function a(e) {
                            s(i, r, o, l, a, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function d(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function f(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        d(e, n, t[n])
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
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
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
                                        if (!(o = l.trys,
                                                o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
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
                        }([i, a])
                    }
                }
            };

            function h(e, n) {
                return b.apply(this, arguments)
            }

            function b() {
                return (b = u((function(e, n) {
                    return p(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, g(e, n)];
                            case 1:
                                t.sent();
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function g(e, n) {
                return y.apply(this, arguments)
            }

            function y() {
                return (y = u((function(e, n) {
                    var t, i;
                    return p(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                o.Z.dispatch({
                                    type: "GUILD_SETTINGS_CLYDE_SAVE_START"
                                });
                                l.label = 1;
                            case 1:
                                l.trys.push([1, 3, , 4]);
                                return [4, r.ZP.patch({
                                    url: a.ANM.GUILD_CLYDE_SETTINGS(e),
                                    oldFormErrors: !0,
                                    body: n
                                })];
                            case 2:
                                t = l.sent();
                                o.Z.dispatch({
                                    type: "GUILD_SETTINGS_CLYDE_SAVE_SUCCESS",
                                    settings: t.body.settings
                                });
                                null != t.body.guild_member_profile && o.Z.dispatch(f({
                                    type: "USER_PROFILE_UPDATE_SUCCESS",
                                    userId: c.fL,
                                    profileEffectID: void 0
                                }, t.body.guild_member_profile));
                                null != t.body.guild_member && o.Z.dispatch({
                                    type: "GUILD_MEMBER_PROFILE_UPDATE",
                                    guildMember: t.body.guild_member,
                                    guildId: e
                                });
                                null != t.body.errors && o.Z.dispatch({
                                    type: "GUILD_SETTINGS_CLYDE_SAVE_FAIL",
                                    errors: t.body.errors
                                });
                                return [3, 4];
                            case 3:
                                i = l.sent();
                                o.Z.dispatch({
                                    type: "GUILD_SETTINGS_CLYDE_SAVE_FAIL",
                                    errors: i.body
                                });
                                return [3, 4];
                            case 4:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function v(e) {
                o.Z.dispatch({
                    type: "GUILD_SETTINGS_CLYDE_SET_PENDING_PERSONALITY",
                    personality: e
                })
            }

            function m(e) {
                o.Z.dispatch({
                    type: "GUILD_SETTINGS_CLYDE_SET_PENDING_NICK",
                    nick: null != e ? e : ""
                })
            }

            function j(e) {
                o.Z.dispatch({
                    type: "GUILD_SETTINGS_CLYDE_SET_PENDING_AVATAR",
                    avatar: e
                })
            }

            function O(e) {
                o.Z.dispatch({
                    type: "GUILD_SETTINGS_CLYDE_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function S(e) {
                o.Z.dispatch({
                    type: "GUILD_SETTINGS_CLYDE_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function E() {
                o.Z.dispatch({
                    type: "GUILD_SETTINGS_CLYDE_RESET_PENDING_CHANGES"
                })
            }

            function C(e) {
                return _.apply(this, arguments)
            }

            function _() {
                _ = u((function(e) {
                    var n, t, s = arguments;
                    return p(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                if (!(s.length > 1 && void 0 !== s[1] && s[1]) && !l.Z.shouldFetchSettings(e)) return [2];
                                (0, i.In)(c.fL, {
                                    guildId: e
                                });
                                o.Z.dispatch({
                                    type: "GUILD_SETTINGS_CLYDE_FETCH_START",
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
                                    type: "GUILD_SETTINGS_CLYDE_FETCH_SUCCESS",
                                    guildId: t.guild_id,
                                    settings: t
                                });
                                return [3, 4];
                            case 3:
                                u.sent();
                                o.Z.dispatch({
                                    type: "GUILD_SETTINGS_CLYDE_FETCH_FAIL",
                                    guildId: e
                                });
                                return [3, 4];
                            case 4:
                                return [2]
                        }
                    }))
                }));
                return _.apply(this, arguments)
            }
        },
        167749: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => E
            });
            var r = t(202351),
                o = t(744564);

            function i(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function l(e) {
                l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return l(e)
            }

            function a(e, n) {
                return !n || "object" !== s(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function c(e, n) {
                c = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return c(e, n)
            }
            var s = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function u(e) {
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
                    var t, r = l(e);
                    if (n) {
                        var o = l(this).constructor;
                        t = Reflect.construct(r, arguments, o)
                    } else t = r.apply(this, arguments);
                    return a(this, t)
                }
            }
            var d, f, p, h, b, g = !1,
                y = null,
                v = {},
                m = {},
                j = 36e5;

            function O() {
                d = void 0;
                f = void 0;
                p = void 0;
                h = void 0;
                b = void 0;
                y = null
            }
            var S = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && c(e, n)
                }(t, e);
                var n = u(t);

                function t() {
                    i(this, t);
                    return n.apply(this, arguments)
                }
                var r = t.prototype;
                r.getSettings = function(e) {
                    if (null != e) return v[e]
                };
                r.getPendingPersonality = function() {
                    return d
                };
                r.getPendingNick = function() {
                    return f
                };
                r.getErrors = function() {
                    return y
                };
                r.hasPendingChanges = function() {
                    return void 0 !== d || void 0 !== f || void 0 !== p || void 0 !== h || void 0 !== b
                };
                r.getPendingUpdates = function() {
                    return {
                        pendingAvatar: p,
                        pendingNick: f,
                        pendingPersonality: d,
                        pendingBanner: h,
                        pendingThemeColors: b
                    }
                };
                r.isSavingSettings = function() {
                    return g
                };
                r.isFetchingSettings = function(e) {
                    var n;
                    return null === (n = m[e]) || void 0 === n ? void 0 : n.isFetching
                };
                r.shouldFetchSettings = function(e) {
                    var n, t, r = null !== (n = m[e]) && void 0 !== n ? n : {
                            isFetching: !1
                        },
                        o = Date.now() - (null !== (t = r.lastFetchTimestampMs) && void 0 !== t ? t : 0) > j;
                    return !(null == r ? void 0 : r.isFetching) && o
                };
                r.__getLocalVars = function() {
                    return {
                        isSavingSettings: g,
                        errors: y,
                        pendingPersonality: d,
                        pendingNick: f,
                        pendingAvatar: p,
                        pendingBanner: h,
                        pendingThemeColors: b,
                        settingsByGuild: v,
                        settingsFetchStatus: m,
                        CACHE_TIME_MS: j
                    }
                };
                return t
            }(r.ZP.Store);
            S.displayName = "GuildSettingsClydeStore";
            const E = new S(o.Z, {
                GUILD_SETTINGS_CLYDE_FETCH_START: function(e) {
                    var n = e.guildId,
                        t = m[n];
                    m[n] = {
                        isFetching: !0,
                        lastFetchTimestampMs: null == t ? void 0 : t.lastFetchTimestampMs
                    }
                },
                GUILD_SETTINGS_CLYDE_FETCH_SUCCESS: function(e) {
                    var n = e.guildId,
                        t = e.settings;
                    m[n] = {
                        isFetching: !1,
                        lastFetchTimestampMs: Date.now()
                    };
                    v[n] = t
                },
                GUILD_SETTINGS_CLYDE_FETCH_FAIL: function(e) {
                    var n = e.guildId,
                        t = m[n];
                    m[n] = {
                        isFetching: !1,
                        lastFetchTimestampMs: null == t ? void 0 : t.lastFetchTimestampMs
                    }
                },
                GUILD_SETTINGS_CLYDE_SET_PENDING_PERSONALITY: function(e) {
                    var n = e.personality;
                    d = n
                },
                GUILD_SETTINGS_CLYDE_SET_PENDING_NICK: function(e) {
                    var n = e.nick;
                    f = n
                },
                GUILD_SETTINGS_CLYDE_SET_PENDING_AVATAR: function(e) {
                    var n = e.avatar;
                    p = n
                },
                GUILD_SETTINGS_CLYDE_SET_PENDING_BANNER: function(e) {
                    var n = e.banner;
                    h = n
                },
                GUILD_SETTINGS_CLYDE_SET_PENDING_THEME_COLORS: function(e) {
                    var n = e.themeColors;
                    b = n
                },
                GUILD_SETTINGS_CLYDE_SAVE_START: function() {
                    y = null;
                    g = !0
                },
                GUILD_SETTINGS_CLYDE_SAVE_SUCCESS: function(e) {
                    var n = e.settings;
                    g = !1;
                    v[n.guild_id] = n;
                    O()
                },
                GUILD_SETTINGS_CLYDE_SAVE_FAIL: function(e) {
                    g = !1;
                    y = e.errors
                },
                GUILD_SETTINGS_CLYDE_RESET_PENDING_CHANGES: O
            })
        },
        888291: (e, n, t) => {
            "use strict";
            t.d(n, {
                S: () => _,
                Z: () => I
            });
            var r = t(785893),
                o = t(667294),
                i = t(294184),
                l = t.n(i),
                a = t(441143),
                c = t.n(a),
                s = t(882723),
                u = t(421281),
                d = t(694755),
                f = t(2590),
                p = t(473708),
                h = t(326726),
                b = t.n(h);

            function g(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function y(e, n, t) {
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
                        y(e, n, t[n])
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

            function O(e, n) {
                return !n || "object" !== E(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function S(e, n) {
                S = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return S(e, n)
            }
            var E = function(e) {
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
                    return O(this, t)
                }
            }

            function _(e) {
                var n = e.className,
                    t = e.icon,
                    o = void 0 === t ? null : t;
                return (0, r.jsx)("div", {
                    className: l()(b().imageUploaderIcon, n),
                    children: o
                })
            }
            var P = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && S(e, n)
                }(t, e);
                var n = C(t);

                function t() {
                    g(this, t);
                    var e;
                    (e = n.apply(this, arguments)).inputRef = o.createRef();
                    e.handleRemove = function() {
                        e.props.onChange(null)
                    };
                    return e
                }
                var i = t.prototype;
                i.handleExternalFileChange = function(e) {
                    c()(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted");
                    this.inputRef.current.handleFileChange(e)
                };
                i.render = function() {
                    var e, n, t, o, i, a = this.props,
                        c = a.image,
                        h = a.hint,
                        g = a.name,
                        y = a.makeURL,
                        v = a.disabled,
                        O = a.onChange,
                        S = a.showIcon,
                        E = a.showIconDisabled,
                        C = a.className,
                        P = a.imageClassName,
                        I = a.iconClassName,
                        N = a.iconWrapperClassName,
                        w = a.icon,
                        x = a.hideSize,
                        T = a.imageStyle,
                        D = a.showRemoveButton,
                        L = a.maxFileSizeBytes,
                        k = a.onFileSizeError,
                        A = a.onOpenImageSelectModal,
                        Z = a["aria-label"];
                    null != (e = null != c && /^data:/.test(c) ? c : y(c)) ? n = 'url("'.concat(e, '")') : null != g && (t = (0, r.jsx)("div", {
                        className: b().imageUploaderAcronym,
                        children: (0, u.Zg)(g)
                    }));
                    if (v) return (0, r.jsx)("div", {
                        className: l()(b().imageUploader, b().disabled, C),
                        children: (0, r.jsxs)("div", {
                            className: l()(b().imageUploaderInner, P),
                            style: j(m({}, T), {
                                backgroundImage: n
                            }),
                            children: [t, E && (0, r.jsx)("div", {
                                className: l()(b().imageUploaderIcon, b().imageUploaderIconDisabled, I),
                                children: w
                            })]
                        })
                    });
                    null != c ? o = (0, r.jsx)(s.Anchor, {
                        className: b().removeButton,
                        onClick: this.handleRemove,
                        children: p.Z.Messages.REMOVE
                    }) : x || (o = (0, r.jsx)("small", {
                        className: b().sizeInfo,
                        children: p.Z.Messages.MINIMUM_SIZE.format({
                            size: f.IXf
                        })
                    }));
                    var G = null !== (i = null != Z ? Z : h) && void 0 !== i ? i : p.Z.Messages.CHANGE_AVATAR;
                    return (0, r.jsxs)("div", {
                        className: l()(b().imageUploader, C),
                        children: [(0, r.jsx)(s.FocusRing, {
                            within: !0,
                            children: (0, r.jsxs)("div", {
                                className: S ? l()(b().imageUploaderIconWrapper, N) : void 0,
                                children: [(0, r.jsxs)("div", {
                                    className: l()(b().imageUploaderInner, P),
                                    style: j(m({}, T), {
                                        backgroundImage: n
                                    }),
                                    children: [(0, r.jsx)("span", {
                                        "aria-hidden": !0,
                                        children: t
                                    }), null != A ? (0, r.jsx)(s.Clickable, {
                                        className: b().imageUploaderFileInput,
                                        "aria-label": G,
                                        onClick: A
                                    }) : (0, r.jsx)(d.ZP, {
                                        ref: this.inputRef,
                                        onChange: O,
                                        className: b().imageUploaderFileInput,
                                        "aria-label": G,
                                        tabIndex: 0,
                                        maxFileSizeBytes: L,
                                        onFileSizeError: k
                                    })]
                                }), null != h && (0, r.jsx)("div", {
                                    className: b().imageUploaderHint,
                                    "aria-hidden": "true",
                                    children: h
                                }), S && (0, r.jsx)(_, {
                                    className: I,
                                    icon: w
                                })]
                            })
                        }), D ? o : null]
                    })
                };
                return t
            }(o.PureComponent);
            P.defaultProps = {
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
            const I = P
        },
        102007: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => p
            });
            var r = t(785893),
                o = (t(667294), t(294184)),
                i = t.n(o),
                l = t(882723),
                a = t(95891),
                c = t(473708),
                s = t(200416),
                u = t.n(s);

            function d(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function f(e, n) {
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
                    t = void 0 === n ? c.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP : n,
                    o = e.className;
                return (0, r.jsx)(l.Tooltip, {
                    text: t,
                    children: function(e) {
                        return (0, r.jsx)(l.Clickable, f(function(e) {
                            for (var n = 1; n < arguments.length; n++) {
                                var t = null != arguments[n] ? arguments[n] : {},
                                    r = Object.keys(t);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                                }))));
                                r.forEach((function(n) {
                                    d(e, n, t[n])
                                }))
                            }
                            return e
                        }({}, e), {
                            children: (0, r.jsx)(a.Z, {
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
                a = t(294184),
                c = t.n(a),
                s = t(483913),
                u = t.n(s);

            function d(e, n, t) {
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
            var f = (d(o = {}, r.PREMIUM, {
                border: u().premiumFeatureBorder,
                background: u().premiumBackground
            }), d(o, r.LIMITED, {
                border: u().limitedFeatureBorder,
                background: u().limitedBackground
            }), o);
            const p = l.forwardRef((function(e, n) {
                var t = e.children,
                    o = e.type,
                    l = void 0 === o ? r.PREMIUM : o,
                    a = e.isShown,
                    s = e.hasBackground,
                    d = void 0 !== s && s,
                    p = e.className,
                    h = e.backgroundClassName;
                if (!a) return (0, i.jsx)(i.Fragment, {
                    children: t
                });
                var b = f[l],
                    g = b.border,
                    y = b.background;
                return (0, i.jsx)("div", {
                    ref: n,
                    className: c()(g, p),
                    children: (0, i.jsx)("div", {
                        className: c()(d ? y : u().background, h),
                        children: t
                    })
                })
            }))
        },
        577939: (e, n, t) => {
            "use strict";
            t.d(n, {
                T6: () => J,
                Z$: () => X,
                k3: () => W,
                ZP: () => $
            });
            var r = t(785893),
                o = t(667294),
                i = t(294184),
                l = t.n(i),
                a = t(798159),
                c = t(457217),
                s = t(547308),
                u = t(882723);

            function d(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function f(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, o, i = [],
                            l = !0,
                            a = !1;
                        try {
                            for (t = t.call(e); !(l = (r = t.next()).done); l = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                l || null == t.return || t.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return d(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return d(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            const p = function() {
                var e = f((0, o.useState)(null), 2),
                    n = e[0],
                    t = e[1];
                (0, o.useEffect)((function() {
                    null != (null === window || void 0 === window ? void 0 : window.EyeDropper) && t(new window.EyeDropper)
                }), []);
                return n
            };
            var h = t(795470),
                b = t(681706),
                g = t(1150),
                y = t(392398),
                v = t.n(y);

            function m(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function j(e) {
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
            var S = (0, b.iS)((function(e) {
                return (0, r.jsxs)("div", {
                    className: v().wrapper,
                    children: [(0, r.jsx)("div", {
                        className: v().saturation,
                        children: (0, r.jsx)(g.OQ, j({}, e))
                    }), (0, r.jsx)("div", {
                        className: v().hue,
                        children: (0, r.jsx)(g.PS, O(j({}, e), {
                            direction: "horizontal"
                        }))
                    })]
                })
            }));
            const E = o.memo(S);
            var C = t(621329),
                _ = t(640300),
                P = t(373438),
                I = t(2590),
                N = t(473708),
                w = t(555617),
                x = t.n(w);

            function T(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function D(e, n, t, r, o, i, l) {
                try {
                    var a = e[i](l),
                        c = a.value
                } catch (e) {
                    t(e);
                    return
                }
                a.done ? n(c) : Promise.resolve(c).then(r, o)
            }

            function L(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function k(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function A(e) {
                A = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return A(e)
            }

            function Z(e, n) {
                if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(n && n.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                });
                n && F(e, n)
            }

            function G(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        k(e, n, t[n])
                    }))
                }
                return e
            }

            function R(e, n) {
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

            function M(e, n) {
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

            function U(e, n) {
                return !n || "object" !== Y(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function F(e, n) {
                F = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return F(e, n)
            }

            function B(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, o, i = [],
                            l = !0,
                            a = !1;
                        try {
                            for (t = t.call(e); !(l = (r = t.next()).done); l = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                l || null == t.return || t.return()
                            } finally {
                                if (a) throw o
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
                    var t, r = A(e);
                    if (n) {
                        var o = A(this).constructor;
                        t = Reflect.construct(r, arguments, o)
                    } else t = r.apply(this, arguments);
                    return U(this, t)
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
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function a(i) {
                        return function(a) {
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
                            }([i, a])
                        }
                    }
                },
                V = function() {
                    return Promise.resolve()
                };

            function K(e) {
                var n, t = e.color,
                    o = e.isDefault,
                    i = void 0 !== o && o,
                    a = e.isCustom,
                    d = void 0 !== a && a,
                    f = e.isSelected,
                    p = void 0 !== f && f,
                    b = e.disabled,
                    g = void 0 !== b && b,
                    y = e.style,
                    v = void 0 === y ? {} : y,
                    m = e.onClick,
                    j = e["aria-label"],
                    O = (0, c.JA)("color-".concat(t)),
                    S = null != t ? (0, s.Rf)(t) : v.backgroundColor,
                    E = !1;
                d && !p ? E = !0 : (d || p) && (E = (0, s.Bd)(t) > .1);
                return (0, r.jsx)(u.FocusRing, {
                    offset: -2,
                    children: (0,
                        r.jsxs)("button", R(G({
                        type: "button",
                        className: l()(x().colorPickerSwatch, (n = {}, k(n, x().disabled, g), k(n, x().default, i), k(n, x().custom, d), k(n, x().noColor, null == t), n)),
                        disabled: g,
                        onClick: function() {
                            return null == m ? void 0 : m(t)
                        },
                        style: R(G({}, v), {
                            backgroundColor: S
                        }),
                        "aria-label": null != j ? j : S
                    }, O), {
                        children: [d ? (0, r.jsx)(_.Z, {
                            className: x().colorPickerDropper,
                            foreground: x().colorPickerDropperFg,
                            width: 14,
                            height: 14,
                            color: (0, h.Lq)(E ? I.Ilk.WHITE_500 : I.Ilk.BLACK_500)
                        }) : null, function() {
                            var e = 16,
                                n = 16;
                            if (d || i) {
                                e = 32;
                                n = 24
                            }
                            if (p) return (0, r.jsx)(C.Z, {
                                width: e,
                                height: n,
                                color: (0, h.Lq)(E ? I.Ilk.WHITE_500 : I.Ilk.BLACK_500)
                            })
                        }()]
                    }))
                })
            }
            var W = function(e) {
                    Z(t, e);
                    var n = H(t);

                    function t() {
                        L(this, t);
                        return n.apply(this, arguments)
                    }
                    t.prototype.render = function() {
                        var e = this.props,
                            n = e.color,
                            t = e.onChange,
                            o = e.value,
                            i = e.disabled;
                        return (0, r.jsx)(K, {
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
                    Z(t, e);
                    var n = H(t);

                    function t() {
                        L(this, t);
                        return n.apply(this, arguments)
                    }
                    t.prototype.render = function() {
                        var e = this.props,
                            n = e.customColor,
                            t = e.value,
                            o = e.disabled,
                            i = e["aria-label"];
                        return (0, r.jsx)(K, {
                            isCustom: !0,
                            color: n,
                            isSelected: t === n,
                            disabled: o,
                            "aria-label": i
                        })
                    };
                    return t
                }(o.PureComponent),
                q = function(e) {
                    var n = e.value,
                        t = e.onChange,
                        i = e.onClose,
                        l = e.suggestedColors,
                        a = e.middle,
                        c = e.footer,
                        d = e.showEyeDropper,
                        f = p(),
                        h = B(o.useState((function() {
                            var e = null != n ? n : 0,
                                t = (0, s.Rf)(e);
                            return {
                                current: e,
                                pending: t,
                                input: t
                            }
                        })), 2),
                        b = h[0],
                        g = h[1];
                    o.useEffect((function() {
                        if (null != n && n !== b.current) {
                            var e = (0, s.Rf)(n);
                            g({
                                current: n,
                                pending: e,
                                input: e
                            })
                        }
                    }), [n, b]);
                    o.useEffect((function() {
                        return i
                    }), [i]);
                    var y, v, m = function(e) {
                            var n = "#" === e[0] ? e : "#".concat(e);
                            if ((0, s.FX)(n)) {
                                var r = (0, s._i)(n);
                                g({
                                    current: r,
                                    pending: n,
                                    input: n
                                });
                                t(r)
                            } else g((function(e) {
                                return R(G({}, e), {
                                    input: n
                                })
                            }))
                        },
                        j = (v = (y = function() {
                            var e;
                            return z(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (null == f) return [2];
                                        n.label = 1;
                                    case 1:
                                        n.trys.push([1, 3, , 4]);
                                        return [4, f.open()];
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
                                var o = y.apply(e, n);

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
                        "aria-label": N.Z.Messages.PICK_A_COLOR,
                        className: x().customColorPicker,
                        children: [(0, r.jsx)(E, {
                            onChange: function(e) {
                                return function(e) {
                                    g((function(n) {
                                        return R(G({}, n), {
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
                            color: b.pending
                        }), a, (0, r.jsxs)("div", {
                            className: x().customColorPickerInputContainer,
                            children: [d && null != f && (0, r.jsx)(P.JO, {
                                onClick: j,
                                tooltip: N.Z.Messages.PICK_A_COLOR_FROM_THE_PAGE,
                                tooltipPosition: "top",
                                className: x().customColorPickerEyeDropper,
                                icon: _.Z
                            }), (0, r.jsx)(u.TextInput, {
                                className: x().customColorPickerInput,
                                value: b.input,
                                onChange: m,
                                maxLength: 7
                            })]
                        }), null != l && l.length > 0 && (0, r.jsx)("div", {
                            className: x().suggestedColors,
                            children: l.map((function(e, n) {
                                return (0, r.jsx)(u.Clickable, {
                                    "aria-label": "",
                                    style: {
                                        backgroundColor: e
                                    },
                                    className: x().suggestedColor,
                                    onClick: function() {
                                        return m(e)
                                    }
                                }, "".concat(e, "-").concat(n))
                            }))
                        }), c]
                    })
                },
                X = o.memo(q);

            function $(e) {
                var n = e.className,
                    t = e.defaultColor,
                    o = e.customColor,
                    i = e.colors,
                    s = e.value,
                    u = e.disabled,
                    d = e.onChange,
                    f = e.renderDefaultButton,
                    p = e.renderCustomButton,
                    h = e.colorContainerClassName,
                    b = function(e) {
                        return (0, r.jsx)("div", {
                            className: x().colorPickerRow,
                            children: e.map((function(e) {
                                return (0, r.jsx)(K, {
                                    color: e,
                                    isSelected: e === s,
                                    onClick: d,
                                    disabled: u
                                }, e)
                            }))
                        })
                    },
                    g = i.slice(0, i.length / 2),
                    y = i.slice(i.length / 2, i.length),
                    v = (0, a.ZP)({
                        id: "color-picker",
                        isEnabled: !0,
                        scrollToStart: V,
                        scrollToEnd: V
                    });
                return (0, r.jsx)(c.bG, {
                    navigator: v,
                    children: (0, r.jsx)(c.SJ, {
                        children: function(e) {
                            var i = e.ref,
                                a = M(e, ["ref"]);
                            return (0, r.jsxs)("div", R(G({
                                className: l()(x().container, n),
                                ref: i
                            }, a), {
                                children: [(0, r.jsx)("div", {
                                    className: l()(x().defaultContainer, h),
                                    children: f({
                                        value: s,
                                        color: t,
                                        onChange: d,
                                        disabled: u
                                    })
                                }), (0,
                                    r.jsx)("div", {
                                    className: l()(x().customContainer, h),
                                    children: p({
                                        value: s,
                                        customColor: o,
                                        disabled: u
                                    })
                                }), (0, r.jsxs)("div", {
                                    className: x().presets,
                                    children: [b(g), b(y)]
                                })]
                            }))
                        }
                    })
                })
            }
        },
        640300: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => o
            });
            var r = t(785893);
            t(667294);

            function o(e) {
                var n = e.width,
                    t = void 0 === n ? 16 : n,
                    o = e.height,
                    i = void 0 === o ? 16 : o,
                    l = e.color,
                    a = void 0 === l ? "currentColor" : l,
                    c = e.className,
                    s = e.foreground;
                return (0, r.jsx)("svg", {
                    className: c,
                    width: t,
                    height: i,
                    viewBox: "0 0 16 16",
                    children: (0, r.jsxs)("g", {
                        fill: "none",
                        children: [(0, r.jsx)("path", {
                            d: "M-4-4h24v24H-4z"
                        }), (0, r.jsx)("path", {
                            className: s,
                            fill: a,
                            d: "M14.994 1.006C13.858-.257 11.904-.3 10.72.89L8.637 2.975l-.696-.697-1.387 1.388 5.557 5.557 1.387-1.388-.697-.697 1.964-1.964c1.13-1.13 1.3-2.985.23-4.168zm-13.25 10.25c-.225.224-.408.48-.55.764L.02 14.37l1.39 1.39 2.35-1.174c.283-.14.54-.33.765-.55l4.808-4.808-2.776-2.776-4.813 4.803z"
                        })]
                    })
                })
            }
        },
        912250: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => c
            });
            var r = t(785893),
                o = (t(667294), t(633878));

            function i(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function l(e, n) {
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

            function a(e, n) {
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

            function c(e) {
                var n = e.color,
                    t = void 0 === n ? "currentColor" : n,
                    c = e.height,
                    s = void 0 === c ? 24 : c,
                    u = e.width,
                    d = void 0 === u ? 24 : u,
                    f = a(e, ["color", "height", "width"]);
                return (0, r.jsx)("svg", l(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            i(e, n, t[n])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(f)), {
                    width: d,
                    height: s,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z",
                        fill: t
                    })
                }))
            }
        },
        373438: (e, n, t) => {
            "use strict";
            t.d(n, {
                JO: () => y,
                iz: () => v,
                ZP: () => j
            });
            var r = t(785893),
                o = t(667294),
                i = t(294184),
                l = t.n(i),
                a = t(108717),
                c = t(289283),
                s = t(882723),
                u = t(570814),
                d = t(249697),
                f = t(136317),
                p = t(211482),
                h = t(25327),
                b = t.n(h);

            function g(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }
            var y = function(e) {
                    var n = e.className,
                        t = e.iconClassName,
                        o = e.children,
                        i = e.selected,
                        a = void 0 !== i && i,
                        c = e.disabled,
                        u = void 0 !== c && c,
                        d = e.showBadge,
                        f = void 0 !== d && d,
                        h = e.color,
                        y = e.foreground,
                        v = e.background,
                        m = e.icon,
                        j = e.onClick,
                        O = e.onContextMenu,
                        S = e.tooltip,
                        E = void 0 === S ? null : S,
                        C = e.tooltipColor,
                        _ = e.tooltipPosition,
                        P = void 0 === _ ? "bottom" : _,
                        I = e.hideOnClick,
                        N = void 0 === I || I,
                        w = e.role,
                        x = e["aria-label"],
                        T = e["aria-hidden"],
                        D = e["aria-checked"],
                        L = e["aria-expanded"],
                        k = e["aria-haspopup"],
                        A = (0, r.jsx)(m, {
                            x: 0,
                            y: 0,
                            width: 24,
                            height: 24,
                            className: l()(t, b().icon),
                            foreground: null != y ? y : void 0,
                            background: null != v ? v : void 0,
                            color: h
                        }),
                        Z = x;
                    null == Z && "string" == typeof E && (Z = E);
                    return (0, r.jsx)(s.Tooltip, {
                        text: E,
                        color: C,
                        position: P,
                        hideOnClick: N,
                        children: function(e) {
                            var i, c = e.onMouseEnter,
                                d = e.onMouseLeave,
                                S = e.onFocus,
                                E = e.onBlur;
                            return null == j ? (0, r.jsx)("div", {
                                className: l()(n, [b().iconWrapper]),
                                children: (0, r.jsx)(m, {
                                    x: 0,
                                    y: 0,
                                    width: 24,
                                    height: 24,
                                    className: l()(t, b().icon),
                                    foreground: null != y ? y : void 0,
                                    background: null != v ? v : void 0,
                                    color: h,
                                    "aria-hidden": T,
                                    onMouseEnter: c,
                                    onMouseLeave: d,
                                    onFocus: S,
                                    onBlur: E
                                })
                            }) : (0, r.jsxs)(s.Clickable, {
                                tag: "div",
                                onClick: u ? void 0 : j,
                                onContextMenu: u ? void 0 : O,
                                onMouseEnter: c,
                                onMouseLeave: d,
                                onFocus: S,
                                onBlur: E,
                                className: l()(n, (i = {}, g(i, b().iconWrapper, !0), g(i, b().clickable, !u && null != j), g(i, b().selected, a), i)),
                                role: w,
                                "aria-label": Z,
                                "aria-hidden": T,
                                "aria-checked": D,
                                "aria-haspopup": k,
                                "aria-expanded": L,
                                tabIndex: u || null == j ? -1 : 0,
                                children: [f ? (0, r.jsx)(p.ZP, {
                                    mask: p.ZP.Masks.HEADER_BAR_BADGE,
                                    children: A
                                }) : A, f ? (0, r.jsx)("span", {
                                    className: b().iconBadge
                                }) : null, o]
                            })
                        }
                    })
                },
                v = function(e) {
                    var n = e.className;
                    return (0, r.jsx)("div", {
                        className: l()(b().divider, n)
                    })
                };
            var m = function(e) {
                var n, t = e.className,
                    i = e.innerClassName,
                    d = e.children,
                    f = e.childrenBottom,
                    p = e.toolbar,
                    h = e.onDoubleClick,
                    y = e["aria-label"],
                    v = e["aria-labelledby"],
                    m = e.role,
                    j = e.scrollable,
                    O = e.transparent,
                    S = void 0 !== O && O,
                    E = o.useRef(null),
                    C = o.useContext(u.Z);
                return (0, r.jsx)("section", {
                    className: l()(t, b().container, (n = {}, g(n, b().themed, !S), g(n, b().transparent, S),
                        g(n, b().themedMobile, c.tq), n)),
                    "aria-label": y,
                    "aria-labelledby": v,
                    role: m,
                    ref: E,
                    children: (0, r.jsxs)(s.FocusRingScope, {
                        containerRef: E,
                        children: [(0, r.jsxs)("div", {
                            className: b().upperContainer,
                            children: [(0, r.jsxs)("div", {
                                className: l()(b().children, i, g({}, b().scrollable, j)),
                                onDoubleClick: h,
                                children: [c.tq && null != C ? (0, r.jsx)(a.Z, {
                                    onClick: C,
                                    className: b().hamburger
                                }) : null, d]
                            }), null != p ? (0, r.jsx)("div", {
                                className: b().toolbar,
                                children: p
                            }) : null]
                        }), f]
                    })
                })
            };
            m.Icon = y;
            m.Title = function(e) {
                var n = e.className,
                    t = e.wrapperClassName,
                    o = e.children,
                    i = e.onContextMenu,
                    a = e.onClick,
                    c = e.id,
                    u = e.muted,
                    d = void 0 !== u && u,
                    f = e.level,
                    p = void 0 === f ? 1 : f,
                    h = (0, r.jsx)(s.HeadingLevel, {
                        forceLevel: p,
                        children: (0, r.jsx)(s.Heading, {
                            variant: "heading-md/semibold",
                            color: d ? "header-secondary" : void 0,
                            className: l()(n, b().title),
                            id: c,
                            children: o
                        })
                    });
                return null != a ? (0, r.jsx)(s.Clickable, {
                    onClick: a,
                    onContextMenu: i,
                    className: l()(t, b().titleWrapper),
                    children: h
                }) : (0, r.jsx)("div", {
                    className: l()(t, b().titleWrapper),
                    onContextMenu: i,
                    children: h
                })
            };
            m.Divider = v;
            m.Caret = function(e) {
                var n = e.direction;
                return "right" === (void 0 === n ? "right" : n) ? (0, r.jsx)(f.Z, {
                    className: b().caret
                }) : (0, r.jsx)(d.Z, {
                    className: b().caret
                })
            };
            const j = m
        },
        108717: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => d
            });
            var r = t(785893),
                o = (t(667294), t(294184)),
                i = t.n(o),
                l = t(294347),
                a = t.n(l);

            function c(e, n, t) {
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
            const d = function(e) {
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
                            c(e, n, t[n])
                        }))
                    }
                    return e
                }({
                    type: "button",
                    className: i()(a().btnHamburger, c({}, a().btnHamburgerOpen, t), o)
                }, l), {
                    children: [(0, r.jsx)("span", {}), (0, r.jsx)("span", {}), (0, r.jsx)("span", {}), (0, r.jsx)("span", {}), (0, r.jsx)("span", {}), (0, r.jsx)("span", {})]
                }))
            }
        }
    }
]);