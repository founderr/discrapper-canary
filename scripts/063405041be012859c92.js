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
                i = n("446674"),
                r = n("77078"),
                a = n("679653"),
                d = n("929278"),
                s = n("347895"),
                o = n("848848"),
                E = n("735251"),
                c = n("534222"),
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
                        transitionState: g
                    } = e, D = (0, a.default)(t, !0), A = t.id, I = t.isForumPost(), M = (0, i.useStateFromStores)([h.default], () => h.default.getGuild(t.getGuildId())), R = (0, c.useGuildChannelScheduledEvents)(A), {
                        isSubscriptionGated: L
                    } = (0, o.default)(t.id), y = (0, E.default)(M, t), [O, p] = u.useState(null), G = (0, i.useStateFromStores)([N.default], () => t.isOwner(N.default.getId()), [t]), U = (0, i.useStateFromStores)([T.default], () => T.default.can(t.isThread() ? S.Permissions.MANAGE_THREADS : S.Permissions.MANAGE_CHANNELS, t), [t]), w = (0, i.useStateFromStores)([_.default], () => {
                        var e;
                        return null !== (e = _.default.getCount(t.id)) && void 0 !== e ? e : 0
                    }, [t.id]), H = I && (U || G && w < 1), F = R.length > 0 && (t.type === S.ChannelTypes.GUILD_VOICE || t.type === S.ChannelTypes.GUILD_STAGE_VOICE);
                    if (u.useEffect(() => {
                            (async () => {
                                let e = await (0, d.isDefaultChannelThresholdMetAfterDelete)(t.getGuildId(), A);
                                if (!e) {
                                    p("default");
                                    return
                                }
                                let n = await (0, s.getBlockForChannelDeletion)(t.getGuildId(), A);
                                if (!1 !== n) {
                                    p(n);
                                    return
                                }
                            })()
                        }, [t, A]), null != O) {
                        let e;
                        let t = m.default.Messages.DELETE_DEFAULT_CHANNEL_BODY;
                        return e = "todo" === O ? m.default.Messages.DESIGNATE_OTHER_CHANNEL_GUIDE_TODO : "resource" === O ? m.default.Messages.DESIGNATE_OTHER_CHANNEL_GUIDE_RESOURCE : m.default.Messages.DESIGNATE_OTHER_CHANNEL_ONBOARDING, (0, l.jsxs)(r.ModalRoot, {
                            transitionState: g,
                            "aria-label": m.default.Messages.CANNOT_DELETE_CHANNEL,
                            children: [(0, l.jsx)(r.ModalHeader, {
                                separator: !1,
                                children: (0, l.jsx)(r.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: m.default.Messages.CANNOT_DELETE_CHANNEL
                                })
                            }), (0, l.jsxs)(r.ModalContent, {
                                className: C.modalContent,
                                children: [(0, l.jsx)(r.Text, {
                                    variant: "text-md/normal",
                                    children: t
                                }), (0, l.jsx)(r.Text, {
                                    variant: "text-md/normal",
                                    children: e.format({
                                        onClick: () => {
                                            null != M && (f.default.open(M.id, S.GuildSettingsSections.ONBOARDING), null == n || n())
                                        }
                                    })
                                })]
                            }), (0, l.jsx)(r.ModalFooter, {
                                children: (0, l.jsx)(r.Button, {
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
                        return (0, l.jsxs)(r.ModalRoot, {
                            transitionState: g,
                            "aria-label": m.default.Messages.CANNOT_DELETE_CHANNEL,
                            children: [(0, l.jsx)(r.ModalHeader, {
                                separator: !1,
                                children: (0, l.jsx)(r.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: m.default.Messages.CANNOT_DELETE_CHANNEL
                                })
                            }), (0, l.jsxs)(r.ModalContent, {
                                children: [(0, l.jsx)(r.Text, {
                                    variant: "text-md/normal",
                                    className: C.modalText,
                                    children: t
                                }), (0, l.jsx)(r.Text, {
                                    variant: "text-md/normal",
                                    className: C.modalText,
                                    children: m.default.Messages.DESIGNATE_OTHER_CHANNEL.format({
                                        onClick: () => {
                                            f.default.open(M.id, S.GuildSettingsSections.COMMUNITY), null == n || n()
                                        }
                                    })
                                })]
                            }), (0, l.jsx)(r.ModalFooter, {
                                children: (0, l.jsx)(r.Button, {
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
                                deleteBody: m.default.Messages.DELETE_CHANNEL_BODY.format({
                                    channelName: D
                                })
                            };
                            if (t.isForumPost()) return {
                                deleteText: H ? m.default.Messages.DELETE_FORUM_POST : m.default.Messages.DELETE_MESSAGE,
                                deleteBody: H && G && !U ? m.default.Messages.DELETE_FORUM_POST_OP_CONFIRM_BODY.format({
                                    postName: D
                                }) : H ? m.default.Messages.DELETE_FORUM_POST_CONFIRM_BODY.format({
                                    postName: D
                                }) : m.default.Messages.DELETE_FORUM_POST_OP_WITH_REPLIES_CONFIRM_BODY
                            };
                            if (t.isThread()) return {
                                deleteText: m.default.Messages.DELETE_THREAD,
                                deleteBody: m.default.Messages.DELETE_CHANNEL_BODY.format({
                                    channelName: D
                                })
                            };
                            else if (L && y > 0) return {
                                deleteText: m.default.Messages.DELETE_CHANNEL,
                                deleteBody: m.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_DELETE_CHANNEL_BODY.format({
                                    channelName: D,
                                    numGuildRoleSubscriptionMembers: y
                                })
                            };
                            return {
                                deleteText: m.default.Messages.DELETE_CHANNEL,
                                deleteBody: m.default.Messages.DELETE_CHANNEL_BODY.format({
                                    channelName: D
                                })
                            }
                        })();
                        return (0, l.jsxs)(r.ModalRoot, {
                            transitionState: g,
                            "aria-label": e,
                            children: [(0, l.jsx)(r.ModalHeader, {
                                separator: !1,
                                children: (0, l.jsx)(r.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: e
                                })
                            }), (0, l.jsxs)(r.ModalContent, {
                                className: C.modalContent,
                                children: [(0, l.jsx)(r.Text, {
                                    variant: "text-md/normal",
                                    color: "header-primary",
                                    children: u
                                }), F ? (0, l.jsx)(r.Text, {
                                    variant: "text-md/normal",
                                    color: "header-secondary",
                                    className: C.warningText,
                                    children: m.default.Messages.GUILD_EVENT_CHANNEL_DELETE_GUILD_EVENTS.format({
                                        count: R.length
                                    })
                                }) : null]
                            }), (0, l.jsxs)(r.ModalFooter, {
                                children: [(0, l.jsx)(r.Button, {
                                    onClick: v,
                                    color: r.Button.Colors.RED,
                                    children: e
                                }), (0, l.jsx)(r.Button, {
                                    onClick: n,
                                    look: r.Button.Looks.LINK,
                                    color: r.Button.Colors.PRIMARY,
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
                i = n("446674"),
                r = n("913144"),
                a = n("398604"),
                d = n("813006"),
                s = n("730647");
            let o = !1,
                E = {},
                c = {},
                f = {},
                _ = e => (f[e.guild_scheduled_event.id] = new d.default(e.guild_scheduled_event.guild), c[e.guild_scheduled_event.id] = e.guild_scheduled_event, {
                    channelId: e.directory_channel_id,
                    scheduledEventId: e.entity_id,
                    type: s.DirectoryEntryTypes.GUILD_SCHEDULED_EVENT,
                    authorId: e.author_id,
                    createdAt: e.created_at
                });
            class N extends i.default.Store {
                isFetching() {
                    return o
                }
                getEventDirectoryEntries(e) {
                    if (null != e) return E[e]
                }
                getCachedGuildByEventId(e) {
                    var t;
                    return null !== (t = f[e]) && void 0 !== t ? t : void 0
                }
                getCachedGuildScheduledEventById(e) {
                    var t;
                    return null !== (t = c[e]) && void 0 !== t ? t : void 0
                }
            }
            N.displayName = "EventDirectoryStore";
            var h = new N(r.default, {
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
                        i = u.map(l, _);
                    E[t] = i
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
                i = n("592407"),
                r = n("305961"),
                a = n("685829"),
                d = n("863636"),
                s = n("380710"),
                o = n("653138"),
                E = n("49111"),
                c = n("782340");
            async function f(e, t) {
                return null == e || await _(e, t, {
                    removingView: !0,
                    removingChat: !0
                })
            }
            async function _(e, t, n) {
                var l;
                let u = r.default.getGuild(e);
                if (null == u) return !0;
                let i = null != u && (null === (l = u.features) || void 0 === l ? void 0 : l.has(E.GuildFeatures.GUILD_ONBOARDING));
                if (!i) return !0;
                i && d.default.shouldFetchPrompts(e) && await (0, a.fetchOnboardingPrompts)(e);
                let c = d.default.getDefaultChannelIds(e),
                    [f, _] = (0, s.getChattableDefaultChannels)(e, c),
                    N = c.includes(t);
                if (!N) return !0;
                let h = n.removingView && _.length - 1 < o.MIN_NUMBER_OF_DEFAULT_CHANNELS_FOR_ONBOARDING,
                    T = (n.removingChat || n.removingView) && f.length - 1 < o.NUM_DEFAULT_CHATTABLE_CHANNELS_MIN;
                return !h && !T
            }
            async function N(e, t, n) {
                let r = e.getGuildId();
                if (null == r) return !0;
                null != n && (t = l.default.filter(t, l.default.invert(n)));
                let a = e.permissionOverwrites[r],
                    d = null != a ? l.default.filter(a.deny, l.default.invert(a.allow)) : l.default.deserialize(0),
                    s = {
                        removingView: l.default.has(t, E.Permissions.VIEW_CHANNEL) && !l.default.has(d, E.Permissions.VIEW_CHANNEL),
                        removingChat: !1
                    };
                if (e.isForumLikeChannel() ? s.removingChat = l.default.has(t, E.Permissions.SEND_MESSAGES_IN_THREADS) && !l.default.has(d, E.Permissions.SEND_MESSAGES_IN_THREADS) : s.removingChat = l.default.has(t, E.Permissions.SEND_MESSAGES) && !l.default.has(d, E.Permissions.SEND_MESSAGES), !s.removingChat && !s.removingView) return !0;
                let o = await _(r, e.id, s);
                return !!o || (u.default.show({
                    title: c.default.Messages.CANNOT_CHANGE_CHANNEL_PERMS,
                    body: c.default.Messages.ONBOARDING_CHANNEL_THRESHOLD_WARNING.format({
                        onClick: () => {
                            u.default.close(), i.default.open(r, E.GuildSettingsSections.ONBOARDING)
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
                i = n("819689"),
                r = n("115718"),
                a = n("38654"),
                d = n("144491"),
                s = n("42203"),
                o = n("599110"),
                E = n("698882"),
                c = n("129092"),
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
                        n = (0, c.settingsFromServer)(t.body);
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
                            n = (0, c.actionsFromServer)(t.body);
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
                    c = E.default.getResourceForChannel(e, t);
                null != e && !a.default.isFullServerPreview(e) && null != l && null != c && o.default.track(N.AnalyticEvents.SERVER_GUIDE_CHANNEL_SELECTED, {
                    guild_id: e,
                    channel_id: l.id,
                    server_guide_channel_type: "resource",
                    channel_action_type: -1
                }), n && (0, d.transitionToChannel)(t), i.default.jumpToMessage({
                    channelId: t,
                    messageId: t,
                    flash: !1,
                    jumpType: r.JumpTypes.INSTANT
                })
            }, m = (e, t) => {
                u.default.dispatch({
                    type: "SELECT_NEW_MEMBER_ACTION_CHANNEL",
                    guildId: e,
                    channelId: t
                });
                let n = s.default.getChannel(t),
                    l = E.default.getActionForChannel(e, t);
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
                    i = E.default.getActionForChannel(e, t);
                if (null != n && null != i) {
                    var r, d;
                    let t = Object.keys(null !== (r = f.default.getCompletedActions(e)) && void 0 !== r ? r : {}),
                        l = null !== (d = E.default.getNewMemberActions(e)) && void 0 !== d ? d : [];
                    o.default.track(N.AnalyticEvents.SERVER_GUIDE_ACTION_COMPLETED, {
                        guild_id: n.guild_id,
                        channel_id: n.id,
                        channel_action_type: i.actionType,
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
                let l = E.default.getSettings(e);
                return l === E.NO_SETTINGS && (await h(e), l = E.default.getSettings(e)), l !== E.NO_SETTINGS && null != l && (null != l.newMemberActions && null != l.newMemberActions.find(e => e.channelId === t) ? "todo" : null != l.resourceChannels && null != l.resourceChannels.find(e => e.channelId === t) && "resource")
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
                    return E
                },
                NEW_MEMBER_ACTION_TITLE_MAX_LENGTH: function() {
                    return c
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
                    return A
                },
                isSettingsValid: function() {
                    return I
                },
                isChannelValidForResourceChannel: function() {
                    return M
                },
                isChannelValidForNewMemberAction: function() {
                    return R
                }
            });
            var l, u, i = n("42203"),
                r = n("449008"),
                a = n("991170"),
                d = n("49111");
            let s = 7,
                o = 300,
                E = 7,
                c = 60,
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
                }, d = n.filter(e => (0, r.isNotNullish)(i.default.getChannel(e.channel_id))).map(S), s = l.filter(e => (0, r.isNotNullish)(i.default.getChannel(e.channel_id))).map(m);
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
                }, E = (null != a ? a : []).filter(e => (0, r.isNotNullish)(i.default.getChannel(e.channelId))).map(e => {
                    var t, n, l, u, i, r, a;
                    return {
                        channel_id: e.channelId,
                        action_type: e.actionType,
                        title: e.title,
                        description: e.description,
                        emoji: {
                            id: null !== (u = null === (t = e.emoji) || void 0 === t ? void 0 : t.id) && void 0 !== u ? u : void 0,
                            name: null !== (i = null === (n = e.emoji) || void 0 === n ? void 0 : n.name) && void 0 !== i ? i : void 0,
                            animated: null !== (r = null === (l = e.emoji) || void 0 === l ? void 0 : l.animated) && void 0 !== r ? r : void 0
                        },
                        icon: null !== (a = e.icon) && void 0 !== a ? a : void 0
                    }
                }), c = (null != d ? d : []).filter(e => (0, r.isNotNullish)(i.default.getChannel(e.channelId))).map(e => {
                    var t, n, l, u, i, r, a;
                    return {
                        channel_id: e.channelId,
                        title: e.title,
                        description: e.description,
                        emoji: {
                            id: null !== (u = null === (t = e.emoji) || void 0 === t ? void 0 : t.id) && void 0 !== u ? u : void 0,
                            name: null !== (i = null === (n = e.emoji) || void 0 === n ? void 0 : n.name) && void 0 !== i ? i : void 0,
                            animated: null !== (r = null === (l = e.emoji) || void 0 === l ? void 0 : l.animated) && void 0 !== r ? r : void 0
                        },
                        icon: null !== (a = e.icon) && void 0 !== a ? a : void 0
                    }
                });
                return {
                    guild_id: e,
                    welcome_message: o,
                    new_member_actions: E,
                    resource_channels: c,
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

            function A(e) {
                return null == e || !!D(e.welcomeMessage) && (null == e.newMemberActions || !(e.newMemberActions.length > 0)) && (null == e.resourceChannels || !(e.resourceChannels.length > 0)) && !0
            }

            function I(e) {
                var t, n;
                return null != e && (!!A(e) || (null === (t = e.welcomeMessage) || void 0 === t ? void 0 : t.message) != null && !(e.welcomeMessage.message.length < s) && (null === (n = e.welcomeMessage) || void 0 === n ? void 0 : n.authorIds) != null && 0 !== e.welcomeMessage.authorIds.length && null != e.newMemberActions && !(e.newMemberActions.length < 3) && !0)
            }

            function M(e) {
                return e.type === d.ChannelTypes.GUILD_TEXT && !a.default.canEveryoneRole(d.Permissions.SEND_MESSAGES, e) && a.default.canEveryoneRole(d.Permissions.VIEW_CHANNEL, e)
            }

            function R(e) {
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
            let i = {},
                r = {},
                a = new Set;
            class d extends l.default.Store {
                getCompletedActions(e) {
                    return null == e ? null : r[e]
                }
                hasCompletedActionForChannel(e, t) {
                    let n = this.getCompletedActions(e);
                    return null != n && null != n[t]
                }
                getState(e) {
                    return null == e ? {} : {
                        completedActions: r[e],
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
                        r[n] = i;
                        return
                    }
                    r[n] = t, a.delete(n)
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
                    if (null == r[t]) return !1;
                    delete r[t]
                },
                COMPLETE_NEW_MEMBER_ACTION: function(e) {
                    let {
                        guildId: t,
                        channelId: n
                    } = e;
                    r = {
                        ...r,
                        [t]: {
                            ...r[t],
                            [n]: !0
                        }
                    }
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    if (null == r[t.id]) return !1;
                    delete r[t.id]
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
                i = n("42203"),
                r = n("957255"),
                a = n("49111");
            let d = {
                needSubscriptionToAccess: !1,
                isSubscriptionGated: !1
            };

            function s(e) {
                return (0, l.useStateFromStoresObject)([i.default, u.default, r.default], () => o(e, i.default, u.default, r.default), [e])
            }

            function o(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.default,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.default,
                    l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r.default,
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
                i = n("895026"),
                r = n("36402");
            let a = {};

            function d(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = (0, u.useStateFromStores)([r.default], () => r.default.getRoleMemberCount(e));
                return l.useEffect(() => {
                    if (null == e) return;
                    let n = a[e],
                        l = null != n && t > 0 && Date.now() - n < t;
                    !l && (a[e] = Date.now(), i.fetchMemberCounts(e))
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
                i = n("828674"),
                r = n("866595"),
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
                                (0, i.isSubscriptionRole)(u) && (0, r.isChannelAccessGrantedBy)(t, a) && n.add(u)
                            }
                            let l = e.getRole(e.id),
                                a = null != l && !u.default.has(l.permissions, d.Permissions.VIEW_CHANNEL),
                                s = (0, r.isChannelAccessDeniedBy)(t, t.permissionOverwrites[e.id]);
                            if (a && !s)
                                for (let t of Object.values(e.roles))(0, i.isSubscriptionRole)(t) && (0, r.isAllChannelsRole)(t) && n.add(t);
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
                i = n("249654"),
                r = n("745049");

            function a(e, t, n, l) {
                let a = u(),
                    d = new Date(e.scheduled_start_time).getTime(),
                    s = {
                        start: d - r.EVENT_STARTING_SOON_WINDOW_MILLISECONDS,
                        end: d
                    };
                if (a.isBetween(s.start, s.end)) {
                    if (null != t) {
                        let e = u(t),
                            n = e.isBetween(s.start, s.end),
                            i = e.isBetween(u(d).subtract(r.ACKED_RECENTLY_WINDOW_DAYS, "days"), d);
                        return n || i && !l ? void 0 : r.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON
                    }
                    return r.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON
                }
                let o = i.default.extractTimestamp(e.id),
                    E = Math.min((null != n ? n : o) + r.NEW_EVENT_WINDOW_MILLISECONDS, d),
                    c = a.isBetween(o, E);
                if (c && null == t && !l) return r.UpcomingGuildEventNoticeTypes.NEW_EVENT
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
                i = n("271938"),
                r = n("398604"),
                a = n("49129"),
                d = n("745049");
            let s = {},
                o = {};

            function E(e) {
                let t = {
                    ...s
                };
                delete t[e], s = t;
                let n = {
                    ...o
                };
                delete n[e], o = n
            }
            class c extends l.default.PersistedStore {
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
            c.displayName = "UpcomingEventNoticesStore", c.persistKey = "UpcomingEventNotices";
            var f = new c(u.default, {
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
                    (t.status === d.GuildScheduledEventStatus.CANCELED || t.status === d.GuildScheduledEventStatus.COMPLETED) && E(t.id)
                },
                GUILD_SCHEDULED_EVENT_DELETE: function(e) {
                    let {
                        guildScheduledEvent: t
                    } = e;
                    E(t.id)
                },
                GUILD_SCHEDULED_EVENT_USER_ADD: function(e) {
                    let {
                        userId: t,
                        guildEventId: n
                    } = e, l = i.default.getId();
                    if (t !== l) return;
                    let u = r.default.getGuildScheduledEvent(n);
                    if (null == u || u.status !== d.GuildScheduledEventStatus.SCHEDULED) return;
                    let E = s[n];
                    if (null != E) return;
                    let c = o[n],
                        f = (0, a.getNextShownUpcomingEventNoticeType)(u, void 0, c, !1);
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
        534222: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                },
                useActiveEvent: function() {
                    return m
                },
                useActiveEventsByChannel: function() {
                    return C
                },
                useGuildUpcomingEventsNotice: function() {
                    return v
                },
                useGuildActiveEvent: function() {
                    return g
                },
                useGuildChannelScheduledEvents: function() {
                    return D
                },
                useFirstActiveEventChannel: function() {
                    return A
                },
                useImminentUpcomingGuildEvents: function() {
                    return I
                }
            }), n("222007"), n("808653");
            var l = n("884691"),
                u = n("446674"),
                i = n("962199"),
                r = n("42203"),
                a = n("923959"),
                d = n("305961"),
                s = n("957255"),
                o = n("449008"),
                E = n("398604"),
                c = n("49129"),
                f = n("431934"),
                _ = n("822516"),
                N = n("745049"),
                h = n("49111");
            let T = [];

            function S(e, t) {
                return (0, u.useStateFromStoresArray)([d.default, i.default, E.default, s.default, r.default, a.default], () => {
                    let n = d.default.getGuild(e);
                    if (null == n) return T;
                    let l = n.hasFeature(h.GuildFeatures.HUB);
                    if (l) {
                        var u, c;
                        let e = null === (u = a.default.getDefaultChannel(n.id)) || void 0 === u ? void 0 : u.id,
                            t = null !== (c = i.default.getEventDirectoryEntries(e)) && void 0 !== c ? c : [];
                        return t.map(e => {
                            let t = e.scheduledEventId,
                                n = E.default.getGuildScheduledEvent(t);
                            return null != n ? n : i.default.getCachedGuildScheduledEventById(t)
                        }).filter(o.isNotNullish)
                    }
                    let f = E.default.getGuildScheduledEventsByIndex(null != t ? t : E.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(n.id));
                    return f.filter(e => {
                        let t = e.channel_id;
                        if (null == t) return !0;
                        let n = r.default.getChannel(t);
                        return s.default.can(h.Permissions.VIEW_CHANNEL, n)
                    })
                }, [t, e])
            }

            function m(e) {
                return (0, u.useStateFromStores)([E.default, r.default, s.default], () => {
                    let t = r.default.getChannel(e);
                    if (!s.default.can(h.Permissions.VIEW_CHANNEL, t)) return null;
                    let n = null == t ? void 0 : t.guild_id;
                    if (null == n) return null;
                    let l = E.default.getGuildScheduledEventsByIndex(E.StaticGuildEventIndexes.CHANNEL_EVENT_ACTIVE(e));
                    return l.length > 0 ? l[0] : null
                }, [e])
            }

            function C(e) {
                let t = (0, u.useStateFromStoresArray)([E.default], () => E.default.getGuildScheduledEventsForGuild(e), [e]),
                    n = l.useMemo(() => {
                        let e = new Map;
                        return t.forEach(t => {
                            let n = t.channel_id;
                            null != n && e.set(n, t)
                        }), e
                    }, [t]);
                return n
            }

            function v(e) {
                var t, n;
                let l = (t = e, (0, u.useStateFromStoresArray)([E.default, r.default, s.default], () => {
                        let e = E.default.getGuildScheduledEventsByIndex(E.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(t));
                        return e.filter(e => {
                            if (e.entity_type === N.GuildScheduledEventEntityTypes.NONE || e.status !== N.GuildScheduledEventStatus.SCHEDULED) return !1;
                            if (null == e.channel_id) return !0;
                            let t = r.default.getChannel(e.channel_id);
                            return s.default.can(h.Permissions.VIEW_CHANNEL, t)
                        })
                    }, [t])),
                    i = (0, u.useStateFromStoresObject)([f.default], () => f.default.getAllEventDismissals()),
                    a = (0, u.useStateFromStoresObject)([f.default], () => f.default.getAllUpcomingNoticeSeenTimes()),
                    d = (0, u.useStateFromStoresObject)([E.default], () => null == l ? {} : l.reduce((e, t) => {
                        let n = (0, _.getNextRecurrenceIdInEvent)(t);
                        return {
                            ...e,
                            [t.id]: E.default.isInterestedInEventRecurrence(t.id, n)
                        }
                    }, {}), [l]);
                if (null != l && null != d)
                    for (let e = 0; e < l.length; e++) {
                        ;
                        let t = l[e],
                            u = i[t.id],
                            r = a[t.id],
                            s = null !== (n = d[t.id]) && void 0 !== n && n,
                            o = (0, c.getNextShownUpcomingEventNoticeType)(t, u, r, s);
                        if (null != o) return {
                            upcomingEvent: t,
                            noticeType: o
                        }
                    }
            }

            function g(e) {
                return (0, u.useStateFromStores)([E.default, r.default, s.default], () => {
                    let t = E.default.getGuildScheduledEventsByIndex(E.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e));
                    return t.find(e => {
                        if (e.entity_type === N.GuildScheduledEventEntityTypes.NONE || !(0, E.isGuildScheduledEventActive)(e)) return !1;
                        if (null == e.channel_id) return !0;
                        let t = r.default.getChannel(e.channel_id);
                        return s.default.can(h.Permissions.VIEW_CHANNEL, t)
                    })
                }, [e])
            }

            function D(e) {
                return (0, u.useStateFromStores)([E.default], () => E.default.getGuildScheduledEventsByIndex(E.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)), [e])
            }

            function A(e) {
                return (0, u.useStateFromStores)([r.default, E.default], () => {
                    let t = E.default.getGuildScheduledEventsByIndex(E.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e)).find(e => {
                        let t = r.default.getChannel(e.channel_id);
                        return null != t
                    });
                    return r.default.getChannel(null == t ? void 0 : t.channel_id)
                }, [e])
            }

            function I(e) {
                let [t, n] = l.useState(() => Date.now());
                l.useEffect(() => {
                    let e = setInterval(() => {
                        n(Date.now())
                    }, 9e5);
                    return () => clearInterval(e)
                }, []);
                let i = (0, u.useStateFromStores)([E.default], () => null == e ? [] : E.default.getGuildScheduledEventsByIndex(E.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)), [e, t]),
                    r = l.useMemo(() => i.filter(e => {
                        let {
                            withinStartWindow: t,
                            diffMinutes: n
                        } = (0, _.getEventTimeData)(e.scheduled_start_time, e.scheduled_end_time);
                        return e.status !== N.GuildScheduledEventStatus.ACTIVE && t && n < 15
                    }), [i]);
                return r
            }
        },
        822516: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MAX_DAYS_AHEAD_AN_EVENT_CAN_START: function() {
                    return o
                },
                MAX_DAYS_AHEAD_AN_EVENT_CAN_END: function() {
                    return E
                },
                MAX_YEARS_AHEAD_RECURRING_EVENT: function() {
                    return c
                },
                getInitialEventStartDate: function() {
                    return h
                },
                getEventTimeData: function() {
                    return m
                },
                getScheduleFromEventData: function() {
                    return v
                },
                getScheduleFromEvent: function() {
                    return g
                },
                getRRule: function() {
                    return D
                },
                generateNextRecurrences: function() {
                    return A
                },
                getNextRecurrenceIdInEvent: function() {
                    return I
                },
                recurrenceOptionToRecurrenceRule: function() {
                    return R
                },
                recurrenceRuleToOption: function() {
                    return L
                }
            }), n("222007"), n("424973");
            var l = n("917351"),
                u = n("866227"),
                i = n.n(u),
                r = n("614137"),
                a = n("249654"),
                d = n("718517"),
                s = n("757767");
            n("745049");
            let o = 365,
                E = o + 1,
                c = 4,
                f = [r.RRule.MO.weekday, r.RRule.TU.weekday, r.RRule.WE.weekday, r.RRule.TH.weekday, r.RRule.FR.weekday],
                _ = [r.RRule.SU.weekday, r.RRule.MO.weekday, r.RRule.TU.weekday, r.RRule.WE.weekday, r.RRule.TH.weekday],
                N = [r.RRule.TU.weekday, r.RRule.WE.weekday, r.RRule.TH.weekday, r.RRule.FR.weekday, r.RRule.SA.weekday],
                h = () => {
                    let e = i().add(1, "hour"),
                        t = e.hour();
                    return e.minutes() >= 30 && (t += 1), e.hour(t).minutes(0).seconds(0)
                },
                T = (e, t) => e.format(e.get("years") === t.get("years") ? "ddd MMM Do \xb7 LT" : "ddd MMM Do, YYYY \xb7 LT"),
                S = (e, t) => {
                    let n = e.diff(t, "days");
                    return n > 1 ? T(e, t) : e.calendar(t)
                };

            function m(e, t, n) {
                null == n && (n = i());
                let l = i(e),
                    u = null != t && "" !== t ? i(t) : void 0,
                    r = null != t && l.isSame(u, "day");
                return {
                    startDateTimeString: S(l, n),
                    endDateTimeString: null != u ? r ? u.format("LT") : T(u, n) : void 0,
                    currentOrPastEvent: l <= n,
                    upcomingEvent: l <= i().add(1, "hour"),
                    withinStartWindow: l <= i().add(15, "minute"),
                    diffMinutes: l.diff(n, "minutes")
                }
            }

            function C(e, t) {
                let n;
                return null != e && (n = {
                    startDate: i(e),
                    endDate: void 0
                }, null != t && (n.endDate = i(t))), n
            }

            function v(e) {
                return C(e.scheduledStartTime, e.scheduledEndTime)
            }

            function g(e) {
                return C(e.scheduled_start_time, e.scheduled_end_time)
            }

            function D(e) {
                return new r.RRule({
                    dtstart: new Date(e.start),
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

            function A(e, t, n) {
                let l = [],
                    u = null == n,
                    i = null != n ? n : new Date,
                    r = new Date;
                r.setFullYear(r.getFullYear() + c);
                let a = u ? e + 1 : e;
                for (let e = 0; e < a && i < r; e++) {
                    let n = t.after(i);
                    if (null == n) break;
                    i = new Date(n), n.setMilliseconds(0), (!u || e > 0) && l.push(n)
                }
                return l
            }

            function I(e) {
                let t = function(e) {
                    var t;
                    if (null == e.recurrence_rule) return null;
                    let n = D(e.recurrence_rule);
                    return null !== (t = A(1, n, new Date)[0]) && void 0 !== t ? t : null
                }(e);
                return null != t ? a.default.fromTimestamp(Math.floor(t.getTime() / d.default.Millis.SECOND) * d.default.Millis.SECOND) : null
            }

            function M(e) {
                let t = new r.Weekday(e.toDate().getDay()),
                    n = new r.Weekday(e.toDate().getUTCDay());
                return n.weekday - t.weekday > 0 ? N : n.weekday - t.weekday < 0 ? _ : f
            }

            function R(e, t) {
                let n = function(e, t) {
                    let n = M(t),
                        l = t.toDate();
                    switch (l.setMilliseconds(0), e) {
                        case s.RecurrenceOptions.NONE:
                            return null;
                        case s.RecurrenceOptions.WEEKLY:
                            return new r.RRule({
                                dtstart: l,
                                freq: r.RRule.WEEKLY
                            });
                        case s.RecurrenceOptions.YEARLY:
                            return new r.RRule({
                                dtstart: l,
                                freq: r.RRule.YEARLY
                            });
                        case s.RecurrenceOptions.WEEKDAY_ONLY:
                            return new r.RRule({
                                dtstart: l,
                                freq: r.RRule.DAILY,
                                byweekday: n
                            })
                    }
                }(e, t);
                if (null == n) return null;
                let {
                    dtstart: l,
                    until: u,
                    freq: i,
                    interval: a,
                    byweekday: d,
                    bymonth: o,
                    bymonthday: E,
                    byyearday: c,
                    count: f
                } = n.options;
                return {
                    start: l.toISOString(),
                    end: null == u ? void 0 : u.toISOString(),
                    frequency: i,
                    interval: a,
                    byWeekday: null != d ? new Set(d) : null,
                    byMonth: null != o ? new Set(o) : null,
                    byMonthDay: null != E ? new Set(E) : null,
                    byYearDay: null != c ? new Set(c) : null,
                    count: f
                }
            }

            function L(e, t) {
                if (null == t) return s.RecurrenceOptions.NONE;
                let n = D(t);
                switch (n.options.freq) {
                    case r.RRule.WEEKLY:
                        return s.RecurrenceOptions.WEEKLY;
                    case r.RRule.YEARLY:
                        return s.RecurrenceOptions.YEARLY;
                    case r.RRule.DAILY:
                        if (!(0, l.isEqual)(n.options.byweekday, M(e))) return s.RecurrenceOptions.NONE;
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
                    return E
                },
                requestMembersForRole: function() {
                    return f
                }
            });
            var l = n("693566"),
                u = n.n(l),
                i = n("872717"),
                r = n("913144"),
                a = n("851387"),
                d = n("36402"),
                s = n("49111");
            async function o(e) {
                try {
                    r.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START",
                        guildId: e
                    });
                    let t = await i.default.get({
                            url: s.Endpoints.GUILD_ROLE_MEMBER_COUNTS(e)
                        }),
                        n = t.body;
                    r.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS",
                        guildId: e,
                        roleMemberCount: n
                    })
                } catch (t) {
                    r.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE",
                        guildId: e
                    })
                }
            }
            async function E(e) {
                d.default.shouldFetch(e) && await o(e)
            }
            let c = new u({
                maxAge: 1e4
            });

            function f(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    l = "".concat(e, "-").concat(t);
                if (!n || null == c.get(l)) {
                    var u, r;
                    return c.set(l, !0), u = e, r = t, i.default.get({
                        url: s.Endpoints.GUILD_ROLE_MEMBER_IDS(u, r)
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
            let i = {},
                r = {};
            class a extends l.default.Store {
                getRoleMemberCount(e) {
                    return null != e ? i[e] : null
                }
                shouldFetch(e) {
                    if (null == e) return !1;
                    let t = r[e];
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
                    i[t] = n, r[t] = Date.now()
                },
                GUILD_ROLE_MEMBER_COUNT_UPDATE: function(e) {
                    let {
                        guildId: t,
                        roleId: n,
                        count: l
                    } = e, u = i[t];
                    if (null == u) return !1;
                    u[n] = l
                },
                GUILD_ROLE_MEMBER_BULK_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: n,
                        added: l
                    } = e, u = i[t];
                    if (null == u || null == u[n]) return !1;
                    let r = Object.keys(l).length;
                    u[n] += r
                },
                GUILD_ROLE_MEMBER_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: n
                    } = e, l = i[t];
                    if (null == l || null == l[n]) return !1;
                    l[n] = l[n] + 1
                },
                GUILD_ROLE_MEMBER_REMOVE: function(e) {
                    let {
                        guildId: t,
                        roleId: n
                    } = e, l = i[t];
                    if (null == l || null == l[n]) return !1;
                    l[n] = Math.max(l[n] - 1, 0)
                },
                GUILD_ROLE_CREATE: function(e) {
                    let {
                        guildId: t,
                        role: n
                    } = e;
                    null == i[t] && (i[t] = {}), i[t][n.id] = 0
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    delete i[t.id], delete r[t.id]
                }
            })
        }
    }
]);