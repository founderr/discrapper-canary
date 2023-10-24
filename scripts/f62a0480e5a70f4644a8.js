"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [14136], {
        332349: (e, n, t) => {
            t.d(n, {
                Z: () => _
            });
            var i = t(785893),
                r = t(667294),
                o = t(202351),
                l = t(70418),
                s = t(577357),
                u = t(703790),
                a = t(567403),
                d = t(682776),
                c = t(2590),
                Z = t(473708),
                E = t(35637),
                M = t.n(E);

            function _(e, n, t) {
                var E = a.Z.getGuild(n),
                    _ = (0, o.e7)([d.Z], (function() {
                        return null != E ? d.Z.can(c.Plq.MANAGE_GUILD, E) : null
                    })),
                    f = r.useCallback((function() {
                        u.Z.open(n, c.pNK.INTEGRATIONS);
                        s.Z.setSection(c.b4C.APPLICATION, e.id)
                    }), [e.id, n]),
                    g = t === c.IlC.POPOUT;
                return e.bot && _ && !g ? (0, i.jsx)(l.MenuItem, {
                    id: "manage-integration",
                    label: (0, i.jsx)("div", {
                        className: M().labelWrapper,
                        children: (0, i.jsx)("span", {
                            className: M().label,
                            children: Z.Z.Messages.MANAGE_INTEGRATION
                        })
                    }),
                    action: f
                }) : null
            }
        },
        575351: (e, n, t) => {
            t.d(n, {
                Z: () => g
            });
            var i = t(785893),
                r = (t(667294), t(202351)),
                o = t(70418),
                l = t(567403),
                s = t(473903),
                u = t(407561),
                a = t(771575),
                d = t(162723),
                c = t(933022),
                Z = t(664625),
                E = t(715107),
                M = t(525261);
            var _ = t(499219),
                f = t(473708);

            function g(e) {
                var n, t = (0,
                        _.Z)(),
                    g = null == t ? void 0 : t.id,
                    A = null == t ? void 0 : t.guild_id,
                    N = (0, r.e7)([l.Z], (function() {
                        return l.Z.getGuild(A)
                    }), [A]),
                    O = (0, r.e7)([u.Z], (function() {
                        return null != g ? u.Z.getVoiceStateForChannel(g, e.id) : null
                    }), [g, e.id]),
                    b = (null === (n = s.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) === e.id,
                    I = function() {
                        var e = (0, r.e7)([E.Z], (function() {
                                return E.Z.getVoiceChannelId()
                            })),
                            n = (0, r.e7)([Z.default], (function() {
                                return Z.default.getId()
                            }));
                        return (0, M.ZP)(n, e) === M.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
                    }(),
                    S = (0, r.e7)([c.ZP], (function() {
                        return c.ZP.getPermissionsForUser(e.id, g)
                    }), [g, e.id]),
                    U = (0, d.B)(g);
                if (null == t || null == N || null == O) return null;
                if (S.speaker) return null;
                var h = function() {
                    b ? (0, a.RK)(t, !1) : (0, a._0)(t, e.id)
                };
                return U ? (0, i.jsx)(o.MenuItem, {
                    id: "invite-speaker",
                    label: b ? f.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER : f.Z.Messages.STAGE_CHANNEL_USER_INVITE_TO_SPEAK,
                    action: h
                }) : I && b ? (0, i.jsx)(o.MenuItem, {
                    id: "invite-speaker",
                    label: f.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER,
                    action: h
                }) : null
            }
        },
        914136: (e, n, t) => {
            t.r(n);
            t.d(n, {
                default: () => Y
            });
            var i = t(785893),
                r = (t(667294), t(70418)),
                o = t(971402),
                l = t(343639),
                s = t(567678),
                u = t(73904),
                a = t(82055),
                d = t(153686),
                c = t(950761),
                Z = t(492692),
                E = t(289150),
                M = t(737331),
                _ = t(112897),
                f = t(434651),
                g = t(332349),
                A = t(575351),
                N = t(202351),
                O = t(61209),
                b = t(567403),
                I = t(682776),
                S = t(473903),
                U = t(771575),
                h = t(933022),
                C = t(2590),
                v = t(473708);
            var T = t(662851),
                p = t(343315),
                m = t(171384),
                j = t(430198),
                x = t(699050),
                L = t(836448),
                D = t(441738),
                P = t(982348),
                R = t(578142),
                G = t(827991),
                y = t(93439),
                V = t(100856),
                k = t(598955),
                w = t(536130),
                B = t(973424),
                F = t(234617),
                H = t(394212);
            const Y = (0, s.Z)((0, l.Z)((function(e) {
                var n = e.user,
                    t = e.guildId,
                    l = e.channel,
                    s = e.showMediaItems,
                    d = void 0 !== s && s,
                    Y = e.showChatItems,
                    K = void 0 === Y || Y,
                    q = e.showChannelCallItems,
                    W = void 0 !== q && q,
                    X = e.showModalItems,
                    z = void 0 === X || X,
                    Q = e.showStageChannelItems,
                    J = void 0 !== Q && Q,
                    $ = e.context,
                    ee = e.onSelect,
                    ne = e.onHeightUpdate,
                    te = (0, w.Z)(n.id, t, l.id),
                    ie = (0, G.Z)(n, t, $),
                    re = (0, y.Z)(n.id, $),
                    oe = (0, H.Z)(n.id),
                    le = (0, D.Z)(n, $),
                    se = (0, m.Z)({
                        user: n,
                        guildId: t,
                        context: $
                    }),
                    ue = (0, p.Z)(n),
                    ae = (0, F.Z)(n.id),
                    de = (0, k.Z)(n.id),
                    ce = (0, f.Z)({
                        guildId: t,
                        userId: n.id,
                        analyticsLocation: {
                            page: C.ZY5.GUILD_CHANNEL,
                            section: C.jXE.CHAT_USERNAME,
                            object: C.qAy.CONTEXT_MENU_ITEM
                        },
                        context: $
                    }),
                    Ze = (0, R.Z)(n, t),
                    Ee = (0, a.Z)(null, n),
                    Me = (0, T.Z)(n),
                    _e = (0, L.Z)(n),
                    fe = (0, j.Z)(n, t, l.id),
                    ge = (0, B.Z)(n.id, t),
                    Ae = (0, V.Z)(n, t),
                    Ne = (0, _.Z)({
                        id: n.id,
                        label: v.Z.Messages.COPY_ID_USER
                    }),
                    Oe = (0, P.Z)(n.id, l.id),
                    be = (0, Z.Z)(n.id),
                    Ie = (0, c.Z)(l.id),
                    Se = (0, A.Z)(n),
                    Ue = function(e, n, t) {
                        var o, l = O.Z.getChannel(t),
                            s = (0, N.e7)([b.Z], (function() {
                                return b.Z.getGuild(n)
                            }), [n]),
                            u = (0, N.e7)([h.ZP], (function() {
                                return h.ZP.getPermissionsForUser(e.id, t)
                            }), [t, e.id]),
                            a = (null === (o = S.default.getCurrentUser()) || void 0 === o ? void 0 : o.id) === e.id,
                            d = (0, N.e7)([I.Z], (function() {
                                return null != t && I.Z.canWithPartialContext(C.Plq.MUTE_MEMBERS, {
                                    channelId: t
                                })
                            }), [t]);
                        return null == l || null == s ? null : (d || a) && u.speaker ? (0, i.jsx)(r.MenuItem, {
                            id: "audience",
                            label: a ? v.Z.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE : v.Z.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE_OTHER,
                            action: function() {
                                a ? (0, U.yi)(l) : (0, U.hz)(e, l)
                            }
                        }) : null
                    }(n, t, l.id),
                    he = (0, x.Z)({
                        commandType: u.yU.USER,
                        commandTargetId: n.id,
                        channel: l,
                        guildId: t,
                        location: "GuildChannelUserContextMenu",
                        onShow: ne
                    }),
                    Ce = (0, E.Z)(n.id),
                    ve = (0, g.Z)(n, t, $),
                    Te = n.isNonUserBot(),
                    pe = n.isClyde(),
                    me = (0, M.R8)();
                return (0, i.jsxs)(r.Menu, {
                    navId: "user-context",
                    onClose: o.Zy,
                    "aria-label": v.Z.Messages.USER_ACTIONS_MENU_LABEL,
                    onSelect: ee,
                    children: [!Te && (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsxs)(r.MenuGroup, {
                            children: [Se, J && Ue]
                        }), (0, i.jsxs)(r.MenuGroup, {
                            children: [z && te, K && ie, re, le, z && se, z && ue, oe]
                        }), d && (0, i.jsx)(r.MenuGroup, {
                            children: ae
                        }), (0, i.jsx)(r.MenuGroup, {
                            children: z && Ee
                        }), (0, i.jsxs)(r.MenuGroup, {
                            children: [d && de, d && Oe, z && ce, he, ve, z && Ze, Me, z && _e, W && Ce]
                        }), (0, i.jsx)(r.MenuGroup, {
                            children: fe
                        }), (0, i.jsxs)(r.MenuGroup, {
                            children: [ge, Ae]
                        }), W && (0, i.jsxs)(r.MenuGroup, {
                            children: [Ie, be]
                        })]
                    }), pe && (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsxs)(r.MenuGroup, {
                            children: [z && te, me && re]
                        }), (0, i.jsx)(r.MenuGroup, {
                            children: fe
                        })]
                    }), (0, i.jsx)(r.MenuGroup, {
                        children: Ne
                    })]
                })
            }), {
                object: C.qAy.CONTEXT_MENU
            }), [d.Z.CONTEXT_MENU, d.Z.GUILD_CHANNEL_USER_MENU])
        },
        982348: (e, n, t) => {
            t.d(n, {
                Z: () => c
            });
            var i = t(785893),
                r = (t(667294), t(202351)),
                o = t(70418),
                l = t(247250),
                s = t(347874),
                u = t(407561),
                a = t(2590),
                d = t(473708);

            function c(e, n) {
                var t = (0, r.e7)([s.Z], (function() {
                    return e === s.Z.getSelectedParticipantId(n)
                }), [n, e]);
                return (0, r.e7)([s.Z, u.Z], (function() {
                    var t = u.Z.isInChannel(n, e) && u.Z.hasVideo(n),
                        i = s.Z.getLayout(n),
                        r = i === a.AEg.MINIMUM || i === a.AEg.NORMAL;
                    return !t || r
                }), [n, e]) ? null : (0, i.jsx)(o.MenuItem, {
                    id: "focus-video",
                    label: t ? d.Z.Messages.UNFOCUS_PARTICIPANT : d.Z.Messages.FOCUS_PARTICIPANT,
                    action: function() {
                        return l.Z.selectParticipant(n, t ? null : e)
                    }
                })
            }
        },
        598955: (e, n, t) => {
            t.d(n, {
                Z: () => O
            });
            var i = t(785893),
                r = (t(667294),
                    t(202351)),
                o = t(70418),
                l = t(105783),
                s = t(656645),
                u = t(656907),
                a = t(602351),
                d = t(563367),
                c = t(464187),
                Z = t(473903),
                E = t(818417),
                M = t(652591),
                _ = t(2590),
                f = t(36256),
                g = t(473708),
                A = t(870726),
                N = t.n(A);

            function O(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.Yn.DEFAULT,
                    t = (0, r.e7)([Z.default], (function() {
                        var n;
                        return (null === (n = Z.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) === e
                    })),
                    A = (0, r.e7)([u.Z], (function() {
                        return u.Z.isLocalSoundboardMuted(e)
                    })),
                    O = (0, r.cj)([a.Z], (function() {
                        return t ? {
                            muted: a.Z.isSelfMute(n),
                            deafened: a.Z.isSelfDeaf(n)
                        } : {
                            muted: a.Z.isLocalMute(e, n),
                            localVideoDisabled: a.Z.isLocalVideoDisabled(e, n),
                            localVideoAutoDisabled: a.Z.isLocalVideoAutoDisabled(e, n)
                        }
                    }), [t, n, e]),
                    b = O.muted,
                    I = O.deafened,
                    S = void 0 !== I && I,
                    U = O.localVideoDisabled,
                    h = void 0 !== U && U,
                    C = O.localVideoAutoDisabled,
                    v = void 0 !== C && C,
                    T = a.Z.supports(f.AN.DISABLE_VIDEO) && !t ? (0, i.jsx)(o.MenuCheckboxItem, {
                        id: "disable-video",
                        label: g.Z.Messages.DISABLE_VIDEO,
                        action: function() {
                            if (v) l.Z.show({
                                title: g.Z.Messages.UNSTABLE_CONNECTION,
                                body: g.Z.Messages.UNSTABLE_CONNECTION_REASON_2,
                                confirmText: g.Z.Messages.TURN_ON_VIDEO_ANYWAY,
                                cancelText: g.Z.Messages.LEAVE_VIDEO_OFF,
                                onConfirm: function() {
                                    return s.Z.setDisableLocalVideo(e, _.ZUi.MANUAL_ENABLED)
                                }
                            });
                            else {
                                var t = h ? _.ZUi.MANUAL_ENABLED : _.ZUi.DISABLED;
                                s.Z.setDisableLocalVideo(e, t, n)
                            }
                        },
                        checked: h,
                        subtext: v ? (0, i.jsxs)("div", {
                            className: N().videoPaused,
                            children: [(0, i.jsx)(E.Z, {
                                width: 12,
                                className: N().warningCircle
                            }), g.Z.Messages.UNSTABLE_CONNECTION]
                        }) : null
                    }, "disable-video") : null,
                    p = t ? null : (0, i.jsx)(o.MenuCheckboxItem, {
                        id: "soundboard-sound-mute",
                        label: g.Z.Messages.MUTE_SOUNDBOARD,
                        action: function() {
                            var t = d.Z.getRTCConnection();
                            M.default.track(_.rMx.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                                guild_id: c.Z.getGuildId(),
                                target_user_id: e,
                                media_session_id: null == t ? void 0 : t.getMediaSessionId(),
                                parent_media_session_id: null == t ? void 0 : t.parentMediaSessionId,
                                mute_soundboard: !A
                            });
                            s.Z.toggleLocalSoundboardMute(e, n)
                        },
                        checked: A
                    }, "soundboard-sound-mute");
                return t ? [(0,
                    i.jsx)(o.MenuCheckboxItem, {
                    id: "mute",
                    label: g.Z.Messages.SOUND_MUTE,
                    action: function() {
                        return s.Z.toggleSelfMute({
                            context: n
                        })
                    },
                    checked: b
                }, "self-mute"), (0, i.jsx)(o.MenuCheckboxItem, {
                    id: "deafen",
                    label: g.Z.Messages.DEAFEN,
                    action: function() {
                        return s.Z.toggleSelfDeaf({
                            context: n
                        })
                    },
                    checked: S
                }, "self-deafen"), T] : [(0, i.jsx)(o.MenuCheckboxItem, {
                    id: "mute",
                    label: g.Z.Messages.SOUND_MUTE,
                    action: function() {
                        return s.Z.toggleLocalMute(e, n)
                    },
                    checked: b
                }, "self-mute"), p, T]
            }
        },
        234617: (e, n, t) => {
            t.d(n, {
                Z: () => f
            });
            var i = t(785893),
                r = (t(667294), t(202351)),
                o = t(70418),
                l = t(656645),
                s = t(602351),
                u = t(473903),
                a = t(615457),
                d = t(120415),
                c = t(36256),
                Z = t(473708);

            function E(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function M(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        i = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    i.forEach((function(n) {
                        E(e, n, t[n])
                    }))
                }
                return e
            }

            function _(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        n && (i = i.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, i)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function f(e) {
                var n, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.Yn.DEFAULT,
                    E = (0, r.e7)([s.Z], (function() {
                        return s.Z.getLocalVolume(e, t)
                    }), [e, t]),
                    f = e === (null === (n = u.default.getCurrentUser()) || void 0 === n ? void 0 : n.id),
                    g = t === c.Yn.STREAM;
                return f ? null : (0, i.jsx)(o.MenuControlItem, {
                    id: "user-volume",
                    label: g ? Z.Z.Messages.STREAM_VOLUME : Z.Z.Messages.USER_VOLUME,
                    control: function(n, r) {
                        return (0, i.jsx)(o.MenuSliderControl, _(M({}, n), {
                            ref: r,
                            value: (0, a.P)(E),
                            maxValue: d.FB ? 200 : 100,
                            onChange: function(n) {
                                return l.Z.setLocalVolume(e, (0, a.A)(n), t)
                            },
                            "aria-label": g ? Z.Z.Messages.STREAM_VOLUME : Z.Z.Messages.USER_VOLUME
                        }))
                    }
                })
            }
        }
    }
]);