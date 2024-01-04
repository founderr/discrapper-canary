(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["47351"], {
        633043: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("77078"),
                u = n("850572"),
                r = () => (0, a.jsx)("div", {
                    className: u.loadingWrapper,
                    children: (0, a.jsx)(i.Dots, {
                        dotRadius: 4,
                        themed: !0
                    })
                })
        },
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
                r = n("42887"),
                l = n("49111"),
                s = n("353927");

            function o(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.MediaEngineContextTypes.DEFAULT,
                    n = (0, a.useStateFromStores)([u.default], () => u.default.getId()),
                    o = (0, a.useStateFromStores)([r.default], () => r.default.supports(s.Features.DISABLE_VIDEO) && r.default.isVideoEnabled()),
                    d = (0, a.useStateFromStores)([r.default], () => r.default.isLocalVideoDisabled(n, t), [n, t]),
                    f = null == e || e === n;
                return [f && (o || d), d, e => {
                    let a = e ? l.VideoToggleState.DISABLED : l.VideoToggleState.MANUAL_ENABLED;
                    i.default.setDisableLocalVideo(n, a, t)
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
            var i = n("452804"),
                u = n("135230"),
                r = n("535348"),
                l = n("782340");

            function s(e) {
                let {
                    type: t,
                    onConfirm: n,
                    ...s
                } = e, o = t === r.SelfStreamAndVideoAlertType.STREAM ? l.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER : l.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER, d = t === r.SelfStreamAndVideoAlertType.STREAM ? l.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY : l.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
                return (0, a.jsx)(u.default, {
                    confirmText: l.default.Messages.CONFIRM,
                    secondaryConfirmText: l.default.Messages.DONT_ASK_AGAIN,
                    title: o,
                    cancelText: l.default.Messages.CANCEL,
                    onConfirm: n,
                    onConfirmSecondary: () => {
                        i.default.updatedUnsyncedSettings({
                            disableHideSelfStreamAndVideoConfirmationAlert: !0
                        }), n()
                    },
                    body: d,
                    ...s
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
                r = n("255397"),
                l = n("191145"),
                s = n("782340");

            function o(e) {
                let t = (0, i.useStateFromStores)([l.default], () => l.default.getVoiceParticipantsHidden(e));
                return (0, a.jsx)(u.MenuCheckboxItem, {
                    id: "no-video-hide",
                    label: s.default.Messages.STREAM_SHOW_NON_VIDEO,
                    checked: !t,
                    action: () => r.default.toggleVoiceParticipantsHidden(e, !t)
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
            var i = n("446674"),
                u = n("77078"),
                r = n("168973"),
                l = n("301603"),
                s = n("632616"),
                o = n("535348"),
                d = n("353927"),
                f = n("782340");

            function c(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.MediaEngineContextTypes.DEFAULT,
                    [n, c, E] = (0, l.default)(e, t),
                    C = (0, i.useStateFromStores)([r.default], () => r.default.disableHideSelfStreamAndVideoConfirmationAlert);
                return n ? (0, a.jsx)(u.MenuCheckboxItem, {
                    id: "self-video-hide",
                    label: f.default.Messages.SHOW_SELF_VIDEO,
                    checked: !c,
                    action: () => {
                        if (C || c) return E(!c);
                        (0, u.openModal)(e => (0, a.jsx)(s.default, {
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
            var i = n("446674"),
                u = n("77078"),
                r = n("648911"),
                l = n("271938"),
                s = n("42887"),
                o = n("782340"),
                d = n("431024");

            function f(e) {
                let t = (0, u.useModalContext)(),
                    f = (0, i.useStateFromStores)([s.default], () => s.default.isVideoEnabled()),
                    c = (0, i.useStateFromStores)([l.default], () => l.default.getId() === e),
                    E = (0, r.default)();
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
                    return N
                },
                updateFavoriteChannels: function() {
                    return S
                },
                toggleFavoriteServerMuted: function() {
                    return p
                }
            }), n("222007");
            var a = n("249654"),
                i = n("151426"),
                u = n("872173"),
                r = n("42203"),
                l = n("957255"),
                s = n("379881"),
                o = n("843455");

            function d() {
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
                    if (n.type === i.FavoriteChannelType.CATEGORY) continue;
                    let a = r.default.getChannel(t);
                    if (null == a || !a.isPrivate() && !l.default.can(o.Permissions.VIEW_CHANNEL, a)) {
                        delete e[t];
                        continue
                    }
                }
            }

            function c(e, t) {
                let n = s.default.isFavorite(e);
                !n && u.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e] = i.FavoriteChannel.create({
                        nickname: "",
                        type: i.FavoriteChannelType.REFERENCE_ORIGINAL,
                        position: d(),
                        parentId: null != t ? t : "0"
                    }), f(n.favoriteChannels)
                }, u.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function E(e) {
                let t = s.default.getFavorite(e);
                null != t && u.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    if (delete n.favoriteChannels[e], t.type === i.FavoriteChannelType.CATEGORY)
                        for (let t in n.favoriteChannels) n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = "0");
                    f(n.favoriteChannels)
                }, u.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function C(e, t) {
                let n = s.default.isFavorite(e);
                n && u.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e].nickname = null != t ? t : ""
                }, u.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function A(e) {
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

            function N(e) {
                E(e)
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

            function p() {
                u.PreloadedUserSettingsActionCreators.updateAsync("favorites", e => {
                    e.muted = !e.muted
                }, u.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }
        },
        823026: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            }), n("424973");
            var a = n("37983"),
                i = n("884691"),
                u = n("446674"),
                r = n("77078"),
                l = n("713841"),
                s = n("79112"),
                o = n("988721"),
                d = n("592407"),
                f = n("305961"),
                c = n("957255"),
                E = n("49111"),
                C = n("782340");

            function A(e) {
                let {
                    user: t,
                    guildId: n,
                    channel: A,
                    context: N
                } = e, S = f.default.getGuild(n), p = (0, u.useStateFromStores)([c.default], () => null != S ? c.default.can(E.Permissions.MANAGE_GUILD, S) : null), _ = (0, o.useContextIndexState)(A, !0, !0), I = (0, o.useUserIndexState)(!0, !0), {
                    isUserApp: v,
                    isGuildApp: T
                } = i.useMemo(() => {
                    var e, n, a, i;
                    if ((null == t ? void 0 : t.id) == null) return {
                        isGuildApp: !1,
                        isUserApp: !1
                    };
                    let u = Object.values(null !== (a = null === (e = _.result) || void 0 === e ? void 0 : e.sections) && void 0 !== a ? a : {}),
                        r = Object.values(null !== (i = null === (n = I.result) || void 0 === n ? void 0 : n.sections) && void 0 !== i ? i : {});
                    return {
                        isGuildApp: u.some(e => {
                            var n;
                            return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === (null == t ? void 0 : t.id)
                        }),
                        isUserApp: r.some(e => {
                            var n;
                            return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === (null == t ? void 0 : t.id)
                        })
                    }
                }, [_, I, null == t ? void 0 : t.id]), m = i.useCallback(() => {
                    (null == S ? void 0 : S.id) != null && (d.default.open(S.id, E.GuildSettingsSections.INTEGRATIONS), l.default.setSection(E.IntegrationSettingsSections.APPLICATION, null == t ? void 0 : t.id))
                }, [null == t ? void 0 : t.id, null == S ? void 0 : S.id]), g = i.useCallback(() => {
                    s.default.open(E.UserSettingsSections.AUTHORIZED_APPS)
                }, []), h = N === E.AppContext.POPOUT;
                if (!(null == t ? void 0 : t.bot) || !p || h || !T && !v) return null;
                let M = [];
                return T && M.push((0, a.jsx)(r.MenuItem, {
                    id: "manage-integration",
                    label: C.default.Messages.MANAGE_INTEGRATION,
                    action: m
                }, "manage-integration")), v && M.push((0, a.jsx)(r.MenuItem, {
                    id: "manage-authorized-app",
                    label: C.default.Messages.MANAGE_AUTHORIZED_APP,
                    action: g
                }, "manage-authorized-app")), M
            }
        },
        16108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                acceptMessageRequest: function() {
                    return s
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
                i = n("913144"),
                u = n("437822"),
                r = n("773163"),
                l = n("49111");
            async function s(e) {
                await a.default.put({
                    url: l.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: r.MessageRequestConsentStatusTypes.ACCEPTED
                    }
                }), i.default.dispatch({
                    type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
                    channelId: e
                })
            }

            function o(e) {
                return a.default.put({
                    url: l.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: r.MessageRequestConsentStatusTypes.UNSPECIFIED
                    }
                })
            }

            function d(e) {
                return a.default.put({
                    url: l.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: r.MessageRequestConsentStatusTypes.PENDING
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
                    return r
                },
                setChannelSafetyWarningFeedback: function() {
                    return l
                },
                clearChannelSafetyWarnings: function() {
                    return s
                }
            });
            var a = n("872717"),
                i = n("913144"),
                u = n("49111");

            function r(e, t) {
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

            function l(e, t, n) {
                i.default.dispatch({
                    type: "CHANNEL_SAFETY_WARNING_FEEDBACK",
                    channelId: e,
                    warningId: t,
                    feedbackType: n
                })
            }

            function s(e) {
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
                    return r
                },
                default: function() {
                    return A
                }
            });
            var a, i, u, r, l = n("446674"),
                s = n("913144"),
                o = n("42203");
            (a = u || (u = {}))[a.STRANGER_DANGER = 1] = "STRANGER_DANGER", (i = r || (r = {}))[i.UPVOTE = 0] = "UPVOTE", i[i.DOWNVOTE = 1] = "DOWNVOTE";
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
            class C extends l.default.Store {
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
            var A = new C(s.default, {
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
        563816: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var a = n("37983"),
                i = n("884691"),
                u = n("627445"),
                r = n.n(u),
                l = n("446674"),
                s = n("77078"),
                o = n("240249"),
                d = n("916565"),
                f = n("355263"),
                c = n("633043"),
                E = n("823026"),
                C = n("305961"),
                A = n("697218"),
                N = n("317041"),
                S = n("782340"),
                p = n("205735"),
                _ = e => {
                    let t, {
                            commandType: n,
                            commandTargetId: u,
                            channel: _,
                            guildId: I,
                            onHeightUpdate: v,
                            context: T
                        } = e,
                        m = (0, l.useStateFromStores)([C.default], () => C.default.getGuild(null != I ? I : _.guild_id)),
                        g = (0, l.useStateFromStores)([A.default], () => A.default.getUser(u)),
                        h = (0, E.default)({
                            user: g,
                            guildId: null == m ? void 0 : m.id,
                            channel: _,
                            context: T
                        }),
                        {
                            commands: M,
                            sectionDescriptors: R,
                            loading: O
                        } = o.useDiscovery(_, {
                            commandType: n
                        }, {
                            limit: N.CONTEXT_MENU_COMMANDS_QUERY_LIMIT
                        }),
                        {
                            sections: F
                        } = i.useMemo(() => {
                            let e = {};
                            return R.forEach(t => {
                                e[t.id] = t
                            }), {
                                sections: e
                            }
                        }, [R]),
                        y = i.useRef(O.current);
                    i.useEffect(() => {
                        O.current !== y.current && (y.current = O.current, null == v || v())
                    }, [O, v]);
                    let D = i.useCallback(e => {
                        r(null != _, "menu item should not show if channel is null");
                        let t = F[e.applicationId],
                            n = null != t ? (0, f.getIconComponent)(t) : void 0;
                        return (0, a.jsx)(s.MenuItem, {
                            id: e.id,
                            label: e.displayName,
                            showIconFirst: !0,
                            icon: () => null != n ? (0, a.jsx)(n, {
                                channel: _,
                                section: t,
                                width: 18,
                                height: 18,
                                selectable: !1
                            }) : null,
                            action: () => {
                                (0, d.default)({
                                    command: e,
                                    optionValues: {},
                                    context: {
                                        channel: _,
                                        guild: m
                                    },
                                    commandTargetId: u
                                })
                            }
                        }, e.id)
                    }, [_, m, u, F]);
                    return O.current ? t = (0, a.jsx)(s.MenuItem, {
                        id: "menu-commands-placeholder",
                        render: () => (0, a.jsx)(c.default, {}),
                        disabled: !0
                    }, "menu-commands-placeholder") : (t = 0 === M.length ? (0, a.jsx)(s.MenuItem, {
                        id: "menu-commands-empty",
                        label: S.default.Messages.APPLICATION_COMMAND_NO_COMMANDS,
                        disabled: !0
                    }, "menu-commands-empty") : M.map(D), null != h && (t = (0, a.jsxs)(a.Fragment, {
                        children: [t, (0, a.jsx)(s.MenuSeparator, {}, "separator"), h]
                    }))), (0, a.jsx)(s.MenuItem, {
                        id: "apps",
                        label: S.default.Messages.APPS,
                        listClassName: p.list,
                        children: t
                    })
                }
        },
        648911: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("446674"),
                i = n("42887"),
                u = n("512244");

            function r() {
                return (0, a.useStateFromStores)([i.default], () => (0, u.default)(i.default))
            }
        }
    }
]);