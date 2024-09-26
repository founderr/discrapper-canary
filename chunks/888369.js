n.r(t);
var r = n(47120);
var i = n(789020);
var a = n(724458);
var o = n(392711),
    s = n.n(o);
n(57132), n(140155);
var l = n(398758),
    u = n(601070),
    c = n(569471),
    d = n(195663),
    _ = n(131704),
    E = n(709054),
    f = n(314897),
    h = n(592125),
    p = n(430824),
    m = n(496675),
    I = n(306680),
    T = n(944486),
    g = n(412788),
    S = n(9156),
    A = n(594174),
    v = n(981631),
    N = n(176505),
    O = n(490897);
function R(e, t, n) {
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
let C = v.kod,
    y = {},
    L = new Set(),
    b = 0;
function D(e) {
    var t;
    let n = y[null != e ? e : C];
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
function M(e) {
    var t;
    return (y[null != e ? e : C] = null !== (t = y[null != e ? e : C]) && void 0 !== t ? t : D(e));
}
function P(e) {
    let t = M(e);
    t.sentinel++, b++;
}
function U(e, t, n) {
    return null != e.guild_id && n && !((0, _.Q5)(e.type) || S.ZP.isChannelRecordOrParentOptedIn(e)) && 0 === t;
}
function w(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return !(null == e || (e.isGuildVocal() && 0 === t) || e.hasFlag(N.zZ.IS_GUILD_RESOURCE_CHANNEL) || ((0 === t || n) && (e.isThread() ? c.Z.isMuted(e.id) || S.ZP.isGuildOrCategoryOrChannelMuted(e.guild_id, e.parent_id) : S.ZP.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id))) || (!e.isPrivate() && (U(e, t, (0, l.r1)(e.guild_id)) || !m.Z.can(e.accessPermissions, e)))) && (t > 0 || S.ZP.resolveUnreadSetting(e) === O.i.ALL_MESSAGES);
}
function x(e) {
    return 'flags' in e;
}
function G(e, t, n) {
    return !(((0, _.bw)(e.type) && 0 === t) || !m.Z.canBasicChannel((0, _.Gz)(e.type), e) || U(e, t, n) || (x(e) && e.hasFlag(N.zZ.IS_GUILD_RESOURCE_CHANNEL))) && (t > 0 || S.ZP.resolveUnreadSetting(e) === O.i.ALL_MESSAGES);
}
function k(e) {
    switch (e) {
        case C:
        case null:
        case void 0:
            return null;
        default:
            return e;
    }
}
function B(e, t) {
    let n = I.ZP.hasUnread(e, t);
    if (t === O.W.GUILD_EVENT) return !(S.ZP.isMuted(e) || S.ZP.isMuteScheduledEventsEnabled(e)) && n;
    return n;
}
function F(e, t) {
    let n = D(e);
    return (n.mentionCounts = { ...t.mentionCounts }), (n.unreadByType = { ...t.unreadByType }), n;
}
function Z(e) {
    return (e.unread = Object.values(e.unreadByType).some((e) => e)), e;
}
function V(e, t) {}
function H() {
    let e = A.default.getCurrentUser();
    if (null != e) return I.ZP.getNotifCenterReadState(e.id);
}
function Y(e, t, n) {
    return Z(t), (t.mentionCount = s()(t.mentionCounts).values().sum()), (t.unread !== n.unread || t.mentionCount !== n.mentionCount) && ((y[null != e ? e : C] = t), null != e && (t.unread ? L.add(e) : L.delete(e)), b++, P(null != e ? e : C), V(t, n), !0);
}
function j(e, t) {
    let n = k(e),
        r = M(n),
        i = F(n, r),
        a = !1;
    if (
        (t.forEach((e) => {
            let t = h.Z.getChannel(e);
            if (null == t) {
                delete i.mentionCounts[e];
                return;
            }
            if (t.getGuildId() !== n) return;
            let r = I.ZP.getMentionCount(e);
            null !== n && !a && I.ZP.hasUnread(t.id) && w(t, r, !0) && ((a = !0), (i.unreadChannelId = t.id)), r > 0 && w(t, r) ? (i.mentionCounts[t.id] = r) : delete i.mentionCounts[t.id];
        }),
        (i.unreadByType[O.W.CHANNEL] = a),
        i.unreadByType[O.W.CHANNEL] !== r.unreadByType[O.W.CHANNEL] && !i.unreadByType[O.W.CHANNEL])
    ) {
        let e = h.Z.getChannel(r.unreadChannelId);
        if (!(null != e && !t.includes(e.id) && I.ZP.hasUnread(e.id) && w(e))) return K(n);
        null != n && L.add(n), (i.unreadByType[O.W.CHANNEL] = !0);
    }
    return Y(n, i, r);
}
function W(e, t) {
    if (null == e) return;
    let n = M(e),
        r = F(e, n);
    return (r.unreadByType[O.W.GUILD_EVENT] = B(e, t)), Y(e, r, n);
}
function K(e, t) {
    let n = k(e),
        r = D(n);
    if (null == n) {
        let e = h.Z.getMutablePrivateChannels();
        for (let t in e) {
            let n = e[t],
                i = I.ZP.getMentionCount(t);
            i > 0 && w(n, i) && ((r.mentionCount += i), (r.mentionCounts[n.id] = i));
        }
    } else {
        let e = S.ZP.isMuted(n);
        if (e && !1 === t) return !1;
        let i = S.ZP.getMutedChannels(n),
            a = S.ZP.getChannelOverrides(n),
            o = (0, l.r1)(n),
            s = h.Z.getMutableBasicGuildChannelsForGuild(n);
        for (let t in s) {
            let n = s[t],
                l = e || i.has(t) || (null != n.parent_id && i.has(n.parent_id)),
                u = r.unreadByType[O.W.CHANNEL],
                { mentionCount: c, unread: d } = I.ZP.getGuildChannelUnreadState(n, o, a, l, u),
                _ = c > 0;
            if (!_ && l) continue;
            let E = !u && (!l || _) && d;
            (E || _) && G(n, c, o) && (E && ((r.unreadByType[O.W.CHANNEL] = !0), (r.unreadChannelId = t)), _ && ((r.mentionCount += c), (r.mentionCounts[n.id] = c)));
        }
        let d = u.Z.getActiveJoinedThreadsForGuild(n);
        for (let t in d)
            for (let n in d[t]) {
                !r.unreadByType[O.W.CHANNEL] && I.ZP.hasUnread(n) && !c.Z.isMuted(n) && !e && ((r.unreadByType[O.W.CHANNEL] = !0), (r.unreadChannelId = n));
                let t = I.ZP.getMentionCount(n);
                t > 0 && ((r.mentionCount += t), (r.mentionCounts[n] = t));
            }
        !r.unreadByType[O.W.GUILD_EVENT] && B(n, O.W.GUILD_EVENT) && (r.unreadByType[O.W.GUILD_EVENT] = !0);
    }
    Z(r);
    let i = M(n);
    return (r.unread !== i.unread || r.mentionCount !== i.mentionCount) && ((y[null != n ? n : C] = r), null != n && (r.unread ? L.add(n) : L.delete(n)), b++, P(null != n ? n : C), V(r, i), !0);
}
function z(e) {
    let { guilds: t } = e;
    (y = {}), (b = 0), (L = new Set()), K(null);
    let { length: n } = t;
    for (let e = 0; e < n; e++) {
        let n = t[e];
        null != n && K(n.id);
    }
}
function q(e) {
    let { guilds: t, readState: n } = e;
    (y = {}), (b = 0), (L = new Set());
    let r = n.entries.length < 500,
        i = new Set();
    for (let e of (r &&
        n.entries.forEach((e) => {
            if (null != e.mention_count && e.mention_count > 0) {
                if (null == e.read_state_type || e.read_state_type === O.W.CHANNEL) {
                    var t;
                    i.add(null === (t = h.Z.getChannel(e.id)) || void 0 === t ? void 0 : t.guild_id);
                } else i.add(e.id);
            }
        }),
    K(null),
    t))
        K(e.id, r ? i.has(e.id) : void 0);
}
function Q() {
    for (let e of ((y = {}), (L = new Set()), K(null), Object.values(p.Z.getGuildIds()))) K(e);
}
function X(e) {
    let { guild: t } = e;
    return K(t.id);
}
function $(e) {
    let { guild: t } = e;
    return null != y[t.id] && (delete y[t.id], L.delete(t.id), b++, !0);
}
function J(e) {
    let {
        channel: { id: t, guild_id: n }
    } = e;
    return j(n, [t]);
}
function ee() {
    let e = h.Z.getChannel(T.Z.getChannelId());
    return null != e && j(e.getGuildId(), [e.id]);
}
function et(e) {
    let { user: t, guildId: n } = e;
    return t.id === f.default.getId() && K(n);
}
function en(e) {
    let { channelId: t } = e,
        n = h.Z.getChannel(t);
    return null != n && j(n.getGuildId(), [n.id]);
}
function er(e) {
    let { channelId: t } = e,
        n = h.Z.getChannel(t);
    if (null == n) return !1;
    if (null != n.guild_id) {
        let e = M(n.guild_id);
        if (((n.isThread() ? !c.Z.hasJoined(n.id) || c.Z.isMuted(n.id) : S.ZP.isGuildOrCategoryOrChannelMuted(n.guild_id, n.id)) || e.unreadByType[O.W.CHANNEL]) && 0 === I.ZP.getMentionCount(t)) return !1;
    }
    return j(n.getGuildId(), [n.id]);
}
function ei(e) {
    let { channelId: t, guildId: n } = e;
    return n !== v.I_8 && null != t && j(n, [t]);
}
function ea(e) {
    let { channel: t } = e;
    return j(t.getGuildId(), [t.id]);
}
function eo(e) {
    let { channels: t } = e;
    return s()(t)
        .groupBy((e) => e.getGuildId())
        .reduce(
            (e, t, n) =>
                j(
                    n,
                    t.map((e) => e.id)
                ) || e,
            !1
        );
}
function es(e) {
    let { channels: t } = e;
    return s()(t)
        .map((e) => {
            let { channelId: t } = e;
            return t;
        })
        .filter((e) => null != h.Z.getChannel(e))
        .groupBy((e) => {
            var t;
            return null === (t = h.Z.getChannel(e)) || void 0 === t ? void 0 : t.getGuildId();
        })
        .reduce((e, t, n) => j(n, t) || e, !1);
}
function el(e) {
    let { channel: t } = e;
    return j(t.getGuildId(), [t.id, t.parent_id]);
}
function eu(e) {
    let { guildScheduledEvent: t } = e;
    return W(t.guild_id, O.W.GUILD_EVENT);
}
function ec(e) {
    let { guildScheduledEvent: t } = e;
    return W(t.guild_id, O.W.GUILD_EVENT);
}
function ed(e) {
    let { id: t, ackType: n } = e;
    return W(t, n);
}
function e_(e) {
    let { id: t, guildId: n } = e;
    return j(n, [t]);
}
function eE(e) {
    return (0, d.s)(e) && j(e.guildId, [e.id]);
}
function ef(e) {
    let { threads: t, guildId: n } = e;
    return j(
        n,
        t.filter((e) => c.Z.hasJoined(e.id)).map((e) => e.id)
    );
}
function eh(e) {
    return (
        !!(e.channels.length > 0) &&
        j(
            e.guildId,
            e.channels.map((e) => e.id)
        )
    );
}
function ep(e) {
    let { guildId: t } = e;
    return K(t);
}
function em(e) {
    let { guildId: t } = e;
    return K(t);
}
function eI(e) {
    let { userGuildSettings: t } = e,
        n = new Set(
            t.map((e) => {
                var t;
                return null !== (t = e.guild_id) && void 0 !== t ? t : C;
            })
        );
    return E.default.keys(y).reduce((e, t) => (n.has(t) && K(t)) || e, !1);
}
function eT() {
    for (let e in y) y[e].ncMentionCount = 0;
}
function eg(e) {
    let { guildId: t } = e;
    return K(t);
}
class eS extends g.Z {
    initialize() {
        this.waitFor(h.Z, T.Z, I.ZP, m.Z, f.default, A.default, S.ZP, u.Z, c.Z);
    }
    loadCache() {
        let e = this.readSnapshot(eS.LATEST_SNAPSHOT_VERSION);
        null != e && ((y = e.guilds), (L = new Set(e.unreadGuilds)));
    }
    takeSnapshot() {
        return {
            version: eS.LATEST_SNAPSHOT_VERSION,
            data: {
                guilds: y,
                unreadGuilds: Array.from(L)
            }
        };
    }
    hasAnyUnread() {
        return L.size > 0;
    }
    getStoreChangeSentinel() {
        return b;
    }
    getMutableUnreadGuilds() {
        return L;
    }
    getMutableGuildStates() {
        return y;
    }
    hasUnread(e) {
        return L.has(e);
    }
    getMentionCount(e) {
        return M(e).mentionCount;
    }
    getMutableGuildReadState(e) {
        return M(e);
    }
    getGuildHasUnreadIgnoreMuted(e) {
        let t = h.Z.getMutableGuildChannelsForGuild(e);
        for (let e in t) {
            let n = t[e];
            if (null != n) {
                if ((!n.isGuildVocal() || 0 !== I.ZP.getMentionCount(e)) && m.Z.can(n.accessPermissions, n) && I.ZP.hasUnreadOrMentions(e)) return !0;
            }
        }
        let n = u.Z.getActiveJoinedThreadsForGuild(e);
        for (let e in n)
            if (null != h.Z.getChannel(e)) {
                for (let t in n[e]) if (I.ZP.hasUnreadOrMentions(t)) return !0;
            }
        return !!I.ZP.hasUnreadOrMentions(e, O.W.GUILD_EVENT) || !1;
    }
    getTotalMentionCount(e) {
        let t = 0;
        for (let n in y) {
            let r = y[n];
            if (!0 !== e || n !== C) t += r.mentionCount;
        }
        return t;
    }
    getTotalNotificationsMentionCount(e) {
        let t = 0;
        for (let n in y) {
            let r = y[n];
            if (!0 !== e || n !== C) t += r.ncMentionCount;
        }
        return t;
    }
    getPrivateChannelMentionCount() {
        var e;
        let t = y[C];
        return null !== (e = null == t ? void 0 : t.mentionCount) && void 0 !== e ? e : 0;
    }
    getMentionCountForChannels(e, t) {
        let n = 0,
            r = y[e];
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
        return null !== (n = null === (t = y[C]) || void 0 === t ? void 0 : t.mentionCounts[e]) && void 0 !== n ? n : 0;
    }
    getGuildChangeSentinel(e) {
        return M(e).sentinel;
    }
    constructor() {
        super({
            CONNECTION_OPEN: q,
            OVERLAY_INITIALIZE: z,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            GUILD_CREATE: X,
            GUILD_DELETE: $,
            MESSAGE_CREATE: er,
            MESSAGE_ACK: en,
            BULK_ACK: es,
            UPDATE_CHANNEL_DIMENSIONS: en,
            CHANNEL_SELECT: ei,
            CHANNEL_DELETE: J,
            WINDOW_FOCUS: ee,
            GUILD_ACK: ep,
            GUILD_ROLE_CREATE: em,
            GUILD_ROLE_DELETE: em,
            GUILD_ROLE_UPDATE: em,
            CHANNEL_CREATE: ea,
            CHANNEL_UPDATES: eo,
            THREAD_CREATE: el,
            THREAD_UPDATE: el,
            THREAD_DELETE: el,
            THREAD_LIST_SYNC: ef,
            THREAD_MEMBER_UPDATE: e_,
            THREAD_MEMBERS_UPDATE: eE,
            PASSIVE_UPDATE_V2: eh,
            GUILD_MEMBER_UPDATE: et,
            USER_GUILD_SETTINGS_FULL_UPDATE: eI,
            USER_GUILD_SETTINGS_CHANNEL_UPDATE: eg,
            USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: eg,
            USER_GUILD_SETTINGS_GUILD_UPDATE: eg,
            USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: eg,
            GUILD_FEATURE_ACK: ed,
            GUILD_SCHEDULED_EVENT_CREATE: eu,
            GUILD_SCHEDULED_EVENT_UPDATE: eu,
            GUILD_SCHEDULED_EVENT_DELETE: ec,
            CHANNEL_RTC_UPDATE_CHAT_OPEN: en,
            LOAD_MESSAGES_SUCCESS: en,
            CHANNEL_ACK: en,
            CHANNEL_LOCAL_ACK: en,
            NOTIFICATION_SETTINGS_UPDATE: Q,
            RECOMPUTE_READ_STATES: Q,
            VOICE_CHANNEL_SELECT: en,
            ENABLE_AUTOMATIC_ACK: en,
            RESORT_THREADS: en,
            NOTIFICATION_CENTER_CLEAR_GUILD_MENTIONS: eT,
            TRY_ACK: en
        });
    }
}
R(eS, 'displayName', 'GuildReadStateStore'), R(eS, 'LATEST_SNAPSHOT_VERSION', 1), (t.default = new eS());
