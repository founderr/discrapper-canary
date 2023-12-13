(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["57801"], {
        633043: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("77078"),
                i = n("850572"),
                u = () => (0, a.jsx)("div", {
                    className: i.loadingWrapper,
                    children: (0, a.jsx)(s.Dots, {
                        dotRadius: 4,
                        themed: !0
                    })
                })
        },
        531674: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getMuteTimes: function() {
                    return _
                },
                default: function() {
                    return A
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var s = n("866227"),
                i = n.n(s),
                u = n("446674"),
                l = n("77078"),
                r = n("820542"),
                o = n("519705"),
                d = n("319165"),
                c = n("282109"),
                E = n("679653"),
                f = n("49111"),
                C = n("468200"),
                N = n("782340");
            let _ = () => [{
                    value: C.MuteUntilSeconds.MINUTES_15,
                    label: N.default.Messages.MUTE_DURATION_15_MINUTES
                }, {
                    value: C.MuteUntilSeconds.HOURS_1,
                    label: N.default.Messages.MUTE_DURATION_1_HOUR
                }, {
                    value: C.MuteUntilSeconds.HOURS_3,
                    label: N.default.Messages.MUTE_DURATION_3_HOURS
                }, {
                    value: C.MuteUntilSeconds.HOURS_8,
                    label: N.default.Messages.MUTE_DURATION_8_HOURS
                }, {
                    value: C.MuteUntilSeconds.HOURS_24,
                    label: N.default.Messages.MUTE_DURATION_24_HOURS
                }, {
                    value: C.MuteUntilSeconds.ALWAYS,
                    label: N.default.Messages.MUTE_DURATION_ALWAYS
                }],
                T = e => {
                    let t = e > 0 ? i().add(e, "second").toISOString() : null;
                    return {
                        muted: !0,
                        mute_config: {
                            selected_time_window: e,
                            end_time: t
                        }
                    }
                };

            function A(e, t) {
                let [n, s] = (0, u.useStateFromStoresArray)([c.default], () => [c.default.isChannelMuted(e.guild_id, e.id), c.default.getChannelMuteConfig(e.guild_id, e.id)]), i = (0, d.useMutedUntilText)(s), C = (0, E.default)(e, !0);

                function A(t) {
                    t && e.type === f.ChannelTypes.GUILD_CATEGORY && (0, r.categoryCollapse)(e.id), o.default.updateChannelOverrideSettings(e.guild_id, e.id, {
                        muted: t
                    })
                }
                let S = N.default.Messages.MUTE_CHANNEL_GENERIC,
                    p = N.default.Messages.UNMUTE_CHANNEL_GENERIC;
                switch (e.type) {
                    case f.ChannelTypes.GUILD_CATEGORY:
                        S = N.default.Messages.MUTE_CATEGORY, p = N.default.Messages.UNMUTE_CATEGORY;
                        break;
                    case f.ChannelTypes.GROUP_DM:
                        S = N.default.Messages.MUTE_CONVERSATION, p = N.default.Messages.UNMUTE_CONVERSATION;
                        break;
                    case f.ChannelTypes.DM:
                        S = N.default.Messages.MUTE_CHANNEL.format({
                            name: C
                        }), p = N.default.Messages.UNMUTE_CHANNEL.format({
                            name: C
                        });
                        break;
                    default:
                        S = N.default.Messages.MUTE_CHANNEL_GENERIC, p = N.default.Messages.UNMUTE_CHANNEL_GENERIC
                }
                return n ? (0, a.jsx)(l.MenuItem, {
                    id: "unmute-channel",
                    label: p,
                    subtext: i,
                    action: () => A(!1)
                }) : (0, a.jsx)(l.MenuItem, {
                    id: "mute-channel",
                    label: S,
                    action: () => A(!0),
                    children: _().map(n => {
                        let {
                            value: s,
                            label: i
                        } = n;
                        return (0, a.jsx)(l.MenuItem, {
                            id: "".concat(s),
                            label: i,
                            action: () => (function(n) {
                                e.type === f.ChannelTypes.GUILD_CATEGORY && (0, r.categoryCollapse)(e.id);
                                let a = T(n);
                                o.default.updateChannelOverrideSettings(e.guild_id, e.id, a, t)
                            })(s)
                        }, s)
                    })
                })
            }
        },
        200008: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                addFavoriteChannel: function() {
                    return E
                },
                removeFavoriteChannel: function() {
                    return f
                },
                setFavoriteChannelNickname: function() {
                    return C
                },
                addFavoriteCategory: function() {
                    return N
                },
                removeFavoriteCategory: function() {
                    return _
                },
                updateFavoriteChannels: function() {
                    return T
                },
                toggleFavoriteServerMuted: function() {
                    return A
                }
            }), n("222007");
            var a = n("249654"),
                s = n("151426"),
                i = n("872173"),
                u = n("42203"),
                l = n("957255"),
                r = n("379881"),
                o = n("843455");

            function d() {
                let e = r.default.getFavoriteChannels(),
                    t = 1;
                for (let n in e) t = Math.max(t, e[n].order);
                return t + 1
            }

            function c(e) {
                for (let t in e) {
                    let n = e[t];
                    if (null == n) {
                        delete e[t];
                        continue
                    }
                    if (n.type === s.FavoriteChannelType.CATEGORY) continue;
                    let a = u.default.getChannel(t);
                    if (null == a || !a.isPrivate() && !l.default.can(o.Permissions.VIEW_CHANNEL, a)) {
                        delete e[t];
                        continue
                    }
                }
            }

            function E(e, t) {
                let n = r.default.isFavorite(e);
                !n && i.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e] = s.FavoriteChannel.create({
                        nickname: "",
                        type: s.FavoriteChannelType.REFERENCE_ORIGINAL,
                        position: d(),
                        parentId: null != t ? t : "0"
                    }), c(n.favoriteChannels)
                }, i.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function f(e) {
                let t = r.default.getFavorite(e);
                null != t && i.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    if (delete n.favoriteChannels[e], t.type === s.FavoriteChannelType.CATEGORY)
                        for (let t in n.favoriteChannels) n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = "0");
                    c(n.favoriteChannels)
                }, i.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function C(e, t) {
                let n = r.default.isFavorite(e);
                n && i.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e].nickname = null != t ? t : ""
                }, i.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function N(e) {
                let t = a.default.fromTimestamp(Date.now());
                i.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[t] = s.FavoriteChannel.create({
                        nickname: e,
                        type: s.FavoriteChannelType.CATEGORY,
                        position: d(),
                        parentId: "0"
                    })
                }, i.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function _(e) {
                f(e)
            }

            function T(e) {
                i.PreloadedUserSettingsActionCreators.updateAsync("favorites", t => {
                    for (let a of e)
                        if (null != a.position && (t.favoriteChannels[a.id].position = a.position), void 0 !== a.parent_id) {
                            var n;
                            t.favoriteChannels[a.id].parentId = null !== (n = a.parent_id) && void 0 !== n ? n : "0"
                        }
                }, i.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function A() {
                i.PreloadedUserSettingsActionCreators.updateAsync("favorites", e => {
                    e.muted = !e.muted
                }, i.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }
        },
        16108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                acceptMessageRequest: function() {
                    return r
                },
                clearMessageRequestState: function() {
                    return o
                },
                markAsMessageRequest: function() {
                    return d
                },
                rejectMessageRequest: function() {
                    return c
                },
                rejectMessageRequestBatch: function() {
                    return E
                },
                fetchUserCountryCode: function() {
                    return f
                }
            });
            var a = n("872717"),
                s = n("913144"),
                i = n("437822"),
                u = n("773163"),
                l = n("49111");
            async function r(e) {
                await a.default.put({
                    url: l.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: u.MessageRequestConsentStatusTypes.ACCEPTED
                    }
                }), s.default.dispatch({
                    type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
                    channelId: e
                })
            }

            function o(e) {
                return a.default.put({
                    url: l.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: u.MessageRequestConsentStatusTypes.UNSPECIFIED
                    }
                })
            }

            function d(e) {
                return a.default.put({
                    url: l.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: u.MessageRequestConsentStatusTypes.PENDING
                    }
                })
            }

            function c(e) {
                return a.default.delete({
                    url: l.Endpoints.CHANNEL_RECIPIENT_CONSENT(e)
                })
            }

            function E(e) {
                return a.default.put({
                    url: l.Endpoints.CHANNEL_RECIPIENT_REJECT_BATCH(),
                    body: {
                        channel_ids: e
                    }
                })
            }

            function f() {
                i.default.getLocationMetadata()
            }
        },
        773163: function(e, t, n) {
            "use strict";
            var a, s;
            n.r(t), n.d(t, {
                MessageRequestConsentStatusTypes: function() {
                    return a
                }
            }), (s = a || (a = {}))[s.UNSPECIFIED = 0] = "UNSPECIFIED", s[s.PENDING = 1] = "PENDING", s[s.ACCEPTED = 2] = "ACCEPTED", s[s.REJECTED = 3] = "REJECTED"
        },
        277734: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                dismissChannelSafetyWarnings: function() {
                    return u
                },
                setChannelSafetyWarningFeedback: function() {
                    return l
                },
                clearChannelSafetyWarnings: function() {
                    return r
                }
            });
            var a = n("872717"),
                s = n("913144"),
                i = n("49111");

            function u(e, t) {
                return s.default.dispatch({
                    type: "DISMISS_CHANNEL_SAFETY_WARNINGS",
                    channelId: e,
                    warningIds: t
                }), a.default.post({
                    url: i.Endpoints.CHANNEL_SAFETY_WARNINGS_ACK(e),
                    body: {
                        warning_ids: t
                    },
                    oldFormErrors: !0
                })
            }

            function l(e, t, n) {
                s.default.dispatch({
                    type: "CHANNEL_SAFETY_WARNING_FEEDBACK",
                    channelId: e,
                    warningId: t,
                    feedbackType: n
                })
            }

            function r(e) {
                s.default.dispatch({
                    type: "CLEAR_CHANNEL_SAFETY_WARNINGS",
                    channelId: e
                })
            }
        },
        764828: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SafetyWarningTypes: function() {
                    return i
                },
                SafetyWarningFeedbackTypes: function() {
                    return u
                },
                default: function() {
                    return N
                }
            });
            var a, s, i, u, l = n("446674"),
                r = n("913144"),
                o = n("42203");
            (a = i || (i = {}))[a.STRANGER_DANGER = 1] = "STRANGER_DANGER", (s = u || (u = {}))[s.UPVOTE = 0] = "UPVOTE", s[s.DOWNVOTE = 1] = "DOWNVOTE";
            let d = [],
                c = {};

            function E(e) {
                let {
                    safetyWarnings: t
                } = e;
                null != t && (c[e.id] = t), null == t && null != c[e.id] && delete c[e.id]
            }

            function f() {
                c = {}, Object.values(o.default.getMutablePrivateChannels()).forEach(e => {
                    E(e)
                })
            }
            class C extends l.default.Store {
                initialize() {
                    this.waitFor(o.default)
                }
                getChannelSafetyWarning(e, t) {
                    var n;
                    return null === (n = c[e]) || void 0 === n ? void 0 : n.find(e => e.id === t)
                }
                getChannelSafetyWarnings(e) {
                    var t;
                    return null !== (t = c[e]) && void 0 !== t ? t : d
                }
            }
            var N = new C(r.default, {
                CHANNEL_CREATE: function(e) {
                    E(e.channel)
                },
                CHANNEL_DELETE: function(e) {
                    null != c[e.channel.id] && delete c[e.channel.id]
                },
                CHANNEL_UPDATES: function(e) {
                    e.channels.forEach(e => {
                        E(e)
                    })
                },
                CONNECTION_OPEN: f,
                CONNECTION_OPEN_SUPPLEMENTAL: f,
                CHANNEL_SAFETY_WARNING_FEEDBACK: function(e) {
                    let {
                        channelId: t,
                        warningId: n,
                        feedbackType: a
                    } = e, s = c[t];
                    null != s && (c[t] = s.map(e => e.id === n ? {
                        ...e,
                        feedback_type: a
                    } : e))
                },
                CLEAR_CHANNEL_SAFETY_WARNINGS: function(e) {
                    let {
                        channelId: t
                    } = e, n = c[t];
                    null != n && (c[t] = n.map(e => ({
                        ...e,
                        dismiss_timestamp: void 0
                    })))
                },
                DISMISS_CHANNEL_SAFETY_WARNINGS: function(e) {
                    let {
                        channelId: t,
                        warningIds: n
                    } = e, a = c[t];
                    if (null == a) return;
                    let s = Date.now().toString();
                    c[t] = a.map(e => n.includes(e.id) ? {
                        ...e,
                        dismiss_timestamp: s
                    } : e)
                }
            })
        },
        563816: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var a = n("37983"),
                s = n("884691"),
                i = n("627445"),
                u = n.n(i),
                l = n("446674"),
                r = n("77078"),
                o = n("240249"),
                d = n("916565"),
                c = n("355263"),
                E = n("633043"),
                f = n("305961"),
                C = n("317041"),
                N = n("782340"),
                _ = n("205735"),
                T = e => {
                    let t, {
                            commandType: n,
                            commandTargetId: i,
                            channel: T,
                            guildId: A,
                            onHeightUpdate: S
                        } = e,
                        p = (0, l.useStateFromStores)([f.default], () => f.default.getGuild(null != A ? A : T.guild_id)),
                        {
                            commands: I,
                            sectionDescriptors: U,
                            loading: M
                        } = o.useDiscovery(T, {
                            commandType: n
                        }, {
                            limit: C.CONTEXT_MENU_COMMANDS_QUERY_LIMIT
                        }),
                        {
                            sections: R
                        } = s.useMemo(() => {
                            let e = {};
                            return U.forEach(t => {
                                e[t.id] = t
                            }), {
                                sections: e
                            }
                        }, [U]),
                        g = s.useRef(M.current);
                    s.useEffect(() => {
                        M.current !== g.current && (g.current = M.current, null == S || S())
                    }, [M, S]);
                    let h = s.useCallback(e => {
                        u(null != T, "menu item should not show if channel is null");
                        let t = R[e.applicationId],
                            n = null != t ? (0, c.getIconComponent)(t) : void 0;
                        return (0, a.jsx)(r.MenuItem, {
                            id: e.id,
                            label: e.displayName,
                            showIconFirst: !0,
                            icon: () => null != n ? (0, a.jsx)(n, {
                                channel: T,
                                section: t,
                                width: 18,
                                height: 18,
                                selectable: !1
                            }) : null,
                            action: () => {
                                (0, d.default)({
                                    command: e,
                                    optionValues: {},
                                    context: {
                                        channel: T,
                                        guild: p
                                    },
                                    commandTargetId: i
                                })
                            }
                        }, e.id)
                    }, [T, p, i, R]);
                    return t = M.current ? (0, a.jsx)(r.MenuItem, {
                        id: "menu-commands-placeholder",
                        render: () => (0, a.jsx)(E.default, {}),
                        disabled: !0
                    }) : 0 === I.length ? (0, a.jsx)(r.MenuItem, {
                        id: "menu-commands-empty",
                        label: N.default.Messages.APPLICATION_COMMAND_NO_COMMANDS,
                        disabled: !0
                    }) : I.map(h), (0, a.jsx)(r.MenuItem, {
                        id: "apps",
                        label: N.default.Messages.APPS,
                        childRowHeight: 34,
                        listClassName: _.list,
                        children: t
                    })
                }
        }
    }
]);