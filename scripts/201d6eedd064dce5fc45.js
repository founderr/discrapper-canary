(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["5231"], {
        633043: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("37983");
            n("884691");
            var u = n("77078"),
                i = n("850572"),
                l = () => (0, a.jsx)("div", {
                    className: i.loadingWrapper,
                    children: (0, a.jsx)(u.Dots, {
                        dotRadius: 4,
                        themed: !0
                    })
                })
        },
        535348: function(e, t, n) {
            "use strict";
            var a, u;
            n.r(t), n.d(t, {
                SelfStreamAndVideoAlertType: function() {
                    return a
                }
            }), (u = a || (a = {}))[u.STREAM = 0] = "STREAM", u[u.VIDEO = 1] = "VIDEO"
        },
        301603: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("446674"),
                u = n("629109"),
                i = n("271938"),
                l = n("42887"),
                s = n("49111"),
                r = n("353927");

            function d(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.MediaEngineContextTypes.DEFAULT,
                    n = (0, a.useStateFromStores)([i.default], () => i.default.getId()),
                    d = (0, a.useStateFromStores)([l.default], () => l.default.supports(r.Features.DISABLE_VIDEO) && l.default.isVideoEnabled()),
                    o = (0, a.useStateFromStores)([l.default], () => l.default.isLocalVideoDisabled(n, t), [n, t]),
                    f = null == e || e === n;
                return [f && (d || o), o, e => {
                    let a = e ? s.VideoToggleState.DISABLED : s.VideoToggleState.MANUAL_ENABLED;
                    u.default.setDisableLocalVideo(n, a, t)
                }]
            }
        },
        632616: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var u = n("452804"),
                i = n("135230"),
                l = n("535348"),
                s = n("782340");

            function r(e) {
                let {
                    type: t,
                    onConfirm: n,
                    ...r
                } = e, d = t === l.SelfStreamAndVideoAlertType.STREAM ? s.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER : s.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER, o = t === l.SelfStreamAndVideoAlertType.STREAM ? s.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY : s.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
                return (0, a.jsx)(i.default, {
                    confirmText: s.default.Messages.CONFIRM,
                    secondaryConfirmText: s.default.Messages.DONT_ASK_AGAIN,
                    title: d,
                    cancelText: s.default.Messages.CANCEL,
                    onConfirm: n,
                    onConfirmSecondary: () => {
                        u.default.updatedUnsyncedSettings({
                            disableHideSelfStreamAndVideoConfirmationAlert: !0
                        }), n()
                    },
                    body: o,
                    ...r
                })
            }
        },
        243288: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var u = n("446674"),
                i = n("77078"),
                l = n("255397"),
                s = n("191145"),
                r = n("782340");

            function d(e) {
                let t = (0, u.useStateFromStores)([s.default], () => s.default.getVoiceParticipantsHidden(e));
                return (0, a.jsx)(i.MenuCheckboxItem, {
                    id: "no-video-hide",
                    label: r.default.Messages.STREAM_SHOW_NON_VIDEO,
                    checked: !t,
                    action: () => l.default.toggleVoiceParticipantsHidden(e, !t)
                })
            }
        },
        321135: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var u = n("446674"),
                i = n("77078"),
                l = n("168973"),
                s = n("301603"),
                r = n("632616"),
                d = n("535348"),
                o = n("353927"),
                f = n("782340");

            function c(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.MediaEngineContextTypes.DEFAULT,
                    [n, c, E] = (0, s.default)(e, t),
                    C = (0, u.useStateFromStores)([l.default], () => l.default.disableHideSelfStreamAndVideoConfirmationAlert);
                return n ? (0, a.jsx)(i.MenuCheckboxItem, {
                    id: "self-video-hide",
                    label: f.default.Messages.SHOW_SELF_VIDEO,
                    checked: !c,
                    action: () => {
                        if (C || c) return E(!c);
                        (0, i.openModal)(e => (0, a.jsx)(r.default, {
                            ...e,
                            type: d.SelfStreamAndVideoAlertType.VIDEO,
                            onConfirm: () => E(!c)
                        }))
                    }
                }) : null
            }
        },
        873254: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983");
            n("884691");
            var u = n("446674"),
                i = n("77078"),
                l = n("648911"),
                s = n("271938"),
                r = n("42887"),
                d = n("782340"),
                o = n("431024");

            function f(e) {
                let t = (0, i.useModalContext)(),
                    f = (0, u.useStateFromStores)([r.default], () => r.default.isVideoEnabled()),
                    c = (0, u.useStateFromStores)([s.default], () => s.default.getId() === e),
                    E = (0, l.default)();
                return (!f || E) && c ? (0, a.jsx)(i.MenuItem, {
                    id: "change-video-background",
                    label: (0, a.jsx)("div", {
                        className: o.item,
                        children: f ? d.default.Messages.CAMERA_CHANGE_VIDEO_BACKGROUND_MENU_ITEM : d.default.Messages.CAMERA_PREVIEW_MENU_ITEM
                    }),
                    action: function() {
                        (0, i.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("381736").then(n.bind(n, "381736"));
                            return t => (0, a.jsx)(e, {
                                ...t,
                                videoEnabled: f
                            })
                        }, {
                            modalKey: "camera-preview",
                            contextKey: t
                        })
                    }
                }) : null
            }
        },
        531674: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getMuteTimes: function() {
                    return N
                },
                default: function() {
                    return T
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var u = n("866227"),
                i = n.n(u),
                l = n("446674"),
                s = n("77078"),
                r = n("820542"),
                d = n("519705"),
                o = n("319165"),
                f = n("282109"),
                c = n("34676"),
                E = n("679653"),
                C = n("49111"),
                A = n("468200"),
                S = n("782340");
            let N = () => [{
                    value: A.MuteUntilSeconds.MINUTES_15,
                    label: S.default.Messages.MUTE_DURATION_15_MINUTES
                }, {
                    value: A.MuteUntilSeconds.HOURS_1,
                    label: S.default.Messages.MUTE_DURATION_1_HOUR
                }, {
                    value: A.MuteUntilSeconds.HOURS_3,
                    label: S.default.Messages.MUTE_DURATION_3_HOURS
                }, {
                    value: A.MuteUntilSeconds.HOURS_8,
                    label: S.default.Messages.MUTE_DURATION_8_HOURS
                }, {
                    value: A.MuteUntilSeconds.HOURS_24,
                    label: S.default.Messages.MUTE_DURATION_24_HOURS
                }, {
                    value: A.MuteUntilSeconds.ALWAYS,
                    label: S.default.Messages.MUTE_DURATION_ALWAYS
                }],
                _ = e => {
                    let t = e > 0 ? i().add(e, "second").toISOString() : null;
                    return {
                        muted: !0,
                        mute_config: {
                            selected_time_window: e,
                            end_time: t
                        }
                    }
                };

            function T(e, t) {
                let [n, u] = (0, l.useStateFromStoresArray)([f.default], () => [f.default.isChannelMuted(e.guild_id, e.id), f.default.getChannelMuteConfig(e.guild_id, e.id)]), i = (0, o.useMutedUntilText)(u), A = (0, E.default)(e, !0);

                function T(t) {
                    t && e.type === C.ChannelTypes.GUILD_CATEGORY && (0, r.categoryCollapse)(e.id), d.default.updateChannelOverrideSettings(e.guild_id, e.id, {
                        muted: t
                    }, c.NotificationLabel.muted(t))
                }
                let p = S.default.Messages.MUTE_CHANNEL_GENERIC,
                    v = S.default.Messages.UNMUTE_CHANNEL_GENERIC;
                switch (e.type) {
                    case C.ChannelTypes.GUILD_CATEGORY:
                        p = S.default.Messages.MUTE_CATEGORY, v = S.default.Messages.UNMUTE_CATEGORY;
                        break;
                    case C.ChannelTypes.GROUP_DM:
                        p = S.default.Messages.MUTE_CONVERSATION, v = S.default.Messages.UNMUTE_CONVERSATION;
                        break;
                    case C.ChannelTypes.DM:
                        p = S.default.Messages.MUTE_CHANNEL.format({
                            name: A
                        }), v = S.default.Messages.UNMUTE_CHANNEL.format({
                            name: A
                        });
                        break;
                    default:
                        p = S.default.Messages.MUTE_CHANNEL_GENERIC, v = S.default.Messages.UNMUTE_CHANNEL_GENERIC
                }
                return n ? (0, a.jsx)(s.MenuItem, {
                    id: "unmute-channel",
                    label: v,
                    subtext: i,
                    action: () => T(!1)
                }) : (0, a.jsx)(s.MenuItem, {
                    id: "mute-channel",
                    label: p,
                    action: () => T(!0),
                    children: N().map(n => {
                        let {
                            value: u,
                            label: i
                        } = n;
                        return (0, a.jsx)(s.MenuItem, {
                            id: "".concat(u),
                            label: i,
                            action: () => (function(n) {
                                e.type === C.ChannelTypes.GUILD_CATEGORY && (0, r.categoryCollapse)(e.id);
                                let a = _(n);
                                d.default.updateChannelOverrideSettings(e.guild_id, e.id, a, c.NotificationLabels.Muted, t)
                            })(u)
                        }, u)
                    })
                })
            }
        },
        200008: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                addFavoriteChannel: function() {
                    return c
                },
                removeFavoriteChannel: function() {
                    return E
                },
                setFavoriteChannelNickname: function() {
                    return C
                },
                addFavoriteCategory: function() {
                    return A
                },
                removeFavoriteCategory: function() {
                    return S
                },
                updateFavoriteChannels: function() {
                    return N
                },
                updateFavoriteChannelParent: function() {
                    return _
                },
                toggleFavoriteServerMuted: function() {
                    return T
                }
            }), n("222007");
            var a = n("249654"),
                u = n("151426"),
                i = n("872173"),
                l = n("42203"),
                s = n("957255"),
                r = n("379881"),
                d = n("843455");

            function o() {
                let e = r.default.getFavoriteChannels(),
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
                    if (n.type === u.FavoriteChannelType.CATEGORY) continue;
                    let a = l.default.getChannel(t);
                    if (null == a || !a.isPrivate() && !s.default.can(d.Permissions.VIEW_CHANNEL, a)) {
                        delete e[t];
                        continue
                    }
                }
            }

            function c(e, t) {
                let n = r.default.isFavorite(e);
                !n && i.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e] = u.FavoriteChannel.create({
                        nickname: "",
                        type: u.FavoriteChannelType.REFERENCE_ORIGINAL,
                        position: o(),
                        parentId: null != t ? t : "0"
                    }), f(n.favoriteChannels)
                }, i.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function E(e) {
                let t = r.default.getFavorite(e);
                null != t && i.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    if (delete n.favoriteChannels[e], t.type === u.FavoriteChannelType.CATEGORY)
                        for (let t in n.favoriteChannels) n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = "0");
                    f(n.favoriteChannels)
                }, i.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function C(e, t) {
                let n = r.default.isFavorite(e);
                n && i.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e].nickname = null != t ? t : ""
                }, i.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function A(e) {
                let t = a.default.fromTimestamp(Date.now());
                i.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[t] = u.FavoriteChannel.create({
                        nickname: e,
                        type: u.FavoriteChannelType.CATEGORY,
                        position: o(),
                        parentId: "0"
                    })
                }, i.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function S(e) {
                E(e)
            }

            function N(e) {
                i.PreloadedUserSettingsActionCreators.updateAsync("favorites", t => {
                    for (let a of e)
                        if (null != a.position && (t.favoriteChannels[a.id].position = a.position), void 0 !== a.parent_id) {
                            var n;
                            t.favoriteChannels[a.id].parentId = null !== (n = a.parent_id) && void 0 !== n ? n : "0"
                        }
                }, i.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function _(e, t) {
                i.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e].parentId = null != t ? t : "0"
                }, i.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function T() {
                i.PreloadedUserSettingsActionCreators.updateAsync("favorites", e => {
                    e.muted = !e.muted
                }, i.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }
        },
        986373: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useFavorite: function() {
                    return c
                },
                useFavoritesCategories: function() {
                    return E
                },
                useFavoritesGuildSelected: function() {
                    return C
                },
                useFavoriteAdded: function() {
                    return A
                }
            }), n("424973"), n("222007");
            var a = n("884691"),
                u = n("298386"),
                i = n("446674");
            n("42203");
            var l = n("923959"),
                s = n("162771"),
                r = n("379881"),
                d = n("498139"),
                o = n("136569"),
                f = n("49111");

            function c(e) {
                let t = (0, i.useStateFromStores)([r.default], () => r.default.getFavorite(e));
                return t
            }

            function E() {
                let e = (0, i.useStateFromStores)([l.default], () => l.default.getChannels(f.FAVORITES))[u.ChannelTypes.GUILD_CATEGORY];
                return e.map(e => ({
                    id: "null" === e.channel.id ? null : e.channel.id,
                    name: e.channel.name
                }))
            }

            function C() {
                let e = (0, i.useStateFromStores)([s.default], () => s.default.getGuildId());
                return e === f.FAVORITES
            }

            function A() {
                let {
                    isFavoritesPerk: e
                } = (0, d.useFavoritesServerExperiment)("useFavoriteAdded"), t = (0, o.useFavoritesTooltipStore)(), n = a.useCallback(() => {
                    e && t.notifyFavoriteAdded()
                }, [t, e]), u = a.useCallback(() => {
                    e && t.clearFavoriteAdded()
                }, [t, e]);
                return {
                    favoriteAdded: t.favoriteAdded,
                    notifyFavoriteAdded: n,
                    clearFavoriteAdded: u
                }
            }
        },
        136569: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useFavoritesTooltipStore: function() {
                    return u
                }
            });
            var a = n("308503");
            let u = (0, a.default)(e => ({
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
                    return A
                }
            }), n("424973");
            var a = n("37983"),
                u = n("884691"),
                i = n("446674"),
                l = n("77078"),
                s = n("713841"),
                r = n("79112"),
                d = n("988721"),
                o = n("592407"),
                f = n("305961"),
                c = n("957255"),
                E = n("49111"),
                C = n("782340");

            function A(e) {
                let {
                    user: t,
                    guildId: n,
                    channel: A,
                    context: S
                } = e, N = f.default.getGuild(n), _ = (0, i.useStateFromStores)([c.default], () => null != N ? c.default.can(E.Permissions.MANAGE_GUILD, N) : null), T = (0, d.useContextIndexState)(A, !0, !0), p = (0, d.useUserIndexState)(!0, !0), {
                    isUserApp: v,
                    isGuildApp: I
                } = u.useMemo(() => {
                    var e, n, a, u;
                    if ((null == t ? void 0 : t.id) == null) return {
                        isGuildApp: !1,
                        isUserApp: !1
                    };
                    let i = Object.values(null !== (a = null === (e = T.result) || void 0 === e ? void 0 : e.sections) && void 0 !== a ? a : {}),
                        l = Object.values(null !== (u = null === (n = p.result) || void 0 === n ? void 0 : n.sections) && void 0 !== u ? u : {});
                    return {
                        isGuildApp: i.some(e => {
                            var n;
                            return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === (null == t ? void 0 : t.id)
                        }),
                        isUserApp: l.some(e => {
                            var n;
                            return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === (null == t ? void 0 : t.id)
                        })
                    }
                }, [T, p, null == t ? void 0 : t.id]), M = u.useCallback(() => {
                    (null == N ? void 0 : N.id) != null && (o.default.open(N.id, E.GuildSettingsSections.INTEGRATIONS), s.default.setSection(E.IntegrationSettingsSections.APPLICATION, null == t ? void 0 : t.id))
                }, [null == t ? void 0 : t.id, null == N ? void 0 : N.id]), g = u.useCallback(() => {
                    r.default.open(E.UserSettingsSections.AUTHORIZED_APPS)
                }, []), m = S === E.AppContext.POPOUT;
                if (!(null == t ? void 0 : t.bot) || !_ || m || !I && !v) return null;
                let R = [];
                return I && R.push((0, a.jsx)(l.MenuItem, {
                    id: "manage-integration",
                    label: C.default.Messages.MANAGE_INTEGRATION,
                    action: M
                }, "manage-integration")), v && R.push((0, a.jsx)(l.MenuItem, {
                    id: "manage-authorized-app",
                    label: C.default.Messages.MANAGE_AUTHORIZED_APP,
                    action: g
                }, "manage-authorized-app")), R
            }
        },
        16108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                acceptMessageRequest: function() {
                    return r
                },
                clearMessageRequestState: function() {
                    return d
                },
                markAsMessageRequest: function() {
                    return o
                },
                rejectMessageRequest: function() {
                    return f
                },
                rejectMessageRequestBatch: function() {
                    return c
                },
                fetchUserCountryCode: function() {
                    return E
                }
            });
            var a = n("872717"),
                u = n("913144"),
                i = n("437822"),
                l = n("773163"),
                s = n("49111");
            async function r(e) {
                await a.default.put({
                    url: s.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: l.MessageRequestConsentStatusTypes.ACCEPTED
                    }
                }), u.default.dispatch({
                    type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
                    channelId: e
                })
            }

            function d(e) {
                return a.default.put({
                    url: s.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: l.MessageRequestConsentStatusTypes.UNSPECIFIED
                    }
                })
            }

            function o(e) {
                return a.default.put({
                    url: s.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: l.MessageRequestConsentStatusTypes.PENDING
                    }
                })
            }

            function f(e) {
                return a.default.delete({
                    url: s.Endpoints.CHANNEL_RECIPIENT_CONSENT(e)
                })
            }

            function c(e) {
                return a.default.put({
                    url: s.Endpoints.CHANNEL_RECIPIENT_REJECT_BATCH(),
                    body: {
                        channel_ids: e
                    }
                })
            }

            function E() {
                i.default.getLocationMetadata()
            }
        },
        773163: function(e, t, n) {
            "use strict";
            var a, u;
            n.r(t), n.d(t, {
                MessageRequestConsentStatusTypes: function() {
                    return a
                }
            }), (u = a || (a = {}))[u.UNSPECIFIED = 0] = "UNSPECIFIED", u[u.PENDING = 1] = "PENDING", u[u.ACCEPTED = 2] = "ACCEPTED", u[u.REJECTED = 3] = "REJECTED"
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
                u = n("913144"),
                i = n("49111");

            function l(e, t) {
                return u.default.dispatch({
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

            function s(e, t, n) {
                u.default.dispatch({
                    type: "CHANNEL_SAFETY_WARNING_FEEDBACK",
                    channelId: e,
                    warningId: t,
                    feedbackType: n
                })
            }

            function r(e) {
                u.default.dispatch({
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
                    return l
                },
                default: function() {
                    return A
                }
            });
            var a, u, i, l, s = n("446674"),
                r = n("913144"),
                d = n("42203");
            (a = i || (i = {}))[a.STRANGER_DANGER = 1] = "STRANGER_DANGER", (u = l || (l = {}))[u.UPVOTE = 0] = "UPVOTE", u[u.DOWNVOTE = 1] = "DOWNVOTE";
            let o = [],
                f = {};

            function c(e) {
                let {
                    safetyWarnings: t
                } = e;
                null != t && (f[e.id] = t), null == t && null != f[e.id] && delete f[e.id]
            }

            function E() {
                f = {}, Object.values(d.default.getMutablePrivateChannels()).forEach(e => {
                    c(e)
                })
            }
            class C extends s.default.Store {
                initialize() {
                    this.waitFor(d.default)
                }
                getChannelSafetyWarning(e, t) {
                    var n;
                    return null === (n = f[e]) || void 0 === n ? void 0 : n.find(e => e.id === t)
                }
                getChannelSafetyWarnings(e) {
                    var t;
                    return null !== (t = f[e]) && void 0 !== t ? t : o
                }
            }
            var A = new C(r.default, {
                CHANNEL_CREATE: function(e) {
                    c(e.channel)
                },
                CHANNEL_DELETE: function(e) {
                    null != f[e.channel.id] && delete f[e.channel.id]
                },
                CHANNEL_UPDATES: function(e) {
                    e.channels.forEach(e => {
                        c(e)
                    })
                },
                CONNECTION_OPEN: E,
                CONNECTION_OPEN_SUPPLEMENTAL: E,
                CHANNEL_SAFETY_WARNING_FEEDBACK: function(e) {
                    let {
                        channelId: t,
                        warningId: n,
                        feedbackType: a
                    } = e, u = f[t];
                    null != u && (f[t] = u.map(e => e.id === n ? {
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
                    let u = Date.now().toString();
                    f[t] = a.map(e => n.includes(e.id) ? {
                        ...e,
                        dismiss_timestamp: u
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
                u = n("884691"),
                i = n("627445"),
                l = n.n(i),
                s = n("446674"),
                r = n("77078"),
                d = n("240249"),
                o = n("916565"),
                f = n("355263"),
                c = n("633043"),
                E = n("823026"),
                C = n("305961"),
                A = n("697218"),
                S = n("317041"),
                N = n("782340"),
                _ = n("205735"),
                T = e => {
                    let t, {
                            commandType: n,
                            commandTargetId: i,
                            channel: T,
                            guildId: p,
                            onHeightUpdate: v,
                            context: I
                        } = e,
                        M = (0, s.useStateFromStores)([C.default], () => C.default.getGuild(null != p ? p : T.guild_id)),
                        g = (0, s.useStateFromStores)([A.default], () => A.default.getUser(i)),
                        m = (0, E.default)({
                            user: g,
                            guildId: null == M ? void 0 : M.id,
                            channel: T,
                            context: I
                        }),
                        {
                            commands: R,
                            sectionDescriptors: U,
                            loading: h
                        } = d.useDiscovery(T, {
                            commandType: n
                        }, {
                            limit: S.CONTEXT_MENU_COMMANDS_QUERY_LIMIT
                        }),
                        {
                            sections: O
                        } = u.useMemo(() => {
                            let e = {};
                            return U.forEach(t => {
                                e[t.id] = t
                            }), {
                                sections: e
                            }
                        }, [U]),
                        F = u.useRef(h.current);
                    u.useEffect(() => {
                        h.current !== F.current && (F.current = h.current, null == v || v())
                    }, [h, v]);
                    let y = u.useCallback(e => {
                        l(null != T, "menu item should not show if channel is null");
                        let t = O[e.applicationId],
                            n = null != t ? (0, f.getIconComponent)(t) : void 0;
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
                                (0, o.default)({
                                    command: e,
                                    optionValues: {},
                                    context: {
                                        channel: T,
                                        guild: M
                                    },
                                    commandTargetId: i
                                })
                            }
                        }, e.id)
                    }, [T, M, i, O]);
                    return h.current ? t = (0, a.jsx)(r.MenuItem, {
                        id: "menu-commands-placeholder",
                        render: () => (0, a.jsx)(c.default, {}),
                        disabled: !0
                    }, "menu-commands-placeholder") : (t = 0 === R.length ? (0, a.jsx)(r.MenuItem, {
                        id: "menu-commands-empty",
                        label: N.default.Messages.APPLICATION_COMMAND_NO_COMMANDS,
                        disabled: !0
                    }, "menu-commands-empty") : R.map(y), null != m && (t = (0, a.jsxs)(a.Fragment, {
                        children: [t, (0, a.jsx)(r.MenuSeparator, {}, "separator"), m]
                    }))), (0, a.jsx)(r.MenuItem, {
                        id: "apps",
                        label: N.default.Messages.APPS,
                        listClassName: _.list,
                        children: t
                    })
                }
        },
        648911: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("446674"),
                u = n("42887"),
                i = n("512244");

            function l() {
                return (0, a.useStateFromStores)([u.default], () => (0, i.default)(u.default))
            }
        }
    }
]);