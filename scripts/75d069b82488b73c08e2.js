(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["54681"], {
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
                    return E
                }
            }), n("222007");
            var s = n("37983"),
                l = n("884691"),
                a = n("414456"),
                r = n.n(a),
                i = n("77078"),
                u = n("54239"),
                o = n("79112"),
                d = n("49111"),
                c = n("782340"),
                f = n("519409");
            class h extends l.Component {
                render() {
                    return (0, s.jsxs)("div", {
                        className: f.streamerModeEnabled,
                        children: [(0, s.jsx)("div", {
                            className: f.streamerModeEnabledImage
                        }), (0, s.jsx)(i.Clickable, {
                            className: r(f.streamerModeEnabledBtn, {
                                [f.disabled]: this.props.disableButton
                            }),
                            onClick: this.handleClick,
                            children: c.default.Messages.STREAMER_MODE_ENABLED
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.handleClick = () => {
                        !this.props.disableButton && ((0, u.pushLayer)(d.Layers.USER_SETTINGS), o.default.setSection(d.UserSettingsSections.STREAMER_MODE))
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
                    return r
                }
            });
            var s = n("37983");
            n("884691");
            var l = n("669491"),
                a = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, s.jsx)("svg", {
                    ...(0, a.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, s.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
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
                    return r
                }
            });
            var s = n("37983");
            n("884691");
            var l = n("669491"),
                a = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, s.jsx)("svg", {
                    ...(0, a.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, s.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
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
                    return r
                }
            });
            var s = n("37983");
            n("884691");
            var l = n("669491"),
                a = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, s.jsx)("svg", {
                    ...(0, a.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, s.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
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
                    return r
                }
            });
            var s = n("37983");
            n("884691");
            var l = n("669491"),
                a = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, s.jsxs)("svg", {
                    ...(0, a.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, s.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
                        className: i
                    }), (0, s.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M16.828 12.93c.259-.271.259-.746-.077-.915A9.493 9.493 0 0 0 12.467 11h-.934A9.533 9.533 0 0 0 2 20.533C2 21.343 2.657 22 3.467 22h.22c.24 0 .445-.17.504-.403.285-1.113.84-2.17 1.32-2.91.134-.208.43-.094.405.154l-.261 2.61a.5.5 0 0 0 .497.549h7.64c.123 0 .17-.31.06-.363C12.819 21.14 12 20.224 12 19a3 3 0 0 1 3-3h.5a.5.5 0 0 0 .5-.5V15c0-.802.315-1.53.828-2.07ZM12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
                        className: i
                    })]
                })
            }
        },
        206625: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var s = n("884691");

            function l(e, t) {
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
                    return d
                },
                jumpToHighlight: function() {
                    return c
                }
            });
            var s = n("872717"),
                l = n("913144"),
                a = n("819689"),
                r = n("267363"),
                i = n("716241"),
                u = n("599110"),
                o = n("49111");
            async function d(e) {
                l.default.dispatch({
                    type: "CHANNEL_HIGHLIGHTS_FETCH_START",
                    guildId: e
                });
                let t = await s.default.get({
                        url: o.Endpoints.CHANNEL_HIGHLIGHTS(e)
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
                    targetMessageId: s,
                    highlightedMessageIds: l,
                    numHighlightsVisited: d
                } = e;
                await a.default.jumpToMessage({
                    channelId: n,
                    messageId: s,
                    flash: !0
                }), u.default.track(o.AnalyticEvents.CHANNEL_HIGHLIGHTS_ACKED, {
                    ...(0, i.collectGuildAnalyticsMetadata)(t),
                    ...(0, i.collectChannelAnalyticsMetadataFromId)(n),
                    message_id: s,
                    index: d,
                    ack_type: "navigator"
                });
                let c = l[d - 1];
                return null != c && r.ack(n, !0, !1, c), Promise.resolve()
            }
        },
        374705: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            });
            var s = n("37983");
            n("884691");
            var l = n("627445"),
                a = n.n(l),
                r = n("446674"),
                i = n("77078"),
                u = n("272030"),
                o = n("812204"),
                d = n("685665"),
                c = n("861370"),
                f = n("255812"),
                h = n("529932"),
                E = n("724026"),
                p = n("271938"),
                g = n("923959"),
                _ = n("697218"),
                m = n("578411"),
                S = n("230947"),
                C = n("544955"),
                I = n("747867"),
                M = n("555914"),
                v = n("513472"),
                N = n("527660"),
                A = n("177508"),
                x = n("263673"),
                T = n("58622"),
                L = n("49111"),
                R = n("782340");

            function j(e) {
                let {
                    guild: t,
                    onSelect: l,
                    hideSettings: o
                } = e, d = t.id, j = g.default.getDefaultChannel(d), O = (0, h.useExpressionSourceGuildDataForGuildLeaveModal)(t), b = (0, r.useStateFromStores)([_.default], () => {
                    let e = _.default.getCurrentUser();
                    return a(null != e, "GuildContextMenu: user cannot be undefined"), t.isOwner(e)
                }, [t]), U = (0, T.default)({
                    guild: t,
                    source: L.InstantInviteSources.GUILD_CONTEXT_MENU,
                    channel: j
                }), H = (0, x.default)(d), G = (0, v.default)(t), y = (0, N.default)(t), D = (0, A.default)(t), w = (0, S.default)({
                    guildId: t.id,
                    userId: p.default.getId(),
                    analyticsLocation: {
                        page: L.AnalyticsPages.GUILD_CHANNEL,
                        section: L.AnalyticsSections.CHAT_USERNAME,
                        object: L.AnalyticsObjects.CONTEXT_MENU_ITEM
                    }
                }), P = (0, C.default)(t), V = (0, f.default)(t.id), B = (0, c.default)({
                    id: t.id,
                    label: R.default.Messages.COPY_ID_GUILD
                }), F = (0, M.default)(t, {
                    section: L.AnalyticsSections.GUILD_LIST
                }), k = (0, E.default)(t.id), Z = (0, I.default)(t), z = t.hasFeature(L.GuildFeatures.HUB);

                function Y() {
                    (0, i.openModal)(e => (0, s.jsx)(m.GuildLeaveConfirmModalContents, {
                        ...e,
                        guild: t,
                        discoverableGuildData: O
                    }))
                }
                return z ? (0, s.jsxs)(i.Menu, {
                    navId: "guild-context",
                    onClose: u.closeContextMenu,
                    "aria-label": R.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    onSelect: l,
                    children: [(0, s.jsxs)(i.MenuGroup, {
                        children: [U, (0, s.jsx)(i.MenuItem, {
                            id: "privacy",
                            label: R.default.Messages.HUB_PRIVACY_SETTINGS,
                            action: () => (0, i.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("349406").then(n.bind(n, "349406"));
                                return n => (0, s.jsx)(e, {
                                    ...n,
                                    guild: t
                                })
                            })
                        }), w]
                    }), b ? null : (0, s.jsx)(i.MenuGroup, {
                        children: (0, s.jsx)(i.MenuItem, {
                            id: "leave-guild",
                            label: R.default.Messages.LEAVE_HUB,
                            action: Y,
                            color: "danger"
                        })
                    }), (0, s.jsx)(i.MenuGroup, {
                        children: B
                    })]
                }) : (0, s.jsxs)(i.Menu, {
                    navId: "guild-context",
                    onClose: u.closeContextMenu,
                    "aria-label": R.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    onSelect: l,
                    children: [(0, s.jsx)(i.MenuGroup, {
                        children: F
                    }), (0, s.jsx)(i.MenuGroup, {
                        children: U
                    }), (0, s.jsxs)(i.MenuGroup, {
                        children: [G, __OVERLAY__ ? null : y, H, k]
                    }), (0, s.jsxs)(i.MenuGroup, {
                        children: [o ? null : D, __OVERLAY__ ? null : (0, s.jsx)(i.MenuItem, {
                            id: "privacy",
                            label: R.default.Messages.PRIVACY_SETTINGS,
                            action: () => (0, i.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("349406").then(n.bind(n, "349406"));
                                return n => (0, s.jsx)(e, {
                                    ...n,
                                    guild: t
                                })
                            })
                        }), w]
                    }), (0, s.jsxs)(i.MenuGroup, {
                        children: [P, V]
                    }), (0, s.jsxs)(i.MenuGroup, {
                        children: [Z, !b && (0, s.jsx)(i.MenuItem, {
                            id: "leave-guild",
                            label: R.default.Messages.LEAVE_SERVER,
                            action: Y,
                            color: "danger"
                        })]
                    }), (0, s.jsx)(i.MenuGroup, {
                        children: B
                    })]
                })
            }

            function O(e) {
                let {
                    AnalyticsLocationProvider: t
                } = (0, d.default)(o.default.CONTEXT_MENU);
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
                    return d
                }
            });
            var s = n("37983");
            n("884691");
            var l = n("446674"),
                a = n("77078"),
                r = n("957255"),
                i = n("49111"),
                u = n("695838"),
                o = n("782340");

            function d(e) {
                let t = (0, l.useStateFromStores)([r.default], () => r.default.can(i.Permissions.MANAGE_CHANNELS, e));
                return __OVERLAY__ ? null : e.id === u.FAVORITES_RAW_GUILD_ID ? (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsx)(a.MenuItem, {
                        id: "create-category",
                        label: o.default.Messages.CREATE_CATEGORY,
                        action: () => (0, a.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("515680").then(n.bind(n, "515680"));
                            return t => (0, s.jsx)(e, {
                                ...t
                            })
                        })
                    })
                }) : t ? [(0, s.jsx)(a.MenuItem, {
                    id: "create-channel",
                    label: o.default.Messages.CREATE_CHANNEL,
                    action: () => (0, a.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("581354").then(n.bind(n, "581354"));
                        return n => (0, s.jsx)(t, {
                            ...n,
                            channelType: i.ChannelTypes.GUILD_TEXT,
                            guildId: e.id
                        })
                    })
                }, "create-channel"), (0, s.jsx)(a.MenuItem, {
                    id: "create-category",
                    label: o.default.Messages.CREATE_CATEGORY,
                    action: () => (0, a.openModalLazy)(async () => {
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
                    return o
                }
            });
            var s = n("37983");
            n("884691");
            var l = n("446674"),
                a = n("77078"),
                r = n("952451"),
                i = n("542827"),
                u = n("782340");

            function o(e, t) {
                let n = e.id,
                    o = (0, l.useStateFromStores)([r.default], () => r.default.getGuildHasUnreadIgnoreMuted(n), [n]);
                return (0, s.jsx)(a.MenuItem, {
                    id: "mark-guild-read",
                    label: u.default.Messages.MARK_AS_READ,
                    icon: void 0,
                    action: () => (0, i.default)([n], t.section),
                    disabled: !o
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
            var l = n("446674"),
                a = n("669491"),
                r = n("77078"),
                i = n("519705"),
                u = n("503950"),
                o = n("483226"),
                d = n("44574"),
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
                let m = function(e) {
                        let {
                            suppressEveryone: t,
                            suppressRoles: n,
                            mobilePush: _,
                            messageNotifications: m,
                            notifyHighlights: S,
                            isGuildUnreadsEnabled: C
                        } = (0, l.useStateFromStoresObject)([c.default], () => ({
                            suppressEveryone: c.default.isSuppressEveryoneEnabled(e.id),
                            suppressRoles: c.default.isSuppressRolesEnabled(e.id),
                            mobilePush: c.default.isMobilePushEnabled(e.id),
                            messageNotifications: c.default.getMessageNotifications(e.id),
                            notifyHighlights: c.default.getNotifyHighlights(e.id),
                            isGuildUnreadsEnabled: c.default.isGuildUnreadSettingEnabled(e.id)
                        }), [e.id]), I = S === h.HighlightSettings.DISABLED, M = (0, u.default)(e.id), v = (0, d.useGuildUnreadsExperiment)();

                        function N(t) {
                            i.default.updateGuildNotificationSettings(e.id, t)
                        }
                        return (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(r.MenuGroup, {
                                children: g().map(e => {
                                    let {
                                        setting: t,
                                        label: n
                                    } = e;
                                    return (0, s.jsx)(r.MenuRadioItem, {
                                        group: "guild-notifications",
                                        id: "".concat(t),
                                        label: n,
                                        action: () => N({
                                            message_notifications: t
                                        }),
                                        checked: t === m
                                    }, t)
                                })
                            }), (0, s.jsxs)(r.MenuGroup, {
                                children: [v && (0, s.jsx)(r.MenuCheckboxItem, {
                                    id: "enable-unread-settings",
                                    label: (0, s.jsxs)(s.Fragment, {
                                        children: [E.default.Messages.FORM_LABEL_UNREAD_SETTINGS_OPT_IN, (0, s.jsx)(f.TextBadge, {
                                            text: E.default.Messages.BETA,
                                            color: a.default.unsafe_rawColors.BRAND_500.css,
                                            className: p.betaBadge
                                        })]
                                    }),
                                    action: () => {
                                        (0, o.setGuildUnreadSetting)(e.id, !C)
                                    },
                                    checked: C
                                }), (0, s.jsx)(r.MenuCheckboxItem, {
                                    id: "suppress-everyone",
                                    label: E.default.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format(),
                                    action: () => N({
                                        suppress_everyone: !t
                                    }),
                                    checked: t
                                }), (0, s.jsx)(r.MenuCheckboxItem, {
                                    id: "suppress-roles",
                                    label: E.default.Messages.FORM_LABEL_SUPPRESS_ROLES,
                                    action: () => N({
                                        suppress_roles: !n
                                    }),
                                    checked: n
                                }), (0, s.jsx)(r.MenuCheckboxItem, {
                                    id: "suppress-highlights",
                                    label: E.default.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS,
                                    action: () => {
                                        N({
                                            notify_highlights: I ? h.HighlightSettings.ENABLED : h.HighlightSettings.DISABLED
                                        })
                                    },
                                    checked: I
                                }), M]
                            }), (0, s.jsx)(r.MenuGroup, {
                                children: (0, s.jsx)(r.MenuCheckboxItem, {
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
                    S = (0, l.useStateFromStores)([c.default], () => c.default.getMessageNotifications(e.id), [e.id]),
                    C = null === (_ = g()) || void 0 === _ ? void 0 : null === (t = _.find(e => {
                        let {
                            setting: t
                        } = e;
                        return t === S
                    })) || void 0 === t ? void 0 : t.label;
                return null != m ? (0, s.jsx)(r.MenuItem, {
                    id: "guild-notifications",
                    label: E.default.Messages.NOTIFICATION_SETTINGS,
                    subtext: C,
                    action: () => (0, r.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("747593").then(n.bind(n, "747593"));
                        return n => (0, s.jsx)(t, {
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
                    return E
                }
            });
            var s = n("37983");
            n("884691");
            var l = n("446674"),
                a = n("77078"),
                r = n("412707"),
                i = n("838093"),
                u = n("592407"),
                o = n("148475"),
                d = n("725621"),
                c = n("923959"),
                f = n("49111"),
                h = n("782340");

            function E(e) {
                function t(t) {
                    u.default.open(e.id, t)
                }
                let n = (0, l.useStateFromStoresArray)([c.default], () => c.default.getChannels(e.id).SELECTABLE, [e]),
                    E = (0, o.default)(e);
                return __OVERLAY__ || !E ? null : (0, s.jsx)(a.MenuItem, {
                    id: "guild-settings",
                    label: h.default.Messages.SERVER_SETTINGS,
                    action: () => t(),
                    children: (0, d.getGuildSettingsSections)(e, n).map(n => {
                        let {
                            section: l,
                            label: u
                        } = n;
                        if (null == u) return null;
                        switch (l) {
                            case f.GuildSettingsSections.DELETE:
                                return null;
                            case f.GuildSettingsSections.COMMUNITY:
                                return (0, s.jsx)(a.MenuItem, {
                                    id: l,
                                    action: () => t(l),
                                    label: h.default.Messages.GUILD_SETTINGS_COMMUNITY
                                }, l);
                            case f.GuildSettingsSections.APP_DIRECTORY:
                                return (0, s.jsx)(a.MenuItem, {
                                    id: l,
                                    action: () => {
                                        (0, i.goToAppDirectory)({
                                            guildId: e.id,
                                            entrypoint: {
                                                name: r.ApplicationDirectoryEntrypointNames.GUILD_CONTEXT_MENU
                                            }
                                        })
                                    },
                                    label: u
                                }, l);
                            default:
                                return (0, s.jsx)(a.MenuItem, {
                                    id: l,
                                    action: () => t(l),
                                    label: u
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
                    return o
                }
            });
            var s = n("37983");
            n("884691");
            var l = n("446674"),
                a = n("77078"),
                r = n("126501"),
                i = n("282109"),
                u = n("782340");

            function o(e) {
                let t = (0, l.useStateFromStores)([i.default], () => i.default.isGuildCollapsed(e), [e]);
                return (0, s.jsx)(a.MenuCheckboxItem, {
                    id: "hide-muted-channels",
                    label: u.default.Messages.HIDE_MUTED_CHANNELS,
                    action: () => r.default.toggleCollapseGuild(e),
                    checked: t
                })
            }
        },
        569912: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var s = n("65597"),
                l = n("385976"),
                a = n("867805");

            function r(e, t) {
                let n = (0, s.default)([l.default], () => null != e ? l.default.getCustomEmojiById(e) : null, [e]),
                    r = null != t ? a.default.getByName(a.default.convertSurrogateToName(t, !1)) : null;
                return {
                    customEmoji: n,
                    unicodeEmoji: r
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
                    return u
                }
            });
            var s = n("37983");
            n("884691");
            var l = n("430568"),
                a = n("569912"),
                r = n("286667");
            let i = {
                SMALL: r.small,
                MEDIUM: r.medium,
                LARGE: r.large
            };

            function u(e) {
                let {
                    emojiId: t,
                    emojiName: n,
                    defaultComponent: r,
                    size: u = i.MEDIUM
                } = e, {
                    customEmoji: o,
                    unicodeEmoji: d
                } = (0, a.default)(t, n);
                return null == o && null == d ? (0, s.jsx)(s.Fragment, {
                    children: r
                }) : (0, s.jsx)(l.default, {
                    emojiName: null != o ? null == o ? void 0 : o.name : n,
                    animated: null != o && o.animated,
                    emojiId: null == o ? void 0 : o.id,
                    autoplay: !0,
                    className: u
                })
            }
        },
        334683: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("222007");
            var s = n("884691"),
                l = n("446674"),
                a = n("817963"),
                r = n("923959"),
                i = n("305961"),
                u = n("957255"),
                o = n("49111"),
                d = (e, t) => {
                    let n = (0, l.useStateFromStores)([i.default], () => i.default.getGuild(e), [e]),
                        {
                            canCreateGuildEvent: d
                        } = (0, a.useManageResourcePermissions)(n),
                        c = (0, l.useStateFromStores)([r.default], () => r.default.getChannels(e)[r.GUILD_VOCAL_CHANNELS_KEY], [e]),
                        f = s.useMemo(() => null != t ? c.filter(e => {
                            let {
                                channel: n
                            } = e;
                            return n.type === t
                        }) : c, [c, t]),
                        h = (0, l.useStateFromStores)([u.default], () => {
                            if (u.default.can(o.Permissions.ADMINISTRATOR, n) || d) return !0;
                            for (let {
                                    channel: e
                                }
                                of f) {
                                let {
                                    canCreateGuildEvent: t
                                } = (0, a.getManageResourcePermissions)(e);
                                if (t) return !0
                            }
                            return !1
                        }, [f, n, d]);
                    return h
                }
        },
        503950: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var s = n("37983");
            n("884691");
            var l = n("446674"),
                a = n("77078"),
                r = n("519705"),
                i = n("282109"),
                u = n("782340");

            function o(e) {
                let t = (0, l.useStateFromStores)([i.default], () => i.default.isMuteScheduledEventsEnabled(e), [e]);
                return (0, s.jsx)(a.MenuCheckboxItem, {
                    id: "mute-events",
                    label: u.default.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS,
                    action: () => {
                        var n;
                        return n = {
                            mute_scheduled_events: !t
                        }, void r.default.updateGuildNotificationSettings(e, n)
                    },
                    checked: t
                })
            }
        },
        148475: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var s = n("446674"),
                l = n("957255"),
                a = n("49111");

            function r(e) {
                let {
                    canManageGuild: t,
                    canManageRoles: n,
                    canBanMembers: r,
                    canManageNicknames: i,
                    canCreateEmojisAndStickers: u,
                    canManageEmojisAndStickers: o,
                    canManageWebhooks: d,
                    canViewAuditLog: c
                } = (0, s.useStateFromStoresObject)([l.default], () => ({
                    canManageGuild: l.default.can(a.Permissions.MANAGE_GUILD, e),
                    canManageRoles: l.default.can(a.Permissions.MANAGE_ROLES, e),
                    canBanMembers: l.default.can(a.Permissions.BAN_MEMBERS, e),
                    canManageNicknames: l.default.can(a.Permissions.MANAGE_NICKNAMES, e),
                    canCreateEmojisAndStickers: l.default.can(a.Permissions.CREATE_GUILD_EXPRESSIONS, e),
                    canManageEmojisAndStickers: l.default.can(a.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
                    canManageWebhooks: l.default.can(a.Permissions.MANAGE_WEBHOOKS, e),
                    canViewAuditLog: l.default.can(a.Permissions.VIEW_AUDIT_LOG, e)
                }), [e]);
                return t || n || r || i || u || o || d || c
            }
        },
        507453: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var s = n("37983");
            n("884691");
            var l = n("414456"),
                a = n.n(l),
                r = n("598532");

            function i(e) {
                let {
                    className: t
                } = e;
                return (0, s.jsx)("div", {
                    className: a(r.image, t)
                })
            }
        },
        597517: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                hideHotspot: function() {
                    return r
                },
                setHotspotOverride: function() {
                    return i
                },
                clearHotspotOverride: function() {
                    return u
                }
            });
            var s = n("913144"),
                l = n("599110"),
                a = n("49111");

            function r(e) {
                l.default.track(a.AnalyticEvents.HOTSPOT_HIDDEN, {
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
                    return d
                }
            }), n("222007");
            var s = n("446674"),
                l = n("913144"),
                a = n("197881"),
                r = n("492397");
            let i = new Set,
                u = {};
            class o extends s.default.PersistedStore {
                initialize(e) {
                    null != e && (Array.isArray(e.hiddenHotspots) && (i = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (u = e.hotspotOverrides))
                }
                hasHotspot(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !t && u[e];
                    return !(r.CONFERENCE_MODE_ENABLED || a.ProcessArgs.isDisallowPopupsSet()) && (n || !i.has(e))
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
            o.displayName = "HotspotStore", o.persistKey = "hotspots", o.migrations = [e => ({
                hiddenHotspots: null != e ? e : [],
                hotspotOverrides: {}
            })];
            var d = new o(l.default, {
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
                    return a.default
                }
            });
            var s = n("533613");
            n.es(s, t);
            var l = n("597517");
            n.es(l, t);
            var a = n("269596")
        },
        242757: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canViewInviteModal: function() {
                    return l
                }
            });
            var s = n("49111");

            function l(e, t, n, l) {
                let a = null != n ? n : t,
                    r = null != a && e.can(s.Permissions.CREATE_INSTANT_INVITE, a);
                return r || null != t && null != t.vanityURLCode || (null == l ? void 0 : l.invite_code) != null
            }
        },
        676143: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useFilterCategoriesByQuery: function() {
                    return T
                },
                getFirstRouteFor: function() {
                    return L
                },
                clearRecentChannels: function() {
                    return R
                },
                useChannelBrowserSections: function() {
                    return j
                },
                useChannelBrowserChannelCount: function() {
                    return O
                },
                getActiveAgoTimestamp: function() {
                    return b
                }
            }), n("843762");
            var s = n("884691"),
                l = n("448105"),
                a = n.n(l),
                r = n("866227"),
                i = n.n(r),
                u = n("249654"),
                o = n("446674"),
                d = n("151426"),
                c = n("267363"),
                f = n("320954"),
                h = n("10641"),
                E = n("290886"),
                p = n("319839"),
                g = n("194704"),
                _ = n("393414"),
                m = n("42203"),
                S = n("245997"),
                C = n("660478"),
                I = n("49111"),
                M = n("724210"),
                v = n("796618"),
                N = n("133335"),
                A = n("782340");

            function x(e, t) {
                e.index = t
            }

            function T(e, t, n, l) {
                l = l.toLowerCase();
                let r = (0, E.useCanSeeOnboardingHome)(e),
                    i = s.useCallback((e, t) => !(r && e.channel.hasFlag(M.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) && e.channel.type !== I.ChannelTypes.GUILD_DIRECTORY && (0 === t.length || a(t, e.channel.name.toLowerCase()) || e.channel.topic.toLowerCase().includes(t)), [r]);
                return s.useMemo(() => {
                    let e = {
                        null: [],
                        _categories: []
                    };
                    return n[I.ChannelTypes.GUILD_CATEGORY].forEach(n => {
                        let {
                            channel: s
                        } = n;
                        "null" === s.id && (e.null = t.null.filter(e => i(e, l))), e[s.id] = t[s.id].filter(e => i(e, l))
                    }), e._categories = t._categories.filter(t => "null" === t.channel.id || 0 === l.length || e[t.channel.id].length > 0), (0, f.default)(e._categories, e).forEach(x), e
                }, [t, n, i, l])
            }

            function L(e) {
                let t = e.getSections();
                if (t[p.SECTION_INDEX_COMMUNITY] > 0) {
                    let t = e.getCommunitySection().getRow(0);
                    switch (t) {
                        case v.ChannelListCommunityRow.GUILD_HOME:
                            return M.StaticChannelRoute.GUILD_HOME;
                        case v.ChannelListCommunityRow.GUILD_ROLE_SUBSCRIPTIONS:
                            return M.StaticChannelRoute.ROLE_SUBSCRIPTIONS;
                        case v.ChannelListCommunityRow.GUILD_MEMBER_APPLICATIONS:
                            return M.StaticChannelRoute.MEMBER_APPLICATIONS
                    }
                }
                for (let s = p.SECTION_INDEX_UNCATEGORIZED_CHANNELS; s < e.voiceChannelsSectionNumber; s++)
                    if (t[s] > 0) {
                        var n;
                        let t = null === (n = e.getChannelFromSectionRow(s, 0)) || void 0 === n ? void 0 : n.channel;
                        if (null != t) return t.id
                    } return null
            }

            function R(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                (0, g.bulkClearRecents)(e, t), (0, c.bulkAck)(t.map(e => ({
                    channelId: e,
                    readStateType: N.ReadStateTypes.CHANNEL,
                    messageId: C.default.lastMessageId(e)
                }))), null != n && (0, _.transitionTo)(I.Routes.CHANNEL(e, n))
            }

            function j(e, t, n, s) {
                let l = (0, h.useIsDismissibleContentDismissed)(d.DismissibleContent.CHANNEL_BROWSER_NUX),
                    a = (0, o.useStateFromStoresObject)([m.default], () => {
                        let t = {},
                            n = m.default.getMutableGuildChannelsForGuild(e);
                        for (let e in n) {
                            let {
                                parent_id: l
                            } = n[e];
                            if (null != l) {
                                var s;
                                t[l] = (null !== (s = t[l]) && void 0 !== s ? s : 0) + 1
                            }
                        }
                        return t
                    }, [e]),
                    r = t._categories.map(e => {
                        let s = t[e.channel.id];
                        return {
                            rowCount: "null" !== e.channel.id && 0 === a[e.channel.id] ? 1 : s.length,
                            rowHeight: 0 === s.length ? 0 : n
                        }
                    });
                return !l && null != s && r.unshift({
                    rowCount: 1,
                    rowHeight: s
                }), r
            }

            function O(e) {
                var t, n;
                let s = (0, o.useStateFromStores)([S.default], () => S.default.getCategories(e)),
                    l = s._categories.length,
                    a = s._categories[s._categories.length - 1];
                if (null == a) return 0;
                let r = null !== (n = null === (t = a.channel) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : "null",
                    i = s[r];
                return null == i ? 0 : 0 === i.length ? a.index + 2 - l : i[i.length - 1].index + 2 - l
            }

            function b(e) {
                var t;
                return A.default.Messages.CHANNEL_BROWSER_ACTIVE_TEXT.format({
                    timeAgo: i(u.default.extractTimestamp(null !== (t = C.default.lastMessageId(e)) && void 0 !== t ? t : e)).fromNow()
                })
            }
        },
        959905: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useLocalizedPromoQuery: function() {
                    return a
                }
            });
            var s = n("446674"),
                l = n("160299");

            function a() {
                let {
                    localizedPricingPromo: e,
                    hasError: t
                } = (0, s.useStateFromStoresObject)([l.default], () => ({
                    localizedPricingPromo: l.default.localizedPricingPromo,
                    hasError: l.default.localizedPricingPromoHasError
                }));
                return t ? null : e
            }
        },
        485138: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useTrackLocalizedPricingPromoImpression: function() {
                    return a
                }
            });
            var s = n("759843"),
                l = n("428958");

            function a(e, t) {
                (0, l.default)({
                    type: s.ImpressionTypes.VIEW,
                    name: s.ImpressionNames.LOCALIZED_PRICING_UPSELL_VIEWED,
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
                    return u
                }
            });
            var s = n("801340"),
                l = n("913144"),
                a = n("872173"),
                r = n("599110"),
                i = n("49111");
            async function u(e, t) {
                await (0, a.updateUserGuildSettings)(e, e => (e.guildRecentsDismissedAt = s.Timestamp.fromDate(new Date), !0), a.UserSettingsDelay.INFREQUENT_USER_ACTION), l.default.dispatch({
                    type: "BULK_CLEAR_RECENTS",
                    guildId: e,
                    channelIds: t
                }), r.default.track(i.AnalyticEvents.CHANNEL_LIST_UPDATED, {
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
            var s = n("37983"),
                l = n("884691"),
                a = n("414456"),
                r = n.n(a),
                i = n("546671"),
                u = n("341417");
            let o = {
                    UP: "up",
                    RIGHT: "right",
                    DOWN: "down",
                    LEFT: "left"
                },
                d = {
                    [o.UP]: u.up,
                    [o.RIGHT]: u.right,
                    [o.DOWN]: u.down,
                    [o.LEFT]: u.left
                };
            class c extends l.PureComponent {
                render() {
                    let {
                        direction: e,
                        className: t
                    } = this.props;
                    return (0, s.jsx)(i.default, {
                        className: r(u.arrow, t, {
                            [d[e]]: !0
                        })
                    })
                }
            }
            c.Directions = o;
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
                l = n("884691"),
                a = n("414456"),
                r = n.n(a),
                i = n("77078"),
                u = n("145131"),
                o = n("461380"),
                d = n("298619");
            class c extends l.PureComponent {
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
                        className: r(d.breadcrumbs, t),
                        children: n
                    })
                }
                constructor(...e) {
                    super(...e), this.renderBreadcrumb = (e, t) => {
                        let {
                            activeId: n,
                            onBreadcrumbClick: l,
                            breadcrumbs: a,
                            renderCustomBreadcrumb: u,
                            separatorClassName: c
                        } = this.props, f = e.id === n, h = t === a.length - 1, E = null != u ? u(e, f) : (0, s.jsx)("span", {
                            className: r(d.breadcrumb, {
                                [d.activeBreadcrumb]: f,
                                [d.interactiveBreadcrumb]: null != l
                            }),
                            children: e.label
                        });
                        return (0, s.jsxs)("div", {
                            className: r(d.breadcrumbWrapper, {
                                [d.breadcrumbFinalWrapper]: h
                            }),
                            children: [null != l ? (0, s.jsx)(i.Clickable, {
                                tag: "span",
                                onClick: () => this.handleClick(e),
                                className: d.breadcrumbClickWrapper,
                                children: E
                            }) : E, h ? null : (0, s.jsx)(o.default, {
                                className: r(d.breadcrumbArrow, c),
                                direction: o.default.Directions.RIGHT
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
            var s = n("37983"),
                l = n("884691"),
                a = n("917351"),
                r = n.n(a),
                i = n("888400"),
                u = n("782340");
            let o = () => [u.default.Messages.COUNTDOWN_UNITS_SECONDS, u.default.Messages.COUNTDOWN_UNITS_MINUTES, u.default.Messages.COUNTDOWN_UNITS_HOURS, u.default.Messages.COUNTDOWN_UNITS_DAYS];
            class d extends l.PureComponent {
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
                        className: l
                    } = this.props, a = [e.days, e.hours, e.minutes, e.seconds], i = o();
                    if (0 === e.days) a.shift();
                    else if (!t) {
                        let e = a.shift();
                        a[0] += 24 * e
                    }
                    let u = r(a).map(e => e < 10 ? "0".concat(e) : e).map((e, t) => [t > 0 && !n ? ":" : " ", (0, s.jsxs)("span", {
                        children: [e, n ? i[a.length - t - 1] : null]
                    }, t)]).flatten().value();
                    return (0, s.jsx)("span", {
                        className: l,
                        children: u
                    })
                }
                render() {
                    let {
                        deadline: e,
                        children: t,
                        className: n,
                        stopAtOneSec: l
                    } = this.props;
                    if (e === 1 / 0) return (0, s.jsx)("span", {
                        className: n,
                        "aria-label": u.default.Messages.MAX_AGE_NEVER,
                        children: "∞"
                    });
                    let a = (0, i.diffAsUnits)(Date.now(), e, l);
                    return null != t ? t(a, this.defaultRender.bind(this, a)) : this.defaultRender(a)
                }
            }
            d.defaultProps = {
                showDays: !0,
                showUnits: !1,
                stopAtOneSec: !1,
                intervalDuration: 1e3
            };
            var c = d
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
            var l = n("469563"),
                a = n("7037"),
                r = n("246053"),
                i = (0, l.replaceIcon)(function(e) {
                    return (0, s.jsx)(r.default, {
                        ...e,
                        direction: r.default.Directions.UP
                    })
                }, a.ArrowSmallUpIcon)
        },
        745633: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var s = n("37983");
            n("884691");
            var l = n("469563"),
                a = n("586880"),
                r = n("75196"),
                i = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        ...a
                    } = e;
                    return (0, s.jsxs)("svg", {
                        ...(0, r.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: [(0, s.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M13.25 18L13.25 6L11.75 6L11.75 18L13.25 18Z",
                            fill: l
                        }), (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M7 12.75C6.30964 12.75 5.75 13.3096 5.75 14V18H4.25V14C4.25 12.4812 5.48122 11.25 7 11.25H18C19.5188 11.25 20.75 12.4812 20.75 14V18H19.25V14C19.25 13.3096 18.6904 12.75 18 12.75H7Z",
                            fill: l
                        }), (0, s.jsx)("path", {
                            d: "M12.5 7C11.1193 7 10 5.88071 10 4.5C10 3.11929 11.1193 2 12.5 2C13.8807 2 15 3.11929 15 4.5C15 5.88071 13.8807 7 12.5 7Z",
                            fill: l
                        }), (0, s.jsx)("path", {
                            d: "M20 22C18.6193 22 17.5 20.8807 17.5 19.5C17.5 18.1193 18.6193 17 20 17C21.3807 17 22.5 18.1193 22.5 19.5C22.5 20.8807 21.3807 22 20 22Z",
                            fill: l
                        }), (0, s.jsx)("path", {
                            d: "M12.5 22C11.1193 22 10 20.8807 10 19.5C10 18.1193 11.1193 17 12.5 17C13.8807 17 15 18.1193 15 19.5C15 20.8807 13.8807 22 12.5 22Z",
                            fill: l
                        }), (0, s.jsx)("path", {
                            d: "M5 22C3.61929 22 2.5 20.8807 2.5 19.5C2.5 18.1193 3.61929 17 5 17C6.38071 17 7.5 18.1193 7.5 19.5C7.5 20.8807 6.38071 22 5 22Z",
                            fill: l
                        })]
                    })
                }, a.HubIcon)
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
            var l = n("469563"),
                a = n("811513"),
                r = n("75196"),
                i = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: a,
                        ...i
                    } = e;
                    return (0, s.jsxs)("svg", {
                        ...(0, r.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, s.jsx)("path", {
                            className: a,
                            fill: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, s.jsx)("path", {
                            className: a,
                            fill: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, s.jsx)("path", {
                            className: a,
                            fill: l,
                            d: "M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z"
                        }), (0, s.jsx)("path", {
                            className: a,
                            fill: l,
                            d: "M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z"
                        })]
                    })
                }, a.GroupIcon)
        },
        76539: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var s = n("37983");
            n("884691");
            var l = n("469563"),
                a = n("715072"),
                r = n("75196"),
                i = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: a,
                        ...i
                    } = e;
                    return 16 === t || 16 === n ? (0, s.jsxs)("svg", {
                        ...(0, r.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        children: [(0, s.jsx)("path", {
                            className: a,
                            fill: l,
                            d: "M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"
                        }), (0, s.jsx)("path", {
                            className: a,
                            fill: l,
                            d: "M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z"
                        }), (0, s.jsx)("path", {
                            className: a,
                            fill: l,
                            d: "M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z"
                        })]
                    }) : (0, s.jsx)("svg", {
                        ...(0, r.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, s.jsx)("path", {
                            className: a,
                            fill: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M21 3H24V5H21V8H19V5H16V3H19V0H21V3ZM10 12C12.205 12 14 10.205 14 8C14 5.795 12.205 4 10 4C7.795 4 6 5.795 6 8C6 10.205 7.795 12 10 12ZM10 13C5.289 13 2 15.467 2 19V20H18V19C18 15.467 14.711 13 10 13Z"
                        })
                    })
                }, a.UserPlusIcon)
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
            var l = n("414456"),
                a = n.n(l),
                r = n("77078"),
                i = n("254686"),
                u = n("851706");
            let o = Object.freeze({
                    SIZE_10: u.size10,
                    SIZE_12: u.size12,
                    SIZE_14: u.size14,
                    SIZE_16: u.size16,
                    SIZE_20: u.size20,
                    SIZE_24: u.size24,
                    SIZE_32: u.size32
                }),
                d = e => {
                    let {
                        id: t,
                        muted: n = !1,
                        className: l = i.wrapper,
                        size: u = o.SIZE_14,
                        selectable: d = !1,
                        children: c,
                        color: f,
                        onClick: h,
                        onContextMenu: E,
                        style: p,
                        title: g,
                        uppercase: _
                    } = e;
                    return (0, s.jsx)(r.H, {
                        role: null != h ? "button" : void 0,
                        onClick: h,
                        onContextMenu: E,
                        id: t,
                        className: a(l, {
                            [i.base]: !0,
                            [u]: !0,
                            [i.selectable]: d,
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
            d.Sizes = o;
            var c = d
        },
        811305: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Sizes: function() {
                    return m
                },
                default: function() {
                    return I
                }
            }), n("424973"), n("222007");
            var s = n("37983"),
                l = n("884691"),
                a = n("414456"),
                r = n.n(a),
                i = n("627445"),
                u = n.n(i),
                o = n("77078"),
                d = n("506885"),
                c = n("981601"),
                f = n("766274"),
                h = n("697218"),
                E = n("368121"),
                p = n("523096"),
                g = n("587974"),
                _ = n("494101");
            let m = {
                SIZE_16: 16,
                SIZE_24: 24,
                SIZE_32: 32,
                SIZE_56: 56
            };

            function S(e, t) {
                let n = e instanceof f.default ? e : null != e ? e.user : null;
                return null != n ? n.id : "user-".concat(t)
            }
            class C extends l.PureComponent {
                renderUsers() {
                    let {
                        users: e,
                        max: t,
                        renderUser: n = this.defaultRenderUser,
                        size: l,
                        extraDetail: a
                    } = this.props, r = [], i = e.length === t ? e.length : t - 1, u = this.renderMoreUsers(i), o = 0;
                    for (; o < i && o < e.length;) {
                        var d;
                        let t = null == u && null == a && o === e.length - 1,
                            i = n(e[o], t, o);
                        r.push(t ? (0, s.jsx)("div", {
                            className: _.avatarContainer,
                            children: i
                        }, S(null !== (d = e[o]) && void 0 !== d ? d : null, o)) : (0, s.jsx)(g.default, {
                            className: _.avatarContainerMasked,
                            height: l,
                            width: l,
                            mask: g.default.Masks.VOICE_USER_SUMMARY_ITEM,
                            children: i
                        }, S(e[o], o))), o++
                    }
                    return null != a ? r.push(a) : null != u && r.push(u), r
                }
                renderMoreUsers(e) {
                    let {
                        max: t,
                        count: n,
                        hideMoreUsers: a,
                        renderMoreUsers: r,
                        users: i
                    } = this.props, u = Math.min(e, i.length);
                    if (!a) {
                        if (null != n) {
                            if (n >= t) return (0, s.jsx)(l.Fragment, {
                                children: r("".concat(t, "+"), t)
                            }, "more-users");
                            if (n > i.length) {
                                let e = n - i.length;
                                return (0, s.jsx)(l.Fragment, {
                                    children: r("+".concat(e), e)
                                }, "more-users")
                            }
                        } else if (u < i.length) {
                            let e = Math.min(i.length - u, 99);
                            return (0, s.jsx)(l.Fragment, {
                                children: r("+".concat(e), e)
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
                        guildId: l,
                        showUserPopout: a,
                        useFallbackUserForPopout: i
                    } = this.props, {
                        popoutUserId: f
                    } = this.state, E = n.find(e => null != e && e.id === f), p = i && null == h.default.getUser(f);
                    return (0, s.jsx)(o.Popout, {
                        position: "right",
                        preload: null == E ? void 0 : () => (0, d.default)(E.id, E.getAvatarURL(l, 80), {
                            guildId: l
                        }),
                        shouldShow: !0 === a && null != f,
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
                            className: r(e, _.container, function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m.SIZE_24;
                                switch (e) {
                                    case m.SIZE_16:
                                        return _.size16;
                                    case m.SIZE_24:
                                        return _.size24;
                                    case m.SIZE_32:
                                        return _.size32;
                                    case m.SIZE_56:
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
                    }, this._ref = l.createRef(), this.defaultRenderUser = (e, t, n) => {
                        let {
                            showUserPopout: l,
                            guildId: a,
                            size: r
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
                            src: e.getAvatarURL(a, r),
                            alt: e.username,
                            className: _.avatar
                        }, e.id);
                        return l ? (0, s.jsx)(o.Clickable, {
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
            C.defaultProps = {
                max: 10,
                renderMoreUsers: function(e) {
                    return (0, s.jsx)("div", {
                        className: _.moreUsers,
                        children: e
                    })
                },
                renderIcon: !1,
                showDefaultAvatarsForNullUsers: !1,
                size: m.SIZE_24
            };
            var I = C
        }
    }
]);