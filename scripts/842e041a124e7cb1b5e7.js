"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [14136], {
        332349: (e, n, t) => {
            t.d(n, {
                Z: () => f
            });
            var i = t(785893),
                r = t(667294),
                l = t(202351),
                u = t(70418),
                o = t(577357),
                s = t(703790),
                a = t(567403),
                d = t(682776),
                c = t(2590),
                Z = t(473708),
                E = t(35637),
                M = t.n(E);

            function f(e, n, t) {
                var E = a.Z.getGuild(n),
                    f = (0, l.e7)([d.Z], (function() {
                        return null != E ? d.Z.can(c.Plq.MANAGE_GUILD, E) : null
                    })),
                    _ = r.useCallback((function() {
                        s.Z.open(n, c.pNK.INTEGRATIONS);
                        o.Z.setSection(c.b4C.APPLICATION, e.id)
                    }), [e.id, n]),
                    g = t === c.IlC.POPOUT;
                return e.bot && f && !g ? (0, i.jsx)(u.MenuItem, {
                    id: "manage-integration",
                    label: (0, i.jsx)("div", {
                        className: M().labelWrapper,
                        children: (0, i.jsx)("span", {
                            className: M().label,
                            children: Z.Z.Messages.MANAGE_INTEGRATION
                        })
                    }),
                    action: _
                }) : null
            }
        },
        575351: (e, n, t) => {
            t.d(n, {
                Z: () => g
            });
            var i = t(785893),
                r = (t(667294), t(202351)),
                l = t(70418),
                u = t(567403),
                o = t(473903),
                s = t(407561),
                a = t(771575),
                d = t(162723),
                c = t(933022),
                Z = t(664625),
                E = t(715107),
                M = t(525261);
            var f = t(499219),
                _ = t(473708);

            function g(e) {
                var n, t = (0,
                        f.Z)(),
                    g = null == t ? void 0 : t.id,
                    O = null == t ? void 0 : t.guild_id,
                    N = (0, r.e7)([u.Z], (function() {
                        return u.Z.getGuild(O)
                    }), [O]),
                    A = (0, r.e7)([s.Z], (function() {
                        return null != g ? s.Z.getVoiceStateForChannel(g, e.id) : null
                    }), [g, e.id]),
                    C = (null === (n = o.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) === e.id,
                    I = function() {
                        var e = (0, r.e7)([E.Z], (function() {
                                return E.Z.getVoiceChannelId()
                            })),
                            n = (0, r.e7)([Z.default], (function() {
                                return Z.default.getId()
                            }));
                        return (0, M.ZP)(n, e) === M.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
                    }(),
                    b = (0, r.e7)([c.ZP], (function() {
                        return c.ZP.getPermissionsForUser(e.id, g)
                    }), [g, e.id]),
                    h = (0, d.B)(g);
                if (null == t || null == N || null == A) return null;
                if (b.speaker) return null;
                var v = function() {
                    C ? (0, a.RK)(t, !1) : (0, a._0)(t, e.id)
                };
                return h ? (0, i.jsx)(l.MenuItem, {
                    id: "invite-speaker",
                    label: C ? _.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER : _.Z.Messages.STAGE_CHANNEL_USER_INVITE_TO_SPEAK,
                    action: v
                }) : I && C ? (0, i.jsx)(l.MenuItem, {
                    id: "invite-speaker",
                    label: _.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER,
                    action: v
                }) : null
            }
        },
        914136: (e, n, t) => {
            t.r(n);
            t.d(n, {
                default: () => H
            });
            var i = t(785893),
                r = (t(667294), t(70418)),
                l = t(971402),
                u = t(343639),
                o = t(567678),
                s = t(73904),
                a = t(82055),
                d = t(153686),
                c = t(950761),
                Z = t(492692),
                E = t(289150),
                M = t(737331),
                f = t(112897),
                _ = t(434651),
                g = t(332349),
                O = t(575351),
                N = t(202351),
                A = t(61209),
                C = t(567403),
                I = t(682776),
                b = t(473903),
                h = t(771575),
                v = t(933022),
                S = t(2590),
                U = t(473708);
            var T = t(662851),
                m = t(343315),
                p = t(171384),
                x = t(430198),
                P = t(699050),
                j = t(836448),
                L = t(441738),
                D = t(982348),
                R = t(578142),
                G = t(827991),
                V = t(93439),
                y = t(100856),
                k = t(598955),
                w = t(536130),
                B = t(973424),
                F = t(234617),
                Y = t(394212);
            const H = (0, o.Z)((0, u.Z)((function(e) {
                var n = e.user,
                    t = e.guildId,
                    u = e.channel,
                    o = e.showMediaItems,
                    d = void 0 !== o && o,
                    H = e.showChatItems,
                    q = void 0 === H || H,
                    K = e.showChannelCallItems,
                    W = void 0 !== K && K,
                    X = e.showModalItems,
                    z = void 0 === X || X,
                    Q = e.showStageChannelItems,
                    J = void 0 !== Q && Q,
                    $ = e.context,
                    ee = e.onSelect,
                    ne = e.onHeightUpdate,
                    te = (0, w.Z)(n.id, t, u.id),
                    ie = (0, G.Z)(n, t, $),
                    re = (0, V.Z)(n.id, $),
                    le = (0, Y.Z)(n.id),
                    ue = (0, L.Z)(n, $),
                    oe = (0, p.Z)({
                        user: n,
                        guildId: t,
                        context: $
                    }),
                    se = (0, m.Z)(n),
                    ae = (0, F.Z)(n.id),
                    de = (0, k.Z)(n.id),
                    ce = (0, _.Z)({
                        guildId: t,
                        userId: n.id,
                        analyticsLocation: {
                            page: S.ZY5.GUILD_CHANNEL,
                            section: S.jXE.CHAT_USERNAME,
                            object: S.qAy.CONTEXT_MENU_ITEM
                        },
                        context: $
                    }),
                    Ze = (0, R.Z)(n, t),
                    Ee = (0, a.Z)(null, n),
                    Me = (0, T.Z)(n),
                    fe = (0, j.Z)(n),
                    _e = (0, x.Z)(n, t, u.id),
                    ge = (0, B.Z)(n.id, t),
                    Oe = (0, y.Z)(n, t),
                    Ne = (0, f.Z)({
                        id: n.id,
                        label: U.Z.Messages.COPY_ID_USER
                    }),
                    Ae = (0, D.Z)(n.id, u.id),
                    Ce = (0, Z.Z)(n.id),
                    Ie = (0, c.Z)(u.id),
                    be = (0, O.Z)(n),
                    he = function(e, n, t) {
                        var l, u = A.Z.getChannel(t),
                            o = (0, N.e7)([C.Z], (function() {
                                return C.Z.getGuild(n)
                            }), [n]),
                            s = (0, N.e7)([v.ZP], (function() {
                                return v.ZP.getPermissionsForUser(e.id, t)
                            }), [t, e.id]),
                            a = (null === (l = b.default.getCurrentUser()) || void 0 === l ? void 0 : l.id) === e.id,
                            d = (0, N.e7)([I.Z], (function() {
                                return null != t && I.Z.canWithPartialContext(S.Plq.MUTE_MEMBERS, {
                                    channelId: t
                                })
                            }), [t]);
                        return null == u || null == o ? null : (d || a) && s.speaker ? (0, i.jsx)(r.MenuItem, {
                            id: "audience",
                            label: a ? U.Z.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE : U.Z.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE_OTHER,
                            action: function() {
                                a ? (0, h.yi)(u) : (0, h.hz)(e, u)
                            }
                        }) : null
                    }(n, t, u.id),
                    ve = (0, P.Z)({
                        commandType: s.yU.USER,
                        commandTargetId: n.id,
                        channel: u,
                        guildId: t,
                        location: "GuildChannelUserContextMenu",
                        onShow: ne
                    }),
                    Se = (0, E.Z)(n.id),
                    Ue = (0, g.Z)(n, t, $),
                    Te = n.isNonUserBot(),
                    me = n.isClyde(),
                    pe = (0, M.R8)();
                return (0, i.jsxs)(r.Menu, {
                    navId: "user-context",
                    onClose: l.Zy,
                    "aria-label": U.Z.Messages.USER_ACTIONS_MENU_LABEL,
                    onSelect: ee,
                    children: [!Te && (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsxs)(r.MenuGroup, {
                            children: [be, J && he]
                        }), (0, i.jsxs)(r.MenuGroup, {
                            children: [z && te, q && ie, re, ue, z && oe, z && se, le]
                        }), d && (0, i.jsx)(r.MenuGroup, {
                            children: ae
                        }), (0, i.jsx)(r.MenuGroup, {
                            children: z && Ee
                        }), (0, i.jsxs)(r.MenuGroup, {
                            children: [d && de, d && Ae, z && ce, ve, Ue, z && Ze, Me, z && fe, W && Se]
                        }), (0, i.jsx)(r.MenuGroup, {
                            children: _e
                        }), (0, i.jsxs)(r.MenuGroup, {
                            children: [ge, Oe]
                        }), W && (0, i.jsxs)(r.MenuGroup, {
                            children: [Ie, Ce]
                        })]
                    }), me && (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsxs)(r.MenuGroup, {
                            children: [z && te, pe && re]
                        }), (0, i.jsx)(r.MenuGroup, {
                            children: _e
                        })]
                    }), (0, i.jsx)(r.MenuGroup, {
                        children: Ne
                    })]
                })
            }), {
                object: S.qAy.CONTEXT_MENU
            }), [d.Z.CONTEXT_MENU, d.Z.GUILD_CHANNEL_USER_MENU])
        },
        982348: (e, n, t) => {
            t.d(n, {
                Z: () => c
            });
            var i = t(785893),
                r = (t(667294), t(202351)),
                l = t(70418),
                u = t(247250),
                o = t(347874),
                s = t(407561),
                a = t(2590),
                d = t(473708);

            function c(e, n) {
                var t = (0, r.e7)([o.Z], (function() {
                    return e === o.Z.getSelectedParticipantId(n)
                }), [n, e]);
                return (0, r.e7)([o.Z, s.Z], (function() {
                    var t = s.Z.isInChannel(n, e) && s.Z.hasVideo(n),
                        i = o.Z.getLayout(n),
                        r = i === a.AEg.MINIMUM || i === a.AEg.NORMAL;
                    return !t || r
                }), [n, e]) ? null : (0, i.jsx)(l.MenuItem, {
                    id: "focus-video",
                    label: t ? d.Z.Messages.UNFOCUS_PARTICIPANT : d.Z.Messages.FOCUS_PARTICIPANT,
                    action: function() {
                        return u.Z.selectParticipant(n, t ? null : e)
                    }
                })
            }
        },
        93439: (e, n, t) => {
            t.d(n, {
                Z: () => d
            });
            var i = t(785893),
                r = (t(667294), t(70418)),
                l = t(761953),
                u = t(735885),
                o = t(664625),
                s = t(2590),
                a = t(473708);

            function d(e, n) {
                var t = o.default.getId(),
                    d = n === s.IlC.POPOUT;
                return t === e || d ? null : (0, i.jsx)(r.MenuItem, {
                    id: "message-user",
                    label: a.Z.Messages.USER_POPOUT_MESSAGE,
                    action: function() {
                        l.Z.openPrivateChannel(e);
                        (0, u.xf)()
                    }
                })
            }
        },
        100856: (e, n, t) => {
            t.d(n, {
                Z: () => I
            });
            var i = t(785893),
                r = (t(667294), t(202351)),
                l = t(70418),
                u = t(327499),
                o = t(116404),
                s = t(773011),
                a = t(664625),
                d = t(61209),
                c = t(5544),
                Z = t(21372),
                E = t(567403),
                M = t(682776),
                f = t(840922),
                _ = t(473903),
                g = t(407561),
                O = t(176758),
                N = t(563135),
                A = t(2590),
                C = t(473708);

            function I(e, n) {
                var t = (0, r.e7)([c.ZP], (function() {
                        return c.ZP.getChannels(n)[c.Zb]
                    }), [n]),
                    I = (0, r.e7)([g.Z, d.Z], (function() {
                        var t = g.Z.getUserVoiceChannelId(n, e.id);
                        return d.Z.getChannel(t)
                    }), [n, e.id]);
                if ((0, r.e7)([Z.ZP], (function() {
                        return Z.ZP.isGuestOrLurker(n, e.id)
                    }), [n, e.id])) return null;
                if (null == I) return null;
                var b = e.id === a.default.getId();
                if (!b && !M.Z.can(A.Plq.MOVE_MEMBERS, I)) return null;
                var h = t.filter((function(n) {
                    var t = n.channel;
                    return t.id !== I.id && (b ? M.Z.can(A.Plq.CONNECT, t) && !(0,
                        O.rY)(t, g.Z, E.Z) : M.Z.can(A.Plq.MOVE_MEMBERS, t) && (M.Z.can(A.Plq.CONNECT, t) || N.ZP.can({
                        permission: A.Plq.CONNECT,
                        user: e,
                        context: t
                    })) && !(0, O.rY)(t, g.Z, E.Z))
                }));
                return 0 === h.length ? null : (0, i.jsx)(l.MenuItem, {
                    id: "voice-move",
                    label: C.Z.Messages.MOVE_TO,
                    children: h.map((function(t) {
                        var r = t.channel;
                        return (0, i.jsx)(l.MenuItem, {
                            id: r.id,
                            action: function() {
                                return function(t) {
                                    e.id === a.default.getId() ? o.default.selectVoiceChannel(t.id) : u.Z.setChannel(n, e.id, t.id)
                                }(r)
                            },
                            label: (0, s.F6)(r, _.default, f.Z)
                        }, r.id)
                    }))
                })
            }
        },
        598955: (e, n, t) => {
            t.d(n, {
                Z: () => A
            });
            var i = t(785893),
                r = (t(667294), t(202351)),
                l = t(70418),
                u = t(105783),
                o = t(656645),
                s = t(656907),
                a = t(602351),
                d = t(563367),
                c = t(464187),
                Z = t(473903),
                E = t(818417),
                M = t(652591),
                f = t(2590),
                _ = t(36256),
                g = t(473708),
                O = t(870726),
                N = t.n(O);

            function A(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _.Yn.DEFAULT,
                    t = (0, r.e7)([Z.default], (function() {
                        var n;
                        return (null === (n = Z.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) === e
                    })),
                    O = (0, r.e7)([s.Z], (function() {
                        return s.Z.isLocalSoundboardMuted(e)
                    })),
                    A = (0, r.cj)([a.Z], (function() {
                        return t ? {
                            muted: a.Z.isSelfMute(n),
                            deafened: a.Z.isSelfDeaf(n)
                        } : {
                            muted: a.Z.isLocalMute(e, n),
                            localVideoDisabled: a.Z.isLocalVideoDisabled(e, n),
                            localVideoAutoDisabled: a.Z.isLocalVideoAutoDisabled(e, n)
                        }
                    }), [t, n, e]),
                    C = A.muted,
                    I = A.deafened,
                    b = void 0 !== I && I,
                    h = A.localVideoDisabled,
                    v = void 0 !== h && h,
                    S = A.localVideoAutoDisabled,
                    U = void 0 !== S && S,
                    T = a.Z.supports(_.AN.DISABLE_VIDEO) && !t ? (0, i.jsx)(l.MenuCheckboxItem, {
                        id: "disable-video",
                        label: g.Z.Messages.DISABLE_VIDEO,
                        action: function() {
                            if (U) u.Z.show({
                                title: g.Z.Messages.UNSTABLE_CONNECTION,
                                body: g.Z.Messages.UNSTABLE_CONNECTION_REASON_2,
                                confirmText: g.Z.Messages.TURN_ON_VIDEO_ANYWAY,
                                cancelText: g.Z.Messages.LEAVE_VIDEO_OFF,
                                onConfirm: function() {
                                    return o.Z.setDisableLocalVideo(e, f.ZUi.MANUAL_ENABLED)
                                }
                            });
                            else {
                                var t = v ? f.ZUi.MANUAL_ENABLED : f.ZUi.DISABLED;
                                o.Z.setDisableLocalVideo(e, t, n)
                            }
                        },
                        checked: v,
                        subtext: U ? (0, i.jsxs)("div", {
                            className: N().videoPaused,
                            children: [(0, i.jsx)(E.Z, {
                                width: 12,
                                className: N().warningCircle
                            }), g.Z.Messages.UNSTABLE_CONNECTION]
                        }) : null
                    }, "disable-video") : null,
                    m = t ? null : (0, i.jsx)(l.MenuCheckboxItem, {
                        id: "soundboard-sound-mute",
                        label: g.Z.Messages.MUTE_SOUNDBOARD,
                        action: function() {
                            var t = d.Z.getRTCConnection();
                            M.default.track(f.rMx.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                                guild_id: c.Z.getGuildId(),
                                target_user_id: e,
                                media_session_id: null == t ? void 0 : t.getMediaSessionId(),
                                parent_media_session_id: null == t ? void 0 : t.parentMediaSessionId,
                                mute_soundboard: !O
                            });
                            o.Z.toggleLocalSoundboardMute(e, n)
                        },
                        checked: O
                    }, "soundboard-sound-mute");
                return t ? [(0, i.jsx)(l.MenuCheckboxItem, {
                    id: "mute",
                    label: g.Z.Messages.SOUND_MUTE,
                    action: function() {
                        return o.Z.toggleSelfMute({
                            context: n
                        })
                    },
                    checked: C
                }, "self-mute"), (0, i.jsx)(l.MenuCheckboxItem, {
                    id: "deafen",
                    label: g.Z.Messages.DEAFEN,
                    action: function() {
                        return o.Z.toggleSelfDeaf({
                            context: n
                        })
                    },
                    checked: b
                }, "self-deafen"), T] : [(0, i.jsx)(l.MenuCheckboxItem, {
                    id: "mute",
                    label: g.Z.Messages.SOUND_MUTE,
                    action: function() {
                        return o.Z.toggleLocalMute(e, n)
                    },
                    checked: C
                }, "self-mute"), m, T]
            }
        },
        234617: (e, n, t) => {
            t.d(n, {
                Z: () => _
            });
            var i = t(785893),
                r = (t(667294), t(202351)),
                l = t(70418),
                u = t(656645),
                o = t(602351),
                s = t(473903),
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

            function f(e, n) {
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

            function _(e) {
                var n, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.Yn.DEFAULT,
                    E = (0, r.e7)([o.Z], (function() {
                        return o.Z.getLocalVolume(e, t)
                    }), [e, t]),
                    _ = e === (null === (n = s.default.getCurrentUser()) || void 0 === n ? void 0 : n.id),
                    g = t === c.Yn.STREAM;
                return _ ? null : (0, i.jsx)(l.MenuControlItem, {
                    id: "user-volume",
                    label: g ? Z.Z.Messages.STREAM_VOLUME : Z.Z.Messages.USER_VOLUME,
                    control: function(n, r) {
                        return (0, i.jsx)(l.MenuSliderControl, f(M({}, n), {
                            ref: r,
                            value: (0, a.P)(E),
                            maxValue: d.FB ? 200 : 100,
                            onChange: function(n) {
                                return u.Z.setLocalVolume(e, (0, a.A)(n), t)
                            },
                            "aria-label": g ? Z.Z.Messages.STREAM_VOLUME : Z.Z.Messages.USER_VOLUME
                        }))
                    }
                })
            }
        }
    }
]);