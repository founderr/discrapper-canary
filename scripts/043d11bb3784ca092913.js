(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["81814"], {
        470932: function(e, t, a) {
            "use strict";
            e.exports = a.p + "e725a703dee45c6662e1.svg"
        },
        499255: function(e, t, a) {
            "use strict";
            e.exports = a.p + "75c70d0d6625bb8cf2f5.svg"
        },
        704936: function(e, t, a) {
            "use strict";
            e.exports = a.p + "5ff73b0989c80fde7edb.svg"
        },
        465988: function(e, t, a) {
            "use strict";
            e.exports = a.p + "c11a0ed34fddcdfaf466.svg"
        },
        526954: function(e, t, a) {
            "use strict";
            e.exports = a.p + "18883c22029ff557572e.svg"
        },
        35296: function(e, t, a) {
            "use strict";
            e.exports = a.p + "44a8a263aced971974c6.svg"
        },
        344665: function(e, t, a) {
            "use strict";
            e.exports = a.p + "a61b011f6d36f74215e5.svg"
        },
        93556: function(e, t, a) {
            "use strict";
            e.exports = a.p + "3a93e7ad39ce7e750bc6.svg"
        },
        118913: function(e, t, a) {
            "use strict";
            e.exports = a.p + "15fbb1a85485d28174e5.svg"
        },
        125134: function(e, t, a) {
            "use strict";
            e.exports = a.p + "48db18afbce8673d114c.svg"
        },
        380493: function(e, t, a) {
            "use strict";
            e.exports = a.p + "a978c23f8e989757d65b.svg"
        },
        783858: function(e, t, a) {
            "use strict";
            e.exports = a.p + "bb338d0a77decab1981a.svg"
        },
        181482: function(e, t, a) {
            "use strict";
            e.exports = a.p + "ad3488a6a9528f5656f9.svg"
        },
        925107: function(e, t, a) {
            "use strict";
            e.exports = a.p + "076eaacfcda10b3dd081.svg"
        },
        347124: function(e, t, a) {
            "use strict";
            e.exports = a.p + "21b83b80872fce3e23d1.svg"
        },
        630344: function(e, t, a) {
            "use strict";
            e.exports = a.p + "3e876feb943a16979f7f.svg"
        },
        735468: function(e, t, a) {
            "use strict";
            e.exports = a.p + "0f8d9250f8612ab7dc44.svg"
        },
        782983: function(e, t, a) {
            "use strict";
            e.exports = a.p + "6bd51186f4cbfe84f872.svg"
        },
        229709: function(e, t, a) {
            "use strict";
            e.exports = a.p + "6fb2064d47ffad5be5df.svg"
        },
        897142: function(e, t, a) {
            "use strict";
            e.exports = a.p + "133496b12baf37b12e29.svg"
        },
        352791: function(e, t, a) {
            "use strict";
            e.exports = a.p + "23e8fc1dee30b7819227.svg"
        },
        245629: function(e, t, a) {
            "use strict";
            e.exports = a.p + "e6496ded2b1c9137e3be.svg"
        },
        141555: function(e, t, a) {
            "use strict";
            e.exports = a.p + "4631416718b327c65f5e.svg"
        },
        520609: function(e, t, a) {
            "use strict";
            e.exports = a.p + "449491e78be7e6b79921.svg"
        },
        487577: function(e, t, a) {
            "use strict";
            e.exports = a.p + "1e79875ffaa10d5d26b3.svg"
        },
        448738: function(e, t, a) {
            "use strict";
            e.exports = a.p + "cefbb4051caaf7fcd9b9.svg"
        },
        191152: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                fetchActiveChannels: function() {
                    return d
                }
            });
            var n = a("872717"),
                l = a("913144"),
                s = a("599417"),
                i = a("49111");
            async function d(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
                l.default.dispatch({
                    type: "ACTIVE_CHANNELS_FETCH_START",
                    guildId: e
                });
                try {
                    var a, d;
                    let s = await n.default.get({
                            url: i.Endpoints.ACTIVE_CHANNELS(e),
                            query: {
                                channel_limit: t
                            }
                        }),
                        r = null !== (d = null === (a = s.body) || void 0 === a ? void 0 : a.channels) && void 0 !== d ? d : [];
                    return l.default.dispatch({
                        type: "ACTIVE_CHANNELS_FETCH_SUCCESS",
                        guildId: e,
                        channels: r
                    }), s
                } catch (t) {
                    throw l.default.dispatch({
                        type: "ACTIVE_CHANNELS_FETCH_FAILURE",
                        guildId: e,
                        error: new s.default(t)
                    }), t
                }
            }
        },
        425974: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return u
                }
            });
            var n = a("884691"),
                l = a("446674"),
                s = a("558130"),
                i = a("887446"),
                d = a("599110"),
                r = a("49111");

            function u(e, t, a) {
                let u = (0, l.useStateFromStores)([s.default], () => {
                    let t = s.default.getActiveChannelsFetchStatus(e);
                    return null != t && !t.loading
                }, [e]);
                n.useEffect(() => {
                    u && d.default.track(r.AnalyticEvents.ACTIVE_CHANNELS_LOADED, {
                        guild_id: e,
                        text_channels_shown: t.length,
                        voice_channels_shown: a.length,
                        home_session_id: i.default.getHomeSessionId(e)
                    })
                }, [e, u])
            }
        },
        462998: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return G
                }
            });
            var n = a("37983"),
                l = a("884691"),
                s = a("446674"),
                i = a("272030"),
                d = a("264732"),
                r = a("738073"),
                u = a("716241"),
                o = a("850391"),
                c = a("347895"),
                f = a("698882"),
                m = a("778613"),
                h = a("934288"),
                E = a("353054"),
                g = a("557809"),
                I = a("267567"),
                _ = a("393414"),
                x = a("208021"),
                S = a("42203"),
                C = a("474643"),
                v = a("247013"),
                N = a("305961"),
                p = a("377253"),
                T = a("957255"),
                A = a("697218"),
                M = a("945330"),
                D = a("664336"),
                j = a("679653"),
                F = a("176347"),
                L = a("49111"),
                R = a("782340"),
                b = a("768922");

            function G(e) {
                let {
                    channelId: t,
                    baseChannelId: G,
                    channelViewSource: O = "Split View",
                    isResourceChannelView: y
                } = e, H = (0, s.useStateFromStores)([S.default], () => S.default.getChannel(t)), k = (0, s.useStateFromStores)([N.default], () => N.default.getGuild(null == H ? void 0 : H.getGuildId())), U = (0, s.useStateFromStores)([A.default], () => A.default.getCurrentUser()), w = (0, s.useStateFromStores)([v.default], () => v.default.didAgree(null == H ? void 0 : H.guild_id)), B = (null == U ? void 0 : U.nsfwAllowed) === !0, P = (0, j.default)(H), V = (0, s.useStateFromStores)([I.default], () => (null == k ? void 0 : k.id) != null && I.default.isLurking(k.id), [k]), W = (0, s.useStateFromStores)([T.default], () => T.default.can(L.Permissions.SEND_MESSAGES, H)), K = (0, m.useHasPendingMemberAction)(null == k ? void 0 : k.id, null == H ? void 0 : H.id), Y = (0, h.default)(t), z = (0, s.useStateFromStores)([f.default], () => {
                    var e;
                    return null === (e = f.default.getResourceForChannel(null == k ? void 0 : k.id, t)) || void 0 === e ? void 0 : e.title
                }), X = l.useRef(!1);
                if (l.useEffect(() => {
                        null != H && !X.current && (X.current = !0, (0, u.trackWithMetadata)(L.AnalyticEvents.CHANNEL_OPENED, {
                            channel_id: H.id,
                            guild_id: H.guild_id,
                            parent_id: H.parent_id,
                            channel_view: O,
                            can_send_message: W,
                            has_pending_member_action: K
                        }))
                    }, [H, O, W, K]), null == H || null == k) return null;
                let Z = [];
                return (!V && Z.push((0, n.jsx)(E.default, {
                    channel: H
                }, "notifications")), Z.push((0, n.jsx)(D.default.Icon, {
                    icon: M.default,
                    tooltip: R.default.Messages.CLOSE,
                    onClick: () => x.default.closeChannelSidebar(G)
                }, "close")), !H.isNSFW() || B && w) ? (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(d.default, {
                        channel: H,
                        draftType: C.DraftType.ChannelMessage
                    }), (0, n.jsx)(D.default, {
                        toolbar: Z,
                        "aria-label": R.default.Messages.CHANNEL_HEADER_BAR_A11Y_LABEL,
                        children: (0, g.renderTitle)({
                            channel: H,
                            channelName: Y ? z : P,
                            guild: k,
                            inSidebar: !0,
                            handleContextMenu: e => {
                                (0, i.openContextMenuLazy)(e, async () => {
                                    let {
                                        default: e
                                    } = await a.el("229233").then(a.bind(a, "229233"));
                                    return t => (0, n.jsx)(e, {
                                        ...t,
                                        channel: H,
                                        guild: k
                                    })
                                })
                            },
                            handleClick: () => {
                                let e = p.default.getMessages(H.id);
                                if (y) {
                                    (0, _.transitionTo)(L.Routes.CHANNEL(H.guild_id, H.id)), (0, c.selectHomeResourceChannel)(H.guild_id, null);
                                    return
                                }(0, _.transitionToGuild)(H.guild_id, H.id, e.jumpTargetId)
                            }
                        })
                    }), (0, n.jsx)("div", {
                        className: b.chat,
                        children: (0, n.jsx)(F.default, {
                            channel: H,
                            guild: k,
                            chatInputType: o.ChatInputTypes.SIDEBAR
                        }, t)
                    })]
                }) : (0, n.jsx)(r.default, {
                    guild: k
                })
            }
        },
        404103: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return N
                }
            });
            var n = a("611221"),
                l = a("913144"),
                s = a("316272"),
                i = a("887446"),
                d = a("582713"),
                r = a("271938"),
                u = a("982108"),
                o = a("42203"),
                c = a("18494"),
                f = a("162771"),
                m = a("599110"),
                h = a("713810"),
                E = a("185014"),
                g = a("886484"),
                I = a("60036"),
                _ = a("2804"),
                x = a("515631"),
                S = a("49111"),
                C = a("724210");
            class v extends s.default {
                _initialize() {
                    l.default.subscribe("MESSAGE_REACTION_ADD", this.handleReaction), l.default.subscribe("MESSAGE_REACTION_REMOVE", this.handleReaction), l.default.subscribe("SIDEBAR_VIEW_CHANNEL", this.handleSidebarViewChannel), l.default.subscribe("MESSAGE_CREATE", this.handleMessageCreate), l.default.subscribe("APP_STATE_UPDATE", this.handleAppStateUpdate)
                }
                _terminate() {
                    l.default.unsubscribe("MESSAGE_REACTION_ADD", this.handleReaction), l.default.unsubscribe("MESSAGE_REACTION_REMOVE", this.handleReaction), l.default.unsubscribe("SIDEBAR_VIEW_CHANNEL", this.handleSidebarViewChannel), l.default.unsubscribe("MESSAGE_CREATE", this.handleMessageCreate), l.default.unsubscribe("APP_STATE_UPDATE", this.handleAppStateUpdate)
                }
                handleReaction(e) {
                    let {
                        type: t,
                        userId: a,
                        messageId: n,
                        optimistic: l
                    } = e;
                    if (a !== r.default.getId() || !l) return;
                    let s = f.default.getGuildId();
                    if (null == s) return;
                    let d = c.default.getChannelId();
                    if (!(0, C.isGuildHomeChannel)(d)) return;
                    let u = E.default.getItemForMessageId(s, n);
                    if (null == u) return;
                    let o = (0, I.default)(u);
                    (0, h.trackFeedItemInteracted)({
                        feed_item_type: (0, _.getFeedItemTypeFromId)(u.id),
                        feed_item_id: u.id,
                        load_id: E.default.getLoadId(s),
                        action_type: "MESSAGE_REACTION_ADD" === t ? x.FeedItemInteractionType.REACTION_ADDED : x.FeedItemInteractionType.REACTION_REMOVED,
                        guild_id: s,
                        channel_id: o.channel_id,
                        message_id: n,
                        home_session_id: i.default.getHomeSessionId(s)
                    })
                }
                handleSidebarViewChannel(e) {
                    let {
                        channelId: t,
                        baseChannelId: a,
                        sidebarType: l
                    } = e;
                    if (l !== d.SidebarType.VIEW_THREAD || !(0, C.isGuildHomeChannel)(a)) return;
                    let s = f.default.getGuildId();
                    if (null == s) return;
                    let r = E.default.getItemForMessageId(s, t);
                    if (null != r) r.type !== n.GuildFeedItemTypes.FORUM_POST && (0, h.trackFeedItemInteracted)({
                        feed_item_type: (0, _.getFeedItemTypeFromId)(r.id),
                        feed_item_id: r.id,
                        load_id: E.default.getLoadId(s),
                        action_type: x.FeedItemInteractionType.THREAD_EMBED_CLICKED,
                        guild_id: s,
                        channel_id: (0, g.getChannelIdForItem)(r),
                        message_id: t,
                        home_session_id: i.default.getHomeSessionId(s)
                    })
                }
                handleMessageCreate(e) {
                    let t, a, {
                        optimistic: n,
                        message: l
                    } = e;
                    if (!n || l.state !== S.MessageStates.SENDING) return;
                    let s = f.default.getGuildId();
                    if (null == s) return;
                    let d = u.default.getSidebarState(C.StaticChannelRoute.GUILD_HOME);
                    if (null == d || !(0, u.isViewChannelSidebar)(d)) return;
                    let r = o.default.getChannel(d.channelId),
                        c = (0, g.getSidebarMessageId)(d, r);
                    if (null == c) return;
                    let m = E.default.getItemForMessageId(s, c);
                    if (null != m) {
                        if (l.type === S.MessageTypes.DEFAULT) t = x.FeedItemInteractionType.MESSAGED_IN_SIDEBAR, a = c;
                        else if (l.type === S.MessageTypes.REPLY) {
                            var I, v;
                            a = null === (I = l.message_reference) || void 0 === I ? void 0 : I.message_id, t = (null === (v = l.message_reference) || void 0 === v ? void 0 : v.message_id) === c ? x.FeedItemInteractionType.REPLIED_TO_MESSAGE : x.FeedItemInteractionType.REPLIED_IN_SIDEBAR
                        }
                        null != t && (0, h.trackFeedItemInteracted)({
                            feed_item_type: (0, _.getFeedItemTypeFromId)(m.id),
                            feed_item_id: m.id,
                            load_id: E.default.getLoadId(s),
                            action_type: t,
                            guild_id: s,
                            channel_id: l.channel_id,
                            message_id: a,
                            home_session_id: i.default.getHomeSessionId(s)
                        })
                    }
                }
                handleAppStateUpdate(e) {
                    let {
                        state: t
                    } = e;
                    if ("background" !== t) return;
                    let a = f.default.getGuildId();
                    null != a && m.default.track(S.AnalyticEvents.HOME_BACKGROUNDED, {
                        guild_id: a,
                        home_session_id: i.default.getHomeSessionId(a),
                        load_id: E.default.getLoadId(a)
                    })
                }
            }
            var N = new v
        },
        468670: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return c
                }
            });
            var n = a("118810"),
                l = a("887446"),
                s = a("713810"),
                i = a("185014"),
                d = a("60036"),
                r = a("2804"),
                u = a("515631");

            function o(e, t, a) {
                let {
                    feedItemId: d,
                    guildId: o,
                    channelId: c,
                    messageId: f
                } = a, m = e.target;
                for (;
                    (0, n.isElement)(m);) {
                    var h, E;
                    if (m === t) break;
                    let e = null !== (E = null === (h = m.getAttribute("data-role")) || void 0 === h ? void 0 : h.toUpperCase()) && void 0 !== E ? E : m.tagName;
                    if ("A" === e) return (0, s.trackFeedItemInteracted)({
                        feed_item_type: (0, r.getFeedItemTypeFromId)(d),
                        feed_item_id: d,
                        load_id: i.default.getLoadId(o),
                        action_type: u.FeedItemInteractionType.LINK_CLICKED,
                        guild_id: o,
                        channel_id: c,
                        message_id: f,
                        home_session_id: l.default.getHomeSessionId(o)
                    }), !0;
                    if ("IMG" === e) return (0, s.trackFeedItemInteracted)({
                        feed_item_type: (0, r.getFeedItemTypeFromId)(d),
                        feed_item_id: d,
                        load_id: i.default.getLoadId(o),
                        action_type: u.FeedItemInteractionType.IMAGE_CLICKED,
                        guild_id: o,
                        channel_id: c,
                        message_id: f,
                        home_session_id: l.default.getHomeSessionId(o)
                    }), !0;
                    else if ("BUTTON" === e || "button" === m.getAttribute("role")) {
                        let e = u.FeedItemInteractionType.BUTTON_CLICKED;
                        if ("view-more-replies" === m.getAttribute("data-action")) e = u.FeedItemInteractionType.VIEW_MORE_REPLIES;
                        return (0, s.trackFeedItemInteracted)({
                            feed_item_type: (0, r.getFeedItemTypeFromId)(d),
                            feed_item_id: d,
                            load_id: i.default.getLoadId(o),
                            action_type: e,
                            guild_id: o,
                            channel_id: c,
                            message_id: f,
                            home_session_id: l.default.getHomeSessionId(o)
                        }), !0
                    }
                    m = m.parentNode
                }
                return !1
            }

            function c(e) {
                let {
                    guildId: t,
                    channelId: a,
                    feedItemId: n,
                    onChannelClick: c,
                    onContentClick: f
                } = e, m = (e, o) => {
                    var c;
                    e.stopPropagation();
                    let m = i.default.getItem(t, n);
                    null != m && ((0, s.trackFeedItemInteracted)({
                        feed_item_type: (0, r.getFeedItemTypeFromId)(n),
                        feed_item_id: n,
                        load_id: i.default.getLoadId(t),
                        action_type: u.FeedItemInteractionType.MESSAGE_CLICKED,
                        guild_id: t,
                        channel_id: a,
                        message_id: null !== (c = null == o ? void 0 : o.id) && void 0 !== c ? c : (0, d.default)(m).id,
                        home_session_id: l.default.getHomeSessionId(t)
                    }), f(o))
                };
                return {
                    handleMessageClick: (e, l, s) => {
                        e.stopPropagation(), !o(e, l, {
                            feedItemId: n,
                            guildId: t,
                            channelId: a,
                            messageId: s.id
                        }) && m(e, s)
                    },
                    handleChannelClick: e => {
                        e.stopPropagation(), (0, s.trackFeedItemInteracted)({
                            feed_item_type: (0, r.getFeedItemTypeFromId)(n),
                            feed_item_id: n,
                            load_id: i.default.getLoadId(t),
                            action_type: u.FeedItemInteractionType.MESSAGE_CHANNEL_CLICKED,
                            guild_id: t,
                            channel_id: a,
                            home_session_id: l.default.getHomeSessionId(t)
                        }), c()
                    },
                    handleCardClick: (e, l) => {
                        !o(e, l, {
                            feedItemId: n,
                            guildId: t,
                            channelId: a
                        }) && m(e)
                    },
                    handleItemClick: m
                }
            }
        },
        435123: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                shouldFetchGuildFeed: function() {
                    return d
                },
                default: function() {
                    return r
                }
            });
            var n = a("884691"),
                l = a("446674"),
                s = a("713810"),
                i = a("185014");

            function d(e, t) {
                let a = i.default.getLastFetchedMillis(e);
                if (!t && null != a && Date.now() - a < 72e5) return !1;
                let {
                    loading: n
                } = i.default.getFetchStatus(e);
                return n === i.LoadingStatus.NONE && !0
            }

            function r(e) {
                let {
                    guildId: t,
                    highlightedItemData: a
                } = e, {
                    loading: r,
                    error: u
                } = (0, l.useStateFromStores)([i.default], () => i.default.getFetchStatus(t), [t]), o = n.useCallback(e => {
                    let {
                        force: n,
                        flushSeenItems: l
                    } = e;
                    async function i() {
                        try {
                            await (0, s.fetchGuildFeed)({
                                guildId: t,
                                flushSeenItems: l,
                                refresh: !0,
                                highlightedItemData: a
                            })
                        } catch (e) {
                            console.error(e)
                        }
                    }
                    d(t, null != n && n) && i()
                }, [t, a]), c = n.useCallback(() => {
                    d(t, !0) && e();
                    async function e() {
                        try {
                            await (0, s.fetchGuildFeed)({
                                guildId: t,
                                refresh: !1
                            })
                        } catch (e) {
                            console.error(e)
                        }
                    }
                }, [t]);
                return n.useEffect(() => {
                    o({
                        force: null != a
                    })
                }, [o, a]), {
                    fetchFresh: o,
                    fetchPage: c,
                    loading: r,
                    error: u
                }
            }
        },
        465519: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                getFeaturedExpirationTextColor: function() {
                    return d
                },
                areSecondLevelArraysEqual: function() {
                    return r
                }
            });
            var n = a("866227"),
                l = a.n(n),
                s = a("669491"),
                i = a("886484");
            let d = e => {
                let t = l(e).diff(l(), "s");
                return t <= i.FEATURE_EXPIRES_SECONDS.ONE_DAY ? s.default.colors.TEXT_DANGER : t <= i.FEATURE_EXPIRES_SECONDS.THREE_DAYS ? s.default.colors.TEXT_WARNING : s.default.colors.TEXT_POSITIVE
            };

            function r(e, t) {
                if (e.length !== t.length) return !1;
                for (let a = 0; a < e.length; a++) {
                    let n = e[a],
                        l = t[a];
                    if (n.length !== l.length || !n.some((e, t) => l[t] !== e)) return !1
                }
                return !0
            }
        },
        530853: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return H
                }
            });
            var n = a("37983"),
                l = a("884691"),
                s = a("414456"),
                i = a.n(s),
                d = a("355262"),
                r = a("446674"),
                u = a("77078"),
                o = a("272030"),
                c = a("679653"),
                f = a("419830"),
                m = a("537325"),
                h = a("208021"),
                E = a("582713"),
                g = a("982108"),
                I = a("42203"),
                _ = a("27618"),
                x = a("449008"),
                S = a("185014"),
                C = a("886484"),
                v = a("60036"),
                N = a("468670"),
                p = a("465519"),
                T = a("344934"),
                A = a("113312"),
                M = a("339274"),
                D = a("605143"),
                j = a("759668"),
                F = a("449405"),
                L = a("49111"),
                R = a("724210"),
                b = a("782340"),
                G = a("520627");
            let O = async () => {
                let {
                    default: e
                } = await a.el("814781").then(a.bind(a, "814781"));
                return e
            };

            function y(e) {
                let {
                    item: t,
                    referenceMessageBundles: a,
                    channel: s,
                    guildId: d,
                    animateAvatar: r,
                    onMessageClick: o
                } = e, c = l.useCallback(() => {
                    var e, n;
                    let l = a[a.length - 2 + 1];
                    h.default.openChannelAsSidebar({
                        guildId: d,
                        channelId: s.id,
                        baseChannelId: R.StaticChannelRoute.GUILD_HOME,
                        flash: !1,
                        details: {
                            type: E.SidebarOpenDetailsType.HOME,
                            initialMessageId: null !== (n = null == l ? void 0 : null === (e = l[0]) || void 0 === e ? void 0 : e.id) && void 0 !== n ? n : a[0][0].id,
                            highlightMessageIds: new Set((0, v.getAllMessageIdsFromFeedItem)(t))
                        }
                    })
                }, [t, s, d, a]);
                return (0, n.jsxs)("div", {
                    className: G.conversationArea,
                    children: [a.slice(0, 2).map((e, t) => {
                        let l = e[0];
                        return null == l ? null : (0, n.jsx)(T.GuildFeedConversationReply, {
                            className: i(G.conversationMessage, {
                                [G.mentioned]: l.mentioned
                            }),
                            guildId: d,
                            channel: s,
                            message: l,
                            onMessageClick: o,
                            isTruncated: e.length > 1,
                            animateAvatar: r,
                            children: t !== a.length - 1 && (0, n.jsx)("div", {
                                className: G.replySpine
                            })
                        }, l.id)
                    }), a.length > 2 && (0, n.jsx)("div", {
                        className: i(G.conversationMessage, G.viewMoreReplies),
                        children: (0, n.jsx)(u.Clickable, {
                            onClick: c,
                            "data-action": "view-more-replies",
                            children: b.default.Messages.GUILD_FEED_TRUNCATED_REPLIES_VIEW_MORE.format({
                                count: a.length - 2
                            })
                        })
                    }, "view-more")]
                })
            }
            var H = l.forwardRef(function(e, t) {
                var a, s;
                let {
                    guildId: T,
                    conversationItem: H,
                    showFeedback: k,
                    setOnDismissedFeedback: U
                } = e, {
                    root: w
                } = H, {
                    messages: B,
                    children: P
                } = w, V = B[0], W = B[B.length - 1], K = W.channel_id, Y = (0, r.useStateFromStoresArray)([S.default], () => B.map(e => S.default.getCachedMessage(T, K, e.id)).filter(x.isNotNullish), [T, K, B]), z = (0, r.useStateFromStores)([I.default], () => I.default.getChannel(K)), X = (0, f.getChannelIconComponent)(z, void 0, {
                    textFocused: !0
                }), Z = (0, f.getChannelIconTooltipText)(z), J = (0, c.default)(z), [q, Q] = l.useState(!1), $ = (0, r.useStateFromStores)([_.default], () => null != W && _.default.isBlocked(W.author.id)), ee = (0, d.useListItem)(null !== (s = null === (a = Y[Y.length - 1]) || void 0 === a ? void 0 : a.id) && void 0 !== s ? s : H.id), et = H.id, ea = (0, r.useStateFromStores)([g.default], () => g.default.getSidebarState(R.StaticChannelRoute.GUILD_HOME)), en = (0, C.getSidebarMessageId)(ea, z), el = null != en && V.id === en, {
                    handleItemClick: es,
                    handleChannelClick: ei,
                    handleCardClick: ed,
                    handleMessageClick: er
                } = (0, N.default)({
                    guildId: T,
                    channelId: K,
                    feedItemId: et,
                    onChannelClick: () => (0, m.default)(L.Routes.CHANNEL(T, K, V.id)),
                    onContentClick: e => {
                        var t;
                        h.default.openChannelAsSidebar({
                            guildId: T,
                            channelId: K,
                            baseChannelId: R.StaticChannelRoute.GUILD_HOME,
                            flash: !1,
                            details: {
                                type: E.SidebarOpenDetailsType.HOME,
                                initialMessageId: null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : V.id,
                                highlightMessageIds: new Set((0, v.getAllMessageIdsFromFeedItem)(H))
                            }
                        })
                    }
                }), eu = (0, r.useStateFromStores)([S.default], () => null == z ? [] : P.map(e => e.messages.map(e => S.default.getCachedMessage(T, z.id, e.id)).filter(x.isNotNullish)).filter(e => 0 !== e.length), [T, z, P], p.areSecondLevelArraysEqual);
                if (null == z || null == V || null == W || $) return null;
                let eo = e => {
                    e.stopPropagation(), (0, o.openContextMenuLazy)(e, async () => {
                        let e = await O();
                        return t => (0, n.jsx)(e, {
                            ...t,
                            item: H,
                            channel: z
                        })
                    })
                };
                return (0, n.jsxs)(M.default, {
                    className: k ? G.containerNoPadding : G.container,
                    ref: t,
                    selected: el,
                    onCardClick: ed,
                    onItemClick: es,
                    onContextMenu: eo,
                    itemId: et,
                    ariaLabel: b.default.Messages.GUILD_FEED_MESSAGE_ITEM_A11Y_LABEL.format({
                        channelName: J
                    }),
                    listItemProps: ee,
                    onMouseEnter: () => Q(!0),
                    onMouseLeave: () => Q(!1),
                    children: [(0, n.jsxs)(u.HeadingLevel, {
                        component: (0, n.jsxs)(D.default, {
                            children: [(0, n.jsx)("div", {
                                className: G.messageHeaderMenuLeft,
                                children: (0, n.jsxs)(u.Clickable, {
                                    className: G.channelNameContainer,
                                    onClick: ei,
                                    children: [null != X ? (0, n.jsx)(u.Tooltip, {
                                        text: Z,
                                        delay: 500,
                                        children: e => (0, n.jsx)(X, {
                                            ...e,
                                            className: G.channelIcon,
                                            height: 16,
                                            width: 16
                                        })
                                    }) : null, (0, n.jsx)(u.Heading, {
                                        lineClamp: 1,
                                        variant: "heading-sm/semibold",
                                        children: J
                                    })]
                                })
                            }), (0, n.jsx)("div", {
                                className: G.messageHeaderMenuRight,
                                children: (0, n.jsx)(j.default, {
                                    feedItem: H,
                                    guildId: T,
                                    onContextMenu: eo
                                })
                            })]
                        }),
                        children: [(0, n.jsx)("div", {
                            className: i(G.messageBundleItemBody, {
                                [G.conversationRoot]: eu.length > 0,
                                [G.hasReply]: V.type === L.MessageTypes.REPLY
                            }),
                            children: (0, n.jsx)(F.default, {
                                feedItemId: H.id,
                                guildId: T,
                                channel: z,
                                messages: Y,
                                animateAvatar: q,
                                onMessageClick: er
                            })
                        }), (0, n.jsx)(y, {
                            item: H,
                            channel: z,
                            guildId: T,
                            referenceMessageBundles: eu,
                            onMessageClick: er,
                            animateAvatar: q
                        })]
                    }), k && (0, n.jsx)(A.default, {
                        guildId: T,
                        guildFeedItem: H,
                        setOnDismissFeedback: U
                    })]
                })
            })
        },
        344934: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                GuildFeedConversationReply: function() {
                    return C
                }
            });
            var n = a("37983"),
                l = a("884691"),
                s = a("414456"),
                i = a.n(s),
                d = a("77078"),
                r = a("574073"),
                u = a("865343"),
                o = a("909917"),
                c = a("380986"),
                f = a("969706"),
                m = a("39331"),
                h = a("115859"),
                E = a("497880"),
                g = a("93332"),
                I = a("587904"),
                _ = a("894488"),
                x = a("307078");

            function S(e) {
                let {
                    message: t,
                    guildId: a,
                    animateAvatar: s,
                    channel: i,
                    author: r
                } = e, {
                    popouts: m,
                    setPopout: h
                } = (0, f.default)(t.id, _.DEFAULT_POPOUTS), {
                    usernameProfile: E,
                    avatarProfile: S
                } = m, C = l.useMemo(() => e => (0, o.default)(e, t), [t]), v = (0, c.useContextMenuUser)(t.author.id, i.id), N = (0, c.useClickMessageAuthorUsername)(t, i, E, h), p = (0, c.useClickMessageAuthorAvatar)(S, h), T = l.useCallback(() => h({
                    usernameProfile: !1,
                    avatarProfile: !1,
                    referencedUsernameProfile: !1
                }), [h]), A = (0, g.useAvatar)({
                    props: {
                        message: t,
                        channel: i,
                        author: r,
                        guildId: a,
                        compact: !0,
                        displayCompactAvatars: !0,
                        animate: s,
                        showAvatarPopout: S,
                        showUsernamePopout: E,
                        onContextMenu: v,
                        onClickUsername: N,
                        onClickAvatar: p,
                        onPopoutRequestClose: T
                    },
                    guildId: a,
                    handleRenderPopout: C,
                    className: x.avatar
                }), M = (0, g.useUsername)(e, C), D = (0, u.getMessageUsernameId)(t), j = (0, u.getMessageTimestampId)(t), F = "".concat(D, " ").concat(j), L = (0, u.getMessageReplyId)(t);
                return (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsxs)(d.H, {
                        className: x.header,
                        "aria-describedby": L,
                        "aria-labelledby": F,
                        children: [A, (0, n.jsx)("span", {
                            id: (0, u.getMessageUsernameId)(t),
                            className: x.username,
                            children: (0, n.jsx)(n.Fragment, {
                                children: M
                            })
                        }), (0, n.jsx)(I.default, {
                            id: (0, u.getMessageTimestampId)(t),
                            timestamp: t.timestamp,
                            className: x.timestamp
                        })]
                    })
                })
            }
            let C = l.forwardRef(function(e, t) {
                let {
                    message: a,
                    className: s,
                    onMessageClick: u,
                    children: o,
                    isTruncated: c,
                    channel: f,
                    guildId: g,
                    animateAvatar: I
                } = e, _ = l.useRef(null), {
                    content: C,
                    hasSpoilerEmbeds: v
                } = (0, m.default)(a, {
                    hideSimpleEmbedContent: !0
                }), N = (0, r.default)(a), p = l.useCallback(e => {
                    u(e, _.current, a)
                }, [u, a]);
                return (0, n.jsxs)("div", {
                    ref: _,
                    className: s,
                    onClick: p,
                    role: "article",
                    children: [(0, n.jsx)(d.FocusRing, {
                        offset: {
                            left: 4,
                            right: 4
                        },
                        children: (0, n.jsxs)("div", {
                            children: [(0, n.jsxs)("div", {
                                children: [(0, n.jsx)(S, {
                                    author: N,
                                    message: a,
                                    channel: f,
                                    guildId: g,
                                    animateAvatar: I
                                }), (0, n.jsx)(E.default, {
                                    className: i(x.messageContent, {
                                        [x.truncatedReply]: c
                                    }),
                                    message: a,
                                    content: C,
                                    contentRef: t
                                })]
                            }), (0, h.default)({
                                className: x.accessories,
                                channelMessageProps: e,
                                hasSpoilerEmbeds: v,
                                isInteracting: !1
                            })]
                        })
                    }), o]
                })
            })
        },
        113312: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return k
                }
            });
            var n = a("37983"),
                l = a("884691"),
                s = a("414456"),
                i = a.n(s),
                d = a("301165"),
                r = a("819855"),
                u = a("77078"),
                o = a("841098"),
                c = a("601414"),
                f = a("137215"),
                m = a("945330"),
                h = a("302120"),
                E = a("782340"),
                g = a("710611"),
                I = a("499255"),
                _ = a("704936"),
                x = a("465988"),
                S = a("526954"),
                C = a("35296"),
                v = a("344665"),
                N = a("93556"),
                p = a("118913"),
                T = a("125134"),
                A = a("380493"),
                M = a("783858"),
                D = a("181482"),
                j = a("925107"),
                F = a("347124"),
                L = a("630344"),
                R = a("735468");
            let b = [{
                light: F,
                dark: j,
                selected: L,
                value: h.GuildFeedbackRating.TERRIBLE,
                altDescription: () => E.default.Messages.GUILD_FEED_FEEDBACK_RATING_TERRIBLE,
                description: () => E.default.Messages.GUILD_FEED_FEEDBACK_RATING_TERRIBLE
            }, {
                light: _,
                dark: I,
                selected: x,
                value: h.GuildFeedbackRating.BAD,
                altDescription: () => E.default.Messages.GUILD_FEED_FEEDBACK_RATING_BAD
            }, {
                light: M,
                dark: A,
                selected: D,
                value: h.GuildFeedbackRating.OKAY,
                altDescription: () => E.default.Messages.GUILD_FEED_FEEDBACK_RATING_OKAY
            }, {
                light: p,
                dark: N,
                selected: T,
                value: h.GuildFeedbackRating.GOOD,
                altDescription: () => E.default.Messages.GUILD_FEED_FEEDBACK_RATING_GOOD
            }, {
                light: C,
                dark: S,
                selected: v,
                value: h.GuildFeedbackRating.EXCELLENT,
                altDescription: () => E.default.Messages.GUILD_FEED_FEEDBACK_RATING_EXCELLENT,
                description: () => E.default.Messages.GUILD_FEED_FEEDBACK_RATING_EXCELLENT
            }];

            function G(e) {
                let {
                    defaultSrc: t,
                    selectedSrc: a,
                    selected: s,
                    disableAnimation: i,
                    alt: r
                } = e, [u, o] = (0, d.useSpring)(() => ({
                    from: {
                        opacity: 1
                    },
                    config: {
                        duration: i ? 0 : h.GUILD_FEED_FEEDBACK_ANIMATION_DURATION
                    }
                }), [s, i]), [c, f] = (0, d.useSpring)(() => ({
                    from: {
                        opacity: 0
                    },
                    config: {
                        duration: i ? 0 : h.GUILD_FEED_FEEDBACK_ANIMATION_DURATION
                    }
                }), [s, i]);
                return l.useEffect(() => {
                    s ? (o({
                        opacity: 0
                    }), f({
                        opacity: 1
                    })) : (o({
                        opacity: 1
                    }), f({
                        opacity: 0
                    }))
                }, [s, i, o, f]), (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(d.animated.img, {
                        style: {
                            opacity: c.opacity
                        },
                        src: a,
                        width: 40,
                        height: 40,
                        alt: r
                    }), (0, n.jsx)(d.animated.img, {
                        className: g.ratingInner,
                        style: {
                            opacity: u.opacity
                        },
                        src: t,
                        width: 40,
                        height: 40,
                        alt: r
                    })]
                })
            }

            function O(e) {
                let {
                    selectedRating: t,
                    setSelectedRating: a,
                    disableAnimation: l
                } = e, s = (0, o.default)();
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(u.Heading, {
                        variant: "heading-md/semibold",
                        children: E.default.Messages.GUILD_FEED_FEEDBACK_SECTION_1_TITLE
                    }), (0, n.jsx)(u.Text, {
                        variant: "text-md/normal",
                        children: E.default.Messages.GUILD_FEED_FEEDBACK_SECTION_1_SUBTITLE
                    }), (0, n.jsx)("div", {
                        className: g.ratingsContainer,
                        children: b.map(e => (0, n.jsxs)("div", {
                            className: g.ratingContainer,
                            children: [(0, n.jsx)(u.Clickable, {
                                className: g.rating,
                                onClick: () => {
                                    a(e.value)
                                },
                                children: (0, n.jsx)(G, {
                                    defaultSrc: (0, r.isThemeDark)(s) ? e.dark : e.light,
                                    selectedSrc: e.selected,
                                    selected: t === e.value,
                                    alt: e.altDescription(),
                                    disableAnimation: l
                                })
                            }), null != e.description ? (0, n.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                children: e.altDescription()
                            }) : null]
                        }, e.value))
                    })]
                })
            }

            function y(e) {
                var t;
                let {
                    selectedRating: a,
                    selectedReasons: l,
                    onSelectedReasons: s,
                    onUserFeedbackChanged: d,
                    onSubmitPressed: r,
                    canSubmit: o
                } = e;
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(u.Heading, {
                        variant: "heading-md/semibold",
                        children: E.default.Messages.GUILD_FEED_FEEDBACK_SECTION_2_TITLE.format({
                            rating: a.toLowerCase()
                        })
                    }), (0, n.jsx)("div", {
                        className: g.pillContainer,
                        children: (null !== (t = (0, h.GUILD_FEED_FEEDBACK_REASONS)[a]) && void 0 !== t ? t : []).map(e => (0, n.jsx)(u.Clickable, {
                            onClick: () => s(e),
                            className: i(g.pill, l.has(e) ? g.pillSelected : null),
                            children: (0, n.jsx)(u.Text, {
                                variant: "text-md/normal",
                                children: (0, c.getDescriptionFromReason)(e)
                            })
                        }, e))
                    }), l.has(h.GuildFeedFeedbackReason.OTHER) ? (0, n.jsx)(u.TextInput, {
                        autoFocus: !0,
                        className: g.textInput,
                        onChange: d,
                        placeholder: E.default.Messages.GUILD_FEED_FEEDBACK_OTHER_PLACEHOLDER
                    }) : null, (0, n.jsx)(u.Button, {
                        className: g.button,
                        disabled: !o,
                        onClick: r,
                        children: E.default.Messages.SUBMIT
                    })]
                })
            }

            function H() {
                return (0, n.jsxs)("div", {
                    children: [(0, n.jsx)("img", {
                        src: R,
                        width: 75,
                        height: 75,
                        alt: ""
                    }), (0, n.jsx)(u.Heading, {
                        variant: "heading-md/semibold",
                        children: E.default.Messages.GUILD_FEED_FEEDBACK_SECTION_3_TITLE
                    })]
                })
            }

            function k(e) {
                let t, a;
                let {
                    selectedRating: l,
                    setSelectedRating: s,
                    selectedReasons: d,
                    setSelectedReasons: r,
                    setUserFeedback: o,
                    backPressed: h,
                    onSubmitPressed: E,
                    onBackPressed: I,
                    onClosePressed: _,
                    showSubmitted: x,
                    canSubmit: S,
                    isAnimating: C,
                    useReducedMotion: v
                } = (0, c.useGuildFeedFeedback)(e);
                return x ? (a = !1, t = (0, n.jsx)(H, {})) : null == l || h || C ? (a = !1, t = (0, n.jsx)(O, {
                    disableAnimation: h || v,
                    selectedRating: l,
                    setSelectedRating: s
                })) : (a = !0, t = (0, n.jsx)(y, {
                    selectedRating: l,
                    selectedReasons: d,
                    onSelectedReasons: r,
                    onUserFeedbackChanged: o,
                    onBackPressed: I,
                    onSubmitPressed: E,
                    canSubmit: S
                })), (0, n.jsx)("div", {
                    className: g.parentContainer,
                    onClick: e => e.stopPropagation(),
                    children: (0, n.jsxs)("div", {
                        className: i(g.container, g.containerDivider),
                        children: [t, a ? (0, n.jsx)(u.Clickable, {
                            className: i(g.icon, g.back),
                            onClick: I,
                            children: (0, n.jsx)(f.default, {
                                direction: f.default.Directions.LEFT
                            })
                        }) : null, (0, n.jsx)(u.Clickable, {
                            className: i(g.icon, g.close),
                            onClick: _,
                            children: (0, n.jsx)(m.default, {})
                        })]
                    })
                })
            }
        },
        339274: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return o
                }
            });
            var n = a("37983"),
                l = a("884691"),
                s = a("414456"),
                i = a.n(s),
                d = a("77078"),
                r = a("333987"),
                u = a("975802"),
                o = l.forwardRef(function(e, t) {
                    let {
                        className: a,
                        children: s,
                        ariaLabel: o,
                        onContextMenu: c,
                        onCardClick: f,
                        onItemClick: m,
                        listItemProps: h,
                        itemId: E,
                        selected: g,
                        ...I
                    } = e, [_, x] = (0, r.default)(t), S = l.useRef(null);
                    return (0, n.jsxs)("div", {
                        ref: x,
                        className: i(u.card, u.interactiveCard, {
                            [u.selected]: g
                        }, a),
                        "data-item-id": E,
                        onContextMenu: c,
                        onClick: e => null == f ? void 0 : f(e, _.current),
                        ...I,
                        children: [(0, n.jsx)(d.Clickable, {
                            className: u.clickableTarget,
                            innerRef: S,
                            "aria-label": o,
                            onClick: m,
                            ...h
                        }), s]
                    })
                })
        },
        537594: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return E
                }
            });
            var n = a("37983"),
                l = a("884691"),
                s = a("611221"),
                i = a("446674"),
                d = a("449008"),
                r = a("713810"),
                u = a("185014"),
                o = a("530853"),
                c = a("435837"),
                f = a("592979"),
                m = a("232882"),
                h = a("309673"),
                E = l.memo(function(e) {
                    let {
                        guildId: t,
                        itemId: a,
                        scrollerHeight: E,
                        scrollerRef: g,
                        showFeedback: I,
                        setOnDismissedFeedback: _
                    } = e, [x, S, C] = (0, i.useStateFromStoresArray)([u.default], () => [u.default.getItem(t, a), u.default.getIsItemHiding(t, a), u.default.getIsItemHidden(t, a)]), v = l.useRef(null);
                    if (l.useEffect(() => {
                            var e;
                            let n = v.current;
                            if (null == n || null == E) {
                                (0, r.markGuildFeedItemAsUnseen)(t, a, Date.now());
                                return
                            }
                            let l = n.clientHeight,
                                s = null === (e = g.current) || void 0 === e ? void 0 : e.getScrollerNode();
                            if (null == s) return;
                            let i = Math.min(.5, .5 * E / l),
                                d = new IntersectionObserver(e => (function(e, t, a) {
                                    for (let n of a) {
                                        let a = n.target.dataset.itemId;
                                        if (null == a) return;
                                        let l = Date.now();
                                        n.intersectionRatio >= t ? (0, r.markGuildFeedItemAsSeen)(e, a, l) : (0, r.markGuildFeedItemAsUnseen)(e, a, l)
                                    }
                                })(t, i, e), {
                                    root: s,
                                    rootMargin: "0px 100000px 0px 100000px",
                                    threshold: i
                                });
                            return d.observe(n), () => {
                                d.disconnect()
                            }
                        }, [a, t, g, E, S, C]), null == x || C) return null;
                    if (S) return (0, n.jsx)(c.default, {
                        guildId: t,
                        feedItem: x
                    });
                    switch (x.type) {
                        case s.GuildFeedItemTypes.FORUM_POST:
                            return (0, n.jsx)(h.default, {
                                ref: v,
                                guildId: t,
                                postItem: x,
                                showFeedback: I,
                                setOnDismissedFeedback: _
                            });
                        case s.GuildFeedItemTypes.MESSAGE:
                            return (0, n.jsx)(m.default, {
                                ref: v,
                                guildId: t,
                                messageItem: x,
                                showFeedback: I,
                                setOnDismissedFeedback: _
                            });
                        case s.GuildFeedItemTypes.MESSAGE_BUNDLE:
                            return (0, n.jsx)(f.default, {
                                ref: v,
                                guildId: t,
                                messageBundleItem: x,
                                showFeedback: I,
                                setOnDismissedFeedback: _
                            });
                        case s.GuildFeedItemTypes.CONVERSATION:
                            return (0, n.jsx)(o.default, {
                                ref: v,
                                guildId: t,
                                conversationItem: x,
                                showFeedback: I,
                                setOnDismissedFeedback: _
                            });
                        default:
                            (0, d.assertNever)(x)
                    }
                })
        },
        605143: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return d
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("414456"),
                s = a.n(l),
                i = a("880116");

            function d(e) {
                let {
                    children: t,
                    hideBorder: a
                } = e;
                return (0, n.jsx)("div", {
                    className: s(i.feedItemHeader, {
                        [i.hideBorder]: a
                    }),
                    children: t
                })
            }
        },
        435837: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return T
                }
            });
            var n = a("37983"),
                l = a("884691"),
                s = a("355262"),
                i = a("801110"),
                d = a("446674"),
                r = a("77078"),
                u = a("679653"),
                o = a("419830"),
                c = a("42203"),
                f = a("26989"),
                m = a("27618"),
                h = a("697218"),
                E = a("116320"),
                g = a("867544"),
                I = a("387111"),
                _ = a("713810"),
                x = a("60036"),
                S = a("339274"),
                C = a("605143"),
                v = a("782340"),
                N = a("327797");

            function p(e) {
                let {
                    guildId: t,
                    feedItem: a,
                    onSendFeedback: l
                } = e, s = (0, x.default)(a), g = s.channel_id, S = (0, d.useStateFromStores)([c.default], () => c.default.getChannel(g)), C = (0, u.default)(S), p = (0, o.getChannelIconComponent)(S), T = (0, d.useStateFromStores)([h.default], () => h.default.getUser(s.author.id)), A = (0, d.useStateFromStores)([c.default, f.default, m.default], () => I.default.getName(t, g, T)), M = e => {
                    (0, _.setFeedItemPreference)(t, e), l()
                };
                return (0, n.jsxs)("div", {
                    className: N.options,
                    children: [(0, n.jsx)(r.Clickable, {
                        className: N.option,
                        onClick: () => M({
                            channel_id: g,
                            message_id: s.id,
                            entity_type: i.GuildFeedPreferenceEntityTypes.MESSAGE
                        }),
                        children: (0, n.jsx)(r.Text, {
                            variant: "text-md/normal",
                            color: "interactive-active",
                            children: v.default.Messages.GUILD_FEED_HIDDEN_MESSAGE_FEEDBACK_NO_LIKE
                        })
                    }), (0, n.jsx)(r.Clickable, {
                        className: N.option,
                        onClick: () => M({
                            channel_id: g,
                            entity_type: i.GuildFeedPreferenceEntityTypes.CHANNEL
                        }),
                        children: (0, n.jsx)(r.Text, {
                            variant: "text-md/normal",
                            color: "interactive-active",
                            children: v.default.Messages.GUILD_FEED_HIDDEN_MESSAGE_FEEDBACK_SHOW_LESS_CHANNEL.format({
                                channelName: C,
                                channelNameHook: (e, t) => (0, n.jsxs)("span", {
                                    children: [null != p && (0, n.jsx)(p, {
                                        className: N.mentionIcon,
                                        width: 20,
                                        height: 20
                                    }), " ", e]
                                }, t)
                            })
                        })
                    }), (0, n.jsx)(r.Clickable, {
                        className: N.option,
                        onClick: () => {
                            var e;
                            return M({
                                user_id: null == s ? void 0 : null === (e = s.author) || void 0 === e ? void 0 : e.id,
                                entity_type: i.GuildFeedPreferenceEntityTypes.USER
                            })
                        },
                        children: (0, n.jsx)(r.Text, {
                            variant: "text-md/normal",
                            color: "interactive-active",
                            children: v.default.Messages.GUILD_FEED_HIDDEN_MESSAGE_FEEDBACK_SHOW_LESS_USER.format({
                                username: A,
                                usernameHook: (e, t) => (0, n.jsxs)("span", {
                                    children: [(0, n.jsx)(E.default, {
                                        className: N.mentionIcon,
                                        width: 20,
                                        height: 20
                                    }), " ", e]
                                }, t)
                            })
                        })
                    })]
                })
            }

            function T(e) {
                let {
                    guildId: t,
                    feedItem: a
                } = e, [i, d] = l.useState(!1), u = (0, s.useListItem)(a.id);
                return (0, n.jsxs)(S.default, {
                    ariaLabel: v.default.Messages.GUILD_FEED_HIDDEN_MESSAGE_ITEM,
                    listItemProps: u,
                    children: [(0, n.jsxs)(C.default, {
                        hideBorder: i,
                        children: [(0, n.jsx)(g.default, {
                            className: N.icon,
                            width: 16,
                            height: 16,
                            foregroundColor: "currentColor"
                        }), i ? (0, n.jsxs)("div", {
                            className: N.title,
                            children: [(0, n.jsx)(r.Text, {
                                className: N.title,
                                variant: "text-md/medium",
                                color: "interactive-active",
                                children: v.default.Messages.GUILD_FEED_HIDDEN_MESSAGE_ITEM_FEEDBACK_RECEIVED_TITLE
                            }), (0, n.jsx)(r.Text, {
                                className: N.title,
                                variant: "text-xs/medium",
                                color: "interactive-normal",
                                children: v.default.Messages.GUILD_FEED_HIDDEN_MESSAGE_ITEM_FEEDBACK_RECEIVED_SUBTITLE
                            })]
                        }) : (0, n.jsx)(r.Text, {
                            className: N.title,
                            variant: "text-md/medium",
                            color: "interactive-active",
                            children: v.default.Messages.GUILD_FEED_HIDDEN_MESSAGE_ITEM
                        }), (0, n.jsx)(r.Button, {
                            size: r.Button.Sizes.SMALL,
                            color: r.Button.Colors.PRIMARY,
                            onClick: () => {
                                (0, _.unhideItemFromGuildFeed)(a, t)
                            },
                            children: v.default.Messages.UNDO
                        })]
                    }), !i && (0, n.jsx)(p, {
                        guildId: t,
                        feedItem: a,
                        onSendFeedback: () => d(!0)
                    })]
                })
            }
        },
        759668: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return u
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("77078"),
                s = a("433487"),
                i = a("782340"),
                d = a("225409");

            function r(e) {
                e.stopPropagation()
            }

            function u(e) {
                let {
                    onContextMenu: t
                } = e, a = i.default.Messages.MORE;
                return (0, n.jsx)("div", {
                    onClick: r,
                    onContextMenu: r,
                    children: (0, n.jsx)(l.Tooltip, {
                        text: a,
                        hideOnClick: !0,
                        children: e => {
                            let {
                                onMouseEnter: i,
                                onMouseLeave: r,
                                onClick: u
                            } = e;
                            return (0, n.jsx)(l.Button, {
                                onMouseEnter: i,
                                onMouseLeave: r,
                                look: l.Button.Looks.BLANK,
                                size: l.Button.Sizes.NONE,
                                onClick: e => {
                                    null == u || u(), t(e)
                                },
                                "aria-label": a,
                                className: d.overflowButton,
                                children: (0, n.jsx)(s.default, {
                                    className: d.icon
                                })
                            })
                        }
                    })
                })
            }
        },
        208695: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                GuildFeedMessage: function() {
                    return P
                },
                default: function() {
                    return V
                }
            });
            var n = a("37983"),
                l = a("884691"),
                s = a("414456"),
                i = a.n(s),
                d = a("446674"),
                r = a("77078"),
                u = a("193865"),
                o = a("405645"),
                c = a("887446"),
                f = a("913491"),
                m = a("574073"),
                h = a("865343"),
                E = a("909917"),
                g = a("380986"),
                I = a("969706"),
                _ = a("39331"),
                x = a("115859"),
                S = a("702905"),
                C = a("611792"),
                v = a("554372"),
                N = a("256572"),
                p = a("208021"),
                T = a("582713"),
                A = a("42203"),
                M = a("780571"),
                D = a("497880"),
                j = a("93332"),
                F = a("713810"),
                L = a("185014"),
                R = a("2804"),
                b = a("603371"),
                G = a("515631"),
                O = a("49111"),
                y = a("724210"),
                H = a("894488"),
                k = a("782340"),
                U = a("923254"),
                w = a("877671");
            let B = l.memo(function(e) {
                    let {
                        message: t,
                        channel: a,
                        animateAvatar: s,
                        repliedMessage: i
                    } = e, {
                        popouts: d,
                        setPopout: r
                    } = (0, I.default)(t.id, H.DEFAULT_POPOUTS), {
                        usernameProfile: u,
                        avatarProfile: c
                    } = d, f = (0, g.useContextMenuUser)(t.author.id, a.id), h = (0, g.useClickMessageAuthorUsername)(t, a, u, r), _ = (0, g.useClickMessageAuthorAvatar)(c, r), x = l.useCallback(() => r({
                        usernameProfile: !1,
                        avatarProfile: !1,
                        referencedUsernameProfile: !1
                    }), [r]), S = (0, m.default)(t), C = (0, o.useRoleIcon)({
                        guildId: a.guild_id,
                        roleId: S.iconRoleId
                    });
                    return (0, n.jsx)(j.default, {
                        guildId: a.guild_id,
                        message: t,
                        channel: a,
                        repliedMessage: i,
                        author: S,
                        showTimestampOnHover: t.type !== O.MessageTypes.REPLY,
                        renderPopout: E.default,
                        showAvatarPopout: c,
                        showUsernamePopout: u,
                        onClickAvatar: _,
                        onClickUsername: h,
                        onPopoutRequestClose: x,
                        onContextMenu: f,
                        roleIcon: C,
                        animate: s
                    })
                }),
                P = l.forwardRef(function(e, t) {
                    var a, s;
                    let {
                        guildId: o,
                        channel: m,
                        message: E,
                        feedItemId: g,
                        className: I,
                        animateAvatar: j,
                        contentClassName: b,
                        children: H,
                        groupId: k,
                        onMessageClick: U,
                        hideHeader: P = !1,
                        forceAddReactions: V = !0,
                        ...W
                    } = e, K = l.useRef(null), Y = (0, d.useStateFromStores)([A.default], () => A.default.getChannel(m.id)), z = null != Y && E.isFirstMessageInForumPost(Y), X = (0, u.useShowImprovedMarkdownUserExperimentConfig)((null !== (a = E.editedTimestamp) && void 0 !== a ? a : E.timestamp).valueOf()), Z = (0, u.useShowImprovedMarkdownGuildExperimentConfig)(o, (null !== (s = E.editedTimestamp) && void 0 !== s ? s : E.timestamp).valueOf()), {
                        content: J,
                        hasSpoilerEmbeds: q
                    } = (0, _.default)(E, {
                        hideSimpleEmbedContent: !0,
                        allowList: z || X.showListsAndHeaders || Z.showListsAndHeaders,
                        allowHeading: z || X.showListsAndHeaders || Z.showListsAndHeaders,
                        allowLinks: X.showMaskedLinks || Z.showMaskedLinks,
                        previewLinkTarget: X.showMaskedLinks || Z.showMaskedLinks
                    }), Q = E.type === O.MessageTypes.REPLY ? E.messageReference : void 0, $ = (0, d.useStateFromStores)([N.default], () => N.default.getMessageByReference(Q)), ee = (0, d.useStateFromStores)([A.default], () => E.hasFlag(O.MessageFlags.HAS_THREAD) && A.default.getChannel(E.id)), et = (0, h.getMessageAriaLabelledBy)(E, k, {
                        hasTimestamp: E.id === k
                    }), ea = (0, h.getMessageAriaDescribedBy)(E), en = null != Q ? (0, n.jsx)(r.Clickable, {
                        onClick: e => {
                            null != $.message && (e.stopPropagation(), (0, F.trackFeedItemInteracted)({
                                feed_item_type: (0, R.getFeedItemTypeFromId)(g),
                                feed_item_id: g,
                                load_id: L.default.getLoadId(o),
                                action_type: G.FeedItemInteractionType.REFERENCED_MESSAGE_CLICKED,
                                guild_id: o,
                                channel_id: m.id,
                                message_id: E.id,
                                home_session_id: c.default.getHomeSessionId(o)
                            }), p.default.openChannelAsSidebar({
                                guildId: m.guild_id,
                                channelId: m.id,
                                baseChannelId: y.StaticChannelRoute.GUILD_HOME,
                                details: {
                                    type: T.SidebarOpenDetailsType.HOME,
                                    initialMessageId: $.message.id
                                }
                            }))
                        },
                        children: (0, v.default)(E, m, Q, $, !1)
                    }) : null, el = (0, f.default)(E), es = l.useCallback(e => {
                        U(e, K.current, E)
                    }, [U, E]);
                    return (0, n.jsx)(M.default, {
                        messageRef: K,
                        className: i(I, {
                            [w.mentioned]: E.mentioned && !(0, f.default)(E)
                        }),
                        onClick: es,
                        childrenRepliedMessage: en,
                        childrenExecutedCommand: (0, C.default)(E, m, !1),
                        childrenHeader: el || P ? null : (0, n.jsx)(B, {
                            channel: m,
                            message: E,
                            animateAvatar: j,
                            repliedMessage: $
                        }),
                        childrenAccessories: (0, x.default)({
                            channelMessageProps: e,
                            hasSpoilerEmbeds: q,
                            isInteracting: !1,
                            forceAddReactions: V
                        }),
                        childrenMessageContent: (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)(D.default, {
                                className: b,
                                message: E,
                                content: J,
                                contentRef: t
                            }), H]
                        }),
                        childrenSystemMessage: (0, S.default)(e),
                        hasThread: null != ee && E.hasFlag(O.MessageFlags.HAS_THREAD),
                        hasReply: E.type === O.MessageTypes.REPLY,
                        isSystemMessage: el,
                        "aria-labelledby": et,
                        "aria-describedby": ea,
                        ...W
                    })
                });
            var V = l.memo(function(e) {
                let {
                    message: t,
                    guildId: a,
                    feedItemId: s,
                    disableTruncation: d
                } = e, u = t.attachments.length > 0, [o, c] = l.useState(!1), [f, m] = (0, b.default)(a, s);
                return (0, n.jsx)(P, {
                    ref: e => {
                        null != e && !d && c(e.scrollHeight > e.clientHeight)
                    },
                    contentClassName: i({
                        [U.clampLarge]: !d && !f && !u,
                        [U.clampSmall]: !d && !f && u
                    }),
                    ...e,
                    children: o && !f ? (0, n.jsx)(r.Clickable, {
                        className: U.showMore,
                        onClick: e => m(e, t),
                        "aria-hidden": !0,
                        children: k.default.Messages.GUILD_FEED_TRUNCATED_MESSAGE_SEE_MORE
                    }) : null
                })
            })
        },
        449405: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return o
                }
            });
            var n = a("37983"),
                l = a("884691"),
                s = a("77078"),
                i = a("603371"),
                d = a("208695"),
                r = a("782340"),
                u = a("923254"),
                o = l.memo(function(e) {
                    let {
                        guildId: t,
                        feedItemId: a,
                        messages: o
                    } = e, c = l.useRef([]), f = o.some(e => e.attachments.length > 0), m = f ? 4 : 8, [h, E] = l.useState(), [g, I] = l.useState(), [_, x] = (0, i.default)(t, a);
                    if (l.useLayoutEffect(() => {
                            let e = 0;
                            for (let [a, n] of c.current.entries()) {
                                var t;
                                if (null == n) continue;
                                let l = parseFloat(null !== (t = window.getComputedStyle(n).getPropertyValue("line-height")) && void 0 !== t ? t : "0"),
                                    s = n.scrollHeight / l;
                                if ((e += s) > m) {
                                    E(a), I(s - (e - m));
                                    break
                                }
                            }
                        }, [o, m]), 0 === o.length) return null;
                    let S = o[0].id;
                    return (0, n.jsx)(n.Fragment, {
                        children: o.map((t, a) => {
                            if (null != h && a > h && !_) return null;
                            let l = h === a,
                                i = l && null != g ? function(e) {
                                    if (e >= 10) return u.clampLarge;
                                    if (e >= 4 && e < 10) return u.clampMed;
                                    if (e < 4) return u.clampSmall
                                }(g) : null,
                                f = l && null != i && !_;
                            return (0, n.jsx)(d.GuildFeedMessage, {
                                message: t,
                                groupId: S,
                                ...e,
                                contentClassName: f ? i : void 0,
                                children: f ? (0, n.jsx)(s.Clickable, {
                                    className: u.showMore,
                                    onClick: e => x(e, t),
                                    "aria-hidden": !0,
                                    children: r.default.Messages.GUILD_FEED_TRUNCATED_MESSAGE_SEE_MORE
                                }) : null,
                                ref: e => c.current[a] = e,
                                hideHeader: 0 !== a,
                                forceAddReactions: a === o.length - 1
                            }, t.id)
                        })
                    })
                })
        },
        592979: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return b
                }
            });
            var n = a("37983"),
                l = a("884691"),
                s = a("355262"),
                i = a("446674"),
                d = a("77078"),
                r = a("272030"),
                u = a("679653"),
                o = a("419830"),
                c = a("537325"),
                f = a("208021"),
                m = a("582713"),
                h = a("982108"),
                E = a("42203"),
                g = a("27618"),
                I = a("449008"),
                _ = a("185014"),
                x = a("886484"),
                S = a("60036"),
                C = a("468670"),
                v = a("113312"),
                N = a("339274"),
                p = a("605143"),
                T = a("759668"),
                A = a("449405"),
                M = a("232882"),
                D = a("49111"),
                j = a("724210"),
                F = a("782340"),
                L = a("700045");
            let R = async () => {
                let {
                    default: e
                } = await a.el("814781").then(a.bind(a, "814781"));
                return e
            };
            var b = l.forwardRef(function(e, t) {
                var a, b, G;
                let {
                    guildId: O,
                    messageBundleItem: y,
                    showFeedback: H,
                    setOnDismissedFeedback: k
                } = e, {
                    messages: U
                } = y, w = U[0].message, B = U[U.length - 1].message, P = B.channel_id, V = (0, i.useStateFromStoresArray)([_.default], () => U.map(e => _.default.getCachedMessage(O, P, e.message.id)).filter(I.isNotNullish), [O, P, U]), W = (0, i.useStateFromStores)([E.default], () => E.default.getChannel(P)), K = (0, o.getChannelIconComponent)(W, void 0, {
                    textFocused: !0
                }), Y = (0, o.getChannelIconTooltipText)(W), z = (0, u.default)(W), [X, Z] = l.useState(!1), J = (0, i.useStateFromStores)([g.default], () => null != B && g.default.isBlocked(B.author.id)), q = (0, s.useListItem)(null !== (b = null === (a = V[V.length - 1]) || void 0 === a ? void 0 : a.id) && void 0 !== b ? b : y.id), Q = y.id, $ = (0, i.useStateFromStores)([h.default], () => h.default.getSidebarState(j.StaticChannelRoute.GUILD_HOME)), ee = (0, x.getSidebarMessageId)($, W), et = null != ee && w.id === ee, {
                    handleItemClick: ea,
                    handleChannelClick: en,
                    handleCardClick: el,
                    handleMessageClick: es
                } = (0, C.default)({
                    guildId: O,
                    channelId: P,
                    feedItemId: Q,
                    onChannelClick: () => (0, c.default)(D.Routes.CHANNEL(O, P, w.id)),
                    onContentClick: e => {
                        var t;
                        f.default.openChannelAsSidebar({
                            guildId: O,
                            channelId: P,
                            baseChannelId: j.StaticChannelRoute.GUILD_HOME,
                            flash: !1,
                            details: {
                                type: m.SidebarOpenDetailsType.HOME,
                                initialMessageId: null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : w.id,
                                highlightMessageIds: new Set((0, S.getAllMessageIdsFromFeedItem)(y))
                            }
                        })
                    }
                }), ei = l.useMemo(() => U.map(e => null !== (G = e.referenceMessages) && void 0 !== G ? G : []).flat(), [U]);
                if (null == W || null == w || null == B || J) return null;
                let ed = e => {
                    e.stopPropagation(), (0, r.openContextMenuLazy)(e, async () => {
                        let e = await R();
                        return t => (0, n.jsx)(e, {
                            ...t,
                            item: y,
                            channel: W
                        })
                    })
                };
                return (0, n.jsxs)(N.default, {
                    className: H ? L.containerNoPadding : L.container,
                    ref: t,
                    selected: et,
                    onCardClick: el,
                    onItemClick: ea,
                    onContextMenu: ed,
                    itemId: Q,
                    ariaLabel: F.default.Messages.GUILD_FEED_MESSAGE_ITEM_A11Y_LABEL.format({
                        channelName: z
                    }),
                    listItemProps: q,
                    onMouseEnter: () => Z(!0),
                    onMouseLeave: () => Z(!1),
                    children: [(0, n.jsxs)(d.HeadingLevel, {
                        component: (0, n.jsxs)(p.default, {
                            children: [(0, n.jsx)("div", {
                                className: L.messageHeaderMenuLeft,
                                children: (0, n.jsxs)(d.Clickable, {
                                    className: L.channelNameContainer,
                                    onClick: en,
                                    children: [null != K ? (0, n.jsx)(d.Tooltip, {
                                        text: Y,
                                        delay: 500,
                                        children: e => (0, n.jsx)(K, {
                                            ...e,
                                            className: L.channelIcon,
                                            height: 16,
                                            width: 16
                                        })
                                    }) : null, (0, n.jsx)(d.Heading, {
                                        lineClamp: 1,
                                        variant: "heading-sm/semibold",
                                        children: z
                                    })]
                                })
                            }), (0, n.jsx)("div", {
                                className: L.messageHeaderMenuRight,
                                children: (0, n.jsx)(T.default, {
                                    feedItem: y,
                                    guildId: O,
                                    onContextMenu: ed
                                })
                            })]
                        }),
                        children: [(0, n.jsx)("div", {
                            className: L.messageBundleItemBody,
                            children: (0, n.jsx)(A.default, {
                                feedItemId: y.id,
                                guildId: O,
                                channel: W,
                                messages: V,
                                animateAvatar: X,
                                onMessageClick: es
                            })
                        }), (0, n.jsx)(M.ReferenceMessages, {
                            referenceMessages: ei,
                            guildId: O
                        })]
                    }), H && (0, n.jsx)(v.default, {
                        guildId: O,
                        guildFeedItem: y,
                        setOnDismissFeedback: k
                    })]
                })
            })
        },
        232882: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                ReferenceMessagesBase: function() {
                    return G
                },
                ReferenceMessages: function() {
                    return O
                },
                default: function() {
                    return y
                }
            });
            var n = a("37983"),
                l = a("884691"),
                s = a("355262"),
                i = a("611221"),
                d = a("446674"),
                r = a("77078"),
                u = a("272030"),
                o = a("679653"),
                c = a("419830"),
                f = a("537325"),
                m = a("208021"),
                h = a("582713"),
                E = a("982108"),
                g = a("42203"),
                I = a("27618"),
                _ = a("811305"),
                x = a("185014"),
                S = a("886484"),
                C = a("2804"),
                v = a("468670"),
                N = a("120027"),
                p = a("113312"),
                T = a("339274"),
                A = a("605143"),
                M = a("759668"),
                D = a("208695"),
                j = a("49111"),
                F = a("724210"),
                L = a("782340"),
                R = a("820984");
            let b = async () => {
                let {
                    default: e
                } = await a.el("437150").then(a.bind(a, "437150"));
                return e
            };

            function G(e) {
                let {
                    guildId: t,
                    maxUsers: a,
                    users: l,
                    text: s
                } = e;
                return (0, n.jsxs)("div", {
                    className: R.referenceMessagesText,
                    children: [(0, n.jsx)(_.default, {
                        guildId: t,
                        users: l,
                        size: _.Sizes.SIZE_16,
                        className: R.userSummaryItem,
                        max: a,
                        showDefaultAvatarsForNullUsers: !0
                    }), (0, n.jsx)(r.Text, {
                        variant: "text-xs/normal",
                        color: "header-secondary",
                        children: s
                    })]
                })
            }

            function O(e) {
                let {
                    referenceMessages: t,
                    guildId: a
                } = e, s = l.useMemo(() => {
                    let e = new Set;
                    return t.map(e => e.author).filter(t => !(null == t || e.has(t.id)) && (e.add(t.id), !0)).slice(0, 3)
                }, [t]), i = t.length;
                if (0 === i) return null;
                let d = i > 3 ? L.default.Messages.GUILD_FEED_MESSAGE_ITEM_MAX_REPLIES.format({
                    maxReplies: 3
                }) : L.default.Messages.GUILD_FEED_MESSAGE_ITEM_NUM_REPLIES.format({
                    numReplies: i
                });
                return (0, n.jsx)(G, {
                    guildId: a,
                    users: s,
                    text: d
                })
            }
            var y = l.forwardRef(function(e, t) {
                var a, _;
                let {
                    guildId: G,
                    messageItem: y,
                    showFeedback: H,
                    setOnDismissedFeedback: k
                } = e, U = y.message.channel_id, w = y.message.id, {
                    message: B,
                    isFeaturedMessage: P
                } = (0, d.useStateFromStoresObject)([x.default], () => {
                    let e = x.default.getCachedMessage(G, U, w),
                        t = null != e && x.default.getIsItemFeatured({
                            guildId: G,
                            entity: e,
                            entityType: i.GuildFeedItemTypes.MESSAGE
                        });
                    return {
                        message: e,
                        isFeaturedMessage: t
                    }
                }, [G, U, w]), V = (0, d.useStateFromStores)([g.default], () => g.default.getChannel(U)), W = (0, c.getChannelIconComponent)(V, void 0, {
                    textFocused: !0
                }), K = (0, c.getChannelIconTooltipText)(V), Y = null !== (a = null == y ? void 0 : y.referenceMessages) && void 0 !== a ? a : [], z = (0, o.default)(V), [X, Z] = l.useState(!1), J = (0, d.useStateFromStores)([I.default], () => null != B && I.default.isBlocked(null == B ? void 0 : B.author.id)), q = (0, s.useListItem)(null !== (_ = null == B ? void 0 : B.id) && void 0 !== _ ? _ : w), Q = (0, C.default)(y), $ = (0, d.useStateFromStores)([E.default], () => E.default.getSidebarState(F.StaticChannelRoute.GUILD_HOME)), ee = (0, S.getSidebarMessageId)($, V), et = null != ee && y.message.id === ee, ea = y.highlighted ? L.default.Messages.GUILD_FEED_SPECIAL_HIGHLIGHT : P ? L.default.Messages.GUILD_FEED_FEATURED_BY_MODERATORS : null, {
                    handleItemClick: en,
                    handleChannelClick: el,
                    handleCardClick: es,
                    handleMessageClick: ei
                } = (0, v.default)({
                    guildId: G,
                    channelId: U,
                    feedItemId: Q,
                    onChannelClick: () => (0, f.default)(j.Routes.CHANNEL(G, U, w)),
                    onContentClick: () => {
                        m.default.openChannelAsSidebar({
                            guildId: G,
                            channelId: U,
                            baseChannelId: F.StaticChannelRoute.GUILD_HOME,
                            details: {
                                type: h.SidebarOpenDetailsType.HOME,
                                initialMessageId: w,
                                highlightMessageIds: new Set([w])
                            }
                        })
                    }
                });
                if (null == V || null == B || null == y || J) return null;
                let ed = e => {
                    e.stopPropagation(), (0, u.openContextMenuLazy)(e, async () => {
                        let e = await b();
                        return t => (0, n.jsx)(e, {
                            ...t,
                            messageItem: y,
                            channel: V,
                            message: B
                        })
                    })
                };
                return (0, n.jsxs)(T.default, {
                    className: H ? R.containerNoPadding : R.container,
                    ref: t,
                    selected: et,
                    onCardClick: es,
                    onItemClick: en,
                    onContextMenu: ed,
                    itemId: Q,
                    ariaLabel: L.default.Messages.GUILD_FEED_MESSAGE_ITEM_A11Y_LABEL.format({
                        channelName: z
                    }),
                    listItemProps: q,
                    onMouseEnter: () => Z(!0),
                    onMouseLeave: () => Z(!1),
                    children: [(0, n.jsxs)(r.HeadingLevel, {
                        component: (0, n.jsxs)(A.default, {
                            children: [(0, n.jsxs)("div", {
                                className: R.messageHeaderMenuLeft,
                                children: [(0, n.jsxs)(r.Clickable, {
                                    className: R.channelNameContainer,
                                    onClick: el,
                                    children: [null != W ? (0, n.jsx)(r.Tooltip, {
                                        text: K,
                                        delay: 500,
                                        children: e => (0, n.jsx)(W, {
                                            ...e,
                                            className: R.channelIcon,
                                            height: 16,
                                            width: 16
                                        })
                                    }) : null, (0, n.jsx)(r.Heading, {
                                        lineClamp: 1,
                                        variant: "heading-sm/semibold",
                                        children: z
                                    })]
                                }), null != ea && (0, n.jsxs)("div", {
                                    className: R.featuredMessageContainer,
                                    children: [(0, n.jsx)(N.default, {
                                        height: 4,
                                        width: 4,
                                        "aria-hidden": "true",
                                        className: R.featuredMessageIcon
                                    }), (0, n.jsx)(r.Text, {
                                        className: R.featuredMessageText,
                                        variant: "text-sm/normal",
                                        color: "header-secondary",
                                        children: ea
                                    })]
                                })]
                            }), (0, n.jsx)("div", {
                                className: R.messageHeaderMenuRight,
                                children: (0, n.jsx)(M.default, {
                                    feedItem: y,
                                    guildId: G,
                                    onContextMenu: ed
                                })
                            })]
                        }),
                        children: [(0, n.jsx)(D.default, {
                            className: R.messageItemBody,
                            guildId: G,
                            animateAvatar: X,
                            channel: V,
                            message: B,
                            feedItemId: y.id,
                            onMessageClick: ei
                        }), (0, n.jsx)(O, {
                            referenceMessages: Y,
                            guildId: G
                        })]
                    }), H && (0, n.jsx)(p.default, {
                        guildId: G,
                        guildFeedItem: y,
                        setOnDismissFeedback: k
                    })]
                })
            })
        },
        309673: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return P
                }
            });
            var n = a("37983"),
                l = a("884691"),
                s = a("597755"),
                i = a.n(s),
                d = a("355262"),
                r = a("611221"),
                u = a("446674"),
                o = a("77078"),
                c = a("272030"),
                f = a("679653"),
                m = a("419830"),
                h = a("680986"),
                E = a("90625"),
                g = a("537325"),
                I = a("208021"),
                _ = a("800843"),
                x = a("610730"),
                S = a("982108"),
                C = a("42203"),
                v = a("27618"),
                N = a("185014"),
                p = a("886484"),
                T = a("2804"),
                A = a("468670"),
                M = a("120027"),
                D = a("113312"),
                j = a("339274"),
                F = a("605143"),
                L = a("759668"),
                R = a("208695"),
                b = a("232882"),
                G = a("49111"),
                O = a("724210"),
                y = a("648564"),
                H = a("782340"),
                k = a("137722");
            let U = new Set(["Electron", "Chrome"]),
                w = async () => {
                    let {
                        default: e
                    } = await a.el("437150").then(a.bind(a, "437150"));
                    return e
                };

            function B(e) {
                var t;
                let {
                    channel: a
                } = e, l = (0, u.useStateFromStores)([x.default], () => null !== (t = x.default.getCount(a.id)) && void 0 !== t ? t : 0), s = l >= y.MAX_THREAD_MESSAGE_COUNT ? H.default.Messages.GUILD_FEED_MESSAGE_ITEM_MAX_REPLIES.format({
                    maxReplies: y.MAX_THREAD_MESSAGE_COUNT
                }) : H.default.Messages.GUILD_FEED_MESSAGE_ITEM_NUM_REPLIES.format({
                    numReplies: l
                }), i = (0, u.useStateFromStores)([_.default], () => _.default.getMemberIdsPreview(a.id)), d = (0, h.useFacepileUsers)(a, null != i ? i : []);
                return 0 === l ? null : (0, n.jsx)(b.ReferenceMessagesBase, {
                    guildId: a.guild_id,
                    maxUsers: 5,
                    users: d,
                    text: s
                })
            }
            var P = l.forwardRef(function(e, t) {
                var a;
                let {
                    guildId: s,
                    postItem: _,
                    showFeedback: x,
                    setOnDismissedFeedback: b
                } = e, {
                    thread: y
                } = _, P = (0, u.useStateFromStores)([C.default], () => C.default.getChannel(y.id), [y.id]), {
                    message: V,
                    isFeaturedPost: W
                } = (0, u.useStateFromStoresObject)([N.default], () => {
                    let e = N.default.getCachedMessage(s, y.id, _.message.id),
                        t = N.default.getIsItemFeatured({
                            guildId: s,
                            entity: y,
                            entityType: r.GuildFeedItemTypes.FORUM_POST
                        });
                    return {
                        message: e,
                        isFeaturedPost: t
                    }
                }, [s, _.message.id, y]), K = (0, f.default)(y), Y = (0, u.useStateFromStores)([v.default], () => null != V && v.default.isBlocked(null == V ? void 0 : V.author.id)), z = (0, d.useListItem)(null !== (a = null == V ? void 0 : V.id) && void 0 !== a ? a : _.message.id), X = (0, T.default)(_), Z = (0, m.getChannelIconTooltipText)(y), J = (0, u.useStateFromStores)([C.default], () => C.default.getChannel(y.parent_id)), q = (0, f.default)(J), Q = (0, m.getChannelIconComponent)(J), [$, ee] = l.useState(!1), et = (0, u.useStateFromStores)([S.default], () => S.default.getSidebarState(O.StaticChannelRoute.GUILD_HOME)), ea = (0, p.getSidebarMessageId)(et, P), en = null != ea && _.message.id === ea, el = _.highlighted ? H.default.Messages.GUILD_FEED_SPECIAL_HIGHLIGHT : W ? H.default.Messages.GUILD_FEED_FEATURED_BY_MODERATORS : null, {
                    handleItemClick: es,
                    handleChannelClick: ei,
                    handleCardClick: ed,
                    handleMessageClick: er
                } = (0, A.default)({
                    guildId: s,
                    channelId: y.id,
                    feedItemId: X,
                    onChannelClick: () => (0, g.default)(G.Routes.CHANNEL(s, y.parent_id)),
                    onContentClick: () => I.default.openThreadAsSidebar({
                        guildId: s,
                        baseChannelId: O.StaticChannelRoute.GUILD_HOME,
                        channelId: y.id
                    })
                }), [eu, eo] = (0, h.useSomeAppliedTags)(y), ec = eu[0], ef = (0, h.useAppliedTags)(y).slice(1), em = null != i.name && !U.has(i.name);
                if (null == y || null == P || null == V || null == _ || Y) return null;
                let eh = e => {
                    e.stopPropagation(), (0, c.openContextMenuLazy)(e, async () => {
                        let e = await w();
                        return t => (0, n.jsx)(e, {
                            ...t,
                            messageItem: _,
                            channel: P,
                            message: V
                        })
                    })
                };
                return (0, n.jsxs)(j.default, {
                    className: x ? k.containerNoPadding : k.container,
                    ref: t,
                    selected: en,
                    onCardClick: ed,
                    onItemClick: es,
                    onContextMenu: eh,
                    itemId: X,
                    ariaLabel: H.default.Messages.GUILD_FEED_MESSAGE_ITEM_A11Y_LABEL.format({
                        channelName: K
                    }),
                    listItemProps: z,
                    onMouseEnter: () => ee(!0),
                    onMouseLeave: () => ee(!1),
                    children: [(0, n.jsx)(o.HeadingLevel, {
                        component: (0, n.jsxs)(F.default, {
                            children: [(0, n.jsxs)("div", {
                                className: k.postHeaderMenuLeft,
                                children: [(0, n.jsxs)(o.Clickable, {
                                    className: k.channelNameContainer,
                                    onClick: ei,
                                    children: [null != Q ? (0, n.jsx)(o.Tooltip, {
                                        text: Z,
                                        delay: 500,
                                        children: e => (0, n.jsx)(Q, {
                                            ...e,
                                            className: k.channelIcon,
                                            height: 16,
                                            width: 16
                                        })
                                    }) : null, (0, n.jsx)(o.Heading, {
                                        className: k.channelName,
                                        variant: "heading-sm/semibold",
                                        lineClamp: 1,
                                        children: q
                                    })]
                                }), null != el && (0, n.jsxs)("div", {
                                    className: k.featuredPostContainer,
                                    children: [(0, n.jsx)(M.default, {
                                        height: 4,
                                        width: 4,
                                        "aria-hidden": "true",
                                        className: k.featuredPostIcon
                                    }), (0, n.jsx)(o.Text, {
                                        className: k.featuredPostText,
                                        variant: "text-sm/normal",
                                        color: "header-secondary",
                                        children: el
                                    })]
                                })]
                            }), (0, n.jsx)("div", {
                                className: k.postHeaderMenuRight,
                                children: (0, n.jsx)(L.default, {
                                    feedItem: _,
                                    guildId: s,
                                    onContextMenu: eh
                                })
                            })]
                        }),
                        children: (0, n.jsxs)(o.HeadingLevel, {
                            component: (0, n.jsxs)("div", {
                                className: k.titleContainer,
                                children: [(0, n.jsx)(o.Heading, {
                                    className: k.title,
                                    variant: "heading-lg/semibold",
                                    children: y.name
                                }), null != ec ? (0, n.jsxs)("div", {
                                    className: k.tags,
                                    children: [(0, n.jsx)(E.default, {
                                        tag: ec,
                                        size: E.default.Sizes.SMALL
                                    }), eo > 0 ? (0, n.jsx)(E.ForumTagOverflow, {
                                        tags: ef,
                                        count: eo,
                                        size: E.default.Sizes.SMALL
                                    }) : null]
                                }) : null]
                            }),
                            children: [(0, n.jsx)(R.default, {
                                className: k.messageItemBody,
                                guildId: y.guild_id,
                                animateAvatar: $,
                                channel: y,
                                message: V,
                                feedItemId: _.id,
                                onMessageClick: er,
                                disableTruncation: em
                            }), (0, n.jsx)(B, {
                                channel: y
                            })]
                        })
                    }), x && (0, n.jsx)(D.default, {
                        guildId: s,
                        guildFeedItem: _,
                        setOnDismissFeedback: b
                    })]
                })
            })
        },
        603371: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return u
                }
            });
            var n = a("884691"),
                l = a("887446"),
                s = a("713810"),
                i = a("185014"),
                d = a("2804"),
                r = a("515631");

            function u(e, t) {
                let [a, u] = n.useState(!1), o = n.useCallback((a, n) => {
                    a.stopPropagation(), u(!0), (0, s.trackFeedItemInteracted)({
                        feed_item_type: (0, d.getFeedItemTypeFromId)(t),
                        feed_item_id: t,
                        load_id: i.default.getLoadId(e),
                        action_type: r.FeedItemInteractionType.EXPANDED_ITEM,
                        guild_id: e,
                        channel_id: n.channel_id,
                        message_id: n.id,
                        home_session_id: l.default.getHomeSessionId(e)
                    })
                }, [e, t]);
                return [a, o]
            }
        },
        302120: function(e, t, a) {
            "use strict";
            var n, l, s, i;
            a.r(t), a.d(t, {
                GUILD_FEED_FEEDBACK_LAST_SEEN: function() {
                    return d
                },
                GUILD_FEED_FEEDBACK_TIME_OUT: function() {
                    return r
                },
                GUILD_FEED_FEEDBACK_ANIMATION_DURATION: function() {
                    return u
                },
                GuildFeedbackRating: function() {
                    return n
                },
                GuildFeedFeedbackReason: function() {
                    return l
                },
                GUILD_FEED_FEEDBACK_REASONS: function() {
                    return o
                }
            });
            let d = "guild_feed_feedback_last_seen",
                r = 6048e5,
                u = 450;
            (s = n || (n = {})).TERRIBLE = "terrible", s.BAD = "bad", s.OKAY = "okay", s.GOOD = "good", s.EXCELLENT = "excellent", (i = l || (l = {}))[i.ALREADY_SAW = 0] = "ALREADY_SAW", i[i.IRRELEVANT = 1] = "IRRELEVANT", i[i.TOO_OLD = 2] = "TOO_OLD", i[i.CONFUSING_OR_RANDOM = 3] = "CONFUSING_OR_RANDOM", i[i.INAPPROPRIATE = 4] = "INAPPROPRIATE", i[i.UNINTERESTING = 5] = "UNINTERESTING", i[i.ENTERTAINING = 6] = "ENTERTAINING", i[i.INFORMATIVE = 7] = "INFORMATIVE", i[i.USEFUL = 8] = "USEFUL", i[i.OTHER = 9] = "OTHER", i[i.FUNNY = 10] = "FUNNY";
            let o = {
                [n.TERRIBLE]: [l.ALREADY_SAW, l.IRRELEVANT, l.TOO_OLD, l.CONFUSING_OR_RANDOM, l.INAPPROPRIATE, l.OTHER],
                [n.BAD]: [l.ALREADY_SAW, l.IRRELEVANT, l.TOO_OLD, l.CONFUSING_OR_RANDOM, l.INAPPROPRIATE, l.OTHER],
                [n.OKAY]: [l.IRRELEVANT, l.TOO_OLD, l.UNINTERESTING, l.ALREADY_SAW, l.OTHER],
                [n.GOOD]: [l.FUNNY, l.ENTERTAINING, l.INFORMATIVE, l.USEFUL, l.OTHER],
                [n.EXCELLENT]: [l.FUNNY, l.ENTERTAINING, l.INFORMATIVE, l.USEFUL, l.OTHER]
            }
        },
        601414: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                useShowFeedback: function() {
                    return E
                },
                getDescriptionFromReason: function() {
                    return g
                },
                useGuildFeedFeedback: function() {
                    return I
                }
            });
            var n = a("884691"),
                l = a("446674"),
                s = a("95410"),
                i = a("206230"),
                d = a("185014"),
                r = a("760190"),
                u = a("599110"),
                o = a("677315"),
                c = a("887446"),
                f = a("302120"),
                m = a("49111"),
                h = a("782340");

            function E() {
                let e = n.useMemo(() => r.default.getExperimentBucket(o.GuildHomeFeedbackExperiment.definition.id), []),
                    [t, a] = n.useState(!1),
                    l = n.useMemo(() => s.default.get(f.GUILD_FEED_FEEDBACK_LAST_SEEN), [t]),
                    i = n.useMemo(() => 100 * Math.random() < e && (null == l || Date.now() - l > f.GUILD_FEED_FEEDBACK_TIME_OUT), [e, l]);
                return {
                    showFeedback: i,
                    setOnDismissedFeedback: a
                }
            }

            function g(e) {
                switch (e) {
                    case f.GuildFeedFeedbackReason.ALREADY_SAW:
                        return h.default.Messages.GUILD_FEED_FEEDBACK_OPTION_ALREADY_SAW;
                    case f.GuildFeedFeedbackReason.IRRELEVANT:
                        return h.default.Messages.GUILD_FEED_FEEDBACK_OPTION_IRRELEVANT;
                    case f.GuildFeedFeedbackReason.TOO_OLD:
                        return h.default.Messages.GUILD_FEED_FEEDBACK_OPTION_TOO_OLD;
                    case f.GuildFeedFeedbackReason.CONFUSING_OR_RANDOM:
                        return h.default.Messages.GUILD_FEED_FEEDBACK_OPTION_CONFUSING;
                    case f.GuildFeedFeedbackReason.INAPPROPRIATE:
                        return h.default.Messages.GUILD_FEED_FEEDBACK_OPTION_INAPPROPRIATE;
                    case f.GuildFeedFeedbackReason.UNINTERESTING:
                        return h.default.Messages.GUILD_FEED_FEEDBACK_OPTION_UNINTERESTING;
                    case f.GuildFeedFeedbackReason.ENTERTAINING:
                        return h.default.Messages.GUILD_FEED_FEEDBACK_OPTION_ENTERTAINING;
                    case f.GuildFeedFeedbackReason.INFORMATIVE:
                        return h.default.Messages.GUILD_FEED_FEEDBACK_OPTION_INFORMATIVE;
                    case f.GuildFeedFeedbackReason.USEFUL:
                        return h.default.Messages.GUILD_FEED_FEEDBACK_OPTION_USEFUL;
                    case f.GuildFeedFeedbackReason.OTHER:
                        return h.default.Messages.GUILD_FEED_FEEDBACK_OTHER_REASON;
                    case f.GuildFeedFeedbackReason.FUNNY:
                        return h.default.Messages.GUILD_FEED_FEEDBACK_OPTION_FUNNY;
                    default:
                        return null
                }
            }

            function I(e) {
                let {
                    guildId: t,
                    guildFeedItem: a,
                    setOnDismissFeedback: r
                } = e, [o, h] = n.useState(), [E, I] = n.useState(new Set), [_, x] = n.useState(), [S, C] = n.useState(!1), [v, N] = n.useState(!1), [p, T] = n.useState(!1), A = n.useCallback(e => {
                    h(e), T(!0), C(!1), setTimeout(() => {
                        T(!1)
                    }, f.GUILD_FEED_FEEDBACK_ANIMATION_DURATION + 150)
                }, [h, C, T]), M = n.useCallback(e => {
                    e === f.GuildFeedFeedbackReason.OTHER && E.has(f.GuildFeedFeedbackReason.OTHER) && x(null);
                    let t = new Set(E);
                    t.has(e) ? t.delete(e) : t.add(e), I(t)
                }, [E, x, I]), D = n.useCallback(() => {
                    C(!0), I(new Set)
                }, [C, I]), j = n.useCallback(e => {
                    (function(e) {
                        var t;
                        let {
                            guildId: a,
                            guildFeedItem: n,
                            dismissed: l,
                            selectedRating: s = null,
                            selectedReasons: i = null,
                            userFeedback: r = null
                        } = e, o = Array.from(null != i ? i : []);
                        u.default.track(m.AnalyticEvents.HOME_FEEDBACK_SUBMITTED, {
                            guild_id: a,
                            home_session_id: c.default.getHomeSessionId(a),
                            feed_item_id: n.id,
                            feed_item_position: 0,
                            dismissed: l,
                            report_name: "feed_item_feedback",
                            load_id: d.default.getLoadId(a),
                            rating: s,
                            reason_codes: o,
                            reason_descriptions: o.map(e => null !== (t = g(e)) && void 0 !== t ? t : ""),
                            user_feedback: r
                        })
                    })({
                        guildId: t,
                        guildFeedItem: a,
                        dismissed: e,
                        selectedRating: o,
                        selectedReasons: E,
                        userFeedback: _
                    })
                }, [t, a, o, E, _]), F = n.useCallback(() => {
                    s.default.set(f.GUILD_FEED_FEEDBACK_LAST_SEEN, Date.now()), null == r || r(!0), !v && j(!0)
                }, [j, r, v]), L = n.useCallback(() => {
                    j(!1), N(!0), s.default.set(f.GUILD_FEED_FEEDBACK_LAST_SEEN, Date.now())
                }, [j]), R = n.useMemo(() => E.size > 0 && (!E.has(f.GuildFeedFeedbackReason.OTHER) || null != _ && "" !== _), [E, _]), b = (0, l.useStateFromStores)([i.default], () => i.default.useReducedMotion), G = n.useRef(!1);
                return n.useEffect(() => () => {
                    G.current = !0
                }, []), n.useEffect(() => () => {
                    G.current && null != o && F()
                }, [o, F]), {
                    selectedRating: o,
                    setSelectedRating: A,
                    selectedReasons: E,
                    setSelectedReasons: M,
                    setUserFeedback: x,
                    backPressed: S,
                    onBackPressed: D,
                    onSubmitPressed: L,
                    onClosePressed: F,
                    showSubmitted: v,
                    isAnimating: p,
                    canSubmit: R,
                    useReducedMotion: b
                }
            }
        },
        608275: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                saveGuildHomeScrollPosition: function() {
                    return d
                },
                ensureGuildHomeSession: function() {
                    return r
                },
                trackGuildHomeOpened: function() {
                    return u
                }
            });
            var n = a("913144"),
                l = a("599110"),
                s = a("887446"),
                i = a("49111");

            function d(e, t) {
                n.default.dispatch({
                    type: "GUILD_HOME_SET_SCROLL_POSITION",
                    guildId: e,
                    scrollPosition: t
                })
            }

            function r(e) {
                n.default.dispatch({
                    type: "GUILD_HOME_ENSURE_HOME_SESSION",
                    guildId: e
                })
            }

            function u(e, t) {
                l.default.track(i.AnalyticEvents.HOME_OPENED, {
                    guild_id: e,
                    home_session_id: s.default.getHomeSessionId(e),
                    home_session_source: t
                })
            }
        },
        685911: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return d
                }
            });
            var n = a("446674"),
                l = a("913144");
            let s = {};
            class i extends n.default.PersistedStore {
                initialize(e) {
                    var t;
                    null != e && (s = null !== (t = e.numCleanLoadsForGuild) && void 0 !== t ? t : {})
                }
                getState() {
                    return {
                        numCleanLoadsForGuild: s
                    }
                }
                getTotalNumCleanLoads() {
                    let e = 0;
                    for (let a in s) {
                        var t;
                        e += null !== (t = s[a]) && void 0 !== t ? t : 0
                    }
                    return e
                }
            }
            i.displayName = "GuildHomeFeedbackStore", i.persistKey = "GuildHomeFeedbackStore";
            var d = new i(l.default, {
                GUILD_FEED_FETCH_SUCCESS: function(e) {
                    var t;
                    let {
                        guildId: a,
                        fresh: n
                    } = e;
                    if (!n) return !1;
                    s[a] = Math.min(50, (null !== (t = s[a]) && void 0 !== t ? t : 0) + 1)
                },
                LOGOUT: function() {
                    s = {}
                }
            })
        },
        379607: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return w
                }
            });
            var n = a("37983"),
                l = a("884691"),
                s = a("414456"),
                i = a.n(s),
                d = a("866227"),
                r = a.n(d),
                u = a("611221"),
                o = a("446674"),
                c = a("669491"),
                f = a("819855"),
                m = a("77078"),
                h = a("272030"),
                E = a("590514"),
                g = a("750560"),
                I = a("679653"),
                _ = a("419830"),
                x = a("713810"),
                S = a("185014"),
                C = a("465519"),
                v = a("120027"),
                N = a("699473"),
                p = a("42203"),
                T = a("697218"),
                A = a("730106"),
                M = a("215361"),
                D = a("345318"),
                j = a("782340"),
                F = a("120967"),
                L = a("782983"),
                R = a("229709");
            let b = async () => {
                let {
                    default: e
                } = await a.el("437150").then(a.bind(a, "437150"));
                return e
            }, G = e => {
                let {
                    featuredItem: t,
                    className: a
                } = e, s = c.default.colors.TEXT_POSITIVE, d = M.default, u = (0, o.useStateFromStores)([T.default], () => T.default.getUser(t.details.actorUserId), [t]), f = l.useMemo(() => null == u ? {} : {
                    [t.guildId]: [u.id]
                }, [t.guildId, u]);
                switch ((0, g.useSubscribeGuildMembers)(f), s = (0, C.getFeaturedExpirationTextColor)(t.details.expiresAt)) {
                    case c.default.colors.TEXT_DANGER:
                        d = A.default;
                        break;
                    case c.default.colors.TEXT_WARNING:
                        d = D.default;
                        break;
                    case c.default.colors.TEXT_POSITIVE:
                        d = M.default
                }
                return (0, n.jsxs)("div", {
                    className: i(a, F.header),
                    children: [(0, n.jsxs)("div", {
                        className: F.expirationContainer,
                        children: [(0, n.jsx)(d, {
                            color: s.css,
                            "aria-hidden": !0,
                            className: F.expiredIcon
                        }), (0, n.jsx)(m.Text, {
                            style: {
                                color: s.css
                            },
                            variant: "text-sm/normal",
                            children: j.default.Messages.GUILD_FEED_FEATURED_EXPIRED_IN.format({
                                fromNow: r(t.details.expiresAt).fromNow()
                            })
                        })]
                    }), (0, n.jsx)(v.default, {
                        height: 4,
                        width: 4,
                        "aria-hidden": "true",
                        className: F.dotIcon
                    }), (0, n.jsxs)("div", {
                        className: F.featuredByContainer,
                        children: [(0, n.jsx)(m.Text, {
                            className: F.featuredByText,
                            variant: "text-sm/normal",
                            children: j.default.Messages.GUILD_FEED_FEATURED_BY
                        }), null != u && (0, n.jsx)(m.Avatar, {
                            size: m.AvatarSizes.SIZE_16,
                            src: u.getAvatarURL(void 0, 16),
                            "aria-hidden": !0
                        })]
                    })]
                })
            }, O = e => {
                let {
                    channel: t
                } = e, a = (0, I.default)(t), l = (0, _.getChannelIconComponent)(t), s = (0, _.getChannelIconTooltipText)(t);
                return null == t ? null : (0, n.jsxs)("div", {
                    className: F.channelHeaderContainer,
                    children: [null != l ? (0, n.jsx)(m.Tooltip, {
                        text: s,
                        delay: 500,
                        children: e => (0, n.jsx)(l, {
                            ...e,
                            className: F.channelIcon,
                            height: 16,
                            width: 16
                        })
                    }) : null, (0, n.jsx)(m.Heading, {
                        className: F.channelHeader,
                        variant: "text-sm/semibold",
                        children: a
                    })]
                })
            }, y = l.memo(function(e) {
                let {
                    guildId: t,
                    featuredItem: a
                } = e, l = (0, o.useStateFromStores)([S.default], () => S.default.getCachedMessage(t, a.message.channel_id, a.message.id)), s = (0, o.useStateFromStores)([p.default], () => p.default.getChannel(null == l ? void 0 : l.channel_id));
                return null == s || null == l ? null : (0, n.jsxs)(m.Clickable, {
                    onContextMenu: e => {
                        e.stopPropagation(), (0, h.openContextMenuLazy)(e, async () => {
                            let e = await b();
                            return t => (0, n.jsx)(e, {
                                ...t,
                                messageItem: a,
                                channel: s,
                                message: l
                            })
                        })
                    },
                    className: F.featuredItemsGroupWrapper,
                    children: [(0, n.jsx)(G, {
                        featuredItem: a.featuredItem
                    }), (0, n.jsx)(O, {
                        channel: s
                    }), (0, n.jsx)(N.default, {
                        className: F.featuredItemsGroupCozy,
                        message: l,
                        channel: s
                    })]
                })
            }), H = l.memo(function(e) {
                let {
                    guildId: t,
                    featuredItem: a
                } = e, l = (0, o.useStateFromStores)([p.default], () => p.default.getChannel(a.thread.id)), s = (0, o.useStateFromStores)([p.default], () => p.default.getChannel(null == l ? void 0 : l.parent_id)), i = (0, o.useStateFromStores)([S.default], () => S.default.getCachedMessage(t, a.message.channel_id, a.message.id));
                return null == i || null == s || null == l ? null : (0, n.jsxs)(m.Clickable, {
                    onContextMenu: e => {
                        e.stopPropagation(), (0, h.openContextMenuLazy)(e, async () => {
                            let e = await b();
                            return t => (0, n.jsx)(e, {
                                ...t,
                                messageItem: a,
                                channel: l,
                                message: i
                            })
                        })
                    },
                    className: F.featuredItemsGroupWrapper,
                    children: [(0, n.jsx)(G, {
                        featuredItem: a.featuredItem
                    }), (0, n.jsx)(O, {
                        channel: s
                    }), (0, n.jsx)(m.Heading, {
                        className: F.forumPostHeading,
                        variant: "heading-md/semibold",
                        children: l.name
                    }), (0, n.jsx)(N.default, {
                        className: F.featuredItemsGroupCozy,
                        message: i,
                        channel: l
                    })]
                }, i.id)
            });

            function k(e) {
                let t = (0, f.isThemeLight)(e) ? R : L;
                return (0, n.jsxs)("div", {
                    className: F.emptyPlaceholder,
                    children: [(0, n.jsx)("div", {
                        className: F.emptyImage,
                        style: {
                            backgroundImage: "url(".concat(t, ")")
                        }
                    }), (0, n.jsx)("div", {
                        className: F.emptyBody,
                        children: j.default.Messages.GUILD_FEED_FEATURED_ITEMS_NO_ITEMS
                    })]
                })
            }

            function U() {
                return (0, n.jsx)(E.Header, {
                    title: j.default.Messages.GUILD_FEED_FEATURE_MESSAGE
                })
            }

            function w(e) {
                let {
                    guildId: t
                } = e, a = (0, o.useStateFromStoresArray)([S.default], () => S.default.getFeaturedItems(t), [t]), s = (0, o.useStateFromStores)([S.default], () => S.default.getFeaturedItemsFetchStatus(t), [t]);
                return l.useEffect(() => {
                    (0, x.fetchGuildFeedFeaturedItems)(t)
                }, [t]), (0, n.jsx)(m.Dialog, {
                    "aria-label": j.default.Messages.GUILD_FEED_FEATURED_MESSAGES,
                    children: (0, n.jsx)(E.ItemsPopout, {
                        analyticsName: "Featured Feed Items Popout",
                        listName: "featuredMessages",
                        items: a,
                        loading: s.loading !== S.LoadingStatus.NONE,
                        renderEmptyState: k,
                        renderHeader: U,
                        renderItem: function(e) {
                            return null == e ? [] : e.type === u.GuildFeedItemTypes.MESSAGE ? [(0, n.jsx)(y, {
                                guildId: t,
                                featuredItem: e
                            }, e.id)] : e.type === u.GuildFeedItemTypes.FORUM_POST ? [(0, n.jsx)(H, {
                                guildId: t,
                                featuredItem: e
                            }, e.id)] : []
                        }
                    })
                })
            }
        },
        241094: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                useActiveTextChannels: function() {
                    return h
                },
                useActiveVoiceChannels: function() {
                    return g
                }
            });
            var n = a("446674"),
                l = a("233069"),
                s = a("42203"),
                i = a("305961"),
                d = a("957255"),
                r = a("282109"),
                u = a("316133"),
                o = a("449008"),
                c = a("558130"),
                f = a("49111"),
                m = a("724210");
            let h = e => (0, n.useStateFromStoresArray)([s.default, d.default, c.default, r.default], () => E(e, [s.default, d.default, c.default, r.default])),
                E = function(e) {
                    let [t, a, n, i] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.default, d.default, c.default, r.default], u = n.getActiveChannelIds(e), h = null != u ? Array.from(u) : [], E = i.getMutedChannels(e);
                    return h.map(e => t.getChannel(e)).filter(o.isNotNullish).filter(e => {
                        if ((null == e ? void 0 : e.hasFlag(m.ChannelFlags.ACTIVE_CHANNELS_REMOVED)) || !(0, l.isTextChannel)(e.type) || E.has(e.id) || null != e.parent_id && E.has(e.parent_id) || !a.can(f.Permissions.VIEW_CHANNEL, e)) return !1;
                        let n = t.getChannel(e.parent_id);
                        return !(e.isThread() && null != n && (null == n ? void 0 : n.hasFlag(m.ChannelFlags.ACTIVE_CHANNELS_REMOVED))) && !0
                    })
                },
                g = (e, t) => (0, n.useStateFromStoresArray)([d.default, s.default, u.default, i.default], () => I(e, t, [d.default, s.default, u.default, i.default])),
                I = function(e, t) {
                    var a;
                    let [n, l, r, c] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [d.default, s.default, u.default, i.default], h = r.getVoiceStates(e), E = Object.keys(h).filter(e => h[e].length > 0), g = null === (a = c.getGuild(e)) || void 0 === a ? void 0 : a.afkChannelId;
                    return E.filter(e => e !== g && e !== (null == t ? void 0 : t.channel_id)).map(e => l.getChannel(e)).filter(o.isNotNullish).filter(e => !(null == e ? void 0 : e.hasFlag(m.ChannelFlags.ACTIVE_CHANNELS_REMOVED)) && n.can(f.Permissions.VIEW_CHANNEL, e))
                }
        },
        577177: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return u
                }
            });
            var n = a("884691"),
                l = a("398604"),
                s = a("534222"),
                i = a("599110"),
                d = a("887446"),
                r = a("49111");

            function u(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    a = (0, s.default)(e);
                n.useEffect(() => {
                    t && i.default.track(r.AnalyticEvents.HOME_EVENTS_LOADED, {
                        guild_id: e,
                        active_events_shown: a.some(e => (0, l.isGuildScheduledEventActive)(e)) ? 1 : 0,
                        upcoming_events_shown: a.some(e => !(0, l.isGuildScheduledEventActive)(e)) ? 1 : 0,
                        home_session_id: d.default.getHomeSessionId(e)
                    })
                }, [e, t])
            }
        },
        75360: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return i
                }
            });
            var n = a("884691"),
                l = a("730290"),
                s = a("90915");

            function i() {
                let e = (0, s.useLocation)(),
                    {
                        highlight_channel_id: t,
                        highlight_message_id: a
                    } = (0, l.parse)(e.search);
                return n.useMemo(() => null != a && null != t ? {
                    messageId: a,
                    channelId: t
                } : null, [t, a])
            }
        },
        795783: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return d
                }
            });
            var n = a("298386"),
                l = a("446674"),
                s = a("923959"),
                i = a("282109");

            function d(e) {
                let t = (0, l.useStateFromStores)([s.default], () => s.default.getChannels(e)),
                    a = t[s.GUILD_SELECTABLE_CHANNELS_KEY],
                    d = (0, l.useStateFromStoresArray)([i.default], () => a.filter(e => {
                        let {
                            channel: t
                        } = e;
                        return n.ChannelTypesSets.READABLE.has(t.type) && !n.ChannelTypesSets.GUILD_VOCAL.has(t.type)
                    }).filter(t => {
                        let {
                            channel: a
                        } = t;
                        return i.default.isChannelMuted(e, a.id) || i.default.isCategoryMuted(e, a.id)
                    }), [e, a]);
                return d.length
            }
        },
        620840: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return u
                }
            });
            var n = a("884691"),
                l = a("65597"),
                s = a("697218"),
                i = a("685911"),
                d = a("994428");
            let r = new Date(Date.UTC(2022, 7, 6));

            function u(e, t) {
                let a = (0, l.default)([i.default], () => 2 >= i.default.getTotalNumCleanLoads()),
                    u = (0, l.default)([s.default], () => {
                        let e = s.default.getCurrentUser();
                        return null == e || e.createdAt.getTime() < r.getTime()
                    }),
                    o = n.useMemo(() => (null == e ? void 0 : e.joinedAt) != null && r.getTime() > e.joinedAt.getTime(), [null == e ? void 0 : e.joinedAt]),
                    c = a && u && !o;
                return n.useEffect(() => {
                    !c && t(d.ContentDismissActionType.AUTO)
                }, [c]), c || !0
            }
        },
        280110: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return d
                }
            });
            var n = a("884691"),
                l = a("599110"),
                s = a("887446"),
                i = a("49111");

            function d(e) {
                n.useEffect(() => {
                    let t = s.default.getHomeSessionId(e);
                    return () => {
                        l.default.track(i.AnalyticEvents.HOME_EXITED, {
                            guild_id: e,
                            home_session_id: t
                        })
                    }
                }, [e])
            }
        },
        154925: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                DISPLAYED_PARTICIPANT_AVATARS: function() {
                    return g
                },
                ACTIVE_NOW_ICON_SIZE: function() {
                    return I
                },
                ActiveNowBase: function() {
                    return _
                },
                ActiveChannelBase: function() {
                    return x
                },
                ActiveNowFiller: function() {
                    return S
                }
            });
            var n = a("37983"),
                l = a("884691"),
                s = a("414456"),
                i = a.n(s),
                d = a("974667"),
                r = a("77078"),
                u = a("834897"),
                o = a("419830"),
                c = a("811305"),
                f = a("515631"),
                m = a("782340"),
                h = a("62082"),
                E = a("470932");
            let g = 3,
                I = 16,
                _ = l.forwardRef(function(e, t) {
                    let {
                        shouldUseCollapsedLayout: a = !0,
                        listItemId: l,
                        onClick: s,
                        icon: o,
                        iconTooltipText: c,
                        textNode: m,
                        header: E,
                        accessoryNode: g,
                        children: I
                    } = e, _ = (0, u.default)(f.COLLAPSED_SIZE_MEDIA_QUERY), x = (0, d.useListItem)(null != l ? l : "");
                    return (0, n.jsxs)("div", {
                        ref: t,
                        className: i(h.container, {
                            [h.containerCard]: _,
                            [h.collapsedLayout]: _ && a
                        }),
                        children: [(0, n.jsxs)(r.Clickable, {
                            className: h.body,
                            onClick: s,
                            ...null != l ? x : void 0,
                            children: [(0, n.jsxs)("div", {
                                className: h.details,
                                children: [null != o ? (0, n.jsx)(r.Tooltip, {
                                    text: c,
                                    delay: 500,
                                    children: e => (0, n.jsx)("div", {
                                        ...e,
                                        className: h.iconContainer,
                                        children: o
                                    })
                                }) : null, (0, n.jsx)(r.Heading, {
                                    className: h.title,
                                    variant: "heading-sm/semibold",
                                    lineClamp: 1,
                                    children: E
                                }), (0, n.jsx)("div", {
                                    className: h.subtitle,
                                    children: m
                                })]
                            }), null != g && (0, n.jsx)("div", {
                                className: h.accessoryContainer,
                                children: g
                            })]
                        }), I]
                    })
                }),
                x = l.forwardRef(function(e, t) {
                    let {
                        children: a,
                        guildId: l,
                        channel: s,
                        text: i,
                        activityIndicator: d,
                        usersInSummary: m,
                        onChannelClick: E,
                        channelIconOptions: x
                    } = e, S = (0, u.default)(f.COLLAPSED_SIZE_MEDIA_QUERY), C = (0, o.getChannelIconComponent)(s, null, x);
                    return (0, n.jsx)(_, {
                        ref: t,
                        textNode: null != i ? (0, n.jsx)(r.Text, {
                            className: h.channelSubtitle,
                            variant: "text-xs/normal",
                            children: i
                        }) : null,
                        listItemId: s.id,
                        accessoryNode: (0, n.jsx)(c.default, {
                            guildId: l,
                            users: m,
                            size: S ? c.Sizes.SIZE_24 : c.Sizes.SIZE_16,
                            max: S ? 5 : g,
                            extraDetail: d
                        }),
                        onClick: E,
                        icon: null != C && (0, n.jsx)(C, {
                            width: I,
                            height: I
                        }),
                        iconTooltipText: (0, o.getChannelIconTooltipText)(s),
                        header: s.name,
                        children: a
                    })
                });

            function S() {
                return (0, n.jsxs)("div", {
                    className: i(h.container, h.containerCard, h.fillerCard),
                    children: [(0, n.jsx)("img", {
                        src: E,
                        className: h.spacerChannelImg,
                        alt: "",
                        "aria-hidden": !0
                    }), (0, n.jsxs)("div", {
                        className: h.fillerText,
                        children: [(0, n.jsx)(r.Heading, {
                            className: h.title,
                            variant: "heading-sm/semibold",
                            children: m.default.Messages.ACTIVE_CHANNELS_COLLAPSED_SPACER_TITLE
                        }), (0, n.jsx)(r.Text, {
                            variant: "text-xs/normal",
                            children: m.default.Messages.ACTIVE_CHANNELS_COLLAPSED_SPACER_SUBTITLE
                        })]
                    })]
                })
            }
        },
        914878: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return k
                }
            });
            var n = a("37983"),
                l = a("884691"),
                s = a("414456"),
                i = a.n(s),
                d = a("917351"),
                r = a("355262"),
                u = a("942367"),
                o = a("446674"),
                c = a("77078"),
                f = a("731898"),
                m = a("841098"),
                h = a("510889"),
                E = a("191152"),
                g = a("425974"),
                I = a("398604"),
                _ = a("534222"),
                x = a("316133"),
                S = a("461380"),
                C = a("599110"),
                v = a("558130"),
                N = a("887446"),
                p = a("241094"),
                T = a("154925"),
                A = a("128651"),
                M = a("475117"),
                D = a("540585"),
                j = a("821435"),
                F = a("49111"),
                L = a("782340"),
                R = a("382756"),
                b = a("897142"),
                G = a("352791");
            let O = {
                overflowX: void 0,
                overflowY: void 0
            };

            function y() {
                let e = (0, m.default)();
                return (0, n.jsxs)("div", {
                    className: R.emptyStateContainer,
                    children: [(0, n.jsx)("img", {
                        className: R.image,
                        src: "dark" === e ? b : G,
                        width: 154,
                        height: 48,
                        alt: ""
                    }), (0, n.jsx)(c.Heading, {
                        className: R.title,
                        variant: "heading-md/semibold",
                        children: L.default.Messages.ACTIVE_CHANNELS_EMPTY_TITLE
                    }), (0, n.jsx)(c.Text, {
                        className: R.subtitle,
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: L.default.Messages.ACTIVE_CHANNELS_EMPTY_SUBTITLE
                    })]
                })
            }

            function H(e) {
                let {
                    isUsingCollapsedLayout: t,
                    scrollerRef: a,
                    handleScroll: l,
                    activeChannels: s,
                    totalActiveChannels: i
                } = e, d = (0, h.default)("active-channels", a, {
                    orientation: t ? u.Orientations.HORIZONTAL : u.Orientations.VERTICAL
                });
                return (0, n.jsx)(r.ListNavigatorProvider, {
                    navigator: d,
                    children: (0, n.jsx)(r.ListNavigatorContainer, {
                        children: e => {
                            let {
                                ref: d,
                                ...r
                            } = e;
                            return (0, n.jsxs)(c.AdvancedScrollerNone, {
                                className: R.channelList,
                                orientation: "horizontal",
                                paddingFix: !1,
                                onScroll: l,
                                style: t ? void 0 : O,
                                ref: e => {
                                    var t;
                                    a.current = e, d.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null, l()
                                },
                                ...r,
                                children: [s, t && i < 4 && (0, n.jsx)(T.ActiveNowFiller, {})]
                            })
                        }
                    })
                })
            }

            function k(e) {
                let {
                    guildId: t,
                    isUsingCollapsedLayout: a
                } = e, s = (0, o.useStateFromStores)([v.default], () => v.default.getActiveChannelsFetchStatus(t)), r = (0, p.useActiveTextChannels)(t), u = (0, _.useGuildActiveEvent)(t), m = (0, o.useStateFromStores)([x.default], () => x.default.getVoiceStates(t)), h = (0, p.useActiveVoiceChannels)(t, u), T = r.length + h.length + (null != u ? 1 : 0), b = T > 0, G = l.useRef(null), O = (0, _.default)(t), k = O.filter(e => !(0, I.isGuildScheduledEventActive)(e)), [U, w] = l.useState(0 === k.length), [B, P] = l.useState(!0), [V, W] = l.useState(!1), {
                    ref: K,
                    width: Y
                } = (0, f.default)(), z = l.useCallback(() => {
                    let {
                        current: e
                    } = G;
                    if (null == e || null == Y) return;
                    let {
                        scrollLeft: t,
                        scrollWidth: a
                    } = e.getScrollerState();
                    P(t <= 0), W(t >= a - Y - 1)
                }, [Y]), X = l.useCallback(() => {
                    let {
                        current: e
                    } = G;
                    if (null == e || null == Y) return;
                    let {
                        scrollLeft: t
                    } = e.getScrollerState(), a = Y + 12, n = Math.max(.25 * Y - 9, 140);
                    e.scrollTo({
                        to: Math.max(0, Math.ceil((t - a) / n) * n),
                        animate: !0
                    })
                }, [Y]), Z = l.useCallback(() => {
                    let {
                        current: e
                    } = G;
                    if (null == e || null == Y) return;
                    let {
                        scrollLeft: t,
                        scrollWidth: a
                    } = e.getScrollerState(), n = Y + 12, l = Math.max(.25 * Y - 9, 140);
                    e.scrollTo({
                        to: Math.min(a, Math.floor((t + n) / l) * l),
                        animate: !0
                    })
                }, [Y]);
                l.useEffect(() => {
                    v.default.shouldFetch(t) && (0, E.fetchActiveChannels)(t)
                }, [t]), (0, g.default)(t, r, h);
                let J = l.useCallback(e => {
                        C.default.track(F.AnalyticEvents.ACTIVE_CHANNEL_CLICKED, {
                            guild_id: e.guild_id,
                            channel_id: e.id,
                            channel_type: e.type,
                            text_channels_shown: r.length,
                            voice_channels_shown: h.length,
                            home_session_id: N.default.getHomeSessionId(e.guild_id)
                        })
                    }, [r, h]),
                    q = r.map(e => (0, n.jsx)(M.default, {
                        guildId: t,
                        channel: e,
                        trackChannelClick: J
                    }, e.id)),
                    Q = h.map(e => (0, n.jsx)(D.default, {
                        guildId: t,
                        channel: e,
                        voiceStates: m[e.id],
                        trackChannelClick: J,
                        showPreview: !a
                    }, e.id)),
                    $ = [];
                if (a) $ = [...q, ...Q];
                else if (U) $ = d.compact([null != u && (0, n.jsx)(j.default, {
                    event: u,
                    isInList: !0
                }, "event"), ...q.slice(0, 10), ...Q]);
                else {
                    let e = d.take(q, 3 - (Q.length > 0 ? 1 : 0) - (null != u ? 1 : 0)),
                        t = d.take(Q, 3 - e.length - (null != u ? 1 : 0));
                    $ = d.compact([null != u && (0, n.jsx)(j.default, {
                        event: u,
                        isInList: !0
                    }, "event"), ...e, ...t])
                }
                return (0, n.jsx)("div", {
                    ref: K,
                    className: R.container,
                    children: (0, n.jsxs)(c.HeadingLevel, {
                        component: (0, n.jsxs)("div", {
                            className: R.header,
                            children: [(0, n.jsx)(c.Heading, {
                                variant: "heading-md/semibold",
                                children: L.default.Messages.ACTIVE_CHANNELS_HEADER
                            }), !a && (null == s ? void 0 : s.loading) !== !0 && T > 3 && (0, n.jsx)(c.Clickable, {
                                onClick: () => w(!U),
                                children: (0, n.jsx)(c.Text, {
                                    className: R.showAll,
                                    variant: "text-sm/normal",
                                    children: U ? L.default.Messages.GUILD_HOME_SEE_LESS : L.default.Messages.GUILD_HOME_SEE_ALL.format({
                                        count: T
                                    })
                                })
                            })]
                        }),
                        children: [(null == s ? void 0 : s.loading) ? (0, n.jsx)(c.AdvancedScrollerNone, {
                            className: R.channelList,
                            orientation: "horizontal",
                            paddingFix: !1,
                            children: (0, n.jsx)(A.default, {
                                guildId: t
                            })
                        }) : b ? (0, n.jsx)(H, {
                            isUsingCollapsedLayout: a,
                            scrollerRef: G,
                            handleScroll: z,
                            activeChannels: $,
                            totalActiveChannels: T
                        }) : (0, n.jsx)(y, {}), a && b && !B && (0, n.jsx)(c.Clickable, {
                            className: i(R.scrollIcon, R.left),
                            onClick: X,
                            "aria-hidden": !0,
                            children: (0, n.jsx)(S.default, {
                                direction: S.default.Directions.LEFT,
                                height: 12,
                                width: 12
                            })
                        }), a && b && !V && (0, n.jsx)(c.Clickable, {
                            className: i(R.scrollIcon, R.right),
                            onClick: Z,
                            "aria-hidden": !0,
                            children: (0, n.jsx)(S.default, {
                                direction: S.default.Directions.RIGHT,
                                height: 12,
                                width: 12
                            })
                        })]
                    })
                })
            }
        },
        128651: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return f
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("414456"),
                s = a.n(l),
                i = a("917351"),
                d = a("834897"),
                r = a("67602"),
                u = a("811305"),
                o = a("515631"),
                c = a("62082");

            function f(e) {
                let {
                    guildId: t
                } = e, a = (0, d.default)(o.COLLAPSED_SIZE_MEDIA_QUERY);
                return (0, n.jsxs)(n.Fragment, {
                    children: [i.times(a ? 4 : 3, e => (0, n.jsxs)("div", {
                        className: s(c.container, {
                            [c.loadingContainer]: !0,
                            [c.containerCard]: a,
                            [c.collapsedLayout]: a
                        }),
                        children: [(0, n.jsxs)("div", {
                            className: c.body,
                            children: [(0, n.jsxs)("div", {
                                className: c.details,
                                children: [(0, n.jsx)("div", {
                                    className: c.iconContainer
                                }), (0, n.jsx)(r.ContentBlob, {
                                    className: c.title,
                                    opacity: .2,
                                    width: 72
                                }), (0, n.jsx)(r.ContentBlob, {
                                    className: c.subtitle,
                                    opacity: .1,
                                    width: 100
                                })]
                            }), (0, n.jsx)("div", {
                                className: c.accessoryContainer,
                                children: (0, n.jsx)(u.default, {
                                    guildId: t,
                                    renderUser: () => (0, n.jsx)("div", {
                                        className: c.loadingUser,
                                        style: {
                                            width: a ? 24 : 16,
                                            height: a ? 24 : 16
                                        }
                                    }),
                                    users: [null, null],
                                    size: a ? u.Sizes.SIZE_24 : u.Sizes.SIZE_16,
                                    extraDetail: (0, n.jsx)("div", {
                                        className: c.typingIndicator
                                    })
                                })
                            })]
                        }), 2 === e && (0, n.jsx)("div", {
                            className: c.previewContainer
                        })]
                    }, e)), (0, n.jsx)("div", {}), " "]
                })
            }
        },
        475117: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return _
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("917351"),
                s = a.n(l),
                i = a("446674"),
                d = a("77078"),
                r = a("537325"),
                u = a("191542"),
                o = a("697218"),
                c = a("449008"),
                f = a("299039"),
                m = a("558130"),
                h = a("154925"),
                E = a("49111"),
                g = a("782340"),
                I = a("62082");

            function _(e) {
                var t;
                let {
                    guildId: a,
                    channel: l,
                    trackChannelClick: _
                } = e, x = (0, i.useStateFromStoresArray)([m.default], () => null !== (t = m.default.getChannelMessageData(l.id)) && void 0 !== t ? t : []), S = s.uniq(s.map(x, "userId")), C = (0, i.useStateFromStoresArray)([o.default], () => S.map(e => o.default.getUser(e))), v = (0, i.useStateFromStores)([u.default], () => {
                    let e = u.default.getTypingUsers(l.id);
                    return Object.keys(e).length > 0
                }, [l.id]), N = x.length < m.MAX_STORED_MESSAGES ? g.default.Messages.ACTIVE_CHANNELS_FEW_MESSAGES.format({
                    count: x.length
                }) : g.default.Messages.ACTIVE_CHANNELS_MANY_MESSAGES, p = v ? (0, n.jsx)("div", {
                    className: I.typingIndicator,
                    children: (0, n.jsx)(d.Dots, {
                        className: I.ellipsis,
                        dotRadius: 2,
                        themed: !0
                    })
                }) : null;
                return (0, n.jsx)(h.ActiveChannelBase, {
                    guildId: a,
                    channel: l,
                    usersInSummary: C.filter(c.isNotNullish),
                    text: N,
                    activityIndicator: p,
                    onChannelClick: () => {
                        _(l), (0, r.default)(E.Routes.CHANNEL(l.guild_id, l.id, f.default.fromTimestamp(Date.now())))
                    }
                })
            }
        },
        540585: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return M
                }
            });
            var n = a("37983"),
                l = a("884691"),
                s = a("917351"),
                i = a.n(s),
                d = a("446674"),
                r = a("77078"),
                u = a("987317"),
                o = a("990766"),
                c = a("242740"),
                f = a("223913"),
                m = a("795026"),
                h = a("673527"),
                E = a("848848"),
                g = a("233069"),
                I = a("373469"),
                _ = a("271938"),
                x = a("957255"),
                S = a("18494"),
                C = a("267675"),
                v = a("158998"),
                N = a("154925"),
                p = a("49111"),
                T = a("62082");

            function A(e) {
                var t;
                let {
                    channel: a,
                    voiceStates: l,
                    showPlaceholder: s
                } = e, c = (0, d.useStateFromStores)([I.default], () => I.default.getAllApplicationStreamsForChannel(a.id)[0]), E = (0, d.useStateFromStores)([I.default], () => null != c ? I.default.getActiveStreamForApplicationStream(c) : null), g = (0, d.useStateFromStores)([_.default], () => _.default.getId()), [x, S] = (0, f.useCanWatchStream)(a);
                if (null == c) return null;
                let N = i.chain(l).map("member").find(["userId", c.ownerId]).value(),
                    A = i.chain(l).map("user").find(["id", c.ownerId]).value(),
                    M = null !== (t = null == N ? void 0 : N.nick) && void 0 !== t ? t : v.default.getName(A),
                    D = null != E && null != c && E.state !== p.ApplicationStreamStates.ENDED && E.ownerId === c.ownerId;
                return (0, n.jsxs)(r.Clickable, {
                    onClick: () => {
                        u.default.selectVoiceChannel(a.id), !D && (0, o.watchStreamAndTransitionToStream)(c)
                    },
                    className: T.previewContainer,
                    children: [s ? (0, n.jsx)(h.DefaultFallback, {
                        className: T.previewImage,
                        isLoading: !0
                    }) : (0, n.jsx)(h.default, {
                        className: T.previewImage,
                        stream: c
                    }), x ? (0, n.jsx)("div", {
                        className: T.previewHover,
                        children: (0, n.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            color: "none",
                            className: T.previewButton,
                            children: (0, m.default)(c, E, g, S)
                        })
                    }) : null, null != M ? (0, n.jsxs)("div", {
                        className: T.previewName,
                        children: [(0, n.jsx)(C.default, {
                            width: 18,
                            height: 18,
                            className: T.icon
                        }), (0, n.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            color: "none",
                            children: M
                        })]
                    }) : null]
                })
            }

            function M(e) {
                var t, a;
                let {
                    guildId: s,
                    channel: r,
                    voiceStates: u,
                    trackChannelClick: o,
                    showPreview: f
                } = e, m = u.map(e => e.user), {
                    needSubscriptionToAccess: h
                } = (0, E.default)(null !== (t = null == r ? void 0 : r.id) && void 0 !== t ? t : void 0), I = (0, d.useStateFromStores)([x.default], () => !x.default.can(p.Permissions.CONNECT, r)), _ = l.useRef(null), C = function(e) {
                    let t = l.useRef(null),
                        [a, n] = l.useState(!1);
                    return l.useEffect(() => {
                        t.current = new IntersectionObserver(e => {
                            let [t] = e;
                            return n(t.isIntersecting)
                        })
                    }, []), l.useEffect(() => {
                        var a;
                        if (null != e.current) return null === (a = t.current) || void 0 === a || a.observe(e.current), () => {
                            var e;
                            null === (e = t.current) || void 0 === e || e.disconnect()
                        }
                    }, [e]), a
                }(_), T = l.useRef(!1);
                l.useEffect(() => {
                    C && (T.current = !0)
                }, [C]);
                let M = i.map(u, e => {
                        var t;
                        return null !== (a = null === (t = e.member) || void 0 === t ? void 0 : t.nick) && void 0 !== a ? a : v.default.getName(e.user)
                    }),
                    D = M.join(", ");
                return (0, n.jsx)(N.ActiveChannelBase, {
                    ref: _,
                    guildId: s,
                    channel: r,
                    text: D,
                    usersInSummary: m,
                    onChannelClick: () => {
                        if (!(0, g.isGuildVocalChannelType)(r.type)) return;
                        let e = S.default.getVoiceChannelId(),
                            t = !x.default.can(p.Permissions.CONNECT, r);
                        o(r), c.default.handleVoiceConnect({
                            channel: r,
                            locked: t,
                            connected: e === r.id,
                            needSubscriptionToAccess: h
                        })
                    },
                    channelIconOptions: {
                        locked: I
                    },
                    children: f && (0, n.jsx)(A, {
                        channel: r,
                        voiceStates: u,
                        showPlaceholder: !T.current
                    })
                })
            }
        },
        260730: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return b
                }
            });
            var n = a("37983"),
                l = a("884691"),
                s = a("446674"),
                i = a("713810"),
                d = a("404103"),
                r = a("350928"),
                u = a("185014"),
                o = a("60036"),
                c = a("435123"),
                f = a("537594"),
                m = a("38654"),
                h = a("471671"),
                E = a("555158"),
                g = a("395118"),
                I = a("299039"),
                _ = a("816454"),
                x = a("601414"),
                S = a("146005"),
                C = a("887446"),
                v = a("75360"),
                N = a("216364"),
                p = a("405700"),
                T = a("806727"),
                A = a("807058"),
                M = a("815619"),
                D = a("515631"),
                j = a("782340"),
                F = a("846928");
            let L = l.memo(function(e) {
                    let {
                        guildId: t
                    } = e, a = (0, s.useStateFromStores)([m.default], () => m.default.isViewingRoles(t));
                    return a ? (0, n.jsx)(E.default, {
                        messageType: E.HelpMessageTypes.WARNING,
                        children: j.default.Messages.GUILD_FEED_VIEW_AS_ROLE_WARNING
                    }) : null
                }),
                R = l.memo(function(e) {
                    let {
                        guildId: t,
                        hasMoreItems: a,
                        scrollerRef: s,
                        error: i,
                        fetchPage: d,
                        onReloadClick: r
                    } = e, u = l.useRef(null);
                    return (l.useEffect(() => {
                        var e;
                        let t = u.current,
                            n = null === (e = s.current) || void 0 === e ? void 0 : e.getScrollerNode();
                        if (null == n || null == t || !a) return;
                        let l = new IntersectionObserver(e => {
                            for (let t of e) t.intersectionRatio > 0 && d()
                        }, {
                            root: n,
                            rootMargin: "0px 0px 200px 0px",
                            threshold: 0
                        });
                        return l.observe(t), () => {
                            l.disconnect()
                        }
                    }, [s, u, d, t, a]), null != i) ? (0, n.jsx)(N.GuildFeedPaginationError, {
                        guildId: t,
                        onReloadClick: d
                    }) : a ? (0, n.jsx)("div", {
                        className: F.container,
                        ref: u,
                        children: (0, n.jsx)(p.default, {
                            count: 1
                        })
                    }) : (0, n.jsx)(N.GuildFeedFooter, {
                        guildId: t,
                        onReloadClick: r
                    })
                });

            function b(e) {
                var t, a, m, E, j;
                let {
                    guild: b,
                    renderMode: G,
                    scrollerRef: O,
                    seenManagerRef: y
                } = e, H = (0, v.default)(), [k, U, w, B] = (0, s.useStateFromStoresArray)([u.default], () => [D.GuildFeedSectionTypes.READ, D.GuildFeedSectionTypes.UNREAD, D.GuildFeedSectionTypes.HIGHLIGHTED, D.GuildFeedSectionTypes.ALL].map(e => u.default.getFeedItemSection(b.id, e))), P = (0, s.useStateFromStores)([u.default], () => u.default.getLoadId(b.id)), V = (0, s.useStateFromStores)([C.default], () => C.default.getHomeSessionId(b.id)), {
                    loading: W,
                    error: K,
                    fetchFresh: Y,
                    fetchPage: z
                } = (0, c.default)({
                    guildId: b.id,
                    highlightedItemData: H
                }), {
                    hasMoreItems: X
                } = (0, s.useStateFromStores)([u.default], () => u.default.getPaginationStatus(b.id)), {
                    hasNewHeader: Z
                } = S.GuildHomeHeaderRedesignExperiment.useExperiment({
                    guildId: b.id,
                    location: "00f40d_1"
                }, {
                    autoTrackExposure: !1
                }), {
                    homeHeaderScroll: J
                } = (0, M.useHomeHeader)(b);
                l.useEffect(() => (d.default.initialize(), () => {
                    d.default.terminate()
                }), []), l.useLayoutEffect(() => {
                    if (null == P || null == V) return;
                    (0, i.sendFeedShownAnalytics)(b.id);
                    let e = (0, _.getMainWindowId)(),
                        t = new r.default({
                            guildId: b.id,
                            loadId: P,
                            homeSessionId: V,
                            windowId: e,
                            isPaused: !h.default.isFocused(e)
                        });
                    return t.initialize(), y.current = t, () => {
                        t.terminate()
                    }
                }, [y, b.id, P, V]);
                let q = function(e) {
                        let [t, a] = l.useState(null);
                        return l.useEffect(() => {
                            var t;
                            let n = null === (t = e.current) || void 0 === t ? void 0 : t.getScrollerNode();
                            if (null == n) return;
                            let l = new ResizeObserver(e => {
                                for (let t of e) a(t.contentRect.height)
                            });
                            return l.observe(n), () => {
                                l.disconnect()
                            }
                        }, [e]), t
                    }(O),
                    Q = l.useMemo(() => G !== D.GuildFeedRenderMode.NEW ? [] : [...B].sort((e, t) => -I.default.compare((0, o.default)(e).id, (0, o.default)(t).id)), [B, G]),
                    $ = l.useCallback(async () => {
                        var e;
                        await (null === (e = y.current) || void 0 === e ? void 0 : e.maybeFlushSeenItems(g.ForceFlushType.IMMEDIATE)), Y({
                            force: !0,
                            flushSeenItems: () => {
                                var e;
                                return null === (e = y.current) || void 0 === e ? void 0 : e.maybeFlushSeenItems(g.ForceFlushType.IMMEDIATE)
                            }
                        })
                    }, [y, Y]);
                l.useEffect(() => {
                    if (W === u.LoadingStatus.LOADING_FRESH_FEED) {
                        var e, t;
                        Z ? null === (e = O.current) || void 0 === e || e.scrollTo({
                            to: J
                        }) : null === (t = O.current) || void 0 === t || t.scrollToTop()
                    }
                }, [W, Z, J]);
                let ee = 0 === B.length,
                    {
                        showFeedback: et,
                        setOnDismissedFeedback: ea
                    } = (0, x.useShowFeedback)();
                if (ee) return W === u.LoadingStatus.LOADING_FRESH_FEED ? (0, n.jsx)("div", {
                    className: F.container,
                    children: (0, n.jsx)(p.default, {})
                }) : null != K ? (0, n.jsx)(N.GuildFeedError, {
                    guildId: b.id,
                    onReloadClick: $
                }) : (0, n.jsx)(N.GuildFeedEmpty, {
                    guildId: b.id,
                    onReloadClick: $
                });
                if (G === D.GuildFeedRenderMode.TOP) return (0, n.jsxs)("div", {
                    className: F.container,
                    children: [(0, n.jsx)(T.default, {
                        guild: b
                    }), B.map((e, t) => (0, n.jsx)(f.default, {
                        guildId: b.id,
                        itemId: e.id,
                        scrollerHeight: q,
                        scrollerRef: O,
                        showFeedback: 0 === t && et,
                        setOnDismissedFeedback: ea
                    }, e.id)), (0, n.jsx)(R, {
                        guildId: b.id,
                        hasMoreItems: null != X && X,
                        scrollerRef: O,
                        error: K,
                        fetchPage: z,
                        onReloadClick: $
                    })]
                });
                if (G === D.GuildFeedRenderMode.NEW) return (0, n.jsxs)("div", {
                    className: F.container,
                    children: [(0, n.jsx)(T.default, {
                        guild: b
                    }), Q.map((e, t) => (0, n.jsx)(f.default, {
                        guildId: b.id,
                        itemId: e.id,
                        scrollerHeight: q,
                        scrollerRef: O,
                        showFeedback: 0 === t && et,
                        setOnDismissedFeedback: ea
                    }, e.id)), (0, n.jsx)(R, {
                        guildId: b.id,
                        hasMoreItems: null != X && X,
                        scrollerRef: O,
                        error: K,
                        fetchPage: z,
                        onReloadClick: $
                    })]
                });
                let en = null !== (j = null !== (E = null === (t = w[0]) || void 0 === t ? void 0 : t.id) && void 0 !== E ? E : null === (a = U[0]) || void 0 === a ? void 0 : a.id) && void 0 !== j ? j : null === (m = k[0]) || void 0 === m ? void 0 : m.id;
                return (0, n.jsxs)("div", {
                    className: F.container,
                    children: [(0, n.jsx)(L, {
                        guildId: b.id
                    }), (0, n.jsx)(T.default, {
                        guild: b
                    }), w.map(e => (0, n.jsx)(f.default, {
                        guildId: b.id,
                        itemId: e.id,
                        scrollerHeight: q,
                        scrollerRef: O,
                        showFeedback: e.id === en && et,
                        setOnDismissedFeedback: ea
                    }, e.id)), U.map(e => (0, n.jsx)(f.default, {
                        guildId: b.id,
                        itemId: e.id,
                        scrollerHeight: q,
                        scrollerRef: O,
                        showFeedback: e.id === en && et,
                        setOnDismissedFeedback: ea
                    }, e.id)), k.length > 0 ? (0, n.jsx)(A.default, {}) : null, k.map(e => (0, n.jsx)(f.default, {
                        guildId: b.id,
                        itemId: e.id,
                        scrollerHeight: q,
                        scrollerRef: O,
                        showFeedback: e.id === en && et,
                        setOnDismissedFeedback: ea
                    }, e.id)), (0, n.jsx)(R, {
                        guildId: b.id,
                        hasMoreItems: null != X && X,
                        scrollerRef: O,
                        error: K,
                        fetchPage: z,
                        onReloadClick: $
                    })]
                })
            }
        },
        216364: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                GuildFeedFooter: function() {
                    return g
                },
                GuildFeedEmpty: function() {
                    return I
                },
                GuildFeedError: function() {
                    return _
                },
                GuildFeedPaginationError: function() {
                    return x
                }
            });
            var n = a("37983"),
                l = a("884691"),
                s = a("414456"),
                i = a.n(s),
                d = a("77078"),
                r = a("109264"),
                u = a("543289"),
                o = a("423487"),
                c = a("795783"),
                f = a("49111"),
                m = a("782340"),
                h = a("916697");

            function E(e, t, l) {
                return (0, n.jsx)(d.Clickable, {
                    className: h.mutedChannelsHook,
                    onClick: function() {
                        (0, d.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await a.el("747593").then(a.bind(a, "747593"));
                            return t => (0, n.jsx)(e, {
                                ...t,
                                guildId: l
                            })
                        })
                    },
                    children: e
                }, t)
            }
            let g = l.memo(function(e) {
                    let {
                        guildId: t,
                        onReloadClick: a
                    } = e, l = (0, c.default)(t);
                    return (0, n.jsxs)("div", {
                        className: i(h.container, h.footerContainer),
                        children: [(0, n.jsxs)("div", {
                            className: h.iconContainer,
                            children: [(0, n.jsx)(r.default, {
                                className: h.icon,
                                width: 20,
                                height: 20
                            }), (0, n.jsx)(u.default, {
                                className: h.stars,
                                width: 52,
                                height: 40
                            })]
                        }), (0, n.jsx)(d.Heading, {
                            className: h.header,
                            variant: "heading-md/semibold",
                            children: m.default.Messages.GUILD_FEED_FOOTER_TITLE
                        }), (0, n.jsx)(d.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: l > 0 ? m.default.Messages.GUILD_FEED_MUTED_CHANNELS_SUBTITLE.format({
                                numMutedChannels: l,
                                mutedChannelsHook: (e, a) => E(e, a, t)
                            }) : m.default.Messages.GUILD_FEED_FOOTER_SUBTITLE
                        }), (0, n.jsx)(d.Button, {
                            onClick: a,
                            className: h.button,
                            children: m.default.Messages.GUILD_FEED_RELOAD
                        })]
                    })
                }),
                I = l.memo(function(e) {
                    let {
                        guildId: t,
                        onReloadClick: a
                    } = e, l = (0, c.default)(t);
                    return (0, n.jsxs)("div", {
                        className: i(h.container, h.background),
                        children: [(0, n.jsxs)("div", {
                            className: h.iconContainer,
                            children: [(0, n.jsx)(r.default, {
                                className: h.icon,
                                width: 36,
                                height: 36
                            }), (0, n.jsx)(u.default, {
                                className: h.stars
                            })]
                        }), (0, n.jsx)(d.Heading, {
                            className: h.header,
                            variant: "heading-md/semibold",
                            children: m.default.Messages.GUILD_FEED_EMPTY_TITLE
                        }), (0, n.jsx)(d.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: l > 0 ? m.default.Messages.GUILD_FEED_MUTED_CHANNELS_SUBTITLE.format({
                                numMutedChannels: l,
                                mutedChannelsHook: (e, a) => E(e, a, t)
                            }) : m.default.Messages.GUILD_FEED_EMPTY_SUBTITLE
                        }), (0, n.jsx)(d.Button, {
                            onClick: a,
                            className: h.button,
                            children: m.default.Messages.GUILD_FEED_RELOAD
                        })]
                    })
                }),
                _ = l.memo(function(e) {
                    let {
                        onReloadClick: t
                    } = e;
                    return (0, n.jsxs)("div", {
                        className: i(h.container, h.background),
                        children: [(0, n.jsx)("div", {
                            className: h.iconContainer,
                            children: (0, n.jsx)(o.default, {
                                className: h.icon,
                                width: 36,
                                height: 36
                            })
                        }), (0, n.jsx)(d.Heading, {
                            className: h.header,
                            variant: "heading-md/semibold",
                            children: m.default.Messages.GUILD_FEED_ERROR_TITLE
                        }), (0, n.jsx)(d.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: m.default.Messages.GUILD_FEED_ERROR_SUBTITLE.format({
                                url: f.Links.STATUS
                            })
                        }), (0, n.jsx)(d.Button, {
                            onClick: t,
                            className: h.button,
                            children: m.default.Messages.GUILD_FEED_RELOAD
                        })]
                    })
                }),
                x = l.memo(function(e) {
                    let {
                        onReloadClick: t
                    } = e;
                    return (0, n.jsxs)("div", {
                        className: i(h.container, h.paginationContainer, h.primaryBackground),
                        children: [(0, n.jsx)("div", {
                            className: h.iconContainer,
                            children: (0, n.jsx)(o.default, {
                                className: h.icon,
                                width: 36,
                                height: 36
                            })
                        }), (0, n.jsx)(d.Heading, {
                            className: h.header,
                            variant: "heading-md/semibold",
                            children: m.default.Messages.GUILD_FEED_ERROR_TITLE
                        }), (0, n.jsx)(d.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: m.default.Messages.GUILD_FEED_ERROR_SUBTITLE.format({
                                url: f.Links.STATUS
                            })
                        }), (0, n.jsx)(d.Button, {
                            onClick: t,
                            className: h.button,
                            children: m.default.Messages.RETRY
                        })]
                    })
                })
        },
        405700: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return m
                }
            });
            var n = a("37983"),
                l = a("884691"),
                s = a("917351"),
                i = a.n(s),
                d = a("339274"),
                r = a("605143"),
                u = a("88243"),
                o = a("67602"),
                c = a("318675");

            function f() {
                let e = l.useMemo(() => {
                    if (!(.5 > i.random(1))) return {
                        ...(0, u.generateAttachmentSpec)(),
                        last: !0
                    }
                }, []);
                return (0, n.jsxs)(d.default, {
                    "aria-hidden": !0,
                    ariaLabel: "",
                    children: [(0, n.jsx)(r.default, {
                        children: (0, n.jsx)(o.ContentBlob, {
                            className: c.channelName,
                            opacity: .3,
                            width: 80
                        })
                    }), (0, n.jsx)("div", {
                        className: c.body,
                        children: (0, n.jsx)(o.default, {
                            messages: 5,
                            attachmentSpecs: e,
                            className: c.withoutCustomBackground
                        })
                    })]
                })
            }
            var m = l.memo(function(e) {
                let {
                    count: t
                } = e;
                return (0, n.jsx)(n.Fragment, {
                    children: i.times(null != t ? t : 5, e => (0, n.jsx)(f, {}, e))
                })
            })
        },
        67076: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return S
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("414456"),
                s = a.n(l),
                i = a("446674"),
                d = a("77078"),
                r = a("957255"),
                u = a("945330"),
                o = a("701909"),
                c = a("620840"),
                f = a("49111"),
                m = a("782340"),
                h = a("719593"),
                E = a("487577");

            function g(e) {
                let {
                    children: t,
                    onClose: a
                } = e;
                return (0, n.jsxs)("div", {
                    className: h.container,
                    children: [(0, n.jsx)(d.Clickable, {
                        className: h.closeButton,
                        onClick: a,
                        children: (0, n.jsx)(u.default, {
                            className: h.closeIcon
                        })
                    }), (0, n.jsx)("div", {
                        className: h.textContainer,
                        children: t
                    }), (0, n.jsx)("img", {
                        className: h.image,
                        src: E,
                        alt: ""
                    })]
                })
            }

            function I(e) {
                let {
                    onClose: t
                } = e;
                return (0, n.jsxs)(g, {
                    onClose: t,
                    children: [(0, n.jsx)(d.Heading, {
                        style: {
                            color: "white"
                        },
                        variant: "heading-lg/semibold",
                        color: "none",
                        children: m.default.Messages.GUILD_FEED_NUX_MEMBER_TITLE
                    }), (0, n.jsx)(d.Text, {
                        className: h.bodySection,
                        variant: "text-sm/normal",
                        color: "none",
                        children: m.default.Messages.GUILD_FEED_NUX_MEMBER_BODY_1
                    }), (0, n.jsx)(d.Text, {
                        className: h.bodySection,
                        variant: "text-sm/normal",
                        color: "none",
                        children: m.default.Messages.GUILD_FEED_NUX_MEMBER_BODY_2
                    }), (0, n.jsx)(d.Anchor, {
                        className: s(h.cta, h.ctaLink, (0, d.getButtonStyle)({
                            look: d.Button.Looks.LINK,
                            color: d.Button.Colors.WHITE
                        })),
                        href: o.default.getArticleURL(f.HelpdeskArticles.GUILD_HOME),
                        children: m.default.Messages.GUILD_FEED_NUX_MEMBER_BODY_3
                    })]
                })
            }

            function _() {
                (0, d.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await a.el("56657").then(a.bind(a, "56657"));
                    return t => (0, n.jsx)(e, {
                        ...t
                    })
                })
            }

            function x(e) {
                let {
                    onClose: t
                } = e;
                return (0, n.jsxs)(g, {
                    onClose: t,
                    children: [(0, n.jsx)(d.Heading, {
                        style: {
                            color: "white"
                        },
                        variant: "heading-lg/semibold",
                        color: "none",
                        children: m.default.Messages.GUILD_FEED_NUX_MODERATOR_TITLE
                    }), (0, n.jsx)(d.Text, {
                        className: h.bodySection,
                        variant: "text-sm/normal",
                        color: "none",
                        children: m.default.Messages.GUILD_FEED_NUX_MEMBER_BODY_1
                    }), (0, n.jsx)(d.Text, {
                        className: h.bodySection,
                        variant: "text-sm/normal",
                        color: "none",
                        children: m.default.Messages.GUILD_FEED_NUX_MEMBER_BODY_2
                    }), (0, n.jsx)(d.Button, {
                        className: h.cta,
                        look: d.Button.Looks.INVERTED,
                        color: d.Button.Colors.BRAND,
                        onClick: _,
                        children: m.default.Messages.GUILD_FEED_NUX_MODERATOR_CTA
                    })]
                })
            }

            function S(e) {
                let {
                    guild: t,
                    onClose: a
                } = e, l = (0, i.useStateFromStores)([r.default], () => r.default.can(f.Permissions.MANAGE_MESSAGES, t)), s = (0, c.default)(t, a);
                return s ? l ? (0, n.jsx)(x, {
                    onClose: a
                }) : (0, n.jsx)(I, {
                    onClose: a
                }) : null
            }
        },
        806727: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return o
                }
            });
            var n = a("37983"),
                l = a("884691"),
                s = a("151426"),
                i = a("509802"),
                d = a("67076"),
                r = a("994428");
            let u = [s.DismissibleContent.GUILD_FEED_NUX_CARD];
            var o = l.memo(function(e) {
                let {
                    guild: t
                } = e;
                return (0, n.jsx)(i.default, {
                    contentTypes: u,
                    groupName: r.DismissibleContentGroupName.GUILD_FEED_TOP,
                    children: e => {
                        let {
                            visibleContent: a,
                            markAsDismissed: l
                        } = e;
                        if (a === s.DismissibleContent.GUILD_FEED_NUX_CARD) return (0, n.jsx)(d.default, {
                            guild: t,
                            onClose: l
                        });
                        return null
                    }
                })
            })
        },
        807058: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return u
                }
            });
            var n = a("37983"),
                l = a("884691"),
                s = a("77078"),
                i = a("36694"),
                d = a("782340"),
                r = a("263405"),
                u = l.memo(function() {
                    return (0, n.jsxs)("div", {
                        className: r.container,
                        children: [(0, n.jsxs)("div", {
                            className: r.divider,
                            children: [(0, n.jsx)("div", {
                                className: r.line
                            }), (0, n.jsx)("div", {
                                className: r.icon,
                                children: (0, n.jsx)(i.default, {
                                    height: 24,
                                    width: 24
                                })
                            }), (0, n.jsx)("div", {
                                className: r.line
                            })]
                        }), (0, n.jsx)(s.Text, {
                            className: r.title,
                            color: "header-primary",
                            variant: "text-md/semibold",
                            children: d.default.Messages.GUILD_FEED_UNREAD_DIVIDER_TITLE
                        }), (0, n.jsx)(s.Text, {
                            className: r.subtitle,
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: d.default.Messages.GUILD_FEED_UNREAD_DIVIDER_SUBTITLE
                        })]
                    })
                })
        },
        821435: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return B
                }
            });
            var n = a("37983"),
                l = a("884691"),
                s = a("414456"),
                i = a.n(s),
                d = a("298386"),
                r = a("446674"),
                u = a("77078"),
                o = a("834897"),
                c = a("419830"),
                f = a("374021"),
                m = a("398604"),
                h = a("628059"),
                E = a("841363"),
                g = a("822516"),
                I = a("93550"),
                _ = a("267567"),
                x = a("393414"),
                S = a("716214"),
                C = a("488464"),
                v = a("998716"),
                N = a("42203"),
                p = a("957255"),
                T = a("316133"),
                A = a("943232"),
                M = a("93393"),
                D = a("718550"),
                j = a("811305"),
                F = a("599110"),
                L = a("887446"),
                R = a("154925"),
                b = a("49111"),
                G = a("515631"),
                O = a("745049"),
                y = a("782340"),
                H = a("53176");

            function k(e) {
                let {
                    event: t
                } = e, {
                    scheduled_start_time: a,
                    scheduled_end_time: s
                } = t, d = (0, m.isGuildScheduledEventActive)(t), [{
                    startDateTimeString: r,
                    endDateTimeString: o,
                    currentOrPastEvent: c,
                    upcomingEvent: f,
                    diffMinutes: h
                }, E] = l.useState((0, g.getEventTimeData)(a, s));
                l.useEffect(() => {
                    let e = setInterval(() => E((0, g.getEventTimeData)(a, s)), 1e3);
                    return () => {
                        clearInterval(e)
                    }
                }, []);
                let I = r,
                    _ = "header-secondary";
                return d ? (I = y.default.Messages.STAGE_CHANNEL_LIVE_NOW, _ = "text-positive") : c ? (I = y.default.Messages.STARTING_SOON, _ = "text-brand") : f ? (I = h > 0 ? y.default.Messages.STARTING_IN_MINUTES.format({
                    minutes: h
                }) : y.default.Messages.STARTING_SOON, _ = "text-brand") : null != o && "" !== o && (I = y.default.Messages.START_DATE_TO_END_DATE.format({
                    start: r,
                    end: o
                })), (0, n.jsxs)("div", {
                    className: i(H.eventTime, {
                        [H.isActive]: d,
                        [H.isBrand]: c || f
                    }),
                    children: [(0, n.jsx)(M.default, {
                        width: 12,
                        height: 12
                    }), (0, n.jsxs)(u.Text, {
                        color: _,
                        variant: "text-xs/normal",
                        className: H.eventTimeLabel,
                        children: [I, (0, n.jsx)("span", {
                            className: H.separator,
                            children: "•"
                        })]
                    })]
                })
            }

            function U(e) {
                let {
                    event: t,
                    channel: a,
                    isCollapsedSize: s,
                    onEventClick: i
                } = e, d = (0, r.useStateFromStores)([p.default], () => p.default.can(b.Permissions.CONNECT, a)), o = l.useCallback(() => {
                    null != a && null != a.getGuildId() && d && ((0, S.connectAndOpen)(a), (0, x.transitionToGuild)(a.getGuildId(), a.id))
                }, [a, d]), c = (0, I.default)(t), f = t.entity_type === O.GuildScheduledEventEntityTypes.STAGE_INSTANCE ? y.default.Messages.STAGE_CHANNEL_JOIN_BUTTON : y.default.Messages.JOIN;
                if (null == t.image || s) return null != a && d ? (0, n.jsx)("div", {
                    className: H.eventJoinContainer,
                    children: (0, n.jsx)(u.Button, {
                        className: H.joinButton,
                        onClick: o,
                        fullWidth: !0,
                        color: u.Button.Colors.GREEN,
                        children: f
                    })
                }) : null;
                return null != a && d ? (0, n.jsxs)(u.Clickable, {
                    onClick: o,
                    className: H.eventJoinContainer,
                    children: [(0, n.jsx)("div", {
                        className: H.eventImg,
                        style: {
                            backgroundImage: "url(".concat(c, ")")
                        }
                    }), (0, n.jsx)("div", {
                        className: H.eventImgHover,
                        children: (0, n.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            color: "none",
                            className: H.eventImgJoinButton,
                            children: f
                        })
                    })]
                }) : (0, n.jsx)(u.Clickable, {
                    onClick: i,
                    className: H.eventJoinContainer,
                    children: (0, n.jsx)("div", {
                        className: H.eventImg,
                        style: {
                            backgroundImage: "url(".concat(c, ")")
                        }
                    })
                })
            }

            function w(e) {
                var t;
                let {
                    event: a,
                    channel: l,
                    isActive: s,
                    isCollapsedSize: d
                } = e, r = (0, c.getChannelIconComponent)(l);
                return (0, n.jsxs)("div", {
                    className: H.eventInfo,
                    children: [(!s || d) && (0, n.jsx)(k, {
                        event: a
                    }), (0, n.jsx)("div", {
                        className: H.location,
                        children: null != l && null != r ? (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)(r, {
                                width: 12,
                                height: 12,
                                className: H.icon
                            }), (0, n.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                className: H.locationLabel,
                                children: l.name
                            })]
                        }) : (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)(D.default, {
                                height: 12,
                                width: 12,
                                className: i(H.channelContainer, H.icon)
                            }), (0, n.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                className: H.locationLabel,
                                children: (0, h.guildEventDetailsParser)(null !== (t = (0, E.getLocationFromEvent)(a)) && void 0 !== t ? t : void 0, !0)
                            })]
                        })
                    })]
                })
            }

            function B(e) {
                let {
                    event: t,
                    isInList: a
                } = e, {
                    guild_id: s
                } = t, i = (0, o.default)(G.COLLAPSED_SIZE_MEDIA_QUERY), u = (0, m.isGuildScheduledEventActive)(t), c = (0, r.useStateFromStores)([N.default], () => N.default.getChannel(t.channel_id)), h = (0, r.useStateFromStores)([_.default], () => _.default.isLurking(s), [s]), E = l.useCallback(() => {
                    F.default.track(b.AnalyticEvents.HOME_EVENT_CLICKED, {
                        guild_id: s,
                        home_session_id: L.default.getHomeSessionId(s),
                        guild_scheduled_event_id: t.id,
                        is_active: u
                    }), (0, f.openGuildEventDetails)({
                        eventId: t.id,
                        parentGuildId: s
                    })
                }, [t, s, u]), g = (0, r.useStateFromStoresArray)([T.default], () => null == c ? [] : T.default.getVoiceStatesForChannel(c).map(e => {
                    let {
                        user: t
                    } = e;
                    return t
                }), [c]), I = (0, r.useStateFromStores)([C.default], () => {
                    if (null != c && c.type === d.ChannelTypes.GUILD_STAGE_VOICE) return C.default.getParticipantCount(null == c ? void 0 : c.id, v.StageChannelParticipantNamedIndex.AUDIENCE)
                }, [c]);
                return (0, n.jsx)(R.ActiveNowBase, {
                    listItemId: a ? t.id : void 0,
                    shouldUseCollapsedLayout: !1,
                    onClick: h ? void 0 : E,
                    icon: u ? (0, n.jsx)("div", {
                        className: H.liveNowIcon
                    }) : (0, n.jsx)(A.default, {
                        width: R.ACTIVE_NOW_ICON_SIZE,
                        height: R.ACTIVE_NOW_ICON_SIZE
                    }),
                    iconTooltipText: y.default.Messages.GUILD_HOME_EVENTS_TOOLTIP_TEXT,
                    header: t.name,
                    textNode: (0, n.jsx)(w, {
                        event: t,
                        channel: c,
                        isActive: u,
                        isCollapsedSize: i
                    }),
                    accessoryNode: u ? (0, n.jsx)(j.default, {
                        guildId: s,
                        users: g,
                        count: I,
                        size: j.Sizes.SIZE_16,
                        max: R.DISPLAYED_PARTICIPANT_AVATARS
                    }) : null,
                    children: u && (0, n.jsx)(U, {
                        event: t,
                        channel: c,
                        isCollapsedSize: i,
                        onEventClick: E
                    })
                })
            }
        },
        114935: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return x
                }
            });
            var n = a("37983"),
                l = a("884691"),
                s = a("917351"),
                i = a.n(s),
                d = a("866227"),
                r = a.n(d),
                u = a("151426"),
                o = a("77078"),
                c = a("834897"),
                f = a("10641"),
                m = a("398604"),
                h = a("534222"),
                E = a("821435"),
                g = a("515631"),
                I = a("782340"),
                _ = a("850858");

            function x(e) {
                let {
                    guild: t
                } = e, s = (0, c.default)(g.COLLAPSED_SIZE_MEDIA_QUERY), d = (0, h.default)(t.id), x = l.useMemo(() => {
                    let e = d.filter(e => (0, m.isGuildScheduledEventActive)(e));
                    return s && e.length > 0 ? i.head(e) : i.chain(d).filter(e => !(0, m.isGuildScheduledEventActive)(e)).minBy(e => r(e.scheduled_start_time)).value()
                }, [d, s]);
                if (null == x) return null;
                async function S() {
                    await (0, o.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await a.el("659707").then(a.bind(a, "659707"));
                        return a => (0, n.jsx)(e, {
                            ...a,
                            guildId: t.id
                        })
                    }), (0, f.markDismissibleContentAsDismissed)(u.DismissibleContent.GUILD_HEADER_EVENT_UPSELL)
                }
                return (0, n.jsxs)("div", {
                    className: _.container,
                    children: [(0, n.jsxs)("div", {
                        className: _.header,
                        children: [(0, n.jsx)(o.Heading, {
                            variant: "heading-md/semibold",
                            children: s ? I.default.Messages.GUILD_EVENTS : I.default.Messages.GUILD_HOME_EVENTS_TITLE
                        }), d.length >= 2 ? (0, n.jsx)(o.Clickable, {
                            onClick: S,
                            children: (0, n.jsx)(o.Text, {
                                className: _.showEvents,
                                variant: "text-sm/normal",
                                children: I.default.Messages.GUILD_HOME_SEE_ALL.format({
                                    count: d.length
                                })
                            })
                        }) : null]
                    }), (0, n.jsx)("div", {
                        className: _.events,
                        children: (0, n.jsx)(E.default, {
                            event: x,
                            isInList: !1
                        })
                    })]
                })
            }
        },
        20362: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return m
                }
            });
            var n = a("37983"),
                l = a("884691"),
                s = a("446674"),
                i = a("77078"),
                d = a("503021"),
                r = a("757414"),
                u = a("109024"),
                o = a("782340"),
                c = a("864732");

            function f(e) {
                let {
                    guild: t
                } = e;
                l.useEffect(() => {
                    (0, d.fetchGuildForPopout)(t.id)
                }, [t.id]);
                let a = (0, s.useStateFromStores)([r.default], () => r.default.getGuild(t.id), [t]);
                return (0, n.jsxs)("div", {
                    className: c.memberInfo,
                    children: [(null == a ? void 0 : a.presenceCount) != null ? (0, n.jsxs)("div", {
                        className: c.memberCount,
                        children: [(0, n.jsx)("div", {
                            className: c.dotOnline
                        }), (0, n.jsx)(i.Text, {
                            variant: "text-sm/normal",
                            className: c.memberText,
                            children: o.default.Messages.MEMBER_VERIFICATION_NUM_ONLINE.format({
                                membersOnline: a.presenceCount
                            })
                        })]
                    }) : null, (null == a ? void 0 : a.memberCount) != null ? (0, n.jsxs)("div", {
                        className: c.memberCount,
                        children: [(0, n.jsx)("div", {
                            className: c.dotOffline
                        }), (0, n.jsx)(i.Text, {
                            variant: "text-sm/normal",
                            className: c.memberText,
                            children: o.default.Messages.MEMBER_VERIFICATION_NUM_MEMBERS.format({
                                members: a.memberCount
                            })
                        })]
                    }) : null]
                })
            }
            var m = l.memo(function(e) {
                let {
                    guild: t
                } = e;
                return (0, n.jsxs)("div", {
                    className: c.container,
                    children: [(0, n.jsx)("div", {
                        className: c.iconWrapper,
                        children: (0, n.jsx)(u.default, {
                            className: c.icon,
                            guild: t,
                            size: u.default.Sizes.LARGER,
                            active: !0
                        })
                    }), (0, n.jsx)(i.Text, {
                        tag: "div",
                        className: c.name,
                        variant: "heading-xl/semibold",
                        children: t.name
                    }), null != t.description ? (0, n.jsx)(i.Text, {
                        className: c.description,
                        variant: "text-md/normal",
                        children: t.description
                    }) : null, (0, n.jsx)(f, {
                        guild: t
                    })]
                })
            })
        },
        815619: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                useHomeHeader: function() {
                    return A
                },
                default: function() {
                    return j
                }
            });
            var n = a("37983"),
                l = a("884691"),
                s = a("414456"),
                i = a.n(s),
                d = a("446674"),
                r = a("669491"),
                u = a("77078"),
                o = a("841098"),
                c = a("380710"),
                f = a("592407"),
                m = a("242757"),
                h = a("957255"),
                E = a("40469"),
                g = a("109024"),
                I = a("181114"),
                _ = a("118503"),
                x = a("818643"),
                S = a("315102"),
                C = a("49111"),
                v = a("782340"),
                N = a("53354"),
                p = a("141555"),
                T = a("520609");
            let A = e => {
                let t = l.useMemo(() => null == e ? null : S.default.getGuildHomeHeaderURL({
                    id: e.id,
                    homeHeader: e.homeHeader
                }), [e]);
                return {
                    homeHeaderImage: t,
                    isHomeHeaderImageSet: null != t,
                    homeHeaderScroll: null != t ? 200 : 0
                }
            };

            function M(e) {
                let {
                    guild: t
                } = e, a = () => {
                    f.default.open(t.id, C.GuildSettingsSections.ONBOARDING, void 0, C.GuildSettingsSubsections.SERVER_GUIDE)
                }, l = t.hasFeature(C.GuildFeatures.BANNER);
                return l ? (0, n.jsxs)(u.Button, {
                    className: N.editButton,
                    innerClassName: N.editButtonInner,
                    type: "button",
                    size: u.Button.Sizes.MEDIUM,
                    color: u.Button.Colors.BRAND,
                    onClick: a,
                    children: [(0, n.jsx)(x.default, {
                        height: 16,
                        width: 16,
                        color: r.default.unsafe_rawColors.WHITE_500.css
                    }), v.default.Messages.EDIT_IMAGE]
                }) : (0, n.jsxs)(I.default, {
                    color: u.Button.Colors.GREEN,
                    className: N.editButton,
                    innerClassName: N.editButtonInner,
                    onClick: a,
                    children: [(0, n.jsx)(_.default, {
                        height: 16,
                        width: 16,
                        className: N.premiumUpsellBadge
                    }), v.default.Messages.PREMIUM_GUILD_UNLOCK_WTH_BOOSTING_CTA]
                })
            }
            let D = l.memo(function(e) {
                let {
                    guild: t,
                    titleClassName: l
                } = e, {
                    homeHeaderImage: s,
                    isHomeHeaderImageSet: r
                } = A(t), f = (0, c.useGuildOnboardingSettingsAvailable)(t.id), I = (0, d.useStateFromStores)([h.default], () => (0, m.canViewInviteModal)(h.default, t)), _ = (0, o.default)();
                return (0, n.jsxs)("div", {
                    className: N.header,
                    children: [(0, n.jsxs)("div", {
                        className: N.headerArtWrapper,
                        children: [(0, n.jsx)("div", {
                            className: i(N.headerArt, {
                                [N.headerArtPlaceholder]: !r
                            }),
                            style: {
                                backgroundImage: "url(".concat(r ? s : "dark" === _ ? p : T, ")")
                            }
                        }), f && (0, n.jsx)(M, {
                            guild: t
                        })]
                    }), (0, n.jsx)("div", {
                        className: N.titleWrapper,
                        children: (0, n.jsxs)("div", {
                            className: l,
                            children: [(0, n.jsx)(g.default, {
                                className: N.headerIcon,
                                guild: t,
                                size: g.default.Sizes.XLARGE,
                                active: !0
                            }), (0, n.jsx)(u.HeadingLevel, {
                                children: (0, n.jsxs)("div", {
                                    className: N.headerName,
                                    children: [(0, n.jsx)(u.Heading, {
                                        className: N.headerName,
                                        variant: "heading-xxl/bold",
                                        children: t.name
                                    }), (0, n.jsx)(E.default, {
                                        size: 24,
                                        guild: t,
                                        tooltipPosition: "bottom",
                                        tooltipColor: u.Tooltip.Colors.PRIMARY,
                                        className: N.guildBadge
                                    }), I && (0, n.jsx)(u.Button, {
                                        className: N.inviteButton,
                                        size: u.Button.Sizes.MEDIUM,
                                        color: u.Button.Colors.PRIMARY,
                                        onClick: () => (0, u.openModalLazy)(async () => {
                                            let {
                                                default: e
                                            } = await a.el("310688").then(a.bind(a, "310688"));
                                            return a => (0, n.jsx)(e, {
                                                ...a,
                                                guild: t,
                                                source: C.InstantInviteSources.GUILD_HOME
                                            })
                                        }),
                                        children: v.default.Messages.INSTANT_INVITE
                                    })]
                                })
                            })]
                        })
                    })]
                })
            });
            var j = D
        },
        543071: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return m
                }
            });
            var n = a("37983"),
                l = a("884691"),
                s = a("446674"),
                i = a("77078"),
                d = a("503021"),
                r = a("757414"),
                u = a("794352"),
                o = a("782340"),
                c = a("864732");

            function f(e) {
                let {
                    guild: t
                } = e;
                l.useEffect(() => {
                    (0, d.fetchGuildForPopout)(t.id)
                }, [t.id]);
                let a = (0, s.useStateFromStores)([r.default], () => r.default.getGuild(t.id), [t]);
                return (0, n.jsxs)("div", {
                    className: c.memberInfo,
                    children: [t.hasCommunityInfoSubheader() && (0, n.jsxs)("div", {
                        className: c.memberCount,
                        children: [(0, n.jsx)(u.default, {
                            width: 14,
                            height: 14
                        }), (0, n.jsx)(i.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: o.default.Messages.DISCOVERABLE_GUILD_HEADER_PUBLIC
                        })]
                    }), (null == a ? void 0 : a.presenceCount) != null && (0, n.jsxs)("div", {
                        className: c.memberCount,
                        children: [(0, n.jsx)("div", {
                            className: c.dotOnline
                        }), (0, n.jsx)(i.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: o.default.Messages.MEMBER_VERIFICATION_NUM_ONLINE.format({
                                membersOnline: a.presenceCount
                            })
                        })]
                    }), (null == a ? void 0 : a.memberCount) != null && (0, n.jsxs)("div", {
                        className: c.memberCount,
                        children: [(0, n.jsx)("div", {
                            className: c.dotOffline
                        }), (0, n.jsx)(i.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: o.default.Messages.MEMBER_VERIFICATION_NUM_MEMBERS.format({
                                members: a.memberCount
                            })
                        })]
                    })]
                })
            }
            var m = l.memo(function(e) {
                let {
                    guild: t
                } = e;
                return (0, n.jsx)("div", {
                    className: c.container,
                    children: (0, n.jsxs)(i.HeadingLevel, {
                        component: (0, n.jsx)("div", {
                            className: c.header,
                            children: (0, n.jsx)(i.Heading, {
                                variant: "heading-md/bold",
                                children: o.default.Messages.GUILD_HOME_ABOUT
                            })
                        }),
                        children: [null != t.description ? (0, n.jsx)(i.Text, {
                            className: c.description,
                            variant: "text-md/normal",
                            children: t.description
                        }) : null, (0, n.jsx)(f, {
                            guild: t
                        })]
                    })
                })
            })
        },
        144295: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return eg
                }
            });
            var n = a("37983"),
                l = a("884691"),
                s = a("414456"),
                i = a.n(s),
                d = a("355262"),
                r = a("446674"),
                u = a("77078"),
                o = a("851387"),
                c = a("737960"),
                f = a("731898"),
                m = a("834897"),
                h = a("510889"),
                E = a("665182"),
                g = a("624027"),
                I = a("462998"),
                _ = a("69927"),
                x = a("298878"),
                S = a("713810"),
                C = a("185014"),
                v = a("290886"),
                N = a("957687"),
                p = a("90713"),
                T = a("539938"),
                A = a("144491"),
                M = a("56778"),
                D = a("208021"),
                j = a("582713"),
                F = a("861570"),
                L = a("982108"),
                R = a("760190"),
                b = a("305961"),
                G = a("957255"),
                O = a("744983"),
                y = a("223383"),
                H = a("550515"),
                k = a("664336"),
                U = a("395118"),
                w = a("599110"),
                B = a("608275"),
                P = a("677315"),
                V = a("146005"),
                W = a("887446"),
                K = a("827298"),
                Y = a("577177"),
                z = a("75360"),
                X = a("280110"),
                Z = a("914878"),
                J = a("260730"),
                q = a("114935"),
                Q = a("20362"),
                $ = a("815619"),
                ee = a("543071"),
                et = a("49111"),
                ea = a("724210"),
                en = a("515631"),
                el = a("782340"),
                es = a("895976"),
                ei = a("305794"),
                ed = a("487577");
            let er = 936,
                eu = l.memo(function(e) {
                    let {
                        guild: t,
                        seenManagerRef: a
                    } = e, s = function(e, t) {
                        let {
                            showRefreshButton: a
                        } = P.GuildFeedRefreshButtonExperiment.useExperiment({
                            location: "69386d_1"
                        }, {
                            autoTrackExposure: !1
                        });
                        l.useEffect(() => {
                            P.GuildFeedRefreshButtonExperiment.trackExposure({
                                location: "69386d_2"
                            })
                        }, []);
                        let s = (0, r.useStateFromStores)([G.default], () => G.default.can(et.Permissions.MANAGE_MESSAGES, e), [e]),
                            i = [];
                        return a && i.push((0, n.jsx)(k.Icon, {
                            tooltip: el.default.Messages.REFRESH,
                            icon: H.default,
                            onClick: function() {
                                (0, S.fetchGuildFeed)({
                                    guildId: e.id,
                                    refresh: !0,
                                    flushSeenItems: () => {
                                        var e;
                                        return null === (e = t.current) || void 0 === e ? void 0 : e.maybeFlushSeenItems(U.ForceFlushType.IMMEDIATE)
                                    }
                                })
                            }
                        })), s && i.push((0, n.jsx)(p.default, {
                            guildId: e.id
                        })), i
                    }(t, a);
                    return (0, n.jsxs)(T.default, {
                        channelId: ea.StaticChannelRoute.GUILD_HOME,
                        guildId: t.id,
                        className: i(ei.title, es.background),
                        innerClassname: es.headerBarInner,
                        toolbar: s,
                        children: [(0, n.jsx)(T.default.Icon, {
                            icon: y.default,
                            "aria-hidden": !0
                        }), (0, n.jsxs)(T.default.Title, {
                            children: [(0, n.jsx)(u.HiddenVisually, {
                                children: t.name
                            }), el.default.Messages.GUILD_HOME]
                        }), (0, n.jsx)(x.default, {})]
                    })
                }),
                eo = l.memo(function(e) {
                    let {
                        guild: t,
                        containerHeight: a,
                        isUsingCollapsedLayout: s
                    } = e, [i, d] = l.useState(0), {
                        ref: r,
                        height: o
                    } = (0, f.default)();
                    (0, Y.default)(t.id), l.useEffect(() => {
                        if (null == o) return;
                        let e = o + 128 - a;
                        d(e)
                    }, [a, o]);
                    let c = (0, u.useFocusJumpSection)(),
                        {
                            hasNewHeader: m
                        } = V.GuildHomeHeaderRedesignExperiment.useExperiment({
                            guildId: t.id,
                            location: "69386d_3"
                        }, {
                            autoTrackExposure: !1
                        });
                    return (0, n.jsx)("aside", {
                        className: es.widgets,
                        style: {
                            top: Math.min(-i, m ? -48 : 0)
                        },
                        children: (0, n.jsx)(u.FocusRing, {
                            children: (0, n.jsxs)("div", {
                                className: es.widgetsContainer,
                                ref: r,
                                tabIndex: s ? void 0 : 0,
                                "aria-label": el.default.Messages.GUILD_HOME_SIDEBAR_A11Y_LABEL,
                                ...s ? {} : c,
                                children: [m ? (0, n.jsx)(ee.default, {
                                    guild: t
                                }) : (0, n.jsx)(Q.default, {
                                    guild: t
                                }), (0, n.jsx)(Z.default, {
                                    guildId: t.id,
                                    isUsingCollapsedLayout: s
                                }), (0, n.jsx)(q.default, {
                                    guild: t
                                })]
                            })
                        })
                    })
                });

            function ec(e) {
                let t, {
                        pageWidth: a,
                        onSidebarResize: l
                    } = e,
                    s = (0, r.useStateFromStores)([L.default], () => L.default.getSidebarState(ea.StaticChannelRoute.GUILD_HOME));
                if (null == s) return null;
                let i = a - et.CHANNEL_SIDEBAR_WIDTH - 552;
                return s.type === j.SidebarType.VIEW_THREAD ? t = (0, n.jsx)(F.default, {
                    channelId: s.channelId,
                    baseChannelId: ea.StaticChannelRoute.GUILD_HOME,
                    channelViewSource: "Home View"
                }) : s.type === j.SidebarType.VIEW_CHANNEL && (t = (0, n.jsx)(I.default, {
                    channelId: s.channelId,
                    baseChannelId: ea.StaticChannelRoute.GUILD_HOME,
                    channelViewSource: "Home View"
                })), (0, n.jsx)(E.default, {
                    sidebarType: E.ChatSidebarType.HomeSidebar,
                    maxWidth: i,
                    onWidthChange: l,
                    children: t
                })
            }
            let ef = [{
                label: "Segment Reads",
                value: en.GuildFeedRenderMode.SEGMENTED_READ
            }, {
                label: "Top",
                value: en.GuildFeedRenderMode.TOP
            }, {
                label: "New",
                value: en.GuildFeedRenderMode.NEW
            }];

            function em(e) {
                let {
                    renderMode: t,
                    setRenderMode: a
                } = e, {
                    showSelector: l
                } = P.GuildFeedRenderSelectorExperiment.useExperiment({
                    location: "69386d_4"
                }, {
                    autoTrackExposure: !1
                });
                return l ? (0, n.jsx)(u.Select, {
                    className: es.selector,
                    options: ef,
                    select: a,
                    isSelected: e => e === t,
                    serialize: e => String(e)
                }) : null
            }
            let eh = (0, c.default)(function(e) {
                    let {
                        guild: t,
                        width: a,
                        height: s
                    } = e, o = t.id, c = (0, r.useStateFromStores)([L.default], () => L.default.getSection(ea.StaticChannelRoute.GUILD_HOME)), E = (0, r.useStateFromStores)([O.default], () => O.default.getCurrentSearchId()), [g, I] = l.useState(!1), [x, S] = l.useState(et.DEFAULT_CHAT_SIDEBAR_WIDTH), v = c === et.ChannelSections.SEARCH, N = c === et.ChannelSections.SIDEBAR_CHAT, p = v || N, T = l.useRef(null), A = (0, h.default)("top-messages", T), {
                        ref: j
                    } = (0, f.default)(), [F, R] = l.useState(en.GuildFeedRenderMode.SEGMENTED_READ), b = (0, m.default)(en.COLLAPSED_SIZE_MEDIA_QUERY), G = l.useRef(!1), {
                        hasNewHeader: y
                    } = V.GuildHomeHeaderRedesignExperiment.useExperiment({
                        guildId: o,
                        location: "69386d_5"
                    }, {
                        autoTrackExposure: !1
                    }), {
                        homeHeaderScroll: H
                    } = (0, $.useHomeHeader)(t);
                    l.useEffect(() => {
                        G.current = !1
                    }, [o]), l.useEffect(() => {
                        let e = C.default.getLoadId(o);
                        null == e && D.default.closeChannelSidebar(ea.StaticChannelRoute.GUILD_HOME)
                    }, [o]), (0, X.default)(o), l.useLayoutEffect(() => {
                        var e, t;
                        let a = W.default.getSavedScrollPosition(o);
                        return y && (0 === a || null == a) ? null === (e = T.current) || void 0 === e || e.scrollTo({
                            to: H
                        }) : null != a && (null === (t = T.current) || void 0 === t || t.scrollTo({
                            to: a
                        })), () => {
                            var e;
                            let t = null === (e = T.current) || void 0 === e ? void 0 : e.getScrollerState();
                            null != t && (0, B.saveGuildHomeScrollPosition)(o, t.scrollTop)
                        }
                    }, [o, y, H]);
                    let k = a - et.CHANNEL_SIDEBAR_WIDTH - x,
                        U = l.useRef(null),
                        Y = l.useCallback(() => {
                            !G.current && ((0, K.ackGuildHome)(o), G.current = !0, w.default.track(et.AnalyticEvents.HOME_FIRST_SCROLL_STARTED, {
                                guild_id: o,
                                home_session_id: W.default.getHomeSessionId(o)
                            }))
                        }, [o]);
                    (0, _.usePageTitle)({
                        location: el.default.Messages.GUILD_HOME_HTML_TITLE.format({
                            guildName: t.name
                        })
                    });
                    let z = (0, u.useFocusJumpSection)(),
                        {
                            showDeprecationNotice: Z
                        } = P.GuildHomeDeprecationExperiment.useExperiment({
                            guildId: o,
                            location: "69386d_6"
                        }, {
                            autoTrackExposure: !1
                        }),
                        q = !(p && k < er) || b ? (0, n.jsx)(eo, {
                            guild: t,
                            containerHeight: s,
                            isUsingCollapsedLayout: b
                        }, "widgets") : null;
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsxs)("div", {
                            className: i(ei.chat, es.background, {
                                [ei.threadSidebarOpen]: p,
                                [ei.threadSidebarFloating]: p && g
                            }),
                            children: [(0, n.jsx)(eu, {
                                guild: t,
                                seenManagerRef: U
                            }), (0, n.jsxs)("div", {
                                ref: j,
                                className: ei.content,
                                children: [(0, n.jsx)(d.ListNavigatorProvider, {
                                    navigator: A,
                                    children: (0, n.jsx)(d.ListNavigatorContainer, {
                                        children: e => {
                                            let {
                                                ref: a,
                                                ...l
                                            } = e;
                                            return (0, n.jsxs)(u.AdvancedScrollerAuto, {
                                                customTheme: !0,
                                                onScroll: Y,
                                                className: i(es.homeContainer, {
                                                    [es.homeContainerCollapsed]: b
                                                }),
                                                ref: e => {
                                                    var t;
                                                    T.current = e, a.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null
                                                },
                                                ...l,
                                                ...z,
                                                children: [y && (0, n.jsx)($.default, {
                                                    guild: t
                                                }), b ? q : null, (0, n.jsxs)("div", {
                                                    className: es.homeContent,
                                                    children: [Z && !t.hasFeature(et.GuildFeatures.GUILD_HOME_DEPRECATION_OVERRIDE) && (0, n.jsxs)("div", {
                                                        className: es.deprecationNotice,
                                                        children: [(0, n.jsxs)("div", {
                                                            className: es.deprecationNoticeContent,
                                                            children: [(0, n.jsx)(u.Heading, {
                                                                className: es.heading,
                                                                variant: "heading-lg/semibold",
                                                                color: "always-white",
                                                                children: el.default.Messages.GUILD_HOME_DEPRECATION_TITLE
                                                            }), (0, n.jsx)(u.Text, {
                                                                variant: "text-md/normal",
                                                                color: "always-white",
                                                                children: el.default.Messages.GUILD_HOME_DEPRECATION_DESCRIPTION
                                                            })]
                                                        }), (0, n.jsx)("img", {
                                                            width: 180,
                                                            className: es.image,
                                                            src: ed,
                                                            alt: "",
                                                            "aria-hidden": !0
                                                        })]
                                                    }), (0, n.jsx)(u.HeadingLevel, {
                                                        component: (0, n.jsxs)("div", {
                                                            className: es.topMessagesHeader,
                                                            children: [(0, n.jsx)(u.Heading, {
                                                                variant: "heading-md/semibold",
                                                                children: el.default.Messages.GUILD_FEED_TITLE
                                                            }), (0, n.jsx)(em, {
                                                                renderMode: F,
                                                                setRenderMode: R
                                                            })]
                                                        }),
                                                        children: (0, n.jsx)(J.default, {
                                                            guild: t,
                                                            renderMode: F,
                                                            scrollerRef: T,
                                                            seenManagerRef: U
                                                        })
                                                    })]
                                                }), b ? null : q]
                                            })
                                        }
                                    })
                                }), v && null != E && (0, n.jsx)(M.default, {
                                    searchId: E
                                })]
                            })]
                        }), N ? (0, n.jsx)(ec, {
                            pageWidth: a,
                            onSidebarResize: (e, t) => {
                                I(t), S(e)
                            }
                        }) : null]
                    })
                }),
                eE = (0, c.default)(N.default);
            var eg = function(e) {
                let {
                    guildId: t
                } = e, a = (0, r.useStateFromStores)([b.default], () => b.default.getGuild(t), [t]), s = (0, z.default)(), i = (0, r.useStateFromStores)([R.default], () => R.default.hasLoadedExperiments), d = (0, v.useCanSeeOnboardingHome)(t);
                return (l.useLayoutEffect(() => {
                    (0, B.ensureGuildHomeSession)(t)
                }, [t]), l.useEffect(() => {
                    if (!i) return;
                    let e = W.default.getHomeSessionSource(t),
                        a = (0, P.canSeeGuildHome)(t) || d;
                    if (null != s) {
                        let {
                            channelId: t,
                            messageId: n
                        } = s;
                        if (!a) {
                            (0, A.transitionToMessage)(t, n);
                            return
                        }
                        e = en.GuildHomeLandingSource.HIGHLIGHTS
                    } else if (!a) {
                        o.default.escapeToDefaultChannel(t);
                        return
                    }(0, B.trackGuildHomeOpened)(t, e)
                }, [t, s, i, d]), null == a) ? (0, n.jsx)(g.default, {
                    channelId: void 0
                }) : d ? (0, n.jsx)(eE, {
                    guild: a
                }) : (0, n.jsx)(eh, {
                    guild: a
                })
            }
        },
        768945: function(e, t, a) {
            "use strict";

            function n(e) {
                var t, a;
                if (null == e) return null;
                if ((null === (t = e.content) || void 0 === t ? void 0 : t.length) > 0) return e.content;
                if ((null === (a = e.embeds) || void 0 === a ? void 0 : a.length) > 0) {
                    for (let t of e.embeds)
                        if (null != t.rawDescription && t.rawDescription.length > 0) return t.rawDescription
                }
                return null
            }
            a.r(t), a.d(t, {
                default: function() {
                    return n
                }
            })
        },
        99384: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return i
                }
            });
            var n = a("65597"),
                l = a("42203"),
                s = a("698882");

            function i(e) {
                return (0, n.useStateFromStoresArray)([s.default, l.default], () => {
                    let t = s.default.getResourceChannels(e);
                    return t.filter(e => null != l.default.getChannel(e.channelId))
                })
            }
        },
        414033: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                MIN_GUILD_HOME_PAGE_WIDTH: function() {
                    return o
                },
                default: function() {
                    return c
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("446674"),
                s = a("665182"),
                i = a("462998"),
                d = a("982108"),
                r = a("49111"),
                u = a("724210");
            let o = 656;

            function c(e) {
                let {
                    pageWidth: t,
                    onSidebarResize: a
                } = e, c = (0, l.useStateFromStores)([d.default], () => d.default.getSidebarState(u.StaticChannelRoute.GUILD_HOME));
                if (null == c || null == c.channelId) return null;
                let f = t - r.CHANNEL_SIDEBAR_WIDTH - o;
                return (0, n.jsx)(s.default, {
                    sidebarType: s.ChatSidebarType.HomeSidebar,
                    maxWidth: f,
                    onWidthChange: a,
                    children: (0, n.jsx)(i.default, {
                        channelId: c.channelId,
                        baseChannelId: u.StaticChannelRoute.GUILD_HOME,
                        channelViewSource: "Home View",
                        isResourceChannelView: !0
                    })
                })
            }
        },
        957687: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return O
                }
            });
            var n = a("37983"),
                l = a("884691"),
                s = a("414456"),
                i = a.n(s),
                d = a("65597"),
                r = a("77078"),
                u = a("851387"),
                o = a("834897"),
                c = a("716241"),
                f = a("815619"),
                m = a("539938"),
                h = a("208021"),
                E = a("982108"),
                g = a("620193"),
                I = a("599110"),
                _ = a("347895"),
                x = a("698882"),
                S = a("675305"),
                C = a("363176"),
                v = a("414033"),
                N = a("831629"),
                p = a("749623"),
                T = a("112886"),
                A = a("768596"),
                M = a("49111"),
                D = a("724210"),
                j = a("515631"),
                F = a("782340"),
                L = a("139238"),
                R = a("305794");
            let b = v.MIN_GUILD_HOME_PAGE_WIDTH + 300 + 64,
                G = l.memo(function(e) {
                    let {
                        guild: t
                    } = e;
                    return (0, n.jsxs)(m.default, {
                        channelId: D.StaticChannelRoute.GUILD_HOME,
                        guildId: t.id,
                        className: i(L.title, L.background),
                        innerClassname: L.headerBarInner,
                        children: [(0, n.jsx)(m.default.Icon, {
                            icon: g.default,
                            "aria-hidden": !0
                        }), (0, n.jsxs)(m.default.Title, {
                            children: [(0, n.jsx)(r.HiddenVisually, {
                                children: t.name
                            }), F.default.Messages.SERVER_GUIDE]
                        })]
                    })
                });

            function O(e) {
                var t, a;
                let {
                    guild: s,
                    width: m
                } = e, g = (0, d.default)([E.default], () => E.default.getSection(D.StaticChannelRoute.GUILD_HOME)), [F, O] = l.useState(!1), [y, H] = l.useState(M.DEFAULT_CHAT_SIDEBAR_WIDTH), k = g === M.ChannelSections.SIDEBAR_CHAT, U = (0, r.useFocusJumpSection)(), w = (0, d.default)([x.default], () => x.default.getSettings(s.id)), B = null == w ? void 0 : w.welcomeMessage, P = (0, C.default)(s.id), V = !P && (null !== (a = null == w ? void 0 : null === (t = w.resourceChannels) || void 0 === t ? void 0 : t.length) && void 0 !== a ? a : 0) === 0, W = (0, o.default)(j.COLLAPSED_SIZE_MEDIA_QUERY), K = m - M.CHANNEL_SIDEBAR_WIDTH - y, Y = k && K < b || W || V;
                return (l.useEffect(() => {
                    if (w === x.NO_SETTINGS)(0, _.fetchGuildHomeSettings)(s.id);
                    else if (null != w) {
                        var e, t, a, n, l;
                        I.default.track(M.AnalyticEvents.SERVER_GUIDE_VIEWED, {
                            ...(0, c.collectGuildAnalyticsMetadata)(s.id),
                            num_member_actions: null !== (a = null === (e = w.newMemberActions) || void 0 === e ? void 0 : e.length) && void 0 !== a ? a : 0,
                            num_member_actions_completed: Object.keys(null !== (n = S.default.getCompletedActions(s.id)) && void 0 !== n ? n : {}).length,
                            num_resource_channels: null !== (l = null === (t = w.resourceChannels) || void 0 === t ? void 0 : t.length) && void 0 !== l ? l : 0
                        })
                    }
                }, [s.id, w]), l.useEffect(() => () => {
                    h.default.closeChannelSidebar(D.StaticChannelRoute.GUILD_HOME)
                }, []), l.useEffect(() => {
                    V && w !== x.NO_SETTINGS && u.default.escapeToDefaultChannel(s.id)
                }, [s.id, V, w]), V) ? null : (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)("div", {
                        className: i(R.chat, L.background, {
                            [R.threadSidebarOpen]: k,
                            [R.threadSidebarFloating]: k && F
                        }),
                        children: [(0, n.jsx)(G, {
                            guild: s
                        }), (0, n.jsx)(r.AdvancedScrollerAuto, {
                            ...U,
                            children: (0, n.jsxs)("div", {
                                className: i(L.homeContainer, {
                                    [L.homeContainerCollapsed]: Y
                                }),
                                children: [(0, n.jsx)("div", {
                                    className: L.maxWidthWrapper,
                                    children: (0, n.jsx)(f.default, {
                                        guild: s,
                                        titleClassName: W ? L.emptyHeaderTitle : void 0
                                    })
                                }), (0, n.jsxs)("div", {
                                    className: i(L.homeContent, L.maxWidthWrapper),
                                    children: [(0, n.jsxs)("div", {
                                        className: L.mainContent,
                                        children: [P && (0, n.jsx)(A.default, {
                                            guildId: s.id,
                                            welcomeMessage: B
                                        }), P && (0, n.jsx)(p.default, {
                                            guildId: s.id
                                        }), !P || Y ? (0, n.jsx)(T.default, {
                                            guild: s,
                                            isNewMember: P
                                        }) : null]
                                    }), Y ? null : (0, n.jsx)(N.default, {
                                        guild: s,
                                        isNewMember: P
                                    })]
                                })]
                            })
                        })]
                    }), k ? (0, n.jsx)(v.default, {
                        pageWidth: m,
                        onSidebarResize: (e, t) => {
                            O(t), H(e)
                        }
                    }) : null]
                })
            }
        },
        831629: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return A
                }
            });
            var n = a("37983"),
                l = a("884691"),
                s = a("65597"),
                i = a("77078"),
                d = a("819689"),
                r = a("791234"),
                u = a("503021"),
                o = a("757414"),
                c = a("208021"),
                f = a("42203"),
                m = a("377253"),
                h = a("957255"),
                E = a("16865"),
                g = a("315102"),
                I = a("347895"),
                _ = a("99384"),
                x = a("49111"),
                S = a("782340"),
                C = a("139238");
            let v = l.memo(function(e) {
                    let {
                        guild: t
                    } = e, a = (0, s.default)([o.default], () => o.default.getGuild(t.id), [t]);
                    return l.useEffect(() => {
                        null == a && (0, u.fetchGuildForPopout)(t.id)
                    }, [t.id, a]), (0, n.jsx)("div", {
                        className: C.sidebarCardWrapper,
                        children: (0, n.jsxs)("div", {
                            className: C.sidebarCard,
                            children: [(0, n.jsx)(i.Heading, {
                                className: C.sidebarCardHeader,
                                variant: "heading-md/bold",
                                color: "header-primary",
                                children: S.default.Messages.GUILD_HOME_ABOUT
                            }), (0, n.jsx)(i.Text, {
                                className: C.guildDescription,
                                variant: "text-md/normal",
                                color: "text-normal",
                                children: t.description
                            }), (0, n.jsx)("div", {
                                className: C.guildInfo,
                                children: (null == a ? void 0 : a.memberCount) != null && (null == a ? void 0 : a.presenceCount) != null && (0, n.jsxs)(n.Fragment, {
                                    children: [(0, n.jsx)("div", {
                                        className: C.dotOnline
                                    }), (0, n.jsx)(i.Text, {
                                        className: C.guildInfoText,
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: S.default.Messages.GUILD_ONBOARDING_HOME_GUILD_MEMBERS_RATIO.format({
                                            online: null == a ? void 0 : a.presenceCount,
                                            total: null == a ? void 0 : a.memberCount
                                        })
                                    })]
                                })
                            })]
                        })
                    })
                }),
                N = e => {
                    let {
                        channelId: t,
                        title: a,
                        icon: u
                    } = e, o = (0, s.default)([f.default], () => f.default.getChannel(t)), _ = (0, s.default)([m.default], () => m.default.getMessages(t)), S = (0, s.default)([h.default], () => h.default.can(x.Permissions.VIEW_CHANNEL, o)), v = _.first(), N = (0, r.useForumPostMediaProperties)(v, !1), p = (null == N ? void 0 : N.length) > 0 ? N[0] : null, T = null != o && null == v && !_.loadingMore && !_.ready && !_.hasFetched && S;
                    l.useEffect(() => {
                        T && d.default.fetchMessages({
                            channelId: t,
                            after: t,
                            limit: 5
                        })
                    }, [t, T]);
                    let A = e => {
                        null != o && (e.shiftKey ? (0, I.selectHomeResourceChannel)(o.guild_id, o.id) : c.default.openResourceChannelAsSidebar({
                            guildId: o.guild_id,
                            channelId: o.id
                        }))
                    };
                    return (0, n.jsx)(i.Clickable, {
                        className: C.resourceChannel,
                        onClick: e => A(e),
                        children: (0, n.jsxs)(n.Fragment, {
                            children: [(() => {
                                let e = g.default.getResourceChannelIconURL({
                                    channelId: t,
                                    icon: u
                                });
                                return null != u && null != e ? (0, n.jsx)("img", {
                                    src: e,
                                    className: C.resourceImage,
                                    alt: "",
                                    "aria-hidden": !0
                                }) : null != p ? (0, n.jsx)("img", {
                                    className: C.resourceImage,
                                    src: p.src,
                                    alt: p.alt
                                }) : (0, n.jsx)("div", {
                                    className: C.placeholderImage,
                                    children: (0, n.jsx)(E.default, {})
                                })
                            })(), (0, n.jsx)(i.Text, {
                                className: C.guildInfoText,
                                variant: "text-sm/semibold",
                                color: "none",
                                children: a
                            })]
                        })
                    }, t)
                },
                p = l.memo(function(e) {
                    let {
                        guild: t
                    } = e, a = (0, _.default)(t.id);
                    return 0 === a.length ? null : (0, n.jsx)("div", {
                        className: C.sidebarCardWrapper,
                        children: (0, n.jsxs)("div", {
                            className: C.sidebarCard,
                            children: [(0, n.jsx)(i.Heading, {
                                className: C.sidebarCardHeader,
                                variant: "heading-md/bold",
                                color: "header-primary",
                                children: S.default.Messages.GUILD_HOME_RESOURCES
                            }), (0, n.jsx)("div", {
                                className: C.resourceChannelsList,
                                children: a.map(e => (0, n.jsx)(N, {
                                    channelId: e.channelId,
                                    title: e.title,
                                    icon: e.icon
                                }, "widget-resource-".concat(e.channelId)))
                            })]
                        })
                    })
                }),
                T = l.memo(function(e) {
                    let {
                        guild: t,
                        isNewMember: a
                    } = e;
                    return (0, n.jsxs)("aside", {
                        className: C.sidebar,
                        children: [(0, n.jsx)(v, {
                            guild: t
                        }), a && (0, n.jsx)(p, {
                            guild: t
                        })]
                    })
                });
            var A = T
        },
        112886: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return O
                }
            });
            var n = a("37983"),
                l = a("884691"),
                s = a("414456"),
                i = a.n(s),
                d = a("446674"),
                r = a("77078"),
                u = a("819689"),
                o = a("791234"),
                c = a("512630"),
                f = a("367376"),
                m = a("651693"),
                h = a("605160"),
                E = a("933629"),
                g = a("393414"),
                I = a("208021"),
                _ = a("845579"),
                x = a("42203"),
                S = a("923959"),
                C = a("377253"),
                v = a("957255"),
                N = a("471671"),
                p = a("315102"),
                T = a("347895"),
                A = a("768945"),
                M = a("99384"),
                D = a("49111"),
                j = a("782340"),
                F = a("100703"),
                L = a("632215"),
                R = a("448738");

            function b(e) {
                let t, a, {
                        firstMedia: l,
                        channelId: s
                    } = e,
                    r = (0, d.useStateFromStores)([x.default], () => x.default.getChannel(s)),
                    [u, o] = (0, h.useShouldObscure)({
                        media: l,
                        channel: r
                    }),
                    f = (0, h.getObscuredAlt)(o),
                    g = (0, d.useStateFromStores)([N.default], () => N.default.isFocused()),
                    I = (0, m.isAnimatedImageUrl)(l.src),
                    S = _.GifAutoPlay.useSetting(),
                    {
                        src: C,
                        width: v,
                        height: p,
                        alt: T
                    } = l;
                return p > v ? a = 72 : t = 72, (0, n.jsxs)("div", {
                    className: F.media,
                    children: [(0, E.renderImageComponent)({
                        src: C,
                        maxHeight: t,
                        maxWidth: a,
                        width: v,
                        height: p,
                        alt: null != T && u && null != f ? f : T,
                        autoPlay: S,
                        animated: I && !u && g,
                        containerClassName: F.thumbnailContainer,
                        imageClassName: i({
                            [F.obscured]: u
                        })
                    }), u && (0, n.jsx)(c.default, {
                        obscureReason: o,
                        iconClassname: F.obscuredTag
                    })]
                })
            }

            function G(e) {
                let {
                    resource: t
                } = e, a = (0, d.useStateFromStores)([x.default], () => x.default.getChannel(t.channelId)), s = (0, d.useStateFromStores)([C.default], () => C.default.getMessages(t.channelId)), c = (0, d.useStateFromStores)([v.default], () => v.default.can(D.Permissions.VIEW_CHANNEL, a)), m = s.first(), h = (0, A.default)(m), E = (0, o.useForumPostMediaProperties)(m, !1), g = (null == E ? void 0 : E.length) > 0 ? E[0] : null, _ = null != a && null == s.first() && !s.loadingMore && !s.ready && !s.hasFetched && c;
                l.useEffect(() => {
                    _ && u.default.fetchMessages({
                        channelId: t.channelId,
                        after: t.channelId,
                        limit: 5
                    })
                }, [t.channelId, _]);
                if (null == a || null == a.guild_id) return null;
                let S = p.default.getResourceChannelIconURL({
                        channelId: a.id,
                        icon: t.icon
                    }),
                    N = null == t.description || 0 === t.description.length;
                return (0, n.jsxs)(r.Clickable, {
                    className: F.row,
                    onClick: e => {
                        null != a && (e.shiftKey ? (0, T.selectHomeResourceChannel)(a.guild_id, a.id) : I.default.openResourceChannelAsSidebar({
                            guildId: a.guild_id,
                            channelId: a.id
                        }))
                    },
                    children: [(0, n.jsxs)("div", {
                        className: F.content,
                        children: [(0, n.jsx)(r.Text, {
                            className: F.title,
                            variant: "text-md/bold",
                            color: "header-primary",
                            children: t.title
                        }), N && null != h && (0, n.jsx)(r.Text, {
                            className: F.messageContent,
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            lineClamp: 3,
                            children: f.default.parse(h, !0, {
                                guildId: a.guild_id,
                                channelId: a.id
                            })
                        }), !N && (0, n.jsx)(r.Text, {
                            className: i(F.messageContent, L.markup),
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            lineClamp: 3,
                            children: f.default.parse(t.description, !0, {
                                guildId: a.guild_id,
                                channelId: a.id
                            })
                        })]
                    }), null != t.icon && null != S ? (0, n.jsx)("div", {
                        className: F.media,
                        children: (0, n.jsx)("img", {
                            src: S,
                            className: F.thumbnail,
                            width: 72,
                            height: 72,
                            alt: "",
                            "aria-hidden": !0
                        })
                    }) : null, null == S && null != g ? (0, n.jsx)(b, {
                        firstMedia: g,
                        channelId: t.channelId
                    }) : null]
                })
            }

            function O(e) {
                let {
                    guild: t,
                    isNewMember: a
                } = e, l = (0, M.default)(t.id);
                if (0 === l.length) return a ? null : (0, n.jsxs)("div", {
                    className: F.emptyContainer,
                    children: [(0, n.jsx)(r.Heading, {
                        variant: "heading-xl/bold",
                        color: "header-primary",
                        children: j.default.Messages.MEMBER_ACTION_COMPLETE_EMPTY_STATE
                    }), (0, n.jsx)("img", {
                        className: F.emptyStateImage,
                        src: R,
                        alt: ""
                    }), (0, n.jsx)(r.Button, {
                        className: F.emptyStateButton,
                        onClick: () => {
                            let e = S.default.getDefaultChannel(t.id);
                            null != e && (0, g.transitionTo)(D.Routes.CHANNEL(t.id, e.id))
                        },
                        fullWidth: !0,
                        children: j.default.Messages.MEMBER_ACTION_COMPLETE_EMPTY_STATE_CTA
                    })]
                });
                return (0, n.jsxs)("div", {
                    className: F.container,
                    children: [(0, n.jsx)(r.Heading, {
                        variant: "heading-lg/bold",
                        color: "header-primary",
                        children: j.default.Messages.GUILD_HOME_RESOURCES
                    }), l.map(e => (0, n.jsx)(G, {
                        resource: e
                    }, e.channelId))]
                })
            }
        },
        628059: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                guildEventDetailsParser: function() {
                    return l
                }
            });
            var n = a("367376");
            let l = n.default.parseGuildEventDescription
        },
        90713: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return o
                }
            });
            var n = a("37983"),
                l = a("884691"),
                s = a("77078"),
                i = a("379607"),
                d = a("290581"),
                r = a("664336"),
                u = a("782340"),
                o = function(e) {
                    let {
                        guildId: t
                    } = e, [a, o] = l.useState(!1), c = l.useCallback(() => {
                        o(e => !e)
                    }, []);
                    return (0, n.jsx)(s.Popout, {
                        shouldShow: a,
                        animation: s.Popout.Animation.NONE,
                        position: "bottom",
                        align: "right",
                        autoInvert: !1,
                        ignoreModalClicks: !0,
                        onRequestClose: () => o(!1),
                        renderPopout: function(e) {
                            return (0, n.jsx)(i.default, {
                                guildId: t,
                                ...e
                            })
                        },
                        children: (e, t) => {
                            let {
                                isShown: a
                            } = t;
                            return (0, n.jsx)(r.Icon, {
                                ...e,
                                onClick: c,
                                tooltip: a ? null : u.default.Messages.GUILD_FEED_FEATURED_ITEMS,
                                icon: d.default,
                                "aria-label": u.default.Messages.GUILD_FEED_FEATURED_ITEMS,
                                selected: a
                            })
                        }
                    })
                }
        },
        730106: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return s
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("75196");

            function s(e) {
                let {
                    width: t = 16,
                    height: a = 16,
                    color: s = "currentColor",
                    ...i
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, l.default)(i),
                    width: t,
                    height: a,
                    viewBox: "0 0 16 16",
                    children: [(0, n.jsx)("circle", {
                        cx: "8",
                        cy: "8",
                        r: "5.5",
                        transform: "rotate(180 8 8)",
                        stroke: "#A3A6AA"
                    }), (0, n.jsx)("path", {
                        d: "M13.197 5.00035C12.6704 4.08824 11.913 3.33081 11.0008 2.8042C10.0887 2.27759 9.05406 2.00035 8.00084 2.00035L8.00084 8.00035L13.197 5.00035Z",
                        fill: s
                    })]
                })
            }
        },
        215361: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return s
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("75196");

            function s(e) {
                let {
                    width: t = 16,
                    height: a = 16,
                    color: s = "currentColor",
                    ...i
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, l.default)(i),
                    width: t,
                    height: a,
                    viewBox: "0 0 16 16",
                    children: [(0, n.jsx)("circle", {
                        cx: "8.19531",
                        cy: "8.19629",
                        r: "5.5",
                        transform: "rotate(180 8.19531 8.19629)",
                        stroke: "#A3A6AA"
                    }), (0, n.jsx)("path", {
                        d: "M3.00027 11.1964C3.52688 12.1085 4.28431 12.866 5.19643 13.3926C6.10854 13.9192 7.14321 14.1964 8.19643 14.1964C9.24965 14.1964 10.2843 13.9192 11.1964 13.3926C12.1085 12.866 12.866 12.1085 13.3926 11.1964C13.9192 10.2843 14.1964 9.24965 14.1964 8.19643C14.1964 7.14321 13.9192 6.10854 13.3926 5.19643C12.866 4.28431 12.1085 3.52688 11.1964 3.00027C10.2843 2.47366 9.24964 2.19643 8.19642 2.19643L8.19643 8.19643L3.00027 11.1964Z",
                        fill: s
                    })]
                })
            }
        },
        345318: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return s
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("75196");

            function s(e) {
                let {
                    width: t = 16,
                    height: a = 16,
                    color: s = "currentColor",
                    ...i
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, l.default)(i),
                    width: t,
                    height: a,
                    viewBox: "0 0 16 16",
                    children: [(0, n.jsx)("circle", {
                        cx: "8.19531",
                        cy: "8.19629",
                        r: "5.5",
                        transform: "rotate(180 8.19531 8.19629)",
                        stroke: "#A3A6AA"
                    }), (0, n.jsx)("path", {
                        d: "M8.19727 14.1963C9.78856 14.1963 11.3147 13.5641 12.4399 12.4389C13.5651 11.3137 14.1973 9.78759 14.1973 8.19629C14.1973 6.60499 13.5651 5.07887 12.4399 3.95365C11.3147 2.82843 9.78857 2.19629 8.19727 2.19629L8.19727 8.19629L8.19727 14.1963Z",
                        fill: s
                    })]
                })
            }
        },
        16865: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return i
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("469563"),
                s = a("605141"),
                i = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: a = 16,
                        color: l = "currentColor",
                        className: s,
                        foreground: i
                    } = e;
                    return (0, n.jsx)("svg", {
                        className: s,
                        width: t,
                        height: a,
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, n.jsx)("path", {
                            className: i,
                            fill: l,
                            d: "M3.99984 1.33301C3.64622 1.33301 3.30708 1.47348 3.05703 1.72353C2.80698 1.97358 2.6665 2.31272 2.6665 2.66634V13.333C2.6665 13.6866 2.80698 14.0258 3.05703 14.2758C3.30708 14.5259 3.64622 14.6663 3.99984 14.6663H11.9998C12.3535 14.6663 12.6926 14.5259 12.9426 14.2758C13.1927 14.0258 13.3332 13.6866 13.3332 13.333V5.33301L9.33317 1.33301H3.99984ZM3.99984 2.66634H8.6665V5.99967H11.9998V13.333H3.99984V2.66634ZM5.33317 7.99967V9.33301H10.6665V7.99967H5.33317ZM5.33317 10.6663V11.9997H8.6665V10.6663H5.33317Z"
                        })
                    })
                }, s.PaperIcon)
        }
    }
]);