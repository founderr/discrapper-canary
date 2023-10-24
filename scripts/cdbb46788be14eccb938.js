"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [10545], {
        332349: (e, n, t) => {
            t.d(n, {
                Z: () => E
            });
            var o = t(785893),
                s = t(667294),
                i = t(202351),
                r = t(70418),
                l = t(577357),
                u = t(703790),
                a = t(567403),
                d = t(682776),
                c = t(2590),
                Z = t(473708),
                M = t(35637),
                b = t.n(M);

            function E(e, n, t) {
                var M = a.Z.getGuild(n),
                    E = (0, i.e7)([d.Z], (function() {
                        return null != M ? d.Z.can(c.Plq.MANAGE_GUILD, M) : null
                    })),
                    f = s.useCallback((function() {
                        u.Z.open(n, c.pNK.INTEGRATIONS);
                        l.Z.setSection(c.b4C.APPLICATION, e.id)
                    }), [e.id, n]),
                    O = t === c.IlC.POPOUT;
                return e.bot && E && !O ? (0, o.jsx)(r.MenuItem, {
                    id: "manage-integration",
                    label: (0, o.jsx)("div", {
                        className: b().labelWrapper,
                        children: (0, o.jsx)("span", {
                            className: b().label,
                            children: Z.Z.Messages.MANAGE_INTEGRATION
                        })
                    }),
                    action: f
                }) : null
            }
        },
        810545: (e, n, t) => {
            t.r(n);
            t.d(n, {
                default: () => L
            });
            var o = t(785893),
                s = (t(667294),
                    t(70418)),
                i = t(971402),
                r = t(343639),
                l = t(567678),
                u = t(82055),
                a = t(153686),
                d = t(112897),
                c = t(434651),
                Z = t(332349),
                M = t(662851),
                b = t(343315),
                E = t(171384),
                f = t(430198),
                O = t(836448),
                g = t(441738),
                N = t(578142),
                _ = t(827991),
                A = t(93439),
                p = t(100856),
                I = t(598955),
                U = t(536130),
                m = t(973424),
                h = t(234617),
                j = t(394212),
                D = t(2590),
                v = t(473708);
            const L = (0, l.Z)((0, r.Z)((function(e) {
                var n = e.user,
                    t = e.guildId,
                    r = e.showModalItems,
                    l = void 0 === r || r,
                    a = e.showMediaItems,
                    L = void 0 !== a && a,
                    S = e.showChatItems,
                    x = void 0 === S || S,
                    C = e.context,
                    T = e.onSelect,
                    y = (0, U.Z)(n.id, t),
                    P = (0, _.Z)(n, t, C),
                    V = (0, A.Z)(n.id, C),
                    k = (0, j.Z)(n.id),
                    w = (0, g.Z)(n, C),
                    G = (0, E.Z)({
                        user: n,
                        guildId: t,
                        context: C
                    }),
                    R = (0, b.Z)(n),
                    B = (0, h.Z)(n.id),
                    F = (0, I.Z)(n.id),
                    Y = (0, c.Z)({
                        guildId: t,
                        userId: n.id,
                        analyticsLocation: {
                            page: D.ZY5.GUILD_CHANNEL,
                            section: D.jXE.CHAT_USERNAME,
                            object: D.qAy.CONTEXT_MENU_ITEM
                        },
                        context: C
                    }),
                    X = (0, Z.Z)(n, t),
                    q = (0, N.Z)(n, t),
                    H = (0, u.Z)(null, n),
                    W = (0, M.Z)(n),
                    K = (0, O.Z)(n),
                    z = (0, f.Z)(n, t),
                    J = (0, m.Z)(n.id, t),
                    Q = (0, p.Z)(n, t),
                    $ = (0, d.Z)({
                        id: n.id,
                        label: v.Z.Messages.COPY_ID_USER
                    }),
                    ee = n.isNonUserBot();
                return (0, o.jsxs)(s.Menu, {
                    navId: "user-context",
                    onClose: i.Zy,
                    "aria-label": v.Z.Messages.USER_ACTIONS_MENU_LABEL,
                    onSelect: T,
                    children: [!ee && (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsxs)(s.MenuGroup, {
                            children: [l && y, x && P, V, w, l && G, l && R, k]
                        }), L && (0, o.jsx)(s.MenuGroup, {
                            children: B
                        }), (0, o.jsx)(s.MenuGroup, {
                            children: l && H
                        }), (0, o.jsxs)(s.MenuGroup, {
                            children: [L && F, l && Y, l && q, W, X, l && K]
                        }), (0, o.jsx)(s.MenuGroup, {
                            children: z
                        }), (0, o.jsxs)(s.MenuGroup, {
                            children: [J, Q]
                        })]
                    }), (0, o.jsx)(s.MenuGroup, {
                        children: $
                    })]
                })
            }), {
                object: D.qAy.CONTEXT_MENU
            }), [a.Z.CONTEXT_MENU, a.Z.GUILD_USER_MENU])
        },
        598955: (e, n, t) => {
            t.d(n, {
                Z: () => _
            });
            var o = t(785893),
                s = (t(667294), t(202351)),
                i = t(70418),
                r = t(105783),
                l = t(656645),
                u = t(656907),
                a = t(602351),
                d = t(563367),
                c = t(464187),
                Z = t(473903),
                M = t(818417),
                b = t(652591),
                E = t(2590),
                f = t(36256),
                O = t(473708),
                g = t(870726),
                N = t.n(g);

            function _(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.Yn.DEFAULT,
                    t = (0, s.e7)([Z.default], (function() {
                        var n;
                        return (null === (n = Z.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) === e
                    })),
                    g = (0, s.e7)([u.Z], (function() {
                        return u.Z.isLocalSoundboardMuted(e)
                    })),
                    _ = (0, s.cj)([a.Z], (function() {
                        return t ? {
                            muted: a.Z.isSelfMute(n),
                            deafened: a.Z.isSelfDeaf(n)
                        } : {
                            muted: a.Z.isLocalMute(e, n),
                            localVideoDisabled: a.Z.isLocalVideoDisabled(e, n),
                            localVideoAutoDisabled: a.Z.isLocalVideoAutoDisabled(e, n)
                        }
                    }), [t, n, e]),
                    A = _.muted,
                    p = _.deafened,
                    I = void 0 !== p && p,
                    U = _.localVideoDisabled,
                    m = void 0 !== U && U,
                    h = _.localVideoAutoDisabled,
                    j = void 0 !== h && h,
                    D = a.Z.supports(f.AN.DISABLE_VIDEO) && !t ? (0, o.jsx)(i.MenuCheckboxItem, {
                        id: "disable-video",
                        label: O.Z.Messages.DISABLE_VIDEO,
                        action: function() {
                            if (j) r.Z.show({
                                title: O.Z.Messages.UNSTABLE_CONNECTION,
                                body: O.Z.Messages.UNSTABLE_CONNECTION_REASON_2,
                                confirmText: O.Z.Messages.TURN_ON_VIDEO_ANYWAY,
                                cancelText: O.Z.Messages.LEAVE_VIDEO_OFF,
                                onConfirm: function() {
                                    return l.Z.setDisableLocalVideo(e, E.ZUi.MANUAL_ENABLED)
                                }
                            });
                            else {
                                var t = m ? E.ZUi.MANUAL_ENABLED : E.ZUi.DISABLED;
                                l.Z.setDisableLocalVideo(e, t, n)
                            }
                        },
                        checked: m,
                        subtext: j ? (0, o.jsxs)("div", {
                            className: N().videoPaused,
                            children: [(0, o.jsx)(M.Z, {
                                width: 12,
                                className: N().warningCircle
                            }), O.Z.Messages.UNSTABLE_CONNECTION]
                        }) : null
                    }, "disable-video") : null,
                    v = t ? null : (0, o.jsx)(i.MenuCheckboxItem, {
                        id: "soundboard-sound-mute",
                        label: O.Z.Messages.MUTE_SOUNDBOARD,
                        action: function() {
                            var t = d.Z.getRTCConnection();
                            b.default.track(E.rMx.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                                guild_id: c.Z.getGuildId(),
                                target_user_id: e,
                                media_session_id: null == t ? void 0 : t.getMediaSessionId(),
                                parent_media_session_id: null == t ? void 0 : t.parentMediaSessionId,
                                mute_soundboard: !g
                            });
                            l.Z.toggleLocalSoundboardMute(e, n)
                        },
                        checked: g
                    }, "soundboard-sound-mute");
                return t ? [(0, o.jsx)(i.MenuCheckboxItem, {
                    id: "mute",
                    label: O.Z.Messages.SOUND_MUTE,
                    action: function() {
                        return l.Z.toggleSelfMute({
                            context: n
                        })
                    },
                    checked: A
                }, "self-mute"), (0, o.jsx)(i.MenuCheckboxItem, {
                    id: "deafen",
                    label: O.Z.Messages.DEAFEN,
                    action: function() {
                        return l.Z.toggleSelfDeaf({
                            context: n
                        })
                    },
                    checked: I
                }, "self-deafen"), D] : [(0, o.jsx)(i.MenuCheckboxItem, {
                    id: "mute",
                    label: O.Z.Messages.SOUND_MUTE,
                    action: function() {
                        return l.Z.toggleLocalMute(e, n)
                    },
                    checked: A
                }, "self-mute"), v, D]
            }
        },
        234617: (e, n, t) => {
            t.d(n, {
                Z: () => f
            });
            var o = t(785893),
                s = (t(667294), t(202351)),
                i = t(70418),
                r = t(656645),
                l = t(602351),
                u = t(473903),
                a = t(615457),
                d = t(120415),
                c = t(36256),
                Z = t(473708);

            function M(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function b(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        o = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    o.forEach((function(n) {
                        M(e, n, t[n])
                    }))
                }
                return e
            }

            function E(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        n && (o = o.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, o)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function f(e) {
                var n, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.Yn.DEFAULT,
                    M = (0, s.e7)([l.Z], (function() {
                        return l.Z.getLocalVolume(e, t)
                    }), [e, t]),
                    f = e === (null === (n = u.default.getCurrentUser()) || void 0 === n ? void 0 : n.id),
                    O = t === c.Yn.STREAM;
                return f ? null : (0, o.jsx)(i.MenuControlItem, {
                    id: "user-volume",
                    label: O ? Z.Z.Messages.STREAM_VOLUME : Z.Z.Messages.USER_VOLUME,
                    control: function(n, s) {
                        return (0, o.jsx)(i.MenuSliderControl, E(b({}, n), {
                            ref: s,
                            value: (0, a.P)(M),
                            maxValue: d.FB ? 200 : 100,
                            onChange: function(n) {
                                return r.Z.setLocalVolume(e, (0, a.A)(n), t)
                            },
                            "aria-label": O ? Z.Z.Messages.STREAM_VOLUME : Z.Z.Messages.USER_VOLUME
                        }))
                    }
                })
            }
        }
    }
]);