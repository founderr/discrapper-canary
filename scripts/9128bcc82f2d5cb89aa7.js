"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [56715], {
        343639: (e, n, t) => {
            t.d(n, {
                Z: () => u
            });
            var i = t(785893),
                r = (t(667294), t(213276));

            function o(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function a(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        i = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    i.forEach((function(n) {
                        o(e, n, t[n])
                    }))
                }
                return e
            }

            function u(e, n) {
                return function(t) {
                    return (0, i.jsx)(r.Z, {
                        page: n.page,
                        section: n.section,
                        object: n.object,
                        objectType: n.objectType,
                        children: (0, i.jsx)(e, a({}, t))
                    })
                }
            }
        },
        82055: (e, n, t) => {
            t.d(n, {
                Z: () => K
            });
            var i = t(785893),
                r = (t(667294),
                    t(202351)),
                o = t(882723),
                a = t(57141),
                u = t(875700),
                l = t(579581),
                c = t(19585),
                s = t(28661),
                d = t(73727),
                f = t(598007),
                p = t(557162),
                I = t(47038),
                _ = t(304493),
                b = t(979965),
                y = t(664625),
                Z = t(61209),
                O = t(27851),
                h = t(567403),
                v = t(682776),
                g = t(491260),
                E = t(840922),
                N = t(715107),
                T = t(436154),
                m = t(473903),
                S = t(407561),
                A = t(453007),
                M = t(773148),
                j = t(456826),
                L = t(258104),
                C = t(61040),
                P = t(774189),
                x = t(545580),
                G = t(71854),
                U = t(375342),
                w = t(483535),
                R = t(595258),
                D = t(88067),
                V = t(2590),
                Y = t(966334),
                k = t(473708);

            function F(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, i = new Array(n); t < n; t++) i[t] = e[t];
                return i
            }

            function H(e, n, t, i, r, o, a) {
                try {
                    var u = e[o](a),
                        l = u.value
                } catch (e) {
                    t(e);
                    return
                }
                u.done ? n(l) : Promise.resolve(l).then(i, r)
            }

            function J(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(i, r) {
                        var o = e.apply(n, t);

                        function a(e) {
                            H(o, i, r, a, u, "next", e)
                        }

                        function u(e) {
                            H(o, i, r, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function X(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function W(e, n) {
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

            function z(e) {
                return function(e) {
                    if (Array.isArray(e)) return F(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return F(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return F(e, n)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var B = function(e, n) {
                var t, i, r, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & r[0]) throw r[1];
                        return r[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function u(o) {
                    return function(u) {
                        return function(o) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (t = 1, i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, o[1])).done) return r;
                                (i = 0, r) && (o = [2 & o[0], r.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        r = o;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        i = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(r = a.trys, r = r.length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < r[1]) {
                                            a.label = r[1];
                                            r = o;
                                            break
                                        }
                                        if (r && a.label < r[2]) {
                                            a.label = r[2];
                                            a.ops.push(o);
                                            break
                                        }
                                        r[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                o = n.call(e, a)
                            } catch (e) {
                                o = [6, e];
                                i = 0
                            } finally {
                                t = r = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, u])
                    }
                }
            };

            function K(e, n) {
                var F = (0, c.Z)().analyticsLocations,
                    H = (0, r.e7)([m.default], (function() {
                        return m.default.getCurrentUser()
                    })),
                    K = (0, r.e7)([L.ZP], (function() {
                        return L.ZP.getSelfEmbeddedActivities()
                    })),
                    q = (0, r.Wu)([T.Z], (function() {
                        return T.Z.getActivities().filter((function(e) {
                            return null != e.application_id && !(null == K ? void 0 : K.has(e.application_id))
                        }))
                    })),
                    Q = (0, r.Wu)([g.Z], (function() {
                        return null != n ? g.Z.getActivities(n.id, null == e ? void 0 : e.getGuildId()) : []
                    }), [n, e]),
                    $ = (0, r.Wu)([L.ZP], (function() {
                        var t = null != (null == e ? void 0 : e.id) ? L.ZP.getEmbeddedActivitiesForChannel(e.id) : L.i6;
                        return null != n ? t.filter((function(e) {
                            return e.connections.has(n.id)
                        })) : t
                    }), [n, e]),
                    ee = (0, w.Z)(),
                    ne = (0, r.e7)([v.Z], (function() {
                        return null == e || e.isPrivate() || v.Z.can(V.Plq.SEND_MESSAGES, e)
                    }), [e]),
                    te = (0, r.Wu)([A.Z], (function() {
                        return z(Q.map((function(e) {
                            return null != e.application_id && A.Z.getState(e.application_id, V.mFx.JOIN) === V.OcF.LOADING
                        }))).concat(z($.map((function(e) {
                            return A.Z.getState(e.application_id, V.mFx.JOIN) === V.OcF.LOADING
                        }))))
                    }), [Q, $]),
                    ie = (0, s.Z)(z(Q.filter((function(e) {
                        return null != (null == e ? void 0 : e.application_id)
                    })).map((function(e) {
                        return e.application_id
                    }))).concat(z($.map((function(e) {
                        return e.application_id
                    }))))),
                    re = null == e ? void 0 : e.id,
                    oe = (0, r.Wu)([Z.Z, h.Z, O.Z, E.Z, N.Z, S.Z, v.Z], (function() {
                        return z(Q.map((function(e) {
                            return (0, P.Z)({
                                user: null != n ? n : H,
                                activity: e,
                                application: ie.find((function(n) {
                                    return (null == n ? void 0 : n.id) === e.application_id
                                })),
                                channelId: re,
                                currentUser: H,
                                isEmbedded: (0, G.Z)(e),
                                ChannelStore: Z.Z,
                                GuildStore: h.Z,
                                GuildMemberCountStore: O.Z,
                                RelationshipStore: E.Z,
                                SelectedChannelStore: N.Z,
                                VoiceStateStore: S.Z,
                                PermissionStore: v.Z
                            })
                        }))).concat(z($.map((function(e) {
                            return (0, P.Z)({
                                user: null != n ? n : H,
                                activity: e,
                                application: ie.find((function(n) {
                                    return (null == n ? void 0 : n.id) === e.application_id
                                })),
                                channelId: re,
                                currentUser: H,
                                isEmbedded: !0,
                                ChannelStore: Z.Z,
                                GuildStore: h.Z,
                                GuildMemberCountStore: O.Z,
                                RelationshipStore: E.Z,
                                SelectedChannelStore: N.Z,
                                VoiceStateStore: S.Z,
                                PermissionStore: v.Z
                            })
                        }))))
                    }), [Q, ie, re, H, $, n]),
                    ae = (0, r.Wu)([d.Z, y.default], (function() {
                        return Q.map((function(e) {
                            return e.type === V.IIU.LISTENING && null != n ? (0, I.Z)(d.Z, y.default, n, e) : void 0
                        }))
                    }), [n, Q]),
                    ue = (0, l.O)();
                if (!ne) return null;
                var le, ce = function(t, i) {
                        null != e ? a.Z.sendActivityInvite({
                            type: t,
                            channelId: e.id,
                            activity: i,
                            location: V.Sbl.CONTEXT_MENU
                        }) : null != n && a.Z.sendActivityInviteUser({
                            type: t,
                            userId: n.id,
                            activity: i,
                            location: V.Sbl.CONTEXT_MENU
                        })
                    },
                    se = function(r, a) {
                        var u = Z.Z.getChannel(r),
                            l = null == u ? void 0 : h.Z.getGuild(u.guild_id);
                        if (null != u && null != l) return null != n ? j.pu({
                            channelId: u.id,
                            applicationId: a,
                            userId: n.id,
                            location: V.t4x.CONTEXT_MENU
                        }) : null != e && e.type === V.d4z.GUILD_VOICE ? (0, o.openModalLazy)(J((function() {
                            var n, r;
                            return B(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(3790), t.e(56356), t.e(39813), t.e(30144), t.e(86502), t.e(67551), t.e(75442), t.e(88892)]).then(t.bind(t, 167551))];
                                    case 1:
                                        n = o.sent(), r = n.default;
                                        return [2, function(n) {
                                            return (0, i.jsx)(r, W(function(e) {
                                                for (var n = 1; n < arguments.length; n++) {
                                                    var t = null != arguments[n] ? arguments[n] : {},
                                                        i = Object.keys(t);
                                                    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                                                    }))));
                                                    i.forEach((function(n) {
                                                        X(e, n, t[n])
                                                    }))
                                                }
                                                return e
                                            }({}, n), {
                                                guild: l,
                                                channel: u,
                                                applicationId: a,
                                                analyticsLocation: e.type === V.d4z.GUILD_VOICE ? V.ZY5.GUILD_CHANNEL : V.ZY5.DM_CHANNEL,
                                                source: V.t4x.ACTIVITY_INVITE
                                            }))
                                        }]
                                }
                            }))
                        })), {
                            modalKey: "use-activity-items-embedded-invite-modal"
                        }) : null != (null == e ? void 0 : e.id) ? j.sN({
                            activityChannelId: u.id,
                            invitedChannelId: e.id,
                            applicationId: a,
                            location: V.t4x.CONTEXT_MENU
                        }) : void 0
                    },
                    de = (le = J((function(e) {
                        var t;
                        return B(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, u.Z.join({
                                        userId: n.id,
                                        sessionId: e.session_id,
                                        applicationId: e.application_id,
                                        channelId: N.Z.getVoiceChannelId(),
                                        messageId: null,
                                        intent: D.Ws.PLAY,
                                        embedded: (0, x.Z)(e, V.xjy.EMBEDDED)
                                    })];
                                case 1:
                                    i.sent();
                                    (0, U.Z)({
                                        type: V.q5t.JOIN,
                                        userId: n.id,
                                        applicationId: e.application_id,
                                        partyId: null === (t = e.party) || void 0 === t ? void 0 : t.id,
                                        locationObject: ue.location,
                                        analyticsLocations: F
                                    });
                                    return [2]
                            }
                        }))
                    })), function(e) {
                        return le.apply(this, arguments)
                    }),
                    fe = function() {
                        var n = J((function(n) {
                            return B(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, (0, C.Z)({
                                            activity: n,
                                            currentEmbeddedApplication: ee,
                                            activityChannelId: null == e ? void 0 : e.id,
                                            locationObject: ue.location,
                                            embeddedActivitiesManager: R.Z,
                                            analyticsLocations: F
                                        })];
                                    case 1:
                                        t.sent();
                                        return [2]
                                }
                            }))
                        }));
                        return function(e) {
                            return n.apply(this, arguments)
                        }
                    }(),
                    pe = [];
                null == K || K.forEach((function(t) {
                    var r = null != (null == n ? void 0 : n.id) && t.connections.has(null == n ? void 0 : n.id),
                        a = v.Z.can(V.Plq.CREATE_INSTANT_INVITE, e);
                    null != t.activity_id && !r && a && pe.push((0, i.jsx)(o.MenuItem, {
                        id: "invite-to-join-embedded",
                        label: k.Z.Messages.USER_ACTIVITY_ACTION_INVITE_TO_JOIN,
                        subtext: t.name,
                        action: function() {
                            se(t.channelId, t.application_id)
                        }
                    }, "self-embedded-".concat(t.application_id)))
                }));
                q.forEach((function(e, n) {
                    e.type === V.IIU.PLAYING && (0, x.Z)(e, V.xjy.JOIN) ? pe.push((0, i.jsx)(o.MenuItem, {
                        id: "invite-to-join",
                        label: k.Z.Messages.USER_ACTIVITY_ACTION_INVITE_TO_JOIN,
                        subtext: e.name,
                        action: function() {
                            return ce(V.mFx.JOIN, e)
                        }
                    }, "self".concat(n))) : e.type === V.IIU.LISTENING && (0, x.Z)(e, V.xjy.SYNC) && pe.push((0, i.jsx)(o.MenuItem, {
                        id: "invite-to-listen",
                        label: k.Z.Messages.USER_ACTIVITY_ACTION_INVITE_TO_LISTEN_ALONG,
                        subtext: e.name,
                        action: function() {
                            return ce(V.mFx.LISTEN, e)
                        }
                    }, "self".concat(n)))
                }));
                pe.length > 0 && pe.push((0, i.jsx)(o.MenuSeparator, {}));
                Q.forEach((function(t, r) {
                    if (t.type === V.IIU.PLAYING && (0, x.Z)(t, V.xjy.JOIN) && null != t.session_id && null != t.application_id)
                        if (oe[r]) {
                            var a = te[r];
                            pe.push((0, i.jsx)(o.MenuItem, {
                                id: "join",
                                label: a ? k.Z.Messages.USER_ACTIVITY_JOINING : k.Z.Messages.JOIN,
                                disabled: a,
                                hint: a ? (0, i.jsx)(o.Spinner, {
                                    type: o.Spinner.Type.PULSING_ELLIPSIS
                                }) : null,
                                subtext: t.name,
                                action: function() {
                                    return de(t)
                                }
                            }, r))
                        } else pe.push((0, i.jsx)(o.MenuItem, {
                            id: "ask-to-join",
                            label: k.Z.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN,
                            subtext: t.name,
                            action: function() {
                                return ce(V.mFx.JOIN_REQUEST, t)
                            }
                        }, r));
                    else if (t.type === V.IIU.LISTENING && (0, x.Z)(t, V.xjy.SYNC) && null != ae[r]) {
                        var u = ae[r],
                            l = u.notPlayable,
                            c = u.playingSameTrack,
                            s = u.isCurrentUser,
                            d = u.syncingWithUser,
                            I = u.syncingWithParty,
                            y = s || l || c,
                            Z = s || d || I;
                        pe.push((0, i.jsx)(o.MenuItem, {
                            id: "spotify-play-".concat(t.session_id),
                            action: function() {
                                return (0, b.Z)(u, Y.kG.USER_ACTIVITY_PLAY)
                            },
                            label: (0, f.Z)(u, Y.kG.USER_ACTIVITY_PLAY),
                            subtext: y ? (0, p.Z)(u, Y.kG.USER_ACTIVITY_PLAY, null != e ? M.ZP.getNickname(e.guild_id, e.id, n) : void 0) : void 0,
                            disabled: y
                        }, "spotify-play-".concat(t.session_id)), (0, i.jsx)(o.MenuItem, {
                            id: "spotify-sync-".concat(t.session_id),
                            action: function() {
                                return (0, _.Z)(u, Y.kG.USER_ACTIVITY_SYNC)
                            },
                            label: k.Z.Messages.USER_ACTIVITY_LISTEN_ALONG,
                            subtext: Z ? (0, p.Z)(u, Y.kG.USER_ACTIVITY_SYNC, null != e ? M.ZP.getNickname(e.guild_id, e.id, n) : void 0) : void 0,
                            disabled: Z
                        }, "spotify-sync-".concat(t.session_id)))
                    }
                }));
                $.forEach((function(e, n) {
                    var t, r = e.connections.has(null !== (t = null == H ? void 0 : H.id) && void 0 !== t ? t : ""),
                        a = n + Q.length,
                        u = te[a] || r,
                        l = k.Z.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY;
                    r ? l = k.Z.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF : te[a] && (l = k.Z.Messages.USER_ACTIVITY_JOINING);
                    oe[a] && pe.push((0, i.jsx)(o.MenuItem, {
                        id: "embedded-activity-join-".concat(e.application_id),
                        label: l,
                        disabled: u,
                        hint: te[a] ? (0, i.jsx)(o.Spinner, {
                            type: o.Spinner.Type.PULSING_ELLIPSIS
                        }) : null,
                        subtext: e.name,
                        action: function() {
                            return fe(e)
                        }
                    }, "embedded-activity-".concat(e.application_id)))
                }));
                return pe
            }
        },
        929653: (e, n, t) => {
            t.d(n, {
                Z: () => _
            });
            var i = t(785893),
                r = (t(667294), t(202351)),
                o = t(882723),
                a = t(496916),
                u = t(358969),
                l = t(536945),
                c = t(487685),
                s = t(382060),
                d = t(877475),
                f = t(717091),
                p = t(2590),
                I = t(473708);

            function _(e) {
                var n = function(e) {
                    var n = (0, u.n2)(e.guild_id, e.id),
                        t = (0,
                            r.e7)([f.ZP, d.Z, l.Z, c.Z], (function() {
                            if (e.isForumPost()) return f.ZP.isForumPostUnread(e.id);
                            if (e.type === p.d4z.GUILD_CATEGORY) {
                                var n = d.Z.getCategories(e.getGuildId());
                                if (null == n[e.id]) return !1;
                                if (n[e.id].some((function(e) {
                                        var n = e.channel;
                                        return (0, s.Em)(n.type) && f.ZP.hasUnread(n.id)
                                    }))) return !0;
                                var t = new Set(n[e.id].map((function(e) {
                                        return e.channel.id
                                    }))),
                                    i = l.Z.getThreadsForGuild(e.guild_id);
                                for (var r in i)
                                    if (t.has(r))
                                        for (var o in i[r])
                                            if (c.Z.hasJoined(o) && !c.Z.isMuted(o) && f.ZP.hasUnread(o)) return !0;
                                return !1
                            }
                            return f.ZP.hasUnread(e.id)
                        }), [e]);
                    return e.isForumLikeChannel() ? n > 0 : t
                }(e);
                return (0, i.jsx)(o.MenuItem, {
                    id: "mark-channel-read",
                    label: I.Z.Messages.MARK_AS_READ,
                    action: function() {
                        (0, a.U6)(e)
                    },
                    disabled: !n
                })
            }
        },
        249971: (e, n, t) => {
            t.d(n, {
                Z: () => d
            });
            var i = t(785893),
                r = (t(667294), t(202351)),
                o = t(882723),
                a = t(347834),
                u = t(364269),
                l = t(9430),
                c = t(2590),
                s = t(473708);

            function d(e) {
                var n = (0, u.DM)(e.guild_id),
                    t = (0, r.e7)([l.Z], (function() {
                        return l.Z.isChannelOptedIn(e.guild_id, e.id)
                    })),
                    d = (0,
                        r.e7)([l.Z], (function() {
                        return null != e.parent_id && l.Z.isChannelOptedIn(e.guild_id, e.parent_id)
                    })),
                    f = (0, r.e7)([l.Z], (function() {
                        return l.Z.isFavorite(e.guild_id, e.id)
                    })),
                    p = function() {
                        (0, a.XQ)(e.guild_id, e.id, !t, {
                            section: c.jXE.CONTEXT_MENU
                        })
                    };
                return !n || e.isThread() ? null : e.isCategory() ? (0, i.jsx)(o.MenuItem, {
                    id: "opt-into-category",
                    label: t ? s.Z.Messages.CHANNEL_OPT_OUT : s.Z.Messages.CHANNEL_OPT_IN,
                    action: function() {
                        return p()
                    }
                }) : (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(o.MenuItem, {
                        id: "opt-in-favorite-channel",
                        label: f ? s.Z.Messages.REMOVE_FAVORITE : s.Z.Messages.ADD_FAVORITE,
                        action: function() {
                            (0, a.dM)(e.guild_id, e.id, !f, {
                                section: c.jXE.CONTEXT_MENU
                            })
                        }
                    }), d ? (0, i.jsx)(o.MenuItem, {
                        id: "opt-out-category",
                        label: s.Z.Messages.CHANNEL_OPT_OUT_PARENT_CATEGORY,
                        action: function() {
                            null != e.parent_id && (0, a.XQ)(e.guild_id, e.parent_id, !1, {
                                section: c.jXE.CONTEXT_MENU
                            })
                        }
                    }) : (0, i.jsx)(o.MenuItem, {
                        id: "opt-into-channel",
                        label: t ? s.Z.Messages.CHANNEL_OPT_OUT : s.Z.Messages.CHANNEL_OPT_IN,
                        action: function() {
                            return p()
                        }
                    })]
                })
            }
        },
        143343: (e, n, t) => {
            t.d(n, {
                Z: () => p
            });
            var i = t(785893),
                r = (t(667294), t(202351)),
                o = t(882723),
                a = t(873936),
                u = t(998918),
                l = t(839266),
                c = t(9430),
                s = t(736401),
                d = t(473708);

            function f(e) {
                var n = (0, l.nH)(e),
                    t = function(e) {
                        return [{
                            setting: s.N.NULL,
                            label: null != e.parent_id ? d.Z.Messages.FORM_LABEL_DEFAULT_CATEGORY : d.Z.Messages.FORM_LABEL_DEFAULT
                        }, {
                            setting: s.N.ALL_MESSAGES,
                            label: d.Z.Messages.FORM_LABEL_ALL_MESSAGES
                        }, {
                            setting: s.N.MENTIONS_AND_HIGHLIGHTS,
                            label: d.Z.Messages.HIGHLIGHTS_AND_MENTIONS
                        }]
                    }(e);
                return (0, i.jsx)(i.Fragment, {
                    children: t.map((function(t) {
                        var r = t.setting,
                            u = t.label;
                        return (0, i.jsx)(o.MenuRadioItem, {
                            group: "channel-unreads",
                            id: "".concat(r),
                            label: u,
                            subtext: r === s.N.NULL ? d.Z.Messages.HIGHLIGHTS_AND_MENTIONS : void 0,
                            action: function() {
                                return function(n) {
                                    (0, a.MR)(e.guild_id, e.id, n)
                                }(r)
                            },
                            checked: r === n
                        }, r)
                    }))
                })
            }

            function p(e) {
                var n = (0, l.nH)(e),
                    t = (0, u.RX)(),
                    a = (0, r.e7)([c.Z], (function() {
                        return c.Z.isGuildUnreadSettingEnabled(e.guild_id)
                    })),
                    p = t && a,
                    I = f(e);
                return p ? (0, i.jsx)(o.MenuItem, {
                    id: "channel-unreads",
                    label: d.Z.Messages.UNREAD_SETTINGS,
                    subtext: n === s.N.ALL_MESSAGES ? d.Z.Messages.FORM_LABEL_ALL_MESSAGES : d.Z.Messages.HIGHLIGHTS_AND_MENTIONS,
                    children: I
                }) : null
            }
        },
        207227: (e, n, t) => {
            t.d(n, {
                Z: () => a
            });
            var i = t(202351),
                r = t(464187),
                o = t(2590);

            function a() {
                return (0, i.e7)([r.Z], (function() {
                    return r.Z.getGuildId()
                })) === o.I_8
            }
        },
        13280: (e, n, t) => {
            t.d(n, {
                Z: () => p
            });
            var i = t(785893),
                r = (t(667294), t(202351)),
                o = t(882723),
                a = t(5544),
                u = t(419051),
                l = t(963985),
                c = t(790337),
                s = t(2590),
                d = t(473708);

            function f(e, n) {
                return e.type === s.d4z.GROUP_DM ? n ? d.Z.Messages.UNFAVORITE_GDM : d.Z.Messages.FAVORITE_GDM : e.type === s.d4z.DM ? n ? d.Z.Messages.UNFAVORITE_DM : d.Z.Messages.FAVORITE_DM : n ? d.Z.Messages.UNFAVORITE_CHANNEL : d.Z.Messages.FAVORITE_CHANNEL
            }

            function p(e) {
                var n = (0, r.e7)([u.Z], (function() {
                        return u.Z.isFavorite(e.id)
                    })),
                    t = function(e) {
                        var n = function(n) {
                                (0, l.kj)(e.id, n)
                            },
                            t = (0, r.e7)([a.ZP], (function() {
                                return a.ZP.getChannels(s.I_8)
                            }))[s.d4z.GUILD_CATEGORY].filter((function(e) {
                                return "null" !== e.channel.id
                            }));
                        return c.Z.useExperiment({
                            location: "58e21a_1"
                        }, {
                            autoTrackExposure: !1
                        }).favoritesEnabled ? 0 === t.length ? (0, i.jsx)(o.MenuItem, {
                            id: "favorite-channel",
                            label: f(e, !1),
                            action: function() {
                                return n(null)
                            }
                        }) : (0, i.jsx)(o.MenuItem, {
                            id: "favorite-channel",
                            label: f(e, !1),
                            action: function() {
                                return n(null)
                            },
                            children: t.map((function(e) {
                                return (0, i.jsx)(o.MenuItem, {
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
                        return (0, i.jsx)(o.MenuItem, {
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
                Z: () => I
            });
            var i = t(785893),
                r = (t(667294), t(202351)),
                o = t(882723),
                a = t(464187),
                u = t(2590),
                l = t(473708);

            function c(e, n, t, i, r, o, a) {
                try {
                    var u = e[o](a),
                        l = u.value
                } catch (e) {
                    t(e);
                    return
                }
                u.done ? n(l) : Promise.resolve(l).then(i, r)
            }

            function s(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(i, r) {
                        var o = e.apply(n, t);

                        function a(e) {
                            c(o, i, r, a, u, "next", e)
                        }

                        function u(e) {
                            c(o, i, r, a, u, "throw", e)
                        }
                        a(void 0)
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
            var p = function(e, n) {
                var t, i, r, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & r[0]) throw r[1];
                        return r[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function u(o) {
                    return function(u) {
                        return function(o) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (t = 1,
                                    i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, o[1])).done) return r;
                                (i = 0, r) && (o = [2 & o[0], r.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        r = o;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        i = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(r = a.trys, r = r.length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < r[1]) {
                                            a.label = r[1];
                                            r = o;
                                            break
                                        }
                                        if (r && a.label < r[2]) {
                                            a.label = r[2];
                                            a.ops.push(o);
                                            break
                                        }
                                        r[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                o = n.call(e, a)
                            } catch (e) {
                                o = [6, e];
                                i = 0
                            } finally {
                                t = r = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, u])
                    }
                }
            };

            function I(e) {
                var n = (0, r.e7)([a.Z], (function() {
                    return a.Z.getGuildId()
                }));
                return __OVERLAY__ || n !== u.I_8 ? null : (0, i.jsx)(o.MenuItem, {
                    id: "set-channel-nickname",
                    label: l.Z.Messages.CHANGE_NICKNAME,
                    action: function() {
                        (0, o.openModalLazy)(s((function() {
                            var n, r;
                            return p(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(77876)]).then(t.bind(t, 577876))];
                                    case 1:
                                        n = o.sent(), r = n.default;
                                        return [2, function(n) {
                                            return (0, i.jsx)(r, f(function(e) {
                                                for (var n = 1; n < arguments.length; n++) {
                                                    var t = null != arguments[n] ? arguments[n] : {},
                                                        i = Object.keys(t);
                                                    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                                                    }))));
                                                    i.forEach((function(n) {
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
        842748: (e, n, t) => {
            t.d(n, {
                Z: () => s
            });
            var i = t(785893),
                r = (t(667294), t(202351)),
                o = t(882723),
                a = t(784426),
                u = t(464187),
                l = t(2590),
                c = t(473708);

            function s(e) {
                var n = (0, r.e7)([u.Z], (function() {
                    return u.Z.getGuildId()
                }));
                return __OVERLAY__ || n !== l.I_8 ? null : (0, i.jsx)(o.MenuItem, {
                    id: "go-to-original-guild",
                    label: c.Z.Messages.FAVORITES_GO_TO_ORIGINAL_GUILD,
                    action: function() {
                        (0, a.XU)(e.guild_id, e.id)
                    }
                })
            }
        }
    }
]);
//# sourceMappingURL=9128bcc82f2d5cb89aa7.js.map