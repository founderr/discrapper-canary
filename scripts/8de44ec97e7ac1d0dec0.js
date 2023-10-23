"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [83329], {
        343639: (n, e, t) => {
            t.d(e, {
                Z: () => u
            });
            var i = t(785893),
                r = (t(667294), t(213276));

            function o(n, e, t) {
                e in n ? Object.defineProperty(n, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = t;
                return n
            }

            function a(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {},
                        i = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
                        return Object.getOwnPropertyDescriptor(t, n).enumerable
                    }))));
                    i.forEach((function(e) {
                        o(n, e, t[e])
                    }))
                }
                return n
            }

            function u(n, e) {
                return function(t) {
                    return (0, i.jsx)(r.Z, {
                        page: e.page,
                        section: e.section,
                        object: e.object,
                        objectType: e.objectType,
                        children: (0, i.jsx)(n, a({}, t))
                    })
                }
            }
        },
        567678: (n, e, t) => {
            t.d(e, {
                Z: () => u
            });
            var i = t(785893),
                r = (t(667294), t(19585));

            function o(n, e, t) {
                e in n ? Object.defineProperty(n, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = t;
                return n
            }

            function a(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {},
                        i = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
                        return Object.getOwnPropertyDescriptor(t, n).enumerable
                    }))));
                    i.forEach((function(e) {
                        o(n, e, t[e])
                    }))
                }
                return n
            }

            function u(n, e) {
                return function(t) {
                    var o = (0, r.Z)(e).AnalyticsLocationProvider;
                    return (0, i.jsx)(o, {
                        children: (0, i.jsx)(n, a({}, t))
                    })
                }
            }
        },
        82055: (n, e, t) => {
            t.d(e, {
                Z: () => H
            });
            var i = t(785893),
                r = (t(667294), t(202351)),
                o = t(70418),
                a = t(57141),
                u = t(875700),
                c = t(579581),
                l = t(19585),
                s = t(28661),
                d = t(73727),
                p = t(598007),
                f = t(557162),
                I = t(47038),
                y = t(304493),
                b = t(979965),
                v = t(664625),
                _ = t(61209),
                h = t(27851),
                S = t(567403),
                Z = t(682776),
                O = t(491260),
                m = t(840922),
                T = t(715107),
                E = t(436154),
                N = t(473903),
                g = t(407561),
                j = t(453007),
                A = t(773148),
                C = t(873247),
                P = t(258104),
                x = t(61040),
                w = t(774189),
                U = t(545580),
                L = t(71854),
                M = t(375342),
                G = t(483535),
                Y = t(209238),
                V = t(88067),
                k = t(2590),
                D = t(966334),
                R = t(473708);

            function J(n, e) {
                (null == e || e > n.length) && (e = n.length);
                for (var t = 0, i = new Array(e); t < e; t++) i[t] = n[t];
                return i
            }

            function F(n, e, t, i, r, o, a) {
                try {
                    var u = n[o](a),
                        c = u.value
                } catch (n) {
                    t(n);
                    return
                }
                u.done ? e(c) : Promise.resolve(c).then(i, r)
            }

            function W(n) {
                return function() {
                    var e = this,
                        t = arguments;
                    return new Promise((function(i, r) {
                        var o = n.apply(e, t);

                        function a(n) {
                            F(o, i, r, a, u, "next", n)
                        }

                        function u(n) {
                            F(o, i, r, a, u, "throw", n)
                        }
                        a(void 0)
                    }))
                }
            }

            function X(n, e, t) {
                e in n ? Object.defineProperty(n, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = t;
                return n
            }

            function q(n, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : function(n, e) {
                    var t = Object.keys(n);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(n);
                        e && (i = i.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        })));
                        t.push.apply(t, i)
                    }
                    return t
                }(Object(e)).forEach((function(t) {
                    Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(e, t))
                }));
                return n
            }

            function z(n) {
                return function(n) {
                    if (Array.isArray(n)) return J(n)
                }(n) || function(n) {
                    if ("undefined" != typeof Symbol && null != n[Symbol.iterator] || null != n["@@iterator"]) return Array.from(n)
                }(n) || function(n, e) {
                    if (!n) return;
                    if ("string" == typeof n) return J(n, e);
                    var t = Object.prototype.toString.call(n).slice(8, -1);
                    "Object" === t && n.constructor && (t = n.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return J(n, e)
                }(n) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var B = function(n, e) {
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
                                o = e.call(n, a)
                            } catch (n) {
                                o = [6, n];
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

            function H(n, e) {
                var J = (0, l.Z)().analyticsLocations,
                    F = (0, r.e7)([N.default], (function() {
                        return N.default.getCurrentUser()
                    })),
                    H = (0, r.e7)([P.ZP], (function() {
                        return P.ZP.getSelfEmbeddedActivities()
                    })),
                    K = (0, r.Wu)([E.Z], (function() {
                        return E.Z.getActivities().filter((function(n) {
                            return null != n.application_id && !(null == H ? void 0 : H.has(n.application_id))
                        }))
                    })),
                    Q = (0, r.Wu)([O.Z], (function() {
                        return null != e ? O.Z.getActivities(e.id, null == n ? void 0 : n.getGuildId()) : []
                    }), [e, n]),
                    $ = (0, r.Wu)([P.ZP], (function() {
                        var t = null != (null == n ? void 0 : n.id) ? P.ZP.getEmbeddedActivitiesForChannel(n.id) : P.i6;
                        return null != e ? t.filter((function(n) {
                            return n.connections.has(e.id)
                        })) : t
                    }), [e, n]),
                    nn = (0, G.Z)(),
                    en = (0, r.e7)([Z.Z], (function() {
                        return null == n || n.isPrivate() || Z.Z.can(k.Plq.SEND_MESSAGES, n)
                    }), [n]),
                    tn = (0, r.Wu)([j.Z], (function() {
                        return z(Q.map((function(n) {
                            return null != n.application_id && j.Z.getState(n.application_id, k.mFx.JOIN) === k.OcF.LOADING
                        }))).concat(z($.map((function(n) {
                            return j.Z.getState(n.application_id, k.mFx.JOIN) === k.OcF.LOADING
                        }))))
                    }), [Q, $]),
                    rn = (0, s.Z)(z(Q.filter((function(n) {
                        return null != (null == n ? void 0 : n.application_id)
                    })).map((function(n) {
                        return n.application_id
                    }))).concat(z($.map((function(n) {
                        return n.application_id
                    }))))),
                    on = null == n ? void 0 : n.id,
                    an = (0,
                        r.Wu)([_.Z, S.Z, h.Z, m.Z, T.Z, g.Z, Z.Z], (function() {
                        return z(Q.map((function(n) {
                            return (0, w.Z)({
                                user: null != e ? e : F,
                                activity: n,
                                application: rn.find((function(e) {
                                    return (null == e ? void 0 : e.id) === n.application_id
                                })),
                                channelId: on,
                                currentUser: F,
                                isEmbedded: (0, L.Z)(n),
                                ChannelStore: _.Z,
                                GuildStore: S.Z,
                                GuildMemberCountStore: h.Z,
                                RelationshipStore: m.Z,
                                SelectedChannelStore: T.Z,
                                VoiceStateStore: g.Z,
                                PermissionStore: Z.Z
                            })
                        }))).concat(z($.map((function(n) {
                            return (0, w.Z)({
                                user: null != e ? e : F,
                                activity: n,
                                application: rn.find((function(e) {
                                    return (null == e ? void 0 : e.id) === n.application_id
                                })),
                                channelId: on,
                                currentUser: F,
                                isEmbedded: !0,
                                ChannelStore: _.Z,
                                GuildStore: S.Z,
                                GuildMemberCountStore: h.Z,
                                RelationshipStore: m.Z,
                                SelectedChannelStore: T.Z,
                                VoiceStateStore: g.Z,
                                PermissionStore: Z.Z
                            })
                        }))))
                    }), [Q, rn, on, F, $, e]),
                    un = (0, r.Wu)([d.Z, v.default], (function() {
                        return Q.map((function(n) {
                            return n.type === k.IIU.LISTENING && null != e ? (0, I.Z)(d.Z, v.default, e, n) : void 0
                        }))
                    }), [e, Q]),
                    cn = (0, c.O)();
                if (!en) return null;
                var ln, sn = function(t, i) {
                        null != n ? a.Z.sendActivityInvite({
                            type: t,
                            channelId: n.id,
                            activity: i,
                            location: k.Sbl.CONTEXT_MENU
                        }) : null != e && a.Z.sendActivityInviteUser({
                            type: t,
                            userId: e.id,
                            activity: i,
                            location: k.Sbl.CONTEXT_MENU
                        })
                    },
                    dn = function(r, a) {
                        var u = _.Z.getChannel(r),
                            c = null == u ? void 0 : S.Z.getGuild(u.guild_id);
                        if (null != u && null != c) return null != e ? C.pu({
                            channelId: u.id,
                            applicationId: a,
                            userId: e.id,
                            location: k.t4x.CONTEXT_MENU
                        }) : null != n && n.type === k.d4z.GUILD_VOICE ? (0, o.openModalLazy)(W((function() {
                            var e, r;
                            return B(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(86502), t.e(67551), t.e(75442), t.e(19389)]).then(t.bind(t, 167551))];
                                    case 1:
                                        e = o.sent(), r = e.default;
                                        return [2, function(e) {
                                            return (0, i.jsx)(r, q(function(n) {
                                                for (var e = 1; e < arguments.length; e++) {
                                                    var t = null != arguments[e] ? arguments[e] : {},
                                                        i = Object.keys(t);
                                                    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
                                                        return Object.getOwnPropertyDescriptor(t, n).enumerable
                                                    }))));
                                                    i.forEach((function(e) {
                                                        X(n, e, t[e])
                                                    }))
                                                }
                                                return n
                                            }({}, e), {
                                                guild: c,
                                                channel: u,
                                                applicationId: a,
                                                analyticsLocation: n.type === k.d4z.GUILD_VOICE ? k.ZY5.GUILD_CHANNEL : k.ZY5.DM_CHANNEL,
                                                source: k.t4x.ACTIVITY_INVITE
                                            }))
                                        }]
                                }
                            }))
                        })), {
                            modalKey: "use-activity-items-embedded-invite-modal"
                        }) : null != (null == n ? void 0 : n.id) ? C.sN({
                            activityChannelId: u.id,
                            invitedChannelId: n.id,
                            applicationId: a,
                            location: k.t4x.CONTEXT_MENU
                        }) : void 0
                    },
                    pn = (ln = W((function(n) {
                        var t;
                        return B(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, u.Z.join({
                                        userId: e.id,
                                        sessionId: n.session_id,
                                        applicationId: n.application_id,
                                        channelId: T.Z.getVoiceChannelId(),
                                        messageId: null,
                                        intent: V.Ws.PLAY,
                                        embedded: (0, U.Z)(n, k.xjy.EMBEDDED)
                                    })];
                                case 1:
                                    i.sent();
                                    (0, M.Z)({
                                        type: k.q5t.JOIN,
                                        userId: e.id,
                                        applicationId: n.application_id,
                                        partyId: null === (t = n.party) || void 0 === t ? void 0 : t.id,
                                        locationObject: cn.location,
                                        analyticsLocations: J
                                    });
                                    return [2]
                            }
                        }))
                    })), function(n) {
                        return ln.apply(this, arguments)
                    }),
                    fn = function() {
                        var e = W((function(e) {
                            return B(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, (0, x.Z)({
                                            activity: e,
                                            currentEmbeddedApplication: nn,
                                            activityChannelId: null == n ? void 0 : n.id,
                                            locationObject: cn.location,
                                            embeddedActivitiesManager: Y.Z,
                                            analyticsLocations: J
                                        })];
                                    case 1:
                                        t.sent();
                                        return [2]
                                }
                            }))
                        }));
                        return function(n) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    In = [];
                null == H || H.forEach((function(t) {
                    var r = null != (null == e ? void 0 : e.id) && t.connections.has(null == e ? void 0 : e.id),
                        a = Z.Z.can(k.Plq.CREATE_INSTANT_INVITE, n);
                    null != t.activity_id && !r && a && In.push((0, i.jsx)(o.MenuItem, {
                        id: "invite-to-join-embedded",
                        label: R.Z.Messages.USER_ACTIVITY_ACTION_INVITE_TO_JOIN,
                        subtext: t.name,
                        action: function() {
                            dn(t.channelId, t.application_id)
                        }
                    }, "self-embedded-".concat(t.application_id)))
                }));
                K.forEach((function(n, e) {
                    n.type === k.IIU.PLAYING && (0, U.Z)(n, k.xjy.JOIN) ? In.push((0, i.jsx)(o.MenuItem, {
                        id: "invite-to-join",
                        label: R.Z.Messages.USER_ACTIVITY_ACTION_INVITE_TO_JOIN,
                        subtext: n.name,
                        action: function() {
                            return sn(k.mFx.JOIN, n)
                        }
                    }, "self".concat(e))) : n.type === k.IIU.LISTENING && (0, U.Z)(n, k.xjy.SYNC) && In.push((0, i.jsx)(o.MenuItem, {
                        id: "invite-to-listen",
                        label: R.Z.Messages.USER_ACTIVITY_ACTION_INVITE_TO_LISTEN_ALONG,
                        subtext: n.name,
                        action: function() {
                            return sn(k.mFx.LISTEN, n)
                        }
                    }, "self".concat(e)))
                }));
                In.length > 0 && In.push((0, i.jsx)(o.MenuSeparator, {}));
                Q.forEach((function(t, r) {
                    if (t.type === k.IIU.PLAYING && (0, U.Z)(t, k.xjy.JOIN) && null != t.session_id && null != t.application_id)
                        if (an[r]) {
                            var a = tn[r];
                            In.push((0, i.jsx)(o.MenuItem, {
                                id: "join",
                                label: a ? R.Z.Messages.USER_ACTIVITY_JOINING : R.Z.Messages.JOIN,
                                disabled: a,
                                hint: a ? (0, i.jsx)(o.Spinner, {
                                    type: o.Spinner.Type.PULSING_ELLIPSIS
                                }) : null,
                                subtext: t.name,
                                action: function() {
                                    return pn(t)
                                }
                            }, r))
                        } else In.push((0, i.jsx)(o.MenuItem, {
                            id: "ask-to-join",
                            label: R.Z.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN,
                            subtext: t.name,
                            action: function() {
                                return sn(k.mFx.JOIN_REQUEST, t)
                            }
                        }, r));
                    else if (t.type === k.IIU.LISTENING && (0, U.Z)(t, k.xjy.SYNC) && null != un[r]) {
                        var u = un[r],
                            c = u.notPlayable,
                            l = u.playingSameTrack,
                            s = u.isCurrentUser,
                            d = u.syncingWithUser,
                            I = u.syncingWithParty,
                            v = s || c || l,
                            _ = s || d || I;
                        In.push((0, i.jsx)(o.MenuItem, {
                            id: "spotify-play-".concat(t.session_id),
                            action: function() {
                                return (0, b.Z)(u, D.kG.USER_ACTIVITY_PLAY)
                            },
                            label: (0, p.Z)(u, D.kG.USER_ACTIVITY_PLAY),
                            subtext: v ? (0, f.Z)(u, D.kG.USER_ACTIVITY_PLAY, null != n ? A.ZP.getNickname(n.guild_id, n.id, e) : void 0) : void 0,
                            disabled: v
                        }, "spotify-play-".concat(t.session_id)), (0, i.jsx)(o.MenuItem, {
                            id: "spotify-sync-".concat(t.session_id),
                            action: function() {
                                return (0, y.Z)(u, D.kG.USER_ACTIVITY_SYNC)
                            },
                            label: R.Z.Messages.USER_ACTIVITY_LISTEN_ALONG,
                            subtext: _ ? (0, f.Z)(u, D.kG.USER_ACTIVITY_SYNC, null != n ? A.ZP.getNickname(n.guild_id, n.id, e) : void 0) : void 0,
                            disabled: _
                        }, "spotify-sync-".concat(t.session_id)))
                    }
                }));
                $.forEach((function(n, e) {
                    var t, r = n.connections.has(null !== (t = null == F ? void 0 : F.id) && void 0 !== t ? t : ""),
                        a = e + Q.length,
                        u = tn[a] || r,
                        c = R.Z.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY;
                    r ? c = R.Z.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF : tn[a] && (c = R.Z.Messages.USER_ACTIVITY_JOINING);
                    an[a] && In.push((0, i.jsx)(o.MenuItem, {
                        id: "embedded-activity-join-".concat(n.application_id),
                        label: c,
                        disabled: u,
                        hint: tn[a] ? (0, i.jsx)(o.Spinner, {
                            type: o.Spinner.Type.PULSING_ELLIPSIS
                        }) : null,
                        subtext: n.name,
                        action: function() {
                            return fn(n)
                        }
                    }, "embedded-activity-".concat(n.application_id)))
                }));
                return In
            }
        }
    }
]);