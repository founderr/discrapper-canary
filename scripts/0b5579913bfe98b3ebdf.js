(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["99636"], {
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
        846883: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return w
                }
            }), n("222007"), n("424973");
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                d = n("260365"),
                u = n("823411"),
                s = n("997289"),
                o = n("685665"),
                r = n("442939"),
                c = n("662285"),
                f = n("782911"),
                I = n("629414"),
                p = n("53887"),
                _ = n("486150"),
                A = n("555759"),
                T = n("271938"),
                v = n("42203"),
                y = n("525065"),
                E = n("305961"),
                S = n("957255"),
                h = n("824563"),
                m = n("27618"),
                M = n("18494"),
                N = n("101125"),
                C = n("697218"),
                g = n("800762"),
                O = n("953998"),
                b = n("387111"),
                j = n("550766"),
                G = n("191225"),
                x = n("706508"),
                L = n("612696"),
                U = n("871388"),
                F = n("152311"),
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
                } = (0, o.default)(), H = (0, i.useStateFromStores)([C.default], () => C.default.getCurrentUser()), X = (0, i.useStateFromStores)([G.default], () => G.default.getSelfEmbeddedActivities()), B = (0, i.useStateFromStoresArray)([N.default], () => N.default.getActivities().filter(e => null != e.application_id && !(null == X ? void 0 : X.has(e.application_id)))), z = (0, i.useStateFromStoresArray)([h.default], () => null != t ? h.default.getActivities(t.id, null == e ? void 0 : e.getGuildId()) : [], [t, e]), K = (0, i.useStateFromStoresArray)([G.default], () => {
                    let n = (null == e ? void 0 : e.id) != null ? G.default.getEmbeddedActivitiesForChannel(e.id) : G.NO_ACTIVITIES;
                    return null != t ? n.filter(e => {
                        let {
                            connections: n
                        } = e;
                        return n.has(t.id)
                    }) : n
                }, [t, e]), Q = (0, R.default)(), q = (0, i.useStateFromStores)([S.default], () => null == e || e.isPrivate() || S.default.can(P.Permissions.SEND_MESSAGES, e), [e]), W = (0, i.useStateFromStoresArray)([O.default], () => [...z.map(e => null != e.application_id && O.default.getState(e.application_id, P.ActivityActionTypes.JOIN) === P.ActivityActionStates.LOADING), ...K.map(e => O.default.getState(e.application_id, P.ActivityActionTypes.JOIN) === P.ActivityActionStates.LOADING)], [z, K]), Z = (0, r.default)([...z.filter(e => (null == e ? void 0 : e.application_id) != null).map(e => e.application_id), ...K.map(e => e.application_id)]), $ = null == e ? void 0 : e.id, ee = (0, i.useStateFromStoresArray)([v.default, E.default, y.default, m.default, M.default, g.default, S.default], () => [...z.map(e => (0, L.default)({
                    user: null != t ? t : H,
                    activity: e,
                    application: Z.find(t => (null == t ? void 0 : t.id) === e.application_id),
                    channelId: $,
                    currentUser: H,
                    isEmbedded: (0, F.default)(e),
                    ChannelStore: v.default,
                    GuildStore: E.default,
                    GuildMemberCountStore: y.default,
                    RelationshipStore: m.default,
                    SelectedChannelStore: M.default,
                    VoiceStateStore: g.default,
                    PermissionStore: S.default
                })), ...K.map(e => (0, L.default)({
                    user: null != t ? t : H,
                    activity: e,
                    application: Z.find(t => (null == t ? void 0 : t.id) === e.application_id),
                    channelId: $,
                    currentUser: H,
                    isEmbedded: !0,
                    ChannelStore: v.default,
                    GuildStore: E.default,
                    GuildMemberCountStore: y.default,
                    RelationshipStore: m.default,
                    SelectedChannelStore: M.default,
                    VoiceStateStore: g.default,
                    PermissionStore: S.default
                }))], [z, Z, $, H, K, t]), et = (0, i.useStateFromStoresArray)([c.default, T.default], () => z.map(e => e.type === P.ActivityTypes.LISTENING && null != t ? (0, p.default)(c.default, T.default, t, e) : void 0), [t, z]), en = (0, s.useAnalyticsContext)();
                if (!q) return null;
                let ea = (n, a) => {
                        null != e ? d.default.sendActivityInvite({
                            type: n,
                            channelId: e.id,
                            activity: a,
                            location: P.AnalyticsLocations.CONTEXT_MENU
                        }) : null != t && d.default.sendActivityInviteUser({
                            type: n,
                            userId: t.id,
                            activity: a,
                            location: P.AnalyticsLocations.CONTEXT_MENU
                        })
                    },
                    ei = (i, d) => {
                        let u = v.default.getChannel(i),
                            s = null == u ? void 0 : E.default.getGuild(u.guild_id);
                        if (null != u && null != s) {
                            if (null != t) return j.sendEmbeddedActivityInviteUser({
                                channelId: u.id,
                                applicationId: d,
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
                                    channel: u,
                                    applicationId: d,
                                    analyticsLocation: e.type === P.ChannelTypes.GUILD_VOICE ? P.AnalyticsPages.GUILD_CHANNEL : P.AnalyticsPages.DM_CHANNEL,
                                    source: P.InstantInviteSources.ACTIVITY_INVITE
                                })
                            }, {
                                modalKey: "use-activity-items-embedded-invite-modal"
                            });
                            if ((null == e ? void 0 : e.id) != null) return j.sendEmbeddedActivityInvite({
                                activityChannelId: u.id,
                                invitedChannelId: e.id,
                                applicationId: d,
                                location: P.InstantInviteSources.CONTEXT_MENU
                            })
                        }
                    },
                    el = async e => {
                        var n;
                        await u.default.join({
                            userId: t.id,
                            sessionId: e.session_id,
                            applicationId: e.application_id,
                            channelId: M.default.getVoiceChannelId(),
                            messageId: null,
                            intent: Y.ActivityIntent.PLAY,
                            embedded: (0, U.default)(e, P.ActivityFlags.EMBEDDED)
                        }), (0, V.default)({
                            type: P.AnalyticsGameOpenTypes.JOIN,
                            userId: t.id,
                            applicationId: e.application_id,
                            partyId: null === (n = e.party) || void 0 === n ? void 0 : n.id,
                            locationObject: en.location,
                            analyticsLocations: w
                        })
                    }, ed = async t => {
                        await (0, x.default)({
                            activity: t,
                            currentEmbeddedApplication: Q,
                            activityChannelId: null == e ? void 0 : e.id,
                            locationObject: en.location,
                            embeddedActivitiesManager: D.default,
                            analyticsLocations: w
                        })
                    }, eu = [];
                return null == X || X.forEach(n => {
                    let i = (null == t ? void 0 : t.id) != null && n.connections.has(null == t ? void 0 : t.id),
                        d = S.default.can(P.Permissions.CREATE_INSTANT_INVITE, e);
                    null != n.activity_id && !i && d && eu.push((0, a.jsx)(l.MenuItem, {
                        id: "invite-to-join-embedded",
                        label: k.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_JOIN,
                        subtext: n.name,
                        action: () => {
                            ei(n.channelId, n.application_id)
                        }
                    }, "self-embedded-".concat(n.application_id)))
                }), B.forEach((e, t) => {
                    e.type === P.ActivityTypes.PLAYING && (0, U.default)(e, P.ActivityFlags.JOIN) ? eu.push((0, a.jsx)(l.MenuItem, {
                        id: "invite-to-join",
                        label: k.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_JOIN,
                        subtext: e.name,
                        action: () => ea(P.ActivityActionTypes.JOIN, e)
                    }, "self".concat(t))) : e.type === P.ActivityTypes.LISTENING && (0, U.default)(e, P.ActivityFlags.SYNC) && eu.push((0, a.jsx)(l.MenuItem, {
                        id: "invite-to-listen",
                        label: k.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_LISTEN_ALONG,
                        subtext: e.name,
                        action: () => ea(P.ActivityActionTypes.LISTEN, e)
                    }, "self".concat(t)))
                }), eu.length > 0 && eu.push((0, a.jsx)(l.MenuSeparator, {})), z.forEach((n, i) => {
                    if (n.type === P.ActivityTypes.PLAYING && (0, U.default)(n, P.ActivityFlags.JOIN) && null != n.session_id && null != n.application_id) {
                        if (ee[i]) {
                            let e = W[i];
                            eu.push((0, a.jsx)(l.MenuItem, {
                                id: "join",
                                label: e ? k.default.Messages.USER_ACTIVITY_JOINING : k.default.Messages.JOIN,
                                disabled: e,
                                hint: e ? (0, a.jsx)(l.Spinner, {
                                    type: l.Spinner.Type.PULSING_ELLIPSIS
                                }) : null,
                                subtext: n.name,
                                action: () => el(n)
                            }, i))
                        } else eu.push((0, a.jsx)(l.MenuItem, {
                            id: "ask-to-join",
                            label: k.default.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN,
                            subtext: n.name,
                            action: () => ea(P.ActivityActionTypes.JOIN_REQUEST, n)
                        }, i))
                    } else if (n.type === P.ActivityTypes.LISTENING && (0, U.default)(n, P.ActivityFlags.SYNC) && null != et[i]) {
                        let d = et[i],
                            {
                                notPlayable: u,
                                playingSameTrack: s,
                                isCurrentUser: o,
                                syncingWithUser: r,
                                syncingWithParty: c
                            } = d,
                            p = o || u || s,
                            T = o || r || c;
                        eu.push((0, a.jsx)(l.MenuItem, {
                            id: "spotify-play-".concat(n.session_id),
                            action: () => (0, A.default)(d, J.SpotifyActionTypes.USER_ACTIVITY_PLAY),
                            label: (0, f.default)(d, J.SpotifyActionTypes.USER_ACTIVITY_PLAY),
                            subtext: p ? (0, I.default)(d, J.SpotifyActionTypes.USER_ACTIVITY_PLAY, null != e ? b.default.getNickname(e.guild_id, e.id, t) : void 0) : void 0,
                            disabled: p
                        }, "spotify-play-".concat(n.session_id)), (0, a.jsx)(l.MenuItem, {
                            id: "spotify-sync-".concat(n.session_id),
                            action: () => (0, _.default)(d, J.SpotifyActionTypes.USER_ACTIVITY_SYNC),
                            label: k.default.Messages.USER_ACTIVITY_LISTEN_ALONG,
                            subtext: T ? (0, I.default)(d, J.SpotifyActionTypes.USER_ACTIVITY_SYNC, null != e ? b.default.getNickname(e.guild_id, e.id, t) : void 0) : void 0,
                            disabled: T
                        }, "spotify-sync-".concat(n.session_id)))
                    }
                }), K.forEach((e, t) => {
                    var n;
                    let i = e.connections.has(null !== (n = null == H ? void 0 : H.id) && void 0 !== n ? n : ""),
                        d = t + z.length,
                        u = W[d] || i,
                        s = k.default.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY;
                    i ? s = k.default.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF : W[d] && (s = k.default.Messages.USER_ACTIVITY_JOINING), ee[d] && eu.push((0, a.jsx)(l.MenuItem, {
                        id: "embedded-activity-join-".concat(e.application_id),
                        label: s,
                        disabled: u,
                        hint: W[d] ? (0, a.jsx)(l.Spinner, {
                            type: l.Spinner.Type.PULSING_ELLIPSIS
                        }) : null,
                        subtext: e.name,
                        action: () => ed(e)
                    }, "embedded-activity-".concat(e.application_id)))
                }), eu
            }
        },
        493015: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("77078"),
                l = n("450911"),
                d = n("272030"),
                u = n("838446"),
                s = n("158534"),
                o = n("846883"),
                r = n("812204"),
                c = n("861370"),
                f = n("972701"),
                I = n("390008"),
                p = n("271938"),
                _ = n("136207"),
                A = n("44141"),
                T = n("531674"),
                v = n("49111"),
                y = n("782340"),
                E = (0, s.default)((0, u.default)(function(e) {
                    let {
                        channel: t,
                        selected: u,
                        onSelect: s
                    } = e, r = t.isOwner(p.default.getId()), v = (0, A.default)(t), E = (0, T.default)(t), S = (0, _.default)(t, u), h = (0, c.default)({
                        id: t.id,
                        label: y.default.Messages.COPY_ID_CHANNEL
                    }), m = (0, o.default)(t), M = (0, f.useAddToFavoritesItem)(t), N = (0, f.useRemoveFromFavoritesItem)(t), C = (0, I.default)(t);
                    return null == t || t.isManaged() ? null : (0, a.jsxs)(i.Menu, {
                        navId: "gdm-context",
                        "aria-label": y.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                        onClose: d.closeContextMenu,
                        onSelect: s,
                        children: [(0, a.jsx)(i.MenuGroup, {
                            children: v
                        }), (0, a.jsxs)(i.MenuGroup, {
                            children: [M, C]
                        }), (0, a.jsxs)(i.MenuGroup, {
                            children: [r ? (0, a.jsx)(i.MenuItem, {
                                id: "instant-invites",
                                label: y.default.Messages.INSTANT_INVITES,
                                action: () => (0, i.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await n.el("84279").then(n.bind(n, "84279"));
                                    return n => (0, a.jsx)(e, {
                                        channelId: t.id,
                                        ...n
                                    })
                                })
                            }) : null, (0, a.jsx)(i.MenuControlItem, {
                                id: "change-icon",
                                showDefaultFocus: !0,
                                control: (e, n) => (0, a.jsx)(i.MenuImageUploadControl, {
                                    onChange: n => {
                                        var a;
                                        l.default.setIcon(t.id, n), null === (a = e.onClose) || void 0 === a || a.call(e)
                                    },
                                    multiple: !1,
                                    "aria-label": y.default.Messages.CHANGE_ICON,
                                    ...e,
                                    ref: n
                                }),
                                label: y.default.Messages.CHANGE_ICON
                            }), null != t.icon ? (0, a.jsx)(i.MenuItem, {
                                id: "remove-icon",
                                label: y.default.Messages.REMOVE_ICON,
                                action: () => l.default.setIcon(t.id, null)
                            }) : null]
                        }), (0, a.jsx)(i.MenuGroup, {
                            children: m
                        }), (0, a.jsx)(i.MenuGroup, {
                            children: E
                        }), (0, a.jsx)(i.MenuGroup, {
                            children: S
                        }), (0, a.jsx)(i.MenuGroup, {
                            children: N
                        }), (0, a.jsx)(i.MenuGroup, {
                            children: h
                        })]
                    })
                }, {
                    object: v.AnalyticsObjects.CONTEXT_MENU
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
                i = n("884691"),
                l = n("77078"),
                d = n("450911"),
                u = n("254167"),
                s = n("679653"),
                o = n("782340");

            function r(e, t) {
                let n = (0, s.default)(e),
                    r = i.useCallback(() => {
                        let i = o.default.Messages.LEAVE_GROUP_DM_TITLE.format({
                                name: n
                            }),
                            s = o.default.Messages.LEAVE_GROUP_DM_BODY.format({
                                name: n
                            });
                        e.isManaged() && (i = o.default.Messages.LEAVE_GROUP_DM_MANAGED_TITLE.format({
                            name: n
                        }), s = o.default.Messages.LEAVE_GROUP_DM_MANAGED_BODY.format({
                            name: n
                        }));
                        let r = function(n) {
                            let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            d.default.closePrivateChannel(e.id, t, a)
                        };
                        (0, l.openModal)(e => (0, a.jsx)(u.default, {
                            header: i,
                            body: s,
                            onSubmit: r,
                            ...e
                        }))
                    }, [e, n, t]);
                return (0, a.jsx)(l.MenuItem, {
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
            var i = n("446674"),
                l = n("77078"),
                d = n("267363"),
                u = n("680986"),
                s = n("689275"),
                o = n("755624"),
                r = n("233069"),
                c = n("245997"),
                f = n("660478"),
                I = n("49111"),
                p = n("782340");

            function _(e) {
                let t = function(e) {
                    let t = (0, u.useUnreadThreadsCountForParent)(e.guild_id, e.id),
                        n = (0, i.useStateFromStores)([f.default, c.default, s.default, o.default], () => {
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
                                    i = s.default.getThreadsForGuild(e.guild_id);
                                for (let e in i)
                                    if (a.has(e)) {
                                        for (let t in i[e])
                                            if (o.default.hasJoined(t) && !o.default.isMuted(t) && f.default.hasUnread(t)) return !0
                                    } return !1
                            }
                        }, [e]);
                    return e.isForumLikeChannel() ? t > 0 : n
                }(e);
                return (0, a.jsx)(l.MenuItem, {
                    id: "mark-channel-read",
                    label: p.default.Messages.MARK_AS_READ,
                    action: function() {
                        (0, d.ackChannel)(e)
                    },
                    disabled: !t
                })
            }
        },
        972701: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAddToFavoritesItem: function() {
                    return _
                },
                useRemoveFromFavoritesItem: function() {
                    return A
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var i = n("917351"),
                l = n.n(i),
                d = n("446674"),
                u = n("77078"),
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
                let t = (0, d.useStateFromStores)([s.default], () => s.default.getChannels(f.FAVORITES))[f.ChannelTypes.GUILD_CATEGORY],
                    [
                        [n], i
                    ] = l.partition(t, e => "null" === e.channel.id),
                    {
                        favoritesEnabled: I,
                        isFavoritesPerk: _
                    } = (0, c.useFavoritesServerExperiment)("58e21a_1"),
                    A = (0, d.useStateFromStores)([o.default], () => o.default.isFavorite(e.id));
                if (__OVERLAY__ || A || !I) return null;

                function T(t) {
                    (0, r.addFavoriteChannel)(e.id, t)
                }
                return 0 === i.length ? (0, a.jsx)(u.MenuItem, {
                    id: "favorite-channel",
                    label: p(e, !1),
                    action: () => T(null)
                }) : (0, a.jsxs)(u.MenuItem, {
                    id: "favorite-channel",
                    label: p(e, !1),
                    action: () => T(null),
                    children: [_ && (0, a.jsx)(u.MenuGroup, {
                        children: (0, a.jsx)(u.MenuItem, {
                            id: "favorite-".concat(n.channel.id),
                            label: n.channel.name,
                            action: () => T("null" === n.channel.id ? null : n.channel.id)
                        }, n.channel.id)
                    }), (0, a.jsx)(u.MenuGroup, {
                        children: i.map(e => (0, a.jsx)(u.MenuItem, {
                            id: "favorite-".concat(e.channel.id),
                            label: e.channel.name,
                            action: () => T(e.channel.id)
                        }, e.channel.id))
                    })]
                })
            }

            function A(e) {
                let t = (0, d.useStateFromStores)([o.default], () => o.default.isFavorite(e.id));
                return __OVERLAY__ || !t ? null : (0, a.jsx)(u.MenuItem, {
                    id: "favorite-channel",
                    label: p(e, !0),
                    color: "danger",
                    action: () => e.type === f.ChannelTypes.GUILD_CATEGORY ? (0, u.openModalLazy)(async () => {
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
            var i = n("446674"),
                l = n("77078"),
                d = n("162771"),
                u = n("49111"),
                s = n("782340");

            function o(e) {
                let t = (0, i.useStateFromStores)([d.default], () => d.default.getGuildId());
                return __OVERLAY__ || t !== u.FAVORITES ? null : (0, a.jsx)(l.MenuItem, {
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
        }
    }
]);