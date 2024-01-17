(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["4389"], {
        633043: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("37983");
            n("884691");
            var u = n("77078"),
                l = n("850572"),
                s = () => (0, a.jsx)("div", {
                    className: l.loadingWrapper,
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
                    return r
                }
            });
            var a = n("446674"),
                u = n("629109"),
                l = n("271938"),
                s = n("42887"),
                i = n("49111"),
                d = n("353927");

            function r(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.MediaEngineContextTypes.DEFAULT,
                    n = (0, a.useStateFromStores)([l.default], () => l.default.getId()),
                    r = (0, a.useStateFromStores)([s.default], () => s.default.supports(d.Features.DISABLE_VIDEO) && s.default.isVideoEnabled()),
                    o = (0, a.useStateFromStores)([s.default], () => s.default.isLocalVideoDisabled(n, t), [n, t]),
                    c = null == e || e === n;
                return [c && (r || o), o, e => {
                    let a = e ? i.VideoToggleState.DISABLED : i.VideoToggleState.MANUAL_ENABLED;
                    u.default.setDisableLocalVideo(n, a, t)
                }]
            }
        },
        632616: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var u = n("452804"),
                l = n("135230"),
                s = n("535348"),
                i = n("782340");

            function d(e) {
                let {
                    type: t,
                    onConfirm: n,
                    ...d
                } = e, r = t === s.SelfStreamAndVideoAlertType.STREAM ? i.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER : i.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER, o = t === s.SelfStreamAndVideoAlertType.STREAM ? i.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY : i.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
                return (0, a.jsx)(l.default, {
                    confirmText: i.default.Messages.CONFIRM,
                    secondaryConfirmText: i.default.Messages.DONT_ASK_AGAIN,
                    title: r,
                    cancelText: i.default.Messages.CANCEL,
                    onConfirm: n,
                    onConfirmSecondary: () => {
                        u.default.updatedUnsyncedSettings({
                            disableHideSelfStreamAndVideoConfirmationAlert: !0
                        }), n()
                    },
                    body: o,
                    ...d
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
                l = n("77078"),
                s = n("255397"),
                i = n("191145"),
                d = n("782340");

            function r(e) {
                let t = (0, u.useStateFromStores)([i.default], () => i.default.getVoiceParticipantsHidden(e));
                return (0, a.jsx)(l.MenuCheckboxItem, {
                    id: "no-video-hide",
                    label: d.default.Messages.STREAM_SHOW_NON_VIDEO,
                    checked: !t,
                    action: () => s.default.toggleVoiceParticipantsHidden(e, !t)
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
                l = n("77078"),
                s = n("168973"),
                i = n("301603"),
                d = n("632616"),
                r = n("535348"),
                o = n("353927"),
                c = n("782340");

            function f(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.MediaEngineContextTypes.DEFAULT,
                    [n, f, E] = (0, i.default)(e, t),
                    N = (0, u.useStateFromStores)([s.default], () => s.default.disableHideSelfStreamAndVideoConfirmationAlert);
                return n ? (0, a.jsx)(l.MenuCheckboxItem, {
                    id: "self-video-hide",
                    label: c.default.Messages.SHOW_SELF_VIDEO,
                    checked: !f,
                    action: () => {
                        if (N || f) return E(!f);
                        (0, l.openModal)(e => (0, a.jsx)(d.default, {
                            ...e,
                            type: r.SelfStreamAndVideoAlertType.VIDEO,
                            onConfirm: () => E(!f)
                        }))
                    }
                }) : null
            }
        },
        873254: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("37983");
            n("884691");
            var u = n("446674"),
                l = n("77078"),
                s = n("648911"),
                i = n("271938"),
                d = n("42887"),
                r = n("782340"),
                o = n("431024");

            function c(e) {
                let t = (0, l.useModalContext)(),
                    c = (0, u.useStateFromStores)([d.default], () => d.default.isVideoEnabled()),
                    f = (0, u.useStateFromStores)([i.default], () => i.default.getId() === e),
                    E = (0, s.default)();
                return (!c || E) && f ? (0, a.jsx)(l.MenuItem, {
                    id: "change-video-background",
                    label: (0, a.jsx)("div", {
                        className: o.item,
                        children: c ? r.default.Messages.CAMERA_CHANGE_VIDEO_BACKGROUND_MENU_ITEM : r.default.Messages.CAMERA_PREVIEW_MENU_ITEM
                    }),
                    action: function() {
                        (0, l.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("381736").then(n.bind(n, "381736"));
                            return t => (0, a.jsx)(e, {
                                ...t,
                                videoEnabled: c
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
                    return A
                },
                default: function() {
                    return M
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var u = n("866227"),
                l = n.n(u),
                s = n("446674"),
                i = n("77078"),
                d = n("820542"),
                r = n("519705"),
                o = n("319165"),
                c = n("282109"),
                f = n("34676"),
                E = n("679653"),
                N = n("49111"),
                _ = n("468200"),
                S = n("782340");
            let A = () => [{
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
                C = e => {
                    let t = e > 0 ? l().add(e, "second").toISOString() : null;
                    return {
                        muted: !0,
                        mute_config: {
                            selected_time_window: e,
                            end_time: t
                        }
                    }
                };

            function M(e, t) {
                let [n, u] = (0, s.useStateFromStoresArray)([c.default], () => [c.default.isChannelMuted(e.guild_id, e.id), c.default.getChannelMuteConfig(e.guild_id, e.id)]), l = (0, o.useMutedUntilText)(u), _ = (0, E.default)(e, !0);

                function M(t) {
                    t && e.type === N.ChannelTypes.GUILD_CATEGORY && (0, d.categoryCollapse)(e.id), r.default.updateChannelOverrideSettings(e.guild_id, e.id, {
                        muted: t
                    }, f.NotificationLabel.muted(t))
                }
                let T = S.default.Messages.MUTE_CHANNEL_GENERIC,
                    I = S.default.Messages.UNMUTE_CHANNEL_GENERIC;
                switch (e.type) {
                    case N.ChannelTypes.GUILD_CATEGORY:
                        T = S.default.Messages.MUTE_CATEGORY, I = S.default.Messages.UNMUTE_CATEGORY;
                        break;
                    case N.ChannelTypes.GROUP_DM:
                        T = S.default.Messages.MUTE_CONVERSATION, I = S.default.Messages.UNMUTE_CONVERSATION;
                        break;
                    case N.ChannelTypes.DM:
                        T = S.default.Messages.MUTE_CHANNEL.format({
                            name: _
                        }), I = S.default.Messages.UNMUTE_CHANNEL.format({
                            name: _
                        });
                        break;
                    default:
                        T = S.default.Messages.MUTE_CHANNEL_GENERIC, I = S.default.Messages.UNMUTE_CHANNEL_GENERIC
                }
                return n ? (0, a.jsx)(i.MenuItem, {
                    id: "unmute-channel",
                    label: I,
                    subtext: l,
                    action: () => M(!1)
                }) : (0, a.jsx)(i.MenuItem, {
                    id: "mute-channel",
                    label: T,
                    action: () => M(!0),
                    children: A().map(n => {
                        let {
                            value: u,
                            label: l
                        } = n;
                        return (0, a.jsx)(i.MenuItem, {
                            id: "".concat(u),
                            label: l,
                            action: () => (function(n) {
                                e.type === N.ChannelTypes.GUILD_CATEGORY && (0, d.categoryCollapse)(e.id);
                                let a = C(n);
                                r.default.updateChannelOverrideSettings(e.guild_id, e.id, a, f.NotificationLabels.Muted, t)
                            })(u)
                        }, u)
                    })
                })
            }
        },
        823026: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            }), n("424973");
            var a = n("37983"),
                u = n("884691"),
                l = n("446674"),
                s = n("77078"),
                i = n("713841"),
                d = n("79112"),
                r = n("988721"),
                o = n("592407"),
                c = n("305961"),
                f = n("957255"),
                E = n("49111"),
                N = n("782340");

            function _(e) {
                let {
                    user: t,
                    guildId: n,
                    channel: _,
                    context: S
                } = e, A = c.default.getGuild(n), C = (0, l.useStateFromStores)([f.default], () => null != A ? f.default.can(E.Permissions.MANAGE_GUILD, A) : null), M = (0, r.useContextIndexState)(_, !0, !0), T = (0, r.useUserIndexState)(!0, !0), {
                    isUserApp: I,
                    isGuildApp: p
                } = u.useMemo(() => {
                    var e, n, a, u;
                    if ((null == t ? void 0 : t.id) == null) return {
                        isGuildApp: !1,
                        isUserApp: !1
                    };
                    let l = Object.values(null !== (a = null === (e = M.result) || void 0 === e ? void 0 : e.sections) && void 0 !== a ? a : {}),
                        s = Object.values(null !== (u = null === (n = T.result) || void 0 === n ? void 0 : n.sections) && void 0 !== u ? u : {});
                    return {
                        isGuildApp: l.some(e => {
                            var n;
                            return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === (null == t ? void 0 : t.id)
                        }),
                        isUserApp: s.some(e => {
                            var n;
                            return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === (null == t ? void 0 : t.id)
                        })
                    }
                }, [M, T, null == t ? void 0 : t.id]), g = u.useCallback(() => {
                    (null == A ? void 0 : A.id) != null && (o.default.open(A.id, E.GuildSettingsSections.INTEGRATIONS), i.default.setSection(E.IntegrationSettingsSections.APPLICATION, null == t ? void 0 : t.id))
                }, [null == t ? void 0 : t.id, null == A ? void 0 : A.id]), m = u.useCallback(() => {
                    d.default.open(E.UserSettingsSections.AUTHORIZED_APPS)
                }, []), O = S === E.AppContext.POPOUT;
                if (!(null == t ? void 0 : t.bot) || !C || O || !p && !I) return null;
                let R = [];
                return p && R.push((0, a.jsx)(s.MenuItem, {
                    id: "manage-integration",
                    label: N.default.Messages.MANAGE_INTEGRATION,
                    action: g
                }, "manage-integration")), I && R.push((0, a.jsx)(s.MenuItem, {
                    id: "manage-authorized-app",
                    label: N.default.Messages.MANAGE_AUTHORIZED_APP,
                    action: m
                }, "manage-authorized-app")), R
            }
        },
        16108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                acceptMessageRequest: function() {
                    return d
                },
                clearMessageRequestState: function() {
                    return r
                },
                markAsMessageRequest: function() {
                    return o
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
                u = n("913144"),
                l = n("437822"),
                s = n("773163"),
                i = n("49111");
            async function d(e) {
                await a.default.put({
                    url: i.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: s.MessageRequestConsentStatusTypes.ACCEPTED
                    }
                }), u.default.dispatch({
                    type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
                    channelId: e
                })
            }

            function r(e) {
                return a.default.put({
                    url: i.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: s.MessageRequestConsentStatusTypes.UNSPECIFIED
                    }
                })
            }

            function o(e) {
                return a.default.put({
                    url: i.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: s.MessageRequestConsentStatusTypes.PENDING
                    }
                })
            }

            function c(e) {
                return a.default.delete({
                    url: i.Endpoints.CHANNEL_RECIPIENT_CONSENT(e)
                })
            }

            function f(e) {
                return a.default.put({
                    url: i.Endpoints.CHANNEL_RECIPIENT_REJECT_BATCH(),
                    body: {
                        channel_ids: e
                    }
                })
            }

            function E() {
                l.default.getLocationMetadata()
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
                    return s
                },
                setChannelSafetyWarningFeedback: function() {
                    return i
                },
                clearChannelSafetyWarnings: function() {
                    return d
                }
            });
            var a = n("872717"),
                u = n("913144"),
                l = n("49111");

            function s(e, t) {
                return u.default.dispatch({
                    type: "DISMISS_CHANNEL_SAFETY_WARNINGS",
                    channelId: e,
                    warningIds: t
                }), a.default.post({
                    url: l.Endpoints.CHANNEL_SAFETY_WARNINGS_ACK(e),
                    body: {
                        warning_ids: t
                    },
                    oldFormErrors: !0
                })
            }

            function i(e, t, n) {
                u.default.dispatch({
                    type: "CHANNEL_SAFETY_WARNING_FEEDBACK",
                    channelId: e,
                    warningId: t,
                    feedbackType: n
                })
            }

            function d(e) {
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
                    return l
                },
                SafetyWarningFeedbackTypes: function() {
                    return s
                },
                default: function() {
                    return _
                }
            });
            var a, u, l, s, i = n("446674"),
                d = n("913144"),
                r = n("42203");
            (a = l || (l = {}))[a.STRANGER_DANGER = 1] = "STRANGER_DANGER", (u = s || (s = {}))[u.UPVOTE = 0] = "UPVOTE", u[u.DOWNVOTE = 1] = "DOWNVOTE";
            let o = [],
                c = {};

            function f(e) {
                let {
                    safetyWarnings: t
                } = e;
                null != t && (c[e.id] = t), null == t && null != c[e.id] && delete c[e.id]
            }

            function E() {
                c = {}, Object.values(r.default.getMutablePrivateChannels()).forEach(e => {
                    f(e)
                })
            }
            class N extends i.default.Store {
                initialize() {
                    this.waitFor(r.default)
                }
                getChannelSafetyWarning(e, t) {
                    var n;
                    return null === (n = c[e]) || void 0 === n ? void 0 : n.find(e => e.id === t)
                }
                getChannelSafetyWarnings(e) {
                    var t;
                    return null !== (t = c[e]) && void 0 !== t ? t : o
                }
            }
            var _ = new N(d.default, {
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
                    } = e, u = c[t];
                    null != u && (c[t] = u.map(e => e.id === n ? {
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
                    let u = Date.now().toString();
                    c[t] = a.map(e => n.includes(e.id) ? {
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
                    return M
                }
            });
            var a = n("37983"),
                u = n("884691"),
                l = n("627445"),
                s = n.n(l),
                i = n("446674"),
                d = n("77078"),
                r = n("240249"),
                o = n("916565"),
                c = n("355263"),
                f = n("633043"),
                E = n("823026"),
                N = n("305961"),
                _ = n("697218"),
                S = n("317041"),
                A = n("782340"),
                C = n("205735"),
                M = e => {
                    let t, {
                            commandType: n,
                            commandTargetId: l,
                            channel: M,
                            guildId: T,
                            onHeightUpdate: I,
                            context: p
                        } = e,
                        g = (0, i.useStateFromStores)([N.default], () => N.default.getGuild(null != T ? T : M.guild_id)),
                        m = (0, i.useStateFromStores)([_.default], () => _.default.getUser(l)),
                        O = (0, E.default)({
                            user: m,
                            guildId: null == g ? void 0 : g.id,
                            channel: M,
                            context: p
                        }),
                        {
                            commands: R,
                            sectionDescriptors: v,
                            loading: U
                        } = r.useDiscovery(M, {
                            commandType: n
                        }, {
                            limit: S.CONTEXT_MENU_COMMANDS_QUERY_LIMIT
                        }),
                        {
                            sections: h
                        } = u.useMemo(() => {
                            let e = {};
                            return v.forEach(t => {
                                e[t.id] = t
                            }), {
                                sections: e
                            }
                        }, [v]),
                        D = u.useRef(U.current);
                    u.useEffect(() => {
                        U.current !== D.current && (D.current = U.current, null == I || I())
                    }, [U, I]);
                    let b = u.useCallback(e => {
                        s(null != M, "menu item should not show if channel is null");
                        let t = h[e.applicationId],
                            n = null != t ? (0, c.getIconComponent)(t) : void 0;
                        return (0, a.jsx)(d.MenuItem, {
                            id: e.id,
                            label: e.displayName,
                            showIconFirst: !0,
                            icon: () => null != n ? (0, a.jsx)(n, {
                                channel: M,
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
                                        channel: M,
                                        guild: g
                                    },
                                    commandTargetId: l
                                })
                            }
                        }, e.id)
                    }, [M, g, l, h]);
                    return U.current ? t = (0, a.jsx)(d.MenuItem, {
                        id: "menu-commands-placeholder",
                        render: () => (0, a.jsx)(f.default, {}),
                        disabled: !0
                    }, "menu-commands-placeholder") : (t = 0 === R.length ? (0, a.jsx)(d.MenuItem, {
                        id: "menu-commands-empty",
                        label: A.default.Messages.APPLICATION_COMMAND_NO_COMMANDS,
                        disabled: !0
                    }, "menu-commands-empty") : R.map(b), null != O && (t = (0, a.jsxs)(a.Fragment, {
                        children: [t, (0, a.jsx)(d.MenuSeparator, {}, "separator"), O]
                    }))), (0, a.jsx)(d.MenuItem, {
                        id: "apps",
                        label: A.default.Messages.APPS,
                        listClassName: C.list,
                        children: t
                    })
                }
        },
        648911: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("446674"),
                u = n("42887"),
                l = n("512244");

            function s() {
                return (0, a.useStateFromStores)([u.default], () => (0, l.default)(u.default))
            }
        }
    }
]);