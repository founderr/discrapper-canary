n.d(t, {
    x: function () {
        return i;
    }
}),
    n(47120);
var i,
    l,
    r,
    a,
    o,
    s,
    c = n(392711),
    u = n.n(c),
    d = n(442837),
    h = n(570140),
    p = n(220444),
    f = n(565799),
    m = n(501655),
    g = n(569471),
    C = n(592125),
    _ = n(430824),
    v = n(306680),
    x = n(914010),
    I = n(9156),
    b = n(938475),
    S = n(823379),
    Z = n(734307),
    N = n(981631);
((r = i || (i = {})).HIDDEN = 'hidden'), (r.UNREAD = 'unread'), (r.MENTIONS = 'mentions'), (r.VOICE_CHANNELS = 'voice-channels');
let E = {
        mode: 'hidden',
        mentionCount: 0,
        targetChannelId: null
    },
    y = {
        topBar: E,
        bottomBar: E
    },
    j = {},
    T = {};
function P(e) {
    let t = C.Z.getChannel(e);
    return !(null == t || null == t.getGuildId() || t.isGuildVocal()) && !(t.isThread() ? g.Z.isMuted(t.id) : I.ZP.isChannelMuted(t.getGuildId(), t.id)) && (0, p.d)(t);
}
function A(e) {
    let t = C.Z.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let i = I.ZP.isGuildCollapsed(n),
        l = I.ZP.isChannelMuted(n, t.id);
    return (!i || !l) && v.ZP.getMentionCount(e) > 0;
}
function M(e) {
    return !I.ZP.isChannelMuted(e.guild_id, e.id) && (e.isGuildStageVoice() ? f.Z.getMutableParticipants(e.id, m.pV.SPEAKER).length > 0 : b.ZP.getVoiceStatesForChannel(e).length > 0);
}
function w(e) {
    var t, n, i;
    let { guildChannels: l } = Z.Z.getGuildWithoutChangingGuildActionRows(e),
        r = l.getChannels(null !== (t = T[e]) && void 0 !== t ? t : []);
    if (null == r || 0 === r.length) return !1;
    let a = null,
        o = null,
        s = null,
        c = null,
        d = !0,
        h = !0,
        p = !1,
        f = l.getCategoryFromSection(l.voiceChannelsSectionNumber),
        m = null !== (n = null == f ? void 0 : f.getShownChannelIds()) && void 0 !== n ? n : [],
        [g, C, _] = l.getSlicedChannels(r);
    for (let e = 0; e < C.length; e++) {
        let t = C[e];
        if (((P(t.id) || u().some(t.threadIds, P)) && (h = !1), (A(t.id) || u().some(t.threadIds, A)) && (d = !1), m.includes(t.id) && (p = !0), !h && !d && p)) break;
    }
    let x = 0,
        I = !1,
        b = 0,
        S = !1;
    if (h || d)
        for (let e = g.length - 1; e >= 0; e--) {
            let t = g[e];
            (P(t.id) || u().some(t.threadIds, P)) && (null == o && (o = t.id), (I = !0)), (A(t.id) || u().some(t.threadIds, A)) && (null == a && (a = t.id), (x += v.ZP.getMentionCount(t.id) + u().sumBy(t.threadIds, v.ZP.getMentionCount)));
        }
    if (h || d)
        for (let e = 0; e < _.length; e++) {
            let t = _[e];
            if (!h && !d) break;
            (P(t.id) || u().some(t.threadIds, P)) && (null == c && (c = t.id), (S = !0)), (A(t.id) || u().some(t.threadIds, A)) && (null == s && (s = t.id), (b += v.ZP.getMentionCount(t.id) + u().sumBy(t.threadIds, v.ZP.getMentionCount)));
        }
    let N = null,
        y = null,
        w = null !== (i = null == f ? void 0 : f.getChannelRecords()) && void 0 !== i ? i : [];
    d && b > 0
        ? (N = {
              mode: 'mentions',
              mentionCount: b,
              targetChannelId: s
          })
        : !p && u().some(w, M)
          ? (N = {
                mode: 'voice-channels',
                mentionCount: 0,
                targetChannelId: null
            })
          : h &&
            S &&
            (N = {
                mode: 'unread',
                mentionCount: 0,
                targetChannelId: c
            }),
        d && x > 0
            ? (y = {
                  mode: 'mentions',
                  mentionCount: x,
                  targetChannelId: a
              })
            : h &&
              I &&
              (y = {
                  mode: 'unread',
                  mentionCount: 0,
                  targetChannelId: o
              });
    let L = null != y && (null == N || ('mentions' !== N.mode && 'mentions' === y.mode)),
        R = null != N && ('mentions' === N.mode || !L);
    return (
        (j[e] = {
            topBar: L && null != y ? y : E,
            bottomBar: R && null != N ? N : E
        }),
        !0
    );
}
let L = u().throttle(w, 200);
function R(e) {
    let { guildId: t } = e,
        n = _.Z.getGuild(t);
    return !!(null != n && n.hasFeature(N.oNc.COMMUNITY)) && L(t);
}
function D(e) {
    let { id: t } = e,
        n = C.Z.getChannel(t);
    if (null == n) return !1;
    let i = _.Z.getGuild(n.guild_id);
    return !!(null != i && i.hasFeature(N.oNc.COMMUNITY)) && L(n.guild_id);
}
function O(e) {
    let { channel: t } = e,
        n = C.Z.getChannel(t.id);
    if (null == n) return !1;
    let i = _.Z.getGuild(t.guild_id);
    return !!(null != i && i.hasFeature(N.oNc.COMMUNITY)) && L(n.guild_id);
}
function k(e) {
    let { channelId: t } = e,
        n = C.Z.getChannel(t);
    if (null == n) return !1;
    let i = _.Z.getGuild(n.guild_id);
    return !!(null != i && i.hasFeature(N.oNc.COMMUNITY)) && x.Z.getGuildId() === n.guild_id && L(n.guild_id);
}
function U(e) {
    let { guildId: t } = e;
    return null != t && L(t);
}
class G extends (l = d.ZP.Store) {
    initialize() {
        this.waitFor(Z.Z, v.ZP, I.ZP, g.Z, b.ZP, x.Z, _.Z);
    }
    getUnreadStateForGuildId(e) {
        var t;
        return null !== (t = j[e]) && void 0 !== t ? t : y;
    }
}
(s = 'ChannelListUnreadsStore'),
    (o = 'displayName') in (a = G)
        ? Object.defineProperty(a, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[o] = s),
    (t.Z = new G(h.Z, {
        UPDATE_CHANNEL_LIST_DIMENSIONS: function (e) {
            let { guildId: t, channelIds: n } = e,
                i = _.Z.getGuild(t);
            return !!(null != i && i.hasFeature(N.oNc.COMMUNITY)) && null != n && !u().isEqual(T[t], n) && ((T[t] = n), w(t));
        },
        BULK_ACK: function (e) {
            let { channels: t } = e,
                n = !1;
            return (
                u()(t)
                    .map((e) => {
                        var t;
                        let { channelId: n } = e;
                        return null === (t = C.Z.getChannel(n)) || void 0 === t ? void 0 : t.guild_id;
                    })
                    .filter(S.lm)
                    .uniq()
                    .forEach((e) => {
                        let t = _.Z.getGuild(e);
                        null != t && t.hasFeature(N.oNc.COMMUNITY) && L(e) && (n = !0);
                    }),
                n
            );
        },
        CHANNEL_ACK: k,
        CHANNEL_DELETE: O,
        CHANNEL_LOCAL_ACK: k,
        MESSAGE_ACK: k,
        MESSAGE_CREATE: k,
        MESSAGE_DELETE_BULK: k,
        MESSAGE_DELETE: k,
        PASSIVE_UPDATE_V2: function (e) {
            let t = _.Z.getGuild(e.guildId);
            return !!(e.channels.length > 0 && null != t && t.hasFeature(N.oNc.COMMUNITY)) && L(e.guildId);
        },
        RESORT_THREADS: k,
        THREAD_CREATE: O,
        THREAD_DELETE: O,
        THREAD_LIST_SYNC: R,
        THREAD_MEMBER_UPDATE: D,
        THREAD_MEMBERS_UPDATE: D,
        THREAD_UPDATE: O,
        BULK_CLEAR_RECENTS: R,
        CATEGORY_COLLAPSE_ALL: R,
        CATEGORY_EXPAND_ALL: R,
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e,
                n = x.Z.getGuildId();
            if (null == n || !new Set(t.map((e) => e.guildId)).has(n)) return !1;
            let i = j[n];
            return null != i && 'voice-channels' === i.bottomBar.mode && L(n);
        },
        USER_GUILD_SETTINGS_CHANNEL_UPDATE: U,
        USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: U,
        USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
            let { userGuildSettings: t } = e;
            for (let e of t) null != e.guild_id && L(e.guild_id);
        },
        USER_GUILD_SETTINGS_GUILD_UPDATE: U,
        USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: U
    }));
