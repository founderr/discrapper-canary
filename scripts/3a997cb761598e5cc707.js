"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [67367], {
        247250: (e, n, t) => {
            t.d(n, {
                Z: () => s
            });
            var r = t(744564),
                i = t(396043),
                o = t(652591),
                u = t(930948),
                l = t(2590);

            function a(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function c(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        a(e, n, t[n])
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
                selectParticipant: function(e, n) {
                    r.Z.dispatch({
                        type: "CHANNEL_RTC_SELECT_PARTICIPANT",
                        channelId: e,
                        id: n
                    })
                },
                updateLayout: function(e, n) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.IlC.APP;
                    o.default.track(l.rMx.VIDEO_LAYOUT_TOGGLED, c({
                        video_layout: n
                    }, (0,
                        i.AB)(e)));
                    r.Z.dispatch({
                        type: "CHANNEL_RTC_UPDATE_LAYOUT",
                        channelId: e,
                        layout: n,
                        appContext: t
                    })
                },
                toggleParticipants: function(e, n) {
                    r.Z.dispatch({
                        type: "CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN",
                        channelId: e,
                        participantsOpen: n
                    })
                },
                toggleVoiceParticipantsHidden: function(e, n) {
                    r.Z.dispatch({
                        type: "CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN",
                        channelId: e,
                        voiceParticipantsHidden: n
                    })
                },
                updateStageStreamSize: function(e, n) {
                    r.Z.dispatch({
                        type: "CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE",
                        channelId: e,
                        large: n
                    })
                },
                updateStageVideoLimitBoostUpsellDismissed: function(e, n) {
                    r.Z.dispatch({
                        type: "CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED",
                        channelId: e,
                        dismissed: n
                    })
                },
                updateChatOpen: function(e, n) {
                    r.Z.dispatch({
                        type: "CHANNEL_RTC_UPDATE_CHAT_OPEN",
                        channelId: e,
                        chatOpen: n
                    });
                    n ? setTimeout((function() {
                        u.S.dispatch(l.CkL.FOCUS_CHANNEL_TEXT_AREA, {
                            channelId: e
                        })
                    }), 0) : u.S.dispatch(l.CkL.FOCUS_CHAT_BUTTON)
                }
            }
        },
        667569: (e, n, t) => {
            t.d(n, {
                Z: () => de,
                B: () => fe
            });
            var r = t(131795),
                i = t.n(r),
                o = t(993231),
                u = t(125333),
                l = t(58964),
                a = t(97245),
                c = t(281110),
                s = t(744564),
                f = t(539381),
                d = t(973889);
            var p = t(269823),
                v = t(585548),
                h = t(773411),
                y = t(276985),
                E = t(716371),
                b = t(260561),
                _ = t(848465);
            const I = (0, b.B)({
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
            var O = (0, b.B)({
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
            var g = t(382840),
                m = t(269300),
                T = t(354793),
                P = t(641453),
                w = t(426307),
                S = t(3930),
                A = t(627794),
                N = t(784426),
                C = t(915840),
                R = t(382060),
                Z = t(664625),
                D = t(61209),
                j = t(5544),
                M = t(21372),
                L = t(567403),
                V = t(746477),
                F = t(869160),
                U = t(682776),
                x = t(473903),
                k = t(652591),
                B = t(391438),
                G = t(877815),
                H = t(327499),
                W = t(481008),
                K = t(2590),
                q = t(897196),
                z = t(443132),
                Y = t(718634),
                Q = t(79462);

            function J(e, n, t, r, i, o, u) {
                try {
                    var l = e[o](u),
                        a = l.value
                } catch (e) {
                    t(e);
                    return
                }
                l.done ? n(a) : Promise.resolve(a).then(r, i)
            }

            function X(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(n, t);

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

            function $(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function ee(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        $(e, n, t[n])
                    }))
                }
                return e
            }

            function ne(e, n) {
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
            var te = function(e, n) {
                    var t, r, i, o, u = {
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
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; u;) try {
                                    if (t = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r),
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
                                    o = n.call(e, u)
                                } catch (e) {
                                    o = [6, e];
                                    r = 0
                                } finally {
                                    t = i = 0
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
                var n, t = {};
                switch (e.target_type) {
                    case Y.Iq.STREAM:
                        var r;
                        t.targetType = e.target_type;
                        t.targetUserId = null === (r = e.target_user) || void 0 === r ? void 0 : r.id;
                        break;
                    case Y.Iq.EMBEDDED_APPLICATION:
                        var i;
                        t.targetType = e.target_type;
                        t.targetApplicationId = null === (i = e.target_application) || void 0 === i ? void 0 : i.id;
                        break;
                    case Y.Iq.ROLE_SUBSCRIPTIONS_PURCHASE:
                        t.targetType = e.target_type
                }(!(null != L.Z.getGuild(null === (n = e.guild) || void 0 === n ? void 0 : n.id)) || e.new_member) && null != e.channel && (0, R.zi)(e.channel.type) && (t.welcomeModalChannelId = e.channel.id);
                null != e.guild_scheduled_event && (t.guildScheduledEvent = e.guild_scheduled_event);
                return t
            }

            function ue(e, n, t) {
                var r;
                if ((null == t ? void 0 : t.targetType) === Y.Iq.ROLE_SUBSCRIPTIONS_PURCHASE) return q.oC.ROLE_SUBSCRIPTIONS;
                if (null == (null == t ? void 0 : t.targetType) && !R.tx.has(n.type) && ((0, h.YM)(e) || function(e) {
                        var n = (0, _.s)(e);
                        n && I.trackExposure({
                            guildId: e,
                            location: "0891c0_1"
                        });
                        return O.getCurrentConfig({
                            location: "0891c0_2"
                        }, {
                            disable: !n,
                            autoTrackExposure: !0
                        }).enabled && n
                    }(e))) return q.oC.GUILD_HOME;
                var i, o = D.Z.getChannel(n.id);
                return U.Z.can(K.Plq.VIEW_CHANNEL, o) ? n.id : null !== (i = null === (r = j.ZP.getDefaultChannel(e)) || void 0 === r ? void 0 : r.id) && void 0 !== i ? i : n.id
            }

            function le(e) {
                var n = e.guildId,
                    r = e.channel,
                    i = e.options,
                    o = e.analyticsLocations,
                    u = void 0 === o ? [] : o,
                    l = r.type,
                    a = ue(n, r, i),
                    c = null != i ? i : {},
                    f = c.targetUserId,
                    d = c.targetType,
                    p = c.targetApplicationId,
                    h = l === K.d4z.GUILD_STAGE_VOICE,
                    b = K.Z5c.CHANNEL(n, a);
                R.tx.has(l) && (0, v.h)((function() {
                    Promise.resolve().then(t.bind(t, 116404)).then((function(e) {
                        var t = e.default,
                            o = function() {
                                if (h) {
                                    (0, C.Cq)(r instanceof R.Sf ? r : (0, R.kt)(r));
                                    (0, N.uL)(b)
                                } else {
                                    t.selectVoiceChannel(a);
                                    d === Y.Iq.STREAM && null != f && W.iV({
                                        streamType: z.lo.GUILD,
                                        ownerId: f,
                                        guildId: n,
                                        channelId: a
                                    });
                                    if (d === Y.Iq.EMBEDDED_APPLICATION && null != p) {
                                        (0, N.uL)(K.Z5c.CHANNEL(null != n ? n : K.ME, a));
                                        ! function(e, n, t, r) {
                                            s.Z.dispatch({
                                                type: "EMBEDDED_ACTIVITY_DEFERRED_OPEN",
                                                channelId: e,
                                                applicationId: n,
                                                intent: r,
                                                analyticsLocations: t
                                            })
                                        }(a, p, u, null == i ? void 0 : i.intent)
                                    }
                                }
                            };
                        (0, E.n)(n, [L.Z, V.Z, x.default, M.ZP]) ? (0, y.hk)(n, o) : o()
                    }))
                }));
                ! function(e, n) {
                    var t = e.type,
                        r = null != n ? n : {},
                        i = r.transitionTo,
                        o = r.welcomeModalChannelId,
                        u = r.guildScheduledEvent,
                        l = t === K.d4z.GUILD_STAGE_VOICE,
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
                var n = e.guildScheduledEvent,
                    t = e.welcomeModalChannelId;
                null != n && (0, v.h)((function() {
                    var e = {
                        guildScheduledEventId: n.id
                    };
                    null != t && (e.welcomeModalChannelId = t);
                    (0, g.P3)(n, e)
                }))
            }
            var ce, se = function(e, n) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    D.Z.addConditionalChangeListener((function() {
                        var r, i = D.Z.getChannel(e),
                            o = x.default.getCurrentUser();
                        if (null == i || null == o) return !0;
                        if (i.nsfw && !o.nsfwAllowed) return !1;
                        if (null != (null == n ? void 0 : n.guildScheduledEvent)) {
                            ae(n);
                            return !1
                        }
                        le({
                            guildId: null !== (r = i.getGuildId()) && void 0 !== r ? r : K.ME,
                            channel: i,
                            options: n,
                            analyticsLocations: t
                        });
                        return !1
                    }))
                },
                fe = (ce = X((function(e) {
                    var n, t;
                    return te(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                n = e.guild_id, t = e.channel_id;
                                if (!(0, m.xt)(e) || null == t) return [3, 1];
                                se(t);
                                return [3, 3];
                            case 1:
                                return [4, H.Z.transitionToGuildSync(n)];
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
                resolveInvite: function e(n, t, r) {
                    if (s.Z.isDispatching()) return Promise.resolve().then((function() {
                        return e(n, t, r)
                    }));
                    s.Z.dispatch({
                        type: "INVITE_RESOLVE",
                        code: n
                    });
                    return (0, w.Z)(n, t, r).then((function(e) {
                        var n = e.invite,
                            t = e.code,
                            r = e.banned;
                        null != n ? s.Z.dispatch({
                            type: "INVITE_RESOLVE_SUCCESS",
                            invite: n,
                            code: t
                        }) : s.Z.dispatch({
                            type: "INVITE_RESOLVE_FAILURE",
                            code: t,
                            banned: r
                        });
                        return {
                            invite: n,
                            code: t
                        }
                    }))
                },
                getInviteContext: function(e, n) {
                    return {
                        location: e,
                        location_guild_id: null != n.guild ? n.guild.id : void 0,
                        location_channel_id: null != n.channel ? n.channel.id : void 0,
                        location_channel_type: null != n.channel ? n.channel.type : void 0
                    }
                },
                createInvite: function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = arguments.length > 2 ? arguments[2] : void 0;
                    return X((function() {
                        var r, i, o;
                        return te(this, (function(u) {
                            switch (u.label) {
                                case 0:
                                    u.trys.push([0, 2, , 3]);
                                    return [4, c.ZP.post({
                                        url: K.ANM.INSTANT_INVITES(e),
                                        body: n,
                                        context: {
                                            location: t
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
                mobileCreateInvite: function(e, n) {
                    return X((function() {
                        var t, r, i;
                        return te(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    if (null != (t = F.Z.getInvite(e.id)) && !t.isExpired()) return [2, t.code];
                                    r = {
                                        max_age: K.UF9.DAY
                                    };
                                    return [4, this.createInvite(e.id, r, n).catch((function() {
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
                        var n;
                        return te(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, new Promise((function(e) {
                                        return s.Z.wait((function() {
                                            return e(null)
                                        }))
                                    }))];
                                case 1:
                                    t.sent();
                                    if (F.Z.getFriendInvitesFetching()) return null != ie ? [2, ie.then((function(e) {
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
                                    n = t.sent().body;
                                    ie = null;
                                    s.Z.dispatch({
                                        type: "FRIEND_INVITES_FETCH_RESPONSE",
                                        receivedAt: new Date,
                                        invites: n
                                    });
                                    return [2, n]
                            }
                        }))
                    }))()
                },
                createFriendInvite: function(e, n) {
                    s.Z.dispatch({
                        type: "FRIEND_INVITE_CREATE_REQUEST"
                    });
                    return c.ZP.post({
                        url: K.ANM.FRIEND_INVITES,
                        body: null != e ? e : {},
                        context: {
                            location: n
                        }
                    }).then((function(e) {
                        var n = e.body;
                        s.Z.dispatch({
                            type: "FRIEND_INVITE_CREATE_SUCCESS",
                            invite: n
                        });
                        return n
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
                        var n = e.body;
                        s.Z.dispatch({
                            type: "FRIEND_INVITE_REVOKE_SUCCESS",
                            invites: n
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
                    var n = e.code,
                        t = e.channel;
                    return B.Z.delete({
                        url: K.ANM.INVITE(n),
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
                            code: n,
                            channelId: t.id
                        })
                    }))
                },
                acceptInvite: function(e) {
                    var n, r = e.inviteKey,
                        i = e.context,
                        o = e.callback,
                        u = e.skipOnboarding,
                        l = (0, P.fU)(r),
                        a = l.baseCode,
                        f = Z.default.getSessionId(),
                        p = function(e, n) {
                            return ne(ee({}, e), {
                                invite_guild_scheduled_event_id: n.guildScheduledEventId
                            })
                        }(i, l),
                        v = x.default.getCurrentUser();
                    if (null !== (n = null == v ? void 0 : v.hasFlag(K.xW$.QUARANTINED)) && void 0 !== n && n) {
                        (0, S.default)();
                        return new Promise((function(e, n) {
                            return n(new Error)
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
                            var n, r, i, c, f, d;
                            return te(this, (function(p) {
                                switch (p.label) {
                                    case 0:
                                        s.Z.dispatch({
                                            type: "INVITE_ACCEPT_SUCCESS",
                                            invite: e.body,
                                            code: a
                                        });
                                        r = m.ZP.getGuildScheduledEvent(l.guildScheduledEventId);
                                        i = ne(ee({}, e.body), {
                                            guild_scheduled_event: r
                                        });
                                        f = null !== (c = null == i ? void 0 : i.guild_id) && void 0 !== c ? c : null == i || null === (n = i.guild) || void 0 === n ? void 0 : n.id;
                                        return u || null == f || !i.new_member ? [3, 3] : [4, Promise.all([t.e(1459), t.e(73177)]).then(t.bind(t, 788533))];
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
                        return function(n) {
                            return e.apply(this, arguments)
                        }
                    }(), (function(e) {
                        var n, t;
                        s.Z.dispatch({
                            type: "INVITE_ACCEPT_FAILURE",
                            code: a,
                            error: {
                                message: null === (n = e.body) || void 0 === n ? void 0 : n.message,
                                code: null === (t = e.body) || void 0 === t ? void 0 : t.code
                            }
                        });
                        throw new d.Z(e)
                    }))
                },
                acceptInviteAndTransitionToInviteChannel: function(e) {
                    var n = e.inviteKey,
                        t = e.context,
                        r = e.analyticsLocations,
                        i = e.callback,
                        o = e.skipOnboarding;
                    return this.acceptInvite({
                        inviteKey: n,
                        context: t,
                        skipOnboarding: o,
                        callback: function(e) {
                            if (null != e.channel) {
                                var n = oe(e);
                                se(e.channel.id, n, null != r ? r : [])
                            }
                            null != i && i(e)
                        }
                    })
                },
                transitionToInvite: function(e, n) {
                    var t, r, i, o = e.channel,
                        u = e.guild;
                    if (null != u && (null === (t = u.features) || void 0 === t ? void 0 : t.includes(K.oNc.HUB))) T.Z.onOpenHubInvite(e);
                    else if (null != u && (null === (r = u.features) || void 0 === r ? void 0 : r.includes(K.oNc.COMMUNITY)) && (null === (i = u.features) || void 0 === i ? void 0 : i.includes(K.oNc.MEMBER_VERIFICATION_GATE_ENABLED)) && !u.features.includes(K.oNc.PREVIEW_ENABLED))(0, N.uL)(K.Z5c.GUILD_MEMBER_VERIFICATION(u.id, e.code));
                    else if (null != o) {
                        var l = oe(e);
                        null != n && (l.transitionTo = n);
                        le({
                            guildId: null != u ? u.id : K.ME,
                            channel: o,
                            options: l
                        })
                    }
                },
                transitionToInviteSync: function(e, n, t) {
                    if (null != e.channel) {
                        var r = oe(e);
                        this.transitionToInviteChannelSync(e.channel.id, ne(ee({}, r), {
                            intent: t,
                            transitionTo: n
                        }))
                    }
                },
                openNativeAppModal: function(e) {
                    p.Z.openNativeAppModal(e, K.Etm.INVITE_BROWSER)
                },
                openApp: function(e, n, t, r, o) {
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
                                fingerprint: t,
                                username: r,
                                attemptId: y,
                                event: null == d ? void 0 : d.guildScheduledEventId,
                                iosFallbackLink: "https://discord.com/api/download/mobile?invite_code=".concat(p)
                            });
                            k.default.track(K.rMx.DEEP_LINK_CLICKED, {
                                fingerprint: (0, a.K)(t),
                                attempt_id: y,
                                source: re,
                                invite_code: p
                            })
                        } else {
                            "#" === (v = null != n ? K.Z5c.INVITE_PROXY(n) : "")[0] && (v = v.slice(1));
                            v = "discord://".concat(v)
                        }
                        G.Z.launch(v, (function(n) {
                            s.Z.dispatch(n ? {
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
        481008: (e, n, t) => {
            t.d(n, {
                WH: () => Z,
                tK: () => D,
                rn: () => M,
                pR: () => L,
                iV: () => V,
                g: () => F,
                aP: () => U,
                n9: () => x,
                xc: () => B,
                Rc: () => H,
                dV: () => W,
                L6: () => K,
                tE: () => q,
                W1: () => z
            });
            var r = t(441143),
                i = t.n(r),
                o = t(993231),
                u = t(281110),
                l = t(744564),
                a = t(409125),
                c = t(306263),
                s = t(88329),
                f = t(63509),
                d = t(177570),
                p = t(664625),
                v = t(61209),
                h = t(567403),
                y = t(715107),
                E = t(407561),
                b = t(176758),
                _ = t(77643),
                I = t(391438),
                O = t(997244),
                g = t(761953),
                m = t(247250),
                T = t(116404),
                P = t(2590),
                w = t(443132);

            function S(e, n, t, r, i, o, u) {
                try {
                    var l = e[o](u),
                        a = l.value
                } catch (e) {
                    t(e);
                    return
                }
                l.done ? n(a) : Promise.resolve(a).then(r, i)
            }

            function A(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(n, t);

                        function u(e) {
                            S(o, r, i, u, l, "next", e)
                        }

                        function l(e) {
                            S(o, r, i, u, l, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function N(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function C(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        N(e, n, t[n])
                    }))
                }
                return e
            }
            var R = function(e, n) {
                var t, r, i, o, u = {
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
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (t = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
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
                                o = n.call(e, u)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                t = i = 0
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

            function Z(e, n, t) {
                l.Z.dispatch(C({
                    type: "STREAM_START",
                    streamType: null != e ? w.lo.GUILD : w.lo.CALL,
                    guildId: e,
                    channelId: n,
                    appContext: __OVERLAY__ ? P.IlC.OVERLAY : P.IlC.APP
                }, t))
            }

            function D(e, n) {
                var t = (0, c.V9)(e);
                l.Z.dispatch({
                    type: "STREAM_SET_PAUSED",
                    streamKey: t,
                    paused: n
                })
            }

            function j(e, n) {
                var t = v.Z.getChannel(n);
                i()(null != t, "Cannot join a null voice channel");
                return !E.Z.isInChannel(n) && (0, b.rY)(t, E.Z, h.Z)
            }

            function M(e, n) {
                if (!(null != a.Z.getRemoteSessionId())) {
                    var t = e.guildId,
                        r = e.channelId;
                    if (null == t || !j(0, r)) {
                        var i = (0,
                                c.V9)(e),
                            o = (null == n ? void 0 : n.forceMultiple) || d.Z.getAllActiveStreamsForChannel(r).filter((function(e) {
                                return e.ownerId !== p.default.getId()
                            })).length >= 2;
                        l.Z.dispatch({
                            type: "STREAM_WATCH",
                            streamKey: i,
                            allowMultiple: o
                        });
                        o || (null == n ? void 0 : n.noFocus) || m.Z.selectParticipant(e.channelId, i)
                    }
                }
            }

            function L(e, n) {
                l.Z.dispatch({
                    type: "STREAM_UPDATE_SELF_HIDDEN",
                    channelId: e,
                    selfStreamHidden: n
                })
            }

            function V(e, n) {
                var t = e.guildId,
                    r = e.channelId;
                if (null == t || !j(0, r)) {
                    M(e, n);
                    var i = f.Z.getWindowOpen(P.KJ3.CHANNEL_CALL_POPOUT),
                        o = y.Z.getVoiceChannelId();
                    i && o === r || (0, s.Z)(e)
                }
            }

            function F(e) {
                var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                U(e, n);
                l.Z.dispatch({
                    type: "STREAM_STOP",
                    streamKey: e,
                    appContext: __OVERLAY__ ? P.IlC.OVERLAY : P.IlC.APP
                })
            }

            function U(e) {
                var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                l.Z.dispatch({
                    type: "STREAM_CLOSE",
                    streamKey: e,
                    canShowFeedback: n
                })
            }

            function x(e, n, t) {
                return k.apply(this, arguments)
            }

            function k() {
                return (k = A((function(e, n, t) {
                    var r, i, o, a;
                    return R(this, (function(s) {
                        switch (s.label) {
                            case 0:
                                r = (0, c.V9)({
                                    streamType: null != e ? w.lo.GUILD : w.lo.CALL,
                                    guildId: e,
                                    channelId: n,
                                    ownerId: t
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
                    return R(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                n.trys.push([0, 2, , 3]);
                                return [4, I.Z.post({
                                    url: P.ANM.STREAM_NOTIFY(e),
                                    oldFormErrors: !0,
                                    trackedActionData: {
                                        event: o.a9.STREAM_NOTIFY
                                    }
                                })];
                            case 1:
                                n.sent();
                                return [3, 3];
                            case 2:
                                n.sent();
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

            function W(e, n) {
                u.ZP.patch({
                    url: P.ANM.STREAM(e),
                    body: {
                        region: n
                    },
                    oldFormErrors: !0
                })
            }

            function K() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                    n = d.Z.getCurrentUserActiveStream();
                null != n && F((0, c.V9)(n), e)
            }

            function q(e) {
                var n = e.channelId,
                    t = e.pid,
                    r = e.sourceId,
                    i = e.sourceName;
                if (null != t || null != r || null != i) {
                    l.Z.dispatch({
                        type: "START_BROADCAST_STREAM",
                        options: {
                            pid: t,
                            sourceId: r,
                            sourceName: i
                        }
                    });
                    null == n ? g.Z.createBroadcastPrivateChannel() : Z(null, n, {
                        pid: t,
                        sourceId: r,
                        sourceName: i
                    })
                }
            }

            function z(e, n) {
                var t = p.default.getId(),
                    r = (0, c.my)(n),
                    i = y.Z.getVoiceChannelId();
                null != i && i !== e && T.default.disconnect();
                g.Z.addRecipient(e, t, void 0, (function() {
                    O.Z.call(e, !1, !1, null, (function() {
                        V(r)
                    }))
                }))
            }
        },
        127624: (e, n, t) => {
            t.d(n, {
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
                al: () => E
            });
            var r, i = t(73904),
                o = t(473708),
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
                y = 1;

            function E(e) {
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
        728998: (e, n, t) => {
            t.d(n, {
                _: () => a
            });
            var r = t(409125),
                i = t(379991),
                o = t(664625),
                u = t(567403),
                l = t(407561);

            function a(e) {
                if (i.ZP.disableVoiceChannelChangeAlert) return !1;
                var n = r.Z.getRemoteSessionId();
                if (null != l.Z.getVoiceStateForSession(o.default.getId(), n)) return !1;
                if (!l.Z.isCurrentClientInVoiceChannel()) return !1;
                if (l.Z.isInChannel(e.id)) return !1;
                var t = u.Z.getGuild(e.getGuildId());
                return null == (null == t ? void 0 : t.afkChannelId) || !l.Z.isInChannel(t.afkChannelId)
            }
        },
        269823: (e, n, t) => {
            t.d(n, {
                Z: () => o
            });
            var r = t(744564),
                i = t(199790);
            const o = {
                openNativeAppModal: function(e, n) {
                    var o = this;
                    if (!i.a) {
                        r.Z.dispatch({
                            type: "NATIVE_APP_MODAL_OPENING",
                            code: e
                        });
                        Promise.resolve().then(t.bind(t, 384482)).then((function(t) {
                            var r = t.default;
                            r.request(n, {
                                code: e
                            }).then((function(e) {
                                var n = e.code;
                                return o.nativeModalOpened(n)
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
        201521: (e, n, t) => {
            t.d(n, {
                Z: () => l,
                e: () => a
            });
            var r = t(202351),
                i = t(464187),
                o = t(419051),
                u = t(2590);

            function l(e) {
                var n = (0, r.e7)([i.Z], (function() {
                    return i.Z.getGuildId()
                }));
                return null != n ? n : e.getGuildId()
            }

            function a(e) {
                return i.Z.getGuildId() !== u.I_8 ? e.getGuildId() : o.Z.isFavorite(e.id) || e.isThread() && o.Z.isFavorite(e.parent_id) ? u.I_8 : e.getGuildId()
            }
        },
        585548: (e, n, t) => {
            t.d(n, {
                h: () => l
            });
            var r = t(744564),
                i = t(652555),
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
        88329: (e, n, t) => {
            t.d(n, {
                Z: () => i
            });
            var r = t(451458);

            function i(e) {
                (0, r.Kh)(e.channelId)
            }
        },
        714305: (e, n, t) => {
            t.d(n, {
                Z: () => O
            });
            var r = t(281110),
                i = t(744564),
                o = t(189651),
                u = t(861426),
                l = t(641453),
                a = t(21372),
                c = t(757753),
                s = t(473903),
                f = t(2590);

            function d(e, n, t, r, i, o, u) {
                try {
                    var l = e[o](u),
                        a = l.value
                } catch (e) {
                    t(e);
                    return
                }
                l.done ? n(a) : Promise.resolve(a).then(r, i)
            }

            function p(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(n, t);

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
            var v, h = function(e, n) {
                    var t, r, i, o, u = {
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
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; u;) try {
                                    if (t = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
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
                                    o = n.call(e, u)
                                } catch (e) {
                                    o = [6, e];
                                    r = 0
                                } finally {
                                    t = i = 0
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
                y = (v = p((function(e, n) {
                    var t, o, u, d, p;
                    return h(this, (function(v) {
                        switch (v.label) {
                            case 0:
                                t = null != n ? n : c.Z.getInviteKeyForGuildId(e);
                                o = s.default.getCurrentUser();
                                u = !a.ZP.isMember(e, null == o ? void 0 : o.id);
                                v.label = 1;
                            case 1:
                                v.trys.push([1, 3, , 4]);
                                return [4, r.ZP.get({
                                    url: f.ANM.GUILD_MEMBER_VERIFICATION(e),
                                    query: {
                                        with_guild: u,
                                        invite_code: null != t ? (0, l.jX)(t) : void 0
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
                })), function(e, n) {
                    return v.apply(this, arguments)
                }),
                E = function() {
                    var e = p((function(e, n) {
                        var t, o;
                        return h(this, (function(u) {
                            switch (u.label) {
                                case 0:
                                    return [4, r.ZP.patch({
                                        url: f.ANM.GUILD_MEMBER_VERIFICATION(e),
                                        body: {
                                            form_fields: n
                                        },
                                        oldFormErrors: !0
                                    })];
                                case 1:
                                    t = u.sent();
                                    o = t.body;
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
                    return function(n, t) {
                        return e.apply(this, arguments)
                    }
                }(),
                b = function() {
                    var e = p((function(e, n) {
                        var t, o;
                        return h(this, (function(u) {
                            switch (u.label) {
                                case 0:
                                    return [4, r.ZP.patch({
                                        url: f.ANM.GUILD_MEMBER_VERIFICATION(e),
                                        body: {
                                            description: n
                                        },
                                        oldFormErrors: !0
                                    })];
                                case 1:
                                    t = u.sent();
                                    o = t.body;
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
                    return function(n, t) {
                        return e.apply(this, arguments)
                    }
                }(),
                _ = function() {
                    var e = p((function(e, n) {
                        return h(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, r.ZP.patch({
                                        url: f.ANM.GUILD_MEMBER_VERIFICATION(e),
                                        body: {
                                            enabled: n
                                        },
                                        oldFormErrors: !0
                                    })];
                                case 1:
                                    t.sent();
                                    return [2]
                            }
                        }))
                    }));
                    return function(n, t) {
                        return e.apply(this, arguments)
                    }
                }(),
                I = function() {
                    var e = p((function(e, n) {
                        var t, l;
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
                                            version: n.version,
                                            form_fields: n.formFields
                                        }
                                    })];
                                case 2:
                                    t = a.sent();
                                    l = t.body;
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
                    return function(n, t) {
                        return e.apply(this, arguments)
                    }
                }();
            const O = {
                fetchVerificationForm: y,
                updateVerificationForm: E,
                updateVerificationFormDescription: b,
                enableVerificationForm: _,
                submitVerificationForm: I
            }
        },
        198181: (e, n, t) => {
            t.d(n, {
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
            var r, i = t(886391),
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
        276985: (e, n, t) => {
            t.d(n, {
                hk: () => i
            });
            var r, i = (r = t(785622).Z).openMemberVerificationModal;
            r.closeMemberVerificationModal
        },
        770393: (e, n, t) => {
            t.d(n, {
                rb: () => l,
                a5: () => a,
                PE: () => c
            });
            var r = t(38736),
                i = t(930948),
                o = t(2590),
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
        785622: (e, n, t) => {
            t.d(n, {
                Z: () => y
            });
            var r = t(785893),
                i = (t(667294), t(264817)),
                o = t(652591),
                u = t(714305),
                l = t(770393),
                a = t(198181),
                c = t(2590);

            function s(e, n, t, r, i, o, u) {
                try {
                    var l = e[o](u),
                        a = l.value
                } catch (e) {
                    t(e);
                    return
                }
                l.done ? n(a) : Promise.resolve(a).then(r, i)
            }

            function f(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(n, t);

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

            function d(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function p(e, n) {
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
            var v = function(e, n) {
                    var t, r, i, o, u = {
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
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; u;) try {
                                    if (t = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
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
                                    o = n.call(e, u)
                                } catch (e) {
                                    o = [6, e];
                                    r = 0
                                } finally {
                                    t = i = 0
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
                openMemberVerificationModal: function(e, n) {
                    ! function(e) {
                        o.default.track(c.rMx.OPEN_MODAL, {
                            type: a.N4,
                            guild_id: e
                        })
                    }(e);
                    var s, y = (s = f((function(n) {
                        return v(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, u.Z.submitVerificationForm(e, n)];
                                case 1:
                                    t.sent();
                                    return [2]
                            }
                        }))
                    })), function(e) {
                        return s.apply(this, arguments)
                    });
                    (0, i.ZD)(f((function() {
                        var n, i;
                        return v(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, Promise.all([t.e(40532), t.e(17586), t.e(96259), t.e(40056), t.e(23626), t.e(58093), t.e(54602), t.e(6565), t.e(16239), t.e(24251), t.e(3790), t.e(84441), t.e(30027), t.e(94302), t.e(47701), t.e(69839), t.e(70535), t.e(75700), t.e(96956), t.e(77579), t.e(49096), t.e(56356), t.e(24417), t.e(83064), t.e(39813), t.e(14606), t.e(95839), t.e(30144), t.e(822), t.e(4230), t.e(38149), t.e(24501), t.e(25978), t.e(67783), t.e(68929), t.e(80068), t.e(46106)]).then(t.bind(t, 370801))];
                                case 1:
                                    n = o.sent(), i = n.default;
                                    return [2, function(n) {
                                        return (0, r.jsx)(i, p(function(e) {
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
                                                n.onClose()
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
                        onCloseCallback: n
                    })
                },
                closeMemberVerificationModal: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    e || h();
                    (0, i.Mr)(a.Pn)
                }
            }
        },
        382840: (e, n, t) => {
            t.d(n, {
                bO: () => v,
                P3: () => h,
                lC: () => E
            });
            var r = t(785893),
                i = (t(667294), t(264817)),
                o = t(327499),
                u = t(2590),
                l = t(662885);

            function a(e, n, t, r, i, o, u) {
                try {
                    var l = e[o](u),
                        a = l.value
                } catch (e) {
                    t(e);
                    return
                }
                l.done ? n(a) : Promise.resolve(a).then(r, i)
            }

            function c(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(n, t);

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

            function s(e, n, t) {
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
                        s(e, n, t[n])
                    }))
                }
                return e
            }

            function d(e, n) {
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
            var p = function(e, n) {
                var t, r, i, o, u = {
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
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (t = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
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
                                o = n.call(e, u)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                t = i = 0
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
                var n = e.eventId,
                    o = e.parentGuildId;
                (0, i.ZD)(c((function() {
                    var e, i;
                    return p(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                return [4, Promise.all([t.e(40532), t.e(17586), t.e(96259), t.e(40056), t.e(23626), t.e(58093), t.e(83081), t.e(54602), t.e(6565), t.e(16239), t.e(24251), t.e(3790), t.e(84441), t.e(30027), t.e(94302), t.e(47701), t.e(69839), t.e(70535), t.e(75700), t.e(96956), t.e(77579), t.e(49096), t.e(56356), t.e(24417), t.e(83064), t.e(39813), t.e(14606), t.e(95839), t.e(30144), t.e(822), t.e(4230), t.e(38149), t.e(24501), t.e(5013), t.e(25978), t.e(67783), t.e(68929), t.e(77143), t.e(72982)]).then(t.bind(t, 757337))];
                            case 1:
                                e = u.sent(), i = e.default;
                                return [2, function(e) {
                                    return (0, r.jsx)(i, f({
                                        guildScheduledEventId: n,
                                        parentGuildId: o
                                    }, e))
                                }]
                        }
                    }))
                })))
            }

            function h(e, n) {
                return y.apply(this, arguments)
            }

            function y() {
                return (y = c((function(e, n) {
                    var t;
                    return p(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                t = e.guild_id;
                                return [4, o.Z.transitionToGuildSync(t, n)];
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

            function E(e, n) {
                (0, i.ZD)(c((function() {
                    var n, i;
                    return p(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, Promise.all([t.e(40532), t.e(99271)]).then(t.bind(t, 99271))];
                            case 1:
                                n = o.sent(), i = n.default;
                                return [2, function(n) {
                                    return (0, r.jsx)(i, d(f({}, n), {
                                        channel: e
                                    }))
                                }]
                        }
                    }))
                })), {
                    contextKey: n === u.IlC.POPOUT ? l.u1 : l.z1
                })
            }
        },
        354793: (e, n, t) => {
            t.d(n, {
                Z: () => o
            });
            var r = t(784426),
                i = t(2590);
            const o = {
                onOpenHubInvite: function(e) {
                    var n = e.guild;
                    null != n && (0, r.uL)(i.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(n.id, e.code))
                }
            }
        },
        189651: (e, n, t) => {
            t.d(n, {
                iD: () => m,
                Zm: () => T,
                mL: () => P,
                zS: () => S,
                og: () => A,
                aq: () => N
            });
            var r = t(744564),
                i = t(396043),
                o = t(784426),
                u = t(61209),
                l = t(5544),
                a = t(21372),
                c = t(567403),
                s = t(682776),
                f = t(715107),
                d = t(9430),
                p = t(652591),
                v = t(861426),
                h = t(557177),
                y = t(2590),
                E = t(897196);

            function b(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function _(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function I(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        _(e, n, t[n])
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

            function g(e) {
                return function(e) {
                    if (Array.isArray(e)) return b(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return b(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return b(e, n)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function m(e, n) {
                p.default.track(y.rMx.VIEW_AS_ROLES_SELECTED, O(I({
                    num_roles: Object.keys(n.roles).length
                }, (0, i.hH)(e)), {
                    is_viewing_as_member: n.type === h.z.NEW_MEMBER
                }));
                r.Z.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: n
                });
                w(e)
            }

            function T(e, n) {
                var t = v.Z.getData(e);
                if (null != t && t.type === n.type) {
                    p.default.track(y.rMx.VIEW_AS_ROLES_SELECTED, O(I({
                        num_roles: Object.keys(t.roles).length
                    }, (0, i.hH)(e)), {
                        is_viewing_as_member: t.type === h.z.NEW_MEMBER
                    }));
                    r.Z.dispatch({
                        type: "IMPERSONATE_UPDATE",
                        guildId: e,
                        data: I({}, t, n)
                    });
                    w(e)
                }
            }

            function P(e) {
                r.Z.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function w(e) {
                var n = f.Z.getChannelId(e),
                    t = u.Z.getChannel(n);
                if (!(null != n && (0, E.AB)(n)) && !s.Z.can(y.Plq.VIEW_CHANNEL, t)) {
                    var r = l.ZP.getDefaultChannel(e);
                    null != r && (0, o.uL)(y.Z5c.CHANNEL(e, r.id))
                }
            }

            function S(e, n, t) {
                var r = new Set(d.Z.getOptedInChannels(e));
                n.forEach((function(e) {
                    return r.add(e)
                }));
                t.forEach((function(e) {
                    return r.delete(e)
                }));
                T(e, {
                    type: h.z.NEW_MEMBER,
                    optInChannels: r
                })
            }

            function A(e, n) {
                var t = c.Z.getGuild(e);
                if (null != t) {
                    ! function(e, n) {
                        var t = g(l.ZP.getSelectableChannelIds(e)).concat(g(l.ZP.getVocalChannelIds(e))),
                            r = Array.from(n);
                        l.ZP.addConditionalChangeListener((function() {
                            var n = a.ZP.getSelfMember(e);
                            if (null == n) return !1;
                            if (r.some((function(e) {
                                    return !n.roles.includes(e)
                                }))) return !0;
                            var i = g(l.ZP.getSelectableChannelIds(e)).concat(g(l.ZP.getVocalChannelIds(e))).filter((function(e) {
                                return !t.includes(e)
                            }));
                            i.length > 0 && S(e, i, []);
                            return !1
                        }))
                    }(e, n);
                    var r = {};
                    n.forEach((function(e) {
                        return r[e] = t.roles[e]
                    }));
                    T(e, {
                        type: h.z.NEW_MEMBER,
                        roles: r
                    })
                }
            }

            function N(e, n) {
                T(e, I({
                    type: h.z.NEW_MEMBER
                }, n))
            }
        },
        426307: (e, n, t) => {
            t.d(n, {
                Z: () => h
            });
            var r = t(993231),
                i = t(165695),
                o = t(382060),
                u = t(664625),
                l = t(652591),
                a = t(391438),
                c = t(641453),
                s = t(718634),
                f = t(2590);

            function d(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function p(e, n) {
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

            function v(e) {
                var n = null;
                if (null != e && null != e.channel) {
                    var t = e.channel;
                    n = e.target_type === s.Iq.STREAM ? f.dAT.STREAM : e.target_type === s.Iq.EMBEDDED_APPLICATION ? f.dAT.APPLICATION : (0, o.bc)(t.type) ? f.dAT.GDM_INVITE : null == t || (0, o.hv)(t.type) ? f.dAT.FRIEND_INVITE : f.dAT.SERVER_INVITE
                }
                return n
            }

            function h(e, n, t) {
                l.default.track(f.rMx.INVITE_OPENED, {
                    invite_code: e
                });
                var o = (0, c.fU)(e),
                    s = p(function(e) {
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
                    }({}, t), {
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
                                input_value: null == t ? void 0 : t.inputValue,
                                location: n,
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
                    null != n && l.default.track(f.rMx.INVITE_RESOLVED, {
                        resolved: !0,
                        guild_id: null != i.guild ? i.guild.id : null,
                        channel_id: null != i.channel ? i.channel.id : null,
                        channel_type: null != i.channel ? i.channel.type : null,
                        inviter_id: i.inviter ? i.inviter.id : null,
                        code: o.baseCode,
                        input_value: null == t ? void 0 : t.inputValue,
                        location: n,
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
                    if (null != n) {
                        var a, c;
                        l.default.track(f.rMx.INVITE_RESOLVED, {
                            resolved: !1,
                            code: o.baseCode,
                            input_value: null == t ? void 0 : t.inputValue,
                            location: n,
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
        63509: (e, n, t) => {
            t.d(n, {
                Z: () => U
            });
            var r = t(441143),
                i = t.n(r),
                o = t(496486),
                u = t.n(o),
                l = t(620745),
                a = t(202351),
                c = t(744564),
                s = t(296602),
                f = t(120415),
                d = t(310126),
                p = t(202181),
                v = t(2590);

            function h(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function y(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function E(e) {
                E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return E(e)
            }

            function b(e, n) {
                if (null == e) return {};
                var t, r, i = function(e, n) {
                    if (null == e) return {};
                    var t, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        t = o[r];
                        n.indexOf(t) >= 0 || (i[t] = e[t])
                    }
                    return i
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        t = o[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t])
                    }
                }
                return i
            }

            function _(e, n) {
                return !n || "object" !== O(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function I(e, n) {
                I = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return I(e, n)
            }
            var O = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function g(e) {
                var n = function() {
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
                    var t, r = E(e);
                    if (n) {
                        var i = E(this).constructor;
                        t = Reflect.construct(r, arguments, i)
                    } else t = r.apply(this, arguments);
                    return _(this, t)
                }
            }
            var m = {},
                T = {},
                P = {},
                w = {},
                S = {},
                A = new Set,
                N = "app-mount",
                C = function() {
                    return F.emitChange()
                },
                R = u().debounce(C, 150);

            function Z(e) {
                var n = P[e];
                null == n || n.closed || (m[e] = {
                    x: n.screenX,
                    y: n.screenY,
                    width: n.innerWidth,
                    height: n.innerHeight,
                    alwaysOnTop: !!f.FB && T[e]
                })
            }

            function D(e) {
                var n = P[e],
                    t = S[e];
                if (null != n) {
                    var r = n.document;
                    (0, p.uF)(r, C);
                    n.addEventListener("focus", C);
                    n.addEventListener("blur", C);
                    n.addEventListener("resize", R);
                    ! function(e, n) {
                        var t = n.document,
                            r = document.querySelectorAll('link[rel="stylesheet"]'),
                            o = "".concat(window.location.protocol, "//").concat(window.location.host),
                            u = !0,
                            l = !1,
                            a = void 0;
                        try {
                            for (var c, s = r[Symbol.iterator](); !(u = (c = s.next()).done); u = !0) {
                                var f = c.value;
                                if (f.href.startsWith(o)) {
                                    var d = t.createElement("link");
                                    d.href = f.href;
                                    d.rel = f.rel;
                                    d.integrity = f.integrity;
                                    i()(null != t.head, "Document head was null");
                                    t.head.appendChild(d)
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
                    }(0, n);
                    var o = (0, l.s)(r.getElementById(N));
                    i()(null != o, "No render target for popout!");
                    w[e] = o;
                    o.render(t(e))
                } else new s.Z("PopoutWindowStore").warn("Failed to open window", e)
            }

            function j(e) {
                var n = P[e];
                if (null != n) {
                    n.closed || Z(e);
                    n.close();
                    ! function(e) {
                        var n = P[e];
                        i()(null != n, "Popout window was null during unmount");
                        n.removeEventListener("focus", C);
                        n.removeEventListener("blur", C);
                        n.removeEventListener("resize", R);
                        var t = w[e];
                        i()(null != t, "Window root was null while unmounting");
                        t.unmount();
                        delete P[e];
                        delete T[e];
                        delete S[e];
                        delete w[e]
                    }(e);
                    F.emitChange()
                }
            }

            function M(e) {
                var n = e.data;
                if (n instanceof Object && n.discordPopoutEvent instanceof Object) {
                    var t = n.discordPopoutEvent;
                    if (null != t.key) switch (t.type) {
                        case v.l9w.LOADED:
                            return function(e) {
                                if (A.has(e)) {
                                    D(e);
                                    A.delete(e);
                                    F.emitChange()
                                }
                            }(t.key);
                        case v.l9w.UNLOADED:
                            return j(t.key)
                    }
                }
            }

            function L() {
                var e = !0,
                    n = !1,
                    t = void 0;
                try {
                    for (var r, i = Object.keys(P)[Symbol.iterator](); !(e = (r = i.next()).done); e = !0) {
                        var o = r.value,
                            u = P[o];
                        null != u && u.close()
                    }
                } catch (e) {
                    n = !0;
                    t = e
                } finally {
                    try {
                        e || null == i.return || i.return()
                    } finally {
                        if (n) throw t
                    }
                }
            }
            var V = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && I(e, n)
                }(t, e);
                var n = g(t);

                function t() {
                    h(this, t);
                    return n.apply(this, arguments)
                }
                var r = t.prototype;
                r.initialize = function(e) {
                    window.addEventListener("message", M);
                    window.addEventListener("beforeunload", L);
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
                    var n = P[e];
                    return null != n && !n.closed
                };
                r.getIsAlwaysOnTop = function(e) {
                    return Boolean(T[e])
                };
                r.getWindowFocused = function(e) {
                    var n, t, r = P[e];
                    return null !== (t = null == r || null === (n = r.document) || void 0 === n ? void 0 : n.hasFocus()) && void 0 !== t && t
                };
                r.getState = function() {
                    return m
                };
                r.unmountWindow = function(e) {
                    return j(e)
                };
                r.__getLocalVars = function() {
                    return {
                        popoutWindowState: m,
                        popoutWindowsAlwaysOnTop: T,
                        popoutWindows: P,
                        windowRoots: w,
                        windowRenderers: S,
                        pendingInjections: A,
                        INJECTION_ID: N,
                        emitChange: C,
                        debouncedEmitChange: R,
                        DEVELOPMENT_MODE: false,
                        instance: F
                    }
                };
                return t
            }(a.ZP.PersistedStore);
            V.displayName = "PopoutWindowStore";
            V.persistKey = "PopoutWindowStore";
            var F = new V(c.Z, {
                POPOUT_WINDOW_OPEN: function(e) {
                    var n = e.key,
                        t = e.features,
                        r = e.render;
                    if (f.FB && !d.ZP.supportsFeature(v.eRX.POPOUT_WINDOWS)) throw new Error("Popout windows not supported on this native module version!");
                    var i = P[n];
                    if (null != i && !i.closed) {
                        f.FB ? d.ZP.focus(n) : i.focus();
                        return !1
                    }
                    var o = t.defaultWidth,
                        u = t.defaultHeight,
                        l = t.defaultAlwaysOnTop,
                        a = void 0 !== l && l,
                        c = b(t, ["defaultWidth", "defaultHeight", "defaultAlwaysOnTop"]),
                        s = a,
                        p = m[n];
                    if (null != p) {
                        var h = p.width,
                            E = p.height,
                            _ = p.x,
                            I = p.y,
                            O = p.alwaysOnTop;
                        s = null != O ? O : a;
                        c = function(e) {
                            for (var n = 1; n < arguments.length; n++) {
                                var t = null != arguments[n] ? arguments[n] : {},
                                    r = Object.keys(t);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                                }))));
                                r.forEach((function(n) {
                                    y(e, n, t[n])
                                }))
                            }
                            return e
                        }({
                            width: null != h && 0 !== h ? h : o,
                            height: null != E && 0 !== E ? E : u,
                            left: _,
                            top: I
                        }, c)
                    }
                    var g = window.open(v.Z5c.POPOUT_WINDOW, n, function(e) {
                        var n = "",
                            t = !0,
                            r = !1,
                            i = void 0;
                        try {
                            for (var o, u = Object.keys(e)[Symbol.iterator](); !(t = (o = u.next()).done); t = !0) {
                                var l = o.value,
                                    a = e[l];
                                if (void 0 !== a) {
                                    "boolean" == typeof a && (a = a ? "yes" : "no");
                                    n += "".concat(l, "=").concat(a, ",")
                                }
                            }
                        } catch (e) {
                            r = !0;
                            i = e
                        } finally {
                            try {
                                t || null == u.return || u.return()
                            } finally {
                                if (r) throw i
                            }
                        }
                        return n
                    }(c));
                    g.windowKey = n;
                    null == g || g.focus();
                    P[n] = g;
                    S[n] = r;
                    if (f.FB) {
                        d.ZP.setAlwaysOnTop(n, s);
                        T[n] = s;
                        d.ZP.isAlwaysOnTop(n).then((function(e) {
                            return T[n] = e
                        }))
                    }
                    A.add(n)
                },
                POPOUT_WINDOW_CLOSE: function(e) {
                    var n = e.key,
                        t = P[n];
                    if (null != t && !t.closed) {
                        Z(n);
                        t.close()
                    }
                },
                POPOUT_WINDOW_SET_ALWAYS_ON_TOP: function(e) {
                    var n = e.key,
                        t = e.alwaysOnTop;
                    if (f.FB) {
                        d.ZP.setAlwaysOnTop(n, t);
                        T[n] = t;
                        d.ZP.isAlwaysOnTop(n).then((function(e) {
                            return T[n] = e
                        }))
                    }
                },
                LOGOUT: L
            });
            const U = F
        },
        451458: (e, n, t) => {
            t.d(n, {
                Kh: () => s,
                ad: () => f,
                gt: () => d,
                jd: () => p
            });
            var r = t(441143),
                i = t.n(r),
                o = t(761953),
                u = t(201521),
                l = t(61209),
                a = t(784426),
                c = t(2590);

            function s(e, n, t) {
                var r = l.Z.getChannel(e);
                if (null != r) {
                    var i = (0, u.e)(r);
                    o.Z.preload(r.guild_id, r.id);
                    (0, a.uL)(c.Z5c.CHANNEL(i, r.id), n, t)
                }
            }

            function f(e, n) {
                i()(null != e.parent_id, "Thread must have a parent ID.");
                var t = (0, u.e)(e);
                (0, a.uL)(c.Z5c.CHANNEL(t, e.id), void 0, n)
            }

            function d(e, n, t) {
                i()(null != e.parent_id, "Thread must have a parent ID.");
                var r = (0, u.e)(e);
                (0, a.uL)(c.Z5c.CHANNEL(r, e.id, n), void 0, t)
            }

            function p(e, n, t, r) {
                var i = l.Z.getChannel(e);
                if (null != i) {
                    var o = (0, u.e)(i);
                    (0, a.uL)(c.Z5c.CHANNEL(o, i.id, n), t, r)
                }
            }
        },
        636246: (e, n, t) => {
            t.d(n, {
                T: () => I,
                Ev: () => O,
                $Q: () => g,
                vu: () => T,
                Us: () => P,
                Zl: () => w,
                R5: () => S,
                Gy: () => A
            });
            var r = t(785893),
                i = (t(667294), t(264817)),
                o = t(451458),
                u = t(664625),
                l = t(933022),
                a = t(766496),
                c = t(299239),
                s = t(426404),
                f = t(2590),
                d = t(662885);

            function p(e, n, t, r, i, o, u) {
                try {
                    var l = e[o](u),
                        a = l.value
                } catch (e) {
                    t(e);
                    return
                }
                l.done ? n(a) : Promise.resolve(a).then(r, i)
            }

            function v(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(n, t);

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

            function h(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function y(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        h(e, n, t[n])
                    }))
                }
                return e
            }

            function E(e, n) {
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
            var b = function(e, n) {
                var t, r, i, o, u = {
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
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (t = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
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
                                o = n.call(e, u)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                t = i = 0
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
                var n = u.default.getId(),
                    o = l.ZP.isModerator(n, e.id),
                    c = a.Z.isLive(e.id);
                o && !c ? I(e) : o && c && function(e) {
                    (0, i.ZD)(v((function() {
                        var n, i;
                        return b(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, Promise.all([t.e(40532), t.e(71575), t.e(10523), t.e(62790)]).then(t.bind(t, 270897))];
                                case 1:
                                    n = o.sent(), i = n.default;
                                    return [2, function(n) {
                                        return (0, r.jsx)(i, E(y({}, n), {
                                            channel: e
                                        }))
                                    }]
                            }
                        }))
                    })))
                }(e)
            }

            function I(e, n) {
                (0, i.ZD)(v((function() {
                    var n, i;
                    return b(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, Promise.all([t.e(40532), t.e(24251), t.e(71575), t.e(10523), t.e(53931)]).then(t.bind(t, 423285))];
                            case 1:
                                n = o.sent(), i = n.default;
                                return [2, function(n) {
                                    return (0, r.jsx)(i, E(y({}, n), {
                                        channel: e
                                    }))
                                }]
                        }
                    }))
                })), {
                    contextKey: n === f.IlC.POPOUT ? d.u1 : d.z1
                })
            }

            function O(e, n) {
                (0, i.ZD)(v((function() {
                    var n, i;
                    return b(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, Promise.all([t.e(40532), t.e(71575), t.e(91478), t.e(69489)]).then(t.bind(t, 869489))];
                            case 1:
                                n = o.sent(), i = n.default;
                                return [2, function(n) {
                                    return (0, r.jsx)(i, E(y({}, n), {
                                        channel: e
                                    }))
                                }]
                        }
                    }))
                })), {
                    contextKey: n === f.IlC.POPOUT ? d.u1 : d.z1
                })
            }

            function g(e) {}

            function m(e) {
                (0, o.Kh)(e.id)
            }

            function T(e, n) {
                (0,
                    i.ZD)(v((function() {
                    var i, o;
                    return b(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                return [4, Promise.all([t.e(40532), t.e(10523), t.e(35657)]).then(t.bind(t, 135657))];
                            case 1:
                                i = u.sent(), o = i.default;
                                return [2, function(t) {
                                    return (0, r.jsx)(o, E(y({}, t), {
                                        channel: e,
                                        onAccept: n
                                    }))
                                }]
                        }
                    }))
                })))
            }

            function P(e, n) {
                (0, i.ZD)(v((function() {
                    var n, i;
                    return b(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, Promise.all([t.e(40532), t.e(71575), t.e(91478), t.e(94055)]).then(t.bind(t, 194055))];
                            case 1:
                                n = o.sent(), i = n.default;
                                return [2, function(n) {
                                    return (0, r.jsx)(i, E(y({}, n), {
                                        channel: e
                                    }))
                                }]
                        }
                    }))
                })), {
                    contextKey: n === f.IlC.POPOUT ? d.u1 : d.z1
                })
            }

            function w(e) {
                var n = u.default.getId(),
                    t = (0, s.Z7)(e);
                return !l.ZP.isModerator(n, e) && t > 0
            }

            function S(e, n) {
                var t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                n !== e.id && (0, c.Ku)(!0);
                m(e);
                n !== e.id && t && _(e)
            }

            function A(e, n) {
                (0, i.ZD)(v((function() {
                    var i, o;
                    return b(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                return [4, t.e(51562).then(t.bind(t, 851562))];
                            case 1:
                                i = u.sent(), o = i.default;
                                return [2, function(t) {
                                    return (0, r.jsx)(o, y({
                                        channel: e,
                                        onConfirm: n
                                    }, t))
                                }]
                        }
                    }))
                })));
                return !0
            }
        },
        915840: (e, n, t) => {
            t.d(n, {
                Cq: () => K,
                AC: () => H,
                TM: () => W,
                R5: () => q
            });
            var r = t(327499),
                i = t(116404),
                o = t(481008),
                u = t(728998),
                l = t(94969),
                a = t(177570),
                c = t(61209),
                s = t(567403),
                f = t(682776),
                d = t(715107),
                p = t(636246),
                v = t(630631),
                h = t(744564),
                y = t(301928),
                E = t(664625);

            function b(e) {
                p.$Q(e)
            }
            var _ = t(933022),
                I = t(79462);

            function O(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function g(e) {
                g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return g(e)
            }

            function m(e, n) {
                return !n || "object" !== P(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function T(e, n) {
                T = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return T(e, n)
            }
            var P = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function w(e) {
                var n = function() {
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
                    var t, r = g(e);
                    if (n) {
                        var i = g(this).constructor;
                        t = Reflect.construct(r, arguments, i)
                    } else t = r.apply(this, arguments);
                    return m(this, t)
                }
            }
            var S = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && T(e, n)
                }(t, e);
                var n = w(t);

                function t() {
                    O(this, t);
                    var e;
                    (e = n.apply(this, arguments)).handleVoiceStateUpdates = function(n) {
                        n.voiceStates.forEach((function(n) {
                            if (null != n.channelId && n.userId === E.default.getId()) {
                                e.terminate();
                                if (!v.Z.get(I.$z, !1)) {
                                    var t = d.Z.getVoiceChannelId();
                                    if (null != t && n.channelId === t && _.ZP.isAudienceMember(n.userId, t)) {
                                        v.Z.set(I.$z, !0);
                                        b(t)
                                    }
                                }
                            }
                        }))
                    };
                    return e
                }
                var r = t.prototype;
                r._initialize = function() {
                    h.Z.subscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates)
                };
                r._terminate = function() {
                    h.Z.unsubscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates)
                };
                r.__getLocalVars = function() {
                    return {}
                };
                return t
            }(y.Z);
            const A = new S;
            var N = t(227202),
                C = t(464187),
                R = t(72580);

            function Z(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function D(e) {
                D = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return D(e)
            }

            function j(e, n) {
                return !n || "object" !== L(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function M(e, n) {
                M = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return M(e, n)
            }
            var L = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function V(e) {
                var n = function() {
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
                    var t, r = D(e);
                    if (n) {
                        var i = D(this).constructor;
                        t = Reflect.construct(r, arguments, i)
                    } else t = r.apply(this, arguments);
                    return j(this, t)
                }
            }
            var F = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && M(e, n)
                }(t, e);
                var n = V(t);

                function t() {
                    Z(this, t);
                    var e;
                    (e = n.apply(this, arguments)).handleVoiceChannelSelect = function(n) {
                        var t = n.channelId,
                            r = n.guildId;
                        if (null != t) {
                            var i = c.Z.getChannel(t);
                            if (null == i || i.isGuildStageVoice()) return
                        }
                        e.terminate();
                        var o = null == t ? null : null != r ? r : null;
                        e.handleDisconnectFromStageChannel(o)
                    };
                    e.handleDisconnectFromStageChannel = function(e) {
                        var n = C.Z.getGuildId();
                        (0, l.O)([n, e].filter(R.lm))
                    };
                    e.handleLogout = function() {
                        e.terminate();
                        e.handleDisconnectFromStageChannel(null)
                    };
                    return e
                }
                var r = t.prototype;
                r._initialize = function() {
                    h.Z.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect);
                    h.Z.subscribe("LOGOUT", this.handleLogout)
                };
                r._terminate = function() {
                    h.Z.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect);
                    h.Z.unsubscribe("LOGOUT", this.handleLogout)
                };
                r.__getLocalVars = function() {
                    return {}
                };
                return t
            }(y.Z);
            const U = new F;

            function x(e, n, t, r, i, o, u) {
                try {
                    var l = e[o](u),
                        a = l.value
                } catch (e) {
                    t(e);
                    return
                }
                l.done ? n(a) : Promise.resolve(a).then(r, i)
            }

            function k(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(n, t);

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
            var B = function(e, n) {
                var t, r, i, o, u = {
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
                    },
                    "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                function l(o) {
                    return function(l) {
                        return function(o) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (t = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
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
                                o = n.call(e, u)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                t = i = 0
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

            function G(e, n) {
                if (!f.Z.can(N.gl, e)) return !1;
                if (p.Zl(e.id) && n !== e.id) {
                    p.vu(e, (function() {
                        return K(e, !0)
                    }));
                    return !1
                }
                return !0
            }

            function H(e, n) {
                var t, i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return new Promise((t = k((function(t) {
                    var o;
                    return B(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                if (null != (o = c.Z.getChannel(n))) {
                                    W(o, i);
                                    return [2, t(o)]
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
                                    var e = c.Z.getChannel(n);
                                    if (null == e) return !0;
                                    W(e);
                                    U.initialize();
                                    t(e);
                                    return !1
                                }));
                                return [2]
                        }
                    }))
                })), function(e) {
                    return t.apply(this, arguments)
                }))
            }

            function W(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    t = d.Z.getVoiceChannelId();
                if (!n && !G(e, t)) return !1;
                A.initialize();
                i.default.selectVoiceChannel(e.id);
                if ((t = d.Z.getVoiceChannelId()) !== e.id) return !1;
                var r = a.Z.getAllApplicationStreamsForChannel(e.id);
                r.length > 0 && (0, o.rn)(r[0], {
                    noFocus: !1
                });
                return !0
            }

            function K(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    i = d.Z.getVoiceChannelId();
                if (r || i === e.id || !(0, u._)(e) || !p.Gy(e, (function() {
                        return K(e, n, t, !0)
                    }))) {
                    var o = W(e, n);
                    o && q(e, i, t)
                }
            }

            function q(e, n) {
                var t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                p.R5(e, n, t)
            }
        },
        299239: (e, n, t) => {
            t.d(n, {
                ZP: () => f,
                Ku: () => d,
                MV: () => p
            });
            var r = t(667294),
                i = t(38736),
                o = t(202351),
                u = t(682776),
                l = t(715107),
                a = t(227202),
                c = t(455771),
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
                var n = (0, o.e7)([l.Z], (function() {
                        return l.Z.getVoiceChannelId() === e.id
                    })),
                    t = (0, o.e7)([u.Z], (function() {
                        return u.Z.can(a.yP, e)
                    }), [e]),
                    i = (0, c.Z)(e.id),
                    s = t && !i;
                r.useEffect((function() {
                    n ? s || d(!1) : d(s)
                }), [n, s])
            }
        },
        426404: (e, n, t) => {
            t.d(n, {
                _d: () => u,
                Z7: () => l,
                z: () => a
            });
            var r = t(202351),
                i = t(82274),
                o = t(808194);

            function u(e) {
                return (0,
                    r.e7)([i.Z], (function() {
                    return null != e ? i.Z.getParticipantCount(e, o.pV.BLOCKED) : 0
                }), [e])
            }

            function l(e) {
                var n;
                return null !== (n = i.Z.getParticipantCount(e, o.pV.BLOCKED)) && void 0 !== n ? n : 0
            }

            function a(e) {
                return (0, r.e7)([i.Z], (function() {
                    return i.Z.getMutableParticipants(e, o.pV.BLOCKED)
                }), [e])
            }
        },
        455771: (e, n, t) => {
            t.d(n, {
                Z: () => o
            });
            var r = t(202351),
                i = t(766496);

            function o(e) {
                return (0, r.e7)([i.Z], (function() {
                    return i.Z.isLive(e)
                }), [e])
            }
        },
        424158: (e, n, t) => {
            t.d(n, {
                Z: () => p
            });
            var r = t(730381),
                i = t.n(r),
                o = t(169376);

            function u(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function l(e) {
                l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return l(e)
            }

            function a(e, n) {
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

            function c(e, n) {
                return !n || "object" !== f(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function s(e, n) {
                s = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return s(e, n)
            }
            var f = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function d(e) {
                var n = function() {
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
                    var t, r = l(e);
                    if (n) {
                        var i = l(this).constructor;
                        t = Reflect.construct(r, arguments, i)
                    } else t = r.apply(this, arguments);
                    return c(this, t)
                }
            }
            var p = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && s(e, n)
                }(t, e);
                var n = d(t);

                function t(e) {
                    ! function(e, n) {
                        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var r;
                    (r = n.call(this)).code = e.code || "";
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
                var r = t.prototype;
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
                t.createFromServer = function(e) {
                    var n;
                    return new t(a(function(e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var t = null != arguments[n] ? arguments[n] : {},
                                r = Object.keys(t);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable
                            }))));
                            r.forEach((function(n) {
                                u(e, n, t[n])
                            }))
                        }
                        return e
                    }({}, e), {
                        maxUses: e.max_uses,
                        maxAge: e.max_age,
                        createdAt: i()(null !== (n = e.created_at) && void 0 !== n ? n : void 0),
                        targetType: e.target_type,
                        targetUser: e.target_user,
                        targetApplication: e.target_application
                    }))
                };
                return t
            }(o.Z)
        },
        869160: (e, n, t) => {
            t.d(n, {
                Z: () => A
            });
            var r = t(208804),
                i = t.n(r),
                o = t(531351),
                u = t.n(o),
                l = t(189734),
                a = t.n(l),
                c = t(202351),
                s = t(744564),
                f = t(424158),
                d = t(718634);

            function p(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function v(e) {
                v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return v(e)
            }

            function h(e, n) {
                return !n || "object" !== E(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function y(e, n) {
                y = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return y(e, n)
            }
            var E = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function b(e) {
                var n = function() {
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
                    var t, r = v(e);
                    if (n) {
                        var i = v(this).constructor;
                        t = Reflect.construct(r, arguments, i)
                    } else t = r.apply(this, arguments);
                    return h(this, t)
                }
            }
            var _, I = {},
                O = {},
                g = {},
                m = {},
                T = !1,
                P = !1,
                w = !1;
            var S = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && y(e, n)
                }(t, e);
                var n = b(t);

                function t() {
                    p(this, t);
                    return n.apply(this, arguments)
                }
                var r = t.prototype;
                r.getInvite = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = n.targetType,
                        r = n.targetUserId,
                        i = n.targetApplicationId;
                    if (t === d.Iq.STREAM && null != r) {
                        var o;
                        return null === (o = O[e]) || void 0 === o ? void 0 : o[r]
                    }
                    if (t === d.Iq.EMBEDDED_APPLICATION && null != i) {
                        var u;
                        return null === (u = g[e]) || void 0 === u ? void 0 : u[i]
                    }
                    return I[e]
                };
                r.getFriendInvite = function() {
                    return _
                };
                r.getFriendInvitesFetching = function() {
                    return T
                };
                r.canRevokeFriendInvite = function() {
                    return null != _ && !P && !w
                };
                r.__getLocalVars = function() {
                    return {
                        channelInvites: I,
                        streamInvites: O,
                        applicationInvites: g,
                        friendInvites: m,
                        friendInvite: _,
                        friendInvitesFetching: T,
                        friendInvitesRevokeFetching: P,
                        friendInvitesCreateFetching: w
                    }
                };
                return t
            }(c.ZP.Store);
            S.displayName = "InstantInviteStore";
            const A = new S(s.Z, {
                CONNECTION_OPEN: function() {
                    I = {};
                    O = {};
                    g = {};
                    m = {};
                    _ = null;
                    P = !1;
                    w = !1;
                    T = !1
                },
                CHANNEL_DELETE: function(e) {
                    var n = e.channel;
                    delete I[n.id];
                    delete O[n.id];
                    delete g[n.id]
                },
                FRIEND_INVITE_CREATE_SUCCESS: function(e) {
                    m[e.invite.code] = f.Z.createFromServer(e.invite);
                    var n;
                    _ = null !== (n = i()(u()(a()(Object.values(m), "createdAt")))) && void 0 !== n ? n : null;
                    w = !1
                },
                FRIEND_INVITE_CREATE_FAILURE: function() {
                    w = !1
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
                    null != e.invites && e.invites.forEach((function(e) {
                        null != m[e.code] && delete m[e.code]
                    }));
                    var n;
                    _ = null !== (n = i()(u()(a()(Object.values(m), "createdAt")))) && void 0 !== n ? n : null;
                    P = !1
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(e) {
                    var n = e.channelId,
                        t = e.invite,
                        r = f.Z.createFromServer(t);
                    if (r.targetType === d.Iq.STREAM && null != r.targetUser) {
                        null == O[n] && (O[n] = {});
                        O[n][String(r.targetUser.id)] = r
                    } else if (r.targetType === d.Iq.EMBEDDED_APPLICATION && null != r.targetApplication) {
                        null == g[n] && (g[n] = {});
                        g[n][r.targetApplication.id] = r
                    } else I[n] = r
                },
                INSTANT_INVITE_CREATE_FAILURE: function(e) {
                    var n = e.channelId;
                    I[n] = null
                },
                INSTANT_INVITE_REVOKE_SUCCESS: function(e) {
                    var n = e.channelId;
                    I[n] = null
                },
                FRIEND_INVITE_REVOKE_REQUEST: function() {
                    P = !0
                },
                FRIEND_INVITE_CREATE_REQUEST: function() {
                    w = !0
                },
                FRIEND_INVITES_FETCH_REQUEST: function() {
                    T = !0
                },
                FRIEND_INVITES_FETCH_RESPONSE: function(e) {
                    m = {};
                    e.invites.forEach((function(e) {
                        m[e.code] = f.Z.createFromServer(e)
                    }));
                    var n;
                    _ = null !== (n = i()(u()(a()(Object.values(m), "createdAt")))) && void 0 !== n ? n : null;
                    T = !1
                },
                INSTANT_INVITE_CLEAR: function(e) {
                    delete I[e.channelId]
                }
            })
        },
        77643: (e, n, t) => {
            t.d(n, {
                tR: () => d,
                nG: () => p,
                ml: () => h,
                bp: () => y,
                Wc: () => E,
                Ye: () => b
            });
            var r = t(567403),
                i = t(563367),
                o = t(473903),
                u = t(652591),
                l = t(2590),
                a = t(165586),
                c = t(203600),
                s = t(36256),
                f = t(473708);

            function d(e) {
                if (null != e) {
                    var n = e.maxResolution.type === s.uA.SOURCE ? a.LY.RESOLUTION_SOURCE : e.maxResolution.height,
                        t = (0, a.aW)(n);
                    return (0, a.L9)(e.maxFrameRate) !== a.ws.FPS_5 && null == a.ND.find((function(e) {
                        return e.resolution === t && e.fps !== a.ws.FPS_5 && !v(e)
                    }))
                }
            }

            function p(e) {
                if (null != e) {
                    var n = (0, a.L9)(e.maxFrameRate);
                    return null == a.ND.find((function(e) {
                        return e.fps === n && !v(e)
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

            function b(e, n, t) {
                var s = function(e, n, t) {
                        return a.ND.find((function(r) {
                            return (null == r.preset || r.preset === e) && r.resolution === n && r.fps === t
                        }))
                    }(e, n, t),
                    f = o.default.getCurrentUser(),
                    d = i.Z.getGuildId(),
                    p = null != d ? r.Z.getGuild(d) : null;
                u.default.track(l.rMx.STREAM_SETTINGS_UPDATE, {
                    user_premium_tier: null == f ? void 0 : f.premiumType,
                    guild_premium_tier: null == p ? void 0 : p.premiumTier,
                    stream_quality_user_premium_tier: null != (null == s ? void 0 : s.quality) ? c.bg[s.quality] : null,
                    stream_quality_guild_premium_tier: null == s ? void 0 : s.guildPremiumTier,
                    stream_quality_preset: e,
                    stream_quality_resolution: n,
                    stream_quality_frame_rate: t
                })
            }
        },
        877815: (e, n, t) => {
            t.d(n, {
                Z: () => s
            });
            var r = t(131795),
                i = t.n(r),
                o = t(734155);

            function u(e, n) {
                if (!e.startsWith("discord:")) {
                    location.href = e;
                    return o.nextTick((function() {
                        return n(!0)
                    }))
                }
                var t = document.body;
                if (null == t) return o.nextTick((function() {
                    return n(!1)
                }));
                var r = document.createElement("iframe");
                t.appendChild(r);
                try {
                    null != r.contentWindow && (r.contentWindow.location.href = e);
                    o.nextTick((function() {
                        return n(!0)
                    }))
                } catch (e) {
                    "NS_ERROR_UNKNOWN_PROTOCOL" === e.name && o.nextTick((function() {
                        return n(!1)
                    }))
                }
                window.setTimeout((function() {
                    var e;
                    null !== (null !== (e = null == r ? void 0 : r.parentElement) && void 0 !== e ? e : null) && t.removeChild(r)
                }), 1e3)
            }

            function l(e, n) {
                var t = function() {
                        r = !0
                    },
                    r = !1;
                window.addEventListener("blur", t);
                location.href = e;
                setTimeout((function() {
                    window.removeEventListener("blur", t);
                    n(r)
                }), 1e3)
            }

            function a(e, n) {
                n(!1)
            }

            function c(e, n) {
                location.href = e;
                o.nextTick((function() {
                    return n(!0)
                }))
            }
            const s = {
                launch: "Android" === (null === (f = i().os) || void 0 === f ? void 0 : f.family) || "iOS" === (null === (d = i().os) || void 0 === d ? void 0 : d.family) ? c : "Gecko" === i().layout ? u : null != i().ua && -1 !== i().ua.indexOf("Valve Steam GameOverlay") ? a : l
            };
            var f, d
        }
    }
]);
//# sourceMappingURL=3a997cb761598e5cc707.js.map