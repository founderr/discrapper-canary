(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["40751"], {
        820542: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                categoryCollapse: function() {
                    return a
                },
                categoryExpand: function() {
                    return u
                },
                categoryCollapseAll: function() {
                    return i
                },
                categoryExpandAll: function() {
                    return d
                }
            });
            var l = n("913144");

            function a(e) {
                l.default.dispatch({
                    type: "CATEGORY_COLLAPSE",
                    id: e
                })
            }

            function u(e) {
                l.default.dispatch({
                    type: "CATEGORY_EXPAND",
                    id: e
                })
            }

            function i(e) {
                l.default.dispatch({
                    type: "CATEGORY_COLLAPSE_ALL",
                    guildId: e
                })
            }

            function d(e) {
                l.default.dispatch({
                    type: "CATEGORY_EXPAND_ALL",
                    guildId: e
                })
            }
        },
        542827: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            }), n("881410"), n("222007"), n("424973");
            var l = n("917351"),
                a = n.n(l),
                u = n("267363"),
                i = n("863636"),
                d = n("401690"),
                r = n("923959"),
                s = n("660478"),
                o = n("599110"),
                f = n("49111"),
                E = n("133335");

            function S(e, t) {
                let n = a.flatMap(e, e => {
                    let t = r.default.getSelectableChannelIds(e),
                        n = r.default.getVocalChannelIds(e),
                        l = [...t, ...n],
                        a = d.default.getActiveJoinedThreadsForGuild(e);
                    for (let e of t) {
                        var u;
                        let t = null !== (u = a[e]) && void 0 !== u ? u : {};
                        for (let e in t) l.push(e)
                    }
                    return l
                }).map(e => ({
                    channelId: e,
                    readStateType: E.ReadStateTypes.CHANNEL,
                    messageId: s.default.lastMessageId(e)
                }));
                return e.forEach(e => {
                    n.push({
                        channelId: e,
                        readStateType: E.ReadStateTypes.GUILD_EVENT,
                        messageId: s.default.lastMessageId(e, E.ReadStateTypes.GUILD_EVENT)
                    }), n.push({
                        channelId: e,
                        readStateType: E.ReadStateTypes.GUILD_ONBOARDING_QUESTION,
                        messageId: i.default.ackIdForGuild(e)
                    })
                }), o.default.track(f.AnalyticEvents.MARK_AS_READ, {
                    source: t,
                    type: "guild"
                }), (0, u.bulkAck)(n)
            }
        },
        62948: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            }), n("222007");
            var l = n("446674"),
                a = n("95410"),
                u = n("913144"),
                i = n("679428"),
                d = n("525065"),
                r = n("305961"),
                s = n("282109"),
                o = n("568734"),
                f = n("483226"),
                E = n("44574"),
                S = n("49111"),
                _ = n("397336");
            let g = "guildUnreadsEnabledStorageKey",
                c = "guildUnreadsLastClearedStorageKey",
                C = {
                    guildUnreadsLastCleared: {}
                },
                T = C;
            class N extends l.default.PersistedStore {
                initialize(e) {
                    this.waitFor(d.default), T = null != e ? e : C, ! function() {
                        var e, t, n;
                        a.default.remove("guildUnreadsOverridesStorageKey");
                        let l = null !== (e = T.guildUnreadsEnabled) && void 0 !== e ? e : {},
                            u = null !== (t = a.default.get(g)) && void 0 !== t ? t : new Set;
                        u.size > 0 && u.forEach(e => {
                            l[e] = !0
                        }), a.default.remove(g), T.guildUnreadsLastCleared = null !== (n = a.default.get(c)) && void 0 !== n ? n : {}, a.default.remove(c);
                        let d = {};
                        Object.keys(l).map(e => {
                            let t = !0 === l[e],
                                n = s.default.getGuildFlags(e);
                            n = (0, o.setFlag)(n, _.GuildNotificationSettingsFlags.UNREADS_MENTIONS_AND_HIGHLIGHTS, t), n = (0, o.setFlag)(n, _.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES, !t), d[e] = {
                                flags: n
                            }
                        }), Object.keys(d).length > 0 && i.default.saveUserGuildSettingsBulk(d), delete T.guildUnreadsEnabled
                    }()
                }
                getState() {
                    return T
                }
                getGuildUnreadsLastCleared(e) {
                    return T.guildUnreadsLastCleared[e]
                }
            }
            N.displayName = "GuildUnreadSettingsStore", N.persistKey = "GuildUnreadSettingsStore";
            var A = new N(u.default, {
                CONNECTION_OPEN: function() {
                    let e = (0, E.isGuildUnreadsExperimentEnabled)();
                    if (!e) return;
                    let t = r.default.getGuilds(),
                        n = d.default.getMemberCounts();
                    Object.values(t).map(e => {
                        let t = s.default.getGuildFlags(e.id),
                            l = (0, o.hasFlag)(t, _.GuildNotificationSettingsFlags.UNREADS_MENTIONS_AND_HIGHLIGHTS),
                            a = (0, o.hasFlag)(t, _.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES);
                        if (!e.hasFeature(S.GuildFeatures.COMMUNITY) && n[e.id] < 200) {
                            l && (0, f.setGuildUnreadSetting)(e.id, !1);
                            return
                        }
                        if (l || a) return;
                        let u = s.default.getMessageNotifications(e.id);
                        (u !== S.UserNotificationSettings.ALL_MESSAGES || e.defaultMessageNotifications === S.UserNotificationSettings.ALL_MESSAGES) && (0, f.setGuildUnreadSetting)(e.id, !0)
                    })
                },
                GUILD_UNREADS_SET_LAST_CLEARED: function(e) {
                    let {
                        guildId: t
                    } = e, n = s.default.isGuildUnreadSettingEnabled(t);
                    n && (T.guildUnreadsLastCleared[t] = Date.now())
                }
            })
        },
        483226: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                setChannelUnreadSetting: function() {
                    return s
                },
                setGuildUnreadSetting: function() {
                    return o
                },
                setGuildUnreadsLastCleared: function() {
                    return f
                }
            });
            var l = n("913144"),
                a = n("519705"),
                u = n("282109"),
                i = n("568734"),
                d = n("627869"),
                r = n("397336");

            function s(e, t, n) {
                let l = u.default.getGuildChannelFlags(e, t);
                l = (0, i.setFlag)(l, r.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES, n === d.UserUnreadSettings.ALL_MESSAGES), l = (0, i.setFlag)(l, r.ChannelNotificationSettingsFlags.UNREADS_MENTIONS_AND_HIGHLIGHTS, n === d.UserUnreadSettings.MENTIONS_AND_HIGHLIGHTS), a.default.updateChannelOverrideSettings(e, t, {
                    flags: l
                })
            }

            function o(e, t) {
                let n = u.default.getGuildFlags(e);
                n = (0, i.setFlag)(n, r.GuildNotificationSettingsFlags.UNREADS_MENTIONS_AND_HIGHLIGHTS, t), n = (0, i.setFlag)(n, r.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES, !t), a.default.updateGuildNotificationSettings(e, {
                    flags: n
                })
            }

            function f(e) {
                l.default.dispatch({
                    type: "GUILD_UNREADS_SET_LAST_CLEARED",
                    guildId: e
                })
            }
        },
        488107: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                maybeForceUnread: function() {
                    return E
                }
            });
            var l = n("200029"),
                a = n("483038"),
                u = n("512395"),
                i = n("282109"),
                d = n("697218"),
                r = n("62948"),
                s = n("44574"),
                o = n("49111");
            let f = 108e5;

            function E(e) {
                let t = d.default.getCurrentUser(),
                    n = (0, s.isGuildUnreadsExperimentEnabled)(),
                    E = i.default.isGuildUnreadSettingEnabled(e),
                    S = r.default.getGuildUnreadsLastCleared(e),
                    _ = a.default.getLastFetchedMillis(e),
                    g = Date.now(),
                    c = (0, u.isChannelHighlightsEnabledForGuild)(e),
                    C = i.default.getNotifyHighlights(e),
                    T = C === o.HighlightSettings.ENABLED || C === o.HighlightSettings.NULL;
                return !!n && !!E && !!c && !!T && ((null == t ? void 0 : t.isStaff()) ? ((null == _ || null != _ && g - _ > 36e5) && l.default.maybeLoadFeedForGuild(e), !1) : null == _ || g - _ > f && g - S > f)
            }
        },
        952451: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return eC
                }
            }), n("222007"), n("702976"), n("808653");
            var l = n("917351"),
                a = n.n(l);
            n("249654");
            var u = n("483226"),
                i = n("44574"),
                d = n("488107");
            n("21121"), n("136511");
            var r = n("512395"),
                s = n("208127"),
                o = n("401690"),
                f = n("755624"),
                E = n("526311"),
                S = n("233069"),
                _ = n("271938"),
                g = n("42203"),
                c = n("957255"),
                C = n("660478"),
                T = n("18494"),
                N = n("455079"),
                A = n("282109"),
                L = n("697218"),
                G = n("49111"),
                U = n("724210"),
                h = n("133335");
            let I = "null",
                p = {},
                y = new Set,
                D = 0;

            function R(e) {
                var t;
                let n = p[null != e ? e : I];
                return {
                    unread: !1,
                    unreadByType: {},
                    unreadChannelId: null,
                    mentionCount: 0,
                    mentionCounts: {},
                    ncMentionCount: 0,
                    sentinel: null !== (t = null == n ? void 0 : n.sentinel) && void 0 !== t ? t : 0
                }
            }

            function M(e) {
                var t;
                return p[null != e ? e : I] = null !== (t = p[null != e ? e : I]) && void 0 !== t ? t : R(e)
            }

            function O(e) {
                let t = M(e);
                t.sentinel++, D++
            }

            function H(e, t, n) {
                let l = e.guild_id;
                return null != l && n && !((0, S.isThread)(e.type) || A.default.isChannelRecordOrParentOptedIn(e)) && 0 === t
            }

            function v(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                if (null == e || e.isGuildVocal() && 0 === t || e.hasFlag(U.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) return !1;
                if (0 === t) {
                    let t = e.isThread() ? f.default.isMuted(e.id) : A.default.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id);
                    if (t) return !1
                }
                return !(!e.isPrivate() && (H(e, t, (0, r.isOptInEnabledForGuild)(e.guild_id)) || !c.default.can(e.accessPermissions, e))) && (t > 0 || A.default.isChannelRelevant(e))
            }

            function m(e) {
                switch (e) {
                    case I:
                    case null:
                    case void 0:
                        return null;
                    default:
                        return e
                }
            }

            function F(e, t) {
                let n = e.guild_id,
                    l = e.id;
                return !(A.default.isGuildOrCategoryOrChannelMuted(n, l) || H(e, C.default.getMentionCount(l), t)) && C.default.hasNotableUnread(e.id)
            }

            function b(e, t) {
                let n = C.default.hasUnread(e, t);
                if (t === h.ReadStateTypes.GUILD_EVENT) return !(A.default.isMuted(e) || A.default.isMuteScheduledEventsEnabled(e)) && n;
                return n
            }

            function P(e, t) {
                let n = R(e);
                return n.mentionCounts = {
                    ...t.mentionCounts
                }, n.unreadByType = {
                    ...t.unreadByType
                }, n
            }

            function B(e) {
                return e.unread = Object.values(e.unreadByType).some(e => e), e
            }

            function V(e, t) {}

            function w(e, t, n) {
                if (B(t), t.mentionCount = a(t.mentionCounts).values().sum(), t.unread !== n.unread || t.mentionCount !== n.mentionCount) return p[null != e ? e : I] = t, null != e && (t.unread ? y.add(e) : y.delete(e)), D++, O(null != e ? e : I), !0;
                return !1
            }

            function K(e, t) {
                let n = m(e),
                    l = M(n),
                    a = P(n, l),
                    u = (0, r.isOptInEnabledForGuild)(n),
                    i = !1;
                if (t.forEach(e => {
                        let t = g.default.getChannel(e);
                        if (null == t) {
                            delete a.mentionCounts[e];
                            return
                        }
                        if (t.getGuildId() !== n) return;
                        let l = C.default.getMentionCount(e);
                        null !== n && !i && F(t, u) && v(t, l) && (i = !0, a.unreadChannelId = t.id), l > 0 && v(t, l) ? a.mentionCounts[t.id] = l : delete a.mentionCounts[t.id]
                    }), a.unreadByType[h.ReadStateTypes.CHANNEL] = i, a.unreadByType[h.ReadStateTypes.CHANNEL] !== l.unreadByType[h.ReadStateTypes.CHANNEL] && !a.unreadByType[h.ReadStateTypes.CHANNEL]) {
                    let e = g.default.getChannel(l.unreadChannelId);
                    if (!(null != e && !t.includes(e.id) && F(e, u) && v(e))) return x(n);
                    null != n && y.add(n), a.unreadByType[h.ReadStateTypes.CHANNEL] = !0
                }
                return w(n, a, l)
            }

            function k(e, t) {
                if (null == e) return;
                let n = M(e),
                    l = P(e, n);
                return l.unreadByType[h.ReadStateTypes.GUILD_EVENT] = b(e, t), w(e, l, n)
            }

            function x(e, t) {
                let n = m(e),
                    l = R(n),
                    a = (0, s.isReadStateStaffExperimentEnabled)();
                if (null == n) {
                    let e = g.default.getMutablePrivateChannels();
                    for (let t in e) {
                        let n = e[t],
                            a = C.default.getMentionCount(t);
                        a > 0 && v(n, a) && (l.mentionCount += a, l.mentionCounts[n.id] = a)
                    }
                } else {
                    let e = A.default.isMuted(n);
                    if (e && !1 === t) return !1;
                    let u = A.default.getMutedChannels(n),
                        d = A.default.getChannelOverrides(n),
                        s = (0, r.isOptInEnabledForGuild)(n),
                        E = (0, i.isGuildUnreadsExperimentEnabled)(),
                        _ = g.default.getMutableBasicGuildChannelsForGuild(n);
                    for (let t in _) {
                        let n = _[t],
                            i = e || u.has(t) || null != n.parent_id && u.has(n.parent_id),
                            r = l.unreadByType[h.ReadStateTypes.CHANNEL],
                            {
                                mentionCount: o,
                                hasNotableUnread: f
                            } = C.default.getGuildChannelUnreadState(n, s, E, d, i, r),
                            g = o > 0;
                        if (!g && i) continue;
                        let T = !r && (!i || g) && f;
                        if (T || g) {
                            let e = function(e, t, n, l) {
                                if ((0, S.isGuildVocalChannelType)(e.type) && 0 === t || !c.default.canBasicChannel((0, S.getBasicAccessPermissions)(e.type), e) || H(e, t, l)) return !1;
                                return !("flags" in e && e.hasFlag(U.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) && (t > 0 || !n || (0, S.isThread)(e.type) || A.default.resolvedMessageNotifications(e) === G.UserNotificationSettings.ALL_MESSAGES)
                            }(n, o, a, s);
                            e && (T && (l.unreadByType[h.ReadStateTypes.CHANNEL] = !0, l.unreadChannelId = t), g && (l.mentionCount += o, l.mentionCounts[n.id] = o))
                        }
                    }
                    let T = o.default.getActiveJoinedThreadsForGuild(n);
                    for (let t in T)
                        for (let n in T[t]) {
                            !l.unreadByType[h.ReadStateTypes.CHANNEL] && C.default.hasNotableUnread(n) && !f.default.isMuted(n) && !e && (l.unreadByType[h.ReadStateTypes.CHANNEL] = !0, l.unreadChannelId = n);
                            let t = C.default.getMentionCount(n);
                            t > 0 && (l.mentionCount += t, l.mentionCounts[n] = t)
                        }!l.unreadByType[h.ReadStateTypes.GUILD_EVENT] && b(n, h.ReadStateTypes.GUILD_EVENT) && (l.unreadByType[h.ReadStateTypes.GUILD_EVENT] = !0)
                }
                B(l);
                let d = M(n);
                if (l.unread !== d.unread || l.mentionCount !== d.mentionCount) return p[null != n ? n : I] = l, null != n && (l.unread ? y.add(n) : (y.delete(n), (0, u.setGuildUnreadsLastCleared)(n))), D++, O(null != n ? n : I), !0;
                return !1
            }

            function Y(e) {
                let {
                    guilds: t
                } = e;
                p = {}, D = 0, y = new Set, x(null);
                let {
                    length: n
                } = t;
                for (let e = 0; e < n; e++) {
                    let n = t[e];
                    null != n && x(n.id)
                }
            }

            function j(e) {
                let {
                    guilds: t,
                    readState: n
                } = e;
                p = {}, D = 0, y = new Set;
                let l = n.entries.length < 500,
                    a = new Set;
                for (let e of (l && n.entries.forEach(e => {
                        if (null != e.mention_count && e.mention_count > 0) {
                            if (null == e.read_state_type || e.read_state_type === h.ReadStateTypes.CHANNEL) {
                                var t;
                                a.add(null === (t = g.default.getChannel(e.id)) || void 0 === t ? void 0 : t.guild_id)
                            } else a.add(e.id)
                        }
                    }), x(null), t)) x(e.id, l ? a.has(e.id) : void 0)
            }

            function J(e) {
                let {
                    guild: t
                } = e;
                return x(t.id)
            }

            function z(e) {
                let {
                    guild: t
                } = e;
                return null != p[t.id] && (delete p[t.id], y.delete(t.id), D++, !0)
            }

            function W(e) {
                let {
                    channel: {
                        id: t,
                        guild_id: n
                    }
                } = e;
                return K(n, [t])
            }

            function X() {
                let e = g.default.getChannel(T.default.getChannelId());
                return null != e && K(e.getGuildId(), [e.id])
            }

            function Z(e) {
                let {
                    user: t,
                    guildId: n
                } = e;
                return t.id === _.default.getId() && x(n)
            }

            function Q(e) {
                let {
                    channelId: t
                } = e, n = g.default.getChannel(t);
                return null != n && K(n.getGuildId(), [n.id])
            }

            function q(e) {
                let {
                    channelId: t
                } = e, n = g.default.getChannel(t);
                if (null == n) return !1;
                if (null != n.guild_id) {
                    let e = M(n.guild_id),
                        l = n.isThread() ? !f.default.hasJoined(n.id) || f.default.isMuted(n.id) : A.default.isGuildOrCategoryOrChannelMuted(n.guild_id, n.id);
                    if ((l || e.unreadByType[h.ReadStateTypes.CHANNEL]) && 0 === C.default.getMentionCount(t)) return !1
                }
                return K(n.getGuildId(), [n.id])
            }

            function $(e) {
                let {
                    channelId: t,
                    guildId: n
                } = e;
                return n !== G.FAVORITES && null != t && K(n, [t])
            }

            function ee(e) {
                let {
                    channel: t
                } = e;
                return K(t.getGuildId(), [t.id])
            }

            function et(e) {
                let {
                    channels: t
                } = e;
                return a(t).groupBy(e => e.getGuildId()).reduce((e, t, n) => K(n, t.map(e => e.id)) || e, !1)
            }

            function en(e) {
                let {
                    channels: t
                } = e;
                return a(t).map(e => {
                    let {
                        channelId: t
                    } = e;
                    return t
                }).filter(e => null != g.default.getChannel(e)).groupBy(e => {
                    var t;
                    return null === (t = g.default.getChannel(e)) || void 0 === t ? void 0 : t.getGuildId()
                }).reduce((e, t, n) => K(n, t) || e, !1)
            }

            function el(e) {
                let {
                    channel: t
                } = e;
                return K(t.getGuildId(), [t.id, t.parent_id])
            }

            function ea(e) {
                let {
                    guildScheduledEvent: t
                } = e;
                return k(t.guild_id, h.ReadStateTypes.GUILD_EVENT)
            }

            function eu(e) {
                let {
                    guildScheduledEvent: t
                } = e;
                return k(t.guild_id, h.ReadStateTypes.GUILD_EVENT)
            }

            function ei(e) {
                let {
                    id: t,
                    ackType: n
                } = e;
                return k(t, n)
            }

            function ed(e) {
                let {
                    id: t,
                    guildId: n
                } = e;
                return K(n, [t])
            }

            function er(e) {
                return (0, E.doesThreadMembersActionAffectMe)(e) && K(e.guildId, [e.id])
            }

            function es(e) {
                let {
                    threads: t,
                    guildId: n
                } = e;
                return K(n, t.filter(e => f.default.hasJoined(e.id)).map(e => e.id))
            }

            function eo(e) {
                return null != e.channels && K(e.guildId, e.channels.map(e => e.id))
            }

            function ef(e) {
                let {
                    guildId: t
                } = e;
                return x(t)
            }

            function eE(e) {
                let {
                    guildId: t
                } = e;
                return x(t)
            }

            function eS(e) {
                let {
                    userGuildSettings: t
                } = e, n = new Set(t.map(e => {
                    var t;
                    return null !== (t = e.guild_id) && void 0 !== t ? t : I
                }));
                return Object.keys(p).reduce((e, t) => n.has(t) && x(t) || e, !1)
            }

            function e_() {
                for (let e in p) {
                    let t = p[e];
                    t.ncMentionCount = 0
                }
            }

            function eg(e) {
                let {
                    guildId: t
                } = e;
                return x(t)
            }
            class ec extends N.default {
                takeSnapshot() {
                    return {
                        version: ec.LATEST_SNAPSHOT_VERSION,
                        data: {
                            guilds: p,
                            unreadGuilds: Array.from(y)
                        }
                    }
                }
                hasAnyUnread() {
                    return y.size > 0
                }
                getStoreChangeSentinel() {
                    return D
                }
                getMutableUnreadGuilds() {
                    return y
                }
                getMutableGuildStates() {
                    return p
                }
                hasUnread(e) {
                    return y.has(e) || (0, d.maybeForceUnread)(e)
                }
                getMentionCount(e) {
                    return M(e).mentionCount
                }
                getMutableGuildReadState(e) {
                    return M(e)
                }
                getGuildHasUnreadIgnoreMuted(e) {
                    let t = g.default.getMutableGuildChannelsForGuild(e);
                    for (let e in t) {
                        let n = t[e];
                        if (null != n) {
                            if ((!n.isGuildVocal() || 0 !== C.default.getMentionCount(e)) && c.default.can(n.accessPermissions, n) && C.default.hasUnread(e)) return !0
                        }
                    }
                    let n = o.default.getActiveJoinedThreadsForGuild(e);
                    for (let e in n) {
                        let t = g.default.getChannel(e);
                        if (null != t && v(t)) {
                            for (let t in n[e])
                                if (C.default.hasUnread(t)) return !0
                        }
                    }
                    return !!C.default.hasUnread(e, h.ReadStateTypes.GUILD_EVENT) || !1
                }
                getTotalMentionCount(e) {
                    let t = 0;
                    for (let n in p) {
                        let l = p[n];
                        (!0 !== e || n !== I) && (t += l.mentionCount)
                    }
                    return t
                }
                getTotalNotificationsMentionCount(e) {
                    let t = 0;
                    for (let n in p) {
                        let l = p[n];
                        (!0 !== e || n !== I) && (t += l.ncMentionCount)
                    }
                    return t
                }
                getPrivateChannelMentionCount() {
                    var e;
                    let t = p[I];
                    return null !== (e = null == t ? void 0 : t.mentionCount) && void 0 !== e ? e : 0
                }
                getMentionCountForChannels(e, t) {
                    let n = 0,
                        l = p[e];
                    return null == l ? 0 : (t.forEach(e => {
                        let t = l.mentionCounts[e];
                        n += null != t ? t : 0
                    }), n)
                }
                getGuildChangeSentinel(e) {
                    return M(e).sentinel
                }
                constructor() {
                    super(), this.loadCache = () => {
                        let e = this.readSnapshot(ec.LATEST_SNAPSHOT_VERSION);
                        null != e && (p = e.guilds, y = new Set(e.unreadGuilds))
                    }, this.registerActionHandlers({
                        CONNECTION_OPEN: j,
                        OVERLAY_INITIALIZE: Y,
                        CACHE_LOADED_LAZY: this.loadCache,
                        GUILD_CREATE: J,
                        GUILD_DELETE: z,
                        MESSAGE_CREATE: q,
                        MESSAGE_ACK: Q,
                        BULK_ACK: en,
                        UPDATE_CHANNEL_DIMENSIONS: Q,
                        CHANNEL_SELECT: $,
                        CHANNEL_DELETE: W,
                        WINDOW_FOCUS: X,
                        GUILD_ACK: ef,
                        GUILD_ROLE_CREATE: eE,
                        GUILD_ROLE_DELETE: eE,
                        GUILD_ROLE_UPDATE: eE,
                        CHANNEL_CREATE: ee,
                        CHANNEL_UPDATES: et,
                        THREAD_CREATE: el,
                        THREAD_UPDATE: el,
                        THREAD_DELETE: el,
                        THREAD_LIST_SYNC: es,
                        THREAD_MEMBER_UPDATE: ed,
                        THREAD_MEMBERS_UPDATE: er,
                        PASSIVE_UPDATE_V1: eo,
                        GUILD_MEMBER_UPDATE: Z,
                        USER_GUILD_SETTINGS_FULL_UPDATE: eS,
                        USER_GUILD_SETTINGS_CHANNEL_UPDATE: eg,
                        USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: eg,
                        USER_GUILD_SETTINGS_GUILD_UPDATE: eg,
                        USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: eg,
                        GUILD_FEATURE_ACK: ei,
                        GUILD_SCHEDULED_EVENT_CREATE: ea,
                        GUILD_SCHEDULED_EVENT_UPDATE: ea,
                        GUILD_SCHEDULED_EVENT_DELETE: eu,
                        CHANNEL_RTC_UPDATE_CHAT_OPEN: Q,
                        LOAD_MESSAGES_SUCCESS: Q,
                        CHANNEL_ACK: Q,
                        CHANNEL_LOCAL_ACK: Q,
                        VOICE_CHANNEL_SELECT: Q,
                        ENABLE_AUTOMATIC_ACK: Q,
                        RESORT_THREADS: Q,
                        NOTIFICATION_CENTER_CLEAR_GUILD_MENTIONS: e_
                    }), this.waitFor(g.default, T.default, C.default, c.default, _.default, L.default, A.default, o.default, f.default)
                }
            }
            ec.displayName = "GuildReadStateStore", ec.LATEST_SNAPSHOT_VERSION = 1;
            var eC = new ec
        }
    }
]);