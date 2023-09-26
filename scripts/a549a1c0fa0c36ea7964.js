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
                c = t(330481),
                a = t(167749),
                s = t(567403),
                u = t(107364),
                f = t(23925),
                d = t(318715),
                p = t(369263),
                h = t(2590),
                b = t(473708),
                g = t(587629),
                y = t.n(g);

            function v(e) {
                var n, t = e.settings,
                    o = (0, d.cj)([a.Z], (function() {
                        return {
                            pendingPersonality: a.Z.getPendingPersonality(),
                            errors: a.Z.getErrors()
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
                            (0, c.j7)(e)
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
                O = t.n(m),
                j = t(618354),
                S = t(546083),
                E = t(718421),
                C = t(380014),
                P = t(532369),
                _ = t(526957),
                w = t(21372),
                N = t(473903),
                I = t(876986),
                x = t(462128),
                T = t.n(x);

            function D(e) {
                var n = e.guildId,
                    t = e.clydeUser,
                    o = (0, i.cj)([a.Z], (function() {
                        return a.Z.getPendingUpdates()
                    })),
                    l = o.pendingNick,
                    s = o.pendingThemeColors,
                    u = (0, i.e7)([w.ZP], (function() {
                        return w.ZP.getMember(n, I.fL)
                    }));
                return (0, r.jsxs)("div", {
                    className: T().editProfileSections,
                    children: [(0, r.jsx)(C.Z, {
                        placeholder: b.Z.Messages.CLYDE_NAME,
                        errors: [],
                        currentGlobalName: null == u ? void 0 : u.nick,
                        pendingGlobalName: l,
                        onGlobalNameChange: c.Kt
                    }), (0, r.jsx)(E.Z, {
                        guildId: n,
                        onAvatarChange: c.I5,
                        showRemoveAvatarButton: !0,
                        sectionTitle: b.Z.Messages.CLYDE_SETTINGS_AVATAR_HEADER,
                        isClyde: !0
                    }), (0, r.jsx)(P.Z, {
                        guildId: n,
                        onBannerChange: c.g_,
                        showRemoveBannerButton: !0,
                        showPremiumIcon: !1
                    }), (0, r.jsx)(_.Z, {
                        user: t,
                        guildId: n,
                        showPremiumIcon: !1,
                        preventDisabled: !0,
                        pendingColors: null != s ? s : void 0,
                        onThemeColorsChange: c.z5
                    })]
                })
            }

            function L(e) {
                var n = e.guildId,
                    t = (0, i.cj)([a.Z], (function() {
                        return a.Z.getPendingUpdates()
                    })),
                    o = t.pendingNick,
                    l = t.pendingAvatar,
                    u = t.pendingBanner,
                    f = t.pendingThemeColors,
                    d = (0, i.e7)([N.default], (function() {
                        return N.default.getUser(I.fL)
                    }));
                O()(null != d, "Clyde User must exist");
                var p = (0, i.e7)([s.Z], (function() {
                    return s.Z.getGuild(n)
                }));
                return (0, r.jsx)(S.Z, {
                    className: T().profileCustomizationTab,
                    previewTitle: "Clyde",
                    profilePreview: (0, r.jsx)(j.Z, {
                        user: d,
                        guild: p,
                        canUsePremiumCustomization: !0,
                        onAvatarChange: c.I5,
                        onBannerChange: c.g_,
                        pendingNickname: null != o ? o : void 0,
                        pendingAvatar: l,
                        pendingBanner: u,
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
            var k = t(498898),
                A = t.n(k);

            function Z(e, n) {
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
                        }([i, c])
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
                    d = (0, i.cj)([a.Z], (function() {
                        return {
                            settings: a.Z.getSettings(t),
                            isFetchingSettings: a.Z.isFetchingSettings(t),
                            isSavingSettings: a.Z.isSavingSettings(),
                            hasPendingChanges: a.Z.hasPendingChanges(),
                            errors: a.Z.getErrors()
                        }
                    })),
                    p = d.settings,
                    h = d.isFetchingSettings,
                    g = d.isSavingSettings,
                    y = d.hasPendingChanges,
                    m = d.errors,
                    O = (0, i.e7)([s.Z], (function() {
                        return s.Z.getGuild(t)
                    })),
                    j = (0, f.OR)(O),
                    S = G(o.useState(!1), 2),
                    E = S[0],
                    C = S[1];
                o.useEffect((function() {
                    (0, c.Bn)(t, !0)
                }), [t]);
                o.useEffect((function() {
                    (y || null != m) && C(!1)
                }), [y, m]);
                var P, _, w = (_ = (P = function() {
                    var e;
                    return M(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                if (null == t || !a.Z.hasPendingChanges()) return [2];
                                e = a.Z.getPendingUpdates();
                                return [4, (0, c.CX)(t, U(e))];
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
                        var o = P.apply(e, n);

                        function i(e) {
                            R(o, t, r, i, l, "next", e)
                        }

                        function l(e) {
                            R(o, t, r, i, l, "throw", e)
                        }
                        i(void 0)
                    }))
                }), function() {
                    return _.apply(this, arguments)
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
                            children: [j && (0, r.jsx)(L, {
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
                                onClick: c.c6,
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
                                onClick: w,
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
                I5: () => O,
                g_: () => j,
                z5: () => S,
                c6: () => E,
                Bn: () => C
            });
            var r = t(281110),
                o = t(744564),
                i = t(285991),
                l = t(167749),
                c = t(2590),
                a = t(876986);

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
                        }([i, c])
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
                                    url: c.ANM.GUILD_CLYDE_SETTINGS(e),
                                    oldFormErrors: !0,
                                    body: n
                                })];
                            case 2:
                                t = l.sent();
                                o.Z.dispatch({
                                    type: "GUILD_SETTINGS_CLYDE_SAVE_SUCCESS",
                                    settings: t.body.settings
                                });
                                null != t.body.guild_member_profile && o.Z.dispatch(d({
                                    type: "USER_PROFILE_UPDATE_SUCCESS",
                                    userId: a.fL,
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

            function O(e) {
                o.Z.dispatch({
                    type: "GUILD_SETTINGS_CLYDE_SET_PENDING_AVATAR",
                    avatar: e
                })
            }

            function j(e) {
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
                return P.apply(this, arguments)
            }

            function P() {
                P = u((function(e) {
                    var n, t, s = arguments;
                    return p(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                if (!(s.length > 1 && void 0 !== s[1] && s[1]) && !l.Z.shouldFetchSettings(e)) return [2];
                                (0, i.In)(a.fL, {
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
                                    url: c.ANM.GUILD_CLYDE_SETTINGS(e),
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
                return P.apply(this, arguments)
            }
        },
        167749: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => S
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

            function c(e, n) {
                return !n || "object" !== s(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function a(e, n) {
                a = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return a(e, n)
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
                    return c(this, t)
                }
            }
            var f, d, p, h, b, g = !1,
                y = null,
                v = {},
                m = {};

            function O() {
                f = void 0;
                d = void 0;
                p = void 0;
                h = void 0;
                b = void 0;
                y = null
            }
            var j = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && a(e, n)
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
                    return f
                };
                r.getPendingNick = function() {
                    return d
                };
                r.getErrors = function() {
                    return y
                };
                r.hasPendingChanges = function() {
                    return void 0 !== f || void 0 !== d || void 0 !== p || void 0 !== h || void 0 !== b
                };
                r.getPendingUpdates = function() {
                    return {
                        pendingAvatar: p,
                        pendingNick: d,
                        pendingPersonality: f,
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
                        o = Date.now() - (null !== (t = r.lastFetchTimestampMs) && void 0 !== t ? t : 0) > 36e5;
                    return !(null == r ? void 0 : r.isFetching) && o
                };
                return t
            }(r.ZP.Store);
            j.displayName = "GuildSettingsClydeStore";
            const S = new j(o.Z, {
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
                    f = n
                },
                GUILD_SETTINGS_CLYDE_SET_PENDING_NICK: function(e) {
                    var n = e.nick;
                    d = n
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
                S: () => P,
                Z: () => w
            });
            var r = t(785893),
                o = t(667294),
                i = t(294184),
                l = t.n(i),
                c = t(441143),
                a = t.n(c),
                s = t(882723),
                u = t(421281),
                f = t(694755),
                d = t(2590),
                p = t(473708),
                h = t(307436),
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
                    return j(this, t)
                }
            }

            function P(e) {
                var n = e.className,
                    t = e.icon,
                    o = void 0 === t ? null : t;
                return (0, r.jsx)("div", {
                    className: l()(b().imageUploaderIcon, n),
                    children: o
                })
            }
            var _ = function(e) {
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
                    a()(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted");
                    this.inputRef.current.handleFileChange(e)
                };
                i.render = function() {
                    var e, n, t, o, i, c = this.props,
                        a = c.image,
                        h = c.hint,
                        g = c.name,
                        y = c.makeURL,
                        v = c.disabled,
                        j = c.onChange,
                        S = c.showIcon,
                        E = c.showIconDisabled,
                        C = c.className,
                        _ = c.imageClassName,
                        w = c.iconClassName,
                        N = c.iconWrapperClassName,
                        I = c.icon,
                        x = c.hideSize,
                        T = c.imageStyle,
                        D = c.showRemoveButton,
                        L = c.maxFileSizeBytes,
                        k = c.onFileSizeError,
                        A = c.onOpenImageSelectModal,
                        Z = c["aria-label"];
                    null != (e = null != a && /^data:/.test(a) ? a : y(a)) ? n = 'url("'.concat(e, '")') : null != g && (t = (0, r.jsx)("div", {
                        className: b().imageUploaderAcronym,
                        children: (0, u.Zg)(g)
                    }));
                    if (v) return (0, r.jsx)("div", {
                        className: l()(b().imageUploader, b().disabled, C),
                        children: (0, r.jsxs)("div", {
                            className: l()(b().imageUploaderInner, _),
                            style: O(m({}, T), {
                                backgroundImage: n
                            }),
                            children: [t, E && (0, r.jsx)("div", {
                                className: l()(b().imageUploaderIcon, b().imageUploaderIconDisabled, w),
                                children: I
                            })]
                        })
                    });
                    null != a ? o = (0, r.jsx)(s.Anchor, {
                        className: b().removeButton,
                        onClick: this.handleRemove,
                        children: p.Z.Messages.REMOVE
                    }) : x || (o = (0, r.jsx)("small", {
                        className: b().sizeInfo,
                        children: p.Z.Messages.MINIMUM_SIZE.format({
                            size: d.IXf
                        })
                    }));
                    var R = null !== (i = null != Z ? Z : h) && void 0 !== i ? i : p.Z.Messages.CHANGE_AVATAR;
                    return (0, r.jsxs)("div", {
                        className: l()(b().imageUploader, C),
                        children: [(0, r.jsx)(s.FocusRing, {
                            within: !0,
                            children: (0, r.jsxs)("div", {
                                className: S ? l()(b().imageUploaderIconWrapper, N) : void 0,
                                children: [(0, r.jsxs)("div", {
                                    className: l()(b().imageUploaderInner, _),
                                    style: O(m({}, T), {
                                        backgroundImage: n
                                    }),
                                    children: [(0, r.jsx)("span", {
                                        "aria-hidden": !0,
                                        children: t
                                    }), null != A ? (0, r.jsx)(s.Clickable, {
                                        className: b().imageUploaderFileInput,
                                        "aria-label": R,
                                        onClick: A
                                    }) : (0, r.jsx)(f.ZP, {
                                        ref: this.inputRef,
                                        onChange: j,
                                        className: b().imageUploaderFileInput,
                                        "aria-label": R,
                                        tabIndex: 0,
                                        maxFileSizeBytes: L,
                                        onFileSizeError: k
                                    })]
                                }), null != h && (0, r.jsx)("div", {
                                    className: b().imageUploaderHint,
                                    "aria-hidden": "true",
                                    children: h
                                }), S && (0, r.jsx)(P, {
                                    className: w,
                                    icon: I
                                })]
                            })
                        }), D ? o : null]
                    })
                };
                return t
            }(o.PureComponent);
            _.defaultProps = {
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
            const w = _
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
                    h = e.backgroundClassName;
                if (!c) return (0, i.jsx)(i.Fragment, {
                    children: t
                });
                var b = d[l],
                    g = b.border,
                    y = b.background;
                return (0, i.jsx)("div", {
                    ref: n,
                    className: a()(g, p),
                    children: (0, i.jsx)("div", {
                        className: a()(f ? y : u().background, h),
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
                c = t(798159),
                a = t(457217),
                s = t(547308),
                u = t(882723);

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
            var h = t(795470),
                b = t(681706),
                g = t(1150),
                y = t(49657),
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
            var S = (0, b.iS)((function(e) {
                return (0,
                    r.jsxs)("div", {
                    className: v().wrapper,
                    children: [(0, r.jsx)("div", {
                        className: v().saturation,
                        children: (0, r.jsx)(g.OQ, O({}, e))
                    }), (0, r.jsx)("div", {
                        className: v().hue,
                        children: (0, r.jsx)(g.PS, j(O({}, e), {
                            direction: "horizontal"
                        }))
                    })]
                })
            }));
            const E = o.memo(S);
            var C = t(621329),
                P = t(179649),
                _ = t(373438),
                w = t(2590),
                N = t(473708),
                I = t(70812),
                x = t.n(I);

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

            function R(e) {
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

            function G(e, n) {
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
                },
                V = function() {
                    return Promise.resolve()
                };

            function K(e) {
                var n, t = e.color,
                    o = e.isDefault,
                    i = void 0 !== o && o,
                    c = e.isCustom,
                    f = void 0 !== c && c,
                    d = e.isSelected,
                    p = void 0 !== d && d,
                    b = e.disabled,
                    g = void 0 !== b && b,
                    y = e.style,
                    v = void 0 === y ? {} : y,
                    m = e.onClick,
                    O = e["aria-label"],
                    j = (0, a.JA)("color-".concat(t)),
                    S = null != t ? (0, s.Rf)(t) : v.backgroundColor,
                    E = !1;
                f && !p ? E = !0 : (f || p) && (E = (0, s.Bd)(t) > .1);
                return (0, r.jsx)(u.FocusRing, {
                    offset: -2,
                    children: (0, r.jsxs)("button", G(R({
                        type: "button",
                        className: l()(x().colorPickerSwatch, (n = {}, k(n, x().disabled, g), k(n, x().default, i), k(n, x().custom, f), k(n, x().noColor, null == t), n)),
                        disabled: g,
                        onClick: function() {
                            return null == m ? void 0 : m(t)
                        },
                        style: G(R({}, v), {
                            backgroundColor: S
                        }),
                        "aria-label": null != O ? O : S
                    }, j), {
                        children: [f ? (0, r.jsx)(P.Z, {
                            className: x().colorPickerDropper,
                            foreground: x().colorPickerDropperFg,
                            width: 14,
                            height: 14,
                            color: (0,
                                h.Lq)(E ? w.Ilk.WHITE_500 : w.Ilk.BLACK_500)
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
                                color: (0, h.Lq)(E ? w.Ilk.WHITE_500 : w.Ilk.BLACK_500)
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
                        c = e.middle,
                        a = e.footer,
                        f = e.showEyeDropper,
                        d = p(),
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
                                return G(R({}, e), {
                                    input: n
                                })
                            }))
                        },
                        O = (v = (y = function() {
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
                                        return G(R({}, n), {
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
                        }), c, (0, r.jsxs)("div", {
                            className: x().customColorPickerInputContainer,
                            children: [f && null != d && (0, r.jsx)(_.JO, {
                                onClick: O,
                                tooltip: N.Z.Messages.PICK_A_COLOR_FROM_THE_PAGE,
                                tooltipPosition: "top",
                                className: x().customColorPickerEyeDropper,
                                icon: P.Z
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
                        }), a]
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
                    f = e.onChange,
                    d = e.renderDefaultButton,
                    p = e.renderCustomButton,
                    h = e.colorContainerClassName,
                    b = function(e) {
                        return (0, r.jsx)("div", {
                            className: x().colorPickerRow,
                            children: e.map((function(e) {
                                return (0, r.jsx)(K, {
                                    color: e,
                                    isSelected: e === s,
                                    onClick: f,
                                    disabled: u
                                }, e)
                            }))
                        })
                    },
                    g = i.slice(0, i.length / 2),
                    y = i.slice(i.length / 2, i.length),
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
                                c = M(e, ["ref"]);
                            return (0, r.jsxs)("div", G(R({
                                className: l()(x().container, n),
                                ref: i
                            }, c), {
                                children: [(0, r.jsx)("div", {
                                    className: l()(x().defaultContainer, h),
                                    children: d({
                                        value: s,
                                        color: t,
                                        onChange: f,
                                        disabled: u
                                    })
                                }), (0, r.jsx)("div", {
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
        179649: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => u
            });
            var r = t(785893),
                o = (t(667294), t(450520)),
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
                        }), (0, r.jsx)("path", {
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
                    h = void 0 === p ? "" : p,
                    b = s(e, ["width", "height", "color", "colorClass"]);
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
                }({}, (0, l.Z)(b)), {
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
                        className: h
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
                o = (t(667294), t(450520)),
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
                return (0,
                    r.jsx)("svg", a(function(e) {
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
                JO: () => y,
                iz: () => v,
                ZP: () => O
            });
            var r = t(785893),
                o = t(667294),
                i = t(294184),
                l = t.n(i),
                c = t(108717),
                a = t(289283),
                s = t(882723),
                u = t(570814),
                f = t(249697),
                d = t(136317),
                p = t(211482),
                h = t(526976),
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
                        c = void 0 !== i && i,
                        a = e.disabled,
                        u = void 0 !== a && a,
                        f = e.showBadge,
                        d = void 0 !== f && f,
                        h = e.color,
                        y = e.foreground,
                        v = e.background,
                        m = e.icon,
                        O = e.onClick,
                        j = e.onContextMenu,
                        S = e.tooltip,
                        E = void 0 === S ? null : S,
                        C = e.tooltipColor,
                        P = e.tooltipPosition,
                        _ = void 0 === P ? "bottom" : P,
                        w = e.hideOnClick,
                        N = void 0 === w || w,
                        I = e.role,
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
                        position: _,
                        hideOnClick: N,
                        children: function(e) {
                            var i, a = e.onMouseEnter,
                                f = e.onMouseLeave,
                                S = e.onFocus,
                                E = e.onBlur;
                            return null == O ? (0, r.jsx)("div", {
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
                                    onMouseEnter: a,
                                    onMouseLeave: f,
                                    onFocus: S,
                                    onBlur: E
                                })
                            }) : (0, r.jsxs)(s.Clickable, {
                                tag: "div",
                                onClick: u ? void 0 : O,
                                onContextMenu: u ? void 0 : j,
                                onMouseEnter: a,
                                onMouseLeave: f,
                                onFocus: S,
                                onBlur: E,
                                className: l()(n, (i = {}, g(i, b().iconWrapper, !0), g(i, b().clickable, !u && null != O), g(i, b().selected, c), i)),
                                role: I,
                                "aria-label": Z,
                                "aria-hidden": T,
                                "aria-checked": D,
                                "aria-haspopup": k,
                                "aria-expanded": L,
                                tabIndex: u || null == O ? -1 : 0,
                                children: [d ? (0, r.jsx)(p.ZP, {
                                    mask: p.ZP.Masks.HEADER_BAR_BADGE,
                                    children: A
                                }) : A, d ? (0, r.jsx)("span", {
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
                    f = e.children,
                    d = e.childrenBottom,
                    p = e.toolbar,
                    h = e.onDoubleClick,
                    y = e["aria-label"],
                    v = e["aria-labelledby"],
                    m = e.role,
                    O = e.scrollable,
                    j = e.transparent,
                    S = void 0 !== j && j,
                    E = o.useRef(null),
                    C = o.useContext(u.Z);
                return (0, r.jsx)("section", {
                    className: l()(t, b().container, (n = {}, g(n, b().themed, !S), g(n, b().transparent, S), g(n, b().themedMobile, a.tq), n)),
                    "aria-label": y,
                    "aria-labelledby": v,
                    role: m,
                    ref: E,
                    children: (0, r.jsxs)(s.FocusRingScope, {
                        containerRef: E,
                        children: [(0, r.jsxs)("div", {
                            className: b().upperContainer,
                            children: [(0, r.jsxs)("div", {
                                className: l()(b().children, i, g({}, b().scrollable, O)),
                                onDoubleClick: h,
                                children: [a.tq && null != C ? (0, r.jsx)(c.Z, {
                                    onClick: C,
                                    className: b().hamburger
                                }) : null, f]
                            }), null != p ? (0, r.jsx)("div", {
                                className: b().toolbar,
                                children: p
                            }) : null]
                        }), d]
                    })
                })
            };
            m.Icon = y;
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
                    h = (0, r.jsx)(s.HeadingLevel, {
                        forceLevel: p,
                        children: (0, r.jsx)(s.Heading, {
                            variant: "heading-md/semibold",
                            color: f ? "header-secondary" : void 0,
                            className: l()(n, b().title),
                            id: a,
                            children: o
                        })
                    });
                return null != c ? (0, r.jsx)(s.Clickable, {
                    onClick: c,
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
                return "right" === (void 0 === n ? "right" : n) ? (0, r.jsx)(d.Z, {
                    className: b().caret
                }) : (0, r.jsx)(f.Z, {
                    className: b().caret
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
                    children: [(0, r.jsx)("span", {}), (0, r.jsx)("span", {}), (0, r.jsx)("span", {}), (0, r.jsx)("span", {}), (0, r.jsx)("span", {}), (0, r.jsx)("span", {})]
                }))
            }
        }
    }
]);