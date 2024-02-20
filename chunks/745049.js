"use strict";
n.r(t), n.d(t, {
  GUILD_EVENT_MAX_DESCRIPTION_LENGTH: function() {
    return g
  },
  MAX_EVENT_LOCATION_LENGTH: function() {
    return T
  },
  ANALYTICS_GUILD_EVENTS_MODAL_NAME: function() {
    return I
  },
  FAKE_EVENT_ID: function() {
    return v
  },
  GuildScheduledEventStatus: function() {
    return i
  },
  GuildScheduledEventStatusDone: function() {
    return C
  },
  GuildScheduledEventEntityTypes: function() {
    return r
  },
  GuildScheduledEventNotificationTypes: function() {
    return s
  },
  GuildScheduledEventPrivacyLevel: function() {
    return a
  },
  EntityChannelTypes: function() {
    return A
  },
  ENTITY_TYPES_REQUIRED_ENTITY_METADATA: function() {
    return R
  },
  ENTITY_TYPES_REQUIRED_CHANNEL_ID: function() {
    return N
  },
  EventDetailSections: function() {
    return o
  },
  MAX_RSVP_USER_DISPLAY_COUNT: function() {
    return y
  },
  NEW_EVENT_WINDOW_MILLISECONDS: function() {
    return O
  },
  EVENT_STARTING_SOON_WINDOW_MILLISECONDS: function() {
    return D
  },
  ACKED_RECENTLY_WINDOW_DAYS: function() {
    return b
  },
  UpcomingGuildEventNoticeTypes: function() {
    return l
  },
  GuildScheduledEventUserResponses: function() {
    return u
  }
}), n("222007");
var i, r, s, a, o, l, u, c, d, p, h, f, E, _, m = n("718517"),
  S = n("49111");
let g = 1e3,
  T = 100,
  I = "Guild Events Modal",
  v = "-1";
(c = i || (i = {}))[c.SCHEDULED = 1] = "SCHEDULED", c[c.ACTIVE = 2] = "ACTIVE", c[c.COMPLETED = 3] = "COMPLETED", c[c.CANCELED = 4] = "CANCELED";
let C = new Set([3, 4]);
(d = r || (r = {}))[d.NONE = 0] = "NONE", d[d.STAGE_INSTANCE = 1] = "STAGE_INSTANCE", d[d.VOICE = 2] = "VOICE", d[d.EXTERNAL = 3] = "EXTERNAL", (p = s || (s = {}))[p.EVENT_START = 1] = "EVENT_START", (h = a || (a = {}))[h.PUBLIC = 1] = "PUBLIC", h[h.GUILD_ONLY = 2] = "GUILD_ONLY";
let A = {
    1: S.ChannelTypes.GUILD_STAGE_VOICE,
    2: S.ChannelTypes.GUILD_VOICE
  },
  R = new Set([3]),
  N = new Set([1, 2]);
(f = o || (o = {}))[f.EVENT_INFO = 0] = "EVENT_INFO", f[f.RSVP_LIST = 1] = "RSVP_LIST";
let y = 100,
  O = 2 * m.default.Millis.DAY,
  D = 12 * m.default.Millis.HOUR,
  b = 4;
(E = l || (l = {})).NEW_EVENT = "Upcoming Event Notice", E.EVENT_STARTING_SOON = "Event Starting Soon Notice", (_ = u || (u = {}))[_.UNINTERESTED = 0] = "UNINTERESTED", _[_.INTERESTED = 1] = "INTERESTED"