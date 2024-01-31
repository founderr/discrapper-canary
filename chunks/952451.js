"use strict";
n.r(t), n.d(t, {
  default: function() {
    return eh
  }
}), n("222007"), n("702976"), n("808653");
var i = n("917351"),
  s = n.n(i);
n("249654"), n("21121"), n("136511");
var r = n("512395"),
  a = n("401690"),
  o = n("755624"),
  l = n("526311"),
  u = n("233069"),
  d = n("271938"),
  c = n("42203"),
  f = n("305961"),
  _ = n("957255"),
  h = n("660478"),
  g = n("18494"),
  m = n("455079"),
  E = n("282109"),
  p = n("697218"),
  v = n("49111"),
  S = n("724210"),
  T = n("133335");
let I = "null",
  C = {},
  A = new Set,
  y = 0;

function N(e) {
  var t;
  let n = C[null != e ? e : I];
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

function R(e) {
  var t;
  return C[null != e ? e : I] = null !== (t = C[null != e ? e : I]) && void 0 !== t ? t : N(e)
}

function O(e) {
  let t = R(e);
  t.sentinel++, y++
}

function D(e, t, n) {
  let i = e.guild_id;
  return null != i && n && !((0, u.isThread)(e.type) || E.default.isChannelRecordOrParentOptedIn(e)) && 0 === t
}

function P(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  if (null == e || e.isGuildVocal() && 0 === t || e.hasFlag(S.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) return !1;
  if (0 === t || n) {
    let t = e.isThread() ? o.default.isMuted(e.id) || E.default.isGuildOrCategoryOrChannelMuted(e.guild_id, e.parent_id) : E.default.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id);
    if (t) return !1
  }
  return !(!e.isPrivate() && (D(e, t, (0, r.isOptInEnabledForGuild)(e.guild_id)) || !_.default.can(e.accessPermissions, e))) && (t > 0 || E.default.getChannelUnreadMode(e) === T.UnreadMode.IMPORTANT)
}

function b(e) {
  switch (e) {
    case I:
    case null:
    case void 0:
      return null;
    default:
      return e
  }
}

function L(e, t) {
  let n = h.default.hasUnread(e, t);
  if (t === T.ReadStateTypes.GUILD_EVENT) return !(E.default.isMuted(e) || E.default.isMuteScheduledEventsEnabled(e)) && n;
  return n
}

function M(e, t) {
  let n = N(e);
  return n.mentionCounts = {
    ...t.mentionCounts
  }, n.unreadByType = {
    ...t.unreadByType
  }, n
}

function U(e) {
  return e.unread = Object.values(e.unreadByType).some(e => e), e
}

function w(e, t) {}

function k(e, t, n) {
  if (U(t), t.mentionCount = s(t.mentionCounts).values().sum(), t.unread !== n.unread || t.mentionCount !== n.mentionCount) return C[null != e ? e : I] = t, null != e && (t.unread ? A.add(e) : A.delete(e)), y++, O(null != e ? e : I), !0;
  return !1
}

function V(e, t) {
  let n = b(e),
    i = R(n),
    s = M(n, i),
    r = !1;
  if (t.forEach(e => {
      let t = c.default.getChannel(e);
      if (null == t) {
        delete s.mentionCounts[e];
        return
      }
      if (t.getGuildId() !== n) return;
      let i = h.default.getMentionCount(e);
      null !== n && !r && h.default.hasUnread(t.id) && P(t, i, !0) && (r = !0, s.unreadChannelId = t.id), i > 0 && P(t, i) ? s.mentionCounts[t.id] = i : delete s.mentionCounts[t.id]
    }), s.unreadByType[T.ReadStateTypes.CHANNEL] = r, s.unreadByType[T.ReadStateTypes.CHANNEL] !== i.unreadByType[T.ReadStateTypes.CHANNEL] && !s.unreadByType[T.ReadStateTypes.CHANNEL]) {
    let e = c.default.getChannel(i.unreadChannelId);
    if (!(null != e && !t.includes(e.id) && h.default.hasUnread(e.id) && P(e))) return F(n);
    null != n && A.add(n), s.unreadByType[T.ReadStateTypes.CHANNEL] = !0
  }
  return k(n, s, i)
}

function G(e, t) {
  if (null == e) return;
  let n = R(e),
    i = M(e, n);
  return i.unreadByType[T.ReadStateTypes.GUILD_EVENT] = L(e, t), k(e, i, n)
}

function F(e, t) {
  let n = b(e),
    i = N(n);
  if (null == n) {
    let e = c.default.getMutablePrivateChannels();
    for (let t in e) {
      let n = e[t],
        s = h.default.getMentionCount(t);
      s > 0 && P(n, s) && (i.mentionCount += s, i.mentionCounts[n.id] = s)
    }
  } else {
    let e = E.default.isMuted(n);
    if (e && !1 === t) return !1;
    let s = E.default.getMutedChannels(n),
      l = E.default.getChannelOverrides(n),
      d = (0, r.isOptInEnabledForGuild)(n),
      f = c.default.getMutableBasicGuildChannelsForGuild(n);
    for (let t in f) {
      let n = f[t],
        r = e || s.has(t) || null != n.parent_id && s.has(n.parent_id),
        a = i.unreadByType[T.ReadStateTypes.CHANNEL],
        {
          mentionCount: o,
          unread: c
        } = h.default.getGuildChannelUnreadState(n, d, l, r, a),
        g = o > 0;
      if (!g && r) continue;
      let m = !a && (!r || g) && c;
      if (m || g) {
        let e = function(e, t, n) {
          if ((0, u.isGuildVocalChannelType)(e.type) && 0 === t || !_.default.canBasicChannel((0, u.getBasicAccessPermissions)(e.type), e) || D(e, t, n)) return !1;
          return !("flags" in e && e.hasFlag(S.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) && (t > 0 || E.default.getChannelUnreadMode(e) === T.UnreadMode.IMPORTANT)
        }(n, o, d);
        e && (m && (i.unreadByType[T.ReadStateTypes.CHANNEL] = !0, i.unreadChannelId = t), g && (i.mentionCount += o, i.mentionCounts[n.id] = o))
      }
    }
    let g = a.default.getActiveJoinedThreadsForGuild(n);
    for (let t in g)
      for (let n in g[t]) {
        !i.unreadByType[T.ReadStateTypes.CHANNEL] && h.default.hasUnread(n) && !o.default.isMuted(n) && !e && (i.unreadByType[T.ReadStateTypes.CHANNEL] = !0, i.unreadChannelId = n);
        let t = h.default.getMentionCount(n);
        t > 0 && (i.mentionCount += t, i.mentionCounts[n] = t)
      }!i.unreadByType[T.ReadStateTypes.GUILD_EVENT] && L(n, T.ReadStateTypes.GUILD_EVENT) && (i.unreadByType[T.ReadStateTypes.GUILD_EVENT] = !0)
  }
  U(i);
  let s = R(n);
  if (i.unread !== s.unread || i.mentionCount !== s.mentionCount) return C[null != n ? n : I] = i, null != n && (i.unread ? A.add(n) : A.delete(n)), y++, O(null != n ? n : I), !0;
  return !1
}

function x(e) {
  let {
    guilds: t
  } = e;
  C = {}, y = 0, A = new Set, F(null);
  let {
    length: n
  } = t;
  for (let e = 0; e < n; e++) {
    let n = t[e];
    null != n && F(n.id)
  }
}

function B(e) {
  let {
    guilds: t,
    readState: n
  } = e;
  C = {}, y = 0, A = new Set;
  let i = n.entries.length < 500,
    s = new Set;
  for (let e of (i && n.entries.forEach(e => {
      if (null != e.mention_count && e.mention_count > 0) {
        if (null == e.read_state_type || e.read_state_type === T.ReadStateTypes.CHANNEL) {
          var t;
          s.add(null === (t = c.default.getChannel(e.id)) || void 0 === t ? void 0 : t.guild_id)
        } else s.add(e.id)
      }
    }), F(null), t)) F(e.id, i ? s.has(e.id) : void 0)
}

function H() {
  C = {}, A = new Set, F(null);
  let e = Object.values(f.default.getGuildIds());
  for (let t of e) F(t)
}

function Y(e) {
  let {
    guild: t
  } = e;
  return F(t.id)
}

function j(e) {
  let {
    guild: t
  } = e;
  return null != C[t.id] && (delete C[t.id], A.delete(t.id), y++, !0)
}

function W(e) {
  let {
    channel: {
      id: t,
      guild_id: n
    }
  } = e;
  return V(n, [t])
}

function K() {
  let e = c.default.getChannel(g.default.getChannelId());
  return null != e && V(e.getGuildId(), [e.id])
}

function z(e) {
  let {
    user: t,
    guildId: n
  } = e;
  return t.id === d.default.getId() && F(n)
}

function q(e) {
  let {
    channelId: t
  } = e, n = c.default.getChannel(t);
  return null != n && V(n.getGuildId(), [n.id])
}

function X(e) {
  let {
    channelId: t
  } = e, n = c.default.getChannel(t);
  if (null == n) return !1;
  if (null != n.guild_id) {
    let e = R(n.guild_id),
      i = n.isThread() ? !o.default.hasJoined(n.id) || o.default.isMuted(n.id) : E.default.isGuildOrCategoryOrChannelMuted(n.guild_id, n.id);
    if ((i || e.unreadByType[T.ReadStateTypes.CHANNEL]) && 0 === h.default.getMentionCount(t)) return !1
  }
  return V(n.getGuildId(), [n.id])
}

function Q(e) {
  let {
    channelId: t,
    guildId: n
  } = e;
  return n !== v.FAVORITES && null != t && V(n, [t])
}

function Z(e) {
  let {
    channel: t
  } = e;
  return V(t.getGuildId(), [t.id])
}

function J(e) {
  let {
    channels: t
  } = e;
  return s(t).groupBy(e => e.getGuildId()).reduce((e, t, n) => V(n, t.map(e => e.id)) || e, !1)
}

function $(e) {
  let {
    channels: t
  } = e;
  return s(t).map(e => {
    let {
      channelId: t
    } = e;
    return t
  }).filter(e => null != c.default.getChannel(e)).groupBy(e => {
    var t;
    return null === (t = c.default.getChannel(e)) || void 0 === t ? void 0 : t.getGuildId()
  }).reduce((e, t, n) => V(n, t) || e, !1)
}

function ee(e) {
  let {
    channel: t
  } = e;
  return V(t.getGuildId(), [t.id, t.parent_id])
}

function et(e) {
  let {
    guildScheduledEvent: t
  } = e;
  return G(t.guild_id, T.ReadStateTypes.GUILD_EVENT)
}

function en(e) {
  let {
    guildScheduledEvent: t
  } = e;
  return G(t.guild_id, T.ReadStateTypes.GUILD_EVENT)
}

function ei(e) {
  let {
    id: t,
    ackType: n
  } = e;
  return G(t, n)
}

function es(e) {
  let {
    id: t,
    guildId: n
  } = e;
  return V(n, [t])
}

function er(e) {
  return (0, l.doesThreadMembersActionAffectMe)(e) && V(e.guildId, [e.id])
}

function ea(e) {
  let {
    threads: t,
    guildId: n
  } = e;
  return V(n, t.filter(e => o.default.hasJoined(e.id)).map(e => e.id))
}

function eo(e) {
  return null != e.channels && V(e.guildId, e.channels.map(e => e.id))
}

function el(e) {
  let {
    guildId: t
  } = e;
  return F(t)
}

function eu(e) {
  let {
    guildId: t
  } = e;
  return F(t)
}

function ed(e) {
  let {
    userGuildSettings: t
  } = e, n = new Set(t.map(e => {
    var t;
    return null !== (t = e.guild_id) && void 0 !== t ? t : I
  }));
  return Object.keys(C).reduce((e, t) => n.has(t) && F(t) || e, !1)
}

function ec() {
  for (let e in C) {
    let t = C[e];
    t.ncMentionCount = 0
  }
}

function ef(e) {
  let {
    guildId: t
  } = e;
  return F(t)
}
class e_ extends m.default {
  takeSnapshot() {
    return {
      version: e_.LATEST_SNAPSHOT_VERSION,
      data: {
        guilds: C,
        unreadGuilds: Array.from(A)
      }
    }
  }
  hasAnyUnread() {
    return A.size > 0
  }
  getStoreChangeSentinel() {
    return y
  }
  getMutableUnreadGuilds() {
    return A
  }
  getMutableGuildStates() {
    return C
  }
  hasUnread(e) {
    return A.has(e)
  }
  getMentionCount(e) {
    return R(e).mentionCount
  }
  getMutableGuildReadState(e) {
    return R(e)
  }
  getGuildHasUnreadIgnoreMuted(e) {
    let t = c.default.getMutableGuildChannelsForGuild(e);
    for (let e in t) {
      let n = t[e];
      if (null != n) {
        if ((!n.isGuildVocal() || 0 !== h.default.getMentionCount(e)) && _.default.can(n.accessPermissions, n) && h.default.hasUnread(e)) return !0
      }
    }
    let n = a.default.getActiveJoinedThreadsForGuild(e);
    for (let e in n) {
      let t = c.default.getChannel(e);
      if (null != t && P(t)) {
        for (let t in n[e])
          if (h.default.hasUnread(t)) return !0
      }
    }
    return !!h.default.hasUnread(e, T.ReadStateTypes.GUILD_EVENT) || !1
  }
  getTotalMentionCount(e) {
    let t = 0;
    for (let n in C) {
      let i = C[n];
      (!0 !== e || n !== I) && (t += i.mentionCount)
    }
    return t
  }
  getTotalNotificationsMentionCount(e) {
    let t = 0;
    for (let n in C) {
      let i = C[n];
      (!0 !== e || n !== I) && (t += i.ncMentionCount)
    }
    return t
  }
  getPrivateChannelMentionCount() {
    var e;
    let t = C[I];
    return null !== (e = null == t ? void 0 : t.mentionCount) && void 0 !== e ? e : 0
  }
  getMentionCountForChannels(e, t) {
    let n = 0,
      i = C[e];
    return null == i ? 0 : (t.forEach(e => {
      let t = i.mentionCounts[e];
      n += null != t ? t : 0
    }), n)
  }
  getGuildChangeSentinel(e) {
    return R(e).sentinel
  }
  constructor() {
    super(), this.loadCache = () => {
      let e = this.readSnapshot(e_.LATEST_SNAPSHOT_VERSION);
      null != e && (C = e.guilds, A = new Set(e.unreadGuilds))
    }, this.registerActionHandlers({
      CONNECTION_OPEN: B,
      OVERLAY_INITIALIZE: x,
      CACHE_LOADED_LAZY: this.loadCache,
      GUILD_CREATE: Y,
      GUILD_DELETE: j,
      MESSAGE_CREATE: X,
      MESSAGE_ACK: q,
      BULK_ACK: $,
      UPDATE_CHANNEL_DIMENSIONS: q,
      CHANNEL_SELECT: Q,
      CHANNEL_DELETE: W,
      WINDOW_FOCUS: K,
      GUILD_ACK: el,
      GUILD_ROLE_CREATE: eu,
      GUILD_ROLE_DELETE: eu,
      GUILD_ROLE_UPDATE: eu,
      CHANNEL_CREATE: Z,
      CHANNEL_UPDATES: J,
      THREAD_CREATE: ee,
      THREAD_UPDATE: ee,
      THREAD_DELETE: ee,
      THREAD_LIST_SYNC: ea,
      THREAD_MEMBER_UPDATE: es,
      THREAD_MEMBERS_UPDATE: er,
      PASSIVE_UPDATE_V1: eo,
      GUILD_MEMBER_UPDATE: z,
      USER_GUILD_SETTINGS_FULL_UPDATE: ed,
      USER_GUILD_SETTINGS_CHANNEL_UPDATE: ef,
      USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: ef,
      USER_GUILD_SETTINGS_GUILD_UPDATE: ef,
      USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: ef,
      GUILD_FEATURE_ACK: ei,
      GUILD_SCHEDULED_EVENT_CREATE: et,
      GUILD_SCHEDULED_EVENT_UPDATE: et,
      GUILD_SCHEDULED_EVENT_DELETE: en,
      CHANNEL_RTC_UPDATE_CHAT_OPEN: q,
      LOAD_MESSAGES_SUCCESS: q,
      CHANNEL_ACK: q,
      CHANNEL_LOCAL_ACK: q,
      NOTIFICATION_SETTINGS_UPDATE: H,
      RECOMPUTE_READ_STATES: H,
      VOICE_CHANNEL_SELECT: q,
      ENABLE_AUTOMATIC_ACK: q,
      RESORT_THREADS: q,
      NOTIFICATION_CENTER_CLEAR_GUILD_MENTIONS: ec,
      TRY_ACK: q
    }), this.waitFor(c.default, g.default, h.default, _.default, d.default, p.default, E.default, a.default, o.default)
  }
}
e_.displayName = "GuildReadStateStore", e_.LATEST_SNAPSHOT_VERSION = 1;
var eh = new e_