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
        715072: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                UserPlusIcon: function() {
                    return d
                }
            });
            var n = i("37983");
            i("884691");
            var a = i("669491"),
                l = i("75196");
            let d = e => {
                let {
                    width: t = 24,
                    height: i = 24,
                    color: d = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...s
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, l.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: i,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        d: "M19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
                        className: u
                    }), (0, n.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        d: "M16.828 12.93c.259-.271.259-.746-.077-.915A9.493 9.493 0 0 0 12.467 11h-.934A9.533 9.533 0 0 0 2 20.533C2 21.343 2.657 22 3.467 22h.22c.24 0 .445-.17.504-.403.285-1.113.84-2.17 1.32-2.91.134-.208.43-.094.405.154l-.261 2.61a.5.5 0 0 0 .497.549h7.64c.123 0 .17-.31.06-.363C12.819 21.14 12 20.224 12 19a3 3 0 0 1 3-3h.5a.5.5 0 0 0 .5-.5V15c0-.802.315-1.53.828-2.07ZM12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
                        className: u
                    })]
                })
            }
        },
        846883: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return J
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
                v = i("555759"),
                A = i("271938"),
                T = i("42203"),
                S = i("525065"),
                y = i("305961"),
                E = i("957255"),
                N = i("824563"),
                h = i("27618"),
                C = i("18494"),
                m = i("101125"),
                M = i("697218"),
                g = i("800762"),
                V = i("953998"),
                O = i("387111"),
                b = i("550766"),
                L = i("191225"),
                x = i("706508"),
                j = i("612696"),
                R = i("871388"),
                U = i("152311"),
                G = i("407908"),
                F = i("698372"),
                Y = i("141962"),
                D = i("954016"),
                P = i("49111"),
                H = i("450484"),
                w = i("782340");

            function J(e, t) {
                let {
                    analyticsLocations: J
                } = (0, o.default)(), Z = (0, a.useStateFromStores)([M.default], () => M.default.getCurrentUser()), k = (0, a.useStateFromStores)([L.default], () => L.default.getSelfEmbeddedActivities()), B = (0, a.useStateFromStoresArray)([m.default], () => m.default.getActivities().filter(e => null != e.application_id && !(null == k ? void 0 : k.has(e.application_id)))), X = (0, a.useStateFromStoresArray)([N.default], () => null != t ? N.default.getActivities(t.id, null == e ? void 0 : e.getGuildId()) : [], [t, e]), z = (0, a.useStateFromStoresArray)([L.default], () => {
                    let i = (null == e ? void 0 : e.id) != null ? L.default.getEmbeddedActivitiesForChannel(e.id) : L.NO_ACTIVITIES;
                    return null != t ? i.filter(e => {
                        let {
                            connections: i
                        } = e;
                        return i.has(t.id)
                    }) : i
                }, [t, e]), K = (0, F.default)(), Q = (0, a.useStateFromStores)([E.default], () => null == e || e.isPrivate() || E.default.can(P.Permissions.SEND_MESSAGES, e), [e]), q = (0, a.useStateFromStoresArray)([V.default], () => [...X.map(e => null != e.application_id && V.default.getState(e.application_id, P.ActivityActionTypes.JOIN) === P.ActivityActionStates.LOADING), ...z.map(e => V.default.getState(e.application_id, P.ActivityActionTypes.JOIN) === P.ActivityActionStates.LOADING)], [X, z]), W = (0, c.default)([...X.filter(e => (null == e ? void 0 : e.application_id) != null).map(e => e.application_id), ...z.map(e => e.application_id)]), $ = null == e ? void 0 : e.id, ee = (0, a.useStateFromStoresArray)([T.default, y.default, S.default, h.default, C.default, g.default, E.default], () => [...X.map(e => (0, j.default)({
                    user: null != t ? t : Z,
                    activity: e,
                    application: W.find(t => (null == t ? void 0 : t.id) === e.application_id),
                    channelId: $,
                    currentUser: Z,
                    isEmbedded: (0, U.default)(e),
                    ChannelStore: T.default,
                    GuildStore: y.default,
                    GuildMemberCountStore: S.default,
                    RelationshipStore: h.default,
                    SelectedChannelStore: C.default,
                    VoiceStateStore: g.default,
                    PermissionStore: E.default
                })), ...z.map(e => (0, j.default)({
                    user: null != t ? t : Z,
                    activity: e,
                    application: W.find(t => (null == t ? void 0 : t.id) === e.application_id),
                    channelId: $,
                    currentUser: Z,
                    isEmbedded: !0,
                    ChannelStore: T.default,
                    GuildStore: y.default,
                    GuildMemberCountStore: S.default,
                    RelationshipStore: h.default,
                    SelectedChannelStore: C.default,
                    VoiceStateStore: g.default,
                    PermissionStore: E.default
                }))], [X, W, $, Z, z, t]), et = (0, a.useStateFromStoresArray)([r.default, A.default], () => X.map(e => e.type === P.ActivityTypes.LISTENING && null != t ? (0, p.default)(r.default, A.default, t, e) : void 0), [t, X]), ei = (0, s.useAnalyticsContext)();
                if (!Q) return null;
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
                            s = null == u ? void 0 : y.default.getGuild(u.guild_id);
                        if (null != u && null != s) {
                            if (null != t) return b.sendEmbeddedActivityInviteUser({
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
                            if ((null == e ? void 0 : e.id) != null) return b.sendEmbeddedActivityInvite({
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
                            channelId: C.default.getVoiceChannelId(),
                            messageId: null,
                            intent: D.ActivityIntent.PLAY,
                            embedded: (0, R.default)(e, P.ActivityFlags.EMBEDDED)
                        }), (0, G.default)({
                            type: P.AnalyticsGameOpenTypes.JOIN,
                            userId: t.id,
                            applicationId: e.application_id,
                            partyId: null === (i = e.party) || void 0 === i ? void 0 : i.id,
                            locationObject: ei.location,
                            analyticsLocations: J
                        })
                    }, ed = async t => {
                        await (0, x.default)({
                            activity: t,
                            currentEmbeddedApplication: K,
                            activityChannelId: null == e ? void 0 : e.id,
                            locationObject: ei.location,
                            embeddedActivitiesManager: Y.default,
                            analyticsLocations: J
                        })
                    }, eu = [];
                return null == k || k.forEach(i => {
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
                }), B.forEach((e, t) => {
                    e.type === P.ActivityTypes.PLAYING && (0, R.default)(e, P.ActivityFlags.JOIN) ? eu.push((0, n.jsx)(l.MenuItem, {
                        id: "invite-to-join",
                        label: w.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_JOIN,
                        subtext: e.name,
                        action: () => en(P.ActivityActionTypes.JOIN, e)
                    }, "self".concat(t))) : e.type === P.ActivityTypes.LISTENING && (0, R.default)(e, P.ActivityFlags.SYNC) && eu.push((0, n.jsx)(l.MenuItem, {
                        id: "invite-to-listen",
                        label: w.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_LISTEN_ALONG,
                        subtext: e.name,
                        action: () => en(P.ActivityActionTypes.LISTEN, e)
                    }, "self".concat(t)))
                }), eu.length > 0 && eu.push((0, n.jsx)(l.MenuSeparator, {})), X.forEach((i, a) => {
                    if (i.type === P.ActivityTypes.PLAYING && (0, R.default)(i, P.ActivityFlags.JOIN) && null != i.session_id && null != i.application_id) {
                        if (ee[a]) {
                            let e = q[a];
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
                    } else if (i.type === P.ActivityTypes.LISTENING && (0, R.default)(i, P.ActivityFlags.SYNC) && null != et[a]) {
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
                            action: () => (0, v.default)(d, H.SpotifyActionTypes.USER_ACTIVITY_PLAY),
                            label: (0, f.default)(d, H.SpotifyActionTypes.USER_ACTIVITY_PLAY),
                            subtext: p ? (0, I.default)(d, H.SpotifyActionTypes.USER_ACTIVITY_PLAY, null != e ? O.default.getNickname(e.guild_id, e.id, t) : void 0) : void 0,
                            disabled: p
                        }, "spotify-play-".concat(i.session_id)), (0, n.jsx)(l.MenuItem, {
                            id: "spotify-sync-".concat(i.session_id),
                            action: () => (0, _.default)(d, H.SpotifyActionTypes.USER_ACTIVITY_SYNC),
                            label: w.default.Messages.USER_ACTIVITY_LISTEN_ALONG,
                            subtext: A ? (0, I.default)(d, H.SpotifyActionTypes.USER_ACTIVITY_SYNC, null != e ? O.default.getNickname(e.guild_id, e.id, t) : void 0) : void 0,
                            disabled: A
                        }, "spotify-sync-".concat(i.session_id)))
                    }
                }), z.forEach((e, t) => {
                    var i;
                    let a = e.connections.has(null !== (i = null == Z ? void 0 : Z.id) && void 0 !== i ? i : ""),
                        d = t + X.length,
                        u = q[d] || a,
                        s = w.default.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY;
                    a ? s = w.default.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF : q[d] && (s = w.default.Messages.USER_ACTIVITY_JOINING), ee[d] && eu.push((0, n.jsx)(l.MenuItem, {
                        id: "embedded-activity-join-".concat(e.application_id),
                        label: s,
                        disabled: u,
                        hint: q[d] ? (0, n.jsx)(l.Spinner, {
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
                            } = o.default.useExperiment({
                                location: "58e21a_1"
                            }, {
                                autoTrackExposure: !1
                            });
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
        },
        242757: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                canViewInviteModal: function() {
                    return a
                }
            });
            var n = i("49111");

            function a(e, t, i, a) {
                let l = null != i ? i : t,
                    d = null != l && e.can(n.Permissions.CREATE_INSTANT_INVITE, l);
                return d || null != t && null != t.vanityURLCode || (null == a ? void 0 : a.invite_code) != null
            }
        },
        76539: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return u
                }
            });
            var n = i("37983");
            i("884691");
            var a = i("469563"),
                l = i("715072"),
                d = i("75196"),
                u = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: i = 24,
                        color: a = "currentColor",
                        foreground: l,
                        ...u
                    } = e;
                    return 16 === t || 16 === i ? (0, n.jsxs)("svg", {
                        ...(0, d.default)(u),
                        width: t,
                        height: i,
                        viewBox: "0 0 16 16",
                        children: [(0, n.jsx)("path", {
                            className: l,
                            fill: a,
                            d: "M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"
                        }), (0, n.jsx)("path", {
                            className: l,
                            fill: a,
                            d: "M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z"
                        }), (0, n.jsx)("path", {
                            className: l,
                            fill: a,
                            d: "M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z"
                        })]
                    }) : (0, n.jsx)("svg", {
                        ...(0, d.default)(u),
                        width: t,
                        height: i,
                        viewBox: "0 0 24 24",
                        children: (0, n.jsx)("path", {
                            className: l,
                            fill: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M21 3H24V5H21V8H19V5H16V3H19V0H21V3ZM10 12C12.205 12 14 10.205 14 8C14 5.795 12.205 4 10 4C7.795 4 6 5.795 6 8C6 10.205 7.795 12 10 12ZM10 13C5.289 13 2 15.467 2 19V20H18V19C18 15.467 14.711 13 10 13Z"
                        })
                    })
                }, l.UserPlusIcon)
        }
    }
]);