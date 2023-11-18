(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["34094"], {
        263436: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                LockUnlockedIcon: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("669491"),
                s = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...d
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, s.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M8.692 2.25A5 5 0 0 1 17 6v3h1a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3h9V6a3 3 0 0 0-4.984-2.25 1 1 0 0 1-1.324-1.5ZM14 14a2 2 0 0 1-1 1.732V18a1 1 0 1 1-2 0v-2.268A2 2 0 0 1 12 12a2 2 0 0 1 2 2Z",
                        clipRule: "evenodd",
                        className: i
                    })
                })
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
            var l = n("669491"),
                s = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...d
                } = e;
                return (0, a.jsxs)("svg", {
                    ...(0, s.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, a.jsx)("path", {
                        d: "M19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
                        fill: "string" == typeof u ? u : u.css,
                        className: i
                    }), (0, a.jsx)("path", {
                        d: "M16.828 12.93c.259-.271.259-.746-.077-.915A9.493 9.493 0 0 0 12.467 11h-.934A9.533 9.533 0 0 0 2 20.533C2 21.343 2.657 22 3.467 22h.22c.24 0 .445-.17.504-.403.285-1.113.84-2.17 1.32-2.91.134-.208.43-.094.405.154l-.261 2.61a.5.5 0 0 0 .497.549h7.64c.123 0 .17-.31.06-.363C12.819 21.14 12 20.224 12 19a3 3 0 0 1 3-3h.5a.5.5 0 0 0 .5-.5V15c0-.802.315-1.53.828-2.07ZM12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
                        fill: "string" == typeof u ? u : u.css,
                        className: i
                    })]
                })
            }
        },
        531674: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getMuteTimes: function() {
                    return g
                },
                default: function() {
                    return S
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var l = n("866227"),
                s = n.n(l),
                u = n("446674"),
                i = n("77078"),
                d = n("820542"),
                r = n("519705"),
                o = n("319165"),
                c = n("282109"),
                f = n("679653"),
                M = n("49111"),
                E = n("468200"),
                _ = n("782340");
            let g = () => [{
                    value: E.MuteUntilSeconds.MINUTES_15,
                    label: _.default.Messages.MUTE_DURATION_15_MINUTES
                }, {
                    value: E.MuteUntilSeconds.HOURS_1,
                    label: _.default.Messages.MUTE_DURATION_1_HOUR
                }, {
                    value: E.MuteUntilSeconds.HOURS_3,
                    label: _.default.Messages.MUTE_DURATION_3_HOURS
                }, {
                    value: E.MuteUntilSeconds.HOURS_8,
                    label: _.default.Messages.MUTE_DURATION_8_HOURS
                }, {
                    value: E.MuteUntilSeconds.HOURS_24,
                    label: _.default.Messages.MUTE_DURATION_24_HOURS
                }, {
                    value: E.MuteUntilSeconds.ALWAYS,
                    label: _.default.Messages.MUTE_DURATION_ALWAYS
                }],
                h = e => {
                    let t = e > 0 ? s().add(e, "second").toISOString() : null;
                    return {
                        muted: !0,
                        mute_config: {
                            selected_time_window: e,
                            end_time: t
                        }
                    }
                };

            function S(e, t) {
                let [n, l] = (0, u.useStateFromStoresArray)([c.default], () => [c.default.isChannelMuted(e.guild_id, e.id), c.default.getChannelMuteConfig(e.guild_id, e.id)]), s = (0, o.useMutedUntilText)(l), E = (0, f.default)(e, !0);

                function S(t) {
                    t && e.type === M.ChannelTypes.GUILD_CATEGORY && (0, d.categoryCollapse)(e.id), r.default.updateChannelOverrideSettings(e.guild_id, e.id, {
                        muted: t
                    })
                }
                let N = _.default.Messages.MUTE_CHANNEL_GENERIC,
                    C = _.default.Messages.UNMUTE_CHANNEL_GENERIC;
                switch (e.type) {
                    case M.ChannelTypes.GUILD_CATEGORY:
                        N = _.default.Messages.MUTE_CATEGORY, C = _.default.Messages.UNMUTE_CATEGORY;
                        break;
                    case M.ChannelTypes.GROUP_DM:
                        N = _.default.Messages.MUTE_CONVERSATION, C = _.default.Messages.UNMUTE_CONVERSATION;
                        break;
                    case M.ChannelTypes.DM:
                        N = _.default.Messages.MUTE_CHANNEL.format({
                            name: E
                        }), C = _.default.Messages.UNMUTE_CHANNEL.format({
                            name: E
                        });
                        break;
                    default:
                        N = _.default.Messages.MUTE_CHANNEL_GENERIC, C = _.default.Messages.UNMUTE_CHANNEL_GENERIC
                }
                return n ? (0, a.jsx)(i.MenuItem, {
                    id: "unmute-channel",
                    label: C,
                    subtext: s,
                    action: () => S(!1)
                }) : (0, a.jsx)(i.MenuItem, {
                    id: "mute-channel",
                    label: N,
                    action: () => S(!0),
                    children: g().map(n => {
                        let {
                            value: l,
                            label: s
                        } = n;
                        return (0, a.jsx)(i.MenuItem, {
                            id: "".concat(l),
                            label: s,
                            action: () => (function(n) {
                                e.type === M.ChannelTypes.GUILD_CATEGORY && (0, d.categoryCollapse)(e.id);
                                let a = h(n);
                                r.default.updateChannelOverrideSettings(e.guild_id, e.id, a, t)
                            })(l)
                        }, l)
                    })
                })
            }
        },
        884422: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchChannelHighlights: function() {
                    return o
                },
                jumpToHighlight: function() {
                    return c
                }
            });
            var a = n("872717"),
                l = n("913144"),
                s = n("819689"),
                u = n("267363"),
                i = n("716241"),
                d = n("599110"),
                r = n("49111");
            async function o(e) {
                l.default.dispatch({
                    type: "CHANNEL_HIGHLIGHTS_FETCH_START",
                    guildId: e
                });
                let t = await a.default.get({
                        url: r.Endpoints.CHANNEL_HIGHLIGHTS(e)
                    }),
                    n = t.body;
                await l.default.dispatch({
                    type: "CHANNEL_HIGHLIGHTS_FETCH_SUCCESS",
                    guildId: e,
                    data: n
                })
            }
            async function c(e) {
                let {
                    guildId: t,
                    channelId: n,
                    targetMessageId: a,
                    highlightedMessageIds: l,
                    numHighlightsVisited: o
                } = e;
                await s.default.jumpToMessage({
                    channelId: n,
                    messageId: a,
                    flash: !0
                }), d.default.track(r.AnalyticEvents.CHANNEL_HIGHLIGHTS_ACKED, {
                    ...(0, i.collectGuildAnalyticsMetadata)(t),
                    ...(0, i.collectChannelAnalyticsMetadataFromId)(n),
                    message_id: a,
                    index: o,
                    ack_type: "navigator"
                });
                let c = l[o - 1];
                return null != c && u.ack(n, !0, !1, c), Promise.resolve()
            }
        },
        200029: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            }), n("222007");
            var a = n("689988"),
                l = n("44574"),
                s = n("512395"),
                u = n("305961"),
                i = n("162771"),
                d = n("718517"),
                r = n("884422"),
                o = n("483038"),
                c = n("49111");
            class f extends a.default {
                maybeLoadFeedForGuild(e) {
                    if (null == e) return !1;
                    let t = (0, s.isChannelHighlightsEnabledForGuild)(e);
                    (function(e) {
                        let t = o.default.getLastFetchedMillis(e);
                        if (null != t && Date.now() - t < 3 * d.default.Millis.HOUR || o.default.isLoading(e)) return !1;
                        let n = u.default.getGuild(e);
                        return null != n && !n.hasFeature(c.GuildFeatures.CHANNEL_HIGHLIGHTS_DISABLED)
                    })(e) && (t || (0, l.isGuildUnreadsExperimentEnabled)()) && (0, r.fetchChannelHighlights)(e)
                }
                constructor(...e) {
                    super(...e), this.actions = {
                        CHANNEL_PRELOAD: e => this.handleChannelPreload(e),
                        CHANNEL_SELECT: e => this.handleChannelSelect(e),
                        POST_CONNECTION_OPEN: () => this.handleConnectionOpen()
                    }, this.handleChannelPreload = e => {
                        let {
                            guildId: t
                        } = e;
                        this.maybeLoadFeedForGuild(t)
                    }, this.handleChannelSelect = e => {
                        let {
                            guildId: t
                        } = e;
                        this.maybeLoadFeedForGuild(t)
                    }, this.handleConnectionOpen = () => {
                        let e = i.default.getGuildId();
                        this.maybeLoadFeedForGuild(e)
                    }
                }
            }
            var M = new f
        },
        374705: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("627445"),
                s = n.n(l),
                u = n("446674"),
                i = n("77078"),
                d = n("272030"),
                r = n("812204"),
                o = n("685665"),
                c = n("861370"),
                f = n("255812"),
                M = n("529932"),
                E = n("724026"),
                _ = n("271938"),
                g = n("923959"),
                h = n("697218"),
                S = n("578411"),
                N = n("230947"),
                C = n("544955"),
                I = n("747867"),
                A = n("555914"),
                T = n("513472"),
                m = n("527660"),
                p = n("177508"),
                L = n("263673"),
                G = n("58622"),
                U = n("49111"),
                v = n("782340");

            function O(e) {
                let {
                    guild: t,
                    onSelect: l,
                    hideSettings: r
                } = e, o = t.id, O = g.default.getDefaultChannel(o), x = (0, M.useExpressionSourceGuildDataForGuildLeaveModal)(t), R = (0, u.useStateFromStores)([h.default], () => {
                    let e = h.default.getCurrentUser();
                    return s(null != e, "GuildContextMenu: user cannot be undefined"), t.isOwner(e)
                }, [t]), b = (0, G.default)({
                    guild: t,
                    source: U.InstantInviteSources.GUILD_CONTEXT_MENU,
                    channel: O
                }), H = (0, L.default)(o), j = (0, T.default)(t), y = (0, m.default)(t), D = (0, p.default)(t), F = (0, N.default)({
                    guildId: t.id,
                    userId: _.default.getId(),
                    analyticsLocation: {
                        page: U.AnalyticsPages.GUILD_CHANNEL,
                        section: U.AnalyticsSections.CHAT_USERNAME,
                        object: U.AnalyticsObjects.CONTEXT_MENU_ITEM
                    }
                }), P = (0, C.default)(t), V = (0, f.default)(t.id), w = (0, c.default)({
                    id: t.id,
                    label: v.default.Messages.COPY_ID_GUILD
                }), k = (0, A.default)(t, {
                    section: U.AnalyticsSections.GUILD_LIST
                }), B = (0, E.default)(t.id), Y = (0, I.default)(t), Z = t.hasFeature(U.GuildFeatures.HUB);

                function X() {
                    (0, i.openModal)(e => (0, a.jsx)(S.GuildLeaveConfirmModalContents, {
                        ...e,
                        guild: t,
                        discoverableGuildData: x
                    }))
                }
                return Z ? (0, a.jsxs)(i.Menu, {
                    navId: "guild-context",
                    onClose: d.closeContextMenu,
                    "aria-label": v.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    onSelect: l,
                    children: [(0, a.jsxs)(i.MenuGroup, {
                        children: [b, (0, a.jsx)(i.MenuItem, {
                            id: "privacy",
                            label: v.default.Messages.HUB_PRIVACY_SETTINGS,
                            action: () => (0, i.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("349406").then(n.bind(n, "349406"));
                                return n => (0, a.jsx)(e, {
                                    ...n,
                                    guild: t
                                })
                            })
                        }), F]
                    }), R ? null : (0, a.jsx)(i.MenuGroup, {
                        children: (0, a.jsx)(i.MenuItem, {
                            id: "leave-guild",
                            label: v.default.Messages.LEAVE_HUB,
                            action: X,
                            color: "danger"
                        })
                    }), (0, a.jsx)(i.MenuGroup, {
                        children: w
                    })]
                }) : (0, a.jsxs)(i.Menu, {
                    navId: "guild-context",
                    onClose: d.closeContextMenu,
                    "aria-label": v.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    onSelect: l,
                    children: [(0, a.jsx)(i.MenuGroup, {
                        children: k
                    }), (0, a.jsx)(i.MenuGroup, {
                        children: b
                    }), (0, a.jsxs)(i.MenuGroup, {
                        children: [j, __OVERLAY__ ? null : y, H, B]
                    }), (0, a.jsxs)(i.MenuGroup, {
                        children: [r ? null : D, __OVERLAY__ ? null : (0, a.jsx)(i.MenuItem, {
                            id: "privacy",
                            label: v.default.Messages.PRIVACY_SETTINGS,
                            action: () => (0, i.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("349406").then(n.bind(n, "349406"));
                                return n => (0, a.jsx)(e, {
                                    ...n,
                                    guild: t
                                })
                            })
                        }), F]
                    }), (0, a.jsxs)(i.MenuGroup, {
                        children: [P, V]
                    }), (0, a.jsxs)(i.MenuGroup, {
                        children: [Y, !R && (0, a.jsx)(i.MenuItem, {
                            id: "leave-guild",
                            label: v.default.Messages.LEAVE_SERVER,
                            action: X,
                            color: "danger"
                        })]
                    }), (0, a.jsx)(i.MenuGroup, {
                        children: w
                    })]
                })
            }

            function x(e) {
                let {
                    AnalyticsLocationProvider: t
                } = (0, o.default)(r.default.CONTEXT_MENU);
                return (0, a.jsx)(t, {
                    children: (0, a.jsx)(O, {
                        ...e
                    })
                })
            }
        },
        544955: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                s = n("77078"),
                u = n("957255"),
                i = n("49111"),
                d = n("695838"),
                r = n("782340");

            function o(e) {
                let t = (0, l.useStateFromStores)([u.default], () => u.default.can(i.Permissions.MANAGE_CHANNELS, e));
                return __OVERLAY__ ? null : e.id === d.FAVORITES_RAW_GUILD_ID ? (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(s.MenuItem, {
                        id: "create-category",
                        label: r.default.Messages.CREATE_CATEGORY,
                        action: () => (0, s.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("515680").then(n.bind(n, "515680"));
                            return t => (0, a.jsx)(e, {
                                ...t
                            })
                        })
                    })
                }) : t ? [(0, a.jsx)(s.MenuItem, {
                    id: "create-channel",
                    label: r.default.Messages.CREATE_CHANNEL,
                    action: () => (0, s.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("581354").then(n.bind(n, "581354"));
                        return n => (0, a.jsx)(t, {
                            ...n,
                            channelType: i.ChannelTypes.GUILD_TEXT,
                            guildId: e.id
                        })
                    })
                }, "create-channel"), (0, a.jsx)(s.MenuItem, {
                    id: "create-category",
                    label: r.default.Messages.CREATE_CATEGORY,
                    action: () => (0, s.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("581354").then(n.bind(n, "581354"));
                        return n => (0, a.jsx)(t, {
                            ...n,
                            channelType: i.ChannelTypes.GUILD_CATEGORY,
                            guildId: e.id
                        })
                    })
                }, "create-category")] : null
            }
        },
        555914: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                s = n("77078"),
                u = n("952451"),
                i = n("542827"),
                d = n("782340");

            function r(e, t) {
                let n = e.id,
                    r = (0, l.useStateFromStores)([u.default], () => u.default.getGuildHasUnreadIgnoreMuted(n), [n]);
                return (0, a.jsx)(s.MenuItem, {
                    id: "mark-guild-read",
                    label: d.default.Messages.MARK_AS_READ,
                    icon: void 0,
                    action: () => (0, i.default)([n], t.section),
                    disabled: !r
                })
            }
        },
        513472: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("866227"),
                s = n.n(l),
                u = n("446674"),
                i = n("77078"),
                d = n("519705"),
                r = n("531674"),
                o = n("319165"),
                c = n("282109"),
                f = n("782340");

            function M(e, t) {
                let n = null == e ? void 0 : e.id,
                    {
                        muted: l,
                        muteConfig: M
                    } = (0, u.useStateFromStoresObject)([c.default], () => ({
                        muted: null != n ? c.default.isMuted(n) : void 0,
                        muteConfig: null != n ? c.default.getMuteConfig(n) : void 0
                    }), [n]),
                    E = (0, o.useMutedUntilText)(M);
                return null == n ? null : l ? (0, a.jsx)(i.MenuItem, {
                    id: "unmute-guild",
                    label: f.default.Messages.UNMUTE_SERVER,
                    subtext: E,
                    action: () => d.default.updateGuildNotificationSettings(n, {
                        muted: !1
                    })
                }) : (0, a.jsx)(i.MenuItem, {
                    id: "mute-guild",
                    label: f.default.Messages.MUTE_SERVER,
                    action: () => d.default.updateGuildNotificationSettings(n, {
                        muted: !0
                    }),
                    children: (0, r.getMuteTimes)().map(e => {
                        let {
                            value: l,
                            label: u
                        } = e;
                        return (0, a.jsx)(i.MenuItem, {
                            id: "".concat(l),
                            label: u,
                            action: () => (function(e) {
                                if (null == n) return;
                                let a = e > 0 ? s().add(e, "second").toISOString() : null;
                                d.default.updateGuildNotificationSettings(n, {
                                    muted: !0,
                                    mute_config: {
                                        selected_time_window: e,
                                        end_time: a
                                    }
                                }, t)
                            })(l)
                        }, l)
                    })
                })
            }
        },
        527660: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                s = n("669491"),
                u = n("77078"),
                i = n("519705"),
                d = n("503950"),
                r = n("483226"),
                o = n("44574"),
                c = n("282109"),
                f = n("956089"),
                M = n("49111"),
                E = n("782340"),
                _ = n("460856");

            function g() {
                return [{
                    setting: M.UserNotificationSettings.ALL_MESSAGES,
                    label: E.default.Messages.FORM_LABEL_ALL_MESSAGES
                }, {
                    setting: M.UserNotificationSettings.ONLY_MENTIONS,
                    label: E.default.Messages.FORM_LABEL_ONLY_MENTIONS.format()
                }, {
                    setting: M.UserNotificationSettings.NO_MESSAGES,
                    label: E.default.Messages.FORM_LABEL_NOTHING
                }]
            }

            function h(e) {
                var t, h;
                let S = function(e) {
                        let {
                            suppressEveryone: t,
                            suppressRoles: n,
                            mobilePush: h,
                            messageNotifications: S,
                            notifyHighlights: N,
                            isGuildUnreadsEnabled: C
                        } = (0, l.useStateFromStoresObject)([c.default], () => ({
                            suppressEveryone: c.default.isSuppressEveryoneEnabled(e.id),
                            suppressRoles: c.default.isSuppressRolesEnabled(e.id),
                            mobilePush: c.default.isMobilePushEnabled(e.id),
                            messageNotifications: c.default.getMessageNotifications(e.id),
                            notifyHighlights: c.default.getNotifyHighlights(e.id),
                            isGuildUnreadsEnabled: c.default.isGuildUnreadSettingEnabled(e.id)
                        }), [e.id]), I = N === M.HighlightSettings.DISABLED, A = (0, d.default)(e.id), T = (0, o.useGuildUnreadsExperiment)();

                        function m(t) {
                            i.default.updateGuildNotificationSettings(e.id, t)
                        }
                        return (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(u.MenuGroup, {
                                children: g().map(e => {
                                    let {
                                        setting: t,
                                        label: n
                                    } = e;
                                    return (0, a.jsx)(u.MenuRadioItem, {
                                        group: "guild-notifications",
                                        id: "".concat(t),
                                        label: n,
                                        action: () => m({
                                            message_notifications: t
                                        }),
                                        checked: t === S
                                    }, t)
                                })
                            }), (0, a.jsxs)(u.MenuGroup, {
                                children: [T && (0, a.jsx)(u.MenuCheckboxItem, {
                                    id: "enable-unread-settings",
                                    label: (0, a.jsxs)(a.Fragment, {
                                        children: [E.default.Messages.FORM_LABEL_UNREAD_SETTINGS_OPT_IN, (0, a.jsx)(f.TextBadge, {
                                            text: E.default.Messages.BETA,
                                            color: s.default.unsafe_rawColors.BRAND_500.css,
                                            className: _.betaBadge
                                        })]
                                    }),
                                    action: () => {
                                        (0, r.setGuildUnreadSetting)(e.id, !C)
                                    },
                                    checked: C
                                }), (0, a.jsx)(u.MenuCheckboxItem, {
                                    id: "suppress-everyone",
                                    label: E.default.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format(),
                                    action: () => m({
                                        suppress_everyone: !t
                                    }),
                                    checked: t
                                }), (0, a.jsx)(u.MenuCheckboxItem, {
                                    id: "suppress-roles",
                                    label: E.default.Messages.FORM_LABEL_SUPPRESS_ROLES,
                                    action: () => m({
                                        suppress_roles: !n
                                    }),
                                    checked: n
                                }), (0, a.jsx)(u.MenuCheckboxItem, {
                                    id: "suppress-highlights",
                                    label: E.default.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS,
                                    action: () => {
                                        m({
                                            notify_highlights: I ? M.HighlightSettings.ENABLED : M.HighlightSettings.DISABLED
                                        })
                                    },
                                    checked: I
                                }), A]
                            }), (0, a.jsx)(u.MenuGroup, {
                                children: (0, a.jsx)(u.MenuCheckboxItem, {
                                    id: "mobile-push",
                                    label: E.default.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS,
                                    action: () => m({
                                        mobile_push: !h
                                    }),
                                    checked: h
                                })
                            })]
                        })
                    }(e),
                    N = (0, l.useStateFromStores)([c.default], () => c.default.getMessageNotifications(e.id), [e.id]),
                    C = null === (h = g()) || void 0 === h ? void 0 : null === (t = h.find(e => {
                        let {
                            setting: t
                        } = e;
                        return t === N
                    })) || void 0 === t ? void 0 : t.label;
                return null != S ? (0, a.jsx)(u.MenuItem, {
                    id: "guild-notifications",
                    label: E.default.Messages.NOTIFICATION_SETTINGS,
                    subtext: C,
                    action: () => (0, u.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("747593").then(n.bind(n, "747593"));
                        return n => (0, a.jsx)(t, {
                            ...n,
                            guildId: e.id
                        })
                    }),
                    children: S
                }) : null
            }
        },
        177508: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                s = n("77078"),
                u = n("412707"),
                i = n("838093"),
                d = n("592407"),
                r = n("148475"),
                o = n("725621"),
                c = n("923959"),
                f = n("49111"),
                M = n("782340");

            function E(e) {
                function t(t) {
                    d.default.open(e.id, t)
                }
                let n = (0, l.useStateFromStoresArray)([c.default], () => c.default.getChannels(e.id).SELECTABLE, [e]),
                    E = (0, r.default)(e);
                return __OVERLAY__ || !E ? null : (0, a.jsx)(s.MenuItem, {
                    id: "guild-settings",
                    label: M.default.Messages.SERVER_SETTINGS,
                    action: () => t(),
                    children: (0, o.getGuildSettingsSections)(e, n).map(n => {
                        let {
                            section: l,
                            label: d
                        } = n;
                        if (null == d) return null;
                        switch (l) {
                            case f.GuildSettingsSections.DELETE:
                                return null;
                            case f.GuildSettingsSections.COMMUNITY:
                                return (0, a.jsx)(s.MenuItem, {
                                    id: l,
                                    action: () => t(l),
                                    label: M.default.Messages.GUILD_SETTINGS_COMMUNITY
                                }, l);
                            case f.GuildSettingsSections.APP_DIRECTORY:
                                return (0, a.jsx)(s.MenuItem, {
                                    id: l,
                                    action: () => {
                                        (0, i.goToAppDirectory)({
                                            guildId: e.id,
                                            entrypoint: {
                                                name: u.ApplicationDirectoryEntrypointNames.GUILD_CONTEXT_MENU
                                            }
                                        })
                                    },
                                    label: d
                                }, l);
                            default:
                                return (0, a.jsx)(s.MenuItem, {
                                    id: l,
                                    action: () => t(l),
                                    label: d
                                }, l)
                        }
                    })
                })
            }
        },
        263673: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                s = n("77078"),
                u = n("126501"),
                i = n("282109"),
                d = n("782340");

            function r(e) {
                let t = (0, l.useStateFromStores)([i.default], () => i.default.isGuildCollapsed(e), [e]);
                return (0, a.jsx)(s.MenuCheckboxItem, {
                    id: "hide-muted-channels",
                    label: d.default.Messages.HIDE_MUTED_CHANNELS,
                    action: () => u.default.toggleCollapseGuild(e),
                    checked: t
                })
            }
        },
        334683: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("222007");
            var a = n("884691"),
                l = n("446674"),
                s = n("817963"),
                u = n("923959"),
                i = n("305961"),
                d = n("957255"),
                r = n("49111"),
                o = (e, t) => {
                    let n = (0, l.useStateFromStores)([i.default], () => i.default.getGuild(e), [e]),
                        {
                            canCreateGuildEvent: o
                        } = (0, s.useManageResourcePermissions)(n),
                        c = (0, l.useStateFromStores)([u.default], () => u.default.getChannels(e)[u.GUILD_VOCAL_CHANNELS_KEY], [e]),
                        f = a.useMemo(() => null != t ? c.filter(e => {
                            let {
                                channel: n
                            } = e;
                            return n.type === t
                        }) : c, [c, t]),
                        M = (0, l.useStateFromStores)([d.default], () => {
                            if (d.default.can(r.Permissions.ADMINISTRATOR, n) || o) return !0;
                            for (let {
                                    channel: e
                                }
                                of f) {
                                let {
                                    canCreateGuildEvent: t
                                } = (0, s.getManageResourcePermissions)(e);
                                if (t) return !0
                            }
                            return !1
                        }, [f, n, o]);
                    return M
                }
        },
        558286: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useGuildEventModalStore: function() {
                    return l
                }
            });
            var a = n("308503");
            let l = (0, a.default)(e => ({
                canCloseModal: !0,
                onUpdateCanCloseModal(t) {
                    e({
                        canCloseModal: t
                    })
                }
            }))
        },
        503950: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                s = n("77078"),
                u = n("519705"),
                i = n("282109"),
                d = n("782340");

            function r(e) {
                let t = (0, l.useStateFromStores)([i.default], () => i.default.isMuteScheduledEventsEnabled(e), [e]);
                return (0, a.jsx)(s.MenuCheckboxItem, {
                    id: "mute-events",
                    label: d.default.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS,
                    action: () => {
                        var n;
                        return n = {
                            mute_scheduled_events: !t
                        }, void u.default.updateGuildNotificationSettings(e, n)
                    },
                    checked: t
                })
            }
        },
        842672: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("77078"),
                l = n("244201"),
                s = n("558286"),
                u = n("49111");
            let i = "guild-event-modal";
            var d = () => {
                let e = (0, l.useAppContext)(),
                    t = e === u.AppContext.POPOUT ? a.POPOUT_MODAL_CONTEXT : a.DEFAULT_MODAL_CONTEXT;
                return {
                    modalKey: i,
                    contextKey: t,
                    onCloseRequest: () => {
                        s.useGuildEventModalStore.getState().canCloseModal && (0, a.closeModal)(i, t)
                    }
                }
            }
        },
        148475: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("446674"),
                l = n("957255"),
                s = n("49111");

            function u(e) {
                let {
                    canManageGuild: t,
                    canManageRoles: n,
                    canBanMembers: u,
                    canManageNicknames: i,
                    canCreateEmojisAndStickers: d,
                    canManageEmojisAndStickers: r,
                    canManageWebhooks: o,
                    canViewAuditLog: c
                } = (0, a.useStateFromStoresObject)([l.default], () => ({
                    canManageGuild: l.default.can(s.Permissions.MANAGE_GUILD, e),
                    canManageRoles: l.default.can(s.Permissions.MANAGE_ROLES, e),
                    canBanMembers: l.default.can(s.Permissions.BAN_MEMBERS, e),
                    canManageNicknames: l.default.can(s.Permissions.MANAGE_NICKNAMES, e),
                    canCreateEmojisAndStickers: l.default.can(s.Permissions.CREATE_GUILD_EXPRESSIONS, e),
                    canManageEmojisAndStickers: l.default.can(s.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
                    canManageWebhooks: l.default.can(s.Permissions.MANAGE_WEBHOOKS, e),
                    canViewAuditLog: l.default.can(s.Permissions.VIEW_AUDIT_LOG, e)
                }), [e]);
                return t || n || u || i || d || r || o || c
            }
        },
        242757: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canViewInviteModal: function() {
                    return l
                }
            });
            var a = n("49111");

            function l(e, t, n, l) {
                let s = null != n ? n : t,
                    u = null != s && e.can(a.Permissions.CREATE_INSTANT_INVITE, s);
                return u || null != t && null != t.vanityURLCode || (null == l ? void 0 : l.invite_code) != null
            }
        },
        76539: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("469563"),
                s = n("715072"),
                u = n("75196"),
                i = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: s,
                        ...i
                    } = e;
                    return 16 === t || 16 === n ? (0, a.jsxs)("svg", {
                        ...(0, u.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        children: [(0, a.jsx)("path", {
                            className: s,
                            fill: l,
                            d: "M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"
                        }), (0, a.jsx)("path", {
                            className: s,
                            fill: l,
                            d: "M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z"
                        }), (0, a.jsx)("path", {
                            className: s,
                            fill: l,
                            d: "M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z"
                        })]
                    }) : (0, a.jsx)("svg", {
                        ...(0, u.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, a.jsx)("path", {
                            className: s,
                            fill: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M21 3H24V5H21V8H19V5H16V3H19V0H21V3ZM10 12C12.205 12 14 10.205 14 8C14 5.795 12.205 4 10 4C7.795 4 6 5.795 6 8C6 10.205 7.795 12 10 12ZM10 13C5.289 13 2 15.467 2 19V20H18V19C18 15.467 14.711 13 10 13Z"
                        })
                    })
                }, s.UserPlusIcon)
        }
    }
]);