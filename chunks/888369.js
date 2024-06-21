"use strict";
n.r(t), n(47120), n(789020), n(724458);
var i = n(392711),
  r = n.n(i),
  s = n(265164);
n(57132), n(140155);
var o = n(398758),
  a = n(601070),
  l = n(569471),
  u = n(195663),
  _ = n(131704),
  c = n(709054),
  d = n(314897),
  E = n(592125),
  I = n(430824),
  T = n(496675),
  h = n(306680),
  S = n(944486),
  f = n(412788),
  N = n(9156),
  A = n(594174),
  m = n(981631),
  O = n(176505),
  R = n(490897);

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let g = m.kod,
  C = {},
  v = new Set,
  L = 0;

function D(e) {
  var t;
  let n = C[null != e ? e : g];
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
  return C[null != e ? e : g] = null !== (t = C[null != e ? e : g]) && void 0 !== t ? t : D(e)
}

function P(e) {
  let t = M(e);
  t.sentinel++, L++
}

function y(e, t, n) {
  return null != e.guild_id && n && !((0, _.Q5)(e.type) || N.ZP.isChannelRecordOrParentOptedIn(e)) && 0 === t
}

function U(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  return !(null == e || e.isGuildVocal() && 0 === t || e.hasFlag(O.zZ.IS_GUILD_RESOURCE_CHANNEL) || (0 === t || n) && (e.isThread() ? l.Z.isMuted(e.id) || N.ZP.isGuildOrCategoryOrChannelMuted(e.guild_id, e.parent_id) : N.ZP.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id)) || !e.isPrivate() && (y(e, t, (0, o.r1)(e.guild_id)) || !T.Z.can(e.accessPermissions, e))) && (t > 0 || N.ZP.resolveUnreadSetting(e) === R.i.ALL_MESSAGES)
}

function b(e) {
  switch (e) {
    case g:
    case null:
    case void 0:
      return null;
    default:
      return e
  }
}

function G(e, t) {
  let n = h.ZP.hasUnread(e, t);
  if (t === R.W.GUILD_EVENT) return !(N.ZP.isMuted(e) || N.ZP.isMuteScheduledEventsEnabled(e)) && n;
  return n
}

function w(e, t) {
  let n = D(e);
  return n.mentionCounts = {
    ...t.mentionCounts
  }, n.unreadByType = {
    ...t.unreadByType
  }, n
}

function B(e) {
  return e.unread = Object.values(e.unreadByType).some(e => e), e
}

function k(e, t) {}

function x(e, t, n) {
  return B(t), t.mentionCount = r()(t.mentionCounts).values().sum(), (t.unread !== n.unread || t.mentionCount !== n.mentionCount) && (C[null != e ? e : g] = t, null != e && (t.unread ? v.add(e) : v.delete(e)), L++, P(null != e ? e : g), k(t, n), !0)
}

function V(e, t) {
  let n = b(e),
    i = M(n),
    r = w(n, i),
    s = !1;
  if (t.forEach(e => {
      let t = E.Z.getChannel(e);
      if (null == t) {
        delete r.mentionCounts[e];
        return
      }
      if (t.getGuildId() !== n) return;
      let i = h.ZP.getMentionCount(e) - 0;
      null !== n && !s && h.ZP.hasUnread(t.id) && U(t, i, !0) && (s = !0, r.unreadChannelId = t.id), i > 0 && U(t, i) ? r.mentionCounts[t.id] = i : delete r.mentionCounts[t.id]
    }), r.unreadByType[R.W.CHANNEL] = s, r.unreadByType[R.W.CHANNEL] !== i.unreadByType[R.W.CHANNEL] && !r.unreadByType[R.W.CHANNEL]) {
    let e = E.Z.getChannel(i.unreadChannelId);
    if (!(null != e && !t.includes(e.id) && h.ZP.hasUnread(e.id) && U(e))) return H(n);
    null != n && v.add(n), r.unreadByType[R.W.CHANNEL] = !0
  }
  return x(n, r, i)
}

function Z(e, t) {
  if (null == e) return;
  let n = M(e),
    i = w(e, n);
  return i.unreadByType[R.W.GUILD_EVENT] = G(e, t), x(e, i, n)
}

function H(e, t) {
  let n = b(e),
    i = D(n);
  if (null == n) {
    let e = E.Z.getMutablePrivateChannels();
    for (let t in e) {
      let n = e[t],
        r = h.ZP.getMentionCount(t);
      r > 0 && U(n, r) && (i.mentionCount += r, i.mentionCounts[n.id] = r)
    }
  } else {
    let e = N.ZP.isMuted(n);
    if (e && !1 === t) return !1;
    let r = N.ZP.getMutedChannels(n),
      s = N.ZP.getChannelOverrides(n),
      u = (0, o.r1)(n),
      c = E.Z.getMutableBasicGuildChannelsForGuild(n);
    for (let t in c) {
      let n = c[t],
        o = e || r.has(t) || null != n.parent_id && r.has(n.parent_id),
        a = i.unreadByType[R.W.CHANNEL],
        {
          mentionCount: l,
          unread: d
        } = h.ZP.getGuildChannelUnreadState(n, u, s, o, a),
        E = l > 0;
      if (!E && o) continue;
      let I = !a && (!o || E) && d;
      (I || E) && function(e, t, n) {
        if ((0, _.bw)(e.type) && 0 === t || !T.Z.canBasicChannel((0, _.Gz)(e.type), e) || y(e, t, n)) return !1;
        return !("flags" in e && e.hasFlag(O.zZ.IS_GUILD_RESOURCE_CHANNEL)) && (t > 0 || N.ZP.resolveUnreadSetting(e) === R.i.ALL_MESSAGES)
      }(n, l, u) && (I && (i.unreadByType[R.W.CHANNEL] = !0, i.unreadChannelId = t), E && (i.mentionCount += Math.max(l - 0, 0), i.mentionCounts[n.id] = Math.max(l - 0, 0)))
    }
    let d = a.Z.getActiveJoinedThreadsForGuild(n);
    for (let t in d)
      for (let n in d[t]) {
        !i.unreadByType[R.W.CHANNEL] && h.ZP.hasUnread(n) && !l.Z.isMuted(n) && !e && (i.unreadByType[R.W.CHANNEL] = !0, i.unreadChannelId = n);
        let t = h.ZP.getMentionCount(n);
        t > 0 && (i.mentionCount += t, i.mentionCounts[n] = t)
      }!i.unreadByType[R.W.GUILD_EVENT] && G(n, R.W.GUILD_EVENT) && (i.unreadByType[R.W.GUILD_EVENT] = !0)
  }
  B(i);
  let r = M(n);
  return (i.unread !== r.unread || i.mentionCount !== r.mentionCount) && (C[null != n ? n : g] = i, null != n && (i.unread ? v.add(n) : v.delete(n)), L++, P(null != n ? n : g), k(i, r), !0)
}

function F(e) {
  let {
    guilds: t
  } = e;
  C = {}, L = 0, v = new Set, H(null);
  let {
    length: n
  } = t;
  for (let e = 0; e < n; e++) {
    let n = t[e];
    null != n && H(n.id)
  }
}

function Y(e) {
  let {
    guilds: t,
    readState: n
  } = e;
  C = {}, L = 0, v = new Set;
  let i = n.entries.length < 500,
    r = new Set;
  for (let e of (i && n.entries.forEach(e => {
      if (null != e.mention_count && e.mention_count > 0) {
        if (null == e.read_state_type || e.read_state_type === R.W.CHANNEL) {
          var t;
          r.add(null === (t = E.Z.getChannel(e.id)) || void 0 === t ? void 0 : t.guild_id)
        } else r.add(e.id)
      }
    }), H(null), t)) H(e.id, i ? r.has(e.id) : void 0)
}

function j() {
  for (let e of (C = {}, v = new Set, H(null), Object.values(I.Z.getGuildIds()))) H(e)
}

function W(e) {
  let {
    guild: t
  } = e;
  return H(t.id)
}

function K(e) {
  let {
    guild: t
  } = e;
  return null != C[t.id] && (delete C[t.id], v.delete(t.id), L++, !0)
}

function z(e) {
  let {
    channel: {
      id: t,
      guild_id: n
    }
  } = e;
  return V(n, [t])
}

function q() {
  let e = E.Z.getChannel(S.Z.getChannelId());
  return null != e && V(e.getGuildId(), [e.id])
}

function X(e) {
  let {
    user: t,
    guildId: n
  } = e;
  return t.id === d.default.getId() && H(n)
}

function Q(e) {
  let {
    channelId: t
  } = e, n = E.Z.getChannel(t);
  return null != n && V(n.getGuildId(), [n.id])
}

function J(e) {
  let {
    channelId: t
  } = e, n = E.Z.getChannel(t);
  if (null == n) return !1;
  if (null != n.guild_id) {
    let e = M(n.guild_id);
    if (((n.isThread() ? !l.Z.hasJoined(n.id) || l.Z.isMuted(n.id) : N.ZP.isGuildOrCategoryOrChannelMuted(n.guild_id, n.id)) || e.unreadByType[R.W.CHANNEL]) && 0 === h.ZP.getMentionCount(t)) return !1
  }
  return V(n.getGuildId(), [n.id])
}

function $(e) {
  let {
    channelId: t,
    guildId: n
  } = e;
  return n !== m.I_8 && null != t && V(n, [t])
}

function ee(e) {
  let {
    channel: t
  } = e;
  return V(t.getGuildId(), [t.id])
}

function et(e) {
  let {
    channels: t
  } = e;
  return r()(t).groupBy(e => e.getGuildId()).reduce((e, t, n) => V(n, t.map(e => e.id)) || e, !1)
}

function en(e) {
  let {
    channels: t
  } = e;
  return r()(t).map(e => {
    let {
      channelId: t
    } = e;
    return t
  }).filter(e => null != E.Z.getChannel(e)).groupBy(e => {
    var t;
    return null === (t = E.Z.getChannel(e)) || void 0 === t ? void 0 : t.getGuildId()
  }).reduce((e, t, n) => V(n, t) || e, !1)
}

function ei(e) {
  let {
    channel: t
  } = e;
  return V(t.getGuildId(), [t.id, t.parent_id])
}

function er(e) {
  let {
    guildScheduledEvent: t
  } = e;
  return Z(t.guild_id, R.W.GUILD_EVENT)
}

function es(e) {
  let {
    guildScheduledEvent: t
  } = e;
  return Z(t.guild_id, R.W.GUILD_EVENT)
}

function eo(e) {
  let {
    id: t,
    ackType: n
  } = e;
  return Z(t, n)
}

function ea(e) {
  let {
    id: t,
    guildId: n
  } = e;
  return V(n, [t])
}

function el(e) {
  return (0, u.s)(e) && V(e.guildId, [e.id])
}

function eu(e) {
  let {
    threads: t,
    guildId: n
  } = e;
  return V(n, t.filter(e => l.Z.hasJoined(e.id)).map(e => e.id))
}

function e_(e) {
  return !!(e.channels.length > 0) && V(e.guildId, e.channels.map(e => e.id))
}

function ec(e) {
  let {
    guildId: t
  } = e;
  return H(t)
}

function ed(e) {
  let {
    guildId: t
  } = e;
  return H(t)
}

function eE(e) {
  let {
    userGuildSettings: t
  } = e, n = new Set(t.map(e => {
    var t;
    return null !== (t = e.guild_id) && void 0 !== t ? t : g
  }));
  return c.default.keys(C).reduce((e, t) => n.has(t) && H(t) || e, !1)
}

function eI() {
  for (let e in C) C[e].ncMentionCount = 0
}

function eT(e) {
  let {
    guildId: t
  } = e;
  return H(t)
}

function eh() {
  return !1
}
class eS extends f.Z {
  initialize() {
    this.waitFor(E.Z, S.Z, h.ZP, T.Z, d.default, A.default, N.ZP, a.Z, l.Z, s.Z)
  }
  loadCache() {
    let e = this.readSnapshot(eS.LATEST_SNAPSHOT_VERSION);
    null != e && (C = e.guilds, v = new Set(e.unreadGuilds))
  }
  takeSnapshot() {
    return {
      version: eS.LATEST_SNAPSHOT_VERSION,
      data: {
        guilds: C,
        unreadGuilds: Array.from(v)
      }
    }
  }
  hasAnyUnread() {
    return v.size > 0
  }
  getStoreChangeSentinel() {
    return L
  }
  getMutableUnreadGuilds() {
    return v
  }
  getMutableGuildStates() {
    return C
  }
  hasUnread(e) {
    return v.has(e)
  }
  getMentionCount(e) {
    return M(e).mentionCount
  }
  getMutableGuildReadState(e) {
    return M(e)
  }
  getGuildHasUnreadIgnoreMuted(e) {
    let t = E.Z.getMutableGuildChannelsForGuild(e);
    for (let e in t) {
      let n = t[e];
      if (null != n) {
        if ((!n.isGuildVocal() || 0 !== h.ZP.getMentionCount(e)) && T.Z.can(n.accessPermissions, n) && h.ZP.hasUnreadOrMentions(e)) return !0
      }
    }
    let n = a.Z.getActiveJoinedThreadsForGuild(e);
    for (let e in n)
      if (null != E.Z.getChannel(e)) {
        for (let t in n[e])
          if (h.ZP.hasUnreadOrMentions(t)) return !0
      } return !!h.ZP.hasUnreadOrMentions(e, R.W.GUILD_EVENT) || !1
  }
  getTotalMentionCount(e) {
    let t = 0;
    for (let n in C) {
      let i = C[n];
      if (!0 !== e || n !== g) t += i.mentionCount
    }
    return t
  }
  getTotalNotificationsMentionCount(e) {
    let t = 0;
    for (let n in C) {
      let i = C[n];
      if (!0 !== e || n !== g) t += i.ncMentionCount
    }
    return t
  }
  getPrivateChannelMentionCount() {
    var e;
    let t = C[g];
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
  getMentionCountForPrivateChannel(e) {
    var t, n;
    return null !== (n = null === (t = C[g]) || void 0 === t ? void 0 : t.mentionCounts[e]) && void 0 !== n ? n : 0
  }
  getGuildChangeSentinel(e) {
    return M(e).sentinel
  }
  constructor() {
    super({
      CONNECTION_OPEN: Y,
      OVERLAY_INITIALIZE: F,
      CACHE_LOADED_LAZY: () => this.loadCache(),
      GUILD_CREATE: W,
      GUILD_DELETE: K,
      MESSAGE_CREATE: J,
      MESSAGE_ACK: Q,
      BULK_ACK: en,
      UPDATE_CHANNEL_DIMENSIONS: Q,
      CHANNEL_SELECT: $,
      CHANNEL_DELETE: z,
      WINDOW_FOCUS: q,
      GUILD_ACK: ec,
      GUILD_ROLE_CREATE: ed,
      GUILD_ROLE_DELETE: ed,
      GUILD_ROLE_UPDATE: ed,
      CHANNEL_CREATE: ee,
      CHANNEL_UPDATES: et,
      THREAD_CREATE: ei,
      THREAD_UPDATE: ei,
      THREAD_DELETE: ei,
      THREAD_LIST_SYNC: eu,
      THREAD_MEMBER_UPDATE: ea,
      THREAD_MEMBERS_UPDATE: el,
      PASSIVE_UPDATE_V2: e_,
      GUILD_MEMBER_UPDATE: X,
      USER_GUILD_SETTINGS_FULL_UPDATE: eE,
      USER_GUILD_SETTINGS_CHANNEL_UPDATE: eT,
      USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: eT,
      USER_GUILD_SETTINGS_GUILD_UPDATE: eT,
      USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: eT,
      GUILD_FEATURE_ACK: eo,
      GUILD_SCHEDULED_EVENT_CREATE: er,
      GUILD_SCHEDULED_EVENT_UPDATE: er,
      GUILD_SCHEDULED_EVENT_DELETE: es,
      CHANNEL_RTC_UPDATE_CHAT_OPEN: Q,
      LOAD_MESSAGES_SUCCESS: Q,
      CHANNEL_ACK: Q,
      CHANNEL_LOCAL_ACK: Q,
      NOTIFICATION_SETTINGS_UPDATE: j,
      RECOMPUTE_READ_STATES: j,
      VOICE_CHANNEL_SELECT: Q,
      ENABLE_AUTOMATIC_ACK: Q,
      RESORT_THREADS: Q,
      NOTIFICATION_CENTER_CLEAR_GUILD_MENTIONS: eI,
      TRY_ACK: Q,
      LOAD_GRAVITY_DEHYDRATED: eh
    })
  }
}
p(eS, "displayName", "GuildReadStateStore"), p(eS, "LATEST_SNAPSHOT_VERSION", 1), t.default = new eS