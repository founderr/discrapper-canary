(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["82987"], {
        633043: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("37983");
            n("884691");
            var u = n("77078"),
                s = n("850572"),
                i = () => (0, a.jsx)("div", {
                    className: s.loadingWrapper,
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
                s = n("271938"),
                i = n("42887"),
                l = n("49111"),
                r = n("353927");

            function d(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.MediaEngineContextTypes.DEFAULT,
                    n = (0, a.useStateFromStores)([s.default], () => s.default.getId()),
                    d = (0, a.useStateFromStores)([i.default], () => i.default.supports(r.Features.DISABLE_VIDEO) && i.default.isVideoEnabled()),
                    o = (0, a.useStateFromStores)([i.default], () => i.default.isLocalVideoDisabled(n, t), [n, t]),
                    f = null == e || e === n;
                return [f && (d || o), o, e => {
                    let a = e ? l.VideoToggleState.DISABLED : l.VideoToggleState.MANUAL_ENABLED;
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
                s = n("135230"),
                i = n("535348"),
                l = n("782340");

            function r(e) {
                let {
                    type: t,
                    onConfirm: n,
                    ...r
                } = e, d = t === i.SelfStreamAndVideoAlertType.STREAM ? l.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER : l.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER, o = t === i.SelfStreamAndVideoAlertType.STREAM ? l.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY : l.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
                return (0, a.jsx)(s.default, {
                    confirmText: l.default.Messages.CONFIRM,
                    secondaryConfirmText: l.default.Messages.DONT_ASK_AGAIN,
                    title: d,
                    cancelText: l.default.Messages.CANCEL,
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
                s = n("77078"),
                i = n("255397"),
                l = n("191145"),
                r = n("782340");

            function d(e) {
                let t = (0, u.useStateFromStores)([l.default], () => l.default.getVoiceParticipantsHidden(e));
                return (0, a.jsx)(s.MenuCheckboxItem, {
                    id: "no-video-hide",
                    label: r.default.Messages.STREAM_SHOW_NON_VIDEO,
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
            var u = n("446674"),
                s = n("77078"),
                i = n("168973"),
                l = n("301603"),
                r = n("632616"),
                d = n("535348"),
                o = n("353927"),
                f = n("782340");

            function c(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.MediaEngineContextTypes.DEFAULT,
                    [n, c, E] = (0, l.default)(e, t),
                    C = (0, u.useStateFromStores)([i.default], () => i.default.disableHideSelfStreamAndVideoConfirmationAlert);
                return n ? (0, a.jsx)(s.MenuCheckboxItem, {
                    id: "self-video-hide",
                    label: f.default.Messages.SHOW_SELF_VIDEO,
                    checked: !c,
                    action: () => {
                        if (C || c) return E(!c);
                        (0, s.openModal)(e => (0, a.jsx)(r.default, {
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
                s = n("77078"),
                i = n("648911"),
                l = n("271938"),
                r = n("42887"),
                d = n("782340"),
                o = n("431024");

            function f(e) {
                let t = (0, s.useModalContext)(),
                    f = (0, u.useStateFromStores)([r.default], () => r.default.isVideoEnabled()),
                    c = (0, u.useStateFromStores)([l.default], () => l.default.getId() === e),
                    E = (0, i.default)();
                return (!f || E) && c ? (0, a.jsx)(s.MenuItem, {
                    id: "change-video-background",
                    label: (0, a.jsx)("div", {
                        className: o.item,
                        children: f ? d.default.Messages.CAMERA_CHANGE_VIDEO_BACKGROUND_MENU_ITEM : d.default.Messages.CAMERA_PREVIEW_MENU_ITEM
                    }),
                    action: function() {
                        (0, s.openModalLazy)(async () => {
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
            var u = n("866227"),
                s = n.n(u),
                i = n("446674"),
                l = n("77078"),
                r = n("820542"),
                d = n("519705"),
                o = n("319165"),
                f = n("282109"),
                c = n("679653"),
                E = n("49111"),
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
                    let t = e > 0 ? s().add(e, "second").toISOString() : null;
                    return {
                        muted: !0,
                        mute_config: {
                            selected_time_window: e,
                            end_time: t
                        }
                    }
                };

            function A(e, t) {
                let [n, u] = (0, i.useStateFromStoresArray)([f.default], () => [f.default.isChannelMuted(e.guild_id, e.id), f.default.getChannelMuteConfig(e.guild_id, e.id)]), s = (0, o.useMutedUntilText)(u), C = (0, c.default)(e, !0);

                function A(t) {
                    t && e.type === E.ChannelTypes.GUILD_CATEGORY && (0, r.categoryCollapse)(e.id), d.default.updateChannelOverrideSettings(e.guild_id, e.id, {
                        muted: t
                    })
                }
                let T = N.default.Messages.MUTE_CHANNEL_GENERIC,
                    M = N.default.Messages.UNMUTE_CHANNEL_GENERIC;
                switch (e.type) {
                    case E.ChannelTypes.GUILD_CATEGORY:
                        T = N.default.Messages.MUTE_CATEGORY, M = N.default.Messages.UNMUTE_CATEGORY;
                        break;
                    case E.ChannelTypes.GROUP_DM:
                        T = N.default.Messages.MUTE_CONVERSATION, M = N.default.Messages.UNMUTE_CONVERSATION;
                        break;
                    case E.ChannelTypes.DM:
                        T = N.default.Messages.MUTE_CHANNEL.format({
                            name: C
                        }), M = N.default.Messages.UNMUTE_CHANNEL.format({
                            name: C
                        });
                        break;
                    default:
                        T = N.default.Messages.MUTE_CHANNEL_GENERIC, M = N.default.Messages.UNMUTE_CHANNEL_GENERIC
                }
                return n ? (0, a.jsx)(l.MenuItem, {
                    id: "unmute-channel",
                    label: M,
                    subtext: s,
                    action: () => A(!1)
                }) : (0, a.jsx)(l.MenuItem, {
                    id: "mute-channel",
                    label: T,
                    action: () => A(!0),
                    children: _().map(n => {
                        let {
                            value: u,
                            label: s
                        } = n;
                        return (0, a.jsx)(l.MenuItem, {
                            id: "".concat(u),
                            label: s,
                            action: () => (function(n) {
                                e.type === E.ChannelTypes.GUILD_CATEGORY && (0, r.categoryCollapse)(e.id);
                                let a = S(n);
                                d.default.updateChannelOverrideSettings(e.guild_id, e.id, a, t)
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
                u = n("151426"),
                s = n("872173"),
                i = n("42203"),
                l = n("957255"),
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
                    let a = i.default.getChannel(t);
                    if (null == a || !a.isPrivate() && !l.default.can(d.Permissions.VIEW_CHANNEL, a)) {
                        delete e[t];
                        continue
                    }
                }
            }

            function c(e, t) {
                let n = r.default.isFavorite(e);
                !n && s.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e] = u.FavoriteChannel.create({
                        nickname: "",
                        type: u.FavoriteChannelType.REFERENCE_ORIGINAL,
                        position: o(),
                        parentId: null != t ? t : "0"
                    }), f(n.favoriteChannels)
                }, s.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function E(e) {
                let t = r.default.getFavorite(e);
                null != t && s.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    if (delete n.favoriteChannels[e], t.type === u.FavoriteChannelType.CATEGORY)
                        for (let t in n.favoriteChannels) n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = "0");
                    f(n.favoriteChannels)
                }, s.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function C(e, t) {
                let n = r.default.isFavorite(e);
                n && s.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e].nickname = null != t ? t : ""
                }, s.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function N(e) {
                let t = a.default.fromTimestamp(Date.now());
                s.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[t] = u.FavoriteChannel.create({
                        nickname: e,
                        type: u.FavoriteChannelType.CATEGORY,
                        position: o(),
                        parentId: "0"
                    })
                }, s.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function _(e) {
                E(e)
            }

            function S(e) {
                s.PreloadedUserSettingsActionCreators.updateAsync("favorites", t => {
                    for (let a of e)
                        if (null != a.position && (t.favoriteChannels[a.id].position = a.position), void 0 !== a.parent_id) {
                            var n;
                            t.favoriteChannels[a.id].parentId = null !== (n = a.parent_id) && void 0 !== n ? n : "0"
                        }
                }, s.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function A() {
                s.PreloadedUserSettingsActionCreators.updateAsync("favorites", e => {
                    e.muted = !e.muted
                }, s.UserSettingsDelay.INFREQUENT_USER_ACTION)
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
                s = n("437822"),
                i = n("773163"),
                l = n("49111");
            async function r(e) {
                await a.default.put({
                    url: l.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: i.MessageRequestConsentStatusTypes.ACCEPTED
                    }
                }), u.default.dispatch({
                    type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
                    channelId: e
                })
            }

            function d(e) {
                return a.default.put({
                    url: l.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: i.MessageRequestConsentStatusTypes.UNSPECIFIED
                    }
                })
            }

            function o(e) {
                return a.default.put({
                    url: l.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: i.MessageRequestConsentStatusTypes.PENDING
                    }
                })
            }

            function f(e) {
                return a.default.delete({
                    url: l.Endpoints.CHANNEL_RECIPIENT_CONSENT(e)
                })
            }

            function c(e) {
                return a.default.put({
                    url: l.Endpoints.CHANNEL_RECIPIENT_REJECT_BATCH(),
                    body: {
                        channel_ids: e
                    }
                })
            }

            function E() {
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
                    return i
                },
                setChannelSafetyWarningFeedback: function() {
                    return l
                },
                clearChannelSafetyWarnings: function() {
                    return r
                }
            });
            var a = n("872717"),
                u = n("913144"),
                s = n("49111");

            function i(e, t) {
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

            function l(e, t, n) {
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
                    return s
                },
                SafetyWarningFeedbackTypes: function() {
                    return i
                },
                default: function() {
                    return N
                }
            });
            var a, u, s, i, l = n("446674"),
                r = n("913144"),
                d = n("42203");
            (a = s || (s = {}))[a.STRANGER_DANGER = 1] = "STRANGER_DANGER", (u = i || (i = {}))[u.UPVOTE = 0] = "UPVOTE", u[u.DOWNVOTE = 1] = "DOWNVOTE";
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
            class C extends l.default.Store {
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
            var N = new C(r.default, {
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
                    return S
                }
            });
            var a = n("37983"),
                u = n("884691"),
                s = n("627445"),
                i = n.n(s),
                l = n("446674"),
                r = n("77078"),
                d = n("240249"),
                o = n("916565"),
                f = n("355263"),
                c = n("633043"),
                E = n("305961"),
                C = n("317041"),
                N = n("782340"),
                _ = n("205735"),
                S = e => {
                    let t, {
                            commandType: n,
                            commandTargetId: s,
                            channel: S,
                            guildId: A,
                            onHeightUpdate: T
                        } = e,
                        M = (0, l.useStateFromStores)([E.default], () => E.default.getGuild(null != A ? A : S.guild_id)),
                        {
                            commands: I,
                            sectionDescriptors: p,
                            loading: g
                        } = d.useDiscovery(S, {
                            commandType: n
                        }, {
                            limit: C.CONTEXT_MENU_COMMANDS_QUERY_LIMIT
                        }),
                        {
                            sections: R
                        } = u.useMemo(() => {
                            let e = {};
                            return p.forEach(t => {
                                e[t.id] = t
                            }), {
                                sections: e
                            }
                        }, [p]),
                        m = u.useRef(g.current);
                    u.useEffect(() => {
                        g.current !== m.current && (m.current = g.current, null == T || T())
                    }, [g, T]);
                    let v = u.useCallback(e => {
                        i(null != S, "menu item should not show if channel is null");
                        let t = R[e.applicationId],
                            n = null != t ? (0, f.getIconComponent)(t) : void 0;
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
                                (0, o.default)({
                                    command: e,
                                    optionValues: {},
                                    context: {
                                        channel: S,
                                        guild: M
                                    },
                                    commandTargetId: s
                                })
                            }
                        }, e.id)
                    }, [S, M, s, R]);
                    return t = g.current ? (0, a.jsx)(r.MenuItem, {
                        id: "menu-commands-placeholder",
                        render: () => (0, a.jsx)(c.default, {}),
                        disabled: !0
                    }) : 0 === I.length ? (0, a.jsx)(r.MenuItem, {
                        id: "menu-commands-empty",
                        label: N.default.Messages.APPLICATION_COMMAND_NO_COMMANDS,
                        disabled: !0
                    }) : I.map(v), (0, a.jsx)(r.MenuItem, {
                        id: "apps",
                        label: N.default.Messages.APPS,
                        childRowHeight: 34,
                        listClassName: _.list,
                        children: t
                    })
                }
        },
        648911: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("446674"),
                u = n("42887"),
                s = n("512244");

            function i() {
                return (0, a.useStateFromStores)([u.default], () => (0, s.default)(u.default))
            }
        }
    }
]);