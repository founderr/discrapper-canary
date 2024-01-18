(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["5825"], {
        633043: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var u = n("37983");
            n("884691");
            var a = n("77078"),
                l = n("850572"),
                s = () => (0, u.jsx)("div", {
                    className: l.loadingWrapper,
                    children: (0, u.jsx)(a.Dots, {
                        dotRadius: 4,
                        themed: !0
                    })
                })
        },
        531674: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getMuteTimes: function() {
                    return A
                },
                default: function() {
                    return S
                }
            }), n("222007");
            var u = n("37983");
            n("884691");
            var a = n("866227"),
                l = n.n(a),
                s = n("446674"),
                i = n("77078"),
                d = n("820542"),
                r = n("519705"),
                o = n("319165"),
                c = n("282109"),
                E = n("34676"),
                N = n("679653"),
                f = n("49111"),
                _ = n("468200"),
                C = n("782340");
            let A = () => [{
                    value: _.MuteUntilSeconds.MINUTES_15,
                    label: C.default.Messages.MUTE_DURATION_15_MINUTES
                }, {
                    value: _.MuteUntilSeconds.HOURS_1,
                    label: C.default.Messages.MUTE_DURATION_1_HOUR
                }, {
                    value: _.MuteUntilSeconds.HOURS_3,
                    label: C.default.Messages.MUTE_DURATION_3_HOURS
                }, {
                    value: _.MuteUntilSeconds.HOURS_8,
                    label: C.default.Messages.MUTE_DURATION_8_HOURS
                }, {
                    value: _.MuteUntilSeconds.HOURS_24,
                    label: C.default.Messages.MUTE_DURATION_24_HOURS
                }, {
                    value: _.MuteUntilSeconds.ALWAYS,
                    label: C.default.Messages.MUTE_DURATION_ALWAYS
                }],
                T = e => {
                    let t = e > 0 ? l().add(e, "second").toISOString() : null;
                    return {
                        muted: !0,
                        mute_config: {
                            selected_time_window: e,
                            end_time: t
                        }
                    }
                };

            function S(e, t) {
                let [n, a] = (0, s.useStateFromStoresArray)([c.default], () => [c.default.isChannelMuted(e.guild_id, e.id), c.default.getChannelMuteConfig(e.guild_id, e.id)]), l = (0, o.useMutedUntilText)(a), _ = (0, N.default)(e, !0);

                function S(t) {
                    t && e.type === f.ChannelTypes.GUILD_CATEGORY && (0, d.categoryCollapse)(e.id), r.default.updateChannelOverrideSettings(e.guild_id, e.id, {
                        muted: t
                    }, E.NotificationLabel.muted(t))
                }
                let p = C.default.Messages.MUTE_CHANNEL_GENERIC,
                    M = C.default.Messages.UNMUTE_CHANNEL_GENERIC;
                switch (e.type) {
                    case f.ChannelTypes.GUILD_CATEGORY:
                        p = C.default.Messages.MUTE_CATEGORY, M = C.default.Messages.UNMUTE_CATEGORY;
                        break;
                    case f.ChannelTypes.GROUP_DM:
                        p = C.default.Messages.MUTE_CONVERSATION, M = C.default.Messages.UNMUTE_CONVERSATION;
                        break;
                    case f.ChannelTypes.DM:
                        p = C.default.Messages.MUTE_CHANNEL.format({
                            name: _
                        }), M = C.default.Messages.UNMUTE_CHANNEL.format({
                            name: _
                        });
                        break;
                    default:
                        p = C.default.Messages.MUTE_CHANNEL_GENERIC, M = C.default.Messages.UNMUTE_CHANNEL_GENERIC
                }
                return n ? (0, u.jsx)(i.MenuItem, {
                    id: "unmute-channel",
                    label: M,
                    subtext: l,
                    action: () => S(!1)
                }) : (0, u.jsx)(i.MenuItem, {
                    id: "mute-channel",
                    label: p,
                    action: () => S(!0),
                    children: A().map(n => {
                        let {
                            value: a,
                            label: l
                        } = n;
                        return (0, u.jsx)(i.MenuItem, {
                            id: "".concat(a),
                            label: l,
                            action: () => (function(n) {
                                e.type === f.ChannelTypes.GUILD_CATEGORY && (0, d.categoryCollapse)(e.id);
                                let u = T(n);
                                r.default.updateChannelOverrideSettings(e.guild_id, e.id, u, E.NotificationLabels.Muted, t)
                            })(a)
                        }, a)
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
            var u = n("37983"),
                a = n("884691"),
                l = n("446674"),
                s = n("77078"),
                i = n("713841"),
                d = n("79112"),
                r = n("988721"),
                o = n("592407"),
                c = n("305961"),
                E = n("957255"),
                N = n("49111"),
                f = n("782340");

            function _(e) {
                let {
                    user: t,
                    guildId: n,
                    channel: _,
                    context: C
                } = e, A = c.default.getGuild(n), T = (0, l.useStateFromStores)([E.default], () => null != A ? E.default.can(N.Permissions.MANAGE_GUILD, A) : null), S = (0, r.useContextIndexState)(_, !0, !0), p = (0, r.useUserIndexState)(!0, !0), {
                    isUserApp: M,
                    isGuildApp: I
                } = a.useMemo(() => {
                    var e, n, u, a;
                    if ((null == t ? void 0 : t.id) == null) return {
                        isGuildApp: !1,
                        isUserApp: !1
                    };
                    let l = Object.values(null !== (u = null === (e = S.result) || void 0 === e ? void 0 : e.sections) && void 0 !== u ? u : {}),
                        s = Object.values(null !== (a = null === (n = p.result) || void 0 === n ? void 0 : n.sections) && void 0 !== a ? a : {});
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
                }, [S, p, null == t ? void 0 : t.id]), g = a.useCallback(() => {
                    (null == A ? void 0 : A.id) != null && (o.default.open(A.id, N.GuildSettingsSections.INTEGRATIONS), i.default.setSection(N.IntegrationSettingsSections.APPLICATION, null == t ? void 0 : t.id))
                }, [null == t ? void 0 : t.id, null == A ? void 0 : A.id]), m = a.useCallback(() => {
                    d.default.open(N.UserSettingsSections.AUTHORIZED_APPS)
                }, []), R = C === N.AppContext.POPOUT;
                if (!(null == t ? void 0 : t.bot) || !T || R || !I && !M) return null;
                let U = [];
                return I && U.push((0, u.jsx)(s.MenuItem, {
                    id: "manage-integration",
                    label: f.default.Messages.MANAGE_INTEGRATION,
                    action: g
                }, "manage-integration")), M && U.push((0, u.jsx)(s.MenuItem, {
                    id: "manage-authorized-app",
                    label: f.default.Messages.MANAGE_AUTHORIZED_APP,
                    action: m
                }, "manage-authorized-app")), U
            }
        },
        242757: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canViewInviteModal: function() {
                    return a
                }
            });
            var u = n("49111");

            function a(e, t, n, a) {
                let l = null != n ? n : t,
                    s = null != l && e.can(u.Permissions.CREATE_INSTANT_INVITE, l);
                return s || null != t && null != t.vanityURLCode || (null == a ? void 0 : a.invite_code) != null
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
                    return E
                },
                fetchUserCountryCode: function() {
                    return N
                }
            });
            var u = n("872717"),
                a = n("913144"),
                l = n("437822"),
                s = n("773163"),
                i = n("49111");
            async function d(e) {
                await u.default.put({
                    url: i.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: s.MessageRequestConsentStatusTypes.ACCEPTED
                    }
                }), a.default.dispatch({
                    type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
                    channelId: e
                })
            }

            function r(e) {
                return u.default.put({
                    url: i.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: s.MessageRequestConsentStatusTypes.UNSPECIFIED
                    }
                })
            }

            function o(e) {
                return u.default.put({
                    url: i.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: s.MessageRequestConsentStatusTypes.PENDING
                    }
                })
            }

            function c(e) {
                return u.default.delete({
                    url: i.Endpoints.CHANNEL_RECIPIENT_CONSENT(e)
                })
            }

            function E(e) {
                return u.default.put({
                    url: i.Endpoints.CHANNEL_RECIPIENT_REJECT_BATCH(),
                    body: {
                        channel_ids: e
                    }
                })
            }

            function N() {
                l.default.getLocationMetadata()
            }
        },
        773163: function(e, t, n) {
            "use strict";
            var u, a;
            n.r(t), n.d(t, {
                MessageRequestConsentStatusTypes: function() {
                    return u
                }
            }), (a = u || (u = {}))[a.UNSPECIFIED = 0] = "UNSPECIFIED", a[a.PENDING = 1] = "PENDING", a[a.ACCEPTED = 2] = "ACCEPTED", a[a.REJECTED = 3] = "REJECTED"
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
            var u = n("872717"),
                a = n("913144"),
                l = n("49111");

            function s(e, t) {
                return a.default.dispatch({
                    type: "DISMISS_CHANNEL_SAFETY_WARNINGS",
                    channelId: e,
                    warningIds: t
                }), u.default.post({
                    url: l.Endpoints.CHANNEL_SAFETY_WARNINGS_ACK(e),
                    body: {
                        warning_ids: t
                    },
                    oldFormErrors: !0
                })
            }

            function i(e, t, n) {
                a.default.dispatch({
                    type: "CHANNEL_SAFETY_WARNING_FEEDBACK",
                    channelId: e,
                    warningId: t,
                    feedbackType: n
                })
            }

            function d(e) {
                a.default.dispatch({
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
            var u, a, l, s, i = n("446674"),
                d = n("913144"),
                r = n("42203");
            (u = l || (l = {}))[u.STRANGER_DANGER = 1] = "STRANGER_DANGER", (a = s || (s = {}))[a.UPVOTE = 0] = "UPVOTE", a[a.DOWNVOTE = 1] = "DOWNVOTE";
            let o = [],
                c = {};

            function E(e) {
                let {
                    safetyWarnings: t
                } = e;
                null != t && (c[e.id] = t), null == t && null != c[e.id] && delete c[e.id]
            }

            function N() {
                c = {}, Object.values(r.default.getMutablePrivateChannels()).forEach(e => {
                    E(e)
                })
            }
            class f extends i.default.Store {
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
            var _ = new f(d.default, {
                CHANNEL_CREATE: function(e) {
                    E(e.channel)
                },
                CHANNEL_DELETE: function(e) {
                    null != c[e.channel.id] && delete c[e.channel.id]
                },
                CHANNEL_UPDATES: function(e) {
                    e.channels.forEach(e => {
                        E(e)
                    })
                },
                CONNECTION_OPEN: N,
                CONNECTION_OPEN_SUPPLEMENTAL: N,
                CHANNEL_SAFETY_WARNING_FEEDBACK: function(e) {
                    let {
                        channelId: t,
                        warningId: n,
                        feedbackType: u
                    } = e, a = c[t];
                    null != a && (c[t] = a.map(e => e.id === n ? {
                        ...e,
                        feedback_type: u
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
                    } = e, u = c[t];
                    if (null == u) return;
                    let a = Date.now().toString();
                    c[t] = u.map(e => n.includes(e.id) ? {
                        ...e,
                        dismiss_timestamp: a
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
            var u = n("37983"),
                a = n("884691"),
                l = n("627445"),
                s = n.n(l),
                i = n("446674"),
                d = n("77078"),
                r = n("240249"),
                o = n("916565"),
                c = n("355263"),
                E = n("633043"),
                N = n("823026"),
                f = n("305961"),
                _ = n("697218"),
                C = n("317041"),
                A = n("782340"),
                T = n("205735"),
                S = e => {
                    let t, {
                            commandType: n,
                            commandTargetId: l,
                            channel: S,
                            guildId: p,
                            onHeightUpdate: M,
                            context: I
                        } = e,
                        g = (0, i.useStateFromStores)([f.default], () => f.default.getGuild(null != p ? p : S.guild_id)),
                        m = (0, i.useStateFromStores)([_.default], () => _.default.getUser(l)),
                        R = (0, N.default)({
                            user: m,
                            guildId: null == g ? void 0 : g.id,
                            channel: S,
                            context: I
                        }),
                        {
                            commands: U,
                            sectionDescriptors: v,
                            loading: O
                        } = r.useDiscovery(S, {
                            commandType: n
                        }, {
                            limit: C.CONTEXT_MENU_COMMANDS_QUERY_LIMIT
                        }),
                        {
                            sections: h
                        } = a.useMemo(() => {
                            let e = {};
                            return v.forEach(t => {
                                e[t.id] = t
                            }), {
                                sections: e
                            }
                        }, [v]),
                        b = a.useRef(O.current);
                    a.useEffect(() => {
                        O.current !== b.current && (b.current = O.current, null == M || M())
                    }, [O, M]);
                    let y = a.useCallback(e => {
                        s(null != S, "menu item should not show if channel is null");
                        let t = h[e.applicationId],
                            n = null != t ? (0, c.getIconComponent)(t) : void 0;
                        return (0, u.jsx)(d.MenuItem, {
                            id: e.id,
                            label: e.displayName,
                            showIconFirst: !0,
                            icon: () => null != n ? (0, u.jsx)(n, {
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
                                        guild: g
                                    },
                                    commandTargetId: l
                                })
                            }
                        }, e.id)
                    }, [S, g, l, h]);
                    return O.current ? t = (0, u.jsx)(d.MenuItem, {
                        id: "menu-commands-placeholder",
                        render: () => (0, u.jsx)(E.default, {}),
                        disabled: !0
                    }, "menu-commands-placeholder") : (t = 0 === U.length ? (0, u.jsx)(d.MenuItem, {
                        id: "menu-commands-empty",
                        label: A.default.Messages.APPLICATION_COMMAND_NO_COMMANDS,
                        disabled: !0
                    }, "menu-commands-empty") : U.map(y), null != R && (t = (0, u.jsxs)(u.Fragment, {
                        children: [t, (0, u.jsx)(d.MenuSeparator, {}, "separator"), R]
                    }))), (0, u.jsx)(d.MenuItem, {
                        id: "apps",
                        label: A.default.Messages.APPS,
                        listClassName: T.list,
                        children: t
                    })
                }
        }
    }
]);