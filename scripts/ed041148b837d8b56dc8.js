(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["13862"], {
        219352: function(e, t, n) {
            "use strict";
            var a, s;
            n.r(t), n.d(t, {
                SelfStreamAndVideoAlertType: function() {
                    return a
                }
            }), (s = a || (a = {}))[s.STREAM = 0] = "STREAM", s[s.VIDEO = 1] = "VIDEO"
        },
        301603: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("446674"),
                s = n("629109"),
                u = n("271938"),
                i = n("42887"),
                r = n("49111"),
                l = n("353927");

            function o(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.MediaEngineContextTypes.DEFAULT,
                    n = (0, a.useStateFromStores)([u.default], () => u.default.getId()),
                    o = (0, a.useStateFromStores)([i.default], () => i.default.supports(l.Features.DISABLE_VIDEO) && i.default.isVideoEnabled()),
                    d = (0, a.useStateFromStores)([i.default], () => i.default.isLocalVideoDisabled(n, t), [n, t]),
                    f = null == e || e === n;
                return [f && (o || d), d, e => {
                    let a = e ? r.VideoToggleState.DISABLED : r.VideoToggleState.MANUAL_ENABLED;
                    s.default.setDisableLocalVideo(n, a, t)
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
            var s = n("452804"),
                u = n("135230"),
                i = n("219352"),
                r = n("782340");

            function l(e) {
                let {
                    type: t,
                    onConfirm: n,
                    ...l
                } = e, o = t === i.SelfStreamAndVideoAlertType.STREAM ? r.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER : r.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER, d = t === i.SelfStreamAndVideoAlertType.STREAM ? r.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY : r.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
                return (0, a.jsx)(u.default, {
                    confirmText: r.default.Messages.CONFIRM,
                    secondaryConfirmText: r.default.Messages.DONT_ASK_AGAIN,
                    title: o,
                    cancelText: r.default.Messages.CANCEL,
                    onConfirm: n,
                    onConfirmSecondary: () => {
                        s.default.updatedUnsyncedSettings({
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
            var s = n("446674"),
                u = n("77078"),
                i = n("255397"),
                r = n("191145"),
                l = n("782340");

            function o(e) {
                let t = (0, s.useStateFromStores)([r.default], () => r.default.getVoiceParticipantsHidden(e));
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
                    return E
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var s = n("446674"),
                u = n("77078"),
                i = n("168973"),
                r = n("301603"),
                l = n("632616"),
                o = n("219352"),
                d = n("353927"),
                f = n("782340");

            function E(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.MediaEngineContextTypes.DEFAULT,
                    [n, E, c] = (0, r.default)(e, t),
                    C = (0, s.useStateFromStores)([i.default], () => i.default.disableHideSelfStreamAndVideoConfirmationAlert);
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
            var s = n("446674"),
                u = n("77078"),
                i = n("648911"),
                r = n("271938"),
                l = n("42887"),
                o = n("782340"),
                d = n("431024");

            function f(e) {
                let t = (0, u.useModalContext)(),
                    f = (0, s.useStateFromStores)([l.default], () => l.default.isVideoEnabled()),
                    E = (0, s.useStateFromStores)([r.default], () => r.default.getId() === e),
                    c = (0, i.default)();
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
                    return _
                },
                default: function() {
                    return A
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var s = n("866227"),
                u = n.n(s),
                i = n("446674"),
                r = n("77078"),
                l = n("820542"),
                o = n("519705"),
                d = n("319165"),
                f = n("282109"),
                E = n("679653"),
                c = n("49111"),
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
                S = e => {
                    let t = e > 0 ? u().add(e, "second").toISOString() : null;
                    return {
                        muted: !0,
                        mute_config: {
                            selected_time_window: e,
                            end_time: t
                        }
                    }
                };

            function A(e, t) {
                let [n, s] = (0, i.useStateFromStoresArray)([f.default], () => [f.default.isChannelMuted(e.guild_id, e.id), f.default.getChannelMuteConfig(e.guild_id, e.id)]), u = (0, d.useMutedUntilText)(s), C = (0, E.default)(e, !0);

                function A(t) {
                    t && e.type === c.ChannelTypes.GUILD_CATEGORY && (0, l.categoryCollapse)(e.id), o.default.updateChannelOverrideSettings(e.guild_id, e.id, {
                        muted: t
                    })
                }
                let T = N.default.Messages.MUTE_CHANNEL_GENERIC,
                    I = N.default.Messages.UNMUTE_CHANNEL_GENERIC;
                switch (e.type) {
                    case c.ChannelTypes.GUILD_CATEGORY:
                        T = N.default.Messages.MUTE_CATEGORY, I = N.default.Messages.UNMUTE_CATEGORY;
                        break;
                    case c.ChannelTypes.GROUP_DM:
                        T = N.default.Messages.MUTE_CONVERSATION, I = N.default.Messages.UNMUTE_CONVERSATION;
                        break;
                    case c.ChannelTypes.DM:
                        T = N.default.Messages.MUTE_CHANNEL.format({
                            name: C
                        }), I = N.default.Messages.UNMUTE_CHANNEL.format({
                            name: C
                        });
                        break;
                    default:
                        T = N.default.Messages.MUTE_CHANNEL_GENERIC, I = N.default.Messages.UNMUTE_CHANNEL_GENERIC
                }
                return n ? (0, a.jsx)(r.MenuItem, {
                    id: "unmute-channel",
                    label: I,
                    subtext: u,
                    action: () => A(!1)
                }) : (0, a.jsx)(r.MenuItem, {
                    id: "mute-channel",
                    label: T,
                    action: () => A(!0),
                    children: _().map(n => {
                        let {
                            value: s,
                            label: u
                        } = n;
                        return (0, a.jsx)(r.MenuItem, {
                            id: "".concat(s),
                            label: u,
                            action: () => (function(n) {
                                e.type === c.ChannelTypes.GUILD_CATEGORY && (0, l.categoryCollapse)(e.id);
                                let a = S(n);
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
                s = n("151426"),
                u = n("872173"),
                i = n("42203"),
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
                    if (n.type === s.FavoriteChannelType.CATEGORY) continue;
                    let a = i.default.getChannel(t);
                    if (null == a || !a.isPrivate() && !r.default.can(o.Permissions.VIEW_CHANNEL, a)) {
                        delete e[t];
                        continue
                    }
                }
            }

            function E(e, t) {
                let n = l.default.isFavorite(e);
                !n && u.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e] = s.FavoriteChannel.create({
                        nickname: "",
                        type: s.FavoriteChannelType.REFERENCE_ORIGINAL,
                        position: d(),
                        parentId: null != t ? t : "0"
                    }), f(n.favoriteChannels)
                }, u.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function c(e) {
                let t = l.default.getFavorite(e);
                null != t && u.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    if (delete n.favoriteChannels[e], t.type === s.FavoriteChannelType.CATEGORY)
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
                    n.favoriteChannels[t] = s.FavoriteChannel.create({
                        nickname: e,
                        type: s.FavoriteChannelType.CATEGORY,
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
                s = n("913144"),
                u = n("437822"),
                i = n("773163"),
                r = n("49111");
            async function l(e) {
                await a.default.put({
                    url: r.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: i.MessageRequestConsentStatusTypes.ACCEPTED
                    }
                }), s.default.dispatch({
                    type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
                    channelId: e
                })
            }

            function o(e) {
                return a.default.put({
                    url: r.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: i.MessageRequestConsentStatusTypes.UNSPECIFIED
                    }
                })
            }

            function d(e) {
                return a.default.put({
                    url: r.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: i.MessageRequestConsentStatusTypes.PENDING
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
                    return i
                },
                setChannelSafetyWarningFeedback: function() {
                    return r
                },
                clearChannelSafetyWarnings: function() {
                    return l
                }
            });
            var a = n("872717"),
                s = n("913144"),
                u = n("49111");

            function i(e, t) {
                return s.default.dispatch({
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
                s.default.dispatch({
                    type: "CHANNEL_SAFETY_WARNING_FEEDBACK",
                    channelId: e,
                    warningId: t,
                    feedbackType: n
                })
            }

            function l(e) {
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
                    return u
                },
                SafetyWarningFeedbackTypes: function() {
                    return i
                },
                default: function() {
                    return N
                }
            });
            var a, s, u, i, r = n("446674"),
                l = n("913144"),
                o = n("42203");
            (a = u || (u = {}))[a.STRANGER_DANGER = 1] = "STRANGER_DANGER", (s = i || (i = {}))[s.UPVOTE = 0] = "UPVOTE", s[s.DOWNVOTE = 1] = "DOWNVOTE";
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
                    } = e, s = f[t];
                    null != s && (f[t] = s.map(e => e.id === n ? {
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
                    let s = Date.now().toString();
                    f[t] = a.map(e => n.includes(e.id) ? {
                        ...e,
                        dismiss_timestamp: s
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
                s = n("42887"),
                u = n("512244");

            function i() {
                return (0, a.useStateFromStores)([s.default], () => (0, u.default)(s.default))
            }
        }
    }
]);