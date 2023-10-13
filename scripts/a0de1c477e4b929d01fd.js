"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [14136], {
        575351: (e, n, t) => {
            t.d(n, {
                Z: () => g
            });
            var r = t(785893),
                i = (t(667294), t(202351)),
                u = t(304548),
                l = t(567403),
                o = t(473903),
                s = t(407561),
                a = t(771575),
                d = t(162723),
                c = t(933022),
                Z = t(664625),
                E = t(715107),
                f = t(525261);
            var M = t(499219),
                _ = t(473708);

            function g(e) {
                var n, t = (0, M.Z)(),
                    g = null == t ? void 0 : t.id,
                    O = null == t ? void 0 : t.guild_id,
                    h = (0, i.e7)([l.Z], (function() {
                        return l.Z.getGuild(O)
                    }), [O]),
                    C = (0, i.e7)([s.Z], (function() {
                        return null != g ? s.Z.getVoiceStateForChannel(g, e.id) : null
                    }), [g, e.id]),
                    p = (null === (n = o.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) === e.id,
                    v = function() {
                        var e = (0, i.e7)([E.Z], (function() {
                                return E.Z.getVoiceChannelId()
                            })),
                            n = (0, i.e7)([Z.default], (function() {
                                return Z.default.getId()
                            }));
                        return (0, f.ZP)(n, e) === f.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
                    }(),
                    S = (0, i.e7)([c.ZP], (function() {
                        return c.ZP.getPermissionsForUser(e.id, g)
                    }), [g, e.id]),
                    P = (0, d.B)(g);
                if (null == t || null == h || null == C) return null;
                if (S.speaker) return null;
                var I = function() {
                    p ? (0, a.RK)(t, !1) : (0, a._0)(t, e.id)
                };
                return P ? (0, r.jsx)(u.MenuItem, {
                    id: "invite-speaker",
                    label: p ? _.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER : _.Z.Messages.STAGE_CHANNEL_USER_INVITE_TO_SPEAK,
                    action: I
                }) : v && p ? (0, r.jsx)(u.MenuItem, {
                    id: "invite-speaker",
                    label: _.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER,
                    action: I
                }) : null
            }
        },
        914136: (e, n, t) => {
            t.r(n);
            t.d(n, {
                default: () => Y
            });
            var r = t(785893),
                i = (t(667294), t(304548)),
                u = t(971402),
                l = t(343639),
                o = t(567678),
                s = t(73904),
                a = t(82055),
                d = t(153686),
                c = t(950761),
                Z = t(492692),
                E = t(289150),
                f = t(737331),
                M = t(112897),
                _ = t(434651),
                g = t(332349),
                O = t(575351),
                h = t(202351),
                C = t(61209),
                p = t(567403),
                v = t(682776),
                S = t(473903),
                P = t(771575),
                I = t(933022),
                U = t(2590),
                T = t(473708);
            var j = t(662851),
                A = t(343315),
                N = t(171384),
                b = t(430198),
                m = t(699050),
                x = t(836448),
                R = t(441738),
                y = t(982348),
                G = t(578142),
                L = t(827991),
                w = t(93439),
                V = t(100856),
                D = t(598955),
                F = t(536130),
                k = t(973424),
                H = t(234617),
                q = t(394212);
            const Y = (0, o.Z)((0, l.Z)((function(e) {
                var n = e.user,
                    t = e.guildId,
                    l = e.channel,
                    o = e.showMediaItems,
                    d = void 0 !== o && o,
                    Y = e.showChatItems,
                    B = void 0 === Y || Y,
                    K = e.showChannelCallItems,
                    X = void 0 !== K && K,
                    W = e.showModalItems,
                    z = void 0 === W || W,
                    Q = e.showStageChannelItems,
                    J = void 0 !== Q && Q,
                    $ = e.context,
                    ee = e.onSelect,
                    ne = e.onHeightUpdate,
                    te = (0, F.Z)(n.id, t, l.id),
                    re = (0, L.Z)(n, t, $),
                    ie = (0, w.Z)(n.id, $),
                    ue = (0, q.Z)(n.id),
                    le = (0, R.Z)(n, $),
                    oe = (0, N.Z)({
                        user: n,
                        guildId: t,
                        context: $
                    }),
                    se = (0, A.Z)(n),
                    ae = (0, H.Z)(n.id),
                    de = (0, D.Z)(n.id),
                    ce = (0, _.Z)({
                        guildId: t,
                        userId: n.id,
                        analyticsLocation: {
                            page: U.ZY5.GUILD_CHANNEL,
                            section: U.jXE.CHAT_USERNAME,
                            object: U.qAy.CONTEXT_MENU_ITEM
                        },
                        context: $
                    }),
                    Ze = (0, G.Z)(n, t),
                    Ee = (0, a.Z)(null, n),
                    fe = (0, j.Z)(n),
                    Me = (0, x.Z)(n),
                    _e = (0, b.Z)(n, t, l.id),
                    ge = (0, k.Z)(n.id, t),
                    Oe = (0, V.Z)(n, t),
                    he = (0, M.Z)({
                        id: n.id,
                        label: T.Z.Messages.COPY_ID_USER
                    }),
                    Ce = (0, y.Z)(n.id, l.id),
                    pe = (0, Z.Z)(n.id),
                    ve = (0, c.Z)(l.id),
                    Se = (0, O.Z)(n),
                    Pe = function(e, n, t) {
                        var u, l = C.Z.getChannel(t),
                            o = (0, h.e7)([p.Z], (function() {
                                return p.Z.getGuild(n)
                            }), [n]),
                            s = (0, h.e7)([I.ZP], (function() {
                                return I.ZP.getPermissionsForUser(e.id, t)
                            }), [t, e.id]),
                            a = (null === (u = S.default.getCurrentUser()) || void 0 === u ? void 0 : u.id) === e.id,
                            d = (0, h.e7)([v.Z], (function() {
                                return null != t && v.Z.canWithPartialContext(U.Plq.MUTE_MEMBERS, {
                                    channelId: t
                                })
                            }), [t]);
                        return null == l || null == o ? null : (d || a) && s.speaker ? (0, r.jsx)(i.MenuItem, {
                            id: "audience",
                            label: a ? T.Z.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE : T.Z.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE_OTHER,
                            action: function() {
                                a ? (0, P.yi)(l) : (0, P.hz)(e, l)
                            }
                        }) : null
                    }(n, t, l.id),
                    Ie = (0, m.Z)({
                        commandType: s.yU.USER,
                        commandTargetId: n.id,
                        channel: l,
                        guildId: t,
                        location: "GuildChannelUserContextMenu",
                        onShow: ne
                    }),
                    Ue = (0, E.Z)(n.id),
                    Te = (0, g.Z)(n, t, $),
                    je = n.isNonUserBot(),
                    Ae = n.isClyde(),
                    Ne = (0, f.R8)();
                return (0, r.jsxs)(i.Menu, {
                    navId: "user-context",
                    onClose: u.Zy,
                    "aria-label": T.Z.Messages.USER_ACTIONS_MENU_LABEL,
                    onSelect: ee,
                    children: [!je && (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)(i.MenuGroup, {
                            children: [Se, J && Pe]
                        }), (0, r.jsxs)(i.MenuGroup, {
                            children: [z && te, B && re, ie, le, z && oe, z && se, ue]
                        }), d && (0,
                            r.jsx)(i.MenuGroup, {
                            children: ae
                        }), (0, r.jsx)(i.MenuGroup, {
                            children: z && Ee
                        }), (0, r.jsxs)(i.MenuGroup, {
                            children: [d && de, d && Ce, z && ce, Ie, Te, z && Ze, fe, z && Me, X && Ue]
                        }), (0, r.jsx)(i.MenuGroup, {
                            children: _e
                        }), (0, r.jsxs)(i.MenuGroup, {
                            children: [ge, Oe]
                        }), X && (0, r.jsxs)(i.MenuGroup, {
                            children: [ve, pe]
                        })]
                    }), Ae && (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)(i.MenuGroup, {
                            children: [z && te, Ne && ie]
                        }), (0, r.jsx)(i.MenuGroup, {
                            children: _e
                        })]
                    }), (0, r.jsx)(i.MenuGroup, {
                        children: he
                    })]
                })
            }), {
                object: U.qAy.CONTEXT_MENU
            }), [d.Z.CONTEXT_MENU, d.Z.GUILD_CHANNEL_USER_MENU])
        },
        982348: (e, n, t) => {
            t.d(n, {
                Z: () => c
            });
            var r = t(785893),
                i = (t(667294), t(202351)),
                u = t(304548),
                l = t(247250),
                o = t(566706),
                s = t(407561),
                a = t(2590),
                d = t(473708);

            function c(e, n) {
                var t = (0, i.e7)([o.Z], (function() {
                    return e === o.Z.getSelectedParticipantId(n)
                }), [n, e]);
                return (0, i.e7)([o.Z, s.Z], (function() {
                    var t = s.Z.isInChannel(n, e) && s.Z.hasVideo(n),
                        r = o.Z.getLayout(n),
                        i = r === a.AEg.MINIMUM || r === a.AEg.NORMAL;
                    return !t || i
                }), [n, e]) ? null : (0, r.jsx)(u.MenuItem, {
                    id: "focus-video",
                    label: t ? d.Z.Messages.UNFOCUS_PARTICIPANT : d.Z.Messages.FOCUS_PARTICIPANT,
                    action: function() {
                        return l.Z.selectParticipant(n, t ? null : e)
                    }
                })
            }
        },
        93439: (e, n, t) => {
            t.d(n, {
                Z: () => d
            });
            var r = t(785893),
                i = (t(667294), t(304548)),
                u = t(761953),
                l = t(735885),
                o = t(664625),
                s = t(2590),
                a = t(473708);

            function d(e, n) {
                var t = o.default.getId(),
                    d = n === s.IlC.POPOUT;
                return t === e || d ? null : (0, r.jsx)(i.MenuItem, {
                    id: "message-user",
                    label: a.Z.Messages.USER_POPOUT_MESSAGE,
                    action: function() {
                        u.Z.openPrivateChannel(e);
                        (0, l.xf)()
                    }
                })
            }
        },
        100856: (e, n, t) => {
            t.d(n, {
                Z: () => v
            });
            var r = t(785893),
                i = (t(667294), t(202351)),
                u = t(304548),
                l = t(327499),
                o = t(116404),
                s = t(773011),
                a = t(664625),
                d = t(61209),
                c = t(5544),
                Z = t(21372),
                E = t(567403),
                f = t(682776),
                M = t(840922),
                _ = t(473903),
                g = t(407561),
                O = t(176758),
                h = t(563135),
                C = t(2590),
                p = t(473708);

            function v(e, n) {
                var t = (0, i.e7)([c.ZP], (function() {
                        return c.ZP.getChannels(n)[c.Zb]
                    }), [n]),
                    v = (0, i.e7)([g.Z, d.Z], (function() {
                        var t = g.Z.getUserVoiceChannelId(n, e.id);
                        return d.Z.getChannel(t)
                    }), [n, e.id]);
                if ((0, i.e7)([Z.ZP], (function() {
                        return Z.ZP.isGuestOrLurker(n, e.id)
                    }), [n, e.id])) return null;
                if (null == v) return null;
                var S = e.id === a.default.getId();
                if (!S && !f.Z.can(C.Plq.MOVE_MEMBERS, v)) return null;
                var P = t.filter((function(n) {
                    var t = n.channel;
                    return t.id !== v.id && (S ? f.Z.can(C.Plq.CONNECT, t) && !(0, O.rY)(t, g.Z, E.Z) : f.Z.can(C.Plq.MOVE_MEMBERS, t) && (f.Z.can(C.Plq.CONNECT, t) || h.ZP.can({
                        permission: C.Plq.CONNECT,
                        user: e,
                        context: t
                    })) && !(0, O.rY)(t, g.Z, E.Z))
                }));
                return 0 === P.length ? null : (0, r.jsx)(u.MenuItem, {
                    id: "voice-move",
                    label: p.Z.Messages.MOVE_TO,
                    children: P.map((function(t) {
                        var i = t.channel;
                        return (0, r.jsx)(u.MenuItem, {
                            id: i.id,
                            action: function() {
                                return function(t) {
                                    e.id === a.default.getId() ? o.default.selectVoiceChannel(t.id) : l.Z.setChannel(n, e.id, t.id)
                                }(i)
                            },
                            label: (0, s.F6)(i, _.default, M.Z)
                        }, i.id)
                    }))
                })
            }
        },
        234617: (e, n, t) => {
            t.d(n, {
                Z: () => _
            });
            var r = t(785893),
                i = (t(667294), t(202351)),
                u = t(304548),
                l = t(656645),
                o = t(973469),
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

            function f(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        E(e, n, t[n])
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

            function _(e) {
                var n, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.Yn.DEFAULT,
                    E = (0, i.e7)([o.Z], (function() {
                        return o.Z.getLocalVolume(e, t)
                    }), [e, t]),
                    _ = e === (null === (n = s.default.getCurrentUser()) || void 0 === n ? void 0 : n.id),
                    g = t === c.Yn.STREAM;
                return _ ? null : (0, r.jsx)(u.MenuControlItem, {
                    id: "user-volume",
                    label: g ? Z.Z.Messages.STREAM_VOLUME : Z.Z.Messages.USER_VOLUME,
                    control: function(n, i) {
                        return (0, r.jsx)(u.MenuSliderControl, M(f({}, n), {
                            ref: i,
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