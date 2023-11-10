(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["55358"], {
        583397: function(e, t, n) {
            "use strict";
            e.exports = n.p + "c133c9df9ee4552c188a.svg"
        },
        378675: function(e, t, n) {
            "use strict";
            e.exports = n.p + "d063b4bf17f1fee95f05.svg"
        },
        642950: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                u = n("77078"),
                d = n("54239"),
                r = n("79112"),
                o = n("49111"),
                c = n("782340"),
                f = n("519409");
            class E extends s.Component {
                render() {
                    return (0, a.jsxs)("div", {
                        className: f.streamerModeEnabled,
                        children: [(0, a.jsx)("div", {
                            className: f.streamerModeEnabledImage
                        }), (0, a.jsx)(u.Clickable, {
                            className: i(f.streamerModeEnabledBtn, {
                                [f.disabled]: this.props.disableButton
                            }),
                            onClick: this.handleClick,
                            children: c.default.Messages.STREAMER_MODE_ENABLED
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.handleClick = () => {
                        !this.props.disableButton && ((0, d.pushLayer)(o.Layers.USER_SETTINGS), r.default.setSection(o.UserSettingsSections.STREAMER_MODE))
                    }
                }
            }
            E.defaultProps = {
                disableButton: !1
            };
            var M = E
        },
        7037: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ArrowSmallUpIcon: function() {
                    return i
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("669491"),
                l = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...d
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, l.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M12.707 3.293a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L11 6.414V20a1 1 0 1 0 2 0V6.414l3.293 3.293a1 1 0 0 0 1.414-1.414l-5-5Z",
                        className: u
                    })
                })
            }
        },
        263436: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                LockUnlockedIcon: function() {
                    return i
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("669491"),
                l = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...d
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, l.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M12 1a4.985 4.985 0 0 0-3.308 1.25 1 1 0 0 0 1.324 1.5A3 3 0 0 1 15 6v2H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3h-2V6a5 5 0 0 0-5-5Zm1 14.732A2 2 0 0 0 12 12a2 2 0 0 0-1 3.732V17a1 1 0 1 0 2 0v-1.268Z",
                        clipRule: "evenodd",
                        className: u
                    })
                })
            }
        },
        715072: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UserPlusIcon: function() {
                    return i
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("669491"),
                l = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...d
                } = e;
                return (0, a.jsxs)("svg", {
                    ...(0, l.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, a.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
                        className: u
                    }), (0, a.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M16.828 12.93c.259-.271.259-.746-.077-.915A9.493 9.493 0 0 0 12.467 11h-.934A9.533 9.533 0 0 0 2 20.533C2 21.343 2.657 22 3.467 22h.22c.24 0 .445-.17.504-.403.285-1.113.84-2.17 1.32-2.91.134-.208.43-.094.405.154l-.261 2.61a.5.5 0 0 0 .497.549h7.64c.123 0 .17-.31.06-.363C12.819 21.14 12 20.224 12 19a3 3 0 0 1 3-3h.5a.5.5 0 0 0 .5-.5V15c0-.802.315-1.53.828-2.07ZM12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
                        className: u
                    })]
                })
            }
        },
        531674: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getMuteTimes: function() {
                    return _
                },
                default: function() {
                    return S
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var s = n("866227"),
                l = n.n(s),
                i = n("446674"),
                u = n("77078"),
                d = n("820542"),
                r = n("519705"),
                o = n("319165"),
                c = n("282109"),
                f = n("679653"),
                E = n("49111"),
                M = n("468200"),
                g = n("782340");
            let _ = () => [{
                    value: M.MuteUntilSeconds.MINUTES_15,
                    label: g.default.Messages.MUTE_DURATION_15_MINUTES
                }, {
                    value: M.MuteUntilSeconds.HOURS_1,
                    label: g.default.Messages.MUTE_DURATION_1_HOUR
                }, {
                    value: M.MuteUntilSeconds.HOURS_3,
                    label: g.default.Messages.MUTE_DURATION_3_HOURS
                }, {
                    value: M.MuteUntilSeconds.HOURS_8,
                    label: g.default.Messages.MUTE_DURATION_8_HOURS
                }, {
                    value: M.MuteUntilSeconds.HOURS_24,
                    label: g.default.Messages.MUTE_DURATION_24_HOURS
                }, {
                    value: M.MuteUntilSeconds.ALWAYS,
                    label: g.default.Messages.MUTE_DURATION_ALWAYS
                }],
                h = e => {
                    let t = e > 0 ? l().add(e, "second").toISOString() : null;
                    return {
                        muted: !0,
                        mute_config: {
                            selected_time_window: e,
                            end_time: t
                        }
                    }
                };

            function S(e, t) {
                let [n, s] = (0, i.useStateFromStoresArray)([c.default], () => [c.default.isChannelMuted(e.guild_id, e.id), c.default.getChannelMuteConfig(e.guild_id, e.id)]), l = (0, o.useMutedUntilText)(s), M = (0, f.default)(e, !0);

                function S(t) {
                    t && e.type === E.ChannelTypes.GUILD_CATEGORY && (0, d.categoryCollapse)(e.id), r.default.updateChannelOverrideSettings(e.guild_id, e.id, {
                        muted: t
                    })
                }
                let p = g.default.Messages.MUTE_CHANNEL_GENERIC,
                    m = g.default.Messages.UNMUTE_CHANNEL_GENERIC;
                switch (e.type) {
                    case E.ChannelTypes.GUILD_CATEGORY:
                        p = g.default.Messages.MUTE_CATEGORY, m = g.default.Messages.UNMUTE_CATEGORY;
                        break;
                    case E.ChannelTypes.GROUP_DM:
                        p = g.default.Messages.MUTE_CONVERSATION, m = g.default.Messages.UNMUTE_CONVERSATION;
                        break;
                    case E.ChannelTypes.DM:
                        p = g.default.Messages.MUTE_CHANNEL.format({
                            name: M
                        }), m = g.default.Messages.UNMUTE_CHANNEL.format({
                            name: M
                        });
                        break;
                    default:
                        p = g.default.Messages.MUTE_CHANNEL_GENERIC, m = g.default.Messages.UNMUTE_CHANNEL_GENERIC
                }
                return n ? (0, a.jsx)(u.MenuItem, {
                    id: "unmute-channel",
                    label: m,
                    subtext: l,
                    action: () => S(!1)
                }) : (0, a.jsx)(u.MenuItem, {
                    id: "mute-channel",
                    label: p,
                    action: () => S(!0),
                    children: _().map(n => {
                        let {
                            value: s,
                            label: l
                        } = n;
                        return (0, a.jsx)(u.MenuItem, {
                            id: "".concat(s),
                            label: l,
                            action: () => (function(n) {
                                e.type === E.ChannelTypes.GUILD_CATEGORY && (0, d.categoryCollapse)(e.id);
                                let a = h(n);
                                r.default.updateChannelOverrideSettings(e.guild_id, e.id, a, t)
                            })(s)
                        }, s)
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
                s = n("913144"),
                l = n("819689"),
                i = n("267363"),
                u = n("716241"),
                d = n("599110"),
                r = n("49111");
            async function o(e) {
                s.default.dispatch({
                    type: "CHANNEL_HIGHLIGHTS_FETCH_START",
                    guildId: e
                });
                let t = await a.default.get({
                        url: r.Endpoints.CHANNEL_HIGHLIGHTS(e)
                    }),
                    n = t.body;
                await s.default.dispatch({
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
                    highlightedMessageIds: s,
                    numHighlightsVisited: o
                } = e;
                await l.default.jumpToMessage({
                    channelId: n,
                    messageId: a,
                    flash: !0
                }), d.default.track(r.AnalyticEvents.CHANNEL_HIGHLIGHTS_ACKED, {
                    ...(0, u.collectGuildAnalyticsMetadata)(t),
                    ...(0, u.collectChannelAnalyticsMetadataFromId)(n),
                    message_id: a,
                    index: o,
                    ack_type: "navigator"
                });
                let c = s[o - 1];
                return null != c && i.ack(n, !0, !1, c), Promise.resolve()
            }
        },
        374705: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("627445"),
                l = n.n(s),
                i = n("446674"),
                u = n("77078"),
                d = n("272030"),
                r = n("812204"),
                o = n("685665"),
                c = n("861370"),
                f = n("255812"),
                E = n("529932"),
                M = n("724026"),
                g = n("271938"),
                _ = n("923959"),
                h = n("697218"),
                S = n("578411"),
                p = n("230947"),
                m = n("544955"),
                I = n("747867"),
                N = n("555914"),
                T = n("513472"),
                A = n("527660"),
                C = n("177508"),
                b = n("263673"),
                v = n("58622"),
                x = n("49111"),
                L = n("782340");

            function U(e) {
                let {
                    guild: t,
                    onSelect: s,
                    hideSettings: r
                } = e, o = t.id, U = _.default.getDefaultChannel(o), R = (0, E.useExpressionSourceGuildDataForGuildLeaveModal)(t), G = (0, i.useStateFromStores)([h.default], () => {
                    let e = h.default.getCurrentUser();
                    return l(null != e, "GuildContextMenu: user cannot be undefined"), t.isOwner(e)
                }, [t]), j = (0, v.default)({
                    guild: t,
                    source: x.InstantInviteSources.GUILD_CONTEXT_MENU,
                    channel: U
                }), O = (0, b.default)(o), H = (0, T.default)(t), y = (0, A.default)(t), D = (0, C.default)(t), w = (0, p.default)({
                    guildId: t.id,
                    userId: g.default.getId(),
                    analyticsLocation: {
                        page: x.AnalyticsPages.GUILD_CHANNEL,
                        section: x.AnalyticsSections.CHAT_USERNAME,
                        object: x.AnalyticsObjects.CONTEXT_MENU_ITEM
                    }
                }), P = (0, m.default)(t), V = (0, f.default)(t.id), k = (0, c.default)({
                    id: t.id,
                    label: L.default.Messages.COPY_ID_GUILD
                }), B = (0, N.default)(t, {
                    section: x.AnalyticsSections.GUILD_LIST
                }), F = (0, M.default)(t.id), Y = (0, I.default)(t), W = t.hasFeature(x.GuildFeatures.HUB);

                function Z() {
                    (0, u.openModal)(e => (0, a.jsx)(S.GuildLeaveConfirmModalContents, {
                        ...e,
                        guild: t,
                        discoverableGuildData: R
                    }))
                }
                return W ? (0, a.jsxs)(u.Menu, {
                    navId: "guild-context",
                    onClose: d.closeContextMenu,
                    "aria-label": L.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    onSelect: s,
                    children: [(0, a.jsxs)(u.MenuGroup, {
                        children: [j, (0, a.jsx)(u.MenuItem, {
                            id: "privacy",
                            label: L.default.Messages.HUB_PRIVACY_SETTINGS,
                            action: () => (0, u.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("349406").then(n.bind(n, "349406"));
                                return n => (0, a.jsx)(e, {
                                    ...n,
                                    guild: t
                                })
                            })
                        }), w]
                    }), G ? null : (0, a.jsx)(u.MenuGroup, {
                        children: (0, a.jsx)(u.MenuItem, {
                            id: "leave-guild",
                            label: L.default.Messages.LEAVE_HUB,
                            action: Z,
                            color: "danger"
                        })
                    }), (0, a.jsx)(u.MenuGroup, {
                        children: k
                    })]
                }) : (0, a.jsxs)(u.Menu, {
                    navId: "guild-context",
                    onClose: d.closeContextMenu,
                    "aria-label": L.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    onSelect: s,
                    children: [(0, a.jsx)(u.MenuGroup, {
                        children: B
                    }), (0, a.jsx)(u.MenuGroup, {
                        children: j
                    }), (0, a.jsxs)(u.MenuGroup, {
                        children: [H, __OVERLAY__ ? null : y, O, F]
                    }), (0, a.jsxs)(u.MenuGroup, {
                        children: [r ? null : D, __OVERLAY__ ? null : (0, a.jsx)(u.MenuItem, {
                            id: "privacy",
                            label: L.default.Messages.PRIVACY_SETTINGS,
                            action: () => (0, u.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("349406").then(n.bind(n, "349406"));
                                return n => (0, a.jsx)(e, {
                                    ...n,
                                    guild: t
                                })
                            })
                        }), w]
                    }), (0, a.jsxs)(u.MenuGroup, {
                        children: [P, V]
                    }), (0, a.jsxs)(u.MenuGroup, {
                        children: [Y, !G && (0, a.jsx)(u.MenuItem, {
                            id: "leave-guild",
                            label: L.default.Messages.LEAVE_SERVER,
                            action: Z,
                            color: "danger"
                        })]
                    }), (0, a.jsx)(u.MenuGroup, {
                        children: k
                    })]
                })
            }

            function R(e) {
                let {
                    AnalyticsLocationProvider: t
                } = (0, o.default)(r.default.CONTEXT_MENU);
                return (0, a.jsx)(t, {
                    children: (0, a.jsx)(U, {
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
            var s = n("446674"),
                l = n("77078"),
                i = n("957255"),
                u = n("49111"),
                d = n("695838"),
                r = n("782340");

            function o(e) {
                let t = (0, s.useStateFromStores)([i.default], () => i.default.can(u.Permissions.MANAGE_CHANNELS, e));
                return __OVERLAY__ ? null : e.id === d.FAVORITES_RAW_GUILD_ID ? (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(l.MenuItem, {
                        id: "create-category",
                        label: r.default.Messages.CREATE_CATEGORY,
                        action: () => (0, l.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("515680").then(n.bind(n, "515680"));
                            return t => (0, a.jsx)(e, {
                                ...t
                            })
                        })
                    })
                }) : t ? [(0, a.jsx)(l.MenuItem, {
                    id: "create-channel",
                    label: r.default.Messages.CREATE_CHANNEL,
                    action: () => (0, l.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("581354").then(n.bind(n, "581354"));
                        return n => (0, a.jsx)(t, {
                            ...n,
                            channelType: u.ChannelTypes.GUILD_TEXT,
                            guildId: e.id
                        })
                    })
                }, "create-channel"), (0, a.jsx)(l.MenuItem, {
                    id: "create-category",
                    label: r.default.Messages.CREATE_CATEGORY,
                    action: () => (0, l.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("581354").then(n.bind(n, "581354"));
                        return n => (0, a.jsx)(t, {
                            ...n,
                            channelType: u.ChannelTypes.GUILD_CATEGORY,
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
            var s = n("446674"),
                l = n("77078"),
                i = n("952451"),
                u = n("542827"),
                d = n("782340");

            function r(e, t) {
                let n = e.id,
                    r = (0, s.useStateFromStores)([i.default], () => i.default.getGuildHasUnreadIgnoreMuted(n), [n]);
                return (0, a.jsx)(l.MenuItem, {
                    id: "mark-guild-read",
                    label: d.default.Messages.MARK_AS_READ,
                    icon: void 0,
                    action: () => (0, u.default)([n], t.section),
                    disabled: !r
                })
            }
        },
        513472: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("866227"),
                l = n.n(s),
                i = n("446674"),
                u = n("77078"),
                d = n("519705"),
                r = n("531674"),
                o = n("319165"),
                c = n("282109"),
                f = n("782340");

            function E(e, t) {
                let n = null == e ? void 0 : e.id,
                    {
                        muted: s,
                        muteConfig: E
                    } = (0, i.useStateFromStoresObject)([c.default], () => ({
                        muted: null != n ? c.default.isMuted(n) : void 0,
                        muteConfig: null != n ? c.default.getMuteConfig(n) : void 0
                    }), [n]),
                    M = (0, o.useMutedUntilText)(E);
                return null == n ? null : s ? (0, a.jsx)(u.MenuItem, {
                    id: "unmute-guild",
                    label: f.default.Messages.UNMUTE_SERVER,
                    subtext: M,
                    action: () => d.default.updateGuildNotificationSettings(n, {
                        muted: !1
                    })
                }) : (0, a.jsx)(u.MenuItem, {
                    id: "mute-guild",
                    label: f.default.Messages.MUTE_SERVER,
                    action: () => d.default.updateGuildNotificationSettings(n, {
                        muted: !0
                    }),
                    children: (0, r.getMuteTimes)().map(e => {
                        let {
                            value: s,
                            label: i
                        } = e;
                        return (0, a.jsx)(u.MenuItem, {
                            id: "".concat(s),
                            label: i,
                            action: () => (function(e) {
                                if (null == n) return;
                                let a = e > 0 ? l().add(e, "second").toISOString() : null;
                                d.default.updateGuildNotificationSettings(n, {
                                    muted: !0,
                                    mute_config: {
                                        selected_time_window: e,
                                        end_time: a
                                    }
                                }, t)
                            })(s)
                        }, s)
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
            var s = n("446674"),
                l = n("669491"),
                i = n("77078"),
                u = n("519705"),
                d = n("503950"),
                r = n("483226"),
                o = n("44574"),
                c = n("282109"),
                f = n("956089"),
                E = n("49111"),
                M = n("782340"),
                g = n("460856");

            function _() {
                return [{
                    setting: E.UserNotificationSettings.ALL_MESSAGES,
                    label: M.default.Messages.FORM_LABEL_ALL_MESSAGES
                }, {
                    setting: E.UserNotificationSettings.ONLY_MENTIONS,
                    label: M.default.Messages.FORM_LABEL_ONLY_MENTIONS.format()
                }, {
                    setting: E.UserNotificationSettings.NO_MESSAGES,
                    label: M.default.Messages.FORM_LABEL_NOTHING
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
                            notifyHighlights: p,
                            isGuildUnreadsEnabled: m
                        } = (0, s.useStateFromStoresObject)([c.default], () => ({
                            suppressEveryone: c.default.isSuppressEveryoneEnabled(e.id),
                            suppressRoles: c.default.isSuppressRolesEnabled(e.id),
                            mobilePush: c.default.isMobilePushEnabled(e.id),
                            messageNotifications: c.default.getMessageNotifications(e.id),
                            notifyHighlights: c.default.getNotifyHighlights(e.id),
                            isGuildUnreadsEnabled: c.default.isGuildUnreadSettingEnabled(e.id)
                        }), [e.id]), I = p === E.HighlightSettings.DISABLED, N = (0, d.default)(e.id), T = (0, o.useGuildUnreadsExperiment)();

                        function A(t) {
                            u.default.updateGuildNotificationSettings(e.id, t)
                        }
                        return (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(i.MenuGroup, {
                                children: _().map(e => {
                                    let {
                                        setting: t,
                                        label: n
                                    } = e;
                                    return (0, a.jsx)(i.MenuRadioItem, {
                                        group: "guild-notifications",
                                        id: "".concat(t),
                                        label: n,
                                        action: () => A({
                                            message_notifications: t
                                        }),
                                        checked: t === S
                                    }, t)
                                })
                            }), (0, a.jsxs)(i.MenuGroup, {
                                children: [T && (0, a.jsx)(i.MenuCheckboxItem, {
                                    id: "enable-unread-settings",
                                    label: (0, a.jsxs)(a.Fragment, {
                                        children: [M.default.Messages.FORM_LABEL_UNREAD_SETTINGS_OPT_IN, (0, a.jsx)(f.TextBadge, {
                                            text: M.default.Messages.BETA,
                                            color: l.default.unsafe_rawColors.BRAND_500.css,
                                            className: g.betaBadge
                                        })]
                                    }),
                                    action: () => {
                                        (0, r.setGuildUnreadSetting)(e.id, !m)
                                    },
                                    checked: m
                                }), (0, a.jsx)(i.MenuCheckboxItem, {
                                    id: "suppress-everyone",
                                    label: M.default.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format(),
                                    action: () => A({
                                        suppress_everyone: !t
                                    }),
                                    checked: t
                                }), (0, a.jsx)(i.MenuCheckboxItem, {
                                    id: "suppress-roles",
                                    label: M.default.Messages.FORM_LABEL_SUPPRESS_ROLES,
                                    action: () => A({
                                        suppress_roles: !n
                                    }),
                                    checked: n
                                }), (0, a.jsx)(i.MenuCheckboxItem, {
                                    id: "suppress-highlights",
                                    label: M.default.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS,
                                    action: () => {
                                        A({
                                            notify_highlights: I ? E.HighlightSettings.ENABLED : E.HighlightSettings.DISABLED
                                        })
                                    },
                                    checked: I
                                }), N]
                            }), (0, a.jsx)(i.MenuGroup, {
                                children: (0, a.jsx)(i.MenuCheckboxItem, {
                                    id: "mobile-push",
                                    label: M.default.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS,
                                    action: () => A({
                                        mobile_push: !h
                                    }),
                                    checked: h
                                })
                            })]
                        })
                    }(e),
                    p = (0, s.useStateFromStores)([c.default], () => c.default.getMessageNotifications(e.id), [e.id]),
                    m = null === (h = _()) || void 0 === h ? void 0 : null === (t = h.find(e => {
                        let {
                            setting: t
                        } = e;
                        return t === p
                    })) || void 0 === t ? void 0 : t.label;
                return null != S ? (0, a.jsx)(i.MenuItem, {
                    id: "guild-notifications",
                    label: M.default.Messages.NOTIFICATION_SETTINGS,
                    subtext: m,
                    action: () => (0, i.openModalLazy)(async () => {
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
                    return M
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("446674"),
                l = n("77078"),
                i = n("412707"),
                u = n("838093"),
                d = n("592407"),
                r = n("148475"),
                o = n("725621"),
                c = n("923959"),
                f = n("49111"),
                E = n("782340");

            function M(e) {
                function t(t) {
                    d.default.open(e.id, t)
                }
                let n = (0, s.useStateFromStoresArray)([c.default], () => c.default.getChannels(e.id).SELECTABLE, [e]),
                    M = (0, r.default)(e);
                return __OVERLAY__ || !M ? null : (0, a.jsx)(l.MenuItem, {
                    id: "guild-settings",
                    label: E.default.Messages.SERVER_SETTINGS,
                    action: () => t(),
                    children: (0, o.getGuildSettingsSections)(e, n).map(n => {
                        let {
                            section: s,
                            label: d
                        } = n;
                        if (null == d) return null;
                        switch (s) {
                            case f.GuildSettingsSections.DELETE:
                                return null;
                            case f.GuildSettingsSections.COMMUNITY:
                                return (0, a.jsx)(l.MenuItem, {
                                    id: s,
                                    action: () => t(s),
                                    label: E.default.Messages.GUILD_SETTINGS_COMMUNITY
                                }, s);
                            case f.GuildSettingsSections.APP_DIRECTORY:
                                return (0, a.jsx)(l.MenuItem, {
                                    id: s,
                                    action: () => {
                                        (0, u.goToAppDirectory)({
                                            guildId: e.id,
                                            entrypoint: {
                                                name: i.ApplicationDirectoryEntrypointNames.GUILD_CONTEXT_MENU
                                            }
                                        })
                                    },
                                    label: d
                                }, s);
                            default:
                                return (0, a.jsx)(l.MenuItem, {
                                    id: s,
                                    action: () => t(s),
                                    label: d
                                }, s)
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
            var s = n("446674"),
                l = n("77078"),
                i = n("126501"),
                u = n("282109"),
                d = n("782340");

            function r(e) {
                let t = (0, s.useStateFromStores)([u.default], () => u.default.isGuildCollapsed(e), [e]);
                return (0, a.jsx)(l.MenuCheckboxItem, {
                    id: "hide-muted-channels",
                    label: d.default.Messages.HIDE_MUTED_CHANNELS,
                    action: () => i.default.toggleCollapseGuild(e),
                    checked: t
                })
            }
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
            var s = n("446674"),
                l = n("77078"),
                i = n("519705"),
                u = n("282109"),
                d = n("782340");

            function r(e) {
                let t = (0, s.useStateFromStores)([u.default], () => u.default.isMuteScheduledEventsEnabled(e), [e]);
                return (0, a.jsx)(l.MenuCheckboxItem, {
                    id: "mute-events",
                    label: d.default.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS,
                    action: () => {
                        var n;
                        return n = {
                            mute_scheduled_events: !t
                        }, void i.default.updateGuildNotificationSettings(e, n)
                    },
                    checked: t
                })
            }
        },
        148475: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("446674"),
                s = n("957255"),
                l = n("49111");

            function i(e) {
                let {
                    canManageGuild: t,
                    canManageRoles: n,
                    canBanMembers: i,
                    canManageNicknames: u,
                    canCreateEmojisAndStickers: d,
                    canManageEmojisAndStickers: r,
                    canManageWebhooks: o,
                    canViewAuditLog: c
                } = (0, a.useStateFromStoresObject)([s.default], () => ({
                    canManageGuild: s.default.can(l.Permissions.MANAGE_GUILD, e),
                    canManageRoles: s.default.can(l.Permissions.MANAGE_ROLES, e),
                    canBanMembers: s.default.can(l.Permissions.BAN_MEMBERS, e),
                    canManageNicknames: s.default.can(l.Permissions.MANAGE_NICKNAMES, e),
                    canCreateEmojisAndStickers: s.default.can(l.Permissions.CREATE_GUILD_EXPRESSIONS, e),
                    canManageEmojisAndStickers: s.default.can(l.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
                    canManageWebhooks: s.default.can(l.Permissions.MANAGE_WEBHOOKS, e),
                    canViewAuditLog: s.default.can(l.Permissions.VIEW_AUDIT_LOG, e)
                }), [e]);
                return t || n || i || u || d || r || o || c
            }
        },
        242757: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canViewInviteModal: function() {
                    return s
                }
            });
            var a = n("49111");

            function s(e, t, n, s) {
                let l = null != n ? n : t,
                    i = null != l && e.can(a.Permissions.CREATE_INSTANT_INVITE, l);
                return i || null != t && null != t.vanityURLCode || (null == s ? void 0 : s.invite_code) != null
            }
        },
        959905: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useLocalizedPromoQuery: function() {
                    return l
                }
            });
            var a = n("446674"),
                s = n("160299");

            function l() {
                let {
                    localizedPricingPromo: e,
                    hasError: t
                } = (0, a.useStateFromStoresObject)([s.default], () => ({
                    localizedPricingPromo: s.default.localizedPricingPromo,
                    hasError: s.default.localizedPricingPromoHasError
                }));
                return t ? null : e
            }
        },
        485138: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useTrackLocalizedPricingPromoImpression: function() {
                    return l
                }
            });
            var a = n("759843"),
                s = n("428958");

            function l(e, t) {
                (0, s.default)({
                    type: a.ImpressionTypes.VIEW,
                    name: a.ImpressionNames.LOCALIZED_PRICING_UPSELL_VIEWED,
                    properties: {
                        country_code: t,
                        action_location: e
                    }
                })
            }
        },
        137215: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                u = n("546671"),
                d = n("341417");
            let r = {
                    UP: "up",
                    RIGHT: "right",
                    DOWN: "down",
                    LEFT: "left"
                },
                o = {
                    [r.UP]: d.up,
                    [r.RIGHT]: d.right,
                    [r.DOWN]: d.down,
                    [r.LEFT]: d.left
                };
            class c extends s.PureComponent {
                render() {
                    let {
                        direction: e,
                        className: t
                    } = this.props;
                    return (0, a.jsx)(u.default, {
                        className: i(d.arrow, t, {
                            [o[e]]: !0
                        })
                    })
                }
            }
            c.Directions = r;
            var f = c
        },
        454589: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                u = n("77078"),
                d = n("145131"),
                r = n("461380"),
                o = n("298619");
            class c extends s.PureComponent {
                handleClick(e) {
                    let {
                        onBreadcrumbClick: t
                    } = this.props;
                    null != t && t(e)
                }
                render() {
                    let {
                        breadcrumbs: e,
                        className: t
                    } = this.props, n = e.map(this.renderBreadcrumb);
                    return (0, a.jsx)(d.default, {
                        justify: d.default.Justify.START,
                        className: i(o.breadcrumbs, t),
                        children: n
                    })
                }
                constructor(...e) {
                    super(...e), this.renderBreadcrumb = (e, t) => {
                        let {
                            activeId: n,
                            onBreadcrumbClick: s,
                            breadcrumbs: l,
                            renderCustomBreadcrumb: d,
                            separatorClassName: c
                        } = this.props, f = e.id === n, E = t === l.length - 1, M = null != d ? d(e, f) : (0, a.jsx)("span", {
                            className: i(o.breadcrumb, {
                                [o.activeBreadcrumb]: f,
                                [o.interactiveBreadcrumb]: null != s
                            }),
                            children: e.label
                        });
                        return (0, a.jsxs)("div", {
                            className: i(o.breadcrumbWrapper, {
                                [o.breadcrumbFinalWrapper]: E
                            }),
                            children: [null != s ? (0, a.jsx)(u.Clickable, {
                                tag: "span",
                                onClick: () => this.handleClick(e),
                                className: o.breadcrumbClickWrapper,
                                children: M
                            }) : M, E ? null : (0, a.jsx)(r.default, {
                                className: i(o.breadcrumbArrow, c),
                                direction: r.default.Directions.RIGHT
                            })]
                        }, e.id)
                    }
                }
            }
            var f = c
        },
        546671: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("469563"),
                l = n("7037"),
                i = n("246053"),
                u = (0, s.replaceIcon)(function(e) {
                    return (0, a.jsx)(i.default, {
                        ...e,
                        direction: i.default.Directions.UP
                    })
                }, l.ArrowSmallUpIcon)
        },
        76539: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("469563"),
                l = n("715072"),
                i = n("75196"),
                u = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        foreground: l,
                        ...u
                    } = e;
                    return 16 === t || 16 === n ? (0, a.jsxs)("svg", {
                        ...(0, i.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        children: [(0, a.jsx)("path", {
                            className: l,
                            fill: s,
                            d: "M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"
                        }), (0, a.jsx)("path", {
                            className: l,
                            fill: s,
                            d: "M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z"
                        }), (0, a.jsx)("path", {
                            className: l,
                            fill: s,
                            d: "M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z"
                        })]
                    }) : (0, a.jsx)("svg", {
                        ...(0, i.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, a.jsx)("path", {
                            className: l,
                            fill: s,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M21 3H24V5H21V8H19V5H16V3H19V0H21V3ZM10 12C12.205 12 14 10.205 14 8C14 5.795 12.205 4 10 4C7.795 4 6 5.795 6 8C6 10.205 7.795 12 10 12ZM10 13C5.289 13 2 15.467 2 19V20H18V19C18 15.467 14.711 13 10 13Z"
                        })
                    })
                }, l.UserPlusIcon)
        }
    }
]);