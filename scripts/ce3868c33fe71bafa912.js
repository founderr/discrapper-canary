(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["20698"], {
        633043: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("77078"),
                u = n("850572"),
                l = () => (0, a.jsx)("div", {
                    className: u.loadingWrapper,
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
                    return S
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var i = n("866227"),
                u = n.n(i),
                l = n("446674"),
                s = n("77078"),
                r = n("820542"),
                o = n("519705"),
                d = n("319165"),
                c = n("282109"),
                f = n("34676"),
                E = n("679653"),
                C = n("49111"),
                N = n("468200"),
                A = n("782340");
            let _ = () => [{
                    value: N.MuteUntilSeconds.MINUTES_15,
                    label: A.default.Messages.MUTE_DURATION_15_MINUTES
                }, {
                    value: N.MuteUntilSeconds.HOURS_1,
                    label: A.default.Messages.MUTE_DURATION_1_HOUR
                }, {
                    value: N.MuteUntilSeconds.HOURS_3,
                    label: A.default.Messages.MUTE_DURATION_3_HOURS
                }, {
                    value: N.MuteUntilSeconds.HOURS_8,
                    label: A.default.Messages.MUTE_DURATION_8_HOURS
                }, {
                    value: N.MuteUntilSeconds.HOURS_24,
                    label: A.default.Messages.MUTE_DURATION_24_HOURS
                }, {
                    value: N.MuteUntilSeconds.ALWAYS,
                    label: A.default.Messages.MUTE_DURATION_ALWAYS
                }],
                p = e => {
                    let t = e > 0 ? u().add(e, "second").toISOString() : null;
                    return {
                        muted: !0,
                        mute_config: {
                            selected_time_window: e,
                            end_time: t
                        }
                    }
                };

            function S(e, t) {
                let [n, i] = (0, l.useStateFromStoresArray)([c.default], () => [c.default.isChannelMuted(e.guild_id, e.id), c.default.getChannelMuteConfig(e.guild_id, e.id)]), u = (0, d.useMutedUntilText)(i), N = (0, E.default)(e, !0);

                function S(t) {
                    t && e.type === C.ChannelTypes.GUILD_CATEGORY && (0, r.categoryCollapse)(e.id), o.default.updateChannelOverrideSettings(e.guild_id, e.id, {
                        muted: t
                    }, f.NotificationLabel.muted(t))
                }
                let v = A.default.Messages.MUTE_CHANNEL_GENERIC,
                    T = A.default.Messages.UNMUTE_CHANNEL_GENERIC;
                switch (e.type) {
                    case C.ChannelTypes.GUILD_CATEGORY:
                        v = A.default.Messages.MUTE_CATEGORY, T = A.default.Messages.UNMUTE_CATEGORY;
                        break;
                    case C.ChannelTypes.GROUP_DM:
                        v = A.default.Messages.MUTE_CONVERSATION, T = A.default.Messages.UNMUTE_CONVERSATION;
                        break;
                    case C.ChannelTypes.DM:
                        v = A.default.Messages.MUTE_CHANNEL.format({
                            name: N
                        }), T = A.default.Messages.UNMUTE_CHANNEL.format({
                            name: N
                        });
                        break;
                    default:
                        v = A.default.Messages.MUTE_CHANNEL_GENERIC, T = A.default.Messages.UNMUTE_CHANNEL_GENERIC
                }
                return n ? (0, a.jsx)(s.MenuItem, {
                    id: "unmute-channel",
                    label: T,
                    subtext: u,
                    action: () => S(!1)
                }) : (0, a.jsx)(s.MenuItem, {
                    id: "mute-channel",
                    label: v,
                    action: () => S(!0),
                    children: _().map(n => {
                        let {
                            value: i,
                            label: u
                        } = n;
                        return (0, a.jsx)(s.MenuItem, {
                            id: "".concat(i),
                            label: u,
                            action: () => (function(n) {
                                e.type === C.ChannelTypes.GUILD_CATEGORY && (0, r.categoryCollapse)(e.id);
                                let a = p(n);
                                o.default.updateChannelOverrideSettings(e.guild_id, e.id, a, f.NotificationLabels.Muted, t)
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
                    return f
                },
                removeFavoriteChannel: function() {
                    return E
                },
                setFavoriteChannelNickname: function() {
                    return C
                },
                addFavoriteCategory: function() {
                    return N
                },
                removeFavoriteCategory: function() {
                    return A
                },
                updateFavoriteChannels: function() {
                    return _
                },
                updateFavoriteChannelParent: function() {
                    return p
                },
                toggleFavoriteServerMuted: function() {
                    return S
                }
            }), n("222007");
            var a = n("249654"),
                i = n("151426"),
                u = n("872173"),
                l = n("42203"),
                s = n("957255"),
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
                    let a = l.default.getChannel(t);
                    if (null == a || !a.isPrivate() && !s.default.can(o.Permissions.VIEW_CHANNEL, a)) {
                        delete e[t];
                        continue
                    }
                }
            }

            function f(e, t) {
                let n = r.default.isFavorite(e);
                !n && u.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e] = i.FavoriteChannel.create({
                        nickname: "",
                        type: i.FavoriteChannelType.REFERENCE_ORIGINAL,
                        position: d(),
                        parentId: null != t ? t : "0"
                    }), c(n.favoriteChannels)
                }, u.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function E(e) {
                let t = r.default.getFavorite(e);
                null != t && u.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    if (delete n.favoriteChannels[e], t.type === i.FavoriteChannelType.CATEGORY)
                        for (let t in n.favoriteChannels) n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = "0");
                    c(n.favoriteChannels)
                }, u.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function C(e, t) {
                let n = r.default.isFavorite(e);
                n && u.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e].nickname = null != t ? t : ""
                }, u.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function N(e) {
                let t = a.default.fromTimestamp(Date.now());
                u.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[t] = i.FavoriteChannel.create({
                        nickname: e,
                        type: i.FavoriteChannelType.CATEGORY,
                        position: d(),
                        parentId: "0"
                    })
                }, u.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function A(e) {
                E(e)
            }

            function _(e) {
                u.PreloadedUserSettingsActionCreators.updateAsync("favorites", t => {
                    for (let a of e)
                        if (null != a.position && (t.favoriteChannels[a.id].position = a.position), void 0 !== a.parent_id) {
                            var n;
                            t.favoriteChannels[a.id].parentId = null !== (n = a.parent_id) && void 0 !== n ? n : "0"
                        }
                }, u.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function p(e, t) {
                u.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e].parentId = null != t ? t : "0"
                }, u.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function S() {
                u.PreloadedUserSettingsActionCreators.updateAsync("favorites", e => {
                    e.muted = !e.muted
                }, u.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }
        },
        986373: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useFavorite: function() {
                    return f
                },
                useFavoritesCategories: function() {
                    return E
                },
                useFavoritesGuildSelected: function() {
                    return C
                },
                useFavoriteAdded: function() {
                    return N
                }
            }), n("424973"), n("222007");
            var a = n("884691"),
                i = n("298386"),
                u = n("446674");
            n("42203");
            var l = n("923959"),
                s = n("162771"),
                r = n("379881"),
                o = n("498139"),
                d = n("136569"),
                c = n("49111");

            function f(e) {
                let t = (0, u.useStateFromStores)([r.default], () => r.default.getFavorite(e));
                return t
            }

            function E() {
                let e = (0, u.useStateFromStores)([l.default], () => l.default.getChannels(c.FAVORITES))[i.ChannelTypes.GUILD_CATEGORY];
                return e.map(e => ({
                    id: "null" === e.channel.id ? null : e.channel.id,
                    name: e.channel.name
                }))
            }

            function C() {
                let e = (0, u.useStateFromStores)([s.default], () => s.default.getGuildId());
                return e === c.FAVORITES
            }

            function N() {
                let {
                    isFavoritesPerk: e
                } = (0, o.useFavoritesServerExperiment)("useFavoriteAdded"), t = (0, d.useFavoritesTooltipStore)(), n = a.useCallback(() => {
                    e && t.notifyFavoriteAdded()
                }, [t, e]), i = a.useCallback(() => {
                    e && t.clearFavoriteAdded()
                }, [t, e]);
                return {
                    favoriteAdded: t.favoriteAdded,
                    notifyFavoriteAdded: n,
                    clearFavoriteAdded: i
                }
            }
        },
        136569: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useFavoritesTooltipStore: function() {
                    return i
                }
            });
            var a = n("308503");
            let i = (0, a.default)(e => ({
                favoriteAdded: !1,
                notifyFavoriteAdded: () => e({
                    favoriteAdded: !0
                }),
                clearFavoriteAdded: () => e({
                    favoriteAdded: !1
                })
            }))
        },
        823026: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            }), n("424973");
            var a = n("37983"),
                i = n("884691"),
                u = n("446674"),
                l = n("77078"),
                s = n("713841"),
                r = n("79112"),
                o = n("988721"),
                d = n("592407"),
                c = n("305961"),
                f = n("957255"),
                E = n("49111"),
                C = n("782340");

            function N(e) {
                let {
                    user: t,
                    guildId: n,
                    channel: N,
                    context: A
                } = e, _ = c.default.getGuild(n), p = (0, u.useStateFromStores)([f.default], () => null != _ ? f.default.can(E.Permissions.MANAGE_GUILD, _) : null), S = (0, o.useContextIndexState)(N, !0, !0), v = (0, o.useUserIndexState)(!0, !0), {
                    isUserApp: T,
                    isGuildApp: I
                } = i.useMemo(() => {
                    var e, n, a, i;
                    if ((null == t ? void 0 : t.id) == null) return {
                        isGuildApp: !1,
                        isUserApp: !1
                    };
                    let u = Object.values(null !== (a = null === (e = S.result) || void 0 === e ? void 0 : e.sections) && void 0 !== a ? a : {}),
                        l = Object.values(null !== (i = null === (n = v.result) || void 0 === n ? void 0 : n.sections) && void 0 !== i ? i : {});
                    return {
                        isGuildApp: u.some(e => {
                            var n;
                            return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === (null == t ? void 0 : t.id)
                        }),
                        isUserApp: l.some(e => {
                            var n;
                            return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === (null == t ? void 0 : t.id)
                        })
                    }
                }, [S, v, null == t ? void 0 : t.id]), g = i.useCallback(() => {
                    (null == _ ? void 0 : _.id) != null && (d.default.open(_.id, E.GuildSettingsSections.INTEGRATIONS), s.default.setSection(E.IntegrationSettingsSections.APPLICATION, null == t ? void 0 : t.id))
                }, [null == t ? void 0 : t.id, null == _ ? void 0 : _.id]), U = i.useCallback(() => {
                    r.default.open(E.UserSettingsSections.AUTHORIZED_APPS)
                }, []), M = A === E.AppContext.POPOUT;
                if (!(null == t ? void 0 : t.bot) || !p || M || !I && !T) return null;
                let m = [];
                return I && m.push((0, a.jsx)(l.MenuItem, {
                    id: "manage-integration",
                    label: C.default.Messages.MANAGE_INTEGRATION,
                    action: g
                }, "manage-integration")), T && m.push((0, a.jsx)(l.MenuItem, {
                    id: "manage-authorized-app",
                    label: C.default.Messages.MANAGE_AUTHORIZED_APP,
                    action: U
                }, "manage-authorized-app")), m
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
                    return f
                },
                fetchUserCountryCode: function() {
                    return E
                }
            });
            var a = n("872717"),
                i = n("913144"),
                u = n("437822"),
                l = n("773163"),
                s = n("49111");
            async function r(e) {
                await a.default.put({
                    url: s.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: l.MessageRequestConsentStatusTypes.ACCEPTED
                    }
                }), i.default.dispatch({
                    type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
                    channelId: e
                })
            }

            function o(e) {
                return a.default.put({
                    url: s.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: l.MessageRequestConsentStatusTypes.UNSPECIFIED
                    }
                })
            }

            function d(e) {
                return a.default.put({
                    url: s.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: l.MessageRequestConsentStatusTypes.PENDING
                    }
                })
            }

            function c(e) {
                return a.default.delete({
                    url: s.Endpoints.CHANNEL_RECIPIENT_CONSENT(e)
                })
            }

            function f(e) {
                return a.default.put({
                    url: s.Endpoints.CHANNEL_RECIPIENT_REJECT_BATCH(),
                    body: {
                        channel_ids: e
                    }
                })
            }

            function E() {
                u.default.getLocationMetadata()
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
                    return l
                },
                setChannelSafetyWarningFeedback: function() {
                    return s
                },
                clearChannelSafetyWarnings: function() {
                    return r
                }
            });
            var a = n("872717"),
                i = n("913144"),
                u = n("49111");

            function l(e, t) {
                return i.default.dispatch({
                    type: "DISMISS_CHANNEL_SAFETY_WARNINGS",
                    channelId: e,
                    warningIds: t
                }), a.default.post({
                    url: u.Endpoints.CHANNEL_SAFETY_WARNINGS_ACK(e),
                    body: {
                        warning_ids: t
                    },
                    oldFormErrors: !0
                })
            }

            function s(e, t, n) {
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
                    return u
                },
                SafetyWarningFeedbackTypes: function() {
                    return l
                },
                default: function() {
                    return N
                }
            });
            var a, i, u, l, s = n("446674"),
                r = n("913144"),
                o = n("42203");
            (a = u || (u = {}))[a.STRANGER_DANGER = 1] = "STRANGER_DANGER", (i = l || (l = {}))[i.UPVOTE = 0] = "UPVOTE", i[i.DOWNVOTE = 1] = "DOWNVOTE";
            let d = [],
                c = {};

            function f(e) {
                let {
                    safetyWarnings: t
                } = e;
                null != t && (c[e.id] = t), null == t && null != c[e.id] && delete c[e.id]
            }

            function E() {
                c = {}, Object.values(o.default.getMutablePrivateChannels()).forEach(e => {
                    f(e)
                })
            }
            class C extends s.default.Store {
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
                    f(e.channel)
                },
                CHANNEL_DELETE: function(e) {
                    null != c[e.channel.id] && delete c[e.channel.id]
                },
                CHANNEL_UPDATES: function(e) {
                    e.channels.forEach(e => {
                        f(e)
                    })
                },
                CONNECTION_OPEN: E,
                CONNECTION_OPEN_SUPPLEMENTAL: E,
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
                    return S
                }
            });
            var a = n("37983"),
                i = n("884691"),
                u = n("627445"),
                l = n.n(u),
                s = n("446674"),
                r = n("77078"),
                o = n("240249"),
                d = n("916565"),
                c = n("355263"),
                f = n("633043"),
                E = n("823026"),
                C = n("305961"),
                N = n("697218"),
                A = n("317041"),
                _ = n("782340"),
                p = n("205735"),
                S = e => {
                    let t, {
                            commandType: n,
                            commandTargetId: u,
                            channel: S,
                            guildId: v,
                            onHeightUpdate: T,
                            context: I
                        } = e,
                        g = (0, s.useStateFromStores)([C.default], () => C.default.getGuild(null != v ? v : S.guild_id)),
                        U = (0, s.useStateFromStores)([N.default], () => N.default.getUser(u)),
                        M = (0, E.default)({
                            user: U,
                            guildId: null == g ? void 0 : g.id,
                            channel: S,
                            context: I
                        }),
                        {
                            commands: m,
                            sectionDescriptors: h,
                            loading: R
                        } = o.useDiscovery(S, {
                            commandType: n
                        }, {
                            limit: A.CONTEXT_MENU_COMMANDS_QUERY_LIMIT
                        }),
                        {
                            sections: O
                        } = i.useMemo(() => {
                            let e = {};
                            return h.forEach(t => {
                                e[t.id] = t
                            }), {
                                sections: e
                            }
                        }, [h]),
                        y = i.useRef(R.current);
                    i.useEffect(() => {
                        R.current !== y.current && (y.current = R.current, null == T || T())
                    }, [R, T]);
                    let F = i.useCallback(e => {
                        l(null != S, "menu item should not show if channel is null");
                        let t = O[e.applicationId],
                            n = null != t ? (0, c.getIconComponent)(t) : void 0;
                        return (0, a.jsx)(r.MenuItem, {
                            id: e.id,
                            label: e.displayName,
                            showIconFirst: !0,
                            icon: () => null != n ? (0, a.jsx)(n, {
                                channel: S,
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
                                        channel: S,
                                        guild: g
                                    },
                                    commandTargetId: u
                                })
                            }
                        }, e.id)
                    }, [S, g, u, O]);
                    return R.current ? t = (0, a.jsx)(r.MenuItem, {
                        id: "menu-commands-placeholder",
                        render: () => (0, a.jsx)(f.default, {}),
                        disabled: !0
                    }, "menu-commands-placeholder") : (t = 0 === m.length ? (0, a.jsx)(r.MenuItem, {
                        id: "menu-commands-empty",
                        label: _.default.Messages.APPLICATION_COMMAND_NO_COMMANDS,
                        disabled: !0
                    }, "menu-commands-empty") : m.map(F), null != M && (t = (0, a.jsxs)(a.Fragment, {
                        children: [t, (0, a.jsx)(r.MenuSeparator, {}, "separator"), M]
                    }))), (0, a.jsx)(r.MenuItem, {
                        id: "apps",
                        label: _.default.Messages.APPS,
                        listClassName: p.list,
                        children: t
                    })
                }
        }
    }
]);