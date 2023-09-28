"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [10848, 85572], {
        112897: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(785893),
                o = (n(667294), n(304548)),
                i = n(968449),
                l = n(416644),
                u = n(691797);

            function s(e) {
                var t = e.id,
                    n = e.label,
                    s = e.onSuccess,
                    c = e.shiftId,
                    a = e.showIconFirst,
                    d = i.Sb.useSetting();
                if (__OVERLAY__ || !d || !u.wS) return null;
                var f = "devmode-copy-id-".concat(t);
                return (0, r.jsx)(o.MenuItem, {
                    id: f,
                    label: n,
                    action: function(e) {
                        var n = null != c && e.shiftKey ? c : t;
                        (0, u.JG)(n);
                        null == s || s()
                    },
                    icon: l.Z,
                    showIconFirst: a
                }, f)
            }
        },
        499219: (e, t, n) => {
            n.d(t, {
                Z: () => l
            });
            var r = n(202351),
                o = n(61209),
                i = n(715107);

            function l() {
                return (0, r.e7)([i.Z, o.Z], (function() {
                    var e = i.Z.getVoiceChannelId();
                    if (null != e) {
                        var t = o.Z.getChannel(e);
                        if (null == t ? void 0 : t.isGuildStageVoice()) return t
                    }
                    return null
                }))
            }
        },
        575351: (e, t, n) => {
            n.d(t, {
                Z: () => Z
            });
            var r = n(785893),
                o = (n(667294), n(202351)),
                i = n(304548),
                l = n(567403),
                u = n(473903),
                s = n(407561),
                c = n(771575),
                a = n(162723),
                d = n(933022),
                f = n(664625),
                O = n(715107),
                b = n(525261);
            var g = n(499219),
                p = n(473708);

            function Z(e) {
                var t, n = (0, g.Z)(),
                    Z = null == n ? void 0 : n.id,
                    v = null == n ? void 0 : n.guild_id,
                    E = (0, o.e7)([l.Z], (function() {
                        return l.Z.getGuild(v)
                    }), [v]),
                    h = (0, o.e7)([s.Z], (function() {
                        return null != Z ? s.Z.getVoiceStateForChannel(Z, e.id) : null
                    }), [Z, e.id]),
                    j = (null === (t = u.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.id,
                    y = function() {
                        var e = (0, o.e7)([O.Z], (function() {
                                return O.Z.getVoiceChannelId()
                            })),
                            t = (0, o.e7)([f.default], (function() {
                                return f.default.getId()
                            }));
                        return (0, b.ZP)(t, e) === b.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
                    }(),
                    _ = (0, o.e7)([d.ZP], (function() {
                        return d.ZP.getPermissionsForUser(e.id, Z)
                    }), [Z, e.id]),
                    M = (0, a.B)(Z);
                if (null == n || null == E || null == h) return null;
                if (_.speaker) return null;
                var S = function() {
                    j ? (0, c.RK)(n, !1) : (0, c._0)(n, e.id)
                };
                return M ? (0, r.jsx)(i.MenuItem, {
                    id: "invite-speaker",
                    label: j ? p.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER : p.Z.Messages.STAGE_CHANNEL_USER_INVITE_TO_SPEAK,
                    action: S
                }) : y && j ? (0, r.jsx)(i.MenuItem, {
                    id: "invite-speaker",
                    label: p.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER,
                    action: S
                }) : null
            }
        },
        810848: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => S
            });
            var r = n(785893),
                o = (n(667294), n(304548)),
                i = n(971402),
                l = n(343639),
                u = n(567678),
                s = n(82055),
                c = n(153686),
                a = n(112897),
                d = n(575351),
                f = n(662851),
                O = n(343315),
                b = n(171384),
                g = n(836448),
                p = n(441738),
                Z = n(578142),
                v = n(93439),
                E = n(598955),
                h = n(536130),
                j = n(234617),
                y = n(394212),
                _ = n(2590),
                M = n(473708);
            const S = (0, u.Z)((0, l.Z)((function(e) {
                var t = e.user,
                    n = e.showMediaItems,
                    l = void 0 !== n && n,
                    u = e.mediaEngineContext,
                    c = e.onSelect,
                    _ = (0, h.Z)(t.id),
                    S = (0, v.Z)(t.id),
                    m = (0, p.Z)(t),
                    C = (0, b.Z)({
                        user: t
                    }),
                    P = (0, O.Z)(t),
                    w = (0, y.Z)(t.id),
                    A = (0, j.Z)(t.id),
                    N = (0, E.Z)(t.id, u),
                    D = (0, Z.Z)(t),
                    x = (0, s.Z)(null, t),
                    U = (0, f.Z)(t),
                    I = (0, g.Z)(t),
                    T = (0, a.Z)({
                        id: t.id,
                        label: M.Z.Messages.COPY_ID_USER
                    }),
                    L = (0, d.Z)(t),
                    V = t.isNonUserBot();
                return (0, r.jsxs)(o.Menu, {
                    navId: "user-context",
                    onClose: i.Zy,
                    "aria-label": M.Z.Messages.USER_ACTIONS_MENU_LABEL,
                    onSelect: c,
                    children: [!V && (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(o.MenuGroup, {
                            children: L
                        }), (0,
                            r.jsxs)(o.MenuGroup, {
                            children: [_, S, m, C, P, w]
                        }), l && (0, r.jsx)(o.MenuGroup, {
                            children: A
                        }), (0, r.jsx)(o.MenuGroup, {
                            children: x
                        }), (0, r.jsxs)(o.MenuGroup, {
                            children: [l && N, D, U, I]
                        })]
                    }), (0, r.jsx)(o.MenuGroup, {
                        children: T
                    })]
                })
            }), {
                object: _.qAy.CONTEXT_MENU
            }), [c.Z.CONTEXT_MENU, c.Z.USER_GENERIC_MENU])
        },
        93439: (e, t, n) => {
            n.d(t, {
                Z: () => a
            });
            var r = n(785893),
                o = (n(667294), n(304548)),
                i = n(761953),
                l = n(735885),
                u = n(664625),
                s = n(2590),
                c = n(473708);

            function a(e, t) {
                var n = u.default.getId(),
                    a = t === s.IlC.POPOUT;
                return n === e || a ? null : (0, r.jsx)(o.MenuItem, {
                    id: "message-user",
                    label: c.Z.Messages.USER_POPOUT_MESSAGE,
                    action: function() {
                        i.Z.openPrivateChannel(e);
                        (0, l.xf)()
                    }
                })
            }
        },
        598955: (e, t, n) => {
            n.d(t, {
                Z: () => h
            });
            var r = n(785893),
                o = (n(667294), n(202351)),
                i = n(304548),
                l = n(105783),
                u = n(656645),
                s = n(656907),
                c = n(52467),
                a = n(563367),
                d = n(464187),
                f = n(473903),
                O = n(818417),
                b = n(652591),
                g = n(2590),
                p = n(36256),
                Z = n(473708),
                v = n(870726),
                E = n.n(v);

            function h(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.Yn.DEFAULT,
                    n = (0,
                        o.e7)([f.default], (function() {
                        var t;
                        return (null === (t = f.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e
                    })),
                    v = (0, o.e7)([s.Z], (function() {
                        return s.Z.isLocalSoundboardMuted(e)
                    })),
                    h = (0, o.cj)([c.Z], (function() {
                        return n ? {
                            muted: c.Z.isSelfMute(t),
                            deafened: c.Z.isSelfDeaf(t)
                        } : {
                            muted: c.Z.isLocalMute(e, t),
                            localVideoDisabled: c.Z.isLocalVideoDisabled(e, t),
                            localVideoAutoDisabled: c.Z.isLocalVideoAutoDisabled(e, t)
                        }
                    }), [n, t, e]),
                    j = h.muted,
                    y = h.deafened,
                    _ = void 0 !== y && y,
                    M = h.localVideoDisabled,
                    S = void 0 !== M && M,
                    m = h.localVideoAutoDisabled,
                    C = void 0 !== m && m,
                    P = c.Z.supports(p.AN.DISABLE_VIDEO) && !n ? (0, r.jsx)(i.MenuCheckboxItem, {
                        id: "disable-video",
                        label: Z.Z.Messages.DISABLE_VIDEO,
                        action: function() {
                            if (C) l.Z.show({
                                title: Z.Z.Messages.UNSTABLE_CONNECTION,
                                body: Z.Z.Messages.UNSTABLE_CONNECTION_REASON_2,
                                confirmText: Z.Z.Messages.TURN_ON_VIDEO_ANYWAY,
                                cancelText: Z.Z.Messages.LEAVE_VIDEO_OFF,
                                onConfirm: function() {
                                    return u.Z.setDisableLocalVideo(e, g.ZUi.MANUAL_ENABLED)
                                }
                            });
                            else {
                                var n = S ? g.ZUi.MANUAL_ENABLED : g.ZUi.DISABLED;
                                u.Z.setDisableLocalVideo(e, n, t)
                            }
                        },
                        checked: S,
                        subtext: C ? (0, r.jsxs)("div", {
                            className: E().videoPaused,
                            children: [(0, r.jsx)(O.Z, {
                                width: 12,
                                className: E().warningCircle
                            }), Z.Z.Messages.UNSTABLE_CONNECTION]
                        }) : null
                    }, "disable-video") : null,
                    w = n ? null : (0, r.jsx)(i.MenuCheckboxItem, {
                        id: "soundboard-sound-mute",
                        label: Z.Z.Messages.MUTE_SOUNDBOARD,
                        action: function() {
                            var n = a.Z.getRTCConnection();
                            b.default.track(g.rMx.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                                guild_id: d.Z.getGuildId(),
                                target_user_id: e,
                                media_session_id: null == n ? void 0 : n.getMediaSessionId(),
                                parent_media_session_id: null == n ? void 0 : n.parentMediaSessionId,
                                mute_soundboard: !v
                            });
                            u.Z.toggleLocalSoundboardMute(e, t)
                        },
                        checked: v
                    }, "soundboard-sound-mute");
                return n ? [(0, r.jsx)(i.MenuCheckboxItem, {
                    id: "mute",
                    label: Z.Z.Messages.SOUND_MUTE,
                    action: function() {
                        return u.Z.toggleSelfMute({
                            context: t
                        })
                    },
                    checked: j
                }, "self-mute"), (0, r.jsx)(i.MenuCheckboxItem, {
                    id: "deafen",
                    label: Z.Z.Messages.DEAFEN,
                    action: function() {
                        return u.Z.toggleSelfDeaf({
                            context: t
                        })
                    },
                    checked: _
                }, "self-deafen"), P] : [(0, r.jsx)(i.MenuCheckboxItem, {
                    id: "mute",
                    label: Z.Z.Messages.SOUND_MUTE,
                    action: function() {
                        return u.Z.toggleLocalMute(e, t)
                    },
                    checked: j
                }, "self-mute"), w, P]
            }
        },
        234617: (e, t, n) => {
            n.d(t, {
                Z: () => p
            });
            var r = n(785893),
                o = (n(667294), n(202351)),
                i = n(304548),
                l = n(656645),
                u = n(52467),
                s = n(473903),
                c = n(615457),
                a = n(120415),
                d = n(36256),
                f = n(473708);

            function O(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        O(e, t, n[t])
                    }))
                }
                return e
            }

            function g(e, t) {
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

            function p(e) {
                var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.Yn.DEFAULT,
                    O = (0, o.e7)([u.Z], (function() {
                        return u.Z.getLocalVolume(e, n)
                    }), [e, n]),
                    p = e === (null === (t = s.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
                    Z = n === d.Yn.STREAM;
                return p ? null : (0, r.jsx)(i.MenuControlItem, {
                    id: "user-volume",
                    label: Z ? f.Z.Messages.STREAM_VOLUME : f.Z.Messages.USER_VOLUME,
                    control: function(t, o) {
                        return (0, r.jsx)(i.MenuSliderControl, g(b({}, t), {
                            ref: o,
                            value: (0, c.P)(O),
                            maxValue: a.FB ? 200 : 100,
                            onChange: function(t) {
                                return l.Z.setLocalVolume(e, (0, c.A)(t), n)
                            },
                            "aria-label": Z ? f.Z.Messages.STREAM_VOLUME : f.Z.Messages.USER_VOLUME
                        }))
                    }
                })
            }
        },
        416644: (e, t, n) => {
            n.d(t, {
                Z: () => O
            });
            var r = n(785893),
                o = (n(667294), n(450520)),
                i = n(795308),
                l = n(633878);

            function u(e, t, n) {
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

            function c(e, t) {
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
            const O = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    u = e.color,
                    s = void 0 === u ? "currentColor" : u,
                    c = e.foreground,
                    O = f(e, ["width", "height", "color", "foreground"]);
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
                }({}, (0, l.Z)(O)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: c,
                        fill: s,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z"
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    a = void 0 === o ? 24 : o,
                    d = e.color,
                    f = void 0 === d ? i.Z.colors.INTERACTIVE_NORMAL : d,
                    O = e.colorClass,
                    b = void 0 === O ? "" : O,
                    g = c(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", s(function(e) {
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
                }({}, (0, l.Z)(g)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: a,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof f ? f : f.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.044V7.34H6V17Zm4.006-9.66V17h3.43c1.465 0 2.595-.415 3.388-1.246.802-.83 1.204-2.025 1.204-3.584 0-1.559-.401-2.753-1.204-3.584-.794-.83-1.923-1.246-3.388-1.246h-3.43Zm5.292 7.14c-.457.448-1.078.672-1.862.672H12.05V9.188h1.386c.784 0 1.405.224 1.862.672.457.448.686 1.218.686 2.31s-.229 1.862-.686 2.31Z",
                        clipRule: "evenodd",
                        className: b
                    })
                }))
            }))
        }
    }
]);