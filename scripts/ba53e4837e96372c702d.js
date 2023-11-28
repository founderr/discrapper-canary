(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["95876"], {
        838446: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return l
                }
            });
            var n = i("37983");
            i("884691");
            var a = i("901582");

            function l(e, t) {
                return function(i) {
                    return (0, n.jsx)(a.default, {
                        page: t.page,
                        section: t.section,
                        object: t.object,
                        objectType: t.objectType,
                        children: (0, n.jsx)(e, {
                            ...i
                        })
                    })
                }
            }
        },
        846883: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return H
                }
            }), i("222007"), i("424973");
            var n = i("37983");
            i("884691");
            var a = i("446674"),
                l = i("77078"),
                d = i("260365"),
                u = i("823411"),
                s = i("997289"),
                o = i("685665"),
                c = i("442939"),
                r = i("662285"),
                f = i("782911"),
                I = i("629414"),
                p = i("53887"),
                _ = i("486150"),
                S = i("555759"),
                A = i("271938"),
                T = i("42203"),
                y = i("525065"),
                v = i("305961"),
                E = i("957255"),
                N = i("824563"),
                m = i("27618"),
                h = i("18494"),
                C = i("101125"),
                M = i("697218"),
                g = i("800762"),
                O = i("953998"),
                b = i("387111"),
                L = i("550766"),
                V = i("191225"),
                G = i("706508"),
                U = i("612696"),
                j = i("871388"),
                x = i("152311"),
                F = i("407908"),
                R = i("698372"),
                Y = i("141962"),
                D = i("954016"),
                P = i("49111"),
                J = i("450484"),
                w = i("782340");

            function H(e, t) {
                let {
                    analyticsLocations: H
                } = (0, o.default)(), k = (0, a.useStateFromStores)([M.default], () => M.default.getCurrentUser()), X = (0, a.useStateFromStores)([V.default], () => V.default.getSelfEmbeddedActivities()), z = (0, a.useStateFromStoresArray)([C.default], () => C.default.getActivities().filter(e => null != e.application_id && !(null == X ? void 0 : X.has(e.application_id)))), B = (0, a.useStateFromStoresArray)([N.default], () => null != t ? N.default.getActivities(t.id, null == e ? void 0 : e.getGuildId()) : [], [t, e]), K = (0, a.useStateFromStoresArray)([V.default], () => {
                    let i = (null == e ? void 0 : e.id) != null ? V.default.getEmbeddedActivitiesForChannel(e.id) : V.NO_ACTIVITIES;
                    return null != t ? i.filter(e => {
                        let {
                            connections: i
                        } = e;
                        return i.has(t.id)
                    }) : i
                }, [t, e]), Q = (0, R.default)(), q = (0, a.useStateFromStores)([E.default], () => null == e || e.isPrivate() || E.default.can(P.Permissions.SEND_MESSAGES, e), [e]), W = (0, a.useStateFromStoresArray)([O.default], () => [...B.map(e => null != e.application_id && O.default.getState(e.application_id, P.ActivityActionTypes.JOIN) === P.ActivityActionStates.LOADING), ...K.map(e => O.default.getState(e.application_id, P.ActivityActionTypes.JOIN) === P.ActivityActionStates.LOADING)], [B, K]), Z = (0, c.default)([...B.filter(e => (null == e ? void 0 : e.application_id) != null).map(e => e.application_id), ...K.map(e => e.application_id)]), $ = null == e ? void 0 : e.id, ee = (0, a.useStateFromStoresArray)([T.default, v.default, y.default, m.default, h.default, g.default, E.default], () => [...B.map(e => (0, U.default)({
                    user: null != t ? t : k,
                    activity: e,
                    application: Z.find(t => (null == t ? void 0 : t.id) === e.application_id),
                    channelId: $,
                    currentUser: k,
                    isEmbedded: (0, x.default)(e),
                    ChannelStore: T.default,
                    GuildStore: v.default,
                    GuildMemberCountStore: y.default,
                    RelationshipStore: m.default,
                    SelectedChannelStore: h.default,
                    VoiceStateStore: g.default,
                    PermissionStore: E.default
                })), ...K.map(e => (0, U.default)({
                    user: null != t ? t : k,
                    activity: e,
                    application: Z.find(t => (null == t ? void 0 : t.id) === e.application_id),
                    channelId: $,
                    currentUser: k,
                    isEmbedded: !0,
                    ChannelStore: T.default,
                    GuildStore: v.default,
                    GuildMemberCountStore: y.default,
                    RelationshipStore: m.default,
                    SelectedChannelStore: h.default,
                    VoiceStateStore: g.default,
                    PermissionStore: E.default
                }))], [B, Z, $, k, K, t]), et = (0, a.useStateFromStoresArray)([r.default, A.default], () => B.map(e => e.type === P.ActivityTypes.LISTENING && null != t ? (0, p.default)(r.default, A.default, t, e) : void 0), [t, B]), ei = (0, s.useAnalyticsContext)();
                if (!q) return null;
                let en = (i, n) => {
                        null != e ? d.default.sendActivityInvite({
                            type: i,
                            channelId: e.id,
                            activity: n,
                            location: P.AnalyticsLocations.CONTEXT_MENU
                        }) : null != t && d.default.sendActivityInviteUser({
                            type: i,
                            userId: t.id,
                            activity: n,
                            location: P.AnalyticsLocations.CONTEXT_MENU
                        })
                    },
                    ea = (a, d) => {
                        let u = T.default.getChannel(a),
                            s = null == u ? void 0 : v.default.getGuild(u.guild_id);
                        if (null != u && null != s) {
                            if (null != t) return L.sendEmbeddedActivityInviteUser({
                                channelId: u.id,
                                applicationId: d,
                                userId: t.id,
                                location: P.InstantInviteSources.CONTEXT_MENU
                            });
                            if (null != e && e.type === P.ChannelTypes.GUILD_VOICE) return (0, l.openModalLazy)(async () => {
                                let {
                                    default: t
                                } = await i.el("310688").then(i.bind(i, "310688"));
                                return i => (0, n.jsx)(t, {
                                    ...i,
                                    guild: s,
                                    channel: u,
                                    applicationId: d,
                                    analyticsLocation: e.type === P.ChannelTypes.GUILD_VOICE ? P.AnalyticsPages.GUILD_CHANNEL : P.AnalyticsPages.DM_CHANNEL,
                                    source: P.InstantInviteSources.ACTIVITY_INVITE
                                })
                            }, {
                                modalKey: "use-activity-items-embedded-invite-modal"
                            });
                            if ((null == e ? void 0 : e.id) != null) return L.sendEmbeddedActivityInvite({
                                activityChannelId: u.id,
                                invitedChannelId: e.id,
                                applicationId: d,
                                location: P.InstantInviteSources.CONTEXT_MENU
                            })
                        }
                    },
                    el = async e => {
                        var i;
                        await u.default.join({
                            userId: t.id,
                            sessionId: e.session_id,
                            applicationId: e.application_id,
                            channelId: h.default.getVoiceChannelId(),
                            messageId: null,
                            intent: D.ActivityIntent.PLAY,
                            embedded: (0, j.default)(e, P.ActivityFlags.EMBEDDED)
                        }), (0, F.default)({
                            type: P.AnalyticsGameOpenTypes.JOIN,
                            userId: t.id,
                            applicationId: e.application_id,
                            partyId: null === (i = e.party) || void 0 === i ? void 0 : i.id,
                            locationObject: ei.location,
                            analyticsLocations: H
                        })
                    }, ed = async t => {
                        await (0, G.default)({
                            activity: t,
                            currentEmbeddedApplication: Q,
                            activityChannelId: null == e ? void 0 : e.id,
                            locationObject: ei.location,
                            embeddedActivitiesManager: Y.default,
                            analyticsLocations: H
                        })
                    }, eu = [];
                return null == X || X.forEach(i => {
                    let a = (null == t ? void 0 : t.id) != null && i.connections.has(null == t ? void 0 : t.id),
                        d = E.default.can(P.Permissions.CREATE_INSTANT_INVITE, e);
                    null != i.activity_id && !a && d && eu.push((0, n.jsx)(l.MenuItem, {
                        id: "invite-to-join-embedded",
                        label: w.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_JOIN,
                        subtext: i.name,
                        action: () => {
                            ea(i.channelId, i.application_id)
                        }
                    }, "self-embedded-".concat(i.application_id)))
                }), z.forEach((e, t) => {
                    e.type === P.ActivityTypes.PLAYING && (0, j.default)(e, P.ActivityFlags.JOIN) ? eu.push((0, n.jsx)(l.MenuItem, {
                        id: "invite-to-join",
                        label: w.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_JOIN,
                        subtext: e.name,
                        action: () => en(P.ActivityActionTypes.JOIN, e)
                    }, "self".concat(t))) : e.type === P.ActivityTypes.LISTENING && (0, j.default)(e, P.ActivityFlags.SYNC) && eu.push((0, n.jsx)(l.MenuItem, {
                        id: "invite-to-listen",
                        label: w.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_LISTEN_ALONG,
                        subtext: e.name,
                        action: () => en(P.ActivityActionTypes.LISTEN, e)
                    }, "self".concat(t)))
                }), eu.length > 0 && eu.push((0, n.jsx)(l.MenuSeparator, {})), B.forEach((i, a) => {
                    if (i.type === P.ActivityTypes.PLAYING && (0, j.default)(i, P.ActivityFlags.JOIN) && null != i.session_id && null != i.application_id) {
                        if (ee[a]) {
                            let e = W[a];
                            eu.push((0, n.jsx)(l.MenuItem, {
                                id: "join",
                                label: e ? w.default.Messages.USER_ACTIVITY_JOINING : w.default.Messages.JOIN,
                                disabled: e,
                                hint: e ? (0, n.jsx)(l.Spinner, {
                                    type: l.Spinner.Type.PULSING_ELLIPSIS
                                }) : null,
                                subtext: i.name,
                                action: () => el(i)
                            }, a))
                        } else eu.push((0, n.jsx)(l.MenuItem, {
                            id: "ask-to-join",
                            label: w.default.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN,
                            subtext: i.name,
                            action: () => en(P.ActivityActionTypes.JOIN_REQUEST, i)
                        }, a))
                    } else if (i.type === P.ActivityTypes.LISTENING && (0, j.default)(i, P.ActivityFlags.SYNC) && null != et[a]) {
                        let d = et[a],
                            {
                                notPlayable: u,
                                playingSameTrack: s,
                                isCurrentUser: o,
                                syncingWithUser: c,
                                syncingWithParty: r
                            } = d,
                            p = o || u || s,
                            A = o || c || r;
                        eu.push((0, n.jsx)(l.MenuItem, {
                            id: "spotify-play-".concat(i.session_id),
                            action: () => (0, S.default)(d, J.SpotifyActionTypes.USER_ACTIVITY_PLAY),
                            label: (0, f.default)(d, J.SpotifyActionTypes.USER_ACTIVITY_PLAY),
                            subtext: p ? (0, I.default)(d, J.SpotifyActionTypes.USER_ACTIVITY_PLAY, null != e ? b.default.getNickname(e.guild_id, e.id, t) : void 0) : void 0,
                            disabled: p
                        }, "spotify-play-".concat(i.session_id)), (0, n.jsx)(l.MenuItem, {
                            id: "spotify-sync-".concat(i.session_id),
                            action: () => (0, _.default)(d, J.SpotifyActionTypes.USER_ACTIVITY_SYNC),
                            label: w.default.Messages.USER_ACTIVITY_LISTEN_ALONG,
                            subtext: A ? (0, I.default)(d, J.SpotifyActionTypes.USER_ACTIVITY_SYNC, null != e ? b.default.getNickname(e.guild_id, e.id, t) : void 0) : void 0,
                            disabled: A
                        }, "spotify-sync-".concat(i.session_id)))
                    }
                }), K.forEach((e, t) => {
                    var i;
                    let a = e.connections.has(null !== (i = null == k ? void 0 : k.id) && void 0 !== i ? i : ""),
                        d = t + B.length,
                        u = W[d] || a,
                        s = w.default.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY;
                    a ? s = w.default.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF : W[d] && (s = w.default.Messages.USER_ACTIVITY_JOINING), ee[d] && eu.push((0, n.jsx)(l.MenuItem, {
                        id: "embedded-activity-join-".concat(e.application_id),
                        label: s,
                        disabled: u,
                        hint: W[d] ? (0, n.jsx)(l.Spinner, {
                            type: l.Spinner.Type.PULSING_ELLIPSIS
                        }) : null,
                        subtext: e.name,
                        action: () => ed(e)
                    }, "embedded-activity-".concat(e.application_id)))
                }), eu
            }
        },
        715243: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return o
                }
            });
            var n = i("37983");
            i("884691");
            var a = i("446674"),
                l = i("77078"),
                d = i("957255"),
                u = i("49111"),
                s = i("782340");

            function o(e, t) {
                let o = (0, a.useStateFromStores)([d.default], () => d.default.can(u.Permissions.MANAGE_CHANNELS, e), [e]);
                return __OVERLAY__ || !o ? null : (0, n.jsx)(l.MenuItem, {
                    id: "clone-channel",
                    label: s.default.Messages.CLONE_CHANNEL,
                    action: () => (0, l.openModalLazy)(async () => {
                        let {
                            default: a
                        } = await i.el("581354").then(i.bind(i, "581354"));
                        return i => (0, n.jsx)(a, {
                            ...i,
                            channelType: e.type,
                            guildId: t.id,
                            categoryId: e.parent_id,
                            cloneChannelId: e.id
                        })
                    })
                })
            }
        },
        878526: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return l
                }
            });
            var n = i("58622"),
                a = i("49111");

            function l(e, t, i) {
                return (0, n.default)({
                    guild: t,
                    channel: e,
                    stageInstance: i,
                    source: a.InstantInviteSources.CONTEXT_MENU
                })
            }
        },
        972701: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return I
                }
            });
            var n = i("37983");
            i("884691");
            var a = i("446674"),
                l = i("77078"),
                d = i("923959"),
                u = i("379881"),
                s = i("200008"),
                o = i("498139"),
                c = i("49111"),
                r = i("782340");

            function f(e, t) {
                return e.type === c.ChannelTypes.GROUP_DM ? t ? r.default.Messages.UNFAVORITE_GDM : r.default.Messages.FAVORITE_GDM : e.type === c.ChannelTypes.DM ? t ? r.default.Messages.UNFAVORITE_DM : r.default.Messages.FAVORITE_DM : t ? r.default.Messages.UNFAVORITE_CHANNEL : r.default.Messages.FAVORITE_CHANNEL
            }

            function I(e) {
                var t;
                let i = (0, a.useStateFromStores)([u.default], () => u.default.isFavorite(e.id)),
                    r = function(e) {
                        let t = (0, a.useStateFromStores)([d.default], () => d.default.getChannels(c.FAVORITES))[c.ChannelTypes.GUILD_CATEGORY].filter(e => "null" !== e.channel.id),
                            {
                                favoritesEnabled: i
                            } = (0, o.useFavoritesServerExperiment)("58e21a_1");
                        if (!i) return null;

                        function u(t) {
                            (0, s.addFavoriteChannel)(e.id, t)
                        }
                        return 0 === t.length ? (0, n.jsx)(l.MenuItem, {
                            id: "favorite-channel",
                            label: f(e, !1),
                            action: () => u(null)
                        }) : (0, n.jsx)(l.MenuItem, {
                            id: "favorite-channel",
                            label: f(e, !1),
                            action: () => u(null),
                            children: t.map(e => (0, n.jsx)(l.MenuItem, {
                                id: "favorite-".concat(e.channel.id),
                                label: e.channel.name,
                                action: () => u(e.channel.id)
                            }, e.channel.id))
                        })
                    }(e);
                let I = (t = e, (0, n.jsx)(l.MenuItem, {
                    id: "favorite-channel",
                    label: f(t, !0),
                    action: function() {
                        (0, s.removeFavoriteChannel)(t.id)
                    }
                }));
                return __OVERLAY__ ? null : i ? I : r
            }
        },
        41205: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return c
                }
            });
            var n = i("37983");
            i("884691");
            var a = i("446674"),
                l = i("77078"),
                d = i("393414"),
                u = i("162771"),
                s = i("49111"),
                o = i("782340");

            function c(e) {
                let t = (0, a.useStateFromStores)([u.default], () => u.default.getGuildId());
                return __OVERLAY__ || t !== s.FAVORITES ? null : (0, n.jsx)(l.MenuItem, {
                    id: "go-to-original-guild",
                    label: o.default.Messages.FAVORITES_GO_TO_ORIGINAL_GUILD,
                    action: function() {
                        (0, d.transitionToGuild)(e.guild_id, e.id)
                    }
                })
            }
        },
        58622: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return f
                }
            });
            var n = i("37983");
            i("884691");
            var a = i("446674"),
                l = i("77078"),
                d = i("242757"),
                u = i("923959"),
                s = i("957255"),
                o = i("76539"),
                c = i("49111"),
                r = i("782340");

            function f(e) {
                let {
                    source: t,
                    guild: i,
                    channel: n,
                    stageInstance: l
                } = e, o = (0, a.useStateFromStores)([u.default, s.default], () => {
                    var e;
                    let t = u.default.getChannels(i.id);
                    return null === (e = t[0, u.GUILD_SELECTABLE_CHANNELS_KEY].find(e => s.default.can(c.Permissions.CREATE_INSTANT_INVITE, e.channel))) || void 0 === e ? void 0 : e.channel
                }), r = (0, a.useStateFromStores)([s.default], () => (0, d.canViewInviteModal)(s.default, i, n, l)), f = I(t, i, r && null != n ? n : o), _ = p(t);
                return null == n && t === c.InstantInviteSources.GUILD_CONTEXT_MENU ? null : r || null != o ? f : _
            }
            let I = (e, t, a) => (0, n.jsx)(l.MenuItem, {
                    id: "invite-people",
                    label: r.default.Messages.INVITE_PEOPLE,
                    color: "brand",
                    icon: e === c.InstantInviteSources.GUILD_HEADER ? o.default : void 0,
                    action: () => (0, l.openModalLazy)(async () => {
                        let {
                            default: l
                        } = await i.el("310688").then(i.bind(i, "310688"));
                        return i => (0, n.jsx)(l, {
                            ...i,
                            guild: t,
                            channel: a,
                            source: e
                        })
                    })
                }),
                p = e => (0, n.jsx)(l.MenuItem, {
                    id: "invite-people",
                    label: r.default.Messages.INVITE_PEOPLE,
                    color: "brand",
                    icon: e === c.InstantInviteSources.GUILD_HEADER ? o.default : void 0,
                    action: () => (0, l.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await i.el("973132").then(i.bind(i, "973132"));
                        return t => (0, n.jsx)(e, {
                            ...t
                        })
                    })
                })
        }
    }
]);