"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [78349], {
        929653: (e, n, t) => {
            t.d(n, {
                Z: () => M
            });
            var r = t(785893),
                i = (t(667294), t(202351)),
                u = t(70418),
                o = t(496916),
                a = t(358969),
                l = t(536945),
                s = t(487685),
                c = t(382060),
                d = t(877475),
                f = t(179913),
                Z = t(2590),
                g = t(473708);

            function M(e) {
                var n = function(e) {
                    var n = (0, a.n2)(e.guild_id, e.id),
                        t = (0, i.e7)([f.ZP, d.Z, l.Z, s.Z], (function() {
                            if (e.isForumPost()) return f.ZP.isForumPostUnread(e.id);
                            if (e.type === Z.d4z.GUILD_CATEGORY) {
                                var n = d.Z.getCategories(e.getGuildId());
                                if (null == n[e.id]) return !1;
                                if (n[e.id].some((function(e) {
                                        var n = e.channel;
                                        return (0, c.Em)(n.type) && f.ZP.hasUnread(n.id)
                                    }))) return !0;
                                var t = new Set(n[e.id].map((function(e) {
                                        return e.channel.id
                                    }))),
                                    r = l.Z.getThreadsForGuild(e.guild_id);
                                for (var i in r)
                                    if (t.has(i))
                                        for (var u in r[i])
                                            if (s.Z.hasJoined(u) && !s.Z.isMuted(u) && f.ZP.hasUnread(u)) return !0;
                                return !1
                            }
                            return f.ZP.hasUnread(e.id)
                        }), [e]);
                    return e.isForumLikeChannel() ? n > 0 : t
                }(e);
                return (0, r.jsx)(u.MenuItem, {
                    id: "mark-channel-read",
                    label: g.Z.Messages.MARK_AS_READ,
                    action: function() {
                        (0, o.U6)(e)
                    },
                    disabled: !n
                })
            }
        },
        13280: (e, n, t) => {
            t.d(n, {
                Z: () => Z
            });
            var r = t(785893),
                i = (t(667294), t(202351)),
                u = t(70418),
                o = t(5544),
                a = t(419051),
                l = t(963985),
                s = t(790337),
                c = t(2590),
                d = t(473708);

            function f(e, n) {
                return e.type === c.d4z.GROUP_DM ? n ? d.Z.Messages.UNFAVORITE_GDM : d.Z.Messages.FAVORITE_GDM : e.type === c.d4z.DM ? n ? d.Z.Messages.UNFAVORITE_DM : d.Z.Messages.FAVORITE_DM : n ? d.Z.Messages.UNFAVORITE_CHANNEL : d.Z.Messages.FAVORITE_CHANNEL
            }

            function Z(e) {
                var n = (0, i.e7)([a.Z], (function() {
                        return a.Z.isFavorite(e.id)
                    })),
                    t = function(e) {
                        var n = function(n) {
                                (0, l.kj)(e.id, n)
                            },
                            t = (0, i.e7)([o.ZP], (function() {
                                return o.ZP.getChannels(c.I_8)
                            }))[c.d4z.GUILD_CATEGORY].filter((function(e) {
                                return "null" !== e.channel.id
                            }));
                        return s.Z.useExperiment({
                            location: "58e21a_1"
                        }, {
                            autoTrackExposure: !1
                        }).favoritesEnabled ? 0 === t.length ? (0, r.jsx)(u.MenuItem, {
                            id: "favorite-channel",
                            label: f(e, !1),
                            action: function() {
                                return n(null)
                            }
                        }) : (0, r.jsx)(u.MenuItem, {
                            id: "favorite-channel",
                            label: f(e, !1),
                            action: function() {
                                return n(null)
                            },
                            children: t.map((function(e) {
                                return (0, r.jsx)(u.MenuItem, {
                                    id: "favorite-".concat(e.channel.id),
                                    label: e.channel.name,
                                    action: function() {
                                        return n(e.channel.id)
                                    }
                                }, e.channel.id)
                            }))
                        }) : null
                    }(e),
                    d = function(e) {
                        return (0, r.jsx)(u.MenuItem, {
                            id: "favorite-channel",
                            label: f(e, !0),
                            action: function() {
                                (0, l.oC)(e.id)
                            }
                        })
                    }(e);
                return __OVERLAY__ ? null : n ? d : t
            }
        },
        589822: (e, n, t) => {
            t.d(n, {
                Z: () => g
            });
            var r = t(785893),
                i = (t(667294), t(202351)),
                u = t(70418),
                o = t(464187),
                a = t(2590),
                l = t(473708);

            function s(e, n, t, r, i, u, o) {
                try {
                    var a = e[u](o),
                        l = a.value
                } catch (e) {
                    t(e);
                    return
                }
                a.done ? n(l) : Promise.resolve(l).then(r, i)
            }

            function c(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var u = e.apply(n, t);

                        function o(e) {
                            s(u, r, i, o, a, "next", e)
                        }

                        function a(e) {
                            s(u, r, i, o, a, "throw", e)
                        }
                        o(void 0)
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
            var Z = function(e, n) {
                var t, r, i, u, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return u = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (u[Symbol.iterator] = function() {
                    return this
                }), u;

                function a(u) {
                    return function(a) {
                        return function(u) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (t = 1, r && (i = 2 & u[0] ? r.return : u[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, u[1])).done) return i;
                                (r = 0, i) && (u = [2 & u[0], i.value]);
                                switch (u[0]) {
                                    case 0:
                                    case 1:
                                        i = u;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: u[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        r = u[1];
                                        u = [0];
                                        continue;
                                    case 7:
                                        u = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === u[0] && (!i || u[1] > i[0] && u[1] < i[3])) {
                                            o.label = u[1];
                                            break
                                        }
                                        if (6 === u[0] && o.label < i[1]) {
                                            o.label = i[1];
                                            i = u;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2];
                                            o.ops.push(u);
                                            break
                                        }
                                        i[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                u = n.call(e, o)
                            } catch (e) {
                                u = [6, e];
                                r = 0
                            } finally {
                                t = i = 0
                            }
                            if (5 & u[0]) throw u[1];
                            return {
                                value: u[0] ? u[1] : void 0,
                                done: !0
                            }
                        }([u, a])
                    }
                }
            };

            function g(e) {
                var n = (0, i.e7)([o.Z], (function() {
                    return o.Z.getGuildId()
                }));
                return __OVERLAY__ || n !== a.I_8 ? null : (0, r.jsx)(u.MenuItem, {
                    id: "set-channel-nickname",
                    label: l.Z.Messages.CHANGE_NICKNAME,
                    action: function() {
                        (0, u.openModalLazy)(c((function() {
                            var n, i;
                            return Z(this, (function(u) {
                                switch (u.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(77876)]).then(t.bind(t, 577876))];
                                    case 1:
                                        n = u.sent(), i = n.default;
                                        return [2, function(n) {
                                            return (0, r.jsx)(i, f(function(e) {
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
                                            }({}, n), {
                                                channelId: e.id
                                            }))
                                        }]
                                }
                            }))
                        })))
                    }
                })
            }
        },
        575351: (e, n, t) => {
            t.d(n, {
                Z: () => E
            });
            var r = t(785893),
                i = (t(667294), t(202351)),
                u = t(70418),
                o = t(567403),
                a = t(473903),
                l = t(407561),
                s = t(771575),
                c = t(162723),
                d = t(933022),
                f = t(664625),
                Z = t(715107),
                g = t(525261);
            var M = t(499219),
                b = t(473708);

            function E(e) {
                var n, t = (0, M.Z)(),
                    E = null == t ? void 0 : t.id,
                    h = null == t ? void 0 : t.guild_id,
                    _ = (0, i.e7)([o.Z], (function() {
                        return o.Z.getGuild(h)
                    }), [h]),
                    p = (0, i.e7)([l.Z], (function() {
                        return null != E ? l.Z.getVoiceStateForChannel(E, e.id) : null
                    }), [E, e.id]),
                    v = (null === (n = a.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) === e.id,
                    O = function() {
                        var e = (0, i.e7)([Z.Z], (function() {
                                return Z.Z.getVoiceChannelId()
                            })),
                            n = (0, i.e7)([f.default], (function() {
                                return f.default.getId()
                            }));
                        return (0, g.ZP)(n, e) === g.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
                    }(),
                    m = (0, i.e7)([d.ZP], (function() {
                        return d.ZP.getPermissionsForUser(e.id, E)
                    }), [E, e.id]),
                    S = (0, c.B)(E);
                if (null == t || null == _ || null == p) return null;
                if (m.speaker) return null;
                var A = function() {
                    v ? (0, s.RK)(t, !1) : (0, s._0)(t, e.id)
                };
                return S ? (0, r.jsx)(u.MenuItem, {
                    id: "invite-speaker",
                    label: v ? b.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER : b.Z.Messages.STAGE_CHANNEL_USER_INVITE_TO_SPEAK,
                    action: A
                }) : O && v ? (0, r.jsx)(u.MenuItem, {
                    id: "invite-speaker",
                    label: b.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER,
                    action: A
                }) : null
            }
        },
        178349: (e, n, t) => {
            t.r(n);
            t.d(n, {
                default: () => F
            });
            var r = t(785893),
                i = (t(667294), t(70418)),
                u = t(971402),
                o = t(343639),
                a = t(567678),
                l = t(73904),
                s = t(82055),
                c = t(153686),
                d = t(950761),
                f = t(492692),
                Z = t(289150),
                g = t(929653),
                M = t(380477),
                b = t(112897),
                E = t(13280),
                h = t(589822),
                _ = t(202351),
                p = t(562205),
                v = t(473903),
                O = t(473708);
            var m = t(693208),
                S = t(604391);
            var A = t(575351),
                y = t(662851),
                I = t(343315),
                j = t(171384),
                N = t(699050),
                U = t(836448),
                C = t(441738),
                x = t(761953),
                T = t(61209);
            var P = t(982348),
                D = t(578142),
                L = t(39082),
                R = t(598955),
                w = t(536130),
                G = t(234617),
                k = t(394212),
                V = t(2590);
            const F = (0, a.Z)((0, o.Z)((function(e) {
                var n = e.user,
                    t = e.channel,
                    o = e.channelSelected,
                    a = void 0 !== o && o,
                    c = e.showMute,
                    V = void 0 === c || c,
                    F = e.showMediaItems,
                    B = void 0 !== F && F,
                    Y = e.showChannelCallItems,
                    H = void 0 !== Y && Y,
                    K = e.showModalItems,
                    X = void 0 === K || K,
                    q = e.targetIsUser,
                    z = void 0 !== q && q,
                    W = e.context,
                    Q = e.onSelect,
                    J = e.onHeightUpdate,
                    $ = (0, w.Z)(n.id, null),
                    ee = (0, C.Z)(n, W),
                    ne = (0, j.Z)({
                        user: n,
                        context: W
                    }),
                    te = (0, I.Z)(n),
                    re = (0, k.Z)(n.id),
                    ie = function(e, n) {
                        var t = T.Z.getChannel(e);
                        return null == t || t.isMultiUserDM() ? null : (0, r.jsx)(i.MenuItem, {
                            id: "close-dm",
                            label: O.Z.Messages.CLOSE_DM,
                            action: function() {
                                return x.Z.closePrivateChannel(e, n)
                            }
                        })
                    }(t.id, a),
                    ue = (0, D.Z)(n),
                    oe = (0, s.Z)(null, n),
                    ae = (0, G.Z)(n.id),
                    le = (0, L.Z)(n.id, t.id),
                    se = (0, y.Z)(n),
                    ce = (0, R.Z)(n.id),
                    de = (0, P.Z)(n.id, t.id),
                    fe = (0, U.Z)(n),
                    Ze = (0, M.ZP)(t),
                    ge = (0, b.Z)({
                        id: n.id,
                        label: O.Z.Messages.COPY_ID_USER
                    }),
                    Me = (0, b.Z)({
                        id: t.id,
                        label: O.Z.Messages.COPY_ID_CHANNEL
                    }),
                    be = (0, g.Z)(t),
                    Ee = (0, f.Z)(n.id),
                    he = (0, d.Z)(t.id),
                    _e = (0, A.Z)(n),
                    pe = (0, Z.Z)(n.id),
                    ve = (0, N.Z)({
                        commandType: l.yU.USER,
                        commandTargetId: n.id,
                        channel: t,
                        guildId: void 0,
                        location: "DMUserContextMenu",
                        onShow: J
                    }),
                    Oe = (0, E.Z)(t),
                    me = (0, h.Z)(t),
                    Se = function(e) {
                        var n = (0, _.e7)([v.default], (function() {
                            return v.default.getCurrentUser()
                        }));
                        return !0 !== (null == n ? void 0 : n.isStaff()) ? null : (0, r.jsxs)(r.Fragment, {
                            children: [!e.isMessageRequest && (0, r.jsx)(i.MenuItem, {
                                id: "mark-as-message-request",
                                label: O.Z.Messages.MESSAGE_REQUESTS_CONTEXT_MENU_MOVE_TO,
                                action: function() {
                                    return (0, p.Xy)(e.id)
                                }
                            }), (0, r.jsx)(i.MenuItem, {
                                id: "clear-message-request",
                                label: O.Z.Messages.MESSAGE_REQUESTS_CONTEXT_MENU_CLEAR,
                                action: function() {
                                    return (0, p.qR)(e.id)
                                }
                            })]
                        })
                    }(t),
                    Ae = function(e) {
                        var n = (0, _.e7)([v.default], (function() {
                                return v.default.getCurrentUser()
                            })),
                            t = (0, _.e7)([S.ZP], (function() {
                                return S.ZP.getChannelSafetyWarnings(e.id)
                            }));
                        return !0 !== (null == n ? void 0 : n.isStaff()) || null == t || 0 === t.length ? null : (0, r.jsx)(r.Fragment, {
                            children: (0, r.jsx)(i.MenuItem, {
                                id: "clear-safety-warnings",
                                label: O.Z.Messages.STRANGER_DANGER_CONTEXT_MENU_CLEAR,
                                action: function() {
                                    return (0, m.wS)(e.id)
                                }
                            })
                        })
                    }(t),
                    ye = t.isManaged(),
                    Ie = n.isNonUserBot();
                return (0, r.jsxs)(i.Menu, {
                    navId: "user-context",
                    onClose: u.Zy,
                    "aria-label": O.Z.Messages.USER_ACTIONS_MENU_LABEL,
                    onSelect: Q,
                    children: [(0, r.jsx)(i.MenuGroup, {
                        children: !Ie && be
                    }), (0, r.jsx)(i.MenuGroup, {
                        children: Se
                    }), (0, r.jsx)(i.MenuGroup, {
                        children: Ae
                    }), (0, r.jsxs)(i.MenuGroup, {
                        children: [Oe, me]
                    }), (0, r.jsx)(i.MenuGroup, {
                        children: !Ie && _e
                    }), (0, r.jsxs)(i.MenuGroup, {
                        children: [!Ie && (0, r.jsxs)(r.Fragment, {
                            children: [X && $, ee, !ye && le, X && ne, X && te, re]
                        }), ie]
                    }), !Ie && (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(i.MenuGroup, {
                            children: B && ae
                        }), (0, r.jsx)(i.MenuGroup, {
                            children: X && oe
                        }), (0, r.jsxs)(i.MenuGroup, {
                            children: [B && ce, B && de, ve, X && ue, se, X && fe, B && pe]
                        }), (0, r.jsx)(i.MenuGroup, {
                            children: V && Ze
                        }), H && (0, r.jsxs)(i.MenuGroup, {
                            children: [he, Ee]
                        })]
                    }), (0, r.jsxs)(i.MenuGroup, {
                        children: [ge, !z && Me]
                    })]
                })
            }), {
                object: V.qAy.CONTEXT_MENU
            }), [c.Z.CONTEXT_MENU, c.Z.DM_USER_MENU])
        },
        982348: (e, n, t) => {
            t.d(n, {
                Z: () => d
            });
            var r = t(785893),
                i = (t(667294), t(202351)),
                u = t(70418),
                o = t(247250),
                a = t(347874),
                l = t(407561),
                s = t(2590),
                c = t(473708);

            function d(e, n) {
                var t = (0, i.e7)([a.Z], (function() {
                    return e === a.Z.getSelectedParticipantId(n)
                }), [n, e]);
                return (0, i.e7)([a.Z, l.Z], (function() {
                    var t = l.Z.isInChannel(n, e) && l.Z.hasVideo(n),
                        r = a.Z.getLayout(n),
                        i = r === s.AEg.MINIMUM || r === s.AEg.NORMAL;
                    return !t || i
                }), [n, e]) ? null : (0, r.jsx)(u.MenuItem, {
                    id: "focus-video",
                    label: t ? c.Z.Messages.UNFOCUS_PARTICIPANT : c.Z.Messages.FOCUS_PARTICIPANT,
                    action: function() {
                        return o.Z.selectParticipant(n, t ? null : e)
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
                u = t(70418),
                o = t(997244),
                a = t(347874),
                l = t(664625),
                s = t(358500),
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
                        var r, i, u = [],
                            o = !0,
                            a = !1;
                        try {
                            for (t = t.call(e); !(o = (r = t.next()).done); o = !0) {
                                u.push(r.value);
                                if (n && u.length === n) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return u
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
                var t = (0, i.e7)([l.default], (function() {
                        return l.default.getId() === e
                    }), [e]),
                    d = f((0, i.Wu)([a.Z], (function() {
                        return [a.Z.getParticipants(n), a.Z.getParticipant(n, e)]
                    }), [n, e]), 2),
                    Z = d[0],
                    g = d[1];
                return t || 0 === Z.length ? null : null == g ? (0, r.jsx)(u.MenuItem, {
                    id: "ring",
                    label: c.Z.Messages.RING,
                    action: function() {
                        return o.Z.ring(n, [e])
                    }
                }) : g.type === s.fO.USER && g.ringing ? (0, r.jsx)(u.MenuItem, {
                    id: "stop-ringing",
                    label: c.Z.Messages.STOP_RINGING,
                    action: function() {
                        return o.Z.stopRinging(n, [e])
                    }
                }) : null
            }
        },
        598955: (e, n, t) => {
            t.d(n, {
                Z: () => p
            });
            var r = t(785893),
                i = (t(667294), t(202351)),
                u = t(70418),
                o = t(105783),
                a = t(656645),
                l = t(656907),
                s = t(602351),
                c = t(563367),
                d = t(464187),
                f = t(473903),
                Z = t(818417),
                g = t(652591),
                M = t(2590),
                b = t(36256),
                E = t(473708),
                h = t(870726),
                _ = t.n(h);

            function p(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b.Yn.DEFAULT,
                    t = (0, i.e7)([f.default], (function() {
                        var n;
                        return (null === (n = f.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) === e
                    })),
                    h = (0, i.e7)([l.Z], (function() {
                        return l.Z.isLocalSoundboardMuted(e)
                    })),
                    p = (0, i.cj)([s.Z], (function() {
                        return t ? {
                            muted: s.Z.isSelfMute(n),
                            deafened: s.Z.isSelfDeaf(n)
                        } : {
                            muted: s.Z.isLocalMute(e, n),
                            localVideoDisabled: s.Z.isLocalVideoDisabled(e, n),
                            localVideoAutoDisabled: s.Z.isLocalVideoAutoDisabled(e, n)
                        }
                    }), [t, n, e]),
                    v = p.muted,
                    O = p.deafened,
                    m = void 0 !== O && O,
                    S = p.localVideoDisabled,
                    A = void 0 !== S && S,
                    y = p.localVideoAutoDisabled,
                    I = void 0 !== y && y,
                    j = s.Z.supports(b.AN.DISABLE_VIDEO) && !t ? (0, r.jsx)(u.MenuCheckboxItem, {
                        id: "disable-video",
                        label: E.Z.Messages.DISABLE_VIDEO,
                        action: function() {
                            if (I) o.Z.show({
                                title: E.Z.Messages.UNSTABLE_CONNECTION,
                                body: E.Z.Messages.UNSTABLE_CONNECTION_REASON_2,
                                confirmText: E.Z.Messages.TURN_ON_VIDEO_ANYWAY,
                                cancelText: E.Z.Messages.LEAVE_VIDEO_OFF,
                                onConfirm: function() {
                                    return a.Z.setDisableLocalVideo(e, M.ZUi.MANUAL_ENABLED)
                                }
                            });
                            else {
                                var t = A ? M.ZUi.MANUAL_ENABLED : M.ZUi.DISABLED;
                                a.Z.setDisableLocalVideo(e, t, n)
                            }
                        },
                        checked: A,
                        subtext: I ? (0, r.jsxs)("div", {
                            className: _().videoPaused,
                            children: [(0, r.jsx)(Z.Z, {
                                width: 12,
                                className: _().warningCircle
                            }), E.Z.Messages.UNSTABLE_CONNECTION]
                        }) : null
                    }, "disable-video") : null,
                    N = t ? null : (0, r.jsx)(u.MenuCheckboxItem, {
                        id: "soundboard-sound-mute",
                        label: E.Z.Messages.MUTE_SOUNDBOARD,
                        action: function() {
                            var t = c.Z.getRTCConnection();
                            g.default.track(M.rMx.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                                guild_id: d.Z.getGuildId(),
                                target_user_id: e,
                                media_session_id: null == t ? void 0 : t.getMediaSessionId(),
                                parent_media_session_id: null == t ? void 0 : t.parentMediaSessionId,
                                mute_soundboard: !h
                            });
                            a.Z.toggleLocalSoundboardMute(e, n)
                        },
                        checked: h
                    }, "soundboard-sound-mute");
                return t ? [(0, r.jsx)(u.MenuCheckboxItem, {
                    id: "mute",
                    label: E.Z.Messages.SOUND_MUTE,
                    action: function() {
                        return a.Z.toggleSelfMute({
                            context: n
                        })
                    },
                    checked: v
                }, "self-mute"), (0, r.jsx)(u.MenuCheckboxItem, {
                    id: "deafen",
                    label: E.Z.Messages.DEAFEN,
                    action: function() {
                        return a.Z.toggleSelfDeaf({
                            context: n
                        })
                    },
                    checked: m
                }, "self-deafen"), j] : [(0, r.jsx)(u.MenuCheckboxItem, {
                    id: "mute",
                    label: E.Z.Messages.SOUND_MUTE,
                    action: function() {
                        return a.Z.toggleLocalMute(e, n)
                    },
                    checked: v
                }, "self-mute"), N, j]
            }
        },
        234617: (e, n, t) => {
            t.d(n, {
                Z: () => b
            });
            var r = t(785893),
                i = (t(667294),
                    t(202351)),
                u = t(70418),
                o = t(656645),
                a = t(602351),
                l = t(473903),
                s = t(615457),
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

            function b(e) {
                var n, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.Yn.DEFAULT,
                    Z = (0, i.e7)([a.Z], (function() {
                        return a.Z.getLocalVolume(e, t)
                    }), [e, t]),
                    b = e === (null === (n = l.default.getCurrentUser()) || void 0 === n ? void 0 : n.id),
                    E = t === d.Yn.STREAM;
                return b ? null : (0, r.jsx)(u.MenuControlItem, {
                    id: "user-volume",
                    label: E ? f.Z.Messages.STREAM_VOLUME : f.Z.Messages.USER_VOLUME,
                    control: function(n, i) {
                        return (0, r.jsx)(u.MenuSliderControl, M(g({}, n), {
                            ref: i,
                            value: (0, s.P)(Z),
                            maxValue: c.FB ? 200 : 100,
                            onChange: function(n) {
                                return o.Z.setLocalVolume(e, (0, s.A)(n), t)
                            },
                            "aria-label": E ? f.Z.Messages.STREAM_VOLUME : f.Z.Messages.USER_VOLUME
                        }))
                    }
                })
            }
        }
    }
]);