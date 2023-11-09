(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["24020"], {
        820542: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                categoryCollapse: function() {
                    return i
                },
                categoryExpand: function() {
                    return l
                },
                categoryCollapseAll: function() {
                    return u
                },
                categoryExpandAll: function() {
                    return d
                }
            });
            var a = n("913144");

            function i(e) {
                a.default.dispatch({
                    type: "CATEGORY_COLLAPSE",
                    id: e
                })
            }

            function l(e) {
                a.default.dispatch({
                    type: "CATEGORY_EXPAND",
                    id: e
                })
            }

            function u(e) {
                a.default.dispatch({
                    type: "CATEGORY_COLLAPSE_ALL",
                    guildId: e
                })
            }

            function d(e) {
                a.default.dispatch({
                    type: "CATEGORY_EXPAND_ALL",
                    guildId: e
                })
            }
        },
        838446: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("901582");

            function l(e, t) {
                return function(n) {
                    return (0, a.jsx)(i.default, {
                        page: t.page,
                        section: t.section,
                        object: t.object,
                        objectType: t.objectType,
                        children: (0, a.jsx)(e, {
                            ...n
                        })
                    })
                }
            }
        },
        158534: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("685665");

            function l(e, t) {
                return function(n) {
                    let {
                        AnalyticsLocationProvider: l
                    } = (0, i.default)(t);
                    return (0, a.jsx)(l, {
                        children: (0, a.jsx)(e, {
                            ...n
                        })
                    })
                }
            }
        },
        715072: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UserPlusIcon: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: d = "",
                    ...s
                } = e;
                return (0, a.jsxs)("svg", {
                    ...(0, l.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, a.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
                        className: d
                    }), (0, a.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M16.828 12.93c.259-.271.259-.746-.077-.915A9.493 9.493 0 0 0 12.467 11h-.934A9.533 9.533 0 0 0 2 20.533C2 21.343 2.657 22 3.467 22h.22c.24 0 .445-.17.504-.403.285-1.113.84-2.17 1.32-2.91.134-.208.43-.094.405.154l-.261 2.61a.5.5 0 0 0 .497.549h7.64c.123 0 .17-.31.06-.363C12.819 21.14 12 20.224 12 19a3 3 0 0 1 3-3h.5a.5.5 0 0 0 .5-.5V15c0-.802.315-1.53.828-2.07ZM12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
                        className: d
                    })]
                })
            }
        },
        846883: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return J
                }
            }), n("222007"), n("424973");
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                u = n("260365"),
                d = n("823411"),
                s = n("997289"),
                r = n("685665"),
                o = n("442939"),
                c = n("662285"),
                f = n("782911"),
                I = n("629414"),
                _ = n("53887"),
                E = n("486150"),
                A = n("555759"),
                S = n("271938"),
                p = n("42203"),
                T = n("525065"),
                N = n("305961"),
                g = n("957255"),
                v = n("824563"),
                h = n("27618"),
                C = n("18494"),
                y = n("101125"),
                M = n("697218"),
                L = n("800762"),
                m = n("953998"),
                O = n("387111"),
                G = n("550766"),
                U = n("191225"),
                b = n("706508"),
                R = n("612696"),
                F = n("871388"),
                V = n("152311"),
                x = n("407908"),
                j = n("698372"),
                H = n("141962"),
                D = n("954016"),
                P = n("49111"),
                Y = n("450484"),
                w = n("782340");

            function J(e, t) {
                let {
                    analyticsLocations: J
                } = (0, r.default)(), k = (0, i.useStateFromStores)([M.default], () => M.default.getCurrentUser()), X = (0, i.useStateFromStores)([U.default], () => U.default.getSelfEmbeddedActivities()), B = (0, i.useStateFromStoresArray)([y.default], () => y.default.getActivities().filter(e => null != e.application_id && !(null == X ? void 0 : X.has(e.application_id)))), Z = (0, i.useStateFromStoresArray)([v.default], () => null != t ? v.default.getActivities(t.id, null == e ? void 0 : e.getGuildId()) : [], [t, e]), z = (0, i.useStateFromStoresArray)([U.default], () => {
                    let n = (null == e ? void 0 : e.id) != null ? U.default.getEmbeddedActivitiesForChannel(e.id) : U.NO_ACTIVITIES;
                    return null != t ? n.filter(e => {
                        let {
                            connections: n
                        } = e;
                        return n.has(t.id)
                    }) : n
                }, [t, e]), K = (0, j.default)(), W = (0, i.useStateFromStores)([g.default], () => null == e || e.isPrivate() || g.default.can(P.Permissions.SEND_MESSAGES, e), [e]), Q = (0, i.useStateFromStoresArray)([m.default], () => [...Z.map(e => null != e.application_id && m.default.getState(e.application_id, P.ActivityActionTypes.JOIN) === P.ActivityActionStates.LOADING), ...z.map(e => m.default.getState(e.application_id, P.ActivityActionTypes.JOIN) === P.ActivityActionStates.LOADING)], [Z, z]), q = (0, o.default)([...Z.filter(e => (null == e ? void 0 : e.application_id) != null).map(e => e.application_id), ...z.map(e => e.application_id)]), $ = null == e ? void 0 : e.id, ee = (0, i.useStateFromStoresArray)([p.default, N.default, T.default, h.default, C.default, L.default, g.default], () => [...Z.map(e => (0, R.default)({
                    user: null != t ? t : k,
                    activity: e,
                    application: q.find(t => (null == t ? void 0 : t.id) === e.application_id),
                    channelId: $,
                    currentUser: k,
                    isEmbedded: (0, V.default)(e),
                    ChannelStore: p.default,
                    GuildStore: N.default,
                    GuildMemberCountStore: T.default,
                    RelationshipStore: h.default,
                    SelectedChannelStore: C.default,
                    VoiceStateStore: L.default,
                    PermissionStore: g.default
                })), ...z.map(e => (0, R.default)({
                    user: null != t ? t : k,
                    activity: e,
                    application: q.find(t => (null == t ? void 0 : t.id) === e.application_id),
                    channelId: $,
                    currentUser: k,
                    isEmbedded: !0,
                    ChannelStore: p.default,
                    GuildStore: N.default,
                    GuildMemberCountStore: T.default,
                    RelationshipStore: h.default,
                    SelectedChannelStore: C.default,
                    VoiceStateStore: L.default,
                    PermissionStore: g.default
                }))], [Z, q, $, k, z, t]), et = (0, i.useStateFromStoresArray)([c.default, S.default], () => Z.map(e => e.type === P.ActivityTypes.LISTENING && null != t ? (0, _.default)(c.default, S.default, t, e) : void 0), [t, Z]), en = (0, s.useAnalyticsContext)();
                if (!W) return null;
                let ea = (n, a) => {
                        null != e ? u.default.sendActivityInvite({
                            type: n,
                            channelId: e.id,
                            activity: a,
                            location: P.AnalyticsLocations.CONTEXT_MENU
                        }) : null != t && u.default.sendActivityInviteUser({
                            type: n,
                            userId: t.id,
                            activity: a,
                            location: P.AnalyticsLocations.CONTEXT_MENU
                        })
                    },
                    ei = (i, u) => {
                        let d = p.default.getChannel(i),
                            s = null == d ? void 0 : N.default.getGuild(d.guild_id);
                        if (null != d && null != s) {
                            if (null != t) return G.sendEmbeddedActivityInviteUser({
                                channelId: d.id,
                                applicationId: u,
                                userId: t.id,
                                location: P.InstantInviteSources.CONTEXT_MENU
                            });
                            if (null != e && e.type === P.ChannelTypes.GUILD_VOICE) return (0, l.openModalLazy)(async () => {
                                let {
                                    default: t
                                } = await n.el("310688").then(n.bind(n, "310688"));
                                return n => (0, a.jsx)(t, {
                                    ...n,
                                    guild: s,
                                    channel: d,
                                    applicationId: u,
                                    analyticsLocation: e.type === P.ChannelTypes.GUILD_VOICE ? P.AnalyticsPages.GUILD_CHANNEL : P.AnalyticsPages.DM_CHANNEL,
                                    source: P.InstantInviteSources.ACTIVITY_INVITE
                                })
                            }, {
                                modalKey: "use-activity-items-embedded-invite-modal"
                            });
                            if ((null == e ? void 0 : e.id) != null) return G.sendEmbeddedActivityInvite({
                                activityChannelId: d.id,
                                invitedChannelId: e.id,
                                applicationId: u,
                                location: P.InstantInviteSources.CONTEXT_MENU
                            })
                        }
                    },
                    el = async e => {
                        var n;
                        await d.default.join({
                            userId: t.id,
                            sessionId: e.session_id,
                            applicationId: e.application_id,
                            channelId: C.default.getVoiceChannelId(),
                            messageId: null,
                            intent: D.ActivityIntent.PLAY,
                            embedded: (0, F.default)(e, P.ActivityFlags.EMBEDDED)
                        }), (0, x.default)({
                            type: P.AnalyticsGameOpenTypes.JOIN,
                            userId: t.id,
                            applicationId: e.application_id,
                            partyId: null === (n = e.party) || void 0 === n ? void 0 : n.id,
                            locationObject: en.location,
                            analyticsLocations: J
                        })
                    }, eu = async t => {
                        await (0, b.default)({
                            activity: t,
                            currentEmbeddedApplication: K,
                            activityChannelId: null == e ? void 0 : e.id,
                            locationObject: en.location,
                            embeddedActivitiesManager: H.default,
                            analyticsLocations: J
                        })
                    }, ed = [];
                return null == X || X.forEach(n => {
                    let i = (null == t ? void 0 : t.id) != null && n.connections.has(null == t ? void 0 : t.id),
                        u = g.default.can(P.Permissions.CREATE_INSTANT_INVITE, e);
                    null != n.activity_id && !i && u && ed.push((0, a.jsx)(l.MenuItem, {
                        id: "invite-to-join-embedded",
                        label: w.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_JOIN,
                        subtext: n.name,
                        action: () => {
                            ei(n.channelId, n.application_id)
                        }
                    }, "self-embedded-".concat(n.application_id)))
                }), B.forEach((e, t) => {
                    e.type === P.ActivityTypes.PLAYING && (0, F.default)(e, P.ActivityFlags.JOIN) ? ed.push((0, a.jsx)(l.MenuItem, {
                        id: "invite-to-join",
                        label: w.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_JOIN,
                        subtext: e.name,
                        action: () => ea(P.ActivityActionTypes.JOIN, e)
                    }, "self".concat(t))) : e.type === P.ActivityTypes.LISTENING && (0, F.default)(e, P.ActivityFlags.SYNC) && ed.push((0, a.jsx)(l.MenuItem, {
                        id: "invite-to-listen",
                        label: w.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_LISTEN_ALONG,
                        subtext: e.name,
                        action: () => ea(P.ActivityActionTypes.LISTEN, e)
                    }, "self".concat(t)))
                }), ed.length > 0 && ed.push((0, a.jsx)(l.MenuSeparator, {})), Z.forEach((n, i) => {
                    if (n.type === P.ActivityTypes.PLAYING && (0, F.default)(n, P.ActivityFlags.JOIN) && null != n.session_id && null != n.application_id) {
                        if (ee[i]) {
                            let e = Q[i];
                            ed.push((0, a.jsx)(l.MenuItem, {
                                id: "join",
                                label: e ? w.default.Messages.USER_ACTIVITY_JOINING : w.default.Messages.JOIN,
                                disabled: e,
                                hint: e ? (0, a.jsx)(l.Spinner, {
                                    type: l.Spinner.Type.PULSING_ELLIPSIS
                                }) : null,
                                subtext: n.name,
                                action: () => el(n)
                            }, i))
                        } else ed.push((0, a.jsx)(l.MenuItem, {
                            id: "ask-to-join",
                            label: w.default.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN,
                            subtext: n.name,
                            action: () => ea(P.ActivityActionTypes.JOIN_REQUEST, n)
                        }, i))
                    } else if (n.type === P.ActivityTypes.LISTENING && (0, F.default)(n, P.ActivityFlags.SYNC) && null != et[i]) {
                        let u = et[i],
                            {
                                notPlayable: d,
                                playingSameTrack: s,
                                isCurrentUser: r,
                                syncingWithUser: o,
                                syncingWithParty: c
                            } = u,
                            _ = r || d || s,
                            S = r || o || c;
                        ed.push((0, a.jsx)(l.MenuItem, {
                            id: "spotify-play-".concat(n.session_id),
                            action: () => (0, A.default)(u, Y.SpotifyActionTypes.USER_ACTIVITY_PLAY),
                            label: (0, f.default)(u, Y.SpotifyActionTypes.USER_ACTIVITY_PLAY),
                            subtext: _ ? (0, I.default)(u, Y.SpotifyActionTypes.USER_ACTIVITY_PLAY, null != e ? O.default.getNickname(e.guild_id, e.id, t) : void 0) : void 0,
                            disabled: _
                        }, "spotify-play-".concat(n.session_id)), (0, a.jsx)(l.MenuItem, {
                            id: "spotify-sync-".concat(n.session_id),
                            action: () => (0, E.default)(u, Y.SpotifyActionTypes.USER_ACTIVITY_SYNC),
                            label: w.default.Messages.USER_ACTIVITY_LISTEN_ALONG,
                            subtext: S ? (0, I.default)(u, Y.SpotifyActionTypes.USER_ACTIVITY_SYNC, null != e ? O.default.getNickname(e.guild_id, e.id, t) : void 0) : void 0,
                            disabled: S
                        }, "spotify-sync-".concat(n.session_id)))
                    }
                }), z.forEach((e, t) => {
                    var n;
                    let i = e.connections.has(null !== (n = null == k ? void 0 : k.id) && void 0 !== n ? n : ""),
                        u = t + Z.length,
                        d = Q[u] || i,
                        s = w.default.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY;
                    i ? s = w.default.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF : Q[u] && (s = w.default.Messages.USER_ACTIVITY_JOINING), ee[u] && ed.push((0, a.jsx)(l.MenuItem, {
                        id: "embedded-activity-join-".concat(e.application_id),
                        label: s,
                        disabled: d,
                        hint: Q[u] ? (0, a.jsx)(l.Spinner, {
                            type: l.Spinner.Type.PULSING_ELLIPSIS
                        }) : null,
                        subtext: e.name,
                        action: () => eu(e)
                    }, "embedded-activity-".concat(e.application_id)))
                }), ed
            }
        },
        715243: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                u = n("957255"),
                d = n("49111"),
                s = n("782340");

            function r(e, t) {
                let r = (0, i.useStateFromStores)([u.default], () => u.default.can(d.Permissions.MANAGE_CHANNELS, e), [e]);
                return __OVERLAY__ || !r ? null : (0, a.jsx)(l.MenuItem, {
                    id: "clone-channel",
                    label: s.default.Messages.CLONE_CHANNEL,
                    action: () => (0, l.openModalLazy)(async () => {
                        let {
                            default: i
                        } = await n.el("581354").then(n.bind(n, "581354"));
                        return n => (0, a.jsx)(i, {
                            ...n,
                            channelType: e.type,
                            guildId: t.id,
                            categoryId: e.parent_id,
                            cloneChannelId: e.id
                        })
                    })
                })
            }
        },
        963150: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                u = n("957255"),
                d = n("49111"),
                s = n("782340");

            function r(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.type,
                    o = (0, i.useStateFromStores)([u.default], () => u.default.can(d.Permissions.MANAGE_CHANNELS, e), [e]);
                if (__OVERLAY__ || !o) return null;
                let c = () => {
                    (0, l.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("581354").then(n.bind(n, "581354"));
                        return n => (0, a.jsx)(t, {
                            ...n,
                            channelType: r,
                            guildId: e.guild_id,
                            categoryId: e.parent_id
                        })
                    })
                };
                switch (r) {
                    case d.ChannelTypes.GUILD_TEXT:
                        return (0, a.jsx)(l.MenuItem, {
                            id: "create-text-channel",
                            label: s.default.Messages.CREATE_TEXT_CHANNEL,
                            action: c
                        });
                    case d.ChannelTypes.GUILD_VOICE:
                        return (0, a.jsx)(l.MenuItem, {
                            id: "create-voice-channel",
                            label: s.default.Messages.CREATE_VOICE_CHANNEL,
                            action: c
                        });
                    default:
                        return null
                }
            }
        },
        47006: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                u = n("18054"),
                d = n("957255"),
                s = n("49111"),
                r = n("782340");

            function o(e) {
                let {
                    canManageChannels: t,
                    canManageRoles: n,
                    canManageWebhooks: o,
                    canAccessChannel: c
                } = (0, i.useStateFromStoresObject)([d.default], () => ({
                    canManageChannels: d.default.can(s.Permissions.MANAGE_CHANNELS, e),
                    canManageRoles: d.default.can(s.Permissions.MANAGE_ROLES, e),
                    canManageWebhooks: d.default.can(s.Permissions.MANAGE_WEBHOOKS, e),
                    canAccessChannel: d.default.can(e.accessPermissions, e)
                }), [e]);
                return !__OVERLAY__ && c && (t || n || o) ? (0, a.jsx)(l.MenuItem, {
                    id: "edit-channel",
                    label: e.type === s.ChannelTypes.GUILD_CATEGORY ? r.default.Messages.EDIT_CATEGORY : r.default.Messages.EDIT_CHANNEL,
                    action: () => u.default.open(e.id)
                }) : null
            }
        },
        878526: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("58622"),
                i = n("49111");

            function l(e, t, n) {
                return (0, a.default)({
                    guild: t,
                    channel: e,
                    stageInstance: n,
                    source: i.InstantInviteSources.CONTEXT_MENU
                })
            }
        },
        44141: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                u = n("267363"),
                d = n("680986"),
                s = n("689275"),
                r = n("755624"),
                o = n("233069"),
                c = n("245997"),
                f = n("660478"),
                I = n("49111"),
                _ = n("782340");

            function E(e) {
                let t = function(e) {
                    let t = (0, d.useUnreadThreadsCountForParent)(e.guild_id, e.id),
                        n = (0, i.useStateFromStores)([f.default, c.default, s.default, r.default], () => {
                            if (e.isForumPost()) return f.default.isForumPostUnread(e.id);
                            if (e.type !== I.ChannelTypes.GUILD_CATEGORY) return f.default.hasUnread(e.id);
                            {
                                let t = c.default.getCategories(e.getGuildId());
                                if (null == t[e.id]) return !1;
                                let n = t[e.id].some(e => {
                                    let {
                                        channel: t
                                    } = e;
                                    return (0, o.isReadableType)(t.type) && f.default.hasUnread(t.id)
                                });
                                if (n) return !0;
                                let a = new Set(t[e.id].map(e => e.channel.id)),
                                    i = s.default.getThreadsForGuild(e.guild_id);
                                for (let e in i)
                                    if (a.has(e)) {
                                        for (let t in i[e])
                                            if (r.default.hasJoined(t) && !r.default.isMuted(t) && f.default.hasUnread(t)) return !0
                                    } return !1
                            }
                        }, [e]);
                    return e.isForumLikeChannel() ? t > 0 : n
                }(e);
                return (0, a.jsx)(l.MenuItem, {
                    id: "mark-channel-read",
                    label: _.default.Messages.MARK_AS_READ,
                    action: function() {
                        (0, u.ackChannel)(e)
                    },
                    disabled: !t
                })
            }
        },
        339876: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                u = n("629220"),
                d = n("512395"),
                s = n("282109"),
                r = n("49111"),
                o = n("782340");

            function c(e) {
                let t = (0, d.useOptInEnabledForGuild)(e.guild_id),
                    n = (0, i.useStateFromStores)([s.default], () => s.default.isChannelOptedIn(e.guild_id, e.id)),
                    c = (0, i.useStateFromStores)([s.default], () => null != e.parent_id && s.default.isChannelOptedIn(e.guild_id, e.parent_id)),
                    f = (0, i.useStateFromStores)([s.default], () => s.default.isFavorite(e.guild_id, e.id)),
                    I = () => {
                        (0, u.setOptInChannel)(e.guild_id, e.id, !n, {
                            section: r.AnalyticsSections.CONTEXT_MENU
                        })
                    },
                    _ = () => {
                        null != e.parent_id && (0, u.setOptInChannel)(e.guild_id, e.parent_id, !1, {
                            section: r.AnalyticsSections.CONTEXT_MENU
                        })
                    };
                return !t || e.isThread() ? null : e.isCategory() ? (0, a.jsx)(l.MenuItem, {
                    id: "opt-into-category",
                    label: n ? o.default.Messages.CHANNEL_OPT_OUT : o.default.Messages.CHANNEL_OPT_IN,
                    action: () => I()
                }) : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(l.MenuItem, {
                        id: "opt-in-favorite-channel",
                        label: f ? o.default.Messages.REMOVE_FAVORITE : o.default.Messages.ADD_FAVORITE,
                        action: () => {
                            (0, u.setIsFavorite)(e.guild_id, e.id, !f, {
                                section: r.AnalyticsSections.CONTEXT_MENU
                            })
                        }
                    }), c ? (0, a.jsx)(l.MenuItem, {
                        id: "opt-out-category",
                        label: o.default.Messages.CHANNEL_OPT_OUT_PARENT_CATEGORY,
                        action: () => _()
                    }) : (0, a.jsx)(l.MenuItem, {
                        id: "opt-into-channel",
                        label: n ? o.default.Messages.CHANNEL_OPT_OUT : o.default.Messages.CHANNEL_OPT_IN,
                        action: () => I()
                    })]
                })
            }
        },
        809937: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                u = n("483226"),
                d = n("44574"),
                s = n("811400"),
                r = n("282109"),
                o = n("627869"),
                c = n("782340");

            function f(e) {
                let t = (0, s.useGuildUnreadSetting)(e),
                    n = (0, d.useGuildUnreadsExperiment)(),
                    f = (0, i.useStateFromStores)([r.default], () => r.default.isGuildUnreadSettingEnabled(e.guild_id)),
                    I = function(e) {
                        var t;
                        let n = (0, s.useGuildUnreadSetting)(e);
                        let i = (t = e, [{
                                setting: o.UserUnreadSettings.NULL,
                                label: null != t.parent_id ? c.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : c.default.Messages.FORM_LABEL_DEFAULT
                            }, {
                                setting: o.UserUnreadSettings.ALL_MESSAGES,
                                label: c.default.Messages.FORM_LABEL_ALL_MESSAGES
                            }, {
                                setting: o.UserUnreadSettings.MENTIONS_AND_HIGHLIGHTS,
                                label: c.default.Messages.HIGHLIGHTS_AND_MENTIONS
                            }]),
                            d = t => {
                                (0, u.setChannelUnreadSetting)(e.guild_id, e.id, t)
                            };
                        return (0, a.jsx)(a.Fragment, {
                            children: i.map(e => {
                                let {
                                    setting: t,
                                    label: i
                                } = e;
                                return (0, a.jsx)(l.MenuRadioItem, {
                                    group: "channel-unreads",
                                    id: "".concat(t),
                                    label: i,
                                    subtext: t === o.UserUnreadSettings.NULL ? c.default.Messages.HIGHLIGHTS_AND_MENTIONS : void 0,
                                    action: () => d(t),
                                    checked: t === n
                                }, t)
                            })
                        })
                    }(e);
                return n && f ? (0, a.jsx)(l.MenuItem, {
                    id: "channel-unreads",
                    label: c.default.Messages.UNREAD_SETTINGS,
                    subtext: t === o.UserUnreadSettings.ALL_MESSAGES ? c.default.Messages.FORM_LABEL_ALL_MESSAGES : c.default.Messages.HIGHLIGHTS_AND_MENTIONS,
                    children: I
                }) : null
            }
        },
        20209: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("446674"),
                i = n("162771"),
                l = n("49111");

            function u() {
                let e = (0, a.useStateFromStores)([i.default], () => i.default.getGuildId());
                return e === l.FAVORITES
            }
        },
        972701: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                u = n("923959"),
                d = n("379881"),
                s = n("200008"),
                r = n("498139"),
                o = n("49111"),
                c = n("782340");

            function f(e, t) {
                return e.type === o.ChannelTypes.GROUP_DM ? t ? c.default.Messages.UNFAVORITE_GDM : c.default.Messages.FAVORITE_GDM : e.type === o.ChannelTypes.DM ? t ? c.default.Messages.UNFAVORITE_DM : c.default.Messages.FAVORITE_DM : t ? c.default.Messages.UNFAVORITE_CHANNEL : c.default.Messages.FAVORITE_CHANNEL
            }

            function I(e) {
                var t;
                let n = (0, i.useStateFromStores)([d.default], () => d.default.isFavorite(e.id)),
                    c = function(e) {
                        let t = (0, i.useStateFromStores)([u.default], () => u.default.getChannels(o.FAVORITES))[o.ChannelTypes.GUILD_CATEGORY].filter(e => "null" !== e.channel.id),
                            {
                                favoritesEnabled: n
                            } = r.default.useExperiment({
                                location: "58e21a_1"
                            }, {
                                autoTrackExposure: !1
                            });
                        if (!n) return null;

                        function d(t) {
                            (0, s.addFavoriteChannel)(e.id, t)
                        }
                        return 0 === t.length ? (0, a.jsx)(l.MenuItem, {
                            id: "favorite-channel",
                            label: f(e, !1),
                            action: () => d(null)
                        }) : (0, a.jsx)(l.MenuItem, {
                            id: "favorite-channel",
                            label: f(e, !1),
                            action: () => d(null),
                            children: t.map(e => (0, a.jsx)(l.MenuItem, {
                                id: "favorite-".concat(e.channel.id),
                                label: e.channel.name,
                                action: () => d(e.channel.id)
                            }, e.channel.id))
                        })
                    }(e);
                let I = (t = e, (0, a.jsx)(l.MenuItem, {
                    id: "favorite-channel",
                    label: f(t, !0),
                    action: function() {
                        (0, s.removeFavoriteChannel)(t.id)
                    }
                }));
                return __OVERLAY__ ? null : n ? I : c
            }
        },
        390008: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                u = n("162771"),
                d = n("49111"),
                s = n("782340");

            function r(e) {
                let t = (0, i.useStateFromStores)([u.default], () => u.default.getGuildId());
                return __OVERLAY__ || t !== d.FAVORITES ? null : (0, a.jsx)(l.MenuItem, {
                    id: "set-channel-nickname",
                    label: s.default.Messages.CHANGE_NICKNAME,
                    action: function() {
                        (0, l.openModalLazy)(async () => {
                            let {
                                default: t
                            } = await n.el("353228").then(n.bind(n, "353228"));
                            return n => (0, a.jsx)(t, {
                                ...n,
                                channelId: e.id
                            })
                        })
                    }
                })
            }
        },
        41205: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                u = n("393414"),
                d = n("162771"),
                s = n("49111"),
                r = n("782340");

            function o(e) {
                let t = (0, i.useStateFromStores)([d.default], () => d.default.getGuildId());
                return __OVERLAY__ || t !== s.FAVORITES ? null : (0, a.jsx)(l.MenuItem, {
                    id: "go-to-original-guild",
                    label: r.default.Messages.FAVORITES_GO_TO_ORIGINAL_GUILD,
                    action: function() {
                        (0, u.transitionToGuild)(e.guild_id, e.id)
                    }
                })
            }
        },
        58622: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                u = n("242757"),
                d = n("923959"),
                s = n("957255"),
                r = n("76539"),
                o = n("49111"),
                c = n("782340");

            function f(e) {
                let {
                    source: t,
                    guild: n,
                    channel: a,
                    stageInstance: l
                } = e, r = (0, i.useStateFromStores)([d.default, s.default], () => {
                    var e;
                    let t = d.default.getChannels(n.id);
                    return null === (e = t[0, d.GUILD_SELECTABLE_CHANNELS_KEY].find(e => s.default.can(o.Permissions.CREATE_INSTANT_INVITE, e.channel))) || void 0 === e ? void 0 : e.channel
                }), c = (0, i.useStateFromStores)([s.default], () => (0, u.canViewInviteModal)(s.default, n, a, l)), f = I(t, n, c && null != a ? a : r), E = _(t);
                return null == a && t === o.InstantInviteSources.GUILD_CONTEXT_MENU ? null : c || null != r ? f : E
            }
            let I = (e, t, i) => (0, a.jsx)(l.MenuItem, {
                    id: "invite-people",
                    label: c.default.Messages.INVITE_PEOPLE,
                    color: "brand",
                    icon: e === o.InstantInviteSources.GUILD_HEADER ? r.default : void 0,
                    action: () => (0, l.openModalLazy)(async () => {
                        let {
                            default: l
                        } = await n.el("310688").then(n.bind(n, "310688"));
                        return n => (0, a.jsx)(l, {
                            ...n,
                            guild: t,
                            channel: i,
                            source: e
                        })
                    })
                }),
                _ = e => (0, a.jsx)(l.MenuItem, {
                    id: "invite-people",
                    label: c.default.Messages.INVITE_PEOPLE,
                    color: "brand",
                    icon: e === o.InstantInviteSources.GUILD_HEADER ? r.default : void 0,
                    action: () => (0, l.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await n.el("973132").then(n.bind(n, "973132"));
                        return t => (0, a.jsx)(e, {
                            ...t
                        })
                    })
                })
        },
        483226: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                setChannelUnreadSetting: function() {
                    return r
                },
                setGuildUnreadSetting: function() {
                    return o
                },
                setGuildUnreadsLastCleared: function() {
                    return c
                }
            });
            var a = n("913144"),
                i = n("519705"),
                l = n("282109"),
                u = n("568734"),
                d = n("627869"),
                s = n("397336");

            function r(e, t, n) {
                let a = l.default.getGuildChannelFlags(e, t);
                a = (0, u.setFlag)(a, s.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES, n === d.UserUnreadSettings.ALL_MESSAGES), a = (0, u.setFlag)(a, s.ChannelNotificationSettingsFlags.UNREADS_MENTIONS_AND_HIGHLIGHTS, n === d.UserUnreadSettings.MENTIONS_AND_HIGHLIGHTS), i.default.updateChannelOverrideSettings(e, t, {
                    flags: a
                })
            }

            function o(e, t) {
                let n = l.default.getGuildFlags(e);
                n = (0, u.setFlag)(n, s.GuildNotificationSettingsFlags.UNREADS_MENTIONS_AND_HIGHLIGHTS, t), n = (0, u.setFlag)(n, s.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES, !t), i.default.updateGuildNotificationSettings(e, {
                    flags: n
                })
            }

            function c(e) {
                a.default.dispatch({
                    type: "GUILD_UNREADS_SET_LAST_CLEARED",
                    guildId: e
                })
            }
        },
        242757: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canViewInviteModal: function() {
                    return i
                }
            });
            var a = n("49111");

            function i(e, t, n, i) {
                let l = null != n ? n : t,
                    u = null != l && e.can(a.Permissions.CREATE_INSTANT_INVITE, l);
                return u || null != t && null != t.vanityURLCode || (null == i ? void 0 : i.invite_code) != null
            }
        },
        76539: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("715072"),
                u = n("75196"),
                d = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: l,
                        ...d
                    } = e;
                    return 16 === t || 16 === n ? (0, a.jsxs)("svg", {
                        ...(0, u.default)(d),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        children: [(0, a.jsx)("path", {
                            className: l,
                            fill: i,
                            d: "M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"
                        }), (0, a.jsx)("path", {
                            className: l,
                            fill: i,
                            d: "M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z"
                        }), (0, a.jsx)("path", {
                            className: l,
                            fill: i,
                            d: "M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z"
                        })]
                    }) : (0, a.jsx)("svg", {
                        ...(0, u.default)(d),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, a.jsx)("path", {
                            className: l,
                            fill: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M21 3H24V5H21V8H19V5H16V3H19V0H21V3ZM10 12C12.205 12 14 10.205 14 8C14 5.795 12.205 4 10 4C7.795 4 6 5.795 6 8C6 10.205 7.795 12 10 12ZM10 13C5.289 13 2 15.467 2 19V20H18V19C18 15.467 14.711 13 10 13Z"
                        })
                    })
                }, l.UserPlusIcon)
        }
    }
]);