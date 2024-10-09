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
    m = n(501655),
    _ = n(569471),
    g = n(592125),
    C = n(430824),
    I = n(306680),
    E = n(914010),
    N = n(9156),
    S = n(938475),
    x = n(823379),
    v = n(734307),
    T = n(981631);
((r = i || (i = {})).HIDDEN = 'hidden'), (r.UNREAD = 'unread'), (r.MENTIONS = 'mentions'), (r.VOICE_CHANNELS = 'voice-channels');
let Z = {
        mode: 'hidden',
        mentionCount: 0,
        targetChannelId: null
    },
    A = {
        topBar: Z,
        bottomBar: Z
    },
    b = {},
    R = {};
function M(e) {
    let t = g.Z.getChannel(e);
    return !(null == t || null == t.getGuildId() || t.isGuildVocal()) && !(t.isThread() ? _.Z.isMuted(t.id) : N.ZP.isChannelMuted(t.getGuildId(), t.id)) && (0, p.d)(t);
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
function P(e) {
    return !N.ZP.isChannelMuted(e.guild_id, e.id) && (e.isGuildStageVoice() ? f.Z.getMutableParticipants(e.id, m.pV.SPEAKER).length > 0 : S.ZP.getVoiceStatesForChannel(e).length > 0);
}
function y(e) {
    var t, n, i;
    let { guildChannels: l } = v.Z.getGuildWithoutChangingGuildActionRows(e),
        r = l.getChannels(null !== (t = R[e]) && void 0 !== t ? t : []);
    if (null == r || 0 === r.length) return !1;
    let a = null,
        s = null,
        o = null,
        c = null,
        d = !0,
        h = !0,
        p = !1,
        f = l.getCategoryFromSection(l.voiceChannelsSectionNumber),
        m = null !== (n = null == f ? void 0 : f.getShownChannelIds()) && void 0 !== n ? n : [],
        [_, g, C] = l.getSlicedChannels(r);
    for (let e = 0; e < g.length; e++) {
        let t = g[e];
        if (((M(t.id) || u().some(t.threadIds, M)) && (h = !1), (L(t.id) || u().some(t.threadIds, L)) && (d = !1), m.includes(t.id) && (p = !0), !h && !d && p)) break;
    }
    let E = 0,
        N = !1,
        S = 0,
        x = !1;
    if (h || d)
        for (let e = _.length - 1; e >= 0; e--) {
            let t = _[e];
            (M(t.id) || u().some(t.threadIds, M)) && (null == s && (s = t.id), (N = !0)), (L(t.id) || u().some(t.threadIds, L)) && (null == a && (a = t.id), (E += I.ZP.getMentionCount(t.id) + u().sumBy(t.threadIds, I.ZP.getMentionCount)));
        }
    if (h || d)
        for (let e = 0; e < C.length; e++) {
            let t = C[e];
            if (!h && !d) break;
            (M(t.id) || u().some(t.threadIds, M)) && (null == c && (c = t.id), (x = !0)), (L(t.id) || u().some(t.threadIds, L)) && (null == o && (o = t.id), (S += I.ZP.getMentionCount(t.id) + u().sumBy(t.threadIds, I.ZP.getMentionCount)));
        }
    let T = null,
        A = null,
        y = null !== (i = null == f ? void 0 : f.getChannelRecords()) && void 0 !== i ? i : [];
    d && S > 0
        ? (T = {
              mode: 'mentions',
              mentionCount: S,
              targetChannelId: o
          })
        : !p && u().some(y, P)
          ? (T = {
                mode: 'voice-channels',
                mentionCount: 0,
                targetChannelId: null
            })
          : h &&
            x &&
            (T = {
                mode: 'unread',
                mentionCount: 0,
                targetChannelId: c
            }),
        d && E > 0
            ? (A = {
                  mode: 'mentions',
                  mentionCount: E,
                  targetChannelId: a
              })
            : h &&
              N &&
              (A = {
                  mode: 'unread',
                  mentionCount: 0,
                  targetChannelId: s
              });
    let O = null != A && (null == T || ('mentions' !== T.mode && 'mentions' === A.mode)),
        j = null != T && ('mentions' === T.mode || !O);
    return (
        (b[e] = {
            topBar: O && null != A ? A : Z,
            bottomBar: j && null != T ? T : Z
        }),
        !0
    );
}
let O = u().throttle(y, 200);
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
function G(e) {
    let { channelId: t } = e,
        n = g.Z.getChannel(t);
    if (null == n) return !1;
    let i = C.Z.getGuild(n.guild_id);
    return !!(null != i && i.hasFeature(T.oNc.COMMUNITY)) && E.Z.getGuildId() === n.guild_id && O(n.guild_id);
}
function U(e) {
    let { guildId: t } = e;
    return null != t && O(t);
}
class k extends (l = d.ZP.Store) {
    initialize() {
        this.waitFor(v.Z, I.ZP, N.ZP, _.Z, S.ZP, E.Z, C.Z);
    }
    getUnreadStateForGuildId(e) {
        var t;
        return null !== (t = b[e]) && void 0 !== t ? t : A;
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
            return !!(null != i && i.hasFeature(T.oNc.COMMUNITY)) && null != n && !u().isEqual(R[t], n) && ((R[t] = n), y(t));
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
                    .filter(x.lm)
                    .uniq()
                    .forEach((e) => {
                        let t = C.Z.getGuild(e);
                        null != t && t.hasFeature(T.oNc.COMMUNITY) && O(e) && (n = !0);
                    }),
                n
            );
        },
        CHANNEL_ACK: G,
        CHANNEL_DELETE: w,
        CHANNEL_LOCAL_ACK: G,
        MESSAGE_ACK: G,
        MESSAGE_CREATE: G,
        MESSAGE_DELETE_BULK: G,
        MESSAGE_DELETE: G,
        PASSIVE_UPDATE_V2: function (e) {
            let t = C.Z.getGuild(e.guildId);
            return !!(e.channels.length > 0 && null != t && t.hasFeature(T.oNc.COMMUNITY)) && O(e.guildId);
        },
        RESORT_THREADS: G,
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
            let i = b[n];
            return null != i && 'voice-channels' === i.bottomBar.mode && O(n);
        },
        USER_GUILD_SETTINGS_CHANNEL_UPDATE: U,
        USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: U,
        USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
            let { userGuildSettings: t } = e;
            for (let e of t) null != e.guild_id && O(e.guild_id);
        },
        USER_GUILD_SETTINGS_GUILD_UPDATE: U,
        USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: U
    }));
