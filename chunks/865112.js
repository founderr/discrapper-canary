n.d(t, {
  RB: function() {
    return R
  },
  VH: function() {
    return g
  },
  Vi: function() {
    return M
  },
  Vu: function() {
    return x
  },
  q7: function() {
    return O
  }
});
var s, i, l, a, r = n(692547),
  o = n(497089),
  c = n(650473),
  u = n(389765),
  d = n(137492),
  E = n(387661),
  _ = n(659953),
  I = n(319707),
  T = n(584914),
  N = n(334702),
  m = n(333722),
  h = n(549931),
  C = n(178561),
  S = n(39863),
  A = n(130312);
(s = l || (l = {})).CHECKED = "CHECKED", s.FRIENDS = "FRIENDS", s.SHARE_SCREEN = "SHARE_SCREEN", s.NEW_MESSAGE = "NEW_MESSAGE";
let p = {
  CHECKED: E,
  FRIENDS: I,
  SHARE_SCREEN: S,
  NEW_MESSAGE: h
};
(i = a || (a = {})).MISSED_MESSAGES = "MISSED_MESSAGES", i.FRIEND_REQUEST_REMINDER = "FRIEND_REQUEST_REMINDER", i.SCHEDULED_GUILD_EVENT = "SCHEDULED_GUILD_EVENT", i.TOP_MESSAGES = "TOP_MESSAGES", i.NOTIFICATION_CENTER = "NOTIFICATION_CENTER", i.UPDATE_PROFILE = "UPDATE_PROFILE", i.FIND_FRIENDS = "FIND_FRIENDS", i.ADD_FRIEND = "ADD_FRIEND", i.FIRST_MESSAGE = "FIRST_MESSAGE";
let g = {
    MISSED_MESSAGES: m,
    FRIEND_REQUEST_REMINDER: T,
    SCHEDULED_GUILD_EVENT: _,
    TOP_MESSAGES: N,
    NOTIFICATION_CENTER: d,
    UPDATE_PROFILE: A,
    FIND_FRIENDS: u,
    ADD_FRIEND: u,
    FIRST_MESSAGE: C
  },
  f = e => {
    switch (e.item_enum) {
      case o.AM.ADD_FRIEND:
        return "ADD_FRIEND";
      case o.AM.FIND_FRIENDS:
        return "FIND_FRIENDS";
      case o.AM.FIRST_MESSAGE:
        return "FIRST_MESSAGE";
      case o.AM.UPDATE_PROFILE:
        return "UPDATE_PROFILE";
      default:
        return "NOTIFICATION_CENTER"
    }
  },
  O = e => {
    switch (e.type) {
      case "lifecycle_item":
        return f(e);
      case "missed_messages":
        return "MISSED_MESSAGES";
      case "friend_request_reminder":
        return "FRIEND_REQUEST_REMINDER";
      case "scheduled_guild_event_started":
        return "SCHEDULED_GUILD_EVENT";
      case "top_messages":
        return "TOP_MESSAGES";
      default:
        return "NOTIFICATION_CENTER"
    }
  },
  R = e => {
    if ("icHighlight" === e) return "TOP_MESSAGES";
    return "NOTIFICATION_CENTER"
  },
  M = e => {
    switch (e) {
      case o.DY.GO_LIVE_PUSH:
        return {
          icon: p.SHARE_SCREEN, color: r.Z.colors.BACKGROUND_ACCENT
        };
      case o.DY.FRIEND_REQUEST_ACCEPTED:
        return {
          icon: p.CHECKED, color: r.Z.colors.STATUS_POSITIVE_BACKGROUND
        };
      case o.DY.FRIEND_REQUEST_PENDING:
      case o.DY.FRIEND_SUGGESTION_CREATED:
        return {
          icon: p.FRIENDS, color: r.Z.colors.BACKGROUND_ACCENT
        };
      case o.DY.DM_FRIEND_NUDGE:
        return {
          icon: p.NEW_MESSAGE, color: r.Z.colors.BACKGROUND_ACCENT
        };
      case o.O7.INCOMING_FRIEND_REQUESTS:
      case o.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED:
        return {
          icon: p.FRIENDS, color: r.Z.colors.BACKGROUND_ACCENT
        };
      default:
        return null
    }
  },
  x = e => {
    switch (e.item_enum) {
      case o.AM.UPDATE_PROFILE:
        return c.Y9;
      case o.AM.ADD_FRIEND:
      case o.AM.FIND_FRIENDS:
        return c.AZ;
      case o.AM.FIRST_MESSAGE:
        return c.bj;
      default:
        return r.Z.unsafe_rawColors.BRAND_500.css
    }
  }