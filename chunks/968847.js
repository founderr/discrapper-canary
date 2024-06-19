n.d(t, {
  x: function() {
    return l
  }
}), n(47120);
var l, i, s, r, a, o, u = n(392711),
  c = n.n(u),
  d = n(442837),
  h = n(570140),
  g = n(220444),
  p = n(565799),
  m = n(501655),
  C = n(569471),
  E = n(592125),
  f = n(430824),
  _ = n(306680),
  I = n(914010),
  N = n(9156),
  Z = n(938475),
  S = n(823379),
  x = n(734307),
  T = n(981631);
(s = l || (l = {})).HIDDEN = "hidden", s.UNREAD = "unread", s.MENTIONS = "mentions", s.VOICE_CHANNELS = "voice-channels";
let L = {
    mode: "hidden",
    mentionCount: 0,
    targetChannelId: null
  },
  v = {
    topBar: L,
    bottomBar: L
  },
  A = {},
  M = {};

function R(e) {
  let t = E.Z.getChannel(e);
  return !(null == t || null == t.getGuildId() || t.isGuildVocal()) && !(t.isThread() ? C.Z.isMuted(t.id) : N.ZP.isChannelMuted(t.getGuildId(), t.id)) && (0, g.d)(t)
}

function O(e) {
  let t = E.Z.getChannel(e);
  if (null == t) return !1;
  let n = t.getGuildId();
  if (null == n) return !1;
  let l = N.ZP.isGuildCollapsed(n),
    i = N.ZP.isChannelMuted(n, t.id);
  return (!l || !i) && _.ZP.getMentionCount(e) > 0
}

function P(e) {
  return !N.ZP.isChannelMuted(e.guild_id, e.id) && (e.isGuildStageVoice() ? p.Z.getMutableParticipants(e.id, m.pV.SPEAKER).length > 0 : Z.ZP.getVoiceStatesForChannel(e).length > 0)
}

function j(e) {
  var t, n, l;
  let {
    guildChannels: i
  } = x.Z.getGuildWithoutChangingCommunityRows(e), s = i.getChannels(null !== (t = M[e]) && void 0 !== t ? t : []);
  if (null == s || 0 === s.length) return !1;
  let r = null,
    a = null,
    o = null,
    u = null,
    d = !0,
    h = !0,
    g = !1,
    p = i.getCategoryFromSection(i.voiceChannelsSectionNumber),
    m = null !== (n = null == p ? void 0 : p.getShownChannelIds()) && void 0 !== n ? n : [],
    [C, E, f] = i.getSlicedChannels(s);
  for (let e = 0; e < E.length; e++) {
    let t = E[e];
    if ((R(t.id) || c().some(t.threadIds, R)) && (h = !1), (O(t.id) || c().some(t.threadIds, O)) && (d = !1), m.includes(t.id) && (g = !0), !h && !d && g) break
  }
  let I = 0,
    N = !1,
    Z = 0,
    S = !1;
  if (h || d)
    for (let e = C.length - 1; e >= 0; e--) {
      let t = C[e];
      (R(t.id) || c().some(t.threadIds, R)) && (null == a && (a = t.id), N = !0), (O(t.id) || c().some(t.threadIds, O)) && (null == r && (r = t.id), I += _.ZP.getMentionCount(t.id) + c().sumBy(t.threadIds, _.ZP.getMentionCount))
    }
  if (h || d)
    for (let e = 0; e < f.length; e++) {
      let t = f[e];
      if (!h && !d) break;
      (R(t.id) || c().some(t.threadIds, R)) && (null == u && (u = t.id), S = !0), (O(t.id) || c().some(t.threadIds, O)) && (null == o && (o = t.id), Z += _.ZP.getMentionCount(t.id) + c().sumBy(t.threadIds, _.ZP.getMentionCount))
    }
  let T = null,
    v = null,
    j = null !== (l = null == p ? void 0 : p.getChannelRecords()) && void 0 !== l ? l : [];
  d && Z > 0 ? T = {
    mode: "mentions",
    mentionCount: Z,
    targetChannelId: o
  } : !g && c().some(j, P) ? T = {
    mode: "voice-channels",
    mentionCount: 0,
    targetChannelId: null
  } : h && S && (T = {
    mode: "unread",
    mentionCount: 0,
    targetChannelId: u
  }), d && I > 0 ? v = {
    mode: "mentions",
    mentionCount: I,
    targetChannelId: r
  } : h && N && (v = {
    mode: "unread",
    mentionCount: 0,
    targetChannelId: a
  });
  let b = null != v && (null == T || "mentions" !== T.mode && "mentions" === v.mode),
    D = null != T && ("mentions" === T.mode || !b);
  return A[e] = {
    topBar: b && null != v ? v : L,
    bottomBar: D && null != T ? T : L
  }, !0
}
let b = c().throttle(j, 200);

function D(e) {
  let {
    guildId: t
  } = e, n = f.Z.getGuild(t);
  return !!(null != n && n.hasFeature(T.oNc.COMMUNITY)) && b(t)
}

function y(e) {
  let {
    id: t
  } = e, n = E.Z.getChannel(t);
  if (null == n) return !1;
  let l = f.Z.getGuild(n.guild_id);
  return !!(null != l && l.hasFeature(T.oNc.COMMUNITY)) && b(n.guild_id)
}

function U(e) {
  let {
    channel: t
  } = e, n = E.Z.getChannel(t.id);
  if (null == n) return !1;
  let l = f.Z.getGuild(t.guild_id);
  return !!(null != l && l.hasFeature(T.oNc.COMMUNITY)) && b(n.guild_id)
}

function G(e) {
  let {
    channelId: t
  } = e, n = E.Z.getChannel(t);
  if (null == n) return !1;
  let l = f.Z.getGuild(n.guild_id);
  return !!(null != l && l.hasFeature(T.oNc.COMMUNITY)) && I.Z.getGuildId() === n.guild_id && b(n.guild_id)
}

function w(e) {
  let {
    guildId: t
  } = e;
  return null != t && b(t)
}
class k extends(i = d.ZP.Store) {
  initialize() {
    this.waitFor(x.Z, _.ZP, N.ZP, C.Z, Z.ZP, I.Z, f.Z)
  }
  getUnreadStateForGuildId(e) {
    var t;
    return null !== (t = A[e]) && void 0 !== t ? t : v
  }
}
o = "ChannelListUnreadsStore", (a = "displayName") in(r = k) ? Object.defineProperty(r, a, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[a] = o, t.Z = new k(h.Z, {
  UPDATE_CHANNEL_LIST_DIMENSIONS: function(e) {
    let {
      guildId: t,
      channelIds: n
    } = e, l = f.Z.getGuild(t);
    return !!(null != l && l.hasFeature(T.oNc.COMMUNITY)) && null != n && !c().isEqual(M[t], n) && (M[t] = n, j(t))
  },
  BULK_ACK: function(e) {
    let {
      channels: t
    } = e, n = !1;
    return c()(t).map(e => {
      var t;
      let {
        channelId: n
      } = e;
      return null === (t = E.Z.getChannel(n)) || void 0 === t ? void 0 : t.guild_id
    }).filter(S.lm).uniq().forEach(e => {
      let t = f.Z.getGuild(e);
      null != t && t.hasFeature(T.oNc.COMMUNITY) && b(e) && (n = !0)
    }), n
  },
  CHANNEL_ACK: G,
  CHANNEL_DELETE: U,
  CHANNEL_LOCAL_ACK: G,
  MESSAGE_ACK: G,
  MESSAGE_CREATE: G,
  MESSAGE_DELETE_BULK: G,
  MESSAGE_DELETE: G,
  PASSIVE_UPDATE_V2: function(e) {
    let t = f.Z.getGuild(e.guildId);
    return !!(e.channels.length > 0 && null != t && t.hasFeature(T.oNc.COMMUNITY)) && b(e.guildId)
  },
  RESORT_THREADS: G,
  THREAD_CREATE: U,
  THREAD_DELETE: U,
  THREAD_LIST_SYNC: D,
  THREAD_MEMBER_UPDATE: y,
  THREAD_MEMBERS_UPDATE: y,
  THREAD_UPDATE: U,
  BULK_CLEAR_RECENTS: D,
  CATEGORY_COLLAPSE_ALL: D,
  CATEGORY_EXPAND_ALL: D,
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e, n = I.Z.getGuildId();
    if (null == n || !new Set(t.map(e => e.guildId)).has(n)) return !1;
    let l = A[n];
    return null != l && "voice-channels" === l.bottomBar.mode && b(n)
  },
  USER_GUILD_SETTINGS_CHANNEL_UPDATE: w,
  USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: w,
  USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
    let {
      userGuildSettings: t
    } = e;
    for (let e of t) null != e.guild_id && b(e.guild_id)
  },
  USER_GUILD_SETTINGS_GUILD_UPDATE: w,
  USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: w
})