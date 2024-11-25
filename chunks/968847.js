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
    m = n(565799),
    f = n(501655),
    g = n(569471),
    C = n(592125),
    _ = n(430824),
    v = n(306680),
    x = n(914010),
    I = n(9156),
    b = n(938475),
    E = n(823379),
    S = n(734307),
    Z = n(981631);
((r = i || (i = {})).HIDDEN = 'hidden'), (r.UNREAD = 'unread'), (r.MENTIONS = 'mentions'), (r.VOICE_CHANNELS = 'voice-channels');
let N = {
        mode: 'hidden',
        mentionCount: 0,
        targetChannelId: null
    },
    y = {
        topBar: N,
        bottomBar: N
    },
    T = {},
    A = {};
function P(e) {
    let t = C.Z.getChannel(e);
    return !(null == t || null == t.getGuildId() || t.isGuildVocal()) && !(t.isThread() ? g.Z.isMuted(t.id) : I.ZP.isChannelMuted(t.getGuildId(), t.id)) && (0, p.d)(t);
}
function j(e) {
    let t = C.Z.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let i = I.ZP.isGuildCollapsed(n),
        l = I.ZP.isChannelMuted(n, t.id);
    return (!i || !l) && v.ZP.getMentionCount(e) > 0;
}
function R(e) {
    return !I.ZP.isChannelMuted(e.guild_id, e.id) && (e.isGuildStageVoice() ? m.Z.getMutableParticipants(e.id, f.pV.SPEAKER).length > 0 : b.ZP.getVoiceStatesForChannel(e).length > 0);
}
function M(e) {
    var t, n, i;
    let { guildChannels: l } = S.Z.getGuildWithoutChangingGuildActionRows(e),
        r = l.getChannels(null !== (t = A[e]) && void 0 !== t ? t : []);
    if (null == r || 0 === r.length) return !1;
    let a = null,
        o = null,
        s = null,
        c = null,
        d = !0,
        h = !0,
        p = !1,
        m = l.getCategoryFromSection(l.voiceChannelsSectionNumber),
        f = null !== (n = null == m ? void 0 : m.getShownChannelIds()) && void 0 !== n ? n : [],
        [g, C, _] = l.getSlicedChannels(r);
    for (let e = 0; e < C.length; e++) {
        let t = C[e];
        if (((P(t.id) || u().some(t.threadIds, P)) && (h = !1), (j(t.id) || u().some(t.threadIds, j)) && (d = !1), f.includes(t.id) && (p = !0), !h && !d && p)) break;
    }
    let x = 0,
        I = !1,
        b = 0,
        E = !1;
    if (h || d)
        for (let e = g.length - 1; e >= 0; e--) {
            let t = g[e];
            (P(t.id) || u().some(t.threadIds, P)) && (null == o && (o = t.id), (I = !0)), (j(t.id) || u().some(t.threadIds, j)) && (null == a && (a = t.id), (x += v.ZP.getMentionCount(t.id) + u().sumBy(t.threadIds, v.ZP.getMentionCount)));
        }
    if (h || d)
        for (let e = 0; e < _.length; e++) {
            let t = _[e];
            if (!h && !d) break;
            (P(t.id) || u().some(t.threadIds, P)) && (null == c && (c = t.id), (E = !0)), (j(t.id) || u().some(t.threadIds, j)) && (null == s && (s = t.id), (b += v.ZP.getMentionCount(t.id) + u().sumBy(t.threadIds, v.ZP.getMentionCount)));
        }
    let Z = null,
        y = null,
        M = null !== (i = null == m ? void 0 : m.getChannelRecords()) && void 0 !== i ? i : [];
    d && b > 0
        ? (Z = {
              mode: 'mentions',
              mentionCount: b,
              targetChannelId: s
          })
        : !p && u().some(M, R)
          ? (Z = {
                mode: 'voice-channels',
                mentionCount: 0,
                targetChannelId: null
            })
          : h &&
            E &&
            (Z = {
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
    let L = null != y && (null == Z || ('mentions' !== Z.mode && 'mentions' === y.mode)),
        w = null != Z && ('mentions' === Z.mode || !L);
    return (
        (T[e] = {
            topBar: L && null != y ? y : N,
            bottomBar: w && null != Z ? Z : N
        }),
        !0
    );
}
let L = u().throttle(M, 200);
function w(e) {
    let { guildId: t } = e,
        n = _.Z.getGuild(t);
    return !!(null != n && n.hasFeature(Z.oNc.COMMUNITY)) && L(t);
}
function D(e) {
    let { id: t } = e,
        n = C.Z.getChannel(t);
    if (null == n) return !1;
    let i = _.Z.getGuild(n.guild_id);
    return !!(null != i && i.hasFeature(Z.oNc.COMMUNITY)) && L(n.guild_id);
}
function O(e) {
    let { channel: t } = e,
        n = C.Z.getChannel(t.id);
    if (null == n) return !1;
    let i = _.Z.getGuild(t.guild_id);
    return !!(null != i && i.hasFeature(Z.oNc.COMMUNITY)) && L(n.guild_id);
}
function k(e) {
    let { channelId: t } = e,
        n = C.Z.getChannel(t);
    if (null == n) return !1;
    let i = _.Z.getGuild(n.guild_id);
    return !!(null != i && i.hasFeature(Z.oNc.COMMUNITY)) && x.Z.getGuildId() === n.guild_id && L(n.guild_id);
}
function U(e) {
    let { guildId: t } = e;
    return null != t && L(t);
}
class G extends (l = d.ZP.Store) {
    initialize() {
        this.waitFor(S.Z, v.ZP, I.ZP, g.Z, b.ZP, x.Z, _.Z);
    }
    getUnreadStateForGuildId(e) {
        var t;
        return null !== (t = T[e]) && void 0 !== t ? t : y;
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
            return !!(null != i && i.hasFeature(Z.oNc.COMMUNITY)) && null != n && !u().isEqual(A[t], n) && ((A[t] = n), M(t));
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
                    .filter(E.lm)
                    .uniq()
                    .forEach((e) => {
                        let t = _.Z.getGuild(e);
                        null != t && t.hasFeature(Z.oNc.COMMUNITY) && L(e) && (n = !0);
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
            return !!(e.channels.length > 0 && null != t && t.hasFeature(Z.oNc.COMMUNITY)) && L(e.guildId);
        },
        RESORT_THREADS: k,
        THREAD_CREATE: O,
        THREAD_DELETE: O,
        THREAD_LIST_SYNC: w,
        THREAD_MEMBER_UPDATE: D,
        THREAD_MEMBERS_UPDATE: D,
        THREAD_UPDATE: O,
        BULK_CLEAR_RECENTS: w,
        CATEGORY_COLLAPSE_ALL: w,
        CATEGORY_EXPAND_ALL: w,
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e,
                n = x.Z.getGuildId();
            if (null == n || !new Set(t.map((e) => e.guildId)).has(n)) return !1;
            let i = T[n];
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
