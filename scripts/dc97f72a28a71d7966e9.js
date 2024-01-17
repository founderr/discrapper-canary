(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["8009"], {
        606863: function(e, t, n) {
            "use strict";
            e.exports = n.p + "321a07cbc6f5919dbce9.svg"
        },
        839491: function(e, t, n) {
            "use strict";
            e.exports = n.p + "a826e445dff97cf15335.svg"
        },
        164654: function(e, t, n) {
            "use strict";
            e.exports = n.p + "1f3e315f020ed5635dc1.svg"
        },
        540346: function(e, t, n) {
            "use strict";
            e.exports = n.p + "1af9bdf041e000508e41.svg"
        },
        526094: function(e, t, n) {
            "use strict";
            e.exports = n.p + "7442b576347c1d02886f.svg"
        },
        367469: function(e, t, n) {
            "use strict";
            e.exports = n.p + "3205da2e8f78633583d0.svg"
        },
        23933: function(e, t, n) {
            "use strict";
            e.exports = n.p + "8f581f91e7e650ac87a2.svg"
        },
        283397: function(e, t, n) {
            "use strict";
            e.exports = n.p + "44d5e1639bc492dc8d62.svg"
        },
        126501: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("913144"),
                i = n("679428"),
                l = n("282109"),
                u = {
                    update(e) {
                        a.default.dispatch({
                            type: "CHANNEL_COLLAPSE",
                            channelId: e
                        })
                    },
                    toggleCollapseGuild(e) {
                        i.default.saveUserGuildSettings(e, {
                            hide_muted_channels: !l.default.isGuildCollapsed(e)
                        }), a.default.dispatch({
                            type: "GUILD_TOGGLE_COLLAPSE_MUTED",
                            guildId: e
                        })
                    }
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
            var i = n("669491"),
                l = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
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
                        d: "M19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
                        fill: "string" == typeof u ? u : u.css,
                        className: s
                    }), (0, a.jsx)("path", {
                        d: "M16.83 12.93c.26-.27.26-.75-.08-.92A9.5 9.5 0 0 0 12.47 11h-.94A9.53 9.53 0 0 0 2 20.53c0 .81.66 1.47 1.47 1.47h.22c.24 0 .44-.17.5-.4.29-1.12.84-2.17 1.32-2.91.14-.21.43-.1.4.15l-.26 2.61c-.02.3.2.55.5.55h7.64c.12 0 .17-.31.06-.36C12.82 21.14 12 20.22 12 19a3 3 0 0 1 3-3h.5a.5.5 0 0 0 .5-.5V15c0-.8.31-1.53.83-2.07ZM12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
                        fill: "string" == typeof u ? u : u.css,
                        className: s
                    })]
                })
            }
        },
        168003: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return k
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                u = n("272030"),
                s = n("838446"),
                d = n("158534"),
                o = n("846883"),
                r = n("812204"),
                c = n("861370"),
                f = n("20209"),
                _ = n("972701"),
                E = n("390008"),
                S = n("41205"),
                N = n("936947"),
                g = n("379304"),
                M = n("534222"),
                T = n("601131"),
                A = n("47495"),
                C = n("834052"),
                v = n("715243"),
                h = n("458574"),
                O = n("963150"),
                I = n("308798"),
                p = n("47006"),
                m = n("809259"),
                L = n("878526"),
                U = n("44141"),
                R = n("531674"),
                x = n("619436"),
                b = n("625399"),
                G = n("339876"),
                y = n("702741"),
                V = n("782000"),
                F = n("45593"),
                D = n("604887"),
                H = n("958936"),
                j = n("49111"),
                P = n("782340");

            function w(e) {
                let {
                    channel: t,
                    guild: n,
                    onSelect: s
                } = e, d = t.isGuildStageVoice(), r = (0, i.useStateFromStores)([C.default], () => d ? C.default.getStageInstanceByChannel(t.id) : void 0, [d, t.id]), f = (0, h.default)(t), g = (0, M.useActiveEvent)(t.id), v = (0, T.default)(null == g ? void 0 : g.id, n, t), O = (0, V.default)(t, r), I = (0, _.useAddToFavoritesItem)(t), L = (0, _.useRemoveFromFavoritesItem)(t), U = (0, E.default)(t), R = (0, S.default)(t), G = (0, N.default)(t), F = (0, m.default)(t), D = (0, x.default)(t), j = (0, p.default)(t), w = (0, H.default)(t, n), B = (0, c.default)({
                    id: t.id,
                    label: P.default.Messages.COPY_ID_CHANNEL
                }), k = (0, y.default)(t), Y = (0, o.default)(t), q = (0, A.useShouldUseNewNotificationSystem)("ChannelListVoiceContextMenuFavorite"), W = (0, b.default)(t);
                return (0, a.jsxs)(l.Menu, {
                    navId: "channel-context",
                    onClose: u.closeContextMenu,
                    "aria-label": P.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: s,
                    children: [(0, a.jsx)(l.MenuGroup, {
                        children: null != g ? v : O
                    }), (0, a.jsxs)(l.MenuGroup, {
                        children: [R, G, U, I]
                    }), (0, a.jsxs)(l.MenuGroup, {
                        children: [F, q ? W : D, j]
                    }), (0, a.jsx)(l.MenuGroup, {
                        children: Y
                    }), (0, a.jsx)(l.MenuGroup, {
                        children: L
                    }), (0, a.jsxs)(l.MenuGroup, {
                        children: [w, f]
                    }), (0, a.jsx)(l.MenuGroup, {
                        children: k
                    }), (0, a.jsx)(l.MenuGroup, {
                        children: B
                    })]
                })
            }

            function B(e) {
                let {
                    channel: t,
                    guild: n,
                    onSelect: s
                } = e, d = t.isGuildStageVoice(), r = (0, i.useStateFromStores)([C.default], () => d ? C.default.getStageInstanceByChannel(t.id) : void 0, [d, t.id]), f = (0, U.default)(t), E = (0, h.default)(t), S = (0, M.useActiveEvent)(t.id), N = (0, T.default)(null == S ? void 0 : S.id, n, t), j = (0, V.default)(t, r), w = (0, _.useAddToFavoritesItem)(t), B = (0, _.useRemoveFromFavoritesItem)(t), k = (0, m.default)(t), Y = (0, x.default)(t), q = (0, p.default)(t), W = (0, L.default)(t, n, r), Z = (0, H.default)(t, n), K = (0, F.default)(t, n), X = (0, D.default)(t, n.id), z = (0, v.default)(t, n), J = (0, O.default)(t, n), Q = (0, I.default)(t), $ = (0, c.default)({
                    id: t.id,
                    label: P.default.Messages.COPY_ID_CHANNEL
                }), ee = (0, y.default)(t), et = (0, o.default)(t), en = (0, G.default)(t), ea = (0, g.default)(t), ei = (0, R.default)(t), el = (0, A.useShouldUseNewNotificationSystem)("ChannelListVoiceContextMenuNormal"), eu = (0, b.default)(t);
                return (0, a.jsxs)(l.Menu, {
                    navId: "channel-context",
                    onClose: u.closeContextMenu,
                    "aria-label": P.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: s,
                    children: [(0, a.jsx)(l.MenuGroup, {
                        children: null != S ? N : j
                    }), (0, a.jsx)(l.MenuGroup, {
                        children: f
                    }, "mark-as-read"), (0, a.jsxs)(l.MenuGroup, {
                        children: [W, et, en, w, E]
                    }, "channel-actions"), (0, a.jsxs)(l.MenuGroup, {
                        children: [X, Z, K, k, ea, ee]
                    }, "voice-actions"), (0, a.jsxs)(l.MenuGroup, {
                        children: [ei, el ? eu : Y]
                    }, "notifications"), (0, a.jsx)(l.MenuGroup, {
                        children: B
                    }), (0, a.jsxs)(l.MenuGroup, {
                        children: [q, z, J, Q]
                    }, "admin-actions"), (0, a.jsx)(l.MenuGroup, {
                        children: $
                    }, "developer-actions")]
                })
            }
            var k = (0, d.default)((0, s.default)(function(e) {
                let t = (0, f.default)();
                return t ? (0, a.jsx)(w, {
                    ...e
                }) : (0, a.jsx)(B, {
                    ...e
                })
            }, {
                object: j.AnalyticsObjects.CONTEXT_MENU
            }), [r.default.CONTEXT_MENU, r.default.CHANNEL_LIST_VOICE_CHANNEL_MENU])
        },
        809259: function(e, t, n) {
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
                u = n("126501"),
                s = n("816092"),
                d = n("782340");

            function o(e) {
                let t = (0, i.useStateFromStores)([s.default], () => s.default.isCollapsed(e.id), [e.id]);
                return __OVERLAY__ ? null : (0, a.jsx)(l.MenuCheckboxItem, {
                    id: "hide-voice-names",
                    label: d.default.Messages.VOICE_CHANNEL_HIDE_NAMES,
                    action: () => u.default.update(e.id),
                    checked: t
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
                    return T
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var i = n("866227"),
                l = n.n(i),
                u = n("446674"),
                s = n("77078"),
                d = n("820542"),
                o = n("519705"),
                r = n("319165"),
                c = n("282109"),
                f = n("34676"),
                _ = n("679653"),
                E = n("49111"),
                S = n("468200"),
                N = n("782340");
            let g = () => [{
                    value: S.MuteUntilSeconds.MINUTES_15,
                    label: N.default.Messages.MUTE_DURATION_15_MINUTES
                }, {
                    value: S.MuteUntilSeconds.HOURS_1,
                    label: N.default.Messages.MUTE_DURATION_1_HOUR
                }, {
                    value: S.MuteUntilSeconds.HOURS_3,
                    label: N.default.Messages.MUTE_DURATION_3_HOURS
                }, {
                    value: S.MuteUntilSeconds.HOURS_8,
                    label: N.default.Messages.MUTE_DURATION_8_HOURS
                }, {
                    value: S.MuteUntilSeconds.HOURS_24,
                    label: N.default.Messages.MUTE_DURATION_24_HOURS
                }, {
                    value: S.MuteUntilSeconds.ALWAYS,
                    label: N.default.Messages.MUTE_DURATION_ALWAYS
                }],
                M = e => {
                    let t = e > 0 ? l().add(e, "second").toISOString() : null;
                    return {
                        muted: !0,
                        mute_config: {
                            selected_time_window: e,
                            end_time: t
                        }
                    }
                };

            function T(e, t) {
                let [n, i] = (0, u.useStateFromStoresArray)([c.default], () => [c.default.isChannelMuted(e.guild_id, e.id), c.default.getChannelMuteConfig(e.guild_id, e.id)]), l = (0, r.useMutedUntilText)(i), S = (0, _.default)(e, !0);

                function T(t) {
                    t && e.type === E.ChannelTypes.GUILD_CATEGORY && (0, d.categoryCollapse)(e.id), o.default.updateChannelOverrideSettings(e.guild_id, e.id, {
                        muted: t
                    }, f.NotificationLabel.muted(t))
                }
                let A = N.default.Messages.MUTE_CHANNEL_GENERIC,
                    C = N.default.Messages.UNMUTE_CHANNEL_GENERIC;
                switch (e.type) {
                    case E.ChannelTypes.GUILD_CATEGORY:
                        A = N.default.Messages.MUTE_CATEGORY, C = N.default.Messages.UNMUTE_CATEGORY;
                        break;
                    case E.ChannelTypes.GROUP_DM:
                        A = N.default.Messages.MUTE_CONVERSATION, C = N.default.Messages.UNMUTE_CONVERSATION;
                        break;
                    case E.ChannelTypes.DM:
                        A = N.default.Messages.MUTE_CHANNEL.format({
                            name: S
                        }), C = N.default.Messages.UNMUTE_CHANNEL.format({
                            name: S
                        });
                        break;
                    default:
                        A = N.default.Messages.MUTE_CHANNEL_GENERIC, C = N.default.Messages.UNMUTE_CHANNEL_GENERIC
                }
                return n ? (0, a.jsx)(s.MenuItem, {
                    id: "unmute-channel",
                    label: C,
                    subtext: l,
                    action: () => T(!1)
                }) : (0, a.jsx)(s.MenuItem, {
                    id: "mute-channel",
                    label: A,
                    action: () => T(!0),
                    children: g().map(n => {
                        let {
                            value: i,
                            label: l
                        } = n;
                        return (0, a.jsx)(s.MenuItem, {
                            id: "".concat(i),
                            label: l,
                            action: () => (function(n) {
                                e.type === E.ChannelTypes.GUILD_CATEGORY && (0, d.categoryCollapse)(e.id);
                                let a = M(n);
                                o.default.updateChannelOverrideSettings(e.guild_id, e.id, a, f.NotificationLabels.Muted, t)
                            })(i)
                        }, i)
                    })
                })
            }
        },
        619436: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useChannelNotificationRadioItems: function() {
                    return _
                },
                default: function() {
                    return E
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                u = n("519705"),
                s = n("721281"),
                d = n("282109"),
                o = n("34676"),
                r = n("49111"),
                c = n("782340");

            function f(e) {
                var t, n, a;
                let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                switch (e.type) {
                    case r.ChannelTypes.GUILD_VOICE:
                        ;
                        return i ? (t = e, [{
                            setting: r.UserNotificationSettings.NULL,
                            label: null != t.parent_id ? c.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : c.default.Messages.FORM_LABEL_DEFAULT
                        }, {
                            setting: r.UserNotificationSettings.ALL_MESSAGES,
                            label: c.default.Messages.FORM_LABEL_ALL_VOICE_ACTIVITY
                        }, {
                            setting: r.UserNotificationSettings.ONLY_MENTIONS,
                            label: c.default.Messages.FORM_LABEL_ONLY_TEXT_MENTIONS.format()
                        }, {
                            setting: r.UserNotificationSettings.NO_MESSAGES,
                            label: c.default.Messages.FORM_LABEL_NOTHING
                        }]) : null;
                    case r.ChannelTypes.GUILD_STAGE_VOICE:
                        ;
                        return n = e, [{
                            setting: r.UserNotificationSettings.NULL,
                            label: null != n.parent_id ? c.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : c.default.Messages.FORM_LABEL_DEFAULT
                        }, {
                            setting: r.UserNotificationSettings.ONLY_MENTIONS,
                            label: c.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY
                        }, {
                            setting: r.UserNotificationSettings.NO_MESSAGES,
                            label: c.default.Messages.FORM_LABEL_NOTHING
                        }];
                    default:
                        ;
                        return a = e, [{
                            setting: r.UserNotificationSettings.NULL,
                            label: null != a.parent_id ? c.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : c.default.Messages.FORM_LABEL_DEFAULT
                        }, {
                            setting: r.UserNotificationSettings.ALL_MESSAGES,
                            label: c.default.Messages.FORM_LABEL_ALL_MESSAGES
                        }, {
                            setting: r.UserNotificationSettings.ONLY_MENTIONS,
                            label: c.default.Messages.FORM_LABEL_ONLY_MENTIONS.format()
                        }, {
                            setting: r.UserNotificationSettings.NO_MESSAGES,
                            label: c.default.Messages.FORM_LABEL_NOTHING
                        }]
                }
            }

            function _(e) {
                let t = e.getGuildId(),
                    n = e.id,
                    _ = (0, i.useStateFromStores)([d.default], () => {
                        let n = r.UserNotificationSettings.NULL;
                        return null != e.parent_id && (n = d.default.getChannelMessageNotifications(t, e.parent_id)), n !== r.UserNotificationSettings.NULL ? n : d.default.getMessageNotifications(t)
                    }, [t, e.parent_id]),
                    E = (0, i.useStateFromStores)([d.default], () => d.default.getNewForumThreadsCreated(e)),
                    S = (0, i.useStateFromStores)([d.default], () => d.default.getChannelOverrides(t)[n], [t, n]),
                    N = null == S ? r.UserNotificationSettings.NULL : S.message_notifications,
                    g = (0, s.useVoiceActivityNotificationSettingsExperiment)(e),
                    M = f(e, g);
                return null == M ? null : (0, a.jsxs)(a.Fragment, {
                    children: [e.isForumLikeChannel() ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(l.MenuCheckboxItem, {
                            id: "new-forum-threads-created",
                            label: c.default.Messages.FORUM_NEW_POSTS_CREATED,
                            checked: E,
                            action: () => u.default.setForumThreadsCreated(e, !E)
                        }), (0, a.jsx)(l.MenuSeparator, {})]
                    }) : null, M.map(i => {
                        let {
                            setting: s,
                            label: d
                        } = i;
                        return (0, a.jsx)(l.MenuRadioItem, {
                            group: "channel-notifications",
                            id: "".concat(s),
                            label: d,
                            subtext: s === r.UserNotificationSettings.NULL ? function(e, t) {
                                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                switch (e) {
                                    case r.UserNotificationSettings.ALL_MESSAGES:
                                        return t.type === r.ChannelTypes.GUILD_VOICE && n ? c.default.Messages.FORM_LABEL_ALL_VOICE_ACTIVITY : c.default.Messages.FORM_LABEL_ALL_MESSAGES;
                                    case r.UserNotificationSettings.ONLY_MENTIONS:
                                        return c.default.Messages.FORM_LABEL_ONLY_MENTIONS.format();
                                    case r.UserNotificationSettings.NO_MESSAGES:
                                        return c.default.Messages.FORM_LABEL_NOTHING;
                                    case r.UserNotificationSettings.NULL:
                                    default:
                                        return
                                }
                            }(_, e, g) : void 0,
                            action: () => {
                                var e;
                                return e = s, void(null != t && u.default.updateChannelOverrideSettings(t, n, {
                                    message_notifications: e
                                }, o.NotificationLabel.notifications(e)))
                            },
                            checked: s === N
                        }, s)
                    })]
                })
            }

            function E(e) {
                var t, n;
                let u = _(e),
                    o = (0, i.useStateFromStores)([d.default], () => d.default.resolvedMessageNotifications(e), [e]),
                    E = (0, i.useStateFromStores)([d.default], () => d.default.getChannelOverrides(e.guild_id)[e.id], [e.guild_id, e.id]),
                    S = null == E ? r.UserNotificationSettings.NULL : E.message_notifications,
                    N = (0, s.useVoiceActivityNotificationSettingsExperiment)(e),
                    g = S === r.UserNotificationSettings.NULL && e.isGuildStageVoice() ? c.default.Messages.FORM_LABEL_ONLY_MENTIONS.format() : null === (n = f(e, N)) || void 0 === n ? void 0 : null === (t = n.find(e => {
                        let {
                            setting: t
                        } = e;
                        return t === o
                    })) || void 0 === t ? void 0 : t.label;
                return null != u ? (0, a.jsx)(l.MenuItem, {
                    id: "channel-notifications",
                    label: c.default.Messages.NOTIFICATION_SETTINGS,
                    subtext: g,
                    children: u
                }) : null
            }
        },
        702741: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("77078"),
                l = n("377114"),
                u = n("834052"),
                s = n("907566"),
                d = n("782340");

            function o(e) {
                let t = u.default.isLive(e.id);
                return e.isGuildStageVoice() && t ? (0, a.jsx)(i.MenuItem, {
                    id: "report-stage",
                    label: d.default.Messages.REPORT_MODAL_REPORT_STAGE_MENU_ITEM,
                    action: () => (0, l.showReportModalForStageChannel)(e),
                    icon: s.default,
                    color: "danger"
                }) : null
            }
        },
        782e3: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                u = n("244480"),
                s = n("923510"),
                d = n("957255"),
                o = n("782340");

            function r(e, t) {
                let n = (0, i.useStateFromStores)([d.default], () => d.default.can(s.MODERATE_STAGE_CHANNEL_PERMISSIONS, e), [e]);
                return null != t && n ? (0, a.jsx)(l.MenuItem, {
                    id: "end-stage",
                    label: o.default.Messages.END_STAGE,
                    color: "danger",
                    action: function() {
                        (0, l.openModal)(t => (0, a.jsx)(l.ConfirmModal, {
                            ...t,
                            header: o.default.Messages.END_STAGE_TITLE,
                            confirmText: o.default.Messages.END_STAGE,
                            cancelText: o.default.Messages.CANCEL,
                            onConfirm: () => (0, u.endStage)(e),
                            children: (0, a.jsx)(l.Text, {
                                variant: "text-md/normal",
                                color: "header-secondary",
                                children: o.default.Messages.EXPLICIT_END_STAGE_SUBTITLE
                            })
                        }))
                    }
                }) : null
            }
        },
        45593: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                u = n("18054"),
                s = n("843624"),
                d = n("259141"),
                o = n("957255"),
                r = n("207273"),
                c = n("49111"),
                f = n("782340");

            function _(e, t) {
                let _ = (0, i.useStateFromStores)([o.default], () => o.default.can(c.Permissions.MANAGE_CHANNELS, t)),
                    E = (0, i.useStateFromStores)([o.default], () => o.default.can(c.Permissions.SET_VOICE_CHANNEL_STATUS, e)),
                    S = (0, d.useIsConnectedToVoiceChannel)(e),
                    N = (0, i.useStateFromStores)([r.default], () => r.default.getChannelStatus(e)),
                    g = null != N && N.length > 0;
                return e.isGuildVoice() && (_ || E) ? !S && _ && g ? (0, a.jsx)(l.MenuItem, {
                    id: "clear-status",
                    label: f.default.Messages.VOICE_CHANNEL_CLEAR_STATUS,
                    action: () => {
                        u.default.updateVoiceChannelStatus(e.id, "")
                    }
                }) : S && E ? (0, a.jsx)(l.MenuItem, {
                    id: "set-status",
                    label: f.default.Messages.VOICE_CHANNEL_SET_STATUS,
                    action: () => {
                        (0, l.openModalLazy)(async () => {
                            let {
                                default: t
                            } = await n.el("843624").then(n.bind(n, "843624"));
                            return n => (0, a.jsx)(t, {
                                channel: e,
                                ...n
                            })
                        }, {
                            modalKey: s.VOICE_CHANNEL_STATUS_MODAL_KEY
                        })
                    }
                }) : null : null
            }
        },
        604887: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("155823"),
                u = n("987317"),
                s = n("305122"),
                d = n("675961"),
                o = n("957255"),
                r = n("18494"),
                c = n("49111"),
                f = n("782340");

            function _(e, t) {
                let n = (0, i.useStateFromStores)([o.default], () => o.default.can(c.Permissions.CONNECT, e), [e]),
                    _ = (0, i.useStateFromStores)([r.default], () => r.default.getVoiceChannelId()),
                    E = (0, d.useCustomJoinSound)(t),
                    S = _ === e.id;
                return e.isGuildVocal() && n && null != E && !S ? (0, a.jsx)(l.MenuItem, {
                    id: "join-muted-custom-join-sound",
                    label: f.default.Messages.VOICE_CHANNEL_MUTED_CUSTOM_JOIN_SOUND,
                    action: () => {
                        (0, s.muteCustomJoinSound)(e.id), u.default.selectVoiceChannel(e.id)
                    }
                }) : null
            }
        },
        958936: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                u = n("255397"),
                s = n("393414"),
                d = n("957255"),
                o = n("49111"),
                r = n("782340");

            function c(e, t) {
                let n = (0, i.useStateFromStores)([d.default], () => d.default.can(o.Permissions.CONNECT, e), [e]);
                return n && e.isGuildVocal() ? (0, a.jsx)(l.MenuItem, {
                    id: "open-chat",
                    label: r.default.Messages.OPEN_CHAT,
                    action: () => {
                        u.default.updateChatOpen(e.id, !0), (0, s.transitionToGuild)(t.id, e.id)
                    }
                }) : null
            }
        },
        172858: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DUCK_CONFETTI_SPRITE: function() {
                    return l
                },
                COMMON_CONFETTI_COLORS: function() {
                    return u
                },
                COMMON_CONFETTI_SPRITES: function() {
                    return s
                },
                COMMON_CONFETTI_MAX_SPRITE_SIZE: function() {
                    return d
                },
                COMMON_CONFETTI_BASE_CONFIG: function() {
                    return o
                },
                COMMON_CONFETTI_ENVIRONMENT: function() {
                    return r
                }
            });
            var a = n("516555"),
                i = n("839491");
            let l = i,
                u = ["#FF73FA", "#FFC0FF", "#FFD836", "#FF9A15", "#A5F7DE", "#51BC9D", "#AEC7FF", "#3E70DD"],
                s = [n("606863"), l, n("164654"), n("540346"), n("526094"), n("367469"), n("23933"), {
                    src: n("283397"),
                    colorize: !1
                }],
                d = 28,
                o = {
                    velocity: {
                        type: "static-random",
                        minValue: {
                            x: 30,
                            y: -80
                        },
                        maxValue: {
                            x: -30,
                            y: -180
                        }
                    },
                    rotation: {
                        type: "linear-random",
                        minValue: 0,
                        maxValue: 360,
                        minAddValue: -25,
                        maxAddValue: 25
                    },
                    size: {
                        type: "static-random",
                        minValue: 14,
                        maxValue: d
                    }
                },
                r = new a.Environment
        },
        397680: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                },
                getEventException: function() {
                    return u
                }
            });
            var a = n("446674"),
                i = n("398604");

            function l(e, t) {
                let n = (0, a.useStateFromStoresArray)([i.default], () => {
                    var e, n;
                    return null !== (n = null === (e = i.default.getGuildScheduledEvent(t)) || void 0 === e ? void 0 : e.guild_scheduled_event_exceptions) && void 0 !== n ? n : []
                });
                return s(n, e)
            }

            function u(e, t) {
                var n, a;
                let l = null !== (a = null === (n = i.default.getGuildScheduledEvent(t)) || void 0 === n ? void 0 : n.guild_scheduled_event_exceptions) && void 0 !== a ? a : [];
                return s(l, e)
            }

            function s(e, t) {
                let n = null == e ? void 0 : e.find(e => e.event_exception_id === t);
                return n
            }
        },
        466148: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                },
                getEventSchedule: function() {
                    return r
                }
            });
            var a = n("627445"),
                i = n.n(a),
                l = n("446674"),
                u = n("398604"),
                s = n("397680"),
                d = n("822516");

            function o(e, t, n) {
                var a;
                let o = null !== (a = (0, l.useStateFromStores)([u.default], () => u.default.getGuildScheduledEvent(e))) && void 0 !== a ? a : n;
                i(null != o, "Event must be defined"), t = null != t ? t : (0, d.getNextRecurrenceIdInEvent)(o);
                let r = (0, s.default)(t, e);
                return c(o, r, t)
            }

            function r(e, t) {
                let n = (0, s.getEventException)(t, e.id);
                return c(e, n, t)
            }

            function c(e, t, n) {
                if (null == e.recurrence_rule || null == n) return {
                    startTime: new Date(e.scheduled_start_time),
                    endTime: null != e.scheduled_end_time ? new Date(e.scheduled_end_time) : null
                };
                let a = (0, d.getBaseScheduleForRecurrence)(n, e),
                    {
                        startDate: i,
                        endDate: l
                    } = (0, d.getScheduleForRecurrenceWithException)(a, t);
                return {
                    startTime: i.toDate(),
                    endTime: null == l ? void 0 : l.toDate()
                }
            }
        },
        601131: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                u = n("817963"),
                s = n("244480"),
                d = n("398604"),
                o = n("322224"),
                r = n("745049"),
                c = n("782340");

            function f(e, t, n) {
                let {
                    canManageGuildEvent: f
                } = (0, u.useManageResourcePermissions)(null != n ? n : t), _ = (0, i.useStateFromStores)([d.default], () => d.default.isActive(e)), E = (0, i.useStateFromStores)([d.default], () => d.default.getGuildScheduledEvent(e), [e]), S = f(E);
                if (null == e || !S || !_ || (null == E ? void 0 : E.entity_type) === r.GuildScheduledEventEntityTypes.EXTERNAL) return null;
                let N = () => {
                    if (null == n ? void 0 : n.isGuildStageVoice()) {
                        (0, s.endStage)(n);
                        return
                    }
                    null != e && o.default.endEvent(e, t.id), (0, l.closeAllModals)()
                };
                return (0, a.jsx)(l.MenuItem, {
                    id: c.default.Messages.END_EVENT,
                    label: c.default.Messages.END_EVENT,
                    action: function() {
                        (0, l.openModal)(e => (0, a.jsx)(l.ConfirmModal, {
                            ...e,
                            header: c.default.Messages.END_EVENT,
                            confirmText: c.default.Messages.GUILD_EVENT_END_PROMPT_CONFIRM,
                            cancelText: c.default.Messages.CANCEL,
                            onConfirm: N,
                            children: (0, a.jsx)(l.Text, {
                                variant: "text-md/normal",
                                children: c.default.Messages.GUILD_EVENT_EXTERNAL_END_PROMPT_TITLE
                            })
                        }))
                    },
                    color: "danger"
                })
            }
        },
        242757: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canViewInviteModal: function() {
                    return i
                }
            });
            var a = n("49111");

            function i(e, t, n, i) {
                let l = null != n ? n : t,
                    u = null != l && e.can(a.Permissions.CREATE_INSTANT_INVITE, l);
                return u || null != t && null != t.vanityURLCode || (null == i ? void 0 : i.invite_code) != null
            }
        },
        721281: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useVoiceActivityNotificationSettingsExperiment: function() {
                    return s
                },
                hasVoiceChannelActivityNotifsEnabled: function() {
                    return d
                }
            });
            var a = n("862205"),
                i = n("49111");
            let l = (0, a.createExperiment)({
                    kind: "user",
                    id: "2023-11_voice_activity_notification_user",
                    label: "Voice Activity Notifications for User",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Voice Activity Notifications are enabled for user",
                        config: {
                            enabled: !0
                        }
                    }, {
                        id: 2,
                        label: "Control for AA test. Voice Activity Notifications are NOT enabled for user.",
                        config: {
                            enabled: !1
                        }
                    }]
                }),
                u = (0, a.createExperiment)({
                    kind: "guild",
                    id: "2023-11_voice_activity_notification_guild",
                    label: "General Voice Channel Notifications for Guild",
                    defaultConfig: {
                        voiceChannelActivityNotifsEnabled: !1
                    },
                    treatments: [{
                        id: 2,
                        label: "Deadchat notifs disabled, voice channel activity notifs enabled",
                        config: {
                            voiceChannelActivityNotifsEnabled: !0
                        }
                    }]
                });

            function s(e) {
                var t;
                let {
                    voiceChannelActivityNotifsEnabled: n
                } = u.useExperiment({
                    location: "useVoiceActivityNotificationSettingsExperiment",
                    guildId: null !== (t = null == e ? void 0 : e.getGuildId()) && void 0 !== t ? t : ""
                }, {
                    disable: (null == e ? void 0 : e.type) !== i.ChannelTypes.GUILD_VOICE,
                    autoTrackExposure: !1
                }), {
                    enabled: a
                } = l.useExperiment({
                    location: "useVoiceActivityNotificationSettingsExperiment"
                }, {
                    disable: (null == e ? void 0 : e.type) !== i.ChannelTypes.GUILD_VOICE || !n,
                    autoTrackExposure: !0
                });
                return (null == e ? void 0 : e.type) === i.ChannelTypes.GUILD_VOICE && n && a
            }

            function d(e) {
                var t;
                let {
                    voiceChannelActivityNotifsEnabled: n
                } = u.getCurrentConfig({
                    guildId: null !== (t = null == e ? void 0 : e.getGuildId()) && void 0 !== t ? t : "",
                    location: "hasVoiceChannelActivityNotifsEnabled"
                });
                return n
            }
        },
        244480: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                toggleRequestToSpeak: function() {
                    return M
                },
                inviteUserToStage: function() {
                    return T
                },
                audienceAckRequestToSpeak: function() {
                    return A
                },
                moveSelfToAudience: function() {
                    return C
                },
                setUserSuppress: function() {
                    return v
                },
                moveUserToAudience: function() {
                    return h
                },
                setEveryoneRolePermissionAllowed: function() {
                    return O
                },
                startStage: function() {
                    return I
                },
                editStage: function() {
                    return p
                },
                endStage: function() {
                    return m
                }
            });
            var a = n("627445"),
                i = n.n(a),
                l = n("316693"),
                u = n("872717"),
                s = n("450911");
            n("851387");
            var d = n("798609"),
                o = n("716241"),
                r = n("18494"),
                c = n("800762"),
                f = n("991170"),
                _ = n("716214"),
                E = n("230324"),
                S = n("738983"),
                N = n("808422"),
                g = n("49111");

            function M(e, t) {
                let n = e.getGuildId();
                return i(null != n, "This channel cannot be guildless."), t && (0, o.trackWithMetadata)(g.AnalyticEvents.REQUEST_TO_SPEAK_INITIATED, {
                    ...(0, E.getStageChannelMetadata)(e)
                }), u.default.patch({
                    url: g.Endpoints.UPDATE_VOICE_STATE(n),
                    body: {
                        request_to_speak_timestamp: t ? new Date().toISOString() : null,
                        channel_id: e.id
                    }
                })
            }

            function T(e, t) {
                let n = e.getGuildId();
                return i(null != n, "This channel cannot be guildless."), u.default.patch({
                    url: g.Endpoints.UPDATE_VOICE_STATE(n, t),
                    body: {
                        suppress: !1,
                        request_to_speak_timestamp: new Date().toISOString(),
                        channel_id: e.id
                    }
                })
            }

            function A(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    a = null == e ? void 0 : e.getGuildId();
                i(null != a, "This channel cannot be guildless.");
                let l = c.default.getVoiceStateForChannel(e.id),
                    s = (0, N.getAudienceRequestToSpeakState)(l);
                return s === N.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && !t && (0, o.trackWithMetadata)(g.AnalyticEvents.PROMOTED_TO_SPEAKER, {
                    ...(0, E.getStageChannelMetadata)(e)
                }), u.default.patch({
                    url: g.Endpoints.UPDATE_VOICE_STATE(a),
                    body: {
                        suppress: t,
                        request_to_speak_timestamp: null,
                        channel_id: e.id,
                        ...n ? {
                            silent: n
                        } : {}
                    }
                })
            }

            function C(e) {
                let t = null == e ? void 0 : e.getGuildId();
                return i(null != t, "This channel cannot be guildless."), u.default.patch({
                    url: g.Endpoints.UPDATE_VOICE_STATE(t),
                    body: {
                        suppress: !0,
                        channel_id: e.id,
                        self_video: !1,
                        self_stream: !1
                    }
                })
            }

            function v(e, t, n) {
                let a = e.getGuildId();
                return i(null != a, "This channel cannot be guildless."), u.default.patch({
                    url: g.Endpoints.UPDATE_VOICE_STATE(a, t),
                    body: {
                        suppress: n,
                        channel_id: e.id
                    }
                })
            }

            function h(e, t) {
                if (null == t || null == e) return;
                let n = t.getGuildId();
                return i(null != n, "This channel cannot be guildless."), v(t, e.id, !0), u.default.patch({
                    url: g.Endpoints.UPDATE_VOICE_STATE(n, e.id),
                    body: {
                        suppress: !0,
                        channel_id: t.id,
                        self_video: !1,
                        self_stream: !1
                    }
                })
            }

            function O(e, t, n) {
                let a = e.getGuildId();
                i(null != a, "Channel cannot be guildless");
                let u = e.permissionOverwrites[a],
                    o = {
                        id: a,
                        type: d.PermissionOverwriteType.ROLE,
                        allow: f.default.NONE,
                        deny: f.default.NONE,
                        ...u
                    };
                n ? (o.allow = l.default.add(o.allow, t), o.deny = l.default.remove(o.deny, t)) : (o.allow = l.default.remove(o.allow, t), o.deny = l.default.add(o.deny, t)), s.default.updatePermissionOverwrite(e.id, o)
            }
            async function I(e, t, n, a) {
                if ("" === t) return;
                let i = r.default.getVoiceChannelId() === e.id;
                !i && (0, _.connectToStage)(e);
                let l = await (0, S.startStageInstance)(e.id, t, n, a);
                return A(e, !1, !0), l
            }
            async function p(e, t, n) {
                if ("" === t) return;
                let a = await (0, S.updateStageInstance)(e.id, t, n);
                return a
            }
            async function m(e) {
                await (0, S.endStageInstance)(e.id)
            }
        },
        230324: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                summarizeUsernamesParticipating: function() {
                    return c
                },
                getRemoveModeratorTooltipHint: function() {
                    return f
                },
                getStageChannelMetadata: function() {
                    return _
                }
            }), n("808653"), n("222007"), n("917351");
            var a = n("945956"),
                i = n("387111"),
                l = n("991170"),
                u = n("834052"),
                s = n("837979"),
                d = n("49111"),
                o = n("606762"),
                r = n("782340");

            function c(e, t, n, a) {
                let l = t[0],
                    u = i.default.getName(e, n, l),
                    s = null != a ? a : t.length;
                return 1 === s && null != l ? u : null == l ? r.default.Messages.SPEAKING_COUNT.format({
                    count: s
                }) : r.default.Messages.USER_SUMMARY_WITH_OTHERS.format({
                    name: u,
                    count: s - 1
                })
            }

            function f(e, t) {
                switch (e) {
                    case o.RowType.OWNER:
                        return r.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
                    case o.RowType.ADMINISTRATOR:
                        return r.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
                    case o.RowType.MEMBER:
                    case o.RowType.ROLE:
                        return t ? r.default.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS : r.default.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
                    case o.RowType.EMPTY_STATE:
                }
                return null
            }

            function _(e) {
                let t = u.default.getStageInstanceByChannel(e.id);
                return {
                    channel_id: e.id,
                    guild_id: e.guild_id,
                    topic: null == t ? void 0 : t.topic,
                    media_session_id: a.default.getMediaSessionId(),
                    request_to_speak_state: l.default.canEveryoneRole(d.Permissions.REQUEST_TO_SPEAK, e) ? s.RequestToSpeakPermissionStates.EVERYONE : s.RequestToSpeakPermissionStates.NO_ONE,
                    stage_instance_id: null == t ? void 0 : t.id
                }
            }
        },
        738983: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startStageInstance: function() {
                    return l
                },
                updateStageInstance: function() {
                    return u
                },
                endStageInstance: function() {
                    return s
                }
            });
            var a = n("872717"),
                i = n("49111");
            async function l(e, t, n, l, u) {
                let s = await a.default.post({
                    url: i.Endpoints.STAGE_INSTANCES,
                    body: {
                        channel_id: e,
                        topic: t,
                        privacy_level: n,
                        guild_scheduled_event_id: u,
                        send_start_notification: l
                    }
                });
                return s.body
            }
            async function u(e, t, n) {
                let l = await a.default.patch({
                    url: i.Endpoints.STAGE_INSTANCE(e),
                    body: {
                        topic: t,
                        privacy_level: n
                    }
                });
                return l.body
            }

            function s(e) {
                return a.default.delete(i.Endpoints.STAGE_INSTANCE(e))
            }
        },
        259141: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsConnectedToVoiceChannel: function() {
                    return u
                }
            });
            var a = n("446674"),
                i = n("271938"),
                l = n("800762");

            function u(e) {
                return function(e) {
                    return (0, a.useStateFromStores)([l.default, i.default], () => l.default.isInChannel(e, i.default.getId()))
                }(null == e ? void 0 : e.id)
            }
        },
        76539: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("715072"),
                u = n("75196"),
                s = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return 16 === t || 16 === n ? (0, a.jsxs)("svg", {
                        ...(0, u.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        children: [(0, a.jsx)("path", {
                            className: l,
                            fill: i,
                            d: "M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"
                        }), (0, a.jsx)("path", {
                            className: l,
                            fill: i,
                            d: "M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z"
                        }), (0, a.jsx)("path", {
                            className: l,
                            fill: i,
                            d: "M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z"
                        })]
                    }) : (0, a.jsx)("svg", {
                        ...(0, u.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, a.jsx)("path", {
                            className: l,
                            fill: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M21 3H24V5H21V8H19V5H16V3H19V0H21V3ZM10 12C12.205 12 14 10.205 14 8C14 5.795 12.205 4 10 4C7.795 4 6 5.795 6 8C6 10.205 7.795 12 10 12ZM10 13C5.289 13 2 15.467 2 19V20H18V19C18 15.467 14.711 13 10 13Z"
                        })
                    })
                }, l.UserPlusIcon, void 0, {
                    size: 24
                })
        }
    }
]);