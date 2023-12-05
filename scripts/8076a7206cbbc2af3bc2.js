(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["68096"], {
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
                    return l
                }
            });
            var a = n("446674"),
                r = n("629109"),
                i = n("271938"),
                u = n("42887"),
                s = n("49111"),
                o = n("353927");

            function l(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.MediaEngineContextTypes.DEFAULT,
                    n = (0, a.useStateFromStores)([i.default], () => i.default.getId()),
                    l = (0, a.useStateFromStores)([u.default], () => u.default.supports(o.Features.DISABLE_VIDEO) && u.default.isVideoEnabled()),
                    d = (0, a.useStateFromStores)([u.default], () => u.default.isLocalVideoDisabled(n, t), [n, t]),
                    f = null == e || e === n;
                return [f && (l || d), d, e => {
                    let a = e ? s.VideoToggleState.DISABLED : s.VideoToggleState.MANUAL_ENABLED;
                    r.default.setDisableLocalVideo(n, a, t)
                }]
            }
        },
        632616: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("452804"),
                i = n("135230"),
                u = n("535348"),
                s = n("782340");

            function o(e) {
                let {
                    type: t,
                    onConfirm: n,
                    ...o
                } = e, l = t === u.SelfStreamAndVideoAlertType.STREAM ? s.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER : s.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER, d = t === u.SelfStreamAndVideoAlertType.STREAM ? s.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY : s.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
                return (0, a.jsx)(i.default, {
                    confirmText: s.default.Messages.CONFIRM,
                    secondaryConfirmText: s.default.Messages.DONT_ASK_AGAIN,
                    title: l,
                    cancelText: s.default.Messages.CANCEL,
                    onConfirm: n,
                    onConfirmSecondary: () => {
                        r.default.updatedUnsyncedSettings({
                            disableHideSelfStreamAndVideoConfirmationAlert: !0
                        }), n()
                    },
                    body: d,
                    ...o
                })
            }
        },
        243288: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("446674"),
                i = n("77078"),
                u = n("255397"),
                s = n("191145"),
                o = n("782340");

            function l(e) {
                let t = (0, r.useStateFromStores)([s.default], () => s.default.getVoiceParticipantsHidden(e));
                return (0, a.jsx)(i.MenuCheckboxItem, {
                    id: "no-video-hide",
                    label: o.default.Messages.STREAM_SHOW_NON_VIDEO,
                    checked: !t,
                    action: () => u.default.toggleVoiceParticipantsHidden(e, !t)
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
            var r = n("446674"),
                i = n("77078"),
                u = n("168973"),
                s = n("301603"),
                o = n("632616"),
                l = n("535348"),
                d = n("353927"),
                f = n("782340");

            function E(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.MediaEngineContextTypes.DEFAULT,
                    [n, E, c] = (0, s.default)(e, t),
                    C = (0, r.useStateFromStores)([u.default], () => u.default.disableHideSelfStreamAndVideoConfirmationAlert);
                return n ? (0, a.jsx)(i.MenuCheckboxItem, {
                    id: "self-video-hide",
                    label: f.default.Messages.SHOW_SELF_VIDEO,
                    checked: !E,
                    action: () => {
                        if (C || E) return c(!E);
                        (0, i.openModal)(e => (0, a.jsx)(o.default, {
                            ...e,
                            type: l.SelfStreamAndVideoAlertType.VIDEO,
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
            var r = n("446674"),
                i = n("77078"),
                u = n("648911"),
                s = n("271938"),
                o = n("42887"),
                l = n("782340"),
                d = n("431024");

            function f(e) {
                let t = (0, i.useModalContext)(),
                    f = (0, r.useStateFromStores)([o.default], () => o.default.isVideoEnabled()),
                    E = (0, r.useStateFromStores)([s.default], () => s.default.getId() === e),
                    c = (0, u.default)();
                return (!f || c) && E ? (0, a.jsx)(i.MenuItem, {
                    id: "change-video-background",
                    label: (0, a.jsx)("div", {
                        className: d.item,
                        children: f ? l.default.Messages.CAMERA_CHANGE_VIDEO_BACKGROUND_MENU_ITEM : l.default.Messages.CAMERA_PREVIEW_MENU_ITEM
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
                    return S
                },
                updateFavoriteChannels: function() {
                    return A
                },
                toggleFavoriteServerMuted: function() {
                    return _
                }
            }), n("222007");
            var a = n("249654"),
                r = n("151426"),
                i = n("872173"),
                u = n("42203"),
                s = n("957255"),
                o = n("379881"),
                l = n("843455");

            function d() {
                let e = o.default.getFavoriteChannels(),
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
                    let a = u.default.getChannel(t);
                    if (null == a || !a.isPrivate() && !s.default.can(l.Permissions.VIEW_CHANNEL, a)) {
                        delete e[t];
                        continue
                    }
                }
            }

            function E(e, t) {
                let n = o.default.isFavorite(e);
                !n && i.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e] = r.FavoriteChannel.create({
                        nickname: "",
                        type: r.FavoriteChannelType.REFERENCE_ORIGINAL,
                        position: d(),
                        parentId: null != t ? t : "0"
                    }), f(n.favoriteChannels)
                }, i.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function c(e) {
                let t = o.default.getFavorite(e);
                null != t && i.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    if (delete n.favoriteChannels[e], t.type === r.FavoriteChannelType.CATEGORY)
                        for (let t in n.favoriteChannels) n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = "0");
                    f(n.favoriteChannels)
                }, i.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function C(e, t) {
                let n = o.default.isFavorite(e);
                n && i.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e].nickname = null != t ? t : ""
                }, i.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function N(e) {
                let t = a.default.fromTimestamp(Date.now());
                i.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[t] = r.FavoriteChannel.create({
                        nickname: e,
                        type: r.FavoriteChannelType.CATEGORY,
                        position: d(),
                        parentId: "0"
                    })
                }, i.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function S(e) {
                c(e)
            }

            function A(e) {
                i.PreloadedUserSettingsActionCreators.updateAsync("favorites", t => {
                    for (let a of e)
                        if (null != a.position && (t.favoriteChannels[a.id].position = a.position), void 0 !== a.parent_id) {
                            var n;
                            t.favoriteChannels[a.id].parentId = null !== (n = a.parent_id) && void 0 !== n ? n : "0"
                        }
                }, i.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function _() {
                i.PreloadedUserSettingsActionCreators.updateAsync("favorites", e => {
                    e.muted = !e.muted
                }, i.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }
        },
        16108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                acceptMessageRequest: function() {
                    return o
                },
                clearMessageRequestState: function() {
                    return l
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
                r = n("913144"),
                i = n("437822"),
                u = n("773163"),
                s = n("49111");
            async function o(e) {
                await a.default.put({
                    url: s.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: u.MessageRequestConsentStatusTypes.ACCEPTED
                    }
                }), r.default.dispatch({
                    type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
                    channelId: e
                })
            }

            function l(e) {
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
                i.default.getLocationMetadata()
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
                    return u
                },
                setChannelSafetyWarningFeedback: function() {
                    return s
                },
                clearChannelSafetyWarnings: function() {
                    return o
                }
            });
            var a = n("872717"),
                r = n("913144"),
                i = n("49111");

            function u(e, t) {
                return r.default.dispatch({
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
                r.default.dispatch({
                    type: "CHANNEL_SAFETY_WARNING_FEEDBACK",
                    channelId: e,
                    warningId: t,
                    feedbackType: n
                })
            }

            function o(e) {
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
                    return i
                },
                SafetyWarningFeedbackTypes: function() {
                    return u
                },
                default: function() {
                    return N
                }
            });
            var a, r, i, u, s = n("446674"),
                o = n("913144"),
                l = n("42203");
            (a = i || (i = {}))[a.STRANGER_DANGER = 1] = "STRANGER_DANGER", (r = u || (u = {}))[r.UPVOTE = 0] = "UPVOTE", r[r.DOWNVOTE = 1] = "DOWNVOTE";
            let d = [],
                f = {};

            function E(e) {
                let {
                    safetyWarnings: t
                } = e;
                null != t && (f[e.id] = t), null == t && null != f[e.id] && delete f[e.id]
            }

            function c() {
                f = {}, Object.values(l.default.getMutablePrivateChannels()).forEach(e => {
                    E(e)
                })
            }
            class C extends s.default.Store {
                initialize() {
                    this.waitFor(l.default)
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
            var N = new C(o.default, {
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
                    return u
                }
            });
            var a = n("446674"),
                r = n("42887"),
                i = n("512244");

            function u() {
                return (0, a.useStateFromStores)([r.default], () => (0, i.default)(r.default))
            }
        }
    }
]);