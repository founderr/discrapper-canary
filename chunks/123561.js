"use strict";
n.r(t), n.d(t, {
  default: function() {
    return W
  }
}), n("222007");
var i = n("917351"),
  o = n.n(i),
  l = n("446674"),
  a = n("913144"),
  u = n("191225"),
  d = n("203288"),
  s = n("398604"),
  E = n("401690"),
  r = n("755624"),
  _ = n("374363"),
  A = n("271938"),
  c = n("870691"),
  C = n("42203"),
  T = n("816092"),
  S = n("546463"),
  I = n("957255"),
  f = n("660478"),
  N = n("18494"),
  O = n("282109"),
  L = n("449008"),
  D = n("299039"),
  p = n("319839"),
  R = n("397336");
let h = null,
  G = null,
  g = new p.default;

function b() {
  let e = N.default.getChannelId(),
    t = N.default.getVoiceChannelId();
  return h = e, G = t, g.clear()
}

function M(e) {
  let {
    guild: {
      id: t
    }
  } = e;
  return g.clearGuildId(t)
}

function P(e) {
  let {
    channel: {
      guild_id: t
    }
  } = e;
  return g.clearGuildId(t)
}

function m(e) {
  let {
    guildId: t
  } = e;
  return g.clearGuildId(t)
}

function U(e) {
  let {
    channelId: t
  } = e;
  return g.nonPositionalChannelIdUpdate(t)
}

function y() {
  return null != h && g.nonPositionalChannelIdUpdate(h)
}

function K(e) {
  let {
    channel: t
  } = e;
  return g.nonPositionalChannelIdUpdate(t.id)
}

function H(e) {
  let {
    id: t
  } = e;
  return g.nonPositionalChannelIdUpdate(t)
}

function B() {
  let e = N.default.getChannelId(),
    t = N.default.getVoiceChannelId(),
    n = h !== e || G !== t;
  return !!n && (o([h, G, e, t]).uniq().forEach(e => {
    null != e && g.nonPositionalChannelIdUpdate(e) && (n = !0)
  }), h = e, G = t, !0)
}

function v(e) {
  let {
    id: t
  } = e, n = C.default.getChannel(t);
  return null == n ? g.clearGuildId(t) : g.clearGuildId(n.guild_id)
}

function V(e) {
  let {
    guildId: t
  } = e;
  return g.clearGuildId(t)
}

function F() {
  return g.updateSubtitles()
}

function Y(e) {
  let {
    guildScheduledEvent: t
  } = e;
  return g.updateSubtitles(t.guild_id)
}
class w extends l.default.Store {
  initialize() {
    this.waitFor(E.default, A.default, c.default, C.default, T.default, u.default, S.default, d.default, s.default, r.default, I.default, f.default, N.default, O.default, _.default)
  }
  getGuild(e, t) {
    let n = g.getGuild(e, t);
    return {
      guildChannelsVersion: n.version,
      guildChannels: n
    }
  }
  getGuildWithoutChangingCommunityRows(e) {
    let t = g.getGuildWithoutCommunityRows(e);
    return {
      guildChannelsVersion: t.version,
      guildChannels: t
    }
  }
  recentsChannelCount(e) {
    if (null == e) return 0;
    let t = g.getGuildWithoutCommunityRows(e),
      n = t.getCategoryFromSection(t.recentsSectionNumber);
    return n.getShownChannelIds().length
  }
}
w.displayName = "ChannelListStore";
var W = new w(a.default, {
  APPLICATION_FETCH_FAIL: F,
  APPLICATION_FETCH_SUCCESS: F,
  APPLICATION_FETCH: F,
  APPLICATIONS_FETCH_FAIL: F,
  APPLICATIONS_FETCH_SUCCESS: F,
  APPLICATIONS_FETCH: F,
  BACKGROUND_SYNC: b,
  BULK_ACK: function(e) {
    let {
      channels: t
    } = e, n = !1;
    return o(t).map(e => {
      var t;
      return null === (t = C.default.getChannel(e.channelId)) || void 0 === t ? void 0 : t.guild_id
    }).filter(L.isNotNullish).uniq().forEach(e => {
      g.clearGuildId(e) && (n = !0)
    }), n
  },
  BULK_CLEAR_RECENTS: m,
  CACHE_LOADED_LAZY: b,
  CATEGORY_COLLAPSE_ALL: m,
  CATEGORY_COLLAPSE: v,
  CATEGORY_EXPAND_ALL: m,
  CATEGORY_EXPAND: v,
  CHANNEL_ACK: U,
  CHANNEL_COLLAPSE: function(e) {
    var t;
    let {
      channelId: n
    } = e;
    return g.clearGuildId(null === (t = C.default.getChannel(n)) || void 0 === t ? void 0 : t.guild_id)
  },
  CHANNEL_CREATE: P,
  CHANNEL_DELETE: P,
  CHANNEL_LOCAL_ACK: U,
  CHANNEL_MUTE_EXPIRED: m,
  CHANNEL_RTC_UPDATE_CHAT_OPEN: U,
  CHANNEL_SELECT: B,
  CHANNEL_STATUSES: function(e) {
    return g.clearGuildId(e.guildId)
  },
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e, n = !1;
    return o(t).map(e => e.guild_id).uniq().forEach(e => {
      g.clearGuildId(e) && (n = !0)
    }), n
  },
  CONNECTION_OPEN_SUPPLEMENTAL: F,
  CONNECTION_OPEN: b,
  CURRENT_USER_UPDATE: b,
  DECAY_READ_STATES: b,
  DEV_TOOLS_DESIGN_TOGGLE_SET: b,
  DISABLE_AUTOMATIC_ACK: U,
  DISMISS_FAVORITE_SUGGESTION: function(e) {
    let {
      channelId: t
    } = e;
    return g.nonPositionalChannelIdUpdate(t)
  },
  DRAWER_CLOSE: y,
  DRAWER_OPEN: y,
  EMBEDDED_ACTIVITY_INBOUND_UPDATE: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    return g.updateSubtitles(t, n)
  },
  EMBEDDED_ACTIVITY_LAUNCH_START: function(e) {
    F()
  },
  EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: F,
  ENABLE_AUTOMATIC_ACK: U,
  FETCH_GUILD_EVENTS_FOR_GUILD: function(e) {
    let {
      guildId: t
    } = e;
    return g.updateSubtitles(t)
  },
  GAMES_DATABASE_FETCH_FAIL: F,
  GAMES_DATABASE_FETCH: F,
  GAMES_DATABASE_UPDATE: F,
  GUILD_APPLICATIONS_FETCH_SUCCESS: F,
  GUILD_CREATE: M,
  GUILD_DELETE: M,
  GUILD_FEED_FETCH_SUCCESS: F,
  GUILD_MEMBER_UPDATE: function(e) {
    let {
      guildId: t,
      user: n
    } = e;
    return A.default.getId() === n.id && g.clearGuildId(t)
  },
  GUILD_MUTE_EXPIRED: m,
  GUILD_ROLE_CREATE: m,
  GUILD_ROLE_DELETE: m,
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: m,
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: m,
  GUILD_ROLE_UPDATE: m,
  GUILD_SCHEDULED_EVENT_CREATE: Y,
  GUILD_SCHEDULED_EVENT_DELETE: Y,
  GUILD_SCHEDULED_EVENT_UPDATE: Y,
  GUILD_TOGGLE_COLLAPSE_MUTED: m,
  GUILD_UPDATE: M,
  IMPERSONATE_STOP: m,
  IMPERSONATE_UPDATE: m,
  LOAD_MESSAGES_SUCCESS: U,
  MESSAGE_ACK: U,
  MESSAGE_CREATE: function(e) {
    let {
      channelId: t
    } = e;
    return g.nonPositionalChannelIdUpdate(t)
  },
  MESSAGE_DELETE_BULK: U,
  MESSAGE_DELETE: U,
  NOTIFICATION_SETTINGS_UPDATE: b,
  OVERLAY_INITIALIZE: b,
  PASSIVE_UPDATE_V1: function(e) {
    return null != e.channels && (g.clearGuildId(e.guildId), !0)
  },
  RECOMPUTE_READ_STATES: b,
  RESORT_THREADS: U,
  SET_RECENTLY_ACTIVE_COLLAPSED: b,
  THREAD_CREATE: K,
  THREAD_DELETE: function(e) {
    let {
      channel: t
    } = e;
    return g.nonPositionalChannelUpdate(t)
  },
  THREAD_LIST_SYNC: m,
  THREAD_MEMBER_UPDATE: H,
  THREAD_MEMBERS_UPDATE: H,
  THREAD_UPDATE: K,
  TRY_ACK: U,
  UPDATE_CHANNEL_DIMENSIONS: U,
  UPDATE_CHANNEL_LIST_SUBTITLES: function(e) {
    let {
      guildId: t
    } = e;
    g.updateSubtitles(t)
  },
  USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: m,
  USER_GUILD_SETTINGS_CHANNEL_UPDATE: m,
  USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
    let {
      userGuildSettings: t
    } = e;
    t.forEach(e => {
      let {
        guild_id: t
      } = e;
      return g.clearGuildId(t)
    })
  },
  USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: m,
  USER_GUILD_SETTINGS_GUILD_UPDATE: m,
  USER_SETTINGS_PROTO_UPDATE: function(e) {
    var t;
    let {
      settings: n
    } = e;
    if (n.type !== R.UserSettingsTypes.PRELOADED_USER_SETTINGS) return !1;
    let i = null === (t = n.proto.guilds) || void 0 === t ? void 0 : t.guilds,
      o = !1;
    return null != i && D.default.keys(i).forEach(e => {
      let t = i[e].guildRecentsDismissedAt;
      null != t && (o = g.updateRecentsCategory(e) || o)
    }), o
  },
  VOICE_CATEGORY_COLLAPSE: V,
  VOICE_CATEGORY_EXPAND: V,
  VOICE_CHANNEL_SELECT: B,
  VOICE_CHANNEL_STATUS_UPDATE: function(e) {
    return g.nonPositionalChannelIdUpdate(e.id)
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e, n = B(), i = new Set;
    for (let {
        channelId: e,
        oldChannelId: o
      }
      of t) null != o && !i.has(o) && (g.nonPositionalChannelIdUpdate(o) && (n = !0), i.add(o)), null != e && !i.has(e) && (g.nonPositionalChannelIdUpdate(e) && (n = !0), i.add(e));
    return n
  },
  WINDOW_FOCUS: y
})