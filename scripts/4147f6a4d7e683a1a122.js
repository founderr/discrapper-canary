"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [67367], {
        247250: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(744564),
                i = n(396043),
                o = n(652591),
                u = n(930948),
                l = n(2590);

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function c(e) {
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
            }
            const s = {
                rebuildRTCActiveChannels: function() {
                    r.Z.dispatch({
                        type: "CHANNEL_RTC_ACTIVE_CHANNELS"
                    })
                },
                selectParticipant: function(e, t) {
                    r.Z.dispatch({
                        type: "CHANNEL_RTC_SELECT_PARTICIPANT",
                        channelId: e,
                        id: t
                    })
                },
                updateLayout: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.IlC.APP;
                    o.default.track(l.rMx.VIDEO_LAYOUT_TOGGLED, c({
                        video_layout: t
                    }, (0,
                        i.AB)(e)));
                    r.Z.dispatch({
                        type: "CHANNEL_RTC_UPDATE_LAYOUT",
                        channelId: e,
                        layout: t,
                        appContext: n
                    })
                },
                toggleParticipants: function(e, t) {
                    r.Z.dispatch({
                        type: "CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN",
                        channelId: e,
                        participantsOpen: t
                    })
                },
                toggleVoiceParticipantsHidden: function(e, t) {
                    r.Z.dispatch({
                        type: "CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN",
                        channelId: e,
                        voiceParticipantsHidden: t
                    })
                },
                updateStageStreamSize: function(e, t) {
                    r.Z.dispatch({
                        type: "CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE",
                        channelId: e,
                        large: t
                    })
                },
                updateStageVideoLimitBoostUpsellDismissed: function(e, t) {
                    r.Z.dispatch({
                        type: "CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED",
                        channelId: e,
                        dismissed: t
                    })
                },
                updateChatOpen: function(e, t) {
                    r.Z.dispatch({
                        type: "CHANNEL_RTC_UPDATE_CHAT_OPEN",
                        channelId: e,
                        chatOpen: t
                    });
                    t ? setTimeout((function() {
                        u.S.dispatch(l.CkL.FOCUS_CHANNEL_TEXT_AREA, {
                            channelId: e
                        })
                    }), 0) : u.S.dispatch(l.CkL.FOCUS_CHAT_BUTTON)
                }
            }
        },
        667569: (e, t, n) => {
            n.d(t, {
                Z: () => de,
                B: () => fe
            });
            var r = n(131795),
                i = n.n(r),
                o = n(571657),
                u = n(125333),
                l = n(58964),
                a = n(97245),
                c = n(281110),
                s = n(744564),
                f = n(539381),
                d = n(973889);
            var p = n(269823),
                v = n(585548),
                h = n(773411),
                y = n(276985),
                E = n(716371),
                b = n(260561),
                _ = n(848465);
            const O = (0, b.B)({
                kind: "guild",
                id: "2023-07_server_guide_trigger",
                label: "server guide guild experiment for triggering purposes",
                defaultConfig: {
                    trigger: !1
                },
                treatments: [{
                    id: 1,
                    label: "useless treatment",
                    config: {
                        trigger: !0
                    }
                }]
            });
            var I = (0, b.B)({
                kind: "user",
                id: "2023-05_land_on_server_guide",
                label: "Land users on server guide",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Users land on server guide when joining a guild via invite",
                    config: {
                        enabled: !0
                    }
                }, {
                    id: 42,
                    label: "[untracked] Users land on server guide when joining a guild via invite",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var g = n(382840),
                m = n(269300),
                T = n(354793),
                P = n(641453),
                S = n(426307),
                w = n(3930),
                A = n(627794),
                N = n(784426),
                C = n(915840),
                R = n(382060),
                Z = n(664625),
                D = n(61209),
                j = n(5544),
                M = n(21372),
                L = n(567403),
                V = n(746477),
                U = n(869160),
                F = n(682776),
                x = n(473903),
                k = n(652591),
                B = n(391438),
                G = n(877815),
                H = n(327499),
                W = n(481008),
                K = n(2590),
                q = n(897196),
                z = n(443132),
                Y = n(718634),
                Q = n(79462);

            function J(e, t, n, r, i, o, u) {
                try {
                    var l = e[o](u),
                        a = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(a) : Promise.resolve(a).then(r, i)
            }

            function X(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function u(e) {
                            J(o, r, i, u, l, "next", e)
                        }

                        function l(e) {
                            J(o, r, i, u, l, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function $(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function ee(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        $(e, t, n[t])
                    }))
                }
                return e
            }

            function te(e, t) {
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
            var ne = function(e, t) {
                    var n, r, i, o, u = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function l(o) {
                        return function(l) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; u;) try {
                                    if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r),
                                            0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                    (r = 0, i) && (o = [2 & o[0], i.value]);
                                    switch (o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            u.label++;
                                            return {
                                                value: o[1], done: !1
                                            };
                                        case 5:
                                            u.label++;
                                            r = o[1];
                                            o = [0];
                                            continue;
                                        case 7:
                                            o = u.ops.pop();
                                            u.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = u.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                u = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                u.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && u.label < i[1]) {
                                                u.label = i[1];
                                                i = o;
                                                break
                                            }
                                            if (i && u.label < i[2]) {
                                                u.label = i[2];
                                                u.ops.push(o);
                                                break
                                            }
                                            i[2] && u.ops.pop();
                                            u.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, u)
                                } catch (e) {
                                    o = [6, e];
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, l])
                        }
                    }
                },
                re = "invite",
                ie = null;

            function oe(e) {
                var t, n = {};
                switch (e.target_type) {
                    case Y.Iq.STREAM:
                        var r;
                        n.targetType = e.target_type;
                        n.targetUserId = null === (r = e.target_user) || void 0 === r ? void 0 : r.id;
                        break;
                    case Y.Iq.EMBEDDED_APPLICATION:
                        var i;
                        n.targetType = e.target_type;
                        n.targetApplicationId = null === (i = e.target_application) || void 0 === i ? void 0 : i.id;
                        break;
                    case Y.Iq.ROLE_SUBSCRIPTIONS_PURCHASE:
                        n.targetType = e.target_type
                }(!(null != L.Z.getGuild(null === (t = e.guild) || void 0 === t ? void 0 : t.id)) || e.new_member) && null != e.channel && (0, R.zi)(e.channel.type) && (n.welcomeModalChannelId = e.channel.id);
                null != e.guild_scheduled_event && (n.guildScheduledEvent = e.guild_scheduled_event);
                return n
            }

            function ue(e, t, n) {
                var r;
                if ((null == n ? void 0 : n.targetType) === Y.Iq.ROLE_SUBSCRIPTIONS_PURCHASE) return q.oC.ROLE_SUBSCRIPTIONS;
                if (null == (null == n ? void 0 : n.targetType) && !R.tx.has(t.type) && ((0, h.YM)(e) || function(e) {
                        var t = (0, _.s)(e);
                        t && O.trackExposure({
                            guildId: e,
                            location: "0891c0_1"
                        });
                        return I.getCurrentConfig({
                            location: "0891c0_2"
                        }, {
                            disable: !t,
                            autoTrackExposure: !0
                        }).enabled && t
                    }(e))) return q.oC.GUILD_HOME;
                var i, o = D.Z.getChannel(t.id);
                return F.Z.can(K.Plq.VIEW_CHANNEL, o) ? t.id : null !== (i = null === (r = j.ZP.getDefaultChannel(e)) || void 0 === r ? void 0 : r.id) && void 0 !== i ? i : t.id
            }

            function le(e) {
                var t = e.guildId,
                    r = e.channel,
                    i = e.options,
                    o = e.analyticsLocations,
                    u = void 0 === o ? [] : o,
                    l = r.type,
                    a = ue(t, r, i),
                    c = null != i ? i : {},
                    f = c.targetUserId,
                    d = c.targetType,
                    p = c.targetApplicationId,
                    h = l === K.d4z.GUILD_STAGE_VOICE,
                    b = K.Z5c.CHANNEL(t, a);
                R.tx.has(l) && (0, v.h)((function() {
                    Promise.resolve().then(n.bind(n, 116404)).then((function(e) {
                        var n = e.default,
                            o = function() {
                                if (h) {
                                    (0, C.Cq)(r instanceof R.Sf ? r : (0, R.kt)(r));
                                    (0, N.uL)(b)
                                } else {
                                    n.selectVoiceChannel(a);
                                    d === Y.Iq.STREAM && null != f && W.iV({
                                        streamType: z.lo.GUILD,
                                        ownerId: f,
                                        guildId: t,
                                        channelId: a
                                    });
                                    if (d === Y.Iq.EMBEDDED_APPLICATION && null != p) {
                                        (0, N.uL)(K.Z5c.CHANNEL(null != t ? t : K.ME, a));
                                        ! function(e, t, n, r) {
                                            s.Z.dispatch({
                                                type: "EMBEDDED_ACTIVITY_DEFERRED_OPEN",
                                                channelId: e,
                                                applicationId: t,
                                                intent: r,
                                                analyticsLocations: n
                                            })
                                        }(a, p, u, null == i ? void 0 : i.intent)
                                    }
                                }
                            };
                        (0, E.n)(t, [L.Z, V.Z, x.default, M.ZP]) ? (0, y.hk)(t, o) : o()
                    }))
                }));
                ! function(e, t) {
                    var n = e.type,
                        r = null != t ? t : {},
                        i = r.transitionTo,
                        o = r.welcomeModalChannelId,
                        u = r.guildScheduledEvent,
                        l = n === K.d4z.GUILD_STAGE_VOICE,
                        a = {
                            navigationReplace: !0
                        };
                    null != o && (a.welcomeModalChannelId = o);
                    l && (a.state = Q.Df);
                    null != u && (a.guildScheduledEventId = u.id);
                    return function(e) {
                        return null != i ? i(e, a, A.ZP.INVITE_ACCEPT) : (0, N.uL)(e, a, A.ZP.INVITE_ACCEPT)
                    }
                }(r, i)(b)
            }

            function ae(e) {
                var t = e.guildScheduledEvent,
                    n = e.welcomeModalChannelId;
                null != t && (0, v.h)((function() {
                    var e = {
                        guildScheduledEventId: t.id
                    };
                    null != n && (e.welcomeModalChannelId = n);
                    (0, g.P3)(t, e)
                }))
            }
            var ce, se = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    D.Z.addConditionalChangeListener((function() {
                        var r, i = D.Z.getChannel(e),
                            o = x.default.getCurrentUser();
                        if (null == i || null == o) return !0;
                        if (i.nsfw && !o.nsfwAllowed) return !1;
                        if (null != (null == t ? void 0 : t.guildScheduledEvent)) {
                            ae(t);
                            return !1
                        }
                        le({
                            guildId: null !== (r = i.getGuildId()) && void 0 !== r ? r : K.ME,
                            channel: i,
                            options: t,
                            analyticsLocations: n
                        });
                        return !1
                    }))
                },
                fe = (ce = X((function(e) {
                    var t, n;
                    return ne(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                t = e.guild_id, n = e.channel_id;
                                if (!(0, m.xt)(e) || null == n) return [3, 1];
                                se(n);
                                return [3, 3];
                            case 1:
                                return [4, H.Z.transitionToGuildSync(t)];
                            case 2:
                                r.sent();
                                r.label = 3;
                            case 3:
                                return [2]
                        }
                    }))
                })), function(e) {
                    return ce.apply(this, arguments)
                });
            const de = {
                resolveInvite: function e(t, n, r) {
                    if (s.Z.isDispatching()) return Promise.resolve().then((function() {
                        return e(t, n, r)
                    }));
                    s.Z.dispatch({
                        type: "INVITE_RESOLVE",
                        code: t
                    });
                    return (0, S.Z)(t, n, r).then((function(e) {
                        var t = e.invite,
                            n = e.code,
                            r = e.banned;
                        null != t ? s.Z.dispatch({
                            type: "INVITE_RESOLVE_SUCCESS",
                            invite: t,
                            code: n
                        }) : s.Z.dispatch({
                            type: "INVITE_RESOLVE_FAILURE",
                            code: n,
                            banned: r
                        });
                        return {
                            invite: t,
                            code: n
                        }
                    }))
                },
                getInviteContext: function(e, t) {
                    return {
                        location: e,
                        location_guild_id: null != t.guild ? t.guild.id : void 0,
                        location_channel_id: null != t.channel ? t.channel.id : void 0,
                        location_channel_type: null != t.channel ? t.channel.type : void 0
                    }
                },
                createInvite: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    return X((function() {
                        var r, i, o;
                        return ne(this, (function(u) {
                            switch (u.label) {
                                case 0:
                                    u.trys.push([0, 2, , 3]);
                                    return [4, c.ZP.post({
                                        url: K.ANM.INSTANT_INVITES(e),
                                        body: t,
                                        context: {
                                            location: n
                                        }
                                    })];
                                case 1:
                                    r = u.sent(), i = r.body;
                                    s.Z.dispatch({
                                        type: "INSTANT_INVITE_CREATE_SUCCESS",
                                        channelId: e,
                                        invite: i
                                    });
                                    return [2, i];
                                case 2:
                                    o = u.sent();
                                    s.Z.dispatch({
                                        type: "INSTANT_INVITE_CREATE_FAILURE",
                                        channelId: e
                                    });
                                    throw new f.Z(o);
                                case 3:
                                    return [2]
                            }
                        }))
                    }))()
                },
                mobileCreateInvite: function(e, t) {
                    return X((function() {
                        var n, r, i;
                        return ne(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    if (null != (n = U.Z.getInvite(e.id)) && !n.isExpired()) return [2, n.code];
                                    r = {
                                        max_age: K.UF9.DAY
                                    };
                                    return [4, this.createInvite(e.id, r, t).catch((function() {
                                        return s.Z.dispatch({
                                            type: "NATIVE_APP_INSTANT_INVITE_GDM_SHARE_FAILED"
                                        })
                                    }))];
                                case 1:
                                    return [2, null == (i = o.sent()) ? void 0 : i.code]
                            }
                        }))
                    })).apply(this)
                },
                getAllFriendInvites: function(e) {
                    return X((function() {
                        var t;
                        return ne(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, new Promise((function(e) {
                                        return s.Z.wait((function() {
                                            return e(null)
                                        }))
                                    }))];
                                case 1:
                                    n.sent();
                                    if (U.Z.getFriendInvitesFetching()) return null != ie ? [2, ie.then((function(e) {
                                        return e.body
                                    }))] : [2, Promise.reject(new Error("Invalid friend invite fetch request"))];
                                    ie = c.ZP.get({
                                        url: K.ANM.FRIEND_INVITES,
                                        context: {
                                            location: e
                                        }
                                    });
                                    s.Z.dispatch({
                                        type: "FRIEND_INVITES_FETCH_REQUEST",
                                        requestedAt: new Date
                                    });
                                    return [4, ie];
                                case 2:
                                    t = n.sent().body;
                                    ie = null;
                                    s.Z.dispatch({
                                        type: "FRIEND_INVITES_FETCH_RESPONSE",
                                        receivedAt: new Date,
                                        invites: t
                                    });
                                    return [2, t]
                            }
                        }))
                    }))()
                },
                createFriendInvite: function(e, t) {
                    s.Z.dispatch({
                        type: "FRIEND_INVITE_CREATE_REQUEST"
                    });
                    return c.ZP.post({
                        url: K.ANM.FRIEND_INVITES,
                        body: null != e ? e : {},
                        context: {
                            location: t
                        }
                    }).then((function(e) {
                        var t = e.body;
                        s.Z.dispatch({
                            type: "FRIEND_INVITE_CREATE_SUCCESS",
                            invite: t
                        });
                        return t
                    }), (function(e) {
                        s.Z.dispatch({
                            type: "FRIEND_INVITE_CREATE_FAILURE",
                            error: e
                        });
                        throw e
                    }))
                },
                revokeFriendInvites: function() {
                    s.Z.dispatch({
                        type: "FRIEND_INVITE_REVOKE_REQUEST"
                    });
                    return c.ZP.delete({
                        url: K.ANM.FRIEND_INVITES,
                        context: {
                            location
                        }
                    }).then((function(e) {
                        var t = e.body;
                        s.Z.dispatch({
                            type: "FRIEND_INVITE_REVOKE_SUCCESS",
                            invites: t
                        })
                    }))
                },
                revokeFriendInvite: function(e) {
                    return c.ZP.delete({
                        url: K.ANM.INVITE(e)
                    })
                },
                clearInviteFromStore: function(e) {
                    s.Z.dispatch({
                        type: "INSTANT_INVITE_CLEAR",
                        channelId: e
                    })
                },
                revokeInvite: function(e) {
                    var t = e.code,
                        n = e.channel;
                    return B.Z.delete({
                        url: K.ANM.INVITE(t),
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: o.a9.INVITE_REVOKE,
                            properties: {
                                uses: e.uses,
                                max_uses: e.maxUses,
                                max_age: e.maxAge,
                                invite_type: e.type
                            }
                        }
                    }).then((function() {
                        s.Z.dispatch({
                            type: "INSTANT_INVITE_REVOKE_SUCCESS",
                            code: t,
                            channelId: n.id
                        })
                    }))
                },
                acceptInvite: function(e) {
                    var t, r = e.inviteKey,
                        i = e.context,
                        o = e.callback,
                        u = e.skipOnboarding,
                        l = (0, P.fU)(r),
                        a = l.baseCode,
                        f = Z.default.getSessionId(),
                        p = function(e, t) {
                            return te(ee({}, e), {
                                invite_guild_scheduled_event_id: t.guildScheduledEventId
                            })
                        }(i, l),
                        v = x.default.getCurrentUser();
                    if (null !== (t = null == v ? void 0 : v.hasFlag(K.xW$.QUARANTINED)) && void 0 !== t && t) {
                        (0, w.default)();
                        return new Promise((function(e, t) {
                            return t(new Error)
                        }))
                    }
                    s.Z.dispatch({
                        type: "INVITE_ACCEPT",
                        code: a
                    });
                    return c.ZP.post({
                        url: K.ANM.INVITE(a),
                        context: p,
                        oldFormErrors: !0,
                        body: {
                            session_id: f
                        }
                    }).then(function() {
                        var e = X((function(e) {
                            var t, r, i, c, f, d;
                            return ne(this, (function(p) {
                                switch (p.label) {
                                    case 0:
                                        s.Z.dispatch({
                                            type: "INVITE_ACCEPT_SUCCESS",
                                            invite: e.body,
                                            code: a
                                        });
                                        r = m.ZP.getGuildScheduledEvent(l.guildScheduledEventId);
                                        i = te(ee({}, e.body), {
                                            guild_scheduled_event: r
                                        });
                                        f = null !== (c = null == i ? void 0 : i.guild_id) && void 0 !== c ? c : null == i || null === (t = i.guild) || void 0 === t ? void 0 : t.id;
                                        return u || null == f || !i.new_member ? [3, 3] : [4, Promise.all([n.e(1459), n.e(73177)]).then(n.bind(n, 788533))];
                                    case 1:
                                        d = p.sent();
                                        return [4, (0, d.default)({
                                            guildId: f
                                        })];
                                    case 2:
                                        p.sent();
                                        p.label = 3;
                                    case 3:
                                        null == o || o(i);
                                        return [2, e.body]
                                }
                            }))
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(), (function(e) {
                        var t, n;
                        s.Z.dispatch({
                            type: "INVITE_ACCEPT_FAILURE",
                            code: a,
                            error: {
                                message: null === (t = e.body) || void 0 === t ? void 0 : t.message,
                                code: null === (n = e.body) || void 0 === n ? void 0 : n.code
                            }
                        });
                        throw new d.Z(e)
                    }))
                },
                acceptInviteAndTransitionToInviteChannel: function(e) {
                    var t = e.inviteKey,
                        n = e.context,
                        r = e.analyticsLocations,
                        i = e.callback,
                        o = e.skipOnboarding;
                    return this.acceptInvite({
                        inviteKey: t,
                        context: n,
                        skipOnboarding: o,
                        callback: function(e) {
                            if (null != e.channel) {
                                var t = oe(e);
                                se(e.channel.id, t, null != r ? r : [])
                            }
                            null != i && i(e)
                        }
                    })
                },
                transitionToInvite: function(e, t) {
                    var n, r, i, o = e.channel,
                        u = e.guild;
                    if (null != u && (null === (n = u.features) || void 0 === n ? void 0 : n.includes(K.oNc.HUB))) T.Z.onOpenHubInvite(e);
                    else if (null != u && (null === (r = u.features) || void 0 === r ? void 0 : r.includes(K.oNc.COMMUNITY)) && (null === (i = u.features) || void 0 === i ? void 0 : i.includes(K.oNc.MEMBER_VERIFICATION_GATE_ENABLED)) && !u.features.includes(K.oNc.PREVIEW_ENABLED))(0, N.uL)(K.Z5c.GUILD_MEMBER_VERIFICATION(u.id, e.code));
                    else if (null != o) {
                        var l = oe(e);
                        null != t && (l.transitionTo = t);
                        le({
                            guildId: null != u ? u.id : K.ME,
                            channel: o,
                            options: l
                        })
                    }
                },
                transitionToInviteSync: function(e, t, n) {
                    if (null != e.channel) {
                        var r = oe(e);
                        this.transitionToInviteChannelSync(e.channel.id, te(ee({}, r), {
                            intent: n,
                            transitionTo: t
                        }))
                    }
                },
                openNativeAppModal: function(e) {
                    p.Z.openNativeAppModal(e, K.Etm.INVITE_BROWSER)
                },
                openApp: function(e, t, n, r, o) {
                    var c, f, d = null != e ? (0, P.fU)(e) : null,
                        p = null == d ? void 0 : d.baseCode;
                    s.Z.dispatch({
                        type: "INVITE_APP_OPENING",
                        code: e
                    });
                    if (null != i().ua && i().ua.toLowerCase().indexOf("googlebot") > -1) s.Z.dispatch({
                        type: "INVITE_APP_NOT_OPENED",
                        code: e
                    });
                    else {
                        var v;
                        if ("Android" === (null === (c = i().os) || void 0 === c ? void 0 : c.family) || "iOS" === (null === (f = i().os) || void 0 === f ? void 0 : f.family)) {
                            var h = null != p ? (0, u.z0)(p) : (0, u.Gk)(),
                                y = (0, l.WS)();
                            v = (0, l.ZP)(h, {
                                utmSource: 2 === o ? "friend_invite" : re,
                                fingerprint: n,
                                username: r,
                                attemptId: y,
                                event: null == d ? void 0 : d.guildScheduledEventId,
                                iosFallbackLink: "https://discord.com/api/download/mobile?invite_code=".concat(p)
                            });
                            k.default.track(K.rMx.DEEP_LINK_CLICKED, {
                                fingerprint: (0, a.K)(n),
                                attempt_id: y,
                                source: re,
                                invite_code: p
                            })
                        } else {
                            "#" === (v = null != t ? K.Z5c.INVITE_PROXY(t) : "")[0] && (v = v.slice(1));
                            v = "discord://".concat(v)
                        }
                        G.Z.launch(v, (function(t) {
                            s.Z.dispatch(t ? {
                                type: "INVITE_APP_OPENED",
                                code: e
                            } : {
                                type: "INVITE_APP_NOT_OPENED",
                                code: e
                            })
                        }))
                    }
                },
                transitionToInviteChannelSync: se
            }
        },
        481008: (e, t, n) => {
            n.d(t, {
                WH: () => Z,
                tK: () => D,
                rn: () => M,
                pR: () => L,
                iV: () => V,
                g: () => U,
                aP: () => F,
                n9: () => x,
                xc: () => B,
                Rc: () => H,
                dV: () => W,
                L6: () => K,
                tE: () => q,
                W1: () => z
            });
            var r = n(441143),
                i = n.n(r),
                o = n(571657),
                u = n(281110),
                l = n(744564),
                a = n(409125),
                c = n(306263),
                s = n(88329),
                f = n(63509),
                d = n(177570),
                p = n(664625),
                v = n(61209),
                h = n(567403),
                y = n(715107),
                E = n(407561),
                b = n(176758),
                _ = n(77643),
                O = n(391438),
                I = n(997244),
                g = n(761953),
                m = n(247250),
                T = n(116404),
                P = n(2590),
                S = n(443132);

            function w(e, t, n, r, i, o, u) {
                try {
                    var l = e[o](u),
                        a = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(a) : Promise.resolve(a).then(r, i)
            }

            function A(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function u(e) {
                            w(o, r, i, u, l, "next", e)
                        }

                        function l(e) {
                            w(o, r, i, u, l, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function N(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function C(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        N(e, t, n[t])
                    }))
                }
                return e
            }
            var R = function(e, t) {
                var n, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function l(o) {
                    return function(l) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = u.trys,
                                                i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2];
                                            u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                o = t.call(e, u)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, l])
                    }
                }
            };

            function Z(e, t, n) {
                l.Z.dispatch(C({
                    type: "STREAM_START",
                    streamType: null != e ? S.lo.GUILD : S.lo.CALL,
                    guildId: e,
                    channelId: t,
                    appContext: __OVERLAY__ ? P.IlC.OVERLAY : P.IlC.APP
                }, n))
            }

            function D(e, t) {
                var n = (0, c.V9)(e);
                l.Z.dispatch({
                    type: "STREAM_SET_PAUSED",
                    streamKey: n,
                    paused: t
                })
            }

            function j(e, t) {
                var n = v.Z.getChannel(t);
                i()(null != n, "Cannot join a null voice channel");
                return !E.Z.isInChannel(t) && (0, b.rY)(n, E.Z, h.Z)
            }

            function M(e, t) {
                if (!(null != a.Z.getRemoteSessionId())) {
                    var n = e.guildId,
                        r = e.channelId;
                    if (null == n || !j(0, r)) {
                        var i = (0,
                                c.V9)(e),
                            o = (null == t ? void 0 : t.forceMultiple) || d.Z.getAllActiveStreamsForChannel(r).filter((function(e) {
                                return e.ownerId !== p.default.getId()
                            })).length >= 2;
                        l.Z.dispatch({
                            type: "STREAM_WATCH",
                            streamKey: i,
                            allowMultiple: o
                        });
                        o || (null == t ? void 0 : t.noFocus) || m.Z.selectParticipant(e.channelId, i)
                    }
                }
            }

            function L(e, t) {
                l.Z.dispatch({
                    type: "STREAM_UPDATE_SELF_HIDDEN",
                    channelId: e,
                    selfStreamHidden: t
                })
            }

            function V(e, t) {
                var n = e.guildId,
                    r = e.channelId;
                if (null == n || !j(0, r)) {
                    M(e, t);
                    var i = f.Z.getWindowOpen(P.KJ3.CHANNEL_CALL_POPOUT),
                        o = y.Z.getVoiceChannelId();
                    i && o === r || (0, s.Z)(e)
                }
            }

            function U(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                F(e, t);
                l.Z.dispatch({
                    type: "STREAM_STOP",
                    streamKey: e,
                    appContext: __OVERLAY__ ? P.IlC.OVERLAY : P.IlC.APP
                })
            }

            function F(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                l.Z.dispatch({
                    type: "STREAM_CLOSE",
                    streamKey: e,
                    canShowFeedback: t
                })
            }

            function x(e, t, n) {
                return k.apply(this, arguments)
            }

            function k() {
                return (k = A((function(e, t, n) {
                    var r, i, o, a;
                    return R(this, (function(s) {
                        switch (s.label) {
                            case 0:
                                r = (0, c.V9)({
                                    streamType: null != e ? S.lo.GUILD : S.lo.CALL,
                                    guildId: e,
                                    channelId: t,
                                    ownerId: n
                                });
                                l.Z.dispatch({
                                    type: "STREAM_PREVIEW_FETCH_START",
                                    streamKey: r
                                });
                                s.label = 1;
                            case 1:
                                s.trys.push([1, 3, , 4]);
                                return [4, u.ZP.get({
                                    url: P.ANM.STREAM_PREVIEW(r),
                                    query: {
                                        version: Date.now()
                                    },
                                    oldFormErrors: !0
                                })];
                            case 2:
                                i = s.sent();
                                l.Z.dispatch({
                                    type: "STREAM_PREVIEW_FETCH_SUCCESS",
                                    streamKey: r,
                                    previewURL: i.body.url
                                });
                                return [3, 4];
                            case 3:
                                429 === (o = s.sent()).status && (a = 1e3 * o.body.retry_after);
                                l.Z.dispatch({
                                    type: "STREAM_PREVIEW_FETCH_FAIL",
                                    streamKey: r,
                                    retryAfter: a
                                });
                                return [3, 4];
                            case 4:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function B(e) {
                return G.apply(this, arguments)
            }

            function G() {
                return (G = A((function(e) {
                    return R(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                t.trys.push([0, 2, , 3]);
                                return [4, O.Z.post({
                                    url: P.ANM.STREAM_NOTIFY(e),
                                    oldFormErrors: !0,
                                    trackedActionData: {
                                        event: o.a9.STREAM_NOTIFY
                                    }
                                })];
                            case 1:
                                t.sent();
                                return [3, 3];
                            case 2:
                                t.sent();
                                return [3, 3];
                            case 3:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function H(e) {
                (0, _.Ye)(e.preset, e.resolution, e.frameRate);
                l.Z.dispatch(C({
                    type: "STREAM_UPDATE_SETTINGS"
                }, e))
            }

            function W(e, t) {
                u.ZP.patch({
                    url: P.ANM.STREAM(e),
                    body: {
                        region: t
                    },
                    oldFormErrors: !0
                })
            }

            function K() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                    t = d.Z.getCurrentUserActiveStream();
                null != t && U((0, c.V9)(t), e)
            }

            function q(e) {
                var t = e.channelId,
                    n = e.pid,
                    r = e.sourceId,
                    i = e.sourceName;
                if (null != n || null != r || null != i) {
                    l.Z.dispatch({
                        type: "START_BROADCAST_STREAM",
                        options: {
                            pid: n,
                            sourceId: r,
                            sourceName: i
                        }
                    });
                    null == t ? g.Z.createBroadcastPrivateChannel() : Z(null, t, {
                        pid: n,
                        sourceId: r,
                        sourceName: i
                    })
                }
            }

            function z(e, t) {
                var n = p.default.getId(),
                    r = (0, c.my)(t),
                    i = y.Z.getVoiceChannelId();
                null != i && i !== e && T.default.disconnect();
                g.Z.addRecipient(e, n, void 0, (function() {
                    I.Z.call(e, !1, !1, null, (function() {
                        V(r)
                    }))
                }))
            }
        },
        127624: (e, t, n) => {
            n.d(t, {
                WO: () => u,
                Lu: () => l,
                ak: () => a,
                bi: () => r,
                tn: () => c,
                hz: () => s,
                sZ: () => f,
                oQ: () => d,
                _n: () => p,
                Vd: () => v,
                lr: () => h,
                Mn: () => y,
                Fu: () => E,
                al: () => b
            });
            var r, i = n(73904),
                o = n(473708),
                u = "True",
                l = "False",
                a = [{
                    name: u,
                    displayName: u,
                    value: "true"
                }, {
                    name: l,
                    displayName: l,
                    value: "false"
                }];
            ! function(e) {
                e.BUILT_IN = "-1";
                e.FRECENCY = "-2"
            }(r || (r = {}));
            var c = 10,
                s = 5,
                f = 25,
                d = "\0",
                p = 100,
                v = 3,
                h = 10,
                y = 1,
                E = 500;

            function b(e) {
                if (null != e.choices) return o.Z.Messages.COMMAND_VALIDATION_CHOICE_ERROR;
                switch (e.type) {
                    case i.jw.BOOLEAN:
                        return o.Z.Messages.COMMAND_VALIDATION_BOOLEAN_ERROR;
                    case i.jw.CHANNEL:
                        return o.Z.Messages.COMMAND_VALIDATION_CHANNEL_ERROR;
                    case i.jw.INTEGER:
                        return o.Z.Messages.COMMAND_VALIDATION_INTEGER_ERROR;
                    case i.jw.NUMBER:
                        return o.Z.Messages.COMMAND_VALIDATION_NUMBER_ERROR;
                    case i.jw.ROLE:
                        return o.Z.Messages.COMMAND_VALIDATION_ROLE_ERROR;
                    case i.jw.USER:
                        return o.Z.Messages.COMMAND_VALIDATION_USER_ERROR;
                    case i.jw.MENTIONABLE:
                        return o.Z.Messages.COMMAND_VALIDATION_MENTIONABLE_ERROR;
                    default:
                        return o.Z.Messages.COMMAND_VALIDATION_GENERAL_ERROR
                }
            }
        },
        728998: (e, t, n) => {
            n.d(t, {
                _: () => a
            });
            var r = n(409125),
                i = n(379991),
                o = n(664625),
                u = n(567403),
                l = n(407561);

            function a(e) {
                if (i.ZP.disableVoiceChannelChangeAlert) return !1;
                var t = r.Z.getRemoteSessionId();
                if (null != l.Z.getVoiceStateForSession(o.default.getId(), t)) return !1;
                if (!l.Z.isCurrentClientInVoiceChannel()) return !1;
                if (l.Z.isInChannel(e.id)) return !1;
                var n = u.Z.getGuild(e.getGuildId());
                return null == (null == n ? void 0 : n.afkChannelId) || !l.Z.isInChannel(n.afkChannelId)
            }
        },
        269823: (e, t, n) => {
            n.d(t, {
                Z: () => o
            });
            var r = n(744564),
                i = n(199790);
            const o = {
                openNativeAppModal: function(e, t) {
                    var o = this;
                    if (!i.a) {
                        r.Z.dispatch({
                            type: "NATIVE_APP_MODAL_OPENING",
                            code: e
                        });
                        Promise.resolve().then(n.bind(n, 384482)).then((function(n) {
                            var r = n.default;
                            r.request(t, {
                                code: e
                            }).then((function(e) {
                                var t = e.code;
                                return o.nativeModalOpened(t)
                            })).catch((function() {
                                return o.nativeModalOpenFailed(e)
                            })).then((function() {
                                return r.disconnect()
                            }))
                        }))
                    }
                },
                nativeModalOpened: function(e) {
                    r.Z.dispatch({
                        type: "NATIVE_APP_MODAL_OPENED",
                        code: e
                    })
                },
                nativeModalOpenFailed: function(e) {
                    r.Z.dispatch({
                        type: "NATIVE_APP_MODAL_OPEN_FAILED",
                        code: e
                    })
                }
            }
        },
        201521: (e, t, n) => {
            n.d(t, {
                Z: () => l,
                e: () => a
            });
            var r = n(202351),
                i = n(464187),
                o = n(419051),
                u = n(2590);

            function l(e) {
                var t = (0, r.e7)([i.Z], (function() {
                    return i.Z.getGuildId()
                }));
                return null != t ? t : e.getGuildId()
            }

            function a(e) {
                return i.Z.getGuildId() !== u.I_8 ? e.getGuildId() : o.Z.isFavorite(e.id) || e.isThread() && o.Z.isFavorite(e.parent_id) ? u.I_8 : e.getGuildId()
            }
        },
        585548: (e, t, n) => {
            n.d(t, {
                h: () => l
            });
            var r = n(744564),
                i = n(652555),
                o = [];
            r.Z.subscribe("CONNECTION_OPEN", (function() {
                o.forEach((function(e) {
                    return u(e)
                }));
                o = []
            }));

            function u(e) {
                setImmediate((function() {
                    return e()
                }))
            }

            function l(e) {
                i.Z.isConnectedOrOverlay() ? u(e) : o.push(e)
            }
        },
        88329: (e, t, n) => {
            n.d(t, {
                Z: () => i
            });
            var r = n(451458);

            function i(e) {
                (0, r.Kh)(e.channelId)
            }
        },
        714305: (e, t, n) => {
            n.d(t, {
                Z: () => I
            });
            var r = n(281110),
                i = n(744564),
                o = n(189651),
                u = n(861426),
                l = n(641453),
                a = n(21372),
                c = n(757753),
                s = n(473903),
                f = n(2590);

            function d(e, t, n, r, i, o, u) {
                try {
                    var l = e[o](u),
                        a = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(a) : Promise.resolve(a).then(r, i)
            }

            function p(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function u(e) {
                            d(o, r, i, u, l, "next", e)
                        }

                        function l(e) {
                            d(o, r, i, u, l, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }
            var v, h = function(e, t) {
                    var n, r, i, o, u = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function l(o) {
                        return function(l) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; u;) try {
                                    if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                    (r = 0, i) && (o = [2 & o[0], i.value]);
                                    switch (o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            u.label++;
                                            return {
                                                value: o[1], done: !1
                                            };
                                        case 5:
                                            u.label++;
                                            r = o[1];
                                            o = [0];
                                            continue;
                                        case 7:
                                            o = u.ops.pop();
                                            u.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = u.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                u = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                u.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && u.label < i[1]) {
                                                u.label = i[1];
                                                i = o;
                                                break
                                            }
                                            if (i && u.label < i[2]) {
                                                u.label = i[2];
                                                u.ops.push(o);
                                                break
                                            }
                                            i[2] && u.ops.pop();
                                            u.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, u)
                                } catch (e) {
                                    o = [6, e];
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, l])
                        }
                    }
                },
                y = (v = p((function(e, t) {
                    var n, o, u, d, p;
                    return h(this, (function(v) {
                        switch (v.label) {
                            case 0:
                                n = null != t ? t : c.Z.getInviteKeyForGuildId(e);
                                o = s.default.getCurrentUser();
                                u = !a.ZP.isMember(e, null == o ? void 0 : o.id);
                                v.label = 1;
                            case 1:
                                v.trys.push([1, 3, , 4]);
                                return [4, r.ZP.get({
                                    url: f.ANM.GUILD_MEMBER_VERIFICATION(e),
                                    query: {
                                        with_guild: u,
                                        invite_code: null != n ? (0, l.jX)(n) : void 0
                                    },
                                    oldFormErrors: !0
                                })];
                            case 2:
                                if (null == (d = v.sent()).body) throw d;
                                p = d.body;
                                i.Z.dispatch({
                                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                                    guildId: e,
                                    form: {
                                        version: p.version,
                                        description: p.description,
                                        formFields: p.form_fields,
                                        guild: p.guild
                                    }
                                });
                                return [2, p];
                            case 3:
                                v.sent();
                                i.Z.dispatch({
                                    type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL",
                                    guildId: e
                                });
                                return [3, 4];
                            case 4:
                                return [2]
                        }
                    }))
                })), function(e, t) {
                    return v.apply(this, arguments)
                }),
                E = function() {
                    var e = p((function(e, t) {
                        var n, o;
                        return h(this, (function(u) {
                            switch (u.label) {
                                case 0:
                                    return [4, r.ZP.patch({
                                        url: f.ANM.GUILD_MEMBER_VERIFICATION(e),
                                        body: {
                                            form_fields: t
                                        },
                                        oldFormErrors: !0
                                    })];
                                case 1:
                                    n = u.sent();
                                    o = n.body;
                                    i.Z.dispatch({
                                        type: "MEMBER_VERIFICATION_FORM_UPDATE",
                                        guildId: e,
                                        form: {
                                            version: o.version,
                                            description: o.description,
                                            formFields: o.form_fields
                                        }
                                    });
                                    return [2]
                            }
                        }))
                    }));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                b = function() {
                    var e = p((function(e, t) {
                        var n, o;
                        return h(this, (function(u) {
                            switch (u.label) {
                                case 0:
                                    return [4, r.ZP.patch({
                                        url: f.ANM.GUILD_MEMBER_VERIFICATION(e),
                                        body: {
                                            description: t
                                        },
                                        oldFormErrors: !0
                                    })];
                                case 1:
                                    n = u.sent();
                                    o = n.body;
                                    i.Z.dispatch({
                                        type: "MEMBER_VERIFICATION_FORM_UPDATE",
                                        guildId: e,
                                        form: {
                                            version: o.version,
                                            description: o.description,
                                            formFields: o.form_fields
                                        }
                                    });
                                    return [2]
                            }
                        }))
                    }));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                _ = function() {
                    var e = p((function(e, t) {
                        return h(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, r.ZP.patch({
                                        url: f.ANM.GUILD_MEMBER_VERIFICATION(e),
                                        body: {
                                            enabled: t
                                        },
                                        oldFormErrors: !0
                                    })];
                                case 1:
                                    n.sent();
                                    return [2]
                            }
                        }))
                    }));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                O = function() {
                    var e = p((function(e, t) {
                        var n, l;
                        return h(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    if (u.Z.isFullServerPreview(e)) {
                                        (0, o.aq)(e, {
                                            memberOptions: {
                                                isPending: !1
                                            }
                                        });
                                        return [2]
                                    }
                                    a.label = 1;
                                case 1:
                                    a.trys.push([1, 3, , 4]);
                                    return [4, r.ZP.put({
                                        url: f.ANM.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                                        body: {
                                            version: t.version,
                                            form_fields: t.formFields
                                        }
                                    })];
                                case 2:
                                    n = a.sent();
                                    l = n.body;
                                    i.Z.dispatch({
                                        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                                        guildId: e,
                                        request: l
                                    });
                                    return [2, l];
                                case 3:
                                    throw a.sent();
                                case 4:
                                    return [2]
                            }
                        }))
                    }));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }();
            const I = {
                fetchVerificationForm: y,
                updateVerificationForm: E,
                updateVerificationFormDescription: b,
                enableVerificationForm: _,
                submitVerificationForm: O
            }
        },
        198181: (e, t, n) => {
            n.d(t, {
                lI: () => o,
                hZ: () => u,
                nx: () => l,
                X2: () => a,
                fn: () => c,
                XN: () => s,
                mb: () => f,
                au: () => d,
                tL: () => p,
                RS: () => v,
                Us: () => h,
                N4: () => y,
                Pn: () => E
            });
            var r, i = n(886391),
                o = (i.QJ.VERIFICATION, new Set([i.QJ.TERMS])),
                u = new Set([i.QJ.MULTIPLE_CHOICE, i.QJ.TEXT_INPUT, i.QJ.PARAGRAPH]),
                l = 5,
                a = 16,
                c = 300,
                s = 300,
                f = 8,
                d = 150,
                p = 150,
                v = 1e3,
                h = 300,
                y = "Membership Gating",
                E = "in-app-member-verification";
            ! function(e) {
                e.VERIFICATION_INFO = "VERIFICATION_INFO"
            }(r || (r = {}))
        },
        276985: (e, t, n) => {
            n.d(t, {
                hk: () => i
            });
            var r, i = (r = n(785622).Z).openMemberVerificationModal;
            r.closeMemberVerificationModal
        },
        770393: (e, t, n) => {
            n.d(t, {
                rb: () => l,
                a5: () => a,
                PE: () => c
            });
            var r = n(38736),
                i = n(930948),
                o = n(2590),
                u = Object.freeze({
                    hasUnsubmittedChanges: !1,
                    shouldShowWarning: !1
                }),
                l = (0, r.Z)((function(e) {
                    return u
                })),
                a = function(e) {
                    l.setState({
                        hasUnsubmittedChanges: e
                    })
                },
                c = function(e) {
                    l.setState({
                        shouldShowWarning: e
                    });
                    e && i.S.dispatch(o.CkL.EMPHASIZE_NOTICE)
                }
        },
        785622: (e, t, n) => {
            n.d(t, {
                Z: () => y
            });
            var r = n(785893),
                i = (n(667294), n(264817)),
                o = n(652591),
                u = n(714305),
                l = n(770393),
                a = n(198181),
                c = n(2590);

            function s(e, t, n, r, i, o, u) {
                try {
                    var l = e[o](u),
                        a = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(a) : Promise.resolve(a).then(r, i)
            }

            function f(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function u(e) {
                            s(o, r, i, u, l, "next", e)
                        }

                        function l(e) {
                            s(o, r, i, u, l, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function d(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function p(e, t) {
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
            var v = function(e, t) {
                    var n, r, i, o, u = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function l(o) {
                        return function(l) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; u;) try {
                                    if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                    (r = 0, i) && (o = [2 & o[0], i.value]);
                                    switch (o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            u.label++;
                                            return {
                                                value: o[1], done: !1
                                            };
                                        case 5:
                                            u.label++;
                                            r = o[1];
                                            o = [0];
                                            continue;
                                        case 7:
                                            o = u.ops.pop();
                                            u.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = u.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                u = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                u.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && u.label < i[1]) {
                                                u.label = i[1];
                                                i = o;
                                                break
                                            }
                                            if (i && u.label < i[2]) {
                                                u.label = i[2];
                                                u.ops.push(o);
                                                break
                                            }
                                            i[2] && u.ops.pop();
                                            u.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, u)
                                } catch (e) {
                                    o = [6, e];
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, l])
                        }
                    }
                },
                h = function() {
                    o.default.track(c.rMx.MODAL_DISMISSED, {
                        type: a.N4
                    })
                };
            const y = {
                openMemberVerificationModal: function(e, t) {
                    ! function(e) {
                        o.default.track(c.rMx.OPEN_MODAL, {
                            type: a.N4,
                            guild_id: e
                        })
                    }(e);
                    var s, y = (s = f((function(t) {
                        return v(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, u.Z.submitVerificationForm(e, t)];
                                case 1:
                                    n.sent();
                                    return [2]
                            }
                        }))
                    })), function(e) {
                        return s.apply(this, arguments)
                    });
                    (0, i.ZD)(f((function() {
                        var t, i;
                        return v(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, Promise.all([n.e(40532), n.e(17586), n.e(40056), n.e(96259), n.e(1960), n.e(58093), n.e(54602), n.e(6565), n.e(20419), n.e(24251), n.e(3790), n.e(84441), n.e(30027), n.e(94302), n.e(36952), n.e(28629), n.e(70535), n.e(82786), n.e(31520), n.e(75700), n.e(77579), n.e(80980), n.e(33227), n.e(44832), n.e(83064), n.e(24417), n.e(95839), n.e(30144), n.e(89984), n.e(92766), n.e(24501), n.e(35796), n.e(25978), n.e(67783), n.e(3963), n.e(80068), n.e(45482)]).then(n.bind(n, 370801))];
                                case 1:
                                    t = o.sent(), i = t.default;
                                    return [2, function(t) {
                                        return (0, r.jsx)(i, p(function(e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var n = null != arguments[t] ? arguments[t] : {},
                                                    r = Object.keys(n);
                                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                                }))));
                                                r.forEach((function(t) {
                                                    d(e, t, n[t])
                                                }))
                                            }
                                            return e
                                        }({}, t), {
                                            guildId: e,
                                            onComplete: y,
                                            onClose: function() {
                                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                                if (!e) {
                                                    if (l.rb.getState().hasUnsubmittedChanges) {
                                                        (0, l.PE)(!0);
                                                        return
                                                    }
                                                    h()
                                                }
                                                t.onClose()
                                            }
                                        }))
                                    }]
                            }
                        }))
                    })), {
                        modalKey: a.Pn,
                        onCloseRequest: function() {
                            h();
                            l.rb.getState().hasUnsubmittedChanges ? (0, l.PE)(!0) : (0, i.Mr)(a.Pn)
                        },
                        onCloseCallback: t
                    })
                },
                closeMemberVerificationModal: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    e || h();
                    (0, i.Mr)(a.Pn)
                }
            }
        },
        382840: (e, t, n) => {
            n.d(t, {
                bO: () => v,
                P3: () => h,
                lC: () => E
            });
            var r = n(785893),
                i = (n(667294), n(264817)),
                o = n(327499),
                u = n(2590),
                l = n(662885);

            function a(e, t, n, r, i, o, u) {
                try {
                    var l = e[o](u),
                        a = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(a) : Promise.resolve(a).then(r, i)
            }

            function c(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function u(e) {
                            a(o, r, i, u, l, "next", e)
                        }

                        function l(e) {
                            a(o, r, i, u, l, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        s(e, t, n[t])
                    }))
                }
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
            var p = function(e, t) {
                var n, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function l(o) {
                    return function(l) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = u.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2];
                                            u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                o = t.call(e, u)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, l])
                    }
                }
            };

            function v(e) {
                var t = e.eventId,
                    o = e.parentGuildId;
                (0, i.ZD)(c((function() {
                    var e, i;
                    return p(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(17586), n.e(40056), n.e(96259), n.e(1960), n.e(58093), n.e(83081), n.e(54602), n.e(6565), n.e(20419), n.e(24251), n.e(3790), n.e(84441), n.e(30027), n.e(94302), n.e(36952), n.e(28629), n.e(70535), n.e(82786), n.e(31520), n.e(75700), n.e(77579), n.e(80980), n.e(33227), n.e(44832), n.e(83064), n.e(24417), n.e(95839), n.e(30144), n.e(89984), n.e(92766), n.e(24501), n.e(35796), n.e(13255), n.e(25978), n.e(67783), n.e(3963), n.e(39874), n.e(72982)]).then(n.bind(n, 757337))];
                            case 1:
                                e = u.sent(), i = e.default;
                                return [2, function(e) {
                                    return (0, r.jsx)(i, f({
                                        guildScheduledEventId: t,
                                        parentGuildId: o
                                    }, e))
                                }]
                        }
                    }))
                })))
            }

            function h(e, t) {
                return y.apply(this, arguments)
            }

            function y() {
                return (y = c((function(e, t) {
                    var n;
                    return p(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                n = e.guild_id;
                                return [4, o.Z.transitionToGuildSync(n, t)];
                            case 1:
                                r.sent();
                                v({
                                    eventId: e.id,
                                    event: e
                                });
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function E(e, t) {
                (0, i.ZD)(c((function() {
                    var t, i;
                    return p(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(45660), n.e(26945), n.e(44235)]).then(n.bind(n, 99271))];
                            case 1:
                                t = o.sent(), i = t.default;
                                return [2, function(t) {
                                    return (0, r.jsx)(i, d(f({}, t), {
                                        channel: e
                                    }))
                                }]
                        }
                    }))
                })), {
                    contextKey: t === u.IlC.POPOUT ? l.u1 : l.z1
                })
            }
        },
        354793: (e, t, n) => {
            n.d(t, {
                Z: () => o
            });
            var r = n(784426),
                i = n(2590);
            const o = {
                onOpenHubInvite: function(e) {
                    var t = e.guild;
                    null != t && (0, r.uL)(i.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(t.id, e.code))
                }
            }
        },
        189651: (e, t, n) => {
            n.d(t, {
                iD: () => m,
                Zm: () => T,
                mL: () => P,
                zS: () => w,
                og: () => A,
                aq: () => N
            });
            var r = n(744564),
                i = n(396043),
                o = n(784426),
                u = n(61209),
                l = n(5544),
                a = n(21372),
                c = n(567403),
                s = n(682776),
                f = n(715107),
                d = n(9430),
                p = n(652591),
                v = n(861426),
                h = n(557177),
                y = n(2590),
                E = n(897196);

            function b(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function _(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function O(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        _(e, t, n[t])
                    }))
                }
                return e
            }

            function I(e, t) {
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

            function g(e) {
                return function(e) {
                    if (Array.isArray(e)) return b(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return b(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return b(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function m(e, t) {
                p.default.track(y.rMx.VIEW_AS_ROLES_SELECTED, I(O({
                    num_roles: Object.keys(t.roles).length
                }, (0, i.hH)(e)), {
                    is_viewing_as_member: t.type === h.z.NEW_MEMBER
                }));
                r.Z.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                });
                S(e)
            }

            function T(e, t) {
                var n = v.Z.getData(e);
                if (null != n && n.type === t.type) {
                    p.default.track(y.rMx.VIEW_AS_ROLES_SELECTED, I(O({
                        num_roles: Object.keys(n.roles).length
                    }, (0, i.hH)(e)), {
                        is_viewing_as_member: n.type === h.z.NEW_MEMBER
                    }));
                    r.Z.dispatch({
                        type: "IMPERSONATE_UPDATE",
                        guildId: e,
                        data: O({}, n, t)
                    });
                    S(e)
                }
            }

            function P(e) {
                r.Z.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function S(e) {
                var t = f.Z.getChannelId(e),
                    n = u.Z.getChannel(t);
                if (!(null != t && (0, E.AB)(t)) && !s.Z.can(y.Plq.VIEW_CHANNEL, n)) {
                    var r = l.ZP.getDefaultChannel(e);
                    null != r && (0, o.uL)(y.Z5c.CHANNEL(e, r.id))
                }
            }

            function w(e, t, n) {
                var r = new Set(d.Z.getOptedInChannels(e));
                t.forEach((function(e) {
                    return r.add(e)
                }));
                n.forEach((function(e) {
                    return r.delete(e)
                }));
                T(e, {
                    type: h.z.NEW_MEMBER,
                    optInChannels: r
                })
            }

            function A(e, t) {
                var n = c.Z.getGuild(e);
                if (null != n) {
                    ! function(e, t) {
                        var n = g(l.ZP.getSelectableChannelIds(e)).concat(g(l.ZP.getVocalChannelIds(e))),
                            r = Array.from(t);
                        l.ZP.addConditionalChangeListener((function() {
                            var t = a.ZP.getSelfMember(e);
                            if (null == t) return !1;
                            if (r.some((function(e) {
                                    return !t.roles.includes(e)
                                }))) return !0;
                            var i = g(l.ZP.getSelectableChannelIds(e)).concat(g(l.ZP.getVocalChannelIds(e))).filter((function(e) {
                                return !n.includes(e)
                            }));
                            i.length > 0 && w(e, i, []);
                            return !1
                        }))
                    }(e, t);
                    var r = {};
                    t.forEach((function(e) {
                        return r[e] = n.roles[e]
                    }));
                    T(e, {
                        type: h.z.NEW_MEMBER,
                        roles: r
                    })
                }
            }

            function N(e, t) {
                T(e, O({
                    type: h.z.NEW_MEMBER
                }, t))
            }
        },
        426307: (e, t, n) => {
            n.d(t, {
                Z: () => h
            });
            var r = n(571657),
                i = n(165695),
                o = n(382060),
                u = n(664625),
                l = n(652591),
                a = n(391438),
                c = n(641453),
                s = n(718634),
                f = n(2590);

            function d(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function p(e, t) {
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

            function v(e) {
                var t = null;
                if (null != e && null != e.channel) {
                    var n = e.channel;
                    t = e.target_type === s.Iq.STREAM ? f.dAT.STREAM : e.target_type === s.Iq.EMBEDDED_APPLICATION ? f.dAT.APPLICATION : (0, o.bc)(n.type) ? f.dAT.GDM_INVITE : null == n || (0, o.hv)(n.type) ? f.dAT.FRIEND_INVITE : f.dAT.SERVER_INVITE
                }
                return t
            }

            function h(e, t, n) {
                l.default.track(f.rMx.INVITE_OPENED, {
                    invite_code: e
                });
                var o = (0, c.fU)(e),
                    s = p(function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))));
                            r.forEach((function(t) {
                                d(e, t, n[t])
                            }))
                        }
                        return e
                    }({}, n), {
                        with_counts: !0,
                        with_expiration: !0,
                        guild_scheduled_event_id: o.guildScheduledEventId
                    });
                return a.Z.get({
                    url: f.ANM.INVITE(o.baseCode),
                    query: s,
                    oldFormErrors: !0,
                    trackedActionData: {
                        event: r.a9.INVITE_RESOLVE,
                        properties: function(e) {
                            var r, l, a, c, s, d, p = e.body,
                                h = (null === (r = e.body) || void 0 === r ? void 0 : r.code) === f.evJ.USER_BANNED;
                            return (0, i.iG)({
                                resolved: e.ok,
                                guild_id: null == p || null === (l = p.guild) || void 0 === l ? void 0 : l.id,
                                channel_id: null == p || null === (a = p.channel) || void 0 === a ? void 0 : a.id,
                                channel_type: null == p || null === (c = p.channel) || void 0 === c ? void 0 : c.type,
                                inviter_id: null == p || null === (s = p.inviter) || void 0 === s ? void 0 : s.id,
                                code: o.baseCode,
                                input_value: null == n ? void 0 : n.inputValue,
                                location: t,
                                authenticated: u.default.isAuthenticated(),
                                size_total: null == p ? void 0 : p.approximate_member_count,
                                size_online: null == p ? void 0 : p.approximate_presence_count,
                                destination_user_id: null == p || null === (d = p.target_user) || void 0 === d ? void 0 : d.id,
                                invite_type: v(p),
                                user_banned: h
                            })
                        }
                    }
                }).then((function(r) {
                    var i = r.body;
                    null != t && l.default.track(f.rMx.INVITE_RESOLVED, {
                        resolved: !0,
                        guild_id: null != i.guild ? i.guild.id : null,
                        channel_id: null != i.channel ? i.channel.id : null,
                        channel_type: null != i.channel ? i.channel.type : null,
                        inviter_id: i.inviter ? i.inviter.id : null,
                        code: o.baseCode,
                        input_value: null == n ? void 0 : n.inputValue,
                        location: t,
                        authenticated: u.default.isAuthenticated(),
                        size_total: i.approximate_member_count,
                        size_online: i.approximate_presence_count,
                        destination_user_id: null != i.target_user ? i.target_user.id : null,
                        invite_type: v(i)
                    }, {
                        flush: !0
                    });
                    return {
                        invite: i,
                        code: e
                    }
                }), (function(r) {
                    var i = null != r.body && r.body.code === f.evJ.USER_BANNED;
                    if (null != t) {
                        var a, c;
                        l.default.track(f.rMx.INVITE_RESOLVED, {
                            resolved: !1,
                            code: o.baseCode,
                            input_value: null == n ? void 0 : n.inputValue,
                            location: t,
                            authenticated: u.default.isAuthenticated(),
                            user_banned: i,
                            error_code: null === (a = r.body) || void 0 === a ? void 0 : a.code,
                            error_message: null === (c = r.body) || void 0 === c ? void 0 : c.message
                        }, {
                            flush: !0
                        })
                    }
                    return {
                        invite: null,
                        code: e,
                        banned: i
                    }
                }))
            }
        },
        63509: (e, t, n) => {
            n.d(t, {
                Z: () => U
            });
            var r = n(441143),
                i = n.n(r),
                o = n(496486),
                u = n.n(o),
                l = n(620745),
                a = n(202351),
                c = n(744564),
                s = n(296602),
                f = n(120415),
                d = n(310126),
                p = n(202181),
                v = n(2590);

            function h(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function y(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function E(e) {
                E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return E(e)
            }

            function b(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }

            function _(e, t) {
                return !t || "object" !== I(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function O(e, t) {
                O = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return O(e, t)
            }
            var I = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function g(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = E(e);
                    if (t) {
                        var i = E(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return _(this, n)
                }
            }
            var m = {},
                T = {},
                P = {},
                S = {},
                w = {},
                A = new Set,
                N = function() {
                    return V.emitChange()
                },
                C = u().debounce(N, 150);

            function R(e) {
                var t = P[e];
                null == t || t.closed || (m[e] = {
                    x: t.screenX,
                    y: t.screenY,
                    width: t.innerWidth,
                    height: t.innerHeight,
                    alwaysOnTop: !!f.FB && T[e]
                })
            }

            function Z(e) {
                var t = P[e],
                    n = w[e];
                if (null != t) {
                    var r = t.document;
                    (0, p.uF)(r, N);
                    t.addEventListener("focus", N);
                    t.addEventListener("blur", N);
                    t.addEventListener("resize", C);
                    ! function(e, t) {
                        var n = t.document,
                            r = document.querySelectorAll('link[rel="stylesheet"]'),
                            o = "".concat(window.location.protocol, "//").concat(window.location.host),
                            u = !0,
                            l = !1,
                            a = void 0;
                        try {
                            for (var c, s = r[Symbol.iterator](); !(u = (c = s.next()).done); u = !0) {
                                var f = c.value;
                                if (f.href.startsWith(o)) {
                                    var d = n.createElement("link");
                                    d.href = f.href;
                                    d.rel = f.rel;
                                    d.integrity = f.integrity;
                                    i()(null != n.head, "Document head was null");
                                    n.head.appendChild(d)
                                }
                            }
                        } catch (e) {
                            l = !0;
                            a = e
                        } finally {
                            try {
                                u || null == s.return || s.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                    }(0, t);
                    var o = (0, l.s)(r.getElementById("app-mount"));
                    i()(null != o, "No render target for popout!");
                    S[e] = o;
                    o.render(n(e))
                } else new s.Z("PopoutWindowStore").warn("Failed to open window", e)
            }

            function D(e) {
                var t = P[e];
                if (null != t) {
                    t.closed || R(e);
                    t.close();
                    ! function(e) {
                        var t = P[e];
                        i()(null != t, "Popout window was null during unmount");
                        t.removeEventListener("focus", N);
                        t.removeEventListener("blur", N);
                        t.removeEventListener("resize", C);
                        var n = S[e];
                        i()(null != n, "Window root was null while unmounting");
                        n.unmount();
                        delete P[e];
                        delete T[e];
                        delete w[e];
                        delete S[e]
                    }(e);
                    V.emitChange()
                }
            }

            function j(e) {
                var t = e.data;
                if (t instanceof Object && t.discordPopoutEvent instanceof Object) {
                    var n = t.discordPopoutEvent;
                    if (null != n.key) switch (n.type) {
                        case v.l9w.LOADED:
                            return function(e) {
                                if (A.has(e)) {
                                    Z(e);
                                    A.delete(e);
                                    V.emitChange()
                                }
                            }(n.key);
                        case v.l9w.UNLOADED:
                            return D(n.key)
                    }
                }
            }

            function M() {
                var e = !0,
                    t = !1,
                    n = void 0;
                try {
                    for (var r, i = Object.keys(P)[Symbol.iterator](); !(e = (r = i.next()).done); e = !0) {
                        var o = r.value,
                            u = P[o];
                        null != u && u.close()
                    }
                } catch (e) {
                    t = !0;
                    n = e
                } finally {
                    try {
                        e || null == i.return || i.return()
                    } finally {
                        if (t) throw n
                    }
                }
            }
            var L = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && O(e, t)
                }(n, e);
                var t = g(n);

                function n() {
                    h(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    window.addEventListener("message", j);
                    window.addEventListener("beforeunload", M);
                    m = null != e ? e : {}
                };
                r.getWindow = function(e) {
                    return P[e]
                };
                r.getWindowState = function(e) {
                    return m[e]
                };
                r.getWindowKeys = function() {
                    return Object.keys(P)
                };
                r.getWindowOpen = function(e) {
                    var t = P[e];
                    return null != t && !t.closed
                };
                r.getIsAlwaysOnTop = function(e) {
                    return Boolean(T[e])
                };
                r.getWindowFocused = function(e) {
                    var t, n, r = P[e];
                    return null !== (n = null == r || null === (t = r.document) || void 0 === t ? void 0 : t.hasFocus()) && void 0 !== n && n
                };
                r.getState = function() {
                    return m
                };
                r.unmountWindow = function(e) {
                    return D(e)
                };
                return n
            }(a.ZP.PersistedStore);
            L.displayName = "PopoutWindowStore";
            L.persistKey = "PopoutWindowStore";
            var V = new L(c.Z, {
                POPOUT_WINDOW_OPEN: function(e) {
                    var t = e.key,
                        n = e.features,
                        r = e.render;
                    if (f.FB && !d.ZP.supportsFeature(v.eRX.POPOUT_WINDOWS)) throw new Error("Popout windows not supported on this native module version!");
                    var i = P[t];
                    if (null != i && !i.closed) {
                        f.FB ? d.ZP.focus(t) : i.focus();
                        return !1
                    }
                    var o = n.defaultWidth,
                        u = n.defaultHeight,
                        l = n.defaultAlwaysOnTop,
                        a = void 0 !== l && l,
                        c = b(n, ["defaultWidth", "defaultHeight", "defaultAlwaysOnTop"]),
                        s = a,
                        p = m[t];
                    if (null != p) {
                        var h = p.width,
                            E = p.height,
                            _ = p.x,
                            O = p.y,
                            I = p.alwaysOnTop;
                        s = null != I ? I : a;
                        c = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                }))));
                                r.forEach((function(t) {
                                    y(e, t, n[t])
                                }))
                            }
                            return e
                        }({
                            width: null != h && 0 !== h ? h : o,
                            height: null != E && 0 !== E ? E : u,
                            left: _,
                            top: O
                        }, c)
                    }
                    var g = window.open(v.Z5c.POPOUT_WINDOW, t, function(e) {
                        var t = "",
                            n = !0,
                            r = !1,
                            i = void 0;
                        try {
                            for (var o, u = Object.keys(e)[Symbol.iterator](); !(n = (o = u.next()).done); n = !0) {
                                var l = o.value,
                                    a = e[l];
                                if (void 0 !== a) {
                                    "boolean" == typeof a && (a = a ? "yes" : "no");
                                    t += "".concat(l, "=").concat(a, ",")
                                }
                            }
                        } catch (e) {
                            r = !0;
                            i = e
                        } finally {
                            try {
                                n || null == u.return || u.return()
                            } finally {
                                if (r) throw i
                            }
                        }
                        return t
                    }(c));
                    g.windowKey = t;
                    null == g || g.focus();
                    P[t] = g;
                    w[t] = r;
                    if (f.FB) {
                        d.ZP.setAlwaysOnTop(t, s);
                        T[t] = s;
                        d.ZP.isAlwaysOnTop(t).then((function(e) {
                            return T[t] = e
                        }))
                    }
                    A.add(t)
                },
                POPOUT_WINDOW_CLOSE: function(e) {
                    var t = e.key,
                        n = P[t];
                    if (null != n && !n.closed) {
                        R(t);
                        n.close()
                    }
                },
                POPOUT_WINDOW_SET_ALWAYS_ON_TOP: function(e) {
                    var t = e.key,
                        n = e.alwaysOnTop;
                    if (f.FB) {
                        d.ZP.setAlwaysOnTop(t, n);
                        T[t] = n;
                        d.ZP.isAlwaysOnTop(t).then((function(e) {
                            return T[t] = e
                        }))
                    }
                },
                LOGOUT: M
            });
            const U = V
        },
        451458: (e, t, n) => {
            n.d(t, {
                Kh: () => s,
                ad: () => f,
                gt: () => d,
                jd: () => p
            });
            var r = n(441143),
                i = n.n(r),
                o = n(761953),
                u = n(201521),
                l = n(61209),
                a = n(784426),
                c = n(2590);

            function s(e, t, n) {
                var r = l.Z.getChannel(e);
                if (null != r) {
                    var i = (0, u.e)(r);
                    o.Z.preload(r.guild_id, r.id);
                    (0, a.uL)(c.Z5c.CHANNEL(i, r.id), t, n)
                }
            }

            function f(e, t) {
                i()(null != e.parent_id, "Thread must have a parent ID.");
                var n = (0, u.e)(e);
                (0, a.uL)(c.Z5c.CHANNEL(n, e.id), void 0, t)
            }

            function d(e, t, n) {
                i()(null != e.parent_id, "Thread must have a parent ID.");
                var r = (0, u.e)(e);
                (0, a.uL)(c.Z5c.CHANNEL(r, e.id, t), void 0, n)
            }

            function p(e, t, n, r) {
                var i = l.Z.getChannel(e);
                if (null != i) {
                    var o = (0, u.e)(i);
                    (0, a.uL)(c.Z5c.CHANNEL(o, i.id, t), n, r)
                }
            }
        },
        636246: (e, t, n) => {
            n.d(t, {
                T: () => O,
                Ev: () => I,
                $Q: () => g,
                vu: () => T,
                Us: () => P,
                Zl: () => S,
                R5: () => w,
                Gy: () => A
            });
            var r = n(785893),
                i = (n(667294), n(264817)),
                o = n(451458),
                u = n(664625),
                l = n(933022),
                a = n(766496),
                c = n(299239),
                s = n(426404),
                f = n(2590),
                d = n(662885);

            function p(e, t, n, r, i, o, u) {
                try {
                    var l = e[o](u),
                        a = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(a) : Promise.resolve(a).then(r, i)
            }

            function v(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function u(e) {
                            p(o, r, i, u, l, "next", e)
                        }

                        function l(e) {
                            p(o, r, i, u, l, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function h(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        h(e, t, n[t])
                    }))
                }
                return e
            }

            function E(e, t) {
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
            var b = function(e, t) {
                var n, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function l(o) {
                    return function(l) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r),
                                        0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = u.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2];
                                            u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                o = t.call(e, u)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, l])
                    }
                }
            };

            function _(e) {
                var t = u.default.getId(),
                    o = l.ZP.isModerator(t, e.id),
                    c = a.Z.isLive(e.id);
                o && !c ? O(e) : o && c && function(e) {
                    (0, i.ZD)(v((function() {
                        var t, i;
                        return b(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, Promise.all([n.e(40532), n.e(71575), n.e(88110), n.e(10523), n.e(39354)]).then(n.bind(n, 692728))];
                                case 1:
                                    t = o.sent(), i = t.default;
                                    return [2, function(t) {
                                        return (0, r.jsx)(i, E(y({}, t), {
                                            channel: e
                                        }))
                                    }]
                            }
                        }))
                    })))
                }(e)
            }

            function O(e, t) {
                (0, i.ZD)(v((function() {
                    var t, i;
                    return b(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(24251), n.e(71575), n.e(88110), n.e(76188), n.e(10523), n.e(77647)]).then(n.bind(n, 423285))];
                            case 1:
                                t = o.sent(), i = t.default;
                                return [2, function(t) {
                                    return (0, r.jsx)(i, E(y({}, t), {
                                        channel: e
                                    }))
                                }]
                        }
                    }))
                })), {
                    contextKey: t === f.IlC.POPOUT ? d.u1 : d.z1
                })
            }

            function I(e, t) {
                (0, i.ZD)(v((function() {
                    var t, i;
                    return b(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(71575), n.e(88110), n.e(30452), n.e(69489)]).then(n.bind(n, 869489))];
                            case 1:
                                t = o.sent(), i = t.default;
                                return [2, function(t) {
                                    return (0, r.jsx)(i, E(y({}, t), {
                                        channel: e
                                    }))
                                }]
                        }
                    }))
                })), {
                    contextKey: t === f.IlC.POPOUT ? d.u1 : d.z1
                })
            }

            function g(e) {}

            function m(e) {
                (0, o.Kh)(e.id)
            }

            function T(e, t) {
                (0, i.ZD)(v((function() {
                    var i, o;
                    return b(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(10523), n.e(35657)]).then(n.bind(n, 135657))];
                            case 1:
                                i = u.sent(), o = i.default;
                                return [2, function(n) {
                                    return (0, r.jsx)(o, E(y({}, n), {
                                        channel: e,
                                        onAccept: t
                                    }))
                                }]
                        }
                    }))
                })))
            }

            function P(e, t) {
                (0, i.ZD)(v((function() {
                    var t, i;
                    return b(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(71575), n.e(88110), n.e(30452), n.e(94055)]).then(n.bind(n, 194055))];
                            case 1:
                                t = o.sent(), i = t.default;
                                return [2, function(t) {
                                    return (0, r.jsx)(i, E(y({}, t), {
                                        channel: e
                                    }))
                                }]
                        }
                    }))
                })), {
                    contextKey: t === f.IlC.POPOUT ? d.u1 : d.z1
                })
            }

            function S(e) {
                var t = u.default.getId(),
                    n = (0, s.Z7)(e);
                return !l.ZP.isModerator(t, e) && n > 0
            }

            function w(e, t) {
                var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                t !== e.id && (0, c.Ku)(!0);
                m(e);
                t !== e.id && n && _(e)
            }

            function A(e, t) {
                (0, i.ZD)(v((function() {
                    var i, o;
                    return b(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                return [4, n.e(51562).then(n.bind(n, 851562))];
                            case 1:
                                i = u.sent(), o = i.default;
                                return [2, function(n) {
                                    return (0, r.jsx)(o, y({
                                        channel: e,
                                        onConfirm: t
                                    }, n))
                                }]
                        }
                    }))
                })));
                return !0
            }
        },
        915840: (e, t, n) => {
            n.d(t, {
                Cq: () => K,
                AC: () => H,
                TM: () => W,
                R5: () => q
            });
            var r = n(327499),
                i = n(116404),
                o = n(481008),
                u = n(728998),
                l = n(94969),
                a = n(177570),
                c = n(61209),
                s = n(567403),
                f = n(682776),
                d = n(715107),
                p = n(636246),
                v = n(630631),
                h = n(744564),
                y = n(301928),
                E = n(664625);

            function b(e) {
                p.$Q(e)
            }
            var _ = n(933022),
                O = n(79462);

            function I(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function g(e) {
                g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return g(e)
            }

            function m(e, t) {
                return !t || "object" !== P(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function T(e, t) {
                T = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return T(e, t)
            }
            var P = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function S(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = g(e);
                    if (t) {
                        var i = g(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return m(this, n)
                }
            }
            var w = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && T(e, t)
                }(n, e);
                var t = S(n);

                function n() {
                    I(this, n);
                    var e;
                    (e = t.apply(this, arguments)).handleVoiceStateUpdates = function(t) {
                        t.voiceStates.forEach((function(t) {
                            if (null != t.channelId && t.userId === E.default.getId()) {
                                e.terminate();
                                if (!v.Z.get(O.$z, !1)) {
                                    var n = d.Z.getVoiceChannelId();
                                    if (null != n && t.channelId === n && _.ZP.isAudienceMember(t.userId, n)) {
                                        v.Z.set(O.$z, !0);
                                        b(n)
                                    }
                                }
                            }
                        }))
                    };
                    return e
                }
                var r = n.prototype;
                r._initialize = function() {
                    h.Z.subscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates)
                };
                r._terminate = function() {
                    h.Z.unsubscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates)
                };
                return n
            }(y.Z);
            const A = new w;
            var N = n(227202),
                C = n(464187),
                R = n(72580);

            function Z(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function D(e) {
                D = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return D(e)
            }

            function j(e, t) {
                return !t || "object" !== L(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function M(e, t) {
                M = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return M(e, t)
            }
            var L = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function V(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = D(e);
                    if (t) {
                        var i = D(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return j(this, n)
                }
            }
            var U = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && M(e, t)
                }(n, e);
                var t = V(n);

                function n() {
                    Z(this, n);
                    var e;
                    (e = t.apply(this, arguments)).handleVoiceChannelSelect = function(t) {
                        var n = t.channelId,
                            r = t.guildId;
                        if (null != n) {
                            var i = c.Z.getChannel(n);
                            if (null == i || i.isGuildStageVoice()) return
                        }
                        e.terminate();
                        var o = null == n ? null : null != r ? r : null;
                        e.handleDisconnectFromStageChannel(o)
                    };
                    e.handleDisconnectFromStageChannel = function(e) {
                        var t = C.Z.getGuildId();
                        (0, l.O)([t, e].filter(R.lm))
                    };
                    e.handleLogout = function() {
                        e.terminate();
                        e.handleDisconnectFromStageChannel(null)
                    };
                    return e
                }
                var r = n.prototype;
                r._initialize = function() {
                    h.Z.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect);
                    h.Z.subscribe("LOGOUT", this.handleLogout)
                };
                r._terminate = function() {
                    h.Z.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect);
                    h.Z.unsubscribe("LOGOUT", this.handleLogout)
                };
                return n
            }(y.Z);
            const F = new U;

            function x(e, t, n, r, i, o, u) {
                try {
                    var l = e[o](u),
                        a = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(a) : Promise.resolve(a).then(r, i)
            }

            function k(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function u(e) {
                            x(o, r, i, u, l, "next", e)
                        }

                        function l(e) {
                            x(o, r, i, u, l, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }
            var B = function(e, t) {
                var n, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function l(o) {
                    return function(l) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1,
                                    r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = u.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2];
                                            u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                o = t.call(e, u)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, l])
                    }
                }
            };

            function G(e, t) {
                if (!f.Z.can(N.gl, e)) return !1;
                if (p.Zl(e.id) && t !== e.id) {
                    p.vu(e, (function() {
                        return K(e, !0)
                    }));
                    return !1
                }
                return !0
            }

            function H(e, t) {
                var n, i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return new Promise((n = k((function(n) {
                    var o;
                    return B(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                if (null != (o = c.Z.getChannel(t))) {
                                    W(o, i);
                                    return [2, n(o)]
                                }
                                return [4, (0, l.O)([e])];
                            case 1:
                                u.sent();
                                return [4, r.Z.joinGuild(e, {
                                    lurker: !0
                                })];
                            case 2:
                                u.sent();
                                s.Z.addConditionalChangeListener((function() {
                                    var e = c.Z.getChannel(t);
                                    if (null == e) return !0;
                                    W(e);
                                    F.initialize();
                                    n(e);
                                    return !1
                                }));
                                return [2]
                        }
                    }))
                })), function(e) {
                    return n.apply(this, arguments)
                }))
            }

            function W(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = d.Z.getVoiceChannelId();
                if (!t && !G(e, n)) return !1;
                A.initialize();
                i.default.selectVoiceChannel(e.id);
                if ((n = d.Z.getVoiceChannelId()) !== e.id) return !1;
                var r = a.Z.getAllApplicationStreamsForChannel(e.id);
                r.length > 0 && (0, o.rn)(r[0], {
                    noFocus: !1
                });
                return !0
            }

            function K(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    i = d.Z.getVoiceChannelId();
                if (r || i === e.id || !(0, u._)(e) || !p.Gy(e, (function() {
                        return K(e, t, n, !0)
                    }))) {
                    var o = W(e, t);
                    o && q(e, i, n)
                }
            }

            function q(e, t) {
                var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                p.R5(e, t, n)
            }
        },
        299239: (e, t, n) => {
            n.d(t, {
                ZP: () => f,
                Ku: () => d,
                MV: () => p
            });
            var r = n(667294),
                i = n(38736),
                o = n(202351),
                u = n(682776),
                l = n(715107),
                a = n(227202),
                c = n(455771),
                s = (0, i.Z)((function(e) {
                    return {
                        isOnStartStageScreen: !0
                    }
                }));
            const f = s;

            function d(e) {
                s.setState({
                    isOnStartStageScreen: e
                })
            }

            function p(e) {
                var t = (0, o.e7)([l.Z], (function() {
                        return l.Z.getVoiceChannelId() === e.id
                    })),
                    n = (0, o.e7)([u.Z], (function() {
                        return u.Z.can(a.yP, e)
                    }), [e]),
                    i = (0, c.Z)(e.id),
                    s = n && !i;
                r.useEffect((function() {
                    t ? s || d(!1) : d(s)
                }), [t, s])
            }
        },
        426404: (e, t, n) => {
            n.d(t, {
                _d: () => u,
                Z7: () => l,
                z: () => a
            });
            var r = n(202351),
                i = n(82274),
                o = n(808194);

            function u(e) {
                return (0, r.e7)([i.Z], (function() {
                    return null != e ? i.Z.getParticipantCount(e, o.pV.BLOCKED) : 0
                }), [e])
            }

            function l(e) {
                var t;
                return null !== (t = i.Z.getParticipantCount(e, o.pV.BLOCKED)) && void 0 !== t ? t : 0
            }

            function a(e) {
                return (0, r.e7)([i.Z], (function() {
                    return i.Z.getMutableParticipants(e, o.pV.BLOCKED)
                }), [e])
            }
        },
        455771: (e, t, n) => {
            n.d(t, {
                Z: () => o
            });
            var r = n(202351),
                i = n(766496);

            function o(e) {
                return (0, r.e7)([i.Z], (function() {
                    return i.Z.isLive(e)
                }), [e])
            }
        },
        424158: (e, t, n) => {
            n.d(t, {
                Z: () => p
            });
            var r = n(730381),
                i = n.n(r),
                o = n(169376);

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e) {
                l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return l(e)
            }

            function a(e, t) {
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
                return !t || "object" !== f(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function s(e, t) {
                s = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return s(e, t)
            }
            var f = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function d(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = l(e);
                    if (t) {
                        var i = l(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return c(this, n)
                }
            }
            var p = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && s(e, t)
                }(n, e);
                var t = d(n);

                function n(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var r;
                    (r = t.call(this)).code = e.code || "";
                    r.temporary = e.temporary || !1;
                    r.revoked = e.revoked || !1;
                    r.uses = e.uses || 0;
                    r.maxUses = e.maxUses || 0;
                    r.maxAge = e.maxAge || 0;
                    r.createdAt = e.createdAt || new Date;
                    r.channel = e.channel;
                    r.guild = e.guild;
                    r.inviter = e.inviter || null;
                    r.targetType = e.targetType || null;
                    r.targetUser = e.targetUser || null;
                    r.targetApplication = e.targetApplication || null;
                    r.type = e.type || null;
                    r.flags = e.flags || 0;
                    return r
                }
                var r = n.prototype;
                r.isExpired = function() {
                    var e = this.maxAge;
                    if (e > 0) {
                        if (i()(this.createdAt).add(e, "seconds").isBefore(Date.now())) return !0
                    }
                    return !1
                };
                r.getExpiresAt = function() {
                    if (this.maxAge > 0) {
                        return i()(this.createdAt).add(this.maxAge, "seconds").toDate()
                    }
                    return 1 / 0
                };
                r.toString = function() {
                    return this.code
                };
                n.createFromServer = function(e) {
                    var t;
                    return new n(a(function(e) {
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
                    }({}, e), {
                        maxUses: e.max_uses,
                        maxAge: e.max_age,
                        createdAt: i()(null !== (t = e.created_at) && void 0 !== t ? t : void 0),
                        targetType: e.target_type,
                        targetUser: e.target_user,
                        targetApplication: e.target_application
                    }))
                };
                return n
            }(o.Z)
        },
        869160: (e, t, n) => {
            n.d(t, {
                Z: () => A
            });
            var r = n(208804),
                i = n.n(r),
                o = n(531351),
                u = n.n(o),
                l = n(189734),
                a = n.n(l),
                c = n(202351),
                s = n(744564),
                f = n(424158),
                d = n(718634);

            function p(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function v(e) {
                v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return v(e)
            }

            function h(e, t) {
                return !t || "object" !== E(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function y(e, t) {
                y = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return y(e, t)
            }
            var E = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function b(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = v(e);
                    if (t) {
                        var i = v(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return h(this, n)
                }
            }
            var _, O = {},
                I = {},
                g = {},
                m = {},
                T = !1,
                P = !1,
                S = !1;
            var w = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && y(e, t)
                }(n, e);
                var t = b(n);

                function n() {
                    p(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.getInvite = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.targetType,
                        r = t.targetUserId,
                        i = t.targetApplicationId;
                    if (n === d.Iq.STREAM && null != r) {
                        var o;
                        return null === (o = I[e]) || void 0 === o ? void 0 : o[r]
                    }
                    if (n === d.Iq.EMBEDDED_APPLICATION && null != i) {
                        var u;
                        return null === (u = g[e]) || void 0 === u ? void 0 : u[i]
                    }
                    return O[e]
                };
                r.getFriendInvite = function() {
                    return _
                };
                r.getFriendInvitesFetching = function() {
                    return T
                };
                r.canRevokeFriendInvite = function() {
                    return null != _ && !P && !S
                };
                return n
            }(c.ZP.Store);
            w.displayName = "InstantInviteStore";
            const A = new w(s.Z, {
                CONNECTION_OPEN: function() {
                    O = {};
                    I = {};
                    g = {};
                    m = {};
                    _ = null;
                    P = !1;
                    S = !1;
                    T = !1
                },
                CHANNEL_DELETE: function(e) {
                    var t = e.channel;
                    delete O[t.id];
                    delete I[t.id];
                    delete g[t.id]
                },
                FRIEND_INVITE_CREATE_SUCCESS: function(e) {
                    m[e.invite.code] = f.Z.createFromServer(e.invite);
                    var t;
                    _ = null !== (t = i()(u()(a()(Object.values(m), "createdAt")))) && void 0 !== t ? t : null;
                    S = !1
                },
                FRIEND_INVITE_CREATE_FAILURE: function() {
                    S = !1
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
                    null != e.invites && e.invites.forEach((function(e) {
                        null != m[e.code] && delete m[e.code]
                    }));
                    var t;
                    _ = null !== (t = i()(u()(a()(Object.values(m), "createdAt")))) && void 0 !== t ? t : null;
                    P = !1
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(e) {
                    var t = e.channelId,
                        n = e.invite,
                        r = f.Z.createFromServer(n);
                    if (r.targetType === d.Iq.STREAM && null != r.targetUser) {
                        null == I[t] && (I[t] = {});
                        I[t][String(r.targetUser.id)] = r
                    } else if (r.targetType === d.Iq.EMBEDDED_APPLICATION && null != r.targetApplication) {
                        null == g[t] && (g[t] = {});
                        g[t][r.targetApplication.id] = r
                    } else O[t] = r
                },
                INSTANT_INVITE_CREATE_FAILURE: function(e) {
                    var t = e.channelId;
                    O[t] = null
                },
                INSTANT_INVITE_REVOKE_SUCCESS: function(e) {
                    var t = e.channelId;
                    O[t] = null
                },
                FRIEND_INVITE_REVOKE_REQUEST: function() {
                    P = !0
                },
                FRIEND_INVITE_CREATE_REQUEST: function() {
                    S = !0
                },
                FRIEND_INVITES_FETCH_REQUEST: function() {
                    T = !0
                },
                FRIEND_INVITES_FETCH_RESPONSE: function(e) {
                    m = {};
                    e.invites.forEach((function(e) {
                        m[e.code] = f.Z.createFromServer(e)
                    }));
                    var t;
                    _ = null !== (t = i()(u()(a()(Object.values(m), "createdAt")))) && void 0 !== t ? t : null;
                    T = !1
                },
                INSTANT_INVITE_CLEAR: function(e) {
                    delete O[e.channelId]
                }
            })
        },
        77643: (e, t, n) => {
            n.d(t, {
                tR: () => d,
                nG: () => p,
                ml: () => h,
                bp: () => y,
                Wc: () => E,
                Ye: () => b
            });
            var r = n(567403),
                i = n(563367),
                o = n(473903),
                u = n(652591),
                l = n(2590),
                a = n(165586),
                c = n(203600),
                s = n(36256),
                f = n(473708);

            function d(e) {
                if (null != e) {
                    var t = e.maxResolution.type === s.uA.SOURCE ? a.LY.RESOLUTION_SOURCE : e.maxResolution.height,
                        n = (0, a.aW)(t);
                    return (0, a.L9)(e.maxFrameRate) !== a.ws.FPS_5 && null == a.ND.find((function(e) {
                        return e.resolution === n && e.fps !== a.ws.FPS_5 && !v(e)
                    }))
                }
            }

            function p(e) {
                if (null != e) {
                    var t = (0, a.L9)(e.maxFrameRate);
                    return null == a.ND.find((function(e) {
                        return e.fps === t && !v(e)
                    }))
                }
            }

            function v(e) {
                return null != e.quality || null != e.guildPremiumTier
            }

            function h(e) {
                return e.type === s.uA.SOURCE ? f.Z.Messages.SCREENSHARE_SOURCE : f.Z.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({
                    resolution: e.height
                })
            }

            function y(e) {
                return f.Z.Messages.SCREENSHARE_FPS_ABBREVIATED.format({
                    fps: e
                })
            }

            function E(e) {
                return null == e.maxResolution || null == e.maxFrameRate ? null : {
                    maxFrameRate: e.maxFrameRate,
                    maxResolution: e.maxResolution
                }
            }

            function b(e, t, n) {
                var s = function(e, t, n) {
                        return a.ND.find((function(r) {
                            return (null == r.preset || r.preset === e) && r.resolution === t && r.fps === n
                        }))
                    }(e, t, n),
                    f = o.default.getCurrentUser(),
                    d = i.Z.getGuildId(),
                    p = null != d ? r.Z.getGuild(d) : null;
                u.default.track(l.rMx.STREAM_SETTINGS_UPDATE, {
                    user_premium_tier: null == f ? void 0 : f.premiumType,
                    guild_premium_tier: null == p ? void 0 : p.premiumTier,
                    stream_quality_user_premium_tier: null != (null == s ? void 0 : s.quality) ? c.bg[s.quality] : null,
                    stream_quality_guild_premium_tier: null == s ? void 0 : s.guildPremiumTier,
                    stream_quality_preset: e,
                    stream_quality_resolution: t,
                    stream_quality_frame_rate: n
                })
            }
        },
        877815: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(131795),
                i = n.n(r),
                o = n(734155);

            function u(e, t) {
                if (!e.startsWith("discord:")) {
                    location.href = e;
                    return o.nextTick((function() {
                        return t(!0)
                    }))
                }
                var n = document.body;
                if (null == n) return o.nextTick((function() {
                    return t(!1)
                }));
                var r = document.createElement("iframe");
                n.appendChild(r);
                try {
                    null != r.contentWindow && (r.contentWindow.location.href = e);
                    o.nextTick((function() {
                        return t(!0)
                    }))
                } catch (e) {
                    "NS_ERROR_UNKNOWN_PROTOCOL" === e.name && o.nextTick((function() {
                        return t(!1)
                    }))
                }
                window.setTimeout((function() {
                    var e;
                    null !== (null !== (e = null == r ? void 0 : r.parentElement) && void 0 !== e ? e : null) && n.removeChild(r)
                }), 1e3)
            }

            function l(e, t) {
                var n = function() {
                        r = !0
                    },
                    r = !1;
                window.addEventListener("blur", n);
                location.href = e;
                setTimeout((function() {
                    window.removeEventListener("blur", n);
                    t(r)
                }), 1e3)
            }

            function a(e, t) {
                t(!1)
            }

            function c(e, t) {
                location.href = e;
                o.nextTick((function() {
                    return t(!0)
                }))
            }
            const s = {
                launch: "Android" === (null === (f = i().os) || void 0 === f ? void 0 : f.family) || "iOS" === (null === (d = i().os) || void 0 === d ? void 0 : d.family) ? c : "Gecko" === i().layout ? u : null != i().ua && -1 !== i().ua.indexOf("Valve Steam GameOverlay") ? a : l
            };
            var f, d
        }
    }
]);