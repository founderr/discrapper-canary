(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["13862"], {
        535348: function(e, t, n) {
            "use strict";
            var a, i;
            n.r(t), n.d(t, {
                SelfStreamAndVideoAlertType: function() {
                    return a
                }
            }), (i = a || (a = {}))[i.STREAM = 0] = "STREAM", i[i.VIDEO = 1] = "VIDEO"
        },
        301603: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("446674"),
                i = n("629109"),
                u = n("271938"),
                s = n("42887"),
                r = n("49111"),
                l = n("353927");

            function o(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.MediaEngineContextTypes.DEFAULT,
                    n = (0, a.useStateFromStores)([u.default], () => u.default.getId()),
                    o = (0, a.useStateFromStores)([s.default], () => s.default.supports(l.Features.DISABLE_VIDEO) && s.default.isVideoEnabled()),
                    d = (0, a.useStateFromStores)([s.default], () => s.default.isLocalVideoDisabled(n, t), [n, t]),
                    f = null == e || e === n;
                return [f && (o || d), d, e => {
                    let a = e ? r.VideoToggleState.DISABLED : r.VideoToggleState.MANUAL_ENABLED;
                    i.default.setDisableLocalVideo(n, a, t)
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
            var i = n("452804"),
                u = n("135230"),
                s = n("535348"),
                r = n("782340");

            function l(e) {
                let {
                    type: t,
                    onConfirm: n,
                    ...l
                } = e, o = t === s.SelfStreamAndVideoAlertType.STREAM ? r.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER : r.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER, d = t === s.SelfStreamAndVideoAlertType.STREAM ? r.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY : r.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
                return (0, a.jsx)(u.default, {
                    confirmText: r.default.Messages.CONFIRM,
                    secondaryConfirmText: r.default.Messages.DONT_ASK_AGAIN,
                    title: o,
                    cancelText: r.default.Messages.CANCEL,
                    onConfirm: n,
                    onConfirmSecondary: () => {
                        i.default.updatedUnsyncedSettings({
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
            var i = n("446674"),
                u = n("77078"),
                s = n("255397"),
                r = n("191145"),
                l = n("782340");

            function o(e) {
                let t = (0, i.useStateFromStores)([r.default], () => r.default.getVoiceParticipantsHidden(e));
                return (0, a.jsx)(u.MenuCheckboxItem, {
                    id: "no-video-hide",
                    label: l.default.Messages.STREAM_SHOW_NON_VIDEO,
                    checked: !t,
                    action: () => s.default.toggleVoiceParticipantsHidden(e, !t)
                })
            }
        },
        321135: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                u = n("77078"),
                s = n("168973"),
                r = n("301603"),
                l = n("632616"),
                o = n("535348"),
                d = n("353927"),
                f = n("782340");

            function E(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.MediaEngineContextTypes.DEFAULT,
                    [n, E, c] = (0, r.default)(e, t),
                    C = (0, i.useStateFromStores)([s.default], () => s.default.disableHideSelfStreamAndVideoConfirmationAlert);
                return n ? (0, a.jsx)(u.MenuCheckboxItem, {
                    id: "self-video-hide",
                    label: f.default.Messages.SHOW_SELF_VIDEO,
                    checked: !E,
                    action: () => {
                        if (C || E) return c(!E);
                        (0, u.openModal)(e => (0, a.jsx)(l.default, {
                            ...e,
                            type: o.SelfStreamAndVideoAlertType.VIDEO,
                            onConfirm: () => c(!E)
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
            var i = n("446674"),
                u = n("77078"),
                s = n("648911"),
                r = n("271938"),
                l = n("42887"),
                o = n("782340"),
                d = n("431024");

            function f(e) {
                let t = (0, u.useModalContext)(),
                    f = (0, i.useStateFromStores)([l.default], () => l.default.isVideoEnabled()),
                    E = (0, i.useStateFromStores)([r.default], () => r.default.getId() === e),
                    c = (0, s.default)();
                return (!f || c) && E ? (0, a.jsx)(u.MenuItem, {
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
                    return S
                },
                default: function() {
                    return T
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var i = n("866227"),
                u = n.n(i),
                s = n("446674"),
                r = n("77078"),
                l = n("820542"),
                o = n("519705"),
                d = n("319165"),
                f = n("282109"),
                E = n("34676"),
                c = n("679653"),
                C = n("49111"),
                N = n("468200"),
                _ = n("782340");
            let S = () => [{
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
                let [n, i] = (0, s.useStateFromStoresArray)([f.default], () => [f.default.isChannelMuted(e.guild_id, e.id), f.default.getChannelMuteConfig(e.guild_id, e.id)]), u = (0, d.useMutedUntilText)(i), N = (0, c.default)(e, !0);

                function T(t) {
                    t && e.type === C.ChannelTypes.GUILD_CATEGORY && (0, l.categoryCollapse)(e.id), o.default.updateChannelOverrideSettings(e.guild_id, e.id, {
                        muted: t
                    }, E.NotificationLabel.muted(t))
                }
                let M = _.default.Messages.MUTE_CHANNEL_GENERIC,
                    I = _.default.Messages.UNMUTE_CHANNEL_GENERIC;
                switch (e.type) {
                    case C.ChannelTypes.GUILD_CATEGORY:
                        M = _.default.Messages.MUTE_CATEGORY, I = _.default.Messages.UNMUTE_CATEGORY;
                        break;
                    case C.ChannelTypes.GROUP_DM:
                        M = _.default.Messages.MUTE_CONVERSATION, I = _.default.Messages.UNMUTE_CONVERSATION;
                        break;
                    case C.ChannelTypes.DM:
                        M = _.default.Messages.MUTE_CHANNEL.format({
                            name: N
                        }), I = _.default.Messages.UNMUTE_CHANNEL.format({
                            name: N
                        });
                        break;
                    default:
                        M = _.default.Messages.MUTE_CHANNEL_GENERIC, I = _.default.Messages.UNMUTE_CHANNEL_GENERIC
                }
                return n ? (0, a.jsx)(r.MenuItem, {
                    id: "unmute-channel",
                    label: I,
                    subtext: u,
                    action: () => T(!1)
                }) : (0, a.jsx)(r.MenuItem, {
                    id: "mute-channel",
                    label: M,
                    action: () => T(!0),
                    children: S().map(n => {
                        let {
                            value: i,
                            label: u
                        } = n;
                        return (0, a.jsx)(r.MenuItem, {
                            id: "".concat(i),
                            label: u,
                            action: () => (function(n) {
                                e.type === C.ChannelTypes.GUILD_CATEGORY && (0, l.categoryCollapse)(e.id);
                                let a = A(n);
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
                    return S
                },
                toggleFavoriteServerMuted: function() {
                    return A
                }
            }), n("222007");
            var a = n("249654"),
                i = n("151426"),
                u = n("872173"),
                s = n("42203"),
                r = n("957255"),
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
                    let a = s.default.getChannel(t);
                    if (null == a || !a.isPrivate() && !r.default.can(o.Permissions.VIEW_CHANNEL, a)) {
                        delete e[t];
                        continue
                    }
                }
            }

            function E(e, t) {
                let n = l.default.isFavorite(e);
                !n && u.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e] = i.FavoriteChannel.create({
                        nickname: "",
                        type: i.FavoriteChannelType.REFERENCE_ORIGINAL,
                        position: d(),
                        parentId: null != t ? t : "0"
                    }), f(n.favoriteChannels)
                }, u.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function c(e) {
                let t = l.default.getFavorite(e);
                null != t && u.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    if (delete n.favoriteChannels[e], t.type === i.FavoriteChannelType.CATEGORY)
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

            function _(e) {
                c(e)
            }

            function S(e) {
                u.PreloadedUserSettingsActionCreators.updateAsync("favorites", t => {
                    for (let a of e)
                        if (null != a.position && (t.favoriteChannels[a.id].position = a.position), void 0 !== a.parent_id) {
                            var n;
                            t.favoriteChannels[a.id].parentId = null !== (n = a.parent_id) && void 0 !== n ? n : "0"
                        }
                }, u.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function A() {
                u.PreloadedUserSettingsActionCreators.updateAsync("favorites", e => {
                    e.muted = !e.muted
                }, u.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }
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
                u = n("437822"),
                s = n("773163"),
                r = n("49111");
            async function l(e) {
                await a.default.put({
                    url: r.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: s.MessageRequestConsentStatusTypes.ACCEPTED
                    }
                }), i.default.dispatch({
                    type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
                    channelId: e
                })
            }

            function o(e) {
                return a.default.put({
                    url: r.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: s.MessageRequestConsentStatusTypes.UNSPECIFIED
                    }
                })
            }

            function d(e) {
                return a.default.put({
                    url: r.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: s.MessageRequestConsentStatusTypes.PENDING
                    }
                })
            }

            function f(e) {
                return a.default.delete({
                    url: r.Endpoints.CHANNEL_RECIPIENT_CONSENT(e)
                })
            }

            function E(e) {
                return a.default.put({
                    url: r.Endpoints.CHANNEL_RECIPIENT_REJECT_BATCH(),
                    body: {
                        channel_ids: e
                    }
                })
            }

            function c() {
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
                    return s
                },
                setChannelSafetyWarningFeedback: function() {
                    return r
                },
                clearChannelSafetyWarnings: function() {
                    return l
                }
            });
            var a = n("872717"),
                i = n("913144"),
                u = n("49111");

            function s(e, t) {
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

            function r(e, t, n) {
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
                    return u
                },
                SafetyWarningFeedbackTypes: function() {
                    return s
                },
                default: function() {
                    return N
                }
            });
            var a, i, u, s, r = n("446674"),
                l = n("913144"),
                o = n("42203");
            (a = u || (u = {}))[a.STRANGER_DANGER = 1] = "STRANGER_DANGER", (i = s || (s = {}))[i.UPVOTE = 0] = "UPVOTE", i[i.DOWNVOTE = 1] = "DOWNVOTE";
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
            class C extends r.default.Store {
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
        },
        648911: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("446674"),
                i = n("42887"),
                u = n("512244");

            function s() {
                return (0, a.useStateFromStores)([i.default], () => (0, u.default)(i.default))
            }
        }
    }
]);