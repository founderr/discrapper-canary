(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["99636"], {
        838446: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("901582");

            function i(e, t) {
                return function(n) {
                    return (0, a.jsx)(l.default, {
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
                    return i
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("685665");

            function i(e, t) {
                return function(n) {
                    let {
                        AnalyticsLocationProvider: i
                    } = (0, l.default)(t);
                    return (0, a.jsx)(i, {
                        children: (0, a.jsx)(e, {
                            ...n
                        })
                    })
                }
            }
        },
        846883: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return w
                }
            }), n("222007"), n("424973");
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                i = n("77078"),
                u = n("260365"),
                d = n("823411"),
                s = n("997289"),
                o = n("685665"),
                r = n("442939"),
                c = n("662285"),
                f = n("782911"),
                I = n("629414"),
                p = n("53887"),
                _ = n("486150"),
                v = n("555759"),
                A = n("271938"),
                T = n("42203"),
                S = n("525065"),
                E = n("305961"),
                y = n("957255"),
                h = n("824563"),
                m = n("27618"),
                M = n("18494"),
                C = n("101125"),
                N = n("697218"),
                g = n("800762"),
                O = n("953998"),
                b = n("387111"),
                G = n("550766"),
                F = n("191225"),
                j = n("706508"),
                x = n("612696"),
                L = n("871388"),
                U = n("152311"),
                V = n("407908"),
                R = n("698372"),
                D = n("141962"),
                Y = n("954016"),
                P = n("49111"),
                J = n("450484"),
                k = n("782340");

            function w(e, t) {
                let {
                    analyticsLocations: w
                } = (0, o.default)(), H = (0, l.useStateFromStores)([N.default], () => N.default.getCurrentUser()), X = (0, l.useStateFromStores)([F.default], () => F.default.getSelfEmbeddedActivities()), B = (0, l.useStateFromStoresArray)([C.default], () => C.default.getActivities().filter(e => null != e.application_id && !(null == X ? void 0 : X.has(e.application_id)))), z = (0, l.useStateFromStoresArray)([h.default], () => null != t ? h.default.getActivities(t.id, null == e ? void 0 : e.getGuildId()) : [], [t, e]), K = (0, l.useStateFromStoresArray)([F.default], () => {
                    let n = (null == e ? void 0 : e.id) != null ? F.default.getEmbeddedActivitiesForChannel(e.id) : F.NO_ACTIVITIES;
                    return null != t ? n.filter(e => {
                        let {
                            connections: n
                        } = e;
                        return n.has(t.id)
                    }) : n
                }, [t, e]), Q = (0, R.default)(), q = (0, l.useStateFromStores)([y.default], () => null == e || e.isPrivate() || y.default.can(P.Permissions.SEND_MESSAGES, e), [e]), W = (0, l.useStateFromStoresArray)([O.default], () => [...z.map(e => null != e.application_id && O.default.getState(e.application_id, P.ActivityActionTypes.JOIN) === P.ActivityActionStates.LOADING), ...K.map(e => O.default.getState(e.application_id, P.ActivityActionTypes.JOIN) === P.ActivityActionStates.LOADING)], [z, K]), Z = (0, r.default)([...z.filter(e => (null == e ? void 0 : e.application_id) != null).map(e => e.application_id), ...K.map(e => e.application_id)]), $ = null == e ? void 0 : e.id, ee = (0, l.useStateFromStoresArray)([T.default, E.default, S.default, m.default, M.default, g.default, y.default], () => [...z.map(e => (0, x.default)({
                    user: null != t ? t : H,
                    activity: e,
                    application: Z.find(t => (null == t ? void 0 : t.id) === e.application_id),
                    channelId: $,
                    currentUser: H,
                    isEmbedded: (0, U.default)(e),
                    ChannelStore: T.default,
                    GuildStore: E.default,
                    GuildMemberCountStore: S.default,
                    RelationshipStore: m.default,
                    SelectedChannelStore: M.default,
                    VoiceStateStore: g.default,
                    PermissionStore: y.default
                })), ...K.map(e => (0, x.default)({
                    user: null != t ? t : H,
                    activity: e,
                    application: Z.find(t => (null == t ? void 0 : t.id) === e.application_id),
                    channelId: $,
                    currentUser: H,
                    isEmbedded: !0,
                    ChannelStore: T.default,
                    GuildStore: E.default,
                    GuildMemberCountStore: S.default,
                    RelationshipStore: m.default,
                    SelectedChannelStore: M.default,
                    VoiceStateStore: g.default,
                    PermissionStore: y.default
                }))], [z, Z, $, H, K, t]), et = (0, l.useStateFromStoresArray)([c.default, A.default], () => z.map(e => e.type === P.ActivityTypes.LISTENING && null != t ? (0, p.default)(c.default, A.default, t, e) : void 0), [t, z]), en = (0, s.useAnalyticsContext)();
                if (!q) return null;
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
                    el = (l, u) => {
                        let d = T.default.getChannel(l),
                            s = null == d ? void 0 : E.default.getGuild(d.guild_id);
                        if (null != d && null != s) {
                            if (null != t) return G.sendEmbeddedActivityInviteUser({
                                channelId: d.id,
                                applicationId: u,
                                userId: t.id,
                                location: P.InstantInviteSources.CONTEXT_MENU
                            });
                            if (null != e && e.type === P.ChannelTypes.GUILD_VOICE) return (0, i.openModalLazy)(async () => {
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
                    ei = async e => {
                        var n;
                        await d.default.join({
                            userId: t.id,
                            sessionId: e.session_id,
                            applicationId: e.application_id,
                            channelId: M.default.getVoiceChannelId(),
                            messageId: null,
                            intent: Y.ActivityIntent.PLAY,
                            embedded: (0, L.default)(e, P.ActivityFlags.EMBEDDED)
                        }), (0, V.default)({
                            type: P.AnalyticsGameOpenTypes.JOIN,
                            userId: t.id,
                            applicationId: e.application_id,
                            partyId: null === (n = e.party) || void 0 === n ? void 0 : n.id,
                            locationObject: en.location,
                            analyticsLocations: w
                        })
                    }, eu = async t => {
                        await (0, j.default)({
                            activity: t,
                            currentEmbeddedApplication: Q,
                            activityChannelId: null == e ? void 0 : e.id,
                            locationObject: en.location,
                            embeddedActivitiesManager: D.default,
                            analyticsLocations: w
                        })
                    }, ed = [];
                return null == X || X.forEach(n => {
                    let l = (null == t ? void 0 : t.id) != null && n.connections.has(null == t ? void 0 : t.id),
                        u = y.default.can(P.Permissions.CREATE_INSTANT_INVITE, e);
                    null != n.activity_id && !l && u && ed.push((0, a.jsx)(i.MenuItem, {
                        id: "invite-to-join-embedded",
                        label: k.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_JOIN,
                        subtext: n.name,
                        action: () => {
                            el(n.channelId, n.application_id)
                        }
                    }, "self-embedded-".concat(n.application_id)))
                }), B.forEach((e, t) => {
                    e.type === P.ActivityTypes.PLAYING && (0, L.default)(e, P.ActivityFlags.JOIN) ? ed.push((0, a.jsx)(i.MenuItem, {
                        id: "invite-to-join",
                        label: k.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_JOIN,
                        subtext: e.name,
                        action: () => ea(P.ActivityActionTypes.JOIN, e)
                    }, "self".concat(t))) : e.type === P.ActivityTypes.LISTENING && (0, L.default)(e, P.ActivityFlags.SYNC) && ed.push((0, a.jsx)(i.MenuItem, {
                        id: "invite-to-listen",
                        label: k.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_LISTEN_ALONG,
                        subtext: e.name,
                        action: () => ea(P.ActivityActionTypes.LISTEN, e)
                    }, "self".concat(t)))
                }), ed.length > 0 && ed.push((0, a.jsx)(i.MenuSeparator, {})), z.forEach((n, l) => {
                    if (n.type === P.ActivityTypes.PLAYING && (0, L.default)(n, P.ActivityFlags.JOIN) && null != n.session_id && null != n.application_id) {
                        if (ee[l]) {
                            let e = W[l];
                            ed.push((0, a.jsx)(i.MenuItem, {
                                id: "join",
                                label: e ? k.default.Messages.USER_ACTIVITY_JOINING : k.default.Messages.JOIN,
                                disabled: e,
                                hint: e ? (0, a.jsx)(i.Spinner, {
                                    type: i.Spinner.Type.PULSING_ELLIPSIS
                                }) : null,
                                subtext: n.name,
                                action: () => ei(n)
                            }, l))
                        } else ed.push((0, a.jsx)(i.MenuItem, {
                            id: "ask-to-join",
                            label: k.default.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN,
                            subtext: n.name,
                            action: () => ea(P.ActivityActionTypes.JOIN_REQUEST, n)
                        }, l))
                    } else if (n.type === P.ActivityTypes.LISTENING && (0, L.default)(n, P.ActivityFlags.SYNC) && null != et[l]) {
                        let u = et[l],
                            {
                                notPlayable: d,
                                playingSameTrack: s,
                                isCurrentUser: o,
                                syncingWithUser: r,
                                syncingWithParty: c
                            } = u,
                            p = o || d || s,
                            A = o || r || c;
                        ed.push((0, a.jsx)(i.MenuItem, {
                            id: "spotify-play-".concat(n.session_id),
                            action: () => (0, v.default)(u, J.SpotifyActionTypes.USER_ACTIVITY_PLAY),
                            label: (0, f.default)(u, J.SpotifyActionTypes.USER_ACTIVITY_PLAY),
                            subtext: p ? (0, I.default)(u, J.SpotifyActionTypes.USER_ACTIVITY_PLAY, null != e ? b.default.getNickname(e.guild_id, e.id, t) : void 0) : void 0,
                            disabled: p
                        }, "spotify-play-".concat(n.session_id)), (0, a.jsx)(i.MenuItem, {
                            id: "spotify-sync-".concat(n.session_id),
                            action: () => (0, _.default)(u, J.SpotifyActionTypes.USER_ACTIVITY_SYNC),
                            label: k.default.Messages.USER_ACTIVITY_LISTEN_ALONG,
                            subtext: A ? (0, I.default)(u, J.SpotifyActionTypes.USER_ACTIVITY_SYNC, null != e ? b.default.getNickname(e.guild_id, e.id, t) : void 0) : void 0,
                            disabled: A
                        }, "spotify-sync-".concat(n.session_id)))
                    }
                }), K.forEach((e, t) => {
                    var n;
                    let l = e.connections.has(null !== (n = null == H ? void 0 : H.id) && void 0 !== n ? n : ""),
                        u = t + z.length,
                        d = W[u] || l,
                        s = k.default.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY;
                    l ? s = k.default.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF : W[u] && (s = k.default.Messages.USER_ACTIVITY_JOINING), ee[u] && ed.push((0, a.jsx)(i.MenuItem, {
                        id: "embedded-activity-join-".concat(e.application_id),
                        label: s,
                        disabled: d,
                        hint: W[u] ? (0, a.jsx)(i.Spinner, {
                            type: i.Spinner.Type.PULSING_ELLIPSIS
                        }) : null,
                        subtext: e.name,
                        action: () => eu(e)
                    }, "embedded-activity-".concat(e.application_id)))
                }), ed
            }
        },
        493015: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("77078"),
                i = n("450911"),
                u = n("272030"),
                d = n("838446"),
                s = n("158534"),
                o = n("846883"),
                r = n("812204"),
                c = n("861370"),
                f = n("972701"),
                I = n("390008"),
                p = n("936947"),
                _ = n("271938"),
                v = n("136207"),
                A = n("44141"),
                T = n("531674"),
                S = n("49111"),
                E = n("782340"),
                y = (0, s.default)((0, d.default)(function(e) {
                    let {
                        channel: t,
                        selected: d,
                        onSelect: s
                    } = e, r = t.isOwner(_.default.getId()), S = (0, A.default)(t), y = (0, T.default)(t), h = (0, v.default)(t, d), m = (0, c.default)({
                        id: t.id,
                        label: E.default.Messages.COPY_ID_CHANNEL
                    }), M = (0, o.default)(t), C = (0, f.useAddToFavoritesItem)(t), N = (0, f.useRemoveFromFavoritesItem)(t), g = (0, I.default)(t), O = (0, p.default)(t);
                    return null == t || t.isManaged() ? null : (0, a.jsxs)(l.Menu, {
                        navId: "gdm-context",
                        "aria-label": E.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                        onClose: u.closeContextMenu,
                        onSelect: s,
                        children: [(0, a.jsx)(l.MenuGroup, {
                            children: S
                        }), (0, a.jsxs)(l.MenuGroup, {
                            children: [C, g, O]
                        }), (0, a.jsxs)(l.MenuGroup, {
                            children: [r ? (0, a.jsx)(l.MenuItem, {
                                id: "instant-invites",
                                label: E.default.Messages.INSTANT_INVITES,
                                action: () => (0, l.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await n.el("84279").then(n.bind(n, "84279"));
                                    return n => (0, a.jsx)(e, {
                                        channelId: t.id,
                                        ...n
                                    })
                                })
                            }) : null, (0, a.jsx)(l.MenuControlItem, {
                                id: "change-icon",
                                showDefaultFocus: !0,
                                control: (e, n) => (0, a.jsx)(l.MenuImageUploadControl, {
                                    onChange: n => {
                                        var a;
                                        i.default.setIcon(t.id, n), null === (a = e.onClose) || void 0 === a || a.call(e)
                                    },
                                    multiple: !1,
                                    "aria-label": E.default.Messages.CHANGE_ICON,
                                    ...e,
                                    ref: n
                                }),
                                label: E.default.Messages.CHANGE_ICON
                            }), null != t.icon ? (0, a.jsx)(l.MenuItem, {
                                id: "remove-icon",
                                label: E.default.Messages.REMOVE_ICON,
                                action: () => i.default.setIcon(t.id, null)
                            }) : null]
                        }), (0, a.jsx)(l.MenuGroup, {
                            children: M
                        }), (0, a.jsx)(l.MenuGroup, {
                            children: y
                        }), (0, a.jsx)(l.MenuGroup, {
                            children: h
                        }), (0, a.jsx)(l.MenuGroup, {
                            children: N
                        }), (0, a.jsx)(l.MenuGroup, {
                            children: m
                        })]
                    })
                }, {
                    object: S.AnalyticsObjects.CONTEXT_MENU
                }), [r.default.CONTEXT_MENU, r.default.GROUP_DM_MENU])
        },
        136207: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983"),
                l = n("884691"),
                i = n("77078"),
                u = n("450911"),
                d = n("254167"),
                s = n("679653"),
                o = n("782340");

            function r(e, t) {
                let n = (0, s.default)(e),
                    r = l.useCallback(() => {
                        let l = o.default.Messages.LEAVE_GROUP_DM_TITLE.format({
                                name: n
                            }),
                            s = o.default.Messages.LEAVE_GROUP_DM_BODY.format({
                                name: n
                            });
                        e.isManaged() && (l = o.default.Messages.LEAVE_GROUP_DM_MANAGED_TITLE.format({
                            name: n
                        }), s = o.default.Messages.LEAVE_GROUP_DM_MANAGED_BODY.format({
                            name: n
                        }));
                        let r = function(n) {
                            let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            u.default.closePrivateChannel(e.id, t, a)
                        };
                        (0, i.openModal)(e => (0, a.jsx)(d.default, {
                            header: l,
                            body: s,
                            onSubmit: r,
                            ...e
                        }))
                    }, [e, n, t]);
                return (0, a.jsx)(i.MenuItem, {
                    id: "leave-channel",
                    label: o.default.Messages.LEAVE_GROUP_DM,
                    action: r,
                    color: "danger"
                })
            }
        },
        44141: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                i = n("77078"),
                u = n("267363"),
                d = n("680986"),
                s = n("689275"),
                o = n("755624"),
                r = n("233069"),
                c = n("245997"),
                f = n("660478"),
                I = n("49111"),
                p = n("782340");

            function _(e) {
                let t = function(e) {
                    let t = (0, d.useUnreadThreadsCountForParent)(e.guild_id, e.id),
                        n = (0, l.useStateFromStores)([f.default, c.default, s.default, o.default], () => {
                            if (e.isForumPost()) return f.default.isForumPostUnread(e.id);
                            if (e.type !== I.ChannelTypes.GUILD_CATEGORY) return f.default.hasUnread(e.id);
                            {
                                let t = c.default.getCategories(e.getGuildId());
                                if (null == t[e.id]) return !1;
                                let n = t[e.id].some(e => {
                                    let {
                                        channel: t
                                    } = e;
                                    return (0, r.isReadableType)(t.type) && f.default.hasUnread(t.id)
                                });
                                if (n) return !0;
                                let a = new Set(t[e.id].map(e => e.channel.id)),
                                    l = s.default.getThreadsForGuild(e.guild_id);
                                for (let e in l)
                                    if (a.has(e)) {
                                        for (let t in l[e])
                                            if (o.default.hasJoined(t) && !o.default.isMuted(t) && f.default.hasUnread(t)) return !0
                                    } return !1
                            }
                        }, [e]);
                    return e.isForumLikeChannel() ? t > 0 : n
                }(e);
                return (0, a.jsx)(i.MenuItem, {
                    id: "mark-channel-read",
                    label: p.default.Messages.MARK_AS_READ,
                    action: function() {
                        (0, u.ackChannel)(e)
                    },
                    disabled: !t
                })
            }
        },
        986373: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useFavorite: function() {
                    return o
                },
                useFavoritesCategories: function() {
                    return r
                },
                useFavoritesGuildSelected: function() {
                    return c
                }
            }), n("424973"), n("222007");
            var a = n("298386"),
                l = n("446674");
            n("42203");
            var i = n("923959"),
                u = n("162771"),
                d = n("379881"),
                s = n("49111");

            function o(e) {
                let t = (0, l.useStateFromStores)([d.default], () => d.default.getFavorite(e));
                return t
            }

            function r() {
                let e = (0, l.useStateFromStores)([i.default], () => i.default.getChannels(s.FAVORITES))[a.ChannelTypes.GUILD_CATEGORY];
                return e.map(e => ({
                    id: "null" === e.channel.id ? null : e.channel.id,
                    name: e.channel.name
                }))
            }

            function c() {
                let e = (0, l.useStateFromStores)([u.default], () => u.default.getGuildId());
                return e === s.FAVORITES
            }
        },
        972701: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAddToFavoritesItem: function() {
                    return _
                },
                useRemoveFromFavoritesItem: function() {
                    return v
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var l = n("917351"),
                i = n.n(l),
                u = n("446674"),
                d = n("77078"),
                s = n("923959"),
                o = n("379881"),
                r = n("200008"),
                c = n("498139"),
                f = n("49111"),
                I = n("782340");

            function p(e, t) {
                return e.type === f.ChannelTypes.GROUP_DM ? t ? I.default.Messages.UNFAVORITE_GDM : I.default.Messages.FAVORITE_GDM : e.type === f.ChannelTypes.DM ? t ? I.default.Messages.UNFAVORITE_DM : I.default.Messages.FAVORITE_DM : t ? I.default.Messages.UNFAVORITE_CHANNEL : I.default.Messages.FAVORITE_CHANNEL
            }

            function _(e) {
                let t = (0, u.useStateFromStores)([s.default], () => s.default.getChannels(f.FAVORITES))[f.ChannelTypes.GUILD_CATEGORY],
                    [
                        [n], l
                    ] = i.partition(t, e => "null" === e.channel.id),
                    {
                        favoritesEnabled: I,
                        isFavoritesPerk: _
                    } = (0, c.useFavoritesServerExperiment)("58e21a_1"),
                    v = (0, u.useStateFromStores)([o.default], () => o.default.isFavorite(e.id));
                if (__OVERLAY__ || v || !I) return null;

                function A(t) {
                    (0, r.addFavoriteChannel)(e.id, t)
                }
                return 0 === l.length ? (0, a.jsx)(d.MenuItem, {
                    id: "favorite-channel",
                    label: p(e, !1),
                    action: () => A(null)
                }) : (0, a.jsxs)(d.MenuItem, {
                    id: "favorite-channel",
                    label: p(e, !1),
                    action: () => A(null),
                    children: [_ && (0, a.jsx)(d.MenuGroup, {
                        children: (0, a.jsx)(d.MenuItem, {
                            id: "favorite-".concat(n.channel.id),
                            label: n.channel.name,
                            action: () => A("null" === n.channel.id ? null : n.channel.id)
                        }, n.channel.id)
                    }), (0, a.jsx)(d.MenuGroup, {
                        children: l.map(e => (0, a.jsx)(d.MenuItem, {
                            id: "favorite-".concat(e.channel.id),
                            label: e.channel.name,
                            action: () => A(e.channel.id)
                        }, e.channel.id))
                    })]
                })
            }

            function v(e) {
                let t = (0, u.useStateFromStores)([o.default], () => o.default.isFavorite(e.id));
                return __OVERLAY__ || !t ? null : (0, a.jsx)(d.MenuItem, {
                    id: "favorite-channel",
                    label: p(e, !0),
                    color: "danger",
                    action: () => e.type === f.ChannelTypes.GUILD_CATEGORY ? (0, d.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("338052").then(n.bind(n, "338052"));
                        return n => (0, a.jsx)(t, {
                            ...n,
                            onConfirm: () => {
                                n.onClose(), (0, r.removeFavoriteChannel)(e.id)
                            },
                            channel: e
                        })
                    }) : (0, r.removeFavoriteChannel)(e.id)
                })
            }
        },
        390008: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                i = n("77078"),
                u = n("162771"),
                d = n("49111"),
                s = n("782340");

            function o(e) {
                let t = (0, l.useStateFromStores)([u.default], () => u.default.getGuildId());
                return __OVERLAY__ || t !== d.FAVORITES ? null : (0, a.jsx)(i.MenuItem, {
                    id: "set-channel-nickname",
                    label: s.default.Messages.CHANGE_NICKNAME,
                    action: function() {
                        (0, i.openModalLazy)(async () => {
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
        936947: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("77078"),
                i = n("200008"),
                u = n("986373"),
                d = n("498139"),
                s = n("782340");

            function o(e) {
                let t = (0, u.useFavoritesGuildSelected)(),
                    n = (0, u.useFavorite)(e.id),
                    o = (0, u.useFavoritesCategories)(),
                    {
                        isFavoritesPerk: r
                    } = (0, d.useFavoritesServerExperiment)("useChannelMoveToCategory");
                if (__OVERLAY__ || !t || null == n || !r) return null;
                let c = o.filter(e => e.id !== (null == n ? void 0 : n.parentId));
                return (0, a.jsx)(l.MenuItem, {
                    id: "move-to-category",
                    label: s.default.Messages.MOVE_TO,
                    children: c.map(e => {
                        let {
                            id: t,
                            name: u
                        } = e;
                        return (0, a.jsx)(l.MenuItem, {
                            id: "favorite-".concat(t),
                            label: u,
                            action: () => {
                                var e;
                                return e = t, void(null != n && (0, i.updateFavoriteChannelParent)(n.id, e))
                            }
                        }, null != t ? t : "null")
                    })
                })
            }
        }
    }
]);