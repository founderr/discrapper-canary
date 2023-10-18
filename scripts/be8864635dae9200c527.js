"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [10545], {
        332349: (e, n, t) => {
            t.d(n, {
                Z: () => E
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
                f = t(35637),
                M = t.n(f);

            function E(e, n, t) {
                var f = a.Z.getGuild(n),
                    E = (0, o.e7)([d.Z], (function() {
                        return null != f ? d.Z.can(c.Plq.MANAGE_GUILD, f) : null
                    })),
                    O = r.useCallback((function() {
                        u.Z.open(n, c.pNK.INTEGRATIONS);
                        s.Z.setSection(c.b4C.APPLICATION, e.id)
                    }), [e.id, n]),
                    b = t === c.IlC.POPOUT;
                return e.bot && E && !b ? (0, i.jsx)(l.MenuItem, {
                    id: "manage-integration",
                    label: (0, i.jsx)("div", {
                        className: M().labelWrapper,
                        children: (0, i.jsx)("span", {
                            className: M().label,
                            children: Z.Z.Messages.MANAGE_INTEGRATION
                        })
                    }),
                    action: O
                }) : null
            }
        },
        810545: (e, n, t) => {
            t.r(n);
            t.d(n, {
                default: () => S
            });
            var i = t(785893),
                r = (t(667294),
                    t(70418)),
                o = t(971402),
                l = t(343639),
                s = t(567678),
                u = t(82055),
                a = t(153686),
                d = t(112897),
                c = t(434651),
                Z = t(332349),
                f = t(662851),
                M = t(343315),
                E = t(171384),
                O = t(430198),
                b = t(836448),
                g = t(441738),
                N = t(578142),
                _ = t(827991),
                h = t(93439),
                v = t(100856),
                I = t(598955),
                C = t(536130),
                m = t(973424),
                p = t(234617),
                A = t(394212),
                U = t(2590),
                j = t(473708);
            const S = (0, s.Z)((0, l.Z)((function(e) {
                var n = e.user,
                    t = e.guildId,
                    l = e.showModalItems,
                    s = void 0 === l || l,
                    a = e.showMediaItems,
                    S = void 0 !== a && a,
                    x = e.showChatItems,
                    T = void 0 === x || x,
                    D = e.context,
                    L = e.onSelect,
                    P = (0, C.Z)(n.id, t),
                    V = (0, _.Z)(n, t, D),
                    y = (0, h.Z)(n.id, D),
                    G = (0, A.Z)(n.id),
                    k = (0, g.Z)(n, D),
                    R = (0, E.Z)({
                        user: n,
                        guildId: t,
                        context: D
                    }),
                    w = (0, M.Z)(n),
                    B = (0, p.Z)(n.id),
                    Y = (0, I.Z)(n.id),
                    q = (0, c.Z)({
                        guildId: t,
                        userId: n.id,
                        analyticsLocation: {
                            page: U.ZY5.GUILD_CHANNEL,
                            section: U.jXE.CHAT_USERNAME,
                            object: U.qAy.CONTEXT_MENU_ITEM
                        },
                        context: D
                    }),
                    F = (0, Z.Z)(n, t),
                    X = (0, N.Z)(n, t),
                    H = (0, u.Z)(null, n),
                    W = (0, f.Z)(n),
                    K = (0, b.Z)(n),
                    z = (0, O.Z)(n, t),
                    J = (0, m.Z)(n.id, t),
                    Q = (0, v.Z)(n, t),
                    $ = (0, d.Z)({
                        id: n.id,
                        label: j.Z.Messages.COPY_ID_USER
                    }),
                    ee = n.isNonUserBot();
                return (0, i.jsxs)(r.Menu, {
                    navId: "user-context",
                    onClose: o.Zy,
                    "aria-label": j.Z.Messages.USER_ACTIONS_MENU_LABEL,
                    onSelect: L,
                    children: [!ee && (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsxs)(r.MenuGroup, {
                            children: [s && P, T && V, y, k, s && R, s && w, G]
                        }), S && (0, i.jsx)(r.MenuGroup, {
                            children: B
                        }), (0, i.jsx)(r.MenuGroup, {
                            children: s && H
                        }), (0, i.jsxs)(r.MenuGroup, {
                            children: [S && Y, s && q, s && X, W, F, s && K]
                        }), (0, i.jsx)(r.MenuGroup, {
                            children: z
                        }), (0, i.jsxs)(r.MenuGroup, {
                            children: [J, Q]
                        })]
                    }), (0, i.jsx)(r.MenuGroup, {
                        children: $
                    })]
                })
            }), {
                object: U.qAy.CONTEXT_MENU
            }), [a.Z.CONTEXT_MENU, a.Z.GUILD_USER_MENU])
        },
        93439: (e, n, t) => {
            t.d(n, {
                Z: () => d
            });
            var i = t(785893),
                r = (t(667294), t(70418)),
                o = t(761953),
                l = t(735885),
                s = t(664625),
                u = t(2590),
                a = t(473708);

            function d(e, n) {
                var t = s.default.getId(),
                    d = n === u.IlC.POPOUT;
                return t === e || d ? null : (0, i.jsx)(r.MenuItem, {
                    id: "message-user",
                    label: a.Z.Messages.USER_POPOUT_MESSAGE,
                    action: function() {
                        o.Z.openPrivateChannel(e);
                        (0, l.xf)()
                    }
                })
            }
        },
        100856: (e, n, t) => {
            t.d(n, {
                Z: () => v
            });
            var i = t(785893),
                r = (t(667294),
                    t(202351)),
                o = t(70418),
                l = t(327499),
                s = t(116404),
                u = t(773011),
                a = t(664625),
                d = t(61209),
                c = t(5544),
                Z = t(21372),
                f = t(567403),
                M = t(682776),
                E = t(840922),
                O = t(473903),
                b = t(407561),
                g = t(176758),
                N = t(563135),
                _ = t(2590),
                h = t(473708);

            function v(e, n) {
                var t = (0, r.e7)([c.ZP], (function() {
                        return c.ZP.getChannels(n)[c.Zb]
                    }), [n]),
                    v = (0, r.e7)([b.Z, d.Z], (function() {
                        var t = b.Z.getUserVoiceChannelId(n, e.id);
                        return d.Z.getChannel(t)
                    }), [n, e.id]);
                if ((0, r.e7)([Z.ZP], (function() {
                        return Z.ZP.isGuestOrLurker(n, e.id)
                    }), [n, e.id])) return null;
                if (null == v) return null;
                var I = e.id === a.default.getId();
                if (!I && !M.Z.can(_.Plq.MOVE_MEMBERS, v)) return null;
                var C = t.filter((function(n) {
                    var t = n.channel;
                    return t.id !== v.id && (I ? M.Z.can(_.Plq.CONNECT, t) && !(0, g.rY)(t, b.Z, f.Z) : M.Z.can(_.Plq.MOVE_MEMBERS, t) && (M.Z.can(_.Plq.CONNECT, t) || N.ZP.can({
                        permission: _.Plq.CONNECT,
                        user: e,
                        context: t
                    })) && !(0, g.rY)(t, b.Z, f.Z))
                }));
                return 0 === C.length ? null : (0, i.jsx)(o.MenuItem, {
                    id: "voice-move",
                    label: h.Z.Messages.MOVE_TO,
                    children: C.map((function(t) {
                        var r = t.channel;
                        return (0,
                            i.jsx)(o.MenuItem, {
                            id: r.id,
                            action: function() {
                                return function(t) {
                                    e.id === a.default.getId() ? s.default.selectVoiceChannel(t.id) : l.Z.setChannel(n, e.id, t.id)
                                }(r)
                            },
                            label: (0, u.F6)(r, O.default, E.Z)
                        }, r.id)
                    }))
                })
            }
        },
        598955: (e, n, t) => {
            t.d(n, {
                Z: () => _
            });
            var i = t(785893),
                r = (t(667294), t(202351)),
                o = t(70418),
                l = t(105783),
                s = t(656645),
                u = t(656907),
                a = t(602351),
                d = t(563367),
                c = t(464187),
                Z = t(473903),
                f = t(818417),
                M = t(652591),
                E = t(2590),
                O = t(36256),
                b = t(473708),
                g = t(870726),
                N = t.n(g);

            function _(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O.Yn.DEFAULT,
                    t = (0, r.e7)([Z.default], (function() {
                        var n;
                        return (null === (n = Z.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) === e
                    })),
                    g = (0, r.e7)([u.Z], (function() {
                        return u.Z.isLocalSoundboardMuted(e)
                    })),
                    _ = (0, r.cj)([a.Z], (function() {
                        return t ? {
                            muted: a.Z.isSelfMute(n),
                            deafened: a.Z.isSelfDeaf(n)
                        } : {
                            muted: a.Z.isLocalMute(e, n),
                            localVideoDisabled: a.Z.isLocalVideoDisabled(e, n),
                            localVideoAutoDisabled: a.Z.isLocalVideoAutoDisabled(e, n)
                        }
                    }), [t, n, e]),
                    h = _.muted,
                    v = _.deafened,
                    I = void 0 !== v && v,
                    C = _.localVideoDisabled,
                    m = void 0 !== C && C,
                    p = _.localVideoAutoDisabled,
                    A = void 0 !== p && p,
                    U = a.Z.supports(O.AN.DISABLE_VIDEO) && !t ? (0, i.jsx)(o.MenuCheckboxItem, {
                        id: "disable-video",
                        label: b.Z.Messages.DISABLE_VIDEO,
                        action: function() {
                            if (A) l.Z.show({
                                title: b.Z.Messages.UNSTABLE_CONNECTION,
                                body: b.Z.Messages.UNSTABLE_CONNECTION_REASON_2,
                                confirmText: b.Z.Messages.TURN_ON_VIDEO_ANYWAY,
                                cancelText: b.Z.Messages.LEAVE_VIDEO_OFF,
                                onConfirm: function() {
                                    return s.Z.setDisableLocalVideo(e, E.ZUi.MANUAL_ENABLED)
                                }
                            });
                            else {
                                var t = m ? E.ZUi.MANUAL_ENABLED : E.ZUi.DISABLED;
                                s.Z.setDisableLocalVideo(e, t, n)
                            }
                        },
                        checked: m,
                        subtext: A ? (0, i.jsxs)("div", {
                            className: N().videoPaused,
                            children: [(0, i.jsx)(f.Z, {
                                width: 12,
                                className: N().warningCircle
                            }), b.Z.Messages.UNSTABLE_CONNECTION]
                        }) : null
                    }, "disable-video") : null,
                    j = t ? null : (0, i.jsx)(o.MenuCheckboxItem, {
                        id: "soundboard-sound-mute",
                        label: b.Z.Messages.MUTE_SOUNDBOARD,
                        action: function() {
                            var t = d.Z.getRTCConnection();
                            M.default.track(E.rMx.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                                guild_id: c.Z.getGuildId(),
                                target_user_id: e,
                                media_session_id: null == t ? void 0 : t.getMediaSessionId(),
                                parent_media_session_id: null == t ? void 0 : t.parentMediaSessionId,
                                mute_soundboard: !g
                            });
                            s.Z.toggleLocalSoundboardMute(e, n)
                        },
                        checked: g
                    }, "soundboard-sound-mute");
                return t ? [(0, i.jsx)(o.MenuCheckboxItem, {
                    id: "mute",
                    label: b.Z.Messages.SOUND_MUTE,
                    action: function() {
                        return s.Z.toggleSelfMute({
                            context: n
                        })
                    },
                    checked: h
                }, "self-mute"), (0, i.jsx)(o.MenuCheckboxItem, {
                    id: "deafen",
                    label: b.Z.Messages.DEAFEN,
                    action: function() {
                        return s.Z.toggleSelfDeaf({
                            context: n
                        })
                    },
                    checked: I
                }, "self-deafen"), U] : [(0, i.jsx)(o.MenuCheckboxItem, {
                    id: "mute",
                    label: b.Z.Messages.SOUND_MUTE,
                    action: function() {
                        return s.Z.toggleLocalMute(e, n)
                    },
                    checked: h
                }, "self-mute"), j, U]
            }
        },
        234617: (e, n, t) => {
            t.d(n, {
                Z: () => O
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

            function f(e, n, t) {
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
                        f(e, n, t[n])
                    }))
                }
                return e
            }

            function E(e, n) {
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

            function O(e) {
                var n, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.Yn.DEFAULT,
                    f = (0,
                        r.e7)([s.Z], (function() {
                        return s.Z.getLocalVolume(e, t)
                    }), [e, t]),
                    O = e === (null === (n = u.default.getCurrentUser()) || void 0 === n ? void 0 : n.id),
                    b = t === c.Yn.STREAM;
                return O ? null : (0, i.jsx)(o.MenuControlItem, {
                    id: "user-volume",
                    label: b ? Z.Z.Messages.STREAM_VOLUME : Z.Z.Messages.USER_VOLUME,
                    control: function(n, r) {
                        return (0, i.jsx)(o.MenuSliderControl, E(M({}, n), {
                            ref: r,
                            value: (0, a.P)(f),
                            maxValue: d.FB ? 200 : 100,
                            onChange: function(n) {
                                return l.Z.setLocalVolume(e, (0, a.A)(n), t)
                            },
                            "aria-label": b ? Z.Z.Messages.STREAM_VOLUME : Z.Z.Messages.USER_VOLUME
                        }))
                    }
                })
            }
        }
    }
]);