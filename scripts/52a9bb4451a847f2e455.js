"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [97539], {
        575351: (e, n, t) => {
            t.d(n, {
                Z: () => M
            });
            var r = t(785893),
                i = (t(667294), t(202351)),
                o = t(70418),
                s = t(567403),
                a = t(473903),
                u = t(407561),
                l = t(771575),
                c = t(162723),
                d = t(933022),
                f = t(664625),
                Z = t(715107),
                g = t(525261);
            var O = t(499219),
                m = t(473708);

            function M(e) {
                var n, t = (0, O.Z)(),
                    M = null == t ? void 0 : t.id,
                    b = null == t ? void 0 : t.guild_id,
                    v = (0, i.e7)([s.Z], (function() {
                        return s.Z.getGuild(b)
                    }), [b]),
                    E = (0, i.e7)([u.Z], (function() {
                        return null != M ? u.Z.getVoiceStateForChannel(M, e.id) : null
                    }), [M, e.id]),
                    p = (null === (n = a.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) === e.id,
                    h = function() {
                        var e = (0, i.e7)([Z.Z], (function() {
                                return Z.Z.getVoiceChannelId()
                            })),
                            n = (0, i.e7)([f.default], (function() {
                                return f.default.getId()
                            }));
                        return (0, g.ZP)(n, e) === g.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
                    }(),
                    _ = (0, i.e7)([d.ZP], (function() {
                        return d.ZP.getPermissionsForUser(e.id, M)
                    }), [M, e.id]),
                    j = (0, c.B)(M);
                if (null == t || null == v || null == E) return null;
                if (_.speaker) return null;
                var S = function() {
                    p ? (0, l.RK)(t, !1) : (0, l._0)(t, e.id)
                };
                return j ? (0, r.jsx)(o.MenuItem, {
                    id: "invite-speaker",
                    label: p ? m.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER : m.Z.Messages.STAGE_CHANNEL_USER_INVITE_TO_SPEAK,
                    action: S
                }) : h && p ? (0, r.jsx)(o.MenuItem, {
                    id: "invite-speaker",
                    label: m.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER,
                    action: S
                }) : null
            }
        },
        597539: (e, n, t) => {
            t.r(n);
            t.d(n, {
                default: () => Y
            });
            var r = t(785893),
                i = (t(667294), t(70418)),
                o = t(971402),
                s = t(343639),
                a = t(567678),
                u = t(82055),
                l = t(153686),
                c = t(950761),
                d = t(492692),
                f = t(289150),
                Z = t(112897),
                g = t(575351),
                O = t(662851),
                m = t(343315),
                M = t(171384),
                b = t(836448),
                v = t(441738),
                E = t(202351),
                p = t(795308),
                h = t(761953),
                _ = t(334835),
                j = t(657539),
                S = t(473903),
                A = t(473708),
                x = t(916973),
                N = t.n(x);

            function I(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function y(e, n) {
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

            function C(e) {
                var n = e.color,
                    t = e.className;
                return (0, r.jsx)("svg", {
                    className: t,
                    height: "16",
                    width: "80",
                    viewBox: "0 0 80 16",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, r.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        opacity: ".6",
                        children: [(0, r.jsx)("path", {
                            d: "m0 0h80v16h-80z"
                        }), (0, r.jsxs)("g", {
                            stroke: n,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            children: [(0, r.jsx)("path", {
                                d: "m71 1h4v4.16"
                            }), (0, r.jsx)("path", {
                                d: "m2 1h4v4.16",
                                transform: "matrix(-1 0 0 1 8 0)"
                            }), (0, r.jsx)("path", {
                                d: "m51 1h4m6 0h4m-24 0h4m-14 0h4m-14 0h4m-23 11v-2m9-9h4"
                            }), (0, r.jsx)("path", {
                                d: "m72.13 10.474 2.869 3.12 2.631-3.12"
                            })]
                        })]
                    })
                })
            }

            function U(e, n) {
                var t = function(t) {
                        (0, i.openModal)((function(o) {
                            return (0, r.jsxs)(i.ConfirmModal, y(function(e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = null != arguments[n] ? arguments[n] : {},
                                        r = Object.keys(t);
                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                                    }))));
                                    r.forEach((function(n) {
                                        I(e, n, t[n])
                                    }))
                                }
                                return e
                            }({
                                bodyClassName: N().confirmModal,
                                header: A.Z.Messages.TRANSFER_GROUP_OWNERSHIP,
                                confirmText: A.Z.Messages.CONFIRM,
                                cancelText: A.Z.Messages.CANCEL,
                                onConfirm: function() {
                                    return h.Z.setDMOwner(n.id, e.id)
                                }
                            }, o), {
                                children: [(0, r.jsx)(C, {
                                    color: p.Z.unsafe_rawColors.PRIMARY_300.css
                                }), (0, r.jsxs)("div", {
                                    className: N().fromToWrapper,
                                    children: [(0, r.jsx)("div", {
                                        className: N().from,
                                        children: (0, r.jsx)(j.Z, {
                                            user: t,
                                            size: i.AvatarSizes.SIZE_80
                                        })
                                    }), (0, r.jsx)("div", {
                                        className: N().to,
                                        children: (0, r.jsx)(j.Z, {
                                            user: e,
                                            size: i.AvatarSizes.SIZE_80
                                        })
                                    })]
                                }), (0, r.jsx)(i.Text, {
                                    variant: "text-md/normal",
                                    children: A.Z.Messages.CONFIRM_CHANGE_DM_OWNER.format({
                                        usernameHook: function(n, t) {
                                            return (0, r.jsx)(_.Z, {
                                                usernameIcon: (0, r.jsx)(i.Avatar, {
                                                    className: N().avatarIcon,
                                                    src: e.getAvatarURL(void 0, 16),
                                                    size: i.AvatarSizes.SIZE_16,
                                                    "aria-hidden": !0
                                                }),
                                                className: N().discordTag,
                                                usernameClass: N().username,
                                                discriminatorClass: N().discriminator,
                                                user: e
                                            }, t)
                                        }
                                    })
                                })]
                            }))
                        }))
                    },
                    o = (0, E.e7)([S.default], (function() {
                        return S.default.getCurrentUser()
                    }));
                return null == o || n.ownerId !== o.id || e.id === o.id || (null == n ? void 0 : n.isBroadcastChannel()) ? null : (0, r.jsx)(i.MenuItem, {
                    id: "make-dm-owner",
                    color: "danger",
                    label: A.Z.Messages.CHANGE_DM_OWNER,
                    action: function() {
                        return t(o)
                    }
                })
            }
            var P = t(982348),
                T = t(578142),
                D = t(827991),
                R = t(93439),
                w = t(61209);
            var L = t(39082),
                k = t(598955),
                G = t(536130),
                V = t(234617),
                F = t(394212),
                B = t(2590);
            const Y = (0, a.Z)((0, s.Z)((function(e) {
                var n, t = e.user,
                    s = e.channel,
                    a = e.context,
                    l = e.showChatItems,
                    p = void 0 === l || l,
                    _ = e.showMediaItems,
                    j = void 0 !== _ && _,
                    x = e.showChannelCallItems,
                    N = void 0 !== x && x,
                    I = e.showModalItems,
                    y = void 0 === I || I,
                    C = e.onSelect,
                    B = (0, G.Z)(t.id, null),
                    Y = (0, D.Z)(t, null, a),
                    W = (0,
                        L.Z)(t.id, s.id),
                    z = (0, R.Z)(t.id, a),
                    H = (0, v.Z)(t, a),
                    K = (0, M.Z)({
                        user: t,
                        context: a
                    }),
                    X = (0, m.Z)(t),
                    q = (0, V.Z)(t.id),
                    Q = function(e, n) {
                        var t = (0, E.e7)([S.default], (function() {
                                return S.default.getCurrentUser()
                            }), []),
                            o = (0, E.e7)([w.Z], (function() {
                                return w.Z.getChannel(n)
                            }), [n]);
                        return null == o || o.isOwner(e) || null == t || !o.isOwner(t.id) ? null : (0, r.jsx)(i.MenuItem, {
                            id: "remove",
                            label: A.Z.Messages.REMOVE_FROM_GROUP,
                            action: function() {
                                return h.Z.removeRecipient(n, e)
                            },
                            color: "danger"
                        })
                    }(t.id, s.id),
                    $ = (0, k.Z)(t.id),
                    J = (0, P.Z)(t.id, s.id),
                    ee = (0, T.Z)(t),
                    ne = (0, u.Z)(null, t),
                    te = (0, O.Z)(t),
                    re = (0, b.Z)(t),
                    ie = (0, Z.Z)({
                        id: t.id,
                        label: A.Z.Messages.COPY_ID_USER
                    }),
                    oe = (0, F.Z)(t.id),
                    se = (0, d.Z)(t.id),
                    ae = (0, c.Z)(s.id),
                    ue = (0, g.Z)(t),
                    le = (0, f.Z)(t.id),
                    ce = U(t, s),
                    de = t.isNonUserBot(),
                    fe = s.isManaged(),
                    Ze = null === (n = s.recipients) || void 0 === n ? void 0 : n.includes(t.id);
                return (0, r.jsxs)(i.Menu, {
                    navId: "user-context",
                    onClose: o.Zy,
                    "aria-label": A.Z.Messages.USER_ACTIONS_MENU_LABEL,
                    onSelect: C,
                    children: [!de && (0, r.jsxs)(r.Fragment, {
                        children: [(0,
                            r.jsx)(i.MenuGroup, {
                            children: ue
                        }), (0, r.jsxs)(i.MenuGroup, {
                            children: [y && B, p && Y, z, H, !fe && W, y && K, y && X, oe]
                        }), j && (0, r.jsx)(i.MenuGroup, {
                            children: q
                        }), Ze && (0, r.jsxs)(i.MenuGroup, {
                            children: [!fe && Q, ce]
                        }), (0, r.jsx)(i.MenuGroup, {
                            children: y && ne
                        }), (0, r.jsxs)(i.MenuGroup, {
                            children: [j && $, j && J, y && ee, te, y && re, j && le]
                        }), N && (0, r.jsxs)(i.MenuGroup, {
                            children: [ae, se]
                        })]
                    }), (0, r.jsx)(i.MenuGroup, {
                        children: ie
                    })]
                })
            }), {
                object: B.qAy.CONTEXT_MENU
            }), [l.Z.CONTEXT_MENU, l.Z.GROUP_DM_USER_MENU])
        },
        982348: (e, n, t) => {
            t.d(n, {
                Z: () => d
            });
            var r = t(785893),
                i = (t(667294), t(202351)),
                o = t(70418),
                s = t(247250),
                a = t(347874),
                u = t(407561),
                l = t(2590),
                c = t(473708);

            function d(e, n) {
                var t = (0, i.e7)([a.Z], (function() {
                    return e === a.Z.getSelectedParticipantId(n)
                }), [n, e]);
                return (0, i.e7)([a.Z, u.Z], (function() {
                    var t = u.Z.isInChannel(n, e) && u.Z.hasVideo(n),
                        r = a.Z.getLayout(n),
                        i = r === l.AEg.MINIMUM || r === l.AEg.NORMAL;
                    return !t || i
                }), [n, e]) ? null : (0, r.jsx)(o.MenuItem, {
                    id: "focus-video",
                    label: t ? c.Z.Messages.UNFOCUS_PARTICIPANT : c.Z.Messages.FOCUS_PARTICIPANT,
                    action: function() {
                        return s.Z.selectParticipant(n, t ? null : e)
                    }
                })
            }
        },
        93439: (e, n, t) => {
            t.d(n, {
                Z: () => c
            });
            var r = t(785893),
                i = (t(667294), t(70418)),
                o = t(761953),
                s = t(735885),
                a = t(664625),
                u = t(2590),
                l = t(473708);

            function c(e, n) {
                var t = a.default.getId(),
                    c = n === u.IlC.POPOUT;
                return t === e || c ? null : (0, r.jsx)(i.MenuItem, {
                    id: "message-user",
                    label: l.Z.Messages.USER_POPOUT_MESSAGE,
                    action: function() {
                        o.Z.openPrivateChannel(e);
                        (0, s.xf)()
                    }
                })
            }
        },
        39082: (e, n, t) => {
            t.d(n, {
                Z: () => Z
            });
            var r = t(785893),
                i = (t(667294), t(202351)),
                o = t(70418),
                s = t(997244),
                a = t(347874),
                u = t(664625),
                l = t(358500),
                c = t(473708);

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
                        var r, i, o = [],
                            s = !0,
                            a = !1;
                        try {
                            for (t = t.call(e); !(s = (r = t.next()).done); s = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                s || null == t.return || t.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
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

            function Z(e, n) {
                var t = (0, i.e7)([u.default], (function() {
                        return u.default.getId() === e
                    }), [e]),
                    d = f((0, i.Wu)([a.Z], (function() {
                        return [a.Z.getParticipants(n), a.Z.getParticipant(n, e)]
                    }), [n, e]), 2),
                    Z = d[0],
                    g = d[1];
                return t || 0 === Z.length ? null : null == g ? (0, r.jsx)(o.MenuItem, {
                    id: "ring",
                    label: c.Z.Messages.RING,
                    action: function() {
                        return s.Z.ring(n, [e])
                    }
                }) : g.type === l.fO.USER && g.ringing ? (0, r.jsx)(o.MenuItem, {
                    id: "stop-ringing",
                    label: c.Z.Messages.STOP_RINGING,
                    action: function() {
                        return s.Z.stopRinging(n, [e])
                    }
                }) : null
            }
        },
        598955: (e, n, t) => {
            t.d(n, {
                Z: () => E
            });
            var r = t(785893),
                i = (t(667294), t(202351)),
                o = t(70418),
                s = t(105783),
                a = t(656645),
                u = t(656907),
                l = t(602351),
                c = t(563367),
                d = t(464187),
                f = t(473903),
                Z = t(818417),
                g = t(652591),
                O = t(2590),
                m = t(36256),
                M = t(473708),
                b = t(870726),
                v = t.n(b);

            function E(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m.Yn.DEFAULT,
                    t = (0, i.e7)([f.default], (function() {
                        var n;
                        return (null === (n = f.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) === e
                    })),
                    b = (0, i.e7)([u.Z], (function() {
                        return u.Z.isLocalSoundboardMuted(e)
                    })),
                    E = (0, i.cj)([l.Z], (function() {
                        return t ? {
                            muted: l.Z.isSelfMute(n),
                            deafened: l.Z.isSelfDeaf(n)
                        } : {
                            muted: l.Z.isLocalMute(e, n),
                            localVideoDisabled: l.Z.isLocalVideoDisabled(e, n),
                            localVideoAutoDisabled: l.Z.isLocalVideoAutoDisabled(e, n)
                        }
                    }), [t, n, e]),
                    p = E.muted,
                    h = E.deafened,
                    _ = void 0 !== h && h,
                    j = E.localVideoDisabled,
                    S = void 0 !== j && j,
                    A = E.localVideoAutoDisabled,
                    x = void 0 !== A && A,
                    N = l.Z.supports(m.AN.DISABLE_VIDEO) && !t ? (0,
                        r.jsx)(o.MenuCheckboxItem, {
                        id: "disable-video",
                        label: M.Z.Messages.DISABLE_VIDEO,
                        action: function() {
                            if (x) s.Z.show({
                                title: M.Z.Messages.UNSTABLE_CONNECTION,
                                body: M.Z.Messages.UNSTABLE_CONNECTION_REASON_2,
                                confirmText: M.Z.Messages.TURN_ON_VIDEO_ANYWAY,
                                cancelText: M.Z.Messages.LEAVE_VIDEO_OFF,
                                onConfirm: function() {
                                    return a.Z.setDisableLocalVideo(e, O.ZUi.MANUAL_ENABLED)
                                }
                            });
                            else {
                                var t = S ? O.ZUi.MANUAL_ENABLED : O.ZUi.DISABLED;
                                a.Z.setDisableLocalVideo(e, t, n)
                            }
                        },
                        checked: S,
                        subtext: x ? (0, r.jsxs)("div", {
                            className: v().videoPaused,
                            children: [(0, r.jsx)(Z.Z, {
                                width: 12,
                                className: v().warningCircle
                            }), M.Z.Messages.UNSTABLE_CONNECTION]
                        }) : null
                    }, "disable-video") : null,
                    I = t ? null : (0, r.jsx)(o.MenuCheckboxItem, {
                        id: "soundboard-sound-mute",
                        label: M.Z.Messages.MUTE_SOUNDBOARD,
                        action: function() {
                            var t = c.Z.getRTCConnection();
                            g.default.track(O.rMx.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                                guild_id: d.Z.getGuildId(),
                                target_user_id: e,
                                media_session_id: null == t ? void 0 : t.getMediaSessionId(),
                                parent_media_session_id: null == t ? void 0 : t.parentMediaSessionId,
                                mute_soundboard: !b
                            });
                            a.Z.toggleLocalSoundboardMute(e, n)
                        },
                        checked: b
                    }, "soundboard-sound-mute");
                return t ? [(0, r.jsx)(o.MenuCheckboxItem, {
                    id: "mute",
                    label: M.Z.Messages.SOUND_MUTE,
                    action: function() {
                        return a.Z.toggleSelfMute({
                            context: n
                        })
                    },
                    checked: p
                }, "self-mute"), (0, r.jsx)(o.MenuCheckboxItem, {
                    id: "deafen",
                    label: M.Z.Messages.DEAFEN,
                    action: function() {
                        return a.Z.toggleSelfDeaf({
                            context: n
                        })
                    },
                    checked: _
                }, "self-deafen"), N] : [(0, r.jsx)(o.MenuCheckboxItem, {
                    id: "mute",
                    label: M.Z.Messages.SOUND_MUTE,
                    action: function() {
                        return a.Z.toggleLocalMute(e, n)
                    },
                    checked: p
                }, "self-mute"), I, N]
            }
        },
        234617: (e, n, t) => {
            t.d(n, {
                Z: () => m
            });
            var r = t(785893),
                i = (t(667294), t(202351)),
                o = t(70418),
                s = t(656645),
                a = t(602351),
                u = t(473903),
                l = t(615457),
                c = t(120415),
                d = t(36256),
                f = t(473708);

            function Z(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function g(e) {
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

            function m(e) {
                var n, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.Yn.DEFAULT,
                    Z = (0, i.e7)([a.Z], (function() {
                        return a.Z.getLocalVolume(e, t)
                    }), [e, t]),
                    m = e === (null === (n = u.default.getCurrentUser()) || void 0 === n ? void 0 : n.id),
                    M = t === d.Yn.STREAM;
                return m ? null : (0,
                    r.jsx)(o.MenuControlItem, {
                    id: "user-volume",
                    label: M ? f.Z.Messages.STREAM_VOLUME : f.Z.Messages.USER_VOLUME,
                    control: function(n, i) {
                        return (0, r.jsx)(o.MenuSliderControl, O(g({}, n), {
                            ref: i,
                            value: (0, l.P)(Z),
                            maxValue: c.FB ? 200 : 100,
                            onChange: function(n) {
                                return s.Z.setLocalVolume(e, (0, l.A)(n), t)
                            },
                            "aria-label": M ? f.Z.Messages.STREAM_VOLUME : f.Z.Messages.USER_VOLUME
                        }))
                    }
                })
            }
        }
    }
]);