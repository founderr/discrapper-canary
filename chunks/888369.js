n.r(t), n(47120), n(789020), n(724458);
var r = n(392711),
    i = n.n(r);
n(57132), n(140155);
var a = n(398758),
    s = n(601070),
    o = n(569471),
    l = n(195663),
    u = n(131704),
    c = n(709054),
    d = n(314897),
    f = n(592125),
    _ = n(430824),
    h = n(496675),
    p = n(306680),
    m = n(944486),
    g = n(412788),
    E = n(9156),
    v = n(594174),
    I = n(981631),
    S = n(176505),
    T = n(490897);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let y = I.kod,
    A = {},
    N = new Set(),
    C = 0;
function R(e) {
    var t;
    let n = A[null != e ? e : y];
    return {
        unread: !1,
        unreadByType: {},
        unreadChannelId: null,
        mentionCount: 0,
        mentionCounts: {},
        ncMentionCount: 0,
        sentinel: null !== (t = null == n ? void 0 : n.sentinel) && void 0 !== t ? t : 0
    };
}
function O(e) {
    var t;
    return (A[null != e ? e : y] = null !== (t = A[null != e ? e : y]) && void 0 !== t ? t : R(e));
}
function D(e) {
    let t = O(e);
    t.sentinel++, C++;
}
function L(e, t, n) {
    return null != e.guild_id && n && !((0, u.Q5)(e.type) || E.ZP.isChannelRecordOrParentOptedIn(e)) && 0 === t;
}
function x(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return !(null == e || (e.isGuildVocal() && 0 === t) || e.hasFlag(S.zZ.IS_GUILD_RESOURCE_CHANNEL) || ((0 === t || n) && (e.isThread() ? o.Z.isMuted(e.id) || E.ZP.isGuildOrCategoryOrChannelMuted(e.guild_id, e.parent_id) : E.ZP.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id))) || (!e.isPrivate() && (L(e, t, (0, a.r1)(e.guild_id)) || !h.Z.can(e.accessPermissions, e)))) && (t > 0 || E.ZP.resolveUnreadSetting(e) === T.i.ALL_MESSAGES);
}
function w(e) {
    switch (e) {
        case y:
        case null:
        case void 0:
            return null;
        default:
            return e;
    }
}
function M(e, t) {
    let n = p.ZP.hasUnread(e, t);
    if (t === T.W.GUILD_EVENT) return !(E.ZP.isMuted(e) || E.ZP.isMuteScheduledEventsEnabled(e)) && n;
    return n;
}
function P(e, t) {
    let n = R(e);
    return (n.mentionCounts = { ...t.mentionCounts }), (n.unreadByType = { ...t.unreadByType }), n;
}
function k(e) {
    return (e.unread = Object.values(e.unreadByType).some((e) => e)), e;
}
function U(e, t) {}
function G(e, t, n) {
    return k(t), (t.mentionCount = i()(t.mentionCounts).values().sum()), (t.unread !== n.unread || t.mentionCount !== n.mentionCount) && ((A[null != e ? e : y] = t), null != e && (t.unread ? N.add(e) : N.delete(e)), C++, D(null != e ? e : y), U(t, n), !0);
}
function B(e, t) {
    let n = w(e),
        r = O(n),
        i = P(n, r),
        a = !1;
    if (
        (t.forEach((e) => {
            let t = f.Z.getChannel(e);
            if (null == t) {
                delete i.mentionCounts[e];
                return;
            }
            if (t.getGuildId() !== n) return;
            let r = p.ZP.getMentionCount(e);
            null !== n && !a && p.ZP.hasUnread(t.id) && x(t, r, !0) && ((a = !0), (i.unreadChannelId = t.id)), r > 0 && x(t, r) ? (i.mentionCounts[t.id] = r) : delete i.mentionCounts[t.id];
        }),
        (i.unreadByType[T.W.CHANNEL] = a),
        i.unreadByType[T.W.CHANNEL] !== r.unreadByType[T.W.CHANNEL] && !i.unreadByType[T.W.CHANNEL])
    ) {
        let e = f.Z.getChannel(r.unreadChannelId);
        if (!(null != e && !t.includes(e.id) && p.ZP.hasUnread(e.id) && x(e))) return F(n);
        null != n && N.add(n), (i.unreadByType[T.W.CHANNEL] = !0);
    }
    return G(n, i, r);
}
function Z(e, t) {
    if (null == e) return;
    let n = O(e),
        r = P(e, n);
    return (r.unreadByType[T.W.GUILD_EVENT] = M(e, t)), G(e, r, n);
}
function F(e, t) {
    let n = w(e),
        r = R(n);
    if (null == n) {
        let e = f.Z.getMutablePrivateChannels();
        for (let t in e) {
            let n = e[t],
                i = p.ZP.getMentionCount(t);
            i > 0 && x(n, i) && ((r.mentionCount += i), (r.mentionCounts[n.id] = i));
        }
    } else {
        let e = E.ZP.isMuted(n);
        if (e && !1 === t) return !1;
        let i = E.ZP.getMutedChannels(n),
            l = E.ZP.getChannelOverrides(n),
            c = (0, a.r1)(n),
            d = f.Z.getMutableBasicGuildChannelsForGuild(n);
        for (let t in d) {
            let n = d[t],
                a = e || i.has(t) || (null != n.parent_id && i.has(n.parent_id)),
                s = r.unreadByType[T.W.CHANNEL],
                { mentionCount: o, unread: f } = p.ZP.getGuildChannelUnreadState(n, c, l, a, s),
                _ = o > 0;
            if (!_ && a) continue;
            let m = !s && (!a || _) && f;
            (m || _) &&
                (function (e, t, n) {
                    if (((0, u.bw)(e.type) && 0 === t) || !h.Z.canBasicChannel((0, u.Gz)(e.type), e) || L(e, t, n)) return !1;
                    return !('flags' in e && e.hasFlag(S.zZ.IS_GUILD_RESOURCE_CHANNEL)) && (t > 0 || E.ZP.resolveUnreadSetting(e) === T.i.ALL_MESSAGES);
                })(n, o, c) &&
                (m && ((r.unreadByType[T.W.CHANNEL] = !0), (r.unreadChannelId = t)), _ && ((r.mentionCount += o), (r.mentionCounts[n.id] = o)));
        }
        let _ = s.Z.getActiveJoinedThreadsForGuild(n);
        for (let t in _)
            for (let n in _[t]) {
                !r.unreadByType[T.W.CHANNEL] && p.ZP.hasUnread(n) && !o.Z.isMuted(n) && !e && ((r.unreadByType[T.W.CHANNEL] = !0), (r.unreadChannelId = n));
                let t = p.ZP.getMentionCount(n);
                t > 0 && ((r.mentionCount += t), (r.mentionCounts[n] = t));
            }
        !r.unreadByType[T.W.GUILD_EVENT] && M(n, T.W.GUILD_EVENT) && (r.unreadByType[T.W.GUILD_EVENT] = !0);
    }
    k(r);
    let i = O(n);
    return (r.unread !== i.unread || r.mentionCount !== i.mentionCount) && ((A[null != n ? n : y] = r), null != n && (r.unread ? N.add(n) : N.delete(n)), C++, D(null != n ? n : y), U(r, i), !0);
}
function V(e) {
    let { guilds: t } = e;
    (A = {}), (C = 0), (N = new Set()), F(null);
    let { length: n } = t;
    for (let e = 0; e < n; e++) {
        let n = t[e];
        null != n && F(n.id);
    }
}
function H(e) {
    let { guilds: t, readState: n } = e;
    (A = {}), (C = 0), (N = new Set());
    let r = n.entries.length < 500,
        i = new Set();
    for (let e of (r &&
        n.entries.forEach((e) => {
            if (null != e.mention_count && e.mention_count > 0) {
                if (null == e.read_state_type || e.read_state_type === T.W.CHANNEL) {
                    var t;
                    i.add(null === (t = f.Z.getChannel(e.id)) || void 0 === t ? void 0 : t.guild_id);
                } else i.add(e.id);
            }
        }),
    F(null),
    t))
        F(e.id, r ? i.has(e.id) : void 0);
}
function j() {
    for (let e of ((A = {}), (N = new Set()), F(null), Object.values(_.Z.getGuildIds()))) F(e);
}
function Y(e) {
    let { guild: t } = e;
    return F(t.id);
}
function W(e) {
    let { guild: t } = e;
    return null != A[t.id] && (delete A[t.id], N.delete(t.id), C++, !0);
}
function K(e) {
    let {
        channel: { id: t, guild_id: n }
    } = e;
    return B(n, [t]);
}
function z() {
    let e = f.Z.getChannel(m.Z.getChannelId());
    return null != e && B(e.getGuildId(), [e.id]);
}
function q(e) {
    let { user: t, guildId: n } = e;
    return t.id === d.default.getId() && F(n);
}
function Q(e) {
    let { channelId: t } = e,
        n = f.Z.getChannel(t);
    return null != n && B(n.getGuildId(), [n.id]);
}
function X(e) {
    let { channelId: t } = e,
        n = f.Z.getChannel(t);
    if (null == n) return !1;
    if (null != n.guild_id) {
        let e = O(n.guild_id);
        if (((n.isThread() ? !o.Z.hasJoined(n.id) || o.Z.isMuted(n.id) : E.ZP.isGuildOrCategoryOrChannelMuted(n.guild_id, n.id)) || e.unreadByType[T.W.CHANNEL]) && 0 === p.ZP.getMentionCount(t)) return !1;
    }
    return B(n.getGuildId(), [n.id]);
}
function J(e) {
    let { channelId: t, guildId: n } = e;
    return n !== I.I_8 && null != t && B(n, [t]);
}
function $(e) {
    let { channel: t } = e;
    return B(t.getGuildId(), [t.id]);
}
function ee(e) {
    let { channels: t } = e;
    return i()(t)
        .groupBy((e) => e.getGuildId())
        .reduce(
            (e, t, n) =>
                B(
                    n,
                    t.map((e) => e.id)
                ) || e,
            !1
        );
}
function et(e) {
    let { channels: t } = e;
    return i()(t)
        .map((e) => {
            let { channelId: t } = e;
            return t;
        })
        .filter((e) => null != f.Z.getChannel(e))
        .groupBy((e) => {
            var t;
            return null === (t = f.Z.getChannel(e)) || void 0 === t ? void 0 : t.getGuildId();
        })
        .reduce((e, t, n) => B(n, t) || e, !1);
}
function en(e) {
    let { channel: t } = e;
    return B(t.getGuildId(), [t.id, t.parent_id]);
}
function er(e) {
    let { guildScheduledEvent: t } = e;
    return Z(t.guild_id, T.W.GUILD_EVENT);
}
function ei(e) {
    let { guildScheduledEvent: t } = e;
    return Z(t.guild_id, T.W.GUILD_EVENT);
}
function ea(e) {
    let { id: t, ackType: n } = e;
    return Z(t, n);
}
function es(e) {
    let { id: t, guildId: n } = e;
    return B(n, [t]);
}
function eo(e) {
    return (0, l.s)(e) && B(e.guildId, [e.id]);
}
function el(e) {
    let { threads: t, guildId: n } = e;
    return B(
        n,
        t.filter((e) => o.Z.hasJoined(e.id)).map((e) => e.id)
    );
}
function eu(e) {
    return (
        !!(e.channels.length > 0) &&
        B(
            e.guildId,
            e.channels.map((e) => e.id)
        )
    );
}
function ec(e) {
    let { guildId: t } = e;
    return F(t);
}
function ed(e) {
    let { guildId: t } = e;
    return F(t);
}
function ef(e) {
    let { userGuildSettings: t } = e,
        n = new Set(
            t.map((e) => {
                var t;
                return null !== (t = e.guild_id) && void 0 !== t ? t : y;
            })
        );
    return c.default.keys(A).reduce((e, t) => (n.has(t) && F(t)) || e, !1);
}
function e_() {
    for (let e in A) A[e].ncMentionCount = 0;
}
function eh(e) {
    let { guildId: t } = e;
    return F(t);
}
class ep extends g.Z {
    initialize() {
        this.waitFor(f.Z, m.Z, p.ZP, h.Z, d.default, v.default, E.ZP, s.Z, o.Z);
    }
    loadCache() {
        let e = this.readSnapshot(ep.LATEST_SNAPSHOT_VERSION);
        null != e && ((A = e.guilds), (N = new Set(e.unreadGuilds)));
    }
    takeSnapshot() {
        return {
            version: ep.LATEST_SNAPSHOT_VERSION,
            data: {
                guilds: A,
                unreadGuilds: Array.from(N)
            }
        };
    }
    hasAnyUnread() {
        return N.size > 0;
    }
    getStoreChangeSentinel() {
        return C;
    }
    getMutableUnreadGuilds() {
        return N;
    }
    getMutableGuildStates() {
        return A;
    }
    hasUnread(e) {
        return N.has(e);
    }
    getMentionCount(e) {
        return O(e).mentionCount;
    }
    getMutableGuildReadState(e) {
        return O(e);
    }
    getGuildHasUnreadIgnoreMuted(e) {
        let t = f.Z.getMutableGuildChannelsForGuild(e);
        for (let e in t) {
            let n = t[e];
            if (null != n) {
                if ((!n.isGuildVocal() || 0 !== p.ZP.getMentionCount(e)) && h.Z.can(n.accessPermissions, n) && p.ZP.hasUnreadOrMentions(e)) return !0;
            }
        }
        let n = s.Z.getActiveJoinedThreadsForGuild(e);
        for (let e in n)
            if (null != f.Z.getChannel(e)) {
                for (let t in n[e]) if (p.ZP.hasUnreadOrMentions(t)) return !0;
            }
        return !!p.ZP.hasUnreadOrMentions(e, T.W.GUILD_EVENT) || !1;
    }
    getTotalMentionCount(e) {
        let t = 0;
        for (let n in A) {
            let r = A[n];
            if (!0 !== e || n !== y) t += r.mentionCount;
        }
        return t;
    }
    getTotalNotificationsMentionCount(e) {
        let t = 0;
        for (let n in A) {
            let r = A[n];
            if (!0 !== e || n !== y) t += r.ncMentionCount;
        }
        return t;
    }
    getPrivateChannelMentionCount() {
        var e;
        let t = A[y];
        return null !== (e = null == t ? void 0 : t.mentionCount) && void 0 !== e ? e : 0;
    }
    getMentionCountForChannels(e, t) {
        let n = 0,
            r = A[e];
        return null == r
            ? 0
            : (t.forEach((e) => {
                  let t = r.mentionCounts[e];
                  n += null != t ? t : 0;
              }),
              n);
    }
    getMentionCountForPrivateChannel(e) {
        var t, n;
        return null !== (n = null === (t = A[y]) || void 0 === t ? void 0 : t.mentionCounts[e]) && void 0 !== n ? n : 0;
    }
    getGuildChangeSentinel(e) {
        return O(e).sentinel;
    }
    constructor() {
        super({
            CONNECTION_OPEN: H,
            OVERLAY_INITIALIZE: V,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            GUILD_CREATE: Y,
            GUILD_DELETE: W,
            MESSAGE_CREATE: X,
            MESSAGE_ACK: Q,
            BULK_ACK: et,
            UPDATE_CHANNEL_DIMENSIONS: Q,
            CHANNEL_SELECT: J,
            CHANNEL_DELETE: K,
            WINDOW_FOCUS: z,
            GUILD_ACK: ec,
            GUILD_ROLE_CREATE: ed,
            GUILD_ROLE_DELETE: ed,
            GUILD_ROLE_UPDATE: ed,
            CHANNEL_CREATE: $,
            CHANNEL_UPDATES: ee,
            THREAD_CREATE: en,
            THREAD_UPDATE: en,
            THREAD_DELETE: en,
            THREAD_LIST_SYNC: el,
            THREAD_MEMBER_UPDATE: es,
            THREAD_MEMBERS_UPDATE: eo,
            PASSIVE_UPDATE_V2: eu,
            GUILD_MEMBER_UPDATE: q,
            USER_GUILD_SETTINGS_FULL_UPDATE: ef,
            USER_GUILD_SETTINGS_CHANNEL_UPDATE: eh,
            USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: eh,
            USER_GUILD_SETTINGS_GUILD_UPDATE: eh,
            USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: eh,
            GUILD_FEATURE_ACK: ea,
            GUILD_SCHEDULED_EVENT_CREATE: er,
            GUILD_SCHEDULED_EVENT_UPDATE: er,
            GUILD_SCHEDULED_EVENT_DELETE: ei,
            CHANNEL_RTC_UPDATE_CHAT_OPEN: Q,
            LOAD_MESSAGES_SUCCESS: Q,
            CHANNEL_ACK: Q,
            CHANNEL_LOCAL_ACK: Q,
            NOTIFICATION_SETTINGS_UPDATE: j,
            RECOMPUTE_READ_STATES: j,
            VOICE_CHANNEL_SELECT: Q,
            ENABLE_AUTOMATIC_ACK: Q,
            RESORT_THREADS: Q,
            NOTIFICATION_CENTER_CLEAR_GUILD_MENTIONS: e_,
            TRY_ACK: Q
        });
    }
}
b(ep, 'displayName', 'GuildReadStateStore'), b(ep, 'LATEST_SNAPSHOT_VERSION', 1), (t.default = new ep());
