"use strict";
n.r(t), n.d(t, {
  FOR_YOU_ICONS: function() {
    return C
  },
  getBackground: function() {
    return M
  },
  getIcon: function() {
    return v
  },
  getIconByName: function() {
    return x
  },
  getMask: function() {
    return R
  }
});
var a, l, s, i, r = n("692547"),
  o = n("497089"),
  u = n("650473"),
  d = n("389765"),
  c = n("137492"),
  f = n("387661"),
  h = n("659953"),
  E = n("319707"),
  m = n("584914"),
  p = n("334702"),
  S = n("333722"),
  g = n("549931"),
  _ = n("178561"),
  N = n("39863"),
  I = n("130312");
(a = s || (s = {})).CHECKED = "CHECKED", a.FRIENDS = "FRIENDS", a.SHARE_SCREEN = "SHARE_SCREEN", a.NEW_MESSAGE = "NEW_MESSAGE";
let T = {
  CHECKED: f,
  FRIENDS: E,
  SHARE_SCREEN: N,
  NEW_MESSAGE: g
};
(l = i || (i = {})).MISSED_MESSAGES = "MISSED_MESSAGES", l.FRIEND_REQUEST_REMINDER = "FRIEND_REQUEST_REMINDER", l.SCHEDULED_GUILD_EVENT = "SCHEDULED_GUILD_EVENT", l.TOP_MESSAGES = "TOP_MESSAGES", l.NOTIFICATION_CENTER = "NOTIFICATION_CENTER", l.UPDATE_PROFILE = "UPDATE_PROFILE", l.FIND_FRIENDS = "FIND_FRIENDS", l.ADD_FRIEND = "ADD_FRIEND", l.FIRST_MESSAGE = "FIRST_MESSAGE";
let C = {
    MISSED_MESSAGES: S,
    FRIEND_REQUEST_REMINDER: m,
    SCHEDULED_GUILD_EVENT: h,
    TOP_MESSAGES: p,
    NOTIFICATION_CENTER: c,
    UPDATE_PROFILE: I,
    FIND_FRIENDS: d,
    ADD_FRIEND: d,
    FIRST_MESSAGE: _
  },
  A = e => {
    switch (e.item_enum) {
      case o.ItemEnum.ADD_FRIEND:
        return "ADD_FRIEND";
      case o.ItemEnum.FIND_FRIENDS:
        return "FIND_FRIENDS";
      case o.ItemEnum.FIRST_MESSAGE:
        return "FIRST_MESSAGE";
      case o.ItemEnum.UPDATE_PROFILE:
        return "UPDATE_PROFILE";
      default:
        return "NOTIFICATION_CENTER"
    }
  },
  v = e => {
    switch (e.type) {
      case "lifecycle_item":
        return A(e);
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
  x = e => {
    if ("icHighlight" === e) return "TOP_MESSAGES";
    return "NOTIFICATION_CENTER"
  },
  R = e => {
    switch (e) {
      case o.NotificationCenterItems.GO_LIVE_PUSH:
        return {
          icon: T.SHARE_SCREEN, color: r.default.colors.BACKGROUND_ACCENT
        };
      case o.NotificationCenterItems.FRIEND_REQUEST_ACCEPTED:
        return {
          icon: T.CHECKED, color: r.default.colors.STATUS_POSITIVE_BACKGROUND
        };
      case o.NotificationCenterItems.FRIEND_REQUEST_PENDING:
      case o.NotificationCenterItems.FRIEND_SUGGESTION_CREATED:
        return {
          icon: T.FRIENDS, color: r.default.colors.BACKGROUND_ACCENT
        };
      case o.NotificationCenterItems.DM_FRIEND_NUDGE:
        return {
          icon: T.NEW_MESSAGE, color: r.default.colors.BACKGROUND_ACCENT
        };
      case o.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS:
      case o.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED:
        return {
          icon: T.FRIENDS, color: r.default.colors.BACKGROUND_ACCENT
        };
      default:
        return null
    }
  },
  M = e => {
    switch (e.item_enum) {
      case o.ItemEnum.UPDATE_PROFILE:
        return u.PROFILE_BACKGROUND;
      case o.ItemEnum.ADD_FRIEND:
      case o.ItemEnum.FIND_FRIENDS:
        return u.FRIEND_BACKGROUND;
      case o.ItemEnum.FIRST_MESSAGE:
        return u.MESSAGE_BACKGROUND;
      default:
        return r.default.unsafe_rawColors.BRAND_500.css
    }
  }