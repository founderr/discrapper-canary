(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["40102"], {
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
                    return d
                }
            });
            var a = n("446674"),
                r = n("629109"),
                i = n("271938"),
                u = n("42887"),
                o = n("49111"),
                s = n("353927");

            function d(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.MediaEngineContextTypes.DEFAULT,
                    n = (0, a.useStateFromStores)([i.default], () => i.default.getId()),
                    d = (0, a.useStateFromStores)([u.default], () => u.default.supports(s.Features.DISABLE_VIDEO) && u.default.isVideoEnabled()),
                    l = (0, a.useStateFromStores)([u.default], () => u.default.isLocalVideoDisabled(n, t), [n, t]),
                    f = null == e || e === n;
                return [f && (d || l), l, e => {
                    let a = e ? o.VideoToggleState.DISABLED : o.VideoToggleState.MANUAL_ENABLED;
                    r.default.setDisableLocalVideo(n, a, t)
                }]
            }
        },
        632616: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("452804"),
                i = n("135230"),
                u = n("535348"),
                o = n("782340");

            function s(e) {
                let {
                    type: t,
                    onConfirm: n,
                    ...s
                } = e, d = t === u.SelfStreamAndVideoAlertType.STREAM ? o.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER : o.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER, l = t === u.SelfStreamAndVideoAlertType.STREAM ? o.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY : o.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
                return (0, a.jsx)(i.default, {
                    confirmText: o.default.Messages.CONFIRM,
                    secondaryConfirmText: o.default.Messages.DONT_ASK_AGAIN,
                    title: d,
                    cancelText: o.default.Messages.CANCEL,
                    onConfirm: n,
                    onConfirmSecondary: () => {
                        r.default.updatedUnsyncedSettings({
                            disableHideSelfStreamAndVideoConfirmationAlert: !0
                        }), n()
                    },
                    body: l,
                    ...s
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
            var r = n("446674"),
                i = n("77078"),
                u = n("255397"),
                o = n("191145"),
                s = n("782340");

            function d(e) {
                let t = (0, r.useStateFromStores)([o.default], () => o.default.getVoiceParticipantsHidden(e));
                return (0, a.jsx)(i.MenuCheckboxItem, {
                    id: "no-video-hide",
                    label: s.default.Messages.STREAM_SHOW_NON_VIDEO,
                    checked: !t,
                    action: () => u.default.toggleVoiceParticipantsHidden(e, !t)
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
                i = n("77078"),
                u = n("168973"),
                o = n("301603"),
                s = n("632616"),
                d = n("535348"),
                l = n("353927"),
                f = n("782340");

            function c(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.MediaEngineContextTypes.DEFAULT,
                    [n, c, E] = (0, o.default)(e, t),
                    C = (0, r.useStateFromStores)([u.default], () => u.default.disableHideSelfStreamAndVideoConfirmationAlert);
                return n ? (0, a.jsx)(i.MenuCheckboxItem, {
                    id: "self-video-hide",
                    label: f.default.Messages.SHOW_SELF_VIDEO,
                    checked: !c,
                    action: () => {
                        if (C || c) return E(!c);
                        (0, i.openModal)(e => (0, a.jsx)(s.default, {
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
            var r = n("446674"),
                i = n("77078"),
                u = n("648911"),
                o = n("271938"),
                s = n("42887"),
                d = n("782340"),
                l = n("431024");

            function f(e) {
                let t = (0, i.useModalContext)(),
                    f = (0, r.useStateFromStores)([s.default], () => s.default.isVideoEnabled()),
                    c = (0, r.useStateFromStores)([o.default], () => o.default.getId() === e),
                    E = (0, u.default)();
                return (!f || E) && c ? (0, a.jsx)(i.MenuItem, {
                    id: "change-video-background",
                    label: (0, a.jsx)("div", {
                        className: l.item,
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
                    return A
                },
                updateFavoriteChannels: function() {
                    return N
                },
                updateFavoriteChannelParent: function() {
                    return _
                },
                toggleFavoriteServerMuted: function() {
                    return v
                }
            }), n("222007");
            var a = n("249654"),
                r = n("151426"),
                i = n("872173"),
                u = n("42203"),
                o = n("957255"),
                s = n("379881"),
                d = n("843455");

            function l() {
                let e = s.default.getFavoriteChannels(),
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
                    if (null == a || !a.isPrivate() && !o.default.can(d.Permissions.VIEW_CHANNEL, a)) {
                        delete e[t];
                        continue
                    }
                }
            }

            function c(e, t) {
                let n = s.default.isFavorite(e);
                !n && i.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e] = r.FavoriteChannel.create({
                        nickname: "",
                        type: r.FavoriteChannelType.REFERENCE_ORIGINAL,
                        position: l(),
                        parentId: null != t ? t : "0"
                    }), f(n.favoriteChannels)
                }, i.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function E(e) {
                let t = s.default.getFavorite(e);
                null != t && i.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    if (delete n.favoriteChannels[e], t.type === r.FavoriteChannelType.CATEGORY)
                        for (let t in n.favoriteChannels) n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = "0");
                    f(n.favoriteChannels)
                }, i.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function C(e, t) {
                let n = s.default.isFavorite(e);
                n && i.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e].nickname = null != t ? t : ""
                }, i.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function S(e) {
                let t = a.default.fromTimestamp(Date.now());
                i.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[t] = r.FavoriteChannel.create({
                        nickname: e,
                        type: r.FavoriteChannelType.CATEGORY,
                        position: l(),
                        parentId: "0"
                    })
                }, i.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function A(e) {
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

            function v() {
                i.PreloadedUserSettingsActionCreators.updateAsync("favorites", e => {
                    e.muted = !e.muted
                }, i.UserSettingsDelay.INFREQUENT_USER_ACTION)
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
                    return A
                },
                useFavoriteAdded: function() {
                    return N
                }
            }), n("424973"), n("222007");
            var a = n("884691"),
                r = n("298386"),
                i = n("446674");
            n("42203");
            var u = n("923959"),
                o = n("162771"),
                s = n("697218"),
                d = n("379881"),
                l = n("498139"),
                f = n("136569"),
                c = n("49111");

            function E(e) {
                let {
                    favoritesEnabled: t,
                    isFavoritesPerk: n
                } = (0, l.useFavoritesServerExperiment)("useCanFavoriteChannel"), a = (0, i.useStateFromStores)([d.default], () => d.default.isFavorite(e.id)), r = (0, i.useStateFromStores)([s.default], () => s.default.getCurrentUser()), u = e.isDM() || e.isThread(), o = !u || n && (null == r ? void 0 : r.isStaff()) === !0;
                return t && !__OVERLAY__ && !a && o
            }

            function C(e) {
                let t = (0, i.useStateFromStores)([d.default], () => d.default.getFavorite(e));
                return t
            }

            function S() {
                let e = (0, i.useStateFromStores)([u.default], () => u.default.getChannels(c.FAVORITES))[r.ChannelTypes.GUILD_CATEGORY];
                return e.map(e => ({
                    id: "null" === e.channel.id ? null : e.channel.id,
                    name: e.channel.name
                }))
            }

            function A() {
                let e = (0, i.useStateFromStores)([o.default], () => o.default.getGuildId());
                return e === c.FAVORITES
            }

            function N() {
                let {
                    isFavoritesPerk: e
                } = (0, l.useFavoritesServerExperiment)("useFavoriteAdded"), t = (0, f.useFavoritesTooltipStore)(), n = a.useCallback(() => {
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
                    return s
                },
                clearMessageRequestState: function() {
                    return d
                },
                markAsMessageRequest: function() {
                    return l
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
                i = n("437822"),
                u = n("773163"),
                o = n("49111");
            async function s(e) {
                await a.default.put({
                    url: o.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: u.MessageRequestConsentStatusTypes.ACCEPTED
                    }
                }), r.default.dispatch({
                    type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
                    channelId: e
                })
            }

            function d(e) {
                return a.default.put({
                    url: o.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: u.MessageRequestConsentStatusTypes.UNSPECIFIED
                    }
                })
            }

            function l(e) {
                return a.default.put({
                    url: o.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: u.MessageRequestConsentStatusTypes.PENDING
                    }
                })
            }

            function f(e) {
                return a.default.delete({
                    url: o.Endpoints.CHANNEL_RECIPIENT_CONSENT(e)
                })
            }

            function c(e) {
                return a.default.put({
                    url: o.Endpoints.CHANNEL_RECIPIENT_REJECT_BATCH(),
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
                    return o
                },
                clearChannelSafetyWarnings: function() {
                    return s
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

            function o(e, t, n) {
                r.default.dispatch({
                    type: "CHANNEL_SAFETY_WARNING_FEEDBACK",
                    channelId: e,
                    warningId: t,
                    feedbackType: n
                })
            }

            function s(e) {
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
                    return S
                }
            });
            var a, r, i, u, o = n("446674"),
                s = n("913144"),
                d = n("42203");
            (a = i || (i = {}))[a.STRANGER_DANGER = 1] = "STRANGER_DANGER", (r = u || (u = {}))[r.UPVOTE = 0] = "UPVOTE", r[r.DOWNVOTE = 1] = "DOWNVOTE";
            let l = [],
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
            class C extends o.default.Store {
                initialize() {
                    this.waitFor(d.default)
                }
                getChannelSafetyWarning(e, t) {
                    var n;
                    return null === (n = f[e]) || void 0 === n ? void 0 : n.find(e => e.id === t)
                }
                getChannelSafetyWarnings(e) {
                    var t;
                    return null !== (t = f[e]) && void 0 !== t ? t : l
                }
            }
            var S = new C(s.default, {
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