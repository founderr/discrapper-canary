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
    s,
    o,
    c = n(392711),
    u = n.n(c),
    d = n(442837),
    h = n(570140),
    p = n(220444),
    f = n(565799),
    _ = n(501655),
    m = n(569471),
    g = n(592125),
    C = n(430824),
    I = n(306680),
    E = n(914010),
    N = n(9156),
    S = n(938475),
    v = n(823379),
    x = n(734307),
    T = n(981631);
((r = i || (i = {})).HIDDEN = 'hidden'), (r.UNREAD = 'unread'), (r.MENTIONS = 'mentions'), (r.VOICE_CHANNELS = 'voice-channels');
let Z = {
        mode: 'hidden',
        mentionCount: 0,
        targetChannelId: null
    },
    b = {
        topBar: Z,
        bottomBar: Z
    },
    A = {},
    M = {};
function R(e) {
    let t = g.Z.getChannel(e);
    return !(null == t || null == t.getGuildId() || t.isGuildVocal()) && !(t.isThread() ? m.Z.isMuted(t.id) : N.ZP.isChannelMuted(t.getGuildId(), t.id)) && (0, p.d)(t);
}
function L(e) {
    let t = g.Z.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let i = N.ZP.isGuildCollapsed(n),
        l = N.ZP.isChannelMuted(n, t.id);
    return (!i || !l) && I.ZP.getMentionCount(e) > 0;
}
function y(e) {
    return !N.ZP.isChannelMuted(e.guild_id, e.id) && (e.isGuildStageVoice() ? f.Z.getMutableParticipants(e.id, _.pV.SPEAKER).length > 0 : S.ZP.getVoiceStatesForChannel(e).length > 0);
}
function P(e) {
    var t, n, i;
    let { guildChannels: l } = x.Z.getGuildWithoutChangingGuildActionRows(e),
        r = l.getChannels(null !== (t = M[e]) && void 0 !== t ? t : []);
    if (null == r || 0 === r.length) return !1;
    let a = null,
        s = null,
        o = null,
        c = null,
        d = !0,
        h = !0,
        p = !1,
        f = l.getCategoryFromSection(l.voiceChannelsSectionNumber),
        _ = null !== (n = null == f ? void 0 : f.getShownChannelIds()) && void 0 !== n ? n : [],
        [m, g, C] = l.getSlicedChannels(r);
    for (let e = 0; e < g.length; e++) {
        let t = g[e];
        if (((R(t.id) || u().some(t.threadIds, R)) && (h = !1), (L(t.id) || u().some(t.threadIds, L)) && (d = !1), _.includes(t.id) && (p = !0), !h && !d && p)) break;
    }
    let E = 0,
        N = !1,
        S = 0,
        v = !1;
    if (h || d)
        for (let e = m.length - 1; e >= 0; e--) {
            let t = m[e];
            (R(t.id) || u().some(t.threadIds, R)) && (null == s && (s = t.id), (N = !0)), (L(t.id) || u().some(t.threadIds, L)) && (null == a && (a = t.id), (E += I.ZP.getMentionCount(t.id) + u().sumBy(t.threadIds, I.ZP.getMentionCount)));
        }
    if (h || d)
        for (let e = 0; e < C.length; e++) {
            let t = C[e];
            if (!h && !d) break;
            (R(t.id) || u().some(t.threadIds, R)) && (null == c && (c = t.id), (v = !0)), (L(t.id) || u().some(t.threadIds, L)) && (null == o && (o = t.id), (S += I.ZP.getMentionCount(t.id) + u().sumBy(t.threadIds, I.ZP.getMentionCount)));
        }
    let T = null,
        b = null,
        P = null !== (i = null == f ? void 0 : f.getChannelRecords()) && void 0 !== i ? i : [];
    d && S > 0
        ? (T = {
              mode: 'mentions',
              mentionCount: S,
              targetChannelId: o
          })
        : !p && u().some(P, y)
          ? (T = {
                mode: 'voice-channels',
                mentionCount: 0,
                targetChannelId: null
            })
          : h &&
            v &&
            (T = {
                mode: 'unread',
                mentionCount: 0,
                targetChannelId: c
            }),
        d && E > 0
            ? (b = {
                  mode: 'mentions',
                  mentionCount: E,
                  targetChannelId: a
              })
            : h &&
              N &&
              (b = {
                  mode: 'unread',
                  mentionCount: 0,
                  targetChannelId: s
              });
    let O = null != b && (null == T || ('mentions' !== T.mode && 'mentions' === b.mode)),
        j = null != T && ('mentions' === T.mode || !O);
    return (
        (A[e] = {
            topBar: O && null != b ? b : Z,
            bottomBar: j && null != T ? T : Z
        }),
        !0
    );
}
let O = u().throttle(P, 200);
function j(e) {
    let { guildId: t } = e,
        n = C.Z.getGuild(t);
    return !!(null != n && n.hasFeature(T.oNc.COMMUNITY)) && O(t);
}
function D(e) {
    let { id: t } = e,
        n = g.Z.getChannel(t);
    if (null == n) return !1;
    let i = C.Z.getGuild(n.guild_id);
    return !!(null != i && i.hasFeature(T.oNc.COMMUNITY)) && O(n.guild_id);
}
function w(e) {
    let { channel: t } = e,
        n = g.Z.getChannel(t.id);
    if (null == n) return !1;
    let i = C.Z.getGuild(t.guild_id);
    return !!(null != i && i.hasFeature(T.oNc.COMMUNITY)) && O(n.guild_id);
}
function U(e) {
    let { channelId: t } = e,
        n = g.Z.getChannel(t);
    if (null == n) return !1;
    let i = C.Z.getGuild(n.guild_id);
    return !!(null != i && i.hasFeature(T.oNc.COMMUNITY)) && E.Z.getGuildId() === n.guild_id && O(n.guild_id);
}
function G(e) {
    let { guildId: t } = e;
    return null != t && O(t);
}
class k extends (l = d.ZP.Store) {
    initialize() {
        this.waitFor(x.Z, I.ZP, N.ZP, m.Z, S.ZP, E.Z, C.Z);
    }
    getUnreadStateForGuildId(e) {
        var t;
        return null !== (t = A[e]) && void 0 !== t ? t : b;
    }
}
(o = 'ChannelListUnreadsStore'),
    (s = 'displayName') in (a = k)
        ? Object.defineProperty(a, s, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = o),
    (t.Z = new k(h.Z, {
        UPDATE_CHANNEL_LIST_DIMENSIONS: function (e) {
            let { guildId: t, channelIds: n } = e,
                i = C.Z.getGuild(t);
            return !!(null != i && i.hasFeature(T.oNc.COMMUNITY)) && null != n && !u().isEqual(M[t], n) && ((M[t] = n), P(t));
        },
        BULK_ACK: function (e) {
            let { channels: t } = e,
                n = !1;
            return (
                u()(t)
                    .map((e) => {
                        var t;
                        let { channelId: n } = e;
                        return null === (t = g.Z.getChannel(n)) || void 0 === t ? void 0 : t.guild_id;
                    })
                    .filter(v.lm)
                    .uniq()
                    .forEach((e) => {
                        let t = C.Z.getGuild(e);
                        null != t && t.hasFeature(T.oNc.COMMUNITY) && O(e) && (n = !0);
                    }),
                n
            );
        },
        CHANNEL_ACK: U,
        CHANNEL_DELETE: w,
        CHANNEL_LOCAL_ACK: U,
        MESSAGE_ACK: U,
        MESSAGE_CREATE: U,
        MESSAGE_DELETE_BULK: U,
        MESSAGE_DELETE: U,
        PASSIVE_UPDATE_V2: function (e) {
            let t = C.Z.getGuild(e.guildId);
            return !!(e.channels.length > 0 && null != t && t.hasFeature(T.oNc.COMMUNITY)) && O(e.guildId);
        },
        RESORT_THREADS: U,
        THREAD_CREATE: w,
        THREAD_DELETE: w,
        THREAD_LIST_SYNC: j,
        THREAD_MEMBER_UPDATE: D,
        THREAD_MEMBERS_UPDATE: D,
        THREAD_UPDATE: w,
        BULK_CLEAR_RECENTS: j,
        CATEGORY_COLLAPSE_ALL: j,
        CATEGORY_EXPAND_ALL: j,
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e,
                n = E.Z.getGuildId();
            if (null == n || !new Set(t.map((e) => e.guildId)).has(n)) return !1;
            let i = A[n];
            return null != i && 'voice-channels' === i.bottomBar.mode && O(n);
        },
        USER_GUILD_SETTINGS_CHANNEL_UPDATE: G,
        USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: G,
        USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
            let { userGuildSettings: t } = e;
            for (let e of t) null != e.guild_id && O(e.guild_id);
        },
        USER_GUILD_SETTINGS_GUILD_UPDATE: G,
        USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: G
    }));
