(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["21417"], {
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
                    return r
                }
            });
            var a = n("446674"),
                u = n("629109"),
                s = n("271938"),
                l = n("42887"),
                d = n("49111"),
                i = n("353927");

            function r(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.MediaEngineContextTypes.DEFAULT,
                    n = (0, a.useStateFromStores)([s.default], () => s.default.getId()),
                    r = (0, a.useStateFromStores)([l.default], () => l.default.supports(i.Features.DISABLE_VIDEO) && l.default.isVideoEnabled()),
                    o = (0, a.useStateFromStores)([l.default], () => l.default.isLocalVideoDisabled(n, t), [n, t]),
                    E = null == e || e === n;
                return [E && (r || o), o, e => {
                    let a = e ? d.VideoToggleState.DISABLED : d.VideoToggleState.MANUAL_ENABLED;
                    u.default.setDisableLocalVideo(n, a, t)
                }]
            }
        },
        632616: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("37983");
            n("884691");
            var u = n("452804"),
                s = n("135230"),
                l = n("535348"),
                d = n("782340");

            function i(e) {
                let {
                    type: t,
                    onConfirm: n,
                    ...i
                } = e, r = t === l.SelfStreamAndVideoAlertType.STREAM ? d.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER : d.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER, o = t === l.SelfStreamAndVideoAlertType.STREAM ? d.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY : d.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
                return (0, a.jsx)(s.default, {
                    confirmText: d.default.Messages.CONFIRM,
                    secondaryConfirmText: d.default.Messages.DONT_ASK_AGAIN,
                    title: r,
                    cancelText: d.default.Messages.CANCEL,
                    onConfirm: n,
                    onConfirmSecondary: () => {
                        u.default.updatedUnsyncedSettings({
                            disableHideSelfStreamAndVideoConfirmationAlert: !0
                        }), n()
                    },
                    body: o,
                    ...i
                })
            }
        },
        243288: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var u = n("446674"),
                s = n("77078"),
                l = n("255397"),
                d = n("191145"),
                i = n("782340");

            function r(e) {
                let t = (0, u.useStateFromStores)([d.default], () => d.default.getVoiceParticipantsHidden(e));
                return (0, a.jsx)(s.MenuCheckboxItem, {
                    id: "no-video-hide",
                    label: i.default.Messages.STREAM_SHOW_NON_VIDEO,
                    checked: !t,
                    action: () => l.default.toggleVoiceParticipantsHidden(e, !t)
                })
            }
        },
        321135: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var u = n("446674"),
                s = n("77078"),
                l = n("168973"),
                d = n("301603"),
                i = n("632616"),
                r = n("535348"),
                o = n("353927"),
                E = n("782340");

            function f(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.MediaEngineContextTypes.DEFAULT,
                    [n, f, c] = (0, d.default)(e, t),
                    N = (0, u.useStateFromStores)([l.default], () => l.default.disableHideSelfStreamAndVideoConfirmationAlert);
                return n ? (0, a.jsx)(s.MenuCheckboxItem, {
                    id: "self-video-hide",
                    label: E.default.Messages.SHOW_SELF_VIDEO,
                    checked: !f,
                    action: () => {
                        if (N || f) return c(!f);
                        (0, s.openModal)(e => (0, a.jsx)(i.default, {
                            ...e,
                            type: r.SelfStreamAndVideoAlertType.VIDEO,
                            onConfirm: () => c(!f)
                        }))
                    }
                }) : null
            }
        },
        873254: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var a = n("37983");
            n("884691");
            var u = n("446674"),
                s = n("77078"),
                l = n("648911"),
                d = n("271938"),
                i = n("42887"),
                r = n("782340"),
                o = n("431024");

            function E(e) {
                let t = (0, s.useModalContext)(),
                    E = (0, u.useStateFromStores)([i.default], () => i.default.isVideoEnabled()),
                    f = (0, u.useStateFromStores)([d.default], () => d.default.getId() === e),
                    c = (0, l.default)();
                return (!E || c) && f ? (0, a.jsx)(s.MenuItem, {
                    id: "change-video-background",
                    label: (0, a.jsx)("div", {
                        className: o.item,
                        children: E ? r.default.Messages.CAMERA_CHANGE_VIDEO_BACKGROUND_MENU_ITEM : r.default.Messages.CAMERA_PREVIEW_MENU_ITEM
                    }),
                    action: function() {
                        (0, s.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("381736").then(n.bind(n, "381736"));
                            return t => (0, a.jsx)(e, {
                                ...t,
                                videoEnabled: E
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
                    return C
                },
                default: function() {
                    return T
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var u = n("866227"),
                s = n.n(u),
                l = n("446674"),
                d = n("77078"),
                i = n("820542"),
                r = n("519705"),
                o = n("319165"),
                E = n("282109"),
                f = n("34676"),
                c = n("679653"),
                N = n("49111"),
                _ = n("468200"),
                S = n("782340");
            let C = () => [{
                    value: _.MuteUntilSeconds.MINUTES_15,
                    label: S.default.Messages.MUTE_DURATION_15_MINUTES
                }, {
                    value: _.MuteUntilSeconds.HOURS_1,
                    label: S.default.Messages.MUTE_DURATION_1_HOUR
                }, {
                    value: _.MuteUntilSeconds.HOURS_3,
                    label: S.default.Messages.MUTE_DURATION_3_HOURS
                }, {
                    value: _.MuteUntilSeconds.HOURS_8,
                    label: S.default.Messages.MUTE_DURATION_8_HOURS
                }, {
                    value: _.MuteUntilSeconds.HOURS_24,
                    label: S.default.Messages.MUTE_DURATION_24_HOURS
                }, {
                    value: _.MuteUntilSeconds.ALWAYS,
                    label: S.default.Messages.MUTE_DURATION_ALWAYS
                }],
                A = e => {
                    let t = e > 0 ? s().add(e, "second").toISOString() : null;
                    return {
                        muted: !0,
                        mute_config: {
                            selected_time_window: e,
                            end_time: t
                        }
                    }
                };

            function T(e, t) {
                let [n, u] = (0, l.useStateFromStoresArray)([E.default], () => [E.default.isChannelMuted(e.guild_id, e.id), E.default.getChannelMuteConfig(e.guild_id, e.id)]), s = (0, o.useMutedUntilText)(u), _ = (0, c.default)(e, !0);

                function T(t) {
                    t && e.type === N.ChannelTypes.GUILD_CATEGORY && (0, i.categoryCollapse)(e.id), r.default.updateChannelOverrideSettings(e.guild_id, e.id, {
                        muted: t
                    }, f.NotificationLabel.muted(t))
                }
                let M = S.default.Messages.MUTE_CHANNEL_GENERIC,
                    I = S.default.Messages.UNMUTE_CHANNEL_GENERIC;
                switch (e.type) {
                    case N.ChannelTypes.GUILD_CATEGORY:
                        M = S.default.Messages.MUTE_CATEGORY, I = S.default.Messages.UNMUTE_CATEGORY;
                        break;
                    case N.ChannelTypes.GROUP_DM:
                        M = S.default.Messages.MUTE_CONVERSATION, I = S.default.Messages.UNMUTE_CONVERSATION;
                        break;
                    case N.ChannelTypes.DM:
                        M = S.default.Messages.MUTE_CHANNEL.format({
                            name: _
                        }), I = S.default.Messages.UNMUTE_CHANNEL.format({
                            name: _
                        });
                        break;
                    default:
                        M = S.default.Messages.MUTE_CHANNEL_GENERIC, I = S.default.Messages.UNMUTE_CHANNEL_GENERIC
                }
                return n ? (0, a.jsx)(d.MenuItem, {
                    id: "unmute-channel",
                    label: I,
                    subtext: s,
                    action: () => T(!1)
                }) : (0, a.jsx)(d.MenuItem, {
                    id: "mute-channel",
                    label: M,
                    action: () => T(!0),
                    children: C().map(n => {
                        let {
                            value: u,
                            label: s
                        } = n;
                        return (0, a.jsx)(d.MenuItem, {
                            id: "".concat(u),
                            label: s,
                            action: () => (function(n) {
                                e.type === N.ChannelTypes.GUILD_CATEGORY && (0, i.categoryCollapse)(e.id);
                                let a = A(n);
                                r.default.updateChannelOverrideSettings(e.guild_id, e.id, a, f.NotificationLabels.Muted, t)
                            })(u)
                        }, u)
                    })
                })
            }
        },
        16108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                acceptMessageRequest: function() {
                    return i
                },
                clearMessageRequestState: function() {
                    return r
                },
                markAsMessageRequest: function() {
                    return o
                },
                rejectMessageRequest: function() {
                    return E
                },
                rejectMessageRequestBatch: function() {
                    return f
                },
                fetchUserCountryCode: function() {
                    return c
                }
            });
            var a = n("872717"),
                u = n("913144"),
                s = n("437822"),
                l = n("773163"),
                d = n("49111");
            async function i(e) {
                await a.default.put({
                    url: d.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: l.MessageRequestConsentStatusTypes.ACCEPTED
                    }
                }), u.default.dispatch({
                    type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
                    channelId: e
                })
            }

            function r(e) {
                return a.default.put({
                    url: d.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: l.MessageRequestConsentStatusTypes.UNSPECIFIED
                    }
                })
            }

            function o(e) {
                return a.default.put({
                    url: d.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: l.MessageRequestConsentStatusTypes.PENDING
                    }
                })
            }

            function E(e) {
                return a.default.delete({
                    url: d.Endpoints.CHANNEL_RECIPIENT_CONSENT(e)
                })
            }

            function f(e) {
                return a.default.put({
                    url: d.Endpoints.CHANNEL_RECIPIENT_REJECT_BATCH(),
                    body: {
                        channel_ids: e
                    }
                })
            }

            function c() {
                s.default.getLocationMetadata()
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
                    return d
                },
                clearChannelSafetyWarnings: function() {
                    return i
                }
            });
            var a = n("872717"),
                u = n("913144"),
                s = n("49111");

            function l(e, t) {
                return u.default.dispatch({
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

            function d(e, t, n) {
                u.default.dispatch({
                    type: "CHANNEL_SAFETY_WARNING_FEEDBACK",
                    channelId: e,
                    warningId: t,
                    feedbackType: n
                })
            }

            function i(e) {
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
                    return s
                },
                SafetyWarningFeedbackTypes: function() {
                    return l
                },
                default: function() {
                    return _
                }
            });
            var a, u, s, l, d = n("446674"),
                i = n("913144"),
                r = n("42203");
            (a = s || (s = {}))[a.STRANGER_DANGER = 1] = "STRANGER_DANGER", (u = l || (l = {}))[u.UPVOTE = 0] = "UPVOTE", u[u.DOWNVOTE = 1] = "DOWNVOTE";
            let o = [],
                E = {};

            function f(e) {
                let {
                    safetyWarnings: t
                } = e;
                null != t && (E[e.id] = t), null == t && null != E[e.id] && delete E[e.id]
            }

            function c() {
                E = {}, Object.values(r.default.getMutablePrivateChannels()).forEach(e => {
                    f(e)
                })
            }
            class N extends d.default.Store {
                initialize() {
                    this.waitFor(r.default)
                }
                getChannelSafetyWarning(e, t) {
                    var n;
                    return null === (n = E[e]) || void 0 === n ? void 0 : n.find(e => e.id === t)
                }
                getChannelSafetyWarnings(e) {
                    var t;
                    return null !== (t = E[e]) && void 0 !== t ? t : o
                }
            }
            var _ = new N(i.default, {
                CHANNEL_CREATE: function(e) {
                    f(e.channel)
                },
                CHANNEL_DELETE: function(e) {
                    null != E[e.channel.id] && delete E[e.channel.id]
                },
                CHANNEL_UPDATES: function(e) {
                    e.channels.forEach(e => {
                        f(e)
                    })
                },
                CONNECTION_OPEN: c,
                CONNECTION_OPEN_SUPPLEMENTAL: c,
                CHANNEL_SAFETY_WARNING_FEEDBACK: function(e) {
                    let {
                        channelId: t,
                        warningId: n,
                        feedbackType: a
                    } = e, u = E[t];
                    null != u && (E[t] = u.map(e => e.id === n ? {
                        ...e,
                        feedback_type: a
                    } : e))
                },
                CLEAR_CHANNEL_SAFETY_WARNINGS: function(e) {
                    let {
                        channelId: t
                    } = e, n = E[t];
                    null != n && (E[t] = n.map(e => ({
                        ...e,
                        dismiss_timestamp: void 0
                    })))
                },
                DISMISS_CHANNEL_SAFETY_WARNINGS: function(e) {
                    let {
                        channelId: t,
                        warningIds: n
                    } = e, a = E[t];
                    if (null == a) return;
                    let u = Date.now().toString();
                    E[t] = a.map(e => n.includes(e.id) ? {
                        ...e,
                        dismiss_timestamp: u
                    } : e)
                }
            })
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
                s = n("512244");

            function l() {
                return (0, a.useStateFromStores)([u.default], () => (0, s.default)(u.default))
            }
        }
    }
]);