(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["96006"], {
        531674: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getMuteTimes: function() {
                    return A
                },
                default: function() {
                    return T
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var i = n("866227"),
                r = n.n(i),
                u = n("446674"),
                s = n("77078"),
                l = n("820542"),
                o = n("519705"),
                d = n("319165"),
                f = n("282109"),
                E = n("34676"),
                c = n("679653"),
                C = n("49111"),
                N = n("468200"),
                _ = n("782340");
            let A = () => [{
                    value: N.MuteUntilSeconds.MINUTES_15,
                    label: _.default.Messages.MUTE_DURATION_15_MINUTES
                }, {
                    value: N.MuteUntilSeconds.HOURS_1,
                    label: _.default.Messages.MUTE_DURATION_1_HOUR
                }, {
                    value: N.MuteUntilSeconds.HOURS_3,
                    label: _.default.Messages.MUTE_DURATION_3_HOURS
                }, {
                    value: N.MuteUntilSeconds.HOURS_8,
                    label: _.default.Messages.MUTE_DURATION_8_HOURS
                }, {
                    value: N.MuteUntilSeconds.HOURS_24,
                    label: _.default.Messages.MUTE_DURATION_24_HOURS
                }, {
                    value: N.MuteUntilSeconds.ALWAYS,
                    label: _.default.Messages.MUTE_DURATION_ALWAYS
                }],
                S = e => {
                    let t = e > 0 ? r().add(e, "second").toISOString() : null;
                    return {
                        muted: !0,
                        mute_config: {
                            selected_time_window: e,
                            end_time: t
                        }
                    }
                };

            function T(e, t) {
                let [n, i] = (0, u.useStateFromStoresArray)([f.default], () => [f.default.isChannelMuted(e.guild_id, e.id), f.default.getChannelMuteConfig(e.guild_id, e.id)]), r = (0, d.useMutedUntilText)(i), N = (0, c.default)(e, !0);

                function T(t) {
                    t && e.type === C.ChannelTypes.GUILD_CATEGORY && (0, l.categoryCollapse)(e.id), o.default.updateChannelOverrideSettings(e.guild_id, e.id, {
                        muted: t
                    }, E.NotificationLabel.muted(t))
                }
                let v = _.default.Messages.MUTE_CHANNEL_GENERIC,
                    p = _.default.Messages.UNMUTE_CHANNEL_GENERIC;
                switch (e.type) {
                    case C.ChannelTypes.GUILD_CATEGORY:
                        v = _.default.Messages.MUTE_CATEGORY, p = _.default.Messages.UNMUTE_CATEGORY;
                        break;
                    case C.ChannelTypes.GROUP_DM:
                        v = _.default.Messages.MUTE_CONVERSATION, p = _.default.Messages.UNMUTE_CONVERSATION;
                        break;
                    case C.ChannelTypes.DM:
                        v = _.default.Messages.MUTE_CHANNEL.format({
                            name: N
                        }), p = _.default.Messages.UNMUTE_CHANNEL.format({
                            name: N
                        });
                        break;
                    default:
                        v = _.default.Messages.MUTE_CHANNEL_GENERIC, p = _.default.Messages.UNMUTE_CHANNEL_GENERIC
                }
                return n ? (0, a.jsx)(s.MenuItem, {
                    id: "unmute-channel",
                    label: p,
                    subtext: r,
                    action: () => T(!1)
                }) : (0, a.jsx)(s.MenuItem, {
                    id: "mute-channel",
                    label: v,
                    action: () => T(!0),
                    children: A().map(n => {
                        let {
                            value: i,
                            label: r
                        } = n;
                        return (0, a.jsx)(s.MenuItem, {
                            id: "".concat(i),
                            label: r,
                            action: () => (function(n) {
                                e.type === C.ChannelTypes.GUILD_CATEGORY && (0, l.categoryCollapse)(e.id);
                                let a = S(n);
                                o.default.updateChannelOverrideSettings(e.guild_id, e.id, a, E.NotificationLabels.Muted, t)
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
                    return c
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
                    return A
                },
                updateFavoriteChannelParent: function() {
                    return S
                },
                toggleFavoriteServerMuted: function() {
                    return T
                }
            }), n("222007");
            var a = n("249654"),
                i = n("151426"),
                r = n("872173"),
                u = n("42203"),
                s = n("957255"),
                l = n("379881"),
                o = n("843455");

            function d() {
                let e = l.default.getFavoriteChannels(),
                    t = 1;
                for (let n in e) t = Math.max(t, e[n].order);
                return t + 1
            }

            function f(e) {
                for (let t in e) {
                    let n = e[t];
                    if (null == n) {
                        delete e[t];
                        continue
                    }
                    if (n.type === i.FavoriteChannelType.CATEGORY) continue;
                    let a = u.default.getChannel(t);
                    if (null == a || !a.isPrivate() && !s.default.can(o.Permissions.VIEW_CHANNEL, a)) {
                        delete e[t];
                        continue
                    }
                }
            }

            function E(e, t) {
                let n = l.default.isFavorite(e);
                !n && r.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e] = i.FavoriteChannel.create({
                        nickname: "",
                        type: i.FavoriteChannelType.REFERENCE_ORIGINAL,
                        position: d(),
                        parentId: null != t ? t : "0"
                    }), f(n.favoriteChannels)
                }, r.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function c(e) {
                let t = l.default.getFavorite(e);
                null != t && r.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    if (delete n.favoriteChannels[e], t.type === i.FavoriteChannelType.CATEGORY)
                        for (let t in n.favoriteChannels) n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = "0");
                    f(n.favoriteChannels)
                }, r.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }

            function C(e, t) {
                let n = l.default.isFavorite(e);
                n && r.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e].nickname = null != t ? t : ""
                }, r.UserSettingsDelay.INFREQUENT_USER_ACTION)
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

            function _(e) {
                c(e)
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

            function S(e, t) {
                r.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e].parentId = null != t ? t : "0"
                }, r.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function T() {
                r.PreloadedUserSettingsActionCreators.updateAsync("favorites", e => {
                    e.muted = !e.muted
                }, r.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }
        },
        986373: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useCanFavoriteChannel: function() {
                    return c
                },
                useFavorite: function() {
                    return C
                },
                useFavoritesCategories: function() {
                    return N
                },
                useFavoritesGuildSelected: function() {
                    return _
                },
                useFavoriteAdded: function() {
                    return A
                }
            }), n("424973"), n("222007");
            var a = n("884691"),
                i = n("298386"),
                r = n("446674");
            n("42203");
            var u = n("923959"),
                s = n("162771"),
                l = n("697218"),
                o = n("379881"),
                d = n("498139"),
                f = n("136569"),
                E = n("49111");

            function c(e) {
                let {
                    favoritesEnabled: t,
                    isFavoritesPerk: n
                } = (0, d.useFavoritesServerExperiment)("useCanFavoriteChannel"), a = (0, r.useStateFromStores)([o.default], () => o.default.isFavorite(e.id)), i = (0, r.useStateFromStores)([l.default], () => l.default.getCurrentUser()), u = e.isDM() || e.isThread(), s = !u || n && (null == i ? void 0 : i.isStaff()) === !0;
                return t && !__OVERLAY__ && !a && s
            }

            function C(e) {
                let t = (0, r.useStateFromStores)([o.default], () => o.default.getFavorite(e));
                return t
            }

            function N() {
                let e = (0, r.useStateFromStores)([u.default], () => u.default.getChannels(E.FAVORITES))[i.ChannelTypes.GUILD_CATEGORY];
                return e.map(e => ({
                    id: "null" === e.channel.id ? null : e.channel.id,
                    name: e.channel.name
                }))
            }

            function _() {
                let e = (0, r.useStateFromStores)([s.default], () => s.default.getGuildId());
                return e === E.FAVORITES
            }

            function A() {
                let {
                    isFavoritesPerk: e
                } = (0, d.useFavoritesServerExperiment)("useFavoriteAdded"), t = (0, f.useFavoritesTooltipStore)(), n = a.useCallback(() => {
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
        16108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                acceptMessageRequest: function() {
                    return l
                },
                clearMessageRequestState: function() {
                    return o
                },
                markAsMessageRequest: function() {
                    return d
                },
                rejectMessageRequest: function() {
                    return f
                },
                rejectMessageRequestBatch: function() {
                    return E
                },
                fetchUserCountryCode: function() {
                    return c
                }
            });
            var a = n("872717"),
                i = n("913144"),
                r = n("437822"),
                u = n("773163"),
                s = n("49111");
            async function l(e) {
                await a.default.put({
                    url: s.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
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
                    url: s.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: u.MessageRequestConsentStatusTypes.UNSPECIFIED
                    }
                })
            }

            function d(e) {
                return a.default.put({
                    url: s.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: u.MessageRequestConsentStatusTypes.PENDING
                    }
                })
            }

            function f(e) {
                return a.default.delete({
                    url: s.Endpoints.CHANNEL_RECIPIENT_CONSENT(e)
                })
            }

            function E(e) {
                return a.default.put({
                    url: s.Endpoints.CHANNEL_RECIPIENT_REJECT_BATCH(),
                    body: {
                        channel_ids: e
                    }
                })
            }

            function c() {
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
                    return s
                },
                clearChannelSafetyWarnings: function() {
                    return l
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

            function s(e, t, n) {
                i.default.dispatch({
                    type: "CHANNEL_SAFETY_WARNING_FEEDBACK",
                    channelId: e,
                    warningId: t,
                    feedbackType: n
                })
            }

            function l(e) {
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
            var a, i, r, u, s = n("446674"),
                l = n("913144"),
                o = n("42203");
            (a = r || (r = {}))[a.STRANGER_DANGER = 1] = "STRANGER_DANGER", (i = u || (u = {}))[i.UPVOTE = 0] = "UPVOTE", i[i.DOWNVOTE = 1] = "DOWNVOTE";
            let d = [],
                f = {};

            function E(e) {
                let {
                    safetyWarnings: t
                } = e;
                null != t && (f[e.id] = t), null == t && null != f[e.id] && delete f[e.id]
            }

            function c() {
                f = {}, Object.values(o.default.getMutablePrivateChannels()).forEach(e => {
                    E(e)
                })
            }
            class C extends s.default.Store {
                initialize() {
                    this.waitFor(o.default)
                }
                getChannelSafetyWarning(e, t) {
                    var n;
                    return null === (n = f[e]) || void 0 === n ? void 0 : n.find(e => e.id === t)
                }
                getChannelSafetyWarnings(e) {
                    var t;
                    return null !== (t = f[e]) && void 0 !== t ? t : d
                }
            }
            var N = new C(l.default, {
                CHANNEL_CREATE: function(e) {
                    E(e.channel)
                },
                CHANNEL_DELETE: function(e) {
                    null != f[e.channel.id] && delete f[e.channel.id]
                },
                CHANNEL_UPDATES: function(e) {
                    e.channels.forEach(e => {
                        E(e)
                    })
                },
                CONNECTION_OPEN: c,
                CONNECTION_OPEN_SUPPLEMENTAL: c,
                CHANNEL_SAFETY_WARNING_FEEDBACK: function(e) {
                    let {
                        channelId: t,
                        warningId: n,
                        feedbackType: a
                    } = e, i = f[t];
                    null != i && (f[t] = i.map(e => e.id === n ? {
                        ...e,
                        feedback_type: a
                    } : e))
                },
                CLEAR_CHANNEL_SAFETY_WARNINGS: function(e) {
                    let {
                        channelId: t
                    } = e, n = f[t];
                    null != n && (f[t] = n.map(e => ({
                        ...e,
                        dismiss_timestamp: void 0
                    })))
                },
                DISMISS_CHANNEL_SAFETY_WARNINGS: function(e) {
                    let {
                        channelId: t,
                        warningIds: n
                    } = e, a = f[t];
                    if (null == a) return;
                    let i = Date.now().toString();
                    f[t] = a.map(e => n.includes(e.id) ? {
                        ...e,
                        dismiss_timestamp: i
                    } : e)
                }
            })
        }
    }
]);