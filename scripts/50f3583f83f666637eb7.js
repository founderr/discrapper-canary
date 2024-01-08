(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["29080"], {
        535348: function(e, t, n) {
            "use strict";
            var a, r;
            n.r(t), n.d(t, {
                SelfStreamAndVideoAlertType: function() {
                    return a
                }
            }), (r = a || (a = {}))[r.STREAM = 0] = "STREAM", r[r.VIDEO = 1] = "VIDEO"
        },
        301603: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("446674"),
                r = n("629109"),
                u = n("271938"),
                i = n("42887"),
                s = n("49111"),
                l = n("353927");

            function o(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.MediaEngineContextTypes.DEFAULT,
                    n = (0, a.useStateFromStores)([u.default], () => u.default.getId()),
                    o = (0, a.useStateFromStores)([i.default], () => i.default.supports(l.Features.DISABLE_VIDEO) && i.default.isVideoEnabled()),
                    d = (0, a.useStateFromStores)([i.default], () => i.default.isLocalVideoDisabled(n, t), [n, t]),
                    f = null == e || e === n;
                return [f && (o || d), d, e => {
                    let a = e ? s.VideoToggleState.DISABLED : s.VideoToggleState.MANUAL_ENABLED;
                    r.default.setDisableLocalVideo(n, a, t)
                }]
            }
        },
        632616: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("452804"),
                u = n("135230"),
                i = n("535348"),
                s = n("782340");

            function l(e) {
                let {
                    type: t,
                    onConfirm: n,
                    ...l
                } = e, o = t === i.SelfStreamAndVideoAlertType.STREAM ? s.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER : s.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER, d = t === i.SelfStreamAndVideoAlertType.STREAM ? s.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY : s.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
                return (0, a.jsx)(u.default, {
                    confirmText: s.default.Messages.CONFIRM,
                    secondaryConfirmText: s.default.Messages.DONT_ASK_AGAIN,
                    title: o,
                    cancelText: s.default.Messages.CANCEL,
                    onConfirm: n,
                    onConfirmSecondary: () => {
                        r.default.updatedUnsyncedSettings({
                            disableHideSelfStreamAndVideoConfirmationAlert: !0
                        }), n()
                    },
                    body: d,
                    ...l
                })
            }
        },
        243288: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("446674"),
                u = n("77078"),
                i = n("255397"),
                s = n("191145"),
                l = n("782340");

            function o(e) {
                let t = (0, r.useStateFromStores)([s.default], () => s.default.getVoiceParticipantsHidden(e));
                return (0, a.jsx)(u.MenuCheckboxItem, {
                    id: "no-video-hide",
                    label: l.default.Messages.STREAM_SHOW_NON_VIDEO,
                    checked: !t,
                    action: () => i.default.toggleVoiceParticipantsHidden(e, !t)
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
            var r = n("446674"),
                u = n("77078"),
                i = n("168973"),
                s = n("301603"),
                l = n("632616"),
                o = n("535348"),
                d = n("353927"),
                f = n("782340");

            function c(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.MediaEngineContextTypes.DEFAULT,
                    [n, c, E] = (0, s.default)(e, t),
                    C = (0, r.useStateFromStores)([i.default], () => i.default.disableHideSelfStreamAndVideoConfirmationAlert);
                return n ? (0, a.jsx)(u.MenuCheckboxItem, {
                    id: "self-video-hide",
                    label: f.default.Messages.SHOW_SELF_VIDEO,
                    checked: !c,
                    action: () => {
                        if (C || c) return E(!c);
                        (0, u.openModal)(e => (0, a.jsx)(l.default, {
                            ...e,
                            type: o.SelfStreamAndVideoAlertType.VIDEO,
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
            var r = n("446674"),
                u = n("77078"),
                i = n("648911"),
                s = n("271938"),
                l = n("42887"),
                o = n("782340"),
                d = n("431024");

            function f(e) {
                let t = (0, u.useModalContext)(),
                    f = (0, r.useStateFromStores)([l.default], () => l.default.isVideoEnabled()),
                    c = (0, r.useStateFromStores)([s.default], () => s.default.getId() === e),
                    E = (0, i.default)();
                return (!f || E) && c ? (0, a.jsx)(u.MenuItem, {
                    id: "change-video-background",
                    label: (0, a.jsx)("div", {
                        className: d.item,
                        children: f ? o.default.Messages.CAMERA_CHANGE_VIDEO_BACKGROUND_MENU_ITEM : o.default.Messages.CAMERA_PREVIEW_MENU_ITEM
                    }),
                    action: function() {
                        (0, u.openModalLazy)(async () => {
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
                    return _
                },
                default: function() {
                    return T
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var r = n("866227"),
                u = n.n(r),
                i = n("446674"),
                s = n("77078"),
                l = n("820542"),
                o = n("519705"),
                d = n("319165"),
                f = n("282109"),
                c = n("34676"),
                E = n("679653"),
                C = n("49111"),
                S = n("468200"),
                N = n("782340");
            let _ = () => [{
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
                A = e => {
                    let t = e > 0 ? u().add(e, "second").toISOString() : null;
                    return {
                        muted: !0,
                        mute_config: {
                            selected_time_window: e,
                            end_time: t
                        }
                    }
                };

            function T(e, t) {
                let [n, r] = (0, i.useStateFromStoresArray)([f.default], () => [f.default.isChannelMuted(e.guild_id, e.id), f.default.getChannelMuteConfig(e.guild_id, e.id)]), u = (0, d.useMutedUntilText)(r), S = (0, E.default)(e, !0);

                function T(t) {
                    t && e.type === C.ChannelTypes.GUILD_CATEGORY && (0, l.categoryCollapse)(e.id), o.default.updateChannelOverrideSettings(e.guild_id, e.id, {
                        muted: t
                    }, c.NotificationLabel.muted(t))
                }
                let v = N.default.Messages.MUTE_CHANNEL_GENERIC,
                    I = N.default.Messages.UNMUTE_CHANNEL_GENERIC;
                switch (e.type) {
                    case C.ChannelTypes.GUILD_CATEGORY:
                        v = N.default.Messages.MUTE_CATEGORY, I = N.default.Messages.UNMUTE_CATEGORY;
                        break;
                    case C.ChannelTypes.GROUP_DM:
                        v = N.default.Messages.MUTE_CONVERSATION, I = N.default.Messages.UNMUTE_CONVERSATION;
                        break;
                    case C.ChannelTypes.DM:
                        v = N.default.Messages.MUTE_CHANNEL.format({
                            name: S
                        }), I = N.default.Messages.UNMUTE_CHANNEL.format({
                            name: S
                        });
                        break;
                    default:
                        v = N.default.Messages.MUTE_CHANNEL_GENERIC, I = N.default.Messages.UNMUTE_CHANNEL_GENERIC
                }
                return n ? (0, a.jsx)(s.MenuItem, {
                    id: "unmute-channel",
                    label: I,
                    subtext: u,
                    action: () => T(!1)
                }) : (0, a.jsx)(s.MenuItem, {
                    id: "mute-channel",
                    label: v,
                    action: () => T(!0),
                    children: _().map(n => {
                        let {
                            value: r,
                            label: u
                        } = n;
                        return (0, a.jsx)(s.MenuItem, {
                            id: "".concat(r),
                            label: u,
                            action: () => (function(n) {
                                e.type === C.ChannelTypes.GUILD_CATEGORY && (0, l.categoryCollapse)(e.id);
                                let a = A(n);
                                o.default.updateChannelOverrideSettings(e.guild_id, e.id, a, c.NotificationLabels.Muted, t)
                            })(r)
                        }, r)
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
                    return S
                },
                removeFavoriteCategory: function() {
                    return N
                },
                updateFavoriteChannels: function() {
                    return _
                },
                updateFavoriteChannelParent: function() {
                    return A
                },
                toggleFavoriteServerMuted: function() {
                    return T
                }
            }), n("222007");
            var a = n("249654"),
                r = n("151426"),
                u = n("872173"),
                i = n("42203"),
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
                    if (n.type === r.FavoriteChannelType.CATEGORY) continue;
                    let a = i.default.getChannel(t);
                    if (null == a || !a.isPrivate() && !s.default.can(o.Permissions.VIEW_CHANNEL, a)) {
                        delete e[t];
                        continue
                    }
                }
            }

            function c(e, t) {
                let n = l.default.isFavorite(e);
                !n && u.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e] = r.FavoriteChannel.create({
                        nickname: "",
                        type: r.FavoriteChannelType.REFERENCE_ORIGINAL,
                        position: d(),
                        parentId: null != t ? t : "0"
                    }), f(n.favoriteChannels)
                }, u.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function E(e) {
                let t = l.default.getFavorite(e);
                null != t && u.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    if (delete n.favoriteChannels[e], t.type === r.FavoriteChannelType.CATEGORY)
                        for (let t in n.favoriteChannels) n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = "0");
                    f(n.favoriteChannels)
                }, u.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function C(e, t) {
                let n = l.default.isFavorite(e);
                n && u.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e].nickname = null != t ? t : ""
                }, u.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function S(e) {
                let t = a.default.fromTimestamp(Date.now());
                u.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[t] = r.FavoriteChannel.create({
                        nickname: e,
                        type: r.FavoriteChannelType.CATEGORY,
                        position: d(),
                        parentId: "0"
                    })
                }, u.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function N(e) {
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

            function A(e, t) {
                u.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e].parentId = null != t ? t : "0"
                }, u.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function T() {
                u.PreloadedUserSettingsActionCreators.updateAsync("favorites", e => {
                    e.muted = !e.muted
                }, u.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }
        },
        986373: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useCanFavoriteChannel: function() {
                    return E
                },
                useFavorite: function() {
                    return C
                },
                useFavoritesCategories: function() {
                    return S
                },
                useFavoritesGuildSelected: function() {
                    return N
                },
                useFavoriteAdded: function() {
                    return _
                }
            }), n("424973"), n("222007");
            var a = n("884691"),
                r = n("298386"),
                u = n("446674");
            n("42203");
            var i = n("923959"),
                s = n("162771"),
                l = n("697218"),
                o = n("379881"),
                d = n("498139"),
                f = n("136569"),
                c = n("49111");

            function E(e) {
                let {
                    favoritesEnabled: t,
                    isFavoritesPerk: n
                } = (0, d.useFavoritesServerExperiment)("useCanFavoriteChannel"), a = (0, u.useStateFromStores)([o.default], () => o.default.isFavorite(e.id)), r = (0, u.useStateFromStores)([l.default], () => l.default.getCurrentUser()), i = e.isDM() || e.isThread(), s = !i || n && (null == r ? void 0 : r.isStaff()) === !0;
                return t && !__OVERLAY__ && !a && s
            }

            function C(e) {
                let t = (0, u.useStateFromStores)([o.default], () => o.default.getFavorite(e));
                return t
            }

            function S() {
                let e = (0, u.useStateFromStores)([i.default], () => i.default.getChannels(c.FAVORITES))[r.ChannelTypes.GUILD_CATEGORY];
                return e.map(e => ({
                    id: "null" === e.channel.id ? null : e.channel.id,
                    name: e.channel.name
                }))
            }

            function N() {
                let e = (0, u.useStateFromStores)([s.default], () => s.default.getGuildId());
                return e === c.FAVORITES
            }

            function _() {
                let {
                    isFavoritesPerk: e
                } = (0, d.useFavoritesServerExperiment)("useFavoriteAdded"), t = (0, f.useFavoritesTooltipStore)(), n = a.useCallback(() => {
                    e && t.notifyFavoriteAdded()
                }, [t, e]), r = a.useCallback(() => {
                    e && t.clearFavoriteAdded()
                }, [t, e]);
                return {
                    favoriteAdded: t.favoriteAdded,
                    notifyFavoriteAdded: n,
                    clearFavoriteAdded: r
                }
            }
        },
        136569: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useFavoritesTooltipStore: function() {
                    return r
                }
            });
            var a = n("308503");
            let r = (0, a.default)(e => ({
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
                    return c
                },
                fetchUserCountryCode: function() {
                    return E
                }
            });
            var a = n("872717"),
                r = n("913144"),
                u = n("437822"),
                i = n("773163"),
                s = n("49111");
            async function l(e) {
                await a.default.put({
                    url: s.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: i.MessageRequestConsentStatusTypes.ACCEPTED
                    }
                }), r.default.dispatch({
                    type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
                    channelId: e
                })
            }

            function o(e) {
                return a.default.put({
                    url: s.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: i.MessageRequestConsentStatusTypes.UNSPECIFIED
                    }
                })
            }

            function d(e) {
                return a.default.put({
                    url: s.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: i.MessageRequestConsentStatusTypes.PENDING
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
                u.default.getLocationMetadata()
            }
        },
        773163: function(e, t, n) {
            "use strict";
            var a, r;
            n.r(t), n.d(t, {
                MessageRequestConsentStatusTypes: function() {
                    return a
                }
            }), (r = a || (a = {}))[r.UNSPECIFIED = 0] = "UNSPECIFIED", r[r.PENDING = 1] = "PENDING", r[r.ACCEPTED = 2] = "ACCEPTED", r[r.REJECTED = 3] = "REJECTED"
        },
        277734: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                dismissChannelSafetyWarnings: function() {
                    return i
                },
                setChannelSafetyWarningFeedback: function() {
                    return s
                },
                clearChannelSafetyWarnings: function() {
                    return l
                }
            });
            var a = n("872717"),
                r = n("913144"),
                u = n("49111");

            function i(e, t) {
                return r.default.dispatch({
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
                r.default.dispatch({
                    type: "CHANNEL_SAFETY_WARNING_FEEDBACK",
                    channelId: e,
                    warningId: t,
                    feedbackType: n
                })
            }

            function l(e) {
                r.default.dispatch({
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
                    return i
                },
                default: function() {
                    return S
                }
            });
            var a, r, u, i, s = n("446674"),
                l = n("913144"),
                o = n("42203");
            (a = u || (u = {}))[a.STRANGER_DANGER = 1] = "STRANGER_DANGER", (r = i || (i = {}))[r.UPVOTE = 0] = "UPVOTE", r[r.DOWNVOTE = 1] = "DOWNVOTE";
            let d = [],
                f = {};

            function c(e) {
                let {
                    safetyWarnings: t
                } = e;
                null != t && (f[e.id] = t), null == t && null != f[e.id] && delete f[e.id]
            }

            function E() {
                f = {}, Object.values(o.default.getMutablePrivateChannels()).forEach(e => {
                    c(e)
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
            var S = new C(l.default, {
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
                    } = e, r = f[t];
                    null != r && (f[t] = r.map(e => e.id === n ? {
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
                    let r = Date.now().toString();
                    f[t] = a.map(e => n.includes(e.id) ? {
                        ...e,
                        dismiss_timestamp: r
                    } : e)
                }
            })
        },
        648911: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("446674"),
                r = n("42887"),
                u = n("512244");

            function i() {
                return (0, a.useStateFromStores)([r.default], () => (0, u.default)(r.default))
            }
        }
    }
]);