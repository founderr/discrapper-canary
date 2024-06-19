t(47120);
var l, i, E, a, r = t(392711),
  o = t.n(r),
  u = t(442837),
  _ = t(570140),
  d = t(317381),
  s = t(430198),
  C = t(924301),
  S = t(601070),
  A = t(569471),
  T = t(581883),
  c = t(314897),
  I = t(680089),
  L = t(592125),
  D = t(58468),
  N = t(77498),
  U = t(496675),
  h = t(306680),
  P = t(944486),
  R = t(9156),
  f = t(823379),
  g = t(709054),
  O = t(540126),
  G = t(526761);
let m = null,
  H = null,
  Z = new O.ZP;

function M() {
  let e = P.Z.getChannelId(),
    n = P.Z.getVoiceChannelId();
  return m = e, H = n, Z.clear()
}

function p(e) {
  let {
    guild: {
      id: n
    }
  } = e;
  return Z.clearGuildId(n)
}

function x(e) {
  let {
    channel: {
      guild_id: n
    }
  } = e;
  return Z.clearGuildId(n)
}

function v(e) {
  let {
    guildId: n
  } = e;
  return Z.clearGuildId(n)
}

function B(e) {
  let {
    channelId: n
  } = e;
  return Z.nonPositionalChannelIdUpdate(n)
}

function j() {
  return null != m && Z.nonPositionalChannelIdUpdate(m)
}

function F(e) {
  let {
    channel: n
  } = e;
  return Z.nonPositionalChannelIdUpdate(n.id)
}

function y(e) {
  let {
    id: n
  } = e;
  return Z.nonPositionalChannelIdUpdate(n)
}

function w() {
  let e = P.Z.getChannelId(),
    n = P.Z.getVoiceChannelId(),
    t = m !== e || H !== n;
  return !!t && (o()([m, H, e, n]).uniq().forEach(e => {
    null != e && Z.nonPositionalChannelIdUpdate(e) && (t = !0)
  }), m = e, H = n, !0)
}

function V(e) {
  let {
    id: n
  } = e, t = L.Z.getChannel(n);
  return null == t ? Z.clearGuildId(n) : Z.clearGuildId(t.guild_id)
}

function b(e) {
  let {
    guildId: n
  } = e;
  return Z.clearGuildId(n)
}

function Y() {
  return Z.updateSubtitles()
}

function k(e) {
  let {
    guildScheduledEvent: n
  } = e;
  return Z.updateSubtitles(n.guild_id)
}
class K extends(l = u.ZP.Store) {
  initialize() {
    this.waitFor(S.Z, c.default, I.Z, L.Z, D.Z, d.ZP, N.Z, s.Z, C.ZP, A.Z, U.Z, h.ZP, P.Z, R.ZP, T.Z)
  }
  getGuild(e, n) {
    let t = Z.getGuild(e, n);
    return {
      guildChannelsVersion: t.version,
      guildChannels: t
    }
  }
  getGuildWithoutChangingCommunityRows(e) {
    let n = Z.getGuildWithoutCommunityRows(e);
    return {
      guildChannelsVersion: n.version,
      guildChannels: n
    }
  }
  recentsChannelCount(e) {
    if (null == e) return 0;
    let n = Z.getGuildWithoutCommunityRows(e);
    return n.getCategoryFromSection(n.recentsSectionNumber).getShownChannelIds().length
  }
}
a = "ChannelListStore", (E = "displayName") in(i = K) ? Object.defineProperty(i, E, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[E] = a, n.Z = new K(_.Z, {
  APPLICATION_FETCH_FAIL: Y,
  APPLICATION_FETCH_SUCCESS: Y,
  APPLICATION_FETCH: Y,
  APPLICATIONS_FETCH_FAIL: Y,
  APPLICATIONS_FETCH_SUCCESS: Y,
  APPLICATIONS_FETCH: Y,
  BACKGROUND_SYNC: M,
  BULK_ACK: function(e) {
    let {
      channels: n
    } = e, t = !1;
    return o()(n).map(e => {
      var n;
      return null === (n = L.Z.getChannel(e.channelId)) || void 0 === n ? void 0 : n.guild_id
    }).filter(f.lm).uniq().forEach(e => {
      Z.clearGuildId(e) && (t = !0)
    }), t
  },
  BULK_CLEAR_RECENTS: v,
  CACHE_LOADED_LAZY: M,
  CATEGORY_COLLAPSE_ALL: v,
  CATEGORY_COLLAPSE: V,
  CATEGORY_EXPAND_ALL: v,
  CATEGORY_EXPAND: V,
  CHANNEL_ACK: B,
  CHANNEL_COLLAPSE: function(e) {
    var n;
    let {
      channelId: t
    } = e;
    return Z.clearGuildId(null === (n = L.Z.getChannel(t)) || void 0 === n ? void 0 : n.guild_id)
  },
  CHANNEL_CREATE: x,
  CHANNEL_DELETE: x,
  CHANNEL_LOCAL_ACK: B,
  CHANNEL_MUTE_EXPIRED: v,
  CHANNEL_RTC_UPDATE_CHAT_OPEN: B,
  CHANNEL_SELECT: w,
  CHANNEL_STATUSES: function(e) {
    return Z.clearGuildId(e.guildId)
  },
  CHANNEL_UPDATES: function(e) {
    let {
      channels: n
    } = e, t = !1;
    return o()(n).map(e => e.guild_id).uniq().forEach(e => {
      Z.clearGuildId(e) && (t = !0)
    }), t
  },
  CONNECTION_OPEN_SUPPLEMENTAL: Y,
  CONNECTION_OPEN: M,
  CURRENT_USER_UPDATE: M,
  DECAY_READ_STATES: M,
  DEV_TOOLS_DESIGN_TOGGLE_SET: M,
  DISABLE_AUTOMATIC_ACK: B,
  DISMISS_FAVORITE_SUGGESTION: function(e) {
    let {
      channelId: n
    } = e;
    return Z.nonPositionalChannelIdUpdate(n)
  },
  DRAWER_CLOSE: j,
  DRAWER_OPEN: j,
  EMBEDDED_ACTIVITY_UPDATE: function(e) {
    let {
      guildId: n,
      channelId: t
    } = e;
    return Z.updateSubtitles(n, t)
  },
  EMBEDDED_ACTIVITY_UPDATE_V2: function(e) {
    let {
      location: n
    } = e;
    return Z.updateSubtitles(n.guild_id, n.channel_id)
  },
  EMBEDDED_ACTIVITY_LAUNCH_START: function(e) {
    Y()
  },
  EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: Y,
  ENABLE_AUTOMATIC_ACK: B,
  FETCH_GUILD_EVENTS_FOR_GUILD: function(e) {
    let {
      guildId: n
    } = e;
    return Z.updateSubtitles(n)
  },
  GAMES_DATABASE_FETCH_FAIL: Y,
  GAMES_DATABASE_FETCH: Y,
  GAMES_DATABASE_UPDATE: Y,
  GUILD_APPLICATIONS_FETCH_SUCCESS: Y,
  GUILD_CREATE: p,
  GUILD_DELETE: p,
  GUILD_MEMBER_UPDATE: function(e) {
    let {
      guildId: n,
      user: t
    } = e;
    return c.default.getId() === t.id && Z.clearGuildId(n)
  },
  GUILD_MUTE_EXPIRED: v,
  GUILD_ROLE_CREATE: v,
  GUILD_ROLE_DELETE: v,
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: v,
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: v,
  GUILD_ROLE_UPDATE: v,
  GUILD_SCHEDULED_EVENT_CREATE: k,
  GUILD_SCHEDULED_EVENT_DELETE: k,
  GUILD_SCHEDULED_EVENT_UPDATE: k,
  GUILD_TOGGLE_COLLAPSE_MUTED: v,
  GUILD_UPDATE: p,
  IMPERSONATE_STOP: v,
  IMPERSONATE_UPDATE: v,
  LOAD_CHANNELS: function(e) {
    e.channels.forEach(e => {
      let {
        guildId: n
      } = e;
      return Z.clearGuildId(n)
    })
  },
  LOAD_MESSAGES_SUCCESS: B,
  MESSAGE_ACK: B,
  MESSAGE_CREATE: function(e) {
    let {
      channelId: n
    } = e;
    return Z.nonPositionalChannelIdUpdate(n)
  },
  MESSAGE_DELETE_BULK: B,
  MESSAGE_DELETE: B,
  NOTIFICATION_SETTINGS_UPDATE: M,
  OVERLAY_INITIALIZE: M,
  PASSIVE_UPDATE_V2: function(e) {
    return Z.clearGuildId(e.guildId)
  },
  RECOMPUTE_READ_STATES: M,
  RESORT_THREADS: B,
  SET_RECENTLY_ACTIVE_COLLAPSED: M,
  THREAD_CREATE: F,
  THREAD_DELETE: function(e) {
    let {
      channel: n
    } = e;
    return Z.nonPositionalChannelUpdate(n)
  },
  THREAD_LIST_SYNC: v,
  THREAD_MEMBER_UPDATE: y,
  THREAD_MEMBERS_UPDATE: y,
  THREAD_UPDATE: F,
  TRY_ACK: B,
  UPDATE_CHANNEL_DIMENSIONS: B,
  UPDATE_CHANNEL_LIST_SUBTITLES: function(e) {
    let {
      guildId: n
    } = e;
    Z.updateSubtitles(n)
  },
  USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: v,
  USER_GUILD_SETTINGS_CHANNEL_UPDATE: v,
  USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
    let {
      userGuildSettings: n
    } = e;
    n.forEach(e => {
      let {
        guild_id: n
      } = e;
      return Z.clearGuildId(n)
    })
  },
  USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: v,
  USER_GUILD_SETTINGS_GUILD_UPDATE: v,
  USER_SETTINGS_PROTO_UPDATE: function(e) {
    var n;
    let {
      settings: t
    } = e;
    if (t.type !== G.yP.PRELOADED_USER_SETTINGS) return !1;
    let l = null === (n = t.proto.guilds) || void 0 === n ? void 0 : n.guilds,
      i = !1;
    return null != l && g.default.keys(l).forEach(e => {
      null != l[e].guildRecentsDismissedAt && (i = Z.updateRecentsCategory(e) || i)
    }), i
  },
  VOICE_CATEGORY_COLLAPSE: b,
  VOICE_CATEGORY_EXPAND: b,
  VOICE_CHANNEL_SELECT: w,
  VOICE_CHANNEL_STATUS_UPDATE: function(e) {
    return Z.nonPositionalChannelIdUpdate(e.id)
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: n
    } = e, t = w(), l = new Set;
    for (let {
        channelId: e,
        oldChannelId: i
      }
      of n) null != i && !l.has(i) && (Z.nonPositionalChannelIdUpdate(i) && (t = !0), l.add(i)), null != e && !l.has(e) && (Z.nonPositionalChannelIdUpdate(e) && (t = !0), l.add(e));
    return t
  },
  WINDOW_FOCUS: j
})