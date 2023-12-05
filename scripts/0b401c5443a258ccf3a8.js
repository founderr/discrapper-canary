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
            var i = n("77078"),
                s = n("850572"),
                u = () => (0, a.jsx)("div", {
                    className: s.loadingWrapper,
                    children: (0, a.jsx)(i.Dots, {
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
                    return p
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var i = n("866227"),
                s = n.n(i),
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
                    let t = e > 0 ? s().add(e, "second").toISOString() : null;
                    return {
                        muted: !0,
                        mute_config: {
                            selected_time_window: e,
                            end_time: t
                        }
                    }
                };

            function p(e, t) {
                let [n, i] = (0, u.useStateFromStoresArray)([c.default], () => [c.default.isChannelMuted(e.guild_id, e.id), c.default.getChannelMuteConfig(e.guild_id, e.id)]), s = (0, d.useMutedUntilText)(i), C = (0, E.default)(e, !0);

                function p(t) {
                    t && e.type === f.ChannelTypes.GUILD_CATEGORY && (0, r.categoryCollapse)(e.id), o.default.updateChannelOverrideSettings(e.guild_id, e.id, {
                        muted: t
                    })
                }
                let A = N.default.Messages.MUTE_CHANNEL_GENERIC,
                    S = N.default.Messages.UNMUTE_CHANNEL_GENERIC;
                switch (e.type) {
                    case f.ChannelTypes.GUILD_CATEGORY:
                        A = N.default.Messages.MUTE_CATEGORY, S = N.default.Messages.UNMUTE_CATEGORY;
                        break;
                    case f.ChannelTypes.GROUP_DM:
                        A = N.default.Messages.MUTE_CONVERSATION, S = N.default.Messages.UNMUTE_CONVERSATION;
                        break;
                    case f.ChannelTypes.DM:
                        A = N.default.Messages.MUTE_CHANNEL.format({
                            name: C
                        }), S = N.default.Messages.UNMUTE_CHANNEL.format({
                            name: C
                        });
                        break;
                    default:
                        A = N.default.Messages.MUTE_CHANNEL_GENERIC, S = N.default.Messages.UNMUTE_CHANNEL_GENERIC
                }
                return n ? (0, a.jsx)(l.MenuItem, {
                    id: "unmute-channel",
                    label: S,
                    subtext: s,
                    action: () => p(!1)
                }) : (0, a.jsx)(l.MenuItem, {
                    id: "mute-channel",
                    label: A,
                    action: () => p(!0),
                    children: _().map(n => {
                        let {
                            value: i,
                            label: s
                        } = n;
                        return (0, a.jsx)(l.MenuItem, {
                            id: "".concat(i),
                            label: s,
                            action: () => (function(n) {
                                e.type === f.ChannelTypes.GUILD_CATEGORY && (0, r.categoryCollapse)(e.id);
                                let a = T(n);
                                o.default.updateChannelOverrideSettings(e.guild_id, e.id, a, t)
                            })(i)
                        }, i)
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
                    return p
                }
            }), n("222007");
            var a = n("249654"),
                i = n("151426"),
                s = n("872173"),
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
                    if (n.type === i.FavoriteChannelType.CATEGORY) continue;
                    let a = u.default.getChannel(t);
                    if (null == a || !a.isPrivate() && !l.default.can(o.Permissions.VIEW_CHANNEL, a)) {
                        delete e[t];
                        continue
                    }
                }
            }

            function E(e, t) {
                let n = r.default.isFavorite(e);
                !n && s.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e] = i.FavoriteChannel.create({
                        nickname: "",
                        type: i.FavoriteChannelType.REFERENCE_ORIGINAL,
                        position: d(),
                        parentId: null != t ? t : "0"
                    }), c(n.favoriteChannels)
                }, s.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function f(e) {
                let t = r.default.getFavorite(e);
                null != t && s.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    if (delete n.favoriteChannels[e], t.type === i.FavoriteChannelType.CATEGORY)
                        for (let t in n.favoriteChannels) n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = "0");
                    c(n.favoriteChannels)
                }, s.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function C(e, t) {
                let n = r.default.isFavorite(e);
                n && s.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e].nickname = null != t ? t : ""
                }, s.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function N(e) {
                let t = a.default.fromTimestamp(Date.now());
                s.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[t] = i.FavoriteChannel.create({
                        nickname: e,
                        type: i.FavoriteChannelType.CATEGORY,
                        position: d(),
                        parentId: "0"
                    })
                }, s.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function _(e) {
                f(e)
            }

            function T(e) {
                s.PreloadedUserSettingsActionCreators.updateAsync("favorites", t => {
                    for (let a of e)
                        if (null != a.position && (t.favoriteChannels[a.id].position = a.position), void 0 !== a.parent_id) {
                            var n;
                            t.favoriteChannels[a.id].parentId = null !== (n = a.parent_id) && void 0 !== n ? n : "0"
                        }
                }, s.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function p() {
                s.PreloadedUserSettingsActionCreators.updateAsync("favorites", e => {
                    e.muted = !e.muted
                }, s.UserSettingsDelay.INFREQUENT_USER_ACTION)
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
                i = n("913144"),
                s = n("437822"),
                u = n("773163"),
                l = n("49111");
            async function r(e) {
                await a.default.put({
                    url: l.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: u.MessageRequestConsentStatusTypes.ACCEPTED
                    }
                }), i.default.dispatch({
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
                s.default.getLocationMetadata()
            }
        },
        773163: function(e, t, n) {
            "use strict";
            var a, i;
            n.r(t), n.d(t, {
                MessageRequestConsentStatusTypes: function() {
                    return a
                }
            }), (i = a || (a = {}))[i.UNSPECIFIED = 0] = "UNSPECIFIED", i[i.PENDING = 1] = "PENDING", i[i.ACCEPTED = 2] = "ACCEPTED", i[i.REJECTED = 3] = "REJECTED"
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
                i = n("913144"),
                s = n("49111");

            function u(e, t) {
                return i.default.dispatch({
                    type: "DISMISS_CHANNEL_SAFETY_WARNINGS",
                    channelId: e,
                    warningIds: t
                }), a.default.post({
                    url: s.Endpoints.CHANNEL_SAFETY_WARNINGS_ACK(e),
                    body: {
                        warning_ids: t
                    },
                    oldFormErrors: !0
                })
            }

            function l(e, t, n) {
                i.default.dispatch({
                    type: "CHANNEL_SAFETY_WARNING_FEEDBACK",
                    channelId: e,
                    warningId: t,
                    feedbackType: n
                })
            }

            function r(e) {
                i.default.dispatch({
                    type: "CLEAR_CHANNEL_SAFETY_WARNINGS",
                    channelId: e
                })
            }
        },
        764828: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SafetyWarningTypes: function() {
                    return s
                },
                SafetyWarningFeedbackTypes: function() {
                    return u
                },
                default: function() {
                    return N
                }
            });
            var a, i, s, u, l = n("446674"),
                r = n("913144"),
                o = n("42203");
            (a = s || (s = {}))[a.STRANGER_DANGER = 1] = "STRANGER_DANGER", (i = u || (u = {}))[i.UPVOTE = 0] = "UPVOTE", i[i.DOWNVOTE = 1] = "DOWNVOTE";
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
                    } = e, i = c[t];
                    null != i && (c[t] = i.map(e => e.id === n ? {
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
                    let i = Date.now().toString();
                    c[t] = a.map(e => n.includes(e.id) ? {
                        ...e,
                        dismiss_timestamp: i
                    } : e)
                }
            })
        },
        563816: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var a = n("37983"),
                i = n("884691"),
                s = n("627445"),
                u = n.n(s),
                l = n("446674"),
                r = n("77078"),
                o = n("240249"),
                d = n("524768"),
                c = n("389153"),
                E = n("916565"),
                f = n("355263"),
                C = n("633043"),
                N = n("305961"),
                _ = n("317041"),
                T = n("782340"),
                p = n("205735"),
                A = e => {
                    let {
                        commandType: t,
                        commandTargetId: n,
                        channel: s,
                        guildId: A,
                        onShow: S
                    } = e, U = i.useRef(!1), R = i.useRef(0), h = (0, l.useStateFromStores)([N.default], () => N.default.getGuild(null != A ? A : s.guild_id)), {
                        hasMoreAfter: g,
                        scrollDown: I,
                        sectionDescriptors: M,
                        commands: v,
                        placeholders: m
                    } = o.useDiscovery(s, {
                        commandType: t
                    }, {
                        placeholderCount: _.CONTEXT_MENU_PLACEHOLDER_COUNT,
                        limit: _.CONTEXT_MENU_COMMANDS_QUERY_LIMIT
                    }), {
                        visibleCommands: y,
                        sections: O
                    } = i.useMemo(() => {
                        let e = v.concat(m),
                            t = {};
                        return M.forEach(e => {
                            t[e.id] = e
                        }), {
                            visibleCommands: e,
                            sections: t
                        }
                    }, [v, M, m]), D = i.useMemo(() => (0, c.canUseContextMenuCommands)(s, y.length, o.getCommandTypeCount(s, t, null == h ? void 0 : h.applicationCommandCounts)), [s, t, y.length, null == h ? void 0 : h.applicationCommandCounts]);
                    i.useEffect(() => {
                        D !== U.current && (D && (null == S || S()), U.current = D)
                    }, [D, S]), i.useEffect(() => {
                        F(R.current)
                    }, [y]);
                    let F = i.useCallback(e => {
                            g && e + 500 > 34 * y.length - 40 && I(), R.current = e
                        }, [g, I, y]),
                        L = i.useCallback(e => {
                            if (e.inputType === d.ApplicationCommandInputType.PLACEHOLDER) return (0, a.jsx)(r.MenuItem, {
                                id: "menu-command-".concat(e.id),
                                render: () => (0, a.jsx)(C.default, {})
                            }, "menu-command-".concat(e.id));
                            u(null != s, "menu item should not show if channel is null");
                            let t = O[e.applicationId],
                                i = null != t ? (0, f.getIconComponent)(t) : void 0;
                            return (0, a.jsx)(r.MenuItem, {
                                id: e.id,
                                label: e.displayName,
                                showIconFirst: !0,
                                icon: () => null != i ? (0, a.jsx)(i, {
                                    channel: s,
                                    section: t,
                                    width: 18,
                                    height: 18,
                                    selectable: !1
                                }) : null,
                                action: () => {
                                    (0, E.default)({
                                        command: e,
                                        optionValues: {},
                                        context: {
                                            channel: s,
                                            guild: h
                                        },
                                        commandTargetId: n
                                    })
                                }
                            }, e.id)
                        }, [s, h, n, O]);
                    return D && (0, a.jsx)(r.MenuItem, {
                        id: "apps",
                        label: T.default.Messages.APPS,
                        onChildrenScroll: F,
                        childRowHeight: 34,
                        listClassName: p.list,
                        disabled: 0 === y.length,
                        children: y.map(L)
                    })
                }
        }
    }
]);