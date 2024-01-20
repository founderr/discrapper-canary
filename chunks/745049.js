"use strict";
n.r(t), n.d(t, {
  GUILD_EVENT_MAX_DESCRIPTION_LENGTH: function() {
    return v
  },
  MAX_EVENT_LOCATION_LENGTH: function() {
    return S
  },
  ANALYTICS_GUILD_EVENTS_MODAL_NAME: function() {
    return T
  },
  FAKE_EVENT_ID: function() {
    return I
  },
  GuildScheduledEventStatus: function() {
    return i
  },
  GuildScheduledEventStatusDone: function() {
    return C
  },
  GuildScheduledEventEntityTypes: function() {
    return s
  },
  GuildScheduledEventNotificationTypes: function() {
    return r
  },
  GuildScheduledEventPrivacyLevel: function() {
    return a
  },
  EntityChannelTypes: function() {
    return A
  },
  ENTITY_TYPES_REQUIRED_ENTITY_METADATA: function() {
    return y
  },
  ENTITY_TYPES_REQUIRED_CHANNEL_ID: function() {
    return N
  },
  EventDetailSections: function() {
    return o
  },
  MAX_RSVP_USER_DISPLAY_COUNT: function() {
    return R
  },
  NEW_EVENT_WINDOW_MILLISECONDS: function() {
    return O
  },
  EVENT_STARTING_SOON_WINDOW_MILLISECONDS: function() {
    return D
  },
  ACKED_RECENTLY_WINDOW_DAYS: function() {
    return P
  },
  UpcomingGuildEventNoticeTypes: function() {
    return l
  },
  GuildScheduledEventUserResponses: function() {
    return u
  }
}), n("222007");
var i, s, r, a, o, l, u, d, c, f, _, h, g, m, E = n("718517"),
  p = n("49111");
let v = 1e3,
  S = 100,
  T = "Guild Events Modal",
  I = "-1";
(d = i || (i = {}))[d.SCHEDULED = 1] = "SCHEDULED", d[d.ACTIVE = 2] = "ACTIVE", d[d.COMPLETED = 3] = "COMPLETED", d[d.CANCELED = 4] = "CANCELED";
let C = new Set([3, 4]);
(c = s || (s = {}))[c.NONE = 0] = "NONE", c[c.STAGE_INSTANCE = 1] = "STAGE_INSTANCE", c[c.VOICE = 2] = "VOICE", c[c.EXTERNAL = 3] = "EXTERNAL", (f = r || (r = {}))[f.EVENT_START = 1] = "EVENT_START", (_ = a || (a = {}))[_.PUBLIC = 1] = "PUBLIC", _[_.GUILD_ONLY = 2] = "GUILD_ONLY";
let A = {
    1: p.ChannelTypes.GUILD_STAGE_VOICE,
    2: p.ChannelTypes.GUILD_VOICE
  },
  y = new Set([3]),
  N = new Set([1, 2]);
(h = o || (o = {}))[h.EVENT_INFO = 0] = "EVENT_INFO", h[h.RSVP_LIST = 1] = "RSVP_LIST";
let R = 100,
  O = 2 * E.default.Millis.DAY,
  D = 12 * E.default.Millis.HOUR,
  P = 4;
(g = l || (l = {})).NEW_EVENT = "Upcoming Event Notice", g.EVENT_STARTING_SOON = "Event Starting Soon Notice", (m = u || (u = {}))[m.UNINTERESTED = 0] = "UNINTERESTED", m[m.INTERESTED = 1] = "INTERESTED"