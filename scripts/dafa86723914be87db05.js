(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["37551"], {
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
                r = n("850572"),
                u = () => (0, a.jsx)("div", {
                    className: r.loadingWrapper,
                    children: (0, a.jsx)(i.Dots, {
                        dotRadius: 4,
                        themed: !0
                    })
                })
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
                    return p
                },
                updateFavoriteChannels: function() {
                    return A
                },
                updateFavoriteChannelParent: function() {
                    return v
                },
                toggleFavoriteServerMuted: function() {
                    return S
                }
            }), n("222007");
            var a = n("249654"),
                i = n("151426"),
                r = n("872173"),
                u = n("42203"),
                l = n("957255"),
                s = n("379881"),
                o = n("843455");

            function d() {
                let e = s.default.getFavoriteChannels(),
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

            function f(e, t) {
                let n = s.default.isFavorite(e);
                !n && r.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e] = i.FavoriteChannel.create({
                        nickname: "",
                        type: i.FavoriteChannelType.REFERENCE_ORIGINAL,
                        position: d(),
                        parentId: null != t ? t : "0"
                    }), c(n.favoriteChannels)
                }, r.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function E(e) {
                let t = s.default.getFavorite(e);
                null != t && r.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    if (delete n.favoriteChannels[e], t.type === i.FavoriteChannelType.CATEGORY)
                        for (let t in n.favoriteChannels) n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = "0");
                    c(n.favoriteChannels)
                }, r.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function C(e, t) {
                let n = s.default.isFavorite(e);
                n && r.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e].nickname = null != t ? t : ""
                }, r.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function N(e) {
                let t = a.default.fromTimestamp(Date.now());
                r.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[t] = i.FavoriteChannel.create({
                        nickname: e,
                        type: i.FavoriteChannelType.CATEGORY,
                        position: d(),
                        parentId: "0"
                    })
                }, r.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function p(e) {
                E(e)
            }

            function A(e) {
                r.PreloadedUserSettingsActionCreators.updateAsync("favorites", t => {
                    for (let a of e)
                        if (null != a.position && (t.favoriteChannels[a.id].position = a.position), void 0 !== a.parent_id) {
                            var n;
                            t.favoriteChannels[a.id].parentId = null !== (n = a.parent_id) && void 0 !== n ? n : "0"
                        }
                }, r.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function v(e, t) {
                r.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e].parentId = null != t ? t : "0"
                }, r.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function S() {
                r.PreloadedUserSettingsActionCreators.updateAsync("favorites", e => {
                    e.muted = !e.muted
                }, r.UserSettingsDelay.INFREQUENT_USER_ACTION)
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
                r = n("446674");
            n("42203");
            var u = n("923959"),
                l = n("162771"),
                s = n("379881"),
                o = n("498139"),
                d = n("136569"),
                c = n("49111");

            function f(e) {
                let t = (0, r.useStateFromStores)([s.default], () => s.default.getFavorite(e));
                return t
            }

            function E() {
                let e = (0, r.useStateFromStores)([u.default], () => u.default.getChannels(c.FAVORITES))[i.ChannelTypes.GUILD_CATEGORY];
                return e.map(e => ({
                    id: "null" === e.channel.id ? null : e.channel.id,
                    name: e.channel.name
                }))
            }

            function C() {
                let e = (0, r.useStateFromStores)([l.default], () => l.default.getGuildId());
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
                r = n("446674"),
                u = n("77078"),
                l = n("713841"),
                s = n("79112"),
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
                    context: p
                } = e, A = c.default.getGuild(n), v = (0, r.useStateFromStores)([f.default], () => null != A ? f.default.can(E.Permissions.MANAGE_GUILD, A) : null), S = (0, o.useContextIndexState)(N, !0, !0), T = (0, o.useUserIndexState)(!0, !0), {
                    isUserApp: _,
                    isGuildApp: I
                } = i.useMemo(() => {
                    var e, n, a, i;
                    if ((null == t ? void 0 : t.id) == null) return {
                        isGuildApp: !1,
                        isUserApp: !1
                    };
                    let r = Object.values(null !== (a = null === (e = S.result) || void 0 === e ? void 0 : e.sections) && void 0 !== a ? a : {}),
                        u = Object.values(null !== (i = null === (n = T.result) || void 0 === n ? void 0 : n.sections) && void 0 !== i ? i : {});
                    return {
                        isGuildApp: r.some(e => {
                            var n;
                            return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === (null == t ? void 0 : t.id)
                        }),
                        isUserApp: u.some(e => {
                            var n;
                            return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === (null == t ? void 0 : t.id)
                        })
                    }
                }, [S, T, null == t ? void 0 : t.id]), h = i.useCallback(() => {
                    (null == A ? void 0 : A.id) != null && (d.default.open(A.id, E.GuildSettingsSections.INTEGRATIONS), l.default.setSection(E.IntegrationSettingsSections.APPLICATION, null == t ? void 0 : t.id))
                }, [null == t ? void 0 : t.id, null == A ? void 0 : A.id]), m = i.useCallback(() => {
                    s.default.open(E.UserSettingsSections.AUTHORIZED_APPS)
                }, []), g = p === E.AppContext.POPOUT;
                if (!(null == t ? void 0 : t.bot) || !v || g || !I && !_) return null;
                let F = [];
                return I && F.push((0, a.jsx)(u.MenuItem, {
                    id: "manage-integration",
                    label: C.default.Messages.MANAGE_INTEGRATION,
                    action: h
                }, "manage-integration")), _ && F.push((0, a.jsx)(u.MenuItem, {
                    id: "manage-authorized-app",
                    label: C.default.Messages.MANAGE_AUTHORIZED_APP,
                    action: m
                }, "manage-authorized-app")), F
            }
        },
        16108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                acceptMessageRequest: function() {
                    return s
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
                r = n("437822"),
                u = n("773163"),
                l = n("49111");
            async function s(e) {
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

            function f(e) {
                return a.default.put({
                    url: l.Endpoints.CHANNEL_RECIPIENT_REJECT_BATCH(),
                    body: {
                        channel_ids: e
                    }
                })
            }

            function E() {
                r.default.getLocationMetadata()
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
                    return s
                }
            });
            var a = n("872717"),
                i = n("913144"),
                r = n("49111");

            function u(e, t) {
                return i.default.dispatch({
                    type: "DISMISS_CHANNEL_SAFETY_WARNINGS",
                    channelId: e,
                    warningIds: t
                }), a.default.post({
                    url: r.Endpoints.CHANNEL_SAFETY_WARNINGS_ACK(e),
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

            function s(e) {
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
                    return r
                },
                SafetyWarningFeedbackTypes: function() {
                    return u
                },
                default: function() {
                    return N
                }
            });
            var a, i, r, u, l = n("446674"),
                s = n("913144"),
                o = n("42203");
            (a = r || (r = {}))[a.STRANGER_DANGER = 1] = "STRANGER_DANGER", (i = u || (u = {}))[i.UPVOTE = 0] = "UPVOTE", i[i.DOWNVOTE = 1] = "DOWNVOTE";
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
            var N = new C(s.default, {
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
                r = n("627445"),
                u = n.n(r),
                l = n("446674"),
                s = n("77078"),
                o = n("240249"),
                d = n("916565"),
                c = n("355263"),
                f = n("633043"),
                E = n("823026"),
                C = n("305961"),
                N = n("697218"),
                p = n("317041"),
                A = n("782340"),
                v = n("205735"),
                S = e => {
                    let t, {
                            commandType: n,
                            commandTargetId: r,
                            channel: S,
                            guildId: T,
                            onHeightUpdate: _,
                            context: I
                        } = e,
                        h = (0, l.useStateFromStores)([C.default], () => C.default.getGuild(null != T ? T : S.guild_id)),
                        m = (0, l.useStateFromStores)([N.default], () => N.default.getUser(r)),
                        g = (0, E.default)({
                            user: m,
                            guildId: null == h ? void 0 : h.id,
                            channel: S,
                            context: I
                        }),
                        {
                            commands: F,
                            sectionDescriptors: R,
                            loading: y
                        } = o.useDiscovery(S, {
                            commandType: n
                        }, {
                            limit: p.CONTEXT_MENU_COMMANDS_QUERY_LIMIT
                        }),
                        {
                            sections: U
                        } = i.useMemo(() => {
                            let e = {};
                            return R.forEach(t => {
                                e[t.id] = t
                            }), {
                                sections: e
                            }
                        }, [R]),
                        O = i.useRef(y.current);
                    i.useEffect(() => {
                        y.current !== O.current && (O.current = y.current, null == _ || _())
                    }, [y, _]);
                    let P = i.useCallback(e => {
                        u(null != S, "menu item should not show if channel is null");
                        let t = U[e.applicationId],
                            n = null != t ? (0, c.getIconComponent)(t) : void 0;
                        return (0, a.jsx)(s.MenuItem, {
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
                                        guild: h
                                    },
                                    commandTargetId: r
                                })
                            }
                        }, e.id)
                    }, [S, h, r, U]);
                    return y.current ? t = (0, a.jsx)(s.MenuItem, {
                        id: "menu-commands-placeholder",
                        render: () => (0, a.jsx)(f.default, {}),
                        disabled: !0
                    }, "menu-commands-placeholder") : (t = 0 === F.length ? (0, a.jsx)(s.MenuItem, {
                        id: "menu-commands-empty",
                        label: A.default.Messages.APPLICATION_COMMAND_NO_COMMANDS,
                        disabled: !0
                    }, "menu-commands-empty") : F.map(P), null != g && (t = (0, a.jsxs)(a.Fragment, {
                        children: [t, (0, a.jsx)(s.MenuSeparator, {}, "separator"), g]
                    }))), (0, a.jsx)(s.MenuItem, {
                        id: "apps",
                        label: A.default.Messages.APPS,
                        listClassName: v.list,
                        children: t
                    })
                }
        }
    }
]);