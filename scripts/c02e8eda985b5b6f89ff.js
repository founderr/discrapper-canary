"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [85572], {
        575351: (e, n, t) => {
            t.d(n, {
                Z: () => O
            });
            var r = t(785893),
                i = (t(667294), t(202351)),
                o = t(882723),
                s = t(567403),
                u = t(473903),
                l = t(407561),
                a = t(771575),
                d = t(162723),
                c = t(933022),
                E = t(664625),
                Z = t(715107),
                f = t(525261);
            var _ = t(499219),
                M = t(473708);

            function O(e) {
                var n, t = (0, _.Z)(),
                    O = null == t ? void 0 : t.id,
                    g = null == t ? void 0 : t.guild_id,
                    b = (0, i.e7)([s.Z], (function() {
                        return s.Z.getGuild(g)
                    }), [g]),
                    S = (0, i.e7)([l.Z], (function() {
                        return null != O ? l.Z.getVoiceStateForChannel(O, e.id) : null
                    }), [O, e.id]),
                    A = (null === (n = u.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) === e.id,
                    v = function() {
                        var e = (0, i.e7)([Z.Z], (function() {
                                return Z.Z.getVoiceChannelId()
                            })),
                            n = (0, i.e7)([E.default], (function() {
                                return E.default.getId()
                            }));
                        return (0, f.ZP)(n, e) === f.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
                    }(),
                    N = (0, i.e7)([c.ZP], (function() {
                        return c.ZP.getPermissionsForUser(e.id, O)
                    }), [O, e.id]),
                    U = (0, d.B)(O);
                if (null == t || null == b || null == S) return null;
                if (N.speaker) return null;
                var p = function() {
                    A ? (0, a.RK)(t, !1) : (0, a._0)(t, e.id)
                };
                return U ? (0, r.jsx)(o.MenuItem, {
                    id: "invite-speaker",
                    label: A ? M.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER : M.Z.Messages.STAGE_CHANNEL_USER_INVITE_TO_SPEAK,
                    action: p
                }) : v && A ? (0, r.jsx)(o.MenuItem, {
                    id: "invite-speaker",
                    label: M.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER,
                    action: p
                }) : null
            }
        },
        810848: (e, n, t) => {
            t.r(n);
            t.d(n, {
                default: () => p
            });
            var r = t(785893),
                i = (t(667294), t(882723)),
                o = t(971402),
                s = t(343639),
                u = t(567678),
                l = t(82055),
                a = t(153686),
                d = t(112897),
                c = t(575351),
                E = t(662851),
                Z = t(343315),
                f = t(171384),
                _ = t(836448),
                M = t(441738),
                O = t(578142),
                g = t(93439),
                b = t(598955),
                S = t(536130),
                A = t(234617),
                v = t(394212),
                N = t(2590),
                U = t(473708);
            const p = (0, u.Z)((0, s.Z)((function(e) {
                var n = e.user,
                    t = e.showMediaItems,
                    s = void 0 !== t && t,
                    u = e.mediaEngineContext,
                    a = e.onSelect,
                    N = (0, S.Z)(n.id),
                    p = (0, g.Z)(n.id),
                    m = (0, M.Z)(n),
                    C = (0, f.Z)({
                        user: n
                    }),
                    D = (0, Z.Z)(n),
                    T = (0, v.Z)(n.id),
                    h = (0, A.Z)(n.id),
                    j = (0, b.Z)(n.id, u),
                    L = (0, O.Z)(n),
                    x = (0, l.Z)(null, n),
                    I = (0, E.Z)(n),
                    P = (0,
                        _.Z)(n),
                    R = (0, d.Z)({
                        id: n.id,
                        label: U.Z.Messages.COPY_ID_USER
                    }),
                    V = (0, c.Z)(n),
                    y = n.isNonUserBot();
                return (0, r.jsxs)(i.Menu, {
                    navId: "user-context",
                    onClose: o.Zy,
                    "aria-label": U.Z.Messages.USER_ACTIONS_MENU_LABEL,
                    onSelect: a,
                    children: [!y && (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(i.MenuGroup, {
                            children: V
                        }), (0, r.jsxs)(i.MenuGroup, {
                            children: [N, p, m, C, D, T]
                        }), s && (0, r.jsx)(i.MenuGroup, {
                            children: h
                        }), (0, r.jsx)(i.MenuGroup, {
                            children: x
                        }), (0, r.jsxs)(i.MenuGroup, {
                            children: [s && j, L, I, P]
                        })]
                    }), (0, r.jsx)(i.MenuGroup, {
                        children: R
                    })]
                })
            }), {
                object: N.qAy.CONTEXT_MENU
            }), [a.Z.CONTEXT_MENU, a.Z.USER_GENERIC_MENU])
        },
        93439: (e, n, t) => {
            t.d(n, {
                Z: () => d
            });
            var r = t(785893),
                i = (t(667294), t(882723)),
                o = t(761953),
                s = t(735885),
                u = t(664625),
                l = t(2590),
                a = t(473708);

            function d(e, n) {
                var t = u.default.getId(),
                    d = n === l.IlC.POPOUT;
                return t === e || d ? null : (0, r.jsx)(i.MenuItem, {
                    id: "message-user",
                    label: a.Z.Messages.USER_POPOUT_MESSAGE,
                    action: function() {
                        o.Z.openPrivateChannel(e);
                        (0, s.xf)()
                    }
                })
            }
        },
        598955: (e, n, t) => {
            t.d(n, {
                Z: () => S
            });
            var r = t(785893),
                i = (t(667294),
                    t(202351)),
                o = t(882723),
                s = t(105783),
                u = t(656645),
                l = t(656907),
                a = t(525077),
                d = t(563367),
                c = t(464187),
                E = t(473903),
                Z = t(265367),
                f = t(652591),
                _ = t(2590),
                M = t(36256),
                O = t(473708),
                g = t(696249),
                b = t.n(g);

            function S(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : M.Yn.DEFAULT,
                    t = (0, i.e7)([E.default], (function() {
                        var n;
                        return (null === (n = E.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) === e
                    })),
                    g = (0, i.e7)([l.Z], (function() {
                        return l.Z.isLocalSoundboardMuted(e)
                    })),
                    S = (0, i.cj)([a.Z], (function() {
                        return t ? {
                            muted: a.Z.isSelfMute(n),
                            deafened: a.Z.isSelfDeaf(n)
                        } : {
                            muted: a.Z.isLocalMute(e, n),
                            localVideoDisabled: a.Z.isLocalVideoDisabled(e, n),
                            localVideoAutoDisabled: a.Z.isLocalVideoAutoDisabled(e, n)
                        }
                    }), [t, n, e]),
                    A = S.muted,
                    v = S.deafened,
                    N = void 0 !== v && v,
                    U = S.localVideoDisabled,
                    p = void 0 !== U && U,
                    m = S.localVideoAutoDisabled,
                    C = void 0 !== m && m,
                    D = a.Z.supports(M.AN.DISABLE_VIDEO) && !t ? (0, r.jsx)(o.MenuCheckboxItem, {
                        id: "disable-video",
                        label: O.Z.Messages.DISABLE_VIDEO,
                        action: function() {
                            if (C) s.Z.show({
                                title: O.Z.Messages.UNSTABLE_CONNECTION,
                                body: O.Z.Messages.UNSTABLE_CONNECTION_REASON_2,
                                confirmText: O.Z.Messages.TURN_ON_VIDEO_ANYWAY,
                                cancelText: O.Z.Messages.LEAVE_VIDEO_OFF,
                                onConfirm: function() {
                                    return u.Z.setDisableLocalVideo(e, _.ZUi.MANUAL_ENABLED)
                                }
                            });
                            else {
                                var t = p ? _.ZUi.MANUAL_ENABLED : _.ZUi.DISABLED;
                                u.Z.setDisableLocalVideo(e, t, n)
                            }
                        },
                        checked: p,
                        subtext: C ? (0, r.jsxs)("div", {
                            className: b().videoPaused,
                            children: [(0, r.jsx)(Z.Z, {
                                width: 12,
                                className: b().warningCircle
                            }), O.Z.Messages.UNSTABLE_CONNECTION]
                        }) : null
                    }, "disable-video") : null,
                    T = t ? null : (0, r.jsx)(o.MenuCheckboxItem, {
                        id: "soundboard-sound-mute",
                        label: O.Z.Messages.MUTE_SOUNDBOARD,
                        action: function() {
                            var t = d.Z.getRTCConnection();
                            f.default.track(_.rMx.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                                guild_id: c.Z.getGuildId(),
                                target_user_id: e,
                                media_session_id: null == t ? void 0 : t.getMediaSessionId(),
                                parent_media_session_id: null == t ? void 0 : t.parentMediaSessionId,
                                mute_soundboard: !g
                            });
                            u.Z.toggleLocalSoundboardMute(e, n)
                        },
                        checked: g
                    }, "soundboard-sound-mute");
                return t ? [(0,
                    r.jsx)(o.MenuCheckboxItem, {
                    id: "mute",
                    label: O.Z.Messages.SOUND_MUTE,
                    action: function() {
                        return u.Z.toggleSelfMute({
                            context: n
                        })
                    },
                    checked: A
                }, "self-mute"), (0, r.jsx)(o.MenuCheckboxItem, {
                    id: "deafen",
                    label: O.Z.Messages.DEAFEN,
                    action: function() {
                        return u.Z.toggleSelfDeaf({
                            context: n
                        })
                    },
                    checked: N
                }, "self-deafen"), D] : [(0, r.jsx)(o.MenuCheckboxItem, {
                    id: "mute",
                    label: O.Z.Messages.SOUND_MUTE,
                    action: function() {
                        return u.Z.toggleLocalMute(e, n)
                    },
                    checked: A
                }, "self-mute"), T, D]
            }
        },
        234617: (e, n, t) => {
            t.d(n, {
                Z: () => M
            });
            var r = t(785893),
                i = (t(667294), t(202351)),
                o = t(882723),
                s = t(656645),
                u = t(525077),
                l = t(473903),
                a = t(615457),
                d = t(120415),
                c = t(36256),
                E = t(473708);

            function Z(e, n, t) {
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
                        Z(e, n, t[n])
                    }))
                }
                return e
            }

            function _(e, n) {
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

            function M(e) {
                var n, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.Yn.DEFAULT,
                    Z = (0, i.e7)([u.Z], (function() {
                        return u.Z.getLocalVolume(e, t)
                    }), [e, t]),
                    M = e === (null === (n = l.default.getCurrentUser()) || void 0 === n ? void 0 : n.id),
                    O = t === c.Yn.STREAM;
                return M ? null : (0, r.jsx)(o.MenuControlItem, {
                    id: "user-volume",
                    label: O ? E.Z.Messages.STREAM_VOLUME : E.Z.Messages.USER_VOLUME,
                    control: function(n, i) {
                        return (0, r.jsx)(o.MenuSliderControl, _(f({}, n), {
                            ref: i,
                            value: (0, a.P)(Z),
                            maxValue: d.FB ? 200 : 100,
                            onChange: function(n) {
                                return s.Z.setLocalVolume(e, (0, a.A)(n), t)
                            },
                            "aria-label": O ? E.Z.Messages.STREAM_VOLUME : E.Z.Messages.USER_VOLUME
                        }))
                    }
                })
            }
        }
    }
]);