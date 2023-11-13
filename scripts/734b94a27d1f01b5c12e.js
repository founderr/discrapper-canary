(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["60773"], {
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
                    return E
                }
            }), n("222007");
            var s = n("37983"),
                a = n("884691"),
                r = n("414456"),
                l = n.n(r),
                i = n("77078"),
                u = n("54239"),
                d = n("79112"),
                o = n("49111"),
                c = n("782340"),
                f = n("519409");
            class h extends a.Component {
                render() {
                    return (0, s.jsxs)("div", {
                        className: f.streamerModeEnabled,
                        children: [(0, s.jsx)("div", {
                            className: f.streamerModeEnabledImage
                        }), (0, s.jsx)(i.Clickable, {
                            className: l(f.streamerModeEnabledBtn, {
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
            h.defaultProps = {
                disableButton: !1
            };
            var E = h
        },
        7037: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ArrowSmallUpIcon: function() {
                    return l
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("669491"),
                r = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, s.jsx)("svg", {
                    ...(0, r.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, s.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M12.707 3.293a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L11 6.414V20a1 1 0 1 0 2 0V6.414l3.293 3.293a1 1 0 0 0 1.414-1.414l-5-5Z",
                        className: i
                    })
                })
            }
        },
        811513: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GroupIcon: function() {
                    return l
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("669491"),
                r = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, s.jsx)("svg", {
                    ...(0, r.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, s.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M14.5 8a3 3 0 1 0-2.701-4.306c-.202.415.057.87.443 1.124A5.006 5.006 0 0 1 14.379 7.9c.013.058.062.1.121.1ZM18.437 17.271c.154.425.544.729.995.729H20.5a1.5 1.5 0 0 0 1.5-1.5 7.502 7.502 0 0 0-6.502-7.434c-.548-.073-.988.386-1.097.927-.06.301-.148.592-.26.871-.233.579-.054 1.291.472 1.628a9.529 9.529 0 0 1 3.824 4.78ZM12.5 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM2 20.5a7.5 7.5 0 0 1 15 0 1.5 1.5 0 0 1-1.5 1.5.202.202 0 0 1-.196-.159 12.379 12.379 0 0 0-.884-2.543c-.108-.23-.42-.149-.42.105V21.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2.097c0-.254-.312-.334-.42-.105-.318.673-.67 1.579-.884 2.543A.202.202 0 0 1 3.5 22 1.5 1.5 0 0 1 2 20.5Z",
                        className: i
                    })
                })
            }
        },
        263436: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                LockUnlockedIcon: function() {
                    return l
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("669491"),
                r = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, s.jsx)("svg", {
                    ...(0, r.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, s.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M12 1a4.985 4.985 0 0 0-3.308 1.25 1 1 0 0 0 1.324 1.5A3 3 0 0 1 15 6v2H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3h-2V6a5 5 0 0 0-5-5Zm1 14.732A2 2 0 0 0 12 12a2 2 0 0 0-1 3.732V17a1 1 0 1 0 2 0v-1.268Z",
                        clipRule: "evenodd",
                        className: i
                    })
                })
            }
        },
        206625: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var s = n("884691");

            function a(e, t) {
                let n = s.useRef(e);
                return s.useEffect(() => {
                    function e(e) {
                        null != n.current && !n.current.contains(e.target) && t()
                    }
                    return document.addEventListener("mousedown", e), () => {
                        document.removeEventListener("mousedown", e)
                    }
                }, [n, t]), n
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
            var s = n("872717"),
                a = n("913144"),
                r = n("819689"),
                l = n("267363"),
                i = n("716241"),
                u = n("599110"),
                d = n("49111");
            async function o(e) {
                a.default.dispatch({
                    type: "CHANNEL_HIGHLIGHTS_FETCH_START",
                    guildId: e
                });
                let t = await s.default.get({
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
                    targetMessageId: s,
                    highlightedMessageIds: a,
                    numHighlightsVisited: o
                } = e;
                await r.default.jumpToMessage({
                    channelId: n,
                    messageId: s,
                    flash: !0
                }), u.default.track(d.AnalyticEvents.CHANNEL_HIGHLIGHTS_ACKED, {
                    ...(0, i.collectGuildAnalyticsMetadata)(t),
                    ...(0, i.collectChannelAnalyticsMetadataFromId)(n),
                    message_id: s,
                    index: o,
                    ack_type: "navigator"
                });
                let c = a[o - 1];
                return null != c && l.ack(n, !0, !1, c), Promise.resolve()
            }
        },
        374705: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("627445"),
                r = n.n(a),
                l = n("446674"),
                i = n("77078"),
                u = n("272030"),
                d = n("812204"),
                o = n("685665"),
                c = n("861370"),
                f = n("255812"),
                h = n("529932"),
                E = n("724026"),
                p = n("271938"),
                g = n("923959"),
                _ = n("697218"),
                S = n("578411"),
                I = n("230947"),
                M = n("544955"),
                m = n("747867"),
                v = n("555914"),
                A = n("513472"),
                N = n("527660"),
                x = n("177508"),
                C = n("263673"),
                T = n("58622"),
                L = n("49111"),
                b = n("782340");

            function j(e) {
                let {
                    guild: t,
                    onSelect: a,
                    hideSettings: d
                } = e, o = t.id, j = g.default.getDefaultChannel(o), R = (0, h.useExpressionSourceGuildDataForGuildLeaveModal)(t), O = (0, l.useStateFromStores)([_.default], () => {
                    let e = _.default.getCurrentUser();
                    return r(null != e, "GuildContextMenu: user cannot be undefined"), t.isOwner(e)
                }, [t]), G = (0, T.default)({
                    guild: t,
                    source: L.InstantInviteSources.GUILD_CONTEXT_MENU,
                    channel: j
                }), U = (0, C.default)(o), H = (0, A.default)(t), y = (0, N.default)(t), D = (0, x.default)(t), P = (0, I.default)({
                    guildId: t.id,
                    userId: p.default.getId(),
                    analyticsLocation: {
                        page: L.AnalyticsPages.GUILD_CHANNEL,
                        section: L.AnalyticsSections.CHAT_USERNAME,
                        object: L.AnalyticsObjects.CONTEXT_MENU_ITEM
                    }
                }), w = (0, M.default)(t), k = (0, f.default)(t.id), F = (0, c.default)({
                    id: t.id,
                    label: b.default.Messages.COPY_ID_GUILD
                }), B = (0, v.default)(t, {
                    section: L.AnalyticsSections.GUILD_LIST
                }), V = (0, E.default)(t.id), Z = (0, m.default)(t), z = t.hasFeature(L.GuildFeatures.HUB);

                function Y() {
                    (0, i.openModal)(e => (0, s.jsx)(S.GuildLeaveConfirmModalContents, {
                        ...e,
                        guild: t,
                        discoverableGuildData: R
                    }))
                }
                return z ? (0, s.jsxs)(i.Menu, {
                    navId: "guild-context",
                    onClose: u.closeContextMenu,
                    "aria-label": b.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    onSelect: a,
                    children: [(0, s.jsxs)(i.MenuGroup, {
                        children: [G, (0, s.jsx)(i.MenuItem, {
                            id: "privacy",
                            label: b.default.Messages.HUB_PRIVACY_SETTINGS,
                            action: () => (0, i.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("349406").then(n.bind(n, "349406"));
                                return n => (0, s.jsx)(e, {
                                    ...n,
                                    guild: t
                                })
                            })
                        }), P]
                    }), O ? null : (0, s.jsx)(i.MenuGroup, {
                        children: (0, s.jsx)(i.MenuItem, {
                            id: "leave-guild",
                            label: b.default.Messages.LEAVE_HUB,
                            action: Y,
                            color: "danger"
                        })
                    }), (0, s.jsx)(i.MenuGroup, {
                        children: F
                    })]
                }) : (0, s.jsxs)(i.Menu, {
                    navId: "guild-context",
                    onClose: u.closeContextMenu,
                    "aria-label": b.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    onSelect: a,
                    children: [(0, s.jsx)(i.MenuGroup, {
                        children: B
                    }), (0, s.jsx)(i.MenuGroup, {
                        children: G
                    }), (0, s.jsxs)(i.MenuGroup, {
                        children: [H, __OVERLAY__ ? null : y, U, V]
                    }), (0, s.jsxs)(i.MenuGroup, {
                        children: [d ? null : D, __OVERLAY__ ? null : (0, s.jsx)(i.MenuItem, {
                            id: "privacy",
                            label: b.default.Messages.PRIVACY_SETTINGS,
                            action: () => (0, i.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("349406").then(n.bind(n, "349406"));
                                return n => (0, s.jsx)(e, {
                                    ...n,
                                    guild: t
                                })
                            })
                        }), P]
                    }), (0, s.jsxs)(i.MenuGroup, {
                        children: [w, k]
                    }), (0, s.jsxs)(i.MenuGroup, {
                        children: [Z, !O && (0, s.jsx)(i.MenuItem, {
                            id: "leave-guild",
                            label: b.default.Messages.LEAVE_SERVER,
                            action: Y,
                            color: "danger"
                        })]
                    }), (0, s.jsx)(i.MenuGroup, {
                        children: F
                    })]
                })
            }

            function R(e) {
                let {
                    AnalyticsLocationProvider: t
                } = (0, o.default)(d.default.CONTEXT_MENU);
                return (0, s.jsx)(t, {
                    children: (0, s.jsx)(j, {
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
            var s = n("37983");
            n("884691");
            var a = n("446674"),
                r = n("77078"),
                l = n("957255"),
                i = n("49111"),
                u = n("695838"),
                d = n("782340");

            function o(e) {
                let t = (0, a.useStateFromStores)([l.default], () => l.default.can(i.Permissions.MANAGE_CHANNELS, e));
                return __OVERLAY__ ? null : e.id === u.FAVORITES_RAW_GUILD_ID ? (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsx)(r.MenuItem, {
                        id: "create-category",
                        label: d.default.Messages.CREATE_CATEGORY,
                        action: () => (0, r.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("515680").then(n.bind(n, "515680"));
                            return t => (0, s.jsx)(e, {
                                ...t
                            })
                        })
                    })
                }) : t ? [(0, s.jsx)(r.MenuItem, {
                    id: "create-channel",
                    label: d.default.Messages.CREATE_CHANNEL,
                    action: () => (0, r.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("581354").then(n.bind(n, "581354"));
                        return n => (0, s.jsx)(t, {
                            ...n,
                            channelType: i.ChannelTypes.GUILD_TEXT,
                            guildId: e.id
                        })
                    })
                }, "create-channel"), (0, s.jsx)(r.MenuItem, {
                    id: "create-category",
                    label: d.default.Messages.CREATE_CATEGORY,
                    action: () => (0, r.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("581354").then(n.bind(n, "581354"));
                        return n => (0, s.jsx)(t, {
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
            var s = n("37983");
            n("884691");
            var a = n("446674"),
                r = n("77078"),
                l = n("952451"),
                i = n("542827"),
                u = n("782340");

            function d(e, t) {
                let n = e.id,
                    d = (0, a.useStateFromStores)([l.default], () => l.default.getGuildHasUnreadIgnoreMuted(n), [n]);
                return (0, s.jsx)(r.MenuItem, {
                    id: "mark-guild-read",
                    label: u.default.Messages.MARK_AS_READ,
                    icon: void 0,
                    action: () => (0, i.default)([n], t.section),
                    disabled: !d
                })
            }
        },
        527660: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("446674"),
                r = n("669491"),
                l = n("77078"),
                i = n("519705"),
                u = n("503950"),
                d = n("483226"),
                o = n("44574"),
                c = n("282109"),
                f = n("956089"),
                h = n("49111"),
                E = n("782340"),
                p = n("460856");

            function g() {
                return [{
                    setting: h.UserNotificationSettings.ALL_MESSAGES,
                    label: E.default.Messages.FORM_LABEL_ALL_MESSAGES
                }, {
                    setting: h.UserNotificationSettings.ONLY_MENTIONS,
                    label: E.default.Messages.FORM_LABEL_ONLY_MENTIONS.format()
                }, {
                    setting: h.UserNotificationSettings.NO_MESSAGES,
                    label: E.default.Messages.FORM_LABEL_NOTHING
                }]
            }

            function _(e) {
                var t, _;
                let S = function(e) {
                        let {
                            suppressEveryone: t,
                            suppressRoles: n,
                            mobilePush: _,
                            messageNotifications: S,
                            notifyHighlights: I,
                            isGuildUnreadsEnabled: M
                        } = (0, a.useStateFromStoresObject)([c.default], () => ({
                            suppressEveryone: c.default.isSuppressEveryoneEnabled(e.id),
                            suppressRoles: c.default.isSuppressRolesEnabled(e.id),
                            mobilePush: c.default.isMobilePushEnabled(e.id),
                            messageNotifications: c.default.getMessageNotifications(e.id),
                            notifyHighlights: c.default.getNotifyHighlights(e.id),
                            isGuildUnreadsEnabled: c.default.isGuildUnreadSettingEnabled(e.id)
                        }), [e.id]), m = I === h.HighlightSettings.DISABLED, v = (0, u.default)(e.id), A = (0, o.useGuildUnreadsExperiment)();

                        function N(t) {
                            i.default.updateGuildNotificationSettings(e.id, t)
                        }
                        return (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(l.MenuGroup, {
                                children: g().map(e => {
                                    let {
                                        setting: t,
                                        label: n
                                    } = e;
                                    return (0, s.jsx)(l.MenuRadioItem, {
                                        group: "guild-notifications",
                                        id: "".concat(t),
                                        label: n,
                                        action: () => N({
                                            message_notifications: t
                                        }),
                                        checked: t === S
                                    }, t)
                                })
                            }), (0, s.jsxs)(l.MenuGroup, {
                                children: [A && (0, s.jsx)(l.MenuCheckboxItem, {
                                    id: "enable-unread-settings",
                                    label: (0, s.jsxs)(s.Fragment, {
                                        children: [E.default.Messages.FORM_LABEL_UNREAD_SETTINGS_OPT_IN, (0, s.jsx)(f.TextBadge, {
                                            text: E.default.Messages.BETA,
                                            color: r.default.unsafe_rawColors.BRAND_500.css,
                                            className: p.betaBadge
                                        })]
                                    }),
                                    action: () => {
                                        (0, d.setGuildUnreadSetting)(e.id, !M)
                                    },
                                    checked: M
                                }), (0, s.jsx)(l.MenuCheckboxItem, {
                                    id: "suppress-everyone",
                                    label: E.default.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format(),
                                    action: () => N({
                                        suppress_everyone: !t
                                    }),
                                    checked: t
                                }), (0, s.jsx)(l.MenuCheckboxItem, {
                                    id: "suppress-roles",
                                    label: E.default.Messages.FORM_LABEL_SUPPRESS_ROLES,
                                    action: () => N({
                                        suppress_roles: !n
                                    }),
                                    checked: n
                                }), (0, s.jsx)(l.MenuCheckboxItem, {
                                    id: "suppress-highlights",
                                    label: E.default.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS,
                                    action: () => {
                                        N({
                                            notify_highlights: m ? h.HighlightSettings.ENABLED : h.HighlightSettings.DISABLED
                                        })
                                    },
                                    checked: m
                                }), v]
                            }), (0, s.jsx)(l.MenuGroup, {
                                children: (0, s.jsx)(l.MenuCheckboxItem, {
                                    id: "mobile-push",
                                    label: E.default.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS,
                                    action: () => N({
                                        mobile_push: !_
                                    }),
                                    checked: _
                                })
                            })]
                        })
                    }(e),
                    I = (0, a.useStateFromStores)([c.default], () => c.default.getMessageNotifications(e.id), [e.id]),
                    M = null === (_ = g()) || void 0 === _ ? void 0 : null === (t = _.find(e => {
                        let {
                            setting: t
                        } = e;
                        return t === I
                    })) || void 0 === t ? void 0 : t.label;
                return null != S ? (0, s.jsx)(l.MenuItem, {
                    id: "guild-notifications",
                    label: E.default.Messages.NOTIFICATION_SETTINGS,
                    subtext: M,
                    action: () => (0, l.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("747593").then(n.bind(n, "747593"));
                        return n => (0, s.jsx)(t, {
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
            var s = n("37983");
            n("884691");
            var a = n("446674"),
                r = n("77078"),
                l = n("412707"),
                i = n("838093"),
                u = n("592407"),
                d = n("148475"),
                o = n("725621"),
                c = n("923959"),
                f = n("49111"),
                h = n("782340");

            function E(e) {
                function t(t) {
                    u.default.open(e.id, t)
                }
                let n = (0, a.useStateFromStoresArray)([c.default], () => c.default.getChannels(e.id).SELECTABLE, [e]),
                    E = (0, d.default)(e);
                return __OVERLAY__ || !E ? null : (0, s.jsx)(r.MenuItem, {
                    id: "guild-settings",
                    label: h.default.Messages.SERVER_SETTINGS,
                    action: () => t(),
                    children: (0, o.getGuildSettingsSections)(e, n).map(n => {
                        let {
                            section: a,
                            label: u
                        } = n;
                        if (null == u) return null;
                        switch (a) {
                            case f.GuildSettingsSections.DELETE:
                                return null;
                            case f.GuildSettingsSections.COMMUNITY:
                                return (0, s.jsx)(r.MenuItem, {
                                    id: a,
                                    action: () => t(a),
                                    label: h.default.Messages.GUILD_SETTINGS_COMMUNITY
                                }, a);
                            case f.GuildSettingsSections.APP_DIRECTORY:
                                return (0, s.jsx)(r.MenuItem, {
                                    id: a,
                                    action: () => {
                                        (0, i.goToAppDirectory)({
                                            guildId: e.id,
                                            entrypoint: {
                                                name: l.ApplicationDirectoryEntrypointNames.GUILD_CONTEXT_MENU
                                            }
                                        })
                                    },
                                    label: u
                                }, a);
                            default:
                                return (0, s.jsx)(r.MenuItem, {
                                    id: a,
                                    action: () => t(a),
                                    label: u
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
            var s = n("37983");
            n("884691");
            var a = n("446674"),
                r = n("77078"),
                l = n("126501"),
                i = n("282109"),
                u = n("782340");

            function d(e) {
                let t = (0, a.useStateFromStores)([i.default], () => i.default.isGuildCollapsed(e), [e]);
                return (0, s.jsx)(r.MenuCheckboxItem, {
                    id: "hide-muted-channels",
                    label: u.default.Messages.HIDE_MUTED_CHANNELS,
                    action: () => l.default.toggleCollapseGuild(e),
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
            var s = n("37983");
            n("884691");
            var a = n("446674"),
                r = n("77078"),
                l = n("519705"),
                i = n("282109"),
                u = n("782340");

            function d(e) {
                let t = (0, a.useStateFromStores)([i.default], () => i.default.isMuteScheduledEventsEnabled(e), [e]);
                return (0, s.jsx)(r.MenuCheckboxItem, {
                    id: "mute-events",
                    label: u.default.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS,
                    action: () => {
                        var n;
                        return n = {
                            mute_scheduled_events: !t
                        }, void l.default.updateGuildNotificationSettings(e, n)
                    },
                    checked: t
                })
            }
        },
        148475: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var s = n("446674"),
                a = n("957255"),
                r = n("49111");

            function l(e) {
                let {
                    canManageGuild: t,
                    canManageRoles: n,
                    canBanMembers: l,
                    canManageNicknames: i,
                    canCreateEmojisAndStickers: u,
                    canManageEmojisAndStickers: d,
                    canManageWebhooks: o,
                    canViewAuditLog: c
                } = (0, s.useStateFromStoresObject)([a.default], () => ({
                    canManageGuild: a.default.can(r.Permissions.MANAGE_GUILD, e),
                    canManageRoles: a.default.can(r.Permissions.MANAGE_ROLES, e),
                    canBanMembers: a.default.can(r.Permissions.BAN_MEMBERS, e),
                    canManageNicknames: a.default.can(r.Permissions.MANAGE_NICKNAMES, e),
                    canCreateEmojisAndStickers: a.default.can(r.Permissions.CREATE_GUILD_EXPRESSIONS, e),
                    canManageEmojisAndStickers: a.default.can(r.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
                    canManageWebhooks: a.default.can(r.Permissions.MANAGE_WEBHOOKS, e),
                    canViewAuditLog: a.default.can(r.Permissions.VIEW_AUDIT_LOG, e)
                }), [e]);
                return t || n || l || i || u || d || o || c
            }
        },
        597517: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                hideHotspot: function() {
                    return l
                },
                setHotspotOverride: function() {
                    return i
                },
                clearHotspotOverride: function() {
                    return u
                }
            });
            var s = n("913144"),
                a = n("599110"),
                r = n("49111");

            function l(e) {
                a.default.track(r.AnalyticEvents.HOTSPOT_HIDDEN, {
                    hotspot_location: e
                }), s.default.wait(() => {
                    s.default.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: e
                    })
                })
            }

            function i(e, t) {
                s.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: e,
                    enabled: t
                })
            }

            function u(e) {
                s.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_CLEAR",
                    location: e
                })
            }
        },
        269596: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("222007");
            var s = n("446674"),
                a = n("913144"),
                r = n("197881"),
                l = n("492397");
            let i = new Set,
                u = {};
            class d extends s.default.PersistedStore {
                initialize(e) {
                    null != e && (Array.isArray(e.hiddenHotspots) && (i = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (u = e.hotspotOverrides))
                }
                hasHotspot(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !t && u[e];
                    return !(l.CONFERENCE_MODE_ENABLED || r.ProcessArgs.isDisallowPopupsSet()) && (n || !i.has(e))
                }
                hasHiddenHotspot(e) {
                    return i.has(e)
                }
                getHotspotOverride(e) {
                    return u[e]
                }
                getState() {
                    return {
                        hiddenHotspots: i,
                        hotspotOverrides: u
                    }
                }
            }
            d.displayName = "HotspotStore", d.persistKey = "hotspots", d.migrations = [e => ({
                hiddenHotspots: null != e ? e : [],
                hotspotOverrides: {}
            })];
            var o = new d(a.default, {
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        hiddenHotspots: t
                    } = e;
                    i = new Set(t)
                },
                HOTSPOT_HIDE: function(e) {
                    let {
                        location: t
                    } = e;
                    if (i.has(t)) return !1;
                    i.add(t)
                },
                HOTSPOT_OVERRIDE_SET: function(e) {
                    let {
                        location: t,
                        enabled: n
                    } = e;
                    u[t] = n
                },
                HOTSPOT_OVERRIDE_CLEAR: function(e) {
                    let {
                        location: t
                    } = e;
                    if (null == u[t]) return !1;
                    delete u[t]
                }
            })
        },
        139321: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HotspotStore: function() {
                    return r.default
                }
            });
            var s = n("533613");
            n.es(s, t);
            var a = n("597517");
            n.es(a, t);
            var r = n("269596")
        },
        959905: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useLocalizedPromoQuery: function() {
                    return r
                }
            });
            var s = n("446674"),
                a = n("160299");

            function r() {
                let {
                    localizedPricingPromo: e,
                    hasError: t
                } = (0, s.useStateFromStoresObject)([a.default], () => ({
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
                    return r
                }
            });
            var s = n("759843"),
                a = n("428958");

            function r(e, t) {
                (0, a.default)({
                    type: s.ImpressionTypes.VIEW,
                    name: s.ImpressionNames.LOCALIZED_PRICING_UPSELL_VIEWED,
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
            var s = n("37983"),
                a = n("884691"),
                r = n("414456"),
                l = n.n(r),
                i = n("546671"),
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
            class c extends a.PureComponent {
                render() {
                    let {
                        direction: e,
                        className: t
                    } = this.props;
                    return (0, s.jsx)(i.default, {
                        className: l(u.arrow, t, {
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
            var s = n("37983"),
                a = n("884691"),
                r = n("414456"),
                l = n.n(r),
                i = n("77078"),
                u = n("145131"),
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
                    return (0, s.jsx)(u.default, {
                        justify: u.default.Justify.START,
                        className: l(o.breadcrumbs, t),
                        children: n
                    })
                }
                constructor(...e) {
                    super(...e), this.renderBreadcrumb = (e, t) => {
                        let {
                            activeId: n,
                            onBreadcrumbClick: a,
                            breadcrumbs: r,
                            renderCustomBreadcrumb: u,
                            separatorClassName: c
                        } = this.props, f = e.id === n, h = t === r.length - 1, E = null != u ? u(e, f) : (0, s.jsx)("span", {
                            className: l(o.breadcrumb, {
                                [o.activeBreadcrumb]: f,
                                [o.interactiveBreadcrumb]: null != a
                            }),
                            children: e.label
                        });
                        return (0, s.jsxs)("div", {
                            className: l(o.breadcrumbWrapper, {
                                [o.breadcrumbFinalWrapper]: h
                            }),
                            children: [null != a ? (0, s.jsx)(i.Clickable, {
                                tag: "span",
                                onClick: () => this.handleClick(e),
                                className: o.breadcrumbClickWrapper,
                                children: E
                            }) : E, h ? null : (0, s.jsx)(d.default, {
                                className: l(o.breadcrumbArrow, c),
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
                    return i
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("469563"),
                r = n("7037"),
                l = n("246053"),
                i = (0, a.replaceIcon)(function(e) {
                    return (0, s.jsx)(l.default, {
                        ...e,
                        direction: l.default.Directions.UP
                    })
                }, r.ArrowSmallUpIcon)
        },
        155207: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("469563"),
                r = n("811513"),
                l = n("75196"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: r,
                        ...i
                    } = e;
                    return (0, s.jsxs)("svg", {
                        ...(0, l.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, s.jsx)("path", {
                            className: r,
                            fill: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, s.jsx)("path", {
                            className: r,
                            fill: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, s.jsx)("path", {
                            className: r,
                            fill: a,
                            d: "M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z"
                        }), (0, s.jsx)("path", {
                            className: r,
                            fill: a,
                            d: "M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z"
                        })]
                    })
                }, r.GroupIcon)
        },
        713573: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("414456"),
                r = n.n(a),
                l = n("77078"),
                i = n("254686"),
                u = n("851706");
            let d = Object.freeze({
                    SIZE_10: u.size10,
                    SIZE_12: u.size12,
                    SIZE_14: u.size14,
                    SIZE_16: u.size16,
                    SIZE_20: u.size20,
                    SIZE_24: u.size24,
                    SIZE_32: u.size32
                }),
                o = e => {
                    let {
                        id: t,
                        muted: n = !1,
                        className: a = i.wrapper,
                        size: u = d.SIZE_14,
                        selectable: o = !1,
                        children: c,
                        color: f,
                        onClick: h,
                        onContextMenu: E,
                        style: p,
                        title: g,
                        uppercase: _
                    } = e;
                    return (0, s.jsx)(l.H, {
                        role: null != h ? "button" : void 0,
                        onClick: h,
                        onContextMenu: E,
                        id: t,
                        className: r(a, {
                            [i.base]: !0,
                            [u]: !0,
                            [i.selectable]: o,
                            [i.muted]: n,
                            [i.uppercase]: _
                        }),
                        title: g,
                        style: null != f ? {
                            ...p,
                            color: f
                        } : p,
                        children: c
                    })
                };
            o.Sizes = d;
            var c = o
        },
        811305: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Sizes: function() {
                    return S
                },
                default: function() {
                    return m
                }
            }), n("424973"), n("222007");
            var s = n("37983"),
                a = n("884691"),
                r = n("414456"),
                l = n.n(r),
                i = n("627445"),
                u = n.n(i),
                d = n("77078"),
                o = n("506885"),
                c = n("981601"),
                f = n("766274"),
                h = n("697218"),
                E = n("368121"),
                p = n("523096"),
                g = n("587974"),
                _ = n("494101");
            let S = {
                SIZE_16: 16,
                SIZE_24: 24,
                SIZE_32: 32,
                SIZE_56: 56
            };

            function I(e, t) {
                let n = e instanceof f.default ? e : null != e ? e.user : null;
                return null != n ? n.id : "user-".concat(t)
            }
            class M extends a.PureComponent {
                renderUsers() {
                    let {
                        users: e,
                        max: t,
                        renderUser: n = this.defaultRenderUser,
                        size: a,
                        extraDetail: r
                    } = this.props, l = [], i = e.length === t ? e.length : t - 1, u = this.renderMoreUsers(i), d = 0;
                    for (; d < i && d < e.length;) {
                        var o;
                        let t = null == u && null == r && d === e.length - 1,
                            i = n(e[d], t, d);
                        l.push(t ? (0, s.jsx)("div", {
                            className: _.avatarContainer,
                            children: i
                        }, I(null !== (o = e[d]) && void 0 !== o ? o : null, d)) : (0, s.jsx)(g.default, {
                            className: _.avatarContainerMasked,
                            height: a,
                            width: a,
                            mask: g.default.Masks.VOICE_USER_SUMMARY_ITEM,
                            children: i
                        }, I(e[d], d))), d++
                    }
                    return null != r ? l.push(r) : null != u && l.push(u), l
                }
                renderMoreUsers(e) {
                    let {
                        max: t,
                        count: n,
                        hideMoreUsers: r,
                        renderMoreUsers: l,
                        users: i
                    } = this.props, u = Math.min(e, i.length);
                    if (!r) {
                        if (null != n) {
                            if (n >= t) return (0, s.jsx)(a.Fragment, {
                                children: l("".concat(t, "+"), t)
                            }, "more-users");
                            if (n > i.length) {
                                let e = n - i.length;
                                return (0, s.jsx)(a.Fragment, {
                                    children: l("+".concat(e), e)
                                }, "more-users")
                            }
                        } else if (u < i.length) {
                            let e = Math.min(i.length - u, 99);
                            return (0, s.jsx)(a.Fragment, {
                                children: l("+".concat(e), e)
                            }, "more-users")
                        }
                    }
                }
                renderIcon() {
                    return this.props.renderIcon ? (0, s.jsx)(E.default, {
                        foreground: _.foreground,
                        className: _.icon
                    }) : null
                }
                render() {
                    let {
                        className: e,
                        size: t,
                        users: n,
                        guildId: a,
                        showUserPopout: r,
                        useFallbackUserForPopout: i
                    } = this.props, {
                        popoutUserId: f
                    } = this.state, E = n.find(e => null != e && e.id === f), p = i && null == h.default.getUser(f);
                    return (0, s.jsx)(d.Popout, {
                        position: "right",
                        preload: null == E ? void 0 : () => (0, o.default)(E.id, E.getAvatarURL(a, 80), {
                            guildId: a
                        }),
                        shouldShow: !0 === r && null != f,
                        fixed: !0,
                        renderPopout: e => (u(null != f, "UserSummaryItem.render - renderPopout: popoutUserId cannot be null"), (0, s.jsx)(c.default, {
                            ...this.props,
                            user: p && null != E ? E : void 0,
                            ...e,
                            userId: f,
                            guildId: this.props.guildId
                        })),
                        onRequestClose: () => this.setState({
                            popoutUserId: null
                        }),
                        children: n => (0, s.jsxs)("div", {
                            className: l(e, _.container, function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S.SIZE_24;
                                switch (e) {
                                    case S.SIZE_16:
                                        return _.size16;
                                    case S.SIZE_24:
                                        return _.size24;
                                    case S.SIZE_32:
                                        return _.size32;
                                    case S.SIZE_56:
                                        return _.size56;
                                    default:
                                        return _.size24
                                }
                            }(t)),
                            ref: this._ref,
                            ...n,
                            children: [this.renderIcon(), this.renderUsers()]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        popoutUserId: null
                    }, this._ref = a.createRef(), this.defaultRenderUser = (e, t, n) => {
                        let {
                            showUserPopout: a,
                            guildId: r,
                            size: l
                        } = this.props;
                        if (null == e) {
                            if (!this.props.showDefaultAvatarsForNullUsers) return (0, s.jsx)("div", {
                                className: _.emptyUser
                            });
                            {
                                let e = (null != n ? n : 0) % p.default.DEFAULT_AVATARS.length,
                                    t = p.default.DEFAULT_AVATARS[e];
                                return (0, s.jsx)("img", {
                                    src: t,
                                    alt: "",
                                    className: _.avatar
                                })
                            }
                        }
                        let i = (0, s.jsx)("img", {
                            src: e.getAvatarURL(r, l),
                            alt: e.username,
                            className: _.avatar
                        }, e.id);
                        return a ? (0, s.jsx)(d.Clickable, {
                            className: _.clickableAvatar,
                            onClick: () => {
                                null != this._ref.current && null != e && this.setState({
                                    popoutUserId: e.id
                                })
                            },
                            tabIndex: -1,
                            children: i
                        }, e.id) : i
                    }
                }
            }
            M.defaultProps = {
                max: 10,
                renderMoreUsers: function(e) {
                    return (0, s.jsx)("div", {
                        className: _.moreUsers,
                        children: e
                    })
                },
                renderIcon: !1,
                showDefaultAvatarsForNullUsers: !1,
                size: S.SIZE_24
            };
            var m = M
        }
    }
]);