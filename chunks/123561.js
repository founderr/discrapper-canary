"use strict";
n.r(t), n.d(t, {
  default: function() {
    return k
  }
}), n("222007");
var l = n("917351"),
  i = n.n(l),
  a = n("446674"),
  u = n("913144"),
  r = n("191225"),
  d = n("203288"),
  o = n("398604"),
  s = n("401690"),
  E = n("755624"),
  c = n("374363"),
  C = n("271938"),
  f = n("870691"),
  _ = n("42203"),
  A = n("816092"),
  T = n("546463"),
  h = n("957255"),
  S = n("660478"),
  L = n("18494"),
  I = n("282109"),
  N = n("449008"),
  g = n("299039"),
  D = n("319839"),
  U = n("397336");
let R = null,
  p = null,
  v = new D.default;

function O() {
  let e = L.default.getChannelId(),
    t = L.default.getVoiceChannelId();
  return R = e, p = t, v.clear()
}

function P(e) {
  let {
    guild: {
      id: t
    }
  } = e;
  return v.clearGuildId(t)
}

function m(e) {
  let {
    channel: {
      guild_id: t
    }
  } = e;
  return v.clearGuildId(t)
}

function G(e) {
  let {
    guildId: t
  } = e;
  return v.clearGuildId(t)
}

function x(e) {
  let {
    channelId: t
  } = e;
  return v.nonPositionalChannelIdUpdate(t)
}

function H() {
  return null != R && v.nonPositionalChannelIdUpdate(R)
}

function M(e) {
  let {
    channel: t
  } = e;
  return v.nonPositionalChannelIdUpdate(t.id)
}

function w(e) {
  let {
    id: t
  } = e;
  return v.nonPositionalChannelIdUpdate(t)
}

function y() {
  let e = L.default.getChannelId(),
    t = L.default.getVoiceChannelId(),
    n = R !== e || p !== t;
  return !!n && (i([R, p, e, t]).uniq().forEach(e => {
    null != e && v.nonPositionalChannelIdUpdate(e) && (n = !0)
  }), R = e, p = t, !0)
}

function j(e) {
  let {
    id: t
  } = e, n = _.default.getChannel(t);
  return null == n ? v.clearGuildId(t) : v.clearGuildId(n.guild_id)
}

function V(e) {
  let {
    guildId: t
  } = e;
  return v.clearGuildId(t)
}

function B() {
  return v.updateSubtitles()
}

function F(e) {
  let {
    guildScheduledEvent: t
  } = e;
  return v.updateSubtitles(t.guild_id)
}
class b extends a.default.Store {
  initialize() {
    this.waitFor(s.default, C.default, f.default, _.default, A.default, r.default, T.default, d.default, o.default, E.default, h.default, S.default, L.default, I.default, c.default)
  }
  getGuild(e, t) {
    let n = v.getGuild(e, t);
    return {
      guildChannelsVersion: n.version,
      guildChannels: n
    }
  }
  getGuildWithoutChangingCommunityRows(e) {
    let t = v.getGuildWithoutCommunityRows(e);
    return {
      guildChannelsVersion: t.version,
      guildChannels: t
    }
  }
  recentsChannelCount(e) {
    if (null == e) return 0;
    let t = v.getGuildWithoutCommunityRows(e),
      n = t.getCategoryFromSection(t.recentsSectionNumber);
    return n.getShownChannelIds().length
  }
}
b.displayName = "ChannelListStore";
var k = new b(u.default, {
  APPLICATION_FETCH_FAIL: B,
  APPLICATION_FETCH_SUCCESS: B,
  APPLICATION_FETCH: B,
  APPLICATIONS_FETCH_FAIL: B,
  APPLICATIONS_FETCH_SUCCESS: B,
  APPLICATIONS_FETCH: B,
  BACKGROUND_SYNC: O,
  BULK_ACK: function(e) {
    let {
      channels: t
    } = e, n = !1;
    return i(t).map(e => {
      var t;
      return null === (t = _.default.getChannel(e.channelId)) || void 0 === t ? void 0 : t.guild_id
    }).filter(N.isNotNullish).uniq().forEach(e => {
      v.clearGuildId(e) && (n = !0)
    }), n
  },
  BULK_CLEAR_RECENTS: G,
  CACHE_LOADED_LAZY: O,
  CATEGORY_COLLAPSE_ALL: G,
  CATEGORY_COLLAPSE: j,
  CATEGORY_EXPAND_ALL: G,
  CATEGORY_EXPAND: j,
  CHANNEL_ACK: x,
  CHANNEL_COLLAPSE: function(e) {
    var t;
    let {
      channelId: n
    } = e;
    return v.clearGuildId(null === (t = _.default.getChannel(n)) || void 0 === t ? void 0 : t.guild_id)
  },
  CHANNEL_CREATE: m,
  CHANNEL_DELETE: m,
  CHANNEL_LOCAL_ACK: x,
  CHANNEL_MUTE_EXPIRED: G,
  CHANNEL_RTC_UPDATE_CHAT_OPEN: x,
  CHANNEL_SELECT: y,
  CHANNEL_STATUSES: function(e) {
    return v.clearGuildId(e.guildId)
  },
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e, n = !1;
    return i(t).map(e => e.guild_id).uniq().forEach(e => {
      v.clearGuildId(e) && (n = !0)
    }), n
  },
  CONNECTION_OPEN_SUPPLEMENTAL: B,
  CONNECTION_OPEN: O,
  CURRENT_USER_UPDATE: O,
  DECAY_READ_STATES: O,
  DEV_TOOLS_DESIGN_TOGGLE_SET: O,
  DISABLE_AUTOMATIC_ACK: x,
  DISMISS_FAVORITE_SUGGESTION: function(e) {
    let {
      channelId: t
    } = e;
    return v.nonPositionalChannelIdUpdate(t)
  },
  DRAWER_CLOSE: H,
  DRAWER_OPEN: H,
  EMBEDDED_ACTIVITY_INBOUND_UPDATE: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    return v.updateSubtitles(t, n)
  },
  EMBEDDED_ACTIVITY_LAUNCH_START: function(e) {
    B()
  },
  EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: B,
  ENABLE_AUTOMATIC_ACK: x,
  FETCH_GUILD_EVENTS_FOR_GUILD: function(e) {
    let {
      guildId: t
    } = e;
    return v.updateSubtitles(t)
  },
  GAMES_DATABASE_FETCH_FAIL: B,
  GAMES_DATABASE_FETCH: B,
  GAMES_DATABASE_UPDATE: B,
  GUILD_APPLICATIONS_FETCH_SUCCESS: B,
  GUILD_CREATE: P,
  GUILD_DELETE: P,
  GUILD_FEED_FETCH_SUCCESS: B,
  GUILD_MEMBER_UPDATE: function(e) {
    let {
      guildId: t,
      user: n
    } = e;
    return C.default.getId() === n.id && v.clearGuildId(t)
  },
  GUILD_MUTE_EXPIRED: G,
  GUILD_ROLE_CREATE: G,
  GUILD_ROLE_DELETE: G,
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: G,
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: G,
  GUILD_ROLE_UPDATE: G,
  GUILD_SCHEDULED_EVENT_CREATE: F,
  GUILD_SCHEDULED_EVENT_DELETE: F,
  GUILD_SCHEDULED_EVENT_UPDATE: F,
  GUILD_TOGGLE_COLLAPSE_MUTED: G,
  GUILD_UPDATE: P,
  IMPERSONATE_STOP: G,
  IMPERSONATE_UPDATE: G,
  LOAD_MESSAGES_SUCCESS: x,
  MESSAGE_ACK: x,
  MESSAGE_CREATE: function(e) {
    let {
      channelId: t
    } = e;
    return v.nonPositionalChannelIdUpdate(t)
  },
  MESSAGE_DELETE_BULK: x,
  MESSAGE_DELETE: x,
  NOTIFICATION_SETTINGS_UPDATE: O,
  OVERLAY_INITIALIZE: O,
  PASSIVE_UPDATE_V1: function(e) {
    return null != e.channels && (v.clearGuildId(e.guildId), !0)
  },
  RECOMPUTE_READ_STATES: O,
  RESORT_THREADS: x,
  SET_RECENTLY_ACTIVE_COLLAPSED: O,
  THREAD_CREATE: M,
  THREAD_DELETE: function(e) {
    let {
      channel: t
    } = e;
    return v.nonPositionalChannelUpdate(t)
  },
  THREAD_LIST_SYNC: G,
  THREAD_MEMBER_UPDATE: w,
  THREAD_MEMBERS_UPDATE: w,
  THREAD_UPDATE: M,
  TRY_ACK: x,
  UPDATE_CHANNEL_DIMENSIONS: x,
  UPDATE_CHANNEL_LIST_SUBTITLES: function(e) {
    let {
      guildId: t
    } = e;
    v.updateSubtitles(t)
  },
  USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: G,
  USER_GUILD_SETTINGS_CHANNEL_UPDATE: G,
  USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
    let {
      userGuildSettings: t
    } = e;
    t.forEach(e => {
      let {
        guild_id: t
      } = e;
      return v.clearGuildId(t)
    })
  },
  USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: G,
  USER_GUILD_SETTINGS_GUILD_UPDATE: G,
  USER_SETTINGS_PROTO_UPDATE: function(e) {
    var t;
    let {
      settings: n
    } = e;
    if (n.type !== U.UserSettingsTypes.PRELOADED_USER_SETTINGS) return !1;
    let l = null === (t = n.proto.guilds) || void 0 === t ? void 0 : t.guilds,
      i = !1;
    return null != l && g.default.keys(l).forEach(e => {
      let t = l[e].guildRecentsDismissedAt;
      null != t && (i = v.updateRecentsCategory(e) || i)
    }), i
  },
  VOICE_CATEGORY_COLLAPSE: V,
  VOICE_CATEGORY_EXPAND: V,
  VOICE_CHANNEL_SELECT: y,
  VOICE_CHANNEL_STATUS_UPDATE: function(e) {
    return v.nonPositionalChannelIdUpdate(e.id)
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e, n = y(), l = new Set;
    for (let {
        channelId: e,
        oldChannelId: i
      }
      of t) null != i && !l.has(i) && (v.nonPositionalChannelIdUpdate(i) && (n = !0), l.add(i)), null != e && !l.has(e) && (v.nonPositionalChannelIdUpdate(e) && (n = !0), l.add(e));
    return n
  },
  WINDOW_FOCUS: H
})