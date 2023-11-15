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
                    return h
                }
            }), n("222007");
            var s = n("37983"),
                a = n("884691"),
                l = n("414456"),
                r = n.n(l),
                u = n("77078"),
                i = n("54239"),
                d = n("79112"),
                o = n("49111"),
                c = n("782340"),
                f = n("519409");
            class E extends a.Component {
                render() {
                    return (0, s.jsxs)("div", {
                        className: f.streamerModeEnabled,
                        children: [(0, s.jsx)("div", {
                            className: f.streamerModeEnabledImage
                        }), (0, s.jsx)(u.Clickable, {
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
                        !this.props.disableButton && ((0, i.pushLayer)(o.Layers.USER_SETTINGS), d.default.setSection(o.UserSettingsSections.STREAMER_MODE))
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
                    return r
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("669491"),
                l = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...i
                } = e;
                return (0, s.jsx)("svg", {
                    ...(0, l.default)(i),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, s.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M12.707 3.293a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L11 6.414V20a1 1 0 1 0 2 0V6.414l3.293 3.293a1 1 0 0 0 1.414-1.414l-5-5Z",
                        className: u
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
            var a = n("669491"),
                l = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...i
                } = e;
                return (0, s.jsx)("svg", {
                    ...(0, l.default)(i),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, s.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M14.5 8a3 3 0 1 0-2.701-4.306c-.202.415.057.87.443 1.124A5.006 5.006 0 0 1 14.379 7.9c.013.058.062.1.121.1ZM18.437 17.271c.154.425.544.729.995.729H20.5a1.5 1.5 0 0 0 1.5-1.5 7.502 7.502 0 0 0-6.502-7.434c-.548-.073-.988.386-1.097.927-.06.301-.148.592-.26.871-.233.579-.054 1.291.472 1.628a9.529 9.529 0 0 1 3.824 4.78ZM12.5 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM2 20.5a7.5 7.5 0 0 1 15 0 1.5 1.5 0 0 1-1.5 1.5.202.202 0 0 1-.196-.159 12.379 12.379 0 0 0-.884-2.543c-.108-.23-.42-.149-.42.105V21.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2.097c0-.254-.312-.334-.42-.105-.318.673-.67 1.579-.884 2.543A.202.202 0 0 1 3.5 22 1.5 1.5 0 0 1 2 20.5Z",
                        className: u
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
            var a = n("669491"),
                l = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...i
                } = e;
                return (0, s.jsx)("svg", {
                    ...(0, l.default)(i),
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
                        className: u
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
        531674: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getMuteTimes: function() {
                    return p
                },
                default: function() {
                    return M
                }
            }), n("222007");
            var s = n("37983");
            n("884691");
            var a = n("866227"),
                l = n.n(a),
                r = n("446674"),
                u = n("77078"),
                i = n("820542"),
                d = n("519705"),
                o = n("319165"),
                c = n("282109"),
                f = n("679653"),
                E = n("49111"),
                h = n("468200"),
                _ = n("782340");
            let p = () => [{
                    value: h.MuteUntilSeconds.MINUTES_15,
                    label: _.default.Messages.MUTE_DURATION_15_MINUTES
                }, {
                    value: h.MuteUntilSeconds.HOURS_1,
                    label: _.default.Messages.MUTE_DURATION_1_HOUR
                }, {
                    value: h.MuteUntilSeconds.HOURS_3,
                    label: _.default.Messages.MUTE_DURATION_3_HOURS
                }, {
                    value: h.MuteUntilSeconds.HOURS_8,
                    label: _.default.Messages.MUTE_DURATION_8_HOURS
                }, {
                    value: h.MuteUntilSeconds.HOURS_24,
                    label: _.default.Messages.MUTE_DURATION_24_HOURS
                }, {
                    value: h.MuteUntilSeconds.ALWAYS,
                    label: _.default.Messages.MUTE_DURATION_ALWAYS
                }],
                g = e => {
                    let t = e > 0 ? l().add(e, "second").toISOString() : null;
                    return {
                        muted: !0,
                        mute_config: {
                            selected_time_window: e,
                            end_time: t
                        }
                    }
                };

            function M(e, t) {
                let [n, a] = (0, r.useStateFromStoresArray)([c.default], () => [c.default.isChannelMuted(e.guild_id, e.id), c.default.getChannelMuteConfig(e.guild_id, e.id)]), l = (0, o.useMutedUntilText)(a), h = (0, f.default)(e, !0);

                function M(t) {
                    t && e.type === E.ChannelTypes.GUILD_CATEGORY && (0, i.categoryCollapse)(e.id), d.default.updateChannelOverrideSettings(e.guild_id, e.id, {
                        muted: t
                    })
                }
                let S = _.default.Messages.MUTE_CHANNEL_GENERIC,
                    m = _.default.Messages.UNMUTE_CHANNEL_GENERIC;
                switch (e.type) {
                    case E.ChannelTypes.GUILD_CATEGORY:
                        S = _.default.Messages.MUTE_CATEGORY, m = _.default.Messages.UNMUTE_CATEGORY;
                        break;
                    case E.ChannelTypes.GROUP_DM:
                        S = _.default.Messages.MUTE_CONVERSATION, m = _.default.Messages.UNMUTE_CONVERSATION;
                        break;
                    case E.ChannelTypes.DM:
                        S = _.default.Messages.MUTE_CHANNEL.format({
                            name: h
                        }), m = _.default.Messages.UNMUTE_CHANNEL.format({
                            name: h
                        });
                        break;
                    default:
                        S = _.default.Messages.MUTE_CHANNEL_GENERIC, m = _.default.Messages.UNMUTE_CHANNEL_GENERIC
                }
                return n ? (0, s.jsx)(u.MenuItem, {
                    id: "unmute-channel",
                    label: m,
                    subtext: l,
                    action: () => M(!1)
                }) : (0, s.jsx)(u.MenuItem, {
                    id: "mute-channel",
                    label: S,
                    action: () => M(!0),
                    children: p().map(n => {
                        let {
                            value: a,
                            label: l
                        } = n;
                        return (0, s.jsx)(u.MenuItem, {
                            id: "".concat(a),
                            label: l,
                            action: () => (function(n) {
                                e.type === E.ChannelTypes.GUILD_CATEGORY && (0, i.categoryCollapse)(e.id);
                                let s = g(n);
                                d.default.updateChannelOverrideSettings(e.guild_id, e.id, s, t)
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
            var s = n("872717"),
                a = n("913144"),
                l = n("819689"),
                r = n("267363"),
                u = n("716241"),
                i = n("599110"),
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
                await l.default.jumpToMessage({
                    channelId: n,
                    messageId: s,
                    flash: !0
                }), i.default.track(d.AnalyticEvents.CHANNEL_HIGHLIGHTS_ACKED, {
                    ...(0, u.collectGuildAnalyticsMetadata)(t),
                    ...(0, u.collectChannelAnalyticsMetadataFromId)(n),
                    message_id: s,
                    index: o,
                    ack_type: "navigator"
                });
                let c = a[o - 1];
                return null != c && r.ack(n, !0, !1, c), Promise.resolve()
            }
        },
        374705: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("627445"),
                l = n.n(a),
                r = n("446674"),
                u = n("77078"),
                i = n("272030"),
                d = n("812204"),
                o = n("685665"),
                c = n("861370"),
                f = n("255812"),
                E = n("529932"),
                h = n("724026"),
                _ = n("271938"),
                p = n("923959"),
                g = n("697218"),
                M = n("578411"),
                S = n("230947"),
                m = n("544955"),
                I = n("747867"),
                N = n("555914"),
                A = n("513472"),
                T = n("527660"),
                v = n("177508"),
                C = n("263673"),
                x = n("58622"),
                U = n("49111"),
                b = n("782340");

            function R(e) {
                let {
                    guild: t,
                    onSelect: a,
                    hideSettings: d
                } = e, o = t.id, R = p.default.getDefaultChannel(o), L = (0, E.useExpressionSourceGuildDataForGuildLeaveModal)(t), O = (0, r.useStateFromStores)([g.default], () => {
                    let e = g.default.getCurrentUser();
                    return l(null != e, "GuildContextMenu: user cannot be undefined"), t.isOwner(e)
                }, [t]), j = (0, x.default)({
                    guild: t,
                    source: U.InstantInviteSources.GUILD_CONTEXT_MENU,
                    channel: R
                }), G = (0, C.default)(o), H = (0, A.default)(t), y = (0, T.default)(t), D = (0, v.default)(t), P = (0, S.default)({
                    guildId: t.id,
                    userId: _.default.getId(),
                    analyticsLocation: {
                        page: U.AnalyticsPages.GUILD_CHANNEL,
                        section: U.AnalyticsSections.CHAT_USERNAME,
                        object: U.AnalyticsObjects.CONTEXT_MENU_ITEM
                    }
                }), w = (0, m.default)(t), k = (0, f.default)(t.id), F = (0, c.default)({
                    id: t.id,
                    label: b.default.Messages.COPY_ID_GUILD
                }), V = (0, N.default)(t, {
                    section: U.AnalyticsSections.GUILD_LIST
                }), B = (0, h.default)(t.id), Z = (0, I.default)(t), z = t.hasFeature(U.GuildFeatures.HUB);

                function Y() {
                    (0, u.openModal)(e => (0, s.jsx)(M.GuildLeaveConfirmModalContents, {
                        ...e,
                        guild: t,
                        discoverableGuildData: L
                    }))
                }
                return z ? (0, s.jsxs)(u.Menu, {
                    navId: "guild-context",
                    onClose: i.closeContextMenu,
                    "aria-label": b.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    onSelect: a,
                    children: [(0, s.jsxs)(u.MenuGroup, {
                        children: [j, (0, s.jsx)(u.MenuItem, {
                            id: "privacy",
                            label: b.default.Messages.HUB_PRIVACY_SETTINGS,
                            action: () => (0, u.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("349406").then(n.bind(n, "349406"));
                                return n => (0, s.jsx)(e, {
                                    ...n,
                                    guild: t
                                })
                            })
                        }), P]
                    }), O ? null : (0, s.jsx)(u.MenuGroup, {
                        children: (0, s.jsx)(u.MenuItem, {
                            id: "leave-guild",
                            label: b.default.Messages.LEAVE_HUB,
                            action: Y,
                            color: "danger"
                        })
                    }), (0, s.jsx)(u.MenuGroup, {
                        children: F
                    })]
                }) : (0, s.jsxs)(u.Menu, {
                    navId: "guild-context",
                    onClose: i.closeContextMenu,
                    "aria-label": b.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    onSelect: a,
                    children: [(0, s.jsx)(u.MenuGroup, {
                        children: V
                    }), (0, s.jsx)(u.MenuGroup, {
                        children: j
                    }), (0, s.jsxs)(u.MenuGroup, {
                        children: [H, __OVERLAY__ ? null : y, G, B]
                    }), (0, s.jsxs)(u.MenuGroup, {
                        children: [d ? null : D, __OVERLAY__ ? null : (0, s.jsx)(u.MenuItem, {
                            id: "privacy",
                            label: b.default.Messages.PRIVACY_SETTINGS,
                            action: () => (0, u.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("349406").then(n.bind(n, "349406"));
                                return n => (0, s.jsx)(e, {
                                    ...n,
                                    guild: t
                                })
                            })
                        }), P]
                    }), (0, s.jsxs)(u.MenuGroup, {
                        children: [w, k]
                    }), (0, s.jsxs)(u.MenuGroup, {
                        children: [Z, !O && (0, s.jsx)(u.MenuItem, {
                            id: "leave-guild",
                            label: b.default.Messages.LEAVE_SERVER,
                            action: Y,
                            color: "danger"
                        })]
                    }), (0, s.jsx)(u.MenuGroup, {
                        children: F
                    })]
                })
            }

            function L(e) {
                let {
                    AnalyticsLocationProvider: t
                } = (0, o.default)(d.default.CONTEXT_MENU);
                return (0, s.jsx)(t, {
                    children: (0, s.jsx)(R, {
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
                l = n("77078"),
                r = n("957255"),
                u = n("49111"),
                i = n("695838"),
                d = n("782340");

            function o(e) {
                let t = (0, a.useStateFromStores)([r.default], () => r.default.can(u.Permissions.MANAGE_CHANNELS, e));
                return __OVERLAY__ ? null : e.id === i.FAVORITES_RAW_GUILD_ID ? (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsx)(l.MenuItem, {
                        id: "create-category",
                        label: d.default.Messages.CREATE_CATEGORY,
                        action: () => (0, l.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("515680").then(n.bind(n, "515680"));
                            return t => (0, s.jsx)(e, {
                                ...t
                            })
                        })
                    })
                }) : t ? [(0, s.jsx)(l.MenuItem, {
                    id: "create-channel",
                    label: d.default.Messages.CREATE_CHANNEL,
                    action: () => (0, l.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("581354").then(n.bind(n, "581354"));
                        return n => (0, s.jsx)(t, {
                            ...n,
                            channelType: u.ChannelTypes.GUILD_TEXT,
                            guildId: e.id
                        })
                    })
                }, "create-channel"), (0, s.jsx)(l.MenuItem, {
                    id: "create-category",
                    label: d.default.Messages.CREATE_CATEGORY,
                    action: () => (0, l.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("581354").then(n.bind(n, "581354"));
                        return n => (0, s.jsx)(t, {
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
                    return d
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("446674"),
                l = n("77078"),
                r = n("952451"),
                u = n("542827"),
                i = n("782340");

            function d(e, t) {
                let n = e.id,
                    d = (0, a.useStateFromStores)([r.default], () => r.default.getGuildHasUnreadIgnoreMuted(n), [n]);
                return (0, s.jsx)(l.MenuItem, {
                    id: "mark-guild-read",
                    label: i.default.Messages.MARK_AS_READ,
                    icon: void 0,
                    action: () => (0, u.default)([n], t.section),
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
            var s = n("37983");
            n("884691");
            var a = n("866227"),
                l = n.n(a),
                r = n("446674"),
                u = n("77078"),
                i = n("519705"),
                d = n("531674"),
                o = n("319165"),
                c = n("282109"),
                f = n("782340");

            function E(e, t) {
                let n = null == e ? void 0 : e.id,
                    {
                        muted: a,
                        muteConfig: E
                    } = (0, r.useStateFromStoresObject)([c.default], () => ({
                        muted: null != n ? c.default.isMuted(n) : void 0,
                        muteConfig: null != n ? c.default.getMuteConfig(n) : void 0
                    }), [n]),
                    h = (0, o.useMutedUntilText)(E);
                return null == n ? null : a ? (0, s.jsx)(u.MenuItem, {
                    id: "unmute-guild",
                    label: f.default.Messages.UNMUTE_SERVER,
                    subtext: h,
                    action: () => i.default.updateGuildNotificationSettings(n, {
                        muted: !1
                    })
                }) : (0, s.jsx)(u.MenuItem, {
                    id: "mute-guild",
                    label: f.default.Messages.MUTE_SERVER,
                    action: () => i.default.updateGuildNotificationSettings(n, {
                        muted: !0
                    }),
                    children: (0, d.getMuteTimes)().map(e => {
                        let {
                            value: a,
                            label: r
                        } = e;
                        return (0, s.jsx)(u.MenuItem, {
                            id: "".concat(a),
                            label: r,
                            action: () => (function(e) {
                                if (null == n) return;
                                let s = e > 0 ? l().add(e, "second").toISOString() : null;
                                i.default.updateGuildNotificationSettings(n, {
                                    muted: !0,
                                    mute_config: {
                                        selected_time_window: e,
                                        end_time: s
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
                    return g
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("446674"),
                l = n("669491"),
                r = n("77078"),
                u = n("519705"),
                i = n("503950"),
                d = n("483226"),
                o = n("44574"),
                c = n("282109"),
                f = n("956089"),
                E = n("49111"),
                h = n("782340"),
                _ = n("460856");

            function p() {
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

            function g(e) {
                var t, g;
                let M = function(e) {
                        let {
                            suppressEveryone: t,
                            suppressRoles: n,
                            mobilePush: g,
                            messageNotifications: M,
                            notifyHighlights: S,
                            isGuildUnreadsEnabled: m
                        } = (0, a.useStateFromStoresObject)([c.default], () => ({
                            suppressEveryone: c.default.isSuppressEveryoneEnabled(e.id),
                            suppressRoles: c.default.isSuppressRolesEnabled(e.id),
                            mobilePush: c.default.isMobilePushEnabled(e.id),
                            messageNotifications: c.default.getMessageNotifications(e.id),
                            notifyHighlights: c.default.getNotifyHighlights(e.id),
                            isGuildUnreadsEnabled: c.default.isGuildUnreadSettingEnabled(e.id)
                        }), [e.id]), I = S === E.HighlightSettings.DISABLED, N = (0, i.default)(e.id), A = (0, o.useGuildUnreadsExperiment)();

                        function T(t) {
                            u.default.updateGuildNotificationSettings(e.id, t)
                        }
                        return (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(r.MenuGroup, {
                                children: p().map(e => {
                                    let {
                                        setting: t,
                                        label: n
                                    } = e;
                                    return (0, s.jsx)(r.MenuRadioItem, {
                                        group: "guild-notifications",
                                        id: "".concat(t),
                                        label: n,
                                        action: () => T({
                                            message_notifications: t
                                        }),
                                        checked: t === M
                                    }, t)
                                })
                            }), (0, s.jsxs)(r.MenuGroup, {
                                children: [A && (0, s.jsx)(r.MenuCheckboxItem, {
                                    id: "enable-unread-settings",
                                    label: (0, s.jsxs)(s.Fragment, {
                                        children: [h.default.Messages.FORM_LABEL_UNREAD_SETTINGS_OPT_IN, (0, s.jsx)(f.TextBadge, {
                                            text: h.default.Messages.BETA,
                                            color: l.default.unsafe_rawColors.BRAND_500.css,
                                            className: _.betaBadge
                                        })]
                                    }),
                                    action: () => {
                                        (0, d.setGuildUnreadSetting)(e.id, !m)
                                    },
                                    checked: m
                                }), (0, s.jsx)(r.MenuCheckboxItem, {
                                    id: "suppress-everyone",
                                    label: h.default.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format(),
                                    action: () => T({
                                        suppress_everyone: !t
                                    }),
                                    checked: t
                                }), (0, s.jsx)(r.MenuCheckboxItem, {
                                    id: "suppress-roles",
                                    label: h.default.Messages.FORM_LABEL_SUPPRESS_ROLES,
                                    action: () => T({
                                        suppress_roles: !n
                                    }),
                                    checked: n
                                }), (0, s.jsx)(r.MenuCheckboxItem, {
                                    id: "suppress-highlights",
                                    label: h.default.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS,
                                    action: () => {
                                        T({
                                            notify_highlights: I ? E.HighlightSettings.ENABLED : E.HighlightSettings.DISABLED
                                        })
                                    },
                                    checked: I
                                }), N]
                            }), (0, s.jsx)(r.MenuGroup, {
                                children: (0, s.jsx)(r.MenuCheckboxItem, {
                                    id: "mobile-push",
                                    label: h.default.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS,
                                    action: () => T({
                                        mobile_push: !g
                                    }),
                                    checked: g
                                })
                            })]
                        })
                    }(e),
                    S = (0, a.useStateFromStores)([c.default], () => c.default.getMessageNotifications(e.id), [e.id]),
                    m = null === (g = p()) || void 0 === g ? void 0 : null === (t = g.find(e => {
                        let {
                            setting: t
                        } = e;
                        return t === S
                    })) || void 0 === t ? void 0 : t.label;
                return null != M ? (0, s.jsx)(r.MenuItem, {
                    id: "guild-notifications",
                    label: h.default.Messages.NOTIFICATION_SETTINGS,
                    subtext: m,
                    action: () => (0, r.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("747593").then(n.bind(n, "747593"));
                        return n => (0, s.jsx)(t, {
                            ...n,
                            guildId: e.id
                        })
                    }),
                    children: M
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
            var s = n("37983");
            n("884691");
            var a = n("446674"),
                l = n("77078"),
                r = n("412707"),
                u = n("838093"),
                i = n("592407"),
                d = n("148475"),
                o = n("725621"),
                c = n("923959"),
                f = n("49111"),
                E = n("782340");

            function h(e) {
                function t(t) {
                    i.default.open(e.id, t)
                }
                let n = (0, a.useStateFromStoresArray)([c.default], () => c.default.getChannels(e.id).SELECTABLE, [e]),
                    h = (0, d.default)(e);
                return __OVERLAY__ || !h ? null : (0, s.jsx)(l.MenuItem, {
                    id: "guild-settings",
                    label: E.default.Messages.SERVER_SETTINGS,
                    action: () => t(),
                    children: (0, o.getGuildSettingsSections)(e, n).map(n => {
                        let {
                            section: a,
                            label: i
                        } = n;
                        if (null == i) return null;
                        switch (a) {
                            case f.GuildSettingsSections.DELETE:
                                return null;
                            case f.GuildSettingsSections.COMMUNITY:
                                return (0, s.jsx)(l.MenuItem, {
                                    id: a,
                                    action: () => t(a),
                                    label: E.default.Messages.GUILD_SETTINGS_COMMUNITY
                                }, a);
                            case f.GuildSettingsSections.APP_DIRECTORY:
                                return (0, s.jsx)(l.MenuItem, {
                                    id: a,
                                    action: () => {
                                        (0, u.goToAppDirectory)({
                                            guildId: e.id,
                                            entrypoint: {
                                                name: r.ApplicationDirectoryEntrypointNames.GUILD_CONTEXT_MENU
                                            }
                                        })
                                    },
                                    label: i
                                }, a);
                            default:
                                return (0, s.jsx)(l.MenuItem, {
                                    id: a,
                                    action: () => t(a),
                                    label: i
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
                l = n("77078"),
                r = n("126501"),
                u = n("282109"),
                i = n("782340");

            function d(e) {
                let t = (0, a.useStateFromStores)([u.default], () => u.default.isGuildCollapsed(e), [e]);
                return (0, s.jsx)(l.MenuCheckboxItem, {
                    id: "hide-muted-channels",
                    label: i.default.Messages.HIDE_MUTED_CHANNELS,
                    action: () => r.default.toggleCollapseGuild(e),
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
                l = n("77078"),
                r = n("519705"),
                u = n("282109"),
                i = n("782340");

            function d(e) {
                let t = (0, a.useStateFromStores)([u.default], () => u.default.isMuteScheduledEventsEnabled(e), [e]);
                return (0, s.jsx)(l.MenuCheckboxItem, {
                    id: "mute-events",
                    label: i.default.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS,
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
                a = n("957255"),
                l = n("49111");

            function r(e) {
                let {
                    canManageGuild: t,
                    canManageRoles: n,
                    canBanMembers: r,
                    canManageNicknames: u,
                    canCreateEmojisAndStickers: i,
                    canManageEmojisAndStickers: d,
                    canManageWebhooks: o,
                    canViewAuditLog: c
                } = (0, s.useStateFromStoresObject)([a.default], () => ({
                    canManageGuild: a.default.can(l.Permissions.MANAGE_GUILD, e),
                    canManageRoles: a.default.can(l.Permissions.MANAGE_ROLES, e),
                    canBanMembers: a.default.can(l.Permissions.BAN_MEMBERS, e),
                    canManageNicknames: a.default.can(l.Permissions.MANAGE_NICKNAMES, e),
                    canCreateEmojisAndStickers: a.default.can(l.Permissions.CREATE_GUILD_EXPRESSIONS, e),
                    canManageEmojisAndStickers: a.default.can(l.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
                    canManageWebhooks: a.default.can(l.Permissions.MANAGE_WEBHOOKS, e),
                    canViewAuditLog: a.default.can(l.Permissions.VIEW_AUDIT_LOG, e)
                }), [e]);
                return t || n || r || u || i || d || o || c
            }
        },
        597517: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                hideHotspot: function() {
                    return r
                },
                setHotspotOverride: function() {
                    return u
                },
                clearHotspotOverride: function() {
                    return i
                }
            });
            var s = n("913144"),
                a = n("599110"),
                l = n("49111");

            function r(e) {
                a.default.track(l.AnalyticEvents.HOTSPOT_HIDDEN, {
                    hotspot_location: e
                }), s.default.wait(() => {
                    s.default.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: e
                    })
                })
            }

            function u(e, t) {
                s.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: e,
                    enabled: t
                })
            }

            function i(e) {
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
                l = n("197881"),
                r = n("492397");
            let u = new Set,
                i = {};
            class d extends s.default.PersistedStore {
                initialize(e) {
                    null != e && (Array.isArray(e.hiddenHotspots) && (u = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (i = e.hotspotOverrides))
                }
                hasHotspot(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !t && i[e];
                    return !(r.CONFERENCE_MODE_ENABLED || l.ProcessArgs.isDisallowPopupsSet()) && (n || !u.has(e))
                }
                hasHiddenHotspot(e) {
                    return u.has(e)
                }
                getHotspotOverride(e) {
                    return i[e]
                }
                getState() {
                    return {
                        hiddenHotspots: u,
                        hotspotOverrides: i
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
                    u = new Set(t)
                },
                HOTSPOT_HIDE: function(e) {
                    let {
                        location: t
                    } = e;
                    if (u.has(t)) return !1;
                    u.add(t)
                },
                HOTSPOT_OVERRIDE_SET: function(e) {
                    let {
                        location: t,
                        enabled: n
                    } = e;
                    i[t] = n
                },
                HOTSPOT_OVERRIDE_CLEAR: function(e) {
                    let {
                        location: t
                    } = e;
                    if (null == i[t]) return !1;
                    delete i[t]
                }
            })
        },
        139321: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HotspotStore: function() {
                    return l.default
                }
            });
            var s = n("533613");
            n.es(s, t);
            var a = n("597517");
            n.es(a, t);
            var l = n("269596")
        },
        959905: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useLocalizedPromoQuery: function() {
                    return l
                }
            });
            var s = n("446674"),
                a = n("160299");

            function l() {
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
                    return l
                }
            });
            var s = n("759843"),
                a = n("428958");

            function l(e, t) {
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
                l = n("414456"),
                r = n.n(l),
                u = n("546671"),
                i = n("341417");
            let d = {
                    UP: "up",
                    RIGHT: "right",
                    DOWN: "down",
                    LEFT: "left"
                },
                o = {
                    [d.UP]: i.up,
                    [d.RIGHT]: i.right,
                    [d.DOWN]: i.down,
                    [d.LEFT]: i.left
                };
            class c extends a.PureComponent {
                render() {
                    let {
                        direction: e,
                        className: t
                    } = this.props;
                    return (0, s.jsx)(u.default, {
                        className: r(i.arrow, t, {
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
                l = n("414456"),
                r = n.n(l),
                u = n("77078"),
                i = n("145131"),
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
                    return (0, s.jsx)(i.default, {
                        justify: i.default.Justify.START,
                        className: r(o.breadcrumbs, t),
                        children: n
                    })
                }
                constructor(...e) {
                    super(...e), this.renderBreadcrumb = (e, t) => {
                        let {
                            activeId: n,
                            onBreadcrumbClick: a,
                            breadcrumbs: l,
                            renderCustomBreadcrumb: i,
                            separatorClassName: c
                        } = this.props, f = e.id === n, E = t === l.length - 1, h = null != i ? i(e, f) : (0, s.jsx)("span", {
                            className: r(o.breadcrumb, {
                                [o.activeBreadcrumb]: f,
                                [o.interactiveBreadcrumb]: null != a
                            }),
                            children: e.label
                        });
                        return (0, s.jsxs)("div", {
                            className: r(o.breadcrumbWrapper, {
                                [o.breadcrumbFinalWrapper]: E
                            }),
                            children: [null != a ? (0, s.jsx)(u.Clickable, {
                                tag: "span",
                                onClick: () => this.handleClick(e),
                                className: o.breadcrumbClickWrapper,
                                children: h
                            }) : h, E ? null : (0, s.jsx)(d.default, {
                                className: r(o.breadcrumbArrow, c),
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
                    return u
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("469563"),
                l = n("7037"),
                r = n("246053"),
                u = (0, a.replaceIcon)(function(e) {
                    return (0, s.jsx)(r.default, {
                        ...e,
                        direction: r.default.Directions.UP
                    })
                }, l.ArrowSmallUpIcon)
        },
        155207: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("469563"),
                l = n("811513"),
                r = n("75196"),
                u = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: l,
                        ...u
                    } = e;
                    return (0, s.jsxs)("svg", {
                        ...(0, r.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, s.jsx)("path", {
                            className: l,
                            fill: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, s.jsx)("path", {
                            className: l,
                            fill: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, s.jsx)("path", {
                            className: l,
                            fill: a,
                            d: "M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z"
                        }), (0, s.jsx)("path", {
                            className: l,
                            fill: a,
                            d: "M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z"
                        })]
                    })
                }, l.GroupIcon)
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
                l = n.n(a),
                r = n("77078"),
                u = n("254686"),
                i = n("851706");
            let d = Object.freeze({
                    SIZE_10: i.size10,
                    SIZE_12: i.size12,
                    SIZE_14: i.size14,
                    SIZE_16: i.size16,
                    SIZE_20: i.size20,
                    SIZE_24: i.size24,
                    SIZE_32: i.size32
                }),
                o = e => {
                    let {
                        id: t,
                        muted: n = !1,
                        className: a = u.wrapper,
                        size: i = d.SIZE_14,
                        selectable: o = !1,
                        children: c,
                        color: f,
                        onClick: E,
                        onContextMenu: h,
                        style: _,
                        title: p,
                        uppercase: g
                    } = e;
                    return (0, s.jsx)(r.H, {
                        role: null != E ? "button" : void 0,
                        onClick: E,
                        onContextMenu: h,
                        id: t,
                        className: l(a, {
                            [u.base]: !0,
                            [i]: !0,
                            [u.selectable]: o,
                            [u.muted]: n,
                            [u.uppercase]: g
                        }),
                        title: p,
                        style: null != f ? {
                            ..._,
                            color: f
                        } : _,
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
                    return M
                },
                default: function() {
                    return I
                }
            }), n("424973"), n("222007");
            var s = n("37983"),
                a = n("884691"),
                l = n("414456"),
                r = n.n(l),
                u = n("627445"),
                i = n.n(u),
                d = n("77078"),
                o = n("506885"),
                c = n("981601"),
                f = n("766274"),
                E = n("697218"),
                h = n("368121"),
                _ = n("523096"),
                p = n("587974"),
                g = n("494101");
            let M = {
                SIZE_16: 16,
                SIZE_24: 24,
                SIZE_32: 32,
                SIZE_56: 56
            };

            function S(e, t) {
                let n = e instanceof f.default ? e : null != e ? e.user : null;
                return null != n ? n.id : "user-".concat(t)
            }
            class m extends a.PureComponent {
                renderUsers() {
                    let {
                        users: e,
                        max: t,
                        renderUser: n = this.defaultRenderUser,
                        size: a,
                        extraDetail: l
                    } = this.props, r = [], u = e.length === t ? e.length : t - 1, i = this.renderMoreUsers(u), d = 0;
                    for (; d < u && d < e.length;) {
                        var o;
                        let t = null == i && null == l && d === e.length - 1,
                            u = n(e[d], t, d);
                        r.push(t ? (0, s.jsx)("div", {
                            className: g.avatarContainer,
                            children: u
                        }, S(null !== (o = e[d]) && void 0 !== o ? o : null, d)) : (0, s.jsx)(p.default, {
                            className: g.avatarContainerMasked,
                            height: a,
                            width: a,
                            mask: p.default.Masks.VOICE_USER_SUMMARY_ITEM,
                            children: u
                        }, S(e[d], d))), d++
                    }
                    return null != l ? r.push(l) : null != i && r.push(i), r
                }
                renderMoreUsers(e) {
                    let {
                        max: t,
                        count: n,
                        hideMoreUsers: l,
                        renderMoreUsers: r,
                        users: u
                    } = this.props, i = Math.min(e, u.length);
                    if (!l) {
                        if (null != n) {
                            if (n >= t) return (0, s.jsx)(a.Fragment, {
                                children: r("".concat(t, "+"), t)
                            }, "more-users");
                            if (n > u.length) {
                                let e = n - u.length;
                                return (0, s.jsx)(a.Fragment, {
                                    children: r("+".concat(e), e)
                                }, "more-users")
                            }
                        } else if (i < u.length) {
                            let e = Math.min(u.length - i, 99);
                            return (0, s.jsx)(a.Fragment, {
                                children: r("+".concat(e), e)
                            }, "more-users")
                        }
                    }
                }
                renderIcon() {
                    return this.props.renderIcon ? (0, s.jsx)(h.default, {
                        foreground: g.foreground,
                        className: g.icon
                    }) : null
                }
                render() {
                    let {
                        className: e,
                        size: t,
                        users: n,
                        guildId: a,
                        showUserPopout: l,
                        useFallbackUserForPopout: u
                    } = this.props, {
                        popoutUserId: f
                    } = this.state, h = n.find(e => null != e && e.id === f), _ = u && null == E.default.getUser(f);
                    return (0, s.jsx)(d.Popout, {
                        position: "right",
                        preload: null == h ? void 0 : () => (0, o.default)(h.id, h.getAvatarURL(a, 80), {
                            guildId: a
                        }),
                        shouldShow: !0 === l && null != f,
                        fixed: !0,
                        renderPopout: e => (i(null != f, "UserSummaryItem.render - renderPopout: popoutUserId cannot be null"), (0, s.jsx)(c.default, {
                            ...this.props,
                            user: _ && null != h ? h : void 0,
                            ...e,
                            userId: f,
                            guildId: this.props.guildId
                        })),
                        onRequestClose: () => this.setState({
                            popoutUserId: null
                        }),
                        children: n => (0, s.jsxs)("div", {
                            className: r(e, g.container, function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : M.SIZE_24;
                                switch (e) {
                                    case M.SIZE_16:
                                        return g.size16;
                                    case M.SIZE_24:
                                        return g.size24;
                                    case M.SIZE_32:
                                        return g.size32;
                                    case M.SIZE_56:
                                        return g.size56;
                                    default:
                                        return g.size24
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
                            guildId: l,
                            size: r
                        } = this.props;
                        if (null == e) {
                            if (!this.props.showDefaultAvatarsForNullUsers) return (0, s.jsx)("div", {
                                className: g.emptyUser
                            });
                            {
                                let e = (null != n ? n : 0) % _.default.DEFAULT_AVATARS.length,
                                    t = _.default.DEFAULT_AVATARS[e];
                                return (0, s.jsx)("img", {
                                    src: t,
                                    alt: "",
                                    className: g.avatar
                                })
                            }
                        }
                        let u = (0, s.jsx)("img", {
                            src: e.getAvatarURL(l, r),
                            alt: e.username,
                            className: g.avatar
                        }, e.id);
                        return a ? (0, s.jsx)(d.Clickable, {
                            className: g.clickableAvatar,
                            onClick: () => {
                                null != this._ref.current && null != e && this.setState({
                                    popoutUserId: e.id
                                })
                            },
                            tabIndex: -1,
                            children: u
                        }, e.id) : u
                    }
                }
            }
            m.defaultProps = {
                max: 10,
                renderMoreUsers: function(e) {
                    return (0, s.jsx)("div", {
                        className: g.moreUsers,
                        children: e
                    })
                },
                renderIcon: !1,
                showDefaultAvatarsForNullUsers: !1,
                size: M.SIZE_24
            };
            var I = m
        }
    }
]);