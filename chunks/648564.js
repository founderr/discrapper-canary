"use strict";
n.r(t), n.d(t, {
  DEFAULT_AUTO_ARCHIVE_DURATION: function() {
    return s
  },
  MAX_THREAD_MESSAGE_COUNT_OLD: function() {
    return E
  },
  MAX_THREAD_MESSAGE_COUNT: function() {
    return _
  },
  MAX_THREAD_MEMBERS_PREVIEW: function() {
    return c
  },
  MAX_THREAD_UNREAD_MESSAGE_COUNT: function() {
    return d
  },
  ThreadMemberFlags: function() {
    return T
  },
  OpenThreadAnalyticsLocations: function() {
    return r
  },
  getThreadNotificationOptions: function() {
    return A
  },
  ThreadSortOrderReadableForAnalytics: function() {
    return i
  },
  FORUM_POST_CREATION_UPLOAD_ERRORS: function() {
    return I
  },
  FORUM_POST_CREATION_AUTOMOD_ERRORS: function() {
    return S
  }
}), n("222007");
var r, i, o, l, u = n("49111"),
  a = n("782340");
let s = 4320,
  E = 50,
  _ = 1e5,
  c = 50,
  d = 25,
  T = {
    HAS_INTERACTED: 1,
    ALL_MESSAGES: 2,
    ONLY_MENTIONS: 4,
    NO_MESSAGES: 8
  };

function A() {
  return [{
    setting: T.ALL_MESSAGES,
    label: a.default.Messages.FORM_LABEL_ALL_MESSAGES
  }, {
    setting: T.ONLY_MENTIONS,
    label: a.default.Messages.FORM_LABEL_ONLY_MENTIONS.format()
  }, {
    setting: T.NO_MESSAGES,
    label: a.default.Messages.FORM_LABEL_NOTHING
  }]
}(o = r || (r = {})).EMBED = "Embed", o.BROWSER = "Thread Browser", o.POPOUT = "Active Threads Popout", o.CHANNEL_LIST = "Channel List", o.GUILD_ACTIVE_THREADS_MODAL = "Guild Active Threads Modal", o.INBOX = "Inbox", o.FORUM = "Forum", o.VOICE_AUTO_OPEN = "Voice Auto Open", (l = i || (i = {})).LATEST_ACTIVITY = "Last Message", l.CREATION_DATE = "Creation";
let I = new Set([u.AbortCodes.TOO_MANY_ATTACHMENTS, u.AbortCodes.EXPLICIT_CONTENT, u.AbortCodes.ENTITY_TOO_LARGE]),
  S = new Set([u.AbortCodes.AUTOMOD_MESSAGE_BLOCKED, u.AbortCodes.AUTOMOD_TITLE_BLOCKED])