(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["67581"], {
        575351: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            }), n("222007");
            var l = n("37983"),
                u = n("884691"),
                r = n("446674"),
                i = n("77078"),
                a = n("679653"),
                d = n("929278"),
                s = n("347895"),
                o = n("848848"),
                c = n("735251"),
                E = n("534222"),
                f = n("592407"),
                _ = n("610730"),
                N = n("271938"),
                h = n("305961"),
                T = n("957255"),
                S = n("49111"),
                m = n("782340"),
                C = n("413075"),
                v = e => {
                    let {
                        channel: t,
                        onClose: n,
                        onConfirm: v,
                        transitionState: g,
                        isFavorites: D
                    } = e, I = (0, a.default)(t, !0), A = t.id, R = t.isForumPost(), M = (0, r.useStateFromStores)([h.default], () => h.default.getGuild(t.getGuildId())), L = (0, E.useGuildChannelScheduledEvents)(A), {
                        isSubscriptionGated: O
                    } = (0, o.default)(t.id), y = (0, c.default)(M, t), [p, G] = u.useState(null), U = (0, r.useStateFromStores)([N.default], () => t.isOwner(N.default.getId()), [t]), w = (0, r.useStateFromStores)([T.default], () => T.default.can(t.isThread() ? S.Permissions.MANAGE_THREADS : S.Permissions.MANAGE_CHANNELS, t), [t]), H = (0, r.useStateFromStores)([_.default], () => {
                        var e;
                        return null !== (e = _.default.getCount(t.id)) && void 0 !== e ? e : 0
                    }, [t.id]), F = R && (w || U && H < 1), B = L.length > 0 && (t.type === S.ChannelTypes.GUILD_VOICE || t.type === S.ChannelTypes.GUILD_STAGE_VOICE);
                    if (u.useEffect(() => {
                            (async () => {
                                let e = await (0, d.isDefaultChannelThresholdMetAfterDelete)(t.getGuildId(), A);
                                if (!e) {
                                    G("default");
                                    return
                                }
                                let n = await (0, s.getBlockForChannelDeletion)(t.getGuildId(), A);
                                if (!1 !== n) {
                                    G(n);
                                    return
                                }
                            })()
                        }, [t, A]), null != p) {
                        let e;
                        let t = m.default.Messages.DELETE_DEFAULT_CHANNEL_BODY;
                        return e = "todo" === p ? m.default.Messages.DESIGNATE_OTHER_CHANNEL_GUIDE_TODO : "resource" === p ? m.default.Messages.DESIGNATE_OTHER_CHANNEL_GUIDE_RESOURCE : m.default.Messages.DESIGNATE_OTHER_CHANNEL_ONBOARDING, (0, l.jsxs)(i.ModalRoot, {
                            transitionState: g,
                            "aria-label": m.default.Messages.CANNOT_DELETE_CHANNEL,
                            children: [(0, l.jsx)(i.ModalHeader, {
                                separator: !1,
                                children: (0, l.jsx)(i.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: m.default.Messages.CANNOT_DELETE_CHANNEL
                                })
                            }), (0, l.jsxs)(i.ModalContent, {
                                className: C.modalContent,
                                children: [(0, l.jsx)(i.Text, {
                                    variant: "text-md/normal",
                                    children: t
                                }), (0, l.jsx)(i.Text, {
                                    variant: "text-md/normal",
                                    children: e.format({
                                        onClick: () => {
                                            null != M && (f.default.open(M.id, S.GuildSettingsSections.ONBOARDING), null == n || n())
                                        }
                                    })
                                })]
                            }), (0, l.jsx)(i.ModalFooter, {
                                children: (0, l.jsx)(i.Button, {
                                    onClick: n,
                                    children: m.default.Messages.OKAY
                                })
                            })]
                        })
                    }
                    if (null == M) return null;
                    if (M.hasFeature(S.GuildFeatures.COMMUNITY) && (M.rulesChannelId === A || M.publicUpdatesChannelId === A)) {
                        let e = M.rulesChannelId === A,
                            t = e ? m.default.Messages.DELETE_RULES_CHANNEL_BODY : m.default.Messages.DELETE_UPDATES_CHANNEL_BODY;
                        return (0, l.jsxs)(i.ModalRoot, {
                            transitionState: g,
                            "aria-label": m.default.Messages.CANNOT_DELETE_CHANNEL,
                            children: [(0, l.jsx)(i.ModalHeader, {
                                separator: !1,
                                children: (0, l.jsx)(i.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: m.default.Messages.CANNOT_DELETE_CHANNEL
                                })
                            }), (0, l.jsxs)(i.ModalContent, {
                                children: [(0, l.jsx)(i.Text, {
                                    variant: "text-md/normal",
                                    className: C.modalText,
                                    children: t
                                }), (0, l.jsx)(i.Text, {
                                    variant: "text-md/normal",
                                    className: C.modalText,
                                    children: m.default.Messages.DESIGNATE_OTHER_CHANNEL.format({
                                        onClick: () => {
                                            f.default.open(M.id, S.GuildSettingsSections.COMMUNITY), null == n || n()
                                        }
                                    })
                                })]
                            }), (0, l.jsx)(i.ModalFooter, {
                                children: (0, l.jsx)(i.Button, {
                                    onClick: n,
                                    children: m.default.Messages.OKAY
                                })
                            })]
                        })
                    } {
                        let {
                            deleteText: e,
                            deleteBody: u
                        } = (() => {
                            if (t.type === S.ChannelTypes.GUILD_CATEGORY) return {
                                deleteText: m.default.Messages.DELETE_CATEGORY,
                                deleteBody: D ? m.default.Messages.DELETE_CATEGORY_BODY_FAVORITES.format({
                                    channelName: I
                                }) : m.default.Messages.DELETE_CHANNEL_BODY.format({
                                    channelName: I
                                })
                            };
                            if (t.isForumPost()) return {
                                deleteText: F ? m.default.Messages.DELETE_FORUM_POST : m.default.Messages.DELETE_MESSAGE,
                                deleteBody: F && U && !w ? m.default.Messages.DELETE_FORUM_POST_OP_CONFIRM_BODY.format({
                                    postName: I
                                }) : F ? m.default.Messages.DELETE_FORUM_POST_CONFIRM_BODY.format({
                                    postName: I
                                }) : m.default.Messages.DELETE_FORUM_POST_OP_WITH_REPLIES_CONFIRM_BODY
                            };
                            if (t.isThread()) return {
                                deleteText: m.default.Messages.DELETE_THREAD,
                                deleteBody: D ? m.default.Messages.DELETE_CHANNEL_BODY_FAVORITES.format({
                                    channelName: I
                                }) : m.default.Messages.DELETE_CHANNEL_BODY.format({
                                    channelName: I
                                })
                            };
                            else if (O && y > 0) return {
                                deleteText: m.default.Messages.DELETE_CHANNEL,
                                deleteBody: m.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_DELETE_CHANNEL_BODY.format({
                                    channelName: I,
                                    numGuildRoleSubscriptionMembers: y
                                })
                            };
                            return {
                                deleteText: m.default.Messages.DELETE_CHANNEL,
                                deleteBody: D ? m.default.Messages.DELETE_CHANNEL_BODY_FAVORITES.format({
                                    channelName: I
                                }) : m.default.Messages.DELETE_CHANNEL_BODY.format({
                                    channelName: I
                                })
                            }
                        })();
                        return (0, l.jsxs)(i.ModalRoot, {
                            transitionState: g,
                            "aria-label": e,
                            children: [(0, l.jsx)(i.ModalHeader, {
                                separator: !1,
                                children: (0, l.jsx)(i.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: e
                                })
                            }), (0, l.jsxs)(i.ModalContent, {
                                className: C.modalContent,
                                children: [(0, l.jsx)(i.Text, {
                                    variant: "text-md/normal",
                                    color: "header-primary",
                                    children: u
                                }), B ? (0, l.jsx)(i.Text, {
                                    variant: "text-md/normal",
                                    color: "header-secondary",
                                    className: C.warningText,
                                    children: m.default.Messages.GUILD_EVENT_CHANNEL_DELETE_GUILD_EVENTS.format({
                                        count: L.length
                                    })
                                }) : null]
                            }), (0, l.jsxs)(i.ModalFooter, {
                                children: [(0, l.jsx)(i.Button, {
                                    onClick: v,
                                    color: i.Button.Colors.RED,
                                    children: e
                                }), (0, l.jsx)(i.Button, {
                                    onClick: n,
                                    look: i.Button.Looks.LINK,
                                    color: i.Button.Colors.PRIMARY,
                                    children: m.default.Messages.CANCEL
                                })]
                            })]
                        })
                    }
                }
        },
        962199: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            }), n("222007");
            var l = n("917351"),
                u = n.n(l),
                r = n("446674"),
                i = n("913144"),
                a = n("398604"),
                d = n("813006"),
                s = n("730647");
            let o = !1,
                c = {},
                E = {},
                f = {},
                _ = e => (f[e.guild_scheduled_event.id] = new d.default(e.guild_scheduled_event.guild), E[e.guild_scheduled_event.id] = e.guild_scheduled_event, {
                    channelId: e.directory_channel_id,
                    scheduledEventId: e.entity_id,
                    type: s.DirectoryEntryTypes.GUILD_SCHEDULED_EVENT,
                    authorId: e.author_id,
                    createdAt: e.created_at
                });
            class N extends r.default.Store {
                isFetching() {
                    return o
                }
                getEventDirectoryEntries(e) {
                    if (null != e) return c[e]
                }
                getCachedGuildByEventId(e) {
                    var t;
                    return null !== (t = f[e]) && void 0 !== t ? t : void 0
                }
                getCachedGuildScheduledEventById(e) {
                    var t;
                    return null !== (t = E[e]) && void 0 !== t ? t : void 0
                }
            }
            N.displayName = "EventDirectoryStore";
            var h = new N(i.default, {
                EVENT_DIRECTORY_FETCH_START: function() {
                    o = !0
                },
                EVENT_DIRECTORY_FETCH_SUCCESS: function(e) {
                    let {
                        channelId: t,
                        entries: n
                    } = e;
                    o = !1;
                    let l = u.sortBy([...n], [function(e) {
                            return (0, a.scheduledEventSort)(e.guild_scheduled_event)
                        }]),
                        r = u.map(l, _);
                    c[t] = r
                },
                EVENT_DIRECTORY_FETCH_FAILURE: function() {
                    o = !1
                }
            })
        },
        929278: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isDefaultChannelThresholdMetAfterDelete: function() {
                    return f
                },
                checkDefaultChannelThresholdMetAfterChannelPermissionDeny: function() {
                    return N
                }
            }), n("222007");
            var l = n("316693"),
                u = n("404118"),
                r = n("592407"),
                i = n("305961"),
                a = n("685829"),
                d = n("863636"),
                s = n("380710"),
                o = n("653138"),
                c = n("49111"),
                E = n("782340");
            async function f(e, t) {
                return null == e || await _(e, t, {
                    removingView: !0,
                    removingChat: !0
                })
            }
            async function _(e, t, n) {
                var l;
                let u = i.default.getGuild(e);
                if (null == u) return !0;
                let r = null != u && (null === (l = u.features) || void 0 === l ? void 0 : l.has(c.GuildFeatures.GUILD_ONBOARDING));
                if (!r) return !0;
                r && d.default.shouldFetchPrompts(e) && await (0, a.fetchOnboardingPrompts)(e);
                let E = d.default.getDefaultChannelIds(e),
                    [f, _] = (0, s.getChattableDefaultChannels)(e, E),
                    N = E.includes(t);
                if (!N) return !0;
                let h = n.removingView && _.length - 1 < o.MIN_NUMBER_OF_DEFAULT_CHANNELS_FOR_ONBOARDING,
                    T = (n.removingChat || n.removingView) && f.length - 1 < o.NUM_DEFAULT_CHATTABLE_CHANNELS_MIN;
                return !h && !T
            }
            async function N(e, t, n) {
                let i = e.getGuildId();
                if (null == i) return !0;
                null != n && (t = l.default.filter(t, l.default.invert(n)));
                let a = e.permissionOverwrites[i],
                    d = null != a ? l.default.filter(a.deny, l.default.invert(a.allow)) : l.default.deserialize(0),
                    s = {
                        removingView: l.default.has(t, c.Permissions.VIEW_CHANNEL) && !l.default.has(d, c.Permissions.VIEW_CHANNEL),
                        removingChat: !1
                    };
                if (e.isForumLikeChannel() ? s.removingChat = l.default.has(t, c.Permissions.SEND_MESSAGES_IN_THREADS) && !l.default.has(d, c.Permissions.SEND_MESSAGES_IN_THREADS) : s.removingChat = l.default.has(t, c.Permissions.SEND_MESSAGES) && !l.default.has(d, c.Permissions.SEND_MESSAGES), !s.removingChat && !s.removingView) return !0;
                let o = await _(i, e.id, s);
                return !!o || (u.default.show({
                    title: E.default.Messages.CANNOT_CHANGE_CHANNEL_PERMS,
                    body: E.default.Messages.ONBOARDING_CHANNEL_THRESHOLD_WARNING.format({
                        onClick: () => {
                            u.default.close(), r.default.open(i, c.GuildSettingsSections.ONBOARDING)
                        }
                    })
                }), !1)
            }
        },
        347895: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchGuildHomeSettings: function() {
                    return h
                },
                fetchNewMemberActions: function() {
                    return T
                },
                selectHomeResourceChannel: function() {
                    return S
                },
                selectNewMemberActionChannel: function() {
                    return m
                },
                completeNewMemberAction: function() {
                    return C
                },
                getBlockForChannelDeletion: function() {
                    return v
                }
            }), n("808653");
            var l = n("872717"),
                u = n("913144"),
                r = n("819689"),
                i = n("115718"),
                a = n("38654"),
                d = n("144491"),
                s = n("42203"),
                o = n("599110"),
                c = n("698882"),
                E = n("129092"),
                f = n("675305"),
                _ = n("290886"),
                N = n("49111");
            let h = async e => {
                u.default.dispatch({
                    type: "GUILD_HOME_SETTINGS_FETCH_START",
                    guildId: e
                });
                try {
                    let t = await l.default.get({
                            url: N.Endpoints.GUILD_HOME_SETTINGS(e),
                            oldFormErrors: !0
                        }),
                        n = (0, E.settingsFromServer)(t.body);
                    return u.default.dispatch({
                        type: "GUILD_HOME_SETTINGS_FETCH_SUCCESS",
                        guildId: e,
                        homeSettings: n
                    }), n
                } catch (t) {
                    u.default.dispatch({
                        type: "GUILD_HOME_SETTINGS_FETCH_FAIL",
                        guildId: e
                    })
                }
            }, T = async e => {
                if (!a.default.isFullServerPreview(e)) {
                    u.default.dispatch({
                        type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_START",
                        guildId: e
                    });
                    try {
                        let t = await l.default.get({
                                url: N.Endpoints.GUILD_MEMBER_ACTIONS(e),
                                oldFormErrors: !0
                            }),
                            n = (0, E.actionsFromServer)(t.body);
                        return u.default.dispatch({
                            type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS",
                            guildId: e,
                            memberActions: n
                        }), n
                    } catch (t) {
                        u.default.dispatch({
                            type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL",
                            guildId: e
                        })
                    }
                }
            }, S = function(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                if (u.default.dispatch({
                        type: "SELECT_HOME_RESOURCE_CHANNEL",
                        guildId: e,
                        channelId: t
                    }), null == t) return;
                let l = s.default.getChannel(t),
                    E = c.default.getResourceForChannel(e, t);
                null != e && !a.default.isFullServerPreview(e) && null != l && null != E && o.default.track(N.AnalyticEvents.SERVER_GUIDE_CHANNEL_SELECTED, {
                    guild_id: e,
                    channel_id: l.id,
                    server_guide_channel_type: "resource",
                    channel_action_type: -1
                }), n && (0, d.transitionToChannel)(t), r.default.jumpToMessage({
                    channelId: t,
                    messageId: t,
                    flash: !1,
                    jumpType: i.JumpTypes.INSTANT
                })
            }, m = (e, t) => {
                u.default.dispatch({
                    type: "SELECT_NEW_MEMBER_ACTION_CHANNEL",
                    guildId: e,
                    channelId: t
                });
                let n = s.default.getChannel(t),
                    l = c.default.getActionForChannel(e, t);
                null != e && !a.default.isFullServerPreview(e) && null != n && null != l && o.default.track(N.AnalyticEvents.SERVER_GUIDE_CHANNEL_SELECTED, {
                    guild_id: e,
                    channel_id: n.id,
                    server_guide_channel_type: "member action",
                    channel_action_type: l.actionType
                }), (0, d.transitionToChannel)(t)
            }, C = (e, t) => {
                if (u.default.dispatch({
                        type: "COMPLETE_NEW_MEMBER_ACTION",
                        guildId: e,
                        channelId: t
                    }), a.default.isFullServerPreview(e)) return;
                let n = s.default.getChannel(t),
                    r = c.default.getActionForChannel(e, t);
                if (null != n && null != r) {
                    var i, d;
                    let t = Object.keys(null !== (i = f.default.getCompletedActions(e)) && void 0 !== i ? i : {}),
                        l = null !== (d = c.default.getNewMemberActions(e)) && void 0 !== d ? d : [];
                    o.default.track(N.AnalyticEvents.SERVER_GUIDE_ACTION_COMPLETED, {
                        guild_id: n.guild_id,
                        channel_id: n.id,
                        channel_action_type: r.actionType,
                        has_completed_all: l.reduce((e, n) => e && t.includes(n.channelId), !0)
                    })
                }
                l.default.post({
                    url: N.Endpoints.GUILD_MEMBER_ACTION_UPDATE(e, t)
                })
            };
            async function v(e, t) {
                if (null == e) return !1;
                let n = (0, _.canSeeOnboardingHome)(e);
                if (!n) return !1;
                let l = c.default.getSettings(e);
                return l === c.NO_SETTINGS && (await h(e), l = c.default.getSettings(e)), l !== c.NO_SETTINGS && null != l && (null != l.newMemberActions && null != l.newMemberActions.find(e => e.channelId === t) ? "todo" : null != l.resourceChannels && null != l.resourceChannels.find(e => e.channelId === t) && "resource")
            }
        },
        129092: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                WELCOME_MESSAGE_MIN_LENGTH: function() {
                    return s
                },
                WELCOME_MESSAGE_MAX_LENGTH: function() {
                    return o
                },
                NEW_MEMBER_ACTION_TITLE_MIN_LENGTH: function() {
                    return c
                },
                NEW_MEMBER_ACTION_TITLE_MAX_LENGTH: function() {
                    return E
                },
                NEW_MEMBER_ACTION_MAX: function() {
                    return f
                },
                RESOURCE_CHANNEL_TITLE_MIN_LENGTH: function() {
                    return _
                },
                RESOURCE_CHANNEL_TITLE_MAX_LENGTH: function() {
                    return N
                },
                RESOURCE_CHANNEL_DESCRIPTION_MAX_LENGTH: function() {
                    return h
                },
                RESOURCE_CHANNEL_MAX: function() {
                    return T
                },
                NewMemberActionTypes: function() {
                    return u
                },
                newMemberActionFromServer: function() {
                    return S
                },
                resourceChannelFromServer: function() {
                    return m
                },
                settingsFromServer: function() {
                    return C
                },
                settingsToServer: function() {
                    return v
                },
                actionsFromServer: function() {
                    return g
                },
                isWelcomeMessageEmpty: function() {
                    return D
                },
                isSettingsEmpty: function() {
                    return I
                },
                isSettingsValid: function() {
                    return A
                },
                isChannelValidForResourceChannel: function() {
                    return R
                },
                isChannelValidForNewMemberAction: function() {
                    return M
                }
            });
            var l, u, r = n("42203"),
                i = n("449008"),
                a = n("991170"),
                d = n("49111");
            let s = 7,
                o = 300,
                c = 7,
                E = 60,
                f = 5,
                _ = 1,
                N = 30,
                h = 200,
                T = 7;

            function S(e) {
                var t;
                return {
                    channelId: e.channel_id,
                    actionType: e.action_type,
                    title: e.title,
                    description: e.description,
                    emoji: null == e.emoji ? null : {
                        id: e.emoji.id,
                        name: e.emoji.name,
                        animated: e.emoji.animated
                    },
                    icon: null !== (t = e.icon) && void 0 !== t ? t : null
                }
            }

            function m(e) {
                var t, n;
                return {
                    channelId: e.channel_id,
                    title: e.title,
                    description: null !== (t = e.description) && void 0 !== t ? t : "",
                    emoji: null == e.emoji ? null : {
                        id: e.emoji.id,
                        name: e.emoji.name,
                        animated: e.emoji.animated
                    },
                    icon: null !== (n = e.icon) && void 0 !== n ? n : null
                }
            }

            function C(e) {
                if (null == e) return null;
                let {
                    welcome_message: t,
                    new_member_actions: n,
                    resource_channels: l,
                    enabled: u
                } = e, a = {
                    authorIds: t.author_ids,
                    message: t.message
                }, d = n.filter(e => (0, i.isNotNullish)(r.default.getChannel(e.channel_id))).map(S), s = l.filter(e => (0, i.isNotNullish)(r.default.getChannel(e.channel_id))).map(m);
                return {
                    welcomeMessage: a,
                    newMemberActions: d,
                    resourceChannels: s,
                    enabled: u
                }
            }

            function v(e, t) {
                var n, l;
                if (null == t) return null;
                let {
                    welcomeMessage: u,
                    newMemberActions: a,
                    resourceChannels: d,
                    enabled: s
                } = t, o = {
                    author_ids: null !== (n = null == u ? void 0 : u.authorIds) && void 0 !== n ? n : [],
                    message: null !== (l = null == u ? void 0 : u.message) && void 0 !== l ? l : ""
                }, c = (null != a ? a : []).filter(e => (0, i.isNotNullish)(r.default.getChannel(e.channelId))).map(e => {
                    var t, n, l, u, r, i, a;
                    return {
                        channel_id: e.channelId,
                        action_type: e.actionType,
                        title: e.title,
                        description: e.description,
                        emoji: {
                            id: null !== (u = null === (t = e.emoji) || void 0 === t ? void 0 : t.id) && void 0 !== u ? u : void 0,
                            name: null !== (r = null === (n = e.emoji) || void 0 === n ? void 0 : n.name) && void 0 !== r ? r : void 0,
                            animated: null !== (i = null === (l = e.emoji) || void 0 === l ? void 0 : l.animated) && void 0 !== i ? i : void 0
                        },
                        icon: null !== (a = e.icon) && void 0 !== a ? a : void 0
                    }
                }), E = (null != d ? d : []).filter(e => (0, i.isNotNullish)(r.default.getChannel(e.channelId))).map(e => {
                    var t, n, l, u, r, i, a;
                    return {
                        channel_id: e.channelId,
                        title: e.title,
                        description: e.description,
                        emoji: {
                            id: null !== (u = null === (t = e.emoji) || void 0 === t ? void 0 : t.id) && void 0 !== u ? u : void 0,
                            name: null !== (r = null === (n = e.emoji) || void 0 === n ? void 0 : n.name) && void 0 !== r ? r : void 0,
                            animated: null !== (i = null === (l = e.emoji) || void 0 === l ? void 0 : l.animated) && void 0 !== i ? i : void 0
                        },
                        icon: null !== (a = e.icon) && void 0 !== a ? a : void 0
                    }
                });
                return {
                    guild_id: e,
                    welcome_message: o,
                    new_member_actions: c,
                    resource_channels: E,
                    enabled: s
                }
            }(l = u || (u = {}))[l.VIEW = 0] = "VIEW", l[l.CHAT = 1] = "CHAT";
            let g = e => {
                if (null == e) return null;
                let t = {};
                for (let n in e.channel_actions) t[n] = e.channel_actions[n].completed;
                return t
            };

            function D(e) {
                return null == e || (null == e.message || !(e.message.length > 0)) && (null == e.authorIds || !(e.authorIds.length > 0)) && !0
            }

            function I(e) {
                return null == e || !!D(e.welcomeMessage) && (null == e.newMemberActions || !(e.newMemberActions.length > 0)) && (null == e.resourceChannels || !(e.resourceChannels.length > 0)) && !0
            }

            function A(e) {
                var t, n;
                return null != e && (!!I(e) || (null === (t = e.welcomeMessage) || void 0 === t ? void 0 : t.message) != null && !(e.welcomeMessage.message.length < s) && (null === (n = e.welcomeMessage) || void 0 === n ? void 0 : n.authorIds) != null && 0 !== e.welcomeMessage.authorIds.length && null != e.newMemberActions && !(e.newMemberActions.length < 3) && !0)
            }

            function R(e) {
                return e.type === d.ChannelTypes.GUILD_TEXT && !a.default.canEveryoneRole(d.Permissions.SEND_MESSAGES, e) && a.default.canEveryoneRole(d.Permissions.VIEW_CHANNEL, e)
            }

            function M(e) {
                switch (e.type) {
                    case d.ChannelTypes.GUILD_TEXT:
                    case d.ChannelTypes.GUILD_ANNOUNCEMENT:
                    case d.ChannelTypes.GUILD_FORUM:
                    case d.ChannelTypes.GUILD_MEDIA:
                        return a.default.canEveryoneRole(d.Permissions.VIEW_CHANNEL, e);
                    default:
                        return !1
                }
            }
        },
        675305: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            }), n("222007");
            var l = n("446674"),
                u = n("913144");
            let r = {},
                i = {},
                a = new Set;
            class d extends l.default.Store {
                getCompletedActions(e) {
                    return null == e ? null : i[e]
                }
                hasCompletedActionForChannel(e, t) {
                    let n = this.getCompletedActions(e);
                    return null != n && null != n[t]
                }
                getState(e) {
                    return null == e ? {} : {
                        completedActions: i[e],
                        loading: a.has(e)
                    }
                }
            }
            d.displayName = "GuildOnboardingMemberActionStore";
            var s = new d(u.default, {
                GUILD_NEW_MEMBER_ACTIONS_FETCH_START: function(e) {
                    let {
                        guildId: t
                    } = e;
                    a.add(t)
                },
                GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS: function(e) {
                    let {
                        memberActions: t,
                        guildId: n
                    } = e;
                    if (null == t) {
                        i[n] = r;
                        return
                    }
                    i[n] = t, a.delete(n)
                },
                GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL: function(e) {
                    let {
                        guildId: t
                    } = e;
                    a.delete(t)
                },
                GUILD_NEW_MEMBER_ACTIONS_DELETE_SUCCESS: function(e) {
                    let {
                        guildId: t
                    } = e;
                    if (null == i[t]) return !1;
                    delete i[t]
                },
                COMPLETE_NEW_MEMBER_ACTION: function(e) {
                    let {
                        guildId: t,
                        channelId: n
                    } = e;
                    i = {
                        ...i,
                        [t]: {
                            ...i[t],
                            [n]: !0
                        }
                    }
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    if (null == i[t.id]) return !1;
                    delete i[t.id]
                }
            })
        },
        848848: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                },
                getChannelRoleSubscriptionStatus: function() {
                    return o
                }
            });
            var l = n("446674"),
                u = n("203288"),
                r = n("42203"),
                i = n("957255"),
                a = n("49111");
            let d = {
                needSubscriptionToAccess: !1,
                isSubscriptionGated: !1
            };

            function s(e) {
                return (0, l.useStateFromStoresObject)([r.default, u.default, i.default], () => o(e, r.default, u.default, i.default), [e])
            }

            function o(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.default,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.default,
                    l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.default,
                    s = t.getChannel(e);
                if (null == s ? void 0 : s.isRoleSubscriptionTemplatePreviewChannel()) return {
                    isSubscriptionGated: !0,
                    needSubscriptionToAccess: !0
                };
                if (null == s || !n.isChannelGated(s.guild_id, s.id)) return d;
                let o = s.isGuildVocal() ? !l.can(a.Permissions.CONNECT, s) : !l.can(a.Permissions.VIEW_CHANNEL, s);
                return {
                    isSubscriptionGated: !0,
                    needSubscriptionToAccess: o
                }
            }
        },
        795228: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("884691"),
                u = n("446674"),
                r = n("895026"),
                i = n("36402");
            let a = {};

            function d(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = (0, u.useStateFromStores)([i.default], () => i.default.getRoleMemberCount(e));
                return l.useEffect(() => {
                    if (null == e) return;
                    let n = a[e],
                        l = null != n && t > 0 && Date.now() - n < t;
                    !l && (a[e] = Date.now(), r.fetchMemberCounts(e))
                }, [e, t]), n
            }
        },
        735251: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            }), n("222007");
            var l = n("884691"),
                u = n("316693"),
                r = n("828674"),
                i = n("866595"),
                a = n("795228"),
                d = n("49111");

            function s(e, t) {
                let n = (0, a.default)(null == e ? void 0 : e.id);
                return l.useMemo(() => {
                    let l = null != e ? function(e, t) {
                            let n = new Set;
                            for (let l of Object.keys(t.permissionOverwrites)) {
                                let u = e.roles[l],
                                    a = t.permissionOverwrites[l];
                                (0, r.isSubscriptionRole)(u) && (0, i.isChannelAccessGrantedBy)(t, a) && n.add(u)
                            }
                            let l = e.getRole(e.id),
                                a = null != l && !u.default.has(l.permissions, d.Permissions.VIEW_CHANNEL),
                                s = (0, i.isChannelAccessDeniedBy)(t, t.permissionOverwrites[e.id]);
                            if (a && !s)
                                for (let t of Object.values(e.roles))(0, r.isSubscriptionRole)(t) && (0, i.isAllChannelsRole)(t) && n.add(t);
                            return [...n]
                        }(e, t) : [],
                        a = 0;
                    for (let e of l) {
                        let t = e.id;
                        if (null != t) {
                            let e = null == n ? void 0 : n[t];
                            null != e && (a += e)
                        }
                    }
                    return a
                }, [n, e, t])
            }
        },
        757767: function(e, t, n) {
            "use strict";
            var l, u;
            n.r(t), n.d(t, {
                RecurrenceOptions: function() {
                    return l
                }
            }), (u = l || (l = {}))[u.NONE = 0] = "NONE", u[u.WEEKLY = 1] = "WEEKLY", u[u.MONTHLY = 2] = "MONTHLY", u[u.YEARLY = 3] = "YEARLY", u[u.WEEKDAY_ONLY = 4] = "WEEKDAY_ONLY"
        },
        49129: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getNextShownUpcomingEventNoticeType: function() {
                    return a
                }
            });
            var l = n("866227"),
                u = n.n(l),
                r = n("249654"),
                i = n("745049");

            function a(e, t, n, l) {
                let a = u(),
                    d = new Date(e.scheduled_start_time).getTime(),
                    s = {
                        start: d - i.EVENT_STARTING_SOON_WINDOW_MILLISECONDS,
                        end: d
                    };
                if (a.isBetween(s.start, s.end)) {
                    if (null != t) {
                        let e = u(t),
                            n = e.isBetween(s.start, s.end),
                            r = e.isBetween(u(d).subtract(i.ACKED_RECENTLY_WINDOW_DAYS, "days"), d);
                        return n || r && !l ? void 0 : i.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON
                    }
                    return i.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON
                }
                let o = r.default.extractTimestamp(e.id),
                    c = Math.min((null != n ? n : o) + i.NEW_EVENT_WINDOW_MILLISECONDS, d),
                    E = a.isBetween(o, c);
                if (E && null == t && !l) return i.UpcomingGuildEventNoticeTypes.NEW_EVENT
            }
        },
        431934: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("446674"),
                u = n("913144"),
                r = n("271938"),
                i = n("398604"),
                a = n("49129"),
                d = n("745049");
            let s = {},
                o = {};

            function c(e) {
                let t = {
                    ...s
                };
                delete t[e], s = t;
                let n = {
                    ...o
                };
                delete n[e], o = n
            }
            class E extends l.default.PersistedStore {
                initialize(e) {
                    if (null != e) {
                        var t, n;
                        s = null !== (t = e.upcomingEventDismissals) && void 0 !== t ? t : {}, o = null !== (n = e.upcomingEventSeenTimestamps) && void 0 !== n ? n : {}
                    }
                }
                getGuildEventNoticeDismissalTime(e) {
                    return s[e]
                }
                getAllEventDismissals() {
                    return s
                }
                getUpcomingNoticeSeenTime(e) {
                    return o[e]
                }
                getAllUpcomingNoticeSeenTimes() {
                    return o
                }
                getState() {
                    return {
                        upcomingEventDismissals: s,
                        upcomingEventSeenTimestamps: o
                    }
                }
            }
            E.displayName = "UpcomingEventNoticesStore", E.persistKey = "UpcomingEventNotices";
            var f = new E(u.default, {
                UPCOMING_GUILD_EVENT_NOTICE_HIDE: function(e) {
                    let {
                        eventId: t
                    } = e, n = {
                        ...s
                    };
                    n[t] = Date.now(), s = n
                },
                GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
                    let {
                        guildScheduledEvent: t
                    } = e;
                    (t.status === d.GuildScheduledEventStatus.CANCELED || t.status === d.GuildScheduledEventStatus.COMPLETED) && c(t.id)
                },
                GUILD_SCHEDULED_EVENT_DELETE: function(e) {
                    let {
                        guildScheduledEvent: t
                    } = e;
                    c(t.id)
                },
                GUILD_SCHEDULED_EVENT_USER_ADD: function(e) {
                    let {
                        userId: t,
                        guildEventId: n
                    } = e, l = r.default.getId();
                    if (t !== l) return;
                    let u = i.default.getGuildScheduledEvent(n);
                    if (null == u || u.status !== d.GuildScheduledEventStatus.SCHEDULED) return;
                    let c = s[n];
                    if (null != c) return;
                    let E = o[n],
                        f = (0, a.getNextShownUpcomingEventNoticeType)(u, void 0, E, !1);
                    if (f === d.UpcomingGuildEventNoticeTypes.NEW_EVENT) {
                        let e = {
                            ...s
                        };
                        e[n] = Date.now(), s = e
                    }
                },
                UPCOMING_GUILD_EVENT_NOTICE_SEEN: function(e) {
                    let {
                        guildEventId: t
                    } = e, n = {
                        ...o
                    };
                    n[t] = Date.now(), o = n
                }
            })
        },
        397680: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                },
                getEventException: function() {
                    return i
                }
            });
            var l = n("446674"),
                u = n("398604");

            function r(e, t) {
                let n = (0, l.useStateFromStoresArray)([u.default], () => {
                    var e, n;
                    return null !== (n = null === (e = u.default.getGuildScheduledEvent(t)) || void 0 === e ? void 0 : e.guild_scheduled_event_exceptions) && void 0 !== n ? n : []
                });
                return a(n, e)
            }

            function i(e, t) {
                var n, l;
                let r = null !== (l = null === (n = u.default.getGuildScheduledEvent(t)) || void 0 === n ? void 0 : n.guild_scheduled_event_exceptions) && void 0 !== l ? l : [];
                return a(r, e)
            }

            function a(e, t) {
                let n = null == e ? void 0 : e.find(e => e.event_exception_id === t);
                return n
            }
        },
        466148: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                },
                getEventSchedule: function() {
                    return o
                }
            });
            var l = n("627445"),
                u = n.n(l),
                r = n("446674"),
                i = n("398604"),
                a = n("397680"),
                d = n("822516");

            function s(e, t, n) {
                var l;
                let s = null !== (l = (0, r.useStateFromStores)([i.default], () => i.default.getGuildScheduledEvent(e))) && void 0 !== l ? l : n;
                u(null != s, "Event must be defined"), t = null != t ? t : (0, d.getNextRecurrenceIdInEvent)(s);
                let o = (0, a.default)(t, e);
                return c(s, o, t)
            }

            function o(e, t) {
                let n = (0, a.getEventException)(t, e.id);
                return c(e, n, t)
            }

            function c(e, t, n) {
                if (null == e.recurrence_rule || null == n) return {
                    startTime: new Date(e.scheduled_start_time),
                    endTime: null != e.scheduled_end_time ? new Date(e.scheduled_end_time) : null
                };
                let l = (0, d.getBaseScheduleForRecurrence)(n, e),
                    {
                        startDate: u,
                        endDate: r
                    } = (0, d.getScheduleForRecurrenceWithException)(l, t);
                return {
                    startTime: u.toDate(),
                    endTime: null == r ? void 0 : r.toDate()
                }
            }
        },
        534222: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                },
                useActiveEvent: function() {
                    return C
                },
                useActiveEventsByChannel: function() {
                    return v
                },
                useGuildUpcomingEventsNotice: function() {
                    return g
                },
                useGuildActiveEvent: function() {
                    return D
                },
                useGuildChannelScheduledEvents: function() {
                    return I
                },
                useFirstActiveEventChannel: function() {
                    return A
                },
                useImminentUpcomingGuildEvents: function() {
                    return R
                }
            }), n("222007"), n("808653");
            var l = n("884691"),
                u = n("446674"),
                r = n("962199"),
                i = n("42203"),
                a = n("923959"),
                d = n("305961"),
                s = n("957255"),
                o = n("449008"),
                c = n("398604"),
                E = n("49129"),
                f = n("431934"),
                _ = n("466148"),
                N = n("822516"),
                h = n("745049"),
                T = n("49111");
            let S = [];

            function m(e, t) {
                return (0, u.useStateFromStoresArray)([d.default, r.default, c.default, s.default, i.default, a.default], () => {
                    let n = d.default.getGuild(e);
                    if (null == n) return S;
                    let l = n.hasFeature(T.GuildFeatures.HUB);
                    if (l) {
                        var u, E;
                        let e = null === (u = a.default.getDefaultChannel(n.id)) || void 0 === u ? void 0 : u.id,
                            t = null !== (E = r.default.getEventDirectoryEntries(e)) && void 0 !== E ? E : [];
                        return t.map(e => {
                            let t = e.scheduledEventId,
                                n = c.default.getGuildScheduledEvent(t);
                            return null != n ? n : r.default.getCachedGuildScheduledEventById(t)
                        }).filter(o.isNotNullish)
                    }
                    let f = c.default.getGuildScheduledEventsByIndex(null != t ? t : c.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(n.id));
                    return f.filter(e => {
                        let t = e.channel_id;
                        if (null == t) return !0;
                        let n = i.default.getChannel(t);
                        return s.default.can(T.Permissions.VIEW_CHANNEL, n)
                    })
                }, [t, e])
            }

            function C(e) {
                return (0, u.useStateFromStores)([c.default, i.default, s.default], () => {
                    let t = i.default.getChannel(e);
                    if (!s.default.can(T.Permissions.VIEW_CHANNEL, t)) return null;
                    let n = null == t ? void 0 : t.guild_id;
                    if (null == n) return null;
                    let l = c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.CHANNEL_EVENT_ACTIVE(e));
                    return l.length > 0 ? l[0] : null
                }, [e])
            }

            function v(e) {
                let t = (0, u.useStateFromStoresArray)([c.default], () => c.default.getGuildScheduledEventsForGuild(e), [e]),
                    n = l.useMemo(() => {
                        let e = new Map;
                        return t.forEach(t => {
                            let n = t.channel_id;
                            null != n && e.set(n, t)
                        }), e
                    }, [t]);
                return n
            }

            function g(e) {
                var t, n;
                let l = (t = e, (0, u.useStateFromStoresArray)([c.default, i.default, s.default], () => {
                        let e = c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(t));
                        return e.filter(e => {
                            if (e.entity_type === h.GuildScheduledEventEntityTypes.NONE || e.status !== h.GuildScheduledEventStatus.SCHEDULED) return !1;
                            if (null == e.channel_id) return !0;
                            let t = i.default.getChannel(e.channel_id);
                            return s.default.can(T.Permissions.VIEW_CHANNEL, t)
                        })
                    }, [t])),
                    r = (0, u.useStateFromStoresObject)([f.default], () => f.default.getAllEventDismissals()),
                    a = (0, u.useStateFromStoresObject)([f.default], () => f.default.getAllUpcomingNoticeSeenTimes()),
                    d = (0, u.useStateFromStoresObject)([c.default], () => null == l ? {} : l.reduce((e, t) => {
                        let n = (0, N.getNextRecurrenceIdInEvent)(t);
                        return {
                            ...e,
                            [t.id]: c.default.isInterestedInEventRecurrence(t.id, n)
                        }
                    }, {}), [l]);
                if (null != l && null != d)
                    for (let e = 0; e < l.length; e++) {
                        ;
                        let t = l[e],
                            u = r[t.id],
                            i = a[t.id],
                            s = null !== (n = d[t.id]) && void 0 !== n && n,
                            o = (0, E.getNextShownUpcomingEventNoticeType)(t, u, i, s);
                        if (null != o) return {
                            upcomingEvent: t,
                            noticeType: o
                        }
                    }
            }

            function D(e) {
                return (0, u.useStateFromStores)([c.default, i.default, s.default], () => {
                    let t = c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e));
                    return t.find(e => {
                        if (e.entity_type === h.GuildScheduledEventEntityTypes.NONE || !(0, c.isGuildScheduledEventActive)(e)) return !1;
                        if (null == e.channel_id) return !0;
                        let t = i.default.getChannel(e.channel_id);
                        return s.default.can(T.Permissions.VIEW_CHANNEL, t)
                    })
                }, [e])
            }

            function I(e) {
                return (0, u.useStateFromStores)([c.default], () => c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)), [e])
            }

            function A(e) {
                return (0, u.useStateFromStores)([i.default, c.default], () => {
                    let t = c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e)).find(e => {
                        let t = i.default.getChannel(e.channel_id);
                        return null != t
                    });
                    return i.default.getChannel(null == t ? void 0 : t.channel_id)
                }, [e])
            }

            function R(e) {
                let [t, n] = l.useState(() => Date.now());
                l.useEffect(() => {
                    let e = setInterval(() => {
                        n(Date.now())
                    }, 9e5);
                    return () => clearInterval(e)
                }, []);
                let r = (0, u.useStateFromStores)([c.default], () => null == e ? [] : c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)), [e, t]),
                    i = l.useMemo(() => r.filter(e => {
                        let {
                            startTime: t,
                            endTime: n
                        } = (0, _.getEventSchedule)(e), {
                            withinStartWindow: l,
                            diffMinutes: u
                        } = (0, N.getEventTimeData)(t.toISOString(), null == n ? void 0 : n.toISOString());
                        return e.status !== h.GuildScheduledEventStatus.ACTIVE && l && u < 15
                    }), [r]);
                return i
            }
        },
        822516: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MAX_DAYS_AHEAD_AN_EVENT_CAN_START: function() {
                    return o
                },
                MAX_DAYS_AHEAD_AN_EVENT_CAN_END: function() {
                    return c
                },
                MAX_YEARS_AHEAD_RECURRING_EVENT: function() {
                    return E
                },
                getInitialEventStartDate: function() {
                    return h
                },
                getEventTimeData: function() {
                    return m
                },
                getBaseScheduleForRecurrence: function() {
                    return v
                },
                getScheduleForRecurrenceWithException: function() {
                    return g
                },
                getScheduleFromEventData: function() {
                    return D
                },
                areDatesIdentical: function() {
                    return I
                },
                areSchedulesIdentical: function() {
                    return A
                },
                getRRule: function() {
                    return R
                },
                generateNextRecurrences: function() {
                    return M
                },
                getNextRecurrenceIdInEvent: function() {
                    return L
                },
                isValidRecurrence: function() {
                    return O
                },
                recurrenceOptionToRecurrenceRule: function() {
                    return p
                },
                recurrenceRuleToOption: function() {
                    return G
                }
            }), n("222007"), n("424973");
            var l = n("917351"),
                u = n("866227"),
                r = n.n(u),
                i = n("614137"),
                a = n("249654"),
                d = n("718517"),
                s = n("757767");
            n("745049");
            let o = 365,
                c = o + 1,
                E = 4,
                f = [i.RRule.MO.weekday, i.RRule.TU.weekday, i.RRule.WE.weekday, i.RRule.TH.weekday, i.RRule.FR.weekday],
                _ = [i.RRule.SU.weekday, i.RRule.MO.weekday, i.RRule.TU.weekday, i.RRule.WE.weekday, i.RRule.TH.weekday],
                N = [i.RRule.TU.weekday, i.RRule.WE.weekday, i.RRule.TH.weekday, i.RRule.FR.weekday, i.RRule.SA.weekday],
                h = () => {
                    let e = r().add(1, "hour"),
                        t = e.hour();
                    return e.minutes() >= 30 && (t += 1), e.hour(t).minutes(0).seconds(0)
                },
                T = (e, t) => e.format(e.get("years") === t.get("years") ? "ddd MMM Do \xb7 LT" : "ddd MMM Do, YYYY \xb7 LT"),
                S = (e, t) => {
                    let n = e.diff(t, "days");
                    return n > 1 ? T(e, t) : e.calendar(t)
                };

            function m(e, t, n) {
                null == n && (n = r());
                let l = r(e),
                    u = null != t && "" !== t ? r(t) : void 0,
                    i = null != t && l.isSame(u, "day");
                return {
                    startDateTimeString: S(l, n),
                    endDateTimeString: null != u ? i ? u.format("LT") : T(u, n) : void 0,
                    currentOrPastEvent: l <= n,
                    upcomingEvent: l <= r().add(1, "hour"),
                    withinStartWindow: l <= r().add(15, "minute"),
                    diffMinutes: l.diff(n, "minutes")
                }
            }

            function C(e, t) {
                let n;
                return null != e && (n = {
                    startDate: r(e),
                    endDate: void 0
                }, null != t && (n.endDate = r(t))), n
            }

            function v(e, t) {
                let n = function(e) {
                        return C(e.scheduled_start_time, e.scheduled_end_time)
                    }(t),
                    l = r(a.default.extractTimestamp(e)),
                    u = (null == n ? void 0 : n.endDate) != null ? l.clone().add(n.endDate.diff(n.startDate)) : void 0;
                return {
                    startDate: l,
                    endDate: u
                }
            }

            function g(e, t) {
                var n;
                if (null == t) return e;
                let l = null !== (n = t.scheduled_end_time) && void 0 !== n ? n : e.endDate;
                return {
                    startDate: null != t.scheduled_start_time ? r(t.scheduled_start_time) : e.startDate,
                    endDate: null != l ? r(l) : void 0
                }
            }

            function D(e) {
                return C(e.scheduledStartTime, e.scheduledEndTime)
            }

            function I(e, t) {
                return null == e || null == t ? null == e && null == t : e.isSame(t)
            }

            function A(e, t) {
                return null == e || null == t ? null == e && null == t : I(e.startDate, t.startDate) && I(e.endDate, t.endDate)
            }

            function R(e) {
                let t = new Date(e.start);
                return t.setMilliseconds(0), new i.RRule({
                    dtstart: t,
                    until: null != e.end ? new Date(e.end) : null,
                    freq: e.frequency,
                    interval: e.interval,
                    byweekday: null != e.byWeekday ? [...e.byWeekday] : null,
                    bymonth: null != e.byMonth ? [...e.byMonth] : null,
                    bymonthday: null != e.byMonthDay ? [...e.byMonthDay] : null,
                    byyearday: null != e.byYearDay ? [...e.byYearDay] : null,
                    count: e.count
                })
            }

            function M(e, t, n) {
                let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    u = [],
                    r = n;
                r.setMilliseconds(0);
                let i = new Date;
                i.setFullYear(i.getFullYear() + E);
                for (let n = 0; n < e && r < i; n++) {
                    let e = t.after(r, 0 === n && !l);
                    if (null == e) break;
                    r = e, u.push(e)
                }
                return u
            }

            function L(e) {
                var t;
                let n = null == (t = e).recurrence_rule ? null : new Date(t.scheduled_start_time);
                return null != n ? a.default.fromTimestamp(Math.floor(n.getTime() / d.default.Millis.SECOND) * d.default.Millis.SECOND) : null
            }

            function O(e, t) {
                if (null == t || null == e) return !1;
                let n = new Date(e.start),
                    l = a.default.extractTimestamp(t),
                    u = new Date(l);
                if (n.getUTCHours() !== u.getUTCHours() || n.getUTCMinutes() !== u.getUTCMinutes() || n.getUTCSeconds() !== u.getUTCSeconds()) return !1;
                switch (e.frequency) {
                    case i.RRule.WEEKLY:
                        return n.getUTCDay() === u.getUTCDay();
                    case i.RRule.YEARLY:
                        return n.getUTCDate() === u.getUTCDate();
                    default:
                        return !0
                }
            }

            function y(e) {
                let t = new i.Weekday(e.toDate().getDay()),
                    n = new i.Weekday(e.toDate().getUTCDay());
                return n.weekday - t.weekday > 0 ? N : n.weekday - t.weekday < 0 ? _ : f
            }

            function p(e, t) {
                var n;
                let l = function(e, t) {
                    let n = y(t),
                        l = t.toDate();
                    switch (l.setMilliseconds(0), e) {
                        case s.RecurrenceOptions.NONE:
                            return null;
                        case s.RecurrenceOptions.WEEKLY:
                            return new i.RRule({
                                dtstart: l,
                                freq: i.RRule.WEEKLY
                            });
                        case s.RecurrenceOptions.YEARLY:
                            return new i.RRule({
                                dtstart: l,
                                freq: i.RRule.YEARLY
                            });
                        case s.RecurrenceOptions.WEEKDAY_ONLY:
                            return new i.RRule({
                                dtstart: l,
                                freq: i.RRule.DAILY,
                                byweekday: n
                            })
                    }
                }(e, t);
                if (null == l) return null;
                let {
                    dtstart: u,
                    until: r,
                    freq: a,
                    interval: d,
                    byweekday: o,
                    bymonth: c,
                    bymonthday: E,
                    byyearday: f,
                    count: _
                } = l.options;
                return {
                    start: u.toISOString(),
                    end: null !== (n = null == r ? void 0 : r.toISOString()) && void 0 !== n ? n : null,
                    frequency: a,
                    interval: d,
                    byWeekday: null != o ? o : null,
                    byMonth: null != c ? c : null,
                    byMonthDay: null != E ? E : null,
                    byYearDay: null != f ? f : null,
                    count: _
                }
            }

            function G(e, t) {
                if (null == t) return s.RecurrenceOptions.NONE;
                let n = R(t);
                switch (n.options.freq) {
                    case i.RRule.WEEKLY:
                        return s.RecurrenceOptions.WEEKLY;
                    case i.RRule.YEARLY:
                        return s.RecurrenceOptions.YEARLY;
                    case i.RRule.DAILY:
                        if (!(0, l.isEqual)(n.options.byweekday, y(e))) return s.RecurrenceOptions.NONE;
                        return s.RecurrenceOptions.WEEKDAY_ONLY;
                    default:
                        return s.RecurrenceOptions.NONE
                }
            }
        },
        895026: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchMemberCounts: function() {
                    return c
                },
                requestMembersForRole: function() {
                    return f
                }
            });
            var l = n("693566"),
                u = n.n(l),
                r = n("872717"),
                i = n("913144"),
                a = n("851387"),
                d = n("36402"),
                s = n("49111");
            async function o(e) {
                try {
                    i.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START",
                        guildId: e
                    });
                    let t = await r.default.get({
                            url: s.Endpoints.GUILD_ROLE_MEMBER_COUNTS(e)
                        }),
                        n = t.body;
                    i.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS",
                        guildId: e,
                        roleMemberCount: n
                    })
                } catch (t) {
                    i.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE",
                        guildId: e
                    })
                }
            }
            async function c(e) {
                d.default.shouldFetch(e) && await o(e)
            }
            let E = new u({
                maxAge: 1e4
            });

            function f(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    l = "".concat(e, "-").concat(t);
                if (!n || null == E.get(l)) {
                    var u, i;
                    return E.set(l, !0), u = e, i = t, r.default.get({
                        url: s.Endpoints.GUILD_ROLE_MEMBER_IDS(u, i)
                    }).then(e => (a.default.requestMembersById(u, e.body, !1), e.body.length))
                }
                return Promise.resolve(null)
            }
        },
        36402: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("446674"),
                u = n("913144");
            let r = {},
                i = {};
            class a extends l.default.Store {
                getRoleMemberCount(e) {
                    return null != e ? r[e] : null
                }
                shouldFetch(e) {
                    if (null == e) return !1;
                    let t = i[e];
                    return null == t || Date.now() - t > 12e4
                }
            }
            a.displayName = "GuildRoleMemberCountStore";
            var d = new a(u.default, {
                GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        roleMemberCount: n
                    } = e;
                    r[t] = n, i[t] = Date.now()
                },
                GUILD_ROLE_MEMBER_COUNT_UPDATE: function(e) {
                    let {
                        guildId: t,
                        roleId: n,
                        count: l
                    } = e, u = r[t];
                    if (null == u) return !1;
                    u[n] = l
                },
                GUILD_ROLE_MEMBER_BULK_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: n,
                        added: l
                    } = e, u = r[t];
                    if (null == u || null == u[n]) return !1;
                    let i = Object.keys(l).length;
                    u[n] += i
                },
                GUILD_ROLE_MEMBER_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: n
                    } = e, l = r[t];
                    if (null == l || null == l[n]) return !1;
                    l[n] = l[n] + 1
                },
                GUILD_ROLE_MEMBER_REMOVE: function(e) {
                    let {
                        guildId: t,
                        roleId: n
                    } = e, l = r[t];
                    if (null == l || null == l[n]) return !1;
                    l[n] = Math.max(l[n] - 1, 0)
                },
                GUILD_ROLE_CREATE: function(e) {
                    let {
                        guildId: t,
                        role: n
                    } = e;
                    null == r[t] && (r[t] = {}), r[t][n.id] = 0
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    delete r[t.id], delete i[t.id]
                }
            })
        }
    }
]);