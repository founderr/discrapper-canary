n.r(t), n(47120), n(789020), n(724458);
var r = n(392711),
    i = n.n(r),
    a = n(109911);
n(140155);
var s = n(398758),
    o = n(455199),
    l = n(601070),
    u = n(569471),
    c = n(195663),
    d = n(131704),
    f = n(709054),
    _ = n(314897),
    p = n(592125),
    h = n(430824),
    m = n(496675),
    g = n(306680),
    E = n(944486),
    v = n(412788),
    I = n(9156),
    T = n(594174),
    b = n(981631),
    S = n(176505),
    y = n(490897);
function A(e, t, n) {
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
let N = b.kod,
    C = {},
    R = new Set(),
    O = 0;
function D(e) {
    var t;
    let n = C[null != e ? e : N];
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
function L(e) {
    var t;
    return (C[null != e ? e : N] = null !== (t = C[null != e ? e : N]) && void 0 !== t ? t : D(e));
}
function x(e) {
    let t = L(e);
    t.sentinel++, O++;
}
function w(e, t, n) {
    return null != e.guild_id && n && !((0, d.Q5)(e.type) || I.ZP.isChannelRecordOrParentOptedIn(e)) && 0 === t;
}
function P(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return !(null == e || (e.isGuildVocal() && 0 === t) || e.hasFlag(S.zZ.IS_GUILD_RESOURCE_CHANNEL) || ((0 === t || n) && (e.isThread() ? u.Z.isMuted(e.id) || I.ZP.isGuildOrCategoryOrChannelMuted(e.guild_id, e.parent_id) : I.ZP.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id))) || (!e.isPrivate() && (w(e, t, (0, s.r1)(e.guild_id)) || !m.Z.can(e.accessPermissions, e)))) && (t > 0 || I.ZP.resolveUnreadSetting(e) === y.i.ALL_MESSAGES);
}
function M(e) {
    switch (e) {
        case N:
        case null:
        case void 0:
            return null;
        default:
            return e;
    }
}
function k(e, t) {
    let n = g.ZP.hasUnread(e, t);
    if (t === y.W.GUILD_EVENT) return !(I.ZP.isMuted(e) || I.ZP.isMuteScheduledEventsEnabled(e)) && n;
    return n;
}
function U(e, t) {
    let n = D(e);
    return (n.mentionCounts = { ...t.mentionCounts }), (n.unreadByType = { ...t.unreadByType }), n;
}
function B(e) {
    return (e.unread = Object.values(e.unreadByType).some((e) => e)), e;
}
function G(e, t) {}
function Z(e, t, n) {
    return B(t), (t.mentionCount = i()(t.mentionCounts).values().sum()), (t.unread !== n.unread || t.mentionCount !== n.mentionCount) && ((C[null != e ? e : N] = t), null != e && (t.unread ? R.add(e) : R.delete(e)), O++, x(null != e ? e : N), G(t, n), !0);
}
function F(e, t) {
    let n = M(e),
        r = L(n),
        i = U(n, r),
        { enabled: s, variant: l } = (0, a.XN)({ location: 'GuildReadStateStore.recountGuild' }),
        u = s && l === a.jH.UNREADS_AT_TOP,
        c = !1;
    if (
        (t.forEach((e) => {
            let t = p.Z.getChannel(e);
            if (null == t) {
                delete i.mentionCounts[e];
                return;
            }
            if (t.getGuildId() !== n) return;
            let r = u ? o.Z.getMentionCountForChannel(e) : 0,
                a = g.ZP.getMentionCount(e) - r;
            null !== n && !c && g.ZP.hasUnread(t.id) && P(t, a, !0) && ((c = !0), (i.unreadChannelId = t.id)), a > 0 && P(t, a) ? (i.mentionCounts[t.id] = a) : delete i.mentionCounts[t.id];
        }),
        (i.unreadByType[y.W.CHANNEL] = c),
        i.unreadByType[y.W.CHANNEL] !== r.unreadByType[y.W.CHANNEL] && !i.unreadByType[y.W.CHANNEL])
    ) {
        let e = p.Z.getChannel(r.unreadChannelId);
        if (!(null != e && !t.includes(e.id) && g.ZP.hasUnread(e.id) && P(e))) return j(n);
        null != n && R.add(n), (i.unreadByType[y.W.CHANNEL] = !0);
    }
    return Z(n, i, r);
}
function V(e, t) {
    if (null == e) return;
    let n = L(e),
        r = U(e, n);
    return (r.unreadByType[y.W.GUILD_EVENT] = k(e, t)), Z(e, r, n);
}
function j(e, t) {
    let n = M(e),
        r = D(n),
        { enabled: i, variant: c } = (0, a.XN)({ location: 'GuildReadStateStore.recountGuild' }),
        f = i && c === a.jH.UNREADS_AT_TOP;
    if (null == n) {
        let e = p.Z.getMutablePrivateChannels();
        for (let t in e) {
            let n = e[t],
                i = g.ZP.getMentionCount(t);
            i > 0 && P(n, i) && ((r.mentionCount += i), (r.mentionCounts[n.id] = i));
        }
    } else {
        let e = I.ZP.isMuted(n);
        if (e && !1 === t) return !1;
        let i = I.ZP.getMutedChannels(n),
            a = I.ZP.getChannelOverrides(n),
            c = (0, s.r1)(n),
            _ = p.Z.getMutableBasicGuildChannelsForGuild(n);
        for (let t in _) {
            let n = _[t],
                s = e || i.has(t) || (null != n.parent_id && i.has(n.parent_id)),
                l = r.unreadByType[y.W.CHANNEL],
                { mentionCount: u, unread: p } = g.ZP.getGuildChannelUnreadState(n, c, a, s, l),
                h = u > 0;
            if (!h && s) continue;
            let E = !l && (!s || h) && p;
            if (
                (E || h) &&
                (function (e, t, n) {
                    if (((0, d.bw)(e.type) && 0 === t) || !m.Z.canBasicChannel((0, d.Gz)(e.type), e) || w(e, t, n)) return !1;
                    return !('flags' in e && e.hasFlag(S.zZ.IS_GUILD_RESOURCE_CHANNEL)) && (t > 0 || I.ZP.resolveUnreadSetting(e) === y.i.ALL_MESSAGES);
                })(n, u, c) &&
                (E && ((r.unreadByType[y.W.CHANNEL] = !0), (r.unreadChannelId = t)), h)
            ) {
                let e = f ? o.Z.getMentionCountForChannel(n.id) : 0;
                (r.mentionCount += Math.max(u - e, 0)), (r.mentionCounts[n.id] = Math.max(u - e, 0));
            }
        }
        let h = l.Z.getActiveJoinedThreadsForGuild(n);
        for (let t in h)
            for (let n in h[t]) {
                !r.unreadByType[y.W.CHANNEL] && g.ZP.hasUnread(n) && !u.Z.isMuted(n) && !e && ((r.unreadByType[y.W.CHANNEL] = !0), (r.unreadChannelId = n));
                let t = g.ZP.getMentionCount(n);
                t > 0 && ((r.mentionCount += t), (r.mentionCounts[n] = t));
            }
        !r.unreadByType[y.W.GUILD_EVENT] && k(n, y.W.GUILD_EVENT) && (r.unreadByType[y.W.GUILD_EVENT] = !0);
    }
    B(r);
    let _ = L(n);
    return (r.unread !== _.unread || r.mentionCount !== _.mentionCount) && ((C[null != n ? n : N] = r), null != n && (r.unread ? R.add(n) : R.delete(n)), O++, x(null != n ? n : N), G(r, _), !0);
}
function H(e) {
    let { guilds: t } = e;
    (C = {}), (O = 0), (R = new Set()), j(null);
    let { length: n } = t;
    for (let e = 0; e < n; e++) {
        let n = t[e];
        null != n && j(n.id);
    }
}
function Y(e) {
    let { guilds: t, readState: n } = e;
    (C = {}), (O = 0), (R = new Set());
    let r = n.entries.length < 500,
        i = new Set();
    for (let e of (r &&
        n.entries.forEach((e) => {
            if (null != e.mention_count && e.mention_count > 0) {
                if (null == e.read_state_type || e.read_state_type === y.W.CHANNEL) {
                    var t;
                    i.add(null === (t = p.Z.getChannel(e.id)) || void 0 === t ? void 0 : t.guild_id);
                } else i.add(e.id);
            }
        }),
    j(null),
    t))
        j(e.id, r ? i.has(e.id) : void 0);
}
function W() {
    for (let e of ((C = {}), (R = new Set()), j(null), Object.values(h.Z.getGuildIds()))) j(e);
}
function K(e) {
    let { guild: t } = e;
    return j(t.id);
}
function z(e) {
    let { guild: t } = e;
    return null != C[t.id] && (delete C[t.id], R.delete(t.id), O++, !0);
}
function q(e) {
    let {
        channel: { id: t, guild_id: n }
    } = e;
    return F(n, [t]);
}
function Q() {
    let e = p.Z.getChannel(E.Z.getChannelId());
    return null != e && F(e.getGuildId(), [e.id]);
}
function X(e) {
    let { user: t, guildId: n } = e;
    return t.id === _.default.getId() && j(n);
}
function J(e) {
    let { channelId: t } = e,
        n = p.Z.getChannel(t);
    return null != n && F(n.getGuildId(), [n.id]);
}
function $(e) {
    let { channelId: t } = e,
        n = p.Z.getChannel(t);
    if (null == n) return !1;
    if (null != n.guild_id) {
        let e = L(n.guild_id);
        if (((n.isThread() ? !u.Z.hasJoined(n.id) || u.Z.isMuted(n.id) : I.ZP.isGuildOrCategoryOrChannelMuted(n.guild_id, n.id)) || e.unreadByType[y.W.CHANNEL]) && 0 === g.ZP.getMentionCount(t)) return !1;
    }
    return F(n.getGuildId(), [n.id]);
}
function ee(e) {
    let { channelId: t, guildId: n } = e;
    return n !== b.I_8 && null != t && F(n, [t]);
}
function et(e) {
    let { channel: t } = e;
    return F(t.getGuildId(), [t.id]);
}
function en(e) {
    let { channels: t } = e;
    return i()(t)
        .groupBy((e) => e.getGuildId())
        .reduce(
            (e, t, n) =>
                F(
                    n,
                    t.map((e) => e.id)
                ) || e,
            !1
        );
}
function er(e) {
    let { channels: t } = e;
    return i()(t)
        .map((e) => {
            let { channelId: t } = e;
            return t;
        })
        .filter((e) => null != p.Z.getChannel(e))
        .groupBy((e) => {
            var t;
            return null === (t = p.Z.getChannel(e)) || void 0 === t ? void 0 : t.getGuildId();
        })
        .reduce((e, t, n) => F(n, t) || e, !1);
}
function ei(e) {
    let { channel: t } = e;
    return F(t.getGuildId(), [t.id, t.parent_id]);
}
function ea(e) {
    let { guildScheduledEvent: t } = e;
    return V(t.guild_id, y.W.GUILD_EVENT);
}
function es(e) {
    let { guildScheduledEvent: t } = e;
    return V(t.guild_id, y.W.GUILD_EVENT);
}
function eo(e) {
    let { id: t, ackType: n } = e;
    return V(t, n);
}
function el(e) {
    let { id: t, guildId: n } = e;
    return F(n, [t]);
}
function eu(e) {
    return (0, c.s)(e) && F(e.guildId, [e.id]);
}
function ec(e) {
    let { threads: t, guildId: n } = e;
    return F(
        n,
        t.filter((e) => u.Z.hasJoined(e.id)).map((e) => e.id)
    );
}
function ed(e) {
    return (
        !!(e.channels.length > 0) &&
        F(
            e.guildId,
            e.channels.map((e) => e.id)
        )
    );
}
function ef(e) {
    let { guildId: t } = e;
    return j(t);
}
function e_(e) {
    let { guildId: t } = e;
    return j(t);
}
function ep(e) {
    let { userGuildSettings: t } = e,
        n = new Set(
            t.map((e) => {
                var t;
                return null !== (t = e.guild_id) && void 0 !== t ? t : N;
            })
        );
    return f.default.keys(C).reduce((e, t) => (n.has(t) && j(t)) || e, !1);
}
function eh() {
    for (let e in C) C[e].ncMentionCount = 0;
}
function em(e) {
    let { guildId: t } = e;
    return j(t);
}
function eg(e) {
    let { messages: t } = e;
    new Set(t.map((e) => e.channel_id)).forEach((e) => {
        let t = p.Z.getChannel(e);
        null != t && F(t.getGuildId(), [e]);
    });
}
class eE extends v.Z {
    initialize() {
        this.waitFor(p.Z, E.Z, g.ZP, m.Z, _.default, T.default, I.ZP, l.Z, u.Z, o.Z);
    }
    loadCache() {
        let e = this.readSnapshot(eE.LATEST_SNAPSHOT_VERSION);
        null != e && ((C = e.guilds), (R = new Set(e.unreadGuilds)));
    }
    takeSnapshot() {
        return {
            version: eE.LATEST_SNAPSHOT_VERSION,
            data: {
                guilds: C,
                unreadGuilds: Array.from(R)
            }
        };
    }
    hasAnyUnread() {
        return R.size > 0;
    }
    getStoreChangeSentinel() {
        return O;
    }
    getMutableUnreadGuilds() {
        return R;
    }
    getMutableGuildStates() {
        return C;
    }
    hasUnread(e) {
        return R.has(e);
    }
    getMentionCount(e) {
        return L(e).mentionCount;
    }
    getMutableGuildReadState(e) {
        return L(e);
    }
    getGuildHasUnreadIgnoreMuted(e) {
        let t = p.Z.getMutableGuildChannelsForGuild(e);
        for (let e in t) {
            let n = t[e];
            if (null != n) {
                if ((!n.isGuildVocal() || 0 !== g.ZP.getMentionCount(e)) && m.Z.can(n.accessPermissions, n) && g.ZP.hasUnreadOrMentions(e)) return !0;
            }
        }
        let n = l.Z.getActiveJoinedThreadsForGuild(e);
        for (let e in n)
            if (null != p.Z.getChannel(e)) {
                for (let t in n[e]) if (g.ZP.hasUnreadOrMentions(t)) return !0;
            }
        return !!g.ZP.hasUnreadOrMentions(e, y.W.GUILD_EVENT) || !1;
    }
    getTotalMentionCount(e) {
        let t = 0;
        for (let n in C) {
            let r = C[n];
            if (!0 !== e || n !== N) t += r.mentionCount;
        }
        return t;
    }
    getTotalNotificationsMentionCount(e) {
        let t = 0;
        for (let n in C) {
            let r = C[n];
            if (!0 !== e || n !== N) t += r.ncMentionCount;
        }
        return t;
    }
    getPrivateChannelMentionCount() {
        var e;
        let t = C[N];
        return null !== (e = null == t ? void 0 : t.mentionCount) && void 0 !== e ? e : 0;
    }
    getMentionCountForChannels(e, t) {
        let n = 0,
            r = C[e];
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
        return null !== (n = null === (t = C[N]) || void 0 === t ? void 0 : t.mentionCounts[e]) && void 0 !== n ? n : 0;
    }
    getGuildChangeSentinel(e) {
        return L(e).sentinel;
    }
    constructor() {
        super({
            CONNECTION_OPEN: Y,
            OVERLAY_INITIALIZE: H,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            GUILD_CREATE: K,
            GUILD_DELETE: z,
            MESSAGE_CREATE: $,
            MESSAGE_ACK: J,
            BULK_ACK: er,
            UPDATE_CHANNEL_DIMENSIONS: J,
            CHANNEL_SELECT: ee,
            CHANNEL_DELETE: q,
            WINDOW_FOCUS: Q,
            GUILD_ACK: ef,
            GUILD_ROLE_CREATE: e_,
            GUILD_ROLE_DELETE: e_,
            GUILD_ROLE_UPDATE: e_,
            CHANNEL_CREATE: et,
            CHANNEL_UPDATES: en,
            THREAD_CREATE: ei,
            THREAD_UPDATE: ei,
            THREAD_DELETE: ei,
            THREAD_LIST_SYNC: ec,
            THREAD_MEMBER_UPDATE: el,
            THREAD_MEMBERS_UPDATE: eu,
            PASSIVE_UPDATE_V2: ed,
            GUILD_MEMBER_UPDATE: X,
            USER_GUILD_SETTINGS_FULL_UPDATE: ep,
            USER_GUILD_SETTINGS_CHANNEL_UPDATE: em,
            USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: em,
            USER_GUILD_SETTINGS_GUILD_UPDATE: em,
            USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: em,
            GUILD_FEATURE_ACK: eo,
            GUILD_SCHEDULED_EVENT_CREATE: ea,
            GUILD_SCHEDULED_EVENT_UPDATE: ea,
            GUILD_SCHEDULED_EVENT_DELETE: es,
            CHANNEL_RTC_UPDATE_CHAT_OPEN: J,
            LOAD_MESSAGES_SUCCESS: J,
            CHANNEL_ACK: J,
            CHANNEL_LOCAL_ACK: J,
            NOTIFICATION_SETTINGS_UPDATE: W,
            RECOMPUTE_READ_STATES: W,
            VOICE_CHANNEL_SELECT: J,
            ENABLE_AUTOMATIC_ACK: J,
            RESORT_THREADS: J,
            NOTIFICATION_CENTER_CLEAR_GUILD_MENTIONS: eh,
            TRY_ACK: J,
            LOAD_RECENT_MENTIONS_SUCCESS: eg
        });
    }
}
A(eE, 'displayName', 'GuildReadStateStore'), A(eE, 'LATEST_SNAPSHOT_VERSION', 1), (t.default = new eE());
