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
                    return h
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("77078"),
                u = n("54239"),
                d = n("79112"),
                o = n("49111"),
                c = n("782340"),
                f = n("519409");
            class E extends s.Component {
                render() {
                    return (0, a.jsxs)("div", {
                        className: f.streamerModeEnabled,
                        children: [(0, a.jsx)("div", {
                            className: f.streamerModeEnabledImage
                        }), (0, a.jsx)(r.Clickable, {
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
                        !this.props.disableButton && ((0, u.pushLayer)(o.Layers.USER_SETTINGS), d.default.setSection(o.UserSettingsSections.STREAMER_MODE))
                    }
                }
            }
            E.defaultProps = {
                disableButton: !1
            };
            var h = E
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
                    colorClass: r = "",
                    ...u
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, l.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M12.707 3.293a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L11 6.414V20a1 1 0 1 0 2 0V6.414l3.293 3.293a1 1 0 0 0 1.414-1.414l-5-5Z",
                        className: r
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
                    colorClass: r = "",
                    ...u
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, l.default)(u),
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
                        className: r
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
                    colorClass: r = "",
                    ...u
                } = e;
                return (0, a.jsxs)("svg", {
                    ...(0, l.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, a.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
                        className: r
                    }), (0, a.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M16.828 12.93c.259-.271.259-.746-.077-.915A9.493 9.493 0 0 0 12.467 11h-.934A9.533 9.533 0 0 0 2 20.533C2 21.343 2.657 22 3.467 22h.22c.24 0 .445-.17.504-.403.285-1.113.84-2.17 1.32-2.91.134-.208.43-.094.405.154l-.261 2.61a.5.5 0 0 0 .497.549h7.64c.123 0 .17-.31.06-.363C12.819 21.14 12 20.224 12 19a3 3 0 0 1 3-3h.5a.5.5 0 0 0 .5-.5V15c0-.802.315-1.53.828-2.07ZM12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
                        className: r
                    })]
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
                r = n("716241"),
                u = n("599110"),
                d = n("49111");
            async function o(e) {
                s.default.dispatch({
                    type: "CHANNEL_HIGHLIGHTS_FETCH_START",
                    guildId: e
                });
                let t = await a.default.get({
                        url: d.Endpoints.CHANNEL_HIGHLIGHTS(e)
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
                }), u.default.track(d.AnalyticEvents.CHANNEL_HIGHLIGHTS_ACKED, {
                    ...(0, r.collectGuildAnalyticsMetadata)(t),
                    ...(0, r.collectChannelAnalyticsMetadataFromId)(n),
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
                    return G
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("627445"),
                l = n.n(s),
                i = n("446674"),
                r = n("77078"),
                u = n("272030"),
                d = n("812204"),
                o = n("685665"),
                c = n("861370"),
                f = n("255812"),
                E = n("529932"),
                h = n("724026"),
                g = n("271938"),
                M = n("923959"),
                p = n("697218"),
                _ = n("578411"),
                S = n("230947"),
                I = n("544955"),
                m = n("747867"),
                N = n("555914"),
                A = n("513472"),
                x = n("527660"),
                L = n("177508"),
                C = n("263673"),
                b = n("58622"),
                v = n("49111"),
                T = n("782340");

            function j(e) {
                let {
                    guild: t,
                    onSelect: s,
                    hideSettings: d
                } = e, o = t.id, j = M.default.getDefaultChannel(o), G = (0, E.useExpressionSourceGuildDataForGuildLeaveModal)(t), R = (0, i.useStateFromStores)([p.default], () => {
                    let e = p.default.getCurrentUser();
                    return l(null != e, "GuildContextMenu: user cannot be undefined"), t.isOwner(e)
                }, [t]), H = (0, b.default)({
                    guild: t,
                    source: v.InstantInviteSources.GUILD_CONTEXT_MENU,
                    channel: j
                }), y = (0, C.default)(o), O = (0, A.default)(t), U = (0, x.default)(t), P = (0, L.default)(t), D = (0, S.default)({
                    guildId: t.id,
                    userId: g.default.getId(),
                    analyticsLocation: {
                        page: v.AnalyticsPages.GUILD_CHANNEL,
                        section: v.AnalyticsSections.CHAT_USERNAME,
                        object: v.AnalyticsObjects.CONTEXT_MENU_ITEM
                    }
                }), w = (0, I.default)(t), V = (0, f.default)(t.id), B = (0, c.default)({
                    id: t.id,
                    label: T.default.Messages.COPY_ID_GUILD
                }), k = (0, N.default)(t, {
                    section: v.AnalyticsSections.GUILD_LIST
                }), F = (0, h.default)(t.id), Y = (0, m.default)(t), Z = t.hasFeature(v.GuildFeatures.HUB);

                function z() {
                    (0, r.openModal)(e => (0, a.jsx)(_.GuildLeaveConfirmModalContents, {
                        ...e,
                        guild: t,
                        discoverableGuildData: G
                    }))
                }
                return Z ? (0, a.jsxs)(r.Menu, {
                    navId: "guild-context",
                    onClose: u.closeContextMenu,
                    "aria-label": T.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    onSelect: s,
                    children: [(0, a.jsxs)(r.MenuGroup, {
                        children: [H, (0, a.jsx)(r.MenuItem, {
                            id: "privacy",
                            label: T.default.Messages.HUB_PRIVACY_SETTINGS,
                            action: () => (0, r.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("349406").then(n.bind(n, "349406"));
                                return n => (0, a.jsx)(e, {
                                    ...n,
                                    guild: t
                                })
                            })
                        }), D]
                    }), R ? null : (0, a.jsx)(r.MenuGroup, {
                        children: (0, a.jsx)(r.MenuItem, {
                            id: "leave-guild",
                            label: T.default.Messages.LEAVE_HUB,
                            action: z,
                            color: "danger"
                        })
                    }), (0, a.jsx)(r.MenuGroup, {
                        children: B
                    })]
                }) : (0, a.jsxs)(r.Menu, {
                    navId: "guild-context",
                    onClose: u.closeContextMenu,
                    "aria-label": T.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    onSelect: s,
                    children: [(0, a.jsx)(r.MenuGroup, {
                        children: k
                    }), (0, a.jsx)(r.MenuGroup, {
                        children: H
                    }), (0, a.jsxs)(r.MenuGroup, {
                        children: [O, __OVERLAY__ ? null : U, y, F]
                    }), (0, a.jsxs)(r.MenuGroup, {
                        children: [d ? null : P, __OVERLAY__ ? null : (0, a.jsx)(r.MenuItem, {
                            id: "privacy",
                            label: T.default.Messages.PRIVACY_SETTINGS,
                            action: () => (0, r.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("349406").then(n.bind(n, "349406"));
                                return n => (0, a.jsx)(e, {
                                    ...n,
                                    guild: t
                                })
                            })
                        }), D]
                    }), (0, a.jsxs)(r.MenuGroup, {
                        children: [w, V]
                    }), (0, a.jsxs)(r.MenuGroup, {
                        children: [Y, !R && (0, a.jsx)(r.MenuItem, {
                            id: "leave-guild",
                            label: T.default.Messages.LEAVE_SERVER,
                            action: z,
                            color: "danger"
                        })]
                    }), (0, a.jsx)(r.MenuGroup, {
                        children: B
                    })]
                })
            }

            function G(e) {
                let {
                    AnalyticsLocationProvider: t
                } = (0, o.default)(d.default.CONTEXT_MENU);
                return (0, a.jsx)(t, {
                    children: (0, a.jsx)(j, {
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
                r = n("49111"),
                u = n("695838"),
                d = n("782340");

            function o(e) {
                let t = (0, s.useStateFromStores)([i.default], () => i.default.can(r.Permissions.MANAGE_CHANNELS, e));
                return __OVERLAY__ ? null : e.id === u.FAVORITES_RAW_GUILD_ID ? (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(l.MenuItem, {
                        id: "create-category",
                        label: d.default.Messages.CREATE_CATEGORY,
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
                    label: d.default.Messages.CREATE_CHANNEL,
                    action: () => (0, l.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("581354").then(n.bind(n, "581354"));
                        return n => (0, a.jsx)(t, {
                            ...n,
                            channelType: r.ChannelTypes.GUILD_TEXT,
                            guildId: e.id
                        })
                    })
                }, "create-channel"), (0, a.jsx)(l.MenuItem, {
                    id: "create-category",
                    label: d.default.Messages.CREATE_CATEGORY,
                    action: () => (0, l.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("581354").then(n.bind(n, "581354"));
                        return n => (0, a.jsx)(t, {
                            ...n,
                            channelType: r.ChannelTypes.GUILD_CATEGORY,
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
            var a = n("37983");
            n("884691");
            var s = n("446674"),
                l = n("77078"),
                i = n("952451"),
                r = n("542827"),
                u = n("782340");

            function d(e, t) {
                let n = e.id,
                    d = (0, s.useStateFromStores)([i.default], () => i.default.getGuildHasUnreadIgnoreMuted(n), [n]);
                return (0, a.jsx)(l.MenuItem, {
                    id: "mark-guild-read",
                    label: u.default.Messages.MARK_AS_READ,
                    icon: void 0,
                    action: () => (0, r.default)([n], t.section),
                    disabled: !d
                })
            }
        },
        527660: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("446674"),
                l = n("669491"),
                i = n("77078"),
                r = n("519705"),
                u = n("503950"),
                d = n("483226"),
                o = n("44574"),
                c = n("282109"),
                f = n("956089"),
                E = n("49111"),
                h = n("782340"),
                g = n("460856");

            function M() {
                return [{
                    setting: E.UserNotificationSettings.ALL_MESSAGES,
                    label: h.default.Messages.FORM_LABEL_ALL_MESSAGES
                }, {
                    setting: E.UserNotificationSettings.ONLY_MENTIONS,
                    label: h.default.Messages.FORM_LABEL_ONLY_MENTIONS.format()
                }, {
                    setting: E.UserNotificationSettings.NO_MESSAGES,
                    label: h.default.Messages.FORM_LABEL_NOTHING
                }]
            }

            function p(e) {
                var t, p;
                let _ = function(e) {
                        let {
                            suppressEveryone: t,
                            suppressRoles: n,
                            mobilePush: p,
                            messageNotifications: _,
                            notifyHighlights: S,
                            isGuildUnreadsEnabled: I
                        } = (0, s.useStateFromStoresObject)([c.default], () => ({
                            suppressEveryone: c.default.isSuppressEveryoneEnabled(e.id),
                            suppressRoles: c.default.isSuppressRolesEnabled(e.id),
                            mobilePush: c.default.isMobilePushEnabled(e.id),
                            messageNotifications: c.default.getMessageNotifications(e.id),
                            notifyHighlights: c.default.getNotifyHighlights(e.id),
                            isGuildUnreadsEnabled: c.default.isGuildUnreadSettingEnabled(e.id)
                        }), [e.id]), m = S === E.HighlightSettings.DISABLED, N = (0, u.default)(e.id), A = (0, o.useGuildUnreadsExperiment)();

                        function x(t) {
                            r.default.updateGuildNotificationSettings(e.id, t)
                        }
                        return (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(i.MenuGroup, {
                                children: M().map(e => {
                                    let {
                                        setting: t,
                                        label: n
                                    } = e;
                                    return (0, a.jsx)(i.MenuRadioItem, {
                                        group: "guild-notifications",
                                        id: "".concat(t),
                                        label: n,
                                        action: () => x({
                                            message_notifications: t
                                        }),
                                        checked: t === _
                                    }, t)
                                })
                            }), (0, a.jsxs)(i.MenuGroup, {
                                children: [A && (0, a.jsx)(i.MenuCheckboxItem, {
                                    id: "enable-unread-settings",
                                    label: (0, a.jsxs)(a.Fragment, {
                                        children: [h.default.Messages.FORM_LABEL_UNREAD_SETTINGS_OPT_IN, (0, a.jsx)(f.TextBadge, {
                                            text: h.default.Messages.BETA,
                                            color: l.default.unsafe_rawColors.BRAND_500.css,
                                            className: g.betaBadge
                                        })]
                                    }),
                                    action: () => {
                                        (0, d.setGuildUnreadSetting)(e.id, !I)
                                    },
                                    checked: I
                                }), (0, a.jsx)(i.MenuCheckboxItem, {
                                    id: "suppress-everyone",
                                    label: h.default.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format(),
                                    action: () => x({
                                        suppress_everyone: !t
                                    }),
                                    checked: t
                                }), (0, a.jsx)(i.MenuCheckboxItem, {
                                    id: "suppress-roles",
                                    label: h.default.Messages.FORM_LABEL_SUPPRESS_ROLES,
                                    action: () => x({
                                        suppress_roles: !n
                                    }),
                                    checked: n
                                }), (0, a.jsx)(i.MenuCheckboxItem, {
                                    id: "suppress-highlights",
                                    label: h.default.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS,
                                    action: () => {
                                        x({
                                            notify_highlights: m ? E.HighlightSettings.ENABLED : E.HighlightSettings.DISABLED
                                        })
                                    },
                                    checked: m
                                }), N]
                            }), (0, a.jsx)(i.MenuGroup, {
                                children: (0, a.jsx)(i.MenuCheckboxItem, {
                                    id: "mobile-push",
                                    label: h.default.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS,
                                    action: () => x({
                                        mobile_push: !p
                                    }),
                                    checked: p
                                })
                            })]
                        })
                    }(e),
                    S = (0, s.useStateFromStores)([c.default], () => c.default.getMessageNotifications(e.id), [e.id]),
                    I = null === (p = M()) || void 0 === p ? void 0 : null === (t = p.find(e => {
                        let {
                            setting: t
                        } = e;
                        return t === S
                    })) || void 0 === t ? void 0 : t.label;
                return null != _ ? (0, a.jsx)(i.MenuItem, {
                    id: "guild-notifications",
                    label: h.default.Messages.NOTIFICATION_SETTINGS,
                    subtext: I,
                    action: () => (0, i.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("747593").then(n.bind(n, "747593"));
                        return n => (0, a.jsx)(t, {
                            ...n,
                            guildId: e.id
                        })
                    }),
                    children: _
                }) : null
            }
        },
        177508: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("446674"),
                l = n("77078"),
                i = n("412707"),
                r = n("838093"),
                u = n("592407"),
                d = n("148475"),
                o = n("725621"),
                c = n("923959"),
                f = n("49111"),
                E = n("782340");

            function h(e) {
                function t(t) {
                    u.default.open(e.id, t)
                }
                let n = (0, s.useStateFromStoresArray)([c.default], () => c.default.getChannels(e.id).SELECTABLE, [e]),
                    h = (0, d.default)(e);
                return __OVERLAY__ || !h ? null : (0, a.jsx)(l.MenuItem, {
                    id: "guild-settings",
                    label: E.default.Messages.SERVER_SETTINGS,
                    action: () => t(),
                    children: (0, o.getGuildSettingsSections)(e, n).map(n => {
                        let {
                            section: s,
                            label: u
                        } = n;
                        if (null == u) return null;
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
                                        (0, r.goToAppDirectory)({
                                            guildId: e.id,
                                            entrypoint: {
                                                name: i.ApplicationDirectoryEntrypointNames.GUILD_CONTEXT_MENU
                                            }
                                        })
                                    },
                                    label: u
                                }, s);
                            default:
                                return (0, a.jsx)(l.MenuItem, {
                                    id: s,
                                    action: () => t(s),
                                    label: u
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
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("446674"),
                l = n("77078"),
                i = n("126501"),
                r = n("282109"),
                u = n("782340");

            function d(e) {
                let t = (0, s.useStateFromStores)([r.default], () => r.default.isGuildCollapsed(e), [e]);
                return (0, a.jsx)(l.MenuCheckboxItem, {
                    id: "hide-muted-channels",
                    label: u.default.Messages.HIDE_MUTED_CHANNELS,
                    action: () => i.default.toggleCollapseGuild(e),
                    checked: t
                })
            }
        },
        503950: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("446674"),
                l = n("77078"),
                i = n("519705"),
                r = n("282109"),
                u = n("782340");

            function d(e) {
                let t = (0, s.useStateFromStores)([r.default], () => r.default.isMuteScheduledEventsEnabled(e), [e]);
                return (0, a.jsx)(l.MenuCheckboxItem, {
                    id: "mute-events",
                    label: u.default.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS,
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
                    canManageNicknames: r,
                    canCreateEmojisAndStickers: u,
                    canManageEmojisAndStickers: d,
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
                return t || n || i || r || u || d || o || c
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
                r = n("546671"),
                u = n("341417");
            let d = {
                    UP: "up",
                    RIGHT: "right",
                    DOWN: "down",
                    LEFT: "left"
                },
                o = {
                    [d.UP]: u.up,
                    [d.RIGHT]: u.right,
                    [d.DOWN]: u.down,
                    [d.LEFT]: u.left
                };
            class c extends s.PureComponent {
                render() {
                    let {
                        direction: e,
                        className: t
                    } = this.props;
                    return (0, a.jsx)(r.default, {
                        className: i(u.arrow, t, {
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
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("77078"),
                u = n("145131"),
                d = n("461380"),
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
                    return (0, a.jsx)(u.default, {
                        justify: u.default.Justify.START,
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
                            renderCustomBreadcrumb: u,
                            separatorClassName: c
                        } = this.props, f = e.id === n, E = t === l.length - 1, h = null != u ? u(e, f) : (0, a.jsx)("span", {
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
                            children: [null != s ? (0, a.jsx)(r.Clickable, {
                                tag: "span",
                                onClick: () => this.handleClick(e),
                                className: o.breadcrumbClickWrapper,
                                children: h
                            }) : h, E ? null : (0, a.jsx)(d.default, {
                                className: i(o.breadcrumbArrow, c),
                                direction: d.default.Directions.RIGHT
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
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("469563"),
                l = n("7037"),
                i = n("246053"),
                r = (0, s.replaceIcon)(function(e) {
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
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("469563"),
                l = n("715072"),
                i = n("75196"),
                r = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        foreground: l,
                        ...r
                    } = e;
                    return 16 === t || 16 === n ? (0, a.jsxs)("svg", {
                        ...(0, i.default)(r),
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
                        ...(0, i.default)(r),
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