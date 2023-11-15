(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["3062"], {
        583397: function(e, t, n) {
            "use strict";
            e.exports = n.p + "c133c9df9ee4552c188a.svg"
        },
        378675: function(e, t, n) {
            "use strict";
            e.exports = n.p + "d063b4bf17f1fee95f05.svg"
        },
        445356: function(e, t, n) {
            "use strict";
            e.exports = n.p + "c8718df1382ba878f1fc.svg"
        },
        460287: function(e, t, n) {
            "use strict";
            e.exports = n.p + "08e581a604e6635d1424.svg"
        },
        642950: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                u = n.n(s),
                i = n("77078"),
                r = n("54239"),
                d = n("79112"),
                o = n("49111"),
                c = n("782340"),
                f = n("519409");
            class E extends a.Component {
                render() {
                    return (0, l.jsxs)("div", {
                        className: f.streamerModeEnabled,
                        children: [(0, l.jsx)("div", {
                            className: f.streamerModeEnabledImage
                        }), (0, l.jsx)(i.Clickable, {
                            className: u(f.streamerModeEnabledBtn, {
                                [f.disabled]: this.props.disableButton
                            }),
                            onClick: this.handleClick,
                            children: c.default.Messages.STREAMER_MODE_ENABLED
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.handleClick = () => {
                        !this.props.disableButton && ((0, r.pushLayer)(o.Layers.USER_SETTINGS), d.default.setSection(o.UserSettingsSections.STREAMER_MODE))
                    }
                }
            }
            E.defaultProps = {
                disableButton: !1
            };
            var g = E
        },
        7037: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ArrowSmallUpIcon: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...r
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, s.default)(r),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M12.707 3.293a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L11 6.414V20a1 1 0 1 0 2 0V6.414l3.293 3.293a1 1 0 0 0 1.414-1.414l-5-5Z",
                        className: i
                    })
                })
            }
        },
        263436: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                LockUnlockedIcon: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...r
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, s.default)(r),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M12 1a4.985 4.985 0 0 0-3.308 1.25 1 1 0 0 0 1.324 1.5A3 3 0 0 1 15 6v2H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3h-2V6a5 5 0 0 0-5-5Zm1 14.732A2 2 0 0 0 12 12a2 2 0 0 0-1 3.732V17a1 1 0 1 0 2 0v-1.268Z",
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
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...r
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, s.default)(r),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
                        className: i
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M16.828 12.93c.259-.271.259-.746-.077-.915A9.493 9.493 0 0 0 12.467 11h-.934A9.533 9.533 0 0 0 2 20.533C2 21.343 2.657 22 3.467 22h.22c.24 0 .445-.17.504-.403.285-1.113.84-2.17 1.32-2.91.134-.208.43-.094.405.154l-.261 2.61a.5.5 0 0 0 .497.549h7.64c.123 0 .17-.31.06-.363C12.819 21.14 12 20.224 12 19a3 3 0 0 1 3-3h.5a.5.5 0 0 0 .5-.5V15c0-.802.315-1.53.828-2.07ZM12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
                        className: i
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
                    return m
                }
            }), n("222007");
            var l = n("37983");
            n("884691");
            var a = n("866227"),
                s = n.n(a),
                u = n("446674"),
                i = n("77078"),
                r = n("820542"),
                d = n("519705"),
                o = n("319165"),
                c = n("282109"),
                f = n("679653"),
                E = n("49111"),
                g = n("468200"),
                h = n("782340");
            let _ = () => [{
                    value: g.MuteUntilSeconds.MINUTES_15,
                    label: h.default.Messages.MUTE_DURATION_15_MINUTES
                }, {
                    value: g.MuteUntilSeconds.HOURS_1,
                    label: h.default.Messages.MUTE_DURATION_1_HOUR
                }, {
                    value: g.MuteUntilSeconds.HOURS_3,
                    label: h.default.Messages.MUTE_DURATION_3_HOURS
                }, {
                    value: g.MuteUntilSeconds.HOURS_8,
                    label: h.default.Messages.MUTE_DURATION_8_HOURS
                }, {
                    value: g.MuteUntilSeconds.HOURS_24,
                    label: h.default.Messages.MUTE_DURATION_24_HOURS
                }, {
                    value: g.MuteUntilSeconds.ALWAYS,
                    label: h.default.Messages.MUTE_DURATION_ALWAYS
                }],
                M = e => {
                    let t = e > 0 ? s().add(e, "second").toISOString() : null;
                    return {
                        muted: !0,
                        mute_config: {
                            selected_time_window: e,
                            end_time: t
                        }
                    }
                };

            function m(e, t) {
                let [n, a] = (0, u.useStateFromStoresArray)([c.default], () => [c.default.isChannelMuted(e.guild_id, e.id), c.default.getChannelMuteConfig(e.guild_id, e.id)]), s = (0, o.useMutedUntilText)(a), g = (0, f.default)(e, !0);

                function m(t) {
                    t && e.type === E.ChannelTypes.GUILD_CATEGORY && (0, r.categoryCollapse)(e.id), d.default.updateChannelOverrideSettings(e.guild_id, e.id, {
                        muted: t
                    })
                }
                let S = h.default.Messages.MUTE_CHANNEL_GENERIC,
                    C = h.default.Messages.UNMUTE_CHANNEL_GENERIC;
                switch (e.type) {
                    case E.ChannelTypes.GUILD_CATEGORY:
                        S = h.default.Messages.MUTE_CATEGORY, C = h.default.Messages.UNMUTE_CATEGORY;
                        break;
                    case E.ChannelTypes.GROUP_DM:
                        S = h.default.Messages.MUTE_CONVERSATION, C = h.default.Messages.UNMUTE_CONVERSATION;
                        break;
                    case E.ChannelTypes.DM:
                        S = h.default.Messages.MUTE_CHANNEL.format({
                            name: g
                        }), C = h.default.Messages.UNMUTE_CHANNEL.format({
                            name: g
                        });
                        break;
                    default:
                        S = h.default.Messages.MUTE_CHANNEL_GENERIC, C = h.default.Messages.UNMUTE_CHANNEL_GENERIC
                }
                return n ? (0, l.jsx)(i.MenuItem, {
                    id: "unmute-channel",
                    label: C,
                    subtext: s,
                    action: () => m(!1)
                }) : (0, l.jsx)(i.MenuItem, {
                    id: "mute-channel",
                    label: S,
                    action: () => m(!0),
                    children: _().map(n => {
                        let {
                            value: a,
                            label: s
                        } = n;
                        return (0, l.jsx)(i.MenuItem, {
                            id: "".concat(a),
                            label: s,
                            action: () => (function(n) {
                                e.type === E.ChannelTypes.GUILD_CATEGORY && (0, r.categoryCollapse)(e.id);
                                let l = M(n);
                                d.default.updateChannelOverrideSettings(e.guild_id, e.id, l, t)
                            })(a)
                        }, a)
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
            var l = n("872717"),
                a = n("913144"),
                s = n("819689"),
                u = n("267363"),
                i = n("716241"),
                r = n("599110"),
                d = n("49111");
            async function o(e) {
                a.default.dispatch({
                    type: "CHANNEL_HIGHLIGHTS_FETCH_START",
                    guildId: e
                });
                let t = await l.default.get({
                        url: d.Endpoints.CHANNEL_HIGHLIGHTS(e)
                    }),
                    n = t.body;
                await a.default.dispatch({
                    type: "CHANNEL_HIGHLIGHTS_FETCH_SUCCESS",
                    guildId: e,
                    data: n
                })
            }
            async function c(e) {
                let {
                    guildId: t,
                    channelId: n,
                    targetMessageId: l,
                    highlightedMessageIds: a,
                    numHighlightsVisited: o
                } = e;
                await s.default.jumpToMessage({
                    channelId: n,
                    messageId: l,
                    flash: !0
                }), r.default.track(d.AnalyticEvents.CHANNEL_HIGHLIGHTS_ACKED, {
                    ...(0, i.collectGuildAnalyticsMetadata)(t),
                    ...(0, i.collectChannelAnalyticsMetadataFromId)(n),
                    message_id: l,
                    index: o,
                    ack_type: "navigator"
                });
                let c = a[o - 1];
                return null != c && u.ack(n, !0, !1, c), Promise.resolve()
            }
        },
        374705: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return b
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("627445"),
                s = n.n(a),
                u = n("446674"),
                i = n("77078"),
                r = n("272030"),
                d = n("812204"),
                o = n("685665"),
                c = n("861370"),
                f = n("255812"),
                E = n("529932"),
                g = n("724026"),
                h = n("271938"),
                _ = n("923959"),
                M = n("697218"),
                m = n("578411"),
                S = n("230947"),
                C = n("544955"),
                p = n("747867"),
                N = n("555914"),
                I = n("513472"),
                T = n("527660"),
                A = n("177508"),
                v = n("263673"),
                R = n("58622"),
                L = n("49111"),
                U = n("782340");

            function x(e) {
                let {
                    guild: t,
                    onSelect: a,
                    hideSettings: d
                } = e, o = t.id, x = _.default.getDefaultChannel(o), b = (0, E.useExpressionSourceGuildDataForGuildLeaveModal)(t), O = (0, u.useStateFromStores)([M.default], () => {
                    let e = M.default.getCurrentUser();
                    return s(null != e, "GuildContextMenu: user cannot be undefined"), t.isOwner(e)
                }, [t]), G = (0, R.default)({
                    guild: t,
                    source: L.InstantInviteSources.GUILD_CONTEXT_MENU,
                    channel: x
                }), j = (0, v.default)(o), y = (0, I.default)(t), H = (0, T.default)(t), D = (0, A.default)(t), w = (0, S.default)({
                    guildId: t.id,
                    userId: h.default.getId(),
                    analyticsLocation: {
                        page: L.AnalyticsPages.GUILD_CHANNEL,
                        section: L.AnalyticsSections.CHAT_USERNAME,
                        object: L.AnalyticsObjects.CONTEXT_MENU_ITEM
                    }
                }), P = (0, C.default)(t), B = (0, f.default)(t.id), V = (0, c.default)({
                    id: t.id,
                    label: U.default.Messages.COPY_ID_GUILD
                }), F = (0, N.default)(t, {
                    section: L.AnalyticsSections.GUILD_LIST
                }), k = (0, g.default)(t.id), Y = (0, p.default)(t), W = t.hasFeature(L.GuildFeatures.HUB);

                function Z() {
                    (0, i.openModal)(e => (0, l.jsx)(m.GuildLeaveConfirmModalContents, {
                        ...e,
                        guild: t,
                        discoverableGuildData: b
                    }))
                }
                return W ? (0, l.jsxs)(i.Menu, {
                    navId: "guild-context",
                    onClose: r.closeContextMenu,
                    "aria-label": U.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    onSelect: a,
                    children: [(0, l.jsxs)(i.MenuGroup, {
                        children: [G, (0, l.jsx)(i.MenuItem, {
                            id: "privacy",
                            label: U.default.Messages.HUB_PRIVACY_SETTINGS,
                            action: () => (0, i.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("349406").then(n.bind(n, "349406"));
                                return n => (0, l.jsx)(e, {
                                    ...n,
                                    guild: t
                                })
                            })
                        }), w]
                    }), O ? null : (0, l.jsx)(i.MenuGroup, {
                        children: (0, l.jsx)(i.MenuItem, {
                            id: "leave-guild",
                            label: U.default.Messages.LEAVE_HUB,
                            action: Z,
                            color: "danger"
                        })
                    }), (0, l.jsx)(i.MenuGroup, {
                        children: V
                    })]
                }) : (0, l.jsxs)(i.Menu, {
                    navId: "guild-context",
                    onClose: r.closeContextMenu,
                    "aria-label": U.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    onSelect: a,
                    children: [(0, l.jsx)(i.MenuGroup, {
                        children: F
                    }), (0, l.jsx)(i.MenuGroup, {
                        children: G
                    }), (0, l.jsxs)(i.MenuGroup, {
                        children: [y, __OVERLAY__ ? null : H, j, k]
                    }), (0, l.jsxs)(i.MenuGroup, {
                        children: [d ? null : D, __OVERLAY__ ? null : (0, l.jsx)(i.MenuItem, {
                            id: "privacy",
                            label: U.default.Messages.PRIVACY_SETTINGS,
                            action: () => (0, i.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("349406").then(n.bind(n, "349406"));
                                return n => (0, l.jsx)(e, {
                                    ...n,
                                    guild: t
                                })
                            })
                        }), w]
                    }), (0, l.jsxs)(i.MenuGroup, {
                        children: [P, B]
                    }), (0, l.jsxs)(i.MenuGroup, {
                        children: [Y, !O && (0, l.jsx)(i.MenuItem, {
                            id: "leave-guild",
                            label: U.default.Messages.LEAVE_SERVER,
                            action: Z,
                            color: "danger"
                        })]
                    }), (0, l.jsx)(i.MenuGroup, {
                        children: V
                    })]
                })
            }

            function b(e) {
                let {
                    AnalyticsLocationProvider: t
                } = (0, o.default)(d.default.CONTEXT_MENU);
                return (0, l.jsx)(t, {
                    children: (0, l.jsx)(x, {
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
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("77078"),
                u = n("957255"),
                i = n("49111"),
                r = n("695838"),
                d = n("782340");

            function o(e) {
                let t = (0, a.useStateFromStores)([u.default], () => u.default.can(i.Permissions.MANAGE_CHANNELS, e));
                return __OVERLAY__ ? null : e.id === r.FAVORITES_RAW_GUILD_ID ? (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsx)(s.MenuItem, {
                        id: "create-category",
                        label: d.default.Messages.CREATE_CATEGORY,
                        action: () => (0, s.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("515680").then(n.bind(n, "515680"));
                            return t => (0, l.jsx)(e, {
                                ...t
                            })
                        })
                    })
                }) : t ? [(0, l.jsx)(s.MenuItem, {
                    id: "create-channel",
                    label: d.default.Messages.CREATE_CHANNEL,
                    action: () => (0, s.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("581354").then(n.bind(n, "581354"));
                        return n => (0, l.jsx)(t, {
                            ...n,
                            channelType: i.ChannelTypes.GUILD_TEXT,
                            guildId: e.id
                        })
                    })
                }, "create-channel"), (0, l.jsx)(s.MenuItem, {
                    id: "create-category",
                    label: d.default.Messages.CREATE_CATEGORY,
                    action: () => (0, s.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("581354").then(n.bind(n, "581354"));
                        return n => (0, l.jsx)(t, {
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
                    return d
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("77078"),
                u = n("952451"),
                i = n("542827"),
                r = n("782340");

            function d(e, t) {
                let n = e.id,
                    d = (0, a.useStateFromStores)([u.default], () => u.default.getGuildHasUnreadIgnoreMuted(n), [n]);
                return (0, l.jsx)(s.MenuItem, {
                    id: "mark-guild-read",
                    label: r.default.Messages.MARK_AS_READ,
                    icon: void 0,
                    action: () => (0, i.default)([n], t.section),
                    disabled: !d
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
            var l = n("37983");
            n("884691");
            var a = n("866227"),
                s = n.n(a),
                u = n("446674"),
                i = n("77078"),
                r = n("519705"),
                d = n("531674"),
                o = n("319165"),
                c = n("282109"),
                f = n("782340");

            function E(e, t) {
                let n = null == e ? void 0 : e.id,
                    {
                        muted: a,
                        muteConfig: E
                    } = (0, u.useStateFromStoresObject)([c.default], () => ({
                        muted: null != n ? c.default.isMuted(n) : void 0,
                        muteConfig: null != n ? c.default.getMuteConfig(n) : void 0
                    }), [n]),
                    g = (0, o.useMutedUntilText)(E);
                return null == n ? null : a ? (0, l.jsx)(i.MenuItem, {
                    id: "unmute-guild",
                    label: f.default.Messages.UNMUTE_SERVER,
                    subtext: g,
                    action: () => r.default.updateGuildNotificationSettings(n, {
                        muted: !1
                    })
                }) : (0, l.jsx)(i.MenuItem, {
                    id: "mute-guild",
                    label: f.default.Messages.MUTE_SERVER,
                    action: () => r.default.updateGuildNotificationSettings(n, {
                        muted: !0
                    }),
                    children: (0, d.getMuteTimes)().map(e => {
                        let {
                            value: a,
                            label: u
                        } = e;
                        return (0, l.jsx)(i.MenuItem, {
                            id: "".concat(a),
                            label: u,
                            action: () => (function(e) {
                                if (null == n) return;
                                let l = e > 0 ? s().add(e, "second").toISOString() : null;
                                r.default.updateGuildNotificationSettings(n, {
                                    muted: !0,
                                    mute_config: {
                                        selected_time_window: e,
                                        end_time: l
                                    }
                                }, t)
                            })(a)
                        }, a)
                    })
                })
            }
        },
        527660: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("669491"),
                u = n("77078"),
                i = n("519705"),
                r = n("503950"),
                d = n("483226"),
                o = n("44574"),
                c = n("282109"),
                f = n("956089"),
                E = n("49111"),
                g = n("782340"),
                h = n("460856");

            function _() {
                return [{
                    setting: E.UserNotificationSettings.ALL_MESSAGES,
                    label: g.default.Messages.FORM_LABEL_ALL_MESSAGES
                }, {
                    setting: E.UserNotificationSettings.ONLY_MENTIONS,
                    label: g.default.Messages.FORM_LABEL_ONLY_MENTIONS.format()
                }, {
                    setting: E.UserNotificationSettings.NO_MESSAGES,
                    label: g.default.Messages.FORM_LABEL_NOTHING
                }]
            }

            function M(e) {
                var t, M;
                let m = function(e) {
                        let {
                            suppressEveryone: t,
                            suppressRoles: n,
                            mobilePush: M,
                            messageNotifications: m,
                            notifyHighlights: S,
                            isGuildUnreadsEnabled: C
                        } = (0, a.useStateFromStoresObject)([c.default], () => ({
                            suppressEveryone: c.default.isSuppressEveryoneEnabled(e.id),
                            suppressRoles: c.default.isSuppressRolesEnabled(e.id),
                            mobilePush: c.default.isMobilePushEnabled(e.id),
                            messageNotifications: c.default.getMessageNotifications(e.id),
                            notifyHighlights: c.default.getNotifyHighlights(e.id),
                            isGuildUnreadsEnabled: c.default.isGuildUnreadSettingEnabled(e.id)
                        }), [e.id]), p = S === E.HighlightSettings.DISABLED, N = (0, r.default)(e.id), I = (0, o.useGuildUnreadsExperiment)();

                        function T(t) {
                            i.default.updateGuildNotificationSettings(e.id, t)
                        }
                        return (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(u.MenuGroup, {
                                children: _().map(e => {
                                    let {
                                        setting: t,
                                        label: n
                                    } = e;
                                    return (0, l.jsx)(u.MenuRadioItem, {
                                        group: "guild-notifications",
                                        id: "".concat(t),
                                        label: n,
                                        action: () => T({
                                            message_notifications: t
                                        }),
                                        checked: t === m
                                    }, t)
                                })
                            }), (0, l.jsxs)(u.MenuGroup, {
                                children: [I && (0, l.jsx)(u.MenuCheckboxItem, {
                                    id: "enable-unread-settings",
                                    label: (0, l.jsxs)(l.Fragment, {
                                        children: [g.default.Messages.FORM_LABEL_UNREAD_SETTINGS_OPT_IN, (0, l.jsx)(f.TextBadge, {
                                            text: g.default.Messages.BETA,
                                            color: s.default.unsafe_rawColors.BRAND_500.css,
                                            className: h.betaBadge
                                        })]
                                    }),
                                    action: () => {
                                        (0, d.setGuildUnreadSetting)(e.id, !C)
                                    },
                                    checked: C
                                }), (0, l.jsx)(u.MenuCheckboxItem, {
                                    id: "suppress-everyone",
                                    label: g.default.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format(),
                                    action: () => T({
                                        suppress_everyone: !t
                                    }),
                                    checked: t
                                }), (0, l.jsx)(u.MenuCheckboxItem, {
                                    id: "suppress-roles",
                                    label: g.default.Messages.FORM_LABEL_SUPPRESS_ROLES,
                                    action: () => T({
                                        suppress_roles: !n
                                    }),
                                    checked: n
                                }), (0, l.jsx)(u.MenuCheckboxItem, {
                                    id: "suppress-highlights",
                                    label: g.default.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS,
                                    action: () => {
                                        T({
                                            notify_highlights: p ? E.HighlightSettings.ENABLED : E.HighlightSettings.DISABLED
                                        })
                                    },
                                    checked: p
                                }), N]
                            }), (0, l.jsx)(u.MenuGroup, {
                                children: (0, l.jsx)(u.MenuCheckboxItem, {
                                    id: "mobile-push",
                                    label: g.default.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS,
                                    action: () => T({
                                        mobile_push: !M
                                    }),
                                    checked: M
                                })
                            })]
                        })
                    }(e),
                    S = (0, a.useStateFromStores)([c.default], () => c.default.getMessageNotifications(e.id), [e.id]),
                    C = null === (M = _()) || void 0 === M ? void 0 : null === (t = M.find(e => {
                        let {
                            setting: t
                        } = e;
                        return t === S
                    })) || void 0 === t ? void 0 : t.label;
                return null != m ? (0, l.jsx)(u.MenuItem, {
                    id: "guild-notifications",
                    label: g.default.Messages.NOTIFICATION_SETTINGS,
                    subtext: C,
                    action: () => (0, u.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("747593").then(n.bind(n, "747593"));
                        return n => (0, l.jsx)(t, {
                            ...n,
                            guildId: e.id
                        })
                    }),
                    children: m
                }) : null
            }
        },
        177508: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("77078"),
                u = n("412707"),
                i = n("838093"),
                r = n("592407"),
                d = n("148475"),
                o = n("725621"),
                c = n("923959"),
                f = n("49111"),
                E = n("782340");

            function g(e) {
                function t(t) {
                    r.default.open(e.id, t)
                }
                let n = (0, a.useStateFromStoresArray)([c.default], () => c.default.getChannels(e.id).SELECTABLE, [e]),
                    g = (0, d.default)(e);
                return __OVERLAY__ || !g ? null : (0, l.jsx)(s.MenuItem, {
                    id: "guild-settings",
                    label: E.default.Messages.SERVER_SETTINGS,
                    action: () => t(),
                    children: (0, o.getGuildSettingsSections)(e, n).map(n => {
                        let {
                            section: a,
                            label: r
                        } = n;
                        if (null == r) return null;
                        switch (a) {
                            case f.GuildSettingsSections.DELETE:
                                return null;
                            case f.GuildSettingsSections.COMMUNITY:
                                return (0, l.jsx)(s.MenuItem, {
                                    id: a,
                                    action: () => t(a),
                                    label: E.default.Messages.GUILD_SETTINGS_COMMUNITY
                                }, a);
                            case f.GuildSettingsSections.APP_DIRECTORY:
                                return (0, l.jsx)(s.MenuItem, {
                                    id: a,
                                    action: () => {
                                        (0, i.goToAppDirectory)({
                                            guildId: e.id,
                                            entrypoint: {
                                                name: u.ApplicationDirectoryEntrypointNames.GUILD_CONTEXT_MENU
                                            }
                                        })
                                    },
                                    label: r
                                }, a);
                            default:
                                return (0, l.jsx)(s.MenuItem, {
                                    id: a,
                                    action: () => t(a),
                                    label: r
                                }, a)
                        }
                    })
                })
            }
        },
        263673: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("77078"),
                u = n("126501"),
                i = n("282109"),
                r = n("782340");

            function d(e) {
                let t = (0, a.useStateFromStores)([i.default], () => i.default.isGuildCollapsed(e), [e]);
                return (0, l.jsx)(s.MenuCheckboxItem, {
                    id: "hide-muted-channels",
                    label: r.default.Messages.HIDE_MUTED_CHANNELS,
                    action: () => u.default.toggleCollapseGuild(e),
                    checked: t
                })
            }
        },
        569912: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("65597"),
                a = n("385976"),
                s = n("867805");

            function u(e, t) {
                let n = (0, l.default)([a.default], () => null != e ? a.default.getCustomEmojiById(e) : null, [e]),
                    u = null != t ? s.default.getByName(s.default.convertSurrogateToName(t, !1)) : null;
                return {
                    customEmoji: n,
                    unicodeEmoji: u
                }
            }
        },
        205454: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CTAEmojiSize: function() {
                    return i
                },
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("430568"),
                s = n("569912"),
                u = n("286667");
            let i = {
                SMALL: u.small,
                MEDIUM: u.medium,
                LARGE: u.large
            };

            function r(e) {
                let {
                    emojiId: t,
                    emojiName: n,
                    defaultComponent: u,
                    size: r = i.MEDIUM
                } = e, {
                    customEmoji: d,
                    unicodeEmoji: o
                } = (0, s.default)(t, n);
                return null == d && null == o ? (0, l.jsx)(l.Fragment, {
                    children: u
                }) : (0, l.jsx)(a.default, {
                    emojiName: null != d ? null == d ? void 0 : d.name : n,
                    animated: null != d && d.animated,
                    emojiId: null == d ? void 0 : d.id,
                    autoplay: !0,
                    className: r
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
            var l = n("884691"),
                a = n("446674"),
                s = n("817963"),
                u = n("923959"),
                i = n("305961"),
                r = n("957255"),
                d = n("49111"),
                o = (e, t) => {
                    let n = (0, a.useStateFromStores)([i.default], () => i.default.getGuild(e), [e]),
                        {
                            canCreateGuildEvent: o
                        } = (0, s.useManageResourcePermissions)(n),
                        c = (0, a.useStateFromStores)([u.default], () => u.default.getChannels(e)[u.GUILD_VOCAL_CHANNELS_KEY], [e]),
                        f = l.useMemo(() => null != t ? c.filter(e => {
                            let {
                                channel: n
                            } = e;
                            return n.type === t
                        }) : c, [c, t]),
                        E = (0, a.useStateFromStores)([r.default], () => {
                            if (r.default.can(d.Permissions.ADMINISTRATOR, n) || o) return !0;
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
                    return E
                }
        },
        503950: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("77078"),
                u = n("519705"),
                i = n("282109"),
                r = n("782340");

            function d(e) {
                let t = (0, a.useStateFromStores)([i.default], () => i.default.isMuteScheduledEventsEnabled(e), [e]);
                return (0, l.jsx)(s.MenuCheckboxItem, {
                    id: "mute-events",
                    label: r.default.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS,
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
        148475: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("446674"),
                a = n("957255"),
                s = n("49111");

            function u(e) {
                let {
                    canManageGuild: t,
                    canManageRoles: n,
                    canBanMembers: u,
                    canManageNicknames: i,
                    canCreateEmojisAndStickers: r,
                    canManageEmojisAndStickers: d,
                    canManageWebhooks: o,
                    canViewAuditLog: c
                } = (0, l.useStateFromStoresObject)([a.default], () => ({
                    canManageGuild: a.default.can(s.Permissions.MANAGE_GUILD, e),
                    canManageRoles: a.default.can(s.Permissions.MANAGE_ROLES, e),
                    canBanMembers: a.default.can(s.Permissions.BAN_MEMBERS, e),
                    canManageNicknames: a.default.can(s.Permissions.MANAGE_NICKNAMES, e),
                    canCreateEmojisAndStickers: a.default.can(s.Permissions.CREATE_GUILD_EXPRESSIONS, e),
                    canManageEmojisAndStickers: a.default.can(s.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
                    canManageWebhooks: a.default.can(s.Permissions.MANAGE_WEBHOOKS, e),
                    canViewAuditLog: a.default.can(s.Permissions.VIEW_AUDIT_LOG, e)
                }), [e]);
                return t || n || u || i || r || d || o || c
            }
        },
        507453: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                u = n("598532");

            function i(e) {
                let {
                    className: t
                } = e;
                return (0, l.jsx)("div", {
                    className: s(u.image, t)
                })
            }
        },
        242757: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canViewInviteModal: function() {
                    return a
                }
            });
            var l = n("49111");

            function a(e, t, n, a) {
                let s = null != n ? n : t,
                    u = null != s && e.can(l.Permissions.CREATE_INSTANT_INVITE, s);
                return u || null != t && null != t.vanityURLCode || (null == a ? void 0 : a.invite_code) != null
            }
        },
        676143: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useFilterCategoriesByQuery: function() {
                    return R
                },
                getFirstRouteFor: function() {
                    return L
                },
                clearRecentChannels: function() {
                    return U
                },
                useChannelBrowserSections: function() {
                    return x
                },
                useChannelBrowserChannelCount: function() {
                    return b
                },
                getActiveAgoTimestamp: function() {
                    return O
                }
            }), n("843762");
            var l = n("884691"),
                a = n("448105"),
                s = n.n(a),
                u = n("866227"),
                i = n.n(u),
                r = n("249654"),
                d = n("446674"),
                o = n("151426"),
                c = n("267363"),
                f = n("320954"),
                E = n("10641"),
                g = n("290886"),
                h = n("319839"),
                _ = n("194704"),
                M = n("393414"),
                m = n("42203"),
                S = n("245997"),
                C = n("660478"),
                p = n("49111"),
                N = n("724210"),
                I = n("796618"),
                T = n("133335"),
                A = n("782340");

            function v(e, t) {
                e.index = t
            }

            function R(e, t, n, a) {
                a = a.toLowerCase();
                let u = (0, g.useCanSeeOnboardingHome)(e),
                    i = l.useCallback((e, t) => !(u && e.channel.hasFlag(N.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) && e.channel.type !== p.ChannelTypes.GUILD_DIRECTORY && (0 === t.length || s(t, e.channel.name.toLowerCase()) || e.channel.topic.toLowerCase().includes(t)), [u]);
                return l.useMemo(() => {
                    let e = {
                        null: [],
                        _categories: []
                    };
                    return n[p.ChannelTypes.GUILD_CATEGORY].forEach(n => {
                        let {
                            channel: l
                        } = n;
                        "null" === l.id && (e.null = t.null.filter(e => i(e, a))), e[l.id] = t[l.id].filter(e => i(e, a))
                    }), e._categories = t._categories.filter(t => "null" === t.channel.id || 0 === a.length || e[t.channel.id].length > 0), (0, f.default)(e._categories, e).forEach(v), e
                }, [t, n, i, a])
            }

            function L(e) {
                let t = e.getSections();
                if (t[h.SECTION_INDEX_COMMUNITY] > 0) {
                    let t = e.getCommunitySection().getRow(0);
                    switch (t) {
                        case I.ChannelListCommunityRow.GUILD_HOME:
                            return N.StaticChannelRoute.GUILD_HOME;
                        case I.ChannelListCommunityRow.GUILD_ROLE_SUBSCRIPTIONS:
                            return N.StaticChannelRoute.ROLE_SUBSCRIPTIONS;
                        case I.ChannelListCommunityRow.GUILD_MEMBER_APPLICATIONS:
                            return N.StaticChannelRoute.MEMBER_APPLICATIONS
                    }
                }
                for (let l = h.SECTION_INDEX_UNCATEGORIZED_CHANNELS; l < e.voiceChannelsSectionNumber; l++)
                    if (t[l] > 0) {
                        var n;
                        let t = null === (n = e.getChannelFromSectionRow(l, 0)) || void 0 === n ? void 0 : n.channel;
                        if (null != t) return t.id
                    } return null
            }

            function U(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                (0, _.bulkClearRecents)(e, t), (0, c.bulkAck)(t.map(e => ({
                    channelId: e,
                    readStateType: T.ReadStateTypes.CHANNEL,
                    messageId: C.default.lastMessageId(e)
                }))), null != n && (0, M.transitionTo)(p.Routes.CHANNEL(e, n))
            }

            function x(e, t, n, l) {
                let a = (0, E.useIsDismissibleContentDismissed)(o.DismissibleContent.CHANNEL_BROWSER_NUX),
                    s = (0, d.useStateFromStoresObject)([m.default], () => {
                        let t = {},
                            n = m.default.getMutableGuildChannelsForGuild(e);
                        for (let e in n) {
                            let {
                                parent_id: a
                            } = n[e];
                            if (null != a) {
                                var l;
                                t[a] = (null !== (l = t[a]) && void 0 !== l ? l : 0) + 1
                            }
                        }
                        return t
                    }, [e]),
                    u = t._categories.map(e => {
                        let l = t[e.channel.id];
                        return {
                            rowCount: "null" !== e.channel.id && 0 === s[e.channel.id] ? 1 : l.length,
                            rowHeight: 0 === l.length ? 0 : n
                        }
                    });
                return !a && null != l && u.unshift({
                    rowCount: 1,
                    rowHeight: l
                }), u
            }

            function b(e) {
                var t, n;
                let l = (0, d.useStateFromStores)([S.default], () => S.default.getCategories(e)),
                    a = l._categories.length,
                    s = l._categories[l._categories.length - 1];
                if (null == s) return 0;
                let u = null !== (n = null === (t = s.channel) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : "null",
                    i = l[u];
                return null == i ? 0 : 0 === i.length ? s.index + 2 - a : i[i.length - 1].index + 2 - a
            }

            function O(e) {
                var t;
                return A.default.Messages.CHANNEL_BROWSER_ACTIVE_TEXT.format({
                    timeAgo: i(r.default.extractTimestamp(null !== (t = C.default.lastMessageId(e)) && void 0 !== t ? t : e)).fromNow()
                })
            }
        },
        959905: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useLocalizedPromoQuery: function() {
                    return s
                }
            });
            var l = n("446674"),
                a = n("160299");

            function s() {
                let {
                    localizedPricingPromo: e,
                    hasError: t
                } = (0, l.useStateFromStoresObject)([a.default], () => ({
                    localizedPricingPromo: a.default.localizedPricingPromo,
                    hasError: a.default.localizedPricingPromoHasError
                }));
                return t ? null : e
            }
        },
        485138: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useTrackLocalizedPricingPromoImpression: function() {
                    return s
                }
            });
            var l = n("759843"),
                a = n("428958");

            function s(e, t) {
                (0, a.default)({
                    type: l.ImpressionTypes.VIEW,
                    name: l.ImpressionNames.LOCALIZED_PRICING_UPSELL_VIEWED,
                    properties: {
                        country_code: t,
                        action_location: e
                    }
                })
            }
        },
        194704: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                bulkClearRecents: function() {
                    return r
                }
            });
            var l = n("801340"),
                a = n("913144"),
                s = n("872173"),
                u = n("599110"),
                i = n("49111");
            async function r(e, t) {
                await (0, s.updateUserGuildSettings)(e, e => (e.guildRecentsDismissedAt = l.Timestamp.fromDate(new Date), !0), s.UserSettingsDelay.INFREQUENT_USER_ACTION), a.default.dispatch({
                    type: "BULK_CLEAR_RECENTS",
                    guildId: e,
                    channelIds: t
                }), u.default.track(i.AnalyticEvents.CHANNEL_LIST_UPDATED, {
                    action_type: "recents_dismissed"
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
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                u = n.n(s),
                i = n("546671"),
                r = n("341417");
            let d = {
                    UP: "up",
                    RIGHT: "right",
                    DOWN: "down",
                    LEFT: "left"
                },
                o = {
                    [d.UP]: r.up,
                    [d.RIGHT]: r.right,
                    [d.DOWN]: r.down,
                    [d.LEFT]: r.left
                };
            class c extends a.PureComponent {
                render() {
                    let {
                        direction: e,
                        className: t
                    } = this.props;
                    return (0, l.jsx)(i.default, {
                        className: u(r.arrow, t, {
                            [o[e]]: !0
                        })
                    })
                }
            }
            c.Directions = d;
            var f = c
        },
        454589: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                u = n.n(s),
                i = n("77078"),
                r = n("145131"),
                d = n("461380"),
                o = n("298619");
            class c extends a.PureComponent {
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
                    return (0, l.jsx)(r.default, {
                        justify: r.default.Justify.START,
                        className: u(o.breadcrumbs, t),
                        children: n
                    })
                }
                constructor(...e) {
                    super(...e), this.renderBreadcrumb = (e, t) => {
                        let {
                            activeId: n,
                            onBreadcrumbClick: a,
                            breadcrumbs: s,
                            renderCustomBreadcrumb: r,
                            separatorClassName: c
                        } = this.props, f = e.id === n, E = t === s.length - 1, g = null != r ? r(e, f) : (0, l.jsx)("span", {
                            className: u(o.breadcrumb, {
                                [o.activeBreadcrumb]: f,
                                [o.interactiveBreadcrumb]: null != a
                            }),
                            children: e.label
                        });
                        return (0, l.jsxs)("div", {
                            className: u(o.breadcrumbWrapper, {
                                [o.breadcrumbFinalWrapper]: E
                            }),
                            children: [null != a ? (0, l.jsx)(i.Clickable, {
                                tag: "span",
                                onClick: () => this.handleClick(e),
                                className: o.breadcrumbClickWrapper,
                                children: g
                            }) : g, E ? null : (0, l.jsx)(d.default, {
                                className: u(o.breadcrumbArrow, c),
                                direction: d.default.Directions.RIGHT
                            })]
                        }, e.id)
                    }
                }
            }
            var f = c
        },
        91551: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("917351"),
                u = n.n(s),
                i = n("888400"),
                r = n("782340");
            let d = () => [r.default.Messages.COUNTDOWN_UNITS_SECONDS, r.default.Messages.COUNTDOWN_UNITS_MINUTES, r.default.Messages.COUNTDOWN_UNITS_HOURS, r.default.Messages.COUNTDOWN_UNITS_DAYS];
            class o extends a.PureComponent {
                componentDidMount() {
                    let {
                        intervalDuration: e,
                        onInterval: t
                    } = this.props;
                    this._interval = setInterval(() => {
                        this.forceUpdate(), null == t || t()
                    }, e)
                }
                componentWillUnmount() {
                    null != this._interval && clearInterval(this._interval)
                }
                defaultRender(e) {
                    let {
                        showDays: t,
                        showUnits: n,
                        className: a
                    } = this.props, s = [e.days, e.hours, e.minutes, e.seconds], i = d();
                    if (0 === e.days) s.shift();
                    else if (!t) {
                        let e = s.shift();
                        s[0] += 24 * e
                    }
                    let r = u(s).map(e => e < 10 ? "0".concat(e) : e).map((e, t) => [t > 0 && !n ? ":" : " ", (0, l.jsxs)("span", {
                        children: [e, n ? i[s.length - t - 1] : null]
                    }, t)]).flatten().value();
                    return (0, l.jsx)("span", {
                        className: a,
                        children: r
                    })
                }
                render() {
                    let {
                        deadline: e,
                        children: t,
                        className: n,
                        stopAtOneSec: a
                    } = this.props;
                    if (e === 1 / 0) return (0, l.jsx)("span", {
                        className: n,
                        "aria-label": r.default.Messages.MAX_AGE_NEVER,
                        children: "∞"
                    });
                    let s = (0, i.diffAsUnits)(Date.now(), e, a);
                    return null != t ? t(s, this.defaultRender.bind(this, s)) : this.defaultRender(s)
                }
            }
            o.defaultProps = {
                showDays: !0,
                showUnits: !1,
                stopAtOneSec: !1,
                intervalDuration: 1e3
            };
            var c = o
        },
        546671: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("7037"),
                u = n("246053"),
                i = (0, a.replaceIcon)(function(e) {
                    return (0, l.jsx)(u.default, {
                        ...e,
                        direction: u.default.Directions.UP
                    })
                }, s.ArrowSmallUpIcon)
        },
        745633: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("586880"),
                u = n("75196"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        ...s
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, u.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: [(0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M13.25 18L13.25 6L11.75 6L11.75 18L13.25 18Z",
                            fill: a
                        }), (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M7 12.75C6.30964 12.75 5.75 13.3096 5.75 14V18H4.25V14C4.25 12.4812 5.48122 11.25 7 11.25H18C19.5188 11.25 20.75 12.4812 20.75 14V18H19.25V14C19.25 13.3096 18.6904 12.75 18 12.75H7Z",
                            fill: a
                        }), (0, l.jsx)("path", {
                            d: "M12.5 7C11.1193 7 10 5.88071 10 4.5C10 3.11929 11.1193 2 12.5 2C13.8807 2 15 3.11929 15 4.5C15 5.88071 13.8807 7 12.5 7Z",
                            fill: a
                        }), (0, l.jsx)("path", {
                            d: "M20 22C18.6193 22 17.5 20.8807 17.5 19.5C17.5 18.1193 18.6193 17 20 17C21.3807 17 22.5 18.1193 22.5 19.5C22.5 20.8807 21.3807 22 20 22Z",
                            fill: a
                        }), (0, l.jsx)("path", {
                            d: "M12.5 22C11.1193 22 10 20.8807 10 19.5C10 18.1193 11.1193 17 12.5 17C13.8807 17 15 18.1193 15 19.5C15 20.8807 13.8807 22 12.5 22Z",
                            fill: a
                        }), (0, l.jsx)("path", {
                            d: "M5 22C3.61929 22 2.5 20.8807 2.5 19.5C2.5 18.1193 3.61929 17 5 17C6.38071 17 7.5 18.1193 7.5 19.5C7.5 20.8807 6.38071 22 5 22Z",
                            fill: a
                        })]
                    })
                }, s.HubIcon)
        },
        76539: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("715072"),
                u = n("75196"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: s,
                        ...i
                    } = e;
                    return 16 === t || 16 === n ? (0, l.jsxs)("svg", {
                        ...(0, u.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        children: [(0, l.jsx)("path", {
                            className: s,
                            fill: a,
                            d: "M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"
                        }), (0, l.jsx)("path", {
                            className: s,
                            fill: a,
                            d: "M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z"
                        }), (0, l.jsx)("path", {
                            className: s,
                            fill: a,
                            d: "M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z"
                        })]
                    }) : (0, l.jsx)("svg", {
                        ...(0, u.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            className: s,
                            fill: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M21 3H24V5H21V8H19V5H16V3H19V0H21V3ZM10 12C12.205 12 14 10.205 14 8C14 5.795 12.205 4 10 4C7.795 4 6 5.795 6 8C6 10.205 7.795 12 10 12ZM10 13C5.289 13 2 15.467 2 19V20H18V19C18 15.467 14.711 13 10 13Z"
                        })
                    })
                }, s.UserPlusIcon)
        }
    }
]);